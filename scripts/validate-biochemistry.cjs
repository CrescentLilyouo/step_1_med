/* Run with: node scripts/validate-biochemistry.cjs */
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const noop=()=>{};
const element=()=>({classList:{remove:noop,toggle:noop},removeAttribute:noop,setAttribute:noop,textContent:''});
const content={innerHTML:'',querySelectorAll:()=>[]};
const ctx=vm.createContext({content,document:{querySelectorAll:()=>[],getElementById:()=>element()},window:{scrollTo:noop},localStorage:{getItem:()=>null}});
for(const f of ['biochemistry-data.js','biochemistry-amino-acids.js','biochemistry-exams.js','biochemistry-protein-structure-folding.js','biochemistry-hemoglobin-myoglobin.js','biochemistry-enzymes-kinetics.js','biochemistry-bioenergetics.js','biochemistry-respiratory-chain.js','biochemistry-glycolysis-pyruvate.js','biochemistry-tca-cycle.js','biochemistry-gluconeogenesis.js','biochemistry-glycogen-metabolism.js','biochemistry-pentose-hexose.js','biochemistry-fatty-acid-oxidation.js','biochemistry-fatty-acid-synthesis.js','biochemistry.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx,{filename:f});
const chapters=vm.runInContext('biochemistryChapters',ctx);
const bank=JSON.parse(fs.readFileSync(path.join(root,'question-bank/biochemistry.json'),'utf8'));
let rendered=0;
for(const c of chapters){
 if(Number(c.number)>=9){assert.equal(c.recalls.length,c.sections.length);assert.equal(new Set(c.recalls.map(r=>r[0])).size,c.sections.length);for(const s of c.sections){for(const m of s.html.matchAll(/src="([^"]+)"/g))assert(fs.existsSync(path.join(root,m[1])),'missing diagram asset');}}
 const ids=new Set(c.sections.map(s=>s.id));assert.equal(ids.size,c.sections.length);
 const data=vm.runInContext(`bioExamData(biochemistryChapters.find(c=>c.id===${JSON.stringify(c.id)}))`,ctx);
 const seen=new Set();
 for(const g of data.groups){assert(ids.has(g.topic),'invalid exam-topic link');for(const q of g.questions){
  assert(!seen.has(q.id),'duplicate exam');seen.add(q.id);
  const original=bank.find(b=>b.id===q.id);assert(original,'missing source');
  assert.equal(JSON.stringify(q.answers),JSON.stringify(original.answers));
  for(const k of ['pdf','answerPdf','query'])assert.equal(q[k],original[k]);
  assert(q.regions[0].page>=1);assert(q.analysis&&q.trap);
 }}
 for(const route of [[],['reading'],['practice'],['exams'],...c.sections.filter(s=>s.id!=='practice').map(s=>['topic',s.id])]){
  ctx.renderBiochemistry(['subject','biochemistry','chapter',c.id,...route]);
  assert(content.innerHTML.includes('生物化學'));assert(!/undefined|NaN/.test(content.innerHTML));
  if(route[0]==='practice'){assert(content.innerHTML.includes(c.questions.length+' 題自編練習'));assert.equal((content.innerHTML.match(/<summary>作答後看答案與解析/g)||[]).length,c.questions.length);}
  if(c.number==='02')assert(!content.innerHTML.includes('15 題自編練習'),'chapter-one count leaked');
  if(route[0]==='exams')assert.equal((content.innerHTML.match(/class="bio-exam-item"/g)||[]).length,seen.size);
  rendered++;
 }
}
ctx.renderBiochemistry(['subject','biochemistry']);assert(content.innerHTML.includes('CHAPTER 02'));
ctx.renderBiochemistry(['subject','biochemistry','chapter','missing']);assert(content.innerHTML.includes('找不到這個生化頁面'));
const index=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert(index.indexOf('src="biochemistry-data.js')<index.indexOf('src="biochemistry-amino-acids.js'));
assert(index.indexOf('src="biochemistry-amino-acids.js')<index.indexOf('src="biochemistry.js'));
console.log(`PASS: ${chapters.length} chapters, ${rendered+2} routes, exam answers/source fields, counts and script ordering.`);

