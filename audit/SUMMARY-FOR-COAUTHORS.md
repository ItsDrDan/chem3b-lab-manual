# One-page summary for Daniel and Alexandra

*Audit of the CHEM 3B Laboratory Manual, commit 74efdc9 (the live site), 2026-11-17. Fixes are on the local branch `audit/2026-11-17-polish`, which has not been pushed.*

**What is already strong and should stay.** The shared section pattern runs through all 15 labs. The safety and waste sections are clear, use bold labels, and name the same four containers everywhere. The figures are original, and the sugar, amino acid and fatty acid drawings are chemically correct. All worked numbers recompute exactly: aspirin yield, Rf, percent casein, vitamin C and the Appendix F conversions. The appendices are thorough and accurate. The generator is deterministic. Page numbers match across the full manual, the 17 split PDFs and the Contents. Most of the November 15 review items were fixed before this audit.

**What I corrected and verified.**
- **36 small source fixes**, each checked against the exact text. Examples:
  - The Exp 2 isomer step could not be done.
  - Exp 5 said "five tubes" for a four-tube part.
  - Exp 9 cited the wrong figure.
  - Exp 3 never recorded color in its "Color, Odor…" part.
  - Exp 1's electronegativity values conflicted with Appendix D.
  - The Appendix E Fischer rule was wrong for ketoses.
  - Report rows were missing for multiple TLC spots.
  - Two questions had no answer space.
  - A step told students the expected result before they observed it.
  - The license page and README said the textbook boxes link here; they don't yet.
- **Accessibility:**
  - Alt text on all 164 images (there was none).
  - English set as the document language.
  - Header rows marked so they repeat when a table splits.
  - Both authors credited in every Word file.
- **Checks:** the rebuild works, all 15 single labs build, and Word's page map shows the same 242 pages with every section on the same page. Contents is unchanged. One stranded table row (Exp 10 p. 133) is gone.

**P0/P1 publication blockers (I did not change these).** Seven P0 safety contradictions:
- **Exp 11** sends used TLC plates to the trash; the front matter sends them to solid waste.
- **Exp 13** heats tubes over a Bunsen burner at the bench and uses 95% ethanol in the same part. The front matter allows flames only in the hood.
- **Exp 5** pours unquenched Tollens' reagent into the organic waste carboy.
- **Tollens' and chromate waste** (front matter) needs EHS confirmation.
- **Exp 3** says to keep the bromine tubes in the hood but to put them in direct sunlight.
- **Exp 6** heats methanol and acetic acid in a boiling bath at the bench.
- **Exp 7** puts a hot plate in the same hood as triethylamine.

There are also ten P1 hazard-wording conflicts, for example Exp 4's "concentrated" vs "dilute" H₂SO₄ and the Exp 12 hair dryer beside the alcohol solvents. All of these are in SAFETY-EHS-REVIEW-QUEUE.md, with a sign-off table.

**Needs bench testing, the stockroom, or EHS.**
- *Bench:*
  - Exp 3: an HBr litmus control.
  - Exp 6: the NaOH amount and the litmus endpoints; Exp 7 also uses a litmus endpoint.
  - Exp 9: base before the iodine test.
  - Exp 10: bromine drop counts and which safflower oil.
  - Exp 13: AgCl in the silver nitrate tube.
  - Exp 14: the amylase source, its amount, and pH.
- *Stockroom:*
  - The chromate acid strength.
  - The ninhydrin solvent.
  - The iodine concentration.
  - The tube sizes.
  - The Exp 11 TLC supplies.
- *Your decision:*
  - The possible unknowns for Exps 5 and 9.
  - Whether pentyl acetate smells like banana or pear.
  - Whether to add soap, DNA or metabolism labs, which the textbook and course outline expect.
- *EHS:* every item in the safety queue.

**Defer as P3; don't reopen the manual for these.** Figure-font consistency, Cl lone pairs in one drawing, extra Appendix A rows, running-header style, new textbook boxes for Exps 1 and 8, and clinical extras.

**Is it editorially release-ready?** Nearly. After you confirm the handful of changelog items marked **S** and export new tagged PDFs, the student-facing text is editorially sound. It is **not ready for adoption as a safety-approved manual**: the seven P0 safety and waste contradictions must be decided by you and EHS, and the bench items need trials. Honest label for now: **"Editorially ready (pending PDF re-export); EHS and instructor validation pending."**
