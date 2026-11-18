const fs=require('fs');
const L=require('../lablib.js'); const {checkRow,runs,P,title,h2,h3,h4,bullet,step,sub,materials,note,caution,img,table,space,nameBlock,build,W,D}=L;
const F=process.argv[2]+'/'; const OUT=process.argv[3];
const {Paragraph,TextRun,ImageRun,AlignmentType}=D;
// heading 3 that accepts _{sub} markup (lablib h3 writes plain text)
const h3s=(s,o={})=>new Paragraph({heading:D.HeadingLevel.HEADING_3,children:runs(s,{font:L.HF,size:28,bold:true}),spacing:{before:o.before??280,after:120},keepNext:true,pageBreakBefore:o.pageBreak});
const eq=(s,o={})=>P(s,{align:AlignmentType.CENTER,after:o.after??80,keepNext:o.keepNext});
const c=[];
c.push(title('Experiment #3: Hydrocarbons'));
c.push(h3('Goals',{before:0}));
['Observe chemical and physical properties of organic and inorganic compounds.',
 'Observe the reactions of hydrocarbons with oxygen, bromine, and potassium permanganate.',
 'Use chemical tests to distinguish alkanes, alkenes, and aromatic compounds, and identify an unknown hydrocarbon.',
 'Draw the products of combustion, addition, and substitution reactions of alkanes and alkenes.'].forEach(s=>c.push(bullet(s)));
c.push(h2('Introduction'));
// A
c.push(h3('A. Types of Hydrocarbons',{before:120}));
c.push(P('**Hydrocarbons** are compounds that contain only carbon and hydrogen. **Alkanes** are **saturated** hydrocarbons: every carbon–carbon bond is a single bond, so each carbon holds the maximum number (a “saturation”) of hydrogen atoms. **Alkenes** (C=C double bond) and **alkynes** (C≡C triple bond) are **unsaturated** hydrocarbons. The double or triple bond is a very reactive site, and it is what the chemical tests in Parts E and F detect. In CHEM 3B, an **aromatic** compound is a hydrocarbon that contains a benzene ring (Figure 1). Although a benzene ring is drawn with three double bonds, it does not react like an alkene.',{keepNext:true}));
c.push(...img(F+'fig3_1.png',624,144,'**Figure 1:** The four families of hydrocarbons. Red bonds are the reactive multiple bonds.'));
c.push(P('Atoms can rotate freely around a single bond. A double bond cannot rotate: the two carbons of the double bond and the four atoms attached to them all lie in one flat plane. As a result, an alkene such as 2-butene can exist as two **cis–trans isomers** (geometric isomers). In the *cis* isomer, the carbon groups are on the **same side** of the double bond; in the *trans* isomer, they are on **opposite sides** (Figure 2). You will see this with model kits in Part A.',{keepNext:true}));
c.push(...img(F+'fig3_2.png',520,137,'**Figure 2:** *cis*- and *trans*-2-butene. The condensed formula CH_{3}–CH=CH–CH_{3} does not show which isomer is meant.'));
// B
c.push(h3('B. Organic and Inorganic Compounds: Color, Odor, and Physical State'));
c.push(P('**Organic compounds** are made mostly of carbon and hydrogen, and often contain oxygen, nitrogen, sulfur, or halogens. Carbon is unique because it forms stable covalent bonds with other carbon atoms, creating long chains, rings, and complex structures. This property, called **catenation**, is a key reason there are millions of organic compounds, far more than the inorganic compounds you met in CHEM 3A. Organic compounds are held together by **covalent bonds**, while many inorganic compounds (such as NaCl and KI) are **ionic**. This difference leads to the general trends in Table 1. These are trends, not rules: water, for example, is inorganic but covalent.'));
c.push(P('**Table 1: Comparing Some Properties of Organic and Inorganic Compounds**',{align:AlignmentType.CENTER,after:80,keepNext:true}));
c.push(table([2600,3380,3380],[['Property','Organic compounds','Inorganic (ionic) compounds'],
 ['Bonding','Covalent','Ionic'],['Solubility','Most hydrocarbons dissolve in nonpolar solvents, not in water','Many dissolve in water (a polar solvent), not in nonpolar solvents'],
 ['Odor','Many have a strong, distinct odor','Usually no odor'],['Melting and boiling points','Low (many are liquids or gases)','High (usually solids)'],
 ['Electrical conductivity','Poor or none','Conduct when melted or dissolved in water'],['Flammability','Usually flammable','Usually not flammable']],{firstColBold:true}));
