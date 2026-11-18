# Experiment #16: Nucleic Acids: Strawberry DNA (NEW lab), notes

Files created (nothing else edited; master.js not touched; alt.json not touched, because every figure has a caption):
- source/src/exp16.js
- source/fig/fig16_1.html/.png (nucleotide parts; ribose vs deoxyribose)
- source/fig/fig16_2.html/.png (A, G, C, T, U as free bases; gray H = sugar position)
- source/fig/fig16_3.html/.png (A–T with 2 and G–C with 3 H bonds, Watson–Crick geometry)
- source/fig/fig16_4.html/.png (antiparallel ladder, 5′/3′ ends)
- source/fig/fig16_5.html/.png (mash, filter, layer alcohol, spool)
- source/fig/fig16_6.html/.png (TLC lanes A C T U X; Rf = a ÷ b)
- source/fig/fig16_lib.js (small drawing helper for these figures: ring geometry, nucleobase builders; loaded after chem.js)

## Interpretation of the co-author request (please confirm)
"use maybe TC … designed it around silica plates" was read as **thin-layer chromatography (TLC) on silica gel plates**, reusing the Exp 11 equipment (silica gel F254 plates, 254 nm UV lamp, capillary spotters) and the Exp 12 developing chamber (600-mL beaker, parafilm). Part C separates the nucleobase standards A, C, T, U plus a lettered unknown.
**Alternative meaning:** "silica" could mean **silica-membrane / silica-binding DNA purification** (DNA binds silica in high chaotropic salt, is washed with ethanol and eluted in water, as in spin-column kits). That would be a cleanup step for the strawberry DNA, not chromatography, and needs guanidinium salts (toxic, EHS concern) or a commercial kit. I mention silica-binding kits only in the healthcare connection. If the co-authors meant this, Part C would need to be rewritten.

## 1. Structure / change list (new lab)
- Title → Goals (4) → Introduction A (nucleotides, sugars, bases, Table 1, backbone 5′/3′, base pairing, antiparallel), B (extraction; Table 2 role of each reagent; crude DNA; healthcare connection: DNA extraction before PCR/genetic tests, silica-binding kits, A260; no diagnostic claims), C (TLC on silica, Rf, why guanine is omitted) → Hazards (7 bold-label bullets; no flames, no hot plates in this lab) → Waste (4 bullets) → Procedure (Instructor Notes; A.1–A.5, B.1–B.8, C.1–C.8) → Pre-Lab (7) → Report Sheet (A with 4 checkRows, B tables incl. class table for variations, C plate sketch + Rf table with N–H/C=O counts) → Questions and Problems (Q.1–Q.7).
- checkRow used for A.1 (sugars), A.2 (nucleotide condensation), A.3 (base pairs), A.4 (antiparallel strands).
- Six captioned figures (Figures 1–6, cited in order), Tables 1–2 in the Introduction.
- Nothing in the observation fields is pre-filled; no expected Rf values or expected amounts are printed.

