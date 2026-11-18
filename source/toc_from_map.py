import json,sys
rows=[l.rstrip('\n') for l in open(sys.argv[1])]
titles=['To the Student','Laboratory Safety','Laboratory Safety Agreement','Chemical Waste Disposal','Laboratory Notebooks and Reports','Measurements and Uncertainty']+[f'Experiment #{n}:' for n in range(1,17)]+[f'Appendix {x}:' for x in 'ABCDEF']
found={}
for l in rows:
    p=int(l[:3]); head=l[16:63].strip()
    for t in titles:
        if t in found: continue
        if t=='Laboratory Safety' and head.startswith('Laboratory Safety Agreement'): continue
        if head.startswith(t): found[t]=p
assert len(found)==len(titles),set(titles)-set(found)
e1=found['Experiment #1:']
def roman(n):
    s=''
    for v,r in [(10,'x'),(9,'ix'),(5,'v'),(4,'iv'),(1,'i')]:
        while n>=v: s+=r;n-=v
    return s
json.dump({t:(roman(p-2) if p<e1 else str(p-e1+1)) for t,p in found.items()},open(sys.argv[2],'w'))
