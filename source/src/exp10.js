const L=require('../lablib.js'); const {P,title,h2,h3,h4,bullet,step,sub,materials,note,caution,img,table,space,nameBlock,build,W,D}=L;
const F=process.argv[2]+'/'; const OUT=process.argv[3]; const {AlignmentType}=D;
const c=[];
c.push(title('Experiment #10: Lipids'));
c.push(h3('Goals',{before:0}));
['Observe the physical properties and solubility of some common lipids.','Draw the structure of a typical triacylglycerol.','Distinguish between saturated and unsaturated fats and oils using the bromine test.','Prepare a hand lotion and determine the function of its components.'].forEach(s=>c.push(bullet(s)));
c.push(h2('Introduction'));
c.push(h3('A. Lipids and Their Physical Properties',{before:120}));
c.push(P('**Lipids** are a family of biomolecules grouped by solubility rather than by one shared structure. Lipids are mostly nonpolar, so they dissolve in nonpolar or low-polarity organic solvents such as hexane and methylene chloride (CH_{2}Cl_{2}) but not in water (“like dissolves like”). Lipids include fats and oils, waxes, phospholipids, and steroids (Table 1).'));
c.push(P('**Table 1: Classes of Lipids**',{align:AlignmentType.CENTER,after:80,keepNext:true}));
c.push(table([3400,4160,1800],[['Lipid class','Components','Hydrolyzable?'],
 ['Waxes','Fatty acid and long-chain alcohol','Yes'],['Fats and oils (triacylglycerols)','Fatty acids and glycerol','Yes'],
 ['Glycerophospholipids (such as lecithin)','Fatty acids, glycerol, phosphate, amino alcohol','Yes'],['Sphingolipids','Fatty acid, sphingosine, phosphate, amino alcohol','Yes'],
 ['Glycosphingolipids','Fatty acid, sphingosine, monosaccharide(s)','Yes'],['Steroids (such as cholesterol)','Four fused rings: three cyclohexane rings and one cyclopentane ring','No']],{firstColBold:true}));
c.push(P('Lipids that contain **ester** or **amide** bonds (waxes, fats and oils, phospholipids, and sphingolipids) are **hydrolyzable**: water, with an acid, base, or enzyme, can break these bonds and split the lipid into smaller molecules. Lipids with no ester or amide bonds, such as steroids, free fatty acids, and fat-soluble vitamins, are **non-hydrolyzable** (Figure 1).',{before:160,keepNext:true}));
c.push(...img(F+'fig9_2.png',624,173,'**Figure 1:** A wax (hydrolyzable) and cholesterol (non-hydrolyzable).'));
c.push(P('**Triacylglycerols**, commonly called fats and oils, are esters of glycerol and three fatty acids, formed by condensation (Figure 2). **Fatty acids** are long-chain carboxylic acids, usually 12 to 20 carbons long.',{keepNext:true}));
c.push(...img(F+'fig9_1.png',624,195,'**Figure 2:** Formation of a triacylglycerol from glycerol and three fatty acids.'));
c.push(P('A fatty acid with only single carbon-carbon bonds is **saturated**; one with one or more C=C double bonds is **unsaturated**. In nature, these double bonds are *cis*, which puts a bend in the chain. Saturated chains are straight and pack closely together, so fats made mostly of saturated fatty acids have higher melting points and are usually solid at room temperature (butter, lard). The bends in unsaturated chains keep them from packing closely, so oils made mostly of unsaturated fatty acids are usually liquid at room temperature (olive oil, safflower oil). Table 2 lists some common fatty acids.'));
c.push(P('**Table 2: Formulas, Melting Points, and Sources of Some Fatty Acids**',{align:AlignmentType.CENTER,after:80,keepNext:true}));
const sec=t=>[{t:'*'+t+'*',span:5,shade:'F2F2F2',bold:true,align:AlignmentType.CENTER}];
c.push(table([1150,4250,850,1410,1700],[['Carbons','Condensed structural formula','mp (°C)','Name','Source'],
 sec('Saturated fatty acids (only single C–C bonds)'),
 ['12','CH_{3}(CH_{2})_{10}COOH','44','Lauric','Coconut'],['14','CH_{3}(CH_{2})_{12}COOH','54','Myristic','Nutmeg'],['16','CH_{3}(CH_{2})_{14}COOH','63','Palmitic','Palm'],['18','CH_{3}(CH_{2})_{16}COOH','70','Stearic','Animal fat'],
 sec('Monounsaturated fatty acids (one cis double bond)'),
 ['16','CH_{3}(CH_{2})_{5}CH=CH(CH_{2})_{7}COOH','0','Palmitoleic','Butterfat'],['18','CH_{3}(CH_{2})_{7}CH=CH(CH_{2})_{7}COOH','13','Oleic','Olive, corn'],
 sec('Polyunsaturated fatty acids (two or more cis double bonds)'),
 ['18','CH_{3}(CH_{2})_{4}CH=CHCH_{2}CH=CH(CH_{2})_{7}COOH','−5','Linoleic','Safflower, sunflower'],['18','CH_{3}CH_{2}CH=CHCH_{2}CH=CHCH_{2}CH=CH(CH_{2})_{7}COOH','−11','Linolenic','Flaxseed, canola']],{firstColBold:false}));
