const L=require('../lablib.js'); const {checkRow,P,title,h2,h3,h4,bullet,step,sub,materials,note,caution,img,table,space,nameBlock,build,W,D,runs}=L;
const fs=require('fs');
const F=process.argv[2]+'/'; const OUT=process.argv[3];
const {Paragraph,AlignmentType,Table,TableRow,TableCell,ImageRun,WidthType,BorderStyle,ShadingType,HeightRule,VerticalAlign,TableLayoutType}=D;
const M=D; const R=s=>new M.MathRun(s);
const mathP=(kids,o={})=>new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:120,after:o.after??200},keepNext:o.keepNext,children:[new M.Math({children:kids})]});
const cap=(s)=>P(s,{align:AlignmentType.CENTER,after:80,keepNext:true});
// ---- report-sheet table with a structure image in column 2 ----
const bd={style:BorderStyle.SINGLE,size:6,color:'000000'}; const borders={top:bd,bottom:bd,left:bd,right:bd};
const pngSize=f=>{const b=fs.readFileSync(f);return [b.readUInt32BE(16),b.readUInt32BE(20)];};
function tcell(w,kids,o={}){return new TableCell({borders,width:{size:w,type:WidthType.DXA},verticalAlign:o.v||VerticalAlign.TOP,margins:{top:60,bottom:60,left:100,right:100},
  shading:o.shade?{fill:o.shade,type:ShadingType.CLEAR,color:'auto'}:undefined,children:kids});}
const tp=(s,o={})=>new Paragraph({alignment:o.align,children:runs(s,{bold:o.bold,size:22}),spacing:{after:0}});
function structImg(name){const f=F+name+'.png';const [w,h]=pngSize(f);let s=0.95/3;let pw=w*s,ph=h*s;if(pw>168){ph*=168/pw;pw=168;}
  return new Paragraph({alignment:AlignmentType.CENTER,spacing:{after:0},children:[new ImageRun({type:'png',data:fs.readFileSync(f),transformation:{width:Math.round(pw),height:Math.round(ph)},altText:L.altFor(f)})]});}
function dataTable(widths,head,rows,h){
  const hdr=new TableRow({cantSplit:true,tableHeader:true,children:head.map((t,i)=>tcell(widths[i],[tp(t,{bold:true,align:AlignmentType.CENTER})],{shade:'E7ECF5',v:VerticalAlign.CENTER}))});
  const body=rows.map(([n,fig])=>new TableRow({cantSplit:true,height:{value:h,rule:HeightRule.ATLEAST},children:[
    tcell(widths[0],[tp('**'+n+'**',{align:AlignmentType.CENTER})],{v:VerticalAlign.CENTER}),tcell(widths[1],[structImg(fig)],{v:VerticalAlign.CENTER}),
    ...widths.slice(2).map(w=>tcell(w,[tp('')]))]}));
  return new Table({width:{size:widths.reduce((a,b)=>a+b,0),type:WidthType.DXA},columnWidths:widths,layout:TableLayoutType.FIXED,rows:[hdr,...body]});
}
const c=[];
c.push(title('Experiment #1: Functional Groups'));
c.push(h3('Goals',{before:0}));
['Build three-dimensional models of organic compounds and draw them in different two-dimensional formats.',
 'Identify the functional group in a compound drawn in any of these formats.',
 'Predict the shape and bond angle, polarity, strongest intermolecular force, and molar mass of a compound.'].forEach(s=>c.push(bullet(s)));
