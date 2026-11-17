const L=require('../lablib.js'); const {P,title,h2,h3,h4,bullet,step,sub,materials,note,caution,img,table,space,nameBlock,build,W,D}=L;
const F=process.argv[2]+'/'; const OUT=process.argv[3]; const {AlignmentType}=D;
const c=[];
c.push(title('Experiment #6: Carboxylic Acids and Esters'));
c.push(h3('Goals',{before:0}));
['Write the structural formulas of carboxylic acids and esters.','Determine the solubility and acidity of carboxylic acids and their salts.','Write equations for neutralization and esterification of acids.','Prepare esters and identify their characteristic odors.','Hydrolyze an ester with a base (saponification) and recover the carboxylic acid.'].forEach(s=>c.push(bullet(s)));
c.push(h2('Introduction'));
// A
c.push(h3('A. Carboxylic Acids and Their Salts',{before:120}));
c.push(P('The acetic acid in vinegar gives an oil-and-vinegar salad dressing its sour taste, and citric acid gives lemons theirs. Face creams often include alpha hydroxy acids such as glycolic acid. Every one of these is a **carboxylic acid**: it contains a **carboxyl group** (–COOH), which is a carbonyl group (C=O, Experiment #5) bonded to a hydroxyl group (–OH, Experiment #4) on the same carbon. Malonic acid is a **dicarboxylic acid**, with two carboxyl groups. Benzoic acid has a carboxyl group attached to a benzene ring (Figure 1).',{keepNext:true}));
c.push(...img(F+'fig6_1.png',624,156,'**Figure 1:** The carboxyl group and some carboxylic acids.'));
c.push(h4('Ionization of Carboxylic Acids in Water'));
c.push(P('A carboxylic acid can donate the H of its –COOH group to water, forming a **carboxylate ion** (–COO^{−}) and a hydronium ion (H_{3}O^{+}). Only a small fraction of the molecules ionize, so carboxylic acids are **weak acids** (Figure 2). A solution of a carboxylic acid is acidic, with a pH below 7, usually about 2–4. To name the ion, change the *-ic acid* ending of the acid to *-ate*: acetic acid forms the acetate ion, and benzoic acid forms the benzoate ion.',{keepNext:true}));
c.push(...img(F+'fig6_2.png',560,152,'**Figure 2:** Acetic acid is a weak acid; it ionizes only slightly in water.'));
c.push(P('**Solubility:** The carboxyl group is polar and forms hydrogen bonds with water, so carboxylic acids with one to four carbons (such as acetic acid) are soluble in water. As the nonpolar carbon part of the molecule gets larger, solubility drops. Benzoic acid (7 carbons, with a large nonpolar benzene ring) is only slightly soluble in cold water and looks like a white solid sitting in the water. It is more soluble in hot water, and it comes back out as crystals when the water cools. Acids with two or more carboxyl groups are more soluble in water than acids with one.'));
c.push(h4('Neutralization of Carboxylic Acids'));
c.push(P('Recall from CHEM 3A that an acid reacts with a base to form a salt and water (neutralization). A carboxylic acid reacts with a strong base such as sodium hydroxide (NaOH) to form a **carboxylate salt** and water. The salt is ionic, so it is much more soluble in water than the acid. Even carboxylic acids with five or more carbons, which do not dissolve in water, dissolve in NaOH solution as their salts. For this reason, many acids in foods and medicines are used as their soluble sodium or potassium salts (for example, the preservative sodium benzoate).'));
c.push(P('The reaction can be reversed. Adding a strong acid such as HCl to a carboxylate salt puts the H back on, and the carboxylic acid forms again. If that acid is insoluble in water (like benzoic acid), a **white solid appears** (Figure 3). If it is soluble (like acetic acid), the solution stays clear, and you may only notice the vinegar odor return.',{keepNext:true}));
c.push(...img(F+'fig6_3.png',520,280,'**Figure 3:** Benzoic acid dissolves in NaOH as sodium benzoate and comes back out as a solid when HCl is added.'));
c.push(h4('Tests Used in This Lab'));
c.push(P('**Table 1: Tests and What the Results Mean**',{align:AlignmentType.CENTER,after:80,keepNext:true}));
c.push(table([2300,3560,3500],[['Test','How to do it','What the result means'],
 ['pH paper','Touch a wet stirring rod to the paper; match the color to the chart on the container.','pH below 7: acidic. pH 7: neutral. pH above 7: basic.'],
 ['Red litmus paper','Touch a drop of solution to the paper with a stirring rod.','Turns **blue**: the solution is basic (enough NaOH has been added). Stays red: not basic.'],
 ['Blue litmus paper','Touch a drop of solution to the paper with a stirring rod.','Turns **red**: the solution is acidic (enough HCl has been added). Stays blue: not acidic.'],
 ['Solubility','Mix, then look closely at the tube.','Clear, one layer: dissolved. Cloudy, solid, or a separate oily layer: did not dissolve.'],
 ['Odor','Hold the tube away from your face and waft the vapor toward your nose with your hand.','Carboxylic acids smell sour or sharp; many esters smell fruity or flowery.']],{firstColBold:true}));
