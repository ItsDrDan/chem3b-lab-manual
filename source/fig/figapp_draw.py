# Appendix hand-drawn SVG figures: VSEPR shapes, Fischer projections, periodic table, name anatomy.
# Run: python3 figapp_draw.py  (then render each figapp_*.html with ../svg2png.sh)
import math
HEAD='<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}" style="background:#fff" font-family="Times New Roman, Times, serif">'
TAIL='</svg><style>body{margin:0}</style>'
def save(fn,w,h,body): open(fn,'w').write(HEAD.format(w=w,h=h)+body+TAIL)
def T(x,y,s,fs=15,anc='middle',bold=False,italic=False,fill='#000'):
    b=' font-weight="bold"' if bold else ''
    i=' font-style="italic"' if italic else ''
    return f'<text x="{x:.1f}" y="{y:.1f}" font-size="{fs}" text-anchor="{anc}"{b}{i} fill="{fill}">{s}</text>'
def L(x1,y1,x2,y2,w=1.6,c='#000'):
    return f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" stroke="{c}" stroke-width="{w}" stroke-linecap="round"/>'
SUB=lambda s: f'<tspan font-size="70%" dy="3">{s}</tspan><tspan dy="-3"></tspan>'
# ---------- VSEPR ----------
def short(x1,y1,x2,y2,a=9,b=9):
    dx,dy=x2-x1,y2-y1; d=math.hypot(dx,dy); ux,uy=dx/d,dy/d
    return x1+ux*a,y1+uy*a,x2-ux*b,y2-uy*b
def bond(x1,y1,x2,y2,order=1,a=9,b=9):
    X1,Y1,X2,Y2=short(x1,y1,x2,y2,a,b)
    if order==1: return L(X1,Y1,X2,Y2)
    d=math.hypot(X2-X1,Y2-Y1); nx,ny=-(Y2-Y1)/d,(X2-X1)/d
    offs=[-2.6,2.6] if order==2 else [-4,0,4]
    return ''.join(L(X1+nx*k,Y1+ny*k,X2+nx*k,Y2+ny*k) for k in offs)
def wedge(x1,y1,x2,y2):
    X1,Y1,X2,Y2=short(x1,y1,x2,y2,8,9); d=math.hypot(X2-X1,Y2-Y1); nx,ny=-(Y2-Y1)/d,(X2-X1)/d
    return f'<polygon points="{X1:.1f},{Y1:.1f} {X2+nx*4:.1f},{Y2+ny*4:.1f} {X2-nx*4:.1f},{Y2-ny*4:.1f}" fill="#000"/>'
def hashb(x1,y1,x2,y2):
    X1,Y1,X2,Y2=short(x1,y1,x2,y2,8,9); d=math.hypot(X2-X1,Y2-Y1); nx,ny=-(Y2-Y1)/d,(X2-X1)/d; o=''
    for i in range(1,8):
        f=i/7; x=X1+(X2-X1)*f; y=Y1+(Y2-Y1)*f; w=0.5+3.6*f; o+=L(x-nx*w,y-ny*w,x+nx*w,y+ny*w,1.2)
    return o
def at(x,y,s,fs=16): return T(x,y+5.5,s,fs)
def lp(x,y,ang):  # lone pair (two dots) 15 px from atom centre in direction ang (degrees, math convention)
    a=math.radians(ang); px,py=-math.sin(a),math.cos(a)
    cx,cy=x+math.cos(a)*15,y-math.sin(a)*15
    return ''.join(f'<circle cx="{cx+px*s:.1f}" cy="{cy-py*s:.1f}" r="1.9" fill="#000"/>' for s in (-3.2,3.2))
def arc(cx,cy,r,a1,a2,label,lx,ly,fs=12):
    x1,y1=cx+r*math.cos(math.radians(a1)),cy-r*math.sin(math.radians(a1)); x2,y2=cx+r*math.cos(math.radians(a2)),cy-r*math.sin(math.radians(a2))
    large=1 if (a2-a1)%360>180 else 0
    return f'<path d="M{x1:.1f},{y1:.1f} A{r},{r} 0 {large} 0 {x2:.1f},{y2:.1f}" fill="none" stroke="#666" stroke-width="1"/>'+T(lx,ly,label,fs,fill='#333')
