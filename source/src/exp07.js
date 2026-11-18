const L=require('../lablib.js'); const {checkRow,P,title,h2,h3,h4,bullet,step,sub,materials,note,caution,img,table,space,nameBlock,build,W,D}=L;
const F=process.argv[2]+'/'; const OUT=process.argv[3];
const {AlignmentType}=D;
const c=[];
c.push(title('Experiment #7: Amines and Amides'));
c.push(h3('Goals',{before:0}));
['Draw condensed structural formulas of amines and classify them as primary, secondary, tertiary, or quaternary.',
 'Use molecular models to build and classify the four amine isomers of C_{3}H_{9}N, and to show how an amine acts as a base by accepting H^{+} to form an ammonium ion.',
 'Observe the odor, water solubility, and basicity of amines.',
 'Convert amines to amine salts with HCl and explain the changes in solubility and odor.',
 'Write equations for the formation of an amide and for its hydrolysis in acid and in base.',
 'Use odor and litmus paper to detect the products of amide hydrolysis.'].forEach(s=>c.push(bullet(s)));
c.push(h2('Introduction'));
c.push(P('Amines and amides are the two main families of organic compounds that contain nitrogen. Amines are found in many drugs, in neurotransmitters, and in the smell of spoiled fish. The amide bond is the bond that links amino acids together in every protein (Experiment #13).'));
// A
c.push(h3('A. Classification and Structure of Amines'));
c.push(P('An **amine** is a derivative of ammonia (NH_{3}) in which one or more hydrogen atoms have been replaced by carbon groups (alkyl groups or aromatic rings). Amines are classified by the **number of carbon groups bonded to the nitrogen atom**, not by the carbon the nitrogen is attached to (this is different from the way alcohols were classified in Experiment #4):'));
c.push(bullet('**Primary (1°):** one carbon group on N (R–NH_{2})'));
c.push(bullet('**Secondary (2°):** two carbon groups on N (R_{2}NH)'));
c.push(bullet('**Tertiary (3°):** three carbon groups on N (R_{3}N)'));
c.push(bullet('**Quaternary (4°) ammonium ion:** four carbon groups on N. The nitrogen has four bonds and no lone pair, so it carries a positive charge (R_{4}N^{+}).'));
c.push(P('Ammonia itself has no carbon groups and is not an amine. When the nitrogen is bonded directly to a benzene ring, the compound is an **aromatic amine**. The simplest one is **aniline** (C_{6}H_{5}–NH_{2}), a primary amine. In an amine name, a carbon group on the nitrogen of aniline is shown with the prefix *N*-, so *N*-methylaniline (C_{6}H_{5}–NH–CH_{3}) has one methyl group and one benzene ring on N and is a secondary amine. Amines with the same molecular formula (isomers) can belong to different classes; in A.3 you will build the four amines with the formula C_{3}H_{9}N and classify each one. Figure 1 shows ammonia and an example of each class of amine.',{keepNext:true}));
c.push(...img(F+'fig7_1.png',624,127,'**Figure 1:** Ammonia and the classes of amines. Carbon groups bonded to nitrogen are shown in blue.'));
c.push(P('Many physiologically active compounds and medications contain amine groups (Figure 2).',{keepNext:true}));
c.push(...img(F+'fig7_2.png',560,157,'**Figure 2:** Amines in medicine and in the body. Each N atom is classified by counting the carbon groups bonded to it.'));
// B
c.push(h3('B. Odor, Solubility, and Basicity of Amines'));
c.push(P('**Odor:** Amines with small carbon groups are volatile and have strong, unpleasant odors. Trimethylamine is responsible for the smell of fish, and the diamines putrescine and cadaverine give rotting flesh its odor. Never smell a chemical directly: **waft** the vapor toward your nose with your hand.'));
c.push(P('**Solubility in water:** The N–H bonds and the lone pair on nitrogen let amines form hydrogen bonds with water. Amines with up to about **six carbon atoms** are soluble or partly soluble in water. A tertiary amine has no N–H bond, but water molecules can still hydrogen bond to its lone pair. As the carbon part of the molecule gets larger, the amine becomes less soluble. A benzene ring is a large nonpolar group, so aniline is only slightly soluble, and *N*-methylaniline is even less soluble; an insoluble amine looks cloudy or forms an oily layer.'));
c.push(P('**Basicity:** The nitrogen atom of an amine has a **lone pair (unshared pair) of electrons** that can accept a proton (H^{+}). An amine is therefore a **weak base**, like ammonia. In water, a small fraction of the amine molecules take an H^{+} from water, forming an alkylammonium ion and a hydroxide ion (Figure 3a). In A.4 you will model this with a model kit by bonding an H^{+} to the lone pair on N. The OH^{–} ions make the solution basic (pH above 7). Amines with only alkyl groups usually give pH 11–12. Aromatic amines are much weaker bases (pH about 8–9 or lower), because the lone pair on N is partly shared with the benzene ring and is less available to accept H^{+}.'));
c.push(P('**pH paper and litmus paper:** pH paper changes to a color that you match to the chart on the container to read the pH. Litmus paper only tells you whether a solution is acidic or basic: **blue litmus turns red in acid**, and **red litmus turns blue in base**. A color that does not change is a negative result.'));
// C
c.push(h3('C. Amine Salts'));
c.push(P('Because amines are bases, they react with acids such as HCl. The lone pair on N bonds to H^{+}, forming an alkylammonium ion, and the chloride ion is its partner (Figure 3b). The product is an ionic compound called an **amine salt**, named by changing *-amine* to *-ammonium* (or *aniline* to *anilinium*) and adding the name of the anion: methylammonium chloride, anilinium chloride, triethylammonium chloride. Amine salts are:'));
c.push(bullet('**much more soluble in water** than the amines they come from, because they are ionic. An amine that formed an oily layer or cloudy mixture dissolves to give a clear solution when enough acid is added.'));
c.push(bullet('**odorless**, because ions are not volatile and do not escape into the air. This is why lemon juice (citric acid) or vinegar removes the smell of fish.'));
c.push(P('Many amine drugs are sold as salts, such as phenylephrine hydrochloride, so that they dissolve in body fluids and keep longer. Adding a strong base such as NaOH reverses the reaction and gives back the free amine.',{keepNext:true}));
c.push(...img(F+'fig7_3.png',500,257,'**Figure 3:** (a) An amine accepts H^{+} from water, so its solution is basic. (b) An amine reacts with HCl to form an amine salt.'));
// D
c.push(h3('D. Amides'));
c.push(P('An **amide** contains a carbonyl group (C=O) bonded to a nitrogen atom (Figure 4). The nitrogen may carry hydrogen atoms or carbon groups. Amides are named from the carboxylic acid by replacing *-ic acid* (or *-oic acid*) with *-amide*: acetic acid gives **acetamide**, and benzoic acid gives **benzamide**. A carbon group on the nitrogen is shown with *N*-, as in *N*-methylacetamide.'));
c.push(P('Even though amides contain nitrogen, **amides are not bases**. The lone pair on the amide nitrogen is shared with the neighboring C=O group, so it does not accept H^{+}, and amide solutions are close to neutral. Amides with N–H bonds form strong hydrogen bonds, so most simple amides are solids at room temperature with little or no odor. Small amides such as acetamide are very soluble in water. Benzamide, with its nonpolar benzene ring, is only slightly soluble in cold water, but more of it dissolves in hot water.'));
c.push(P('**Amidation:** An amide forms when a carboxylic acid reacts with ammonia or with a primary or secondary amine. The –OH of the acid and an H from the nitrogen are removed as **water**, and the carbonyl carbon bonds to the nitrogen (Figure 4). This is similar to esterification (Experiment #6), with an amine in place of the alcohol. Mixing the acid and amine at room temperature only forms a salt; strong heating is needed to drive off the water and form the amide. A tertiary amine has no H on N, so it cannot form an amide.',{keepNext:true}));
c.push(...img(F+'fig7_4.png',600,230,'**Figure 4:** The amide group, three amides, and the formation of acetamide from acetic acid and ammonia.'));
c.push(h4('Hydrolysis of an Amide'));
c.push(P('**Hydrolysis** is the reverse of amidation: water splits the amide bond, giving back the carboxylic acid and the amine (or ammonia). Amides are very stable, so the reaction needs heat and either an acid or a base (Figure 5). The products are different in acid and in base, and **the procedure uses those differences as the tests for hydrolysis:**'));
c.push(bullet('**Acid hydrolysis (D.4):** The products are the **carboxylic acid** and an **ammonium salt**. The ammonia or amine formed is a base, so it immediately reacts with HCl to form NH_{4}^{+}Cl^{–}, which stays dissolved and has no odor. Acetamide gives acetic acid, which has the odor of vinegar. Benzamide gives benzoic acid, which has little odor and is only slightly soluble in water, so white crystals may form as the tube cools. Benzamide hydrolyzes slowly, however, and unreacted benzamide is also only slightly soluble in cold water, so crystals alone do not prove that hydrolysis occurred.'));
c.push(bullet('**Base hydrolysis (D.5):** The products are the **carboxylate salt** (sodium acetate or sodium benzoate, which have no odor) and **ammonia** (or the amine). The base keeps the ammonia from being protonated, so NH_{3} gas escapes from the hot solution. A **positive test** is the odor of ammonia and a piece of **moist red litmus paper held above the tube turning blue**. The litmus must not touch the tube or the liquid: NaOH would turn it blue even if no ammonia formed.'));
c.push(...img(F+'fig7_5.png',540,278,'**Figure 5:** Hydrolysis of acetamide in acid and in base. Benzamide reacts the same way, giving benzoic acid or sodium benzoate.'));
// Hazards
c.push(h3('Hazards and Safety Instructions'));
c.push(P('Wear safety goggles at all times. Wear gloves when handling the amines, the amides, 10% HCl, and 10% NaOH.',{after:100}));
c.push(bullet('**Toxic Aromatic Amines:** Aniline and *N*-methylaniline are toxic if swallowed, inhaled, or **absorbed through the skin**, and they can reduce the blood’s ability to carry oxygen. Aniline is a suspected carcinogen. Dispense them in the fume hood, wear gloves, and wash your hands after lab. If any gets on your skin, wash it off with soap and water right away and tell your instructor.'));
c.push(bullet('**Flammable and Corrosive Amine:** Triethylamine is highly flammable and corrosive to skin and eyes, and its vapor is strongly irritating. Dispense it in the fume hood and keep it away from hot plates.'));
c.push(bullet('**Odors:** Never put your nose over a test tube, especially a hot one. To check an odor, take a breath of fresh air first, then gently waft the vapor from the top of the tube toward your nose with your hand. Waft aniline and *N*-methylaniline only inside the fume hood.'));
c.push(bullet('**Amides:** Acetamide is a suspected carcinogen, and benzamide is harmful if swallowed and a suspected mutagen. Use only a small amount (the tip of a spatula), avoid making dust, and wear gloves.'));
c.push(bullet('**Corrosive Acids and Bases:** 10% hydrochloric acid (HCl) and 10% sodium hydroxide (NaOH) cause burns and are especially damaging to the eyes. If either touches your skin or eyes, rinse with water for 15 minutes and tell your instructor.'));
c.push(bullet('**Ammonia Vapor:** Base hydrolysis (D.5) releases ammonia gas, which irritates the eyes, nose, and lungs. Heat the tubes in the fume hood.'));
c.push(bullet('**Thermal Hazards:** The boiling water bath can cause burns and steam burns. Handle hot test tubes with a test tube holder, point the open end away from everyone, and check glassware for cracks before heating.'));
c.push(h3('Waste Instructions'));
c.push(bullet('**Non-halogenated organic waste container (or as your instructor directs):** the three test tubes from Parts B and C (amines, water, and HCl); the four test tubes from D.4 and D.5 (amide hydrolysis mixtures), after they have cooled to room temperature; and the first rinse of each test tube. Pour any leftover amine here; never return it to the stock bottle.'));
c.push(bullet('**Later rinses** (after the first) may go down the drain with plenty of water.'));
c.push(bullet('**Trash:** used litmus paper, pH paper, and gloves.'));
// Procedure
c.push(h2('Procedure',{pageBreak:true,before:0}));
c.push(note('Instructor Notes:','At the beginning of lab, start a boiling water bath in the fume hood (a 250-mL beaker about half full of water on a hot plate) and monitor it throughout the lab. Place the dropper bottles of aniline, *N*-methylaniline, and triethylamine in the fume hood. Give each pair of students one model kit with at least 6 carbon atoms, 18 hydrogen atoms, 2 nitrogen atoms, 2 oxygen atoms, and enough black bond pieces for the double bonds (aniline’s benzene ring and the C=O in Part D), so that two C_{3}H_{9}N isomers can be on the bench at once in A.3. The Snatoms nitrogen atom has three bonding sites, so in A.4 students balance an H atom on top of the nitrogen to show the fourth bond of the ammonium ion. There are four instructor checks (A.3, A.4, D.1, and D.3); initial each group’s boxes on the report sheet.'));
c.push(h3('A. Classification and Structure of Amines'));
c.push(materials('Molecular model kit (one per pair; see Instructor Notes)'));
c.push(step('A.1','Use a model kit to build models of ammonia, methylamine, dimethylamine, trimethylamine, and aniline. Write the condensed structural formula of each model on your report sheet.'));
c.push(step('A.2','Classify each compound as a primary (1°), secondary (2°), or tertiary (3°) amine, a quaternary (4°) ammonium ion, or not an amine.'));
c.push(step('A.3','**Isomers of C_{3}H_{9}N.** Four amines have the molecular formula C_{3}H_{9}N: **propylamine**, **isopropylamine**, **ethylmethylamine**, and **trimethylamine** (which you built in A.1). Each partner builds one isomer at a time from 3 C, 9 H, and 1 N atoms, so two isomers are on the bench together; then take them apart and build the other two. For each isomer, draw the condensed structural formula on your report sheet, count the carbon groups bonded to N, and classify it as 1°, 2°, or 3°. **Instructor check:** show your instructor your isopropylamine and ethylmethylamine models side by side, and explain how you classified each one.'));
c.push(step('A.4','**An amine acting as a base.** Build a model of methylamine. Its nitrogen has three bonds and one lone pair. The Snatoms nitrogen atom has only three bonding sites, because the lone pair is not a piece. Take one H atom to stand for H^{+} from an acid and **balance it on top of the nitrogen**, where the lone pair would be, to show the new N–H bond. Count the bonds to N, decide the charge on the new ion, and name it. On your report sheet, write the equation for the reaction of methylamine with HCl and name the amine salt. Then use your model to predict how adding HCl in C.1 will change the solubility and the odor of the amines. **Instructor check:** show your instructor how the lone pair on N accepts H^{+}, and explain your prediction for C.1. Then take apart your models and return the pieces to the kit.'));
c.push(h3('B. Odor, Solubility, and Basicity of Amines'));
c.push(materials('Aniline, *N*-methylaniline, triethylamine (dropper bottles in the fume hood), 3 test tubes, test tube rack, 10-mL graduated cylinder, stirring rod, pH paper, gloves'));
c.push(step('B.1','Label three test tubes 1, 2, and 3. **In the fume hood,** add 5 drops of aniline to tube 1, 5 drops of *N*-methylaniline to tube 2, and 5 drops of triethylamine to tube 3. On your report sheet, draw the condensed structural formula of each amine and classify it (1°, 2°, or 3°).'));
c.push(step('B.2','With the tubes still in the fume hood, cautiously note the odor of each amine: take a breath of fresh air first, then waft the vapor toward you with your hand. Record your observations.'));
c.push(step('B.3','Keep the tubes in the fume hood for Parts B and C. Add 2 mL of water to each test tube and stir. Rinse and dry the stirring rod between tubes. Record whether each amine is soluble (clear solution), slightly soluble (cloudy), or insoluble (separate oily layer or drops).'));
c.push(step('B.4','Dip the stirring rod into each mixture and touch it to a piece of pH paper. Compare the color with the chart on the container and record the pH. Rinse and dry the rod between tubes. **Save the three test tubes for Part C.**'));
c.push(h3('C. Amine Salts'));
c.push(materials('The three test tubes from Part B, 10% HCl, blue litmus paper, stirring rod'));
c.push(step('C.1','Add 10% HCl to each tube, one drop at a time, stirring after each drop, until a drop of the solution on the stirring rod turns blue litmus paper red. Record any change in the solubility of each amine. Waft, and record any change in odor. Compare your observations with your prediction from A.4.'));
c.push(step('C.2','On your report sheet, write a balanced equation for the reaction of each amine (aniline, *N*-methylaniline, and triethylamine) with HCl. Name each amine salt.'));
c.push(h3('D. Amides'));
c.push(materials('Molecular model kit, acetamide, benzamide, 4 test tubes, test tube rack, spatula, 10-mL graduated cylinder, 10% HCl, 10% NaOH, boiling water bath (250-mL beaker, hot plate) in the fume hood, test tube holder, red litmus paper'));
c.push(step('D.1','Build models of acetic acid and ammonia. Use the models to show how acetamide and water form: remove the –OH from the acid and an H from the ammonia, and join the carbonyl carbon to the nitrogen. **Instructor check:** show your models to your instructor. Write the equation for the amidation reaction on your report sheet.'));
c.push(step('D.2','Label four test tubes 1–4. Place a small amount (the tip of a spatula) of acetamide in tubes 1 and 2 and the same amount of benzamide in tubes 3 and 4. Cautiously note the odor of each amide by wafting. Add 2 mL of water to each tube and stir or shake gently. Record the solubility of acetamide and benzamide in water. **Save all four tubes for D.4 and D.5.**'));
c.push(h4('Hydrolysis of an Amide'));
c.push(step('D.3','Build a model of acetamide and a model of water. Use them to show the hydrolysis of acetamide: break the C–N bond, add –OH to the carbonyl carbon, and add H to the nitrogen. **Instructor check:** show your instructor the hydrolysis with your models. On your report sheet, write the equation for the hydrolysis of acetamide in acid (with HCl). Remember that in acid the ammonia formed reacts with HCl.'));
c.push(step('D.4','**Acid hydrolysis:** Add 2 mL of 10% HCl to tube 1 (acetamide) and tube 3 (benzamide). Using a test tube holder, place both tubes in the boiling water bath in the fume hood and heat for 5 minutes. Remove the tubes and cautiously waft the vapor from each. Record the odor and any other observations, such as crystals forming as the benzamide tube cools (crystals may be unreacted benzamide, so do not rely on them alone).'));
c.push(step('D.5','**Base hydrolysis:** Add 2 mL of 10% NaOH to tube 2 (acetamide) and tube 4 (benzamide), and place both tubes in the boiling water bath in the fume hood for 5 minutes. While the tubes are still in the hot bath, use a fresh strip of red litmus paper for each tube: moisten one end with distilled water and, holding it by the dry end, hold it just above the mouth of the tube for about 30 seconds. **Do not let the paper touch the tube or the liquid.** Record any change in the color of the litmus paper, then cautiously waft and record any odor. On your report sheet, write the equation for the hydrolysis of acetamide in base (with NaOH).'));
// Pre-lab
c.push(h2('Pre-Lab Questions',{pageBreak:true,before:0}));
const PL=[['1.','Aniline and *N*-methylaniline are dispensed in the fume hood and handled with gloves. What hazard makes gloves especially important for these two amines? What should you do if one of them gets on your skin?',603],
 ['2.','Describe how to safely note the odor of a sample in B.2 and D.4. Why should you never put your nose directly over a test tube?',525],
 ['3.','Write the equation for the reaction of triethylamine, (CH_{3}CH_{2})_{3}N, with water. Would you expect the pH in B.4 to be above or below 7? Would you expect aniline to give a higher or lower pH than triethylamine? Explain.',787],
 ['4.','In C.1, HCl is added until blue litmus paper turns red. What does this color change tell you? Predict how the solubility and the odor of *N*-methylaniline change, and explain why.',708],
 ['5.','In D.5, a piece of moist red litmus paper is held above the tube without touching it. What gas turns it blue? Why would touching the liquid give a false positive result?',603],
 ['6.','Acetamide is heated with HCl in D.4 and with NaOH in D.5. In which tube do you expect to smell vinegar, and in which tube do you expect to smell ammonia? Explain why no ammonia odor is expected in acid.',708],
 ['7.','Where does each of the following go at the end of lab? (a) the test tubes from Part C (b) the hot test tubes from D.4 and D.5 (c) used litmus paper',0]];
