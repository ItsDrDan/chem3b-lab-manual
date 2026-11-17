# Changelog for the Co-authors (Daniel and Alexandra)

Branch: `audit/2026-11-17-polish`, starting from `main` at `74efdc9`. **Nothing has been pushed or published.** All changes are in canonical source (`source/`). The DOCX rebuilds from it; the PDFs still need a Word export (see RELEASE-GATE.md).

**Not changed:** no reagent, concentration, quantity, heating step, ventilation instruction, PPE rule, first-aid instruction or waste route. Those are in SAFETY-EHS-REVIEW-QUEUE.md. The unadopted cellulose-TLC draft (`drafts/`, `source/src/exp12_cellulose.js`) was not touched and was not merged.

Class: **E** = editorial or technical (an editor may make it). **S** = scientific or pedagogical wording; please confirm before release. Each ID points to the matching finding in `audit/working-notes/`.

## 1. Shared code (all labs)

| File | Change | Why | Class |
|---|---|---|---|
| `lablib.js` | Every image now gets alt text. Figures with a caption use the caption. Uncaptioned images use `fig/alt.json` (new file: 42 hand-written descriptions, checked against each PNG; question structures are described without giving away the answer). | 0 of 164 images had alt text. After the rebuild, 164 of 164 have it. | E |
| `lablib.js`, `master.js` | Document language set to `en-US` in the default style. | Screen readers and the Word/PDF accessibility checker need a language. | E |
| `lablib.js` | Table header rows are now marked as header rows, which repeat when a table breaks across pages. Tables can opt out with `repeat:false`. | 17 of about 140 header rows were marked before; now 120 are. Tables that split (Exp 10 Tables 2–3, Exp 13 Tables 1–2, Exp 14 Table 3) now repeat their header on the next page. | E |
| `lablib.js` | A space before "°C" becomes a non-breaking space. | "0 °C" broke across lines (Exp 14 p. 184). | E |
| `lablib.js` | Single-lab Word files: author "CHEM 3B" changed to "Daniel Kwasniewski, Ph.D. and Alexandra Aloia"; title "CHEM 3B Laboratory Manual"; description "CC BY 4.0". | The single-lab files did not credit either author (AF-04). | E |
| `master.js` | Full-manual author metadata now matches the PDF ("Daniel Kwasniewski, Ph.D. and Alexandra Aloia"). | AF-05 | E |
| `src/appendix.js`, `exp01.js`, `exp03.js`, `exp05.js`, `frontmatter.js` | Images placed directly (outside `img()`) now get alt text too: the Appendix structure cells, the Exp 1 report structures, the Exp 3 and Exp 5 question structures, and the cover. | Same as above. | E |

## 2. Front matter and appendices

| Where | Before → after | ID | Class |
|---|---|---|---|
| License page, "Companion textbook" | "…whose lab connection sections link to the matching experiments here." → "…whose "In the Lab" boxes describe the related experiments." | AF-01 | E (the old statement was not true: no textbook page links to the manual yet) |
| License page, suggested attribution | Added the URL https://itsdrdan.github.io/chem3b-lab-manual/ | AF-03 | E |
| App B, Table D.1 column widths | Widened the first column so "Electron groups" no longer breaks as "Electro / n". | AF-16 | E |
| App E, Table E.1 | The first class header ("Nonpolar…") is now bold like the others. | AF-20 | E |
| App E.3 | "The melting points match Table 2 in Experiment #10." → adds "…which lists all of these fatty acids except arachidonic acid." | AF-22 | E |
| App E.1, Fischer rule | "with the most oxidized carbon (C1) at the top" → "with C1 at the top, so the carbonyl carbon is as near the top as possible" (C1 is not the most oxidized carbon in a ketose) | AF (science) | **S** |
| App F, Fig F.1 caption | Added that lead is given as 207.2 because its atomic weight varies. | AF-24 | E |

## 3. Experiments

