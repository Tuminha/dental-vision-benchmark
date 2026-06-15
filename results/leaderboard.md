# Dental Vision Benchmark — results (v1, clinician-signed-off)

**90 images (+ a memorization control), 6 vision models, two independent judges** (Claude Opus 4.8 primary, GPT-5.5 secondary). Image only, no caption, no internet, temperature 0. Ground truth clinician-reviewed (2026-06-15).

## Leaderboard (primary judge)

| Model | Overall | Diagrams | Clinical photos | Modality ID |
|---|---:|---:|---:|---:|
| Gemini 3.1 Pro | 68% | 67% | 68% | 98% |
| Claude Opus 4.8 | 62% | 65% | 58% | 98% |
| Qwen3.7 Plus | 60% | 67% | 50% | 97% |
| GPT-5.5 | 51% | 63% | 34% | 99% |
| GLM-4.6V | 31% | 38% | 21% | 97% |
| Llama 4 Maverick | 26% | 29% | 21% | 98% |

**Dual-judge agreement:** 82% (primary pass-rate 50%, stricter secondary 35%).

## Reading
- Gemini 3.1 Pro, Claude Opus 4.8 and Qwen3.7 Plus form the top cluster; GPT-5.5 mid-pack (the text-benchmark champion is not the vision champion); Llama 4 Maverick and GLM-4.6V trail.
- Clinical photos are markedly harder than diagrams across the board.

