# Dental Vision Benchmark — results (v1, clinician-reviewed)

**90 images (+ a transformed control item), 6 vision models, two independent judges** (primary Claude Opus 4.8, secondary GPT-5.5). Image only, no caption, no internet, temperature 0, single trial. Ground truth clinician-reviewed 2026-06-15. Scoring is rubric pass/fail (all `must_identify` satisfied, no `must_avoid`).

## Leaderboard (primary judge, 95% Wilson CI)

| Model | Score | 95% CI | Diagrams | Clinical photos | Labeled | Unlabeled |
|---|---:|:---:|---:|---:|---:|---:|
| Gemini 3.1 Pro | 72% (65/90) | [62, 80] | 73% | 71% | 76% | 69% |
| Claude Opus 4.8 | 62% (56/90) | [52, 72] | 69% | 53% | 76% | 51% |
| Qwen3.7 Plus | 59% (53/90) | [49, 68] | 65% | 50% | 71% | 49% |
| GPT-5.5 | 56% (50/90) | [45, 65] | 63% | 45% | 68% | 45% |
| GLM-4.6V | 32% (29/90) | [23, 42] | 37% | 26% | 41% | 24% |
| Llama 4 Maverick | 28% (25/90) | [20, 38] | 33% | 21% | 27% | 29% |

_Top cluster, overlapping CIs: Gemini 3.1 Pro, Claude Opus 4.8, Qwen3.7 Plus. The robust finding is the task split (unlabeled clinical photos are hardest), not a single winner._

## Sensitivity (excluding 10 weak/ambiguous items, n=80)

| Model | Full | Clean |
|---|---:|---:|
| Gemini 3.1 Pro | 72% | 75% |
| Claude Opus 4.8 | 62% | 66% |
| Qwen3.7 Plus | 59% | 64% |
| GPT-5.5 | 56% | 60% |
| GLM-4.6V | 32% | 35% |
| Llama 4 Maverick | 28% | 31% |

## Judge agreement and self-preference check

Verdict agreement 82%, Cohen's kappa 0.65. The primary (Opus) judge is more lenient than the secondary (GPT-5.5) judge for every model. There is **no own-family advantage in these pass-rate deltas** (Claude has the *smallest* primary-vs-secondary gap, not the largest), though a single-pass delta cannot rule out subtler bias.

| Model | Primary (Opus) | Secondary (GPT-5.5) | Delta |
|---|---:|---:|---:|
| Gemini 3.1 Pro | 73% | 51% | +22 |
| Claude Opus 4.8 | 62% | 56% | +7 |
| Qwen3.7 Plus | 60% | 48% | +12 |
| GPT-5.5 | 56% | 36% | +20 |
| GLM-4.6V | 32% | 14% | +18 |
| Llama 4 Maverick | 28% | 11% | +17 |

## Severity (soft metric; 11 graded items)

How often each model's stated grade matched the expected severity (judge-assessed). Severity is reported only; it does **not** gate the pass/fail score above.

| Model | Severity match |
|---|---:|
| Gemini 3.1 Pro | 82% |
| Claude Opus 4.8 | 55% |
| Qwen3.7 Plus | 55% |
| GPT-5.5 | 82% |
| GLM-4.6V | 36% |
| Llama 4 Maverick | 45% |

## Caveats
- n=90, single trial: treat the ranking as a top cluster, not an exact order (overlapping CIs).
- Labeled images (readable text labels) are far easier than unlabeled; the unlabeled clinical-photo column is the hardest, most informative test.
- Judges are themselves evaluated models; absolute pass-rates are judge-dependent (see kappa).
- A focused description benchmark across diagrams and clinical photos; radiographs are out of scope, and it is not a comprehensive dental MLLM suite.

