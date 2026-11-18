const L=require('../lablib.js'); const {P,title,h2,h3,h4,bullet,step,sub,materials,note,caution,img,table,space,nameBlock,build,W,D,checkRow}=L;
const F=process.argv[2]+'/'; const OUT=process.argv[3];
const {AlignmentType}=D;
const c=[];
const sec=(t,n)=>[{t:'*'+t+'*',span:n,shade:'F2F2F2',bold:true,align:AlignmentType.CENTER}];
c.push(title('Draft Experiment: Digestion of Foods'));
c.push(h3('Goals',{before:0}));
['Follow a meal through the three places where digestion happens: the mouth, the stomach, and the small intestine.',
 'Observe the digestion of protein by pepsin (stomach) and by pancreatic enzymes (small intestine), and explain why each enzyme works only where it does.',
 'Observe the digestion of fat by pancreatic lipase, and show that bile salts emulsify fat but do not hydrolyze it.',
 'Write equations for the hydrolysis of a peptide bond and of a triacylglycerol, and explain why boiling an enzyme stops digestion.'].forEach(s=>c.push(bullet(s)));

// ---------------- Introduction
c.push(h2('Introduction'));
c.push(h3('A. Digestion: Stage I of Catabolism',{before:120}));
c.push(P('The food you eat is made mostly of large molecules: starch (a polysaccharide), proteins, and fats (triacylglycerols). These molecules are too large to pass through the wall of the small intestine into the blood. **Digestion** is Stage I of catabolism: enzymes **hydrolyze** the large molecules into small ones that can be absorbed. In every case, water is added across a bond (a glycosidic bond, a peptide bond, or an ester bond) and the bond breaks. The enzymes that do this are called **hydrolases**.'));
c.push(P('Each part of the digestive tract has its own pH and its own enzymes (Table 1). Recall from Experiment #13 that every enzyme has an **optimum pH** and an **optimum temperature** (about 37 °C for human enzymes). An enzyme works only where the pH is close to its optimum. You already studied the first stage of starch digestion (amylase) in Experiment #13, and acid hydrolysis of starch and sucrose in Experiment #8. In this experiment, you will follow the other two main foods, **protein** and **fat**, through the stomach and the small intestine.',{keepNext:true}));
c.push(P('**Table 1: Where Foods Are Digested**',{align:AlignmentType.CENTER,after:80,keepNext:true}));
c.push(table([1900,1300,3060,3100],[['Location','pH','Enzymes and helpers','What happens'],
 ['Mouth','About 7','Salivary amylase','Starch begins to be hydrolyzed to dextrins and maltose (Experiment #13).'],
 ['Stomach','About 2','HCl, pepsin','HCl denatures proteins and turns on pepsin. Pepsin hydrolyzes proteins into smaller polypeptides. Amylase stops working.'],
 ['Small intestine','About 8','Pancreatic enzymes (trypsin, chymotrypsin, lipase, amylase); bile salts from the gallbladder; enzymes on the intestinal wall','Polypeptides are hydrolyzed to amino acids, fats to monoacylglycerols and fatty acids, and the rest of the starch to glucose. Bile salts emulsify fat.']],{firstColBold:true}));