c.push(h2('Introduction'));
c.push(P('There are millions of organic compounds, but they can be sorted into a small number of **families**. Each family has a unique structural feature called a **functional group**: a specific atom or group of atoms bonded in a specific way. Compounds with the same functional group have similar properties and undergo the same types of chemical reactions, so learning the functional groups now prepares you for the rest of the semester (hydrocarbons in Experiment #3, alcohols in #4, aldehydes and ketones in #5, carboxylic acids and esters in #6, and amines and amides in #7).'));
c.push(P('In this lab, you will build three-dimensional models of organic compounds, practice drawing them in different two-dimensional formats, and identify their functional groups. You will also review four ideas from general chemistry that help predict how a molecule behaves: **molecular shape**, **polarity**, **intermolecular forces (IMFs)**, and **molar mass**. Everything you need is explained in this Introduction, so do not worry if you have forgotten some of it.'));
// ---------- A ----------
c.push(h3('A. Structures, Functional Groups, Shape, and Molar Mass'));
c.push(h4('Two- and Three-Dimensional Representations'));
c.push(P('Molecules are three-dimensional. A model kit (or a computer simulation) shows the true size and shape of a molecule. To show a 3D shape on flat paper, we use three kinds of bonds (Figure 1): a plain **line** is a bond in the plane of the paper, a solid **wedge** is a bond coming forward (toward you), and a **dashed** wedge is a bond going back (away from you).',{keepNext:true}));
c.push(...img(F+'fig1_1.png',540,195,'**Figure 1:** Methane, CH_{4}, as a ball-and-stick model and as a wedge–dash drawing.'));
c.push(P('Organic compounds are drawn in three common two-dimensional formats (Figure 2):'));
c.push(bullet('A **complete (expanded) structural formula** shows *every* atom and *every* bond.'));
c.push(bullet('A **condensed structural formula** groups each carbon with the hydrogens bonded to it, and the number of hydrogens is written as a subscript (CH_{3}, CH_{2}, CH). Bonds to hydrogen are not drawn.'));
c.push(bullet('A **line-angle structural formula** (also called a **line structure** or **skeletal structure**) is the simplest. C and H atoms are not written, and C–H bonds are not drawn. A carbon atom is at every corner and at every line end, and each carbon has enough hydrogens to give it four bonds. All **heteroatoms** (atoms other than C and H, such as O, N, and Cl) and the hydrogens bonded to them are written.'));
c.push(...img(F+'fig1_2.png',624,231,'**Figure 2:** The same compound, 3-ethyl-2-methylhexane (C_{9}H_{20}), in three formats.'));
c.push(h4('The Functional Groups'));
c.push(P('In Figures 3–8, the atoms and bonds of each functional group are highlighted in blue, and each structure is labeled with its family name.'));
c.push(P('**Hydrocarbons** contain only carbon and hydrogen atoms. **Alkanes** contain only single bonds, **alkenes** contain at least one carbon-carbon double bond (C=C), and **alkynes** contain at least one carbon-carbon triple bond (C≡C) (Figure 3).',{keepNext:true}));
c.push(...img(F+'fig1_3.png',560,132,'**Figure 3:** Hydrocarbons: an alkane, an alkene, and an alkyne.'));
c.push(P('An **alkyl halide** (haloalkane) has a halogen atom (F, Cl, Br, or I) bonded to a carbon. Alkyl halides are classified by the carbon that holds the halogen: it is **primary (1°)** if that carbon is bonded to one other carbon, **secondary (2°)** if it is bonded to two, and **tertiary (3°)** if it is bonded to three (Figure 4).',{keepNext:true}));
c.push(...img(F+'fig1_4.png',560,134,'**Figure 4:** Primary, secondary, and tertiary alkyl halides.'));
c.push(P('**Alcohols and ethers** contain an oxygen atom with only single bonds. An alcohol has a **hydroxyl group** (–OH) bonded to a carbon atom. In an ether, the oxygen atom is bonded to two carbon atoms (C–O–C) (Figure 5).',{keepNext:true}));
c.push(...img(F+'fig1_5.png',500,133,'**Figure 5:** An alcohol and an ether.'));
c.push(P('**Aldehydes and ketones** contain a **carbonyl group**, a carbon-oxygen double bond (C=O). In an aldehyde, the carbonyl carbon is bonded to at least one hydrogen atom. In a ketone, the carbonyl carbon is bonded to two other carbon atoms (Figure 6).',{keepNext:true}));
c.push(...img(F+'fig1_6.png',560,106,'**Figure 6:** Two aldehydes and a ketone.'));
c.push(P('**Carboxylic acids and esters** both have a carbonyl group whose carbon is also bonded to a second oxygen. In a carboxylic acid, that oxygen is bonded to a hydrogen, so the acid has a **carboxyl group** (–COOH), a carbonyl and a hydroxyl on the same carbon. In an ester, that oxygen is bonded to a carbon instead of a hydrogen (–COO–C) (Figure 7).',{keepNext:true}));
c.push(...img(F+'fig1_7.png',500,106,'**Figure 7:** A carboxylic acid and an ester.'));
c.push(P('**Amines and amides** contain a nitrogen atom. Both are derivatives of **ammonia**, NH_{3}. Ammonia itself is not an organic compound and is not an amine. In an **amine**, one, two, or three carbon groups replace the hydrogen atoms of ammonia. Amines are classified as **primary (1°)**, **secondary (2°)**, or **tertiary (3°)** by the number of carbon atoms bonded directly to the nitrogen. (Note that this counts carbons on the *nitrogen*, while alkyl halides are classified by the carbons on the *carbon* that holds the halogen.) In an **amide**, the nitrogen is bonded to a carbonyl carbon (Figure 8).',{keepNext:true}));
c.push(...img(F+'fig1_8.png',624,119,'**Figure 8:** Ammonia, primary, secondary, and tertiary amines, and an amide.'));
c.push(h4('Molar Mass'));
c.push(P('A **mole** is a counting unit: 1 mole of anything is 6.022 × 10^{23} particles (**Avogadro’s number**). The **molar mass** of a compound is the mass in grams of one mole of it (g/mol). Molar mass tells us the relative size of molecules and lets us weigh out a known number of molecules in the lab. To calculate the molar mass of a compound, write its molecular formula, multiply the number of atoms of each element by that element’s atomic mass (from the periodic table), and add the results. Atomic masses used in this lab: H 1.008, C 12.01, N 14.01, O 16.00, Cl 35.45. Table 1 shows the calculation for the amino acid glycine, H_{2}N–CH_{2}–COOH (C_{2}H_{5}NO_{2}).'));
c.push(cap('**Table 1: Molar Mass of Glycine, C_{2}H_{5}NO_{2}**'));
c.push(table([1700,2300,2900,2460],[['Element','Number of atoms','Atomic mass (g/mol)','Subtotal (g/mol)'],
 ['C','2','× 12.01','= 24.02'],['H','5','× 1.008','= 5.040'],['N','1','× 14.01','= 14.01'],['O','2','× 16.00','= 32.00'],
 [{t:'**Molar mass of glycine**',span:3,align:AlignmentType.RIGHT},'**= 75.07 g/mol**']],{firstColBold:true}));
