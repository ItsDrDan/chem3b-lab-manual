# Brief: CHEM 3B Lab Manual audit (read-only reviewer)

You are auditing part of an open (CC BY 4.0) introductory organic/biochemistry lab manual for allied-health community-college students (co-authors Daniel Kwasniewski and Alexandra Aloia). It is a 2026 working draft. **Do not edit any file in the repository.** Write your findings only to the output file named in your task.

## Where things are
- Repo (read only): `<repo>/` at commit 74efdc9.
- Canonical source: `source/src/expNN.js` (one experiment each), `source/src/frontmatter.js`, `source/src/appendix.js`, shared helpers `source/lablib.js`. Markup in strings: `**bold**`, `*italic*`, `_{sub}`, `^{sup}`. Figures are PNGs in `source/fig/` (HTML/SVG sources beside them); open a PNG with the Read tool to check it.
- Rendered output (what students see): `pdf/experiments/ExpNN_*.pdf` and `pdf/experiments/00_FrontMatter_Safety.pdf`, `16_Appendices.pdf`. Read them with the Read tool (`pages` param, max 20 pages per call). **Look at the rendered pages**, not just the source: structures, equations, tables, answer space, page breaks.
- Front-matter waste/safety rules: `source/src/frontmatter.js` (search "Waste" and "Safety").
- An earlier review already ran: `<private build folder>/_build/manual/REVIEW_FINDINGS.md`, and the fixes/decisions log `<private build folder>/OER_MANUAL_NOTES.md`. Read the sections for your experiments. For each earlier finding, say whether it is now FIXED, STILL OPEN, or PARTLY fixed in current source. Do not re-report a fixed item as new.

## Decisions already made by the authors (do not report these as defects; you may note them as "needs EHS verification" in the safety table only)
- Four waste containers only: **Halogenated waste** (organic halides and Br₂/I₂ solutions only), **Non-halogenated organic waste** (anything containing organic compounds, even with metals such as chromate or Tollens' silver mixed in), **Aqueous waste** (other dissolved chemicals incl. soluble metals and biomolecule + metal reagents like Benedict's/biuret), **Solid waste**.
- Students waft odors ("breath of fresh air first, then waft"); toxic amines only in the hood. Model checks are "Instructor check".
- Organic redox written with [O]/[H] over arrows. Phenol was removed from Exp 4 (salicylic acid is the phenol). Exp 6 keeps 85% H₃PO₄. Exp 13 has no xanthoproteic test.
- Do not propose changing reagents, concentrations, quantities, heating, PPE or waste routes as *edits*; propose them as items for human/EHS review.

## What to do for each experiment
Read the whole source file and the whole rendered PDF. Then do a paper dry run of every numbered step, tracking every tube/vessel and what is in it.

Write your output file in Markdown with these sections per experiment:

1. **Inventory** — parts (A, B, …) and what each does; central learning objective; reagents with exact names/concentrations/amounts as the manual states; equipment; heating/hood/UV/vacuum steps; estimated time per part and likely bottlenecks (mark estimates as estimates); report-sheet outputs; post-lab questions; the textbook topic it relies on.
2. **Reagent safety and waste crosswalk** — table: reagent | form/conc. as stated | hazards as stated in the manual | your note if the stated hazard looks incomplete or wrong (cite GHS class you are confident of, else say "verify on SDS") | PPE/hood stated | steps that use it | resulting mixture | waste route stated (quote) | consistent with front-matter rules? | status (needs co-author review / needs EHS verification / not yet verified). Flag any step where a mixture's disposal is never stated, where the experiment's waste wording conflicts with the front matter, where heating/hood/goggles/gloves instructions are missing or inconsistent, and missing first aid.
3. **Bench executability** — list each defect found in the dry run: step id, exact quote, problem (missing quantity/concentration/tube size, unlabeled vessel, observe-before-react, step order, refers to nonexistent figure/table/tube/field, report sheet has no place to record, unexplained control, result implausible, time infeasible, no guidance on a failed result).
4. **Science and calculations** — check every structure, formula, charge, name, equation, functional-group classification and explanation, in source and rendered figures. Recompute every number (molar masses, yields, dilutions, Rf, percentages) from scratch and show the arithmetic. Say what the expected observation really is and whether the manual risks students copying expected results instead of recording observations.
5. **Alignment chain** — table: Goal → Intro section → Pre-lab Q → Procedure step → Report field → Post-lab Q. Mark broken links (pre-lab about something never introduced, test done but never interpreted, post-lab not supported by the data, control never explained, report field missing).
6. **Editorial and print** — typos, inconsistent names/units/case, wrong cross-references, figure numbering/citation order, rendered problems (clipped structures, split tables, orphan headings, blank space, tiny text, color-only meaning, missing alt text if detectable).
7. **Findings list** — one line per finding in this exact format so it can be merged:
   `| ID | Exp | Section/step | PDF printed page | source file:line | Quote or issue | Priority | Class | Proposed action | Who must approve |`
   Priority: P0 (unsafe/contradictory safety or waste direction, serious science error, unperformable step), P1 (wrong figure/calc/answer, important ambiguity, missing report field, wrong instruction), P2 (unclear, layout, inconsistency), P3 (optional). Class: Editorial (safe for an editor to fix), Science (co-author review), Safety/Operational (needs co-author + EHS; never edit). Give the exact replacement text for every Editorial fix so it can be applied verbatim, and keep Editorial fixes small (do not rewrite sections).

Be concrete and quote exactly. Do not invent bench results: if an outcome depends on local conditions, say "needs bench test". Do not pad with generic advice. If you could not inspect something, say so.
