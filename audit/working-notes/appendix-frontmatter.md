# Audit: Appendices A–F, non-safety front matter, packaging and metadata

Reviewer scope: `source/src/appendix.js`, `source/src/frontmatter.js` (cover, license/acknowledgments, Contents, To the Student, Notebooks and Reports, Measurements and Uncertainty), `pdf/experiments/16_Appendices.pdf`, `pdf/experiments/00_FrontMatter_Safety.pdf`, first 12 pages of `pdf/CHEM3B_Lab_Manual_OER.pdf`, `README.md`, `index.html`, DOCX/PDF metadata. Repo at commit 74efdc9. Safety rules and the waste table were **not** reviewed (out of scope).

How it was checked: every appendix page and the cover, license, Contents and Measurements pages were rendered (macOS Quick Look, 1500 px) and read; page text and footers of all 242 PDF pages were extracted with pypdf; every per-experiment PDF was compared page by page with the full PDF; molecule stereochemistry was checked from the SMILES in `source/fig/figapp_mols.py` (CIP worked by hand) and against the rendered figures; every number in Appendices D and F was recomputed.

---

## 0. Packaging, pagination and metadata (verified)

### Page-number offset
- PDF p.1 cover (no footer), p.2 license page (no footer), p.3 Contents = **i**, pp.4–11 = **ii–ix**, p.12 = **1**.
- Body footer read on every page 12–242: printed page = PDF page − 11 with **0 mismatches** (231 numbered body pages). Offset verified.

### Contents vs actual start pages (all match)
| Entry | Contents | Actual (PDF p.) |
|---|---|---|
| To the Student | ii | ii (4) |
| Laboratory Safety | iv | iv (6) |
| Safety Agreement | vi | vi (8) |
| Chemical Waste Disposal | vii | vii (9) |
| Notebooks and Reports | viii | viii (10) |
| Measurements and Uncertainty | ix | ix (11) |
| Exp 1–15 | 1, 14, 29, 45, 57, 71, 84, 97, 112, 127, 139, 153, 167, 181, 195 | identical (PDF 12, 25, 40, 56, 68, 82, 95, 108, 123, 138, 150, 164, 178, 192, 206) |
| App A–F | 209, 212, 214, 219, 222, 228 | identical (PDF 220, 223, 225, 230, 233, 239) |

### Per-experiment PDF cuts vs full PDF
All 17 cut files are **byte-for-byte identical in page text** to the matching pages of the full PDF, and their ranges match README.md and index.html exactly: 00_FrontMatter (PDF 1–11, cover + license + i–ix), Exp01 1–13, Exp02 14–28, Exp03 29–44, Exp04 45–56, Exp05 57–70, Exp06 71–83, Exp07 84–96, Exp08 97–111, Exp09 112–126, Exp10 127–138, Exp11 139–152, Exp12 153–166, Exp13 167–180, Exp14 181–194, Exp15 195–208, Appendices 209–231 (23 pp). Full PDF = 242 pp, as README/index state. File sizes on index.html (12.7 MB, 8.6 MB, 0.4–2.0 MB per file) all match the files on disk.

### Authors and license statements
| Location | Authors as written | License statement |
|---|---|---|
| Cover (PDF p.1) | Daniel Kwasniewski, Ph.D. / Alexandra Aloia | "An open educational resource licensed under CC BY 4.0" |
| License page (PDF p.2) | Daniel Kwasniewski and Alexandra Aloia | Full CC BY 4.0 statement + link to legal code; suggested attribution (no URL) |
| README.md | Daniel Kwasniewski, Ph.D. and Alexandra Aloia | CC BY 4.0, links LICENSE; attribution URL = github.com repo |
| index.html | Daniel Kwasniewski, Ph.D. and Alexandra Aloia | CC BY 4.0 link; attribution URL = github.io site |
| LICENSE | — | CC BY 4.0 International legal code (correct) |
| Full PDF metadata | Author "Daniel Kwasniewski, Ph.D. and Alexandra Aloia"; Subject "…(OER), CC BY 4.0"; Keywords incl. CC BY 4.0 | yes |
| Per-experiment PDFs metadata | same author string, per-file title | yes (Subject) |
| Full DOCX `docProps/core.xml` | `dc:creator` "Daniel Kwasniewski and Alexandra Aloia"; `dc:title` "CHEM 3B Laboratory Manual"; `dc:description` "CC BY 4.0"; lastModifiedBy "Un-named" | description only |
| Per-experiment DOCX (all 15) and drafts DOCX | `dc:creator` **"CHEM 3B"**, no title, no description/license | **none** (no license text on any page either) |

