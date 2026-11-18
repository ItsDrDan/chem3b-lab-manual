"""Cut the full-manual PDF (exported from Word) into the repo's pdf/ files, with bookmarks, language and title.
usage (from the repo root, with pypdf installed):
    python3 source/tools/cut_pdfs.py <exported full manual.pdf>
Writes pdf/CHEM3B_Lab_Manual_OER.pdf and pdf/experiments/*.pdf, using source/tocpages.json for the section starts.
Checks every printed page number and every section start; stops on a mismatch. The Contents page (i) and printed page 1
are found from the footers, so the front-matter length can change.
The manual is laid out for binding: a blank page backs the cover, and every lab, the workshop and the appendices
start on a right-hand (odd) page, so Word adds fully blank pages (no header or number) where needed. Those blank pages
stay in the full PDF but are left off the end of the single-section PDFs."""
import sys, os, json, re
from pypdf import PdfReader, PdfWriter
from pypdf.annotations import Link
from pypdf.generic import NameObject, TextStringObject, DictionaryObject, BooleanObject

NAMES = {1:'Exp01_FunctionalGroups',2:'Exp02_StructuresOfAlkanes',3:'Exp03_Hydrocarbons',4:'Exp04_AlcoholsPhenols',
 5:'Exp05_AldehydesKetones',6:'Exp06_CarboxylicAcidsEsters',7:'Exp07_AminesAmides',8:'Exp08_TestsForCarbohydrates',
 9:'Exp09_Lipids',10:'Exp10_Aspirin',11:'Exp11_AminoAcids',12:'Exp12_PeptidesProteins',13:'Exp13_Enzymes',
 14:'Exp14_Vitamins',15:'Exp15_NucleicAcids'}
WS = [('Workshop: Types', 'Workshop: Types of Carbohydrates', 'Workshop_Carbohydrates', 'lab'),
      ('Workshop: Chirality', 'Workshop: Chirality Stations', 'Workshop_Chirality', 'workshop')]
APXT = {'Appendix A:':'Appendix A: Common Laboratory Equipment','Appendix B:':'Appendix B: Organic Functional Groups',
 'Appendix C:':'Appendix C: IUPAC Naming Guide','Appendix D:':'Appendix D: Molecular Shapes and Electronegativity',
 'Appendix E:':'Appendix E: Biomolecules Reference Sheet','Appendix F:':'Appendix F: Periodic Table and Reference Data'}
SUBS = ['Introduction','Hazards and Safety Instructions','Waste Instructions','Procedure','Pre-Lab Questions',
 'Report Sheet: Data Collection','Post-Lab Report: Questions and Problems']
AUTH = 'Alexandra Aloia and Daniel Kwasniewski, Ph.D.'
ROMAN = {'i':1,'ii':2,'iii':3,'iv':4,'v':5,'vi':6,'vii':7,'viii':8,'ix':9,'x':10}

src = PdfReader(sys.argv[1]); N = len(src.pages)
toc = json.load(open('source/tocpages.json'))
lines = [[l.strip() for l in p.extract_text().split('\n')] for p in src.pages]
blank = {i for i in range(N) if not ''.join(lines[i]).strip()}
# footer number of each page: 'CHEM 3B Laboratory Manual 3' (odd pages) or '2 CHEM 3B Laboratory Manual' (even pages, mirrored)
foot = [next((m[1] or m[2] for l in ls for m in [re.fullmatch(r'CHEM 3B Laboratory Manual\s+(\S+)|(\S+)\s+CHEM 3B Laboratory Manual', l)] if m), None) for ls in lines]
CONTENTS = foot.index('i')  # PDF page index of the Contents page (printed i)
OFF = foot.index('1')       # PDF page index of printed page 1 (Experiment 1)
bad = [i+1 for i in range(OFF, N) if i not in blank and not re.search(r'CHEM 3B Laboratory Manual\s*%d\b|\b%d\s+CHEM 3B Laboratory Manual' % (i-OFF+1, i-OFF+1), ' '.join(lines[i]))]  # odd pages: title then number; even pages (mirrored): number then title
if bad: sys.exit(f'printed page numbers do not match on PDF pages {bad[:10]}')
nlabs = max(int(k.split('#')[1].rstrip(':')) for k in toc if k.startswith('Experiment'))
starts = [int(toc[f'Experiment #{n}:'])+OFF-1 for n in range(1, nlabs+1)] + [int(toc[k])+OFF-1 for k, *_ in WS] + [int(toc['Appendix A:'])+OFF-1]
titles = {}
for n in range(1, nlabs+1):
    t = [l for l in lines[starts[n-1]] if l.startswith('Experiment')]
    if not t or not t[0].startswith(f'Experiment {n}:'): sys.exit(f'Experiment {n} does not start on PDF page {starts[n-1]+1}')
    titles[n] = t[0]
