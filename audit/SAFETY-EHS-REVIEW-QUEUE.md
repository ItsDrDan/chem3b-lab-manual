# Safety and EHS Review Queue

**Status: not safety-approved.** These are review items for the co-authors, the laboratory coordinator, and the college's chemical hygiene/EHS staff. **No item in this file was changed in the manual.** Reagents, quantities, heating, ventilation, PPE, first aid and waste routes stay exactly as the co-authors wrote them until someone qualified signs off.

- Reviewed: commit `74efdc9` (the live site), source in `source/src/`, rendered PDFs in `pdf/`. Audit date: 2026-11-17.
- Method: each lab's Hazards and Waste text was compared with the front-matter rules (`source/src/frontmatter.js` lines 66–152), and then with every procedure step that uses each reagent. Full reagent-by-reagent tables for every experiment are in `audit/working-notes/expNN-NN.md`, section 2.
- GHS statements below come from general SDS knowledge and are marked **verify on SDS**. No local SDS, chemical hygiene plan or waste-contractor rules were available to this review, so **nothing here is "confirmed against local policy."**

Status codes: **CR** needs co-author review · **EHS** needs EHS verification · **BT** needs a bench test · **NV** not yet verified.

## A. Release blockers (P0): contradictory or possibly unsafe directions

| ID | Exp / page | Source | What the manual says | Why it is a problem | Question for the reviewer | Status |
|---|---|---|---|---|---|---|
| S-01 | 11, p. 143 | `exp11.js:48`; `frontmatter.js:143` | Exp 11 Waste: "**Trash:** toothpicks, used TLC plates, and gloves." Front matter, Table 1: Solid waste includes "chromatography plates or papers with chemicals on them … Used TLC plates." | These two directions contradict each other. The plates carry analgesics and ethyl acetate/hexane residue, and the silica is a dust. Exp 12 also sends used toothpicks to solid waste. | Where do used TLC plates and toothpicks go? Once you decide, the same wording will go in Exp 11, the front matter and Exp 12. | CR, EHS |
| S-02 | 13, pp. 169–173 | `exp13.js:53–54, 64, 74, 76, 79` | C.1 heats the egg-albumin tube "over a low Bunsen burner flame" at the bench ("a Bunsen burner is recommended"). C.4, in the same part, uses 4 mL of 95% ethanol ("Make sure all Bunsen burners near you are off"). | Front matter (`frontmatter.js:92`): "Open flames are used only where the procedure directs, **in the fume hood**, and never near flammable liquids." With burners lit at other benches, ethanol is dispensed in a room with open flames. | Keep the flame (and if so, in the hood?), or use the boiling-water-bath option for every group? | CR, EHS |
| S-03 | 5, pp. 59–63 | `exp05.js:38, 44, 49` | Spent Tollens' tubes go "**immediately**" into non-halogenated organic waste, and leftover stock goes to aqueous waste at the end of lab. The silver mirror is removed with dilute HNO₃, and that rinse goes to aqueous waste. | Ammoniacal silver can form explosive silver nitride/fulminate-type solids if it stands or dries, and that includes a carboy. The manual has no deactivation step. The Hazards say "used at once"; the Instructor Note says "fresh on the day of lab." | Has EHS approved putting unquenched Tollens' residue in a shared organic waste carboy? Is a deactivation step required, and who does it? The manual will not supply a treatment recipe. | EHS (priority) |
| S-04 | Front matter, p. vii | `frontmatter.js:141` | Table 1 puts "Tollens' and chromate test tubes" in **non-halogenated organic waste**. | This is the co-authors' stated stockroom rule (silver and Cr(VI) mixtures that contain organics go to the organic carboy). The brief asks for silver and chromium mixtures to be treated as priority cases for expert verification. Cr(VI) is a carcinogen; silver and chromium are RCRA-listed metals. | Does the college's waste contractor accept Cr(VI) and Ag in the general organic stream, or do these need their own container? Record the answer and its date in this file. | EHS (priority) |
| S-05 | 3, pp. 30, 35–36 | `exp03.js:61, 77, 103, 106` | Hazards: "keep the Part E test tubes **in the hood**." E.2: place each tube "in direct sunlight or under a bright lamp"; Materials: "sunny window or lamp." | A sunny window is usually not in a hood. Br₂ in CH₂Cl₂ would then be at the bench. | Set E.2 to "under a bright lamp in the fume hood"? | CR, EHS |
| S-06 | 6, pp. 76–78 | `exp06.js:48, 58, 73` | Methanol (bp 65 °C), 1-propanol and glacial acetic acid with 85% H₃PO₄ are heated for 15–20 min in a boiling-water bath on a hot plate. The hood is required only for *dispensing*. | Flammable, toxic vapor (methanol) is released next to a hot plate at the bench, and the tubes can bump. | Heat in the hood? Fit the tubes with a loose stopper or air condenser? | CR, EHS |
| S-07 | 7, pp. 86, 90 | `exp07.js:53, 65` | Hazards: triethylamine is "highly flammable … keep it away from hot plates." The Instructor Note puts the boiling-bath hot plate in the same fume hood as the triethylamine bottle. | The two directions contradict each other. | Separate hoods, or keep the bottle capped and away from the plate? | CR, EHS |