PL.forEach(([a,b,sp])=>{c.push(step(a,b,{left:360,after:0})); if(sp)c.push(space(sp));});
// Report
c.push(h2('Report Sheet',{pageBreak:true,before:0,rule:true}));
c.push(...nameBlock());
c.push(h3('A. Classification and Structure of Amines',{before:120}));
c.push(table([2300,4560,2500],[['Compound','A.1 Condensed structural formula','A.2 Classification (1°, 2°, 3°, 4°, or not an amine)'],
 ['Ammonia','',''],['Methylamine','',''],['Dimethylamine','',''],['Trimethylamine','',''],['Aniline','','']],{h:800,firstColBold:true}));
c.push(h3('A (continued). Model Demonstrations',{pageBreak:true,before:0}));
c.push(table([2300,4060,1500,1500],[['A.3 Isomer of C_{3}H_{9}N','Condensed structural formula','Number of carbon groups on N','1°, 2°, or 3°?'],
 ['Propylamine','','',''],['Isopropylamine','','',''],['Ethylmethylamine','','',''],['Trimethylamine','','','']],{h:900,firstColBold:true}));
c.push(P('**A.3** Explain how you classified isopropylamine. Does it matter which carbon atom the N is bonded to?',{before:120,after:800}));
c.push(checkRow('A.3','C_{3}H_{9}N isomer models shown and classified (1°, 2°, 3°)'));
c.push(space(200));
c.push(table([9360],[['**A.4** Equation for the reaction of methylamine with HCl. Draw the ion formed, show its charge, and name the amine salt.']],{header:0,h:1400}));
c.push(P('**A.4** Prediction: how will adding HCl in C.1 change the solubility and the odor of the amines? Explain using your model.',{before:120,after:900}));
c.push(checkRow('A.4','amine shown accepting H^{+} at the N lone pair to form an ammonium ion; C.1 prediction explained'));
c.push(h3('B. Odor, Solubility, and Basicity of Amines',{pageBreak:true,before:0}));
c.push(table([2160,2400,2400,2400],[['','Tube 1: Aniline','Tube 2: *N*-Methylaniline','Tube 3: Triethylamine'],
 ['**B.1** Condensed structural formula','','',''],['**B.1** Classification','','',''],['**B.2** Odor','','',''],['**B.3** Solubility in water','','',''],['**B.4** pH','','','']],{h:[0,1150,520,650,650,520]}));