c.push(mathP([R('2(12.01)+5(1.008)+1(14.01)+2(16.00)=75.07 g/mol')],{after:160}));
c.push(h4('Molecular Geometry (VSEPR)'));
c.push(P('The shape of a molecule is predicted with **valence-shell electron-pair repulsion (VSEPR) theory**. Electron groups around a central atom repel each other (like charges repel), so they spread out as far apart as possible. To predict the shape around an atom:'));
c.push(bullet('Count the **electron groups** around it. Each bonded atom counts as one group, whether the bond is single, double, or triple, and each **lone pair** (nonbonding pair) counts as one group. In neutral organic molecules, C has no lone pairs, N has one, O has two, and a halogen has three.'));
c.push(bullet('The number of electron groups gives the **electron-group geometry** and the ideal bond angle. The **molecular shape** describes only where the *atoms* are, so it depends on how many of the groups are lone pairs (Table 2).'));
c.push(P('Lone pairs repel a little more strongly than bonds, so they squeeze the bond angles slightly below the ideal value: about 107° in NH_{3} and 104.5° in H_{2}O instead of 109.5°. In this lab, report the ideal VSEPR angle from Table 2 and note when lone pairs make the real angle smaller.'));
c.push(cap('**Table 2: Electron-Group Geometry and Molecular Shape**'));
c.push(table([1300,1700,1200,1720,1720,1720],[['Electron groups','Electron-group geometry','Ideal bond angle','0 lone pairs','1 lone pair','2 lone pairs'],
 ['2','Linear','180°','Linear',{t:'',shade:'D9D9D9'},{t:'',shade:'D9D9D9'}],
 ['3','Trigonal planar','120°','Trigonal planar','Bent',{t:'',shade:'D9D9D9'}],
 ['4','Tetrahedral','109.5°','Tetrahedral','Trigonal pyramidal','Bent']],{firstColBold:true}));
