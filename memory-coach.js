/* Learning prompts based on the existing chapter and its cited sources. */
const memoryLessons = {
 orientation: ['先固定座標，再描述位置','每次先做解剖學姿勢：掌心朝前，左右以受觀察者為準。再用自己的身體比出內外、近遠、淺深。','看圖時先確認觀看方向；不要把自己的右邊直接當成病人的右邊。',[
  ['解剖學姿勢下，橈骨和尺骨何者在外側？','橈骨在外側，尺骨在內側。先把掌心轉向前，再找拇指側的橈骨。'],
  ['「淺／深」和「上／下」能互換嗎？','不能。淺／深以距身體表面的距離為準；上／下是另一組方向。']]],
 'bone-basics': ['先分群，再背數字','先畫兩欄：中軸、附肢。每遇到一塊骨，先放回類別，再從原表補上骨數。骨性標記則分成關節面、附著點、通道三類來理解。','成人的骨數與發育中的骨節數可能不同；遇到數字先確認題目在數什麼。',[
  ['為什麼不直接把所有骨性標記當成名字清單背？','先想它是關節面、肌肉韌帶附著處，還是神經血管通道，才能把名稱和位置、功能連起來。'],
  ['讀到骨數題，第一步要確認什麼？','確認年齡、分類和計數單位；再回原表核對，避免把骨節數當成成人骨塊數。']]],
 spine: ['把椎骨畫成一張地圖','先畫前方椎體、後方椎弓和中央椎孔；再比較頸、胸、腰椎。椎間盤題先分突出方向，再找神經根。','不要看到 L4–5 就一律選 L5；孔內／遠外側與後外側突出要分開。',[
  ['為什麼脊柱可以同時出現 33 節與成人 26 塊骨的描述？','計數單位不同：薦椎與尾椎會癒合，骨節數與成人獨立骨塊數不能混用。'],
  ['L4–5 椎間盤突出時，能只靠節段決定受壓神經嗎？','不能。先判斷後外側，或孔內／遠外側等方向，再分通過與離開的神經根。']]],
 thorax: ['先背分類規則，再放進數字','用是否直接連到胸骨分組：1–7 真肋、8–12 假肋；其中 11–12 為浮肋。把浮肋畫在假肋的大框裡。','浮肋是沒有前端胸骨連接的假肋子群；不要把兩個分類當成互斥。',[
  ['第 11、12 肋屬於假肋還是浮肋？','兩者都屬於。浮肋是其中一個子群。'],
  ['要從胸骨角找到第幾肋軟骨？','第 2 肋軟骨；先摸地標，再向旁邊連到肋骨，不要只背高度數字。']]],
 landmarks: ['數字一定綁構造','把 T8、T10、T12 排成由上到下三站，各放下腔靜脈、食道、主動脈。正向背一次，再倒過來問一次。','這組數字是橫膈通道；別與脊髓末端、腰椎穿刺或體表地標的高度混在一起。',[
  ['依 T8 → T10 → T12，三個主要通道是什麼？','下腔靜脈孔 → 食道裂孔 → 主動脈裂孔。'],
  ['只問「食道裂孔」，你能直接說出高度嗎？','T10。接著反問 T8 與 T12 對應什麼，確認不是只記得順序。']]],
 skull: ['先分區，再連成因果','先畫腦顱與顏面骨兩群；翼點另畫成「四骨交會 → 深面相關血管 → 外傷後出血」的連結。','骨縫、交會點、囟門是不同概念；遇到時間題，要看問的是哪個囟門。',[
  ['顱骨標準 22 塊可先拆成哪兩群？','腦顱 8、顏面骨 14；先記群組，再回到圖上逐個指認。'],
  ['翼點外傷的典型出血連結是什麼？','翼點區外傷 → 中腦膜動脈損傷 → 硬膜外血腫。這是典型考題連結，仍須依題目資訊判讀。']]],
 fossae: ['先找大地標，再放孔洞','顱底內面由前往後分成三區；先找蝶骨與顳骨岩部等地標，再將孔洞放進對應顱窩。','後顱窩是顱底內面的分區，不等於只要在頭後面就算後顱窩。',[
  ['看到顱底圖，背孔洞以前先做哪兩件事？','先確認是內面還是外面，再辨認前、中、後顱窩的分區與地標。'],
  ['乙狀竇溝應放回哪個顱窩？','後顱窩；不要只記它位在圖的後方，要一起找周圍地標。']]],
 foramina: ['成組記憶，再做雙向回想','用「V1 裂、V2 圓、V3 卵」當入口：V1 上眼眶裂、V2 圓孔、V3 卵圓孔。接著放回圖上，再從功能回推神經。','口訣只對應三叉神經三分支，不能當成這些孔洞的完整內容物清單。',[
  ['V2 與 V3 分別經過哪個孔？','V2 經圓孔；V3 經卵圓孔。再反問「卵圓孔是哪一支？」來檢查。'],
  ['頸靜脈孔的三條腦神經是哪幾條？XII 也在裡面嗎？','IX、X、XI；XII 經舌下神經管。用 9、10、11 成組背，再把 12 單獨放另一條通道。']]],
 'orbit-nose': ['先問所屬，再問出口','鼻甲先分「篩骨的一部分」與「獨立骨」；顏面孔洞先沿神經走一次，區分進入骨內與離開骨內。','上／中鼻甲屬篩骨，下鼻甲是獨立骨；不能因為名稱相似就放同一群。',[
  ['上、中、下鼻甲之中，哪個是獨立骨？','下鼻甲；上、中鼻甲屬篩骨。遮住答案後，試著說明分組依據。'],
  ['下齒槽神經進入與頦神經離開下頜骨的孔分別是什麼？','下齒槽神經由下頜孔進入；其末端頦神經由頦孔離開。沿路徑記，就不容易把入口與出口對調。']]]
};
const memoryLessonChapters={bones:memoryLessons,...memoryMoreLessons,muscles2:muscles2MemoryLessons};
function memoryRead(){try{const value=JSON.parse(localStorage.getItem('step1-memory-v1')||'{}');return value&&typeof value==='object'&&!Array.isArray(value)?value:{};}catch{return {};}}
function memoryDue(chapter,now=Date.now()){
 const lessons=memoryLessonChapters[chapter]||{};
 return Object.entries(memoryRead()).filter(([key,value])=>{
  const parts=key.split(':'),cards=lessons[parts[1]]?.[3],index=Number(parts[2]);
  return parts.length===3&&parts[0]===chapter&&cards&&Number.isInteger(index)&&index>=0&&index<cards.length&&value&&Number.isFinite(value.due)&&value.due<=now;
 }).sort((a,b)=>a[1].due-b[1].due);
}
function memorySchedule(previous,rating,now=Date.now()){
 const old=previous&&typeof previous==='object'?previous:{};
 const stage=rating==='ready'?Math.min((Number(old.stage)||0)+1,4):0;
 const delay=rating==='again'?10*60000:rating==='hard'?86400000:[1,3,7,14][stage-1]*86400000;
 return {stage,due:now+delay,rating};
}
function memoryPanel(topic){
 const lesson=memoryLessonChapters[studyChapter.id]?.[topic.id];if(!lesson)return '';
 const esc=studyEscape;
 return `<section class="memory-coach" aria-label="怎麼理解與記憶"><p class="eyebrow">理解 → 記憶 → 回想 → 重練</p><h2>這一頁，教你怎麼記</h2><h3>${esc(lesson[0])}</h3><p>${esc(lesson[1])}</p><p class="memory-trap"><strong>容易混的地方：</strong>${esc(lesson[2])}</p><p><a class="study-button" href="${studyRoot}" >← 查看本章到期練習</a><button type="button" class="study-button" id="memory-to-lesson">先讀原文與圖表 ↓</button></p><h3>遮住內容，先自己回答</h3><p>先口述或在紙上寫，再展開核對。能解釋原因後，才選「能說出」。</p>${lesson[3].map((card,i)=>`<div class="memory-card" id="memory-card-${i}" data-memory-key="${esc(studyChapter.id)}:${esc(topic.id)}:${i}"><p><strong>${i+1}. ${esc(card[0])}</strong></p><details><summary>想好再看答案與記法</summary><p>${esc(card[1])}</p><div class="memory-ratings"><button type="button" data-rating="again">忘記：10 分鐘後</button><button type="button" data-rating="hard">不熟：明天</button><button type="button" data-rating="ready">能說出：延後重練</button></div></details><p class="memory-status" aria-live="polite"></p></div>`).join('')}<p class="memory-foot">建議節奏：記得時依序隔 1、3、7、14 天重練；忘記就提早。這是可調整的練習安排。紀錄僅存於此瀏覽器；請開啟原文圖表練習位置指認。內容依本頁既有教材與來源編寫。</p></section>`;
}
function memoryBind(){document.getElementById('memory-to-lesson')?.addEventListener('click',()=>document.querySelector('article.lesson')?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}));document.querySelectorAll('[data-memory-key]').forEach(card=>{
 const key=card.dataset.memoryKey;
 function status(saved,failed=false){const line=card.querySelector('.memory-status');if(failed){line.textContent='此瀏覽器無法儲存紀錄，請自行記下重練時間。';return;}if(!saved||!Number.isFinite(saved.due)){line.textContent='尚未自測';return;}line.textContent=(saved.due<=Date.now()?'已到重練時間':'下次重練：'+new Date(saved.due).toLocaleString('zh-TW'))+' · '+({again:'忘記',hard:'不熟',ready:'能說出'}[saved.rating]||'');}
 status(memoryRead()[key]);card.querySelectorAll('[data-rating]').forEach(button=>button.addEventListener('click',()=>{const all=memoryRead();all[key]=memorySchedule(all[key],button.dataset.rating);let failed=false;try{localStorage.setItem('step1-memory-v1',JSON.stringify(all));}catch{failed=true;}status(all[key],failed);}));
 });}
