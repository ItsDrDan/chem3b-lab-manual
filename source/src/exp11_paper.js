const L=require('../lablib.js'); const {P,title,h2,h3,h4,bullet,step,sub,materials,note,caution,img,table,space,nameBlock,build,W,D}=L;
const F=process.argv[2]+'/'; const OUT=process.argv[3];
const {Paragraph,AlignmentType}=D; const M=D; const R=s=>new M.MathRun(s); const Fr=(a,b)=>new M.MathFraction({numerator:[R(a)],denominator:[R(b)]});
const Rf=()=>new M.MathSubScript({children:[R('R')],subScript:[R('f')]});
const mathP=(kids,o={})=>new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:120,after:o.after??200},keepNext:o.keepNext,children:[new M.Math({children:kids})]});
const c=[];
c.push(title('Experiment #11: Amino Acids'));
c.push(h3('Goals',{before:0}));
['Build models of amino acids and draw them as zwitterions and as the ions that form in acidic and basic solutions.',
 'Use the R group to classify an amino acid as nonpolar, polar neutral, acidic, or basic, and as hydrophobic or hydrophilic.',
 'Separate amino acids by paper chromatography and make them visible with ninhydrin.',
 'Calculate R_{f} values and use them to identify the amino acid(s) in an unknown.'].forEach(s=>c.push(bullet(s)));
c.push(h2('Introduction'));
c.push(h3('A. Amino Acids',{before:120}));
c.push(P('Amino acids are the building blocks of proteins, so they are needed to build and repair muscle, skin, hair, enzymes, and many hormones. Proteins in the human body are made from 20 different amino acids. Nine of these are **essential amino acids**: the body cannot make them, so they must come from the proteins we eat.'));
c.push(P('Every amino acid has the same basic structure (Figure 1). A central carbon atom, called the **alpha (α) carbon**, holds four groups: an **amino group** (–NH_{2}), a **carboxylic acid group** (–COOH), a hydrogen atom, and a side chain called the **R group**. The 20 amino acids differ only in their R groups.',{keepNext:true}));
c.push(...img(F+'fig12a_1.png',470,181,'**Figure 1:** General structure of an amino acid.'));
c.push(P('The R group decides how an amino acid behaves in water (Table 1 and Figure 2). Amino acids are grouped into four classes:'));
c.push(bullet('**Nonpolar:** the R group is made mostly of carbon and hydrogen (for example, –CH_{3} in alanine and the benzene ring in phenylalanine). These R groups are **hydrophobic** (“water-fearing”). Glycine, whose R group is just –H, is usually placed in this class.'));
c.push(bullet('**Polar neutral:** the R group contains a polar group such as –OH (serine) or –SH (cysteine) but has no charge. These R groups are **hydrophilic** (“water-loving”) because they form hydrogen bonds with water.'));
c.push(bullet('**Acidic:** the R group contains a second carboxylic acid group (aspartic acid and glutamic acid). At the pH of the body, it loses H^{+} and becomes –COO^{–}, so the R group has a negative charge.'));
c.push(bullet('**Basic:** the R group contains a second amino group (lysine). At the pH of the body, it gains H^{+} and becomes –NH_{3}^{+}, so the R group has a positive charge.'));
c.push(P('Acidic and basic R groups are charged, so they are also hydrophilic.',{before:80}));
c.push(P('**Table 1: Amino Acids Used in This Experiment**',{align:AlignmentType.CENTER,before:120,after:80,keepNext:true}));
c.push(table([2500,1900,1200,1900,1860],[['R group','Amino acid','Symbol','Class','In water'],
 ['–H','Glycine','Gly','Nonpolar','Hydrophobic (weakly)'],
 ['–CH_{3}','Alanine','Ala','Nonpolar','Hydrophobic'],
 ['–CH_{2}–C_{6}H_{5} (benzene ring)','Phenylalanine','Phe','Nonpolar','Hydrophobic'],
 ['–CH_{2}–OH','Serine','Ser','Polar neutral','Hydrophilic'],
 ['–CH_{2}–COOH','Aspartic acid','Asp','Acidic','Hydrophilic'],
 ['–CH_{2}–CH_{2}–COOH','Glutamic acid','Glu','Acidic','Hydrophilic'],
 ['–CH_{2}–CH_{2}–CH_{2}–CH_{2}–NH_{2}','Lysine','Lys','Basic','Hydrophilic']]));
