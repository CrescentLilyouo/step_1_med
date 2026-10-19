const fs=require('node:fs');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const elements=new Map();
let inserted=[];
let saved={};
function element(id){
 if(!elements.has(id))elements.set(id,{innerHTML:'',textContent:'',classList:{add(){},remove(){},toggle(){}},setAttribute(){},removeAttribute(){},addEventListener(){},insertAdjacentHTML(where,html){inserted.push(html);},scrollIntoView(){}});
 return elements.get(id);
}
const document={getElementById:element,querySelectorAll:()=>[],querySelector:selector=>selector==='.detail-heading'?element('heading'):null};
const context=vm.createContext({document,window:{scrollTo(){},print(){}},localStorage:{getItem:()=>JSON.stringify(saved),setItem:(key,value)=>{saved=JSON.parse(value);}},matchMedia:()=>({matches:true}),Date});
const files=['anatomy-data.js','video-notes.js','bones2-data.js','bones3-data.js','bones4-data.js','muscles1-data.js','muscles2-data.js','muscles3-data.js','muscles4-data.js','enrichment-data.js','board-redraw-data.js','anatomy-note-images.js','anatomy-ui.js','memory-lessons.js','muscles-learning.js','muscles-practice.js','memory-coach.js'];
vm.runInContext(files.map(file=>fs.readFileSync(path.join(root,file),'utf8')).join('\n'),context);
const coverage=vm.runInContext(`Object.entries(memoryLessonChapters).map(([id,lessons])=>{
 const chapter=studyChapters.find(ch=>ch.id===id);
 if(!chapter)throw Error('Missing chapter '+id);
 const expected=chapter.topics.filter(t=>!(/video-notes|board-atlas|exam-sources/.test(t.id)));
 if(expected.some(t=>!lessons[t.id]))throw Error('Uncovered topic in '+id);
 if(Object.keys(lessons).some(key=>!expected.some(t=>t.id===key)))throw Error('Orphan lesson in '+id);
 return {id,topics:expected.length,cards:Object.values(lessons).reduce((n,l)=>n+l[3].length,0)};
})`,context);
assert.equal(coverage.reduce((n,c)=>n+c.topics,0),104);
assert.equal(coverage.reduce((n,c)=>n+c.cards,0),208);
const rendered=vm.runInContext(`(()=>{
 const keys=[];
 for(const chapter of studyChapters){
  for(const topic of chapter.topics){
   const lesson=memoryLessonChapters[chapter.id]?.[topic.id];
   if(!lesson)continue;
   if(lesson.length!==4||lesson[3].some(card=>card.length!==2||card.some(text=>!text)))throw Error('Incomplete lesson '+topic.id);
   renderAnatomy(['subject','anatomy','chapter',chapter.id,'topic',topic.id]);
   const html=memoryPanel(topic);
   if((html.match(/<details>/g)||[]).length!==2)throw Error('Unhidden answers');
   if(html.includes('<details open'))throw Error('Answer visible');
   keys.push(...Array.from(html.matchAll(/data-memory-key="([^"]+)"/g),m=>m[1]));
  }
 }
 return keys;
})()`,context);
assert.equal(new Set(rendered).size,208,'No storage collisions between chapters');
for(const chapter of coverage){
 inserted=[];
 vm.runInContext(`renderAnatomy(['subject','anatomy','chapter','${chapter.id}'])`,context);
 assert(inserted.some(html=>html.includes(`${chapter.topics} 個主題、${chapter.cards} 張回想卡`)));
}
saved={'bones:foramina:0':{due:100,rating:'again'},'bones3:rapid-review:0':{due:90},'muscles1:rapid-review:0':{due:80},'bones3:rapid-review:1':{due:2000},'bones3:rapid-review:99':{due:10},'bones3:missing:0':{due:10},'bones3:rapid-review:x':{due:10}};
assert.equal(vm.runInContext(`memoryDue('bones3',1000).length`,context),1,'Due queue filters chapter, card index, and time');
assert.equal(vm.runInContext(`memoryDue('muscles1',1000)[0][0]`,context),'muscles1:rapid-review:0');
vm.runInContext(`(()=>{
 let previous=null;
 for(const days of [1,3,7,14,14]){previous=memorySchedule(previous,'ready',1000);if(previous.due!==1000+days*86400000)throw Error('Interval');}
 const again=memorySchedule(previous,'again',1000);if(again.stage!==0||again.due!==601000)throw Error('Retry');
 const hard=memorySchedule(previous,'hard',1000);if(hard.stage!==0||hard.due!==86401000)throw Error('Hard');
})()`,context);
context.localStorage.getItem=()=>{throw Error('blocked');};
assert.equal(vm.runInContext(`Object.keys(memoryRead()).length`,context),0);
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert(html.indexOf('anatomy-ui.js')<html.indexOf('memory-lessons.js'));
assert(html.indexOf('memory-lessons.js')<html.indexOf('memory-coach.js'));
assert(html.indexOf('memory-coach.js')<html.indexOf('const subjects='));
console.log('PASS: all 104 topic routes render, 208 hidden recall cards, unique chapter keys, due filters, intervals, blocked storage, chapter counts, script order.');
console.log(JSON.stringify(coverage));
