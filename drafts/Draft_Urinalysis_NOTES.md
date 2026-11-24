# Draft Experiment: Urinalysis — notes for the authors

Source: `source/src/draft_urinalysis.js` → `drafts/Draft_Urinalysis.docx` (built with the house library; no figures, tables only; the glucose-oxidase reaction is written as two centered word equations, as in Exp 8).

## Summary
This draft covers the course-outline lab "analysis of 'urine' – glucose, ketone bodies, protein, urobilinogen, electrolytes" using **only simulated urine made by the stockroom** (no real urine, no biohazard; the student text says so in the first paragraph and in Hazards). **Part A:** pairs read a commercial 10-test urine strip on four lettered samples (W–Z), each pad at its bottle read time (glucose oxidase/peroxidase, nitroprusside ketones, ionic specific gravity, blood, pH, tetrabromophenol-blue protein, urobilinogen; Table 2 explains each pad briefly). **Part B:** wet-chemistry confirmations they already know: Benedict's (Exp 8) graded blue→brick red, 3% sulfosalicylic acid protein turbidity read against the same line card as the digestion draft (denaturation, Exp 12), AgNO3/HNO3 chloride (Exp 12 reagents), and specific gravity by refractometer or, as a fallback, by weighing 10.00 mL of sample vs 10.00 mL of water. **Part C:** students match the four samples to four fictional patients (normal; uncontrolled type 2 diabetes; type 1 diabetic ketoacidosis; long-standing hypertension with kidney damage) and interpret a fifth patient (hepatitis) from **provided strip readings labeled "not real measurements"**, which is how urobilinogen is taught honestly. A **Dry-Lab Option** (Instructor Note + clearly labeled SAMPLE CLASS DATA) mirrors the digestion draft. Rosa (the textbook's fictional type 2 diabetes case) appears as an optional link in the Introduction and optional Q.8.

## Why each design choice
- **Simulated urine only.** Removes the bloodborne-pathogen/biohazard issue entirely; each abnormality is a single known spike, so the matching exercise is unambiguous.
- **Urobilinogen handled honestly.** Urobilinogen is unstable and not a practical stock reagent, so all bench samples read the lowest chart block ("0.2, normal"). The text says so, explains that the lowest block means "normal" not "none," and teaches urobilinogen with Patient 5's provided readings. I did **not** use a commercial urinalysis control for this: many liquid urinalysis controls are made from **human urine** and are labeled to be handled as potentially infectious, which would break the "no real urine" rule. If the authors want a bench urobilinogen reading, only use a control whose insert/SDS states a non-human (synthetic) matrix — verify before buying.
- **Ketone spike = lithium acetoacetate, not acetone.** Nitroprusside pads react strongly with acetoacetate and weakly (some brands not at all) with acetone, and never with β-hydroxybutyrate. Using acetoacetate makes the strip clearly positive and sets up Q.3 (why the strip misses β-hydroxybutyrate). Acetone is a fallback only after a strip trial.
- **Sulfosalicylic acid rather than biuret for protein.** Clinical urine protein (hundreds of mg/dL) is near the lower limit of the biuret test, so biuret would be faint or ambiguous; 3% SSA gives a heavy, obvious cloud at 500 mg/dL and connects to acid denaturation (Exp 12, Section 10.10). It also detects any protein, a useful contrast with the albumin-selective strip pad.
- **Glucose at two levels (1% and 2%).** Lets Benedict's be read semi-quantitatively (yellow vs brick red) and matches the strip blocks (1000 vs ≥2000 mg/dL); both are realistic for uncontrolled diabetes/DKA.
- **Extra NaCl and pH 5.5 in the DKA sample.** Models dehydration (higher strip and measured SG) and acidic urine in ketoacidosis (pH pad, Q.3c).
- **Measured SG vs strip SG.** The strip SG pad responds only to ions, so the glucose samples read "normal" on the strip but high by refractometer/weighing (B.5, Q.6). This is a real clinical limitation and a nice chemistry point (ions vs non-electrolytes, CHEM 3A).
- **Weighing fallback for SG.** Needs only a 10-mL volumetric pipette and a balance; dividing by the mass of the same volume of water from the same pipette cancels the pipette's calibration error and temperature.
- **Case matching instead of "positive/negative" only.** Forces students to explain each result with Sections 13.9, 15.5, and protein/urea ideas; the instructor check (checkRow C.1) catches wrong matches before students leave.
- **Read-time emphasis.** Timing errors are the most common strip error; A.2 has students copy times from their own bottle, and Q.5 asks about early reading and other false results.

