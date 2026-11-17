// Appendices A–F of the CHEM 3B Laboratory Manual.
// Build: ~/.local/node/bin/node src/appendix.js fig out/appendix.docx
// Figures: fig/figapp_equip.py, fig/figapp_draw.py (hand-drawn SVG), fig/figapp_mols.py (RDKit) -> fig/figapp_*.png, fig/figapp_mol/*.png
const fs=require('fs');
const L=require('../lablib.js'); const {P,title,h2,h3,h4,bullet,img,table,space,build,runs,W,D,TNR}=L;
const F=process.argv[2]+'/'; const OUT=process.argv[3];
const {Paragraph,TextRun,ImageRun,Table,TableRow,TableCell,WidthType,BorderStyle,AlignmentType,ShadingType,VerticalAlign,TableLayoutType,HeightRule}=D;
const c=[];
// title() with a page break before it (same formatting as lablib title())
const ptitle=s=>new Paragraph({heading:D.HeadingLevel.HEADING_1,pageBreakBefore:true,children:[new TextRun({text:s,font:L.HF,size:56,bold:true,color:L.BLUE})],spacing:{before:0,after:240}});
const cap=s=>P(s,{align:AlignmentType.CENTER,after:80,keepNext:true});
const note=s=>P(s,{run:{size:20},after:120});
// PNG size (px at 3x) -> display px
function pngSize(file){const b=fs.readFileSync(file);return [b.readUInt32BE(16)/3,b.readUInt32BE(20)/3];}
function picRun(file,scale=1,maxW=1e9,alt){let [w,h]=pngSize(file);let s=Math.min(scale,maxW/w);return new ImageRun({type:'png',data:fs.readFileSync(file),transformation:{width:Math.round(w*s),height:Math.round(h*s)},altText:L.altFor(file,alt)});}
function fig(file,caption,scale=1){const [w,h]=pngSize(file);return img(file,Math.round(w*scale),Math.round(h*scale),caption);}
// table with image-capable cells. cell: string | array of strings | {t, span, shade, align, bold, img:[file,scale,maxW], size}
const bd={style:BorderStyle.SINGLE,size:6,color:'000000'}; const borders={top:bd,bottom:bd,left:bd,right:bd};
function xcell(cv,w,hdr){
  const o=(cv&&typeof cv=='object'&&!Array.isArray(cv))?cv:{t:cv};
  const kids=[];
  if(o.img){kids.push(new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:40,after:o.t?20:40},children:[picRun(o.img[0],o.img[1]??1,o.img[2]??1e9,o.alt||('Structure: '+(Array.isArray(o.t)?o.t.join(', '):(o.t||''))))]}));}
  const arr=o.t==null?[]:(Array.isArray(o.t)?o.t:[o.t]);
  arr.forEach(t=>kids.push(new Paragraph({alignment:hdr?AlignmentType.CENTER:(o.align??(o.img?AlignmentType.CENTER:undefined)),children:runs(t,{bold:hdr||o.bold,size:o.size||20}),spacing:{after:0}})));
  if(!kids.length)kids.push(new Paragraph({children:[]}));
  return new TableCell({borders,width:{size:w,type:WidthType.DXA},columnSpan:o.span,verticalAlign:o.valign||VerticalAlign.CENTER,
    shading:(hdr||o.shade)?{fill:o.shade||'E7ECF5',type:ShadingType.CLEAR,color:'auto'}:undefined,margins:{top:50,bottom:50,left:90,right:90},children:kids});
}
function xtable(widths,rows,o={}){
  return new Table({width:{size:widths.reduce((a,b)=>a+b,0),type:WidthType.DXA},columnWidths:widths,layout:TableLayoutType.FIXED,
    rows:rows.map((r,ri)=>{const hdr=ri<(o.header??1);let ci=0;
      return new TableRow({cantSplit:true,tableHeader:hdr&&o.repeat!==false,children:r.map(cv=>{const span=(cv&&typeof cv=='object'&&!Array.isArray(cv)&&cv.span)||1;const w=widths.slice(ci,ci+span).reduce((a,b)=>a+b,0);ci+=span;return xcell(cv,w,hdr);})});})});
}
const M=F+'figapp_mol/';