c.push(h3('B. Bromine Test for Unsaturation'));
c.push(P('You used the bromine test to detect C=C double bonds in alkenes in Experiment #3. Bromine (Br_{2}) dissolved in methylene chloride is **red-orange**. When it is added to an unsaturated fatty acid or oil, Br_{2} adds across each C=C double bond, and the product is colorless, so the red-orange color **fades quickly** (Figure 3). A saturated fatty acid has no double bonds, so the red-orange color **stays**. Each C=C double bond uses up one Br_{2} molecule, so when the same small amount of each lipid is tested, a sample with more double bonds takes more drops of bromine solution before the red-orange color stays. That is why every tube in Part B gets exactly 1 drop of lipid in the same volume of solvent: if the amounts differed, the drop counts could not be compared.',{keepNext:true}));
c.push(...img(F+'fig9_3.png',624,124,'**Figure 3:** Bromine adds across the double bond of oleic acid, and the red-orange color fades.'));
c.push(h3('C. Preparation of Hand Lotion'));
c.push(P('Hand lotions soften skin and keep it from drying out. A lotion is an **emulsion**: tiny droplets of oil spread evenly through water. Oil and water do not normally mix, so a lotion also needs an **emulsifier**, a substance with a polar end that attracts water and a nonpolar end that attracts oil. The lipids in a lotion are nonpolar, so they form a thin layer on the skin that holds in moisture. Table 3 lists the ingredients you will use.'));
c.push(P('**Table 3: Hand Lotion Ingredients**',{align:AlignmentType.CENTER,after:80,keepNext:true}));
c.push(table([2300,3260,3800],[['Ingredient','Formula or description','Role in the lotion'],
 ['Stearic acid','CH_{3}(CH_{2})_{16}COOH, a saturated fatty acid','Thickens the lotion (also see Q.7)'],['Cetyl alcohol','CH_{3}(CH_{2})_{15}OH, a long-chain alcohol','Thickens and softens'],
 ['Lanolin','Mixture of waxes from sheep’s wool','Forms a protective, moisture-holding layer'],['Triethanolamine','N(CH_{2}CH_{2}OH)_{3}, an amine (a base)','See Q.7'],
 ['Glycerol (glycerin)','HOCH_{2}CH(OH)CH_{2}OH','Attracts and holds water in the skin'],['Water','H_{2}O','Main ingredient; dissolves the polar ingredients'],['Ethanol','CH_{3}CH_{2}OH','Helps the ingredients mix; evaporates quickly']],{firstColBold:true}));
