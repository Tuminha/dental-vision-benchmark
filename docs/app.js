/* Dental Vision Benchmark — interactive report.
 * Renders window.REPORT_DATA (built by tools/build_pages.py) into the editorial
 * stat-led layout, with scroll-reveal count-ups, animated bars and heat cells.
 */
const data = window.REPORT_DATA;

const state = { split: "overall", selectedModel: null, query: "" };

const SPLIT_FIELD = { overall: null, diagram: "diagram", photo: "photo", labeled: "labeled", unlabeled: "unlabeled" };

const fmtPct = (value) => `${Number(value).toFixed(1)}%`;
const byId = (id) => document.getElementById(id);
const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealedSections = new Set();
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

function animateCount(el) {
  const target = parseFloat(el.dataset.count);
  const decimals = parseInt(el.dataset.decimals || "0", 10);
  const suffix = el.dataset.suffix || "";
  const done = () => { el.textContent = target.toFixed(decimals) + suffix; };
  if (reduceMotion) { done(); return; }
  const start = performance.now();
  const tick = (now) => {
    const t = Math.min((now - start) / 700, 1);
    el.textContent = (target * easeOutCubic(t)).toFixed(decimals) + suffix;
    if (t < 1) requestAnimationFrame(tick); else done();
  };
  requestAnimationFrame(tick);
}

function revealSection(container) {
  revealedSections.add(container.id);
  if (container.classList.contains("infographic")) container.classList.add("is-in");
  container.querySelectorAll("[data-count]").forEach(animateCount);
  container.querySelectorAll(".bar-fill[data-w]").forEach((bar, i) => {
    bar.style.transitionDelay = reduceMotion ? "0ms" : `${Math.min(i * 60, 420)}ms`;
    bar.style.width = `${bar.dataset.w}%`;
  });
  container.querySelectorAll(".heat").forEach((cell, i) => {
    cell.style.transitionDelay = reduceMotion ? "0ms" : `${Math.min(i * 14, 600)}ms`;
    cell.classList.add("is-in");
  });
}

const sectionObserver = ("IntersectionObserver" in window && !reduceMotion)
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        sectionObserver.unobserve(entry.target);
        revealSection(entry.target);
      });
    }, { threshold: 0.18 })
  : null;

function armSection(container) {
  if (!container || revealedSections.has(container.id)) return;
  if (!sectionObserver) { revealSection(container); return; }
  sectionObserver.observe(container);
}

function initScrollEffects() {
  const progress = byId("scrollProgress");
  const figure = document.querySelector(".hero-figure");
  const drift = !reduceMotion && window.matchMedia("(min-width: 60rem)").matches;
  if (reduceMotion) return;
  let ticking = false;
  const apply = () => {
    ticking = false;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress && max > 0) progress.style.transform = `scaleX(${Math.min(window.scrollY / max, 1)})`;
    if (figure && drift) {
      const yv = Math.min(window.scrollY, 820);
      figure.style.transform = `translateY(${(yv * 0.22).toFixed(1)}px)`;
      figure.style.opacity = Math.max(1 - yv / 760, 0).toFixed(3);
    }
  };
  window.addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(apply); }
  }, { passive: true });
  apply();
}

function viewOf(model, split) {
  const field = SPLIT_FIELD[split];
  if (!field) return { acc: model.accuracy, correct: model.correct, total: model.total };
  const s = model[field];
  return { acc: s.acc, correct: s.correct, total: s.total };
}

function filteredModels() {
  return data.models
    .map((model) => ({ ...model, view: viewOf(model, state.split) }))
    .sort((a, b) => b.view.acc - a.view.acc || b.accuracy - a.accuracy);
}

function init() {
  byId("dataCommit").textContent = data.meta.data_commit.slice(0, 7);
  byId("footVerdicts").textContent = data.overall.judge_verdicts.toLocaleString();
  renderHeroFigure();
  renderMetrics();
  buildControls();
  renderAll();
  armSection(byId("infographicImg"));
  initScrollEffects();
  byId("imageSearch").addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase();
    renderImages();
  });
  byId("copyCitation").addEventListener("click", async () => {
    await navigator.clipboard.writeText(byId("citationText").textContent);
    byId("copyCitation").textContent = "Copied";
    setTimeout(() => { byId("copyCitation").textContent = "Copy BibTeX"; }, 1400);
  });
}

