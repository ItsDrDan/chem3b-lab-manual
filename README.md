# CHEM 3B Laboratory Manual: Introductory Organic and Biological Chemistry

**Daniel Kwasniewski, Ph.D. and Alexandra Aloia**

**Website:** https://itsdrdan.github.io/chem3b-lab-manual/

An open educational resource (OER) laboratory manual with 16 experiments and a chirality workshop for a one-semester introductory organic and biological chemistry course. It goes with the CHEM 3B textbook on LibreTexts, whose "In the Lab" boxes describe the related experiments.

> **Working draft.** This is the current working edition, still being refined. Experiment numbers and procedures may change before the final release.

Licensed under [CC BY 4.0](LICENSE): you may share and adapt it, including commercially, as long as you give credit.

## Download

**Full manual:** [PDF (287 pages)](pdf/CHEM3B_Lab_Manual_OER.pdf) · [Word](docx/CHEM3B_Lab_Manual_OER.docx)

| # | Experiment | PDF | Word | Pages |
|---|---|---|---|---|
| | Front matter and safety (To the Student, Laboratory Safety, Safety Agreement, Chemical Waste Disposal, Notebooks and Reports, Measurements and Uncertainty) | [PDF](pdf/experiments/00_FrontMatter_Safety.pdf) | in the full manual | i–ix |
| 1 | Functional Groups | [PDF](pdf/experiments/Exp01_FunctionalGroups.pdf) | [Word](docx/experiments/Exp01_FunctionalGroups.docx) | 1–13 |
| 2 | Structures of Alkanes | [PDF](pdf/experiments/Exp02_StructuresOfAlkanes.pdf) | [Word](docx/experiments/Exp02_StructuresOfAlkanes.docx) | 14–28 |
| 3 | Hydrocarbons | [PDF](pdf/experiments/Exp03_Hydrocarbons.pdf) | [Word](docx/experiments/Exp03_Hydrocarbons.docx) | 29–44 |
| 4 | Alcohols and Phenols | [PDF](pdf/experiments/Exp04_AlcoholsPhenols.pdf) | [Word](docx/experiments/Exp04_AlcoholsPhenols.docx) | 45–60 |
| 5 | Aldehydes and Ketones | [PDF](pdf/experiments/Exp05_AldehydesKetones.pdf) | [Word](docx/experiments/Exp05_AldehydesKetones.docx) | 61–77 |
| 6 | Carboxylic Acids and Esters | [PDF](pdf/experiments/Exp06_CarboxylicAcidsEsters.pdf) | [Word](docx/experiments/Exp06_CarboxylicAcidsEsters.docx) | 78–90 |
| 7 | Amines and Amides | [PDF](pdf/experiments/Exp07_AminesAmides.pdf) | [Word](docx/experiments/Exp07_AminesAmides.docx) | 91–105 |
| 8 | Types of Carbohydrates | [PDF](pdf/experiments/Exp08_TypesOfCarbohydrates.pdf) | [Word](docx/experiments/Exp08_TypesOfCarbohydrates.docx) | 106–120 |
| 9 | Tests for Carbohydrates | [PDF](pdf/experiments/Exp09_TestsForCarbohydrates.pdf) | [Word](docx/experiments/Exp09_TestsForCarbohydrates.docx) | 121–135 |
| 10 | Lipids | [PDF](pdf/experiments/Exp10_Lipids.pdf) | [Word](docx/experiments/Exp10_Lipids.docx) | 136–147 |
| 11 | Aspirin and Analgesics | [PDF](pdf/experiments/Exp11_Aspirin.pdf) | [Word](docx/experiments/Exp11_Aspirin.docx) | 148–161 |
| 12 | Amino Acids | [PDF](pdf/experiments/Exp12_AminoAcids.pdf) | [Word](docx/experiments/Exp12_AminoAcids.docx) | 162–175 |
| 13 | Peptides and Proteins | [PDF](pdf/experiments/Exp13_PeptidesProteins.pdf) | [Word](docx/experiments/Exp13_PeptidesProteins.docx) | 176–189 |
| 14 | Enzymes | [PDF](pdf/experiments/Exp14_Enzymes.pdf) | [Word](docx/experiments/Exp14_Enzymes.docx) | 190–203 |
| 15 | Vitamins | [PDF](pdf/experiments/Exp15_Vitamins.pdf) | [Word](docx/experiments/Exp15_Vitamins.docx) | 204–217 |
| 16 | Nucleic Acids and DNA Extraction | [PDF](pdf/experiments/Exp16_NucleicAcids.pdf) | [Word](docx/experiments/Exp16_NucleicAcids.docx) | 218–236 |
| W | Workshop: Chirality Stations (directions and the 20-station answer sheet) | [PDF](pdf/experiments/Workshop_Chirality.pdf) | [Word](docx/experiments/Workshop_Chirality.docx) | 237–244 |
| | Appendices A–F (equipment, functional groups, IUPAC naming, molecular shapes and electronegativity, biomolecules, periodic table and reference data) | [PDF](pdf/experiments/16_Appendices.pdf) | in the full manual | 245–267 |

