# Ground-Truth Validation Log

The ground truth for all 54 items is **clinician-authored DRAFT** (the diagram/photo rubrics were drafted by clinician-agents and need your sign-off). Until each item is confirmed the dataset is DRAFT and results are **not for citation**.

Full rubrics (`must_identify` / `must_avoid` / caption) live in `data/items.json`; this log is the sign-off checklist plus the items that need a judgment call.

## Needs your attention

**Flagged as weak benchmark items (consider dropping or replacing):**
- `access_toothbrush_for_use_with_mini_dental` — This is a marketing/product illustration of a hygiene device around an implant ball abutment rather than a clean dental anatomy, pathology or clinical image, so it is a borderline benchmark item.
- `leukoplakia` — The white change is diffuse and subtle against the wet floor-of-mouth mucosa rather than a sharply demarcated plaque, so the leukoplakia is harder to read unambiguously than a textbook example.
- `runningroom` — Heavily cropped with graphic overlay and an unconventional framing, making the underlying anatomy and the intended 'running room' concept ambiguous without context.

**Severity-gated items (model must get the grade right to pass — confirm the grade is readable):**
- `smoothsurfacecaries02` — early / enamel-confined caries
- `moderate_periodontitis` — moderate periodontitis
- `sever_crowding_of_teeth` — severe crowding

**Open questions raised by the panel:**
- `110216ek08` — Confirm whether the ground truth should require the model to read the French labels and the narrow/deep palate finding, or only to recognise a labelled mixed-dentition maxillary arch.
- `zahnfehlstellung_angle_klasse_ii_1` — The drawing is crude and unlabeled; confirm whether 'Class II div 1 / increased overjet' is firm enough to be pass-gating or whether a generic 'malocclusion with increased overjet' should suffice.
- `aphthous_stomatitis_in_the_mouth` — The aphthous ulcer is small and the lighting glares; confirm the inner-lip lesion is read as the intended aphtha rather than the small crusted lesion at the vermilion border.
- `aphthous_stomatitis` — Confirm the lesions are on the tongue (ventral/lateral) versus floor of mouth, given the finger retraction and oblique angle make the exact mucosal site hard to pin down.
- `calculus_2` — Exact arch/teeth are hard to confirm from the cropped macro view; confirm whether the ground truth should commit to mandibular anterior teeth or stay generic to 'teeth at the gumline'.
- `periodontal_ligament_normal_pocket_depth` — The scale is unlabeled, so whether a grader should require the description to explicitly read it as 'normal/healthy' depth versus simply 'a tooth and periodontium diagram' is a judgment call.
- `gingivitida` — The image is a realistic 3D render that could be mistaken for a photograph; reviewer should confirm whether to grade it as 'diagram/illustration' (recommended) given how photoreal it looks.
- `smoothsurfacecaries02` — Exact lesion depth is hard to judge from a rough sketch; reviewer should confirm whether 'enamel-confined / early' severity is appropriate versus simply 'caries present', since this is part of a 02-05 progression series.
- `smoothsurfacecaries03` — As part of a progression series, the precise depth (still in enamel vs. just into dentin) is ambiguous on a rough sketch; reviewer should confirm the intended stage relative to the 02/04 sketches.
- `smoothsurfacecaries04` — Depth grading on a rough sketch is approximate; reviewer should confirm 'into dentin' is the intended stage for sketch 04 relative to sketches 03 and 05 in the series.
- `permanent_maxillary_teeth_by_rokaya_yahia_` — Should the model be required to read/translate the Arabic labels, or is correctly identifying the modality, the permanent maxillary quadrant, and the tooth sequence sufficient for a pass?
- `teeth_types_colored` — Should the ground truth require the model to correctly map each specific color to its tooth type (orange=incisor, green=canine, magenta=premolar, blue=molar), or is identifying the four-type grouping by position sufficient given there is no color legend in the image?
- `depiction_of_a_periodontitis_patient` — The diagram depicts periodontitis generically without a defined stage/grade; confirm we do not want any severity to be pass-gating here.
- `moderate_periodontitis` — The "moderate" stage is the diagram's intended teaching point, but no numeric pocket-depth values are printed on the image; confirm whether the judge should require the specific word "moderate" or accept any correct identification of a pathologically deepened pocket / periodontitis.
- `periodontal_terms_diagram_gingival_recessi` — Confirm whether segment 2 represents gingival recession (CEJ-to-gingival-margin) and segment 3 represents probing pocket depth (gingival-margin-to-pocket-base), or the reverse, since only bare numbers (no text labels) are shown and the assignment depends on reading the anatomy.
- `gingival_sulcus` — Whether the lettered stack (H/I/J/K/C/D/E) should be treated as depicting a healthy sulcus only, versus a generic dentogingival junction template that some atlases reuse for both sulcus and pocket; a senior clinician should confirm we are not implicitly requiring "healthy" when the source legend (not visible here) may intend it as a neutral anatomy key.
- `line_diagram_of_gingivitis` — Confirm whether the right-side stippled red marginal swelling plus the dotted scale should be graded by the model strictly as gingivitis with a pseudopocket (intact bone), or whether the scale is ambiguous enough that a model reading a shallow true pocket should not be penalized.
- `smoothsurfacecaries05` — Confirm whether the lesion as drawn should be read as having clearly crossed the dentinoenamel junction into dentin (dentinal caries) versus a deep but still enamel-confined lesion at the surface; the hand-drawn boundary is somewhat ambiguous.
- `blausen_0864_toothdecay_ar` — The carious lesion appears deep and dark, approaching the pulp; a senior clinician should confirm whether the ground truth should call it specifically "deep/advanced caries" or leave the depth ungraded, since the illustration is schematic rather than a true severity-staging diagram.
- `diagram_of_tooth_erosion` — The diagram's title says 'erosion' but the lesion depicted (brown cavity from plaque acid plus tartar and gingival recession) is dental caries/decay and periodontal change rather than true acid erosion; confirm whether the ground truth should treat the label loosely (decay) or hold the model to the stricter erosion-vs-caries distinction.
- `overjet_overbite` — Confirm whether to require the model to correctly assign vertical-vs-horizontal to overbite/overjet (the core teaching point) or accept merely naming both terms; also confirm that the stylized winged incisor geometry should not be over-read as a specific malocclusion.
- `sever_crowding_of_teeth` — Whether to require the model to specify the dentition stage (mixed vs early permanent) or to specifically name the maxillary lateral incisors as the most displaced teeth, versus accepting a general "severe anterior crowding" description.
- `dental_restoration` — The final restorative material looks tooth-colored/composite, consistent with the "composite bonding" hint, but the photo alone cannot confirm composite versus another tooth-colored material (e.g., glass ionomer or ceramic inlay) — confirm whether the ground truth should require the model to name "composite" specifically or only "tooth-colored restoration."
- `zmo0594_001` — Confirm whether the central-fossa brown discoloration should be graded as frank occlusal caries versus merely stained/sound fissures, and confirm tooth type (molar vs premolar) and isolation type (rubber dam vs lip-cheek retractor) from the full-resolution image.
- `zmo0594_006` — Confirm the exact material/step shown: whether the white material is a flowable composite/liner-base, the first increment of composite resin, or a glass-ionomer base, and confirm tooth type/arch (mandibular molar vs premolar) given the mirror-image intraoral-camera view.

