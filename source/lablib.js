const fs=require('fs');
const D=require('docx');
const {Document,Packer,Paragraph,TextRun,ImageRun,Table,TableRow,TableCell,WidthType,BorderStyle,AlignmentType,HeadingLevel,Footer,PageNumber,TabStopType,ShadingType,LevelFormat,HeightRule,VerticalAlign,TableLayoutType}=D;
const HF='Hadassah Friedlaender', TNR='Times New Roman', BLUE='2F5496', W=9360;
const LANG={value:'en-US'};
// alt text: fig/alt.json (file name -> description) for images without a caption; otherwise the caption text
let ALT=null; const plain=s=>String(s||'').replace(/\*\*|\*/g,'').replace(/[_^]\{([^}]*)\}/g,'$1').trim();
function altFor(file,fallback){if(!ALT){try{ALT=JSON.parse(fs.readFileSync(require('path').join(__dirname,'fig','alt.json'),'utf8'));}catch(e){ALT={};}}
  const k=require('path').basename(file); return {name:k,title:'',description:ALT[k]||plain(fallback)||''};}
// markup: **bold**, *italic*, _{sub}, ^{sup}
function runs(s,base={}){
  s=String(s).replace(/ °C/g,'\u00a0°C'); const out=[]; let b=!!base.bold,i=!!base.italics; const re=/(\*\*|\*|_\{[^}]*\}|\^\{[^}]*\})/g; let last=0,m;
  const push=(t,ex={})=>{if(t)out.push(new TextRun(Object.assign({text:t,bold:b,italics:i,font:base.font||TNR,size:base.size||24,color:base.color},ex)));};
  while((m=re.exec(s))){push(s.slice(last,m.index)); const t=m[0];
    if(t=='**')b=!b; else if(t=='*')i=!i; else if(t[0]=='_')push(t.slice(2,-1),{subScript:true}); else push(t.slice(2,-1),{superScript:true});
    last=re.lastIndex;}
  push(s.slice(last)); return out;
}
const P=(s,o={})=>new Paragraph({children:runs(s,o.run||{}),spacing:{after:o.after??160,before:o.before??0,line:o.line??264},alignment:o.align,indent:o.indent,keepNext:o.keepNext,pageBreakBefore:o.pageBreak});
// Heading levels follow the outline (H1 title → H2 → H3 → H4) so screen readers can navigate; the look of each
// heading call is fixed, only its level adapts (e.g. 'Goals' right after a title is a level-2 heading).
// PARENT: level of the last title/h2; CUR: level of the last title/h2/h3
let PARENT=0,CUR=0; const HL=[null,HeadingLevel.HEADING_1,HeadingLevel.HEADING_2,HeadingLevel.HEADING_3,HeadingLevel.HEADING_4];
const title=s=>{PARENT=1;CUR=1; return new Paragraph({heading:HeadingLevel.HEADING_1,children:[new TextRun({text:s,font:HF,size:56,bold:true,color:BLUE})],spacing:{before:0,after:240}});};
// Section names used by every lab. The Report Sheet is the data-collection part (ends with the Lab Check-Out stamp);
// the Questions and Problems are the post-lab report. finalize() adds the stamp boxes next to these headings.
const H2NAME={'Report Sheet':'Report Sheet: Data Collection','Questions and Problems':'Post-Lab Report: Questions and Problems'};
// While a lab is being built, answer spaces on the pre-lab page and report-sheet box heights are scaled down slightly
// so the stamp boxes fit without pushing a question or box onto its own page.
let MODE=null; const SCALE={prelab:{space:0.8,h:1},report:{space:0.8,h:0.85}};
const sc=(k,v)=>Math.round(v*((SCALE[MODE]||{})[k]??1));
const H2KIND={'Pre-Lab Questions':'prelab','Report Sheet':'report','Questions and Problems':'questions'};
const h2=(s,o={})=>{PARENT=2;CUR=2; const p=new Paragraph({heading:HeadingLevel.HEADING_2,children:[new TextRun({text:H2NAME[s]||s,font:HF,size:40,bold:true})],spacing:{before:o.before??320,after:160},keepNext:true,pageBreakBefore:o.pageBreak,border:o.rule?{top:{style:BorderStyle.SINGLE,size:24,color:'000000',space:8}}:undefined}); p.__kind=H2KIND[s]; MODE=H2KIND[s]||null; return p;};
const h3=(s,o={})=>{const lv=PARENT+1; CUR=lv; return new Paragraph({heading:HL[lv],children:[new TextRun({text:s,font:HF,size:28,bold:true,color:'000000'})],spacing:{before:o.before??280,after:120},keepNext:true,pageBreakBefore:o.pageBreak});};
const h4=s=>new Paragraph({heading:HL[Math.min(CUR+1,4)],children:runs('**'+s+'**',{color:'000000'}),spacing:{before:160,after:100},keepNext:true});
const bullet=(s,lvl=0)=>new Paragraph({children:runs(s),numbering:{reference:'bul',level:lvl},spacing:{after:80,line:264}});
const step=(lab,s,o={})=>new Paragraph({children:[new TextRun({text:lab+' ',bold:true,font:TNR,size:24}),...runs(s)],indent:{left:o.left??540,hanging:o.left===0?0:540},spacing:{after:o.after??140,line:264},keepNext:o.keepNext});
const sub=(s)=>new Paragraph({children:runs(s),indent:{left:540},spacing:{after:140,line:264}});
const materials=s=>new Paragraph({children:[new TextRun({text:'Materials: ',bold:true,font:TNR,size:24}),...runs(s)],indent:{left:360,hanging:360},spacing:{after:160,line:264}});
const note=(lab,s)=>new Paragraph({children:[new TextRun({text:lab+' ',bold:true,font:TNR,size:24}),...runs(s)],spacing:{after:160,line:264}});
const caution=s=>new Paragraph({children:runs('**Caution:** *'+s+'*'),spacing:{after:160,line:264}});
function img(file,wpx,hpx,caption,alt){const out=[new Paragraph({alignment:AlignmentType.CENTER,keepNext:!!caption,spacing:{before:120,after:caption?60:160},children:[new ImageRun({type:'png',data:fs.readFileSync(file),transformation:{width:wpx,height:hpx},altText:altFor(file,alt||caption)})]})];
  if(caption)out.push(new Paragraph({alignment:AlignmentType.CENTER,children:runs(caption,{size:20}),spacing:{after:200}}));return out;}
