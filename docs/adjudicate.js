/* Blinded judge-adjudication page. Renders window.ADJUDICATE_DATA: for each of the 96 cases where
 * the two automated judges disagreed, the reviewer marks the model's description Pass or Fail
 * against the rubric, blind to model identity and to the automated verdicts. Progress persists in
 * localStorage (keyed per reviewer) so a 96-case pass survives a reload, and exports to send back. */
const ADATA = window.ADJUDICATE_DATA;
const REVIEW_TO = "cisco@periospot.com";
// FormSubmit alias for cisco@periospot.com (random string hides the real address). One click POSTs
// the adjudication here and FormSubmit emails it straight to Francisco's inbox.
const SUBMIT_ENDPOINT = "https://formsubmit.co/ajax/2286b89c84ce4b027be6e2e6e6f2dcf5";
const N = ADATA.rows.length;

const byId = (id) => document.getElementById(id);
const esc = (s) => String(s).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const today = new Date().toISOString().slice(0, 10);

let state = {};
ADATA.rows.forEach((r) => { state[r.rid] = { decision: null, note: "" }; });

const nameKey = () => (byId("vName").value.trim() || "reviewer").toLowerCase().replace(/\s+/g, "_");
const storageKey = () => `dvb-adjudication::${nameKey()}`;

function save() {
  try { localStorage.setItem(storageKey(), JSON.stringify({ state, attest: byId("vAttest").checked })); } catch (e) { /* private mode */ }
  byId("vSaved").textContent = "saved";
  clearTimeout(save._t);
  save._t = setTimeout(() => { byId("vSaved").textContent = ""; }, 1200);
}

function restore() {
  let saved = null;
  try { saved = JSON.parse(localStorage.getItem(storageKey()) || "null"); } catch (e) { /* ignore */ }
  state = {};
  ADATA.rows.forEach((r) => { state[r.rid] = { decision: null, note: "" }; });
  if (saved && saved.state) {
    ADATA.rows.forEach((r) => { if (saved.state[r.rid]) state[r.rid] = saved.state[r.rid]; });
    byId("vAttest").checked = !!saved.attest;
  }
  applyStateToDom();
  updateCounts();
  gate();
}

function li(arr) {
  if (!arr || !arr.length) return "<li><em>none</em></li>";
  return arr.map((x) => `<li>${esc(x)}</li>`).join("");
}

