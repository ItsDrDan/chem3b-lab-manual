const L=require('../lablib.js'); const {P,title,h2,h3,h4,bullet,step,sub,materials,note,caution,img,table,space,nameBlock,build,W,D,checkRow}=L;
const F=process.argv[2]+'/'; const OUT=process.argv[3];
const {AlignmentType}=D;
const eqP=(s,o={})=>P(s,{align:AlignmentType.CENTER,before:80,after:o.after??160,keepNext:o.keepNext,run:o.size?{size:o.size}:{}});
const c=[];
c.push(title('Draft Experiment: Urinalysis'));
c.push(h3('Goals',{before:0}));
['Read a multi-reagent urine test strip correctly, at the right times, and explain the chemistry of the glucose, ketone, protein, pH, specific gravity, blood, and urobilinogen pads.',
 'Confirm the strip results with tests you already know: Benedict’s test for glucose, a sulfosalicylic acid test for protein, a silver nitrate test for chloride, and a measurement of specific gravity.',
 'Use your results to match four simulated “patient” urine samples to four patients, and explain each result using what you know about glucose, ketone body, and protein metabolism.',
 'Explain why glucose appears in urine only above the renal threshold, and why a ketone strip does not detect β-hydroxybutyrate.'].forEach(s=>c.push(bullet(s)));

// ---------------- Introduction
c.push(h2('Introduction'));
c.push(P('**All of the “urine” in this experiment is simulated urine made by the stockroom from water, salts, urea, and yellow food coloring.** No real urine is used, and you must never bring a urine sample to lab or test your own urine. The test strips and tests you use here are real, but this is a chemistry exercise, not a medical test.',{after:200}));
c.push(h3('A. What Urine Can Tell You',{before:120}));
c.push(P('Your kidneys filter about 180 liters of blood plasma every day (source: OpenStax Anatomy and Physiology). The filtered liquid contains water, salts, glucose, amino acids, and waste products. As it passes along the kidney tubules, almost all of the water, glucose, and amino acids, and most of the salts, are taken back into the blood (**reabsorbed**). What is left, about 1–2 liters a day, is urine (source: MedlinePlus). Normal urine is mostly water. Its main dissolved substances are **urea** (the nitrogen waste made from the amino groups of amino acids), **creatinine** (a waste product of muscle), and **electrolytes** such as Na^{+}, K^{+}, and Cl^{–} ions.'));
c.push(P('Because the kidneys keep useful molecules in the blood, finding them in urine is a clue that something is wrong (Table 1):'));
c.push(bullet('**Glucose.** The kidneys can reabsorb glucose only up to a limit. When blood glucose rises above about **180 mg/dL**, the **renal threshold**, the carriers that reabsorb glucose are all busy, and the extra glucose “spills over” into the urine. Normal fasting blood glucose is about 70–99 mg/dL (source: MedlinePlus), so a healthy person has no glucose in the urine. In uncontrolled diabetes, blood glucose is often above 180 mg/dL, so glucose appears in the urine and pulls extra water with it (Textbook Section 13.9).'));
c.push(bullet('**Ketone bodies.** When cells cannot use glucose (for example, in type 1 diabetes without insulin, or during starvation), the liver breaks down large amounts of fatty acids. The acetyl CoA that the citric acid cycle cannot use is turned into the **ketone bodies** acetoacetate, β-hydroxybutyrate, and acetone. Ketone bodies are acids, so a high level lowers the pH of the blood (**ketoacidosis**), and the extra ketone bodies are excreted in the urine (Section 15.5).'));
c.push(bullet('**Protein.** Healthy kidneys do not filter large proteins such as albumin, so normal urine has almost no protein. Damaged filters (for example, from long-term high blood pressure or diabetes) let albumin leak into the urine (**proteinuria**). The urine may look foamy.'));
c.push(P('**Table 1: Some Substances in Urine**',{align:AlignmentType.CENTER,after:80,keepNext:true,before:120}));
c.push(table([2100,2900,4360],[['Substance','Normal urine','A high level suggests'],
 ['Glucose','None detected','Blood glucose above the renal threshold (about 180 mg/dL), as in uncontrolled diabetes'],
 ['Ketone bodies','None detected','Fat is being used for energy instead of glucose: type 1 diabetes without insulin (diabetic ketoacidosis), starvation, very low-carbohydrate diets'],
 ['Protein (albumin)','None or a trace','Kidney damage (the filters leak protein)'],
 ['Urobilinogen','0.2–1 mg/dL (normal blocks on the strip chart)','Liver disease, or rapid breakdown of red blood cells'],
 ['Specific gravity','1.005–1.030','High: the urine is concentrated (dehydration) or contains a lot of dissolved glucose; low: very dilute urine'],
 ['pH','About 4.6–8 (often near 6)','Low: acids in the blood, such as ketone bodies; high: certain infections or diets'],
 ['Chloride, sodium, potassium ions','Always present','The kidneys adjust how much salt is excreted to keep the blood’s salt level constant']],{firstColBold:true}));

