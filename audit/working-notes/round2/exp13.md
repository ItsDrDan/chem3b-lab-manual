# Exp 13 (Peptides and Proteins): edit notes

File: source/src/exp13.js (backup of the pre-edit version: scratchpad/exp13.orig.js). No new figures; still uses fig11_1, fig11_2, fig11_3 (captions unchanged, contain no part letters). alt.json not touched.

## 1. Change list
- **Goals:** bullet 1 "Build models of amino acids and show how peptide bonds form/break" → "Build a class peptide from amino acid models and show how a peptide bond forms (condensation) and breaks (hydrolysis)."
- **Introduction:** old A "Amino Acids and Peptide Bonds" + old B "Protein Structure" → A "Amino Acids, Peptide Bonds, and Protein Structure" (Protein Structure kept as a bold h4 sub-heading, text and Figure 3 unchanged). Added to the naming paragraph: "order matters" (Gly–Ser vs Ser–Gly are different compounds) and one sentence previewing the class peptide. Old C/D/E → B/C/D.
- **Procedure Part A (new):** old A (Gly/Ser dipeptides, hydrolysis of Ser–Gly) + old B (class peptide) → "A. Peptide Bonds: Building and Breaking a Class Peptide". Materials: one model kit per group, masking tape, permanent marker, Table E.1 in Appendix E. Steps: A.1 build assigned amino acid (uncharged –NH2/–COOH form; Appendix E draws zwitterions, so this is stated), tape label with 3-letter abbreviation, draw it; A.2 condensation at the class chain (remove –OH from chain C-terminus –COOH and –H from new –NH2, join as labeled water set beside chain, join C to N; **Instructor check**; draw the two joined amino acids and circle the peptide bond); A.3 record sequence N→C, count amino acids / peptide bonds / waters; A.4 hydrolysis in reverse order of addition (break C–N, add –OH to carbonyl C and –H to N; **Instructor check**).
- **Gly–Ser vs Ser–Gly:** kept as Pre-Lab Q4 (water removed, N-terminus of each, same compound or not) and in the Introduction.
- **Re-lettering:** C→B, D→C, E→D everywhere (intro headings, steps, tube labels "Control, B.1…B.5", Hazards (B.4), Waste bullets, Instructor Notes, Materials ("casein from Part C"), C.4 "save casein for Part D", pre-lab, report headings/rows/table headers "D.1 Biuret color", "Casein (from Part C)"). Grep of built text: no stray old labels; only "E.1" left is "Table E.1" (Appendix E).
- **No flames:** Hazards Flammable Liquid → "Keep ethanol away from hot plates (Part B.4)." Thermal Hazards rewritten for boiling water baths/hot plates/hot milk (test tube holder, open end away, tongs for beakers). B Materials "Bunsen burner or boiling water bath" → "boiling water bath". B.1 → boiling water bath 5 minutes with test tube holder only. B.4 "Make sure all Bunsen burners are off" → "Keep the ethanol away from hot plates." Instructor Notes: removed "Bunsen burner is recommended"; boiling bath now for B.1 and D.2. Pre-Lab Q2 → "In B.4, what must you keep the 95% ethanol away from, and why?" Zero mentions of burner/flame remain.
- **Instructor Notes:** added Part A paragraph (kits, masking tape, markers, assign unique amino acids by cards, give large R groups to full kits, instructor starts the chain with an unassigned amino acid such as Gly so every group forms and breaks one bond, check each condensation, read sequence aloud, call groups back in reverse order for hydrolysis).
- **Waste:** Trash bullet now also lists masking tape labels from Part A; Model kits bullet → "after the hydrolysis in A.4, take your model apart…". No other route changes.
- **Report Sheet:** old A page + old B page → one Part A page: A.1 amino acid (2300 tw), A.2 joined structure (2900), checkRow A.2 condensation, A.3 sequence (1400) and counts (800), checkRow A.4 hydrolysis. Saves one page.
- **Pre-Lab:** Q7 ("Show your work") now has 800 tw answer space (was 0). Other spaces trimmed to fit the page with the new auto stamp box: 800/600/850/1200/800/1000/800 (was 1050/900/1050/1250/1050/1250/0).

## 2. Needs bench test / EHS review
- B.1 heating now **only** boiling water bath, 5 minutes (previously flame or bath). Confirm 5 min in a boiling bath fully coagulates 2–3 mL of the egg albumin solution (it should).
- No reagent, concentration, amount, or waste route changed. Reagent/amount strings verified identical before/after.
- Ethanol caution now names only hot plates; hot plates are in use in Part C (milk) and for the boiling baths. EHS may want "no hot plates on the bench where ethanol is dispensed".

## 3. Open questions for the co-authors
- Who starts the chain? I wrote that the instructor starts it with an unassigned amino acid (e.g., Gly) so every group gets both a condensation and a hydrolysis check. Alternative: first group starts it (then that group has no bond to form/break).
- Class size vs 20 amino acids: with more than ~19 groups (instructor's starter uses one), amino acids would have to repeat. Fine for normal section sizes?
- Hydrolysis timing: written as end of Part A in reverse order. Prefer end of lab instead (chain stays up as a display)?
- Kit capacity: each group's kit pieces stay in the chain until A.4. Trp/Arg/Tyr/Phe need many C atoms; check kit counts.
- Waste names: this lab still uses "Drain, with plenty of running water" and "Trash" bullets (not one of the four container names). Left as is because the request said not to change waste routes; tell me if "Trash" should become "Solid waste".
- Old report item "Equation for the formation of the class peptide" and "structure of the whole class peptide" were dropped (replaced by the drawing of one peptide bond + sequence + counts). Restore if wanted.

## 4. Build
- `node src/exp13.js fig out/exp13.docx` OK; "object Object" count = 0.
- Page count: could not render (Microsoft Word would not open the file through AppleScript; no LibreOffice). Estimate: report sheet is one page shorter than before (old A and B pages merged). Pre-lab page estimated at about 12,800 of 12,960 twips usable; tight, please check in the next full PDF. Estimated lab length about 12–13 pages.
