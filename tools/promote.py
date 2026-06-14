"""Promote kept curation images into the dataset at full resolution.

Reads the KEEP list, resolves each preview back to its Wikimedia Commons source,
downloads a high-res copy into data/images/, and writes data/worklist.json (the
input for ground-truth authoring). The downscaled curation/ copies were only for
the review widget; the dataset uses proper-resolution originals.
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

KEEP = """batch1/basic_anatomy_tooth.jpg batch1/toothdecay_blausen.png batch1/toothdecay_croatian.png
batch1/mini_implant_toothbrush.jpg batch1/implant_restoration.gif batch1/child_arches.jpg
batch1/malocclusion_classII.jpg batch1/aphthous_1.jpg batch1/aphthous_2.jpg batch1/calculus_1.jpg
batch1/calculus_mandibular.jpg batch2/human_tooth_diagram_en.jpg batch2/tooth_2_psf.jpg
batch2/tooth_section_numbered.jpg batch2/deciduous_permanent_teeth.jpg
batch2/permanent_maxillary_teeth_by_rokaya_yahia_june_2.jpg batch2/teeth_types_colored.jpg
batch2/depiction_of_a_periodontitis_patient.jpg batch2/moderate_periodontitis.jpg
batch2/periodontal_terms_diagram_gingival_recession.jpg batch2/gingival_sulcus.jpg
batch2/line_diagram_of_gingivitis.jpg batch2/periodontal_ligament_normal_pocket_depth.jpg
batch2/gingivitida.jpg batch2/smoothsurfacecaries02.jpg batch2/smoothsurfacecaries03.jpg
batch2/smoothsurfacecaries04.jpg batch2/smoothsurfacecaries05.jpg batch2/blausen_0864_toothdecay_ar.jpg
batch2/diagram_of_tooth_erosion.jpg batch2/ferruleeffectdentistry.jpg batch2/runningroom.jpg
batch2/zahnimplantat.jpg batch2/single_crown_implant.jpg batch2/blausen_0774_rootcanal.jpg
batch2/root_canal_illustration_molar.jpg batch2/gray1005.jpg batch2/human_tooth_ku.jpg
batch2/30partialendo.jpg batch2/overjet_overbite.jpg batch2/sever_crowding_of_teeth.jpg
batch2/leukoplakia.jpg batch2/nih_doc_16_homogenousleukoplakia.jpg
batch2/caries_periodontal_disease_calculus.jpg batch2/amalgam.jpg batch2/filling_amalgam.jpg
batch2/dental_restoration.jpg batch2/zmo0594_001.jpg batch2/zmo0594_006.jpg""".split()

B1_TITLE = {
    "basic_anatomy_tooth.jpg": "File:Basic anatomy tooth.jpg",
    "toothdecay_blausen.png": "File:Blausen 0864 ToothDecay.svg",
    "toothdecay_croatian.png": "File:Blausen 0864 ToothDecay Croatian HR.svg",
    "mini_implant_toothbrush.jpg": "File:Access toothbrush for use with Mini Dental Implants.jpg",
    "implant_restoration.gif": "File:Full-implant-restoration.gif",
    "child_arches.jpg": "File:110216ek08.jpg",
    "malocclusion_classII.jpg": "File:Zahnfehlstellung Angle-Klasse II-1.jpg",
    "aphthous_1.jpg": "File:Aphthous Stomatitis in the mouth.jpg",
    "aphthous_2.jpg": "File:Aphthous stomatitis.jpg",
    "calculus_1.jpg": "File:Calculus-2.jpg",
    "calculus_mandibular.jpg": "File:MandibularAnteriorCalculus.JPG",
}
B1_BUCKET = {
    "basic_anatomy_tooth.jpg": "anatomy", "toothdecay_blausen.png": "caries",
    "toothdecay_croatian.png": "caries", "mini_implant_toothbrush.jpg": "implant",
    "implant_restoration.gif": "implant", "child_arches.jpg": "ortho",
    "malocclusion_classII.jpg": "ortho", "aphthous_1.jpg": "pathology",
    "aphthous_2.jpg": "pathology", "calculus_1.jpg": "clinical_photo",
    "calculus_mandibular.jpg": "clinical_photo",
}


def strip(s: str) -> str:
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", s or "")).strip()


def slug(title: str) -> str:
    s = re.sub(r"^File:", "", title)
    s = re.sub(r"\.[a-zA-Z0-9]+$", "", s)
    return re.sub(r"[^a-z0-9]+", "_", s.lower()).strip("_")[:42]


def fetch_meta(titles: list[str]) -> dict[str, dict]:
    out = {}
    for i in range(0, len(titles), 40):
        chunk = titles[i:i + 40]
        params = {"action": "query", "format": "json", "prop": "imageinfo",
                  "iiprop": "url|extmetadata", "iiurlwidth": "1100", "titles": "|".join(chunk)}
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
    manifest = {m["file"]: m for m in json.loads((ROOT / "curation/batch2/manifest.json").read_text())}
    cands = {c["title"]: c for c in json.loads((ROOT / "data/candidates.json").read_text())}

    rows, titles = [], []
    for entry in KEEP:
        folder, fn = entry.split("/", 1)
        if folder == "batch1":
            title = B1_TITLE[fn]
            bucket = B1_BUCKET[fn]
        else:
            m = manifest[fn]
            title, bucket = m["title"], m["bucket"]
        titles.append(title)
        rows.append({"preview": entry, "title": title, "bucket": bucket})

    meta = fetch_meta(sorted(set(titles)))
    work, used = [], set()
    for r in rows:
        m = meta.get(r["title"], {})
        thumb = m.get("thumb")
        if not thumb:
            print(f"  no url for {r['title']}", file=sys.stderr)
            continue
        ext = re.search(r"\.(jpg|jpeg|png|gif)(?:$|\?)", thumb.lower())
        ext = ext.group(1) if ext else "jpg"
        if ext in ("gif", "png") and "/thumb/" in thumb:
            ext = "png"  # thumbs of svg/gif are png
        base = slug(r["title"])
        iid = base
        n = 2
        while iid in used:
            iid = f"{base}_{n}"; n += 1
        used.add(iid)
        fname = f"{iid}.{ext}"
        dst = IMG / fname
        try:
            req = urllib.request.Request(thumb, headers={"User-Agent": UA})
            dst.write_bytes(urllib.request.urlopen(req, timeout=60).read())
        except Exception as e:  # noqa: BLE001
            print(f"  download failed {fname}: {e}", file=sys.stderr)
            continue
        work.append({
            "id": iid,
            "image": f"data/images/{fname}",
            "image_abs": str(dst),
            "bucket": r["bucket"],
            "source": {"title": r["title"],
                       "url": f"https://commons.wikimedia.org/wiki/{urllib.parse.quote(r['title'].replace(' ', '_'))}",
                       "license": m.get("license", ""), "attribution": m.get("artist", "")},
            "caption_hint": m.get("desc", "") or (cands.get(r["title"], {}) or {}).get("desc", ""),
        })

    (ROOT / "data/worklist.json").write_text(json.dumps(work, indent=1))
    print(f"promoted {len(work)} images into data/images/, worklist -> data/worklist.json")
    for w in work:
        print(f"  {w['id']:<44} {w['bucket']:<14} {w['caption_hint'][:46]}")


if __name__ == "__main__":
    main()
