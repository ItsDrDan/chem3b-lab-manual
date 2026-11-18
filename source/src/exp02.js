const L=require('../lablib.js'); const {checkRow,P,title,h2,h3,h4,bullet,step,sub,materials,note,caution,img,table,space,nameBlock,build,W,D}=L;
const F=process.argv[2]+'/'; const OUT=process.argv[3];
const {Paragraph,AlignmentType}=D; const M=D; const R=s=>new M.MathRun(s);
const mathP=(kids,o={})=>new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:120,after:o.after??200},keepNext:o.keepNext,children:[new M.Math({children:kids})]});
const c=[];
c.push(title('Experiment #2: Structures of Alkanes'));
c.push(h3('Goals',{before:0}));
['Draw formulas for alkanes from their three-dimensional models.','Write the names of alkanes from their structural formulas.','Construct models of isomers of alkanes.','Write the structural formulas for cycloalkanes and haloalkanes.'].forEach(s=>c.push(bullet(s)));
c.push(h2('Introduction'));
// A
c.push(h3('A. Structure of Alkanes',{before:120}));
c.push(P('**Hydrocarbons** are organic compounds made of only carbon and hydrogen. **Alkanes** and **cycloalkanes** are called **saturated hydrocarbons** because their carbon atoms are connected by only single bonds, and each carbon holds (is “saturated” with) the maximum number of hydrogen atoms. Carbon has four valence electrons, so **every carbon atom in an alkane forms four single bonds**. Each hydrogen atom forms one bond. A continuous-chain alkane with *n* carbon atoms has the molecular formula C_{n}H_{2n+2}.'));
c.push(P('The four bonds around each carbon point to the corners of a **tetrahedron**, with bond angles of 109.5°. A flat drawing cannot show this shape directly, so chemists use a **wedge-dash drawing** (Figure 1): a plain line is a bond in the plane of the page, a solid wedge points toward you, and a dashed wedge points away from you.',{keepNext:true}));
c.push(...img(F+'fig2_1.png',560,184,'**Figure 1:** The tetrahedral shape of methane shown with a wedge-dash drawing.'));
c.push(P('The same molecule can be written several ways (Figure 2 in Part B shows each one):'));
c.push(bullet('A **molecular formula** gives only the number of each kind of atom, such as C_{3}H_{8}.'));
c.push(bullet('A **complete structural formula** shows every atom and every bond as a line.'));
c.push(bullet('A **condensed structural formula** groups the hydrogen atoms with the carbon they are bonded to, such as CH_{3}CH_{2}CH_{3}. Bonds to hydrogen are not drawn.'));
c.push(bullet('A **skeletal (line-angle) formula** shows only the carbon–carbon bonds as a zigzag line. Each corner and each line end is a carbon atom, and the hydrogen atoms are not shown. Atoms other than C and H (such as Cl or Br) are always written in.'));
c.push(P('The names of all alkanes end in ***-ane***. The first part of the name tells the number of carbon atoms in the chain (Table 1). The names of most other organic compounds are built from these alkane names.',{before:120}));
c.push(P('**Table 1: The First Ten Continuous-Chain Alkanes**',{align:AlignmentType.CENTER,after:80,keepNext:true}));
c.push(table([1500,1800,6060],[['Name','Molecular formula','Condensed structural formula'],
 ['Methane','CH_{4}','CH_{4}'],['Ethane','C_{2}H_{6}','CH_{3}CH_{3}'],['Propane','C_{3}H_{8}','CH_{3}CH_{2}CH_{3}'],['Butane','C_{4}H_{10}','CH_{3}CH_{2}CH_{2}CH_{3}'],['Pentane','C_{5}H_{12}','CH_{3}CH_{2}CH_{2}CH_{2}CH_{3}'],
 ['Hexane','C_{6}H_{14}','CH_{3}CH_{2}CH_{2}CH_{2}CH_{2}CH_{3}'],['Heptane','C_{7}H_{16}','CH_{3}CH_{2}CH_{2}CH_{2}CH_{2}CH_{2}CH_{3}'],['Octane','C_{8}H_{18}','CH_{3}CH_{2}CH_{2}CH_{2}CH_{2}CH_{2}CH_{2}CH_{3}'],
 ['Nonane','C_{9}H_{20}','CH_{3}CH_{2}CH_{2}CH_{2}CH_{2}CH_{2}CH_{2}CH_{2}CH_{3}'],['Decane','C_{10}H_{22}','CH_{3}CH_{2}CH_{2}CH_{2}CH_{2}CH_{2}CH_{2}CH_{2}CH_{2}CH_{3}']],{firstColBold:true}));
