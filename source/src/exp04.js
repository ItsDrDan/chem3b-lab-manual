const L=require('../lablib.js'); const {P,title,h2,h3,h4,bullet,step,sub,materials,note,caution,img,table,space,nameBlock,build,W,D}=L;
const F=process.argv[2]+'/'; const OUT=process.argv[3]; const {AlignmentType}=D;
const eq=(s)=>P(s,{align:AlignmentType.CENTER,after:200});
const c=[];
c.push(title('Experiment #4: Alcohols and Phenols'));
c.push(h3('Goals',{before:0}));
['Determine chemical and physical properties of alcohols and phenols.','Classify an alcohol as primary, secondary, or tertiary.',
 'Use the chromic acid test to distinguish primary and secondary alcohols from tertiary alcohols, and the iron(III) chloride test to identify a phenol.',
 'Write the formulas of the oxidation products of alcohols.','Use your test results to identify an unknown.'].forEach(s=>c.push(bullet(s)));
c.push(h2('Introduction'));
c.push(h3('A. Structures of Alcohols and Phenols',{before:120}));
c.push(P('An **alcohol** is an organic compound that contains a **hydroxyl group (–OH)** bonded to a carbon atom that has only single bonds. **Methanol** (CH_{3}OH) is the simplest alcohol. **Ethanol** is the alcohol in beer, wine, and other alcoholic drinks, and it is used in labs as a solvent, a preservative, and a cleaner. **2-Propanol** (isopropyl alcohol) is rubbing alcohol, and it is found in astringents and perfumes (Figure 1).'));
c.push(P('A **phenol** has an –OH group bonded directly to a **benzene ring**. The simplest member, also called phenol (or carbolic acid), is toxic and corrosive: it burns the skin and is quickly absorbed through it. Related phenols such as thymol (from thyme) are used as antiseptics and are found in some mouthwashes and cough drops. Because phenol itself is too hazardous for a teaching lab, the phenol you will test is **salicylic acid**, a white solid from willow bark that is used in acne and wart treatments and is the starting material for aspirin (Experiment #11). It has an –OH on a benzene ring (the phenol part) and also a carboxylic acid group (–COOH).',{keepNext:true}));
c.push(...img(F+'fig4_1.png',624,153,'**Figure 1:** Common alcohols (left) and phenols (right). The hydroxyl group is shown in red.'));
c.push(h4('Classification of Alcohols'));
c.push(P('Alcohols are classified by the number of carbon atoms bonded to the carbon that holds the –OH group (Figure 2). In a **primary (1°)** alcohol, that carbon is bonded to one other carbon; in a **secondary (2°)** alcohol, to two carbons; and in a **tertiary (3°)** alcohol, to three carbons. (Methanol, with no other carbons, behaves like a 1° alcohol.) Phenols are not classified as 1°, 2°, or 3°, because their –OH is on a benzene ring carbon.',{keepNext:true}));
c.push(...img(F+'fig4_2.png',624,153,'**Figure 2:** Classifying alcohols. The alcohols in this experiment are shown.'));
c.push(h3('B. Properties of Alcohols and Phenols'));
c.push(P('**Odor:** Small alcohols have sharp, familiar odors (ethanol and rubbing alcohol). Salicylic acid is an odorless solid. Never smell a chemical directly; waft it (see Hazards).'));
c.push(P('**Solubility in water:** The –OH group is polar, so alcohols form **hydrogen bonds** with water and with each other (Figure 3). Alcohols with one to three carbons, and t-butyl alcohol, mix completely with water. As the nonpolar hydrocarbon part gets larger, solubility drops: alcohols with five or more carbons, such as cyclohexanol (six carbons), are only slightly soluble. A **soluble** sample gives one clear layer; an **insoluble** sample gives a cloudy mixture or two separate layers.',{keepNext:true}));
c.push(...img(F+'fig4_3.png',560,150,'**Figure 3:** Hydrogen bonds (green dashes) between ethanol and water and between two ethanol molecules.'));
c.push(P('**Acidity:** Alcohols are about as acidic as water, so an alcohol–water mixture has a pH near 7. Phenol is a **weak acid**: a small fraction of its molecules give up the H^{+} of the –OH group (Figure 4). The negative charge of the phenoxide ion is spread over the benzene ring, which makes phenol much more acidic than an alcohol, but still a weaker acid than a carboxylic acid. A solution of a simple phenol is slightly acidic, with a pH of about 5–6. Salicylic acid is more acidic still (pH about 2–3 in water) because it also has a carboxylic acid group, which gives up H^{+} much more easily than the phenol –OH. Salicylic acid is only slightly soluble in cold water (about 0.2 g per 100 mL): its benzene ring is nonpolar, even though its –OH and –COOH groups form hydrogen bonds with water.',{keepNext:true}));
c.push(...img(F+'fig4_4.png',500,138,'**Figure 4:** Phenol is a weak acid in water.'));
c.push(h3('C. Oxidation of Alcohols: the Chromic Acid Test'));
c.push(P('In an **oxidation** of an alcohol, two hydrogen atoms are removed: the H from the –OH group and an H from the carbon that holds the –OH. A **C=O double bond** forms in their place (Figure 5). Your body carries out the same kind of reaction with enzymes, for example when the liver oxidizes ethanol.'));
c.push(bullet('A **1° alcohol** is oxidized to an **aldehyde**. Under the conditions of this test, the aldehyde is oxidized again to a **carboxylic acid**.'));
c.push(bullet('A **2° alcohol** is oxidized to a **ketone**, and the reaction stops there.'));
c.push(bullet('A **3° alcohol** has **no H** on the carbon that holds the –OH, so it is **not oxidized**.'));
c.push(P('The oxidizing agent is chromium(VI), Cr(VI). The test reagent is a 2% chromate solution made in sulfuric acid. In acid, yellow chromate (CrO_{4}^{2−}) changes to **orange** dichromate (Cr_{2}O_{7}^{2−}) and chromic acid (H_{2}CrO_{4}), which gives the test its name:',{before:120,keepNext:true}));
c.push(eq('2 CrO_{4}^{2−} (yellow) + 2 H^{+} → Cr_{2}O_{7}^{2−} (orange) + H_{2}O'));
c.push(P('When Cr(VI) oxidizes an alcohol, it is reduced to chromium(III), Cr^{3+}, which is **blue-green**. A **positive test** is a change from orange to blue-green within 1–2 minutes (1° or 2° alcohol). A **negative test** stays orange (3° alcohol). A phenol such as salicylic acid has no H on its C–OH carbon, so it does not react the way 1° and 2° alcohols do; the mixture stays orange, or its ring is slowly oxidized to dark brown products. A brown or dark color is *not* the blue-green positive result.',{keepNext:true}));
c.push(...img(F+'fig4_5.png',624,282,'**Figure 5:** Chromic acid oxidation of 1°, 2°, and 3° alcohols, and the color of the test tube. [O] stands for the oxidizing agent, chromic acid (Cr(VI) in H_{2}SO_{4}).'));
c.push(h3('D. Iron(III) Chloride Test for Phenols'));
c.push(P('Iron(III) chloride (ferric chloride, FeCl_{3}) solution is pale **yellow**. Phenols bond to the Fe^{3+} ion to form a **complex ion** with a strong color, usually **violet or purple** (some phenols give blue, green, or red). This is not an oxidation; the phenol simply attaches to the iron ion. Alcohols do not form a colored complex, so the mixture stays yellow (Figure 6). Salicylic acid gives a strong violet color; you will use the same test in Experiment #11 to check the purity of aspirin.'));
c.push(eq('phenol (colorless) + Fe^{3+} (yellow) → iron–phenol complex (violet)'));
c.push(...img(F+'fig4_6.png',540,198,'**Figure 6:** Positive and negative results for the tests in Parts C and D.'));
c.push(h3('E. Identification of an Unknown'));
c.push(P('Your unknown is one of the five compounds tested in this experiment: ethanol, 2-propanol, t-butyl alcohol, cyclohexanol, or salicylic acid (a phenol). Compare its results in every test with the results of the known compounds. Use FeCl_{3} to decide whether it is a phenol, chromic acid to decide whether it is a 3° alcohol, and solubility and odor to choose between the rest.'));
// Hazards
c.push(h3('Hazards and Safety Instructions'));
c.push(P('Wear safety goggles at all times. Wear gloves when handling the chromate reagent, salicylic acid, and FeCl_{3}.',{after:100}));
c.push(bullet('**Chromate (Cr(VI)) Reagent, Corrosive and Toxic:** The reagent contains concentrated sulfuric acid (H_{2}SO_{4}), which causes severe burns, and chromium(VI), which is toxic, a known carcinogen, and a strong oxidizer. Add it drop by drop and keep the dropper over the test tube. If it touches your skin, rinse with water for 15 minutes and tell your instructor.'));
c.push(bullet('**Salicylic Acid, Eye Damage and Harmful:** Salicylic acid can cause serious eye damage, is harmful if swallowed, and is suspected of harming an unborn child. Avoid breathing its dust and use only a small spatula tip of the solid. If it gets in your eyes or on your skin, rinse with water for 15 minutes and tell your instructor.'));
c.push(bullet('**Flammable:** Ethanol, 2-propanol, t-butyl alcohol, and cyclohexanol are flammable. No burners or open flames are allowed in the lab during this experiment.'));
c.push(bullet('**Heat:** The chromic acid oxidation releases heat, and a test tube can become too hot to handle. Cool it in a beaker of ice-cold water.'));
c.push(bullet('**Iron(III) Chloride:** FeCl_{3} irritates skin and eyes and stains skin and clothing.'));
c.push(bullet('**Odors:** Never put your nose over a test tube. To check an odor, take a breath of fresh air first, then gently waft the vapor from the top of the tube toward your nose with your hand.'));
c.push(h3('Waste Instructions'));
c.push(bullet('**Non-halogenated organic waste container:** every test tube from Part C (chromate reagent with the alcohols, salicylic acid, and unknown), including any tube that did not change color, plus the first small water rinse of each tube; and the test tubes from Part B (alcohols, salicylic acid, and water) and Part D (FeCl_{3} with the alcohols and salicylic acid), or as your instructor directs. Chromium compounds, salicylic acid, and the alcohols must **never** go down the sink.'));
c.push(bullet('**Solid waste container (or as your instructor directs):** gloves, paper towels, and pH paper that have chromate reagent on them. Other used pH paper goes in the trash.'));
c.push(bullet('**Spills:** Report any spill of the chromate reagent to your instructor before cleaning it up.'));
// Procedure
c.push(h2('Procedure',{pageBreak:true,before:0}));
c.push(note('Instructor Notes:','t-Butyl alcohol melts at 25 °C and may be solid in a cool room; warm the bottle in a beaker of warm water (no flames). If the chromate reagent was not freshly made, its color may be different from orange; have students note the starting color and compare their samples with each other. Ethanol and 2-propanol give the same results in every test except odor; keep this in mind when assigning unknowns and do not include salicylic acid as an unknown unless you provide it as the same solution. Phenol is not used in this experiment: salicylic acid is the phenol. Parts C and D use the 0.15% aqueous salicylic acid solution prepared for Experiment #11; Part B uses the solid.'));
c.push(h3('A. Structures of Alcohols and Phenols'));
c.push(materials('Molecular model kit'));
c.push(step('A.1','Using the model kit, build models of ethanol, 2-propanol, and t-butyl alcohol (2-methyl-2-propanol). On your report sheet, draw the skeletal formula of each, and of salicylic acid (circle its phenol –OH).'));
c.push(step('A.2','Classify each alcohol as primary (1°), secondary (2°), or tertiary (3°). Use Figure 2 if you need help.'));
c.push(h3('B. Properties of Alcohols and Phenols'));
c.push(materials('6 test tubes, test tube rack, stirring rod, pH paper, distilled water, plastic pipet, ethanol, 2-propanol, t-butyl alcohol (2-methyl-2-propanol), cyclohexanol, salicylic acid (solid), spatula, and an unknown (record its letter)'));
c.push(step('B.1','**Odor:** Label six test tubes and place 5 drops of each alcohol and of your unknown in its own tube, and a small spatula tip (about the size of a grain of rice) of salicylic acid in the sixth tube. Take a breath of fresh air first, then gently waft the vapors from the top of each tube toward you. Describe each odor (and the appearance of the salicylic acid).'));
c.push(step('B.2','**Solubility in water:** Add 2 mL of water (measure with a plastic pipet, or about 2 finger-widths in the tube) to each tube. Shake gently by tapping the bottom of the tube. A clear solution with no separate layers means the sample is **soluble**; a cloudy mixture or two layers means it is **insoluble**. Record your observations.'));
c.push(step('B.3','**Acidity:** Dip a clean stirring rod into the mixture in each tube and touch a drop to a piece of pH paper. Compare the color with the chart on the container and record the pH. Rinse and dry the stirring rod between samples. Empty the tubes into the non-halogenated organic waste container.'));
c.push(h3('C. Oxidation of Alcohols and Phenols'));
c.push(materials('6 test tubes, test tube rack, beaker of ice-cold water, distilled water (for rinsing), plastic pipet, ethanol, 2-propanol, t-butyl alcohol (2-methyl-2-propanol), cyclohexanol, 0.15% salicylic acid solution, unknown, 2% chromate reagent (2% K_{2}Cr_{2}O_{7} in dilute H_{2}SO_{4})'));
c.push(caution('The chromate reagent contains concentrated H_{2}SO_{4} and chromium(VI). It is corrosive and toxic. Wear gloves.'));
c.push(step('C.1','Label six test tubes and place 8 drops of each alcohol, the salicylic acid solution, and your unknown in its own tube. Carefully add 2 drops of chromate reagent to each tube and mix by tapping the tube. Watch the color for 1–2 minutes. A change from orange to **blue-green** means the compound was oxidized (positive). If the color **stays orange**, no reaction occurred (negative). Record the color of each tube. If a tube becomes too hot to handle, place it in the ice-cold water. Empty all six tubes, and the first rinse of each, into the **non-halogenated organic waste container**.'));
c.push(step('C.2','Draw the skeletal formula of each compound.'));
c.push(step('C.3','Classify each alcohol as primary (1°), secondary (2°), or tertiary (3°), or identify it as a phenol.'));
c.push(step('C.4','Draw the skeletal formula of the oxidation product for each alcohol that turned blue-green (for a 1° alcohol, draw the carboxylic acid). If the color did not change, write “No Reaction” (NR).'));
c.push(h3('D. Iron(III) Chloride Test'));
c.push(materials('6 test tubes, test tube rack, stirring rod, distilled water (for rinsing), ethanol, 2-propanol, t-butyl alcohol (2-methyl-2-propanol), cyclohexanol, 0.15% salicylic acid solution, unknown, 1% FeCl_{3} solution'));
c.push(step('D.1','Label six test tubes and place 5 drops of each alcohol, the salicylic acid solution, and your unknown in its own tube. Add 5 drops of 1% FeCl_{3} solution to each tube and stir. Record the color. A **violet or purple** color is positive for a phenol; a **yellow** color (the color of FeCl_{3}) is negative. Empty the tubes into the non-halogenated organic waste container.'));
c.push(h3('E. Identification of the Unknown'));
c.push(step('E.1','Summarize the results for your unknown from B.1–B.3, C.1, and D.1, and state what each result tells you.'));
c.push(step('E.2','Identify your unknown as one of the five compounds tested, and draw its structure.'));
// Pre-lab
c.push(h2('Pre-Lab Questions',{pageBreak:true,before:0}));
const PL=[['1.','The chromate reagent contains two hazardous components. Name each one and the hazard it causes. What should you do if a drop gets on your skin?',862],
 ['2.','Where do the Part C test tubes go at the end of lab? Why do they go in that container, and why can they never be poured down the sink?',862],
 ['3.','Phenol itself is not used in this lab. Which compound represents the phenols, what is its main hazard, and why will its solution have a lower pH than a solution of a simple phenol?',862],
 ['4.','Predict the chromic acid test result (final color) and the type of product, if any, for: (a) 1-propanol (b) 2-butanol (c) 2-methyl-2-butanol. Explain your prediction for (c).',1050],
 ['5.','In B.2, a sample gives two separate layers with water. Is it soluble or insoluble? Which of the five compounds in this lab would you expect to do this, and why?',862],
 ['6.','Describe a positive and a negative result for the FeCl_{3} test. Which of the five compounds should give a positive result?',862],
 ['7.','An unknown dissolves in water, turns the chromate reagent blue-green, and stays yellow with FeCl_{3}. Which of the five compounds could it be? Which observation from this lab would help you decide between them?',0]];
