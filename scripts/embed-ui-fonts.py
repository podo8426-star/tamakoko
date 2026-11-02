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
    "Neo둥근모 Pro",
    "NeoDunggeunmo-Regular",
    "NeoDunggeunmo",
)
DNF_FAMILIES = (
    "DNFBitBitv2-KSCpc-EUC-H",
    "DNF Bit Bit v2",
    "DNFBitBitv2",
)
PILGI_FAMILIES = (
    "DOSPilgiMedium",
    "DOSPilgi",
)
GOTHIC_FAMILIES = (
    "DOSGothic",
)
KNOWN = set(NEO_FAMILIES + DNF_FAMILIES + PILGI_FAMILIES + GOTHIC_FAMILIES)
GOTHIC_SVGS = [
    "radio-window.svg",
    "bad-trash.svg",
    "day-window.svg",
    "watch-window.svg",
    "art-window.svg",
    "self-camera-window.svg",
    "mind-set-window.svg",
    "snow-window.svg",
    "sketch-book-window.svg",
    "lucky-window.svg",
    "lucky-window-1.svg",
    "lucky-window-2.svg",
    "lucky-window-3.svg",
    "lucky-window-4.svg",
    "lucky-window-5.svg",
    "lucky-window-6.svg",
    "lucky-window-7.svg",
]

SVGS = [
    "home-button.svg",
    "home-button-on.svg",
    "home-button-off.svg",
    "dogam-button.svg",
    "dogam-button-on.svg",
    "dogam-button-off.svg",
    "guestbook-button.svg",
    "guestbook-button-on.svg",
    "guestbook-button-off.svg",
    "stats.svg",
    "lucky-file.svg",
    "mind-set-file.svg",
    "cat-file.svg",
    "music.svg",
    "music-bar-op.svg",
    "point.svg",
    "point-open-1.svg",
    "point-open-2.svg",
    "point-open-3.svg",
    "point-open-4.svg",
    "use-tip.svg",
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


def b64_for(fam: str, faces: dict[str, str]) -> str | None:
    if fam in DNF_FAMILIES:
        return faces.get("dnf")
    if fam in PILGI_FAMILIES:
        return faces.get("pilgi")
    if fam in GOTHIC_FAMILIES:
        return faces.get("gothic")
    if fam in NEO_FAMILIES:
        return faces.get("neo")
    return None


def inject(svg: Path, faces: dict[str, str]) -> None:
    raw = svg.read_text(encoding="utf-8")
    families = [fam for fam in needed_families(raw) if fam in KNOWN and b64_for(fam, faces)]
    if not families:
        return
    block = "        " + MARKER_START + "\n"
    for fam in families:
        b64 = b64_for(fam, faces)
        if not b64:
            continue
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


def ui_text() -> str:
    chars = [tspan_text(ASSETS / name) for name in SVGS]
    extra = "홈도감방명록손님별마음 들여다보기사용방법나쁜 감정 버리기"
    extra += "프로필따끈치오늘의 감정 지수상태 따끈함한마디 나른하게"
    extra += "행운의 메시지마음을 다스리는 법바이러스가 아닙니다 전 고양이에요"
    extra += "AngryAnxietyHappy/100점"
    return "".join(chars) + extra


def window_text() -> str:
    text = "".join(tspan_text(ASSETS / name) for name in GOTHIC_SVGS)
    text += "라디오 속 플레이리스트클릭해봐!김뜻돌안예은오월오일미움받는 꿈여름"
    text += "나쁜 감정 쓰레기통오늘의 날짜는지금은 몇 시 몇 분따끈치의 사진 컬렉션"
    text += "따끈치와 셀카 타임끄적끄적 스케치북마음을 다스리는 방법행운의 메시지"
    return text


def embed_dos_faces(faces: dict[str, str], unique: str) -> None:
    pilgi_src = FONTS / "DOSPilgi.ttf"
    gothic_src = FONTS / "DOSGothic.ttf"
    if not pilgi_src.exists() and not gothic_src.exists():
        return
    text = window_text() + unique
    if pilgi_src.exists():
        pilgi_out = FONTS / "DOSPilgi.subset.woff"
        subset_to_woff(pilgi_src, pilgi_out, text)
        faces["pilgi"] = base64.b64encode(pilgi_out.read_bytes()).decode("ascii")
        print("pilgi subset", pilgi_out.stat().st_size)
    if gothic_src.exists():
        gothic_out = FONTS / "DOSGothic.subset.woff"
        subset_to_woff(gothic_src, gothic_out, text)
        faces["gothic"] = base64.b64encode(gothic_out.read_bytes()).decode("ascii")
        print("gothic subset", gothic_out.stat().st_size)


def main() -> None:
    windows_only = "--windows" in sys.argv or "--radio" in sys.argv
    unique = "".join(sorted(set(ui_text())))
    print("glyph count", len(unique))
    faces: dict[str, str] = {}

    if not windows_only:
        neo_src = FONTS / "NeoDunggeunmoPro-Regular.ttf"
        dnf_src = FONTS / "DNFBitBitv2.otf"
        neo_out = FONTS / "NeoDunggeunmoPro-Regular.subset.woff"
        dnf_out = FONTS / "DNFBitBitv2.subset.woff"
        subset_to_woff(neo_src, neo_out, unique)
        subset_to_woff(dnf_src, dnf_out, unique)
        faces["neo"] = base64.b64encode(neo_out.read_bytes()).decode("ascii")
        faces["dnf"] = base64.b64encode(dnf_out.read_bytes()).decode("ascii")
        print("neo subset", neo_out.stat().st_size, "dnf subset", dnf_out.stat().st_size)

    embed_dos_faces(faces, unique)

    if not windows_only:
        for name in SVGS:
            inject(ASSETS / name, faces)
    for name in GOTHIC_SVGS:
        inject(ASSETS / name, faces)


if __name__ == "__main__":
    main()
