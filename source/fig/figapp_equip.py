# Appendix A equipment line drawings -> figapp_a1.html, figapp_a2.html (render with ../svg2png.sh)
S='#34424f'; GF='#f3f7fb'; LQ='#cfe2f5'; MT='#8a949c'; DK='#5a6168'; WD='#d2ab72'; RB='#6d6d6d'
def p(d,fill='none',sw=1.8,st=S,extra=''): return f'<path d="{d}" fill="{fill}" stroke="{st}" stroke-width="{sw}" stroke-linejoin="round" stroke-linecap="round" {extra}/>'
def r(x,y,w,h,fill='none',rx=0,sw=1.8,st=S): return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{fill}" stroke="{st}" stroke-width="{sw}"/>'
def l(x1,y1,x2,y2,sw=1.4,st=S): return f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{st}" stroke-width="{sw}" stroke-linecap="round"/>'
def e(cx,cy,rx,ry,fill='none',sw=1.8,st=S): return f'<ellipse cx="{cx}" cy="{cy}" rx="{rx}" ry="{ry}" fill="{fill}" stroke="{st}" stroke-width="{sw}"/>'
def c(cx,cy,rr,fill='none',sw=1.8,st=S): return f'<circle cx="{cx}" cy="{cy}" r="{rr}" fill="{fill}" stroke="{st}" stroke-width="{sw}"/>'
def t(x,y,s,fs=9): return f'<text x="{x}" y="{y}" font-size="{fs}" text-anchor="middle">{s}</text>'
def beaker():
    o=p('M49,94 L49,135 Q49,140 54,140 L102,140 Q107,140 107,135 L107,94 Z',LQ,0)
    o+=p('M42,30 L49,37 L49,135 Q49,140 54,140 L102,140 Q107,140 107,135 L107,33 L110,30')
    for i,y in enumerate([55,70,85,100,115]): o+=l(53,y,62 if i%2 else 66,y,1.2)
    return o
def erlenmeyer():
    o=p('M51,110 L104,110 L115,135 Q117,140 111,140 L45,140 Q39,140 41,135 Z',LQ,0)
    o+=p('M65,26 L68,30 L68,72 L41,135 Q39,140 45,140 L111,140 Q117,140 115,135 L88,72 L88,30 L91,26')
    for y in [95,105,115]: o+=l(76,y,84,y,1.2)
    return o
def gradcyl():
    o=r(68,70,20,60,LQ,0,0)
    o+=p('M64,10 L68,14 L68,130 M88,130 L88,13 L92,10')+p('M68,130 L52,138 L52,141 L104,141 L104,138 L88,130 Z')
    for i in range(11): y=24+i*10; o+=l(70,y,79 if i%5==0 else 75,y,1.1)
    return o
def testtube():
    o=p('M69,95 L69,127 A9,9 0 0 0 87,127 L87,95 Z',LQ,0)
    o+=p('M66,18 L69,21 L69,127 A9,9 0 0 0 87,127 L87,21 L90,18')
    return o
def volpipet():
    o=p('M75,6 L75,58 Q66,64 66,82 Q66,100 75,106 L76,140 L80,140 L81,106 Q90,100 90,82 Q90,64 81,58 L81,6 Z',GF)
    o+=l(72,28,84,28,1.6)+t(100,31,'mark',8)
    return o
def buret():
    o=r(71,6,14,102,GF,2)+r(73,20,10,86,LQ,0,0)
    for i in range(9): y=14+i*10; o+=l(71,y,77 if i%2 else 80,y,1.0)
    o+=p('M74,108 L74,113 M82,108 L82,113')+r(70,113,16,9,DK,2,1)+r(56,115,44,5,DK,2,1)
    o+=p('M75,122 L76,140 L80,140 L81,122')
    o+=t(96,16,'0',8)+t(98,96,'25',8)
    return o
def pasteur():
    o=p('M70,40 L70,18 Q70,6 78,6 Q86,6 86,18 L86,40 Z',RB,1.2)+r(68,38,20,6,RB,1,1.2)
    o+=p('M73,44 L73,96 L77,140 L79,140 L83,96 L83,44',GF)
    return o
