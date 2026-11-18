# Final pass, group 2: Experiments 4–7

Files: source/src/exp04.js, exp05.js, exp06.js, exp07.js. All four build cleanly (`node src/expNN.js fig <out>.docx`). No layout values (page breaks, space(), table heights/widths) changed. No table rows added or removed. No reagent, amount, PPE, heating, or waste-route changes. No figures changed. No reordering of steps except within Exp 7 A.3 (see below).

All figures for these labs were viewed against their captions and the text. Structures, equations, and labels checked (incl. Tollens' equation balance in Fig 5.3, Lucas Fig 4.5, hydrolysis Fig 7.5). No figure errors found.

## exp04.js (Alcohols and Phenols): 16 edits
- Figure 1 caption: "Common alcohols (left) and phenols (right). The hydroxyl group is shown in red." → names the compounds in each group ("methanol, ethanol, and 2-propanol" / "phenol and thymol"); "The hydroxyl (–OH) group of each is marked in red." (no left/right-only reference).
- Intro E: "one of the five compounds tested in this experiment" → "one of these five compounds" (six compounds are tested, counting 2-butanol in Part C).
- Hazards, Flammable: "If a warm water bath is used, it is heated on a hot plate." → "The Part C warm water bath is heated on a hot plate." (the bath is always set up in C.1).
- B.1: "5 drops of each alcohol" → "each of the four alcohols (ethanol, 2-propanol, t-butyl alcohol, and cyclohexanol)" (2-butanol is not used in Part B).
- B.2: "Shake gently by tapping" → "Mix by gently tapping" (same wording as C.1).
- B.3: added "and put the used pH paper in the solid waste container" (matches the existing Waste Instructions; no route change).
- C.1: "5 drops of each alcohol" → "each of the five alcohols (ethanol, 2-propanol, 2-butanol, t-butyl alcohol, and cyclohexanol)" so the count of seven tubes is clear.
- D.1: "5 drops of each alcohol" → "each of the four alcohols (…)".
- E.2: "one of the five compounds tested" → "one of the five possible unknowns (Introduction E)".
- Pre-Lab 5: "Which of the five compounds in this lab" → "Which of the compounds tested in Part B".
- Pre-Lab 6: "Which of the five compounds" → "Which of the compounds tested in Part D".
- Pre-Lab 7: "Which of the five compounds is it?" → "Which of the five possible unknowns is it?"
- Part A materials: "Molecular model kit" → "Model kit".
- "report sheet" → "Report Sheet" (3 places).

## exp05.js (Aldehydes and Ketones): 10 edits
- Hazards, Tollens': "discarded into the waste container right after D.4" → "poured into the non-halogenated organic waste container right after D.4" (names the container the Waste Instructions already give; no route change).
- Intro C positive result: "(a cloudy yellow precipitate that settles)" → "(iodoform; the tube turns cloudy yellow and the solid settles)".
- E.1: "results from B.1, B.3, C, and D" → "B.1, B.3, C.3, and D.4" (the step labels students record in).
- Report E table: "C. Iodoform test" / "D. Tollens’ test" → "C.3 Iodoform test" / "D.4 Tollens’ test" (labels match the procedure).
- Part A materials: "Molecular model kit" → "Model kit".
- "report sheet" → "Report Sheet" (5 places).

## exp06.js (Carboxylic Acids and Esters): 5 edits
- Part A materials: "Test tubes" → "2 test tubes"; added "distilled water" (A.2 uses it).
- A.2: "2 mL of water" → "2 mL of distilled water" (matches materials).
- B.2: "prepare the five mixtures in the table below" → "prepare the five mixtures listed in the B.2 table (mixtures 1–5)".
- Figure 7 caption: "The red dashed line marks the ester bond that breaks." → "A red dashed line labeled “bond broken” marks the ester bond (carbonyl carbon to –O–) that breaks." (meaning no longer carried by color alone).
- Part B materials: "Molecular model kit" → "Model kit".

## exp07.js (Amines and Amides): 18 edits
- Figure 1 caption: added "and each structure is labeled with its class" (the blue color is not the only cue).
- Intro B: "OH^{–}" → "OH^{−}" (true minus sign, as in Exps 4–6).
- Intro D, acid hydrolysis: "reacts with HCl to form NH_{4}^{+}Cl^{–}" → "reacts with HCl to form an ammonium salt (NH_{4}^{+}Cl^{−} from ammonia)". The old text implied an amine also gives NH4Cl. Also fixed the minus sign.
- A.1: added "one or two at a time". The kit counts in the Instructor Notes (6 C, 18 H, 2 N) cannot hold all five A.1 models at once (that would take 12 C, 31 H, 5 N).
- A.3 (light reorder, inside the step): the old text had partners build any two isomers, take them apart, then build the other two. The instructor check then asked for isopropylamine and ethylmethylamine side by side, which a group might already have taken apart. Now: (1) build isopropylamine and ethylmethylamine first, one per partner; (2) Instructor check; (3) take them apart and build propylamine (and trimethylamine again if needed); (4) draw all four and classify. The kit counts and check content are unchanged.
- Part A materials: "Molecular model kit" → "Model kit". Part D materials: same change.
- Part B materials: added "distilled water" (B.3 uses it).
- B.3: "Keep the tubes in the fume hood for Parts B and C. Add 2 mL of water" → "Keep the tubes in the fume hood for the rest of Parts B and C. Add 2 mL of distilled water".
- Part D materials: added "stirring rod" (D.2 says "stir") and "distilled water" (D.2 water; D.5 moistens the litmus).
- "report sheet" → "Report Sheet" (8 places, including the Instructor Notes and the new A.3 text).

## Needs co-author/EHS decision
1. **Exp 4, model kit count (Instructor Notes).** The notes say each pair needs "at least 4 carbons, 1 oxygen, 1 chlorine, and 12 hydrogens". But A.3 asks students to show the instructor all four C4H10O models at once. That needs 16 C, 4 O, and 40 H. The options are to raise the count, let pairs combine kits, or change the check to two models at a time (as in Exp 7 A.3). I did not change it because it changes the check procedure.
2. **Exp 4, salicylic acid as an unknown.** The Instructor Notes say not to use salicylic acid as an unknown "unless you provide it as the same solution". But Part B uses solid salicylic acid, while the unknown in B.1 is given as drops. If salicylic acid is the unknown, its Part B odor and solubility will not match the known. Recommendation: say plainly "do not assign salicylic acid as an unknown," or give a matching solid sample.
3. **Exp 5, Tollens' waste route is inconsistent.** Students pour their Part D tubes into the non-halogenated organic waste (Waste Instructions, D.4, Hazards). The Instructor Notes send leftover Tollens' reagent to the aqueous waste. Ammoniacal silver in an organic waste drum is also a possible concern (silver nitride/fulminate on standing). EHS should choose one route for silver/ammonia waste. Also consider whether Tollens' waste should be acidified or quenched before it goes to a container.
4. **Exps 6 and 7, "Trash" for litmus paper, pH paper, and gloves.** The house rule allows four containers only. Exp 4 sends pH paper and contaminated gloves to the **Solid waste container**. Exps 6 and 7 send them to "Trash". This is a waste-route change, so I left it. Recommendation: use "Solid waste container" in both, to match Exp 4.
5. **Exp 7, "Later rinses (after the first) may go down the drain with plenty of water."** Confirm this with EHS, since aniline and N-methylaniline were in these tubes. The other labs in this group say nothing may go down the sink.
6. **Exp 7, amide hydrolysis tubes (10% HCl / 10% NaOH with ammonium or ammonia) go to non-halogenated organic waste.** These are mostly aqueous acid/base. Confirm whether the aqueous waste container is the intended route.
7. **Exp 6, Q.4** is answered almost word for word by the Intro ("Using an excess of the alcohol … pushes the reaction toward the ester; adding a lot of water pushes it toward hydrolysis"). The text was left as is. The co-author may want Q.4 to ask students to apply this to a new case, or may want the Intro shortened.
8. **Exp 7 Report Sheet order:** the "C.1 Did your observations agree with your prediction in A.4?" box comes after the C.2 equations. In the procedure it belongs to C.1. Moving it would change the page layout, so I left it for the layout editor.