// ======================= APPENDIX A =======================
c.push(title('Appendix A: Common Laboratory Equipment'));
c.push(P('Figures A.1 and A.2 show the glassware and equipment used in the experiments in this manual, and Table A.1 describes what each item is used for. If you are not sure which item to use, ask your instructor before you start.'));
c.push(...fig(F+'figapp_a1.png','**Figure A.1:** Glassware for holding, measuring, and transferring liquids.'));
c.push(...fig(F+'figapp_a2.png','**Figure A.2:** Equipment for stirring, heating, holding, and supporting.'));
c.push(cap('**Table A.1: Uses of Common Laboratory Equipment**'));
c.push(xtable([2700,6660],[['Item','What it is used for'],
 ['**Beaker**','Holding, mixing, and heating liquids; making hot and cold water baths. Its volume marks are only approximate.'],
 ['**Erlenmeyer flask**','Mixing, swirling, and heating liquids. The narrow neck reduces splashing and evaporation.'],
 ['**Graduated cylinder**','Measuring the volume of a liquid. Read the bottom of the meniscus at eye level.'],
 ['**Test tube**','Small-scale reactions and tests.'],
 ['**Volumetric pipet**','Delivering one exact volume of liquid. Fill it to the mark with a pipet bulb, never by mouth.'],
 ['**Buret**','Delivering a measured, adjustable volume of liquid, as in a titration. Read the volume to 0.01 mL.'],
 ['**Dropper (Pasteur pipet)**','Adding a liquid drop by drop.'],
 ['**Plastic transfer pipet**','Transferring small volumes of liquid; its marks give approximate volumes.'],
 ['**Funnel**','Pouring liquids into containers with narrow openings; gravity filtration with filter paper.'],
 ['**Büchner funnel and filter flask**','Vacuum (suction) filtration to collect a solid quickly.'],
 ['**Watch glass**','Covering a beaker; holding or weighing a small amount of solid.'],
 ['**Evaporating dish**','Heating a solution to evaporate the solvent and leave the solid behind.'],
 ['**Stirring rod**','Stirring mixtures; touching a drop of solution to pH or litmus paper.'],
 ['**Thermometer**','Measuring temperature in °C. Never use a thermometer to stir.'],
 ['**Test tube holder**','Holding a test tube while you heat it or move it when it is hot.'],
 ['**Test tube rack**','Holding test tubes upright.'],
 ['**Crucible tongs**','Picking up hot crucibles, evaporating dishes, and small beakers.'],
 ['**Spatula**','Transferring small amounts of solid.'],
 ['**Spot plate**','Running many small tests (a few drops each) side by side.'],
 ['**Mortar and pestle**','Grinding a solid, such as a tablet, into a fine powder.'],
 ['**Wash bottle**','Rinsing glassware and adding small amounts of distilled water.'],
 ['**Hot plate**','Heating water baths and solutions without an open flame. The surface stays hot after it is turned off.'],
 ['**Bunsen burner**','Heating with an open flame. Never use it near flammable organic liquids.'],
 ['**Ring stand with ring and clamp**','Holding a funnel, flask, or buret (with a buret clamp) at a fixed height.']],{}));

// ======================= APPENDIX B =======================
c.push(ptitle('Appendix B: Organic Functional Groups'));
c.push(P('A **functional group** is an atom or group of atoms that gives an organic compound its typical properties and reactions. In the general structures in Table B.1, R stands for a carbon-containing group (an alkyl group or a benzene ring); R and R′ may be the same group or different groups, and X stands for a halogen atom (F, Cl, Br, or I). Each example is named with its IUPAC name, followed by its common name in parentheses.'));
c.push(cap('**Table B.1: Common Functional Groups**'));
const g=k=>({img:[M+'gen_'+k+'.png',0.85],alt:'General structure of the '+k+' functional group.'});
c.push(xtable([1560,1750,2000,2250,1800],[['Class','General structure','Example','IUPAC name (common name)','Naming'],
 ['**Alkane**',g('alkane'),'CH_{3}CH_{2}CH_{3}','propane','ending *-ane*'],
 ['**Alkene**',g('alkene'),'CH_{2}=CH_{2}','ethene (ethylene)','ending *-ene*'],
 ['**Alkyne**',g('alkyne'),'HC≡CH','ethyne (acetylene)','ending *-yne*'],
 ['**Aromatic** (arene)',g('arene'),'C_{6}H_{5}–CH_{3}','methylbenzene (toluene)','*benzene* as parent; *phenyl-* as a substituent'],
 ['**Haloalkane** (alkyl halide)',g('haloalkane'),'CH_{3}CH_{2}Cl','chloroethane (ethyl chloride)','prefix only: *fluoro-, chloro-, bromo-, iodo-*'],
 ['**Alcohol**',g('alcohol'),'CH_{3}CH_{2}OH','ethanol (ethyl alcohol)','suffix *-ol*; prefix *hydroxy-*'],
 ['**Phenol**',g('phenol'),'C_{6}H_{5}–OH','phenol','*phenol* as parent'],
 ['**Thiol**',g('thiol'),'CH_{3}CH_{2}SH','ethanethiol (ethyl mercaptan)','suffix *-thiol*; prefix *sulfanyl-*'],
 ['**Sulfide** (thioether)',g('sulfide'),'CH_{3}–S–CH_{3}','(methylsulfanyl)methane (dimethyl sulfide)','common name: alkyl alkyl *sulfide*'],
 ['**Disulfide**',g('disulfide'),'CH_{3}–S–S–CH_{3}','(methyldisulfanyl)methane (dimethyl disulfide)','common name: alkyl alkyl *disulfide*'],
 ['**Ether**',g('ether'),'CH_{3}–O–CH_{2}CH_{3}','methoxyethane (ethyl methyl ether)','prefix *alkoxy-* on the larger alkane'],
 ['**Aldehyde**',g('aldehyde'),'CH_{3}CHO','ethanal (acetaldehyde)','suffix *-al*'],
 ['**Ketone**',g('ketone'),'CH_{3}COCH_{3}','propanone (acetone)','suffix *-one*; prefix *oxo-*'],
 ['**Carboxylic acid**',g('acid'),'CH_{3}COOH','ethanoic acid (acetic acid)','suffix *-oic acid*'],
 ['**Ester**',g('ester'),'CH_{3}COOCH_{3}','methyl ethanoate (methyl acetate)','alkyl (from the alcohol) + *-oate* (from the acid)'],
 ['**Amine**',g('amine'),'CH_{3}CH_{2}NH_{2}','ethanamine (ethylamine)','suffix *-amine*; prefix *amino-*'],
 ['**Amide**',g('amide'),'CH_{3}CONH_{2}','ethanamide (acetamide)','suffix *-amide*']],{repeat:true}));
