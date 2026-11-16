// Minimal structural-formula drawing helpers (SVG + text measurement)
const NS='http://www.w3.org/2000/svg';
let SVG, FS=20, FONT='"Times New Roman", Times, serif', BL=26, COLOR='#000';
function init(id,fs){SVG=document.getElementById(id); if(fs)FS=fs;}
function el(tag,attrs,parent){const e=document.createElementNS(NS,tag);for(const k in attrs)e.setAttribute(k,attrs[k]);(parent||SVG).appendChild(e);return e;}
// label markup: _2 subscript digits, ^+ / ^- / ^2+ superscript
function txt(x,y,label,o={}){
  const fs=o.fs||FS;
  const t=el('text',{x:x,y:y,'font-family':o.font||FONT,'font-size':fs,fill:o.color||COLOR,'font-style':o.italic?'italic':'normal','font-weight':o.bold?'bold':'normal'});
  const re=/(_\{[^}]*\}|_[0-9n]+|\^[0-9]*[+\-−])/g; let last=0,m,shift=0;
  const parts=[];
  while((m=re.exec(label))){ if(m.index>last)parts.push(['n',label.slice(last,m.index)]); parts.push([m[0][0]=='_'?'s':'p',m[0][1]=='{'?m[0].slice(2,-1):m[0].slice(1)]); last=re.lastIndex;}
  if(last<label.length)parts.push(['n',label.slice(last)]);
  for(const [k,s] of parts){
    const sp=el('tspan',{},t); sp.textContent= k=='p'? s.replace('-','−') : s;
    let want = k=='s'?fs*0.3: k=='p'?-fs*0.38:0;
    sp.setAttribute('dy',want-shift); shift=want;
    if(k!='n')sp.setAttribute('font-size',fs*0.68);
  }
  // center horizontally if requested
  const w=t.getComputedTextLength();
  if(o.anchor=='middle'){t.setAttribute('x',x-w/2);}
  else if(o.anchor=='end'){t.setAttribute('x',x-w);}
  return {w,el:t};
}
// atom label centered at (x,y) ; returns half width
function atomAt(x,y,label,o={}){const r=txt(x,y+(o.fs||FS)*0.35,label,Object.assign({anchor:'middle'},o));return r.w/2;}
function line(x1,y1,x2,y2,o={}){return el('line',{x1,y1,x2,y2,stroke:o.color||COLOR,'stroke-width':o.w||1.6,'stroke-dasharray':o.dash||'','stroke-linecap':'round'});}
function bond(x1,y1,x2,y2,order=1,o={}){
  if(order==1){line(x1,y1,x2,y2,o);return;}
  const dx=x2-x1,dy=y2-y1,L=Math.hypot(dx,dy),nx=-dy/L*2.6,ny=dx/L*2.6;
  line(x1+nx,y1+ny,x2+nx,y2+ny,o);line(x1-nx,y1-ny,x2-nx,y2-ny,o);
}
// chain of atoms on a horizontal line. atoms: [{l, up:{l,order}, down:{l,order}, color, bondColor, bondBefore(order)}]
function chain(x,y,atoms,o={}){
  const pos=[]; const fs=o.fs||FS; const vb=o.vbond||22; let cx=x;
  atoms.forEach((a,i)=>{
    // measure
    const tmp=txt(-999,-999,a.l,{fs}); const hw=tmp.w/2; tmp.el.remove();
    if(i==0){cx=x+hw;} else { const p=pos[i-1]; const x1=p.x+p.hw+4, x2=x1+(a.bl||o.bl||BL); cx=x2+4+hw; bond(x1,y,x2,y,a.order||1,{color:a.bondColor||o.color}); }
    atomAt(cx,y,a.l,{fs,color:a.color||o.color});
    if(a.up){const uy=y-fs*0.62, ty=uy-vb; bond(cx,uy,cx,ty,a.up.order||1,{color:a.up.bondColor||o.color}); atomAt(cx,ty-fs*0.6,a.up.l,{fs,color:a.up.color||o.color});}
    if(a.down){const dy0=y+fs*0.62, ty=dy0+vb; bond(cx,dy0,cx,ty,a.down.order||1,{color:a.down.bondColor||o.color}); atomAt(cx,ty+fs*0.45,a.down.l,{fs,color:a.down.color||o.color});}
    pos.push({x:cx,hw});
  });
  const last=pos[pos.length-1]; return {pos,end:last.x+last.hw,start:x};
}
function arrow(x1,y1,x2,y2,o={}){
  line(x1,y1,x2,y2,o); const a=Math.atan2(y2-y1,x2-x1),h=o.head||11;
  el('polygon',{points:`${x2},${y2} ${x2-h*Math.cos(a-0.35)},${y2-h*Math.sin(a-0.35)} ${x2-h*Math.cos(a+0.35)},${y2-h*Math.sin(a+0.35)}`,fill:o.color||COLOR});
}
function label(x,y,s,o={}){return txt(x,y,s,Object.assign({anchor:'middle',fs:o.fs||FS*0.8},o));}
function rect(x,y,w,h,o={}){return el('rect',{x,y,width:w,height:h,rx:o.rx||6,fill:o.fill||'none',stroke:o.stroke||'none','stroke-width':o.sw||1.5,'stroke-dasharray':o.dash||''});}
// glycerol-backbone rows: rows = array of chain-atom arrays (first atom is the backbone carbon); returns {ends:[...]}
function backbone(x,y,rows,gap,o={}){const res=[];rows.forEach((r,i)=>{const yy=y+i*gap; res.push(chain(x,yy,r,o));});
  for(let i=0;i<rows.length-1;i++){const a=res[i].pos[0],b=res[i+1].pos[0]; const ax=a.x-a.hw+FS*0.36,bx=b.x-b.hw+FS*0.36; line(ax,y+i*gap+(FS*0.6),bx,y+(i+1)*gap-(FS*0.6));}
  return res;}
