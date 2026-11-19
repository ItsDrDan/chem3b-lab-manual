const L=require('../lablib.js'); const {checkRow,P,title,h2,h3,h4,bullet,step,sub,materials,note,caution,img,table,space,nameBlock,build,W,D}=L;
const F=process.argv[2]+'/'; const OUT=process.argv[3]; const {AlignmentType}=D;
const c=[];
c.push(title('Draft Experiment: Saponification: Making and Testing Soap'));
c.push(h3('Goals',{before:0}));
['Make soap by heating a fat (coconut oil) with sodium hydroxide, and separate the soap by salting out.','Write the equation for the saponification of a triacylglycerol.','Compare the pH, foaming, and behavior in hard water and in acid of soap and a synthetic detergent.','Observe how soap and detergent form emulsions with oil, and relate micelles to cleaning and to the digestion of fats.'].forEach(s=>c.push(bullet(s)));
c.push(h2('Introduction'));
// A
c.push(h3('A. Fats, Oils, and Saponification',{before:120}));
c.push(P('People have made soap for thousands of years by heating animal fat or plant oil with a strong base. In Experiment #9 you learned that fats and oils are **triacylglycerols**: esters of glycerol and three fatty acids. In Experiment #6 Part C you hydrolyzed an ester, methyl salicylate, with NaOH. That reaction is called **saponification**, which means “soap making.” In this lab you carry out the reaction it is named for.'));
c.push(P('When a triacylglycerol is heated with NaOH, all three ester bonds are broken. The products are **glycerol** and three **carboxylate salts** of the fatty acids (Figure 1). The sodium salt of a fatty acid, such as sodium laurate or sodium stearate, is a **soap**. As in Experiment #6, the product is the salt, not the free fatty acid, because the base neutralizes each fatty acid as it forms.',{keepNext:true}));
c.push(...img(F+'draft_soap_1.png',624,255,'**Figure 1:** Saponification of glyceryl trilaurate, the main triacylglycerol in coconut oil, gives glycerol and sodium laurate (soap).'));
c.push(P('**Why coconut oil?** Oil and NaOH solution do not mix, so the reaction can only happen where the two liquids touch. Many soap recipes add ethanol to help them mix, but ethanol is flammable. In this lab you use **coconut oil** instead, with no ethanol. Most of the fatty acids in coconut oil have short chains of 8 to 14 carbons (Table 1), so it reacts faster than most fats. Steady stirring breaks the oil into small droplets. Once a little soap forms, the soap itself helps the oil and water mix, and the reaction speeds up.'));
c.push(P('**Table 1: Main Fatty Acids in Coconut Oil (approximate)**',{align:AlignmentType.CENTER,after:80,keepNext:true}));
c.push(table([1800,3700,1700,2160],[['Fatty acid','Condensed structural formula','Carbons','Percent of total'],
 ['Lauric','CH_{3}(CH_{2})_{10}COOH','12','about 48%'],['Myristic','CH_{3}(CH_{2})_{12}COOH','14','about 18%'],['Palmitic','CH_{3}(CH_{2})_{14}COOH','16','about 9%'],
 ['Caprylic and capric','CH_{3}(CH_{2})_{6}COOH and CH_{3}(CH_{2})_{8}COOH','8 and 10','about 13%'],['Oleic','CH_{3}(CH_{2})_{7}CH=CH(CH_{2})_{7}COOH','18','about 7%'],
 ['Stearic and linoleic','(see Table 2 of Experiment #9)','18','about 5%']],{firstColBold:true}));
