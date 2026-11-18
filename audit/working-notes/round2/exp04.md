# Exp 4 (Alcohols and Phenols): edit notes

File: source/src/exp04.js. New figures: source/fig/fig4_lucas.{html,png}, fig4_fecl3.{html,png}, fig4_qlucas.{html,png}. New alt.json key: fig4_qlucas.png.
Old fig4_5 (chromic acid), fig4_6 (Cr + FeCl3 tubes) and fig4_7 (oxidation question) are no longer used. Their files were left on disk; delete them if nothing else uses them. The fig4_7.png key in alt.json was left in place.
Original file backed up at scratchpad/exp04.orig.js.

## 1. Change list
- Goals: "chromic acid test …" and "oxidation products" → model building and classification; Lucas test (1°/2°/3°) + FeCl3; "write the alkyl chloride formed in the Lucas test".
- Intro A: added a paragraph on isomers (the four C4H10O alcohols built in Part A).
- Intro C: "Oxidation of Alcohols: the Chromic Acid Test" (with the chromate equation and Fig 5) → "The Lucas Test: Classifying Alcohols". Covers the reagent (ZnCl2 in conc. HCl), R–OH + HCl → R–Cl + H2O, clear → cloudy/two layers, 3° (<1 min) / 2° (3–10 min, may need a 50–60 °C bath) / 1° (no change), carbocation defined in one paragraph, limits (≤ about 6 C, dry tube, phenols do not react).
- Figure 5: chromic acid oxidation → new fig4_lucas.png (t-butyl alcohol + HCl over ZnCl2 → t-butyl chloride + H2O; three tubes: clear / cloudy / two layers). The caption says the yellow layer is drawn only so it shows up.
- Figure 6: Cr + FeCl3 tubes → FeCl3-only tubes (fig4_fecl3.png).
- Intro E: "chromic acid to decide 3°" → "Lucas test to decide 1°, 2°, or 3°".
- Hazards: removed the chromate and "Heat" bullets. Added a Lucas reagent bullet (conc. HCl burns and fumes, ZnCl2 corrosive/harmful, fume hood, spill reporting moved here) and an alkyl chloride bullet (volatile, flammable). Flammable bullet now says any water bath is on a hot plate. Odor bullet: do not smell the Part C tubes. Intro sentence: gloves for Lucas reagent; Part C in the hood.
- Waste: Part C tubes and first rinse → **Halogenated waste** (alkyl chlorides are organic halides; the reason is stated). Parts B and D → Non-halogenated organic waste. Solid waste: gloves and towels with Lucas reagent or salicylic acid, plus pH paper. The separate "Spills" bullet was removed (moved into Hazards) so there is one bullet per container.
- Instructor Notes: chromate notes → model-kit needs (incl. Cl piece), Lucas reagent in the hood, dry tubes, optional warming, 2-propanol often slow, ethanol/2-propanol unknown caution, halogenated waste.
- Part A: A.1–A.2 unchanged. New A.3: four C4H10O alcohols built, drawn, and classified (Instructor check). New A.4: models swap –OH for –Cl on 2-methyl-2-propanol, with water formed (Instructor check). New A.5: predict fastest and no-change isomer.
- Part C: C.1–C.4 chromate steps → C.1 Lucas test (5 drops + 2 mL (about 40 drops) of reagent, dry tubes, fume hood, up to 10 min, record clear/cloudy/two layers and time); C.2 optional 50–60 °C bath for 5 min, then halogenated waste; C.3 classify; C.4 draw the alkyl chloride or NR.
- Part E: E.1 cites C.1 (and C.2).
- Pre-lab: Q1 chromate hazards → Lucas reagent hazards and fume hood; Q2 waste → halogenated and why; Q4 chromic prediction → Lucas prediction and alkyl chloride for 1-propanol, 2-butanol, 2-methyl-2-butanol; Q7 → fast-cloudy unknown (t-butyl alcohol) plus why the test fails for 8 C. Q3, Q5, Q6 unchanged.
- Report sheet: A.3 table (4 isomers) + checkRow A.3; A.4 equation box + checkRow A.4; A.5 prediction line. Part C table now has columns for appearance/time, after warming, type, and alkyl chloride or NR. The E.1 row "C.1 Chromate reagent" → "C.1–C.2 Lucas test". Page breaks changed: B starts a new page, D starts a new page with E after it.
- Post-lab: Q.3 oxidation products (fig4_7) → Lucas prediction and alkyl chloride for 3-pentanol (2°), 1-pentanol (1°, NR), and 1-methylcyclopentanol (3°) (fig4_qlucas.png; same compounds as Q.1). Q.4 kept. New Q.5: carbocation explanation (2-methyl-2-propanol vs 1-butanol).
- Structures checked: t-butyl alcohol/chloride (C4H10O / C4H9Cl); 3-pentanol, 1-pentanol, and 1-methylcyclopentanol in fig4_qlucas match their names.

## 2. Needs bench test and EHS review (proposals)
- **Lucas reagent** (ZnCl2 in conc. HCl). The standard prep (Shriner et al., *Systematic Identification of Organic Compounds*; also common undergraduate manuals) is about 136 g anhydrous ZnCl2 in about 105 g (89 mL) conc. HCl, with cooling. The stockroom should confirm the prep, the storage, and that it is dispensed only in the hood.
- **Amounts:** 5 drops of alcohol (or 0.15% salicylic acid solution, or unknown) + 2 mL (about 40 drops) of reagent in a dry tube. These are typical textbook ratios (co-author request). Bench-test them with our tube size.
- **Timing:** watch up to 10 minutes at room temperature. Bench-test that t-butyl alcohol is cloudy in < 1 min and cyclohexanol in 3–10 min. **2-propanol is known to be slow or faint** (isopropyl chloride is volatile and somewhat soluble), and it may not show a clear result.
- **Warming:** optional 5 min in a 50–60 °C water bath on a hot plate in the fume hood (no flames). Check that ethanol stays clear under these conditions, and whether warming is needed at all.
- **Fume hood:** all of Part C (HCl fumes, volatile alkyl chlorides).
- **Waste:** Part C tubes and first rinse → Halogenated waste (manual rule: organic halides). EHS should confirm that the halogenated container can take a strongly acidic, Zn-containing aqueous/HCl mixture (compatibility and gas). They may want a separate container or neutralization first.
- **Salicylic acid in Lucas reagent:** 5 drops of the 0.15% aqueous solution adds a little water. Check that it stays clear (no salicylic acid precipitates in strong acid that could look like a positive result).
- **Model kits:** they need a Cl piece (A.4) and enough C/H for 4-carbon models.

## 3. Open questions for co-authors
- Should the 2-propanol result (often slow or ambiguous) stay? Ethanol vs 2-propanol now differ in Part C only by that slow result. Use them as unknowns with care, or replace 2-propanol with 2-butanol in Part C.
- Should warming (C.2) be routine or used only if the stockroom finds the test slow? It is written as "only if your instructor directs."
- Delete the unused fig4_5/fig4_6/fig4_7 files and the fig4_7.png alt.json key?
- With chromate gone, the manual no longer covers alcohol oxidation in Exp 4. Is it covered elsewhere (e.g., Exp 5)?

## 4. Build
- `node src/exp04.js fig out/exp04.docx` → wrote; object-Object count 0. Searched the built text for chromium/chromate/chromic/Cr(VI): none found.
- Page count could not be measured (no LibreOffice). Estimate is about 13–14 pages (about +1.5 pages: the new Part A report tables and checkRows, plus Q.5).
