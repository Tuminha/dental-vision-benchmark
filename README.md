# Dental Vision Benchmark

**Which AI model can actually read a dental image?**

![License: MIT](https://img.shields.io/badge/License-MIT-3FB6B2.svg)
![Python 3.10+](https://img.shields.io/badge/python-3.10%2B-3FB6B2.svg)
![status](https://img.shields.io/badge/status-v0.2%20draft-E0A458.svg)

Clinicians already show AI a clinical photo, a diagram, or a figure from a paper and
ask "what is this?". The models sound confident, but no public benchmark measures which
one actually *reads* a dental image correctly. This is a small, clinician-authored,
contamination-aware benchmark that does. Scope is dental and clinical diagrams,
illustrations, and clinical images/figures from open-access articles. Radiographic
interpretation is a separate, harder competency and is deliberately out of scope for v1.

## How it works

![Pipeline](assets/flow.svg)

The whole method rests on two safeguards:

1. **Leakage guard going in.** Each model is shown the image and nothing else. The
   caption is stripped, the image is sent inline as base64, and no tools are passed,
   so the model cannot search the web to recover the original caption. A high score
   can only come from reading the picture.
2. **Grounded judging.** Two independent judges from different vendors each *see* the
   image and hold the authoritative caption plus the clinician rubric, then grade the
   model's description against the real answer. Their agreement is reported, so the
   absolute numbers are not taken on faith.

On top of that, a **private control** measures training-data memorization: a
transformed copy of a public image (flipped and cropped) keeps the clinical content
identical while defeating exact-image recognition. A model that truly reads the image
scores the same on the control; a model that memorized the original drops.

## What it measures

- **Leaderboard** — rubric pass-rate per model (does the description satisfy the
  clinician's `must_identify` points and commit none of the `must_avoid` errors).
- **Modality accuracy** — does the model know a diagram from a radiograph from a
  clinical photo.
- **Memorization gap** — accuracy on the original public image vs the transformed
  control.
- **Judge agreement** — primary judge vs an independent second judge.

## First results (v1, clinician-reviewed)

First full run: 90 images, six models, two independent judges. Full table and caveats in
[`results/leaderboard.md`](results/leaderboard.md). Top line:

- **Gemini 3.1 Pro leads (68%)**, with Claude Opus 4.8 (62%) and Qwen3.7 Plus (60%) close behind.
- **GPT-5.5 sits mid-pack (51%)**, notably not the leader even though GPT topped the sibling *text* dental benchmark. Best-at-text is not best-at-vision.
- **Llama 4 Maverick (26%) and GLM-4.6V (31%) trail.**
- The real gap is **clinical photos**: every model reads diagrams better than real mouths, and the weak models collapse on photos (21-34%) while Gemini holds (68%).

Ground truth was clinician-reviewed (2026-06-15); the ranking is more robust than the absolute percentages at n=90.

## The lineup

The latest vision-capable model of each family (verified image-capable on OpenRouter):

| Model | OpenRouter id |
|---|---|
| GPT-5.5 | `openai/gpt-5.5` |
| Claude Opus 4.8 | `anthropic/claude-opus-4.8` |
| Gemini 3.1 Pro | `google/gemini-3.1-pro-preview` |
| Qwen3.7 Plus | `qwen/qwen3.7-plus` |
| Llama 4 Maverick | `meta-llama/llama-4-maverick` |
| GLM-4.6V | `z-ai/glm-4.6v` |

The brand-new open-source GLM-5.2 and Rio 3.5 Open 397B are **text-only**, so they
cannot enter a vision benchmark.

## Quickstart

```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
export OPENROUTER_API_KEY=...        # one key reaches every model
python src/run_vision_eval.py
```

To rebuild the memorization control image or the credits file:

```bash
python tools/make_control.py
python tools/build_credits.py
```

## Status

**v1, clinician-reviewed (2026-06-15).**
The dataset is 90 dental images plus a memorization control, across ~16 buckets (anatomy,
periodontics, caries, implants, endodontics, orthodontics/occlusion, oral pathology,
restorative, tooth wear, developmental anomalies, mucosal lesions, trauma, TMJ/salivary,
prosthetics). Diagrams and clinical photos only; radiographs are deliberately out of scope
for v1. Ground truth (`must_identify` / `must_avoid` / caption / severity) was authored per
image and reviewed by the periodontist author; see [`VALIDATION.md`](VALIDATION.md).

Roadmap: optional expansion toward ~120 via open-access journal figures → bootstrap
confidence intervals → difficulty-matched contamination study.

## Dataset and licensing

Images are openly licensed (Wikimedia Commons / CC0); per-image attribution is in
[`CREDITS.md`](CREDITS.md). Ground truth lives in
[`data/items.json`](data/items.json) as `must_identify` / `must_avoid` rubrics plus a
reference caption. The benchmark code is MIT; the images keep their own licenses.

## Related work

Complementary to OralMLLM-Bench (multimodal dental radiographs) and the text-only
dental QA benchmarks. This one is dental diagrams, illustrations, and clinical
images/figures from open-access articles, scored by caption-match, contamination-aware,
and fully public. Radiographic interpretation is intentionally a separate, later tier.

Author: Francisco Teixeira Barbosa (Periospot / Foundation for Oral Rehabilitation).
