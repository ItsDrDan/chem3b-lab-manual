const L=require('../lablib.js'); const {P,title,h2,h3,h4,bullet,step,sub,materials,note,caution,img,table,space,nameBlock,build,W,D}=L;
const F=process.argv[2]+'/'; const OUT=process.argv[3];
const {AlignmentType}=D;
const c=[];
c.push(title('Experiment #13: Enzymes'));
c.push(h3('Goals',{before:0}));
['Describe how an enzyme acts as a catalyst in a biological reaction.',
 'Follow the hydrolysis of starch by the enzyme amylase with the iodine test.',
 'Observe how enzyme concentration, temperature, pH, and inhibitors affect the activity of amylase.',
 'Graph enzyme activity and use the graphs to find the optimum temperature and pH of amylase.'].forEach(s=>c.push(bullet(s)));

// ---------------- Introduction
c.push(h2('Introduction'));
c.push(P('**Enzymes** are the catalysts of living cells. Almost all enzymes are proteins. Like every catalyst, an enzyme speeds up a reaction without being used up, and it does this by lowering the **activation energy**, the energy barrier that reacting molecules must get over before they can form products (Figure 1). Enzymes work at body temperature and close to neutral pH, conditions under which most of these reactions would be far too slow without a catalyst. For example, the enzyme carbonic anhydrase in red blood cells combines carbon dioxide with water to form carbonic acid (CO_{2} + H_{2}O ⇌ H_{2}CO_{3}). One molecule of the fastest form of this enzyme can process roughly a million CO_{2} molecules every second (source: Silverman, *Canadian Journal of Botany*, 1991), which lets the blood carry CO_{2} away from the tissues and helps control the pH of the blood.',{keepNext:true}));
c.push(...img(F+'fig14e_1.png',480,265,'**Figure 1:** Energy diagram for a reaction with and without an enzyme. The enzyme lowers the activation energy but does not change the energies of the reactants or products.'));
c.push(P('In this experiment, you will study **amylase**, the enzyme that begins the digestion of starch. Amylase is made by the salivary glands and by the pancreas. It hydrolyzes the α(1→4) glycosidic bonds inside starch chains, so a long starch molecule is cut first into shorter polysaccharides called **dextrins** and then mostly into the disaccharide **maltose**, with a little maltotriose and glucose. Amylase does **not** turn starch mainly into glucose; other enzymes in the small intestine (such as maltase) finish that job. Salivary amylase works in the mouth, stops working when the food reaches the very acidic stomach, and pancreatic amylase takes over in the small intestine.'));
c.push(h4('Following the Reaction with the Iodine Test'));
c.push(P('You used the iodine test in Experiment #8. Iodine reagent is **yellow-brown**. With starch (amylose), it forms a **blue-black** complex. As amylase cuts the starch chains, the pieces become too short to hold iodine, so the color of the iodine test changes from blue-black to blue, then to **red-brown** (dextrins), and finally stays **yellow-brown**, the color of the reagent itself, when no starch is left. The time it takes for the iodine test to stop changing color (to stay yellow-brown) is called the **achromic point**. The faster the enzyme works, the sooner the achromic point is reached. If the blue-black color does not fade, the enzyme is not working.'));
c.push(P('The products of the hydrolysis can be detected with Benedict’s reagent (Experiment #8). Starch is not a reducing sugar, but maltose and glucose are, so a positive Benedict’s test after the reaction shows that starch was hydrolyzed (Table 1).',{keepNext:true}));
c.push(P('**Table 1: Tests for Starch and for the Products of Its Hydrolysis**',{align:AlignmentType.CENTER,after:80,keepNext:true}));
c.push(table([2400,3480,3480],[['Test','Starch (amylose)','Hydrolysis products (maltose, a little glucose)'],
 ['Iodine test','**Positive:** blue-black','**Negative:** stays yellow-brown (color of the reagent)'],
 ['Benedict’s test','**Negative:** stays clear blue','**Positive:** green, yellow, orange, or red-orange solid after heating']],{firstColBold:true}));
