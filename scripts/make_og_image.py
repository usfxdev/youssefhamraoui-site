"""Draws the default social images public/og/en.png and public/og/fr.png (1200x630).

They use the site's colours (app/globals.css), its fonts (Schibsted Grotesk and JetBrains Mono)
and its own copy: the hero headline and the services line (content/dictionaries/*.ts).
Run it again after changing that copy or the colours.

    npm run build                      # next/font puts the font files in .next/static/media
    python scripts/make_og_image.py

Needs Pillow, fontTools and brotli (pip install pillow fonttools brotli).
"""
from io import BytesIO
from pathlib import Path
import sys

from fontTools.ttLib import TTFont
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
MEDIA = ROOT / ".next" / "static" / "media"
OUT = ROOT / "public" / "og"

W, H = 1200, 630
S = 2  # draw at twice the size, then scale down for smooth edges
M = 80  # side margin

BG, INK, INK_2, MUTED = "#f3f4f1", "#15181a", "#4b5157", "#656a70"
ACCENT, ACCENT_SOFT, ICON_DOT = "#4f44d6", "#e6e3fa", "#7d74f0"

COPY = {
    "en": {
        "status": "Lead capture · Bookings · CRM · AI workflows",
        # (text, accent?) pieces of the hero headline; the <em> part is in the accent colour.
        # A no-break space keeps "run on." on one line.
        "headline": [("I build the quiet machinery that growing businesses ", False), ("run on.", True)],
        "role": "Business systems builder · Khouribga, Morocco",
    },
    "fr": {
        "status": "Captation de prospects · Réservations · CRM · Workflows IA",
        "headline": [
            ("Je construis la mécanique discrète qui ", False),
            ("fait tourner", True),
            (" les entreprises en croissance.", False),
        ],
        "role": "Concepteur de systèmes pour entreprises · Khouribga, Maroc",
    },
}
NAME, DOMAIN = "Youssef Hamraoui", "youssefhamraoui.com"


def find_font(family: str) -> bytes:
    """The Latin subset of a family that next/font downloaded, as TTF bytes."""
    best = None
    for path in MEDIA.glob("*.woff2"):
        font = TTFont(path)
        cmap = font.getBestCmap()
        if font["name"].getDebugName(1) == family and 0xE9 in cmap:  # Latin subset has é
            if best is None or len(cmap) > len(best.getBestCmap()):
                best = font
    if best is None:
        sys.exit(f"{family} not found in {MEDIA}. Run `npm run build` first.")
    best.flavor = None
    buf = BytesIO()
    best.save(buf)
    return buf.getvalue()


class Face:
    """One font at one size and weight, with letter-spacing like the CSS."""

    def __init__(self, data: bytes, size: float, weight: int, tracking_em: float = 0.0):
        self.font = ImageFont.truetype(BytesIO(data), round(size * S))
        try:
            self.font.set_variation_by_axes([weight])
        except OSError:
            pass  # static font: keep its own weight
        self.track = tracking_em * size * S
        self.cmap = TTFont(BytesIO(data)).getBestCmap()

    def check(self, text: str):
        missing = sorted({c for c in text if c != " " and ord(c) not in self.cmap})
        if missing:
            sys.exit(f"font lacks {missing}")

    def width(self, text: str) -> float:
        return self.font.getlength(text) + self.track * max(len(text) - 1, 0)

    def draw(self, d: ImageDraw.ImageDraw, x: float, y: float, chars: list[tuple[str, str]]):
        """Draws (char, colour) pairs on one baseline, keeping the font's kerning."""
        line = "".join(c for c, _ in chars)
        for i, (c, colour) in enumerate(chars):
            if c != " ":
                d.text((x + self.font.getlength(line[:i]) + self.track * i, y), c, font=self.font, fill=colour, anchor="ls")


def plain(text: str, colour: str) -> list[tuple[str, str]]:
    return [(c, colour) for c in text]