Page numbers are the manual's printed page numbers. Each experiment PDF and Word file keeps them (with the same running header), so a single lab matches the full manual. Every PDF has bookmarks for its sections.

**Accessibility:** the Word files have real heading levels, alt text on every figure, document language, and repeating table headers. The PDFs have bookmarks and a document language but are not yet tagged for screen readers; for a screen reader, use the Word file.

Every experiment has the same parts: Goals, Introduction, Hazards and Safety, Waste Instructions, Procedure, Pre-Lab Questions, Report Sheet, and Questions and Problems.

## Alternate version

- [Experiment 12, paper chromatography version](drafts/Exp12_AminoAcids_PaperChromatography_ALTERNATE.docx): the earlier Experiment 12, using chromatography paper instead of the cellulose TLC plates now in the manual. Kept for courses without TLC plates (source: `source/src/exp12_paper.js`).

## How to cite or adapt

Suggested attribution:

> *CHEM 3B Laboratory Manual: Introductory Organic and Biological Chemistry* by Daniel Kwasniewski and Alexandra Aloia, licensed under CC BY 4.0. https://github.com/ItsDrDan/chem3b-lab-manual

If you adapt the manual, say what you changed. Every figure in the manual is original and covered by the same license.

**Safety note:** the procedures are written for a supervised teaching laboratory. Check every chemical, concentration and waste instruction against your own institution's safety rules and Safety Data Sheets before you use them.

## Building from source

The Word files are generated by code in [`source/`](source/) using [docx](https://www.npmjs.com/package/docx) for Node.js.

```bash
cd source
npm install
NOPROMPT=1 TOCJSON=tocpages.json node master.js fig out/CHEM3B_Lab_Manual.docx
```

- `src/exp01.js` … `src/exp16.js` hold one experiment each. `src/frontmatter.js` holds the front matter and `src/appendix.js` the appendices. `lablib.js` has the shared styles and helpers.
- Running a single lab file, for example `node src/exp04.js fig out/exp04.docx`, writes that experiment alone (pages numbered from 1). To write one part exactly as it appears in the manual (running header and manual page numbers), use `PART=exp04 NOPROMPT=1 TOCJSON=tocpages.json node master.js fig out/exp04.docx` (`PART` can also be `front` or `appendix`); the files in `docx/experiments/` are made this way.
- `fig/` has the figures as PNGs, along with the HTML/SVG source each one was drawn from. `svg2png.sh` re-renders them with headless Chrome.
- The Contents page numbers come from `tocpages.json`. After a layout change on macOS with Microsoft Word, `./remap.sh N` re-measures every page and lists pages that spill. Because the manual is laid out for binding (a blank page after the cover, and every lab, the workshop and the appendices starting on a right-hand, odd-numbered page), Word adds blank pages that its page map does not count. So take the Contents numbers from an exported PDF instead: `python3 tools/toc_from_pdf.py <exported manual.pdf> tocpages.json`, rebuild, and export again. `tools/cut_pdfs.py` checks that every section starts on an odd page.