c.push(...img(F+'fig12a_2.png',600,440,'**Figure 2:** The amino acids in this experiment, drawn as they exist at physiological pH (7.4). The R groups are shaded.'));
c.push(h4('Ionization of Amino Acids: the Zwitterion'));
c.push(P('An amino acid contains both an acid (–COOH) and a base (–NH_{2}) in the same molecule, so it can react with itself. The carboxylic acid group gives up H^{+} to become –COO^{–}, and the amino group accepts that H^{+} to become –NH_{3}^{+}. The result is a **zwitterion** (dipolar ion): an ion with one positive charge and one negative charge, so its **net charge is zero**. In water near neutral pH, including physiological pH (7.4), amino acids exist mostly as zwitterions; the uncharged form shown in Figure 1 is a convenient drawing but is almost never present in water.'));
c.push(P('The charges change with pH (Figure 3). In an **acidic** solution (low pH), the extra H^{+} adds to the –COO^{–} group, which becomes –COOH again. Only the –NH_{3}^{+} group is left charged, so the amino acid has a net charge of **1+**. In a **basic** solution (high pH), OH^{–} removes an H^{+} from the –NH_{3}^{+} group, which becomes –NH_{2}. Only the –COO^{–} group is left charged, so the net charge is **1−**. Acidic and basic R groups follow the same rules: in strong acid, every –COOH and –NH_{2} group carries H^{+}; in strong base, none of them do.',{keepNext:true}));
c.push(...img(F+'fig12a_3.png',624,158,'**Figure 3:** Alanine in acidic solution, as a zwitterion, and in basic solution.'));
c.push(h3('B. Paper Chromatography of Amino Acids'));
c.push(P('In Experiment #10, you used thin-layer chromatography (TLC) to separate pain relievers. In this experiment, you will use **paper chromatography** to separate amino acids. Every kind of chromatography works the same way: a **mobile phase** (a moving solvent) carries a mixture across a **stationary phase** (a material that stays in place), and substances that cling more strongly to the stationary phase move more slowly.'));
c.push(P('Small spots of amino acid solutions are placed on a pencil line, the **origin**, near the bottom of a sheet of chromatography paper. The paper is stood in a shallow layer of solvent, which climbs the paper by capillary action. Here, the stationary phase is the paper. It is made of cellulose, which is covered with polar –OH groups and holds a thin film of water, so it is very polar. The mobile phase is a mixture of isopropyl alcohol (2-propanol) and dilute aqueous ammonia, which is less polar than the water-coated paper.'));
c.push(P('As the solvent moves up, each amino acid is pulled two ways: it dissolves in the moving solvent, and it is attracted to the polar paper. **Amino acids with nonpolar R groups dissolve better in the solvent and travel farther. Amino acids with polar or charged R groups are held more strongly by the polar paper and stay closer to the origin.** Because the solvent contains ammonia, it is basic; this keeps the carboxylic acid groups ionized, so amino acids with acidic R groups carry extra negative charge and move only a short distance.'));
c.push(P('Amino acids are colorless, so the dried paper is sprayed with **ninhydrin**. When warmed, ninhydrin reacts with the free amino group of an amino acid to form a **purple** (blue-violet) product, so each amino acid appears as a purple spot. The shade can differ slightly from one amino acid to another, which helps with identification. Proline, whose amino group is part of a ring, gives a **yellow** color instead (proline is not used in this experiment). You will use the ninhydrin test again in Experiment #12. Because ninhydrin reacts with any amino acid, the amino acids in sweat and skin oils will also show up: a fingerprint on the paper becomes a purple smudge.'));
c.push(P('Each spot is described by its **R_{f} value** (retention factor), the distance the spot moved from the origin divided by the distance the solvent moved from the origin (Figure 4). Both distances are measured from the origin line; the spot distance is measured to the **center** of the spot.',{keepNext:true}));
c.push(mathP([Rf(),R(' = '),Fr('distance from origin to center of spot (cm)','distance from origin to solvent front (cm)')],{keepNext:true}));
c.push(...img(F+'fig12a_4.png',460,279,'**Figure 4:** A developed chromatogram. Each distance is measured from the origin.'));
c.push(P('For example, spot B in Figure 4 moved 3.4 cm while the solvent moved 8.7 cm:',{keepNext:true}));
c.push(mathP([Rf(),R(' = '),Fr('3.4 cm','8.7 cm'),R(' = 0.39')]));
c.push(P('The units cancel, so an R_{f} value has no units, and it is always between 0 and 1. Each distance has two significant figures, so the R_{f} value is rounded to two significant figures (0.3908… becomes 0.39). An R_{f} value depends on the paper, the solvent, and the temperature, so known amino acids are always run on the same sheet of paper as the unknown. An amino acid in the unknown is identified by finding the known amino acid with the same R_{f} value and the same ninhydrin color.'));
// Hazards
c.push(h3('Hazards and Safety Instructions'));
c.push(P('Wear safety goggles at all times. Wear gloves whenever you handle the chromatography paper, the solvent, or ninhydrin.',{after:100}));
c.push(bullet('**Ninhydrin:** Ninhydrin is harmful if swallowed and irritates the skin, eyes, and respiratory tract. It reacts with the amino acids in your skin and leaves purple stains on skin and clothing that last for days. Spray it only in the fume hood, spray lightly, and do not breathe the mist. If it touches your skin or eyes, rinse with water for 15 minutes and tell your instructor.'));
c.push(bullet('**Flammable Solvents:** Isopropyl alcohol is highly flammable, and its vapor irritates the eyes and can cause dizziness or headache. The ninhydrin spray is also dissolved in a flammable alcohol solvent. Keep the solvent, the chromatography tank, and the spray bottle away from flames and hot plates, and keep them in the fume hood.'));
c.push(bullet('**Ammonia (NH_{4}OH):** The 0.5 M aqueous ammonia in the solvent is basic. Its vapor has a strong, choking odor and irritates the eyes, nose, and lungs, and the liquid irritates skin and eyes (more concentrated ammonia is corrosive). Mix the solvent only in the fume hood and keep the tank covered with parafilm.'));
c.push(bullet('**Hair Dryer and Hot Surfaces:** The hair dryer, and a drying oven or hot plate if your instructor uses one, can cause burns. Use the hair dryer only after the paper has stopped dripping solvent, keep it away from the solvent beaker and spray bottle, and keep its cord away from water and sinks.'));
c.push(bullet('**Fingerprints:** Handle the chromatography paper only by its edges, wearing gloves. The amino acids from your fingers show up as purple spots after the ninhydrin spray and can be mistaken for real spots.'));
c.push(bullet('**Capillary Tubes:** Glass capillary tubes break easily and the ends are sharp. Handle them gently.'));
c.push(h3('Waste Instructions'));
c.push(bullet('**Non-halogenated organic waste container:** the used chromatography solvent (isopropyl alcohol and aqueous ammonia). Pour it out in the fume hood.'));
c.push(bullet('**Solid waste container:** extra or spoiled chromatography paper, paper towels with ninhydrin on them, and used toothpick applicators. Keep your developed chromatogram for your report (or as your instructor directs).'));
c.push(bullet('**Broken glass box:** used glass capillary tubes.'));
c.push(bullet('**Model kits:** take your models apart and return every piece to the kit.'));
// Procedure
c.push(h2('Procedure',{before:360}));
c.push(note('Instructor Notes:','**ALTERNATE — paper chromatography version of Experiment #11, kept for reference; the adopted Experiment #11 uses cellulose TLC plates.** Aspartic acid gives a very faint spot. Have students apply twice as many applications of aspartic acid as of the other amino acids in B.2. The chromatogram takes 45–60 minutes to develop, so students can build the models in Part A while it runs. Set out the solvent components and the ninhydrin spray in the fume hood, and hair dryers near the hood.'));
c.push(h3('A. Amino Acid Models'));
c.push(materials('Organic model kit or prepared models from the stockroom'));
c.push(step('A.1','Build models of glycine and alanine, and draw their structures. Then convert the alanine model into a model of serine by replacing one H on the –CH_{3} group with –OH, and draw serine. Using Table 1, state whether each amino acid is hydrophobic or hydrophilic.'));
c.push(step('A.2','Form the **zwitterion** of glycine: remove the H from the –COOH group and place it on the N atom of the –NH_{2} group. Draw the glycine zwitterion with its charges.'));
c.push(step('A.3','Draw the ion that glycine forms in a **basic** solution (high pH), and give its net charge.'));
c.push(step('A.4','Draw the ion that glycine forms in an **acidic** solution (low pH), and give its net charge.'));
c.push(h3('B. Paper Chromatography of Amino Acids'));
c.push(materials('Gloves, chromatography paper (Whatman No. 1, 12 cm × 24 cm, pre-cut), pencil, ruler, toothpick applicators or glass capillary tubes, 1% amino acid solutions (phenylalanine, alanine, glutamic acid, serine, lysine, aspartic acid), unknown amino acid solution, hair dryer, stapler, 600-mL beaker (chromatography tank), parafilm or plastic wrap, 10-mL and 25-mL graduated cylinders, isopropyl alcohol, 0.5 M NH_{4}OH, 0.2% ninhydrin spray, paper towels'));
c.push(h4('Preparing and Spotting the Paper'));
c.push(step('B.1','**Mark the paper:** Wearing gloves, pick up a pre-cut sheet of chromatography paper by its edges. Keep your fingers off the rest of the paper. With a **pencil** (ink would dissolve and run in the solvent), lightly draw a line 2 cm from one long edge. This is the origin. Make seven small marks on the line about 3 cm apart, starting 3 cm from the end (Figure 5). Below the line, label the marks Phe, Ala, Glu, Ser, Lys, Asp, and Unk. Write your initials in pencil in an upper corner.',{keepNext:true}));
c.push(...img(F+'fig12a_5.png',600,338,'**Figure 5:** Marking the chromatography paper.'));
c.push(step('B.2','**Apply the samples:** Obtain an unknown and record its letter. Dip the applicator (toothpick or capillary tube) that is stored in each amino acid solution, and lightly touch its tip to the matching mark on the origin line, making a small spot about the size of a printed letter “o.” Let the spot dry (a hair dryer on a low setting speeds this up), then touch the same spot one or two more times, keeping it as small as possible. Apply aspartic acid twice as many times as the others. Always return each applicator to its own solution so the solutions do not get mixed. Let all the spots dry.'));
c.push(h4('Running the Chromatogram'));
c.push(step('B.3','**Prepare the tank (in the fume hood):** Mix 10 mL of 0.5 M NH_{4}OH and 20 mL of isopropyl alcohol and pour the mixture into a clean, dry 600-mL beaker. The solvent layer must not be deeper than 1.5 cm, so that it stays **below the origin line**; if it is too deep, remove some with a dropper. Cover the beaker tightly with parafilm, and label it with your group’s initials.'));
c.push(step('B.4','**Develop the chromatogram:** Roll the paper into a cylinder with the spots on the outside, and staple the top and bottom of the seam so the two edges are close together but do **not** overlap or touch (Figure 6). In the hood, slowly lower the cylinder into the tank, spotted edge down, so that it stands on the bottom without touching the sides of the beaker. Re-cover the beaker with parafilm or plastic wrap and do not move it. Let the solvent rise for 45–60 minutes, but remove the paper before the solvent reaches the top.',{keepNext:true}));
c.push(...img(F+'fig12a_6.png',520,274,'**Figure 6:** The rolled paper (a) and the covered chromatography tank (b).'));
c.push(step('B.5','**Mark the solvent front (in the fume hood):** Remove the paper from the tank, take out the staples, and lay the paper flat on a paper towel. **Immediately** draw a pencil line along the top edge of the wet solvent (the solvent front); it fades as the paper dries. Let the paper dry completely, using a hair dryer if needed. Pour the used solvent into the non-halogenated organic waste container.'));
c.push(step('B.6','**Make the spots visible (in the fume hood):** Spray the dry paper lightly and evenly with ninhydrin solution; do not soak it. Dry the paper with the hair dryer for 3–5 minutes. Purple spots appear where ninhydrin reacts with the amino acids.'));
c.push(h4('Measurements and Identification'));
c.push(step('B.7','Draw your chromatogram on the report sheet (or attach the original, as your instructor directs). Lightly outline each spot in pencil, and record the color of each spot.'));
c.push(step('B.8','Measure the distance in centimeters from the origin line to the solvent front, to the nearest 0.1 cm.'));
c.push(step('B.9','Mark the center of each spot with a pencil dot. Measure the distance from the origin line to the center of each spot, to the nearest 0.1 cm. If the unknown gives more than one spot, measure each one.'));
c.push(step('B.10','Calculate the R_{f} value for each known amino acid and each unknown spot.'));
c.push(step('B.11','Identify the amino acid(s) in your unknown by comparing the R_{f} value and color of each unknown spot with those of the known amino acids.'));
c.push(step('B.12','Draw the structure of your unknown amino acid in acidic solution, at physiological pH (7.4), and in basic solution (choose one if the unknown had more than one). Use Figures 2 and 3 as guides; acidic and basic R groups also gain or lose H^{+}.'));
// Pre-lab
c.push(h2('Pre-Lab Questions',{pageBreak:true,before:0}));
const PL=[['1.','Name the two functional groups found in every amino acid. To which carbon atom are they both attached?',800],
 ['2.','Classify each R group as nonpolar, polar neutral, acidic, or basic: (a) –CH_{2}–OH (b) –CH_{2}–CH_{2}–COOH (c) –CH_{2}–C_{6}H_{5} (d) –CH_{2}–CH_{2}–CH_{2}–CH_{2}–NH_{2}',880],
 ['3.','Why must you wear gloves and hold the chromatography paper only by its edges? What would a fingerprint look like after the ninhydrin spray?',880],
 ['4.','Name the two liquids mixed to make the chromatography solvent and give one hazard of each. Where must the solvent be mixed and used?',880],
 ['5.','Where does each of the following go at the end of lab? (a) the used chromatography solvent (b) used glass capillary tubes (c) paper towels with ninhydrin on them',880],
 ['6.','Which amino acid should travel farther up the paper, phenylalanine or aspartic acid? Explain using their R groups. Why must the origin line be above the solvent level?',1000],
 ['7.','A spot moves 5.2 cm from the origin while the solvent front moves 9.6 cm. Calculate the R_{f} value with the correct number of significant figures.',0]];
