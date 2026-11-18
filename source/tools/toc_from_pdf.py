"""Read the Contents page numbers from an exported full-manual PDF (the printed page number in each section's first-page footer).
usage (from source/, with pypdf):  python3 tools/toc_from_pdf.py <exported manual.pdf> tocpages.json
Use this rather than the Word page map: Word's page map does not count the blank pages it adds before a
right-hand (odd-page) section start, but the PDF does."""
import sys, re, json
from pypdf import PdfReader

KEYS = ['To the Student', 'Laboratory Safety', 'Laboratory Safety Agreement', 'Chemical Waste Disposal',
        'Laboratory Notebooks and Reports', 'Measurements and Uncertainty'] + \
       [f'Experiment #{n}:' for n in range(1, 17)] + ['Workshop:'] + [f'Appendix {c}:' for c in 'ABCDEF']

r = PdfReader(sys.argv[1])
pages = []
for p in r.pages:
    t = p.extract_text()
    m = re.search(r'CHEM 3B Laboratory Manual\s*([ivx]+|\d+)\s*$', t.strip()) or re.search(r'CHEM 3B Laboratory Manual\s*([ivx]+|\d+)\b', t)
    pages.append(([l.strip() for l in t.split('\n') if l.strip()], m[1] if m else None))

def heading(k, ls):
    if k.startswith('Experiment #'):
        return any(l.startswith(k.replace('#', '')) for l in ls[:3])
    if k.endswith(':'):
        return any(l.startswith(k) for l in ls[:3])
    return k in ls[1:3]  # front matter: line 0 is the running header (same words), the title follows

out = {}
for k in KEYS:
    hit = next((num for ls, num in pages[3:] if num and heading(k, ls)), None)
    if hit is None: sys.exit(f'not found: {k}')
    out[k] = hit
json.dump(out, open(sys.argv[2], 'w'))
print(json.dumps(out))
