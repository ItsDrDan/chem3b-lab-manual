# Draft Experiment: Saponification: Making and Testing Soap — notes for the authors

Files: `source/src/draft_soap.js` → `drafts/Draft_Soap.docx`. New figures (rendered with chem.js, same style as fig6_7/fig9_1):
`source/fig/draft_soap_1.html/.png` (saponification of glyceryl trilaurate) and `source/fig/draft_soap_2.html/.png`
(soap molecule head/tail + micelle around an oil droplet). Neither figure has an entry in `fig/alt.json`; both have captions, which the library uses as alt text.

## Summary
Pairs saponify 5.0 g of coconut oil with 5.0 mL of 6 M NaOH in a 100-mL beaker clamped in a boiling water bath, stirring steadily for about 30 min (no ethanol). They run a done test (a pea-size sample dissolves and foams in hot water with no oil drops; instructor check), salt the soap out with saturated NaCl plus solid NaCl, cool it in ice, and collect it by vacuum filtration. While one partner stirs, the other compares a 1% commercial (true) soap with a 1% clear dish detergent: pH, foam in distilled water, foam and scum with 1% CaCl2 and 1% MgSO4 (hard water), and the effect of acid (10% HCl gives a fatty acid precipitate with soap). Their own soap goes through the same tests at the end. Part C compares oil shaken with water, soap, detergent, their soap, and optionally bile salts, to show emulsification. The introduction ties back to Exp 6 Part C (saponification of methyl salicylate; HCl → salicylic acid solid), Exp 9 (triacylglycerols; triethanolamine + stearic acid is itself a soap) and textbook 9.2 and 15.1 (micelles, bile salts, lipase). The questions cover the tristearin saponification equation, hard-water scum (with equation), why detergents work in hard water and acid, a micelle drawing, why soap is basic, bile salts, and the lotion soap.

## Design choices (why)
- **Coconut oil, no ethanol.** About 75% of coconut oil's fatty acids have 8–14 carbons, so it saponifies faster than tallow or olive oil. Once some soap forms, the soap emulsifies the rest and the reaction speeds up. With no ethanol there is nothing flammable near the hot plate and no fume-hood step.
- **6 M NaOH, 5.0 mL for 5.0 g oil.** Coconut oil needs about 0.18 g NaOH per g (saponification value about 250–260 mg KOH/g), so 5.0 g needs about 0.90 g NaOH. 5.0 mL of 6 M NaOH is 1.20 g, about a 33% excess. The excess makes the reaction faster and complete. Most of it is removed in the brine filtrate.
- **Beaker clamped in a boiling water bath** (100-mL in a half-full 600-mL beaker). This follows the house rule (hot plate plus water bath, no burner). The mixture stays below 100 °C, so it cannot scorch. The clamp keeps the light beaker from floating or tipping and frees both hands for stirring.
- **Done test** (A.5). This is the standard soap-maker's check: unreacted fat shows up as oil drops on hot water. It is made an Instructor check before salting out, which also gives the instructor a safety checkpoint while the mixture is still caustic.
- **Salting out with saturated NaCl plus 3 g of solid NaCl, then ice.** Coconut (laurate-rich) soap is harder to salt out than tallow soap and needs close to saturated brine. Saturated solution alone gets diluted by the water in the reaction mixture, so solid salt is added too. The washes use ice-cold saturated NaCl, not water, so the soap does not redissolve.
- **Three-way comparison (our soap / commercial true soap / dish detergent).** The student soap still holds some NaOH, so its pH will often read 10–12. The commercial soap is a clean control for the claim that soap is basic (about pH 9–10), and the difference becomes a question (Q.5b).
- **Clear dish detergent instead of pure SDS.** It is already stocked for Exp 15 and gives a clean contrast, with no scum and no acid precipitate, because it contains builders and chelators. Pure sodium lauryl sulfate can turn cloudy with Ca2+ at room temperature (calcium dodecyl sulfate is only partly soluble), which muddies the lesson. SDS appears in the introduction and in Q.3 as the example structure.
- **Hard-water amounts.** 10 drops of 1% CaCl2 (about 0.045 mmol Ca2+) is enough to bind the roughly 0.09 mmol of carboxylate in 2 mL of 1% soap, so the scum and the loss of foam are clear-cut.
- **Workflow overlap.** Part A ties up a stirrer for 30–45 min. Parts B and C with the stock solutions fit in that time, which keeps the whole lab within 2.5 h.
- **Waste follows the house rules.** Tubes with soap, detergent, fatty acid, or oil (organic compounds being tested) go to non-halogenated organic waste. The brine filtrate (NaCl, NaOH, glycerol) and the salt, acid, and base solutions go to aqueous waste. The soap and filter paper go to solid waste. Nothing in this lab is halogenated.