c.push(P('In a molecular model kit, each kind of atom is a colored ball with one hole for each bond it forms. In most kits, carbon is a black ball with four holes and hydrogen is a white ball with one hole. Colors vary from kit to kit, so check the key in your kit.',{before:160}));
// B
c.push(h3('B. Constitutional Isomers'));
c.push(P('**Constitutional isomers** have the same molecular formula but a different order of bonded atoms, so they have different structural (and condensed) formulas. One isomer cannot be changed into another without breaking bonds and forming new ones. For example, C_{4}H_{10} has two isomers: butane, a continuous chain of four carbons, and 2-methylpropane, a three-carbon chain with a branch (Figure 2).',{keepNext:true}));
c.push(...img(F+'fig2_2.png',600,347,'**Figure 2:** The two constitutional isomers of C_{4}H_{10}, each written three ways.'));
c.push(P('**Bending or rotating a chain does not make a new isomer.** Groups can rotate freely around single bonds, so a chain drawn straight, bent, or upside down is still the same molecule. To check whether two models are isomers, find the longest continuous chain of carbons in each and name them; two models with the same name are the same compound.'));
c.push(h4('Physical Properties of Isomers'));
c.push(P('Isomers have the same molecular formula, so they have the same **molar mass**, the sum of the atomic masses of all the atoms (C = 12.01 g/mol, H = 1.008 g/mol). For propane, C_{3}H_{8}:',{keepNext:true}));
c.push(mathP([R('molar mass of '),new M.MathSubScript({children:[R('C')],subScript:[R('3')]}),new M.MathSubScript({children:[R('H')],subScript:[R('8')]}),R(' = 3(12.01 g/mol) + 8(1.008 g/mol) = 44.09 g/mol')]));
c.push(P('Their other physical properties differ, because their shapes differ. Alkanes are nonpolar, so the only attractions between their molecules are weak **London dispersion forces**. A long, straight chain has more surface that can touch neighboring molecules than a compact, branched molecule, so the attractions are stronger. **The more branched an isomer is, the lower its boiling point.** Melting points are less regular, because they also depend on how well the molecules pack together in a solid. **Density** is the mass per unit volume. Liquids are usually reported in g/mL; for a gas, such as the C_{4}H_{10} isomers at room temperature, the density is often given in g/L or as the density of the liquid at a stated temperature. Always record the units and the state.'));
c.push(h4('Naming Alkanes (IUPAC Rules)'));
c.push(step('1.','Find the **longest continuous chain** of carbon atoms. Name it with the alkane name from Table 1 (the parent chain). The longest chain is not always drawn in a straight line.',{left:360}));
c.push(step('2.','Number the chain starting from the end **nearest a substituent** (a branch or a halogen atom).',{left:360}));
c.push(step('3.','Name each branch (**substituent**) as an alkyl group by changing *-ane* to *-yl*: –CH_{3} is **methyl** and –CH_{2}CH_{3} is **ethyl**. Give each one the number of the carbon it is attached to.',{left:360}));
c.push(step('4.','If the same group appears more than once, use the prefixes **di-**, **tri-**, and **tetra-**, and give a number for each one. List different substituents in **alphabetical order**. Separate numbers from each other with commas and numbers from words with hyphens.',{left:360}));
c.push(step('5.','If numbering from either end gives the substituents the same numbers, give the lower number to the substituent that comes first in alphabetical order (for example, 2-bromo-3-methylbutane, not 3-bromo-2-methylbutane).',{left:360}));
c.push(P('For example, CH_{3}CH(CH_{3})CH_{2}CH_{3} has a four-carbon parent chain (butane) with a methyl group on carbon 2: **2-methylbutane**. A methyl group on carbon 1 would only extend the chain, so “1-methylbutane” is really pentane.',{before:80}));
// C
c.push(h3('C. Cycloalkanes'));
c.push(P('In a **cycloalkane**, the carbon atoms are joined in a ring, so there are no end carbons. Closing the ring uses two bonding positions that held hydrogen atoms in the open chain, so a cycloalkane has two fewer hydrogen atoms than the alkane with the same number of carbons (general formula C_{n}H_{2n}). A cycloalkane is named by adding the prefix **cyclo-** to the name of the alkane with the same number of carbons, such as cyclopropane (C_{3}H_{6}). Cycloalkanes are often drawn as **geometric formulas**: each corner of the shape is a CH_{2} group. Cyclopropane is a triangle, cyclobutane is a square, and cyclopentane is a pentagon (Figure 3). The bond angles in cyclopropane (60°) and cyclobutane (about 90°) are much smaller than 109.5°, so these rings are strained, and their models may need flexible bonds.',{keepNext:true}));
c.push(...img(F+'fig2_3.png',560,157,'**Figure 3:** Three ways to write cyclobutane, C_{4}H_{8}.'));
// D
c.push(h3('D. Haloalkanes'));
c.push(P('In a **haloalkane**, a halogen atom (F, Cl, Br, or I) replaces a hydrogen atom of an alkane or cycloalkane. Like hydrogen, each halogen atom forms **one** bond. In the IUPAC name, the halogen is a substituent: **fluoro**, **chloro**, **bromo**, or **iodo**. The chain is numbered and named with the same rules as alkanes, and halo groups and alkyl groups are listed together in alphabetical order. Two halogens can be on the same carbon or on different carbons, so 1,1-dichloroethane and 1,2-dichloroethane are isomers. Simple haloalkanes also have common names that name the alkyl group, then the halide, such as methyl chloride (Figure 4).',{keepNext:true}));
c.push(...img(F+'fig2_4.png',560,205,'**Figure 4:** Examples of haloalkanes.'));
// Hazards
c.push(h3('Hazards and Safety Instructions'));
c.push(P('This experiment uses molecular model kits and reference sources only. No chemicals are dispensed.',{after:100}));
c.push(bullet('**General Lab Rules:** Follow all of the usual lab rules, including no food or drink. Wear safety goggles if other experiments or chemicals are in the room, or as your instructor directs.'));
c.push(bullet('**Small Parts:** Model pieces are small. Never put them in your mouth, and pick up any that fall on the floor so no one slips on them.'));
c.push(bullet('**Bending Bonds:** Flexible bonds for small rings can snap if they are bent too far. Bend them gently and point the model away from your face.'));
c.push(h3('Waste Instructions'));
c.push(bullet('**No chemical waste** is produced in this experiment.'));
c.push(bullet('**Model kit:** take every model apart, and return all atoms and bonds to the correct compartments of the kit. Count the pieces against the kit list (or as your instructor directs), and report missing or broken pieces to your instructor.'));
c.push(bullet('**Trash:** scrap paper and broken model pieces (show broken pieces to your instructor first).'));
// Procedure
c.push(h2('Procedure',{pageBreak:true,before:0}));
c.push(note('Instructor Notes:','Give each pair of students one model kit, and check that each kit has at least 5 carbon atoms, 12 hydrogen atoms, 2 chlorine atoms, 2 bromine atoms, and 1 iodine atom, plus flexible bonds for C.1 and C.2. Students need a textbook, the internet, or a chemistry handbook (such as the CRC Handbook) for B.3 and B.5. Initial each group’s instructor check box at D.5.'));
c.push(h3('A. Structure of Alkanes'));
c.push(materials('Molecular model kit'));
c.push(step('A.1','Using a model kit, construct a 3D model of a molecule of methane, CH_{4}. Draw the three-dimensional (tetrahedral) shape of methane using wedges and dashes (Figure 1). Write the condensed structural formula of methane.'));
c.push(step('A.2','Make a model of ethane, C_{2}H_{6}. Observe that the tetrahedral shape is maintained around each carbon atom throughout the structure. Write the complete structural formula and the condensed structural formula for ethane.'));
c.push(step('A.3','Make a model of propane, C_{3}H_{8}. Write the complete structural formula and the condensed structural formula for propane.'));
c.push(h3('B. Constitutional Isomers'));
c.push(materials('Molecular model kit; textbook, internet, or chemistry handbook'));
c.push(step('B.1','The molecular formula of butane is C_{4}H_{10}. Construct a model of butane by connecting four carbon atoms in a chain. Draw its complete and condensed structural formulas.'));
c.push(step('B.2','Make an isomer of C_{4}H_{10}: remove an end –CH_{3} group from your butane model, and remove one hydrogen atom from the middle carbon of the three-carbon chain that is left. Attach the –CH_{3} group where that hydrogen was, and put the hydrogen on the carbon that lost the –CH_{3} group. Write the complete and condensed structural formulas of this isomer, 2-methylpropane.'));
c.push(step('B.3','Using your textbook, the internet, or a chemistry handbook, find the molar mass, melting point, boiling point, and density of each isomer of C_{4}H_{10}. Include units, and note the state and temperature for each density.'));
c.push(step('B.4','Make models of the three isomers of C_{5}H_{12}. Make the continuous-chain isomer first. Draw the complete and condensed structural formulas for each, and name each isomer. Check that no two of your models have the same name.'));
c.push(step('B.5','Using your textbook, the internet, or a chemistry handbook, find the molar mass, melting point, boiling point, and density of each isomer of C_{5}H_{12}. Include units, and note the state and temperature for each density.'));
c.push(h3('C. Cycloalkanes'));
c.push(materials('Molecular model kit with flexible bonds'));
c.push(step('C.1','Construct a model of the cycloalkane with three carbon atoms. Write the complete and condensed structural formulas. Draw the geometric formula and name the compound.'));
c.push(step('C.2','Construct a model of the cycloalkane with four carbon atoms. Write the complete and condensed structural formulas. Draw the geometric formula and name the compound.'));
c.push(step('C.3','Construct a model of the cycloalkane with five carbon atoms. Write the complete and condensed structural formulas. Draw the geometric formula and name the compound.'));
c.push(h3('D. Haloalkanes'));
c.push(materials('Molecular model kit (use your kit’s color key to find the chlorine, bromine, and iodine atoms)'));
c.push(step('D.1','Make a model of chloromethane, using the chlorine-colored ball from your kit. Draw the complete and condensed structural formulas.'));
c.push(step('D.2','Make a model of 1,2-dibromoethane, using the bromine-colored balls from your kit. Draw the complete and condensed structural formulas.'));
c.push(step('D.3','Make a model of 2-iodopropane, using the iodine-colored ball from your kit. Draw the complete and condensed structural formulas.'));
c.push(step('D.4','Make models of the four isomers of dichloropropane, C_{3}H_{6}Cl_{2}. Remember that both chlorine atoms can be on the same carbon. Draw the complete and condensed structural formulas, and name each isomer.'));
c.push(step('D.5','When you have finished constructing your models, show them to your instructor for an instructor check.'));
// Pre-lab
c.push(h2('Pre-Lab Questions',{pageBreak:true,before:0}));
const PL=[['1.','This experiment uses no chemicals. Give two safety rules that still apply, and describe what you must do with your model kit at the end of lab.',950],
 ['2.','In a wedge-dash drawing of methane, what do a solid wedge and a dashed wedge each mean? What is the H–C–H bond angle?',950],
 ['3.','Write the complete structural formula and the condensed structural formula of ethane, C_{2}H_{6}. How many bonds does each carbon atom form?',1250],
 ['4.','A student builds a chain of four carbons, then bends the chain into a “U” shape and says it is a new isomer of butane. Is the student correct? Explain what must change to make a constitutional isomer.',950],
 ['5.','Butane and 2-methylpropane are isomers. Which physical property will be the same for both? Which isomer would you predict has the higher boiling point, and why?',950],
 ['6.','Propane is C_{3}H_{8}, but cyclopropane is C_{3}H_{6}. Explain why the cycloalkane has two fewer hydrogen atoms.',850],
 ['7.','Name CH_{3}CHClCH_{3}. Then write the condensed structural formula of one other isomer of C_{3}H_{7}Cl and name it.',0]];
