"""Fetch a larger, bucket-balanced pool of candidate dental images for review.

Searches Wikimedia Commons across buckets, keeps openly-licensed images that pass a
dental-relevance filter (raw keyword search drags in dinosaurs/whales/logos via words
like "composite" or "disclosing"), downloads and downscales them, and writes a
manifest. These land in curation/batch2/ for the click-to-review widget; only the
ones you keep get promoted into data/images/.
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
OUT = ROOT / "curation/batch2"
PER_BUCKET = 7
MAXW = 380

BUCKETS = {
    "anatomy": ["tooth anatomy diagram", "primary deciduous teeth diagram", "tooth morphology diagram", "periodontium anatomy diagram", "dental arch teeth diagram"],
    "perio": ["periodontitis diagram", "gingival recession diagram", "periodontal pocket diagram", "healthy gingiva diagram", "gingivitis teeth"],
    "caries": ["dental caries classification diagram", "smooth surface caries diagram", "occlusal caries diagram", "caries stages diagram", "tooth decay diagram"],
    "implant": ["dental implant diagram", "dental implant abutment crown", "peri-implantitis diagram", "osseointegration implant"],
    "endo": ["root canal treatment diagram", "periapical abscess diagram", "tooth pulp anatomy diagram", "endodontic therapy molar"],
    "ortho": ["malocclusion diagram teeth", "dental crossbite", "overbite overjet diagram", "teeth crowding malocclusion"],
    "pathology": ["oral leukoplakia mouth", "oral candidiasis mouth", "geographic tongue", "gingival hyperplasia mouth"],
    "clinical_photo": ["intraoral photograph teeth gingiva", "dental plaque disclosing teeth", "tooth staining discoloration teeth", "dental calculus teeth"],
    "restorative": ["dental amalgam filling tooth", "dental composite filling tooth", "dental crown preparation tooth", "dental inlay onlay tooth"],
    "eruption": ["tooth eruption sequence diagram", "mixed dentition teeth diagram"],
}

DENTAL_TERMS = ["dental", "dentit", "dentin", "tooth", "teeth", "gingiv", "periodont", "perio", "caries", "carious",
                "enamel", "pulp", "oral", "mouth", "implant", "occlus", "malocclus", "plaque", "calculus",
                "leukoplakia", "erythroplakia", "candidias", "endodont", "molar", "incisor", "premolar",
                "root canal", "amalgam", "denture", "gum", "gums", "recession", "abscess", "fluorosis",
                "abrasion", "erosion", "attrition", "restoration", "filling", "crown", "abutment"]
BLOCK_TERMS = ["whale", "dinosaur", "brachiosaur", "argyrosaur", "bolosaur", "titanosaur", "sauropod",
               "holotype", "fossil", "reptile", "skeletal restoration", "composite skeletal", "scale diagram",
               "logo", "brand mark", "trademark",
               # off-topic matches that share a dental word (leaf "tooth", animal dentition, scene photos)
               "leaf morphology", "plant systematics", "horse", "equine", "apert", "human skeleton",
               "air force", "us navy", "canine gingivitis", "teaching in", "live surgeries"]


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
    d = json.load(urllib.request.urlopen(req, timeout=30))
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
    exclude = set()
    cj = ROOT / "data/candidates.json"
    if cj.exists():
        exclude |= {c["title"] for c in json.loads(cj.read_text())}
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