// B
c.push(h3('B. Esters'));
c.push(P('Carboxylic acids often have sour or unpleasant odors, but many **esters** have pleasant, fruity odors and flavors. In an ester, the H of the carboxyl group is replaced by a carbon group from an alcohol: R–COO–R′. Esters occur naturally in fruits and flowers, and they are used in perfumes and artificial flavors (Figure 4). Octyl acetate gives oranges their odor and flavor, pentyl acetate smells like bananas, and isobutyl formate gives raspberries their flavor.',{keepNext:true}));
c.push(...img(F+'fig6_4.png',624,134,'**Figure 4:** Some esters and the fruits whose odors they produce.'));
c.push(P('**Naming esters:** Name the alcohol part first as an alkyl group (methyl, propyl, octyl), then name the acid part with *-ic acid* changed to *-ate*. For example, acetic acid and pentyl alcohol (1-pentanol) form pentyl acetate.'));
c.push(P('Salicylic acid, from willow bark, has both a carboxyl group and a phenol –OH. Its methyl ester, **methyl salicylate**, is oil of wintergreen, used in candies and in ointments for sore muscles. When the phenol –OH of salicylic acid reacts with acetic anhydride, the product is acetylsalicylic acid, or aspirin, which you will make in Experiment #11 (Figure 5).',{keepNext:true}));
c.push(...img(F+'fig6_5.png',546,175,'**Figure 5:** Salicylic acid and two of its esters.'));
c.push(h4('Esterification and Hydrolysis'));
c.push(P('In **esterification**, a carboxylic acid reacts with an alcohol to form an ester and water. The –OH comes off the acid and the H comes off the alcohol, and together they leave as water (Figure 6). The reaction is slow, so it is heated with an acid catalyst; in this lab the catalyst is phosphoric acid (H_{3}PO_{4}). Esterification is reversible. The reverse reaction, **hydrolysis**, uses water and an acid catalyst to split an ester back into its carboxylic acid and alcohol. Using an excess of the alcohol or the acid pushes the reaction toward the ester; adding a lot of water pushes it toward hydrolysis. In Part B, you use 3 mL of alcohol and only 1 mL of acid, so for most of the mixtures the alcohol is in excess.',{keepNext:true}));
c.push(...img(F+'fig6_6.png',624,159,'**Figure 6:** Esterification of acetic acid with ethanol, and the reverse reaction, hydrolysis.'));
// C
c.push(h3('C. Hydrolysis of Esters (Saponification)'));
c.push(P('When an ester is hydrolyzed with a strong base such as NaOH, the reaction is called **saponification** (soap making). The bond between the carbonyl carbon and the –O– of the ester breaks. The products are the **carboxylate salt** (not the free acid, because the base neutralizes it as it forms) and the alcohol (Figure 7). Unlike acid hydrolysis, saponification goes to completion. Many esters do not dissolve in water, but the carboxylate salt and a short-chain alcohol do.',{keepNext:true}));
c.push(...img(F+'fig6_7.png',624,128,'**Figure 7:** Saponification of ethyl acetate. The red dashed line marks the ester bond that breaks.'));
c.push(P('In Part C you saponify methyl salicylate. Methyl salicylate does not dissolve in water and is denser than water (1.17 g/mL), so it forms **oily drops or a layer at the bottom** of the tube and smells strongly of wintergreen. As it is hydrolyzed by hot NaOH, it forms sodium salicylate and methanol, which both dissolve: **the oily layer and the wintergreen odor disappear**. (The phenol –OH on the ring is also weakly acidic and can react with NaOH, but your C.4 equation only needs to show the ester group reacting.) When the solution is then made acidic with HCl, the salicylate ion picks up an H^{+} to form salicylic acid, which is not very soluble in cold water, so a **white solid forms**.'));
// Hazards
c.push(h3('Hazards and Safety Instructions'));
c.push(P('Wear safety goggles and gloves at all times.',{after:100}));
c.push(bullet('**Corrosive Concentrated Acids:** Glacial acetic acid (pure acetic acid) and 85% phosphoric acid (H_{3}PO_{4}) cause severe skin burns and eye damage. Glacial acetic acid also has strong, irritating vapor and is flammable. Dispense both **in the fume hood**, add them slowly, and keep the mouth of the tube pointed away from you and others. If either touches your skin, rinse with water for 15 minutes and tell your instructor.'));
c.push(bullet('**Corrosive Base and Acid:** 10% NaOH and 10% HCl irritate or damage skin and eyes; NaOH is especially dangerous to the eyes. If either touches your skin or eyes, rinse with water for 15 minutes and tell your instructor. Test solutions by touching a drop to litmus or pH paper with a stirring rod; never dip the paper into the tube.'));
c.push(bullet('**Flammable and Toxic Alcohols:** Methanol, 1-propanol, 1-pentanol, 1-octanol, and benzyl alcohol are flammable or combustible and irritate the eyes and skin. Methanol is toxic if swallowed, inhaled, or absorbed through the skin. Keep the alcohols away from flames and hot plate surfaces; heat them only in the water bath.'));
c.push(bullet('**Toxic if Swallowed:** Methyl salicylate (oil of wintergreen) smells like candy but is toxic if swallowed, even in small amounts. Benzoic acid and salicylic acid irritate the eyes. Never taste anything in the lab.'));
c.push(bullet('**Thermal Hazards:** The boiling water bath can cause burns. Use a test tube holder to place and remove tubes, keep the mouth of each tube pointed away from people, and let tubes cool (or cool them in cold water) before the next step.'));
c.push(bullet('**Odors:** Never put your nose over a test tube. To check an odor, take a breath of fresh air first, then gently waft the vapor from the top of the tube toward your nose with your hand.'));
c.push(h3('Waste Instructions'));
c.push(bullet('**Non-halogenated organic waste container (or as your instructor directs):** all chemical waste from this lab, including the acid and salt test tubes from Part A, the ester mixtures and the hot-water beakers from B.3, and the methyl salicylate and salicylic acid tubes from Part C.'));
c.push(bullet('**Trash:** used litmus paper, pH paper, and gloves.'));
c.push(bullet('**Do not pour any chemical down the sink**, and never return unused reagent to its stock bottle. Return the model kit pieces to the kit.'));
// Procedure
c.push(h2('Procedure',{before:360}));
c.push(note('Instructor Notes:','Start a boiling water bath (a 400-mL beaker about half full of water on a hot plate) at the beginning of lab, and keep the water level up during the lab. Set out glacial acetic acid and 85% H_{3}PO_{4} in the fume hood. Students should label every test tube.'));
c.push(h3('A. Carboxylic Acids and Their Salts'));
c.push(materials('Test tubes, test tube rack, test tube holder, glacial acetic acid, benzoic acid (s), dropper, spatula, stirring rod, pH paper, red and blue litmus paper, boiling water bath (400-mL beaker on a hot plate), 10% NaOH, 10% HCl'));
c.push(step('A.1','Write the structural formulas for acetic acid and benzoic acid.'));
c.push(step('A.2','Place about 2 mL of water in each of two test tubes. **In the fume hood,** add 5 drops of glacial acetic acid to one tube. Add a small amount of benzoic acid (enough to cover the tip of a spatula) to the other. Tap the sides of the tubes or stir with a stirring rod to mix. Record whether each acid dissolves.'));
c.push(step('A.3','Test the pH of each carboxylic acid: dip a clean stirring rod into the solution and touch it to a piece of pH paper. Compare the color with the chart on the container and record the pH. Rinse the stirring rod between samples.'));
c.push(step('A.4','Using a test tube holder, place the tube of benzoic acid (solid should still be present) in the boiling water bath for 5 minutes. Record whether more of the solid dissolves in hot water. Remove the tube, let it cool to room temperature, and record what you see as it cools.'));
c.push(step('A.5','Add 10% NaOH to each tube, about 10 drops at a time, mixing after each addition, until a drop of the solution turns red litmus paper blue. Record what happens to the benzoic acid solid and to the odor of the acetic acid. Write the equation for each reaction with NaOH, showing the structure of the sodium salt formed (include the charges).'));
c.push(step('A.6','Add 10% HCl to each tube, about 10 drops at a time, mixing after each addition, until a drop of the solution turns blue litmus paper red (the solution is now acidic). Record your observations. Write the equation for the reaction of each sodium salt with HCl (include the charges).'));
c.push(h3('B. Esters'));
c.push(materials('Molecular model kit, 5 test tubes, test tube rack, test tube holder, 10-mL graduated cylinder, droppers, stirring rod, spatula, small (50- or 100-mL) beaker, boiling water bath, methanol, 1-propanol, 1-octanol, benzyl alcohol, 1-pentanol, salicylic acid (s), glacial acetic acid, 85% phosphoric acid (H_{3}PO_{4})'));
c.push(step('B.1','Make models of acetic acid and methanol (methyl alcohol). **Instructor check:** with your instructor watching, remove the atoms that form water (the –OH from the acid and the H from the alcohol), and join the remaining pieces with an ester bond to form methyl acetate. Write the equation for the formation of the ester.'));
c.push(step('B.2','Label five test tubes 1–5. **In the fume hood,** prepare the five mixtures in the table below. Add 3 mL of the alcohol and 1 mL of the carboxylic acid; for salicylic acid, use enough solid to cover the tip of a spatula. Write the condensed structural formula of each alcohol and carboxylic acid.',{after:80,keepNext:true}));
c.push(table([1800,3780,3780],[['Mixture','Alcohol (3 mL)','Carboxylic acid'],['1','Methanol','Salicylic acid (tip of a spatula)'],['2','1-Propanol','Acetic acid (1 mL)'],['3','1-Octanol','Acetic acid (1 mL)'],['4','Benzyl alcohol','Acetic acid (1 mL)'],['5','1-Pentanol','Acetic acid (1 mL)']],{firstColBold:true}));
c.push(caution('Glacial acetic acid and 85% phosphoric acid cause severe burns. Dispense them in the fume hood and keep the tube pointed away from you and others.'));
c.push(step('B.3','**In the fume hood,** with the test tube pointed away from you, *cautiously* add 15 drops of 85% phosphoric acid (H_{3}PO_{4}) to each tube and stir. Using a test tube holder, place the tubes in the boiling water bath: 15 minutes for mixtures 1 and 2, and 20 minutes for mixtures 3–5. Remove each tube and *cautiously* waft the vapor toward you. Record the odor, such as pear, banana, orange, jasmine (flowery), or wintergreen. For a stronger odor, pour the mixture into about 15 mL of hot water in a small beaker and waft again (this works better for some esters than others). Write the name and condensed structural formula of each ester formed.'));
c.push(h3('C. Hydrolysis of Esters'));
c.push(materials('Test tube, test tube holder, droppers, stirring rod, 10-mL graduated cylinder, boiling water bath, beaker of cold tap water, methyl salicylate in a dropper bottle, 10% NaOH, 10% HCl, blue litmus paper'));
c.push(step('C.1','Draw the condensed structural formula of methyl salicylate.'));
c.push(step('C.2','Place 3 mL of water in a test tube. Add 5 drops of methyl salicylate. Record the appearance of the mixture (where is the ester?) and the odor of the ester.'));
c.push(step('C.3','Add 1 mL (about 20 drops) of 10% NaOH. Record whether you see an oily ester layer. Using a test tube holder, place the tube in the boiling water bath for 30 minutes, or until the oily ester layer disappears. Record any change in the appearance and odor. Remove the tube and cool it in cold water.'));
c.push(step('C.4','Write the equation for the saponification of methyl salicylate.'));
c.push(step('C.5','When the solution is cool, add 10% HCl about 5 drops at a time (about 20 drops in all), mixing after each addition, until a drop of the solution turns blue litmus paper red. Record your observations. Write the name and formula of the solid that forms.'));
// Pre-lab
c.push(h2('Pre-Lab Questions',{pageBreak:true,before:0}));
const PL=[['1.','Glacial acetic acid and 85% phosphoric acid are used in Part B. Give one hazard of each. Where are they dispensed, and what should you do if one touches your skin?',1050],
 ['2.','Methyl salicylate smells like wintergreen candy. Why must you never taste it? How should you smell the esters you make in B.3?',950],
 ['3.','Where does the waste from each part of this lab go? Why should none of the alcohols or esters be poured down the sink?',950],
 ['4.','In A.5 and A.6, what litmus result tells you that you have added enough NaOH? Enough HCl?',950],
 ['5.','Predict what you will see when NaOH is added to the tube of undissolved benzoic acid, and then what you will see when HCl is added. Explain each change.',1150],
 ['6.','Write the condensed structural formula and name of the ester formed from 1-propanol and acetic acid in B.3. What is the job of the H_{3}PO_{4}?',1250],
 ['7.','In Part C, what two observations show that the methyl salicylate has been hydrolyzed by NaOH? What solid forms when HCl is added in C.5?',0]];
