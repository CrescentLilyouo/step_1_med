/* Original paraphrased notes; whole audio ASR and 341 sampled board frames, with cited corrections. */
const bones3VideoUrl="https://www.youtube.com/playlist?list=PLoKlbKOZ9XPpsITjehrHKiYvhih_3OJOz";
const bones3Sources=[
 {
  "id": "S58",
  "title": "NCBI：Anatomy, Thorax, Ribs",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK538328/",
  "note": "肋骨典型／非典型分類、第一肋骨與血管溝。",
  "type": "醫學教材"
 },
 {
  "id": "S59",
  "title": "NCBI：Anatomy, Thorax, Superior Intercostal Arteries",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK549847/",
  "note": "核對 VAN 由上而下排列、內肋間肌與最內肋間肌間的平面。",
  "type": "醫學教材"
 },
 {
  "id": "S60",
  "title": "NCBI：Anatomy, Thoracotomy and the Collateral Intercostal Neurovascular Bundle",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK544368/",
  "note": "側支血管神經束存在；沿肋骨上緣並不能保證零損傷。",
  "type": "醫學教材"
 },
 {
  "id": "S61",
  "title": "OpenStax：8.1 The Pectoral Girdle",
  "url": "https://openstax.org/books/anatomy-and-physiology-2e/pages/8-1-the-pectoral-girdle",
  "note": "肩帶骨性連接及肩胛骨辨認。",
  "type": "開放教材"
 },
 {
  "id": "S62",
  "title": "OpenStax：8.2 Bones of the Upper Limb",
  "url": "https://openstax.org/books/anatomy-and-physiology-2e/pages/8-2-bones-of-the-upper-limb",
  "note": "上肢骨、關節面與腕骨圖像核對。",
  "type": "開放教材"
 },
 {
  "id": "S63",
  "title": "NCBI：Anatomy, Shoulder and Upper Limb, Clavicle",
  "url": "https://www.ncbi.nlm.nih.gov/sites/books/NBK525990/",
  "note": "鎖骨形態、膜內／軟骨內骨化、喙鎖韌帶附著。",
  "type": "醫學教材"
 },
 {
  "id": "S64",
  "title": "NCBI：Anatomy, Shoulder and Upper Limb, Suprascapular Nerve",
  "url": "https://www.ncbi.nlm.nih.gov/sites/books/NBK557880/",
  "note": "肩胛上神經經肩胛上橫韌帶下方；動脈通常在上方，存在變異。",
  "type": "醫學教材"
 },
 {
  "id": "S65",
  "title": "NCBI：Anatomy, Shoulder and Upper Limb, Humerus",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK534821/?report=printable",
  "note": "肱骨結節、結節間溝、肱骨小頭與滑車。",
  "type": "醫學教材"
 },
 {
  "id": "S66",
  "title": "NCBI：Anatomy, Shoulder and Upper Limb, Nerves",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK526056/?report=reader",
  "note": "腋／橈／尺神經與肱骨骨折位置的關係。",
  "type": "醫學教材"
 },
 {
  "id": "S67",
  "title": "NCBI：Anatomy, Shoulder and Upper Limb, Scapulohumeral Muscles",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK546633/",
  "note": "旋轉肌袖四肌、附著與功能。",
  "type": "醫學教材"
 },
 {
  "id": "S68",
  "title": "NCBI：Anatomy, Shoulder and Upper Limb, Forearm Radius",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK544512/",
  "note": "橈骨頭、粗隆、莖突、遠端關節面。",
  "type": "醫學教材"
 },
 {
  "id": "S69",
  "title": "Dartmouth：Chapter 6, The bones of the upper limb",
  "url": "https://humananatomy.host.dartmouth.edu/BHA/public_html/part_2/chapter_6.html",
  "note": "肘關節骨性地標、橈尺骨與手骨對照。",
  "type": "大學解剖教材"
 },
 {
  "id": "S70",
  "title": "NCBI：Scaphoid Wrist Fracture",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK536907/?report=reader",
  "note": "舟狀骨逆行血流與近端缺血風險；未採用過度絕對的發生率。",
  "type": "醫學教材"
 },
 {
  "id": "S71",
  "title": "New findings about the intrascaphoid arterial system",
  "url": "https://pubmed.ncbi.nlm.nih.gov/29458308/",
  "note": "解剖研究核對舟狀骨內血管，不把所有骨折寫成必然壞死。",
  "type": "解剖研究"
 },
 {
  "id": "S72",
  "title": "OpenStax：8.3 The Pelvic Girdle and Pelvis",
  "url": "https://openstax.org/books/anatomy-and-physiology-2e/pages/8-3-the-pelvic-girdle-and-pelvis",
  "note": "髖骨三部分、骨盆入口／出口、薦棘與薦結節韌帶。",
  "type": "開放教材"
 },
 {
  "id": "S73",
  "title": "NCBI：Anatomy, Abdomen and Pelvis: Bones (Ilium, Ischium, and Pubis)",
  "url": "https://www.ncbi.nlm.nih.gov/sites/books/NBK519524/",
  "note": "髂、坐、恥骨地標及觸診用途。",
  "type": "醫學教材"
 },
 {
  "id": "S74",
  "title": "NCBI：Anatomy, Abdomen and Pelvis: Ligaments",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK493215/",
  "note": "骨盆韌帶及大／小坐骨孔的形成。",
  "type": "醫學教材"
 },
 {
  "id": "S75",
  "title": "NCBI：Anatomy, Abdomen and Pelvis, Pudendal Nerve",
  "url": "https://www.ncbi.nlm.nih.gov/sites/books/NBK554736/",
  "note": "陰部神經繞坐骨棘，經大坐骨孔出、小坐骨孔入會陰。",
  "type": "醫學教材"
 },
 {
  "id": "S76",
  "title": "Which spinal levels are identified by palpation of the iliac crests and the posterior superior iliac spines?",
  "url": "https://pubmed.ncbi.nlm.nih.gov/17261142/",
  "note": "髂嵴線與 PSIS 觸診定位存在偏差；傳統層級僅是近似參考。",
  "type": "影像定位研究"
 },
 {
  "id": "S77",
  "title": "Dartmouth：Chapter 12, The bones of the lower limb",
  "url": "https://humananatomy.host.dartmouth.edu/BHA/public_html/part_3/chapter_12.html",
  "note": "髖骨內外面、恥骨構造與髖臼。",
  "type": "大學解剖教材"
 },
 {
  "id": "S78",
  "title": "NCBI：Anatomy, Thorax, Muscles",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK538321/?report=printable",
  "note": "最內肋間肌、肋下肌及胸橫肌同屬最深肌群，不可當成同一條肌肉。",
  "type": "醫學教材"
 },
 {
  "id": "S79",
  "title": "Qualitative and Quantitative Anatomy of the Proximal Humerus Muscle Attachments and the Axillary Nerve: A Cadaveric Study",
  "url": "https://pubmed.ncbi.nlm.nih.gov/29225017/",
  "note": "胸大肌、闊背肌、大圓肌及三角肌附著的原始研究。",
  "type": "解剖研究"
 },
 {
  "id": "S80",
  "title": "NCBI：Anatomy, Shoulder and Upper Limb, Glenohumeral Joint",
  "url": "https://www.ncbi.nlm.nih.gov/sites/books/NBK537018/",
  "note": "肩關節囊、盂唇、動態／靜態穩定與神經血供。",
  "type": "醫學教材"
 },
 {
  "id": "S81",
  "title": "NCBI：Anatomy, Shoulder and Upper Limb, Elbow Joint",
  "url": "https://www.ncbi.nlm.nih.gov/sites/books/NBK532948/",
  "note": "肘複合體三部分、側副與環狀韌帶。",
  "type": "醫學教材"
 },
 {
  "id": "S82",
  "title": "NCBI：Forearm Fractures",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK574580/?report=printable",
  "note": "Monteggia 與 Galeazzi 不只骨折，還要加入關節損傷。",
  "type": "醫學教材"
 },
 {
  "id": "S83",
  "title": "NCBI：Fifth Metacarpal Fracture",
  "url": "https://www.ncbi.nlm.nih.gov/sites/books/NBK470428/",
  "note": "拳擊手骨折常見於第 5 掌骨頸。",
  "type": "醫學教材"
 },
 {
  "id": "S84",
  "title": "NCBI：Anatomy, Shoulder and Upper Limb, Wrist Flexor Retinaculum",
  "url": "https://www.ncbi.nlm.nih.gov/sites/books/NBK545198/",
  "note": "腕隧道 9 條肌腱與正中神經，及其骨性附著。",
  "type": "醫學教材"
 },
 {
  "id": "S85",
  "title": "臺大解剖學：Bone Limb Upper",
  "url": "https://homepage.ntu.edu.tw/~anatomy/teacher/hsieh/ANOTOMY/Bone_Limb_Upper.pdf",
  "note": "59 頁上肢骨教材；可用原 PDF 對照肩、肘及腕骨圖。未轉載圖片。",
  "type": "大學圖像教材"
 },
 {
  "id": "S86",
  "title": "身隨意動／夜黎：上肢的骨頭",
  "url": "https://wilback.com/anatomy-and-physiology-2e-08-02/",
  "note": "提供中文閱讀入口；原文部分名詞有誤，本站另以英文原教材核對。例如月狀骨應為 lunate，不是 pisiform。",
  "type": "他人整理文章"
 },
 {
  "id": "S87",
  "title": "NCBI：Supracondylar Humerus Fractures",
  "url": "https://www.ncbi.nlm.nih.gov/sites/books/NBK560933/",
  "note": "遠端肱骨髁上骨折與前骨間／正中神經、肱動脈。",
  "type": "醫學教材"
 },
 {
  "id": "S88",
  "title": "NCBI：Anatomy, Shoulder and Upper Limb, Hand Guyon Canal",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK534814/",
  "note": "Guyon 管的尺神經、尺動脈與腕隧道分開。",
  "type": "醫學教材"
 },
 {
  "id": "S89",
  "title": "考選部：115 年第二次醫師第一階段考畢試題入口",
  "url": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=115090&y=2026",
  "note": "已配合原試題、標準答案、更正答案核對第 24、31 題，見本章來源頁。",
  "type": "官方入口"
 },
 {
  "id": "S90",
  "title": "Carpal tunnel: Normal anatomy, anatomical variants and ultrasound technique",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3558235/",
  "note": "腕隧道內為 FDS 4＋FDP 4＋FPL 1 條肌腱及正中神經。",
  "type": "影像解剖綜述"
 },
 {
  "id": "S91",
  "title": "NCBI：Smith Fracture Review",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK547714/",
  "note": "Smith 掌側與 Colles 背側移位的方向比較。",
  "type": "醫學教材"
 },
 {
  "id": "S92",
  "title": "NCBI：Bennett Fracture",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK500035/",
  "note": "第一掌骨基底的關節內骨折，與拇指 CMC 損傷相連。",
  "type": "醫學教材"
 },
 {
  "id": "S93",
  "title": "NCBI：Anatomical Snuff Box",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK482228/",
  "note": "鼻煙窩肌腱邊界、底部骨頭與橈動脈。",
  "type": "醫學教材"
 },
 {
  "id": "S94",
  "title": "The deep transverse metacarpal ligament: a study of its anatomy and clinical significance",
  "url": "https://pubmed.ncbi.nlm.nih.gov/7978341/",
  "note": "第 2–5 掌指關節掌板間的深橫掌骨韌帶。",
  "type": "解剖研究"
 },
 {
  "id": "S95",
  "title": "Anatomy and function of the first metatarsophalangeal joint",
  "url": "https://pubmed.ncbi.nlm.nih.gov/3611614/",
  "note": "足部第一蹠趾關節與深橫蹠骨韌帶的解剖關係。",
  "type": "解剖研究"
 },
 {
  "id": "S96",
  "title": "考選部：115 年第二次醫師（一）醫學（一）官方試題",
  "url": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?c=301&code=115090&q=1&s=0101&t=Q",
  "note": "已核對第 24 題 D、第 31 題 A；更正答案未變更這兩題。",
  "type": "官方考題"
 },
 {
  "id": "S97",
  "title": "考選部：115 年第二次醫師（一）醫學（一）官方標準答案",
  "url": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?c=301&code=115090&q=1&s=0101&t=S",
  "note": "已核對第 24 題 D、第 31 題 A；更正答案未變更這兩題。",
  "type": "官方考題"
 },
 {
  "id": "S98",
  "title": "考選部：115 年第二次醫師（一）醫學（一）官方更正答案",
  "url": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?c=301&code=115090&q=1&s=0101&t=M",
  "note": "已核對第 24 題 D、第 31 題 A；更正答案未變更這兩題。",
  "type": "官方考題"
 },
 {
  "id": "S99",
  "title": "NCBI：Anatomy, Bony Pelvis and Lower Limb, Hip",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK526019/",
  "note": "髂股韌帶的髂前下棘、股骨轉子間線附著。",
  "type": "醫學教材"
 },
 {
  "id": "S100",
  "title": "NCBI：Anatomy, Abdomen and Pelvis, Pelvis",
  "url": "https://www.ncbi.nlm.nih.gov/sites/books/NBK482258/",
  "note": "尾骨肌由坐骨棘連到薦、尾骨；不是穿小坐骨孔進臀部。",
  "type": "醫學教材"
 },
 {
  "id": "S101",
  "title": "Ankylosing Spondylitis: Patterns of Radiographic Involvement",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3009382/",
  "note": "薦髂關節受累與疾病分佈有個體差異，不沿用「每人一定從同一處開始」。",
  "type": "影像研究"
 },
 {
  "id": "S102",
  "title": "Adverse effects of dorsogluteal intramuscular injection versus ventrogluteal intramuscular injection",
  "url": "https://pubmed.ncbi.nlm.nih.gov/37452553/",
  "note": "影片臀部外上象限屬傳統解剖教學；不能推成任何情況零風險。",
  "type": "系統性回顧"
 }
];
anatomySources.push(...bones3Sources);
const bones3Topics=[
 {
  "id": "bones3-video-notes",
  "title": "第三部全片逐段筆記與名詞修正",
  "english": "Full-video notes · 1:53:42",
  "summary": "從 00:00 到 1:53:42 的 39 個回看區間；講者重點、板書核對、教材更正與主題頁連結。",
  "sources": [
   "S58",
   "S59",
   "S60",
   "S65",
   "S67",
   "S69",
   "S76",
   "S78",
   "S82",
   "S94",
   "S99",
   "S101"
  ],
  "sections": [
   {
    "id": "method",
    "title": "01｜完整處理範圍、方法與限制",
    "html": "<p>來源為使用者提供的〈2016DF02 01_骨骼(3)〉影片，全長 1 小時 53 分 42 秒。全長音訊以連續 30 秒片段自動轉錄；另抽取每 20 秒一張的板書，共 341 張，逐張以聯絡表核對。以下為全片按時間排序的改寫筆記，不是逐字稿，也不是聲稱逐秒人工觀看。</p><p>自動辨識有重複、漏字與中英文名詞錯誤；以相鄰音訊、板書與教材交叉校正。不能可靠還原的原句不補寫成講者確實說過；補充內容另標教材延伸。時間為約略回看區間，對應使用者上傳檔案，未取得可驗證的單支 YouTube ID，所以不製作假跳轉連結。</p><div class=\"study-note teal\">建議先依下方時間表回顧，再到九個主題子頁看細節。片中「考過很多次」屬講者提醒，不代表本站已統計歷屆頻率；官方題號只列確實核對的題目。</div>"
   },
   {
    "id": "time-2",
    "title": "02｜肋骨與胸壁",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">回看時間（約）</th><th scope=\"col\">影片段落</th><th scope=\"col\">詳細重點與連結</th></tr></thead><tbody><tr><td>00:00–03:40</td><td>胸骨接肋與真、假、浮肋</td><td>由第二部胸骨複習開始，第二肋接胸骨角附近，第七肋接近胸骨體下端。前端直接接胸骨的是 1–7；8–10 間接，11–12 浮肋。浮肋包含在假肋之內。 <a href=\"#/subject/anatomy/chapter/bones3/topic/ribs-wall\">詳見主題頁 →</a></td></tr><tr><td>03:40–06:30</td><td>肋骨後方如何接胸椎</td><td>以第六肋說明肋骨頭常接相鄰胸椎及椎間盤、肋結節接同號胸椎橫突。課堂以肋骨頭關節面範圍分組，需和形態學典型 3–9 肋分開。 <a href=\"#/subject/anatomy/chapter/bones3/topic/ribs-wall\">詳見主題頁 →</a></td></tr><tr><td>06:30–09:00</td><td>典型肋標記</td><td>頭、頸、結節、角、體與肋溝；肋骨向前下斜行，不能只靠一張平面線圖想像胸廓。 <a href=\"#/subject/anatomy/chapter/bones3/topic/ribs-wall\">詳見主題頁 →</a></td></tr><tr><td>09:00–12:30</td><td>肋間肌層與 VAN</td><td>主束在內肋間肌與最內肋間肌間、上方肋骨的下緣；上到下為靜脈、動脈、神經。影片深層名稱與標準三層命名分開處理。 <a href=\"#/subject/anatomy/chapter/bones3/topic/ribs-wall\">詳見主題頁 →</a></td></tr><tr><td>12:30–14:30</td><td>胸管例子的解剖理由</td><td>靠下方肋骨上緣可避主要肋間束；側支及變異使「一定不傷血管神經」不成立。保留考試解剖，未整理成操作步驟。 <a href=\"#/subject/anatomy/chapter/bones3/topic/ribs-wall\">詳見主題頁 →</a></td></tr><tr><td>14:30–17:00</td><td>第一肋的兩條血管溝</td><td>斜角肌結節與前斜角肌：靜脈在前、動脈在後；不是典型肋溝 VAN 的同一題。 <a href=\"#/subject/anatomy/chapter/bones3/topic/ribs-wall\">詳見主題頁 →</a></td></tr></tbody></table></div>"
   },
   {
    "id": "time-3",
    "title": "03｜肩胛骨與鎖骨",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">回看時間（約）</th><th scope=\"col\">影片段落</th><th scope=\"col\">詳細重點與連結</th></tr></thead><tbody><tr><td>17:00–21:00</td><td>肩胛骨輪廓與單字</td><td>三角、三緣、關節盂；喙突 coracoid、冠突 coronoid、圓錐 conoid 的字形辨識。 <a href=\"#/subject/anatomy/chapter/bones3/topic/scapula\">詳見主題頁 →</a></td></tr><tr><td>21:00–24:00</td><td>肩胛棘、肩峰與體表高度</td><td>後方棘延續到肩峰，傳統 T2／T3／T7 地標要搭配姿勢與「約」的限制。 <a href=\"#/subject/anatomy/chapter/bones3/topic/scapula\">詳見主題頁 →</a></td></tr><tr><td>24:00–26:00</td><td>上肢與軀幹的骨性連接</td><td>鎖骨連胸骨與肩峰，肱骨頭連關節盂；肩鎖分離與盂肱脫位不同。課堂名次不當成固定全身統計。 <a href=\"#/subject/anatomy/chapter/bones3/topic/clavicle-girdle\">詳見主題頁 →</a></td></tr><tr><td>26:00–30:00</td><td>喙鎖韌帶兩部分</td><td>圓錐與斜方共同穩定肩帶；鎖骨下面圓錐結節、斜方線與相應韌帶相連。 <a href=\"#/subject/anatomy/chapter/bones3/topic/clavicle-girdle\">詳見主題頁 →</a></td></tr><tr><td>30:00–33:30</td><td>肩胛骨三窩、喙突肌肉與切跡</td><td>肩胛下、棘上、棘下窩；胸小肌、肱二頭肌短頭、喙肱肌接喙突。肩胛上神經經韌帶下方，血管常在上方。 <a href=\"#/subject/anatomy/chapter/bones3/topic/scapula\">詳見主題頁 →</a></td></tr></tbody></table></div>"
   },
   {
    "id": "time-4",
    "title": "04｜上肢骨與肩關節",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">回看時間（約）</th><th scope=\"col\">影片段落</th><th scope=\"col\">詳細重點與連結</th></tr></thead><tbody><tr><td>33:30–37:30</td><td>上肢骨計數、腕骨與指骨</td><td>肱骨、橈尺骨，兩排腕骨，掌骨與指骨；拇指兩節，其他各三節。拇指 CMC 為大多角骨配第一掌骨基底。 <a href=\"#/subject/anatomy/chapter/bones3/topic/carpus-hand\">詳見主題頁 →</a></td></tr><tr><td>37:30–40:00</td><td>肱骨畫圖與方向</td><td>先找近端頭、大小結節、兩種頸，後方鷹嘴窩用來判前後。 <a href=\"#/subject/anatomy/chapter/bones3/topic/humerus\">詳見主題頁 →</a></td></tr><tr><td>40:00–44:30</td><td>肩關節穩定與供應</td><td>球窩關節，四肌袖、三組課堂韌帶；肩胛上、前後旋肱動脈，以及肩胛上、腋、外側胸肌神經。動態、靜態與關節感覺／運動神經分別整理。 <a href=\"#/subject/anatomy/chapter/bones3/topic/glenohumeral\">詳見主題頁 →</a></td></tr><tr><td>44:30–47:00</td><td>大小結節與結節間溝</td><td>大結節有三肌袖，小結節有肩胛下肌；大圓、胸大、闊背的止點落在內外唇／溝底。長頭腱在溝內不能算作肌肉止點。 <a href=\"#/subject/anatomy/chapter/bones3/topic/humerus\">詳見主題頁 →</a></td></tr><tr><td>47:00–50:00</td><td>肱骨幹標記與橈神經</td><td>三角肌粗隆在前外側，橈神經溝在後方，與肱深動脈相伴。骨幹骨折可連到垂腕。 <a href=\"#/subject/anatomy/chapter/bones3/topic/humerus\">詳見主題頁 →</a></td></tr></tbody></table></div>"
   },
   {
    "id": "time-5",
    "title": "05｜遠端肱骨、肘與腕",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">回看時間（約）</th><th scope=\"col\">影片段落</th><th scope=\"col\">詳細重點與連結</th></tr></thead><tbody><tr><td>50:00–54:00</td><td>小頭、滑車、內外上髁</td><td>小頭外側配橈骨、滑車內側配尺骨；內上髁後有尺神經，內屈外伸是肌群起點框架。 <a href=\"#/subject/anatomy/chapter/bones3/topic/humerus\">詳見主題頁 →</a></td></tr><tr><td>54:00–57:30</td><td>肱骨三個窩與尺骨兩個突</td><td>前面橈骨窩、冠突窩；後面鷹嘴窩。尺骨冠突在前、鷹嘴在後，共同圍滑車切跡。 <a href=\"#/subject/anatomy/chapter/bones3/topic/forearm-elbow\">詳見主題頁 →</a></td></tr><tr><td>57:30–61:00</td><td>肘關節與環狀韌帶</td><td>影片以肱尺＋肱橈說屈伸；完整肘複合體包含近端橈尺。環狀韌帶兩端接尺骨、環繞橈骨頭。 <a href=\"#/subject/anatomy/chapter/bones3/topic/forearm-elbow\">詳見主題頁 →</a></td></tr><tr><td>61:00–63:30</td><td>橈尺骨近遠端互換</td><td>橈骨頭在近端、尺骨頭在遠端；近端尺骨有橈骨切跡，遠端橈骨有尺骨切跡。 <a href=\"#/subject/anatomy/chapter/bones3/topic/forearm-elbow\">詳見主題頁 →</a></td></tr><tr><td>63:30–66:00</td><td>腕關節與兩側莖突</td><td>橈骨接舟狀、月狀；完整橈腕關節也含關節盤與三角骨的關係，尺骨不直接接腕骨。橈骨莖突通常伸得較遠。 <a href=\"#/subject/anatomy/chapter/bones3/topic/forearm-elbow\">詳見主題頁 →</a></td></tr></tbody></table></div>"
   },
   {
    "id": "time-6",
    "title": "06｜骨折、腕骨與手",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">回看時間（約）</th><th scope=\"col\">影片段落</th><th scope=\"col\">詳細重點與連結</th></tr></thead><tbody><tr><td>66:00–69:00</td><td>四種前臂骨折</td><td>Monteggia＝尺骨骨折＋橈骨頭脫位；Galeazzi＝橈骨骨折＋遠端橈尺損傷；Colles 背側、Smith 掌側。影片的跌倒說法不展開成建議。 <a href=\"#/subject/anatomy/chapter/bones3/topic/forearm-elbow\">詳見主題頁 →</a></td></tr><tr><td>69:00–70:00</td><td>舟狀骨與頭狀骨</td><td>舟狀骨骨折連到血供與近端缺血風險，不能說所有骨折都壞死；頭狀骨是最大的腕骨。 <a href=\"#/subject/anatomy/chapter/bones3/topic/carpus-hand\">詳見主題頁 →</a></td></tr><tr><td>70:00–73:30</td><td>掌骨標記與橫向韌帶</td><td>頭遠、基底近；深橫掌骨韌帶連第 2–5 MCP 掌板，與足 1–5 的深橫蹠骨韌帶範圍對照。 <a href=\"#/subject/anatomy/chapter/bones3/topic/carpus-hand\">詳見主題頁 →</a></td></tr><tr><td>73:30–74:30</td><td>Bennett 與拳擊手骨折</td><td>第一掌骨基底對 Bennett；第五掌骨頸對 boxer’s fracture。基底、頸、頭不能互換。 <a href=\"#/subject/anatomy/chapter/bones3/topic/carpus-hand\">詳見主題頁 →</a></td></tr></tbody></table></div>"
   },
   {
    "id": "time-7",
    "title": "07｜骨盆入門與髂棘",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">回看時間（約）</th><th scope=\"col\">影片段落</th><th scope=\"col\">詳細重點與連結</th></tr></thead><tbody><tr><td>74:30–76:30</td><td>進入骨盆：名稱與成人計數</td><td>骨盆帶狹義兩塊髖骨；骨性骨盆另含薦骨、尾骨。每塊髖骨由髂、坐、恥骨融合。 <a href=\"#/subject/anatomy/chapter/bones3/topic/hip-landmarks\">詳見主題頁 →</a></td></tr><tr><td>76:30–80:00</td><td>前方畫薦骨與髂棘</td><td>以腰、薦椎及薦骨翼建立骨盆輪廓。圖上髂前上、下棘的水平線只是輔助畫圖，不當成固定臨床椎體層級。 <a href=\"#/subject/anatomy/chapter/bones3/topic/hip-landmarks\">詳見主題頁 →</a></td></tr><tr><td>80:00–83:00</td><td>髂骨拼字與閉孔</td><td>Ilium 髂骨對 ileum 迴腸；髂嵴前後端，閉孔膜與剩餘閉孔管的初步概念。 <a href=\"#/subject/anatomy/chapter/bones3/topic/hip-landmarks\">詳見主題頁 →</a></td></tr><tr><td>83:00–86:00</td><td>用顏色分三塊髖骨</td><td>髂骨上方、恥骨前下、坐骨後下。三者參與髖臼，恥坐骨圍閉孔。 <a href=\"#/subject/anatomy/chapter/bones3/topic/hip-landmarks\">詳見主題頁 →</a></td></tr><tr><td>86:00–92:00</td><td>轉到側面：四髂棘與髂嵴</td><td>ASIS、AIIS、PSIS、PIIS；髂嵴兩端是 ASIS／PSIS，傳統最高點約 L4、PSIS 約 S2。 <a href=\"#/subject/anatomy/chapter/bones3/topic/hip-landmarks\">詳見主題頁 →</a></td></tr></tbody></table></div>"
   },
   {
    "id": "time-8",
    "title": "08｜骨盆定位與韌帶",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">回看時間（約）</th><th scope=\"col\">影片段落</th><th scope=\"col\">詳細重點與連結</th></tr></thead><tbody><tr><td>92:00–95:00</td><td>髂嵴定位與臀部外上象限</td><td>畫髂嵴與坐骨結節幫助說明傳統臀部外上區避開坐骨神經的概念；不保留絕對安全的推論。 <a href=\"#/subject/anatomy/chapter/bones3/topic/hip-landmarks\">詳見主題頁 →</a></td></tr><tr><td>95:00–97:00</td><td>兩條韌帶的考點引入</td><td>腹股溝韌帶、髂股韌帶兩條連接要各背兩個端點。先提示 ASIS 到恥骨結節。 <a href=\"#/subject/anatomy/chapter/bones3/topic/pelvic-connections\">詳見主題頁 →</a></td></tr><tr><td>97:00–100:00</td><td>恥骨體、支、嵴、梳、結節</td><td>Body、上支、下支；體上緣恥骨嵴、外側結節、上支上緣恥骨梳。影片 pubic line 的用語以 pecten pubis 核對，不另造構造。 <a href=\"#/subject/anatomy/chapter/bones3/topic/hip-landmarks\">詳見主題頁 →</a></td></tr><tr><td>100:00–104:00</td><td>腹股溝與髂股韌帶反覆核對</td><td>ASIS→恥骨結節；AIIS→股骨前方轉子間線。前 line、後 crest 的方向為另一個考點。影片髖關節韌帶數目作課堂分類，不推成唯一分類。 <a href=\"#/subject/anatomy/chapter/bones3/topic/pelvic-connections\">詳見主題頁 →</a></td></tr><tr><td>104:00–106:30</td><td>髂結節與耳狀面</td><td>髂結節是髂嵴上的突起；影片以約 L5 記憶。髂骨耳狀面與薦骨構成薦髂關節。 <a href=\"#/subject/anatomy/chapter/bones3/topic/hip-landmarks\">詳見主題頁 →</a></td></tr></tbody></table></div>"
   },
   {
    "id": "time-9",
    "title": "09｜薦髂、閉孔與坐骨切跡",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">回看時間（約）</th><th scope=\"col\">影片段落</th><th scope=\"col\">詳細重點與連結</th></tr></thead><tbody><tr><td>106:30–107:00</td><td>薦髂關節疾病連結</td><td>由骨性接合帶到僵直性脊椎炎；保留薦髂關節炎重要性，去掉必然由此開始的絕對說法。 <a href=\"#/subject/anatomy/chapter/bones3/topic/hip-landmarks\">詳見主題頁 →</a></td></tr><tr><td>107:00–108:30</td><td>閉孔膜、閉孔管與內容物</td><td>大閉孔被膜覆蓋，留下管通過閉孔神經、動脈、靜脈。不要把 foramen、canal 當成同一尺寸結構。 <a href=\"#/subject/anatomy/chapter/bones3/topic/hip-landmarks\">詳見主題頁 →</a></td></tr><tr><td>108:30–112:00</td><td>坐骨結節、坐骨棘、大小切跡</td><td>後下方坐骨承重地標，棘分開兩切跡；大切跡主要位於髂骨後緣，小切跡位於坐骨。單看前視圖會漏掉後緣深度。 <a href=\"#/subject/anatomy/chapter/bones3/topic/pelvic-connections\">詳見主題頁 →</a></td></tr><tr><td>112:00–113:42</td><td>薦棘、薦結節韌帶與片尾</td><td>將薦骨分別連到坐骨棘、坐骨結節；講者自行修正圖上坐骨棘畫得過高。最後以腰椎重力解釋骨盆傾動與韌帶穩定，檔案在此說明尚未講完時結束；不補造後續原話。 <a href=\"#/subject/anatomy/chapter/bones3/topic/pelvic-connections\">詳見主題頁 →</a></td></tr></tbody></table></div>"
   },
   {
    "id": "corrections",
    "title": "10｜影片口訣與教材修正總表",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">影片簡化／可能混淆</th><th scope=\"col\">網站採用的精確說法</th><th scope=\"col\">核對依據</th></tr></thead><tbody><tr><td>典型肋列 2–9</td><td>形態學通常 3–9；第 2 肋有特殊標記，課堂分組偏重肋骨頭關節面</td><td>S58</td></tr><tr><td>深層全叫胸橫肌</td><td>胸壁第三層含最內肋間肌等，胸橫肌為前胸壁深層構造</td><td>S59、S78</td></tr><tr><td>肋骨上緣一定安全</td><td>避主要束的理由成立，側支、變異仍可能受傷</td><td>S60</td></tr><tr><td>肌袖＋其他附著一起算大／小結節肌肉</td><td>大結節三肌袖、小結節一；內外唇和溝底另外列</td><td>S65、S67、S79</td></tr><tr><td>肩鎖固定是第二容易脫臼</td><td>未提供統計範圍；改比盂肱脫位與肩鎖分離</td><td>S63、S80</td></tr><tr><td>腕關節只有橈骨配兩塊腕骨</td><td>直接骨性配對是舟狀、月狀；完整橈腕關節含關節盤及三角骨</td><td>S62、S69</td></tr><tr><td>Monteggia／Galeazzi 只背骨折骨頭</td><td>要加橈骨頭脫位／遠端橈尺損傷</td><td>S82</td></tr><tr><td>舟狀骨骨折必然壞死</td><td>近端較缺血，結果受骨折位置、血供等影響</td><td>S70、S71</td></tr><tr><td>橫掌骨韌帶直接把所有頭綁一起</td><td>主要連第 2–5 MCP 掌板；拇指不列入同樣連結</td><td>S94</td></tr><tr><td>髂棘或觸診線固定對某椎體</td><td>傳統地標為近似，圖示層級不能當個體定值</td><td>S76</td></tr><tr><td>髂股韌帶連轉子間嵴</td><td>前方轉子間線；後方才是嵴</td><td>S99</td></tr><tr><td>僵直性脊椎炎一定先痛薦髂</td><td>薦髂炎重要，但臨床分佈有差異</td><td>S101</td></tr></tbody></table></div>"
   },
   {
    "id": "coverage",
    "title": "11｜全片整理到哪裡",
    "html": "<p>本章涵蓋胸廓／肋骨、肩胛骨、鎖骨、肩關節、肱骨、橈尺骨／肘、腕骨／手、髖骨與骨盆連接。影片結尾由薦棘與薦結節韌帶進入重力／骨盆傾動的說明，檔案在解釋中截斷；未把後續下肢長骨完整課程冒充成本片內容。教材補充另含鼻煙窩、腕隧道、大小坐骨孔內容物、骨盆入口／出口與國考題連結。</p>"
   }
  ]
 },
 {
  "id": "ribs-wall",
  "title": "肋骨、第一肋骨與胸壁",
  "english": "Ribs & thoracic wall",
  "summary": "真肋／假肋與典型肋分開判斷，掌握 VAN、肌層及第一肋骨前後關係。",
  "sources": [
   "S7",
   "S43",
   "S58",
   "S59",
   "S60",
   "S78"
  ],
  "sections": [
   {
    "id": "cage",
    "title": "01｜胸廓：先分前、後、側",
    "html": "<p>骨性胸廓由胸骨、胸椎及 12 對肋骨共同構成，前側還有肋軟骨。肋骨從後側繞向前側時向下傾斜，不能把「同一根肋骨」當作整圈都在同一橫向高度。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">位置</th><th scope=\"col\">主要骨性構造</th><th scope=\"col\">讀圖問題</th></tr></thead><tbody><tr><td>前</td><td>胸骨柄、胸骨體、劍突</td><td>肋軟骨接在哪裡？</td></tr><tr><td>後</td><td>T1–T12 胸椎</td><td>肋骨頭接椎體，肋結節接橫突</td></tr><tr><td>外側</td><td>肋骨體</td><td>肋角、肋骨溝及肌肉層次</td></tr></tbody></table></div>"
   },
   {
    "id": "anterior-class",
    "title": "02｜真、假、浮肋：看前方連接",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">肋骨</th><th scope=\"col\">前方連接</th><th scope=\"col\">分類</th></tr></thead><tbody><tr><td>1–7</td><td>自己的肋軟骨直接連接胸骨</td><td>真肋 true ribs</td></tr><tr><td>8–10</td><td>通常透過上方肋軟骨間接連接胸骨</td><td>假肋 false ribs／脊椎軟骨肋</td></tr><tr><td>11–12</td><td>前端遊離，不連胸骨</td><td>浮肋 floating ribs；也屬假肋</td></tr></tbody></table></div><div class=\"study-note teal\">「假肋沒有接胸骨」是指沒有直接接胸骨；第 8–10 肋通常仍有間接連接。浮肋是依前端遊離命名，不代表後端沒有接椎骨。</div><details><summary>第 12 肋是浮肋，所以沒有任何關節嗎？</summary><p>錯。它的後端仍與第 12 胸椎椎體形成關節；它沒有肋橫突關節。</p></details>"
   },
   {
    "id": "typical",
    "title": "03｜典型肋：形態分類與肋骨頭關節分類",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">分類方式</th><th scope=\"col\">典型範圍／例子</th><th scope=\"col\">易混淆處</th></tr></thead><tbody><tr><td>一般形態學分類</td><td>通常第 3–9 肋為典型；1、2、10、11、12 為非典型</td><td>第 2 肋有前鋸肌粗隆等特殊形態</td></tr><tr><td>影片以「頭有兩個關節面」來分組</td><td>第 2–9 肋歸為同組</td><td>這是肋骨頭關節面分組，不等於完整形態分類</td></tr><tr><td>第 n 肋頭的典型接法</td><td>同號 Tn 與上一號 T(n−1) 椎體，並涉及中間椎間盤</td><td>第 6 肋頭 → T5、T6；結節 → T6 橫突</td></tr></tbody></table></div><p>第 1、10、11、12 肋頭通常只有單一關節面；下位肋與胸椎的關節面可能有變異。面對第 9／10 肋與 T9／T10，先確認題目指定的圖與教材，而非套用無例外口訣。</p>"
   },
   {
    "id": "parts",
    "title": "04｜肋骨標記：頭、頸、結節、角、體與溝",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">標記</th><th scope=\"col\">位置與作用</th><th scope=\"col\">配對</th></tr></thead><tbody><tr><td>Head 頭</td><td>後端，通常有兩個關節面及中間的嵴</td><td>椎體</td></tr><tr><td>Neck 頸</td><td>頭與結節間的較細部分</td><td>不等於肋骨體</td></tr><tr><td>Tubercle 結節</td><td>頸與體交界，具關節及粗糙部分</td><td>同號胸椎橫突（11、12 肋例外）</td></tr><tr><td>Angle 角</td><td>骨體彎曲最明顯處</td><td>不是肋骨頭</td></tr><tr><td>Body / shaft 體</td><td>長而彎曲的主幹</td><td>前端接肋軟骨</td></tr><tr><td>Costal groove 肋骨溝</td><td>內面下緣</td><td>主要肋間血管神經束</td></tr></tbody></table></div><p>講義可能把結節與角歸在「體的特化」一起介紹；做標本題時仍應以各標記實際位置辨認。肋軟骨是透明軟骨，與骨性肋骨不可混成同一種組織。</p>"
   },
   {
    "id": "layers",
    "title": "05｜三層肌群與神經血管平面",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">由淺至深</th><th scope=\"col\">纖維／分佈重點</th><th scope=\"col\">與神經血管關係</th></tr></thead><tbody><tr><td>外肋間肌 external intercostal</td><td>通常向前下方；前側以膜延續</td><td>位於神經血管束外側</td></tr><tr><td>內肋間肌 internal intercostal</td><td>通常向後下方；方向與外層相反</td><td>神經血管束位於它的深面</td></tr><tr><td>最內肋間肌 innermost intercostal</td><td>側胸壁較明顯，與內肋間肌大致同向</td><td>神經血管束位於它的淺面</td></tr><tr><td>最深肌群的區域性構造</td><td>後側肋下肌；前側胸橫肌；外側最內肋間肌</td><td>不能把最內肋間肌全稱作胸橫肌</td></tr></tbody></table></div><div class=\"study-note teal\">影片把最內層概括為「胸橫肌」。標準胸壁側面層次應背：內肋間肌 → 血管神經平面 → 最內肋間肌；胸橫肌主要位於前胸壁。</div>"
   },
   {
    "id": "van",
    "title": "06｜VAN：兩個方向都要背",
    "html": "<figure><a href=\"assets/bones3-thoracic.svg\" target=\"_blank\" rel=\"noopener\"><img loading=\"lazy\" src=\"assets/bones3-thoracic.svg\" alt=\"胸壁層次、VAN 上下排列及第一肋骨血管前後關係\"></a><figcaption>左圖：主束位於內、最內肋間肌之間；右圖：第一肋骨的前斜角肌分隔靜脈與動脈。（點圖放大；本站原創概念圖，非等比例解剖圖。）</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">問題</th><th scope=\"col\">答案</th><th scope=\"col\">易錯答案</th></tr></thead><tbody><tr><td>由上而下</td><td>Vein → Artery → Nerve：VAN</td><td>VNA</td></tr><tr><td>深淺平面</td><td>內肋間肌與最內肋間肌之間</td><td>外肋間肌與內肋間肌之間</td></tr><tr><td>沿哪一個骨緣</td><td>上方肋骨的內側下緣肋骨溝</td><td>肋骨上緣是主束的位置</td></tr></tbody></table></div><details><summary>只背「神經在最下面」足夠嗎？</summary><p>不夠。要再背主束所在的肌肉間平面與肋骨下緣，才能解決橫切面題。</p></details>"
   },
   {
    "id": "procedure",
    "title": "07｜上緣進入的解剖理由與限制",
    "html": "<div class=\"flow\"><div class=\"flow-step\"><b>定位主束</b><small>上方肋骨下緣</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">→</span><div class=\"flow-step\"><b>理解避開方向</b><small>靠下方肋骨上緣</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">→</span><div class=\"flow-step\"><b>保留側支概念</b><small>上緣附近仍可有小分支</small></div></div><p>影片利用胸管操作說明肋骨上緣的保護作用。可保留其「避開主要肋間束」的解剖思路；不可保留「一定不會傷到血管神經」的絕對說法。肋間血管走行有變異，亦有側支束。這裡整理的是考試解剖關係，不能把它當作操作教學。</p>"
   },
   {
    "id": "first",
    "title": "08｜第一肋骨：以斜角肌結節分前後",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">結構</th><th scope=\"col\">第一肋骨上的關係</th><th scope=\"col\">辨認方向</th></tr></thead><tbody><tr><td>前斜角肌 anterior scalene</td><td>附著於斜角肌結節 scalene tubercle</td><td>結節位於上面、靠內緣</td></tr><tr><td>鎖骨下靜脈溝</td><td>在前斜角肌結節前方</td><td>前＝靜脈</td></tr><tr><td>鎖骨下動脈溝</td><td>在前斜角肌結節後方</td><td>後＝動脈</td></tr><tr><td>臂神經叢</td><td>與動脈穿過前、中斜角肌之間</td><td>靜脈不走斜角肌間隙</td></tr><tr><td>中斜角肌</td><td>附著第一肋骨較後方</td><td>不是分開動、靜脈的那條肌肉</td></tr></tbody></table></div><div class=\"study-note teal\">第一肋骨上面的「兩條血管溝」與一般肋骨內面下緣的「costal groove」是不同構造。不要把 VAN 的上下順序硬套到第一肋骨動、靜脈的前後關係。</div>"
   },
   {
    "id": "sternum-levels",
    "title": "09｜胸骨與體表高度：接續第二章",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">標記</th><th scope=\"col\">傳統近似層級</th><th scope=\"col\">第三部回顧用途</th></tr></thead><tbody><tr><td>胸骨角 sternal angle</td><td>T4–T5 椎間盤附近</td><td>第 2 肋軟骨的定位</td></tr><tr><td>劍胸結合 xiphisternal joint</td><td>約 T9</td><td>第 7 肋軟骨與下胸骨附近</td></tr><tr><td>劍突尖端</td><td>約 T10，變異較大</td><td>區分劍突與劍胸結合</td></tr><tr><td>最低前外側肋緣</td><td>教學常約 L3</td><td>涉及第 10 肋軟骨與姿勢，非每人固定水平</td></tr></tbody></table></div><p>影片開頭的語音轉錄將胸骨角與劍胸結合層級混在一起；本站以第二章及教材的標準位置呈現。肋骨前後高度不同，所有體表層級都要搭配姿勢與觀察方向。</p>"
   }
  ]
 },
 {
  "id": "scapula",
  "title": "肩胛骨與肩胛上切跡",
  "english": "Scapula & suprascapular notch",
  "summary": "前後面、三角三緣、肌肉附著與韌帶上下方的神經血管辨認。",
  "sources": [
   "S61",
   "S64",
   "S67",
   "S69"
  ],
  "sections": [
   {
    "id": "orientation",
    "title": "01｜先定左右，再看前後",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">線索</th><th scope=\"col\">朝向</th><th scope=\"col\">判斷</th></tr></thead><tbody><tr><td>肩胛棘 scapular spine</td><td>後方</td><td>看得到肩胛棘的是後面</td></tr><tr><td>肩胛下窩 subscapular fossa</td><td>前方，靠胸壁</td><td>前面不被肩胛棘分成上下兩窩</td></tr><tr><td>關節盂 glenoid cavity</td><td>外側，亦略朝前</td><td>它接肱骨頭</td></tr><tr><td>喙突 coracoid process</td><td>向前突出</td><td>與向後外延續的肩峰區分</td></tr></tbody></table></div><div class=\"flow\"><div class=\"flow-step\"><b>找關節盂</b><small>定外側</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">→</span><div class=\"flow-step\"><b>找肩胛棘</b><small>定後面</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">→</span><div class=\"flow-step\"><b>下角向下</b><small>再判左右</small></div></div>"
   },
   {
    "id": "borders",
    "title": "02｜三角、三緣、三窩",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">類別</th><th scope=\"col\">名稱</th><th scope=\"col\">功能定位</th></tr></thead><tbody><tr><td>三角</td><td>上角、下角、外側角</td><td>外側角帶有關節盂</td></tr><tr><td>三緣</td><td>上緣、內側（脊柱）緣、外側（腋）緣</td><td>肩胛上切跡在上緣、靠喙突</td></tr><tr><td>前面窩</td><td>肩胛下窩</td><td>肩胛下肌起點</td></tr><tr><td>後面上窩</td><td>棘上窩 supraspinous fossa</td><td>棘上肌起點</td></tr><tr><td>後面下窩</td><td>棘下窩 infraspinous fossa</td><td>棘下肌起點</td></tr></tbody></table></div>"
   },
   {
    "id": "surface",
    "title": "03｜T2、T3、T7：傳統姿勢下的近似地標",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">體表標記</th><th scope=\"col\">常用近似</th><th scope=\"col\">注意</th></tr></thead><tbody><tr><td>上角</td><td>T2</td><td>手臂自然垂下時</td></tr><tr><td>肩胛棘內端／棘根</td><td>T3</td><td>最常拿來作背部地標</td></tr><tr><td>下角</td><td>T7</td><td>肩胛骨會隨手臂抬高而旋轉</td></tr><tr><td>影片補充的外側角、肩峰高度</td><td>示意圖分別畫近 T3、T2</td><td>以圖像記憶為主，勿當成固定影像切面</td></tr></tbody></table></div><p>肩胛骨位於後胸壁，傳統範圍約第 2–7 肋。肋骨編號與胸椎體表高度是兩種描述；姿勢、肩帶活動、個體形態都會改變定位。</p>"
   },
   {
    "id": "spine-acromion",
    "title": "04｜肩胛棘如何延續成肩峰",
    "html": "<p>肩胛棘向外延續為肩峰 acromion。肩峰與鎖骨外端形成肩鎖關節；關節盂則與肱骨頭形成盂肱關節。看到兩個關節都在肩部時，仍要把它們的骨頭配對分開。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">骨性標記</th><th scope=\"col\">主要連結</th><th scope=\"col\">辨認</th></tr></thead><tbody><tr><td>肩峰</td><td>鎖骨外端；三角肌、斜方肌附著</td><td>肩胛棘外側的延續</td></tr><tr><td>關節盂</td><td>肱骨頭</td><td>淺而呈梨形的關節面</td></tr><tr><td>盂上結節</td><td>肱二頭肌長頭起點（另涉及盂唇）</td><td>在關節盂上方</td></tr><tr><td>盂下結節</td><td>肱三頭肌長頭起點</td><td>在關節盂下方</td></tr></tbody></table></div>"
   },
   {
    "id": "coracoid",
    "title": "05｜喙突：三條肌肉、三組常見韌帶",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">類別</th><th scope=\"col\">結構</th><th scope=\"col\">喙突關係</th></tr></thead><tbody><tr><td>肌肉</td><td>胸小肌 pectoralis minor</td><td>止於喙突</td></tr><tr><td>肌肉</td><td>肱二頭肌短頭</td><td>起於喙突</td></tr><tr><td>肌肉</td><td>喙肱肌 coracobrachialis</td><td>起於喙突</td></tr><tr><td>韌帶</td><td>喙鎖韌帶</td><td>喙突 ↔ 鎖骨</td></tr><tr><td>韌帶</td><td>喙肩韌帶</td><td>喙突 ↔ 肩峰</td></tr><tr><td>韌帶</td><td>喙肱韌帶</td><td>喙突 ↔ 肱骨／肩關節囊</td></tr></tbody></table></div><details><summary>喙突連肱二頭肌長頭還是短頭？</summary><p>短頭。長頭起於盂上結節與上方盂唇，走過結節間溝。</p></details>"
   },
   {
    "id": "notch",
    "title": "06｜肩胛上切跡：韌帶是判斷基準",
    "html": "<figure><a href=\"assets/bones3-shoulder.svg\" target=\"_blank\" rel=\"noopener\"><img loading=\"lazy\" src=\"assets/bones3-shoulder.svg\" alt=\"肩胛上切跡的動脈與神經、喙鎖韌帶兩部分示意\"></a><figcaption>A：動脈通常在韌帶上，神經在韌帶下；B：圓錐內後、斜方外前。（點圖放大；本站原創概念圖，非等比例解剖圖。）</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">結構</th><th scope=\"col\">通常走行</th><th scope=\"col\">背法</th></tr></thead><tbody><tr><td>肩胛上橫韌帶 superior transverse scapular ligament</td><td>跨過肩胛上切跡</td><td>把切跡上方封成孔樣通道</td></tr><tr><td>肩胛上神經 suprascapular nerve</td><td>韌帶下方</td><td>N below</td></tr><tr><td>肩胛上動脈 suprascapular artery</td><td>通常在韌帶上方</td><td>A above</td></tr><tr><td>肩胛上靜脈</td><td>走行可變</td><td>不要將動脈口訣擴大成無變異的所有血管</td></tr></tbody></table></div><div class=\"study-note teal\">「Army over, Navy under」可用於動脈與神經的典型走行，解剖研究仍有變異。肩胛上切跡與較下方的棘盂切跡 spinoglenoid notch 也不是同一個位置。</div>"
   },
   {
    "id": "ssn-clinical",
    "title": "07｜教材延伸：肩胛上神經壓迫位置",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">位置</th><th scope=\"col\">可能受影響肌肉</th><th scope=\"col\">解題線索</th></tr></thead><tbody><tr><td>肩胛上切跡近端</td><td>棘上肌與棘下肌</td><td>外展起始、外旋均可受影響</td></tr><tr><td>棘盂切跡較遠端</td><td>以棘下肌為主</td><td>較偏外旋無力</td></tr></tbody></table></div><p>這是將影片的「通過誰的上、下方」延伸成定位題；影片並未完整講解所有肩部神經病變。旋轉肌袖肌肉本身受傷與神經壓迫也需要分開思考。</p>"
   },
   {
    "id": "words",
    "title": "08｜Coracoid、Coronoid、Conoid：差一字不同部位",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">英文</th><th scope=\"col\">中文</th><th scope=\"col\">本章例子</th></tr></thead><tbody><tr><td>Coracoid</td><td>喙狀／鳥嘴狀</td><td>肩胛骨喙突</td></tr><tr><td>Coronoid</td><td>冠狀</td><td>尺骨冠突；第二章下頜骨冠突</td></tr><tr><td>Conoid</td><td>圓錐</td><td>鎖骨圓錐結節、圓錐韌帶</td></tr><tr><td>Acromion</td><td>肩峰</td><td>肩胛棘的外側延續</td></tr><tr><td>Glenoid</td><td>關節盂</td><td>接肱骨頭</td></tr></tbody></table></div><p>讀題先看完整單字與所屬骨頭；「肩胛骨冠突」與「尺骨喙突」都是把相近拼字混在一起。</p>"
   }
  ]
 },
 {
  "id": "clavicle-girdle",
  "title": "鎖骨、肩帶連接與喙鎖韌帶",
  "english": "Clavicle & pectoral girdle",
  "summary": "胸鎖、肩鎖、盂肱三關節分開，錐狀與斜方韌帶搭配骨性附著。",
  "sources": [
   "S61",
   "S63",
   "S69"
  ],
  "sections": [
   {
    "id": "chain",
    "title": "01｜上肢如何接上軀幹",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">連接</th><th scope=\"col\">兩端</th><th scope=\"col\">性質</th></tr></thead><tbody><tr><td>胸鎖關節 SC</td><td>鎖骨內端 ↔ 胸骨柄（涉及第 1 肋軟骨）</td><td>上肢與中軸骨的重要骨性連接</td></tr><tr><td>肩鎖關節 AC</td><td>鎖骨外端 ↔ 肩峰</td><td>肩帶內部連接</td></tr><tr><td>盂肱關節 GH</td><td>肩胛骨關節盂 ↔ 肱骨頭</td><td>肩關節主要活動關節</td></tr><tr><td>肩胛胸廓接觸</td><td>肩胛骨前面 ↔ 胸壁肌肉平面</td><td>功能性滑動介面，非典型骨性滑液關節</td></tr></tbody></table></div><p>肩帶由鎖骨及肩胛骨構成。鎖骨像支撐桿，讓上肢與胸壁保持距離；肩胛骨本身並未直接與肋骨形成一般滑液關節。</p>"
   },
   {
    "id": "shape",
    "title": "02｜鎖骨左右：S 形、內圓外扁、下粗上平",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">部位</th><th scope=\"col\">形態線索</th><th scope=\"col\">關節／附著</th></tr></thead><tbody><tr><td>內側端 sternal end</td><td>較粗圓</td><td>胸鎖關節</td></tr><tr><td>內側約 2/3</td><td>向前凸</td><td>胸大肌、胸鎖乳突肌等附著</td></tr><tr><td>外側約 1/3</td><td>向前凹，較扁</td><td>三角肌、斜方肌等附著</td></tr><tr><td>外側端 acromial end</td><td>扁平</td><td>肩鎖關節</td></tr><tr><td>下表面</td><td>較粗糙；圓錐結節、斜方線等</td><td>用來協助定上下</td></tr></tbody></table></div><details><summary>只看到 S 形就能判斷左或右嗎？</summary><p>還不夠。先定內外端，再用下表面粗糙標記定上下，最後確認內側前凸、外側前凹。</p></details>"
   },
   {
    "id": "marks",
    "title": "03｜下表面三組附著",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">地標</th><th scope=\"col\">附著</th><th scope=\"col\">位置</th></tr></thead><tbody><tr><td>肋鎖韌帶印痕／粗隆</td><td>costoclavicular ligament</td><td>內側下表面</td></tr><tr><td>鎖骨下肌溝 subclavian groove</td><td>subclavius muscle</td><td>較中段下表面</td></tr><tr><td>圓錐結節 conoid tubercle</td><td>conoid ligament</td><td>外側下表面較內後</td></tr><tr><td>斜方線 trapezoid line</td><td>trapezoid ligament</td><td>較外前</td></tr></tbody></table></div><div class=\"study-note teal\">鎖骨下肌溝附著的是肌肉，不是第一肋骨讓鎖骨下動脈、靜脈通過的兩條血管溝。</div>"
   },
   {
    "id": "cc",
    "title": "04｜喙鎖韌帶：一組、兩部分",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">部分</th><th scope=\"col\">形狀及方位</th><th scope=\"col\">鎖骨端</th></tr></thead><tbody><tr><td>Conoid 圓錐</td><td>較內側／後方；錐形</td><td>圓錐結節</td></tr><tr><td>Trapezoid 斜方</td><td>較外側／前方；較寬扁</td><td>斜方線</td></tr></tbody></table></div><p>喙鎖韌帶把喙突與鎖骨固定，協助維持肩鎖區的垂直穩定。影片利用「甜筒、菱形」幫助記憶形狀；考試最可靠的配對是 conoid ↔ conoid tubercle、trapezoid ↔ trapezoid line。</p>"
   },
   {
    "id": "not-same",
    "title": "05｜名稱相近的三個連接",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">名稱</th><th scope=\"col\">連接骨頭</th><th scope=\"col\">功能線索</th></tr></thead><tbody><tr><td>Coracoclavicular 喙鎖</td><td>喙突—鎖骨</td><td>有 conoid、trapezoid 兩部分</td></tr><tr><td>Coracoacromial 喙肩</td><td>喙突—肩峰</td><td>形成喙肩弓的一部分，位於肱骨頭上方</td></tr><tr><td>Acromioclavicular 肩鎖</td><td>肩峰—鎖骨</td><td>關節及其周圍韌帶</td></tr></tbody></table></div><details><summary>喙鎖韌帶的兩端一定跨過兩個不同骨頭嗎？</summary><p>是。喙突屬肩胛骨，另一端是鎖骨；喙肩韌帶兩端則都在肩胛骨上。</p></details>"
   },
   {
    "id": "ossify",
    "title": "06｜教材延伸：鎖骨骨化的例外",
    "html": "<p>鎖骨很早開始骨化，骨幹主要採膜內骨化，兩端仍涉及軟骨內骨化。因此「鎖骨完全只有膜內骨化」太絕對。它也不是因為形狀較彎就被分類成扁平骨，而是一塊特殊長骨。</p>"
   },
   {
    "id": "clinical",
    "title": "07｜教材延伸：骨折與肩鎖分離別混",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">情境</th><th scope=\"col\">主要受損結構</th><th scope=\"col\">解題切入</th></tr></thead><tbody><tr><td>鎖骨骨折</td><td>骨性支撐桿中斷</td><td>常在中段／曲度轉折區</td></tr><tr><td>肩鎖關節分離</td><td>肩鎖韌帶，較嚴重時喙鎖韌帶也受損</td><td>關節端相對位移與穩定性</td></tr><tr><td>盂肱脫位</td><td>肱骨頭離開關節盂</td><td>不是鎖骨與肩峰分離</td></tr></tbody></table></div><p>本節用三種損傷區分骨頭連接，不將簡化描述用於判定個別病人的分級或治療。</p>"
   }
  ]
 },
 {
  "id": "glenohumeral",
  "title": "肩關節：肌袖、韌帶、血管與神經",
  "english": "Glenohumeral joint",
  "summary": "盂肱球窩關節的動態／靜態穩定，影片三組韌帶及三條動脈、三條神經。",
  "sources": [
   "S48",
   "S67",
   "S80",
   "S85"
  ],
  "sections": [
   {
    "id": "joint",
    "title": "01｜肩關節＝盂肱關節：球大、窩淺",
    "html": "<p>肱骨頭與肩胛骨關節盂形成球窩滑液關節，可多軸活動。盂唇由纖維軟骨構成，增加關節盂的深度；活動度大仍需要肌肉、囊韌帶與其他構造共同維持穩定。</p>"
   },
   {
    "id": "stability",
    "title": "02｜影片「四肌三韌帶」與完整穩定系統",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">穩定種類</th><th scope=\"col\">主要構造</th><th scope=\"col\">影片記憶法</th></tr></thead><tbody><tr><td>動態</td><td>旋轉肌袖、肱二頭肌長頭、肩胛周圍肌群</td><td>四塊肌袖包住肱骨頭</td></tr><tr><td>靜態</td><td>關節囊、盂肱韌帶、盂唇、骨性配合及關節內負壓等</td><td>三組韌帶作為入門框架</td></tr></tbody></table></div><div class=\"study-note teal\">「肩關節靠肌肉」可用於強調肌袖的動態穩定，不能推成韌帶不重要。穩定作用會隨姿勢、活動方向與肩外展角度而改變。</div>"
   },
   {
    "id": "sits",
    "title": "03｜SITS 四肌：附著、動作與支配",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">肌袖</th><th scope=\"col\">肱骨止點</th><th scope=\"col\">主要動作／支配</th></tr></thead><tbody><tr><td>Supraspinatus 棘上肌</td><td>大結節上面</td><td>外展起始；肩胛上神經</td></tr><tr><td>Infraspinatus 棘下肌</td><td>大結節中面</td><td>外旋；肩胛上神經</td></tr><tr><td>Teres minor 小圓肌</td><td>大結節下面</td><td>外旋；腋神經</td></tr><tr><td>Subscapularis 肩胛下肌</td><td>小結節</td><td>內旋；肩胛下神經</td></tr></tbody></table></div><details><summary>三角肌也是肩外展，所以算第五塊 rotator cuff？</summary><p>不是。旋轉肌袖固定是 SITS 四肌；三角肌與它們協同，但不屬於肌袖。</p></details>"
   },
   {
    "id": "ligaments",
    "title": "04｜三組韌帶：保留課堂名稱，補充實際範圍",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">名稱</th><th scope=\"col\">主要連結／關係</th><th scope=\"col\">更精確的讀法</th></tr></thead><tbody><tr><td>盂肱韌帶 glenohumeral</td><td>關節盂側與肱骨側的前囊增厚</td><td>上、中、下三部分；不是單一線連到一個結節</td></tr><tr><td>喙肱韌帶 coracohumeral</td><td>喙突基部與肱骨近端／肩囊</td><td>可分支涉及大小結節，不僅大結節</td></tr><tr><td>橫肱韌帶 transverse humeral</td><td>跨大小結節間溝</td><td>傳統描述覆蓋長頭腱；現代解剖亦討論腱與韌帶複合纖維</td></tr></tbody></table></div><p>影片用簡圖把端點各配一個突起，方便記憶。答較精細的囊韌帶附著題時，應回到標準教材與題圖，保留它們是複合構造的事實。</p>"
   },
   {
    "id": "supply",
    "title": "05｜三條動脈：名字與位置連起來",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">血供</th><th scope=\"col\">名字線索</th><th scope=\"col\">位置配對</th></tr></thead><tbody><tr><td>肩胛上動脈 suprascapular</td><td>肩胛區域</td><td>與肩胛上切跡章相接</td></tr><tr><td>前旋肱動脈 anterior circumflex humeral</td><td>繞肱骨近端前方</td><td>不是骨幹肱深動脈</td></tr><tr><td>後旋肱動脈 posterior circumflex humeral</td><td>繞近端後方</td><td>與腋神經、四邊孔／外科頸相關</td></tr></tbody></table></div><p>這是影片列的肩關節主要血供框架；不要把三條列表推成周圍完全沒有其他吻合或分支。</p>"
   },
   {
    "id": "nerves",
    "title": "06｜三條關節神經與肌肉神經要分開",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">影片列的關節感覺支配</th><th scope=\"col\">中文</th><th scope=\"col\">辨認</th></tr></thead><tbody><tr><td>Suprascapular nerve</td><td>肩胛上神經</td><td>另支配棘上、棘下肌</td></tr><tr><td>Axillary nerve</td><td>腋神經</td><td>另支配三角肌、小圓肌</td></tr><tr><td>Lateral pectoral nerve</td><td>外側胸肌神經</td><td>關節支配列表與旋轉肌袖運動神經列表不同</td></tr></tbody></table></div><p>「三條關節神經」不等於「每一條都支配一塊肌袖」。較完整的文獻也提到肩胛下神經的關節感覺貢獻；各教材列表範圍可能不同。</p>"
   },
   {
    "id": "dislocation",
    "title": "07｜肩脫位與肩鎖分離：不沿用排名死背",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">情境</th><th scope=\"col\">骨頭關係</th><th scope=\"col\">重要配對</th></tr></thead><tbody><tr><td>盂肱脫位</td><td>肱骨頭離開關節盂</td><td>腋神經可能受影響</td></tr><tr><td>肩鎖分離</td><td>鎖骨外端與肩峰關係改變</td><td>肩鎖、喙鎖韌帶</td></tr><tr><td>影片「第一、第二易脫臼」說法</td><td>不同統計範圍會有不同排名</td><td>本章不把肩鎖關節列為全身固定第二名</td></tr></tbody></table></div><p>肩關節容易脫位，可由球大窩淺與活動度理解；比背無範圍的名次更能解題。</p>"
   }
  ]
 },
 {
  "id": "humerus",
  "title": "肱骨標記、肌肉附著與神經",
  "english": "Humerus & nerve relations",
  "summary": "大小結節、結節間溝、三角肌粗隆、滑車／小頭與三條貼骨神經。",
  "sources": [
   "S65",
   "S66",
   "S67",
   "S69",
   "S79",
   "S87"
  ],
  "sections": [
   {
    "id": "orient",
    "title": "01｜定左右：頭朝內上後、鷹嘴窩在後",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">線索</th><th scope=\"col\">方向</th><th scope=\"col\">辨認</th></tr></thead><tbody><tr><td>肱骨頭</td><td>內上方，略向後</td><td>與肩胛關節盂相接</td></tr><tr><td>大結節</td><td>外側</td><td>比小結節更外側</td></tr><tr><td>小結節</td><td>前側</td><td>不可當成內側的大結節</td></tr><tr><td>結節間溝</td><td>前側</td><td>分隔大小結節</td></tr><tr><td>鷹嘴窩 olecranon fossa</td><td>遠端後側</td><td>伸肘時容納尺骨鷹嘴</td></tr></tbody></table></div>"
   },
   {
    "id": "necks",
    "title": "02｜解剖頸與外科頸",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">名稱</th><th scope=\"col\">位置</th><th scope=\"col\">臨床配對</th></tr></thead><tbody><tr><td>Anatomical neck 解剖頸</td><td>沿肱骨頭關節面邊緣</td><td>頭與結節區的分界</td></tr><tr><td>Surgical neck 外科頸</td><td>結節區下方與骨幹交界</td><td>腋神經、後旋肱動脈附近</td></tr></tbody></table></div><details><summary>骨折題寫「肱骨頸」，可以直接選腋神經嗎？</summary><p>先確認是外科頸。解剖頸、外科頸與骨幹位置不同；題幹的精確部位才是配對依據。</p></details>"
   },
   {
    "id": "cuff",
    "title": "03｜大小結節：旋轉肌袖三加一",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">肌肉</th><th scope=\"col\">起點</th><th scope=\"col\">肱骨止點／主功能</th></tr></thead><tbody><tr><td>棘上肌 supraspinatus</td><td>棘上窩</td><td>大結節上面；外展起始與穩定</td></tr><tr><td>棘下肌 infraspinatus</td><td>棘下窩</td><td>大結節中面；外旋</td></tr><tr><td>小圓肌 teres minor</td><td>肩胛骨外側緣附近</td><td>大結節下面；外旋</td></tr><tr><td>肩胛下肌 subscapularis</td><td>肩胛下窩</td><td>小結節；內旋</td></tr></tbody></table></div><div class=\"study-note teal\">這四肌組成 SITS 旋轉肌袖。大圓肌雖然名字像小圓肌，卻不屬於旋轉肌袖。</div>"
   },
   {
    "id": "groove",
    "title": "04｜結節間溝：內容物與附著分兩題",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">位置</th><th scope=\"col\">結構</th><th scope=\"col\">不要混淆</th></tr></thead><tbody><tr><td>溝內通過</td><td>肱二頭肌長頭腱</td><td>通過不等於止在溝底</td></tr><tr><td>外側唇／大結節嵴</td><td>胸大肌 pectoralis major</td><td>主要附著在外側</td></tr><tr><td>溝底</td><td>闊背肌 latissimus dorsi</td><td>常用標準配對</td></tr><tr><td>內側唇／小結節嵴</td><td>大圓肌 teres major</td><td>不是肩胛下肌的小結節附著</td></tr></tbody></table></div><p>部分教材與真實標本的腱附著範圍可有重疊；國考配對先採標準地標，再看題圖。肱二頭肌長頭從盂上結節／盂唇出發，往遠端止於橈骨粗隆。</p>"
   },
   {
    "id": "shaft",
    "title": "05｜骨幹：三角肌粗隆與橈神經溝",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">標記</th><th scope=\"col\">附著／走行</th><th scope=\"col\">題型</th></tr></thead><tbody><tr><td>三角肌粗隆 deltoid tuberosity</td><td>三角肌止點；前外側</td><td>肌肉附著標本</td></tr><tr><td>橈神經溝 radial groove</td><td>橈神經與肱深動脈；後面斜行</td><td>骨幹骨折合併垂腕</td></tr><tr><td>骨幹橫切面</td><td>可用三面、三緣理解</td><td>與骨頭前後、肌肉分區搭配</td></tr></tbody></table></div><p>影片用橫切面的三角形幫助建立骨幹方向。骨的斷面會隨切面高度改變，不能推成每一段都呈完全相同的三角形。</p>"
   },
   {
    "id": "distal",
    "title": "06｜遠端：小頭配橈骨，滑車配尺骨",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">肱骨遠端</th><th scope=\"col\">相接／容納的前臂構造</th><th scope=\"col\">方向</th></tr></thead><tbody><tr><td>Capitulum / capitellum 肱骨小頭</td><td>橈骨頭上面</td><td>外側</td></tr><tr><td>Trochlea 滑車</td><td>尺骨滑車切跡</td><td>內側</td></tr><tr><td>Radial fossa 橈骨窩</td><td>屈肘時橈骨頭近端</td><td>前側、小頭上方</td></tr><tr><td>Coronoid fossa 冠突窩</td><td>屈肘時尺骨冠突</td><td>前側、滑車上方</td></tr><tr><td>Olecranon fossa 鷹嘴窩</td><td>伸肘時尺骨鷹嘴</td><td>後側、滑車上方</td></tr></tbody></table></div>"
   },
   {
    "id": "epicondyles",
    "title": "07｜內上髁、外上髁與肌群",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">地標</th><th scope=\"col\">肌群線索</th><th scope=\"col\">神經關係</th></tr></thead><tbody><tr><td>內上髁 medial epicondyle</td><td>前臂屈肌／旋前肌共同起點的一部分</td><td>尺神經走其後方</td></tr><tr><td>外上髁 lateral epicondyle</td><td>前臂伸肌／旋後肌相關起點</td><td>別把尺神經放到外側</td></tr></tbody></table></div><p>「內屈外伸」是共同腱起點的概括，不表示前臂所有屈肌、伸肌都只從這兩個點起源。</p>"
   },
   {
    "id": "nerves",
    "title": "08｜骨折位置 → 神經 → 表現",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">骨性部位</th><th scope=\"col\">重要神經／血管</th><th scope=\"col\">教材延伸的常見表現</th></tr></thead><tbody><tr><td>外科頸</td><td>腋神經、後旋肱動脈</td><td>三角肌無力；肩外側感覺受影響</td></tr><tr><td>骨幹／橈神經溝</td><td>橈神經、肱深動脈</td><td>腕／指伸展無力，可能垂腕</td></tr><tr><td>內上髁後方</td><td>尺神經</td><td>手內在肌與尺側感覺受影響</td></tr><tr><td>遠端髁上區</td><td>正中神經／前骨間神經、肱動脈</td><td>兒童伸展型髁上骨折的重要關係</td></tr></tbody></table></div><div class=\"flow\"><div class=\"flow-step\"><b>先找骨折高度</b><small>頸／幹／遠端</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">→</span><div class=\"flow-step\"><b>再找貼骨走行</b><small>腋／橈／尺或正中</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">→</span><div class=\"flow-step\"><b>最後看功能</b><small>運動與感覺是否吻合</small></div></div>"
   },
   {
    "id": "recall",
    "title": "09｜四個常混配對",
    "html": "<details><summary>肩胛下肌與大圓肌都內旋，所以止點相同嗎？</summary><p>不同。肩胛下肌止於小結節；大圓肌止於小結節嵴／結節間溝內側唇。</p></details><details><summary>肱骨小頭與肱骨頭是同一個構造嗎？</summary><p>不是。肱骨頭在近端接肩胛骨；肱骨小頭在遠端接橈骨頭。</p></details><details><summary>腋神經與橈神經都在肱骨後方，所以骨折配對可以互換嗎？</summary><p>不可以。腋神經靠外科頸，橈神經靠骨幹橈神經溝。</p></details><details><summary>盂下結節長頭腱與結節間溝長頭腱是同一條肌肉嗎？</summary><p>不同。盂下結節是肱三頭肌長頭；結節間溝通過肱二頭肌長頭腱。</p></details>"
   }
  ]
 },
 {
  "id": "forearm-elbow",
  "title": "肘關節、橈尺骨與旋前旋後",
  "english": "Elbow, radius & ulna",
  "summary": "近端橈骨頭、遠端尺骨頭；冠突、鷹嘴、莖突與兩端橈尺關節。",
  "sources": [
   "S62",
   "S68",
   "S69",
   "S81",
   "S82",
   "S91"
  ],
  "sections": [
   {
    "id": "compare",
    "title": "01｜橈尺骨比較：一張表先定方向",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">項目</th><th scope=\"col\">橈骨 radius</th><th scope=\"col\">尺骨 ulna</th></tr></thead><tbody><tr><td>解剖姿勢</td><td>外側／拇指側</td><td>內側／小指側</td></tr><tr><td>最粗的一端</td><td>遠端較寬</td><td>近端較大</td></tr><tr><td>骨頭 head 在哪</td><td>近端</td><td>遠端</td></tr><tr><td>肘部關節面</td><td>橈骨頭接肱骨小頭</td><td>滑車切跡接肱骨滑車</td></tr><tr><td>腕部直接骨性連接</td><td>接舟狀骨、月狀骨</td><td>與腕骨間隔著關節盤</td></tr><tr><td>可觸的莖突</td><td>遠端外側</td><td>遠端內後側</td></tr></tbody></table></div>"
   },
   {
    "id": "radial-prox",
    "title": "02｜橈骨近端：頭、頸、粗隆",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">標記</th><th scope=\"col\">關係</th><th scope=\"col\">解題</th></tr></thead><tbody><tr><td>橈骨頭上面</td><td>凹面接肱骨小頭</td><td>肱橈關節</td></tr><tr><td>橈骨頭周緣</td><td>接尺骨橈骨切跡，環狀韌帶包圍</td><td>近端橈尺關節</td></tr><tr><td>橈骨頸</td><td>頭下方較細處</td><td>與肱骨外科頸不同</td></tr><tr><td>橈骨粗隆 radial tuberosity</td><td>肱二頭肌止點</td><td>屈肘、旋後力矩</td></tr></tbody></table></div><details><summary>肱二頭肌止於肱骨，所以只能動肩嗎？</summary><p>錯。其主要遠端止點是橈骨粗隆，能作用於肘關節與前臂旋後。</p></details>"
   },
   {
    "id": "ulnar-prox",
    "title": "03｜尺骨近端：鷹嘴與冠突夾住滑車",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">關係</th><th scope=\"col\">附著線索</th></tr></thead><tbody><tr><td>鷹嘴 olecranon</td><td>後上方，構成滑車切跡上部</td><td>肱三頭肌止點</td></tr><tr><td>冠突 coronoid process</td><td>前下方，構成滑車切跡下部</td><td>屈肘進入冠突窩</td></tr><tr><td>滑車切跡 trochlear notch</td><td>鷹嘴與冠突之間</td><td>接肱骨滑車</td></tr><tr><td>橈骨切跡 radial notch</td><td>近端外側</td><td>接橈骨頭周緣</td></tr><tr><td>尺骨粗隆 ulnar tuberosity</td><td>冠突下方前側</td><td>肱肌止點</td></tr></tbody></table></div><div class=\"study-note teal\">尺骨「橈骨切跡」是為橈骨命名的關節面；橈骨「尺骨切跡」則在遠端，是為尺骨頭命名。</div>"
   },
   {
    "id": "paired",
    "title": "04｜兩端橈尺關節：頭與切跡對調",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">關節</th><th scope=\"col\">頭</th><th scope=\"col\">切跡</th></tr></thead><tbody><tr><td>近端橈尺關節</td><td>橈骨頭</td><td>尺骨的橈骨切跡</td></tr><tr><td>遠端橈尺關節</td><td>尺骨頭</td><td>橈骨的尺骨切跡</td></tr></tbody></table></div><p>兩端橈尺關節共同使前臂旋前、旋後。肘的屈伸主要由肱尺與肱橈關節處理；「肘附近活動」不必然都是單純屈伸。</p>"
   },
   {
    "id": "elbow-complex",
    "title": "05｜肘複合體三部分與三組入門韌帶",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">部分</th><th scope=\"col\">骨性配對</th><th scope=\"col\">主要活動</th></tr></thead><tbody><tr><td>肱尺</td><td>滑車 ↔ 滑車切跡</td><td>屈伸</td></tr><tr><td>肱橈</td><td>肱骨小頭 ↔ 橈骨頭凹面</td><td>配合屈伸、旋轉</td></tr><tr><td>近端橈尺</td><td>橈骨頭周緣 ↔ 尺骨橈骨切跡</td><td>旋前旋後</td></tr></tbody></table></div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">韌帶</th><th scope=\"col\">主要關係</th><th scope=\"col\">作用</th></tr></thead><tbody><tr><td>尺側副</td><td>內上髁與尺骨</td><td>抵抗外翻</td></tr><tr><td>橈側副／外側韌帶複合體</td><td>外上髁與環狀韌帶等</td><td>外側穩定</td></tr><tr><td>環狀</td><td>兩端附著尺骨橈骨切跡前後緣，環繞橈骨頭</td><td>保持橈骨頭就位而允許旋轉</td></tr></tbody></table></div><div class=\"study-note teal\">影片把屈伸功能的肘關節列作肱尺＋肱橈；完整肘複合體還包含同囊的近端橈尺關節。名稱範圍與功能分類要分開。</div>"
   },
   {
    "id": "distal",
    "title": "06｜遠端：莖突高度與腕部承重",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">結構</th><th scope=\"col\">標準關係</th><th scope=\"col\">題目線索</th></tr></thead><tbody><tr><td>橈骨莖突</td><td>通常比尺骨莖突更遠端</td><td>腕部變形／骨折相對高度</td></tr><tr><td>橈骨遠端關節面</td><td>舟狀骨在橈側、月狀骨在尺側</td><td>直接接哪兩塊腕骨</td></tr><tr><td>尺骨頭</td><td>接橈骨尺骨切跡</td><td>遠端橈尺關節</td></tr><tr><td>尺骨遠端與腕骨</td><td>中間有關節盤／TFCC 成分</td><td>不直接接腕骨</td></tr></tbody></table></div><p>「尺骨不直接接腕骨」不等於它完全不參與腕部穩定或力傳遞。腕部整體受力也會經關節盤與骨間膜分散。</p>"
   },
   {
    "id": "rotate",
    "title": "07｜旋前、旋後：用骨頭相對位置理解",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">姿勢</th><th scope=\"col\">骨頭關係</th><th scope=\"col\">主要動作肌補充</th></tr></thead><tbody><tr><td>旋後 supination</td><td>橈尺骨較平行；手掌朝前／向上</td><td>肱二頭肌、旋後肌</td></tr><tr><td>旋前 pronation</td><td>橈骨跨向尺骨前方；手掌朝後／向下</td><td>旋前圓肌、旋前方肌</td></tr></tbody></table></div><div class=\"flow\"><div class=\"flow-step\"><b>先回到解剖姿勢</b><small>橈骨外、尺骨內</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">→</span><div class=\"flow-step\"><b>橈骨轉動</b><small>兩端橈尺關節協同</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">→</span><div class=\"flow-step\"><b>手隨橈骨旋轉</b><small>不要當成只有肩在轉</small></div></div>"
   },
   {
    "id": "elbow-surface",
    "title": "08｜肘後方三點：伸直成線、屈曲成三角",
    "html": "<p>內上髁、外上髁與鷹嘴尖，在肘伸直時大致在同一直線；屈肘時形成三角形。這是骨性地標的相對關係；影片用來幫助辨認肘部方向，不是所有人都能觸出精確等邊三角形。</p>"
   },
   {
    "id": "fractures",
    "title": "09｜影片四種前臂骨折：補上脫位與方向",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">名稱</th><th scope=\"col\">核心骨性損傷</th><th scope=\"col\">關節／方向</th></tr></thead><tbody><tr><td>Colles</td><td>遠端橈骨骨折</td><td>遠端向背側移位／成角</td></tr><tr><td>Smith</td><td>遠端橈骨骨折</td><td>遠端向掌側移位／成角</td></tr><tr><td>Monteggia</td><td>尺骨近端骨折合併橈骨頭脫位</td><td>近端橈尺區</td></tr><tr><td>Galeazzi</td><td>橈骨幹遠端骨折合併遠端橈尺關節損傷</td><td>遠端橈尺區</td></tr></tbody></table></div><div class=\"study-note teal\">影片介紹這四種骨折的部位；本站補上 Monteggia、Galeazzi 合併的關節損傷，及 Colles、Smith 的明確掌／背側方向。</div>"
   }
  ]
 },
 {
  "id": "carpus-hand",
  "title": "腕骨、手骨與舟狀骨血流",
  "english": "Carpus, metacarpals & phalanges",
  "summary": "八塊腕骨的兩排排列、舟狀骨近端壞死風險、27 塊手骨與掌骨標記。",
  "sources": [
   "S62",
   "S69",
   "S70",
   "S71",
   "S83",
   "S84",
   "S88",
   "S90",
   "S92",
   "S93",
   "S94",
   "S95"
  ],
  "sections": [
   {
    "id": "carpal-map",
    "title": "01｜兩排八塊：先固定橈側到尺側",
    "html": "<figure><a href=\"assets/bones3-carpals.svg\" target=\"_blank\" rel=\"noopener\"><img loading=\"lazy\" src=\"assets/bones3-carpals.svg\" alt=\"腕骨近遠兩排橈側到尺側的概念排列，豆狀骨在三角骨掌側\"></a><figcaption>橈側是拇指側；近排舟月三角，豆狀骨覆在三角骨掌側。（點圖放大；本站原創概念圖，非等比例解剖圖。）</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">排</th><th scope=\"col\">橈側 → 尺側</th><th scope=\"col\">英文</th></tr></thead><tbody><tr><td>近端排</td><td>舟狀、月狀、三角、豆狀</td><td>Scaphoid, Lunate, Triquetrum, Pisiform</td></tr><tr><td>遠端排</td><td>大多角、小多角、頭狀、鉤狀</td><td>Trapezium, Trapezoid, Capitate, Hamate</td></tr></tbody></table></div><p>這張圖用格子表達先後位置，不代表四塊近端腕骨都排在同一平面。豆狀骨在三角骨的掌側，是最常漏掉的深度關係。</p>"
   },
   {
    "id": "names",
    "title": "02｜兩個多角骨與頭狀／鉤狀骨",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">腕骨</th><th scope=\"col\">定位</th><th scope=\"col\">記憶配對</th></tr></thead><tbody><tr><td>大多角骨 trapezium</td><td>遠排最橈側</td><td>第 1 掌骨的鞍狀關節</td></tr><tr><td>小多角骨 trapezoid</td><td>大多角骨旁</td><td>第 2 掌骨附近</td></tr><tr><td>頭狀骨 capitate</td><td>遠排較中央，通常最大</td><td>第 3 掌骨附近</td></tr><tr><td>鉤狀骨 hamate</td><td>遠排尺側，掌面有鉤</td><td>第 4、5 掌骨附近</td></tr></tbody></table></div><div class=\"study-note teal\">Trapezoid 也用於鎖骨斜方韌帶的名稱；同一形容詞不代表骨頭與韌帶是相同構造。</div>"
   },
   {
    "id": "proximal",
    "title": "03｜近端腕骨：誰接橈骨、誰在掌側",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">腕骨</th><th scope=\"col\">重點</th><th scope=\"col\">補充</th></tr></thead><tbody><tr><td>舟狀骨</td><td>直接接橈骨；跨兩排功能關係</td><td>常見腕骨骨折</td></tr><tr><td>月狀骨</td><td>直接接橈骨</td><td>掌側脫位可能影響正中神經</td></tr><tr><td>三角骨</td><td>尺側，關節盤與其相關</td><td>沒有直接與尺骨形成骨性關節</td></tr><tr><td>豆狀骨</td><td>在三角骨掌側</td><td>尺側屈腕肌肌腱內的籽骨</td></tr></tbody></table></div><details><summary>尺骨與三角骨直接相接嗎？</summary><p>不直接。遠端尺骨與腕骨之間有關節盤，不能因為它們都在尺側就省略軟組織。</p></details>"
   },
   {
    "id": "scaphoid",
    "title": "04｜舟狀骨血流：近端較脆弱，不是遠端必然壞死",
    "html": "<div class=\"flow\"><div class=\"flow-step\"><b>橈動脈分支進入</b><small>主要在背側腰部等位置</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">→</span><div class=\"flow-step\"><b>骨內血流往近端</b><small>近端依賴逆行供血</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">→</span><div class=\"flow-step\"><b>腰部／近端骨折</b><small>可能中斷近端供血</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">→</span><div class=\"flow-step\"><b>風險增加</b><small>近端缺血與不癒合</small></div></div><p>影片用舟狀骨說明 avascular necrosis。標準重點是近端片段較易供血受損；風險受骨折位置、移位、血管保留程度影響。不能寫成「每一個舟狀骨骨折都一定壞死」，也不要把近端、遠端的危險方向顛倒。</p>"
   },
   {
    "id": "snuff",
    "title": "05｜教材延伸：鼻煙窩與舟狀骨",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">項目</th><th scope=\"col\">內容</th></tr></thead><tbody><tr><td>尺側／內側腱界</td><td>拇長伸肌 EPL</td></tr><tr><td>橈側／外側腱界</td><td>拇長外展肌 APL、拇短伸肌 EPB</td></tr><tr><td>深部骨性底</td><td>舟狀骨、大多角骨</td></tr><tr><td>主要通過動脈</td><td>橈動脈</td></tr></tbody></table></div><p>手撐地後出現鼻煙窩壓痛是常見試題線索，但解題需要把骨、腱、動脈放在同一張空間圖；這是教材補充，不以它代替臨床診斷。</p>"
   },
   {
    "id": "tunnel",
    "title": "06｜教材延伸：腕隧道的骨性附著",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">項目</th><th scope=\"col\">配對</th><th scope=\"col\">對比</th></tr></thead><tbody><tr><td>橈側屈肌支持帶附著</td><td>舟狀骨結節、大多角骨</td><td>不是橈骨莖突</td></tr><tr><td>尺側屈肌支持帶附著</td><td>豆狀骨、鉤狀骨鉤</td><td>不是尺骨莖突</td></tr><tr><td>隧道內容</td><td>正中神經及屈肌腱</td><td>尺神經、尺動脈走 Guyon 管</td></tr><tr><td>Guyon 管地標</td><td>豆狀骨與鉤狀骨鉤附近</td><td>與腕隧道分開</td></tr></tbody></table></div><div class=\"study-note teal\">腕骨排列、腕隧道內容和 Guyon 管是三種題目；先定位骨，再背通道。</div><p>腕隧道內 9 條肌腱＝屈指淺肌 FDS 4、屈指深肌 FDP 4、拇長屈肌 FPL 1；不是 9 塊不同肌肉。</p>"
   },
   {
    "id": "counts",
    "title": "07｜手骨計數：8＋5＋14＝27",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">區域</th><th scope=\"col\">數量</th><th scope=\"col\">易錯處</th></tr></thead><tbody><tr><td>腕骨 carpal</td><td>8</td><td>豆狀骨也是一塊</td></tr><tr><td>掌骨 metacarpal</td><td>5</td><td>從拇指第 1 到小指第 5</td></tr><tr><td>指骨 phalanges</td><td>14</td><td>拇指 2，其餘每指 3</td></tr><tr><td>合計</td><td>27</td><td>不包含橈、尺骨；額外籽骨有變異</td></tr></tbody></table></div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">掌骨／指骨位置</th><th scope=\"col\">關節</th></tr></thead><tbody><tr><td>Base 基底</td><td>近端</td><td>掌骨基底接腕骨</td></tr><tr><td>Shaft 骨幹</td><td>中段</td><td>肌肉附著</td></tr><tr><td>Head 頭</td><td>遠端</td><td>掌骨頭接近節指骨基底</td></tr></tbody></table></div>"
   },
   {
    "id": "transverse",
    "title": "08｜深橫掌骨韌帶：手 2–5、足 1–5",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">韌帶</th><th scope=\"col\">連結</th><th scope=\"col\">拇指／拇趾</th></tr></thead><tbody><tr><td>深橫掌骨韌帶 deep transverse metacarpal ligament</td><td>第 2–5 掌指關節的掌板相互連接，限制掌骨頭分離</td><td>不以同樣方式把第 1 掌骨綁入</td></tr><tr><td>深橫蹠骨韌帶 deep transverse metatarsal ligament</td><td>第 1–5 蹠趾關節掌／蹠板相互連接</td><td>含第 1 蹠骨區域</td></tr></tbody></table></div><p>影片說「把頭綁在一起」是形象記法；更精確是連接鄰近關節掌板的橫向韌帶。掌骨 metacarpal 與蹠骨 metatarsal 只差字根，手、足的連結範圍卻不同。</p>"
   },
   {
    "id": "phalanges",
    "title": "09｜Phalanx 與 phalanges、拇指與其他四指",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">英文</th><th scope=\"col\">用法</th><th scope=\"col\">構造</th></tr></thead><tbody><tr><td>Phalanx</td><td>單數，一塊指骨</td><td>近、中央或遠節</td></tr><tr><td>Phalanges</td><td>複數，多塊指骨</td><td>全部手指共 14</td></tr><tr><td>Thumb 拇指</td><td>沒有中節指骨</td><td>近節與遠節</td></tr><tr><td>其他四指</td><td>每指三節</td><td>近節、中節、遠節</td></tr></tbody></table></div><p>影片講到單複數拼字時，重點是讓你看懂教材標示。指骨和掌骨雖小，按形態分類仍屬長骨，不能用「尺寸很短」判定短骨。</p>"
   },
   {
    "id": "clinical",
    "title": "10｜掌骨標記與骨折位置",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">位置</th><th scope=\"col\">解題概念</th><th scope=\"col\">是否影片核心</th></tr></thead><tbody><tr><td>掌骨頭 head</td><td>拳頭突起、MCP 關節</td><td>影片介紹頭、頸與基底方向</td></tr><tr><td>掌骨頸 neck</td><td>頭的近端，拳擊手骨折常涉及第 5 掌骨頸</td><td>影片骨折配對</td></tr><tr><td>第 1 掌骨基底</td><td>拇指 CMC 位置，與 Bennett 等骨折相關</td><td>影片骨折配對</td></tr></tbody></table></div><details><summary>影片提到拳頭受傷，等於所有拳擊手骨折都發生在掌骨頭嗎？</summary><p>不等於。常見的 boxer’s fracture 是第 5 掌骨頸；頭、頸、基底必須分開。</p></details><p>Bennett 骨折是第 1 掌骨基底的關節內骨折，常伴 CMC 半脫位；不是所有拇指基底骨折都可只用同一個名字。</p>"
   },
   {
    "id": "thumb-cmc",
    "title": "11｜拇指 CMC：大多角骨配第 1 掌骨",
    "html": "<p>大多角骨與第一掌骨基底形成鞍狀關節，提供拇指對掌的重要活動基礎。影片強調它是手部活動度很大的關節；不要將腕掌關節 CMC 與掌指關節 MCP 混淆。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">關節</th><th scope=\"col\">配對</th><th scope=\"col\">構造</th></tr></thead><tbody><tr><td>第 1 CMC</td><td>大多角骨 ↔ 第 1 掌骨基底</td><td>鞍狀</td></tr><tr><td>MCP</td><td>掌骨頭 ↔ 近節指骨基底</td><td>主要屈伸並有其他活動</td></tr><tr><td>IP</td><td>相鄰指骨</td><td>鉸鏈型屈伸</td></tr></tbody></table></div>"
   }
  ]
 },
 {
  "id": "hip-landmarks",
  "title": "髖骨三部分與骨盆地標",
  "english": "Hip bone landmarks",
  "summary": "髂骨、坐骨、恥骨的內外面，四個髂棘、恥骨標記與 L4／S2 定位。",
  "sources": [
   "S72",
   "S73",
   "S76",
   "S77",
   "S101",
   "S102"
  ],
  "sections": [
   {
    "id": "terms",
    "title": "01｜骨盆、骨盆帶、髖骨不是同義詞",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">術語</th><th scope=\"col\">構成</th><th scope=\"col\">計數</th></tr></thead><tbody><tr><td>髖骨 hip / coxal bone</td><td>髂骨＋坐骨＋恥骨融合</td><td>左右各一塊</td></tr><tr><td>骨盆帶 pelvic girdle</td><td>左右髖骨</td><td>不把薦、尾骨算進此狹義術語</td></tr><tr><td>骨性骨盆 bony pelvis</td><td>左右髖骨＋薦骨＋尾骨</td><td>成人通常 4 塊骨</td></tr></tbody></table></div><p>不要把「一塊髖骨由三個區域組成」推成成人骨盆一定有八塊獨立骨頭；題目問的是發育來源或成人融合後計數，答案不同。</p>"
   },
   {
    "id": "regions",
    "title": "02｜三部分相會於髖臼",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">區域</th><th scope=\"col\">大致位置</th><th scope=\"col\">主要地標</th></tr></thead><tbody><tr><td>Ilium 髂骨</td><td>上方扇形</td><td>髂嵴、髂棘、髂窩、耳狀面</td></tr><tr><td>Ischium 坐骨</td><td>後下方</td><td>坐骨棘、坐骨結節、坐骨支</td></tr><tr><td>Pubis 恥骨</td><td>前下內方</td><td>恥骨體、上支、下支、恥骨聯合</td></tr></tbody></table></div><p>三部分共同參與髖臼 acetabulum；閉孔 obturator foramen 則由恥骨與坐骨圍成。髖臼接股骨頭，閉孔大部分被閉孔膜覆蓋，兩個大型構造不能混淆。</p>"
   },
   {
    "id": "iliac-words",
    "title": "03｜Ilium 與 ileum：骨頭與腸道",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">單字</th><th scope=\"col\">中文</th><th scope=\"col\">相關形容詞</th></tr></thead><tbody><tr><td>Ilium</td><td>髂骨</td><td>Iliac：如 iliac crest 髂嵴</td></tr><tr><td>Ileum</td><td>迴腸</td><td>Ileal：如 ileal artery</td></tr><tr><td>Iliac fossa</td><td>髂窩</td><td>髂骨內面的凹面</td></tr></tbody></table></div><div class=\"study-note teal\">拼字只差一個母音，所屬系統卻不同。用髂嵴、髂窩與迴腸的完整片語記憶，比只背單字更不易混。</div>"
   },
   {
    "id": "four-spines",
    "title": "04｜四個髂棘：上、下與前、後兩軸",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">縮寫</th><th scope=\"col\">英文／中文</th><th scope=\"col\">附著或辨認</th></tr></thead><tbody><tr><td>ASIS</td><td>Anterior superior iliac spine／髂前上棘</td><td>縫匠肌、腹股溝韌帶</td></tr><tr><td>AIIS</td><td>Anterior inferior iliac spine／髂前下棘</td><td>股直肌直頭起點</td></tr><tr><td>PSIS</td><td>Posterior superior iliac spine／髂後上棘</td><td>背部酒窩附近，薦髂區地標</td></tr><tr><td>PIIS</td><td>Posterior inferior iliac spine／髂後下棘</td><td>大坐骨切跡上端附近</td></tr></tbody></table></div><p>看標本先找髂嵴的前後兩端，再找各自下方的另一個棘。勿把「上、下」誤看成同一個棘的前後兩面。</p>"
   },
   {
    "id": "levels",
    "title": "05｜骨盆體表層級：L4／L4–5 與 S2",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">線／地標</th><th scope=\"col\">傳統教學近似</th><th scope=\"col\">限制</th></tr></thead><tbody><tr><td>左右髂嵴最高點連線 intercristal line</td><td>L4 棘突或 L4–L5 間隙附近</td><td>影像與觸診未必同層；姿勢、體型造成偏差</td></tr><tr><td>左右 PSIS 連線</td><td>S2 附近</td><td>並非每位個體都精確穿過 S2</td></tr><tr><td>影片畫出的髂棘水平線</td><td>幫助畫骨盆輪廓</td><td>不要把所有髂棘都當成同一真實水平面</td></tr></tbody></table></div><p>這些層級幫助理解腰椎與骨盆相對高度。定位研究顯示觸診有偏差；保留「約」比寫成百分之百固定更精確。</p>"
   },
   {
    "id": "med-lat",
    "title": "06｜髖骨內、外面：髂窩、耳狀面與髖臼",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">面</th><th scope=\"col\">主要構造</th><th scope=\"col\">關係</th></tr></thead><tbody><tr><td>內面</td><td>髂窩 iliac fossa</td><td>髂肌起點</td></tr><tr><td>內面後部</td><td>耳狀面 auricular surface</td><td>與薦骨形成薦髂關節</td></tr><tr><td>內面下界</td><td>弓狀線 arcuate line</td><td>骨盆入口邊界的一部分</td></tr><tr><td>外面</td><td>髖臼 acetabulum</td><td>接股骨頭</td></tr><tr><td>外面上部</td><td>臀面與臀線</td><td>臀肌起點相關</td></tr></tbody></table></div><div class=\"flow\"><div class=\"flow-step\"><b>找髖臼</b><small>定外側</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">→</span><div class=\"flow-step\"><b>找恥骨聯合面</b><small>定前內側</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">→</span><div class=\"flow-step\"><b>髂嵴在上</b><small>再判左右</small></div></div>"
   },
   {
    "id": "ischium",
    "title": "07｜坐骨棘與坐骨結節：韌帶、肌腱各有位置",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">地標</th><th scope=\"col\">位置</th><th scope=\"col\">附著／臨床線索</th></tr></thead><tbody><tr><td>坐骨棘 ischial spine</td><td>大、小坐骨切跡之間</td><td>薦棘韌帶；陰部神經繞行附近</td></tr><tr><td>坐骨結節 ischial tuberosity</td><td>後下方粗糙部</td><td>薦結節韌帶；多數腿後肌起點</td></tr><tr><td>坐骨支 ischial ramus</td><td>向前上接恥骨下支</td><td>組成坐恥支</td></tr></tbody></table></div><div class=\"study-note teal\">「坐骨」是坐著承重相關，不代表它的所有突起都在最下方。坐骨棘比坐骨結節更上方。</div>"
   },
   {
    "id": "pubis",
    "title": "08｜恥骨體、上支、下支與四個名稱",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">中文／英文</th><th scope=\"col\">位置與用途</th></tr></thead><tbody><tr><td>恥骨體</td><td>Body of pubis</td><td>前內側，與對側形成聯合</td></tr><tr><td>恥骨結節</td><td>Pubic tubercle</td><td>恥骨體上方外側突起；腹股溝韌帶附著</td></tr><tr><td>恥骨嵴</td><td>Pubic crest</td><td>恥骨體上緣，延向聯合</td></tr><tr><td>恥骨梳</td><td>Pecten pubis / pectineal line</td><td>上支的上緣；骨盆入口的一部分</td></tr><tr><td>恥骨下支</td><td>Inferior pubic ramus</td><td>與坐骨支相接</td></tr></tbody></table></div><p>Pubic tubercle、pubic crest、pecten pubis 分別是結節、體上緣與上支上緣；不是同一條突起的三種名字。影片另提 pubic line，可回到具體講義圖確認，本站不將不明標記強行映射成恥骨梳。</p>"
   },
   {
    "id": "obturator",
    "title": "09｜髖臼與閉孔：一個接關節，一個形成通道",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">組成</th><th scope=\"col\">通過／相接</th></tr></thead><tbody><tr><td>髖臼</td><td>髂、坐、恥骨共同形成</td><td>股骨頭；月狀面參與關節</td></tr><tr><td>閉孔</td><td>坐骨與恥骨圍成</td><td>大部分由閉孔膜封閉</td></tr><tr><td>閉孔管</td><td>閉孔上緣的溝與閉孔膜構成</td><td>閉孔神經、動脈、靜脈</td></tr></tbody></table></div><details><summary>閉孔神經穿過整個開放的閉孔嗎？</summary><p>更精確是穿過閉孔管；大部分閉孔被閉孔膜覆蓋。</p></details>"
   },
   {
    "id": "iliac-tubercle",
    "title": "10｜髂結節與髂嵴：影片的 L5 口訣",
    "html": "<p>髂結節 iliac tubercle 是髂嵴外唇向外較明顯的突起；髂嵴 crest 是整條上緣。影片用「髂嵴最高點約 L4、髂結節約 L5」作層級記憶。可保留為課堂概念，勿把圖上的位置當成每人精確固定的椎體水平。</p><details><summary>Iliac tubercle 就是 ASIS 嗎？</summary><p>不是。髂結節在髂嵴外唇，是不同於髂前上棘的地標。</p></details>"
   },
   {
    "id": "si-clinical",
    "title": "11｜薦髂關節與僵直性脊椎炎",
    "html": "<p>影片由髂骨耳狀面帶到薦髂關節，再連到僵直性脊椎炎 ankylosing spondylitis。核心解剖配對是「薦骨耳狀面 ↔ 髂骨耳狀面」。薦髂關節炎是相關疾病的重要表現，但疾病分佈與發展有差異，不寫成所有人一定先痛這裡。</p><div class=\"study-note teal\">影片另以臀部外上象限解釋避開坐骨神經的傳統概念。這是理解神經位置的線索；實際注射部位選擇還涉及肌肉、脂肪厚度、藥物及專業規範，不能以簡圖保證安全。</div>"
   }
  ]
 },
 {
  "id": "pelvic-connections",
  "title": "骨盆關節、韌帶與坐骨孔",
  "english": "Pelvic joints & sciatic foramina",
  "summary": "薦棘與薦結節韌帶的端點、大／小坐骨切跡變成孔，入口出口邊界比較。",
  "sources": [
   "S56",
   "S72",
   "S74",
   "S75",
   "S77",
   "S99"
  ],
  "sections": [
   {
    "id": "joints",
    "title": "01｜骨盆骨頭如何連起來",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">關節</th><th scope=\"col\">骨性配對</th><th scope=\"col\">組織／功能</th></tr></thead><tbody><tr><td>薦髂關節 sacroiliac</td><td>薦骨耳狀面 ↔ 髂骨耳狀面</td><td>前部滑液部分、後部強韌帶連接；承重</td></tr><tr><td>恥骨聯合 pubic symphysis</td><td>左右恥骨聯合面</td><td>纖維軟骨聯合</td></tr><tr><td>腰薦連接</td><td>L5 ↔ S1</td><td>椎間盤及關節突間關節</td></tr><tr><td>薦尾關節</td><td>薦骨 ↔ 尾骨</td><td>構造與融合可有變異</td></tr><tr><td>髖關節</td><td>髖臼 ↔ 股骨頭</td><td>球窩滑液關節</td></tr></tbody></table></div><div class=\"study-note teal\">「骨盆很穩定」不等於所有連接都完全融合；「有韌帶」也不等於沒有滑液關節部分。</div>"
   },
   {
    "id": "inguinal-iliofemoral",
    "title": "02｜影片反覆要求的兩條韌帶：ASIS 與 AIIS",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">韌帶</th><th scope=\"col\">骨性端點</th><th scope=\"col\">用途／易錯</th></tr></thead><tbody><tr><td>腹股溝韌帶 inguinal ligament</td><td>ASIS 髂前上棘 ↔ 恥骨結節</td><td>腹股溝區；不是髂前下棘</td></tr><tr><td>髂股韌帶 iliofemoral ligament</td><td>AIIS 髂前下棘及鄰近髖臼緣 ↔ 股骨轉子間線</td><td>髖關節前囊、Y 形；不是後方轉子間嵴</td></tr></tbody></table></div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">股骨近端地標</th><th scope=\"col\">位置</th><th scope=\"col\">辨別</th></tr></thead><tbody><tr><td>Intertrochanteric line 轉子間線</td><td>前面，大小轉子之間</td><td>髂股韌帶附著相關</td></tr><tr><td>Intertrochanteric crest 轉子間嵴</td><td>後面，大小轉子之間</td><td>與轉子間線分開</td></tr></tbody></table></div><details><summary>把兩條韌帶都背成從髂前上棘出發可以嗎？</summary><p>不可以。腹股溝＝上棘；髂股＝下棘。再分別接恥骨結節、股骨轉子間線。</p></details>"
   },
   {
    "id": "two-lig",
    "title": "03｜薦棘與薦結節韌帶：名稱直接告訴你端點",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">韌帶</th><th scope=\"col\">外側端點</th><th scope=\"col\">共同關係</th></tr></thead><tbody><tr><td>Sacrospinous 薦棘</td><td>坐骨棘 ischial spine</td><td>內側與薦、尾骨相連</td></tr><tr><td>Sacrotuberous 薦結節</td><td>坐骨結節 ischial tuberosity</td><td>連到薦骨及相關骨盆後部</td></tr></tbody></table></div><p>兩條韌帶協助限制薦骨傾動，也把骨性切跡轉成孔的邊界。切跡是骨頭上的凹口，孔則需把韌帶閉合後的通道一起看。</p>"
   },
   {
    "id": "notches",
    "title": "04｜大、小坐骨切跡：由坐骨棘分開",
    "html": "<figure><a href=\"assets/bones3-pelvis.svg\" target=\"_blank\" rel=\"noopener\"><img loading=\"lazy\" src=\"assets/bones3-pelvis.svg\" alt=\"髖骨後緣的大、小坐骨切跡、坐骨棘與兩條韌帶附著的概念圖\"></a><figcaption>先由上往下找大切跡、坐骨棘、小切跡、坐骨結節，再加入韌帶。（點圖放大；本站原創概念圖，非等比例解剖圖。）</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">切跡</th><th scope=\"col\">骨性起訖的概括</th><th scope=\"col\">變成孔時</th></tr></thead><tbody><tr><td>大坐骨切跡 greater sciatic notch</td><td>髂後下棘附近 → 坐骨棘</td><td>加入薦棘、薦結節韌帶等邊界</td></tr><tr><td>小坐骨切跡 lesser sciatic notch</td><td>坐骨棘 → 坐骨結節</td><td>加入薦棘、薦結節韌帶等邊界</td></tr></tbody></table></div><details><summary>坐骨棘屬於大孔還是小孔的分界？</summary><p>它是兩個切跡之間的骨性突起，附著薦棘韌帶，參與分隔大、小坐骨孔。</p></details>"
   },
   {
    "id": "greater",
    "title": "05｜教材延伸：大坐骨孔以梨狀肌再分上下",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">區域</th><th scope=\"col\">主要構造</th><th scope=\"col\">背法</th></tr></thead><tbody><tr><td>梨狀肌上方</td><td>上臀神經、上臀血管</td><td>上臀走上方</td></tr><tr><td>梨狀肌下方</td><td>坐骨神經、下臀神經／血管、後股皮神經、陰部神經及內陰部血管等</td><td>多數走下方</td></tr><tr><td>梨狀肌本身</td><td>經大坐骨孔</td><td>先有大孔，再由肌肉分區</td></tr></tbody></table></div><div class=\"study-note teal\">本表是骨性通道的教材延伸。坐骨神經與梨狀肌關係也有變異；基本題先用常見典型走行。</div>"
   },
   {
    "id": "lesser",
    "title": "06｜教材延伸：小坐骨孔不是隻通陰部神經",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">通過構造</th><th scope=\"col\">功能／去向</th></tr></thead><tbody><tr><td>閉孔內肌腱</td><td>從骨盆內轉向臀部</td></tr><tr><td>陰部神經與內陰部血管</td><td>由臀區轉入會陰</td></tr><tr><td>閉孔內肌神經</td><td>相關肌肉的支配</td></tr></tbody></table></div><p>閉孔神經走閉孔管；閉孔內肌腱卻走小坐骨孔。名稱帶「閉孔」不表示全部通過閉孔管。</p>"
   },
   {
    "id": "pudendal",
    "title": "07｜陰部神經：大孔出、小孔入會陰",
    "html": "<div class=\"flow\"><div class=\"flow-step\"><b>骨盆內起源</b><small>S2–S4</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">→</span><div class=\"flow-step\"><b>大坐骨孔出</b><small>通常梨狀肌下方</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">→</span><div class=\"flow-step\"><b>繞坐骨棘附近</b><small>薦棘韌帶後方</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">→</span><div class=\"flow-step\"><b>小坐骨孔入</b><small>進入會陰，再走陰部管</small></div></div><p>用「出、繞、入」配合骨頭與韌帶，才能讀懂陰部神經阻滯的解剖地標。它轉入的是會陰區，不能把這句口訣簡化成從小孔回到腹腔。</p>"
   },
   {
    "id": "inlet",
    "title": "08｜骨盆入口：沿一圈邊界走",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">區段</th><th scope=\"col\">邊界</th><th scope=\"col\">區分</th></tr></thead><tbody><tr><td>後方</td><td>薦岬 sacral promontory，並涉及薦骨翼</td><td>不是尾骨尖</td></tr><tr><td>外側</td><td>髂骨弓狀線 arcuate line</td><td>髂窩的下界附近</td></tr><tr><td>前外側</td><td>恥骨梳 pecten pubis</td><td>恥骨上支上緣</td></tr><tr><td>前方</td><td>恥骨嵴及恥骨聯合上緣</td><td>不是恥骨下支</td></tr></tbody></table></div><p>骨盆入口／界線分開大骨盆（假骨盆）與小骨盆（真骨盆）。本節為教材補充，第三部主要講骨頭與韌帶，未完整展開產科所有徑線。</p>"
   },
   {
    "id": "outlet",
    "title": "09｜骨盆出口：把韌帶也算入邊界",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">區段</th><th scope=\"col\">主要邊界</th><th scope=\"col\">對比</th></tr></thead><tbody><tr><td>前</td><td>恥骨聯合下緣與坐恥支</td><td>入口是聯合上緣</td></tr><tr><td>外側</td><td>坐骨結節</td><td>不是坐骨棘</td></tr><tr><td>後外側</td><td>薦結節韌帶</td><td>不是把髂嵴畫成出口</td></tr><tr><td>後</td><td>尾骨尖</td><td>不是薦岬</td></tr></tbody></table></div><details><summary>骨盆出口只由骨頭圍成，所以韌帶不算邊界？</summary><p>錯。薦結節韌帶是出口邊界的重要部分。</p></details>"
   },
   {
    "id": "sex",
    "title": "10｜教材延伸：典型骨盆形態比較",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">特徵</th><th scope=\"col\">典型女性骨盆</th><th scope=\"col\">典型男性骨盆</th></tr></thead><tbody><tr><td>入口</td><td>較圓／橢圓</td><td>較偏心形</td></tr><tr><td>小骨盆</td><td>較寬淺</td><td>較窄深</td></tr><tr><td>恥骨下角</td><td>通常較大</td><td>通常較小</td></tr><tr><td>大坐骨切跡</td><td>通常較寬</td><td>通常較窄</td></tr></tbody></table></div><p>這些是群體上的典型形態，個體有重疊。不要把一個角度值當成絕對性別分類，也不要把這些分類延伸成個別人的分娩結果。</p>"
   }
  ]
 },
 {
  "id": "rapid-review",
  "title": "第三部考前配對速查",
  "english": "Rapid recall tables",
  "summary": "九組復習內容：骨性配對、肌肉附著、神經、骨折與骨盆通道。",
  "sources": [
   "S58",
   "S62",
   "S65",
   "S67",
   "S69",
   "S74",
   "S75",
   "S82",
   "S84",
   "S99"
  ],
  "sections": [
   {
    "id": "pair-1",
    "title": "01｜胸壁與第一肋",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">看到什麼</th><th scope=\"col\">立刻配對</th></tr></thead><tbody><tr><td>肋間主束</td><td>上方肋骨下緣；內與最內肋間肌間；VAN</td></tr><tr><td>第一肋斜角肌結節</td><td>前靜脈、後動脈</td></tr><tr><td>浮肋</td><td>11、12，屬假肋</td></tr><tr><td>典型形態</td><td>通常 3–9</td></tr></tbody></table></div>"
   },
   {
    "id": "pair-2",
    "title": "02｜肩帶與肩關節",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">看到什麼</th><th scope=\"col\">立刻配對</th></tr></thead><tbody><tr><td>肩胛上神經</td><td>肩胛上橫韌帶下方</td></tr><tr><td>喙鎖</td><td>圓錐＋斜方</td></tr><tr><td>肌袖</td><td>SITS 四肌</td></tr><tr><td>關節盂</td><td>接肱骨頭</td></tr><tr><td>胸鎖</td><td>上肢骨骼接軀幹的骨性橋接</td></tr></tbody></table></div>"
   },
   {
    "id": "pair-3",
    "title": "03｜肱骨肌肉附著",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">看到什麼</th><th scope=\"col\">立刻配對</th></tr></thead><tbody><tr><td>大結節</td><td>棘上、棘下、小圓</td></tr><tr><td>小結節</td><td>肩胛下</td></tr><tr><td>外唇／內唇／溝底</td><td>胸大／大圓／闊背</td></tr><tr><td>結節間溝內容物</td><td>肱二頭肌長頭腱</td></tr><tr><td>內／外上髁</td><td>屈肌群／伸肌群</td></tr></tbody></table></div>"
   },
   {
    "id": "pair-4",
    "title": "04｜肱骨神經與遠端",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">看到什麼</th><th scope=\"col\">立刻配對</th></tr></thead><tbody><tr><td>外科頸</td><td>腋神經；三角肌相關</td></tr><tr><td>骨幹橈神經溝</td><td>橈神經＋肱深動脈；垂腕</td></tr><tr><td>內上髁後</td><td>尺神經</td></tr><tr><td>小頭外側</td><td>橈骨頭</td></tr><tr><td>滑車內側</td><td>尺骨滑車切跡</td></tr></tbody></table></div>"
   },
   {
    "id": "pair-5",
    "title": "05｜橈尺、腕與骨折",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">看到什麼</th><th scope=\"col\">立刻配對</th></tr></thead><tbody><tr><td>近端頭</td><td>橈骨</td></tr><tr><td>遠端頭</td><td>尺骨</td></tr><tr><td>近端橈骨切跡</td><td>在尺骨</td></tr><tr><td>遠端尺骨切跡</td><td>在橈骨</td></tr><tr><td>Monteggia</td><td>尺骨＋橈骨頭</td></tr><tr><td>Galeazzi</td><td>橈骨＋遠端橈尺</td></tr><tr><td>Colles／Smith</td><td>背側／掌側</td></tr></tbody></table></div>"
   },
   {
    "id": "pair-6",
    "title": "06｜手部八骨與通道",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">看到什麼</th><th scope=\"col\">立刻配對</th></tr></thead><tbody><tr><td>近排橈→尺</td><td>舟、月、三角；豌豆位掌側</td></tr><tr><td>遠排橈→尺</td><td>大多角、小多角、頭狀、鉤狀</td></tr><tr><td>腕隧道</td><td>正中神經＋9 屈肌腱</td></tr><tr><td>Guyon 管</td><td>尺神經、尺動脈</td></tr><tr><td>拇指 CMC</td><td>大多角骨＋第 1 掌骨</td></tr><tr><td>Bennett／boxer</td><td>第 1 基底／第 5 頸</td></tr></tbody></table></div>"
   },
   {
    "id": "pair-7",
    "title": "07｜髖骨地標與韌帶",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">看到什麼</th><th scope=\"col\">立刻配對</th></tr></thead><tbody><tr><td>髖骨三部分</td><td>髂、坐、恥</td></tr><tr><td>腹股溝</td><td>ASIS→恥骨結節</td></tr><tr><td>髂股</td><td>AIIS→轉子間線</td></tr><tr><td>髂嵴最高點</td><td>傳統約 L4／L4–5</td></tr><tr><td>PSIS</td><td>傳統約 S2</td></tr><tr><td>薦棘／薦結節</td><td>坐骨棘／坐骨結節</td></tr></tbody></table></div>"
   },
   {
    "id": "pair-8",
    "title": "08｜孔與孔的內容物",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">看到什麼</th><th scope=\"col\">立刻配對</th></tr></thead><tbody><tr><td>閉孔管</td><td>閉孔神經、血管</td></tr><tr><td>大孔梨狀肌上</td><td>上臀神經、血管</td></tr><tr><td>大孔梨狀肌下</td><td>坐骨神經、陰部神經等</td></tr><tr><td>小孔</td><td>閉孔內肌腱、陰部神經等</td></tr><tr><td>陰部神經路線</td><td>大孔出→繞坐骨棘→小孔入會陰</td></tr></tbody></table></div>"
   },
   {
    "id": "strategy",
    "title": "09｜從背配對到標本題的三步",
    "html": "<div class=\"flow\"><div class=\"flow-step\"><b>定方向</b><small>前後、內外、近遠</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">→</span><div class=\"flow-step\"><b>找兩端</b><small>骨頭＋接面／韌帶</small></div><span class=\"flow-arrow\" aria-hidden=\"true\">→</span><div class=\"flow-step\"><b>接功能</b><small>肌肉、神經、通道</small></div></div><p>讀文字後遮住右欄自行回想；再對照原創圖與原教材的三維視角。若錯在「頭、頸、基底」或「切跡、孔、管」，先脩名詞範圍，再增加臨床配對。表格是濃縮複習，詳情與變異仍見主題頁。</p>"
   }
  ]
 },
 {
  "id": "exam-sources",
  "title": "第三部國考對接、圖片與參考來源",
  "english": "Exam links and sources",
  "summary": "已核對兩道官方題、教材圖頁、中文整理入口、45 個新增來源與整理方法。",
  "sources": [
   "S85",
   "S86",
   "S89",
   "S96",
   "S97",
   "S98",
   "S100"
  ],
  "sections": [
   {
    "id": "official",
    "title": "01｜官方考題：已核對原題、標準答案、更正答案",
    "html": "<p>115 年第二次「醫師（一）」醫學（一），代號 1301。以下為題意改寫，不是影片宣稱的歷屆頻率。核對日期：2026-10-10；第 24、31 題在更正答案中未被變更。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">題號／原 PDF 頁</th><th scope=\"col\">題意與正解</th><th scope=\"col\">解析／本章連結</th></tr></thead><tbody><tr><td>24／第 5 頁</td><td>骨盆壁與底部肌肉敘述的錯誤選項：D</td><td>尾骨肌位於骨盆膈後部，從坐骨棘走向薦、尾骨；並非穿小坐骨孔到臀部。對照：梨狀肌經大孔，閉孔內肌腱經小孔。</td></tr><tr><td>31／第 6 頁</td><td>解剖姿勢下，股骨外髁的內外側位置對應肱骨：A，小頭</td><td>兩者都在外側。肱骨小頭配橈骨頭；肱骨滑車在內側配尺骨。題目比的是內外側位置，不是把兩個骨頭接成關節。</td></tr></tbody></table></div><p>原檔：<a href=\"https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?c=301&code=115090&q=1&s=0101&t=Q\" target=\"_blank\" rel=\"noopener\">試題 PDF</a> · <a href=\"https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?c=301&code=115090&q=1&s=0101&t=S\" target=\"_blank\" rel=\"noopener\">標準答案</a> · <a href=\"https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?c=301&code=115090&q=1&s=0101&t=M\" target=\"_blank\" rel=\"noopener\">更正答案</a>。</p>"
   },
   {
    "id": "mapping",
    "title": "02｜本章如何對接一階國考",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">主題</th><th scope=\"col\">應能回答</th><th scope=\"col\">用哪一頁複習</th></tr></thead><tbody><tr><td>肋骨橫切面</td><td>VAN、肌層、肋骨上下緣</td><td>胸壁</td></tr><tr><td>肩胛切跡</td><td>神經和韌帶的上下關係</td><td>肩胛骨</td></tr><tr><td>肱骨標本</td><td>小頭／滑車、大小結節、三個窩</td><td>肱骨</td></tr><tr><td>外傷配對</td><td>骨折部位與神經、關節損傷</td><td>肱骨、前臂</td></tr><tr><td>腕骨／腕隧道</td><td>八骨方向、正中與尺神經通道</td><td>腕骨與手</td></tr><tr><td>骨盆通道</td><td>切跡→孔、肌腱與神經去向</td><td>骨盆連接</td></tr></tbody></table></div><div class=\"study-note teal\">這是依課程與官方題意建立的複習方向，不是官方考題命中率或重點排名。</div>"
   },
   {
    "id": "figures",
    "title": "03｜圖片、圖號與開放教材入口",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">教材／圖</th><th scope=\"col\">對照內容</th><th scope=\"col\">讀法</th></tr></thead><tbody><tr><td>OpenStax 8.1</td><td>肩胛骨、鎖骨、肩帶</td><td>比較前後面與右左</td></tr><tr><td>OpenStax 8.2</td><td>肱骨、橈尺骨、腕骨</td><td>先定位，再背標記</td></tr><tr><td>OpenStax 8.3</td><td>髖骨、骨盆</td><td>比較內外面與入口</td></tr><tr><td>臺大 Bone Limb Upper PDF</td><td>第 41–43 頁肩；45–47 頁肘；52–54 頁腕</td><td>頁碼指 PDF 檔案頁，非影片講義頁碼</td></tr><tr><td>本站四張原創 SVG</td><td>胸壁／第一肋、肩帶、腕骨、骨盆</td><td>概念圖，非等比例；可點開放大</td></tr></tbody></table></div><p>原圖請由下方來源連結開啟；未把大學講義圖片整頁複製到網站。本站圖像可與真實標本和影像互相對照，不能以二維示意決定實際操作位置。</p>"
   },
   {
    "id": "community",
    "title": "04｜他人中文整理：閱讀入口與校正",
    "html": "<p>加入「身隨意動／夜黎：上肢的骨頭」作中文整理入口，方便先讀中文再對照英文教材。該文章部分名詞有誤，例如月狀骨的英文應為 lunate；因此網站醫學事實以原英文教材及研究核對，沒有把二手文章整段搬進來。</p><p>第一、二章已有國考心得與複習資源入口。讀心得時提取時間安排、錯題整理與圖像辨認方法；不要將個人的題感或準備方式當成官方配分或普遍保證。</p>"
   },
   {
    "id": "source-map",
    "title": "05｜外部來源如何使用",
    "html": "<p>逐段筆記提供課堂主線；九個主題頁將板書概念拆成可查表的骨、肌肉、韌帶與神經關係。教材與文獻用於校正名詞、補齊範圍或說明變異。每頁頁尾列具體來源編號，下方可查所有新增來源。</p><p>本章新增來源以 NCBI／PubMed、OpenStax、大學解剖教材與考選部為主。研究論文的結論保留研究範圍，沒有將個別病例或百分比擴成所有人。影片年代較早；涉及精確定位與臨床連結，以當前可核對資料補註。</p>"
   },
   {
    "id": "refs-official",
    "title": "06｜官方與圖像／中文教材",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">編號／連結</th><th scope=\"col\">用途</th></tr></thead><tbody><tr><td>S61 · <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-1-the-pectoral-girdle\" target=\"_blank\" rel=\"noopener\">OpenStax：8.1 The Pectoral Girdle</a></td><td>肩帶骨性連接及肩胛骨辨認。</td></tr><tr><td>S62 · <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-2-bones-of-the-upper-limb\" target=\"_blank\" rel=\"noopener\">OpenStax：8.2 Bones of the Upper Limb</a></td><td>上肢骨、關節面與腕骨圖像核對。</td></tr><tr><td>S72 · <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/8-3-the-pelvic-girdle-and-pelvis\" target=\"_blank\" rel=\"noopener\">OpenStax：8.3 The Pelvic Girdle and Pelvis</a></td><td>髖骨三部分、骨盆入口／出口、薦棘與薦結節韌帶。</td></tr><tr><td>S85 · <a href=\"https://homepage.ntu.edu.tw/~anatomy/teacher/hsieh/ANOTOMY/Bone_Limb_Upper.pdf\" target=\"_blank\" rel=\"noopener\">臺大解剖學：Bone Limb Upper</a></td><td>59 頁上肢骨教材；可用原 PDF 對照肩、肘及腕骨圖。未轉載圖片。</td></tr><tr><td>S86 · <a href=\"https://wilback.com/anatomy-and-physiology-2e-08-02/\" target=\"_blank\" rel=\"noopener\">身隨意動／夜黎：上肢的骨頭</a></td><td>提供中文閱讀入口；原文部分名詞有誤，本站另以英文原教材核對。例如月狀骨應為 lunate，不是 pisiform。</td></tr><tr><td>S89 · <a href=\"https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=115090&y=2026\" target=\"_blank\" rel=\"noopener\">考選部：115 年第二次醫師第一階段考畢試題入口</a></td><td>已配合原試題、標準答案、更正答案核對第 24、31 題，見本章來源頁。</td></tr><tr><td>S96 · <a href=\"https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?c=301&code=115090&q=1&s=0101&t=Q\" target=\"_blank\" rel=\"noopener\">考選部：115 年第二次醫師（一）醫學（一）官方試題</a></td><td>已核對第 24 題 D、第 31 題 A；更正答案未變更這兩題。</td></tr><tr><td>S97 · <a href=\"https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?c=301&code=115090&q=1&s=0101&t=S\" target=\"_blank\" rel=\"noopener\">考選部：115 年第二次醫師（一）醫學（一）官方標準答案</a></td><td>已核對第 24 題 D、第 31 題 A；更正答案未變更這兩題。</td></tr><tr><td>S98 · <a href=\"https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?c=301&code=115090&q=1&s=0101&t=M\" target=\"_blank\" rel=\"noopener\">考選部：115 年第二次醫師（一）醫學（一）官方更正答案</a></td><td>已核對第 24 題 D、第 31 題 A；更正答案未變更這兩題。</td></tr></tbody></table></div>"
   },
   {
    "id": "refs-book",
    "title": "07｜骨與關節教材",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">編號／連結</th><th scope=\"col\">用途</th></tr></thead><tbody><tr><td>S58 · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK538328/\" target=\"_blank\" rel=\"noopener\">NCBI：Anatomy, Thorax, Ribs</a></td><td>肋骨典型／非典型分類、第一肋骨與血管溝。</td></tr><tr><td>S59 · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK549847/\" target=\"_blank\" rel=\"noopener\">NCBI：Anatomy, Thorax, Superior Intercostal Arteries</a></td><td>核對 VAN 由上而下排列、內肋間肌與最內肋間肌間的平面。</td></tr><tr><td>S60 · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK544368/\" target=\"_blank\" rel=\"noopener\">NCBI：Anatomy, Thoracotomy and the Collateral Intercostal Neurovascular Bundle</a></td><td>側支血管神經束存在；沿肋骨上緣並不能保證零損傷。</td></tr><tr><td>S63 · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK525990/\" target=\"_blank\" rel=\"noopener\">NCBI：Anatomy, Shoulder and Upper Limb, Clavicle</a></td><td>鎖骨形態、膜內／軟骨內骨化、喙鎖韌帶附著。</td></tr><tr><td>S64 · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK557880/\" target=\"_blank\" rel=\"noopener\">NCBI：Anatomy, Shoulder and Upper Limb, Suprascapular Nerve</a></td><td>肩胛上神經經肩胛上橫韌帶下方；動脈通常在上方，存在變異。</td></tr><tr><td>S65 · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK534821/?report=printable\" target=\"_blank\" rel=\"noopener\">NCBI：Anatomy, Shoulder and Upper Limb, Humerus</a></td><td>肱骨結節、結節間溝、肱骨小頭與滑車。</td></tr><tr><td>S66 · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK526056/?report=reader\" target=\"_blank\" rel=\"noopener\">NCBI：Anatomy, Shoulder and Upper Limb, Nerves</a></td><td>腋／橈／尺神經與肱骨骨折位置的關係。</td></tr><tr><td>S67 · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK546633/\" target=\"_blank\" rel=\"noopener\">NCBI：Anatomy, Shoulder and Upper Limb, Scapulohumeral Muscles</a></td><td>旋轉肌袖四肌、附著與功能。</td></tr><tr><td>S68 · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK544512/\" target=\"_blank\" rel=\"noopener\">NCBI：Anatomy, Shoulder and Upper Limb, Forearm Radius</a></td><td>橈骨頭、粗隆、莖突、遠端關節面。</td></tr><tr><td>S70 · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK536907/?report=reader\" target=\"_blank\" rel=\"noopener\">NCBI：Scaphoid Wrist Fracture</a></td><td>舟狀骨逆行血流與近端缺血風險；未採用過度絕對的發生率。</td></tr><tr><td>S73 · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK519524/\" target=\"_blank\" rel=\"noopener\">NCBI：Anatomy, Abdomen and Pelvis: Bones (Ilium, Ischium, and Pubis)</a></td><td>髂、坐、恥骨地標及觸診用途。</td></tr><tr><td>S74 · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK493215/\" target=\"_blank\" rel=\"noopener\">NCBI：Anatomy, Abdomen and Pelvis: Ligaments</a></td><td>骨盆韌帶及大／小坐骨孔的形成。</td></tr><tr><td>S75 · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK554736/\" target=\"_blank\" rel=\"noopener\">NCBI：Anatomy, Abdomen and Pelvis, Pudendal Nerve</a></td><td>陰部神經繞坐骨棘，經大坐骨孔出、小坐骨孔入會陰。</td></tr><tr><td>S78 · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK538321/?report=printable\" target=\"_blank\" rel=\"noopener\">NCBI：Anatomy, Thorax, Muscles</a></td><td>最內肋間肌、肋下肌及胸橫肌同屬最深肌群，不可當成同一條肌肉。</td></tr><tr><td>S80 · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK537018/\" target=\"_blank\" rel=\"noopener\">NCBI：Anatomy, Shoulder and Upper Limb, Glenohumeral Joint</a></td><td>肩關節囊、盂唇、動態／靜態穩定與神經血供。</td></tr><tr><td>S81 · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK532948/\" target=\"_blank\" rel=\"noopener\">NCBI：Anatomy, Shoulder and Upper Limb, Elbow Joint</a></td><td>肘複合體三部分、側副與環狀韌帶。</td></tr><tr><td>S82 · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK574580/?report=printable\" target=\"_blank\" rel=\"noopener\">NCBI：Forearm Fractures</a></td><td>Monteggia 與 Galeazzi 不只骨折，還要加入關節損傷。</td></tr><tr><td>S83 · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK470428/\" target=\"_blank\" rel=\"noopener\">NCBI：Fifth Metacarpal Fracture</a></td><td>拳擊手骨折常見於第 5 掌骨頸。</td></tr><tr><td>S84 · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK545198/\" target=\"_blank\" rel=\"noopener\">NCBI：Anatomy, Shoulder and Upper Limb, Wrist Flexor Retinaculum</a></td><td>腕隧道 9 條肌腱與正中神經，及其骨性附著。</td></tr><tr><td>S87 · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK560933/\" target=\"_blank\" rel=\"noopener\">NCBI：Supracondylar Humerus Fractures</a></td><td>遠端肱骨髁上骨折與前骨間／正中神經、肱動脈。</td></tr><tr><td>S88 · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK534814/\" target=\"_blank\" rel=\"noopener\">NCBI：Anatomy, Shoulder and Upper Limb, Hand Guyon Canal</a></td><td>Guyon 管的尺神經、尺動脈與腕隧道分開。</td></tr><tr><td>S91 · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK547714/\" target=\"_blank\" rel=\"noopener\">NCBI：Smith Fracture Review</a></td><td>Smith 掌側與 Colles 背側移位的方向比較。</td></tr><tr><td>S92 · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK500035/\" target=\"_blank\" rel=\"noopener\">NCBI：Bennett Fracture</a></td><td>第一掌骨基底的關節內骨折，與拇指 CMC 損傷相連。</td></tr><tr><td>S93 · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK482228/\" target=\"_blank\" rel=\"noopener\">NCBI：Anatomical Snuff Box</a></td><td>鼻煙窩肌腱邊界、底部骨頭與橈動脈。</td></tr><tr><td>S99 · <a href=\"https://www.ncbi.nlm.nih.gov/books/NBK526019/\" target=\"_blank\" rel=\"noopener\">NCBI：Anatomy, Bony Pelvis and Lower Limb, Hip</a></td><td>髂股韌帶的髂前下棘、股骨轉子間線附著。</td></tr><tr><td>S100 · <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK482258/\" target=\"_blank\" rel=\"noopener\">NCBI：Anatomy, Abdomen and Pelvis, Pelvis</a></td><td>尾骨肌由坐骨棘連到薦、尾骨；不是穿小坐骨孔進臀部。</td></tr></tbody></table></div>"
   },
   {
    "id": "refs-research",
    "title": "08｜神經、通道與解剖研究",
    "html": "<div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">編號／連結</th><th scope=\"col\">用途</th></tr></thead><tbody><tr><td>S69 · <a href=\"https://humananatomy.host.dartmouth.edu/BHA/public_html/part_2/chapter_6.html\" target=\"_blank\" rel=\"noopener\">Dartmouth：Chapter 6, The bones of the upper limb</a></td><td>肘關節骨性地標、橈尺骨與手骨對照。</td></tr><tr><td>S71 · <a href=\"https://pubmed.ncbi.nlm.nih.gov/29458308/\" target=\"_blank\" rel=\"noopener\">New findings about the intrascaphoid arterial system</a></td><td>解剖研究核對舟狀骨內血管，不把所有骨折寫成必然壞死。</td></tr><tr><td>S76 · <a href=\"https://pubmed.ncbi.nlm.nih.gov/17261142/\" target=\"_blank\" rel=\"noopener\">Which spinal levels are identified by palpation of the iliac crests and the posterior superior iliac spines?</a></td><td>髂嵴線與 PSIS 觸診定位存在偏差；傳統層級僅是近似參考。</td></tr><tr><td>S77 · <a href=\"https://humananatomy.host.dartmouth.edu/BHA/public_html/part_3/chapter_12.html\" target=\"_blank\" rel=\"noopener\">Dartmouth：Chapter 12, The bones of the lower limb</a></td><td>髖骨內外面、恥骨構造與髖臼。</td></tr><tr><td>S79 · <a href=\"https://pubmed.ncbi.nlm.nih.gov/29225017/\" target=\"_blank\" rel=\"noopener\">Qualitative and Quantitative Anatomy of the Proximal Humerus Muscle Attachments and the Axillary Nerve: A Cadaveric Study</a></td><td>胸大肌、闊背肌、大圓肌及三角肌附著的原始研究。</td></tr><tr><td>S90 · <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC3558235/\" target=\"_blank\" rel=\"noopener\">Carpal tunnel: Normal anatomy, anatomical variants and ultrasound technique</a></td><td>腕隧道內為 FDS 4＋FDP 4＋FPL 1 條肌腱及正中神經。</td></tr><tr><td>S94 · <a href=\"https://pubmed.ncbi.nlm.nih.gov/7978341/\" target=\"_blank\" rel=\"noopener\">The deep transverse metacarpal ligament: a study of its anatomy and clinical significance</a></td><td>第 2–5 掌指關節掌板間的深橫掌骨韌帶。</td></tr><tr><td>S95 · <a href=\"https://pubmed.ncbi.nlm.nih.gov/3611614/\" target=\"_blank\" rel=\"noopener\">Anatomy and function of the first metatarsophalangeal joint</a></td><td>足部第一蹠趾關節與深橫蹠骨韌帶的解剖關係。</td></tr><tr><td>S101 · <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC3009382/\" target=\"_blank\" rel=\"noopener\">Ankylosing Spondylitis: Patterns of Radiographic Involvement</a></td><td>薦髂關節受累與疾病分佈有個體差異，不沿用「每人一定從同一處開始」。</td></tr><tr><td>S102 · <a href=\"https://pubmed.ncbi.nlm.nih.gov/37452553/\" target=\"_blank\" rel=\"noopener\">Adverse effects of dorsogluteal intramuscular injection versus ventrogluteal intramuscular injection</a></td><td>影片臀部外上象限屬傳統解剖教學；不能推成任何情況零風險。</td></tr></tbody></table></div>"
   },
   {
    "id": "rights",
    "title": "09｜原創改寫、圖像與授權",
    "html": "<p>本站筆記與四張示意圖為原創整理；內容以講課主題為線索，重新表述與組織，沒有發布整部影片、逐字稿或大學講義的圖片副本。其他文章僅附閱讀連結與短摘要。OpenStax 教材相關改編依 CC BY-NC-SA 4.0，來源為 Anatomy and Physiology 2e；Access for free at OpenStax。</p><p>書籍與研究連結是核對入口，並不等於作者認可本網站。若教材版本與試題命名有差異，先確認題目所指的骨性結構、關節範圍與方向。</p>"
   }
  ]
 }
];