## Sign-off checklist

| Item | Image | Modality | Severity gate | Flag | Sign-off |
|---|---|---|---|---|---|
| `anat-01` | tooth_anatomy.png | diagram | - |  | [ ] |
| `perio-mild-01` | perio_mild.png | diagram | mild |  | [ ] |
| `perio-severe-01` | perio_severe.png | diagram | severe |  | [ ] |
| `caries-01` | caries.png | diagram | - |  | [ ] |
| `photo-intraoral-01` | intraoral_photo.jpg | clinical_photo | - |  | [ ] |
| `basic_anatomy_tooth` | basic_anatomy_tooth.jpg | diagram | - |  | [ ] |
| `blausen_0864_toothdecay` | blausen_0864_toothdecay.png | diagram | - |  | [ ] |
| `blausen_0864_toothdecay_croatian_hr` | blausen_0864_toothdecay_croatian_hr.png | diagram | - |  | [ ] |
| `access_toothbrush_for_use_with_mini_dental` | access_toothbrush_for_use_with_mini_dental.jpg | diagram | - | weak | [ ] |
| `full_implant_restoration` | full_implant_restoration.gif | diagram | - |  | [ ] |
| `110216ek08` | 110216ek08.jpg | clinical_photo | - |  | [ ] |
| `zahnfehlstellung_angle_klasse_ii_1` | zahnfehlstellung_angle_klasse_ii_1.jpg | diagram | - |  | [ ] |
| `aphthous_stomatitis_in_the_mouth` | aphthous_stomatitis_in_the_mouth.jpg | clinical_photo | - |  | [ ] |
| `aphthous_stomatitis` | aphthous_stomatitis.jpg | clinical_photo | - |  | [ ] |
| `calculus_2` | calculus_2.jpg | clinical_photo | - |  | [ ] |
| `mandibularanteriorcalculus` | mandibularanteriorcalculus.jpg | clinical_photo | - |  | [ ] |
| `human_tooth_diagram_en` | human_tooth_diagram_en.png | diagram | - |  | [ ] |
| `tooth_2_psf` | tooth_2_psf.png | diagram | - |  | [ ] |
| `tooth_section_numbered` | tooth_section_numbered.png | diagram | - |  | [ ] |
| `deciduous_permanent_teeth` | deciduous_permanent_teeth.png | diagram | - |  | [ ] |
| `periodontal_ligament_normal_pocket_depth` | periodontal_ligament_normal_pocket_depth.png | diagram | - |  | [ ] |
| `gingivitida` | gingivitida.jpg | diagram | - |  | [ ] |
| `smoothsurfacecaries02` | smoothsurfacecaries02.png | diagram | early / enamel-confined caries |  | [ ] |
| `smoothsurfacecaries03` | smoothsurfacecaries03.png | diagram | - |  | [ ] |
| `smoothsurfacecaries04` | smoothsurfacecaries04.png | diagram | - |  | [ ] |
| `blausen_0774_rootcanal` | blausen_0774_rootcanal.png | diagram | - |  | [ ] |
| `root_canal_illustration_molar` | root_canal_illustration_molar.png | diagram | - |  | [ ] |
| `gray1005` | gray1005.png | diagram | - |  | [ ] |
| `human_tooth_ku` | human_tooth_ku.png | diagram | - |  | [ ] |
| `leukoplakia` | leukoplakia.jpg | clinical_photo | - | weak | [ ] |
| `nih_doc_16_homogenousleukoplakia` | nih_doc_16_homogenousleukoplakia.jpg | clinical_photo | - |  | [ ] |
| `caries_periodontal_disease_calculus` | caries_periodontal_disease_calculus.png | clinical_photo | - |  | [ ] |
| `amalgam` | amalgam.jpg | clinical_photo | - |  | [ ] |
| `filling_amalgam` | filling_amalgam.jpg | clinical_photo | - |  | [ ] |
| `ferruleeffectdentistry` | ferruleeffectdentistry.gif | diagram | - |  | [ ] |
| `runningroom` | runningroom.png | clinical_photo | - | weak | [ ] |
| `zahnimplantat` | zahnimplantat.jpg | diagram | - |  | [ ] |
| `single_crown_implant` | single_crown_implant.jpg | clinical_photo | - |  | [ ] |
| `permanent_maxillary_teeth_by_rokaya_yahia_` | permanent_maxillary_teeth_by_rokaya_yahia_.jpg | diagram | - |  | [ ] |
| `teeth_types_colored` | teeth_types_colored.png | diagram | - |  | [ ] |
| `depiction_of_a_periodontitis_patient` | depiction_of_a_periodontitis_patient.png | diagram | - |  | [ ] |
| `moderate_periodontitis` | moderate_periodontitis.png | diagram | moderate periodontitis |  | [ ] |
| `periodontal_terms_diagram_gingival_recessi` | periodontal_terms_diagram_gingival_recessi.png | diagram | - |  | [ ] |
| `gingival_sulcus` | gingival_sulcus.png | diagram | - |  | [ ] |
| `line_diagram_of_gingivitis` | line_diagram_of_gingivitis.png | diagram | - |  | [ ] |
| `smoothsurfacecaries05` | smoothsurfacecaries05.png | diagram | - |  | [ ] |
| `blausen_0864_toothdecay_ar` | blausen_0864_toothdecay_ar.png | diagram | - |  | [ ] |
| `diagram_of_tooth_erosion` | diagram_of_tooth_erosion.png | diagram | - |  | [ ] |
| `overjet_overbite` | overjet_overbite.png | diagram | - |  | [ ] |
| `sever_crowding_of_teeth` | sever_crowding_of_teeth.jpg | clinical_photo | severe crowding |  | [ ] |
| `dental_restoration` | dental_restoration.jpg | clinical_photo | - |  | [ ] |
| `zmo0594_001` | zmo0594_001.jpg | clinical_photo | - |  | [ ] |
| `zmo0594_006` | zmo0594_006.jpg | clinical_photo | - |  | [ ] |
| `anat-01-control` | tooth_anatomy_control.png | diagram | - | control | [ ] |