c.push(P('**Notes:**',{before:160,after:60,keepNext:true}));
c.push(bullet('Amines are classified by the number of carbon groups on the nitrogen: primary (1°) R–NH_{2}, secondary (2°) R_{2}NH, and tertiary (3°) R_{3}N. In amides, one or both H atoms on the nitrogen can also be replaced by carbon groups.'));
c.push(bullet('Alcohols are classified by the number of carbon groups bonded to the carbon that holds the –OH group: primary (1°), secondary (2°), or tertiary (3°).'));
c.push(bullet('Current IUPAC names place a locant just before the part of the name it describes (propan-2-ol, but-2-ene). Older names such as 2-propanol and 2-butene, which are still common and are used in some experiments in this manual, name the same compounds.'));

// ======================= APPENDIX C =======================
c.push(ptitle('Appendix C: IUPAC Naming Guide'));
c.push(P('The International Union of Pure and Applied Chemistry (IUPAC) sets the rules for naming organic compounds so that every structure has one clear name. This guide covers the rules needed in this course. It is based on the current IUPAC recommendations (2013).'));
c.push(h3('C.1 The Parts of a Name',{before:120}));
c.push(P('A substitutive name is built from the parts shown in Figure C.1. The **parent** gives the number of carbons in the main chain or ring, the **bond ending** shows whether that chain has only single bonds (*-an-*), a double bond (*-en-*), or a triple bond (*-yn-*), and the **suffix** names the highest-priority functional group (the principal group). Every other group is named as a **prefix**, with a number (locant) that shows where it is attached.',{keepNext:true}));
c.push(...fig(F+'figapp_c1.png','**Figure C.1:** The parts of the name (2*S*,3*S*)-3-chloro-2-hydroxybutanoic acid (Example 9 in Table C.4).'));
c.push(cap('**Table C.1: Parent Names for Carbon Chains**'));
c.push(xtable([1170,1170,1170,1170,1170,1170,1170,1170],[['Carbons','Parent','Example','','Carbons','Parent','Example',''],
 ['1','meth-','methane','CH_{4}','6','hex-','hexane','C_{6}H_{14}'],['2','eth-','ethane','C_{2}H_{6}','7','hept-','heptane','C_{7}H_{16}'],
 ['3','prop-','propane','C_{3}H_{8}','8','oct-','octane','C_{8}H_{18}'],['4','but-','butane','C_{4}H_{10}','9','non-','nonane','C_{9}H_{20}'],
 ['5','pent-','pentane','C_{5}H_{12}','10','dec-','decane','C_{10}H_{22}']].map((r,i)=>i==0?[r[0],r[1],{t:'Alkane',span:2},r[4],r[5],{t:'Alkane',span:2}]:r)));
c.push(P('A ring is named by adding *cyclo-* to the parent name (cyclohexane, cyclopentanol). A benzene ring keeps the name *benzene*.',{before:120}));
c.push(h3('C.2 Priority of Functional Groups'));
c.push(P('When a molecule has more than one functional group, only the highest-priority group is named as the suffix. Every lower-priority group is named as a prefix. Table C.2 lists the groups from highest to lowest priority.',{keepNext:true}));
c.push(cap('**Table C.2: Functional Group Priority, Suffixes, and Prefixes**'));
c.push(xtable([900,2500,3060,2900],[['Priority','Functional group','Suffix (as the principal group)','Prefix (as a lower-priority group)'],
 ['1 (highest)','Carboxylic acid, –COOH','*-oic acid*','*carboxy-*'],
 ['2','Ester, –COOR','alkyl *…-oate*','*alkoxycarbonyl-*'],
 ['3','Amide, –CONH_{2}','*-amide*','*carbamoyl-*'],
 ['4','Nitrile, –C≡N','*-nitrile*','*cyano-*'],
 ['5','Aldehyde, –CHO','*-al*','*oxo-* (or *formyl-* for a –CHO group)'],
 ['6','Ketone, C=O','*-one*','*oxo-*'],
 ['7','Alcohol and phenol, –OH','*-ol*','*hydroxy-*'],
 ['8','Thiol, –SH','*-thiol*','*sulfanyl-* (older: *mercapto-*)'],
 ['9 (lowest)','Amine, –NH_{2}','*-amine*','*amino-*'],
 [{t:'**Never suffixes.** These are named only as prefixes or, for C=C and C≡C, by the bond ending:',span:4,shade:'F2F2F2'}],
 ['—','Alkene C=C, alkyne C≡C','bond ending *-ene*, *-yne*','*alkenyl-*, *alkynyl-* (such as *ethenyl-*)'],
 ['—','Ether, –OR','—','*alkoxy-* (*methoxy-, ethoxy-*)'],
 ['—','Halide, –X','—','*fluoro-, chloro-, bromo-, iodo-*'],
 ['—','Nitro, –NO_{2}','—','*nitro-*'],
 ['—','Alkyl group, –R','—','*methyl-, ethyl-*, and so on (Table C.3)']]));
c.push(note('Two groups not used in this course also fit into this order: acid anhydrides rank between carboxylic acids and esters, and acid halides rank between esters and amides.'));
c.push(h3('C.3 Alkyl Substituent Groups'));
c.push(P('An alkyl group is an alkane with one hydrogen removed; its name ends in *-yl*. Table C.3 lists the common alkyl groups. The last column shows the letter used to place each group in alphabetical order (see Step 6 in Section C.4).',{keepNext:true}));
c.push(cap('**Table C.3: Common Substituent Groups**'));
c.push(xtable([2100,2800,2800,1660],[['Name','Systematic IUPAC name','Condensed structure','Alphabetized under'],
 ['methyl','methyl','–CH_{3}','m'],['ethyl','ethyl','–CH_{2}CH_{3}','e'],['propyl','propyl','–CH_{2}CH_{2}CH_{3}','p'],
 ['isopropyl','propan-2-yl (1-methylethyl)','–CH(CH_{3})_{2}','i'],['butyl','butyl','–CH_{2}CH_{2}CH_{2}CH_{3}','b'],
 ['*sec*-butyl','butan-2-yl (1-methylpropyl)','–CH(CH_{3})CH_{2}CH_{3}','b'],['isobutyl','2-methylpropyl','–CH_{2}CH(CH_{3})_{2}','i'],
 ['*tert*-butyl','2-methylpropan-2-yl (1,1-dimethylethyl)','–C(CH_{3})_{3}','b'],['vinyl','ethenyl','–CH=CH_{2}','v (e for ethenyl)'],
 ['phenyl','phenyl','–C_{6}H_{5}','p'],['benzyl','phenylmethyl','–CH_{2}C_{6}H_{5}','b (p for phenylmethyl)']]));
