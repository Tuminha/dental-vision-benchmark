# Ground-Truth Validation Log

The ground truth for every image (the `must_identify` / `must_avoid` points, the
expected severity, and the reference caption) is **clinician-authored DRAFT**. This
log records sign-off by the periodontist author. Until every item below is confirmed,
the dataset is marked DRAFT and results are **not for citation** — the same gate used
by the sibling text benchmark.

How to use it: for each item, read the image, check that the ground truth is correct
and fair, then mark the verdict and add any change. An item is "signed" once the
verdict box is checked.

## Status summary

| Item | Image | Modality | Severity gate | Sign-off |
|---|---|---|---|---|
| `anat-01` | tooth_anatomy.png | diagram | — | [ ] pending |
| `perio-mild-01` | perio_mild.png | diagram | mild | [ ] pending |
| `perio-severe-01` | perio_severe.png | diagram | severe | [ ] pending |
| `caries-01` | caries.png | diagram | — | [ ] pending |
| `photo-intraoral-01` | intraoral_photo.jpg | clinical_photo | — | [ ] pending |
| `anat-01-control` | tooth_anatomy_control.png | diagram | — | inherits `anat-01` |

---

## anat-01 — tooth anatomy cross-section
- **Image:** `data/images/tooth_anatomy.png` (Blausen, CC BY 3.0)
- **Modality:** diagram (labeled) · **Expected severity:** none
- **must_identify:** cross-section/internal structure of a tooth · enamel · dentin · pulp (chamber/canal/nerves and vessels) · crown and root · surrounding gum and alveolar bone
- **must_avoid:** calling it a radiograph or clinical photograph
- **reference caption:** Tooth Anatomy: cross-section showing enamel, dentin, pulp, crown, root, root canal, gums, bone, nerves and blood vessels.
- **Clinician verdict:** [ ] confirm as-is · [ ] change (note below)
- **Notes:**

## perio-mild-01 — mild periodontitis schematic
- **Image:** `data/images/perio_mild.png` (Ian Furst, CC BY-SA 4.0)
- **Modality:** diagram (unlabeled) · **Expected severity:** mild (pass-gating)
- **must_identify:** tooth in a periodontal schematic · gingival margin · alveolar bone level · periodontal ligament · a periodontal pocket / pocket-depth measurement
- **must_avoid:** describing it as severe/advanced periodontitis · describing the periodontium as completely healthy
- **reference caption:** Line diagram of a tooth showing the gingiva, bone, periodontal ligament with a scale showing the pocket depth of mild periodontitis.
- **Open question for you:** is "mild" fairly readable from this diagram alone (the only cue is the pocket-depth scale), or is the item too ambiguous to gate on severity?
- **Clinician verdict:** [ ] confirm as-is · [ ] change (note below)
- **Notes:**

## perio-severe-01 — severe periodontitis schematic
- **Image:** `data/images/perio_severe.png` (Ian Furst, CC BY-SA 4.0)
- **Modality:** diagram (unlabeled) · **Expected severity:** severe (pass-gating)
- **must_identify:** tooth in a periodontal schematic · gingival margin · alveolar bone level · periodontal ligament · a deep periodontal pocket / significant attachment loss
- **must_avoid:** describing it as mild/early periodontitis · describing the periodontium as completely healthy
- **reference caption:** Line diagram of a tooth showing the gingiva, bone, periodontal ligament with a scale showing the pocket depth of severe periodontitis.
- **Clinician verdict:** [ ] confirm as-is · [ ] change (note below)
- **Notes:**

## caries-01 — dental caries illustration
- **Image:** `data/images/caries.png` (DBCLS, CC BY 4.0)
- **Modality:** diagram (unlabeled) · **Expected severity:** none
- **must_identify:** cross-section diagram of a tooth (not a radiograph/photo) · dental caries / a cavity · lesion on the crown / occlusal surface · decay extending into dentin (toward the pulp) · the pulp / root canal system
- **must_avoid:** describing the tooth as healthy with no decay · calling it a radiograph or clinical photograph
- **reference caption:** Diagram of dental caries: a tooth in cross-section with a carious lesion on the crown extending through enamel into dentin toward the pulp.
- **Open question for you:** the lesion appears to reach the pulp — should the rubric require "deep/pulpal involvement" specifically, or is "into dentin" the right bar?
- **Clinician verdict:** [ ] confirm as-is · [ ] change (note below)
- **Notes:**

## photo-intraoral-01 — intraoral clinical photo
- **Image:** `data/images/intraoral_photo.jpg` (JonaLane, CC0)
- **Modality:** clinical_photo · **Expected severity:** none
- **must_identify:** a clinical intraoral photograph (real photo, not diagram/x-ray) · teeth (molars/premolars both sides) · the tongue · the palate / uvula / soft palate / throat · gingiva
- **must_avoid:** calling it a diagram/illustration or a radiograph
- **reference caption:** A clinical intraoral photograph of an open mouth showing teeth, tongue, palate, uvula and surrounding oral soft tissues.
- **Open question for you:** the molars show staining/plaque. Should the ground truth stay descriptive (anatomy only), or also require the model to note the oral-hygiene finding?
- **Clinician verdict:** [ ] confirm as-is · [ ] change (note below)
- **Notes:**

## anat-01-control — memorization control
- **Image:** `data/images/tooth_anatomy_control.png` (transformed copy of `anat-01`: horizontal flip + 12% center crop)
- Ground truth inherits `anat-01`. Confirm only that the transform left the clinical content intact and readable.
- **Clinician verdict:** [ ] confirm as-is · [ ] change (note below)
- **Notes:**