c.push(h3('B. Urine Reagent Strips'));
c.push(P('A **urine reagent strip** (a “dipstick”) is a plastic strip with a row of small paper **pads**. Each pad holds dried chemicals for one test. When the strip is dipped in urine, each pad changes color, and you compare the color with the chart printed on the bottle. Each pad must be read at its **own time** (Table 2): read too early and the color has not finished developing (a false low reading); read too late and the color keeps changing (often a false high reading). Strips from different companies use slightly different times, so **the times on your bottle are the ones to use**.',{keepNext:true}));
c.push(P('**Table 2: The Strip Pads Used in This Experiment**',{align:AlignmentType.CENTER,after:80,keepNext:true}));
c.push(table([1500,4600,2000,1260],[['Pad','Chemistry (what the pad contains and how it works)','Positive color','Typical read time*'],
 ['Glucose','Two enzymes: **glucose oxidase** oxidizes glucose and makes hydrogen peroxide; **peroxidase** uses the H_{2}O_{2} to oxidize a colorless dye to a colored one. Specific for glucose.','Blue-green to brown','30 s'],
 ['Ketones','**Sodium nitroprusside** reacts with the –CH_{2}– group between the two C=O groups of acetoacetate (and much more weakly with acetone).','Pink to purple','40 s'],
 ['Specific gravity','A polymer with acid groups releases H^{+} when ions are present; an indicator changes color. Detects **ions only**.','Blue-green → yellow-green','45 s'],
 ['Blood','The heme of hemoglobin acts like peroxidase and oxidizes a dye.','Green spots or solid green','60 s'],
 ['pH','Two acid–base indicators (methyl red and bromthymol blue).','Orange (pH 5) → blue (pH 8.5)','60 s'],
 ['Protein','The indicator tetrabromophenol blue, held at about pH 3 by a buffer. Albumin binds the indicator and changes its color even though the pH does not change (the “**protein error**” of an indicator).','Yellow → green → blue-green','60 s'],
 ['Urobilinogen','A reagent that forms a pink dye with urobilinogen.','Light pink → dark pink','60 s']],{firstColBold:true}));
c.push(P('*Typical times for a common 10-test strip (source: Siemens Multistix 10 SG package insert). Use the times on your own bottle. A 10-test strip also has bilirubin, nitrite, and leukocyte pads; record them if your strip has them, but this experiment does not use them.',{before:60,after:200,run:{size:20}}));
c.push(h4('The Glucose Pad'));
c.push(P('The glucose pad uses the same kind of oxidation as Benedict’s test (Experiment #8): the aldehyde carbon (C1) of glucose is oxidized [O] to a carboxylic acid, **gluconic acid**. In the pad, the oxidizing agent is O_{2} from the air, and an enzyme does the work. The H_{2}O_{2} made in the first step is used by the second enzyme to make the color:',{keepNext:true}));
c.push(eqP('glucose  +  O_{2}   —(glucose oxidase)→   gluconic acid  +  H_{2}O_{2}',{after:40,keepNext:true}));
c.push(eqP('H_{2}O_{2}  +  colorless dye   —(peroxidase)→   colored dye  +  H_{2}O',{after:160}));
c.push(P('Because an enzyme’s active site fits only its own substrate, the glucose pad detects **only glucose**. Benedict’s reagent detects **any reducing sugar** (glucose, fructose, galactose, lactose, and others).'));
c.push(h4('The Ketone Pad'));
c.push(P('The three ketone bodies are shown in Table 3. The nitroprusside pad reacts with the –CH_{2}– group that sits between two C=O groups in acetoacetate, so it detects **acetoacetate** well and **acetone** only weakly. **β-Hydroxybutyrate** forms when acetoacetate is reduced [H]; its ketone C=O has become an alcohol –OH, so it does **not** react with the pad at all, even though it is usually the ketone body present in the largest amount in ketoacidosis (source: StatPearls).',{keepNext:true}));
c.push(P('**Table 3: The Ketone Bodies**',{align:AlignmentType.CENTER,after:80,keepNext:true}));
c.push(table([2300,3400,3660],[['Ketone body','Condensed structure','Ketone strip result'],
 ['Acetoacetate','CH_{3}–CO–CH_{2}–COO^{–}','Positive (pink to purple)'],
 ['Acetone','CH_{3}–CO–CH_{3}','Weak, or none on some brands'],
 ['β-Hydroxybutyrate','CH_{3}–CH(OH)–CH_{2}–COO^{–}','Negative (no C=O on the chain carbon)']],{firstColBold:true}));