| Exp | Where | Before → after | ID | Class |
|---|---|---|---|---|
| 1 | Intro, bond polarity | Old electronegativity values (H 2.1, C 2.5, N 3.0, Cl 3.0, O 3.5; C–H "difference 0.4") → Appendix D values (2.20, 2.55, 3.04, 3.16, 3.44; "difference 0.35"). The ≈0.5 polar cutoff still classifies every bond the same way. | F1-01 | **S** (confirm) |
| 2 | B.2 | The isomer step could not be done (the middle carbon has no free bond). It now says to remove an H from the middle carbon, attach the CH₃ there, and cap the old end. | F2-01 (P1) | E |
| 2 | Q.5 | Added answer space for four skeletal structures and names (there was none). | F2-02 (P1) | E |
| 2 | Naming rule 2 | "nearest a branch" → "nearest a substituent (a branch or a halogen atom)" | F2-05 | **S** |
| 2 | Report B.3 header | "Density (units, state)" → "Density (units, state, temperature)" (the step asks for the temperature) | F2-09 | E |
| 3 | B.3 and report | Part B is titled "Color, Odor, and Physical State," but no step or column recorded color. Color is now added to both. | F3-03 (P1) | E |
| 4 | Report C header | "C.3 Classification" (broke as "Classificatio/n") → "C.3 Type (1°, 2°, 3°, or phenol)" | E4-11 | E |
| 4 | Q.2 | "condensed structural formulas of thymol, menthol, and resorcinol" → "structures … (rings may be drawn as skeletal rings)" | E4-14 | E |
| 5 | D.4 | "pour the contents of all **five** tubes" → "**four**" (Part D uses four tubes) | E5-02 (P1) | E |
| 5 | Report E.2 | Now also asks "Is it a methyl ketone? Is it a small or a large molecule?" to match step E.2. | E5-07 | E |
| 5 | Q.3 | "draw the organic product" → "product(s)" (the iodoform reaction has two organic products) | E5-10 | E |
| 6 | C.3 | Removed "You should still see two layers: the water layer and the oily ester layer at the bottom." → "Record whether you see an oily ester layer." (the step told students the result before they saw it) | E6-17 | **S** (data integrity) |
| 7 | Intro A | "…is a secondary amine (Figure 1)." Figure 1 does not show *N*-methylaniline, so the sentence now says what Figure 1 does show. | F7-10 | E |
| 8 | Fig 4 caption | Added: "The bond written α(1→4) in the figure is the same as α-1,4 in the text." | F8-02 | E |
| 9 | A.2 | "(Figure 2)" → "(Figure 1)" (the fermentation tube is Figure 1) | F9-04 | E |
| 9 | Q.8 | Red-brown iodine results now count as positive, matching D.2. | F9-19 | E |
| 10 | C Materials | Added "hot plate" (it is used but was not listed). | L10-06 | E |
| 10 | A.4 | Added "forms a cloudy mixture" (lecithin disperses). | L10-15 | **S** |
| 11 | Report C.6 | One "OTC pain reliever (each spot)" row → three rows, spot 1–3. | A11-09 | E |
| 12 | Report B.9 | One "Unknown (each spot)" row → two rows. | AA12-05 | E |
| 12 | Intro B | Mobile phase "much less polar than water" → "less polar than the water-coated paper" (one-third of the solvent is aqueous) | AA12-10 | **S** |
| 13 | Questions | The last question (Q.7) had no answer space; it now has the same space as the others. | E13-12 | E |
| 14 | Fig 2 caption | Added "(the colors are an example only; record what you see)," so students don't copy the example colors. | E14-08 | E |
| 15 | Goals | "vitamin C tablet of known mass" → "…that contains a known amount of vitamin C" | E15-09 | E |
| 15 | C.2, C.4 | The initial reading now also allows "or your new reading if you refilled the buret," to match the refill rule. | E15-08 | E |
| 15 | Report D | Non-breaking space in "(C.5 − D.5)" so "D.5)" does not wrap alone. | E15-10 | E |

## 4. Effect on layout

The page map was measured in Microsoft Word after the changes (`remap.sh`). The manual is still **242 pages**, and **every front-matter section, experiment and appendix starts on the same page as before**, so `tocpages.json` and the Contents did not change. The page-by-page comparison with the original layout is in RELEASE-GATE.md.

## 5. Decision register: needs Daniel's or Alexandra's decision

These were found but **not** changed, because they change science, an expected result, or an operation. Full text and proposed wording are in the working notes.

| # | Item | Proposed | Who |
|---|---|---|---|
| D-1 | Safety queue S-01 to S-19 | see SAFETY-EHS-REVIEW-QUEUE.md | Co-authors + EHS |
| D-2 | Exp 9 unknowns are never defined; maltose and galactose would be indistinguishable from glucose and lactose (F9-03) | list the possible unknowns in the Instructor Note | Co-authors |
| D-3 | Exp 5 unknown set never defined; cyclohexanone gives a false-positive Tollens' result (E5-04) | list the possible unknowns, excluding cyclohexanone | Co-authors |
| D-4 | Exp 9 E.2: neutralizing to basic before the iodine test may bleach it (F9-02) | run the iodine test before neutralizing; bench test | Co-authors, BT |
| D-5 | Exp 6 C.3: NaOH amount; A.6/C.5 and Exp 7 C.1 litmus endpoints (E6-03, E6-04, F7-02) | bench test; consider pH paper to pH ≈ 2 | Co-authors, BT |
| D-6 | Exp 10 Part B drop counts; which safflower oil (L10-01, L10-02) | bench trial; specify high-linoleic safflower | Co-authors, BT |
| D-7 | Exp 13 C.5: AgCl from egg-white chloride (E13-03) | add one sentence of caution, or use distilled-water albumin | Co-authors |
| D-8 | Exp 14: amylase source and concentration, enzyme amount in B–D, starch buffer vs the Part C pH (E14-01 to 04) | state the product and concentration; bench test | Co-authors, BT |
| D-9 | Exp 3 E.2: no reagent-only control for the HBr litmus test (F3-02) | add a Br₂/CH₂Cl₂-only tube | Co-authors, BT |
| D-10 | Exp 6 ester odor: manual says pentyl acetate smells like banana; textbook says pear (isopentyl acetate = banana) (TX) | pick one and match both books | Co-authors |
| D-11 | Textbook "In the Lab" boxes use the old 14-lab numbers and describe tests the manual no longer runs (phenol/NaOH, bicarbonate, tannic acid, benzene, formaldehyde odor); three course-outline lab topics (soap, DNA extraction, metabolism) have no experiment | TEXTBOOK-LAB-CROSSWALK.md change map; decide whether to add labs | Co-authors |
| D-12 | Cover says "2026 Edition," README says "working draft" (AF-09) | add "(working draft)" to the cover until release | Co-authors |
| D-13 | Acknowledgments wording about the commercial manual (OER coordinator sign-off still open) | confirm | Co-authors + OER coordinator |
| D-14 | Exp 2 kit description (holes, flexible bonds) vs the Snatoms kit in Exp 1; D.5 asks students to show models already taken apart (F2-04) | confirm which kit Exp 2 uses | Co-authors |
