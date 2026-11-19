const L=require('../lablib.js'); const {P,title,h2,h3,h4,bullet,step,sub,materials,note,caution,img,table,space,nameBlock,build,W,D}=L;
const F=process.argv[2]+'/'; const OUT=process.argv[3];
const {Paragraph,AlignmentType}=D; const M=D;
const R=s=>new M.MathRun(s);
function eq(left,num,den,right){return new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:120,after:200},keepNext:false,children:[new M.Math({children:[...(left?[R(left)]:[]),new M.MathFraction({numerator:[R(num)],denominator:[R(den)]}),...(right?[R(right)]:[])]})]});}
const c=[];
c.push(title('Experiment #14: Vitamins'));
c.push(h3('Goals',{before:0}));
['Classify vitamins as water-soluble or fat-soluble.',
 'Standardize an iodine solution using a vitamin C tablet that contains a known amount of vitamin C.',
 'Use an iodine titration to measure the vitamin C in a fruit juice and a powdered drink.',
 'Determine how heating affects the vitamin C content of a juice and a powdered drink.'].forEach(s=>c.push(bullet(s)));
c.push(h2('Introduction'));
c.push(h3('A. Vitamins and Their Solubility',{before:120}));
c.push(P('Vitamins are organic compounds that the body needs in small amounts. Many of them act as **coenzymes**, helping enzymes do their jobs. Most vitamins cannot be made by the body, so they must come from the diet. A diet low in a vitamin leads to a **deficiency disease**: too little vitamin C causes scurvy (bleeding gums, slow-healing wounds), too little vitamin A causes night blindness, too little vitamin D causes rickets in children, and too little vitamin B_{12} causes anemia.'));
c.push(P('Vitamins are grouped by solubility, using the “like dissolves like” rule from CHEM 3A. Vitamins B and C have many polar groups (such as –OH), so they are **water-soluble**. Most of them are not stored in large amounts; any extra is removed in the urine, so they must be eaten regularly. Vitamin B_{12} is the exception: the liver stores enough to last a few years (source: MedlinePlus). Vitamins A, D, E, and K are mostly nonpolar hydrocarbon, so they are **fat-soluble**. They dissolve in nonpolar solvents and are stored in body fat. In Part A, methylene chloride (CH_{2}Cl_{2}), an organic solvent of low polarity, stands in for fat. Table 1 summarizes some of the water-soluble vitamins; folic acid and pantothenic acid are also water-soluble B vitamins.'));
c.push(P('**Table 1: Some Water-Soluble Vitamins and Their Coenzyme Functions**',{align:AlignmentType.CENTER,after:80,keepNext:true}));
c.push(table([2100,3630,3630],[['Vitamin','Coenzyme function','Deficiency symptoms'],
 ['B_{1} Thiamine','Decarboxylation of α-keto acids','Beriberi (fatigue, anorexia, nerve degeneration, heart failure)'],
 ['B_{2} Riboflavin','Biological oxidation','Dermatitis, glossitis (tongue inflammation), cataracts'],
 ['B_{3} Niacin','Biological oxidation','Pellagra (scaly skin, muscle fatigue, diarrhea, mouth sores, mental disorders)'],
 ['B_{6} Pyridoxine','Transamination reactions','Dermatitis, fatigue, anemia, irritability'],
 ['B_{12} Cobalamin','Transfer of methyl groups in the synthesis of red blood cells, choline, and purines','Pernicious anemia, malformed blood cells, mental disorders'],
 ['C Ascorbic acid','Synthesis of collagen, protein metabolism, iron absorption, wound healing','Scurvy (bleeding gums, slow-healing wounds, muscle pain, anemia)'],
 ['Biotin','Carboxylation of pyruvate to oxaloacetate; fatty acid and amino acid metabolism','Dermatitis, fatigue, anemia, nausea, depression']],{firstColBold:true}));