## Reagents and equipment
Amounts per pair include ~25% extra; a section = 12 pairs (24 students). Make samples the day before (except the DKA sample's acetoacetate, added the morning of lab); refrigerate; discard after 2 days (urea + glucose + protein grow microbes and urea slowly gives ammonia).

### Simulated urine base (make 2.5 L per section)
Per 1 L distilled water: **NaCl 6.0 g, KCl 1.5 g, urea 10 g, NaH2PO4·H2O 1.0 g**, optional **creatinine 0.5 g**, and **2–3 drops yellow food coloring** (keep it pale; deep color makes the pads hard to read). Adjust to **pH 6.0** with 1 M NaOH (pH meter or pH paper). Expected SG about 1.009–1.010 (measured), strip SG about 1.010.
- Creatinine is optional: it adds realism but is a weak reducing agent; check in the trial that the normal sample stays blue with Benedict's (it should at 0.5 g/L).

### Patient samples (500 mL each per section; about 30 mL per pair per sample)
| Patient | Recipe (to 500 mL of base) | Expected strip | Expected Part B |
|---|---|---|---|
| 1 Normal | base only | all negative; pH 6; SG ~1.010; urobilinogen 0.2 | Benedict blue; SSA 0; AgCl white; SG ~1.009 |
| 2 Type 2 diabetes | + **5.0 g glucose** (1.0% = 1000 mg/dL) | glucose 1000; SG strip ~1.010 | Benedict yellow (green-yellow); SSA 0; SG ~1.013 |
| 3 DKA | + **10.0 g glucose** (2%) + **3.0 g NaCl** + **0.50 g lithium acetoacetate** (~100 mg/dL; add the morning of lab, keep on ice) ; adjust to **pH 5.5** with dilute HCl after adding acetoacetate | glucose ≥2000; ketones large (80); pH 5–5.5; SG strip ~1.020 | Benedict brick red/orange; SSA 0; SG ~1.021 |
| 4 Kidney damage | + **2.5 g bovine serum albumin** (Fraction V; 0.5% = 500 mg/dL), sprinkled on the surface and dissolved without foaming; adjust to **pH 6.5** | protein 300 (or ≥300 block); others normal | Benedict blue; SSA 3+; SG ~1.011 |

- **Check every spike with a strip the morning of lab** (the brief's requirement that each spike is actually detected): glucose pad and Benedict's on samples 2/3; ketone pad on sample 3 (acetoacetate slowly decarboxylates to acetone + CO2 in solution, especially when warm or acidic, so a sample made days ahead may read low); protein pad and SSA on sample 4.
- **Albumin fallback:** the 1% egg albumin already stocked for Exp 12 can replace BSA, but strip protein pads are most sensitive to serum albumin; confirm the pad reads ≥100 before switching.
- **Ketone fallback:** if lithium acetoacetate is not available, try 1–2% acetone in sample 3 and confirm on your strip brand first; some nitroprusside pads barely respond. Acetone at this level is a low hazard but has an odor and is flammable as the neat liquid (stockroom only).
- Label cups W–Z; rotate the letter key by section.

### Other reagents
| Item | Per pair | Per section | Prep |
|---|---|---|---|
| 10-test urine reagent strips (glucose, ketone, SG, blood, pH, protein, urobilinogen, bilirubin, nitrite, leukocytes; e.g., Multistix 10 SG type or a generic equivalent) | 4 (+1 spare) | 60 (≈ 1 bottle of 100 for 1–2 sections) + 4 for the stockroom trial | Keep capped, dry, in date. Generic 10-test strips are inexpensive. |
| Benedict's reagent | 12 mL | 150 mL | Exp 8 stock. |
| 3% sulfosalicylic acid | 12 mL | 150 mL | 3.0 g 5-sulfosalicylic acid dihydrate per 100 mL water (dropper/dispensing bottle). |
| 10% HNO3 | 10 drops | 1 dropper bottle | Exp 12 stock. |
| 1% AgNO3 | 10 drops | 1–2 dropper bottles (amber) | Exp 12 stock. |
| Distilled water | ~50 mL | — | — |
| Line card | 1 | 12 | White card with 3 thick black marker lines (same as digestion draft). |

Equipment per pair: 19 test tubes (4 large 18 × 150 mm for the strips, 15 regular), rack, holder, 10-mL graduated cylinder, plastic pipettes, 400-mL beaker + hot plate (boiling bath), timer, paper towels. **SG:** shared clinical urine refractometers (1–3 per section, handheld, ~$30–60 each) **or** per pair a 10-mL volumetric pipette with bulb, 50-mL beaker, and access to a balance (0.001 g preferred; 0.01 g works for the DKA sample but barely separates the normal vs type 2 samples, see open choice 3).

## Estimated timing (≈ 1 h 50 min of a 2.5 h period)
- Pre-lab talk, bath heating, A.1–A.2: 10 min
- Part A, four strips (~3 min each including reading) + cleanup: 20 min
- B.1 Benedict's (5 min heat) with B.2 and B.3 set up during heating: 20 min
- B.4 SG: refractometer 10 min / weighing 20 min; B.5: 5 min
- Part C matching + Patient 5 + instructor check: 25 min
- Cleanup: 10 min
- Dry-lab version: ~60 min (report sheet + questions).

## Safety points needing EHS sign-off
1. **No real urine.** Statement that only stockroom-made simulated urine is used; students must not bring or test their own urine; results are not diagnostic. EHS may want this in the syllabus too.
2. **Commercial urinalysis controls** (if ever added for urobilinogen) are often human-urine-based → potentially infectious. The draft avoids them.
3. **AgNO3 1%** (toxic, stains), **10% HNO3** (corrosive, GHS Skin Corr. 1B at 5–20%; not classed as an oxidizer below 65%), **3% sulfosalicylic acid** (irritant), **Benedict's** (copper, aquatic toxicity), boiling water bath — all routine and already in the manual.
4. **Waste routing:** Benedict's + AgNO3 + all leftover samples → aqueous; SSA tubes → non-halogenated organic (SSA is an organic compound); used strips → solid waste (pads contain small amounts of chromogens and nitroprusside). No halogenated waste (NaCl/KCl only). EHS may allow the leftover salt/urea/glucose samples down the drain; the draft says no sink disposal.
5. **Lithium acetoacetate, urea, BSA, creatinine:** low hazard; stockroom only.
6. Bovine-derived albumin: mention for students with objections to animal-derived materials (dry-lab option available).

## Textbook sections supported
- **13.9 Glucose regulation:** renal threshold (~180 mg/dL), glucose in urine in uncontrolled diabetes; Patient 2; Pre-Lab 4; Q.1, Q.6.
- **15.5 Ketone bodies and ketoacidosis:** acetoacetate / β-hydroxybutyrate / acetone (Table 3), [H] relationship, acidic urine; Patient 3; Q.3, Q.8b.
- **15.7 Proteins** (and urea as the nitrogen waste): urea in every sample, protein in urine as kidney damage; Q.4, Q.8c (BUN). Please confirm the exact section titles/numbers for 13.9/15.5/15.7 in the current textbook build.
- **10.10 Denaturation:** SSA test.
- **Exp 8 (Benedict's, reducing sugars), Exp 12 (AgNO3, HNO3, protein denaturation), 11.3 enzyme specificity** (glucose oxidase only fits glucose; Q.2).
- **Rosa (running case, Chapter 15):** optional intro note + Q.8; kept generic so it cannot contradict the book's numbers.

## Open choices for the authors
1. **Urobilinogen:** keep as provided data (Patient 5) only, or buy a commercial control with a verified **non-human** matrix for a bench reading.
2. **Protein test:** SSA (draft) vs biuret (ties Exp 12 directly but insensitive at urine levels) vs heat-and-acetic-acid coagulation (no organic waste, but needs a heated tube per sample).
3. **SG method:** refractometers (best; ~$100–150 per section) vs weighing (free; works, but normal vs type 2 differ by only ~0.04 g in 10 mL, so a 0.001 g balance is needed for a clean difference). A urinometer (hydrometer) needs ~20–50 mL per reading and was not chosen for that reason.
4. **Strip brand:** read times and chart blocks differ by brand; the sample data use typical Multistix-type blocks. Whatever brand is bought, update Table 2's "typical read time" column (or leave it and rely on A.2).
5. **Four vs five bench samples:** could add a "dilute/overhydrated" sample (base diluted 1:3, SG ~1.003) or a non-glucose reducing sugar sample (e.g., galactose: Benedict's positive, strip glucose negative) to sharpen Q.2. Each adds ~10 min.
6. **Rosa link:** keep optional Q.8, make it required, or drop it.
7. Placement: after Exp 13 (Enzymes) and the digestion draft, near the metabolism chapters; it needs Exp 8 and Exp 12 skills.