c.push(P('Typical values, within the ranges in the international food standard for coconut oil (source: Codex Alimentarius).',{align:AlignmentType.CENTER,before:60,after:200,run:{size:20}}));
c.push(P('**Salting out:** Soap dissolves in water, but it is much less soluble in very salty water. When you add a lot of sodium chloride (NaCl) to the reaction mixture, the soap separates as white curds that float on top. The glycerol and the leftover NaOH stay dissolved in the salt water, so collecting the curds also removes most of them.',{before:160}));
// B
c.push(h3('B. How Soap Cleans: Micelles and Emulsions'));
c.push(P('A soap molecule has two very different ends (Figure 2). The long hydrocarbon chain is a **nonpolar tail** that attracts oil and grease (“like dissolves like”). The carboxylate end, –COO^{−} Na^{+}, is an ionic, **polar head** that attracts water. In water, soap molecules gather into tiny spheres called **micelles**: the tails point inward, away from the water, and the charged heads face the water. Oil and grease dissolve in the nonpolar center of a micelle. The outside of every micelle is negatively charged, so the micelles repel each other, stay spread through the water, and are rinsed away, carrying the grease with them.',{keepNext:true}));
c.push(...img(F+'draft_soap_2.png',624,272,'**Figure 2:** A soap molecule has a nonpolar tail and a polar head. In water, soap molecules form a micelle around a droplet of oil.'));
c.push(P('Oil and water shaken together separate again within a minute. With soap present, the oil breaks into tiny droplets, each coated with soap, that stay spread through the water. This mixture is an **emulsion**, and the soap is an **emulsifier**. Your body uses the same idea. In the small intestine, **bile salts** (made from cholesterol) emulsify dietary fats into small droplets, which gives the enzyme **lipase** much more surface to work on (textbook section 15.1). The hand lotion you made in Experiment #9 was also an emulsion. Its emulsifier formed when triethanolamine (a base) reacted with stearic acid (a fatty acid): the product is a fatty acid salt, which is a soap.'));
// C
c.push(h3('C. Soap in Hard Water and Acid; Synthetic Detergents'));
c.push(P('**Soap solutions are basic.** A carboxylate ion is the conjugate base of a weak acid (the fatty acid). It takes an H^{+} from a few water molecules, which forms some fatty acid and OH^{−}: RCOO^{−} + H_{2}O ⇌ RCOOH + OH^{−}. A soap solution therefore has a pH above 7, usually about 9–10. Soap that still contains unreacted NaOH has an even higher pH; that is one reason homemade soap must be tested and cured (aged) before anyone uses it.'));
c.push(P('**Hard water** contains dissolved calcium (Ca^{2+}) and magnesium (Mg^{2+}) ions. These ions replace Na^{+} and form calcium and magnesium salts of the fatty acids, which do **not** dissolve in water. They come out as a gray-white, greasy solid, the “scum” you see as a ring in a bathtub. The soap that forms scum can no longer make micelles, so it foams poorly and cleans poorly:'));
c.push(P('2 RCOO^{−} Na^{+} + Ca^{2+} → (RCOO^{−})_{2}Ca^{2+}(s) + 2 Na^{+}',{align:AlignmentType.CENTER}));
c.push(P('**In acid**, the carboxylate ion picks up H^{+} and becomes the free fatty acid. Long-chain fatty acids do not dissolve in water, so they separate as a white solid or oily layer, and the foam disappears. You saw the same kind of change in Experiment #6, when HCl turned dissolved sodium salicylate back into solid salicylic acid.'));
c.push(P('**Synthetic detergents** were developed to work where soap fails. A common example is sodium lauryl sulfate, CH_{3}(CH_{2})_{11}OSO_{3}^{−} Na^{+}, found in shampoos, toothpastes, and dish detergents. It has the same kind of long nonpolar tail as soap, but its polar head is a sulfate group. The sulfate ion comes from a strong acid, so it does not pick up H^{+} from water or from dilute acid: detergent solutions are close to neutral and keep working in acid. Its calcium and magnesium salts are much more soluble than those of soap, and commercial detergents also contain ingredients that tie up Ca^{2+} and Mg^{2+}, so detergents keep foaming in hard water.'));
c.push(h4('Tests Used in This Lab'));
c.push(P('**Table 2: Tests and What the Results Mean**',{align:AlignmentType.CENTER,after:80,keepNext:true}));
c.push(table([2300,3560,3500],[['Test','How to do it','What the result means'],
 ['pH paper','Touch a wet stirring rod to the paper; match the color to the chart on the container.','pH below 7: acidic. pH 7: neutral. pH above 7: basic.'],
 ['Foam height','Stopper the tube, shake 10 times, wait 30 seconds, and measure the foam above the liquid with a ruler.','More foam: more of the cleaning agent is still dissolved and forming micelles.'],
 ['Hard water','Add 1% CaCl_{2} or 1% MgSO_{4}, then shake.','Cloudy, with a white solid or scum, and less foam: insoluble calcium or magnesium salts formed.'],
 ['Acid','Add 10% HCl until a drop of the solution turns blue litmus paper red.','White solid or oily layer, and little foam: the free fatty acid formed.'],
 ['Emulsion','Shake oil with the liquid, then watch for layers.','A clear oil layer forms quickly: no emulsion. Stays milky and evenly cloudy: emulsion.']],{firstColBold:true}));
