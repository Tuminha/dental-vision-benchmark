"""Fetch a larger, bucket-balanced pool of candidate dental images for review.

Searches Wikimedia Commons across buckets, keeps openly-licensed images with a
description, downloads and downscales them (so the repo stays light), and writes a
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
PER_BUCKET = 5
MAXW = 380

BUCKETS = {
    "anatomy": ["tooth anatomy diagram", "primary deciduous teeth diagram", "tooth morphology cusp diagram", "periodontium anatomy diagram"],
    "perio": ["periodontitis diagram", "gingival recession diagram", "periodontal pocket probing diagram", "healthy gingiva diagram"],
    "caries": ["dental caries classification diagram", "smooth surface caries diagram", "rampant caries", "caries stages diagram"],
    "implant": ["dental implant components diagram", "implant abutment crown diagram", "peri-implantitis diagram", "implant bone diagram"],
    "endo": ["root canal treatment diagram", "periapical abscess diagram", "pulp anatomy diagram", "endodontic diagram"],
    "ortho": ["malocclusion class diagram", "dental crossbite diagram", "overbite overjet diagram", "teeth crowding diagram"],
    "pathology": ["oral leukoplakia", "oral candidiasis mouth", "geographic tongue", "gingival hyperplasia"],
    "clinical_photo": ["intraoral photograph dentition", "dental plaque disclosing", "tooth staining discoloration", "edentulous mouth"],
    "restorative": ["amalgam filling tooth diagram", "composite restoration diagram", "dental crown preparation diagram", "dental bridge diagram"],
    "eruption": ["tooth eruption sequence diagram", "mixed dentition diagram"],
}


def strip(s: str) -> str:
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", s or "")).strip()


def ok_license(l: str) -> bool:
    l = l.lower()
    return any(k in l for k in ["cc by", "cc0", "public domain", "attribution", "cc-by"])


def search(q: str, limit: int = 5) -> list[dict]:
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
        desc = strip((ext.get("ImageDescription") or {}).get("value", ""))
        if not thumb or not ok_license(lic) or not desc:
            continue
        out.append({"title": p.get("title"), "license": lic, "thumburl": thumb,
                    "descurl": ii.get("descriptionurl") or ii.get("url"), "desc": desc[:90]})
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