// C
c.push(h3('C. Solubility'));
c.push(P('A general rule for solubility is **“like dissolves like”**: polar solvents (such as water) dissolve polar and ionic substances, and nonpolar solvents (such as cyclohexane) dissolve nonpolar substances. Hydrocarbons are nonpolar, so they do not dissolve in water. When a hydrocarbon liquid is mixed with water, the two liquids form **two layers**. The liquid with the lower density floats on top: cyclohexane (0.78 g/mL) and toluene (0.87 g/mL) are less dense than water (1.00 g/mL). The water layer is called the **aqueous** (polar) layer, and the hydrocarbon layer is the **organic** (nonpolar) layer. A substance is **soluble** (S) if it disappears into the solvent to give one clear, uniform liquid; it is **insoluble** (I) if solid crystals remain or a separate layer forms.'));
// D
c.push(h3('D. Combustion'));
c.push(P('Most organic compounds react with oxygen in a **combustion** reaction to form carbon dioxide and water. Combustion is **exothermic**: it releases heat, which is why gasoline burns to power a car engine and natural gas (methane) burns in a heater or stove. The equations for the combustion of methane and propane are shown below, with heat written as a product:',{keepNext:true}));
c.push(eq('CH_{4}(g) + 2 O_{2}(g) → CO_{2}(g) + 2 H_{2}O(g) + heat     (methane)',{keepNext:true}));
c.push(eq('C_{3}H_{8}(g) + 5 O_{2}(g) → 3 CO_{2}(g) + 4 H_{2}O(g) + heat     (propane)',{after:160}));
c.push(P('The flame tells you something about the compound. Compounds with a high ratio of carbon to hydrogen, such as aromatic compounds (toluene, C_{7}H_{8}), cannot get enough oxygen to burn completely in air. They burn with a **yellow, smoky flame that gives off black soot** (unburned carbon). Alkanes such as cyclohexane (C_{6}H_{12}) have more hydrogen per carbon and burn with a cleaner flame and little smoke; alkenes are in between. Ionic inorganic compounds such as NaCl **do not burn** at all.'));
// E
c.push(h3('E. Bromine Test'));
c.push(P('In this test, a few drops of 1% bromine (Br_{2}) dissolved in methylene chloride (CH_{2}Cl_{2}) are added to a hydrocarbon. The bromine solution is **red-orange**.'));
c.push(bullet('**Alkenes (positive test):** Br_{2} adds across the C=C double bond, one Br atom on each carbon. This is an **addition reaction**. The product is colorless, so the red-orange color **disappears immediately**, even in the dark (Figure 3, top). Alkynes react the same way.'));
c.push(bullet('**Alkanes (negative test):** Alkanes have no double bond, so the red-orange color **stays** at first. In bright light (sunlight or a strong lamp), an alkane slowly reacts by **substitution**: a Br atom replaces an H atom, and hydrogen bromide (HBr) gas is given off. The color then fades over several minutes. Without light, this substitution does not happen. HBr is an acid, so it turns moist **blue litmus paper red** (Figure 3, middle).'));
c.push(bullet('**Aromatic compounds (negative test):** A benzene ring does not react with bromine under these conditions (it needs a catalyst), so the red-orange color **stays**. The CH_{3} group of toluene can undergo slow substitution in bright light, like an alkane (Figure 3, bottom).'));
c.push(...img(F+'fig3_3.png',600,336,'**Figure 3:** The bromine test. Only the alkene removes the red-orange color immediately.'));
// F
c.push(h3('F. Potassium Permanganate (Baeyer) Test'));
c.push(P('Potassium permanganate (KMnO_{4}) in water is **purple**. It **oxidizes** an alkene: two –OH groups add to the two carbons of the double bond, forming a **diol** (a compound with two alcohol groups). At the same time, the permanganate is reduced to manganese dioxide (MnO_{2}), a **brown solid** (Figure 4). A **positive** test is a change from purple to a muddy brown color or brown precipitate within about 60 seconds. Alkanes and aromatic compounds do not react in that time, so the purple color **stays** (negative test). The hydrocarbon and the KMnO_{4} solution do not mix, so the tube must be shaken to bring them into contact.',{keepNext:true}));
c.push(...img(F+'fig3_4.png',600,138,'**Figure 4:** The KMnO_{4} (Baeyer) test with cyclohexene.'));
// G
c.push(h3('G. Identifying an Unknown Hydrocarbon'));
c.push(P('You will run the combustion, bromine, and KMnO_{4} tests on an unknown and compare its results with those of the known hydrocarbons (Table 2). The bromine and KMnO_{4} tests should agree with each other: an alkene is positive in both.'));
c.push(P('**Table 2: Expected Test Results for Each Hydrocarbon Family**',{align:AlignmentType.CENTER,after:80,keepNext:true}));
c.push(table([1700,2420,2620,2620],[['Family (example)','Combustion (Part D)','Bromine test (Part E)','KMnO_{4} test (Part F)'],
 ['Alkane (cyclohexane)','Burns; cleaner flame, little smoke','Negative: red-orange stays; fades slowly only in bright light, HBr turns blue litmus red','Negative: stays purple'],
 ['Alkene (cyclohexene)','Burns; some smoke','**Positive:** red-orange color disappears immediately','**Positive:** purple turns brown within 60 s'],
 ['Aromatic (toluene)','Burns; yellow flame, heavy black soot','Negative: red-orange stays (CH_{3} group may react slowly in light)','Negative: stays purple']],{firstColBold:true}));