const bd={style:BorderStyle.SINGLE,size:6,color:'000000'}; const borders={top:bd,bottom:bd,left:bd,right:bd};
// cell content: string (markup) or array of strings
function cell(c,w,o={}){const arr=Array.isArray(c)?c:[c];return new TableCell({borders,width:{size:w,type:WidthType.DXA},verticalAlign:o.valign||VerticalAlign.TOP,
  shading:o.shade?{fill:o.shade,type:ShadingType.CLEAR,color:'auto'}:undefined,columnSpan:o.span,margins:{top:60,bottom:60,left:100,right:100},
  children:arr.map(t=>new Paragraph({alignment:o.align,children:runs(t,{bold:o.bold,size:o.size||22}),spacing:{after:0}}))});}
// rows: array of arrays; header row bold+shaded; opts.heights per row (twips) ; opts.firstColBold
function table(widths,rows,o={}){const total=widths.reduce((a,b)=>a+b,0);
  return new Table({width:{size:total,type:WidthType.DXA},columnWidths:widths,layout:TableLayoutType.FIXED,rows:rows.map((r,ri)=>{
    const hdr=ri<(o.header??1); let h=hdr?null:(Array.isArray(o.h)?o.h[ri]:o.h); if(h&&!o.noscale)h=sc('h',h);
    let ci=0; const cells=r.map(c=>{const isO=c&&typeof c=='object'&&!Array.isArray(c); let span=1,val=c; if(isO){span=c.span||1;val=c.t;} const w=widths.slice(ci,ci+span).reduce((a,b)=>a+b,0); const res=cell(val,w,{bold:hdr||(o.firstColBold&&ci==0)||(isO&&c.bold),shade:hdr?'E7ECF5':(isO?c.shade:undefined),align:hdr?AlignmentType.CENTER:(isO?c.align:undefined),span:span>1?span:undefined}); ci+=span; return res;});
    return new TableRow({cantSplit:true,tableHeader:hdr&&o.repeat!==false,height:h?{value:h,rule:HeightRule.ATLEAST}:undefined,children:cells});})});}
