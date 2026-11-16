# Appendix molecule drawings (RDKit). Run with the scratchpad venv python from fig/.
import json, re, math
from rdkit import Chem
from rdkit.Chem import rdDepictor, rdCIPLabeler
from rdkit.Chem.Draw import rdMolDraw2D
from rdkit.Geometry import Point2D
TNR='/System/Library/Fonts/Supplemental/Times New Roman.ttf'
OUT='figapp_mol/'; sizes={}
def draw(name,smi,labels=None,notes=None,carbon_labels=False,bl=26,fs=15,coordgen=True,rot=0,flip=False,keepH=False,cmap=None,wedge=True,xlabel=None,canvas=(-1,-1)):
    if keepH:
        p=Chem.SmilesParserParams(); p.removeHs=False; m=Chem.MolFromSmiles(smi,p)
    else: m=Chem.MolFromSmiles(smi)
    for a in m.GetAtoms():
        if a.GetAtomicNum()==0 and labels: a.SetProp('atomLabel',labels.pop(0))
        if carbon_labels and a.GetSymbol()=='C': a.SetProp('atomLabel','C')
    if xlabel:
        for i,t in xlabel.items(): m.GetAtomWithIdx(i).SetProp('atomLabel',t)
    if notes:
        for i,t in notes.items(): m.GetAtomWithIdx(i).SetProp('atomNote',str(t))
    rdDepictor.SetPreferCoordGen(coordgen and not cmap)
    if cmap: rdDepictor.Compute2DCoords(m,coordMap={k:Point2D(*v) for k,v in cmap.items()})
    else: rdDepictor.Compute2DCoords(m)
    if rot or flip:
        c=m.GetConformer(); a=math.radians(rot)
        for i in range(m.GetNumAtoms()):
            q=c.GetAtomPosition(i); x,y=q.x,q.y
            if flip: x=-x
            c.SetAtomPosition(i,(x*math.cos(a)-y*math.sin(a),x*math.sin(a)+y*math.cos(a),0))
    if wedge: Chem.WedgeMolBonds(m,m.GetConformer())
    d=rdMolDraw2D.MolDraw2DSVG(*canvas); o=d.drawOptions(); o.useBWAtomPalette(); o.fixedBondLength=bl; o.bondLineWidth=1.4
    o.fontFile=TNR; o.minFontSize=fs; o.maxFontSize=fs; o.padding=0.04; o.annotationFontScale=0.6; o.clearBackground=False; o.multipleBondOffset=0.18
    o.additionalAtomLabelPadding=0.05
    d.DrawMolecule(m); d.FinishDrawing(); s=d.GetDrawingText()
    w,h=[int(float(v)) for v in re.search(r"width='([\d.]+)px' height='([\d.]+)px'",s).groups()]
    open(OUT+name+'.svg','w').write(s); sizes[name]=[w,h]
    return m