c.push(h3('C.4 Steps for Naming an Organic Compound'));
const stp=(n,s)=>new Paragraph({children:[new TextRun({text:n+' ',bold:true,font:TNR,size:24}),...runs(s)],indent:{left:540,hanging:540},spacing:{after:100,line:264}});
c.push(stp('Step 1.','**Find the principal group.** Find the highest-priority group in Table C.2; it will be the suffix. Every other group will be a prefix. If the molecule has none of the suffix groups (for example, it has only C–C, C=C, C≡C, halogen, or ether groups), name it as a hydrocarbon with the ending *-ane*, *-ene*, or *-yne*.'));
c.push(stp('Step 2.','**Choose the parent chain or ring.** The parent must contain the principal group. Then choose the **longest** carbon chain. If two chains are equally long, choose the one with more double and triple bonds, and then the one with more substituents. If the principal group is on a ring, the ring is the parent (cyclohexanol).'));
c.push(sub2('Under the current IUPAC rules, chain length is decided before double and triple bonds are considered, and a ring is chosen over a chain. Many introductory textbooks instead choose the longest chain that contains the C=C or C≡C bond, and choose a ring or chain by which has more carbons. For the molecules in this course, both approaches almost always give the same parent.'));
c.push(stp('Step 3.','**Number the parent.** Number from the end that gives the lowest locants to, in this order: (a) the principal group (suffix); (b) the double and triple bonds; (c) all the prefixes together, compared at the first point of difference; and (d) if there is still a tie, the prefix that comes first in alphabetical order. On a ring, the carbon that holds the principal group is C1.'));
c.push(stp('Step 4.','**Name and number the prefixes.** Give every substituent a locant. For identical groups, use the multiplying prefixes *di-*, *tri-*, or *tetra-*, with one locant for each group (2,2-dimethyl). A double or triple bond gets the locant of its lower-numbered carbon.'));
c.push(stp('Step 5.','**Add stereochemistry if needed.** Use *cis/trans* or *E/Z* for double bonds and rings, *R/S* for chirality centers, and D/L for sugars and amino acids. Stereodescriptors go at the front in parentheses, with their locants: (*E*)-, (2*S*,3*S*)-.'));
c.push(stp('Step 6.','**Put the name together** in the order shown in Figure C.1: stereodescriptors, prefixes in alphabetical order, parent, bond ending, and suffix.',{}));
c.push(bullet('**Alphabetical order uses the substituent name only.** Ignore the multiplying prefixes *di-, tri-, tetra-* (dimethyl is alphabetized under m). Also ignore the italic, hyphenated prefixes *sec-* and *tert-* (*tert*-butyl is alphabetized under b). The prefixes *iso-*, *neo-*, and *cyclo-* are part of the name and do count (isopropyl under i, cyclohexyl under c).'));
c.push(bullet('Separate numbers from numbers with commas and numbers from letters with hyphens: 2,3-dimethylbutane. The name is written as one word except for acids (ethanoic acid) and esters (methyl ethanoate).'));
c.push(bullet('Drop the final *e* of *-ane*, *-ene*, or *-yne* before a suffix that starts with a vowel (propan-2-ol, butanal), but keep it before a consonant (ethanethiol, propane-1,2-diol).'));
c.push(bullet('Locants go just before the part of the name they describe: pent-2-ene, butan-2-one. The older style (2-pentene, 2-butanone) is still widely used and is acceptable in this course unless your instructor says otherwise.'));
c.push(h3('C.5 Worked Examples'));
c.push(P('In each structure in Table C.4, the small numbers show how the parent chain or ring is numbered.',{keepNext:true}));
c.push(cap('**Table C.4: Worked Naming Examples**'));
const ex=(n,s)=>({img:[M+'ex'+n+'.png',s||1],t:'**'+n+'**',align:AlignmentType.CENTER});
c.push(xtable([2300,2700,4360],[['Structure','IUPAC name','How the name was found'],
 [ex(1),'1-ethoxypropane (ethyl propyl ether)','An ether has no suffix. The longer carbon group (propane) is the parent, and the shorter group plus the O atom is the prefix *ethoxy-*.'],
 [ex(2),'4-chloropentan-2-one','The ketone is the principal group (*-one*). Numbering from the end nearer the C=O gives it locant 2 rather than 4; chlorine is a prefix.'],
 [ex(3),'3-ethyl-2,2-dimethylpentane','Numbering from the left gives the locant set {2,2,3}, which is lower than {3,4,4}. Ethyl comes before methyl in alphabetical order; *di-* is ignored.'],
 [ex(4),'(*E*)-4-methylpent-2-ene','The C=C gets the lowest locant (2). The higher-priority groups on the two double-bond carbons (CH_{3} and CH(CH_{3})_{2}) are on opposite sides, so the alkene is *E* (*trans*). Older style: *trans*-4-methyl-2-pentene.'],
 [ex(5),'4-hydroxybutan-2-one','The ketone outranks the alcohol (Table C.2), so the ketone is the suffix and the –OH becomes the prefix *hydroxy-*.'],
 [ex(6),'3-aminopropanoic acid','The carboxylic acid outranks the amine. The COOH carbon is always C1, and –NH_{2} becomes the prefix *amino-*.'],
 [ex(7),'1-*tert*-butyl-3-ethylbenzene','*tert*- is ignored, so *tert*-butyl is alphabetized under b, before ethyl. The locants are 1,3 either way, so the group cited first gets locant 1.'],
 [ex(8),'1-isopropyl-4-methylbenzene (*p*-cymene)','*iso-* counts, so isopropyl (i) comes before methyl (m). With the systematic substituent name the order changes: 1-methyl-4-(propan-2-yl)benzene.'],
 [ex(9),'(2*S*,3*S*)-3-chloro-2-hydroxybutanoic acid','The acid carbon is C1. Chloro comes before hydroxy in alphabetical order. Both chirality centers are *S*, shown with locants at the front of the name.']],{repeat:true}));

