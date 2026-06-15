"""Dental vision benchmark runner (v0.2).

For every item x model: show the image (no caption, no web access) and collect the
model's free-text description. Then TWO independent judges (different vendors), each
of which can SEE the image and has the authoritative caption + clinician rubric,
grade the description. We report the primary-judge leaderboard, judge agreement,
a modality axis, and the public-vs-control memorization gap.

Run:
    python src/run_vision_eval.py
"""
from __future__ import annotations

import json
import os
import re
import sys
import threading
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from vision_client import VisionClient  # noqa: E402

try:
    from dotenv import load_dotenv
    load_dotenv(Path.home() / "Code/github.com/Tuminha/llm-evaluation-for-dentistry/.env")
    load_dotenv(Path.home() / ".env.periospot")
except Exception:  # noqa: BLE001
    pass

ROOT = Path(__file__).resolve().parents[1]
# Optional argv: <items_json> <results_jsonl> (defaults run the public set).
ITEMS_FILE = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "data/items.json"
RESULTS_FILE = Path(sys.argv[2]) if len(sys.argv) > 2 else ROOT / "results/results.jsonl"

# Latest vision-capable model per family (verified image-capable on OpenRouter
# 2026-06-14). GLM-5.2 and Rio 3.5 are text-only and cannot enter a vision test.
MODELS = [
    ("GPT-5.5", "openai/gpt-5.5"),
    ("Claude Opus 4.8", "anthropic/claude-opus-4.8"),
    ("Gemini 3.1 Pro", "google/gemini-3.1-pro-preview"),
    ("Qwen3.7 Plus", "qwen/qwen3.7-plus"),
    ("Llama 4 Maverick", "meta-llama/llama-4-maverick"),
    ("GLM-4.6V", "z-ai/glm-4.6v"),
]

# Two independent judges from different vendors. Primary drives the leaderboard;
# the pair's agreement is reported so absolute accuracy is not taken on faith.
PRIMARY_JUDGE = ("Claude Opus 4.8", "anthropic/claude-opus-4.8")
SECOND_JUDGE = ("GPT-5.5", "openai/gpt-5.5")

DESCRIBE_PROMPT = (
    "You are shown a single dental image (it may be a diagram, an illustration, a "
    "radiograph, or a clinical photo). Using ONLY what you can see, describe:\n"
    "1. The type of image.\n"
    "2. The anatomy and structures visible.\n"
    "3. Any condition, pathology, or clinical finding shown, including its apparent "
    "severity if a disease is depicted.\n"
    "Be specific and concise (a short paragraph). Do not guess beyond what is visible."
)

_print_lock = threading.Lock()


def extract_json(text: str) -> dict | None:
    if not text:
        return None
    text = re.sub(r"^```(?:json)?|```$", "", text.strip(), flags=re.MULTILINE).strip()
    a, b = text.find("{"), text.rfind("}")
    if a == -1 or b == -1:
        return None
    try:
        return json.loads(text[a:b + 1])
    except Exception:  # noqa: BLE001
        return None


def judge_prompt(item: dict, description: str) -> str:
    must_id = "\n".join(f"  - {x}" for x in item["must_identify"])
    must_av = "\n".join(f"  - {x}" for x in item["must_avoid"])
    sev = item.get("expected_severity")
    sev_line = f"Expected disease severity (ground truth): {sev}" if sev else "Expected disease severity: not applicable"
    return (
        "You are an expert dental examiner. You can SEE the real dental image (shown with "
        "this message) and you are given its authoritative caption (ground truth) plus a "
        "clinician's required points. A separate AI model was shown ONLY the image (no caption, "
        "no internet) and asked to describe it. Grade that model's description against the REAL "
        "image and the ground truth.\n\n"
        f"AUTHORITATIVE CAPTION (ground truth): {item['reference_caption']}\n"
        f"Image modality (ground truth): {item['modality']}\n"
        f"{sev_line}\n\n"
        f"REQUIRED points (must_identify):\n{must_id}\n\n"
        f"ERRORS to penalize (must_avoid):\n{must_av}\n\n"
        f"MODEL DESCRIPTION TO GRADE:\n\"\"\"\n{description}\n\"\"\"\n\n"
        "Severity is a soft metric, not a gate. If an expected severity is given above, set "
        "severity_correct true when the description's stated grade is CONSISTENT with it "
        "(accept reasonable equivalents, e.g. advanced ~ severe), false if it clearly conflicts "
        "or none is stated, null if no expected severity applies. Return ONLY a JSON object:\n"
        "{\n"
        '  "must_identify_covered": <int>,\n'
        f'  "must_identify_total": {len(item["must_identify"])},\n'
        '  "must_avoid_violations": <int>,\n'
        '  "modality_correct": <true|false>,\n'
        '  "severity_claimed": "<the severity or grade the description states, or none>",\n'
        '  "severity_correct": <true|false|null>,\n'
        '  "notes": "<one short sentence>"\n'
        "}"
    )