c.push(P('The last three columns give the molecular shape.',{before:80,run:{size:20}}));
// ---------- B ----------
c.push(h3('B. Polarity and Intermolecular Forces'));
c.push(P('**Bond polarity.** **Electronegativity** is the ability of an atom to attract the shared electrons in a bond. Electronegativity values (Appendix D): H 2.20, C 2.55, N 3.04, Cl 3.16, O 3.44. When the two atoms in a bond have different electronegativities (a difference of about 0.5 or more), the electrons are shared unequally and the bond is **polar**: the more electronegative atom has a partial negative charge (δ−) and the other atom has a partial positive charge (δ+). C–O, C=O, O–H, N–H, C–N, and C–Cl bonds are polar. C–C bonds are nonpolar, and **C–H bonds are treated as nonpolar** (difference 0.35).'));
c.push(P('**Molecular polarity.** A molecule is **polar** if it has polar bonds *and* its shape does not let the bond dipoles cancel, so one end of the molecule is partly negative and the other end partly positive (a **dipole**). Carbon dioxide, CO_{2}, has two polar C=O bonds, but they point in opposite directions in the linear molecule and cancel, so CO_{2} is **nonpolar**. Water, H_{2}O, has two polar O–H bonds, and the two lone pairs on oxygen make the molecule bent, so the bond dipoles do not cancel and water is **polar** (Figure 9). Hydrocarbons contain only C–C and C–H bonds, so they are **nonpolar**. Most molecules with an O, N, or halogen atom in an unsymmetrical position are polar. Building a model helps you see whether the bond dipoles cancel.',{keepNext:true}));
c.push(...img(F+'fig1_9.png',520,171,'**Figure 9:** Bond dipoles (crossed arrows that point toward the δ− atom) cancel in linear CO_{2} but not in bent H_{2}O, which has a net dipole.'));
c.push(P('**Intermolecular forces (IMFs)** are attractions *between* molecules (or between ions and molecules). The larger the partial (or full) charges, the stronger the attraction. Stronger IMFs hold molecules together more tightly, which raises boiling points and affects solubility (“like dissolves like”: polar substances dissolve in polar solvents such as water, and nonpolar substances dissolve in nonpolar solvents). IMFs also hold together the shapes of proteins and DNA in the body. Figure 10 lists the four types from strongest to weakest.',{keepNext:true}));
c.push(...img(F+'fig1_10.png',460,179,'**Figure 10:** The four types of intermolecular forces, from strongest (top) to weakest (bottom).'));
c.push(P('To find the **strongest IMF in a pure substance** (between two molecules of the same compound), check in this order:',{keepNext:true}));
c.push(bullet('Does the molecule have an H bonded directly to O, N, or F (an O–H, N–H, or F–H bond)? If yes, the strongest IMF is **hydrogen bonding**. A molecule that contains O or N but has no O–H or N–H bond cannot hydrogen bond with itself.'));
c.push(bullet('If not, is the molecule polar? If yes, the strongest IMF is **dipole–dipole**.'));
c.push(bullet('If the molecule is nonpolar, its only IMF is **London dispersion**.'));
c.push(P('Ion–dipole forces need ions, so they do not occur in the pure molecular compounds in this lab.',{before:80}));
// ---------- Safety & waste ----------
c.push(h3('Hazards and Safety Instructions'));
c.push(P('No chemicals are used in this experiment. Follow your laboratory’s dress code, and wear safety goggles if chemicals are in use in the room (or as your instructor directs). Do not eat or drink in the laboratory.',{after:100}));
c.push(bullet('**Small Parts:** Model kit pieces are small. Never put a piece in your mouth. If your kit uses **magnetic atoms**, swallowing two or more is a medical emergency, because the magnets can pull together through the walls of the intestine; tell your instructor at once if a piece is swallowed.'));
c.push(bullet('**Magnetic Kits:** If your kit uses magnetic atoms, keep the pieces away from pacemakers and other medical implants, and away from phones, credit cards, and laptops.'));
c.push(bullet('**Pinching and Slipping:** The atoms snap together with force; keep fingertips and skin out from between them. Pick up any pieces that fall on the floor so no one slips on them.'));
c.push(h3('Waste Instructions'));
c.push(bullet('**No chemical waste** is produced in this experiment.'));
c.push(bullet('**Model kit:** Take all of your models apart, put every piece back in the kit, and return the kit to the front of the room (or as your instructor directs). Tell your instructor about any missing or broken pieces so the kit is complete for the next class.'));
// ---------- Procedure ----------
c.push(h2('Procedure',{before:360}));
c.push(note('Instructor Notes:','No chemicals are used. Students may work with a partner (or as the instructor directs), but each student completes their own Report Sheet. Check each student’s completed Part A and Part B tables and initial the Instructor check box (B.5). Count the kit pieces when the kits are returned (Lab Check-Out).'));
c.push(h4('The Molecular Model Kit'));
c.push(P('A molecular model kit contains colored pieces that represent the atoms found in organic compounds. Table 3 shows a common color scheme, but colors vary from kit to kit, so check the key that comes with your kit. Each atom has the correct number of bonding sites for that element. For a **single bond**, join two atoms with one connection; for a **double bond** or **triple bond**, use two or three bond pieces (or flexible bonds), as your kit’s directions show. Lone pairs are usually not represented by pieces, so count them on paper.'));
c.push(cap('**Table 3: Common Model Kit Atoms (check the key in your kit)**'));
c.push(table([2340,2340,2340,2340],[['Color','Element','Number of bonds','Lone pairs (neutral)'],
 ['Black','Carbon','4','0'],['White','Hydrogen','1','0'],['Red','Oxygen','2','2'],['Blue','Nitrogen','3','1'],['Green','Halogen (F, Cl, Br, I)','1','3'],['Yellow','Sulfur','2','2'],['Purple','Phosphorus','3','1']].map((r,i)=>i?r.map(x=>({t:x,align:AlignmentType.CENTER})):r)));