// ======================= APPENDIX D =======================
c.push(ptitle('Appendix D: Molecular Shapes and Electronegativity'));
c.push(h3('D.1 VSEPR Shapes of Organic Molecules',{before:120}));
c.push(P('Valence-shell electron-pair repulsion (VSEPR) theory predicts the shape around a central atom. Count the **electron groups** around the atom: each bonded atom counts as one group (a single, double, or triple bond each count as one), and each lone pair counts as one group. The groups spread out as far apart as possible, which sets the electron geometry; the molecular shape describes only where the atoms are. In the drawings, a plain line is in the plane of the page, a solid wedge points toward you, and a hashed wedge points away from you.',{keepNext:true}));
c.push(cap('**Table D.1: VSEPR Shapes Found in Organic Molecules**'));
const v=k=>({img:[F+'figapp_v_'+k+'.png',0.72]});
c.push(xtable([1100,700,1800,1100,2300,2360],[['Electron groups','Lone pairs','Electron geometry → molecular shape','Bond angle','Where it is found (hybridization)','Example'],
 ['2','0','linear → **linear**','180°','C of an alkyne or nitrile (sp)',{...v('lin'),t:'ethyne, HC≡CH'}],
 ['3','0','trigonal planar → **trigonal planar**','120°','C of an alkene, aromatic ring, or C=O group (sp^{2})',{...v('trig'),t:'methanal, H_{2}C=O'}],
 ['3','1','trigonal planar → **bent**','a little less than 120°','N of an imine, C=N–R (sp^{2})',{...v('bent3'),t:'methanimine, H_{2}C=NH'}],
 ['4','0','tetrahedral → **tetrahedral**','109.5°','any C with four single bonds (sp^{3})',{...v('tet'),t:'methane, CH_{4}'}],
 ['4','1','tetrahedral → **trigonal pyramidal**','about 107°','N of ammonia and amines (sp^{3})',{...v('pyr'),t:'ammonia, NH_{3}'}],
 ['4','2','tetrahedral → **bent**','about 104.5°','O of water, alcohols, and ethers (sp^{3})',{...v('bent4'),t:'water, H_{2}O'}]]));
c.push(note('The angles for molecules with lone pairs are approximate: lone pairs push the bonded atoms slightly closer together, and the exact angle changes from molecule to molecule.'));
c.push(h3('D.2 Electronegativity'));
c.push(P('**Electronegativity** is the ability of an atom in a bond to attract the shared electrons. Table D.2 gives Pauling electronegativity values for the main-group elements. Values increase from left to right across a period and from bottom to top in a group; fluorine is the most electronegative element.',{keepNext:true}));
c.push(cap('**Table D.2: Pauling Electronegativity Values of the Main-Group Elements**'));
const en=(s,x)=>({t:['**'+s+'**',x],align:AlignmentType.CENTER,shade:x=='—'?'F2F2F2':(parseFloat(x)>=3.0?'F7D9C4':(parseFloat(x)>=2.5?'FBEBD9':undefined))});
const nn={t:'',shade:undefined};
c.push(xtable([936,1053,1053,1053,1053,1053,1053,1053,1053],[['Period','Group 1','Group 2','Group 13','Group 14','Group 15','Group 16','Group 17','Group 18'],
 [{t:'1',align:AlignmentType.CENTER,bold:true},en('H','2.20'),nn,nn,nn,nn,nn,nn,en('He','—')],
 [{t:'2',align:AlignmentType.CENTER,bold:true},en('Li','0.98'),en('Be','1.57'),en('B','2.04'),en('C','2.55'),en('N','3.04'),en('O','3.44'),en('F','3.98'),en('Ne','—')],
 [{t:'3',align:AlignmentType.CENTER,bold:true},en('Na','0.93'),en('Mg','1.31'),en('Al','1.61'),en('Si','1.90'),en('P','2.19'),en('S','2.58'),en('Cl','3.16'),en('Ar','—')],
 [{t:'4',align:AlignmentType.CENTER,bold:true},en('K','0.82'),en('Ca','1.00'),en('Ga','1.81'),en('Ge','2.01'),en('As','2.18'),en('Se','2.55'),en('Br','2.96'),en('Kr','3.00')],
 [{t:'5',align:AlignmentType.CENTER,bold:true},en('Rb','0.82'),en('Sr','0.95'),en('In','1.78'),en('Sn','1.96'),en('Sb','2.05'),en('Te','2.10'),en('I','2.66'),en('Xe','2.60')]]));
