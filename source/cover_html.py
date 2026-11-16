import re,math
d='fig/cover'
def body(n):
    s=open(f'{d}/{n}.svg').read(); return re.sub(r'<\?xml[^>]*>','',s)
items=[('aspirin','Aspirin',20,20),('glucose','β-D-Glucose',350,20),('caffeine','Caffeine',680,20),('dipeptide','Ala–Gly (a dipeptide)',20,330),('vitc','Vitamin C',350,330),('cholesterol','Cholesterol',680,330)]
cells=''.join(f'<div class="m" style="left:{x}px;top:{y}px"><div class="c">{body(n)}</div><div class="l">{lab}</div></div>' for n,lab,x,y in items)
def hexagon(cx,cy,r):
    return '<polygon points="'+' '.join(f'{cx+r*math.cos(math.radians(60*k+30)):.1f},{cy+r*math.sin(math.radians(60*k+30)):.1f}' for k in range(6))+'"/>'
hexes=''
html=f'''<html><head><style>body{{margin:0;background:#fff}} .wrap{{position:relative;width:1000px;height:640px}}
.m{{position:absolute;text-align:center;width:300px}} .c{{background:#EEF3FA;border-radius:50%;width:300px;height:260px;display:flex;align-items:center;justify-content:center}}
.l{{font:italic 24px "Times New Roman";color:#2F5496;margin-top:8px}}</style></head><body><div class="wrap"><svg width="1000" height="640" style="position:absolute;left:0;top:0"><g fill="none" stroke="#2F5496" stroke-width="4" opacity="0.25">{hexes}</g></svg>{cells}</div></body></html>'''
open(f'{d}/cover.html','w').write(html)
