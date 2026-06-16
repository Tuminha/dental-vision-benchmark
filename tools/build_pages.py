"""Build docs/report-data.js for the GitHub Pages report, deterministically from data.

Reads results/results.jsonl, data/items.json and results/run_manifest.json, recomputes
the leaderboard (Wilson CIs), the diagram/photo and labeled/unlabeled task splits, judge
agreement (Cohen's kappa) and the transformed-control check, and writes a single
`window.REPORT_DATA = {...}` payload the static page renders. Image thumbnails are served
from jsDelivr so the page stays self-contained without duplicating the dataset.

Usage: python tools/build_pages.py
"""
from __future__ import annotations

import json
import math
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CDN = "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main"

# Display order is by score (computed below); this map holds branding only.
META = {
    "Gemini 3.1 Pro":   {"provider": "Google",    "logo": "assets/logos/gemini.png",    "color": "#3B82C4"},
    "Claude Opus 4.8":  {"provider": "Anthropic", "logo": "assets/logos/anthropic.png", "color": "#C9743A"},
    "Qwen3.7 Plus":     {"provider": "Alibaba",   "logo": "assets/logos/qwen.png",      "color": "#6D5BD0"},
    "GPT-5.5":          {"provider": "OpenAI",     "logo": "assets/logos/openai.png",   "color": "#2E9E96"},
    "GLM-4.6V":         {"provider": "Zhipu AI",   "logo": "assets/logos/glm.svg",      "color": "#B07A3C"},
    "Llama 4 Maverick": {"provider": "Meta",       "logo": "assets/logos/meta.png",     "color": "#4A6FA5"},
}


def wilson(k, n, z=1.96):
    if not n:
        return (0.0, 0.0)
    p = k / n
    d = 1 + z * z / n
    c = p + z * z / (2 * n)
    h = z * math.sqrt(p * (1 - p) / n + z * z / (4 * n * n))
    return ((c - h) / d * 100, (c + h) / d * 100)


def acc(rows):
    return 100 * sum(x["correct"] for x in rows) / len(rows) if rows else 0.0


def git_commit():
    try:
        return subprocess.run(["git", "rev-parse", "HEAD"], cwd=ROOT,
                              capture_output=True, text=True, check=True).stdout.strip()
    except Exception:  # noqa: BLE001
        return "unknown"


def main() -> None:
    rows = [json.loads(l) for l in open(ROOT / "results/results.jsonl")]
    items = {x["id"]: x for x in json.loads((ROOT / "data/items.json").read_text())["items"]}
    manifest = json.loads((ROOT / "results/run_manifest.json").read_text())
    mid_of = {m["label"]: m["id"] for m in manifest["models"]}

    main_rows = [x for x in rows if not x["is_control"]]
    labels = sorted(META, key=lambda m: acc([x for x in main_rows if x["model"] == m]), reverse=True)
    lab_of = lambda x: items.get(x["item"], {}).get("labeled", False)

    models = []
    for m in labels:
        mr = [x for x in main_rows if x["model"] == m]
        ok = [x for x in mr if x["ok"]]
        k, n = sum(x["correct"] for x in mr), len(mr)
        lo, hi = wilson(k, n)
        sub = lambda pred: {"acc": round(acc([x for x in mr if pred(x)]), 1),
                            "correct": sum(x["correct"] for x in mr if pred(x)),
                            "total": sum(1 for x in mr if pred(x))}
        ctrl = lambda iid: next((x for x in rows if x["model"] == m and x["item"] == iid), {})
        models.append({
            "model": m, "model_id": mid_of.get(m, ""), **META[m],
            "accuracy": round(100 * k / n, 1), "correct": k, "total": n,
            "ci_low": round(lo, 1), "ci_high": round(hi, 1),
            "secondary_accuracy": round(100 * sum(x["correct_judge2"] for x in ok) / len(ok), 1) if ok else 0,
            "modality_acc": round(100 * sum(x["modality_correct"] for x in mr) / n, 1),
            "latency": round(sum(x["latency_s"] or 0 for x in mr) / n, 1),
            "diagram": sub(lambda x: x["modality"] == "diagram"),
            "photo": sub(lambda x: x["modality"] == "clinical_photo"),
            "labeled": sub(lab_of),
            "unlabeled": sub(lambda x: not lab_of(x)),
            "control": {"original": bool(ctrl("anat-01").get("correct")),
                        "transformed": bool(ctrl("anat-01-control").get("correct"))},
        })

    # judge agreement (ok, non-control)
    ok = [x for x in main_rows if x["ok"]]
    a = sum(1 for x in ok if x["correct"] and x["correct_judge2"])
    b = sum(1 for x in ok if x["correct"] and not x["correct_judge2"])
    c = sum(1 for x in ok if not x["correct"] and x["correct_judge2"])
    d = sum(1 for x in ok if not x["correct"] and not x["correct_judge2"])
    nn = a + b + c + d
    po = (a + d) / nn
    pe = ((a + b) / nn) * ((a + c) / nn) + ((c + d) / nn) * ((b + d) / nn)
    kappa = (po - pe) / (1 - pe) if pe != 1 else 1.0

    # image explorer: one card per item with per-model outcomes
    order = {m: i for i, m in enumerate(labels)}
    images = []
    for iid in sorted({x["item"] for x in main_rows}):
        it = items.get(iid, {})
        outs = sorted([x for x in main_rows if x["item"] == iid], key=lambda x: order.get(x["model"], 9))
        images.append({
            "id": iid, "image": f"{CDN}/{it.get('image', '')}",
            "modality": it.get("modality", ""), "labeled": it.get("labeled", False),
            "must_identify_n": len(it.get("must_identify", [])),
            "caption": it.get("reference_caption", ""),
            "correct": sum(x["correct"] for x in outs), "total": len(outs),
            "outcomes": [{"model": x["model"], "correct": x["correct"]} for x in outs],
        })
    # hardest first (most models failed), stable by id
    images.sort(key=lambda im: (im["correct"], im["id"]))

    verdicts = sum(isinstance(x.get("judge1"), dict) + isinstance(x.get("judge2"), dict) for x in rows)
    payload = {
        "meta": {
            "data_commit": git_commit(),
            "run_date": manifest.get("run_date", ""),
            "gateway": "OpenRouter",
            "temperature": manifest["settings"]["temperature"],
            "image_transport": manifest["settings"]["image_transport"],
        },
        "overall": {
            "models": len(models), "images": len(images), "judges": 2,
            "judge_verdicts": verdicts,
            "agreement_pct": round(100 * po, 1), "kappa": round(kappa, 3),
            "top_score": models[0]["accuracy"], "top_model": models[0]["model"],
        },
        "models": models,
        "splits": [
            {"id": "diagram", "label": "Diagrams"},
            {"id": "photo", "label": "Clinical photos"},
            {"id": "labeled", "label": "Labeled"},
            {"id": "unlabeled", "label": "Unlabeled"},
        ],
        "judge_agreement": {
            "agreement_pct": round(100 * po, 1), "kappa": round(kappa, 3),
            "per_model": [{"model": m["model"], "primary": m["accuracy"],
                           "secondary": m["secondary_accuracy"],
                           "delta": round(m["accuracy"] - m["secondary_accuracy"], 1)} for m in models],
        },
        "images": images,
    }

    out = ROOT / "docs/report-data.js"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text("window.REPORT_DATA = " + json.dumps(payload, indent=2) + ";\n")
    print(f"wrote docs/report-data.js  ({len(models)} models, {len(images)} images, "
          f"{verdicts} judge verdicts, kappa {kappa:.3f})")


if __name__ == "__main__":
    main()