Author order (Kwasniewski, then Aloia) is the same everywhere. "Ph.D." is used on the cover, README, index and PDF metadata but not on the license page, the attribution lines or DOCX metadata (acceptable for attribution lines; flagged P3 for metadata only).

---

## 6. Editorial and print

### Front matter
- **License page, Companion textbook (frontmatter.js:33):** "whose lab connection sections link to the matching experiments here." The textbook mirror has **no links** to this manual, uses the old 14-lab numbering, and its own "For Instructors" page says experiment numbers are provisional and "numbers and links will be checked and added when the manual is published." The sentence is currently untrue (see textbook-crosswalk.md). README.md:7 makes the same claim.
- **Suggested attribution (frontmatter.js:30):** no URL; README.md:49 uses the GitHub repo URL, index.html:109 the github.io URL. CC BY attribution should include a source link; use one canonical URL in all three.
- **Contents vs running headers:** Contents and experiment titles use "Experiment #1: …"; running headers use "Experiment 1: …" (master.js LABS array). Appendix running header is the generic "Appendices" on all 23 pages instead of "Appendix A: …" etc.
- **README.md:39 / index.html:64** list the parts as "Goals, Introduction, Hazards and Safety, Waste Instructions, Pre-Lab Questions, Procedure, Report Sheet…". The actual order in every exp file and in To the Student is Goals → Introduction → Hazards → Waste → **Procedure → Pre-Lab Questions** → Report Sheet → Questions and Problems.
- **Per-experiment Word files** (docx/experiments) restart at page 1, have no running header, `dc:creator` "CHEM 3B", and no license/attribution anywhere. README's "Pages" column and the statement "Each experiment PDF keeps them" are correct for PDFs only. A single lab handed out or linked from the textbook (PDF or Word) carries no CC BY notice on the page.
- **Cover/license page say "2026 Edition"**; README/index say "Working draft… numbers and procedures may change". The printed manual itself never says draft.
- **Measurements and Uncertainty (p. ix):** correct (100-mL cylinder read to 0.1 mL; 50-mL buret to 0.01 mL; 12.300 g; equation rendering OK). It never points to Appendix F.3, where the counting rules and the worked example are.
- **Cover drawing (fig/cover/cover_dan.png):** each C–O link in "carbon dioxide" is drawn as three parallel lines, which reads as two triple bonds; CO₂ is O=C=O. Hand-drawn cartoon, so possibly intentional bar outline; verify intent.

