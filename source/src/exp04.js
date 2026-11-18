const L=require('../lablib.js'); const {P,title,h2,h3,h4,bullet,step,sub,materials,note,caution,img,table,space,nameBlock,build,checkRow,W,D}=L;
const F=process.argv[2]+'/'; const OUT=process.argv[3]; const {AlignmentType}=D;
const eq=(s)=>P(s,{align:AlignmentType.CENTER,after:200});
const c=[];
c.push(title('Experiment #4: Alcohols and Phenols'));
c.push(h3('Goals',{before:0}));
['Build models of alcohols and classify each alcohol as primary (1°), secondary (2°), or tertiary (3°).',
 'Determine physical and chemical properties of alcohols and phenols.',
 'Use the Lucas test to classify an alcohol as 1°, 2°, or 3°, and the iron(III) chloride test to identify a phenol.',
 'Write the formula of the alkyl chloride that forms in the Lucas test.','Use your test results to identify an unknown.'].forEach(s=>c.push(bullet(s)));
c.push(h2('Introduction'));
c.push(h3('A. Structures of Alcohols and Phenols',{before:120}));
c.push(P('An **alcohol** is an organic compound that contains a **hydroxyl group (–OH)** bonded to a carbon atom that has only single bonds. **Methanol** (CH_{3}OH) is the simplest alcohol. **Ethanol** is the alcohol in beer, wine, and other alcoholic drinks, and it is used in labs as a solvent, a preservative, and a cleaner. **2-Propanol** (isopropyl alcohol) is rubbing alcohol, and it is found in astringents and perfumes (Figure 1).'));
c.push(P('A **phenol** has an –OH group bonded directly to a **benzene ring**. The simplest member, also called phenol (or carbolic acid), is toxic and corrosive: it burns the skin and is quickly absorbed through it. Related phenols such as thymol (from thyme) are used as antiseptics and are found in some mouthwashes and cough drops. Because phenol itself is too hazardous for a teaching lab, the phenol you will test is **salicylic acid**, a white solid from willow bark that is used in acne and wart treatments and is the starting material for aspirin (Experiment #11). It has an –OH on a benzene ring (the phenol part) and also a carboxylic acid group (–COOH).',{keepNext:true}));
c.push(...img(F+'fig4_1.png',624,153,'**Figure 1:** Common alcohols (left) and phenols (right). The hydroxyl group is shown in red.'));
c.push(h4('Classification of Alcohols'));
c.push(P('Alcohols are classified by the number of carbon atoms bonded to the carbon that holds the –OH group (Figure 2). In a **primary (1°)** alcohol, that carbon is bonded to one other carbon; in a **secondary (2°)** alcohol, to two carbons; and in a **tertiary (3°)** alcohol, to three carbons. (Methanol, with no other carbons, behaves like a 1° alcohol.) Phenols are not classified as 1°, 2°, or 3°, because their –OH is on a benzene ring carbon.',{keepNext:true}));
c.push(...img(F+'fig4_2.png',624,153,'**Figure 2:** Classifying alcohols. The alcohols in this experiment are shown.'));
c.push(P('Molecules with the same molecular formula but different structures are called **isomers**. In Part A you will build the four alcohols with the formula C_{4}H_{10}O. They have the same atoms, but the –OH sits on a different kind of carbon in each, so they are not all the same class of alcohol, and they do not react at the same speed in the Lucas test (Part C).'));
c.push(h3('B. Properties of Alcohols and Phenols'));
c.push(P('**Odor:** Small alcohols have sharp, familiar odors (ethanol and rubbing alcohol). Salicylic acid is an odorless solid. Never smell a chemical directly; waft it (see Hazards).'));
c.push(P('**Solubility in water:** The –OH group is polar, so alcohols form **hydrogen bonds** with water and with each other (Figure 3). Alcohols with one to three carbons, and t-butyl alcohol, mix completely with water. As the nonpolar hydrocarbon part gets larger, solubility drops: alcohols with five or more carbons, such as cyclohexanol (six carbons), are only slightly soluble. A **soluble** sample gives one clear layer; an **insoluble** sample gives a cloudy mixture or two separate layers.',{keepNext:true}));
c.push(...img(F+'fig4_3.png',560,150,'**Figure 3:** Hydrogen bonds (green dashes) between ethanol and water and between two ethanol molecules.'));
c.push(P('**Acidity:** Alcohols are about as acidic as water, so an alcohol–water mixture has a pH near 7. Phenol is a **weak acid**: a small fraction of its molecules give up the H^{+} of the –OH group (Figure 4). The negative charge of the phenoxide ion is spread over the benzene ring, which makes phenol much more acidic than an alcohol, but still a weaker acid than a carboxylic acid. A solution of a simple phenol is slightly acidic, with a pH of about 5–6. Salicylic acid is more acidic still (pH about 2–3 in water) because it also has a carboxylic acid group, which gives up H^{+} much more easily than the phenol –OH. Salicylic acid is only slightly soluble in cold water (about 0.2 g per 100 mL): its benzene ring is nonpolar, even though its –OH and –COOH groups form hydrogen bonds with water.',{keepNext:true}));
c.push(...img(F+'fig4_4.png',500,138,'**Figure 4:** Phenol is a weak acid in water.'));
c.push(h3('C. The Lucas Test: Classifying Alcohols'));
c.push(P('The **Lucas reagent** is zinc chloride (ZnCl_{2}) dissolved in concentrated hydrochloric acid (HCl). It **replaces the –OH group of an alcohol with a chlorine atom (–Cl)**. The products are an **alkyl chloride** (R–Cl) and water (Figure 5). ZnCl_{2} is not used up; it helps pull the –OH group off the carbon.',{keepNext:true}));
c.push(eq('R–OH (alcohol) + HCl → R–Cl (alkyl chloride) + H_{2}O      (ZnCl_{2} over the arrow)'));
c.push(P('Small alcohols dissolve in the Lucas reagent, so the mixture starts out **clear**. The alkyl chloride does **not** dissolve, so as it forms, the mixture turns **cloudy**, and an oily second layer may separate on top. How fast this happens tells you the class of the alcohol:',{keepNext:true}));
c.push(bullet('A **3° alcohol** turns cloudy or forms two layers almost at once (usually within 1 minute).'));
c.push(bullet('A **2° alcohol** turns cloudy more slowly, in about 3–10 minutes. Some 2° alcohols need gentle warming in a 50–60 °C water bath.'));
c.push(bullet('A **1° alcohol** shows no change at room temperature; the mixture stays clear.'));
c.push(P('**Why the speed depends on the class:** When the –OH group leaves (it leaves as a water molecule), the carbon it was attached to is left with only three bonds and a positive charge. A carbon ion with a positive charge like this is called a **carbocation**. The chloride ion (Cl^{−}) then bonds to it. Carbon groups attached to the positive carbon help to stabilize it, so a 3° carbocation (three carbon groups) forms most easily and fastest, a 2° carbocation forms more slowly, and a 1° carbocation hardly forms at all at room temperature.',{before:120}));
c.push(P('**Limits of the test:** The test works only for alcohols that dissolve in the reagent, about **six carbons or fewer**. A larger alcohol does not dissolve, so it makes the mixture cloudy right away even if no reaction occurs, which looks like a 3° result. Water slows the reaction, so use a **dry** test tube. **Phenols do not react**: the –OH on a benzene ring is not replaced by –Cl, so salicylic acid gives no change.',{keepNext:true}));
c.push(...img(F+'fig4_lucas.png',624,326,'**Figure 5:** The Lucas test. Top: t-butyl alcohol, a 3° alcohol, reacts with HCl (ZnCl_{2} over the arrow) to form t-butyl chloride, which does not dissolve. Bottom: what a 1°, 2°, and 3° alcohol look like in the Lucas reagent. The alkyl chloride layer is drawn pale yellow only so that it shows up; in the lab it is usually colorless.'));
c.push(h3('D. Iron(III) Chloride Test for Phenols'));
c.push(P('Iron(III) chloride (ferric chloride, FeCl_{3}) solution is pale **yellow**. Phenols bond to the Fe^{3+} ion to form a **complex ion** with a strong color, usually **violet or purple** (some phenols give blue, green, or red). This is not an oxidation; the phenol simply attaches to the iron ion. Alcohols do not form a colored complex, so the mixture stays yellow (Figure 6). Salicylic acid gives a strong violet color; you will use the same test in Experiment #11 to check the purity of aspirin.'));
c.push(eq('phenol (colorless) + Fe^{3+} (yellow) → iron–phenol complex (violet)'));
c.push(...img(F+'fig4_fecl3.png',400,254,'**Figure 6:** Positive and negative results for the iron(III) chloride test in Part D.'));
c.push(h3('E. Identification of an Unknown'));
c.push(P('Your unknown is one of the five compounds tested in this experiment: ethanol, 2-propanol, t-butyl alcohol, cyclohexanol, or salicylic acid (a phenol). Compare its results in every test with the results of the known compounds. Use FeCl_{3} to decide whether it is a phenol, the Lucas test to decide whether it is a 1°, 2°, or 3° alcohol, and solubility and odor to choose between the rest.'));
// Hazards
c.push(h3('Hazards and Safety Instructions'));
c.push(P('Wear safety goggles at all times. Wear gloves when handling the Lucas reagent, salicylic acid, and FeCl_{3}. Run every Part C test in the fume hood.',{after:100}));
c.push(bullet('**Lucas Reagent, Corrosive:** The reagent is ZnCl_{2} dissolved in concentrated hydrochloric acid. Concentrated HCl causes severe burns to skin and eyes and gives off choking HCl fumes; ZnCl_{2} is also corrosive and is harmful if swallowed. Keep the reagent bottle and your test tubes **in the fume hood**, and add the reagent with the dropper or pipet held over the test tube. If it touches your skin or eyes, rinse with water for 15 minutes and tell your instructor. Report any spill to your instructor before cleaning it up.'));
c.push(bullet('**Alkyl Chlorides:** The alkyl chlorides formed in Part C (for example, t-butyl chloride) are volatile and flammable. Keep the tubes in the fume hood until they go into the waste container.'));
c.push(bullet('**Salicylic Acid, Eye Damage and Harmful:** Salicylic acid can cause serious eye damage, is harmful if swallowed, and is suspected of harming an unborn child. Avoid breathing its dust and use only a small spatula tip of the solid. If it gets in your eyes or on your skin, rinse with water for 15 minutes and tell your instructor.'));
c.push(bullet('**Flammable:** Ethanol, 2-propanol, 2-butanol, t-butyl alcohol, and cyclohexanol are flammable. No open flames are allowed in the lab during this experiment. If a warm water bath is used, it is heated on a hot plate.'));
c.push(bullet('**Iron(III) Chloride:** FeCl_{3} irritates skin and eyes and stains skin and clothing.'));
c.push(bullet('**Odors:** Never put your nose over a test tube. To check an odor, take a breath of fresh air first, then gently waft the vapor from the top of the tube toward your nose with your hand. Do not smell the Part C tubes.'));
c.push(h3('Waste Instructions'));
c.push(bullet('**Halogenated waste container:** every test tube from Part C (Lucas reagent with the alcohols, salicylic acid, and unknown), including tubes that did not change, plus the first small water rinse of each tube. These tubes contain **alkyl chlorides**, which are organic halides (organic compounds that contain a halogen), so they go in the halogenated waste, not the non-halogenated organic waste. They must **never** go down the sink.'));
c.push(bullet('**Non-halogenated organic waste container:** the test tubes from Part B (alcohols, salicylic acid, and water) and Part D (FeCl_{3} with the alcohols and salicylic acid), plus the first rinse of each tube. Salicylic acid and the alcohols must **never** go down the sink.'));
c.push(bullet('**Solid waste container:** gloves and paper towels that have Lucas reagent or salicylic acid on them, and used pH paper (or as your instructor directs).'));
// Procedure
c.push(h2('Procedure',{pageBreak:true,before:0}));
c.push(note('Instructor Notes:','Each pair needs a model kit with at least 4 carbons, 1 oxygen, 1 chlorine, and 12 hydrogens (a chlorine piece is needed for A.4). t-Butyl alcohol melts at 25 °C and may be solid in a cool room; warm the bottle in a beaker of warm water (no flames). Part C uses Lucas reagent (anhydrous ZnCl_{2} dissolved in concentrated HCl), dispensed in the fume hood; test tubes must be dry. Each pair sets up its own 50–60 °C water bath at the start of Part C (practice in setting up a bath) and uses it only for tubes that are still clear after 10 minutes (C.2). Two 2° alcohols are tested: 2-propanol, which is often slow and faint, and 2-butanol, which usually gives a clearer 2° result. Ethanol and 2-propanol differ in Part C only by the slow 2° result, so treat them with care when assigning unknowns. Do not include salicylic acid as an unknown unless you provide it as the same solution. Phenol is not used in this experiment: salicylic acid is the phenol. Parts C and D use the 0.15% aqueous salicylic acid solution prepared for Experiment #11; Part B uses the solid. Part C waste goes in the halogenated waste container.'));
c.push(h3('A. Structures of Alcohols and Phenols'));
c.push(materials('Molecular model kit (carbon, oxygen, hydrogen, and chlorine pieces)'));
c.push(step('A.1','Using the model kit, build models of ethanol, 2-propanol, and t-butyl alcohol (2-methyl-2-propanol). On your report sheet, draw the skeletal formula of each, and of salicylic acid (circle its phenol –OH).'));
c.push(step('A.2','Classify each alcohol as primary (1°), secondary (2°), or tertiary (3°). Use Figure 2 if you need help.'));
c.push(step('A.3','**Isomers of C_{4}H_{10}O:** Build the four alcohols with the formula C_{4}H_{10}O: 1-butanol, 2-butanol, 2-methyl-1-propanol, and 2-methyl-2-propanol (the same compound as t-butyl alcohol from A.1). Each model must have 4 carbons, 10 hydrogens, and 1 oxygen, with the –OH on a different carbon or branch. On your report sheet, draw the condensed or skeletal formula of each and classify it as 1°, 2°, or 3°. **Instructor check:** show your instructor the four models, point to the carbon that holds the –OH in each, and say whether it is 1°, 2°, or 3°.'));
c.push(step('A.4','**The Lucas reaction with models:** Use your 2-methyl-2-propanol model and build a model of HCl. Remove the –OH group from the carbon. Join it to the H from HCl to make a water molecule (H_{2}O). Attach the Cl to the carbon that held the –OH. You now have t-butyl chloride (2-chloro-2-methylpropane) and water. Write the equation on your report sheet. **Instructor check:** show your instructor the models before and after the swap, and point out the alkyl chloride and the water.'));
c.push(step('A.5','Using your models from A.3, predict which of the four C_{4}H_{10}O alcohols would turn cloudy fastest in the Lucas test and which would show no change at room temperature. Record your prediction.'));
c.push(h3('B. Properties of Alcohols and Phenols'));
c.push(materials('6 test tubes, test tube rack, stirring rod, pH paper, distilled water, plastic pipet, ethanol, 2-propanol, t-butyl alcohol (2-methyl-2-propanol), cyclohexanol, salicylic acid (solid), spatula, and an unknown (record its letter)'));
c.push(step('B.1','**Odor:** Label six test tubes and place 5 drops of each alcohol and of your unknown in its own tube, and a small spatula tip (about the size of a grain of rice) of salicylic acid in the sixth tube. Take a breath of fresh air first, then gently waft the vapors from the top of each tube toward you. Describe each odor (and the appearance of the salicylic acid).'));
c.push(step('B.2','**Solubility in water:** Add 2 mL of water (measure with a plastic pipet, or about 2 finger-widths in the tube) to each tube. Shake gently by tapping the bottom of the tube. A clear solution with no separate layers means the sample is **soluble**; a cloudy mixture or two layers means it is **insoluble**. Record your observations.'));
c.push(step('B.3','**Acidity:** Dip a clean stirring rod into the mixture in each tube and touch a drop to a piece of pH paper. Compare the color with the chart on the container and record the pH. Rinse and dry the stirring rod between samples. Empty the tubes into the non-halogenated organic waste container.'));
c.push(h3('C. Lucas Test: Classifying Alcohols'));
c.push(materials('7 **dry** test tubes (13 × 100 mm or larger), test tube rack, clock or timer, 10-mL graduated cylinder or plastic pipet, ethanol, 2-propanol, 2-butanol, t-butyl alcohol (2-methyl-2-propanol), cyclohexanol, 0.15% salicylic acid solution, unknown, Lucas reagent (ZnCl_{2} in concentrated HCl, in the fume hood); for the warm water bath: 250-mL beaker, hot plate, thermometer, test tube holder'));
c.push(caution('The Lucas reagent contains concentrated HCl. It is corrosive and gives off HCl fumes. Wear gloves and goggles, and do all of Part C in the fume hood.'));
c.push(step('C.1','**Set up a warm water bath first:** in the fume hood, put about 150 mL of tap water in a 250-mL beaker on a hot plate and heat it to 50–60 °C, checking with a thermometer. Keep it at that temperature while you work; you will use it only for tubes that react slowly (C.2). Then, in the fume hood, label seven **dry** test tubes and place 5 drops of each alcohol, the salicylic acid solution, and your unknown in its own tube. Add 2 mL (about 40 drops) of Lucas reagent to the first tube, note the time, and mix by gently tapping the bottom of the tube. Repeat for each tube. Watch the tubes at room temperature for up to 10 minutes. For each tube, record whether it stays **clear**, turns **cloudy**, or forms **two layers**, and the **time** (in minutes) when the cloudiness first appears. If a tube shows no change in 10 minutes, record “no change.”'));
c.push(step('C.2','**Only for tubes that are still clear after 10 minutes:** using a test tube holder, place them in your 50–60 °C water bath for 5 minutes. Record any change. Then empty all seven tubes, and the first water rinse of each, into the **halogenated waste container**.'));
c.push(step('C.3','Classify each compound as a primary (1°), secondary (2°), or tertiary (3°) alcohol, or as a phenol.'));
c.push(step('C.4','For each alcohol that turned cloudy or formed two layers, draw the skeletal or condensed formula of the alkyl chloride that formed (replace the –OH with –Cl). If there was no change, write “No Reaction” (NR).'));
c.push(h3('D. Iron(III) Chloride Test'));
c.push(materials('6 test tubes, test tube rack, stirring rod, distilled water (for rinsing), ethanol, 2-propanol, t-butyl alcohol (2-methyl-2-propanol), cyclohexanol, 0.15% salicylic acid solution, unknown, 1% FeCl_{3} solution'));
c.push(step('D.1','Label six test tubes and place 5 drops of each alcohol, the salicylic acid solution, and your unknown in its own tube. Add 5 drops of 1% FeCl_{3} solution to each tube and stir. Record the color. A **violet or purple** color is positive for a phenol; a **yellow** color (the color of FeCl_{3}) is negative. Empty the tubes into the non-halogenated organic waste container.'));
c.push(h3('E. Identification of the Unknown'));
c.push(step('E.1','Summarize the results for your unknown from B.1–B.3, C.1 (and C.2 if done), and D.1, and state what each result tells you.'));
c.push(step('E.2','Identify your unknown as one of the five compounds tested, and draw its structure.'));
// Pre-lab
c.push(h2('Pre-Lab Questions',{pageBreak:true,before:0}));
const PL=[['1.','What two chemicals make up the Lucas reagent? What hazard does the reagent have, why must Part C be done in the fume hood, and what should you do if a drop gets on your skin?',862],
 ['2.','Where do the Part C test tubes go at the end of lab? Why do they go in that container and not in the non-halogenated organic waste, and why can they never be poured down the sink?',862],
 ['3.','Phenol itself is not used in this lab. Which compound represents the phenols, what is its main hazard, and why will its solution have a lower pH than a solution of a simple phenol?',862],
 ['4.','Predict the Lucas test result (cloudy almost at once, cloudy in several minutes, or no change) for: (a) 1-propanol (b) 2-pentanol (c) 2-methyl-2-butanol. Draw the alkyl chloride for each one that reacts, and explain your prediction for (c).',1150],
 ['5.','In B.2, a sample gives two separate layers with water. Is it soluble or insoluble? Which of the five compounds in this lab would you expect to do this, and why?',862],
 ['6.','Describe a positive and a negative result for the FeCl_{3} test. Which of the five compounds should give a positive result?',862],
 ['7.','An unknown dissolves in water, turns cloudy in the Lucas reagent within one minute, and stays yellow with FeCl_{3}. Which of the five compounds is it? Why would the Lucas test not work for an alcohol with eight carbons?',0]];