c.push(h3('B. Standardization: Measuring Vitamin C by Titration'));
c.push(h4('Vitamin C Is a Reducing Agent'));
c.push(P('Vitamin C (ascorbic acid) helps the body build collagen, heal wounds, fight infection, and absorb iron. It is found in citrus fruits, broccoli, romaine lettuce, and green peppers. Vitamin C is easily oxidized, which makes it a good **reducing agent**. Recall from CHEM 3A that **oxidation** is the loss of electrons and **reduction** is the gain of electrons. For organic molecules, oxidation often shows up as the loss of hydrogen atoms, as you saw when alcohols were oxidized in Experiment #4.'));
c.push(P('When vitamin C reacts with iodine (I_{2}), vitamin C loses two hydrogen atoms (it is oxidized), and I_{2} gains electrons to become colorless iodide ions, I^{–} (it is reduced). **One molecule of vitamin C reacts with one molecule of I_{2}** (Figure 1). Because of this 1:1 ratio, the amount of iodine a sample uses up tells us how much vitamin C the sample contains.',{keepNext:true}));
c.push(...img(F+'fig12_1.png',624,150,'**Figure 1:** Vitamin C is oxidized by iodine. The H atoms of the two ring –OH groups (shown in red) are removed, and those two O atoms become C=O groups (shown in blue).'));
c.push(h4('Titration with a Starch Indicator'));
c.push(P('A **titration** measures exactly how much of one solution is needed to react completely with a sample. In this experiment, a **buret** delivers the iodine solution, and you read its volume to the nearest 0.01 mL. The volume used in each titration is the final buret reading minus the initial buret reading.'));
c.push(P('Starch is the **indicator**. Starch and I_{2} together form a deep **blue-black** color, but starch has no color with iodide ions (I^{–}). As you add iodine to a sample that still contains vitamin C, each drop of I_{2} is used up immediately, so no blue color lasts. Once all of the vitamin C has reacted, the next drop of I_{2} has nothing left to react with. It combines with the starch, and the blue-black color stays. This is the **endpoint** (Figure 2). The more vitamin C a sample contains, the more iodine it takes to reach the endpoint. A small amount of acetic acid is added to each sample to keep it slightly acidic, which slows the breakdown of vitamin C by oxygen in the air.'));
c.push(h4('Why We Titrate a Vitamin C Tablet First'));
c.push(P('The exact concentration of the iodine solution is not known, and it slowly changes over time as iodine evaporates and reacts with light and air. So instead of trusting a label, we **standardize** the iodine solution. In Part B, you titrate a vitamin C tablet that contains a *known* amount of vitamin C (100 mg). This tells you how many milligrams of vitamin C react with 1 mL of *your* iodine solution, called the **standardization factor**:',{keepNext:true}));
c.push(eq('standardization factor (mg/mL) = ','mg vitamin C in tablet','mL iodine solution used'));
c.push(h3('C. Analysis of Vitamin C in Foods'));
c.push(P('In Parts C and D, you titrate samples that contain an *unknown* amount of vitamin C. The standardization factor converts the volume of iodine each sample uses into milligrams of vitamin C:',{keepNext:true}));
c.push(eq('mg vitamin C in sample = mL iodine solution used × ','mg vitamin C','1 mL iodine solution'));
c.push(P('**Example:** A 100-mg tablet uses 10.00 mL of iodine solution, so the standardization factor is 100 mg ÷ 10.00 mL = 10.0 mg/mL. A juice sample that uses 1.50 mL of the same iodine solution contains 1.50 mL × 10.0 mg/mL = 15.0 mg of vitamin C.'));
c.push(P('The factor is only good for the iodine solution it was measured with, so use the same stock bottle of iodine, in the same buret, for every titration in Parts B, C, and D. Table 2 shows how the parts of this experiment fit together.'));
c.push(P('**Table 2: How the Parts of This Experiment Fit Together**',{align:AlignmentType.CENTER,before:120,after:80,keepNext:true}));
c.push(table([1900,2560,2400,2500],[['Part','Sample','Type of test','What you find'],
 ['A. Solubility','Vitamin tablets and capsules','Qualitative: does it dissolve in water or CH_{2}Cl_{2}?','Water-soluble or fat-soluble'],
 ['B. Standardization','Vitamin C tablet (known: 100 mg)','Titration of a known amount','mg vitamin C per 1 mL of iodine'],
 ['C. Analysis','Juice and powdered drink (unknown)','Titration of an unknown amount','mg vitamin C in each sample'],
 ['D. Heat destruction','Juice and powdered drink, boiled','Titration after heating','mg vitamin C destroyed by heat']],{firstColBold:true}));
