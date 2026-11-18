const L=require('../lablib.js'); const {P,title,h2,h3,h4,bullet,step,sub,materials,note,caution,img,table,space,nameBlock,build,W,D}=L;
const F=process.argv[2]+'/'; const OUT=process.argv[3]; const {AlignmentType}=D;
const eqP=(s,o={})=>P(s,{align:AlignmentType.CENTER,before:80,after:o.after??160,keepNext:o.keepNext,run:o.size?{size:o.size}:{}});
const c=[];
c.push(title('Experiment #8: Tests for Carbohydrates'));
c.push(h3('Goals',{before:0}));
['Observe physical and chemical properties of common carbohydrates.','Use chemical tests to distinguish between monosaccharides, disaccharides, and polysaccharides, and between aldoses and ketoses.','Identify an unknown carbohydrate.','Relate the process of digestion to the hydrolysis of carbohydrates.'].forEach(s=>c.push(bullet(s)));
c.push(h2('Introduction'));
c.push(P('The structures of monosaccharides, disaccharides, and polysaccharides are covered in Workshop: Types of Carbohydrates (after Experiment #15). This experiment uses chemical tests to tell those types apart. Here is a short recap of the structural features the tests detect:',{after:100}));
c.push(bullet('An **aldose** has an aldehyde group (–CHO) at C1; a **ketose** has a ketone group (C=O) in the chain, usually at C2. Glucose and galactose are aldoses; fructose is a ketose.'));
c.push(bullet('In water, most monosaccharide molecules are rings. The former carbonyl carbon is the **anomeric carbon**, and the –OH on it is a **hemiacetal** –OH. A ring with a free hemiacetal –OH can open again to the chain form, which has a reactive carbonyl group.'));
c.push(bullet('A **glycosidic bond** joins two sugar units. When an anomeric carbon is used in a glycosidic bond, that ring is locked closed. Water, with an acid or enzyme catalyst, can break a glycosidic bond (**hydrolysis**).'));
c.push(bullet('Starch is a polysaccharide made of glucose. Its unbranched part, **amylose**, coils into a helix; its branched part, **amylopectin**, has only short coiled sections.'));
c.push(P('Table 1 lists the carbohydrates in this experiment. See Workshop: Types of Carbohydrates for their structures.',{before:100,keepNext:true}));
c.push(P('**Table 1: Carbohydrates Used in This Experiment**',{align:AlignmentType.CENTER,after:80,keepNext:true}));
c.push(table([1600,2100,5660],[['Carbohydrate','Type','Made of'],
 ['Glucose','Monosaccharide, aldose','One glucose unit (also called dextrose or blood sugar)'],
 ['Fructose','Monosaccharide, ketose','One fructose unit (fruit sugar)'],
 ['Galactose','Monosaccharide, aldose','One galactose unit (part of lactose)'],
 ['Maltose','Disaccharide','Glucose + glucose, α(1→4) glycosidic bond; formed when starch is broken down'],
 ['Lactose','Disaccharide','Galactose + glucose, β(1→4) glycosidic bond (milk sugar)'],
 ['Sucrose','Disaccharide','Glucose + fructose, α,β(1→2) glycosidic bond (table sugar)'],
 ['Starch','Polysaccharide','Many glucose units: **amylose** (unbranched chains, α(1→4)) and **amylopectin** (branched, with α(1→6) branch points)']],{firstColBold:true}));
c.push(P('Each test in this experiment detects one structural feature. Table 2 summarizes the four tests. Sections A–D explain them, and sections E and F explain how the same tests follow hydrolysis and detect carbohydrates in foods.',{before:160,keepNext:true}));
c.push(P('**Table 2: Summary of the Carbohydrate Tests**',{align:AlignmentType.CENTER,after:80,keepNext:true}));
c.push(table([1500,2050,1950,2110,1750],[['Test','Reagent and its color','What it detects','Positive result','Negative result'],
 ['Fermentation (A)','Baker’s yeast in a fermentation tube','Sugars that yeast can use for food','Gas (CO_{2}) collects at the top of the closed arm','No gas; the closed arm stays full of liquid'],
 ['Benedict’s (B)','Cu^{2+} (copper(II) sulfate) in basic citrate solution; clear **blue**','Reducing sugars (a free hemiacetal –OH that can open to a C=O)','Green, yellow, orange, or brick-red solid (Cu_{2}O) after heating','Stays clear blue'],
 ['Seliwanoff’s (C)','Resorcinol in 3–6 M HCl; **colorless**','Ketoses (fructose), which react much faster than aldoses','Deep red within about 1 minute of heating','Colorless at 1 minute; aldoses turn light pink only after longer heating'],
 ['Iodine (D)','I_{2} dissolved in KI solution; **yellow-brown**','Amylose (starch) and other polysaccharides with coiled chains','Blue-black (amylose); red-purple to red-brown (amylopectin, glycogen)','Stays yellow-brown']],{firstColBold:true}));
