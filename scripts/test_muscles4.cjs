const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),ctx=vm.createContext({});
for(const f of ['anatomy-data.js','video-notes.js','bones2-data.js','bones3-data.js','bones4-data.js','muscles1-data.js','muscles2-data.js','muscles3-data.js','muscles4-data.js','enrichment-data.js','board-redraw-data.js','anatomy-note-images.js','anatomy-ui.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx);
const data=JSON.parse(vm.runInContext('JSON.stringify({topics:muscles4Topics,sources:anatomySources,lessons:muscles4MemoryLessons,chapter:studyChapters.find(c=>c.id==="muscles4")})',ctx));
assert.equal(data.topics.length,22);assert.equal(new Set(data.topics.map(t=>t.id)).size,22);
assert(data.chapter.scope.includes('未完成音訊轉錄'));assert.equal(data.chapter.code,'2016DF04 02');
const ids=new Set(data.topics.map(t=>t.id)),sources=new Set(data.sources.map(s=>s.id)),pages=new Set();let tables=0;
for(const t of data.topics){
 assert.equal(new Set(t.sections.map(s=>s.id)).size,t.sections.length,t.id+' duplicate section anchors');
 for(const id of t.sources)assert(sources.has(id),'Unresolved source '+id);
 for(const s of t.sections){
  tables+=(s.html.match(/<table>/g)||[]).length;
  for(const m of s.html.matchAll(/(?:src|href)="(assets\/[^"?#]+)"/g)){
   const f=path.join(root,m[1]);assert(fs.existsSync(f),m[1]);assert(fs.statSync(f).size>0,m[1]);
   if(m[1].endsWith('.webp')){pages.add(m[1]);assert.equal(fs.readFileSync(f).toString('ascii',8,12),'WEBP');}
  }
  for(const m of s.html.matchAll(/#\/subject\/anatomy\/chapter\/muscles4\/topic\/([^"<]+)/g))assert(ids.has(m[1]),'Broken topic link '+m[1]);
 }
}
assert.equal(tables,40);assert.equal(pages.size,5);
assert.equal(data.topics.find(t=>t.id==='muscles4-video-notes').sections.length,32);
assert.equal(Object.keys(data.lessons).length,19);
const source=JSON.parse(fs.readFileSync(path.join(root,'assets/muscles4-source.json'),'utf8'));
assert.equal(source.sampledFrames,330);assert.equal(source.durationSeconds,6585.6);assert.match(source.sha256,/^[a-f0-9]{64}$/);
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');assert(html.indexOf('muscles4-data.js')<html.indexOf('anatomy-ui.js'));assert(html.indexOf('muscles4-data.js')<html.indexOf('memory-coach.js'));
console.log('PASS: eighth chapter registration, 22 unique topic routes, 31 timeline segments, 40 tables, 5 valid original-page assets, sources, anchors, recall coverage and honest source scope.');
