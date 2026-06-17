"""Inter-rater agreement for the blinded judge-disagreement adjudication.

Reads every reviewer response in validation/adjudication_responses/*.json (each produced by the
adjudication page: {reviewer, data_commit, summary, decisions:[{rid, decision, note}]}), joins the
blinded rid back to (item, model) via validation/adjudication_key.csv (regenerate with
tools/build_adjudication_page.py if absent), and reports per-reviewer counts plus, for each pair of
reviewers, raw agreement, Cohen's kappa, and Gwet's AC1.

Gwet's AC1 is the headline statistic here: when one reviewer's verdicts are heavily skewed (e.g.
nearly all Pass), Cohen's kappa is mathematically forced toward 0 even at high agreement (the
"kappa paradox"). AC1 is robust to that skew. Both are reported, with the disagreement list
(joined to the now-revealed model identity) that the reviewers resolve by consensus.

Usage: python tools/adjudication_agreement.py   (writes validation/adjudication_agreement.md, prints it)
"""
from __future__ import annotations

import csv
import json
from itertools import combinations
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
RESP_DIR = ROOT / "validation/adjudication_responses"
KEY = ROOT / "validation/adjudication_key.csv"


def load_key():
    if not KEY.exists():
        raise SystemExit(
            "Missing validation/adjudication_key.csv — regenerate it first:\n"
            "  python tools/build_adjudication_page.py")
    out = {}
    with open(KEY) as f:
        for row in csv.DictReader(f):
            out[row["rid"]] = (row["item"], row["model"])
    return out


def load_responses():
    revs = []
    for p in sorted(RESP_DIR.glob("*.json")):
        d = json.loads(p.read_text())
        verdict = {x["rid"]: x["decision"] for x in d["decisions"] if x.get("decision") in ("pass", "fail")}
        revs.append({"name": d.get("reviewer", p.stem), "commit": (d.get("data_commit") or "")[:7],
                     "verdict": verdict, "decisions": d["decisions"]})
    return revs


def cohen_kappa(a, b, rids):
    n = len(rids)
    po = sum(a[r] == b[r] for r in rids) / n
    pa1 = sum(a[r] == "pass" for r in rids) / n
    pb1 = sum(b[r] == "pass" for r in rids) / n
    pe = pa1 * pb1 + (1 - pa1) * (1 - pb1)
    k = float("nan") if pe >= 1 else (po - pe) / (1 - pe)
    return po, k, pe


def gwet_ac1(a, b, rids):
    n = len(rids)
    po = sum(a[r] == b[r] for r in rids) / n
    pi_pass = (sum(a[r] == "pass" for r in rids) + sum(b[r] == "pass" for r in rids)) / (2 * n)
    pe = 2 * pi_pass * (1 - pi_pass)  # L=2 categories
    ac1 = float("nan") if pe >= 1 else (po - pe) / (1 - pe)
    return ac1, pe


def main():
    key = load_key()
    revs = load_responses()
    L = ["# Adjudication agreement", ""]
    if not revs:
        L.append("No reviewer responses found in validation/adjudication_responses/ yet.")
        out = "\n".join(L) + "\n"
        (ROOT / "validation/adjudication_agreement.md").write_text(out)
        print(out)
        return

    L += ["## Reviewers", "", "| Reviewer | Decided | Pass | Fail | Data commit |", "|---|---:|---:|---:|:---:|"]
    for r in revs:
        v = r["verdict"]
        npass = sum(x == "pass" for x in v.values())
        nfail = sum(x == "fail" for x in v.values())
        L.append(f"| {r['name']} | {len(v)} | {npass} | {nfail} | {r['commit']} |")
    L.append("")

    commits = {r["commit"] for r in revs}
    if len(commits) > 1:
        L += [f"> WARNING: reviewers are on different data commits {sorted(commits)}. "
              "Confirm they reviewed the same ground truth before trusting the agreement.", ""]

    if len(revs) < 2:
        L += ["Only one reviewer so far; pairwise agreement will appear once a second reviewer submits.", ""]
        out = "\n".join(L) + "\n"
        (ROOT / "validation/adjudication_agreement.md").write_text(out)
        print(out)
        return

    for a, b in combinations(revs, 2):
        shared = [r for r in a["verdict"] if r in b["verdict"]]
        po, k, _ = cohen_kappa(a["verdict"], b["verdict"], shared)
        ac1, _ = gwet_ac1(a["verdict"], b["verdict"], shared)
        disagree = [r for r in shared if a["verdict"][r] != b["verdict"][r]]
        L += [f"## {a['name']} vs {b['name']}", "",
              f"- Shared cases: **{len(shared)}**",
              f"- Raw agreement: **{100 * po:.1f}%** ({len(shared) - len(disagree)}/{len(shared)})",
              f"- Cohen's kappa: **{k:.3f}**" + ("  _(degenerate under skew — see AC1)_" if not (k == k) or abs(k) < 0.2 else ""),
              f"- **Gwet's AC1: {ac1:.3f}** (headline; robust to the Pass-skew)",
              ""]
        if disagree:
            L += [f"### {len(disagree)} cases to resolve by consensus", "",
                  "| rid | item | model | " + a["name"].split()[0] + " | " + b["name"].split()[0] + " |",
                  "|---|---|---|:---:|:---:|"]
            for r in sorted(disagree, key=lambda r: key.get(r, ("", ""))[1]):
                item, model = key.get(r, ("?", "?"))
                L.append(f"| {r} | {item} | {model} | {a['verdict'][r]} | {b['verdict'][r]} |")
            L.append("")
        else:
            L += ["The two reviewers agree on every shared case; no consensus step needed.", ""]

    out = "\n".join(L) + "\n"
    (ROOT / "validation/adjudication_agreement.md").write_text(out)
    print(out)


if __name__ == "__main__":
    main()