// Hazards
c.push(h3('Hazards and Safety Instructions'));
c.push(P('Wear safety goggles, a lab coat, and gloves at all times.',{after:100}));
c.push(bullet('**Corrosive and Toxic Vapors (bromine solution):** Bromine causes severe skin burns, and its fumes irritate the eyes, throat, and sinuses. The solvent, methylene chloride (CH_{2}Cl_{2}), has harmful vapors and is a suspected carcinogen. Dispense and use the bromine solution only in the fume hood, and keep the Part E test tubes in the hood. If bromine gets on your skin, rinse with water for 15 minutes and tell your instructor.'));
c.push(bullet('**Hydrogen Bromide (HBr):** The substitution reaction in Part E gives off HBr, a corrosive gas with a pungent, irritating odor. Never smell the bromine test tubes; detect HBr with moist blue litmus paper instead.'));
c.push(bullet('**Flammable:** Cyclohexane, cyclohexene, toluene, and the unknowns are highly flammable, and their vapors can travel to a flame. The combustion tests in Part D are an instructor demonstration in the fume hood. During the demonstration, keep your hydrocarbon bottles capped and away from the hood, and stay behind the sash. Only 5 drops are burned at a time, one dish at a time, and liquid is never added to a burning or hot dish.'));
c.push(bullet('**Harmful Vapors:** Toluene is harmful if inhaled, may cause drowsiness or dizziness, is suspected of damaging an unborn child, and can damage the lungs if swallowed. Cyclohexane and cyclohexene vapors irritate the eyes and respiratory tract. Work with all hydrocarbons in the fume hood.'));
c.push(bullet('**Oxidizer and Stains:** Potassium permanganate (KMnO_{4}) is a strong oxidizer, is harmful if swallowed, and stains skin and clothing brown.'));
c.push(bullet('**Eye Damage and Irritants:** Benzoic acid can cause serious eye damage, and potassium iodide (KI) irritates the eyes. Avoid touching the solids.'));
c.push(bullet('**Odors:** Never put your nose over a test tube. To check an odor, take a breath of fresh air first, then gently waft the vapor from the top of the tube toward your nose with your hand.'));
c.push(bullet('**Droppers and Volatile Chemicals:** Squeeze droppers gently, keep the tip pointed down, and do not tilt a dropper that contains liquid. Transfer liquids carefully between containers.'));
c.push(h3('Waste Instructions'));
c.push(bullet('**Halogenated waste container:** every test tube from Part E (bromine solution, methylene chloride, and brominated products).'));
c.push(bullet('**Non-halogenated organic waste container:** the hydrocarbon test tubes from Parts B and C, the rinse from the Part D evaporating dishes (your instructor rinses these), and the KMnO_{4} test tubes from Part F (they contain the hydrocarbons).'));
c.push(bullet('**Aqueous waste container:** the NaCl and water tube from C.3 (it contains no organic compound).'));
c.push(bullet('**Solid waste container (or as your instructor directs):** the NaCl, KI, and benzoic acid solids from Part B and the NaCl from Part D. If Part B was set up as display vials, leave the vials capped where you found them.'));
c.push(bullet('**Trash:** used litmus paper and burnt matches (make sure matches are out first).'));
// Procedure
c.push(h2('Procedure',{pageBreak:true,before:0}));
c.push(note('Instructor Notes:','The stockroom may set up B.1 and B.2 as capped display vials by the balances; if so, students skip to B.3. Assign each student an unknown number before Part D; the same unknown is used in Parts D, E, and F. If there is no window with direct sunlight for E.2, provide a bright lamp.'));
c.push(h3('A. Types of Hydrocarbons with Model Kits'));
c.push(materials('Molecular model kit (with flexible bonds)'));
c.push(step('A.1','Using a model kit, build models of ethene, propene, cyclobutene, *cis*-2-butene, and ethyne (acetylene).'));
c.push(step('A.2','Draw the condensed or skeletal structure of each on your report sheet.'));
c.push(step('A.3','Hold one carbon of the double bond in your *cis*-2-butene model and try to twist the other carbon. Then build *trans*-2-butene (Figure 2). Record whether you can turn *cis*-2-butene into *trans*-2-butene without breaking a bond, and why. **Instructor check:** show your instructor your *cis*-2-butene and *trans*-2-butene models side by side.'));
c.push(h3('B. Color, Odor, and Physical State'));
c.push(materials('Test tubes (6), test tube rack, spatulas, droppers, NaCl(s), KI(s), benzoic acid(s), cyclohexane, toluene, distilled water'));
c.push(step('B.1','Label three test tubes. Place a few crystals of NaCl, KI, and benzoic acid in separate tubes.'));
c.push(step('B.2','**In the fume hood:** label three more test tubes and add 10 drops of cyclohexane, toluene, and water to separate tubes.'));
c.push(step('B.3','Observe each sample. Record its formula, color, physical state (solid, liquid, or gas), and odor. Check odors only by wafting (see Hazards).'));
c.push(step('B.4','State whether each substance has ionic or covalent bonds, and identify it as organic or inorganic. Look up the melting point of each in your textbook, the chemistry handbook in the lab, or a reliable online source.'));
c.push(step('B.5','If you prepared tubes, pour the liquids into the non-halogenated organic waste container and put the solids in the solid waste container.'));
c.push(h3('C. Solubility'));
c.push(materials('Test tubes (5), test tube rack, spatula, droppers, NaCl(s), toluene, cyclohexane, distilled water'));
c.push(step('C.1','**In the fume hood:** place 10 drops of cyclohexane and 10 drops of water in a test tube. Tap the bottom of the tube to mix, then let it stand. Record what you see. Identify the top and bottom layers as aqueous (polar) or organic (nonpolar).'));
c.push(step('C.2','Place a few crystals of NaCl in one test tube and 10 drops of toluene in another. Add 15 drops of cyclohexane (a nonpolar solvent) to each. Tap the bottom of the tube to mix. Record whether each substance is soluble (S) or insoluble (I) in cyclohexane.'));
c.push(step('C.3','Repeat C.2 with a fresh sample of NaCl and of toluene in two clean tubes, but add 15 drops of water (a polar solvent) instead. Record whether each is soluble (S) or insoluble (I) in water. Identify each substance as organic or inorganic.'));
c.push(step('C.4','Pour the NaCl and water tube from C.3 into the aqueous waste container. Pour the contents of all other tubes into the non-halogenated organic waste container.'));
c.push(h3('D. Combustion'));
c.push(materials('Instructor demonstration in the fume hood: evaporating dishes, long-necked lighter, NaCl(s), cyclohexane, cyclohexene, toluene, and the unknowns'));
c.push(caution('Your instructor performs the combustion tests in the fume hood. Stay behind the sash, and keep all hydrocarbon bottles capped and away from the hood while the demonstration is running.'));
c.push(step('D.1','Watch as your instructor holds a flame to a small (pea-sized) amount of NaCl in an evaporating dish for a few seconds. Record whether it burns.'));
c.push(step('D.2','Watch as your instructor lights 5 drops of cyclohexane in a clean, dry evaporating dish. Record whether it burns, the color of the flame, and the amount of smoke or black soot (none, a little, or a lot). Record the same observations for cyclohexene, toluene, and your unknown (record its number).'));
c.push(step('D.3','Identify each substance as organic or inorganic.'));
c.push(h3('E. Bromine Test'));
c.push(materials('4 dry test tubes, test tube rack, dropper bottle of 1% bromine (Br_{2}) solution in methylene chloride, cyclohexane, cyclohexene, toluene, unknown, blue litmus paper, distilled water, bright light (sunny window or lamp)'));
c.push(caution('Work in the fume hood. Bromine fumes irritate the throat and sinuses. If bromine gets on your skin, rinse with water for 15 minutes and tell your instructor.'));
c.push(step('E.1','Label four dry test tubes and place 15 drops of cyclohexane, cyclohexene, toluene, and your unknown in separate tubes. Carefully add 3–4 drops of the bromine solution to each and swirl. Within the first minute, record whether the red-orange color disappears immediately or stays.'));
c.push(step('E.2','Place each tube that is still red-orange in direct sunlight or under a bright lamp for 5–10 minutes. Record whether the color fades. Then hold a strip of blue litmus paper moistened with distilled water just above the mouth of each tube (do not touch the liquid). A red color shows that HBr gas is being given off. **Do not smell the tubes.**'));
c.push(step('E.3','Draw the condensed or skeletal structure of cyclohexane, cyclohexene, and toluene and of the product(s) of each with bromine. If you observed no reaction, write “No Reaction” (NR). Name the type of reaction (addition or substitution).'));
c.push(step('E.4','Pour the contents of all tubes into the halogenated waste container.'));
c.push(h3s('F. Potassium Permanganate (KMnO_{4}) Test'));
c.push(materials('4 test tubes, test tube rack, 1% KMnO_{4} solution, cyclohexane, cyclohexene, toluene, unknown'));
c.push(caution('KMnO_{4} stains skin and clothing.'));
c.push(step('F.1','Label four test tubes and place 5 drops of cyclohexane, cyclohexene, toluene, and your unknown in separate tubes. Add 15 drops of 1% KMnO_{4} solution to each, and tap or gently shake the tube to mix the two layers. Watch for 60 seconds. A change from purple to brown (often with a brown precipitate) in 60 seconds or less is a positive test for a C=C double bond. Record the color of each after 60 seconds.'));
c.push(step('F.2','Pour the contents of all tubes into the non-halogenated organic waste container.'));
c.push(h3('G. Identification of the Unknown'));
c.push(step('G.1','Use your results from Parts D, E, and F and Table 2 to classify your unknown as an alkane (saturated), an alkene (unsaturated), or an aromatic compound. Explain your reasoning in complete sentences. If your instructor gives you a list of possible compounds, name your unknown and draw its structure.'));
// Pre-lab
c.push(h2('Pre-Lab Questions',{pageBreak:true,before:0}));
const PL=[['1.','Name the reagent and the three hydrocarbons in this lab that must be handled in the fume hood. For the bromine solution, give two hazards and the first-aid step if it touches your skin.',750],
 ['2.','The combustion tests in Part D are an instructor demonstration. List two things you must do during the demonstration to keep the flame from igniting the hydrocarbons, and explain why only 5 drops of each hydrocarbon are burned.',750],
 ['3.','Name the waste container for each: (a) a test tube from the bromine test (b) the cyclohexane–water mixture from C.1 (c) a test tube from the KMnO_{4} test. Why does (a) go into a different container than (b)?',750],
 ['4.','In C.1, which liquid will form the top layer, and which layer is polar? Predict whether NaCl will dissolve in cyclohexane and in water, and explain using “like dissolves like.”',750],
 ['5.','Write the balanced equation for the complete combustion of cyclohexane, C_{6}H_{12}. Predict whether cyclohexane or toluene (C_{7}H_{8}) will give more black soot, and explain why.',840],
 ['6.','In the dark, unknown X turns the red-orange bromine solution colorless immediately. Unknown Y stays red-orange, but in bright light its color slowly fades and moist blue litmus held above the tube turns red. Classify X and Y as alkane or alkene, name the type of reaction each undergoes, and name the gas that turned the litmus red.',840],
 ['7.','Describe what a positive and a negative KMnO_{4} test look like. What is the brown solid? Predict the result for cyclohexene and for toluene.',0]];