c.push(h4('Urobilinogen'));
c.push(P('When old red blood cells are broken down, the heme of hemoglobin is turned into **bilirubin**, which the liver sends into the intestine in bile. Bacteria in the intestine convert bilirubin into **urobilinogen**. Some urobilinogen is absorbed into the blood; the liver takes most of it back, and a small amount (0.2–1 mg/dL on the strip chart; each laboratory sets its own range) leaves in the urine. The urine level rises when the liver is damaged (it cannot take urobilinogen back) or when many red blood cells are being destroyed. **Urobilinogen is unstable and cannot be added to the simulated urine,** so every sample in this experiment reads at the lowest block on the chart (“0.2, normal”). Note that the lowest block of the chart means “normal,” not “none”: the strip cannot show a value of zero. You will study urobilinogen with a provided set of strip readings (Patient 5, Part C).'));

c.push(h3('C. Confirming the Strip Results'));
c.push(P('In a clinical laboratory, unexpected strip results are often checked with a second test that works by a different chemical reaction. You will confirm the strip results with four tests:'));
c.push(bullet('**Benedict’s test (glucose and other reducing sugars):** Experiment #8. Heated with a reducing sugar, the blue Cu^{2+} ions are reduced to a green, yellow, orange, or brick-red solid of Cu_{2}O. More sugar gives a color further along this series, so the color gives a rough amount (Table 4).'));
c.push(bullet('**Sulfosalicylic acid test (protein):** Like the acid in Experiment #12, sulfosalicylic acid **denatures** protein, and the denatured protein comes out of solution as a white cloud. The more protein, the cloudier the tube. Unlike the strip, this test detects all proteins, not only albumin.'));
c.push(bullet('**Silver nitrate test (chloride ions, an electrolyte):** Ag^{+} ions react with Cl^{–} ions to form a white solid, silver chloride: Ag^{+}(aq) + Cl^{–}(aq) → AgCl(s). A few drops of dilute nitric acid are added first so that other ions in urine (such as phosphate) do not also form a solid with Ag^{+}.'));
c.push(bullet('**Specific gravity:** the density of the urine compared with the density of water. Pure water has a specific gravity of 1.000; anything dissolved in the urine (salts, urea, glucose, protein) raises it. You will measure it with a **refractometer**, or, if one is not available, by weighing 10.00 mL of the sample and 10.00 mL of water. Remember that the **strip** specific gravity pad detects only **ions**, so it does not respond to glucose or urea.'));
c.push(P('**Table 4: Reading the Confirmation Tests**',{align:AlignmentType.CENTER,after:80,keepNext:true,before:120}));
c.push(table([2600,6760],[['Test','Reading'],
 ['Benedict’s (B.1)','Clear blue = negative; green = trace (about 0.5% glucose); yellow = about 1%; orange = about 1.5%; brick red = 2% or more. (Rough amounts in the original sample.)'],
 ['Sulfosalicylic acid (B.2), in front of the line card','Clear, lines sharp = **0** (negative); faint haze, lines sharp = **trace**; cloudy, lines blurry = **1+ to 2+**; heavy white cloud, lines cannot be seen = **3+ to 4+**'],
 ['Silver nitrate (B.3)','Clear = no chloride; white cloud or white solid (darkens in light) = chloride present']],{firstColBold:true}));

