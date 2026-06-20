/* Independent clinical validation page. Renders window.VALIDATE_DATA, lets a clinician
 * confirm (default) / flag / exclude each item, and exports the result to send back. */
const VDATA = window.VALIDATE_DATA;
const REVIEW_TO = "cisco@periospot.com";
// FormSubmit alias for cisco@periospot.com (random string hides the real address). One click POSTs
// the validation here and FormSubmit emails it straight to Francisco's inbox.
const SUBMIT_ENDPOINT = "https://formsubmit.co/ajax/2286b89c84ce4b027be6e2e6e6f2dcf5";

const byId = (id) => document.getElementById(id);
const esc = (s) => String(s).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const today = new Date().toISOString().slice(0, 10);

const state = {};
VDATA.items.forEach((it) => { state[it.id] = { decision: "fair", note: "" }; });

function li(arr) {
  if (!arr || !arr.length) return "<em>none</em>";
  return arr.map((x) => `<li>${esc(x)}</li>`).join("");
}

function render() {
  byId("vTotal").textContent = VDATA.items.length;
  byId("vReviewed").textContent = VDATA.items.length;
  byId("vList").innerHTML = VDATA.items.map((it, i) => `
    <article class="v-card" id="card-${esc(it.id)}">
      <div>
        <a href="${esc(it.image)}" target="_blank" rel="noopener">
          <img class="v-thumb" loading="lazy" src="${esc(it.image)}" alt="Dental image ${esc(it.id)}">
        </a>
        <span class="v-id">${i + 1}. ${esc(it.id)}</span>
      </div>
      <div class="v-rubric">
        <div class="chips">
          <span class="chip">${it.modality === "diagram" ? "diagram" : "clinical photo"}</span>
          <span class="chip">${it.labeled ? "labeled" : "unlabeled"}</span>
        </div>
        <dl>
          <dt>Must identify</dt><dd><ul style="margin:0;padding-left:1.1em">${li(it.must_identify)}</ul></dd>
          <dt>Must avoid</dt><dd><ul style="margin:0;padding-left:1.1em">${li(it.must_avoid)}</ul></dd>
        </dl>
        <p class="cap">${esc(it.caption)}</p>
        <div class="v-choice" role="group" aria-label="Decision for ${esc(it.id)}">
          <button data-id="${esc(it.id)}" data-v="fair" aria-pressed="true">Fair ✓</button>
          <button data-id="${esc(it.id)}" data-v="edit" aria-pressed="false">Needs edit</button>
          <button data-id="${esc(it.id)}" data-v="exclude" aria-pressed="false">Exclude</button>
        </div>
        <textarea class="v-note" id="note-${esc(it.id)}" placeholder="What would you change, and why? (clinical note)"></textarea>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".v-choice button").forEach((b) => {
    b.addEventListener("click", () => choose(b.dataset.id, b.dataset.v));
  });
  document.querySelectorAll(".v-note").forEach((t) => {
    t.addEventListener("input", () => { state[t.id.replace("note-", "")].note = t.value; });
  });
}

function choose(id, v) {
  state[id].decision = v;
  const card = byId(`card-${id}`);
  card.classList.toggle("flagged", v === "edit");
  card.classList.toggle("excluded", v === "exclude");
  card.querySelectorAll(".v-choice button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.v === v)));
  byId(`note-${id}`).classList.toggle("show", v !== "fair");
  updateCounts();
}

function updateCounts() {
  const vals = Object.values(state);
  byId("vFlagged").textContent = vals.filter((d) => d.decision === "edit").length;
  byId("vExcluded").textContent = vals.filter((d) => d.decision === "exclude").length;
}

function gate() {
  byId("vFinishBtn").disabled = !(byId("vAttest").checked && byId("vName").value.trim());
}

function buildSummary() {
  const name = byId("vName").value.trim() || "(unnamed)";
  const affil = byId("vAffil").value.trim() || "(no affiliation given)";
  const flagged = VDATA.items
    .map((it) => ({ id: it.id, ...state[it.id] }))
    .filter((d) => d.decision !== "fair");
  const nEdit = flagged.filter((d) => d.decision === "edit").length;
  const nExcl = flagged.filter((d) => d.decision === "exclude").length;
  const lines = [
    "Dental Vision Benchmark — independent clinical validation",
    `Reviewer: ${name}`,
    `Affiliation: ${affil}`,
    `Date: ${today}`,
    `Data commit: ${VDATA.meta.data_commit.slice(0, 7)}`,
    `Items reviewed: ${VDATA.items.length}`,
    `Decisions: ${VDATA.items.length - nEdit - nExcl} fair · ${nEdit} needs-edit · ${nExcl} excluded`,
    "",
    flagged.length ? "Flagged items:" : "All items confirmed as fair. No edits or exclusions.",
    ...flagged.map((d) => `- ${d.id} [${d.decision === "edit" ? "needs edit" : "exclude"}]: ${d.note || "(no note)"}`),
  ];
  const text = lines.join("\n");
  const json = {
    benchmark: "dental-vision-benchmark",
    reviewer: name, affiliation: affil, date: today,
    data_commit: VDATA.meta.data_commit,
    summary: { fair: VDATA.items.length - nEdit - nExcl, edit: nEdit, exclude: nExcl },
    decisions: VDATA.items.map((it) => ({ id: it.id, ...state[it.id] })),
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
        _subject: `Dental Vision Benchmark validation — ${json.reviewer}`,
        _captcha: "false",
        _template: "table",
        reviewer: json.reviewer,
        affiliation: json.affiliation,
        date: json.date,
        data_commit: json.data_commit,
        decisions: `${json.summary.fair} fair / ${json.summary.edit} needs-edit / ${json.summary.exclude} exclude`,
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
  const subject = `Dental Vision Benchmark validation — ${byId("vName").value.trim()}`;
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
    a.download = `dvb-validation-${(byId("vName").value.trim() || "reviewer").replace(/\s+/g, "_")}.json`;
    a.click();
  };
  const panel = byId("vFinish");
  panel.classList.add("show");
  panel.scrollIntoView({ behavior: "smooth" });
}

function init() {
  // Prefill the reviewer from URL params (?name=...&affil=...) so the page is reusable for any
  // independent reviewer; default to blank otherwise.
  const params = new URLSearchParams(location.search);
  byId("vName").value = params.get("name") || "";
  byId("vAffil").value = params.get("affil") || "";
  render();
  updateCounts();
  ["vAttest", "vName"].forEach((id) => byId(id).addEventListener("input", gate));
  byId("vAttest").addEventListener("change", gate);
  byId("vFinishBtn").addEventListener("click", finish);
  gate();
}

init();
