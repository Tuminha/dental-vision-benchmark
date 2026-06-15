"""Extract figure images + their legends from a (local, private) journal PDF.

For each page, finds figure legends (text blocks starting with "Fig.../Figure N")
and the placed image regions, pairs each image with the nearest legend below it,
renders the figure region (NOT the legend) to a PNG, and records the legend as
ground-truth context. Radiograph figures (by legend keyword) are skipped, since
they are out of v1 scope. Output goes to data/private/figures/ (gitignored).

Usage: python tools/extract_figures.py <pdf_path> <slug>
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

import fitz  # PyMuPDF

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "data/private/figures"
OUT.mkdir(parents=True, exist_ok=True)

LEG = re.compile(r"^\s*(Fig(?:ure|\.)\s*\d+)", re.I)
SKIP = re.compile(r"radiograph|x-?ray|periapical|panoramic|orthopantomog|micro-?ct|\bcbct\b", re.I)


def is_legend(t: str) -> bool:
    t = t.strip()
    return bool(LEG.match(t)) and len(t) > 45


def run(pdf: str, slug: str) -> list[dict]:
    d = fitz.open(pdf)
    out = []
    for pno, page in enumerate(d):
        blocks = page.get_text("blocks")
        legends = [(re.sub(r"\s+", " ", b[4]).strip(), fitz.Rect(b[:4])) for b in blocks if is_legend(b[4])]
        for im in page.get_image_info(xrefs=True):
            bb = fitz.Rect(im["bbox"])
            if bb.width < 150 or bb.height < 150:
                continue
            cand = sorted([(t, r) for t, r in legends if r.y0 >= bb.y0 - 12], key=lambda x: abs(x[1].y0 - bb.y1))
            legend = cand[0][0] if cand else ""
            if legend and SKIP.search(legend):
                continue
            fn = f"{slug}_p{pno + 1}_y{int(bb.y0)}.png"
            page.get_pixmap(clip=bb, matrix=fitz.Matrix(2, 2)).save(str(OUT / fn))
            out.append({"file": fn, "slug": slug, "page": pno + 1,
                        "legend": legend[:400], "w": int(bb.width), "h": int(bb.height)})
    return out


if __name__ == "__main__":
    res = run(sys.argv[1], sys.argv[2])
    mpath = ROOT / "data/private/figures_manifest.json"
    cur = json.loads(mpath.read_text()) if mpath.exists() else []
    cur = [x for x in cur if x.get("slug") != sys.argv[2]]  # idempotent per article
    cur += res
    mpath.write_text(json.dumps(cur, indent=1))
    print(f"{len(res)} figures from {sys.argv[2]} (manifest now {len(cur)})", file=sys.stderr)
