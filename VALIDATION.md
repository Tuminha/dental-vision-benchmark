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

---

## Round 2 additions (24 items, DRAFT)

**Weak / reconsider:**
- `acute_necrotising_ulcerative_gingivitis` — The image content (palatal/oropharyngeal erythema with spots and a coated, inflamed tongue) does not match the item id or hint of acute necrotising ulcerative gingivitis, which involves the marginal gingiva with punched-out necrotic papillae; the depicted diagnosis is non-specific and ambiguous, so this is a poor ground-truth item for that label and should be re-imaged or re-labeled.
- `prummelklammer` — It is a crude, unlabeled hand-drawn schematic whose exact clasp subtype (e.g., specifically a Prümmel clasp versus a generic bar/Roach clasp) is not reliably readable from the drawing, so grading the precise nomenclature is ambiguous.
- `treatment_steps_for_feldspathic_vm9_porcel` — It is a multi-panel before/intermediate/after procedure montage of an esthetic crown workflow rather than a single image with one clear finding, so a no-caption description is hard to grade consistently against ground truth.
- `new_nanocomposites_may_mean_more_durable_t` — The image is a clear, well-lit macro of an isolated tooth, but the key claim implied by the hint (a calcium-phosphate nanocomposite filling) is not visually distinguishable from natural enamel — a tooth-colored restoration on a tooth-colored crown has no obvious margin at this resolution. The arrow tells the viewer where to look but not what they are seeing, so a model cannot be fairly graded on identifying the restoration material; gradable content is limited to image type, tooth/occlusal view, and the presence of an annotation arrow.
- `packable_composite_placed_in_a_lower_right` — The tooth-colored composite restoration is not crisply demarcated from the surrounding enamel and stained fissures, so the specific diagnosis (class I composite in a lower-right first molar) is hard to confirm from the image alone and is easily confused with a sealant, simple staining, or early occlusal discoloration. The image is genuinely a clinical intraoral macro of mandibular molars with tooth-colored restorative material and stained fissures, which is gradable at the level of modality, tooth type/region, and material color, but tooth-number and restoration-class specificity should not be pass-gated.
- `dental_veneer` — The image is a clean, well-lit macro of ceramic restorations, but the exact restoration class is ambiguous from this single ex vivo view (thin veneer vs full anterior crown), and the isolated lab-specimen presentation differs from a typical clinical veneer case, so grading should reward identifying 'anterior ceramic/porcelain restoration on dark background, ex vivo' rather than penalizing veneer-vs-crown distinctions.

**Severity-gated (confirm the grade is readable):**
- `dental_caries_cavity_2_cropped` — advanced
- `dental_caries_cavity_1` — advanced
- `bellingham_fluorosis_3` — moderate fluorosis