W,H=180,112
v={}
v['lin']=at(22,60,'H')+bond(22,60,72,60)+at(72,60,'C')+bond(72,60,118,60,3)+at(118,60,'C')+bond(118,60,162,60)+at(162,60,'H')+arc(72,60,18,0,180,'180°',72,32)
v['trig']=at(90,22,'O')+bond(90,58,90,22,2)+at(90,58,'C')+at(50,82,'H')+bond(90,58,50,82)+at(130,82,'H')+bond(90,58,130,82)+arc(90,58,20,212,328,'120°',90,100)
v['bent3']=at(96,50,'N')+lp(96,50,90)+at(54,76,'C')+bond(96,50,54,76,2)+at(26,60,'H')+bond(54,76,26,60)+at(30,98,'H')+bond(54,76,30,98)+at(138,76,'H')+bond(96,50,138,76)+arc(96,50,20,212,328,'~120°',96,96)
v['tet']=at(88,56,'C')+at(88,14,'H')+bond(88,56,88,14)+at(44,76,'H')+bond(88,56,44,76)+at(112,96,'H')+wedge(88,56,112,96)+at(136,70,'H')+hashb(88,56,136,70)+arc(88,56,22,90,155,'109.5°',52,34)
v['pyr']=at(88,50,'N')+lp(88,50,90)+at(44,72,'H')+bond(88,50,44,72)+at(110,92,'H')+wedge(88,50,110,92)+at(134,66,'H')+hashb(88,50,134,66)+arc(88,50,18,205,300,'107°',60,100)
v['bent4']=at(90,46,'O')+lp(90,46,125)+lp(90,46,55)+at(52,76,'H')+bond(90,46,52,76)+at(128,76,'H')+bond(90,46,128,76)+arc(90,46,20,218,322,'104.5°',90,96)
for k,b in v.items(): save(f'figapp_v_{k}.html',W,H,b)
# ---------- Fischer projections ----------
RH=19; FS=13
CH2OH='CH<tspan font-size="9" dy="3">2</tspan><tspan dy="-3">OH</tspan>'
def fischer(x,y,top,rows,name,bold=False,keto=False):
    """top: label of C1; rows: 'R' (OH on right) / 'L' (OH on left), top to bottom; keto: C2 is C=O."""
    o=T(x-4.6,y,top,FS,'start'); yy=y
    items=(['K'] if keto else [])+list(rows)+['B']
    for it in items:
        o+=L(x,yy+4,x,yy+RH-11,1.2); yy+=RH
        if it=='B': o+=T(x-4.6,yy,CH2OH,FS,'start'); continue
        o+=T(x,yy,'C',FS)
        if it=='K': o+=L(x+6,yy-6.2,x+16,yy-6.2,1.2)+L(x+6,yy-2.6,x+16,yy-2.6,1.2)+T(x+18,yy,'O',FS,'start'); continue
        lft,rgt=('H','OH') if it=='R' else ('HO','H')
        o+=L(x-6,yy-4.5,x-16,yy-4.5,1.2)+L(x+6,yy-4.5,x+16,yy-4.5,1.2)+T(x-18,yy,lft,FS,'end')+T(x+18,yy,rgt,FS,'start')
    o+=T(x,yy+19,name,12.5,bold=bold)
    return o, yy+19
BOLD={'Glyceraldehyde','Ribose','Glucose','Galactose','Mannose','Fructose','Dihydroxyacetone','Ribulose'}
def nm(n): return n if n=='Dihydroxyacetone' else 'D-'+n
aldo=[[('Glyceraldehyde','R')],[('Erythrose','RR'),('Threose','LR')],[('Ribose','RRR'),('Arabinose','LRR'),('Xylose','RLR'),('Lyxose','LLR')],
      [('Allose','RRRR'),('Altrose','LRRR'),('Glucose','RLRR'),('Mannose','LLRR')],[('Gulose','RRLR'),('Idose','LRLR'),('Galactose','RLLR'),('Talose','LLLR')]]
Wf=624; body=''; y=18
for row in aldo:
    pitch=Wf/len(row); yb=0
    for i,(name,cfg) in enumerate(row):
        o,yb=fischer(pitch*(i+0.5),y,'CHO',cfg,nm(name),name in BOLD); body+=o
    y=yb+30
