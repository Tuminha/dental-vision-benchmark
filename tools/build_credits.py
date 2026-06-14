"""Generate CREDITS.md with proper per-image attribution.

Creative Commons BY / BY-SA images require attribution. This reads the image
sources from data/items.json, fetches the author and license from the Wikimedia
Commons API, and writes a CREDITS.md table. Run after changing the image set.
"""
from __future__ import annotations

import json
import re
import urllib.parse
import urllib.request
from pathlib import Path

API = "https://commons.wikimedia.org/w/api.php"
UA = "dental-vision-benchmark/0.2 (research; cisco@periospot.com)"
ROOT = Path(__file__).resolve().parents[1]


def strip_html(s: str) -> str:
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", s or "")).strip()


def fetch(titles: list[str]) -> dict[str, dict]:
    params = {"action": "query", "format": "json", "prop": "imageinfo",
              "iiprop": "extmetadata|url", "titles": "|".join(titles)}
    req = urllib.request.Request(f"{API}?{urllib.parse.urlencode(params)}", headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        data = json.load(r)
    out = {}
    for p in (data.get("query") or {}).get("pages", {}).values():
        ext = ((p.get("imageinfo") or [{}])[0]).get("extmetadata") or {}
        out[p.get("title", "")] = {
            "artist": strip_html((ext.get("Artist") or {}).get("value", "")) or "see source page",
            "license": strip_html((ext.get("LicenseShortName") or {}).get("value", "")),
        }
    return out


def main() -> None:
    items = json.loads((ROOT / "data/items.json").read_text())["items"]
    # Unique File: titles (skip derived/control entries).
    titles, meta_by_item = [], {}
    for it in items:
        t = it["source"]["title"]
        if t.startswith("File:"):
            titles.append(t)
    info = fetch(sorted(set(titles)))

    lines = [
        "# Image Credits",
        "",
        "Every dental image in `data/images/` is a third-party work used under an open",
        "license. The benchmark CODE is MIT (see `LICENSE`); the IMAGES remain under the",
        "licenses below. Attribution is provided as required by Creative Commons.",
        "",
        "| Local file | Source (Wikimedia Commons) | Author | License |",
        "|---|---|---|---|",
    ]
    seen = set()
    for it in items:
        src = it["source"]
        key = src["url"]
        if key in seen:
            continue
        seen.add(key)
        m = info.get(src["title"], {})
        author = m.get("artist") or src.get("attribution", "see source page")
        lic = m.get("license") or src.get("license", "")
        local = Path(it["image"]).name
        lines.append(f"| `{local}` | [{src['title']}]({src['url']}) | {author} | {lic} |")

    (ROOT / "CREDITS.md").write_text("\n".join(lines) + "\n")
    print(f"wrote CREDITS.md with {len(seen)} sources")


if __name__ == "__main__":
    main()