c.push(h3('B. Digestion of Proteins'));
c.push(P('Protein digestion begins in the stomach. The stomach makes hydrochloric acid (HCl), which lowers the pH to about 2. The acid **denatures** food proteins (Experiment #12): the proteins unfold, so their peptide bonds are easier for enzymes to reach. The acid also changes the inactive form of the enzyme, pepsinogen, into active **pepsin**. Pepsin has an optimum pH of about 2, which is very unusual for an enzyme. It hydrolyzes some of the peptide bonds inside a protein, mostly next to amino acids with aromatic R groups (such as phenylalanine and tyrosine), so the protein is cut into shorter **polypeptides**, not single amino acids.'));
c.push(P('When the stomach contents move into the small intestine, sodium bicarbonate from the pancreas raises the pH to about 8. Pepsin is denatured at this pH and stops working. The pancreatic enzymes **trypsin** and **chymotrypsin**, which work best near pH 8, take over and cut the polypeptides into still smaller peptides. Enzymes on the intestinal wall finish the job, and the free **amino acids** are absorbed into the blood. Each step is the hydrolysis of a peptide (amide) bond (Figure 1).',{keepNext:true}));
c.push(...img(F+'fig11_2.png',624,103,'**Figure 1:** Hydrolysis of a peptide bond: the dipeptide glycylalanine (Gly–Ala) gives glycine and alanine. In the body, digestive enzymes catalyze this reaction.'));
c.push(h4('Following Protein Digestion in Part A'));
c.push(P('In Part A, the protein is **cooked egg white**. When dilute egg white is heated, the denatured proteins form tiny solid clumps that make the liquid **milky white** (cloudy). As an enzyme hydrolyzes the solid protein into smaller, soluble polypeptides, the clumps dissolve and the liquid **clears**. You will judge how far digestion has gone by holding each tube in front of a card printed with black lines (Table 2). The faster a tube clears, the faster the protein is being digested.',{keepNext:true}));
c.push(P('**Table 2: Reading the Line Card as a Digestion Level**',{align:AlignmentType.CENTER,after:80,keepNext:true}));
c.push(table([3400,3200,2760],[['Looking through the tube at the line card','Protein remaining as solid','Digestion level'],
 ['Milky; lines cannot be seen','All','**0** (none)'],['Cloudy; lines are faint shadows','Most','**1** (low)'],['Hazy; lines can be seen but are blurry','Some','**2** (moderate)'],['Clear or nearly clear; lines are sharp','Little or none','**3** (complete)']],{firstColBold:true}));
c.push(h3('C. Digestion of Fats'));
c.push(P('Fats and oils are **triacylglycerols**: esters of glycerol and three fatty acids (Experiment #9, Figure 2). Almost no fat is digested in the mouth or the stomach. In the small intestine, **pancreatic lipase** hydrolyzes the ester bonds. Lipase usually removes the fatty acids from carbons 1 and 3 of glycerol, so the main products are a **monoacylglycerol** and **two free fatty acids**. These are absorbed and are put back together into triacylglycerols inside the cells of the intestinal wall.',{keepNext:true}));
c.push(...img(F+'fig9_1.png',624,195,'**Figure 2:** A triacylglycerol forms from glycerol and three fatty acids (condensation). Digestion by lipase is the reverse reaction: water is added and the ester bonds are hydrolyzed.'));
c.push(P('Fat does not dissolve in water, so in the intestine it forms large droplets, and lipase, which is dissolved in water, can only work at the surface of each droplet. **Bile salts**, made from cholesterol in the liver and stored in the gallbladder, help. A bile salt has a nonpolar part that attracts fat and polar or ionic groups that attract water, so it acts like a soap: it breaks large fat droplets into many tiny droplets that stay spread through the water. This is called **emulsification**. Emulsification greatly increases the surface area of the fat, so lipase can reach many more ester bonds at once. Bile salts are **not** enzymes and do **not** hydrolyze any bonds; they only make the fat easier for lipase to reach.'));
c.push(h4('Following Fat Digestion in Part B'));
c.push(P('In Part B, the fat is the butterfat in whole milk. The milk is made slightly basic with sodium carbonate (Na_{2}CO_{3}), and the indicator **phenolphthalein** is added. Phenolphthalein is **pink** in basic solution and **colorless** in neutral or acidic solution. As lipase hydrolyzes the fat, **fatty acids** (carboxylic acids) are released. They neutralize the base, the pH drops, and the pink color **fades** until the milk is white again. The faster the pink fades, the faster the fat is being digested. The enzyme source is **pancreatin**, a commercial mixture of the enzymes in pancreatic juice (lipase, trypsin, chymotrypsin, and amylase); you will also use it in Part A to digest protein.'));
c.push(h3('D. Enzymes Stop Working When They Are Denatured'));
c.push(P('Enzymes are proteins, so anything that denatures a protein also destroys an enzyme’s activity (Experiments #12 and #13). Boiling breaks the hydrogen bonds and other interactions that hold the enzyme’s shape. The active site loses its shape and can no longer bind the substrate, so the reaction stops. A pH far from the optimum does the same thing by changing the charges on the R groups. In this experiment, a **boiled enzyme** is used as a control in Parts A and B. A tube with **no enzyme** is also included, to show that the acid, base, or bile salts alone do not digest the food.'));