## B. Must resolve before student use (P1)

| ID | Exp | Source | Issue | Status |
|---|---|---|---|---|
| S-10 | 4 | `exp04.js:42, 45, 65, 66` | Materials say "2% K₂Cr₂O₇ in **dilute** H₂SO₄", but Hazards and Caution say "contains **concentrated** sulfuric acid," and the Heat bullet assumes concentrated acid. The stockroom prep sheet should decide which is true. Then the hazard text should match it (do not weaken it until the concentration is confirmed). | CR, stockroom |
| S-11 | 3 | `exp03.js:93–94` | C.2 and C.3 handle toluene and cyclohexane with no "in the fume hood," although Hazards says "Work with all hydrocarbons in the fume hood" (and B.2 and C.1 say so). | CR |
| S-12 | 5 | `exp05.js:41, 58` | Students waft 2,3-butanedione (inhalation toxicity; lung damage) at the bench. The front matter says "Smell toxic compounds only in the fume hood, if at all." | CR, EHS |
| S-13 | 6 | `exp06.js:49` | "Benzoic acid and salicylic acid irritate the eyes." Both are classed as causing serious eye damage (Eye Dam. 1), and salicylic acid is also Repr. 2 (verify on SDS). Exp 3 and Exp 4 already say "serious eye damage." | CR |
| S-14 | 9 | `exp09.js:61–69, 75, 93` | The spot plate is rinsed with acetone (Flam. Liq. 2) at benches where every group runs a hot plate. Acetone is missing from Hazards and the glove list. Exp 14 rinses the same kind of spot plate with **water** (`exp14.js:198`). | CR, EHS |
| S-15 | 11 | `exp11.js:39, 51, 56, 77` | Hazards: keep acetic anhydride, ethyl acetate and hexane "away from hot plates," yet A.3 heats the acetic anhydride mixture on a hot-plate bath in the hood, and the TLC solvent is poured in the same hood while the bath runs. Acetic anhydride may carry H330 (fatal if inhaled) on current SDSs (verify), which supports the existing hood-only rule. | CR, EHS |
| S-16 | 12 | `exp12.js:55, 65, 82–83` | A hair dryer (an ignition source) is used in the hood on paper wet with isopropanol and the alcohol-based ninhydrin spray, next to the solvent tank. The hazard text treats the dryer only as a burn risk. | CR, EHS |
| S-17 | 13 | `exp13.js:52, 90, 93` | The solvent for "0.2% ninhydrin solution" is never stated. E.2 heats it in a boiling bath in a lab where C.1 may use flames. The ninhydrin hazard lists only staining (also Acute Tox. 4 and Skin/Eye Irrit. 2; verify). The 20% acetic acid used in Part D has no hazard entry. | CR, stockroom |
| S-18 | 15 | `exp15.js` Hazards | The manual says "wear gloves when handling … methylene chloride," but CH₂Cl₂ passes through nitrile in about a minute. Should the glove advice say "change gloves at once if splashed"? | EHS |
| S-19 | 14 | `exp14.js` Hazards | Amylase powder is a respiratory sensitizer (Resp. Sens. 1, verify on SDS). The manual says only "avoid breathing dust if you weigh out the solid." Who weighs it, the students or the stockroom? | EHS |

