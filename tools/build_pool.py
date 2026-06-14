"""Fetch a large, bucket-balanced pool of candidate dental images for review.

Searches Wikimedia Commons across many dental subtopics, keeps openly-licensed
images that pass a dental-relevance filter, downloads and downscales them, and
writes a manifest. These land in curation/round2/ for the click-to-review widget;
only the ones you keep get promoted into data/images/. Excludes everything already
in data/items.json plus a few previously-rejected files.
"""
from __future__ import annotations

import io
import json
import re
import sys
import urllib.parse
import urllib.request
from pathlib import Path

from PIL import Image

API = "https://commons.wikimedia.org/w/api.php"
UA = "dental-vision-benchmark/0.2 (research; cisco@periospot.com)"
ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "curation/round2"
PER_BUCKET = 4
MAXW = 380

BUCKETS = {
    "anatomy": ["tooth morphology diagram", "dental arch quadrants diagram", "tooth surfaces diagram"],
    "perio_disease": ["periodontal furcation diagram", "gingival enlargement mouth", "necrotizing ulcerative gingivitis", "periodontal abscess"],
    "caries_stages": ["occlusal caries diagram", "root caries tooth", "rampant caries teeth", "early childhood caries"],
    "tooth_wear": ["dental abrasion tooth", "dental erosion teeth", "dental attrition wear", "abfraction tooth"],
    "endo": ["periapical abscess diagram", "pulpitis tooth diagram", "apical periodontitis diagram", "pulp polyp tooth"],
    "ortho_occlusion": ["anterior crossbite teeth", "open bite malocclusion", "deep bite occlusion", "posterior crossbite"],
    "oral_pathology": ["oral lichen planus", "oral squamous cell carcinoma mouth", "oral leukoplakia tongue", "erythroplakia mouth"],
    "mucosal": ["oral candidiasis tongue", "herpes labialis lip", "angular cheilitis", "oral mucocele lip"],
    "developmental": ["dental fluorosis teeth", "enamel hypoplasia teeth", "amelogenesis imperfecta teeth", "supernumerary tooth"],
    "trauma": ["tooth fracture diagram", "dental crown fracture", "enamel fracture tooth", "tooth luxation diagram"],
    "prostho": ["dental crown types diagram", "dental bridge diagram", "dental veneer diagram", "post and core tooth"],
    "implant_surgery": ["dental sinus lift diagram", "dental bone graft diagram", "guided bone regeneration dental", "implant abutment diagram"],
    "restorative_classes": ["GV Black cavity classification", "dental inlay onlay diagram", "class II cavity preparation tooth", "dental composite layering"],
    "gingiva": ["healthy gingiva anatomy diagram", "attached gingiva mucogingival", "frenum frenectomy diagram", "gingival recession classification"],
    "calculus_plaque": ["dental calculus subgingival diagram", "dental biofilm plaque diagram", "supragingival calculus teeth"],
    "discoloration": ["tooth discoloration tetracycline", "intrinsic tooth staining teeth", "extrinsic tooth stain teeth"],
    "eruption": ["tooth eruption chart", "mixed dentition development diagram", "teething eruption sequence"],
    "tongue": ["geographic tongue", "fissured tongue", "black hairy tongue", "ankyloglossia tongue tie"],
    "tmj_salivary": ["temporomandibular joint anatomy diagram", "TMJ disc displacement diagram", "salivary gland anatomy mouth", "sialolith salivary stone"],
    "perio_health": ["periodontal probing depth diagram", "clinical attachment level diagram", "bleeding on probing gingiva"],
    "restoration_photo": ["composite filling tooth", "dental veneers teeth", "dental crown cemented tooth"],
}

DENTAL_TERMS = ["dental", "dentit", "dentin", "tooth", "teeth", "gingiv", "periodont", "perio", "caries", "carious",
                "enamel", "pulp", "oral", "mouth", "implant", "occlus", "malocclus", "plaque", "calculus",
                "leukoplakia", "erythroplakia", "candidias", "endodont", "molar", "incisor", "premolar",
                "root canal", "amalgam", "denture", "gum", "gums", "recession", "abscess", "fluorosis",
                "abrasion", "erosion", "attrition", "abfraction", "restoration", "filling", "crown", "abutment",
                "tongue", "palate", "jaw", "mandib", "maxilla", "salivary", "temporomandibular", "tmj",
                "frenum", "veneer", "bridge", "lip", "cheilitis", "herpes", "lichen planus", "fracture",
                "avulsion", "luxation", "eruption", "furcation", "mucocele", "hypoplasia", "amelogenesis",
                "supernumerary", "sialolith", "ankyloglossia", "vestibule", "alveolar", "cementum"]