PL.forEach(([a,b,sp])=>{c.push(step(a,b,{left:360,after:0})); if(sp)c.push(space(sp));});
// Report
c.push(h2('Report Sheet',{pageBreak:true,before:0,rule:true}));
c.push(...nameBlock());
c.push(h3('A. Structures of Alcohols and Phenols',{before:120}));
c.push(table([4680,4680],[['**A.1** Ethanol (skeletal formula)','**A.1** 2-Propanol (skeletal formula)'],['**A.2** Classification:','**A.2** Classification:'],
 ['**A.1** t-Butyl alcohol (2-methyl-2-propanol)','**A.1** Salicylic acid (circle the phenol –OH)'],['**A.2** Classification:',{t:'(phenols are not classified as 1°, 2°, or 3°)',shade:'F2F2F2'}]],{header:0,h:[1380,414,1380,414]}));
c.push(h3('B. Properties of Alcohols and Phenols'));
const names=['Ethanol','2-Propanol','t-Butyl alcohol','Cyclohexanol','Salicylic acid','Unknown ____'];
c.push(table([2160,2800,2400,2000],[['Compound','B.1 Odor','B.2 Soluble in water?','B.3 pH'],...names.map(n=>[n,'','',''])],{h:515,firstColBold:true}));
c.push(h3('C. Oxidation of Alcohols and Phenols',{pageBreak:true,before:0}));
c.push(table([1700,1800,2100,1460,2300],[['Compound','C.1 Color with chromate reagent','C.2 Skeletal formula','C.3 Type (1°, 2°, 3°, or phenol)','C.4 Oxidation product (or NR)'],...names.map(n=>[n,'','','',''])],{h:966,firstColBold:true}));
c.push(h3('D. Iron(III) Chloride Test'));
c.push(table([2160,3600,3600],[['Compound','D.1 Color with FeCl_{3}','Positive or negative?'],...names.map(n=>[n,'',''])],{h:442,firstColBold:true}));
c.push(h3('E. Identification of the Unknown',{pageBreak:true,before:0}));
c.push(P('**Unknown letter:** ________',{after:110}));
c.push(table([2600,3380,3380],[['E.1 Test','Result for the unknown','What this result tells you'],['B.1 Odor','',''],['B.2 Soluble in water?','',''],['B.3 pH','',''],['C.1 Chromate reagent','',''],['D.1 FeCl_{3}','','']],{h:782,firstColBold:true}));
c.push(space(110));
c.push(table([3200,6160],[['E.2 Name of unknown','E.2 Structure'],['','']],{h:1472}));
// Questions
c.push(h2('Questions and Problems',{pageBreak:true,before:0}));
c.push(step('Q.1','Draw the skeletal structure of each alcohol and classify it as 1°, 2°, or 3°.',{left:0,after:88}));
c.push(table([4680,4680],[['1-Pentanol','3-Pentanol'],['Cycloheptanol','1-Methylcyclopentanol']],{header:0,h:1320}));
c.push(step('Q.2','Use your textbook or a reliable online source to draw the structures of thymol, menthol, and resorcinol (rings may be drawn as skeletal rings), and give one use of each. Circle the –OH group(s) in each structure and state whether each compound is a phenol or an alcohol. Classify any alcohol as 1°, 2°, or 3°. If the compounds are available in lab, carefully waft and describe their odors.',{left:0,after:0}));
c.push(space(1760));
c.push(step('Q.3','Write the product of each reaction (if no reaction, write NR). For the 1° alcohol, draw both the aldehyde and the carboxylic acid that form under the conditions of the chromic acid test. Use your Part C results to guide your thinking.',{left:0,after:0,keepNext:true}));
c.push(...img(F+'fig4_7.png',420,240));
c.push(step('Q.4','Explain how your Part C and Part D results together distinguish among a 2° alcohol (cyclohexanol), a 3° alcohol (t-butyl alcohol), and a phenol (salicylic acid).',{left:0,after:0}));

build(c,OUT).then(()=>console.log('wrote',OUT));
