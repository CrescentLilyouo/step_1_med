const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');let panels=[],inserted=[];
const dummy={innerHTML:'',classList:{add(){},remove(){},toggle(){}},setAttribute(){},removeAttribute(){},addEventListener(){},insertAdjacentHTML(where,html){inserted.push(html);},scrollIntoView(){}};
const doc={getElementById:()=>dummy,querySelector:s=>s==='.detail-heading'?dummy:null,querySelectorAll:s=>s==='[data-muscle-practice]'?panels:[]};
const ctx=vm.createContext({document:doc,window:{scrollTo(){}},localStorage:{getItem:()=>'{"muscles2:diaphragm:0":{"stage":2,"due":1234}}',setItem(){throw Error('Practice must not write review progress');}},matchMedia:()=>({matches:true}),Date});
const files=['anatomy-data.js','video-notes.js','bones2-data.js','bones3-data.js','bones4-data.js','muscles1-data.js','muscles2-data.js','muscles3-data.js','muscles4-data.js','enrichment-data.js','board-redraw-data.js','anatomy-note-images.js','anatomy-ui.js','memory-lessons.js','muscles-learning.js','muscles-practice.js','memory-coach.js'];
for(const f of files)vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx);
const data=JSON.parse(vm.runInContext('JSON.stringify({practice:musclesPractice,chapters:studyChapters,sources:anatomySources})',ctx));
let total=0,position=[0,0,0];const keys=new Set();
for(const [chapter,cases] of Object.entries(data.practice)){
 const topics=data.chapters.find(c=>c.id===chapter).topics;
 assert.equal(Object.keys(cases).length,chapter==='muscles2'?13:chapter==='muscles3'?17:19);
 const main=topics.filter(t=>!(/video-notes|board-atlas|exam-sources/.test(t.id)));assert.deepEqual(Object.keys(cases).sort(),main.map(t=>t.id).sort());
 for(const [topic,c] of Object.entries(cases)){
  assert.equal(c.choices.length,3);assert.equal(new Set(c.choices.map(x=>x.text)).size,3);assert(Number.isInteger(c.correct)&&c.correct>=0&&c.correct<3);position[c.correct]++;
  for(const o of c.choices){assert(o.text.trim());assert(o.why.trim(),topic+' missing explanation');}
  assert(c.question.trim());assert(c.hook.trim());assert(c.limit.trim());assert(c.sources.length>0);
  for(const id of c.sources){const s=data.sources.find(x=>x.id===id);assert(s,'Unknown source '+id);assert(!/VIDEO|YX2021/.test(id),'Exercises need textbook/research references');assert(s.url.startsWith('https://'));}
  const html=vm.runInContext(`studyChapter=studyChapters.find(c=>c.id===${JSON.stringify(chapter)});studyRoot='#/subject/anatomy/chapter/'+studyChapter.id;musclePracticePanel(studyChapter.topics.find(t=>t.id===${JSON.stringify(topic)}))`,ctx);
  assert(html.includes('class="muscle-practice-answer" hidden'));assert.equal((html.match(/type="radio"/g)||[]).length,3);assert(!/\bchecked(?:[\s=>])/.test(html));assert(html.includes('另外兩個選項錯在哪裡'));assert(html.includes('口訣的適用邊界'));
  const key=html.match(/data-muscle-practice="([^"]+)"/)[1];assert(!keys.has(key));keys.add(key);total++;
 }
}
assert.equal(total,49);assert(position.every(n=>n>=16));
// Exercise the real handlers: no choice, wrong choice, correct choice, reset; no storage writes.
const c=data.practice.muscles2.diaphragm,handlers={},resetHandlers={},imageHandlers={};let selected=null;
const answer={hidden:true},status={textContent:''};
const form={addEventListener:(event,fn)=>handlers[event]=fn,querySelector:()=>selected,reset(){selected=null;}};
const panel={dataset:{chapter:'muscles2',topic:'diaphragm'},querySelector:s=>({'form':form,'.muscle-practice-answer':answer,'.muscle-practice-status':status,'[data-practice-reset]':{addEventListener:(e,f)=>resetHandlers[e]=f},'[data-practice-image]':{addEventListener:(e,f)=>imageHandlers[e]=f}}[s])};
panels=[panel];vm.runInContext('musclePracticeBind()',ctx);let prevented=0;const event={preventDefault(){prevented++;}};
handlers.submit(event);assert(answer.hidden);assert(status.textContent.includes('先選'));
selected={value:String((c.correct+1)%3)};handlers.submit(event);assert(!answer.hidden);assert(status.textContent.includes('這次選了'));
selected={value:String(c.correct)};handlers.submit(event);assert(status.textContent.includes('答對了'));
resetHandlers.click();assert(answer.hidden);assert.equal(selected,null);assert(status.textContent.includes('已清空'));assert.equal(prevented,3);
vm.runInContext(`renderAnatomy(['subject','anatomy','chapter','muscles2','topic','diaphragm'])`,ctx);assert(inserted.some(h=>h.includes('data-muscle-practice="muscles2-diaphragm"')));
assert.equal(vm.runInContext(`memoryRead()['muscles2:diaphragm:0'].stage`,ctx),2);
vm.runInContext(`studyChapter=studyChapters.find(c=>c.id==='muscles1')`,ctx);assert.equal(vm.runInContext('musclePracticeChapter()',ctx),'');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');assert(html.indexOf('muscles-practice.js')>html.indexOf('muscles-learning.js'));assert(html.indexOf('muscles-practice.js')<html.indexOf('memory-coach.js'));
console.log('PASS: 49 unique exercises, every target topic covered, three answer positions balanced '+position+', primary references, hidden solutions, real submit/reset handlers, chapter isolation, integration and original progress preserved.');