c.push(h3('C. Amine Salts'));
c.push(table([2160,2400,2400,2400],[['C.1','Tube 1: Aniline','Tube 2: *N*-Methylaniline','Tube 3: Triethylamine'],
 ['Solubility after HCl','','',''],['Odor after HCl','','','']],{h:650}));
c.push(P('**C.2** Equations for the reactions with HCl (name each amine salt):',{before:200,after:100,keepNext:true}));
c.push(table([2160,7200],[['Aniline',''],['*N*-Methylaniline',''],['Triethylamine','']],{header:0,h:1000,firstColBold:true}));
c.push(P('**C.1** Did your observations agree with your prediction in A.4? Explain.',{before:200,after:800}));
c.push(h3('D. Amides',{pageBreak:true,before:0}));
c.push(table([9360],[['**D.1** Equation for the formation of acetamide from acetic acid and ammonia']],{header:0,h:820}));
c.push(checkRow('D.1','amidation shown with models (–OH and H removed as water, C–N bond formed)'));
c.push(space(200));
c.push(table([2960,3200,3200],[['D.2','Acetamide (tubes 1 and 2)','Benzamide (tubes 3 and 4)'],['Odor','',''],['Solubility in water','','']],{h:750,firstColBold:true}));
c.push(space(200));
c.push(table([9360],[['**D.3** Equation for the hydrolysis of acetamide in acid (HCl)']],{header:0,h:820}));
c.push(checkRow('D.3','hydrolysis of acetamide shown with models (C–N bond broken, water added)'));
c.push(space(200));
c.push(table([2960,3200,3200],[['','Acetamide','Benzamide'],['**D.4** Odor and observations after heating with HCl','',''],['**D.5** Change in color of moist red litmus paper','',''],['**D.5** Odor after heating with NaOH','','']],{h:820}));
c.push(space(200));
c.push(table([9360],[['**D.5** Equation for the hydrolysis of acetamide in base (NaOH)']],{header:0,h:820}));
// Questions
c.push(h2('Questions and Problems',{pageBreak:true,before:0}));
const Q=[['Q.1','Classify each amine nitrogen in phenylephrine (Neo-Synephrine) and methamphetamine in Figure 2 as 1°, 2°, or 3°. Classify the amine group on the side chain of histamine.'],
 ['Q.2','What type of compound causes the “fishy” odor of fish? Name one example.'],
 ['Q.3','Explain why amines are basic but amides are not.'],
 ['Q.4','Explain how lemon juice removes the odor of fish. Use your observations from C.1 in your answer.'],
 ['Q.5','Write the equation for the reaction of butylamine, CH_{3}CH_{2}CH_{2}CH_{2}NH_{2}, with HCl, and name the product.'],
 ['Q.6','Write the equation for the hydrolysis of benzamide in base (NaOH). Which product turned the red litmus paper blue in D.5?'],
 ['Q.7','You have three unknowns: a carboxylic acid, an ester, and an amine. Using your observations from this lab and Experiment #6, describe how you would identify each one (for example, with odor and pH paper).']];
Q.forEach(([a,b],i)=>{c.push(step(a,b,{left:0,after:0})); if(i<Q.length-1)c.push(space(i==1?800:1150));});
build(c,OUT).then(()=>console.log('wrote',OUT));