// ---------------- Hazards
c.push(h3('Hazards and Safety Instructions'));
c.push(P('Wear safety goggles and gloves at all times. If any chemical gets on your skin or in your eyes, rinse with water for 15 minutes and tell your instructor.',{after:100}));
c.push(bullet('**Corrosive and Irritating (Acid and Bases):** 0.2 M HCl, 0.05 M Na_{2}CO_{3}, and the pH 8 buffer can irritate skin and eyes. Test the pH of a tube by touching a drop to pH paper with a stirring rod; never dip the paper into the tube.'));
c.push(bullet('**Enzyme Solutions:** Pepsin and pancreatin are commercial enzyme preparations. Breathing enzyme dust can cause allergies and asthma, so the solutions are prepared for you; never open or weigh the enzyme powders. Do not let the solutions touch your skin, and never taste anything in the lab.'));
c.push(bullet('**Phenolphthalein:** Phenolphthalein indicator is a suspected carcinogen and is dissolved in ethanol (flammable). Use it only from the dropper bottle, wear gloves, and keep it away from the hot plate.'));
c.push(bullet('**Thermal Hazards:** The boiling water bath and hot plate cause burns and stay hot after they are turned off. Move test tubes into and out of the boiling water bath with a test tube holder, and point the open end away from everyone.'));
c.push(bullet('**Stoppered Test Tubes:** When you shake a stoppered test tube (B.1), hold the stopper in place with your thumb and point the tube away from everyone.'));
c.push(bullet('**Food Items and Allergies:** The egg white, milk, and vegetable oil are lab chemicals. Tell your instructor before lab if you have an egg or milk allergy. Pancreatin comes from pigs and the bile salts come from cattle; if you prefer not to handle animal-derived materials, tell your instructor, who can assign you the dry-lab option.'));

// ---------------- Waste
c.push(h3('Waste Instructions'));
c.push(bullet('**Aqueous waste container:** the five egg-white tubes from Part A (they contain HCl or buffer and enzymes), and any leftover enzyme solutions. Rinse each tube with a little water into the same container.'));
c.push(bullet('**Non-halogenated organic waste container:** the four milk tubes from Part B (they contain phenolphthalein, an organic indicator) and the two oil tubes from B.1.'));
c.push(bullet('**Trash:** used pH paper, plastic pipettes, and gloves.'));
c.push(bullet('**Do not pour any of the mixtures down the sink**, and never return unused reagent to its stock bottle.'));