# ---- Appendix B general structures (R groups as dummy atoms)
P3=0.866
G={'alkane':('*C([H])([H])C([H])([H])*',['R',"R'"],True,{0:(0,0),1:(1,0),2:(1,1),3:(1,-1),4:(2,0),5:(2,1),6:(2,-1),7:(3,0)}),
 'alkene':('*C(*)=C(*)*',['R','R','R','R'],True,{0:(-0.5,P3),1:(0,0),2:(-0.5,-P3),3:(1,0),4:(1.5,P3),5:(1.5,-P3)}),
 'alkyne':('*C#C*',['R',"R'"],True,{0:(0,0),1:(1,0),2:(2,0),3:(3,0)}),
 'arene':('*c1ccccc1',['R'],False,None),
 'haloalkane':('*[Cl]',['R'],False,{0:(0,0),1:(1,0)}),
 'alcohol':('*O[H]',['R'],False,{0:(0,0),1:(P3,0.5),2:(2*P3,0)}),
 'phenol':('[H]Oc1ccccc1',[],False,None),
 'thiol':('*S[H]',['R'],False,{0:(0,0),1:(P3,0.5),2:(2*P3,0)}),
 'sulfide':('*S*',['R',"R'"],False,{0:(0,0),1:(P3,0.5),2:(2*P3,0)}),
 'disulfide':('*SS*',['R',"R'"],False,{0:(0,0),1:(P3,0.5),2:(2*P3,0),3:(3*P3,0.5)}),
 'ether':('*O*',['R',"R'"],False,{0:(0,0),1:(P3,0.5),2:(2*P3,0)}),
 'aldehyde':('*C(=O)[H]',['R'],True,{0:(0,0),1:(P3,0.5),2:(P3,1.5),3:(2*P3,0)}),
 'ketone':('*C(=O)*',['R',"R'"],True,{0:(0,0),1:(P3,0.5),2:(P3,1.5),3:(2*P3,0)}),
 'acid':('*C(=O)O[H]',['R'],True,{0:(0,0),1:(P3,0.5),2:(P3,1.5),3:(2*P3,0),4:(3*P3,0.5)}),
 'ester':('*C(=O)O*',['R',"R'"],True,{0:(0,0),1:(P3,0.5),2:(P3,1.5),3:(2*P3,0),4:(3*P3,0.5)}),
 'amine':('*N([H])[H]',['R'],False,{0:(0,0),1:(P3,0.5),2:(P3,1.5),3:(2*P3,0)}),
 'amide':('*C(=O)N([H])[H]',['R'],True,{0:(0,0),1:(P3,0.5),2:(P3,1.5),3:(2*P3,0),4:(3*P3,0.5),5:(2*P3,-1)})}
for k,(s,l,cl,cm) in G.items():
    m=draw('gen_'+k,s,labels=list(l),carbon_labels=cl,keepH=True,bl=24,fs=15,wedge=False,cmap=cm,xlabel={1:'X'} if k=='haloalkane' else None,canvas={'alkyne':(120,40),'haloalkane':(64,40)}.get(k,(-1,-1)))
# halogen: relabel Cl as X
import fileinput
# ---- Appendix C worked examples, chain numbered with atom notes
C=[('ex1','CCOCCC',{3:1,4:2,5:3}),
   ('ex2','CC(Cl)CC(C)=O',{5:1,4:2,3:3,1:4,0:5}),
   ('ex3','CCC(CC)C(C)(C)C',{6:1,5:2,2:3,1:4,0:5}),
   ('ex4','C/C=C/C(C)C',{0:1,1:2,2:3,3:4,4:5}),
   ('ex5','CC(=O)CCO',{0:1,1:2,3:3,4:4}),
   ('ex6','NCCC(=O)O',{3:1,2:2,1:3}),
   ('ex7','CCc1cccc(c1)C(C)(C)C',{6:1,7:2,2:3}),
   ('ex8','CC(C)c1ccc(C)cc1',{3:1,6:4}),
   ('ex9','C[C@H](Cl)[C@@H](O)C(=O)O',{5:1,3:2,1:3,0:4})]
for n,s,nt in C:
    m=draw(n,s,notes=nt,bl=30,fs=16)
    print(n,[(a.GetIdx(),a.GetSymbol()) for a in m.GetAtoms()])