c.push(h3('A. Structures, Functional Groups, Shape, and Molar Mass'));
c.push(materials('Molecular model kit, periodic table, calculator'));
c.push(step('A.1','Get a model kit (your instructor will tell you where). Build a model of each of the six structures (1–6) in the Part A table on your Report Sheet. Check that every atom has the correct number of bonds (Table 3). For a line-angle structure, first add the carbon at each corner and line end and the hydrogens that give each carbon four bonds.'));
c.push(step('A.2','Name the functional group (family) of each compound. If it is an alkyl halide or an amine, classify it as primary (1°), secondary (2°), or tertiary (3°). A hydrocarbon with only single bonds (such as methane) is an alkane. Write “none” only if the compound is not organic (it has no carbon).'));
c.push(step('A.3','Determine the molecular shape and the ideal bond angle around the central atom. Count the electron groups (bonded atoms plus lone pairs) and use Table 2. If the molecule has two identical central atoms, describe either one; for a larger molecule, use the center-most atom.'));
c.push(step('A.4','Write the molecular formula of each compound and calculate its molar mass in g/mol. Show your work.'));
c.push(h3('B. Polarity and Intermolecular Forces'));
c.push(materials('Molecular model kit'));
c.push(step('B.1','Take apart your Part A models. Build a model of each of the six structures (1–6) in the Part B table on your Report Sheet.'));
c.push(step('B.2','Name the functional group (family) of each compound. If it is an alkyl halide or an amine, classify it as 1°, 2°, or 3°.'));
c.push(step('B.3','Determine whether each molecule is polar (P) or nonpolar (NP). Find the polar bonds, then use the shape of your model to decide whether their dipoles cancel.'));
c.push(step('B.4','Determine the strongest intermolecular force in the pure substance (between two molecules of the same compound), using the three checks under “To find the strongest IMF in a pure substance” in Introduction Part B.'));
c.push(step('B.5','When both tables are complete, show your Report Sheet to your instructor. **Instructor check:** your instructor checks your Part A and Part B tables. Then take apart all models, check that every piece is in the kit, and return the kit.'));
// ---------- Pre-lab ----------
c.push(h2('Pre-Lab Questions',{pageBreak:true,before:0}));
const PL=[['1.','Model kit pieces are small, and some kits use magnetic atoms. Give two safety precautions you must follow when using the kit, and explain the reason for each.',943],
 ['2.','This lab produces no chemical waste. What must you do with your models and the kit before you leave, and why must you report missing pieces?',820],
 ['3.','Using Table 3, list the color and number of each atom you need to build ethanol, CH_{3}CH_{2}OH. How would you make the C=O double bond of an aldehyde with the kit?',943],
 ['4.','Draw propylamine, CH_{3}CH_{2}CH_{2}NH_{2}, as a complete (expanded) structural formula and as a line-angle structure. Name its functional group and classify it as 1°, 2°, or 3°.',1250],
 ['5.','Calculate the molar mass of ethanol, C_{2}H_{6}O. Show your work.',820],
 ['6.','For the oxygen atom in methanol, CH_{3}–OH, give the number of electron groups, the number of lone pairs, the molecular shape, and the ideal bond angle. Why is the actual C–O–H angle slightly smaller than the ideal angle?',880],
 ['7.','Ethanol, CH_{3}CH_{2}OH, and dimethyl ether, CH_{3}–O–CH_{3}, have the same molar mass. Is each polar or nonpolar? What is the strongest IMF in each pure substance? Which would you predict has the higher boiling point, and why?',0]];
