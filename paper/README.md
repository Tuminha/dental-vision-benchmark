# Manuscript (preprint draft)

Draft preprint for the Dental Vision Benchmark.

- `main.tex` — the manuscript (LaTeX, `article` class, inline bibliography).
- `main.pdf` — compiled output.
- `figures/` — generated from the committed data by `tools/build_figures.py`
  (`accuracy_by_model.pdf`, `task_split.pdf`, `flow.pdf`).
- `related_work.md` — the longer, cited related-work notes the section is distilled from.

## Build

```bash
python3 tools/build_figures.py    # regenerate figures from results (needs matplotlib + cairosvg)
cd paper && tectonic main.tex     # compile main.pdf
```

All numbers correspond to the pinned data commit `5ccc42f`.

## Before submission (author review needed)

This is a complete draft, not camera-ready. Decide / check the following first:

1. **Authorship.** Drafted with F. Teixeira Barbosa and D. Robles Cantero (who performed the
   independent validation). Add Aritza Brizuela-Velasco, or others, if they contribute.
2. **Affiliations / emails.** Confirm the title-block affiliations and contact addresses.
3. **Contamination probe.** The public draft frames a definitive held-out study as future work
   and does **not** disclose the exploratory private-figure probe (consistent with the rest of
   the public repo); its full null-result analysis stays in the gitignored
   `data/private/comparison.md`. If you want that exploratory probe and its null result reported
   in the manuscript (aggregate only, no images), it can be added back.
4. **References.** A few entries (oro-dental dataset, the anatomy study, the contamination
   survey) carry title and identifier but not a full author list; complete these for camera-ready.
5. **Clinical claims.** Final read of the clinical wording in the Introduction, Methods, and
   Discussion.
6. **Venue.** Drafted as an arXiv-style preprint; adapt the template if targeting a specific journal.
