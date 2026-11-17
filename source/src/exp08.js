const L=require('../lablib.js'); const {P,title,h2,h3,h4,bullet,step,sub,materials,note,caution,img,table,space,nameBlock,build,W,D}=L;
const F=process.argv[2]+'/'; const OUT=process.argv[3]; const {AlignmentType}=D;
const c=[];
c.push(title('Experiment #8: Types of Carbohydrates'));
c.push(h3('Goals',{before:0}));
['Identify the functional groups of carbohydrates and classify monosaccharides as aldoses or ketoses.',
 'Use models and Fischer projections to tell D and L sugars apart.',
 'Draw Haworth (ring) structures of monosaccharides and identify the α and β anomers.',
 'Draw disaccharides and polysaccharides, and name the glycosidic bonds that join their units.',
 'Describe common carbohydrates and their sources.'].forEach(s=>c.push(bullet(s)));
c.push(h2('Introduction'));
c.push(P('**Carbohydrates** are the sugars, starches, and fibers in our food and in plant and animal tissues. Their name comes from their formulas: many carbohydrates fit the pattern C_{n}(H_{2}O)_{n}, as if they were “hydrates of carbon.” Structurally, a carbohydrate is a chain of carbons that carries many hydroxyl (–OH) groups and one carbonyl (C=O) group, or a larger molecule built from such units. In this experiment you will build models and draw structures to see how sugars are put together. The chemical tests for carbohydrates follow in Experiment #9.'));
// A
c.push(h3('A. Monosaccharides'));
c.push(P('A **monosaccharide** is a single sugar unit that cannot be broken down into smaller sugars by hydrolysis. Most of the monosaccharides in food have six carbons (**hexoses**), with the formula C_{6}H_{12}O_{6}. A monosaccharide whose carbonyl is an aldehyde (–CHO, at carbon 1) is an **aldose**; one whose carbonyl is a ketone (C=O, usually at carbon 2) is a **ketose**. Glucose and galactose are aldohexoses, and fructose is a ketohexose (Table 1 and Figure 1). Glucose, also called **blood sugar** or dextrose, is the most common monosaccharide and the main fuel for our cells.'));
c.push(P('**Table 1: Common Monosaccharides**',{align:AlignmentType.CENTER,after:80,keepNext:true}));
c.push(table([1800,2300,1500,3760],[['Monosaccharide','Type','Formula','Sources'],
 ['Glucose','Aldohexose','C_{6}H_{12}O_{6}','Fruit juices, honey, corn syrup; hydrolysis of starch, maltose, sucrose, and lactose'],
 ['Galactose','Aldohexose','C_{6}H_{12}O_{6}','Hydrolysis of lactose (milk sugar)'],
 ['Fructose','Ketohexose','C_{6}H_{12}O_{6}','Fruit juices, honey; hydrolysis of sucrose']],{firstColBold:true}));