PL.forEach(([a,b,sp])=>{c.push(step(a,b,{left:360,after:0})); if(sp)c.push(space(sp));});
// ---------- Report ----------
c.push(h2('Report Sheet',{pageBreak:true,before:0,rule:true}));
c.push(...nameBlock());
c.push(h3('A. Structures, Functional Groups, Shape, and Molar Mass',{before:120}));
c.push(dataTable([520,2600,1900,1900,2440],['','A.1 Structure (build it)','A.2 Functional group (1°, 2°, 3°?)','A.3 Shape and bond angle','A.4 Molecular formula and molar mass (show work)'],
 [['1','fig1_a1c'],['2','fig1_a2c'],['3','fig1_a3c'],['4','fig1_a4c'],['5','fig1_a5c'],['6','fig1_a6c']],1300));
c.push(h3('B. Polarity and Intermolecular Forces',{before:240}));
c.push(dataTable([520,2600,2240,1600,2400],['','B.1 Structure (build it)','B.2 Functional group (1°, 2°, 3°?)','B.3 Polarity (P or NP)','B.4 Strongest IMF (pure substance)'],
 [['1','fig1_b1c'],['2','fig1_b2c'],['3','fig1_b3c'],['4','fig1_b4c'],['5','fig1_b5c'],['6','fig1_b6c']],1250));
c.push(P('',{after:120}));
c.push(checkRow('B.5','Part A and Part B tables complete'));
// ---------- Questions ----------
c.push(h2('Questions and Problems',{pageBreak:true,before:0}));
const Q=[['Q.1','Draw compound 6 from Part A as a complete (expanded) structural formula and as a condensed structural formula. Explain why it is classified as 1°, 2°, or 3°.',1680],
 ['Q.2','Compounds 1 and 4 in Part A both have four electron groups around the central atom. Explain why they have different molecular shapes and actual bond angles. Is compound 4 an amine? Explain.',1360],
 ['Q.3','Compounds 1 and 3 in Part B have the same molecular formula, C_{2}H_{4}O_{2}. Which would you predict has the higher boiling point? Explain using the strongest IMF in each.',1200],
 ['Q.4','Explain why compounds 4 and 5 in Part B are nonpolar. Which would dissolve better in water, compound 4 or compound 1? Explain using “like dissolves like.”',1200],
 ['Q.5','Name the family of each compound and classify it as 1°, 2°, or 3°:  (a) (CH_{3})_{3}C–Br   (b) CH_{3}–NH–CH_{2}CH_{3}   (c) CH_{3}CH_{2}CH_{2}–Cl   (d) (CH_{3}CH_{2})_{3}N',1040],
 ['Q.6','Lactic acid, CH_{3}–CH(OH)–COOH, builds up in muscles during hard exercise. (a) Name its two functional groups. (b) Calculate its molar mass. (c) What is the strongest IMF in pure lactic acid?',0]];
Q.forEach(([a,b,sp])=>{c.push(step(a,b,{left:0,after:0})); if(sp)c.push(space(sp));});
build(c,OUT).then(()=>console.log('wrote',OUT));
