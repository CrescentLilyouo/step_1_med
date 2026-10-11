/* Whole-audio ASR and 216 sampled board frames; original paraphrases with separately marked textbook extensions. */
const bones4VideoUrl="https://www.youtube.com/playlist?list=PLoKlbKOZ9XPpsITjehrHKiYvhih_3OJOz";
const bones4Sources=[
 {
  "id": "S113",
  "title": "OpenStax：8.4 Bones of the Lower Limb",
  "url": "https://openstax.org/books/anatomy-and-physiology-2e/pages/8-4-bones-of-the-lower-limb",
  "note": "股骨、髕骨、脛腓骨、七跗骨與足骨圖片。",
  "type": "開放教材"
 },
 {
  "id": "S114",
  "title": "NCBI：Anatomy, Abdomen and Pelvis, Pudendal Nerve",
  "url": "https://www.ncbi.nlm.nih.gov/sites/books/NBK554736/",
  "note": "陰部神經 S2–S4、坐骨棘、大小坐骨孔與陰部管。",
  "type": "解剖教材"
 },
 {
  "id": "S115",
  "title": "NCBI：Anatomy, Bony Pelvis and Lower Limb, Hip Joint",
  "url": "https://www.ncbi.nlm.nih.gov/sites/books/NBK470555/",
  "note": "髖臼、關節唇、三條囊韌帶與股骨頭韌帶。",
  "type": "解剖教材"
 },
 {
  "id": "S116",
  "title": "NCBI：Anatomy, Abdomen and Pelvis: Hip Arteries",
  "url": "https://www.ncbi.nlm.nih.gov/sites/books/NBK542174/",
  "note": "髖部血管來源與臀動脈、旋股動脈的交通。",
  "type": "解剖教材"
 },
 {
  "id": "S117",
  "title": "NCBI：Femoral Neck Fractures",
  "url": "https://www.ncbi.nlm.nih.gov/sites/books/NBK537347/",
  "note": "股骨頸囊內骨折與股骨頭血供風險；只補充解剖關係。",
  "type": "解剖教材"
 },
 {
  "id": "S118",
  "title": "NCBI：Anatomy, Bony Pelvis and Lower Limb, Knee Anterior Cruciate Ligament",
  "url": "https://www.ncbi.nlm.nih.gov/sites/books/NBK559233/",
  "note": "ACL 的脛骨前方附著、股骨外髁內面與限制前移。",
  "type": "解剖教材"
 },
 {
  "id": "S119",
  "title": "NCBI：Anatomy, Bony Pelvis and Lower Limb: Knee Posterior Cruciate Ligament",
  "url": "https://www.ncbi.nlm.nih.gov/sites/books/NBK535416/",
  "note": "PCL 的後方脛骨附著、股骨內髁外面及囊內滑膜外位置。",
  "type": "解剖教材"
 },
 {
  "id": "S120",
  "title": "NCBI：Anatomy, Bony Pelvis and Lower Limb, Knee Lateral Meniscus",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK519494/",
  "note": "外側半月板活動性、附著與膕肌腱關係。",
  "type": "解剖教材"
 },
 {
  "id": "S121",
  "title": "NCBI：Anatomy, Bony Pelvis and Lower Limb, Knee",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK500017/",
  "note": "膝關節、側副韌帶、半月板與交叉韌帶。",
  "type": "解剖教材"
 },
 {
  "id": "S122",
  "title": "NCBI：Anatomy, Bony Pelvis and Lower Limb: Ankle Joint",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK545158/",
  "note": "踝穴、距骨滑車與踝部內外側韌帶。",
  "type": "解剖教材"
 },
 {
  "id": "S123",
  "title": "Dartmouth：Chapter 17, The ankle and foot",
  "url": "https://humananatomy.host.dartmouth.edu/BHA/public_html/part_3/chapter_17.html",
  "note": "足部動作、足底韌帶、足弓與腓骨長肌腱。",
  "type": "大學教材"
 },
 {
  "id": "S124",
  "title": "Dartmouth：Chapter 15, The thigh and knee",
  "url": "https://humananatomy.host.dartmouth.edu/BHA/public_html/part_3/chapter_15.html",
  "note": "股骨附著、膝關節與膕肌解鎖。",
  "type": "大學教材"
 },
 {
  "id": "S125",
  "title": "Dartmouth：Chapter 14, The gluteal region",
  "url": "https://humananatomy.host.dartmouth.edu/BHA/public_html/part_3/chapter_14.html",
  "note": "梨狀肌上下通道、臀神經與血管。",
  "type": "大學教材"
 },
 {
  "id": "S126",
  "title": "NCBI：Anatomy, Bony Pelvis and Lower Limb: Arches of the Foot",
  "url": "https://www.ncbi.nlm.nih.gov/sites/books/NBK587361/",
  "note": "內外縱弓、橫弓、韌帶與動態支撐。",
  "type": "解剖教材"
 },
 {
  "id": "S127",
  "title": "NCBI：Anatomy, Bony Pelvis and Lower Limb: Medial Longitudinal Arch of the Foot",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK562289/",
  "note": "彈簧韌帶、脛骨後肌與內側縱弓。",
  "type": "解剖教材"
 },
 {
  "id": "S128",
  "title": "Wang et al.：Fibula and its ligaments in load transmission and ankle joint stability",
  "url": "https://pubmed.ncbi.nlm.nih.gov/8804301/",
  "note": "屍體力學研究證明腓骨參與負荷分擔；不以固定比例概括個體。",
  "type": "原始研究"
 },
 {
  "id": "S129",
  "title": "Matsumoto & Ogihara：Direct visualization and measurement of the plantar aponeurosis behavior in foot arch deformation via the windlass mechanism",
  "url": "https://pubmed.ncbi.nlm.nih.gov/38642017/",
  "note": "足趾伸展、足底腱膜張力與 windlass 機制的直接觀察。",
  "type": "原始研究"
 },
 {
  "id": "S130",
  "title": "Shelbourne & Nitz：The O’Donoghue triad revisited",
  "url": "https://pubmed.ncbi.nlm.nih.gov/1962712/",
  "note": "經典 unhappy triad 與實際急性 ACL／MCL 合併半月板傷不同。",
  "type": "原始研究"
 },
 {
  "id": "S131",
  "title": "Dewar et al.：The relative contribution of the medial and lateral femoral circumflex arteries to the vascularity of the head and neck of the femur",
  "url": "https://pubmed.ncbi.nlm.nih.gov/27909118/",
  "note": "旋股內側動脈為主要來源，旋股外側也有區域性貢獻。",
  "type": "原始研究"
 },
 {
  "id": "S132",
  "title": "NCBI：Anatomy, Bony Pelvis and Lower Limb: Foot and Ankle",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK546698/",
  "note": "足踝骨性及肌腱關係，足弓補充。",
  "type": "解剖教材"
 },
 {
  "id": "S133",
  "title": "NCBI：Anatomy, Bony Pelvis and Lower Limb: Achilles Tendon",
  "url": "https://www.ncbi.nlm.nih.gov/sites/books/NBK499917/",
  "note": "跟腱主要由腓腸肌與比目魚肌形成，連到跟骨。",
  "type": "解剖教材"
 },
 {
  "id": "S134",
  "title": "NCBI：Anatomy, Bony Pelvis and Lower Limb: Leg Posterior Compartment",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK537340/",
  "note": "小腿後群肌肉與蹠肌腱的獨立附著／變異。",
  "type": "解剖教材"
 },
 {
  "id": "S135",
  "title": "VanSickle et al.：Textbook typologies: Challenging the myth of the perfect obstetric pelvis",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9303659/",
  "note": "產科徑線定義、骨盆形態重疊及單一尺寸預測分娩的限制。",
  "type": "研究與教材分析"
 },
 {
  "id": "S136",
  "title": "NCBI：Anatomy, Abdomen and Pelvis, Pelvic Inlet",
  "url": "https://pubmed.ncbi.nlm.nih.gov/30085610/",
  "note": "入口界線、大小骨盆與入口徑線的定義。",
  "type": "解剖教材"
 }
];
anatomySources.push(...bones4Sources);
const bones4Topics=[
 {
  "id": "bones4-video-notes",
  "title": "第四部影片全片逐段筆記",
  "english": "Full-video notes · 1:48:00",
  "summary": "全片 51 段時間筆記，從骨盆後方韌帶到足弓與踝足動作；另列教材核對。",
  "sources": [
   "S72",
   "S48",
   "S113",
   "S114",
   "S118",
   "S119",
   "S126",
   "S76",
   "S94",
   "S95",
   "S108",
   "S115",
   "S116",
   "S117",
   "S120",
   "S121",
   "S122",
   "S123",
   "S124",
   "S125",
   "S127",
   "S128",
   "S129",
   "S130",
   "S131",
   "S132",
   "S133",
   "S134",
   "S135",
   "S136"
  ],
  "sections": [
   {
    "id": "bones4-video-notes-1",
    "title": "01｜先讀整理方法與全片路線",
    "html": "<div class=\"enrichment-label\">整理方法</div><p>使用者上傳檔，全長 1:48:00。完成全長音訊自動轉錄，另逐張核對每 30 秒抽樣板書 216 張；不是逐字稿或逐秒人工觀看。時間碼為約略回看區間，以此檔為準，通常可往前後 20–30 秒找完整說明。</p><p>自動轉錄名詞以畫面和教材校正。以下是課堂重述；標示「教材核對」的句子是延伸／更正，不補造成講者原話。詳細來源與方法見本章來源頁。</p><div class=\"flow\"><div class=\"flow-step\">骨盆韌帶與通道</div><div class=\"flow-arrow\" aria-hidden=\"true\">↓</div><div class=\"flow-step\">髖與骨盆腔</div><div class=\"flow-arrow\" aria-hidden=\"true\">↓</div><div class=\"flow-step\">股骨與膝</div><div class=\"flow-arrow\" aria-hidden=\"true\">↓</div><div class=\"flow-step\">脛腓、踝與足弓</div></div>"
   },
   {
    "id": "bones4-video-notes-2",
    "title": "02｜全片時間索引",
    "html": "<div class=\"enrichment-label\">影片時間索引</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">回看區間</th><th scope=\"col\">本段內容</th><th scope=\"col\">詳細頁</th></tr></thead><tbody><tr><td>00:00–02:00</td><td>承接上一部：薦骨承重與梨狀肌分區</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/pelvic-passages\">骨盆韌帶、坐骨孔與陰部神經</a></td></tr><tr><td>02:00–04:12</td><td>大、小坐骨孔的神經血管通過</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/pelvic-passages\">骨盆韌帶、坐骨孔與陰部神經</a></td></tr><tr><td>04:12–06:18</td><td>髖臼三部分與髖關節的骨性配對</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/hip-joint\">髖臼、髖關節與股骨頭血供</a></td></tr><tr><td>06:18–08:24</td><td>髖臼橫韌帶與股骨頭韌帶</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/hip-joint\">髖臼、髖關節與股骨頭血供</a></td></tr><tr><td>08:24–10:24</td><td>五條髖部韌帶與髂股韌帶定位</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/hip-joint\">髖臼、髖關節與股骨頭血供</a></td></tr><tr><td>10:24–13:54</td><td>六大髖周動脈：髂內與股動脈系統</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/hip-joint\">髖臼、髖關節與股骨頭血供</a></td></tr><tr><td>13:54–15:42</td><td>轉子吻合與十字吻合的兩組四條</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/hip-joint\">髖臼、髖關節與股骨頭血供</a></td></tr><tr><td>15:42–17:36</td><td>髖關節神經：腰叢與薦叢分開</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/pelvic-passages\">骨盆韌帶、坐骨孔與陰部神經</a></td></tr><tr><td>17:36–20:42</td><td>骨盆入口：薦岬、弓狀線、恥骨梳</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/pelvic-cavity\">骨盆入口、出口與產科徑線</a></td></tr><tr><td>20:42–23:18</td><td>假骨盆、真骨盆與腹盆腔的交界</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/pelvic-cavity\">骨盆入口、出口與產科徑線</a></td></tr><tr><td>23:18–25:06</td><td>大骨盆四周與小骨盆骨性壁</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/pelvic-cavity\">骨盆入口、出口與產科徑線</a></td></tr><tr><td>25:06–27:48</td><td>斜筒產道：入口、中面、出口</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/pelvic-cavity\">骨盆入口、出口與產科徑線</a></td></tr><tr><td>27:48–30:12</td><td>三個徑線：入口前後、中面與出口橫徑</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/pelvic-cavity\">骨盆入口、出口與產科徑線</a></td></tr><tr><td>30:12–31:12</td><td>CPD：頭盆不稱的名詞</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/pelvic-cavity\">骨盆入口、出口與產科徑線</a></td></tr><tr><td>31:12–33:48</td><td>骨盆形態：骨重、髂窩、入口與盆腔</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/pelvic-sex\">骨盆形態差異與恥骨弓</a></td></tr><tr><td>33:48–35:54</td><td>坐骨棘、切跡、薦骨與出口</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/pelvic-sex\">骨盆形態差異與恥骨弓</a></td></tr><tr><td>35:54–38:36</td><td>恥骨聯合、閉孔、恥骨弓與髖臼</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/pelvic-sex\">骨盆形態差異與恥骨弓</a></td></tr><tr><td>38:36–41:06</td><td>下肢骨總覽與股骨近端</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/femur\">股骨、髕骨與肌肉附著</a></td></tr><tr><td>41:06–43:18</td><td>股骨頭、股骨頸與近端方向</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/femur\">股骨、髕骨與肌肉附著</a></td></tr><tr><td>43:18–45:30</td><td>大轉子五組、小轉子與轉子窩</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/femur\">股骨、髕骨與肌肉附著</a></td></tr><tr><td>45:30–48:54</td><td>骨幹橫切面、粗線與近端延續</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/femur\">股骨、髕骨與肌肉附著</a></td></tr><tr><td>48:54–51:30</td><td>遠端髁、上髁、半月板與髕骨</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/femur\">股骨、髕骨與肌肉附著</a></td></tr><tr><td>51:30–53:42</td><td>膝關節由股脛與股髕組成</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/knee-meniscus\">膝關節、半月板與滑膜腔</a></td></tr><tr><td>53:42–56:12</td><td>關節軟骨、關節囊、滑膜與血供</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/knee-meniscus\">膝關節、半月板與滑膜腔</a></td></tr><tr><td>56:12–58:12</td><td>層次口訣：囊內與滑膜腔內不是同義</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/knee-meniscus\">膝關節、半月板與滑膜腔</a></td></tr><tr><td>58:12–1:00:00</td><td>半月板與一加二加四的韌帶分組</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/knee-ligaments\">ACL、PCL、側副韌帶與膝解鎖</a></td></tr><tr><td>1:00:00–1:02:00</td><td>ACL、PCL 的命名與端點</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/knee-ligaments\">ACL、PCL、側副韌帶與膝解鎖</a></td></tr><tr><td>1:02:00–1:03:24</td><td>相對位移：限制脛前與脛後</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/knee-ligaments\">ACL、PCL、側副韌帶與膝解鎖</a></td></tr><tr><td>1:03:24–1:04:48</td><td>四條支持韌帶與斜膕韌帶來源</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/knee-ligaments\">ACL、PCL、側副韌帶與膝解鎖</a></td></tr><tr><td>1:04:48–1:06:42</td><td>鎖定、解鎖與膕肌</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/knee-ligaments\">ACL、PCL、側副韌帶與膝解鎖</a></td></tr><tr><td>1:06:42–1:08:36</td><td>不幸三聯傷與膝周滑液囊</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/knee-meniscus\">膝關節、半月板與滑膜腔</a></td></tr><tr><td>1:08:36–1:10:24</td><td>脛腓骨模型、內外踝與脛骨粗隆</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/tibia-fibula\">脛骨、腓骨、內外踝與神經</a></td></tr><tr><td>1:10:24–1:13:12</td><td>總腓神經、同義名稱與踝部定位</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/tibia-fibula\">脛骨、腓骨、內外踝與神經</a></td></tr><tr><td>1:13:12–1:15:42</td><td>七跗骨由後到前的排列</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/tarsals\">七塊跗骨、足骨排列與關節線</a></td></tr><tr><td>1:15:42–1:17:48</td><td>距骨、跟骨與足部接地的概念</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/tarsals\">七塊跗骨、足骨排列與關節線</a></td></tr><tr><td>1:17:48–1:19:24</td><td>跟腱與小腿後群肌肉</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/foot-movement\">踝足動作、肌腱止點與神經對照</a></td></tr><tr><td>1:19:24–1:21:06</td><td>腕骨對跗骨、深橫掌／蹠骨韌帶</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/tarsals\">七塊跗骨、足骨排列與關節線</a></td></tr><tr><td>1:21:06–1:23:12</td><td>足弓功能與內、外縱弓骨路線</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/foot-arches\">內外縱弓、橫弓與足底韌帶</a></td></tr><tr><td>1:23:12–1:25:36</td><td>橫弓、扁平足與高弓足</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/foot-arches\">內外縱弓、橫弓與足底韌帶</a></td></tr><tr><td>1:25:36–1:29:06</td><td>石橋四關鍵字：拱頂、拉索、節間固定、懸吊</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/foot-arches\">內外縱弓、橫弓與足底韌帶</a></td></tr><tr><td>1:29:06–1:30:42</td><td>三弓拱頂與彈簧韌帶</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/foot-arches\">內外縱弓、橫弓與足底韌帶</a></td></tr><tr><td>1:30:42–1:33:42</td><td>長短足底韌帶與深橫蹠骨韌帶</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/foot-arches\">內外縱弓、橫弓與足底韌帶</a></td></tr><tr><td>1:33:42–1:36:30</td><td>足底腱膜、腓骨長肌與懸吊支撐</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/foot-arches\">內外縱弓、橫弓與足底韌帶</a></td></tr><tr><td>1:36:30–1:38:06</td><td>體重支撐模型與轉入踝關節</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/foot-arches\">內外縱弓、橫弓與足底韌帶</a></td></tr><tr><td>1:38:06–1:40:18</td><td>背屈穩定與高跟鞋的蹠屈姿勢</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/ankle\">踝穴、踝韌帶與內踝後通道</a></td></tr><tr><td>1:40:18–1:41:18</td><td>內側三角韌帶與外側踝韌帶</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/ankle\">踝穴、踝韌帶與內踝後通道</a></td></tr><tr><td>1:41:18–1:42:36</td><td>內翻口訣與旋後術語</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/foot-movement\">踝足動作、肌腱止點與神經對照</a></td></tr><tr><td>1:42:36–1:44:24</td><td>踝與距下、橫跗的分工</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/tarsals\">七塊跗骨、足骨排列與關節線</a></td></tr><tr><td>1:44:24–1:45:30</td><td>距下、橫跗與跟骰區的配對</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/tarsals\">七塊跗骨、足骨排列與關節線</a></td></tr><tr><td>1:45:30–1:47:18</td><td>過度內翻與外側韌帶受損</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/ankle\">踝穴、踝韌帶與內踝後通道</a></td></tr><tr><td>1:47:18–1:48:00</td><td>本片結尾與下一堂的範圍</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/bones4-rapid-review\">第四章跨區統整與易錯配對</a></td></tr></tbody></table></div>"
   },
   {
    "id": "bones4-video-notes-3",
    "title": "03｜00:00–02:00｜承接上一部：薦骨承重與梨狀肌分區",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>講者延續薦棘、薦結節韌帶的抓持比喻，說明重量下壓時限制薦骨與尾骨區的過度旋轉。</li><li>由髖骨的大坐骨切跡加上韌帶建立大坐骨孔，再用梨狀肌將通道分為上、下兩區。</li><li>看板書時先辨認坐骨棘、坐骨結節，避免把兩條韌帶的終點互換。</li></ul><div class=\"study-note teal\">教材核對：骨盆具有小幅傾動；不能把比喻推成完全固定或只有一條韌帶承重。S72、S108。</div>"
   },
   {
    "id": "bones4-video-notes-4",
    "title": "04｜02:00–04:12｜大、小坐骨孔的神經血管通過",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>上區重點是臀上神經及血管；下區重點包括坐骨、臀下、股後皮、陰部等神經。</li><li>講者把小坐骨孔的陰部神經、閉孔內肌神經與內陰部血管另列，提醒有構造同時出現在大、小孔。</li><li>先離開骨盆、繞坐骨棘、再經小孔到會陰，是陰部神經最值得畫成路線的一段。</li></ul><div class=\"study-note teal\">教材核對：完整梨狀肌下方清單另含閉孔內肌神經等，不能把片中口頭計數當作所有構造的總數。陰部管與閉孔管不同。S114、S125。</div>"
   },
   {
    "id": "bones4-video-notes-5",
    "title": "05｜04:12–06:18｜髖臼三部分與髖關節的骨性配對",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>轉入髖臼 acetabulum，講者用字源比喻幫助記名稱。</li><li>髂骨、坐骨、恥骨三部分在髖臼區會合；髖關節由髖臼與股骨頭形成。</li><li>圖上分清股骨頭、頸、大轉子、小轉子，不把髖骨與股骨當同一塊骨。</li></ul><div class=\"study-note teal\">教材核對：承重關節面為髖臼月狀面，中央髖臼窩不是整片關節軟骨。S72、S115。</div>"
   },
   {
    "id": "bones4-video-notes-6",
    "title": "06｜06:18–08:24｜髖臼橫韌帶與股骨頭韌帶",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>講者先畫有缺口的碗：髖臼橫韌帶跨髖臼切跡。</li><li>另一條從髖臼區連到股骨頭凹，是股骨頭韌帶。</li><li>接著討論韌帶內的動脈及股骨其他區域的供血，必須把這段與後面髖周血管表一起讀。</li></ul><div class=\"study-note teal\">教材核對：成人股骨頭主要靠旋股內側等支持帶血管，不應只背閉孔動脈經頭韌帶供應全頭；兒童相對重要性不同。S115、S117、S131。</div>"
   },
   {
    "id": "bones4-video-notes-7",
    "title": "07｜08:24–10:24｜五條髖部韌帶與髂股韌帶定位",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>課堂把髖臼橫、股骨頭兩條加上髂股、坐股、恥股三條，組成五項複習。</li><li>前方髂股、後方坐股、前下方恥股的配置，可先以髖骨三部分的名稱建立聯想。</li><li>髂股韌帶由髂前下棘附近連到前方轉子間線，是站立與限制過度伸展的重要構造。</li></ul><div class=\"study-note teal\">教材核對：後方轉子間嵴與前方轉子間線要分開；五項是課堂分組，不是所有髖部韌帶結構的總數。S115。</div>"
   },
   {
    "id": "bones4-video-notes-8",
    "title": "08｜10:24–13:54｜六大髖周動脈：髂內與股動脈系統",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>板書以 a–f 排列閉孔、臀上、臀下、旋股內側、旋股外側及第一穿支。</li><li>前三項歸入髂內動脈系統，後三項歸入股／深股動脈系統；講者回翻血管章節確認分支。</li><li>片中講者也更正下肢旋股動脈應用內、外側命名，不套成上肢旋肱動脈的前、後命名。</li></ul><div class=\"study-note teal\">教材核對：髖關節周邊供血清單不等於成人股骨頭的主要供血排序；旋股動脈起源也可有變異。S116、S131。</div>"
   },
   {
    "id": "bones4-video-notes-9",
    "title": "09｜13:54–15:42｜轉子吻合與十字吻合的兩組四條",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>講者用六條動脈中的相鄰四項組合，對照轉子吻合與十字吻合。</li><li>轉子吻合的課堂框架是臀上、臀下、旋股內、旋股外；十字吻合改由臀下、兩條旋股及第一穿支組成。</li><li>把動脈來源、吻合位置及參與支都寫進同一表，才能避免只背四個名稱。</li></ul><div class=\"study-note teal\">教材核對：教材常強調轉子區上行支、十字區旋股橫支與第一穿支上行支；兩組的參與程度有變異。S116、S124。</div>"
   },
   {
    "id": "bones4-video-notes-10",
    "title": "10｜15:42–17:36｜髖關節神經：腰叢與薦叢分開",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>影片再列四項神經供應，將股、閉孔與坐骨、臀上等名稱分到腰、薦神經叢框架。</li><li>股神經及閉孔神經用 L2–L4 作基礎；坐骨神經與臀區神經再接到薦叢。</li><li>講者提醒動脈與神經要分別背，不能因同在髖區就猜來自同一系統。</li></ul><div class=\"study-note teal\">教材核對：關節支與肌肉支不同，完整髖關節感覺支亦有變異；此處不把課堂四項當唯一完整清單。S115、S125。</div>"
   },
   {
    "id": "bones4-video-notes-11",
    "title": "11｜17:36–20:42｜骨盆入口：薦岬、弓狀線、恥骨梳",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>後方先找薦岬，再沿髂骨內面的弓狀線向前接恥骨梳／梳線、恥骨嵴。</li><li>最後到恥骨聯合上緣；左右連起來就是骨盆入口周緣。</li><li>講者用側面與正面投影反覆描線，提醒入口不是隨便在髂嵴高度畫一個水平圈。</li></ul><div class=\"study-note teal\">教材核對：薦岬為第一薦椎前上方突出；入口整圈稱界線／骨盆緣，弓狀線只是其中一段。S72、S136。</div>"
   },
   {
    "id": "bones4-video-notes-12",
    "title": "12｜20:42–23:18｜假骨盆、真骨盆與腹盆腔的交界",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>講者以胸腔、腹腔、盆腔模型指出界線上方屬大／假骨盆，下方屬小／真骨盆。</li><li>這條邊界是骨性區域分界，腹腔與盆腔在腔體上仍相連。</li><li>先用入口周緣定位，避免只憑肚臍或髖骨外形把骨盆分半。</li></ul><div class=\"study-note teal\">教材核對：肚臍及椎體水平是近似外表地標；不作界線精確定義。S72、S76。</div>"
   },
   {
    "id": "bones4-video-notes-13",
    "title": "13｜23:18–25:06｜大骨盆四周與小骨盆骨性壁",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>課堂討論大骨盆後方腰椎區、兩側髂窩及前方軟組織，強調不是四面全由骨頭圍住。</li><li>小骨盆前方恥骨區、後方薦尾骨及兩側髖骨共同形成骨性框架。</li><li>比較時把大骨盆的腹部延續與小骨盆的盆腔／產道空間分開。</li></ul><div class=\"study-note teal\">教材核對：腰椎水平的口訣受姿勢及定義影響，網站以界線為主要分區依據。S72、S76、S136。</div>"
   },
   {
    "id": "bones4-video-notes-14",
    "title": "14｜25:06–27:48｜斜筒產道：入口、中面、出口",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>講者以狹窄道路比喻胎頭適應產道，回扣尚未完全閉合的顱縫與囟門。</li><li>側面斜筒圖分 inlet、midplane、outlet，分別找入口、坐骨棘層及出口的定位。</li><li>產道形狀要同時考慮骨盆傾斜和各平面，不能把整段當直立等寬圓筒。</li></ul><div class=\"study-note teal\">教材核對：胎頭塑形與產道適應是多因素過程；道路比喻用來理解空間，不當臨床判定規則。S135、S136。</div>"
   },
   {
    "id": "bones4-video-notes-15",
    "title": "15｜27:48–30:12｜三個徑線：入口前後、中面與出口橫徑",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>影片列入口前後徑、中面棘間徑、出口結節間徑，並給約 10.5、10、11 公分作課堂記憶。</li><li>中面由兩坐骨棘間量，出口由兩坐骨結節間量，這兩組骨點不可交換。</li><li>講者強調窄處會限制通過，練習時應先辨認測量層級再背數值。</li></ul><div class=\"study-note teal\">教材核對：片中入口端點敘述與 10.5 公分有混用解剖／產科結合徑之虞；詳頁另列三種 conjugate。數值不是個體固定標準。S135、S136。</div>"
   },
   {
    "id": "bones4-video-notes-16",
    "title": "16｜30:12–31:12｜CPD：頭盆不稱的名詞",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>課堂以胎頭與盆腔相對大小說明 cephalopelvic disproportion（CPD）。</li><li>重點是「通過的胎頭」與「可通過的產道」相對關係，不是隻看骨盆一個數字。</li><li>影片延伸到當時剖腹產與健保的口頭例子，本站不把那些時代性說法列為現行規則。</li></ul><div class=\"study-note teal\">教材核對：是否需介入取決於完整產程評估；正常骨盆形態或單一徑線不能直接決定分娩結果。S135。</div>"
   },
   {
    "id": "bones4-video-notes-17",
    "title": "17｜31:12–33:48｜骨盆形態：骨重、髂窩、入口與盆腔",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>講者對照常見成人男性較厚重、女性較輕的骨性外觀，以及髂翼／髂窩展開程度。</li><li>入口形態以較心形和較橢圓形的模式圖比較。</li><li>盆腔以較漏斗形與較寬、近筒形作教學比喻，重點是入口到出口的相對收斂。</li></ul><div class=\"study-note teal\">教材核對：這些是群體常見模式，個體有重疊；不拿單一外形當絕對性別或生產能力判定。S72、S135。</div>"
   },
   {
    "id": "bones4-video-notes-18",
    "title": "18｜33:48–35:54｜坐骨棘、切跡、薦骨與出口",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>坐骨棘向內突出會影響中骨盆空間；課堂將其與大坐骨切跡寬窄一起比較。</li><li>薦骨上下長度、橫向寬度與彎曲方向會改變盆腔側面形狀。</li><li>出口寬度需連到坐骨結節距離，而不是隻看髂翼張得多開。</li></ul><div class=\"study-note teal\">教材核對：薦骨形態與盆腔尺寸存在連續變異，不能由外表臀部形狀直接推論產道尺寸。S72、S135。</div>"
   },
   {
    "id": "bones4-video-notes-19",
    "title": "19｜35:54–38:36｜恥骨聯合、閉孔、恥骨弓與髖臼",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>講者畫前方骨架，對照恥骨聯合高低及閉孔形狀；圖畫特意誇張方便記憶。</li><li>恥骨弓／恥骨下角以較窄和較寬作主要比較。</li><li>再接坐骨結節間距、髖臼大小與肌肉附著痕，完成骨盆比較表。</li></ul><div class=\"study-note teal\">教材核對：閉孔常用男性較圓／橢圓、女性較三角的模式，不能因板書四邊形就當普遍定義。角度和形狀都有個體重疊。S72、S135。</div>"
   },
   {
    "id": "bones4-video-notes-20",
    "title": "20｜38:36–41:06｜下肢骨總覽與股骨近端",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>由大腿股骨、膝前髕骨、小腿脛腓骨走向足的跗骨、蹠骨、趾骨。</li><li>足部基本計數以七跗、五蹠、十四趾骨對照上肢腕掌指骨。</li><li>股骨圖先找向內的頭、頸與大小轉子，再接前後骨幹及遠端兩髁。</li></ul><div class=\"study-note teal\">教材核對：趾骨有拇趾兩節例外；骨數詳表不另把可變副骨／籽骨算成固定數。S113。</div>"
   },
   {
    "id": "bones4-video-notes-21",
    "title": "21｜41:06–43:18｜股骨頭、股骨頸與近端方向",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>影片由前面示意股骨頭連髖臼，重述頭部及骨幹的動脈供應口訣。</li><li>外觀上的頸、大轉子、小轉子與股骨幹交接，是辨認近端圖的重點。</li><li>講者借用上肢解剖頸／外科頸的類比説明骨折區。</li></ul><div class=\"study-note teal\">教材核對：股骨並不像肱骨慣常分解剖頸／外科頸；股骨頸、轉子間、轉子下骨折應分開。成人股骨頭血供更正見髖頁。S113、S117、S131。</div>"
   },
   {
    "id": "bones4-video-notes-22",
    "title": "22｜43:18–45:30｜大轉子五組、小轉子與轉子窩",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>課堂大轉子五組為臀中、臀小、梨狀、孖肌與閉孔內肌；孖肌本身含上、下兩肌。</li><li>小轉子配髂腰肌，由髂肌及腰大肌組成。</li><li>大轉子內側的轉子窩配閉孔外肌，特別避免把內、外閉孔肌對錯。</li></ul><div class=\"study-note teal\">教材核對：五組不是嚴格五條獨立肌肉；附著面另見詳表。股方肌止於轉子間嵴附近，不塞進相同清單。S124、S125。</div>"
   },
   {
    "id": "bones4-video-notes-23",
    "title": "23｜45:30–48:54｜骨幹橫切面、粗線與近端延續",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>講者以三面骨幹模型定位前面與後內、後外面，後方交界為粗線 linea aspera。</li><li>粗線分內外唇，接內收肌、股肌及股二頭肌短頭等附著。</li><li>向上內側的恥骨肌線配恥骨肌；外側較粗的臀肌粗隆配臀大肌。</li></ul><div class=\"study-note teal\">教材核對：附著範圍彼此鄰接，不把外唇只配股二頭肌或內唇只配全部內收肌。恥骨肌線與臀肌粗隆的精確位置看教材圖。S113、S124。</div>"
   },
   {
    "id": "bones4-video-notes-24",
    "title": "24｜48:54–51:30｜遠端髁、上髁、半月板與髕骨",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>股骨內、外髁與脛骨平臺之間有半月板，前方另有髕骨接觸股骨髕面。</li><li>講者從髁向上辨認上髁，再接內收大肌與膕肌的配對。</li><li>髕骨位在股四頭肌伸膝裝置中，是最大的籽骨。</li></ul><div class=\"study-note teal\">教材核對：內收大肌腿後肌部止於內收結節，位在內上髁上方；膕肌腱起於外髁區。髕骨不與脛骨直接關節。S113、S124。</div>"
   },
   {
    "id": "bones4-video-notes-25",
    "title": "25｜51:30–53:42｜膝關節由股脛與股髕組成",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>膝是由股脛及股髕部分構成的複合關節，不能只畫兩骨直線接合。</li><li>影片將股髕滑動與股脛屈伸對照，並用肩與膝比較活動度、體積和受傷情境。</li><li>股脛關節除了屈伸，屈膝時亦可出現一定旋轉。</li></ul><div class=\"study-note teal\">教材核對：「最常受傷／脫臼」需限定統計範圍，本站不把課堂排名當所有群體的固定頻率。S48、S121。</div>"
   },
   {
    "id": "bones4-video-notes-26",
    "title": "26｜53:42–56:12｜關節軟骨、關節囊、滑膜與血供",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>講者畫關節外層纖維囊、內層滑膜及滑液腔，滑液參與潤滑。</li><li>關節骨端覆關節軟骨，半月板則是另一種纖維軟骨構造。</li><li>膝周血管以股、膕、脛前動脈相關分支吻合作記憶框架。</li></ul><div class=\"study-note teal\">教材核對：軟骨只覆蓋關節面，不是每根長骨兩端全部覆蓋；完整膝周供血要辨認膝動脈及回返／下降分支。S48、S121、S124。</div>"
   },
   {
    "id": "bones4-video-notes-27",
    "title": "27｜56:12–58:12｜層次口訣：囊內與滑膜腔內不是同義",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>課堂把半月板放在關節面之間，十字韌帶畫於纖維囊內、滑膜外。</li><li>支持韌帶主要在外圍，作為外、外的概括分組。</li><li>先把囊與滑膜兩層畫出，再安置各構造，比只背 intra／extra 更可靠。</li></ul><div class=\"study-note teal\">教材核對：半月板外周與囊連接、內緣面向腔；MCL 與囊有融合關係，不把所有支持結構硬當完全遊離囊外。S119、S121。</div>"
   },
   {
    "id": "bones4-video-notes-28",
    "title": "28｜58:12–1:00:00｜半月板與一加二加四的韌帶分組",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>內、外半月板是纖維軟骨，外周厚、內緣薄；前方由膝橫韌帶連接。</li><li>講者把膝橫一條、十字兩條、支持四條組成 1＋2＋4 的課堂表。</li><li>內側較開放 C 形、外側較近圓形，可搭俯視圖比較。</li></ul><div class=\"study-note teal\">教材核對：七條是此課程選取的複習清單，不是所有膝韌帶的總數；教材還包括弓狀膕、半月股等結構。S120、S121、S124。</div>"
   },
   {
    "id": "bones4-video-notes-29",
    "title": "29｜1:00:00–1:02:00｜ACL、PCL 的命名與端點",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>講者強調「以脛骨為名」：前十字由脛骨前髁間區起，後十字由後方起。</li><li>板書用交叉線和前後虛實線表示兩條韌帶方向。</li><li>背命名後再加股骨端，才能回答內、外髁的精確位置。</li></ul><div class=\"study-note teal\">教材核對：ACL 到股骨外髁內面；PCL 到股骨內髁外面。簡畫「脛前到股後」不足以代替三維端點。S118、S119。</div>"
   },
   {
    "id": "bones4-video-notes-30",
    "title": "30｜1:02:00–1:03:24｜相對位移：限制脛前與脛後",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>以向前踢的例子理解 ACL 拉住脛骨，限制其相對股骨前移。</li><li>固定參考骨改變時，同一相對運動可說成股骨相對脛骨後移。</li><li>PCL 對照後移限制；答題前先讀是問脛骨還是股骨。</li></ul><div class=\"study-note teal\">教材核對：限制過度位移不是宣稱正常動作會直接脫臼，也不能把所有束的張力一律說成只在伸膝或只在屈膝作用。S118、S119。</div>"
   },
   {
    "id": "bones4-video-notes-31",
    "title": "31｜1:03:24–1:04:48｜四條支持韌帶與斜膕韌帶來源",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>課堂四項是內側脛側副、外側腓側副、前方髕韌帶與後方斜膕韌帶。</li><li>方位口訣可先記內、外、前、後，再補骨端。</li><li>斜膕韌帶與半膜肌腱擴展相連，不要背成半腱肌或膕肌。</li></ul><div class=\"study-note teal\">教材核對：LCL 接腓骨頭，MCL 接脛骨內側；MCL 深部與內側半月板有關，LCL 不直接附著外側半月板。S121、S124。</div>"
   },
   {
    "id": "bones4-video-notes-32",
    "title": "32｜1:04:48–1:06:42｜鎖定、解鎖與膕肌",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>講者以站立不費力的姿勢説明伸膝末段鎖定。</li><li>腳固定的站立情境，股骨相對脛骨內旋；開始屈曲時由膕肌參與解鎖。</li><li>解鎖將相對旋轉方向反轉，再允許屈膝。</li></ul><div class=\"study-note teal\">教材核對：站立是閉鏈；腳自由移動的開鏈則是脛骨外旋鎖定、內旋解鎖。影片沒有明說參考骨時，詳表補上兩種情境。S124。</div>"
   },
   {
    "id": "bones4-video-notes-33",
    "title": "33｜1:06:42–1:08:36｜不幸三聯傷與膝周滑液囊",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>傳統 unhappy triad 配 ACL、MCL 與內側半月板，講者作合併傷記憶。</li><li>滑液囊以封閉的滑膜囊袋比喻，位於肌腱、骨或皮膚間減少摩擦。</li><li>片中列髕上、髕前、髕下等名稱，髕下又分淺、深。</li></ul><div class=\"study-note teal\">教材核對：經典三聯傷不等於實際急性傷必定傷內側半月板；不要把髕下淺、深兩囊推成「數目最多」的普遍排名。S121、S130。</div>"
   },
   {
    "id": "bones4-video-notes-34",
    "title": "34｜1:08:36–1:10:24｜脛腓骨模型、內外踝與脛骨粗隆",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>脛骨平臺上方分內、外髁；遠端向內延成內踝。</li><li>腓骨在外側，近端頭、頸，遠端形成外踝。</li><li>前方脛骨粗隆是髕韌帶止點，串起股四頭肌腱—髕骨—髕韌帶—粗隆。</li></ul><div class=\"study-note teal\">教材核對：脛骨主要承重，腓骨亦參與負荷傳遞；腓骨不直接接股骨。S113、S128。</div>"
   },
   {
    "id": "bones4-video-notes-35",
    "title": "35｜1:10:24–1:13:12｜總腓神經、同義名稱與踝部定位",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>總腓神經繞腓骨頸附近，再分淺腓與深腓神經。</li><li>講者提醒 peroneal 與 fibular 在舊新術語中的對應，避免英文選項變名就認不出。</li><li>內、外踝用上肢遠端突起類比，但下肢實際名稱是 malleolus。</li></ul><div class=\"study-note teal\">教材核對：踝與莖突不是解剖同義詞；神經受損後的背屈、外翻與感覺分佈另見詳表。S113、S132。</div>"
   },
   {
    "id": "bones4-video-notes-36",
    "title": "36｜1:13:12–1:15:42｜七跗骨由後到前的排列",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>側面板書從跟骨、距骨到舟骨，再到內、中、外三楔骨與骰骨。</li><li>骰骨在較外側，不能把三楔骨後方／前方全部畫成同一排。</li><li>再向前接五蹠骨與趾骨，用英文 tarsal／metatarsal／phalanges 分區。</li></ul><div class=\"study-note teal\">教材核對：側面圖有骨重疊；本章另附關係圖與上視教材圖，跟骨在距骨下方，骰骨主要接第 4、5 蹠骨。S113。</div>"
   },
   {
    "id": "bones4-video-notes-37",
    "title": "37｜1:15:42–1:17:48｜距骨、跟骨與足部接地的概念",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>距骨在踝穴下，跟骨是最大跗骨且位於後下方。</li><li>講者以足印説明足跟與前足承擔負重，再帶出跟腱附著。</li><li>距骨與血供風險也被拿來與腕舟狀骨比較。</li></ul><div class=\"study-note teal\">教材核對：足趾會依站姿與步態接地，不能說永遠不著地；距骨骨折也不一律缺血壞死，更不泛稱所有足骨中最易骨折。S113、S132。</div>"
   },
   {
    "id": "bones4-video-notes-38",
    "title": "38｜1:17:48–1:19:24｜跟腱與小腿後群肌肉",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>講者回翻肌肉頁，列腓腸肌、蹠肌與比目魚肌，連到跟腱。</li><li>這段用阿基里斯的故事幫助記腱名與跟骨後方附著。</li><li>把後群淺層肌肉的清單與真正小腿三頭肌的定義分別記。</li></ul><div class=\"study-note teal\">教材核對：小腿三頭肌指腓腸肌兩頭＋比目魚肌；跟腱主要由腓腸與比目魚肌形成。蹠肌腱可獨立或融合，有變異。S133、S134。</div>"
   },
   {
    "id": "bones4-video-notes-39",
    "title": "39｜1:19:24–1:21:06｜腕骨對跗骨、深橫掌／蹠骨韌帶",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>腕骨八塊、跗骨七塊，最大骨可配頭狀與跟骨。</li><li>影片比較深橫掌骨韌帶排除拇指，足的深橫蹠骨韌帶包括第 1–5 列連結。</li><li>不要因手、足外形類似，就把拇指與拇趾活動自由度作完全同樣推論。</li></ul><div class=\"study-note teal\">教材核對：深橫韌帶主要連相鄰關節的掌／蹠板，不是隨便在骨幹間綁線；骨折及壞死的「最」需限定種類與情境。S94、S95。</div>"
   },
   {
    "id": "bones4-video-notes-40",
    "title": "40｜1:21:06–1:23:12｜足弓功能與內、外縱弓骨路線",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>課堂以橋下空間保護足底神經血管的比喻，接到運動與承重。</li><li>內側縱弓為跟、距、舟、三楔與第 1–3 蹠骨。</li><li>外側縱弓為跟、骰、第 4、5 蹠骨，相對較低但仍有弧度。</li></ul><div class=\"study-note teal\">教材核對：功能包含負荷分散、回彈、適應地面及軟組織保護；不是低足弓就必壓到血管或一定壞死。S123、S126。</div>"
   },
   {
    "id": "bones4-video-notes-41",
    "title": "41｜1:23:12–1:25:36｜橫弓、扁平足與高弓足",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>橫弓用三楔骨、骰骨和前方蹠骨的橫向關係説明。</li><li>影片把內側縱弓過低與 pes planus、過高與 pes cavus 配對。</li><li>先理解高度與各列排列，再用名詞回想，不把所有足弓都畫成前後縱向。</li></ul><div class=\"study-note teal\">教材核對：扁平足及高弓足原因多樣；足印或單一靜態高度不能直接判斷完整功能。S123、S126。</div>"
   },
   {
    "id": "bones4-video-notes-42",
    "title": "42｜1:25:36–1:29:06｜石橋四關鍵字：拱頂、拉索、節間固定、懸吊",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>講者畫石橋，依次說明 keystone、tie beam、staple、suspension 四種工程比喻。</li><li>拱頂石對骨性楔形排列；拉索把前後兩端連住；節間固定限制骨塊分離。</li><li>懸吊則借上方肌腱拉力説明動態支撐；四項要與三個足弓交叉整理。</li></ul><div class=\"study-note teal\">教材核對：工程模型有助記憶，但人體足弓會變形且有肌肉控制，不是完全靜態砌石。S123、S126、S127。</div>"
   },
   {
    "id": "bones4-video-notes-43",
    "title": "43｜1:29:06–1:30:42｜三弓拱頂與彈簧韌帶",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>內側縱弓拱頂的課堂配對是距骨，外側是骰骨。</li><li>橫弓以中央楔骨區作拱頂記憶，取決於討論的截面。</li><li>內側節間支撐連到跟舟韌帶，再改外側路線思考跟骰區。</li></ul><div class=\"study-note teal\">教材核對：內側關鍵區更精確為距骨頭；彈簧韌帶承託其下。橫弓不是每一層都唯一同一塊拱頂。S123、S126、S127。</div>"
   },
   {
    "id": "bones4-video-notes-44",
    "title": "44｜1:30:42–1:33:42｜長短足底韌帶與深橫蹠骨韌帶",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>短足底韌帶在深層連跟骨與骰骨；長足底較淺且延到更前方。</li><li>講者用外側骨路線的「骰，再向前是蹠」作附著記憶。</li><li>橫向固定接深橫蹠骨韌帶，與前面第 1–5 列連結對應。</li></ul><div class=\"study-note teal\">教材核對：長足底還附著骰骨，表淺束向蹠骨基底延伸；不簡寫成完全跳過骰骨。深橫蹠骨韌帶位在蹠趾板間。S123、S95。</div>"
   },
   {
    "id": "bones4-video-notes-45",
    "title": "45｜1:33:42–1:36:30｜足底腱膜、腓骨長肌與懸吊支撐",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>內外縱弓的前後拉索以足底腱膜 plantar aponeurosis 為重點；講者另解釋腱膜是膜狀腱性結構。</li><li>橫弓及外側支撐連到繞外踝、跨足底的腓骨長肌；內側懸吊以脛骨前肌作課堂簡化。</li><li>板書四項乘三弓的十二格可搭配下一頁教材核對表複習。</li></ul><div class=\"study-note teal\">教材核對：口音辨識可能將「腓骨長肌」誤成「腓腸肌」，本章已按路徑與板書校正。內側弓還須加脛骨後肌等動態支持，不能只背脛骨前肌。S123、S126、S127。</div>"
   },
   {
    "id": "bones4-video-notes-46",
    "title": "46｜1:36:30–1:38:06｜體重支撐模型與轉入踝關節",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>片中以左右、前後分配説明兩足足跟與前足負重，並立即補充個人站姿會使分配不同。</li><li>此段將足印、鞋底磨耗與負重聯繫，再轉入踝關節的背屈／蹠屈。</li><li>顳顎關節留待後續課程配合肌肉講，這部沒有完成該主題。</li></ul><div class=\"study-note teal\">教材核對：四區各 25% 只是影片理想化模型，實際站立與步行壓力分佈不固定；鞋底磨耗也不能單獨診斷。S123、S132。</div>"
   },
   {
    "id": "bones4-video-notes-47",
    "title": "47｜1:38:06–1:40:18｜背屈穩定與高跟鞋的蹠屈姿勢",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>腳跟著地、足前部抬起是背屈；足尖向下或踮腳是蹠屈。</li><li>講者強調背屈時踝關節較穩，並用高跟鞋中的蹠屈姿勢作對照。</li><li>背屈、蹠屈是距小腿關節主動作，需與足底向內、向外分開。</li></ul><div class=\"study-note teal\">教材核對：距骨滑車前方較寬，背屈時進入踝穴增加骨性穩定；不把任何背屈或鞋款當絕對不受傷。S122、S123。</div>"
   },
   {
    "id": "bones4-video-notes-48",
    "title": "48｜1:40:18–1:41:18｜內側三角韌帶與外側踝韌帶",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>內側由脛骨內踝連舟骨、跟骨及距骨，以三角韌帶總稱記憶。</li><li>外側連腓骨與距骨、跟骨，課堂先按骨端總稱。</li><li>看到踝扭傷題先判斷內／外側，再拆前、後與跟腓。</li></ul><div class=\"study-note teal\">教材核對：完整常用外側組為 ATFL、CFL、PTFL 三條；三角韌帶為淺深多束，不只有三根彼此獨立線。S122。</div>"
   },
   {
    "id": "bones4-video-notes-49",
    "title": "49｜1:41:18–1:42:36｜內翻口訣與旋後術語",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>講者示範足底向內，配 adduction 與 supination 的口訣，並回翻第一堂動作定義。</li><li>這一段的學習重點是實際足底方向，不要只由「旋」字聯想到前臂。</li><li>先分內翻／外翻與內收／外展，再讀完整三平面旋前／旋後。</li></ul><div class=\"study-note teal\">教材核對：現代足部開鏈旋後一般為內翻＋內收＋蹠屈；內翻本身為其中一個分量，不能循環等同旋後。S123、S132。</div>"
   },
   {
    "id": "bones4-video-notes-50",
    "title": "50｜1:42:36–1:44:24｜踝與距下、橫跗的分工",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>講者提問踝關節能不能內翻外翻，隨即明確距小腿關節主要背屈與蹠屈。</li><li>足部可做內翻外翻，是距下及橫跗等關節協同完成。</li><li>距骨上方和下方是區分這兩類運動的第一個定位點。</li></ul><div class=\"study-note teal\">教材核對：這是主要運動的功能分層，不是說三維實際運動完全沒有任何耦合小幅分量。S123。</div>"
   },
   {
    "id": "bones4-video-notes-51",
    "title": "51｜1:44:24–1:45:30｜距下、橫跗與跟骰區的配對",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>距下骨性配對為距骨與跟骨；橫跗的內側與外側分別回到舟骨及骰骨路線。</li><li>片中內側講到距、跟、舟的複合承託關係，外側把舟骨路線換成跟骰。</li><li>用關節線表圖區分橫跗 Chopart 與更前方跗蹠 Lisfranc。</li></ul><div class=\"study-note teal\">教材核對：標準橫跗／Chopart 由距舟及跟骰兩部分組成；內側可連到距跟舟功能複合，但不能說任何距跟關節都屬 Chopart。S123。</div>"
   },
   {
    "id": "bones4-video-notes-52",
    "title": "52｜1:45:30–1:47:18｜過度內翻與外側韌帶受損",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>講者用不平地面或樓梯落差說明常見內翻扭傷。</li><li>足底向內傾斜時，外側韌帶被牽拉，因此「內翻」對應外側損傷。</li><li>先按姿勢判斷被拉的一側，再從距腓、跟腓拆成具體韌帶。</li></ul><div class=\"study-note teal\">教材核對：蹠屈合併內翻時 ATFL 常受影響，嚴重度不同可能合併 CFL／其他結構；不能只由扭傷方向決定全部傷勢。S122。</div>"
   },
   {
    "id": "bones4-video-notes-53",
    "title": "53｜1:47:18–1:48:00｜本片結尾與下一堂的範圍",
    "html": "<div class=\"enrichment-label\">影片重述</div><ul><li>講者回顧已完成膝、髖、踝與足部的關節，結束這部課。</li><li>顳顎關節預告留到後面肌肉一起解釋，本站不會把下一堂內容補造成這一片講過。</li><li>複習建議回到骨盆通道、髖血供、膝韌帶、七跗骨和足弓五張整合表。</li></ul>"
   },
   {
    "id": "bones4-video-notes-54",
    "title": "54｜跨頁閱讀指引",
    "html": "<div class=\"enrichment-label\">閱讀指引</div><p>回看時先以時間索引定位，再選主題子頁讀圖像與比較表；本章結尾到足弓、足部內翻／外翻以及肌腱的整合，不延伸冒充未上傳的後續影片。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">想加強</th><th scope=\"col\">頁面</th></tr></thead><tbody><tr><td>坐骨孔與陰部神經</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/pelvic-passages\">骨盆通道</a></td></tr><tr><td>ACL／PCL 和 MCL／LCL</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/knee-ligaments\">膝韌帶</a></td></tr><tr><td>七跗骨空間位置</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/tarsals\">足骨圖像</a></td></tr><tr><td>足底拉索、旋前旋後</td><td><a href=\"#/subject/anatomy/chapter/bones4/topic/foot-arches\">足弓</a>／<a href=\"#/subject/anatomy/chapter/bones4/topic/foot-movement\">足部動作</a></td></tr></tbody></table></div>"
   }
  ]
 },
 {
  "id": "pelvic-passages",
  "title": "骨盆韌帶、坐骨孔與陰部神經",
  "english": "Pelvic ligaments · sciatic foramina · pudendal nerve",
  "summary": "由薦棘／薦結節韌帶出發，建立梨狀肌上下通道與陰部神經繞行路線。",
  "sources": [
   "S72",
   "S108",
   "S114",
   "S125",
   "S75"
  ],
  "sections": [
   {
    "id": "pelvic-passages-1",
    "title": "01｜由第三部接續：體重如何傳到骨盆",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><p>影片開頭延續薦骨、髖骨與後方兩條韌帶的關係。把骨盆當成一個承重環：上方重量由腰薦區進入，經薦髂關節傳至兩側髖骨；站立時再經髖臼與股骨頭傳到下肢。薦髂韌帶與薦棘、薦結節韌帶共同限制過度位移。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">附著／位置</th><th scope=\"col\">理解重點</th></tr></thead><tbody><tr><td>薦棘韌帶 sacrospinous</td><td>薦骨、尾骨附近 → 坐骨棘</td><td>較深，與大／小坐骨孔分界相關</td></tr><tr><td>薦結節韌帶 sacrotuberous</td><td>後方髂骨、薦尾骨區 → 坐骨結節</td><td>較表淺，跨度較長</td></tr><tr><td>薦髂韌帶系統</td><td>薦骨與髂骨之間，含強大的骨間部分</td><td>不能把整個承重穩定只歸給一條韌帶</td></tr><tr><td>坐骨棘／坐骨結節</td><td>一個較尖突出、一個較大承重附著區</td><td>名稱與韌帶終點必須成對背</td></tr></tbody></table></div><div class=\"study-note teal\">講者「把後方抓住」是力學比喻。骨盆有小幅 nutation／counternutation；韌帶在不同方向限制活動，不把它理解成完全沒有運動。</div>"
   },
   {
    "id": "pelvic-passages-2",
    "title": "02｜從切跡變成孔：先看骨，再補韌帶",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><figure class=\"enriched-figure\"><a href=\"assets/os-pelvic-ligaments.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：骨盆後方韌帶與大、小坐骨孔教材圖\"><img src=\"assets/os-pelvic-ligaments.webp\" alt=\"骨盆後方韌帶與大、小坐骨孔教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 8.14；CC BY-NC-SA 4.0。<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-3-the-pelvic-girdle-and-pelvis\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 辨認坐骨棘和坐骨結節，再對照兩條韌帶。 點圖可放大。</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">空間</th><th scope=\"col\">主要骨性與韌帶框架</th><th scope=\"col\">不是什麼</th></tr></thead><tbody><tr><td>大坐骨切跡</td><td>髖骨後緣、坐骨棘上方</td><td>乾燥髖骨上尚未完整閉合的孔</td></tr><tr><td>大坐骨孔</td><td>切跡加薦棘、薦結節等邊界</td><td>不是閉孔</td></tr><tr><td>小坐骨切跡</td><td>坐骨棘與坐骨結節之間</td><td>不是髖臼下方的閉孔</td></tr><tr><td>小坐骨孔</td><td>小切跡加薦棘、薦結節韌帶</td><td>不是骨盆下口全部</td></tr><tr><td>閉孔與閉孔管</td><td>大孔多被閉孔膜覆蓋，上緣留管</td><td>主要神經血管走管，不是穿過膜中央</td></tr></tbody></table></div>"
   },
   {
    "id": "pelvic-passages-3",
    "title": "03｜梨狀肌是一把分區尺",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><p>梨狀肌由薦骨前面起，經大坐骨孔走向大轉子。它把大坐骨孔區分為梨狀肌上、下兩個通路；看到題目說「上孔／下孔」，先確認是在說梨狀肌上下區，而不是大、小坐骨孔。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">通路</th><th scope=\"col\">主要構造</th><th scope=\"col\">辨認提示</th></tr></thead><tbody><tr><td>梨狀肌上方</td><td>臀上神經、臀上動靜脈</td><td>臀上神經 L4–S1，支配臀中、臀小、闊筋膜張肌</td></tr><tr><td>梨狀肌下方</td><td>坐骨神經、臀下神經與血管、股後皮神經</td><td>坐骨神經一般在下方；有解剖變異</td></tr><tr><td>梨狀肌下方另有</td><td>陰部神經、內陰部動靜脈、閉孔內肌神經、股方肌神經</td><td>不能只背坐骨神經一項</td></tr><tr><td>小坐骨孔</td><td>閉孔內肌腱、閉孔內肌神經、陰部神經與內陰部血管</td><td>陰部神經先離開骨盆，再通向會陰</td></tr><tr><td>閉孔管</td><td>閉孔神經與血管</td><td>閉孔神經不改走坐骨孔</td></tr></tbody></table></div>"
   },
   {
    "id": "pelvic-passages-4",
    "title": "04｜陰部神經：同時出現於大、小坐骨孔",
    "html": "<div class=\"enrichment-label\">教材延伸 · 通路與功能核對</div><figure class=\"enriched-figure\"><a href=\"assets/bones4-pudendal.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：陰部神經由骨盆繞坐骨棘到會陰的原創路線圖\"><img src=\"assets/bones4-pudendal.svg\" alt=\"陰部神經由骨盆繞坐骨棘到會陰的原創路線圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>本站原創概念圖，非等比例；不是實際影像。 把兩個孔、坐骨棘與陰部管分成四個定位點。 點圖可放大。</figcaption></figure><p>陰部神經主要來自 S2–S4。它由大坐骨孔、梨狀肌下方離開骨盆，在坐骨棘及薦棘韌帶附近繞行，從小坐骨孔進入會陰，再沿閉孔內肌筋膜形成的陰部管（Alcock canal）前行。內陰部血管大致伴行。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">位置</th><th scope=\"col\">要連到的構造</th><th scope=\"col\">易錯處</th></tr></thead><tbody><tr><td>坐骨棘附近</td><td>薦棘韌帶與陰部神經</td><td>不是坐骨結節中央</td></tr><tr><td>陰部管</td><td>閉孔內肌筋膜</td><td>不是閉孔管</td></tr><tr><td>主要終末分支</td><td>下直腸、會陰、陰莖／陰蒂背神經</td><td>分支起點有變異，勿硬套單一圖</td></tr><tr><td>功能框架</td><td>會陰感覺、外括約肌等軀體運動</td><td>與 S2–S4 骨盆內臟神經的副交感功能分開</td></tr></tbody></table></div><div class=\"study-note teal\">「再進骨盆」是常見口語；更精確是經小坐骨孔到會陰區，不能推成再回到骨盆腹膜腔。</div>"
   },
   {
    "id": "pelvic-passages-5",
    "title": "05｜神經與動脈來源不可一起猜",
    "html": "<div class=\"enrichment-label\">教材延伸 · 神經血管整理</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">來源</th><th scope=\"col\">通道</th></tr></thead><tbody><tr><td>臀上／臀下動脈</td><td>髂內動脈分支系統</td><td>大坐骨孔，分別梨狀肌上／下</td></tr><tr><td>內陰部動脈</td><td>髂內動脈系統</td><td>大坐骨孔 → 小坐骨孔 → 會陰</td></tr><tr><td>閉孔動脈</td><td>常由髂內系統，可有變異</td><td>閉孔管</td></tr><tr><td>股動脈</td><td>髂外動脈經腹股溝韌帶下延續</td><td>前方進大腿</td></tr><tr><td>股神經 L2–L4</td><td>腰神經叢</td><td>腹股溝韌帶下；不在股鞘內</td></tr><tr><td>閉孔神經 L2–L4</td><td>腰神經叢</td><td>閉孔管</td></tr><tr><td>坐骨神經 L4–S3</td><td>薦神經叢</td><td>通常梨狀肌下方</td></tr></tbody></table></div>"
   }
  ]
 },
 {
  "id": "hip-joint",
  "title": "髖臼、髖關節與股骨頭血供",
  "english": "Hip joint · acetabular labrum · femoral head blood supply",
  "summary": "把髖臼月狀面、關節唇、囊韌帶與股骨頭韌帶分開，連到囊內骨折風險。",
  "sources": [
   "S48",
   "S115",
   "S116",
   "S117",
   "S131",
   "S72",
   "S124"
  ],
  "sections": [
   {
    "id": "hip-joint-1",
    "title": "01｜髖臼不是整個碗都覆蓋關節軟骨",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><figure class=\"enriched-figure\"><a href=\"assets/os-hip-joint.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：髖關節冠狀切面及前後囊韌帶的教材圖\"><img src=\"assets/os-hip-joint.webp\" alt=\"髖關節冠狀切面及前後囊韌帶的教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 9.18；CC BY-NC-SA 4.0。<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/9-6-anatomy-of-selected-synovial-joints\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 上圖看關節唇與股骨頭，下圖看前、後韌帶。 點圖可放大。</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">位置與材質</th><th scope=\"col\">作用／辨認</th></tr></thead><tbody><tr><td>髖臼月狀面 lunate surface</td><td>周邊馬蹄形關節面，覆透明軟骨</td><td>與股骨頭承重接觸</td></tr><tr><td>髖臼窩 acetabular fossa</td><td>中央非關節區</td><td>不是月狀面</td></tr><tr><td>髖臼切跡 acetabular notch</td><td>下方缺口</td><td>由髖臼橫韌帶跨過</td></tr><tr><td>髖臼唇 acetabular labrum</td><td>髖臼邊緣的纖維軟骨環</td><td>加深窩，參與密封與穩定</td></tr><tr><td>股骨頭凹 fovea capitis</td><td>股骨頭上的小凹</td><td>股骨頭韌帶附著；不在股骨頸</td></tr></tbody></table></div>"
   },
   {
    "id": "hip-joint-2",
    "title": "02｜球窩關節：活動與穩定如何並存",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><p>髖關節由股骨頭與髖臼形成多軸球窩關節。與肩關節相比，髖臼較深、關節唇和囊韌帶較強，周圍肌肉也提供動態穩定；因此不能只用「球窩」推論活動幅度相同。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">動作</th><th scope=\"col\">空間方向</th><th scope=\"col\">關係</th></tr></thead><tbody><tr><td>屈曲／伸展</td><td>前後活動</td><td>屈髖時關節囊較鬆，伸展時螺旋囊韌帶趨緊</td></tr><tr><td>外展／內收</td><td>向外／向中線</td><td>恥股韌帶等限制過度外展</td></tr><tr><td>內旋／外旋</td><td>繞股骨長軸</td><td>各韌帶的限制受屈伸位置影響</td></tr><tr><td>環轉</td><td>多動作組合</td><td>不是多一條獨立旋轉軸</td></tr><tr><td>站立承重</td><td>股骨頭在髖臼內</td><td>靜態囊韌帶與動態肌肉共同穩定</td></tr></tbody></table></div>"
   },
   {
    "id": "hip-joint-3",
    "title": "03｜三條囊韌帶與一條頭韌帶",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">韌帶</th><th scope=\"col\">骨性方向</th><th scope=\"col\">考點</th></tr></thead><tbody><tr><td>髂股韌帶 iliofemoral</td><td>髂前下棘／髖臼附近 → 轉子間線</td><td>Y 形，強力限制過度伸展</td></tr><tr><td>恥股韌帶 pubofemoral</td><td>恥骨、髖臼前下區 → 囊下部</td><td>限制過度外展與伸展</td></tr><tr><td>坐股韌帶 ischiofemoral</td><td>髖臼後方坐骨區 → 囊／股骨頸方向</td><td>後方螺旋纖維，伸展時緊</td></tr><tr><td>股骨頭韌帶 ligament of head</td><td>股骨頭凹 → 髖臼切跡兩側／橫韌帶</td><td>關節囊內、滑膜包覆，攜帶小血管；不是主要承重韌帶</td></tr><tr><td>髖臼橫韌帶 transverse acetabular</td><td>跨髖臼切跡</td><td>不等於頭韌帶，也不是膝的橫韌帶</td></tr></tbody></table></div><p>動作限制是常用解剖配對；完整生物力學還要看不同束、關節角度與周圍肌肉，不把每一條韌帶只配成唯一動作。</p>"
   },
   {
    "id": "hip-joint-4",
    "title": "04｜血供：把閉孔動脈與旋股動脈分清楚",
    "html": "<div class=\"enrichment-label\">教材延伸 · 血供更正</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">來源</th><th scope=\"col\">到股骨頭的路徑</th><th scope=\"col\">相對重要性</th></tr></thead><tbody><tr><td>旋股內側動脈</td><td>沿股骨頸上行的支持帶血管</td><td>成人主要來源</td></tr><tr><td>旋股外側動脈</td><td>頸部前方等區域貢獻</td><td>有貢獻，不能說完全無用</td></tr><tr><td>股骨頭韌帶中的血管</td><td>常來自閉孔動脈分支，沿韌帶到頭凹</td><td>兒童相對重要；成人通常不足以獨力維持全頭血供</td></tr><tr><td>支持帶血管 retinacular vessels</td><td>沿頸部、靠近關節囊反折走行</td><td>囊內骨折移位可能受損</td></tr></tbody></table></div><div class=\"study-note teal\">股骨頭韌帶有血管，不等於它是所有年齡的主要血供。也不要把「外側上行支持帶支」的方位名稱誤認成全部來自旋股外側動脈。</div>"
   },
   {
    "id": "hip-joint-5",
    "title": "05｜解剖臨床連結：股骨頸骨折與後脫位",
    "html": "<div class=\"enrichment-label\">教材延伸 · 解剖應用</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">情境</th><th scope=\"col\">先找什麼</th><th scope=\"col\">解剖風險</th></tr></thead><tbody><tr><td>移位股骨頸囊內骨折</td><td>支持帶血管是否受損</td><td>股骨頭缺血性壞死與癒合問題；不是每例必然壞死</td></tr><tr><td>轉子間骨折</td><td>位於轉子區，相對囊外</td><td>和股骨頸骨折的血供風險不同</td></tr><tr><td>髖後脫位</td><td>股骨頭向後、接近坐骨神經</td><td>可能合併坐骨神經損傷</td></tr><tr><td>髖痛合併膝痛</td><td>共同關節感覺傳入</td><td>需想到牽涉痛，不能只由膝痛排除髖病變</td></tr></tbody></table></div>"
   },
   {
    "id": "hip-joint-6",
    "title": "06｜片中六大動脈與兩種吻合",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">課堂分組</th><th scope=\"col\">動脈名稱</th><th scope=\"col\">來源框架</th></tr></thead><tbody><tr><td>a–c</td><td>閉孔、臀上、臀下</td><td>髂內動脈系統</td></tr><tr><td>d–f</td><td>旋股內側、旋股外側、第一穿支</td><td>股／深股動脈系統</td></tr><tr><td>轉子吻合</td><td>臀上、臀下、旋股內外側的交通</td><td>常強調上行支；不能等同頭韌帶血管</td></tr><tr><td>十字吻合</td><td>臀下、兩旋股橫支、第一穿支上行支</td><td>較下方，小轉子附近</td></tr></tbody></table></div><div class=\"study-note teal\">片中以相鄰四條作記憶。實際吻合的分支、大小及來源存在變異；清單是髖周框架，不是股骨頭血供重要性的排序。S116、S124。</div>"
   }
  ]
 },
 {
  "id": "pelvic-cavity",
  "title": "骨盆入口、出口與產科徑線",
  "english": "Pelvic inlet · outlet · pelvic diameters",
  "summary": "分開大／小骨盆、界線、骨盆傾斜與不同平面的徑線。",
  "sources": [
   "S72",
   "S135",
   "S136",
   "S108"
  ],
  "sections": [
   {
    "id": "pelvic-cavity-1",
    "title": "01｜大／小骨盆：不是看髖骨上下各一半",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><p>界線（linea terminalis／pelvic brim）形成骨盆入口的周緣，將上方的大骨盆／假骨盆與下方的小骨盆／真骨盆分開。大骨盆延續腹部，小骨盆更直接包圍盆腔器官與產道。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">名稱</th><th scope=\"col\">邊界／區域</th><th scope=\"col\">避免混淆</th></tr></thead><tbody><tr><td>骨盆入口 inlet</td><td>小骨盆上口，由界線圍成</td><td>不是骨盆出口</td></tr><tr><td>骨盆出口 outlet</td><td>小骨盆下口</td><td>不是閉孔，也不是大坐骨孔</td></tr><tr><td>大骨盆 greater／false</td><td>界線上方</td><td>不是「假的骨頭」</td></tr><tr><td>小骨盆 lesser／true</td><td>入口到出口的盆腔區域</td><td>不是小坐骨孔</td></tr><tr><td>骨盆底 pelvic floor</td><td>肌肉與筋膜為主的支撐層</td><td>不是單純出口那圈骨頭</td></tr></tbody></table></div>"
   },
   {
    "id": "pelvic-cavity-2",
    "title": "02｜入口一圈：由後方一路讀到前方",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">區段</th><th scope=\"col\">主要界線</th><th scope=\"col\">定位提示</th></tr></thead><tbody><tr><td>後方</td><td>薦岬與薦骨翼</td><td>薦岬是 S1 前方突出</td></tr><tr><td>外側</td><td>髂骨弓狀線</td><td>髂窩下方的弧形隆起</td></tr><tr><td>前外側</td><td>恥骨梳／恥骨梳線</td><td>恥骨上支的上緣</td></tr><tr><td>前方</td><td>恥骨嵴、恥骨聯合上緣</td><td>恥骨結節在外側端附近</td></tr><tr><td>整圈合稱</td><td>界線／骨盆緣</td><td>不是把坐骨棘也當成入口邊界</td></tr></tbody></table></div><p>影片以側面及斜筒圖解釋骨盆傾斜。解剖姿勢下入口平面並非水平；投影、測量平面不同，徑線也不能互換。</p>"
   },
   {
    "id": "pelvic-cavity-3",
    "title": "03｜出口與中骨盆的定位",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">平面／構造</th><th scope=\"col\">界限或標記</th><th scope=\"col\">與入口差異</th></tr></thead><tbody><tr><td>出口前方</td><td>恥骨聯合下緣、恥骨弓</td><td>入口以前上緣為主</td></tr><tr><td>出口兩側</td><td>坐恥支、坐骨結節</td><td>不是髂嵴</td></tr><tr><td>出口後方</td><td>薦結節韌帶、尾骨尖</td><td>不能用薦岬作後方終點</td></tr><tr><td>中骨盆</td><td>坐骨棘層級；棘間徑相關</td><td>入口的橫徑不等於棘間徑</td></tr><tr><td>尾骨活動</td><td>可影響出口前後徑</td><td>靜態骨盆圖不能涵蓋所有分娩動態</td></tr></tbody></table></div>"
   },
   {
    "id": "pelvic-cavity-4",
    "title": "04｜三種 conjugate：看兩端，不死背名稱",
    "html": "<div class=\"enrichment-label\">教材延伸 · 徑線定義</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">徑線</th><th scope=\"col\">兩端</th><th scope=\"col\">理解</th></tr></thead><tbody><tr><td>解剖／真結合徑 anatomical conjugate</td><td>薦岬 → 恥骨聯合上緣</td><td>入口的骨性前後參考</td></tr><tr><td>產科結合徑 obstetric conjugate</td><td>薦岬 → 恥骨聯合後面的最近點</td><td>胎頭通過入口的重要前後距離</td></tr><tr><td>對角結合徑 diagonal conjugate</td><td>薦岬 → 恥骨聯合下緣</td><td>與前兩者終點不同</td></tr><tr><td>棘間徑 interspinous</td><td>兩坐骨棘間</td><td>中骨盆橫向，不是結合徑</td></tr><tr><td>結節間徑 intertuberous</td><td>兩坐骨結節間</td><td>出口橫向</td></tr></tbody></table></div><div class=\"study-note teal\">影片的筒形示意與約略數字用來理解空間。徑線有個體、影像與定義差異；本站以端點和層級為主，不把單一公分值當每個人的標準。</div>"
   },
   {
    "id": "pelvic-cavity-5",
    "title": "05｜影片數值與 CPD 的使用範圍",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">片中記憶</th><th scope=\"col\">對應位置</th><th scope=\"col\">教材核對</th></tr></thead><tbody><tr><td>約 10.5 cm</td><td>入口前後徑</td><td>影片端點說法與產科結合徑有混用，先看定義</td></tr><tr><td>約 10 cm</td><td>中面坐骨棘間</td><td>個體與教材參考值可不同</td></tr><tr><td>約 11 cm</td><td>出口坐骨結節間</td><td>不推成每個人的固定寬度</td></tr><tr><td>CPD 頭盆不稱</td><td>胎頭與產道相對適應</td><td>不是由一個數字直接決定分娩方式</td></tr></tbody></table></div><div class=\"study-note teal\">骨盆形態、胎頭位置、軟組織與產程共同影響通過；片中時代性健保或剖腹產口頭例子不作現行規則。S135、S136。</div>"
   }
  ]
 },
 {
  "id": "pelvic-sex",
  "title": "骨盆形態差異與恥骨弓",
  "english": "Pelvic morphology · subpubic angle",
  "summary": "比較常見成人骨盆形態，保留個體重疊，避免把示意圖當絕對判別法。",
  "sources": [
   "S72",
   "S135"
  ],
  "sections": [
   {
    "id": "pelvic-sex-1",
    "title": "01｜用整組形態辨認，不只看一個角度",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><figure class=\"enriched-figure\"><a href=\"assets/os-pelvic-sex.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：典型女性與男性成人骨盆形態的教材比較圖\"><img src=\"assets/os-pelvic-sex.webp\" alt=\"典型女性與男性成人骨盆形態的教材比較圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 8.15；CC BY-NC-SA 4.0。<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-3-the-pelvic-girdle-and-pelvis\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 先看入口、腔深、出口，再看恥骨下角。 點圖可放大。</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較</th><th scope=\"col\">典型女性骨盆</th><th scope=\"col\">典型男性骨盆</th></tr></thead><tbody><tr><td>整體</td><td>較寬、骨相對較輕薄</td><td>較窄、相對厚重</td></tr><tr><td>入口</td><td>較圓或橫向橢圓</td><td>較心形</td></tr><tr><td>小骨盆腔</td><td>較寬、較淺</td><td>較窄、較深</td></tr><tr><td>出口</td><td>相對較大</td><td>相對較小</td></tr><tr><td>恥骨下角</td><td>較寬，常接近或大於直角</td><td>較窄</td></tr><tr><td>大坐骨切跡</td><td>相對較寬</td><td>相對較窄</td></tr><tr><td>薦骨</td><td>相對較短寬、彎曲較少</td><td>相對較長窄、彎曲較多</td></tr></tbody></table></div>"
   },
   {
    "id": "pelvic-sex-2",
    "title": "02｜入口、腔與出口是三個層級",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><p>影片把入口畫成心形和圓形，再把骨盆腔畫成收窄或較直的筒。圖像要和解剖層級對上：入口形狀、側壁收斂程度、坐骨棘突出程度及出口大小分別影響不同位置。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">層級</th><th scope=\"col\">判讀項目</th><th scope=\"col\">易錯處</th></tr></thead><tbody><tr><td>入口</td><td>形狀與前後／橫向空間</td><td>不能由入口形狀直接推定出口尺寸</td></tr><tr><td>中骨盆</td><td>側壁、坐骨棘與棘間空間</td><td>坐骨棘不是髂前上棘</td></tr><tr><td>出口</td><td>恥骨弓、結節間空間、尾骨</td><td>恥骨下角不是股骨頸幹角</td></tr><tr><td>恥骨弓</td><td>左右坐恥支形成的角</td><td>不是恥骨上支與髂骨的夾角</td></tr></tbody></table></div>"
   },
   {
    "id": "pelvic-sex-3",
    "title": "03｜考題的「典型」與真實個體差異",
    "html": "<div class=\"enrichment-label\">教材延伸 · 判讀限制</div><div class=\"study-note teal\">以上是成人骨盆形態的一般趨勢，存在重疊與變異；單一骨盆形狀或角度不能推斷個人的性別認同，也不能單憑它預測能否順利分娩。</div><p>國考辨圖時先找最有辨識力的整組線索；臨床產程則同時受胎位、胎頭、軟組織與動態影響。片中的性別口訣在本站只保留可核對的骨性比較，不把比喻當醫學判準。</p>"
   }
  ]
 },
 {
  "id": "femur",
  "title": "股骨、髕骨與肌肉附著",
  "english": "Femur · patella · muscle attachments",
  "summary": "由近端轉子到遠端髁，整理前後面、內外側與附著點。",
  "sources": [
   "S113",
   "S124",
   "S115",
   "S117"
  ],
  "sections": [
   {
    "id": "femur-1",
    "title": "01｜辨認左右與前後：頭向內，粗線在後",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><figure class=\"enriched-figure\"><a href=\"assets/os-femur.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：股骨與髕骨前後面標記的教材圖\"><img src=\"assets/os-femur.webp\" alt=\"股骨與髕骨前後面標記的教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 8.16；CC BY-NC-SA 4.0。<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-4-bones-of-the-lower-limb\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 先找股骨頭，再找前方轉子間線及後方粗線。 點圖可放大。</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">標記</th><th scope=\"col\">位置</th><th scope=\"col\">配對</th></tr></thead><tbody><tr><td>股骨頭 head</td><td>近端、朝內側</td><td>與髖臼關節</td></tr><tr><td>股骨頸 neck</td><td>頭與骨幹之間</td><td>囊內骨折／血供相關</td></tr><tr><td>大轉子 greater trochanter</td><td>近端外側</td><td>多條臀與短外旋肌附著</td></tr><tr><td>小轉子 lesser trochanter</td><td>近端後內側</td><td>髂腰肌止點</td></tr><tr><td>轉子間線 intertrochanteric line</td><td>前面</td><td>髖囊與韌帶附著相關</td></tr><tr><td>轉子間嵴 intertrochanteric crest</td><td>後面</td><td>方形結節與股方肌相關</td></tr><tr><td>粗線 linea aspera</td><td>骨幹後面</td><td>內收肌及股肌附著區</td></tr></tbody></table></div>"
   },
   {
    "id": "femur-2",
    "title": "02｜大轉子不是一個肌肉的專屬點",
    "html": "<div class=\"enrichment-label\">教材延伸 · 肌肉附著</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">肌肉</th><th scope=\"col\">股骨止點概括</th><th scope=\"col\">神經／功能提示</th></tr></thead><tbody><tr><td>臀中肌</td><td>大轉子外側面</td><td>臀上神經；外展與單腳站立穩定</td></tr><tr><td>臀小肌</td><td>大轉子前面</td><td>臀上神經；外展、內旋相關</td></tr><tr><td>梨狀肌</td><td>大轉子上緣</td><td>短外旋肌；梨狀肌神經</td></tr><tr><td>閉孔內肌＋孖肌</td><td>大轉子內側區</td><td>不能和閉孔外肌的轉子窩完全混為一談</td></tr><tr><td>閉孔外肌</td><td>轉子窩</td><td>閉孔神經</td></tr><tr><td>股方肌</td><td>轉子間嵴的方形結節附近</td><td>股方肌神經</td></tr><tr><td>髂腰肌</td><td>小轉子</td><td>主要屈髖；不是大轉子</td></tr></tbody></table></div><p>附著面的精確範圍和肌腱融合可有變異。先背近端骨性區域，再用肌肉圖核對具體面。</p>"
   },
   {
    "id": "femur-3",
    "title": "03｜骨幹與遠端：粗線、內收結節、髁與上髁",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">標記</th><th scope=\"col\">位置與構造</th><th scope=\"col\">常見錯配</th></tr></thead><tbody><tr><td>臀肌粗隆</td><td>近端後面</td><td>臀大肌部分止點；其他纖維到髂脛束</td></tr><tr><td>粗線內外唇</td><td>骨幹後面</td><td>不是前方可見的一條線</td></tr><tr><td>內收結節 adductor tubercle</td><td>內上髁上方</td><td>內收大肌腿後肌部分止點</td></tr><tr><td>內／外髁 condyles</td><td>遠端關節區</td><td>接脛骨，不把上髁當關節面</td></tr><tr><td>髁間窩 intercondylar fossa</td><td>遠端後方</td><td>十字韌帶股骨附著所在的內側面區域</td></tr><tr><td>髕面 patellar surface</td><td>遠端前方</td><td>髕骨關節滑動面</td></tr><tr><td>膕面 popliteal surface</td><td>遠端後方、兩髁上方</td><td>不是髕面</td></tr></tbody></table></div>"
   },
   {
    "id": "femur-4",
    "title": "04｜髕骨：籽骨與伸膝傳力鏈",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><div class=\"flow\"><div class=\"flow-step\">股四頭肌收縮</div><div class=\"flow-arrow\" aria-hidden=\"true\">↓</div><div class=\"flow-step\">股四頭肌腱 → 髕骨</div><div class=\"flow-arrow\" aria-hidden=\"true\">↓</div><div class=\"flow-step\">髕韌帶 → 脛骨粗隆</div><div class=\"flow-arrow\" aria-hidden=\"true\">↓</div><div class=\"flow-step\">伸膝並增加伸膝力臂</div></div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">項目</th><th scope=\"col\">正確配對</th><th scope=\"col\">區分</th></tr></thead><tbody><tr><td>髕骨</td><td>股四頭肌腱中的最大籽骨</td><td>不是短骨</td></tr><tr><td>關節面</td><td>後面與股骨髕面接觸</td><td>不與脛骨形成直接骨性關節</td></tr><tr><td>髕骨底／尖</td><td>底在上，尖在下</td><td>與頭端／尾端方向分開辨認</td></tr><tr><td>髕韌帶</td><td>髕骨尖到脛骨粗隆</td><td>骨到骨，但延續伸膝裝置傳力</td></tr><tr><td>股四頭肌腱</td><td>肌肉到髕骨</td><td>不是髕韌帶同名的部分</td></tr></tbody></table></div>"
   },
   {
    "id": "femur-5",
    "title": "05｜相似字的辨認表",
    "html": "<div class=\"enrichment-label\">教材延伸 · 中英文整合</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">英文</th><th scope=\"col\">中文</th><th scope=\"col\">辨認</th></tr></thead><tbody><tr><td>Trochanter</td><td>轉子</td><td>股骨近端</td></tr><tr><td>Tubercle</td><td>結節</td><td>小突出；具體名稱決定附著</td></tr><tr><td>Tuberosity</td><td>粗隆</td><td>粗糙較大附著區</td></tr><tr><td>Condyle</td><td>髁</td><td>圓／隆起關節區</td></tr><tr><td>Epicondyle</td><td>上髁</td><td>髁旁附著區</td></tr><tr><td>Intercondylar</td><td>髁間</td><td>股骨髁間窩 vs 脛骨髁間隆起</td></tr></tbody></table></div>"
   },
   {
    "id": "femur-6",
    "title": "06｜粗線與近端肌肉附著補表",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">骨點</th><th scope=\"col\">配對</th><th scope=\"col\">位置核對</th></tr></thead><tbody><tr><td>恥骨肌線 pectineal line</td><td>恥骨肌</td><td>小轉子下方到粗線附近</td></tr><tr><td>臀肌粗隆 gluteal tuberosity</td><td>臀大肌部分纖維</td><td>股骨近端後方，另一主要止點是髂脛束</td></tr><tr><td>粗線內唇／附近</td><td>內側廣肌及多條內收肌相關附著</td><td>不是隻有一塊肌肉</td></tr><tr><td>粗線外唇／附近</td><td>外側廣肌、股二頭肌短頭等</td><td>股二頭肌長頭不是由粗線起</td></tr><tr><td>內收結節</td><td>內收大肌腿後肌部分</td><td>內上髁上方的骨點</td></tr></tbody></table></div><div class=\"study-note teal\">影片借用肱骨解剖頸／外科頸作類比；股骨常用股骨頸、轉子間、轉子下等區域區分，不照搬肱骨的標準二分名稱。S113、S117、S124。</div>"
   }
  ]
 },
 {
  "id": "knee-meniscus",
  "title": "膝關節、半月板與滑膜腔",
  "english": "Knee joint · menisci · synovial relations",
  "summary": "分開股脛、股髕關節，比較半月板形態、附著、血供與活動性。",
  "sources": [
   "S48",
   "S120",
   "S121",
   "S124",
   "S130"
  ],
  "sections": [
   {
    "id": "knee-meniscus-1",
    "title": "01｜膝的骨性接觸：不是三塊骨全部互接",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><figure class=\"enriched-figure\"><a href=\"assets/os-knee.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：膝關節矢狀切面、脛骨俯視與前方韌帶教材圖\"><img src=\"assets/os-knee.webp\" alt=\"膝關節矢狀切面、脛骨俯視與前方韌帶教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 9.19；CC BY-NC-SA 4.0。<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/9-6-anatomy-of-selected-synovial-joints\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 上左讀層次，上右讀半月板，下圖讀側副韌帶。 點圖可放大。</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">關節組成</th><th scope=\"col\">接觸</th><th scope=\"col\">判讀</th></tr></thead><tbody><tr><td>內側股脛</td><td>股骨內髁與脛骨內髁平臺</td><td>中間有內側半月板</td></tr><tr><td>外側股脛</td><td>股骨外髁與脛骨外髁平臺</td><td>中間有外側半月板</td></tr><tr><td>股髕</td><td>髕骨後面與股骨髕面</td><td>髕骨不直接接脛骨</td></tr><tr><td>近端脛腓</td><td>腓骨頭與脛骨外髁下方關節面</td><td>屬相鄰獨立關節；不是股脛關節的一個髁</td></tr><tr><td>主要運動</td><td>屈伸，屈膝時可有一定旋轉</td><td>不是在所有角度都能任意旋轉</td></tr></tbody></table></div>"
   },
   {
    "id": "knee-meniscus-2",
    "title": "02｜半月板：纖維軟骨，外厚內薄",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較</th><th scope=\"col\">內側半月板</th><th scope=\"col\">外側半月板</th></tr></thead><tbody><tr><td>俯視形態</td><td>較開放的 C 形</td><td>較接近圓／O 形</td></tr><tr><td>截面</td><td>外周厚，內緣薄</td><td>外周厚，內緣薄</td></tr><tr><td>連接</td><td>與關節囊、MCL 深部關係緊密</td><td>LCL 不直接附著其上；膕肌腱相關</td></tr><tr><td>活動</td><td>相對較小</td><td>相對較大</td></tr><tr><td>前／後角</td><td>附著脛骨髁間區</td><td>附著脛骨髁間區</td></tr><tr><td>功用</td><td>提高吻合度、分配負荷、穩定與潤滑</td><td>同樣不只是填空的墊片</td></tr></tbody></table></div>"
   },
   {
    "id": "knee-meniscus-3",
    "title": "03｜滑膜、關節囊與十字韌帶的位置",
    "html": "<div class=\"enrichment-label\">教材延伸 · 層次核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">關節囊內／外</th><th scope=\"col\">滑膜腔關係</th></tr></thead><tbody><tr><td>ACL／PCL</td><td>囊內</td><td>滑膜外；不是自由暴露在滑膜腔中</td></tr><tr><td>半月板</td><td>囊內關節面之間</td><td>外周有囊附著，內緣面向關節腔</td></tr><tr><td>髕下脂肪墊</td><td>纖維囊內</td><td>滑膜外，可在矢狀圖辨認</td></tr><tr><td>膕肌腱近端</td><td>囊內部分</td><td>滑膜外，與外側半月板後外側區相關</td></tr><tr><td>股四頭肌腱、髕韌帶</td><td>前方伸膝系統</td><td>不把整條肌腱說成滑膜腔內容物</td></tr></tbody></table></div><div class=\"study-note teal\">囊內不等於滑膜腔內。題目問 intracapsular、intra-articular、extrasynovial 時，要讀完整限定詞。</div>"
   },
   {
    "id": "knee-meniscus-4",
    "title": "04｜血供與損傷：內外側、急慢性要分開",
    "html": "<div class=\"enrichment-label\">教材延伸 · 易錯更正</div><p>半月板外周血管較豐富，越靠自由內緣血供越少。解題時可以用 red-red／red-white／white-white 概念記憶相對血供，不能只由區域名稱保證修復或治療結果。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">說法</th><th scope=\"col\">較準確理解</th><th scope=\"col\">避免過度簡化</th></tr></thead><tbody><tr><td>內側較固定</td><td>與囊及 MCL 關係使其活動較小</td><td>不推論每個病人的損傷必定在內側</td></tr><tr><td>經典 unhappy triad</td><td>ACL＋MCL＋內側半月板</td><td>是傳統名稱配對</td></tr><tr><td>急性 ACL／MCL 合併傷</td><td>外側半月板傷也常見</td><td>不是隻有經典三聯組合</td></tr><tr><td>慢性 ACL 不穩定</td><td>可增加內側半月板負荷與後續損傷</td><td>與急性創傷情境不同</td></tr></tbody></table></div>"
   },
   {
    "id": "knee-meniscus-5",
    "title": "05｜滑液囊與膝周血管的課堂框架",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">位置／來源</th><th scope=\"col\">讀圖</th></tr></thead><tbody><tr><td>髕上囊 suprapatellar</td><td>股四頭肌腱下方，常與膝腔相通</td><td>不能把所有滑液囊都當完全封閉獨立</td></tr><tr><td>髕前囊 prepatellar</td><td>髕骨前、皮膚與骨之間</td><td>與關節囊不是同一層</td></tr><tr><td>髕下淺囊</td><td>髕韌帶／脛骨粗隆前與皮下之間</td><td>淺、深分兩個位置</td></tr><tr><td>髕下深囊</td><td>髕韌帶後與脛骨前面之間</td><td>不能推成最多囊的普遍排名</td></tr><tr><td>膝周動脈吻合</td><td>股、膕、脛前等動脈分支參與</td><td>要辨認膝動脈、下降與回返支，不只背主幹</td></tr></tbody></table></div>"
   }
  ]
 },
 {
  "id": "knee-ligaments",
  "title": "ACL、PCL、側副韌帶與膝解鎖",
  "english": "Cruciate · collateral ligaments · screw-home mechanism",
  "summary": "由附著點推限制方向，再比較開鏈／閉鏈的鎖定與膕肌作用。",
  "sources": [
   "S118",
   "S119",
   "S121",
   "S124",
   "S48"
  ],
  "sections": [
   {
    "id": "knee-ligaments-1",
    "title": "01｜十字韌帶命名以脛骨端為準",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><figure class=\"enriched-figure\"><a href=\"assets/bones4-cruciates.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：ACL 與 PCL 骨性附著及相對脛骨移動限制的原創圖\"><img src=\"assets/bones4-cruciates.svg\" alt=\"ACL 與 PCL 骨性附著及相對脛骨移動限制的原創圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>本站原創概念圖，非等比例；不是實際影像。 這是配對圖，不是把兩束畫成真實正投影。 點圖可放大。</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">韌帶</th><th scope=\"col\">脛骨附著</th><th scope=\"col\">股骨附著</th><th scope=\"col\">主要限制</th></tr></thead><tbody><tr><td>ACL 前十字</td><td>前髁間區</td><td>外髁內側面，偏後方區</td><td>脛骨相對股骨過度前移</td></tr><tr><td>PCL 後十字</td><td>後髁間區、後方平臺下方附近</td><td>內髁外側面，偏前方區</td><td>脛骨相對股骨過度後移</td></tr></tbody></table></div><p>兩條韌帶向上走行交叉。前／後不是由整條韌帶在每個畫面裡的位置命名，也不是由附著股骨哪個髁命名。</p>"
   },
   {
    "id": "knee-ligaments-2",
    "title": "02｜先固定參考骨：同一限制能換兩種說法",
    "html": "<div class=\"enrichment-label\">教材延伸 · 相對位移</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">參考方式</th><th scope=\"col\">ACL</th><th scope=\"col\">PCL</th></tr></thead><tbody><tr><td>固定股骨，看脛骨</td><td>限制脛骨前移</td><td>限制脛骨後移</td></tr><tr><td>固定脛骨，看股骨</td><td>限制股骨後移</td><td>限制股骨前移</td></tr><tr><td>檢查線索</td><td>Lachman／前抽屜，另有 pivot shift</td><td>後抽屜、posterior sag</td></tr><tr><td>損傷機轉示例</td><td>急停轉向、非接觸扭轉等</td><td>屈膝時脛骨受向後衝擊，如 dashboard injury</td></tr><tr><td>其他功能</td><td>參與旋轉穩定；不同束張力隨角度改變</td><td>與後外／後內側結構共同穩定</td></tr></tbody></table></div><div class=\"study-note teal\">考題只說「防止往前」時，必須補問哪塊骨相對哪塊骨。檢查名稱是解剖連結，不代替完整臨床評估。</div>"
   },
   {
    "id": "knee-ligaments-3",
    "title": "03｜MCL 與 LCL：一片、一條，半月板關係不同",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較</th><th scope=\"col\">MCL／脛側副韌帶</th><th scope=\"col\">LCL／腓側副韌帶</th></tr></thead><tbody><tr><td>位置</td><td>內側、較扁寬</td><td>外側、較索狀</td></tr><tr><td>骨端</td><td>股骨內上髁 → 脛骨內側</td><td>股骨外上髁 → 腓骨頭</td></tr><tr><td>主要抵抗</td><td>外翻 valgus，內側張開</td><td>內翻 varus，外側張開</td></tr><tr><td>半月板</td><td>深部與內側半月板附著相關</td><td>不直接附著外側半月板</td></tr><tr><td>其他構造</td><td>與後內側囊結構共同作用</td><td>膕肌腱在深面附近；後外側角重要</td></tr><tr><td>張力</td><td>一般伸膝時較緊</td><td>一般伸膝時較緊</td></tr></tbody></table></div>"
   },
   {
    "id": "knee-ligaments-4",
    "title": "04｜Screw-home：開鏈與閉鏈要對換",
    "html": "<div class=\"enrichment-label\">教材延伸 · 運動機制</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">階段</th><th scope=\"col\">開鏈：腳可自由移動</th><th scope=\"col\">閉鏈：腳固定、站立</th></tr></thead><tbody><tr><td>伸膝末段鎖定</td><td>脛骨相對股骨外旋</td><td>股骨相對脛骨內旋</td></tr><tr><td>開始屈膝解鎖</td><td>膕肌使脛骨內旋</td><td>膕肌使股骨外旋</td></tr><tr><td>共同結果</td><td>從較穩定伸直轉為可屈曲狀態</td><td>同樣是解除末段鎖定</td></tr><tr><td>不要混淆</td><td>不是膝完全沒有旋轉</td><td>不是股骨與脛骨同時都內旋</td></tr></tbody></table></div><p>膕肌由股骨外髁區的肌腱起，止於脛骨後面、比目魚肌線上方區域。它除了啟動解鎖，也參與後外側穩定與半月板運動。</p>"
   },
   {
    "id": "knee-ligaments-5",
    "title": "05｜後方囊加強與常見三聯傷",
    "html": "<div class=\"enrichment-label\">教材延伸 · 後囊與應用</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">構造／題型</th><th scope=\"col\">配對</th><th scope=\"col\">區分</th></tr></thead><tbody><tr><td>斜膕韌帶 oblique popliteal</td><td>與半膜肌腱擴展相關，強化後囊</td><td>不等於膕肌腱</td></tr><tr><td>弓狀膕韌帶 arcuate popliteal</td><td>腓骨頭附近向後囊延伸，跨膕肌相關區</td><td>不是 ACL 或 PCL</td></tr><tr><td>外側受撞造成膝外翻</td><td>MCL 受張力，可能有其他合併傷</td><td>「外側撞」不等於只傷外側韌帶</td></tr><tr><td>傳統不幸三聯傷</td><td>ACL＋MCL＋內側半月板</td><td>實際常有外側半月板／其他結構傷，見來源頁更正</td></tr></tbody></table></div>"
   }
  ]
 },
 {
  "id": "tibia-fibula",
  "title": "脛骨、腓骨、內外踝與神經",
  "english": "Tibia · fibula · malleoli · common fibular nerve",
  "summary": "比較承重、關節、肌腱附著與腓骨頸神經風險。",
  "sources": [
   "S113",
   "S122",
   "S124",
   "S128",
   "S132"
  ],
  "sections": [
   {
    "id": "tibia-fibula-1",
    "title": "01｜一粗一細：位置、關節與承重",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><figure class=\"enriched-figure\"><a href=\"assets/os-tibia-fibula.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：脛骨與腓骨前後面、比目魚肌線及內外踝的教材圖\"><img src=\"assets/os-tibia-fibula.webp\" alt=\"脛骨與腓骨前後面、比目魚肌線及內外踝的教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 8.18；CC BY-NC-SA 4.0。<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-4-bones-of-the-lower-limb\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 內踝屬脛骨，外踝屬腓骨；腓骨不接股骨。 點圖可放大。</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較</th><th scope=\"col\">脛骨 tibia</th><th scope=\"col\">腓骨 fibula</th></tr></thead><tbody><tr><td>位置</td><td>內側、較粗</td><td>外側、較細</td></tr><tr><td>近端</td><td>平臺接股骨兩髁</td><td>頭接脛骨外髁下方</td></tr><tr><td>遠端</td><td>下關節面與內踝接距骨</td><td>外踝接距骨</td></tr><tr><td>主要作用</td><td>主要承重，連接膝與踝</td><td>肌肉附著、踝穴穩定與部分負荷分擔</td></tr><tr><td>直接與股骨接觸</td><td>有</td><td>無</td></tr><tr><td>踝標記</td><td>內踝</td><td>外踝，位置更低、更後</td></tr></tbody></table></div>"
   },
   {
    "id": "tibia-fibula-2",
    "title": "02｜前後面標記與常考附著",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">標記</th><th scope=\"col\">位置</th><th scope=\"col\">附著／辨認</th></tr></thead><tbody><tr><td>脛骨粗隆</td><td>近端前面</td><td>髕韌帶止點</td></tr><tr><td>髁間隆起</td><td>平臺兩關節面之間</td><td>與髁間區及半月板、十字韌帶附著相鄰</td></tr><tr><td>前緣／脛骨嵴</td><td>前方銳緣</td><td>皮下可觸及，不是後方比目魚肌線</td></tr><tr><td>比目魚肌線 soleal line</td><td>後面斜行</td><td>比目魚肌部分起點；膕肌止點在其上方</td></tr><tr><td>鵝足 pes anserinus</td><td>脛骨近端前內側</td><td>縫匠肌、股薄肌、半腱肌</td></tr><tr><td>腓骨頭</td><td>近端外側</td><td>股二頭肌止點、LCL 止點</td></tr><tr><td>腓骨頸</td><td>頭下方</td><td>總腓神經繞行</td></tr></tbody></table></div>"
   },
   {
    "id": "tibia-fibula-3",
    "title": "03｜脛腓關節不能全部叫 syndesmosis",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">區段</th><th scope=\"col\">連接類型</th><th scope=\"col\">功能概括</th></tr></thead><tbody><tr><td>近端脛腓</td><td>滑液平面關節</td><td>腓骨頭與脛骨關節面，小幅滑動</td></tr><tr><td>骨幹之間</td><td>骨間膜，纖維連接</td><td>肌肉起點與兩骨力傳遞相關</td></tr><tr><td>遠端脛腓</td><td>韌帶聯合 syndesmosis</td><td>維持踝穴；包含前後下脛腓等韌帶</td></tr><tr><td>距小腿關節</td><td>脛、腓與距骨的滑液關節</td><td>背屈／蹠屈</td></tr><tr><td>腓骨與股骨</td><td>沒有正常直接關節</td><td>腓骨頭位置近膝，不等於接股骨</td></tr></tbody></table></div>"
   },
   {
    "id": "tibia-fibula-4",
    "title": "04｜腓骨頸損傷：從神經分支推症狀",
    "html": "<div class=\"enrichment-label\">教材延伸 · 神經定位</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">神經</th><th scope=\"col\">主要功能區</th><th scope=\"col\">受損線索</th></tr></thead><tbody><tr><td>總腓神經 common fibular</td><td>腓骨頸附近，分深／淺支</td><td>背屈與外翻都可能受影響，足下垂</td></tr><tr><td>深腓神經 deep fibular</td><td>前群背屈、伸趾；第一趾間隙感覺</td><td>與足背大部分感覺不同</td></tr><tr><td>淺腓神經 superficial fibular</td><td>外群外翻；足背大部分感覺</td><td>不支配主要背屈肌</td></tr><tr><td>脛神經 tibial</td><td>後群蹠屈、屈趾與足底分支</td><td>與總腓神經損傷型態不同</td></tr><tr><td>臨床鑑別</td><td>神經損傷或 L5 根病變等</td><td>不由足下垂一個症狀就確定病灶</td></tr></tbody></table></div>"
   },
   {
    "id": "tibia-fibula-5",
    "title": "05｜更正：腓骨不是零承重",
    "html": "<div class=\"enrichment-label\">教材延伸 · 力學更正</div><div class=\"study-note teal\">脛骨是小腿主要承重骨；腓骨也透過脛腓連接及踝部參與負荷分擔。其比例受姿勢、負荷與研究條件影響，不採用「永遠 0%」或固定百分比。</div><p>以骨性關節關係作答更可靠：腓骨不直接與股骨關節，但外踝構成踝穴外側壁；保留長度與位置有助於踝關節穩定。</p>"
   }
  ]
 },
 {
  "id": "tarsals",
  "title": "七塊跗骨、足骨排列與關節線",
  "english": "Tarsals · metatarsals · foot joints",
  "summary": "從距骨與跟骨走向舟骨、楔骨、骰骨，再分清 Chopart 與 Lisfranc。",
  "sources": [
   "S113",
   "S123",
   "S132",
   "S94",
   "S95"
  ],
  "sections": [
   {
    "id": "tarsals-1",
    "title": "01｜足骨總數：7＋5＋14＝26",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><figure class=\"enriched-figure\"><a href=\"assets/os-foot.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：足骨上視、內側與外側的教材圖\"><img src=\"assets/os-foot.webp\" alt=\"足骨上視、內側與外側的教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 8.19；CC BY-NC-SA 4.0。<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-4-bones-of-the-lower-limb\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 右足上視圖先找第一蹠骨，決定內外側。 點圖可放大。</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">群</th><th scope=\"col\">數量</th><th scope=\"col\">辨認</th></tr></thead><tbody><tr><td>跗骨 tarsals</td><td>7</td><td>距、跟、舟、骰、內中外楔</td></tr><tr><td>蹠骨 metatarsals</td><td>5</td><td>由內側拇趾側編號 1–5</td></tr><tr><td>趾骨 phalanges</td><td>14</td><td>拇趾 2，其餘各 3</td></tr><tr><td>基本合計</td><td>26</td><td>常用計數不另把可變籽骨或副骨加成固定數</td></tr><tr><td>整個單側自由下肢</td><td>30</td><td>股骨 1＋髕骨 1＋脛骨 1＋腓骨 1＋足骨 26</td></tr></tbody></table></div>"
   },
   {
    "id": "tarsals-2",
    "title": "02｜排列：內側一路、外側一路",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><figure class=\"enriched-figure\"><a href=\"assets/bones4-tarsals.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：七跗骨內外側排列與蹠骨連接的原創定位圖\"><img src=\"assets/bones4-tarsals.svg\" alt=\"七跗骨內外側排列與蹠骨連接的原創定位圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>本站原創概念圖，非等比例；不是實際影像。 屬俯視關係概念；跟骨實際在距骨下方，不按圖塊平面化。 點圖可放大。</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">前後／上下關係</th><th scope=\"col\">連接</th></tr></thead><tbody><tr><td>距骨 talus</td><td>上承脛腓踝穴，下接跟骨，前接舟骨</td><td>沒有肌肉直接附著是常用辨認點</td></tr><tr><td>跟骨 calcaneus</td><td>足跟與後下方</td><td>前接骰骨，內側有載距突</td></tr><tr><td>舟骨 navicular</td><td>距骨頭前方、內側</td><td>前接三楔骨</td></tr><tr><td>骰骨 cuboid</td><td>跟骨前方、外側</td><td>前接第 4、5 蹠骨</td></tr><tr><td>內楔／中楔／外楔</td><td>舟骨前方，從內到外</td><td>主要分別對應第 1、2、3 蹠骨</td></tr><tr><td>第 2 蹠骨基底</td><td>楔骨間較嵌入的區域</td><td>與 Lisfranc 機械穩定相關</td></tr></tbody></table></div>"
   },
   {
    "id": "tarsals-3",
    "title": "03｜容易摸到或經過的骨點",
    "html": "<div class=\"enrichment-label\">教材延伸 · 骨點與肌腱</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">骨點</th><th scope=\"col\">相關結構</th><th scope=\"col\">解題提示</th></tr></thead><tbody><tr><td>載距突 sustentaculum tali</td><td>跟骨內側支持距骨的突起</td><td>拇長屈肌腱從下方溝通過</td></tr><tr><td>舟骨粗隆 navicular tuberosity</td><td>舟骨內側</td><td>脛骨後肌重要止點</td></tr><tr><td>骰骨底面溝</td><td>腓骨長肌腱通路</td><td>不與拇長屈肌腱溝混淆</td></tr><tr><td>第五蹠骨粗隆</td><td>外側足中段基底突出</td><td>腓骨短肌附著，撕脫骨折相關</td></tr><tr><td>跟骨粗隆後方</td><td>跟腱附著</td><td>不是載距突</td></tr><tr><td>距骨滑車 trochlea</td><td>距骨上方</td><td>與脛腓踝穴關節</td></tr></tbody></table></div>"
   },
   {
    "id": "tarsals-4",
    "title": "04｜中足關節：Chopart 與 Lisfranc",
    "html": "<div class=\"enrichment-label\">教材延伸 · 關節定位</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">名稱</th><th scope=\"col\">關節線</th><th scope=\"col\">分界</th></tr></thead><tbody><tr><td>Chopart／橫跗關節</td><td>距舟＋跟骰</td><td>後足與中足之間</td></tr><tr><td>Lisfranc／跗蹠關節</td><td>楔骨／骰骨與蹠骨基底</td><td>中足與前足之間</td></tr><tr><td>距下關節 subtalar</td><td>距骨與跟骨後方關節</td><td>內翻／外翻的重要組成</td></tr><tr><td>距小腿關節 talocrural</td><td>脛腓骨與距骨</td><td>主要背屈／蹠屈</td></tr></tbody></table></div><p>同一個足部扭轉會由多關節共同完成，不把「橫跗」和「跗蹠」只按中文都有跗字而互換。</p>"
   },
   {
    "id": "tarsals-5",
    "title": "05｜手足對照：深橫韌帶連的是關節板",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較</th><th scope=\"col\">手</th><th scope=\"col\">足</th></tr></thead><tbody><tr><td>基本骨數</td><td>腕 8＋掌 5＋指 14</td><td>跗 7＋蹠 5＋趾 14</td></tr><tr><td>最大近端小骨</td><td>腕頭狀骨</td><td>跗跟骨</td></tr><tr><td>深橫韌帶連結</td><td>第 2–5 掌指關節掌板間</td><td>第 1–5 蹠趾關節蹠板間</td></tr><tr><td>拇指／拇趾</td><td>拇指不在同樣深橫掌骨連結中</td><td>拇趾列參與深橫蹠骨連結</td></tr><tr><td>不要過度推論</td><td>連結不等於整指沒有運動</td><td>也不是直接把所有骨幹綁住</td></tr></tbody></table></div><p>影片提到骨折或缺血性壞死的「最」時，應限定骨名、骨折種類及位置；本章不採「距骨是足部任何情境最易骨折」的說法。S94、S95、S113。</p>"
   }
  ]
 },
 {
  "id": "ankle",
  "title": "踝穴、踝韌帶與內踝後通道",
  "english": "Ankle mortise · deltoid · lateral ligaments · tarsal tunnel",
  "summary": "比較內外踝、內外側韌帶、背屈穩定與內踝後的腱神經血管順序。",
  "sources": [
   "S48",
   "S122",
   "S123",
   "S132"
  ],
  "sections": [
   {
    "id": "ankle-1",
    "title": "01｜踝穴：距骨被兩踝夾住",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><figure class=\"enriched-figure\"><a href=\"assets/os-ankle.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：踝內側三角韌帶及外側三條韌帶的教材圖\"><img src=\"assets/os-ankle.webp\" alt=\"踝內側三角韌帶及外側三條韌帶的教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 9.21；CC BY-NC-SA 4.0。<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/9-6-anatomy-of-selected-synovial-joints\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 上圖看內側，下圖看外側；不是同一側的兩張照片。 點圖可放大。</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">接觸／形態</th><th scope=\"col\">影響</th></tr></thead><tbody><tr><td>脛骨遠端下關節面</td><td>距骨滑車上面</td><td>主要負荷傳入</td></tr><tr><td>內踝</td><td>距骨內面</td><td>踝穴內側壁</td></tr><tr><td>外踝</td><td>距骨外面，較內踝更低且後</td><td>踝穴外側壁</td></tr><tr><td>距骨滑車</td><td>前部一般較寬、後部較窄</td><td>背屈時較寬前部進入踝穴，骨性穩定較高</td></tr><tr><td>遠端脛腓韌帶聯合</td><td>維持踝穴寬度與兩骨關係</td><td>受損可影響距骨位置</td></tr></tbody></table></div>"
   },
   {
    "id": "ankle-2",
    "title": "02｜三角韌帶 vs 外側三條",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">韌帶</th><th scope=\"col\">連接概括</th><th scope=\"col\">限制／損傷</th></tr></thead><tbody><tr><td>三角韌帶 deltoid</td><td>內踝 → 舟骨、跟骨、距骨各部</td><td>主要抵抗過度外翻；有淺、深層</td></tr><tr><td>前距腓 ATFL</td><td>外踝前方 → 距骨頸</td><td>常在蹠屈＋內翻扭傷受損</td></tr><tr><td>跟腓 CFL</td><td>外踝 → 跟骨</td><td>踝與距下穩定，內翻相關</td></tr><tr><td>後距腓 PTFL</td><td>外踝後區 → 距骨後方</td><td>相對較強，常見於較嚴重損傷</td></tr><tr><td>下脛腓韌帶系統</td><td>脛、腓之間</td><td>high ankle sprain，與 ATFL 三條不是同組</td></tr></tbody></table></div>"
   },
   {
    "id": "ankle-3",
    "title": "03｜背屈／蹠屈和內翻／外翻分層",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">動作</th><th scope=\"col\">主要關節框架</th><th scope=\"col\">不要混成</th></tr></thead><tbody><tr><td>背屈 dorsiflexion</td><td>距小腿關節，足背朝小腿</td><td>不是把足底朝內</td></tr><tr><td>蹠屈 plantarflexion</td><td>距小腿關節，足尖向下</td><td>不是趾關節單純屈曲</td></tr><tr><td>內翻 inversion</td><td>距下與橫跗等關節複合</td><td>不是距小腿關節唯一活動</td></tr><tr><td>外翻 eversion</td><td>距下與橫跗等關節複合</td><td>不是膝外翻 valgus</td></tr><tr><td>三平面旋前／旋後</td><td>複合運動概念</td><td>不是前臂橈尺關節同一構造</td></tr></tbody></table></div>"
   },
   {
    "id": "ankle-4",
    "title": "04｜內踝後：由前到後的通路",
    "html": "<div class=\"enrichment-label\">教材延伸 · 跗管導讀</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">順序</th><th scope=\"col\">構造</th><th scope=\"col\">功能／提示</th></tr></thead><tbody><tr><td>1</td><td>脛骨後肌腱 tibialis posterior</td><td>內翻、蹠屈與足弓支撐</td></tr><tr><td>2</td><td>趾長屈肌腱 flexor digitorum longus</td><td>屈第 2–5 趾</td></tr><tr><td>3</td><td>脛後動靜脈</td><td>血管組</td></tr><tr><td>4</td><td>脛神經 tibial nerve</td><td>足底感覺與肌肉分支</td></tr><tr><td>5</td><td>拇長屈肌腱 flexor hallucis longus</td><td>屈拇趾；更遠端經載距突下方</td></tr></tbody></table></div><div class=\"study-note teal\">這是內踝後方、屈肌支持帶下的相對順序。跗管與腕隧道都是受限通道，但內容物不能互換。</div>"
   },
   {
    "id": "ankle-5",
    "title": "05｜解剖與扭傷題的連接",
    "html": "<div class=\"enrichment-label\">教材延伸 · 解題連結</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">情境</th><th scope=\"col\">先考慮的構造</th><th scope=\"col\">辨認</th></tr></thead><tbody><tr><td>蹠屈＋內翻</td><td>ATFL 常先受影響</td><td>不是三角韌帶的典型拉傷方向</td></tr><tr><td>外翻受力</td><td>三角韌帶與內踝相關結構</td><td>可合併骨折；不說強韌帶永不斷</td></tr><tr><td>足固定、外旋受力</td><td>脛腓韌帶聯合</td><td>高位踝扭傷</td></tr><tr><td>腓骨頸問題＋足下垂</td><td>總腓神經</td><td>與跗管脛神經壓迫不同</td></tr><tr><td>內踝後壓迫、足底感覺症狀</td><td>脛神經／跗管區</td><td>不能只以局部痛確立診斷</td></tr></tbody></table></div>"
   }
  ]
 },
 {
  "id": "foot-arches",
  "title": "內外縱弓、橫弓與足底韌帶",
  "english": "Foot arches · plantar ligaments · windlass",
  "summary": "從骨性拱門、足底拉索到動態肌腱，解釋承重、回彈與足趾伸展。",
  "sources": [
   "S113",
   "S123",
   "S126",
   "S127",
   "S129",
   "S132"
  ],
  "sections": [
   {
    "id": "foot-arches-1",
    "title": "01｜先分三個弓：不是整個足底只有一道弧",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><figure class=\"enriched-figure\"><a href=\"assets/bones4-arches.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：內外足弓與足底拉索的原創概念圖\"><img src=\"assets/bones4-arches.svg\" alt=\"內外足弓與足底拉索的原創概念圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>本站原創概念圖，非等比例；不是實際影像。 左圖對照骨性路線，右圖讀足趾伸展的 windlass 機制。 點圖可放大。</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">足弓</th><th scope=\"col\">骨性路線概括</th><th scope=\"col\">形態與作用</th></tr></thead><tbody><tr><td>內側縱弓</td><td>跟骨 → 距骨 → 舟骨 → 三楔骨 → 第 1–3 蹠骨</td><td>較高，距骨頭為關鍵拱頂區域</td></tr><tr><td>外側縱弓</td><td>跟骨 → 骰骨 → 第 4、5 蹠骨</td><td>較低，較多接近地面</td></tr><tr><td>橫弓</td><td>骰骨／楔骨及蹠骨基底等橫向關係</td><td>各層截面不同，不只一個固定高度的弓</td></tr><tr><td>共同支撐</td><td>後方足跟、前方蹠骨頭等接觸區</td><td>分配負荷、吸收衝擊與適應地面</td></tr></tbody></table></div>"
   },
   {
    "id": "foot-arches-2",
    "title": "02｜骨、韌帶與肌腱分成三種支撐",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">層級</th><th scope=\"col\">代表</th><th scope=\"col\">作用</th></tr></thead><tbody><tr><td>骨性拱門</td><td>楔形骨與關節面的幾何關係</td><td>形成拱形基礎</td></tr><tr><td>節間韌帶</td><td>彈簧、長足底、短足底及其他連接</td><td>限制節段分離</td></tr><tr><td>足底拉索</td><td>足底腱膜</td><td>連接前後，承重與 windlass 相關</td></tr><tr><td>外在肌腱</td><td>脛骨後、脛骨前、腓骨長、長屈趾肌等</td><td>動態控制，功能受負荷與姿勢影響</td></tr><tr><td>足內在肌</td><td>足底短肌群</td><td>輔助控制趾與足弓，非只有被動支持</td></tr></tbody></table></div>"
   },
   {
    "id": "foot-arches-3",
    "title": "03｜三條足底韌帶：名稱連到骨端",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">韌帶</th><th scope=\"col\">起止概括</th><th scope=\"col\">重要關係</th></tr></thead><tbody><tr><td>彈簧韌帶 spring／足底跟舟</td><td>跟骨載距突 → 舟骨</td><td>承託距骨頭，內側縱弓重要支持</td></tr><tr><td>短足底 short plantar／足底跟骰</td><td>跟骨前下方 → 骰骨底面</td><td>較深，支撐跟骰關係</td></tr><tr><td>長足底 long plantar</td><td>跟骨底面 → 骰骨，表淺束到第 2–5 蹠骨基底等</td><td>較表淺；可把骰骨溝封成腓骨長肌腱通道</td></tr><tr><td>足底腱膜 plantar aponeurosis</td><td>跟骨前方延到趾與蹠趾區</td><td>不是前三條韌帶其中一條</td></tr></tbody></table></div><p>彈簧韌帶是含多束的複合體，名稱不是它像金屬彈簧；長、短足底也不能只用長度猜骨端。</p>"
   },
   {
    "id": "foot-arches-4",
    "title": "04｜Windlass：伸趾，足弓反而升高",
    "html": "<div class=\"enrichment-label\">教材延伸 · 運動機制</div><div class=\"flow\"><div class=\"flow-step\">蹠趾關節伸展，尤其拇趾</div><div class=\"flow-arrow\" aria-hidden=\"true\">↓</div><div class=\"flow-step\">足底腱膜繞過蹠骨頭而張緊</div><div class=\"flow-arrow\" aria-hidden=\"true\">↓</div><div class=\"flow-step\">足跟與前足的距離趨縮短</div><div class=\"flow-arrow\" aria-hidden=\"true\">↓</div><div class=\"flow-step\">內側縱弓升高，足變得較適合推進</div></div><p>這段是教材延伸，用來把影片的「底下拉索」比喻接到步態。實際行走還有肌肉、負荷與腱膜彈性共同作用；windlass 不是足弓全部控制機制。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">容易混淆</th><th scope=\"col\">正確理解</th></tr></thead><tbody><tr><td>伸趾 vs 背屈踝</td><td>蹠趾伸展可以改變腱膜張力，不等於距小腿背屈</td></tr><tr><td>腱膜緊 vs 長屈肌收縮</td><td>被動繞蹠骨頭與肌肉主動拉力不同</td></tr><tr><td>靜態圖 vs 步態</td><td>負重與卸載時足弓會變形，不是固定磚橋</td></tr><tr><td>足印 vs 骨性足弓</td><td>接觸面受軟組織與負荷影響，不直接等於骨弓高度</td></tr></tbody></table></div>"
   },
   {
    "id": "foot-arches-5",
    "title": "05｜足弓失穩：配對構造而非一個原因",
    "html": "<div class=\"enrichment-label\">教材延伸 · 結構應用</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">線索</th><th scope=\"col\">相關構造</th><th scope=\"col\">限制</th></tr></thead><tbody><tr><td>內側縱弓降低</td><td>脛骨後肌腱、彈簧韌帶、足底腱膜等</td><td>常為多結構問題</td></tr><tr><td>外側縱弓支持</td><td>跟骰關係、長短足底韌帶</td><td>不把彈簧韌帶當全部外側支撐</td></tr><tr><td>橫向／跨足底肌腱</td><td>腓骨長肌腱等</td><td>其經骰骨後轉向內側，不停在第 5 蹠骨</td></tr><tr><td>扁平足 flatfoot</td><td>可柔軟性或僵硬性，原因多樣</td><td>不是任何低足弓都必須治療</td></tr></tbody></table></div>"
   },
   {
    "id": "foot-arches-6",
    "title": "06｜影片十二格：工程口訣與教材核對",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">工程比喻</th><th scope=\"col\">內側縱弓</th><th scope=\"col\">外側縱弓</th><th scope=\"col\">橫弓</th></tr></thead><tbody><tr><td>Keystone 拱頂</td><td>距骨，重點為距骨頭區</td><td>骰骨</td><td>中央楔骨區；依截面而異</td></tr><tr><td>Tie beam 前後／橫向連繫</td><td>足底腱膜</td><td>足底腱膜</td><td>片中以腓骨長肌跨足底作連繫</td></tr><tr><td>Staple 節間固定</td><td>彈簧／足底跟舟韌帶</td><td>長、短足底韌帶</td><td>深橫蹠骨韌帶及其他橫向連接</td></tr><tr><td>Suspension 動態懸吊</td><td>片中強調脛骨前；教材需加脛骨後等</td><td>腓骨長等外在肌腱</td><td>腓骨長與其他肌腱、內在肌協同</td></tr></tbody></table></div><div class=\"study-note teal\">「十二格」是課堂建築學比喻，不能把每一弓都化成唯一一塊骨、一條韌帶或一條肌肉。尤其內側縱弓，脛骨後肌與彈簧韌帶的重要性須另外補上。S123、S126、S127。</div>"
   },
   {
    "id": "foot-arches-7",
    "title": "07｜足弓高度、接地與四區負重模型",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">名詞／模型</th><th scope=\"col\">影片記憶</th><th scope=\"col\">限制</th></tr></thead><tbody><tr><td>Pes planus 扁平足</td><td>縱弓較低</td><td>可柔軟或僵硬；不等於必然神經血管壓迫</td></tr><tr><td>Pes cavus 高弓足</td><td>縱弓較高</td><td>可能伴其他排列變化，不只一張足印</td></tr><tr><td>左右／前後四區</td><td>片中理想各 25%</td><td>站立、步態與個體分配不同</td></tr><tr><td>足趾接地</td><td>影片以足跟、前足作承重簡畫</td><td>足趾也依姿勢及步態參與接觸與推進</td></tr><tr><td>足弓與運動</td><td>負荷分散、回彈、適應地面</td><td>不以弓越高越能跑跳作單一路徑</td></tr></tbody></table></div>"
   }
  ]
 },
 {
  "id": "foot-movement",
  "title": "踝足動作、肌腱止點與神經對照",
  "english": "Foot movements · insertions · nerve pairing",
  "summary": "把背屈、蹠屈、內翻、外翻與三平面複合動作、足弓拉索放在一起。",
  "sources": [
   "S123",
   "S132",
   "S126",
   "S124",
   "S133",
   "S134"
  ],
  "sections": [
   {
    "id": "foot-movement-1",
    "title": "01｜四種常用動作：先看足背與足底",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">動作</th><th scope=\"col\">主要肌肉舉例</th><th scope=\"col\">神經框架</th></tr></thead><tbody><tr><td>背屈</td><td>脛骨前、拇長伸、趾長伸、腓骨第三</td><td>深腓神經</td></tr><tr><td>蹠屈</td><td>腓腸、比目魚，另有長屈肌及其他協同</td><td>主要脛神經；腓骨長短等也協同</td></tr><tr><td>內翻</td><td>脛骨前＋脛骨後為主要組合</td><td>前者深腓，後者脛神經</td></tr><tr><td>外翻</td><td>腓骨長＋腓骨短，腓骨第三協同</td><td>長短肌淺腓；第三肌深腓</td></tr></tbody></table></div><p>同一肌肉可參與兩個動作，所以「內翻肌」不等於它同時只能背屈或只能蹠屈。脛骨前與脛骨後都能內翻，卻對踝屈伸有相反作用。</p>"
   },
   {
    "id": "foot-movement-2",
    "title": "02｜足部旋前／旋後：三個平面組合",
    "html": "<div class=\"enrichment-label\">教材延伸 · 術語更正</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">複合動作</th><th scope=\"col\">開鏈常用成分</th><th scope=\"col\">與影片口訣的差別</th></tr></thead><tbody><tr><td>旋後 supination</td><td>內翻＋內收＋蹠屈</td><td>「內翻」是重要成分，但不能當完整三平面同義詞</td></tr><tr><td>旋前 pronation</td><td>外翻＋外展＋背屈</td><td>「外翻」也不是全部成分</td></tr><tr><td>內／外翻</td><td>描述足底向內／外傾斜</td><td>與內收／外展的橫面方向分開</td></tr><tr><td>負重閉鏈</td><td>足固定時距骨、脛骨等會協同旋轉</td><td>不只足在空中繞一條軸</td></tr></tbody></table></div><div class=\"study-note teal\">影片用 adduction、supination 等詞說明內翻。本站以 inversion／eversion 為單一分量，以 pronation／supination 為複合動作；避免口訣互相循環定義。</div>"
   },
   {
    "id": "foot-movement-3",
    "title": "03｜腓骨長、短與第三：不是同一止點",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">肌肉</th><th scope=\"col\">主要止點</th><th scope=\"col\">動作／神經</th></tr></thead><tbody><tr><td>腓骨長 fibularis longus</td><td>第 1 蹠骨基底、內楔骨的足底面</td><td>外翻＋蹠屈，淺腓；足弓支撐</td></tr><tr><td>腓骨短 fibularis brevis</td><td>第 5 蹠骨基底粗隆</td><td>外翻＋蹠屈，淺腓</td></tr><tr><td>腓骨第三 fibularis tertius</td><td>第 5 蹠骨基底背面</td><td>背屈＋外翻，深腓</td></tr><tr><td>脛骨前 tibialis anterior</td><td>內楔骨與第 1 蹠骨基底內側</td><td>背屈＋內翻，深腓</td></tr><tr><td>脛骨後 tibialis posterior</td><td>舟骨粗隆為重要止點，另有多處足底擴展</td><td>蹠屈＋內翻，脛神經</td></tr></tbody></table></div>"
   },
   {
    "id": "foot-movement-4",
    "title": "04｜腓骨長肌腱的繞行與足弓",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><p>腓骨長肌腱繞外踝後方進入足部，經骰骨足底溝轉向內側，止於內楔骨與第 1 蹠骨基底。它不是沿外側足緣到第 5 蹠骨就結束；那是腓骨短肌的重要止點。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">通路點</th><th scope=\"col\">相關結構</th><th scope=\"col\">為何重要</th></tr></thead><tbody><tr><td>外踝後</td><td>腓骨肌腱通路</td><td>與內踝後五種構造分開</td></tr><tr><td>骰骨底面溝</td><td>長足底韌帶形成通道部分</td><td>不是舟骨粗隆</td></tr><tr><td>足底橫向走行</td><td>連外側通路到內側止點</td><td>與足弓及第一列穩定相關</td></tr><tr><td>第一蹠骨／內楔骨</td><td>與脛骨前肌止點相鄰但路徑不同</td><td>兩肌動作不能因止點近而全部相同</td></tr></tbody></table></div>"
   },
   {
    "id": "foot-movement-5",
    "title": "05｜用動作組合推病灶",
    "html": "<div class=\"enrichment-label\">教材延伸 · 神經與動作</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">表現組合</th><th scope=\"col\">先對照的結構</th><th scope=\"col\">不要直接跳到</th></tr></thead><tbody><tr><td>背屈弱＋外翻弱</td><td>總腓神經及其深、淺支</td><td>只靠一個症狀確診</td></tr><tr><td>背屈弱，但內翻可保留部分</td><td>脛骨後肌由脛神經支配</td><td>不能以「內翻仍有」排除所有神經病變</td></tr><tr><td>第一趾間隙感覺變化</td><td>深腓神經區</td><td>整個足背都歸深腓</td></tr><tr><td>足底感覺變化</td><td>脛神經足底分支</td><td>淺腓神經</td></tr><tr><td>踮腳困難</td><td>小腿後群、脛神經等</td><td>和足下垂是同一動作問題</td></tr></tbody></table></div>"
   },
   {
    "id": "foot-movement-6",
    "title": "06｜跟腱、小腿三頭肌與蹠肌分開",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">名稱</th><th scope=\"col\">組成／附著</th><th scope=\"col\">易錯處</th></tr></thead><tbody><tr><td>小腿三頭肌 triceps surae</td><td>腓腸肌兩頭＋比目魚肌</td><td>三頭不是腓腸、比目魚、蹠肌三塊</td></tr><tr><td>跟腱 Achilles／calcaneal tendon</td><td>主要由腓腸、比目魚形成，附著跟骨後方</td><td>不要說每人必由三塊肌同樣共同構成</td></tr><tr><td>蹠肌 plantaris</td><td>長細肌腱，可獨立附著或與跟腱融合</td><td>有變異，不是定義三頭肌的第三肌</td></tr><tr><td>作用框架</td><td>後群主要蹠屈，腓腸肌也跨膝</td><td>比目魚肌不跨膝</td></tr></tbody></table></div><div class=\"study-note teal\">影片把後群淺層三肌清單與跟腱、小腿三頭肌一起講；網站以常用定義拆開。S133、S134。</div>"
   }
  ]
 },
 {
  "id": "bones4-rapid-review",
  "title": "第四章跨區統整與易錯配對",
  "english": "Cross-region comparisons · retrieval",
  "summary": "把骨盆到足的通道、韌帶、附著與動作合成快速查閱表。",
  "sources": [
   "S113",
   "S114",
   "S115",
   "S118",
   "S119",
   "S122",
   "S126",
   "S128",
   "S130"
  ],
  "sections": [
   {
    "id": "bones4-rapid-review-1",
    "title": "01｜由骨盆一路走到足：關節地圖",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">區域</th><th scope=\"col\">關節／連接</th><th scope=\"col\">主要考法</th></tr></thead><tbody><tr><td>薦骨—髂骨</td><td>薦髂關節與韌帶</td><td>承重與小幅傾動</td></tr><tr><td>兩恥骨</td><td>恥骨聯合，次級軟骨連接</td><td>骨盆環前方</td></tr><tr><td>髖</td><td>球窩滑液</td><td>多軸、囊韌帶與血供</td></tr><tr><td>膝</td><td>股脛＋股髕滑液關節</td><td>屈伸、末段旋轉、半月板</td></tr><tr><td>近端脛腓</td><td>滑液平面</td><td>腓骨頭不接股骨</td></tr><tr><td>遠端脛腓</td><td>纖維韌帶聯合</td><td>踝穴穩定</td></tr><tr><td>踝</td><td>距小腿滑液鉸鏈</td><td>背屈／蹠屈</td></tr><tr><td>距下／橫跗</td><td>足部複合關節</td><td>內翻／外翻</td></tr><tr><td>跗蹠</td><td>Lisfranc 區</td><td>足骨排列與中足穩定</td></tr></tbody></table></div>"
   },
   {
    "id": "bones4-rapid-review-2",
    "title": "02｜最容易互換的十組名稱",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">A</th><th scope=\"col\">B</th><th scope=\"col\">真正差別</th></tr></thead><tbody><tr><td>閉孔管</td><td>陰部管</td><td>骨膜留下的管 vs 閉孔內肌筋膜通道</td></tr><tr><td>大坐骨孔</td><td>小坐骨孔</td><td>梨狀肌所在大孔 vs 陰部繞行／閉孔內肌腱通路</td></tr><tr><td>臀上</td><td>臀下</td><td>梨狀肌上、下；支配肌群不同</td></tr><tr><td>髖臼唇</td><td>股骨頭韌帶</td><td>纖維軟骨環 vs 囊內韌帶</td></tr><tr><td>ACL</td><td>PCL</td><td>以脛骨前、後端命名；限制相對移動不同</td></tr><tr><td>MCL</td><td>LCL</td><td>內側到脛骨 vs 外側到腓骨；半月板連接不同</td></tr><tr><td>內踝</td><td>外踝</td><td>脛骨 vs 腓骨</td></tr><tr><td>舟骨 navicular</td><td>舟狀骨 scaphoid</td><td>足跗骨 vs 腕骨</td></tr><tr><td>Chopart</td><td>Lisfranc</td><td>橫跗 vs 跗蹠</td></tr><tr><td>內翻</td><td>旋後</td><td>單一分量 vs 三平面複合概念</td></tr></tbody></table></div>"
   },
   {
    "id": "bones4-rapid-review-3",
    "title": "03｜肌腱止點回想表",
    "html": "<div class=\"enrichment-label\">影片與教材整合</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">骨點</th><th scope=\"col\">要配的肌肉／韌帶</th><th scope=\"col\">另一個相似點</th></tr></thead><tbody><tr><td>小轉子</td><td>髂腰肌</td><td>大轉子多肌附著</td></tr><tr><td>內收結節</td><td>內收大肌腿後肌部分</td><td>不是內收長肌的唯一止點</td></tr><tr><td>脛骨粗隆</td><td>髕韌帶</td><td>鵝足在近端內側</td></tr><tr><td>腓骨頭</td><td>股二頭肌＋LCL</td><td>總腓神經繞腓骨頸</td></tr><tr><td>舟骨粗隆</td><td>脛骨後肌</td><td>骰骨下溝為腓骨長肌腱</td></tr><tr><td>第 5 蹠骨粗隆</td><td>腓骨短肌</td><td>腓骨第三肌較背側</td></tr><tr><td>第 1 蹠骨＋內楔骨</td><td>脛骨前與腓骨長，路徑、面、動作不同</td><td>不因止點近就當同一神經</td></tr><tr><td>跟骨後方</td><td>跟腱</td><td>載距突在內側</td></tr></tbody></table></div>"
   },
   {
    "id": "bones4-rapid-review-4",
    "title": "04｜用解剖解釋題幹，不只背答案",
    "html": "<div class=\"enrichment-label\">教材延伸 · 解題步驟</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">題幹線索</th><th scope=\"col\">推論鏈</th><th scope=\"col\">核對頁</th></tr></thead><tbody><tr><td>同時大、小坐骨孔</td><td>S2–S4 → 坐骨棘 → 陰部管</td><td>骨盆通道</td></tr><tr><td>囊內股骨頸移位</td><td>支持帶血管可能受損 → 股骨頭缺血風險</td><td>髖關節</td></tr><tr><td>前抽屜松</td><td>脛骨相對股骨前移 → ACL</td><td>膝韌帶</td></tr><tr><td>dashboard injury</td><td>脛骨受後推 → PCL</td><td>膝韌帶</td></tr><tr><td>腓骨頸＋足下垂</td><td>總腓神經 → 背屈／外翻</td><td>脛腓骨</td></tr><tr><td>蹠屈內翻扭傷</td><td>踝外側韌帶 → ATFL</td><td>踝關節</td></tr><tr><td>骰骨足底溝</td><td>腓骨長肌腱 → 內側止點</td><td>足骨與動作</td></tr><tr><td>伸拇趾足弓升高</td><td>腱膜張緊 → windlass</td><td>足弓</td></tr></tbody></table></div>"
   }
  ]
 },
 {
  "id": "exam-sources",
  "title": "整理方法、易錯更正與參考來源",
  "english": "Sources · corrections · image credits",
  "summary": "說明影片與教材範圍，列出更正、教材圖號、授權與官方考題入口。",
  "sources": [
   "S17",
   "S89",
   "S113",
   "S114",
   "S115",
   "S116",
   "S117",
   "S118",
   "S119",
   "S120",
   "S121",
   "S122",
   "S123",
   "S124",
   "S125",
   "S126",
   "S127",
   "S128",
   "S129",
   "S130",
   "S131",
   "S132",
   "S133",
   "S134",
   "S135",
   "S136"
  ],
  "sections": [
   {
    "id": "exam-sources-1",
    "title": "01｜本章來源與整理界線",
    "html": "<div class=\"enrichment-label\">整理方法</div><p>影片為使用者上傳的〈2016DF02 02_骨骼(4)〉，檔案長 1:48:00。全片音訊自動轉錄後，依時間碼核對；另以每 30 秒抽樣板書，共 216 張畫面逐張檢視。時間索引以此上傳檔為準。</p><p>這是重述整理，不是逐字稿或逐秒人工觀看的聲稱。低解析度板書與自動辨識均可能出現名詞誤差；以圖像、上下文及教材校正，不能可靠辨識的個別原句不補造成講者原話。各主題頁標「教材延伸」的部分，用來補足構造、神經與臨床配對，不全部當成影片講授內容。</p><div class=\"study-note teal\">片中自稱考過的提醒只作課堂提示，不代表本站已統計歷屆考頻。未取得本片可驗證的單支 YouTube ID，回看時間採手動定位，不製作假跳轉連結。</div>"
   },
   {
    "id": "exam-sources-2",
    "title": "02｜課堂口訣與教材精確說法",
    "html": "<div class=\"enrichment-label\">更正與核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">簡化或容易誤解的說法</th><th scope=\"col\">本站採用的精確說法</th><th scope=\"col\">來源</th></tr></thead><tbody><tr><td>陰部神經「再回骨盆」</td><td>經小坐骨孔進入會陰，再走陰部管</td><td>S114</td></tr><tr><td>股骨頭韌帶血管是主要血供</td><td>兒童較重要；成人主要靠旋股內側等支持帶血管</td><td>S115、S117、S131</td></tr><tr><td>腓骨不承重</td><td>脛骨主要承重，腓骨參與負荷分擔及踝穩定</td><td>S128</td></tr><tr><td>ACL 在前，PCL 在後</td><td>命名看脛骨附著；股骨端內外髁不同</td><td>S118、S119</td></tr><tr><td>囊內就是滑膜腔內</td><td>ACL、PCL 為囊內滑膜外</td><td>S119、S121</td></tr><tr><td>內側半月板一定最常傷</td><td>解剖較固定不代表所有急性合併傷的頻率</td><td>S120、S130</td></tr><tr><td>內翻等於旋後</td><td>內翻為分量；旋後為內翻＋內收＋蹠屈等複合</td><td>S123</td></tr><tr><td>小腿三頭肌是三塊肌肉</td><td>腓腸肌兩頭＋比目魚肌；蹠肌另列變異</td><td>S133、S134</td></tr><tr><td>產科徑線只背公分</td><td>解剖、產科、對角結合徑先分端點；個體有變異</td><td>S135、S136</td></tr><tr><td>足弓只靠骨頭／一條韌帶</td><td>骨性幾何、韌帶、腱膜與肌肉共同支撐</td><td>S126、S127、S129</td></tr></tbody></table></div>"
   },
   {
    "id": "exam-sources-3",
    "title": "03｜官方國考使用方式",
    "html": "<div class=\"enrichment-label\">考題使用</div><p><a href=\"https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=115090&amp;y=2026\" target=\"_blank\" rel=\"noopener\">考選部：115 年第二次醫師第一階段考畢試題與答案入口</a>。搭配官方解剖題檢查孔道、骨點、神經與關節配對。此章未新增宣稱已逐題核對的官方題號；主動回想表為本站自編學習提示。</p><p>回想時先畫骨頭方向，再標骨點／附著，最後接神經、血管與受力方向。答錯後回相關主題頁核對，不只圈一個選項。</p>"
   },
   {
    "id": "exam-sources-4",
    "title": "04｜本章教材圖號與授權",
    "html": "<div class=\"enrichment-label\">圖像來源</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">圖號</th><th scope=\"col\">內容</th><th scope=\"col\">來源／使用</th></tr></thead><tbody><tr><td>8.16</td><td><a href=\"assets/os-femur.webp\" target=\"_blank\" rel=\"noopener\">femur</a></td><td>OpenStax · Anatomy and Physiology 2e · CC BY-NC-SA 4.0；原圖保留</td></tr><tr><td>8.18</td><td><a href=\"assets/os-tibia-fibula.webp\" target=\"_blank\" rel=\"noopener\">tibia-fibula</a></td><td>OpenStax · Anatomy and Physiology 2e · CC BY-NC-SA 4.0；原圖保留</td></tr><tr><td>8.19</td><td><a href=\"assets/os-foot.webp\" target=\"_blank\" rel=\"noopener\">foot</a></td><td>OpenStax · Anatomy and Physiology 2e · CC BY-NC-SA 4.0；原圖保留</td></tr><tr><td>8.14</td><td><a href=\"assets/os-pelvic-ligaments.webp\" target=\"_blank\" rel=\"noopener\">pelvic-ligaments</a></td><td>OpenStax · Anatomy and Physiology 2e · CC BY-NC-SA 4.0；原圖保留</td></tr><tr><td>8.15</td><td><a href=\"assets/os-pelvic-sex.webp\" target=\"_blank\" rel=\"noopener\">pelvic-sex</a></td><td>OpenStax · Anatomy and Physiology 2e · CC BY-NC-SA 4.0；原圖保留</td></tr><tr><td>9.18</td><td><a href=\"assets/os-hip-joint.webp\" target=\"_blank\" rel=\"noopener\">hip-joint</a></td><td>OpenStax · Anatomy and Physiology 2e · CC BY-NC-SA 4.0；原圖保留</td></tr><tr><td>9.19</td><td><a href=\"assets/os-knee.webp\" target=\"_blank\" rel=\"noopener\">knee</a></td><td>OpenStax · Anatomy and Physiology 2e · CC BY-NC-SA 4.0；原圖保留</td></tr><tr><td>9.21</td><td><a href=\"assets/os-ankle.webp\" target=\"_blank\" rel=\"noopener\">ankle</a></td><td>OpenStax · Anatomy and Physiology 2e · CC BY-NC-SA 4.0；原圖保留</td></tr></tbody></table></div><p>另有本站原創陰部神經路線、十字韌帶、七跗骨與足弓示意，各圖均標明非等比例。教材圖中文標記另以表格對照，不覆蓋英文原標籤。</p><p><a href=\"assets/bones4-image-sources.json\" target=\"_blank\" rel=\"noopener\">第四章圖片來源與授權清單</a>。OpenStax 相關衍生內容依 CC BY-NC-SA 4.0，Access for free at <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/1-introduction\" target=\"_blank\" rel=\"noopener\">OpenStax</a>。</p>"
   },
   {
    "id": "exam-sources-5",
    "title": "05｜新增教材與研究閱讀入口",
    "html": "<div class=\"enrichment-label\">延伸閱讀</div><ul class=\"source-list\"><li><a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-4-bones-of-the-lower-limb\" target=\"_blank\" rel=\"noopener\">S113 · OpenStax：8.4 Bones of the Lower Limb</a><small>開放教材｜股骨、髕骨、脛腓骨、七跗骨與足骨圖片。</small></li><li><a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK554736/\" target=\"_blank\" rel=\"noopener\">S114 · NCBI：Anatomy, Abdomen and Pelvis, Pudendal Nerve</a><small>解剖教材｜陰部神經 S2–S4、坐骨棘、大小坐骨孔與陰部管。</small></li><li><a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK470555/\" target=\"_blank\" rel=\"noopener\">S115 · NCBI：Anatomy, Bony Pelvis and Lower Limb, Hip Joint</a><small>解剖教材｜髖臼、關節唇、三條囊韌帶與股骨頭韌帶。</small></li><li><a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK542174/\" target=\"_blank\" rel=\"noopener\">S116 · NCBI：Anatomy, Abdomen and Pelvis: Hip Arteries</a><small>解剖教材｜髖部血管來源與臀動脈、旋股動脈的交通。</small></li><li><a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK537347/\" target=\"_blank\" rel=\"noopener\">S117 · NCBI：Femoral Neck Fractures</a><small>解剖教材｜股骨頸囊內骨折與股骨頭血供風險；只補充解剖關係。</small></li><li><a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK559233/\" target=\"_blank\" rel=\"noopener\">S118 · NCBI：Anatomy, Bony Pelvis and Lower Limb, Knee Anterior Cruciate Ligament</a><small>解剖教材｜ACL 的脛骨前方附著、股骨外髁內面與限制前移。</small></li><li><a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK535416/\" target=\"_blank\" rel=\"noopener\">S119 · NCBI：Anatomy, Bony Pelvis and Lower Limb: Knee Posterior Cruciate Ligament</a><small>解剖教材｜PCL 的後方脛骨附著、股骨內髁外面及囊內滑膜外位置。</small></li><li><a href=\"https://www.ncbi.nlm.nih.gov/books/NBK519494/\" target=\"_blank\" rel=\"noopener\">S120 · NCBI：Anatomy, Bony Pelvis and Lower Limb, Knee Lateral Meniscus</a><small>解剖教材｜外側半月板活動性、附著與膕肌腱關係。</small></li><li><a href=\"https://www.ncbi.nlm.nih.gov/books/NBK500017/\" target=\"_blank\" rel=\"noopener\">S121 · NCBI：Anatomy, Bony Pelvis and Lower Limb, Knee</a><small>解剖教材｜膝關節、側副韌帶、半月板與交叉韌帶。</small></li><li><a href=\"https://www.ncbi.nlm.nih.gov/books/NBK545158/\" target=\"_blank\" rel=\"noopener\">S122 · NCBI：Anatomy, Bony Pelvis and Lower Limb: Ankle Joint</a><small>解剖教材｜踝穴、距骨滑車與踝部內外側韌帶。</small></li><li><a href=\"https://humananatomy.host.dartmouth.edu/BHA/public_html/part_3/chapter_17.html\" target=\"_blank\" rel=\"noopener\">S123 · Dartmouth：Chapter 17, The ankle and foot</a><small>大學教材｜足部動作、足底韌帶、足弓與腓骨長肌腱。</small></li><li><a href=\"https://humananatomy.host.dartmouth.edu/BHA/public_html/part_3/chapter_15.html\" target=\"_blank\" rel=\"noopener\">S124 · Dartmouth：Chapter 15, The thigh and knee</a><small>大學教材｜股骨附著、膝關節與膕肌解鎖。</small></li><li><a href=\"https://humananatomy.host.dartmouth.edu/BHA/public_html/part_3/chapter_14.html\" target=\"_blank\" rel=\"noopener\">S125 · Dartmouth：Chapter 14, The gluteal region</a><small>大學教材｜梨狀肌上下通道、臀神經與血管。</small></li><li><a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK587361/\" target=\"_blank\" rel=\"noopener\">S126 · NCBI：Anatomy, Bony Pelvis and Lower Limb: Arches of the Foot</a><small>解剖教材｜內外縱弓、橫弓、韌帶與動態支撐。</small></li><li><a href=\"https://www.ncbi.nlm.nih.gov/books/NBK562289/\" target=\"_blank\" rel=\"noopener\">S127 · NCBI：Anatomy, Bony Pelvis and Lower Limb: Medial Longitudinal Arch of the Foot</a><small>解剖教材｜彈簧韌帶、脛骨後肌與內側縱弓。</small></li><li><a href=\"https://pubmed.ncbi.nlm.nih.gov/8804301/\" target=\"_blank\" rel=\"noopener\">S128 · Wang et al.：Fibula and its ligaments in load transmission and ankle joint stability</a><small>原始研究｜屍體力學研究證明腓骨參與負荷分擔；不以固定比例概括個體。</small></li><li><a href=\"https://pubmed.ncbi.nlm.nih.gov/38642017/\" target=\"_blank\" rel=\"noopener\">S129 · Matsumoto & Ogihara：Direct visualization and measurement of the plantar aponeurosis behavior in foot arch deformation via the windlass mechanism</a><small>原始研究｜足趾伸展、足底腱膜張力與 windlass 機制的直接觀察。</small></li><li><a href=\"https://pubmed.ncbi.nlm.nih.gov/1962712/\" target=\"_blank\" rel=\"noopener\">S130 · Shelbourne & Nitz：The O’Donoghue triad revisited</a><small>原始研究｜經典 unhappy triad 與實際急性 ACL／MCL 合併半月板傷不同。</small></li><li><a href=\"https://pubmed.ncbi.nlm.nih.gov/27909118/\" target=\"_blank\" rel=\"noopener\">S131 · Dewar et al.：The relative contribution of the medial and lateral femoral circumflex arteries to the vascularity of the head and neck of the femur</a><small>原始研究｜旋股內側動脈為主要來源，旋股外側也有區域性貢獻。</small></li><li><a href=\"https://www.ncbi.nlm.nih.gov/books/NBK546698/\" target=\"_blank\" rel=\"noopener\">S132 · NCBI：Anatomy, Bony Pelvis and Lower Limb: Foot and Ankle</a><small>解剖教材｜足踝骨性及肌腱關係，足弓補充。</small></li><li><a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK499917/\" target=\"_blank\" rel=\"noopener\">S133 · NCBI：Anatomy, Bony Pelvis and Lower Limb: Achilles Tendon</a><small>解剖教材｜跟腱主要由腓腸肌與比目魚肌形成，連到跟骨。</small></li><li><a href=\"https://www.ncbi.nlm.nih.gov/books/NBK537340/\" target=\"_blank\" rel=\"noopener\">S134 · NCBI：Anatomy, Bony Pelvis and Lower Limb: Leg Posterior Compartment</a><small>解剖教材｜小腿後群肌肉與蹠肌腱的獨立附著／變異。</small></li><li><a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC9303659/\" target=\"_blank\" rel=\"noopener\">S135 · VanSickle et al.：Textbook typologies: Challenging the myth of the perfect obstetric pelvis</a><small>研究與教材分析｜產科徑線定義、骨盆形態重疊及單一尺寸預測分娩的限制。</small></li><li><a href=\"https://pubmed.ncbi.nlm.nih.gov/30085610/\" target=\"_blank\" rel=\"noopener\">S136 · NCBI：Anatomy, Abdomen and Pelvis, Pelvic Inlet</a><small>解剖教材｜入口界線、大小骨盆與入口徑線的定義。</small></li></ul>"
   }
  ]
 }
];
