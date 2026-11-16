const L=require('../lablib.js'); const {P,title,h2,h3,h4,bullet,step,sub,materials,note,caution,img,table,space,nameBlock,build,W,D}=L;
const F=process.argv[2]+'/'; const OUT=process.argv[3];
const {Paragraph,AlignmentType}=D; const M=D; const R=s=>new M.MathRun(s); const Fr=(a,b)=>new M.MathFraction({numerator:[R(a)],denominator:[R(b)]});
const mathP=(kids,o={})=>new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:120,after:o.after??200},keepNext:o.keepNext,children:[new M.Math({children:kids})]});
const c=[];
c.push(title('Experiment #11: Aspirin and Analgesics'));
c.push(h3('Goals',{before:0}));
['Synthesize aspirin from salicylic acid by an esterification reaction.',
 'Collect the aspirin by vacuum filtration and calculate the percent yield.',
 'Test the pH and purity of your aspirin and of commercial aspirin products.',
 'Use thin-layer chromatography (TLC) to separate and identify the analgesics in an over-the-counter pain reliever.'].forEach(s=>c.push(bullet(s)));
c.push(h2('Introduction'));
c.push(P('People have chewed willow bark to lower fever and relieve pain since at least the time of Hippocrates (around 400 BC). In the 1800s, chemists found that the active compound in willow bark is **salicylic acid**. Salicylic acid relieves pain and fever, but it also irritates the stomach and the lining of the mouth and throat. Much of this irritation comes from its **phenol** group (an –OH attached directly to a benzene ring). In 1897, chemists at the Bayer Company in Germany converted that phenol into an ester by adding a two-carbon acetyl group. The product, **acetylsalicylic acid**, is aspirin.'));
c.push(P('Aspirin works by blocking an enzyme (cyclooxygenase) that makes **prostaglandins**, 20-carbon fatty acid derivatives that form at the site of an injury and cause pain, fever, and inflammation. A commercial aspirin tablet contains about 325 mg of acetylsalicylic acid mixed with a starch binder and sometimes buffers or caffeine. Buffered aspirin contains a mild base that reduces stomach irritation caused by aspirin’s carboxylic acid group.'));
c.push(h3('A. Preparation of Aspirin'));
c.push(P('Aspirin is an ester. In Experiment #6, you made esters from a carboxylic acid and an alcohol. That reaction is slow, so here the acetyl group comes from **acetic anhydride**, which reacts much faster with the phenol –OH of salicylic acid. Phosphoric acid (H_{3}PO_{4}) is the catalyst, and acetic acid is a by-product (Figure 1). Acetic anhydride is used in excess, so **salicylic acid is the limiting reactant**. After the reaction, water is added to destroy the leftover acetic anhydride (it reacts with water to form acetic acid) and to make the aspirin crystallize. **The aspirin you prepare is impure and must never be taken internally.**',{keepNext:true}));
c.push(...img(F+'fig10_1.png',624,174,'**Figure 1:** Synthesis of aspirin from salicylic acid and acetic anhydride.'));
c.push(P('The **theoretical yield** is the maximum mass of aspirin that can form from the salicylic acid you used. It is calculated with stoichiometry from CHEM 3A. For example, from 2.00 g of salicylic acid:',{keepNext:true}));
c.push(mathP([R('2.00 g salicylic acid × '),Fr('1 mol salicylic acid','138.12 g salicylic acid'),R(' × '),Fr('1 mol aspirin','1 mol salicylic acid'),R(' × '),Fr('180.16 g aspirin','1 mol aspirin'),R(' = 2.61 g aspirin')]));
c.push(P('The **percent yield** compares the mass of aspirin you actually collect with the theoretical yield. If you collect 2.25 g of aspirin:',{keepNext:true}));
c.push(mathP([R('percent yield = '),Fr('actual yield (g)','theoretical yield (g)'),R(' × 100% = '),Fr('2.25 g','2.61 g'),R(' × 100% = 86.2%')]));
c.push(P('A percent yield above 100% usually means the crystals were still wet when they were weighed.'));
c.push(h3('B. Testing Aspirin Products'));
c.push(P('**pH:** Aspirin is a carboxylic acid, so it is a weak acid in water. Buffered aspirin contains a base, so its solution should be less acidic (higher pH) than plain aspirin.'));
c.push(P('**Purity (iron(III) chloride test):** Iron(III) ions (Fe^{3+}) react with phenols to form a **purple** complex. Salicylic acid has a phenol group, but in aspirin that –OH has been converted to an ester, so pure aspirin gives no purple color; the solution stays the yellow-orange color of the FeCl_{3}. A purple color means salicylic acid is present, either as unreacted starting material or because the aspirin has broken down. Over time, moisture hydrolyzes aspirin back into salicylic acid and acetic acid, which is why old aspirin can smell like vinegar.'));
c.push(P('The United States Pharmacopeia (USP), which sets quality standards for medicines, allows only a very small amount of free salicylic acid in aspirin tablets, a tiny fraction of a percent of the aspirin. Measuring an amount that small requires carefully measured samples and an instrument, so this test cannot show whether a sample meets the USP limit. In Part B, tube 1 holds a dilute salicylic acid solution (0.15%) as a **positive control**: it shows the purple color that salicylic acid gives with FeCl_{3}. Compare each sample with it. A sample that stays yellow-orange has little or no detectable salicylic acid; a faint purple shows a small amount; a strong purple shows that much more salicylic acid is present, as in an impure or decomposed sample.'));
c.push(h3('C. Analysis of Analgesics by Thin-Layer Chromatography'));
c.push(P('Aspirin is one of several **analgesics** (pain relievers). Others include acetaminophen, ibuprofen, and naproxen (Figure 2). Aspirin, ibuprofen, and naproxen also reduce inflammation, and all four reduce fever. Some pain relievers also contain caffeine.',{keepNext:true}));
c.push(...img(F+'fig10_2.png',560,292,'**Figure 2:** Structures of common analgesics and caffeine.'));
c.push(P('**Thin-layer chromatography (TLC)** separates the substances in a mixture based on polarity. A TLC plate is coated with a thin layer of silica gel, the **stationary phase**. Silica gel is very polar. Small spots of each sample are placed on a pencil line (the **origin**) near the bottom of the plate, and the plate is stood in a shallow layer of solvent, the **mobile phase**. In this experiment, the solvent is 75% ethyl acetate and 25% hexane, which is much less polar than silica gel.'));
c.push(P('The solvent climbs the plate by capillary action, like water climbing a paper towel, and carries the substances with it. Each substance is pulled two ways: it sticks to the polar silica, and it dissolves in the moving solvent. **More polar substances stick more strongly to the silica and travel a shorter distance. Less polar substances stay dissolved in the solvent and travel farther.** When the solvent is near the top of the plate, the plate is removed and the solvent front is marked. These analgesics are colorless, so the spots are viewed under ultraviolet (UV) light (254 nm). The plate contains a compound that glows under UV light, and each spot shows up as a dark area where the substance blocks the glow.'));
c.push(P('Each spot is described by its **R_{f} value** (retention factor), the distance the substance moved divided by the distance the solvent moved (Figure 3). An R_{f} value has no units and is always between 0 and 1. On the same kind of plate with the same solvent, a substance always has about the same R_{f}, so an unknown substance can be identified by matching its R_{f} to that of a known substance run on the same plate.',{keepNext:true}));
c.push(mathP([new M.MathSubScript({children:[R('R')],subScript:[R('f')]}),R(' = '),Fr('distance moved by substance (cm)','distance moved by solvent (cm)')],{keepNext:true}));
c.push(...img(F+'fig10_3.png',580,273,'**Figure 3:** Spotting, developing, and measuring a TLC plate.'));
// Hazards
c.push(h3('Hazards and Safety Instructions'));
c.push(P('Wear safety goggles at all times. Wear gloves when handling acetic anhydride, phosphoric acid, and TLC plates.',{after:100}));
c.push(bullet('**Corrosive and Irritating:** Acetic anhydride causes severe burns, and its vapors make your eyes water and irritate your nose and lungs. It reacts with water, releasing heat and acetic acid vapor. 85% phosphoric acid (H_{3}PO_{4}) is corrosive. Dispense and use both only in the fume hood, keep your face away from the flask opening, and use dry glassware. If either gets on your skin or in your eyes, rinse with water for 15 minutes and tell your instructor.'));
c.push(bullet('**Flammable:** Acetic anhydride, ethyl acetate, hexane, and ethanol are flammable. Keep them away from hot plates and flames. Hexane and ethyl acetate vapors are harmful; keep the TLC solvent in the fume hood and the developing chamber covered.'));
c.push(bullet('**Vacuum Filtration:** Clamp the filter flask to a ring stand so it cannot tip over. Check the flask and funnel for cracks before you start; cracked glass can implode under vacuum. When you are done, remove the vacuum hose from the flask *before* turning off the vacuum.'));
c.push(bullet('**Thermal Hazards:** Handle the flask in the boiling water bath with a clamp or tongs. Hot plates and water baths stay hot after they are turned off.'));
c.push(bullet('**UV Light:** Never look directly into the UV lamp, and keep your skin out of the beam. Look at the plate, not the lamp.'));
c.push(bullet('**Iron(III) Chloride:** FeCl_{3} irritates skin and eyes and stains skin and clothing.'));
c.push(bullet('**Do Not Ingest:** The aspirin you make is impure. Never taste any chemical or tablet in the lab.'));
c.push(h3('Waste Instructions'));
c.push(bullet('**Non-halogenated organic waste container:** the liquid filtrate from the vacuum filtration in Part A (water, acetic acid, and phosphoric acid), the test tubes from Part B (FeCl_{3} tests with aspirin and salicylic acid), the TLC solvent (ethyl acetate and hexane), and any analgesic solutions left in the spot plate.'));
c.push(bullet('**Solid waste container:** your aspirin crystals (after Part B) and the filter paper.'));
c.push(bullet('**Broken glass box:** used glass capillary tubes. **Trash:** toothpicks, used TLC plates, and gloves.'));
// Procedure
c.push(h2('Procedure',{pageBreak:true,before:0}));
c.push(note('Instructor Notes:','Start a boiling water bath (a 600-mL beaker about half full of water on a hot plate) in the fume hood at the beginning of lab for A.3, and place a wash bottle of distilled water in an ice bath for A.4–A.7. The TLC plates take 30–60 minutes to develop, so students can set up and start Part C while their reaction heats in A.3 or while their crystals dry in A.8.'));
c.push(h3('A. Synthesis of Aspirin'));
c.push(materials('125-mL Erlenmeyer flask, watch glass (or weighing boat), balance, salicylic acid, acetic anhydride, 10-mL graduated cylinder, 50-mL graduated cylinder, stirring rod, dropper, 85% H_{3}PO_{4}, 600-mL beaker (boiling water bath), hot plate, flask tongs or clamp, ice bath, wash bottle of ice-cold distilled water, Büchner funnel, rubber adapter, filter flask, filter paper, vacuum hose, ring stand, clamp, spatula'));
c.push(step('A.1','Weigh a clean, dry watch glass. Add about 2.00 g of salicylic acid and weigh again. Record all digits. Transfer the salicylic acid to a clean, **dry** 125-mL Erlenmeyer flask.'));
c.push(step('A.2','**In the fume hood:** add 5 mL of acetic anhydride to the flask. Slowly and carefully add 10 drops of 85% phosphoric acid (H_{3}PO_{4}). Stir gently with a stirring rod.'));
c.push(step('A.3','**In the fume hood:** using a clamp or flask tongs, place the flask in the boiling water bath. Heat for about 10 minutes, stirring occasionally, until all of the solid has dissolved. Remove the flask and let it cool to room temperature in the hood (about 5 minutes).'));
c.push(step('A.4','**In the fume hood:** add 20 drops of ice-cold water to the cooled mixture, *one drop at a time*. The water destroys the leftover acetic anhydride; the mixture may get warm and give off acetic acid vapor, so keep your face away from the flask. When the reaction stops, add 50 mL of ice-cold water and stir.'));
c.push(step('A.5','Place the flask in the ice bath for 10 minutes, stirring occasionally. Crystals of aspirin should form. If no crystals form, gently scratch the inside of the flask with the stirring rod to give the crystals a place to start growing.'));
c.push(h4('Collecting the Aspirin Crystals'));
c.push(step('A.6','Set up the vacuum filtration apparatus shown in Figure 4. Clamp the filter flask to a ring stand. Place the rubber adapter and Büchner funnel on the flask, and lay a piece of filter paper flat in the funnel. Attach the vacuum hose to the side arm and turn on the vacuum. Wet the filter paper with a little ice-cold water so that it seals against the funnel.',{keepNext:true}));
c.push(...img(F+'fig10_4.png',420,239,'**Figure 4:** Vacuum filtration with a Büchner funnel.'));
c.push(step('A.7','Swirl the flask and pour the aspirin mixture onto the filter paper. Rinse the flask with small portions of ice-cold water and pour them onto the filter to transfer all of the crystals. Leave the vacuum on for 5–10 minutes to pull air through the crystals and dry them as much as possible; press them with a spatula to check that they are dry. Remove the hose from the flask, then turn off the vacuum.'));
c.push(step('A.8','Weigh a clean, dry watch glass. Use a spatula to transfer the aspirin crystals to the watch glass without scraping off pieces of the filter paper. Let the crystals air-dry, then weigh the watch glass with the aspirin. Save the crystals for Part B.'));
c.push(h4('Calculations'));
c.push(step('A.9','Calculate the mass of salicylic acid used.'));
c.push(step('A.10','Calculate the theoretical yield of aspirin (see the example in the Introduction).'));
c.push(step('A.11','Calculate the mass of aspirin collected (your actual yield).'));
c.push(step('A.12','Calculate the percent yield of aspirin.'));
c.push(h3('B. Testing Aspirin Products'));
c.push(materials('5 test tubes, test tube rack, mortar and pestle, spatula, stirring rod, aspirin from Part A, commercial aspirin tablet, buffered aspirin tablet, acetylsalicylic acid (reagent grade), 0.15% salicylic acid solution, pH paper, 1% FeCl_{3}'));
c.push(step('B.1','**pH of aspirin products:** Label five test tubes. Place 3 mL of 0.15% salicylic acid solution in tube 1. In tubes 2–5, place a small amount (a few crystals, or enough powder to cover the tip of a spatula) of each substance below and add 3 mL of water. Crush tablets with a mortar and pestle first. Record the brand names.',{after:80}));
c.push(table([1400,7960],[['Tube','Sample'],['1','0.15% salicylic acid (positive control)'],['2','Commercial aspirin (crushed)'],['3','Buffered aspirin (crushed)'],['4','Aspirin made in Part A'],['5','Acetylsalicylic acid (reagent grade)']],{firstColBold:true}));
c.push(sub('Stir each mixture, then touch the stirring rod to a piece of pH paper and compare the color with the chart on the container. Rinse and dry the stirring rod between samples. Record the pH of each sample. Save the tubes for B.2.'));
c.push(step('B.2','**Purity test:** Add 5 drops of 1% FeCl_{3} solution to each tube and mix. Record the color of each. Tube 1 is the positive control: it shows the purple color of salicylic acid. For each of tubes 2–5, record whether there is no purple (yellow-orange), a faint purple, or a strong purple. This test shows whether salicylic acid is present; it cannot show whether a sample meets the USP limit. No matter what the result, your laboratory aspirin must never be ingested.'));
c.push(h3('C. Analysis of Analgesics by TLC'));
c.push(materials('400-mL beaker (developing chamber), parafilm, rubber band, marker, TLC solvent (75% ethyl acetate, 25% hexane), silica gel TLC plate with fluorescent indicator (F254), 6 cm × 10 cm, pencil, ruler, gloves, spot plate, glass capillary tubes or toothpicks, dropper bottles of 1% solutions in ethanol of aspirin, ibuprofen, acetaminophen, naproxen, and caffeine, over-the-counter (OTC) pain reliever solution, UV lamp (254 nm)'));
c.push(step('C.1','**Prepare the developing chamber:** Label a 400-mL beaker with your initials. **In the fume hood,** pour in TLC solvent to a depth of about ½ cm. Cover the beaker with parafilm (hold it with a rubber band if needed) and let it stand in the hood for a few minutes so the air inside fills with solvent vapor.'));
c.push(step('C.2','**Prepare the plate:** Wearing gloves, handle the TLC plate only by its edges so oils from your fingers do not get on the silica. Using a **pencil** (ink would dissolve and run in the solvent), lightly draw a line 1 cm from the bottom of the plate. This is the origin. Make six small, evenly spaced marks on the line, at least ½ cm from each edge, and number them 1–6 just below the line.'));
c.push(step('C.3','**Spot the plate:** Put a few drops of each solution in a numbered well of a spot plate: 1 aspirin, 2 ibuprofen, 3 acetaminophen, 4 naproxen, 5 caffeine, 6 OTC pain reliever (record the brand). Using a clean capillary tube or toothpick for each solution, touch a tiny drop to its mark on the origin. Keep the spots small (2–3 mm across). Let each spot dry, then apply a second drop on top of it.'));
c.push(step('C.4','**Develop the plate:** Carefully stand the plate in the developing chamber with the spotted end down. **The solvent must be below the origin line**; if it is not, remove some solvent with a dropper. Do not let the plate touch the sides of the beaker. Cover the chamber and do not move it while the solvent climbs the plate (30–60 minutes). When the solvent front is about 1 cm from the top, remove the plate and **immediately** mark the solvent front with a pencil line. Let the plate dry in the fume hood. Pour the used solvent into the non-halogenated organic waste container.'));
c.push(step('C.5','**View the spots:** Look at the plate under the UV lamp (do not look into the lamp). Lightly circle each dark spot with a pencil. Sketch the plate on your report sheet.'));
c.push(step('C.6','Measure the distance from the origin to the solvent front, and from the origin to the center of each spot, to the nearest 0.1 cm. Calculate the R_{f} value of each spot.'));
c.push(step('C.7','Identify the analgesic(s) in the OTC pain reliever by matching the R_{f} values of its spots to those of the known substances.'));
// Pre-lab
c.push(h2('Pre-Lab Questions',{pageBreak:true,before:0}));
const PL=[['1.','Acetic anhydride and 85% phosphoric acid must be dispensed and used in the fume hood. Give two hazards of acetic anhydride.',880],
 ['2.','In A.4, why is the water added one drop at a time before the 50 mL of water is added? What does the water react with?',880],
 ['3.','Where does each of the following go at the end of lab? (a) the filtrate from the vacuum filtration (b) the TLC solvent (c) used glass capillary tubes',880],
 ['4.','Calculate the theoretical yield of aspirin from 1.85 g of salicylic acid. Show your work.',1000],
 ['5.','What does a purple color with FeCl_{3} tell you about a sample? Would pure aspirin turn purple? Explain using the functional groups of salicylic acid and aspirin. What is the purpose of tube 1 in B.2?',1000],
 ['6.','On a silica gel TLC plate, which travels farther, a more polar or a less polar substance? Why must the origin line be drawn in pencil and placed above the solvent level?',1000],
 ['7.','A spot moves 3.2 cm while the solvent moves 7.5 cm. Calculate the R_{f} value.',0]];
