"""Paired statistics for the dental vision benchmark -> results/paired_stats.md (+ a figure).

Every model is evaluated on the same 90 images, so model comparisons are paired by item.
This script reports, beyond the per-model Wilson intervals:
  1. McNemar tests for all 15 model pairs, Holm-corrected.
  2. Item-level bootstrap 95% intervals for each pairwise pass-rate difference.
  3. A mixed-effects logistic model (item as a random intercept) with predictors for model,
     modality, labeled status, and weak-item flag.
  4. A rubric-burden analysis: pass rate and odds of pass by number of must_identify points.

Usage: python tools/paired_stats.py
"""
from __future__ import annotations

import json
import math
from itertools import combinations
from pathlib import Path

import numpy as np
import pandas as pd
from scipy import stats
from statsmodels.stats.contingency_tables import mcnemar
import statsmodels.formula.api as smf
import statsmodels.api as sm
from statsmodels.genmod.bayes_mixed_glm import BinomialBayesMixedGLM

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

ROOT = Path(__file__).resolve().parents[1]
MODELS = ["Gemini 3.1 Pro", "Claude Opus 4.8", "Qwen3.7 Plus", "GPT-5.5", "GLM-4.6V", "Llama 4 Maverick"]
RNG = np.random.default_rng(42)
B = 10000


def load():
    rows = [json.loads(l) for l in open(ROOT / "results/results.jsonl")]
    items = {x["id"]: x for x in json.load(open(ROOT / "data/items.json"))["items"]}
    main = [x for x in rows if not x["is_control"]]
    recs = []
    for x in main:
        it = items.get(x["item"], {})
        recs.append({
            "model": x["model"], "item": x["item"], "passed": int(x["correct"]),
            "modality": "photo" if x["modality"] == "clinical_photo" else "diagram",
            "labeled": int(it.get("labeled", False)),
            "weak": int(bool(it.get("weak"))),
            "n_required": len(it.get("must_identify", [])),
        })
    return pd.DataFrame(recs)


def wide(df):
    return df.pivot(index="item", columns="model", values="passed").reindex(columns=MODELS)


def wilson(k, n, z=1.96):
    p = k / n
    d = 1 + z * z / n
    c = p + z * z / (2 * n)
    h = z * math.sqrt(p * (1 - p) / n + z * z / (4 * n * n))
    return ((c - h) / d * 100, (c + h) / d * 100)


def section_pairwise(W, L):
    items = W.index.to_numpy()
    mat = {m: W[m].to_numpy() for m in MODELS}
    # bootstrap pass rates (paired item resamples) for pairwise differences
    n = len(items)
    boot = {m: np.empty(B) for m in MODELS}
    idx = RNG.integers(0, n, size=(B, n))
    for m in MODELS:
        v = mat[m]
        boot[m] = v[idx].mean(axis=1) * 100

    pvals, recs = [], []
    for a, b in combinations(MODELS, 2):
        va, vb = mat[a], mat[b]
        b01 = int(np.sum((va == 1) & (vb == 0)))  # a correct, b wrong
        b10 = int(np.sum((va == 0) & (vb == 1)))  # a wrong, b correct
        both1 = int(np.sum((va == 1) & (vb == 1)))
        both0 = int(np.sum((va == 0) & (vb == 0)))
        res = mcnemar([[both1, b01], [b10, both0]], exact=True)
        diff = (va.mean() - vb.mean()) * 100
        d_boot = boot[a] - boot[b]
        lo, hi = np.percentile(d_boot, [2.5, 97.5])
        recs.append({"a": a, "b": b, "diff": diff, "lo": lo, "hi": hi,
                     "b01": b01, "b10": b10, "p": float(res.pvalue)})
        pvals.append(float(res.pvalue))

    # Holm correction across the 15 comparisons
    order = np.argsort(pvals)
    m = len(pvals)
    holm = [0.0] * m
    running = 0.0
    for rank, i in enumerate(order):
        adj = min(1.0, (m - rank) * pvals[i])
        running = max(running, adj)
        holm[i] = running
    for r, h in zip(recs, holm):
        r["p_holm"] = h

    L += ["## 1. Pairwise model comparisons (paired by item)", "",
          "McNemar exact test on the 90 paired items, Holm-corrected across the 15 comparisons; "
          "item-level bootstrap 95% interval for each pass-rate difference (10,000 resamples).", "",
          "| Comparison | Δ pass rate (95% boot CI) | discordant (a/b) | McNemar p (Holm) | sig |",
          "|---|---:|:---:|---:|:---:|"]
    for r in sorted(recs, key=lambda x: -abs(x["diff"])):
        sig = "yes" if r["p_holm"] < 0.05 else "no"
        L.append(f"| {r['a']} vs {r['b']} | {r['diff']:+.0f} [{r['lo']:+.0f}, {r['hi']:+.0f}] | "
                 f"{r['b01']}/{r['b10']} | {r['p_holm']:.3f} | {sig} |")
    L += [""]
    return recs


