"""Build the blinded judge-disagreement adjudication page data.

Emits the 96 rows where the two model judges disagree, BLINDED: each row shows the image, the
clinician rubric, the reference caption, and the model's free-text description, but NOT the model
identity or either judge's verdict. Rows are shuffled so they are not grouped by model or image.
A private key (validation/adjudication_key.csv, gitignored) maps the opaque row id back to the
(item, model) so the returned pass/fail decisions can be re-joined afterward.

Usage: python tools/build_adjudication_page.py
"""
from __future__ import annotations

import csv
import json
import random
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
    rows = [json.loads(l) for l in open(ROOT / "results/results.jsonl")]
    items = {x["id"]: x for x in json.load(open(ROOT / "data/items.json"))["items"]}
    dis = [x for x in rows if x["ok"] and not x["is_control"] and x["correct"] != x["correct_judge2"]]
    # stable, blinded order: sort by id then deterministic shuffle
    dis.sort(key=lambda x: (x["item"], x["model"]))
    random.Random(20260616).shuffle(dis)

    dc = data_commit()
    cdn = f"https://cdn.jsdelivr.net/gh/{REPO}@{dc}"
    out, key = [], []
    for i, x in enumerate(dis, 1):
        rid = f"a{i:03d}"
        it = items.get(x["item"], {})
        out.append({
            "rid": rid,
            "image": f"{cdn}/{it.get('image', '')}",
            "modality": "diagram" if x["modality"] == "diagram" else "clinical photo",
            "must_identify": it.get("must_identify", []),
            "must_avoid": it.get("must_avoid", []),
            "caption": it.get("reference_caption", ""),
            "description": (x.get("description") or "").strip(),
        })
        key.append({"rid": rid, "item": x["item"], "model": x["model"]})

    payload = {"meta": {"data_commit": dc, "n": len(out)}, "rows": out}
    (ROOT / "docs/adjudicate-data.js").write_text(
        "window.ADJUDICATE_DATA = " + json.dumps(payload, indent=1) + ";\n")

    keyfile = ROOT / "validation/adjudication_key.csv"
    keyfile.parent.mkdir(parents=True, exist_ok=True)
    with open(keyfile, "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["rid", "item", "model"])
        w.writeheader()
        w.writerows(key)
    print(f"wrote docs/adjudicate-data.js ({len(out)} blinded rows, pinned @{dc[:7]}) and "
          f"validation/adjudication_key.csv (private de-blinding key)")


if __name__ == "__main__":
    main()