function render() {
  byId("vTotal").textContent = N;
  byId("vList").innerHTML = ADATA.rows.map((r, i) => `
    <article class="v-card undecided" id="card-${esc(r.rid)}">
      <div>
        <a href="${esc(r.image)}" target="_blank" rel="noopener">
          <img class="v-thumb" loading="lazy" src="${esc(r.image)}" alt="Dental image, case ${i + 1}">
        </a>
        <span class="v-id">Case ${i + 1} of ${N} · ${esc(r.rid)} · ${esc(r.modality)}</span>
      </div>
      <div class="v-rubric">
        <h3>Clinical answer key</h3>
        <dl>
          <dt>Must identify</dt><dd><ul style="margin:0;padding-left:1.1em">${li(r.must_identify)}</ul></dd>
          <dt>Must avoid</dt><dd><ul style="margin:0;padding-left:1.1em">${li(r.must_avoid)}</ul></dd>
        </dl>
        <p class="v-cap">${esc(r.caption)}</p>
        <div class="v-desc">
          <span class="lbl">AI model's description (identity hidden) — judge this</span>
          <p>${esc(r.description) || "<em>(empty response)</em>"}</p>
        </div>
        <div class="v-choice" role="group" aria-label="Verdict for case ${i + 1}">
          <button data-id="${esc(r.rid)}" data-v="pass" aria-pressed="false">Pass ✓</button>
          <button data-id="${esc(r.rid)}" data-v="fail" aria-pressed="false">Fail ✗</button>
        </div>
        <textarea class="v-note" id="note-${esc(r.rid)}" placeholder="Reason (optional): which point was missed, or which must-avoid error was made?"></textarea>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".v-choice button").forEach((b) => {
    b.addEventListener("click", () => choose(b.dataset.id, b.dataset.v));
  });
  document.querySelectorAll(".v-note").forEach((t) => {
    t.addEventListener("input", () => { state[t.id.replace("note-", "")].note = t.value; save(); });
  });
}

function applyCard(rid) {
  const d = state[rid].decision;
  const card = byId(`card-${rid}`);
  card.classList.toggle("done-pass", d === "pass");
  card.classList.toggle("done-fail", d === "fail");
  card.classList.toggle("undecided", d === null);
  card.querySelectorAll(".v-choice button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.v === d)));
  const note = byId(`note-${rid}`);
  note.classList.toggle("show", d !== null);
  note.value = state[rid].note || "";
}

function applyStateToDom() {
  ADATA.rows.forEach((r) => applyCard(r.rid));
}

function choose(rid, v) {
  state[rid].decision = v;
  applyCard(rid);
  updateCounts();
  gate();
  save();
}

function updateCounts() {
  const vals = Object.values(state);
  const nPass = vals.filter((d) => d.decision === "pass").length;
  const nFail = vals.filter((d) => d.decision === "fail").length;
  const decided = nPass + nFail;
  byId("vPass").textContent = nPass;
  byId("vFail").textContent = nFail;
  byId("vDecided").textContent = decided;
  byId("vProgBar").style.width = `${(100 * decided) / N}%`;
}

function decidedCount() {
  return Object.values(state).filter((d) => d.decision !== null).length;
}

function gate() {
  const ready = byId("vAttest").checked && byId("vName").value.trim() && decidedCount() === N;
  byId("vFinishBtn").disabled = !ready;
}

function buildSummary() {
  const name = byId("vName").value.trim() || "(unnamed)";
  const affil = byId("vAffil").value.trim() || "(no affiliation given)";
  const decisions = ADATA.rows.map((r) => ({ rid: r.rid, ...state[r.rid] }));
  const nPass = decisions.filter((d) => d.decision === "pass").length;
  const nFail = decisions.filter((d) => d.decision === "fail").length;
  const lines = [
    "Dental Vision Benchmark — blinded judge adjudication",
    `Reviewer: ${name}`,
    `Affiliation: ${affil}`,
    `Date: ${today}`,
    `Data commit: ${ADATA.meta.data_commit.slice(0, 7)}`,
    `Cases adjudicated: ${decisions.length}`,
    `Verdicts: ${nPass} pass · ${nFail} fail`,
    "",
    "Per-case verdicts (rid: verdict — reason):",
    ...decisions.map((d) => `- ${d.rid}: ${d.decision}${d.note ? ` — ${d.note}` : ""}`),
  ];
  const text = lines.join("\n");
  const json = {
    benchmark: "dental-vision-benchmark",
    task: "blinded-judge-adjudication",
    reviewer: name, affiliation: affil, date: today,
    data_commit: ADATA.meta.data_commit,
    summary: { pass: nPass, fail: nFail, total: decisions.length },
    decisions,
  };
  return { text, json };
}

async function submitOnline() {
  const { text, json } = buildSummary();
  const btn = byId("vSubmit");
  const status = byId("vSubmitStatus");
  btn.disabled = true;
  status.className = "v-substatus";
  status.textContent = "Sending…";
  try {
    const res = await fetch(SUBMIT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        _subject: `Dental Vision Benchmark adjudication — ${json.reviewer}`,
        _captcha: "false",
        _template: "table",
        reviewer: json.reviewer,
        affiliation: json.affiliation,
        date: json.date,
        data_commit: json.data_commit,
        verdicts: `${json.summary.pass} pass / ${json.summary.fail} fail of ${json.summary.total}`,
        summary_text: text,
        results_json: JSON.stringify(json),
      }),
    });
    const out = await res.json().catch(() => ({}));
    if (res.ok && (out.success === "true" || out.success === true)) {
      btn.textContent = "Sent ✓";
      status.className = "v-substatus ok";
      status.textContent = "Sent to Francisco ✓ — thank you, you are done. You can close this tab.";
    } else {
      throw new Error(out.message || `HTTP ${res.status}`);
    }
  } catch (e) {
    btn.disabled = false;
    status.className = "v-substatus err";
    status.innerHTML = "Could not send automatically. Please use <b>Email instead</b>, <b>Copy summary</b>, or <b>Download JSON</b> below and send it to Francisco.";
  }
}

function finish() {
  const { text, json } = buildSummary();
  byId("vSummary").textContent = text;
  byId("vSubmit").onclick = submitOnline;
  const subject = `Dental Vision Benchmark adjudication — ${byId("vName").value.trim()}`;
  byId("vEmail").href = `mailto:${REVIEW_TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
  byId("vCopy").onclick = async () => {
    await navigator.clipboard.writeText(text);
    byId("vCopy").textContent = "Copied";
    setTimeout(() => { byId("vCopy").textContent = "Copy summary"; }, 1400);
  };
  byId("vDownload").onclick = () => {
    const blob = new Blob([JSON.stringify(json, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `dvb-adjudication-${nameKey()}.json`;
    a.click();
  };
  const panel = byId("vFinish");
  panel.classList.add("show");
  panel.scrollIntoView({ behavior: "smooth" });
}

function init() {
  // A small "saved" indicator lives next to the progress count.
  const saved = document.createElement("span");
  saved.id = "vSaved"; saved.className = "v-saved";
  byId("vDecided").parentElement.appendChild(saved);

  // Prefill reviewer from URL params (?name=...&affil=...) so each link is personal.
  const params = new URLSearchParams(location.search);
  byId("vName").value = params.get("name") || "";
  byId("vAffil").value = params.get("affil") || "";

  render();
  restore();

  byId("vName").addEventListener("input", () => { restore(); gate(); });
  byId("vAffil").addEventListener("input", save);
  byId("vAttest").addEventListener("change", () => { gate(); save(); });
  byId("vFinishBtn").addEventListener("click", finish);
}

init();
