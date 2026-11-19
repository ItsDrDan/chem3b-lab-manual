// Front matter for the compiled CHEM 3B OER Laboratory Manual.
// Exports functions returning arrays of docx children; master.js places each in its own section.
const L=require('../lablib.js'); const {P,title,h2,h3,h4,bullet,step,table,space,D,W,BLUE,HF,TNR}=L;
const {Paragraph,TextRun,ImageRun,AlignmentType,Math:DMath,MathRun,MathFraction}=D;
const fs=require('fs');
const bulletT=(s,l=0)=>new Paragraph({children:L.runs(s),numbering:{reference:'bul',level:l},spacing:{after:30,line:250}});

function cover(F){
  const c=[];
  const t=(s,size,o={})=>new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:o.before??0,after:o.after??120},children:[new TextRun({text:s,font:o.font||HF,size,bold:o.bold,italics:o.italics,color:o.color})]});
  c.push(t('CHEM 3B',64,{bold:true,color:BLUE,before:600}));
  c.push(t('Laboratory Manual',56,{bold:true,color:BLUE,after:120}));
  c.push(t('Introductory Organic and Biological Chemistry',32,{font:TNR,italics:true,after:360}));
  c.push(new Paragraph({alignment:AlignmentType.CENTER,spacing:{after:360},children:[new ImageRun({type:'png',data:fs.readFileSync(F+'cover/cover_dan.png'),transformation:{width:520,height:403},altText:L.altFor('cover_dan.png')})]}));
  c.push(t('Alexandra Aloia',28,{font:TNR,after:60}));
  c.push(t('Daniel Kwasniewski, Ph.D.',28,{font:TNR,after:240}));
  c.push(t('Department of Chemistry',24,{font:TNR,after:40}));
  c.push(t('Fresno City College',24,{font:TNR,after:360}));
  c.push(t('2026 Edition',24,{font:TNR,italics:true,after:40}));
  c.push(t('An open educational resource licensed under CC BY 4.0',22,{font:TNR,after:0}));
  return c;
}

function copyright(){
  const c=[];
  c.push(space(2000));
  c.push(P('**CHEM 3B Laboratory Manual: Introductory Organic and Biological Chemistry**',{after:80}));
  c.push(P('Alexandra Aloia and Daniel Kwasniewski, Department of Chemistry, Fresno City College. 2026 Edition (Fall 2026), version 1.0, November 2026.',{after:280}));
  c.push(P('**License.** This work is licensed under the Creative Commons Attribution 4.0 International License (CC BY 4.0). You may share (copy and redistribute in any medium or format) and adapt (remix, transform, and build upon) this material for any purpose, including commercially, as long as you give appropriate credit, provide a link to the license, and indicate if changes were made. License text: https://creativecommons.org/licenses/by/4.0/',{after:200}));
  c.push(P('**Suggested attribution.** *CHEM 3B Laboratory Manual: Introductory Organic and Biological Chemistry* by Alexandra Aloia and Daniel Kwasniewski, Fresno City College, licensed under CC BY 4.0. https://itsdrdan.github.io/chem3b-lab-manual/',{after:200}));
  c.push(P('**Figures.** The cover illustration and all figures and structures were drawn for this edition by the authors and are covered by the same license.',{after:200}));
  c.push(P('**Acknowledgments.** Several experiments in this manual grew out of classic procedures first used at Fresno City College with a commercial general, organic, and biological chemistry laboratory manual. For this edition, every introduction, procedure, question, and figure was rewritten or redrawn, checked for accuracy, and expanded with safety, waste, and pre-lab material.',{after:200}));
  c.push(P('**Companion textbook.** This manual is written to accompany the CHEM 3B open textbook on LibreTexts, whose “In the Lab” boxes describe the related experiments.',{after:200}));
  c.push(P('**Safety disclaimer.** These procedures are written for a supervised teaching laboratory. Instructors should review every procedure, reagent, and waste instruction against their own institution’s chemical hygiene plan, the current Safety Data Sheets (SDS), and local disposal regulations before use, and adapt them “as your instructor directs.” The authors accept no liability for use of this material outside a properly supervised laboratory.',{after:200}));
  return c;
}

