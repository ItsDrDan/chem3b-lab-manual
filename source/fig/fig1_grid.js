// Exp 1 helpers on top of chem.js: atoms on a grid, bonds trimmed to labels, lone pairs, dipole arrows
const A={}; let GX=0,GY=0,DX=44,DY=40; const BLUE='#1f5fbf';
function grid(x0,y0,dx,dy){GX=x0;GY=y0;if(dx)DX=dx;if(dy)DY=dy;}
function at(id,c,r,l,o={}){const x=GX+c*DX,y=GY+r*DY,fs=o.fs||FS;const hw=l?atomAt(x,y,l,Object.assign({fs},o)):0;A[id]={x,y,hw:l?hw+2:0,hh:l?fs*0.42:0};return A[id];}
function trim(a,ux,uy){if(!a.hw)return 0;const tx=Math.abs(ux)>1e-6?a.hw/Math.abs(ux):1e9,ty=Math.abs(uy)>1e-6?a.hh/Math.abs(uy):1e9;return Math.min(tx,ty)+3;}
function bd(i,j,order=1,o={}){const a=A[i],b=A[j];const dx=b.x-a.x,dy=b.y-a.y,L=Math.hypot(dx,dy),ux=dx/L,uy=dy/L;
  const ta=trim(a,ux,uy),tb=trim(b,ux,uy);const x1=a.x+ux*ta,y1=a.y+uy*ta,x2=b.x-ux*tb,y2=b.y-uy*tb;const nx=-uy,ny=ux;
  const offs=order==1?[0]:order==2?[-2.8,2.8]:[-4.2,0,4.2];offs.forEach(d=>line(x1+nx*d,y1+ny*d,x2+nx*d,y2+ny*d,o));}
function dots(x,y,vert,o={}){const r=1.9;[[-3.6,0],[3.6,0]].forEach(([p,q])=>el('circle',{cx:vert?x+q:x+p,cy:vert?y+p:y+q,r,fill:o.color||COLOR}));}
function lp(id,dir,o={}){const a=A[id];const g=4.5;if(dir=='u')dots(a.x,a.y-a.hh-g,false,o);if(dir=='d')dots(a.x,a.y+a.hh+g,false,o);if(dir=='l')dots(a.x-a.hw-g+1,a.y,true,o);if(dir=='r')dots(a.x+a.hw+g-1,a.y,true,o);}
// dipole arrow: crossed tail at (x1,y1), head at (x2,y2)
function dip(x1,y1,x2,y2,o={}){arrow(x1,y1,x2,y2,Object.assign({w:2,head:10},o));const L=Math.hypot(x2-x1,y2-y1),ux=(x2-x1)/L,uy=(y2-y1)/L,cx=x1+ux*8,cy=y1+uy*8;line(cx-uy*6,cy+ux*6,cx+uy*6,cy-ux*6,Object.assign({w:2},o));}
