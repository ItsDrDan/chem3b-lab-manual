"""Cut the full-manual PDF (exported from Word) into the repo's pdf/ files, with bookmarks, language and title.
usage (from the repo root, with pypdf installed):
    python3 source/tools/cut_pdfs.py <exported full manual.pdf>
Writes pdf/CHEM3B_Lab_Manual_OER.pdf and pdf/experiments/*.pdf, using source/tocpages.json for the section starts.
Checks every printed page number (printed page = PDF page - 11) and every section start; stops on a mismatch."""
import sys, os, json, re
from pypdf import PdfReader, PdfWriter
from pypdf.annotations import Link
from pypdf.generic import NameObject, TextStringObject, DictionaryObject, BooleanObject

OFF = 11  # cover, license, Contents (i) and front matter ii-ix come before printed page 1
NAMES = {1:'Exp01_FunctionalGroups',2:'Exp02_StructuresOfAlkanes',3:'Exp03_Hydrocarbons',4:'Exp04_AlcoholsPhenols',
 5:'Exp05_AldehydesKetones',6:'Exp06_CarboxylicAcidsEsters',7:'Exp07_AminesAmides',8:'Exp08_TypesOfCarbohydrates',
 9:'Exp09_TestsForCarbohydrates',10:'Exp10_Lipids',11:'Exp11_Aspirin',12:'Exp12_AminoAcids',13:'Exp13_PeptidesProteins',
 14:'Exp14_Enzymes',15:'Exp15_Vitamins',16:'Exp16_NucleicAcids'}
APXT = {'Appendix A:':'Appendix A: Common Laboratory Equipment','Appendix B:':'Appendix B: Organic Functional Groups',
 'Appendix C:':'Appendix C: IUPAC Naming Guide','Appendix D:':'Appendix D: Molecular Shapes and Electronegativity',
 'Appendix E:':'Appendix E: Biomolecules Reference Sheet','Appendix F:':'Appendix F: Periodic Table and Reference Data'}
SUBS = ['Introduction','Hazards and Safety Instructions','Waste Instructions','Procedure','Pre-Lab Questions',
 'Report Sheet: Data Collection','Post-Lab Report: Questions and Problems']
AUTH = 'Daniel Kwasniewski, Ph.D. and Alexandra Aloia'
ROMAN = {'i':1,'ii':2,'iii':3,'iv':4,'v':5,'vi':6,'vii':7,'viii':8,'ix':9,'x':10}

src = PdfReader(sys.argv[1]); N = len(src.pages)
toc = json.load(open('source/tocpages.json'))
lines = [[l.strip() for l in p.extract_text().split('\n')] for p in src.pages]
bad = [i+1 for i in range(OFF, N) if not re.search(r'CHEM 3B Laboratory Manual\s*%d\b' % (i-OFF+1), ' '.join(lines[i]))]
if bad: sys.exit(f'printed page numbers do not match on PDF pages {bad[:10]}')
nlabs = max(int(k.split('#')[1].rstrip(':')) for k in toc if k.startswith('Experiment'))
starts = [int(toc[f'Experiment #{n}:'])+OFF-1 for n in range(1, nlabs+1)] + [int(toc['Workshop:'])+OFF-1, int(toc['Appendix A:'])+OFF-1]
titles = {}
for n in range(1, nlabs+1):
    t = [l for l in lines[starts[n-1]] if l.startswith('Experiment')]
    if not t or not t[0].startswith(f'Experiment {n}:'): sys.exit(f'Experiment {n} does not start on PDF page {starts[n-1]+1}')
    titles[n] = t[0]
apx = [(k, int(v)+OFF-1) for k, v in toc.items() if k.startswith('Appendix')]
front = [('Cover',0),('License and Acknowledgments',1),('Contents',2)] + [(k, ROMAN[v]+1) for k, v in toc.items() if v in ROMAN]

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

CONTENTS = 2  # PDF page index of the Contents page

def toc_target(k):
    v = toc[k]
    return ROMAN[v] + 1 if v in ROMAN else int(v) + OFF - 1

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
        w.add_outline_item('Workshop: Chirality Stations', starts[-2])
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
make('pdf/experiments/Workshop_Chirality.pdf', starts[-2], starts[-1], 'Workshop: Chirality Stations', 'workshop')
make('pdf/experiments/16_Appendices.pdf', starts[-1], N, 'CHEM 3B Laboratory Manual: Appendices A–F', 'appendix')
