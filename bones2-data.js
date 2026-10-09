/* Full-length audio + sampled board review; original paraphrase, not verbatim transcript. */
const bones2VideoUrl="https://www.youtube.com/playlist?list=PLoKlbKOZ9XPpsITjehrHKiYvhih_3OJOz";
const bones2Sources=[
 {
  "id": "S37",
  "title": "NCBI：Anatomy, Pterygopalatine Fossa",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK513269/",
  "type": "醫學教材",
  "note": "翼腭窩邊界、內容及七種主要交通通道。"
 },
 {
  "id": "S38",
  "title": "The pterygopalatine fossa: imaging anatomy, communications, and pathology revisited",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4956626/",
  "type": "影像解剖綜述",
  "note": "空間交通與疾病沿通道擴散；未轉載原圖。"
 },
 {
  "id": "S39",
  "title": "NCBI：Anatomy, Head and Neck, Palate",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK557817/",
  "type": "醫學教材",
  "note": "硬腭與軟腭的構成；骨性比例和全腭長度的比例須分開。"
 },
 {
  "id": "S40",
  "title": "CDC：Cleft Lip / Cleft Palate",
  "url": "https://www.cdc.gov/birth-defects/about/cleft-lip-cleft-palate.html",
  "type": "官方醫學資料",
  "note": "核對唇裂可以伴隨或不伴隨腭裂，不能沿用影片的必然合併說法。"
 },
 {
  "id": "S41",
  "title": "NCBI：Anatomy, Head and Neck, Mandible",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK532292/",
  "type": "醫學教材",
  "note": "下頜骨、下頜管、頦棘與肌肉附著。"
 },
 {
  "id": "S42",
  "title": "NCBI：Embryology, Branchial Arches",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK538487/",
  "type": "胚胎教材",
  "note": "舌骨小角／大角的傳統第二／第三咽弓分類。"
 },
 {
  "id": "S43",
  "title": "NCBI：Anatomy, Back, Thoracic Vertebrae",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK459153/",
  "type": "醫學教材",
  "note": "肋凹、胸椎區域特徵及不典型椎骨；保留 T9–T10 變異。"
 },
 {
  "id": "S44",
  "title": "NCBI：Anatomy, Back, Spinal Meninges",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK547755/",
  "type": "醫學教材",
  "note": "脊髓膜、硬膜外腔、腰池與正中穿刺層次。"
 },
 {
  "id": "S45",
  "title": "NCBI：Anatomy, Back, Intervertebral Discs",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK470583/",
  "type": "醫學教材",
  "note": "23 個椎間盤、起訖與纖維環／髓核／軟骨終板。"
 },
 {
  "id": "S46",
  "title": "Dartmouth：Chapter 39, The vertebral column",
  "url": "https://humananatomy.host.dartmouth.edu/BHA/public_html/part_7/chapter_39.html",
  "type": "大學解剖教材",
  "note": "椎孔與椎間孔、神經出口及脊柱連接構造。"
 },
 {
  "id": "S47",
  "title": "Update on applied epidural anatomy",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9039569/",
  "type": "解剖綜述",
  "note": "頸神經出口例外與脊髓膜空間。"
 },
 {
  "id": "S48",
  "title": "OpenStax：9.6 Anatomy of Selected Synovial Joints",
  "url": "https://openstax.org/books/anatomy-and-physiology-2e/pages/9-6-anatomy-of-selected-synovial-joints",
  "type": "開放教材",
  "note": "顳下頜關節的關節盤及旋轉／滑動。"
 },
 {
  "id": "S49",
  "title": "A comprehensive review of the mental spine",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10968188/",
  "type": "解剖綜述",
  "note": "頦棘附著頦舌肌與頦舌骨肌，及形態變異。"
 },
 {
  "id": "S50",
  "title": "The anatomy of the sphenoidal and posterior ethmoidal ostia",
  "url": "https://pubmed.ncbi.nlm.nih.gov/28703849/",
  "type": "解剖研究",
  "note": "後篩竇與蝶竇開口位置；不把所有鼻竇都歸到中鼻道。"
 },
 {
  "id": "S51",
  "title": "NCBI：Anatomy, Head and Neck, Middle Cranial Fossa",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK545298/",
  "type": "醫學教材",
  "note": "視神經管的中顱窩／蝶骨小翼交界定位。"
 },
 {
  "id": "S52",
  "title": "劉宜學醫師：醫師國考醫學（一）解剖學題庫",
  "url": "https://wecareheart.com/medical-education/%E9%86%AB%E5%B8%AB%E5%9C%8B%E8%80%83-%E9%86%AB%E5%AD%B8%E4%B8%80-%E8%A7%A3%E5%89%96%E5%AD%B8%E9%A1%8C%E5%BA%AB/",
  "type": "他人題庫整理",
  "note": "參考翼腭窩方向題與圖像定位練習；第三方答案不等於考選部公告，本站未逐題認證整個題庫。"
 },
 {
  "id": "S53",
  "title": "NCBI：Anatomy, Back, Cervical Vertebrae",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK459200/",
  "type": "醫學教材",
  "note": "頸椎橫突孔、C1/C2 與 C7、棘突分叉和變異。"
 },
 {
  "id": "S54",
  "title": "NCBI：Anatomy, Back, Sacral Vertebrae",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK551653/",
  "type": "醫學教材",
  "note": "薦骨嵴、薦角、薦孔與薦管裂孔。"
 },
 {
  "id": "S55",
  "title": "Anatomic, functional, and radiographic review of the ligaments of the craniocervical junction",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8035576/",
  "type": "影像解剖綜述",
  "note": "前／後寰枕膜、覆膜與縱韌帶等的連續關係。"
 },
 {
  "id": "S56",
  "title": "NCBI：Anatomy, Bony Pelvis and Lower Limb: Pelvic Joints",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK538523/",
  "type": "醫學教材",
  "note": "薦尾關節可有纖維軟骨盤，不能把 23 個標準椎間盤推成薦尾完全無盤。"
 },
 {
  "id": "S57",
  "title": "NCBI：Cervical Sprain",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK541016/",
  "type": "醫學教材",
  "note": "揮鞭傷可涉及多種軟組織，不是每次追撞都必然斷某一條韌帶。"
 }
];
anatomySources.push(...bones2Sources);
const bones2Topics=[
 {
  "id": "bones2-video-notes",
  "title": "第二部影片全片逐段筆記",
  "english": "Full-video notes · 1:53:48",
  "summary": "37 段時間軸，從篩骨接續到薦骨與結尾回顧；影片要點與教材更正分開標示。",
  "sources": [
   "S5",
   "S6",
   "S37",
   "S38",
   "S39",
   "S40",
   "S41",
   "S42",
   "S43",
   "S44",
   "S45",
   "S46",
   "S47",
   "S48",
   "S49",
   "S50",
   "S51",
   "S53",
   "S54",
   "S55",
   "S56",
   "S57"
  ],
  "sections": [
   {
    "id": "scope",
    "title": "整理方法與全片索引",
    "html": "<p>來源為使用者上傳的〈2016DF01 02_骨骼(2)〉，全長 <strong>1:53:48</strong>。已將全長音訊分成 228 個連續片段自動轉錄，並檢視每 20 秒擷取的 341 張畫面，以可辨認板書核對。下列按 37 個教學區段重新表述，保留重複補講與結尾內容，另用綠色框標出教材核對／補充。</p><div class=\"study-note teal\"><b>教材核對／補充</b><br>這不是逐字稿，也不是連續播放全片的人工逐秒審聽紀錄。自動轉錄對英文、專有名詞與口語可能誤辨；不採用錯字或聽不清的細句。時間為約略回看區段，未提供單一 YouTube 影片 ID，因此不製作假造的秒數跳轉連結。上傳影片本體未公開放入網站。</div><p>建議先讀本頁時間軸，再點每段下方的主題頁，看完整比較表、中文圖與延伸定位題。影片提到「考過」「今年考題」是 2016 年授課語境，不等於本站已確認今日配題比例。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"時間區段比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">時間區段</th><th scope=\"col\">主要內容</th></tr></thead><tbody><tr><td>00:00–38:30</td><td>篩骨、顱窩、鼻腔、硬腭、下頜骨、舌骨</td></tr><tr><td>38:30–52:30</td><td>翼腭窩的位置、內容與七種通道</td></tr><tr><td>52:30–1:09:00</td><td>脊柱骨數與彎曲；回補翼腭窩神經；典型椎骨</td></tr><tr><td>1:09:00–1:34:00</td><td>肋椎關節、椎弓、孔洞、棘突、薦角與椎間盤</td></tr><tr><td>1:34:00–1:49:00</td><td>韌帶、寰枕膜、腰椎穿刺、揮鞭傷與寰樞關節</td></tr><tr><td>1:49:00–1:53:48</td><td>薦骨地標、突出間隙、曲度與下次銜接</td></tr></tbody></table></div>"
   },
   {
    "id": "v01",
    "title": "00:00–03:00｜接續第一部：篩骨、鼻甲與篩孔",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師以原先的頭骨圖接續篩骨：向上是雞冠、向下是垂直板，左右迷路含篩竇，並構成鼻腔側壁及眼眶內側壁。上鼻甲、中鼻甲屬篩骨，下鼻甲另成獨立骨。接著指出前、後篩孔與鼻腔／眼眶的相對位置。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"本段名稱比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">本段名稱</th><th scope=\"col\">要記的關係</th></tr></thead><tbody><tr><td>雞冠與篩板</td><td>往顱腔方向；與嗅孔所在水平板分開</td></tr><tr><td>篩骨垂直板</td><td>鼻中隔骨性部分</td></tr><tr><td>篩骨迷路</td><td>篩竇、眼眶內側與鼻腔側壁</td></tr><tr><td>前／後篩孔</td><td>篩神經血管相關通道；不是兩個副鼻竇</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>盲孔通常閉合，但可有導靜脈通過；上／中鼻甲是篩骨部分，下鼻甲才是獨立顏面骨。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-skull-face\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v02",
    "title": "03:00–05:00｜顱窩孔洞的 5／6／4 口訣",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師將顱底通道按講義分為前方 5 類、中方 6 類、後方 4 類，要求先記名稱，再與前一部的神經血管表對照。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"課堂分組比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">課堂分組</th><th scope=\"col\">列出的名稱</th></tr></thead><tbody><tr><td>5</td><td>盲孔、前篩孔、後篩孔、篩板嗅孔、視神經管</td></tr><tr><td>6</td><td>眶上裂、圓孔、卵圓孔、棘孔、破裂孔、頸動脈管</td></tr><tr><td>4</td><td>內耳道、頸靜脈孔、枕骨大孔、舌下神經管</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>這是通道「種類」而非實際洞數。視神經管的標準定位通常在中顱窩前緣／蝶骨小翼交界；前後篩孔也需結合眼眶側視角理解，不能只靠口訣判定所有孔的顱窩歸屬。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-skull-face\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v03",
    "title": "05:00–06:30｜14 塊顏面骨：先抓不成對的兩塊",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師從前面觀與顱底圖辨認顏面骨，提醒只有犁骨與下頜骨不成對，其餘六類成對；眼眶、鼻腔、腭與齒槽是辨認骨頭時的地標。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"記數比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">記數</th><th scope=\"col\">名稱</th></tr></thead><tbody><tr><td>6 對＝12</td><td>上頜骨、顴骨、鼻骨、淚骨、腭骨、下鼻甲</td></tr><tr><td>2 塊單獨骨</td><td>犁骨、下頜骨</td></tr><tr><td>合計</td><td>14</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>篩骨雖參與鼻腔與眼眶，仍列腦顱骨；不要因位置在顏面便把它加進 14 塊顏面骨。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-skull-face\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v04",
    "title": "06:30–08:30｜副鼻竇與鼻腔空間",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師點出額、篩、蝶、上頜四組鼻竇，將骨頭中的空腔與鼻腔位置連起來。上頜竇在上頜骨內；篩竇在篩骨迷路；蝶竇在蝶骨體。先知道它們藏在哪塊骨，再進一步學引流。</p><div class=\"study-note teal\"><b>教材核對／補充</b><br>鼻竇與鼻甲不同：前者為含氣腔，後者為骨性突起。鼻竇引流的詳細鼻道比較在主題頁，是教材補充。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-skull-face\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v05",
    "title": "08:30–12:00｜從下面看腭：鼻腔底就是口腔頂",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師藉張嘴與頭骨下面觀，說明腭是鼻腔與口腔之間的隔板。前方上排牙齒排列在硬腭外圍；固定骨性部分在前，可活動軟腭在後。再換成側視角，看到鼻腔在上、口腔在下，兩者後方連到咽。</p><div class=\"flow\" aria-label=\"概念流程\"><div class=\"flow-step\"><b>先認上排牙齒</b><small>下面觀，門牙在前</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">↓</span><div class=\"flow-step\"><b>看牙弓內側的隔板</b><small>下面是口腔頂，上面是鼻腔底</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">↓</span><div class=\"flow-step\"><b>向後分硬腭／軟腭</b><small>骨性硬腭在前，軟腭可活動</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">↓</span><div class=\"flow-step\"><b>換側視圖確認高度</b><small>鼻腔上、口腔下，後方是咽</small></div></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>影片把軟腭說成肌肉加軟骨；教材上軟腭主要為肌肉、腱膜、黏膜等，並非軟骨支架。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-palate-jaw\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v06",
    "title": "12:00–16:00｜硬腭四分之三／四分之一與鼻中隔",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師用顏色區分上頜骨腭突與腭骨水平板，前者形成硬腭前約 3/4，後者形成後約 1/4。再把正中線向上延伸成鼻中隔，區分篩骨垂直板、犁骨與前方軟骨。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"結構比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">結構</th><th scope=\"col\">組成</th></tr></thead><tbody><tr><td>硬腭前部</td><td>左右上頜骨腭突</td></tr><tr><td>硬腭後部</td><td>左右腭骨水平板</td></tr><tr><td>骨性鼻中隔</td><td>篩骨垂直板＋犁骨</td></tr><tr><td>鼻中隔前部</td><td>鼻中隔軟骨</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>3/4 與 1/4 指硬腭的骨性構成；不能用來算整個硬腭＋軟腭的比例。鼻中隔軟骨不列為骨性鼻中隔。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-palate-jaw\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v07",
    "title": "16:00–18:00｜上頜骨與孔／裂的名稱陷阱",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師在正面圖指出額骨的眶上孔、上頜骨的眶下孔、下頜骨的頦孔，連到三叉神經 V1、V2、V3 的顏面分支。特別把眶上孔／眶上裂、眶下孔／眶下裂對照，提醒差一字便是不同位置。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"出口比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">出口</th><th scope=\"col\">神經／骨</th></tr></thead><tbody><tr><td>眶上孔／切跡</td><td>眶上神經 V1；額骨</td></tr><tr><td>眶下孔</td><td>眶下神經 V2；上頜骨</td></tr><tr><td>頦孔</td><td>頦神經 V3 的下齒槽神經分支；下頜骨</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>三個顏面孔不是 V1、V2、V3 離開顱腔的原始出口；V2 先過圓孔，V3 先過卵圓孔。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-palate-jaw\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v08",
    "title": "18:00–20:00｜前鼻棘與後鼻棘：用支架比喻位置",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師用木工卡榫比喻鼻中隔與底部骨性標記的相接：前鼻棘由上頜骨形成，後鼻棘由腭骨形成。在側面與下面觀中，先找硬腭，再找其前、後正中突出。</p><div class=\"study-note teal\"><b>教材核對／補充</b><br>這個比喻用來辨認骨頭來源；實際鼻中隔支持與接合不只是靠兩個棘，還包括鼻嵴與多處骨性／軟骨性關係。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-palate-jaw\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v09",
    "title": "20:00–22:30｜上頜骨四突與切牙孔、切牙縫",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師依伸向哪一塊構造，記上頜骨四個突：額突向上，顴突向外，齒槽突向下，腭突向內。門牙後方正中是切牙孔；切牙縫相關區連到初級／次級腭的胚胎分界。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"突起比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">突起</th><th scope=\"col\">聯想</th></tr></thead><tbody><tr><td>額突</td><td>往額骨</td></tr><tr><td>顴突</td><td>往顴骨</td></tr><tr><td>齒槽突</td><td>容納牙根</td></tr><tr><td>腭突</td><td>左右合成硬腭前部</td></tr><tr><td>切牙孔</td><td>鼻腭神經通過</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>切牙孔、切牙縫與橫腭縫的用途不同；不要把初級／次級腭分界畫成上頜骨／腭骨的成人骨縫。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-palate-jaw\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v10",
    "title": "22:30–27:30｜臉與腭的胚胎來源，及唇腭裂更正",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師以正面簡圖把上唇分成正中的人中區與兩側區，再把圖延伸入口腔：初級腭在前，左右腭板融合成次級腭。講解目的在於把外面的唇與裡面的腭發育連在一起；下唇的左右下頜突融合另作比較。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"分區比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">分區</th><th scope=\"col\">記憶點</th></tr></thead><tbody><tr><td>初級腭</td><td>與內側鼻突合成的顎間節相關；切牙孔前方</td></tr><tr><td>次級腭</td><td>上頜突的左右腭板融合；切牙孔後方</td></tr><tr><td>上唇人中／兩側</td><td>來源不同，需透過融合形成完整上唇</td></tr><tr><td>唇與腭裂</td><td>依融合失敗部位與範圍分型</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br><strong>本段重要更正：</strong>影片說「單純唇裂不存在、一定合併腭裂」，不符合標準分類。唇裂可以單獨存在，也可以伴腭裂；腭裂亦可以沒有唇裂。不能將每一種裂隙都解釋成整塊組織完全缺失。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-palate-jaw\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v11",
    "title": "27:30–29:30｜腭骨 L 形與大、小腭孔",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師示範 L 形腭骨：水平板形成硬腭後部，垂直板位於鼻腔側壁後方，上端還有小部分參與眼眶底。後鼻棘也在腭骨水平板的正中後緣。大腭孔、小腭孔分別有大、小腭神經通過。</p><div class=\"study-note teal\"><b>教材核對／補充</b><br>眼眶底的小部分主要由腭骨眼眶突形成，並非整片垂直板直接成為眼眶底。大、小腭神經是與 V2 相關的感覺分支，但也有其他同行纖維。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-palate-jaw\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v12",
    "title": "29:30–32:30｜下頜骨體部：頦孔與頦棘肌肉",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師將下頜骨分成體、支、角，再在體部外側找頦孔、內側正中找頦棘。頦舌肌從頦棘到舌，拉動舌頭；頦舌骨肌從頦棘到舌骨，位於口底相關區。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"一字之差比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">一字之差</th><th scope=\"col\">功能／附著</th></tr></thead><tbody><tr><td>頦孔</td><td>頦神經出骨到皮膚／下唇</td></tr><tr><td>頦棘</td><td>頦舌肌、頦舌骨肌附著</td></tr><tr><td>頦舌肌</td><td>舌肌，重要動作是伸舌</td></tr><tr><td>頦舌骨肌</td><td>到舌骨，口底相關肌</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>上下頦棘的附著分別以頦舌肌／頦舌骨肌為主；口底主要肌性隔板是顎舌骨肌，不能把頦舌骨肌說成整個口底唯一構造。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-palate-jaw\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v13",
    "title": "32:30–34:30｜下頜角、冠突與髁突",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師指出下頜角，並用講義約 140° 作記憶值；接著比較前方冠突、後方髁突。冠突記顳肌附著，髁突頂端的下頜頭則與顳骨形成顳下頜關節。</p><div class=\"study-note teal\"><b>教材核對／補充</b><br>下頜角受年齡、牙列及個體差異影響；140° 是本課約數，不能當固定正常角度。冠突不是 TMJ 的關節頭。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-palate-jaw\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v14",
    "title": "34:30–36:30｜舌骨體、大角、小角與咽弓來源",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師以正面簡圖畫出舌骨體、短小的小角與向後外側延伸的大角，要求背其傳統胚胎來源：小角及體上部來自第二咽弓；大角及體下部來自第三咽弓。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"舌骨部分比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">舌骨部分</th><th scope=\"col\">課堂／傳統教材來源</th></tr></thead><tbody><tr><td>小角＋體上部</td><td>第二咽弓</td></tr><tr><td>大角＋體下部</td><td>第三咽弓</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>此為基礎考試常見分類。舌骨體細部來源在胚胎研究中仍有討論；先掌握小角第二、大角第三，不把整塊舌骨都歸到一個咽弓。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-palate-jaw\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v15",
    "title": "36:30–38:30｜頭骨下面觀複習，補入翼管",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師回顧正面的三個顏面神經出口與兩條眶裂，再從頭骨下方看切牙孔、大腭孔、小腭孔及破裂孔。新增蝶骨內的翼管，為接下來翼腭窩的交通路徑作準備。</p><div class=\"study-note teal\"><b>教材核對／補充</b><br>外面看得到的孔與深部管道要前後串起來；翼管神經經翼管到翼腭窩，並不是與鼻腭神經相同的一條神經。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-ppf\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v16",
    "title": "38:30–43:00｜翼腭窩的位置與三大內容",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師把遮蔽的顴弓等表層構造想像移除，放大上頜骨與蝶骨之間的深部凹陷：前方上頜骨，後方蝶骨，內側腭骨。窩內先記同名翼腭神經節、V2 上頜神經、上頜動脈。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"記憶順序比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">記憶順序</th><th scope=\"col\">要能說出的答案</th></tr></thead><tbody><tr><td>三面骨性位置</td><td>上頜骨後面、蝶骨前面、腭骨外側</td></tr><tr><td>神經節</td><td>翼腭神經節，副交感神經節</td></tr><tr><td>神經</td><td>V2 上頜神經</td></tr><tr><td>動脈</td><td>上頜動脈末段與分支</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>翼腭窩與顳下窩不是同一個窩；若只記「顴弓深面」會失去關鍵方向，仍須回到三塊骨的邊界。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-ppf\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v17",
    "title": "43:00–46:30｜七孔六腔：先把七種名字整理好",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師用字根分組：pterygo- 想到蝶骨翼突，palatine 想到腭，再加入熟悉的眶下裂與圓孔。這樣得到翼管、翼上頜裂、腭管、腭鞘管、蝶腭孔、眶下裂、圓孔七個主要通道。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"類型比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">類型</th><th scope=\"col\">七種名稱</th></tr></thead><tbody><tr><td>孔 Foramen</td><td>圓孔、蝶腭孔</td></tr><tr><td>裂 Fissure</td><td>眶下裂、翼上頜裂</td></tr><tr><td>管 Canal</td><td>翼管、大腭管、腭鞘管</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>口訣「七孔」把孔、裂、管合稱，正式名稱仍要分開。老師要求先背名稱，再背通往哪裡及神經，不要一開始把三層資訊混成一長串。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-ppf\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v18",
    "title": "46:30–52:30｜七條路通到哪裡：用鼻、眼、口、咽定位",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師先畫鼻腔、口腔、眼眶、咽與顱內的簡圖，再把翼腭窩放在深部中心，依講義 A–G 的路線逐一對照。圓孔與翼管被課堂合併連向顱內／顱底相關區，所以七種通道配成「六腔」口訣。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"目的區域比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">目的區域</th><th scope=\"col\">主要通道</th></tr></thead><tbody><tr><td>眼眶</td><td>眶下裂</td></tr><tr><td>鼻腔</td><td>蝶腭孔</td></tr><tr><td>鼻咽</td><td>腭鞘管</td></tr><tr><td>中顱窩</td><td>圓孔</td></tr><tr><td>破裂孔鄰近區</td><td>翼管</td></tr><tr><td>顳下窩</td><td>翼上頜裂</td></tr><tr><td>腭／口腔</td><td>大腭管，下行後到大／小腭孔</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>翼管後口與圓孔的目的位置並不完全相同；「六腔」是課堂合併記數。完整表需保留兩條路的精確交通區。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-ppf\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v19",
    "title": "52:30–54:30｜脊柱骨數：24 真椎＋2 融合骨",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>頭部結束後進入脊柱：頸 7、胸 12、腰 5，共 24 個自由椎；薦 5 融成一塊、尾通常 4 融成一塊，因此成人通常 26 塊骨。個別叫椎骨，疊成整根支持柱叫脊柱。</p><div class=\"study-note teal\"><b>教材核對／補充</b><br>33 個發育節段與成人 26 塊骨是不同算法。薦骨和尾骨不是普通單一椎骨的形狀，尾椎數與融合程度也有變異。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-vertebrae\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v20",
    "title": "54:30–57:00｜胸薦原發曲、頸腰次發曲",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師畫出頸、胸、腰、薦四個彎曲：胎兒已有胸曲與薦曲，方便胎兒屈曲；出生後因抬頭形成頸曲，因站立行走形成腰曲。課堂用約 3 個月、12 個月作發育時間聯想。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"分類比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">分類</th><th scope=\"col\">區域</th><th scope=\"col\">方向</th></tr></thead><tbody><tr><td>原發</td><td>胸、薦</td><td>後凸</td></tr><tr><td>次發</td><td>頸、腰</td><td>前凸</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>月份為教學約數，考點是發育動作與曲度分類。正常前凸／後凸與過度曲度病變要分開。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-vertebrae\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v21",
    "title": "57:00–59:30｜回頭補翼腭窩：各通道的神經",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師回到翼腭窩補上眶下、顴神經；翼管神經由大岩神經與深岩神經合成。大岩帶副交感節前纖維，深岩帶交感節後纖維。再補翼上頜裂的後上齒槽神經、大腭管的大／小腭神經、腭鞘管的咽分支。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"要成對背比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">要成對背</th><th scope=\"col\">纖維性質</th></tr></thead><tbody><tr><td>大岩神經 Greater petrosal</td><td>副交感節前</td></tr><tr><td>深岩神經 Deep petrosal</td><td>交感節後</td></tr><tr><td>合成翼管神經</td><td>兩種纖維同行</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>交感纖維已在上頸神經節突觸，不再在翼腭神經節突觸；副交感纖維才在翼腭神經節換神經元。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-ppf\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v22",
    "title": "59:30–1:06:00｜典型椎骨：兩個視角與三點連接",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師先畫後上方視角，再畫側面：椎體在前，椎弓在後，橫突向兩側、棘突向後。相鄰椎體以椎間盤相連；左右上、下關節突相接，形成三組連接的穩定架構。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"基本構造比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">基本構造</th><th scope=\"col\">數法</th></tr></thead><tbody><tr><td>椎體</td><td>1</td></tr><tr><td>椎弓</td><td>椎弓根＋椎板，左右成對</td></tr><tr><td>七個突起</td><td>1 棘＋2 橫＋2 上關節＋2 下關節</td></tr><tr><td>三組連接</td><td>前方椎體間連接＋左右小面關節</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>椎體間椎間盤是軟骨性聯合；兩側小面關節是滑液關節。三組連接的類型不全相同。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-vertebrae\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v23",
    "title": "1:06:00–1:09:00｜承重與特殊椎體：C1、C2、L5",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師用高樓柱子的粗細比喻椎體承重，越下方負荷較大。C1 沒有典型椎體；C2 有向上突起的齒突，英文 odontoid process 或 dens；腰部椎體較大，L5 是本課承重比較的代表。</p><div class=\"study-note teal\"><b>教材核對／補充</b><br>承重越大不代表每個骨量指標都沿全柱等比例增加；薦尾融合骨也不宜直接與單個典型椎體比較。齒突是 C2 的突起，不能把整個 C2 椎體都叫齒突。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-atlas-roots\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v24",
    "title": "1:09:00–1:14:30｜肋頭與肋結節：同一肋骨的兩種後端關節",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師畫典型肋骨從胸椎向前接胸骨的路線，再集中在後端：肋頭接椎體，肋結節接橫突。以第 3 肋為例，肋頭接 T2、T3；反過來 T3 椎體則有關節面接第 3、4 肋。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"題目起點比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">題目起點</th><th scope=\"col\">典型關係</th></tr></thead><tbody><tr><td>R3 肋頭接哪兩個椎體？</td><td>T2＋T3</td></tr><tr><td>T3 椎體接哪兩個肋頭？</td><td>R3＋R4</td></tr><tr><td>R3 肋結節接哪個橫突？</td><td>T3</td></tr><tr><td>第 n 肋頭 vs 肋結節</td><td>肋頭常對兩個椎體；肋結節對同號橫突</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>上述為典型雙關節面肋頭的規則；不要套到第 1、10、11、12 肋等例外，也不要把椎體半肋凹與小面關節混在一起。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-rib-joints\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v25",
    "title": "1:14:30–1:17:30｜例外肋：1、10、11、12 與浮肋",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師將第 2–9 肋作典型對兩個椎體的組；第 1、10、11、12 肋多只對同號椎體。再指出第 11、12 肋沒有接到橫突，因此 T11/T12 沒有典型橫突肋凹。</p><div class=\"study-note teal\"><b>教材核對／補充</b><br>T9、T10 與第 10 肋的關節面有變異。影片固定表是考試記憶模式，標本題仍以看到的結構為準。浮肋沒有前端胸骨連接，不代表它後端沒有肋頭關節。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-rib-joints\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v26",
    "title": "1:17:30–1:20:00｜椎弓根、椎板與椎板切除",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師以橫突附近作示意分界，把椎弓前部標為 pedicle 椎弓根，後部為 lamina 椎板；pedicle 的中文還可能見椎根、椎弓腳等翻譯。再以移除後方覆蓋讓神經有空間，解釋 laminectomy 椎板切除。</p><div class=\"study-note teal\"><b>教材核對／補充</b><br>椎間盤突出不是整片盤必然脫位；椎板切除也不是所有疼痛／麻木病例都必做的緊急處置。此段取其「椎板是後方覆蓋」的解剖概念，治療概括需要另行臨床評估。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-disc-lp\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v27",
    "title": "1:20:00–1:22:30｜椎孔串成椎管：不要只记最大最小",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師指出椎體與椎弓圍成椎孔；上下椎孔連成椎管，用來容納脊髓及相關神經構造。接著用椎體大小反推椎孔大小，作快速比較。</p><div class=\"study-note teal\"><b>教材核對／補充</b><br><strong>本段比較須更正：</strong>典型胸椎椎孔較小且近圓，頸椎與腰椎多較大且呈三角形；不能背成椎體越大、椎孔必然越小。成人較下方椎管不是脊髓本體，而是馬尾等構造。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-vertebrae\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v28",
    "title": "1:22:30–1:24:30｜頸椎橫突孔與椎動脈：C7 例外",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師指出画的綜合模型同時有肋骨關節與橫突孔，並非真實單一椎骨：胸椎有肋凹，頸椎有橫突孔。椎動脈通常從 C6 橫突孔進入、向上至 C1，不通常再向下繞到 C7。</p><div class=\"study-note teal\"><b>教材核對／補充</b><br>C7 橫突孔通常沒有椎動脈，但不一定完全空白；也可有小血管或椎動脈入孔的變異。模型圖上的頸胸特徵不可同時硬認成一個正常椎骨。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-vertebrae\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v29",
    "title": "1:24:30–1:30:30｜棘突、C7 地標與腰椎穿刺高度",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師用 C7 較突出的棘突作從頸部往下數椎骨的地標，再比較腰椎棘突較接近水平，因此穿刺從棘突間進入。髂嵴最高點連線約對 L4，常選 L3–L4 或 L4–L5 間隙。薦骨正中嵴由棘突融合；C1 無典型棘突，C2–C6 常分叉，C7 多不分叉。</p><div class=\"study-note teal\"><b>教材核對／補充</b><br>触到最突出的點不保證一定 C7；髂嵴連線亦有個體差異。影片「水平進針或撞骨後調整」的說法屬簡化操作敘述，此處只整理位置與骨性關系，不把它當操作指引。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-disc-lp\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v30",
    "title": "1:30:30–1:32:00｜薦角與 S5 下關節突",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師回到關節突，說明成人薦椎融合後，最下面 S5 的下關節突相關突起成為薦角，位於薦管裂孔附近。以融合椎的特化，將單一椎骨的結構對回薦骨地標。</p><div class=\"study-note teal\"><b>教材核對／補充</b><br>影片說薦尾之間沒有椎間盤，是配合標準 23 盤的口訣；薦尾關節可以有纖維軟骨盤，不能描述成兩骨在所有成人都只有黏住。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-vertebrae\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v31",
    "title": "1:32:00–1:34:00｜23 個椎間盤、纖維環與髓核",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師以 26 塊骨推算間隔，再扣掉 C1/C2 與薦尾之間，記為 23 個盤；並用餡餅／果凍比喻外層纖維軟骨與內層可變形髓核。髓核是脊索相關發育的重要考點。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"部分比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">部分</th><th scope=\"col\">課堂比喻</th><th scope=\"col\">作用</th></tr></thead><tbody><tr><td>纖維環 Annulus fibrosus</td><td>外圍固態支架</td><td>圍住髓核、承受張力</td></tr><tr><td>髓核 Nucleus pulposus</td><td>像果凍的半液態中心</td><td>分散壓力，受壓可改變形狀</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>標準 23 個指 C2–C3 至 L5–S1 的通常活動椎間盤。盤還有軟骨終板；也不是整片均一的軟骨。薦尾關節存在纖維軟骨的情況須另說。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-disc-lp\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v32",
    "title": "1:34:00–1:37:30｜韌帶空間圖與寰枕膜",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師依後到前指出棘上、棘間、黃韌帶，以及位在椎體後面的後縱韌帶、椎體前面的前縱韌帶。後縱韌帶雖叫「後」，却在椎管內的前壁區。再把圖延伸到枕骨／C1，介紹前寰枕膜與前縱韌帶、後寰枕膜與黃韌帶系统的關係。</p><div class=\"study-note teal\"><b>教材核對／補充</b><br>PLL 向上續成覆膜，是重要構造，不應忽略。膜與韌帶的上端連續關係可作基础記憶，但不能把所有韌帶都直接一對一改名成同一片膜。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-disc-lp\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v33",
    "title": "1:37:30–1:43:30｜腰椎穿刺：姿勢、膜層與腰池",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師以側躺屈曲、像蝦子的姿勢，解释拉開後方間隙；再從 L3–L4／L4–L5 進入，依序過棘上、棘間、黃韌帶、硬膜、蛛網膜，到蛛網膜下腔。成人脊髓約止 L1–L2，硬膜／蛛網膜囊延至約 S2，所以較下方腰池有腦脊髓液可採樣。</p><div class=\"flow\" aria-label=\"概念流程\"><div class=\"flow-step\"><b>後方皮膚與皮下</b><small>正中腰部入路</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">↓</span><div class=\"flow-step\"><b>棘上 → 棘間 → 黃韌帶</b><small>跨過後方韌帶</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">↓</span><div class=\"flow-step\"><b>硬膜外腔 → 硬膜 → 蛛網膜</b><small>腔隙與實體膜要分開</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">↓</span><div class=\"flow-step\"><b>蛛網膜下腔／腰池</b><small>腦脊髓液及馬尾神經根</small></div></div><div class=\"study-note teal\"><b>教材核對／補充</b><br><strong>本段必須更正：</strong>腰池不是完全空白，仍有馬尾神經根。影片「一針到底碰骨再退」是過度簡化，不能作為實際安全操作方法；本页只用來掌握層次、空間與終止高度。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-disc-lp\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v34",
    "title": "1:43:30–1:45:30｜揮鞭傷：過伸與過屈拉哪一側",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師以汽车碰撞的慣性示範：過度向後伸展牽拉前方構造，記前縱韌帶；向前屈曲牽拉後方構造，記棘上等後方韌帶。口述時曾說「後縱」後自行更正為棘上，整理採用更正後內容。</p><div class=\"study-note teal\"><b>教材核對／補充</b><br>真實揮鞭傷可包含複杂加減速、肌肉、關節囊、韌帶與盤的變化，不是單純「後撞一定斷前縱，前撞一定斷棘上」。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-disc-lp\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v35",
    "title": "1:45:30–1:49:00｜寰椎撐頭、樞椎轉頭：yes 與 no",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師以 Atlas 撐起頭部的名稱聯想，複習 C1 無典型椎體與棘突，枕髁接 C1 的寰枕關節主要做點頭「yes」。C2 齒突作旋轉軸，C1/C2 寰樞關節主要做左右轉頭「no」。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"動作比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">動作</th><th scope=\"col\">主要關節</th></tr></thead><tbody><tr><td>點頭</td><td>枕骨–C1 寰枕關節</td></tr><tr><td>左右轉頭</td><td>C1–C2 寰樞關節</td></tr><tr><td>齒突／dens</td><td>C2 的向上突起</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>這是主要動作，並非關節只容許一種運動。课堂穿插的職場與神話故事用來聯想，不列為國考解剖事實。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-atlas-roots\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v36",
    "title": "1:49:00–1:52:30｜薦孔、薦管裂孔、薦骨岬與薦骨嵴",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師最後補回椎孔與椎間孔：前者在中央串成椎管，後者在側面供脊神經離開。對回薦骨，前／後薦孔是相關神經支出口，薦管裂孔是後下方開口；薦骨岬在前上方，與骨盆入口相關。薦正中嵴記棘突，薦外側嵴記橫突；再示範講義中翼部以下的「薦三角」。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"本段地標比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">本段地標</th><th scope=\"col\">記憶</th></tr></thead><tbody><tr><td>薦孔</td><td>兩側神經支出口，通常各面四對</td></tr><tr><td>薦管裂孔</td><td>後下方，鄰近薦角</td></tr><tr><td>薦骨岬</td><td>S1 前上緣，骨盆入口後方</td></tr><tr><td>薦正中嵴／外側嵴</td><td>棘突／橫突融合</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>前薦孔通腹側支、後薦孔通背側支；不是脊髓本體穿出。薦管裂孔的精確形成是下位薦椎後弓未閉合。教材另補薦中間嵴由關節突融合。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-vertebrae\">相關比較表與教材核對 →</a></p>"
   },
   {
    "id": "v37",
    "title": "1:52:30–1:53:48｜結尾回顧：常見突出間隙與曲度",
    "html": "<p class=\"video-label\">影片重點整理 · 約略回看時間</p><p>老師最後強調常見腰椎間盤突出層級 L4–L5、L5–S1；盤是兩個椎骨之間的構造，不能把它說成單一 L4 或 L5 椎骨。再以胸部後凸、腰部前凸、側彎作關键詞回顧，說明下次從講義第 22 頁後半接續。</p><div class=\"study-note teal\"><b>教材核對／補充</b><br>L4–L5／L5–S1 是常見層級，但排序依族群與研究而變。哪條神經根受壓還需知道突出方向，相關離開根／通過根比較是本站教材延伸。</div><p><a href=\"#/subject/anatomy/chapter/bones2/topic/bones2-atlas-roots\">相關比較表與教材核對 →</a></p>"
   }
  ]
 },
 {
  "id": "bones2-skull-face",
  "title": "篩骨、顱窩與顏面骨",
  "english": "Ethmoid · cranial fossae · facial bones",
  "summary": "接續第一部：整理 5／6／4 口訣、14 塊顏面骨與鼻腔骨性定位。",
  "sources": [
   "S5",
   "S8",
   "S50",
   "S51"
  ],
  "sections": [
   {
    "id": "ethmoid",
    "title": "01｜篩骨：上、下、外側各有不同任務",
    "html": "<p>先用篩板作水平基準：雞冠向上進入顱腔，垂直板向下形成骨性鼻中隔的一部分；左右篩骨迷路含篩竇，並參與鼻腔外側壁與眼眶內側壁。把這幾個部位畫在同一張冠狀面圖，比各背一個名字更容易定位。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"篩骨部位比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">篩骨部位</th><th scope=\"col\">位置／功能</th><th scope=\"col\">容易混淆</th></tr></thead><tbody><tr><td>雞冠 Crista galli</td><td>篩板上方，大腦鐮附著</td><td>不是鼻中隔主體</td></tr><tr><td>篩板 Cribriform plate</td><td>鼻腔頂與前顱窩底；嗅神經纖維穿孔</td><td>嗅神經由多個小孔通過，並非只有一個大洞</td></tr><tr><td>垂直板 Perpendicular plate</td><td>骨性鼻中隔上部</td><td>不要與腭骨垂直板的鼻腔外側壁混淆</td></tr><tr><td>篩骨迷路／眶板</td><td>含篩竇；眶板非常薄，構成眶內側壁</td><td>紙樣板 Lamina papyracea 是眶板的常用名稱</td></tr><tr><td>上、中的鼻甲</td><td>篩骨的突起，增大黏膜表面</td><td>下鼻甲是另一塊獨立顏面骨</td></tr></tbody></table></div>"
   },
   {
    "id": "fossae",
    "title": "02｜影片的 5／6／4：記分類，也記標準位置",
    "html": "<p>影片把顱底重要通道整理成前方 5 類、中方 6 類、後方 4 類。這是授課用的分組口訣；左右成對的孔及篩板多孔都被合併成一個名稱，因此<strong>不是實際孔洞總數</strong>。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"影片分組比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">影片分組</th><th scope=\"col\">影片列舉的名稱</th><th scope=\"col\">教材核對</th></tr></thead><tbody><tr><td>前方「5」</td><td>盲孔、前篩孔、後篩孔、篩板嗅孔、視神經管</td><td>前／後篩孔位於額篩縫眶側區；視神經管通常歸在中顱窩前緣／蝶骨小翼交界，不宜硬記成純前顱窩孔</td></tr><tr><td>中方「6」</td><td>眶上裂、圓孔、卵圓孔、棘孔、破裂孔、頸動脈管</td><td>圓 V2、卵 V3、棘腦膜中動脈；頸內動脈經頸動脈管後走過破裂孔上方</td></tr><tr><td>後方「4」</td><td>內耳道、頸靜脈孔、枕骨大孔、舌下神經管</td><td>VII／VIII；IX／X／XI；延髓脊髓交界及椎動脈等；XII</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>盲孔通常閉合，但少數可有導靜脈通過。不要把「盲」讀成所有人必然完全無通道。破裂孔在生體多由纖維軟骨填充，頸內動脈不是直接由它垂直穿出。</div><p>完整「孔洞—神經—血管」總表可回看第一章顱底頁；本頁聚焦第二部新增的分類與定位差異。</p><p><a href=\"#/subject/anatomy/chapter/bones/topic/foramina\">第一章：顱底孔洞 →</a></p>"
   },
   {
    "id": "facial14",
    "title": "03｜顏面骨 14：6 對＋2 塊單獨骨",
    "html": "<p>骨數的快速算法是 6 種成對骨 × 2，再加 2 種不成對骨。鼻中隔不是一塊完整的單一骨；下鼻甲則必須另外計數。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"骨頭比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">骨頭</th><th scope=\"col\">數目</th><th scope=\"col\">本片的定位重點</th></tr></thead><tbody><tr><td>上頜骨 Maxilla</td><td>2</td><td>上排牙齒、硬腭前部、鼻腔與眼眶底</td></tr><tr><td>顴骨 Zygomatic</td><td>2</td><td>面頰突出、眼眶外側與顴弓前部</td></tr><tr><td>鼻骨 Nasal</td><td>2</td><td>鼻樑上部</td></tr><tr><td>淚骨 Lacrimal</td><td>2</td><td>眼眶內側壁，鄰近淚囊／鼻淚管</td></tr><tr><td>腭骨 Palatine</td><td>2</td><td>硬腭後部與鼻腔外側壁，少量參與眼眶底</td></tr><tr><td>下鼻甲 Inferior nasal concha</td><td>2</td><td>鼻腔外側壁的獨立骨</td></tr><tr><td>犁骨 Vomer</td><td>1</td><td>骨性鼻中隔後下部</td></tr><tr><td>下頜骨 Mandible</td><td>1</td><td>下排牙齒及可動下頜</td></tr></tbody></table></div><details><summary>上鼻甲、中鼻甲、下鼻甲，是三對獨立顏面骨嗎？</summary><p>不是。上、中的鼻甲屬篩骨；只有下鼻甲作為獨立顏面骨計入 14 塊。</p></details>"
   },
   {
    "id": "septum",
    "title": "04｜鼻中隔與鼻腔側壁：先分開兩張地圖",
    "html": "<figure><a href=\"assets/bones2-palate.svg\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/bones2-palate.svg\" alt=\"鼻中隔與硬腭的冠狀面、下面觀概念圖\" loading=\"lazy\" width=\"1000\" height=\"700\"></a><figcaption>上圖以鼻中隔分隔左右鼻腔；下圖顯示硬腭的前後骨性分區。本站原創概念示意，非實際比例；點圖可放大。</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"結構比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">結構</th><th scope=\"col\">主要組成</th><th scope=\"col\">讀題線索</th></tr></thead><tbody><tr><td>骨性鼻中隔</td><td>篩骨垂直板＋犁骨</td><td>骨性：不把鼻中隔軟骨算進骨頭</td></tr><tr><td>鼻中隔前部</td><td>鼻中隔軟骨及周邊軟組織</td><td>鼻中隔不全是骨</td></tr><tr><td>鼻腔外側壁</td><td>鼻甲等多骨構成；腭骨垂直板位於後部</td><td>與正中線的鼻中隔相對</td></tr><tr><td>鼻腔底／口腔頂</td><td>硬腭</td><td>同一塊隔板的上下兩面</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>影片以木工卡榫比喻鼻中隔被骨性基底支持，便於理解位置；實際接合包含鼻嵴與多處關節關係，不能把前、後鼻棘當作兩根單獨的定位螺栓。</div>"
   },
   {
    "id": "sinuses",
    "title": "05｜四組副鼻竇：名稱與引流不要混背",
    "html": "<p>副鼻竇是顱骨中的含氣腔，與鼻腔相通；鼻甲則是伸入鼻腔的骨性突起，兩者不是同一種構造。以下引流位置為額外教材補充。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"鼻竇比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">鼻竇</th><th scope=\"col\">所在骨</th><th scope=\"col\">主要引流位置</th></tr></thead><tbody><tr><td>額竇 Frontal</td><td>額骨</td><td>中鼻道，常經額隱窩／額鼻通道</td></tr><tr><td>上頜竇 Maxillary</td><td>上頜骨</td><td>中鼻道；自然開口相對較高</td></tr><tr><td>篩竇 Ethmoidal</td><td>篩骨迷路</td><td>前、中組多入中鼻道；後組多入上鼻道</td></tr><tr><td>蝶竇 Sphenoidal</td><td>蝶骨體</td><td>蝶篩隱窩，位於上鼻甲後上方</td></tr></tbody></table></div><details><summary>下鼻道最常要記的開口是鼻竇嗎？</summary><p>不是主要鼻竇開口，而是鼻淚管。蝶竇也不要放到下鼻道或中鼻道。</p></details>"
   }
  ]
 },
 {
  "id": "bones2-palate-jaw",
  "title": "硬腭、下頜骨與舌骨",
  "english": "Palate · mandible · hyoid",
  "summary": "硬腭骨性分區、腭部孔洞、V1／V2／V3 顏面出口及肌肉附著。",
  "sources": [
   "S5",
   "S39",
   "S40",
   "S41",
   "S42",
   "S48",
   "S49"
  ],
  "sections": [
   {
    "id": "hard-soft",
    "title": "01｜硬腭與軟腭：先判斷分母",
    "html": "<p>從張嘴向上看，前面的固定骨性頂部是硬腭；後面的可活動區是軟腭。硬腭上面同時是鼻腔底，下面是口腔頂。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較</th><th scope=\"col\">硬腭 Hard palate</th><th scope=\"col\">軟腭 Soft palate</th></tr></thead><tbody><tr><td>組成</td><td>骨性基礎＋黏膜覆蓋</td><td>肌肉、腱膜及黏膜等軟組織</td></tr><tr><td>位置</td><td>腭的前方</td><td>後方，延續到懸雍垂區</td></tr><tr><td>骨性分區</td><td>上頜骨腭突約前 3/4；腭骨水平板約後 1/4</td><td>沒有以軟骨作主要支架</td></tr><tr><td>功能方向</td><td>隔開鼻腔與口腔</td><td>吞嚥及發音時參與鼻咽閉合</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>「硬腭骨性前 3/4、後 1/4」和「整個腭前約 2/3 為硬腭、後約 1/3 為軟腭」的分母不同。影片稱軟腭為肌肉與軟骨，這裡更正為肌肉與腱膜等軟組織。</div>"
   },
   {
    "id": "maxilla",
    "title": "02｜上頜骨四突與前、後鼻棘",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"突起比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">突起</th><th scope=\"col\">伸展方向</th><th scope=\"col\">形成／連接</th></tr></thead><tbody><tr><td>額突 Frontal process</td><td>向上</td><td>與額骨、鼻骨等相鄰</td></tr><tr><td>顴突 Zygomatic process</td><td>向外側</td><td>與顴骨連接</td></tr><tr><td>齒槽突 Alveolar process</td><td>向下</td><td>容納上排牙根的齒槽</td></tr><tr><td>腭突 Palatine process</td><td>向內側</td><td>左右合成硬腭前部</td></tr></tbody></table></div><div class=\"table-scroll\" role=\"region\" aria-label=\"骨性標記比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">骨性標記</th><th scope=\"col\">所屬骨</th><th scope=\"col\">辨認方式</th></tr></thead><tbody><tr><td>前鼻棘 Anterior nasal spine</td><td>左右上頜骨</td><td>鼻孔下方正中線突出</td></tr><tr><td>後鼻棘 Posterior nasal spine</td><td>左右腭骨水平板</td><td>硬腭後緣正中突出</td></tr><tr><td>眶下孔 Infraorbital foramen</td><td>上頜骨</td><td>顏面眶下緣下方；與眼眶內的眶下裂分開</td></tr></tbody></table></div><p>把「腭突」與「腭骨」分開：前者是上頜骨的一部分，後者是另外一對 L 形骨。</p>"
   },
   {
    "id": "palatine",
    "title": "03｜腭骨 L 形：水平、垂直與頂端眼眶突",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"部分比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">部分</th><th scope=\"col\">參與構造</th><th scope=\"col\">要記的方向</th></tr></thead><tbody><tr><td>水平板 Horizontal plate</td><td>硬腭後部／鼻腔底後部</td><td>水平向內</td></tr><tr><td>垂直板 Perpendicular plate</td><td>鼻腔外側壁後部、翼腭窩內側壁</td><td>上下延伸</td></tr><tr><td>眼眶突 Orbital process</td><td>小部分眼眶底</td><td>在垂直板上端；不是整片垂直板都伸進眼眶</td></tr><tr><td>蝶突／蝶腭切跡</td><td>與蝶骨接合，形成蝶腭孔相關邊界</td><td>蝶腭孔通向鼻腔</td></tr><tr><td>錐突 Pyramidal process</td><td>向後下，鄰近翼板</td><td>小腭管／孔相關區</td></tr></tbody></table></div><div class=\"table-scroll\" role=\"region\" aria-label=\"腭部孔洞比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">腭部孔洞</th><th scope=\"col\">主要通過神經</th><th scope=\"col\">對應區</th></tr></thead><tbody><tr><td>切牙孔／門齒孔 Incisive foramen</td><td>鼻腭神經 Nasopalatine，V2 相關分支</td><td>硬腭前部，中線上門牙後方</td></tr><tr><td>大腭孔 Greater palatine foramen</td><td>大腭神經、血管</td><td>硬腭後外側，向前供應硬腭</td></tr><tr><td>小腭孔 Lesser palatine foramina</td><td>小腭神經、血管</td><td>大腭孔後方，供應軟腭等</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>腭神經的感覺纖維屬 V2；腭部血管與自律神經纖維也會同行。不能把「V2 分支」誤解成所有同行纖維都起源於三叉神經。</div>"
   },
   {
    "id": "embryology",
    "title": "04｜初級腭、次級腭與唇腭裂",
    "html": "<p>切牙孔是胚胎學分區的重要地標。初級腭位於其前方；次級腭位於其後方，包含大部分硬腭與軟腭。<strong>胚胎分區與成人上頜骨／腭骨分界不是同一條線。</strong></p><div class=\"table-scroll\" role=\"region\" aria-label=\"胚胎構造比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">胚胎構造</th><th scope=\"col\">主要來源</th><th scope=\"col\">連結成人位置</th></tr></thead><tbody><tr><td>初級腭 Primary palate</td><td>兩側內側鼻突合成的顎間節／intermaxillary segment</td><td>切牙孔前方；與上唇人中及前頜區發育相聯</td></tr><tr><td>次級腭 Secondary palate</td><td>左右上頜突的腭板升起並融合</td><td>切牙孔後方；大部分硬腭及軟腭</td></tr><tr><td>上唇</td><td>內側鼻突與左右上頜突的結合</td><td>未正常結合可有唇裂</td></tr><tr><td>下唇／下頜</td><td>左右下頜突的結合</td><td>不要套用上唇的三區來源</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>影片說「沒有單純唇裂，唇裂一定合併腭裂」，此說法不正確。CDC 明確區分唇裂伴或不伴腭裂，以及單獨腭裂。唇裂也不是一律整塊人中或初級腭完全缺失；應依實際融合部位與裂隙範圍描述。</div><details><summary>初級／次級腭分界，等於上頜骨／腭骨的橫腭縫嗎？</summary><p>不等於。切牙孔附近分初級／次級；橫腭縫較後方，分上頜骨腭突與腭骨水平板。</p></details>"
   },
   {
    "id": "trigeminal",
    "title": "05｜三個顏面出口：孔、裂、神經分開",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"孔／切跡比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">孔／切跡</th><th scope=\"col\">骨頭</th><th scope=\"col\">通過的神經</th><th scope=\"col\">三叉分支</th></tr></thead><tbody><tr><td>眶上孔／切跡 Supraorbital</td><td>額骨</td><td>眶上神經</td><td>V1 眼神經 → 額神經分支</td></tr><tr><td>眶下孔 Infraorbital</td><td>上頜骨</td><td>眶下神經</td><td>V2 上頜神經延續</td></tr><tr><td>頦孔 Mental</td><td>下頜骨</td><td>頦神經</td><td>V3 → 下齒槽神經的終末分支</td></tr></tbody></table></div><div class=\"table-scroll\" role=\"region\" aria-label=\"相似名稱比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">相似名稱</th><th scope=\"col\">位置與交通</th><th scope=\"col\">避免混淆</th></tr></thead><tbody><tr><td>眶上孔 vs 眶上裂</td><td>前者在眶上緣；後者在眼眶後方連中顱窩</td><td>眶上裂另有 III、IV、V1、VI 等</td></tr><tr><td>眶下孔 vs 眶下裂</td><td>前者開於顏面；後者在眼眶後下方連翼腭窩／顳下窩</td><td>V2 從圓孔進翼腭窩後才進眼眶</td></tr><tr><td>上頜竇 vs 眶下孔</td><td>前者是上頜骨內含氣腔；後者是神經血管出口</td><td>不是同一個空腔或孔洞</td></tr></tbody></table></div><div class=\"flow\" aria-label=\"概念流程\"><div class=\"flow-step\"><b>V2 經圓孔</b><small>由中顱窩進翼腭窩</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">↓</span><div class=\"flow-step\"><b>眶下神經經眶下裂</b><small>進眼眶，在眶下溝／管向前</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">↓</span><div class=\"flow-step\"><b>經眶下孔到顏面</b><small>供應下眼瞼、鼻旁、上唇等感覺</small></div></div>"
   },
   {
    "id": "mandible",
    "title": "06｜下頜骨：體、支、角與兩個突起",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"部位比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">部位</th><th scope=\"col\">標記</th><th scope=\"col\">關係</th></tr></thead><tbody><tr><td>體 Body</td><td>頦孔、齒槽部、內側頦棘</td><td>頦孔在外面；頦棘在內側正中</td></tr><tr><td>支 Ramus</td><td>下頜孔、冠突、髁突</td><td>內側下頜孔進入下頜管</td></tr><tr><td>冠突 Coronoid process</td><td>前上方尖突</td><td>顳肌附著</td></tr><tr><td>髁突 Condylar process</td><td>後上方，有下頜頭／頸</td><td>下頜頭參與顳下頜關節</td></tr><tr><td>下頜切跡 Mandibular notch</td><td>冠突與髁突之間</td><td>勿當作神經進入下頜管的下頜孔</td></tr><tr><td>下頜角 Angle</td><td>體與支交界</td><td>角度隨年齡、牙列與個體不同，影片約 140° 不是固定標準</td></tr></tbody></table></div><div class=\"flow\" aria-label=\"概念流程\"><div class=\"flow-step\"><b>下齒槽神經（V3）</b><small>進入下頜支內側下頜孔；顎舌骨神經多在入孔前分出</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">↓</span><div class=\"flow-step\"><b>沿下頜管走行</b><small>支配下排牙齒等</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">↓</span><div class=\"flow-step\"><b>頦神經由頦孔出來</b><small>供應下唇與頦部皮膚感覺；切牙分支續在骨內</small></div></div>"
   },
   {
    "id": "mental-spines",
    "title": "07｜頦棘肌肉：名字差一個字，功能不同",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"構造／肌肉比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">構造／肌肉</th><th scope=\"col\">起點</th><th scope=\"col\">終點與重點</th></tr></thead><tbody><tr><td>上頦棘／上頦結節</td><td>下頜骨內側正中</td><td>頦舌肌 Genioglossus 起點</td></tr><tr><td>頦舌肌 Genioglossus</td><td>上頦棘</td><td>伸入舌；重要動作是伸舌，固定舌根</td></tr><tr><td>下頦棘／下頦結節</td><td>下頜骨內側正中</td><td>頦舌骨肌 Geniohyoid 起點</td></tr><tr><td>頦舌骨肌 Geniohyoid</td><td>下頦棘</td><td>到舌骨，拉舌骨向前上；是口底相關肌</td></tr><tr><td>顎舌骨肌 Mylohyoid</td><td>下頜骨內側顎舌骨線</td><td>構成口底主要肌性隔板</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>影片以「口腔底正中央」描述頦舌骨肌；口底的主要肌性隔板是顎舌骨肌，頦舌骨肌在其上方。頦舌肌與頦舌骨肌不能互換。頦棘形態可變，不能硬認成所有人皆有四個獨立尖棘。</div>"
   },
   {
    "id": "tmj",
    "title": "08｜顳下頜關節：骨頭之外還有關節盤",
    "html": "<p>下頜頭與顳骨的下頜窩／關節結節構成顳下頜關節 TMJ。教材延伸：關節盤將關節腔分成上下兩部，張口同時牽涉旋轉與向前滑動。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"關節部分比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">關節部分</th><th scope=\"col\">主要運動</th><th scope=\"col\">讀圖重點</th></tr></thead><tbody><tr><td>關節盤下方</td><td>下頜頭的旋轉</td><td>張口初期的重要成分</td></tr><tr><td>關節盤上方</td><td>盤與下頜頭複合體向前滑動</td><td>張口較大時沿關節結節滑動</td></tr><tr><td>冠突</td><td>肌肉附著，並非 TMJ 的關節頭</td><td>顳肌向上牽拉使閉口</td></tr></tbody></table></div><details><summary>冠突與髁突，哪個與顳骨形成顳下頜關節？</summary><p>髁突的下頜頭。冠突主要記顳肌附著。</p></details>"
   },
   {
    "id": "hyoid",
    "title": "09｜舌骨：獨立懸吊與第二／第三咽弓",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"舌骨部分比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">舌骨部分</th><th scope=\"col\">傳統胚胎分類</th><th scope=\"col\">位置</th></tr></thead><tbody><tr><td>小角 Lesser horn</td><td>第二咽弓</td><td>體與大角交界附近的小突起</td></tr><tr><td>體上部</td><td>第二咽弓</td><td>傳統教材的上部來源</td></tr><tr><td>大角 Greater horn</td><td>第三咽弓</td><td>向後外側延伸的長角</td></tr><tr><td>體下部</td><td>第三咽弓</td><td>傳統教材的下部來源</td></tr></tbody></table></div><p>舌骨位於前頸，作為舌與多種頸部肌肉的附著支架；它不與其他骨形成一般骨性關節，而由肌肉與韌帶懸吊。第二／第三咽弓的分法是本課與一般考試常用分類，胚胎研究對舌骨體的細部來源仍有討論。</p>"
   }
  ]
 },
 {
  "id": "bones2-ppf",
  "title": "翼腭窩：七種通道與六個區域",
  "english": "Pterygopalatine fossa",
  "summary": "用空間方向串起圓孔、眶下裂、蝶腭孔、翼管及腭管，區分神經節纖維。",
  "sources": [
   "S37",
   "S38",
   "S35"
  ],
  "sections": [
   {
    "id": "location",
    "title": "01｜先找到凹陷：上頜骨後、蝶骨前、腭骨外",
    "html": "<p>翼腭窩是深部狹小空間，位於上頜骨後方與蝶骨翼突根前方，腭骨垂直板在其內側。影片把遮住的表層結構想像移除，再放大局部，目的在於看清三骨圍成的關係。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"邊界比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">邊界</th><th scope=\"col\">主要骨性構造</th><th scope=\"col\">相鄰概念</th></tr></thead><tbody><tr><td>前壁</td><td>上頜骨後面</td><td>前面是上頜骨／上頜竇區</td></tr><tr><td>後壁</td><td>蝶骨翼突根、相關蝶骨大翼前面</td><td>圓孔、翼管開口位於後壁區</td></tr><tr><td>內側壁</td><td>腭骨垂直板</td><td>蝶腭孔往鼻腔</td></tr><tr><td>外側</td><td>翼上頜裂開放</td><td>往顳下窩交通</td></tr><tr><td>下方</td><td>逐漸變窄，續入腭管</td><td>往腭／口腔</td></tr></tbody></table></div><div class=\"table-scroll\" role=\"region\" aria-label=\"窩比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">窩</th><th scope=\"col\">大概位置</th><th scope=\"col\">代表內容</th></tr></thead><tbody><tr><td>顳窩 Temporal fossa</td><td>顴弓上方的頭側凹陷</td><td>顳肌</td></tr><tr><td>顳下窩 Infratemporal fossa</td><td>顴弓下方、下頜支深面</td><td>翼肌、V3 分支、上頜動脈等</td></tr><tr><td>翼腭窩 Pterygopalatine fossa</td><td>更深、更內側，上頜骨後方</td><td>V2、翼腭神經節、上頜動脈末段分支</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>三個窩不是同一個空間的三種名字。翼腭窩的位置不要只靠「顴弓上或下」判断，先找上頜骨、翼突與腭骨。</div>"
   },
   {
    "id": "routes",
    "title": "02｜七種通道，連六個區域",
    "html": "<figure><a href=\"assets/bones2-ppf.svg\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/bones2-ppf.svg\" alt=\"翼腭窩七種主要通道與鄰近區域交通關係圖\" loading=\"lazy\" width=\"1000\" height=\"700\"></a><figcaption>連線表示交通關係；兩條後方路線分別連中顱窩與破裂孔鄰近區。本站原創概念示意，非實際比例；點圖可放大。</figcaption></figure><p>影片口訣是<strong>「七孔六腔」</strong>，其中「孔」泛指孔、裂與管，並非七個名稱都叫 foramen。「六腔」是課堂對鄰近區域的合併計數；依是否把破裂孔鄰近區另計，教材的區域數可能不同。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"方向比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">方向</th><th scope=\"col\">通道</th><th scope=\"col\">通往哪裡</th><th scope=\"col\">主要通過物</th></tr></thead><tbody><tr><td>後上</td><td>圓孔 Foramen rotundum</td><td>中顱窩</td><td>V2 上頜神經</td></tr><tr><td>上／前上</td><td>眶下裂 Inferior orbital fissure</td><td>眼眶</td><td>眶下、顴神經及眶下血管等</td></tr><tr><td>內側</td><td>蝶腭孔 Sphenopalatine foramen</td><td>鼻腔</td><td>蝶腭動脈；鼻腭及後上鼻神經等</td></tr><tr><td>外側</td><td>翼上頜裂 Pterygomaxillary fissure</td><td>顳下窩</td><td>上頜動脈由外側進入；後上齒槽分支等</td></tr><tr><td>下方</td><td>大腭管 Greater palatine canal</td><td>腭／口腔</td><td>下行腭血管、大／小腭神經；再經腭孔出來</td></tr><tr><td>後方</td><td>翼管 Pterygoid / Vidian canal</td><td>破裂孔鄰近區</td><td>翼管神經與血管</td></tr><tr><td>後內側</td><td>腭鞘管 Palatovaginal / pharyngeal canal</td><td>鼻咽</td><td>咽神經分支與咽血管</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>先記交通方向，再補通過物。圓孔、蝶腭孔是 foramen；眶下裂、翼上頜裂是 fissure；翼管、大腭管、腭鞘管是 canal。不同影像研究可能另分小管，這七種是本課主幹，不是所有變異通道的上限。</div>"
   },
   {
    "id": "contents",
    "title": "03｜三大內容：V2、上頜動脈末段、翼腭神經節",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"內容比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">內容</th><th scope=\"col\">如何到此</th><th scope=\"col\">重要分支／任務</th></tr></thead><tbody><tr><td>V2 上頜神經</td><td>由圓孔進入</td><td>眶下、顴、後上齒槽等分支；與翼腭神經節交通</td></tr><tr><td>上頜動脈末段</td><td>經翼上頜裂由顳下窩進入</td><td>蝶腭、眶下、下行腭等分支</td></tr><tr><td>翼腭神經節 Pterygopalatine ganglion</td><td>位於窩內，與 V2 相連</td><td>副交感節後纖維借 V2 分支分布到腺體</td></tr><tr><td>脂肪、靜脈及小分支</td><td>填充窩內及通道</td><td>影像與疾病傳播時也要考慮</td></tr></tbody></table></div><div class=\"flow\" aria-label=\"概念流程\"><div class=\"flow-step\"><b>神經或血管到翼腭窩</b><small>V2 由後上圓孔；上頜動脈由外側翼上頜裂</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">↓</span><div class=\"flow-step\"><b>依目的地選通道</b><small>鼻腔走蝶腭孔，眼眶走眶下裂，腭部走腭管</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">↓</span><div class=\"flow-step\"><b>把通道和分布合併背</b><small>方向 → 通道 → 內容 → 目的地</small></div></div>"
   },
   {
    "id": "autonomic",
    "title": "04｜翼管神經：兩種來源、不同突觸規則",
    "html": "<p>翼腭神經節是副交感神經節，但流經它的纖維不全是副交感。感覺纖維與交感纖維通常不在此形成突觸。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"纖維比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">纖維</th><th scope=\"col\">來源／路徑</th><th scope=\"col\">在翼腭神經節是否換神經元</th></tr></thead><tbody><tr><td>副交感節前</td><td>CN VII → 大岩神經 → 與深岩神經合成翼管神經</td><td>是；節後纖維再借 V2 分支分布</td></tr><tr><td>交感節後</td><td>上頸神經節 → 頸內動脈叢 → 深岩神經 → 翼管神經</td><td>否，已在上頸神經節完成突觸</td></tr><tr><td>一般感覺</td><td>V2 與其相關分支</td><td>否；感覺神經元胞體在三叉神經節</td></tr></tbody></table></div><div class=\"flow\" aria-label=\"概念流程\"><div class=\"flow-step\"><b>大岩神經＋深岩神經</b><small>副交感節前＋交感節後</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">↓</span><div class=\"flow-step\"><b>翼管神經走翼管</b><small>到翼腭窩及翼腭神經節</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">↓</span><div class=\"flow-step\"><b>副交感在此突觸</b><small>交感、一般感覺不在此突觸</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">↓</span><div class=\"flow-step\"><b>借 V2 分支送到目標</b><small>鼻腔／腭腺體等；淚腺路徑涉及顴神經到淚腺神經交通</small></div></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>本節神經來源與突觸規則是教材延伸，影片此段主要要求記住翼管、同名神經節、V2 與上頜動脈。</div>"
   },
   {
    "id": "retrieval",
    "title": "05｜方向題：不看答案先畫出口",
    "html": "<details><summary>翼腭窩「後上方」通往中顱窩的主要孔，與神經是什麼？</summary><p>圓孔，V2。不要答卵圓孔 V3；V3 主要往顳下窩。</p></details><details><summary>通往鼻腔與顳下窩，分別走哪裡？</summary><p>內側蝶腭孔通鼻腔；外側翼上頜裂通顳下窩。</p></details><details><summary>從翼腭窩通向腭部，是先大腭管還是先大腭孔？</summary><p>先沿大腭管下行，再經大腭孔／小腭孔到腭部；管與孔是不同段。</p></details><details><summary>翼管神經中的交感纖維，是節前還是節後？</summary><p>節後，來自上頸神經節；翼腭神經節是副交感纖維換神經元的地方。</p></details>"
   }
  ]
 },
 {
  "id": "bones2-vertebrae",
  "title": "脊柱彎曲與典型椎骨",
  "english": "Vertebral column · typical vertebra",
  "summary": "骨數、四個彎曲、椎弓與七個突起，椎孔／椎間孔及區域差異。",
  "sources": [
   "S6",
   "S12",
   "S43",
   "S46",
   "S53",
   "S54"
  ],
  "sections": [
   {
    "id": "counts",
    "title": "01｜33 個節段、成人 26 塊骨：先確認怎麼數",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"區域比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">區域</th><th scope=\"col\">節段／椎骨數</th><th scope=\"col\">成人骨數</th><th scope=\"col\">重點</th></tr></thead><tbody><tr><td>頸 Cervical</td><td>7</td><td>7</td><td>C1 寰椎、C2 樞椎；有 8 對頸神經</td></tr><tr><td>胸 Thoracic</td><td>12</td><td>12</td><td>與肋骨相連</td></tr><tr><td>腰 Lumbar</td><td>5</td><td>5</td><td>承重大的椎體</td></tr><tr><td>薦 Sacral</td><td>5，融合</td><td>1 薦骨</td><td>並非 5 塊彼此自由活動的成人椎骨</td></tr><tr><td>尾 Coccygeal</td><td>通常 4，融合程度可變</td><td>通常 1 尾骨</td><td>尾椎數可有變異</td></tr><tr><td>合計</td><td>通常 33</td><td>通常 26</td><td>7＋12＋5＋1＋1</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>這是標準教學數，尾椎數與融合程度存在變異。不能將 26 塊成人骨和 33 個發育節段放在同一個選項裡相減卻不說計數基準。</div>"
   },
   {
    "id": "curves",
    "title": "02｜原發、次發曲：凸向哪裡？",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"彎曲比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">彎曲</th><th scope=\"col\">方向</th><th scope=\"col\">形成時機</th><th scope=\"col\">影片記憶點</th></tr></thead><tbody><tr><td>胸曲 Thoracic</td><td>後凸 Kyphotic</td><td>原發，胎兒已有</td><td>保留原先的彎曲</td></tr><tr><td>薦曲 Sacral</td><td>後凸 Kyphotic</td><td>原發，胎兒已有</td><td>骨盆後方的曲度</td></tr><tr><td>頸曲 Cervical</td><td>前凸 Lordotic</td><td>次發，抬頭發育時</td><td>影片用約 3 個月作記憶</td></tr><tr><td>腰曲 Lumbar</td><td>前凸 Lordotic</td><td>次發，站立行走發育時</td><td>影片用約 1 歲作記憶</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>3 個月與 1 歲是授課約數；應背「抬頭形成頸曲、站立行走形成腰曲」，不能拿月齡當每個孩子的固定截止日。正常胸部後凸與病理性過度後凸不同。</div><details><summary>頸曲與腰曲是原發曲嗎？</summary><p>不是。它們是次發前凸；胸曲與薦曲是原發後凸。</p></details>"
   },
   {
    "id": "parts",
    "title": "03｜典型椎骨：一個體、一個弓、七個突",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"構造比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">數目</th><th scope=\"col\">位置與作用</th></tr></thead><tbody><tr><td>椎體 Body</td><td>1</td><td>前方承重</td></tr><tr><td>椎弓根 Pedicle</td><td>2</td><td>連椎體到椎弓的短柱；上下切跡參與椎間孔</td></tr><tr><td>椎板 Lamina</td><td>2</td><td>椎弓後部，向正中棘突會合</td></tr><tr><td>棘突 Spinous process</td><td>1</td><td>正中向後，肌肉／韌帶附著</td></tr><tr><td>橫突 Transverse process</td><td>2</td><td>向左右；胸椎常有肋橫突關節面</td></tr><tr><td>上關節突 Superior articular processes</td><td>2</td><td>與上位椎骨下關節突相接</td></tr><tr><td>下關節突 Inferior articular processes</td><td>2</td><td>與下位椎骨上關節突相接</td></tr></tbody></table></div><p>七個突起＝1 棘突＋2 橫突＋2 上關節突＋2 下關節突。椎弓根與椎板屬椎弓的部分，<strong>不算在這七個突起之內</strong>。</p><div class=\"flow\" aria-label=\"概念流程\"><div class=\"flow-step\"><b>椎體放前方</b><small>先建立前後方向</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">↓</span><div class=\"flow-step\"><b>兩側椎弓根向後</b><small>接到椎板，圍出椎孔</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">↓</span><div class=\"flow-step\"><b>椎板於後方會合</b><small>棘突向後；橫突向兩側</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">↓</span><div class=\"flow-step\"><b>再補四個關節突</b><small>上下左右各成一對</small></div></div>"
   },
   {
    "id": "foramina",
    "title": "04｜椎孔與椎間孔：中央管 vs 兩側出口",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較</th><th scope=\"col\">椎孔 Vertebral foramen</th><th scope=\"col\">椎間孔 Intervertebral foramen</th></tr></thead><tbody><tr><td>形成</td><td>同一椎骨的椎體與椎弓圍成</td><td>相鄰椎弓根上下切跡及周圍構造共同圍成</td></tr><tr><td>組合後</td><td>一串椎孔形成椎管</td><td>左右側一節段一出口</td></tr><tr><td>主要內容</td><td>脊髓或馬尾、脊髓膜、血管等</td><td>脊神經根／脊神經相關構造及血管</td></tr><tr><td>位置判讀</td><td>在椎體後方中央</td><td>在側面、相鄰椎骨之間</td></tr><tr><td>錯誤選項</td><td>所有椎管全長都含脊髓</td><td>把脊髓本體當作從椎間孔鑽出</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>成人脊髓大致止於 L1–L2；較下方椎管主要含下降神經根形成的馬尾。影片口述「神經」時，要進一步分清脊髓、神經根、脊神經。</div>"
   },
   {
    "id": "regions",
    "title": "05｜頸、胸、腰椎：形狀服務不同任務",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"區域比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">區域</th><th scope=\"col\">辨認標記</th><th scope=\"col\">關節面／運動傾向</th></tr></thead><tbody><tr><td>典型頸椎</td><td>橫突孔，小椎體，椎孔較大</td><td>斜向關節面，活動範圍大；C1/C2 另看專頁</td></tr><tr><td>典型胸椎</td><td>肋凹，棘突常向下，椎孔較小而近圓</td><td>關節面多近冠狀，利於旋轉；胸廓也限制活動</td></tr><tr><td>典型腰椎</td><td>大椎體，粗短棘突，無肋凹／一般橫突孔</td><td>關節面多近矢狀，利屈伸、限制旋轉；L5–S1 較偏冠狀</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>關節面方向是區域傾向，沿脊柱有連續變化及過渡，不能把每個椎骨都看成完全相同的 90° 平面。橫突孔不是椎間孔。</div>"
   },
   {
    "id": "joints",
    "title": "06｜兩條連接系統：前方椎體、後方小面關節",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"連接比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">連接</th><th scope=\"col\">構造</th><th scope=\"col\">關節類型</th></tr></thead><tbody><tr><td>相鄰椎體之間</td><td>椎間盤、軟骨終板</td><td>軟骨性聯合 Symphysis；不是滑液關節腔</td></tr><tr><td>相鄰關節突之間</td><td>上下關節面及關節囊</td><td>小面／關節突關節，平面型滑液關節</td></tr><tr><td>相鄰椎板／棘突之間</td><td>黃韌帶、棘間、棘上等</td><td>韌帶維持穩定，不能當作椎間盤</td></tr></tbody></table></div><details><summary>椎間盤與小面關節都是滑液關節嗎？</summary><p>不是。椎體間是軟骨性聯合；小面關節是滑液關節。</p></details>"
   },
   {
    "id": "cervical-details",
    "title": "07｜橫突孔、棘突分叉與 C7：記常見，也保留例外",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"細節比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">細節</th><th scope=\"col\">常見模式</th><th scope=\"col\">教材核對</th></tr></thead><tbody><tr><td>頸椎橫突孔</td><td>C1–C7 有橫突孔</td><td>椎動脈通常由 C6 入孔，沿 C6 至 C1；可有變異</td></tr><tr><td>C7 橫突孔</td><td>通常不通椎動脈</td><td>不代表必然完全空白，可能有靜脈等小血管；不要背成所有 C7 都無內容</td></tr><tr><td>C1 棘突</td><td>無典型棘突，有後結節</td><td>不是後弓消失</td></tr><tr><td>C2–C6 棘突</td><td>通常分叉 Bifid</td><td>分叉程度有個體／族群差異</td></tr><tr><td>C7 棘突</td><td>較長，通常不分叉；Vertebra prominens 隆椎</td><td>觸到最突出的點未必一律 C7，T1 等也可能突出</td></tr><tr><td>棘突方向</td><td>中段胸椎常明顯向後下；腰椎較粗短近水平</td><td>影片比較圖是簡化模型；不宜背成所有頸椎比所有胸椎更向下</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>影片說「椎體越大，椎孔就一定越小」與「腰椎椎孔最小」，屬過度推論。典型胸椎椎孔較小且近圓；頸椎與腰椎較大且多呈三角形。孔的大小不與椎體大小成固定反比。</div>"
   },
   {
    "id": "sacrum",
    "title": "08｜薦骨是融合椎，但孔、嵴、角還能對回原構造",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"薦骨標記比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">薦骨標記</th><th scope=\"col\">對應／來源</th><th scope=\"col\">讀題重點</th></tr></thead><tbody><tr><td>薦正中嵴 Median sacral crest</td><td>棘突融合</td><td>正中向後的一列</td></tr><tr><td>薦中間嵴 Intermediate sacral crest</td><td>關節突融合</td><td>正中嵴外側、後薦孔內側</td></tr><tr><td>薦外側嵴 Lateral sacral crest</td><td>橫突融合</td><td>後薦孔外側</td></tr><tr><td>前／後薦孔 Anterior/posterior sacral foramina</td><td>薦神經腹側／背側支出口</td><td>通常各面 4 對；不是一個中央椎孔</td></tr><tr><td>薦管 Sacral canal</td><td>椎管在薦骨內延續</td><td>含薦神經根等</td></tr><tr><td>薦管裂孔 Sacral hiatus</td><td>下位薦椎後弓未閉合的開口</td><td>在後下方，鄰近薦角；不是所有薦孔的總稱</td></tr><tr><td>薦角 Sacral cornua</td><td>S5 下關節突的遺留／特化</td><td>裂孔兩側的骨性標記</td></tr><tr><td>薦骨岬 Sacral promontory</td><td>S1 椎體前上緣凸出</td><td>骨盆入口後方地標</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>影片將薦管裂孔簡稱為「椎管最下口」，可作方向記憶，但精確解剖是薦管後下方因椎板未融合而形成的開口。薦神經支從前／後薦孔離開；它們與薦管裂孔的位置不同。</div>"
   },
   {
    "id": "last-recap",
    "title": "09｜影片結尾：薦三角、骨盆入口與曲度名詞",
    "html": "<p>老師最後用薦骨側翼（ala）與中間向下縮窄的部分，說明講義稱為「薦三角」的形狀；並回顧薦骨岬到恥骨聯合的骨盆入口前後徑。這裡保留講義術語，不把「薦三角」當作與薦管裂孔同義。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"名詞比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">名詞</th><th scope=\"col\">要辨認的方向</th><th scope=\"col\">複習提醒</th></tr></thead><tbody><tr><td>Kyphosis 後凸</td><td>凸向後，正常胸曲／薦曲屬此方向</td><td>病理時需指過度後凸，不是任何胸曲皆病變</td></tr><tr><td>Lordosis 前凸</td><td>凸向前，正常頸曲／腰曲屬此方向</td><td>病理時需指過度前凸</td></tr><tr><td>Scoliosis 側彎</td><td>冠狀面偏側，結構性側彎常伴旋轉</td><td>不能只當成正常矢狀面曲度之一</td></tr><tr><td>骨盆入口前後徑</td><td>薦骨岬到恥骨聯合相關地標</td><td>解剖、產科、對角結合徑的前方終點不同，不能只用「岬到恥骨」概括所有徑線</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>影片把曲度的常見區域作記憶口訣，不應據此推定任何特定側彎或後凸病例的部位。骨盆入口各徑線將來在骨盆／胚胎章節再完整整理。</div>"
   }
  ]
 },
 {
  "id": "bones2-rib-joints",
  "title": "胸椎肋凹與肋骨關節",
  "english": "Costovertebral · costotransverse joints",
  "summary": "典型肋骨接哪兩個椎體、胸椎肋凹例外，以及 T1、T9–T12 的差異。",
  "sources": [
   "S7",
   "S43",
   "S46"
  ],
  "sections": [
   {
    "id": "typical",
    "title": "01｜以第 n 肋為起點：頭、頸、結節分開",
    "html": "<p>以典型第 6 肋為例：肋頭靠內側，與 T5、T6 椎體及其間椎間盤相接；肋結節則與 T6 橫突相接。肋頸連接肋頭與肋結節，不要把頸當成主要關節面。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"肋骨構造比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">肋骨構造</th><th scope=\"col\">典型關節對象</th><th scope=\"col\">關節名</th></tr></thead><tbody><tr><td>肋頭 Head</td><td>同號 Tn 椎體上半肋凹＋上一節 T(n−1) 下半肋凹＋中間椎間盤</td><td>肋頭／肋椎關節 Costovertebral</td></tr><tr><td>肋結節 Tubercle</td><td>同號 Tn 橫突肋凹</td><td>肋橫突關節 Costotransverse</td></tr><tr><td>肋軟骨 Costal cartilage</td><td>前方胸骨，或與上位肋軟骨相連</td><td>前端連接分類另看本頁第 4 節</td></tr></tbody></table></div><div class=\"flow\" aria-label=\"概念流程\"><div class=\"flow-step\"><b>看到第 6 肋</b><small>先假設典型肋頭双關節面</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">↓</span><div class=\"flow-step\"><b>肋頭找 T5＋T6</b><small>不是 T6＋T7</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">↓</span><div class=\"flow-step\"><b>肋結節找 T6 橫突</b><small>記同號，避免上移一節</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">↓</span><div class=\"flow-step\"><b>再確認是否例外肋</b><small>第 1、10、11、12 肋常只有一個肋頭關節面</small></div></div>"
   },
   {
    "id": "facets",
    "title": "02｜胸椎側面肋凹：T1 是上完整、下半面",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"胸椎比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">胸椎</th><th scope=\"col\">椎體肋凹常見模式</th><th scope=\"col\">橫突肋凹</th><th scope=\"col\">使用提醒</th></tr></thead><tbody><tr><td>T1</td><td>上完整面接第 1 肋，下半面參與第 2 肋</td><td>有</td><td>第一肋只接 T1；第二肋仍接 T1/T2</td></tr><tr><td>T2–T8</td><td>上／下半肋凹</td><td>有</td><td>典型雙椎體肋頭模式</td></tr><tr><td>T9</td><td>常有上半面，下半面可缺如</td><td>通常有</td><td>與 T10 型態相聯，存在變異</td></tr><tr><td>T10</td><td>常為一個完整肋凹</td><td>有，但型態可變</td><td>第 10 肋關節型態也有變異</td></tr><tr><td>T11、T12</td><td>各一個完整肋凹</td><td>無</td><td>第 11／12 肋沒有肋橫突關節</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>不能將 T9、T10 的肋凹模式當成所有標本固定不變。題目若提供影像／標本，應以實際關節面判讀。大多數基礎教材把第 1、10、11、12 肋列為單一椎體關節的例外。</div>"
   },
   {
    "id": "count",
    "title": "03｜若題目問「共有幾個肋關節面」？",
    "html": "<p>先弄清楚題目是在數<strong>一側或雙側</strong>、只數椎體或也數橫突。典型胸椎一側可有上半、下半與橫突三個肋關節面，左右合計六個；這不等於六個完整肋骨都接在這個椎骨上。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"典型胸椎的數法比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">典型胸椎的數法</th><th scope=\"col\">一側</th><th scope=\"col\">雙側</th></tr></thead><tbody><tr><td>椎體肋凹</td><td>上半＋下半＝2</td><td>4</td></tr><tr><td>橫突肋凹</td><td>1</td><td>2</td></tr><tr><td>肋關節面合計</td><td>3</td><td>6</td></tr><tr><td>上／下關節突關節面</td><td>另計，不是肋凹</td><td>不能混入肋關節面總數</td></tr></tbody></table></div><details><summary>第 11 肋有沒有肋橫突關節？</summary><p>沒有。T11/T12 無橫突肋凹，第 11/12 肋亦無典型肋結節關節。</p></details>"
   },
   {
    "id": "anterior",
    "title": "04｜前端胸骨連接：不要把每種都叫滑液關節",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"肋骨／連接比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">肋骨／連接</th><th scope=\"col\">分類</th><th scope=\"col\">補充</th></tr></thead><tbody><tr><td>第 1–7 肋</td><td>真肋，肋軟骨直接接胸骨</td><td>第 1 胸肋關節為軟骨性結合；第 2–7 胸肋關節通常為滑液關節</td></tr><tr><td>第 8–10 肋</td><td>假肋，經上位肋軟骨間接接胸骨</td><td>形成肋弓；未直接伸到胸骨</td></tr><tr><td>第 11–12 肋</td><td>浮肋，前端不接胸骨</td><td>仍有後端肋頭關節</td></tr><tr><td>肋骨與自身肋軟骨</td><td>肋軟骨連接 Costochondral</td><td>軟骨性結合，不是肋頭關節</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>本節胸骨前端連接為配合影片肋椎關係的教材補充。若題目只問「胸椎與肋骨」，先處理後端肋頭與肋結節，不把胸骨端混進答案。</div>"
   }
  ]
 },
 {
  "id": "bones2-disc-lp",
  "title": "椎間盤、韌帶與腰椎穿刺",
  "english": "Intervertebral disc · spinal ligaments · lumbar puncture",
  "summary": "23 個椎間盤、前後韌帶位置、穿刺逐層流程，及硬膜外／蛛網膜下腔的區別。",
  "sources": [
   "S6",
   "S12",
   "S44",
   "S45",
   "S46",
   "S47",
   "S18",
   "S55",
   "S56",
   "S57"
  ],
  "sections": [
   {
    "id": "disc",
    "title": "01｜23 個椎間盤：從 C2–C3 到 L5–S1",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"問題比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">問題</th><th scope=\"col\">答案</th><th scope=\"col\">為什麼</th></tr></thead><tbody><tr><td>第一個椎間盤</td><td>C2–C3</td><td>C1 無典型椎體；C1/C2 用特殊關節連接</td></tr><tr><td>最後一個通常的活動椎間盤</td><td>L5–S1</td><td>再下方薦椎於成人融合</td></tr><tr><td>標準總數</td><td>23</td><td>頸 6＋胸 12＋腰 5；頸胸、胸腰交界的歸類要說清楚</td></tr><tr><td>盤的構成</td><td>纖維環、髓核、軟骨終板</td><td>外層承拉力，中間分散壓力，終板連接椎體</td></tr><tr><td>髓核胚胎來源</td><td>脊索殘餘／脊索相關發育</td><td>不是由神經管形成</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>常見 6＋12＋5 分法：頸盤 C2–C3 至 C7–T1；胸盤 T1–T2 至 T12–L1；腰盤 L1–L2 至 L5–S1。最後一個盤不是 L4–L5。</div><div class=\"study-note teal\"><b>教材核對／補充</b><br>影片用「26 塊骨應有 25 個間隔，再扣最上與最下」得到 23，是方便記數的口訣；標準 23 個通常指 C2–C3 到 L5–S1 的活動脊柱椎間盤。薦尾關節可有纖維軟骨盤，所以不能推論薦骨與尾骨間完全沒有纖維軟骨或盤狀構造。</div>"
   },
   {
    "id": "ligaments",
    "title": "02｜六種韌帶：名字要對上真正位置",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"韌帶比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">韌帶</th><th scope=\"col\">連接／位置</th><th scope=\"col\">主要限制與線索</th></tr></thead><tbody><tr><td>前縱韌帶 ALL</td><td>椎體與椎間盤前面；上部連頸部／顱底相關構造</td><td>限制過度伸展</td></tr><tr><td>後縱韌帶 PLL</td><td>椎管內，沿椎體與椎間盤後面；向上續為覆膜</td><td>限制屈曲；不是棘突後方那條</td></tr><tr><td>黃韌帶 Ligamentum flavum</td><td>相鄰椎板之間</td><td>彈性纖維豐富，協助回彈；正中穿刺會經過</td></tr><tr><td>棘間韌帶 Interspinous</td><td>相鄰棘突之間</td><td>限制屈曲；比棘上韌帶更深</td></tr><tr><td>棘上韌帶 Supraspinous</td><td>沿棘突尖連成縱線</td><td>頸部與項韌帶連續</td></tr><tr><td>項韌帶 Nuchal ligament</td><td>枕部至頸椎棘突／C7區</td><td>頸後正中支撐與肌附著</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>前縱韌帶在椎體前方；後縱韌帶在椎體後方，但仍在椎管前壁區。黃韌帶則在椎管後方的椎板之間。影片用 C1／C2 記上端：PLL 的典型上端為 C2，向上續成覆膜；不同教材對 ALL 與顱底／寰枕膜的連續範圍表述稍有差異，考題要看它問本體或連續構造。</div>"
   },
   {
    "id": "spatial",
    "title": "03｜同一橫斷面，把前壁與後壁分開",
    "html": "<figure><a href=\"assets/bones2-lp.svg\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/bones2-lp.svg\" alt=\"椎管前後關係及正中腰椎穿刺層次概念圖\" loading=\"lazy\" width=\"1000\" height=\"700\"></a><figcaption>左列對照椎體與椎管前後關係，右列列出正中入路的組織與腔隙。本站原創概念示意，非實際比例；點圖可放大。</figcaption></figure><div class=\"flow\" aria-label=\"概念流程\"><div class=\"flow-step\"><b>由前往後看椎管</b><small>椎體／椎間盤 → 後縱韌帶 → 椎管內容</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">↓</span><div class=\"flow-step\"><b>找到椎管後壁</b><small>椎板與其間黃韌帶</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">↓</span><div class=\"flow-step\"><b>再往皮膚方向</b><small>棘間、棘上韌帶與棘突區</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">↓</span><div class=\"flow-step\"><b>套回正中穿刺路徑</b><small>從後方皮膚進入，先碰到後方韌帶，並不穿過椎間盤</small></div></div>"
   },
   {
    "id": "lp-layers",
    "title": "04｜正中腰椎穿刺：逐層到蛛網膜下腔",
    "html": "<p>影片藉穿刺複習後方韌帶。以下為<strong>腰部正中入路的教學順序</strong>；旁正中入路不必經過全部正中韌帶，不能把同一串層次套用到所有方法。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"順序比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">順序</th><th scope=\"col\">組織／腔隙</th><th scope=\"col\">要分清的事</th></tr></thead><tbody><tr><td>1</td><td>皮膚 Skin</td><td>最表層</td></tr><tr><td>2</td><td>皮下組織 Subcutaneous tissue</td><td>脂肪與淺筋膜區</td></tr><tr><td>3</td><td>棘上韌帶</td><td>沿棘突尖</td></tr><tr><td>4</td><td>棘間韌帶</td><td>棘突之間</td></tr><tr><td>5</td><td>黃韌帶</td><td>椎板之間，之後到硬膜外腔</td></tr><tr><td>6</td><td>硬膜外腔 Epidural space</td><td>脂肪與內椎靜脈叢；此處還未穿硬膜</td></tr><tr><td>7</td><td>硬脊膜 Dura mater</td><td>穿過後通常緊接蛛網膜</td></tr><tr><td>8</td><td>蛛網膜 Arachnoid mater</td><td>跨過後進入含腦脊髓液的空間</td></tr><tr><td>9</td><td>蛛網膜下腔 Subarachnoid space</td><td>腰池內含腦脊髓液與馬尾神經根</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>腔隙不是一層實體膜。硬膜下空間是潛在空間，不應畫成每個人正常都存在的寬大空腔；穿刺到腦脊髓液也不需穿軟脊膜。</div>"
   },
   {
    "id": "lp-level",
    "title": "05｜穿刺高度、腰池與硬膜外的差別",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較</th><th scope=\"col\">腰椎穿刺／蛛網膜下腔</th><th scope=\"col\">硬膜外操作的解剖目標</th></tr></thead><tbody><tr><td>目標空間</td><td>蛛網膜下腔，取得腦脊髓液或作脊髓麻醉</td><td>硬膜外腔，硬膜之外</td></tr><tr><td>是否穿硬膜／蛛網膜</td><td>會</td><td>通常不會；穿破是另一種事件</td></tr><tr><td>常用腰部教學高度</td><td>L3–L4 或 L4–L5</td><td>視操作目的與方法選擇，不能只套 LP 高度</td></tr><tr><td>成人脊髓終端</td><td>通常 L1–L2 脊髓圓錐</td><td>下方仍有神經根，並非「完全沒有神經」</td></tr><tr><td>硬膜囊／蛛網膜下腔下端</td><td>通常約 S2</td><td>不同於脊髓終止高度</td></tr><tr><td>表面定位</td><td>髂嵴連線常約 L4／L4–L5，存在變異</td><td>表面地標並非個體固定水平</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>這是國考解剖整理，不是實際穿刺操作指引。影片的「避開脊髓」應理解為選在脊髓圓錐下方的腰池，不能讀成針可以不顧馬尾與其他神經構造。</div>"
   },
   {
    "id": "laminectomy",
    "title": "06｜椎板切除與神經出口：拿掉哪一塊？",
    "html": "<p>影片以椎板切除說明椎管後壁。Laminectomy 移除椎板的部分或較廣範圍，目的之一是增加神經構造的空間；它不是移除前方椎體，也不等於一定把椎間盤整塊拿走。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"名詞比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">名詞</th><th scope=\"col\">主要涉及區域</th><th scope=\"col\">不能混成什麼</th></tr></thead><tbody><tr><td>椎板切除 Laminectomy</td><td>椎管後方骨性覆蓋</td><td>不等同椎間盤切除</td></tr><tr><td>椎間孔狹窄 Foraminal stenosis</td><td>神經出口空間</td><td>與中央椎管狹窄位置不同</td></tr><tr><td>小面關節肥大／韌帶變厚</td><td>後方或側方空間改變</td><td>神經壓迫未必只有椎間盤突出一個原因</td></tr></tbody></table></div><details><summary>腰部正中穿刺會穿椎間盤或後縱韌帶嗎？</summary><p>正常這種後方入路不會。它從棘突／椎板之間進入，不是穿過椎體前方。</p></details><div class=\"study-note teal\"><b>教材核對／補充</b><br>椎間盤突出是髓核等盤組織向外突出，不是整片椎間盤必然「脫位」。影片把疼痛／麻木／運動異常直接連到緊急椎板切除，過度概括；治療與手術時機需看神經功能、病灶與臨床評估，椎板切除也不是所有椎間盤突出的唯一手術。</div>"
   },
   {
    "id": "cranio-membranes",
    "title": "07｜接到顱底：兩個寰枕膜與覆膜",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"構造比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">主要位置／連續</th><th scope=\"col\">與影片對應</th></tr></thead><tbody><tr><td>前寰枕膜 Anterior atlanto-occipital membrane</td><td>枕骨到 C1 前弓；與前縱韌帶相關連續</td><td>前縱韌帶向上延續的口訣</td></tr><tr><td>後寰枕膜 Posterior atlanto-occipital membrane</td><td>枕骨到 C1 後弓；與後方膜／黃韌帶系統相關連續</td><td>黃韌帶向上延續的口訣</td></tr><tr><td>覆膜 Tectorial membrane</td><td>C2 後面向顱底；後縱韌帶的上方延續</td><td>不可漏掉，也不要說後縱韌帶向上完全消失</td></tr><tr><td>項韌帶 Nuchal ligament</td><td>頸後正中，與棘上韌帶相關</td><td>不是椎管前壁的後縱韌帶</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>現代研究將後寰枕膜與硬膜、肌硬膜橋等關係描述得更細；本表先保留基礎教材的連續關係。影片以「沒有椎體／棘突，所以韌帶變成膜」作圖像記憶，不代表各膜都由同一組織簡單一對一替換。</div>"
   },
   {
    "id": "whiplash",
    "title": "08｜揮鞭傷：伸展拉前面，屈曲拉後面",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"動作比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">動作</th><th scope=\"col\">受牽張的主要側</th><th scope=\"col\">本課要記的韌帶</th></tr></thead><tbody><tr><td>過度向後伸展</td><td>前方</td><td>前縱韌帶等前方構造</td></tr><tr><td>過度向前屈曲</td><td>後方</td><td>棘上、棘間等後方韌帶，也可能牽涉其他結構</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>老師在口述時一度說前屈會傷「後縱」，隨後自行更正為「棘上」。筆記採用其更正。實際揮鞭傷是加減速造成的複雜動作，可涉及肌肉、關節囊、韌帶及椎間盤；不能依前撞／後撞便斷言一定斷某一條韌帶。</div>"
   }
  ]
 },
 {
  "id": "bones2-atlas-roots",
  "title": "寰椎、樞椎與神經根定位",
  "english": "Atlas · axis · exiting and traversing roots",
  "summary": "影片的寰椎／樞椎與點頭轉頭；另補充神經出口與突出方向的定位規則。",
  "sources": [
   "S6",
   "S11",
   "S18",
   "S46",
   "S47"
  ],
  "sections": [
   {
    "id": "atlas-axis",
    "title": "01｜C1 無典型椎體，C2 的齒突成為旋轉軸",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較</th><th scope=\"col\">C1 寰椎 Atlas</th><th scope=\"col\">C2 樞椎 Axis</th></tr></thead><tbody><tr><td>骨性特徵</td><td>前弓、後弓、左右側塊；沒有典型椎體與棘突</td><td>有椎體與向上伸出的齒突 Dens</td></tr><tr><td>承重／關節</td><td>側塊上關節面接枕髁</td><td>上關節面接 C1 下關節面；齒突與 C1 前弓相關</td></tr><tr><td>運動關聯</td><td>寰枕關節：點頭「是」為主</td><td>寰樞關節：左右轉頭「不是」為主</td></tr><tr><td>穩定構造</td><td>寰椎橫韌帶跨兩側塊，將齒突保持在前弓後方</td><td>齒突與橫韌帶關係是穩定重點</td></tr><tr><td>椎間盤</td><td>枕骨–C1 與 C1–C2 無一般椎間盤</td><td>第一個盤在 C2–C3</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>「C1 無棘突」不代表後方完全沒有骨性突出，它有後結節。點頭與轉頭是主要運動，不是每一個關節只有單一方向的絕對動作。</div>"
   },
   {
    "id": "nerve-exit",
    "title": "02｜椎骨數與神經數：C8 是重要例外",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"神經比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">神經</th><th scope=\"col\">主要出口規則</th><th scope=\"col\">例子</th></tr></thead><tbody><tr><td>C1–C7</td><td>通常在同號椎骨上方</td><td>C6 神經在 C5–C6 間出；C1 位於枕骨與 C1 間</td></tr><tr><td>C8</td><td>C7–T1 之間</td><td>有 C8 神經，但沒有 C8 椎骨</td></tr><tr><td>T1 及以下</td><td>通常在同號椎骨下方</td><td>T1 在 T1–T2 間；L4 在 L4–L5 孔離開</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>脊神經節段與椎骨水平不同，尤其在脊髓下端與神經根長距离下降區。不要把「L5 神經」當作成人脊髓一直延伸到 L5 椎骨。</div>"
   },
   {
    "id": "herniation",
    "title": "03｜先看突出方向，再決定壓離開根或通過根",
    "html": "<div class=\"study-note teal\"><b>教材核對／補充</b><br>本節是影片結尾提及 L4–L5／L5–S1 常見突出層級後的教材延伸；影片未完整逐根比較離開根／通過根。</div><p>後外側／旁中央腰椎間盤突出，通常影響往下一個出口下降的<strong>通過根 traversing root</strong>；孔內／遠外側突出則較常影響該節段已向外離開的<strong>離開根 exiting root</strong>。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"椎間盤比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">椎間盤</th><th scope=\"col\">常見後外側突出：通過根</th><th scope=\"col\">孔內／遠外側突出：離開根</th></tr></thead><tbody><tr><td>L3–L4</td><td>L4</td><td>L3</td></tr><tr><td>L4–L5</td><td>L5</td><td>L4</td></tr><tr><td>L5–S1</td><td>S1</td><td>L5</td></tr></tbody></table></div><div class=\"flow\" aria-label=\"概念流程\"><div class=\"flow-step\"><b>先讀椎間盤層級</b><small>例如 L4–L5</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">↓</span><div class=\"flow-step\"><b>再讀突出位置</b><small>旁中央／後外側，還是孔內／遠外側？</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">↓</span><div class=\"flow-step\"><b>旁中央找通過根</b><small>L4–L5 常影響 L5</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">↓</span><div class=\"flow-step\"><b>孔內或遠外側找離開根</b><small>L4–L5 可影響 L4；大型中央病灶可能影響多根</small></div></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>「L4–L5 一定壓 L5」少了位置前提。影片示範的是常見後外側型；不能把這條規則套到孔內、遠外側或大範圍中央突出。</div>"
   },
   {
    "id": "root-signs",
    "title": "04｜教材延伸：用動作、感覺、反射交叉定位",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"神經根比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">神經根</th><th scope=\"col\">常用動作線索</th><th scope=\"col\">常用感覺線索</th><th scope=\"col\">反射線索</th></tr></thead><tbody><tr><td>L4</td><td>膝伸展受影響，可合併其他肌群</td><td>小腿內側／內踝附近</td><td>膝反射減弱可提示 L3–L4 弧</td></tr><tr><td>L5</td><td>大拇趾伸展、踝背屈、髖外展</td><td>足背，尤其大拇趾周邊</td><td>沒有同樣常用且穩定的單一深腱反射</td></tr><tr><td>S1</td><td>踝蹠屈、踮腳</td><td>足外側／小腿後外側</td><td>跟腱反射減弱可提示 S1</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>動作通常由多個神經根共同支配，皮節也重疊；這是讀題用的典型線索，不應只靠一個症狀做臨床診斷。此表是影片主題的教材補充，不是影片逐字內容。</div>"
   },
   {
    "id": "checkpoint",
    "title": "05｜讀完要能回答的四題",
    "html": "<details><summary>L5–S1 後外側突出通常壓哪個根？遠外側呢？</summary><p>後外側常為 S1 通過根；遠外側常為 L5 離開根。</p></details><details><summary>成人脊髓終止與硬膜囊終止，大概分別在哪裡？</summary><p>脊髓圓錐通常 L1–L2；硬膜囊通常 S2。</p></details><details><summary>C1/C2 為什麼不算一個普通椎間盤？</summary><p>C1 沒有典型椎體，兩者通過特殊寰樞關節連接；第一個通常椎間盤是 C2–C3。</p></details><details><summary>說「不是」左右轉頭，主關節是哪個？</summary><p>寰樞關節；點頭則主要為寰枕關節。</p></details>"
   },
   {
    "id": "common-discs",
    "title": "06｜影片最後的 L4–L5／L5–S1：背的是間隙",
    "html": "<p>老師用 L4–L5 與 L5–S1 作常見腰椎間盤突出位置，強調椎間盤位於兩個椎骨之間。這不是「第 4 椎骨和第 5 椎骨兩個各自有盤」，而是它們之間的一個盤。</p><div class=\"study-note teal\"><b>教材核對／補充</b><br>這兩個層級合計占多數腰椎間盤突出；影片把 L4–L5 排第一、L5–S1 排第二作口訣，但實際分布因年齡與研究族群不同，勿當作所有人的固定排序。</div>"
   }
  ]
 },
 {
  "id": "exam-sources",
  "title": "考點、易錯更正與參考來源",
  "english": "Exam retrieval · sources · corrections",
  "summary": "以主動回想檢查圖像定位，列明影片更正、官方考題入口與延伸閱讀。",
  "sources": [
   "S1",
   "S2",
   "S5",
   "S6",
   "S7",
   "S11",
   "S12",
   "S18",
   "S52"
  ],
  "sections": [
   {
    "id": "study-map",
    "title": "01｜這一部的複習順序",
    "html": "<p>以下是依本片內容安排的複習路徑，不是官方命題比例或題數預測。先完成位置，再記通道與神經，最後做區域比較與例外。</p><div class=\"flow\" aria-label=\"概念流程\"><div class=\"flow-step\"><b>顱顏面地圖</b><small>鼻中隔／鼻腔側壁、硬腭／軟腭、骨縫分界</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">↓</span><div class=\"flow-step\"><b>交通與分布</b><small>V1／V2／V3 顏面孔；翼腭窩方向—通道—內容</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">↓</span><div class=\"flow-step\"><b>椎骨與肋骨</b><small>椎體／椎弓／七突、典型肋頭關係及例外</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">↓</span><div class=\"flow-step\"><b>臨床解剖回想</b><small>椎間盤、韌帶、LP 層次、寰樞動作；神經根規則屬延伸</small></div></div><div class=\"table-scroll\" role=\"region\" aria-label=\"自我檢查比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">自我檢查</th><th scope=\"col\">合格標準</th></tr></thead><tbody><tr><td>翼腭窩</td><td>能不看表畫出七種主要路線與目的區</td></tr><tr><td>椎骨</td><td>能用側面與上面觀分出椎孔、椎間孔、橫突孔</td></tr><tr><td>肋關節</td><td>能回答第 3 肋接 T2/T3，而 T3 接第 3/4 肋</td></tr><tr><td>腰池</td><td>能同時說出脊髓 L1–L2、硬膜囊 S2、LP L3–4/L4–5</td></tr><tr><td>特殊椎</td><td>能分點頭與轉頭、C1/C2 與第一個椎間盤</td></tr></tbody></table></div>"
   },
   {
    "id": "corrections",
    "title": "02｜影片中不能原封不動背的說法",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"影片口訣／簡化比較表\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">影片口訣／簡化</th><th scope=\"col\">本站採用的核對結果</th><th scope=\"col\">來源</th></tr></thead><tbody><tr><td>軟腭含軟骨</td><td>主要為肌肉、腱膜、黏膜等，非軟骨支架</td><td>S39</td></tr><tr><td>唇裂一定合併腭裂</td><td>可單獨唇裂、單獨腭裂，或兩者同時存在</td><td>S40</td></tr><tr><td>5／6／4 是固定顱窩孔數</td><td>是課堂分組；視神經管等位置要按標準骨性地圖核對</td><td>S5、S51</td></tr><tr><td>椎體大則椎孔必小，腰椎最小</td><td>典型胸椎椎孔較小；不是單純反比</td><td>S6、S43</td></tr><tr><td>C7 橫突孔一定空白</td><td>通常不通椎動脈，仍有小血管／變異可能</td><td>S53</td></tr><tr><td>最突出的棘突一定 C7</td><td>常用地標但不絕對，T1 等也可能突出</td><td>S53</td></tr><tr><td>23 盤所以薦尾完全沒有盤</td><td>標準 23 指 C2–C3 到 L5–S1；薦尾關節可有纖維軟骨盤</td><td>S45、S56</td></tr><tr><td>腰池完全空白，只剩 CSF</td><td>仍含馬尾神經根等構造</td><td>S11、S44</td></tr><tr><td>一針到底碰骨再退即安全</td><td>不是可直接採用的操作指引；此處只整理解剖層次</td><td>S44</td></tr><tr><td>疼痛／麻木都應緊急椎板切除</td><td>不能一概而論；依神經功能與病灶判斷</td><td>S18</td></tr><tr><td>L4–L5 突出永遠只壓 L5</td><td>需看方向；孔內／遠外側常可壓 L4</td><td>S18</td></tr><tr><td>T9/T10 肋凹完全固定</td><td>保留肋關節型態變異</td><td>S43</td></tr></tbody></table></div>"
   },
   {
    "id": "retrieval",
    "title": "03｜主動回想題：本站自編，非官方試題",
    "html": "<details><summary>硬腭前部是哪個骨的哪個突？後部是哪個骨的哪個板？</summary><p>前部：上頜骨腭突；後部：腭骨水平板。</p></details><details><summary>眶下神經經哪三段到顏面？</summary><p>眶下裂 → 眶下溝／管 → 眶下孔；V2 更早已由圓孔到翼腭窩。</p></details><details><summary>翼腭窩到中顱窩、眼眶、鼻腔分別走哪裡？</summary><p>圓孔、眶下裂、蝶腭孔。</p></details><details><summary>第 6 肋頭與肋結節分別接什麼？</summary><p>肋頭：T5/T6 椎體及其中間椎間盤；肋結節：T6 橫突。</p></details><details><summary>後縱韌帶在椎管內還是棘突後？</summary><p>椎管內，貼椎體／盤後面；棘突後方的縱線是棘上韌帶。</p></details><details><summary>腰部正中穿刺經黃韌帶後，目標在硬膜外還是蛛網膜下？</summary><p>腰椎穿刺取 CSF 的目標是蛛網膜下腔；黃韌帶後先遇硬膜外腔，還要越過硬膜與蛛網膜。</p></details><details><summary>薦正中、薦中間、薦外側嵴，分別由什麼融合？</summary><p>棘突、關節突、橫突。</p></details><details><summary>點頭與轉頭的關節，及第一個普通椎間盤在哪裡？</summary><p>寰枕（枕骨–C1）、寰樞（C1–C2）；第一個普通椎間盤 C2–C3。</p></details>"
   },
   {
    "id": "official",
    "title": "04｜官方試題與他人題庫：用途分開",
    "html": "<p><a href=\"https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=115020&amp;y=2026\" target=\"_blank\" rel=\"noopener\">考選部 115 年第一次醫師（一）考畢試題入口</a>可取得官方試卷與答案；另保留第一章已核對的 113-1 試題索引。本章的自編回想題不冒充某年某題。</p><p>新增<a href=\"https://wecareheart.com/medical-education/%E9%86%AB%E5%B8%AB%E5%9C%8B%E8%80%83-%E9%86%AB%E5%AD%B8%E4%B8%80-%E8%A7%A3%E5%89%96%E5%AD%B8%E9%A1%8C%E5%BA%AB/\" target=\"_blank\" rel=\"noopener\">劉宜學醫師的醫學（一）解剖題庫整理入口</a>，可作為翼腭窩方向與影像定位練習。它是第三方整理，整個題庫的答案與題目年份本次未逐題核對；醫學事實仍以本章教材交叉確認。</p><p>第一章的國考唯醫、頭骨整理文章與考生心得仍保留作延伸閱讀；本站不搬運商業圖譜或別人的整篇筆記。</p>"
   },
   {
    "id": "sources",
    "title": "05｜本章參考來源與圖像授權",
    "html": "<p>查閱／更新：2026-10-09。以下新增資料配合第一章的 OpenStax、NCBI 與官方考題來源使用。影片是 2016 年課程，今日的分類、變異或臨床說法會另外核對。</p><ol class=\"source-list\"><li id=\"source-S37\"><b>S37 · 醫學教材</b> — <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK513269/\" target=\"_blank\" rel=\"noopener\">NCBI：Anatomy, Pterygopalatine Fossa</a><small>翼腭窩邊界、內容及七種主要交通通道。</small></li><li id=\"source-S38\"><b>S38 · 影像解剖綜述</b> — <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC4956626/\" target=\"_blank\" rel=\"noopener\">The pterygopalatine fossa: imaging anatomy, communications, and pathology revisited</a><small>空間交通與疾病沿通道擴散；未轉載原圖。</small></li><li id=\"source-S39\"><b>S39 · 醫學教材</b> — <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK557817/\" target=\"_blank\" rel=\"noopener\">NCBI：Anatomy, Head and Neck, Palate</a><small>硬腭與軟腭的構成；骨性比例和全腭長度的比例須分開。</small></li><li id=\"source-S40\"><b>S40 · 官方醫學資料</b> — <a href=\"https://www.cdc.gov/birth-defects/about/cleft-lip-cleft-palate.html\" target=\"_blank\" rel=\"noopener\">CDC：Cleft Lip / Cleft Palate</a><small>核對唇裂可以伴隨或不伴隨腭裂，不能沿用影片的必然合併說法。</small></li><li id=\"source-S41\"><b>S41 · 醫學教材</b> — <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK532292/\" target=\"_blank\" rel=\"noopener\">NCBI：Anatomy, Head and Neck, Mandible</a><small>下頜骨、下頜管、頦棘與肌肉附著。</small></li><li id=\"source-S42\"><b>S42 · 胚胎教材</b> — <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK538487/\" target=\"_blank\" rel=\"noopener\">NCBI：Embryology, Branchial Arches</a><small>舌骨小角／大角的傳統第二／第三咽弓分類。</small></li><li id=\"source-S43\"><b>S43 · 醫學教材</b> — <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK459153/\" target=\"_blank\" rel=\"noopener\">NCBI：Anatomy, Back, Thoracic Vertebrae</a><small>肋凹、胸椎區域特徵及不典型椎骨；保留 T9–T10 變異。</small></li><li id=\"source-S44\"><b>S44 · 醫學教材</b> — <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK547755/\" target=\"_blank\" rel=\"noopener\">NCBI：Anatomy, Back, Spinal Meninges</a><small>脊髓膜、硬膜外腔、腰池與正中穿刺層次。</small></li><li id=\"source-S45\"><b>S45 · 醫學教材</b> — <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK470583/\" target=\"_blank\" rel=\"noopener\">NCBI：Anatomy, Back, Intervertebral Discs</a><small>23 個椎間盤、起訖與纖維環／髓核／軟骨終板。</small></li><li id=\"source-S46\"><b>S46 · 大學解剖教材</b> — <a href=\"https://humananatomy.host.dartmouth.edu/BHA/public_html/part_7/chapter_39.html\" target=\"_blank\" rel=\"noopener\">Dartmouth：Chapter 39, The vertebral column</a><small>椎孔與椎間孔、神經出口及脊柱連接構造。</small></li><li id=\"source-S47\"><b>S47 · 解剖綜述</b> — <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC9039569/\" target=\"_blank\" rel=\"noopener\">Update on applied epidural anatomy</a><small>頸神經出口例外與脊髓膜空間。</small></li><li id=\"source-S48\"><b>S48 · 開放教材</b> — <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/9-6-anatomy-of-selected-synovial-joints\" target=\"_blank\" rel=\"noopener\">OpenStax：9.6 Anatomy of Selected Synovial Joints</a><small>顳下頜關節的關節盤及旋轉／滑動。</small></li><li id=\"source-S49\"><b>S49 · 解剖綜述</b> — <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC10968188/\" target=\"_blank\" rel=\"noopener\">A comprehensive review of the mental spine</a><small>頦棘附著頦舌肌與頦舌骨肌，及形態變異。</small></li><li id=\"source-S50\"><b>S50 · 解剖研究</b> — <a href=\"https://pubmed.ncbi.nlm.nih.gov/28703849/\" target=\"_blank\" rel=\"noopener\">The anatomy of the sphenoidal and posterior ethmoidal ostia</a><small>後篩竇與蝶竇開口位置；不把所有鼻竇都歸到中鼻道。</small></li><li id=\"source-S51\"><b>S51 · 醫學教材</b> — <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK545298/\" target=\"_blank\" rel=\"noopener\">NCBI：Anatomy, Head and Neck, Middle Cranial Fossa</a><small>視神經管的中顱窩／蝶骨小翼交界定位。</small></li><li id=\"source-S52\"><b>S52 · 他人題庫整理</b> — <a href=\"https://wecareheart.com/medical-education/%E9%86%AB%E5%B8%AB%E5%9C%8B%E8%80%83-%E9%86%AB%E5%AD%B8%E4%B8%80-%E8%A7%A3%E5%89%96%E5%AD%B8%E9%A1%8C%E5%BA%AB/\" target=\"_blank\" rel=\"noopener\">劉宜學醫師：醫師國考醫學（一）解剖學題庫</a><small>參考翼腭窩方向題與圖像定位練習；第三方答案不等於考選部公告，本站未逐題認證整個題庫。</small></li><li id=\"source-S53\"><b>S53 · 醫學教材</b> — <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK459200/\" target=\"_blank\" rel=\"noopener\">NCBI：Anatomy, Back, Cervical Vertebrae</a><small>頸椎橫突孔、C1/C2 與 C7、棘突分叉和變異。</small></li><li id=\"source-S54\"><b>S54 · 醫學教材</b> — <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK551653/\" target=\"_blank\" rel=\"noopener\">NCBI：Anatomy, Back, Sacral Vertebrae</a><small>薦骨嵴、薦角、薦孔與薦管裂孔。</small></li><li id=\"source-S55\"><b>S55 · 影像解剖綜述</b> — <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC8035576/\" target=\"_blank\" rel=\"noopener\">Anatomic, functional, and radiographic review of the ligaments of the craniocervical junction</a><small>前／後寰枕膜、覆膜與縱韌帶等的連續關係。</small></li><li id=\"source-S56\"><b>S56 · 醫學教材</b> — <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK538523/\" target=\"_blank\" rel=\"noopener\">NCBI：Anatomy, Bony Pelvis and Lower Limb: Pelvic Joints</a><small>薦尾關節可有纖維軟骨盤，不能把 23 個標準椎間盤推成薦尾完全無盤。</small></li><li id=\"source-S57\"><b>S57 · 醫學教材</b> — <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK541016/\" target=\"_blank\" rel=\"noopener\">NCBI：Cervical Sprain</a><small>揮鞭傷可涉及多種軟組織，不是每次追撞都必然斷某一條韌帶。</small></li></ol><p>本章三張中文概念圖為本站重新繪製，未擷取老師板書或轉載商業圖譜。由 OpenStax 內容改編的文字與教材圖解依 CC BY-NC-SA 4.0 使用，署名 OpenStax 與教材貢獻者；NCBI 等文章僅引用連結與重新表述的事實，未整篇轉載。影片本體不隨網站公開。</p>"
   }
  ]
 }
];
