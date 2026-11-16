// Exp 2 helper: draw structural formulas from grid atoms.
// mol(ox,oy,step,atoms,bonds,o): atoms = [[id,gx,gy,label],...]; label '' = bare vertex (skeletal)
// bonds = [[idA,idB,kind]] kind: 1 (default), 'w' wedge, 'd' dash
function mol(ox,oy,s,atoms,bonds,o={}){
  const fs=o.fs||FS; const A={};
  atoms.forEach(([id,gx,gy,l,c])=>{const x=ox+gx*s,y=oy+gy*s; let hw=0,hh=0;
    if(l){hw=atomAt(x,y,l,{fs,color:c})+3; hh=fs*0.55;} A[id]={x,y,hw,hh};});
  bonds.forEach(([a,b,k])=>{const p=A[a],q=A[b]; const dx=q.x-p.x,dy=q.y-p.y,L=Math.hypot(dx,dy),ux=dx/L,uy=dy/L;
    const tr=(n)=>{if(!n.hw)return 0; const tx=Math.abs(ux)>1e-6?n.hw/Math.abs(ux):1e9, ty=Math.abs(uy)>1e-6?n.hh/Math.abs(uy):1e9; return Math.min(tx,ty);};
    const t1=tr(p),t2=tr(q); const x1=p.x+ux*t1,y1=p.y+uy*t1,x2=q.x-ux*t2,y2=q.y-uy*t2;
    if(k=='w'){const nx=-uy*5,ny=ux*5; el('polygon',{points:`${x1},${y1} ${x2+nx},${y2+ny} ${x2-nx},${y2-ny}`,fill:COLOR});}
    else if(k=='d'){const n=7; for(let i=1;i<=n;i++){const f=i/n, w=5*f; const cx=x1+(x2-x1)*f, cy=y1+(y2-y1)*f; line(cx-uy*w,cy+ux*w,cx+uy*w,cy-ux*w,{w:1.6});}}
    else line(x1,y1,x2,y2,o.bondColor?{color:o.bondColor}:{});
  });
  return A;
}
// straight chain complete structural formula helper: carbons along x, H above/below, end H
function hchain(n){const at=[],bd=[];for(let i=0;i<n;i++){at.push(['C'+i,i,0,'C'],['U'+i,i,-1,'H'],['D'+i,i,1,'H']);bd.push(['C'+i,'U'+i],['C'+i,'D'+i]);if(i)bd.push(['C'+(i-1),'C'+i]);}
  at.push(['L',-1,0,'H'],['R',n,0,'H']);bd.push(['L','C0'],['C'+(n-1),'R']);return [at,bd];}
