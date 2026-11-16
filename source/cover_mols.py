import sys
from rdkit import Chem
from rdkit.Chem import rdDepictor
from rdkit.Chem.Draw import rdMolDraw2D
rdDepictor.SetPreferCoordGen(True)
out=sys.argv[1]
def draw(name,smi,w,h):
    m=Chem.MolFromSmiles(smi); rdDepictor.Compute2DCoords(m)
    d=rdMolDraw2D.MolDraw2DSVG(w,h); o=d.drawOptions()
    o.bondLineWidth=3; o.fixedBondLength=30; o.clearBackground=False; o.padding=0.08; o.minFontSize=16; o.maxFontSize=18
    o.addStereoAnnotation=False
    d.DrawMolecule(m); d.FinishDrawing(); open(f'{out}/{name}.svg','w').write(d.GetDrawingText())
draw('aspirin','CC(=O)Oc1ccccc1C(=O)O',260,220)
draw('glucose','OC[C@H]1O[C@@H](O)[C@H](O)[C@@H](O)[C@@H]1O',260,220)
draw('vitc','OCC(O)C1OC(=O)C(O)=C1O',260,220)
draw('dipeptide','CC(N)C(=O)NCC(=O)O',260,220)
draw('caffeine','Cn1cnc2c1c(=O)n(C)c(=O)n2C',260,220)
draw('cholesterol','CC(C)CCCC(C)C1CCC2C1(C)CCC1C2CC=C2CC(O)CCC12C',330,240)