PL.forEach(([a,b,sp])=>{c.push(step(a,b,{left:360,after:0})); if(sp)c.push(space(sp));});
// Report
c.push(h2('Report Sheet',{pageBreak:true,before:0,rule:true}));
c.push(...nameBlock());
c.push(h3('A. Carboxylic Acids and Their Salts',{before:120}));
const SH={t:'(not tested)',shade:'F2F2F2',align:AlignmentType.CENTER};
c.push(table([2560,3400,3400],[['','Acetic acid','Benzoic acid'],
 ['**A.1** Structural formula','',''],['**A.2** Dissolves in cold water?','',''],['**A.3** pH','',''],
 ['**A.4** Hot water; then after cooling',SH,''],['**A.5** Observations after adding NaOH (red litmus turns blue)','',''],['**A.6** Observations after adding HCl (blue litmus turns red)','','']],{h:[0,1300,600,500,850,850,850]}));
c.push(table([9360],[['**A.5** Equations for the reactions of acetic acid and benzoic acid with NaOH:'],['**A.6** Equations for the reactions of sodium acetate and sodium benzoate with HCl:']],{header:0,h:[1500,1500]}));
c.push(h3('B. Esters',{pageBreak:true,before:0}));
c.push(table([9360],[['**B.1** Equation for the formation of methyl acetate from acetic acid and methanol:']],{header:0,h:1500}));
c.push(P('',{after:120}));
c.push(table([2900,1900,4560],[['B.2 Condensed structural formulas of the alcohol and the carboxylic acid','B.3 Odor','B.3 Name and condensed structural formula of the ester'],
 ['**1.** Methanol and salicylic acid','',''],['**2.** 1-Propanol and acetic acid','',''],['**3.** 1-Octanol and acetic acid','',''],['**4.** Benzyl alcohol and acetic acid','',''],['**5.** 1-Pentanol and acetic acid','','']],{h:1700}));
