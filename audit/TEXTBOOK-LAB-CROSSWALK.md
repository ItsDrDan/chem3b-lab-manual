> **Status (2026-11-17):** compiled by the appendix/textbook reviewer from the local textbook mirror (`github/textbook/sections`, commit 380f40c) and checked against the manual source. The manual-side fixes (license page and README no longer say the textbook boxes link here) are **done** on the audit branch. Every textbook-side change below is a proposal: **no textbook page was edited, and no published textbook URL should change.** Experiment numbers are provisional; citing labs by title and linking the landing page avoids churn.

# Textbook ↔ Lab Manual crosswalk

**Textbook source:** local mirror `<textbook repo>/sections/` (git HEAD f93f525, 2026-11-15; files with " 2." in the name ignored), searched recursively for "In the Lab", "experiment", "lab manual", "chem3b-lab-manual". Page titles from `pages/LIVE_SNAPSHOT.md` and `tools/authorship_share_2026-11-14.tsv` (section numbers as of 2026-11-14). The set of pages with an "In the Lab" box in `sections/` is identical to the set in `pages/live/` (29 section pages + About, Course Outline Alignment, For Instructors).
**Manual source:** `chem3b-lab-manual` at 74efdc9, numbering from `source/master.js`, content from `source/src/expNN.js`.

## Headline results
1. **No textbook page links to the lab manual.** Zero occurrences of `chem3b-lab-manual`, `itsdrdan.github.io/chem3b…` or any lab-manual URL in `sections/`, `pages/` or `drafts/`. The manual's license page (frontmatter.js:33) and README.md:7 say the textbook's boxes "link" to the experiments; they do not. The textbook's own "For Instructors" page (live 597396) says: numbers are "provisional; numbers and links will be checked and added when the manual is published."
2. **The textbook cites experiments by the old 14-lab numbering** (1 Structures of Alkanes … 8a/8b … 14 Vitamins). Every numbered citation is off by one or more from the manual (only "Experiment 7 – Amines and Amides" happens to match).
3. **Four textbook boxes describe lab work the manual does not contain:** soap/saponification of a fat and hard-water/detergent tests (6.8, 9.2), DNA extraction (12.3), digestion of foods with saliva/pancreatin (13.3), and simulated-urine analysis in a "metabolism experiment" (13.9, 15.5, 15.7). Three of these (saponification/soap properties, DNA extraction, metabolism) are lab topics in the course outline (`textbook/tools/COR_outline.md`:118–119), so the gap is in the manual relative to the COR, not just in the boxes.
4. **Several boxes describe tests that the manual no longer runs:** NaOH solubility test and phenol in Exp 4 (4.3, 4.7, 4.10), bicarbonate fizz (6.4), smelling formaldehyde (5.2), making isobutyl formate and hydrolyzing a student-made ester (6.6, 6.8), tannic acid denaturation (10.10), benzene in the bromine test (3.7), "long flexible sticks" model kits (1.5; Exp 1 uses Snatoms).
5. Manual Exp 1 (Functional Groups) and Exp 8 (Types of Carbohydrates, structures) have **no box that describes their content**.

---

## A. Inventory of every lab reference in the textbook

Box = "In the Lab" note box (`<div class="box-note">` with title "In the Lab"). No box contains a hyperlink.

