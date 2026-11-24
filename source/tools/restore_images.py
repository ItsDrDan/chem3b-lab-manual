"""Put full-resolution figures back into a Word-exported PDF.

Since the Word 16.115 update (Nov 2026), Word's scripted PDF export downsamples pictures to about 220 ppi.
This script takes each picture in the new PDF, finds the same picture among the original figure files
(source/fig/**/*.png), and swaps the full-resolution file back in.

Matching is strict, so two similar drawings (for example two graph grids that differ only in their axis
labels) are never mixed up. A candidate must have the same aspect ratio; it is shrunk to the exported
picture's size and compared in small tiles, and the score is the WORST tile, so a difference in one label
counts fully. The best candidate must score low and clearly beat every different-looking candidate.
Pictures with no confident match are left as exported and listed.

usage: python3 tools/restore_images.py <figure folder> <new export.pdf> <output.pdf>
"""
import sys, os, glob
from pypdf import PdfWriter
from PIL import Image, ImageChops, ImageStat


def gray(im, size=None):
    g = im.convert('RGBA')
    bg = Image.new('RGBA', g.size, 'white')
    bg.alpha_composite(g)
    g = bg.convert('L')
    return g.resize(size, Image.LANCZOS) if size else g


def worst_tile(a, b, t=24):
    d = ImageChops.difference(a, b)
    w, h = d.size
    worst = 0
    for x in range(0, max(1, w - t + 1), t // 2):
        for y in range(0, max(1, h - t + 1), t // 2):
            worst = max(worst, ImageStat.Stat(d.crop((x, y, x + t, y + t))).mean[0])
    return worst


pool = []
for f in glob.glob(os.path.join(sys.argv[1], '**', '*.png'), recursive=True):
    try:
        im = Image.open(f)
        im.load()
        pool.append((f, im))
    except Exception:
        pass

w = PdfWriter(clone_from=sys.argv[2])
swapped, left = 0, []
for pi, page in enumerate(w.pages):
    for im in page.images:
        try:
            pil = im.image
        except Exception:
            continue
        a = gray(pil)
        r = pil.width / pil.height
        scores = []
        for f, big in pool:
            if big.width <= pil.width or abs(big.width / big.height - r) > 0.02 * r:
                continue
            scores.append((worst_tile(a, gray(big, pil.size)), f, big))
        scores.sort(key=lambda s: s[0])
        ok = False
        if scores and scores[0][0] < 25:
            best = scores[0]
            rivals = [s for s in scores[1:] if worst_tile(gray(best[2], pil.size), gray(s[2], pil.size)) > 10]
            ok = not rivals or rivals[0][0] > best[0] + 15
        if ok:
            big = scores[0][2]
            im.replace(big if big.mode in ('RGB', 'L', 'RGBA') else big.convert('RGBA'))
            swapped += 1
        else:
            left.append((pi + 1, pil.size, round(scores[0][0], 1) if scores else None,
                         os.path.basename(scores[0][1]) if scores else None))
w.write(sys.argv[3])
print(f'full-resolution figures restored: {swapped}; left as exported: {len(left)}')
if left:
    print('left as exported (page, size, best score, best file):', left)