function toStudent(){
  const c=[];
  c.push(title('To the Student'));
  c.push(P('Chemistry 3B introduces the structures and reactions of organic compounds and the biomolecules built from them: carbohydrates, lipids, proteins, enzymes, vitamins, and nucleic acids. It is designed for students heading into the health professions, such as nursing, dental hygiene, and kinesiology. In the laboratory you will see the ideas from lecture at work. Each functional group behaves in a predictable way, and a few simple tests let you identify an unknown compound, measure how pure a product is, or find out how much vitamin C is in a juice.'));
  c.push(P('Chemical theories come from careful observation in the laboratory, and they are tested there too. A good theory lets you predict how a substance will behave under new conditions, but every prediction is an approximation. A goal of this course is for you to see how theory and experiment shape each other.'));
  c.push(h3('Course Laboratory Objectives'));
  c.push(P('After completing these experiments, you should be able to:',{after:80}));
  ['Draw and name the structures of common organic molecules and recognize their functional groups, including those found in biomolecules.',
   'Use functional groups to predict the physical and chemical properties of organic molecules.',
   'Relate the structures of carbohydrates, lipids, proteins, vitamins, and nucleic acids to their properties and functions.',
   'Work safely with chemicals and dispose of chemical waste correctly.',
   'Collect, record, organize, and analyze experimental data, and recognize the limits of each measurement.'].forEach(s=>c.push(bullet(s)));
  c.push(h3('How Each Experiment Is Organized'));
  c.push(P('Every experiment in this manual follows the same layout, so you always know where to look:',{after:80}));
  [['Goals','what you will be able to do by the end of the lab.'],
   ['Introduction','the chemistry behind each part of the procedure: what every test or reagent does, and what a positive and a negative result look like. The lettered sections (A, B, C, …) match the lettered parts of the procedure.'],
   ['Hazards and Safety Instructions','the specific hazards of the chemicals and equipment in that lab, with first-aid steps.'],
   ['Waste Instructions','which waste container receives each tube, solution, or solid.'],
   ['Procedure','Instructor Notes, then each part with its Materials list and numbered steps (A.1, A.2, …). Some steps end with an **Instructor check**.'],
   ['Pre-Lab Questions','questions on safety, waste, the procedure, and the expected test results. Answer them before you come to lab; your instructor stamps or signs the Pre-Lab check box at the start of lab.'],
   ['Report Sheet: Data Collection','tables and boxes that follow the procedure step by step. Record your observations here as you work. Steps that end with an Instructor check (for example, showing your models) have an Instructor check box. The Report Sheet ends with the Lab Check-Out box: clean up, then have your instructor stamp or sign it before you leave.'],
   ['Post-Lab Report: Questions and Problems','questions you answer after lab that connect your results to the chemistry.']].forEach(([a,b])=>c.push(bullet('**'+a+':** '+b)));
  c.push(h3('Before Every Lab'));
  ['Read the whole experiment, including the safety and waste instructions.','Answer the Pre-Lab Questions.','Prepare your laboratory notebook as your instructor directs (see Laboratory Notebooks and Reports).','Bring splash goggles, a lab coat, and closed-toe shoes, and dress for lab.'].forEach(s=>c.push(bullet(s)));
  c.push(P('Your instructor will tell you which parts of each experiment to complete and how to submit your work.',{before:120}));
  return c;
}