| # | File | Page id | Section | Experiment cited (as written) | Link | What the box says the lab covers |
|---|---|---|---|---|---|---|
| T1 | add_597058.html | 597058 | 1.5 Characteristics of Molecules | "Model kits (Experiments 1–7)" (box) | none | Kit colour key (black C, white H, red O, blue N, green Cl, orange Br, purple I); short sticks single, "two or three long flexible sticks" for double/triple; "The lab manual appendix has a VSEPR chart … and an electronegativity chart" |
| T2 | add_597065.html | 597065 | 2.1 Organic versus Inorganic Compounds | "Experiment 2 – Properties of Alkanes" | none | Colour, odour, state, water solubility and combustion of organic vs inorganic compounds; identify functional groups on models |
| T3 | add_597068.html | 597068 | 2.4 Condensed Structural and Line-Angle Formulas | "Experiment 1 – Structures of Alkanes" | none | Build alkanes; 3-D wedge-dash, complete, condensed formulas; constitutional isomers; cycloalkanes, haloalkanes |
| T4 | add_597081.html | 597081 | 3.4 Chemical Properties of Alkenes | "(In the Lab, Section 3.7)" (text cross-ref) | none | Br₂ decolourization as alkene test |
| T5 | add_597084.html | 597084 | 3.7 Aromatic Compounds – Benzene | "Experiment 3 – Reactions of Hydrocarbons" | none | Br₂ test (alkene fast; alkane slow in light, HBr; "Benzene gives no reaction"); KMnO₄ test (diol + brown MnO₂); unknown hydrocarbon saturated/unsaturated |
| T6 | add_597092.html | 597092 | 4.3 Physical Properties of Alcohols | "the alcohols and phenols experiment" (no number) | none | Solubility: alcohols ≤4 C dissolve; phenol moderately soluble, dissolves in NaOH as phenoxide |
| T7 | add_597094.html | 597094 | 4.5 Reactions of Alcohols | "(alcohols and phenols experiment)" | none | Chromate oxidation test: orange Cr(VI) → green Cr³⁺ for 1°/2°; 3° stays orange |
| T8 | add_597096.html | 597096 | 4.7 Phenols | "the alcohols and phenols experiment" | none | NaOH test (phenol dissolves in 5% NaOH, cyclohexanol does not); FeCl₃ test |
| T9 | ch04_597099.html | 597099 | 4.10 Acidity of Alcohols and Phenols | "In Experiment 4" | none | 5% NaOH test on each unknown + FeCl₃ + chromate → 1°/2° alcohol, 3° alcohol, or phenol |
| T10 | add_597103.html | 597103 | 5.2 Properties of Aldehydes and Ketones | "the aldehydes and ketones experiment" | none | Smell formaldehyde, acetone, benzaldehyde; Tollens' and iodoform on an unknown |
| T11 | add_597105.html | 597105 | 5.4 Reduction and Oxidation (Redox) Reactions | (box, no number) | none | Tollens' silver mirror; iodoform test; identify unknown carbonyl |
| T12 | add_597112.html | 597112 | 6.4 Chemical Properties of Carboxylic Acids | "the carboxylic acids and esters experiment" | none | Solubility/acidity of acids vs sodium salts; blue litmus; "Bicarbonate fizz tells an acid from a phenol or an alcohol" |
| T13 | add_597114.html | 597114 | 6.6 Physical Properties of Esters | "the carboxylic acids and esters experiment" | none | Make esters and identify by smell: "pentyl acetate (pear), octyl acetate (orange), isobutyl formate (raspberry)" |
| T14 | add_597115.html | 597115 | 6.7 Preparation of Esters | "Aspirin and other analgesics" (no number) | none | Aspirin from salicylic acid + acetic anhydride; FeCl₃ purity; TLC of aspirin, acetaminophen, ibuprofen, naproxen, caffeine |
| T15 | add_597116.html | 597116 | 6.8 Hydrolysis of Esters | "carboxylic acids and esters experiment"; "Chapter 9's lipids experiment" | none | "hydrolyze an ester you made earlier in the period"; "saponify a fat to make soap and test its properties" |
| T16 | add_597123.html | 597123 | 7.3 Amines as Bases | "Experiment 7 – Amines and Amides" | none | Classify amines 1°/2°/3°/quaternary; water solubility; basicity (litmus); ammonium salts with HCl |
| T17 | add_597127.html | 597127 | 7.7 Chemical Properties of Amides – Hydrolysis | (box, no number) | none | Amide + NaOH, heat → NH₃/amine; odour; moist red litmus → blue |
| T18 | add_597138.html | 597138 | 8.5 Properties of Monosaccharides | "Experiment 8a – Types of Carbohydrates and 8b – Tests for Carbohydrates" | none | Benedict's, Seliwanoff's, fermentation (lactose not); hydrolysis; foods; unknown sugar |
| T19 | add_597140.html | 597140 | 8.7 Polysaccharides | "Experiment 8b" | none | Iodine test; starch hydrolysis "with acid or amylase" followed by iodine and Benedict's |
| T20 | add_597145.html | 597145 | 9.2 Fats and Oils | "Experiment 9 – Lipids" | none | Solubility; Br₂ unsaturation ("vegetable oils use up more bromine than solid animal fats"); **saponification, soap in soft/hard water vs detergent**; hand lotion (stearic acid, cetyl alcohol, glycerol, triethanolamine) |
| T21 | add_597156.html | 597156 | 10.3 Reactions of Amino Acids | "Experiment 11 – Amino Acids"; "Experiment 12 – Peptides and Proteins (part 1)" | none | Classify by R group; paper chromatography, ninhydrin, Rf, unknown; casein at isoelectric point; ninhydrin vs biuret |
| T22 | add_597163.html | 597163 | 10.10 Protein misfolding and denaturation | "Experiment 12 – Peptides and Proteins (part 2)" | none | Denature egg albumin with heat, acid, base, ethanol, **tannic acid**, heavy-metal ions |
| T23 | add_597168.html | 597168 | 11.3 Enzyme Activity | "Experiment 13 – Enzymes"; text "In Experiment 13 you will test three of them … plus an inhibitor" | none | Amylase/starch; iodine fades; Benedict's; enzyme conc., temperature, pH, inhibitor |
| T24 | add_597170.html | 597170 | 11.5 Enzyme Cofactors and Vitamins | "Experiment 14 – Vitamins"; Figure 11.5.1 caption "(Experiment 14)" | none | Water- vs fat-soluble; vitamin C by iodine titration with starch endpoint; heat destroys vitamin C |
| T25 | add_597177.html | 597177 | 12.3 DNA Replication | "the DNA extraction lab" | none | Detergent lysis, salt, cold ethanol; strawberry/cheek/onion; meat tenderizer |
| T26 | add_597191.html | 597191 | 13.3 Digestion (Stage I) | "Digestion of foods" (no number) | none | Starch + saliva or pancreatin at 37 °C; iodine and Benedict's; boiled enzyme/strong acid stop it |
| T27 | ch13_597195.html | 597195 | 13.9 Regulation of Glucose Metabolism | "the metabolism experiment" | none | Simulated urine test strips: glucose (glucose oxidase) |
| T28 | add_597213.html | 597213 | 15.5 Ketone Bodies and Ketoacidosis | "the metabolism experiment" | none | Urine strips: ketone bodies + glucose |
| T29 | add_597215.html | 597215 | 15.7 Digestion of Proteins | (box, "Urine analysis, protein") | none | Urine protein pad or biuret test on simulated urine |
| T30 | front_about.html (live 597270) | 597270 | About This Book | "the CHEM 3B lab manual"; "free lab manual" | none | "In the Lab" boxes in every chapter except 14; the laboratory is covered by the CHEM 3B lab manual |
| T31 | front_alignment.html (live 597272) | 597272 | Course Outline Alignment | "the CHEM 3B lab manual" | none | Boxes connect reading to the manual's experiments |
| T32 | live 597396 only | 597396 | For Instructors | "A CHEM 3B lab manual … is in preparation" | none | Experiment numbers provisional; "numbers and links will be checked and added when the manual is published" |

