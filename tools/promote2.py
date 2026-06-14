"""Promote kept round-2 curation images into the dataset at full resolution.

Generalized version of promote.py driven by a curation manifest + a KEEP list.
Downloads high-res copies into data/images/ and writes data/worklist.json (input
for ground-truth authoring) plus an inline array for the authoring workflow.
"""
from __future__ import annotations

import json
import re
import sys
import urllib.parse
import urllib.request
from pathlib import Path

API = "https://commons.wikimedia.org/w/api.php"
UA = "dental-vision-benchmark/0.2 (research; cisco@periospot.com)"
ROOT = Path(__file__).resolve().parents[1]
IMG = ROOT / "data/images"
MANIFEST = ROOT / "curation/round2/manifest.json"

KEEP = """dental_quadrants.jpg diagram_illustrating_coronal_and_apical_follicle.jpg suunad.jpg
tooth_picturewlabels.jpg acute_necrotising_ulcerative_gingivitis.jpg dental_caries_cavity_2_cropped.jpg
dental_caries_cavity_1.jpg alveolprog.jpg erosive_lichen_planus.jpg lichen_planus_fig7.jpg
herpes_blisters_on_lips_in_a_47_year_old_woman_w.jpg bellingham_fluorosis_3.jpg
nankali_post_a_fractured_tooth.jpg wortel_fractuur.jpg prummelklammer.jpg
detached_dental_crown_flat_front.jpg treatment_steps_for_feldspathic_vm9_porcelain_cr.jpg
geographic_tongue.jpg temporomandibular_joint_number.jpg eb1911_mouth_and_salivary_glands.jpg
mouth_parotid_gland_nih_bioart_654.jpg new_nanocomposites_may_mean_more_durable_tooth_f.jpg
packable_composite_placed_in_a_lower_right_6_sim.jpg dental_veneer.jpg""".split()


def strip(s: str) -> str:
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", s or "")).strip()


def slug(title: str) -> str:
    s = re.sub(r"^File:", "", title)
    s = re.sub(r"\.[a-zA-Z0-9]+$", "", s)
    return re.sub(r"[^a-z0-9]+", "_", s.lower()).strip("_")[:42]


def fetch_meta(titles: list[str]) -> dict[str, dict]:
    out = {}
    for i in range(0, len(titles), 40):
        params = {"action": "query", "format": "json", "prop": "imageinfo",
                  "iiprop": "url|extmetadata", "iiurlwidth": "1100", "titles": "|".join(titles[i:i + 40])}
        req = urllib.request.Request(f"{API}?{urllib.parse.urlencode(params)}", headers={"User-Agent": UA})
        d = json.load(urllib.request.urlopen(req, timeout=40))
        for p in (d.get("query") or {}).get("pages", {}).values():
            ii = (p.get("imageinfo") or [{}])[0]
            ext = ii.get("extmetadata") or {}
            out[p.get("title", "")] = {
                "thumb": ii.get("thumburl") or ii.get("url"),
                "license": strip((ext.get("LicenseShortName") or {}).get("value", "")),
                "artist": strip((ext.get("Artist") or {}).get("value", "")) or "see source page",
                "desc": strip((ext.get("ImageDescription") or {}).get("value", ""))[:200],
            }
    return out


def main() -> None:
    IMG.mkdir(parents=True, exist_ok=True)
    # manifest: dedupe by file, last occurrence wins (matches the file actually on disk).
    man = {}
    for m in json.loads(MANIFEST.read_text()):
        man[m["file"]] = m

    titles = [man[f]["title"] for f in KEEP if f in man]
    meta = fetch_meta(sorted(set(titles)))

    work, used = [], set()
    for f in KEEP:
        if f not in man:
            print("  no manifest entry for", f, file=sys.stderr); continue
        title = man[f]["title"]
        m = meta.get(title, {})
        thumb = m.get("thumb")
        if not thumb:
            print("  no url for", title, file=sys.stderr); continue
        ex = re.search(r"\.(jpg|jpeg|png|gif)(?:$|\?)", thumb.lower())
        ext = ex.group(1) if ex else "jpg"
        if ext in ("png", "gif") and "/thumb/" in thumb:
            ext = "png"
        iid = slug(title)
        n = 2
        while iid in used:
            iid = f"{slug(title)}_{n}"; n += 1
        used.add(iid)
        fname = f"{iid}.{ext}"
        try:
            req = urllib.request.Request(thumb, headers={"User-Agent": UA})
            (IMG / fname).write_bytes(urllib.request.urlopen(req, timeout=60).read())
        except Exception as e:  # noqa: BLE001
            print("  download failed", fname, e, file=sys.stderr); continue
        work.append({
            "id": iid, "image": f"data/images/{fname}", "image_abs": str(IMG / fname),
            "bucket": man[f]["bucket"],
            "source": {"title": title,
                       "url": f"https://commons.wikimedia.org/wiki/{urllib.parse.quote(title.replace(' ', '_'))}",
                       "license": m.get("license", ""), "attribution": m.get("artist", "")},
            "caption_hint": m.get("desc", "") or man[f]["desc"],
        })

    (ROOT / "data/worklist.json").write_text(json.dumps(work, indent=1))
    print(f"promoted {len(work)} images into data/images/, worklist -> data/worklist.json\n")
    inline = [{"id": w["id"], "image": w["image_abs"], "hint": w["caption_hint"][:110], "bucket": w["bucket"]} for w in work]
    print("INLINE=" + json.dumps(inline))


if __name__ == "__main__":
    main()
