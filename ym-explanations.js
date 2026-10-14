(function(global){
 'use strict';
 const indexPromise=fetch('explanations/index.json?v=20261014-pages').then(r=>{if(!r.ok)throw Error('詳解對照載入失敗');return r.json();});indexPromise.catch(()=>{});
 const openViewers=new Map();
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const platform='https://sites.google.com/view/ymmedexam/ans';
 function sourceLinks(book){
  const raw=new URL(book.download);if(raw.protocol!=='https:'||raw.hostname!=='drive.google.com')throw Error('詳解來源不是原作者公開的 Google Drive');
  const id=raw.searchParams.get('id')||raw.pathname.match(/^\/file\/d\/([A-Za-z0-9_-]+)(?:\/|$)/)?.[1];
  if(!id||!/^[A-Za-z0-9_-]+$/.test(id))throw Error('詳解檔案連結無法辨認');
  const base=`https://drive.google.com/file/d/${id}`,key=raw.searchParams.get('resourcekey');
  return {preview:base+'/preview'+(key?'?'+new URLSearchParams({resourcekey:key}):''),view:base+'/view'+(key?'?'+new URLSearchParams({resourcekey:key}):'')};
 }
 function pageText(record){return record.status==='matched'?`PDF 第 ${record.start}${record.end!==record.start?'–'+record.end:''} 頁`:'本卷詳解（題目頁碼待核對）';}
 function panel(){return `<section class="quiz-panel ym-panel"><h2>陽明平台原書詳解</h2><p>交卷後，展開每題即可直接看到對應詳解頁面，保留原書圖片、表格與作者標記。不需要下載或匯入本機檔案。</p><p class="quiz-note">部分題目共用同一頁；頁碼尚待核對的題目可使用翻頁功能查找。分數仍依考選部官方更正答案。</p><a href="${platform}" target="_blank" rel="noopener" class="quiz-button secondary">原站與作者勘誤</a></section>`;}
 function bind(){} // Compatibility with quiz UI; no local-file or storage access.
 function closeOtherViewers(except){for(const [detail,body] of openViewers){if(detail!==except){detail.open=false;body.replaceChildren();openViewers.delete(detail);}}}
 function showViewer(detail,q,record,index){
  closeOtherViewers(detail);const body=detail.querySelector('.ym-body'),book=index.books[record.book];
  const links=sourceLinks(book),page=pageText(record);
  if(!/^[A-Za-z0-9_-]+$/.test(record.book))throw Error('詳解索引格式錯誤');
  body.innerHTML=`<p><strong>${esc(page)}</strong> · 原書整頁，可能包含相鄰題目。</p>${record.status!=='matched'?'<p class="quiz-note">此題頁碼尚待核對，請用下方頁碼查找；目前顯示原書第一頁。</p>':''}${record.endUncertain?'<p class="quiz-note">已定位起始頁，後續詳解可按「下一頁」接續閱讀。</p>':''}<div class="quiz-actions"><a class="quiz-button secondary" href="${esc(links.view)}" target="_blank" rel="noopener">閱讀原始 PDF</a><a href="${esc(book.source)}" target="_blank" rel="noopener">原作者來源與勘誤</a></div><div class="ym-page-controls"><button type="button" class="quiz-button secondary ym-prev">上一頁</button><label>PDF 頁碼 <input class="ym-page-number" type="number" min="1" max="${book.pages}" value="${record.start||1}" aria-label="PDF 頁碼"></label><span>／ ${book.pages}</span><button type="button" class="quiz-button secondary ym-next">下一頁</button><button type="button" class="quiz-button secondary ym-reset">回到本題</button></div><div class="ym-pages"></div><p class="quiz-note">${esc(book.filename)} · 頁碼採 PDF 順序，可能不同於印刷頁碼。可點圖片另開大圖。</p>`;
  const pages=body.querySelector('.ym-pages'),input=body.querySelector('.ym-page-number');let current=record.start||1;
  function display(start,end=start){
   current=Math.max(1,Math.min(book.pages,Number(start)||1));input.value=current;
   pages.innerHTML=Array.from({length:Math.min(book.pages,Math.max(current,end))-current+1},(_,n)=>{
    const number=current+n,url=`explanations/pages/${record.book}/${number}.webp`;
    return `<figure><figcaption>PDF 第 ${number} 頁</figcaption><a href="${url}" target="_blank" rel="noopener"><img src="${url}" alt="${esc(q.year+' 年第 '+q.session+' 次，第 '+q.number+' 題詳解：PDF 第 '+number+' 頁')}" loading="lazy" decoding="async"></a></figure>`;
   }).join('');
   body.querySelector('.ym-prev').disabled=current<=1;body.querySelector('.ym-next').disabled=current>=book.pages;
   for(const img of pages.querySelectorAll('img'))img.addEventListener('error',()=>{const note=document.createElement('p');note.className='quiz-note';note.textContent='此頁圖片暫時無法載入，請使用上方「閱讀原始 PDF」。';img.replaceWith(note);},{once:true});
  }
  input.addEventListener('change',()=>display(input.value));
  body.querySelector('.ym-prev').addEventListener('click',()=>display(current-1));
  body.querySelector('.ym-next').addEventListener('click',()=>display(current+1));
  body.querySelector('.ym-reset').addEventListener('click',()=>display(record.start||1,record.end||1));
  display(record.start||1,record.end||1);openViewers.set(detail,body);
 }
 async function attach(q,holder){
  try{const index=await indexPromise;if(!holder.isConnected)return;const record=index.questions[q.id];
   if(!record||record.status==='unavailable'){holder.insertAdjacentHTML('beforeend',`<div class="ym-unavailable"><strong>陽明平台詳解</strong><p>此場次尚無可取得的公開詳解。</p><a href="${platform}" target="_blank" rel="noopener">查看原站更新</a></div>`);return;}
   const detail=document.createElement('details');detail.className='ym-detail';
   detail.innerHTML=`<summary>陽明平台原書詳解 · ${esc(pageText(record))}</summary><div class="ym-body"></div>`;holder.append(detail);
   detail.addEventListener('toggle',()=>{if(detail.open){try{showViewer(detail,q,record,index);}catch{detail.querySelector('.ym-body').innerHTML=`<p>詳解圖片暫時無法開啟。</p><a href="${esc(index.books[record.book].source)}" target="_blank" rel="noopener">到原作者頁面閱讀詳解</a>`;}}else{detail.querySelector('.ym-body').replaceChildren();openViewers.delete(detail);}});
  }catch{if(holder.isConnected)holder.insertAdjacentHTML('beforeend',`<p class="quiz-note">詳解對照載入失敗，請重新整理，或<a href="${platform}" target="_blank" rel="noopener">開啟原站</a>。</p>`);}
 }
 new MutationObserver(()=>{for(const [detail,body] of openViewers){if(!detail.isConnected){body.replaceChildren();openViewers.delete(detail);}}}).observe(document.documentElement,{subtree:true,childList:true});
 global.YMExplanations={panel,bind,attach,sourceLinks,indexPromise};
})(globalThis);
