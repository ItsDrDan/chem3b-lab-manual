const L=require('../lablib.js'); const {P,title,h2,h3,h4,bullet,step,sub,materials,note,caution,img,table,space,nameBlock,build,W,D}=L;
const F=process.argv[2]+'/'; const OUT=process.argv[3];
const {Paragraph,AlignmentType,TextRun}=D; const M=D;
const pctEq=new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:120,after:200},children:[new M.Math({children:[new M.MathRun('% casein = '),new M.MathFraction({numerator:[new M.MathRun('mass of casein (g)')],denominator:[new M.MathRun('mass of milk (g)')]}),new M.MathRun(' × 100%')]})]});
const c=[];
c.push(title('Experiment #13: Peptides and Proteins'));
c.push(h3('Goals',{before:0}));
['Build models of amino acids and show how peptide bonds form (condensation) and break (hydrolysis).',
 'Describe the four levels of protein structure.',
 'Observe how heat, acid, base, alcohol, and heavy metal ions denature a protein.',
 'Isolate casein from milk at its isoelectric point and calculate the percent casein in milk.',
 'Use the biuret and ninhydrin tests to tell amino acids apart from peptides and proteins.'].forEach(s=>c.push(bullet(s)));
c.push(h2('Introduction'));
c.push(h3('A. Amino Acids and Peptide Bonds',{before:120}));
c.push(P('Amino acids are the building blocks of proteins. Every amino acid has an amine group (–NH_{2}) and a carboxylic acid group (–COOH) attached to the same carbon atom, called the alpha (α) carbon. The α carbon also holds a hydrogen atom and a side chain called the **R group**. The 20 amino acids found in proteins differ only in their R groups, which can be nonpolar, polar, acidic, or basic. (You studied amino acid structures and separated amino acids by paper chromatography in Experiment #12.)'));
c.push(P('A **peptide bond** (an amide bond) forms when the carboxylic acid group of one amino acid reacts with the amine group of another amino acid. The –OH from the acid and an –H from the amine leave as a molecule of water, so this is a **condensation** reaction, the same type of reaction that formed amides in Experiment #7. Two amino acids joined this way make a dipeptide, three make a tripeptide, and so on.'));
c.push(...img(F+'fig11_1.png',624,129,'**Figure 1:** A peptide bond forms when water is removed (condensation) and breaks when water is added (hydrolysis).'));
c.push(P('In the reverse reaction, **hydrolysis**, water adds across the peptide bond, breaking it and giving back the individual amino acids. Acid or enzymes speed up this reaction; this is how your body digests the proteins you eat. For example, the dipeptide glycylalanine hydrolyzes to give glycine and alanine. When naming a peptide, the amino acid with the free –NH_{2} group (the **N-terminus**) is named first with a *-yl* ending, and the amino acid with the free –COOH group (the **C-terminus**) keeps its full name.'));
c.push(...img(F+'fig11_2.png',624,103,'**Figure 2:** Hydrolysis of the dipeptide glycylalanine (Gly–Ala).'));
c.push(h3('B. Protein Structure'));
c.push(P('A chain of many amino acids joined by peptide bonds is called a **polypeptide**. A polypeptide with more than about 40 amino acids is usually called a **protein**. Proteins make up skin, muscle, cartilage, hair, and fingernails, and they also act as enzymes and hormones. The sequence of amino acids determines how a protein folds, and its shape determines its function. Protein structure is described in four levels (Figure 3):'));
c.push(bullet('**Primary structure:** the order (sequence) of amino acids, held together by peptide bonds.'));
c.push(bullet('**Secondary structure:** regular folding of the backbone, held together by hydrogen bonds between the C=O of one peptide bond and the N–H of another. The two common patterns are the **α helix** (a coil) and the **β-pleated sheet** (strands lined up side by side).'));
c.push(bullet('**Tertiary structure:** the overall 3-D shape of one polypeptide chain, held by interactions between R groups: disulfide bonds (–S–S–), salt bridges (ionic attractions), hydrogen bonds, and hydrophobic interactions. **Globular proteins**, such as egg albumin, fold into compact, roughly spherical shapes.'));
c.push(bullet('**Quaternary structure:** two or more folded polypeptide chains (subunits) held together by the same kinds of interactions. Hemoglobin, for example, has four subunits.'));
c.push(...img(F+'fig11_3.png',600,498,'**Figure 3:** The four levels of protein structure. In (a), the chain ends are drawn in the charged (zwitterion) form found at pH 7.'));
c.push(h3('C. Protein Denaturation'));
c.push(P('**Denaturation** happens when heat or a chemical disrupts the interactions that hold a protein’s secondary, tertiary, and quaternary structures together. The peptide bonds of the primary structure are *not* broken, but the protein unfolds and can no longer do its job. Denatured proteins often clump together and **coagulate** (become a solid); this is what you see when the clear part of an egg turns solid white as it cooks. Table 1 shows how each agent tested in this experiment denatures a protein.',{keepNext:true}));
c.push(P('**Table 1: How Denaturing Agents Disrupt Protein Structure**',{align:AlignmentType.CENTER,after:80,keepNext:true}));
c.push(table([2700,6660],[['Denaturing agent','What it disrupts'],
 ['Heat','Faster molecular motion breaks hydrogen bonds and hydrophobic interactions.'],
 ['Acids and bases','Changing the pH changes the charges on acidic and basic R groups, which breaks salt bridges and hydrogen bonds.'],
 ['Alcohol (ethanol)','Forms its own hydrogen bonds with the protein, breaking the protein’s hydrogen bonds; it also disrupts hydrophobic interactions.'],
 ['Heavy metal ions (Ag^{+}, Hg^{2+}, Pb^{2+})','Bond to –SH and –COO^{–} groups in R groups, which breaks disulfide bonds and salt bridges.']],{firstColBold:true}));
