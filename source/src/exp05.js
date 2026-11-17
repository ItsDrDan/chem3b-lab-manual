const L=require('../lablib.js'); const {P,title,h2,h3,h4,bullet,step,sub,materials,note,caution,img,table,space,nameBlock,build,W,D}=L;
const F=process.argv[2]+'/'; const OUT=process.argv[3]; const {AlignmentType,Paragraph,ImageRun,TableCell}=D; const fs=require('fs');
const c=[];
c.push(title('Experiment #5: Aldehydes and Ketones'));
c.push(h3('Goals',{before:0}));
['Write the functional groups of aldehydes and ketones, and name simple aldehydes and ketones.',
 'Determine chemical and physical properties of aldehydes and ketones.',
 'Perform chemical tests (iodoform and Tollens’) to distinguish between aldehydes and ketones, and use them to classify an unknown.'].forEach(s=>c.push(bullet(s)));
c.push(h2('Introduction'));
c.push(h3('A. Structures of Some Aldehydes and Ketones',{before:120}));
c.push(P('Aldehydes and ketones both contain the **carbonyl group**, a carbon atom double-bonded to an oxygen atom (C=O). In an **aldehyde**, the carbonyl carbon has at least one hydrogen atom attached, so the aldehyde group (–CHO) is always at the end of a carbon chain. In a **ketone**, the carbonyl carbon is bonded to two other carbon atoms, so the carbonyl group is located within the chain (Figure 1). Oxygen is more electronegative than carbon, so the C=O bond is polar: the oxygen carries a partial negative charge and the carbon a partial positive charge.',{keepNext:true}));
c.push(...img(F+'fig5_1.png',624,150,'**Figure 1:** The carbonyl group and some common aldehydes and a ketone (common names, with IUPAC names in parentheses).'));
c.push(P('**Naming.** In the IUPAC system, an aldehyde is named by replacing the final *-e* of the alkane name with **-al** (ethane → ethanal). The aldehyde carbon is always carbon 1, so no number is needed. A ketone is named by replacing the *-e* with **-one** and giving the carbonyl carbon the lowest possible number (pentane → 2-pentanone); in a ring, the carbonyl carbon is carbon 1 (cyclopentanone). Many small aldehydes and ketones also have **common names**. Common names of aldehydes use the prefixes form- (1 C), acet- (2 C), propion- (3 C), and butyr- (4 C) with *-aldehyde*. Common names of ketones list the two alkyl groups attached to the carbonyl in alphabetical order, followed by the word *ketone* (for example, ethyl propyl ketone is 3-hexanone). Substituted benzaldehydes are named by numbering the ring from the carbon that holds the –CHO group (for example, 4-chlorobenzaldehyde).'));
c.push(h3('B. Properties of Aldehydes and Ketones'));
c.push(P('Many aldehydes and ketones have sharp or distinctive odors. If you have taken a biology class, you may have noticed the odor of formaldehyde, a common preservative for dissection specimens. When you remove nail polish, you may notice the strong odor of acetone, the simplest ketone and one of the most widely used solvents in an organic chemistry lab. Aromatic aldehydes have a variety of odors; benzaldehyde, the simplest aromatic aldehyde, smells like almonds. Many flavors and fragrances are aldehydes or ketones. To smell a sample safely, hold it about 15 cm from your face and **waft** (fan) the vapor toward your nose with your hand. Never put your nose directly over the container.'));
c.push(P('**Solubility in water.** The partially negative oxygen of the carbonyl group can **accept** a hydrogen bond from a water molecule. (Aldehydes and ketones have no O–H bond, so they cannot hydrogen bond with each other.) Aldehydes and ketones with a small number of carbon atoms are soluble in water. As the nonpolar hydrocarbon part of the molecule gets larger, solubility in water drops. A benzene ring is a large nonpolar group, so aromatic aldehydes are much less soluble than small aldehydes. When you mix a sample with water in B.3, a **single clear layer** means the sample is soluble; **two layers, oily droplets, or cloudiness** means it is insoluble (or only slightly soluble).'));
c.push(h3('C. Iodoform Test for Methyl Ketones'));
c.push(P('A **methyl ketone** has a methyl group (–CH_{3}) bonded directly to the carbonyl carbon (CH_{3}–CO–). The iodoform test detects this group. The **iodine test reagent** is iodine (I_{2}) dissolved in potassium iodide solution, and it is **dark red-brown**. In sodium hydroxide solution, iodine replaces the three hydrogen atoms of the methyl group, and the C–C bond to that carbon then breaks. The products are a carboxylate ion, which stays dissolved, and **iodoform** (CHI_{3}), a **pale yellow solid** with a strong medicinal odor that was once used as an antiseptic (Figure 2).',{keepNext:true}));
c.push(...img(F+'fig5_2.png',624,140,'**Figure 2:** The iodoform test. A methyl ketone such as acetone forms a yellow precipitate of iodoform.'));
c.push(P('**Positive result:** a pale yellow **solid** (a cloudy yellow precipitate that settles) forms within a few minutes. **Negative result:** no solid forms. The liquid stays clear; it may keep the brown iodine color or fade to pale yellow as the NaOH uses up the iodine. A yellow *solution* is not a positive result; only a yellow *solid* is. Ketones whose carbonyl carbon is bonded to two groups larger than methyl (such as 3-pentanone) do not react. Acetaldehyde (CH_{3}CHO) is the only aldehyde that gives a positive iodoform test.'));
c.push(h3('D. Oxidation of Aldehydes and Ketones'));
c.push(P('In organic chemistry, **oxidation** usually means a gain of oxygen atoms or a loss of hydrogen atoms. The hydrogen on the carbonyl carbon of an aldehyde makes it easy to oxidize: the aldehyde gains an oxygen atom and becomes a **carboxylic acid** (in basic solution, its carboxylate ion). A ketone has no hydrogen on its carbonyl carbon, and it cannot be oxidized without breaking a C–C bond, so mild oxidizing agents do not react with ketones. Tests that use mild oxidizing agents therefore tell aldehydes apart from ketones.'));
c.push(P('**Tollens’ test** (the silver-mirror test) is the test you will use today. **Tollens’ reagent** is a **colorless**, basic solution of silver ions bonded to ammonia, Ag(NH_{3})_{2}^{+}, made from silver nitrate, ammonia, and sodium hydroxide. When it is warmed with an aldehyde, the aldehyde is oxidized and the silver ions (Ag^{+}) are **reduced** to silver metal (Ag), which plates out on the clean glass (Figure 3).',{keepNext:true}));
c.push(...img(F+'fig5_3.png',600,228,'**Figure 3:** Tollens’ test. An aldehyde reduces silver ions to silver metal; a ketone does not react.'));
c.push(P('**Positive result:** a shiny **silver mirror** forms on the inside of the test tube, or a **gray-to-black precipitate** of silver forms (common when the glass is not perfectly clean or the aldehyde does not dissolve well). **Negative result:** the solution stays clear and colorless, or only a faint gray haze appears. Tollens’ reagent slowly decomposes when it is heated for a long time, and it can then darken or deposit a little silver even with a ketone. This is a **false positive**. To avoid being misled, heat all tubes for the same 5 minutes and compare each tube with the ketone (acetone) tube heated beside it; a true positive gives a clear mirror or a heavy dark deposit, well beyond any haze in the ketone tube. Tollens’ reagent must be made fresh and must never be stored: on standing, it can form explosive silver compounds.'));
c.push(P('**Benedict’s test** is another oxidation test for aldehydes. Benedict’s reagent contains **blue** copper(II) ions (Cu^{2+}); an aldehyde reduces them to copper(I) oxide (Cu_{2}O), a **brick-red** precipitate, while a negative result stays blue. Aromatic aldehydes such as benzaldehyde usually give a negative Benedict’s test. You will not use Benedict’s reagent today; you will use it to test sugars in Experiment #9.'));
c.push(h3('E. Identification of an Unknown'));
c.push(P('Your unknown is an aldehyde or a ketone. Each test gives one piece of evidence (Table 1). Odor may match one of the known compounds, solubility tells you whether the molecule is small or large, the iodoform test tells you whether it has a CH_{3}–CO– group, and the Tollens’ test tells you whether it is an aldehyde. Compare the unknown with the known compounds you tested beside it.'));
c.push(P('**Table 1: Summary of the Tests in This Experiment**',{align:AlignmentType.CENTER,after:80,keepNext:true}));
c.push(table([1700,2300,2300,1660,1400],[['Test','Reagent (color)','Positive result','Negative result','A positive result means'],
 ['B.3 Solubility','Water (colorless)','One clear layer (soluble)','Two layers, droplets, or cloudiness','Small molecule (few carbon atoms)'],
 ['C. Iodoform','Iodine test reagent, I_{2} in KI (dark red-brown), with NaOH','Pale yellow solid (CHI_{3}) forms','No solid; clear liquid, brown or pale yellow','Methyl ketone (CH_{3}–CO–), or acetaldehyde'],
 ['D. Tollens’','Ag(NH_{3})_{2}^{+} (colorless)','Silver mirror or gray-black precipitate','Stays clear and colorless (faint haze at most)','Aldehyde']],{firstColBold:true}));