### Appendices (rendered)
- **App A (pp. 209–211):** labels match drawings. Buret drawing labelled "0 … 25" while the front matter example is a 50-mL buret (minor). Items the experiments use but Appendix A does not show: balance (5 labs), wire gauze/mesh, filter paper, TLC plate and developing chamber, capillary tubes, fermentation tube, cheesecloth. Table A.1 leaves ~60% of p. 211 blank (acceptable; next appendix starts on a new page by design).
- **App B (pp. 212–213):** "(methyldisulfanyl)methane" breaks mid-word as "(methyldisulfanyl)metha / ne" in the IUPAC-name column. General structures for alkene (R on all four positions) and aldehyde imply R is never H, while R is defined as "a carbon-containing group"; methanal and ethene are therefore not covered by the general structures shown.
- **App C (pp. 214–218):** all names, priorities, substituent names and locant rules check (see §4). Step 5 says "Stereodescriptors go at the front in parentheses", but *cis*/*trans* and D/L are not parenthesized (Table C.4 itself writes "*trans*-4-methyl-2-pentene").
- **App D (pp. 219–221):** Table D.1 header "Electron groups" wraps as "Electro / n / groups" (column 900 twips too narrow); repeats on p. 220.
- **App E (pp. 222–227):** E.1 paragraph splits after its fourth sentence and **p. 222 is ~70% blank**; the last two sentences ("The sugars in bold… (Experiment #8).") sit alone at the top of p. 223 above Figure E.1. Table E.1: the first section header "Nonpolar (hydrophobic) side chains" renders **not bold** while the other section headers are bold (cause: `hd()` wraps text in `**` and the header row is already bold, so `runs()` toggles bold off; appendix.js:211). Table E.1 has `repeat:false`, so Tyrosine sits alone on p. 226 with four empty cells and no header. Fatty-acid skeletal drawings have the –COOH drawn three different ways (OH down-right, O up-right, OH below) – cosmetic.
- **App F (pp. 228–231):** dimensional-analysis line wraps as "= 2.4 × / 10⁹ s" (p. 230). Table F.4 spills one row (sulfite/thiosulfate) onto p. 231. Periodic table: Pb shows "207.2" (one decimal) although the caption says all values are rounded to two decimals.
- No figure or table numbering errors; all internal cross-references (Figure C.1 ↔ Example 9, Step 6 in C.4, Table C.2, Experiment #8, Experiment #10) point to the right items. Figure order A.1, A.2, C.1, E.1, E.2, F.1 is cited in order.

---

## 4. Science and calculations (appendices and front matter)

### Appendix B – functional groups
All 17 example names verified: propane; ethene; ethyne; methylbenzene; chloroethane; ethanol; phenol; ethanethiol; (methylsulfanyl)methane and (methyldisulfanyl)methane (correct 2013 substitutive names); methoxyethane; ethanal; propanone; ethanoic acid; methyl ethanoate; ethanamine; ethanamide. General structures correct (amine drawn as R–NH₂, amide as R–CO–NH₂). Amine 1°/2°/3° and alcohol 1°/2°/3° definitions correct.

### Appendix C – IUPAC
- Table C.2 seniority (acid > ester > amide > nitrile > aldehyde > ketone > alcohol/phenol > thiol > amine; anhydride between acid and ester; acid halide between ester and amide) matches P-41 of the 2013 recommendations. Prefixes (carboxy-, alkoxycarbonyl-, carbamoyl-, cyano-, oxo-/formyl-, hydroxy-, sulfanyl-, amino-) correct.
- Table C.3 systematic names (propan-2-yl, butan-2-yl, 2-methylpropyl, 2-methylpropan-2-yl, ethenyl, phenylmethyl) and alphabetizing letters correct; *sec*/*tert* ignored, *iso* counted (earlier "sec-/tert- counted" error: **FIXED**).
- Step 2/3 rules and the "chain length before unsaturation; ring over chain" note match 2013 rules. Elision examples (propan-2-ol, butanal, ethanethiol, propane-1,2-diol) correct.
- Table C.4 – every structure checked against its SMILES and drawing:
  1. CCOCCC = 1-ethoxypropane ✓ 2. CC(Cl)CC(C)=O = 4-chloropentan-2-one ✓ (earlier "4-choropentan-2-one": **FIXED**) 3. CCC(CC)C(C)(C)C = 3-ethyl-2,2-dimethylpentane, {2,2,3} < {3,4,4} ✓ 4. C/C=C/C(C)C = (*E*)-4-methylpent-2-ene ✓ 5. CC(=O)CCO = 4-hydroxybutan-2-one ✓ 6. 3-aminopropanoic acid ✓ 7. 1-*tert*-butyl-3-ethylbenzene (meta; first-cited gets 1) ✓ 8. 1-isopropyl-4-methylbenzene / 1-methyl-4-(propan-2-yl)benzene ✓ 9. `C[C@H](Cl)[C@@H](O)C(=O)O`: C3 priorities Cl > C2 > CH₃ > H → *S*; C2 priorities OH > C3(Cl) > COOH > H (Cl outranks O at the first point of difference) → *S*. (2*S*,3*S*) ✓.