c.push(P('Concentrated nitric acid (HNO_{3}) also reacts with the benzene rings in the R groups of amino acids such as tyrosine and phenylalanine to give a **yellow** product. This is why nitric acid leaves a yellow stain if it touches your skin.',{before:160}));
c.push(h3('D. Isolation of Casein from Milk: the Isoelectric Point'));
c.push(P('Amino acids and proteins carry electrical charges in water. Amine groups can gain H^{+} to become –NH_{3}^{+}, and carboxylic acid groups can lose H^{+} to become –COO^{–}. Because adding acid or base changes how many of these groups are charged, the overall (net) charge of a protein depends on pH. The pH at which a protein has a net charge of zero is called its **isoelectric point (pI)**. At its isoelectric point, protein molecules no longer repel each other, so they clump together and **precipitate** out of solution.'));
c.push(P('Milk contains the protein **casein**. At the normal pH of milk, which is close to neutral, casein molecules carry a negative charge, repel each other, and stay spread out in the milk. Adding acid lowers the pH toward casein’s isoelectric point, which is in the acidic range, and the casein separates as a white solid (curds). The same chemistry is used to make yogurt and some cheeses, where bacteria produce lactic acid that lowers the pH of the milk. In this experiment, you will acidify warm nonfat milk, collect the casein, and calculate the percent casein in the milk.'));
c.push(h3('E. Color Tests for Proteins'));
c.push(P('Some reagents form colored products with amino acids, peptides, or proteins. The color tells you which groups or bonds are present. In each test, compare the color of the sample after adding the reagent with the color of the reagent itself.'));
c.push(bullet('**Biuret test (peptide bonds):** In a basic solution, blue Cu^{2+} ions bond to the nitrogen atoms of peptide bonds and form a **violet (purple)** complex. Only molecules with two or more peptide bonds (tripeptides and larger, including proteins) give a positive test. Free amino acids and dipeptides do not, so the solution stays **blue** (negative).'));
c.push(bullet('**Ninhydrin test (free –NH_{2} groups):** When heated, ninhydrin reacts with free amine groups to form a **blue-violet** color. Amino acids and most proteins give a positive test. The amino acids proline and hydroxyproline give a **yellow** color instead. Ninhydrin is the same reagent you used to make the amino acid spots visible in Experiment #12.'));
c.push(P('**Table 2: Reading the Color Tests**',{align:AlignmentType.CENTER,before:120,after:80,keepNext:true}));
c.push(table([1700,2560,2400,2700],[['Test','Detects','Positive result','Negative result'],
 ['Biuret','Two or more peptide bonds (tripeptides and proteins)','Violet (purple)','Blue (color of Cu^{2+}) remains'],
 ['Ninhydrin','Free –NH_{2} groups (amino acids, most proteins)','Blue-violet (yellow for proline)','No blue-violet color forms']],{firstColBold:true}));
