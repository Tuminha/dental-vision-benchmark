"""Merge authored ground truth + image sources into the dataset.

Reads data/groundtruth.json (clinician-agent rubrics) and data/worklist.json
(image paths + Commons sources), builds the new items, appends them to
data/items.json (keeping the control item last), and regenerates VALIDATION.md
with a sign-off row per item plus a "needs your attention" section.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
# Only gate on genuine graded severities the judge's scale can score; diagnoses
# (e.g. malocclusion class) stay in must_identify, not as a pass-gating severity.
SEV_KEEP = re.compile(r"(mild|moderate|severe|early|advanced)", re.I)


def norm_sev(s: str | None) -> str | None:
    return s if (s and SEV_KEEP.search(s)) else None


def main() -> None:
    gt = json.loads((ROOT / "data/groundtruth.json").read_text())
    wl = {w["id"]: w for w in json.loads((ROOT / "data/worklist.json").read_text())}
    data = json.loads((ROOT / "data/items.json").read_text())
    existing = data["items"]

    new, weak, open_qs, gated = [], [], [], []
    for g in gt:
        w = wl.get(g["id"])
        if not w:
            print("WARN: no worklist entry for", g["id"])
            continue
        sev = norm_sev(g.get("expected_severity"))
        new.append({
            "id": g["id"], "image": w["image"], "modality": g["modality"],
            "labeled": g.get("labeled", False), "is_control": False,
            "expected_severity": sev, "must_identify": g["must_identify"],
            "must_avoid": g["must_avoid"], "reference_caption": g["reference_caption"],
            "source": w["source"],
        })
        if g.get("suitability") == "weak":
            weak.append((g["id"], g.get("suitability_note") or ""))
        if g.get("open_question"):
            open_qs.append((g["id"], g["open_question"]))
        if sev:
            gated.append((g["id"], sev))

    # Idempotent: the base is only the 6 originally hand-authored items; never the
    # previously-appended ones (so re-running does not duplicate).
    ORIGINAL_IDS = {"anat-01", "perio-mild-01", "perio-severe-01", "caries-01",
                    "photo-intraoral-01", "anat-01-control"}
    seen, base = set(), []
    for it in existing:
        if it["id"] in ORIGINAL_IDS and it["id"] not in seen:
            seen.add(it["id"]); base.append(it)
    control = [it for it in base if it.get("is_control")]
    main_items = [it for it in base if not it.get("is_control")]
    all_items = main_items + new + control
    data["items"] = all_items
    (ROOT / "data/items.json").write_text(json.dumps(data, indent=2) + "\n")

    # VALIDATION.md
    L = [
        "# Ground-Truth Validation Log",
        "",
        f"The ground truth for all {len(all_items)} items is **clinician-authored DRAFT** "
        "(the diagram/photo rubrics were drafted by clinician-agents and need your sign-off). "
        "Until each item is confirmed the dataset is DRAFT and results are **not for citation**.",
        "",
        "Full rubrics (`must_identify` / `must_avoid` / caption) live in `data/items.json`; "
        "this log is the sign-off checklist plus the items that need a judgment call.",
        "",
        "## Needs your attention",
        "",
        "**Flagged as weak benchmark items (consider dropping or replacing):**",
    ]
    L += [f"- `{i}` — {n}" for i, n in weak] or ["- none"]
    L += ["", "**Severity-gated items (model must get the grade right to pass — confirm the grade is readable):**"]
    L += [f"- `{i}` — {s}" for i, s in gated] or ["- none"]
    L += ["", "**Open questions raised by the panel:**"]
    L += [f"- `{i}` — {q}" for i, q in open_qs] or ["- none"]
    L += ["", "## Sign-off checklist", "", "| Item | Image | Modality | Severity gate | Flag | Sign-off |", "|---|---|---|---|---|---|"]
    weak_ids = {i for i, _ in weak}
    gated_ids = {i for i, _ in gated}
    for it in all_items:
        img = Path(it["image"]).name
        sev = it.get("expected_severity") or "-"
        flag = "weak" if it["id"] in weak_ids else ("control" if it.get("is_control") else "")
        L.append(f"| `{it['id']}` | {img} | {it['modality']} | {sev} | {flag} | [ ] |")
    (ROOT / "VALIDATION.md").write_text("\n".join(L) + "\n")

    print(f"items.json now has {len(all_items)} items ({len(new)} new). "
          f"weak={len(weak)} gated={len(gated)} open_q={len(open_qs)}")


if __name__ == "__main__":
    main()
