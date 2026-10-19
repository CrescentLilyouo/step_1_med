const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),ctx=vm.createContext({});
for(const f of ['anatomy-data.js','video-notes.js','bones2-data.js','bones3-data.js','bones4-data.js','muscles1-data.js','muscles2-data.js','muscles3-data.js','enrichment-data.js','board-redraw-data.js','anatomy-note-images.js','anatomy-ui.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx);
const data=JSON.parse(vm.runInContext('JSON.stringify({topics:muscles2Topics,sources:anatomySources,lessons:muscles2MemoryLessons,chapter:studyChapters.find(c=>c.id==="muscles2")})',ctx));
assert.equal(data.topics.length,16);assert.equal(new Set(data.topics.map(t=>t.id)).size,16);
assert(data.chapter.scope.includes('未完成音訊轉錄'));assert.equal(data.chapter.code,'2016DF03 02');
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
  for(const m of s.html.matchAll(/#\/subject\/anatomy\/chapter\/muscles2\/topic\/([^"<]+)/g))assert(ids.has(m[1]),'Broken topic link '+m[1]);
 }
}
assert.equal(tables,38);assert.equal(pages.size,8);
assert.equal(data.topics.find(t=>t.id==='muscles2-video-notes').sections.length,26);
assert.equal(Object.keys(data.lessons).length,13);
const source=JSON.parse(fs.readFileSync(path.join(root,'assets/muscles2-source.json'),'utf8'));
assert.equal(source.sampledFrames,346);assert.equal(source.durationSeconds,6906.933333);assert.match(source.sha256,/^[a-f0-9]{64}$/);
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');assert(html.indexOf('muscles2-data.js')<html.indexOf('anatomy-ui.js'));assert(html.indexOf('muscles2-data.js')<html.indexOf('memory-coach.js'));
console.log('PASS: sixth chapter registration, 16 unique topic routes, 25 timeline segments, 38 tables, 8 valid original-page assets, sources, anchors, recall coverage and honest source scope.');
