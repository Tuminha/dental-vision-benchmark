# Dental Vision Benchmark — first results (v1)

**90 images (+ a memorization control), 6 vision models, two independent judges** (Claude Opus 4.8 primary, GPT-5.5 secondary). Image only, no caption, no internet, temperature 0.

> Ground truth is **clinician-authored DRAFT** pending sign-off (`VALIDATION.md`). Treat these as **directional**, and trust the ranking over the absolute percentages.

## Leaderboard (primary judge)

| Model | Overall | Diagrams | Clinical photos | Modality ID |
|---|---:|---:|---:|---:|
| Gemini 3.1 Pro | 67% | 67% | 66% | 99% |
| Claude Opus 4.8 | 63% | 65% | 61% | 99% |
| Qwen3.7 Plus | 60% | 67% | 50% | 99% |
| GPT-5.5 | 50% | 63% | 32% | 99% |
| GLM-4.6V | 30% | 38% | 18% | 98% |
| Llama 4 Maverick | 23% | 29% | 16% | 99% |

**Dual-judge agreement:** 83%  (primary pass-rate 50%, stricter secondary 35%). Absolute accuracy is judge-dependent; the ranking is the robust signal.

## Honest reading
- **Top cluster:** Gemini 3.1 Pro, Claude Opus 4.8, and Qwen3.7 Plus (60-67%) overlap within the ~±10-point CI at n=90.
- **GPT-5.5 sits mid-pack (50%)** — notably *not* the leader, even though GPT topped the sibling *text* dental benchmark. Best-at-text is not best-at-vision.
- **Floor:** Llama 4 Maverick (23%) and GLM-4.6V (30%) are clearly weakest at reading dental images.
- **Modality is easy (≈99%)**; the difficulty is in the content (diagnosis, severity, structures).
- **Memorization control:** no gap on the (easy, ubiquitous) anatomy item; the probe needs harder/rarer images to bite.
- One call errored (GLM-4.6V empty response on `dens_evaginatus`), scored as a fail.