c.push(h3('D. The Patients'));
c.push(P('Your instructor will give you four simulated urine samples labeled with letters (W, X, Y, and Z). Each comes from one of the four patients below (all fictional). Your job is to decide which sample belongs to which patient, and to explain each abnormal result. In Part C you will also interpret a provided set of strip readings for a fifth patient.',{keepNext:true}));
c.push(P('**Table 5: The Patients (Fictional)**',{align:AlignmentType.CENTER,after:80,keepNext:true}));
c.push(table([1400,7960],[['Patient','Information'],
 ['1','A 24-year-old who needs a urine test for a sports physical. Feels well. Blood glucose 92 mg/dL.'],
 ['2','A 58-year-old with type 2 diabetes who stopped taking medication. Very thirsty and urinating often. Blood glucose 260 mg/dL.'],
 ['3','A 19-year-old with type 1 diabetes who missed several insulin doses. Vomiting, breathing fast and deeply, and the breath smells fruity. Blood glucose 480 mg/dL; blood pH low.'],
 ['4','A 66-year-old with high blood pressure for many years. Ankles are swollen and the urine looks foamy. Blood glucose 95 mg/dL.']],{firstColBold:true}));
c.push(P('**Optional textbook link:** The textbook follows a fictional patient, **Rosa**, an adult with type 2 diabetes. Chapter 15 discusses her ketone bodies and her BUN (blood urea nitrogen). If your instructor assigns it, Question Q.8 asks you to connect her case to your results.',{before:120}));

// ---------------- Hazards
c.push(h3('Hazards and Safety Instructions'));
c.push(P('Wear safety goggles and gloves at all times. If any chemical gets on your skin or in your eyes, rinse with water for 15 minutes and tell your instructor.',{after:100}));
c.push(bullet('**Simulated Urine Only:** The samples are made from lab chemicals and food coloring; they are not biohazards, but they are lab chemicals. Never bring urine to lab, and never test your own urine. The strip results in this experiment are **not a medical diagnosis**. If you have a health concern, see a health care provider.'));
c.push(bullet('**No Food or Drink:** The samples contain glucose and other chemicals and may look harmless. Never taste anything in the lab, and keep food, drinks, and water bottles out of the lab.'));
c.push(bullet('**Toxic Heavy Metals:** 1% silver nitrate (AgNO_{3}) is toxic and leaves brown-black stains on skin that do not wash off for days. Benedict’s reagent contains copper(II) sulfate, which is harmful if swallowed and toxic to aquatic life. Wear gloves, and never pour these solutions down the drain.'));
c.push(bullet('**Corrosive and Irritating (Acids):** 10% nitric acid (HNO_{3}) is corrosive: it causes skin burns and eye damage. 3% sulfosalicylic acid irritates skin and eyes. Add them from the dropper bottles only.'));
c.push(bullet('**Thermal Hazards:** The boiling water bath and hot plate cause burns and stay hot after they are turned off. Move test tubes into and out of the bath with a test tube holder, and point the open end away from everyone.'));
c.push(bullet('**Test Strips:** Do not touch the pads; they contain small amounts of chemicals. Close the strip bottle right after you take a strip out, because moisture in the air ruins the pads.'));

// ---------------- Waste
c.push(h3('Waste Instructions'));
c.push(bullet('**Aqueous waste container:** the Benedict’s tubes (B.1, copper), the silver nitrate tubes (B.3, silver and nitric acid), the samples from the strip test tubes, the samples used for specific gravity, and any leftover simulated urine. Rinse each tube with a little water into the same container.'));
c.push(bullet('**Non-halogenated organic waste container:** the sulfosalicylic acid tubes (B.2). Sulfosalicylic acid is an organic compound.'));
c.push(bullet('**Solid waste container:** used test strips.'));
c.push(bullet('**Trash:** gloves, paper towels, and plastic pipettes.'));
c.push(bullet('Nothing in this experiment goes in the halogenated waste container: the chloride ions in the samples come from salts (NaCl and KCl), not from halogen compounds. **Do not pour any of the mixtures down the sink.**'));