// ---------------- Procedure
c.push(h2('Procedure',{pageBreak:true,before:0}));
c.push(note('Instructor Notes:','Have students start the boiling water bath as soon as they arrive. The 37 °C bath can be a shared bath (an incubator, a water bath, or a large beaker on a hot plate kept at 35–40 °C) that holds a whole test tube rack; check it with a thermometer and add warm water as needed. Use large (18 × 150 mm) test tubes in Parts A and B. The egg-white suspension and the enzyme solutions are made fresh on the day of lab (see the prep notes); stir the suspension before dispensing so every tube gets the same amount of solid. Let the pancreatin solution settle (or filter it) and dispense only the clear liquid, so that it does not add cloudiness in Part A. Run Part A once before lab: tube 1 should clear in about 10–20 minutes. If it does not clear in 30 minutes, dilute the suspension with water. **Dry-lab option:** if your section will not do the bench work, students skip Parts A and B and copy the Sample Class Data at the end of this Procedure into their report sheet, writing “Sample data” at the top of each table. They answer the same Pre-Lab Questions (except question 5), Part C, and Questions and Problems.'));
c.push(h4('Getting Ready (All Parts)'));
c.push(bullet('**Water baths:** **Boiling water bath:** a 400-mL beaker half full of water on a hot plate. **Body-temperature bath (37 °C):** set up by your instructor.'));
c.push(bullet('**Plan your time:** Part A runs for 30 minutes. Do the emulsification test (B.1) while Part A runs, then set up the rest of Part B when Part A is finished. Or, if your instructor agrees, one partner runs Part A and the other runs Part B at the same time.'));
c.push(bullet('**Pipettes:** Use a separate clean pipette for each solution so that you do not carry enzyme from one tube to another. Label every tube.'));
c.push(h3('A. Digestion of Protein: Stomach and Small Intestine'));
c.push(materials('7 large test tubes, test tube rack, test tube holder, 10-mL graduated cylinder, plastic pipettes, stirring rod, boiling water bath, 37 °C water bath, thermometer, line card, pH paper, timer; cooked egg-white suspension, 0.2 M HCl, pH 8 buffer, 1% pepsin solution, 2% pancreatin solution, distilled water'));
c.push(step('A.1','**Boiled enzyme:** Place 3 mL of 1% pepsin solution in a test tube labeled “boiled pepsin.” Using a test tube holder, heat it in the boiling water bath for 5 minutes. Then cool it under cold running tap water (outside of the tube only) for 1 minute.'));
c.push(step('A.2','Stir the egg-white suspension, then place 4 mL in each of five test tubes labeled 1–5. Add 2 mL of 0.2 M HCl or pH 8 buffer to each tube as shown in Table 3. Mix. Using a stirring rod, touch a drop from each tube to pH paper and record the pH. Record how each tube looks in front of the line card (it should be digestion level 0). Place all five tubes in the 37 °C bath for 5 minutes.'));
c.push(P('**Table 3: Tubes for Part A**',{align:AlignmentType.CENTER,after:80,keepNext:true}));
c.push(table([900,2400,2600,3460],[['Tube','Add 2 mL of (A.2)','Then add 2 mL of (A.3)','Models'],
 ['1','0.2 M HCl','1% pepsin','The stomach (pH about 2)'],
 ['2','pH 8 buffer','1% pepsin','Pepsin after it moves into the small intestine'],
 ['3','0.2 M HCl','Boiled pepsin (A.1)','Control: denatured enzyme'],
 ['4','0.2 M HCl','Distilled water','Control: stomach acid with no enzyme'],
 ['5','pH 8 buffer','2% pancreatin (clear liquid)','The small intestine (pH about 8)']],{firstColBold:true}));