Other "experiment" hits in `src_*.html` (597057, 597065, 597084, 597126, 597166, 597179, 597201 …) are inherited source prose ("experimental evidence", "in the laboratory") and are not lab references.

---

## B. Crosswalk: each manual experiment → textbook

"Textbook # / name" = what the textbook currently calls this lab. "Linked?" = whether any textbook page hyperlinks to it (none do).

| New # (manual) | Manual title (parts) | Textbook chapter/sections it depends on | Textbook # / name now | Box(es) | Linked? | Mismatch notes |
|---|---|---|---|---|---|---|
| 1 | Functional Groups (A structure, shape, molar mass with Snatoms; B polarity and IMFs) | 1.3–1.5, 1.7, 1.8; 4.1 (functional groups) | none (only "Model kits (Experiments 1–7)") | T1 (generic) | no | No box describes this lab. T1 colour/stick description does not fit Snatoms (magnetic snap atoms, no sticks; exp01.js Table 3). Models are also used in Exps 8, 12, 13, not only 1–7. T1's "lab manual appendix … VSEPR chart … electronegativity chart" is correct (Appendix D). |
| 2 | Structures of Alkanes (A alkanes, B isomers, C cycloalkanes, D haloalkanes) | 2.2–2.5, 2.8, 2.9 | **1** – Structures of Alkanes | T3 | no | Content matches; number wrong (1 → 2). |
| 3 | Hydrocarbons (A model kits, B organic vs inorganic colour/odour/state, C solubility, D combustion demo, E Br₂, F KMnO₄/Baeyer, G unknown) | 2.1, 2.6, 2.7, 3.1–3.4, 3.6–3.8 | **2** – Properties of Alkanes **and** **3** – Reactions of Hydrocarbons (merged) | T2, T4, T5 | no | Two old labs merged into one. T2 says students do combustion; manual Part D is an instructor demonstration. T2 "identify functional groups on models" is now Exp 1. T5 says "Benzene gives no reaction"; the manual tests toluene, not benzene (benzene not used). |
| 4 | Alcohols and Phenols (A models, B odour/solubility/pH, C chromic acid test, D FeCl₃, E unknown) | 4.2, 4.3, 4.5, 4.7, 4.10 | "the alcohols and phenols experiment"; **4** in 4.10 | T6, T7, T8, T9 | no | Number 4 happens to match. **Conflict:** T6, T8, T9 describe phenol and a 5% NaOH solubility test; the manual removed phenol (salicylic acid is the phenol) and has **no NaOH test** (acidity is by pH paper, B.3). T9's three-box unknown scheme (NaOH + FeCl₃ + chromate) is not the manual's scheme (odour, solubility, pH, chromate, FeCl₃). T6 "alcohols with four or fewer carbons dissolve" vs manual "one to three carbons, and t-butyl alcohol". T7 "turns green" vs manual "blue-green". |
| 5 | Aldehydes and Ketones (A models, B properties/odour, C iodoform, D Tollens', E unknown) | 5.1, 5.2, 5.4 | "the aldehydes and ketones experiment" | T10, T11 | no | T10 says students smell formaldehyde; manual uses formaldehyde only as a model (A.1), odour vials are acetone, benzaldehyde, camphor, vanillin, cinnamaldehyde, 2,3-butanedione. Tollens'/iodoform match. |
| 6 | Carboxylic Acids and Esters (A acids and salts, B esters, C hydrolysis/saponification of methyl salicylate) | 6.1, 6.3–6.8 | "the carboxylic acids and esters experiment" | T12, T13, T15 | no | T12 "bicarbonate fizz" – not in manual. T13 esters "pentyl acetate (pear), octyl acetate (orange), isobutyl formate (raspberry)"; manual makes esters of methanol, 1-propanol, 1-octanol, benzyl alcohol, 1-pentanol (no isobutyl formate) and its intro says "pentyl acetate smells like bananas" (exp06.js:30) – **direct contradiction** with T13 and the 6.6 source table (pentyl acetate = pear, isopentyl acetate = banana). T15 "hydrolyze an ester you made earlier in the period" – manual hydrolyzes stock methyl salicylate. |
| 7 | Amines and Amides (A classification incl. quaternary, B odour/solubility/pH, C amine salts, D amides/hydrolysis) | 7.1–7.7 | **7** – Amines and Amides | T16, T17 | no | Number matches. T16 "basicity (litmus)" – manual uses pH paper for basicity (B.4) and blue litmus only as the HCl endpoint. Otherwise consistent (1°/2°/3°/4° terms identical). |
| 8 | Types of Carbohydrates (A monosaccharides, B disaccharides, C polysaccharides; Fischer/Haworth, anomers, models) | 8.1–8.4, 8.6, 8.7 | **8a** – Types of Carbohydrates | T18 (title only) | no | Named only in the T18 title; no box describes its content, and no box is on the structure sections (8.2–8.4, 8.6) where it belongs. |
| 9 | Tests for Carbohydrates (A fermentation, B Benedict's, C Seliwanoff's, D iodine, E hydrolysis, F foods; unknown) | 8.5, 8.6, 8.7; 5.4 (Benedict's/Tollens') | **8b** – Tests for Carbohydrates | T18, T19 | no | T19 "hydrolyze starch with acid or amylase"; manual Part E uses HCl only (amylase is Exp 14). Otherwise matches. |
| 10 | Lipids (A physical properties/solubility, B Br₂ test in CH₂Cl₂, C hand lotion) | 9.1, 9.2, 9.3, 9.6; Appendix E.3 | **9** – Lipids | T20, T15 | no | **Conflict:** T20 and T15 describe saponification of a fat, soap sudsing in soft/hard water and a detergent comparison – **none of this is in Exp 10** (no soap, saponification or detergent in exp10.js). T20 "vegetable oils use more bromine than solid animal fats" – manual compares oleic acid, olive oil, safflower oil with stearic acid (no animal fat). Hand lotion matches (manual also uses lanolin and ethanol). |
| 11 | Aspirin and Analgesics (A synthesis, B testing products with FeCl₃/pH, C TLC) | 6.7, 4.7 (FeCl₃), 6.8 | unnumbered "Aspirin and other analgesics" (old 10) | T14 | no | Content matches (same five TLC standards). |
| 12 | Amino Acids (A models/classification, B paper chromatography, ninhydrin, Rf, unknown) | 10.1, 10.2, 10.3 | **11** – Amino Acids | T21 | no | Content matches; number wrong (11 → 12). Draft cellulose-TLC version exists (drafts/), not adopted. |
| 13 | Peptides and Proteins (A peptide bonds, B structure, C denaturation, D casein, E biuret/ninhydrin) | 10.3–10.10 | **12** – Peptides and Proteins (parts 1 and 2) | T21, T22 | no | T22 lists tannic acid and "heavy-metal ions"; manual uses heat, 10% HNO₃, 10% NaOH, 95% ethanol and 1% AgNO₃ only (no tannic acid; one metal). Manual order is denaturation (C) before casein (D) and colour tests (E); textbook splits casein/colour tests as "part 1" and denaturation as "part 2" – the part labels no longer exist. |
| 14 | Enzymes (A enzyme concentration, B temperature, C pH, D inhibition; α-amylase/starch, iodine, Benedict's) | 11.1–11.4; 13.3 | **13** – Enzymes | T23 (and partly T26) | no | Content matches; number wrong (13 → 14). T26 (digestion of foods with saliva/pancreatin) is closest to this lab but the manual uses commercial α-amylase and no pancreatin. |
| 15 | Vitamins (A solubility, B standardization, C vitamin C in juice and powdered drink, D heat destruction) | 11.5; 9 (fat-soluble vitamins) | **14** – Vitamins; Fig 11.5.1 "(Experiment 14)" | T24 | no | Content matches; number wrong (14 → 15) in box and figure caption. |

### Manual experiments with no textbook box describing them
- **Exp 1 Functional Groups** (only the generic model-kit note T1, which describes a different kit).
- **Exp 8 Types of Carbohydrates** (named in T18's title only).

### Textbook boxes pointing to lab work that does not exist in the manual
| Box | Section | Claimed lab | In COR lab list? | Manual status |
|---|---|---|---|---|
| T15, T20 | 6.8, 9.2 | Saponification of a fat; soap in hard/soft water; detergent | Yes ("lipids (saponification; soap properties)") | Absent (Exp 10 has Br₂ test and hand lotion instead; Exp 6 C saponifies methyl salicylate only) |
| T25 | 12.3 | DNA extraction | Yes ("DNA extraction") | Absent |
| T26 | 13.3 | Digestion of foods (saliva/pancreatin) | Yes ("metabolism (digestion of foods …)") | Partly (Exp 14 amylase kinetics; no pancreatin, no foods) |
| T27–T29 | 13.9, 15.5, 15.7 | Simulated-urine analysis (glucose, ketone bodies, protein) | Yes ("analysis of 'urine' – glucose, ketone bodies, protein, urobilinogen, electrolytes") | Absent |
| T12 | 6.4 | Bicarbonate fizz test | — | Absent |
| T8, T9 | 4.7, 4.10 | 5% NaOH test for phenols | — | Absent (removed with phenol) |

Course-outline source: `<textbook repo>/tools/COR_outline.md`:118–119. The About page's claim that "the laboratory itself is covered by the CHEM 3B lab manual" is not yet true for these three COR lab topics.

---

## C. Terminology conflicts (textbook vs manual)

| Topic | Textbook | Manual | Note |
|---|---|---|---|
| Experiment numbering | Old 14-lab: 1 Structures of Alkanes, 2 Properties of Alkanes, 3 Reactions of Hydrocarbons, 7, 8a, 8b, 9 Lipids, 11 Amino Acids, 12 Peptides (parts 1/2), 13 Enzymes, 14 Vitamins | 15 labs, 1–15 (master.js) | A third numbering exists in the FA26 single-lab files (e.g., Lipids "was #9", Aspirin "was #10", Vitamins "was #12" per OER_MANUAL_NOTES.md). |
| Lab titles | "Reactions of Hydrocarbons", "Properties of Alkanes" | "Hydrocarbons" | Merged lab. |
| Tollens' | "Tollens'" and "Tollens’" (both apostrophe forms; never "Tollen's") | "Tollens’" | Consistent spelling. |
| Benedict's | "Benedict's"/"Benedict’s" | "Benedict’s" | Consistent. |
| [O] notation | 4.5 box: "[O] over the arrow stands for any oxidizing agent, such as potassium dichromate" | [O]/[H] over arrows (author decision) | Consistent. |
| Chromium test | "chromate oxidation test"; Cr³⁺ "green" | "Chromic Acid Test", "chromate reagent (2% K₂Cr₂O₇ in dilute H₂SO₄)"; Cr³⁺ "blue-green" | Name and colour word differ. |
| Iron test | "ferric chloride (FeCl₃) test" | "Iron(III) Chloride Test" (ferric chloride in parentheses) | Minor. |
| Permanganate test | "KMnO₄ test" | "Potassium Permanganate (Baeyer) Test" | Minor. |
| Amine classes | 1°, 2°, 3°, quaternary ammonium | 1°, 2°, 3°, quaternary (4°) ammonium ion | Consistent. (Manual Appendix B note lists only 1°–3°.) |
| Amine basicity | "basicity (litmus)" | pH paper (B.4) | Minor. |
| Pentyl acetate odour | pear (6.6 box, 6.5 Professor Tip, 6.6 source table; isopentyl acetate = banana) | "pentyl acetate smells like bananas" (exp06.js:30) | Science conflict – needs co-author decision. |
| Alcohol solubility cutoff | "four or fewer carbons dissolve" | "one to three carbons, and t-butyl alcohol, mix completely" | Minor; 1-butanol is only partly soluble. |
| Model kits | sticks, "two or three long flexible sticks" for multiple bonds; fixed colour key | Snatoms (Exp 1, magnetic) and "colors vary … check the key" (Exp 2) | Conflict. |
| Electronegativity | qualitative only (no values/cutoffs in boxes) | Appendix D Pauling values; Exp 1 old rounded values | Manual-internal conflict, see appendix-frontmatter.md AF-17. |

---

## D. Proposed change map (old textbook number → manual number)

For the textbook's "In the Lab" box text only. **Do not change any published textbook page URL**; page ids and slugs stay as they are. Because the manual is still a working draft whose README says "Experiment numbers … may change before the final release", the safest wording cites the experiment **by title** (optionally with number), and any link should go to the manual's landing page `https://itsdrdan.github.io/chem3b-lab-manual/` (stable) rather than a per-experiment PDF filename (which embeds the number).

| Textbook (old) | Manual (new) | Pages to edit (page id) |
|---|---|---|
| Experiment 1 – Structures of Alkanes | Experiment 2 – Structures of Alkanes | 597068 (2.4) |
| Experiment 2 – Properties of Alkanes | Experiment 3 – Hydrocarbons (Parts A–D) | 597065 (2.1) |
| Experiment 3 – Reactions of Hydrocarbons | Experiment 3 – Hydrocarbons (Parts E–G) | 597084 (3.7) |
| "the alcohols and phenols experiment" / Experiment 4 | Experiment 4 – Alcohols and Phenols (no change in number; fix content) | 597092, 597094, 597096, 597099 |
| "the aldehydes and ketones experiment" | Experiment 5 – Aldehydes and Ketones | 597103, 597105 |
| "the carboxylic acids and esters experiment" | Experiment 6 – Carboxylic Acids and Esters | 597112, 597114, 597116 |
| "Aspirin and other analgesics" | Experiment 11 – Aspirin and Analgesics | 597115 |
| Experiment 7 – Amines and Amides | Experiment 7 – Amines and Amides (no change) | 597123, 597127 |
| Experiment 8a – Types of Carbohydrates | Experiment 8 – Types of Carbohydrates | 597138 (and add a box on 8.4 or 8.6) |
| Experiment 8b – Tests for Carbohydrates | Experiment 9 – Tests for Carbohydrates | 597138, 597140 |
| Experiment 9 – Lipids / "Chapter 9's lipids experiment" | Experiment 10 – Lipids | 597145, 597116 |
| Experiment 11 – Amino Acids | Experiment 12 – Amino Acids | 597156 |
| Experiment 12 – Peptides and Proteins (part 1 / part 2) | Experiment 13 – Peptides and Proteins (Parts D–E / Part C) | 597156, 597163 |
| Experiment 13 – Enzymes | Experiment 14 – Enzymes | 597168 (box and body sentence) |
| Experiment 14 – Vitamins | Experiment 15 – Vitamins | 597170 (box and Figure 11.5.1 caption) |
| "Model kits (Experiments 1–7)" | "Model kits (Experiments 1–8, 12, 13)" + defer colours to the kit key | 597058 |
| DNA extraction lab; digestion of foods; metabolism/urine experiment | **no manual experiment** – either add labs to the manual or reword boxes as "if your course includes…" | 597177, 597191, 597195, 597213, 597215 |

Content fixes needed alongside the renumbering (textbook side, or manual side if the authors prefer the textbook version): 597092/597096/597099 (remove phenol and NaOH test or restore them in Exp 4), 597112 (bicarbonate), 597114 (ester list, pentyl acetate odour), 597116 (student-made ester; soap), 597145 (soap/detergent; animal fat), 597163 (tannic acid; "part 2"), 597084 (benzene → toluene), 597103 (formaldehyde odour), 597058 (kit description).

Manual-side fixes: frontmatter.js:33 and README.md:7 must stop saying the boxes link (see appendix-frontmatter.md AF-01/AF-02); exp06.js:30 pentyl acetate odour (co-author).

---

## E. Findings list

| ID | Exp | Section/step | PDF printed page | source file:line | Quote or issue | Priority | Class | Proposed action | Who must approve |
|---|---|---|---|---|---|---|---|---|---|
| TX-01 | All | Textbook "In the Lab" boxes vs manual | n/a | textbook/sections/add_597068, 597065, 597084, 597138, 597140, 597145, 597156, 597163, 597168, 597170 | Every numbered citation uses the old 14-lab numbers; no box links to the manual. | P1 | Editorial | Apply the change map in §D to box text only (cite by title; link to the landing page); do not change textbook page URLs. Wait until manual numbering is frozen, or cite titles only now. | Co-authors (textbook author) |
| TX-02 | FM | Manual license page / README | (PDF p.2) | chem3b-lab-manual/source/src/frontmatter.js:33; README.md:7 | Claims the textbook boxes link to the experiments; they do not. | P1 | Editorial | See AF-01/AF-02 replacement text. | Co-author |
| TX-03 | 10 | Lipids content | 127–138 | textbook add_597145, add_597116; exp10.js | Textbook promises saponification of a fat, soap in hard/soft water and a detergent comparison; manual Exp 10 has none. COR lists "lipids (saponification; soap properties)". | P1 | Science | Decide: add a saponification/soap part to Exp 10 (needs EHS review of NaOH/heat) or rewrite the two boxes to describe Exp 10 (Br₂ test, hand lotion) and Exp 6 Part C. | Co-authors (+EHS if lab added) |
| TX-04 | — | COR lab topics missing from manual | n/a | textbook/tools/COR_outline.md:118–119; add_597177, add_597191, ch13_597195, add_597213, add_597215 | DNA extraction, digestion of foods, simulated-urine analysis are COR lab topics and textbook boxes, but no manual experiment exists. | P1 | Science | Authors decide whether to add experiments (new labs need EHS review) or mark these boxes as optional/instructor-supplied; update About page claim that the lab manual covers the laboratory. | Co-authors + department/COR owner |
| TX-05 | 4 | Phenol and NaOH test | 45–56 | textbook add_597092, add_597096, ch04_597099; exp04.js (no NaOH) | Textbook: "In Experiment 4 you test each unknown with 5% NaOH: a phenol dissolves…"; manual removed phenol and has no NaOH test. | P1 | Science | Rewrite the three boxes to the manual's tests (odour, solubility, pH, chromic acid, FeCl₃; salicylic acid as the phenol), or restore a NaOH test in Exp 4 (EHS review). | Co-authors |
| TX-06 | 6 | Ester odours | 71 | chem3b-lab-manual/source/src/exp06.js:30 vs textbook add_597114 | Manual: "pentyl acetate smells like bananas"; textbook: "pentyl acetate (pear)", "isopentyl acetate (banana)". | P2 | Science | Authors pick one description (n-pentyl acetate is described in the literature as both banana- and pear-like; isopentyl acetate is the classic banana ester). The manual makes esters from 1-propanol and 1-pentanol and offers "pear, banana" as odour choices (exp06.js B.4), so it implicitly uses propyl acetate = pear, pentyl acetate = banana. Easiest fix: change the textbook 6.6 box to list the esters actually made in Exp 6, e.g. "propyl acetate (pear), pentyl acetate (banana), octyl acetate (orange), benzyl acetate (jasmine), methyl salicylate (wintergreen)", and add a note in the textbook source table context if needed. | Co-authors |
| TX-07 | 6 | Bicarbonate; student-made ester; ester list | 71–83 | textbook add_597112, add_597114, add_597116 | Bicarbonate fizz, isobutyl formate, and hydrolysis of a student-made ester are not in Exp 6. | P2 | Editorial | Reword boxes to Exp 6 as written (litmus/pH; esters from methanol, 1-propanol, 1-octanol, benzyl alcohol, 1-pentanol; hydrolysis of methyl salicylate). | Co-author (textbook) |
| TX-08 | 13 | Denaturation agents; part labels | 167–180 | textbook add_597163, add_597156; exp13.js C.1–C.5 | Textbook lists tannic acid and heavy-metal ions; manual uses heat, 10% HNO₃, 10% NaOH, 95% ethanol, 1% AgNO₃. "part 1/part 2" labels no longer exist. | P2 | Editorial | Box text: "Experiment 13 – Peptides and Proteins, Part C: you denature egg albumin with heat, acid, base, ethanol, and silver ions…"; 597156: "Parts D and E". | Co-author (textbook) |
| TX-09 | 3 | Bromine test compounds; combustion | 29–44 | textbook add_597084, add_597065 | "Benzene gives no reaction" (manual uses toluene); students do combustion (manual: instructor demo). | P2 | Editorial | Change "Benzene gives no reaction" to "An aromatic ring (toluene in the lab) does not add bromine"; "combustion (an instructor demonstration)". | Co-author (textbook) |
| TX-10 | 1 | Model-kit description | 1–13 | textbook add_597058; exp01.js (Snatoms) | Box describes stick kits and a fixed colour key for "Experiments 1–7"; Exp 1 uses Snatoms; Exp 2 says colours vary. | P2 | Editorial | Box: "Model kits (Experiments 1–8, 12 and 13): use the colour key in your kit; Experiment 1 uses Snatoms magnetic atoms." | Co-author (textbook) |
| TX-11 | 1, 8 | No box for content | 1–13, 97–111 | textbook ch 1, 8.2–8.4, 8.6 | Exp 1 and Exp 8 content not described in any box. | P3 | Editorial | Add short boxes (e.g., 1.8 for Exp 1 polarity/IMF; 8.4 for Exp 8 Haworth/anomers). | Co-author (textbook) |
| TX-12 | 5 | Formaldehyde odour | 57–70 | textbook add_597103 | "you will meet … formaldehyde … by smell"; manual has no formaldehyde vial (model only). | P3 | Editorial | Change to "acetone (nail-polish remover), benzaldehyde (almond) and vanillin". | Co-author (textbook) |
| TX-13 | 4 | Wording | 45–56 | textbook add_597094, add_597092 | "green" vs manual "blue-green"; "four or fewer carbons dissolve" vs manual "one to three carbons, and t-butyl alcohol". | P3 | Editorial | Align to the manual's wording. | Co-author (textbook) |
| TX-14 | 9 | Starch hydrolysis | 112–126 | textbook add_597140 | "hydrolyze starch with acid or amylase … in Experiment 8b"; Exp 9 Part E uses HCl only. | P3 | Editorial | "hydrolyze starch with acid (Experiment 9) or amylase (Experiment 14)". | Co-author (textbook) |
| TX-15 | 15 | Figure caption | 195 | textbook add_597170 | "Figure 11.5.1: Vitamin C reduces iodine (Experiment 14)." | P2 | Editorial | "(Experiment 15)" once numbering is frozen. | Co-author (textbook) |

Limits: section numbers are as of the 2026-11-14 title list; the live LibreTexts book may have been edited after the 2026-11-15 sync. The live site of the manual was not opened; the comparison used `index.html` in the repo.