// ---------------- Procedure
c.push(h2('Procedure',{pageBreak:true,before:0}));
c.push(note('Instructor Notes:','Have students start the boiling water bath as soon as they arrive. Each pair receives about 30 mL of each of the four lettered samples in labeled cups; change which letter goes with which patient from section to section (keep the key). The ketone sample is made on the day of lab and kept cold (see the prep notes); the stockroom should dip one strip in every sample on the morning of lab to confirm that each sample gives its expected readings. Check the Benedict’s and sulfosalicylic acid results once before lab too. If refractometers are not available, students use the weighing method in B.4 (Option 2); a balance that reads to 0.001 g is best. **Dry-lab option:** if your section will not do the bench work, students skip Parts A and B and copy the Sample Class Data at the end of this Procedure into their report sheet, writing “Sample data” at the top of each table. They answer the same Pre-Lab Questions (except question 2), Part C, and Questions and Problems.'));
c.push(h4('Getting Ready (All Parts)'));
c.push(bullet('**Boiling water bath:** a 400-mL beaker half full of water on a hot plate (for B.1).'));
c.push(bullet('**Plan your time:** Part A takes about 25 minutes. While the Benedict’s tubes heat (B.1), set up the sulfosalicylic acid and silver nitrate tests (B.2, B.3).'));
c.push(bullet('**Pipettes:** Use a separate clean pipette for each sample. Label every tube with the sample letter.'));
c.push(h3('A. Reading the Urine Test Strips'));
c.push(materials('4 large test tubes, test tube rack, 4 reagent strips (from the shared bottle), timer (or a phone stopwatch), paper towels; samples W, X, Y, and Z'));
c.push(step('A.1','Fill four large test tubes almost to the top (about 15 mL) with samples W, X, Y, and Z, one sample per tube. Keep the rest of each sample in its cup for Part B.'));
c.push(step('A.2','Look at the color chart on the strip bottle. Find the read time for each pad and write it in the “Read time” column of the report sheet table for Part A.'));
c.push(step('A.3','Take **one** strip out of the bottle without touching the pads, and close the bottle right away. Have your partner ready with the timer.'));
c.push(step('A.4','Dip the strip into sample W so that every pad is wet, and take it out right away (about 1 second). Start the timer as the strip comes out. Drag the edge of the strip along the rim of the tube to remove extra liquid, and touch the side edge (not the pads) to a paper towel. Hold the strip **level** (pads up), so that liquid does not run from one pad to the next.'));
c.push(step('A.5','Hold the strip next to the color chart in good light. Read each pad at its read time (not before, not much after) and record the value printed under the closest color block. One partner calls out the times; the other reads the colors.'));
c.push(step('A.6','Repeat A.3–A.5 for samples X, Y, and Z, using a **new strip** for each sample. Put the used strips in the solid waste container, and the samples from the four tubes in the aqueous waste container.'));
c.push(h3('B. Confirming the Strip Results'));
c.push(materials('15 test tubes, test tube rack, test tube holder, 10-mL graduated cylinder, plastic pipettes, boiling water bath, line card, refractometer (if available) or a 10-mL volumetric pipette with bulb, 50-mL beaker, and balance; Benedict’s reagent, 3% sulfosalicylic acid, 10% HNO_{3}, 1% AgNO_{3}, distilled water, samples W, X, Y, and Z'));
c.push(step('B.1','**Benedict’s test (glucose):** Label five test tubes W, X, Y, Z, and “water.” Place 2 mL of Benedict’s reagent in each tube. Add 5 drops of the matching sample to each tube (5 drops of distilled water to the “water” tube) and mix. Using a test tube holder, heat all five tubes in the boiling water bath for 5 minutes. Record each color and use Table 4 to estimate the amount of glucose.'));
c.push(step('B.2','**Sulfosalicylic acid test (protein):** Label five test tubes as in B.1. Place 2 mL of each sample (and 2 mL of distilled water) in its tube. Add 2 mL of 3% sulfosalicylic acid to each tube and mix. Wait 2 minutes, then hold each tube in front of the line card and record its reading (Table 4).'));
c.push(step('B.3','**Silver nitrate test (chloride):** Label five test tubes as in B.1. Place 1 mL of each sample (and 1 mL of distilled water) in its tube, and add 1 mL of distilled water to each tube. Add 2 drops of 10% HNO_{3} and then 2 drops of 1% AgNO_{3} to each tube. Tap to mix and record what you see.'));
c.push(step('B.4','**Specific gravity:** Use the option your instructor assigns.'));
c.push(P('**Option 1 (refractometer):** Place 1–2 drops of distilled water on the glass, close the cover, and look through the eyepiece toward the light. The boundary between light and dark should be at 1.000; if not, ask your instructor to adjust it. Wipe the glass dry with a soft tissue. Then place 1–2 drops of sample W on the glass, read the specific gravity where the boundary crosses the scale, and record it. Wipe the glass, and repeat for X, Y, and Z.',{indent:{left:540},after:120}));
c.push(P('**Option 2 (weighing):** Place a clean, dry 50-mL beaker on the balance and tare (zero) it. Using the 10-mL volumetric pipette, add 10.00 mL of distilled water and record its mass. Empty and dry the beaker. Rinse the pipette with a little of sample W, then repeat the weighing with 10.00 mL of sample W. Repeat for X, Y, and Z, rinsing the pipette with each new sample. Calculate each specific gravity:',{indent:{left:540},after:40,keepNext:true}));
c.push(eqP('specific gravity  =  mass of 10.00 mL of sample  ÷  mass of 10.00 mL of water',{after:160}));
c.push(step('B.5','Compare each measured specific gravity with the strip specific gravity from Part A. Note any sample for which the two methods differ by 0.003 or more.'));
c.push(h3('C. Identifying the Patients'));
c.push(step('C.1','Using all of your results from Parts A and B, match each sample (W, X, Y, Z) to one of the four patients in Table 5. On the report sheet, list the evidence for each match and explain each abnormal result in one or two sentences, using the ideas in Section A of the Introduction.'));
c.push(step('C.2','**Patient 5 (provided data):** A 45-year-old has yellow skin and eyes (jaundice) after a viral infection of the liver (hepatitis), and the urine is dark. The strip readings in Table 6 were **provided by your instructor; they are not real measurements**, and you will not test a sample for Patient 5. Use them to answer the Part C questions on the report sheet.',{keepNext:true}));
c.push(P('**Table 6: Patient 5 Strip Readings (Provided Data — Not Real Measurements)**',{align:AlignmentType.CENTER,after:80,keepNext:true,before:120}));
c.push(table([1336,1336,1336,1338,1338,1338,1338],[['Glucose','Ketones','Spec. gravity','Blood','pH','Protein','Urobilinogen'],
 ['Negative','Negative','1.025','Negative','6.0','Trace','4 mg/dL']],{header:1}));