def section_mixed(df, L):
    d = df.copy()
    d["model"] = pd.Categorical(d["model"], categories=MODELS)  # Gemini = reference
    # random intercept per item; population fixed effects for model/modality/labeled/weak
    vc = {"item": "0 + C(item)"}
    res = BinomialBayesMixedGLM.from_formula(
        "passed ~ C(model) + C(modality) + labeled + weak", vc, d).fit_vb()
    fe = res.fe_mean
    sd = res.fe_sd
    names = res.model.exog_names
    L += ["## 2. Mixed-effects logistic model (item as a random intercept)", "",
          "Bayesian binomial mixed GLM, random intercept per image, fixed effects for model "
          "(reference Gemini 3.1 Pro), modality (reference diagram), labeled, and weak-item flag. "
          "Odds ratios with 95% credible intervals.", "",
          "| Term | Odds ratio | 95% CrI |", "|---|---:|:---:|"]
    pretty = {"C(modality)[T.photo]": "Clinical photo (vs diagram)",
              "labeled": "Labeled (vs unlabeled)", "weak": "Weak item (vs not)"}
    for nm, m_, s_ in zip(names, fe, sd):
        if nm == "Intercept":
            continue
        label = pretty.get(nm, nm.replace("C(model)[T.", "").replace("]", " (vs Gemini)"))
        or_ = math.exp(m_)
        lo, hi = math.exp(m_ - 1.96 * s_), math.exp(m_ + 1.96 * s_)
        L.append(f"| {label} | {or_:.2f} | [{lo:.2f}, {hi:.2f}] |")
    L += [""]


def section_burden(df, L):
    # descriptive: pass rate by number of required points (pooled over models)
    g = df.groupby("n_required")["passed"].agg(["mean", "count"])
    L += ["## 3. Rubric burden (pass rate by number of required points)", "",
          "Each image's rubric lists `must_identify` points; an item passes only if all are covered. "
          "Pooled over the six models:", "",
          "| Required points | Items | Model-rows | Pass rate |", "|---:|---:|---:|---:|"]
    items = {n: int(c / len(MODELS)) for n, c in g["count"].items()}
    for n, row in g.iterrows():
        L.append(f"| {n} | {items[n]} | {int(row['count'])} | {100 * row['mean']:.0f}% |")
    # GEE logistic: odds of pass per extra required point, item-clustered, controlling for model
    d = df.copy()
    d["model"] = pd.Categorical(d["model"], categories=MODELS)
    gee = smf.gee("passed ~ n_required + C(model)", "item", d,
                  family=sm.families.Binomial(), cov_struct=sm.cov_struct.Exchangeable()).fit()
    coef = gee.params["n_required"]
    se = gee.bse["n_required"]
    or_ = math.exp(coef)
    lo, hi = math.exp(coef - 1.96 * se), math.exp(coef + 1.96 * se)
    L += ["",
          f"Item-clustered logistic regression (GEE, controlling for model): each additional required "
          f"point multiplies the odds of passing by **{or_:.2f}** (95% CI [{lo:.2f}, {hi:.2f}], "
          f"p = {gee.pvalues['n_required']:.3f}).", ""]


def fig_pairwise(recs):
    M = np.full((len(MODELS), len(MODELS)), np.nan)
    sig = {}
    for r in recs:
        i, j = MODELS.index(r["a"]), MODELS.index(r["b"])
        M[i, j] = r["diff"]; M[j, i] = -r["diff"]
        sig[(i, j)] = r["p_holm"] < 0.05; sig[(j, i)] = r["p_holm"] < 0.05
    fig, ax = plt.subplots(figsize=(6.4, 5.2))
    im = ax.imshow(M, cmap="RdBu", vmin=-50, vmax=50)
    short = [{"Gemini 3.1 Pro": "Gemini", "Claude Opus 4.8": "Claude", "Qwen3.7 Plus": "Qwen",
              "GPT-5.5": "GPT", "GLM-4.6V": "GLM", "Llama 4 Maverick": "Llama"}[m] for m in MODELS]
    ax.set_xticks(range(len(MODELS))); ax.set_xticklabels(short, rotation=40, ha="right")
    ax.set_yticks(range(len(MODELS))); ax.set_yticklabels(short)
    for i in range(len(MODELS)):
        for j in range(len(MODELS)):
            if i == j:
                ax.text(j, i, "-", ha="center", va="center", color="#999")
            elif not np.isnan(M[i, j]):
                star = "*" if sig.get((i, j)) else ""
                ax.text(j, i, f"{M[i, j]:+.0f}{star}", ha="center", va="center", fontsize=9,
                        color="#111" if abs(M[i, j]) < 30 else "white")
    ax.set_title("Pairwise pass-rate difference (row − column), * = Holm p<0.05", fontsize=9)
    fig.colorbar(im, ax=ax, fraction=0.046, pad=0.04, label="Δ percentage points")
    fig.tight_layout()
    fig.savefig(ROOT / "paper/figures/pairwise.pdf")
    plt.close(fig)


def main():
    df = load()
    W = wide(df)
    L = ["# Paired statistics (primary judge)", "",
         "Beyond the per-model Wilson intervals in `leaderboard.md`, these analyses use the fact "
         "that all six models are scored on the same 90 images (paired by item).", ""]
    recs = section_pairwise(W, L)
    section_mixed(df, L)
    section_burden(df, L)
    (ROOT / "results/paired_stats.md").write_text("\n".join(L) + "\n")
    fig_pairwise(recs)
    nsig = sum(1 for r in recs if r["p_holm"] < 0.05)
    print(f"wrote results/paired_stats.md and paper/figures/pairwise.pdf "
          f"({nsig}/15 pairwise comparisons significant after Holm)")


if __name__ == "__main__":
    main()