PL.forEach(([a,b,sp])=>{c.push(step(a,b,{left:360,after:0})); if(sp)c.push(space(sp));});
// Report
c.push(h2('Report Sheet',{pageBreak:true,before:0,rule:true}));
c.push(...nameBlock());
c.push(h3('A. Amino Acid Models',{before:120}));
c.push(table([3120,3120,3120],[['**A.1** Glycine','Alanine','Serine'],['','',''],[0,1,2].map(()=>({t:'Hydrophobic or hydrophilic?',shade:'F2F2F2'})),['','','']],{header:1,h:[400,2000,400,600]}));
c.push(space(160));
c.push(table([3120,3120,3120],[['**A.2** Glycine zwitterion','**A.3** Glycine in base (high pH)','**A.4** Glycine in acid (low pH)'],['','',''],['Net charge:','Net charge:','Net charge:']],{h:[400,2200,500]}));
c.push(h3('B. Paper Chromatography of Amino Acids',{pageBreak:true,before:0}));
c.push(P('**B.2** Unknown letter: ____________',{after:160}));
c.push(table([9360],[[['**B.7** Drawing of your chromatogram: show the origin, the solvent front, and each outlined spot, labeled with its color. (Or attach the original, as your instructor directs.)']],['']],{header:0,h:[700,4600]}));
c.push(P('**B.8** Distance from origin to solvent front: ____________ cm',{before:200,after:160}));
c.push(table([2600,2200,2280,2280],[['Amino acid','B.7 Color of spot','B.9 Distance moved by spot (cm)','B.10 R_{f} value'],
 ['Phenylalanine','','',''],['Alanine','','',''],['Glutamic acid','','',''],['Serine','','',''],['Lysine','','',''],['Aspartic acid','','',''],['Unknown, spot 1','','',''],['Unknown, spot 2','','','']],{h:560,firstColBold:true}));
