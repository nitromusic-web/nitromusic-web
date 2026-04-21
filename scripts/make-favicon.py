"""One-shot: strip white background from brand logo, crop, resize, save as favicon/icon."""
from pathlib import Path
from PIL import Image, ImageChops, ImageDraw

SRC = Path(r"C:/Users/USER/Desktop/Nitro/Brand Logo/인스타용 니트로 뮤직 로고_ 누끼 없는 버전.png")
OUTS = [
    Path(r"C:/Users/USER/Desktop/Nitro/Nitro_website/nitro-music-web/public/favicon.png"),
    Path(r"C:/Users/USER/Desktop/Nitro/Nitro_website/nitro-music-web/src/app/icon.png"),
]
ICO_OUT = Path(r"C:/Users/USER/Desktop/Nitro/Nitro_website/nitro-music-web/public/favicon.ico")
ICO_SIZES = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
MARKER = (255, 0, 255)  # magenta sentinel — not present in source
THRESH = 30             # floodfill tolerance for near-white
TARGET = 256            # final square size

img = Image.open(SRC).convert("RGBA")
w, h = img.size
rgb = img.convert("RGB").copy()

# Flood-fill the outer white region from all four corners with a sentinel color.
for corner in [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)]:
    ImageDraw.floodfill(rgb, corner, MARKER, thresh=THRESH)

# Build alpha mask: anywhere NOT equal to the marker is kept opaque.
marker_plane = Image.new("RGB", (w, h), MARKER)
diff = ImageChops.difference(rgb, marker_plane).convert("L")
mask = diff.point(lambda v: 0 if v == 0 else 255)

img.putalpha(mask)

# Crop to tight bbox of the remaining (black circle).
bbox = img.getbbox()
img = img.crop(bbox)

# Resize down while preserving aspect.
img.thumbnail((TARGET, TARGET), Image.LANCZOS)

for out in OUTS:
    out.parent.mkdir(parents=True, exist_ok=True)
    img.save(out, "PNG", optimize=True)
    print(f"{out}: {out.stat().st_size / 1024:.1f} KB  size={img.size}")

# Generate multi-size favicon.ico — PIL embeds each size as PNG for sizes >= 64.
ICO_OUT.parent.mkdir(parents=True, exist_ok=True)
img.save(ICO_OUT, format="ICO", sizes=ICO_SIZES)
print(f"{ICO_OUT}: {ICO_OUT.stat().st_size / 1024:.1f} KB  sizes={ICO_SIZES}")