c.push(P('In this experiment, you will judge how fast amylase is working from the color of the iodine test, using the activity levels in Table 2 and Figure 2. Each sample is tested on a spot plate: 4 drops of the reaction mixture plus 1 drop of iodine reagent.',{before:200,keepNext:true}));
c.push(P('**Table 2: Reading the Iodine Test as an Enzyme Activity Level**',{align:AlignmentType.CENTER,after:80,keepNext:true}));
c.push(table([2600,3000,3760],[['Color with iodine','Starch remaining','Enzyme activity level'],
 ['Blue-black','All','**0** (none)'],['Blue','Most','**1** (low)'],['Red-brown','Some (dextrins present)','**2** (moderate)'],['Yellow-brown (no color change)','None','**3** (high)']],{firstColBold:true}));
c.push(...img(F+'fig14e_4.png',624,250,'**Figure 2:** (a) Example spot-plate layout for Part A (the colors are an example only; record what you see): one row of wells for each time and one column for each tube. (b) How to read each well.'));
c.push(h3('A. Effect of Enzyme Concentration'));
c.push(P('The reactant that an enzyme acts on is called its **substrate**; starch is the substrate of amylase. The substrate binds in a pocket or groove on the enzyme called the **active site**, forming an **enzyme–substrate (ES) complex**. Side chains in the active site hold the substrate in place and help break or form bonds. The products are then released, and the unchanged enzyme can bind another substrate molecule (Figure 3). In the older **lock-and-key** model, the active site has a rigid shape that fits only one substrate. In the **induced-fit** model, which fits the evidence better, the active site is flexible and changes shape slightly to wrap around the substrate.',{keepNext:true}));
c.push(...img(F+'fig14e_2.png',624,206,'**Figure 3:** Amylase binds a starch chain in its active site (induced fit), hydrolyzes a glycosidic bond, and releases shorter chains.'));
c.push(P('When there is plenty of substrate, adding more enzyme provides more active sites, so more ES complexes form each second and the reaction goes faster. In Part A, all four tubes contain the same amount of starch, and the amount of amylase solution is varied.'));
c.push(h3('B. Effect of Temperature'));
c.push(P('Every enzyme has an **optimum temperature** at which it is most active. For human enzymes, including salivary amylase, this is about 37 °C, body temperature (Figure 4). Below the optimum, molecules move more slowly and collide less often, so the reaction slows down; at 0 °C an enzyme is nearly inactive, but it is **not** destroyed and will work again when it is warmed. Above the optimum, the extra motion breaks the hydrogen bonds and hydrophobic interactions that hold the enzyme’s shape. The enzyme is **denatured** (Experiment #12): it unfolds, the active site loses its shape, and the activity is lost, usually for good.'));
c.push(h3('C. Effect of pH'));
c.push(P('Each enzyme also has an **optimum pH**. Salivary amylase works best near pH 6.7–7.0, close to the pH of saliva (Figure 4). In Experiment #12, you saw that adding acid or base changes the charges on the acidic and basic R groups of a protein. In an enzyme, this breaks salt bridges and hydrogen bonds, changes the shape of the active site, and changes the charges the active site needs to bind and react with the substrate. Far from the optimum pH, the enzyme is denatured. Enzymes that work in other parts of the body, such as pepsin, which digests proteins in the stomach, can have very different optimum pH values.',{keepNext:true}));
c.push(...img(F+'fig14e_3.png',624,262,'**Figure 4:** Typical activity of human salivary amylase versus temperature (left) and versus pH (right).'));
c.push(h3('D. Inhibition of Enzyme Activity'));
c.push(P('An **inhibitor** is a substance that slows or stops an enzyme. A **competitive inhibitor** looks like the substrate and blocks the active site. A **noncompetitive inhibitor** binds somewhere else on the enzyme and changes its shape, so the active site no longer works well. These two types are usually reversible. An **irreversible inhibitor** forms a strong bond to the enzyme, often to an R group in or near the active site, and permanently inactivates it. Heavy metal ions such as silver (Ag^{+}), lead (Pb^{2+}), and mercury(II) (Hg^{2+}) bind tightly to sulfur-containing (–SH) R groups and act this way; this is one reason heavy metals are poisonous. In Part D, you will compare amylase mixed with sodium chloride, with ethanol, and with silver ions (Ag^{+}). Sodium chloride is included for comparison: chloride ions do not inhibit amylase and actually help salivary amylase work.'));