c.push(h3('A. Fermentation Test'));
c.push(P('Yeast cells use some sugars as food. Enzymes in the yeast break the sugar down to ethanol and carbon dioxide gas; this process is **fermentation**:',{keepNext:true}));
c.push(eqP('C_{6}H_{12}O_{6} (glucose)   →   2 C_{2}H_{5}OH (ethanol)  +  2 CO_{2}(g)',{keepNext:true}));
c.push(P('In this experiment, the sugar solution and yeast are placed in a **fermentation tube**, which has a closed vertical arm and an open bulb with an open neck (Figure 1). The closed arm starts completely full of liquid. If the sugar ferments, CO_{2} bubbles rise and collect at the top of the closed arm, pushing the liquid down. That gas pocket is a positive result. If air is trapped in the arm at the start, it looks just like CO_{2}, so the arm must be bubble-free.',{keepNext:true}));
c.push(...img(F+'fig8_4.png',400,241,'**Figure 1:** Fermentation tubes: negative (left) and positive (right).'));
c.push(P('Yeast ferments glucose and fructose. It also ferments sucrose, because yeast has an enzyme (invertase) that first splits sucrose into glucose and fructose. Yeast does not have the enzyme that splits lactose, and it ferments galactose very slowly or not at all during one lab period, so lactose and galactose give negative results. Yeast does ferment maltose, because it has an enzyme that splits maltose into two glucose units, although maltose may start more slowly than glucose. Yeast also cannot break down starch, so starch is negative.'));
c.push(h3('B. Benedict’s Test for Reducing Sugars'));
c.push(P('**Benedict’s reagent** is a clear blue solution of copper(II) ions (Cu^{2+}) in a basic sodium carbonate and sodium citrate solution. When it is heated with a sugar that has an aldehyde group, the aldehyde is **oxidized** to a carboxylic acid (as its carboxylate ion in the basic solution), and the blue Cu^{2+} is **reduced** to copper(I) oxide (Cu_{2}O), a brick-red solid:',{keepNext:true}));
c.push(eqP('R–CHO  +  2 Cu^{2+}  +  5 OH^{–}   →   R–COO^{–}  +  Cu_{2}O(s)  +  3 H_{2}O',{after:40,keepNext:true}));
c.push(eqP('*sugar (aldehyde)  +  blue copper(II) ions   →   oxidized sugar  +  brick-red solid*',{after:160,size:20}));
c.push(P('Because these sugars reduce Cu^{2+}, they are called **reducing sugars**. The color you see depends on how much Cu_{2}O forms: a small amount of reducing sugar gives a **green** mixture (yellow solid mixed with blue solution), and more sugar gives **yellow**, then **orange**, then a **brick-red** solid. A sample that stays clear blue is negative.'));
c.push(P('Any sugar whose ring can open is a reducing sugar. This includes all common monosaccharides and the disaccharides that have a free hemiacetal –OH, such as maltose (Figure 2) and lactose.'));
c.push(P('**Sucrose is not a reducing sugar.** Its glycosidic bond joins the anomeric carbon of glucose (C1) to the anomeric carbon of fructose (C2), so neither ring has a free hemiacetal –OH and neither ring can open (Figure 2). Starch has only one free end on each very long chain, so it gives little or no color with Benedict’s reagent.',{keepNext:true}));
c.push(...img(F+'fig8_2.png',480,345,'**Figure 2:** Haworth structures of maltose (a reducing sugar) and sucrose (a nonreducing sugar).'));
c.push(P('**Ketoses** such as fructose have no aldehyde group, but they are also reducing sugars. In the basic Benedict’s solution, a ketose rearranges through an **enediol** intermediate into an aldose (Figure 3), and that aldehyde is then oxidized. (Fructose can form glucose or mannose this way.)',{keepNext:true}));
c.push(...img(F+'fig8_3.png',500,151,'**Figure 3:** In basic solution, a ketose rearranges to an aldose through an enediol (C1 and C2 shown).'));
c.push(h3('C. Seliwanoff’s Test for Ketoses'));
c.push(P('**Seliwanoff’s reagent** is a colorless solution of 0.05% resorcinol in hydrochloric acid (3–6 M). Hot acid removes water molecules from six-carbon sugars (dehydration) to form a compound called hydroxymethylfurfural, which then combines with resorcinol to give a red color. **Ketoses react much faster than aldoses.** With a ketose such as fructose, a **deep red** color forms within about 1 minute of heating. Aldoses such as glucose and galactose react slowly: the solution is still colorless at 1 minute and turns only **light pink** after several minutes. A sample that stays colorless is negative, so record each result as fast, slow, or no color change.'));
c.push(P('Sucrose is not a ketose, but it contains a fructose unit. The hot HCl in the reagent hydrolyzes sucrose into glucose and fructose (section E), so sucrose also gives a red color, often almost as quickly as fructose. The test is most sensitive for fructose.'));
c.push(h3('D. Iodine Test for Polysaccharides'));
c.push(P('**Iodine reagent** is iodine (I_{2}) dissolved in potassium iodide solution, which is **yellow-brown**. The long, unbranched chains of **amylose** coil into a helix. Iodine fits inside the helix and forms a **blue-black** complex, so a blue-black color is a positive test for starch. The branched polysaccharides **amylopectin** and **glycogen** have only short coiled sections, so they give **red-purple to red-brown** colors; this is also a positive (+) iodine test, for a branched polysaccharide. Monosaccharides and disaccharides are too small to hold iodine, and cellulose does not form the complex, so these samples stay the yellow-brown color of the reagent (negative). The blue-black color fades when the mixture is hot, so do the iodine test at room temperature.'));
c.push(h3('E. Hydrolysis of Disaccharides and Polysaccharides'));
c.push(P('**Hydrolysis** is the reverse of the reaction that forms a glycosidic bond: water breaks the bond and splits the carbohydrate into smaller sugars. In the laboratory, the reaction is carried out by heating with an acid (H^{+}) catalyst. For example, sucrose is hydrolyzed to glucose and fructose:',{keepNext:true}));
c.push(eqP('sucrose  +  H_{2}O   →   glucose  +  fructose      (H^{+}, heat)'));
c.push(P('Starch is hydrolyzed in steps: first to shorter chains (dextrins), then to maltose, and finally to glucose. In the body, the enzyme amylase in saliva and from the pancreas carries out the same hydrolysis, and enzymes in the small intestine finish the job. The glucose produced supplies energy; carbohydrates provide roughly half of the calories in a typical diet.'));
c.push(P('You can follow hydrolysis with the tests above. As starch is hydrolyzed, its amylose chains are cut into pieces too short to hold iodine, so the blue-black iodine color fades or disappears. Hydrolysis of sucrose releases glucose and fructose, which are reducing sugars, so a sample that was negative with Benedict’s reagent becomes positive. Because Benedict’s reagent must be basic to work, the acid in the hydrolyzed samples is first **neutralized** with sodium hydroxide (NaOH). Red litmus paper turning blue shows that the acid is used up. Add NaOH only until this happens, because excess base also destroys the iodine color and gives a false negative iodine test. The tubes heated with water instead of acid are **controls** that show what happens without the acid catalyst.'));
c.push(h3('F. Testing Foods for Carbohydrates'));
c.push(P('The same tests can show which carbohydrates are in foods such as table sugar, honey, fruit juice, milk, flour, cereal, bread, crackers, and pasta. For example, a blue-black iodine test shows starch, a positive Benedict’s test shows reducing sugars (such as glucose, fructose, maltose, or lactose), and a fast red Seliwanoff’s test shows fructose or sucrose. Use the results from Parts B–D as your reference.'));
// Hazards
c.push(h3('Hazards and Safety Instructions'));
c.push(P('Wear safety goggles at all times. Wear gloves when handling Seliwanoff’s reagent, HCl, NaOH, Benedict’s reagent, and iodine reagent.',{after:100}));
c.push(bullet('**Corrosive Acids and Bases:** Seliwanoff’s reagent is made with **hydrochloric acid**, which is corrosive to skin and eyes, and it also contains resorcinol, which is harmful and irritating. Dispense it carefully with gloves on, and keep the mouth of the test tube pointed away from everyone while it heats. 10% HCl and 10% NaOH (Part E) also burn skin and eyes. If any gets on your skin or in your eyes, rinse with water for 15 minutes and tell your instructor.'));
c.push(bullet('**Heavy Metal (Benedict’s Reagent):** Benedict’s reagent contains copper(II) sulfate, which is harmful if swallowed, irritates skin and eyes, and is toxic to aquatic life. Never pour it down the drain.'));
c.push(bullet('**Staining and Irritating (Iodine Reagent):** Iodine reagent stains skin and clothing and can irritate skin and eyes.'));
c.push(bullet('**Thermal Hazards:** The boiling water bath can cause steam burns, and hot test tubes can crack or splash. Move test tubes with a test tube holder or tongs, never heat a stoppered tube, and set hot glassware on a wire mesh to cool. Check glassware for cracks before heating, and do not let the water bath boil dry or boil over.'));
c.push(bullet('**Do Not Eat or Taste:** The food samples are laboratory materials once they are in the lab. Never taste any sample or reagent.'));
c.push(h3('Waste Instructions'));
c.push(bullet('**Drain, with plenty of water:** the contents of the fermentation tubes (yeast and sugar solution, Part A).'));
c.push(bullet('**Halogenated waste container:** every iodine test (the spot plate from Part D, E.3, and F.4). Rinse the spot plate with a small amount of acetone into the same container.'));
c.push(bullet('**Aqueous waste container:** all Benedict’s test tubes (Part B, E.4, F.2), which contain dissolved copper and sugars in water. Rinse each tube with a little water into the same container.'));
c.push(bullet('**Non-halogenated organic waste container:** all Seliwanoff’s test tubes (Part C, F.3), which contain resorcinol (an organic reagent) and HCl. Rinse each tube with a little water into the same container. Never pour Benedict’s or Seliwanoff’s reagent down the drain.'));
c.push(bullet('**Trash:** used litmus paper and leftover solid food samples.'));
// Procedure
c.push(h2('Procedure',{before:360}));
c.push(note('Instructor Notes:','Start Part A first, because the fermentation tubes need time. At the beginning of lab, each group sets up a **boiling water bath** at its bench: a 400-mL beaker about half full of water on a hot plate. This bath is used in Parts B, C, E, and F. The fermentation tubes go in the large classroom water bath, which should be warm (about 37 °C, or as your instructor directs), not boiling. Each student or group receives one unknown carbohydrate solution, labeled with a letter or number. Seliwanoff’s reagent is 0.05% resorcinol in 3–6 M hydrochloric acid. Use fresh baker’s yeast (small packets work well) that does not contain sorbitan monostearate, which can interfere with fermentation. Discard all carbohydrate solutions at the end of lab.'));
c.push(h3('A. Fermentation Test'));
c.push(materials('Fermentation tubes, baker’s yeast, balance, spatula, dropper or pipet, 2% carbohydrate solutions: glucose, fructose, sucrose, lactose, starch, and unknown'));
c.push(step('A.1','Each group in the class will be given 1 or 2 fermentation tubes and the carbohydrate solution(s) to test. You are making samples for the entire class to observe. Label each tube with the name of its solution.'));
c.push(step('A.2','Add about **0.2 g** of yeast to the fermentation tube, then add a small amount of your carbohydrate solution. *Your goal is to observe CO_{2} gas formation, so removing all air bubbles from the closed arm is crucial!* **Gently** tilt and rotate the tube so the solution flows into the closed arm. Use a pipet to mix the solution if any solid is stuck. Fill the rest of the tube until the closed arm is completely full and the open bulb is about ¾ full (Figure 1).'));
c.push(step('A.3','Place the fermentation tube in the classroom water bath. During the last 30 minutes of the lab, observe all of the class’s tubes and record whether gas has collected at the top of each closed arm (none, small, or large gas pocket).'));
c.push(h3('B. Benedict’s Test for Reducing Sugars'));
c.push(materials('7 test tubes, test tube rack, test tube holder, 10-mL graduated cylinder, boiling water bath, Benedict’s reagent, distilled water, 2% carbohydrate solutions: glucose, fructose, sucrose, lactose, starch, and unknown'));
c.push(step('B.1','Label seven test tubes. Place 10 drops of glucose, fructose, sucrose, lactose, starch, distilled water, and your unknown in separate tubes.'));
c.push(step('B.2','Add 2 mL of Benedict’s reagent to each tube and mix. Heat the tubes in the boiling water bath for 3–4 minutes.'));
c.push(step('B.3','Remove the tubes and record the color of each mixture and any solid. A green, yellow, orange, or brick-red color or solid shows a reducing sugar (+); clear blue is negative (–). The water tube shows what a negative test looks like.'));
c.push(h3('C. Seliwanoff’s Test for Ketoses'));
c.push(materials('7 test tubes, test tube rack, test tube holder, 10-mL graduated cylinder, boiling water bath, timer, Seliwanoff’s reagent, distilled water, 2% carbohydrate solutions: glucose, fructose, sucrose, lactose, starch, and unknown'));
c.push(step('C.1','Label seven test tubes. Place 10 drops of glucose, fructose, sucrose, lactose, starch, distilled water, and your unknown in separate tubes. Add 2 mL of Seliwanoff’s reagent to each.'));
c.push(caution('Seliwanoff’s reagent contains hydrochloric acid. Wear gloves, dispense it carefully, and keep the tubes pointed away from everyone.'));
c.push(step('C.2','Place all of the test tubes in the boiling water bath at the same time and start a timer. After **1 minute**, record the color in each tube. A deep red color that forms this quickly shows a ketose.'));
c.push(step('C.3','Keep heating and record the colors again at **5 minutes**. Classify each result as a **fast** color change (red by 1 minute), a **slow** color change (pink or red only by 5 minutes), or **no** color change.'));
c.push(h3('D. Iodine Test for Polysaccharides'));
c.push(materials('Spot plate, iodine reagent, acetone (for rinsing the spot plate), 2% carbohydrate solutions (in bottles with a pipet for each; dropper bottles are not used because the solutions grow mold): glucose, fructose, sucrose, lactose, starch, and unknown'));
c.push(step('D.1','Place 5 drops of glucose, fructose, sucrose, lactose, starch, and your unknown in separate wells of a spot plate. Record which well holds which sample. Add 1 drop of iodine reagent to each well.'));
c.push(step('D.2','Record the color in each well. A blue-black color is a positive test for amylose (starch). Red-purple or red-brown is also positive (+) and indicates a branched polysaccharide (amylopectin or glycogen). Yellow-brown (the color of the reagent) is negative.'));
c.push(step('D.3','Complete this step after you read the fermentation tubes in A.3 (during the last 30 minutes of lab). Use your results from Parts A–D to identify your unknown carbohydrate.'));
c.push(h3('E. Hydrolysis of Disaccharides and Polysaccharides'));
c.push(materials('4 test tubes, test tube rack, test tube holder, 10-mL graduated cylinder, boiling water bath, stirring rod, spot plate, 10% HCl, 10% NaOH, red litmus paper, distilled water, iodine reagent, Benedict’s reagent, 2% carbohydrate solutions: sucrose and starch'));
c.push(step('E.1','Place 3 mL of 2% starch in each of two test tubes and 3 mL of 2% sucrose in each of two more test tubes. To one sucrose tube and one starch tube, add 20 drops of 10% HCl. To the other two tubes, add 20 drops of distilled water. Label the four tubes and heat them in the boiling water bath for 10 minutes.'));
c.push(step('E.2','Remove the test tubes from the water bath and let them cool. To each tube that contains HCl, add 10% NaOH one drop at a time (about 20–25 drops, until the litmus paper turns blue), mixing after each few drops. Touch a stirring rod to the mixture and then to red litmus paper. Stop adding NaOH as soon as the litmus paper turns blue; this shows that the HCl has been neutralized. Rinse the stirring rod between tubes.'));
c.push(step('E.3','**Iodine test:** Place 5 drops of each of the four solutions in separate wells of a spot plate. Add 1 drop of iodine reagent to each. Record the colors and decide whether hydrolysis occurred in each.'));
c.push(step('E.4','**Benedict’s test:** Add 2 mL of Benedict’s reagent to each of the four test tubes and heat them in the boiling water bath for 3–4 minutes. Record the colors and decide whether hydrolysis occurred in each.'));
c.push(h3('F. Testing Foods for Carbohydrates'));
c.push(materials('3 test tubes, test tube rack, test tube holder, spatula, distilled water, boiling water bath, spot plate, a food product (provided by your instructor), Benedict’s reagent, Seliwanoff’s reagent, iodine reagent'));
c.push(step('F.1','Record the name of your food product. Place a small amount of it (about the size of a pea, or 10 drops of a liquid) in each of three test tubes. Add a small amount of distilled water (about 2 mL) to each and mix until most of the food has dissolved or is well dispersed.'));
c.push(step('F.2','**Benedict’s test:** Add 2 mL of Benedict’s reagent to the first tube and heat in the boiling water bath for 3–4 minutes. Record your results.'));
c.push(step('F.3','**Seliwanoff’s test:** *Cautiously* add 2 mL of Seliwanoff’s reagent to the second tube. Heat in the boiling water bath for 1 minute. Record your results.'));
c.push(step('F.4','**Iodine test:** Place 5 drops of the mixture from the third tube in a well of a spot plate. Add 1 drop of iodine reagent. Record your results.'));
// Pre-lab
c.push(h2('Pre-Lab Questions',{pageBreak:true,before:0}));
const PL=[['1.','Seliwanoff’s reagent contains hydrochloric acid. Give two precautions you will take when you add it and heat it, and name the waste container its test tubes go in.',603],
 ['2.','Where does each of the following go at the end of lab? (a) the fermentation tube contents (b) the spot plate from the iodine tests (c) the Benedict’s test tubes. Why must Benedict’s reagent never be poured down the drain?',682],
 ['3.','Describe what a positive and a negative Benedict’s test look like. In a positive test, which substance is oxidized, which is reduced, and what forms the colored solid?',682],
 ['4.','Fructose has no aldehyde group, yet it gives a positive Benedict’s test. Sucrose contains a fructose unit, yet it gives a negative Benedict’s test. Explain both results.',682],
 ['5.','In Seliwanoff’s test, sample X turns deep red after 1 minute, and sample Y is colorless at 1 minute but light pink at 5 minutes. What does each result tell you? Why can sucrose also turn red in this test?',682],
 ['6.','In A.2, why must all of the air be removed from the closed arm of the fermentation tube? What will you see in the tube if a sugar ferments?',603],
 ['7.','In Part E, why must the HCl tubes be neutralized before the Benedict’s test, and why do you stop adding NaOH as soon as the litmus paper turns blue? What is the purpose of the tubes heated with water?',0]];
