"""Check a figure-restored PDF against the Word export it came from: every picture, shrunk back to the
exported size, must match the exported picture tile by tile. Lists any picture that does not match
(a wrong swap). usage: python3 tools/verify_images.py <word export.pdf> <restored.pdf>"""
import sys
from pypdf import PdfReader
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
    return max([ImageStat.Stat(d.crop((x, y, x + t, y + t))).mean[0]
                for x in range(0, max(1, w - t + 1), t // 2) for y in range(0, max(1, h - t + 1), t // 2)] or [0])


A, B = PdfReader(sys.argv[1]), PdfReader(sys.argv[2])
bad, n = [], 0
for i, (pa, pb) in enumerate(zip(A.pages, B.pages)):
    ia, ib = list(pa.images), list(pb.images)
    if len(ia) != len(ib):
        bad.append((i + 1, 'picture count differs'))
        continue
    for x, y in zip(ia, ib):
        a, b = x.image, y.image
        n += 1
        s = worst_tile(gray(a), gray(b, a.size))
        if s > 25:
            bad.append((i + 1, a.size, round(s, 1)))
print(f'checked {n} pictures; mismatches: {len(bad)}')
for b in bad:
    print('  ', b)
sys.exit(1 if bad else 0)
