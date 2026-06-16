# Related work

This benchmark sits at the intersection of four lines of work: dental and oral multimodal
benchmarks, general medical vision-language evaluation, open-ended grading with model judges,
and data contamination in benchmark design. Each is summarized below, with the specific gap this
benchmark addresses.

## Dental and oral multimodal benchmarks

Dental multimodal benchmarking has grown quickly, but it is dominated by **radiographic**
interpretation. OralMLLM-Bench evaluates multimodal models across periapical, panoramic, and
lateral cephalometric radiographs over 27 clinically grounded tasks and reports a persistent gap
between models and clinicians [1]. Panoramic X-ray benchmarks and instruction datasets target the
same radiographic tier [2], and large oro-dental datasets pair tens of thousands of intraoral
images and radiographs with clinical records [3]. On-device and efficiency-oriented work such as
Pocket-Dentist benchmarks compact vision-language models for dental image understanding [4], while
text-centric efforts such as DentalBench measure factual dentistry knowledge rather than image
reading [5]. Dental multimodal generative models (for example OralGPT-Omni) are typically released
with their own evaluation suites [6].

The closest analog to this work evaluates **vision** rather than radiographs: a cross-sectional
study benchmarked six model endpoints across three vendors on oral and maxillofacial anatomy,
using landmark identification on 26 Netter atlas plates (260 labels). Its best endpoint reached
53.1% and the authors concluded that no model is reliable enough to serve as a stand-alone answer
key [7]. A separate line evaluates vision-language models for detecting and localizing carious and
non-carious lesions from intraoral photographs [8].

This benchmark differs from all of the above on three axes. (i) **Scope:** it deliberately
excludes radiographs and covers dental diagrams, illustrations, and clinical photographs across
roughly sixteen categories, so it measures general dental-image *reading* rather than radiographic
interpretation or a single narrow task such as landmark or lesion localization. (ii) **Task
format:** instead of multiple-choice, label-matching, or localization, each model writes a free-text
description that is graded against a clinician rubric, which is closer to how a clinician actually
queries these systems. (iii) **Openness and contamination-awareness:** the public images are openly
licensed and the dataset is fully released, and the design adds a leakage guard and a held-out
probe (below), which the atlas and lesion studies do not.

## General medical multimodal benchmarks

Outside dentistry, large medical vision-language benchmarks favor breadth and a question-answering
format. OmniMedVQA spans 12 imaging modalities and over 118,000 images, and finds that most
multimodal models only slightly exceed random guessing [9]. GMAI-MMBench is built from 284 datasets
across 38 modalities in a visual-question-answering format; even GPT-4o reaches only 53.96%,
underscoring how far general medical vision is from solved [10]. These suites are valuable for
coverage, but their closed QA format rewards option elimination and does not test whether a model
can produce a clinically faithful free-text reading of a single image, which is the gap this
benchmark targets at a deliberately small, clinician-authored scale.

## Open-ended grading and LLM-as-a-judge