// ---------------- Hazards
c.push(h3('Hazards and Safety Instructions'));
c.push(P('Wear safety goggles at all times. Wear gloves when handling iodine reagent, the buffers, Benedict’s reagent, and silver nitrate. If any chemical gets on your skin or in your eyes, rinse with water for 15 minutes and tell your instructor.',{after:100}));
c.push(bullet('**Staining and Irritating (Iodine Reagent):** Iodine reagent stains skin and clothing and can irritate skin and eyes.'));
c.push(bullet('**Corrosive and Irritating (Buffers):** The pH 2 buffer is acidic and the pH 10 buffer is basic. Both can irritate skin and eyes.'));
c.push(bullet('**Toxic (Heavy Metal Ions):** Silver nitrate (AgNO_{3}) is corrosive to skin and eyes, toxic if swallowed, and very toxic to aquatic life, and it stains skin black. Benedict’s reagent contains copper(II) sulfate. Handle all of these with gloves and wash your hands before you leave the lab.'));
c.push(bullet('**Flammable (Ethanol):** Keep 95% ethanol away from hot plates and other heat sources.'));
c.push(bullet('**Thermal Hazards:** The boiling water bath and hot plate cause burns and stay hot after they are turned off. Move test tubes into and out of the boiling water bath with a test tube holder, and point the open end away from everyone.'));
c.push(bullet('**Enzyme Solution:** The amylase solution is a commercial enzyme preparation. Treat it as you would any lab chemical, avoid breathing dust if you weigh out the solid, and never taste anything in the lab.'));

// ---------------- Waste
c.push(h3('Waste Instructions'));
c.push(bullet('**Halogenated waste container:** every iodine test (the spot-plate wells from all parts). Rinse the spot plate with a small amount of water into the same container.'));
c.push(bullet('**Aqueous waste container:** the Benedict’s test tubes (A.1 and A.3); the leftover starch, amylase, and buffer mixtures from Parts A, B, and C; and the NaCl and silver nitrate tubes from Part D. Rinse each tube with a little water into the same container.'));
c.push(bullet('**Non-halogenated organic waste container:** the ethanol tube from Part D.'));
c.push(bullet('**Trash:** used plastic pipettes and gloves (or as your instructor directs).'));

