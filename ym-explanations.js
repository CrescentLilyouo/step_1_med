(function(global){
 'use strict';
 const indexPromise=fetch('explanations/index.json?v=20261014-online').then(r=>{if(!r.ok)throw Error('詳解對照載入失敗');return r.json();});indexPromise.catch(()=>{});
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
 function panel(){return `<section class="quiz-panel ym-panel"><h2>陽明平台線上詳解</h2><p>交卷後，展開每題的詳解即可線上閱讀原書，圖片、表格與作者標記都保留。不需要下載或匯入本機檔案。</p><p class="quiz-note">已定位的題目會顯示 PDF 頁碼；請在閱讀器跳到該頁。分數仍依考選部官方更正答案。</p><a href="${platform}" target="_blank" rel="noopener" class="quiz-button secondary">原站與作者勘誤</a></section>`;}
 function bind(){} // Compatibility with quiz UI; no local-file or storage access.
 function closeOtherViewers(except){for(const [detail,body] of openViewers){if(detail!==except){detail.open=false;body.replaceChildren();openViewers.delete(detail);}}}
 function showViewer(detail,q,record,index){
  closeOtherViewers(detail);const body=detail.querySelector('.ym-body'),book=index.books[record.book];
  const links=sourceLinks(book),page=pageText(record);
  body.innerHTML=`<p><strong>${esc(page)}</strong>${record.status==='matched'?' · 請在下方原書閱讀器輸入此頁碼。':' · 請在原書搜尋原題。'}</p>${record.endUncertain?'<p class="quiz-note">已定位起始頁；後續詳解請在原書接續閱讀。</p>':''}<div class="quiz-actions"><a class="quiz-button secondary" href="${esc(links.view)}" target="_blank" rel="noopener">在新分頁閱讀詳解</a><a href="${esc(book.source)}" target="_blank" rel="noopener">原作者來源與勘誤</a></div><p class="quiz-note">${esc(book.filename)} · 頁碼採 PDF 順序，可能不同於原書印刷頁碼。下方直接顯示原作者線上檔案。</p><iframe class="ym-online-frame" title="${esc(q.year+' 年第 '+q.session+' 次，第 '+q.number+' 題：'+page)}" src="${esc(links.preview)}" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><p class="quiz-note">若閱讀器空白或顯示限制，請點「在新分頁閱讀詳解」或「原作者來源與勘誤」。</p>`;
  openViewers.set(detail,body);
 }
 async function attach(q,holder){
  try{const index=await indexPromise;if(!holder.isConnected)return;const record=index.questions[q.id];
   if(!record||record.status==='unavailable'){holder.insertAdjacentHTML('beforeend',`<div class="ym-unavailable"><strong>陽明平台詳解</strong><p>此場次尚無可取得的公開詳解。</p><a href="${platform}" target="_blank" rel="noopener">查看原站更新</a></div>`);return;}
   const detail=document.createElement('details');detail.className='ym-detail';
   detail.innerHTML=`<summary>陽明平台線上詳解 · ${esc(pageText(record))}</summary><div class="ym-body"></div>`;holder.append(detail);
   detail.addEventListener('toggle',()=>{if(detail.open){try{showViewer(detail,q,record,index);}catch{detail.querySelector('.ym-body').innerHTML=`<p>線上閱讀器暫時無法開啟。</p><a href="${esc(index.books[record.book].source)}" target="_blank" rel="noopener">到原作者頁面閱讀詳解</a>`;}}else{detail.querySelector('.ym-body').replaceChildren();openViewers.delete(detail);}});
  }catch{if(holder.isConnected)holder.insertAdjacentHTML('beforeend',`<p class="quiz-note">詳解對照載入失敗，請重新整理，或<a href="${platform}" target="_blank" rel="noopener">開啟原站</a>。</p>`);}
 }
 new MutationObserver(()=>{for(const [detail,body] of openViewers){if(!detail.isConnected){body.replaceChildren();openViewers.delete(detail);}}}).observe(document.documentElement,{subtree:true,childList:true});
 global.YMExplanations={panel,bind,attach,sourceLinks,indexPromise};
})(globalThis);