save('figapp_e1.html',Wf,int(y-16),body)
keto=[[('Dihydroxyacetone',''),('Erythrulose','R'),('Ribulose','RR'),('Xylulose','LR')],[('Psicose','RRR'),('Fructose','LRR'),('Sorbose','RLR'),('Tagatose','LLR')]]
body=''; y=18
for row in keto:
    pitch=Wf/len(row); ybm=0
    for i,(name,cfg) in enumerate(row):
        o,yb=fischer(pitch*(i+0.5),y,CH2OH,cfg,nm(name),name in BOLD,keto=True); body+=o; ybm=max(ybm,yb)
    y=ybm+30
save('figapp_e2.html',Wf,int(y-16),body)
# ---------- Periodic table (IUPAC abridged standard atomic weights, 2 decimals; () = mass number of a long-lived isotope) ----------
E="""1 H 1.01|2 He 4.00|3 Li 6.94|4 Be 9.01|5 B 10.81|6 C 12.01|7 N 14.01|8 O 16.00|9 F 19.00|10 Ne 20.18|11 Na 22.99|12 Mg 24.31|13 Al 26.98|14 Si 28.09|15 P 30.97|16 S 32.06|17 Cl 35.45|18 Ar 39.95|19 K 39.10|20 Ca 40.08|21 Sc 44.96|22 Ti 47.87|23 V 50.94|24 Cr 52.00|25 Mn 54.94|26 Fe 55.85|27 Co 58.93|28 Ni 58.69|29 Cu 63.55|30 Zn 65.38|31 Ga 69.72|32 Ge 72.63|33 As 74.92|34 Se 78.97|35 Br 79.90|36 Kr 83.80|37 Rb 85.47|38 Sr 87.62|39 Y 88.91|40 Zr 91.22|41 Nb 92.91|42 Mo 95.95|43 Tc (97)|44 Ru 101.07|45 Rh 102.91|46 Pd 106.42|47 Ag 107.87|48 Cd 112.41|49 In 114.82|50 Sn 118.71|51 Sb 121.76|52 Te 127.60|53 I 126.90|54 Xe 131.29|55 Cs 132.91|56 Ba 137.33|57 La 138.91|58 Ce 140.12|59 Pr 140.91|60 Nd 144.24|61 Pm (145)|62 Sm 150.36|63 Eu 151.96|64 Gd 157.25|65 Tb 158.93|66 Dy 162.50|67 Ho 164.93|68 Er 167.26|69 Tm 168.93|70 Yb 173.05|71 Lu 174.97|72 Hf 178.49|73 Ta 180.95|74 W 183.84|75 Re 186.21|76 Os 190.23|77 Ir 192.22|78 Pt 195.08|79 Au 196.97|80 Hg 200.59|81 Tl 204.38|82 Pb 207.2|83 Bi 208.98|84 Po (209)|85 At (210)|86 Rn (222)|87 Fr (223)|88 Ra (226)|89 Ac (227)|90 Th 232.04|91 Pa 231.04|92 U 238.03|93 Np (237)|94 Pu (244)|95 Am (243)|96 Cm (247)|97 Bk (247)|98 Cf (251)|99 Es (252)|100 Fm (257)|101 Md (258)|102 No (259)|103 Lr (266)|104 Rf (267)|105 Db (268)|106 Sg (269)|107 Bh (270)|108 Hs (269)|109 Mt (278)|110 Ds (281)|111 Rg (282)|112 Cn (285)|113 Nh (286)|114 Fl (289)|115 Mc (290)|116 Lv (293)|117 Ts (294)|118 Og (294)"""
els=[x.split() for x in E.split('|')]
assert [int(e[0]) for e in els]==list(range(1,119))
def pos(z):
    if z==1: return 1,1
    if z==2: return 1,18
    if z<=10: return 2,(z-2 if z<=4 else z+8)
    if z<=18: return 3,(z-10 if z<=12 else z)
    if z<=36: return 4,z-18
    if z<=54: return 5,z-36
    if 57<=z<=71: return 9,z-57+3
    if 89<=z<=103: return 10,z-89+3
    if z<=56: return 6,z-54
    if z<=86: return 6,z-68
    if z<=88: return 7,z-86
    return 7,z-100
CW,CHh,X0,Y0=34,40,10,22
def cx(col): return X0+(col-1)*CW
def cy(row): return Y0+(row-1)*CHh if row<=7 else Y0+7*CHh+14+(row-9)*CHh
fill={}
for g,zs in {'#e8f0f9':[1,6,7,8,15,16,34],'#fdf1dc':[9,17,35,53,85,117],'#eeeeee':[2,10,18,36,54,86,118]}.items():
    for z in zs: fill[z]=g