// ---------------- Procedure
c.push(h2('Procedure',{pageBreak:true,before:0}));
c.push(note('Instructor Notes:','Have students start the boiling water bath as soon as they arrive, before the pre-lab lecture. The 37 °C bath can be a shared bath (in the fume hood or wherever space allows) that holds a whole test tube rack. In Parts B, C, and D, the starch and the amylase are brought to the bath temperature in **separate** tubes before they are mixed, so that the reaction starts at the temperature being tested. In Part C each tube holds 12 mL, so use large (18 × 150 mm or larger) test tubes. The amylase solution is a commercial α-amylase preparation; its optimum temperature and pH may differ somewhat from those of human salivary amylase.'));
c.push(h4('Getting Ready (All Parts)'));
c.push(bullet('**Water baths:** You need three baths. **Boiling water bath (100 °C):** a 400-mL beaker half full of water on a hot plate. **Body-temperature bath (37 °C):** set up by your instructor; keep it at 37 °C by adding warm water as needed. **Ice bath (0–5 °C):** ice and water in a 250- or 400-mL beaker (your instructor will supply the ice).'));
c.push(bullet('**Solutions:** Place about 50 mL of 1% starch solution in one small beaker and about 40 mL of amylase solution in a second small beaker. Use dropper bottles of iodine reagent, or put a small amount in a third small beaker. Label each beaker. Refill a beaker from the stock bottle if you run low.'));
c.push(bullet('**Pipettes and spot plate:** Get a clean spot plate and several clean plastic pipettes. Use a separate clean pipette for each solution and each tube so that you do not carry enzyme from one tube to another.'));
c.push(h3('A. Effect of Enzyme Concentration'));
c.push(materials('6 test tubes, test tube rack, test tube holder, 10-mL graduated cylinder, thermometer, 37 °C water bath, boiling water bath, plastic pipettes, spot plate, 1% starch (buffered at pH 7.0), 1% glucose, amylase solution, iodine reagent, Benedict’s reagent, timer'));
c.push(step('A.1','**Reference tests:** Place 4 drops of 1% starch in a well of the spot plate and add 1 drop of iodine reagent. Record the color (it should be blue-black). Place 3 mL of 1% glucose in a test tube, add 2 mL of Benedict’s reagent, and heat in the boiling water bath for 3–4 minutes. Record the color (a red-orange solid shows a positive test).'));
c.push(step('A.2','Label four test tubes 1–4 and place 4 mL of 1% starch in each. Place 4 mL of amylase solution in a fifth tube labeled 5. Warm all five tubes in the 37 °C bath for 5 minutes.',{after:80}));
c.push(sub('Using a clean pipette and the warmed amylase from tube 5, add amylase to tubes 2–4 as shown in Table 3, one right after the other. Tube 1 gets no enzyme; it is the **control**. Mix each tube quickly and return it to the 37 °C bath right away. Start your timer when you add the enzyme.'));
c.push(P('**Table 3: Amylase Added in Part A**',{align:AlignmentType.CENTER,after:80,keepNext:true}));
c.push(table([2000,3000],[['Tube','Amylase solution'],['1','0 drops (control)'],['2','3 drops'],['3','6 drops'],['4','10 drops']],{firstColBold:true}));
c.push(sub('**Testing:** Immediately (0 minutes), use a clean pipette for each tube to place 4 drops of each mixture in its own well of the spot plate (Figure 2). Add 1 drop of iodine reagent to each well. Record the color and the activity level (Table 2) in the A.2 table. Repeat at 5 minutes and at 10 minutes, using a new row of wells each time. Keep the tubes in the 37 °C bath between tests.'));
c.push(step('A.3','**Benedict’s test:** After the 10-minute test, add 3 mL of Benedict’s reagent to each of tubes 1–4 and heat them in the boiling water bath for 3–4 minutes. Record the colors. A green, yellow, orange, or red-orange color is a positive test: reducing sugars formed by hydrolysis of the starch. Clear blue is a negative test: no hydrolysis. Record yes or no for hydrolysis in each tube.'));
c.push(step('A.4','On the report sheet, graph the activity level at 10 minutes against the number of drops of amylase.'));
c.push(h3('B. Effect of Temperature'));
c.push(materials('6 test tubes, test tube rack, test tube holder, 10-mL graduated cylinder, thermometer, ice bath, 37 °C water bath, boiling water bath, plastic pipettes, spot plate, 1% starch, amylase solution, iodine reagent, timer'));
c.push(step('B.1','Place 4 mL of 1% starch in each of three test tubes, and 4 mL of amylase solution in each of three other test tubes. Put one starch tube and one amylase tube in the ice bath, one of each in the 37 °C bath, and one of each in the boiling water bath. Leave them for about 10 minutes so that each solution reaches the temperature of its bath. Record the temperature of each bath.'));
c.push(step('B.2','At each bath, pour the starch into the amylase tube, mix, and return the tube to the **same** bath right away. Use a test tube holder at the boiling water bath. Leave the mixtures in their baths for 10 minutes.'));
c.push(step('B.3','After 10 minutes, place 4 drops of each mixture in its own well of the spot plate and add 1 drop of iodine reagent. The iodine color is weak in hot solutions (Experiment #8), so let the drops from the boiling bath cool on the spot plate for about 30 seconds before adding the iodine. Record the color and activity level of each mixture.'));
c.push(step('B.4','On the report sheet, graph the activity level against temperature.'));
c.push(h3('C. Effect of pH'));
c.push(materials('8 large test tubes, test tube rack, 10-mL graduated cylinder, 37 °C water bath, plastic pipettes, spot plate, buffers (pH 2, 4, 7, and 10), 1% starch, amylase solution, iodine reagent, timer'));
c.push(step('C.1','Label four test tubes pH 2, 4, 7, and 10. Place 4 mL of the matching buffer in each, then add 4 mL of amylase solution to each. Place 4 mL of 1% starch in each of four more test tubes.'));
c.push(step('C.2','Warm all eight tubes in the 37 °C bath for about 5 minutes. Then pour one tube of starch into each buffer–amylase tube, mix, and return the four mixtures to the 37 °C bath.'));
c.push(step('C.3','After 15 minutes, place 4 drops of each mixture (a clean pipette for each) in its own well of the spot plate and add 1 drop of iodine reagent. Record the color and activity level.'));
c.push(step('C.4','On the report sheet, graph the activity level against pH.'));
c.push(h3('D. Inhibition of Enzyme Activity'));
c.push(materials('6 test tubes, test tube rack, 10-mL graduated cylinder, 37 °C water bath, plastic pipettes, spot plate, amylase solution, 1% starch, iodine reagent, timer; dropper bottles of 1% NaCl, 95% ethanol, and 1% AgNO_{3}'));
c.push(step('D.1','Place 4 mL of amylase solution in each of three test tubes. Add 10 drops of 1% NaCl to the first tube, 10 drops of 95% ethanol to the second, and 10 drops of 1% AgNO_{3} to the third. Place 4 mL of 1% starch in each of three more test tubes.'));
c.push(step('D.2','Warm all six tubes in the 37 °C bath for 5 minutes. Pour one tube of starch into each amylase tube, mix, and return the three mixtures to the 37 °C bath.'));
c.push(step('D.3','After 15 minutes, place 4 drops of each mixture (a clean pipette for each) in its own well of the spot plate and add 1 drop of iodine reagent. Record the color and activity level. Then decide whether each added substance acted as an inhibitor (yes or no).'));