### Appendix D – shapes and electronegativity
- VSEPR rows (180°, 120°, <120° imine N, 109.5°, ~107°, ~104.5°; sp/sp²/sp³) correct; drawings show correct lone pairs (1 on imine N, 1 on NH₃, 2 on H₂O).
- Pauling values checked against the standard (Allred-revised) table: H 2.20; Li 0.98, Be 1.57, B 2.04, C 2.55, N 3.04, O 3.44, F 3.98; Na 0.93, Mg 1.31, Al 1.61, Si 1.90, P 2.19, S 2.58, Cl 3.16; K 0.82, Ca 1.00, Ga 1.81, Ge 2.01, As 2.18, Se 2.55, Br 2.96, Kr 3.00; Rb 0.82, Sr 0.95, In 1.78, Sn 1.96, Sb 2.05, Te 2.10, I 2.66, Xe 2.60 – all correct (earlier "old EN values": **FIXED** in the appendix).
- Table D.3 ΔEN recomputed: C–C 0; C–S 2.58−2.55 = 0.03; C–H 2.55−2.20 = 0.35 (→0.4, nonpolar); C–N 3.04−2.55 = 0.49 (→0.5, polar); C–Cl 3.16−2.55 = 0.61; N–H 3.04−2.20 = 0.84; C–O 3.44−2.55 = 0.89; O–H 3.44−2.20 = 1.24; Na–Cl 3.16−0.93 = 2.23; K–F 3.98−0.82 = 3.16. All correct and all fall in the stated bands (cutoff decision 0–0.4 / 0.5–1.8 / ≥1.9 as recorded in OER_MANUAL_NOTES: **as decided**).
- **Cross-document conflict:** Exp 1 (exp01.js:76) still teaches the old rounded values "H 2.1, C 2.5, N 3.0, Cl 3.0, O 3.5" and "C–H … (difference 0.4)", while Appendix D gives H 2.20, C 2.55, N 3.04, Cl 3.16, O 3.44 and C–H 0.35. Classification agrees, numbers do not (old-EN fix is therefore only PARTLY applied manual-wide).

### Appendix E – biomolecules
- Figure E.1: all 15 D-aldoses (C2→C5 OH pattern, R = right): allose RRRR, altrose LRRR, glucose RLRR, mannose LLRR, gulose RRLR, idose LRLR, galactose RLLR, talose LLLR; ribose RRR, arabinose LRR, xylose RLR, lyxose LLR; erythrose RR, threose LR; glyceraldehyde R – **all correct**.
- Figure E.2: DHA; D-erythrulose R; D-ribulose RR; D-xylulose LR; D-psicose RRR; D-fructose LRR; D-sorbose RLR; D-tagatose LLR – **all correct**.
- Text: "the most oxidized carbon (C1) at the top" is wrong for ketoses (C2 is the most oxidized; C1 is the CH₂OH). 
- Table E.1: all 20 SMILES are the L-zwitterions; CIP checked by hand for Ala (*S*), Ile (2*S*,3*S*), Thr (2*S*,3*R*), Pro (*S*); Cys *R* statement correct. Charges at pH 7.4 (Asp/Glu −, Lys/Arg +, His mostly neutral) correct; essential-amino-acid list (H I L K M F T W V) correct. His is listed under "Basic (positive)" but drawn and described as neutral – acceptable given the note, but could confuse.
- Table E.2: carbon counts and double-bond positions verified from SMILES (palmitoleic 16:1 Δ9, oleic 18:1 Δ9, linoleic 18:2 Δ9,12, α-linolenic 18:3 Δ9,12,15, arachidonic 20:4 Δ5,8,11,14); ω numbers 7, 9, 6, 3, 6 correct; mp 44/54/63/70/0/13/−5/−11/−50 °C agree with literature within ±1 °C.
- **Drawing vs text conflict:** the text says the *cis* double bonds "bend the chain", but the skeletal drawings force every chain straight (the C=C is drawn horizontal with ~150° angles at the alkene carbons), so the unsaturated acids look as straight as stearic acid. This undercuts the packing/melting-point argument in Exp 10.
- "The melting points match Table 2 in Experiment #10": Exp 10 Table 2 has no arachidonic acid; the other eight match exactly (exp10.js:22–28).

