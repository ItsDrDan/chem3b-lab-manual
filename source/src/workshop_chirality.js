// Workshop: Chirality Stations (20-station model workshop; answer sheet for students)
// Based on the co-authors' Chiral Workshop station cards, setup notes, and Chirality Lab Worksheet.
const L=require('../lablib.js'); const {P,title,h2,h3,h4,bullet,step,materials,note,table,space,nameBlock,build,D,checkRow}=L;
const F=process.argv[2]+'/'; const OUT=process.argv[3];
const c=[];
c.push(title('Workshop: Chirality Stations'));
c.push(h3('Goals',{before:0}));
['Decide whether a molecule is chiral or achiral, and find and star its chiral carbons.',
 'Tell whether two models are the same molecule, enantiomers, or diastereomers.',
 'Draw molecules with wedges and dashes and as Fischer projections, and label sugars D or L.',
 'Identify hemiacetals, hemiketals, acetals, and ketals in sugar structures.'].forEach(s=>c.push(bullet(s)));

c.push(h2('Introduction'));
c.push(P('Many molecules in the body are **chiral**: like your left and right hands, they have mirror images that cannot be stacked exactly on top of each other. Enzymes and receptors are chiral too, so the two mirror-image forms of a drug or a sugar can act very differently in the body. In this workshop you move through **20 stations**. Each station has prebuilt models or a printed structure, and a short task. You work with a partner and record your answers on the Answer Sheet.'));
c.push(h3('Chiral Carbons and Enantiomers'));
c.push(bullet('A **chiral carbon** (chiral center) is a carbon bonded to **four different groups**. Mark each one with a star (\\*).'));
c.push(bullet('A molecule with one chiral carbon is **chiral**. Its mirror image is a different molecule called its **enantiomer**. To test two models, try to place one exactly on top of the other: if every group matches, they are the **same molecule**; if they are mirror images that cannot be matched, they are **enantiomers**.'));
c.push(bullet('A molecule with two or more chiral carbons can have **diastereomers**: stereoisomers that are **not** mirror images of each other (only some of the chiral carbons are different). A molecule with chiral carbons can still be **achiral** if it has an internal mirror plane.'));
c.push(h3('Drawing Three-Dimensional Molecules'));
c.push(bullet('**Wedges and dashes:** a solid wedge points toward you, a dashed wedge points away from you, and a plain line lies in the plane of the paper.'));
c.push(bullet('**Fischer projection:** the carbon chain is drawn vertically, with C1 at the top, so the carbonyl carbon (the most oxidized end) is as near the top as possible. Horizontal lines point toward you, and vertical lines point away from you.'));
c.push(bullet('**D and L sugars:** look at the chiral carbon farthest from the carbonyl group (the one just above the bottom –CH_{2}OH). If its –OH points to the **right**, the sugar is **D**; to the **left**, it is **L**. The enantiomer of a D sugar is the L sugar, with every chiral carbon reversed.'));
c.push(h3('Sugar Rings: Hemiacetals, Hemiketals, Acetals, and Ketals'));
c.push(P('When a sugar forms a ring, the –OH on one carbon adds to the carbonyl group (Experiment #8 and Appendix E). Look at the carbon that is bonded to **two oxygen atoms** (the anomeric carbon):'));
c.push(table([2600,6760],[['Group on the anomeric carbon','Name'],
 ['–OH and –OR, plus an H','**Hemiacetal** (formed from an aldehyde)'],
 ['–OH and –OR, no H (two carbon groups)','**Hemiketal** (formed from a ketone)'],
 ['–OR and –OR, plus an H','**Acetal** (a hemiacetal that has reacted with a second alcohol)'],
 ['–OR and –OR, no H','**Ketal** (a hemiketal that has reacted with a second alcohol)']],{firstColBold:true}));
c.push(P('A glycosidic bond, such as the one that joins the two sugars of a disaccharide, is an acetal or ketal.',{before:120}));

c.push(h3('Hazards and Safety Instructions'));
c.push(P('This workshop uses molecular model kits and printed structures only. No chemicals are used.',{after:100}));
c.push(bullet('**Small Parts:** Model pieces are small. Never put them in your mouth, and pick up any that fall on the floor. If your kit uses magnetic atoms, keep the pieces away from pacemakers and other medical implants.'));
c.push(bullet('**Station Models:** Do not take apart the models at a station unless the station card tells you to build your own. Leave each station as you found it.'));
c.push(h3('Waste Instructions'));
c.push(bullet('**No chemical waste** is produced. Return any model pieces you used to the kit.'));

c.push(h2('Procedure',{before:360}));
c.push(note('Instructor Notes:','Set up 20 numbered stations, each with a printed card of its task and the models it needs. The Answer Sheet boxes show only station numbers, so you can move stations or change tasks freely. A suggested setup: **Stations 1, 2, 4:** a pair of models of a carbon with four groups (same molecule or enantiomers). **Station 3:** a pair of models of a carbon with only three different groups (achiral). **Stations 5, 6:** printed structures and a model kit; students build the two structures and take them apart. **Stations 7, 8:** pairs of two-carbon molecules, each carbon with four groups. **Stations 9, 10:** a sugar ring with no extra alcohol (hemiacetal or hemiketal). **Station 11:** a sugar ring joined to a simple alcohol (acetal or ketal). **Station 12:** a disaccharide (build one or use a stockroom model). **Stations 13, 14:** an open-chain sugar of 4–6 carbons. **Stations 15, 16:** a four-carbon molecule with a chiral carbon. **Stations 17, 18:** two open-chain sugars that are mirror images or diastereomers. **Stations 19, 20:** printed ring structures only. Pairs start at different stations and move to the next station when you call time (about 5 minutes per station, or as your schedule allows). Students who miss the workshop can complete the makeup version with printed structures.'));
c.push(h3('Directions'));
c.push(materials('Molecular model kit (for stations where you build models), pencil, Answer Sheet'));
['Work with a partner. Your instructor tells you which station to start at.',
 'At each station, read the task on the station card. Look at the models from every side, and turn them to compare them; for a printed structure, draw it first.',
 'Record your drawings and answers in the box with that station’s number on the Answer Sheet. Star (\\*) every chiral carbon you are asked to find. If you run out of room, continue in an Extra Space box and write the station number there.',
 'If a station card asks you to build structures, build them with your model kit, compare them, and take them apart before you leave the station.',
 'Leave every station exactly as you found it, and move to the next station when your instructor calls time. Go through all 20 stations.',
 'When you have finished, return your model kit and have your instructor stamp or sign the Answer Sheet.'].forEach((s,i)=>c.push(step((i+1)+'.',s)));

// ---------------- Answer Sheet
c.push(h2('Answer Sheet',{pageBreak:true,before:0,rule:true}));
c.push(...nameBlock());
// Station boxes carry only the station number, so an instructor can move stations or change the tasks.
const EXTRA=+(process.env.WS_EXTRA||3); // extra boxes; set so the last page fills
// one-row boxes: a row never splits across pages, so a label is never stranded from its space
const box=t=>table([9360],[[t]],{header:0,h:2400,noscale:true});
for(let n=1;n<=20;n++) c.push(box('**Station '+n+'**'));
for(let n=1;n<=EXTRA;n++) c.push(box('**Extra Space** (station number: ______ )'));
c.push(space(200));
c.push(table([6160,3200],[[['**Workshop complete** (all 20 stations)','☐ Model kit returned with all pieces'],['**Instructor stamp or signature:**']]],{header:0,h:900,noscale:true}));
build(c,OUT).then(()=>console.log('wrote',OUT));