PL.forEach(([a,b,sp])=>{c.push(step(a,b,{left:360,after:0})); if(sp)c.push(space(sp));});
// Report
c.push(h2('Report Sheet',{pageBreak:true,before:0,rule:true}));
c.push(...nameBlock());
c.push(h3('A. Synthesis of Aspirin',{before:120}));
const RT=(a,u)=>[a,{t:u||'',align:AlignmentType.RIGHT}];
c.push(table([5400,3960],[RT('**A.1** Mass of watch glass','g'),RT('Mass of watch glass and salicylic acid','g'),RT('**A.8** Mass of watch glass','g'),RT('Mass of watch glass and aspirin','g'),
 RT('**A.9** Mass of salicylic acid','g'),RT(['**A.10** Theoretical yield of aspirin','(show your work)'],'g'),RT('**A.11** Mass of aspirin collected (actual yield)','g'),RT(['**A.12** Percent yield','(show your work)'],'%')],{header:0,h:[480,480,480,480,480,1900,480,1500]}));
c.push(h3('B. Testing Aspirin Products',{pageBreak:true,before:0}));
c.push(table([3300,1300,2560,2200],[['Sample','B.1 pH','B.2 Color with FeCl_{3}','Salicylic acid: none, faint, or strong purple?'],
 ['**1.** 0.15% salicylic acid (positive control)','','',{t:'(positive control)',shade:'F2F2F2'}],[['**2.** Commercial aspirin','Brand: _______________'],'','',''],[['**3.** Buffered aspirin','Brand: _______________'],'','',''],['**4.** Aspirin made in Part A','','',''],['**5.** Acetylsalicylic acid (reagent)','','','']],{h:800}));
