// Compile the full CHEM 3B OER Laboratory Manual into one .docx
// usage: node master.js <fig dir> <out.docx>
const path=require('path'); const fs=require('fs');
const FIG=path.resolve(process.argv[2]||'fig'); const OUT=process.argv[3]||'out/CHEM3B_Lab_Manual.docx';
const L=require('./lablib.js'); const {D,TNR,HF,BLUE,W}=L;
const {Document,Packer,Paragraph,TextRun,Header,Footer,PageNumber,TabStopType,AlignmentType,BorderStyle,LevelFormat,NumberFormat,TableOfContents,HeadingLevel}=D;
const FM=require('./src/frontmatter.js');

const LABS=[['exp01','Experiment 1: Functional Groups'],['exp02','Experiment 2: Structures of Alkanes'],['exp03','Experiment 3: Hydrocarbons'],
 ['exp04','Experiment 4: Alcohols and Phenols'],['exp05','Experiment 5: Aldehydes and Ketones'],['exp06','Experiment 6: Carboxylic Acids and Esters'],
 ['exp07','Experiment 7: Amines and Amides'],['exp08','Experiment 8: Tests for Carbohydrates'],['exp09','Experiment 9: Lipids'],
 ['exp10','Experiment 10: Aspirin and Analgesics'],['exp11','Experiment 11: Amino Acids'],['exp12','Experiment 12: Peptides and Proteins'],
 ['exp13','Experiment 13: Enzymes'],['exp14','Experiment 14: Vitamins'],['exp15','Experiment 15: Nucleic Acids and DNA Extraction'],
 ['workshop_carbohydrates','Workshop: Types of Carbohydrates'],['workshop_chirality','Workshop: Chirality Stations'],['appendix','Appendices']];

// collect each lab's children without writing files
function collect(name){
  const f=path.join(__dirname,'src',name+'.js'); if(!fs.existsSync(f)){console.warn('MISSING',name);return null;}
  global.__COLLECT=[]; const save=process.argv.slice();
  process.argv=[save[0],f,FIG,'/dev/null'];
  delete require.cache[require.resolve(f)]; require(f);
  process.argv=save; const got=global.__COLLECT; global.__COLLECT=null;
  if(got.length!==1) throw new Error(name+' produced '+got.length+' builds');
  return got[0].children;
}

// Printed and bound double-sided: mirror margins with a 1.25-inch inside (binding) margin and a 0.75-inch outside margin.
// The text width stays 6.5 inches, so the page layout is the same as with plain 1-inch margins.
const page={size:{width:12240,height:15840},margin:{top:1440,right:1080,bottom:1440,left:1800,header:708,footer:708}};
// Running header and page number sit on the outside edge: right on odd (right-hand) pages, left on even pages.
const hdr=(t,even)=>new Header({children:[new Paragraph({alignment:even?AlignmentType.LEFT:AlignmentType.RIGHT,border:{bottom:{style:BorderStyle.SINGLE,size:4,color:'8EA9DB',space:4}},children:[new TextRun({text:t,font:TNR,size:18,italics:true,color:'595959'})]})]});
const ftr=even=>new Footer({children:[new Paragraph({tabStops:[{type:TabStopType.RIGHT,position:W}],children:even?[new TextRun({children:[PageNumber.CURRENT],font:TNR,size:22}),new TextRun({text:'\tCHEM 3B Laboratory Manual',font:TNR,size:18,color:'595959'})]:[new TextRun({text:'CHEM 3B Laboratory Manual',font:TNR,size:18,color:'595959'}),new TextRun({children:['\t',PageNumber.CURRENT],font:TNR,size:22})]})]});
const empty=()=>new Footer({children:[new Paragraph({children:[]})]});
const emptyH=()=>new Header({children:[new Paragraph({children:[]})]});

