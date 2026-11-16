import re,sys
s=open(sys.argv[1]).read()
for r in re.split(r'\n(?=\d+\t\d+\t[\d.]+\t)',s):
    m=re.match(r'(\d+)\t(\d+)\t([\d.]+)\t(.*)',r,re.S)
    if not m: continue
    p,L,y,rest=int(m[1]),int(m[2]),float(m[3]),m[4]; parts=rest.split('\t')
    h=re.sub(r'\s+',' ',parts[0])[:45]; t=re.sub(r'\s+',' ',parts[-1]).strip()[-35:]
    print(f'{p:>3} {L:>5} {y:5.0f} {h:47}|| {t}')