Grading free-text answers at scale relies on model judges. The LLM-as-a-judge paradigm was
established by MT-Bench and Chatbot Arena, which showed strong agreement between model and human
preferences while documenting failure modes [11]. Subsequent work catalogs systematic judge biases
(position, verbosity, self-preference, style) and bias-mitigation strategies [12], and recent
surveys consolidate the methodology and its limits [13]. Two findings motivate this benchmark's
design directly: absolute judge scores are model-dependent and should be reported with an agreement
statistic, and **multi-judge consensus** improves reliability over a single judge. Accordingly,
every description here is graded by two independent judges from different vendors, each shown the
image plus the clinician rubric, and judge agreement is reported (Cohen's kappa 0.65) rather than
assumed. The benchmark also ships the full per-row judge verdicts and a clinician worklist of every
judge disagreement, so the judge layer is auditable rather than a black box.

## Contamination and held-out evaluation

Because the public images are openly licensed and crawlable, training-data exposure is a real
threat to validity. Benchmark contamination is widespread and inflates reported performance through
memorization rather than generalization, a problem documented across mainstream NLP benchmarks and
surveyed from static to dynamic evaluation [14, 17]. Mitigations include inference-time
decontamination and rewriting of leaked items [15], and methods that quantify the effect of test-set
contamination on generative evaluations [16]. This benchmark adopts two guards. First, a **leakage
guard going in:** each model receives the image only, with the caption stripped and no tools or web
access, so a high score cannot come from recovering a memorized caption. Second, a **transformed
public control item** (a flipped-and-cropped copy of one public image) is a sanity check on
exact-image recognition. This is a control, not a contamination measurement: a definitive
contamination test requires a held-out set of non-public images matched in content and difficulty to
the public set, which is identified here as the central item of future work.

## Positioning

In one sentence: existing dental multimodal benchmarks are mostly large, radiograph-centric, and
question-answering based, whereas this is a small, clinician-authored, fully public benchmark of
non-radiographic dental image *reading*, graded by two grounded independent judges, with an explicit
leakage guard and a transformed-control sanity check. It is complementary to OralMLLM-Bench and the
oro-dental datasets on the radiographic side, and to OmniMedVQA and GMAI-MMBench on the
general-medical side, filling the specific gap of open-ended, contamination-aware evaluation of how
faithfully a model reads a dental diagram or clinical photograph.

## References

1. R. Wang, S. Zhou, J. Wang, W. Xie, X. Che. *OralMLLM-Bench: Evaluating Cognitive Capabilities of Multimodal Large Language Models in Dental Practice.* arXiv:2605.01333. https://arxiv.org/abs/2605.01333
2. *Towards Better Dental AI: A Multimodal Benchmark and Instruction Dataset for Panoramic X-ray Analysis.* arXiv:2509.09254. https://huggingface.co/papers/2509.09254
3. *A benchmark multimodal oro-dental dataset for large vision-language models.* arXiv:2511.04948. https://arxiv.org/abs/2511.04948
4. *Pocket-Dentist: On-Device Dental Image Understanding via Efficient Multimodal Large Language Models.* arXiv:2605.29299. https://arxiv.org/abs/2605.29299
5. *DentalBench: Benchmarking and Advancing LLMs Capability for Bilingual Dentistry Understanding.* arXiv:2508.20416. https://arxiv.org/abs/2508.20416
6. *OralGPT-Omni: A Versatile Dental Multimodal Large Language Model.* arXiv:2511.22055. https://arxiv.org/abs/2511.22055
7. *Benchmarking large-language-model vision capabilities in oral and maxillofacial anatomy: A cross-sectional study.* PMC12561936. https://pmc.ncbi.nlm.nih.gov/articles/PMC12561936/
8. *Comparative Evaluation of Vision-Language Models for Detecting and Localizing Dental Lesions from Intraoral Images.* PMC12842643. https://pmc.ncbi.nlm.nih.gov/articles/PMC12842643/
9. Y. Hu et al. *OmniMedVQA: A New Large-Scale Comprehensive Evaluation Benchmark for Medical LVLM.* arXiv:2402.09181. https://arxiv.org/abs/2402.09181
10. P. Chen et al. *GMAI-MMBench: A Comprehensive Multimodal Evaluation Benchmark Towards General Medical AI.* OpenReview. https://openreview.net/forum?id=K6b8LCXBeQ
11. L. Zheng et al. *Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena.* arXiv:2306.05685. https://arxiv.org/abs/2306.05685
12. *Judging the Judges: A Systematic Evaluation of Bias Mitigation Strategies in LLM-as-a-Judge Pipelines.* arXiv:2604.23178. https://arxiv.org/abs/2604.23178
13. *A survey on LLM-as-a-judge.* https://www.sciencedirect.com/science/article/pii/S2666675825004564
14. *Benchmarking Large Language Models Under Data Contamination: A Survey from Static to Dynamic Evaluation.* arXiv:2502.17521. https://arxiv.org/abs/2502.17521
15. *Inference-Time Decontamination: Reusing Leaked Benchmarks for Large Language Model Evaluation.* arXiv:2406.13990. https://arxiv.org/abs/2406.13990
16. *Quantifying the Effect of Test Set Contamination on Generative Evaluations.* arXiv:2601.04301. https://arxiv.org/abs/2601.04301
17. *Awesome Data Contamination* (paper list for LLM evaluation). https://github.com/lyy1994/awesome-data-contamination

*Citations were verified against live sources in June 2026. Identifiers and findings reflect what
those sources reported at the time of writing; confirm details before camera-ready submission.*
