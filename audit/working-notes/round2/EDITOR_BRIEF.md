# Brief: editing labs in the CHEM 3B Lab Manual (co-author-requested changes)

You are editing one or more experiments of an open (CC BY 4.0) introductory organic/biochemistry lab manual for allied-health community-college students. The co-authors (Daniel Kwasniewski and Alexandra Aloia) asked for the changes in your task. **Edit only the files your task names.** Other agents are editing other labs at the same time.

## Files and build
- Repo: `<repo>/` (git branch `audit/2026-11-17-polish`; do not commit, do not switch branches, do not push).
- Each lab is `source/src/expNN.js`. Shared helpers in `source/lablib.js` (read it first; do not edit it). Markup in strings: `**bold**`, `*italic*`, `_{sub}`, `^{sup}`. `bullet(text)` takes ONLY a string (never an options object).
- Build one lab from `source/`: `~/.local/node/bin/node src/expNN.js fig out/expNN.docx`. After building: `unzip -p out/expNN.docx word/document.xml | grep -c "object Object"` must print 0. To read the built text: `python3 -I -c "import zipfile,re;print(re.sub(r'<[^>]+>',' ',zipfile.ZipFile('out/expNN.docx').read('word/document.xml').decode()))" | tr -s ' '`.
- Figures: `source/fig/`. Draw new figures as SVG inside an HTML file (see existing `fig/figNN_*.html` and the helper `fig/chem.js` for condensed formulas), then render: `cd source && ./svg2png.sh "$PWD/fig/NAME.html" "$PWD/fig/NAME.png"` (headless Chrome; width/height come from the first `<svg>`). **Open every PNG you make with the Read tool** and fix overlaps, clipping, and wrong chemistry. Use Times New Roman (serif) labels like the existing figures, black lines, blue/red only as accents that are also stated in words.
- Captioned figures get alt text from the caption automatically. For any image placed **without** a caption, add an entry to `source/fig/alt.json` (key = PNG file name, value = a description that does not give away a question's answer). Edit alt.json with a careful exact-string insertion; another agent may also add keys.

## New shared pieces you must use
- `lablib.js` now adds a **Pre-Lab check stamp box** under every "Pre-Lab Questions" heading and a **Lab Check-Out stamp box** at the end of every Report Sheet automatically, and renames the headings to "Report Sheet: Data Collection" and "Post-Lab Report: Questions and Problems". Keep calling `h2('Pre-Lab Questions',…)`, `h2('Report Sheet',…)`, `h2('Questions and Problems',…)` exactly as now; do not add your own stamp boxes for these.
- **`L.checkRow(stepLabel, text)`** makes a one-row box "☐ A.3 Instructor check: … | Initials or stamp:". Put one on the **Report Sheet** for every model-kit step in which the student must **demonstrate** something to the instructor, and write the step itself as "… **Instructor check:** show your instructor …". Example: `c.push(checkRow('A.2','condensation shown with models (water removed, peptide bond formed)'));` (destructure it: `const {checkRow}=L;` or call `L.checkRow`).

## Conventions (decided by the co-authors; follow them)
- Section order: Title "Experiment #N: Name" → Goals → Introduction (sections A, B, … matching procedure parts) → Hazards and Safety Instructions (bold-label bullets) → Waste Instructions (one bullet per container) → Procedure (Instructor Notes; each part: Materials, then steps A.1, A.2 …) → Pre-Lab Questions (new page; 6–7 questions on safety, waste, procedure, expected results; each answerable from the lab text) → Report Sheet (new page, `rule:true`, nameBlock; same part letters/step numbers as the procedure) → Questions and Problems (new page).
- Waste: only four containers: **Halogenated waste** (organic halides and Br₂/I₂ solutions only), **Non-halogenated organic waste** (anything with organic compounds), **Aqueous waste** (other dissolved chemicals incl. soluble metals), **Solid waste**. Use exactly these names.
- Odors: "take a breath of fresh air first, then waft"; toxic compounds only in the fume hood. Model checks are "Instructor check" (not a stamp). Organic redox uses [O]/[H] over arrows.
- **No Bunsen burners or open flames anywhere** (heating = hot plate or water bath).
- Style: Times New Roman 12; "25 °C" (space before °C); mL, M, %; en dash for ranges (5–10 drops); `_{}` for subscripts; first aid "rinse with water for 15 minutes and tell your instructor"; gloves and goggles stated in Hazards. Figures numbered in order of first citation, "**Figure n:** caption"; tables "**Table n: Title**".
- Write for students who may not remember CHEM 3A: short, concrete, active voice. Give every quantity, concentration and tube size. Separate what to observe from what it means. Do not print expected results where students record observations.
- Do not invent certainty. Any new reagent, amount, heating step or waste route you write is a **proposal for bench testing and EHS review**: list it in your notes file (below) with the reason and the source of the method.
- Keep each lab about 10–15 pages. Give answer boxes reasonable heights.

## Report back
Write `<audit working folder>` with: (1) a change list (section, before → after, short); (2) every new reagent/amount/heating/waste choice needing bench test or EHS review; (3) open questions for the co-authors; (4) build result (object-Object count, page-count estimate if you can tell). Then reply with a 10-line summary.