function safety(){
  const c=[];
  c.push(title('Laboratory Safety'));
  c.push(P('Safety is everyone’s responsibility. Preparation is the most important safety habit: know what you are going to do, what each chemical can do to you, and what to do if something goes wrong before you start. Read the Hazards and Safety Instructions of each experiment, and look up Sections 2 (Hazard Identification) and 4 (First-Aid Measures) of the Safety Data Sheet (SDS) for any chemical you have not used before. Your instructor will show you your institution’s safety video or orientation and may add local rules to the ones below.'));
  const grp=(head,items)=>{c.push(h4(head)); items.forEach(s=>c.push(Array.isArray(s)?bulletT(s[0],1):bulletT(s)));};
  grp('Personal Protection',[
    'Wear chemical splash goggles at all times while anyone in the room is working with chemicals or glassware. Remove them only when your instructor says it is safe.',
    'Wear a lab coat whenever experiments are in progress. This is a safety requirement, not a dress code.',
    'Cover your legs and feet: no shorts, short skirts, sandals, open-toed shoes, or open-backed shoes.',
    'Tie back hair longer than shoulder length. Avoid dangling jewelry, scarves, and loose sleeves.',
    'Wear gloves when an experiment tells you to, and remove them before touching your phone, door handles, or your face.',
    'Keep phones and earbuds put away during lab so you can hear instructions and alarms.']);
  grp('Laboratory Conduct',[
    'No eating, drinking (even water), chewing gum, or applying cosmetics in the laboratory. Never use laboratory glassware for food or drink.',
    'Wash your hands before leaving the laboratory and before touching your face.',
    'Know where the exits, fire extinguishers, fire blanket, safety shower, eyewash station, first-aid kit, and fire alarm are.',
    'Keep aisles and exits clear of backpacks, chairs, and equipment.',
    'Perform only the assigned experiments, with your instructor present. Unauthorized experiments are prohibited.',
    'Never leave a reaction or a heat source unattended.',
    'At the end of lab, return equipment and chemicals, clean and dry your bench, and clean any shared areas you used (balances, fume hoods, sinks).']);
  grp('Glassware and Equipment',[
    'Inspect glassware before use. Do not use chipped, cracked, or dirty glassware.',
    'Sweep up broken glass with a brush and dustpan, never with bare hands, and put it in the broken-glass container, not the trash.',
    'Hot glassware looks exactly like cold glassware. Handle it with tongs or a heat-resistant pad, and set it on a heat-resistant surface.',
    'Ask your instructor if you are unsure how to use any piece of equipment.']);
  grp('Heating',[
    'Use a hot plate or water bath for heating unless a procedure specifically tells you to use a flame. Open flames are used only where the procedure directs, in the fume hood, and never near flammable liquids.',
    'Keep flammable organic liquids away from hot plates and flames.',
    'When heating a test tube, point its mouth away from yourself and everyone else, and heat it gently in a water bath unless directed otherwise.',
    'Turn off hot plates when you are finished with them.']);
  grp('Handling Chemicals',[
    'Treat every chemical as hazardous. Never taste anything in the laboratory.',
    'Never smell a chemical directly. When a procedure asks you to note an odor, take a breath of fresh air first, hold the container away from your face, and waft the vapor toward your nose with your hand. Smell toxic compounds only in the fume hood, if at all.',
    'Never pipet by mouth; use a pipet bulb or plastic transfer pipet.',
    'Use the fume hood whenever a procedure says to, and keep the sash at or below the marked height.',
    'Take only the amount of a chemical you need. Never return unused chemicals to the stock bottle, and never put your own pipet or spatula into a shared reagent bottle.',
    'Label every container you fill. Do not leave unlabeled glassware anywhere.',
    'When diluting an acid, always add the acid slowly to water, never water to acid.',
    'Clean up small spills immediately as your instructor directs, and report every spill.',
    'Never take chemicals or equipment out of the laboratory.']);
  grp('Accidents and First Aid',[
    'Report every accident, injury, or spill to your instructor at once, no matter how small.',
    'Chemical in the eyes or on the skin: rinse with water at the eyewash station, sink, or safety shower for at least 15 minutes, removing contaminated clothing, and tell your instructor. Seek medical attention afterward.',
    'Burns, cuts, or inhaled fumes: tell your instructor right away so you can be treated. Tell medical staff which chemicals were involved.',
    'Clothing on fire: stop, drop, and roll, or use the safety shower or fire blanket.',
    'Small fire in a container: cover it with a watch glass or larger beaker to smother it, or use the fire extinguisher if you have been trained. Do not use water on burning organic liquids. If a fire is not small and contained, evacuate and pull the fire alarm.']);
  grp('Medical Conditions and Pregnancy',[
    'If you have a medical condition that could cause sudden loss of consciousness or affect your safety in the laboratory (for example, diabetes, epilepsy, or a heart condition), or if you are or may be pregnant, consult your health care provider and talk with your instructor privately about any accommodations you need.']);
  return c;
}

function contract(){
  const c=[];
  c.push(title('Laboratory Safety Agreement'));
  c.push(P('I have read the Laboratory Safety rules in this manual and watched my institution’s safety orientation. I understand them and agree to follow them, along with any additional rules and instructions my instructor gives. I understand that these rules protect me and everyone around me, and that if I do not follow them I may be removed from the laboratory, lose credit for that experiment, or be dropped from the course.',{after:240}));
  ['I will wear splash goggles and a lab coat whenever experiments are in progress, and I will dress for lab.',
   'I will read each experiment, including its Hazards and Waste Instructions, before coming to lab.',
   'I know where the exits, eyewash station, safety shower, fire extinguisher, fire blanket, and first-aid kit are.',
   'I will dispose of every chemical in the waste container named in the procedure, never in the sink or trash unless I am told to.',
   'I will report every accident, injury, and spill to my instructor immediately.'].forEach(s=>c.push(bullet(s)));
  c.push(space(400));
  c.push(P('Printed name ____________________________________________________________',{after:400}));
  c.push(P('Signature ________________________________________  Date ______________________',{after:400}));
  c.push(P('Course and section __________________________  Instructor ____________________________',{after:400}));
  c.push(P('*Your instructor may ask you to sign this agreement electronically instead.*',{run:{size:22}}));
  return c;
}