## C. Cross-lab consistency (P2): rules that differ from lab to lab

| Topic | What differs | Source |
|---|---|---|
| Contaminated gloves | Exp 4: gloves with chromate go to **solid waste**. Exps 6, 7, 11, 14: "gloves" go to **trash**. The front matter covers only gloves *without* chemical contamination (`frontmatter.js:149`). No rule covers contaminated gloves. | exp04:51, exp06:79, exp07:95, exp11:48, exp14:201 |
| Glass capillaries | Exps 11 and 12 send used capillaries (with chemical residue) to the **broken-glass box**. Is that the right sharps route for contaminated glass? | exp11:48, exp12:167 |
| Spot-plate rinse | Exp 9 rinses with acetone; Exp 14 with water. | exp09:120, exp14:198 |
| Drain disposal | Exp 7 later rinses, Exp 9 yeast/sugar, Exp 13 egg/milk/whey, Exp 15 vitamin + water tubes all go to the drain. Each falls under the front matter's "unless the procedure says" exception. EHS should confirm each one once. | exp07:94, exp09:119, exp13:182, exp15:214 |
| Trash for lab-made lotion | Exp 10 puts the lotion (triethanolamine, stearic acid, cetyl alcohol) in the trash. | exp10:137 |
| Chromatogram kept for the report | Exp 12 keeps the ninhydrin-sprayed paper "for your report." Can a chemically treated paper leave the lab? | exp12:166 |
| Lab coat | Front matter requires a lab coat. Only Exp 3's Hazards repeat it, though no lab says it isn't needed. | all labs |
| Goggles in model-only labs | Exps 1, 2, 8: "wear safety goggles if chemicals are in use in the room." This matches the front matter. | — |
| Wafting | Every lab uses the same "breath of fresh air first, then waft" wording (author convention). Exp 7 limits aniline and N-methylaniline to the hood; Exp 5 2,3-butanedione is not limited (S-12). | — |
| First aid | Most labs say "rinse with water for 15 minutes and tell your instructor." Exp 7 aniline: "wash it off with soap and water right away" (appropriate for a skin-absorbed toxin). Exp 4 phenol was removed, so no PEG note is needed. | — |
| Halogenated waste volume | Exp 15 sends all iodine titration flasks (juice + iodide + starch) to halogenated waste. That is correct by the author rule, but the volume is large. Ask EHS whether that is intended. | exp15:213 |

## D. Bench tests that bear on safety or on whether a lab works

These were found by calculation or prediction, not at the bench. Details are in the working notes.

- Exp 3 E.2: bromine vapor alone may redden or bleach moist litmus. Add a reagent-only control? (F3-02)
- Exp 6 C.3: 1 mL of 10% NaOH (2.5 mmol) may be too little for the ester plus its phenol (3.1–3.9 mmol). This is an open item from the earlier review. (E6-03)
- Exp 6 A.6/C.5 and Exp 7 C.1: the litmus endpoint may stop acidification too early. (E6-04, F7-02)
- Exp 9 E.2: the starch tubes are made basic before the iodine test, which can bleach the iodine color. (F9-02)
- Exp 10 Part B: bromine drop counts up to the 50-drop cap. Which safflower oil (high-oleic or high-linoleic)? (L10-01, L10-02)
- Exp 13 C.5: much of the white precipitate may be AgCl from chloride in the egg white. (E13-03)
- Exp 14: the amylase source, concentration and pH/temperature optimum are unknown. Parts B–D use far more enzyme than Part A. (E14-01 to E14-04)

## E. Sign-off record (fill in)

| Item(s) | Decision | Reviewer (name, role) | Date | Local document cited (CHP section, SDS date, waste profile) |
|---|---|---|---|---|
| S-01 | | | | |
| S-02 | | | | |
| S-03, S-04 | | | | |
| S-05 to S-07 | | | | |
| S-10 to S-19 | | | | |
| Section C | | | | |
