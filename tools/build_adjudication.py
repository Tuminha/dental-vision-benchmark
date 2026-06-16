"""Build the judge-disagreement adjudication worklist (validation/judge_disagreements.csv).

For a manuscript-grade human validation pass, the rows that actually need a clinician
are the ones where the two independent judges DISAGREE on pass/fail. This script joins
results/results.jsonl with data/items.json and emits one CSV row per disagreement: the
image, the clinician rubric, what each judge decided, what the model actually wrote, and
blank columns for an external reviewer to fill (verdict / initials / date / notes).

Usage: python tools/build_adjudication.py
"""
from __future__ import annotations

import csv
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "validation/judge_disagreements.csv"


def jflag(v: bool | None) -> str:
    return "pass" if v else "fail"


def main() -> None:
    rows = [json.loads(l) for l in open(ROOT / "results/results.jsonl")]
    items = {x["id"]: x for x in json.loads((ROOT / "data/items.json").read_text())["items"]}

    dis = [x for x in rows if x["ok"] and not x["is_control"]
           and x["correct"] != x["correct_judge2"]]
    dis.sort(key=lambda x: (x["item"], x["model"]))

    OUT.parent.mkdir(parents=True, exist_ok=True)
    cols = [
        "item", "modality", "labeled", "image", "model",
        "judge1_primary", "judge2_secondary",
        "j1_covered", "j2_covered", "must_identify_total",
        "j1_violations", "j2_violations",
        "must_identify", "must_avoid", "reference_caption",
        "model_description",
        "human_verdict", "reviewer_initials", "review_date", "notes",
    ]
    with open(OUT, "w", newline="") as f:
        w = csv.writer(f)
        w.writerow(cols)
        for x in dis:
            it = items.get(x["item"], {})
            j1, j2 = x.get("judge1") or {}, x.get("judge2") or {}
            w.writerow([
                x["item"], x["modality"], it.get("labeled", False), it.get("image", ""), x["model"],
                jflag(x["correct"]), jflag(x["correct_judge2"]),
                j1.get("must_identify_covered"), j2.get("must_identify_covered"),
                len(it.get("must_identify", [])),
                j1.get("must_avoid_violations"), j2.get("must_avoid_violations"),
                " ; ".join(it.get("must_identify", [])),
                " ; ".join(it.get("must_avoid", [])),
                it.get("reference_caption", ""),
                (x.get("description") or "").replace("\n", " ").strip()[:600],
                "", "", "", "",
            ])
    print(f"wrote {OUT.relative_to(ROOT)}  ({len(dis)} disagreement rows, "
          f"{len(set(x['item'] for x in dis))} unique items)")


if __name__ == "__main__":
    main()