## Reagents and equipment (per pair; per 24-student section = 12 pairs, with about 25–50% extra)
| Item | Per pair | Prepare per section | Prep notes |
|---|---|---|---|
| Coconut oil, refined | 5.0 g | 100 g | Solid below about 24 °C; set out with a spatula. Refined (not virgin) has less odor. |
| 6 M NaOH | 5.0 mL | 100 mL | 24.0 g NaOH pellets dissolved slowly in about 70 mL of cold distilled water in an ice bath (exothermic), then diluted to 100 mL. Store in HDPE, labeled corrosive. |
| Saturated NaCl | about 40 mL | 600 mL | 36 g NaCl per 100 mL water (216 g in 600 mL); stir and leave excess solid at the bottom. Put about 150 mL in an ice bath for the A.7 washes. |
| Solid NaCl | 3 g (+3 g spare) | 100 g | Table or reagent grade. |
| 1% commercial soap | about 10 mL | 250 mL | 2.5 g grated **true soap** bar (label says sodium tallowate/palmate/cocoate or "saponified oils"; not a "beauty bar" or syndet) dissolved in 250 mL warm distilled water. Unscented castile liquid soap also works (it is a potassium soap). |
| 1% dish detergent | about 10 mL | 250 mL | 2.5 mL clear, dye-free dish detergent in 250 mL distilled water; stir gently so it does not foam. |
| 1% CaCl2 | 1 mL | 100 mL | 1.0 g anhydrous CaCl2 (or 1.3 g CaCl2·2H2O) in 100 mL distilled water. |
| 1% MgSO4 | 1 mL | 100 mL | 1.0 g anhydrous MgSO4 (or 2.0 g MgSO4·7H2O) in 100 mL distilled water. |
| 10% HCl | about 1 mL | 50 mL | Existing Exp 6 stock. |
| Vegetable oil | about 2 mL | 50 mL | Any cooking oil, in dropper bottles. |
| 1% bile salts (optional) | 3 mL | 50 mL | 0.5 g sodium cholate or "bile salts" in 50 mL distilled water. |
| pH paper, blue litmus | a few strips | — | — |

Equipment per pair: balance (shared), 100-mL beaker, 600-mL beaker, 50-mL beaker, hot plate, ring stand plus utility clamp, glass stirring rod, beaker tongs, wire mesh, 10-mL and 50-mL graduated cylinders, spatula, ice bath, Büchner funnel plus filter flask plus clamp plus vacuum tubing plus filter paper, watch glass, 9 test tubes plus 4–5 more (13–14 in all) with stoppers, test tube rack, test tube holder, metric ruler, droppers, timer.

## Estimated timing (about 2 h 15 min)
- Pre-lab check and safety briefing: 10 min
- Part A: set-up 10 min; heating 30–45 min; salting out and ice 15 min; filtration 10 min; test solution 5 min (about 75 min)
- Parts B and C with the stock solutions: 35 min, during the Part A heating
- Own-soap tests (B and C rows): 15 min
- Clean-up and check-out: 15 min

## Safety points needing EHS sign-off
1. Hot 6 M NaOH stirred by hand for 30–45 min: spatter risk. Goggles required (consider a face shield for the stirrer), eyewash access, and a clamped beaker.
2. The student-made soap is caustic (it holds leftover NaOH). It must not touch skin and must not go home; it is disposed of as solid waste. Confirm the disposal stream.
3. Waste classification: the brine filtrate (NaCl, about 0.3 g excess NaOH, about 0.5 g glycerol per pair) goes to **aqueous waste**, and the soap and detergent test tubes go to **non-halogenated organic waste** per the house rule. EHS may prefer to neutralize the filtrate first, or may allow dilute soap and detergent solutions down the drain.
4. Vacuum filtration: flasks must be clamped and checked for cracks (12 set-ups, or shared).
5. Slippery floors and benches from oil and soap spills.

## Textbook sections supported
6.8 Hydrolysis of Esters (saponification); 9.1 Fatty Acids; 9.2 Fats and Oils (saponification, soap, micelles); 9.5 Membranes (contrast a micelle with a bilayer, if desired); 13.3 Digestion (bile salts emulsify fats); 15.1 Digestion of Lipids (bile salts, lipase, surface area).

## Open choices for the authors
- **Run a timing trial first.** The 30-minute heating time (up to 45) is a realistic estimate for refined coconut oil with 6 M NaOH and constant stirring at about 90–95 °C, but it depends on the lot and on how hard students stir. Please confirm it before adoption. If it runs long, options are 3.0 g oil with 3.0 mL NaOH, or seeding with about 0.2 g of soap flakes to start the emulsion.
- **Coconut oil alone or a blend.** Coconut oil alone is fastest. A 50:50 coconut/olive or coconut/shortening blend gives a softer soap that salts out more easily but reacts more slowly.
- **Vacuum filtration or skimming.** The curds can be fine and may clog the filter. A simpler option is to skim the floating curds with a spatula onto a folded paper towel and press them. This would save 12 Büchner set-ups.
- **Yield.** It is left out because the soap is wet and salty. One option is to air-dry the soap until the next week and compare its mass with the theoretical yield (about 5.2 g of anhydrous soap from 5.0 g of oil).
- **Pure SDS.** It could replace or join the dish detergent (see above about cloudiness with Ca2+).
- **Bile salts tube.** It is optional; keep it only if the stockroom has bile salts.
- **Optional tap-water row.** Adding a row with local tap water in Part B would make the hard-water lesson local. Measure the hardness first.
- **Lab number and placement.** The natural place is right after Exp 9 (Lipids).
