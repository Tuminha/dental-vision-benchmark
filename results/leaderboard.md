# Dental Vision Benchmark — results (v1, clinician-reviewed)

**90 images (+ a memorization control), 6 vision models, two independent judges** (primary Claude Opus 4.8, secondary GPT-5.5). Image only, no caption, no internet, temperature 0, single trial. Ground truth clinician-reviewed 2026-06-15. Scoring is rubric pass/fail (all `must_identify` satisfied, no `must_avoid`).

## Leaderboard (primary judge, 95% Wilson CI)

| Model | Score | 95% CI | Diagrams | Clinical photos | Labeled | Unlabeled |
|---|---:|:---:|---:|---:|---:|---:|
| Gemini 3.1 Pro | 68% (61/90) | [58, 77] | 67% | 68% | 78% | 59% |
| Claude Opus 4.8 | 62% (56/90) | [52, 72] | 65% | 58% | 76% | 51% |
| Qwen3.7 Plus | 60% (54/90) | [50, 70] | 67% | 50% | 71% | 51% |
| GPT-5.5 | 51% (46/90) | [41, 61] | 63% | 34% | 61% | 43% |
| GLM-4.6V | 31% (28/90) | [22, 41] | 38% | 21% | 44% | 20% |
| Llama 4 Maverick | 26% (23/90) | [18, 35] | 29% | 21% | 32% | 20% |

_Top cluster, overlapping CIs: Gemini 3.1 Pro, Claude Opus 4.8, Qwen3.7 Plus. The robust finding is the task split (unlabeled clinical photos are hardest), not a single winner._

## Sensitivity (excluding 8 weak/ambiguous items, n=82)

| Model | Full | Clean |
|---|---:|---:|
| Gemini 3.1 Pro | 68% | 73% |
| Claude Opus 4.8 | 62% | 65% |
| Qwen3.7 Plus | 60% | 66% |
| GPT-5.5 | 51% | 55% |
| GLM-4.6V | 31% | 34% |
| Llama 4 Maverick | 26% | 28% |

## Judge agreement and self-preference check

Verdict agreement 82%, Cohen's kappa 0.65. The primary (Opus) judge is more lenient than the secondary (GPT-5.5) judge for every model, but shows **no own-family preference**: Claude has the *smallest* primary-vs-secondary gap, not the largest.

| Model | Primary (Opus) | Secondary (GPT-5.5) | Delta |
|---|---:|---:|---:|
| Gemini 3.1 Pro | 68% | 46% | +22 |
| Claude Opus 4.8 | 62% | 56% | +7 |
| Qwen3.7 Plus | 60% | 51% | +9 |
| GPT-5.5 | 51% | 33% | +18 |
| GLM-4.6V | 31% | 17% | +15 |
| Llama 4 Maverick | 26% | 6% | +20 |

## Severity (soft metric; 11 graded items)

How often each model's stated grade matched the expected severity (judge-assessed). _Note: this v1 run applied severity as a pass-gate on these items; the harness now treats it as a soft metric, which will lift the gated items' scores on the next run._

| Model | Severity match |
|---|---:|
| Gemini 3.1 Pro | 64% |
| Claude Opus 4.8 | 36% |
| Qwen3.7 Plus | 64% |
| GPT-5.5 | 45% |
| GLM-4.6V | 18% |
| Llama 4 Maverick | 45% |

## Caveats
- n=90, single trial: treat the ranking as a top cluster, not an exact order (overlapping CIs).
- Labeled images (readable text labels) are far easier than unlabeled; the unlabeled clinical-photo column is the hardest, most informative test.
- Judges are themselves evaluated models; absolute pass-rates are judge-dependent (see kappa).
- A focused description benchmark across diagrams and clinical photos; radiographs are out of scope, and it is not a comprehensive dental MLLM suite.