c.push(step('A.3','Add 2 mL of the solution shown in Table 3 to each tube, one right after the other. Mix each tube by swirling and return it to the 37 °C bath right away. Start your timer when you add the enzyme to tube 1.',{before:120}));
c.push(step('A.4','Every 5 minutes for 30 minutes, take each tube out briefly, swirl it, hold it in front of the line card, and record its digestion level (Table 2). Return it to the 37 °C bath right away. Record the first reading (5, 10, 15 … minutes) at which each tube is at level 3, or “more than 30 min.”'));
c.push(step('A.5','Decide in which tubes the protein was digested, and which enzyme digested it.'));
c.push(h3('B. Digestion of Fat: The Small Intestine'));
c.push(materials('6 large test tubes, 2 small test tubes with stoppers, test tube rack, test tube holder, 10-mL graduated cylinder, plastic pipettes, stirring rod, boiling water bath, 37 °C water bath, pH paper, timer; whole milk, 0.05 M Na_{2}CO_{3}, phenolphthalein indicator, 5% bile salts solution, vegetable oil, 2% pancreatin solution, distilled water'));
c.push(h4('Bile Salts and Emulsification'));
c.push(step('B.1','Place 3 mL of distilled water and 5 drops of vegetable oil in each of two small test tubes. Add 1 mL of 5% bile salts to the first tube and 1 mL of distilled water to the second. Stopper both tubes, hold the stoppers in place, and shake both hard for 15 seconds. Set them in the rack and describe each tube right away and again after 2 minutes. (Does the oil form a separate layer, or do tiny droplets stay spread through the water?)'));
c.push(h4('Lipase and Bile Salts'));
c.push(step('B.2','**Boiled enzyme:** Place 3 mL of 2% pancreatin solution in a test tube labeled “boiled pancreatin.” Heat it in the boiling water bath for 5 minutes, then cool it under cold running tap water for 1 minute.'));
c.push(step('B.3','Label four large test tubes 1–4. To each tube, add 3 mL of whole milk, 4 mL of 0.05 M Na_{2}CO_{3}, and 3 drops of phenolphthalein. Mix; each tube should be the same pink color. Add 1 mL of 5% bile salts or 1 mL of distilled water as shown in Table 4, and mix. Place all four tubes in the 37 °C bath for 5 minutes.'));
c.push(P('**Table 4: Tubes for Part B**',{align:AlignmentType.CENTER,after:80,keepNext:true}));
c.push(table([900,2400,2600,3460],[['Tube','Add 1 mL of (B.3)','Then add 1 mL of (B.4)','Tests'],
 ['1','5% bile salts','2% pancreatin','Lipase with bile salts (the small intestine)'],
 ['2','Distilled water','2% pancreatin','Lipase without bile salts'],
 ['3','5% bile salts','Boiled pancreatin (B.2)','Control: denatured enzyme'],
 ['4','5% bile salts','Distilled water','Control: bile salts with no enzyme']],{firstColBold:true}));
c.push(step('B.4','Add 1 mL of the solution shown in Table 4 to each tube, one right after the other. Mix each tube by swirling and return it to the 37 °C bath right away. Start your timer when you add the enzyme to tube 1.',{before:120}));
c.push(step('B.5','Check the tubes every 2 minutes for 30 minutes, comparing each one with tube 4. Record the time at which the pink color has completely disappeared (the milk is white), or “more than 30 min.”'));
c.push(step('B.6','After 30 minutes, use a stirring rod to touch a drop from each tube to pH paper. Record the pH. Decide in which tubes the fat was hydrolyzed.'));
c.push(h3('C. Following a Meal'));
c.push(step('C.1','A student eats a cheeseburger: the bun is mostly starch, and the beef and cheese contain protein and fat. Using Table 1, your results from Parts A and B, and your results from Experiment #13, complete the table for Part C on the report sheet: where the digestion of each food begins, the enzyme(s), the pH there, and the small molecules that are finally absorbed.'));

// ---------------- Dry-lab data
c.push(h3('Dry-Lab Option: Sample Class Data'));
c.push(note('Instructor Note:','Use this section only if your section is doing the dry-lab version of this experiment. The results below are **sample (mock) data**, written to match what a section should see at the bench; they are not real measurements. Students copy them into the report sheet tables (marking each table “Sample data”) and answer all of the same questions.'));
c.push(P('**SAMPLE CLASS DATA — Part A (one group). Not real measurements.**',{align:AlignmentType.CENTER,after:80,keepNext:true}));
const AW=[700,2060,700,700,700,700,700,700,700,700,1060];
c.push(table(AW,[['Tube','Contents','pH (A.2)','0','5','10','15','20','25','30','Time to level 3 (min)'],
 ['1','HCl + pepsin','2','0','1','2','3','3','3','3','15'],
 ['2','pH 8 buffer + pepsin','8','0','0','0','0','0','0','0','> 30'],
 ['3','HCl + boiled pepsin','2','0','0','0','0','0','0','0','> 30'],
 ['4','HCl + water','2','0','0','0','0','0','0','0','> 30'],
 ['5','pH 8 buffer + pancreatin','8','0','0','1','1','2','2','3','30']],{firstColBold:true}));