PL.forEach(([a,b,sp])=>{c.push(step(a,b,{left:360,after:0})); if(sp)c.push(space(sp));});
// Report
c.push(h2('Report Sheet',{pageBreak:true,before:0,rule:true}));
c.push(...nameBlock());
c.push(h3('A. Types of Hydrocarbons with Model Kits',{before:120}));
c.push(table([2400,6960],[['Name','A.2 Condensed or skeletal structure'],...['Ethene','Propene','Cyclobutene','*cis*-2-Butene','Ethyne (acetylene)'].map(n=>[n,''])],{h:820,firstColBold:true}));
c.push(table([9360],[['**A.3** Can *cis*-2-butene be turned into *trans*-2-butene without breaking a bond? Why or why not?']],{header:0,h:1300}));
c.push(space(120));
c.push(checkRow('A.3','*cis*- and *trans*-2-butene models shown'));
c.push(h3('B. Color, Odor, and Physical State',{pageBreak:true,before:0}));
c.push(table([1500,1260,1260,1500,1260,1290,1290],[['Substance','B.3 Formula','B.3 Color and physical state','B.3 Odor','B.4 Melting point (°C)','B.4 Ionic or covalent?','B.4 Organic or inorganic?'],
 ...['Sodium chloride','Potassium iodide','Benzoic acid','Cyclohexane','Toluene','Water'].map(n=>[n,'','','','','',''])],{h:780,firstColBold:true}));
