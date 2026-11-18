# Final editorial pass — Group 1 (frontmatter, Exp 1–3)

Files: `source/src/frontmatter.js`, `exp01.js`, `exp02.js`, `exp03.js`. All three experiments build (`node src/expNN.js fig …`) and `frontmatter.js` loads and runs every export. No reagents, amounts, PPE, heating, or waste routes changed. No page breaks, `space()` amounts, or table sizes changed. No report rows added or removed.

## frontmatter.js (6 edits)
- To the Student, first paragraph: biomolecule list “…enzymes, and vitamins” → “…enzymes, vitamins, and nucleic acids” (Exp 15 is Nucleic Acids and DNA Extraction).
- Course objective 3: “carbohydrates, lipids, proteins, and vitamins” → adds “nucleic acids”.
- How Each Experiment Is Organized › Procedure: adds “Some steps end with an **Instructor check**.”
- › Report Sheet: “Steps where you demonstrate a model have an Instructor check box” → “Steps that end with an Instructor check (for example, showing your models) have an Instructor check box” (Exp 2 D.5 checks models and drawings, not only a model demonstration).
- Laboratory Notebooks › After Lab: “Answer the Questions and Problems…” → “Answer the Post-Lab Report questions (Questions and Problems)…” (matches the printed heading “Post-Lab Report: Questions and Problems”).
- Measurements: fixed stray indentation on the `h3('Recording Measurements')` line (code only; no output change).

## exp01.js (13 edits)
- Intro: “explained below” → “explained in this Introduction”.
- Intro: “functional group are shown in blue” → “highlighted in blue, and each structure is labeled with its family name” (meaning not carried by color alone).
- Figure 9 caption: “(red arrows point toward the δ− atom)” → “(crossed arrows that point toward the δ− atom) cancel in linear CO₂ but not in bent H₂O, which has a net dipole” (color-only reference removed; net-dipole arrow now explained).
- Procedure and Report Part A heading: “A. Structure, Shape, and Molar Mass” → “A. Structures, Functional Groups, Shape, and Molar Mass” (now matches the Introduction heading; A.2 is the functional-group step).
- Instructor Notes: “report sheet” → “Report Sheet”; “instructor check box” → “Instructor check box”; adds “(Lab Check-Out)” to kit counting.
- A.1, B.1: “report sheet” → “Report Sheet”.
- A.2: “A compound with only C–C and C–H single bonds (such as methane) is an alkane” → “A hydrocarbon with only single bonds (such as methane) is an alkane” (methane has no C–C bond).
- B.4: “using the steps at the end of Introduction Part B” → “using the three checks under ‘To find the strongest IMF in a pure substance’ in Introduction Part B” (label instead of position).
- B.5 step: now says **Instructor check:** your instructor checks the Part A and Part B tables, then take apart models and return the kit.
- B.5 check box: “tables complete; kit returned with all pieces ☐ yes ☐ no” → “Part A and Part B tables complete”. Reason: the step has the check happen *before* the kit is returned, and the Lab Check-Out box (lablib) already has “kits returned with all pieces”, so the old box duplicated it and was out of order.
- Q.1: “Explain your 1°, 2°, or 3° classification” → “Explain why it is classified as 1°, 2°, or 3°” (plain language).