const memoryOriginalRenderAnatomy=renderAnatomy;
renderAnatomy=function(parts){memoryOriginalRenderAnatomy(parts);const topic=studyTopics.find(t=>t.id===parts[5]);if(topic){const panel=memoryPanel(topic);if(panel){document.querySelector('.detail-heading').insertAdjacentHTML('afterend',panel);memoryBind();}}else if(parts.length===4&&memoryLessonChapters[studyChapter.id]){
 const lessons=memoryLessonChapters[studyChapter.id],ids=studyTopics.filter(t=>lessons[t.id]).map(t=>t.id),cards=ids.reduce((n,id)=>n+lessons[id][3].length,0),entries=memoryDue(studyChapter.id);
 const topics=[...new Set(entries.map(([key])=>key.split(':')[1]))];
 document.querySelector('.detail-heading').insertAdjacentHTML('afterend',`<section class="memory-coach"><h2>記憶練習｜本章 ${ids.length} 個主題、${cards} 張回想卡</h2><p>主題頁已加入理解順序、記法、易混提醒與自測。先試著說出，再核對答案。逐段筆記、圖集與來源頁供回查。</p><p>${entries.length?'到期 '+entries.length+' 張卡：':'目前沒有到期卡片；可從任一主題開始。'}${topics.map(id=>`<a class="study-button" href="${studyRoot}/topic/${id}">${studyEscape(studyTopics.find(t=>t.id===id)?.title||id)}</a>`).join(' ')}</p></section>`);
 }else if(parts.length===2){
  const count=Object.values(memoryLessonChapters).reduce((n,lessons)=>n+Object.keys(lessons).length,0),cards=Object.values(memoryLessonChapters).reduce((n,lessons)=>n+Object.values(lessons).reduce((m,lesson)=>m+lesson[3].length,0),0);
  document.querySelector('.detail-heading').insertAdjacentHTML('afterend',`<section class="memory-coach"><h2>${Object.keys(memoryLessonChapters).length} 章記憶教學已加入</h2><p>${count} 個主題、${cards} 張自測卡。進入章節後，可看「怎麼記」與到期練習；已讀與能回想的紀錄分開。</p></section>`);
 }};