// Hazards
c.push(h3('Hazards and Safety Instructions'));
c.push(P('Wear safety goggles and gloves at all times.',{after:100}));
c.push(bullet('**Corrosive Base:** 6 M sodium hydroxide (NaOH) causes severe skin burns and can cause blindness. Hot NaOH is even more dangerous. Pour it slowly, stir gently so the mixture does not spatter, and never lean over the beaker while it heats. If NaOH touches your skin, rinse with water for 15 minutes; if it gets in your eyes, use the eyewash for 15 minutes. Tell your instructor right away.'));
c.push(bullet('**Caustic Soap:** The soap you make still contains some NaOH. Do not touch it with bare skin, do not use it to wash your hands, and do not take it home. It goes in the solid waste container at the end of lab.'));
c.push(bullet('**Corrosive Acid:** 10% HCl irritates or damages skin and eyes. Rinse any spill on your skin with water for 15 minutes. Test solutions by touching a drop to litmus or pH paper with a stirring rod; never dip the paper into the tube.'));
c.push(bullet('**Thermal Hazards:** The boiling water bath and the hot soap mixture can cause burns. Use beaker tongs and a test tube holder, set hot glassware on a wire mesh, and check glassware for cracks before heating.'));
c.push(bullet('**Vacuum Filtration:** Clamp the filter flask to a ring stand so it cannot tip over, and check the flask for cracks before you turn on the vacuum.'));
c.push(bullet('**Stoppered Test Tubes:** When you shake a stoppered tube, hold the stopper in place with your thumb and point the tube away from everyone.'));
c.push(bullet('**Slippery Spills:** Oil and soap make the bench and floor slippery. Wipe up spills right away with a wet paper towel.'));
c.push(h3('Waste Instructions'));
c.push(bullet('**Aqueous waste container:** the salty filtrate from A.7 (salt water with leftover NaOH and glycerol), and any leftover NaOH, HCl, CaCl_{2}, or MgSO_{4} solution.'));
c.push(bullet('**Non-halogenated organic waste container:** every test tube from Parts B and C (soap, detergent, fatty acid, and vegetable oil mixtures) and any leftover soap test solution from A.8.'));
c.push(bullet('**Solid waste container:** your soap (scrape it off the watch glass), the filter paper, and any soap paste scraped out of the reaction beaker.'));
c.push(bullet('**Trash:** used pH paper, litmus paper, paper towels, and gloves.'));
c.push(bullet('**Never pour coconut oil, soap paste, or soap curds down the sink.** They solidify as they cool and clog the drain.'));
// Procedure
c.push(h2('Procedure',{before:360}));
c.push(note('Instructor Notes:','Run Part A once before lab with the same lot of coconut oil and 6 M NaOH. With steady stirring in a boiling water bath, refined coconut oil is usually done in about 30 minutes; allow up to 45 minutes. **How to tell it is done:** (1) there is no clear, oily layer on top or at the edges, even when stirring stops for a moment; (2) the mixture is a thick, smooth, opaque paste, like pudding; and (3) a pea-size sample dissolves in hot distilled water and foams, with no oil drops floating on top (A.5). Oil drops in the A.5 test mean unreacted fat: keep heating and test again. If the paste gets too thick to stir, students may stir in 1 mL of distilled water at a time. If the soap does not separate in A.6, have students stir in 2–3 g more solid NaCl and cool again. Part A takes about 75 minutes, so one partner stirs while the other runs Parts B and C with the commercial soap and the detergent; both partners test their own soap at the end. Collect all student soap in the solid waste container; it is not for skin use.'));
c.push(h3('A. Making Soap'));
c.push(materials('Coconut oil (refined), 6 M NaOH, saturated NaCl solution, solid NaCl, distilled water, balance, 100-mL beaker, 600-mL beaker (water bath), hot plate, ring stand and utility clamp, glass stirring rod, beaker tongs, 10-mL and 50-mL graduated cylinders, spatula, test tube, test tube holder, ice bath, Büchner funnel, filter paper, filter flask with clamp and vacuum tubing, watch glass, 50-mL beaker'));
c.push(caution('6 M NaOH causes severe burns and can cause blindness, especially when hot. Keep your goggles on, pour slowly, stir gently, and never lean over the beaker.'));
c.push(step('A.1','Fill a 600-mL beaker about half full of tap water and heat it on a hot plate to a gentle boil. Also place a test tube with about 10 mL of distilled water in the water bath (for A.5).'));
c.push(step('A.2','Tare a clean, dry 100-mL beaker on the balance and weigh **5.0 g** of coconut oil into it. Record the mass. Clamp the beaker to a ring stand so that its lower part sits in the boiling water and does not float. Let the oil melt in the water bath, and describe its appearance.'));
c.push(step('A.3','Measure **5.0 mL of 6 M NaOH** in a 10-mL graduated cylinder. Slowly pour it into the melted oil while stirring. Record the appearance of the mixture (one layer or two? clear or cloudy?).'));
c.push(step('A.4','Keep the beaker in the boiling water bath and **stir steadily** with the glass stirring rod for **30 minutes**. Take turns with your partner; do not stop stirring for more than a minute. Every 10 minutes, record the appearance of the mixture. If it becomes too thick to stir, or dry and crusty at the edges, stir in 1 mL of distilled water. Keep the water bath boiling, and add hot water to keep its level up.'));
c.push(step('A.5','**Done test:** after 30 minutes, use the stirring rod to move a pea-size sample of the paste into the test tube of hot distilled water (hold it with a test tube holder). Stir and swirl. If the sample dissolves and foams with **no oil drops** floating on top, the reaction is done. If you see oil drops, heat and stir for 10 more minutes and test again (up to 45 minutes in all). Record your result. **Instructor check:** show the test tube to your instructor before you continue.'));
c.push(step('A.6','**Salting out:** using beaker tongs, take the 100-mL beaker out of the water bath and set it on a wire mesh. Add **25 mL of saturated NaCl solution** and **3 g of solid NaCl**. Stir for 2–3 minutes, breaking up any lumps. Set the beaker in an ice bath for 10 minutes, stirring now and then. Record what you see.'));
c.push(step('A.7','Clamp a filter flask, attach the Büchner funnel, and wet a filter paper with a few drops of saturated NaCl. Turn on the vacuum and pour in the mixture, scraping the curds onto the filter with a spatula. Rinse the soap on the filter with two 5-mL portions of ice-cold saturated NaCl. Leave the vacuum on for 5 minutes, and press the soap with a clean spatula to remove more liquid. Pour the filtrate into the **aqueous waste** container.'));
c.push(step('A.8','Transfer the soap to a tared watch glass and record its mass and appearance (look, but do not touch it). Then make your soap test solution: place about 0.3 g of your soap in a 50-mL beaker, add 30 mL of distilled water, and warm it in the water bath while stirring until the soap dissolves. Label it “Our soap” and let it cool for Parts B and C.'));
c.push(h3('B. Properties of Soap and Detergent'));
c.push(materials('Your soap test solution (A.8), 1% commercial soap solution, 1% dish detergent solution, 9 test tubes and stoppers, test tube rack, 10-mL graduated cylinder, droppers, metric ruler, stirring rod, pH paper, blue litmus paper, 1% CaCl_{2}, 1% MgSO_{4}, 10% HCl, distilled water'));
c.push(P('**Test the commercial soap and the detergent while your soap is heating. Test your own soap when A.8 is done.**'));
c.push(step('B.1','Determine the pH of each of the three solutions (your soap, commercial soap, detergent): dip a clean stirring rod into the solution and touch it to pH paper. Rinse the rod between samples.'));
c.push(step('B.2','For each solution, label three test tubes 1, 2, and 3, and add 2 mL of the solution to each. Add **10 drops** of distilled water to tube 1, 10 drops of 1% CaCl_{2} to tube 2, and 10 drops of 1% MgSO_{4} to tube 3. Stopper each tube and shake it 10 times. After 30 seconds, measure the height of the foam (in cm) with a ruler. Record the foam height and whether the liquid is clear, cloudy, or has a solid or scum.'));
c.push(step('B.3','To tube 1 of each solution, add 10% HCl one drop at a time, mixing after each drop, until a drop of the solution turns blue litmus paper red. Record what you see. Stopper, shake 10 times, and measure the foam height again.'));
c.push(step('B.4','Compare the three cleaning agents. Which one(s) formed a solid in hard water? In acid? Which one kept foaming in both?'));
c.push(h3('C. Emulsions'));
c.push(materials('4 or 5 test tubes and stoppers, test tube rack, 10-mL graduated cylinder, dropper, vegetable oil, distilled water, your soap test solution, 1% commercial soap solution, 1% dish detergent solution, 1% bile salts solution (if available), clock or timer'));
c.push(step('C.1','Label four test tubes 1–4. Add 3 mL of liquid to each: distilled water (tube 1), commercial soap solution (tube 2), detergent solution (tube 3), and your soap solution (tube 4). If your instructor provides 1% bile salts solution, set up tube 5 with 3 mL of it.'));
c.push(step('C.2','Add **10 drops of vegetable oil** to each tube. Stopper each tube and shake it 15 times. Set the tubes in the rack.'));
c.push(step('C.3','Observe each tube right after shaking, after 1 minute, and after 5 minutes. Record whether a clear oil layer forms on top or the mixture stays milky. Decide which tubes formed an emulsion.'));
// Pre-lab
c.push(h2('Pre-Lab Questions',{pageBreak:true,before:0}));
const PL=[['1.','Give two hazards of 6 M NaOH. Why is it more dangerous when hot? What should you do if NaOH gets in your eyes?',1150],
 ['2.','Why must you never use the soap you make in this lab on your skin? Where does it go at the end of lab?',950],
 ['3.','Where does each of these go: (a) the salty filtrate from A.7, (b) the test tubes from Parts B and C? Why must coconut oil and soap paste never go down the sink?',1150],
 ['4.','What two kinds of products form when a triacylglycerol is heated with NaOH? Which one is the soap? In the A.5 done test, what result shows that the reaction is finished?',1150],
 ['5.','Why does adding a large amount of NaCl make the soap separate (A.6)? What stays dissolved in the salt water?',950],
 ['6.','Predict whether a soap solution will be acidic, neutral, or basic. Then predict what you will see when 1% CaCl_{2} is added to soap and to detergent (B.2).',1150],
 ['7.','Predict what forms when HCl is added to a soap solution (B.3). Which step of Experiment #6 Part C is like this?',0]];