// Hazards
c.push(h3('Hazards and Safety Instructions'));
c.push(P('Wear safety goggles and gloves at all times.',{after:100}));
c.push(bullet('**Corrosive and Toxic Vapors:** Bromine solution causes severe chemical burns, and its vapors are toxic. Methylene chloride (CH_{2}Cl_{2}) evaporates quickly, its vapors are harmful, and it is a suspected carcinogen. Dispense and use both only in the fume hood, and keep their test tubes in the hood. If bromine solution gets on your skin or in your eyes, rinse with water for 15 minutes and tell your instructor.'));
c.push(bullet('**Irritant (Weak Base):** Triethanolamine is a weak base that irritates skin, eyes, and the respiratory tract. Wear gloves when measuring it.'));
c.push(bullet('**Flammable:** Ethanol is flammable; keep it away from hot plates and flames.'));
c.push(bullet('**Thermal Hazards:** The hot water bath and the 80 °C beakers can cause burns. Move beakers with crucible tongs, set hot glassware on a wire mesh, and check glassware for cracks before heating.'));
c.push(bullet('**Stoppered Test Tubes:** When you shake a stoppered test tube of water (A.4), hold the stopper in place with your thumb and point the tube away from everyone. Never stopper a tube that contains methylene chloride; its vapor can build up pressure and pop the stopper. Mix those tubes by gently swirling.'));
c.push(bullet('**Lab-Made Lotion:** Your hand lotion is made with laboratory-grade chemicals. Do not apply it to your skin or take it home unless your instructor says it is OK.'));
c.push(h3('Waste Instructions'));
c.push(bullet('**Halogenated waste container:** every test tube that contains methylene chloride or bromine solution (A.5 and Part B).'));
c.push(bullet('**Non-halogenated organic waste container:** the lipid and water test tubes from A.2–A.4 (or as your instructor directs).'));
c.push(bullet('**Trash:** hand lotion (wipe it out of the beaker with a paper towel before washing the beaker), vitamin A capsule shells, wood sticks, and used pH paper.'));
c.push(bullet('**Never pour melted fats, waxes, or lotion down the sink.** They solidify as they cool and clog the drain.'));
// Procedure
c.push(h2('Procedure',{before:360}));
c.push(note('Instructor Notes:','At the start of lab, fill a 250-mL beaker 2/3 full of water and keep it at a gentle boil for Part C. Set out the bromine solution and CH_{2}Cl_{2} in the fume hood. Part B uses 1 drop of each lipid in 1 mL of CH_{2}Cl_{2}, so the drop counts depend on the bromine concentration and dropper size; run the test once before lab to confirm that the unsaturated samples need clearly different numbers of drops within the 50-drop limit, and adjust the lipid amount if needed. To dispense solids, glide a wood stick gently along the surface.'));
c.push(h3('A. Physical Properties of Some Lipids and Fatty Acids'));
c.push(materials('Test tubes and stoppers, test tube rack, droppers, wood sticks, spatulas, mortar and pestle, oleic acid, stearic acid, olive oil, safflower oil, lecithin, cholesterol, vitamin A capsules, methylene chloride (CH_{2}Cl_{2})'));
c.push(h4('Classification'));
c.push(step('A.1','Use Table 1 and your textbook (or look up each structure) to classify each lipid as a triacylglycerol (fat or oil), fatty acid, steroid, phospholipid, or fat-soluble vitamin. Indicate whether each is hydrolyzable or non-hydrolyzable.'));
c.push(h4('Appearance and Odor'));
c.push(step('A.2','Label seven test tubes. Add 5 drops of each liquid, or a small amount of each solid, to its own tube: stearic acid, oleic acid, olive oil, safflower oil, lecithin, cholesterol, and vitamin A (puncture a capsule and squeeze out the contents, or grind a tablet with a mortar and pestle). Describe the appearance of each.'));
c.push(step('A.3','Carefully waft the vapors toward you and describe the odor of each lipid as best you can.'));
c.push(h4('Solubility in a Polar Solvent'));
c.push(step('A.4','Add about 2 mL of water to each of the seven test tubes. Stopper each tube, hold the stopper in place, and shake. Record whether each lipid dissolves, forms a cloudy mixture, floats, sinks, or forms a separate layer.'));
c.push(h4('Solubility in an Organic Solvent of Low Polarity'));
c.push(step('A.5','**In the fume hood:** label seven clean, dry test tubes and add 10–15 drops of each liquid lipid, or a small amount of each solid lipid. Add 1 mL (about 20 drops) of methylene chloride (CH_{2}Cl_{2}) to each tube and mix gently. Record whether each lipid dissolves. Do not stopper these tubes.'));
c.push(h3('B. Bromine Test for Unsaturation'));
c.push(materials('4 clean, dry test tubes, test tube rack, droppers, wood stick, stearic acid, oleic acid, olive oil, safflower oil, methylene chloride (CH_{2}Cl_{2}), 1% Br_{2} in methylene chloride'));
c.push(step('B.1','**In the fume hood:** label four clean, dry test tubes. Add exactly **1 drop** of oleic acid, olive oil, and safflower oil to separate tubes. To the fourth tube, add a few crystals of stearic acid (about the size of one drop). Add 1 mL (about 20 drops) of methylene chloride to each tube and swirl gently until the lipid dissolves.'));
c.push(step('B.2','**In the fume hood** (avoid contact with the bromine solution and its vapors): add 1% bromine solution to the first tube one drop at a time, swirling after each drop, and count the drops. Stop when a red-orange color stays for about 30 seconds, or when you have added 50 drops (record “more than 50”). Record the number of drops and whether the color faded quickly or stayed. Repeat with each of the other three tubes, using the same dropper.'));
c.push(step('B.3','Decide whether each sample is saturated or unsaturated. Because each tube holds the same small amount of lipid, a sample that takes more drops before the color stays contains more C=C double bonds. Rank the unsaturated samples from fewest to most C=C double bonds.'));
c.push(h3('C. Preparation of Hand Lotion'));
c.push(materials('Stearic acid, cetyl alcohol, lanolin (anhydrous), triethanolamine, glycerol, ethanol, distilled water, fragrance (optional), commercial hand lotion, balance, weighing paper, 10-mL and 50-mL graduated cylinders, two 100-mL beakers, 250-mL beaker (water bath), hot plate, thermometer, wire mesh, stirring rod, crucible tongs, pH paper'));
c.push(P('**Your instructor will tell you whether to make all three lotions, or to make one assigned lotion and compare your results with other groups.**'));
c.push(step('C.1','Follow the General Instructions below using all of the ingredients in the table.'));
c.push(step('C.2','Follow the General Instructions, but leave the **triethanolamine** out of Beaker 1.'));
c.push(step('C.3','Follow the General Instructions, but leave the **stearic acid** out of Beaker 1.'));
c.push(step('C.4','Determine the pH of a commercial hand lotion the same way (step 4 below) and record its brand. Compare it with your lotion(s).'));
c.push(h4('General Instructions'));
c.push(step('1.','Use a balance to weigh the solids directly into the beakers (tare the beaker first), and use graduated cylinders for the liquids:',{left:360,after:80,keepNext:true}));
c.push(table([2900,1780,2900,1780],[['Beaker 1 (100 mL)','Amount','Beaker 2 (100 mL)','Amount'],['Stearic acid','3 g','Glycerol (glycerin)','2 mL'],['Cetyl alcohol','1 g','Distilled water','50 mL'],['Lanolin (anhydrous)','2 g','',''],['Triethanolamine','1 mL','','']]));
c.push(step('2.','Using crucible tongs, hold Beaker 1 in the water bath and stir until the contents reach about 80 °C and are completely melted, then set it on a wire mesh. Heat Beaker 2 in the water bath to about 80 °C the same way.',{left:360,after:140}));
c.push(step('3.','While both are still warm, slowly pour Beaker 2 into Beaker 1 while stirring. Add 5.0 mL of ethanol and a few drops of fragrance (if available). Keep stirring for 3–5 minutes, until the mixture becomes a smooth lotion. If it is too thick, stir in a little warm water; if it is still runny, let it cool while stirring.',{left:360,after:140}));
c.push(step('4.','Describe the smoothness and appearance of the lotion. Determine its pH by spreading a thin layer on a pH strip with a stirring rod.',{left:360,after:140}));
// Pre-lab
c.push(h2('Pre-Lab Questions',{pageBreak:true,before:0}));
const PL=[['1.','Which two reagents in this lab must be dispensed and used in the fume hood? Give one hazard of each.',1250],
 ['2.','Where do the test tubes that contain methylene chloride or bromine go at the end of lab? Why can’t melted fats or lotion be poured down the sink?',1250],
 ['3.','In the bromine test, what result shows that a sample is unsaturated? What happens to the Br_{2} molecules? Why does every tube in Part B contain exactly 1 drop of lipid?',1250],
 ['4.','Classify each as hydrolyzable or non-hydrolyzable, and explain: (a) olive oil (b) cholesterol',1250],
 ['5.','Predict whether olive oil will dissolve in water and in methylene chloride. Explain using polarity.',1250],
 ['6.','Stearic acid melts at 70 °C and oleic acid melts at 13 °C. Which fatty acid is unsaturated? Explain why it has the lower melting point.',0]];
