const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),els=new Map();let inserted=[];
function el(id){if(!els.has(id))els.set(id,{innerHTML:'',textContent:'',classList:{add(){},remove(){},toggle(){}},setAttribute(){},removeAttribute(){},addEventListener(){},insertAdjacentHTML(where,html){inserted.push(html);},scrollIntoView(){}});return els.get(id);}
const document={getElementById:el,querySelectorAll:()=>[],querySelector:s=>s==='.detail-heading'?el('heading'):null};
const ctx=vm.createContext({document,window:{scrollTo(){},print(){}},localStorage:{getItem:()=>'{"muscles1:eyelid:0":{"stage":3,"due":1000,"rating":"ready"}}',setItem(){throw Error('Rendering must not overwrite progress');}},Date,matchMedia:()=>({matches:true})});
const files=['anatomy-data.js','video-notes.js','bones2-data.js','bones3-data.js','bones4-data.js','muscles1-data.js','muscles2-data.js','muscles3-data.js','muscles4-data.js','enrichment-data.js','board-redraw-data.js','anatomy-note-images.js','anatomy-ui.js','memory-lessons.js','muscles-learning.js','muscles-practice.js','memory-coach.js'];
for(const f of files)vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx);
const result=vm.runInContext(String.raw`(()=>{
 const before=JSON.stringify(studyChapters.map(c=>c.topics));let tasks=0,checks=0,paths=0,links=0;
 for(const [id,guide] of Object.entries(musclesLearning)){
  const chapter=studyChapters.find(c=>c.id===id);if(!chapter)throw Error('Chapter '+id);
  const mains=chapter.topics.filter(t=>memoryLessonChapters[id][t.id]);
  if(mains.length!==Object.keys(guide.tasks).length)throw Error('Task coverage '+id);
  renderAnatomy(['subject','anatomy','chapter',id]);
  const overview=muscleChapterGuide();if((overview.match(/<details>/g)||[]).length!==4||overview.includes('<details open'))throw Error('Chapter answers not hidden');
  if(guide.paths.length!==3||guide.checks.length!==4)throw Error('Route/check count');paths+=3;checks+=4;
  const routeIds=guide.paths.flatMap(p=>p[2]);if(new Set(routeIds).size!==mains.length||mains.some(t=>!routeIds.includes(t.id)))throw Error('Incomplete reading route '+id);
  for(const t of mains){
   renderAnatomy(['subject','anatomy','chapter',id,'topic',t.id]);
   const task=muscleImageTask(t),panel=memoryPanel(t);
   if(!task.includes(guide.tasks[t.id])||guide.tasks[t.id].length<30)throw Error('Missing meaningful task '+t.id);
   if(!panel.includes(task)||(panel.match(/<details>/g)||[]).length!==2)throw Error('Changed recall cards '+t.id);
   if(!panel.includes('data-memory-key="'+id+':'+t.id+':0"'))throw Error('Changed existing key '+t.id);
   tasks++;
  }
  const all=overview+guide.related.map(([from,ch,t,label])=>{if(!mains.some(x=>x.id===from))throw Error('Orphan related source');return muscleLearningLink(ch,t,label);}).join('');
  for(const m of all.matchAll(/#\/subject\/anatomy\/chapter\/([^/"<]+)\/topic\/([^"<]+)/g)){
   if(!studyChapters.find(c=>c.id===m[1])?.topics.some(t=>t.id===m[2]))throw Error('Broken cross-link '+m[0]);links++;
  }
 }
 if(before!==JSON.stringify(studyChapters.map(c=>c.topics)))throw Error('Learning UI changed source content');
 if(memoryRead()['muscles1:eyelid:0'].stage!==3)throw Error('Existing review progress lost');
 return {tasks,checks,paths,links};
})()`,ctx);
assert.equal(result.tasks,65);assert.equal(result.checks,16);assert.equal(result.paths,12);
assert(inserted.some(h=>h.includes('本章學習路線')));assert(inserted.some(h=>h.includes('原圖指認任務')));
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');assert(html.indexOf('muscles-learning.js')>html.indexOf('memory-lessons.js'));assert(html.indexOf('muscles-learning.js')<html.indexOf('memory-coach.js'));
console.log('PASS: '+JSON.stringify(result)+'; every muscle topic has a specific image task, chapter answers hidden, links resolve, existing source content and progress keys preserved.');