c.push(h4('Fischer Projections and D and L Sugars'));
c.push(P('A **Fischer projection** draws a sugar chain straight up and down, with the carbonyl group at or near the top and carbon 1 at the top. Each carbon in the chain is the crossing point of a vertical and a horizontal line. By agreement, the **horizontal** bonds point **toward you** (out of the page), and the **vertical** bonds point **away from you** (behind the page).',{keepNext:true}));
c.push(...img(F+'fig8_1.png',540,254,'**Figure 1:** Fischer projections of two aldoses (D-glucose and D-galactose) and a ketose (D-fructose). Carbons are numbered from the top.'));
c.push(P('A carbon bonded to four different groups is a **chiral carbon**. A molecule with a chiral carbon has a mirror image that cannot be stacked exactly on top of it, just as your left hand cannot be stacked on your right hand. The simplest aldose, **glyceraldehyde** (C_{3}H_{6}O_{3}), has one chiral carbon, so it exists as two mirror-image forms called **D** and **L** (Figure 2). In the Fischer projection, D-glyceraldehyde has the –OH on its chiral carbon on the **right**, and L-glyceraldehyde has it on the **left**.',{keepNext:true}));
c.push(...img(F+'fig8t_1.png',420,177,'**Figure 2:** L- and D-glyceraldehyde are mirror images. The central carbon is chiral.'));
c.push(P('Larger sugars have several chiral carbons. To decide whether a sugar is D or L, look only at the chiral carbon **farthest from the carbonyl group** (carbon 5 in a hexose). If its –OH is on the right, the sugar is **D**; if it is on the left, the sugar is **L**. Almost all sugars in nature are D sugars. In Figure 1, glucose and galactose differ only at carbon 4, and all three sugars have the C5 –OH on the right.'));
c.push(h4('Haworth Structures: Ring Formation and Anomers'));
c.push(P('In water, more than 99% of glucose molecules are rings, not open chains. The ring forms when the –OH on carbon 5 adds to the aldehyde carbonyl on carbon 1, making a cyclic **hemiacetal** (Figure 3). A **Haworth structure** draws the ring as a flat hexagon seen slightly from above: the ring oxygen is at the back right, carbon 1 is on the right, and the thick lines show the edge of the ring nearest you. Each –OH or –CH_{2}OH is drawn straight **up** or straight **down** from its ring carbon (the H atoms are usually left out).',{keepNext:true}));
c.push(...img(F+'fig8t_2.png',624,199,'**Figure 3:** The –OH on carbon 5 of D-glucose adds to the carbonyl on carbon 1 to close the ring, giving the α or β anomer.'));
c.push(P('Carbon 1 was the carbonyl carbon, so when the ring closes it becomes a new chiral carbon called the **anomeric carbon**. Its new –OH can point down or up, giving two ring forms called **anomers**. For D sugars drawn in the usual Haworth orientation:'));
c.push(bullet('**α anomer:** the –OH on the anomeric carbon points **down** (on the opposite side of the ring from the –CH_{2}OH on carbon 5).'));
c.push(bullet('**β anomer:** the –OH on the anomeric carbon points **up** (on the same side as the –CH_{2}OH).'));
c.push(P('In solution, a ring can open and close again, so the α and β anomers slowly change into each other until they reach a mixture of about 36% α and 64% β for glucose.',{before:80}));
c.push(P('To turn a Fischer projection of a D sugar into a Haworth structure, use three rules: (1) a group on the **right** in the Fischer projection points **down** in the Haworth structure; (2) a group on the **left** points **up**; and (3) the –CH_{2}OH on carbon 5 of a D sugar points **up**. For example, D-glucose has its C2 –OH on the right (down), its C3 –OH on the left (up), and its C4 –OH on the right (down), as in Figure 3. Galactose follows the same rules, so its C4 –OH points up.'));
c.push(P('Fructose forms a **five-membered ring**. Its carbonyl is on carbon 2, so the –OH on carbon 5 adds to carbon 2, and carbon 2 becomes the anomeric carbon. The ring holds four carbons and one oxygen, with carbon 1 (a –CH_{2}OH group) and the anomeric –OH both attached to carbon 2. The α and β labels follow the same rule: in α-D-fructose the anomeric –OH points down, opposite the –CH_{2}OH on carbon 5.'));
// B
c.push(h3('B. Disaccharides'));
c.push(P('A **disaccharide** is two monosaccharides joined by a **glycosidic bond** (also called a glycosidic linkage): a C–O–C bond from the anomeric carbon of one sugar to an –OH carbon of the other. Like an esterification, forming the bond is a **condensation** reaction that releases one molecule of water. The reverse reaction, **hydrolysis**, adds water across the glycosidic bond and splits the disaccharide back into two monosaccharides. Hydrolysis happens with an acid catalyst or, in the body, with digestive enzymes.'));
c.push(P('A glycosidic bond is named by the anomer (α or β) of the sugar that supplies its anomeric carbon, followed by the numbers of the two carbons it connects. In **maltose**, carbon 1 of an α-glucose is bonded to carbon 4 of a second glucose, so maltose has an **α-1,4 glycosidic bond** (Figure 4). The second glucose in maltose still has a free hemiacetal –OH on its carbon 1, so that ring can open and close, and maltose exists as both α and β forms. In **sucrose**, the bond joins carbon 1 of glucose to carbon 2 of fructose, which uses up the anomeric carbons of both sugars. Table 2 lists three common disaccharides.'));
c.push(P('**Table 2: Common Disaccharides**',{align:AlignmentType.CENTER,after:80,keepNext:true}));
c.push(table([1900,2600,2160,2700],[['Disaccharide','Monosaccharide units','Glycosidic bond','Sources'],
 ['Maltose','Glucose + glucose','α-1,4','Germinating grains (malt); hydrolysis of starch'],
 ['Lactose','Galactose + glucose','β-1,4 (from galactose C1)','Milk, yogurt, ice cream'],
 ['Sucrose','Glucose + fructose','α-1,β-2 (glucose C1 to fructose C2)','Table sugar: sugar cane and sugar beets']],{firstColBold:true}));
