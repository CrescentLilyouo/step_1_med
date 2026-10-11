/* Additive, source-backed visual enrichment for all three existing chapters. Updated 2026-10-12. */
const enrichmentSources=[
 {
  "id": "S103",
  "title": "OpenStax：6.3 Bone Structure",
  "url": "https://openstax.org/books/anatomy-and-physiology-2e/pages/6-3-bone-structure",
  "type": "開放教材",
  "note": "長骨巨觀構造、骨膜、骨內膜與骨細胞。"
 },
 {
  "id": "S104",
  "title": "NCBI：Anatomy, Head and Neck, Mastication Muscles",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK541027/",
  "type": "解剖補充",
  "note": "咀嚼肌的骨性起止點與 V3 支配。"
 },
 {
  "id": "S105",
  "title": "Anatomy of the flexor retinaculum of the wrist and the flexor carpi radialis tunnel",
  "url": "https://pubmed.ncbi.nlm.nih.gov/11280159/",
  "type": "解剖研究",
  "note": "橈側屈腕肌有獨立通道，與腕隧道九條肌腱分開。"
 },
 {
  "id": "S106",
  "title": "NCBI：Anatomy, Shoulder and Upper Limb, Arm Quadrangular Space",
  "url": "https://www.ncbi.nlm.nih.gov/sites/books/NBK537324/",
  "type": "解剖補充",
  "note": "四邊孔的後面觀邊界與腋神經、後旋肱動脈。"
 },
 {
  "id": "S107",
  "title": "Extraoral anatomy in CBCT: Nasoethmoidal region",
  "url": "https://pubmed.ncbi.nlm.nih.gov/31392880/",
  "type": "影像解剖綜述",
  "note": "中鼻道、上鼻道、蝶篩隱窩的引流分區。"
 },
 {
  "id": "S108",
  "title": "NCBI：Anatomy, Abdomen and Pelvis, Sacroiliac Joint",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK507801/",
  "type": "解剖補充",
  "note": "薦髂關節、薦骨傾動與骨盆穩定。"
 },
 {
  "id": "S109",
  "title": "NCBI：Anatomy, Head and Neck: Atlantoaxial Joint",
  "url": "https://www.ncbi.nlm.nih.gov/sites/books/NBK563271/",
  "type": "解剖補充",
  "note": "寰樞關節的旋轉與橫韌帶。"
 },
 {
  "id": "S110",
  "title": "NCBI：Anatomy, Shoulder and Upper Limb, Dorsal Scapular Nerve",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK459343/",
  "type": "解剖補充",
  "note": "菱形肌、提肩胛肌與肩胛背神經。"
 },
 {
  "id": "S111",
  "title": "NCBI：Anatomy, Thorax, Serratus Anterior Muscles",
  "url": "https://www.ncbi.nlm.nih.gov/sites/books/NBK531457/",
  "type": "解剖補充",
  "note": "前鋸肌附著與長胸神經。"
 },
 {
  "id": "S112",
  "title": "The interosseous membrane affects load distribution in the forearm",
  "url": "https://pubmed.ncbi.nlm.nih.gov/9471063/",
  "type": "解剖研究",
  "note": "骨間膜協助前臂力傳遞；姿勢與條件改變比例，不固定成每人一個百分比。"
 }
];
anatomySources.push(...enrichmentSources);
const studyEnrichments=[
 {
  "chapter": "bones",
  "topic": "orientation",
  "section": {
   "id": "visual-plus-1",
   "title": "補強｜三種切面：把英文圖變成中文方向",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><figure class=\"enriched-figure\"><a href=\"assets/os-planes.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：人體矢狀、冠狀、橫斷與斜切面的教材圖\"><img src=\"assets/os-planes.webp\" alt=\"人體矢狀、冠狀、橫斷與斜切面的教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 1.14；CC BY-NC-SA 4.0。原圖保留，先看每個面分開哪兩側，再對照影像的觀看方向。 <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/1-6-anatomical-terminology\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 點圖可開啟原尺寸。</figcaption></figure><p>切面是切割平面，切片是得到的影像；兩者概念相關但不相同。影像上左右要核對 R／L 標記，不以觀察者自己的手直接代換。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">英文標記／構造</th><th scope=\"col\">中文與位置</th><th scope=\"col\">辨認或解題理由</th></tr></thead><tbody><tr><td>Sagittal</td><td>矢狀；分左、右</td><td>正中矢狀面才穿過正中線</td></tr><tr><td>Frontal / coronal</td><td>冠狀；分前、後</td><td>不是分上、下</td></tr><tr><td>Transverse / axial</td><td>橫斷；分上、下</td><td>常以從足端向頭端看的影像慣例表示</td></tr><tr><td>Oblique</td><td>斜面</td><td>與主切面有角度</td></tr><tr><td>Anterior / posterior</td><td>前／後</td><td>以人體解剖姿勢定義</td></tr><tr><td>Proximal / distal</td><td>近端／遠端</td><td>以肢體與軀幹連接處作基準</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/1-6-anatomical-terminology\" target=\"_blank\" rel=\"noopener\">S3</a></span></p>"
  },
  "sources": [
   "S3"
  ]
 },
 {
  "chapter": "bones",
  "topic": "orientation",
  "section": {
   "id": "visual-plus-2",
   "title": "補強｜動作名稱：關節與旋轉軸一起看",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><p>先指認是哪個關節、哪一側，再判斷動作。關節活動不能只看手或腳最後朝向。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較項目</th><th scope=\"col\">正確配對／範圍</th><th scope=\"col\">容易混淆的地方</th></tr></thead><tbody><tr><td>屈曲／伸展</td><td>通常在矢狀面繞左右軸</td><td>拇指方向有特殊性，不能只套四指</td></tr><tr><td>外展／內收</td><td>通常在冠狀面繞前後軸</td><td>手指以第 3 指作參考，足趾以第 2 趾</td></tr><tr><td>內旋／外旋</td><td>沿肢體長軸旋轉</td><td>和前臂旋前／旋後的命名不同</td></tr><tr><td>旋前／旋後</td><td>兩端橈尺關節協同</td><td>不是腕關節單獨旋轉</td></tr><tr><td>背屈／蹠屈</td><td>踝向小腿／腳尖方向活動</td><td>不能把背屈當成足內翻</td></tr><tr><td>內翻／外翻</td><td>足底向內／向外</td><td>涉及足部關節複合活動</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/1-6-anatomical-terminology\" target=\"_blank\" rel=\"noopener\">S3</a></span></p>"
  },
  "sources": [
   "S3"
  ]
 },
 {
  "chapter": "bones",
  "topic": "bone-basics",
  "section": {
   "id": "visual-plus-1",
   "title": "補強｜長骨：骨幹、骨端、骨膜不是同一層",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><figure class=\"enriched-figure\"><a href=\"assets/os-long-bone.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：長骨縱切與骨膜、骨髓腔的教材圖\"><img src=\"assets/os-long-bone.webp\" alt=\"長骨縱切與骨膜、骨髓腔的教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 6.7；CC BY-NC-SA 4.0。原圖保留，由外向內讀骨膜、骨皮質、髓腔；再讀近遠端。 <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/6-3-bone-structure\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 點圖可開啟原尺寸。</figcaption></figure><p>骨數、骨形、骨組織是三個分類問題。指骨屬長骨，豆狀骨是籽骨；骨頭很短不等於短骨。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">英文標記／構造</th><th scope=\"col\">中文與位置</th><th scope=\"col\">辨認或解題理由</th></tr></thead><tbody><tr><td>Diaphysis</td><td>骨幹；長骨主體</td><td>緻密骨壁包住髓腔</td></tr><tr><td>Epiphysis</td><td>骨端；近端／遠端</td><td>與關節面、鬆質骨相關</td></tr><tr><td>Metaphysis</td><td>幹骺端；骨幹和骨端間</td><td>成長板附近區域</td></tr><tr><td>Periosteum</td><td>骨膜；骨表面</td><td>關節軟骨覆蓋處不以骨膜覆蓋</td></tr><tr><td>Endosteum</td><td>骨內膜；內部骨表面</td><td>包括髓腔與骨小梁表面</td></tr><tr><td>Articular cartilage</td><td>關節軟骨</td><td>多為透明軟骨，與纖維軟骨關節盤分開</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/6-3-bone-structure\" target=\"_blank\" rel=\"noopener\">S103</a> · <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-1-divisions-of-the-skeletal-system\" target=\"_blank\" rel=\"noopener\">S4</a></span></p>"
  },
  "sources": [
   "S103",
   "S4"
  ]
 },
 {
  "chapter": "bones",
  "topic": "bone-basics",
  "section": {
   "id": "visual-plus-2",
   "title": "補強｜骨細胞與骨性標記的用途",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><p>標記名稱先告訴你形態，再由位置決定內容物或肌肉附著。沒有一種字根能直接涵蓋所有例外。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較項目</th><th scope=\"col\">正確配對／範圍</th><th scope=\"col\">容易混淆的地方</th></tr></thead><tbody><tr><td>骨母細胞 osteoblast</td><td>形成骨基質</td><td>不是負責大量吸收骨質的細胞</td></tr><tr><td>骨細胞 osteocyte</td><td>位於骨陷窩，參與骨組織維持與感知</td><td>不是單純「已死的骨母細胞」</td></tr><tr><td>破骨細胞 osteoclast</td><td>多核，吸收骨質</td><td>和單核的骨母細胞形態不同</td></tr><tr><td>Tubercle／tuberosity</td><td>結節／粗隆，多與附著相關</td><td>不能只靠尺寸把附著肌肉推定出來</td></tr><tr><td>Condyle／facet</td><td>髁／關節面，多與關節相關</td><td>Epicondyle 上髁不等於整個髁</td></tr><tr><td>Foramen／canal／fissure</td><td>孔／管／裂，描述通道形態</td><td>名稱不同，仍可能互相交通</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/6-3-bone-structure\" target=\"_blank\" rel=\"noopener\">S103</a> · <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-1-divisions-of-the-skeletal-system\" target=\"_blank\" rel=\"noopener\">S4</a></span></p>"
  },
  "sources": [
   "S103",
   "S4"
  ]
 },
 {
  "chapter": "bones",
  "topic": "spine",
  "section": {
   "id": "visual-plus-1",
   "title": "補強｜典型椎骨：俯視與側視對在一起",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><figure class=\"enriched-figure\"><a href=\"assets/os-vertebra.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：典型椎骨俯視與相鄰椎骨側面的教材圖\"><img src=\"assets/os-vertebra.webp\" alt=\"典型椎骨俯視與相鄰椎骨側面的教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 7.23；CC BY-NC-SA 4.0。原圖保留，先找前方椎體、後方椎弓，再找神經出口。 <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-3-the-vertebral-column\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 點圖可開啟原尺寸。</figcaption></figure><p>圖中的椎體、神經與肋關節面屬空間關係。頸、胸、腰椎外形和關節面朝向不同，不能只用一個典型椎骨圖代替每個區域。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">英文標記／構造</th><th scope=\"col\">中文與位置</th><th scope=\"col\">辨認或解題理由</th></tr></thead><tbody><tr><td>Body</td><td>椎體；前方承重</td><td>不是椎弓的一部分</td></tr><tr><td>Pedicle</td><td>椎弓根；接椎體與椎弓</td><td>上下切跡參與椎間孔</td></tr><tr><td>Lamina</td><td>椎板；後方骨板</td><td>椎板間由黃韌帶相連</td></tr><tr><td>Vertebral foramen</td><td>椎孔；中央</td><td>串起來形成椎管</td></tr><tr><td>Intervertebral foramen</td><td>椎間孔；相鄰椎骨側方</td><td>脊神經由此離開</td></tr><tr><td>Articular process</td><td>關節突；上下各一對</td><td>構成小面關節，不是椎間盤</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-3-the-vertebral-column\" target=\"_blank\" rel=\"noopener\">S6</a> · <a href=\"https://humananatomy.host.dartmouth.edu/BHA/public_html/part_7/chapter_39.html\" target=\"_blank\" rel=\"noopener\">S46</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK560878/\" target=\"_blank\" rel=\"noopener\">S18</a></span></p>"
  },
  "sources": [
   "S6",
   "S46",
   "S18"
  ]
 },
 {
  "chapter": "bones",
  "topic": "spine",
  "section": {
   "id": "visual-plus-2",
   "title": "補強｜椎體承重系統與關節突系統",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><p>小面朝向是區域上的概括，個別椎節會有變異。活動還受椎間盤、韌帶、胸廓與肌肉共同影響。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較項目</th><th scope=\"col\">正確配對／範圍</th><th scope=\"col\">容易混淆的地方</th></tr></thead><tbody><tr><td>椎體間</td><td>椎間盤；次級軟骨連接</td><td>C1–C2 沒有典型椎間盤</td></tr><tr><td>關節突間</td><td>滑液小面關節</td><td>左右各一組，與前方盤並存</td></tr><tr><td>頸部</td><td>小面較斜，活動範圍較多方向</td><td>C1、C2 構造特化</td></tr><tr><td>胸部</td><td>小面較偏冠狀，有肋骨限制</td><td>不能推成胸椎完全不能活動</td></tr><tr><td>腰部</td><td>小面較偏矢狀，屈伸較明顯</td><td>旋轉受限；L5–S1 更具過渡性</td></tr><tr><td>椎間盤突出</td><td>由高度＋方向判斷受壓根</td><td>L4–L5 不總是壓 L4</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-3-the-vertebral-column\" target=\"_blank\" rel=\"noopener\">S6</a> · <a href=\"https://humananatomy.host.dartmouth.edu/BHA/public_html/part_7/chapter_39.html\" target=\"_blank\" rel=\"noopener\">S46</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK560878/\" target=\"_blank\" rel=\"noopener\">S18</a></span></p>"
  },
  "sources": [
   "S6",
   "S46",
   "S18"
  ]
 },
 {
  "chapter": "bones",
  "topic": "thorax",
  "section": {
   "id": "visual-plus-1",
   "title": "補強｜胸骨與肋軟骨：前視圖的辨認順序",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><figure class=\"enriched-figure\"><a href=\"assets/os-thorax.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：胸骨三部與整個骨性胸廓的教材圖\"><img src=\"assets/os-thorax.webp\" alt=\"胸骨三部與整個骨性胸廓的教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 7.32；CC BY-NC-SA 4.0。原圖保留，先找胸骨柄、胸骨角、胸骨體和劍突，再沿肋軟骨數肋。 <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-4-the-thoracic-cage\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 點圖可開啟原尺寸。</figcaption></figure><p>數肋需要辨認胸骨角和前方軟骨連接；同一根肋骨往前斜下，後方椎體層級不直接等於前端體表高度。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">英文標記／構造</th><th scope=\"col\">中文與位置</th><th scope=\"col\">辨認或解題理由</th></tr></thead><tbody><tr><td>Jugular notch</td><td>頸靜脈切跡；胸骨柄上緣</td><td>不是頸椎上的切跡</td></tr><tr><td>Clavicular notch</td><td>鎖骨切跡；柄上外側</td><td>胸鎖關節相關</td></tr><tr><td>Sternal angle</td><td>胸骨角；柄與體交界</td><td>第二肋軟骨定位</td></tr><tr><td>Xiphisternal joint</td><td>劍胸結合</td><td>與劍突尖端分開</td></tr><tr><td>Costal cartilage</td><td>肋軟骨；肋前端</td><td>不是肋骨頭的關節面</td></tr><tr><td>Floating ribs</td><td>浮肋 11、12</td><td>前端遊離，後端仍接椎骨</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-4-the-thoracic-cage\" target=\"_blank\" rel=\"noopener\">S7</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK538328/\" target=\"_blank\" rel=\"noopener\">S58</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK459336/\" target=\"_blank\" rel=\"noopener\">S9</a></span></p>"
  },
  "sources": [
   "S7",
   "S58",
   "S9"
  ]
 },
 {
  "chapter": "bones",
  "topic": "thorax",
  "section": {
   "id": "visual-plus-2",
   "title": "補強｜前後關節與呼吸位移",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><p>肋骨、胸骨、軟骨、胸椎共同改變胸廓形態。名詞配對後再接呼吸運動，比只背「上提」更完整。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較項目</th><th scope=\"col\">正確配對／範圍</th><th scope=\"col\">容易混淆的地方</th></tr></thead><tbody><tr><td>第一胸肋</td><td>通常原發軟骨連接</td><td>不要把所有胸肋關節都列滑液</td></tr><tr><td>第二至第七胸肋</td><td>通常滑液關節</td><td>第二肋關節常有腔內韌帶</td></tr><tr><td>肋軟骨連肋骨</td><td>肋軟骨連接</td><td>不是肋骨頭關節</td></tr><tr><td>肋頭後端</td><td>典型接同號與上號椎體</td><td>11、12 等例外需分開</td></tr><tr><td>肋結節後端</td><td>接同號橫突</td><td>11、12 通常沒有此關節</td></tr><tr><td>吸氣胸廓</td><td>上位較泵柄式、下位較桶柄式</td><td>是運動框架，不是完全獨立的兩種肋</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-4-the-thoracic-cage\" target=\"_blank\" rel=\"noopener\">S7</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK538328/\" target=\"_blank\" rel=\"noopener\">S58</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK459336/\" target=\"_blank\" rel=\"noopener\">S9</a></span></p>"
  },
  "sources": [
   "S7",
   "S58",
   "S9"
  ]
 },
 {
  "chapter": "bones",
  "topic": "landmarks",
  "section": {
   "id": "visual-plus-1",
   "title": "補強｜體表高度：把胸廓與骨盆視角分開",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><figure class=\"enriched-figure\"><a href=\"assets/os-thorax.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：胸骨與肋骨前方關係的教材圖\"><img src=\"assets/os-thorax.webp\" alt=\"胸骨與肋骨前方關係的教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 7.32；CC BY-NC-SA 4.0。原圖保留，圖示骨性標記，椎體水平仍需另外核對；不是精確定位影像。 <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-4-the-thoracic-cage\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 點圖可開啟原尺寸。</figcaption></figure><p>體表、骨性、神經節段層級是不同座標。表面摸得到的標記不是每位個體都能精確對到同一椎體。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">英文標記／構造</th><th scope=\"col\">中文與位置</th><th scope=\"col\">辨認或解題理由</th></tr></thead><tbody><tr><td>Sternal angle</td><td>胸骨角：傳統約 T4–T5</td><td>第二肋、縱膈分界相關</td></tr><tr><td>Xiphisternal joint</td><td>劍胸結合：傳統約 T9</td><td>不是所有劍突尖端都在 T9</td></tr><tr><td>Iliac crest line</td><td>髂嵴最高點連線：傳統約 L4／L4–5</td><td>觸診與影像層級有偏差</td></tr><tr><td>PSIS</td><td>髂後上棘：傳統約 S2</td><td>以「約」理解，不能保證個體定值</td></tr><tr><td>Conus medullaris</td><td>成人脊髓圓錐多約 L1–L2</td><td>椎體層級不同於脊髓節段</td></tr><tr><td>Dural sac</td><td>硬膜囊常延至約 S2</td><td>不是脊髓也伸到 S2</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://www.ncbi.nlm.nih.gov/books/NBK459336/\" target=\"_blank\" rel=\"noopener\">S9</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK519558/\" target=\"_blank\" rel=\"noopener\">S10</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK513251/\" target=\"_blank\" rel=\"noopener\">S11</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK557616/\" target=\"_blank\" rel=\"noopener\">S12</a> · <a href=\"https://pubmed.ncbi.nlm.nih.gov/17261142/\" target=\"_blank\" rel=\"noopener\">S76</a></span></p>"
  },
  "sources": [
   "S9",
   "S10",
   "S11",
   "S12",
   "S76"
  ]
 },
 {
  "chapter": "bones",
  "topic": "landmarks",
  "section": {
   "id": "visual-plus-2",
   "title": "補強｜橫膈通道：高度＋構造＋組織",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><p>三組開口依傳統椎體水平背 8、10、12，再補組織位置。主動脈不是穿過中央腱的第三個洞。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較項目</th><th scope=\"col\">正確配對／範圍</th><th scope=\"col\">容易混淆的地方</th></tr></thead><tbody><tr><td>T8 腔靜脈孔</td><td>下腔靜脈；右膈神經部分分支</td><td>位於中央腱</td></tr><tr><td>T10 食道裂孔</td><td>食道與迷走神經幹</td><td>主要由右膈腳肌纖維圍成</td></tr><tr><td>T12 主動脈裂孔</td><td>主動脈與胸管等</td><td>位於兩膈腳之間、正中弓狀韌帶後方</td></tr><tr><td>膈神經</td><td>主要 C3–C5</td><td>運動支配不由迷走神經取代</td></tr><tr><td>中部感覺</td><td>以膈神經相關感覺支配理解</td><td>與周邊肋間神經分佈分開</td></tr><tr><td>肌收縮</td><td>增加胸腔垂直徑、腹內壓</td><td>三個開口組織不同，受力方式不同</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://www.ncbi.nlm.nih.gov/books/NBK459336/\" target=\"_blank\" rel=\"noopener\">S9</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK519558/\" target=\"_blank\" rel=\"noopener\">S10</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK513251/\" target=\"_blank\" rel=\"noopener\">S11</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK557616/\" target=\"_blank\" rel=\"noopener\">S12</a> · <a href=\"https://pubmed.ncbi.nlm.nih.gov/17261142/\" target=\"_blank\" rel=\"noopener\">S76</a></span></p>"
  },
  "sources": [
   "S9",
   "S10",
   "S11",
   "S12",
   "S76"
  ]
 },
 {
  "chapter": "bones",
  "topic": "skull",
  "section": {
   "id": "visual-plus-1",
   "title": "補強｜顱骨前視圖：成對與不成對先分開",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><figure class=\"enriched-figure\"><a href=\"assets/os-skull-front.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：顱骨前視的骨頭與眼眶標記教材圖\"><img src=\"assets/os-skull-front.webp\" alt=\"顱骨前視的骨頭與眼眶標記教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 7.4；CC BY-NC-SA 4.0。原圖保留，找額骨、眼眶、鼻中隔及上下頜，再核對骨數。 <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-2-the-skull\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 點圖可開啟原尺寸。</figcaption></figure><p>圖中同一骨頭可跨不同解剖區域。骨數分類看骨的名稱，不按「它在眼眶」或「它在鼻腔」另外重複計數。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">英文標記／構造</th><th scope=\"col\">中文與位置</th><th scope=\"col\">辨認或解題理由</th></tr></thead><tbody><tr><td>Frontal</td><td>額骨，腦顱不成對</td><td>也參與眼眶頂</td></tr><tr><td>Parietal / temporal</td><td>頂骨／顳骨，腦顱成對</td><td>不能每個名字都只算一塊</td></tr><tr><td>Ethmoid / sphenoid</td><td>篩骨／蝶骨，腦顱不成對</td><td>也參與眼眶與鼻區</td></tr><tr><td>Maxilla / zygomatic</td><td>上頜骨／顴骨，顏面成對</td><td>參與眼眶與顏面輪廓</td></tr><tr><td>Vomer / mandible</td><td>犁骨／下頜骨，顏面不成對</td><td>是顏面 14 骨中的兩個單骨</td></tr><tr><td>Inferior nasal concha</td><td>下鼻甲，成對獨立顏面骨</td><td>上、中鼻甲屬篩骨</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-2-the-skull\" target=\"_blank\" rel=\"noopener\">S5</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK499834/\" target=\"_blank\" rel=\"noopener\">S8</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK542197/\" target=\"_blank\" rel=\"noopener\">S19</a></span></p>"
  },
  "sources": [
   "S5",
   "S8",
   "S19"
  ]
 },
 {
  "chapter": "bones",
  "topic": "skull",
  "section": {
   "id": "visual-plus-2",
   "title": "補強｜骨縫、交會點與六個囟門",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><p>囟門是尚未骨化的膜性區，不是成人骨孔。不要把某個交會點的骨頭名單當成每一個囟門都相同。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較項目</th><th scope=\"col\">正確配對／範圍</th><th scope=\"col\">容易混淆的地方</th></tr></thead><tbody><tr><td>冠狀縫</td><td>額骨 ↔ 頂骨</td><td>不是左右頂骨間</td></tr><tr><td>矢狀縫</td><td>左右頂骨</td><td>位於顱蓋正中</td></tr><tr><td>人字縫</td><td>頂骨 ↔ 枕骨</td><td>後方兩側形成 λ 形</td></tr><tr><td>鱗狀縫</td><td>頂骨 ↔ 顳骨鱗部</td><td>顱側面</td></tr><tr><td>前囟／後囟</td><td>前囟近 bregma；後囟近 lambda</td><td>前 1、後 1，不是一左一右</td></tr><tr><td>蝶囟／乳突囟</td><td>前外側 2、後外側 2</td><td>前 1＋後 1＋外側 4＝6</td></tr><tr><td>閉合時間</td><td>後囟通常早於前囟</td><td>月份是範圍，異常須看整體生長與縫</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-2-the-skull\" target=\"_blank\" rel=\"noopener\">S5</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK499834/\" target=\"_blank\" rel=\"noopener\">S8</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK542197/\" target=\"_blank\" rel=\"noopener\">S19</a></span></p>"
  },
  "sources": [
   "S5",
   "S8",
   "S19"
  ]
 },
 {
  "chapter": "bones",
  "topic": "fossae",
  "section": {
   "id": "visual-plus-1",
   "title": "補強｜顱窩深度與蝶骨、顳骨的分區",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><figure class=\"enriched-figure\"><a href=\"assets/os-fossae.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：前、中、後顱窩俯視及側面的教材圖\"><img src=\"assets/os-fossae.webp\" alt=\"前、中、後顱窩俯視及側面的教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 7.6；CC BY-NC-SA 4.0。原圖保留，對照上下兩圖：前窩淺、後窩深，蝶骨小翼與巖部是重要界線。 <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-2-the-skull\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 點圖可開啟原尺寸。</figcaption></figure><p>先按骨緣分窩，再辨認孔。視神經管在前、中窩交界附近，不同講義分區方式不完全一致，孔名與內容物比口訣分組更穩定。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">英文標記／構造</th><th scope=\"col\">中文與位置</th><th scope=\"col\">辨認或解題理由</th></tr></thead><tbody><tr><td>Anterior cranial fossa</td><td>前顱窩；額葉下方</td><td>額骨、篩骨、蝶骨小翼相關</td></tr><tr><td>Middle cranial fossa</td><td>中顱窩；顳葉相關</td><td>蝶鞍居中，兩側較寬</td></tr><tr><td>Posterior cranial fossa</td><td>後顱窩；小腦、腦幹相關</td><td>枕骨及顳骨巖部相關</td></tr><tr><td>Lesser wing</td><td>蝶骨小翼</td><td>前、中窩分界的重要骨緣</td></tr><tr><td>Petrous ridge</td><td>顳骨巖部上緣</td><td>中、後窩分界的重要骨緣</td></tr><tr><td>Sella turcica</td><td>蝶鞍；蝶骨體上面</td><td>腦下垂體窩位於其中</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-2-the-skull\" target=\"_blank\" rel=\"noopener\">S5</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK499834/\" target=\"_blank\" rel=\"noopener\">S8</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK482338/\" target=\"_blank\" rel=\"noopener\">S31</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK545298/\" target=\"_blank\" rel=\"noopener\">S51</a></span></p>"
  },
  "sources": [
   "S5",
   "S8",
   "S31",
   "S51"
  ]
 },
 {
  "chapter": "bones",
  "topic": "fossae",
  "section": {
   "id": "visual-plus-2",
   "title": "補強｜顳骨四區：從表面走到深部",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><p>同一顳骨含顱外附著、顱內通道與耳部骨腔。標本題要核對內面、外面或下方視角。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較項目</th><th scope=\"col\">正確配對／範圍</th><th scope=\"col\">容易混淆的地方</th></tr></thead><tbody><tr><td>鱗部 squamous</td><td>顱側面較薄；顴突相關</td><td>與耳內的巖部不同</td></tr><tr><td>巖部 petrous</td><td>顱底深部，容納耳部構造</td><td>內聽道位於後面相關區</td></tr><tr><td>乳突部 mastoid</td><td>乳突與氣房</td><td>表面突起與內部氣房分開</td></tr><tr><td>鼓部 tympanic</td><td>外耳道骨性壁相關</td><td>不是整個鼓室都由它單獨構成</td></tr><tr><td>下頜窩＋關節結節</td><td>接下頜髁與關節盤</td><td>屬顳顎關節骨性關係</td></tr><tr><td>莖乳突孔</td><td>顏面神經離開顱骨的出口</td><td>不要與 VII／VIII 入內聽道混為同一路口</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-2-the-skull\" target=\"_blank\" rel=\"noopener\">S5</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK499834/\" target=\"_blank\" rel=\"noopener\">S8</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK482338/\" target=\"_blank\" rel=\"noopener\">S31</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK545298/\" target=\"_blank\" rel=\"noopener\">S51</a></span></p>"
  },
  "sources": [
   "S5",
   "S8",
   "S31",
   "S51"
  ]
 },
 {
  "chapter": "bones",
  "topic": "foramina",
  "section": {
   "id": "visual-plus-1",
   "title": "補強｜顱底上下視角：骨名、孔名、內容物",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><figure class=\"enriched-figure\"><a href=\"assets/os-skull-base.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：顱底下視與內部俯視的教材圖\"><img src=\"assets/os-skull-base.webp\" alt=\"顱底下視與內部俯視的教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 7.8；CC BY-NC-SA 4.0。原圖保留，兩面都找枕骨大孔，再認圓、卵圓、棘孔；圖上文字可點開放大。 <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-2-the-skull\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 點圖可開啟原尺寸。</figcaption></figure><p>這張表列核心配對，不代表每孔只有一個內容物。孔與裂的位置請回原圖，神經的完整走行請回功能表。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">英文標記／構造</th><th scope=\"col\">中文與位置</th><th scope=\"col\">辨認或解題理由</th></tr></thead><tbody><tr><td>Cribriform foramina</td><td>篩孔；篩骨</td><td>嗅神經纖維 CN I</td></tr><tr><td>Optic canal</td><td>視神經管；蝶骨</td><td>CN II、眼動脈</td></tr><tr><td>Superior orbital fissure</td><td>眶上裂；蝶骨大小翼間</td><td>III、IV、V1、VI 及眼靜脈相關</td></tr><tr><td>Foramen rotundum</td><td>圓孔；蝶骨</td><td>V2 → 翼顎窩</td></tr><tr><td>Foramen ovale</td><td>卵圓孔；蝶骨</td><td>V3，兼感覺與運動</td></tr><tr><td>Foramen spinosum</td><td>棘孔；蝶骨</td><td>中腦膜動脈及相關構造</td></tr><tr><td>Jugular foramen</td><td>頸靜脈孔；顳／枕骨間</td><td>IX、X、XI；靜脈出口</td></tr><tr><td>Hypoglossal canal</td><td>舌下神經管；枕骨</td><td>XII，不走頸靜脈孔</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-2-the-skull\" target=\"_blank\" rel=\"noopener\">S5</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK499834/\" target=\"_blank\" rel=\"noopener\">S8</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK549871/\" target=\"_blank\" rel=\"noopener\">S13</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/n/statpearls/article-36614/\" target=\"_blank\" rel=\"noopener\">S35</a></span></p>"
  },
  "sources": [
   "S5",
   "S8",
   "S13",
   "S35"
  ]
 },
 {
  "chapter": "bones",
  "topic": "foramina",
  "section": {
   "id": "visual-plus-2",
   "title": "補強｜從症狀回推通道：先分感覺與運動",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><p>這是考試定位框架。多條神經同時異常可提示共同通道受影響，但仍需與其他病灶位置鑑別。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較項目</th><th scope=\"col\">正確配對／範圍</th><th scope=\"col\">容易混淆的地方</th></tr></thead><tbody><tr><td>視力相關</td><td>CN II／視神經管</td><td>眼球轉動的 III、IV、VI 走眶上裂</td></tr><tr><td>額頭、角膜感覺</td><td>V1／眶上裂</td><td>不是視神經的皮膚感覺支配</td></tr><tr><td>上頜、上牙、面中部</td><td>V2／圓孔</td><td>眶下孔是其遠端分支出口</td></tr><tr><td>咀嚼肌＋下頜感覺</td><td>V3／卵圓孔</td><td>V3 兼運動，V1／V2 主要感覺</td></tr><tr><td>聽覺與平衡</td><td>VIII／內聽道</td><td>VII 也進入內聽道，但其後走顏面神經管</td></tr><tr><td>吞嚥、聲音、肩轉頭相關</td><td>IX、X、XI／頸靜脈孔</td><td>XII 是舌下神經管</td></tr><tr><td>舌運動</td><td>XII／舌下神經管</td><td>單側病灶方向須分上、下運動神經元</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-2-the-skull\" target=\"_blank\" rel=\"noopener\">S5</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK499834/\" target=\"_blank\" rel=\"noopener\">S8</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK549871/\" target=\"_blank\" rel=\"noopener\">S13</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/n/statpearls/article-36614/\" target=\"_blank\" rel=\"noopener\">S35</a></span></p>"
  },
  "sources": [
   "S5",
   "S8",
   "S13",
   "S35"
  ]
 },
 {
  "chapter": "bones",
  "topic": "orbit-nose",
  "section": {
   "id": "visual-plus-1",
   "title": "補強｜鼻腔正中與側壁：用兩張地圖讀",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><figure class=\"enriched-figure\"><a href=\"assets/os-nasal.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：鼻腔骨性中隔、鼻甲與副鼻竇的教材圖\"><img src=\"assets/os-nasal.webp\" alt=\"鼻腔骨性中隔、鼻甲與副鼻竇的教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 7.17；CC BY-NC-SA 4.0。原圖保留，先分中線的隔板與兩側的鼻甲，再把引流路口接上。 <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-2-the-skull\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 點圖可開啟原尺寸。</figcaption></figure><p>一張圖可以同時顯示骨、軟骨與空腔。請先分類再記位置，避免把鼻甲、鼻道、鼻竇當同一個構造。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">英文標記／構造</th><th scope=\"col\">中文與位置</th><th scope=\"col\">辨認或解題理由</th></tr></thead><tbody><tr><td>Perpendicular plate</td><td>篩骨垂直板；骨性中隔上部</td><td>不是篩板</td></tr><tr><td>Vomer</td><td>犁骨；骨性中隔後下部</td><td>不成對顏面骨</td></tr><tr><td>Septal cartilage</td><td>鼻中隔軟骨；前部</td><td>中隔不全是骨</td></tr><tr><td>Superior / middle concha</td><td>上、中鼻甲；篩骨的一部分</td><td>不要再算兩塊獨立顏面骨</td></tr><tr><td>Inferior nasal concha</td><td>下鼻甲；獨立成對骨</td><td>與鼻道不是同一名詞</td></tr><tr><td>Cribriform plate</td><td>篩板；鼻腔頂部相關</td><td>嗅神經小孔，不是鼻竇引流道</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-2-the-skull\" target=\"_blank\" rel=\"noopener\">S5</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK557817/\" target=\"_blank\" rel=\"noopener\">S39</a> · <a href=\"https://pubmed.ncbi.nlm.nih.gov/31392880/\" target=\"_blank\" rel=\"noopener\">S107</a></span></p>"
  },
  "sources": [
   "S5",
   "S39",
   "S107"
  ]
 },
 {
  "chapter": "bones",
  "topic": "orbit-nose",
  "section": {
   "id": "visual-plus-2",
   "title": "補強｜眼眶四壁與鼻道通路細分",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><p>眼眶七骨是總數，四壁表是同一七骨的不同分佈；同一塊骨可參與多個部位，不能把分壁數字直接加總。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較項目</th><th scope=\"col\">正確配對／範圍</th><th scope=\"col\">容易混淆的地方</th></tr></thead><tbody><tr><td>眼眶頂</td><td>額骨眶板＋蝶骨小翼</td><td>蝶骨大翼主要在外側壁</td></tr><tr><td>眼眶外側壁</td><td>顴骨＋蝶骨大翼</td><td>相對較厚</td></tr><tr><td>眼眶底</td><td>上頜骨為主，顴骨及顎骨小部分</td><td>底骨折可連到眶下神經與眼肌</td></tr><tr><td>眼眶內側壁</td><td>篩骨、淚骨、上頜骨額突、蝶骨體</td><td>紙板是篩骨薄板</td></tr><tr><td>下鼻道</td><td>鼻淚管開口</td><td>不是上頜竇主要開口</td></tr><tr><td>中鼻道</td><td>額、上頜、前／中篩氣房相關引流</td><td>路線有變異，不全由一根共同管流入</td></tr><tr><td>上鼻道／蝶篩隱窩</td><td>後篩／蝶竇</td><td>不能把蝶竇開口直接等同上鼻道</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-2-the-skull\" target=\"_blank\" rel=\"noopener\">S5</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK557817/\" target=\"_blank\" rel=\"noopener\">S39</a> · <a href=\"https://pubmed.ncbi.nlm.nih.gov/31392880/\" target=\"_blank\" rel=\"noopener\">S107</a></span></p>"
  },
  "sources": [
   "S5",
   "S39",
   "S107"
  ]
 },
 {
  "chapter": "bones2",
  "topic": "bones2-skull-face",
  "section": {
   "id": "visual-plus-1",
   "title": "補強｜篩骨與鼻中隔：每個 plate 放回位置",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><figure class=\"enriched-figure\"><a href=\"assets/os-nasal.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：鼻中隔與鼻甲的教材圖\"><img src=\"assets/os-nasal.webp\" alt=\"鼻中隔與鼻甲的教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 7.17；CC BY-NC-SA 4.0。原圖保留，上、中鼻甲是篩骨；下鼻甲是獨立骨。 <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-2-the-skull\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 點圖可開啟原尺寸。</figcaption></figure><p>先以篩骨的顱內、鼻中隔、鼻腔側壁、眼眶四個面向理解，再記十四塊顏面骨。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">英文標記／構造</th><th scope=\"col\">中文與位置</th><th scope=\"col\">辨認或解題理由</th></tr></thead><tbody><tr><td>Crista galli</td><td>雞冠；篩板上方</td><td>顱內大腦鐮附著相關</td></tr><tr><td>Cribriform plate</td><td>篩板；兩側有嗅神經孔</td><td>區分垂直板</td></tr><tr><td>Perpendicular plate</td><td>垂直板；中隔上部</td><td>區分兩側鼻甲</td></tr><tr><td>Lamina papyracea</td><td>紙板；眼眶內側壁</td><td>篩氣房與眼眶相鄰</td></tr><tr><td>Vomer</td><td>犁骨；中隔後下部</td><td>顏面骨單骨</td></tr><tr><td>Inferior concha</td><td>下鼻甲</td><td>顏面骨雙骨</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-2-the-skull\" target=\"_blank\" rel=\"noopener\">S5</a> · <a href=\"https://pubmed.ncbi.nlm.nih.gov/28703849/\" target=\"_blank\" rel=\"noopener\">S50</a> · <a href=\"https://pubmed.ncbi.nlm.nih.gov/31392880/\" target=\"_blank\" rel=\"noopener\">S107</a></span></p>"
  },
  "sources": [
   "S5",
   "S50",
   "S107"
  ]
 },
 {
  "chapter": "bones2",
  "topic": "bones2-skull-face",
  "section": {
   "id": "visual-plus-2",
   "title": "補強｜副鼻竇引流：鼻道名稱不是骨名",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><p>圖像配合路口表，能解釋鼻腔與眼眶、牙齒區域的相鄰關係；不以個人症狀直接判定哪一竇發炎。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較項目</th><th scope=\"col\">正確配對／範圍</th><th scope=\"col\">容易混淆的地方</th></tr></thead><tbody><tr><td>額竇</td><td>通常通向中鼻道系統</td><td>額隱窩等路線可變</td></tr><tr><td>上頜竇</td><td>自然開口位內側壁較高處，通中鼻道</td><td>不向下鼻道直接引流</td></tr><tr><td>前篩氣房</td><td>中鼻道相關</td><td>與後篩分開</td></tr><tr><td>中篩氣房</td><td>中鼻道、篩泡相關</td><td>不是所有篩氣房共用同一開口</td></tr><tr><td>後篩氣房</td><td>上鼻道</td><td>通常不同於蝶竇開口</td></tr><tr><td>蝶竇</td><td>蝶篩隱窩</td><td>位於上鼻甲上後方相關區</td></tr><tr><td>鼻淚管</td><td>下鼻道</td><td>它不是副鼻竇</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-2-the-skull\" target=\"_blank\" rel=\"noopener\">S5</a> · <a href=\"https://pubmed.ncbi.nlm.nih.gov/28703849/\" target=\"_blank\" rel=\"noopener\">S50</a> · <a href=\"https://pubmed.ncbi.nlm.nih.gov/31392880/\" target=\"_blank\" rel=\"noopener\">S107</a></span></p>"
  },
  "sources": [
   "S5",
   "S50",
   "S107"
  ]
 },
 {
  "chapter": "bones2",
  "topic": "bones2-palate-jaw",
  "section": {
   "id": "visual-plus-1",
   "title": "補強｜下頜骨：外表、內面與兩個突",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><figure class=\"enriched-figure\"><a href=\"assets/os-mandible.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：下頜骨外面與內面的教材圖\"><img src=\"assets/os-mandible.webp\" alt=\"下頜骨外面與內面的教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 7.15；CC BY-NC-SA 4.0。原圖保留，冠突前、髁突後；頦孔在外、頦棘在內。 <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-2-the-skull\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 點圖可開啟原尺寸。</figcaption></figure><p>原圖同一標記可在不同視角出現。下齒槽神經的管內路線和頦孔遠端出口需要分段記憶。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">英文標記／構造</th><th scope=\"col\">中文與位置</th><th scope=\"col\">辨認或解題理由</th></tr></thead><tbody><tr><td>Coronoid process</td><td>冠突，支的前上端</td><td>顳肌止點相關</td></tr><tr><td>Condylar process</td><td>髁突，支的後上端</td><td>頭與頸參與 TMJ</td></tr><tr><td>Mandibular notch</td><td>下頜切跡</td><td>冠突、髁突之間</td></tr><tr><td>Mandibular foramen</td><td>下頜孔，支內面</td><td>下齒槽神經、血管進入</td></tr><tr><td>Mental foramen</td><td>頦孔，體外面</td><td>頦神經與血管離開</td></tr><tr><td>Mental spines</td><td>頦棘，體內面正中</td><td>頦舌肌、頦舌骨肌起點</td></tr><tr><td>Mylohyoid line</td><td>下頜舌骨肌線，內面</td><td>下頜舌骨肌起點</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://www.ncbi.nlm.nih.gov/books/NBK532292/\" target=\"_blank\" rel=\"noopener\">S41</a> · <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC10968188/\" target=\"_blank\" rel=\"noopener\">S49</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK541027/\" target=\"_blank\" rel=\"noopener\">S104</a></span></p>"
  },
  "sources": [
   "S41",
   "S49",
   "S104"
  ]
 },
 {
  "chapter": "bones2",
  "topic": "bones2-palate-jaw",
  "section": {
   "id": "visual-plus-2",
   "title": "補強｜咀嚼與口底肌：骨性附著＋神經",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><p>頦棘與肌腱附著範圍有變異；國考先採標準上下配對，再認識不一定每個肌腱都只限於單一尖點。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較項目</th><th scope=\"col\">正確配對／範圍</th><th scope=\"col\">容易混淆的地方</th></tr></thead><tbody><tr><td>顳肌</td><td>顳窩 → 冠突；V3</td><td>主要提下頜，後束助回縮</td></tr><tr><td>咬肌</td><td>顴弓 → 下頜支外面／角；V3</td><td>不是內面翼肌粗隆</td></tr><tr><td>內翼肌</td><td>翼區 → 下頜支內面／角；V3</td><td>與咬肌形成內外兩側配對</td></tr><tr><td>外翼肌</td><td>翼區 → 髁頸翼肌窩、盤囊相關；V3</td><td>不同頭與盤囊關係需保留範圍</td></tr><tr><td>頦舌肌</td><td>上頦棘 → 舌；XII</td><td>不要配頦舌骨肌的 C1</td></tr><tr><td>頦舌骨肌</td><td>下頦棘 → 舌骨；C1 隨 XII</td><td>有神經隨行，不代表來源就是 XII</td></tr><tr><td>下頜舌骨肌</td><td>下頜舌骨肌線 → 舌骨／中線；V3 支</td><td>屬口底與舌骨上肌群，非四大咀嚼肌之一</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://www.ncbi.nlm.nih.gov/books/NBK532292/\" target=\"_blank\" rel=\"noopener\">S41</a> · <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC10968188/\" target=\"_blank\" rel=\"noopener\">S49</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK541027/\" target=\"_blank\" rel=\"noopener\">S104</a></span></p>"
  },
  "sources": [
   "S41",
   "S49",
   "S104"
  ]
 },
 {
  "chapter": "bones2",
  "topic": "bones2-ppf",
  "section": {
   "id": "visual-plus-1",
   "title": "補強｜翼顎窩：通道先按方向分組",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><figure class=\"enriched-figure\"><a href=\"assets/visual-ppf.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：翼顎窩七通道與鄰近區域的原創交通圖\"><img src=\"assets/visual-ppf.svg\" alt=\"翼顎窩七通道與鄰近區域的原創交通圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>本站原創概念圖；非等比例。中間是窩，線是交通關係；不是剖面外形。 點圖可開啟原尺寸。</figcaption></figure><p>窩是骨性空間，不是神經節本身。神經、血管從不同方向進出，通道數和神經分支數不能直接互相代換。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">英文標記／構造</th><th scope=\"col\">中文與位置</th><th scope=\"col\">辨認或解題理由</th></tr></thead><tbody><tr><td>Foramen rotundum</td><td>後上方連中顱窩</td><td>V2 進入</td></tr><tr><td>Pterygoid canal</td><td>後方連破裂孔附近</td><td>翼管神經進入</td></tr><tr><td>Palatovaginal canal</td><td>後方連鼻咽</td><td>咽支相關</td></tr><tr><td>Inferior orbital fissure</td><td>上方通眼眶</td><td>眶下、顴神經相關</td></tr><tr><td>Sphenopalatine foramen</td><td>內側通鼻腔</td><td>鼻支、蝶顎動脈</td></tr><tr><td>Palatine canals</td><td>向下通顎部</td><td>大、小顎神經與血管</td></tr><tr><td>Pterygomaxillary fissure</td><td>外側通顳下窩</td><td>上頜動脈末段進入相關</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://www.ncbi.nlm.nih.gov/books/NBK513269/\" target=\"_blank\" rel=\"noopener\">S37</a> · <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC4956626/\" target=\"_blank\" rel=\"noopener\">S38</a></span></p>"
  },
  "sources": [
   "S37",
   "S38"
  ]
 },
 {
  "chapter": "bones2",
  "topic": "bones2-ppf",
  "section": {
   "id": "visual-plus-2",
   "title": "補強｜感覺、副交感、交感：突觸規則不同",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><p>用「來源→是否換元→隨誰走」讀神經節，比把七條通道全部當感覺神經出口更準確。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較項目</th><th scope=\"col\">正確配對／範圍</th><th scope=\"col\">容易混淆的地方</th></tr></thead><tbody><tr><td>V2 感覺纖維</td><td>圓孔進入，分往鼻、顎、眼眶區域</td><td>經過神經節相關分支不表示在此換神經元</td></tr><tr><td>大巖神經</td><td>VII 來源，攜副交感節前纖維</td><td>在翼顎神經節的副交感路徑換神經元</td></tr><tr><td>深巖神經</td><td>頸內動脈交感叢的節後纖維</td><td>通常不在翼顎神經節再換</td></tr><tr><td>翼管神經</td><td>大巖＋深巖合流</td><td>同束中兩種纖維的突觸規則不同</td></tr><tr><td>節後副交感</td><td>隨 V2 分支分佈</td><td>到淚腺可再接 V1 淚腺神經通路</td></tr><tr><td>上頜動脈末段</td><td>血管進入與分支分佈</td><td>不可誤寫為頸內動脈穿過圓孔</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://www.ncbi.nlm.nih.gov/books/NBK513269/\" target=\"_blank\" rel=\"noopener\">S37</a> · <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC4956626/\" target=\"_blank\" rel=\"noopener\">S38</a></span></p>"
  },
  "sources": [
   "S37",
   "S38"
  ]
 },
 {
  "chapter": "bones2",
  "topic": "bones2-vertebrae",
  "section": {
   "id": "visual-plus-1",
   "title": "補強｜俯視與側視：椎弓根、椎板、神經孔",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><figure class=\"enriched-figure\"><a href=\"assets/os-vertebra.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：椎骨俯視與相鄰椎骨側面的教材圖\"><img src=\"assets/os-vertebra.webp\" alt=\"椎骨俯視與相鄰椎骨側面的教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 7.23；CC BY-NC-SA 4.0。原圖保留，兩張圖的椎體都是前方；換視角時先找椎體。 <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-3-the-vertebral-column\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 點圖可開啟原尺寸。</figcaption></figure><p>33 椎節與成人通常 26 塊融合後骨頭的數字，是兩個不同的計數規則。此處圖示典型椎骨，不把 C1 的環形外觀硬套進去。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">英文標記／構造</th><th scope=\"col\">中文與位置</th><th scope=\"col\">辨認或解題理由</th></tr></thead><tbody><tr><td>Pedicle</td><td>椎弓根；體到弓的側方橋接</td><td>上下切跡參與椎間孔</td></tr><tr><td>Lamina</td><td>椎板；後方</td><td>與黃韌帶相鄰</td></tr><tr><td>Spinous process</td><td>棘突；正中後方</td><td>典型椎骨一個</td></tr><tr><td>Transverse processes</td><td>橫突；左右</td><td>典型椎骨一對</td></tr><tr><td>Articular processes</td><td>上下關節突；兩對</td><td>對應滑液小面關節</td></tr><tr><td>Sacral hiatus</td><td>薦管裂孔；薦管下端開口</td><td>與薦孔不同</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-3-the-vertebral-column\" target=\"_blank\" rel=\"noopener\">S6</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK459153/\" target=\"_blank\" rel=\"noopener\">S43</a> · <a href=\"https://humananatomy.host.dartmouth.edu/BHA/public_html/part_7/chapter_39.html\" target=\"_blank\" rel=\"noopener\">S46</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK459200/\" target=\"_blank\" rel=\"noopener\">S53</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK551653/\" target=\"_blank\" rel=\"noopener\">S54</a></span></p>"
  },
  "sources": [
   "S6",
   "S43",
   "S46",
   "S53",
   "S54"
  ]
 },
 {
  "chapter": "bones2",
  "topic": "bones2-vertebrae",
  "section": {
   "id": "visual-plus-2",
   "title": "補強｜薦骨：孔、嵴、角能還原原構造",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><p>從原始椎節構造還原融合後的表面地標，能把一串相似的 sacral 名詞分清楚。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較項目</th><th scope=\"col\">正確配對／範圍</th><th scope=\"col\">容易混淆的地方</th></tr></thead><tbody><tr><td>薦骨正中嵴</td><td>融合棘突</td><td>後面正中</td></tr><tr><td>薦骨中間嵴</td><td>融合關節突相關</td><td>位於後薦孔內側附近</td></tr><tr><td>薦骨外側嵴</td><td>融合橫突相關</td><td>位於後薦孔外側</td></tr><tr><td>前薦孔</td><td>主要前支 S1–S4 通路</td><td>不是每孔都是整條未分支的脊神經</td></tr><tr><td>後薦孔</td><td>主要後支 S1–S4 通路</td><td>與前薦孔成不同表面路口</td></tr><tr><td>薦角</td><td>S5 下關節突相關</td><td>薦管裂孔兩旁</td></tr><tr><td>耳狀面</td><td>薦骨與髂骨關節面</td><td>不是接股骨頭的髖臼</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-3-the-vertebral-column\" target=\"_blank\" rel=\"noopener\">S6</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK459153/\" target=\"_blank\" rel=\"noopener\">S43</a> · <a href=\"https://humananatomy.host.dartmouth.edu/BHA/public_html/part_7/chapter_39.html\" target=\"_blank\" rel=\"noopener\">S46</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK459200/\" target=\"_blank\" rel=\"noopener\">S53</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK551653/\" target=\"_blank\" rel=\"noopener\">S54</a></span></p>"
  },
  "sources": [
   "S6",
   "S43",
   "S46",
   "S53",
   "S54"
  ]
 },
 {
  "chapter": "bones2",
  "topic": "bones2-rib-joints",
  "section": {
   "id": "visual-plus-1",
   "title": "補強｜第六肋範例：頭與結節各接誰",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><figure class=\"enriched-figure\"><a href=\"assets/os-rib-joint.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：典型肋骨頭、結節與胸椎兩種關節的教材圖\"><img src=\"assets/os-rib-joint.webp\" alt=\"典型肋骨頭、結節與胸椎兩種關節的教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 7.27；CC BY-NC-SA 4.0。原圖保留，沿肋骨後端找頭、頸、結節，不把兩種關節合成一個。 <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-3-the-vertebral-column\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 點圖可開啟原尺寸。</figcaption></figure><p>典型模式要能由 n 肋換成任意號碼，同時認識第 1、10、11、12 肋與胸椎區域的例外。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">英文標記／構造</th><th scope=\"col\">中文與位置</th><th scope=\"col\">辨認或解題理由</th></tr></thead><tbody><tr><td>Head of rib 6</td><td>第六肋頭接 T5、T6 椎體</td><td>涉及兩者間椎間盤</td></tr><tr><td>Tubercle of rib 6</td><td>第六肋結節接 T6 橫突</td><td>同號，不是 T5</td></tr><tr><td>Costal demifacet</td><td>椎體半肋凹</td><td>上下兩椎分擔一個肋頭</td></tr><tr><td>Transverse costal facet</td><td>橫突肋凹</td><td>供結節接合</td></tr><tr><td>Costal groove</td><td>肋體內面下緣</td><td>血管神經通道，非關節面</td></tr><tr><td>Rib angle</td><td>肋角；彎曲較明顯部</td><td>不是肋結節</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-3-the-vertebral-column\" target=\"_blank\" rel=\"noopener\">S6</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK459153/\" target=\"_blank\" rel=\"noopener\">S43</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK538328/\" target=\"_blank\" rel=\"noopener\">S58</a></span></p>"
  },
  "sources": [
   "S6",
   "S43",
   "S58"
  ]
 },
 {
  "chapter": "bones2",
  "topic": "bones2-rib-joints",
  "section": {
   "id": "visual-plus-2",
   "title": "補強｜以關節面而不是外形數目解題",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><p>題目若問一塊椎骨總共有幾個面，要先說左右、椎體或橫突及所指定椎節；不要用所有胸椎一個固定答案。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較項目</th><th scope=\"col\">正確配對／範圍</th><th scope=\"col\">容易混淆的地方</th></tr></thead><tbody><tr><td>第一肋頭</td><td>通常接 T1 完整面</td><td>T1 椎體下半面還接第二肋頭</td></tr><tr><td>第十肋頭</td><td>通常接 T10 單面</td><td>下位肋、椎體關節面有變異</td></tr><tr><td>第十一、十二肋</td><td>頭接同號椎體</td><td>通常無肋橫突關節</td></tr><tr><td>T1 上面完整肋凹</td><td>接第一肋頭</td><td>不能全稱上半面</td></tr><tr><td>典型 T 椎體上下半面</td><td>各接不同肋頭的一部分</td><td>從椎骨數面與從肋骨數面分開</td></tr><tr><td>前方第一肋軟骨</td><td>通常軟骨連胸骨柄</td><td>後方關節分類不是前方分類</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-3-the-vertebral-column\" target=\"_blank\" rel=\"noopener\">S6</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK459153/\" target=\"_blank\" rel=\"noopener\">S43</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK538328/\" target=\"_blank\" rel=\"noopener\">S58</a></span></p>"
  },
  "sources": [
   "S6",
   "S43",
   "S58"
  ]
 },
 {
  "chapter": "bones2",
  "topic": "bones2-disc-lp",
  "section": {
   "id": "visual-plus-1",
   "title": "補強｜椎間盤與神經出口：看圖再看層次",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><figure class=\"enriched-figure\"><a href=\"assets/os-disc.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：相鄰椎體、纖維環、髓核與椎間孔教材圖\"><img src=\"assets/os-disc.webp\" alt=\"相鄰椎體、纖維環、髓核與椎間孔教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 7.24；CC BY-NC-SA 4.0。原圖保留，側視接承重，俯視接外環與中心。 <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-3-the-vertebral-column\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 點圖可開啟原尺寸。</figcaption></figure><p>盤、韌帶與腦脊髓膜不是同一層。圖上受壓神經位置需另外配合根走行，不由「後」字單獨決定。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">英文標記／構造</th><th scope=\"col\">中文與位置</th><th scope=\"col\">辨認或解題理由</th></tr></thead><tbody><tr><td>Annulus fibrosus</td><td>纖維環；外層</td><td>不是單層膜</td></tr><tr><td>Nucleus pulposus</td><td>髓核；內部</td><td>承壓與含水特性相關</td></tr><tr><td>Endplate</td><td>軟骨終板</td><td>與椎體接合、營養交換相關</td></tr><tr><td>Posterior longitudinal ligament</td><td>後縱韌帶；椎體後面</td><td>在椎管前壁相關位置</td></tr><tr><td>Ligamentum flavum</td><td>黃韌帶；相鄰椎板間</td><td>在椎管後壁相關位置</td></tr><tr><td>Epidural space</td><td>脊髓硬膜外腔</td><td>脂肪、靜脈叢相關</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://www.ncbi.nlm.nih.gov/books/NBK547755/\" target=\"_blank\" rel=\"noopener\">S44</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK470583/\" target=\"_blank\" rel=\"noopener\">S45</a> · <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC9039569/\" target=\"_blank\" rel=\"noopener\">S47</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK560878/\" target=\"_blank\" rel=\"noopener\">S18</a></span></p>"
  },
  "sources": [
   "S44",
   "S45",
   "S47",
   "S18"
  ]
 },
 {
  "chapter": "bones2",
  "topic": "bones2-disc-lp",
  "section": {
   "id": "visual-plus-2",
   "title": "補強｜膜層與腔隙：硬膜外不等於蛛網膜下",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><p>用相對位置理解層次，避免把背部皮膚至 CSF 的列表當成每位病人相同深度、相同操作路徑。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較項目</th><th scope=\"col\">正確配對／範圍</th><th scope=\"col\">容易混淆的地方</th></tr></thead><tbody><tr><td>椎管骨性內面</td><td>骨與韌帶圍成</td><td>骨性椎管≠硬膜囊</td></tr><tr><td>脊髓硬膜外腔</td><td>硬膜外，具脂肪與靜脈叢</td><td>與顱內常說的潛在硬膜外隙不同</td></tr><tr><td>硬膜下隙</td><td>通常視為潛在界面</td><td>不把它當正常大量 CSF 所在</td></tr><tr><td>蛛網膜下腔</td><td>蛛網膜與軟膜間；CSF</td><td>腰池屬於此腔延續</td></tr><tr><td>軟膜</td><td>緊貼脊髓／神經相關表面</td><td>正中腰椎穿刺目標不是穿透脊髓軟膜</td></tr><tr><td>馬尾</td><td>腰薦神經根束</td><td>不是脊髓伸到整個腰池</td></tr><tr><td>穿刺選較低間隙</td><td>成人通常 L3–4 或 L4–5 的解剖理由</td><td>實際操作仍需個別定位與規範</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://www.ncbi.nlm.nih.gov/books/NBK547755/\" target=\"_blank\" rel=\"noopener\">S44</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK470583/\" target=\"_blank\" rel=\"noopener\">S45</a> · <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC9039569/\" target=\"_blank\" rel=\"noopener\">S47</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK560878/\" target=\"_blank\" rel=\"noopener\">S18</a></span></p>"
  },
  "sources": [
   "S44",
   "S45",
   "S47",
   "S18"
  ]
 },
 {
  "chapter": "bones2",
  "topic": "bones2-atlas-roots",
  "section": {
   "id": "visual-plus-1",
   "title": "補強｜寰椎、樞椎與典型頸椎",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><figure class=\"enriched-figure\"><a href=\"assets/os-cervical.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：典型頸椎、寰椎與樞椎的教材圖\"><img src=\"assets/os-cervical.webp\" alt=\"典型頸椎、寰椎與樞椎的教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 7.25；CC BY-NC-SA 4.0。原圖保留，環形 C1、齒突 C2、典型小椎體要分別指認。 <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-3-the-vertebral-column\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 點圖可開啟原尺寸。</figcaption></figure><p>yes／no 口訣是主要功能概括，兩個區域都與周圍韌帶和肌肉共同活動。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">英文標記／構造</th><th scope=\"col\">中文與位置</th><th scope=\"col\">辨認或解題理由</th></tr></thead><tbody><tr><td>Atlas C1</td><td>環形，無典型椎體與棘突</td><td>側塊上面接枕髁</td></tr><tr><td>Axis C2</td><td>齒突向上</td><td>作寰樞旋轉軸</td></tr><tr><td>Anterior arch C1</td><td>前弓後面接齒突</td><td>與橫韌帶一起構成齒突穩定關係</td></tr><tr><td>Transverse ligament</td><td>寰椎橫韌帶，位齒突後方</td><td>將齒突保持在前弓側</td></tr><tr><td>Atlanto-occipital</td><td>寰枕；頭的屈伸較重要</td><td>不是大部分轉頭的軸</td></tr><tr><td>Atlantoaxial</td><td>寰樞；旋轉較重要</td><td>中間與左右關節共同構成複合體</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-3-the-vertebral-column\" target=\"_blank\" rel=\"noopener\">S6</a> · <a href=\"https://humananatomy.host.dartmouth.edu/BHA/public_html/part_7/chapter_39.html\" target=\"_blank\" rel=\"noopener\">S46</a> · <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC8035576/\" target=\"_blank\" rel=\"noopener\">S55</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK563271/\" target=\"_blank\" rel=\"noopener\">S109</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK560878/\" target=\"_blank\" rel=\"noopener\">S18</a></span></p>"
  },
  "sources": [
   "S6",
   "S46",
   "S55",
   "S109",
   "S18"
  ]
 },
 {
  "chapter": "bones2",
  "topic": "bones2-atlas-roots",
  "section": {
   "id": "visual-plus-2",
   "title": "補強｜神經根規則與椎間盤方向",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><p>神經根表和皮節表要配合肌力與反射交叉看；圖像異常的間隙不一定就是症狀的唯一來源。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較項目</th><th scope=\"col\">正確配對／範圍</th><th scope=\"col\">容易混淆的地方</th></tr></thead><tbody><tr><td>C1–C7 神經</td><td>從同號椎骨上方離開</td><td>所以 C7 神經在 C6–C7 間</td></tr><tr><td>C8 神經</td><td>從 C7–T1 間離開</td><td>並沒有第八塊頸椎</td></tr><tr><td>T1 以後</td><td>從同號椎骨下方離開</td><td>不要把頸部規則往下套</td></tr><tr><td>L4–L5 旁中央突出</td><td>較常影響通過根 L5</td><td>不是每一例都同樣方向</td></tr><tr><td>L4–L5 孔內／遠外側突出</td><td>可影響離開根 L4</td><td>同一間隙、不同根</td></tr><tr><td>L5–S1 旁中央突出</td><td>較常影響通過根 S1</td><td>命名間隙不等於命名受壓根</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-3-the-vertebral-column\" target=\"_blank\" rel=\"noopener\">S6</a> · <a href=\"https://humananatomy.host.dartmouth.edu/BHA/public_html/part_7/chapter_39.html\" target=\"_blank\" rel=\"noopener\">S46</a> · <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC8035576/\" target=\"_blank\" rel=\"noopener\">S55</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK563271/\" target=\"_blank\" rel=\"noopener\">S109</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK560878/\" target=\"_blank\" rel=\"noopener\">S18</a></span></p>"
  },
  "sources": [
   "S6",
   "S46",
   "S55",
   "S109",
   "S18"
  ]
 },
 {
  "chapter": "bones3",
  "topic": "ribs-wall",
  "section": {
   "id": "visual-plus-1",
   "title": "補強｜胸壁與肋骨：從骨架回到橫切面",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><figure class=\"enriched-figure\"><a href=\"assets/os-thorax.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：胸骨與十二對肋骨的教材圖\"><img src=\"assets/os-thorax.webp\" alt=\"胸骨與十二對肋骨的教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 7.32；CC BY-NC-SA 4.0。原圖保留，骨架前視圖與本頁 VAN 層次圖要分別讀。 <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-4-the-thoracic-cage\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 點圖可開啟原尺寸。</figcaption></figure><p>骨架圖幫忙定肋與肋間，層次圖幫忙定血管神經；前方、後方與側方不同區域的深層肌群也不完全相同。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">英文標記／構造</th><th scope=\"col\">中文與位置</th><th scope=\"col\">辨認或解題理由</th></tr></thead><tbody><tr><td>Rib head</td><td>肋骨頭，後端</td><td>接椎體</td></tr><tr><td>Rib tubercle</td><td>肋結節，頸與體交界</td><td>典型接橫突</td></tr><tr><td>Costal groove</td><td>肋溝，內面下緣</td><td>主神經血管束</td></tr><tr><td>External intercostal</td><td>外肋間肌，淺層</td><td>前下方向，前方以膜延續</td></tr><tr><td>Internal intercostal</td><td>內肋間肌，中層</td><td>後下方向，後部以膜延續</td></tr><tr><td>Innermost intercostal</td><td>最內肋間肌，側胸深層</td><td>與內肋間肌之間是主束平面</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-4-the-thoracic-cage\" target=\"_blank\" rel=\"noopener\">S7</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK538328/\" target=\"_blank\" rel=\"noopener\">S58</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK549847/\" target=\"_blank\" rel=\"noopener\">S59</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK538321/?report=printable\" target=\"_blank\" rel=\"noopener\">S78</a></span></p>"
  },
  "sources": [
   "S7",
   "S58",
   "S59",
   "S78"
  ]
 },
 {
  "chapter": "bones3",
  "topic": "ribs-wall",
  "section": {
   "id": "visual-plus-2",
   "title": "補強｜第一肋與一般肋：同樣叫 groove，方向不同",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><p>「前後」、「上下」、「深淺」是三個不同方向軸。讀題先找它在問哪個軸，再套用相應關係。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較項目</th><th scope=\"col\">正確配對／範圍</th><th scope=\"col\">容易混淆的地方</th></tr></thead><tbody><tr><td>一般肋溝</td><td>內面下緣，VAN 由上到下</td><td>不是同一根肋骨上面的兩血管溝</td></tr><tr><td>第一肋上面</td><td>前斜角肌結節作前後分界</td><td>位置不是一般 VAN 平面</td></tr><tr><td>鎖骨下靜脈</td><td>前斜角肌前方</td><td>不跟動脈一起走斜角肌間隙</td></tr><tr><td>鎖骨下動脈／臂叢</td><td>前、中斜角肌間</td><td>與第一肋後方動脈溝相關</td></tr><tr><td>主肋間束</td><td>靠上方肋骨下緣</td><td>下方肋骨上緣還可能有側支</td></tr><tr><td>深層胸壁肌</td><td>最內肋間、肋下、胸橫按區域分佈</td><td>不能用胸橫肌包辦所有第三層</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-4-the-thoracic-cage\" target=\"_blank\" rel=\"noopener\">S7</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK538328/\" target=\"_blank\" rel=\"noopener\">S58</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK549847/\" target=\"_blank\" rel=\"noopener\">S59</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK538321/?report=printable\" target=\"_blank\" rel=\"noopener\">S78</a></span></p>"
  },
  "sources": [
   "S7",
   "S58",
   "S59",
   "S78"
  ]
 },
 {
  "chapter": "bones3",
  "topic": "scapula",
  "section": {
   "id": "visual-plus-1",
   "title": "補強｜肩胛骨前後面：把肌肉放回骨面",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><figure class=\"enriched-figure\"><a href=\"assets/os-scapula.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：肩胛骨前面與後面的教材圖\"><img src=\"assets/os-scapula.webp\" alt=\"肩胛骨前面與後面的教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 8.4；CC BY-NC-SA 4.0。原圖保留，圖中右肩胛骨關節盂位於外側；棘把後面分成兩個窩。 <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-1-the-pectoral-girdle\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 點圖可開啟原尺寸。</figcaption></figure><p>先用骨面定位肌肉，再接神經。關節盂、盂上結節、盂下結節是相鄰但不同的附著與關節標記。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">英文標記／構造</th><th scope=\"col\">中文與位置</th><th scope=\"col\">辨認或解題理由</th></tr></thead><tbody><tr><td>Subscapular fossa</td><td>肩胛下窩，前面</td><td>肩胛下肌起點</td></tr><tr><td>Supraspinous fossa</td><td>棘上窩，後上</td><td>棘上肌起點</td></tr><tr><td>Infraspinous fossa</td><td>棘下窩，後下</td><td>棘下肌起點</td></tr><tr><td>Medial border</td><td>內側緣</td><td>前面與後面附著不同肌群</td></tr><tr><td>Glenoid cavity</td><td>關節盂，外側</td><td>接肱骨頭</td></tr><tr><td>Acromion</td><td>肩峰，棘的外側延續</td><td>接鎖骨，不是喙突</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-1-the-pectoral-girdle\" target=\"_blank\" rel=\"noopener\">S61</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK546633/\" target=\"_blank\" rel=\"noopener\">S67</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK557880/\" target=\"_blank\" rel=\"noopener\">S64</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK459343/\" target=\"_blank\" rel=\"noopener\">S110</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK531457/\" target=\"_blank\" rel=\"noopener\">S111</a></span></p>"
  },
  "sources": [
   "S61",
   "S67",
   "S64",
   "S110",
   "S111"
  ]
 },
 {
  "chapter": "bones3",
  "topic": "scapula",
  "section": {
   "id": "visual-plus-2",
   "title": "補強｜肩胛骨周圍肌：骨點＋動作＋神經",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><p>翼狀肩胛可有不同神經或肌肉原因；不能把每一種肩胛突出都直接等同長胸神經損傷。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較項目</th><th scope=\"col\">正確配對／範圍</th><th scope=\"col\">容易混淆的地方</th></tr></thead><tbody><tr><td>前鋸肌</td><td>內側緣前面；長胸神經</td><td>助前伸與上旋、貼住胸壁；不是肩胛背神經</td></tr><tr><td>菱形肌</td><td>內側緣後面相關；肩胛背神經</td><td>助後縮、下旋</td></tr><tr><td>提肩胛肌</td><td>上角／上部內側緣；肩胛背及頸部支</td><td>助上提、下旋</td></tr><tr><td>斜方肌</td><td>肩峰、肩胛棘等；XI 運動相關</td><td>不同束功能不同，不能全寫只上提</td></tr><tr><td>棘上、棘下肌</td><td>兩窩；肩胛上神經</td><td>肩胛上切跡近端病變可影響兩肌</td></tr><tr><td>肩胛下肌</td><td>前窩；上、下肩胛下神經</td><td>屬於肌袖，與前鋸肌分開</td></tr><tr><td>肱二／三頭長頭</td><td>盂上／盂下結節</td><td>都叫長頭，但不是同一肌肉</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-1-the-pectoral-girdle\" target=\"_blank\" rel=\"noopener\">S61</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK546633/\" target=\"_blank\" rel=\"noopener\">S67</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK557880/\" target=\"_blank\" rel=\"noopener\">S64</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK459343/\" target=\"_blank\" rel=\"noopener\">S110</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK531457/\" target=\"_blank\" rel=\"noopener\">S111</a></span></p>"
  },
  "sources": [
   "S61",
   "S67",
   "S64",
   "S110",
   "S111"
  ]
 },
 {
  "chapter": "bones3",
  "topic": "clavicle-girdle",
  "section": {
   "id": "visual-plus-1",
   "title": "補強｜鎖骨上下表面：下方標記決定方向",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><figure class=\"enriched-figure\"><a href=\"assets/os-girdle.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：肩帶前後面及鎖骨上下表面的教材圖\"><img src=\"assets/os-girdle.webp\" alt=\"肩帶前後面及鎖骨上下表面的教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 8.3；CC BY-NC-SA 4.0。原圖保留，下方兩張圖比較鎖骨上、下表面；下方粗糙標記協助定上下。 <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-1-the-pectoral-girdle\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 點圖可開啟原尺寸。</figcaption></figure><p>S 形是一條線索，還需要胸骨端、肩峰端和下表面一起確認。單看曲線不能可靠判左右。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">英文標記／構造</th><th scope=\"col\">中文與位置</th><th scope=\"col\">辨認或解題理由</th></tr></thead><tbody><tr><td>Sternal end</td><td>胸骨端，內側較粗</td><td>接胸骨柄</td></tr><tr><td>Acromial end</td><td>肩峰端，外側較扁</td><td>接肩峰</td></tr><tr><td>Conoid tubercle</td><td>圓錐結節，外側下表面偏後</td><td>圓錐韌帶</td></tr><tr><td>Trapezoid line</td><td>斜方線，較外前</td><td>斜方韌帶</td></tr><tr><td>Subclavian groove</td><td>鎖骨下肌溝，下表面中段</td><td>鎖骨下肌，不是血管溝</td></tr><tr><td>Costoclavicular impression</td><td>內側下方肋鎖附著</td><td>與第一肋及軟骨相關</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-1-the-pectoral-girdle\" target=\"_blank\" rel=\"noopener\">S61</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK525990/\" target=\"_blank\" rel=\"noopener\">S63</a></span></p>"
  },
  "sources": [
   "S61",
   "S63"
  ]
 },
 {
  "chapter": "bones3",
  "topic": "clavicle-girdle",
  "section": {
   "id": "visual-plus-2",
   "title": "補強｜鎖骨的肌肉與韌帶：前後、內外分開",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><p>肌腱附著的實際範圍不是每處都一條線；先記標準部位，再對照標本。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較項目</th><th scope=\"col\">正確配對／範圍</th><th scope=\"col\">容易混淆的地方</th></tr></thead><tbody><tr><td>胸鎖乳突肌</td><td>內側上面相關</td><td>不同於下方鎖骨下肌</td></tr><tr><td>胸大肌</td><td>內側前面相關</td><td>是肌肉起點，不是喙鎖韌帶</td></tr><tr><td>三角肌</td><td>外側前面相關</td><td>與肩峰、棘起點接成一組</td></tr><tr><td>斜方肌</td><td>外側後面相關</td><td>是鎖骨／肩帶附著的止點部分</td></tr><tr><td>鎖骨下肌</td><td>下面鎖骨下肌溝</td><td>穩定與下壓相關</td></tr><tr><td>喙鎖韌帶</td><td>肩胛骨喙突 ↔ 鎖骨</td><td>跨兩骨，圓錐與斜方兩部分</td></tr><tr><td>喙肩韌帶</td><td>喙突 ↔ 肩峰</td><td>兩端同屬肩胛骨</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-1-the-pectoral-girdle\" target=\"_blank\" rel=\"noopener\">S61</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK525990/\" target=\"_blank\" rel=\"noopener\">S63</a></span></p>"
  },
  "sources": [
   "S61",
   "S63"
  ]
 },
 {
  "chapter": "bones3",
  "topic": "glenohumeral",
  "section": {
   "id": "visual-plus-1",
   "title": "補強｜盂肱關節先辨骨頭：頭與窩如何相配",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><figure class=\"enriched-figure\"><a href=\"assets/os-scapula.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：肩胛關節盂在外側的教材圖\"><img src=\"assets/os-scapula.webp\" alt=\"肩胛關節盂在外側的教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 8.4；CC BY-NC-SA 4.0。原圖保留，原圖只顯示骨性窩，不把盂唇與關節囊想成圖上的骨。 <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-1-the-pectoral-girdle\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 點圖可開啟原尺寸。</figcaption></figure><p>肩的活動由盂肱與肩帶一起完成。不要把所有抬手角度都算成肱骨頭在關節盂內單獨轉動。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">英文標記／構造</th><th scope=\"col\">中文與位置</th><th scope=\"col\">辨認或解題理由</th></tr></thead><tbody><tr><td>Glenoid cavity</td><td>肩胛關節盂，較淺</td><td>肱骨頭與其形成球窩關節</td></tr><tr><td>Glenoid labrum</td><td>盂唇，纖維軟骨</td><td>增加窩深度，並非另一塊骨</td></tr><tr><td>Joint capsule</td><td>關節囊</td><td>與韌帶增厚及動作範圍相關</td></tr><tr><td>Rotator cuff</td><td>肌袖四肌與肌腱</td><td>動態穩定，不含大圓肌</td></tr><tr><td>Long head of biceps</td><td>肱二頭長頭腱</td><td>起點在盂上與盂唇相關，不是喙突短頭</td></tr><tr><td>Scapulothoracic motion</td><td>肩胛與胸廓的功能性活動</td><td>不是另一個骨性球窩關節</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-1-the-pectoral-girdle\" target=\"_blank\" rel=\"noopener\">S61</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK546633/\" target=\"_blank\" rel=\"noopener\">S67</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK537018/\" target=\"_blank\" rel=\"noopener\">S80</a> · <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/9-6-anatomy-of-selected-synovial-joints\" target=\"_blank\" rel=\"noopener\">S48</a></span></p>"
  },
  "sources": [
   "S61",
   "S67",
   "S80",
   "S48"
  ]
 },
 {
  "chapter": "bones3",
  "topic": "glenohumeral",
  "section": {
   "id": "visual-plus-2",
   "title": "補強｜肌袖受傷與神經受損：配對但不互換",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><p>疼痛、運動無力與感覺改變需分開理解。單一動作不良不一定就能唯一定位到一條神經或一條肌腱。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較項目</th><th scope=\"col\">正確配對／範圍</th><th scope=\"col\">容易混淆的地方</th></tr></thead><tbody><tr><td>棘上肌</td><td>外展起始相關；肩胛上神經</td><td>三角肌可協同外展，但不屬肌袖</td></tr><tr><td>棘下肌</td><td>外旋；肩胛上神經</td><td>單獨遠端神經壓迫可偏此肌</td></tr><tr><td>小圓肌</td><td>外旋；腋神經</td><td>不是肩胛下神經</td></tr><tr><td>肩胛下肌</td><td>內旋；上／下肩胛下神經</td><td>不是用腋神經概括全部肌袖</td></tr><tr><td>肩胛上神經</td><td>運動到棘上、棘下，亦有關節感覺支</td><td>關節支配不等於只供肌肉</td></tr><tr><td>腋神經</td><td>三角肌、小圓肌及感覺相關</td><td>骨折外科頸、脫位要與骨性位置相接</td></tr><tr><td>靜態與動態</td><td>盂唇、囊韌帶＋肌袖等共同穩定</td><td>不能用「靠肌肉」否定韌帶</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-1-the-pectoral-girdle\" target=\"_blank\" rel=\"noopener\">S61</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK546633/\" target=\"_blank\" rel=\"noopener\">S67</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK537018/\" target=\"_blank\" rel=\"noopener\">S80</a> · <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/9-6-anatomy-of-selected-synovial-joints\" target=\"_blank\" rel=\"noopener\">S48</a></span></p>"
  },
  "sources": [
   "S61",
   "S67",
   "S80",
   "S48"
  ]
 },
 {
  "chapter": "bones3",
  "topic": "humerus",
  "section": {
   "id": "visual-plus-1",
   "title": "補強｜肱骨前後圖：把三個窩與三個層級串起來",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><figure class=\"enriched-figure\"><a href=\"assets/os-humerus.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：肱骨前後面及肘部骨性標記教材圖\"><img src=\"assets/os-humerus.webp\" alt=\"肱骨前後面及肘部骨性標記教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 8.5；CC BY-NC-SA 4.0。原圖保留，先定頭朝內、鷹嘴窩在後，再讀結節與遠端小頭／滑車。 <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-2-bones-of-the-upper-limb\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 點圖可開啟原尺寸。</figcaption></figure><p>圖中前、後兩面不是同一面再旋轉文字。對三窩題目，同時回答位置、哪一塊骨進入、哪個動作發生。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">英文標記／構造</th><th scope=\"col\">中文與位置</th><th scope=\"col\">辨認或解題理由</th></tr></thead><tbody><tr><td>Anatomical neck</td><td>解剖頸，頭邊緣</td><td>不同於外科頸</td></tr><tr><td>Surgical neck</td><td>外科頸，結節下方</td><td>腋神經與後旋肱動脈相關</td></tr><tr><td>Deltoid tuberosity</td><td>三角肌粗隆，前外側</td><td>三角肌止點</td></tr><tr><td>Radial groove</td><td>橈神經溝，後骨幹</td><td>橈神經、肱深動脈</td></tr><tr><td>Capitulum / trochlea</td><td>小頭外、滑車內</td><td>橈骨頭／尺骨滑車切跡</td></tr><tr><td>Radial / coronoid fossae</td><td>橈骨窩／冠突窩，前方</td><td>屈肘相關</td></tr><tr><td>Olecranon fossa</td><td>鷹嘴窩，後方</td><td>伸肘時鷹嘴進入</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-2-bones-of-the-upper-limb\" target=\"_blank\" rel=\"noopener\">S62</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK534821/?report=printable\" target=\"_blank\" rel=\"noopener\">S65</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK526056/?report=reader\" target=\"_blank\" rel=\"noopener\">S66</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK537324/\" target=\"_blank\" rel=\"noopener\">S106</a></span></p>"
  },
  "sources": [
   "S62",
   "S65",
   "S66",
   "S106"
  ]
 },
 {
  "chapter": "bones3",
  "topic": "humerus",
  "section": {
   "id": "visual-plus-2",
   "title": "補強｜四邊孔後面觀：外科頸與腋神經的空間理由",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><p>用周圍骨與肌圍出空間，才能解釋神經為何貼某個位置。此表是教材延伸，不表示影片完整講過四邊孔全部邊界。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較項目</th><th scope=\"col\">正確配對／範圍</th><th scope=\"col\">容易混淆的地方</th></tr></thead><tbody><tr><td>上界</td><td>小圓肌（後面觀）</td><td>前面觀可涉及肩胛下肌關係</td></tr><tr><td>下界</td><td>大圓肌</td><td>不是闊背肌直接作標準下界</td></tr><tr><td>內界</td><td>肱三頭肌長頭</td><td>不是肱二頭短頭</td></tr><tr><td>外界</td><td>肱骨外科頸</td><td>與腋神經繞近端相接</td></tr><tr><td>內容物</td><td>腋神經、後旋肱動脈</td><td>不是橈神經與肱深動脈那一組</td></tr><tr><td>腋／橈神經</td><td>近端外科頸／骨幹後方</td><td>兩者骨折層級不同</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-2-bones-of-the-upper-limb\" target=\"_blank\" rel=\"noopener\">S62</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK534821/?report=printable\" target=\"_blank\" rel=\"noopener\">S65</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK526056/?report=reader\" target=\"_blank\" rel=\"noopener\">S66</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK537324/\" target=\"_blank\" rel=\"noopener\">S106</a></span></p>"
  },
  "sources": [
   "S62",
   "S65",
   "S66",
   "S106"
  ]
 },
 {
  "chapter": "bones3",
  "topic": "forearm-elbow",
  "section": {
   "id": "visual-plus-1",
   "title": "補強｜前臂前後圖：頭、切跡與骨間膜",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><figure class=\"enriched-figure\"><a href=\"assets/os-forearm.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：橈骨尺骨前後面與近遠端關節教材圖\"><img src=\"assets/os-forearm.webp\" alt=\"橈骨尺骨前後面與近遠端關節教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 8.6；CC BY-NC-SA 4.0。原圖保留，橈側是拇指側，尺側是小指側；近端、遠端各找一個頭。 <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-2-bones-of-the-upper-limb\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 點圖可開啟原尺寸。</figcaption></figure><p>橈尺骨在解剖姿勢較平行，旋前時橈骨跨過尺骨前方。圖上的粗隆、頭與膜各有不同功能。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">英文標記／構造</th><th scope=\"col\">中文與位置</th><th scope=\"col\">辨認或解題理由</th></tr></thead><tbody><tr><td>Radial head</td><td>橈骨頭，近端</td><td>頂面接小頭；周緣接尺骨與環狀韌帶</td></tr><tr><td>Radial tuberosity</td><td>橈骨粗隆，近端內側相關</td><td>肱二頭肌止點</td></tr><tr><td>Ulnar trochlear notch</td><td>尺骨滑車切跡，近端</td><td>鷹嘴與冠突圍成</td></tr><tr><td>Ulnar head</td><td>尺骨頭，遠端</td><td>接橈骨尺骨切跡</td></tr><tr><td>Interosseous membrane</td><td>骨間膜，兩骨之間</td><td>穩定、附著與力傳遞相關</td></tr><tr><td>Distal radius</td><td>遠端橈骨較寬</td><td>接舟狀、月狀；重要腕部受力面</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-2-bones-of-the-upper-limb\" target=\"_blank\" rel=\"noopener\">S62</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK544512/\" target=\"_blank\" rel=\"noopener\">S68</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK532948/\" target=\"_blank\" rel=\"noopener\">S81</a> · <a href=\"https://pubmed.ncbi.nlm.nih.gov/9471063/\" target=\"_blank\" rel=\"noopener\">S112</a></span></p>"
  },
  "sources": [
   "S62",
   "S68",
   "S81",
   "S112"
  ]
 },
 {
  "chapter": "bones3",
  "topic": "forearm-elbow",
  "section": {
   "id": "visual-plus-2",
   "title": "補強｜把肌肉、韌帶、旋轉與受力分開",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><p>本表建立解剖與功能配對，不把研究中的某一負荷比例當成所有姿勢都固定。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較項目</th><th scope=\"col\">正確配對／範圍</th><th scope=\"col\">容易混淆的地方</th></tr></thead><tbody><tr><td>肱二頭肌</td><td>接橈骨粗隆；屈肘、旋後相關</td><td>不是止於肱骨的肌肉</td></tr><tr><td>肱肌</td><td>接尺骨粗隆與冠突相關；屈肘</td><td>不能只按名字「肱」猜止點</td></tr><tr><td>肱三頭肌</td><td>接尺骨鷹嘴；伸肘</td><td>與前側冠突分開</td></tr><tr><td>環狀韌帶</td><td>兩端接尺骨，包住橈骨頭</td><td>骨頭可在環中轉動</td></tr><tr><td>骨間膜力傳遞</td><td>可將橈側負荷分配到尺側</td><td>負荷比例隨姿勢與條件改變</td></tr><tr><td>腕部關節盤</td><td>遠端尺骨與腕骨間軟組織</td><td>不直接接腕骨≠不傳力</td></tr><tr><td>近／遠端橈尺</td><td>共同支援旋前旋後</td><td>不是隻有近端動，遠端完全固定</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-2-bones-of-the-upper-limb\" target=\"_blank\" rel=\"noopener\">S62</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK544512/\" target=\"_blank\" rel=\"noopener\">S68</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK532948/\" target=\"_blank\" rel=\"noopener\">S81</a> · <a href=\"https://pubmed.ncbi.nlm.nih.gov/9471063/\" target=\"_blank\" rel=\"noopener\">S112</a></span></p>"
  },
  "sources": [
   "S62",
   "S68",
   "S81",
   "S112"
  ]
 },
 {
  "chapter": "bones3",
  "topic": "carpus-hand",
  "section": {
   "id": "visual-plus-1",
   "title": "補強｜腕骨真實前後圖：補上格子圖的深度",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><figure class=\"enriched-figure\"><a href=\"assets/os-carpals.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：手腕骨前面與後面的教材圖\"><img src=\"assets/os-carpals.webp\" alt=\"手腕骨前面與後面的教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 8.7；CC BY-NC-SA 4.0。原圖保留，先找拇指；豆狀骨只在掌側明顯，不和其他近排骨平鋪。 <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-2-bones-of-the-upper-limb\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 點圖可開啟原尺寸。</figcaption></figure><p>原圖與本頁二排示意互相補充：一張看真實外形，一張看順序。手骨是立體弓形，不是八塊等寬的方格。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">英文標記／構造</th><th scope=\"col\">中文與位置</th><th scope=\"col\">辨認或解題理由</th></tr></thead><tbody><tr><td>Scaphoid / lunate</td><td>舟、月；近端橈側</td><td>直接接橈骨</td></tr><tr><td>Triquetrum</td><td>三角，近端尺側</td><td>與關節盤相關</td></tr><tr><td>Pisiform</td><td>豆狀，三角骨掌側</td><td>尺側屈腕肌腱內籽骨</td></tr><tr><td>Trapezium / trapezoid</td><td>大、小多角，遠排橈側</td><td>第一／第二掌骨相鄰關係</td></tr><tr><td>Capitate / hamate</td><td>頭、鉤狀，遠排較尺側</td><td>第三及第四／第五掌骨關係</td></tr><tr><td>Hook of hamate</td><td>鉤狀骨鉤，掌側</td><td>屈肌支持帶、尺側通道定位相關</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-2-bones-of-the-upper-limb\" target=\"_blank\" rel=\"noopener\">S62</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK545198/\" target=\"_blank\" rel=\"noopener\">S84</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK534814/\" target=\"_blank\" rel=\"noopener\">S88</a> · <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC3558235/\" target=\"_blank\" rel=\"noopener\">S90</a> · <a href=\"https://pubmed.ncbi.nlm.nih.gov/11280159/\" target=\"_blank\" rel=\"noopener\">S105</a></span></p>"
  },
  "sources": [
   "S62",
   "S84",
   "S88",
   "S90",
   "S105"
  ]
 },
 {
  "chapter": "bones3",
  "topic": "carpus-hand",
  "section": {
   "id": "visual-plus-2",
   "title": "補強｜腕隧道九腱：逐條數與旁邊的通道",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><p>同樣通過腕部的肌腱、神經不一定走同一隧道。先畫屈肌支持帶，再分它的淺側、深側與旁側。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較項目</th><th scope=\"col\">正確配對／範圍</th><th scope=\"col\">容易混淆的地方</th></tr></thead><tbody><tr><td>FDS 4 條</td><td>屈指淺肌到第 2–5 指</td><td>四條肌腱，不是四塊不同的淺屈肌</td></tr><tr><td>FDP 4 條</td><td>屈指深肌到第 2–5 指</td><td>與 FDS 相加為八</td></tr><tr><td>FPL 1 條</td><td>拇長屈肌</td><td>八＋一＝九</td></tr><tr><td>正中神經</td><td>腕隧道內主要神經</td><td>九是腱數，不含神經</td></tr><tr><td>FCR 橈側屈腕肌</td><td>有獨立纖維骨性通道</td><td>不加進標準腕隧道九腱</td></tr><tr><td>掌長肌腱</td><td>屈肌支持帶淺側相關</td><td>不是隧道內第十腱</td></tr><tr><td>尺神經／尺動脈</td><td>Guyon 管</td><td>與腕隧道分開</td></tr><tr><td>FCU 尺側屈腕肌</td><td>止於豆狀骨等關聯結構</td><td>不是和九條一起穿腕隧道</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-2-bones-of-the-upper-limb\" target=\"_blank\" rel=\"noopener\">S62</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK545198/\" target=\"_blank\" rel=\"noopener\">S84</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK534814/\" target=\"_blank\" rel=\"noopener\">S88</a> · <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC3558235/\" target=\"_blank\" rel=\"noopener\">S90</a> · <a href=\"https://pubmed.ncbi.nlm.nih.gov/11280159/\" target=\"_blank\" rel=\"noopener\">S105</a></span></p>"
  },
  "sources": [
   "S62",
   "S84",
   "S88",
   "S90",
   "S105"
  ]
 },
 {
  "chapter": "bones3",
  "topic": "carpus-hand",
  "section": {
   "id": "visual-plus-3",
   "title": "補強｜腕隧道橫切面：骨弓與支持帶",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><figure class=\"enriched-figure\"><a href=\"assets/os-carpal-tunnel.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：腕隧道骨弓、支持帶與肌腱神經橫切圖\"><img src=\"assets/os-carpal-tunnel.webp\" alt=\"腕隧道骨弓、支持帶與肌腱神經橫切圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 8.9；CC BY-NC-SA 4.0。原圖保留，此圖用來看「頂與底」，詳細九腱與 FCR 通道請回正文表格。 <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-2-bones-of-the-upper-limb\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 點圖可開啟原尺寸。</figcaption></figure><p>腕骨弓形成底與側壁，屈肌支持帶跨上方形成頂。圖中概括的 tendon 標記不等於已經逐條列出全部九條腱；請用前節計數表核對。</p><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-2-bones-of-the-upper-limb\" target=\"_blank\" rel=\"noopener\">S62</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK545198/\" target=\"_blank\" rel=\"noopener\">S84</a> · <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC3558235/\" target=\"_blank\" rel=\"noopener\">S90</a> · <a href=\"https://pubmed.ncbi.nlm.nih.gov/11280159/\" target=\"_blank\" rel=\"noopener\">S105</a></span></p>"
  },
  "sources": [
   "S62",
   "S84",
   "S90",
   "S105"
  ]
 },
 {
  "chapter": "bones3",
  "topic": "hip-landmarks",
  "section": {
   "id": "visual-plus-1",
   "title": "補強｜右髖骨內外面：髖臼與髂窩分開",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><figure class=\"enriched-figure\"><a href=\"assets/os-hip.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：右髖骨外側面與內側面的教材圖\"><img src=\"assets/os-hip.webp\" alt=\"右髖骨外側面與內側面的教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 8.13；CC BY-NC-SA 4.0。原圖保留，外側找髖臼，內側找髂窩與耳狀面，再找四髂棘。 <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-3-the-pelvic-girdle-and-pelvis\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 點圖可開啟原尺寸。</figcaption></figure><p>單看前方骨盆簡圖容易漏掉後緣切跡。內外面圖可補上髂窩、髖臼與耳狀面的不同方向。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">英文標記／構造</th><th scope=\"col\">中文與位置</th><th scope=\"col\">辨認或解題理由</th></tr></thead><tbody><tr><td>Acetabulum</td><td>髖臼，外側</td><td>接股骨頭</td></tr><tr><td>Iliac fossa</td><td>髂窩，內側上部</td><td>髂肌起點</td></tr><tr><td>Auricular surface</td><td>耳狀面，內側後方</td><td>接薦骨，構成薦髂關節</td></tr><tr><td>Arcuate line</td><td>弓狀線，內面</td><td>骨盆入口界線一部分</td></tr><tr><td>Obturator foramen</td><td>閉孔，恥坐骨圍成</td><td>大部分被閉孔膜覆蓋</td></tr><tr><td>Ischial spine / tuberosity</td><td>坐骨棘／坐骨結節</td><td>分隔切跡／較下方承重與附著</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-3-the-pelvic-girdle-and-pelvis\" target=\"_blank\" rel=\"noopener\">S72</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK519524/\" target=\"_blank\" rel=\"noopener\">S73</a> · <a href=\"https://humananatomy.host.dartmouth.edu/BHA/public_html/part_3/chapter_12.html\" target=\"_blank\" rel=\"noopener\">S77</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK526019/\" target=\"_blank\" rel=\"noopener\">S99</a></span></p>"
  },
  "sources": [
   "S72",
   "S73",
   "S77",
   "S99"
  ]
 },
 {
  "chapter": "bones3",
  "topic": "hip-landmarks",
  "section": {
   "id": "visual-plus-2",
   "title": "補強｜地標到附著：兩個髂前棘不能互換",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><p>標本題先定哪塊骨、哪個面、哪個突起，再選擇附著。相鄰兩點只差上／下，功能配對卻不同。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較項目</th><th scope=\"col\">正確配對／範圍</th><th scope=\"col\">容易混淆的地方</th></tr></thead><tbody><tr><td>ASIS</td><td>縫匠肌與腹股溝韌帶相關</td><td>肌肉與韌帶兩種用途</td></tr><tr><td>AIIS</td><td>股直肌直頭、髂股韌帶相關</td><td>與 ASIS 的上、下位置分開</td></tr><tr><td>恥骨結節</td><td>腹股溝韌帶內側端</td><td>不是恥骨梳整條線</td></tr><tr><td>恥骨梳</td><td>恥骨上支上緣相關</td><td>骨盆入口界線與肌肉附著題</td></tr><tr><td>坐骨棘</td><td>薦棘韌帶與陰部神經繞行地標</td><td>不是坐骨結節</td></tr><tr><td>坐骨結節</td><td>薦結節韌帶、多數腿後肌起點相關</td><td>不把所有腿後肌起點都概括在此</td></tr><tr><td>耳狀面</td><td>薦髂關節面</td><td>與 L4 觸診髂嵴不是同一地標</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-3-the-pelvic-girdle-and-pelvis\" target=\"_blank\" rel=\"noopener\">S72</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK519524/\" target=\"_blank\" rel=\"noopener\">S73</a> · <a href=\"https://humananatomy.host.dartmouth.edu/BHA/public_html/part_3/chapter_12.html\" target=\"_blank\" rel=\"noopener\">S77</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK526019/\" target=\"_blank\" rel=\"noopener\">S99</a></span></p>"
  },
  "sources": [
   "S72",
   "S73",
   "S77",
   "S99"
  ]
 },
 {
  "chapter": "bones3",
  "topic": "pelvic-connections",
  "section": {
   "id": "visual-plus-1",
   "title": "補強｜從切跡到孔：骨與韌帶共同成邊界",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><figure class=\"enriched-figure\"><a href=\"assets/os-hip.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：髖骨後緣大、小坐骨切跡與坐骨棘的教材圖\"><img src=\"assets/os-hip.webp\" alt=\"髖骨後緣大、小坐骨切跡與坐骨棘的教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 8.13；CC BY-NC-SA 4.0。原圖保留，這是單塊骨圖；加入薦棘、薦結節韌帶後才討論孔。 <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-3-the-pelvic-girdle-and-pelvis\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 點圖可開啟原尺寸。</figcaption></figure><p>切跡是骨頭上的凹口，孔需要加上韌帶和其他邊界；不能只憑一張乾燥髖骨圖就把大、小孔完整閉合。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">英文標記／構造</th><th scope=\"col\">中文與位置</th><th scope=\"col\">辨認或解題理由</th></tr></thead><tbody><tr><td>Greater sciatic notch</td><td>大坐骨切跡，棘上方</td><td>主要髂骨後緣相關</td></tr><tr><td>Lesser sciatic notch</td><td>小坐骨切跡，棘下方</td><td>坐骨部分相關</td></tr><tr><td>Sacrospinous ligament</td><td>薦棘；接坐骨棘</td><td>內側與薦尾骨相關</td></tr><tr><td>Sacrotuberous ligament</td><td>薦結節；接坐骨結節</td><td>與大、小孔邊界共同相關</td></tr><tr><td>Greater sciatic foramen</td><td>大坐骨孔</td><td>再由梨狀肌分上下</td></tr><tr><td>Lesser sciatic foramen</td><td>小坐骨孔</td><td>閉孔內肌腱、陰部神經等通過</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-3-the-pelvic-girdle-and-pelvis\" target=\"_blank\" rel=\"noopener\">S72</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK493215/\" target=\"_blank\" rel=\"noopener\">S74</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK554736/\" target=\"_blank\" rel=\"noopener\">S75</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK482258/\" target=\"_blank\" rel=\"noopener\">S100</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK507801/\" target=\"_blank\" rel=\"noopener\">S108</a></span></p>"
  },
  "sources": [
   "S72",
   "S74",
   "S75",
   "S100",
   "S108"
  ]
 },
 {
  "chapter": "bones3",
  "topic": "pelvic-connections",
  "section": {
   "id": "visual-plus-2",
   "title": "補強｜骨盆穩定與通路：力學、關節、肌肉分開",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><p>片尾談重力與骨盆傾動時，基底與尖部的相對方向比一個「翹」字更精確。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較項目</th><th scope=\"col\">正確配對／範圍</th><th scope=\"col\">容易混淆的地方</th></tr></thead><tbody><tr><td>薦髂關節</td><td>前方滑液相關，後方強韌帶聯結</td><td>不是全部完全融合的骨縫</td></tr><tr><td>恥骨聯合</td><td>纖維軟骨盤與韌帶，次級軟骨連接</td><td>與薦髂關節的構造不同</td></tr><tr><td>薦骨傾動 nutation</td><td>薦骨基底向前下、尖部相對向後上</td><td>必須說基底或尖部，不能只說整塊向上</td></tr><tr><td>薦棘、薦結節等</td><td>協助限制傾動與穩定</td><td>穩定性由多組韌帶、關節與肌肉共同貢獻</td></tr><tr><td>梨狀肌</td><td>通大坐骨孔</td><td>閉孔內肌腱通常通小孔</td></tr><tr><td>尾骨肌</td><td>坐骨棘到薦尾骨，骨盆膈後部</td><td>不穿小孔進臀部</td></tr><tr><td>陰部神經</td><td>大孔出、棘旁轉、小孔入會陰</td><td>不是單向穿閉孔管</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-3-the-pelvic-girdle-and-pelvis\" target=\"_blank\" rel=\"noopener\">S72</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK493215/\" target=\"_blank\" rel=\"noopener\">S74</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK554736/\" target=\"_blank\" rel=\"noopener\">S75</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK482258/\" target=\"_blank\" rel=\"noopener\">S100</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK507801/\" target=\"_blank\" rel=\"noopener\">S108</a></span></p>"
  },
  "sources": [
   "S72",
   "S74",
   "S75",
   "S100",
   "S108"
  ]
 },
 {
  "chapter": "bones",
  "topic": "spine",
  "section": {
   "id": "visual-plus-3",
   "title": "補強｜同一間隙的兩種突出：離開根 vs 通過根",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><figure class=\"enriched-figure\"><a href=\"assets/visual-roots.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：L4–L5 旁中央與孔內／遠外側突出影響不同神經根的原創圖\"><img src=\"assets/visual-roots.svg\" alt=\"L4–L5 旁中央與孔內／遠外側突出影響不同神經根的原創圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>本站原創概念圖；非等比例。紅點是突出位置，線表示根路線；不是真實橫斷影像。 點圖可開啟原尺寸。</figcaption></figure><p>在 L4–L5 間隙，L4 正從同一椎間孔離開，L5 還在椎管內往下走。因此旁中央突出較常影響 L5，孔內／遠外側突出可影響 L4；較大或中央病變可以影響不只一根，不能把兩圖推成所有病人的唯一模式。</p><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK560878/\" target=\"_blank\" rel=\"noopener\">S18</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK557616/\" target=\"_blank\" rel=\"noopener\">S12</a></span></p>"
  },
  "sources": [
   "S18",
   "S12"
  ]
 },
 {
  "chapter": "bones2",
  "topic": "bones2-atlas-roots",
  "section": {
   "id": "visual-plus-3",
   "title": "補強｜同一間隙的兩種突出：離開根 vs 通過根",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><figure class=\"enriched-figure\"><a href=\"assets/visual-roots.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：L4–L5 旁中央與孔內／遠外側突出影響不同神經根的原創圖\"><img src=\"assets/visual-roots.svg\" alt=\"L4–L5 旁中央與孔內／遠外側突出影響不同神經根的原創圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>本站原創概念圖；非等比例。紅點是突出位置，線表示根路線；不是真實橫斷影像。 點圖可開啟原尺寸。</figcaption></figure><p>在 L4–L5 間隙，L4 正從同一椎間孔離開，L5 還在椎管內往下走。因此旁中央突出較常影響 L5，孔內／遠外側突出可影響 L4；較大或中央病變可以影響不只一根，不能把兩圖推成所有病人的唯一模式。</p><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK560878/\" target=\"_blank\" rel=\"noopener\">S18</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK557616/\" target=\"_blank\" rel=\"noopener\">S12</a></span></p>"
  },
  "sources": [
   "S18",
   "S12"
  ]
 },
 {
  "chapter": "bones",
  "topic": "video-notes",
  "section": {
   "id": "visual-plus-1",
   "title": "補強｜本片圖表路線與第二輪複習",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><figure class=\"enriched-figure\"><a href=\"assets/os-skull-base.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：本章主要骨性結構教材圖\"><img src=\"assets/os-skull-base.webp\" alt=\"本章主要骨性結構教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 7.8；CC BY-NC-SA 4.0。原圖保留，此圖作主題導覽，不更動原影片時間順序。 <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-2-the-skull\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 點圖可開啟原尺寸。</figcaption></figure><p>新增圖表屬教材延伸，原本全片改寫筆記與時間索引保留。先按影片順序讀，再以本表選主題頁查圖；當名詞相近時，先確定骨頭、面和方向。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">複習區域</th><th scope=\"col\">詳細子頁</th><th scope=\"col\">第二輪要補足</th></tr></thead><tbody><tr><td>解剖姿勢與切面</td><td><a href=\"#/subject/anatomy/chapter/bones/topic/orientation\">orientation</a></td><td>先建立方向，再讀標本</td></tr><tr><td>骨形與骨性標記</td><td><a href=\"#/subject/anatomy/chapter/bones/topic/bone-basics\">bone-basics</a></td><td>把孔、管、窩、突分開</td></tr><tr><td>脊柱與體表高度</td><td><a href=\"#/subject/anatomy/chapter/bones/topic/spine\">spine</a></td><td>用椎體、神經節段兩套座標</td></tr><tr><td>顱骨與顱窩</td><td><a href=\"#/subject/anatomy/chapter/bones/topic/fossae\">fossae</a></td><td>先骨緣分區再背孔</td></tr><tr><td>孔洞與眼鼻</td><td><a href=\"#/subject/anatomy/chapter/bones/topic/foramina\">foramina</a></td><td>通道與內容物建立雙向配對</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-2-the-skull\" target=\"_blank\" rel=\"noopener\">S5</a> · <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-3-the-vertebral-column\" target=\"_blank\" rel=\"noopener\">S6</a> · <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-2-bones-of-the-upper-limb\" target=\"_blank\" rel=\"noopener\">S62</a></span></p>"
  },
  "sources": [
   "S5",
   "S6",
   "S62"
  ]
 },
 {
  "chapter": "bones2",
  "topic": "bones2-video-notes",
  "section": {
   "id": "visual-plus-1",
   "title": "補強｜本片圖表路線與第二輪複習",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><figure class=\"enriched-figure\"><a href=\"assets/os-vertebra.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：本章主要骨性結構教材圖\"><img src=\"assets/os-vertebra.webp\" alt=\"本章主要骨性結構教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 7.23；CC BY-NC-SA 4.0。原圖保留，此圖作主題導覽，不更動原影片時間順序。 <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-3-the-vertebral-column\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 點圖可開啟原尺寸。</figcaption></figure><p>新增圖表屬教材延伸，原本全片改寫筆記與時間索引保留。先按影片順序讀，再以本表選主題頁查圖；當名詞相近時，先確定骨頭、面和方向。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">複習區域</th><th scope=\"col\">詳細子頁</th><th scope=\"col\">第二輪要補足</th></tr></thead><tbody><tr><td>顏面與顎</td><td><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-palate-jaw\">bones2-palate-jaw</a></td><td>內外面、骨軟骨與胚胎來源</td></tr><tr><td>翼顎窩</td><td><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-ppf\">bones2-ppf</a></td><td>先畫交通再分纖維種類</td></tr><tr><td>椎骨與肋關節</td><td><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-rib-joints\">bones2-rib-joints</a></td><td>頭、結節是兩組後端關節</td></tr><tr><td>椎間盤與膜腔</td><td><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-disc-lp\">bones2-disc-lp</a></td><td>把骨、韌帶、膜、腔分層</td></tr><tr><td>寰樞與神經根</td><td><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-atlas-roots\">bones2-atlas-roots</a></td><td>骨數、神經數、突出方向</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-2-the-skull\" target=\"_blank\" rel=\"noopener\">S5</a> · <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-3-the-vertebral-column\" target=\"_blank\" rel=\"noopener\">S6</a> · <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-2-bones-of-the-upper-limb\" target=\"_blank\" rel=\"noopener\">S62</a></span></p>"
  },
  "sources": [
   "S5",
   "S6",
   "S62"
  ]
 },
 {
  "chapter": "bones3",
  "topic": "bones3-video-notes",
  "section": {
   "id": "visual-plus-1",
   "title": "補強｜本片圖表路線與第二輪複習",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><figure class=\"enriched-figure\"><a href=\"assets/os-humerus.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：本章主要骨性結構教材圖\"><img src=\"assets/os-humerus.webp\" alt=\"本章主要骨性結構教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 8.5；CC BY-NC-SA 4.0。原圖保留，此圖作主題導覽，不更動原影片時間順序。 <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-2-bones-of-the-upper-limb\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 點圖可開啟原尺寸。</figcaption></figure><p>新增圖表屬教材延伸，原本全片改寫筆記與時間索引保留。先按影片順序讀，再以本表選主題頁查圖；當名詞相近時，先確定骨頭、面和方向。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">複習區域</th><th scope=\"col\">詳細子頁</th><th scope=\"col\">第二輪要補足</th></tr></thead><tbody><tr><td>肋骨胸壁</td><td><a href=\"#/subject/anatomy/chapter/bones3/topic/ribs-wall\">ribs-wall</a></td><td>前後、上下與深淺分開</td></tr><tr><td>肩帶肩關節</td><td><a href=\"#/subject/anatomy/chapter/bones3/topic/glenohumeral\">glenohumeral</a></td><td>骨連接與肌袖穩定</td></tr><tr><td>肱骨</td><td><a href=\"#/subject/anatomy/chapter/bones3/topic/humerus\">humerus</a></td><td>結節／唇／溝底分開</td></tr><tr><td>前臂與手</td><td><a href=\"#/subject/anatomy/chapter/bones3/topic/carpus-hand\">carpus-hand</a></td><td>骨性配對與隧道內容</td></tr><tr><td>髖骨骨盆</td><td><a href=\"#/subject/anatomy/chapter/bones3/topic/pelvic-connections\">pelvic-connections</a></td><td>切跡、韌帶、孔與路線</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-2-the-skull\" target=\"_blank\" rel=\"noopener\">S5</a> · <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-3-the-vertebral-column\" target=\"_blank\" rel=\"noopener\">S6</a> · <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-2-bones-of-the-upper-limb\" target=\"_blank\" rel=\"noopener\">S62</a></span></p>"
  },
  "sources": [
   "S5",
   "S6",
   "S62"
  ]
 },
 {
  "chapter": "bones3",
  "topic": "rapid-review",
  "section": {
   "id": "visual-plus-1",
   "title": "補強｜考前常混構造：先判類型再配對",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><figure class=\"enriched-figure\"><a href=\"assets/os-carpals.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：腕骨掌背面教材圖\"><img src=\"assets/os-carpals.webp\" alt=\"腕骨掌背面教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 8.7；CC BY-NC-SA 4.0。原圖保留，遮住標籤先判拇指側與兩排，再開原圖核對。 <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-2-bones-of-the-upper-limb\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 點圖可開啟原尺寸。</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">看到的名詞</th><th scope=\"col\">構造類型與配對</th><th scope=\"col\">最容易錯在哪裡</th></tr></thead><tbody><tr><td>肱骨頭／小頭</td><td>近端肩關節／遠端肘關節</td><td>兩個 head 不在同一端</td></tr><tr><td>橈骨頭／尺骨頭</td><td>近端／遠端</td><td>兩骨的頭端互換</td></tr><tr><td>結節／嵴／溝底</td><td>肌袖與胸大、大圓、闊背分部位</td><td>通過溝的長頭腱不是溝底止點</td></tr><tr><td>豆狀／三角骨</td><td>掌側深度關係</td><td>不是同一平面四格</td></tr><tr><td>ASIS／AIIS</td><td>腹股溝／髂股韌帶</td><td>上棘、下棘反配</td></tr><tr><td>閉孔管／小坐骨孔</td><td>閉孔神經／閉孔內肌腱</td><td>名字帶閉孔不代表走同一路</td></tr><tr><td>切跡／孔</td><td>純骨性凹口／加韌帶邊界後通道</td><td>不可直接當同一構造</td></tr></tbody></table></div><p>這是跨頁索引，不另外宣稱為官方考題。詳細附著、變異與臨床配對請回各主題頁。</p><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-2-bones-of-the-upper-limb\" target=\"_blank\" rel=\"noopener\">S62</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK534821/?report=printable\" target=\"_blank\" rel=\"noopener\">S65</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK493215/\" target=\"_blank\" rel=\"noopener\">S74</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK554736/\" target=\"_blank\" rel=\"noopener\">S75</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK526019/\" target=\"_blank\" rel=\"noopener\">S99</a></span></p>"
  },
  "sources": [
   "S62",
   "S65",
   "S74",
   "S75",
   "S99"
  ]
 },
 {
  "chapter": "bones",
  "topic": "exam-sources",
  "section": {
   "id": "visual-plus-1",
   "title": "補強｜新增圖片索引、中文導讀與授權",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><p>2026-10-12 逐頁補強：原有課堂筆記保留，新增圖像、比較表與教材說明。OpenStax 的原圖依 Anatomy and Physiology 2e 開放授權使用；Access for free at OpenStax。下列連結可打開原尺寸圖片，圖片與表格可隨本頁一起列印。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">圖像</th><th scope=\"col\">來源／授權</th><th scope=\"col\">使用方式</th></tr></thead><tbody><tr><td><a href=\"assets/os-planes.webp\" target=\"_blank\" rel=\"noopener\">planes · Figure 1.14</a></td><td>OpenStax／CC BY-NC-SA 4.0</td><td>原圖保留；中文導讀另寫，不覆蓋原圖標籤</td></tr><tr><td><a href=\"assets/os-long-bone.webp\" target=\"_blank\" rel=\"noopener\">long-bone · Figure 6.7</a></td><td>OpenStax／CC BY-NC-SA 4.0</td><td>原圖保留；中文導讀另寫，不覆蓋原圖標籤</td></tr><tr><td><a href=\"assets/os-skull-front.webp\" target=\"_blank\" rel=\"noopener\">skull-front · Figure 7.4</a></td><td>OpenStax／CC BY-NC-SA 4.0</td><td>原圖保留；中文導讀另寫，不覆蓋原圖標籤</td></tr><tr><td><a href=\"assets/os-fossae.webp\" target=\"_blank\" rel=\"noopener\">fossae · Figure 7.6</a></td><td>OpenStax／CC BY-NC-SA 4.0</td><td>原圖保留；中文導讀另寫，不覆蓋原圖標籤</td></tr><tr><td><a href=\"assets/os-skull-base.webp\" target=\"_blank\" rel=\"noopener\">skull-base · Figure 7.8</a></td><td>OpenStax／CC BY-NC-SA 4.0</td><td>原圖保留；中文導讀另寫，不覆蓋原圖標籤</td></tr><tr><td><a href=\"assets/os-nasal.webp\" target=\"_blank\" rel=\"noopener\">nasal · Figure 7.17</a></td><td>OpenStax／CC BY-NC-SA 4.0</td><td>原圖保留；中文導讀另寫，不覆蓋原圖標籤</td></tr><tr><td><a href=\"assets/os-thorax.webp\" target=\"_blank\" rel=\"noopener\">thorax · Figure 7.32</a></td><td>OpenStax／CC BY-NC-SA 4.0</td><td>原圖保留；中文導讀另寫，不覆蓋原圖標籤</td></tr><tr><td><a href=\"assets/os-vertebra.webp\" target=\"_blank\" rel=\"noopener\">vertebra · Figure 7.23</a></td><td>OpenStax／CC BY-NC-SA 4.0</td><td>原圖保留；中文導讀另寫，不覆蓋原圖標籤</td></tr><tr><td><a href=\"assets/visual-roots.svg\" target=\"_blank\" rel=\"noopener\">visual-roots</a></td><td>本站原創示意</td><td>非等比例；醫學依據見相關主題頁</td></tr></tbody></table></div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">新增資料／連結</th><th scope=\"col\">本章補充用途</th></tr></thead><tbody><tr><td><a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/6-3-bone-structure\" target=\"_blank\" rel=\"noopener\">S103 · OpenStax：6.3 Bone Structure</a></td><td>長骨巨觀構造、骨膜、骨內膜與骨細胞。</td></tr><tr><td><a href=\"https://pubmed.ncbi.nlm.nih.gov/31392880/\" target=\"_blank\" rel=\"noopener\">S107 · Extraoral anatomy in CBCT: Nasoethmoidal region</a></td><td>中鼻道、上鼻道、蝶篩隱窩的引流分區。</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/preface\" target=\"_blank\" rel=\"noopener\">S17</a> · <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/6-3-bone-structure\" target=\"_blank\" rel=\"noopener\">S103</a> · <a href=\"https://pubmed.ncbi.nlm.nih.gov/31392880/\" target=\"_blank\" rel=\"noopener\">S107</a></span></p><p><a href=\"assets/image-sources.json\" target=\"_blank\" rel=\"noopener\">完整圖片來源與授權清單</a></p>"
  },
  "sources": [
   "S17",
   "S103",
   "S107"
  ]
 },
 {
  "chapter": "bones2",
  "topic": "exam-sources",
  "section": {
   "id": "visual-plus-1",
   "title": "補強｜新增圖片索引、中文導讀與授權",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><p>2026-10-12 逐頁補強：原有課堂筆記保留，新增圖像、比較表與教材說明。OpenStax 的原圖依 Anatomy and Physiology 2e 開放授權使用；Access for free at OpenStax。下列連結可打開原尺寸圖片，圖片與表格可隨本頁一起列印。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">圖像</th><th scope=\"col\">來源／授權</th><th scope=\"col\">使用方式</th></tr></thead><tbody><tr><td><a href=\"assets/os-nasal.webp\" target=\"_blank\" rel=\"noopener\">nasal · Figure 7.17</a></td><td>OpenStax／CC BY-NC-SA 4.0</td><td>原圖保留；中文導讀另寫，不覆蓋原圖標籤</td></tr><tr><td><a href=\"assets/os-mandible.webp\" target=\"_blank\" rel=\"noopener\">mandible · Figure 7.15</a></td><td>OpenStax／CC BY-NC-SA 4.0</td><td>原圖保留；中文導讀另寫，不覆蓋原圖標籤</td></tr><tr><td><a href=\"assets/os-vertebra.webp\" target=\"_blank\" rel=\"noopener\">vertebra · Figure 7.23</a></td><td>OpenStax／CC BY-NC-SA 4.0</td><td>原圖保留；中文導讀另寫，不覆蓋原圖標籤</td></tr><tr><td><a href=\"assets/os-rib-joint.webp\" target=\"_blank\" rel=\"noopener\">rib-joint · Figure 7.27</a></td><td>OpenStax／CC BY-NC-SA 4.0</td><td>原圖保留；中文導讀另寫，不覆蓋原圖標籤</td></tr><tr><td><a href=\"assets/os-disc.webp\" target=\"_blank\" rel=\"noopener\">disc · Figure 7.24</a></td><td>OpenStax／CC BY-NC-SA 4.0</td><td>原圖保留；中文導讀另寫，不覆蓋原圖標籤</td></tr><tr><td><a href=\"assets/os-cervical.webp\" target=\"_blank\" rel=\"noopener\">cervical · Figure 7.25</a></td><td>OpenStax／CC BY-NC-SA 4.0</td><td>原圖保留；中文導讀另寫，不覆蓋原圖標籤</td></tr><tr><td><a href=\"assets/visual-ppf.svg\" target=\"_blank\" rel=\"noopener\">visual-ppf</a></td><td>本站原創示意</td><td>非等比例；醫學依據見相關主題頁</td></tr><tr><td><a href=\"assets/visual-roots.svg\" target=\"_blank\" rel=\"noopener\">visual-roots</a></td><td>本站原創示意</td><td>非等比例；醫學依據見相關主題頁</td></tr></tbody></table></div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">新增資料／連結</th><th scope=\"col\">本章補充用途</th></tr></thead><tbody><tr><td><a href=\"https://pubmed.ncbi.nlm.nih.gov/31392880/\" target=\"_blank\" rel=\"noopener\">S107 · Extraoral anatomy in CBCT: Nasoethmoidal region</a></td><td>中鼻道、上鼻道、蝶篩隱窩的引流分區。</td></tr><tr><td><a href=\"https://www.ncbi.nlm.nih.gov/books/NBK541027/\" target=\"_blank\" rel=\"noopener\">S104 · NCBI：Anatomy, Head and Neck, Mastication Muscles</a></td><td>咀嚼肌的骨性起止點與 V3 支配。</td></tr><tr><td><a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK563271/\" target=\"_blank\" rel=\"noopener\">S109 · NCBI：Anatomy, Head and Neck: Atlantoaxial Joint</a></td><td>寰樞關節的旋轉與橫韌帶。</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/preface\" target=\"_blank\" rel=\"noopener\">S17</a> · <a href=\"https://pubmed.ncbi.nlm.nih.gov/31392880/\" target=\"_blank\" rel=\"noopener\">S107</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK541027/\" target=\"_blank\" rel=\"noopener\">S104</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK563271/\" target=\"_blank\" rel=\"noopener\">S109</a></span></p><p><a href=\"assets/image-sources.json\" target=\"_blank\" rel=\"noopener\">完整圖片來源與授權清單</a></p>"
  },
  "sources": [
   "S17",
   "S107",
   "S104",
   "S109"
  ]
 },
 {
  "chapter": "bones3",
  "topic": "exam-sources",
  "section": {
   "id": "visual-plus-1",
   "title": "補強｜新增圖片索引、中文導讀與授權",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><p>2026-10-12 逐頁補強：原有課堂筆記保留，新增圖像、比較表與教材說明。OpenStax 的原圖依 Anatomy and Physiology 2e 開放授權使用；Access for free at OpenStax。下列連結可打開原尺寸圖片，圖片與表格可隨本頁一起列印。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">圖像</th><th scope=\"col\">來源／授權</th><th scope=\"col\">使用方式</th></tr></thead><tbody><tr><td><a href=\"assets/os-thorax.webp\" target=\"_blank\" rel=\"noopener\">thorax · Figure 7.32</a></td><td>OpenStax／CC BY-NC-SA 4.0</td><td>原圖保留；中文導讀另寫，不覆蓋原圖標籤</td></tr><tr><td><a href=\"assets/os-scapula.webp\" target=\"_blank\" rel=\"noopener\">scapula · Figure 8.4</a></td><td>OpenStax／CC BY-NC-SA 4.0</td><td>原圖保留；中文導讀另寫，不覆蓋原圖標籤</td></tr><tr><td><a href=\"assets/os-girdle.webp\" target=\"_blank\" rel=\"noopener\">girdle · Figure 8.3</a></td><td>OpenStax／CC BY-NC-SA 4.0</td><td>原圖保留；中文導讀另寫，不覆蓋原圖標籤</td></tr><tr><td><a href=\"assets/os-humerus.webp\" target=\"_blank\" rel=\"noopener\">humerus · Figure 8.5</a></td><td>OpenStax／CC BY-NC-SA 4.0</td><td>原圖保留；中文導讀另寫，不覆蓋原圖標籤</td></tr><tr><td><a href=\"assets/os-forearm.webp\" target=\"_blank\" rel=\"noopener\">forearm · Figure 8.6</a></td><td>OpenStax／CC BY-NC-SA 4.0</td><td>原圖保留；中文導讀另寫，不覆蓋原圖標籤</td></tr><tr><td><a href=\"assets/os-carpals.webp\" target=\"_blank\" rel=\"noopener\">carpals · Figure 8.7</a></td><td>OpenStax／CC BY-NC-SA 4.0</td><td>原圖保留；中文導讀另寫，不覆蓋原圖標籤</td></tr><tr><td><a href=\"assets/os-carpal-tunnel.webp\" target=\"_blank\" rel=\"noopener\">carpal-tunnel · Figure 8.9</a></td><td>OpenStax／CC BY-NC-SA 4.0</td><td>原圖保留；中文導讀另寫，不覆蓋原圖標籤</td></tr><tr><td><a href=\"assets/os-hip.webp\" target=\"_blank\" rel=\"noopener\">hip · Figure 8.13</a></td><td>OpenStax／CC BY-NC-SA 4.0</td><td>原圖保留；中文導讀另寫，不覆蓋原圖標籤</td></tr></tbody></table></div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">新增資料／連結</th><th scope=\"col\">本章補充用途</th></tr></thead><tbody><tr><td><a href=\"https://www.ncbi.nlm.nih.gov/books/NBK459343/\" target=\"_blank\" rel=\"noopener\">S110 · NCBI：Anatomy, Shoulder and Upper Limb, Dorsal Scapular Nerve</a></td><td>菱形肌、提肩胛肌與肩胛背神經。</td></tr><tr><td><a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK531457/\" target=\"_blank\" rel=\"noopener\">S111 · NCBI：Anatomy, Thorax, Serratus Anterior Muscles</a></td><td>前鋸肌附著與長胸神經。</td></tr><tr><td><a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK537324/\" target=\"_blank\" rel=\"noopener\">S106 · NCBI：Anatomy, Shoulder and Upper Limb, Arm Quadrangular Space</a></td><td>四邊孔的後面觀邊界與腋神經、後旋肱動脈。</td></tr><tr><td><a href=\"https://pubmed.ncbi.nlm.nih.gov/9471063/\" target=\"_blank\" rel=\"noopener\">S112 · The interosseous membrane affects load distribution in the forearm</a></td><td>骨間膜協助前臂力傳遞；姿勢與條件改變比例，不固定成每人一個百分比。</td></tr><tr><td><a href=\"https://pubmed.ncbi.nlm.nih.gov/11280159/\" target=\"_blank\" rel=\"noopener\">S105 · Anatomy of the flexor retinaculum of the wrist and the flexor carpi radialis tunnel</a></td><td>橈側屈腕肌有獨立通道，與腕隧道九條肌腱分開。</td></tr><tr><td><a href=\"https://www.ncbi.nlm.nih.gov/books/NBK507801/\" target=\"_blank\" rel=\"noopener\">S108 · NCBI：Anatomy, Abdomen and Pelvis, Sacroiliac Joint</a></td><td>薦髂關節、薦骨傾動與骨盆穩定。</td></tr></tbody></table></div><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/preface\" target=\"_blank\" rel=\"noopener\">S17</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK459343/\" target=\"_blank\" rel=\"noopener\">S110</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK531457/\" target=\"_blank\" rel=\"noopener\">S111</a> · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK537324/\" target=\"_blank\" rel=\"noopener\">S106</a> · <a href=\"https://pubmed.ncbi.nlm.nih.gov/9471063/\" target=\"_blank\" rel=\"noopener\">S112</a> · <a href=\"https://pubmed.ncbi.nlm.nih.gov/11280159/\" target=\"_blank\" rel=\"noopener\">S105</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK507801/\" target=\"_blank\" rel=\"noopener\">S108</a></span></p><p><a href=\"assets/image-sources.json\" target=\"_blank\" rel=\"noopener\">完整圖片來源與授權清單</a></p>"
  },
  "sources": [
   "S17",
   "S110",
   "S111",
   "S106",
   "S112",
   "S105",
   "S108"
  ]
 },
 {
  "chapter": "bones2",
  "topic": "bones2-palate-jaw",
  "section": {
   "id": "visual-plus-3",
   "title": "補強｜上頜骨四突：從同一塊骨連到四個區域",
   "html": "<div class=\"enrichment-label\">教材延伸 · 圖表導讀</div><figure class=\"enriched-figure\"><a href=\"assets/os-maxilla.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：上頜骨前內側相關標記教材圖\"><img src=\"assets/os-maxilla.webp\" alt=\"上頜骨前內側相關標記教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 7.14；CC BY-NC-SA 4.0。原圖保留，找眶下孔、齒槽突與顎突，再對照四突表。 <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-2-the-skull\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 點圖可開啟原尺寸。</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">上頜骨突</th><th scope=\"col\">連接／形成區域</th><th scope=\"col\">辨認線索</th></tr></thead><tbody><tr><td>額突 frontal</td><td>向額骨與鼻區</td><td>鼻側上伸</td></tr><tr><td>顴突 zygomatic</td><td>向顴骨</td><td>外側頰區</td></tr><tr><td>齒槽突 alveolar</td><td>容納上牙齒槽</td><td>下緣</td></tr><tr><td>顎突 palatine</td><td>硬顎前部</td><td>向內側形成水平板</td></tr></tbody></table></div><p>顎突是上頜骨的一部分；顎骨則是另一對獨立骨。下視圖硬顎前後骨來源與口腔前後區域不同，不把名稱都帶 palat- 的結構當成一塊骨。</p><p><span class=\"enrichment-sources\">本節核對：<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-2-the-skull\" target=\"_blank\" rel=\"noopener\">S5</a> · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK557817/\" target=\"_blank\" rel=\"noopener\">S39</a></span></p>"
  },
  "sources": [
   "S5",
   "S39"
  ]
 }
];
const enrichedChapterTopics={bones:anatomyTopics,bones2:bones2Topics,bones3:bones3Topics};
for(const item of studyEnrichments){const topic=enrichedChapterTopics[item.chapter].find(t=>t.id===item.topic);if(!topic)throw new Error("Unknown enrichment topic: "+item.topic);topic.sections.push(item.section);topic.sources=[...new Set([...topic.sources,...item.sources])];}