c.push(P('Bilirubin pad: moderate (positive). Nitrite and leukocyte pads: negative.',{before:60,after:200}));

// ---------------- Dry-lab data
c.push(h3('Dry-Lab Option: Sample Class Data'));
c.push(note('Instructor Note:','Use this section only if your section is doing the dry-lab version of this experiment. The results below are **sample (mock) data**, written to match what one group should see at the bench with the stockroom recipes; they are not real measurements. Students copy them into the report sheet tables (marking each table “Sample data”) and answer all of the same questions. In the sample data, W, X, Y, and Z stand for the samples one group received; letters change from section to section.'));
c.push(P('**SAMPLE CLASS DATA — Part A strip readings (one group). Not real measurements.**',{align:AlignmentType.CENTER,after:80,keepNext:true}));
const SW=[1900,1000,1615,1615,1615,1615];
c.push(table(SW,[['Pad','Read time','W','X','Y','Z'],
 ['Glucose (mg/dL)','30 s','≥ 2000','Negative','Negative','1000'],
 ['Ketones (mg/dL)','40 s','Large (80)','Negative','Negative','Negative'],
 ['Specific gravity','45 s','1.020','1.010','1.010','1.010'],
 ['Blood','60 s','Negative','Negative','Negative','Negative'],
 ['pH','60 s','5.5','6.0','6.5','6.0'],
 ['Protein (mg/dL)','60 s','Negative','Negative','300','Negative'],
 ['Urobilinogen (mg/dL)','60 s','0.2','0.2','0.2','0.2']],{firstColBold:true}));
