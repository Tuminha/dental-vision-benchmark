window.ADJUDICATE_DATA = {
 "meta": {
  "data_commit": "9fa75760c9e606049e100ae903994fcd483bbf85",
  "n": 96
 },
 "rows": [
  {
   "rid": "a001",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/periodontal_ligament_normal_pocket_depth.png",
   "modality": "diagram",
   "must_identify": [
    "This is a line/schematic diagram of a tooth in longitudinal cross-section within its supporting tissues, not a photograph or radiograph",
    "It depicts the periodontium: the gingiva (red outline), the alveolar bone crest (brown/gold line), and the periodontal ligament shown as hatched fibres running between root and bone",
    "A measurement scale (three dots/markers) at the gingival margin indicates the pocket/sulcus depth being represented",
    "The configuration shows a healthy periodontium with a normal (shallow) sulcus depth, with gingival margin and bone crest near the cementoenamel junction and no attachment loss"
   ],
   "must_avoid": [
    "Do not describe this as a real clinical photograph or an X-ray/radiograph",
    "Do not call it diseased, e.g. periodontitis or deep periodontal pocketing with bone loss when it depicts a normal/healthy pocket depth"
   ],
   "caption": "Schematic line diagram of a tooth in cross-section showing the gingiva, alveolar bone, and periodontal ligament with a depth scale at the gingival margin representing a normal (healthy) sulcus/pocket depth.",
   "description": "The image is a diagram illustrating the anatomy of a tooth and its surrounding structures. The visible anatomy includes the tooth, periodontal ligament (red lines between the tooth root and the brown line representing the alveolar bone), and alveolar bone (brown lines). The diagram highlights the relationship between the tooth and its supporting structures, with three black dots on the right side indicating a potential area of interest or measurement, possibly related to the gingiva or periodontal pocket. No specific condition or pathology is depicted in the image, but it appears to be illustrating the normal anatomy or a concept related to periodontal health or disease."
  },
  {
   "rid": "a002",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/tooth_picturewlabels.jpg",
   "modality": "diagram",
   "must_identify": [
    "This is a schematic occlusal-view diagram (line drawing) of a maxillary (upper) molar crown, not a photograph or radiograph",
    "The four primary cusps are color-coded and labeled: paracone (green, mesiobuccal), metacone (magenta, distobuccal), protocone (yellow, mesiolingual), and hypocone (blue, distolingual)",
    "Orientation labels mark the surfaces/directions: mesial, distal, buccal, and lingual",
    "It depicts normal/healthy crown morphology with occlusal grooves and fossae, with no disease, caries, or pathology shown"
   ],
   "must_avoid": [
    "Calling this a photograph, radiograph/X-ray, or clinical intraoral image",
    "Identifying it as a mandibular (lower) molar or premolar rather than an upper molar",
    "Inventing a disease, caries lesion, or pathology when the diagram only shows normal cusp anatomy"
   ],
   "caption": "A labeled occlusal-view schematic of an upper (maxillary) molar crown showing its four cusps color-coded and named, the paracone, metacone, protocone, and hypocone, with mesial, distal, buccal, and lingual orientation labels.",
   "description": "This is a labeled occlusal anatomy diagram of a maxillary molar. It shows the buccal side on the left, lingual side on the right, mesial at the top, and distal at the bottom. The four main cusps are identified: paracone (mesiobuccal), metacone (distobuccal), protocone (mesiolingual), and hypocone (distolingual), with grooves/fossae outlined on the occlusal surface. No pathology or disease is depicted; it is an educational illustration of normal cusp morphology."
  },
  {
   "rid": "a003",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/connective_tissue_graft_to_implant.gif",
   "modality": "clinical photo",
   "must_identify": [
    "Intraoral clinical photograph, buccal/lateral view of posterior teeth/crowns, explicitly labeled 'PRE-OP' (pre-operative baseline)",
    "Gingival/mucosal recession at the marginal gingiva indicated by the black arrowhead, with exposure of a dark restoration margin, abutment, or root surface",
    "A black arrowhead marker pointing to the recession defect at the gingival margin",
    "Crowned/restored posterior teeth showing a marginal soft-tissue/esthetic deficiency at the indicated unit"
   ],
   "must_avoid": [
    "Describing this as the post-operative or healed result of a graft, or claiming a connective tissue graft is visible in the image (this is the PRE-OP baseline showing the defect, not the graft)",
    "Calling it a radiograph/X-ray or any 3D/CBCT image",
    "Asserting with certainty that the affected unit is a dental implant or naming a specific tooth number; the implant nature cannot be confirmed from the photo alone"
   ],
   "caption": "Pre-operative intraoral clinical photograph (buccal view of posterior crowns) with a black arrowhead marking gingival recession and an exposed dark margin at the gingival aspect of one restored unit, representing the baseline defect before mucogingival/soft-tissue graft surgery.",
   "description": "This is a pre-operative intraoral clinical photograph of the buccal/labial aspect of the teeth and gingiva. Visible are several adjacent teeth with white enamel crowns, cervical/root areas, and surrounding pink gingival tissues. A localized gingival defect is present around a lower tooth near the center of the image, with apical displacement of the gingival margin and exposed darker root/cervical surface; the black arrow indicates the area of concern. The finding appears consistent with localized gingival recession/root exposure, at least moderate in extent, with possible cervical discoloration or defect visible at the exposed area."
  },
  {
   "rid": "a004",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/tooth_structure_and_dental_tissues_with_th.png",
   "modality": "diagram",
   "must_identify": [
    "This is a labeled educational/research schematic of tooth anatomy, not a clinical photograph or radiograph; it pairs a whole-tooth cross-section (left) with three magnified histology-style insets (A, B, C)",
    "The cross-section labels the hard and soft tissues and supporting apparatus: enamel, dentin, dental pulp, gingiva, alveolar bone, periodontal ligament, cementum, and the neurovascular (apical) bundle entering the root",
    "Inset A details the pulp-dentin interface/odontoblast layer: odontoblast and odontoblast process, the cell-free zone (of Weil), the cell-rich zone, and pre-odontoblasts",
    "Inset B shows the pulp core cell populations: fibroblasts, blood vessel, pericyte, nerve fiber, and dental pulp stem cells (DPSCs)",
    "Inset C contrasts acellular (primary) cementum versus cellular (secondary) cementum, including cementocytes and their processes",
    "The figure's theme is the location of dental/stem-cell populations (e.g., DPSCs, cementocytes) within the tooth and periodontium"
   ],
   "must_avoid": [
    "Calling this a radiograph/X-ray or an intraoral clinical photo (it is a drawn schematic with histology insets)",
    "Mislabeling the layers, e.g., swapping enamel and dentin, or confusing periodontal ligament with alveolar bone or cementum",
    "Inventing a disease/diagnosis (caries, periodontitis, abscess) \u2014 the figure depicts normal anatomy and cell biology, not pathology"
   ],
   "caption": "Labeled educational schematic of tooth structure and supporting tissues (enamel, dentin, pulp, cementum, periodontal ligament, alveolar bone, gingiva, neurovascular bundle), with three magnified insets mapping cell populations: the odontoblast layer and cell-free/cell-rich zones (A), pulp fibroblasts, vessels, pericytes, nerves and DPSCs (B), and acellular versus cellular cementum with cementocytes (C).",
   "description": "This is a labeled anatomical illustration depicting a cross-section of a molar tooth and its surrounding supporting structures. The main diagram identifies key anatomical features including the enamel, dentin, dental pulp, gingiva, alveolar bone, periodontal ligament, cementum, and the neurovascular bundle running through the root canal. Three magnified circular insets (labeled A, B, and C) provide detailed histological views of specific regions: Inset A shows the dentin-pulp interface with odontoblasts, their processes, and the cell-free and cell-rich zones; Inset B details the cellular composition of the pulp, highlighting fibroblasts, blood vessels, nerve fibers, pericytes, and dental pulp stem cells (DPSCs); and Inset C illustrates the structure of the root surface, distinguishing between acellular and cellular cementum containing cementocytes. The image represents normal, healthy dental anatomy and histology, with no pathology or disease conditions depicted."
  },
  {
   "rid": "a005",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/mandibularanteriorcalculus.jpg",
   "modality": "clinical photo",
   "must_identify": [
    "This is an intraoral clinical photograph, not a diagram or radiograph",
    "It shows the lingual surfaces of the lower (mandibular) anterior teeth, viewed from behind/below",
    "There are heavy yellow-brown hard deposits of dental calculus (tartar) coating the lingual aspects of the teeth near the gumline",
    "The deposits are consistent with supragingival (and likely subgingival) calculus accumulation in the lower anterior lingual region, a typical site near the salivary duct openings"
   ],
   "must_avoid": [
    "Calling this a diagram, illustration, or X-ray/radiograph",
    "Describing the teeth as clean/healthy or ignoring the calculus deposits",
    "Mislabeling the calculus as caries, fillings, or fluorosis rather than tartar/calculus stain"
   ],
   "caption": "Intraoral clinical photograph of the lingual surfaces of the mandibular anterior teeth showing heavy yellow-brown supragingival dental calculus (tartar) deposits along the gingival margins.",
   "description": "This is an intraoral clinical photograph showing the lingual (tongue-side) view of the mandibular anterior teeth, premolars, and surrounding soft tissues. The visible anatomy includes the lingual surfaces of the teeth, the marginal gingiva, and the floor of the mouth. The primary clinical finding is a severe accumulation of yellowish-white dental calculus (tartar) along the cervical margins and interproximal spaces of the incisors and canines, forming a thick bridge across multiple teeth. Additionally, moderate to heavy brown extrinsic staining is present on the lingual surfaces of the crowns. The gingiva immediately adjacent to the calculus appears erythematous (reddened), indicating localized inflammation."
  },
  {
   "rid": "a006",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/periodontium.png",
   "modality": "diagram",
   "must_identify": [
    "Image type: a schematic anatomy/histology cross-section diagram of the periodontium (tooth-supporting apparatus) showing a tooth and its surrounding structures, with letter labels (A through K) but no printed legend/key",
    "Hard dental tissues: enamel (blue-striped cap of the crown), dentin (the large pale-yellow tooth body), and cementum (thin layer covering the root surface)",
    "Periodontal soft tissue and attachment: the gingiva (pink tissue at right) with gingival margin/sulcus, and the band of gingival/periodontal fibers running between the root and the gingiva/bone near the cementoenamel junction",
    "Tooth-supporting structures: the periodontal ligament (the narrow space/fiber layer between the root surface and bone) and the alveolar bone (the trabecular/spongy bone, cream-colored, supporting the root)",
    "Neurovascular supply depicted as blood vessels (a red artery and blue vein) coursing apically on the left side of the periodontal ligament/pulp region"
   ],
   "must_avoid": [
    "Calling this a radiograph, X-ray, or clinical intraoral photograph \u2014 it is an illustrated schematic/diagram",
    "Misidentifying the blue-striped crown cap as anything other than enamel (e.g., calling it calculus, plaque, or a restoration)",
    "Inventing a specific legend/answer key for the letters (A\u2013K) as if the labels were defined in the image, or asserting a disease/pathology \u2014 this is normal healthy anatomy, not periodontitis or bone loss"
   ],
   "caption": "A labeled schematic cross-section of the healthy periodontium, showing the tooth (enamel, dentin, cementum) and its supporting structures, the gingiva with gingival/periodontal fibers, the periodontal ligament, and the alveolar bone, with letter labels A\u2013K but no printed legend.",
   "description": "This is a labeled schematic illustration of a tooth-periodontium cross-section. It shows the tooth crown/root with enamel, dentin, pulp tissues, root cementum, periodontal ligament fibers inserting between the root and alveolar bone, cancellous alveolar bone, and the overlying gingiva with sulcular/junctional epithelium and gingival connective tissue. No pathology is depicted; the structures appear as a normal anatomic relationship of the gingival attachment and supporting tissues."
  },
  {
   "rid": "a007",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/tooth_section_numbered.png",
   "modality": "diagram",
   "must_identify": [
    "This is a numbered cross-sectional diagram of a tooth in its socket, drawn as a multi-rooted molar",
    "Numbered callouts (1-10) point to the enamel, dentin, and pulp internally and to the gingiva, cementum, and surrounding alveolar bone externally",
    "The internal red and blue lines depict the blood vessels (and nerve) running through the pulp and periodontal tissues",
    "Brackets on the left (9 and 10) group the structures into the crown and root regions of the tooth"
   ],
   "must_avoid": [
    "Calling this a clinical photograph or radiograph",
    "Describing it as a diseased or decayed tooth (it shows normal anatomy)",
    "Claiming the parts are named in words (only numbers 1-10 are shown, with no on-image legend)"
   ],
   "caption": "Numbered cross-sectional diagram of a healthy molar in its socket, with callouts 1-10 marking enamel, dentin, pulp, gingiva, cementum, alveolar bone, blood vessels/nerve, and the crown and root regions.",
   "description": "This is a labeled schematic cross-sectional illustration of a multi-rooted posterior tooth. It shows the crown with white enamel, underlying orange dentin, a pink pulp chamber with red and blue neurovascular structures extending into the root canals, and surrounding periodontal tissues including gingiva, periodontal ligament/cementum region, alveolar bone, and blood vessels/nerves at the root apices. No disease, decay, fracture, or other pathology is depicted; it appears to illustrate normal tooth anatomy."
  },
  {
   "rid": "a008",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/perio_mild.png",
   "modality": "diagram",
   "must_identify": [
    "a tooth shown in a periodontal cross-section / schematic (not a real photo or x-ray)",
    "gingiva (gum) margin",
    "alveolar bone level",
    "periodontal ligament",
    "a periodontal pocket or pocket-depth measurement"
   ],
   "must_avoid": [
    "describing it as severe or advanced periodontitis",
    "describing the periodontium as completely healthy with no disease"
   ],
   "caption": "Line diagram of a tooth showing the gingiva, bone, periodontal ligament with a scale showing the pocket depth of mild periodontitis.",
   "description": "1. Type of image: Diagram (illustration) of a tooth and surrounding periodontal structures.  \n2. Anatomy/structures: Tooth (crown, root), periodontal ligament (brown, striped), gingiva (red outline), and alveolar bone (implied).  \n3. Condition: Gingival inflammation (gingivitis) on the right, with a red, swollen gingival area (dotted region) suggesting increased probing depth (mild to moderate severity, as depicted by the diagram)."
  },
  {
   "rid": "a009",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/smoothsurfacecaries05.png",
   "modality": "diagram",
   "must_identify": [
    "A schematic line-drawing cross-section of a tooth crown, with the three layers labeled in text: enamel (outer), dentin (middle), and pulp (central chamber)",
    "A solid black carious lesion on the right side of the crown that has breached the enamel surface and penetrated into the dentin (crossed the dentinoenamel junction)",
    "This is an advanced/later-stage caries lesion: it is no longer confined to enamel but now involves dentin, showing the characteristic spread along the DEJ",
    "The pulp chamber is shown as not yet involved (the lesion has not reached the pulp), indicating dentinal \u2014 not pulpal \u2014 caries"
   ],
   "must_avoid": [
    "Calling this a real clinical photograph or radiograph/X-ray rather than a schematic diagram",
    "Describing the tooth as healthy or the dark area as a normal feature/filling rather than a carious lesion (decay)",
    "Claiming the lesion has reached or involves the pulp, or calling it an early/enamel-only lesion"
   ],
   "caption": "A labeled schematic cross-section of a tooth crown (enamel, dentin, pulp) showing a later-stage smooth-surface carious lesion (black) that has penetrated through the enamel and into the dentin but has not yet reached the pulp.",
   "description": "The image is a diagram of a tooth, illustrating its internal structure. The visible anatomy includes the enamel, dentin, and pulp. A notable condition is the presence of a darkened area within the dentin and enamel on the right side, indicating dental caries or tooth decay, which appears to be moderate in severity as it has progressed into the dentin."
  },
  {
   "rid": "a010",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/moderate_periodontitis.png",
   "modality": "diagram",
   "must_identify": [
    "This is a schematic line diagram (not a photograph or radiograph) of a single multi-rooted tooth in cross-section showing periodontal anatomy",
    "Key periodontal structures are drawn: the gingival/soft-tissue margin (red line), the alveolar bone crest following the roots (brown/gold line), and the periodontal ligament space (hatched band between root and bone)",
    "A periodontal pocket is depicted on one side, shown as a shaded zone with a vertical measurement scale/ruler and a horizontal reference line indicating increased probing/pocket depth",
    "The diagram illustrates periodontal attachment loss / pocket deepening consistent with periodontitis rather than a healthy periodontium"
   ],
   "must_avoid": [
    "Calling it a clinical photograph or an X-ray/radiograph instead of a line diagram",
    "Describing it as a healthy periodontium with a normal sulcus rather than a pathological deepened pocket",
    "Inventing specific numeric pocket-depth or attachment-loss values that are not printed on the image"
   ],
   "caption": "Schematic line diagram of a single multi-rooted tooth in cross-section showing the gingival margin, alveolar bone crest, and periodontal ligament, with a shaded periodontal pocket and a vertical measurement scale illustrating the increased probing depth of moderate periodontitis.",
   "description": "This is a schematic dental illustration of a single-rooted tooth in longitudinal view. It shows the crown and root, surrounding gingival soft tissue, periodontal ligament space/fibers, and alveolar bone crest. On the right side there is a red, stippled gingival pocket extending apically along the root, with the bone crest positioned well below the gingival margin and CEJ region, indicating periodontal attachment loss and vertical pocket formation. The depth scale beside it suggests a deep periodontal pocket, consistent with moderate-to-severe periodontitis in the illustrated area."
  },
  {
   "rid": "a011",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/smoothsurfacecaries04.png",
   "modality": "diagram",
   "must_identify": [
    "This is a simple hand-drawn line sketch of a tooth in cross-section, not a photograph",
    "It carries text labels reading 'enamel', 'dentin', and 'pulp' identifying the tooth layers",
    "A black carious lesion on the outer enamel surface is shown, larger and broader than in the earlier sketches of the series",
    "The lesion has advanced past the enamel and is spreading/undermining into the underlying dentin"
   ],
   "must_avoid": [
    "Do not call it a photograph or radiograph",
    "Do not describe the tooth as healthy/intact with no caries",
    "Do not overstate the lesion as having reached or exposed the pulp at this stage"
   ],
   "caption": "Hand-drawn cross-sectional sketch of a tooth labelled enamel, dentin, and pulp, showing an enlarging black smooth-surface carious lesion that has extended past the enamel and is spreading into the dentin.",
   "description": "This is a simple line diagram illustrating a cross-section of a tooth. Visible anatomical structures include the explicitly labeled enamel, dentin, and pulp layers. The image depicts a smooth surface carious lesion (dental decay) on the right side, represented by two solid black triangles. The decay pattern shows an outer triangle in the enamel (with its base at the outer surface and apex pointing inward) and an inner triangle in the dentin (with its base at the dentinoenamel junction and apex pointing toward the pulp). This represents a deep dentinal carious lesion that has penetrated significantly through the enamel and into the dentin, but has not yet reached the pulp chamber."
  },
  {
   "rid": "a012",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/diagram_illustrating_coronal_and_apical_fo.png",
   "modality": "diagram",
   "must_identify": [
    "This is an anatomical/developmental diagram (semi-transparent rendering of a mandible/jaw), not a radiograph or clinical photo",
    "It shows unerupted/developing teeth each enclosed by a dental follicle that is color-coded into two zones",
    "The coronal follicle segment (orange/coral, over the crown) is distinguished from the apical follicle segment (magenta/purple, around the root/apical region), as the text labels state",
    "Individual teeth are labeled by type (Second Molar, Second Premolar, First Premolar, Canine)"
   ],
   "must_avoid": [
    "Calling this an X-ray, CBCT, or clinical intraoral photograph",
    "Interpreting the colored follicle zones as a pathology/lesion (e.g., dentigerous cyst, tumor, abscess) rather than normal anatomical follicle segments",
    "Mislabeling the structures as erupted teeth with periodontal disease or bone loss"
   ],
   "caption": "A labeled anatomical diagram of a semi-transparent mandible showing unerupted teeth (Second Molar, Second Premolar, First Premolar, Canine), each surrounded by a dental follicle color-coded into a coronal follicle segment (orange, over the crown) and an apical follicle segment (magenta, around the root).",
   "description": "**1. Type of image:** This is a 3D rendered/segmented computer model (likely derived from CBCT or micro-CT data), shown as a mesh/wireframe surface reconstruction. It is a diagram/illustration rather than a clinical photo or standard radiograph.\n\n**2. Anatomy and structures visible:** The image shows a partially transparent mandible (jawbone) in lateral view, rendered as a triangulated mesh. Within the bone, several developing/unerupted teeth are segmented and color-coded in magenta/purple: from left to right, the second molar, second premolar, first premolar, and canine. Surrounding each tooth crown and root apex are orange-highlighted regions labeled as the \"Coronal Follicle Segments\" (around the crowns) and \"Apical Follicle Segments\" (around the root/apical areas), representing the dental follicle tissue. The translucent gray contours between teeth represent additional unsegmented developing tooth structures or alveolar bone.\n\n**3. Condition / clinical finding:** No pathology or disease is depicted. This is an anatomical/research segmentation illustration showing developing teeth still encased in bone with their associated dental follicles divided into coronal and apical portions. The image appears to demonstrate a method of follicle segmentation rather than any abnormal or diseased state."
  },
  {
   "rid": "a013",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/zahnfehlstellung_angle_klasse_ii_1.jpg",
   "modality": "diagram",
   "must_identify": [
    "Hand-drawn line diagram/schematic showing teeth in lateral (profile) view in occlusion within a jaw outline",
    "It depicts a malocclusion: the upper anterior teeth sit well ahead of the lower anterior teeth, producing increased overjet (proclined upper incisors), consistent with Angle Class II division 1",
    "Red vertical reference lines are drawn to mark the antero-posterior discrepancy between the upper and lower incisor/canine positions"
   ],
   "must_avoid": [
    "Calling this a real clinical photograph or radiograph rather than a line drawing",
    "Describing it as a normal/ideal Class I occlusion",
    "Calling it an anterior crossbite or Class III (the upper teeth are ahead of, not behind, the lower teeth)"
   ],
   "caption": "Hand-drawn lateral line diagram of teeth in occlusion with red marker lines, illustrating an Angle Class II division 1 malocclusion in which the upper incisors are positioned anterior to the lowers with increased overjet.",
   "description": "This is a line drawing illustrating a lateral (sagittal) view of the maxillary and mandibular dentition in occlusion, along with simplified outlines of the upper and lower jaw profiles. The image depicts an Angle Class II malocclusion. This clinical finding is evidenced by a severe anterior overjet (the upper incisors protrude significantly past the lower incisors) and the posterior dental relationship, which is highlighted by two vertical red lines showing the mesiobuccal cusp of the maxillary first molar positioned anterior (mesial) to the buccal groove of the mandibular first molar."
  },
  {
   "rid": "a014",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/smoothsurfacecaries05.png",
   "modality": "diagram",
   "must_identify": [
    "A schematic line-drawing cross-section of a tooth crown, with the three layers labeled in text: enamel (outer), dentin (middle), and pulp (central chamber)",
    "A solid black carious lesion on the right side of the crown that has breached the enamel surface and penetrated into the dentin (crossed the dentinoenamel junction)",
    "This is an advanced/later-stage caries lesion: it is no longer confined to enamel but now involves dentin, showing the characteristic spread along the DEJ",
    "The pulp chamber is shown as not yet involved (the lesion has not reached the pulp), indicating dentinal \u2014 not pulpal \u2014 caries"
   ],
   "must_avoid": [
    "Calling this a real clinical photograph or radiograph/X-ray rather than a schematic diagram",
    "Describing the tooth as healthy or the dark area as a normal feature/filling rather than a carious lesion (decay)",
    "Claiming the lesion has reached or involves the pulp, or calling it an early/enamel-only lesion"
   ],
   "caption": "A labeled schematic cross-section of a tooth crown (enamel, dentin, pulp) showing a later-stage smooth-surface carious lesion (black) that has penetrated through the enamel and into the dentin but has not yet reached the pulp.",
   "description": "This image is a simple line diagram illustrating a cross-section of a tooth. The visible and explicitly labeled anatomical structures include the enamel, dentin, and pulp. The diagram depicts a carious lesion on the lateral (likely proximal) surface, classically represented by two black triangles. The outer triangle illustrates enamel caries with its broad base at the tooth surface and apex at the dentinoenamel junction (DEJ). The inner triangle represents dentinal caries with its base at the DEJ and apex progressing deeply toward the pulp, indicating an advanced or severe stage of tooth decay that has penetrated well into the dentin layer."
  },
  {
   "rid": "a015",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/detached_dental_crown_flat_front.jpg",
   "modality": "clinical photo",
   "must_identify": [
    "This is a clinical photograph of a single detached/dislodged artificial dental crown (a restoration, not a natural tooth), shown isolated against a plain white background",
    "The crown is viewed from its underside (intaglio/fitting surface), which is hollow/cup-shaped and was previously cemented over a prepared tooth",
    "It is a ceramic-veneered metal restoration (porcelain-fused-to-metal type): a tooth-colored ceramic outer rim with a dark metal margin/collar and grey metal showing internally",
    "Set/hardened cement and dark metal substructure or post/core remnants are retained inside the hollow crown, consistent with the crown having come off the tooth"
   ],
   "must_avoid": [
    "Calling this a natural/whole tooth or describing it as a tooth still in the mouth rather than a detached artificial crown",
    "Describing it as a radiograph, diagram, or illustration rather than a clinical photograph",
    "Misidentifying it as a dental implant, abutment, or denture/bridge instead of a single crown"
   ],
   "caption": "Clinical photograph of a single detached porcelain-fused-to-metal dental crown viewed from its hollow underside (intaglio surface), showing a tooth-colored ceramic rim with a dark metal margin and retained set cement plus metal/core remnants inside, isolated on a white background.",
   "description": "This is a photograph of an isolated, dislodged dental restoration. The visible structures include a tooth-colored artificial crown whose internal aspect is filled with a chalky, whitish-grey core build-up material or cement. Protruding from this internal material are two distinct, dark metallic posts. The clinical finding is a severe, complete failure of a post-and-core crown assembly, demonstrating that the entire unit (crown, core material, and posts) has debonded and separated from the underlying tooth roots as a single intact piece. Dark staining is also visible along the external margin of the crown."
  },
  {
   "rid": "a016",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/new_nanocomposites_may_mean_more_durable_t.jpg",
   "modality": "clinical photo",
   "must_identify": [
    "Macro/close-up clinical photograph of a single extracted (or isolated ex-vivo) human posterior tooth, almost certainly a molar, photographed on a dark/black background as a laboratory or research specimen rather than an intraoral image",
    "Occlusal (biting-surface) view: cusps, occlusal fissures/grooves and marginal ridges are visible across the crown",
    "A superimposed white annotation arrow points down to the central occlusal area, indicating the image is an annotated figure highlighting one specific site (e.g., a restoration, fissure, or surface feature)",
    "The crown surface shows wet/glossy highlights and irregular texture; a restored area or central filling cannot be confidently distinguished from natural enamel at this resolution, so any restoration should be described tentatively"
   ],
   "must_avoid": [
    "Calling this a radiograph/X-ray, a diagram, or an intraoral in-situ photo \u2014 it is a macro photo of an isolated tooth on a dark background",
    "Asserting a specific diagnosis (caries, fracture, failing restoration) or specifying the restorative material (e.g., calcium-phosphate nanocomposite) as a visual certainty \u2014 the material and pathology are not verifiable from the image alone",
    "Naming a precise tooth number/quadrant as certain \u2014 orientation on an isolated extracted tooth cannot be reliably established"
   ],
   "caption": "Annotated macro photograph of an extracted human molar viewed from the occlusal surface against a dark background, with a white arrow marking a central occlusal site, consistent with a laboratory/research specimen figure.",
   "description": "**1. Type of image:** This is a close-up clinical/macro photograph of an extracted tooth, viewed from the occlusal (biting) surface against a black background, with a white arrow pointing to a specific feature.\n\n**2. Anatomy and structures visible:** The image shows the crown of a posterior tooth (a molar, given its broad, multi-cusped occlusal table and roughly rectangular/rhomboid outline). Several cusps are visible surrounding a central fossa, with the occlusal grooves and developmental fissures running between the cusps. The enamel surface appears glossy with light reflections.\n\n**3. Condition/finding:** The white arrow indicates a developmental groove/fissure in the central region of the occlusal surface. There is a visible darkened/discolored fissure line extending toward the lower portion of the crown, and the deep occlusal grooves/pits appear stained and irregular, suggesting an early pit-and-fissure lesion (incipient/early caries) or a stained, caries-susceptible fissure. The discoloration appears localized and superficial rather than a large cavitated lesion; no gross cavitation or extensive tissue loss is clearly demonstrated. I cannot determine depth or pulpal involvement from this surface view alone."
  },
  {
   "rid": "a017",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/tooth_picturewlabels.jpg",
   "modality": "diagram",
   "must_identify": [
    "This is a schematic occlusal-view diagram (line drawing) of a maxillary (upper) molar crown, not a photograph or radiograph",
    "The four primary cusps are color-coded and labeled: paracone (green, mesiobuccal), metacone (magenta, distobuccal), protocone (yellow, mesiolingual), and hypocone (blue, distolingual)",
    "Orientation labels mark the surfaces/directions: mesial, distal, buccal, and lingual",
    "It depicts normal/healthy crown morphology with occlusal grooves and fossae, with no disease, caries, or pathology shown"
   ],
   "must_avoid": [
    "Calling this a photograph, radiograph/X-ray, or clinical intraoral image",
    "Identifying it as a mandibular (lower) molar or premolar rather than an upper molar",
    "Inventing a disease, caries lesion, or pathology when the diagram only shows normal cusp anatomy"
   ],
   "caption": "A labeled occlusal-view schematic of an upper (maxillary) molar crown showing its four cusps color-coded and named, the paracone, metacone, protocone, and hypocone, with mesial, distal, buccal, and lingual orientation labels.",
   "description": "This is an anatomical diagram illustrating the occlusal surface of a molar. The image provides directional orientation labels (Mesial, Distal, Buccal, Lingual) and highlights four primary cusps using color-coding and specific nomenclature: the Paracone (green, mesiobuccal), Protocone (yellow, mesiolingual), Metacone (magenta, distobuccal), and Hypocone (blue, distolingual). Dotted lines are used to represent the developmental grooves and fissure patterns across the occlusal table. No pathology, disease, or clinical condition is depicted, as this is strictly an educational illustration of normal dental morphology."
  },
  {
   "rid": "a018",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/dental_caries_cavity_1.jpg",
   "modality": "clinical photo",
   "must_identify": [
    "This is an intraoral clinical photograph (close-up macro shot inside the mouth), not a diagram or radiograph",
    "A posterior tooth (molar/premolar) is the subject, with the lip and cheek mucosa visible at the margins",
    "There is a large cavitated carious lesion on the occlusal/coronal surface, with a frank cavity (loss of tooth structure)",
    "The lesion shows brown-to-black discoloration and softened/demineralized dentin extending into dentin (advanced/deep caries)"
   ],
   "must_avoid": [
    "Calling the tooth healthy/intact or describing only surface staining with no cavitation",
    "Misidentifying the modality as a radiograph/X-ray or an illustration/diagram",
    "Diagnosing it as a non-carious finding such as an existing amalgam/composite filling, fracture only, or simple food impaction"
   ],
   "caption": "Intraoral clinical close-up photograph of a posterior tooth (molar/premolar) showing an advanced cavitated dental caries lesion, with a deep central cavity, brown-black discoloration, and softened carious dentin extending into the dentin.",
   "description": "The image is a clinical photograph of a tooth. The visible anatomy includes a tooth with a large cavity, adjacent teeth, and surrounding oral mucosa. The condition depicted is dental caries, which appears to be severe as it has progressed significantly into the tooth structure, potentially reaching the pulp."
  },
  {
   "rid": "a019",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/diagram_illustrating_coronal_and_apical_fo.png",
   "modality": "diagram",
   "must_identify": [
    "This is an anatomical/developmental diagram (semi-transparent rendering of a mandible/jaw), not a radiograph or clinical photo",
    "It shows unerupted/developing teeth each enclosed by a dental follicle that is color-coded into two zones",
    "The coronal follicle segment (orange/coral, over the crown) is distinguished from the apical follicle segment (magenta/purple, around the root/apical region), as the text labels state",
    "Individual teeth are labeled by type (Second Molar, Second Premolar, First Premolar, Canine)"
   ],
   "must_avoid": [
    "Calling this an X-ray, CBCT, or clinical intraoral photograph",
    "Interpreting the colored follicle zones as a pathology/lesion (e.g., dentigerous cyst, tumor, abscess) rather than normal anatomical follicle segments",
    "Mislabeling the structures as erupted teeth with periodontal disease or bone loss"
   ],
   "caption": "A labeled anatomical diagram of a semi-transparent mandible showing unerupted teeth (Second Molar, Second Premolar, First Premolar, Canine), each surrounded by a dental follicle color-coded into a coronal follicle segment (orange, over the crown) and an apical follicle segment (magenta, around the root).",
   "description": "This imageis a 3D computer-generated mesh model, likely a finite element diagram, depicting a section of the jawbone (mandible). The grey wireframe represents the alveolar bone, which houses four developing, unerupted teeth shown in purple mesh: the Canine, First Premolar, Second Premolar, and Second Molar. Surrounding the crowns and root apices of these teeth are orange mesh structures labeled as \"Coronal Follicle Segments\" and \"Apical Follicle Segments,\" representing the dental follicle. The image specifically illustrates the anatomical segmentation of the dental follicle into coronal (crown-related) and apical (root-related) regions around the developing teeth. The space between the Second Premolar and Second Molar contains wireframe structures likely representing the First Molar or its crypt, which is not highlighted with color. No pathology is evident; this is a structural visualization used for anatomical study or biomechanical modeling of tooth development."
  },
  {
   "rid": "a020",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/mandibularanteriorcalculus.jpg",
   "modality": "clinical photo",
   "must_identify": [
    "This is an intraoral clinical photograph, not a diagram or radiograph",
    "It shows the lingual surfaces of the lower (mandibular) anterior teeth, viewed from behind/below",
    "There are heavy yellow-brown hard deposits of dental calculus (tartar) coating the lingual aspects of the teeth near the gumline",
    "The deposits are consistent with supragingival (and likely subgingival) calculus accumulation in the lower anterior lingual region, a typical site near the salivary duct openings"
   ],
   "must_avoid": [
    "Calling this a diagram, illustration, or X-ray/radiograph",
    "Describing the teeth as clean/healthy or ignoring the calculus deposits",
    "Mislabeling the calculus as caries, fillings, or fluorosis rather than tartar/calculus stain"
   ],
   "caption": "Intraoral clinical photograph of the lingual surfaces of the mandibular anterior teeth showing heavy yellow-brown supragingival dental calculus (tartar) deposits along the gingival margins.",
   "description": "The image is a clinical photograph of the lower anterior teeth. The visible anatomy includes the mandibular incisors and canines, as well as the surrounding gingiva. The teeth appear to be covered in a significant amount of yellowish-brown calculus, particularly on the lingual surface, with some visible staining. The gingiva appears inflamed and shiny, indicating possible gingivitis. The presence of heavy calculus suggests poor oral hygiene, which may be contributing to the gingival inflammation."
  },
  {
   "rid": "a021",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/intraoral_photo.jpg",
   "modality": "clinical photo",
   "must_identify": [
    "a clinical intraoral photograph (a real photo, not a diagram or x-ray)",
    "teeth (molars / premolars visible on both sides)",
    "the tongue",
    "the palate (roof of the mouth) and/or uvula / soft palate / throat",
    "gingiva (gums)"
   ],
   "must_avoid": [
    "calling it a diagram/illustration or a radiograph"
   ],
   "caption": "A clinical intraoral photograph of an open mouth showing teeth, tongue, palate, uvula and surrounding oral soft tissues.",
   "description": "This is an intraoral clinical photograph providing a wide view of the oral cavity. Visible anatomical structures include the maxillary and mandibular dentition, the hard and soft palate, the dorsal surface of the tongue, the uvula, and the posterior oropharynx. The primary clinical finding is dark brown-to-black discoloration and apparent cavitation within the occlusal fissures of the mandibular molars bilaterally, suggestive of moderate occlusal caries. Additionally, there is generalized mild yellowish discoloration of the teeth and slight erythema (redness) in the oropharyngeal region."
  },
  {
   "rid": "a022",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/intraoral_photo.jpg",
   "modality": "clinical photo",
   "must_identify": [
    "a clinical intraoral photograph (a real photo, not a diagram or x-ray)",
    "teeth (molars / premolars visible on both sides)",
    "the tongue",
    "the palate (roof of the mouth) and/or uvula / soft palate / throat",
    "gingiva (gums)"
   ],
   "must_avoid": [
    "calling it a diagram/illustration or a radiograph"
   ],
   "caption": "A clinical intraoral photograph of an open mouth showing teeth, tongue, palate, uvula and surrounding oral soft tissues.",
   "description": "1. Type of image: Clinical intraoral photograph (open-mouth view of the oral cavity).  \n2. Anatomy: Visible structures include upper and lower dentition (teeth with discoloration), tongue, hard palate, soft palate, and oropharyngeal region.  \n3. Condition: Teeth show plaque/calculus accumulation (discoloration, particularly on lower molars and upper teeth), indicating poor oral hygiene. No acute pathology (e.g., ulcers, masses) is apparent; mucosa appears generally intact, but dental biofilm buildup is evident."
  },
  {
   "rid": "a023",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/dental_caries_cavity_2_cropped.jpg",
   "modality": "clinical photo",
   "must_identify": [
    "This is an intraoral clinical photograph of maxillary (upper) teeth and gingiva",
    "One tooth shows extensive (advanced) dental caries with a large, dark/blackened cavitated lesion and gross breakdown of the crown",
    "The carious cavity exposes deeper tooth structure (dentin/pulp chamber level destruction), not just superficial enamel",
    "Adjacent teeth and the surrounding pink gingiva are comparatively intact/less affected"
   ],
   "must_avoid": [
    "Calling the destroyed/carious tooth healthy or normal",
    "Identifying the image as a radiograph/X-ray or an illustration/diagram instead of a clinical photo",
    "Misreading the dark cavitation as merely surface staining, a filling, or a normal pit/fissure rather than a destructive carious lesion"
   ],
   "caption": "Intraoral clinical photograph of the maxillary arch showing a single tooth with advanced dental caries, a large dark cavitated lesion and gross crown destruction, while the neighboring teeth and pink gingiva appear comparatively intact.",
   "description": "This is an intraoral clinical photograph displaying maxillary anterior teeth, the surrounding gingiva, and a portion of the upper lip. The primary clinical finding is severe, advanced dental caries on the facial surface of the central tooth in the image (likely a lateral incisor). The pathology presents as a massive, deep, dark-pigmented (black/brown) cavitated lesion that has destroyed a significant portion of the clinical crown, leaving sharp, unsupported enamel margins. Furthermore, the gingival tissue immediately adjacent to the carious lesion appears slightly erythematous (red) and swollen, indicating localized inflammation."
  },
  {
   "rid": "a024",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/perio_mild.png",
   "modality": "diagram",
   "must_identify": [
    "a tooth shown in a periodontal cross-section / schematic (not a real photo or x-ray)",
    "gingiva (gum) margin",
    "alveolar bone level",
    "periodontal ligament",
    "a periodontal pocket or pocket-depth measurement"
   ],
   "must_avoid": [
    "describing it as severe or advanced periodontitis",
    "describing the periodontium as completely healthy with no disease"
   ],
   "caption": "Line diagram of a tooth showing the gingiva, bone, periodontal ligament with a scale showing the pocket depth of mild periodontitis.",
   "description": "The image is a diagram illustrating the anatomy of a tooth and its surrounding tissues. The visible structures include the tooth, periodontal ligament, alveolar bone, and gingiva. The diagram highlights a condition where the gingiva has receded on the distal aspect of the tooth, exposing the root surface and indicating a loss of attachment. The severity of the condition is moderate, with noticeable bone loss and gingival recession."
  },
  {
   "rid": "a025",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/basic_anatomy_tooth.jpg",
   "modality": "diagram",
   "must_identify": [
    "This is a labeled anatomical cross-section (longitudinal section) diagram of a single multi-rooted tooth, not a clinical photo or radiograph",
    "It divides the tooth into crown and root regions, with the root apex indicated at the bottom",
    "It labels the hard tissue layers from outside in: enamel (covering the crown), dentin with dentinal tubules, and cementum (covering the root)",
    "It shows the central dental pulp (containing blood vessels, nerves and stroma) within the pulp chamber and root canals"
   ],
   "must_avoid": [
    "Describing it as a real photograph or an X-ray/radiograph",
    "Claiming the tooth shows caries, decay or any disease (it depicts a healthy tooth)",
    "Confusing the layers, e.g. calling the outer crown layer cementum or the root covering enamel"
   ],
   "caption": "Labeled cross-sectional anatomy diagram of a healthy multi-rooted tooth, identifying crown and root, enamel, dentin and dentinal tubules, cementum, dental pulp (blood vessels, nerves and stroma) and the root apex.",
   "description": "1. Type: Diagram (cross - sectional illustration of a tooth).  \n2. Anatomy: The image shows a tooth divided into crown (upper portion) and root (lower portion). Visible structures include enamel (outer layer of the crown), dentin & dentin tubules (middle layer), dental pulp (inner pink region containing blood vessels, nerves, and stroma), cementum (outer layer of the root), and root apex (tip of the root).  \n3. Condition: No pathology or clinical findings are depicted; it is a normal anatomical representation of a tooth\u2019s structure."
  },
  {
   "rid": "a026",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/wortel_fractuur.jpg",
   "modality": "clinical photo",
   "must_identify": [
    "This is a clinical photograph of an extracted tooth specimen resting on a teal surgical drape (not a radiograph or diagram)",
    "The crowned coronal portion carries a metal-ceramic / porcelain-fused-to-metal restoration with a visible metal collar at the margin",
    "The tooth has fractured and separated into a crown-bearing coronal fragment and a detached root fragment (root fracture)",
    "Fresh blood / soft-tissue remnants on the root surface indicate the specimen was just surgically extracted"
   ],
   "must_avoid": [
    "Calling it a radiograph, X-ray, diagram, or illustration",
    "Describing it as an intact, healthy, or unrestored tooth",
    "Misidentifying the crown as a dental implant or implant abutment"
   ],
   "caption": "Clinical photograph of an extracted, crowned (metal-ceramic) tooth that has undergone a root fracture, shown as separated coronal and root fragments with fresh blood on a teal surgical drape.",
   "description": "This is a clinical photograph of an extracted dental specimen resting on a blue textured surface. The visible structures include a single-rooted tooth that has been restored with a porcelain-fused-to-metal crown and a metallic post. The primary clinical finding is a severe, complete horizontal fracture of the tooth root. The coronal segment, consisting of the crown and post, is entirely separated from the apical root segment, with the metal post visibly exposed between the two pieces. Small amounts of red soft tissue and blood remnants are attached to the root surface, consistent with a recent extraction."
  },
  {
   "rid": "a027",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/tooth_picturewlabels.jpg",
   "modality": "diagram",
   "must_identify": [
    "This is a schematic occlusal-view diagram (line drawing) of a maxillary (upper) molar crown, not a photograph or radiograph",
    "The four primary cusps are color-coded and labeled: paracone (green, mesiobuccal), metacone (magenta, distobuccal), protocone (yellow, mesiolingual), and hypocone (blue, distolingual)",
    "Orientation labels mark the surfaces/directions: mesial, distal, buccal, and lingual",
    "It depicts normal/healthy crown morphology with occlusal grooves and fossae, with no disease, caries, or pathology shown"
   ],
   "must_avoid": [
    "Calling this a photograph, radiograph/X-ray, or clinical intraoral image",
    "Identifying it as a mandibular (lower) molar or premolar rather than an upper molar",
    "Inventing a disease, caries lesion, or pathology when the diagram only shows normal cusp anatomy"
   ],
   "caption": "A labeled occlusal-view schematic of an upper (maxillary) molar crown showing its four cusps color-coded and named, the paracone, metacone, protocone, and hypocone, with mesial, distal, buccal, and lingual orientation labels.",
   "description": "1. Type: Diagram (illustration) of a tooth\u2019s occlusal surface.  \n2. Anatomy: Visible structures include cusps labeled Paracone (green, buccal), Protocone (yellow, lingual), Metacone (purple, buccal/distal), and Hypocone (blue, lingual/distal), with directional labels (Mesial, Distal, Buccal, Lingual) indicating tooth orientation.  \n3. Condition: No pathology; it is a labeled anatomical diagram depicting normal cusp morphology of a tooth (likely a molar)."
  },
  {
   "rid": "a028",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/suunad.png",
   "modality": "diagram",
   "must_identify": [
    "This is a schematic/line-drawing diagram (not a photograph or radiograph) showing both dental arches from an occlusal view: the upper arch (labeled ULEMINE HAMBAKAAR) and the lower arch (ALUMINE HAMBAKAAR)",
    "It teaches tooth surfaces and directional/positional terminology: labial (Labiaalne), buccal (Bukaalne), palatal (Palatinaalne), lingual (Lingvaalne), and the mesial (Mesiaalne) / distal (Distaalne) directions indicated by arrows",
    "One quadrant of teeth is numbered 1 through 8, sequencing from the central incisor anteriorly to the third molar posteriorly",
    "Labels are in Estonian; this is a healthy/normal anatomy and orientation reference plate, not depicting any disease or pathology"
   ],
   "must_avoid": [
    "Calling it a photograph, radiograph/X-ray, or panoramic image rather than a line-drawing diagram",
    "Inventing a disease, pathology, or abnormality (e.g. caries, periodontitis, malocclusion) - the figure shows normal anatomy and surface terminology only",
    "Mislabeling the surface/direction terms, e.g. swapping palatal vs lingual, buccal vs labial, or mesial vs distal"
   ],
   "caption": "A labeled schematic occlusal-view diagram of the upper and lower dental arches (in Estonian) illustrating tooth surfaces and directional terminology - labial, buccal, palatal, lingual, mesial, and distal - with one quadrant numbered 1 to 8 from central incisor to third molar.",
   "description": "The image is a diagram of the human dental arches, showcasing both the upper and lower teeth. The visible anatomy includes the occlusal surfaces of all teeth in both arches, with the upper teeth labeled \"\u00dcLEMINE HAMBAKAAR\" and the lower teeth labeled \"ALUMINE HAMBAKAAR\". The diagram highlights various surfaces of the teeth, including labial, buccal, palatal, and lingual surfaces, as well as mesial and distal aspects. No conditions, pathologies, or clinical findings are depicted in this diagram, which appears to be an educational tool for illustrating dental anatomy."
  },
  {
   "rid": "a029",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/root_canal_illustration_molar.png",
   "modality": "diagram",
   "must_identify": [
    "This is a schematic multi-panel (four-stage) illustration/diagram of a molar in cross-section within bone and gingiva, not a photograph",
    "It depicts the sequence of root canal (endodontic) therapy",
    "Stages shown include a decayed/infected tooth with a periapical lesion, access drilling with a handpiece/bur, cleaning/shaping the canals with an endodontic file, and final obturation/filling with placement of a crown",
    "A periapical lesion at the root apex is visible in the earlier panels and resolves in the final restored panel"
   ],
   "must_avoid": [
    "Describing it as a real clinical photograph or radiograph",
    "Calling it a single static healthy-tooth anatomy diagram with no procedure shown",
    "Misidentifying the procedure as an extraction or implant placement"
   ],
   "caption": "Unlabeled four-panel diagram demonstrating the steps of root canal treatment on a molar: an infected tooth with a periapical lesion, access drilling, canal filing with an endodontic file, and final obturation with a crown.",
   "description": "The image is a diagram illustrating the steps involved in a dental root canal procedure. \n\nThe visible anatomy includes a molar tooth with its roots, pulp chamber, and surrounding gingiva and bone. The diagram shows four stages of the procedure: the tooth with deep caries and pulpal involvement, the removal of infected pulp tissue using a dental drill, the cleaning and shaping of the root canal with a file, and the final stage with the root canal filled. \n\nThe condition depicted is deep caries with pulpal involvement and periapical pathology, likely pulpitis or pulp necrosis, which is being treated with a root canal procedure."
  },
  {
   "rid": "a030",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/periodontal_ligament_normal_pocket_depth.png",
   "modality": "diagram",
   "must_identify": [
    "This is a line/schematic diagram of a tooth in longitudinal cross-section within its supporting tissues, not a photograph or radiograph",
    "It depicts the periodontium: the gingiva (red outline), the alveolar bone crest (brown/gold line), and the periodontal ligament shown as hatched fibres running between root and bone",
    "A measurement scale (three dots/markers) at the gingival margin indicates the pocket/sulcus depth being represented",
    "The configuration shows a healthy periodontium with a normal (shallow) sulcus depth, with gingival margin and bone crest near the cementoenamel junction and no attachment loss"
   ],
   "must_avoid": [
    "Do not describe this as a real clinical photograph or an X-ray/radiograph",
    "Do not call it diseased, e.g. periodontitis or deep periodontal pocketing with bone loss when it depicts a normal/healthy pocket depth"
   ],
   "caption": "Schematic line diagram of a tooth in cross-section showing the gingiva, alveolar bone, and periodontal ligament with a depth scale at the gingival margin representing a normal (healthy) sulcus/pocket depth.",
   "description": "**1. Type of image:** This is a schematic line diagram/illustration of a single tooth in cross-section, showing the tooth and its surrounding periodontal structures.\n\n**2. Anatomy/structures visible:** A single-rooted tooth is depicted with its crown (upper, black outline) and root (lower portion) embedded in supporting tissue. A red line traces the gingival margin (gum line) along the cervical region. A brown/gold curved line outlines the alveolar bone crest surrounding the root. The series of short red diagonal hatch lines between the root surface and the bone represent the periodontal ligament fibers within the periodontal space. A leader line with three black dots on the right points to the cervical/gingival sulcus area.\n\n**3. Condition/clinical finding:** The diagram illustrates an intact, healthy periodontium\u2014the red gingival margin sits at the cemento-enamel region, and the alveolar bone (brown line) follows close to the gingival contour with the periodontal ligament fibers spanning the space uniformly around the root. No bone loss, pocket formation, or recession is depicted; this appears to represent normal/healthy periodontal anatomy rather than a disease state. The three dots likely serve as an annotation marker for the gingival sulcus/probing region.\n\n*(Note: interpretation is limited to visible features; the unlabeled dots cannot be definitively assigned a meaning from the image alone.)*"
  },
  {
   "rid": "a031",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/moderate_periodontitis.png",
   "modality": "diagram",
   "must_identify": [
    "This is a schematic line diagram (not a photograph or radiograph) of a single multi-rooted tooth in cross-section showing periodontal anatomy",
    "Key periodontal structures are drawn: the gingival/soft-tissue margin (red line), the alveolar bone crest following the roots (brown/gold line), and the periodontal ligament space (hatched band between root and bone)",
    "A periodontal pocket is depicted on one side, shown as a shaded zone with a vertical measurement scale/ruler and a horizontal reference line indicating increased probing/pocket depth",
    "The diagram illustrates periodontal attachment loss / pocket deepening consistent with periodontitis rather than a healthy periodontium"
   ],
   "must_avoid": [
    "Calling it a clinical photograph or an X-ray/radiograph instead of a line diagram",
    "Describing it as a healthy periodontium with a normal sulcus rather than a pathological deepened pocket",
    "Inventing specific numeric pocket-depth or attachment-loss values that are not printed on the image"
   ],
   "caption": "Schematic line diagram of a single multi-rooted tooth in cross-section showing the gingival margin, alveolar bone crest, and periodontal ligament, with a shaded periodontal pocket and a vertical measurement scale illustrating the increased probing depth of moderate periodontitis.",
   "description": "This is a schematic dental diagram (line illustration), not a radiograph or clinical photo, depicting a longitudinal cross-section of a single-rooted tooth and its surrounding periodontal tissues.\n\n**Anatomy/structures visible:** The tooth shows a crown (upper white outline) and a single tapering root extending downward. The red contour represents the gingiva/soft tissue margin on both sides. The brown/gold line represents the alveolar bone crest and socket wall. The diagonal red hatching between the root surface and the bone represents the periodontal ligament space, which fans out around the root apex. \n\n**Findings depicted:** On the right side, the diagram illustrates a periodontal pocket. The red-stippled, elongated area shows the gingival tissue with the gingival margin coronally and the base of the pocket apically, demonstrating loss of attachment and a deepened sulcus/pocket relative to the cemento-enamel junction. The bracketed scale with graduated dots on the far right appears to represent a periodontal probing depth measurement reference. The gray hatched box highlights the region at the crown\u2013root junction (likely the CEJ/attachment level). Overall, the illustration is a teaching schematic contrasting normal attachment (left) with a deepened periodontal pocket and apical migration of the attachment (right), consistent with depicting periodontal pocket formation/attachment loss rather than an actual measured severity.\n\nThis is an educational diagram, so no real clinical severity grading can be derived beyond what the schematic intends to show."
  },
  {
   "rid": "a032",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/blausen_0864_toothdecay_ar.png",
   "modality": "diagram",
   "must_identify": [
    "This is an illustrated longitudinal cross-section (sagittal section) of a tooth, a molar, set in the jaw bone, not a real photograph or radiograph",
    "It depicts dental caries / tooth decay: a dark brown-black carious lesion eroding the crown from the occlusal (pit-and-fissure) surface and extending inward through enamel and dentin toward the pulp",
    "Internal anatomy is shown and labeled, including enamel, dentin, the pulp chamber with its blood vessels and nerves, the root canal, cementum, the gingiva, and the surrounding alveolar/jaw bone",
    "Text labels are present in Arabic naming the tooth structures"
   ],
   "must_avoid": [
    "Calling this a healthy or normal tooth, or failing to recognize the decay/caries",
    "Describing it as a clinical photograph, X-ray/radiograph, or histology rather than an anatomical illustration",
    "Misidentifying the condition (e.g. calling it an abscess, fracture, restoration/filling, or periodontal disease) instead of caries"
   ],
   "caption": "Labeled anatomical illustration of a longitudinal cross-section through a molar tooth in the jaw, showing dental caries as a dark carious lesion eroding the crown from the occlusal surface inward toward the pulp, with the enamel, dentin, pulp (vessels and nerves), root canal, cementum, gingiva, and alveolar bone identified in Arabic labels.",
   "description": "This is a labeled anatomical illustration/diagram of a tooth in cross-section. It shows enamel, dentin, pulp containing blood vessels and nerves, roots/root canals, gingiva, and surrounding jaw/alveolar bone. Several carious lesions are depicted: occlusal pit-and-fissure caries, smooth-surface caries, and root caries, with dark cavitated areas; the largest occlusal cavity extends through enamel into dentin and appears deep, approaching the pulp."
  },
  {
   "rid": "a033",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/tooth_section_numbered.png",
   "modality": "diagram",
   "must_identify": [
    "This is a numbered cross-sectional diagram of a tooth in its socket, drawn as a multi-rooted molar",
    "Numbered callouts (1-10) point to the enamel, dentin, and pulp internally and to the gingiva, cementum, and surrounding alveolar bone externally",
    "The internal red and blue lines depict the blood vessels (and nerve) running through the pulp and periodontal tissues",
    "Brackets on the left (9 and 10) group the structures into the crown and root regions of the tooth"
   ],
   "must_avoid": [
    "Calling this a clinical photograph or radiograph",
    "Describing it as a diseased or decayed tooth (it shows normal anatomy)",
    "Claiming the parts are named in words (only numbers 1-10 are shown, with no on-image legend)"
   ],
   "caption": "Numbered cross-sectional diagram of a healthy molar in its socket, with callouts 1-10 marking enamel, dentin, pulp, gingiva, cementum, alveolar bone, blood vessels/nerve, and the crown and root regions.",
   "description": "This is an anatomical illustration depicting a cross-section of a healthy, multi-rooted tooth and its surrounding periodontium. Visible structures include the enamel (white outer layer of the crown), dentin (orange middle layer), and the pulp chamber and root canals containing blood vessels (indicated by red and blue lines). The tooth is supported by the gingiva (pink tissue), alveolar bone (tan tissue), and the periodontal ligament space. Blank leader lines point to these specific anatomical features for educational labeling. There is no visible pathology, decay, or disease shown; the image represents normal, healthy dental anatomy."
  },
  {
   "rid": "a034",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/wortel_fractuur.jpg",
   "modality": "clinical photo",
   "must_identify": [
    "This is a clinical photograph of an extracted tooth specimen resting on a teal surgical drape (not a radiograph or diagram)",
    "The crowned coronal portion carries a metal-ceramic / porcelain-fused-to-metal restoration with a visible metal collar at the margin",
    "The tooth has fractured and separated into a crown-bearing coronal fragment and a detached root fragment (root fracture)",
    "Fresh blood / soft-tissue remnants on the root surface indicate the specimen was just surgically extracted"
   ],
   "must_avoid": [
    "Calling it a radiograph, X-ray, diagram, or illustration",
    "Describing it as an intact, healthy, or unrestored tooth",
    "Misidentifying the crown as a dental implant or implant abutment"
   ],
   "caption": "Clinical photograph of an extracted, crowned (metal-ceramic) tooth that has undergone a root fracture, shown as separated coronal and root fragments with fresh blood on a teal surgical drape.",
   "description": "Clinical extraoral photograph of an extracted/restored tooth on a blue drape. A tooth-colored full-coverage crown is visible on the right, attached to a small remaining tooth/root portion, with a metallic post/core or instrument adjacent to it. A separate fractured root/tooth segment with blood/soft tissue remnants is visible on the left. The image shows a severely fractured tooth/restoration complex, with dark discoloration at the crown margin suggestive of caries or undermined tooth structure; the tooth appears non-restorable based on the visible separation and extent of fracture."
  },
  {
   "rid": "a035",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/mouth_parotid_gland_nih_bioart_654.png",
   "modality": "diagram",
   "must_identify": [
    "This is a labeled educational microanatomy/histology schematic (NIH BioArt style) of salivary gland tissue, not a gross anatomy view or a radiograph",
    "Secretory end-piece architecture is shown: rounded acini (serous acinus) draining into a branching duct system",
    "The intralobular/excretory duct hierarchy is depicted and labeled: intercalated duct, striated duct (striated ductal epithelium), and excretory duct (excretory ductal epithelium)",
    "Cellular and stromal components are labeled, including myoepithelial cells around acini, adipocytes, fibroblasts, and connective-tissue/immune and vascular cells (e.g., mast cell, macrophage, endothelial cell, smooth muscle)",
    "A microscopic scale is indicated by a 50 \u00b5m scale bar, confirming this is tissue-level (microscopic) rather than organ-level anatomy"
   ],
   "must_avoid": [
    "Calling this an X-ray, sialogram, ultrasound, CT/MRI, or any radiographic/clinical photograph",
    "Describing it as gross anatomy of the mouth, face, or whole parotid gland with ducts like Stensen's duct opening into the oral cavity",
    "Reading it as a pathology/tumor specimen or assigning a disease diagnosis (e.g., sialadenitis, neoplasm) when it depicts normal glandular microanatomy"
   ],
   "caption": "Labeled NIH BioArt-style histology schematic of salivary (parotid) gland microanatomy, showing serous acini with surrounding myoepithelial cells draining through intercalated, striated, and excretory ducts, set within stroma containing adipocytes, fibroblasts, vascular and immune cells, with a 50 \u00b5m scale bar.",
   "description": "This is a detailed schematic histological illustration of a salivary gland acinar-ductal unit. The anatomy visible includes serous acini composed of serous acinar cells and myoepithelial cells, which drain into a ductal system consisting of intercalated ducts, striated ducts, and excretory ducts. The ducts are lined by specialized epithelial cells, including intercalated duct epithelial cells, striated ductal epithelial cells, excretory ductal epithelial cells, basal ductal cells, tuft cells, and ionocytes. The surrounding connective tissue stroma contains periacinar and periductal fibroblasts, an adipocyte, blood vessels (with endothelial cells, smooth muscle cells, and pericytes), and a diverse population of immune cells such as dendritic cells, IgA-secreting plasma cells, mast cells, helper T cells, and macrophages. The image depicts normal histological architecture and cellular composition, illustrating the complex microenvironment of the gland rather than a specific pathology or disease state."
  },
  {
   "rid": "a036",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/intraoral_photo.jpg",
   "modality": "clinical photo",
   "must_identify": [
    "a clinical intraoral photograph (a real photo, not a diagram or x-ray)",
    "teeth (molars / premolars visible on both sides)",
    "the tongue",
    "the palate (roof of the mouth) and/or uvula / soft palate / throat",
    "gingiva (gums)"
   ],
   "must_avoid": [
    "calling it a diagram/illustration or a radiograph"
   ],
   "caption": "A clinical intraoral photograph of an open mouth showing teeth, tongue, palate, uvula and surrounding oral soft tissues.",
   "description": "This is a clinical intraoral photograph showing a wide view of the oral cavity and oropharynx. Visible anatomy includes the maxillary and mandibular posterior dentition (premolars and molars), the hard palate with rugae, the soft palate, the uvula, the tonsillar pillars (faucial arches), and the dorsal surface of the tongue. Clinical findings include brownish discoloration and staining on the occlusal surfaces of the posterior teeth, suggestive of extrinsic staining or early occlusal caries. The lower left posterior tooth exhibits a large, dark area consistent with a large restoration (likely amalgam) or extensive decay. The mucosa of the oropharynx and tonsillar pillars appears erythematous (red), indicating mild to moderate inflammation consistent with pharyngitis. The tongue appears healthy with visible fungiform papillae."
  },
  {
   "rid": "a037",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/aphthous_stomatitis.jpg",
   "modality": "clinical photo",
   "must_identify": [
    "Clinical close-up photograph of the tongue (ventral/lateral surface), with a finger retracting tissue to expose the lesions",
    "Multiple round to oval ulcers with whitish-yellow (fibrin) centres and erythematous halos on the mucosa, consistent with aphthous ulcers / aphthous stomatitis"
   ],
   "must_avoid": [
    "Describing the mucosa as healthy with no lesions",
    "Calling it a diagram or illustration rather than a real photograph",
    "Confidently diagnosing it as oral cancer, candidiasis, or leukoplakia"
   ],
   "caption": "Clinical photograph of the tongue mucosa showing several round white-centred ulcers with red halos, consistent with aphthous stomatitis (recurrent aphthous ulcers).",
   "description": "1. Type: Clinical photograph of oral mucosa.  \n2. Anatomy: Visible structures include the moist, pink oral mucosal surface (with a glossy appearance) and surrounding oral tissues (e.g., lips, a finger holding the tissue).  \n3. Condition: Multiple white, irregularly shaped patches on erythematous (red) mucosa, suggesting mucosal lesions (e.g., ulcerations); severity appears mild with localized involvement."
  },
  {
   "rid": "a038",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/periodontium.png",
   "modality": "diagram",
   "must_identify": [
    "Image type: a schematic anatomy/histology cross-section diagram of the periodontium (tooth-supporting apparatus) showing a tooth and its surrounding structures, with letter labels (A through K) but no printed legend/key",
    "Hard dental tissues: enamel (blue-striped cap of the crown), dentin (the large pale-yellow tooth body), and cementum (thin layer covering the root surface)",
    "Periodontal soft tissue and attachment: the gingiva (pink tissue at right) with gingival margin/sulcus, and the band of gingival/periodontal fibers running between the root and the gingiva/bone near the cementoenamel junction",
    "Tooth-supporting structures: the periodontal ligament (the narrow space/fiber layer between the root surface and bone) and the alveolar bone (the trabecular/spongy bone, cream-colored, supporting the root)",
    "Neurovascular supply depicted as blood vessels (a red artery and blue vein) coursing apically on the left side of the periodontal ligament/pulp region"
   ],
   "must_avoid": [
    "Calling this a radiograph, X-ray, or clinical intraoral photograph \u2014 it is an illustrated schematic/diagram",
    "Misidentifying the blue-striped crown cap as anything other than enamel (e.g., calling it calculus, plaque, or a restoration)",
    "Inventing a specific legend/answer key for the letters (A\u2013K) as if the labels were defined in the image, or asserting a disease/pathology \u2014 this is normal healthy anatomy, not periodontitis or bone loss"
   ],
   "caption": "A labeled schematic cross-section of the healthy periodontium, showing the tooth (enamel, dentin, cementum) and its supporting structures, the gingiva with gingival/periodontal fibers, the periodontal ligament, and the alveolar bone, with letter labels A\u2013K but no printed legend.",
   "description": "This is a cross-sectional anatomical illustration of a tooth and its surrounding periodontium. Visible structures include the tooth's enamel, dentin, and pulp cavity (containing neurovascular structures), as well as the supporting tissues: alveolar bone, periodontal ligament fibers, cementum, and gingiva (showing the gingival margin, sulcus, and epithelial layers). The image depicts healthy, normal anatomy with no visible pathology; the gingival attachment and alveolar bone crest are positioned at normal physiological levels relative to the cementoenamel junction, indicating an absence of periodontal disease."
  },
  {
   "rid": "a039",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/aphthous_stomatitis.jpg",
   "modality": "clinical photo",
   "must_identify": [
    "Clinical close-up photograph of the tongue (ventral/lateral surface), with a finger retracting tissue to expose the lesions",
    "Multiple round to oval ulcers with whitish-yellow (fibrin) centres and erythematous halos on the mucosa, consistent with aphthous ulcers / aphthous stomatitis"
   ],
   "must_avoid": [
    "Describing the mucosa as healthy with no lesions",
    "Calling it a diagram or illustration rather than a real photograph",
    "Confidently diagnosing it as oral cancer, candidiasis, or leukoplakia"
   ],
   "caption": "Clinical photograph of the tongue mucosa showing several round white-centred ulcers with red halos, consistent with aphthous stomatitis (recurrent aphthous ulcers).",
   "description": "This is an intraoral clinical photograph showing the labial mucosa being retracted by a finger. Visible structures include the mucosal surface of the lip, the vermilion border, adjacent perioral skin, a retracting digit, and a slight glimpse of orthodontic brackets in the background. The primary clinical finding is the presence of multiple shallow, well-circumscribed ulcerations on the mucosa. The most prominent lesion exhibits a yellowish-white pseudomembranous center surrounded by an erythematous (red) halo, with a smaller, similar lesion visible near the retracting finger. These findings are visually characteristic of minor aphthous ulcers (canker sores), presenting with mild to moderate severity based on their small size but multiple occurrences."
  },
  {
   "rid": "a040",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/zmo0594_001.jpg",
   "modality": "clinical photo",
   "must_identify": [
    "High-magnification intraoral clinical photograph of a posterior tooth (molar) occlusal surface under blue field isolation, with adjacent teeth visible",
    "Brown staining / discoloration of the occlusal fissures and central fossa",
    "A restorative / clinical context (a tooth being assessed or prepared)"
   ],
   "must_avoid": [
    "Calling this an X-ray, radiograph, or a diagram/illustration rather than a real clinical photograph",
    "Describing the occlusal surface as completely clean and unstained when brown fissure discoloration is clearly present",
    "Misidentifying the blue field as gingiva/soft tissue or a pathologic lesion rather than isolation material"
   ],
   "caption": "High-magnification intraoral clinical photograph of a molar occlusal surface under blue field isolation, showing brown staining and discoloration of the occlusal fissures and central fossa.",
   "description": "The image is a clinical photograph of a tooth, likely taken during a dental procedure.\n\nVisible anatomy includes the occlusal surface of a molar tooth and parts of adjacent teeth, with a rubber dam in place, indicated by the blue color around the teeth. The central tooth appears to be prepared for a restoration, with some material visible in the central fossa and pits.\n\nA condition or clinical finding shown is dental caries or a restoration in the central tooth, with the material in the pits possibly being a restorative material or remaining caries. The severity appears to be moderate, as the tooth structure is partially affected but not extensively damaged."
  },
  {
   "rid": "a041",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/diagram_illustrating_coronal_and_apical_fo.png",
   "modality": "diagram",
   "must_identify": [
    "This is an anatomical/developmental diagram (semi-transparent rendering of a mandible/jaw), not a radiograph or clinical photo",
    "It shows unerupted/developing teeth each enclosed by a dental follicle that is color-coded into two zones",
    "The coronal follicle segment (orange/coral, over the crown) is distinguished from the apical follicle segment (magenta/purple, around the root/apical region), as the text labels state",
    "Individual teeth are labeled by type (Second Molar, Second Premolar, First Premolar, Canine)"
   ],
   "must_avoid": [
    "Calling this an X-ray, CBCT, or clinical intraoral photograph",
    "Interpreting the colored follicle zones as a pathology/lesion (e.g., dentigerous cyst, tumor, abscess) rather than normal anatomical follicle segments",
    "Mislabeling the structures as erupted teeth with periodontal disease or bone loss"
   ],
   "caption": "A labeled anatomical diagram of a semi-transparent mandible showing unerupted teeth (Second Molar, Second Premolar, First Premolar, Canine), each surrounded by a dental follicle color-coded into a coronal follicle segment (orange, over the crown) and an apical follicle segment (magenta, around the root).",
   "description": "This is a labeled 3D dental/CBCT-style segmentation illustration of a mandible. A translucent mandibular bone model contains several purple segmented unerupted/developing teeth labeled second molar, second premolar, first premolar, and canine, with adjacent tooth outlines visible in gray. Orange regions are labeled as coronal follicle segments around the crowns and apical follicle segments near root/apical areas. No definite pathology is shown; the image primarily demonstrates dental follicle segmentation around unerupted/developing teeth."
  },
  {
   "rid": "a042",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/dental_veneer.jpg",
   "modality": "clinical photo",
   "must_identify": [
    "This is a close-up photograph of two ceramic/porcelain dental laboratory restorations (not an intraoral image), shown ex vivo on a black/dark background",
    "The restorations are anterior (incisor-shaped) all-ceramic prosthetics with high translucency and characteristic bluish/grey incisal edges typical of porcelain",
    "No oral structures (gingiva, tongue, adjacent teeth) and no model/die are visible; the specimens are isolated against the dark background",
    "The left specimen shows a distinct internal facial outline/window or layering detail, consistent with a fabrication or build-up view of the restoration"
   ],
   "must_avoid": [
    "Calling this an intraoral clinical photograph or claiming the restoration is cemented in the mouth",
    "Describing it as an X-ray, radiograph, or diagram",
    "Asserting these are natural extracted teeth rather than fabricated ceramic restorations"
   ],
   "caption": "Close-up photograph of two translucent anterior all-ceramic dental restorations (porcelain veneers/crowns) on a black background, shown as laboratory specimens with characteristic bluish incisal translucency.",
   "description": "1. Type of image: Clinical photograph of dental restorations (likely crowns or veneers) against a black background.  \n2. Anatomy/structures: Two tooth - shaped, translucent, ceramic - like structures (resembling anterior teeth) are visible; the left structure shows an internal, boxed - in area (possibly a core or preparation), while the right has a smoother, more uniform surface.  \n3. Condition/pathology: No disease or pathology is apparent; the image displays dental restorative materials (likely for anterior teeth) with no visible signs of caries, trauma, or other abnormalities."
  },
  {
   "rid": "a043",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/eb1911_mouth_and_salivary_glands.jpg",
   "modality": "diagram",
   "must_identify": [
    "This is a labeled anatomical illustration / line-engraving (not a photograph) of a lateral view of the head and oral region",
    "It depicts the major salivary glands and their ducts: parotid gland with Stensen's (parotid) duct, submaxillary/submandibular gland with Wharton's duct, and sublingual gland with the duct of Bartholin/duct of sublingual gland",
    "Relevant musculoskeletal/oral structures are shown and named, including the masseter (cut), mylohyoid muscle, anterior belly of digastric, hyoid bone, lower border of mandible, and the teeth/tongue"
   ],
   "must_avoid": [
    "Calling this a clinical photograph or a radiograph/X-ray",
    "Describing it as showing disease or pathology (it is normal anatomy)",
    "Misidentifying the glands, e.g. labeling the parotid as the submandibular or confusing the ducts"
   ],
   "caption": "A labeled black-and-white anatomical engraving of a lateral view of the head showing the three major salivary glands and their ducts (parotid with Stensen's duct, submaxillary/submandibular with Wharton's duct, and sublingual with the duct of Bartholin), together with named oral and cervical structures such as the masseter, mylohyoid, anterior belly of digastric, hyoid bone, and mandible.",
   "description": "The image is a detailed illustration of the human head, focusing on the anatomy of the salivary glands and surrounding structures. The visible anatomy includes the parotid gland, submaxillary gland, sublingual gland, Stenson's duct, Wharton's duct, and various muscles such as the masseter and mylohyoid. The illustration also labels the orifice of Stenson's duct, the mucous membrane, and the hyoid bone. No pathology or disease is depicted in the image; it appears to be a normal anatomical representation."
  },
  {
   "rid": "a044",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/diagram_illustrating_coronal_and_apical_fo.png",
   "modality": "diagram",
   "must_identify": [
    "This is an anatomical/developmental diagram (semi-transparent rendering of a mandible/jaw), not a radiograph or clinical photo",
    "It shows unerupted/developing teeth each enclosed by a dental follicle that is color-coded into two zones",
    "The coronal follicle segment (orange/coral, over the crown) is distinguished from the apical follicle segment (magenta/purple, around the root/apical region), as the text labels state",
    "Individual teeth are labeled by type (Second Molar, Second Premolar, First Premolar, Canine)"
   ],
   "must_avoid": [
    "Calling this an X-ray, CBCT, or clinical intraoral photograph",
    "Interpreting the colored follicle zones as a pathology/lesion (e.g., dentigerous cyst, tumor, abscess) rather than normal anatomical follicle segments",
    "Mislabeling the structures as erupted teeth with periodontal disease or bone loss"
   ],
   "caption": "A labeled anatomical diagram of a semi-transparent mandible showing unerupted teeth (Second Molar, Second Premolar, First Premolar, Canine), each surrounded by a dental follicle color-coded into a coronal follicle segment (orange, over the crown) and an apical follicle segment (magenta, around the root).",
   "description": "1. Type: 3D digital illustration/diagram of dental anatomy.  \n2. Anatomy: Alveolar bone (likely mandible) with unerupted teeth (second molar, second premolar, first premolar, canine) and labeled coronal/apical follicle segments (dental follicle regions).  \n3. Condition: Depicts normal developmental anatomy of unerupted teeth with intact follicular segments; no visible pathology, showing the structural organization of developing teeth and their follicles."
  },
  {
   "rid": "a045",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/blausen_0864_toothdecay_ar.png",
   "modality": "diagram",
   "must_identify": [
    "This is an illustrated longitudinal cross-section (sagittal section) of a tooth, a molar, set in the jaw bone, not a real photograph or radiograph",
    "It depicts dental caries / tooth decay: a dark brown-black carious lesion eroding the crown from the occlusal (pit-and-fissure) surface and extending inward through enamel and dentin toward the pulp",
    "Internal anatomy is shown and labeled, including enamel, dentin, the pulp chamber with its blood vessels and nerves, the root canal, cementum, the gingiva, and the surrounding alveolar/jaw bone",
    "Text labels are present in Arabic naming the tooth structures"
   ],
   "must_avoid": [
    "Calling this a healthy or normal tooth, or failing to recognize the decay/caries",
    "Describing it as a clinical photograph, X-ray/radiograph, or histology rather than an anatomical illustration",
    "Misidentifying the condition (e.g. calling it an abscess, fracture, restoration/filling, or periodontal disease) instead of caries"
   ],
   "caption": "Labeled anatomical illustration of a longitudinal cross-section through a molar tooth in the jaw, showing dental caries as a dark carious lesion eroding the crown from the occlusal surface inward toward the pulp, with the enamel, dentin, pulp (vessels and nerves), root canal, cementum, gingiva, and alveolar bone identified in Arabic labels.",
   "description": "This is a labeled anatomicalcross-sectional diagram (illustration) of a molar tooth, with labels in Arabic. The image displays the internal and external anatomy, including the outer white enamel, the underlying yellow dentin, the central pulp chamber containing nerves and blood vessels (shown as red, blue, and yellow lines), the cementum covering the roots, the surrounding pink gingiva (gums), and the spongy alveolar bone (jaw bone). The diagram depicts significant pathology in the form of dental caries (tooth decay). There are three distinct dark, eroded lesions: a large, deep cavity on the occlusal (top) surface labeled as a pit and fissure cavity, which has penetrated through the enamel and deep into the dentin, nearly reaching the pulp; a cavity on the left side labeled as a smooth surface cavity; and a cavity on the right side labeled as a root cavity. The decay appears moderate to severe, as the lesions have breached the enamel and progressed well into the dentin layer."
  },
  {
   "rid": "a046",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/line_diagram_of_gingivitis.png",
   "modality": "diagram",
   "must_identify": [
    "This is a schematic line diagram (illustration) of a single tooth in cross-section within its supporting tissues, not a clinical photograph or radiograph",
    "Periodontal anatomy is color-coded: the tooth (crown and single tapering root), the gingiva outlined in red, the alveolar bone outlined in brown/gold, and the periodontal ligament shown as red diagonal hatching between root and bone",
    "The diagram depicts gingival inflammation (gingivitis): the gingival margin, especially on the right, is drawn swollen, bulbous and stippled/filled red to show edematous, inflamed marginal tissue",
    "Crucially there is NO alveolar bone loss and NO loss of clinical attachment: the bone crest remains at a coronal/near-CEJ level and any pocket/probing depth shown by the dotted measuring scale is a shallow gingival (false/pseudo) pocket, consistent with gingivitis rather than periodontitis",
    "A dotted vertical measuring scale on the right indicates probing/pocket depth of the marginal gingiva"
   ],
   "must_avoid": [
    "Calling it a clinical photograph or a radiograph/X-ray rather than a line diagram",
    "Diagnosing periodontitis or describing alveolar bone loss / loss of attachment, which are absent here",
    "Describing the tissue as healthy gingiva and ignoring the inflamed, swollen red marginal gingiva"
   ],
   "caption": "Schematic color-coded line diagram of a single tooth and its periodontium (red gingiva, gold alveolar bone, hatched periodontal ligament) depicting gingivitis, with a swollen, inflamed red gingival margin and a shallow gingival pocket shown on a measuring scale, but no bone loss or loss of attachment.",
   "description": "This is a schematic dental illustration of a single tooth and its periodontium. It shows the crown and root, gingival soft tissue, gingival margin/sulcus area, periodontal ligament space/fibers, and surrounding alveolar bone. On the right side, the gingiva appears enlarged/inflamed and extends coronally, creating an increased probing depth or gingival \u201cpseudopocket\u201d indicated by the bracket/dots; no clear apical attachment loss or alveolar bone loss is depicted."
  },
  {
   "rid": "a047",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/smoothsurfacecaries05.png",
   "modality": "diagram",
   "must_identify": [
    "A schematic line-drawing cross-section of a tooth crown, with the three layers labeled in text: enamel (outer), dentin (middle), and pulp (central chamber)",
    "A solid black carious lesion on the right side of the crown that has breached the enamel surface and penetrated into the dentin (crossed the dentinoenamel junction)",
    "This is an advanced/later-stage caries lesion: it is no longer confined to enamel but now involves dentin, showing the characteristic spread along the DEJ",
    "The pulp chamber is shown as not yet involved (the lesion has not reached the pulp), indicating dentinal \u2014 not pulpal \u2014 caries"
   ],
   "must_avoid": [
    "Calling this a real clinical photograph or radiograph/X-ray rather than a schematic diagram",
    "Describing the tooth as healthy or the dark area as a normal feature/filling rather than a carious lesion (decay)",
    "Claiming the lesion has reached or involves the pulp, or calling it an early/enamel-only lesion"
   ],
   "caption": "A labeled schematic cross-section of a tooth crown (enamel, dentin, pulp) showing a later-stage smooth-surface carious lesion (black) that has penetrated through the enamel and into the dentin but has not yet reached the pulp.",
   "description": "This is a simple line-drawing diagram (illustration) of a tooth in cross-section, with hand-drawn labels.\n\n**Anatomy/structures visible:** The diagram outlines the crown of a tooth showing the layered internal architecture. Labeled structures include the **enamel** (the outer layer along the crown surface), the **dentin** (the layer beneath the enamel), and the **pulp** (the central cavity/chamber). The contours suggest the cusps of a posterior tooth.\n\n**Condition/finding:** A solid black wedge-shaped area is drawn extending inward from the outer surface through the enamel and into the dentin on the right side. This depicts a **carious lesion (dental caries/decay)** penetrating from the enamel into the dentin. Based on the diagram, the decay appears to extend through enamel into dentin but does not clearly reach the pulp, suggesting a moderate-depth lesion. No other pathology is depicted.\n\nI cannot determine actual clinical severity beyond what the schematic shows, as this is an illustrative diagram rather than a radiograph or clinical photo."
  },
  {
   "rid": "a048",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/human_tooth_ku.png",
   "modality": "diagram",
   "must_identify": [
    "This is a labeled color cross-sectional anatomy diagram of a (molar) tooth, not a photograph",
    "It shows the main tooth layers: enamel, dentin, and the central pulp with its blood vessels and nerves",
    "Supporting/periodontal structures are shown and labeled, including cementum, periodontal ligament, gingiva, and alveolar bone",
    "The crown and root regions are distinguished, and the text labels are in a non-English language (Kurdish), testing OCR plus structure recognition"
   ],
   "must_avoid": [
    "Describing it as a real clinical photograph or radiograph",
    "Calling it a diseased tooth (it is a normal/healthy anatomy diagram)",
    "Asserting the labels are English or inventing English label names not present"
   ],
   "caption": "Labeled color cross-sectional anatomy diagram of a human molar (labels in Kurdish) showing enamel, dentin, pulp with vessels and nerves, cementum, periodontal ligament, gingiva, and supporting bone, with crown and root distinguished.",
   "description": "1. The image is a cross - sectional diagram of a tooth. 2. Visible anatomy includes enamel (M\u0131na), dentin (Ac), pulp (P\u00fck) with blood vessels/nerves (Kirok), cementum (\u00c7imento), periodontal membrane (Perdeya periyodontal), root canal (Coya kok\u00ea), gingival tissue (Hestiye \u00e7eney\u00ea), and tooth structure layers (Taca diran, St\u00fcye diran, Koka diran). 3. No pathology or clinical findings are depicted; it shows normal tooth anatomy."
  },
  {
   "rid": "a049",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/maxillary_tori.jpg",
   "modality": "clinical photo",
   "must_identify": [
    "Intraoral clinical photograph of the maxilla viewed from below (occlusal/upturned view of the hard palate), showing maxillary posterior and anterior teeth bilaterally and the palatal vault",
    "Torus palatinus: a bony exostosis arising along the midline (median palatine raphe) of the hard palate, here a relatively flat/low lobulated ridge covered by normal-appearing intact mucosa",
    "The swelling is in the midline of the hard palate and continuous with the palatine bone, consistent with a benign developmental bony overgrowth (exostosis), not a soft-tissue mass or pathology",
    "Palatal rugae are visible anteriorly and the overlying mucosa appears normal in color with no ulceration, erythema, or surface breakdown"
   ],
   "must_avoid": [
    "Calling it a tumor, neoplasm, abscess, cyst, or malignant/precancerous lesion",
    "Mistaking the midline bony elevation for a mandibular torus, soft-tissue swelling, or palatal pathology such as necrotizing sialometaplasia or papillary hyperplasia",
    "Describing it as a radiograph or X-ray"
   ],
   "caption": "Intraoral photograph of the hard palate showing a torus palatinus, a benign midline bony exostosis along the median palatine raphe covered by normal mucosa, with maxillary teeth and palatal rugae visible.",
   "description": "1. Type: Clinical intraoral photograph (maxillary arch view).  \n2. Anatomy: Upper teeth (incisors, canines, premolars, molars), hard palate, oral mucosa, and lips are visible.  \n3. Condition: A prominent, raised, bony-appearing midline structure on the hard palate (consistent with torus palatinus) is present; mild tooth discoloration (possible plaque/calculus) is noted, with no overt inflammation or ulceration. The torus appears benign and non-severe."
  },
  {
   "rid": "a050",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/tooth_structure_and_dental_tissues_with_th.png",
   "modality": "diagram",
   "must_identify": [
    "This is a labeled educational/research schematic of tooth anatomy, not a clinical photograph or radiograph; it pairs a whole-tooth cross-section (left) with three magnified histology-style insets (A, B, C)",
    "The cross-section labels the hard and soft tissues and supporting apparatus: enamel, dentin, dental pulp, gingiva, alveolar bone, periodontal ligament, cementum, and the neurovascular (apical) bundle entering the root",
    "Inset A details the pulp-dentin interface/odontoblast layer: odontoblast and odontoblast process, the cell-free zone (of Weil), the cell-rich zone, and pre-odontoblasts",
    "Inset B shows the pulp core cell populations: fibroblasts, blood vessel, pericyte, nerve fiber, and dental pulp stem cells (DPSCs)",
    "Inset C contrasts acellular (primary) cementum versus cellular (secondary) cementum, including cementocytes and their processes",
    "The figure's theme is the location of dental/stem-cell populations (e.g., DPSCs, cementocytes) within the tooth and periodontium"
   ],
   "must_avoid": [
    "Calling this a radiograph/X-ray or an intraoral clinical photo (it is a drawn schematic with histology insets)",
    "Mislabeling the layers, e.g., swapping enamel and dentin, or confusing periodontal ligament with alveolar bone or cementum",
    "Inventing a disease/diagnosis (caries, periodontitis, abscess) \u2014 the figure depicts normal anatomy and cell biology, not pathology"
   ],
   "caption": "Labeled educational schematic of tooth structure and supporting tissues (enamel, dentin, pulp, cementum, periodontal ligament, alveolar bone, gingiva, neurovascular bundle), with three magnified insets mapping cell populations: the odontoblast layer and cell-free/cell-rich zones (A), pulp fibroblasts, vessels, pericytes, nerves and DPSCs (B), and acellular versus cellular cementum with cementocytes (C).",
   "description": "This is a diagram (cross - sectional illustration) of a tooth and its surrounding structures, with magnified insets (A, B, C) showing cellular details. Visible anatomy includes enamel, dentin, dental pulp, gingiva, alveolar bone, periodontal ligament, cementum, and neurovascular bundle; insets depict odontoblasts (A), pulp cells (fibroblasts, blood vessels, DPSCs, nerve fibers; B), and cementum layers with cementocytes (C). No pathology or abnormal clinical findings are shown\u2014this is a normal anatomical representation."
  },
  {
   "rid": "a051",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/gray1005.png",
   "modality": "diagram",
   "must_identify": [
    "This is a black-and-white anatomical/histological illustration (engraving) of a vertical section through a tooth, not a clinical photograph",
    "It shows the layered internal structure of the tooth, including enamel with radial striations at the crown and the central pulp cavity",
    "Surrounding mineralized tissue (dentin/bone) is depicted with the characteristic stippled trabecular pattern",
    "The figure carries reference numbers/letters (e.g., 1-5 and 'c') indicating labeled structures rather than named text labels"
   ],
   "must_avoid": [
    "Describing it as a real photograph, radiograph, or microscope photomicrograph",
    "Misidentifying it as a modern color anatomy diagram or a clinical intra-oral image",
    "Claiming it shows a disease or pathology when it is a normal histologic/anatomic section"
   ],
   "caption": "Black-and-white anatomical engraving (Gray's Anatomy style) of a vertical section through a tooth, showing enamel with radial striations, the central pulp cavity, and surrounding dentin/bone, with numbered reference markers.",
   "description": "Based on the visualevidence:\n\n1.  **Type of image:** This is a black-and-white schematic illustration or diagram, specifically a longitudinal cross-section, likely from a dental histology textbook.\n2.  **Anatomy and structures:** The image depicts a single-rooted tooth embedded in the jaw. The central white space labeled **c** is the pulp cavity. The tooth structure includes the crown/enamel (labeled **1**) and the root. Surrounding the root is the periodontal ligament space containing fibers (labeled **2**). This is encased by the alveolar bone, which shows a spongy/trabecular structure (labeled **3**) and a denser cortical layer or alveolar bone proper (labeled **5**). The soft tissue at the neck of the tooth is the gingiva (labeled **4**). The large circular structure at the very bottom likely represents the mandibular canal (containing the inferior alveolar nerve and vessels).\n3.  **Condition/Pathology:** The image appears to depict normal, healthy dental anatomy. The periodontal ligament space is uniform, the bone level appears appropriate relative to the tooth neck (cervical line), and the structures are intact. There are no visible signs of pathology such as dental caries, periapical abscess/radiolucency, or significant alveolar bone loss indicative of periodontitis."
  },
  {
   "rid": "a052",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/blausen_0774_rootcanal.png",
   "modality": "diagram",
   "must_identify": [
    "This is a colored cross-sectional illustration (diagram) of a tooth, not a photograph",
    "It depicts endodontic (root canal) treatment in progress, with a cleaning file/instrument inserted down the root canal",
    "A rubber dam (green clamp/sheet) isolates the tooth, and the surrounding gingiva and alveolar bone are shown",
    "A periapical lesion / area of infection is shown at the root apex (consistent with the label 'Removing Infected Pulp')"
   ],
   "must_avoid": [
    "Describing it as a real clinical photograph or radiograph",
    "Calling it a healthy tooth with no pathology or no treatment",
    "Misidentifying it as an implant or a simple anatomy cross-section"
   ],
   "caption": "Labeled color cross-sectional diagram of a tooth undergoing root canal therapy: a cleaning file is inserted into the canal under rubber-dam isolation to remove infected pulp, with a periapical lesion at the apex.",
   "description": "The image is a diagram illustrating a dental procedure. The visible anatomy includes a tooth with its pulp chamber and root canal, surrounded by alveolar bone and periodontal ligament. A cleaning file is inserted into the root canal, and a rubber dam is placed around the tooth to isolate it. The diagram shows the removal of infected pulp from the root canal, indicating a root canal treatment procedure. The condition depicted is likely pulpitis or pulpal necrosis, requiring endodontic treatment to remove the infected tissue."
  },
  {
   "rid": "a053",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/smoothsurfacecaries04.png",
   "modality": "diagram",
   "must_identify": [
    "This is a simple hand-drawn line sketch of a tooth in cross-section, not a photograph",
    "It carries text labels reading 'enamel', 'dentin', and 'pulp' identifying the tooth layers",
    "A black carious lesion on the outer enamel surface is shown, larger and broader than in the earlier sketches of the series",
    "The lesion has advanced past the enamel and is spreading/undermining into the underlying dentin"
   ],
   "must_avoid": [
    "Do not call it a photograph or radiograph",
    "Do not describe the tooth as healthy/intact with no caries",
    "Do not overstate the lesion as having reached or exposed the pulp at this stage"
   ],
   "caption": "Hand-drawn cross-sectional sketch of a tooth labelled enamel, dentin, and pulp, showing an enlarging black smooth-surface carious lesion that has extended past the enamel and is spreading into the dentin.",
   "description": "This is a simplified dental diagram/illustration of a tooth cross-section. It shows the outer enamel layer, underlying dentin, and central pulp chamber labeled. On the right proximal surface there is a dark triangular defect extending through the enamel and into the dentin, consistent with a cavitated carious lesion involving dentin; the pulp is not visibly exposed."
  },
  {
   "rid": "a054",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/four_mandibular_implants_with_novaloc_abut.jpg",
   "modality": "clinical photo",
   "must_identify": [
    "Intraoral clinical photograph (occlusal/anterior view) of an edentulous mandibular anterior ridge with attached gingiva and a midline frenum visible",
    "Four dental implants placed in the interforaminal anterior mandible, each restored at the soft-tissue level with a stud-type overdenture attachment abutment (ball/LOCATOR-style retentive attachments, here dark anodized/coated, consistent with Novaloc abutments)",
    "These are abutment-level retentive components for an implant-retained removable overdenture, not crowns, bars, or a fixed prosthesis",
    "Soft tissue (peri-implant mucosa) appears healthy/pink with no overt swelling, suppuration, or marked inflammation around the abutments"
   ],
   "must_avoid": [
    "Calling this a radiograph/X-ray or a panoramic image",
    "Describing the dark abutments as carious teeth, natural teeth, amalgam fillings, or fixed crowns/bridge abutments",
    "Claiming a bar overdenture or a fixed full-arch (All-on-4) prosthesis is present when only individual stud attachments are shown"
   ],
   "caption": "Intraoral photograph of an edentulous anterior mandible showing four interforaminal implants fitted with stud-type (Novaloc/LOCATOR-style) attachment abutments to retain a removable overdenture, with cheek/lip retractors at the lower margin.",
   "description": "This is an intraoral clinical photograph of an edentulous mandibular arch. Visible anatomy includes the soft tissue of the alveolar ridge, the floor of the mouth, the lingual frenum, and the ventral surface of the tongue resting above. The primary clinical finding is the presence of four metallic dental implant abutments (attachments) protruding through the gingiva, indicating an implant-supported restorative treatment plan. The surrounding peri-implant mucosa appears generally healthy and well-adapted, with only mild, localized erythema immediately adjacent to the abutments. Clear retractors are visible at the inferior border of the image."
  },
  {
   "rid": "a055",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/human_tooth_diagram_en.png",
   "modality": "diagram",
   "must_identify": [
    "This is a labeled cross-sectional (longitudinal) diagram of a tooth, drawn as a molar within its supporting tissues",
    "It identifies the hard dental tissues: enamel (outer crown layer), dentin, and cementum",
    "It shows the internal pulp chamber containing blood vessels and nerves",
    "It labels the surrounding structures: gingiva (gum) and jaw/alveolar bone",
    "It divides the tooth into the three regions crown, neck (cervix), and root via brackets on the right"
   ],
   "must_avoid": [
    "Calling this a clinical photograph or radiograph",
    "Describing it as a diseased tooth (it depicts normal/healthy anatomy)",
    "Confusing the labeled layers (e.g., calling dentin enamel or labeling the pulp as the root canal filling)"
   ],
   "caption": "Labeled cross-sectional diagram of a healthy molar showing enamel, dentin, cementum, the pulp chamber with blood vessels and nerves, the surrounding gingiva and jaw bone, and the crown, neck, and root regions.",
   "description": "The image is a diagram of a tooth's internal and external anatomy. The visible structures include the enamel, dentin, gingiva, pulp chamber with blood vessels and nerves, cementum, jawbone, crown, neck, and root. No condition, pathology, or clinical finding is depicted; the image appears to be a normal anatomical representation."
  },
  {
   "rid": "a056",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/caries_periodontal_disease_calculus.png",
   "modality": "clinical photo",
   "must_identify": [
    "This is an intraoral clinical photograph of a dentition showing advanced, neglected oral disease",
    "Multiple teeth are grossly carious or broken down to retained roots/stumps with extensive coronal destruction",
    "There are heavy dental calculus (tartar) deposits and signs of severe periodontal disease (inflamed gingiva, attachment loss)"
   ],
   "must_avoid": [
    "Describing the mouth as healthy or only mildly affected",
    "Calling it a diagram or illustration rather than a real photograph",
    "Reducing it to a single isolated cavity while ignoring the gross destruction, calculus, and periodontal involvement"
   ],
   "caption": "Intraoral clinical photograph showing gross carious destruction with retained roots, heavy calculus deposits, and severe periodontal disease across the dentition.",
   "description": "This is an intraoral clinicalphotograph displaying the maxillary and mandibular arches, tongue, and gingiva, held open by metal cheek retractors. The image reveals a condition of severe, rampant dental caries and advanced tooth destruction. Most visible teeth are reduced to decayed stumps or residual roots with extensive brown and black cavitation, particularly in the maxillary arch where several anterior teeth are missing. There is a heavy accumulation of yellowish-white dental calculus and plaque, notably forming a large mass on the lingual aspect of the mandibular anterior teeth. The remaining dentition is severely discolored and structurally compromised, indicating a high severity of disease consistent with long-standing dental neglect."
  },
  {
   "rid": "a057",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/human_tooth_diagram_en.png",
   "modality": "diagram",
   "must_identify": [
    "This is a labeled cross-sectional (longitudinal) diagram of a tooth, drawn as a molar within its supporting tissues",
    "It identifies the hard dental tissues: enamel (outer crown layer), dentin, and cementum",
    "It shows the internal pulp chamber containing blood vessels and nerves",
    "It labels the surrounding structures: gingiva (gum) and jaw/alveolar bone",
    "It divides the tooth into the three regions crown, neck (cervix), and root via brackets on the right"
   ],
   "must_avoid": [
    "Calling this a clinical photograph or radiograph",
    "Describing it as a diseased tooth (it depicts normal/healthy anatomy)",
    "Confusing the labeled layers (e.g., calling dentin enamel or labeling the pulp as the root canal filling)"
   ],
   "caption": "Labeled cross-sectional diagram of a healthy molar showing enamel, dentin, cementum, the pulp chamber with blood vessels and nerves, the surrounding gingiva and jaw bone, and the crown, neck, and root regions.",
   "description": "This is an anatomical diagram (illustration) of a tooth. Visible structures include the crown (with enamel and dentin), neck, root (with cementum), gingiva (gum tissue), pulp chamber (containing blood vessels and nerves), and jaw bone. No pathology or clinical findings are depicted; it shows normal tooth anatomy."
  },
  {
   "rid": "a058",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/intraoral_photo.jpg",
   "modality": "clinical photo",
   "must_identify": [
    "a clinical intraoral photograph (a real photo, not a diagram or x-ray)",
    "teeth (molars / premolars visible on both sides)",
    "the tongue",
    "the palate (roof of the mouth) and/or uvula / soft palate / throat",
    "gingiva (gums)"
   ],
   "must_avoid": [
    "calling it a diagram/illustration or a radiograph"
   ],
   "caption": "A clinical intraoral photograph of an open mouth showing teeth, tongue, palate, uvula and surrounding oral soft tissues.",
   "description": "Intraoral clinical photograph of an open mouth showing the hard and soft palate, palatal rugae, uvula, posterior oropharynx/tonsillar pillars, dorsal tongue, buccal mucosa, and posterior maxillary and mandibular teeth. The mucosa appears generally pink and moist, with mild diffuse redness in the soft palate/oropharyngeal area but no visible ulcer, mass, swelling, or exudate. Posterior teeth show some occlusal fissure staining/debris, but no clearly identifiable cavitated caries or severe periodontal finding is visible in this image."
  },
  {
   "rid": "a059",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/caries.png",
   "modality": "diagram",
   "must_identify": [
    "a cross-section diagram / illustration of a tooth (not a radiograph or clinical photo)",
    "dental caries / a cavity / tooth decay",
    "the lesion on the crown / occlusal (biting) surface",
    "decay extending into the dentin (toward the pulp)",
    "the pulp / root canal system"
   ],
   "must_avoid": [
    "describing the tooth as healthy with no decay",
    "calling it a radiograph or a clinical photograph"
   ],
   "caption": "Diagram of dental caries: a tooth in cross-section with a carious lesion on the crown extending through enamel into dentin toward the pulp.",
   "description": "1. Type: Illustrative diagram of a tooth (cross - sectional view).  \n2. Anatomy: Visible structures include the tooth crown (enamel, dentin), pulp chamber (with colored nerve/blood vessel bundles), root canals, root apex, surrounding alveolar bone, and gingiva.  \n3. Condition: A dark lesion (likely caries or a fracture) is present in the crown. There is a red, swollen area at the root apex (periapical region), suggesting periapical pathology (e.g., abscess) indicative of pulp inflammation/infection. The periapical lesion appears to be of moderate severity, showing inflammation at the root tip."
  },
  {
   "rid": "a060",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/suunad.png",
   "modality": "diagram",
   "must_identify": [
    "This is a schematic/line-drawing diagram (not a photograph or radiograph) showing both dental arches from an occlusal view: the upper arch (labeled ULEMINE HAMBAKAAR) and the lower arch (ALUMINE HAMBAKAAR)",
    "It teaches tooth surfaces and directional/positional terminology: labial (Labiaalne), buccal (Bukaalne), palatal (Palatinaalne), lingual (Lingvaalne), and the mesial (Mesiaalne) / distal (Distaalne) directions indicated by arrows",
    "One quadrant of teeth is numbered 1 through 8, sequencing from the central incisor anteriorly to the third molar posteriorly",
    "Labels are in Estonian; this is a healthy/normal anatomy and orientation reference plate, not depicting any disease or pathology"
   ],
   "must_avoid": [
    "Calling it a photograph, radiograph/X-ray, or panoramic image rather than a line-drawing diagram",
    "Inventing a disease, pathology, or abnormality (e.g. caries, periodontitis, malocclusion) - the figure shows normal anatomy and surface terminology only",
    "Mislabeling the surface/direction terms, e.g. swapping palatal vs lingual, buccal vs labial, or mesial vs distal"
   ],
   "caption": "A labeled schematic occlusal-view diagram of the upper and lower dental arches (in Estonian) illustrating tooth surfaces and directional terminology - labial, buccal, palatal, lingual, mesial, and distal - with one quadrant numbered 1 to 8 from central incisor to third molar.",
   "description": "1. Type: Diagram (dental arch chart).  \n2. Anatomy: Upper (\u201c\u00dclemine Hambahkaar\u201d) and lower (\u201cAlumine Hambahkaar\u201d) dental arches with teeth (upper teeth numbered 1\u20138, lower teeth corresponding), labeled surfaces (Labiaalne, Bukaalne, Palatinaalne, Lingvaalne) and directions (Distaalne, Mesiaalne).  \n3. Condition: No pathology; it is a normal anatomical diagram illustrating tooth surfaces and arch structure."
  },
  {
   "rid": "a061",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/permanent_maxillary_teeth_by_rokaya_yahia_.jpg",
   "modality": "diagram",
   "must_identify": [
    "This is a hand-drawn anatomical illustration (pencil sketch), not a clinical photograph or radiograph",
    "It shows one quadrant of the permanent maxillary (upper) dentition viewed from the occlusal/palatal aspect, specifically the right half of the upper arch as the Arabic title states",
    "It depicts the full set of 8 permanent teeth in the quadrant in sequence: central incisor, lateral incisor, canine, first and second premolars, and first, second, and third molars (the third molar being the wisdom tooth)",
    "Each tooth is named with a leader-line text label (the labels are in Arabic)"
   ],
   "must_avoid": [
    "Calling it a clinical photograph, intraoral photo, or radiograph/X-ray",
    "Identifying the teeth as deciduous/primary (baby) teeth or as a mixed dentition rather than the permanent dentition",
    "Claiming it shows the full dental arch or both quadrants rather than a single (right) maxillary quadrant"
   ],
   "caption": "A labeled hand-drawn pencil illustration of the right maxillary quadrant viewed from the occlusal/palatal aspect, naming the eight permanent teeth in order (central incisor, lateral incisor, canine, first and second premolars, and first, second, and third molars) with Arabic text labels.",
   "description": "This is a labeled anatomical dental illustration, showing an occlusal/palatal view of the right side of the upper jaw (right maxillary arch). Visible structures include the maxillary central incisor, lateral incisor, canine, first and second premolars, first, second, and third molars (wisdom tooth), along with surrounding gingiva/alveolar ridge and part of the palate. The image is educational and does not show any visible pathology, caries, periodontal disease, or abnormal clinical finding."
  },
  {
   "rid": "a062",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/dental_caries_cavity_2_cropped.jpg",
   "modality": "clinical photo",
   "must_identify": [
    "This is an intraoral clinical photograph of maxillary (upper) teeth and gingiva",
    "One tooth shows extensive (advanced) dental caries with a large, dark/blackened cavitated lesion and gross breakdown of the crown",
    "The carious cavity exposes deeper tooth structure (dentin/pulp chamber level destruction), not just superficial enamel",
    "Adjacent teeth and the surrounding pink gingiva are comparatively intact/less affected"
   ],
   "must_avoid": [
    "Calling the destroyed/carious tooth healthy or normal",
    "Identifying the image as a radiograph/X-ray or an illustration/diagram instead of a clinical photo",
    "Misreading the dark cavitation as merely surface staining, a filling, or a normal pit/fissure rather than a destructive carious lesion"
   ],
   "caption": "Intraoral clinical photograph of the maxillary arch showing a single tooth with advanced dental caries, a large dark cavitated lesion and gross crown destruction, while the neighboring teeth and pink gingiva appear comparatively intact.",
   "description": "**1. Type of image:** This is an intraoral clinical photograph (close-up macro view) of teeth and surrounding gingiva.\n\n**2. Anatomy and structures visible:** Three teeth are shown along with the adjacent gingiva (gum tissue, appearing pink and moist with reflective saliva). The central tooth is severely broken down, while the teeth on either side appear relatively intact with visible crown enamel. The labial/buccal gingival margin is visible above and between the teeth.\n\n**3. Condition/pathology/findings:** The central tooth shows extensive coronal destruction with a large dark cavity. There is a deep, dark (black/brown) carious lesion with significant loss of tooth structure, leaving only thin remaining walls. The dark central area likely represents an open pulp chamber/non-vital tooth or deep decay extending into the pulp space. This appears to be advanced/severe dental caries with gross coronal breakdown (a grossly carious, possibly non-restorable or near-root-stump tooth). The surrounding gingiva appears relatively pink without obvious gross swelling or fistula visible in this view, though full assessment of inflammation cannot be made from a single image. The adjacent teeth do not show obvious carious lesions in this view.\n\n(Note: This description is limited to visible features; radiographic and clinical examination would be needed to confirm pulpal status, root condition, and restorability.)"
  },
  {
   "rid": "a063",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/blausen_0774_rootcanal.png",
   "modality": "diagram",
   "must_identify": [
    "This is a colored cross-sectional illustration (diagram) of a tooth, not a photograph",
    "It depicts endodontic (root canal) treatment in progress, with a cleaning file/instrument inserted down the root canal",
    "A rubber dam (green clamp/sheet) isolates the tooth, and the surrounding gingiva and alveolar bone are shown",
    "A periapical lesion / area of infection is shown at the root apex (consistent with the label 'Removing Infected Pulp')"
   ],
   "must_avoid": [
    "Describing it as a real clinical photograph or radiograph",
    "Calling it a healthy tooth with no pathology or no treatment",
    "Misidentifying it as an implant or a simple anatomy cross-section"
   ],
   "caption": "Labeled color cross-sectional diagram of a tooth undergoing root canal therapy: a cleaning file is inserted into the canal under rubber-dam isolation to remove infected pulp, with a periapical lesion at the apex.",
   "description": "1. Type of image: Illustrative diagram (clinical illustration) of a dental procedure.  \n2. Anatomy/structures: A tooth (crown, root, pulp chamber, root canals), alveolar bone, gingival tissue, a rubber dam (isolating the tooth), and a cleaning file (instrument) inserted into a root canal.  \n3. Condition/finding: The image depicts root canal therapy, with a cleaning file used to remove infected pulp (as labeled), indicating treatment of pulp infection. No specific severity of disease is shown beyond the procedure context."
  },
  {
   "rid": "a064",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/zahnimplantat.jpg",
   "modality": "diagram",
   "must_identify": [
    "This is a cross-sectional illustration/schematic of an endosseous dental implant placed in the jaw",
    "It depicts a threaded titanium implant fixture surrounded by bone and overlying gingiva/soft tissue",
    "It carries numbered labels (1, 2, 3) pointing to the surrounding structures such as gingiva, bone, and the implant"
   ],
   "must_avoid": [
    "Calling it a real clinical photograph or a radiograph/X-ray",
    "Describing it as a natural tooth root rather than a threaded implant",
    "Asserting a specific disease such as peri-implantitis when only normal anatomy is shown"
   ],
   "caption": "Labeled cross-sectional diagram of a threaded dental implant osseointegrated in bone beneath the gingiva, with numbered callouts to the surrounding tissues.",
   "description": "This is a labeled dental illustration/diagram in cross-section. It shows a threaded cylindrical dental implant fixture placed within surrounding alveolar bone, with overlying pink gingival soft tissue. The visible structures include the gingiva/mucosa, crestal and surrounding bone, and the internal/metallic threaded implant body. No disease or pathology is depicted; the image appears to illustrate implant placement/anatomy rather than a clinical abnormality."
  },
  {
   "rid": "a065",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/human_tooth_ku.png",
   "modality": "diagram",
   "must_identify": [
    "This is a labeled color cross-sectional anatomy diagram of a (molar) tooth, not a photograph",
    "It shows the main tooth layers: enamel, dentin, and the central pulp with its blood vessels and nerves",
    "Supporting/periodontal structures are shown and labeled, including cementum, periodontal ligament, gingiva, and alveolar bone",
    "The crown and root regions are distinguished, and the text labels are in a non-English language (Kurdish), testing OCR plus structure recognition"
   ],
   "must_avoid": [
    "Describing it as a real clinical photograph or radiograph",
    "Calling it a diseased tooth (it is a normal/healthy anatomy diagram)",
    "Asserting the labels are English or inventing English label names not present"
   ],
   "caption": "Labeled color cross-sectional anatomy diagram of a human molar (labels in Kurdish) showing enamel, dentin, pulp with vessels and nerves, cementum, periodontal ligament, gingiva, and supporting bone, with crown and root distinguished.",
   "description": "This is an educational anatomical diagram illustrating the cross-section of a human molar tooth, labeled in Kurdish (specifically Kurmanji, titled \"Diran\u00ea mirov\"). The image details the three main vertical sections of the tooth: the crown (\"Taca diran\"), the neck (\"St\u00fby\u00ea diran\"), and the root (\"Koka diran\"). Visible internal structures include the outer white enamel (\"M\u00eena\"), the underlying grey dentin (\"Ac\"), and the central pulp chamber (\"P\u00fbk\") which extends into the root canal (\"Kirok\") housing blood vessels (red and blue lines) and nerves (orange lines). The root surface is covered by cementum (\"\u00c7\u00eemento\") and is anchored to the surrounding jawbone (\"Hestiy\u00ea \u00e7eney\u00ea\") by the periodontal ligament (\"Perdeya per\u00eeontal\"). The diagram depicts a healthy, normal tooth anatomy with no visible pathology, decay, or disease."
  },
  {
   "rid": "a066",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/connective_tissue_graft_to_implant.gif",
   "modality": "clinical photo",
   "must_identify": [
    "Intraoral clinical photograph, buccal/lateral view of posterior teeth/crowns, explicitly labeled 'PRE-OP' (pre-operative baseline)",
    "Gingival/mucosal recession at the marginal gingiva indicated by the black arrowhead, with exposure of a dark restoration margin, abutment, or root surface",
    "A black arrowhead marker pointing to the recession defect at the gingival margin",
    "Crowned/restored posterior teeth showing a marginal soft-tissue/esthetic deficiency at the indicated unit"
   ],
   "must_avoid": [
    "Describing this as the post-operative or healed result of a graft, or claiming a connective tissue graft is visible in the image (this is the PRE-OP baseline showing the defect, not the graft)",
    "Calling it a radiograph/X-ray or any 3D/CBCT image",
    "Asserting with certainty that the affected unit is a dental implant or naming a specific tooth number; the implant nature cannot be confirmed from the photo alone"
   ],
   "caption": "Pre-operative intraoral clinical photograph (buccal view of posterior crowns) with a black arrowhead marking gingival recession and an exposed dark margin at the gingival aspect of one restored unit, representing the baseline defect before mucogingival/soft-tissue graft surgery.",
   "description": "**1. Type of image:** This is an intraoral clinical photograph, labeled \"PRE-OP\" (pre-operative), showing a lateral/buccal view of teeth and gingiva.\n\n**2. Anatomy and structures visible:** The image shows several posterior and anterior teeth (appearing to be premolars and possibly a canine/incisor region) along the buccal surfaces. The surrounding pink gingival (gum) tissue and the gingival margins are visible. There is reflective saliva/moisture on the tooth surfaces.\n\n**3. Condition/clinical finding:** A black arrow points to a tooth near the gingival margin where there is visible gingival recession exposing a darkened/discolored cervical area of the tooth, suggesting an exposed root surface, possible restoration margin, or cervical defect. The adjacent gingiva appears mildly erythematous (reddened) in places. The tooth indicated shows a grayish/yellow-brown discoloration at the neck region compared to the whiter adjacent teeth, indicating a localized lesion or restoration that is the apparent focus for the planned procedure. The severity cannot be precisely determined from this single view, but the localized recession and discoloration appear moderate and limited to that site.\n\n(Note: Description is limited to visible features; underlying diagnosis cannot be confirmed without radiographs or clinical examination.)"
  },
  {
   "rid": "a067",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/zahnfehlstellung_angle_klasse_ii_1.jpg",
   "modality": "diagram",
   "must_identify": [
    "Hand-drawn line diagram/schematic showing teeth in lateral (profile) view in occlusion within a jaw outline",
    "It depicts a malocclusion: the upper anterior teeth sit well ahead of the lower anterior teeth, producing increased overjet (proclined upper incisors), consistent with Angle Class II division 1",
    "Red vertical reference lines are drawn to mark the antero-posterior discrepancy between the upper and lower incisor/canine positions"
   ],
   "must_avoid": [
    "Calling this a real clinical photograph or radiograph rather than a line drawing",
    "Describing it as a normal/ideal Class I occlusion",
    "Calling it an anterior crossbite or Class III (the upper teeth are ahead of, not behind, the lower teeth)"
   ],
   "caption": "Hand-drawn lateral line diagram of teeth in occlusion with red marker lines, illustrating an Angle Class II division 1 malocclusion in which the upper incisors are positioned anterior to the lowers with increased overjet.",
   "description": "Based on the visualevidence:\n\n1.  **Type of image:** This is a hand-drawn schematic diagram or illustration representing a lateral (side) view of dental occlusion.\n2.  **Anatomy and structures:** The image displays the maxillary (upper) and mandibular (lower) dentition, including incisors, canines, premolars, and molars in occlusion. The outline of the jaw/alveolar process is visible on the left side.\n3.  **Condition/Pathology:** The diagram depicts a **Class II malocclusion** (specifically Angle's Class II). The two red vertical lines highlight the molar relationship: the upper red line marks the position of the maxillary first molar (likely the mesiobuccal cusp), and the lower red line marks the mandibular first molar (likely the buccal groove). The upper marker is positioned anteriorly (forward/to the left) relative to the lower marker, indicating that the maxillary molar is mesial to the mandibular molar. This \"distal occlusion\" of the mandible is further supported by the significant overjet (protrusion) of the upper anterior teeth over the lower anterior teeth."
  },
  {
   "rid": "a068",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/aphthous_stomatitis.jpg",
   "modality": "clinical photo",
   "must_identify": [
    "Clinical close-up photograph of the tongue (ventral/lateral surface), with a finger retracting tissue to expose the lesions",
    "Multiple round to oval ulcers with whitish-yellow (fibrin) centres and erythematous halos on the mucosa, consistent with aphthous ulcers / aphthous stomatitis"
   ],
   "must_avoid": [
    "Describing the mucosa as healthy with no lesions",
    "Calling it a diagram or illustration rather than a real photograph",
    "Confidently diagnosing it as oral cancer, candidiasis, or leukoplakia"
   ],
   "caption": "Clinical photograph of the tongue mucosa showing several round white-centred ulcers with red halos, consistent with aphthous stomatitis (recurrent aphthous ulcers).",
   "description": "This is aclinical intraoral photograph showing the lower labial mucosa (the inner surface of the lower lip), which is being retracted laterally by a gloved finger to expose the tissue. The visible anatomy includes the moist, pink mucosal lining and the vermilion border of the lip on the far left. The image displays pathology consistent with aphthous stomatitis (canker sores). There is a prominent, round ulceration in the upper left quadrant featuring a central white-to-yellow fibrinous pseudomembrane surrounded by a distinct erythematous (red) halo. A second, irregular white ulcerative lesion is visible in the lower right area, along with smaller satellite white spots. The surrounding mucosa appears inflamed. These findings, located on non-keratinized mucosa, are characteristic of aphthous ulcers, appearing moderate in severity given the size of the primary lesion and the presence of multiple sites."
  },
  {
   "rid": "a069",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/human_tooth_ku.png",
   "modality": "diagram",
   "must_identify": [
    "This is a labeled color cross-sectional anatomy diagram of a (molar) tooth, not a photograph",
    "It shows the main tooth layers: enamel, dentin, and the central pulp with its blood vessels and nerves",
    "Supporting/periodontal structures are shown and labeled, including cementum, periodontal ligament, gingiva, and alveolar bone",
    "The crown and root regions are distinguished, and the text labels are in a non-English language (Kurdish), testing OCR plus structure recognition"
   ],
   "must_avoid": [
    "Describing it as a real clinical photograph or radiograph",
    "Calling it a diseased tooth (it is a normal/healthy anatomy diagram)",
    "Asserting the labels are English or inventing English label names not present"
   ],
   "caption": "Labeled color cross-sectional anatomy diagram of a human molar (labels in Kurdish) showing enamel, dentin, pulp with vessels and nerves, cementum, periodontal ligament, gingiva, and supporting bone, with crown and root distinguished.",
   "description": "The image is a diagram of a tooth, labeled in a non-English language. The visible anatomy includes the enamel (M\u00eena), dentin (Ac or Dent\u00een), pulp (P\u00fbk), root (Koka diran or R\u00ee\u015feya diran), and surrounding bone (Hestiy\u00ea \u00e7eney\u00ea). The diagram also shows the periodontal ligament (Perdeya per\u00eeontal), cementum (\u00c7\u00eemento), and the neurovascular bundle within the root canal (Kirok). No pathology or disease is depicted; the image appears to be an educational illustration of normal tooth anatomy."
  },
  {
   "rid": "a070",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/gingivitida.jpg",
   "modality": "diagram",
   "must_identify": [
    "This is a 3D-rendered medical illustration (not a real intraoral photograph) of a multi-rooted tooth shown in cross-section within its socket",
    "It shows the supporting structures: alveolar bone (cancellous/trabecular pattern), gingiva, root(s) with pulp/root canals and apical blood vessels",
    "A band of brown/tan calculus and plaque deposit is present at the cervical region (around the neck of the tooth)",
    "The gingiva is reddened/inflamed, consistent with gingivitis / gingival inflammation from the cervical deposits"
   ],
   "must_avoid": [
    "Do not present this as a real clinical photograph of a patient's mouth",
    "Do not describe the gingiva as healthy and deposit-free; it shows calculus/plaque with marginal inflammation",
    "Do not over-call it as advanced periodontitis with marked alveolar bone loss; the bone support appears largely intact"
   ],
   "caption": "Three-dimensional rendered illustration of a tooth in cross-section within bone and gingiva, with cervical calculus/plaque deposits and reddened, inflamed marginal gingiva depicting gingivitis.",
   "description": "This is a 3D anatomical illustration. Visible structures include a tooth (with a crown restoration), inflamed gingiva (red, swollen), alveolar bone (porous, yellow), and periodontal ligament. The gingiva shows signs of inflammation (gingivitis), and the tooth\u2019s crown has a dark margin at the gum line, suggesting possible decay or restoration issues. No severe bone loss is evident, but gingival inflammation is present."
  },
  {
   "rid": "a071",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/zmo0594_006.jpg",
   "modality": "clinical photo",
   "must_identify": [
    "Intraoral clinical photograph of a posterior tooth (mandibular molar occlusal surface, intraoral-camera close-up)",
    "A clear/transparent matrix band isolates the tooth for a direct restorative procedure",
    "An occlusal cavity preparation is present and being restored with tooth-colored material (composite resin or flowable liner/base)",
    "The image shows an in-progress restorative step, not a finished/polished final restoration"
   ],
   "must_avoid": [
    "Calling this a radiograph/X-ray or a diagram/illustration (it is a real clinical photo)",
    "Describing the tooth as healthy/intact or as a fully completed final restoration when an active cavity preparation with material placement is shown",
    "Mistaking the transparent matrix band for the tooth, gingiva, or a clear aligner/orthodontic appliance"
   ],
   "caption": "Intraoral clinical photograph of a posterior (mandibular molar) tooth isolated with a clear matrix band, showing an occlusal cavity preparation being filled with tooth-colored restorative material during a direct restorative procedure.",
   "description": "This is a magnified clinical intraoral photograph. It displays a tooth isolated with a blue rubber dam, a metal clamp, and a clear matrix band. The tooth has a deep occlusal cavity preparation revealing the pulpal floor. The key clinical finding is the placement of a white, opaque dental material in specific areas on the pulpal floor, suggesting an intraoperative step such as pulp capping or perforation repair. No active pathology or decay is visible within the clean preparation."
  },
  {
   "rid": "a072",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/nih_doc_16_homogenousleukoplakia.jpg",
   "modality": "clinical photo",
   "must_identify": [
    "This is an intraoral clinical photograph of the floor of the mouth / ventral oral mucosa with the lower teeth visible at the bottom",
    "A well-demarcated, flat, uniformly white plaque is present on the mucosa",
    "The lesion is consistent with homogeneous oral leukoplakia, a potentially malignant white patch that does not rub off"
   ],
   "must_avoid": [
    "Describing the mucosa as normal/healthy with no lesion",
    "Calling it a diagram, illustration, or radiograph instead of a clinical photograph",
    "Diagnosing it as an ulcer, candidiasis (wipe-off white plaque), or food debris"
   ],
   "caption": "Intraoral clinical photograph showing a well-defined homogeneous white plaque on the floor-of-mouth/ventral mucosa, consistent with homogeneous oral leukoplakia.",
   "description": "Based on the image provided:\n\n1.  **Type of image:** This is a clinical intraoral photograph.\n2.  **Anatomy and structures visible:** The image shows the mandibular anterior teeth (lower front teeth) at the bottom, with visible wear and some staining/calculus. Above the teeth, the soft tissue of the floor of the mouth or the ventral surface of the tongue is visible. The surrounding mucosa appears deep red and moist.\n3.  **Condition/Pathology:** There is a distinct, well-demarcated, white-to-pinkish plaque with a corrugated (wrinkled) or slightly verrucous surface located on the soft tissue. The surrounding tissue is erythematous (red). This presentation is consistent with **leukoplakia** or **erythroleukoplakia** (speckled leukoplakia). This is a potentially malignant disorder (precancerous lesion). Lesions in this specific location (floor of the mouth/ventral tongue) are considered high-risk for transformation into oral squamous cell carcinoma, indicating a clinically significant severity that would require biopsy and monitoring. Alternatively, the white, sloughing appearance could represent a chemical burn (necrotic epithelium), but the distinct plaque-like nature strongly suggests a leukoplakic lesion."
  },
  {
   "rid": "a073",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/gingivitida.jpg",
   "modality": "diagram",
   "must_identify": [
    "This is a 3D-rendered medical illustration (not a real intraoral photograph) of a multi-rooted tooth shown in cross-section within its socket",
    "It shows the supporting structures: alveolar bone (cancellous/trabecular pattern), gingiva, root(s) with pulp/root canals and apical blood vessels",
    "A band of brown/tan calculus and plaque deposit is present at the cervical region (around the neck of the tooth)",
    "The gingiva is reddened/inflamed, consistent with gingivitis / gingival inflammation from the cervical deposits"
   ],
   "must_avoid": [
    "Do not present this as a real clinical photograph of a patient's mouth",
    "Do not describe the gingiva as healthy and deposit-free; it shows calculus/plaque with marginal inflammation",
    "Do not over-call it as advanced periodontitis with marked alveolar bone loss; the bone support appears largely intact"
   ],
   "caption": "Three-dimensional rendered illustration of a tooth in cross-section within bone and gingiva, with cervical calculus/plaque deposits and reddened, inflamed marginal gingiva depicting gingivitis.",
   "description": "This is a 3D anatomical illustration of a multi-rooted tooth embedded in the jaw. Visible structures include the tooth crown and roots, the surrounding red gingival tissue, the porous alveolar bone, and neurovascular bundles entering the root apices. The primary clinical condition depicted is a thick, rough, brownish-yellow band of calculus (tartar) accumulation encircling the cervical region of the tooth. This moderate-to-heavy buildup covers the lower portion of the crown and extends onto the exposed root surface, indicating poor oral hygiene and likely accompanying gingival recession."
  },
  {
   "rid": "a074",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/mouth_parotid_gland_nih_bioart_654.png",
   "modality": "diagram",
   "must_identify": [
    "This is a labeled educational microanatomy/histology schematic (NIH BioArt style) of salivary gland tissue, not a gross anatomy view or a radiograph",
    "Secretory end-piece architecture is shown: rounded acini (serous acinus) draining into a branching duct system",
    "The intralobular/excretory duct hierarchy is depicted and labeled: intercalated duct, striated duct (striated ductal epithelium), and excretory duct (excretory ductal epithelium)",
    "Cellular and stromal components are labeled, including myoepithelial cells around acini, adipocytes, fibroblasts, and connective-tissue/immune and vascular cells (e.g., mast cell, macrophage, endothelial cell, smooth muscle)",
    "A microscopic scale is indicated by a 50 \u00b5m scale bar, confirming this is tissue-level (microscopic) rather than organ-level anatomy"
   ],
   "must_avoid": [
    "Calling this an X-ray, sialogram, ultrasound, CT/MRI, or any radiographic/clinical photograph",
    "Describing it as gross anatomy of the mouth, face, or whole parotid gland with ducts like Stensen's duct opening into the oral cavity",
    "Reading it as a pathology/tumor specimen or assigning a disease diagnosis (e.g., sialadenitis, neoplasm) when it depicts normal glandular microanatomy"
   ],
   "caption": "Labeled NIH BioArt-style histology schematic of salivary (parotid) gland microanatomy, showing serous acini with surrounding myoepithelial cells draining through intercalated, striated, and excretory ducts, set within stroma containing adipocytes, fibroblasts, vascular and immune cells, with a 50 \u00b5m scale bar.",
   "description": "This is a detailed schematic illustration depicting the microscopic cellular anatomy of a glandular structure, characteristic of a salivary gland. Visible structures include secretory units composed of serous acinar cells, which connect to a branching ductal system labeled as intercalated, striated, and excretory ducts. The diagram explicitly labels numerous specific cell types within the ductal epithelium (e.g., tuft cells, ionocytes, basal ductal cells) and the surrounding stroma, including myoepithelial cells, fibroblasts, an adipocyte, blood vessel components (endothelial cells, smooth muscle cells, pericytes), and various immune cells (macrophages, helper T cells, mast cells, dendritic cells, and IgA-secreting plasma cells). The image represents normal histological architecture with no visible pathology, disease, or abnormal clinical findings."
  },
  {
   "rid": "a075",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/blausen_0864_toothdecay.png",
   "modality": "diagram",
   "must_identify": [
    "This is a labeled illustration/diagram of a tooth in cross-section within its supporting tissues, not a clinical photo or radiograph",
    "It depicts dental caries (tooth decay): dark carious lesions eroding the crown, including a smooth-surface cavity and a pit-and-fissure cavity",
    "It labels normal structures (enamel, dentin, pulp chamber with blood vessels and nerves, cementum, gingiva, jaw bone)",
    "The decay is shown extending inward, reaching the dentin and toward the pulp, with labels for root cavity decay"
   ],
   "must_avoid": [
    "Calling the tooth healthy or failing to mention caries/decay",
    "Describing it as a real intraoral photograph or radiograph",
    "Misreading the carious cavities as normal fissures or as a filling/restoration"
   ],
   "caption": "English-labeled cross-sectional illustration of a tooth affected by dental caries, showing smooth-surface and pit-and-fissure cavities eroding the enamel and dentin toward the pulp, with labeled enamel, dentin, pulp, cementum, gingiva and jaw bone.",
   "description": "The image is a diagram of a tooth's cross-section, illustrating its internal and external structures. The visible anatomy includes the enamel, dentin, pulp chamber with blood vessels and nerves, cementum, and jawbone, as well as the gingiva surrounding the tooth. The diagram highlights three cavities: a smooth surface cavity, a pit and fissure cavity, and a root cavity, indicating dental caries or tooth decay in various stages and locations. The condition depicted is dental caries, with varying severity across the different cavities shown."
  },
  {
   "rid": "a076",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/mandibularanteriorcalculus.jpg",
   "modality": "clinical photo",
   "must_identify": [
    "This is an intraoral clinical photograph, not a diagram or radiograph",
    "It shows the lingual surfaces of the lower (mandibular) anterior teeth, viewed from behind/below",
    "There are heavy yellow-brown hard deposits of dental calculus (tartar) coating the lingual aspects of the teeth near the gumline",
    "The deposits are consistent with supragingival (and likely subgingival) calculus accumulation in the lower anterior lingual region, a typical site near the salivary duct openings"
   ],
   "must_avoid": [
    "Calling this a diagram, illustration, or X-ray/radiograph",
    "Describing the teeth as clean/healthy or ignoring the calculus deposits",
    "Mislabeling the calculus as caries, fillings, or fluorosis rather than tartar/calculus stain"
   ],
   "caption": "Intraoral clinical photograph of the lingual surfaces of the mandibular anterior teeth showing heavy yellow-brown supragingival dental calculus (tartar) deposits along the gingival margins.",
   "description": "**1. Type of image:** This is an intraoral clinical photograph, taken from an occlusal/lingual view of the lower (mandibular) anterior and premolar/molar region.\n\n**2. Anatomy and structures visible:** The image shows the lingual (tongue-side) surfaces of the mandibular anterior teeth (incisors and canines) and posterior teeth (premolars/molars) on the right side. The surrounding gingiva (gum tissue), the floor of the mouth, and the lingual mucosa are also visible. The chewing (occlusal) surfaces of the posterior teeth are seen on the right side of the image.\n\n**3. Conditions/clinical findings:** There is substantial accumulation of yellowish-tan calculus (tartar/calcified deposits) along the lingual surfaces and gingival margins of the anterior teeth, with brown extrinsic staining. The gingiva appears somewhat reddened/inflamed in areas adjacent to the deposits, consistent with gingival irritation/gingivitis associated with the heavy calculus. The posterior teeth on the right show staining within the occlusal pits and fissures, which may represent staining or early carious change\u2014though caries cannot be confirmed from this view alone. Overall, the findings indicate poor oral hygiene with moderate-to-heavy supragingival calculus and staining, most pronounced in the lower anterior lingual region."
  },
  {
   "rid": "a077",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/blausen_0864_toothdecay_ar.png",
   "modality": "diagram",
   "must_identify": [
    "This is an illustrated longitudinal cross-section (sagittal section) of a tooth, a molar, set in the jaw bone, not a real photograph or radiograph",
    "It depicts dental caries / tooth decay: a dark brown-black carious lesion eroding the crown from the occlusal (pit-and-fissure) surface and extending inward through enamel and dentin toward the pulp",
    "Internal anatomy is shown and labeled, including enamel, dentin, the pulp chamber with its blood vessels and nerves, the root canal, cementum, the gingiva, and the surrounding alveolar/jaw bone",
    "Text labels are present in Arabic naming the tooth structures"
   ],
   "must_avoid": [
    "Calling this a healthy or normal tooth, or failing to recognize the decay/caries",
    "Describing it as a clinical photograph, X-ray/radiograph, or histology rather than an anatomical illustration",
    "Misidentifying the condition (e.g. calling it an abscess, fracture, restoration/filling, or periodontal disease) instead of caries"
   ],
   "caption": "Labeled anatomical illustration of a longitudinal cross-section through a molar tooth in the jaw, showing dental caries as a dark carious lesion eroding the crown from the occlusal surface inward toward the pulp, with the enamel, dentin, pulp (vessels and nerves), root canal, cementum, gingiva, and alveolar bone identified in Arabic labels.",
   "description": "This is a cross-sectional anatomical illustration of a tooth and its surrounding structures, featuring Arabic labels. Visible anatomy includes the enamel, dentin, pulp chamber and root canals (containing nerves and blood vessels), gingiva (gums), and porous alveolar bone. The image depicts dental caries (decay) in three distinct locations: a severe pit and fissure cavity on the occlusal surface penetrating deep through the enamel and into the dentin, a moderate smooth-surface cavity on the side of the crown, and a root cavity located below the gingival margin."
  },
  {
   "rid": "a078",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/dens_evaginatus.jpg",
   "modality": "diagram",
   "must_identify": [
    "This is a hand-drawn schematic diagram (line sketch), not a clinical photograph or radiograph",
    "Title text 'DENS EVAGINATUS' labels the figure",
    "A single tooth crown is drawn in outline within a circle representing a magnified/close-up view",
    "An accessory cusp / tubercle (small pointed projection) arises from the occlusal-lingual surface of the tooth, the defining feature of dens evaginatus"
   ],
   "must_avoid": [
    "Calling this a radiograph or an intraoral clinical photo",
    "Diagnosing dens invaginatus (dens in dente) or talon cusp as the primary label, or confusing the outward tubercle with an inward invagination",
    "Inventing radiographic detail such as a pulp horn extending into the tubercle, root canals, or periapical findings not visibly drawn"
   ],
   "caption": "Hand-drawn, titled schematic of dens evaginatus, showing a tooth crown with an accessory cusp-like tubercle projecting from its surface within a magnified circular inset.",
   "description": "Based on the provided image, this is a simple line drawing or diagram on paper. The visible anatomy consists of a single-rooted tooth, clearly delineating the crown and the root. The pathology depicted is an abnormal, extra cusp-like projection or tubercle extending from the occlusal or incisal surface of the crown. The printed text directly above the illustration explicitly identifies this developmental anomaly as \"DENS EVAGINATUS\"."
  },
  {
   "rid": "a079",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/root_canal_illustration_molar.png",
   "modality": "diagram",
   "must_identify": [
    "This is a schematic multi-panel (four-stage) illustration/diagram of a molar in cross-section within bone and gingiva, not a photograph",
    "It depicts the sequence of root canal (endodontic) therapy",
    "Stages shown include a decayed/infected tooth with a periapical lesion, access drilling with a handpiece/bur, cleaning/shaping the canals with an endodontic file, and final obturation/filling with placement of a crown",
    "A periapical lesion at the root apex is visible in the earlier panels and resolves in the final restored panel"
   ],
   "must_avoid": [
    "Describing it as a real clinical photograph or radiograph",
    "Calling it a single static healthy-tooth anatomy diagram with no procedure shown",
    "Misidentifying the procedure as an extraction or implant placement"
   ],
   "caption": "Unlabeled four-panel diagram demonstrating the steps of root canal treatment on a molar: an infected tooth with a periapical lesion, access drilling, canal filing with an endodontic file, and final obturation with a crown.",
   "description": "This is a four-panel digital illustrationdepicting the sequential steps of a root canal treatment (endodontic therapy) on a molar tooth. The visible anatomy includes the tooth structure (enamel, dentin, pulp chamber, and root canals), the surrounding gingiva (gums), and alveolar bone.\n\nThe first panel shows significant pathology: a cracked tooth with severe pulp infection or necrosis (indicated by the dark red/brown discoloration in the pulp chamber) and a periapical abscess or lesion (the green/grey mass at the root tip), suggesting apical periodontitis. The subsequent panels illustrate the clinical intervention:\n1.  **Access Preparation:** A dental drill (handpiece) is used to remove the top of the tooth and access the infected pulp.\n2.  **Instrumentation:** An endodontic file (with a blue handle) is used to clean and shape the root canals.\n3.  **Obturation and Restoration:** The final panel shows the root canals filled with a brown material (likely gutta-percha) and the tooth restored with a coronal filling or crown (purple/grey), sealing the tooth. A small grey area at the root apex in the final panel may represent the end of the filling or a root-end seal."
  },
  {
   "rid": "a080",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/temporomandibular_joint_number.png",
   "modality": "diagram",
   "must_identify": [
    "This is an illustrated/schematic anatomy diagram (not a photograph or radiograph) of the temporomandibular joint (TMJ) shown in sagittal/cross-section",
    "It depicts NORMAL TMJ anatomy with the parts marked by numbers (1-13) rather than text labels",
    "Key joint structures are shown: the rounded mandibular condyle (yellow), the temporal bone with the glenoid/mandibular fossa and articular eminence above it, and the biconcave articular disc sitting between them and dividing the upper and lower joint spaces",
    "Surrounding/associated structures are indicated, including the joint capsule and anterior soft tissue (musculature such as the lateral pterygoid and/or vascular structures, shown in red)"
   ],
   "must_avoid": [
    "Calling this a radiograph/CT/MRI or a real clinical photograph rather than an illustrated diagram",
    "Describing it as a diseased or pathological joint (e.g., disc displacement, osteoarthritis, ankylosis) when it depicts normal anatomy",
    "Misidentifying the joint as something other than the TMJ (e.g., a generic synovial limb joint or a dental/tooth diagram)"
   ],
   "caption": "A numbered schematic sagittal-section diagram of normal temporomandibular joint anatomy, showing the mandibular condyle, the temporal bone glenoid fossa and articular eminence, the interposed biconcave articular disc dividing the upper and lower joint compartments, the joint capsule, and adjacent soft tissue/musculature, with structures identified by numbers rather than text labels.",
   "description": "This is a schematic sagittal illustration of the temporomandibular joint (TMJ). It shows the mandibular condyle articulating with the temporal bone/glenoid fossa and articular eminence, with an interposed articular disc dividing the joint into superior and inferior compartments. Surrounding structures include the joint capsule/ligamentous tissues and adjacent muscle bands, likely masticatory muscles. No pathology is depicted; this appears to be a normal anatomic diagram rather than a clinical disease image."
  },
  {
   "rid": "a081",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/nih_doc_16_homogenousleukoplakia.jpg",
   "modality": "clinical photo",
   "must_identify": [
    "This is an intraoral clinical photograph of the floor of the mouth / ventral oral mucosa with the lower teeth visible at the bottom",
    "A well-demarcated, flat, uniformly white plaque is present on the mucosa",
    "The lesion is consistent with homogeneous oral leukoplakia, a potentially malignant white patch that does not rub off"
   ],
   "must_avoid": [
    "Describing the mucosa as normal/healthy with no lesion",
    "Calling it a diagram, illustration, or radiograph instead of a clinical photograph",
    "Diagnosing it as an ulcer, candidiasis (wipe-off white plaque), or food debris"
   ],
   "caption": "Intraoral clinical photograph showing a well-defined homogeneous white plaque on the floor-of-mouth/ventral mucosa, consistent with homogeneous oral leukoplakia.",
   "description": "Clinical intraoral photograph showing the anterior floor of mouth/ventral tongue region with lower anterior teeth visible. The mucosa is erythematous and moist, with a well-demarcated, irregular white plaque on the ventral tongue/floor-of-mouth mucosa. The lesion appears keratotic/corrugated without obvious ulceration or bleeding, consistent visually with a localized leukoplakic-type white lesion of moderate size."
  },
  {
   "rid": "a082",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/perio_mild.png",
   "modality": "diagram",
   "must_identify": [
    "a tooth shown in a periodontal cross-section / schematic (not a real photo or x-ray)",
    "gingiva (gum) margin",
    "alveolar bone level",
    "periodontal ligament",
    "a periodontal pocket or pocket-depth measurement"
   ],
   "must_avoid": [
    "describing it as severe or advanced periodontitis",
    "describing the periodontium as completely healthy with no disease"
   ],
   "caption": "Line diagram of a tooth showing the gingiva, bone, periodontal ligament with a scale showing the pocket depth of mild periodontitis.",
   "description": "This is a schematic diagram illustrating a single-rooted tooth and its surrounding periodontal structures, including the crown, root, alveolar bone (brown outline), periodontal ligament (red hatching), and gingiva (red outline). The image depicts severe gingival enlargement (hyperplasia) on the right side, shown by the swollen, stippled red area extending coronally over the enamel. A gray shaded block on the cervical portion of the crown suggests plaque or calculus accumulation. A measurement scale (black dots) indicates a deep probing depth; however, because the base of the pocket remains near the cementoenamel junction and there is no apparent alveolar bone loss compared to the contralateral side, this illustrates a gingival pocket (pseudopocket) rather than true periodontal attachment loss."
  },
  {
   "rid": "a083",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/dental_caries_cavity_2_cropped.jpg",
   "modality": "clinical photo",
   "must_identify": [
    "This is an intraoral clinical photograph of maxillary (upper) teeth and gingiva",
    "One tooth shows extensive (advanced) dental caries with a large, dark/blackened cavitated lesion and gross breakdown of the crown",
    "The carious cavity exposes deeper tooth structure (dentin/pulp chamber level destruction), not just superficial enamel",
    "Adjacent teeth and the surrounding pink gingiva are comparatively intact/less affected"
   ],
   "must_avoid": [
    "Calling the destroyed/carious tooth healthy or normal",
    "Identifying the image as a radiograph/X-ray or an illustration/diagram instead of a clinical photo",
    "Misreading the dark cavitation as merely surface staining, a filling, or a normal pit/fissure rather than a destructive carious lesion"
   ],
   "caption": "Intraoral clinical photograph of the maxillary arch showing a single tooth with advanced dental caries, a large dark cavitated lesion and gross crown destruction, while the neighboring teeth and pink gingiva appear comparatively intact.",
   "description": "Clinical intraoral photograph of the anterior maxillary region with the lip retracted. Visible structures include the labial gingiva/mucosa and several anterior tooth crowns. One anterior tooth shows a large, dark, cavitated carious lesion at the cervical/proximal crown area with substantial loss of tooth structure and undermined enamel, consistent with severe dental caries. The adjacent gingiva appears mildly erythematous; no radiographic bone findings are visible."
  },
  {
   "rid": "a084",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/amalgam.jpg",
   "modality": "clinical photo",
   "must_identify": [
    "This is a close-up photograph of a single (extracted/isolated) molar tooth viewed from the occlusal/biting surface",
    "A silver-grey metallic (dental amalgam) restoration/filling is present in the occlusal surface of the tooth",
    "The surrounding tooth structure is the white/cream natural crown with the metallic filling set into it"
   ],
   "must_avoid": [
    "Describing the metallic restoration as a cavity/caries or as decay",
    "Calling the silver filling a tooth-coloured composite, gold, or a crown",
    "Describing this as a diagram or radiograph rather than a photograph of a tooth"
   ],
   "caption": "Close-up photograph of a single molar tooth with a silver-grey dental amalgam restoration in its occlusal surface.",
   "description": "1. Type: Clinical photograph of a tooth.  \n2. Anatomy/structures: Tooth crown (enamel) with a large, metallic dental restoration (filling).  \n3. Condition: Tooth with a large restoration, likely for a previously treated carious lesion (cavity); the filling appears intact, with no visible fractures or recurrent decay."
  },
  {
   "rid": "a085",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/dens_evaginatus.jpg",
   "modality": "diagram",
   "must_identify": [
    "This is a hand-drawn schematic diagram (line sketch), not a clinical photograph or radiograph",
    "Title text 'DENS EVAGINATUS' labels the figure",
    "A single tooth crown is drawn in outline within a circle representing a magnified/close-up view",
    "An accessory cusp / tubercle (small pointed projection) arises from the occlusal-lingual surface of the tooth, the defining feature of dens evaginatus"
   ],
   "must_avoid": [
    "Calling this a radiograph or an intraoral clinical photo",
    "Diagnosing dens invaginatus (dens in dente) or talon cusp as the primary label, or confusing the outward tubercle with an inward invagination",
    "Inventing radiographic detail such as a pulp horn extending into the tubercle, root canals, or periapical findings not visibly drawn"
   ],
   "caption": "Hand-drawn, titled schematic of dens evaginatus, showing a tooth crown with an accessory cusp-like tubercle projecting from its surface within a magnified circular inset.",
   "description": "This is a simple dental diagram/illustration labeled \u201cDens Evaginatus.\u201d It shows a schematic single tooth with a crown and root, with an extra cusp-like projection arising from the crown/occlusal area. The depicted finding is dens evaginatus, an accessory enamel-covered cusp/tubercle; no additional pathology, caries, fracture, or severity details are visible in the image."
  },
  {
   "rid": "a086",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/nih_doc_16_homogenousleukoplakia.jpg",
   "modality": "clinical photo",
   "must_identify": [
    "This is an intraoral clinical photograph of the floor of the mouth / ventral oral mucosa with the lower teeth visible at the bottom",
    "A well-demarcated, flat, uniformly white plaque is present on the mucosa",
    "The lesion is consistent with homogeneous oral leukoplakia, a potentially malignant white patch that does not rub off"
   ],
   "must_avoid": [
    "Describing the mucosa as normal/healthy with no lesion",
    "Calling it a diagram, illustration, or radiograph instead of a clinical photograph",
    "Diagnosing it as an ulcer, candidiasis (wipe-off white plaque), or food debris"
   ],
   "caption": "Intraoral clinical photograph showing a well-defined homogeneous white plaque on the floor-of-mouth/ventral mucosa, consistent with homogeneous oral leukoplakia.",
   "description": "**1. Type of image:** This is an intraoral clinical photograph.\n\n**2. Anatomy and structures visible:** The image shows the floor of the mouth and the lingual/ventral mucosa region. The lower anterior teeth (incisors and canines) are visible along the bottom of the frame, with the lingual surfaces and gingiva above them. The surrounding oral mucosa appears moist, red, and well-vascularized.\n\n**3. Condition/clinical finding:** There is a well-demarcated, raised, whitish/grey plaque-like lesion on the mucosa with a slightly irregular, corrugated or wrinkled surface. The lesion is solitary, with relatively defined borders, and does not appear ulcerated. This appearance is consistent with a white mucosal lesion (such as leukoplakia or a hyperkeratotic patch). The surrounding tissue appears erythematous but intact. Based only on what is visible, this represents a localized white plaque; its size is moderate and the surface texture shows some irregularity. I cannot determine its histologic nature or malignant potential from the image alone\u2014biopsy would be required for a definitive diagnosis."
  },
  {
   "rid": "a087",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/smoothsurfacecaries03.png",
   "modality": "diagram",
   "must_identify": [
    "This is a simple hand-drawn line sketch of a tooth in cross-section, not a photograph",
    "It carries text labels reading 'enamel', 'dentin', and 'pulp' identifying the tooth layers",
    "A black triangular/wedge-shaped carious lesion on the outer enamel surface is shown, larger than in the earlier sketch of the series",
    "The lesion has progressed deeper through the enamel toward/reaching the dentino-enamel junction"
   ],
   "must_avoid": [
    "Do not call it a photograph or radiograph",
    "Do not describe the tooth as healthy/intact with no caries",
    "Do not overstate the lesion as extending into the pulp/causing pulpal exposure at this stage"
   ],
   "caption": "Hand-drawn cross-sectional sketch of a tooth labelled enamel, dentin, and pulp, showing a black wedge of smooth-surface caries that has progressed through the enamel toward the dentino-enamel junction.",
   "description": "This is a simple schematic diagram of a tooth in cross-section. It shows the outer enamel layer, underlying dentin, and central pulp chamber/root canal space, with labels for enamel, dentin, and pulp. A dark wedge-shaped defect is shown on the right side of the crown, extending from the outer surface through enamel into dentin; it does not appear to reach the pulp, suggesting a moderate dentinal lesion/defect without visible pulpal involvement."
  },
  {
   "rid": "a088",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/line_diagram_of_gingivitis.png",
   "modality": "diagram",
   "must_identify": [
    "This is a schematic line diagram (illustration) of a single tooth in cross-section within its supporting tissues, not a clinical photograph or radiograph",
    "Periodontal anatomy is color-coded: the tooth (crown and single tapering root), the gingiva outlined in red, the alveolar bone outlined in brown/gold, and the periodontal ligament shown as red diagonal hatching between root and bone",
    "The diagram depicts gingival inflammation (gingivitis): the gingival margin, especially on the right, is drawn swollen, bulbous and stippled/filled red to show edematous, inflamed marginal tissue",
    "Crucially there is NO alveolar bone loss and NO loss of clinical attachment: the bone crest remains at a coronal/near-CEJ level and any pocket/probing depth shown by the dotted measuring scale is a shallow gingival (false/pseudo) pocket, consistent with gingivitis rather than periodontitis",
    "A dotted vertical measuring scale on the right indicates probing/pocket depth of the marginal gingiva"
   ],
   "must_avoid": [
    "Calling it a clinical photograph or a radiograph/X-ray rather than a line diagram",
    "Diagnosing periodontitis or describing alveolar bone loss / loss of attachment, which are absent here",
    "Describing the tissue as healthy gingiva and ignoring the inflamed, swollen red marginal gingiva"
   ],
   "caption": "Schematic color-coded line diagram of a single tooth and its periodontium (red gingiva, gold alveolar bone, hatched periodontal ligament) depicting gingivitis, with a swollen, inflamed red gingival margin and a shallow gingival pocket shown on a measuring scale, but no bone loss or loss of attachment.",
   "description": "This image is a schematic diagram of a single-rooted tooth and its surrounding periodontium. Visible structures include the tooth crown and root, alveolar bone (brown outline), periodontal ligament (red hatching), and gingiva (red outline). The primary clinical finding depicted on the right side is a pseudopocket (gingival pocket) resulting from gingival enlargement. The gingival margin is positioned significantly coronal to the cementoenamel junction (CEJ), covering a portion of the anatomical crown (highlighted by the red shaded area), while the alveolar bone level and attachment remain normally positioned at the CEJ. A measurement scale with five dots illustrates the depth of this false pocket, indicating a notable degree of tissue overgrowth without underlying periodontal attachment loss."
  },
  {
   "rid": "a089",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/mandibularanteriorcalculus.jpg",
   "modality": "clinical photo",
   "must_identify": [
    "This is an intraoral clinical photograph, not a diagram or radiograph",
    "It shows the lingual surfaces of the lower (mandibular) anterior teeth, viewed from behind/below",
    "There are heavy yellow-brown hard deposits of dental calculus (tartar) coating the lingual aspects of the teeth near the gumline",
    "The deposits are consistent with supragingival (and likely subgingival) calculus accumulation in the lower anterior lingual region, a typical site near the salivary duct openings"
   ],
   "must_avoid": [
    "Calling this a diagram, illustration, or X-ray/radiograph",
    "Describing the teeth as clean/healthy or ignoring the calculus deposits",
    "Mislabeling the calculus as caries, fillings, or fluorosis rather than tartar/calculus stain"
   ],
   "caption": "Intraoral clinical photograph of the lingual surfaces of the mandibular anterior teeth showing heavy yellow-brown supragingival dental calculus (tartar) deposits along the gingival margins.",
   "description": "Clinical intraoral photograph of the mandibular arch viewed from the lingual side. The lower incisors, canines, premolars, lingual gingiva, and floor-of-mouth mucosa are visible. There are heavy yellow-brown deposits on the lingual surfaces and cervical areas of the mandibular anterior teeth, consistent with marked plaque/calculus accumulation with extrinsic staining. Mild gingival redness/recession is visible around some anterior teeth; no obvious cavitated caries or acute lesion is clearly seen in this view."
  },
  {
   "rid": "a090",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/perio_severe.png",
   "modality": "diagram",
   "must_identify": [
    "a tooth shown in a periodontal cross-section / schematic (not a real photo or x-ray)",
    "gingiva (gum) margin",
    "alveolar bone level",
    "periodontal ligament",
    "a deep periodontal pocket / significant pocket-depth or attachment loss"
   ],
   "must_avoid": [
    "describing it as mild or early periodontitis",
    "describing the periodontium as completely healthy with no disease"
   ],
   "caption": "Line diagram of a tooth showing the gingiva, bone, periodontal ligament with a scale showing the pocket depth of severe periodontitis.",
   "description": "The image is a diagram illustrating the anatomy of a tooth and its surrounding tissues. The visible structures include the tooth, periodontal ligament, alveolar bone, and gingiva. The diagram highlights a significant loss of alveolar bone on the distal aspect of the tooth, indicating periodontal disease or bone loss due to other factors. The severity of the bone loss is substantial, with the bone level significantly apical to the normal level, suggesting advanced disease."
  },
  {
   "rid": "a091",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/single_crown_implant.jpg",
   "modality": "clinical photo",
   "must_identify": [
    "This is a photograph of an assembled single-tooth dental implant restoration shown out of the mouth against a blue background",
    "Three components are present and text-labeled: the threaded titanium IMPLANT fixture, the metal ABUTMENT (middle connector), and the tooth-colored ceramic CROWN",
    "It demonstrates how the crown attaches to the abutment which connects to the implant fixture"
   ],
   "must_avoid": [
    "Calling it an in-situ intraoral photo or an X-ray rather than a benchtop photo of the components",
    "Misidentifying the parts (e.g. confusing the abutment with the implant or the crown)",
    "Describing it as a natural tooth"
   ],
   "caption": "Photograph of a single-unit dental implant assembly labeled IMPLANT, ABUTMENT, and CROWN, showing the threaded fixture, the connecting abutment, and the ceramic crown.",
   "description": "1. Type of image: Clinical photograph of a dental implant restoration component.  \n2. Anatomy and structures visible: A threaded dental implant (labeled \"IMPLANT\"), an abutment (labeled \"ABUTMENT\") connecting the implant to the crown, and a dental crown (labeled \"CROWN\") with a tooth - shaped, glossy surface.  \n3. Condition, pathology, or clinical finding: No pathology or disease is depicted. The image shows the assembled components of a dental implant restoration (implant, abutment, crown), likely for clinical or educational demonstration. No severity assessment is applicable as no disease is present."
  },
  {
   "rid": "a092",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/root_canal_illustration_molar.png",
   "modality": "diagram",
   "must_identify": [
    "This is a schematic multi-panel (four-stage) illustration/diagram of a molar in cross-section within bone and gingiva, not a photograph",
    "It depicts the sequence of root canal (endodontic) therapy",
    "Stages shown include a decayed/infected tooth with a periapical lesion, access drilling with a handpiece/bur, cleaning/shaping the canals with an endodontic file, and final obturation/filling with placement of a crown",
    "A periapical lesion at the root apex is visible in the earlier panels and resolves in the final restored panel"
   ],
   "must_avoid": [
    "Describing it as a real clinical photograph or radiograph",
    "Calling it a single static healthy-tooth anatomy diagram with no procedure shown",
    "Misidentifying the procedure as an extraction or implant placement"
   ],
   "caption": "Unlabeled four-panel diagram demonstrating the steps of root canal treatment on a molar: an infected tooth with a periapical lesion, access drilling, canal filing with an endodontic file, and final obturation with a crown.",
   "description": "This is a schematic dental illustration showing stages of root canal treatment on a molar in cross-section. Visible structures include the enamel/crown, dentin, pulp chamber and root canals, gingiva, surrounding alveolar bone, and root apices. The sequence depicts a damaged/caries-affected tooth with inflamed or infected pulp and a periapical lesion/abscess at the root tip, followed by access drilling, canal cleaning/shaping with an endodontic file, and final canal filling/restoration with a crown. The disease shown appears advanced because the infection extends through the root canal to the periapical tissues."
  },
  {
   "rid": "a093",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/tooth_2_psf.png",
   "modality": "diagram",
   "must_identify": [
    "This is a black-and-white line-drawing (schematic) of a tooth shown in two sectional views",
    "View 1 (left) is a longitudinal/vertical section of a multi-rooted tooth showing distinct concentric layers and the internal cavity",
    "View 2 (right) is a transverse/cross section of the tooth showing the layered structure around a central cavity with two openings",
    "The drawing carries letter labels (A, B, C, D) pointing to the different tooth layers and the pulp cavity, but does not spell out the structure names in words"
   ],
   "must_avoid": [
    "Calling this a photograph or radiograph",
    "Claiming the image names structures in words (the labels are letters A-D only)",
    "Inventing a specific disease/diagnosis; this is normal sectional anatomy"
   ],
   "caption": "Black-and-white line diagram of a tooth in longitudinal section (1) and transverse section (2), with letter labels A-D marking the concentric tooth layers and the central pulp cavity.",
   "description": "This is a black-and-white anatomical line drawing depicting two cross-sectional views of a multi-rooted tooth (view 1 is longitudinal, view 2 is transverse). The diagram uses letters to label the primary structural layers of the tooth: \"A\" points to the enamel (the striated outer layer of the crown), \"B\" indicates the pulp cavity (the central chamber and canals), \"C\" points to the cementum (the stippled outer layer of the roots), and \"D\" represents the dentin (the bulk middle layer with radiating lines). The image illustrates normal, healthy dental anatomy with intact, uniform layers and no visible pathology, disease, or structural defects."
  },
  {
   "rid": "a094",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/full_implant_restoration.gif",
   "modality": "diagram",
   "must_identify": [
    "This is an illustration/schematic (not a clinical photo or radiograph) of a partially edentulous posterior arch",
    "It shows multiple dental implants placed in the alveolar bone/gingiva in an edentulous span, with abutments protruding above the gum",
    "A multi-unit fixed prosthesis (a bridge of several crowns) is depicted being seated onto the implant abutments to restore the missing teeth",
    "Natural teeth remain adjacent to the implant-supported restoration"
   ],
   "must_avoid": [
    "Describing it as a real photograph or radiograph",
    "Calling it a single-tooth implant or a removable denture rather than an implant-supported multi-unit fixed restoration",
    "Mistaking the implants/abutments for natural tooth roots"
   ],
   "caption": "Illustration of an implant-supported fixed restoration in a partially edentulous posterior arch, with several implants and abutments in the bone receiving a multi-unit bridge of crowns alongside remaining natural teeth.",
   "description": "Basedon the image provided:\n\n1.  **Type of image:** This is a digital medical illustration or 3D diagram, likely used for educational purposes or patient consultation.\n2.  **Anatomy and structures:** The image displays a section of the lower dental arch (mandible) with pink gum tissue and remaining white teeth. Visible structures include three dental implant posts embedded in the anterior gum, each topped with an abutment (connector)\u2014one is grey/metallic and two are green. A separate four-tooth dental bridge (prosthesis) is shown floating above the implants. There is also another green-topped abutment visible on a structure in the lower right posterior area.\n3.  **Condition/Pathology/Clinical finding:** The image illustrates a restorative dental treatment plan, specifically an implant-supported fixed bridge. It demonstrates the \"exploded view\" of the components before assembly: the implants acting as roots, the abutments acting as connectors, and the bridge that will be seated on top to replace missing anterior teeth (partial edentulism). The green components likely represent specific abutment types or temporary healing caps in this schematic. There is no active disease shown, but rather a solution for tooth loss."
  },
  {
   "rid": "a095",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/non_carious_cervical_lesion.jpg",
   "modality": "clinical photo",
   "must_identify": [
    "Intraoral clinical photograph: lateral (buccal) view of the dentition in occlusion/maximum intercuspation, with the cheek retracted",
    "Permanent dentition with maxillary and mandibular teeth in contact; canine and premolar/molar region visible in lateral profile",
    "Cervical-region findings near the gingival margins (color change/possible cervical wear or recession) consistent with a non-carious cervical lesion case",
    "Incisal/occlusal wear with flattened edges and a small interdental gap, suggesting attrition and tooth-surface loss"
   ],
   "must_avoid": [
    "Calling this a radiograph or X-ray (it is a color clinical photo)",
    "Diagnosing frank cervical caries or a cavity when the cervical change is non-carious/wear-related and not clearly carious",
    "Asserting a definitive abfraction vs erosion vs abrasion etiology that cannot be confirmed from a single lateral photo"
   ],
   "caption": "Lateral intraoral clinical photograph of the dentition in occlusion (cheek retracted) showing cervical-region changes and incisal/occlusal wear consistent with a non-carious cervical lesion presentation.",
   "description": "This is an intraoral clinical photograph showing a right lateral view of the dentition in maximum intercuspation. Visible structures include the maxillary and mandibular teeth (from central incisors to molars), the surrounding gingiva, buccal mucosa, and a clear plastic cheek retractor. The most prominent clinical finding is diffuse, pronounced dark brown-to-black hyperpigmentation of the attached gingiva in both the maxillary and mandibular arches. Additionally, there is visible incisal wear (attrition) on the anterior teeth, mild generalized yellowing of the dentition (more pronounced in the posterior teeth), and slight localized gingival recession on the mandibular premolars."
  },
  {
   "rid": "a096",
   "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@9fa75760c9e606049e100ae903994fcd483bbf85/data/images/temporomandibular_joint_number.png",
   "modality": "diagram",
   "must_identify": [
    "This is an illustrated/schematic anatomy diagram (not a photograph or radiograph) of the temporomandibular joint (TMJ) shown in sagittal/cross-section",
    "It depicts NORMAL TMJ anatomy with the parts marked by numbers (1-13) rather than text labels",
    "Key joint structures are shown: the rounded mandibular condyle (yellow), the temporal bone with the glenoid/mandibular fossa and articular eminence above it, and the biconcave articular disc sitting between them and dividing the upper and lower joint spaces",
    "Surrounding/associated structures are indicated, including the joint capsule and anterior soft tissue (musculature such as the lateral pterygoid and/or vascular structures, shown in red)"
   ],
   "must_avoid": [
    "Calling this a radiograph/CT/MRI or a real clinical photograph rather than an illustrated diagram",
    "Describing it as a diseased or pathological joint (e.g., disc displacement, osteoarthritis, ankylosis) when it depicts normal anatomy",
    "Misidentifying the joint as something other than the TMJ (e.g., a generic synovial limb joint or a dental/tooth diagram)"
   ],
   "caption": "A numbered schematic sagittal-section diagram of normal temporomandibular joint anatomy, showing the mandibular condyle, the temporal bone glenoid fossa and articular eminence, the interposed biconcave articular disc dividing the upper and lower joint compartments, the joint capsule, and adjacent soft tissue/musculature, with structures identified by numbers rather than text labels.",
   "description": "The image is a diagram illustrating the anatomy of a temporomandibular joint (TMJ). The visible structures include the mandibular condyle (9), articular disc (8), and surrounding tissues such as the superior (3) and inferior (4) joint spaces, as well as various ligaments and muscles (1, 2). No condition, pathology, or clinical finding is depicted in this image; it appears to be a normal anatomical representation."
  }
 ]
};