// Hazards
c.push(h3('Hazards and Safety Instructions'));
c.push(P('Wear safety goggles at all times. Wear nitrile gloves when you handle the NaOH, the iodine test reagent, and Tollens’ reagent.',{after:100}));
c.push(bullet('**Corrosive Bases:** 10% NaOH and Tollens’ reagent (which contains NaOH and ammonia) are corrosive and can damage the eyes quickly. Ammonia vapor irritates the nose and lungs. If either touches your skin or eyes, rinse with water for 15 minutes and tell your instructor.'));
c.push(bullet('**Tollens’ Reagent (Silver):** Silver nitrate in the reagent stains skin and clothing brown-black; the stains appear hours later and do not wash off. Tollens’ reagent that is stored or allowed to dry out can form explosive silver compounds, so it is made fresh, used at once, and **discarded into the waste container right after D.4**. Never save it, and never pour it down the sink.'));
c.push(bullet('**Iodine Test Reagent and Iodoform:** Iodine irritates skin, eyes, and lungs and stains skin, clothing, and benchtops brown. Iodoform is an irritant with a strong odor; do not smell the Part C tubes directly.'));
c.push(bullet('**Flammable and Combustible:** Acetone, cyclohexanone, 2,3-butanedione, and camphor are flammable. Benzaldehyde, anisaldehyde, and cinnamaldehyde are combustible (they burn once heated). Use hot plates only; keep all samples away from flames and hot plate surfaces.'));
c.push(bullet('**Odors and Vapors:** Never put your nose over a vial or test tube. To check an odor, take a breath of fresh air first, then gently waft the vapor toward your nose with your hand, and recap each vial right away. Breathing 2,3-butanedione vapor repeatedly can damage the lungs, and aldehyde vapors irritate the eyes and nose. Never taste any chemical.'));
c.push(bullet('**Thermal Hazards:** Use a test tube holder to move tubes in and out of the warm (50–60 °C) water bath. Set tubes securely in the beaker so they do not tip or splash, and keep an eye on the water level.'));
c.push(h3('Waste Instructions'));
c.push(bullet('**Non-halogenated organic waste container:** the contents of every Part D tube (Tollens’ reagent with the aldehyde and ketone samples), poured out **immediately** after you record your observations in D.4. Never pour Tollens’ reagent down the sink. Place tubes with a silver mirror where your instructor directs; the instructor removes the mirror with dilute nitric acid in the fume hood and puts that rinse in the aqueous waste container. Any unused aldehyde or ketone samples left in your droppers or test tubes also go in this container.'));
c.push(bullet('**Halogenated waste container:** the contents of the Part C tubes (iodine, iodoform, NaOH, and the samples).'));
c.push(bullet('**Do not empty the odor vials** from B.1: recap them and leave them for the next group. Take apart the molecular models and return them to the kit.'));
// Procedure
c.push(h2('Procedure',{pageBreak:true,before:0}));
c.push(note('Instructor Notes:','At the start of lab, set up a **warm water bath at 50–60 °C** with a thermometer for Parts C and D (the stockroom-tested temperature for both tests). Cyclohexanone is not used in Part D because it gave a false-positive Tollens’ result in stockroom trials. Prepare Tollens’ reagent fresh on the day of lab, and discard any leftover reagent into the aqueous waste at the end of lab; never store it. Set out the B.1 odor samples in capped vials. Assign each student an unknown letter. Part D works best in clean test tubes. Make sure all test tubes are clearly labeled.'));
c.push(h3('A. Structures of Some Aldehydes and Ketones with Model Kits'));
c.push(materials('Molecular model kit'));
c.push(step('A.1','Using the model kit, build models of formaldehyde, acetaldehyde, anisaldehyde (4-methoxybenzaldehyde), acetone, 2-butanone, and cyclohexanone. Find the carbonyl group in each model and decide whether the compound is an aldehyde or a ketone.'));
c.push(step('A.2','Draw the condensed structural formula of each compound. (Benzene and cyclohexane rings may be drawn as skeletal rings.)'));
c.push(step('A.3','Write the IUPAC name and the common name (if any) of each compound.'));
c.push(h3('B. Properties of Aldehydes and Ketones'));
c.push(materials('Capped vials of acetone, benzaldehyde, camphor, vanillin, cinnamaldehyde, 2,3-butanedione, and your unknown; textbook, chemistry handbook, or another reliable reference (such as PubChem); 5 test tubes, test tube rack, marker, droppers, 5- or 10-mL graduated cylinder, distilled water, anisaldehyde, benzaldehyde, acetone, cyclohexanone, unknown'));
c.push(h4('Odors of Aldehydes and Ketones'));
c.push(step('B.1','Uncap each vial, carefully waft the vapor toward your nose, and recap it right away. Record the odor of acetone, benzaldehyde, camphor, vanillin, cinnamaldehyde, 2,3-butanedione, and your unknown.'));
c.push(step('B.2','Draw the condensed structural formula of each known compound in B.1. Look up the structures of camphor, vanillin, and cinnamaldehyde in a reliable reference. Identify each compound as an aldehyde or a ketone.'));
c.push(h4('Solubility of Aldehydes and Ketones'));
c.push(step('B.3','Label five test tubes and place 2 mL of distilled water in each. Add 5 drops of anisaldehyde to the first tube, and 5 drops of benzaldehyde, acetone, cyclohexanone, and your unknown to the others (one sample per tube). Flick or gently shake each tube to mix. Record whether you see one clear layer (soluble) or two layers, droplets, or cloudiness (insoluble). **Save the tubes for Part C.**'));
c.push(h3('C. Iodoform Test for Methyl Ketones'));
c.push(materials('Test tubes from B.3, dropper, 10% NaOH, iodine test reagent (I_{2} in KI), warm water bath (50–60 °C) with thermometer, test tube holder'));
c.push(step('C.1','Add 10 drops of 10% NaOH to each of the five tubes from B.3 and mix.'));
c.push(step('C.2','Place the tubes in the 50–60 °C water bath and let them warm for at least 5 minutes.'));
c.push(step('C.3','Add 20 drops of iodine test reagent to each tube and mix. Watch for a few minutes for a pale yellow solid (iodoform) to form. Record the result for each tube as positive (yellow solid) or negative (no solid), and describe the color of the liquid. Empty the tubes into the **halogenated waste container**.'));
c.push(h3('D. Oxidation of Aldehydes and Ketones (Tollens’ Test)'));
c.push(materials('4 clean test tubes, test tube rack, marker, droppers, 10-mL graduated cylinder, anisaldehyde, benzaldehyde, acetone, unknown, Tollens’ reagent (freshly prepared), warm water bath (50–60 °C) with thermometer, test tube holder'));
c.push(step('D.1','Label four clean test tubes with a marker. Place 5 drops of anisaldehyde, benzaldehyde, acetone, and your unknown in separate tubes.'));
c.push(step('D.2','Add 3 mL of Tollens’ reagent to each tube and mix gently.'));
c.push(step('D.3','Place all four tubes in the 50–60 °C water bath **at the same time** for 5 minutes. Make sure the tubes are stable so they do not tip or splash. Do not heat them longer than 5 minutes.'));
c.push(step('D.4','Remove the tubes and look for a silver mirror or a gray-black precipitate of silver, which shows that the sample was oxidized. Compare each tube with the acetone (ketone) tube; *be aware that this test may give a false positive for one or more of the samples* (see Introduction D). Record your observations and identify the compounds that were oxidized. **Immediately** pour the contents of all four tubes into the **non-halogenated organic waste container**.'));
c.push(h3('E. Identification of an Unknown'));
c.push(step('E.1','Record your unknown letter. Summarize your unknown’s results from B.1, B.3, C, and D in the Part E table.'));
c.push(step('E.2','Compare your unknown’s results with those of the known aldehydes and ketones you tested. Decide whether your unknown is an aldehyde or a ketone, whether it is a methyl ketone, and whether it is a small or a large molecule. Explain your conclusion in complete sentences.'));
// Pre-lab
c.push(h2('Pre-Lab Questions',{pageBreak:true,before:0}));
const PL=[['1.','Draw the functional group of an aldehyde and of a ketone. Then draw butanal and 2-butanone, and explain which one Tollens’ reagent would oxidize and why.',1125],
 ['2.','Write the equation for the oxidation of propanal by Tollens’ reagent. Name the functional group of the organic product, and identify what is reduced and what you would see in the test tube.',1125],
 ['3.','Give two hazards of Tollens’ reagent. Why is it poured into the waste right after D.4 instead of being saved?',825],
 ['4.','Where does each of the following go at the end of lab? (a) the Part C tubes (b) the Part D tubes (c) the B.1 odor vials',750],
 ['5.','Which of these compounds would give a positive iodoform test: 2-hexanone, 3-hexanone, pentanal, acetophenone (C_{6}H_{5}COCH_{3})? Describe what a positive tube looks like, and explain why a yellow solution alone is not a positive result.',1125],
 ['6.','In D.3, why are all four tubes heated together for only 5 minutes? How would you tell a true positive Tollens’ result from a false positive?',900],
 ['7.','Predict which is more soluble in water, acetone or benzaldehyde, and explain using hydrogen bonding and the size of the nonpolar part of each molecule.',0]];