c.push(...img(F+'fig8_2.png',480,345,'**Figure 4:** Haworth structures of maltose and sucrose. The bond written α(1→4) in the figure is the same as α-1,4 in the text. (Reducing and nonreducing sugars are tested in Experiment #9.)'));
// C
c.push(h3('C. Polysaccharides'));
c.push(P('A **polysaccharide** is a polymer of hundreds to many thousands of monosaccharide units joined by glycosidic bonds. Starch, glycogen, and cellulose are all made of glucose only. They differ in the type of glycosidic bond (α or β) and in how much the chain branches (Table 3).'));
c.push(P('**Table 3: Common Polysaccharides of Glucose**',{align:AlignmentType.CENTER,after:80,keepNext:true}));
c.push(table([1900,2200,1900,3360],[['Polysaccharide','Glycosidic bonds','Branching','Found in; role'],
 ['Amylose (about 20% of starch)','α-1,4','None','Rice, wheat, potatoes, beans, cereals; plant energy storage'],
 ['Amylopectin (about 80% of starch)','α-1,4 and α-1,6','About every 25 units','Same foods as amylose; plant energy storage'],
 ['Glycogen','α-1,4 and α-1,6','About every 10–15 units','Liver and muscle; animal energy storage'],
 ['Cellulose','β-1,4','None','Wood, cotton, paper, plant cell walls; structure (dietary fiber)']],{firstColBold:true}));