c.push(P('Digestion level (0–3) read at 0, 5, 10, 15, 20, 25, and 30 minutes. Tube 1 was clear with sharp lines at the 15-minute reading; tube 5 reached level 3 only at the 30-minute reading. Tubes 2, 3, and 4 stayed milky white for the whole 30 minutes.',{before:80,after:200}));
c.push(P('**SAMPLE CLASS DATA — Part B (one group). Not real measurements.**',{align:AlignmentType.CENTER,after:80,keepNext:true}));
c.push(table([1100,2900,2700,1300,1360],[['Tube','Contents','Color during the 30 minutes','Pink gone at (min)','pH at 30 min (B.6)'],
 ['1','Bile salts + pancreatin','Pink → pale pink at 4 min → white at 6 min','6','7'],
 ['2','Water + pancreatin','Pink → pale pink at 8 min → white at 14 min','14','7'],
 ['3','Bile salts + boiled pancreatin','Stayed pink','> 30','10'],
 ['4','Bile salts + water','Stayed pink','> 30','10']],{firstColBold:true}));
c.push(P('**B.1 (sample):** Oil + water: the oil formed large drops that floated to the top as a separate layer within about 30 seconds. Oil + bile salts: the liquid turned milky white with tiny droplets and was still cloudy after 2 minutes, with only a thin oily film on top.',{before:80,after:200}));
c.push(P('**SAMPLE CLASS DATA — Times for six groups (minutes). Not real measurements.**',{align:AlignmentType.CENTER,after:80,keepNext:true}));
c.push(table([3060,900,900,900,900,900,900,900],[['Tube','Group 1','Group 2','Group 3','Group 4','Group 5','Group 6','Average'],
 ['A, tube 1 (pepsin, pH 2): time to level 3','15','10','15','15','20','15','15'],
 ['A, tube 5 (pancreatin, pH 8): time to level 3','30','25','> 30','25','30','> 30','—'],
 ['B, tube 1 (with bile salts): pink gone','6','6','8','6','8','6','6.7'],
 ['B, tube 2 (without bile salts): pink gone','14','12','18','14','16','16','15']],{firstColBold:true}));

// ---------------- Pre-Lab
c.push(h2('Pre-Lab Questions',{pageBreak:true,before:0}));
const PL=[['1.','In Part A, which tube models the stomach and which models the small intestine? Predict which of the five tubes will clear, and explain using the optimum pH of each enzyme.',1100],
 ['2.','Tubes 3 and 4 in Part A are controls. What does each one test?',900],
 ['3.','In Part B, why does the pink color of phenolphthalein fade when fat is digested? Which tubes do you expect to stay pink?',1000],
 ['4.','Do bile salts hydrolyze fat? What do they do, and what do you expect to see in the bile salts tube in B.1?',1000],
 ['5.','Where does each of the following go at the end of lab? (a) the egg-white tubes from Part A (b) the milk tubes from Part B (c) the oil tubes from B.1',900],
 ['6.','Name two hazards in this experiment and the precaution for each. Why are you not allowed to weigh out the enzyme powders?',900],
 ['7.','Why are all of the tubes in Parts A and B kept in a 37 °C bath?',0]];
PL.forEach(([a,b,sp])=>{c.push(step(a,b,{left:360,after:0})); if(sp)c.push(space(sp));});

// ---------------- Report Sheet
c.push(h2('Report Sheet',{pageBreak:true,before:0,rule:true}));
c.push(...nameBlock());
c.push(P('*Dry-lab option: copy the Sample Class Data into these tables and write “Sample data” above each table.*',{after:120}));
c.push(h3('A. Digestion of Protein',{before:120}));
c.push(table(AW,[['Tube','Contents','A.2 pH',{t:'A.4 Digestion level (0–3) at each time (min)',span:7},'A.4 Time to level 3 (min)'],
 ['','','','0','5','10','15','20','25','30',''],
 ['1','HCl + pepsin','','','','','','','','',''],
 ['2','pH 8 buffer + pepsin','','','','','','','','',''],
 ['3','HCl + boiled pepsin','','','','','','','','',''],
 ['4','HCl + water','','','','','','','','',''],
 ['5','pH 8 buffer + pancreatin','','','','','','','','','']],{header:2,h:640,firstColBold:true}));