### Appendix F – reference data
- Periodic table masses (all 118 read from the rendered figure): every value equals the current IUPAC abridged/conventional standard atomic weight rounded to 2 decimals (e.g., Se 78.97, Cd 112.41, Hf 178.49, Yb 173.05, Zr 91.22, Ge 72.63, Te 127.60); radioactive mass numbers (Tc 97, Pm 145, Po 209, At 210, Rn 222, Fr 223, Ra 226, Ac 227, Np 237, Pu 244 … Og 294) are standard choices. Earlier "old atomic mass values": **FIXED**. Only Pb is shown to one decimal (207.2).
- Constants recomputed: 0.082057 × 298.15 = 24.47 → 24.5 L/mol ✓; 22.4 L/mol at 0 °C, 1 atm ✓; 101.325 kPa, 14.7 psi ✓; 1 kg = 2.205 lb, 1 lb = 453.6 g, 1 oz = 28.35 g ✓; 1 L = 1.057 qt, 1 gal = 3.785 L, 1 qt = 946.4 mL, 1 fl oz = 29.57 mL ✓; 1 m = 39.37 in, 1 mi = 1.609 km ✓; 4.184 J/(g·°C) = 1.00 cal/(g·°C) ✓.
- Dimensional analysis: 76 × 365 × 24 × 60 × 60 = 76 × 31,536,000 = **2,396,736,000 s** ✓ → 2.4 × 10⁹ s (2 s.f.) ✓. "the conversion factors are exact" is true for h/min/s but 365 d/yr is a chosen convention, not exact.
- Sig-fig examples: 61.4 (3), 306 (3), 5.029 (4), 0.00783 (3), 4.7200 (5), 82.0 (3), 7000 (1–4), 7 × 10³ (1), 7.0 × 10³ (2) – all correct. Rules agree with the front-matter Measurements page.
- Equations, 24 polyatomic ions, and solubility rules (incl. Ca/Ag sulfate and Ca/Sr/Ba hydroxide notes) correct.

### Front matter science
- Measurements page: reading precision examples, sig-fig rules, random vs systematic error, percent error/yield formulas all correct.
- To the Student: claims (identify unknowns, measure purity, vitamin C in juice) match Exps 3–5, 11, 15. Section-order list matches the actual experiment layout.