c.push(P('**SAMPLE CLASS DATA — Part B (one group). Not real measurements.**',{align:AlignmentType.CENTER,after:80,keepNext:true,before:200}));
c.push(table([2700,1332,1332,1332,1332,1332],[['Test','W','X','Y','Z','Water'],
 ['B.1 Benedict’s color','Brick red','Clear blue','Clear blue','Yellow','Clear blue'],
 ['B.2 Sulfosalicylic acid','0 (clear)','0 (clear)','3+ (heavy white cloud)','0 (clear)','0 (clear)'],
 ['B.3 Silver nitrate','White cloud','White cloud','White cloud','White cloud','Clear'],
 ['B.4 Mass of 10.00 mL (g); water = 9.98 g','10.19','10.07','10.09','10.11','9.98'],
 ['B.4 Specific gravity','1.021','1.009','1.011','1.013','1.000']],{firstColBold:true}));
c.push(P('A group using a refractometer recorded W 1.021, X 1.009, Y 1.011, and Z 1.013.',{before:80,after:200}));

// ---------------- Pre-Lab
c.push(h2('Pre-Lab Questions',{pageBreak:true,before:0}));
const PL=[['1.','Where do the urine samples in this experiment come from? Why must you never bring a urine sample to lab or test your own urine, and why are the strip results in this experiment not a medical diagnosis?',1000],
 ['2.','Where does each of the following go at the end of lab? (a) the Benedict’s tubes (b) the sulfosalicylic acid tubes (c) the silver nitrate tubes (d) the used test strips. Why does the silver nitrate tube **not** go in the halogenated waste container, even though it contains chloride?',1100],
 ['3.','Why must each strip pad be read at the time printed on the bottle? What could happen if you read the protein pad after 5 minutes instead of 60 seconds? Why should you hold the strip level?',1000],
 ['4.','A patient’s blood glucose is 140 mg/dL. Another patient’s is 260 mg/dL. Which patient would you expect to have glucose in the urine? Explain using the renal threshold.',900],
 ['5.','Predict the results (positive or negative) of the strip glucose pad, the strip ketone pad, Benedict’s test, and the sulfosalicylic acid test for a sample from Patient 3 in Table 5.',1000],
 ['6.','Name two hazards in this experiment and the precaution for each.',0]];
PL.forEach(([a,b,sp])=>{c.push(step(a,b,{left:360,after:0})); if(sp)c.push(space(sp));});

// ---------------- Report Sheet
c.push(h2('Report Sheet',{pageBreak:true,before:0,rule:true}));
c.push(...nameBlock());
c.push(P('*Dry-lab option: copy the Sample Class Data into these tables and write “Sample data” above each table.*',{after:120}));
c.push(h3('A. Urine Test Strips',{before:120}));
c.push(table(SW,[['Pad','A.2 Read time','A.5 W','A.5 X','A.5 Y','A.5 Z'],
 ['Glucose (mg/dL)','','','','',''],['Ketones (mg/dL)','','','','',''],['Specific gravity','','','','',''],['Blood','','','','',''],['pH','','','','',''],['Protein (mg/dL)','','','','',''],['Urobilinogen (mg/dL)','','','','','']],{h:520,firstColBold:true}));
c.push(h3('B. Confirmation Tests',{before:240}));
c.push(table([2700,1332,1332,1332,1332,1332],[['Test','W','X','Y','Z','Water'],
 ['B.1 Benedict’s color','','','','',''],
 ['B.1 Estimated glucose (%)','','','','',''],
 ['B.2 Sulfosalicylic acid reading','','','','',''],
 ['B.3 Silver nitrate result','','','','',''],
 ['B.4 Option 2 only: mass of 10.00 mL (g)','','','','',''],
 ['B.4 Specific gravity (measured)','','','','','1.000'],
 ['Specific gravity (strip, from Part A)','','','','','—']],{h:640,firstColBold:true}));