PL.forEach(([a,b,sp])=>{c.push(step(a,b,{left:360,after:0})); if(sp)c.push(space(sp));});
// Report
c.push(h2('Report Sheet',{pageBreak:true,before:0,rule:true}));
c.push(...nameBlock());
const two=(hd,a,b,h=2000)=>table([4680,4680],[[{t:hd,span:2,align:AlignmentType.LEFT}],[{t:'**'+a+'**'},{t:'**'+b+'**'}],['','']],{header:1,h:[0,0,h]});
c.push(h3('A. Structure of Alkanes',{before:120}));
c.push(two('A.1 Structure of methane, CH_{4}','Wedge-dash drawing','Condensed structural formula',1900)); c.push(space(160));
c.push(two('A.2 Structure of ethane, C_{2}H_{6}','Complete structural formula','Condensed structural formula',1900)); c.push(space(160));
c.push(two('A.3 Structure of propane, C_{3}H_{8}','Complete structural formula','Condensed structural formula',1900));
c.push(h3('B. Constitutional Isomers',{pageBreak:true,before:0}));
c.push(two('B.1 Structure of butane, C_{4}H_{10}','Complete structural formula','Condensed structural formula',2000)); c.push(space(160));
c.push(two('B.2 Structure of 2-methylpropane, C_{4}H_{10}','Complete structural formula','Condensed structural formula',2400)); c.push(space(160));
const propHdr=['Isomer','Molar mass (g/mol)','Melting point (°C)','Boiling point (°C)','Density (units, state, temperature)'];
c.push(table([2360,1700,1700,1700,1900],[[{t:'B.3 Physical Properties of the Isomers of C_{4}H_{10}',span:5,align:AlignmentType.LEFT}],propHdr.map(t=>({t:'**'+t+'**',align:AlignmentType.CENTER})),['**Butane**','','','',''],['**2-Methylpropane** (isobutane)','','','','']],{header:1,h:[0,0,800,800]}));
c.push(space(160));
const b4=[]; [1,2,3].forEach(i=>{b4.push([{t:'**Complete structural formula**'},{t:'**Condensed structural formula**'}],['',''],[{t:'**Name:**',span:2}]);});
c.push(table([4680,4680],[[{t:'B.4 Isomers of C_{5}H_{12}',span:2,align:AlignmentType.LEFT}],...b4],{header:1,h:[0,0,1900,420,0,1900,420,0,1900,420]}));
c.push(space(160));
c.push(table([2360,1700,1700,1700,1900],[[{t:'B.5 Physical Properties of the Isomers of C_{5}H_{12}',span:5,align:AlignmentType.LEFT}],propHdr.map(t=>({t:'**'+t+'**',align:AlignmentType.CENTER})),[['**Isomer 1:**','__________________'],'','','',''],[['**Isomer 2:**','__________________'],'','','',''],[['**Isomer 3:**','__________________'],'','','','']],{header:1,h:[0,0,620,620,620]}));
c.push(h3('C. Cycloalkanes'));
const three=(hd)=>table([3120,3120,3120],[[{t:hd,span:3,align:AlignmentType.LEFT}],['**Complete structural formula**','**Condensed structural formula**','**Geometric formula**'].map(t=>({t,align:AlignmentType.CENTER})),['','',''],[{t:'**Name:**',span:3}]],{header:1,h:[0,0,2000,420]});
c.push(three('C.1 Cycloalkane with three carbon atoms')); c.push(space(160));
c.push(three('C.2 Cycloalkane with four carbon atoms')); c.push(space(160));
c.push(three('C.3 Cycloalkane with five carbon atoms'));
c.push(h3('D. Haloalkanes',{pageBreak:true,before:0}));
c.push(two('D.1 Chloromethane','Complete structural formula','Condensed structural formula',1700)); c.push(space(160));
c.push(two('D.2 1,2-Dibromoethane','Complete structural formula','Condensed structural formula',1700)); c.push(space(160));
c.push(two('D.3 2-Iodopropane','Complete structural formula','Condensed structural formula',1700)); c.push(space(160));
const d4=[]; [1,2,3,4].forEach(()=>d4.push([{t:'**Complete structural formula**'},{t:'**Condensed structural formula**'}],['',''],[{t:'**Name:**',span:2}]));
c.push(table([4680,4680],[[{t:'D.4 Isomers of dichloropropane, C_{3}H_{6}Cl_{2}',span:2,align:AlignmentType.LEFT}],...d4],{header:1,h:[0,0,1700,420,0,1700,420,0,1700,420,0,1700,420]}));
c.push(space(160));
c.push(checkRow('D.5','models and report complete'));
// Questions
c.push(h2('Questions and Problems',{pageBreak:true,before:0}));
c.push(step('Q.1','Write the correct IUPAC name of each compound.',{left:0,after:0}));
c.push(...img(F+'fig2_5.png',600,322));
c.push(step('Q.2','In B.3, what physical property is identical for the two isomers of C_{4}H_{10}? Why?',{left:0,after:0})); c.push(space(748));
c.push(step('Q.3','What physical properties are different for the isomers in B.3 and B.5? Use your data to describe how branching affects the boiling point, and explain why.',{left:0,after:0})); c.push(space(1346));
c.push(step('Q.4','Draw the skeletal structure of each of the four isomers of dichloropropane from D.4, and write the name under each.',{left:0,after:0})); c.push(space(1646));
c.push(step('Q.5','Draw the skeletal structures and write the names of the four isomers with the formula C_{4}H_{9}Cl.',{left:0,after:0})); c.push(space(1646));
build(c,OUT).then(()=>console.log('wrote',OUT));
