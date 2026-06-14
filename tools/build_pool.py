"""Fetch a large, bucket-balanced pool of candidate dental images for review.

Searches Wikimedia Commons across many dental subtopics, keeps openly-licensed
images that pass a dental-relevance filter, downloads and downscales them, and
writes a manifest into curation/round3/ for the click-to-review widget. Excludes
everything already in data/items.json plus a few previously-rejected files.
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
OUT = ROOT / "curation/round3"
PER_BUCKET = 3
MAXW = 380

BUCKETS = {
    "endo": ["root canal obturation gutta percha", "pulp stone diagram", "internal root resorption tooth", "pulp capping diagram"],
    "perio_surgery": ["free gingival graft diagram", "periodontal flap surgery diagram", "connective tissue graft dental", "vertical bone defect periodontal"],
    "implant_surgery": ["dental implant placement diagram", "all-on-4 dental implants", "implant overdenture diagram", "ridge augmentation dental"],
    "discoloration": ["tetracycline tooth staining", "black stain teeth children", "intrinsic tooth discoloration", "amalgam tattoo gingiva"],
    "developmental_anomaly": ["dens invaginatus tooth", "talon cusp tooth", "taurodontism tooth", "fusion gemination teeth"],
    "missing_extra_teeth": ["mesiodens supernumerary tooth", "hypodontia missing teeth", "hyperdontia extra teeth", "natal teeth newborn"],
    "oral_lesions": ["oral fibroma mouth", "oral papilloma mouth", "pyogenic granuloma gingiva", "oral melanotic macule"],
    "vesiculobullous": ["mucous membrane pemphigoid oral", "pemphigus vulgaris oral", "aphthous major ulcer mouth", "erythema multiforme lips"],
    "tori_exostoses": ["torus palatinus", "mandibular tori", "buccal exostosis dental"],
    "caries_types": ["interproximal caries tooth", "secondary recurrent caries", "cervical caries tooth", "arrested caries"],
    "restorative2": ["dental fissure sealant", "glass ionomer restoration tooth", "stainless steel crown pediatric tooth", "dental bonding tooth"],
    "tooth_wear2": ["dental erosion teeth", "bruxism attrition teeth", "abfraction cervical lesion tooth"],
    "ortho_appliance": ["dental braces brackets teeth", "clear aligner teeth", "orthodontic retainer teeth", "palatal expander dental"],
    "ortho_problem": ["dental diastema midline gap", "class III malocclusion teeth", "dental crowding teeth", "deep overbite teeth"],
    "occlusion_anatomy": ["curve of Spee dental diagram", "periodontal ligament fibers diagram", "gingival fibers diagram", "dental occlusion diagram"],
    "prostho2": ["complete denture teeth", "removable partial denture clasp", "dental bridge pontic diagram", "dental post core diagram"],
    "mucosal2": ["denture stomatitis palate", "median rhomboid glossitis tongue", "oral hairy leukoplakia tongue", "nicotinic stomatitis palate"],
    "salivary_tmj2": ["ranula floor of mouth", "mucocele lower lip", "temporomandibular joint disc diagram", "sialadenitis salivary gland"],
    "pediatric": ["pulpotomy primary tooth", "space maintainer dental", "early childhood caries baby teeth", "fluoride varnish teeth"],
    "gingiva2": ["drug induced gingival hyperplasia", "frenum attachment mouth diagram", "gingival recession tooth", "attached gingiva diagram"],
    "anatomy2": ["dentinal tubules diagram", "cementum tooth diagram", "deciduous teeth eruption chart", "tooth eruption ages diagram"],
    "perio_classification": ["furcation involvement diagram", "horizontal vertical bone loss periodontal", "tooth mobility periodontal", "periodontal probing diagram"],
    "abscess": ["periapical abscess tooth diagram", "periodontal abscess gum", "dental sinus tract gum"],
    "crack": ["cracked tooth diagram", "enamel crack tooth", "tooth crown fracture classification"],
}

DENTAL_TERMS = ["dental", "dentit", "dentin", "tooth", "teeth", "gingiv", "periodont", "perio", "caries", "carious",
                "enamel", "pulp", "oral", "mouth", "implant", "occlus", "malocclus", "plaque", "calculus",
                "leukoplakia", "erythroplakia", "candidias", "endodont", "molar", "incisor", "premolar",
                "root canal", "amalgam", "denture", "gum", "gums", "recession", "abscess", "fluorosis",
                "abrasion", "erosion", "attrition", "abfraction", "restoration", "filling", "crown", "abutment",
                "tongue", "palate", "jaw", "mandib", "maxilla", "salivary", "temporomandibular", "tmj",
                "frenum", "veneer", "bridge", "lip", "cheilitis", "herpes", "lichen planus", "fracture",
                "avulsion", "luxation", "eruption", "furcation", "mucocele", "hypoplasia", "amelogenesis",
                "supernumerary", "sialolith", "ankyloglossia", "vestibule", "alveolar", "cementum",
                "sealant", "bracket", "aligner", "retainer", "clasp", "graft", "flap", "resorption",
                "obturation", "gutta", "pulpotomy", "fluoride", "diastema", "bruxism", "torus", "tori",
                "glossitis", "stomatitis", "fibroma", "papilloma", "granuloma", "ranula", "pemphig",
                "exostosis", "mesiodens", "taurodont", "invaginatus", "talon", "dilaceration", "pontic"]
BLOCK_TERMS = ["whale", "dinosaur", "brachiosaur", "argyrosaur", "bolosaur", "titanosaur", "sauropod",
               "holotype", "fossil", "reptile", "skeletal restoration", "composite skeletal", "scale diagram",
               "logo", "brand mark", "trademark", "leaf morphology", "plant systematics", "horse", "equine",
               "apert", "human skeleton", "air force", "us navy", "canine gingivitis", "teaching in",
               "live surgeries", "snake", "shark", "comb", "gear", "saw blade", "fracture rates",
               "syndrome facial", "deardorff"]
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
