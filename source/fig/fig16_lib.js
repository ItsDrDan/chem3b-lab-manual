// Helpers for the Experiment 16 figures (load after chem.js).
// Atoms are placed by coordinates; bonds are shortened where an atom has a text label.
const D2R=Math.PI/180;
function pt(x,y){return {x,y};}
// ring vertices: n-gon centered at (cx,cy), radius r, first vertex at angle a0 (degrees, SVG y down)
function ringPts(cx,cy,r,a0,n=6){const out=[];for(let i=0;i<n;i++){const a=(a0+i*360/n)*D2R;out.push(pt(cx+r*Math.cos(a),cy+r*Math.sin(a)));}return out;}
// regular pentagon fused on edge P-Q, on the side away from (ax,ay). Returns [P,Q,v2,v3,v4] (v2 next to Q, v4 next to P)
function pentOnEdge(P,Q,away){const s=Math.hypot(Q.x-P.x,Q.y-P.y),mx=(P.x+Q.x)/2,my=(P.y+Q.y)/2;
  let nx=-(Q.y-P.y)/s,ny=(Q.x-P.x)/s; if((mx-away.x)*nx+(my-away.y)*ny<0){nx=-nx;ny=-ny;}
  const c=pt(mx+nx*s*0.688,my+ny*s*0.688),R=s*0.8507,aP=Math.atan2(P.y-c.y,P.x-c.x);
  let sg=1; const t=pt(c.x+R*Math.cos(aP+72*D2R),c.y+R*Math.sin(aP+72*D2R)); if(Math.hypot(t.x-Q.x,t.y-Q.y)>1)sg=-1;
  const v=[];for(let k=0;k<5;k++){const a=aP+sg*k*72*D2R;v.push(pt(c.x+R*Math.cos(a),c.y+R*Math.sin(a)));}
  v.center=c; return v;}
function centroid(ps){let x=0,y=0;ps.forEach(p=>{x+=p.x;y+=p.y;});return pt(x/ps.length,y/ps.length);}
// point at distance len from v, directed away from center c (or at angle deg if c is a number)
function ext(v,c,len){if(typeof c=='number'){return pt(v.x+len*Math.cos(c*D2R),v.y+len*Math.sin(c*D2R));}
  const dx=v.x-c.x,dy=v.y-c.y,L=Math.hypot(dx,dy);return pt(v.x+dx/L*len,v.y+dy/L*len);}
// draw a label so that its "anchor" letter sits on the atom position. al: 'l' (first letter on atom) or 'r' (last letter on atom) or 'c'
function atomLabel(a,o={}){const fs=a.fs||o.fs||FS; const t=txt(-999,-999,a.l,{fs}); const w=t.w; t.el.remove();
  const strip=s=>s.replace(/_\{[^}]*\}|_[0-9n]+|\^[0-9]*[+\-−]/g,'');
  const core=strip(a.l); const f=txt(-999,-999,core[0],{fs}); const w1=f.w; f.el.remove(); const g=txt(-999,-999,core[core.length-1],{fs}); const wl=g.w; g.el.remove();
  let x0; const al=a.al||'l'; if(al=='l')x0=a.x-w1/2; else if(al=='r')x0=a.x-(w-wl/2)+ (a.l.match(/\^[0-9]*[+\-−]$/)?0:0); else x0=a.x-w/2;
  if(al=='r'&&/[_^]/.test(a.l.slice(-3))){ // label ends in sub/superscript: last letter is before it
    const m=a.l.match(/^(.*?)([A-Za-z])((?:_\{[^}]*\}|_[0-9n]+|\^[0-9]*[+\-−])+)$/); if(m){const pre=txt(-999,-999,m[1]+m[2],{fs});x0=a.x-(pre.w-wl/2);pre.el.remove();}}
  txt(x0,a.y+fs*0.35,a.l,{fs,color:a.color||o.color,bold:a.bold});}
// atoms: {key:{x,y,l,al,color}} (l empty = carbon vertex); bonds: [k1,k2,order,{ring:centerPt,color,dash,w}]
function drawMol(atoms,bonds,o={}){const fs=o.fs||FS; const rad=a=>a.r??(a.l?fs*0.52:0);
  bonds.forEach(b=>{const A=atoms[b[0]],B=atoms[b[1]],ord=b[2]||1,op=b[3]||{};
    const dx=B.x-A.x,dy=B.y-A.y,L=Math.hypot(dx,dy),ux=dx/L,uy=dy/L; const ra=rad(A),rb=rad(B);
    const sty={color:op.color||o.color,w:op.w||o.w||1.8,dash:op.dash};
    const x1=A.x+ux*ra,y1=A.y+uy*ra,x2=B.x-ux*rb,y2=B.y-uy*rb;
    if(ord==1){line(x1,y1,x2,y2,sty);return;}
    if(op.ring){line(x1,y1,x2,y2,sty); let nx=-uy,ny=ux; const mx=(A.x+B.x)/2,my=(A.y+B.y)/2; if((op.ring.x-mx)*nx+(op.ring.y-my)*ny<0){nx=-nx;ny=-ny;}
      const d=fs*0.32, sh=L*0.16; const sa=Math.max(ra,sh),sb=Math.max(rb,sh);
      line(A.x+ux*sa+nx*d,A.y+uy*sa+ny*d,B.x-ux*sb+nx*d,B.y-uy*sb+ny*d,sty);return;}
    const nx=-uy*fs*0.15,ny=ux*fs*0.15; line(x1+nx,y1+ny,x2+nx,y2+ny,sty); line(x1-nx,y1-ny,x2-nx,y2-ny,sty);});
  for(const k in atoms){const a=atoms[k]; if(a.l)atomLabel(a,o);}
}
function hbond(A,B,o={}){const dx=B.x-A.x,dy=B.y-A.y,L=Math.hypot(dx,dy),ux=dx/L,uy=dy/L,r1=o.r1??10,r2=o.r2??11;
  line(A.x+ux*r1,A.y+uy*r1,B.x-ux*r2,B.y-uy*r2,{dash:o.dash||'5 4',w:o.w||2,color:o.color||'#000'});}
