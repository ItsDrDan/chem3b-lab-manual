# Science and Answer Check

Every chemical drawing, formula, name, equation and worked number was checked by a reviewer against the source and the rendered PDF. Per-lab detail, with arithmetic shown, is in `audit/working-notes/expNN-NN.md` section 4 and in `appendix-frontmatter.md`. The printed worked examples were recomputed independently by `audit/validate_calculations.py`: **14 of 14 checks pass**.

## Verified correct

- **Calculations:**
  - Exp 11: salicylic acid 138.12 and aspirin 180.16 g/mol; theoretical yield 2.61 g; 86.2% yield; acetic anhydride 3.65-fold excess, so salicylic acid is limiting.
  - Exp 12: Rf 0.39, 0.70, 0.14 (pre-lab 0.54).
  - Exp 13: 3.0% casein.
  - Exp 15: 10.0 mg/mL and 15.0 mg; pre-lab 8.00 mg/mL and 18.0 mg. The 1:1 standardization logic and units are correct.
  - Appendix F: 76 yr = 2,396,736,000 s.
  - All Exp 1 molar masses, isomer counts, names and combustion equations; the sig-fig examples in the front matter and Appendix F.
- **Structures:**
  - Exp 8: every sugar structure, including both glucose anomers, α-maltose, the turned-over β-fructofuranose in sucrose, the amylopectin α-1,6 branch and the flipped units in cellulose.
  - Appendix E: all 23 Fischer projections and all 20 amino acids (L).
  - Exp 12: the zwitterions and the alanine charge forms.
  - Exp 10: the Table 2 fatty-acid formulas (carbon counts recomputed), wax, cholesterol, tripalmitin and dibromination.
  - Exp 11: aspirin and the analgesics.
  - Exp 4: chromic acid products.
  - Exp 5: Q.4 answers (A = propanal, B = acetone).
  - Appendix C: all 9 IUPAC worked examples, including (2S,3S) worked by hand.
  - Appendix D: VSEPR angles and every ΔEN example.
- **Reference data:** all 118 atomic masses in Appendix F (current IUPAC values, rounded); the Appendix D Pauling electronegativities.

## Corrected in this pass (see the CHANGELOG)

- Exp 1 used the old electronegativity values (H 2.1, C 2.5, N 3.0, Cl 3.0, O 3.5), which conflicted with Appendix D. They now match Appendix D. The ≈0.5 polar cutoff gives the same classification for every bond in the lab.
- Appendix E.1 said "the most oxidized carbon (C1) at the top" of a Fischer projection. That is wrong for ketoses, where C2 is the carbonyl carbon. It now reads "C1 at the top, so the carbonyl carbon is as near the top as possible."
- Exp 2 naming rule 2 ("nearest a branch") failed for haloalkanes. It now reads "nearest a substituent (a branch or a halogen atom)."
- Exp 12: the mobile phase was called "much less polar than water"; it is one-third aqueous. Changed to "less polar than the water-coated paper."
- Exp 6 C.3 told students the expected observation (two layers) before they made it. Removed.
- Exp 5 Q.3: "the organic product" → "product(s)" (iodoform gives a carboxylate and CHI₃).

## Open: needs co-author decision or a bench test (not changed)

| ID | Exp | Issue | Priority |
|---|---|---|---|
| F3-02 | 3 | Bromine vapor alone may redden or bleach moist litmus, so the HBr evidence has no control. | P1, BT |
| E6-03 | 6 | 1 mL of 10% NaOH (≈2.5–2.8 mmol) vs ester + phenol (≈3.1–3.9 mmol): saponification may be incomplete. | P1, BT |
| E6-04, F7-02 | 6, 7 | Litmus turns at pH ≈4.5–5. Benzoate, salicylate and the aromatic ammonium ions are still mostly in the "wrong" form there, so the predicted precipitate or dissolution may not appear. | P1, BT |
| E5-04, F9-03 | 5, 9 | The possible unknowns are never listed. Maltose would look like glucose, galactose like lactose, and cyclohexanone gives a false-positive Tollens' result. | P1 |
| F9-02 | 9 | E.2 makes the starch tubes basic before the iodine test, which can bleach the color; the water controls get no base. | P1, BT |
| L10-01/02 | 10 | The Br₂ drop counts may not rank olive oil vs oleic acid. Retail safflower oil is usually high-oleic. | P1, BT |
| E13-03 | 13 | Chloride in the egg white plus Ag⁺ gives AgCl, which can be mistaken for denatured protein. | P1 |
| E14-01 to 04 | 14 | The amylase source and concentration are unstated; Parts B–D use 8–27× the enzyme of Part A; Part C mixes buffers with pH-7-buffered starch and graphs nominal pH. | P1, BT |
| F9-12 | 9 | Benedict's has no caveat for other reducing substances (vitamin C in fruit juice). | P2 |
| E13 D.3 | 13 | Calls the measured whey pH "its isoelectric point." | P2 |
| D-10 | 6 | Pentyl acetate: manual says banana; textbook says pear (isopentyl acetate = banana). | P2 |
| App E | E | Fatty-acid drawings show the unsaturated chains straight, while the text says cis bonds bend them. | P2 |

## Questions and answer keys

- Pre-lab and post-lab questions were checked for answerability. Unanswerable or ambiguous items are logged per lab (section 5 of each working-notes file). Examples: Exp 15 Q.6 compares 20 mL of juice with 1 g of powder on no common basis, and Exp 5 Q.3's fourth compound was already changed in the earlier review.
- **Answers are not printed in the student pages.** One near-give-away was found and fixed: Exp 14 Fig 2's example colors in the same layout as the student grid; the caption now says the colors are an example only. An earlier give-away (Exp 2 report table names) was already fixed.
- **Instructor-only answer guide: not written in this pass.** It belongs in a separate, non-public file, and it should be written after the bench-test items above are settled, since several expected observations may change. Listed in RELEASE-GATE.md as a P2 deliverable.