PL.forEach(([a,b,sp])=>{c.push(step(a,b,{left:360,after:0})); if(sp)c.push(space(sp));});
// Report
c.push(h2('Report Sheet',{pageBreak:true,before:0,rule:true}));
c.push(...nameBlock());
c.push(h3('A. Making Soap',{before:120}));
c.push(table([3600,5760],[['Step','Observations and data'],
 ['**A.2** Mass of coconut oil (g); appearance when melted',''],['**A.3** Appearance after adding NaOH',''],
 ['**A.4** Appearance after 10 minutes',''],['**A.4** Appearance after 20 minutes',''],['**A.4** Appearance after 30 minutes',''],
 ['**A.5** Done test result; total heating time (min)',''],['**A.6** Appearance after adding NaCl and cooling',''],
 ['**A.8** Mass of soap (g); appearance','']],{h:[0,700,700,700,700,700,800,800,800]}));
c.push(space(120));
c.push(checkRow('A.5','done test shown: sample dissolves and foams with no oil drops'));
c.push(h3('B. Properties of Soap and Detergent',{before:240}));
c.push(table([2760,2200,2200,2200],[['Test','Our soap','Commercial soap','Detergent'],
 ['**B.1** pH','','',''],
 ['**B.2** Tube 1 (distilled water): foam height (cm); clear, cloudy, or solid?','','',''],
 ['**B.2** Tube 2 (CaCl_{2}): foam height (cm); clear, cloudy, or solid?','','',''],
 ['**B.2** Tube 3 (MgSO_{4}): foam height (cm); clear, cloudy, or solid?','','',''],
 ['**B.3** Tube 1 after HCl: what you see; foam height (cm)','','','']],{h:[0,500,1000,1000,1000,1000]}));