PL.forEach(([a,b,sp])=>{c.push(step(a,b,{left:360,after:0})); if(sp)c.push(space(sp));});
// Report
c.push(h2('Report Sheet',{pageBreak:true,before:0,rule:true}));
c.push(...nameBlock());
c.push(h3('Parts A–D: Results of the Carbohydrate Tests',{before:120}));
c.push(P('Record the color or observation, then + (positive) or – (negative). For Seliwanoff’s test, also write fast, slow, or none in C.3.',{after:100}));
const NA={t:'(not tested)',shade:'F2F2F2'};
c.push(table([1500,1560,1600,1500,1600,1600],[['Sample','A.3 Fermentation (gas in closed arm?)','B.3 Benedict’s (color; + or –)','C.2 Seliwanoff’s at 1 min','C.3 Seliwanoff’s at 5 min (fast, slow, none)','D.2 Iodine (color; + or –)'],
 ...['Glucose','Fructose','Sucrose','Lactose','Starch'].map(n=>[n,'','','','','']),['Water',NA,'','','',NA],[['Unknown','letter or number: ______'],'','','','','']],{h:820,firstColBold:true}));
c.push(h3('D.3 Identifying the Unknown Carbohydrate',{pageBreak:true,before:0}));
c.push(P('Unknown letter or number: ____________',{after:100}));
c.push(table([2000,3200,4160],[['Test','Result with the unknown','Carbohydrates consistent with this result'],
 ['A. Fermentation','',''],['B. Benedict’s','',''],['C. Seliwanoff’s','',''],['D. Iodine','','']],{h:900,firstColBold:true}));