c.push(P('B.4 option used (circle one):   refractometer   /   weighing',{before:100,after:80}));
c.push(table([9360],[['**B.5** Which sample(s) gave a measured specific gravity 0.003 or more higher than the strip value? What does that sample contain that the strip specific gravity pad cannot detect?']],{header:0,h:1100}));
c.push(h3('C. Identifying the Patients',{before:240}));
c.push(table([1100,1300,3480,3480],[['C.1 Sample','Patient (1–4)','Evidence (strip and confirmation tests)','Explanation of the abnormal result(s)'],
 ['W','','',''],['X','','',''],['Y','','',''],['Z','','','']],{h:1300,firstColBold:true}));
c.push(P('',{after:120}));
c.push(checkRow('C.1','sample identities checked'));
c.push(P('',{after:120}));
c.push(table([9360],[['**C.2** Patient 5: Which strip result(s) are abnormal? Why is the urobilinogen level high when the liver is damaged? Why did none of your own samples (W–Z) give a urobilinogen reading other than 0.2?']],{header:0,h:1600}));

// ---------------- Questions
c.push(h2('Questions and Problems',{pageBreak:true,before:0}));
const Q=[['Q.1','Patients 1 and 2 both have glucose in their blood, but only one has glucose in the urine. Explain why, using the term **renal threshold**. Why does glucose in the urine make a person urinate more often and feel thirsty?',1500],
 ['Q.2','Write the reaction on the glucose pad of the strip, in words or as an equation, for both steps. Which carbon of glucose is oxidized [O], and to what functional group? Why does the strip glucose pad give a negative result for fructose or lactose, while Benedict’s test is positive for both?',1700],
 ['Q.3','a. A patient in diabetic ketoacidosis has a high level of β-hydroxybutyrate but very little acetoacetate in the urine. Will the ketone pad of the strip show the true level of ketone bodies? Explain, using the structures in Table 3.',1300]];
Q.forEach(([a,b,sp])=>{c.push(step(a,b,{left:0,after:0})); c.push(space(sp));});
c.push(P('b. Show how β-hydroxybutyrate is related to acetoacetate. Is acetoacetate → β-hydroxybutyrate an oxidation [O] or a reduction [H]?',{indent:{left:540},after:900}));
c.push(P('c. Why was the pH of the ketoacidosis sample lower than the pH of the normal sample?',{indent:{left:540},after:900}));
const Q2=[['Q.4','Which patient’s sample contained protein? What does protein (albumin) in urine suggest about the kidneys? Why does the strip protein pad detect albumin even though its buffer keeps the pH from changing?',1500],
 ['Q.5','For each of the following, decide whether it gives a **false positive** or a **false negative**, and explain. (a) The glucose pad is read at 10 seconds instead of 30 seconds. (b) The strip bottle was left open for a week. (c) A urine sample is very basic (pH 9), which overwhelms the buffer on the protein pad. (d) A urine sample contains a lot of vitamin C (ascorbic acid), a reducing agent that destroys H_{2}O_{2} on the glucose pad. Would vitamin C affect Benedict’s test the same way? Explain.',2000],
 ['Q.6','For the sample you matched to Patient 2, the measured specific gravity was higher than the strip value. Explain why, using what each method detects. Which method better shows how concentrated the urine of a patient with diabetes is?',1400],
 ['Q.7','Every sample gave a white solid with silver nitrate. Write the net ionic equation. Why is chloride always present in normal urine, and why was nitric acid added first?',1300],
 ['Q.8','*(Optional, textbook case.)* Rosa, the fictional patient in the textbook, has type 2 diabetes. (a) If Rosa’s blood glucose is often above 180 mg/dL, which of your samples would her urine most resemble, and why? (b) If Rosa began to make large amounts of ketone bodies (Section 15.5), which strip pad(s) would change, and which ketone body would the strip miss? (c) Chapter 15 also follows her BUN (blood urea nitrogen). Urea was in every sample you tested. From which kind of molecule in the diet does the nitrogen in urea come?',0]];
Q2.forEach(([a,b,sp])=>{c.push(step(a,b,{left:0,after:0})); if(sp)c.push(space(sp));});
build(c,OUT).then(()=>console.log('wrote',OUT));