c.push(table([9360],[['**B.4** Which cleaning agent(s) formed a solid in hard water? In acid? Which kept foaming in both?']],{header:0,h:1100}));
c.push(h3('C. Emulsions',{before:240}));
c.push(table([2560,2266,2267,2267],[['Tube (3 mL + 10 drops oil)','Right after shaking','After 1 minute','After 5 minutes'],
 ['**1** Distilled water','','',''],['**2** Commercial soap','','',''],['**3** Detergent','','',''],['**4** Our soap','','',''],['**5** Bile salts (if used)','','','']],{h:[0,750,750,750,750,750]}));
c.push(table([9360],[['**C.3** Which tubes formed an emulsion? How could you tell?']],{header:0,h:900}));
// Questions
c.push(h2('Questions and Problems',{pageBreak:true,before:0}));
c.push(step('Q.1','a. Glyceryl tristearate (tristearin) is a triacylglycerol in beef fat. Write the equation for its saponification with NaOH, using condensed structural formulas. (Stearic acid is CH_{3}(CH_{2})_{16}COOH.)',{left:0,after:0})); c.push(space(2200));
c.push(P('b. Name the products. Which product is the soap?',{indent:{left:540},after:600}));
c.push(P('c. Circle the three bonds that break in the triacylglycerol.',{indent:{left:540},after:600}));
c.push(step('Q.2','Explain why soap forms a scum in hard water. Complete the equation: 2 CH_{3}(CH_{2})_{10}COO^{−} Na^{+} + Ca^{2+} →',{left:0,after:0})); c.push(space(1300));
c.push(step('Q.3','Sodium lauryl sulfate is CH_{3}(CH_{2})_{11}OSO_{3}^{−} Na^{+}. How is it like soap, and how is it different? Use your Part B results to explain why detergents work in hard water and in acid.',{left:0,after:0})); c.push(space(1300));
c.push(step('Q.4','Draw a micelle of soap molecules surrounding a droplet of oil in water. Label the polar heads, the nonpolar tails, the oil, and the water. Use your drawing to explain why the oil stayed mixed in tubes 2–4 of Part C but separated in tube 1.',{left:0,after:0})); c.push(space(2600));
c.push(step('Q.5','a. Why is a soap solution basic? Write the equation for the reaction of the laurate ion with water.',{left:0,after:0})); c.push(space(1000));
c.push(P('b. Compare the pH of your soap with the commercial soap. If yours was higher, give a reason.',{indent:{left:540},after:900}));
c.push(P('c. Write the equation for the reaction of sodium laurate with HCl. Why does soap not clean well in acidic water?',{indent:{left:540},after:1200}));
c.push(step('Q.6','In the small intestine, bile salts emulsify dietary fats before the enzyme lipase hydrolyzes them (textbook section 15.1). Using your Part C results, explain why breaking fat into tiny droplets makes digestion faster.',{left:0,after:0})); c.push(space(1200));
c.push(step('Q.7','In the hand lotion of Experiment #9, stearic acid reacts with triethanolamine, N(CH_{2}CH_{2}OH)_{3}. What type of reaction is this? Explain why the product is a soap and what job it does in the lotion.',{left:0,after:0}));
build(c,OUT).then(()=>console.log('wrote',OUT));