# ---- amino acids (zwitterions near pH 7; L = S except Cys = R)
AA=[('Gly','[NH3+]CC(=O)[O-]'),('Ala','[NH3+][C@@H](C)C(=O)[O-]'),('Val','[NH3+][C@@H](C(C)C)C(=O)[O-]'),('Leu','[NH3+][C@@H](CC(C)C)C(=O)[O-]'),
('Ile','[NH3+][C@@H]([C@@H](C)CC)C(=O)[O-]'),('Pro','[O-]C(=O)[C@@H]1CCC[NH2+]1'),('Phe','[NH3+][C@@H](Cc1ccccc1)C(=O)[O-]'),('Trp','[NH3+][C@@H](Cc1c[nH]c2ccccc12)C(=O)[O-]'),
('Met','[NH3+][C@@H](CCSC)C(=O)[O-]'),('Ser','[NH3+][C@@H](CO)C(=O)[O-]'),('Thr','[NH3+][C@@H]([C@@H](C)O)C(=O)[O-]'),('Cys','[NH3+][C@@H](CS)C(=O)[O-]'),
('Asn','[NH3+][C@@H](CC(N)=O)C(=O)[O-]'),('Gln','[NH3+][C@@H](CCC(N)=O)C(=O)[O-]'),('Tyr','[NH3+][C@@H](Cc1ccc(O)cc1)C(=O)[O-]'),('Asp','[NH3+][C@@H](CC(=O)[O-])C(=O)[O-]'),
('Glu','[NH3+][C@@H](CCC(=O)[O-])C(=O)[O-]'),('Lys','[NH3+][C@@H](CCCC[NH3+])C(=O)[O-]'),('Arg','[NH3+][C@@H](CCCNC(N)=[NH2+])C(=O)[O-]'),('His','[NH3+][C@@H](Cc1c[nH]cn1)C(=O)[O-]')]
for n,s in AA:
    m=Chem.MolFromSmiles(s)
    # backbone: N - CA - C(=O)O-, with side chain pointing up
    if n=='Pro':
        cm={3:(0,0),1:(1.3,-0.75),8:(-0.4,1.4)}
        m=draw('aa_'+n,s,bl=24,fs=15,cmap={3:(0,0),1:(1.3,-0.75)})
    else:
        idx_ca=1; idx_n=0; idx_c=[a.GetIdx() for a in m.GetAtomWithIdx(1).GetNeighbors() if a.GetSymbol()=='C' and a.GetDegree()==3 and any(b.GetSymbol()=='O' for b in a.GetNeighbors())]
        idx_c=idx_c[-1]
        cm={0:(-1.3,-0.75),1:(0,0),idx_c:(1.3,-0.75)}
        m=draw('aa_'+n,s,bl=24,fs=15,cmap=cm)
    rdCIPLabeler.AssignCIPLabels(m)
    print(n,[(a.GetIdx(),a.GetProp('_CIPCode')) for a in m.GetAtoms() if a.HasProp('_CIPCode')])
# ---- fatty acids
FA=[('lauric','CCCCCCCCCCCC(=O)O'),('myristic','CCCCCCCCCCCCCC(=O)O'),('palmitic','CCCCCCCCCCCCCCCC(=O)O'),('stearic','CCCCCCCCCCCCCCCCCC(=O)O'),
('palmitoleic','CCCCCC/C=C\\CCCCCCCC(=O)O'),('oleic','CCCCCCCC/C=C\\CCCCCCCC(=O)O'),('linoleic','CCCCC/C=C\\C/C=C\\CCCCCCCC(=O)O'),
('linolenic','CC/C=C\\C/C=C\\C/C=C\\CCCCCCCC(=O)O'),('arachidonic','CCCCC/C=C\\C/C=C\\C/C=C\\C/C=C\\CCCC(=O)O')]
for n,s in FA:
    m=Chem.MolFromSmiles(s)
    chain=[a.GetIdx() for a in m.GetAtoms() if a.GetSymbol()=='C']
    cm={}; x=y=0.0; sign=-1; cm[chain[0]]=(0,0)
    for i in range(len(chain)-1):
        b=m.GetBondBetweenAtoms(chain[i],chain[i+1])
        if b.GetBondTypeAsDouble()==2: dx,dy=1.0,0.0
        else:
            sign=-sign; dx,dy=math.cos(math.radians(30)),sign*0.5
        x+=dx; y+=dy; cm[chain[i+1]]=(x,y)
    m2=draw('fa_'+n,s,bl=17,fs=13,cmap=cm)
    rdCIPLabeler.AssignCIPLabels(m2); print(n,[b.GetProp('_CIPCode') for b in m2.GetBonds() if b.HasProp('_CIPCode')])
json.dump(sizes,open(OUT+'sizes.json','w'),indent=0)
