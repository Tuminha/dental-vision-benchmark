"""Harvest figures from a local (private) dental PDF library.

Searches an article folder for figure-rich clinical/implant/perio topics from
2006+, materializes each on demand (handles cloud online-only files), and extracts
figures via extract_figures.run(), accumulating data/private/figures_manifest.json.
The harvested figures live under data/private/ and are gitignored (never published);
this script is public and bakes in no personal path.

Point it at your library with the DENTAL_VISION_ARTICLES_DIR environment variable
(defaults to a gitignored in-repo data/private/source_pdfs). Usage:
    DENTAL_VISION_ARTICLES_DIR=~/path/to/pdfs python tools/harvest.py [N]
"""
from __future__ import annotations

import json
import os
import re
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "tools"))
from extract_figures import run  # noqa: E402

# Source PDF library. Set DENTAL_VISION_ARTICLES_DIR to your own folder; defaults
# to a gitignored in-repo location so no personal path is baked into this file.
DIR = Path(os.path.expanduser(
    os.environ.get("DENTAL_VISION_ARTICLES_DIR", str(ROOT / "data/private/source_pdfs"))))
PAPERS = ROOT / "data/private/papers"
PAPERS.mkdir(parents=True, exist_ok=True)
MAN = ROOT / "data/private/figures_manifest.json"

KW = ["immediate_implant", "socket", "ridge_preservation", "ridge_alteration", "connective_tissue",
      "soft_tissue", "guided_bone", "sinus_floor", "sinus_lift", "gingival_recession",
      "extraction_socket", "bone_graft", "peri-implant", "periimplant", "coverage", "papilla"]
YEAR = re.compile(r"20[0-2][0-9]")


def slugify(name: str) -> str:
    s = re.sub(r"\.pdf$", "", name, flags=re.I)
    return re.sub(r"[^a-z0-9]+", "_", s.lower())[:40].strip("_")


def main() -> None:
    N = int(sys.argv[1]) if len(sys.argv) > 1 else 14
    if not DIR.is_dir():
        print(f"Source dir not found: {DIR}\n"
              "Set DENTAL_VISION_ARTICLES_DIR to your local PDF library.")
        return
    done = {p.stem for p in PAPERS.glob("*.pdf")}
    got = 0
    for f in sorted(DIR.glob("*.pdf")):
        if got >= N:
            break
        nl = f.name.lower()
        if not any(k in nl for k in KW) or not YEAR.search(f.name):
            continue
        slug = slugify(f.name)
        if slug in done:
            continue
        try:
            if f.stat().st_size > 40_000_000:
                continue
            shutil.copy(f, PAPERS / f"{slug}.pdf")  # forces Dropbox materialization
            res = run(str(PAPERS / f"{slug}.pdf"), slug)
            cur = json.loads(MAN.read_text()) if MAN.exists() else []
            cur = [x for x in cur if x.get("slug") != slug]
            cur += res
            MAN.write_text(json.dumps(cur, indent=1))
            done.add(slug)
            got += 1
            print(f"  {slug[:40]:<40} {len(res)} figs")
        except Exception as e:  # noqa: BLE001
            print(f"  FAIL {slug[:34]}: {e}")
    print(f"harvested {got} articles; manifest now {len(json.loads(MAN.read_text()))} figures")


if __name__ == "__main__":
    main()
