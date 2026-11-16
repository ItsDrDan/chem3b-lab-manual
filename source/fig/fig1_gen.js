// writes fig1_*.html files (Exp 1 figures and report-sheet structures)
const fs=require('fs');
const H=(name,w,h,fsz,body,imgs='')=>fs.writeFileSync(__dirname+'/'+name+'.html',
`<svg id="s" xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" style="background:#fff">${imgs}</svg>
<style>body{margin:0}</style>
<script src="chem.js"></script><script src="fig1_grid.js"></script>
<script>
init('s',${fsz});
${body}
</script>
`);
const cap=(x,y,t,s='')=>`label(${x},${y},'${t}',{fs:17,bold:true});`+(s?`label(${x},${y+19},'${s}',{fs:14,color:'#555'});`:'');
const B='{color:BLUE}';
// ---------- Figure 1: methane 3D model and wedge-dash ----------
H('fig1_1',720,260,20,`
const defs=el('defs',{});
function grad(id,c1,c2){const g=el('radialGradient',{id,cx:'35%',cy:'30%',r:'70%'},defs);el('stop',{offset:'0%','stop-color':c1},g);el('stop',{offset:'100%','stop-color':c2},g);}
grad('gc','#8a8a8a','#151515');grad('gh','#ffffff','#a9a9a9');grad('ghb','#e8e8e8','#8d8d8d');
const C={x:180,y:120};
const Hs=[{x:255,y:85,r:17,b:1},{x:180,y:28,r:22},{x:102,y:175,r:22},{x:228,y:200,r:24}];
const stick=(p,w)=>{el('line',{x1:C.x,y1:C.y,x2:p.x,y2:p.y,stroke:'#777','stroke-width':w,'stroke-linecap':'round'});};
stick(Hs[0],9);el('circle',{cx:Hs[0].x,cy:Hs[0].y,r:Hs[0].r,fill:'url(#ghb)',stroke:'#666'});
el('circle',{cx:C.x,cy:C.y,r:33,fill:'url(#gc)'});
Hs.slice(1).forEach(p=>{stick(p,11);});el('circle',{cx:C.x,cy:C.y,r:33,fill:'url(#gc)'});
Hs.slice(1).forEach(p=>el('circle',{cx:p.x,cy:p.y,r:p.r,fill:'url(#gh)',stroke:'#666'}));
${cap(180,245,'3D model (ball-and-stick)')}
// wedge-dash
grid(500,125);at('C',0,0,'C');at('H1',0,-2.2,'H');at('H2',-1.9,0.95,'H');at('H3',1.75,1.15,'H');at('H4',1.95,-0.55,'H');
bd('C','H1');bd('C','H2');
el('polygon',{points:'508,131 569,166 563,175',fill:'#000'});
for(let i=1;i<=7;i++){const t=i/8,x=508+(573-508)*t,y=118+(103-118)*t,hw=1+5*t;line(x-0.25*hw,y-hw,x+0.25*hw,y+hw,{w:1.6});}
label(640,190,'wedge: toward you',{fs:14,color:'#555',italic:true});label(645,82,'dash: away from you',{fs:14,color:'#555',italic:true});
label(450,72,'in the plane',{fs:14,color:'#555',italic:true});
${cap(510,245,'wedge–dash drawing')}
`);
// ---------- Figure 2: three formats of 3-ethyl-2-methylhexane ----------
H('fig1_2',1000,370,17,`
grid(30,150,40,40);
at('h0',0,0,'H');for(let i=1;i<=6;i++)at('c'+i,i,0,'C');at('h7',7,0,'H');
bd('h0','c1');for(let i=1;i<6;i++)bd('c'+i,'c'+(i+1));bd('c6','h7');
[1,3,4,5,6].forEach(i=>{at('u'+i,i,-1,'H');bd('c'+i,'u'+i);});[1,2,4,5,6].forEach(i=>{at('d'+i,i,1,'H');bd('c'+i,'d'+i);});
at('m',2,-2.6,'C');bd('c2','m');at('m1',1,-2.6,'H');at('m2',3,-2.6,'H');at('m3',2,-3.5,'H');bd('m','m1');bd('m','m2');bd('m','m3');
at('e1',3,2.3,'C');bd('c3','e1');at('e1a',2,2.3,'H');at('e1b',4,2.3,'H');bd('e1','e1a');bd('e1','e1b');
at('e2',3,3.3,'C');bd('e1','e2');at('e2a',2,3.3,'H');at('e2b',4,3.3,'H');at('e2c',3,4.1,'H');bd('e2','e2a');bd('e2','e2b');bd('e2','e2c');
${cap(170,365,'Expanded structural formula')}
grid(385,150,64,40);
['CH_3','CH','CH','CH_2','CH_2','CH_3'].forEach((l,i)=>at('k'+i,i,0,l));for(let i=0;i<5;i++)bd('k'+i,'k'+(i+1));
at('km',1,-1.3,'CH_3');bd('k1','km');at('ke1',2,1.3,'CH_2');bd('k2','ke1');at('ke2',2,2.6,'CH_3');bd('ke1','ke2');
${cap(545,365,'Condensed structural formula')}
${cap(870,365,'Line-angle (skeletal) structure')}
`,'<image href="mol/fig1_skel_hex.svg" x="760" y="70" width="230" height="170"/>');
// ---------- Figure 3: hydrocarbons ----------
H('fig1_3',900,212,18,`
grid(40,95,44,40);at('a0',0,0,'H');at('a1',1,0,'C');at('a2',2,0,'C');at('a3',3,0,'H');bd('a0','a1');bd('a1','a2');bd('a2','a3');
[1,2].forEach(i=>{at('au'+i,i,-1,'H');at('ad'+i,i,1,'H');bd('a'+i,'au'+i);bd('a'+i,'ad'+i);});
${cap(106,175,'Alkane: ethane','C–C single bonds only')}
grid(355,95,44,40);at('b0',0,0,'H');at('b1',1,0,'C',${B});at('b2',2,0,'C',${B});at('b3',3,0,'H');bd('b0','b1');bd('b1','b2',2,${B});bd('b2','b3');
[1,2].forEach(i=>{at('bu'+i,i,-1,'H');bd('b'+i,'bu'+i);});
${cap(421,175,'Alkene: ethene','C=C double bond')}
grid(670,95,46,40);at('c0',0,0,'H');at('c1',1,0,'C',${B});at('c2',2,0,'C',${B});at('c3',3,0,'H');bd('c0','c1');bd('c1','c2',3,${B});bd('c2','c3');
${cap(739,175,'Alkyne: ethyne','C≡C triple bond')}
`);
// ---------- Figure 4: alkyl halides ----------
H('fig1_4',900,215,18,`
grid(40,95,64,40);at('a0',0,0,'CH_3');at('a1',1,0,'CH_2');at('a2',2,0,'Cl',${B});bd('a0','a1');bd('a1','a2',1,${B});
${cap(104,195,'Primary (1°)','C–Cl carbon bonded to 1 C')}
grid(330,105,64,40);at('b0',0,0,'CH_3');at('b1',1,0,'CH');at('b2',2,0,'CH_3');at('bx',1,-1.4,'Cl',${B});bd('b0','b1');bd('b1','b2');bd('b1','bx',1,${B});
${cap(394,195,'Secondary (2°)','C–Cl carbon bonded to 2 C')}
grid(630,105,64,40);at('c0',0,0,'CH_3');at('c1',1,0,'C');at('c2',2,0,'Cl',${B});at('cu',1,-1.3,'CH_3');at('cd',1,1.3,'CH_3');bd('c0','c1');bd('c1','c2',1,${B});bd('c1','cu');bd('c1','cd');
${cap(694,195,'Tertiary (3°)','C–Cl carbon bonded to 3 C')}
`);
// ---------- Figure 5: alcohol and ether ----------
H('fig1_5',800,212,18,`
grid(60,95,44,40);at('a0',0,0,'H');at('a1',1,0,'C');at('a2',2,0,'C');at('a3',3,0,'O',${B});at('a4',4,0,'H',${B});
bd('a0','a1');bd('a1','a2');bd('a2','a3',1,${B});bd('a3','a4',1,${B});[1,2].forEach(i=>{at('u'+i,i,-1,'H');at('d'+i,i,1,'H');bd('a'+i,'u'+i);bd('a'+i,'d'+i);});
${cap(148,175,'Alcohol: ethanol','–OH (hydroxyl) on a carbon')}
grid(470,95,44,40);at('b0',0,0,'H');at('b1',1,0,'C');at('b2',2,0,'O',${B});at('b3',3,0,'C');at('b4',4,0,'H');
bd('b0','b1');bd('b1','b2',1,${B});bd('b2','b3',1,${B});bd('b3','b4');[1,3].forEach(i=>{at('bu'+i,i,-1,'H');at('bd'+i,i,1,'H');bd('b'+i,'bu'+i);bd('b'+i,'bd'+i);});
${cap(558,175,'Ether: dimethyl ether','C–O–C')}
`);
// ---------- Figure 6: aldehydes and ketone ----------
H('fig1_6',900,170,18,`
const co=(p,x,ls,lab,sub)=>{grid(x,100,58,40);at(p+0,0,0,ls[0]);at(p+1,1,0,'C',${B});at(p+2,2,0,ls[1]);at(p+'o',1,-1.5,'O',${B});bd(p+0,p+1);bd(p+1,p+2);bd(p+1,p+'o',2,${B});label(x+58,155,lab,{fs:17,bold:true});};
co('f',60,['H','H'],'Aldehyde: formaldehyde');co('e',360,['H_3C','H'],'Aldehyde: acetaldehyde');co('k',660,['H_3C','CH_3'],'Ketone: acetone');
`);
// ---------- Figure 7: carboxylic acid and ester ----------
H('fig1_7',800,170,18,`
grid(80,100,58,40);at('a0',0,0,'H_3C');at('a1',1,0,'C',${B});at('a2',2,0,'O',${B});at('a3',3,0,'H',${B});at('ao',1,-1.5,'O',${B});bd('a0','a1');bd('a1','a2',1,${B});bd('a2','a3',1,${B});bd('a1','ao',2,${B});
label(167,155,'Carboxylic acid: acetic acid',{fs:17,bold:true});
grid(450,100,58,40);at('b0',0,0,'H_3C');at('b1',1,0,'C',${B});at('b2',2,0,'O',${B});at('b3',3,0,'CH_3');at('bo',1,-1.5,'O',${B});bd('b0','b1');bd('b1','b2',1,${B});bd('b2','b3',1,${B});bd('b1','bo',2,${B});
label(537,155,'Ester: methyl acetate',{fs:17,bold:true});
`);
// ---------- Figure 8: ammonia, amines, amide ----------
H('fig1_8',1000,190,18,`
grid(75,105,50,40);at('n',0,0,'NH_3');label(75,160,'Ammonia',{fs:16,bold:true});label(75,178,'(parent, not an amine)',{fs:13,color:'#555'});
const am=(p,x,l,r,u,lab,sub)=>{grid(x,105,56,40);at(p+0,0,0,l);at(p+1,1,0,'N',${B});at(p+2,2,0,r);at(p+'u',1,-1.2,u);bd(p+0,p+1,1,${B});bd(p+1,p+2,1,r=='H'?{}:${B});bd(p+1,p+'u',1,u=='H'?{}:${B});label(x+56,160,lab,{fs:16,bold:true});label(x+56,178,sub,{fs:13,color:'#555'});};
am('p',165,'CH_3','H','H','Primary amine (1°)','N bonded to 1 C');am('s',345,'CH_3','CH_3','H','Secondary amine (2°)','N bonded to 2 C');am('t',530,'CH_3','CH_3','CH_3','Tertiary amine (3°)','N bonded to 3 C');
grid(745,105,58,40);at('a0',0,0,'CH_3');at('a1',1,0,'C',${B});at('a2',2,0,'NH_2',${B});at('ao',1,-1.5,'O',${B});bd('a0','a1');bd('a1','a2',1,${B});bd('a1','ao',2,${B});
label(803,160,'Amide: acetamide',{fs:16,bold:true});label(803,178,'N bonded to a C=O',{fs:13,color:'#555'});
`);
// ---------- Figure 9: CO2 and H2O polarity ----------
H('fig1_9',820,270,20,`
const R='#c0392b';
grid(110,140,70,40);at('o1',0,0,'O');at('c',1,0,'C');at('o2',2,0,'O');bd('o1','c',2);bd('c','o2',2);['u','d'].forEach(d=>{lp('o1',d);lp('o2',d);});
label(110,105,'δ−',{fs:17,color:R});label(180,105,'δ+',{fs:17,color:R});label(250,105,'δ−',{fs:17,color:R});
dip(165,82,118,82,{color:R});dip(195,82,242,82,{color:R});
label(180,215,'CO_2: linear',{fs:17,bold:true});label(180,237,'bond dipoles cancel → nonpolar',{fs:15,color:'#555'});
grid(560,100,60,40);at('o',0,0,'O');at('h1',-1.15,1.45,'H');at('h2',1.15,1.45,'H');bd('o','h1');bd('o','h2');
dots(543,100,true);dots(577,100,true);
label(560,80,'δ−',{fs:17,color:R});label(470,170,'δ+',{fs:17,color:R});label(650,170,'δ+',{fs:17,color:R});
dip(491,140,523,102,{color:R});dip(629,140,597,102,{color:R});
dip(560,200,560,150,{color:'#1f5fbf'});label(505,195,'net dipole',{fs:14,color:'#1f5fbf',italic:true});
label(560,225,'H_2O: bent',{fs:17,bold:true});label(560,247,'bond dipoles do not cancel → polar',{fs:15,color:'#555'});
`);
// ---------- Figure 10: IMFs ----------
H('fig1_10',900,350,16,`
const rows=[['Ion–dipole','an ion and a polar molecule','Na^+ ions surrounded by water'],['Hydrogen bonding','H bonded to O, N, or F on one molecule and a lone pair','water, alcohols, amines with N–H'],['','on an O, N, or F of another molecule',''],['Dipole–dipole','the δ+ end of one polar molecule and the δ− end of another','CH_3Cl'],['London dispersion','temporary dipoles from moving electrons;','CH_4, all molecules'],['','the only IMF between nonpolar molecules','']];
const box=(y,h,name,a,b,ex,fill)=>{rect(70,y,810,h,{fill,stroke:'#7a8bb0',rx:6});txt(85,y+28,name,{bold:true,fs:17});txt(270,y+26,a,{fs:15});if(b)txt(270,y+46,b,{fs:15});txt(270,y+(b?66:46),'Example: '+ex,{fs:14,italic:true,color:'#555'});};
box(15,58,'Ion–dipole','between an ion and a polar molecule','','Na^+ ions dissolved in water','#dfe6f4');
box(83,80,'Hydrogen bond','between an H that is bonded directly to O, N, or F and a lone pair','on an O, N, or F of another molecule','water, alcohols, carboxylic acids','#e7ecf5');
box(173,80,'Dipole–dipole','between the δ+ end of one polar molecule and the δ− end of another','(polar molecules with no O–H, N–H, or F–H bond)','chloromethane, CH_3Cl','#eff2f9');
box(263,80,'London dispersion','between temporary dipoles caused by moving electrons; present in all','molecules and the only IMF between nonpolar molecules','methane, CH_4','#f7f8fc');
arrow(35,335,35,22,{w:4,head:16,color:'#3b4f7d'});
const t=el('text',{x:0,y:0,'font-family':FONT,'font-size':15,fill:'#3b4f7d','font-weight':'bold',transform:'translate(28,250) rotate(-90)'});t.textContent='stronger attraction';
`);
// ---------- report-sheet structures (260x130) ----------
const S=(n,body)=>H(n,260,130,20,body);
S('fig1_a1',`grid(64,65,44,38);at('h0',0,0,'H');at('c',1,0,'C');at('h1',2,0,'H');at('hu',1,-1,'H');at('hd',1,1,'H');bd('h0','c');bd('c','h1');bd('c','hu');bd('c','hd');`);
S('fig1_a2',`grid(55,65,75,38);at('a',0,0,'CH_3');at('o',1,0,'O');at('b',2,0,'CH_3');bd('a','o');bd('o','b');lp('o','u');lp('o','d');`);
S('fig1_a3',`grid(85,75,45,38);at('h0',0,0,'H');at('c',1,0,'C');at('h1',2,0,'H');at('o',1,-1.4,'O');bd('h0','c');bd('c','h1');bd('c','o',2);lp('o','l');lp('o','r');`);
S('fig1_a4',`grid(85,60,45,38);at('h0',0,0,'H');at('n',1,0,'N');at('h1',2,0,'H');at('hd',1,1.1,'H');bd('h0','n');bd('n','h1');bd('n','hd');lp('n','u');`);
S('fig1_a5',`grid(85,65,90,38);at('a',0,0,'CH_2');at('b',1,0,'CH_2');bd('a','b',2);`);
S('fig1_b1',`grid(60,85,58,38);at('a',0,0,'H_3C');at('c',1,0,'C');at('o',2,0,'OH');at('d',1,-1.5,'O');bd('a','c');bd('c','o');bd('c','d',2);`);
S('fig1_b2',`grid(60,85,58,38);at('a',0,0,'H_3C');at('c',1,0,'C');at('o',2,0,'CH_3');at('d',1,-1.5,'O');bd('a','c');bd('c','o');bd('c','d',2);`);
S('fig1_b3',`grid(65,85,58,38);at('a',0,0,'H');at('c',1,0,'C');at('o',2,0,'OCH_3');at('d',1,-1.5,'O');bd('a','c');bd('c','o');bd('c','d',2);`);
S('fig1_b6',`grid(60,85,58,38);at('a',0,0,'H_3C');at('c',1,0,'C');at('o',2,0,'NH_2');at('d',1,-1.5,'O');bd('a','c');bd('c','o');bd('c','d',2);`);
['a6','b4','b5'].forEach(n=>fs.writeFileSync(__dirname+'/fig1_'+n+'.html',`<svg id="s" xmlns="http://www.w3.org/2000/svg" width="260" height="130" viewBox="0 0 260 130" style="background:#fff"><image href="mol/fig1_${n}.svg" x="0" y="0" width="260" height="130"/></svg>\n<style>body{margin:0}</style>\n`));
console.log('ok');