b=''
gy={1:Y0-6,18:Y0-6,2:Y0+CHh-6,13:Y0+CHh-6,14:Y0+CHh-6,15:Y0+CHh-6,16:Y0+CHh-6,17:Y0+CHh-6}
for g in range(1,19): b+=T(cx(g)+CW/2,gy.get(g,Y0+3*CHh-6),str(g),9,fill='#444')
for p in range(1,8): b+=T(X0-4,cy(p)+CHh/2+3,str(p),9,fill='#444')
for zs,ms,mass in els:
    z=int(zs); r,c=pos(z); x,y=cx(c),cy(r)
    b+=f'<rect x="{x}" y="{y}" width="{CW}" height="{CHh}" fill="{fill.get(z,"#fff")}" stroke="#333" stroke-width="0.8"/>'
    b+=T(x+3,y+9,zs,7.5,'start')+T(x+CW/2,y+25,ms,14,bold=True)+T(x+CW/2,y+36,mass,7.8)
for r,lab in ((6,'57–71'),(7,'89–103')):
    x,y=cx(3),cy(r); b+=f'<rect x="{x}" y="{y}" width="{CW}" height="{CHh}" fill="#f6f6f6" stroke="#333" stroke-width="0.8"/>'+T(x+CW/2,y+24,lab,8)
b+=T(cx(3)-4,cy(9)+CHh/2+3,'Lanthanides',9,'end')+T(cx(3)-4,cy(10)+CHh/2+3,'Actinides',9,'end')
kx,ky=cx(4)+4,Y0+4
b+=f'<rect x="{kx}" y="{ky}" width="52" height="60" fill="#e8f0f9" stroke="#333" stroke-width="0.8"/>'+T(kx+4,ky+12,'6',10,'start')+T(kx+26,ky+38,'C',22,bold=True)+T(kx+26,ky+53,'12.01',10)
b+=L(kx+14,ky+8,kx+66,ky+8,0.8,'#555')+T(kx+69,ky+11,'atomic number',10,'start')
b+=L(kx+40,ky+31,kx+66,ky+31,0.8,'#555')+T(kx+69,ky+34,'symbol',10,'start')
b+=L(kx+44,ky+50,kx+66,ky+50,0.8,'#555')+T(kx+69,ky+53,'atomic mass (g/mol)',10,'start')
lk=kx+178
for i,(col,lab) in enumerate([('#e8f0f9','other nonmetals'),('#fdf1dc','group 17 (halogens)'),('#eeeeee','group 18 (noble gases)')]):
    b+=f'<rect x="{lk}" y="{ky+2+i*18}" width="14" height="12" fill="{col}" stroke="#333" stroke-width="0.8"/>'+T(lk+19,ky+12+i*18,lab,10,'start')
save('figapp_f1.html',624,int(cy(10)+CHh+4),b)
# ---------- anatomy of a name ----------
segs=[('(2<tspan font-style="italic">S</tspan>,3<tspan font-style="italic">S</tspan>)-','#7d3c98','Stereodescriptors','(Step 5)'),
      ('3-chloro-2-hydroxy','#1f5fa8','Substituent prefixes','(alphabetical order)'),
      ('but','#1e7d4f','Parent chain','(4 carbons)'),
      ('an','#9a6b00','Bond ending','(an, en, or yn)'),
      ('oic acid','#b03a2e','Suffix','(principal group)')]
widths=[66,190,38,26,90]; gap=3; total=sum(widths)+gap*4
x0=(624-total)/2; centers=[]; x=x0; b=''
for (s,col,l1,l2),w in zip(segs,widths):
    b+=T(x+w/2,40,s,22,fill=col)+f'<path d="M{x+2:.1f},50 L{x+2:.1f},56 L{x+w-2:.1f},56 L{x+w-2:.1f},50" fill="none" stroke="{col}" stroke-width="1.4"/>'
    centers.append(x+w/2); x+=w+gap
lab=[(60,86),(centers[1],86),(centers[2]-30,124),(centers[3]+20,124),(centers[4]+45,86)]
for (s,col,l1,l2),cxx,(lx,ly) in zip(segs,centers,lab):
    b+=L(cxx,57,lx,ly-14,1.0,col)+T(lx,ly,l1,13,fill=col,bold=True)+T(lx,ly+15,l2,12,fill=col)
save('figapp_c1.html',624,148,b)
