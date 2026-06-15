"""Build the private benchmark item file from authored article-figure ground truth.

Reads data/private/groundtruth.json (clinician-agent rubrics) + authlist, drops
weak items, and writes data/private/items_private.json (gitignored). Same schema
the runner expects, with is_private=True and no public source.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SEV = re.compile(r"(mild|moderate|severe|early|advanced)", re.I)


def main() -> None:
    gt = json.loads((ROOT / "data/private/groundtruth.json").read_text())
    wl = {w["id"]: w for w in json.loads((ROOT / "data/private/authlist.json").read_text())}
    items, dropped = [], []
    for g in gt:
        if g.get("suitability") == "weak":
            dropped.append(g["id"]); continue
        w = wl.get(g["id"])
        if not w:
            continue
        sev = g.get("expected_severity")
        sev = sev if (sev and SEV.search(sev)) else None
        items.append({
            "id": g["id"], "image": f"data/private/figures/{g['id']}.png",
            "modality": g["modality"], "labeled": g.get("labeled", False),
            "is_control": False, "is_private": True, "expected_severity": sev,
            "must_identify": g["must_identify"], "must_avoid": g["must_avoid"],
            "reference_caption": g["reference_caption"],
            "source": {"private": True, "slug": w["slug"]},
        })
    out = {"_about": "PRIVATE article-figure set (copyrighted journal figures, gitignored). "
                     "Run locally; publish results/ground-truth only, never the images.",
           "items": items}
    (ROOT / "data/private/items_private.json").write_text(json.dumps(out, indent=2) + "\n")
    print(f"{len(items)} private items (dropped {len(dropped)} weak: {dropped})")


if __name__ == "__main__":
    main()