function waste(){
  const c=[];
  c.push(title('Chemical Waste Disposal'));
  c.push(P('Every experiment ends with Waste Instructions that name a container for each tube, solution, and solid. This manual uses four waste containers. The names may differ slightly in your laboratory; follow your instructor’s directions if they do.'));
  c.push(P('**Table 1: Waste Containers Used in This Manual**',{align:AlignmentType.CENTER,after:80,keepNext:true}));
  c.push(table([2500,4060,2800],[['Container','What goes in it','Examples'],
    ['**Halogenated waste**','Organic compounds that contain a halogen (F, Cl, Br, I), and any solution containing elemental bromine (Br_{2}) or iodine (I_{2}).','Methylene chloride (CH_{2}Cl_{2}), bromine test tubes, iodine test tubes, iodine titration flasks'],
    ['**Non-halogenated organic waste**','Anything that contains organic solvents, organic reagents, or the organic compounds being tested, even if an acid or a metal reagent is also present.','Hexane, ethanol, acetone, alcohol and aldehyde test tubes, esters, Tollens’ test tubes'],
    ['**Aqueous waste**','Other dissolved chemicals in water: acids, bases, salts, soluble metal compounds, and biomolecules mixed with these reagents.','HCl, NaOH, AgNO_{3}, Benedict’s and biuret test tubes'],
    ['**Solid waste**','Solid chemicals, filter papers, and chromatography plates or papers with chemicals on them.','Used TLC plates, filter paper, recovered solids']],{h:0}));
  c.push(h3('General Rules'));
  ['Never pour chemicals down the sink or put them in the trash unless the procedure or your instructor says that specific material may go there.',
   'If a tube contains a halogen compound, it goes in the halogenated container, even if it also contains other organic compounds.',
   'Rinse test tubes into the same waste container as their contents before washing them.',
   'Keep waste containers closed when you are not adding to them, and never overfill them.',
   'Broken glass goes in the broken-glass box. Paper towels and gloves without chemical contamination go in the regular trash.',
   'If you are not sure where something goes, ask before you pour.'].forEach(s=>c.push(bullet(s)));
  return c;
}

function notebook(){
  const c=[];
  c.push(title('Laboratory Notebooks and Reports'));
  c.push(P('A laboratory notebook is a permanent record of what you planned, what you did, and what you observed. Professional scientists, nurses, and clinical laboratory staff keep records with the same care, because a record that is complete and honest can be checked by someone else. Your instructor will tell you whether to use a bound notebook, the Report Sheets in this manual, or both, and how to submit your work.'));
  c.push(h3('Before Lab'));
  ['Write the experiment title, the date, and your partner’s name (if any).','Write a short statement of purpose in your own words.','Answer the Pre-Lab Questions.','Prepare any data tables you will need, using the Report Sheet as a guide.'].forEach(s=>c.push(bullet(s)));
  c.push(h3('During Lab'));
  ['Record all data and observations directly in ink as you work, never on scrap paper to copy later.','Record everything you observe, including colors, odors, precipitates, gas bubbles, temperature changes, and anything unexpected. An observation that seems unimportant may explain a result later.','Record every measurement with its units and with all the digits the instrument gives (see Measurements and Uncertainty).','If you make a mistake, draw a single line through it so it can still be read. Do not erase, use correction fluid, or tear out pages.','Use unknown codes exactly as they are written on the sample.'].forEach(s=>c.push(bullet(s)));
  c.push(h3('After Lab'));
  ['Show every calculation, with units, at least once. If you use a spreadsheet, write out one example calculation by hand.','Answer the Post-Lab Report questions (Questions and Problems) in complete sentences where a sentence is asked for.','Your data must be your own. Copying data from another student or making up data is academic dishonesty.'].forEach(s=>c.push(bullet(s)));
  return c;
}

