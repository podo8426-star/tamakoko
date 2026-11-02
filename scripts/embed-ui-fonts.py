#!/usr/bin/env python3
"""Subset Neo둥근모 Pro / DNF BitBit and embed into <img> SVGs."""
from __future__ import annotations

import base64
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
FONTS = ROOT / "assets" / "fonts"
ASSETS = ROOT / "assets"
sys.path.insert(0, str(ROOT / ".pydeps"))

from fontTools.subset import Options, Subsetter  # noqa: E402
from fontTools.ttLib import TTFont  # noqa: E402

MARKER_START = "/* tamakoko-embedded-fonts */"
MARKER_END = "/* /tamakoko-embedded-fonts */"

NEO_FAMILIES = (
    "NeoDunggeunmoPro-Regular",
    "NeoDunggeunmo Pro",
    "NeoDunggeunmo-Regular",
    "NeoDunggeunmo",
    "DOSGothic",
)
DNF_FAMILIES = (
    "DNFBitBitv2-KSCpc-EUC-H",
    "DNF Bit Bit v2",
    "DNFBitBitv2",
)

SVGS = [
    "home-button.svg",
    "dogam-button.svg",
    "guestbook-button.svg",
    "stats.svg",
    "lucky-file.svg",
    "mind-set-file.svg",
    "cat-file.svg",
    "music.svg",
    "point.svg",
    "use-tip.svg",
    "bad-trash.svg",
]


def tspan_text(svg: Path) -> str:
    data = svg.read_text(encoding="utf-8")
    parts = re.findall(r"<tspan[^>]*>([^<]*)</tspan>", data)
    parts += re.findall(r">([^<]+)</text>", data)
    return "".join(parts)


def subset_to_woff(src: Path, dest: Path, text: str) -> None:
    font = TTFont(src)
    opts = Options()
    opts.flavor = "woff"
    opts.desubroutinize = True
    opts.layout_features = ["*"]
    opts.notdef_outline = True
    opts.recommended_glyphs = True
    subsetter = Subsetter(options=opts)
    subsetter.populate(text=text + "0123456789 LV./:~^^♥zipZIP")
    subsetter.subset(font)
    dest.parent.mkdir(parents=True, exist_ok=True)
    font.save(dest)
    font.close()


def css_face(family: str, b64: str) -> str:
    quoted = f"'{family}'" if " " in family else family
    return (
        f"        @font-face {{\n"
        f"          font-family: {quoted};\n"
        f"          src: url(data:font/woff;base64,{b64}) format('woff');\n"
        f"          font-weight: 400;\n"
        f"          font-style: normal;\n"
        f"        }}\n"
    )


def needed_families(svg_text: str) -> list[str]:
    cleaned = re.sub(
        re.escape(MARKER_START) + r".*?" + re.escape(MARKER_END),
        "",
        svg_text,
        flags=re.S,
    )
    names: list[str] = []
    for m in re.finditer(r"font-family:\s*([^;}]+)", cleaned):
        for part in m.group(1).split(","):
            name = part.strip().strip("'\"")
            if name and name not in names:
                names.append(name)
    return names


def inject(svg: Path, neo_b64: str, dnf_b64: str) -> None:
    raw = svg.read_text(encoding="utf-8")
    families = needed_families(raw)
    if not families:
        return
    block = "        " + MARKER_START + "\n"
    for fam in families:
        b64 = dnf_b64 if fam in DNF_FAMILIES else neo_b64
        block += css_face(fam, b64)
    block += "        " + MARKER_END + "\n\n"
    if MARKER_START in raw:
        raw = re.sub(
            r"\s*" + re.escape(MARKER_START) + r".*?" + re.escape(MARKER_END) + r"\s*",
            "\n" + block,
            raw,
            count=1,
            flags=re.S,
        )
    else:
        raw = raw.replace("<style>", "<style>\n" + block, 1)
    svg.write_text(raw, encoding="utf-8")
    print("updated", svg.name, "->", ", ".join(families))


def main() -> None:
    chars = []
    for name in SVGS:
        p = ASSETS / name
        chars.append(tspan_text(p))
    extra = "홈도감방명록손님별마음 들여다보기사용방법나쁜 감정 버리기"
    extra += "프로필따끈치오늘의 감정 지수상태 따끈함한마디 나른하게"
    extra += "행운의 메시지마음을 다스리는 법바이러스가 아닙니다 전 고양이에요"
    extra += "AngryAnxietyHappy/100점"
    text = "".join(chars) + extra
    unique = "".join(sorted(set(text)))
    print("glyph count", len(unique))

    neo_src = FONTS / "NeoDunggeunmoPro-Regular.ttf"
    dnf_src = FONTS / "DNFBitBitv2.otf"
    neo_out = FONTS / "NeoDunggeunmoPro-Regular.subset.woff"
    dnf_out = FONTS / "DNFBitBitv2.subset.woff"
    subset_to_woff(neo_src, neo_out, unique)
    subset_to_woff(dnf_src, dnf_out, unique)
    neo_b64 = base64.b64encode(neo_out.read_bytes()).decode("ascii")
    dnf_b64 = base64.b64encode(dnf_out.read_bytes()).decode("ascii")
    print("neo subset", neo_out.stat().st_size, "dnf subset", dnf_out.stat().st_size)

    for name in SVGS:
        inject(ASSETS / name, neo_b64, dnf_b64)


if __name__ == "__main__":
    main()
