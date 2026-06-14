"""Append a round of authored ground truth into the existing dataset.

Unlike tools/assemble.py (which rebuilt from a fixed base), this ADDS the items in
data/groundtruth.json to the already-committed data/items.json (idempotent on id,
control kept last) and APPENDS a round section to VALIDATION.md so earlier rounds
are preserved.
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SEV_KEEP = re.compile(r"(mild|moderate|severe|early|advanced)", re.I)


def norm_sev(s):
    return s if (s and SEV_KEEP.search(s)) else None


def main() -> None:
    round_label = sys.argv[1] if len(sys.argv) > 1 else "Round"
    gt = json.loads((ROOT / "data/groundtruth.json").read_text())
    wl = {w["id"]: w for w in json.loads((ROOT / "data/worklist.json").read_text())}
    data = json.loads((ROOT / "data/items.json").read_text())
    existing = data["items"]

    new, weak, open_qs, gated = [], [], [], []
    for g in gt:
        w = wl.get(g["id"])
        if not w:
            print("WARN: no worklist for", g["id"]); continue
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

    new_ids = {it["id"] for it in new}
    base = [it for it in existing if it["id"] not in new_ids]  # idempotent
    control = [it for it in base if it.get("is_control")]
    main_items = [it for it in base if not it.get("is_control")]
    data["items"] = main_items + new + control
    (ROOT / "data/items.json").write_text(json.dumps(data, indent=2) + "\n")

    L = ["", "---", "", f"## {round_label} additions ({len(new)} items, DRAFT)", ""]
    L += ["**Weak / reconsider:**"] + ([f"- `{i}` — {n}" for i, n in weak] or ["- none"])
    L += ["", "**Severity-gated (confirm the grade is readable):**"] + ([f"- `{i}` — {s}" for i, s in gated] or ["- none"])
    L += ["", "**Open questions:**"] + ([f"- `{i}` — {q}" for i, q in open_qs] or ["- none"])
    L += ["", "| Item | Image | Modality | Severity gate | Flag | Sign-off |", "|---|---|---|---|---|---|"]
    weak_ids = {i for i, _ in weak}
    for it in new:
        L.append(f"| `{it['id']}` | {Path(it['image']).name} | {it['modality']} | "
                 f"{it.get('expected_severity') or '-'} | {'weak' if it['id'] in weak_ids else ''} | [ ] |")
    with (ROOT / "VALIDATION.md").open("a") as f:
        f.write("\n".join(L) + "\n")

    print(f"items.json now {len(data['items'])} items (+{len(new)}). weak={len(weak)} gated={len(gated)} open_q={len(open_qs)}")


if __name__ == "__main__":
    main()
