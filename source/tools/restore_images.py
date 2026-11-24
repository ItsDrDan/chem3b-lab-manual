"""Put full-resolution figures back into a Word-exported PDF.

Since the Word 16.115 update (Nov 2026), Word's scripted PDF export downsamples pictures to about 220 ppi.
This script takes each picture in the new PDF, finds the same picture in an earlier full-resolution PDF
of the manual, and swaps the full-resolution copy back in.

Matching is strict, so two similar drawings are never mixed up: a candidate must have the same aspect
ratio, it is shrunk to the exported picture's exact size and compared pixel by pixel, and it must be a
clear winner (much closer than the next-best candidate, unless the two candidates are the same picture).
Pictures with no confident match (new or changed figures) are left as exported and listed.

usage: python3 tools/restore_images.py <full-res reference.pdf> <new export.pdf> <output.pdf>
"""
import sys
from pypdf import PdfReader, PdfWriter
from PIL import Image, ImageChops, ImageStat


def gray(im, size=None):
    g = im.convert('RGBA')
    bg = Image.new('RGBA', g.size, 'white')
    bg.alpha_composite(g)
    g = bg.convert('L')
    return g.resize(size, Image.LANCZOS) if size else g


def diff(a, b):
    return ImageStat.Stat(ImageChops.difference(a, b)).mean[0]


ref = PdfReader(sys.argv[1])
pool = []
for p in ref.pages:
    for im in p.images:
        try:
            pool.append(im.image)
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
        for big in pool:
            if big.width <= pil.width or abs(big.width / big.height - r) > 0.03 * r:
                continue
            scores.append((diff(a, gray(big, pil.size)), big))
        scores.sort(key=lambda s: s[0])
        ok = bool(scores) and scores[0][0] < 6 and (
            len(scores) == 1 or scores[1][0] - scores[0][0] > 2 or
            diff(gray(scores[0][1], pil.size), gray(scores[1][1], pil.size)) < 1)
        if ok:
            big = scores[0][1]
            im.replace(big if big.mode in ('RGB', 'L', 'RGBA') else big.convert('RGB'))
            swapped += 1
        else:
            left.append((pi + 1, pil.size, round(scores[0][0], 1) if scores else None))
w.write(sys.argv[3])
print(f'full-resolution figures restored: {swapped}; left as exported: {len(left)}')
if left:
    print('left as exported (page, size, best difference):', left)