def transfer():
    o=p('M72,48 Q62,40 62,26 Q62,8 78,8 Q94,8 94,26 Q94,40 84,48 Z',GF)
    o+=p('M72,48 L75,54 L76,140 L80,140 L81,54 L84,48',GF)
    for y in [80,92,104]: o+=l(76,y,79,y,1.0)
    return o
def funnel():
    return p('M34,30 L122,30 L84,86 L84,140 L72,140 L72,86 Z',GF)+p('M34,30 Q78,38 122,30',sw=1.2)
def buchner():
    # filter flask
    o=p('M58,112 L98,112 L111,136 Q112,140 107,140 L49,140 Q44,140 45,136 Z',LQ,0)
    o+=p('M70,70 L70,92 L45,136 Q44,140 49,140 L107,140 Q112,140 111,136 L86,92 L86,70')
    o+=p('M86,78 L104,78 M86,84 L104,84')+p('M104,78 L104,84',sw=1.2)
    o+=p('M104,81 Q118,81 122,100',sw=5,st=RB)
    o+=r(68,58,20,13,RB,2,1)
    # Buchner funnel (porcelain)
    o+=p('M50,18 L106,18 L106,40 L84,52 L84,66 L72,66 L72,52 L50,40 Z','#fbfbf8')
    o+=l(52,32,104,32,1.0)+t(78,29,'· · · ·',8)
    return o
def watchglass():
    return p('M28,104 Q78,128 128,104 Q78,120 28,104 Z',GF)+e(78,104,50,4,'none',1.0)
def evapdish():
    o=p('M34,92 Q36,136 78,136 Q120,136 122,92',fill='#fbfbf8')+e(78,92,44,8,'#fbfbf8')
    return o
def stirrod():
    return f'<g transform="rotate(-60 78 80)">'+r(10,76,136,7,GF,3.5)+'</g>'
def thermometer():
    o=r(73,6,10,118,GF,5)+c(78,130,8,'#c0392b',1.6)+r(76,60,4,68,'#c0392b',1,0)
    for i in range(10): y=16+i*10; o+=l(83,y,89 if i%5==0 else 86,y,1.0)
    return o
def ttholder():
    o=f'<g transform="rotate(-35 78 78)">'+r(18,72,62,12,WD,4,1.4)
    o+=p('M80,74 L128,70 Q138,70 138,78 Q138,86 128,86 L80,82',sw=2,st=DK)+p('M100,72 Q112,60 124,70',sw=2,st=DK)+'</g>'
    return o
def ttrack():
    o=''
    for x in [48,78,108]: o+=p(f'M{x-8},22 L{x-7},25 L{x-7},116 A7,7 0 0 0 {x+7},116 L{x+7},25 L{x+8},22',GF,1.4)+r(x-6,90,12,30,LQ,0,0)
    o+=r(26,60,104,12,WD,1,1.4)+r(26,118,104,8,WD,1,1.4)
    o+=r(28,72,5,46,WD,0,1.2)+r(123,72,5,46,WD,0,1.2)+r(20,126,116,10,WD,1,1.4)
    return o
def tongs():
    o=p('M38,128 Q60,90 76,66 Q86,48 92,24 Q94,16 100,18',sw=3,st=DK)
    o+=p('M118,128 Q96,90 80,66 Q70,48 64,24 Q62,16 56,18',sw=3,st=DK)
    o+=c(78,63,3.5,DK,1)
    return o
def spatula():
    o=f'<g transform="rotate(-50 78 78)">'+p('M14,74 L112,74 Q120,74 140,70 Q146,76 140,82 Q120,78 112,82 L14,82 Q8,78 14,74 Z','#dfe3e6',1.4)+'</g>'
    return o
def spotplate():
    o=p('M22,70 L118,62 L136,104 L38,114 Z','#fbfbf8')+p('M38,114 L38,120 L136,110 L136,104',sw=1.4)+p('M22,70 L22,76 L38,120',sw=1.4)
    for i in range(3):
        for j in range(4):
            x=40+j*22+i*6; y=74+i*13-j*2
            o+=e(x,y,8,4.2,'#eef2f6',1.2)
    return o