function renderHeroFigure() {
  const el = byId("heroFigure");
  const target = data.overall.top_score ?? parseFloat(el.dataset.target);
  if (reduceMotion) { el.textContent = target.toFixed(1); return; }
  const start = performance.now();
  const tick = (now) => {
    const t = Math.min((now - start) / 520, 1);
    el.textContent = (target * easeOutCubic(t)).toFixed(1);
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function renderMetrics() {
  const o = data.overall;
  const items = [
    [o.models, "vision models", 0, ""],
    [o.images, "dental images", 0, ""],
    [o.judge_verdicts, "judge verdicts", 0, ""],
    [o.kappa, "judge agreement κ", 2, ""],
  ];
  byId("metricGrid").innerHTML = items.map(([value, label, dec, suf]) => `
    <div class="metric">
      <strong data-count="${value}" data-decimals="${dec}" data-suffix="${suf}">0</strong>
      <span>${label}</span>
    </div>
  `).join("");
  armSection(byId("metricGrid"));
}

function buildControls() {
  const options = [["overall", "Overall"], ...data.splits.map((s) => [s.id, s.label])];
  const select = byId("splitFilter");
  select.innerHTML = options.map(([value, label]) => `<option value="${value}">${escapeHtml(label)}</option>`).join("");
  select.addEventListener("change", (event) => { state.split = event.target.value; renderAll(); });
}

function renderAll() {
  if (!state.selectedModel || !data.models.some((m) => m.model === state.selectedModel)) {
    state.selectedModel = data.models[0]?.model;
  }
  renderLeaderboard();
  renderModelDetail();
  renderMatrix();
  renderImages();
  renderJudges();
}

function renderLeaderboard() {
  const rows = filteredModels();
  if (!rows.some((m) => m.model === state.selectedModel)) state.selectedModel = rows[0]?.model;
  const revealed = revealedSections.has("leaderboardRows");
  byId("leaderboardRows").innerHTML = rows.map((model) => `
    <button class="leader-row ${model.model === state.selectedModel ? "is-active" : ""}" type="button" data-model="${escapeHtml(model.model)}">
      <span class="model-name">
        <img class="logo" src="${escapeHtml(model.logo)}" alt="${escapeHtml(model.provider)} logo">
        <span>
          <strong>${escapeHtml(model.model)}</strong>
          <span>${escapeHtml(model.provider)}</span>
        </span>
      </span>
      <span class="bar-track" aria-hidden="true">
        <span class="bar-fill" data-w="${model.view.acc}" style="width:${revealed ? model.view.acc : 0}%; background:${model.color}"></span>
      </span>
      <span class="score">
        <strong>${fmtPct(model.view.acc)}</strong>
        <span>${model.view.correct}/${model.view.total}</span>
      </span>
    </button>
  `).join("");
  document.querySelectorAll(".leader-row").forEach((row) => {
    row.addEventListener("click", () => {
      state.selectedModel = row.dataset.model;
      renderLeaderboard();
      renderModelDetail();
    });
  });
  armSection(byId("leaderboardRows"));
}

function selectedModel() {
  return data.models.find((m) => m.model === state.selectedModel) || data.models[0];
}

function renderModelDetail() {
  const m = selectedModel();
  const ctrl = `${m.control.original ? "PASS" : "fail"} → ${m.control.transformed ? "PASS" : "fail"}`;
  byId("modelDetail").innerHTML = `
    <div class="model-name">
      <img class="logo" src="${escapeHtml(m.logo)}" alt="${escapeHtml(m.provider)} logo">
      <span>
        <strong>${escapeHtml(m.model)}</strong>
        <span>${escapeHtml(m.model_id)}</span>
      </span>
    </div>
    <div class="detail-list">
      <div><span>Pass rate</span><strong>${fmtPct(m.accuracy)} (${m.correct}/${m.total})</strong></div>
      <div><span>95% Wilson CI</span><strong>${m.ci_low.toFixed(1)}–${m.ci_high.toFixed(1)}%</strong></div>
      <div><span>Diagrams</span><strong>${fmtPct(m.diagram.acc)}</strong></div>
      <div><span>Clinical photos</span><strong>${fmtPct(m.photo.acc)}</strong></div>
      <div><span>Labeled / unlabeled</span><strong>${fmtPct(m.labeled.acc)} / ${fmtPct(m.unlabeled.acc)}</strong></div>
      <div><span>Modality ID</span><strong>${fmtPct(m.modality_acc)}</strong></div>
      <div><span>Secondary judge</span><strong>${fmtPct(m.secondary_accuracy)}</strong></div>
      <div><span>Mean latency</span><strong>${m.latency.toFixed(1)} s</strong></div>
      <div><span>Control (orig → transformed)</span><strong>${ctrl}</strong></div>
    </div>
  `;
}

function heatColor(value) {
  if (value >= 70) return "#2e7d6f";
  if (value >= 55) return "#5a9a8a";
  if (value >= 40) return "#bd8d3c";
  if (value >= 30) return "#c2703f";
  return "#b14a3a";
}

function renderMatrix() {
  const cols = data.splits;
  const revealed = revealedSections.has("splitMatrix");
  const headers = cols.map((s) => `<th>${escapeHtml(s.label)}</th>`).join("");
  const rows = data.models.map((model) => {
    const cells = cols.map((s) => {
      const acc = model[s.id].acc;
      return `<td><span class="heat ${revealed ? "is-in" : ""}" style="display:block; padding:9px; background:${heatColor(acc)}">${acc.toFixed(0)}</span></td>`;
    }).join("");
    return `<tr><td><span class="model-name"><img class="logo" src="${escapeHtml(model.logo)}" alt=""><strong>${escapeHtml(model.model)}</strong></span></td>${cells}</tr>`;
  }).join("");
  byId("splitMatrix").innerHTML = `
    <table class="matrix">
      <thead><tr><th>Model</th>${headers}</tr></thead>
      <tbody>${rows}</tbody>
    </table>`;
  armSection(byId("splitMatrix"));
}

function renderImages() {
  const q = state.query;
  const list = data.images.filter((im) =>
    !q || `${im.id} ${im.caption} ${im.modality}`.toLowerCase().includes(q));
  byId("imageGrid").innerHTML = list.map((im) => `
    <article class="image-card">
      <img class="thumb" loading="lazy" src="${escapeHtml(im.image)}" alt="Dental image: ${escapeHtml(im.id)}">
      <div class="chips">
        <span class="chip">${im.modality === "diagram" ? "diagram" : "clinical photo"}</span>
        <span class="chip">${im.labeled ? "labeled" : "unlabeled"}</span>
        <span class="chip">${im.correct}/${im.total} pass</span>
      </div>
      <p class="caption">${escapeHtml(im.caption.length > 140 ? im.caption.slice(0, 140) + "…" : im.caption)}</p>
      <div class="outcome-dots" aria-label="Model outcomes">
        ${im.outcomes.map((o) => `<span class="dot ${o.correct ? "correct" : "wrong"}" title="${escapeHtml(o.model)}: ${o.correct ? "pass" : "fail"}" aria-label="${escapeHtml(o.model)} ${o.correct ? "pass" : "fail"}"></span>`).join("")}
      </div>
    </article>
  `).join("");
}

function renderJudges() {
  const j = data.judge_agreement;
  byId("judgeCards").innerHTML = `
    <div class="judge-card">
      <span class="chip">Verdict agreement</span>
      <strong data-count="${j.agreement_pct}" data-decimals="1" data-suffix="%">0%</strong>
      <span>Claude Opus 4.8 (primary) vs GPT-5.5 (secondary), per description</span>
    </div>
    <div class="judge-card">
      <span class="chip">Cohen's kappa</span>
      <strong data-count="${j.kappa}" data-decimals="2">0</strong>
      <span>Substantial agreement. Absolute pass rates are judge-dependent; the ranking is stable.</span>
    </div>`;
  armSection(byId("judgeCards"));

  const rows = j.per_model.map((p) => `
    <tr>
      <td>${escapeHtml(p.model)}</td>
      <td>${p.primary.toFixed(1)}%</td>
      <td>${p.secondary.toFixed(1)}%</td>
      <td>${p.delta >= 0 ? "+" : ""}${p.delta.toFixed(1)}</td>
    </tr>`).join("");
  byId("judgeTable").innerHTML = `
    <table class="judge-table">
      <thead><tr><th>Model</th><th>Primary (Opus)</th><th>Secondary (GPT-5.5)</th><th>Δ</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>`;
}

init();
