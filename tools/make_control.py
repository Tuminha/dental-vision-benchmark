"""Make a transformed control copy of a public image.

The control measures training-data memorization. A model that truly *reads* the
image should score the same on the control as on the original. A model that
recognized the original from its training data should drop on the transformed
copy. The transform (horizontal flip + a small center crop) defeats exact-pixel
recognition while leaving the clinical content unchanged.
"""
from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image

SRC = Path("data/images/tooth_anatomy.png")
DST = Path("data/images/tooth_anatomy_control.png")
CROP = 0.12  # fraction trimmed off each side


def main() -> None:
    img = Image.open(SRC).convert("RGB")
    w, h = img.size
    dx, dy = int(w * CROP / 2), int(h * CROP / 2)
    img = img.crop((dx, dy, w - dx, h - dy))            # center crop
    img = img.transpose(Image.FLIP_LEFT_RIGHT)          # horizontal flip
    img.save(DST)
    print(f"wrote {DST} ({img.size[0]}x{img.size[1]}) from {SRC}")


if __name__ == "__main__":
    sys.exit(main())