c.push(note('A dash (—) means that no value is assigned because the element forms no stable compounds. Shaded cells: 2.50–2.99 (light) and 3.00 or more (darker).'));
c.push(P('The difference in electronegativity (ΔEN) between two bonded atoms predicts the type of bond (Table D.3). These cutoffs are guidelines; bond type changes gradually, and textbooks use slightly different values.',{keepNext:true,before:120}));
c.push(cap('**Table D.3: Electronegativity Difference and Bond Type**'));
c.push(xtable([1900,2300,5160],[['ΔEN (rounded to 0.1)','Bond type','Examples (ΔEN)'],
 ['0 to 0.4','Nonpolar covalent','C–C (0), C–S (0.03), C–H (0.35)'],
 ['0.5 to 1.8','Polar covalent','C–N (0.49), C–Cl (0.61), N–H (0.84), C–O (0.89), O–H (1.24)'],
 ['1.9 or more','Ionic','Na–Cl (2.23), K–F (3.16)']]));
c.push(note('In a polar covalent bond, the more electronegative atom carries a partial negative charge (δ^{−}) and the other atom a partial positive charge (δ^{+}), as in C^{δ+}–O^{δ−}.'));

// ======================= APPENDIX E =======================
c.push(ptitle('Appendix E: Biomolecules Reference Sheet'));
c.push(h3('E.1 Monosaccharides',{before:120}));
c.push(P('Figures E.1 and E.2 show the D-monosaccharides with three to six carbons as **Fischer projections**. In a Fischer projection, the carbon chain is vertical with C1 at the top, so the carbonyl carbon is as near the top as possible; horizontal bonds point toward you and vertical bonds point away from you. In a **D** sugar, the –OH group on the chirality center farthest from the carbonyl group (the bottom one) is on the right; in its mirror image, the **L** sugar, every –OH is on the opposite side. Aldoses (Figure E.1) have an aldehyde group at C1, and ketoses (Figure E.2) have a ketone group at C2. The sugars in **bold** are the ones you will meet most often. In water, sugars with five or six carbons exist mainly as rings (Experiment #8).',{keepNext:true}));
c.push(...fig(F+'figapp_e1.png','**Figure E.1:** The D-aldoses with three to six carbons.'));
c.push(...fig(F+'figapp_e2.png','**Figure E.2:** Dihydroxyacetone and the D-ketoses with four to six carbons. Dihydroxyacetone has no chirality center, so it is neither D nor L.'));
c.push(h3('E.2 The 20 Common Amino Acids',{pageBreak:true,before:0}));
c.push(P('Table E.1 shows the 20 amino acids found in proteins, grouped by the type of side chain (R group). Each is drawn as it exists at physiological pH (about 7.4): the amino group is protonated (–NH_{3}^{+}) and the carboxyl group is ionized (–COO^{−}). The side chains of aspartate and glutamate are negatively charged, and those of lysine and arginine are positively charged; the histidine side chain is mostly neutral at pH 7.4. All the amino acids except glycine are chiral, and those in proteins are the **L** form, shown here with a wedge. (By the *R,S* system, every L-amino acid except cysteine is *S*; L-cysteine is *R*.)',{keepNext:true}));
c.push(cap('**Table E.1: The 20 Amino Acids, Their Abbreviations, and Side-Chain Classes**'));
const AN={Gly:['Glycine','G'],Ala:['Alanine','A'],Val:['Valine','V'],Leu:['Leucine','L'],Ile:['Isoleucine','I'],Pro:['Proline','P'],Phe:['Phenylalanine','F'],Trp:['Tryptophan','W'],Met:['Methionine','M'],
 Ser:['Serine','S'],Thr:['Threonine','T'],Cys:['Cysteine','C'],Asn:['Asparagine','N'],Gln:['Glutamine','Q'],Tyr:['Tyrosine','Y'],Asp:['Aspartate (aspartic acid)','D'],Glu:['Glutamate (glutamic acid)','E'],Lys:['Lysine','K'],Arg:['Arginine','R'],His:['Histidine','H']};
const aa=k=>({img:[M+'aa_'+k+'.png',0.78,112],t:['**'+AN[k][0]+'**',k+', '+AN[k][1]],valign:VerticalAlign.BOTTOM,size:18});
const hd=(t,span)=>({t,bold:true,span,shade:'E7ECF5',align:AlignmentType.CENTER});
const blank={t:''};
c.push(xtable([1872,1872,1872,1872,1872],[
 [hd('Nonpolar (hydrophobic) side chains',5)],
 ['Gly','Ala','Val','Leu','Ile'].map(aa),['Pro','Phe','Trp','Met'].map(aa).concat([blank]),
 [hd('Polar, neutral side chains',5)],
 ['Ser','Thr','Cys','Asn','Gln'].map(aa),['Tyr'].map(aa).concat([blank,blank,blank,blank]),
 [hd('Acidic (negative) side chains',2),hd('Basic (positive) side chains',3)],
 ['Asp','Glu','Lys','Arg','His'].map(aa)],{header:1,repeat:false}));