def score(verdict: dict | None, item: dict) -> bool:
    # Rubric pass only: all must_identify covered, no must_avoid violations. Severity is
    # reported as a separate SOFT metric, not a hard gate -- the judge's coarse severity
    # scale cannot reliably support exact-grade gating on subtle/compound labels.
    if not verdict:
        return False
    total = len(item["must_identify"])
    return verdict.get("must_identify_covered", 0) >= total and verdict.get("must_avoid_violations", 99) == 0


def grade(client: VisionClient, judge_id: str, item: dict, desc: str, img: str) -> dict | None:
    jr = client.describe(judge_id, judge_prompt(item, desc), img)
    return extract_json(jr.get("text") or "")


def run_one(item: dict, label: str, mid: str) -> dict:
    client = VisionClient()
    img = str(ROOT / item["image"])
    gen = client.describe(mid, DESCRIBE_PROMPT, img)
    desc = gen.get("text") or ""
    v1 = grade(client, PRIMARY_JUDGE[1], item, desc, img) if gen["ok"] else None
    v2 = grade(client, SECOND_JUDGE[1], item, desc, img) if gen["ok"] else None
    c1, c2 = score(v1, item), score(v2, item)
    row = {
        "item": item["id"], "modality": item["modality"], "labeled": item.get("labeled", False),
        "is_control": item.get("is_control", False), "expected_severity": item.get("expected_severity"),
        "model": label, "ok": gen["ok"], "error": gen.get("error"), "latency_s": gen.get("latency_s"),
        "correct": c1, "correct_judge2": c2, "judges_agree": c1 == c2,
        "covered": (v1 or {}).get("must_identify_covered"), "total": len(item["must_identify"]),
        "violations": (v1 or {}).get("must_avoid_violations"),
        "modality_correct": bool((v1 or {}).get("modality_correct")),
        "severity_claimed": (v1 or {}).get("severity_claimed"),
        "severity_correct": (v1 or {}).get("severity_correct"),
        "description": desc, "judge1": v1, "judge2": v2,
    }
    with _print_lock:
        flag = "OK " if gen["ok"] else "ERR"
        print(f"  [{flag}] {item['id']:<18} {label:<16} j1={'P' if c1 else 'f'} j2={'P' if c2 else 'f'} mod={'y' if row['modality_correct'] else 'n'}")
    return row


def main() -> None:
    items = json.loads(ITEMS_FILE.read_text())["items"]
    tasks = [(it, label, mid) for it in items for (label, mid) in MODELS]
    print(f"Running {len(MODELS)} models x {len(items)} images = {len(tasks)} describe calls + {2*len(tasks)} judge calls...\n")

    with ThreadPoolExecutor(max_workers=6) as ex:
        rows = list(ex.map(lambda t: run_one(*t), tasks))

    RESULTS_FILE.write_text("\n".join(json.dumps(r) for r in rows) + "\n")

    models = [m[0] for m in MODELS]
    main_rows = [r for r in rows if not r["is_control"]]

    print("\n================ LEADERBOARD (primary judge, non-control) ================")
    print(f"{'Model':<18} {'Correct':>9} {'Acc':>6} {'Modality':>9}")
    for label in models:
        mr = [r for r in main_rows if r["model"] == label]
        nok = sum(r["correct"] for r in mr)
        nmod = sum(r["modality_correct"] for r in mr)
        print(f"{label:<18} {nok:>4}/{len(mr):<4} {100*nok/len(mr):>5.0f}% {100*nmod/len(mr):>7.0f}%")

    agree = [r for r in rows if r["ok"]]
    n_agree = sum(r["judges_agree"] for r in agree)
    a1 = sum(r["correct"] for r in agree)
    a2 = sum(r["correct_judge2"] for r in agree)
    print(f"\n--- Dual-judge check ({PRIMARY_JUDGE[0]} vs {SECOND_JUDGE[0]}) ---")
    print(f"verdict agreement: {100*n_agree/len(agree):.0f}%   |   judge1 pass-rate {100*a1/len(agree):.0f}%   judge2 pass-rate {100*a2/len(agree):.0f}%")

    print("\n--- Memorization control (original public image vs transformed copy) ---")
    for label in models:
        o = next((r for r in rows if r["model"] == label and r["item"] == "anat-01"), {})
        c = next((r for r in rows if r["model"] == label and r["item"] == "anat-01-control"), {})
        print(f"{label:<18} original={'PASS' if o.get('correct') else 'fail'}   control={'PASS' if c.get('correct') else 'fail'}")

    print("\n--- mild vs severe discrimination ---")
    for label in models:
        mild = next((r for r in rows if r["model"] == label and r["item"] == "perio-mild-01"), {})
        sev = next((r for r in rows if r["model"] == label and r["item"] == "perio-severe-01"), {})
        print(f"{label:<18} mild->{str(mild.get('severity_claimed')):<12} severe->{str(sev.get('severity_claimed')):<12}")

    print(f"\nFull rows -> results/results.jsonl")


if __name__ == "__main__":
    main()
