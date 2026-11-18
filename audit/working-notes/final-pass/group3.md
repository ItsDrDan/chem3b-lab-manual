# Final editorial pass, group 3 (Exp 8–11)

All four files build (`node src/expNN.js fig <out>.docx`). No reagent, amount, PPE, heating, or waste-route changes. No space(), page-break, table height, or width changes. No table rows added or removed. Figures checked against the text (fig8_2, fig8_4, fig9_3, fig10_2, fig12a_2, fig12c_4, fig12c_5); no figure errors found. Cross-references checked: Exp 8 → Workshop after Exp 15; Exp 9 → Exp #3 (bromine test, confirmed in exp03.js); Exp 10 → Exp #6 (esters); Exp 11 → Exp #10 (silica TLC) and Exp #12 (ninhydrin, confirmed in exp12.js). All correct.

## exp08.js: Tests for Carbohydrates (16 edits)
- Goal 4: "Relate the process of digestion to the hydrolysis of carbohydrates." → "Relate digestion to the hydrolysis of carbohydrates, and test a food for carbohydrates." (Part F had no goal.)
- Table 1 lead-in: "lists the carbohydrates in this experiment" → "lists the carbohydrates that you will test or make predictions about". Galactose and maltose are only predicted (Q.8), not tested.
- Table 1 title: "Carbohydrates Used in This Experiment" → "Carbohydrates in This Experiment".
- Figure 1 caption: "negative (left) and positive (right)" → caption now also says what each tube shows (closed arm full of liquid with no gas, or CO2 gas at the top of the closed arm). Left/right are no longer the only cue.
- Fermentation intro: moved the maltose sentence ahead of the lactose/galactose sentence. Now the positives (glucose, fructose, sucrose, maltose) come first, then the negatives (lactose, galactose, starch). The text itself is unchanged.
- Seliwanoff intro: "A sample that stays colorless is negative, so record each result as fast, slow, or no color change." → two sentences: "…is negative. In Part C, you will classify each result as a fast, slow, or no color change." (The "so" was a non sequitur.)
- D.2: "Yellow-brown … is negative." → "…is negative (–)." (matches B.3 notation)
- E.2 rewritten into the order students do it: add NaOH dropwise and mix → test with litmus every few drops → stop at blue (about 20–25 drops, which was a parenthetical before) → **record the number of drops** (the Report Sheet row E.2 asks for drops, but the step never said to record them) → rinse the rod. Added "Do not add NaOH to the two water tubes." Amounts unchanged.
- Part F materials: added "dropper". F.1 says to use 10 drops of a liquid food.
- F.1: added labeling of the tubes, "Label three test tubes 1 (Benedict’s), 2 (Seliwanoff’s), and 3 (iodine)". F.2–F.4: "the first/second/third tube" → "tube 1/2/3".
- Q.6 and Q.7 swapped so they follow the procedure (E.3 iodine before E.4 Benedict’s). Q.6 is now the iodine question (with "E.3" and "Why does the starch tube heated with water give a different result?"). Q.7 is now the Benedict’s question (with "E.4"). The space amounts stay where they were.
- Q.8 table columns reordered to the procedure order: Fermentation, Benedict’s, Seliwanoff’s (1 min), Iodine. The column widths are all equal, so nothing changes in the layout.

## exp09.js: Lipids (7 edits)
- Goal 2: "Draw the structure of a typical triacylglycerol." → "Draw the condensation reaction that forms a triacylglycerol and the hydrolysis that reverses it." (This matches Q.1, which uses glycerol + acetic acid. That makes a triacylglycerol, but not a "typical" one.)
- Part A materials: added "distilled water" (A.4 adds 2 mL of water).
- Report Sheet column "A.4 Soluble in water?" → "A.4 In water: dissolves, cloudy, or separate layer?" (A.4 tells students to record more than yes or no.)
- C.1: "Follow the General Instructions below using all of the ingredients in the table." → "Follow the General Instructions (steps 1–4) using all of the ingredients in the table in step 1." (removes "below")
- C.4: "(step 4 below)" → "(General Instructions, step 4)".
- Part C materials: removed "weighing paper". Step 1 says to weigh the solids directly into tared beakers. (Put it back if the stockroom wants it for lanolin.)
- Q.4c was nearly identical to Pre-Lab Q6 (stearic 70 °C vs. oleic 13 °C). It now asks students to use Table 2 to compare oleic (one C=C, 13 °C) with linoleic (two C=C, −5 °C) and explain why more double bonds lower the melting point.