Checked and correct (no change): glycine 75.07 g/mol; Fig 2 (3-ethyl-2-methylhexane, C₉H₂₀); Pauling electronegativities match Appendix D; Q.2 (methane vs NH₃), Q.3 (acetic acid / methyl formate both C₂H₄O₂), Q.4 (pentane and 3-methyl-1-pentyne nonpolar), Q.5, Q.6 (lactic acid 90.08 g/mol); experiment cross-references (#3–#7) match current numbering.

## exp02.js (15 edits)
- Intro A: “(Figure 2 in Part B shows each one)” → “(Figure 2 in Part B shows the three structural formulas for two molecules)” (Figure 2 does not show a molecular formula).
- **Naming rule 5 example: “2-bromo-3-methylbutane, not 3-bromo-2-methylbutane” → “2-bromo-3-chlorobutane, not 3-bromo-2-chlorobutane”.** The old example was the exact answer to Q.1(d). The new example is a true tie (2,3 from either end), so the alphabetical rule decides it.
- Waste bullets: “take every model apart” → “Take…”; “scrap paper…” → “Scrap paper…” (capitalization consistent with other bullets).
- Instructor Notes: “instructor check box” → “Instructor check box”.
- A.1: “construct a 3D model of a molecule of methane” → “build a model of methane”.
- A.2: “Observe that the tetrahedral shape is maintained around each carbon atom throughout the structure” → “Notice that each carbon atom keeps its tetrahedral shape”.
- B.1, C.1, C.2, C.3: “Construct a model” → “Build a model” (consistent verb).
- D.5: “When you have finished constructing your models, show them to your instructor for an instructor check” → “When you have finished all of your models and drawings, show them to your instructor. **Instructor check:** models and Report Sheet complete.” (matches the check box text “models and report complete”).
- Q.2: “In B.3, what physical property…” → “Using your B.3 data, which physical property…”.
- Q.4: “skeletal structure” → “skeletal (line-angle) structure” (term used in the Intro).
- Q.5: “the four isomers with the formula C₄H₉Cl” → “the four constitutional isomers…” (rules out cis/trans or mirror-image readings; answer: 1-chlorobutane, 2-chlorobutane, 1-chloro-2-methylpropane, 2-chloro-2-methylpropane).

Checked and correct (no change): Table 1 formulas; propane 44.09 g/mol; dichloropropane has four isomers (1,1-; 1,2-; 1,3-; 2,2-); Q.1 figure (propane; 2,3-dimethylpentane; 2,3-dimethylbutane; 2-bromo-3-methylbutane); kit inventory in Instructor Notes covers every model.

## exp03.js (11 edits)
- Intro A: “holds the maximum number (a ‘saturation’) of hydrogen atoms” → “holds the maximum possible number of hydrogen atoms (it is ‘saturated’ with hydrogen)”.
- Figure 1 caption: “Red bonds are the reactive multiple bonds” → names them: “The C=C double bond and the C≡C triple bond (drawn in red) are the reactive multiple bonds; the benzene ring does not react like an alkene.” (No color-only meaning, and the caption no longer implies benzene’s bonds react.)
- Intro F: “within about 60 seconds” → “within 60 seconds” (matches F.1 and Table 2).
- Materials B: adds “textbook, chemistry handbook, or reliable online source (for melting points)” (B.4 uses it; not a reagent).
- B.1: adds “(If your instructor has set out display vials, skip B.1 and B.2 and go to B.3.)” (the Instructor Notes said this but students never saw it).
- B.3: “(see Hazards)” → “(see the Odors rule in Hazards and Safety Instructions)”.
- C.2 and C.3: added “**In the fume hood:**” to match C.1, B.2, and the Hazards rule “Work with all hydrocarbons in the fume hood.” This repeats an existing rule; it is not a new control. Revert if your lab does not want C.2/C.3 in the hood (see decisions).
- E.3: rewritten in the order students fill the E.3 table: draw the hydrocarbon, then the product or NR, then the reaction type (now lists “addition, substitution, or NR”, matching the report column).
- F.1: “**In the fume hood:**” added (same reason as C.2/C.3). Reordered so “record the color after 60 s and whether a brown precipitate formed” comes before the interpretation, and the negative result is stated in words (“a solution that stays purple is negative”). Matches report columns “Color after 60 seconds (brown precipitate?)” and “Positive or negative?”.
- Q.2: “What three properties can you use to distinguish between organic and inorganic compounds?” → “Using your results from Parts B, C, and D, name three properties you can use to distinguish organic from inorganic compounds.” (makes it a data question instead of copying Table 1).

Checked and correct (no change): methane and propane combustion equations balanced; cyclohexane 0.78 g/mL and toluene 0.87 g/mL; Table 2 matches Parts D–F; Q.1 answers (propene; 2-butene; 2-methyl-1-pentene; cyclohexene; benzene; ethyne); Q.5 products (2,3-dibromobutane; 1,2-dichlorocyclopentane); test tube count for Part C (5) matches the steps.

## Needs co-author/EHS decision
1. **Exp 3, E.2 vs the hood rule.** Hazards say “keep the Part E test tubes in the hood”, and the E caution says “Work in the fume hood”. E.2 says to put the still-colored bromine tubes “in direct sunlight” (a sunny window), which is usually outside the hood. Decide: lamp at or in the hood only, or capped tubes allowed at a window. I did not change it.
2. **Exp 3, hood for C.2, C.3, F.1.** I added “In the fume hood:” to match the existing Hazards rule (“Work with all hydrocarbons in the fume hood”). If hood space is limited and the co-authors only want B.2, C.1, D, and E in the hood, revert these three labels and soften the Hazards sentence instead.
3. **Exp 3 Waste › Trash: “burnt matches”.** Part D uses a long-necked lighter; no matches appear anywhere. Remove “burnt matches” or add matches to the D materials. Left as is (waste rule).
4. **Exp 2 Figure 4 (fig2_4.png)** shows the complete and condensed formulas for chloromethane and 1,2-dibromoethane, which are exactly the D.1 and D.2 answers. Figure 2 likewise gives the B.1/B.2 answers (butane, 2-methylpropane). This is fine if intended as worked examples; otherwise change the figure examples (for example, bromoethane and 1,1-dichloroethane). Figures not edited.
5. **Exp 1 Report Part A, compound 6 (fig1_a6c.png)** still shows Cl without lone pairs while the ether, formaldehyde, and NH₃ structures show them (carried over from the earlier audit). Figure not edited.
6. **Front matter Waste Table 1**: Tollens’ (silver) and chromate test tubes go to non-halogenated organic waste. This is consistent with the manual’s rule (“even if a metal reagent is also present”), but chromium(VI) and silver in organic solvent waste should be confirmed with EHS / the waste hauler. Not changed.
7. **Exp 1 Table 3 / kit directions** (bond pieces for double and triple bonds) still have not been checked against the actual kit (open from the earlier audit).