c.push(h3('C. Hydrolysis of Esters',{pageBreak:true,before:0}));
c.push(table([3000,6360],[['**C.1** Condensed structural formula of methyl salicylate',''],['**C.2** Appearance and odor of methyl salicylate in water',''],
 ['**C.3** Appearance and odor after adding NaOH and heating',''],['**C.4** Equation for the saponification of methyl salicylate',''],
 ['**C.5** Observations when HCl is added',''],['**C.5** Name and formula of the solid that forms','']],{header:0,h:[1700,1100,1300,2000,1100,1300]}));
// Questions
c.push(h2('Questions and Problems',{pageBreak:true,before:0}));
c.push(step('Q.1','How does NaOH affect the solubility of benzoic acid in water? Why?',{left:0,after:0})); c.push(space(924));
c.push(step('Q.2','Give the name of each carboxylic acid or ester below.',{left:0,after:0,keepNext:true}));
c.push(...img(F+'fig6_8.png',520,146));
c.push(P('A. ______________________________          B. ______________________________',{indent:{left:540},before:120,after:246}));
c.push(P('C. ______________________________          D. ______________________________',{indent:{left:540},after:352}));
c.push(step('Q.3','Why did acetic acid and benzoic acid differ in their solubility in water in Part A? Explain in complete sentences.',{left:0,after:0})); c.push(space(924));
c.push(step('Q.4','In Part B, why were 3 mL of alcohol used with only 1 mL of acid (an excess of alcohol for most of the mixtures)? What would happen to the amount of ester if a large amount of water were added?',{left:0,after:0})); c.push(space(924));
c.push(step('Q.5','In Part C, why did the oily layer of methyl salicylate disappear when it was heated with NaOH? Why did a solid form when HCl was added?',{left:0,after:0})); c.push(space(924));
c.push(step('Q.6','Write the equation for the acid-catalyzed hydrolysis of pentyl acetate (the banana ester), and name the products.',{left:0,after:0}));
build(c,OUT).then(()=>console.log('wrote',OUT));
