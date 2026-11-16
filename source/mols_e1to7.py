# RDKit skeletal drawings for Experiments 1-7 (compiled edition), with a serif (Times New Roman) atom-label font
# to match the chem.js figures. Copy of ../tools/mols1/3/4/5/7.py settings; writes directly into fig/mol/.
# usage: <venv python> mols_e1to7.py fig/mol
import sys, re, math
from rdkit import Chem
from rdkit.Chem import rdDepictor
from rdkit.Chem.Draw import rdMolDraw2D
rdDepictor.SetPreferCoordGen(True)
out = sys.argv[1]
FONT = '/System/Library/Fonts/Supplemental/Times New Roman.ttf'
LB = (0.55, 0.72, 0.95)   # light-blue highlight
RED = (0.98, 0.68, 0.64)  # light-red highlight

def draw(name, smi, w, h, hl_atoms=(), hl_bonds=(), color=(0.12, 0.37, 0.75), rot=0, flip=False, methyl=True,
         keepH=False, recolor_bonds=(), recolor_atoms=None):
    if keepH:
        ps = Chem.SmilesParserParams(); ps.removeHs = False; m = Chem.MolFromSmiles(smi, ps)
    else:
        m = Chem.MolFromSmiles(smi)
    rdDepictor.Compute2DCoords(m)
    if rot or flip:
        c = m.GetConformer(); a = math.radians(rot)
        for i in range(m.GetNumAtoms()):
            p = c.GetAtomPosition(i); x, y = p.x, p.y
            if flip: x = -x
            c.SetAtomPosition(i, (x*math.cos(a)-y*math.sin(a), x*math.sin(a)+y*math.cos(a), 0))
    d = rdMolDraw2D.MolDraw2DSVG(w, h)
    o = d.drawOptions(); o.useBWAtomPalette(); o.bondLineWidth = 2; o.explicitMethyl = methyl; o.fixedBondLength = 34; o.clearBackground = False
    o.addStereoAnnotation = False; o.padding = 0.06; o.minFontSize = 15; o.maxFontSize = 18; o.multipleBondOffset = 0.18
    o.fontFile = FONT
    hlc = {i: color for i in hl_atoms}; hbc = {i: color for i in hl_bonds}
    d.DrawMolecule(m, highlightAtoms=list(hl_atoms), highlightBonds=list(hl_bonds), highlightAtomColors=hlc, highlightBondColors=hbc)
    d.FinishDrawing(); s = d.GetDrawingText()
    # optional: recolor whole bond strokes (by bond index) and atom labels (by atom index)
    def rb(mm):
        line = mm.group(0)
        k = int(re.search(r"class='bond-(\d+) ", line).group(1))
        return line.replace('stroke:#000000', 'stroke:#1F5FBF') if k in recolor_bonds else line
    if recolor_bonds:
        s = re.sub(r"<path class='bond-\d+ [^\n]*", rb, s)
    if recolor_atoms:
        for ai, col in recolor_atoms.items():
            s = re.sub(r"(<path class='atom-%d'[^>]*?)fill:#000000" % ai, r'\g<1>fill:' + col, s)
            s = re.sub(r"(<path class='atom-%d'[^>]*?)fill='#000000'" % ai, r"\g<1>fill='" + col + "'", s)
            s = re.sub(r"(<path class='atom-%d'[^>]*?)stroke:#000000" % ai, r'\g<1>stroke:' + col, s)
    open(f'{out}/{name}.svg', 'w').write(s)

# Exp 1 (mols1.py)
draw('fig1_skel_hex', 'CC(C)C(CC)CCC', 230, 170, methyl=False)
draw('fig1_a6', 'CCC(Cl)CC', 260, 130, methyl=False)
draw('fig1_b4', 'CCCCC', 260, 130, methyl=False)
draw('fig1_b5', 'C#CC(C)CC', 260, 130, methyl=False)
# Exp 3 (mols3.py)
draw('e3_cyclohexene', 'C1CCC=CC1', 150, 140, hl_bonds=(3,), color=RED, rot=0)
draw('e3_dibromo', 'BrC1CCCCC1Br', 170, 150)
draw('e3_cyclohexane', 'C1CCCCC1', 150, 140)
draw('e3_bromocyclohexane', 'BrC1CCCCC1', 170, 140)
draw('e3_benzene', 'c1ccccc1', 150, 140)
draw('e3_toluene', 'Cc1ccccc1', 150, 150)
draw('e3_diol', 'OC1CCCCC1O', 170, 150)
draw('e3_q_cyclohexene', 'C1CCC=CC1', 120, 110)
draw('e3_q_benzene', 'c1ccccc1', 120, 110)
draw('e3_q_cyclopentene', 'C1CC=CC1', 110, 100)
# Exp 4 (mols4.py)
draw('exp4_phenol', 'Oc1ccccc1', 150, 150, hl_atoms=(0,), color=RED)
draw('exp4_thymol', 'Oc1cc(C)ccc1C(C)C', 190, 170, hl_atoms=(0,), color=RED)
draw('exp4_phenol_eq', 'Oc1ccccc1', 140, 140)
draw('exp4_phenoxide', '[O-]c1ccccc1', 140, 140)
# Fig 4.2: ring carbons bonded to the C-OH carbon (atoms 2 and 6) highlighted blue; OH label red, as in the other structures
draw('exp4_cyclohexanol', 'OC1CCCCC1', 140, 140, methyl=False, hl_atoms=(2, 6), color=LB, recolor_atoms={0: '#C0392B'})
draw('exp4_cyclohexanol_q', 'OC1CCCCC1', 150, 150, methyl=False)
draw('exp4_cyclohexanone', 'O=C1CCCCC1', 140, 140, methyl=False)
# Exp 5 (mols5.py)
draw('benzaldehyde5', '[H]C(=O)c1ccccc1', 170, 150, rot=0, keepH=True)
# Exp 7 (mols7.py)
draw('aniline', 'Nc1ccccc1', 150, 150)
# Fig 7.1: the benzene ring (the carbon group on N) in blue, matching the caption
draw('aniline_blue', 'Nc1ccccc1', 150, 150, recolor_bonds=(1, 2, 3, 4, 5, 6))
draw('phenylephrine', 'CNCC(O)c1cccc(O)c1', 260, 180)
draw('histamine', 'NCCc1c[nH]cn1', 220, 170)
draw('methamphetamine', 'CNC(C)Cc1ccccc1', 240, 170)
draw('anilinium', '[NH3+]c1ccccc1', 150, 160)
draw('benzamide', 'NC(=O)c1ccccc1', 170, 160)
print('ok')
