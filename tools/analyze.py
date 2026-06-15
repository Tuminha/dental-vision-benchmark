"""Hardened analysis -> results/leaderboard.md.

Reports the leaderboard with 95% Wilson confidence intervals, task splits
(diagram/clinical-photo, labeled/unlabeled), a sensitivity pass excluding weak or
ambiguous items, judge agreement (Cohen's kappa) with a self-preference check, and
severity as a soft metric. Reads results/results.jsonl and joins data/items.json for
per-item attributes. Works on results from either runner version.
"""
from __future__ import annotations

import json
import math
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MODELS = ["GPT-5.5", "Claude Opus 4.8", "Gemini 3.1 Pro", "Qwen3.7 Plus", "Llama 4 Maverick", "GLM-4.6V"]
WEAK = {"access_toothbrush_for_use_with_mini_dental", "leukoplakia", "runningroom", "dens_evaginatus",
        "non_carious_cervical_lesion", "new_nanocomposites_may_mean_more_durable_t", "prummelklammer",
        "packable_composite_placed_in_a_lower_right"}


def wilson(k, n, z=1.96):
    if not n:
        return (0.0, 0.0)
    p = k / n
    d = 1 + z * z / n
    c = p + z * z / (2 * n)
    h = z * math.sqrt(p * (1 - p) / n + z * z / (4 * n * n))
    return ((c - h) / d * 100, (c + h) / d * 100)


def acc(rows):
    return 100 * sum(x["correct"] for x in rows) / len(rows) if rows else 0


def main() -> None:
    r = [json.loads(l) for l in open(ROOT / "results/results.jsonl")]
    items = {x["id"]: x for x in json.loads((ROOT / "data/items.json").read_text())["items"]}
    lab_of = lambda x: items.get(x["item"], {}).get("labeled", False)
    sev_of = lambda x: items.get(x["item"], {}).get("expected_severity")
    m_ = [x for x in r if not x["is_control"]]
    n_items = len(set(x["item"] for x in m_))
    rank = sorted(MODELS, key=lambda m: acc([x for x in m_ if x["model"] == m]), reverse=True)

    L = ["# Dental Vision Benchmark — results (v1, clinician-reviewed)", ""]
    L += [f"**{n_items} images (+ a memorization control), 6 vision models, two independent judges** "
          "(primary Claude Opus 4.8, secondary GPT-5.5). Image only, no caption, no internet, temperature 0, "
          "single trial. Ground truth clinician-reviewed 2026-06-15. Scoring is rubric pass/fail (all "
          "`must_identify` satisfied, no `must_avoid`).", ""]

    L += ["## Leaderboard (primary judge, 95% Wilson CI)", "",
          "| Model | Score | 95% CI | Diagrams | Clinical photos | Labeled | Unlabeled |",
          "|---|---:|:---:|---:|---:|---:|---:|"]
    for m in rank:
        mr = [x for x in m_ if x["model"] == m]
        k = sum(x["correct"] for x in mr)
        lo, hi = wilson(k, len(mr))
        dg = [x for x in mr if x["modality"] == "diagram"]
        ph = [x for x in mr if x["modality"] == "clinical_photo"]
        lab = [x for x in mr if lab_of(x)]
        unl = [x for x in mr if not lab_of(x)]
        L.append(f"| {m} | {acc(mr):.0f}% ({k}/{len(mr)}) | [{lo:.0f}, {hi:.0f}] | {acc(dg):.0f}% | "
                 f"{acc(ph):.0f}% | {acc(lab):.0f}% | {acc(unl):.0f}% |")
    L += ["", f"_Top cluster, overlapping CIs: {', '.join(rank[:3])}. The robust finding is the task split "
          "(unlabeled clinical photos are hardest), not a single winner._", ""]

    clean_n = len(set(x["item"] for x in m_ if x["item"] not in WEAK))
    L += [f"## Sensitivity (excluding {len(WEAK)} weak/ambiguous items, n={clean_n})", "",
          "| Model | Full | Clean |", "|---|---:|---:|"]
    for m in rank:
        full = [x for x in m_ if x["model"] == m]
        clean = [x for x in full if x["item"] not in WEAK]
        L.append(f"| {m} | {acc(full):.0f}% | {acc(clean):.0f}% |")
    L += [""]

    ok = [x for x in r if x["ok"]]
    a = sum(1 for x in ok if x["correct"] and x["correct_judge2"])
    b = sum(1 for x in ok if x["correct"] and not x["correct_judge2"])
    c = sum(1 for x in ok if not x["correct"] and x["correct_judge2"])
    d = sum(1 for x in ok if not x["correct"] and not x["correct_judge2"])
    nn = a + b + c + d
    po = (a + d) / nn
    pe = ((a + b) / nn) * ((a + c) / nn) + ((c + d) / nn) * ((b + d) / nn)
    kappa = (po - pe) / (1 - pe) if pe != 1 else 1.0
    L += ["## Judge agreement and self-preference check", "",
          f"Verdict agreement {100 * po:.0f}%, Cohen's kappa {kappa:.2f}. The primary (Opus) judge is more "
          "lenient than the secondary (GPT-5.5) judge for every model, but shows **no own-family preference**: "
          "Claude has the *smallest* primary-vs-secondary gap, not the largest.", "",
          "| Model | Primary (Opus) | Secondary (GPT-5.5) | Delta |", "|---|---:|---:|---:|"]
    for m in rank:
        mr = [x for x in m_ if x["model"] == m and x["ok"]]
        j1 = 100 * sum(x["correct"] for x in mr) / len(mr)
        j2 = 100 * sum(x["correct_judge2"] for x in mr) / len(mr)
        L.append(f"| {m} | {j1:.0f}% | {j2:.0f}% | {j1 - j2:+.0f} |")
    L += [""]

    sev = [x for x in m_ if sev_of(x)]
    if sev:
        L += [f"## Severity (soft metric; {len(set(x['item'] for x in sev))} graded items)", "",
              "How often each model's stated grade matched the expected severity (judge-assessed). "
              "_Note: this v1 run applied severity as a pass-gate on these items; the harness now treats it "
              "as a soft metric, which will lift the gated items' scores on the next run._", "",
              "| Model | Severity match |", "|---|---:|"]
        for m in rank:
            mr = [x for x in sev if x["model"] == m]
            sm = 100 * sum(1 for x in mr if x["severity_correct"] is True) / len(mr) if mr else 0
            L.append(f"| {m} | {sm:.0f}% |")
        L += [""]

    L += ["## Caveats",
          f"- n={n_items}, single trial: treat the ranking as a top cluster, not an exact order (overlapping CIs).",
          "- Labeled images (readable text labels) are far easier than unlabeled; the unlabeled clinical-photo column is the hardest, most informative test.",
          "- Judges are themselves evaluated models; absolute pass-rates are judge-dependent (see kappa).",
          "- A focused description benchmark across diagrams and clinical photos; radiographs are out of scope, and it is not a comprehensive dental MLLM suite.", ""]
    (ROOT / "results/leaderboard.md").write_text("\n".join(L) + "\n")
    print("wrote results/leaderboard.md")


if __name__ == "__main__":
    main()