// Hazards
c.push(h3('Hazards and Safety Instructions'));
c.push(P('Wear safety goggles at all times. Wear gloves for every part of this lab except the model building.',{after:100}));
c.push(bullet('**Corrosive Acids and Bases:** 10% nitric acid (HNO_{3}) and 10% sodium hydroxide (NaOH) can burn skin and damage eyes. Nitric acid turns skin yellow because it reacts with the proteins in your skin. If any acid or base touches you, rinse with water for 15 minutes and tell your instructor.'));
c.push(bullet('**Toxic Heavy Metals:** 1% silver nitrate (AgNO_{3}) is toxic and leaves brown-black stains on skin that do not wash off for days. The biuret reagent (5% CuSO_{4}) is harmful if swallowed. Wear gloves, and never pour these solutions down the drain.'));
c.push(bullet('**Staining Reagent:** Ninhydrin reacts with the amino acids in skin and leaves purple stains on skin and clothing. Wear gloves and wipe up spills right away.'));
c.push(bullet('**Flammable Liquid:** 95% ethanol catches fire easily. Turn off any Bunsen burners near you before you dispense or use ethanol (Part C.4).'));
c.push(bullet('**Thermal Hazards:** When heating a test tube in a flame, hold it with a test tube holder, keep it moving, and point the open end away from yourself and others; the liquid can suddenly boil and spurt out (bump). Hot plates, beakers of hot milk, and boiling water baths stay hot. Handle hot glassware with tongs or a test tube holder.'));
c.push(bullet('**Food Items and Allergies:** Eggs, milk, and gelatin used in lab are lab chemicals. Never taste anything in the lab. Tell your instructor before lab if you have an egg or milk allergy.'));
c.push(h3('Waste Instructions'));
c.push(bullet('**Aqueous waste container:** tubes from C.2, C.3, and C.5 (nitric acid, sodium hydroxide, silver nitrate with egg albumin) and E.1 (biuret test, which contains copper sulfate). Do not pour these down the drain.'));
c.push(bullet('**Non-halogenated organic waste container:** tubes from C.4 (ethanol) and E.2 (ninhydrin, an organic reagent).'));
c.push(bullet('**Drain, with plenty of running water:** leftover egg albumin solution and milk with no added chemicals, the liquid from the heated egg tube (C.1), and the clear liquid (whey) filtered off in Part D. Run water for at least 30 seconds so the sinks do not smell like spoiled milk and eggs next week.'));
c.push(bullet('**Trash:** the cooked egg clump from C.1, solid casein, filter paper, cheesecloth, egg shells, and used pH paper.'));
c.push(bullet('**Model kits:** take your models apart and return every piece to the kit.'));
// Procedure
c.push(h2('Procedure',{before:360}));
c.push(note('Instructor Notes:','Start a boiling water bath at the beginning of lab for E.2 (and for C.1 if Bunsen burners are not used). For Part D, start a water bath at about 50 °C, or warm the milk directly on a hot plate. For C.1, a Bunsen burner is recommended. Tyrosine dissolves only slightly in neutral water (about 0.05 g per 100 mL), so a 1% solution is not possible; provide a saturated tyrosine solution, or tyrosine dissolved in dilute NaOH, and label the bottle with how it was made. In the color tests (Part E), have students record the color of each reagent before they add it to the samples.'));
c.push(h3('A. Peptide Bonds'));
c.push(materials('Molecular model kit or prepared models from the stockroom'));
c.push(step('A.1','Build models of glycine and serine. Join them with a peptide bond by removing the components of water: an –H from the amine group of one amino acid and an –OH from the carboxylic acid group of the other. Build both possible dipeptides, **glycylserine (Gly–Ser)** and **serylglycine (Ser–Gly)**, and draw the structure of each.'));
c.push(step('A.2','Show the hydrolysis of serylglycine: break the peptide bond and add the components of water (H–OH). Write a balanced equation for the hydrolysis.'));
c.push(h3('B. Protein Structure: The Class Peptide'));
c.push(materials('Molecular model kit or prepared models from the stockroom'));
c.push(step('B.1','Build a model of one amino acid. Choose an amino acid that no other group in the room has chosen. Draw its structure and write its name and three-letter abbreviation. Bring your model to your instructor, who will demonstrate how two amino acids join to form a peptide bond.'));
c.push(step('B.2','Join your amino acid to your classmates’ amino acids by removing the components of water, until the class has built one “big chemistry family” peptide chain. Record the order of the amino acids, from the N-terminus to the C-terminus, using three-letter abbreviations. Draw the structure of the peptide chain and write the equation for its formation.'));
c.push(h3('C. Protein Denaturation'));
c.push(materials('Test tubes, test tube rack, test tube holder, 10-mL graduated cylinder, 250-mL graduated cylinder, egg, cheesecloth, 250-mL beaker, 10% HNO_{3}, 10% NaOH, 95% ethanol, 1% AgNO_{3}, Bunsen burner or boiling water bath'));
c.push(P('Prepare a fresh egg albumin solution by mixing one egg white with 200 mL of water (measured with the 250-mL graduated cylinder) and filtering the mixture through cheesecloth into a beaker (one batch can be shared by several groups). Place 2–3 mL of egg albumin solution in each of six test tubes and label them Control, C.1, C.2, C.3, C.4, and C.5. Leave the Control tube untreated so you can compare it with the others. Use one tube for each test below. Record your observations and give a brief explanation of each result.'));
c.push(step('C.1','**Heat:** Using a test tube holder, gently heat the tube over a low Bunsen burner flame, keeping it moving and pointing it away from everyone, or place it in a boiling water bath for 5 minutes. Describe any changes.'));
c.push(step('C.2','**Acid:** Add 2 mL of 10% HNO_{3}. Tap the tube to mix and describe any changes.'));
c.push(step('C.3','**Base:** Add 2 mL of 10% NaOH. Tap the tube to mix and describe any changes.'));
c.push(step('C.4','**Alcohol:** Make sure all Bunsen burners near you are off. Add 4 mL of 95% ethanol. Tap the tube to mix and describe any changes.'));
c.push(step('C.5','**Heavy metal:** Add 10 drops of 1% AgNO_{3} (silver nitrate). Tap the tube to mix and describe any changes. Dispose of this tube in the aqueous waste container.'));
c.push(h3('D. Isolation of Casein (Milk Protein)'));
c.push(materials('150-mL beaker, hot plate (or 50 °C water bath), thermometer, stirring rod, funnel, filter paper (or a basket-style coffee filter), watch glass, paper towel, nonfat milk, 20% acetic acid, dropper, pH paper, balance; Büchner vacuum filtration setup (optional)'));
c.push(step('D.1','Weigh a clean, dry 150-mL beaker. Add about 20 mL of nonfat milk and weigh the beaker again. Calculate the mass of the milk.'));
c.push(step('D.2','Measure the pH of the milk by dipping a stirring rod into it and touching the rod to a piece of pH paper. Compare the color with the chart on the container.'));
c.push(step('D.3','Warm the milk on a hot plate or in a water bath until it reaches about 50 °C, then remove the beaker from the heat. Add 20% acetic acid one drop at a time, stirring continuously (you may need 2–3 mL). White solid casein will form as the pH reaches casein’s isoelectric point. Stop adding acid when no more solid forms and the liquid is clear. If the liquid is still cloudy, warm the mixture gently for a few more minutes. Measure the pH of the liquid. This is the pH at which casein becomes insoluble (its isoelectric point).'));
c.push(step('D.4','Weigh a clean, dry watch glass. Collect the casein using a funnel and filter paper (or a Büchner vacuum filtration setup, if available). Rinse the solid with two 10-mL portions of water. Transfer the casein to the watch glass, gently press out extra water with a paper towel, and let it dry as long as possible. Weigh the watch glass with the casein and calculate the mass of casein. Save a small amount of casein for Part E.'));
c.push(step('D.5','Calculate the percent casein in the nonfat milk:',{after:0,keepNext:true}));
c.push(pctEq);
c.push(h3('E. Color Tests for Proteins'));
c.push(materials('Test tubes, test tube rack, 10-mL graduated cylinder, boiling water bath, spatula, dropper bottles of amino acid solutions (1% glycine; tyrosine, saturated or dissolved in dilute NaOH; see Instructor Notes), dropper bottles of 1% protein solutions (gelatin, egg albumin), casein from Part D, 10% NaOH, biuret reagent (5% CuSO_{4}), 0.2% ninhydrin solution'));
c.push(P('Before you start each test, record the color of the reagent (CuSO_{4} or ninhydrin) on your report sheet.'));
c.push(step('E.1','**Biuret test:** Label five test tubes. Place 2 mL of glycine, tyrosine, gelatin, and egg albumin solution in four of the tubes. In the fifth tube, place a small amount of the casein from Part D (the amount that fits on the tip of a spatula). Add 2 mL of 10% NaOH to each tube and mix. Then add 5 drops of biuret reagent (5% CuSO_{4}) and mix. Record the color of each sample. A violet (purple) color is a positive test for two or more peptide bonds; if the blue color of the CuSO_{4} remains, the test is negative. Dispose of these tubes in the aqueous waste container.'));
c.push(step('E.2','**Ninhydrin test:** Label five clean test tubes and prepare the same five samples as in E.1 (2 mL of each solution, and a small amount of casein). Add 1 mL of 0.2% ninhydrin solution to each tube. Place the tubes in a boiling water bath for 4–5 minutes. Look for the formation of a blue-violet color and record your observations.'));
// Pre-lab
c.push(h2('Pre-Lab Questions',{pageBreak:true,before:0}));
const PL=[['1.','Which two reagents in Part C can burn your skin and eyes? What should you do if one of them touches you?',1050],
 ['2.','What must you check before you add 95% ethanol in C.4, and why?',900],
 ['3.','Where does each of the following go at the end of lab? (a) the biuret test tubes from E.1 (b) the ninhydrin test tubes from E.2 (c) the clear liquid (whey) filtered off in Part D',1050],
 ['4.','In A.1, glycine and serine join to form glycylserine (Gly–Ser). Which two functional groups react, what small molecule is removed, and which amino acid is at the N-terminus?',1250],
 ['5.','When egg albumin is denatured by heat in C.1, which level of protein structure is *not* changed? Explain.',1050],
 ['6.','Predict the result (color, and positive or negative) of the biuret test and of the ninhydrin test for (a) glycine and (b) egg albumin.',1250],
 ['7.','A student collects 0.62 g of casein from 20.45 g of nonfat milk. Calculate the percent casein in the milk. Show your work.',0]];