c.push(P('**Starch** is the form in which plants store glucose. It does not dissolve well in cold water, and it is a mixture of two polysaccharides. **Amylose** is an unbranched chain of 250 to 4000 α-D-glucose units joined by α-1,4 glycosidic bonds. **Amylopectin** has the same α-1,4 chains, but about every 25 glucose units a side chain branches off. At each branch point, carbon 1 of the first glucose in the branch is bonded to carbon 6 (the –CH_{2}OH carbon) of a glucose in the main chain, an **α-1,6 glycosidic bond** (Figure 5).',{before:160,keepNext:true}));
c.push(...img(F+'fig8t_3.png',520,275,'**Figure 5:** Part of amylopectin: α-1,4 bonds along the chain and an α-1,6 bond at a branch point. Amylose has only the α-1,4 chain.'));
c.push(P('**Glycogen** is the form in which animals store glucose, mainly in the liver and in muscle. It is built like amylopectin, but it branches much more often, about every 10–15 glucose units. Each branch ends in a glucose unit that enzymes can remove, so a highly branched molecule can release many glucose molecules at once when the body needs energy.'));
c.push(P('**Cellulose** is the main structural material of plants; cotton is almost pure cellulose. Like amylose, cellulose is an unbranched chain of glucose, but its units are **β-D-glucose** joined by **β-1,4 glycosidic bonds**. In a Haworth drawing, every other glucose unit in cellulose is turned over (Figure 6). This makes each cellulose chain long and straight, so neighboring chains lie side by side and are held together by many hydrogen bonds (Figure 7). The result is strong, rigid fibers that do not dissolve in water. Humans make enzymes (amylases) that hydrolyze α-glycosidic bonds, but not enzymes that hydrolyze β-1,4 bonds, so we digest starch but not cellulose. Cellulose passes through our digestive tract as **dietary fiber**.',{keepNext:true}));
c.push(...img(F+'fig8t_4.png',624,178,'**Figure 6:** Part of a cellulose chain. β-1,4 glycosidic bonds join the β-D-glucose units, and every other unit is drawn turned over.'));
c.push(...img(F+'fig8t_5.png',540,323,'**Figure 7:** Simple models of four glucose polymers (each hexagon is one glucose unit; not to scale).'));
// Hazards
c.push(h3('Hazards and Safety Instructions'));
c.push(P('This experiment uses molecular model kits, drawings, and reference sources only. No chemicals are dispensed.',{after:100}));
c.push(bullet('**Eye Protection:** Wear safety goggles if other experiments or chemicals are in use in the room, or as your instructor directs. Gloves are not needed for model building.'));
c.push(bullet('**General Lab Rules:** Follow all of the usual lab rules, including no food or drink in the lab. Do not taste any sugar samples in the lab.'));
c.push(bullet('**Small Parts:** Model pieces are small. Never put them in your mouth, and pick up any that fall on the floor so no one slips on them.'));
c.push(bullet('**Bending Bonds:** Flexible bonds (used for double bonds and rings) can snap if bent too far. Bend them gently and point the model away from your face.'));
c.push(bullet('**Stockroom Models:** Handle any prebuilt sugar models from the stockroom gently, and do not take them apart unless your instructor says so.'));
c.push(h3('Waste Instructions'));
c.push(bullet('**No chemical waste** is produced in this experiment.'));
c.push(bullet('**Model kit:** take every model apart, and return all atoms and bonds to the correct compartments of the kit. Count the pieces against the kit list (or as your instructor directs), and report missing or broken pieces to your instructor. Return any stockroom models in one piece.'));
c.push(bullet('**Trash:** scrap paper and broken model pieces (show broken pieces to your instructor first).'));
// Procedure
c.push(h2('Procedure',{pageBreak:true,before:0}));
c.push(note('Instructor Notes:','Give each pair of students one model kit with at least 6 carbon atoms, 12 hydrogen atoms, 6 oxygen atoms, and 2 flexible bonds, so they can build both glyceraldehyde models at once. If a prebuilt maltose model is available from the stockroom, set it out for B.1. Before lab, a short review of chiral carbons and of hemiacetal formation (an alcohol adding to an aldehyde or ketone) helps students with Parts A and B. Initial each group’s report sheet at the A.1 Instructor check.'));
c.push(h3('A. Monosaccharides'));
c.push(materials('Molecular model kit'));
c.push(step('A.1','Build a model of glyceraldehyde, HOCH_{2}CH(OH)CHO. Start with the central carbon and attach four different groups to it: –CHO (a carbon with a double-bonded oxygen and an H), –CH_{2}OH, –OH, and –H. Hold the model so the –CHO group is at the top and the –CH_{2}OH group is at the bottom, with both pointing away from you, and the –H and –OH pointing toward you. This is the Fischer projection orientation. Then build a second model that is the mirror image of the first. Try to place one model exactly on top of the other so that all four groups match. Decide which model is D-glyceraldehyde and which is L-glyceraldehyde (Figure 2), and draw the Fischer projection of each. **Instructor check:** show both models to your instructor.'));
c.push(step('A.2','Draw the Fischer projection of D-glucose and number its carbons. Circle the chiral carbon that makes it a D sugar. Then draw the Haworth structures of α-D-glucose and β-D-glucose (Figure 3), and label the anomeric carbon in each.'));
c.push(step('A.3','Draw the Fischer projections of D-galactose and D-fructose (Figure 1). Then draw the Haworth structure of the α anomer of each: α-D-galactose (a six-membered ring, like glucose) and α-D-fructose (a five-membered ring, closed between C5 and C2). Use the three rules in the Introduction, and label the anomeric carbon in each.'));
c.push(h3('B. Disaccharides'));
c.push(materials('Prebuilt maltose model (if available from the stockroom); Table 2; Figure 4'));
c.push(step('B.1','Using Haworth structures, draw α-maltose: two α-D-glucose units joined by an α-1,4 glycosidic bond, with the free –OH on carbon 1 of the second glucose pointing down (α). Label the glycosidic bond. If a maltose model is available, compare it with your drawing.'));
c.push(step('B.2','Write the equation for the hydrolysis of α-maltose: add H_{2}O across the glycosidic bond, and draw the two glucose molecules that form.'));
c.push(step('B.3','Using Haworth structures, write the equation for the formation of α-lactose from **β-D-galactose** and **α-D-glucose**. Join carbon 1 of galactose to carbon 4 of glucose with a β-1,4 glycosidic bond, and show the water molecule that is released.'));
c.push(step('B.4','Draw the Haworth structure of sucrose and circle the glycosidic bond. Label the anomeric carbon of each unit that takes part in the bond.'));
c.push(h3('C. Polysaccharides'));
c.push(materials('Table 3; Figures 5–7'));
c.push(step('C.1','Draw a portion of amylose using four α-D-glucose units. Label each glycosidic bond, and put brackets around one repeating unit.'));
c.push(step('C.2','Draw a portion of amylopectin that shows one branch point: two glucose units of the main chain and one glucose unit of the branch. Label the α-1,4 and α-1,6 glycosidic bonds. Describe how the structure of amylopectin differs from the structure of amylose.'));
c.push(step('C.3','Draw a portion of cellulose using four β-D-glucose units. Label each glycosidic bond.'));
// Pre-lab
c.push(h2('Pre-Lab Questions',{pageBreak:true,before:0}));
const PL=[['1.','This experiment uses no chemicals. Give two safety rules that still apply, and describe what you must do with your model kit at the end of lab.',1050],
 ['2.','What does the D in D-glucose mean? Which carbon of glucose do you look at to decide whether it is D or L?',1050],
 ['3.','In A.1, how will you hold your glyceraldehyde model so that you can draw its Fischer projection? Which bonds point toward you?',1050],
 ['4.','In a Haworth structure of D-glucose, how can you tell the α anomer from the β anomer? Which carbon is the anomeric carbon?',1050],
 ['5.','Using Table 2, name the two monosaccharides that make up lactose and the type of glycosidic bond that joins them.',1050],
 ['6.','Amylose and cellulose are both unbranched chains of glucose. What is the difference between their glycosidic bonds, and why can humans digest one but not the other?',1050],
 ['7.','Which polysaccharide do animals use to store glucose, and where in the body is it stored?',0]];
