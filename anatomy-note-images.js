/* User-provided source: 賴奕翔，《奕翔的解剖筆記》三版，2021-07-25.
 * PDF page numbers are used; handwritten page numbers may differ.
 * Original pages replace site-authored SVGs without changing notes or progress IDs.
 */
const anatomyNoteImageMap = {
 'board-1-regions.svg':[6], 'board-1-trunk.svg':[7], 'board-1-heights.svg':[7], 'board-1-airway.svg':[34],
 'board-1-sutures.svg':[8], 'board-1-fontanelles.svg':[8], 'board-1-fossae.svg':[9], 'board-1-temporal.svg':[10],
 'board-1-orbit.svg':[11], 'board-1-ethmoid.svg':[12], 'board-1-foramina.svg':[9],
 'board-2-ethmoid.svg':[12], 'board-2-foramina.svg':[9], 'board-2-palate.svg':[12], 'board-2-palatine.svg':[12],
 'board-2-cleft.svg':[12], 'board-2-jaw-hyoid.svg':[13], 'board-2-ppf.svg':[13], 'board-2-curves.svg':[14],
 'board-2-vertebra.svg':[14], 'board-2-rib-joint.svg':[15], 'board-2-ligaments.svg':[14], 'board-2-lp.svg':[16],
 'board-2-atlas-axis.svg':[15], 'board-2-sacrum.svg':[14], 'bones2-palate.svg':[12], 'bones2-ppf.svg':[13],
 'visual-ppf.svg':[13], 'bones2-lp.svg':[16], 'visual-roots.svg':[16],
 'board-3-rib-joint.svg':[15], 'board-3-van.svg':[17], 'board-3-first-rib.svg':[17], 'board-3-scapula.svg':[17],
 'board-3-girdle.svg':[17], 'board-3-humerus-attachments.svg':[18], 'board-3-humerus-nerves.svg':[18],
 'board-3-elbow.svg':[18], 'board-3-carpals.svg':[19], 'board-3-hip-bones.svg':[20],
 'board-3-hip-landmarks.svg':[20], 'board-3-pelvic-ligaments.svg':[20], 'bones3-thoracic.svg':[17],
 'bones3-shoulder.svg':[17], 'bones3-carpals.svg':[19], 'bones3-pelvis.svg':[20],
 'board-4-pudendal.svg':[20], 'board-4-hip.svg':[20,21], 'board-4-arteries.svg':[21],
 'board-4-inlet.svg':[22], 'board-4-pelvic-tube.svg':[22], 'board-4-pelvic-shape.svg':[22],
 'board-4-femur.svg':[22], 'board-4-knee-layers.svg':[23], 'board-4-cruciates.svg':[23], 'board-4-tibia.svg':[24],
 'board-4-tarsals.svg':[25], 'board-4-arches.svg':[25], 'board-4-arch-bridge.svg':[25], 'board-4-ankle-motion.svg':[25],
 'bones4-pudendal.svg':[20], 'bones4-cruciates.svg':[23], 'bones4-tarsals.svg':[25], 'bones4-arches.svg':[25],
 'muscles1-mouth.svg':[26], 'muscles1-eye-actions.svg':[27], 'muscles1-oblique-pull.svg':[27],
 'muscles1-orbital-ring.svg':[27], 'muscles1-tmj.svg':[28], 'muscles1-mastication.svg':[28],
 'muscles1-hyoid.svg':[30], 'muscles1-swallow.svg':[29,30], 'muscles1-glottis.svg':[30],
 'muscles1-larynx-tension.svg':[30], 'muscles1-nerve-map.svg':[26,29,30],
 'muscles1-neck-triangles.svg':[32], 'muscles1-eye-test.svg':[27], 'muscles1-tongue.svg':[29],
 'muscles1-pharynx.svg':[29], 'muscles1-posterior-triangle.svg':[32]
};
(function replaceAnatomyDrawings(){
 const sourceId='YX2021';
 const sourceNote='圖片取自使用者提供的《奕翔的解剖筆記》三版（賴奕翔，2021-07-25），保留原頁、手寫標示與署名。PDF 頁碼含封面，可能不同於手寫頁碼。原頁是相關主題的參考，不保證包含原示意圖的全部細節；仍保留影片筆記與教材更正，未把原筆記改寫成講者原話。';
 anatomySources.push({id:sourceId,title:'賴奕翔：奕翔的解剖筆記三版（2021-07-25）原頁圖像',url:'assets/anatomy-notes/source.json',type:'使用者提供教材',note:sourceNote});
 const chapters=[anatomyTopics,bones2Topics,bones3Topics,bones4Topics,muscles1Topics];
 function figure(page){const path=`assets/anatomy-notes/pdf-${String(page).padStart(3,'0')}.webp`;return `<figure class="anatomy-original"><a href="${path}" target="_blank" rel="noopener" aria-label="放大奕翔解剖筆記 PDF 第 ${page} 頁"><img src="${path}" alt="奕翔的解剖筆記三版原頁：PDF 第 ${page} 頁" loading="lazy" decoding="async" width="1620"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版 · PDF 第 ${page} 頁（含封面，非手寫頁碼）。原頁未重繪；點圖可開啟高解析圖片放大。</figcaption></figure>`;}
 for(const topics of chapters)for(const topic of topics){
  const seen=new Set();let changed=false;
  for(const section of topic.sections){
   section.html=section.html.replace(/<figure\b[^>]*>[\s\S]*?<\/figure>/g,original=>{
    const asset=original.match(/<img\b[^>]*src="assets\/([^\"]+\.svg)"/);if(!asset)return original;
    const pages=anatomyNoteImageMap[asset[1]];if(!pages)throw new Error('Missing anatomy source mapping: '+asset[1]);
    changed=true;return pages.filter(page=>{if(seen.has(page))return false;seen.add(page);return true;}).map(figure).join('');
   });
   section.html=section.html.replace(/<div class="enrichment-label">[^<]*(?:重繪|原創圖)[^<]*<\/div>/g,'<div class="enrichment-label">筆記原圖＋既有教材核對</div>');
   if(section.id==='board-method')section.html=`<p>${sourceNote}</p><p>原重繪圖已由本教材的相關原頁取代，同一主題頁的重複原頁合併顯示。下方回看時間與比較表仍對應原影片，不代表原筆記逐頁與影片時間同步。</p>`;
   if(section.title.includes('圖像授權')||section.title.includes('圖像方法'))section.html+=`<div class="study-note">2026-10-14 圖像更新：${sourceNote} 本節提到的 SVG 重繪方法是先前版本記錄；目前畫面已採用筆記原頁，原 SVG 僅留於版本紀錄。</div>`;
  }
  if(changed){topic.sources=[...new Set([...topic.sources,sourceId])];topic.sections.unshift({id:'original-image-source',title:'圖像來源與閱讀方式',html:`<p>${sourceNote}</p>`});}
  if(topic.id==='board-atlas'){topic.title='奕翔解剖筆記原圖集';topic.english='Original anatomy notebook pages';topic.summary='以奕翔解剖筆記原頁取代重繪圖；依本章主題整理，保留影片回看時間、比較表與教材更正。';}
 }
})();