c.push(h3('D. Heat Destruction of Vitamin C'));
c.push(P('Vitamin C breaks down when it is heated, especially when air (oxygen) is present. In Part D, you will boil a juice sample and a powdered drink sample that are identical to the ones you analyzed in Part C, then titrate them again. The difference between the unheated and heated results tells you how much vitamin C was destroyed by heating.'));
// Hazards
c.push(h3('Hazards and Safety Instructions'));
c.push(P('Wear safety goggles at all times. Wear gloves when handling iodine solution and methylene chloride.',{after:100}));
c.push(bullet('**Toxic Vapors:** Methylene chloride (CH_{2}Cl_{2}) evaporates quickly, and its vapors are harmful to breathe. It is a suspected carcinogen. Dispense and use it only in the fume hood, and keep containers closed.'));
c.push(bullet('**Staining and Irritating Reagent:** Iodine solution stains skin, clothing, and lab benches brown and can irritate skin and eyes. Wipe up drips right away. Iodine stains on skin fade in a day or two. If iodine gets in your eyes, rinse with water for 15 minutes and tell your instructor.'));
c.push(bullet('**Buret Safety:** Lower the buret clamp, or take the buret down, so that you fill it below eye level. Never fill a buret over your head. Remove the funnel after filling so it does not drip and change your reading.'));
c.push(bullet('**Thermal Hazards:** Boiling samples on a hot plate (Part D) can bump and splash. Heat gently, swirl with flask tongs, and point the flask opening away from everyone. Let hot flasks cool on a wire mesh for 1–2 minutes before placing them in the ice bath; very hot glass can crack in ice water.'));
c.push(bullet('**Food Items:** Juices, drink powders, and vitamin tablets used in lab are lab chemicals. Never taste or drink anything in the lab.'));
c.push(h3('Waste Instructions'));
c.push(bullet('**Halogenated waste container:** every test tube that contains methylene chloride (Part A); all titration flasks from Parts B, C, and D; the waste beaker used to fill the buret tip (and to prime the buret, if you did); and the iodine left in your buret at the end of lab. Never pour leftover iodine back into the stock bottle.'));
c.push(bullet('**Drain, with plenty of running water:** test tubes that contain only vitamins and water (no CH_{2}Cl_{2}), and leftover juice or drink that has no iodine in it.'));
c.push(bullet('**Trash:** cheesecloth, empty vitamin capsules, and weighing paper.'));
// Procedure
c.push(h2('Procedure',{pageBreak:true,before:0}));
c.push(note('Instructor Notes:','Set up hot plates and an ice-water bath for Part D. To save time, students can prepare and start boiling their Part D flasks before they begin Part B; the cooled flasks can wait in the ice bath until they are titrated. Check before lab that a 100-mg tablet uses a reasonable volume of your iodine solution (about 10–20 mL in a 25-mL buret), so that the juice and powder samples use only a few mL each. If needed, adjust the mass of powdered drink in C.3 so that its sample uses about the same volume of iodine as the juice sample. **Methylene chloride:** laboratory use is allowed under the U.S. EPA’s 2024 TSCA rule only within a Workplace Chemical Protection Program (exposure monitoring, exposure limits, and training; 40 CFR 751). Check with your EHS office that your lab is covered, or substitute a non-chlorinated solvent.'));
c.push(h3('A. Solubility of Vitamins'));
c.push(materials('Test tubes, test tube rack, 10-mL graduated cylinder, droppers, mortar and pestle, spatula, methylene chloride (CH_{2}Cl_{2}), vitamins A, B (complex), C, D, E, folic acid, and any others provided'));
c.push(step('A.1','Place a tiny amount (a “pinch,” a few milligrams) of each vitamin in a separate, labeled test tube. Crush tablets with a mortar and pestle, and pierce gel capsules to squeeze out the contents.'));
c.push(step('A.2','Add 2 mL of water to each test tube and mix well. Tablets contain fillers (such as starch or calcium salts) that may not dissolve, so some cloudiness or a little solid at the bottom does not by itself mean the vitamin is insoluble. Judge by the vitamin itself: if the vitamin (or its color) spreads evenly through the water, it is water-soluble; if an oil floats or forms a separate layer, or the colored contents stay undissolved, it is not water-soluble. Folic acid is a B vitamin but dissolves only slightly in water, so expect little to dissolve. Record your observations.'));
c.push(step('A.3','**In the fume hood:** place a fresh pinch of each vitamin that did *not* dissolve in water in a clean, dry test tube. Add 20 drops of methylene chloride (CH_{2}Cl_{2}) and mix. Record whether the vitamin dissolves in the organic solvent. Dispose of these tubes in the halogenated waste container.'));
c.push(step('A.4','Use Table 1, the Introduction, or your textbook to record one main function of each vitamin in the body.'));
c.push(h3('B. Standardization of the Iodine Solution'));
c.push(materials('Vitamin C tablet (100 mg), mortar and pestle, 250-mL Erlenmeyer flasks, 50-mL graduated cylinder, 25-mL buret, buret clamp, ring stand, small funnel, small beaker (waste beaker), white paper, 10-mL graduated cylinder, 0.1 M acetic acid, 1% starch solution, iodine solution'));
c.push(h4('Using One Buret for the Whole Lab'));
c.push(P('You will fill **one buret** with iodine solution and use it for every titration in Parts B, C, and D. Each titration uses only a small amount of iodine, so follow these rules:',{after:100}));
c.push(bullet('**Never drain the buret between titrations.** The final reading of one titration becomes the initial reading of the next.'));
c.push(bullet('Before each titration, check that the buret holds at least 5 mL more iodine than you expect to use. If it does not, refill it from the same stock bottle and record a new initial reading *before* you start. Never refill in the middle of a titration.'));
c.push(bullet('If you overshoot an endpoint or need to repeat a sample, prepare a fresh sample and continue from your current buret reading. You do not need to drain or refill.'));
c.push(bullet('Drain the buret into the halogenated waste container only when **all** of your titrations are done.'));
c.push(bullet('**Reading the buret:** Iodine is dark, so hold a white card behind the buret at eye level. Read the bottom of the meniscus to two decimal places. If you cannot see the bottom of the meniscus, read the top of the liquid instead, and read it the same way every time.'));
c.push(bullet('**Best practice (optional):** Before the first fill, rinse (“prime”) the buret with two small portions (about 3 mL each) of iodine solution, draining each through the tip into a waste beaker. Empty the waste beaker into the halogenated waste container. This keeps leftover water in the buret from diluting the iodine.'));
c.push(...img(F+'fig12_2.png',540,372,'**Figure 2:** Titration setup for vitamin C analysis, and what the endpoint looks like.'));
c.push(step('B.1','Obtain a vitamin C tablet and record the mass of vitamin C (mg) printed on the label. Crush the tablet with a mortar and pestle and transfer all of the powder to a 250-mL Erlenmeyer flask. Measure 50 mL of distilled water in a 50-mL graduated cylinder. Use a few mL of it to rinse the mortar into the flask, then add the rest of the water to the flask. Add 2 mL of 0.1 M acetic acid and swirl to dissolve. (The tablet’s fillers may leave the solution cloudy; this is fine, because only vitamin C reacts with iodine.) Add 10 drops of 1% starch solution.'));
c.push(step('B.2','Clamp a 25-mL buret to a ring stand and close the stopcock. Place a small funnel in the top and carefully fill the buret with iodine solution to just below the 0.00 mL mark. Remove the funnel. Open the stopcock briefly over a waste beaker to fill the tip and remove any air bubbles. Record the initial buret reading to 0.01 mL (it does not need to be exactly 0.00 mL).'));
c.push(step('B.3','Place the flask on a piece of white paper under the buret. Add iodine solution while swirling the flask. At first, blue color will flash and disappear. When the blue takes longer to fade, add iodine one drop at a time. The endpoint is the first blue-black color that stays for 20 seconds while swirling. Record the final buret reading and calculate the volume of iodine solution used.'));
c.push(step('B.4','Calculate the standardization factor: the mg of vitamin C that react with 1 mL of your iodine solution.',{after:0,keepNext:true}));
c.push(eq('','mg vitamin C in tablet','mL iodine solution used',' = mg vitamin C per 1 mL iodine solution'));
c.push(h3('C. Analysis of Vitamin C in a Fruit Juice and a Powdered Drink'));
c.push(materials('Fruit juice (light-colored works best), powdered drink mix (such as an orange drink powder), cheesecloth, funnel, 250-mL Erlenmeyer flasks, 50-mL graduated cylinder, 25-mL graduated cylinder (or a pipet), 10-mL graduated cylinder, balance, weighing paper, 0.1 M acetic acid, 1% starch solution, your buret of iodine solution from Part B'));
c.push(P('The endpoint is easiest to see in a colorless or lightly colored sample. Record the type and brand of each sample you use.'));
c.push(step('C.1','**Juice sample:** If the juice has a lot of pulp, pour it through cheesecloth in a funnel (use two layers if pulp still gets through). Measure 20.0 mL of juice into a clean 250-mL Erlenmeyer flask. Add 30 mL of distilled water, 2 mL of 0.1 M acetic acid, and 10 drops of 1% starch solution.'));
c.push(step('C.2','Record the initial buret reading (your final reading from Part B, or your new reading if you refilled the buret). Titrate the juice to the blue-black endpoint, adding the iodine slowly; this sample needs much less iodine than the tablet did. Record the final buret reading.'));
c.push(step('C.3','**Powdered drink sample:** From the label, record the mg of vitamin C per serving and the serving size in grams. Weigh 1.00 g of the powder and transfer it to a clean 250-mL Erlenmeyer flask. Add 50 mL of distilled water and swirl until the powder dissolves. Add 2 mL of 0.1 M acetic acid and 10 drops of 1% starch solution.'));
c.push(step('C.4','Record the initial buret reading (your final reading from C.2, or your new reading if you refilled the buret). Titrate the powdered drink to the blue-black endpoint and record the final buret reading.'));
c.push(step('C.5','For each sample, calculate the volume of iodine solution used and the mg of vitamin C in the sample, using your standardization factor from B.4:',{after:0,keepNext:true}));
c.push(eq('_____ mL iodine solution × ','mg vitamin C','1 mL iodine solution',' = mg vitamin C'));
c.push(sub('Then calculate the mg of vitamin C per mL of juice and per gram of powder. For the powder, also calculate the amount of vitamin C you expected from the label: (mg vitamin C per serving ÷ grams per serving) × grams of powder used.'));
c.push(h3('D. Heat Destruction of Vitamin C'));
c.push(materials('250-mL Erlenmeyer flasks, the graduated cylinders, cheesecloth, balance, and weighing paper from Part C, hot plate, flask tongs, wire mesh, ice-water bath, juice and powdered drink from Part C, 0.1 M acetic acid, 1% starch solution, your buret of iodine solution'));
c.push(step('D.1','Prepare a second juice sample exactly as in C.1 (20.0 mL of juice and 30 mL of water) and a second powdered drink sample exactly as in C.3 (1.00 g of powder and 50 mL of water). Do **not** add the acetic acid or starch yet. Label the flasks.'));
c.push(step('D.2','Heat both flasks on a hot plate until they boil gently, then boil for 15 minutes, swirling occasionally with flask tongs. Some water will evaporate; this does not affect the result, because you are measuring the total mg of vitamin C in the flask.'));
c.push(step('D.3','Using flask tongs, move the flasks to a wire mesh to cool for 1–2 minutes, then place them in an ice-water bath until they are cool to the touch. Cooling quickly stops the breakdown of vitamin C.'));
c.push(step('D.4','Add 2 mL of 0.1 M acetic acid and 10 drops of 1% starch solution to each flask. Continuing from your current buret reading, titrate each heated sample to the blue-black endpoint. **These titrations may use less iodine than in Part C,** so add it slowly, drop by drop as you approach the endpoint. Record the initial and final buret readings for each.'));
c.push(step('D.5','For each heated sample, calculate the volume of iodine solution used and the mg of vitamin C remaining. Then use your results from C.5 to calculate the mg of vitamin C destroyed by heating and the percent destroyed:',{after:0,keepNext:true}));
c.push(eq('% destroyed = ','mg vitamin C destroyed','mg vitamin C before heating (C.5)',' × 100%'));
c.push(P('When all titrations are done, drain the buret into the halogenated waste container and rinse it with water.',{before:120}));
// Pre-lab
c.push(h2('Pre-Lab Questions',{pageBreak:true,before:0}));
const PL=[['1.','Where must you dispense and use methylene chloride, and which waste container do its test tubes go in?',800],
 ['2.','Where do the titration flasks and the iodine left in your buret go at the end of lab?',720],
 ['3.','You use one buret of iodine solution for every titration in Parts B, C, and D. Why do you never drain it between titrations? What should you do before a titration if the buret holds less than 5 mL more iodine than you expect to use?',1000],
 ['4.','In A.2, a crushed vitamin tablet leaves the water cloudy with some white solid at the bottom. Does this prove the vitamin is not water-soluble? Explain.',880],
 ['5.','What color shows the endpoint of the vitamin C titration? Explain why this color appears only after all of the vitamin C has reacted.',1000],
 ['6.','A 100-mg vitamin C tablet uses 12.50 mL of iodine solution. A juice titration then starts at a buret reading of 12.50 mL and ends at 14.75 mL. Calculate the standardization factor and the mg of vitamin C in the juice sample. Show your work.',1280],
 ['7.','Why is a small amount of acetic acid added to each sample before it is titrated?',0]];
