# Final pass, group 5: Workshop: Types of Carbohydrates, Workshop: Chirality Stations, Appendices A–F

All three files build (`node src/<file>.js fig <scratchpad>.docx`). No page breaks, space() amounts, table widths/heights, figures, reagents, PPE, or waste routes changed. Not committed.

## source/src/workshop_carbohydrates.js (14 edits)

- Intro: "The chemical tests for carbohydrates are in Experiment #8." → "The chemical tests that tell these carbohydrates apart are in Experiment #8: Tests for Carbohydrates." (reads correctly whether the workshop is done before or after Exp 8)
- B intro: "to an –OH carbon of the other" → "to a carbon that carries an –OH group in the other sugar"
- C: "250 to 4000 α-D-glucose units" → "250–4000" (en dash)
- C (cellulose): "Humans make enzymes (amylases) that hydrolyze α-glycosidic bonds…" → "Our digestive enzymes, such as amylase, hydrolyze the α-glycosidic bonds in starch. Humans do not make an enzyme that hydrolyzes β-1,4 glycosidic bonds…" (amylase alone does not cleave α-1,6 bonds; old wording implied it hydrolyzes all α bonds)
- Figure 7 caption: added text explaining the shaded branch-point units (α-1,6) and the dotted hydrogen-bond lines, so the meaning no longer depends on the figure's red/green legend
- Instructor note: "Before lab" → "Before the workshop"
- Pre-Lab 1: "at the end of lab" → "at the end of the workshop"
- Pre-Lab 5: added "Name one food that contains lactose." (so the goal "describe common carbohydrates and their sources" is tested)
- B.1 step: added "and write its type on the Report Sheet" (Report Sheet has a "Type of glycosidic bond" line the step never asked for)
- B.4 step: added "On the Report Sheet, name the two carbons that the bond joins." (matches the fill-in sentence on the Report Sheet)
- Report A.2: α- and β-D-glucose Haworth headers now say "(label the anomeric carbon)" (matches step A.2)
- Report A.3: α-D-galactose and α-D-fructose headers now say "(label the anomeric carbon)" (matches step A.3)
- Report B.4 header: "(circle the glycosidic bond)" → "(circle the glycosidic bond; label both anomeric carbons)" (matches step B.4)

Checked and left as is: no remaining "experiment"/"lab" where "workshop" is meant (the "Pre-Lab Questions" heading and "lab rules"/"in the lab" for the room are kept on purpose); Figures 1–7 match the text (Fischer projections C1 at top; D at C5; α down/β up; 36%/64%; maltose α-1,4, sucrose α-1,β-2, lactose β-1,4; amylopectin ~25, glycogen 10–15); report order and labels match procedure.

## source/src/workshop_chirality.js (4 edits)

- Instructor setup, Stations 1, 2, 4: "a carbon with four groups" → "a carbon with four different groups" (every sp^3 carbon has four groups; Station 3 is the "three different groups" contrast)
- Intro: "a dashed wedge" → "a dashed (hashed) wedge" (consistent with Appendix D)
- Diastereomer definition: "(only some of the chiral carbons are different)" → "(at least one chiral carbon is the same and at least one is reversed)" (clearer and correct)
- Direction 6: "return your model kit" → "return your model kit with all its pieces" (matches the Answer Sheet check box)

Kept: Answer Sheet boxes ("Station 1…20", "Extra Space") with no prompts; instructor setup list as a suggestion. Hemiacetal/hemiketal/acetal/ketal table checked correct.

## source/src/appendix.js (6 edits)

- D.1: "a hashed wedge" → "a dashed (hashed) wedge" (matches the term used in the Chirality workshop)
- Table D.3: "0 to 0.4" → "0–0.4"; "0.5 to 1.8" → "0.5–1.8" (en dashes)
- E.1: "chirality center" → "chirality center (chiral carbon)" at first use (the workshops and experiments say "chiral carbon")
- Figure E.2 caption: same gloss "(chiral carbon)"
- E.2: "every L-amino acid except cysteine is *S*" → "every chiral L-amino acid except cysteine is *S*" (glycine is achiral)

Checked and correct, no change: all electronegativity values (Pauling) and ΔEN examples; VSEPR shapes/angles; IUPAC Tables C.1–C.3, step rules (2013), and all 9 worked examples (ex3 and ex9 checked against the source SMILES; ex9 is 2S,3S); Figure E.1 D-aldoses; fatty-acid data matches Exp 9 Table 2; Appendix A TLC cross-reference (Exp #10, #11, #15 all use TLC); constants, conversions, the 76-year calculation (2,396,736,000 s), ions, solubility rules.

## Needs co-author/EHS decision

1. **Carbohydrates instructor note, model-kit count:** "6 carbon atoms, 12 hydrogen atoms, 6 oxygen atoms, and 2 flexible bonds" for two glyceraldehyde models. Each model has a C=O; if the kit makes double bonds from two flexible bonds, two models need 4 flexible bonds. Not changed (amount). Suggest "enough flexible bonds to make two C=O double bonds".
2. **Eye protection is inconsistent between the two workshops.** Types of Carbohydrates says to wear goggles if other chemicals are in use in the room; Chirality Stations says nothing about goggles. Not changed (PPE).
3. **Figure 7 (fig8t_5.png)** uses red/green legends ("red = α-1,6 branch points", "green dotted lines = hydrogen bonds"). I added a text explanation to the caption. A future figure revision could drop the color words from the legend. Figure not changed.
4. **Types of Carbohydrates "Do not taste any sugar samples in the lab"**: the workshop dispenses no sugar samples. This is harmless, but the co-author may want to drop it. Not changed (safety text).