// ---------------- Pre-Lab
c.push(h2('Pre-Lab Questions',{pageBreak:true,before:0}));
const PL=[['1.','What is the substrate of amylase? What are the main products of the reaction? Is glucose the main product?',1100],
 ['2.','A drop of a reaction mixture gives a red-brown color with iodine reagent. Using Table 2, give the activity level and describe how much starch is left.',1000],
 ['3.','What color would you expect for tube 1 (no amylase) in Part A at 10 minutes, with iodine and with Benedict’s reagent? Why is this tube included?',1100],
 ['4.','In Part B, why are the starch and the amylase brought to the bath temperature in separate tubes before they are mixed?',1100],
 ['5.','Amylase kept at 0 °C becomes active again when it is warmed, but amylase heated at 100 °C does not. Explain the difference.',1100],
 ['6.','Where does each of the following go at the end of lab? (a) the spot plate wells with iodine reagent (b) the Benedict’s test tubes (c) the ethanol tube from Part D',1000],
 ['7.','Name two hazards in this experiment and the precaution for each.',0]];
PL.forEach(([a,b,sp])=>{c.push(step(a,b,{left:360,after:0})); if(sp)c.push(space(sp));});

// ---------------- Report Sheet
c.push(h2('Report Sheet',{pageBreak:true,before:0,rule:true}));
c.push(...nameBlock());
c.push(h3('A. Effect of Enzyme Concentration',{before:120}));
c.push(table([4680,4680],[['**A.1** Reference test','Color observed'],['Iodine test with 1% starch',''],['Benedict’s test with 1% glucose','']],{h:560}));
c.push(P('**A.2** Iodine test: record the color and the activity level (0–3) in each box.',{before:200,after:80,keepNext:true}));
c.push(table([1560,1950,1950,1950,1950],[['Time','Tube 1 (0 drops, control)','Tube 2 (3 drops)','Tube 3 (6 drops)','Tube 4 (10 drops)'],
 ['**0 min**',['',' ','Level: ____'],['',' ','Level: ____'],['',' ','Level: ____'],['',' ','Level: ____']],
 ['**5 min**',['',' ','Level: ____'],['',' ','Level: ____'],['',' ','Level: ____'],['',' ','Level: ____']],
 ['**10 min**',['',' ','Level: ____'],['',' ','Level: ____'],['',' ','Level: ____'],['',' ','Level: ____']]]));