PL.forEach(([a,b,sp])=>{c.push(step(a,b,{left:360,after:0})); if(sp)c.push(space(sp));});
// Report sheet
c.push(h2('Report Sheet',{pageBreak:true,before:0,rule:true}));
c.push(...nameBlock());
c.push(h3('A. Solubility of Vitamins',{before:120}));
c.push(table([1900,1700,1700,1900,2160],[['Vitamin','A.2 Soluble in water?','A.3 Soluble in CH_{2}Cl_{2}?','Water- or fat-soluble?','A.4 Main function in the body'],
 ...Array.from({length:7},()=>['','','','',''])],{h:560}));
c.push(h3('B. Standardization of the Iodine Solution'));
c.push(table([5200,4160],[['**B.1** mg of vitamin C in tablet (from label)','mg'],['**B.2** Initial buret reading','mL'],['**B.3** Final buret reading','mL'],['Volume of iodine solution used','mL'],[['**B.4** Standardization factor','(show your calculation)'],'mg vitamin C / 1 mL iodine']].map(r=>[r[0],{t:r[1],align:AlignmentType.RIGHT}]),{header:0,h:[500,500,500,500,1300]}));
c.push(h3('C. Analysis of Vitamin C',{before:240}));
c.push(table([3360,3000,3000],[['','Fruit juice','Powdered drink'],
 ['Type and brand of sample','',''],
 ['**C.1 / C.3** Amount of sample used',{t:'mL',align:AlignmentType.RIGHT},{t:'g',align:AlignmentType.RIGHT}],
 ['**C.2 / C.4** Initial buret reading',{t:'mL',align:AlignmentType.RIGHT},{t:'mL',align:AlignmentType.RIGHT}],
 ['Final buret reading',{t:'mL',align:AlignmentType.RIGHT},{t:'mL',align:AlignmentType.RIGHT}],
 ['**C.5** Volume of iodine solution used',{t:'mL',align:AlignmentType.RIGHT},{t:'mL',align:AlignmentType.RIGHT}],
 [['mg vitamin C in sample','(show your calculation)'],{t:'mg',align:AlignmentType.RIGHT},{t:'mg',align:AlignmentType.RIGHT}],
 ['mg vitamin C per mL juice or per g powder',{t:'mg/mL',align:AlignmentType.RIGHT},{t:'mg/g',align:AlignmentType.RIGHT}],
 ['**C.3** Label: mg vitamin C per serving; serving size (g)',{t:'',shade:'F2F2F2'},''],
 [['Expected mg vitamin C in sample from the label','(show your calculation)'],{t:'',shade:'F2F2F2'},{t:'mg',align:AlignmentType.RIGHT}]],{h:[0,600,520,520,520,520,1500,700,700,1500]}));