c.push(table([9360],[['**Identity of the unknown:** ______________________   Explain how your results rule out the other carbohydrates:']],{header:0,h:1500}));
c.push(h3('E. Hydrolysis of Disaccharides and Polysaccharides'));
c.push(table([2160,1800,1800,1800,1800],[['','Sucrose + H_{2}O','Sucrose + HCl','Starch + H_{2}O','Starch + HCl'],
 ['**E.2** Litmus turned blue after NaOH? (drops of NaOH)',{t:'(no HCl)',shade:'F2F2F2'},'',{t:'(no HCl)',shade:'F2F2F2'},''],
 ['**E.3** Iodine test (color)','','','',''],['**E.4** Benedict’s test (color)','','','',''],
 ['Did hydrolysis occur? If so, name the products.','','','','']],{h:[0,700,800,800,1100]}));
c.push(h3('F. Testing Foods for Carbohydrates',{pageBreak:true,before:0}));
c.push(P('Food product: ______________________________',{after:100}));
c.push(table([3400,5960],[['Test','Observation (color) and result (+ or –)'],
 ['**F.2** Benedict’s test',''],['**F.3** Seliwanoff’s test (1 minute)',''],['**F.4** Iodine test',''],['Carbohydrate(s) that may be present (explain using your results)','']],{h:[0,800,800,800,1500]}));
