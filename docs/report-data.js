window.REPORT_DATA = {
  "meta": {
    "data_commit": "a1640d57c0205c9abdbf7cda8e9eed57ad2cb245",
    "run_date": "2026-06-15",
    "gateway": "OpenRouter",
    "temperature": 0,
    "image_transport": "inline base64 data URI"
  },
  "overall": {
    "models": 6,
    "images": 90,
    "judges": 2,
    "judge_verdicts": 1092,
    "agreement_pct": 82.2,
    "kappa": 0.649,
    "top_score": 72.2,
    "top_model": "Gemini 3.1 Pro"
  },
  "models": [
    {
      "model": "Gemini 3.1 Pro",
      "model_id": "google/gemini-3.1-pro-preview",
      "provider": "Google",
      "logo": "assets/logos/gemini.png",
      "color": "#3B82C4",
      "accuracy": 72.2,
      "correct": 65,
      "total": 90,
      "ci_low": 62.2,
      "ci_high": 80.4,
      "secondary_accuracy": 50.0,
      "modality_acc": 98.9,
      "latency": 13.1,
      "diagram": {
        "acc": 71.2,
        "correct": 37,
        "total": 52
      },
      "photo": {
        "acc": 73.7,
        "correct": 28,
        "total": 38
      },
      "labeled": {
        "acc": 75.6,
        "correct": 31,
        "total": 41
      },
      "unlabeled": {
        "acc": 69.4,
        "correct": 34,
        "total": 49
      },
      "control": {
        "original": true,
        "transformed": true
      }
    },
    {
      "model": "Claude Opus 4.8",
      "model_id": "anthropic/claude-opus-4.8",
      "provider": "Anthropic",
      "logo": "assets/logos/anthropic.png",
      "color": "#C9743A",
      "accuracy": 63.3,
      "correct": 57,
      "total": 90,
      "ci_low": 53.0,
      "ci_high": 72.6,
      "secondary_accuracy": 55.6,
      "modality_acc": 98.9,
      "latency": 9.7,
      "diagram": {
        "acc": 69.2,
        "correct": 36,
        "total": 52
      },
      "photo": {
        "acc": 55.3,
        "correct": 21,
        "total": 38
      },
      "labeled": {
        "acc": 75.6,
        "correct": 31,
        "total": 41
      },
      "unlabeled": {
        "acc": 53.1,
        "correct": 26,
        "total": 49
      },
      "control": {
        "original": true,
        "transformed": true
      }
    },
    {
      "model": "Qwen3.7 Plus",
      "model_id": "qwen/qwen3.7-plus",
      "provider": "Alibaba",
      "logo": "assets/logos/qwen.png",
      "color": "#6D5BD0",
      "accuracy": 61.1,
      "correct": 55,
      "total": 90,
      "ci_low": 50.8,
      "ci_high": 70.5,
      "secondary_accuracy": 46.7,
      "modality_acc": 98.9,
      "latency": 50.6,
      "diagram": {
        "acc": 67.3,
        "correct": 35,
        "total": 52
      },
      "photo": {
        "acc": 52.6,
        "correct": 20,
        "total": 38
      },
      "labeled": {
        "acc": 70.7,
        "correct": 29,
        "total": 41
      },
      "unlabeled": {
        "acc": 53.1,
        "correct": 26,
        "total": 49
      },
      "control": {
        "original": true,
        "transformed": true
      }
    },
    {
      "model": "GPT-5.5",
      "model_id": "openai/gpt-5.5",
      "provider": "OpenAI",
      "logo": "assets/logos/openai.png",
      "color": "#2E9E96",
      "accuracy": 55.6,
      "correct": 50,
      "total": 90,
      "ci_low": 45.3,
      "ci_high": 65.4,
      "secondary_accuracy": 35.6,
      "modality_acc": 98.9,
      "latency": 11.2,
      "diagram": {
        "acc": 63.5,
        "correct": 33,
        "total": 52
      },
      "photo": {
        "acc": 44.7,
        "correct": 17,
        "total": 38
      },
      "labeled": {
        "acc": 68.3,
        "correct": 28,
        "total": 41
      },
      "unlabeled": {
        "acc": 44.9,
        "correct": 22,
        "total": 49
      },
      "control": {
        "original": true,
        "transformed": true
      }
    },
    {
      "model": "GLM-4.6V",
      "model_id": "z-ai/glm-4.6v",
      "provider": "Zhipu AI",
      "logo": "assets/logos/glm.svg",
      "color": "#B07A3C",
      "accuracy": 34.4,
      "correct": 31,
      "total": 90,
      "ci_low": 25.4,
      "ci_high": 44.7,
      "secondary_accuracy": 15.6,
      "modality_acc": 98.9,
      "latency": 9.6,
      "diagram": {
        "acc": 38.5,
        "correct": 20,
        "total": 52
      },
      "photo": {
        "acc": 28.9,
        "correct": 11,
        "total": 38
      },
      "labeled": {
        "acc": 41.5,
        "correct": 17,
        "total": 41
      },
      "unlabeled": {
        "acc": 28.6,
        "correct": 14,
        "total": 49
      },
      "control": {
        "original": true,
        "transformed": true
      }
    },
    {
      "model": "Llama 4 Maverick",
      "model_id": "meta-llama/llama-4-maverick",
      "provider": "Meta",
      "logo": "assets/logos/meta.png",
      "color": "#4A6FA5",
      "accuracy": 27.8,
      "correct": 25,
      "total": 90,
      "ci_low": 19.6,
      "ci_high": 37.8,
      "secondary_accuracy": 11.1,
      "modality_acc": 98.9,
      "latency": 4.0,
      "diagram": {
        "acc": 32.7,
        "correct": 17,
        "total": 52
      },
      "photo": {
        "acc": 21.1,
        "correct": 8,
        "total": 38
      },
      "labeled": {
        "acc": 26.8,
        "correct": 11,
        "total": 41
      },
      "unlabeled": {
        "acc": 28.6,
        "correct": 14,
        "total": 49
      },
      "control": {
        "original": true,
        "transformed": true
      }
    }
  ],
  "splits": [
    {
      "id": "diagram",
      "label": "Diagrams"
    },
    {
      "id": "photo",
      "label": "Clinical photos"
    },
    {
      "id": "labeled",
      "label": "Labeled"
    },
    {
      "id": "unlabeled",
      "label": "Unlabeled"
    }
  ],
  "judge_agreement": {
    "agreement_pct": 82.2,
    "kappa": 0.649,
    "per_model": [
      {
        "model": "Gemini 3.1 Pro",
        "primary": 72.2,
        "secondary": 50.0,
        "delta": 22.2
      },
      {
        "model": "Claude Opus 4.8",
        "primary": 63.3,
        "secondary": 55.6,
        "delta": 7.7
      },
      {
        "model": "Qwen3.7 Plus",
        "primary": 61.1,
        "secondary": 46.7,
        "delta": 14.4
      },
      {
        "model": "GPT-5.5",
        "primary": 55.6,
        "secondary": 35.6,
        "delta": 20.0
      },
      {
        "model": "GLM-4.6V",
        "primary": 34.4,
        "secondary": 15.6,
        "delta": 18.8
      },
      {
        "model": "Llama 4 Maverick",
        "primary": 27.8,
        "secondary": 11.1,
        "delta": 16.7
      }
    ]
  },
  "images": [
    {
      "id": "access_toothbrush_for_use_with_mini_dental",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/access_toothbrush_for_use_with_mini_dental.jpg",
      "modality": "diagram",
      "labeled": false,
      "must_identify_n": 3,
      "caption": "Stylized product illustration of a specialty toothbrush whose cupped bristles encircle the ball abutment of a mini dental implant to clean around the attachment.",
      "correct": 0,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": false
        },
        {
          "model": "Claude Opus 4.8",
          "correct": false
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "acute_necrotising_ulcerative_gingivitis",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/acute_necrotising_ulcerative_gingivitis.jpg",
      "modality": "clinical_photo",
      "labeled": false,
      "must_identify_n": 4,
      "caption": "Intraoral clinical photograph of the retracted lower lip showing the mandibular anterior gingiva with ulcerated, blunted interdental papillae, marginal erythema and a greyish pseudomembrane, consistent with necrotising ulcerative gingivitis (ANUG).",
      "correct": 0,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": false
        },
        {
          "model": "Claude Opus 4.8",
          "correct": false
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "alveolprog",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/alveolprog.jpg",
      "modality": "clinical_photo",
      "labeled": false,
      "must_identify_n": 4,
      "caption": "Lateral intraoral clinical photograph of a developing dentition showing an anterior open bite with proclined, protrusive upper incisors (dentoalveolar protrusion/alveolar prognathism), the classic occlusal pattern of a thumb-sucking and tongue-thrust habit.",
      "correct": 0,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": false
        },
        {
          "model": "Claude Opus 4.8",
          "correct": false
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "erosive_lichen_planus",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/erosive_lichen_planus.jpg",
      "modality": "clinical_photo",
      "labeled": false,
      "must_identify_n": 4,
      "caption": "Intraoral clinical photograph of the maxillary hard palate showing a central erythematous, atrophic/erosive mucosal area surrounded by white reticular striae and keratotic patches, consistent with erosive (atrophic) oral lichen planus.",
      "correct": 0,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": false
        },
        {
          "model": "Claude Opus 4.8",
          "correct": false
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "herpes_blisters_on_lips_in_a_47_year_old_w",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/herpes_blisters_on_lips_in_a_47_year_old_w.jpg",
      "modality": "diagram",
      "labeled": false,
      "must_identify_n": 3,
      "caption": "Watercolour illustration of the lips showing a cluster of small blisters and crusted erosions at the vermilion border and perioral skin, consistent with herpes labialis (a cold sore from recurrent herpes simplex infection).",
      "correct": 0,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": false
        },
        {
          "model": "Claude Opus 4.8",
          "correct": false
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "hyperdontia_genetically_inherited_developm",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/hyperdontia_genetically_inherited_developm.jpg",
      "modality": "clinical_photo",
      "labeled": false,
      "must_identify_n": 4,
      "caption": "Intraoral clinical photograph showing hyperdontia, with supernumerary anterior teeth producing severe crowding and ectopic eruption in both the upper and lower arches.",
      "correct": 0,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": false
        },
        {
          "model": "Claude Opus 4.8",
          "correct": false
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "leukoplakia",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/leukoplakia.jpg",
      "modality": "clinical_photo",
      "labeled": false,
      "must_identify_n": 3,
      "caption": "Intraoral clinical photograph of the lower anterior teeth and floor of the mouth showing a diffuse whitish keratotic mucosal lesion consistent with oral leukoplakia.",
      "correct": 0,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": false
        },
        {
          "model": "Claude Opus 4.8",
          "correct": false
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "nankali_post_a_fractured_tooth",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/nankali_post_a_fractured_tooth.jpg",
      "modality": "diagram",
      "labeled": false,
      "must_identify_n": 4,
      "caption": "Schematic longitudinal cross-section of a tooth with a horizontal (transverse) root fracture, in which a threaded intracanal post is placed through the root canal across the fracture line to retain the coronal fragment and support a core build-up.",
      "correct": 0,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": false
        },
        {
          "model": "Claude Opus 4.8",
          "correct": false
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "new_nanocomposites_may_mean_more_durable_t",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/new_nanocomposites_may_mean_more_durable_t.jpg",
      "modality": "clinical_photo",
      "labeled": true,
      "must_identify_n": 4,
      "caption": "Annotated macro photograph of an extracted human molar viewed from the occlusal surface against a dark background, with a white arrow marking a central occlusal site, consistent with a laboratory/research specimen figure.",
      "correct": 0,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": false
        },
        {
          "model": "Claude Opus 4.8",
          "correct": false
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "packable_composite_placed_in_a_lower_right",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/packable_composite_placed_in_a_lower_right.jpg",
      "modality": "clinical_photo",
      "labeled": false,
      "must_identify_n": 4,
      "caption": "Intraoral macro clinical photographs (three-panel collage) of mandibular posterior molars showing a tooth-colored (composite) class I occlusal restoration blending with the enamel, alongside stained occlusal pits and fissures, with a mouth mirror and probe tip visible.",
      "correct": 0,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": false
        },
        {
          "model": "Claude Opus 4.8",
          "correct": false
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "pulp_cap",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/pulp_cap.png",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 5,
      "caption": "Labeled cross-sectional diagram of a tooth showing a direct pulp cap, where a small protective/sedative capping material (4) is placed over an exposed pulp horn beneath a coronal restoration (3), with the crown (1), root in alveolar bone (2), and pulp/neurovascular tissue (5) indicated.",
      "correct": 0,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": false
        },
        {
          "model": "Claude Opus 4.8",
          "correct": false
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "runningroom",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/runningroom.png",
      "modality": "clinical_photo",
      "labeled": false,
      "must_identify_n": 4,
      "caption": "Annotated intraoral image of an edentulous space between two adjacent teeth, with overlaid lines and arrows marking the available mesiodistal distance (running room) for an implant restoration.",
      "correct": 0,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": false
        },
        {
          "model": "Claude Opus 4.8",
          "correct": false
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "sever_crowding_of_teeth",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/sever_crowding_of_teeth.jpg",
      "modality": "clinical_photo",
      "labeled": false,
      "must_identify_n": 4,
      "caption": "Frontal intraoral clinical photograph of a young patient showing severe dental crowding with marked arch-length discrepancy: the anterior teeth are overlapping and rotated, and the maxillary lateral incisors/canines are ectopically displaced (blocked out) labially because there is insufficient space in the arch.",
      "correct": 0,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": false
        },
        {
          "model": "Claude Opus 4.8",
          "correct": false
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "dental_restoration",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/dental_restoration.jpg",
      "modality": "clinical_photo",
      "labeled": false,
      "must_identify_n": 3,
      "caption": "A four-panel intraoral clinical photo series showing the direct restoration of an occlusal (Class I) caries lesion on a posterior tooth: the initial occlusal lesion, the cavity preparation with discolored carious tissue, the cleaned prepared cavity, and the final tooth-colored composite restoration rebuilt to anatomical form.",
      "correct": 1,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": false
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "gingival_sulcus",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/gingival_sulcus.png",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 3,
      "caption": "A labeled schematic cross-section of a tooth and its periodontium in which the gingival sulcus, the shallow space between the tooth surface and the free gingival margin, is explicitly named with text and an arrow, with the surrounding dentogingival attachment structures (epithelium, connective-tissue fibers, and alveolar bone) shown as a lettered stack.",
      "correct": 1,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": false
        },
        {
          "model": "Claude Opus 4.8",
          "correct": false
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "human_tooth_diagram_gu",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/human_tooth_diagram_gu.png",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 5,
      "caption": "A labeled anatomical illustration showing a longitudinal cross-section of a healthy human tooth set in alveolar bone, with Gujarati labels marking its three regions: the crown (the visible portion), the neck (cervical region), and the root.",
      "correct": 1,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": false
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "non_carious_cervical_lesion",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/non_carious_cervical_lesion.jpg",
      "modality": "clinical_photo",
      "labeled": false,
      "must_identify_n": 4,
      "caption": "Lateral intraoral clinical photograph of the dentition in occlusion (cheek retracted) showing cervical-region changes and incisal/occlusal wear consistent with a non-carious cervical lesion presentation.",
      "correct": 1,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": false
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "periodontitis_01",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/periodontitis_01.jpg",
      "modality": "clinical_photo",
      "labeled": true,
      "must_identify_n": 4,
      "caption": "Intraoral photograph (A) of posterior teeth with heavy calculus, plaque, gingival recession and inflammation alongside the corresponding extracted multi-rooted molar (B) bearing calculus on its roots, consistent with chronic advanced periodontitis with attachment loss.",
      "correct": 1,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": false
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "prummelklammer",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/prummelklammer.jpg",
      "modality": "diagram",
      "labeled": false,
      "must_identify_n": 4,
      "caption": "Schematic line drawing of a removable partial denture clasp (a gingivally-approaching bar-type / Pr\u00fcmmel-style clasp) in gold, with its retentive arm embracing a single abutment tooth and a connector extending downward toward the denture base.",
      "correct": 1,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": false
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "smoothsurfacecaries02",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/smoothsurfacecaries02.png",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 4,
      "caption": "Hand-drawn cross-sectional sketch of a tooth labelled enamel, dentin, and pulp, showing a small black wedge of early smooth-surface caries confined to the enamel.",
      "correct": 1,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": false
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "smoothsurfacecaries03",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/smoothsurfacecaries03.png",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 4,
      "caption": "Hand-drawn cross-sectional sketch of a tooth labelled enamel, dentin, and pulp, showing a black wedge of smooth-surface caries that has progressed through the enamel toward the dentino-enamel junction.",
      "correct": 1,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": false
        },
        {
          "model": "Claude Opus 4.8",
          "correct": false
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "zahnimplantat",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/zahnimplantat.jpg",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 3,
      "caption": "Labeled cross-sectional diagram of a threaded dental implant osseointegrated in bone beneath the gingiva, with numbered callouts to the surrounding tissues.",
      "correct": 1,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": false
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "zmo0594_006",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/zmo0594_006.jpg",
      "modality": "clinical_photo",
      "labeled": false,
      "must_identify_n": 4,
      "caption": "Intraoral clinical photograph of a posterior (mandibular molar) tooth isolated with a clear matrix band, showing an occlusal cavity preparation being filled with tooth-colored restorative material during a direct restorative procedure.",
      "correct": 1,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": false
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "deciduous_permanent_teeth",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/deciduous_permanent_teeth.png",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 5,
      "caption": "Labeled occlusal-view diagram comparing the deciduous (primary) and permanent dentitions in the maxilla and mandible, naming the incisors, canine, premolars, and molars and indicating the palate.",
      "correct": 2,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": false
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "detached_dental_crown_flat_front",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/detached_dental_crown_flat_front.jpg",
      "modality": "clinical_photo",
      "labeled": false,
      "must_identify_n": 4,
      "caption": "Clinical photograph of a single detached porcelain-fused-to-metal dental crown viewed from its hollow underside (intaglio surface), showing a tooth-colored ceramic rim with a dark metal margin and retained set cement plus metal/core remnants inside, isolated on a white background.",
      "correct": 2,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": false
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "ferruleeffectdentistry",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/ferruleeffectdentistry.gif",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 4,
      "caption": "Labeled schematic of the ferrule effect, showing a crown enveloping at least 2 mm of vertical height and 1 mm of wall thickness of prepared tooth structure, with a pencil shown for scale.",
      "correct": 2,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": false
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "lichen_planus_fig7",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/lichen_planus_fig7.jpg",
      "modality": "clinical_photo",
      "labeled": false,
      "must_identify_n": 3,
      "caption": "Intraoral clinical photograph of the lateral and ventral tongue and lower lip showing white reticular (Wickham) striae and whitish patches with background erythema, consistent with oral lichen planus.",
      "correct": 2,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "line_diagram_of_gingivitis",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/line_diagram_of_gingivitis.png",
      "modality": "diagram",
      "labeled": false,
      "must_identify_n": 5,
      "caption": "Schematic color-coded line diagram of a single tooth and its periodontium (red gingiva, gold alveolar bone, hatched periodontal ligament) depicting gingivitis, with a swollen, inflamed red gingival margin and a shallow gingival pocket shown on a measuring scale, but no bone loss or loss of attachment.",
      "correct": 2,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": false
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "maxillary_tori",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/maxillary_tori.jpg",
      "modality": "clinical_photo",
      "labeled": false,
      "must_identify_n": 4,
      "caption": "Intraoral photograph of the hard palate showing a torus palatinus, a benign midline bony exostosis along the median palatine raphe covered by normal mucosa, with maxillary teeth and palatal rugae visible.",
      "correct": 2,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": false
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": true
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "periodontal_ligament_normal_pocket_depth",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/periodontal_ligament_normal_pocket_depth.png",
      "modality": "diagram",
      "labeled": false,
      "must_identify_n": 4,
      "caption": "Schematic line diagram of a tooth in cross-section showing the gingiva, alveolar bone, and periodontal ligament with a depth scale at the gingival margin representing a normal (healthy) sulcus/pocket depth.",
      "correct": 2,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": false
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": true
        }
      ]
    },
    {
      "id": "periodontium",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/periodontium.png",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 5,
      "caption": "A labeled schematic cross-section of the healthy periodontium, showing the tooth (enamel, dentin, cementum) and its supporting structures, the gingiva with gingival/periodontal fibers, the periodontal ligament, and the alveolar bone, with letter labels A\u2013K but no printed legend.",
      "correct": 2,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": false
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "calculus_2",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/calculus_2.jpg",
      "modality": "clinical_photo",
      "labeled": false,
      "must_identify_n": 2,
      "caption": "Close-up intraoral photograph showing yellow-brown dental calculus deposits along the cervical margins of teeth at the gumline.",
      "correct": 3,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "caries_periodontal_disease_calculus",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/caries_periodontal_disease_calculus.png",
      "modality": "clinical_photo",
      "labeled": false,
      "must_identify_n": 3,
      "caption": "Intraoral clinical photograph showing gross carious destruction with retained roots, heavy calculus deposits, and severe periodontal disease across the dentition.",
      "correct": 3,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": false
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "connective_tissue_graft_to_implant",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/connective_tissue_graft_to_implant.gif",
      "modality": "clinical_photo",
      "labeled": true,
      "must_identify_n": 4,
      "caption": "Pre-operative intraoral clinical photograph (buccal view of posterior crowns) with a black arrowhead marking gingival recession and an exposed dark margin at the gingival aspect of one restored unit, representing the baseline defect before mucogingival/soft-tissue graft surgery.",
      "correct": 3,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "dens_evaginatus",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/dens_evaginatus.jpg",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 4,
      "caption": "Hand-drawn, titled schematic of dens evaginatus, showing a tooth crown with an accessory cusp-like tubercle projecting from its surface within a magnified circular inset.",
      "correct": 3,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "depiction_of_a_periodontitis_patient",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/depiction_of_a_periodontitis_patient.png",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 4,
      "caption": "A labeled educational illustration contrasting a normal tooth with periodontitis, showing the healthy gum and bone on one side versus a deepening periodontal pocket, inflamed gum, plaque and calculus, and receded bone on the other, alongside a drawing of an older man holding his jaw in pain.",
      "correct": 3,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": false
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "four_mandibular_implants_with_novaloc_abut",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/four_mandibular_implants_with_novaloc_abut.jpg",
      "modality": "clinical_photo",
      "labeled": false,
      "must_identify_n": 4,
      "caption": "Intraoral photograph of an edentulous anterior mandible showing four interforaminal implants fitted with stud-type (Novaloc/LOCATOR-style) attachment abutments to retain a removable overdenture, with cheek/lip retractors at the lower margin.",
      "correct": 3,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "gray1005",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/gray1005.png",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 4,
      "caption": "Black-and-white anatomical engraving (Gray's Anatomy style) of a vertical section through a tooth, showing enamel with radial striations, the central pulp cavity, and surrounding dentin/bone, with numbered reference markers.",
      "correct": 3,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "moderate_periodontitis",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/moderate_periodontitis.png",
      "modality": "diagram",
      "labeled": false,
      "must_identify_n": 4,
      "caption": "Schematic line diagram of a single multi-rooted tooth in cross-section showing the gingival margin, alveolar bone crest, and periodontal ligament, with a shaded periodontal pocket and a vertical measurement scale illustrating the increased probing depth of moderate periodontitis.",
      "correct": 3,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": false
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "mouth_parotid_gland_nih_bioart_654",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/mouth_parotid_gland_nih_bioart_654.png",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 5,
      "caption": "Labeled NIH BioArt-style histology schematic of salivary (parotid) gland microanatomy, showing serous acini with surrounding myoepithelial cells draining through intercalated, striated, and excretory ducts, set within stroma containing adipocytes, fibroblasts, vascular and immune cells, with a 50 \u00b5m scale bar.",
      "correct": 3,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "overjet_overbite",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/overjet_overbite.png",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 4,
      "caption": "A labeled side-profile schematic diagram of an upper and lower incisor in occlusion, illustrating overbite (the vertical overlap of the incisors) and overjet (the horizontal distance between the upper and lower incisal edges, shown by the red reference line).",
      "correct": 3,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": false
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": true
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "perio-severe-01",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/perio_severe.png",
      "modality": "diagram",
      "labeled": false,
      "must_identify_n": 5,
      "caption": "Line diagram of a tooth showing the gingiva, bone, periodontal ligament with a scale showing the pocket depth of severe periodontitis.",
      "correct": 3,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": false
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": true
        }
      ]
    },
    {
      "id": "periodontal_terms_diagram_gingival_recessi",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/periodontal_terms_diagram_gingival_recessi.png",
      "modality": "diagram",
      "labeled": false,
      "must_identify_n": 4,
      "caption": "A schematic diagram of a tooth and adjacent gingiva with a numbered vertical bracket (1, 2, 3) illustrating that clinical attachment loss (1) equals gingival recession (2) plus probing/pocket depth (3), with the gingival margin sitting apical to the cemento-enamel junction.",
      "correct": 3,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": false
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "smoothsurfacecaries04",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/smoothsurfacecaries04.png",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 4,
      "caption": "Hand-drawn cross-sectional sketch of a tooth labelled enamel, dentin, and pulp, showing an enlarging black smooth-surface carious lesion that has extended past the enamel and is spreading into the dentin.",
      "correct": 3,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": false
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "tooth_2_psf",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/tooth_2_psf.png",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 4,
      "caption": "Black-and-white line diagram of a tooth in longitudinal section (1) and transverse section (2), with letter labels A-D marking the concentric tooth layers and the central pulp cavity.",
      "correct": 3,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "tooth_section_numbered",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/tooth_section_numbered.png",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 4,
      "caption": "Numbered cross-sectional diagram of a healthy molar in its socket, with callouts 1-10 marking enamel, dentin, pulp, gingiva, cementum, alveolar bone, blood vessels/nerve, and the crown and root regions.",
      "correct": 3,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": false
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "zahnfehlstellung_angle_klasse_ii_1",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/zahnfehlstellung_angle_klasse_ii_1.jpg",
      "modality": "diagram",
      "labeled": false,
      "must_identify_n": 3,
      "caption": "Hand-drawn lateral line diagram of teeth in occlusion with red marker lines, illustrating an Angle Class II division 1 malocclusion in which the upper incisors are positioned anterior to the lowers with increased overjet.",
      "correct": 3,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": false
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "bellingham_fluorosis_3",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/bellingham_fluorosis_3.jpg",
      "modality": "clinical_photo",
      "labeled": false,
      "must_identify_n": 4,
      "caption": "Close-up intraoral clinical photograph of the anterior teeth showing diffuse white enamel mottling with brown staining across multiple incisors, consistent with moderate dental fluorosis from excessive fluoride exposure during enamel formation.",
      "correct": 4,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "blausen_0864_toothdecay_ar",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/blausen_0864_toothdecay_ar.png",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 4,
      "caption": "Labeled anatomical illustration of a longitudinal cross-section through a molar tooth in the jaw, showing dental caries as a dark carious lesion eroding the crown from the occlusal surface inward toward the pulp, with the enamel, dentin, pulp (vessels and nerves), root canal, cementum, gingiva, and alveolar bone identified in Arabic labels.",
      "correct": 4,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "blausen_0864_toothdecay_croatian_hr",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/blausen_0864_toothdecay_croatian_hr.png",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 4,
      "caption": "Croatian-labeled cross-sectional illustration of a tooth affected by dental caries, showing smooth-surface and pit-and-fissure carious cavities eroding enamel and dentin toward the pulp, with structures labeled in Croatian (caklina, dentin, pulpa, cement, gingiva, celjusna kost).",
      "correct": 4,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": false
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": true
        },
        {
          "model": "Llama 4 Maverick",
          "correct": true
        }
      ]
    },
    {
      "id": "dental_caries_cavity_2_cropped",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/dental_caries_cavity_2_cropped.jpg",
      "modality": "clinical_photo",
      "labeled": false,
      "must_identify_n": 4,
      "caption": "Intraoral clinical photograph of the maxillary arch showing a single tooth with advanced dental caries, a large dark cavitated lesion and gross crown destruction, while the neighboring teeth and pink gingiva appear comparatively intact.",
      "correct": 4,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "dental_veneer",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/dental_veneer.jpg",
      "modality": "clinical_photo",
      "labeled": false,
      "must_identify_n": 4,
      "caption": "Close-up photograph of two translucent anterior all-ceramic dental restorations (porcelain veneers/crowns) on a black background, shown as laboratory specimens with characteristic bluish incisal translucency.",
      "correct": 4,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": true
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "filling_amalgam",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/filling_amalgam.jpg",
      "modality": "clinical_photo",
      "labeled": false,
      "must_identify_n": 3,
      "caption": "Close-up photograph of several posterior teeth, each restored with a silver-grey dental amalgam filling on the occlusal surface.",
      "correct": 4,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": true
        },
        {
          "model": "Llama 4 Maverick",
          "correct": true
        }
      ]
    },
    {
      "id": "full_implant_restoration",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/full_implant_restoration.gif",
      "modality": "diagram",
      "labeled": false,
      "must_identify_n": 4,
      "caption": "Illustration of an implant-supported fixed restoration in a partially edentulous posterior arch, with several implants and abutments in the bone receiving a multi-unit bridge of crowns alongside remaining natural teeth.",
      "correct": 4,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "geographic_tongue",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/geographic_tongue.jpg",
      "modality": "clinical_photo",
      "labeled": false,
      "must_identify_n": 4,
      "caption": "Clinical photograph of the protruded dorsal tongue showing multiple map-like depapillated red patches bordered by raised white serpiginous margins, characteristic of geographic tongue (benign migratory glossitis).",
      "correct": 4,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "gingivitida",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/gingivitida.jpg",
      "modality": "diagram",
      "labeled": false,
      "must_identify_n": 4,
      "caption": "Three-dimensional rendered illustration of a tooth in cross-section within bone and gingiva, with cervical calculus/plaque deposits and reddened, inflamed marginal gingiva depicting gingivitis.",
      "correct": 4,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": true
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "nih_doc_16_homogenousleukoplakia",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/nih_doc_16_homogenousleukoplakia.jpg",
      "modality": "clinical_photo",
      "labeled": false,
      "must_identify_n": 3,
      "caption": "Intraoral clinical photograph showing a well-defined homogeneous white plaque on the floor-of-mouth/ventral mucosa, consistent with homogeneous oral leukoplakia.",
      "correct": 4,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "perio-mild-01",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/perio_mild.png",
      "modality": "diagram",
      "labeled": false,
      "must_identify_n": 5,
      "caption": "Line diagram of a tooth showing the gingiva, bone, periodontal ligament with a scale showing the pocket depth of mild periodontitis.",
      "correct": 4,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": false
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": true
        },
        {
          "model": "Llama 4 Maverick",
          "correct": true
        }
      ]
    },
    {
      "id": "permanent_maxillary_teeth_by_rokaya_yahia_",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/permanent_maxillary_teeth_by_rokaya_yahia_.jpg",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 4,
      "caption": "A labeled hand-drawn pencil illustration of the right maxillary quadrant viewed from the occlusal/palatal aspect, naming the eight permanent teeth in order (central incisor, lateral incisor, canine, first and second premolars, and first, second, and third molars) with Arabic text labels.",
      "correct": 4,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "teeth_types_colored",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/teeth_types_colored.png",
      "modality": "diagram",
      "labeled": false,
      "must_identify_n": 4,
      "caption": "A labeled-by-color schematic occlusal-view diagram of the upper and lower dental arches showing a full permanent dentition with teeth grouped by type into incisors, canines, premolars, and molars.",
      "correct": 4,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": true
        }
      ]
    },
    {
      "id": "treatment_steps_for_feldspathic_vm9_porcel",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/treatment_steps_for_feldspathic_vm9_porcel.jpg",
      "modality": "clinical_photo",
      "labeled": true,
      "must_identify_n": 4,
      "caption": "A five-panel intraoral clinical photo series showing the step-by-step restoration of the two maxillary central incisors, from discolored failing teeth with gingival inflammation, through tooth preparation to abutments/cores, to the final natural-looking anterior crowns.",
      "correct": 4,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "wortel_fractuur",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/wortel_fractuur.jpg",
      "modality": "clinical_photo",
      "labeled": false,
      "must_identify_n": 4,
      "caption": "Clinical photograph of an extracted, crowned (metal-ceramic) tooth that has undergone a root fracture, shown as separated coronal and root fragments with fresh blood on a teal surgical drape.",
      "correct": 4,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "110216ek08",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/110216ek08.jpg",
      "modality": "clinical_photo",
      "labeled": true,
      "must_identify_n": 3,
      "caption": "Intraoral occlusal clinical photograph of a child's maxillary (upper) arch in mixed dentition, taken with cheek retractors; the image carries overlaid tooth-number and text annotations.",
      "correct": 5,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": true
        }
      ]
    },
    {
      "id": "amalgam",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/amalgam.jpg",
      "modality": "clinical_photo",
      "labeled": false,
      "must_identify_n": 3,
      "caption": "Close-up photograph of a single molar tooth with a silver-grey dental amalgam restoration in its occlusal surface.",
      "correct": 5,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": true
        },
        {
          "model": "Llama 4 Maverick",
          "correct": true
        }
      ]
    },
    {
      "id": "aphthous_stomatitis",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/aphthous_stomatitis.jpg",
      "modality": "clinical_photo",
      "labeled": false,
      "must_identify_n": 2,
      "caption": "Clinical photograph of the tongue mucosa showing several round white-centred ulcers with red halos, consistent with aphthous stomatitis (recurrent aphthous ulcers).",
      "correct": 5,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": true
        },
        {
          "model": "Llama 4 Maverick",
          "correct": true
        }
      ]
    },
    {
      "id": "aphthous_stomatitis_in_the_mouth",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/aphthous_stomatitis_in_the_mouth.jpg",
      "modality": "clinical_photo",
      "labeled": false,
      "must_identify_n": 2,
      "caption": "Clinical photograph of an everted lower lip showing a small shallow ulcer with a yellow-white base and red halo on the labial mucosa, consistent with a minor aphthous ulcer.",
      "correct": 5,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": false
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": true
        },
        {
          "model": "Llama 4 Maverick",
          "correct": true
        }
      ]
    },
    {
      "id": "basic_anatomy_tooth",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/basic_anatomy_tooth.jpg",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 4,
      "caption": "Labeled cross-sectional anatomy diagram of a healthy multi-rooted tooth, identifying crown and root, enamel, dentin and dentinal tubules, cementum, dental pulp (blood vessels, nerves and stroma) and the root apex.",
      "correct": 5,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": true
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "caries-01",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/caries.png",
      "modality": "diagram",
      "labeled": false,
      "must_identify_n": 5,
      "caption": "Diagram of dental caries: a tooth in cross-section with a carious lesion on the crown extending through enamel into dentin toward the pulp.",
      "correct": 5,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": true
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "diagram_illustrating_coronal_and_apical_fo",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/diagram_illustrating_coronal_and_apical_fo.png",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 4,
      "caption": "A labeled anatomical diagram of a semi-transparent mandible showing unerupted teeth (Second Molar, Second Premolar, First Premolar, Canine), each surrounded by a dental follicle color-coded into a coronal follicle segment (orange, over the crown) and an apical follicle segment (magenta, around the root).",
      "correct": 5,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": true
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "examples_of_tooth_staining",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/examples_of_tooth_staining.jpg",
      "modality": "clinical_photo",
      "labeled": true,
      "must_identify_n": 4,
      "caption": "A labeled multi-panel figure of intraoral clinical photographs illustrating diverse causes of tooth discoloration, spanning extrinsic stains (smoking, wine, food), intrinsic discoloration (tetracycline, fluorosis, age yellowing, non-vital/genetic) and related changes (caries, orthodontic white spot lesions, amalgam staining).",
      "correct": 5,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": true
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "human_tooth_ku",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/human_tooth_ku.png",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 4,
      "caption": "Labeled color cross-sectional anatomy diagram of a human molar (labels in Kurdish) showing enamel, dentin, pulp with vessels and nerves, cementum, periodontal ligament, gingiva, and supporting bone, with crown and root distinguished.",
      "correct": 5,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": false
        },
        {
          "model": "GLM-4.6V",
          "correct": true
        },
        {
          "model": "Llama 4 Maverick",
          "correct": true
        }
      ]
    },
    {
      "id": "mandibularanteriorcalculus",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/mandibularanteriorcalculus.jpg",
      "modality": "clinical_photo",
      "labeled": false,
      "must_identify_n": 4,
      "caption": "Intraoral clinical photograph of the lingual surfaces of the mandibular anterior teeth showing heavy yellow-brown supragingival dental calculus (tartar) deposits along the gingival margins.",
      "correct": 5,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": true
        }
      ]
    },
    {
      "id": "molar_relationship",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/molar_relationship.jpg",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 5,
      "caption": "An illustrated comparative diagram of Angle's classification of molar relationship, showing Class I, Class II, and Class III, where a red line marks the maxillary first molar mesiobuccal cusp and a blue line marks the mandibular first molar buccal groove.",
      "correct": 5,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": true
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "photo-intraoral-01",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/intraoral_photo.jpg",
      "modality": "clinical_photo",
      "labeled": false,
      "must_identify_n": 5,
      "caption": "A clinical intraoral photograph of an open mouth showing teeth, tongue, palate, uvula and surrounding oral soft tissues.",
      "correct": 5,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": true
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "root_canal_illustration_molar",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/root_canal_illustration_molar.png",
      "modality": "diagram",
      "labeled": false,
      "must_identify_n": 4,
      "caption": "Unlabeled four-panel diagram demonstrating the steps of root canal treatment on a molar: an infected tooth with a periapical lesion, access drilling, canal filing with an endodontic file, and final obturation with a crown.",
      "correct": 5,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": true
        }
      ]
    },
    {
      "id": "single_crown_implant",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/single_crown_implant.jpg",
      "modality": "clinical_photo",
      "labeled": true,
      "must_identify_n": 3,
      "caption": "Photograph of a single-unit dental implant assembly labeled IMPLANT, ABUTMENT, and CROWN, showing the threaded fixture, the connecting abutment, and the ceramic crown.",
      "correct": 5,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": true
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "smoothsurfacecaries05",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/smoothsurfacecaries05.png",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 4,
      "caption": "A labeled schematic cross-section of a tooth crown (enamel, dentin, pulp) showing a later-stage smooth-surface carious lesion (black) that has penetrated through the enamel and into the dentin but has not yet reached the pulp.",
      "correct": 5,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": false
        },
        {
          "model": "Llama 4 Maverick",
          "correct": true
        }
      ]
    },
    {
      "id": "temporomandibular_joint_number",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/temporomandibular_joint_number.png",
      "modality": "diagram",
      "labeled": false,
      "must_identify_n": 4,
      "caption": "A numbered schematic sagittal-section diagram of normal temporomandibular joint anatomy, showing the mandibular condyle, the temporal bone glenoid fossa and articular eminence, the interposed biconcave articular disc dividing the upper and lower joint compartments, the joint capsule, and adjacent soft tissue/musculature, with structures identified by numbers rather than text labels.",
      "correct": 5,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": false
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": true
        },
        {
          "model": "Llama 4 Maverick",
          "correct": true
        }
      ]
    },
    {
      "id": "tooth_picturewlabels",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/tooth_picturewlabels.jpg",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 4,
      "caption": "A labeled occlusal-view schematic of an upper (maxillary) molar crown showing its four cusps color-coded and named, the paracone, metacone, protocone, and hypocone, with mesial, distal, buccal, and lingual orientation labels.",
      "correct": 5,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": true
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "tooth_structure_and_dental_tissues_with_th",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/tooth_structure_and_dental_tissues_with_th.png",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 6,
      "caption": "Labeled educational schematic of tooth structure and supporting tissues (enamel, dentin, pulp, cementum, periodontal ligament, alveolar bone, gingiva, neurovascular bundle), with three magnified insets mapping cell populations: the odontoblast layer and cell-free/cell-rich zones (A), pulp fibroblasts, vessels, pericytes, nerves and DPSCs (B), and acellular versus cellular cementum with cementocytes (C).",
      "correct": 5,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": true
        },
        {
          "model": "Llama 4 Maverick",
          "correct": false
        }
      ]
    },
    {
      "id": "zmo0594_001",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/zmo0594_001.jpg",
      "modality": "clinical_photo",
      "labeled": false,
      "must_identify_n": 3,
      "caption": "High-magnification intraoral clinical photograph of a molar occlusal surface under blue field isolation, showing brown staining and discoloration of the occlusal fissures and central fossa.",
      "correct": 5,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": false
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": true
        },
        {
          "model": "Llama 4 Maverick",
          "correct": true
        }
      ]
    },
    {
      "id": "anat-01",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/tooth_anatomy.png",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 6,
      "caption": "Tooth Anatomy: cross-section showing enamel, dentin, pulp, crown, root, root canal, gums, bone, and nerves and blood vessels.",
      "correct": 6,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": true
        },
        {
          "model": "Llama 4 Maverick",
          "correct": true
        }
      ]
    },
    {
      "id": "blausen_0774_rootcanal",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/blausen_0774_rootcanal.png",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 4,
      "caption": "Labeled color cross-sectional diagram of a tooth undergoing root canal therapy: a cleaning file is inserted into the canal under rubber-dam isolation to remove infected pulp, with a periapical lesion at the apex.",
      "correct": 6,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": true
        },
        {
          "model": "Llama 4 Maverick",
          "correct": true
        }
      ]
    },
    {
      "id": "blausen_0864_toothdecay",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/blausen_0864_toothdecay.png",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 4,
      "caption": "English-labeled cross-sectional illustration of a tooth affected by dental caries, showing smooth-surface and pit-and-fissure cavities eroding the enamel and dentin toward the pulp, with labeled enamel, dentin, pulp, cementum, gingiva and jaw bone.",
      "correct": 6,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": true
        },
        {
          "model": "Llama 4 Maverick",
          "correct": true
        }
      ]
    },
    {
      "id": "dental_caries_cavity_1",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/dental_caries_cavity_1.jpg",
      "modality": "clinical_photo",
      "labeled": false,
      "must_identify_n": 4,
      "caption": "Intraoral clinical close-up photograph of a posterior tooth (molar/premolar) showing an advanced cavitated dental caries lesion, with a deep central cavity, brown-black discoloration, and softened carious dentin extending into the dentin.",
      "correct": 6,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": true
        },
        {
          "model": "Llama 4 Maverick",
          "correct": true
        }
      ]
    },
    {
      "id": "dental_quadrants",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/dental_quadrants.png",
      "modality": "diagram",
      "labeled": false,
      "must_identify_n": 4,
      "caption": "An unlabeled schematic line-drawing diagram showing the occlusal view of the full human (permanent) dentition, with a vertical and horizontal line dividing both the upper and lower arches into the four dental quadrants.",
      "correct": 6,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": true
        },
        {
          "model": "Llama 4 Maverick",
          "correct": true
        }
      ]
    },
    {
      "id": "diagram_of_tooth_erosion",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/diagram_of_tooth_erosion.png",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 5,
      "caption": "A labeled schematic diagram comparing a diseased tooth (left, titled 'Tooth Erosion and Decay') showing a brown carious lesion from plaque acid dissolving enamel, yellow plaque/tartar buildup, and gingival recession from inflammation, against a 'Healthy' tooth (right) with intact enamel and a normal pink gum line.",
      "correct": 6,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": true
        },
        {
          "model": "Llama 4 Maverick",
          "correct": true
        }
      ]
    },
    {
      "id": "eb1911_mouth_and_salivary_glands",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/eb1911_mouth_and_salivary_glands.jpg",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 3,
      "caption": "A labeled black-and-white anatomical engraving of a lateral view of the head showing the three major salivary glands and their ducts (parotid with Stensen's duct, submaxillary/submandibular with Wharton's duct, and sublingual with the duct of Bartholin), together with named oral and cervical structures such as the masseter, mylohyoid, anterior belly of digastric, hyoid bone, and mandible.",
      "correct": 6,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": true
        },
        {
          "model": "Llama 4 Maverick",
          "correct": true
        }
      ]
    },
    {
      "id": "human_tooth_diagram_en",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/human_tooth_diagram_en.png",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 5,
      "caption": "Labeled cross-sectional diagram of a healthy molar showing enamel, dentin, cementum, the pulp chamber with blood vessels and nerves, the surrounding gingiva and jaw bone, and the crown, neck, and root regions.",
      "correct": 6,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": true
        },
        {
          "model": "Llama 4 Maverick",
          "correct": true
        }
      ]
    },
    {
      "id": "suunad",
      "image": "https://cdn.jsdelivr.net/gh/Tuminha/dental-vision-benchmark@main/data/images/suunad.png",
      "modality": "diagram",
      "labeled": true,
      "must_identify_n": 4,
      "caption": "A labeled schematic occlusal-view diagram of the upper and lower dental arches (in Estonian) illustrating tooth surfaces and directional terminology - labial, buccal, palatal, lingual, mesial, and distal - with one quadrant numbered 1 to 8 from central incisor to third molar.",
      "correct": 6,
      "total": 6,
      "outcomes": [
        {
          "model": "Gemini 3.1 Pro",
          "correct": true
        },
        {
          "model": "Claude Opus 4.8",
          "correct": true
        },
        {
          "model": "Qwen3.7 Plus",
          "correct": true
        },
        {
          "model": "GPT-5.5",
          "correct": true
        },
        {
          "model": "GLM-4.6V",
          "correct": true
        },
        {
          "model": "Llama 4 Maverick",
          "correct": true
        }
      ]
    }
  ]
};