PL.forEach(([a,b,sp])=>{c.push(step(a,b,{left:360,after:0})); if(sp)c.push(space(sp));});
// Report
c.push(h2('Report Sheet',{pageBreak:true,before:0,rule:true}));
c.push(...nameBlock());
c.push(h3('A. Peptide Bonds',{before:120}));
c.push(table([2600,6760],[['',''],['**A.1** Structure of glycylserine (Gly–Ser)',''],['Structure of serylglycine (Ser–Gly)',''],['**A.2** Balanced equation for the hydrolysis of serylglycine','']].slice(1),{header:0,h:2400}));
c.push(h3('B. Protein Structure: The Class Peptide',{pageBreak:true,before:0}));
c.push(table([2600,6760],[['**B.1** Your amino acid: name, three-letter abbreviation, and structure',''],
 ['**B.2** Order of amino acids in the class peptide (N-terminus → C-terminus), using three-letter abbreviations',''],
 ['Structure of the class peptide',''],['Equation for the formation of the class peptide','']],{header:0,h:[1300,1400,3000,2600]}));
c.push(h3('C. Protein Denaturation',{pageBreak:true,before:0}));
c.push(table([2100,3630,3630],[['Treatment','Observations of egg albumin','Explanation (which interactions were disrupted?)'],
 ['Control (no treatment)',{t:'',},{t:'(none)',shade:'F2F2F2'}],['**C.1** Heat','',''],['**C.2** Acid (HNO_{3})','',''],['**C.3** Base (NaOH)','',''],['**C.4** Alcohol (ethanol)','',''],['**C.5** Heavy metal ions (AgNO_{3})','','']],{h:1100}));