// Questions
c.push(h2('Questions and Problems',{pageBreak:true,before:0}));
c.push(step('Q.1','From your results in Part A, which sugars give a positive fermentation test? Explain why lactose does not.',{left:0,after:0})); c.push(space(1100));
c.push(step('Q.2','From your results in Part B, list the sugars that are reducing sugars and those that are not.',{left:0,after:0}));
c.push(P('Reducing sugars:',{indent:{left:540},before:200,after:700})); c.push(P('Nonreducing sugars:',{indent:{left:540},after:700}));
c.push(step('Q.3','From your results in Part C, which sugars contain a ketose or a ketose unit? Explain the result for sucrose.',{left:0,after:0})); c.push(space(1100));
c.push(step('Q.4','From your results in Part D, which carbohydrates give a blue-black color in the iodine test? Why do the other samples not give this color?',{left:0,after:0})); c.push(space(1100));
c.push(step('Q.5','What type of carbohydrate(s) would give each set of test results below?',{left:0,after:120}));
c.push(P('a. A reddish-orange solid with Benedict’s reagent and a deep red color with Seliwanoff’s reagent within 1 minute.',{indent:{left:540},after:900}));
c.push(P('b. A color change with Benedict’s reagent, a light pink color with Seliwanoff’s reagent only after 5 minutes, and no gas in the fermentation test.',{indent:{left:540},after:900}));
c.push(P('c. No color change with Benedict’s or Seliwanoff’s reagent, but a blue-black color with iodine reagent.',{indent:{left:540},after:900}));
c.push(step('Q.6','How do the Benedict’s test results in Part E show that hydrolysis of sucrose and starch occurred? Why do the tubes heated with water give different results?',{left:0,after:0})); c.push(space(1200));
c.push(step('Q.7','How do the iodine test results in Part E show that hydrolysis of starch occurred?',{left:0,after:0})); c.push(space(1000));
c.push(step('Q.8','Predict whether each carbohydrate below will give a positive (+) or negative (–) result in each test. In the iodine test, count blue-black, red-purple, and red-brown as positive (+).',{left:0,after:120,keepNext:true}));
c.push(table([1960,1850,1850,1850,1850],[['','Benedict’s','Seliwanoff’s (1 min)','Fermentation','Iodine'],
 ...['Glucose','Fructose','Galactose','Sucrose','Lactose','Maltose','Amylose','Amylopectin'].map(n=>[n,'','','',''])],{h:520,firstColBold:true}));
build(c,OUT).then(()=>console.log('wrote',OUT));