def wrap(pieces, face: Face, max_width: float) -> list[list[tuple[str, str]]]:
    """Word-wraps coloured pieces into lines of (char, colour)."""
    chars = [(c, ACCENT if accent else INK) for text, accent in pieces for c in text]
    words, cur = [], []
    for ch in chars:
        cur.append(ch)
        if ch[0] == " ":
            words.append(cur)
            cur = []
    if cur:
        words.append(cur)
    lines, line = [], []
    for word in words:
        trial = line + word
        if line and face.width("".join(c for c, _ in trial).rstrip()) > max_width:
            lines.append(line)
            line = word
        else:
            line = trial
    lines.append(line)
    return [l[:-1] if l and l[-1][0] == " " else l for l in lines]


def y_mark(d: ImageDraw.ImageDraw, x: float, y: float, size: float):
    """The favicon (app/icon.svg): a white Y on ink with an accent dot."""
    k = size * S / 64
    X, Y = x * S, y * S
    d.rounded_rectangle([X, Y, X + 64 * k, Y + 64 * k], radius=14 * k, fill=INK)
    w = round(7.5 * k)
    pts = [(19, 16), (32, 33), (45, 16)]
    d.line([(X + px * k, Y + py * k) for px, py in pts], fill="#ffffff", width=w, joint="curve")
    d.line([(X + 32 * k, Y + 33 * k), (X + 32 * k, Y + 48 * k)], fill="#ffffff", width=w)
    for px, py in [(19, 16), (45, 16), (32, 48), (32, 33)]:
        r = w / 2
        d.ellipse([X + px * k - r, Y + py * k - r, X + px * k + r, Y + py * k + r], fill="#ffffff")
    r = 3.6 * k
    d.ellipse([X + 47 * k - r, Y + 47 * k - r, X + 47 * k + r, Y + 47 * k + r], fill=ICON_DOT)


def render(lang: str, sans: bytes, mono: bytes) -> Image.Image:
    t = COPY[lang]
    img = Image.new("RGB", (W * S, H * S), BG)
    d = ImageDraw.Draw(img)

    # Status line, like the hero's: accent dot with a soft ring, then mono caps.
    status = Face(mono, 21, 400, 0.04)
    text = t["status"].upper()
    status.check(text)
    cx, cy = (M + 6) * S, 92 * S
    for r, colour in ((11, ACCENT_SOFT), (6, ACCENT)):
        d.ellipse([cx - r * S, cy - r * S, cx + r * S, cy + r * S], fill=colour)
    status.draw(d, (M + 30) * S, 99 * S, plain(text, MUTED))

    # Headline: the largest size that fits in three lines.
    max_width = (W - 2 * M) * S
    for size in (80, 76, 72, 68, 64, 60, 56):
        head = Face(sans, size, 600, -0.035)
        lines = wrap(t["headline"], head, max_width)
        if len(lines) <= 3:
            break
    head.check("".join(p for p, _ in t["headline"]))
    top = 150 + size * 0.95
    for i, line in enumerate(lines):
        head.draw(d, M * S, (top + i * size * 1.04) * S, line)

    # Rule, then the Y mark, name, role and domain.
    rule_y = 478
    d.rectangle([M * S, rule_y * S, (W - M) * S, rule_y * S + 2 * S - 1], fill=INK)
    y_mark(d, M, 514, 68)
    name = Face(sans, 34, 600, -0.01)
    name.draw(d, (M + 92) * S, 546 * S, plain(NAME, INK))
    role = Face(sans, 22, 400)
    role.check(t["role"])
    role.draw(d, (M + 92) * S, 578 * S, plain(t["role"], INK_2))
    domain = Face(mono, 20, 400, 0.04)
    domain.draw(d, (W - M) * S - domain.width(DOMAIN), 546 * S, plain(DOMAIN, MUTED))

    return img.resize((W, H), Image.LANCZOS)


def main():
    sans, mono = find_font("Schibsted Grotesk"), find_font("JetBrains Mono")
    OUT.mkdir(parents=True, exist_ok=True)
    for lang in COPY:
        path = OUT / f"{lang}.png"
        render(lang, sans, mono).save(path, optimize=True)
        print(f"{path.relative_to(ROOT)}: {path.stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
