function studyEscape(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function studyReadProgress(){try{return JSON.parse(localStorage.getItem('step1-bones-progress')||'{}')||{};}catch{return {};}}
function studyProgressKey(id){return studyChapter.id==='bones'?id:studyChapter.id+':'+id;}
function studySetProgress(id){const p=studyReadProgress(),key=studyProgressKey(id);p[key]=!p[key];try{localStorage.setItem('step1-bones-progress',JSON.stringify(p));}catch{}return !!p[key];}
const studyChapters=[
 {id:'bones',n:'01',title:'概論與骨骼（1）',code:'2016DF01 01',length:'1:53:41',updated:'2026-10-09',topics:anatomyTopics,video:'https://www.youtube.com/watch?v=eyqrhbdYX3w'},
 {id:'bones2',n:'02',title:'骨骼（2）',code:'2016DF01 02',length:'1:53:48',updated:'2026-10-09',topics:bones2Topics,video:bones2VideoUrl},
 {id:'bones3',n:'03',title:'骨骼（3）',code:'2016DF02 01',length:'1:53:42',updated:'2026-10-10',topics:bones3Topics,video:bones3VideoUrl}
];
let studyChapter=studyChapters[0];
let studyRoot='#/subject/anatomy/chapter/bones';
let studyTopics=anatomyTopics,studyChapterTitle='概論與骨骼（1）',studyChapterNumber='01';
function studyCrumbs(title){return `<nav class="breadcrumb" aria-label="麵包屑"><a href="#/">科目總覽</a><span>/</span><a href="#/medicine-one">醫學（一）</a><span>/</span><a href="#/subject/anatomy">解剖學</a>${title?`<span>/</span><a href="${studyRoot}">${studyChapterTitle}</a><span>/</span><span>${studyEscape(title)}</span>`:''}</nav>`;}
function studyMarkNavigation(title){document.querySelectorAll('.nav-subject').forEach(a=>{const active=a.dataset.id==='anatomy';a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});document.getElementById('home-link').classList.remove('active');document.getElementById('home-link').removeAttribute('aria-current');document.getElementById('top-title').textContent='醫學（一） / 解剖學';document.title=title+'｜一階國考';}
function studyTopicCards(query=''){
 const progress=studyReadProgress(),q=query.trim().toLocaleLowerCase();
 const matches=studyTopics.filter(t=>!q||[t.title,t.english,t.summary,...t.sections.map(s=>s.title+' '+s.html.replace(/<[^>]*>/g,' '))].join(' ').toLocaleLowerCase().includes(q));
 return matches.length?matches.map(t=>`<a class="topic-card" href="${studyRoot}/topic/${t.id}"><span class="topic-num">${String(studyTopics.indexOf(t)+1).padStart(2,'0')} / ${t.sections.length} 節${progress[studyProgressKey(t.id)]?' · 已讀':''}</span><h2>${t.title}</h2><p>${t.summary}</p><div class="study-meta"><span>${t.english}</span></div></a>`).join(''):'<div class="no-results">找不到相關內容，試試骨頭名稱、英文術語或神經名稱。</div>';
}
function renderAnatomy(parts){
 const content=document.getElementById('content');
 studyChapter=studyChapters.find(c=>c.id===parts[3])||studyChapters[0];studyTopics=studyChapter.topics;studyChapterTitle=studyChapter.title;studyChapterNumber=studyChapter.n;studyRoot='#/subject/anatomy/chapter/'+studyChapter.id;
 if(parts.length===2){
  studyMarkNavigation('解剖學');content.innerHTML=studyCrumbs('')+`<div class="detail-heading"><p class="eyebrow">醫學（一） / ANATOMY</p><h1 tabindex="-1">解剖學</h1><p class="intro">依影片分章，從逐段筆記進入圖表與教材核對。</p></div>`+studyChapters.map(c=>`<a class="study-banner" style="display:block" href="#/subject/anatomy/chapter/${c.id}"><p class="eyebrow">CHAPTER ${c.n}</p><h2>${c.title}</h2><p>全片逐段筆記、主題比較表、流程圖與教材核對。</p><div class="study-meta"><span>${c.topics.length} 個子頁</span><span>${c.length}</span><span>可搜尋、標記已讀、列印</span></div><span class="study-button">進入章節 →</span></a>`).join('');
 }else{
  const topic=studyTopics.find(t=>t.id===parts[5]);
  if(!topic){
   studyMarkNavigation(studyChapterTitle);const total=studyTopics.filter(t=>studyReadProgress()[studyProgressKey(t.id)]).length;
   content.innerHTML=studyCrumbs(studyChapterTitle)+`<div class="detail-heading"><p class="eyebrow">CHAPTER ${studyChapterNumber} / ${studyChapter.code}</p><h1 tabindex="-1">${studyChapterTitle}</h1><p class="intro">先建立空間位置，再把骨頭、通道、神經與症狀串起來。</p><div class="study-meta"><span>${studyTopics.length} 個子頁</span><span>比較表與流程圖</span><span>更新：${studyChapter.updated}</span><span>醫學（一）</span></div></div><div class="study-note">已完成全長音訊自動轉錄與板書抽樣核對，新增全片逐段筆記、回看時間及教材更正。整理方法與限制見逐段筆記首頁；外部來源、圖號與官方考題核對見來源頁。</div><div class="study-actions"><a href="${studyChapter.video}" target="_blank" rel="noopener" class="study-button">${studyChapter.id==='bones'?'影片來源':'原課程播放清單'}</a><a href="${studyRoot}/topic/exam-sources" class="study-button">考題與來源</a><span class="study-progress">已讀 ${total} / ${studyTopics.length}（記錄於此瀏覽器）</span></div><label for="study-search">搜尋本章內容</label><input id="study-search" class="study-search" type="search" placeholder="例如：胸骨角、肩胛上切跡、舟狀骨、L4" autocomplete="off"><p id="search-count" aria-live="polite" class="study-progress">顯示全部 ${studyTopics.length} 個子頁</p><div id="topic-cards" class="topic-grid">${studyTopicCards()}</div>`;
   document.getElementById('study-search').addEventListener('input',e=>{document.getElementById('topic-cards').innerHTML=studyTopicCards(e.target.value);const n=document.querySelectorAll('#topic-cards .topic-card').length;document.getElementById('search-count').textContent=`找到 ${n} 個子頁`;});
  }else{
   studyMarkNavigation(topic.title);const i=studyTopics.indexOf(topic),progress=studyReadProgress();
   content.innerHTML=studyCrumbs(topic.title)+`<div class="detail-heading"><p class="eyebrow">CHAPTER ${studyChapterNumber} / ${String(i+1).padStart(2,'0')}</p><h1 tabindex="-1">${topic.title}</h1><p class="intro">${topic.summary}</p><div class="study-meta"><span>${topic.english}</span><span>${topic.sections.length} 節</span><span>${topic.id.endsWith('video-notes')?'影片整理＋教材核對':studyChapter.id==='bones3'?'影片重點＋教材補充':'教材補充'}</span></div></div><div class="study-actions"><a href="${studyRoot}" class="study-button">← 章節目錄</a><button id="mark-read" type="button" aria-pressed="${!!progress[studyProgressKey(topic.id)]}">${progress[studyProgressKey(topic.id)]?'✓ 已讀，點此取消':'標記為已讀'}</button><button id="print-study" type="button">列印本頁</button></div><div class="reading-layout"><article class="lesson">${topic.sections.map(s=>`<section id="section-${s.id}"><h2>${s.title}</h2>${s.html}</section>`).join('')}<footer class="lesson-footer">本頁參考：${topic.sources.map(id=>{const s=anatomySources.find(x=>x.id===id);return `<a href="${s.url}" target="_blank" rel="noopener">${id} · ${studyEscape(s.title)}</a>`;}).join(' ／ ')}<p>教材補充與圖像導讀，不是影片逐字稿。OpenStax 相關改編內容依 CC BY-NC-SA 4.0；Access for free at <a href="https://openstax.org/books/anatomy-and-physiology-2e/pages/1-introduction" target="_blank" rel="noopener">OpenStax</a>。完整說明見<a href="${studyRoot}/topic/exam-sources">來源頁</a>。</p></footer></article><nav class="reading-toc" aria-label="本頁目錄"><strong>本頁內容</strong>${topic.sections.map(s=>`<a href="#section-${s.id}" data-section="section-${s.id}">${s.title.replace(/^\d+｜/,'')}</a>`).join('')}<a class="topic-link" href="${studyRoot}">全部 ${studyTopics.length} 個子頁 →</a><a href="${studyRoot}/topic/exam-sources">考題與參考來源 →</a></nav></div><nav class="reading-nav" aria-label="章節前後頁">${i?`<a class="study-button" href="${studyRoot}/topic/${studyTopics[i-1].id}">← ${studyTopics[i-1].title}</a>`:'<span></span>'}${i<studyTopics.length-1?`<a class="study-button" href="${studyRoot}/topic/${studyTopics[i+1].id}">${studyTopics[i+1].title} →</a>`:''}</nav>`;
   document.getElementById('mark-read').addEventListener('click',e=>{const read=studySetProgress(topic.id);e.currentTarget.setAttribute('aria-pressed',String(read));e.currentTarget.textContent=read?'✓ 已讀，點此取消':'標記為已讀';});
   document.getElementById('print-study').addEventListener('click',()=>window.print());
   document.querySelectorAll('[data-section]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();document.getElementById(a.dataset.section).scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});}));
  }
 }
 window.scrollTo(0,0);
}