**Open questions:**
- `dental_quadrants` — Confirm whether the depicted dentition should be read as the full permanent (adult) set of 32 teeth versus an unspecified count, since the cross lines emphasize quadrant division more than exact tooth number.
- `diagram_illustrating_coronal_and_apical_fo` — Confirm whether the magenta apical zones should be described strictly as the apical portion of the dental follicle (developmental sac) versus the developing periodontal/root-investing tissue, since the figure's terminology is research-specific.
- `suunad` — Whether to require the model to recognize the labels are specifically Estonian (vs. simply identifying the correct surface/direction concepts in any language) for full credit.
- `tooth_picturewlabels` — Confirm the buccal/lingual and mesial/distal assignments are consistent with the diagram's right-side orientation (i.e., that the paracone/metacone sit buccally and protocone/hypocone lingually as labeled) rather than a mirrored layout.
- `acute_necrotising_ulcerative_gingivitis` — Was the intended image a marginal-gingiva view of ANUG that got swapped for this palate/oropharynx/tongue photo? A senior clinician should confirm whether to re-source an actual NUG gingival image or relabel this item to the oropharyngeal/lingual condition it truly depicts.
- `dental_caries_cavity_2_cropped` — Confirm tooth identity (likely a maxillary first premolar) and whether the white/metallic glint at the distal margin should be read as a residual amalgam/restoration versus a moisture/light reflection.
- `dental_caries_cavity_1` — Confirm the exact tooth type/position (molar vs premolar) and whether the central darkened area represents pure carious cavitation versus possible pulp exposure or a pre-existing failed restoration.
- `alveolprog` — Confirm whether the dentition stage should be graded as primary vs. early mixed dentition, and whether to require the specific etiology (thumb sucking/tongue thrust) for a pass or accept "anterior open bite with incisor proclination" since the habit itself is inferred, not directly visible.
- `erosive_lichen_planus` — Severity is not clearly gradeable from this single view; a senior clinician should confirm whether the lesion is best labeled erosive vs atrophic oral lichen planus and whether biopsy/differential (e.g., lichenoid reaction, MMP) is warranted.
- `lichen_planus_fig7` — Confirm whether the lateral-tongue lesion should be graded as predominantly reticular versus showing an atrophic/erosive component, and whether the lower-lip involvement is genuine lichen planus or a separate finding, since this affects the expected diagnostic specificity.
- `herpes_blisters_on_lips_in_a_47_year_old_w` — Whether to accept a generic answer of "vesicular/ulcerative lip lesion" or to require the specific herpes labialis (cold sore) diagnosis for a full pass.
- `bellingham_fluorosis_3` — Severity grade is a judgment call: the brown staining plus opacities suggest at least moderate fluorosis, but confirm whether visible surface irregularity/pitting warrants grading this as severe (TF/Dean's index) rather than moderate.
- `nankali_post_a_fractured_tooth` — Confirm the post type: the hatched cylinder reads as a threaded/screw-retained post, but it could be intended as a generic serrated/parallel post — confirm whether the ground truth should require "threaded/screw" specifically or accept any intracanal post.
- `wortel_fractuur` — Confirm whether the fracture pattern should be characterized specifically as a vertical root fracture versus a transverse/horizontal root fracture, since the exact fracture plane is hard to read from the ex-vivo orientation.
- `prummelklammer` — Confirm whether the drawing should be graded as the specific Prümmel-Klammer (a particular wrought-wire/bar clasp design) or accepted more broadly as any removable partial denture clasp/retainer engaging an abutment tooth.
- `detached_dental_crown_flat_front` — Confirm whether the two dark grey-blue internal projections are best described as retained post/core or metal-substructure remnants versus the crown's own metal coping showing through, and confirm the restoration type is PFM rather than an all-ceramic crown with a metal post.
- `treatment_steps_for_feldspathic_vm9_porcel` — Confirm whether panel 3 shows a definitive post-and-core/abutment build-up versus simple crown preparations, and whether the final restorations are full crowns or veneers, since the exact restoration type cannot be stated with certainty from the photo alone.
- `temporomandibular_joint_number` — Confirm the intended identity of the red structures (numbered 1 and 2) anteriorly — whether they represent the lateral pterygoid muscle, the superficial temporal/maxillary vessels, or both — and whether the model should be expected to name them specifically.
- `eb1911_mouth_and_salivary_glands` — Whether to require the model to name all three major glands AND their specific ducts for full credit, or accept correct identification of the salivary-gland anatomy theme with the parotid/Stensen's duct alone.
- `geographic_tongue` — A few subtle shallow grooves are visible, so coexisting mild fissured tongue cannot be fully excluded, but it is not the dominant finding and should not be required.
- `mouth_parotid_gland_nih_bioart_654` — The hint says "parotid," but the schematic depicts generic serous-predominant salivary gland tissue; the diagram itself does not clearly specify parotid versus another major gland.
- `new_nanocomposites_may_mean_more_durable_t` — Whether the arrow indicates a placed restoration (e.g., a tooth-colored composite filling) versus a natural enamel feature cannot be resolved from the image alone; the hint suggests a calcium-phosphate nanocomposite filling but this is not visually confirmable.
- `packable_composite_placed_in_a_lower_right` — Is the central brown-yellow area in the middle panel a placed tooth-colored restoration (composite/sealant) margin, or simply stained/discolored intact occlusal enamel? Confirming the exact tooth (lower right first molar) and class I designation would require the original clinical record.
- `dental_veneer` — Whether these are thin labial veneers versus full-coverage anterior crowns cannot be determined with certainty from this view; the full facial contour and incisal wrap suggest they could be either, and exact restoration type is ambiguous.

| Item | Image | Modality | Severity gate | Flag | Sign-off |
|---|---|---|---|---|---|
| `dental_quadrants` | dental_quadrants.png | diagram | - |  | [ ] |
| `diagram_illustrating_coronal_and_apical_fo` | diagram_illustrating_coronal_and_apical_fo.png | diagram | - |  | [ ] |
| `suunad` | suunad.png | diagram | - |  | [ ] |
| `tooth_picturewlabels` | tooth_picturewlabels.jpg | diagram | - |  | [ ] |
| `acute_necrotising_ulcerative_gingivitis` | acute_necrotising_ulcerative_gingivitis.jpg | clinical_photo | - | weak | [ ] |
| `dental_caries_cavity_2_cropped` | dental_caries_cavity_2_cropped.jpg | clinical_photo | advanced |  | [ ] |
| `dental_caries_cavity_1` | dental_caries_cavity_1.jpg | clinical_photo | advanced |  | [ ] |
| `alveolprog` | alveolprog.jpg | clinical_photo | - |  | [ ] |
| `erosive_lichen_planus` | erosive_lichen_planus.jpg | clinical_photo | - |  | [ ] |
| `lichen_planus_fig7` | lichen_planus_fig7.jpg | clinical_photo | - |  | [ ] |
| `herpes_blisters_on_lips_in_a_47_year_old_w` | herpes_blisters_on_lips_in_a_47_year_old_w.jpg | diagram | - |  | [ ] |
| `bellingham_fluorosis_3` | bellingham_fluorosis_3.jpg | clinical_photo | moderate fluorosis |  | [ ] |
| `nankali_post_a_fractured_tooth` | nankali_post_a_fractured_tooth.jpg | diagram | - |  | [ ] |
| `wortel_fractuur` | wortel_fractuur.jpg | clinical_photo | - |  | [ ] |
| `prummelklammer` | prummelklammer.jpg | diagram | - | weak | [ ] |
| `detached_dental_crown_flat_front` | detached_dental_crown_flat_front.jpg | clinical_photo | - |  | [ ] |
| `treatment_steps_for_feldspathic_vm9_porcel` | treatment_steps_for_feldspathic_vm9_porcel.jpg | clinical_photo | - | weak | [ ] |
| `temporomandibular_joint_number` | temporomandibular_joint_number.png | diagram | - |  | [ ] |
| `eb1911_mouth_and_salivary_glands` | eb1911_mouth_and_salivary_glands.jpg | diagram | - |  | [ ] |
| `geographic_tongue` | geographic_tongue.jpg | clinical_photo | - |  | [ ] |
| `mouth_parotid_gland_nih_bioart_654` | mouth_parotid_gland_nih_bioart_654.png | diagram | - |  | [ ] |
| `new_nanocomposites_may_mean_more_durable_t` | new_nanocomposites_may_mean_more_durable_t.jpg | clinical_photo | - | weak | [ ] |
| `packable_composite_placed_in_a_lower_right` | packable_composite_placed_in_a_lower_right.jpg | clinical_photo | - | weak | [ ] |
| `dental_veneer` | dental_veneer.jpg | clinical_photo | - | weak | [ ] |

---

## Round 3 additions (13 items, DRAFT)

**Weak / reconsider:**
- `dens_evaginatus` — Crude hand-drawn study sketch: the title word makes the diagnosis nearly self-labeling, and the line drawing is ambiguous enough that the projecting tubercle could be read as a root or an unrelated cusp without the caption, so it tests reading the label more than recognizing the lesion. Faint mirror-image bleed-through from the reverse page adds visual noise.
- `non_carious_cervical_lesion` — The view is a real, well-exposed lateral intraoral photo, but it is a wide buccal occlusion shot rather than a close-up of a single tooth, so the defining feature of the labeled diagnosis (a wedge-shaped/notched cervical lesion) is not crisply resolvable. Cervical color change, gingival recession, and incisal wear are visible, but a model cannot reliably distinguish a true non-carious cervical lesion from cervical staining, recession, or early cervical caries at this magnification. A tighter, well-lit close-up of the affected cervical region (ideally with a probe or labeling) would make this a clean item.

**Severity-gated (confirm the grade is readable):**
- `connective_tissue_graft_to_implant` — moderate recession defect
- `hyperdontia_genetically_inherited_developm` — severe crowding
- `periodontitis_01` — advanced (severe) periodontitis

**Open questions:**
- `pulp_cap` — The exact capping material is not specified by the diagram, so the model cannot be expected to name it (e.g. calcium hydroxide vs MTA).
- `connective_tissue_graft_to_implant` — Is the affected unit an implant-supported crown versus a natural tooth crown, and which specific tooth position is it? This cannot be determined from the single photo without a radiograph or chart.
- `four_mandibular_implants_with_novaloc_abut` — The exact attachment system/brand (Novaloc vs LOCATOR vs ball) cannot be confirmed from the image alone; the dark coating is consistent with Novaloc but is not definitive.
- `dens_evaginatus` — The sketch does not specify tooth type or location, so the model cannot reliably state whether a premolar (classic dens evaginatus / Leong's tubercle) or an anterior tooth (talon cusp variant) is intended.
- `hyperdontia_genetically_inherited_developm` — Is the darkened maxillary anterior tooth a non-vital/traumatized tooth or simply an impacted/ectopic supernumerary showing through thin mucosa?
- `maxillary_tori` — The torus is fairly low/flat in this view; it is possible to read it as a normal palatal vault with a prominent median raphe rather than a discrete torus, so reasonable descriptions emphasizing a midline palatal bony prominence should be accepted.
- `non_carious_cervical_lesion` — Which specific tooth carries the non-carious cervical lesion, and is its etiology abfraction, erosion, abrasion, or a combination (not determinable from this single lateral view)?
- `periodontium` — Because the letters A–K have no accompanying key, the exact intended structure for each individual letter cannot be verified from the image alone; grading should reward correct identification of the structures present rather than a specific letter-to-structure mapping.
- `periodontitis_01` — Is the extracted tooth in panel B the same heavily-involved molar seen in panel A (most consistent interpretation), and was it extracted due to hopeless periodontal prognosis?
- `human_tooth_diagram_gu` — Whether the illustration is intended to depict a specific tooth type (e.g., molar) or a generic tooth; the section shows what reads as a single root, so tooth-type claims should not be pass-gating.

| Item | Image | Modality | Severity gate | Flag | Sign-off |
|---|---|---|---|---|---|
| `pulp_cap` | pulp_cap.png | diagram | - |  | [ ] |
| `connective_tissue_graft_to_implant` | connective_tissue_graft_to_implant.gif | clinical_photo | moderate recession defect |  | [ ] |
| `four_mandibular_implants_with_novaloc_abut` | four_mandibular_implants_with_novaloc_abut.jpg | clinical_photo | - |  | [ ] |
| `examples_of_tooth_staining` | examples_of_tooth_staining.jpg | clinical_photo | - |  | [ ] |
| `dens_evaginatus` | dens_evaginatus.jpg | diagram | - | weak | [ ] |
| `hyperdontia_genetically_inherited_developm` | hyperdontia_genetically_inherited_developm.jpg | clinical_photo | severe crowding |  | [ ] |
| `maxillary_tori` | maxillary_tori.jpg | clinical_photo | - |  | [ ] |
| `non_carious_cervical_lesion` | non_carious_cervical_lesion.jpg | clinical_photo | - | weak | [ ] |
| `periodontium` | periodontium.png | diagram | - |  | [ ] |
| `molar_relationship` | molar_relationship.jpg | diagram | - |  | [ ] |
| `periodontitis_01` | periodontitis_01.jpg | clinical_photo | advanced (severe) periodontitis |  | [ ] |
| `human_tooth_diagram_gu` | human_tooth_diagram_gu.png | diagram | - |  | [ ] |
| `tooth_structure_and_dental_tissues_with_th` | tooth_structure_and_dental_tissues_with_th.png | diagram | - |  | [ ] |
