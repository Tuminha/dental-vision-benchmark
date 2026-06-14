"""OpenRouter vision client with the leakage guard built in.

Adapted from the flagship dental text benchmark's OpenRouterClient. Two changes
matter for a *vision* benchmark:

1. The image is sent inline as a base64 data URI, so no external URL is fetched
   at inference time.
2. No ``tools`` are passed, so the model cannot call web search to recover the
   image's original caption. Web-access leakage is therefore impossible by
   construction. (Training-data memorization is a separate problem, handled at
   the dataset level by a private/transformed control subset.)
"""
from __future__ import annotations

import base64
import mimetypes
import os
import time
from pathlib import Path

import requests

OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"

_HEADERS_EXTRA = {
    "HTTP-Referer": "https://periospot.com",
    "X-Title": "Periospot Dental Vision Benchmark",
}


def encode_image(path: str) -> tuple[str, str]:
    p = Path(path)
    mime = mimetypes.guess_type(p.name)[0] or "image/png"
    b64 = base64.b64encode(p.read_bytes()).decode("ascii")
    return mime, b64


class VisionClient:
    def __init__(self, api_key: str | None = None, timeout: int = 240):
        self.api_key = api_key or os.environ.get("OPENROUTER_API_KEY")
        if not self.api_key:
            raise RuntimeError("OPENROUTER_API_KEY not set (checked .env files and shell).")
        self.timeout = timeout

    def _headers(self) -> dict:
        return {"Authorization": f"Bearer {self.api_key}", "Content-Type": "application/json", **_HEADERS_EXTRA}

    def _post(self, payload: dict) -> dict:
        start = time.perf_counter()
        try:
            resp = requests.post(OPENROUTER_URL, headers=self._headers(), json=payload, timeout=self.timeout)
            latency = time.perf_counter() - start
            resp.raise_for_status()
            data = resp.json()
            choice = data["choices"][0]
            text = choice["message"]["content"]
            if not text:
                return {"text": None, "latency_s": round(latency, 3), "ok": False,
                        "error": f"empty content (finish_reason={choice.get('finish_reason')})"}
            return {"text": text, "latency_s": round(latency, 3), "ok": True, "error": None,
                    "provider": data.get("provider")}
        except Exception as e:  # noqa: BLE001 - capture every failure as data
            return {"text": None, "latency_s": round(time.perf_counter() - start, 3), "ok": False, "error": str(e)}

    def describe(self, model_id: str, prompt: str, image_path: str, temperature: float = 0.0) -> dict:
        """Show one image (no caption, no tools) and return the model's description."""
        mime, b64 = encode_image(image_path)
        payload = {
            "model": model_id,
            "messages": [{"role": "user", "content": [
                {"type": "text", "text": prompt},
                {"type": "image_url", "image_url": {"url": f"data:{mime};base64,{b64}"}},
            ]}],
            "temperature": temperature,
            "max_tokens": 1500,
            # No "tools" key on purpose: the model cannot browse. Leakage guard.
        }
        return self._post(payload)

    def complete(self, model_id: str, prompt: str, temperature: float = 0.0) -> dict:
        """Plain text completion, used by the rubric judge (no image needed)."""
        payload = {
            "model": model_id,
            "messages": [{"role": "user", "content": prompt}],
            "temperature": temperature,
            "max_tokens": 1200,
        }
        return self._post(payload)
