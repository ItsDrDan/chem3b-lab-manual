# Release Gate

**Release status: editorially improved and close to student-ready. Not safety-approved. EHS sign-off, stockroom answers and instructor bench validation are still pending.**

The manual should not be called "safe," "bench-tested" or "publication ready." It is fine to keep it online as the clearly labeled working draft it already is.

## Summary of findings

Counts are from the reviewers' merged tables (`audit/working-notes/`), plus this file's own cross-lab safety items.

| Priority | Found | Fixed in source on this branch | Routed for a human decision | Left open |
|---|---|---|---|---|
| **P0** (release blocker) | 7: S-01 to S-07 | 0. Every P0 is a safety or waste decision that cannot be made editorially. | 7 → SAFETY-EHS-REVIEW-QUEUE.md §A | — |
| **P1** | about 35 | 10 editorial: Exp 2 B.2 and Q.5, Exp 3 color, Exp 5 "four tubes," license-page textbook claim, README claim, alt text (0 → 164 images), document language, the Exp 1 electronegativity conflict, Exp 13 Q.7 space | 10 safety (S-10 to S-19) and about 15 science/bench (decision register D-2 to D-9, D-11) | — |
| **P2** | about 120 | about 20 (report rows, captions, wording, table headers, °C wrapping, metadata) | cross-lab safety consistency (queue §C) | layout pass (ACCESSIBILITY-AND-PRINT-AUDIT.md), tube sizes, complex-figure long descriptions |
| **P3** | about 60 | a few that came with other fixes | — | deferred (see below) |

## Tests and builds run

| Test | Result |
|---|---|
| Rebuild of `74efdc9` vs the published DOCX | byte-identical `document.xml` and `styles.xml` |
| Full manual build on the audit branch (`master.js`) | OK; 25 sections; 0 "object Object"; 164/164 images with alt text; language `en-US` |
| All 15 single-lab builds (`node src/expNN.js`) | OK |
| Word page map before and after (`remap.sh`) | 242 → 242 pages; all 27 Contents entries unchanged; spill pages 3 → 2 (both pre-existing) |
| `audit/validate_calculations.py` | 14/14 pass |
| Live-site link check (37 links) | 37 × HTTP 200; live files = commit `74efdc9` |
| Visual inspection | all 242 pages of the **published** PDF (reviewers); the reflowed pages of the new PDF rendered and checked |

## Deliverables regenerated (2026-11-17, second commit)

- `docx/`: the full manual and all 15 single-lab Word files were rebuilt from the audit-branch source. Alt text, language and both authors' names are in each file.
- `pdf/`: the full PDF was exported from Microsoft Word on the audit-branch DOCX. The 17 section PDFs were cut from it with the same page ranges and titles as before. All 242 pages are present; the printed page number on all 231 numbered pages matches (PDF page − 11), and each section file starts on its own title page.
- Reflowed pages were inspected as rendered images: Exp 2 p. 19, Exp 10 pp. 132–133 (the stranded table row is gone), Exp 11 p. 151, Exp 12 p. 165, Exp 13 pp. 172–173, Appendix E p. 227. Layout is correct.
- `index.html` file sizes still round to the same values, so no change was needed.
- **The PDFs are still untagged.** Word's scripted export goes through the macOS Quartz PDF engine, which does not write tags. The alt text is in the Word files; a tagged PDF still needs Word's interactive Save As PDF → "Best for electronic distribution and accessibility."
- New cosmetic item (P3): Word can break a line between a bond dash and its group (for example "–" / "CH₃" in Exp 2 B.2). A word-joiner fix was tried, but Word ignores it, so it was reverted.

## Not done

1. **Push and publish.** Not done; wait for both co-authors.
2. **Tagged PDF export** (see above).
3. **EHS and stockroom review** of the safety queue, with the sign-off table filled in.
4. **Bench trials** for the items marked BT (Exps 3, 6, 7, 9, 10, 13, 14).
5. **Instructor-only answer and prep guide.** Recommended as a separate, non-public file once the bench items are settled.
6. **Layout pass** for the P2/P3 page-break items (one pass, then `remap.sh` and `toc_from_map.py`).

## Deferred as P3 (do not reopen the manual for these)

- Lone pairs on Cl in the Exp 1 A6 drawing.
- Sans-serif RDKit labels in a few figures.
- Exp 3 Fig 3 shows benzene while the lab uses toluene.
- More equipment rows in Appendix A.
- Optional new textbook boxes for Exps 1 and 8.
- Running-header style ("Experiment 1:" vs "Experiment #1:").
- Clinical-connection extras: the manual already ties to health where it is legitimate (aspirin, vitamins, enzymes, carbohydrates). No new patient storylines were added, by design.

## What must be true before calling this a release

- [ ] Every P0 in the safety queue has a recorded decision, and the manual text matches that decision everywhere (front matter, the lab's Waste section, procedure steps, pre-lab questions).
- [ ] The P1 safety wording items (S-10 to S-19) are resolved.
- [ ] The unknown sets for Exps 5 and 9 are defined.
- [ ] Bench results are recorded for the BT items, or the affected steps are marked "instructor demonstration / under trial."
- [x] PDFs re-exported, re-cut, and the reflowed pages inspected.
- [ ] Tagged PDF export (interactive Word Save As).
- [ ] The acknowledgments wording is confirmed by the OER coordinator. The cover edition label matches the release status.
- [ ] Both co-authors approve the CHANGELOG items marked **S**.
