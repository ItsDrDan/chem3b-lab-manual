"""Independent re-computation of the worked numbers printed in the CHEM 3B Lab Manual.
Run: python3 audit/validate_calculations.py   (no dependencies). Exits non-zero on any mismatch.
Each check names the experiment, the printed value, and the source line it came from."""
import sys
AW = {'H': 1.008, 'C': 12.011, 'N': 14.007, 'O': 15.999, 'Cl': 35.45}
def mm(f):  # tiny formula parser for formulas like C9H8O4
    import re
    return sum(AW[e] * (int(n) if n else 1) for e, n in re.findall(r'([A-Z][a-z]?)(\d*)', f))
fails = 0
def check(label, got, printed, tol):
    global fails
    ok = abs(got - printed) <= tol
    fails += not ok
    print(f"{'OK  ' if ok else 'FAIL'} {label}: computed {got:.4g}, printed {printed}")

# Exp 1 molar masses (Part A structures; printed answers are in the instructor key, so check plausibility only)
for name, f in [('methane', 'CH4'), ('dimethyl ether', 'C2H6O'), ('formaldehyde', 'CH2O'), ('ammonia', 'NH3'), ('ethene', 'C2H4'), ('3-chloropentane', 'C5H11Cl')]:
    print(f"info Exp 1 {name} {f}: {mm(f):.2f} g/mol")

# Exp 11 aspirin (exp11.js intro example and pre-lab)
sa, asp = mm('C7H6O3'), mm('C9H8O4')
check('Exp 11 salicylic acid molar mass', sa, 138.12, 0.01)
check('Exp 11 aspirin molar mass', asp, 180.16, 0.01)
theo = 2.00 / sa * asp
check('Exp 11 theoretical yield from 2.00 g SA (g)', theo, 2.61, 0.005)
check('Exp 11 percent yield 2.25 g / 2.61 g (%)', 2.25 / 2.61 * 100, 86.2, 0.05)
check('Exp 11 acetic anhydride excess (5 mL x 1.08 g/mL, M 102.09)', (5 * 1.08 / 102.09) / (2.00 / sa), 3.65, 0.01)

# Exp 12 Rf values (Figure 4 example)
for lab, d, printed in [('B', 3.4, 0.39), ('A', 6.1, 0.70), ('C', 1.2, 0.14)]:
    check(f'Exp 12 Rf spot {lab} = {d}/8.7', d / 8.7, printed, 0.005)

# Exp 13 percent casein (pre-lab 7)
check('Exp 13 percent casein 0.62 g / 20.45 g (%)', 0.62 / 20.45 * 100, 3.0, 0.05)

# Exp 15 vitamin C titration (intro example and pre-lab 6)
check('Exp 15 intro: 100 mg / 10.00 mL (mg/mL)', 100 / 10.00, 10.0, 0.001)
check('Exp 15 intro: 1.50 mL x 10.0 mg/mL (mg)', 1.50 * 10.0, 15.0, 0.001)
check('Exp 15 pre-lab: 100 mg / 12.50 mL (mg/mL)', 100 / 12.50, 8.00, 0.001)
check('Exp 15 pre-lab: 2.25 mL x 8.00 mg/mL (mg)', 2.25 * 8.00, 18.0, 0.001)

# Appendix F dimensional analysis
check('App F 76 yr in s (365 d/yr)', 76 * 365 * 24 * 60 * 60, 2396736000, 0)

# Exp 6 C.3 base vs ester (review finding E6-03; shows the reason for the bench-test flag)
naoh_mmol = 1.0 * 1.11 * 0.10 / 39.997 * 1000   # 1 mL 10% NaOH, density about 1.11 g/mL
print(f"info Exp 6 C.3: 1 mL 10% NaOH = {naoh_mmol:.2f} mmol; methyl salicylate needs 2 equivalents (ester + phenol)")

print('\n%d failure(s)' % fails)
sys.exit(1 if fails else 0)
