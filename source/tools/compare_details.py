"""Automatic detail check: list quantities (mg, g, mL, M, %, drops, degC, min, cm...) and chemical names in a
co-author's baseline lab text that no longer appear in the current lab text.
usage: python3 tools/compare_details.py <folder>
<folder> must hold base/<baseline>.txt (Alex's versions, as plain text) and cur/<current>.txt (current labs, e.g. text
extracted from docx/experiments/*.docx). Edit MAP below for the pairs. This only finds details that vanished
entirely; also read each procedure step by step (see audit/DETAIL-CHECK-2026-11-24.md)."""
import re, os, sys
S = sys.argv[1]
MAP = [('alex1', 'Exp01_FunctionalGroups'), ('alex2', 'Exp02_StructuresOfAlkanes'), ('alex3', 'Exp03_Hydrocarbons'),
       ('alex4', 'Exp04_AlcoholsPhenols'), ('alex5', 'Exp05_AldehydesKetones'), ('alex6', 'Exp06_CarboxylicAcidsEsters'),
       ('alex7', 'Exp07_AminesAmides'), ('alex8', 'Exp08_TestsForCarbohydrates'), ('alex9', 'Exp09_Lipids'),
       ('alex10', 'Exp10_Aspirin'), ('alex11', 'Exp12_PeptidesProteins'), ('alex12', 'Exp14_Vitamins'),
       ('orig8a', 'Workshop_Carbohydrates'), ('orig11', 'Exp11_AminoAcids'), ('orig13', 'Exp13_Enzymes')]
UNIT = r'(mg|g|mL|ml|L|M|%|drops?|°\s?C|oC|min(?:utes?)?|sec(?:onds?)?|s|cm|mm|nm|µL|uL|mol|mmol|hours?|hr)'
UN = {'ml': 'ml', 'drop': 'drops', 'drops': 'drops', 'oc': '°c', '°c': '°c', 'minute': 'min', 'minutes': 'min',
      'min': 'min', 'sec': 's', 'second': 's', 'seconds': 's', 'hr': 'hour', 'hours': 'hour', 'ul': 'µl'}


def norm(s):
    for a, b in [('‑', '-'), ('–', '-'), ('—', '-'), ('\xa0', ' '), (' ', ' ')]:
        s = s.replace(a, b)
    return re.sub(r'(\d)\s*-\s*(?=[a-zA-Zµ°])', r'\1 ', s)


def qty(s):
    out = {}
    for m in re.finditer(r'(\d+(?:\.\d+)?)(?:\s*(?:-|to)\s*(\d+(?:\.\d+)?))?\s*' + UNIT + r'(?![A-Za-z])', s):
        u = m.group(3).lower().replace(' ', '')
        u = UN.get(u, u)
        for n in (m.group(1), m.group(2)):
            if n:
                out.setdefault((float(n), u), m.start())
    return out


CHEM = re.compile(r"\b([a-zA-Z][a-zA-Z\-]*(?:ol|ide|ate|ane|ene|yne|one|ose|ase|ine|ium|ether|acid|phenol|starch|iodine|ninhydrin|reagent|biuret)s?)\b")


def chems(s):
    return {m.group(1).lower() for m in CHEM.finditer(s) if len(m.group(1)) > 4}


def line_at(txt, pos):
    a = txt.rfind('\n', 0, pos) + 1
    b = txt.find('\n', pos)
    return re.sub(r'\s+', ' ', txt[a:b if b > 0 else len(txt)].strip())[:240]


for b, c in MAP:
    bt = norm(open(S + '/base/' + b + '.txt').read())
    ct = norm(open(S + '/cur/' + c + '.txt').read())
    if c == 'Exp11_AminoAcids':
        ct += norm(open(S + '/cur/Exp11_paper.txt').read())
    cq = qty(ct)
    bq = qty(bt)
    miss = sorted(q for q in bq if q not in cq)
    cc = chems(ct.lower())
    missc = sorted(w for w in chems(bt) if w not in cc and w.rstrip('s') not in cc)
    print('\n######## %s -> %s: %d quantities, %d names missing' % (b, c, len(miss), len(missc)))
    for q in miss:
        print('  QTY %g %s: %s' % (q[0], q[1], line_at(bt, bq[q])))
    if missc:
        print('  NAMES: ' + ', '.join(missc))