BLOCK_TERMS = ["whale", "dinosaur", "brachiosaur", "argyrosaur", "bolosaur", "titanosaur", "sauropod",
               "holotype", "fossil", "reptile", "skeletal restoration", "composite skeletal", "scale diagram",
               "logo", "brand mark", "trademark", "leaf morphology", "plant systematics", "horse", "equine",
               "apert", "human skeleton", "air force", "us navy", "canine gingivitis", "teaching in",
               "live surgeries", "snake", "shark", "comb", "gear", "saw blade"]
EXTRA_EXCLUDE = {
    "File:Gum model.JPG", "File:Screw implant mandibular bone.jpg", "File:Screw implant mandibular bone at arrow.jpg",
    "File:Bladetype dental implant.jpg", "File:Human tongue infected with oral candidiasis.jpg", "File:Sarro.jpg",
    "File:Gipsabguss Gebiss.jpg", "File:Amalgam filling.JPG", "File:Amalgam filling hemi.jpg",
    "File:Dental Caries Pathogenesis .jpg", "File:30partialendo.JPG", "File:-30partialendo.JPG",
}


def strip(s: str) -> str:
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", s or "")).strip()


def ok_license(l: str) -> bool:
    l = l.lower()
    return any(k in l for k in ["cc by", "cc0", "public domain", "attribution", "cc-by"])


def relevant(title: str, desc: str) -> bool:
    blob = f"{title} {desc}".lower()
    return any(t in blob for t in DENTAL_TERMS) and not any(b in blob for b in BLOCK_TERMS)


def search(q: str, limit: int = 6) -> list[dict]:
    params = {"action": "query", "format": "json", "generator": "search",
              "gsrsearch": f"{q} filetype:bitmap|drawing", "gsrnamespace": "6", "gsrlimit": str(limit),
              "prop": "imageinfo", "iiprop": "url|extmetadata", "iiurlwidth": "700"}
    req = urllib.request.Request(f"{API}?{urllib.parse.urlencode(params)}", headers={"User-Agent": UA})
    try:
        d = json.load(urllib.request.urlopen(req, timeout=30))
    except Exception:  # noqa: BLE001
        return []
    out = []
    for p in (d.get("query") or {}).get("pages", {}).values():
        ii = (p.get("imageinfo") or [{}])[0]
        ext = ii.get("extmetadata") or {}
        lic = strip((ext.get("LicenseShortName") or {}).get("value", ""))
        thumb = ii.get("thumburl")
        title = p.get("title", "")
        desc = strip((ext.get("ImageDescription") or {}).get("value", ""))
        if not thumb or not ok_license(lic) or not relevant(title, desc):
            continue
        out.append({"title": title, "license": lic, "thumburl": thumb,
                    "descurl": ii.get("descriptionurl") or ii.get("url"),
                    "desc": (desc or re.sub(r"^File:|\.[a-z0-9]+$", "", title))[:90]})
    return out


def slug(title: str) -> str:
    s = re.sub(r"^File:", "", title)
    s = re.sub(r"\.[a-zA-Z0-9]+$", "", s)
    return re.sub(r"[^a-z0-9]+", "_", s.lower()).strip("_")[:48]


def save_downscaled(url: str, dst: Path) -> bool:
    try:
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        data = urllib.request.urlopen(req, timeout=40).read()
        im = Image.open(io.BytesIO(data)).convert("RGBA")
        bg = Image.new("RGB", im.size, (255, 255, 255))
        bg.paste(im, mask=im.split()[3])
        bg.thumbnail((MAXW, MAXW))
        bg.save(dst, "JPEG", quality=72)
        return True
    except Exception as e:  # noqa: BLE001
        print(f"  skip {dst.name}: {e}", file=sys.stderr)
        return False


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    exclude = set(EXTRA_EXCLUDE)
    for it in json.loads((ROOT / "data/items.json").read_text())["items"]:
        exclude.add(it["source"]["title"])

    manifest, seen = [], set()
    for bucket, queries in BUCKETS.items():
        kept = 0
        for q in queries:
            if kept >= PER_BUCKET:
                break
            for c in search(q):
                if kept >= PER_BUCKET:
                    break
                t = c["title"]
                if t in exclude or t in seen:
                    continue
                fn = slug(t) + ".jpg"
                if save_downscaled(c["thumburl"], OUT / fn):
                    seen.add(t)
                    manifest.append({"file": fn, "bucket": bucket, "license": c["license"],
                                     "title": t, "descurl": c["descurl"], "desc": c["desc"]})
                    kept += 1
    (OUT / "manifest.json").write_text(json.dumps(manifest, indent=1))
    print(f"pool: {len(manifest)} images across {len(BUCKETS)} buckets -> {OUT}")
    print(json.dumps(manifest))


if __name__ == "__main__":
    main()
