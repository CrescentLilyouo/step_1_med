/* Uses the same chapter cards, lessons and reading navigation as physiology. */
const biochemistryRoot = '#/subject/biochemistry';
const bioRecall = [
 ['讀代謝路徑時，除了反應順序，你還應問哪六件事？','目的、器官與細胞區室、原料產物、關鍵調控、生理情境及故障後果。'],
 ['水有極性，為什麼整個分子仍不帶淨電荷？','電子分布不均產生部分電荷與偶極，但整體正負電荷仍相等。'],
 ['為什麼「蛋白質表面一定親水」不完全正確？','水溶性球狀蛋白通常如此；膜蛋白接觸脂質尾端的表面可呈疏水性，必須看環境。'],
 ['反應 ΔG 有利，為什麼仍可能很慢？','熱力學方向不等於反應速率；活化能障礙可能很高。酵素降低障礙，不改變總 ΔG 或平衡常數。'],
 ['pH 由 7.4 降到 6.8，H⁺ 約變成幾倍？','10^(7.4−6.8) ≈ 4 倍。pH 越低，H⁺ 越多。'],
 ['pH 與 pKa 各在描述什麼？','pH 描述溶液的酸鹼環境；pKa 描述特定酸性基團在指定條件下的解離特性。'],
 ['pH 比 pKa 高 1 時，去質子化形式約占多少？','去質子化：質子化 = 10：1，分率為 10/11 ≈ 90.9%。'],
 ['羧基與胺基去質子化後，各如何改變電荷？','COOH 由 0 變 COO⁻ 的 −1；NH₃⁺ 由 +1 變 NH₂ 的 0。去質子化不一定變負電。'],
 ['同 pH 的兩杯緩衝液，為什麼可能容量不同？','pH 取決於酸鹼對的比例；容量還受總濃度影響。相同比例下，濃度較高通常有較多儲備。'],
 ['加入強酸後，為什麼不能直接沿用原始 A⁻/HA？','強酸先將 A⁻ 轉成 HA，必須先更新莫耳數。若有過量強酸，需改用適當平衡或濃度計算。'],
 ['HCO₃⁻ 24、PaCO₂ 40，比例為什麼是 20 而非 0.6？','分母需乘 CO₂ 溶解係數 0.03；24/(0.03×40) = 20。注意 mmol/L 與 mmHg 的單位。'],
 ['pH 改變使酵素活性下降，就一定是整個蛋白質變性嗎？','不一定。活性中心的質子化或受質結合可先改變；極端 pH 才可能另外破壞整體結構。'],
 ['pH = pKa，是否表示 pH 7 或分子淨電荷為零？','兩者都不能直接推論。它只代表指定共軛酸鹼對等量。']
];
function bioEscape(s) {return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function bioButton(url,label) {return '<a class="study-button" href="'+url+'">'+label+'</a>';}
function bioProgressKey(c,id) {return 'biochemistry-read-v1:'+c.id+':'+id;}
function bioIsRead(c,id) {try{return localStorage.getItem(bioProgressKey(c,id))==='1';}catch{return false;}}
function bioSection(c,s) {
 const i=c.sections.indexOf(s),r=bioRecall[i];
 return '<section aria-labelledby="bio-'+s.id+'"><h2 id="bio-'+s.id+'" tabindex="-1">'+(i+1)+'　'+s.title+'</h2>'+s.html
 +(r?'<div class="relearn-bridge"><h3>停下來，閉卷說一遍</h3><p>'+r[0]+'</p><label>先寫推理（此欄離開頁面後不保留）<textarea rows="3" placeholder="先說原因，再說結果。"></textarea></label><details><summary>回答後核對</summary><p>'+r[1]+'</p></details></div>':'')
 +'<label><input type="checkbox" data-bio-read="'+s.id+'" '+(bioIsRead(c,s.id)?'checked':'')+'> 已完成本節閱讀</label></section>';
}
function bioPractice(c) {
 return '<section><h2>15 題自編練習</h2><p>先自行作答，再逐題展開解析。這些是教學自編題，不是歷屆考古題，也不計入國考題庫成績。</p><p>文字欄供本頁暫記，離開後不保留。</p></section>'
 +c.questions.map((q,i)=>'<section aria-labelledby="bio-q-'+i+'"><h2 id="bio-q-'+i+'" tabindex="-1">'+q.title+'</h2>'+q.prompt+'<label>我的推理<textarea rows="3" aria-label="'+bioEscape(q.title)+'：我的推理"></textarea></label><details><summary>作答後看答案與解析</summary>'+q.answer+'</details></section>').join('');
}
function bioDiagram() {
 return '<figure><svg class="bio-diagram" viewBox="0 0 760 220" role="img" aria-labelledby="bio-diagram-title bio-diagram-desc"><title id="bio-diagram-title">pH 與 pKa 的比較</title><desc id="bio-diagram-desc">pH 比 pKa 低一時，去質子化對質子化的比例是 1 比 10；兩者相等時為 1 比 1；高一時為 10 比 1。</desc><g font-family="system-ui,sans-serif" text-anchor="middle"><rect x="8" y="20" width="240" height="170" rx="12" fill="#eef5ff" stroke="#b9cfe5"/><rect x="260" y="20" width="240" height="170" rx="12" fill="#edf8f4" stroke="#a4cfc0"/><rect x="512" y="20" width="240" height="170" rx="12" fill="#fff5e7" stroke="#e0c49e"/><g font-size="24" fill="#173d46"><text x="128" y="62">pH = pKa − 1</text><text x="380" y="62">pH = pKa</text><text x="632" y="62">pH = pKa + 1</text></g><g font-size="32" fill="#0f766e"><text x="128" y="110">1 : 10</text><text x="380" y="110">1 : 1</text><text x="632" y="110">10 : 1</text></g><g font-size="18" fill="#425e6d"><text x="128" y="151">質子化形式較多</text><text x="380" y="151">兩種形式各半</text><text x="632" y="151">去質子化形式較多</text></g></g></svg><figcaption>比例皆為「去質子化：質子化」。比例不直接等於電荷，還需辨認羧基、胺基等官能基。</figcaption></figure>';
}
function renderBiochemistry(parts) {
 const c=biochemistryChapters.find(c=>c.id===parts[3]);
 const root=c?biochemistryRoot+'/chapter/'+c.id:biochemistryRoot;
 const mode=parts[4];
 const topic=c&&c.sections.find(s=>s.id===parts[5]&&s.id!=='practice');
 const invalid=(parts.length>2&&(!c||parts[2]!=='chapter'))||(c&&mode&&!['reading','topic','practice','exams'].includes(mode))||(mode==='topic'&&!topic);
 const title=invalid?'找不到這個生化頁面':!c?'生物化學':mode==='topic'?topic.title:mode==='practice'?'章末自編練習':mode==='exams'?'歷屆考點分析':c.title;
 document.querySelectorAll('.nav-subject').forEach(a=>{const active=a.dataset.id==='biochemistry';a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 document.getElementById('home-link').classList.remove('active');document.getElementById('home-link').removeAttribute('aria-current');
 document.getElementById('top-title').textContent='醫學（一） / 生物化學';document.title=title+'｜一階國考';
 const crumb='<nav class="breadcrumb" aria-label="麵包屑"><a href="#/">科目總覽</a><span>/</span><a href="#/medicine-one">醫學（一）</a><span>/</span>'+'<a href="'+biochemistryRoot+'">生物化學</a>'+(c?'<span>/</span><a href="'+root+'">第 '+c.number+' 章</a>':'')+'</nav>';
 const heading='<div class="detail-heading"><p class="eyebrow">'+(c?'CHAPTER '+c.number:'醫學（一） / BIOCHEMISTRY')+'</p><h1 tabindex="-1">'+title+'</h1><p class="intro">'+(c?c.summary:'依 Harper’s 建立完整機轉，沿用生理學的主題目錄、連續閱讀與閉卷回想。')+'</p></div>';
 const actions=c?'<nav class="study-actions" aria-label="章節閱讀方式">'+bioButton(root,'章節目錄')+bioButton(root+'/reading','連續閱讀正文')+bioButton(root+'/practice','15 題自編練習')+bioButton(root+'/exams','歷屆考點分析')+bioButton(biochemistryRoot+'/quiz','全科考古快寫')+'</nav>':'';
 let body='';
 if(invalid)body='<section class="quiz-panel"><p>請由生物化學目錄重新選擇章節。</p>'+bioButton(biochemistryRoot,'回生化目錄')+'</section>';
 else if(!c)body=biochemistryChapters.map(ch=>'<a class="study-banner" style="display:block" href="'+biochemistryRoot+'/chapter/'+ch.id+'"><p class="eyebrow">CHAPTER '+ch.number+'</p><h2>'+ch.title+'</h2><p>'+ch.summary+'</p><div class="study-meta"><span>13 個教學主題</span><span>複習清單</span><span>15 題自編練習</span></div><span class="study-button">進入章節 →</span></a>').join('');
 else {
 const topics=c.sections.filter(s=>s.id!=='practice');
 const source='<footer class="lesson-footer">教材參考：'+c.sources+'<details><summary>完整來源與內容範圍</summary>'+c.references.replace('本章尚未完成臺灣歷屆考題逐題對照，因此不標示未經核實的「必考」「歷屆出現次數」或年份。後續題庫對照時再補入可追溯來源。','本章已新增 20 題歷屆考點精選分析，保留原題來源。這是主題精選，並非完整歷年頻率統計。')+'</details></footer>';
 const progress='<p class="study-progress" data-bio-progress role="status"></p>';
 if(mode==='exams')body=bioExamPage(c,root);
 else if(mode==='practice')body='<article class="lesson bio-lesson">'+bioPractice(c)+source+'</article>';
 else if(mode==='topic'){
 const i=topics.indexOf(topic);
 body=bioExamEntry(root)+progress+'<article class="lesson bio-lesson">'+bioSection(c,topic)+source+'</article><nav class="reading-nav" aria-label="主題前後頁">'+(i?bioButton(root+'/topic/'+topics[i-1].id,'← '+topics[i-1].title):'<span></span>')+(i<topics.length-1?bioButton(root+'/topic/'+topics[i+1].id,topics[i+1].title+' →'):bioButton(root+'/practice','進入自編練習 →'))+'</nav>';
 }else if(mode==='reading'){
 body=bioExamEntry(root)+progress+'<div class="bio-lesson reading-layout"><article class="lesson"><section><h2>重新學習的路徑</h2><p>第一輪讀 1–5 節，建立水與 pH 的直覺；第二輪讀 6–10 節，練習解離、電荷與緩衝計算；第三輪讀生理連結與易錯觀念，再完成章末練習。</p><p>每節先讀完整說明，再停下來閉卷回答；不確定時回到原理與單位。</p>'+bioDiagram()+'</section>'+topics.map(s=>bioSection(c,s)).join('')+'<section><h2>章末練習</h2><p>先完成自編題推理，再讀本章 20 題歷屆考點分析，最後用全科考古快寫練習。全科題庫不侷限本章。</p>'+bioButton(root+'/practice','開始 15 題自編練習')+'</section>'+source+'</article><nav class="reading-toc" aria-label="正文目錄"><strong>本章閱讀目錄</strong>'+topics.map((s,i)=>'<button class="bio-jump" data-bio-jump="bio-'+s.id+'">'+(c.sections.indexOf(s)+1)+'　'+s.title+'</button>').join('')+'</nav></div>';
 }else{
 body='<section class="quiz-panel"><h2>學過但忘了，從完整正文重新接起來</h2><p>先補基礎名詞，再推導公式、看算例，最後閉卷重述。本章保留詳細正文，速讀清單放在最後。</p>'+bioButton(root+'/reading','開始重新學習 →')+'</section>'+bioExamEntry(root)+progress+'<div class="topic-grid">'+topics.map((s,i)=>'<a class="topic-card" href="'+root+'/topic/'+s.id+'"><span class="topic-num">'+String(c.sections.indexOf(s)+1).padStart(2,'0')+'</span><h2>'+s.title+'</h2><p>'+bioEscape((bioRecall[i]||['整合核心觀念與主動回想'])[0])+'</p><div class="study-meta"><span>'+ (bioIsRead(c,s.id)?'已讀':'完整詳解')+'</span></div></a>').join('')+'</div><section class="quiz-panel"><h2>自編練習與歷屆原題分開使用</h2><p>15 題自編練習均附推理解析，另有 20 題歷屆考點分析，保留場次、題號與原卷來源。</p>'+bioButton(root+'/practice','進入 15 題自編練習')+'</section>';
 }
 }
 content.innerHTML=crumb+heading+actions+body;
 if(c&&!invalid){
 const updateProgress=()=>{const topics=c.sections.filter(s=>s.id!=='practice');const n=topics.filter(s=>bioIsRead(c,s.id)).length;content.querySelectorAll('[data-bio-progress]').forEach(el=>el.textContent='閱讀進度 '+n+' / '+topics.length+' 節（僅存於此瀏覽器）');};
 updateProgress();
 content.querySelectorAll('[data-bio-read]').forEach(el=>el.addEventListener('change',()=>{try{localStorage.setItem(bioProgressKey(c,el.dataset.bioRead),el.checked?'1':'0');updateProgress();}catch{el.checked=false;const p=content.querySelector('[data-bio-progress]');if(p)p.textContent='此瀏覽器無法保存閱讀進度，教材仍可正常閱讀。';}}));
 content.querySelectorAll('[data-bio-jump]').forEach(b=>b.addEventListener('click',()=>{const h=document.getElementById(b.dataset.bioJump);h.focus({preventScroll:true});h.scrollIntoView({block:'start'});}));
 }
 window.scrollTo(0,0);
}


function bioExamEntry(root) {
 const n=biochemistryExamAnalysis.groups.reduce((n,g)=>n+g.questions.length,0);
 return '<section class="quiz-panel"><h2>歷屆考點分析</h2><p>按四個觀念整理 '+n+' 題原題，對照不同年份的問法、解題步驟與易錯選項。</p>'+bioButton(root+'/exams','閱讀歷屆考點分析 →')+'</section>';
}
function bioExamPage(c,root) {
 const data=biochemistryExamAnalysis;
 const label=q=>q.year+' 年第 '+q.session+' 次・醫學（'+(q.paper===1?'一':'二')+'）第 '+q.number+' 題';
 const counts=data.groups.map(g=>'<tr><td><a href="'+root+'/topic/'+g.topic+'">'+g.title+'</a></td><td>'+g.questions.length+'</td><td>'+g.summary+'</td></tr>').join('');
 return '<article class="lesson bio-lesson"><section><h2>本章考法地圖</h2><p>從網站既有 '+data.bankCount+' 題生化題庫（民國 '+data.yearMin+'–'+data.yearMax+' 年）中，以主題檢索並人工篩選本章與跨章銜接原題。以下 20 題是本次精選，並非完整命中清單；各組題數不是歷年出題率，也不能用來推估下次考試比例。</p><p>題幹為既有 PDF 文字擷取，已移除可辨識的前題殘留；符號或排版有疑義時以原卷為準。答案沿用題庫的官方採計欄位與答案版本，解析為本教材撰寫。pI 與摺疊熱力學題屬延伸，連接後續章節。</p><div class="table-scroll" tabindex="0" role="region" aria-label="考點分類表"><table><thead><tr><th>考點</th><th>精選題數</th><th>出題變化與讀法</th></tr></thead><tbody>'+counts+'</tbody></table></div><p>本次精選沒有直接的緩衝比例計算原題，不代表歷屆未考；本章公式仍先用自編算例練熟。</p></section>'
 +data.groups.map(g=>'<section><h2>'+g.title+'</h2><p>'+g.summary+'</p>'+bioButton(root+'/topic/'+g.topic,'回讀機轉與觀念')+g.questions.map(q=>'<div class="bio-exam-item"><h3>'+label(q)+'｜'+q.point+'</h3><p class="quiz-note">原題編號：'+q.id+'</p><div class="bio-exam-text">'+bioEscape(q.text)+'</div><details><summary>作答後看採計答案與考點解析</summary><p><strong>題庫官方採計答案：'+q.answers.join('、')+'</strong>（'+(q.answerVersion==='M'?'更正答案 M 版':'答案 '+bioEscape(q.answerVersion||'S')+' 版')+'）</p><p>'+q.analysis+'</p><p><strong>這題怎麼記、怎麼避免錯：</strong>'+q.trap+'</p></details><div class="study-actions"><a class="study-button" href="'+q.pdf+'#page='+q.regions[0].page+'" target="_blank" rel="noopener noreferrer">原題 PDF</a><a class="study-button" href="'+q.answerPdf+'" target="_blank" rel="noopener noreferrer">官方答案 PDF</a><a class="study-button" href="'+q.query+'" target="_blank" rel="noopener noreferrer">考選部來源</a></div></div>').join('')+'</section>').join('')+'</article>';
}