c.push(table([9360],[['**A.5** In which tubes was the protein digested? Which enzyme digested it in each?']],{header:0,h:1100}));
c.push(h3('B. Digestion of Fat',{before:240}));
c.push(table([2400,3480,3480],[['B.1','Right after shaking','After 2 minutes'],['Oil + water','',''],['Oil + bile salts','','']],{h:800,firstColBold:true}));
c.push(P('',{after:120}));
c.push(table([900,2700,1900,1500,1100,1260],[['Tube','Contents','B.3 Color at start','B.5 Pink gone at (min)','B.6 pH','Fat hydrolyzed? (yes/no)'],
 ['1','Bile salts + pancreatin','','','',''],['2','Water + pancreatin','','','',''],['3','Bile salts + boiled pancreatin','','','',''],['4','Bile salts + water','','','','']],{h:640,firstColBold:true}));
c.push(h3('C. Following a Meal',{before:240}));
c.push(table([1700,1900,2000,1260,2500],[['C.1 Food (source)','Where digestion begins','Enzyme(s)','pH there','Small molecules absorbed'],
 ['Starch (bun)','','','',''],['Protein (beef, cheese)','','','',''],['Fat (beef, cheese)','','','','']],{h:1100,firstColBold:true}));

// ---------------- Questions
c.push(h2('Questions and Problems',{pageBreak:true,before:0}));
const Q=[['Q.1','In Part A, which tube cleared fastest? Which enzyme digests protein in the stomach, and which enzymes digest it in the small intestine? Use your results to explain why each enzyme works only in its own part of the digestive tract.',1500],
 ['Q.2','Compare tubes 1 and 2 in Part A. What happens to pepsin when the stomach contents move into the small intestine, where the pH is about 8? Explain in terms of the enzyme’s structure.',1300],
 ['Q.3','Tube 4 in Part A contained stomach acid but no enzyme. Did the acid alone digest the protein? What two jobs does HCl do in the stomach, and which job does pepsin do?',1300]];
Q.forEach(([a,b,sp])=>{c.push(step(a,b,{left:0,after:0})); c.push(space(sp));});
c.push(step('Q.4','a. Draw the hydrolysis of the dipeptide alanylglycine (Ala–Gly) into its two amino acids. Circle the bond that is broken.',{left:0,after:0})); c.push(space(1500));
c.push(P('b. Pepsin cuts a protein into polypeptides, not single amino acids. Which enzymes finish the job, and where?',{indent:{left:540},after:900}));
c.push(step('Q.5','a. Draw the complete hydrolysis of glyceryl tripalmitate (tripalmitin, Figure 2) into glycerol and three palmitic acid molecules.',{left:0,after:0})); c.push(space(1800));
c.push(P('b. Pancreatic lipase usually stops after removing two fatty acids. Name the two kinds of products it forms.',{indent:{left:540},after:700}));
c.push(P('c. Use your answer to (a) to explain why the pink color faded in tubes 1 and 2 of Part B.',{indent:{left:540},after:1000}));
const Q2=[['Q.6','Compare tubes 1, 2, and 4 in Part B and the two tubes in B.1. (a) Did bile salts alone hydrolyze the fat? How do you know? (b) Why did the pink color fade faster with bile salts? Use the words *emulsify* and *surface area*.',1700],
 ['Q.7','The boiled enzymes in tube 3 of Part A and tube 3 of Part B did not digest anything. Explain why boiling stops digestion. Which level(s) of protein structure does boiling destroy, and which level stays the same?',1500],
 ['Q.8','(a) A patient’s gallbladder has been removed, so bile salts no longer enter the small intestine in large amounts after a fatty meal. Which food is digested more slowly, and what might the patient notice? (b) Another patient takes a medication that raises the pH of the stomach to about 5. How would this affect the digestion of protein in the stomach? Explain using your Part A results.',0]];
Q2.forEach(([a,b,sp])=>{c.push(step(a,b,{left:0,after:0})); if(sp)c.push(space(sp));});
build(c,OUT).then(()=>console.log('wrote',OUT));
