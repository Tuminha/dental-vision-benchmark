"""Generate the manuscript figures (paper/figures/*.pdf) from the committed data.

- accuracy_by_model.pdf : pass rate per model with 95% Wilson intervals (forest plot)
- task_split.pdf        : pass rate per model x task split (diagram/photo/labeled/unlabeled) heatmap
- flow.pdf              : the pipeline diagram (converted from assets/flow.svg if a converter exists)

Usage: python tools/build_figures.py
"""
from __future__ import annotations

import json
import math
from pathlib import Path

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle

ROOT = Path(__file__).resolve().parents[1]
FIG = ROOT / "paper/figures"
FIG.mkdir(parents=True, exist_ok=True)

MODELS = ["Gemini 3.1 Pro", "Claude Opus 4.8", "Qwen3.7 Plus", "GPT-5.5", "GLM-4.6V", "Llama 4 Maverick"]
COLOR = {"Gemini 3.1 Pro": "#3B82C4", "Claude Opus 4.8": "#C9743A", "Qwen3.7 Plus": "#6D5BD0",
         "GPT-5.5": "#2E9E96", "GLM-4.6V": "#B07A3C", "Llama 4 Maverick": "#4A6FA5"}
plt.rcParams.update({"font.family": "DejaVu Sans", "font.size": 10, "svg.fonttype": "none",
                     "axes.spines.top": False, "axes.spines.right": False})


def wilson(k, n, z=1.96):
    if not n:
        return (0.0, 0.0)
    p = k / n
    d = 1 + z * z / n
    c = p + z * z / (2 * n)
    h = z * math.sqrt(p * (1 - p) / n + z * z / (4 * n * n))
    return ((c - h) / d * 100, (c + h) / d * 100)


def load():
    rows = [json.loads(l) for l in open(ROOT / "results/results.jsonl")]
    items = {x["id"]: x for x in json.loads((ROOT / "data/items.json").read_text())["items"]}
    return [x for x in rows if not x["is_control"]], items


def acc(rows):
    return 100 * sum(x["correct"] for x in rows) / len(rows) if rows else 0.0


def fig_accuracy(main, _items):
    stats = []
    for m in MODELS:
        mr = [x for x in main if x["model"] == m]
        k, n = sum(x["correct"] for x in mr), len(mr)
        lo, hi = wilson(k, n)
        stats.append((m, 100 * k / n, lo, hi, k, n))
    stats.sort(key=lambda s: s[1])  # ascending so best ends on top
    fig, ax = plt.subplots(figsize=(6.6, 3.4))
    ys = range(len(stats))
    for y, (m, a, lo, hi, k, n) in zip(ys, stats):
        ax.plot([lo, hi], [y, y], color=COLOR[m], lw=2.2, solid_capstyle="round", zorder=2)
        ax.scatter([a], [y], s=64, color=COLOR[m], zorder=3, edgecolor="white", linewidth=1)
        ax.text(hi + 1.5, y, f"{a:.0f}%  [{lo:.0f}, {hi:.0f}]   {k}/{n}", va="center", fontsize=8.5)
    ax.set_yticks(list(ys))
    ax.set_yticklabels([s[0] for s in stats])
    ax.set_xlim(10, 100)
    ax.set_xlabel("Pass rate (%) with 95% Wilson interval")
    ax.axvline(50, color="#d1d5db", lw=0.8, ls=":", zorder=1)
    fig.tight_layout()
    fig.savefig(FIG / "accuracy_by_model.pdf")
    plt.close(fig)


def fig_split(main, items):
    lab_of = lambda x: items.get(x["item"], {}).get("labeled", False)
    cols = [("Diagrams", lambda x: x["modality"] == "diagram"),
            ("Clinical\nphotos", lambda x: x["modality"] == "clinical_photo"),
            ("Labeled", lab_of),
            ("Unlabeled", lambda x: not lab_of(x))]
    order = sorted(MODELS, key=lambda m: acc([x for x in main if x["model"] == m]), reverse=True)
    grid = [[acc([x for x in main if x["model"] == m and pred(x)]) for _, pred in cols] for m in order]
    fig, ax = plt.subplots(figsize=(6.0, 3.6))
    im = ax.imshow(grid, cmap="RdYlGn", vmin=15, vmax=85, aspect="auto")
    ax.set_xticks(range(len(cols)))
    ax.set_xticklabels([c[0] for c in cols])
    ax.set_yticks(range(len(order)))
    ax.set_yticklabels(order)
    for i in range(len(order)):
        for j in range(len(cols)):
            ax.text(j, i, f"{grid[i][j]:.0f}", ha="center", va="center", fontsize=10,
                    color="#111" if 30 <= grid[i][j] <= 70 else "white", fontweight="bold")
    ax.set_xticks([x - 0.5 for x in range(1, len(cols))], minor=True)
    ax.set_yticks([y - 0.5 for y in range(1, len(order))], minor=True)
    ax.grid(which="minor", color="white", lw=2)
    ax.tick_params(which="minor", length=0)
    cb = fig.colorbar(im, ax=ax, fraction=0.046, pad=0.04)
    cb.set_label("Pass rate (%)")
    fig.tight_layout()
    fig.savefig(FIG / "task_split.pdf")
    plt.close(fig)


def fig_flow():
    try:
        import cairosvg
        cairosvg.svg2pdf(url=str(ROOT / "assets/flow.svg"), write_to=str(FIG / "flow.pdf"))
        return "flow.pdf written (cairosvg)"
    except Exception as e:  # noqa: BLE001
        return f"flow.pdf SKIPPED ({type(e).__name__}); include assets/flow.svg manually"


def main():
    main_rows, items = load()
    fig_accuracy(main_rows, items)
    fig_split(main_rows, items)
    flow = fig_flow()
    print("wrote accuracy_by_model.pdf, task_split.pdf |", flow)


if __name__ == "__main__":
    main()
