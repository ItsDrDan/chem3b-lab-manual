# Round 2: co-author-requested lab edits (2026-11-17)

These changes were requested by Daniel and Alexandra. Detailed per-lab notes, with every before/after and the bench/EHS items, are in `audit/working-notes/round2/`. **Nothing here is safety-approved.** Every new reagent, amount, heating step and waste route is a proposal for a bench trial and EHS review.

## What changed

| Request | What was done | Files |
|---|---|---|
| Stamp or signature box for the pre-lab | Every lab now has a **Pre-Lab check** box (instructor stamp or signature) with name/section/date lines under the Pre-Lab Questions heading. It is added automatically by the shared code. | `lablib.js` |
| Lab check-out stamp box; a clear divide between data collection and the post-lab report | Every Report Sheet is now titled **"Report Sheet: Data Collection"** and ends with a **Lab Check-Out** box (bench clean, equipment and kits returned, waste in the correct containers, plus the stamp). The question pages are now **"Post-Lab Report: Questions and Problems"**. "To the Student" explains all three. | `lablib.js`, `frontmatter.js` |
| Instructor check boxes for model steps where students demonstrate something | A shared `checkRow()` box ("☐ A.3 Instructor check: … / Initials or stamp") appears on the Report Sheet for every model demonstration: Exp 1 B.5, Exp 2 D.5, Exp 3 A.3, Exp 4 A.3–A.4, Exp 5 A.4–A.7, Exp 6 B.1, Exp 7 A.3–A.4, D.1, D.3, Exp 8 A.1, Exp 12 A.2, Exp 13 A.2 and A.4, Exp 16 A.1–A.4. The procedure step for each also says "Instructor check: show your instructor …". | many |
| Bigger model-kit component for the shorter labs | Exp 4 (four C₄H₁₀O alcohols classified; the Lucas –OH → –Cl swap shown with models), Exp 5 (propanal/propanone isomers; [O] on an aldehyde; why a ketone is not oxidized, which ties into Tollens'; [H] on a ketone), Exp 7 (four C₃H₉N amines classified; an amine accepting H⁺, which ties into the Part C salts). The labs chosen were the shortest by the audit's time estimates. **The actual lab period length is still unconfirmed.** | `exp04.js`, `exp05.js`, `exp07.js` |
| Lucas test over chromates (Alex's notes) | Exp 4 Part C is now the **Lucas test** (ZnCl₂ in concentrated HCl, in the fume hood; Part C tubes go to **halogenated waste** because they contain alkyl chlorides). The chromate reagent is gone from the whole manual, which also clears audit items S-04 (chromate waste) and S-10 (dilute vs concentrated acid). New figures: `fig4_lucas`, `fig4_fecl3`, `fig4_qlucas`. | `exp04.js` |
| Cellulose TLC plates for Exp 12 | The cellulose TLC version is now **the adopted Experiment 12**. The paper-chromatography version is kept as an alternate (`src/exp12_paper.js`, `drafts/Exp12_AminoAcids_PaperChromatography_ALTERNATE.docx`). Used plates go to **solid waste**, which matches the front matter. | `exp12.js`, `exp12_paper.js`, README, index |
| Strawberry DNA lab with TLC on silica | New **Experiment 16: Nucleic Acids and DNA Extraction**. Part A: nucleotide and base-pair models (four instructor checks). Part B: strawberry DNA extraction (detergent, salt, ice-cold alcohol, spooling), with a class comparison of variations. Part C: TLC of the nucleobases A, C, T and U on silica gel F254 under 254 nm UV, with an unknown. Six new figures (structures checked). Placed after Exp 15 so Experiments 1–15 keep their numbers. | `exp16.js`, `fig16_*`, `master.js` |
| Combine Parts A and B of the peptides lab | Exp 13 Part A is now "Peptide Bonds: Building and Breaking a Class Peptide". Each group builds an amino acid, labels it with tape, adds it to the class chain (condensation, instructor check), and later removes it (hydrolysis, instructor check). The old Parts C, D, E are now B, C, D everywhere. | `exp13.js` |
| Remove all mentions of a Bunsen burner | None left in any source file. Exp 13 heating is a boiling water bath only. The Appendix A table row and drawing were replaced by **TLC plate and developing chamber**. Exp 4's hazard now says "No open flames." This clears audit item S-02. | `exp13.js`, `exp04.js`, `appendix.js`, `fig/figapp_equip.py` |

## Decisions needed from Daniel and Alexandra

**Exp 4 (Lucas):**
1. 2-propanol often reacts slowly or faintly in the Lucas test, so ethanol and 2-propanol may look alike. Keep 2-propanol, or use 2-butanol?
2. Should warming (C.2, 50–60 °C bath) be routine, or used only if the stockroom finds the test slow?
3. Alcohol oxidation is no longer done at the bench in Exp 4. Exp 5 now models aldehyde oxidation. Is that enough coverage?

**Exps 5 and 7:**
4. Exp 5 A.7 (ketone reduction): keep it required, or mark it "if time permits"?
5. Exp 5 Q.4 is easier now that students build propanal and propanone. Switch it to butanal vs 2-butanone?
6. Do the stockroom kits have four-hole nitrogen atoms (needed for Exp 7 A.4)?

**Exp 13 (peptides):**
7. The instructor starts the class chain with an unassigned amino acid (for example Gly). OK?
8. Hydrolysis happens at the end of Part A, in reverse order. Or at the end of lab?
9. The old "structure of the whole class peptide" and "formation equation" report items were dropped. Restore them?

**Exp 16 (DNA):**
10. I read "TC … silica plates" as **TLC on silica gel plates**. If you meant silica-membrane (spin-column) DNA purification, Part C changes.
11. A printable base-card sheet for A.3?
12. Keep the B.7 variations, or make them one instructor demo?
13. Isopropyl (91%) or ethyl (95%) alcohol?
14. Placement: Exp 16 after Vitamins, or move it after Exp 13/14 (which renumbers 14–15)?

**Waste-name cleanups** (wording only, not routes): Exp 5 leftover Tollens' reagent (aqueous vs organic), and the "Drain"/"Trash" bullets in Exps 7 and 13. These go together with the SAFETY-EHS-REVIEW-QUEUE.

## Bench trial and EHS review (new items)

- **Exp 4:** Lucas reagent prep (about 136 g anhydrous ZnCl₂ in about 89–105 mL concentrated HCl, cooled; Shriner et al.), 5 drops + 2 mL per test, the 10-minute window, the optional warming, fume-hood use. Can the halogenated carboy take an acidic, zinc-containing mixture? Does salicylic acid stay dissolved in the reagent?
- **Exp 12:** cellulose plate size and number (two 7.5 × 10 cm per group), development time, drying and ninhydrin warming (hair dryer near alcohol vapor is still item S-16).
- **Exp 13:** none new (the burner was removed).
- **Exp 16:**
  - The extraction buffer (100 mL water + 10 mL detergent + 2 g NaCl; 10 mL per berry).
  - 3 mL filtrate + 3 mL ice-cold alcohol (chilled in an ice bath, never a household freezer).
  - The TLC solvent (20 mL isopropyl alcohol + 10 mL 0.5 M NH₄OH on silica), with 1-butanol : acetic acid : water 4:1:1 as the fallback.
  - About 0.1% nucleobase standards.
  - Whether the detergent filtrate and strawberry pulp can go to drain or trash. Currently they go to non-halogenated organic waste and solid waste.

## Decisions recorded (Daniel, 2026-11-17) and applied

- **Exp 4, both 2° alcohols:** Part C now tests 2-propanol **and** 2-butanol (7 tubes). The report table, hazards and Instructor Notes are updated. Pre-lab Q4's prediction compound changed from 2-butanol to 2-pentanol, so it doesn't duplicate a tested compound.
- **Exp 4, warm bath:** each pair sets up its own 50–60 °C water bath at the start of Part C (for practice) and uses it only for tubes still clear after 10 minutes.
- **Exp 4, alcohol oxidation:** explained to Daniel. The chromate test was the bench oxidation; the Lucas test is a substitution. Oxidation remains in the Exp 4 introduction and models, and at the bench in Exp 5 (Tollens'). No change; a bench oxidation (e.g. KMnO₄) can be added later if wanted.
- **Exp 5:** A.7 (ketone reduction) stays required. Q.4 now uses C₄H₈O (butanal vs 2-butanone), with "both have an unbranched carbon chain" so that 2-methylpropanal is excluded.
- **Exp 7 (Snatoms):** the kit's nitrogen has three bonding sites. A.4 now tells students to balance an H on top of the nitrogen for the fourth group, and the Instructor Note matches. The Exp 5 and Exp 7 kit notes now say "black bond pieces" instead of "flexible bonds".
- **Exp 13 class peptide:** at the start of lab each group tells the instructor its amino acid; the instructor writes the choices on the board (no repeats), starts the chain with Gly, and adds each condensation to a three-letter-abbreviation equation on the board. When all groups have condensed, the instructor calls groups up for hydrolysis from the C-terminus. A.2 (condensation) and A.4 (hydrolysis) each have an **Instructor stamp or signature** box (`checkRow(...,{stamp:true})`).
- **Exp 16 TLC:** confirmed as ordinary silica-gel TLC, like Exps 11 and 12 (not spin columns). The Instructor Note now says Part C needs no new equipment: plates, capillaries, chamber and UV lamp from Exp 11, and the solvent from Exp 12.

Still open: Exp 13 chain size vs class size; Exp 16 (base cards, B.7 variations, isopropyl vs ethanol, placement). Several other labs (e.g. Exp 2) still describe peg-and-hole kits rather than Snatoms (earlier decision D-14).

Rebuilt after these decisions: 270 pages (Contents regenerated), Word files rebuilt, PDF re-exported and cut with `source/tools/cut_pdfs.py`, which checks every page number and section start.

## Book layout and workshop answer sheet (Daniel, 2026-11-17)

- **Bound as a book:** a blank page now backs the cover, and every lab, the workshop and the appendices start on a right-hand (odd-numbered) page. Word adds a fully blank page (no header or number) before a section when needed. The manual is now 287 pages (Exp 1 starts on p. 1, Exp 2 on p. 15, … Appendices on p. 253). The single-section PDFs leave those blank pages off.
- **Contents numbers** now come from the exported PDF (`source/tools/toc_from_pdf.py`), because Word's page map does not count the blank pages. `cut_pdfs.py` stops if a section starts on an even page.
- **Chirality workshop:** the Answer Sheet boxes show only "Station 1" to "Station 20" (no prompts), so instructors can move stations or change tasks. Three "Extra Space" boxes (with a station-number blank) fill the last page. Student directions no longer name Stations 5 and 6; they say "if a station card asks you to build structures". Each box is one unbreakable row, so a label is never stranded at the bottom of a page.
