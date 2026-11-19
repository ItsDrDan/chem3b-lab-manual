const L=require('../lablib.js'); const {checkRow,P,title,h2,h3,h4,bullet,step,sub,materials,note,caution,img,table,space,nameBlock,build,W,D}=L;
const F=process.argv[2]+'/'; const OUT=process.argv[3];
const {Paragraph,AlignmentType}=D; const M=D; const R=s=>new M.MathRun(s); const Fr=(a,b)=>new M.MathFraction({numerator:[R(a)],denominator:[R(b)]});
const Rf=()=>new M.MathSubScript({children:[R('R')],subScript:[R('f')]});
const mathP=(kids,o={})=>new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:120,after:o.after??200},keepNext:o.keepNext,children:[new M.Math({children:kids})]});
const c=[];
c.push(title('Experiment #11: Amino Acids'));
c.push(h3('Goals',{before:0}));
['Build models of amino acids and draw them as zwitterions and as the ions that form in acidic and basic solutions.',
 'Use the R group to classify an amino acid as nonpolar, polar neutral, acidic, or basic, and as hydrophobic or hydrophilic.',
 'Separate amino acids by thin-layer chromatography on cellulose plates and make them visible with ninhydrin.',
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
c.push(h3('B. Thin-Layer Chromatography of Amino Acids on Cellulose'));
c.push(P('Every kind of chromatography works the same way: a **mobile phase** (a moving solvent) carries a mixture across a **stationary phase** (a material that stays in place), and substances that cling more strongly to the stationary phase move more slowly. In Experiment #10, you used thin-layer chromatography (TLC) on **silica gel** plates to separate pain relievers. Silica separates mainly by **adsorption**: molecules stick to the polar surface of the silica. In this experiment, you will use TLC plates coated with a thin layer of **cellulose**, the same material that chromatography paper is made of.'));
c.push(P('Small spots of amino acid solutions are placed on a pencil line, the **origin**, near the bottom of the plate. The plate is stood in a shallow layer of solvent, which climbs the cellulose layer by capillary action. Cellulose is covered with polar –OH groups and holds a thin film of water, so the stationary phase is very polar. The mobile phase is a mixture of isopropyl alcohol (2-propanol) and dilute aqueous ammonia, which is less polar than the water-coated cellulose. Each amino acid **partitions** (divides) between the water held by the cellulose and the moving solvent, just as it would on paper. Because the cellulose layer is thin and made of fine, even particles, the solvent moves faster than on paper and the spots stay smaller and sharper.'));
c.push(P('As the solvent moves up, each amino acid is pulled two ways: it dissolves in the moving solvent, and it is attracted to the polar cellulose. **Amino acids with nonpolar R groups dissolve better in the solvent and travel farther. Amino acids with polar or charged R groups are held more strongly by the polar cellulose and stay closer to the origin.** Because the solvent contains ammonia, it is basic; this keeps the carboxylic acid groups ionized, so amino acids with acidic R groups carry extra negative charge and move only a short distance.'));
c.push(P('Amino acids are colorless, so the dried plate is sprayed with **ninhydrin**. When warmed, ninhydrin reacts with the free amino group of an amino acid to form a **purple** (blue-violet) product, so each amino acid appears as a purple spot. The shade can differ slightly from one amino acid to another, which helps with identification. Proline, whose amino group is part of a ring, gives a **yellow** color instead (proline is not used in this experiment). You will use the ninhydrin test again in Experiment #12. Because ninhydrin reacts with any amino acid, the amino acids in sweat and skin oils will also show up: a fingerprint on the plate becomes a purple smudge.'));
c.push(P('Each spot is described by its **R_{f} value** (retention factor), the distance the spot moved from the origin divided by the distance the solvent moved from the origin (Figure 4). Both distances are measured from the origin line; the spot distance is measured to the **center** of the spot.',{keepNext:true}));
c.push(mathP([Rf(),R(' = '),Fr('distance from origin to center of spot (cm)','distance from origin to solvent front (cm)')],{keepNext:true}));
c.push(...img(F+'fig12c_4.png',460,265,'**Figure 4:** A developed cellulose TLC plate. Each distance is measured from the origin.'));
c.push(P('For example, spot B in Figure 4 moved 2.8 cm while the solvent moved 7.4 cm:',{keepNext:true}));
c.push(mathP([Rf(),R(' = '),Fr('2.8 cm','7.4 cm'),R(' = 0.38')]));
c.push(P('The units cancel, so an R_{f} value has no units, and it is always between 0 and 1. Each distance has two significant figures, so the R_{f} value is rounded to two significant figures (0.378… becomes 0.38). An R_{f} value depends on the plate, the solvent, and the temperature, so known amino acids are always run on the same plate as the unknown. In this experiment, the six known amino acids are split between two plates, and the unknown is spotted on **both** plates so that it can be compared with every known. Each plate has its own solvent front, so each R_{f} value is calculated with the solvent distance from its own plate. An amino acid in the unknown is identified by finding the known amino acid with the same R_{f} value and the same ninhydrin color.'));
// Hazards
c.push(h3('Hazards and Safety Instructions'));
c.push(P('Wear safety goggles at all times. Wear gloves whenever you handle the TLC plates, the solvent, or ninhydrin.',{after:100}));
c.push(bullet('**Ninhydrin:** Ninhydrin is harmful if swallowed and irritates the skin, eyes, and respiratory tract. It reacts with the amino acids in your skin and leaves purple stains on skin and clothing that last for days. Spray it only in the fume hood, spray lightly, and do not breathe the mist. If it touches your skin or eyes, rinse with water for 15 minutes and tell your instructor.'));
c.push(bullet('**Flammable Solvents:** Isopropyl alcohol is highly flammable, and its vapor irritates the eyes and can cause dizziness or headache. The ninhydrin spray is also dissolved in a flammable alcohol solvent. Keep the solvent, the developing chamber, and the spray bottle away from flames and hot plates, and keep them in the fume hood.'));
c.push(bullet('**Ammonia (NH_{4}OH):** The 0.5 M aqueous ammonia in the solvent is basic. Its vapor has a strong, choking odor and irritates the eyes, nose, and lungs, and the liquid irritates skin and eyes (more concentrated ammonia is corrosive). Mix the solvent only in the fume hood and keep the chamber covered with parafilm or plastic wrap.'));
c.push(bullet('**Hair Dryer and Hot Surfaces:** The hair dryer, and a drying oven or hot plate if your instructor uses one, can cause burns. Use the hair dryer on a low setting, only after the plate has stopped dripping solvent; keep it away from the solvent beaker and spray bottle, and keep its cord away from water and sinks.'));
c.push(bullet('**Fingerprints:** Handle the TLC plates only by their edges (or with forceps), wearing gloves, and never touch the cellulose coating. The amino acids from your fingers show up as purple spots after the ninhydrin spray and can be mistaken for real spots.'));
c.push(bullet('**TLC Plates and Capillary Tubes:** Glass-backed plates can break and have sharp edges; they are cut (scored) by the stockroom, not by students. Plastic- or aluminum-backed plates can be cut with scissors. Glass capillary tubes break easily and the ends are sharp. Handle both gently.'));
c.push(h3('Waste Instructions'));
c.push(bullet('**Non-halogenated organic waste container:** the used chromatography solvent (isopropyl alcohol and aqueous ammonia). Pour it out in the fume hood.'));
c.push(bullet('**Solid waste container:** used and spoiled TLC plates (after you have recorded your results) and paper towels with ninhydrin on them.'));
c.push(bullet('**Broken glass box:** used glass capillary tubes and any broken glass-backed plates.'));
c.push(bullet('**Model kits:** take your models apart and return every piece to the kit.'));
// Procedure
c.push(h2('Procedure',{before:360}));
c.push(note('Instructor Notes:','Cut cellulose TLC plates (no fluorescent indicator needed) to about 7.5 cm wide × 10 cm tall, two per group; plastic- or aluminum-backed plates can be cut with scissors, and glass-backed plates are scored by the stockroom. Set out each 1% amino acid solution and the unknowns in small labeled 10-mL beakers with capillary tubes. Aspartic acid gives a very faint spot, so have students apply it twice as many times as the other amino acids in B.3. Each plate takes about 20–30 minutes to develop, so students can build the models in Part A while the plates run. Set out the solvent components and the ninhydrin spray in the fume hood, and hair dryers near the hood.'));
c.push(h3('A. Amino Acid Models'));
c.push(materials('Model kit or prepared models from the stockroom'));
c.push(step('A.1','Build models of glycine and alanine, and draw their structures. Then convert the alanine model into a model of serine by replacing one H on the –CH_{3} group with –OH, and draw serine. Using Table 1, state whether each amino acid is hydrophobic or hydrophilic.'));
c.push(step('A.2','Form the **zwitterion** of glycine: remove the H from the –COOH group and place it on the N atom of the –NH_{2} group. Draw the glycine zwitterion with its charges. **Instructor check:** show your glycine zwitterion model to your instructor.'));
c.push(step('A.3','Draw the ion that glycine forms in a **basic** solution (high pH), and give its net charge.'));
c.push(step('A.4','Draw the ion that glycine forms in an **acidic** solution (low pH), and give its net charge.'));
c.push(h3('B. Thin-Layer Chromatography of Amino Acids on Cellulose'));
c.push(materials('Gloves, 2 cellulose TLC plates (about 7.5 cm × 10 cm), forceps or tweezers, pencil, ruler, glass capillary tubes, 1% amino acid solutions in small labeled beakers (phenylalanine, alanine, glutamic acid, serine, lysine, aspartic acid), unknown amino acid solution, 600-mL beaker (developing chamber), parafilm or plastic wrap, 10-mL and 25-mL graduated cylinders, isopropyl alcohol, 0.5 M NH_{4}OH, dropper, 0.2% ninhydrin spray (fume hood), hair dryer, paper towels'));
c.push(h4('Preparing and Spotting the Plates'));
c.push(step('B.1','**Prepare the chamber (in the fume hood):** Mix 10 mL of 0.5 M NH_{4}OH and 20 mL of isopropyl alcohol and pour the mixture into a clean, dry 600-mL beaker. The solvent layer should be about 0.5 cm deep and must stay **below the origin line** (1.5 cm); if it is too deep, remove some with a dropper. Cover the beaker tightly with parafilm or plastic wrap, label it with your group’s initials, and let the air inside fill with solvent vapor while you mark and spot the plates.'));
c.push(step('B.2','**Mark the plates:** Wearing gloves, pick up two cellulose plates by their edges; never touch the white coating. With a **pencil** (ink would dissolve and run in the solvent), press **lightly** so you do not scrape the cellulose, and draw an origin line 1.5 cm from the bottom of each plate and a stop line about 1 cm from the top. Make four small marks on each origin line, 1.5 cm apart and at least 1 cm from each side edge (Figure 5). Below the line, label Plate 1 **Phe, Ala, Glu, Unk** and Plate 2 **Ser, Lys, Asp, Unk**. Write your initials in pencil in an upper corner of each plate.',{keepNext:true}));
c.push(...img(F+'fig12c_5.png',400,238,'**Figure 5:** Marking the two cellulose TLC plates.'));
c.push(step('B.3','**Apply the samples:** Obtain an unknown and record its letter. Dip a glass capillary tube into the small beaker of an amino acid solution, and lightly touch its tip to the matching mark on the origin line, making a spot 2–3 mm across. Do not press or dig into the cellulose. Let the spot dry (a hair dryer on a low setting speeds this up), then touch the same spot two or three more times, keeping it as small as possible. Apply aspartic acid twice as many times as the others. Spot the unknown on **both** plates. Use a fresh capillary tube for each solution, or return each tube to its own beaker, so the solutions do not get mixed. Let all the spots dry.'));
c.push(h4('Running the Plates'));
c.push(step('B.4','**Develop the plates (in the fume hood):** Using forceps or gloved fingers on the edges, lower Plate 1 into the chamber, spotted end down, so that it stands on the bottom with the origin line above the solvent and its side edges not touching the beaker walls (Figure 6). Re-cover the beaker and do not move it. Let the solvent rise until the front reaches the stop line, about 20–30 minutes. Run Plate 2 in the same chamber after Plate 1, or place both plates in the chamber back-to-back if they fit without touching the walls or each other, as your instructor directs.',{keepNext:true}));
c.push(...img(F+'fig12c_6.png',380,207,'**Figure 6:** A cellulose plate developing in the covered 600-mL beaker: side view (a) and view from above (b).'));
c.push(step('B.5','**Mark the solvent front (in the fume hood):** Remove each plate with forceps as soon as the solvent reaches the stop line, and lay it flat on a paper towel. **Immediately** draw a light pencil line along the top edge of the wet solvent (the solvent front); it disappears as the plate dries. Let the plate dry completely, using a hair dryer on a low setting if needed. When both plates are done, pour the used solvent into the non-halogenated organic waste container.'));
c.push(step('B.6','**Make the spots visible (in the fume hood):** Spray each dry plate lightly and evenly with ninhydrin solution; do not soak it. Warm the plate with the hair dryer (or on a hot plate on a low setting, as your instructor directs) for a few minutes until purple spots appear where ninhydrin reacts with the amino acids. **Immediately** outline each spot in pencil, because the colors fade.'));
c.push(h4('Measurements and Identification'));
c.push(step('B.7','Draw each plate on the Report Sheet. Record the color of each spot.'));
c.push(step('B.8','For each plate, measure the distance in centimeters from the origin line to the solvent front, to the nearest 0.1 cm.'));
c.push(step('B.9','Mark the center of each spot with a light pencil dot and measure its distance from the origin line to the nearest 0.1 cm (measure every spot of the unknown).'));
c.push(step('B.10','Calculate the R_{f} value for each known amino acid and each unknown spot, using the solvent front distance from the same plate.'));
c.push(step('B.11','Identify your unknown by matching the R_{f} value and color of each unknown spot with the known amino acids on the same plate.'));
c.push(step('B.12','Draw the structure of your unknown amino acid in acidic solution, at physiological pH (7.4), and in basic solution (use Figures 2 and 3; acidic and basic R groups also gain or lose H^{+}).'));
// Pre-lab
c.push(h2('Pre-Lab Questions',{pageBreak:true,before:0}));
const PL=[['1.','Name the two functional groups found in every amino acid. To which carbon atom are they both attached?',600],
 ['2.','Classify each R group as nonpolar, polar neutral, acidic, or basic: (a) –CH_{2}–OH (b) –CH_{2}–CH_{2}–COOH (c) –CH_{2}–C_{6}H_{5} (d) –CH_{2}–CH_{2}–CH_{2}–CH_{2}–NH_{2}',660],
 ['3.','Why must you wear gloves and hold the TLC plates only by their edges? What would a fingerprint look like after the ninhydrin spray?',600],
 ['4.','Name the two liquids mixed to make the chromatography solvent and give one hazard of each. Where must the solvent be mixed and used?',600],
 ['5.','Where does each of the following go at the end of lab? (a) the used chromatography solvent (b) used glass capillary tubes (c) used TLC plates',600],
 ['6.','Which amino acid should travel farther up the plate, phenylalanine or aspartic acid? Explain using their R groups. Why must the origin line be above the solvent level?',675],
 ['7.','The six known amino acids are split between two plates. Why is the unknown spotted on both plates?',525],
 ['8.','A spot moves 5.2 cm from the origin while the solvent front moves 9.6 cm. Calculate the R_{f} value with the correct number of significant figures.',0]];
PL.forEach(([a,b,sp])=>{c.push(step(a,b,{left:360,after:0})); if(sp)c.push(space(sp));});
// Report
c.push(h2('Report Sheet',{pageBreak:true,before:0,rule:true}));
c.push(...nameBlock());
c.push(h3('A. Amino Acid Models',{before:120}));
c.push(table([3120,3120,3120],[['**A.1** Glycine','Alanine','Serine'],['','',''],[0,1,2].map(()=>({t:'Hydrophobic or hydrophilic?',shade:'F2F2F2'})),['','','']],{header:1,h:[400,2000,400,600]}));
c.push(space(160));
c.push(table([3120,3120,3120],[['**A.2** Glycine zwitterion','**A.3** Glycine in base (high pH)','**A.4** Glycine in acid (low pH)'],['','',''],['Net charge:','Net charge:','Net charge:']],{h:[400,2200,500]}));
c.push(space(160));
c.push(checkRow('A.2','glycine zwitterion model shown'));
c.push(h3('B. Thin-Layer Chromatography of Amino Acids on Cellulose',{before:240}));
c.push(P('**B.3** Unknown letter: ____________',{after:160}));
c.push(table([4680,4680],[[['**B.7** Plate 1 (Phe, Ala, Glu, Unk): show the origin, the solvent front, and each outlined spot, labeled with its color.'],['**B.7** Plate 2 (Ser, Lys, Asp, Unk): show the origin, the solvent front, and each outlined spot, labeled with its color.']],['','']],{header:0,h:[900,3600]}));
const plateTable=(n,rows)=>{c.push(P('**B.8** Plate '+n+': distance from origin to solvent front: ____________ cm',{before:200,after:120,keepNext:true}));
 c.push(table([2600,2200,2280,2280],[['Plate '+n,'B.7 Color of spot','B.9 Distance moved by spot (cm)','B.10 R_{f} value'],...rows.map(r=>[r,'','','']),['Unknown, spot 1','','',''],['Unknown, spot 2','','','']],{h:480,firstColBold:true}));};
plateTable(1,['Phenylalanine','Alanine','Glutamic acid']);
plateTable(2,['Serine','Lysine','Aspartic acid']);
c.push(P('**B.10** Show your R_{f} calculation for one amino acid:',{before:200,after:900}));
c.push(P('**B.11** Identity of the amino acid(s) in your unknown: _______________________________',{after:160}));
c.push(P('Evidence (R_{f} values and colors that match, and on which plate):',{after:800}));
c.push(table([3120,3120,3120],[[{t:'**B.12** Structures of the unknown amino acid: ____________________',span:3}],['In acidic solution','At physiological pH (7.4)','In basic solution'],['','','']],{header:0,h:[450,400,2400]}));
// Questions
c.push(h2('Questions and Problems',{pageBreak:true,before:0}));
const Q=[['Q.1','Valine has the R group –CH(CH_{3})_{2}. Draw the zwitterion of valine and give its net charge.'],
 ['Q.2','Draw the form of valine that is present in a strongly acidic solution. What is its net charge?'],
 ['Q.3','List the six known amino acids in order from the highest R_{f} value to the lowest. Use the polarity and charge of their R groups to explain this order. Does your order agree with the trend described in the Introduction?'],
 ['Q.4','Why is the solvent front marked immediately after the plate is removed from the chamber? How would your R_{f} values change if you waited until the plate dried and marked the front too low?'],
 ['Q.5','Why must the known amino acids be run on the same plate as the unknown, instead of comparing the unknown with R_{f} values from a book? Why can an R_{f} value from Plate 1 be compared with one from Plate 2 only roughly?'],
 ['Q.6','Draw lysine and aspartic acid as they exist in a strongly acidic solution (low pH). Give the net charge of each.']];
Q.forEach(([a,b],i)=>{c.push(step(a,b,{left:0,after:0})); c.push(space(i==Q.length-1?0:(i==2||i==5?1600:1100)));});
build(c,OUT).then(()=>console.log('wrote',OUT));