apx = [(k, int(v)+OFF-1) for k, v in toc.items() if k.startswith('Appendix')]
front = [('Cover',0),('License and Acknowledgments',2),('Contents',CONTENTS)] + [(k, ROMAN[v]-1+CONTENTS) for k, v in toc.items() if v in ROMAN]
if 1 not in blank: sys.exit('PDF page 2 (back of the cover) is not blank')
odd = [s - OFF + 1 for s in starts if (s - OFF + 1) % 2 == 0]
if odd: sys.exit(f'sections starting on an even (left-hand) page: {odd}')

def subs(a, b):
    out = []
    for h in SUBS:
        for i in range(a, b):
            if h in lines[i]: out.append((h, i)); break
    return out

def finish(w, title):
    w.add_metadata({'/Title':title,'/Author':AUTH,'/Subject':'CHEM 3B Laboratory Manual (OER), CC BY 4.0',
                    '/Keywords':'CC BY 4.0; OER; organic chemistry; biochemistry; laboratory'})
    root = w._root_object
    root[NameObject('/Lang')] = TextStringObject('en-US')
    root[NameObject('/ViewerPreferences')] = DictionaryObject({NameObject('/DisplayDocTitle'): BooleanObject(True)})
    root[NameObject('/PageMode')] = NameObject('/UseOutlines')


def toc_target(k):
    v = toc[k]
    return ROMAN[v] - 1 + CONTENTS if v in ROMAN else int(v) + OFF - 1

def contents_links(w):
    """Make every Contents entry clickable: a link over the whole line (title, dots, page number)."""
    rows = {}
    def v(t, cm, tm, fd, fs):
        if t.strip():
            x, y = tm[4]*cm[0] + cm[4], tm[5]*cm[3] + cm[5]
            rows.setdefault(round(y, 1), []).append((x, t))
    src.pages[CONTENTS].extract_text(visitor_text=v)
    made = []
    for y, parts in rows.items():
        x0, text = min(parts)
        right = max(x + 6*len(t) for x, t in parts)
        k = max((k for k in toc if text.startswith(k)), key=len, default=None)
        if k is None: continue
        dest = toc_target(k)
        w.add_annotation(CONTENTS, Link(rect=(x0 - 2, y - 4, min(right, 548), y + 12), target_page_index=dest))
        made.append((k, dest))
    missing = set(toc) - {k for k, _ in made}
    if missing: sys.exit(f'Contents entries without a link: {sorted(missing)}')
    return made

def make(fn, a, b, title, kind):
    if kind != 'full':
        while b - 1 in blank: b -= 1  # drop the blank page(s) that only push the next section to a right-hand page
    w = PdfWriter()
    for i in range(a, b): w.add_page(src.pages[i])
    if kind == 'full':
        made = contents_links(w)
        print(f'  Contents: {len(made)} clickable entries')
        fr = w.add_outline_item('Front Matter', 0)
        for t, i in front: w.add_outline_item(t, i, parent=fr)
        for n in range(1, nlabs+1):
            s, e = starts[n-1], starts[n]; top = w.add_outline_item(titles[n], s)
            for h, i in subs(s, e): w.add_outline_item(h, i, parent=top)
        for j, (_, t, _, kd) in enumerate(WS):
            s, e = starts[nlabs+j], starts[nlabs+j+1]; top = w.add_outline_item(t, s)
            if kd == 'lab':
                for h, i in subs(s, e): w.add_outline_item(h, i, parent=top)
        ap = w.add_outline_item('Appendices A–F', starts[-1])
        for k, i in apx: w.add_outline_item(APXT[k], i, parent=ap)
    elif kind == 'front':
        for t, i in front: w.add_outline_item(t, i)
    elif kind == 'workshop':
        top = w.add_outline_item(title, 0)
        for h in ['Introduction','Procedure','Answer Sheet']:
            i = next((i for i in range(a, b) if h in lines[i]), None)
            if i is not None: w.add_outline_item(h, i-a, parent=top)
    elif kind == 'appendix':
        for k, i in apx: w.add_outline_item(APXT[k], i-a)
    else:
        top = w.add_outline_item(title, 0)
        for h, i in subs(a, b): w.add_outline_item(h, i-a, parent=top)
    finish(w, title); w.write(fn)
    print(f'{fn}: PDF pages {a+1}-{b}, printed {"i-ix" if kind=="front" else f"{a-OFF+1}-{b-OFF}"}')

make('pdf/CHEM3B_Lab_Manual_OER.pdf', 0, N, 'CHEM 3B Laboratory Manual', 'full')
make('pdf/experiments/00_FrontMatter_Safety.pdf', 0, OFF, 'CHEM 3B Laboratory Manual: Front Matter and Safety', 'front')
for n in range(1, nlabs+1): make(f'pdf/experiments/{NAMES[n]}.pdf', starts[n-1], starts[n], titles[n], 'lab')
for j, (_, t, fn, kd) in enumerate(WS): make(f'pdf/experiments/{fn}.pdf', starts[nlabs+j], starts[nlabs+j+1], t, kd)
make('pdf/experiments/16_Appendices.pdf', starts[-1], N, 'CHEM 3B Laboratory Manual: Appendices A–F', 'appendix')
