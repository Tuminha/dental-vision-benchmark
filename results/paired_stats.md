# Paired statistics (primary judge)

Beyond the per-model Wilson intervals in `leaderboard.md`, these analyses use the fact that all six models are scored on the same 90 images (paired by item).

## 1. Pairwise model comparisons (paired by item)

McNemar exact test on the 90 paired items, Holm-corrected across the 15 comparisons; item-level bootstrap 95% interval for each pass-rate difference (10,000 resamples).

| Comparison | Δ pass rate (95% boot CI) | discordant (a/b) | McNemar p (Holm) | sig |
|---|---:|:---:|---:|:---:|
| Gemini 3.1 Pro vs Llama 4 Maverick | +44 [+32, +57] | 44/4 | 0.000 | yes |
| Gemini 3.1 Pro vs GLM-4.6V | +38 [+26, +50] | 38/4 | 0.000 | yes |
| Claude Opus 4.8 vs Llama 4 Maverick | +36 [+24, +47] | 34/2 | 0.000 | yes |
| Qwen3.7 Plus vs Llama 4 Maverick | +33 [+22, +44] | 34/4 | 0.000 | yes |
| Claude Opus 4.8 vs GLM-4.6V | +29 [+19, +39] | 28/2 | 0.000 | yes |
| GPT-5.5 vs Llama 4 Maverick | +28 [+16, +40] | 33/8 | 0.001 | yes |
| Qwen3.7 Plus vs GLM-4.6V | +27 [+16, +38] | 28/4 | 0.000 | yes |
| GPT-5.5 vs GLM-4.6V | +21 [+9, +33] | 28/9 | 0.021 | yes |
| Gemini 3.1 Pro vs GPT-5.5 | +17 [+6, +28] | 21/6 | 0.041 | yes |
| Gemini 3.1 Pro vs Qwen3.7 Plus | +11 [+1, +21] | 16/6 | 0.315 | no |
| Gemini 3.1 Pro vs Claude Opus 4.8 | +9 [-2, +20] | 18/10 | 0.925 | no |
| Claude Opus 4.8 vs GPT-5.5 | +8 [-4, +19] | 18/11 | 1.000 | no |
| GLM-4.6V vs Llama 4 Maverick | +7 [-3, +17] | 13/7 | 1.000 | no |
| Qwen3.7 Plus vs GPT-5.5 | +6 [-6, +17] | 15/10 | 1.000 | no |
| Claude Opus 4.8 vs Qwen3.7 Plus | +2 [-7, +11] | 10/8 | 1.000 | no |

## 2. Mixed-effects logistic model (item as a random intercept)

Bayesian binomial mixed GLM, random intercept per image, fixed effects for model (reference Gemini 3.1 Pro), modality (reference diagram), labeled, and weak-item flag. Odds ratios with 95% credible intervals.

| Term | Odds ratio | 95% CrI |
|---|---:|:---:|
| Claude Opus 4.8 (vs Gemini) | 0.63 | [0.36, 1.08] |
| Qwen3.7 Plus (vs Gemini) | 0.54 | [0.31, 0.92] |
| GPT-5.5 (vs Gemini) | 0.37 | [0.22, 0.63] |
| GLM-4.6V (vs Gemini) | 0.09 | [0.05, 0.16] |
| Llama 4 Maverick (vs Gemini) | 0.06 | [0.03, 0.10] |
| Clinical photo (vs diagram) | 0.84 | [0.59, 1.19] |
| Labeled (vs unlabeled) | 2.19 | [1.57, 3.05] |
| Weak item (vs not) | 0.12 | [0.05, 0.25] |

## 3. Rubric burden (pass rate by number of required points)

Each image's rubric lists `must_identify` points; an item passes only if all are covered. Pooled over the six models:

| Required points | Items | Model-rows | Pass rate |
|---:|---:|---:|---:|
| 2 | 3 | 18 | 72% |
| 3 | 16 | 96 | 47% |
| 4 | 56 | 336 | 51% |
| 5 | 13 | 78 | 56% |
| 6 | 2 | 12 | 92% |

Item-clustered logistic regression (GEE, controlling for model): each additional required point multiplies the odds of passing by **1.23** (95% CI [0.82, 1.83], p = 0.317).

