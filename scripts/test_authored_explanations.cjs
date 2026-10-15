const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),data=JSON.parse(fs.readFileSync(path.join(root,'explanations/authored-115-2.json'))),ym=JSON.parse(fs.readFileSync(path.join(root,'explanations/index.json')));
const bank={};for(const file of Object.keys(JSON.parse(fs.readFileSync(path.join(root,'question-bank/manifest.json'))).subjectCounts))for(const q of JSON.parse(fs.readFileSync(path.join(root,'question-bank',file+'.json'))))if(q.id.startsWith('115-2-'))bank[q.id]=q;
assert.equal(data.kind,'original-explanations');assert.equal(Object.keys(data.questions).length,200);assert.deepEqual(new Set(Object.keys(data.questions)),new Set(Object.keys(bank)));
const counts={single:0,multiple:0,'all-credit':0};
for(const [id,item] of Object.entries(data.questions)){
 const q=bank[id];assert.deepEqual(item.officialAnswers,q.answers,id);assert.equal(item.officialAnswerPdf,q.answerPdf);assert.equal(item.officialAnswerSource,q.answerSource);
 const status=q.answers.includes('*')?'all-credit':q.answers.length>1?'multiple':'single';assert.equal(item.answerStatus,status,id);counts[status]++;
 assert(item.title.trim().length>0&&item.explanation.trim().length>0&&item.memory.trim().length>0,id);assert.deepEqual(Object.keys(item.options),['A','B','C','D'],id);for(const text of Object.values(item.options))assert(text.trim().length>=5,id);
 assert(item.references.length>0);for(const key of item.references){const ref=data.references[key];assert(ref&&ref.title.length>5,id);assert.equal(new URL(ref.url).protocol,'https:');assert.equal(ref.accessed,'2026-10-15');}
 if(status==='all-credit')assert(item.explanation.includes('一律給分'),id);
}
assert.deepEqual(counts,{single:192,multiple:2,'all-credit':6});for(const key of Object.keys(counts))assert.equal(data.counts[key],counts[key]);
assert(data.questions['115-2-2-74'].note.includes('比較證據'));assert(data.questions['115-2-2-60'].note.includes('2025-12-22'));assert(data.questions['115-2-2-98'].explanation.includes('顆粒狀'));
class Element{
 constructor(){this.isConnected=true;this.children=[];this.innerHTML='';this.listeners={};this.button={addEventListener:(event,fn)=>{this.retry=fn;}};}
 append(el){this.children.push(el);el.parent=this;}querySelector(){return this.button;}addEventListener(event,fn){this.listeners[event]=fn;}remove(){this.parent.children=this.parent.children.filter(x=>x!==this);}insertAdjacentHTML(_,html){this.innerHTML+=html;}
}
const script=fs.readFileSync(path.join(root,'ym-explanations.js'),'utf8');let ownRequests=0,failOwn=false;
function context(){const ctx={URL,URLSearchParams,Map,Set,Promise,fetch:async url=>{if(url.includes('authored')){ownRequests++;if(failOwn)throw Error('network');return{ok:true,json:async()=>data};}return{ok:true,json:async()=>ym};},document:{documentElement:{},createElement:()=>new Element()},MutationObserver:class{observe(){}}};vm.createContext(ctx);vm.runInContext(script,ctx);return ctx;}
(async()=>{
 const ctx=context(),api=ctx.YMExplanations;
 assert(api.panel().includes('200 題'));assert(api.panel().includes('本站撰寫解析'));
 const holder=new Element(),q=bank['115-2-1-1'];await api.attach(q,holder);assert.equal(holder.children.length,1);assert(holder.children[0].innerHTML.includes('本站撰寫（AI）'));assert(holder.children[0].innerHTML.includes('疑核'));assert(holder.children[0].innerHTML.includes('怎麼背、怎麼記'));assert(!holder.children[0].innerHTML.includes('尚無可取得'));assert(!holder.children[0].innerHTML.includes('<iframe'));
 for(const id of ['115-2-1-63','115-2-1-66','115-2-2-95','115-2-2-98']){const h=new Element();await api.attach(bank[id],h);assert(h.children[0].innerHTML.includes('官方更正答案'));assert(h.children[0].innerHTML.includes(data.questions[id].answerStatus==='all-credit'?'一律給分':'均給分'));}
 assert.equal(ownRequests,1,'share one JSON fetch across questions');
 const hostile={...data.questions[q.id],title:'<script>alert(1)</script>',explanation:'<img src=x onerror=alert(1)>'};const escaped=api.authoredHTML(q,hostile,data);assert(!escaped.includes('<script>'));assert(!escaped.includes('<img src=x'));
 const changed=api.authoredHTML({...q,answers:['A']},data.questions[q.id],data);assert(changed.includes('解析待重新核對'));assert(changed.includes('答案 A'));
 const gone=new Element();gone.isConnected=false;await api.attach(q,gone);assert.equal(gone.children.length,0);
 failOwn=true;const errorCtx=context(),retryHolder=new Element();await errorCtx.YMExplanations.attach(q,retryHolder);assert(retryHolder.children[0].innerHTML.includes('已有解析'));assert(!retryHolder.children[0].innerHTML.includes('尚無可取得'));
 failOwn=false;await retryHolder.children[0].retry();assert.equal(retryHolder.children.length,1);assert(retryHolder.children[0].innerHTML.includes('本站撰寫解析'));
 console.log(`PASS: 200 original explanations, 800 option analyses, official grading preserved (192 single, 2 multiple, 6 all-credit), ${Object.keys(data.references).length} linked references, rendering, source separation, escaping, stale answers and retry.`);
})().catch(error=>{console.error(error);process.exitCode=1;});