## 2. Bench-test / EHS proposals (all need a trial run)
Part B (extraction; standard outreach method, e.g., Genetic Science Learning Center / many university outreach protocols):
- Extraction buffer: 100 mL water + 10 mL clear dish detergent + 2 g NaCl (≈0.3 M NaCl); 10 mL per strawberry. Source: common household protocols (1.5–2 g NaCl per 100 mL).
- 1 strawberry (fresh, or frozen and thawed), mash 2 min in zip-top bag; filter through 2 layers cheesecloth or a coffee filter.
- 3 mL filtrate + about 3 mL (equal volume) ice-cold 91% isopropyl alcohol or 95% ethanol, layered with a transfer pipet in a 16 × 150 mm test tube; observe 2–3 min; spool with wooden stick. Many protocols use 1–2 volumes; check that 1 volume gives a visible pellet; increase to 2 volumes (6 mL) if not.
- Alcohol chilled in an ice bath ≥30 min; stated that a household freezer must NOT be used (only flammable-rated). EHS please confirm.
- B.7 class variations (new, for analysis): (1) buffer without detergent, (2) buffer without salt, (3) room-temperature alcohol, (4) alcohol mixed in instead of layered. Needs two extra stockroom buffers (no-detergent, no-salt) and extra strawberries for groups 1–2. Bench-test that each variation gives a visible difference; if (2) still gives strands (pectin also precipitates), the question Q.4 still works but the co-authors may prefer to drop it.
Part C (TLC):
- Solvent: 20 mL isopropyl alcohol + 10 mL 0.5 M NH4OH (the Exp 12 solvent), on silica gel F254, 6 × 10 cm, origin 1.5 cm, ~0.5 cm solvent. Reason: reuses existing stockroom reagents and is non-halogenated; alcohol–ammonia–water mixtures (e.g., 2-propanol : conc. NH3 : water 7:1:2) are a classic solvent family for nucleobases/nucleotides on cellulose and silica layers, and ammonia reduces tailing of the basic bases (A, C) on acidic silica. This exact ratio on silica for nucleobases has NOT been verified; please run a trial. Backups: 1-butanol : acetic acid : water 4:1:1 (classic, slower, strong odor), or ethyl acetate : 2-propanol : water ~65:24:11. Avoid CHCl3/MeOH systems (halogenated waste). Note: strongly basic aqueous eluents can slowly attack silica; 0.17 M overall NH3 should be fine but check the layer.
- Development time "30–60 minutes": a guess; aqueous alcohol is slow on silica.
- Standards: adenine, cytosine, thymine, uracil, about 0.1% (1 mg/mL) in water or very dilute HCl, "as prepared by the stockroom". Water solubilities at 25 °C are roughly adenine ~0.1%, thymine ~0.4%, uracil ~0.36%, cytosine ~0.8%, so 0.1% in water is near the limit for adenine (warm to dissolve or use ~0.01–0.1 M HCl). Students spot 4–5 times (≈1 µL each, ≈4–5 µg) because UV quenching on F254 needs roughly ≥1 µg; C.3 includes a UV check before developing. Bench-test visibility.
- Expected order (NOT printed for students; for instructors only, needs confirmation): thymine highest (methyl group), uracil slightly lower, then adenine and cytosine (cytosine likely lowest of the four); guanine would stay near the origin. Some sources show adenine and cytosine close together; if they overlap, pick an unknown pairing that separates (e.g., T + C or U + A).
- Unknowns: two of the four bases per lettered unknown, mixed by the stockroom.
- Guanine omitted (barely soluble; streaks). Hydrolyzed strawberry DNA NOT spotted: releasing bases needs hot concentrated acid (formic acid or HCl at ~100 °C), the crude extract is mostly pectin/RNA, and strawberry phenolics also absorb UV, so the result would be uninterpretable and the hazard is not justified.
Waste:
- Alcohol/filtrate DNA mixtures, leftover filtrate and buffer (detergent = organic), TLC solvent, leftover base solutions → Non-halogenated organic waste. EHS may allow leftover detergent/salt buffer and filtrate without alcohol down the drain; I followed the "anything with organic compounds" rule.
- Strawberry pulp, cheesecloth/filters, bags, sticks with DNA, used TLC plates → Solid waste container. EHS may allow pulp/cheesecloth/bags in the regular trash (food waste with dilute detergent); please confirm.
- Capillaries → broken glass box. Model kits returned.

## 3. Open questions for the co-authors
1. Confirm TLC-on-silica interpretation (vs. silica-membrane purification).
2. Experiment number/title: written as "Experiment #16: Nucleic Acids: Strawberry DNA"; Exp 15 is Vitamins. Place it where the lead wants (biochemically it belongs after Exp 13 Peptides/Proteins or after Exp 14 Enzymes).
3. Part A needs stockroom "prepared base models or base-pair cards" (A.2, A.3). Building full bases from a model kit takes too long. Would you like a printable base-card sheet (cut-outs with H-bond donors/acceptors marked)? I did not add one.
4. Keep the B.7 variations (adds strawberries and two extra buffers) or make them a single instructor demo?
5. Isopropyl (91%) vs ethanol (95%): either works in the literature; isopropyl is cheaper; pick one for the stockroom list.
6. Strawberry allergy note: OK as written (tell the instructor before lab)?
7. Exp 11 (aspirin) still sends used TLC plates to trash; this lab follows the front matter (solid waste). Someone may want to align Exp 11.

## 4. Build result
- `~/.local/node/bin/node src/exp16.js fig out/exp16.docx` → wrote out/exp16.docx; "object Object" count = 0.
- Word count ~4,900 (Exp 13 ~3,700, Exp 12 ~3,600) with 6 figures; estimated about 15–16 pages (not measured: Word page count via AppleScript timed out, and I stopped rather than interfere with the open manual). If it runs long, the easiest trims are the B.7 class table/variations or the Q.1 answer space.
- Every figure PNG was opened and checked (overlaps, clipping, chemistry: Kekulé structures of A, G, C, T, U; Watson–Crick H-bond donors/acceptors; deoxyribose C2′–H).