PL.forEach(([a,b,sp])=>{c.push(step(a,b,{left:360,after:0})); if(sp)c.push(space(sp));});
// Report
c.push(h2('Report Sheet',{pageBreak:true,before:0,rule:true}));
c.push(...nameBlock());
const hdr=t=>({t,span:2,align:AlignmentType.LEFT});
const two=(hd,a,b,h)=>table([4680,4680],[[hdr(hd)],[{t:'**'+a+'**'},{t:'**'+b+'**'}],['','']],{header:1,h:[0,0,h]});
c.push(h3('A. Monosaccharides',{before:120}));
c.push(table([4680,4680],[[hdr('A.1 Fischer projections of glyceraldehyde')],[{t:'**L-Glyceraldehyde**'},{t:'**D-Glyceraldehyde**'}],['',''],
 [{t:'**Can the two models be placed exactly on top of each other? How does L-glyceraldehyde differ from D-glyceraldehyde?**',span:2}],[{t:'',span:2}],
 [{t:'**Instructor check:** both models ______________',span:2}]],{header:1,h:[0,0,1760,0,968,440]}));
c.push(space(141));
c.push(table([3120,3120,3120],[[{t:'A.2 D-Glucose',span:3,align:AlignmentType.LEFT}],[{t:'**Fischer projection of D-glucose** (number the carbons; circle the carbon that makes it D)'},{t:'**Haworth structure of α-D-glucose**'},{t:'**Haworth structure of β-D-glucose**'}],['','','']],{header:1,h:[0,0,2816]}));
c.push(P('',{pageBreak:true,after:0}));
c.push(two('A.3 D-Galactose','Fischer projection of D-galactose','Haworth structure of α-D-galactose',3000)); c.push(space(141));
c.push(two('A.3 D-Fructose','Fischer projection of D-fructose','Haworth structure of α-D-fructose',3000));
c.push(h3('B. Disaccharides',{pageBreak:true,before:0}));
const box=(hd,h,extra)=>{const rows=[[{t:hd,align:AlignmentType.LEFT}],['']]; const hs=[0,h]; if(extra){rows.push([extra]); hs.push(450);} return table([9360],rows,{header:1,h:hs});};
c.push(box('B.1 Haworth structure of α-maltose',2050,'Type of glycosidic bond: ______________________')); c.push(space(141));
c.push(box('B.2 Equation for the hydrolysis of α-maltose',1700));
c.push(space(141));
c.push(box('B.3 Equation for the formation of α-lactose from β-D-galactose and α-D-glucose',2150));
c.push(space(141));
c.push(box('B.4 Haworth structure of sucrose (circle the glycosidic bond)',1900,'The glycosidic bond joins carbon ____ of ______________ to carbon ____ of ______________.'));
c.push(h3('C. Polysaccharides',{pageBreak:true,before:0}));
c.push(box('C.1 A portion of amylose (four α-D-glucose units; label the bonds and bracket one repeating unit)',2700)); c.push(space(141));
c.push(table([9360],[[{t:'C.2 A portion of amylopectin with one branch point (label the α-1,4 and α-1,6 bonds)',align:AlignmentType.LEFT}],[''],['**How does amylopectin differ from amylose?**'],['']],{header:1,h:[0,2640,0,968]})); c.push(space(141));
c.push(box('C.3 A portion of cellulose (four β-D-glucose units; label the bonds)',2700));
// Questions
c.push(h2('Questions and Problems',{pageBreak:true,before:0}));
c.push(step('Q.1','How does the structure of D-glucose compare with the structure of D-galactose? Name the carbon where they differ, and describe the difference in both the Fischer projection and the Haworth structure.',{left:0,after:0})); c.push(space(994));
c.push(step('Q.2','What type of glycosidic bond is found in maltose? Which carbon of each glucose unit takes part in it?',{left:0,after:0})); c.push(space(765));
c.push(step('Q.3','Explain why maltose exists as both α and β forms, but sucrose does not.',{left:0,after:0})); c.push(space(994));
c.push(step('Q.4','What monosaccharide forms from the complete hydrolysis of amylose? What two monosaccharides form from the complete hydrolysis of lactose?',{left:0,after:0})); c.push(space(765));
c.push(step('Q.5','What is the difference between the structures of amylose and cellulose? Explain how this difference makes cellulose a strong structural material.',{left:0,after:0})); c.push(space(994));
c.push(step('Q.6','A student draws the Haworth structure of a D-aldohexose with the –OH on carbon 1 pointing up. Is this the α or β anomer? If the student’s sugar is dissolved in water, what will happen to its anomers over time, and why?',{left:0,after:0})); c.push(space(994));
c.push(step('Q.7','Glycogen and amylopectin are both branched polymers of glucose. How is glycogen different, and why is that useful when the body needs glucose quickly?',{left:0,after:0}));
build(c,OUT).then(()=>console.log('wrote',OUT));