PL.forEach(([a,b,sp])=>{c.push(step(a,b,{left:360,after:0})); if(sp)c.push(space(sp));});
// Report
c.push(h2('Report Sheet',{pageBreak:true,before:0,rule:true}));
c.push(...nameBlock());
c.push(h3('A. Structures of Some Aldehydes and Ketones',{before:120}));
const Acell=n=>['**'+n+'**','A.1 Aldehyde or ketone? ______________','A.2 Condensed structural formula:','','','','','','A.3 IUPAC name: _____________________','A.3 Common name: ___________________'];
c.push(table([4680,4680],[[Acell('Formaldehyde'),Acell('Acetaldehyde')],[Acell('Anisaldehyde'),Acell('Acetone')],[Acell('2-Butanone'),Acell('Cyclohexanone')]],{header:0}));
c.push(h3('B. Properties of Aldehydes and Ketones',{pageBreak:true,before:0}));
c.push(table([2100,1900,3460,1900],[['Compound','B.1 Odor','B.2 Condensed structural formula','B.2 Aldehyde or ketone?'],
 ['Acetone','','',''],['Benzaldehyde','','',''],[['Camphor','*(research the structure)*'],'','',''],[['Vanillin','*(research the structure)*'],'','',''],[['Cinnamaldehyde','*(research the structure)*'],'','',''],['2,3-Butanedione','','',''],
 [['Unknown','Letter ______'],'',{t:'(not required)',shade:'F2F2F2',align:AlignmentType.CENTER},{t:'(see Part E)',shade:'F2F2F2',align:AlignmentType.CENTER}]],{h:1350,firstColBold:true}));
