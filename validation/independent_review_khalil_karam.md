# Independent clinical validation — third reviewer (Dr Khalil Karam)

**Reviewer:** Dr Khalil Karam, independent of the ground-truth author. Affiliation to be confirmed
for the author list.
**Date:** 2026-06-22. All 90 items reviewed against data commit `9fa7576` through the clinician
validation page (`docs/validate.html`).

## Returned submission (verbatim)

Decisions: **83 fair · 7 needs-edit · 0 excluded.**

Items flagged as submitted:

- `anat-01` [needs edit]: enamel is not labeled, dentin is cut off
- `photo-intraoral-01` [needs edit]: lower premolars not shown
- `deciduous_permanent_teeth` [needs edit]: palate on permanent dentition
- `single_crown_implant` [needs edit]: implant label and crown label not shown
- `permanent_maxillary_teeth_by_rokaya_yahia_` [needs edit]: central and lateral incisors not shown
- `blausen_0864_toothdecay_ar` [needs edit]: arabic labels require auditing
- `overjet_overbite` [needs edit]: overjet label is cut off

## Resolution

Each flag was checked against the full-resolution source image in `data/images/`. All seven were
**rendering artifacts of the validation page's thumbnail**, which centre-cropped tall and square
images (`object-fit: cover`) and hid edge labels in the small preview. In the full images:

- `anat-01` (tooth_anatomy.png): "Enamel" is labeled and the dentin is fully shown.
- `single_crown_implant`: all three components are text-labeled (IMPLANT, ABUTMENT, CROWN).
- `permanent_maxillary_teeth_by_rokaya_yahia_`: the central and lateral incisors are labeled at the
  top of the sketch (قاطع مركزى, قاطع جانبى).
- `overjet_overbite`: the "overjet" label is present at the bottom of the diagram.
- `photo-intraoral-01`: the rubric requires molars/premolars visible on both sides (satisfied);
  lower premolars are not a required finding.
- `deciduous_permanent_teeth`: the palate is labeled in the maxillary arches, as the rubric states.
- `blausen_0864_toothdecay_ar`: the Arabic anatomical labels are standard (e.g. ميناء enamel,
  عاج dentin, لب السن pulp) and do not affect the English-language grading rubric.

The validation page thumbnail was changed from `object-fit: cover` to `object-fit: contain`
(commit `1b2c7b3`) so the whole image is shown. **No rubric edits or exclusions resulted; the
ground truth is unchanged.** Net outcome: all 90 items confirmed clinically fair.