def mortar():
    o=p('M30,82 Q32,134 78,134 Q124,134 126,82','#fbfbf8')+e(78,82,48,9,'#fbfbf8')+r(60,132,36,6,'#fbfbf8',2,1.4)
    o+=f'<g transform="rotate(30 90 60)">'+p('M84,8 L96,8 L98,70 Q98,84 90,84 Q82,84 82,70 Z','#fbfbf8',1.6)+'</g>'
    return o
def washbottle():
    o=p('M50,58 Q50,50 60,50 L96,50 Q106,50 106,58 L106,134 Q106,140 100,140 L56,140 Q50,140 50,134 Z',GF)
    o+=r(60,40,36,11,DK,2,1.2)+p('M78,40 L78,18 Q78,10 88,12 L118,26',sw=3.2)
    o+=r(50,96,56,44,LQ,0,0)
    return o
def hotplate():
    o=r(26,80,104,56,'#e9ecef',4)+r(30,70,96,10,'#c9ced3',2)+c(52,110,8,DK,1)+c(104,110,8,DK,1)+r(68,104,20,10,'#fbfbf8',1,1)
    return o
def bunsen():
    o=p('M44,140 L112,140 L104,128 L52,128 Z',MT)+r(70,40,16,88,'#b9c0c6')+r(68,96,20,10,DK,1,1)+r(66,36,24,6,MT,1,1.2)
    o+=p('M86,118 L112,118',sw=4,st=MT)+p('M112,118 L126,118',sw=6,st=RB)
    o+=p('M78,32 Q70,20 78,6 Q86,20 78,32 Z','#7fb3e6',1.2)
    return o
def ringstand():
    o=r(20,128,82,10,DK,2,1.2)+r(34,8,6,122,MT,1,1.2)
    o+=p('M40,52 L88,52',sw=3,st=DK)+e(108,52,22,6,'none',3,DK)+p('M84,46 L132,46 L132,48 L84,48 Z','#cfd4d8',1)
    o+=p('M40,96 L84,96',sw=3,st=DK)+p('M84,90 Q100,86 108,96 Q100,106 84,102',sw=2.5,st=DK)
    return o
A1=[('Beaker',beaker),('Erlenmeyer flask',erlenmeyer),('Graduated cylinder',gradcyl),('Test tube',testtube),
    ('Volumetric pipet',volpipet),('Buret',buret),('Dropper (Pasteur pipet)',pasteur),('Plastic transfer pipet',transfer),
    ('Funnel',funnel),('Büchner funnel and|filter flask',buchner),('Watch glass',watchglass),('Evaporating dish',evapdish)]
A2=[('Stirring rod',stirrod),('Thermometer',thermometer),('Test tube holder',ttholder),('Test tube rack',ttrack),
    ('Crucible tongs',tongs),('Spatula',spatula),('Spot plate',spotplate),('Mortar and pestle',mortar),
    ('Wash bottle',washbottle),('Hot plate',hotplate),('Bunsen burner',bunsen),('Ring stand with|ring and clamp',ringstand)]
def page(items,fn):
    W,H=624,3*178
    s=f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" style="background:#fff" font-family="Times New Roman, Times, serif">'
    for k,(lab,f) in enumerate(items):
        x=(k%4)*156; y=(k//4)*178
        s+=f'<g transform="translate({x},{y})">{f()}</g>'
        if '|' in lab:
            a,b=lab.split('|'); s+=f'<text x="{x+78}" y="{y+157}" font-size="14" text-anchor="middle">{a}</text><text x="{x+78}" y="{y+172}" font-size="14" text-anchor="middle">{b}</text>'
        else: s+=f'<text x="{x+78}" y="{y+160}" font-size="14" text-anchor="middle">{lab}</text>'
    s+='</svg><style>body{margin:0}</style>'
    open(fn,'w').write(s)
page(A1,'figapp_a1.html'); page(A2,'figapp_a2.html')