## exp10.js: Aspirin and Analgesics (7 edits)
- Figure 2 caption: "Structures of common analgesics and caffeine." → names all five compounds and says that caffeine is a stimulant. Checked against the figure.
- Waste: "the test tubes from Part B" → "the contents of the test tubes from Part B". The waste route is unchanged.
- Part B materials: added "10-mL graduated cylinder" and "distilled water" (B.1 uses 3 mL of water in each tube).
- B.1: "each substance below and add 3 mL of water" → "each substance listed in the table, and add 3 mL of distilled water".
- Part C materials: added "dropper" (C.4 has students remove extra solvent with a dropper).
- C.5: "report sheet" → "Report Sheet".
- Q.4: "Which sample gave the darkest purple color" → "Which of samples 2–5 gave…". Tube 1 is the salicylic acid positive control, so it would always be the trivial answer.
- Checked: 2.00 g ÷ 138.12 g/mol × 180.16 g/mol = 2.61 g; 2.25/2.61 = 86.2%. Both correct.

## exp11.js: Amino Acids (6 edits)
- Part A materials: "Organic model kit" → "Model kit" (house term).
- Part B materials: added "dropper" (B.1 has students remove excess solvent with a dropper).
- B.7: "report sheet" → "Report Sheet".
- Q.1/Q.2: these asked for the alanine zwitterion and the alanine ion in acid. Figure 3 shows both, so students could copy them. They now use valine, with its R group –CH(CH3)2 given, so students must apply the rule.
- Q.6: lysine and aspartic acid "at physiological pH (7.4)" was copyable from Figure 2. It now asks for them "in a strongly acidic solution (low pH)" (expected answers: Lys 2+, Asp 1+). This tests the Introduction’s rule that acidic and basic R groups also gain H+.
- Checked: Figure 4 numbers (2.8/7.4 = 0.38; 5.2/7.4 = 0.70; 1.1/7.4 = 0.15), plate spacing in Figure 5 vs. B.2 (four marks 1.5 cm apart fit a 7.5 cm plate with at least 1 cm margins), and solvent depth (30 mL in a 600-mL beaker is about 0.5 cm). All consistent.

## Needs co-author/EHS decision
1. **Waste destinations outside the four containers.** Exp 8: the fermentation tubes go "Drain, with plenty of water", and litmus paper and food samples go in "Trash". Exp 9: lotion, capsule shells, wood sticks, and pH paper go in "Trash". Exp 10: capillary tubes go in the "Broken glass box", and toothpicks, TLC plates, and gloves go in "Trash". Exp 11: capillary tubes go in the "Broken glass box". The house rule says four containers only (Halogenated, Non-halogenated organic, Aqueous, Solid). Decide whether these should say "Solid waste container" (and whether drain disposal of yeast/sugar is allowed).
2. **Exp 10 FeCl3 test tubes → Non-halogenated organic.** They contain dissolved iron(III), and the lab waste rule sends dissolved metals to Aqueous. The vacuum filtrate (water, acetic acid, H3PO4) also goes to Non-halogenated organic, but it is mostly aqueous acid. Confirm both routes.
3. **Exp 8 Seliwanoff tubes → Non-halogenated organic.** The reagent is 0.05% resorcinol in 3–6 M HCl, which is mostly aqueous acid. Under the lab waste rule this could be Aqueous. Confirm.
4. **Exp 9 A.2 vs. A.5 amounts.** A.2 uses 5 drops of each liquid lipid, while A.5 uses 10–15 drops in only 1 mL CH2Cl2. Confirm the intended amounts. Not changed.
5. **Exp 10 flammability vs. heating.** Acetic anhydride is listed as flammable ("keep away from hot plates"), but A.3 heats the flask in a boiling water bath on a hot plate in the hood. This is standard practice, but the hazard wording could be reconciled (for example, "keep the hot plate surface away from spills and vapors").
6. **Exp 11 B.6 hot-plate option.** The hazard bullet says to keep the solvent and the ninhydrin spray (alcohol solvent) away from hot plates, but B.6 lets students warm the sprayed plate "on a hot plate on a low setting". Confirm this is acceptable once the plate is dry.
7. **Answer space after the last item.** Exp 9 Q.7 and the last Questions item in Exp 10 and Exp 11 have no space() after them. They rely on the rest of the page. Layout owner: confirm that enough room is left.
