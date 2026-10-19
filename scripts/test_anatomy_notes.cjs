const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.resolve(__dirname,'..'),ctx={};vm.createContext(ctx);
const files=['anatomy-data.js','video-notes.js','bones2-data.js','bones3-data.js','bones4-data.js','muscles1-data.js','muscles2-data.js','muscles3-data.js','enrichment-data.js','board-redraw-data.js'];
for(const file of files)vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),ctx);
const expr='[anatomyTopics,bones2Topics,bones3Topics,bones4Topics,muscles1Topics,muscles2Topics,muscles3Topics]';
const before=vm.runInContext(expr,ctx).flat().map(t=>({id:t.id,sections:t.sections.map(s=>({id:s.id,html:s.html}))}));
vm.runInContext(fs.readFileSync(path.join(root,'anatomy-note-images.js'),'utf8'),ctx);
const after=vm.runInContext(expr,ctx).flat();assert.equal(after.length,before.length);
const pages=new Set();let count=0;
after.forEach((t,i)=>{assert.equal(t.id,before[i].id);for(const old of before[i].sections)assert(t.sections.some(s=>s.id===old.id));
 for(const s of t.sections){assert(!/<img[^>]+src="assets\/[^\"]+\.svg"/.test(s.html),t.id+': remaining SVG');
 for(const m of s.html.matchAll(/src="(assets\/anatomy-notes\/pdf-\d+\.webp)"/g)){assert(fs.existsSync(path.join(root,m[1])));pages.add(m[1]);count++;}}
});
assert(count>50);assert(pages.size>20);const manifest=JSON.parse(fs.readFileSync(path.join(root,'assets/anatomy-notes/source.json'),'utf8'));assert.equal(manifest.pdfPages,147);assert.equal(manifest.renderedPages.length,pages.size);
assert(fs.readFileSync(path.join(root,'index.html'),'utf8').includes('anatomy-note-images.js'));
console.log(`PASS: ${after.length} topics preserved; ${count} original-page figures; ${pages.size} unique rendered pages; no displayed SVGs.`);