// ---- nucleobase builders ----
// six-ring vertex list for a pyrimidine: hex = ringPts(...); map = indices of [N1,C2,N3,C4,C5,C6] in hex
// kind: 'C','T','U'. o: {b (bond len), nh2:'text'|'explicit', n1:'H'|'sugar'|null, n1Color, nh2al}
function pyrimidine(hex,map,kind,o={}){const b=o.b||42,c=centroid(hex); const [N1,C2,N3,C4,C5,C6]=map.map(i=>hex[i]);
  const A={N1:{...N1,l:'N'},C2:{...C2},N3:{...N3,l:'N'},C4:{...C4},C5:{...C5},C6:{...C6}};
  const B=[['N1','C2'],['C2','N3'],['C4','C5'],['C6','N1'],['C5','C6',2,{ring:c}]];
  A.O2={...ext(C2,c,b),l:'O'}; B.push(['C2','O2',2]);
  if(kind=='C'){B.push(['N3','C4',2,{ring:c}]); addNH2(A,B,'C4','N4',c,b,o);}
  else{B.push(['N3','C4']); A.O4={...ext(C4,c,b),l:'O'}; B.push(['C4','O4',2]); A.H3={...ext(N3,c,b*0.72),l:'H',al:'c'}; B.push(['N3','H3']);
    if(kind=='T'){const m=ext(C5,c,b); A.Me={...m,l:o.meL||'CH_3',al:o.meAl||'l'}; B.push(['C5','Me']);}}
  if(o.n1){const p=ext(N1,c,o.n1=='sugar'?b:b*0.72); A.X1={...p,l:o.n1=='sugar'?'sugar':'H',al:'c',color:o.n1Color}; B.push(['N1','X1',1,{color:o.n1Color}]);}
  drawMol(A,B,o); return A;}
function addNH2(A,B,cKey,nKey,c,b,o){const C=A[cKey]; const N=ext(C,c,b);
  if(o.nh2=='explicit'){A[nKey]={...N,l:'N',al:'c'}; B.push([cKey,nKey]); const a=Math.atan2(N.y-C.y,N.x-C.x)/D2R;
    [a-60,a+60].forEach((d,i)=>{const h=ext(N,d,b*0.72); A[nKey+'h'+i]={...h,l:'H',al:'c'}; B.push([nKey,nKey+'h'+i]);});}
  else{A[nKey]={...N,l:o.nh2al=='r'?'H_2N':'NH_2',al:o.nh2al||'l'}; B.push([cKey,nKey]);}}
// purine: hex, map indices of [N1,C2,N3,C4,C5,C6]; kind 'A' or 'G'; o.n9:'H'|'sugar'
function purine(hex,map,kind,o={}){const b=o.b||42,c=centroid(hex); const [N1,C2,N3,C4,C5,C6]=map.map(i=>hex[i]);
  const pe=pentOnEdge(C4,C5,c); const pc=pe.center; const N7=pe[2],C8=pe[3],N9=pe[4];
  const A={N1:{...N1,l:'N'},C2:{...C2},N3:{...N3,l:'N'},C4:{...C4},C5:{...C5},C6:{...C6},N7:{...N7,l:'N'},C8:{...C8},N9:{...N9,l:'N'}};
  const B=[['C2','N3'],['C4','C5'],['C5','C6'],['C5','N7'],['N7','C8',2,{ring:pc}],['C8','N9'],['N9','C4'],['N1','C2'],['C6','N1']];
  if(kind=='A'){B.splice(7,1,['N1','C2',2,{ring:c}]); B.splice(1,2,['C4','C5'],['C5','C6',2,{ring:c}]); B[0]=['C2','N3']; B.push(['N3','C4',2,{ring:c}]); addNH2(A,B,'C6','N6',c,b,o);}
  else{B.splice(1,1,['C4','C5',2,{ring:c}]); B.splice(0,1,['C2','N3',2,{ring:c}]); B.push(['N3','C4']); A.O6={...ext(C6,c,b),l:'O'}; B.push(['C6','O6',2]);
    A.H1={...ext(N1,c,b*0.72),l:'H',al:'c'}; B.push(['N1','H1']); addNH2(A,B,'C2','N2',c,b,Object.assign({},o,{nh2al:o.g2al}));}
  if(o.n9){const p=ext(N9,pc,o.n9=='sugar'?b:b*0.72); A.X9={...p,l:o.n9=='sugar'?'sugar':'H',al:'c',color:o.n9Color}; B.push(['N9','X9',1,{color:o.n9Color}]);}
  drawMol(A,B,o); return A;}