c.push(h3('C. Analysis of Analgesics by TLC',{pageBreak:true,before:0}));
c.push(table([3600,5760],[['**C.5** Sketch of your TLC plate','OTC pain reliever brand: ________________________']],{header:0,h:4400}));
c.push(P('**C.6** Distance moved by solvent: ____________ cm',{before:160,after:120}));
c.push(table([1100,3000,2630,2630],[['Spot','Substance','C.6 Distance moved by spot (cm)','C.6 R_{f} value'],
 ['1','Aspirin','',''],['2','Ibuprofen','',''],['3','Acetaminophen','',''],['4','Naproxen','',''],['5','Caffeine','',''],['6','OTC pain reliever (each spot)','','']],{h:600,firstColBold:true}));
c.push(P('**C.7** Analgesic(s) identified in the OTC pain reliever, and the R_{f} evidence:',{before:200,after:900}));
// Questions
c.push(h2('Questions and Problems',{pageBreak:true,before:0}));
const Q=[['Q.1','Draw the structure of aspirin. Circle and label the ester group and the carboxylic acid group.'],
 ['Q.2','A typical aspirin tablet contains 325 mg of aspirin (the rest is binder). How many tablets could be made from the aspirin you synthesized? Show your work.'],
 ['Q.3','Explain any differences in the pH values of the samples tested in B.1. How does the pH of the buffered aspirin compare with that of the non-buffered aspirin, and why?'],
 ['Q.4','Which sample gave the darkest purple color with FeCl_{3}? What substance causes this color, and what does it tell you about that sample?'],
 ['Q.5','Aspirin that has been stored for a long time may smell like vinegar and give a purple color with FeCl_{3}. Name the reaction that causes this and write the equation for it.'],
 ['Q.6','Which known analgesic traveled the farthest on your TLC plate, and which traveled the shortest distance? Use polarity to explain the difference.']];
Q.forEach(([a,b],i)=>{c.push(step(a,b,{left:0,after:0})); c.push(space(i==Q.length-1?0:(i==4?1900:1300)));});
build(c,OUT).then(()=>console.log('wrote',OUT));