c.push(h3('B.3, C, and D. Solubility, Iodoform Test, and Tollens’ Test',{pageBreak:true,before:0}));
c.push(table([2100,2200,2530,2530],[['Compound',['B.3 Solubility','One layer or two? Soluble?'],['C.3 Iodoform test','Observations; positive or negative?'],['D.4 Tollens’ test','Observations; positive or negative?']],
 ['Anisaldehyde','','',''],['Benzaldehyde','','',''],['Acetone','','',''],['Cyclohexanone','','',{t:'(not tested)',shade:'F2F2F2'}],[['Unknown','Letter ______'],'','','']],{h:1150,firstColBold:true}));
c.push(P('**D.4** Compounds oxidized by Tollens’ reagent, and any results you think were false positives (explain):',{before:200,after:2200}));
c.push(h3('E. Identification of an Unknown',{pageBreak:true,before:0}));
c.push(P('**E.1** Unknown letter: __________',{after:120}));
c.push(table([2100,3630,3630],[['Test','Result for your unknown','Conclusion'],
 ['B.1 Odor','',{t:'Does it smell like one of the known compounds? Which one?'}],['B.3 Solubility in water','','Small (few C atoms) or larger molecule?'],['C. Iodoform test','','Is it a methyl ketone?'],['D. Tollens’ test','','Is it an aldehyde?']],{h:1050,firstColBold:true}));