c.push(note('Some textbooks place glycine, cysteine, tyrosine, or tryptophan in a different class, because their side chains are only weakly polar or weakly nonpolar. The essential amino acids for adults (which must come from the diet) are His, Ile, Leu, Lys, Met, Phe, Thr, Trp, and Val.'));
c.push(h3('E.3 Common Fatty Acids'));
c.push(P('Fatty acids are long-chain carboxylic acids, usually with an even number of carbons. Table E.2 gives each fatty acid’s number of carbons and C=C double bonds (for example, 18:1 means 18 carbons and one double bond), the positions of its double bonds counted from the carboxyl carbon (C1), and its omega (ω) family, which gives the position of the first double bond counted from the CH_{3} end. The double bonds in natural fatty acids are *cis*, which bends the chain. The melting points match Table 2 in Experiment #10, which lists all of these fatty acids except arachidonic acid.',{keepNext:true}));
c.push(cap('**Table E.2: Structures of Some Common Fatty Acids**'));
c.push(xtable([2560,6800],[['Fatty acid','Structure (skeletal formula)'],
 ...[['Lauric acid','12:0','saturated','','44','lauric'],['Myristic acid','14:0','saturated','','54','myristic'],['Palmitic acid','16:0','saturated','','63','palmitic'],['Stearic acid','18:0','saturated','','70','stearic'],
  ['Palmitoleic acid','16:1','*cis*-9','ω-7','0','palmitoleic'],['Oleic acid','18:1','*cis*-9','ω-9','13','oleic'],['Linoleic acid','18:2','*cis*-9,12','ω-6','−5','linoleic'],
  ['α-Linolenic acid','18:3','*cis*-9,12,15','ω-3','−11','linolenic'],['Arachidonic acid','20:4','*cis*-5,8,11,14','ω-6','−50','arachidonic']].map(([n,num,db,om,mp,k])=>[{t:['**'+n+'**',num+(db=='saturated'?', saturated':', '+db+' ('+om+')'),'mp '+mp+' °C'],valign:VerticalAlign.CENTER},{img:[M+'fa_'+k+'.png',1,370],alt:'Skeletal structure of '+n.toLowerCase()+': a '+num.split(':')[0]+'-carbon chain with a carboxylic acid (COOH) group at C1'+(db=='saturated'?' and only single bonds.':' and '+(num.split(':')[1]=='1'?'one double bond':num.split(':')[1]+' double bonds')+' ('+db.replace(/\*/g,'')+').')}])]));

// ======================= APPENDIX F =======================
c.push(ptitle('Appendix F: Periodic Table and Reference Data'));
c.push(...fig(F+'figapp_f1.png','**Figure F.1:** Periodic table of the elements. Atomic masses are the IUPAC standard atomic weights rounded to two decimal places (g/mol); lead is given as 207.2 because its atomic weight varies in natural samples. A value in parentheses is the mass number of a long-lived isotope of an element that has no stable isotopes.'));
c.push(h3('F.1 Constants and Conversion Factors'));
c.push(cap('**Table F.1: Constants and Conversion Factors**'));
c.push(xtable([2900,6460],[['Quantity','Value'],
 ['Avogadro’s number','6.022 × 10^{23} particles per mole'],
 ['Molar volume of a gas','22.4 L/mol at STP (0 °C and 1 atm); 24.5 L/mol at 25 °C and 1 atm'],
 ['Gas constant, *R*','0.08206 L·atm/(mol·K) = 8.314 J/(mol·K)'],
 ['Pressure','1 atm = 760 mmHg = 760 torr = 101.325 kPa = 14.7 psi'],
 ['Temperature','K = °C + 273.15        °F = 1.8(°C) + 32        °C = (°F − 32)/1.8'],
 ['Energy','1 cal = 4.184 J (exact); 1 Cal (nutritional Calorie) = 1 kcal = 1000 cal'],
 ['Water','density 1.00 g/mL; specific heat 4.184 J/(g·°C) = 1.00 cal/(g·°C); *K*_{w} = 1.0 × 10^{−14} at 25 °C'],
 ['Length','1 in = 2.54 cm (exact); 1 m = 39.37 in; 1 mi = 1.609 km'],
 ['Mass','1 kg = 2.205 lb; 1 lb = 453.6 g = 16 oz; 1 oz = 28.35 g'],
 ['Volume','1 L = 1000 mL = 1.057 qt; 1 mL = 1 cm^{3} (exact); 1 gal = 3.785 L; 1 qt = 946.4 mL; 1 fl oz = 29.57 mL; 1 tsp = 5 mL and 1 tbsp = 15 mL (medical use)'],
 ['Time','1 h = 60 min = 3600 s; 1 day = 24 h'],
 ['Diatomic elements','H_{2}, N_{2}, O_{2}, F_{2}, Cl_{2}, Br_{2}, I_{2}']]));
c.push(h3('F.2 Metric Prefixes'));
c.push(cap('**Table F.2: Metric (SI) Prefixes**'));
c.push(xtable([1300,1000,1900,1580,1300,1000,1280],[['Prefix','Symbol','Factor','','Prefix','Symbol','Factor'],
 ['tera-','T','10^{12}','','deci-','d','10^{−1}'],['giga-','G','10^{9}','','centi-','c','10^{−2}'],['mega-','M','10^{6}','','milli-','m','10^{−3}'],
 ['kilo-','k','10^{3}','','micro-','μ','10^{−6}'],['hecto-','h','10^{2}','','nano-','n','10^{−9}'],['deka-','da','10^{1}','','pico-','p','10^{−12}']].map((r,i)=>i==0?r:[r[0],r[1],r[2],{t:''},r[4],r[5],r[6]])));