c.push(h3('D. Heat Destruction of Vitamin C',{before:240}));
c.push(table([3360,3000,3000],[['','Heated fruit juice','Heated powdered drink'],
 ['**D.4** Initial buret reading',{t:'mL',align:AlignmentType.RIGHT},{t:'mL',align:AlignmentType.RIGHT}],
 ['Final buret reading',{t:'mL',align:AlignmentType.RIGHT},{t:'mL',align:AlignmentType.RIGHT}],
 ['**D.5** Volume of iodine solution used',{t:'mL',align:AlignmentType.RIGHT},{t:'mL',align:AlignmentType.RIGHT}],
 [['mg vitamin C remaining after heating','(show your calculation)'],{t:'mg',align:AlignmentType.RIGHT},{t:'mg',align:AlignmentType.RIGHT}],
 ['mg vitamin C destroyed (C.5 − D.5)',{t:'mg',align:AlignmentType.RIGHT},{t:'mg',align:AlignmentType.RIGHT}],
 [['Percent destroyed','(show your calculation)'],{t:'%',align:AlignmentType.RIGHT},{t:'%',align:AlignmentType.RIGHT}]],{h:[0,520,520,520,1500,600,1500]}));
// Questions
c.push(h2('Questions and Problems',{pageBreak:true,before:0}));
const Q=[['Q.1','Which of the vitamins you tested are water-soluble? Which are fat-soluble?'],
 ['Q.2','Use the polar or nonpolar structure of the vitamins to explain your results in Part A.'],
 ['Q.3','Why do water-soluble vitamins need to be eaten more regularly than fat-soluble vitamins?'],
 ['Q.4','Why did you titrate a vitamin C tablet (Part B) before you titrated the juice and powdered drink? Why not use the concentration of iodine printed on the bottle?'],
 ['Q.5','A student adds several extra drops of iodine after the endpoint of the juice titration. Will the calculated mg of vitamin C in the juice be too high or too low? Explain.'],
 ['Q.6','Which of your samples had more vitamin C? For the powdered drink, how did your result compare with the amount expected from the label?'],
 ['Q.7','The Recommended Dietary Allowance (RDA) for vitamin C is 75 mg per day for adult women and 90 mg per day for adult men (source: NIH Office of Dietary Supplements). Using 75 mg, how many milliliters of the juice or grams of the powdered drink would you need to consume to meet it? Show your work.'],
 ['Q.8','Does heating affect the vitamin C content of a juice or drink? Compare the percent destroyed for your two samples.'],
 ['Q.9','If vitamin C tablets are stored in a warm, humid bathroom cabinet, what might happen to their vitamin C content over time? Explain.'],
 ['Q.10','If you want to keep most of the vitamin C in your vegetables, how should you prepare them for dinner?']];
Q.forEach(([a,b],i)=>{c.push(step(a,b,{left:0,after:0})); c.push(space(i==Q.length-1?0:(i==4?1300:1500)));});
build(c,OUT).then(()=>console.log('wrote',OUT));