c.push(P('**E.2** Is your unknown an aldehyde or a ketone? Is it a methyl ketone? Is it a small or a large molecule? Explain your conclusion in complete sentences, using the evidence above.',{before:200,after:3000}));
// Questions
c.push(h2('Questions and Problems',{pageBreak:true,before:0}));
c.push(step('Q.1','Based on your odor observations in lab, is an aldehyde or a ketone present in each of the following household items? Name the compound if you can.',{left:0,after:120}));
[['a.','Artificial butter flavor in popcorn'],['b.','Almond-flavored cookies'],['c.','Cinnamon-flavored candies'],['d.','Nail polish remover']].forEach(([a,b])=>c.push(P('**'+a+'** '+b+'\t______________________________',{indent:{left:540},after:200})));
c.push(step('Q.2','Complete each sentence with the word *soluble* or *insoluble*.',{left:0,after:160,}));
c.push(P('Aldehydes and ketones with one to four carbon atoms are ____________________ in water.',{indent:{left:540},after:200}));
c.push(P('Aldehydes and ketones with five or more carbon atoms are ____________________ in water.',{indent:{left:540},after:240}));
c.push(step('Q.3','Based on your experimental findings, predict the result of the iodoform test and the Tollens’ test for each compound. For a positive test, draw the organic product(s). For a negative test, write NR (no reaction).',{left:0,after:120,keepNext:true}));
const im=(f,w,h)=>new D.Paragraph({alignment:AlignmentType.CENTER,children:[new ImageRun({type:'png',data:fs.readFileSync(F+f),transformation:{width:w,height:h},altText:L.altFor(f)})]});
const bd={style:D.BorderStyle.SINGLE,size:6,color:'000000'}; const bds={top:bd,bottom:bd,left:bd,right:bd};
const hc=(t,w)=>new D.TableCell({borders:bds,width:{size:w,type:D.WidthType.DXA},shading:{fill:'E7ECF5',type:D.ShadingType.CLEAR,color:'auto'},children:[new D.Paragraph({alignment:AlignmentType.CENTER,children:L.runs('**'+t+'**',{size:22})})]});
const ec=(w,kids)=>new D.TableCell({borders:bds,width:{size:w,type:D.WidthType.DXA},verticalAlign:D.VerticalAlign.CENTER,children:kids||[new D.Paragraph({children:[]})]});
const WQ=[3560,2900,2900];
const T3=new D.Table({width:{size:9360,type:D.WidthType.DXA},columnWidths:WQ,layout:D.TableLayoutType.FIXED,rows:[new D.TableRow({cantSplit:true,children:[hc('Compound',WQ[0]),hc('Iodoform test',WQ[1]),hc('Tollens’ test',WQ[2])]}),
 ...[['fig5_q1.png',172,62],['fig5_q2.png',125,62],['fig5_q3.png',203,62],['fig5_q4.png',155,62]].map(([f,w,h])=>new D.TableRow({cantSplit:true,height:{value:1500,rule:D.HeightRule.ATLEAST},children:[ec(WQ[0],[im(f,w,h)]),ec(WQ[1]),ec(WQ[2])]}))]});
c.push(T3);
c.push(step('Q.4','Two isomeric compounds, A and B, have the formula C_{3}H_{6}O. Use the information below to draw the structure and give the name of each compound.',{left:0,after:120,keepNext:true}));
c.push(P('**A.** Compound A forms a silver mirror with Tollens’ reagent but does not give a yellow solid in the iodoform test.',{indent:{left:540},after:1300}));
c.push(P('**B.** Compound B forms a yellow solid in the iodoform test but does not react with Tollens’ reagent.',{indent:{left:540},after:1300}));
c.push(step('Q.5','What can you conclude about the structure and functional group of your unknown? Explain in complete sentences.',{left:0,after:0})); c.push(space(1500));
c.push(step('Q.6','2-Pentanone and 3-pentanone are isomers. Which chemical test from this experiment could you use to tell them apart? Explain in 2–3 sentences, or write the reaction, and describe what you would see for each compound.',{left:0,after:0}));
build(c,OUT).then(()=>console.log('wrote',OUT));