const sections=[];
const add=(children,o={})=>sections.push({__tag:o.tag||'front',properties:Object.assign({page:Object.assign({},page,o.pageNumbers?{pageNumbers:o.pageNumbers}:{})},o.odd?{type:D.SectionType.ODD_PAGE}:{}),
  headers:{default:o.header?hdr(o.header):emptyH(),even:o.header?hdr(o.header,true):emptyH()},footers:{default:o.nofoot?empty():ftr(),even:o.nofoot?empty():ftr(true)},children});

// Static table of contents (page numbers measured from a Word page map; see remap.sh)
const TOC_TITLES=[['To the Student','To the Student'],['Laboratory Safety','Laboratory Safety'],['Laboratory Safety Agreement','Laboratory Safety Agreement'],
 ['Chemical Waste Disposal','Chemical Waste Disposal'],['Laboratory Notebooks and Reports','Laboratory Notebooks and Reports'],['Measurements and Uncertainty','Measurements and Uncertainty'],
 ...LABS.filter(([n])=>/^exp/.test(n)).map(([n,h],i)=>['Experiment #'+(i+1)+':',h.replace(/^Experiment (\d+):/,'Experiment #$1:')]),
 ['Workshop: Types','Workshop: Types of Carbohydrates'],['Workshop: Chirality','Workshop: Chirality Stations'],
 ['Appendix A:','Appendix A: Common Laboratory Equipment'],['Appendix B:','Appendix B: Organic Functional Groups'],['Appendix C:','Appendix C: IUPAC Naming Guide'],
 ['Appendix D:','Appendix D: Molecular Shapes and Electronegativity'],['Appendix E:','Appendix E: Biomolecules Reference Sheet'],['Appendix F:','Appendix F: Periodic Table and Reference Data']];
function staticToc(pages){
  const missing=TOC_TITLES.filter(([k])=>!(k in pages)).map(([k])=>k); if(missing.length) throw new Error('TOC pages missing: '+missing);
  return TOC_TITLES.map(([k,t])=>{const lab=/^Experiment|^Appendix/.test(t);
    return new Paragraph({tabStops:[{type:TabStopType.RIGHT,position:W,leader:'dot'}],spacing:{before:k==='Experiment #1:'||k==='Workshop: Types'||k==='Appendix A:'?160:0,after:50},
      children:[new TextRun({text:t,font:TNR,size:24}),new TextRun({text:'\t'+pages[k],font:TNR,size:24})]});});
}
const F=FIG+'/';
add(FM.cover(F),{nofoot:true});
// Bound as a book: a blank page backs the cover, and each lab, the workshop and the appendices start on a right-hand (odd) page.
// Word adds a blank page before a section when needed (odd-page section breaks).
add([new Paragraph({children:[]})],{nofoot:true});
add(FM.copyright(),{nofoot:true});
add([new Paragraph({children:[new TextRun({text:'Contents',font:HF,size:56,bold:true,color:BLUE})],spacing:{after:240}}),
     ...(process.env.PROOF?[]:process.env.TOCJSON?staticToc(JSON.parse(fs.readFileSync(process.env.TOCJSON,'utf8'))):[new TableOfContents('Contents',{hyperlink:true,headingStyleRange:'1-1'})])],{pageNumbers:{start:1,formatType:NumberFormat.LOWER_ROMAN}});
[['toStudent','To the Student'],['safety','Laboratory Safety'],['contract','Laboratory Safety Agreement'],['waste','Chemical Waste Disposal'],['notebook','Laboratory Notebooks and Reports'],['measurement','Measurements and Uncertainty']]
  .forEach(([fn,h])=>add(FM[fn](),{header:h,pageNumbers:{formatType:NumberFormat.LOWER_ROMAN}}));
let first=true;
for(const [name,h] of LABS){const ch=collect(name); if(!ch)continue;
  add(ch,{tag:name,header:h,odd:true,pageNumbers:first?{start:1,formatType:NumberFormat.DECIMAL}:undefined}); first=false;}
