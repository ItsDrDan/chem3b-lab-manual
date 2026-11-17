# Accessibility and Print Audit

These are manual checks of the DOCX XML, the generator code, the PDF structure (pypdf), every rendered page of the published PDF (the reviewers read all 242 pages as images or text), and a Word page map before and after the edits. **No automated accessibility checker was run, and no screen-reader test was done.** This file does not claim WCAG compliance.

## DOCX (generated in `source/`)

| Check | Before (74efdc9) | After (audit branch) |
|---|---|---|
| Real heading styles | Yes: Heading 1 (titles), 2, 3 with outline levels; 27 / 75 / 249 used | unchanged |
| Alt text on images | **0 of 164** | **164 of 164**: captions for captioned figures; 42 hand-written descriptions in `source/fig/alt.json`; built from the labels for Appendix cells; fatty acids from chain length and double bonds |
| Document language | **none** | `en-US` in the default style |
| Table header rows marked (repeat on a new page) | 17 rows | 120 rows (every header row of the shared `table()` and Appendix `xtable()`, unless `repeat:false`) |
| Hyperlinks | none in the manual body (the license URL is plain text) | unchanged; a PDF reader will still detect the URL |
| Non-breaking "°C" | broke as "0 / °C" | fixed globally in `runs()` |
| Author metadata in single-lab files | "CHEM 3B" | both authors, title, CC BY 4.0 |
| Words-only color meaning | Figure colors (blue carbon groups, red OH) are always repeated in words or labels. The color-test tables name each color in text. Report fields never need color discrimination. | — |

**Still to do (P2):** alt text for the complex diagrams (TLC plate, fermentation tubes, spot-plate layout, apparatus) is currently the caption. A longer description would help a screen-reader user follow the procedure. The descriptions should be written by someone who knows the bench setup.

## PDF (`pdf/`)

| Check | Result |
|---|---|
| Tagged PDF | **No.** All 18 PDFs are untagged (no StructTreeRoot). |
| Document language | none |
| Bookmarks | none |
| Titles | set on all 18 |
| Page numbering | Printed numbers are consistent: front matter i–ix, body 1–231. Single-lab PDFs keep the full-manual numbers. |

The untagged PDFs come from the export path, not the content. **Fix (needs Daniel, in Word):** File → Save As → PDF → "Best for electronic distribution and accessibility." That keeps tags, the alt text added here, and bookmarks from the headings. Then re-cut the single labs with pypdf. pypdf keeps page content but may drop the structure tree when splitting, so check one split file in Acrobat's Accessibility Checker. If the tags are lost, export each single-lab DOCX on its own.

## Print and layout

Page map measured in Word (`remap.sh`), comparing the original source with the audit branch:

- **242 pages both times.** Every section starts on the same page, so the Contents (`tocpages.json`) is unchanged and correct.
- Pages that end high (y < 250 pt, i.e. mostly empty), before → after:
  - p. 133 (Exp 10 recipe table): **fixed**; the stranded row is gone because the header now repeats.
  - p. 147 (Exp 11): unchanged; the TLC procedure ends early before the page break to the Pre-Lab.
  - p. 222 (Appendix E.1): unchanged, about 70% blank.
- Page breaks moved inside Exps 10, 11, 12, 13 and 15 and Appendix E (header rows and new report rows). No new short pages appeared.

**Open layout items (P2–P3, all in the working notes with exact fixes):**
- Half-blank pages caused by keep-with-next chains: Exp 3 p. 34, Exp 4 p. 47, Exp 6 p. 72, Exp 8 p. 100, Exp 11 p. 143, Exp 12 p. 154, Exp 13 p. 168, Appendix E p. 222.
- Split tables: Exp 2 B.4 header orphaned on p. 23, Exp 6 B.2, Exp 9 Table 1, Exp 14 Table 3. The repeating header now helps where a table splits.
- Small figure text: Exp 8 Figs 3, 4 and 7 print at about 5–6 pt.
- Little answer space: Exp 3 Q.5B, Exp 4 Q.4, Exp 6 Q.6, Exp 13 Pre-lab 7.
- Wrapped cells: Appendix B "(methyldisulfanyl)methane", Exp 10 Table 2 linolenic formula, Exp 5 Table 1 last column.

Each of these changes pagination, so it needs a page-map pass after it is made. They were left for a single layout pass after the content decisions, so the Contents is only re-measured once.

## Not verified here

- Rendering of the rebuilt DOCX as a PDF. Word's PDF export cannot be scripted on this Mac, so the visual check of the reflowed pages in Exps 10–15 waits for the next manual export.
- Grayscale printing. The figures use dark lines on white, and no meaning depends on color alone (checked by eye on the PNGs), but nothing was test-printed.
- Zoom and reflow on phones. The PDFs are fixed-layout.