const gap=(n=1)=>Array.from({length:n},()=>new Paragraph({children:[],spacing:{after:0}}));
const space=tw=>new Paragraph({children:[],spacing:{before:0,after:sc('space',tw)}});
const nameBlock=()=>[P('Name ___________________________________  Date ________________________________',{after:280}),P('Lab Partner ______________________________  Section ______________________________',{after:280})];
// Instructor check box for a model or demonstration step: checkRow('A.3','both D and L models shown')
const checkRow=(lab,s,o={})=>table([6160,3200],[[ '☐ **'+(lab?lab+' ':'')+'Instructor check:** '+s, o.stamp?['**Instructor stamp or signature:**']:'Initials or stamp:' ]],{header:0,h:o.h??(o.stamp?900:620),noscale:true});
// Stamp box under the Pre-Lab Questions heading, and the Lab Check-Out box that closes the Report Sheet (data collection)
const prelabStamp=()=>[table([6160,3200],[['Name ______________________   Section ________',['**Pre-Lab check:**','*instructor stamp or signature*']]],{header:0,h:820,noscale:true}),new Paragraph({children:[],spacing:{before:0,after:140}})];
const checkoutBox=()=>[new Paragraph({children:[],spacing:{before:0,after:160}}),table([6160,3200],[[['**Lab Check-Out** (end of data collection): ☐ bench and sink clean   ☐ equipment and kits returned   ☐ waste in the correct containers'],['**Check-out:**','*instructor stamp or signature*']]],{header:0,h:820,noscale:true})];
function finalize(children){const out=[];for(const c of children){
  if(c&&c.__kind==='questions')out.push(...checkoutBox());
  out.push(c);
  if(c&&c.__kind==='prelab')out.push(...prelabStamp());}
  return out;}
function build(children,out){
  children=finalize(children);
  if(global.__COLLECT){global.__COLLECT.push({children,out});return Promise.resolve();}
  const doc=new Document({creator:'Daniel Kwasniewski, Ph.D. and Alexandra Aloia',title:'CHEM 3B Laboratory Manual',description:'CC BY 4.0',styles:{default:{document:{run:{font:TNR,size:24,language:LANG}}},
    paragraphStyles:[{id:'Heading1',name:'Heading 1',basedOn:'Normal',next:'Normal',quickFormat:true,run:{font:HF,size:56,bold:true,color:BLUE},paragraph:{spacing:{before:0,after:240},keepNext:true,outlineLevel:0}},
      {id:'Heading2',name:'Heading 2',basedOn:'Normal',next:'Normal',quickFormat:true,run:{font:HF,size:40,bold:true,color:'000000'},paragraph:{spacing:{before:320,after:160},keepNext:true,outlineLevel:1}},
      {id:'Heading3',name:'Heading 3',basedOn:'Normal',next:'Normal',quickFormat:true,run:{font:HF,size:28,bold:true,color:'000000'},paragraph:{spacing:{before:280,after:120},keepNext:true,outlineLevel:2}},
      {id:'Heading4',name:'Heading 4',basedOn:'Normal',next:'Normal',quickFormat:true,run:{font:TNR,size:24,bold:true,italics:false,color:'000000'},paragraph:{spacing:{before:160,after:100},keepNext:true,outlineLevel:3}}]},
    numbering:{config:[{reference:'bul',levels:[{level:0,format:LevelFormat.BULLET,text:'•',alignment:AlignmentType.LEFT,style:{paragraph:{indent:{left:720,hanging:360}}}},{level:1,format:LevelFormat.BULLET,text:'◦',alignment:AlignmentType.LEFT,style:{paragraph:{indent:{left:1440,hanging:360}}}}]}]},
    sections:[{properties:{page:{size:{width:12240,height:15840},margin:{top:1440,right:1440,bottom:1440,left:1440}}},
      footers:{default:new Footer({children:[new Paragraph({tabStops:[{type:TabStopType.RIGHT,position:W}],children:[new TextRun({text:'CHEM 3B Laboratory Manual',font:TNR,size:20}),new TextRun({children:['\t',PageNumber.CURRENT],font:TNR,size:24})]})]})},
      children}]});
  return Packer.toBuffer(doc).then(b=>fs.writeFileSync(out,b));
}
module.exports={checkRow,finalize,altFor,LANG,HF,TNR,BLUE,runs,P,title,h2,h3,h4,bullet,step,sub,materials,note,caution,img,table,gap,space,nameBlock,build,W,D};