PL.forEach(([a,b,sp])=>{c.push(step(a,b,{left:360,after:0})); if(sp)c.push(space(sp));});
// Report
c.push(h2('Report Sheet',{pageBreak:true,before:0,rule:true}));
c.push(...nameBlock());
c.push(h3('A. Physical Properties of Lipids and Fatty Acids',{before:120}));
c.push(table([1460,2200,1500,1400,1400,1400],[['Lipid','A.1 Class; hydrolyzable or non-hydrolyzable?','A.2 Appearance','A.3 Odor','A.4 Soluble in water?','A.5 Soluble in CH_{2}Cl_{2}?'],
 ...['Stearic acid','Oleic acid','Olive oil','Safflower oil','Lecithin','Cholesterol','Vitamin A'].map(n=>[n,'','','','',''])],{h:920,firstColBold:true}));
c.push(h3('B. Bromine Test for Unsaturation',{pageBreak:true,before:0}));
c.push(table([2400,2000,2560,2400],[['Sample (1 drop in 1 mL CH_{2}Cl_{2})','B.2 Drops of bromine solution until the color stays','B.2 Did the red-orange color fade quickly or stay?','B.3 Saturated or unsaturated?'],
 [{t:'*Fatty acids*',span:4,shade:'F2F2F2',align:AlignmentType.CENTER}],['Stearic acid','','',''],['Oleic acid','','',''],[{t:'*Triacylglycerols (oils)*',span:4,shade:'F2F2F2',align:AlignmentType.CENTER}],['Olive oil','','',''],['Safflower oil','','','']],{h:[0,0,736,736,0,736,736],firstColBold:true}));