c.push(h3('C. Solubility'));
c.push(table([2400,3480,3480],[['C.1 Layer','Top or bottom?','Aqueous (polar) or organic (nonpolar)?'],['Water','',''],['Cyclohexane','','']],{h:520,firstColBold:true}));
c.push(space(160));
c.push(table([2400,2320,2320,2320],[['Solute','C.2 Soluble in cyclohexane? (S or I)','C.3 Soluble in water? (S or I)','C.3 Organic or inorganic?'],['NaCl','','',''],['Toluene','','','']],{h:620,firstColBold:true}));
c.push(h3('D. Combustion',{pageBreak:true,before:0}));
c.push(table([2200,1500,1900,2160,1600],[['Substance','D.1–D.2 Burns? (yes or no)','D.2 Flame color','D.2 Smoke or soot (none, a little, a lot)','D.3 Organic or inorganic?'],
 ['NaCl','',{t:'',shade:'F2F2F2'},{t:'',shade:'F2F2F2'},''],['Cyclohexane','','','',''],['Cyclohexene','','','',''],['Toluene','','','',''],['Unknown # _____','','','','']],{h:620,firstColBold:true}));
c.push(h3('E. Bromine Test',{pageBreak:true,before:0}));
c.push(table([2200,3580,3580],[['Sample','E.1 In the first minute: color disappears immediately, or stays?','E.2 In bright light: does the color fade? Litmus color?'],
 ['Cyclohexane','',''],['Cyclohexene','',''],['Toluene','',''],['Unknown # _____','','']],{h:760,firstColBold:true}));
