# Ground-Truth Validation — final sign-off

All 90 items were reviewed and signed off by the periodontist author (Francisco Teixeira
Barbosa) on **2026-06-15**, via a confirm-by-default review of every image against its
ground truth.

## Outcome
- **87 of 90 confirmed as authored.**
- **3 corrected:**
  - `110216ek08` — rubric relaxed so it no longer requires reading the French annotations or diagnosing a narrow palate; only that it is a child's mixed-dentition maxillary occlusal photo.
  - `zmo0594_001` — rubric softened from a firm caries/amalgam claim to brown occlusal-fissure staining under blue-field isolation.
  - `acute_necrotising_ulcerative_gingivitis` — the original file was mislabeled (palate/tongue erythema, not gingival necrosis); replaced with a real ANUG photo (CC BY-SA 4.0) and re-authored.

## Independent clinical validation (second reviewer)

A second, independent dentist reviewed all 90 items against the same ground truth through the
clinician validation page (`docs/validate.html`) on **2026-06-16**, against data commit `5ccc42f`
(the pinned, released ground truth).

- **Reviewer:** Daniel Robles Cantero, DDS, PhD — Dens-IA Dental Group Research, Faculty of Health
  Sciences, Miguel de Cervantes European University (UEMC), Valladolid, Spain. Independent of the
  ground-truth author.
- **Outcome:** 90 of 90 confirmed clinically fair, with 0 rubric edits and 0 exclusions.
- **Record:** the reviewer's returned submission is preserved in
  [`validation/independent_review_daniel_robles.md`](validation/independent_review_daniel_robles.md).

This is one independent reviewer reporting no disagreements. A second independent reviewer and
clinician adjudication of the judge-disagreement set (`validation/judge_disagreements.csv`) remain
available to strengthen the manuscript further.

## Weak / ambiguous items (kept, reported separately)
Ten items are flagged `"weak": true` in `data/items.json`. They remain in the dataset but
are excluded in the sensitivity analysis (see `results/leaderboard.md`):

`access_toothbrush_for_use_with_mini_dental`, `leukoplakia`, `runningroom`,
`new_nanocomposites_may_mean_more_durable_t`, `dens_evaginatus`, `non_carious_cervical_lesion`,
`prummelklammer`, `packable_composite_placed_in_a_lower_right`,
`treatment_steps_for_feldspathic_vm9_porcel`, `dental_veneer`.

## Provenance
- Full per-item rubrics (`must_identify` / `must_avoid` / caption / severity): `data/items.json`.
- The incremental authoring and review trail (round-by-round drafts, open questions, prior
  flags) is preserved in [`VALIDATION_HISTORY.md`](VALIDATION_HISTORY.md).
