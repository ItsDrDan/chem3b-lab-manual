// Haworth helpers for Experiment #8 figures (needs chem.js)
const BLU='#1f5fbf', RED='#c0392b', GRN='#1e8449', GRY='#777';
let U=40, SL=36;
// normal pyranose: C4 left, C5 back-left, O back-right, C1 right, C2 front-right, C3 front-left
const PN={C4:[-1.3,0],C5:[-0.6,-0.62],O:[0.6,-0.62],C1:[1.3,0],C2:[0.6,0.58],C3:[-0.6,0.58]};
// flipped pyranose (turned over about the C1-C4 axis): ring O front-right, C5 front-left, C3 back-left, C2 back-right
const PF={C4:[-1.3,0],C3:[-0.6,-0.62],C2:[0.6,-0.62],C1:[1.3,0],O:[0.6,0.58],C5:[-0.6,0.58]};
function pyran(cx,cy,subs,flip){
  const P=flip?PF:PN; const pt=k=>[cx+P[k][0]*U,cy+P[k][1]*U];
  const order=flip?['C4','C3','C2','C1','O','C5']:['C4','C5','O','C1','C2','C3'];
  const thick=flip?[['C1','O'],['O','C5'],['C5','C4']]:[['C1','C2'],['C2','C3'],['C3','C4']];
  return ring(pt,order,thick,subs);
}
function ring(pt,order,thick,subs){
  const isThick=(a,b)=>thick.some(([p,q])=>(p==a&&q==b)||(p==b&&q==a));
  const sh=(xa,ya,xb,yb)=>{const L=Math.hypot(xb-xa,yb-ya);return [xa+(xb-xa)*11/L,ya+(yb-ya)*11/L];};
  for(let i=0;i<order.length;i++){const a=order[i],b=order[(i+1)%order.length];let [x1,y1]=pt(a),[x2,y2]=pt(b);
    if(a=='O')[x1,y1]=sh(x1,y1,x2,y2); if(b=='O')[x2,y2]=sh(x2,y2,x1,y1);
    line(x1,y1,x2,y2,{w:isThick(a,b)?5:1.7});}
  const [ox,oy]=pt('O'); atomAt(ox,oy,'O');
  const out={};
  for(const k of order){out[k]=pt(k);}
  for(const k in subs){const [x,y]=pt(k); const s=subs[k];
    ['up','down'].forEach(d=>{ if(!s[d])return; const v=s[d]; const lab=typeof v=='string'?v:v.l; const len=(typeof v=='object'&&v.len)||SL;
      const col=typeof v=='object'?v.c:undefined; const yy=d=='up'?y-len:y+len;
      if(lab==='-'){line(x,y,x,yy,{color:col,w:typeof v=='object'&&v.w||1.7});return;}
      line(x,y,x,yy+(d=='up'?10:-10),{color:col,w:typeof v=='object'&&v.w||1.7}); atomAt(x+(typeof v=='object'&&v.dx||0),d=='up'?yy:yy+2,lab,{color:col,bold:typeof v=='object'&&v.bold});});
  }
  return out;
}
function num(p,n,dx,dy){label(p[0]+dx,p[1]+dy,String(n),{fs:12,color:GRY});}