function measurement(){
  const c=[];
  c.push(title('Measurements and Uncertainty'));
  c.push(h3('Recording Measurements'));
  c.push(P('Record all the digits you are certain of, plus one estimated digit. On a scale with markings, estimate between the smallest divisions. For example, a 100-mL graduated cylinder marked every 1 mL is read to the nearest 0.1 mL (for example, 46.3 mL), and a 50-mL buret marked every 0.1 mL is read to the nearest 0.01 mL (for example, 23.47 mL). On a digital balance, record every digit shown, including trailing zeros (12.300 g, not 12.3 g). These digits are the **significant figures** of the measurement.'));
  c.push(h3('Significant Figures in Calculations'));
  c.push(bulletT('**Multiplying and dividing:** the answer has the same number of significant figures as the measurement with the fewest significant figures.'));
  c.push(bulletT('**Adding and subtracting:** the answer has the same number of decimal places as the measurement with the fewest decimal places.'));
  c.push(bulletT('Exact numbers (counted items and defined conversions, such as 1000 mL = 1 L) do not limit significant figures.'));
  c.push(bulletT('Keep extra digits during a calculation; round only the final answer.'));
  c.push(h3('Accuracy, Precision, and Error'));
  c.push(P('**Precision** describes how close repeated measurements are to each other. **Accuracy** describes how close a measurement is to the true or accepted value. Uncertainty comes from two kinds of error:'));
  c.push(bulletT('**Random error** makes repeated results scatter above and below an average value (for example, estimating the last digit of a buret reading). It limits precision, and it can be reduced by repeating the measurement and averaging.'));
  c.push(bulletT('**Systematic error** shifts every result in the same direction (for example, a balance that is not zeroed, or product that is still wet when it is weighed). Repeating the measurement does not reveal it; it limits accuracy and must be found by checking the method.'));
  c.push(P('A mistake, such as a spill, is not experimental error: repeat the measurement if you can. When you discuss error in a report, name a specific cause and the direction it would push your result.',{before:80}));
  c.push(h3('Useful Calculations'));
  const eq=(lhs,num,den,tail)=>new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:60,after:100},children:[new DMath({children:[new MathRun(lhs+' = '),new MathFraction({numerator:[new MathRun(num)],denominator:[new MathRun(den)]}),new MathRun(tail)]})]});
  c.push(eq('percent error','|experimental value − accepted value|','accepted value',' × 100%'));
  c.push(eq('percent yield','actual yield','theoretical yield',' × 100%'));
  c.push(h3('Sources for Data'));
  c.push(P('Hazard statements follow the Globally Harmonized System (GHS) classification of each chemical, as summarized by PubChem from the European Chemicals Agency C&L Inventory, and the supplier’s Safety Data Sheet (SDS). They describe the pure chemical unless a concentration is given; always read the SDS for the solution you use. Other data come from these sources:',{after:80}));
  ['**Physical constants** (melting point, boiling point, density, solubility, molar mass): PubChem, U.S. National Library of Medicine (https://pubchem.ncbi.nlm.nih.gov); NIST Chemistry WebBook (https://webbook.nist.gov); *CRC Handbook of Chemistry and Physics*.',
   '**Electronegativities and atomic weights** (Appendices D and F): Pauling values as listed in the PubChem Periodic Table; IUPAC Commission on Isotopic Abundances and Atomic Weights, Standard Atomic Weights (https://www.ciaaw.org).',
   '**Naming** (Appendices B and C): H. A. Favre and W. H. Powell, *Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013*, Royal Society of Chemistry, 2014.',
   '**Clinical and nutrition values:** MedlinePlus, U.S. National Library of Medicine (https://medlineplus.gov); NIH Office of Dietary Supplements, Vitamin C Fact Sheet (https://ods.od.nih.gov). Clinical values are typical ranges; each clinical laboratory sets its own.',
   '**Experiment #10:** United States Pharmacopeia, Aspirin Tablets and Buffered Aspirin Tablets monographs (free salicylic acid limits); M. J. R. Desborough and D. M. Keeling, “The aspirin story – from willow to wonder drug,” *British Journal of Haematology* 177, 674–683 (2017).',
   '**Experiment #5:** NIOSH, *Criteria for a Recommended Standard: Occupational Exposure to Diacetyl and 2,3-Pentanedione*, DHHS (NIOSH) Publication 2016-111 (2016).',
   '**Experiment #6:** P. A. Chyka et al., “Salicylate poisoning: an evidence-based consensus guideline for out-of-hospital management,” *Clinical Toxicology* 45, 95–131 (2007).',
   '**Experiment #8:** USDA Agricultural Research Service, *What We Eat in America, NHANES 2017–2018*, Table 5 (percent of energy from carbohydrate).',
   '**Methylene chloride regulation** (Experiments #9 and #14): U.S. EPA, Methylene Chloride; Regulation Under TSCA, 89 Fed. Reg. 39254 (May 8, 2024), and compliance-date extension for laboratories, 90 Fed. Reg. (Nov. 13, 2025); 40 CFR Part 751.'].forEach(s=>c.push(bulletT(s)));
  return c;
}

module.exports={cover,copyright,toStudent,safety,contract,waste,notebook,measurement};