c.push(table([9360],[['**B.3** Rank the unsaturated samples from fewest to most C=C double bonds, and explain using your drop counts:']],{header:0,h:1012}));
c.push(h3('C. Preparation of Hand Lotion'));
c.push(table([3120,3120,3120],[['C.1 (all ingredients)','C.2 (without triethanolamine)','C.3 (without stearic acid)'],
 [{t:'**Description of the lotion** (smoothness, thickness, appearance)',span:3,shade:'F2F2F2'}],['','',''],[{t:'**pH (step 4)**',span:3,shade:'F2F2F2'}],['','',''],
 [{t:'**C.4 Commercial hand lotion:**   Brand ______________________    pH ________',span:3}]],{h:[0,0,2392,0,552,552]}));
// Questions
c.push(h2('Questions and Problems',{pageBreak:true,before:0}));
c.push(step('Q.1','a. Draw the reaction for the condensation of glycerol with three molecules of ethanoic (acetic) acid.',{left:0,after:0})); c.push(space(1500));
c.push(P('b. What two functional groups react in this equation?',{indent:{left:540},after:600}));
c.push(P('c. What functional group forms in the condensation reaction?',{indent:{left:540},after:600}));
c.push(P('d. Draw the reverse reaction (hydrolysis).',{indent:{left:540},after:1500}));
c.push(step('Q.2','Why are all of the compounds in Part A classified as lipids?',{left:0,after:0})); c.push(space(1000));
c.push(step('Q.3','What type of solvent is needed to remove an oil spot? Why?',{left:0,after:0})); c.push(space(1000));
c.push(step('Q.4','a. Write the condensed structural formulas of stearic acid and oleic acid.',{left:0,after:0}));
c.push(P('Stearic acid',{indent:{left:900},before:300,after:700})); c.push(P('Oleic acid',{indent:{left:900},after:700}));
c.push(P('b. From your Part B results, how can you tell which fatty acid is unsaturated?',{indent:{left:540},after:1000}));
c.push(P('c. The melting point of stearic acid is 70 °C and that of oleic acid is 13 °C. Explain the difference.',{indent:{left:540},after:1200}));
c.push(step('Q.5','How does leaving out triethanolamine (C.2) affect the properties and appearance of the hand lotion?',{left:0,after:0})); c.push(space(1200));
c.push(step('Q.6','How does leaving out stearic acid (C.3) affect the properties and appearance of the hand lotion?',{left:0,after:0})); c.push(space(1200));
c.push(step('Q.7','Stearic acid and triethanolamine react with each other when the lotion is made. What type of reaction is this, and why are both needed in a hand lotion? (Hint: think about acids, bases, and emulsifiers.)',{left:0,after:0}));
build(c,OUT).then(()=>console.log('wrote',OUT));