c.push(P('**B.10** Show your R_{f} calculation for one amino acid:',{before:200,after:1000}));
c.push(P('**B.11** Identity of the amino acid(s) in your unknown: _______________________________',{after:160}));
c.push(P('Evidence (R_{f} values and colors that match):',{after:900}));
c.push(table([3120,3120,3120],[[{t:'**B.12** Structures of the unknown amino acid: ____________________',span:3}],['In acidic solution','At physiological pH (7.4)','In basic solution'],['','','']],{header:0,h:[450,400,2400]}));
// Questions
c.push(h2('Questions and Problems',{pageBreak:true,before:0}));
const Q=[['Q.1','Draw the zwitterion of alanine and give its net charge.'],
 ['Q.2','Draw the form of alanine that is present in a strongly acidic solution. What is its net charge?'],
 ['Q.3','List the six known amino acids in order from the highest R_{f} value to the lowest. Use the polarity and charge of their R groups to explain this order. Does your order agree with the trend described in the Introduction?'],
 ['Q.4','Why is the solvent front marked immediately after the paper is removed from the tank? How would your R_{f} values change if you waited until the paper dried and marked the front too low?'],
 ['Q.5','Why must the known amino acids be run on the same sheet of paper as the unknown, instead of comparing the unknown with R_{f} values from a book?'],
 ['Q.6','Draw lysine and aspartic acid as they exist at physiological pH (7.4). Give the net charge of each.']];
Q.forEach(([a,b],i)=>{c.push(step(a,b,{left:0,after:0})); c.push(space(i==Q.length-1?0:(i==2||i==5?1800:1250)));});
build(c,OUT).then(()=>console.log('wrote',OUT));