### Status of earlier review items touching this scope
REVIEW_FINDINGS.md has no appendix or front-matter section. From OER_MANUAL_NOTES.md:
| Earlier item | Status |
|---|---|
| *sec*-/*tert*- counted in alphabetizing | FIXED (appendix.js:146, Table C.3, Ex 7) |
| Old electronegativity values | FIXED in App D; PARTLY manual-wide (Exp 1 still uses old values, exp01.js:76) |
| Old atomic mass values | FIXED |
| "4-choropentan-2-one" | FIXED |
| App D ΔEN cutoffs 0–0.4 / 0.5–1.8 / ≥1.9 | FIXED as decided |
| Acknowledgments wording "Confirm with your OER coordinator" | STILL OPEN (no record of confirmation; text unchanged) |
| Stock clip-art cover and third-party appendix charts replaced | FIXED (all appendix figures generated from repo sources) |

---

## 7. Findings list

| ID | Exp | Section/step | PDF printed page | source file:line | Quote or issue | Priority | Class | Proposed action | Who must approve |
|---|---|---|---|---|---|---|---|---|---|
| AF-01 | FM | License page, Companion textbook | (PDF p.2, unnumbered) | source/src/frontmatter.js:33 | "whose lab connection sections link to the matching experiments here." Textbook has no links to the manual and uses old 14-lab numbers (see textbook-crosswalk.md). | P1 | Editorial | Replace sentence with: "**Companion textbook.** This manual is written to accompany the CHEM 3B open textbook on LibreTexts, whose “In the Lab” boxes describe the related experiments." | Co-author |
| AF-02 | FM | README intro | n/a | README.md:7 | "whose \"In the Lab\" boxes link to these experiments." Not true yet. | P1 | Editorial | Replace "whose \"In the Lab\" boxes link to these experiments." with "whose \"In the Lab\" boxes describe the related experiments." | Co-author |
| AF-03 | FM | Suggested attribution | (PDF p.2) | source/src/frontmatter.js:30; README.md:49; index.html:109 | License page attribution has no URL; README uses github.com URL, index uses github.io URL. | P2 | Editorial | In frontmatter.js:30, after "licensed under CC BY 4.0." add " https://itsdrdan.github.io/chem3b-lab-manual/"; in README.md:49 replace "https://github.com/ItsDrDan/chem3b-lab-manual" with "https://itsdrdan.github.io/chem3b-lab-manual/". | Co-author |
| AF-04 | All | Per-experiment DOCX metadata and pages | n/a | source/lablib.js:43 | All 15 docx/experiments files and the draft have `dc:creator` "CHEM 3B", no title, no license; no CC BY notice on any page of a single-lab PDF or DOCX. | P2 | Editorial | In lablib.js:43 change `creator:'CHEM 3B'` to `creator:'Daniel Kwasniewski and Alexandra Aloia',description:'CC BY 4.0'`; add to the single-lab footer the text "CHEM 3B Laboratory Manual · CC BY 4.0" (and the same in master.js footer for consistency). Rebuild. | Co-author |
| AF-05 | FM | Full DOCX metadata | n/a | source/master.js:61 | `creator:'Daniel Kwasniewski and Alexandra Aloia'` vs PDF Author "Daniel Kwasniewski, Ph.D. and Alexandra Aloia"; lastModifiedBy "Un-named". | P3 | Editorial | Optional: set `creator:'Daniel Kwasniewski, Ph.D. and Alexandra Aloia'`, add `lastModifiedBy:'Daniel Kwasniewski'`. | Co-author |
| AF-06 | FM | README/index part order | n/a | README.md:39; index.html:64 | "Goals, Introduction, Hazards and Safety, Waste Instructions, Pre-Lab Questions, Procedure, Report Sheet…" Actual order puts Procedure before Pre-Lab. | P3 | Editorial | README.md:39 → "Every experiment has the same parts: Goals, Introduction, Hazards and Safety, Waste Instructions, Procedure, Pre-Lab Questions, Report Sheet, and Questions and Problems." index.html:64 → "Each experiment has Goals, an Introduction, Hazards and Safety, Waste Instructions, the Procedure, Pre-Lab Questions, a Report Sheet, and Questions and Problems." | Editor |
| AF-07 | FM | Contents vs running headers | i; all body pages | source/master.js:9–12 | Titles/Contents "Experiment #1:" vs running header "Experiment 1:"; appendices header always "Appendices". | P3 | Editorial | Make one style, e.g. change LABS headers in master.js to "Experiment #1: Functional Groups" … ; optional per-appendix headers. | Editor |
| AF-08 | FM | Acknowledgments | (PDF p.2) | source/src/frontmatter.js:32 | OER_MANUAL_NOTES: "Confirm the wording with your OER coordinator." No record it was confirmed. | P2 | Science | Get OER coordinator sign-off on the acknowledgment of the commercial manual origin; record it in OER_MANUAL_NOTES. | Co-authors + OER coordinator |
| AF-09 | FM | Cover / edition status | (PDF p.1–2) | source/src/frontmatter.js:19, 28 | Cover/license say "2026 Edition"; README/index say "Working draft… may change". | P3 | Editorial | Authors decide; if still a draft, cover line 19 → "2026 Edition (working draft)". | Co-authors |
| AF-10 | FM | Cover art | (PDF p.1) | source/fig/cover/cover_dan.png | CO₂ links drawn as three parallel lines each (reads as triple bonds; CO₂ is O=C=O). | P3 | Science | Confirm intent; if meant as double bonds redraw with two lines. | Co-author (artist) |
| AF-11 | FM | Measurements and Uncertainty | ix | source/src/frontmatter.js:176 | No pointer to the counting rules and worked example in Appendix F.3. | P3 | Editorial | After "Keep extra digits during a calculation; round only the final answer." add bullet: "Appendix F.3 lists the rules for counting significant figures, with a worked example." | Editor |
| AF-12 | App A | Fig A.1, Table A.1 | 209–211 | source/src/appendix.js:38–66; fig/figapp_equip.py:37 | Balance, wire gauze, filter paper, TLC plate/chamber, capillary tubes, fermentation tube not shown though used in labs; buret drawing labelled 0…25 while text cites a 50-mL buret. | P3 | Editorial | Optional: add rows "**Balance** – Weighing solids and liquids; record every digit shown." and "**TLC plate and developing chamber** – Thin-layer chromatography (Experiment #11)."; relabel buret "0 … 50" or drop the bottom number. | Editor |
| AF-13 | App B | Table B.1 disulfide row | 212 | source/src/appendix.js:83 | "(methyldisulfanyl)metha / ne" broken mid-word. | P2 | Editorial | Change widths at appendix.js:73 from `[1560,1750,2000,2250,1800]` to `[1560,1750,1800,2450,1800]`. | Editor |
| AF-14 | App B | Intro / general structures | 212 | source/src/appendix.js:70 | R defined only as a carbon group; alkene and aldehyde general structures then exclude ethene/methanal-type cases. | P3 | Science | Append to the intro paragraph: "In some classes, such as alkenes and aldehydes, an R group may also be a hydrogen atom." | Co-author |
| AF-15 | App C | Step 5 | 216 | source/src/appendix.js:144 | "Stereodescriptors go at the front in parentheses, with their locants: (*E*)-, (2*S*,3*S*)-." *cis/trans* and D/L are not parenthesized (Table C.4 writes *trans*-4-methyl-2-pentene). | P3 | Editorial | Replace with: "*E/Z* and *R/S* descriptors go at the front in parentheses, with their locants: (*E*)-, (2*S*,3*S*)-. *cis-*, *trans-*, D- and L- are written at the front without parentheses (*trans*-but-2-ene, D-glucose)." | Co-author |
| AF-16 | App D | Table D.1 header | 219–220 | source/src/appendix.js:171 | Header renders "Electro / n / groups". | P2 | Editorial | Change widths `[900,800,1800,1150,2350,2360]` to `[1100,700,1800,1100,2300,2360]`. | Editor |
| AF-17 | App D / Exp 1 | Electronegativity values | 220–221 vs Exp 1 intro | source/src/exp01.js:76 vs appendix.js:184–196 | Exp 1: "H 2.1, C 2.5, N 3.0, Cl 3.0, O 3.5 … C–H … (difference 0.4)"; App D: H 2.20, C 2.55, N 3.04, Cl 3.16, O 3.44, C–H 0.35. | P2 | Science | Make Exp 1 use the Appendix D values: "Electronegativity values (Appendix D): H 2.20, C 2.55, N 3.04, Cl 3.16, O 3.44." and "(difference 0.35)". | Co-author (Exp 1 owner) |
| AF-18 | App E | E.1 text | 222 | source/src/appendix.js:202 | "the carbon chain is vertical with the most oxidized carbon (C1) at the top" – false for ketoses (C2 is most oxidized). | P2 | Science | Replace with: "the carbon chain is vertical with C1 (the end nearest the carbonyl group) at the top". | Co-author |
| AF-19 | App E | E.1 layout | 222–223 | source/src/appendix.js:202–203 | Paragraph split; p. 222 ~70% blank; last two sentences stranded above Fig E.1. | P2 | Editorial | Shrink Fig E.1 so paragraph + figure fit, e.g. appendix.js:203 `fig(F+'figapp_e1.png','…',0.85)`; re-check page map (remap.sh) and Contents. | Editor |
| AF-20 | App E | Table E.1 first header | 225 | source/src/appendix.js:211 | "Nonpolar (hydrophobic) side chains" not bold while other class headers are bold (`**` toggles bold off in a header row). | P3 | Editorial | appendix.js:211 → `const hd=(t,span)=>({t,span,bold:true,shade:'E7ECF5',align:AlignmentType.CENTER});` | Editor |
| AF-21 | App E | Table E.2 drawings | 226–227 | source/fig/figapp_mols.py (FA layout loop) | Text: *cis* double bonds "bend the chain"; drawings show every unsaturated chain straight (C=C forced horizontal, ~150° angles). | P2 | Science | Redraw unsaturated acids with true 120° *cis* geometry (kinked), or add to caption: "Chains are drawn straight to save space; each *cis* double bond actually puts a bend of about 30° in the chain." | Co-author |
| AF-22 | App E | E.3 text | 226 | source/src/appendix.js:222 | "The melting points match Table 2 in Experiment #10." Arachidonic acid is not in Exp 10 Table 2. | P3 | Editorial | Replace with: "The melting points match Table 2 in Experiment #10, which lists all of these fatty acids except arachidonic acid." | Editor |
| AF-23 | App E | Table E.1 split | 225–226 | source/src/appendix.js:219 | `repeat:false`; Tyrosine alone on p. 226 under no header with 4 empty cells. | P3 | Editorial | Accept, or shrink the amino-acid images so the polar rows fit on p. 225: appendix.js:210 change `0.78,112` to `0.70,100`; re-check page map (remap.sh) and Contents. | Editor |
| AF-24 | App F | Fig F.1 caption | 228 | source/src/appendix.js:231 | Caption says masses rounded to two decimals; Pb shown "207.2". | P3 | Editorial | Append to caption: " Lead is given as 207.2 because its atomic weight varies in natural samples." | Editor |
| AF-25 | App F | F.3 dimensional analysis | 230 | source/src/appendix.js:262–263 | Equation wraps "2.4 × / 10⁹ s"; "the conversion factors are exact" includes 365 d/yr (a convention). | P3 | Editorial | Line 262: replace "= 2,396,736,000 s = 2.4 × 10^{9} s" with "= 2,396,736,000 s" and add a new centered line "= 2.4 × 10^{9} s"; line 263: "…the conversion factors are exact (taking 1 yr = 365 d)." | Editor |
| AF-26 | App F | Table F.4 | 230–231 | source/src/appendix.js:286 | One row (sulfite/thiosulfate) spills onto p. 231. | P3 | Editorial | Accept, or reduce F.3 bullet spacing so the table fits on p. 230; re-run remap.sh. | Editor |

Not issues (checked and correct): page offset; Contents numbers; per-experiment PDF cuts and README/index ranges and file sizes; CC BY 4.0 statements and LICENSE text; author order; all Appendix B–F names, structures, stereochemistry, VSEPR angles, EN values, ΔEN arithmetic, atomic masses, constants, sig-fig examples, ions and solubility rules.

Not inspected: safety and waste pages (out of scope); the DOCX was checked for metadata only, not opened in Word for layout.