c.push(P('',{after:120}));
c.push(table([1560,1950,1950,1950,1950],[['','Tube 1','Tube 2','Tube 3','Tube 4'],['**A.3** Benedict’s test (color)','','','',''],['Hydrolysis? (yes/no)','','','','']],{h:700}));
c.push(P('**A.4** Graph: activity level at 10 minutes versus drops of amylase solution.',{pageBreak:true,before:0,after:0,keepNext:true}));
c.push(...img(F+'fig14e_g1.png',540,255));
c.push(h3('B. Effect of Temperature'));
c.push(table([2340,2340,2340,2340],[['','Ice bath','37 °C bath','Boiling water bath'],
 ['**B.1** Temperature of bath (°C)','','',''],['**B.3** Color with iodine','','',''],['**B.3** Activity level (0–3)','','','']],{h:700,firstColBold:false}));
c.push(P('**B.4** Graph: activity level versus temperature.',{before:200,after:0,keepNext:true}));
c.push(...img(F+'fig14e_g2.png',540,255));
c.push(h3('C. Effect of pH',{before:240}));
c.push(table([2160,1800,1800,1800,1800],[['','pH 2','pH 4','pH 7','pH 10'],['**C.3** Color with iodine','','','',''],['**C.3** Activity level (0–3)','','','','']],{h:700}));
c.push(P('**C.4** Graph: activity level versus pH.',{before:200,after:0,keepNext:true}));
c.push(...img(F+'fig14e_g3.png',540,255));
c.push(h3('D. Inhibition of Enzyme Activity'));
c.push(table([2340,2340,2340,2340],[['','NaCl','Ethanol','AgNO_{3}'],['**D.3** Color with iodine','','',''],['**D.3** Activity level (0–3)','','',''],['Inhibitor? (yes/no)','','','']],{h:700}));

// ---------------- Questions
c.push(h2('Questions and Problems',{pageBreak:true,before:0}));
const Q=[['Q.1','In Part A, which tube hydrolyzed the starch fastest, and which slowest? Describe how enzyme concentration affects the rate of the reaction, and explain why using the idea of active sites.',1500],
 ['Q.2','Which tubes in A.3 gave a positive Benedict’s test? Which reducing sugar is the main product of amylase, and why is glucose not the main product?',1300],
 ['Q.3','Use your graph from B.4. At which temperature was amylase most active? Why was its activity lower at 0 °C and at 100 °C? Explain how the reasons differ.',1500],
 ['Q.4','Use your graph from C.4. What was the optimum pH of amylase in your experiment? Explain why the activity dropped at pH 2 and at pH 10.',1500],
 ['Q.5','The pH of the stomach is about 2. (a) What does this suggest about the optimum pH of pepsin? (b) What happens to the activity of pepsin when it moves into the small intestine, where the pH is about 6 to 7.4? (c) What happens to salivary amylase when swallowed food reaches the stomach?',1700],
 ['Q.6','In Part D, in which mixtures was starch hydrolyzed? Which added substances acted as inhibitors? How do heavy metal ions inhibit an enzyme, and how could ethanol affect it?',1500]];
Q.forEach(([a,b,sp])=>{c.push(step(a,b,{left:0,after:0})); c.push(space(sp));});
c.push(step('Q.7','A student measured the time for a starch–amylase mixture to reach the achromic point (iodine test stays yellow-brown) at several temperatures:',{left:0,after:80,keepNext:true}));
c.push(table([2600,1340,1340,1340,1340,1400],[['Temperature (°C)','10','25','37','50','65'],['Time to achromic point (min)','24','9','4','7','no change after 30']],{firstColBold:true}));
c.push(P('(a) At which temperature was the enzyme most active? (b) Is a short time a sign of high or low activity? Explain. (c) Explain the result at 65 °C. (d) Would the 10 °C mixture react faster if it were moved to 37 °C? Would the 65 °C mixture? Explain.',{before:120,after:2200}));
c.push(step('Q.8','Compare how heat, strong acid or base, and heavy metal ions stop an enzyme from working. How are they similar, and how are they different? Answer in at least three complete sentences.',{left:0,after:0}));
build(c,OUT).then(()=>console.log('wrote',OUT));
