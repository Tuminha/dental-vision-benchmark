"""Build docs/validate-data.js for the independent clinician validation page.

Emits the 90 non-control items with their full clinician rubric (must_identify /
must_avoid / reference caption) and a thumbnail pinned to the data commit, so a second
dentist can confirm each image is fair to read without its caption and that the rubric is
clinically sound. Same data-commit pinning as tools/build_pages.py.

Usage: python tools/build_validation.py
"""
from __future__ import annotations

import json
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REPO = "Tuminha/dental-vision-benchmark"


def data_commit():
    inputs = ["results/results.jsonl", "data/items.json", "results/run_manifest.json"]
    try:
        return subprocess.run(["git", "log", "-1", "--format=%H", "--", *inputs], cwd=ROOT,
                              capture_output=True, text=True, check=True).stdout.strip() or "unknown"
    except Exception:  # noqa: BLE001
        return "unknown"


def main() -> None:
    items = json.loads((ROOT / "data/items.json").read_text())["items"]
    dc = data_commit()
    cdn = f"https://cdn.jsdelivr.net/gh/{REPO}@{dc}"
    out_items = []
    for it in items:
        if it.get("is_control"):
            continue
        out_items.append({
            "id": it["id"],
            "image": f"{cdn}/{it.get('image', '')}",
            "modality": it.get("modality", ""),
            "labeled": it.get("labeled", False),
            "must_identify": it.get("must_identify", []),
            "must_avoid": it.get("must_avoid", []),
            "caption": it.get("reference_caption", ""),
        })
    payload = {"meta": {"data_commit": dc, "n": len(out_items)}, "items": out_items}
    (ROOT / "docs/validate-data.js").write_text(
        "window.VALIDATE_DATA = " + json.dumps(payload, indent=1) + ";\n")
    print(f"wrote docs/validate-data.js  ({len(out_items)} items, pinned @{dc[:7]})")


if __name__ == "__main__":
    main()
