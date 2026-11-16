#!/usr/bin/env python3
"""scalesec.py src/expNN.js SECTION FACTOR
SECTION: prelab | questions | report | procedure ; scales space(N), {after:N} on step/P, and h:N / h:[...] table heights
between that section's h2(...) call and the next h2(...) call."""
import re,sys
f,sec,fac=sys.argv[1],sys.argv[2],float(sys.argv[3]); arronly=len(sys.argv)>4
names={'prelab':"Pre-Lab Questions",'questions':"Questions and Problems",'report':"Report Sheet",'procedure':"Procedure"}
s=open(f).read()
i=s.find("h2('"+names[sec]+"'")
if i<0: sys.exit('section not found')
j=s.find("h2(",i+5); j=len(s) if j<0 else j
seg=s[i:j]
sc=lambda m: str(max(0,int(round(int(m)*fac))))
seg=re.sub(r',\s*(\d{3,5})\]',lambda m:','+sc(m[1])+']',seg)
if not arronly: seg=re.sub(r'space\((\d+)\)',lambda m:'space('+sc(m[1])+')',seg)
if not arronly: seg=re.sub(r'after:(\d{3,})',lambda m:'after:'+sc(m[1]),seg)
if not arronly: seg=re.sub(r'\bh:(\d+)',lambda m:'h:'+sc(m[1]),seg)
if not arronly: seg=re.sub(r'\bh:\[([\d,\s]+)\]',lambda m:'h:['+','.join(sc(x) for x in m[1].split(','))+']',seg)
open(f,'w').write(s[:i]+seg+s[j:])
print(f,sec,fac,'ok')