PL.forEach(([a,b,sp])=>{c.push(step(a,b,{left:360,after:0})); if(sp)c.push(space(sp));});
// Report
c.push(h2('Report Sheet',{pageBreak:true,before:0,rule:true}));
c.push(...nameBlock());
c.push(h3('A. Structures of Alcohols and Phenols',{before:120}));
c.push(table([4680,4680],[['**A.1** Ethanol (skeletal formula)','**A.1** 2-Propanol (skeletal formula)'],['**A.2** Classification:','**A.2** Classification:'],
 ['**A.1** t-Butyl alcohol (2-methyl-2-propanol)','**A.1** Salicylic acid (circle the phenol –OH)'],['**A.2** Classification:',{t:'(phenols are not classified as 1°, 2°, or 3°)',shade:'F2F2F2'}]],{header:0,h:[1380,414,1380,414]}));
c.push(h4('A.3 Isomers of C_{4}H_{10}O'));
c.push(table([2600,4960,1800],[['Name','Condensed or skeletal formula','1°, 2°, or 3°?'],...['1-Butanol','2-Butanol','2-Methyl-1-propanol','2-Methyl-2-propanol'].map(n=>[n,'',''])],{h:1000,firstColBold:true}));
c.push(space(120));
c.push(checkRow('A.3','four C_{4}H_{10}O alcohol models shown; the C–OH carbon in each identified and classified as 1°, 2°, or 3°'));
c.push(h4('A.4 The Lucas reaction with models'));
c.push(table([9360],[['Draw the equation: 2-methyl-2-propanol + HCl → t-butyl chloride + H_{2}O (show the structures)'],['']],{h:[414,1500]}));
c.push(space(120));
c.push(checkRow('A.4','–OH swapped for –Cl on the 2-methyl-2-propanol model; water formed from the –OH and the H of HCl'));
c.push(P('**A.5** Fastest to turn cloudy: ______________________   No change at room temperature: ______________________',{before:200,after:120}));
c.push(h3('B. Properties of Alcohols and Phenols',{pageBreak:true,before:0}));
const names=['Ethanol','2-Propanol','t-Butyl alcohol','Cyclohexanol','Salicylic acid','Unknown ____'];
const namesC=['Ethanol','2-Propanol','2-Butanol','t-Butyl alcohol','Cyclohexanol','Salicylic acid','Unknown ____'];
c.push(table([2160,2800,2400,2000],[['Compound','B.1 Odor','B.2 Soluble in water?','B.3 pH'],...names.map(n=>[n,'','',''])],{h:515,firstColBold:true}));
c.push(h3('C. Lucas Test: Classifying Alcohols'));
c.push(table([1700,2150,1550,1500,2460],[['Compound','C.1 Clear, cloudy, or two layers? Time (min)','C.2 After warming (if done)','C.3 Type (1°, 2°, 3°, or phenol)','C.4 Alkyl chloride formed (or NR)'],...namesC.map(n=>[n,'','','',''])],{h:966,firstColBold:true}));
c.push(h3('D. Iron(III) Chloride Test',{pageBreak:true,before:0}));
c.push(table([2160,3600,3600],[['Compound','D.1 Color with FeCl_{3}','Positive or negative?'],...names.map(n=>[n,'',''])],{h:442,firstColBold:true}));
c.push(h3('E. Identification of the Unknown'));
c.push(P('**Unknown letter:** ________',{after:110}));
c.push(table([2600,3380,3380],[['E.1 Test','Result for the unknown','What this result tells you'],['B.1 Odor','',''],['B.2 Soluble in water?','',''],['B.3 pH','',''],['C.1–C.2 Lucas test','',''],['D.1 FeCl_{3}','','']],{h:700,firstColBold:true}));
c.push(space(110));
c.push(table([3200,6160],[['E.2 Name of unknown','E.2 Structure'],['','']],{h:1300}));
// Questions
c.push(h2('Questions and Problems',{pageBreak:true,before:0}));
c.push(step('Q.1','Draw the skeletal structure of each alcohol and classify it as 1°, 2°, or 3°.',{left:0,after:88}));
c.push(table([4680,4680],[['1-Pentanol','3-Pentanol'],['Cycloheptanol','1-Methylcyclopentanol']],{header:0,h:1000}));
c.push(step('Q.2','Use your textbook or a reliable online source to draw the structures of thymol, menthol, and resorcinol (rings may be drawn as skeletal rings), and give one use of each. Circle the –OH group(s) in each structure and state whether each compound is a phenol or an alcohol. Classify any alcohol as 1°, 2°, or 3°. If the compounds are available in lab, carefully waft and describe their odors.',{left:0,after:0}));
c.push(space(1000));
c.push(step('Q.3','For each alcohol below, predict the Lucas test result at room temperature (cloudy almost at once, cloudy in several minutes, or no change) and draw the alkyl chloride that forms. If no reaction occurs at room temperature, write NR. Use your Part C results to guide your thinking.',{left:0,after:0,keepNext:true}));
c.push(...img(F+'fig4_qlucas.png',480,240));
c.push(step('Q.4','Explain how your Part C and Part D results together distinguish among a 2° alcohol (cyclohexanol), a 3° alcohol (t-butyl alcohol), and a phenol (salicylic acid).',{left:0,after:0}));
c.push(space(1500));
c.push(step('Q.5','Use the word **carbocation** to explain why 2-methyl-2-propanol reacts in the Lucas test much faster than 1-butanol, even though both have the formula C_{4}H_{10}O.',{left:0,after:0}));
c.push(space(1800));

build(c,OUT).then(()=>console.log('wrote',OUT));