c.push(note('Examples: 1 km = 10^{3} m = 1000 m; 1 mL = 10^{−3} L; 1 μg = 10^{−6} g; 1 dL = 0.1 L (blood test results are often given per dL).'));
c.push(h3('F.3 Significant Figures'));
c.push(bullet('Nonzero digits are always significant: 61.4 g has 3 significant figures.'));
c.push(bullet('Zeros between nonzero digits are significant: 306 km has 3; 5.029 m has 4.'));
c.push(bullet('Leading zeros (in front of the first nonzero digit) are not significant; they only place the decimal point: 0.00783 kg has 3.'));
c.push(bullet('Trailing zeros after a decimal point are significant: 4.7200 km has 5; 82.0 m has 3.'));
c.push(bullet('Trailing zeros in a number with no decimal point are ambiguous: 7000 g could have 1 to 4 significant figures. Use scientific notation to show which are significant: 7 × 10^{3} g has 1, and 7.0 × 10^{3} g has 2.'));
c.push(bullet('Exact numbers (counted objects such as 32 people, and defined relationships such as 1 m = 100 cm) have an unlimited number of significant figures.'));
c.push(bullet('**Multiplying or dividing:** round the answer to the fewest *significant figures* in the measured values. **Adding or subtracting:** round the answer to the fewest *decimal places* in the measured values.'));
c.push(P('**Dimensional analysis example.** How many seconds are in 76 years? Write the given quantity, then multiply by conversion factors arranged so that each unwanted unit cancels:',{before:120,keepNext:true}));
c.push(P('76 yr × (365 d / 1 yr) × (24 h / 1 d) × (60 min / 1 h) × (60 s / 1 min) = 2,396,736,000 s = 2.4 × 10^{9} s',{align:AlignmentType.CENTER,keepNext:true}));
c.push(P('The answer has 2 significant figures because 76 yr is the only measured value; the conversion factors are exact.'));
c.push(h3('F.4 Common Equations'));
c.push(cap('**Table F.3: Common Equations from General Chemistry**'));
c.push(xtable([3000,6360],[['Quantity','Equation'],
 ['Density','*d* = *m*/*V*'],
 ['Moles from mass','moles = mass (g) ÷ molar mass (g/mol)'],
 ['Molarity','*M* = moles of solute ÷ liters of solution'],
 ['Dilution','*M*_{1}*V*_{1} = *M*_{2}*V*_{2}   (also written *C*_{1}*V*_{1} = *C*_{2}*V*_{2})'],
 ['Percent error','% error = (|experimental value − accepted value| ÷ accepted value) × 100%'],
 ['Percent yield','% yield = (actual yield ÷ theoretical yield) × 100%'],
 ['Average atomic mass','sum of (fractional abundance × isotope mass) for each isotope'],
 ['Heat','*q* = *m* × *c* × Δ*T*'],
 ['Ideal gas law','*PV* = *nRT*'],
 ['pH','pH = −log[H_{3}O^{+}];   [H_{3}O^{+}] = 10^{−pH};   pH + pOH = 14.00 at 25 °C'],
 ['Equilibrium constant','for *a*A + *b*B ⇌ *c*C + *d*D:   *K*_{eq} = [C]^{c}[D]^{d} ÷ ([A]^{a}[B]^{b})']]));
c.push(h3('F.5 Common Polyatomic Ions'));
c.push(cap('**Table F.4: Names and Formulas of Common Polyatomic Ions**'));
const ions=[['ammonium','NH_{4}^{+}'],['hydronium','H_{3}O^{+}'],['acetate','CH_{3}COO^{−} (C_{2}H_{3}O_{2}^{−})'],['hydroxide','OH^{−}'],['cyanide','CN^{−}'],['nitrate','NO_{3}^{−}'],['nitrite','NO_{2}^{−}'],
 ['carbonate','CO_{3}^{2−}'],['hydrogen carbonate (bicarbonate)','HCO_{3}^{−}'],['sulfate','SO_{4}^{2−}'],['hydrogen sulfate (bisulfate)','HSO_{4}^{−}'],['sulfite','SO_{3}^{2−}'],
 ['phosphate','PO_{4}^{3−}'],['hydrogen phosphate','HPO_{4}^{2−}'],['dihydrogen phosphate','H_{2}PO_{4}^{−}'],['perchlorate','ClO_{4}^{−}'],['chlorate','ClO_{3}^{−}'],['chlorite','ClO_{2}^{−}'],
 ['hypochlorite','ClO^{−}'],['permanganate','MnO_{4}^{−}'],['chromate','CrO_{4}^{2−}'],['dichromate','Cr_{2}O_{7}^{2−}'],['oxalate','C_{2}O_{4}^{2−}'],['thiosulfate','S_{2}O_{3}^{2−}']];
const half=ions.length/2; const irows=[['Name','Formula','Name','Formula']];
for(let i=0;i<half;i++)irows.push([ions[i][0],ions[i][1],ions[i+half][0],ions[i+half][1]]);
c.push(xtable([2600,2080,2600,2080],irows));
c.push(h3('F.6 Solubility Rules for Ionic Compounds in Water'));
c.push(cap('**Table F.5: Solubility Rules**'));
c.push(xtable([4000,5360],[['Compounds containing…','Solubility in water'],
 ['Li^{+}, Na^{+}, K^{+} (group 1) or NH_{4}^{+}','Soluble'],
 ['NO_{3}^{−} (nitrate) or CH_{3}COO^{−} (acetate)','Soluble'],
 ['Cl^{−}, Br^{−}, or I^{−}','Soluble, except with Ag^{+}, Pb^{2+}, and Hg_{2}^{2+}'],
 ['SO_{4}^{2−} (sulfate)','Soluble, except with Ba^{2+}, Pb^{2+}, Sr^{2+}, and Hg_{2}^{2+} (Ca^{2+} and Ag^{+} sulfates are only slightly soluble)'],
 ['CO_{3}^{2−}, PO_{4}^{3−}, S^{2−}, or OH^{−}','Insoluble, except with the group 1 ions and NH_{4}^{+} (Ca^{2+}, Sr^{2+}, and Ba^{2+} hydroxides are slightly to moderately soluble)']]));
c.push(note('If two rules conflict, the rule listed first wins: for example, Na_{2}CO_{3} is soluble because it contains Na^{+}.'));
build(c,OUT);
function sub2(s){return new Paragraph({children:runs(s,{size:22,italics:false}),indent:{left:540},spacing:{after:100,line:264}});}