// PART=front|expNN|appendix writes only that part, with the manual's own running header and page numbers,
// so a single-experiment Word file (and its PDF) matches the pages of the full manual.
let docTitle='CHEM 3B Laboratory Manual';
if(process.env.PART){const part=process.env.PART; const keep=sections.filter(x=>x.__tag===part); if(!keep.length) throw new Error('no part '+part);
  if(part!=='front'){const pages=JSON.parse(fs.readFileSync(process.env.TOCJSON,'utf8')); const lab=LABS.find(([n])=>n===part);
    const key=part==='appendix'?'Appendix A:':part==='workshop_carbohydrates'?'Workshop: Types':part==='workshop_chirality'?'Workshop: Chirality':'Experiment #'+parseInt(part.slice(3))+':'; keep[0].properties.page.pageNumbers={start:parseInt(pages[key]),formatType:NumberFormat.DECIMAL};
    docTitle=part==='appendix'?'CHEM 3B Laboratory Manual: Appendices A–F':lab[1];}
  else docTitle='CHEM 3B Laboratory Manual: Front Matter and Safety';
  sections.length=0; sections.push(...keep);}
sections.forEach(x=>delete x.__tag);

const doc=new Document({evenAndOddHeaderAndFooters:true,creator:'Daniel Kwasniewski, Ph.D. and Alexandra Aloia',title:docTitle,description:'CC BY 4.0',
  features:{updateFields:!process.env.PROOF && !process.env.NOPROMPT},
  styles:{default:{document:{run:{font:TNR,size:24,language:L.LANG}}},
    paragraphStyles:[{id:'Heading1',name:'Heading 1',basedOn:'Normal',next:'Normal',quickFormat:true,run:{font:HF,size:56,bold:true,color:BLUE},paragraph:{spacing:{before:0,after:240},keepNext:true,outlineLevel:0}},
      {id:'Heading2',name:'Heading 2',basedOn:'Normal',next:'Normal',quickFormat:true,run:{font:HF,size:40,bold:true,color:'000000'},paragraph:{spacing:{before:320,after:160},keepNext:true,outlineLevel:1}},
      {id:'Heading3',name:'Heading 3',basedOn:'Normal',next:'Normal',quickFormat:true,run:{font:HF,size:28,bold:true,color:'000000'},paragraph:{spacing:{before:280,after:120},keepNext:true,outlineLevel:2}},
      {id:'Heading4',name:'Heading 4',basedOn:'Normal',next:'Normal',quickFormat:true,run:{font:TNR,size:24,bold:true,italics:false,color:'000000'},paragraph:{spacing:{before:160,after:100},keepNext:true,outlineLevel:3}},
      {id:'TOC1',name:'toc 1',basedOn:'Normal',next:'Normal',run:{font:TNR,size:24},paragraph:{spacing:{before:60,after:60}}}]},
  numbering:{config:[{reference:'bul',levels:[{level:0,format:LevelFormat.BULLET,text:'•',alignment:AlignmentType.LEFT,style:{paragraph:{indent:{left:720,hanging:360}}}},{level:1,format:LevelFormat.BULLET,text:'◦',alignment:AlignmentType.LEFT,style:{paragraph:{indent:{left:1440,hanging:360}}}}]}]},
  sections});
// docx cannot set mirror margins, so add <w:mirrorMargins/> to word/settings.xml after packing.
const {unzipSync,zipSync,strFromU8,strToU8}=require('fflate');
function mirror(buf){const z=unzipSync(new Uint8Array(buf)); let x=strFromU8(z['word/settings.xml']);
  if(!x.includes('<w:mirrorMargins/>')) x=x.replace(/(<w:settings[^>]*>(<w:displayBackgroundShape\/>)?)/,'$1<w:mirrorMargins/>');
  z['word/settings.xml']=strToU8(x); return Buffer.from(zipSync(z,{level:6}));}
Packer.toBuffer(doc).then(b=>{b=mirror(b);fs.writeFileSync(OUT,b);console.log('wrote',OUT,sections.length,'sections');});