c.push(P('**E.3** Structures, products, and reaction types',{before:200,after:80,keepNext:true}));
c.push(table([1860,2500,2500,2500],[['','Cyclohexane','Cyclohexene','Toluene'],
 ['Structure of the hydrocarbon','','',''],['Product(s) with bromine, or NR','','',''],['Type of reaction (addition, substitution, or NR)','','','']],{h:[0,1300,1400,600],firstColBold:true}));
c.push(h3s('F. Potassium Permanganate (KMnO_{4}) Test',{pageBreak:true,before:0}));
c.push(table([2400,4160,2800],[['Sample','F.1 Color after 60 seconds (brown precipitate?)','F.1 Positive or negative?'],
 ['Cyclohexane','',''],['Cyclohexene','',''],['Toluene','',''],['Unknown # _____','','']],{h:620,firstColBold:true}));
c.push(h3('G. Identification of the Unknown'));
c.push(table([1560,1950,1950,1950,1950],[['Unknown #','Combustion (D)','Bromine test (E)','KMnO_{4} test (F)','G.1 Alkane, alkene, or aromatic?'],['','','','','']],{h:1000}));
c.push(table([9360],[['**G.1** Reasoning (complete sentences). If a list of possible compounds was given, name and draw your unknown.']],{header:0,h:2400}));
// Questions
c.push(h2('Questions and Problems',{pageBreak:true,before:0}));
c.push(step('Q.1','Name each of the following hydrocarbons.',{left:0,after:120}));
const line_='______________________________';
const qline=(lab,s)=>new Paragraph({children:[new TextRun({text:lab+'  ',bold:true,font:'Times New Roman',size:24}),...runs(s),new TextRun({text:'\t'+line_,font:'Times New Roman',size:24})],indent:{left:540},tabStops:[{type:'left',position:5200}],spacing:{after:320,line:264}});
const qimg=(lab,file,w,h)=>new Paragraph({children:[new TextRun({text:lab+'  ',bold:true,font:'Times New Roman',size:24}),new ImageRun({type:'png',data:fs.readFileSync(file),transformation:{width:w,height:h},altText:L.altFor(file)}),new TextRun({text:'\t'+line_,font:'Times New Roman',size:24})],indent:{left:540},tabStops:[{type:'left',position:5200}],spacing:{after:240}});
c.push(qline('A.','CH_{3}–CH=CH_{2}'));
c.push(qline('B.','CH_{3}–CH=CH–CH_{3}'));
c.push(qline('C.','CH_{2}=C(CH_{3})–CH_{2}–CH_{2}–CH_{3}'));
c.push(qimg('D.',F+'fig3_q_cyclohexene.png',72,66));
c.push(qimg('E.',F+'fig3_q_benzene.png',72,66));
c.push(qline('F.','HC≡CH'));
c.push(step('Q.2','What three properties can you use to distinguish between organic and inorganic compounds?',{left:0,after:0})); c.push(space(650));
c.push(step('Q.3','A white solid has no odor, is soluble in water, and is not flammable. Would you expect it to be an organic or an inorganic substance? Explain.',{left:0,after:0})); c.push(space(650));
c.push(step('Q.4','A clear liquid with a gasoline-like odor forms a layer when added to water. Would you expect it to be an organic or an inorganic substance? Explain.',{left:0,after:0})); c.push(space(650));
c.push(step('Q.5','Complete the following reactions by drawing the product(s).',{left:0,after:200}));
c.push(P('**A.**  CH_{3}–CH=CH–CH_{3}  +  Br_{2}  ⟶',{indent:{left:540},after:500}));
c.push(new Paragraph({children:[new TextRun({text:'B.  ',bold:true,font:'Times New Roman',size:24}),new ImageRun({type:'png',data:fs.readFileSync(F+'fig3_q5b.png'),transformation:{width:198,height:60},altText:L.altFor('fig3_q5b.png')})],indent:{left:540},spacing:{after:900}}));
build(c,OUT).then(()=>console.log('wrote',OUT));