c.push(h3('D. Isolation of Casein (Milk Protein)',{pageBreak:true,before:0}));
c.push(table([4200,5160],[['**D.1** Mass of beaker',''],['Mass of beaker and milk',''],['Mass of milk',''],['**D.2** pH of milk',''],['**D.3** pH when casein precipitates',''],['**D.4** Mass of watch glass',''],['Mass of watch glass and casein',''],['Mass of casein',''],[['**D.5** Percent casein','(show your work)'],'']],{header:0,h:[400,400,400,400,400,400,400,400,1300]}));
c.push(h3('E. Color Tests for Proteins'));
c.push(table([2300,1800,1730,1800,1730],[['Sample','E.1 Biuret color','Positive or negative?','E.2 Ninhydrin color','Positive or negative?'],
 ['Reagent color (before adding)','',{t:'',shade:'F2F2F2'},'',{t:'',shade:'F2F2F2'}],['Glycine','','','',''],['Tyrosine','','','',''],['Gelatin','','','',''],['Egg albumin','','','',''],['Casein (from Part D)','','','','']],{h:720,firstColBold:true}));
// Questions
c.push(h2('Questions and Problems',{pageBreak:true,before:0}));
const Q=[['Q.1','Why are alcohol and heat used to disinfect medical equipment?'],
 ['Q.2','Why is milk given to someone who accidentally swallows a heavy metal ion such as silver or mercury?'],
 ['Q.3','Compare the pH of the milk with the pH at which the casein precipitated. Use the idea of the isoelectric point to explain why the casein came out of solution.'],
 ['Q.4','How does a change in pH affect the levels of protein structure? Which level is *not* affected?'],
 ['Q.5','After working with HNO_{3}, a student noticed a yellow spot on their hand. What is the likely reason?'],
 ['Q.6','Which samples gave a negative biuret test? Explain why.'],
 ['Q.7','What test could you use to determine whether an unlabeled test tube contains an amino acid or a protein? Describe the result you would expect for each.']];
Q.forEach(([a,b],i)=>{c.push(step(a,b,{left:0,after:0})); c.push(space(1150));});
build(c,OUT).then(()=>console.log('wrote',OUT));
