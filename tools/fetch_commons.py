"""Find openly-licensed dental diagram images on Wikimedia Commons.

Prints candidates (filename, license, short description, direct URL) so a human
can pick clean, redistributable images for the benchmark. Read-only: only hits
the public Commons API. Nothing is downloaded here.
"""
from __future__ import annotations

import json
import re
import sys
import urllib.parse
import urllib.request

API = "https://commons.wikimedia.org/w/api.php"
UA = "dental-vision-benchmark/0.1 (research; contact: cisco@periospot.com)"

QUERIES = [
    "dental caries diagram",
    "dental implant cross section",
    "panoramic radiograph teeth",
    "human permanent teeth diagram",
    "dental amalgam composite filling diagram",
    "gingivitis healthy gingiva diagram",
]


def strip_html(s: str) -> str:
    s = re.sub(r"<[^>]+>", " ", s or "")
    s = re.sub(r"\s+", " ", s)
    return s.strip()


def search(query: str, limit: int = 4) -> list[dict]:
    params = {
        "action": "query",
        "format": "json",
        "generator": "search",
        "gsrsearch": f"{query} filetype:bitmap|drawing",
        "gsrnamespace": "6",          # File: namespace
        "gsrlimit": str(limit),
        "prop": "imageinfo",
        "iiprop": "url|extmetadata|mime|size",
        "iiurlwidth": "1024",
    }
    url = f"{API}?{urllib.parse.urlencode(params)}"
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        data = json.load(r)
    out = []
    pages = (data.get("query") or {}).get("pages") or {}
    for p in pages.values():
        ii = (p.get("imageinfo") or [{}])[0]
        ext = ii.get("extmetadata") or {}
        out.append({
            "title": p.get("title"),
            "license": strip_html((ext.get("LicenseShortName") or {}).get("value", "")),
            "mime": ii.get("mime"),
            "width": ii.get("width"),
            "height": ii.get("height"),
            "thumburl": ii.get("thumburl"),
            "url": ii.get("url"),
            "desc": strip_html((ext.get("ImageDescription") or {}).get("value", ""))[:220],
        })
    return out


def main() -> None:
    for q in QUERIES:
        print(f"\n========== QUERY: {q} ==========")
        try:
            for c in search(q):
                print(f"- {c['title']}")
                print(f"    license: {c['license']}  | {c['mime']} {c['width']}x{c['height']}")
                print(f"    desc: {c['desc']}")
                print(f"    img : {c['thumburl'] or c['url']}")
        except Exception as e:  # noqa: BLE001
            print(f"  ERROR: {e}", file=sys.stderr)


if __name__ == "__main__":
    main()
