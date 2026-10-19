/* User-uploaded video: sampled board review with explicit textbook extensions; no full-audio transcript. */
const muscles3VideoUrl="https://www.youtube.com/playlist?list=PLoKlbKOZ9XPpsITjehrHKiYvhih_3OJOz";
const muscles3Scope="本章依〈2016DF04 01_肌肉(3)〉全片板書畫面整理，長1:53:40.27；每20秒取一張，共342張，已檢視。未完成音訊轉錄或逐句審聽，未寫在板書的口頭內容可能遺漏。時間碼為約略畫面定位，非逐句字幕。完整附著表、現代解剖核對與臨床連結另標為教材補充。";
const muscles3Sources=[
 {
  "id": "M3VIDEO",
  "title": "使用者上傳：2016DF04 01_肌肉(3) 360P.mp4",
  "url": "https://www.youtube.com/playlist?list=PLoKlbKOZ9XPpsITjehrHKiYvhih_3OJOz",
  "type": "課程影片",
  "note": "全長1:53:40.27。全片每20秒板書畫面共342張，已檢視；未完成音訊轉錄。連結為來源播放清單，非本片精確網址。"
 },
 {
  "id": "M3PELVIC",
  "title": "Texas Tech：Muscles of the Pelvis and Perineum",
  "url": "https://anatomy.ttuhscep.edu/anatomytables/muscles_pelvis_perineum.html",
  "type": "大學教材",
  "note": "骨盆底及會陰肌之附著、作用與神經；舊式尿生殖膈描述另以研究核對。"
 },
 {
  "id": "M3TOPO",
  "title": "Texas Tech：Topographical Anatomy of the Pelvis and Perineum",
  "url": "https://anatomy.ttuhscep.edu/anatomytables/topogr_pelvis_perineum.html",
  "type": "大學教材",
  "note": "會陰三角、坐骨肛門窩與區域邊界。"
 },
 {
  "id": "M3GENITAL",
  "title": "Texas Tech：Perineum and External Genitalia",
  "url": "https://anatomy.ttuhscep.edu/reproductive_system/perineum_tables.html",
  "type": "大學教材",
  "note": "淺深會陰空間、腺體與外生殖器。"
 },
 {
  "id": "M3MEMBRANE",
  "title": "Stein TA, DeLancey JOL. Structure of the Perineal Membrane in Females（2008）",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2775042/",
  "type": "原始解剖研究",
  "note": "女性會陰膜為與周圍結構融合的三維支持系統，不直接沿用三層夾心式尿生殖膈。"
 },
 {
  "id": "M3LEVATOR",
  "title": "Innervation of the female levator ani muscles（2002）",
  "url": "https://pubmed.ncbi.nlm.nih.gov/12114890/",
  "type": "原始解剖研究",
  "note": "女性屍體解剖支持提肛肌由薦神經直接分支支配；不能全部配成陰部神經。"
 },
 {
  "id": "M3MRI",
  "title": "Anatomy of the perineal membrane as seen in magnetic resonance images of nulliparous women",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2696929/",
  "type": "原始影像研究",
  "note": "用於核對會陰膜與周邊結構的連續性，非臨床診斷指引。"
 },
 {
  "id": "M3AXILLA",
  "title": "Texas Tech：Axilla, Posterior Shoulder and Arm — Tables",
  "url": "https://anatomy.ttuhscep.edu/musculoskeletal_system/axilla_tables.html",
  "type": "大學教材",
  "note": "肩袖、三角肌、上臂肌、腋窩與通道的解剖主幹。"
 },
 {
  "id": "M3AXANS",
  "title": "Texas Tech：Axilla, Posterior Shoulder and Arm — Answers",
  "url": "https://anatomy.ttuhscep.edu/schemes/axilla_ans.html",
  "type": "大學教材",
  "note": "腋動脈分段分支及肩部滑囊位置。"
 },
 {
  "id": "M3UPPER",
  "title": "UAMS：Topographical Anatomy of the Upper Limb",
  "url": "https://medicine.uams.edu/neuroscience/education/medical-school-courses/human-structure-module/anatomy-tables/topographical-anatomy-tables/topographical-anatomy-of-the-upper-limb/",
  "type": "大學教材",
  "note": "四邊孔、三邊孔、三角間隙與前臂分區。"
 },
 {
  "id": "M3MCN",
  "title": "Washington University：Musculocutaneous Nerve",
  "url": "https://nervesurgery.wustl.edu/anatomy-physiology/by-nerve/musculocutaneous-nerve/",
  "type": "大學神經解剖教材",
  "note": "肌皮神經、肱二頭肌及前臂旋後功能。"
 },
 {
  "id": "M3FOREARM",
  "title": "Texas Tech：Forearm — Review feedback",
  "url": "https://anatomy.ttuhscep.edu/musculoskeletal_system/forearm_questions/forearm_1_feedback.html",
  "type": "大學教材",
  "note": "肱二頭肌與肱橈肌神經、功能差異。"
 },
 {
  "id": "M3SCARPA",
  "title": "NCBI Bookshelf：Anatomy, Abdomen and Pelvis, Scarpa Fascia",
  "url": "https://www.ncbi.nlm.nih.gov/sites/books/NBK553137/",
  "type": "解剖補充",
  "note": "尿道及Buck筋膜損傷後的淺層尿液外滲路徑；不是所有尿道損傷的通用模式。"
 }
];
anatomySources.push(...muscles3Sources);
const muscles3Topics=[
 {
  "id": "muscles3-video-notes",
  "title": "全片板書時間軸與整理範圍",
  "english": "Video board timeline",
  "summary": "28段回查索引；骨盆底、會陰、肩腋與上臂到前臂開頭。",
  "sources": [
   "M3VIDEO"
  ],
  "sections": [
   {
    "id": "muscles3-video-notes-1",
    "title": "01｜材料與閱讀順序",
    "html": "<p>本章依〈2016DF04 01_肌肉(3)〉全片板書畫面整理，長1:53:40.27；每20秒取一張，共342張，已檢視。未完成音訊轉錄或逐句審聽，未寫在板書的口頭內容可能遺漏。時間碼為約略畫面定位，非逐句字幕。完整附著表、現代解剖核對與臨床連結另標為教材補充。</p><p>本片前半在會陰區反覆用平面、側面與冠狀圖換視角；後半由肩袖到肩後通道，再進腋窩與上臂。網站依主題重整，保留時間軸方便回原檔拖曳。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"內容類型／本站處理\"><table><thead><tr><th scope=\"col\">內容類型</th><th scope=\"col\">本站處理</th></tr></thead><tbody><tr><td>可辨板書</td><td>記錄圖像位置、標記與出現順序，不推定未聽辨的口述</td></tr><tr><td>奕翔原筆記</td><td>PDF第39–46頁作對照，保留原頁；不能把筆記每一行都算成本片講過</td></tr><tr><td>教材延伸</td><td>完整神經與肌肉表、現代會陰解剖及臨床例子分開標示</td></tr></tbody></table></div>"
   },
   {
    "id": "muscles3-video-notes-2",
    "title": "02｜00:00–03:00｜骨盆出口與骨盆底側面輪廓",
    "html": "<p>先畫骨盆側面與下方承托結構，建立骨盆腔在上、會陰在下的方向。</p><p><a href=\"#/subject/anatomy/chapter/muscles3/topic/pelvic-diaphragm\">前往主題 →</a></p>"
   },
   {
    "id": "muscles3-video-notes-3",
    "title": "03｜03:00–06:20｜骨盆底上／下視圖",
    "html": "<p>新圖標出前方恥骨、後方尾椎，以及中線通過的臟器；女性尿道、陰道與肛管依前後排列。</p><p><a href=\"#/subject/anatomy/chapter/muscles3/topic/pelvic-diaphragm\">前往主題 →</a></p>"
   },
   {
    "id": "muscles3-video-notes-4",
    "title": "04｜06:20–09:40｜提肛肌與尾骨肌的扇形分布",
    "html": "<p>肌纖維由骨盆側壁朝中線匯聚；先看起點與中線，再分肌肉命名。</p><p><a href=\"#/subject/anatomy/chapter/muscles3/topic/pelvic-diaphragm\">前往主題 →</a></p>"
   },
   {
    "id": "muscles3-video-notes-5",
    "title": "05｜09:40–14:20｜直腸周圍的U形肌束",
    "html": "<p>另加直腸側面及肌束示意，主題頁用恥骨直腸肌吊帶連到肛直腸角。</p><p><a href=\"#/subject/anatomy/chapter/muscles3/topic/continence\">前往主題 →</a></p>"
   },
   {
    "id": "muscles3-video-notes-6",
    "title": "06｜14:20–17:00｜會陰菱形與前後三角",
    "html": "<p>新圖在恥骨、坐骨結節與尾骨之間連線，辨尿生殖三角和肛門三角。</p><p><a href=\"#/subject/anatomy/chapter/muscles3/topic/perineum-map\">前往主題 →</a></p>"
   },
   {
    "id": "muscles3-video-notes-7",
    "title": "07｜17:00–20:20｜會陰中線與臟器開口",
    "html": "<p>在前方三角中排列尿道與陰道、後方放肛門；會陰體要與整個會陰區分。</p><p><a href=\"#/subject/anatomy/chapter/muscles3/topic/perineum-map\">前往主題 →</a></p>"
   },
   {
    "id": "muscles3-video-notes-8",
    "title": "08｜20:20–23:20｜尿生殖區肌肉逐層加入",
    "html": "<p>板書沿前方三角加肌束；主題頁依會陰膜分淺深，不把所有圖形當成同一平面。</p><p><a href=\"#/subject/anatomy/chapter/muscles3/topic/superficial-pouch\">前往主題 →</a></p>"
   },
   {
    "id": "muscles3-video-notes-9",
    "title": "09｜23:20–26:20｜深淺分層與舊式UD模型",
    "html": "<p>同一區域圖持續補標記。尿生殖膈的舊式夾心模型，另列現代結構核對。</p><p><a href=\"#/subject/anatomy/chapter/muscles3/topic/deep-pouch\">前往主題 →</a></p>"
   },
   {
    "id": "muscles3-video-notes-10",
    "title": "10｜26:20–29:20｜會陰冠狀切面起圖",
    "html": "<p>以坐骨區與橫向筋膜作座標，往皮膚方向加淺層內容。</p><p><a href=\"#/subject/anatomy/chapter/muscles3/topic/pouch-comparison\">前往主題 →</a></p>"
   },
   {
    "id": "muscles3-video-notes-11",
    "title": "11｜29:20–32:20｜淺層內容及層面標記",
    "html": "<p>用橫切圖對照外生殖器根部、淺會陰隙與會陰膜；完整男女清單在主題頁。</p><p><a href=\"#/subject/anatomy/chapter/muscles3/topic/pouch-comparison\">前往主題 →</a></p>"
   },
   {
    "id": "muscles3-video-notes-12",
    "title": "12｜32:20–36:40｜神經血管與分層表",
    "html": "<p>板書出現N及A/V等標記；網站將主幹所在管道與末梢分支到達區域分開。</p><p><a href=\"#/subject/anatomy/chapter/muscles3/topic/pudendal-neurovascular\">前往主題 →</a></p>"
   },
   {
    "id": "muscles3-video-notes-13",
    "title": "13｜36:40–38:20｜Colles fascia與圖像回查",
    "html": "<p>既有切面下方補筋膜名稱；淺筋膜、肌筋膜與會陰膜不可互換。</p><p><a href=\"#/subject/anatomy/chapter/muscles3/topic/fascia-spread\">前往主題 →</a></p>"
   },
   {
    "id": "muscles3-video-notes-14",
    "title": "14｜38:20–42:20｜外生殖器根部及海綿體",
    "html": "<p>新小圖辨兩側腳與中央球部、神經血管走行；配對到男女對應構造。</p><p><a href=\"#/subject/anatomy/chapter/muscles3/topic/superficial-pouch\">前往主題 →</a></p>"
   },
   {
    "id": "muscles3-video-notes-15",
    "title": "15｜42:20–48:40｜會陰神經血管與分區回顧",
    "html": "<p>沿用切面及根部圖補標示。陰部神經支配與自主神經功能另以教材表整理。</p><p><a href=\"#/subject/anatomy/chapter/muscles3/topic/pudendal-neurovascular\">前往主題 →</a></p>"
   },
   {
    "id": "muscles3-video-notes-16",
    "title": "16｜48:40–52:20｜坐骨肛門窩的冠狀圖",
    "html": "<p>新圖中央肛管、兩側骨盆壁，上方肌肉向中線斜下，形成兩側脂肪空間。</p><p><a href=\"#/subject/anatomy/chapter/muscles3/topic/ischioanal-fossa\">前往主題 →</a></p>"
   },
   {
    "id": "muscles3-video-notes-17",
    "title": "17｜52:20–56:20｜窩壁、管道與既有筋膜圖對照",
    "html": "<p>在外側壁與底部加線，主題頁把閉孔內肌筋膜、陰部管和下直腸支分開定位。</p><p><a href=\"#/subject/anatomy/chapter/muscles3/topic/ischioanal-fossa\">前往主題 →</a></p>"
   },
   {
    "id": "muscles3-video-notes-18",
    "title": "18｜56:20–61:20｜三角肌與肩部肌束",
    "html": "<p>內容切換肩部；先以肩帶骨端及三角肌各束纖維建立拉力方向。</p><p><a href=\"#/subject/anatomy/chapter/muscles3/topic/deltoid-cuff\">前往主題 →</a></p>"
   },
   {
    "id": "muscles3-video-notes-19",
    "title": "19｜61:20–65:20｜肩袖橫切圖與肩峰下空間",
    "html": "<p>畫肱骨頭及周圍肌腱，上方另標滑囊相關位置。</p><p><a href=\"#/subject/anatomy/chapter/muscles3/topic/shoulder-bursa\">前往主題 →</a></p>"
   },
   {
    "id": "muscles3-video-notes-20",
    "title": "20｜65:20–69:20｜肩袖與肩關節動作對照",
    "html": "<p>沿同一肩部圖定位前、後、上與下；主題頁補附著、動作、神經表。</p><p><a href=\"#/subject/anatomy/chapter/muscles3/topic/deltoid-cuff\">前往主題 →</a></p>"
   },
   {
    "id": "muscles3-video-notes-21",
    "title": "21｜69:20–75:20｜肩部圖與外展分段標記",
    "html": "<p>板書保留肩袖圖並加數字或方向；數字作教學主力分段，不當成肌肉絕對開關。</p><p><a href=\"#/subject/anatomy/chapter/muscles3/topic/shoulder-bursa\">前往主題 →</a></p>"
   },
   {
    "id": "muscles3-video-notes-22",
    "title": "22｜75:20–78:20｜肩後通道的骨肌框架",
    "html": "<p>另畫肱骨與大、小圓肌，加入肱三頭肌長頭作分隔。</p><p><a href=\"#/subject/anatomy/chapter/muscles3/topic/posterior-spaces\">前往主題 →</a></p>"
   },
   {
    "id": "muscles3-video-notes-23",
    "title": "23｜78:20–83:40｜四邊孔、三邊孔與下方間隙",
    "html": "<p>分隔後出現三個區域；先定長頭內外與大圓肌上下，再填內容物。</p><p><a href=\"#/subject/anatomy/chapter/muscles3/topic/posterior-spaces\">前往主題 →</a></p>"
   },
   {
    "id": "muscles3-video-notes-24",
    "title": "24｜83:40–89:40｜通道神經血管與腋動脈分支",
    "html": "<p>板書新增神經與動脈分支小圖；完整六分支表列為補充。</p><p><a href=\"#/subject/anatomy/chapter/muscles3/topic/axillary-vessels\">前往主題 →</a></p>"
   },
   {
    "id": "muscles3-video-notes-25",
    "title": "25｜89:40–94:20｜腋窩立體框架",
    "html": "<p>由平面通道切換成截頂金字塔，依序畫入前後內外壁。</p><p><a href=\"#/subject/anatomy/chapter/muscles3/topic/axilla-walls\">前往主題 →</a></p>"
   },
   {
    "id": "muscles3-video-notes-26",
    "title": "26｜94:20–98:40｜腋窩壁與頂、底對照",
    "html": "<p>圖上補不同壁面標記；避免把胸壁、肱骨與皮膚的方向混成圖上左右。</p><p><a href=\"#/subject/anatomy/chapter/muscles3/topic/axilla-walls\">前往主題 →</a></p>"
   },
   {
    "id": "muscles3-video-notes-27",
    "title": "27｜98:40–103:20｜上臂前後室與前臂分區",
    "html": "<p>新圓形圖比較上臂兩室、前臂前後與外側肌群及主要神經。</p><p><a href=\"#/subject/anatomy/chapter/muscles3/topic/arm-muscles\">前往主題 →</a></p>"
   },
   {
    "id": "muscles3-video-notes-28",
    "title": "28｜103:20–108:20｜上臂肌群清單與神經",
    "html": "<p>補前室三肌及後室伸肌，建立肌皮神經和橈神經的分工。</p><p><a href=\"#/subject/anatomy/chapter/muscles3/topic/arm-muscles\">前往主題 →</a></p>"
   },
   {
    "id": "muscles3-video-notes-29",
    "title": "29｜108:20–1:53:40｜前臂層次模型開頭",
    "html": "<p>開始以格狀圖列前臂淺層肌及神經標記；本片尚未把全部前臂、腕隧道和手內在肌完整畫完。</p><p><a href=\"#/subject/anatomy/chapter/muscles3/topic/forearm-intro\">前往主題 →</a></p>"
   }
  ]
 },
 {
  "id": "pelvic-diaphragm",
  "title": "骨盆膈：提肛肌與尾骨肌",
  "english": "Pelvic diaphragm and levator ani",
  "summary": "先定位骨盆底，再把恥骨直腸、恥骨尾骨、髂骨尾骨肌放回同一張圖。",
  "sources": [
   "M3VIDEO",
   "M3PELVIC",
   "M3LEVATOR",
   "YX2021"
  ],
  "sections": [
   {
    "id": "original-pages",
    "title": "原圖定位與讀圖順序",
    "html": "<p>先看原圖建立位置，再用下方表格整理。原筆記與影片為不同教材；補充內容不當成老師逐字講解。</p><figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-039.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第39頁\"><img src=\"assets/anatomy-notes/pdf-039.webp\" alt=\"奕翔解剖筆記：先找恥骨、尾骨與中線臟器，再由內向外辨提肛肌，PDF第39頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第39頁，含封面。先找恥骨、尾骨與中線臟器，再由內向外辨提肛肌。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "pelvic-diaphragm-1",
    "title": "01｜地板、出口、會陰不是同一件事",
    "html": "<p>約00:00–09:40。骨盆出口是骨與韌帶圍成的下方開口；骨盆膈是重要的肌筋膜性支持層；會陰則是其下方的區域。骨盆膈的核心肌肉是提肛肌和尾骨肌。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"結構／主要成分／位置／功能理解\"><table><thead><tr><th scope=\"col\">結構</th><th scope=\"col\">主要成分／位置</th><th scope=\"col\">功能理解</th></tr></thead><tbody><tr><td>骨盆膈 Pelvic diaphragm</td><td>左右提肛肌＋尾骨肌及相關筋膜</td><td>支持骨盆臟器、維持裂孔與排泄控制</td></tr><tr><td>提肛肌 Levator ani</td><td>恥骨直腸肌、恥骨尾骨肌、髂骨尾骨肌等分群</td><td>由前及側壁朝中線匯聚</td></tr><tr><td>尾骨肌 Coccygeus／Ischiococcygeus</td><td>坐骨棘到薦尾部，與薦棘韌帶相鄰</td><td>補後方支持</td></tr><tr><td>會陰 Perineum</td><td>骨盆底下方的菱形區域</td><td>含尿生殖與肛門三角，不只是兩個開口之間的小段</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>不同教材對部分提肛肌纖維的命名會再細分。外肛門括約肌與骨盆底密切協作，但不應取代「提肛肌＋尾骨肌」這個骨盆膈基本定義。</div>"
   },
   {
    "id": "pelvic-diaphragm-2",
    "title": "02｜三群提肛肌：先看肌束接到哪裡",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"肌群／起止主幹／主要功能／圖像線索\"><table><thead><tr><th scope=\"col\">肌群</th><th scope=\"col\">起止主幹</th><th scope=\"col\">主要功能</th><th scope=\"col\">圖像線索</th></tr></thead><tbody><tr><td>恥骨直腸肌 Puborectalis</td><td>恥骨後面 → 繞肛直腸交界後方成U形吊帶</td><td>維持肛直腸角，協助糞便控制</td><td>前面起、後面兜住</td></tr><tr><td>恥骨尾骨肌 Pubococcygeus</td><td>恥骨與鄰近腱弓 → 中線、會陰體及尾骨相關區</td><td>支持骨盆臟器與裂孔周圍</td><td>有到尿道、陰道等周圍的細分纖維</td></tr><tr><td>髂骨尾骨肌 Iliococcygeus</td><td>提肛肌腱弓、坐骨棘相關區 → 肛尾縫及尾骨</td><td>較薄，形成骨盆底的後外側支持</td><td>看較外側扇形薄片</td></tr><tr><td>尾骨肌 Coccygeus</td><td>坐骨棘 → 下薦骨與尾骨</td><td>後方支撐</td><td>位於提肛肌後方，不是提肛肌三群之一</td></tr></tbody></table></div>"
   },
   {
    "id": "pelvic-diaphragm-3",
    "title": "03｜神經不要整張圖只寫S2–S4",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"肌群／主要神經概念／如何記\"><table><thead><tr><th scope=\"col\">肌群</th><th scope=\"col\">主要神經概念</th><th scope=\"col\">如何記</th></tr></thead><tbody><tr><td>提肛肌</td><td>提肛肌神經／薦神經直接肌支，教材常列S3–S4；研究可見S3–S5來源</td><td>從骨盆面到達，不全歸陰部神經</td></tr><tr><td>尾骨肌</td><td>下位薦神經前支，常列S4–S5</td><td>與後方位置連結</td></tr><tr><td>外肛門括約肌、淺會陰肌等</td><td>主要由陰部神經分支，常以S2–S4記</td><td>往會陰的體神經系統</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>原筆記以S3–S4整理骨盆底，可作主幹；研究中的神經根與分支有變異。不要因陰部神經也來自薦部，就把提肛肌全部寫成陰部神經支配。</div>"
   }
  ]
 },
 {
  "id": "continence",
  "title": "恥骨直腸肌與肛門控便",
  "english": "Puborectalis and anal continence",
  "summary": "用吊帶、平滑肌內括約肌、骨骼肌外括約肌三者合作理解控便。",
  "sources": [
   "M3VIDEO",
   "M3PELVIC",
   "M3LEVATOR",
   "YX2021"
  ],
  "sections": [
   {
    "id": "original-pages",
    "title": "原圖定位與讀圖順序",
    "html": "<p>先看原圖建立位置，再用下方表格整理。原筆記與影片為不同教材；補充內容不當成老師逐字講解。</p><figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-039.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第39頁\"><img src=\"assets/anatomy-notes/pdf-039.webp\" alt=\"奕翔解剖筆記：下方側面圖看U形肌束與肛直腸彎折，PDF第39頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第39頁，含封面。下方側面圖看U形肌束與肛直腸彎折。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "continence-1",
    "title": "01｜吊帶如何形成彎折",
    "html": "<p>約09:40–14:20。恥骨直腸肌自恥骨兩側向後繞肛直腸交界，像U形吊帶拉向前方。張力維持彎折；排便時其放鬆讓通道較直。這不是只靠一條肌肉就能完成的過程。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"結構／肌肉類型／控便角色／神經概念\"><table><thead><tr><th scope=\"col\">結構</th><th scope=\"col\">肌肉類型</th><th scope=\"col\">控便角色</th><th scope=\"col\">神經概念</th></tr></thead><tbody><tr><td>恥骨直腸肌</td><td>骨骼肌，提肛肌一部分</td><td>維持肛直腸角</td><td>薦神經直接肌支為主；供應描述存在差異</td></tr><tr><td>內肛門括約肌 Internal anal sphincter</td><td>直腸內環平滑肌向下增厚</td><td>提供重要靜息張力</td><td>自主與腸神經系統調控，不是陰部神經直接運動支配</td></tr><tr><td>外肛門括約肌 External anal sphincter</td><td>骨骼肌</td><td>隨意收縮及反射性加強閉合</td><td>以下直腸神經等體神經支配為主</td></tr></tbody></table></div>"
   },
   {
    "id": "continence-2",
    "title": "02｜比較用力閉合與排便",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"情境／恥骨直腸肌／外括約肌／概念\"><table><thead><tr><th scope=\"col\">情境</th><th scope=\"col\">恥骨直腸肌／外括約肌</th><th scope=\"col\">概念</th></tr></thead><tbody><tr><td>需要暫緩排便</td><td>維持或增加收縮</td><td>保留彎折與閉合</td></tr><tr><td>協調排便</td><td>恥骨直腸肌及外括約肌適當放鬆</td><td>通道較直，同時需腹壓與直腸推進配合</td></tr><tr><td>腹壓突然升高</td><td>骨盆底及括約肌系統協調反應</td><td>咳嗽並不等於應將所有肌肉放鬆</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>原圖90°、135°是彎折與變直的教學示意。角度受定義、姿勢、測量方法影響，不把兩個數字當成每個人固定正常值。</div>"
   },
   {
    "id": "continence-3",
    "title": "03｜國考容易出現的錯誤配對",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"選項說法／判讀\"><table><thead><tr><th scope=\"col\">選項說法</th><th scope=\"col\">判讀</th></tr></thead><tbody><tr><td>內、外括約肌都是隨意骨骼肌</td><td>錯；內括約肌是平滑肌</td></tr><tr><td>陰部神經直接支配內肛門括約肌</td><td>錯；要分自主／腸神經與體神經</td></tr><tr><td>恥骨直腸肌是一條在直腸前面的完整圓環</td><td>錯；核心記法為繞後方的U形吊帶</td></tr><tr><td>恥骨直腸肌完全鬆開即可解釋所有排便功能</td><td>過度簡化；仍需協調、感覺與推進功能</td></tr></tbody></table></div>"
   }
  ]
 },
 {
  "id": "perineum-map",
  "title": "會陰菱形、兩三角與會陰體",
  "english": "Perineal boundaries and body",
  "summary": "由四個地標畫區域；把會陰體這個纖維肌性匯合點與整個會陰分開。",
  "sources": [
   "M3VIDEO",
   "M3TOPO",
   "M3GENITAL",
   "YX2021"
  ],
  "sections": [
   {
    "id": "original-pages",
    "title": "原圖定位與讀圖順序",
    "html": "<p>先看原圖建立位置，再用下方表格整理。原筆記與影片為不同教材；補充內容不當成老師逐字講解。</p><figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-040.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第40頁\"><img src=\"assets/anatomy-notes/pdf-040.webp\" alt=\"奕翔解剖筆記：上方定四個地標，下方認前後三角與會陰體，PDF第40頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第40頁，含封面。上方定四個地標，下方認前後三角與會陰體。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "perineum-map-1",
    "title": "01｜先畫四點，不先背肌肉",
    "html": "<p>約14:20–20:20。採下面觀：前方恥骨聯合、後方尾骨、左右坐骨結節，連成菱形。坐骨結節間的橫線分出前後兩個三角。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"區域／主要邊界／內容主幹\"><table><thead><tr><th scope=\"col\">區域</th><th scope=\"col\">主要邊界</th><th scope=\"col\">內容主幹</th></tr></thead><tbody><tr><td>尿生殖三角 Urogenital triangle</td><td>前方恥骨聯合、兩側坐恥骨支、後方坐骨結節連線</td><td>尿道；女性另有陰道；外生殖器根部、會陰膜相關構造</td></tr><tr><td>肛門三角 Anal triangle</td><td>前方坐骨結節連線，後外側薦結節韌帶，後方尾骨</td><td>肛管、外括約肌及兩側坐骨肛門窩</td></tr><tr><td>會陰 Perineum</td><td>兩三角合成的整個菱形區</td><td>不能只用外生殖器開口到肛門的小段代稱全部解剖區域</td></tr></tbody></table></div>"
   },
   {
    "id": "perineum-map-2",
    "title": "02｜會陰體是很多拉力交會的位置",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"名稱／位置／本質／連結\"><table><thead><tr><th scope=\"col\">名稱</th><th scope=\"col\">位置／本質</th><th scope=\"col\">連結</th></tr></thead><tbody><tr><td>會陰體 Perineal body</td><td>中線纖維肌性組織；女性位於陰道口與肛門之間，男性位於球部附近與肛門間</td><td>是支持匯合區，不是會陰膜的別名</td></tr><tr><td>相關附著</td><td>球海綿體肌、淺會陰橫肌、外肛門括約肌及部分骨盆底纖維等</td><td>用各肌向中央匯合理解</td></tr><tr><td>臨床連結（補充）</td><td>分娩損傷可影響此區與相關支持結構</td><td>不能只從傷口外觀推定所有深部肌肉完整性</td></tr></tbody></table></div>"
   },
   {
    "id": "perineum-map-3",
    "title": "03｜由前到後排列臟器開口",
    "html": "<p>女性會陰中線可先排列尿道外口、陰道口、肛門；男性則不可照搬成同樣三個表面開口。尿道與生殖道、消化道的關係需要分性別看。</p><div class=\"study-note teal\"><b>教材核對／補充</b><br>原筆記所畫「臨床會陰長度」等數值，和解剖會陰菱形不是同一個測量範圍；本章不將單一公分數當成定義。</div>"
   }
  ]
 },
 {
  "id": "superficial-pouch",
  "title": "淺會陰隙：肌肉、根部與腺體",
  "english": "Superficial perineal pouch",
  "summary": "三組淺肌、腳與球部逐一對位；比較男性尿道球腺與女性前庭大腺。",
  "sources": [
   "M3VIDEO",
   "M3PELVIC",
   "M3GENITAL",
   "YX2021"
  ],
  "sections": [
   {
    "id": "original-pages",
    "title": "原圖定位與讀圖順序",
    "html": "<p>先看原圖建立位置，再用下方表格整理。原筆記與影片為不同教材；補充內容不當成老師逐字講解。</p><figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-040.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第40頁\"><img src=\"assets/anatomy-notes/pdf-040.webp\" alt=\"奕翔解剖筆記：找球海綿體肌、坐骨海綿體肌和淺會陰橫肌，PDF第40頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第40頁，含封面。找球海綿體肌、坐骨海綿體肌和淺會陰橫肌。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure><figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-041.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第41頁\"><img src=\"assets/anatomy-notes/pdf-041.webp\" alt=\"奕翔解剖筆記：看會陰膜下方與外生殖器根部對照，PDF第41頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第41頁，含封面。看會陰膜下方與外生殖器根部對照。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "superficial-pouch-1",
    "title": "01｜三組肌肉先配各自覆蓋的構造",
    "html": "<p>約20:20–23:20及38:20–42:20。淺會陰隙位於會陰膜下方、Colles筋膜深方。肌肉不是填在一個完全規則盒子內；先用相對位置建立主幹。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"肌肉／主要關係／附著主幹／功能理解／神經主幹\"><table><thead><tr><th scope=\"col\">肌肉</th><th scope=\"col\">主要關係／附著主幹</th><th scope=\"col\">功能理解</th><th scope=\"col\">神經主幹</th></tr></thead><tbody><tr><td>坐骨海綿體肌 Ischiocavernosus</td><td>坐恥骨支／坐骨區 → 包覆陰莖或陰蒂腳</td><td>壓迫腳，協助維持充血狀態</td><td>陰部神經之會陰神經深支</td></tr><tr><td>球海綿體肌 Bulbospongiosus</td><td>會陰體及中線相關區 → 球部／前庭球周圍</td><td>男：壓迫陰莖球與海綿體尿道；女：壓迫前庭球等</td><td>會陰神經深支</td></tr><tr><td>淺會陰橫肌 Superficial transverse perineal</td><td>坐骨區 → 會陰體</td><td>穩定會陰體</td><td>會陰神經深支</td></tr></tbody></table></div>"
   },
   {
    "id": "superficial-pouch-2",
    "title": "02｜男女對應物，按位置配對",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"區域／男性／女性\"><table><thead><tr><th scope=\"col\">區域</th><th scope=\"col\">男性</th><th scope=\"col\">女性</th></tr></thead><tbody><tr><td>兩側腳 Crura</td><td>陰莖腳，連到陰莖海綿體</td><td>陰蒂腳，連到陰蒂海綿體</td></tr><tr><td>較中央球部</td><td>陰莖球，與尿道海綿體相連</td><td>前庭球分布在陰道口兩側</td></tr><tr><td>覆蓋腳的肌</td><td>坐骨海綿體肌</td><td>坐骨海綿體肌</td></tr><tr><td>覆蓋球部的肌</td><td>球海綿體肌，左右在中線相關</td><td>球海綿體肌，左右分列陰道口附近</td></tr><tr><td>淺隙中的腺體考點</td><td>不能把尿道球腺直接放進此格</td><td>前庭大腺 Greater vestibular gland／Bartholin</td></tr></tbody></table></div>"
   },
   {
    "id": "superficial-pouch-3",
    "title": "03｜最常混的兩顆腺體",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"腺體／典型腺體所在層面／開口／導管連結\"><table><thead><tr><th scope=\"col\">腺體</th><th scope=\"col\">典型腺體所在層面</th><th scope=\"col\">開口／導管連結</th></tr></thead><tbody><tr><td>男性尿道球腺 Bulbourethral／Cowper</td><td>深會陰區／會陰膜上方相關區</td><td>導管向遠端走，開入近端海綿體尿道</td></tr><tr><td>女性前庭大腺 Greater vestibular／Bartholin</td><td>淺會陰隙</td><td>導管開向陰道前庭</td></tr><tr><td>女性尿道旁腺 Paraurethral glands</td><td>尿道周圍，與上述前庭大腺不同</td><td>不能因為都在女性會陰就合併成同一腺體</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>先分腺體本身位置與導管通過的區域。導管穿到淺層，不代表腺體也必然在淺會陰隙。</div>"
   }
  ]
 },
 {
  "id": "deep-pouch",
  "title": "深會陰區與尿道外括約肌",
  "english": "Deep perineal region and urethral sphincter",
  "summary": "保留舊式尿生殖膈的讀題線索，同時校正女性三維支持結構。",
  "sources": [
   "M3VIDEO",
   "M3MEMBRANE",
   "M3MRI",
   "M3GENITAL",
   "YX2021"
  ],
  "sections": [
   {
    "id": "original-pages",
    "title": "原圖定位與讀圖順序",
    "html": "<p>先看原圖建立位置，再用下方表格整理。原筆記與影片為不同教材；補充內容不當成老師逐字講解。</p><figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-041.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第41頁\"><img src=\"assets/anatomy-notes/pdf-041.webp\" alt=\"奕翔解剖筆記：原頁上方是舊式UD分層；請與本頁核對欄一起讀，PDF第41頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第41頁，含封面。原頁上方是舊式UD分層；請與本頁核對欄一起讀。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "deep-pouch-1",
    "title": "01｜先把會陰膜作為相對層面地標",
    "html": "<p>約23:20–26:20與26:20後的冠狀示意。教學上以會陰膜區分淺與深：淺隙在其下方、深會陰區在其上方相關區。骨盆膈則更在頭側，並不是同一張橫板。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"名詞／可用的定位／限制\"><table><thead><tr><th scope=\"col\">名詞</th><th scope=\"col\">可用的定位</th><th scope=\"col\">限制</th></tr></thead><tbody><tr><td>會陰膜 Perineal membrane</td><td>與坐恥骨支、會陰體及尿生殖結構相關的支持組織</td><td>尤其女性不是一片完全獨立、規則平整的膜</td></tr><tr><td>深會陰區／隙 Deep perineal region／pouch</td><td>會陰膜上方、尿道外括約肌等相關區</td><td>上方不宜想成每處都有完整封閉屋頂</td></tr><tr><td>舊稱尿生殖膈 Urogenital diaphragm</td><td>舊教材常畫肌肉夾在上、下筋膜之間</td><td>讀舊題要認名詞，不能把夾心模型當精確實體</td></tr><tr><td>骨盆膈 Pelvic diaphragm</td><td>提肛肌、尾骨肌及筋膜</td><td>不能與尿生殖膈同義替換</td></tr></tbody></table></div>"
   },
   {
    "id": "deep-pouch-2",
    "title": "02｜男女尿道外括約肌複合體",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"結構／男性主幹／女性主幹\"><table><thead><tr><th scope=\"col\">結構</th><th scope=\"col\">男性主幹</th><th scope=\"col\">女性主幹</th></tr></thead><tbody><tr><td>外尿道括約肌</td><td>環繞尿道，與膜部尿道及前列腺尖周邊關係密切</td><td>尿道括約肌sphincter urethrae</td></tr><tr><td>女性另需辨認</td><td>不套用成一樣的三條命名肌</td><td>尿道壓迫肌compressor urethrae、尿道陰道括約肌urethrovaginal sphincter</td></tr><tr><td>肌肉類型與神經</td><td>骨骼肌，陰部神經會陰分支為主要教學配對</td><td>同樣需與平滑肌、自主神經控制區分</td></tr><tr><td>深會陰橫肌</td><td>傳統教材常描述</td><td>女性不宜直接假設有一片連續、獨立的典型肌板</td></tr></tbody></table></div>"
   },
   {
    "id": "deep-pouch-3",
    "title": "03｜現代解剖核對",
    "html": "<div class=\"study-note teal\"><b>教材核對／補充</b><br>女性屍體與組織研究顯示，會陰膜和尿道、陰道周圍結締組織、括約肌及提肛肌相互融合。舊式「上下兩層筋膜夾一整片肌肉」不足以描述其三維結構；女性深會陰橫肌的傳統畫法也需要修正。本站保留原筆記供對照，不把示意圖改名後直接當成現代模型。</div><p>記憶時先抓相對位置與可辨構造；遇舊題再辨它採用哪一套名詞，不憑一個UD縮寫忽略性別與層次。</p>"
   }
  ]
 },
 {
  "id": "pouch-comparison",
  "title": "淺深會陰隙比較與切面讀圖",
  "english": "Perineal layers and sectional orientation",
  "summary": "把冠狀、下面觀、側面圖對齊；不用一個「幾條肌」數字代替全部內容。",
  "sources": [
   "M3VIDEO",
   "M3TOPO",
   "M3GENITAL",
   "YX2021"
  ],
  "sections": [
   {
    "id": "original-pages",
    "title": "原圖定位與讀圖順序",
    "html": "<p>先看原圖建立位置，再用下方表格整理。原筆記與影片為不同教材；補充內容不當成老師逐字講解。</p><figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-041.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第41頁\"><img src=\"assets/anatomy-notes/pdf-041.webp\" alt=\"奕翔解剖筆記：先在冠狀圖找到會陰膜，再比較膜上與膜下，PDF第41頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第41頁，含封面。先在冠狀圖找到會陰膜，再比較膜上與膜下。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "pouch-comparison-1",
    "title": "01｜同一個構造，換圖時保留座標",
    "html": "<p>約26:20–36:40。先固定三個方向：坐恥骨支在外側，中線尿道／陰道在內側，皮膚在下。圖上方不是永遠代表前方；冠狀圖的上方通常是頭側。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"視角／先找什麼／容易錯在哪\"><table><thead><tr><th scope=\"col\">視角</th><th scope=\"col\">先找什麼</th><th scope=\"col\">容易錯在哪</th></tr></thead><tbody><tr><td>下面觀</td><td>恥骨前、尾骨後、坐骨結節兩側</td><td>把讀圖者左右當成受觀察者左右</td></tr><tr><td>冠狀切面</td><td>兩側骨盆壁、中線臟器、下方皮膚</td><td>把頭尾方向誤讀成前後</td></tr><tr><td>側面圖</td><td>恥骨、薦尾部、尿道與肛管</td><td>把骨盆底與更淺的會陰膜畫成同一層</td></tr></tbody></table></div>"
   },
   {
    "id": "pouch-comparison-2",
    "title": "02｜淺深內容先建立主幹",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較項／淺會陰隙／深會陰區\"><table><thead><tr><th scope=\"col\">比較項</th><th scope=\"col\">淺會陰隙</th><th scope=\"col\">深會陰區</th></tr></thead><tbody><tr><td>相對會陰膜</td><td>膜下方</td><td>膜上方相關區</td></tr><tr><td>肌肉</td><td>坐骨海綿體、球海綿體、淺會陰橫肌</td><td>外尿道括約肌複合體；深會陰橫肌採性別與教材限制描述</td></tr><tr><td>外生殖器根部</td><td>陰莖腳／球或陰蒂腳／前庭球</td><td>不能把全部海綿體根部搬到深隙</td></tr><tr><td>腺體高頻對照</td><td>女性前庭大腺</td><td>男性尿道球腺</td></tr><tr><td>神經血管</td><td>到此分布的會陰分支</td><td>到此通過或分布的尿生殖支；不是整條陰部主幹都在盒內</td></tr></tbody></table></div>"
   },
   {
    "id": "pouch-comparison-3",
    "title": "03｜不要背成固定5＋1＝所有人的解剖",
    "html": "<p>板書用數字分組有助回想，但左右是否各算一條、性別差異、變異及圖中切面都會影響數字。本章採<b>肌肉、根部、腺體、神經血管、筋膜</b>五欄逐項核對，不將單一數字宣稱為所有人的完整內容數目。</p><div class=\"study-note teal\"><b>教材核對／補充</b><br>深淺會陰區位於尿生殖三角相關區；不能把後方的整個坐骨肛門窩也收進淺會陰隙。</div>"
   }
  ]
 },
 {
  "id": "fascia-spread",
  "title": "會陰筋膜與尿液外滲路徑",
  "english": "Perineal fascia and spread",
  "summary": "比較Colles、Scarpa、Buck筋膜；以損傷層次解釋擴散方向。",
  "sources": [
   "M3VIDEO",
   "M3SCARPA",
   "M3TOPO",
   "YX2021"
  ],
  "sections": [
   {
    "id": "original-pages",
    "title": "原圖定位與讀圖順序",
    "html": "<p>先看原圖建立位置，再用下方表格整理。原筆記與影片為不同教材；補充內容不當成老師逐字講解。</p><figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-041.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第41頁\"><img src=\"assets/anatomy-notes/pdf-041.webp\" alt=\"奕翔解剖筆記：下半的筋膜連續性是主軸；旁邊文字列損傷條件，PDF第41頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第41頁，含封面。下半的筋膜連續性是主軸；旁邊文字列損傷條件。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "fascia-spread-1",
    "title": "01｜同樣叫筋膜，所在層不一樣",
    "html": "<p>約36:40–38:20及48:40後相關切面。以下外滲機轉是教材延伸，不是影片逐句轉錄。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"結構／層次／連續性／不要混誰\"><table><thead><tr><th scope=\"col\">結構</th><th scope=\"col\">層次／連續性</th><th scope=\"col\">不要混誰</th></tr></thead><tbody><tr><td>Colles fascia</td><td>會陰淺筋膜的膜性層，與下腹Scarpa層連續</td><td>不是會陰膜</td></tr><tr><td>Scarpa fascia</td><td>下腹部皮下淺筋膜的膜性層</td><td>不是外斜肌腱膜或腹橫筋膜</td></tr><tr><td>Buck fascia</td><td>陰莖深筋膜，包覆陰莖深部結構</td><td>不是所有會陰的共同淺膜</td></tr><tr><td>會陰膜 Perineal membrane</td><td>尿生殖區較深的支持結構</td><td>不與Colles當作同一張膜</td></tr></tbody></table></div>"
   },
   {
    "id": "fascia-spread-2",
    "title": "02｜外滲必須先問損傷破到哪層",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"條件／典型可擴散區域／為什麼\"><table><thead><tr><th scope=\"col\">條件</th><th scope=\"col\">典型可擴散區域</th><th scope=\"col\">為什麼</th></tr></thead><tbody><tr><td>前尿道損傷但深筋膜仍完整</td><td>可先受限於局部包被</td><td>損傷位置與筋膜完整性決定路徑</td></tr><tr><td>海綿體尿道與Buck筋膜均受損，尿液進入淺層平面</td><td>陰莖、陰囊、淺會陰區及下前腹壁等</td><td>沿Colles與Scarpa相關連續平面擴散</td></tr><tr><td>為何典型不一路下到大腿？</td><td>不能直接沿該膜性平面自由下行</td><td>Scarpa層在腹股溝下方與闊筋膜融合限制通路</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>這是特定前尿道與筋膜損傷模式。後尿道損傷或其他深層破裂，不能不看位置就套用同一張「蝴蝶狀」淺層分布圖。</div>"
   },
   {
    "id": "fascia-spread-3",
    "title": "03｜用三個問題回推路徑",
    "html": "<p>①破的是前尿道還是後尿道相關區？②Buck等包被是否完整？③流體進入的是哪一個筋膜平面？先答這三題，才列可能到達區域。不要只背「尿道受傷就流到陰囊」的單一句子。</p>"
   }
  ]
 },
 {
  "id": "pudendal-neurovascular",
  "title": "陰部神經、血管與功能分工",
  "english": "Pudendal nerve and neurovascular relations",
  "summary": "主幹走管道，分支到不同區；把體神經、骨盆內臟副交感分開。",
  "sources": [
   "M3VIDEO",
   "M3PELVIC",
   "M3TOPO",
   "M3GENITAL",
   "YX2021"
  ],
  "sections": [
   {
    "id": "original-pages",
    "title": "原圖定位與讀圖順序",
    "html": "<p>先看原圖建立位置，再用下方表格整理。原筆記與影片為不同教材；補充內容不當成老師逐字講解。</p><figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-041.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第41頁\"><img src=\"assets/anatomy-notes/pdf-041.webp\" alt=\"奕翔解剖筆記：下方先找陰部神經分支，PDF第41頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第41頁，含封面。下方先找陰部神經分支。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure><figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-042.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第42頁\"><img src=\"assets/anatomy-notes/pdf-042.webp\" alt=\"奕翔解剖筆記：外側壁的陰部管供主幹定位，PDF第42頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第42頁，含封面。外側壁的陰部管供主幹定位。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "pudendal-neurovascular-1",
    "title": "01｜主幹先繞坐骨棘，再分三個方向",
    "html": "<p>約32:20–36:40及42:20–48:40。陰部神經為S2–S4的體神經系統，典型由梨狀肌下方經大坐骨孔離開骨盆，繞坐骨棘／薦棘韌帶附近，再經小坐骨孔進會陰。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"分支／主要方向／功能／讀圖要點\"><table><thead><tr><th scope=\"col\">分支</th><th scope=\"col\">主要方向／功能</th><th scope=\"col\">讀圖要點</th></tr></thead><tbody><tr><td>下直腸神經 Inferior rectal nerve</td><td>外肛門括約肌、肛門周邊及下段肛管相關感覺</td><td>可穿坐骨肛門窩向內，分支有變異</td></tr><tr><td>會陰神經 Perineal nerve</td><td>淺支到皮膚；深支到會陰肌與外括約肌複合體等</td><td>淺深支不同於整個神經主幹的所在層</td></tr><tr><td>陰莖／陰蒂背神經 Dorsal nerve</td><td>外生殖器重要感覺分支</td><td>名稱是背側位置，不代表主要控制充血的自主運動支</td></tr></tbody></table></div>"
   },
   {
    "id": "pudendal-neurovascular-2",
    "title": "02｜同樣S2–S4，不代表同一類神經",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"神經系統／核心功能／不能等同\"><table><thead><tr><th scope=\"col\">神經系統</th><th scope=\"col\">核心功能</th><th scope=\"col\">不能等同</th></tr></thead><tbody><tr><td>陰部神經 Pudendal</td><td>體感覺與骨骼肌運動</td><td>不是pelvic splanchnic nerve</td></tr><tr><td>骨盆內臟神經 Pelvic splanchnic</td><td>薦部副交感節前纖維，經骨盆神經叢到臟器／勃起相關組織</td><td>同源節段不代表走陰部管</td></tr><tr><td>交感途徑</td><td>參與射精的排精期、平滑肌及血管調控等</td><td>不能用一條體神經代替全部自主功能</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>這裡的性功能配對是解剖生理入門。充血、感覺、肌肉壓迫與射精分期需要協調，不用「副交感勃起、交感射精」把所有過程壓成沒有例外的一句話。</div>"
   },
   {
    "id": "pudendal-neurovascular-3",
    "title": "03｜血管在圖上跟誰走",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"構造／典型路徑／位置／重要區分\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">典型路徑／位置</th><th scope=\"col\">重要區分</th></tr></thead><tbody><tr><td>內陰部動脈 Internal pudendal artery</td><td>內髂動脈系統；經大、小坐骨孔轉入會陰，與陰部神經路徑相關</td><td>經陰部管及分支供應會陰</td></tr><tr><td>陰部管 Pudendal／Alcock canal</td><td>閉孔內肌筋膜形成的外側壁通道</td><td>裡面有主幹與血管，不等於淺／深會陰隙內容清單</td></tr><tr><td>分支到達區</td><td>下直腸、會陰與陰莖／陰蒂相關血管分支</td><td>不能把一張橫切圖的每個N／A／V都當成主幹</td></tr></tbody></table></div>"
   }
  ]
 },
 {
  "id": "ischioanal-fossa",
  "title": "坐骨肛門窩與陰部管",
  "english": "Ischioanal fossa and pudendal canal",
  "summary": "用冠狀切面認內側提肛肌、外側閉孔內肌，再放脂肪、下直腸支與主幹。",
  "sources": [
   "M3VIDEO",
   "M3TOPO",
   "M3GENITAL",
   "YX2021"
  ],
  "sections": [
   {
    "id": "original-pages",
    "title": "原圖定位與讀圖順序",
    "html": "<p>先看原圖建立位置，再用下方表格整理。原筆記與影片為不同教材；補充內容不當成老師逐字講解。</p><figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-042.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第42頁\"><img src=\"assets/anatomy-notes/pdf-042.webp\" alt=\"奕翔解剖筆記：中央肛管，兩側脂肪窩；陰部管在外側閉孔內肌筋膜內，PDF第42頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第42頁，含封面。中央肛管，兩側脂肪窩；陰部管在外側閉孔內肌筋膜內。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "ischioanal-fossa-1",
    "title": "01｜先看窩壁，再塞入內容",
    "html": "<p>約48:40–56:20。坐骨肛門窩是肛管兩側、骨盆膈下方的重要脂肪空間；舊名坐骨直腸窩ischiorectal fossa也常見。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"方向／主要邊界／關係／圖像理解\"><table><thead><tr><th scope=\"col\">方向</th><th scope=\"col\">主要邊界／關係</th><th scope=\"col\">圖像理解</th></tr></thead><tbody><tr><td>內側與上內側</td><td>肛管、外肛門括約肌及提肛肌相關區</td><td>由中線往外上方傾斜的壁</td></tr><tr><td>外側</td><td>閉孔內肌與其筋膜、坐骨結節相關區</td><td>較直立的側壁</td></tr><tr><td>下方</td><td>皮膚與淺層筋膜</td><td>是會陰表面方向</td></tr><tr><td>上方尖端</td><td>提肛肌與閉孔內肌筋膜會合附近</td><td>不是一張獨立水平屋頂</td></tr><tr><td>前後延伸</td><td>可有前隱窩及後方連通關係</td><td>實際是三維空間，不只冠狀圖中的三角形</td></tr></tbody></table></div>"
   },
   {
    "id": "ischioanal-fossa-2",
    "title": "02｜脂肪、穿越支、壁內管道分三層記",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"構造／在哪裡／功能或連結\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">在哪裡</th><th scope=\"col\">功能或連結</th></tr></thead><tbody><tr><td>脂肪及鬆結締組織</td><td>窩的主要填充</td><td>容許肛管周邊形變</td></tr><tr><td>下直腸神經血管</td><td>由外向內穿越此區到肛門周圍</td><td>不把它們全收進外側管內才算完整</td></tr><tr><td>陰部神經與內陰部血管主幹</td><td>外側閉孔內肌筋膜形成的陰部管內</td><td>主幹所在位置與分支跨越窩的路線不同</td></tr></tbody></table></div>"
   },
   {
    "id": "ischioanal-fossa-3",
    "title": "03｜臨床連結只用來強化空間",
    "html": "<p>教材延伸：此區感染可沿脂肪間隙擴散，位置與前後連通有關。看到肛門旁膿瘍題時，可以用窩壁與神經血管位置理解；本頁沒有提供處置操作或將所有肛門感染都歸為同一個空間。</p>"
   }
  ]
 },
 {
  "id": "deltoid-cuff",
  "title": "三角肌、肩袖與肌肉神經配對",
  "english": "Deltoid and rotator cuff",
  "summary": "從前後上三面包住肱骨頭；比較SITS與大圓肌，避免神經混配。",
  "sources": [
   "M3VIDEO",
   "M3AXILLA",
   "M3AXANS",
   "YX2021"
  ],
  "sections": [
   {
    "id": "original-pages",
    "title": "原圖定位與讀圖順序",
    "html": "<p>先看原圖建立位置，再用下方表格整理。原筆記與影片為不同教材；補充內容不當成老師逐字講解。</p><figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-043.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第43頁\"><img src=\"assets/anatomy-notes/pdf-043.webp\" alt=\"奕翔解剖筆記：上半看三角肌各束，中段用肱骨頭四周辨SITS，PDF第43頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第43頁，含封面。上半看三角肌各束，中段用肱骨頭四周辨SITS。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "deltoid-cuff-1",
    "title": "01｜三角肌與肩袖分兩種任務",
    "html": "<p>約56:20–61:20與65:20–69:20。三角肌提供重要移動力；肩袖肌腱與關節囊融合，協助肱骨頭在關節盂中保持穩定。肩袖不是只有旋轉，也參與壓定與外展。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"肌肉／主要骨端／動作主幹／神經\"><table><thead><tr><th scope=\"col\">肌肉</th><th scope=\"col\">主要骨端</th><th scope=\"col\">動作主幹</th><th scope=\"col\">神經</th></tr></thead><tbody><tr><td>三角肌 Deltoid</td><td>鎖骨外側、肩峰、肩胛棘 → 肱骨三角肌粗隆</td><td>中束外展；前束屈曲／內旋；後束伸展／外旋</td><td>腋神經C5–C6</td></tr><tr><td>棘上肌 Supraspinatus</td><td>棘上窩 → 大結節上面</td><td>協助外展、穩定肱骨頭</td><td>肩胛上神經</td></tr><tr><td>棘下肌 Infraspinatus</td><td>棘下窩 → 大結節中面</td><td>外旋、穩定</td><td>肩胛上神經</td></tr><tr><td>小圓肌 Teres minor</td><td>肩胛骨外側緣 → 大結節下面</td><td>外旋、穩定</td><td>腋神經</td></tr><tr><td>肩胛下肌 Subscapularis</td><td>肩胛下窩 → 小結節</td><td>內旋、穩定</td><td>上、下肩胛下神經</td></tr></tbody></table></div>"
   },
   {
    "id": "deltoid-cuff-2",
    "title": "02｜大三小一與大圓肌例外",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"問題／回答／圖像理由\"><table><thead><tr><th scope=\"col\">問題</th><th scope=\"col\">回答</th><th scope=\"col\">圖像理由</th></tr></thead><tbody><tr><td>大結節三條？</td><td>棘上、棘下、小圓</td><td>在上後方三個附著面</td></tr><tr><td>小結節一條？</td><td>肩胛下肌</td><td>由前面跨肩關節到小結節</td></tr><tr><td>大圓肌是肩袖嗎？</td><td>不是</td><td>雖與小圓肌名字近，但不列SITS</td></tr><tr><td>大圓肌配什麼神經？</td><td>下肩胛下神經</td><td>不能因名字近就配成小圓肌的腋神經</td></tr><tr><td>大圓肌主要做什麼？</td><td>內收、內旋並協助伸展肱骨</td><td>與闊背肌功能方向接近</td></tr></tbody></table></div>"
   },
   {
    "id": "deltoid-cuff-3",
    "title": "03｜動作與病灶定位要看組合",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"發現／先連哪組／需再核對\"><table><thead><tr><th scope=\"col\">發現</th><th scope=\"col\">先連哪組</th><th scope=\"col\">需再核對</th></tr></thead><tbody><tr><td>三角肌無力＋肩外側感覺改變</td><td>腋神經</td><td>外科頸、四邊孔等相關位置</td></tr><tr><td>棘上及棘下肌共同無力</td><td>肩胛上神經路徑</td><td>損傷在肩胛上切跡前後位置影響範圍不同</td></tr><tr><td>棘下肌單獨明顯受影響</td><td>較遠端肩胛上神經路徑可考慮</td><td>如棘盂切跡相關區；不能只憑一個動作下診斷</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>本表為教材定位補充。任何單一肌力測試都會受疼痛、協同肌與檢查姿勢影響。</div>"
   }
  ]
 },
 {
  "id": "shoulder-bursa",
  "title": "肩峰下滑囊、穩定與外展節律",
  "english": "Subacromial bursa and shoulder elevation",
  "summary": "層次圖接動作圖；保留外展分段的用處，也說明不是固定肌肉開關。",
  "sources": [
   "M3VIDEO",
   "M3AXANS",
   "M3AXILLA",
   "YX2021"
  ],
  "sections": [
   {
    "id": "original-pages",
    "title": "原圖定位與讀圖順序",
    "html": "<p>先看原圖建立位置，再用下方表格整理。原筆記與影片為不同教材；補充內容不當成老師逐字講解。</p><figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-043.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第43頁\"><img src=\"assets/anatomy-notes/pdf-043.webp\" alt=\"奕翔解剖筆記：肩峰、滑囊、棘上肌腱和肱骨頭由上到下定位，PDF第43頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第43頁，含封面。肩峰、滑囊、棘上肌腱和肱骨頭由上到下定位。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "shoulder-bursa-1",
    "title": "01｜先由皮膚往關節深面走",
    "html": "<p>約61:20–65:20及69:20–75:20。板書把肩峰上方的骨性結構、滑囊與肩袖分開畫，適合用來建立層次。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"相對層次／構造／理解\"><table><thead><tr><th scope=\"col\">相對層次</th><th scope=\"col\">構造</th><th scope=\"col\">理解</th></tr></thead><tbody><tr><td>上方覆蓋</td><td>肩峰／喙肩弓及三角肌相關區</td><td>提供上方空間邊界</td></tr><tr><td>其下方</td><td>肩峰下—三角肌下滑囊</td><td>減少肩袖肌腱與上方結構摩擦</td></tr><tr><td>更深</td><td>棘上肌腱及關節囊相關區</td><td>不是滑囊內的一條肌腹</td></tr><tr><td>最深主體</td><td>肱骨頭與關節盂</td><td>動態穩定需要肩袖協作</td></tr></tbody></table></div><p>教材補充：肩峰下滑囊與盂肱關節腔在正常完整肩袖下通常不直接相通；不能把二者當成同一個囊。</p>"
   },
   {
    "id": "shoulder-bursa-2",
    "title": "02｜外展分段是一個主力模型",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"教學分段／常用聯想／更精確的理解\"><table><thead><tr><th scope=\"col\">教學分段</th><th scope=\"col\">常用聯想</th><th scope=\"col\">更精確的理解</th></tr></thead><tbody><tr><td>起始約0–15°</td><td>棘上肌</td><td>棘上肌參與全程穩定與外展，不只這15°有作用</td></tr><tr><td>約15–90°</td><td>三角肌重要</td><td>肩袖仍工作；三角肌也不是0–15°完全關閉</td></tr><tr><td>再往上抬</td><td>肩胛骨上旋、斜方肌與前鋸肌合作</td><td>肩胛胸廓運動早已參與，不是90°才突然啟動</td></tr><tr><td>肩胛肱骨節律</td><td>常用約2:1作概略模型</td><td>比例隨角度、平面、負重與個體變化</td></tr></tbody></table></div>"
   },
   {
    "id": "shoulder-bursa-3",
    "title": "03｜穩定系統不只四條肌肉",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"類型／例子／讀題方式\"><table><thead><tr><th scope=\"col\">類型</th><th scope=\"col\">例子</th><th scope=\"col\">讀題方式</th></tr></thead><tbody><tr><td>動態</td><td>肩袖與肩胛穩定肌群</td><td>從肌肉拉力和骨頭方向解題</td></tr><tr><td>靜態</td><td>關節唇、囊、韌帶、關節內負壓等</td><td>不能把所有脫位原因都歸單一肌</td></tr><tr><td>下方較薄弱區</td><td>肩袖下方缺少同樣連續的肌腱覆蓋</td><td>可連到前下方脫位的典型解剖，但仍受受力方向影響</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>本頁為機轉與空間整理，沒有用「疼痛弧」或單一動作直接診斷旋轉肌袖撕裂。</div>"
   }
  ]
 },
 {
  "id": "posterior-spaces",
  "title": "四邊孔、三邊孔與三角間隙",
  "english": "Posterior shoulder spaces",
  "summary": "先用肱三頭肌長頭切內外，再用大圓肌切上下，填入不同神經血管。",
  "sources": [
   "M3VIDEO",
   "M3UPPER",
   "M3AXILLA",
   "YX2021"
  ],
  "sections": [
   {
    "id": "original-pages",
    "title": "原圖定位與讀圖順序",
    "html": "<p>先看原圖建立位置，再用下方表格整理。原筆記與影片為不同教材；補充內容不當成老師逐字講解。</p><figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-043.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第43頁\"><img src=\"assets/anatomy-notes/pdf-043.webp\" alt=\"奕翔解剖筆記：下半由右上臂背面圖讀三個通道，PDF第43頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第43頁，含封面。下半由右上臂背面圖讀三個通道。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "posterior-spaces-1",
    "title": "01｜先只畫四條邊，不急著背內容",
    "html": "<p>約75:20–83:40。以下以肩後面觀為主；「上方小圓肌」是此視角的典型邊界描述，換前面觀時會看到肩胛下肌等不同關係。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"空間／上界／下界／內側／外側\"><table><thead><tr><th scope=\"col\">空間</th><th scope=\"col\">上界</th><th scope=\"col\">下界</th><th scope=\"col\">內側／外側</th></tr></thead><tbody><tr><td>四邊孔 Quadrangular space</td><td>小圓肌</td><td>大圓肌</td><td>內：肱三頭肌長頭；外：肱骨外科頸相關區</td></tr><tr><td>三邊孔 Triangular space</td><td>小圓肌</td><td>大圓肌</td><td>外：肱三頭肌長頭；位於長頭內側</td></tr><tr><td>三角間隙 Triangular interval</td><td>大圓肌</td><td>向下通往上臂後室</td><td>內：肱三頭肌長頭；外：肱骨／外側頭相關區</td></tr></tbody></table></div>"
   },
   {
    "id": "posterior-spaces-2",
    "title": "02｜三條路各運什麼",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"空間／典型主要內容／如何連到下游\"><table><thead><tr><th scope=\"col\">空間</th><th scope=\"col\">典型主要內容</th><th scope=\"col\">如何連到下游</th></tr></thead><tbody><tr><td>四邊孔</td><td>腋神經＋旋肱後動脈</td><td>繞外科頸到三角肌／小圓肌相關區</td></tr><tr><td>三邊孔</td><td>旋肩胛血管</td><td>由腋窩到肩胛骨背側、參與肩胛吻合</td></tr><tr><td>三角間隙</td><td>橈神經＋肱深動脈</td><td>進上臂後方，連到橈神經溝</td></tr></tbody></table></div><p><b>長頭外上配腋神經，長頭內上配旋肩胛，長頭外下配橈神經。</b>口訣必須與同一張後面觀一起用。</p>"
   },
   {
    "id": "posterior-spaces-3",
    "title": "03｜名字與圖形不等於診斷",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"容易混／校正\"><table><thead><tr><th scope=\"col\">容易混</th><th scope=\"col\">校正</th></tr></thead><tbody><tr><td>三邊孔等於三角間隙</td><td>不同，前者在大圓肌上方，後者在大圓肌下方</td></tr><tr><td>旋肱後動脈與旋肩胛動脈互換</td><td>四邊孔配旋肱後；三邊孔配旋肩胛</td></tr><tr><td>所有通道都有一條主要神經與動脈配對</td><td>三邊孔基本考法以旋肩胛血管為主，不硬加一條對稱的主要神經</td></tr><tr><td>只看圖上的左或右</td><td>先確認是左肩或右肩、前觀或後觀，再判內外</td></tr></tbody></table></div>"
   }
  ]
 },
 {
  "id": "axillary-vessels",
  "title": "腋動脈分段與肩後通道血管",
  "english": "Axillary artery segments and branches",
  "summary": "用胸小肌分三段，將旋肩胛、胸背與旋肱後動脈放回來源。",
  "sources": [
   "M3VIDEO",
   "M3AXANS",
   "M3AXILLA",
   "YX2021"
  ],
  "sections": [
   {
    "id": "original-pages",
    "title": "原圖定位與讀圖順序",
    "html": "<p>先看原圖建立位置，再用下方表格整理。原筆記與影片為不同教材；補充內容不當成老師逐字講解。</p><figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-043.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第43頁\"><img src=\"assets/anatomy-notes/pdf-043.webp\" alt=\"奕翔解剖筆記：肩後通道的血管名稱，PDF第43頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第43頁，含封面。肩後通道的血管名稱。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure><figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-044.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第44頁\"><img src=\"assets/anatomy-notes/pdf-044.webp\" alt=\"奕翔解剖筆記：腋窩內的動脈走行與胸小肌地標，PDF第44頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第44頁，含封面。腋窩內的動脈走行與胸小肌地標。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "axillary-vessels-1",
    "title": "01｜先找改名點，再背分支",
    "html": "<p>約83:40–89:40。板書由通道內容接到動脈分支小圖；下表完整六分支為教材整理。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"段落／典型界線／記憶\"><table><thead><tr><th scope=\"col\">段落</th><th scope=\"col\">典型界線</th><th scope=\"col\">記憶</th></tr></thead><tbody><tr><td>鎖骨下動脈 → 腋動脈</td><td>第1肋外側緣</td><td>從頸根部進入腋窩</td></tr><tr><td>腋動脈第1段</td><td>胸小肌近端／內側</td><td>典型一支</td></tr><tr><td>第2段</td><td>胸小肌後方</td><td>典型兩支</td></tr><tr><td>第3段</td><td>胸小肌遠端／外側</td><td>典型三支</td></tr><tr><td>腋動脈 → 肱動脈</td><td>大圓肌下緣</td><td>進入上臂的命名地標</td></tr></tbody></table></div>"
   },
   {
    "id": "axillary-vessels-2",
    "title": "02｜1、2、3不是只背數字",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"段／典型分支／下一層連結\"><table><thead><tr><th scope=\"col\">段</th><th scope=\"col\">典型分支</th><th scope=\"col\">下一層連結</th></tr></thead><tbody><tr><td>1</td><td>上胸動脈 Superior thoracic</td><td>胸壁上部</td></tr><tr><td>2</td><td>胸肩峰動脈 Thoracoacromial；外側胸動脈 Lateral thoracic</td><td>胸肩峰再有鎖骨、肩峰、三角肌與胸肌支</td></tr><tr><td>3</td><td>肩胛下動脈 Subscapular；旋肱前、旋肱後動脈</td><td>肩胛下再分旋肩胛與胸背等主幹</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>1／2／3是典型分支主幹模型，動脈起源與共幹有變異，不把每個人實際血管數目都寫死。</div>"
   },
   {
    "id": "axillary-vessels-3",
    "title": "03｜從通道倒推來源",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"看到的血管／回到哪條來源／相關通道／目標\"><table><thead><tr><th scope=\"col\">看到的血管</th><th scope=\"col\">回到哪條來源</th><th scope=\"col\">相關通道／目標</th></tr></thead><tbody><tr><td>旋肩胛 Circumflex scapular</td><td>肩胛下動脈分支</td><td>三邊孔到肩胛背面</td></tr><tr><td>胸背 Thoracodorsal</td><td>肩胛下動脈分支</td><td>跟闊背肌血供連結</td></tr><tr><td>旋肱後 Posterior circumflex humeral</td><td>典型腋動脈第3段</td><td>四邊孔伴腋神經</td></tr><tr><td>肱深 Profunda brachii</td><td>典型肱動脈分支</td><td>三角間隙伴橈神經；不是腋動脈六支之一</td></tr></tbody></table></div>"
   }
  ]
 },
 {
  "id": "axilla-walls",
  "title": "腋窩立體圖：頂、底與四壁",
  "english": "Axilla walls and apex",
  "summary": "把金字塔各面配回肌肉；分開腋鞘、脂肪空間與臂神經叢束。",
  "sources": [
   "M3VIDEO",
   "M3AXILLA",
   "M3AXANS",
   "YX2021"
  ],
  "sections": [
   {
    "id": "original-pages",
    "title": "原圖定位與讀圖順序",
    "html": "<p>先看原圖建立位置，再用下方表格整理。原筆記與影片為不同教材；補充內容不當成老師逐字講解。</p><figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-044.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第44頁\"><img src=\"assets/anatomy-notes/pdf-044.webp\" alt=\"奕翔解剖筆記：截頂金字塔依序找前後內外壁，再看頂與底，PDF第44頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第44頁，含封面。截頂金字塔依序找前後內外壁，再看頂與底。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "axilla-walls-1",
    "title": "01｜外觀圖換成立體腔室",
    "html": "<p>約89:40–98:40。腋窩在胸壁與上臂近端之間，可用截頂金字塔教學。頂不是皮膚凹陷，底才對應腋下表面。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"面／主要構成／和鄰近區連結\"><table><thead><tr><th scope=\"col\">面</th><th scope=\"col\">主要構成</th><th scope=\"col\">和鄰近區連結</th></tr></thead><tbody><tr><td>頂 Apex／cervicoaxillary canal</td><td>鎖骨、第1肋、肩胛骨上緣圍成的通道</td><td>頸根部到腋窩</td></tr><tr><td>底 Base</td><td>皮膚、淺層組織與腋筋膜</td><td>腋下表面，不是肌袖</td></tr><tr><td>前壁</td><td>胸大肌、胸小肌及相關筋膜；鎖骨下肌等上方關係</td><td>前腋襞以胸大肌下緣為主</td></tr><tr><td>後壁</td><td>肩胛下肌，上下另有大圓肌與闊背肌</td><td>後腋襞以大圓肌、闊背肌相關區為主</td></tr><tr><td>內側壁</td><td>胸壁與前鋸肌</td><td>長胸神經沿前鋸肌表面相關區行走</td></tr><tr><td>外側壁</td><td>狹窄的肱骨結節間溝相關區</td><td>喙肱肌與肱二頭短頭等鄰近</td></tr></tbody></table></div>"
   },
   {
    "id": "axilla-walls-2",
    "title": "02｜內容物不是一個全部密封的袋子",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"結構／概念／不能過度推論\"><table><thead><tr><th scope=\"col\">結構</th><th scope=\"col\">概念</th><th scope=\"col\">不能過度推論</th></tr></thead><tbody><tr><td>腋動脈與臂神經叢束</td><td>三束以腋動脈第2段相對位置命名</td><td>內、外、後束不是相對整個身體永遠固定的方向</td></tr><tr><td>腋靜脈</td><td>重要內容，典型較偏前內側</td><td>不將全部血管都畫在同一個動脈神經鞘內</td></tr><tr><td>脂肪、淋巴結與淋巴管</td><td>填充並分布於腋窩</td><td>腋窩本身比腋鞘範圍大</td></tr><tr><td>腋鞘 Axillary sheath</td><td>與頸部椎前筋膜延續相關的動脈／臂叢包被</td><td>不等於整個腋窩四壁</td></tr></tbody></table></div>"
   },
   {
    "id": "axilla-walls-3",
    "title": "03｜從四壁回想肌肉與神經",
    "html": "<p>內壁看到前鋸肌，想長胸神經；後壁看到闊背肌，想胸背神經；後壁上方肩胛下肌，想肩胛下神經。先以肌肉定位，再背神經走行，會比獨立背一串神經名更容易保留空間。</p>"
   }
  ]
 },
 {
  "id": "arm-muscles",
  "title": "上臂前後室：肌皮與橈神經",
  "english": "Arm compartments and muscle actions",
  "summary": "把前室三肌、後室伸肌的骨端與動作整合；強調肱二頭肌的旋後。",
  "sources": [
   "M3VIDEO",
   "M3AXILLA",
   "M3MCN",
   "M3FOREARM",
   "YX2021"
  ],
  "sections": [
   {
    "id": "original-pages",
    "title": "原圖定位與讀圖順序",
    "html": "<p>先看原圖建立位置，再用下方表格整理。原筆記與影片為不同教材；補充內容不當成老師逐字講解。</p><figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-045.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第45頁\"><img src=\"assets/anatomy-notes/pdf-045.webp\" alt=\"奕翔解剖筆記：上半前後室肌群，下半肘窩為延伸回查，PDF第45頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第45頁，含封面。上半前後室肌群，下半肘窩為延伸回查。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "arm-muscles-1",
    "title": "01｜前室三肌：同神經，不同終點",
    "html": "<p>約98:40–108:20。上臂不是整條上肢；上臂前室主要包括喙肱肌、肱二頭肌、肱肌。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"肌肉／起止主幹／動作／主要神經\"><table><thead><tr><th scope=\"col\">肌肉</th><th scope=\"col\">起止主幹</th><th scope=\"col\">動作</th><th scope=\"col\">主要神經</th></tr></thead><tbody><tr><td>喙肱肌 Coracobrachialis</td><td>喙突 → 肱骨內側中段</td><td>屈曲、內收肩關節</td><td>肌皮神經，典型穿過肌腹</td></tr><tr><td>肱二頭肌 Biceps brachii</td><td>長頭：盂上結節相關區；短頭：喙突 → 橈骨粗隆與腱膜</td><td>屈肘、前臂旋後；亦參與肩部動作</td><td>肌皮神經</td></tr><tr><td>肱肌 Brachialis</td><td>肱骨前面遠端 → 尺骨粗隆／冠突相關區</td><td>重要屈肘肌</td><td>主要肌皮神經；外側部分可另有橈神經支</td></tr></tbody></table></div>"
   },
   {
    "id": "arm-muscles-2",
    "title": "02｜後室與長頭跨肩的意義",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"肌肉／起止主幹／動作／神經\"><table><thead><tr><th scope=\"col\">肌肉</th><th scope=\"col\">起止主幹</th><th scope=\"col\">動作</th><th scope=\"col\">神經</th></tr></thead><tbody><tr><td>肱三頭肌 Triceps brachii</td><td>長頭自盂下結節；內外側頭自肱骨後面 → 鷹嘴</td><td>伸肘；長頭另跨肩，參與伸肩與內收</td><td>橈神經</td></tr><tr><td>肘肌 Anconeus</td><td>肱骨外上髁 → 鷹嘴及近端尺骨後外側</td><td>協助伸肘、穩定肘</td><td>橈神經相關肌支</td></tr></tbody></table></div><p>長頭跨過肩關節，因此既是動作肌，也能在肩後通道圖中作邊界。短小的肘肌不能只因位於肘旁就改配肌皮神經。</p>"
   },
   {
    "id": "arm-muscles-3",
    "title": "03｜旋後不能都配橈神經",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"問題／判讀／理由\"><table><thead><tr><th scope=\"col\">問題</th><th scope=\"col\">判讀</th><th scope=\"col\">理由</th></tr></thead><tbody><tr><td>肱二頭肌為什麼能旋後？</td><td>附著橈骨粗隆，收縮可帶橈骨旋轉</td><td>與屈肘姿勢及力臂有關</td></tr><tr><td>所有旋後肌都由橈神經支配嗎？</td><td>不是；肱二頭肌由肌皮神經支配</td><td>動作相同不代表神經相同</td></tr><tr><td>肱橈肌屈肘，所以也屬肌皮神經？</td><td>不是；肱橈肌主要由橈神經支配</td><td>可連到下一頁前臂外側肌群</td></tr><tr><td>肱二頭長頭腱在關節囊內，就等於滑膜腔內自由浸泡？</td><td>不能；常以囊內、滑膜外描述</td><td>關節囊與滑膜反折要分開，屬補充</td></tr></tbody></table></div>"
   }
  ]
 },
 {
  "id": "forearm-intro",
  "title": "前臂入門：分區、層次與神經例外",
  "english": "Forearm introduction and innervation patterns",
  "summary": "只接本片最後的分層開頭；完整前臂、腕隧道與手肌留待後續影片。",
  "sources": [
   "M3VIDEO",
   "M3UPPER",
   "M3FOREARM",
   "YX2021"
  ],
  "sections": [
   {
    "id": "original-pages",
    "title": "原圖定位與讀圖順序",
    "html": "<p>先看原圖建立位置，再用下方表格整理。原筆記與影片為不同教材；補充內容不當成老師逐字講解。</p><figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-046.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第46頁\"><img src=\"assets/anatomy-notes/pdf-046.webp\" alt=\"奕翔解剖筆記：整頁為前臂延伸地圖；本片僅開始淺層與分區，不代表全頁已講完，PDF第46頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第46頁，含封面。整頁為前臂延伸地圖；本片僅開始淺層與分區，不代表全頁已講完。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "forearm-intro-1",
    "title": "01｜先分前、後與外側群",
    "html": "<p>約108:20至1:53:40。新板書用格狀圖開始列前臂淺層與神經。本頁先建立骨架，不把完整原筆記圖的每條肌肉都算成本片已完成。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"分區／主幹功能／主要神經規則\"><table><thead><tr><th scope=\"col\">分區</th><th scope=\"col\">主幹功能</th><th scope=\"col\">主要神經規則</th></tr></thead><tbody><tr><td>前側屈肌—旋前群</td><td>腕與手指屈曲、前臂旋前</td><td>大多正中神經及其前骨間支</td></tr><tr><td>後側伸肌—旋後群</td><td>腕指伸展與部分旋後功能</td><td>主要橈神經深支／後骨間神經等</td></tr><tr><td>外側／橈側群（依教材分法）</td><td>肱橈肌、橈側腕伸肌等</td><td>橈神經系統；不是全部屈腕或全部旋前</td></tr></tbody></table></div>"
   },
   {
    "id": "forearm-intro-2",
    "title": "02｜前側最值得先記的例外",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"肌肉／群／神經主幹／怎麼避免硬套\"><table><thead><tr><th scope=\"col\">肌肉／群</th><th scope=\"col\">神經主幹</th><th scope=\"col\">怎麼避免硬套</th></tr></thead><tbody><tr><td>尺側屈腕肌 FCU</td><td>尺神經</td><td>名字含尺側可作提示，但仍需核對其他肌</td></tr><tr><td>深屈指肌 FDP內側部分</td><td>尺神經，主要對應第4、5指相關部</td><td>同一塊肌肉也可能雙重神經來源</td></tr><tr><td>FDP外側部分、拇長屈肌與旋前方肌</td><td>正中神經之前骨間支為主</td><td>不能把「深層全部尺神經」當口訣</td></tr><tr><td>肱橈肌 Brachioradialis</td><td>橈神經</td><td>屈肘功能不代表歸前臂屈肌群的正中神經</td></tr></tbody></table></div>"
   },
   {
    "id": "forearm-intro-3",
    "title": "03｜淺層四個名字，先做地標索引",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"由橈側向尺側的常見教學索引／功能線索／閱讀限制\"><table><thead><tr><th scope=\"col\">由橈側向尺側的常見教學索引</th><th scope=\"col\">功能線索</th><th scope=\"col\">閱讀限制</th></tr></thead><tbody><tr><td>旋前圓肌 Pronator teres</td><td>前臂旋前、協助屈肘</td><td>神經走行與雙頭關係後續再展開</td></tr><tr><td>橈側屈腕肌 Flexor carpi radialis</td><td>屈腕、橈偏</td><td>不代表位於腕隧道同一內容清單</td></tr><tr><td>掌長肌 Palmaris longus</td><td>張緊掌腱膜、可缺如</td><td>缺如不表示整條前臂功能消失</td></tr><tr><td>尺側屈腕肌 Flexor carpi ulnaris</td><td>屈腕、尺偏</td><td>主要尺神經，記為常見例外</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>完整八條前側肌、後側深淺層、腕隧道及手內在肌尚未由本片板書完成。此處附圖供預習，後續影片再逐段補齊；不以預習表代替完整進度。</div>"
   }
  ]
 },
 {
  "id": "rapid-review",
  "title": "跨區總複習與易混配對",
  "english": "Integrated review",
  "summary": "把骨盆底／會陰、肩後通道、上臂／前臂三組常見混淆一次拆清。",
  "sources": [
   "M3VIDEO",
   "M3PELVIC",
   "M3UPPER",
   "M3AXILLA"
  ],
  "sections": [
   {
    "id": "rapid-review-1",
    "title": "01｜先判斷錯在區域、層次還是神經",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"容易混／應分成／回想線索\"><table><thead><tr><th scope=\"col\">容易混</th><th scope=\"col\">應分成</th><th scope=\"col\">回想線索</th></tr></thead><tbody><tr><td>骨盆膈／尿生殖膈</td><td>提肛與尾骨肌／尿生殖區舊式概念</td><td>上方漏斗與前方支持區</td></tr><tr><td>提肛肌／外括約肌神經</td><td>薦神經直接肌支／陰部相關支</td><td>不能整張圖只寫pudendal</td></tr><tr><td>Colles／會陰膜</td><td>淺筋膜膜性層／較深支持組織</td><td>下腹Scarpa接哪張膜</td></tr><tr><td>三邊孔／三角間隙</td><td>旋肩胛／橈神經＋肱深動脈</td><td>大圓肌上下</td></tr><tr><td>小圓／大圓肌</td><td>肩袖＋腋神經／非肩袖＋下肩胛下神經</td><td>名字近，功能方向也不同</td></tr><tr><td>肱二頭／旋後肌神經</td><td>肌皮／橈神經系統</td><td>共同旋後不等於共同神經</td></tr></tbody></table></div>"
   },
   {
    "id": "rapid-review-2",
    "title": "02｜三張白紙回想圖",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"圖／最少必須畫出／完成條件\"><table><thead><tr><th scope=\"col\">圖</th><th scope=\"col\">最少必須畫出</th><th scope=\"col\">完成條件</th></tr></thead><tbody><tr><td>會陰冠狀圖</td><td>中線臟器、會陰膜、淺肌、骨盆膈、外側陰部管</td><td>淺深與主幹／分支不混</td></tr><tr><td>肩後通道圖</td><td>小圓、大圓、長頭、肱骨及三空間</td><td>三組內容物各放對位置</td></tr><tr><td>上臂到前臂圖</td><td>上臂前後室、肌皮／橈、前臂前正中／後橈與尺神經例外</td><td>能說出規則及例外，並標記前臂尚未全講完</td></tr></tbody></table></div>"
   },
   {
    "id": "rapid-review-3",
    "title": "03｜把錯題改成一個可重畫的關係",
    "html": "<p>每次只選一個錯誤：例如把陰部神經錯配到提肛肌，或把旋肩胛放進四邊孔。先回原頁更正，再在白紙重畫。能不用選項說出原因後，再把間隔拉長到1、3、7、14天；忘記時提早重練。</p><p><a class=\"study-button\" href=\"#/subject/anatomy/quiz\">解剖學五題考古快寫 →</a> 此入口仍抽取整科題目，尚未限定本章。</p>"
   }
  ]
 },
 {
  "id": "board-atlas",
  "title": "奕翔解剖筆記原圖集",
  "english": "Original notebook atlas",
  "summary": "PDF39–46頁：骨盆底、會陰、肩部、腋窩、上臂及前臂預習。",
  "sources": [
   "M3VIDEO",
   "YX2021"
  ],
  "sections": [
   {
    "id": "board-atlas-1",
    "title": "01｜PDF第39頁｜骨盆底與控便",
    "html": "<figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-039.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第39頁\"><img src=\"assets/anatomy-notes/pdf-039.webp\" alt=\"奕翔解剖筆記：骨盆底與控便，PDF第39頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第39頁，含封面。骨盆底與控便。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "board-atlas-2",
    "title": "02｜PDF第40頁｜會陰菱形與肌群",
    "html": "<figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-040.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第40頁\"><img src=\"assets/anatomy-notes/pdf-040.webp\" alt=\"奕翔解剖筆記：會陰菱形與肌群，PDF第40頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第40頁，含封面。會陰菱形與肌群。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "board-atlas-3",
    "title": "03｜PDF第41頁｜淺深會陰及筋膜",
    "html": "<figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-041.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第41頁\"><img src=\"assets/anatomy-notes/pdf-041.webp\" alt=\"奕翔解剖筆記：淺深會陰及筋膜，PDF第41頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第41頁，含封面。淺深會陰及筋膜。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "board-atlas-4",
    "title": "04｜PDF第42頁｜坐骨肛門窩",
    "html": "<figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-042.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第42頁\"><img src=\"assets/anatomy-notes/pdf-042.webp\" alt=\"奕翔解剖筆記：坐骨肛門窩，PDF第42頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第42頁，含封面。坐骨肛門窩。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "board-atlas-5",
    "title": "05｜PDF第43頁｜肩袖與肩後通道",
    "html": "<figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-043.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第43頁\"><img src=\"assets/anatomy-notes/pdf-043.webp\" alt=\"奕翔解剖筆記：肩袖與肩後通道，PDF第43頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第43頁，含封面。肩袖與肩後通道。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "board-atlas-6",
    "title": "06｜PDF第44頁｜腋窩金字塔",
    "html": "<figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-044.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第44頁\"><img src=\"assets/anatomy-notes/pdf-044.webp\" alt=\"奕翔解剖筆記：腋窩金字塔，PDF第44頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第44頁，含封面。腋窩金字塔。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "board-atlas-7",
    "title": "07｜PDF第45頁｜上臂前後室與肘窩延伸",
    "html": "<figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-045.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第45頁\"><img src=\"assets/anatomy-notes/pdf-045.webp\" alt=\"奕翔解剖筆記：上臂前後室與肘窩延伸，PDF第45頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第45頁，含封面。上臂前後室與肘窩延伸。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "board-atlas-8",
    "title": "08｜PDF第46頁｜前臂預習圖：本片未完整講完",
    "html": "<figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-046.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第46頁\"><img src=\"assets/anatomy-notes/pdf-046.webp\" alt=\"奕翔解剖筆記：前臂預習圖：本片未完整講完，PDF第46頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第46頁，含封面。前臂預習圖：本片未完整講完。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   }
  ]
 },
 {
  "id": "exam-sources",
  "title": "範圍、考古練習與參考來源",
  "english": "Scope and references",
  "summary": "影片與筆記、教材延伸分開；列出現代解剖校正與待續範圍。",
  "sources": [
   "M3VIDEO",
   "M3PELVIC",
   "M3TOPO",
   "M3GENITAL",
   "M3MEMBRANE",
   "M3LEVATOR",
   "M3MRI",
   "M3AXILLA",
   "M3AXANS",
   "M3UPPER",
   "M3MCN",
   "M3FOREARM",
   "M3SCARPA"
  ],
  "sections": [
   {
    "id": "exam-sources-1",
    "title": "01｜本次已做與待續",
    "html": "<p>本章依〈2016DF04 01_肌肉(3)〉全片板書畫面整理，長1:53:40.27；每20秒取一張，共342張，已檢視。未完成音訊轉錄或逐句審聽，未寫在板書的口頭內容可能遺漏。時間碼為約略畫面定位，非逐句字幕。完整附著表、現代解剖核對與臨床連結另標為教材補充。</p><p>已完成本片可辨板書的時間軸與主題統整；未完成音訊轉錄，不能宣稱覆蓋所有口述。網站第7部為〈肌肉（3）〉。本片最後停在前臂分層開頭，不能標為完整前臂、腕隧道、手肌已完成。</p><p>圖片使用賴奕翔《奕翔的解剖筆記》三版（2021-07-25）PDF第39–46頁，頁碼含封面。原頁不改字；有簡化或舊式描述時在文字另列核對，讀圖與更正應一起看。</p>"
   },
   {
    "id": "exam-sources-2",
    "title": "02｜延伸內容如何辨認",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"內容／標示方式\"><table><thead><tr><th scope=\"col\">內容</th><th scope=\"col\">標示方式</th></tr></thead><tbody><tr><td>提肛肌神經與女性會陰膜</td><td>引用原始解剖／影像研究核對，避免沿用過度簡化</td></tr><tr><td>完整神經、血管、附著與動作表</td><td>教材補充，未一一歸為老師口頭內容</td></tr><tr><td>尿液外滲、病灶定位等</td><td>機轉連結，保留條件，不作單一症狀診斷</td></tr><tr><td>原筆記完整前臂與肘窩圖</td><td>供延伸回查，未全部計為本片已講範圍</td></tr><tr><td>國考題號與頻率</td><td>沒有未核對就補造歷屆題號或宣稱固定必考次數</td></tr></tbody></table></div><p><a class=\"study-button\" href=\"#/subject/anatomy/quiz\">解剖學考古快寫 →</a></p>"
   },
   {
    "id": "exam-sources-3",
    "title": "03｜來源與原圖說明",
    "html": "<ol class=\"source-list\"><li><b>M3VIDEO · 課程影片</b> — <a href=\"https://www.youtube.com/playlist?list=PLoKlbKOZ9XPpsITjehrHKiYvhih_3OJOz\" target=\"_blank\" rel=\"noopener\">使用者上傳：2016DF04 01_肌肉(3) 360P.mp4</a><small>全長1:53:40.27。全片每20秒板書畫面共342張，已檢視；未完成音訊轉錄。連結為來源播放清單，非本片精確網址。</small></li><li><b>M3PELVIC · 大學教材</b> — <a href=\"https://anatomy.ttuhscep.edu/anatomytables/muscles_pelvis_perineum.html\" target=\"_blank\" rel=\"noopener\">Texas Tech：Muscles of the Pelvis and Perineum</a><small>骨盆底及會陰肌之附著、作用與神經；舊式尿生殖膈描述另以研究核對。</small></li><li><b>M3TOPO · 大學教材</b> — <a href=\"https://anatomy.ttuhscep.edu/anatomytables/topogr_pelvis_perineum.html\" target=\"_blank\" rel=\"noopener\">Texas Tech：Topographical Anatomy of the Pelvis and Perineum</a><small>會陰三角、坐骨肛門窩與區域邊界。</small></li><li><b>M3GENITAL · 大學教材</b> — <a href=\"https://anatomy.ttuhscep.edu/reproductive_system/perineum_tables.html\" target=\"_blank\" rel=\"noopener\">Texas Tech：Perineum and External Genitalia</a><small>淺深會陰空間、腺體與外生殖器。</small></li><li><b>M3MEMBRANE · 原始解剖研究</b> — <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC2775042/\" target=\"_blank\" rel=\"noopener\">Stein TA, DeLancey JOL. Structure of the Perineal Membrane in Females（2008）</a><small>女性會陰膜為與周圍結構融合的三維支持系統，不直接沿用三層夾心式尿生殖膈。</small></li><li><b>M3LEVATOR · 原始解剖研究</b> — <a href=\"https://pubmed.ncbi.nlm.nih.gov/12114890/\" target=\"_blank\" rel=\"noopener\">Innervation of the female levator ani muscles（2002）</a><small>女性屍體解剖支持提肛肌由薦神經直接分支支配；不能全部配成陰部神經。</small></li><li><b>M3MRI · 原始影像研究</b> — <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC2696929/\" target=\"_blank\" rel=\"noopener\">Anatomy of the perineal membrane as seen in magnetic resonance images of nulliparous women</a><small>用於核對會陰膜與周邊結構的連續性，非臨床診斷指引。</small></li><li><b>M3AXILLA · 大學教材</b> — <a href=\"https://anatomy.ttuhscep.edu/musculoskeletal_system/axilla_tables.html\" target=\"_blank\" rel=\"noopener\">Texas Tech：Axilla, Posterior Shoulder and Arm — Tables</a><small>肩袖、三角肌、上臂肌、腋窩與通道的解剖主幹。</small></li><li><b>M3AXANS · 大學教材</b> — <a href=\"https://anatomy.ttuhscep.edu/schemes/axilla_ans.html\" target=\"_blank\" rel=\"noopener\">Texas Tech：Axilla, Posterior Shoulder and Arm — Answers</a><small>腋動脈分段分支及肩部滑囊位置。</small></li><li><b>M3UPPER · 大學教材</b> — <a href=\"https://medicine.uams.edu/neuroscience/education/medical-school-courses/human-structure-module/anatomy-tables/topographical-anatomy-tables/topographical-anatomy-of-the-upper-limb/\" target=\"_blank\" rel=\"noopener\">UAMS：Topographical Anatomy of the Upper Limb</a><small>四邊孔、三邊孔、三角間隙與前臂分區。</small></li><li><b>M3MCN · 大學神經解剖教材</b> — <a href=\"https://nervesurgery.wustl.edu/anatomy-physiology/by-nerve/musculocutaneous-nerve/\" target=\"_blank\" rel=\"noopener\">Washington University：Musculocutaneous Nerve</a><small>肌皮神經、肱二頭肌及前臂旋後功能。</small></li><li><b>M3FOREARM · 大學教材</b> — <a href=\"https://anatomy.ttuhscep.edu/musculoskeletal_system/forearm_questions/forearm_1_feedback.html\" target=\"_blank\" rel=\"noopener\">Texas Tech：Forearm — Review feedback</a><small>肱二頭肌與肱橈肌神經、功能差異。</small></li><li><b>M3SCARPA · 解剖補充</b> — <a href=\"https://www.ncbi.nlm.nih.gov/sites/books/NBK553137/\" target=\"_blank\" rel=\"noopener\">NCBI Bookshelf：Anatomy, Abdomen and Pelvis, Scarpa Fascia</a><small>尿道及Buck筋膜損傷後的淺層尿液外滲路徑；不是所有尿道損傷的通用模式。</small></li></ol><p>原筆記作者：賴奕翔。原圖保留署名及原頁，未重新繪製。更新與來源查閱：2026-10-19。影片雜湊、抽樣方法、圖頁與教材延伸清單見assets/muscles3-source.json。</p>"
   }
  ]
 }
];
const muscles3MemoryLessons={
 "pelvic-diaphragm": [
  "先一張漏斗，再放一條U帶",
  "畫前方恥骨、側方坐骨棘與腱弓、後方尾骨，再將肌束往中線收。最內側加恥骨直腸肌的U形吊帶。",
  "尾骨肌不在提肛肌三群之內；提肛肌不能全部配成陰部神經。",
  [
   [
    "提肛肌三大基本分群是什麼？",
    "恥骨直腸肌、恥骨尾骨肌、髂骨尾骨肌；尾骨肌另列，與它們合成骨盆膈。"
   ],
   [
    "為何不能把整個骨盆底都寫成pudendal nerve？",
    "提肛肌主要有薦神經直接分支由骨盆面到達；陰部神經則主要支配外括約肌與會陰肌群等。"
   ]
  ]
 ],
 "continence": [
  "三道機制，分別回答三個問題",
  "先畫U帶控制角度，再畫內環平滑肌管靜息張力，最後加外環骨骼肌作隨意閉合。",
  "內括約肌是平滑肌；不要把所有控便功能都歸給陰部神經。",
  [
   [
    "恥骨直腸肌收縮，主要維持哪個形態？",
    "肛直腸交界的彎折。它從前方恥骨起，繞在交界後方成U形吊帶。"
   ],
   [
    "內、外肛門括約肌的肌肉類型如何分？",
    "內為平滑肌、以自主／腸神經調控；外為骨骼肌、以體神經支配為主。"
   ]
  ]
 ],
 "perineum-map": [
  "四點、一道橫線、一個中央匯合點",
  "恥骨在前、尾骨在後、坐骨結節在兩側；橫線一畫分前後，再把會陰體放在前後交界的中線附近。",
  "會陰體不是整個會陰，也不是整張會陰膜。",
  [
   [
    "哪條想像線把會陰分成前後兩三角？",
    "左右坐骨結節間連線。前為尿生殖三角，後為肛門三角。"
   ],
   [
    "會陰體是什麼，為何重要？",
    "它是中線纖維肌性匯合組織，多條會陰與骨盆底肌相關纖維在此連接，與支持功能有關。"
   ]
  ]
 ],
 "superficial-pouch": [
  "腳配坐骨海綿體，球配球海綿體",
  "先畫兩側腳與中央球部，再各套上對應肌肉。最後以一條淺會陰橫肌連回會陰體。",
  "Bartholin在淺層；Cowper腺體在深區，別被導管去向帶走。",
  [
   [
    "坐骨海綿體肌與球海綿體肌，分別覆蓋哪個根部結構？",
    "坐骨海綿體配腳crus；球海綿體配球部bulb或女性前庭球。"
   ],
   [
    "男性尿道球腺與女性前庭大腺在同一層嗎？",
    "典型不在。男性尿道球腺在深會陰區，女性前庭大腺在淺會陰隙。"
   ]
  ]
 ],
 "deep-pouch": [
  "先分兩個膈，再看男女",
  "骨盆膈放上方；下方以前方尿生殖區的會陰膜作地標。男性、女性外括約肌各畫一張，避免一圖套兩性。",
  "女性會陰膜是複合支持結構；不把舊式三層夾心當成完整真實解剖。",
  [
   [
    "Pelvic diaphragm與urogenital diaphragm能直接當同義詞嗎？",
    "不能。前者主要是提肛肌和尾骨肌；後者是前方尿生殖區的舊式概念。"
   ],
   [
    "女性尿道外括約肌複合體常列哪三個名稱？",
    "Sphincter urethrae、compressor urethrae、urethrovaginal sphincter。要和會陰膜及周圍支持組織一起理解。"
   ]
  ]
 ],
 "pouch-comparison": [
  "先畫膜，再往上下放內容",
  "切面中先找會陰膜與皮膚，根部和三組淺肌放膜下；外尿道括約肌放較深區，最後才加神經與腺體。",
  "圖上的數字可能是課堂分組，不是沒有例外的肌肉總數。",
  [
   [
    "在會陰冠狀圖中，如何先確定淺深？",
    "先找皮膚與會陰膜：皮膚方向較淺，膜上方相關區較深；不要先猜圖的前後。"
   ],
   [
    "坐骨肛門窩等於淺會陰隙嗎？",
    "不等於。坐骨肛門窩位於肛管兩側、骨盆膈下方的肛門三角相關區。"
   ]
  ]
 ],
 "fascia-spread": [
  "先問破到哪層，才畫流向",
  "在陰莖深面畫Buck，較淺處畫Colles，向腹壁接Scarpa。流體越過哪條界，才決定下一站。",
  "Colles與會陰膜不同；外滲模式不能無條件套在所有尿道損傷。",
  [
   [
    "Colles fascia往前與下腹哪個層次連續？",
    "與Scarpa筋膜的膜性層相關連續；不是腹橫筋膜。"
   ],
   [
    "為何前尿道損傷外滲題一定要問Buck fascia是否破裂？",
    "因深筋膜完整時可限制局部擴散；破裂後流體才可能進入更淺的連續筋膜平面。"
   ]
  ]
 ],
 "pudendal-neurovascular": [
  "先走一圈，再分三條路",
  "由大坐骨孔出去，繞坐骨棘，再從小坐骨孔進來，沿閉孔內肌筋膜的管道。最後分下直腸、會陰、背神經三路。",
  "Pudendal是體神經；pelvic splanchnic是副交感，雖然都常連到S2–S4。",
  [
   [
    "陰部神經典型如何由骨盆到會陰？",
    "大坐骨孔離開、繞坐骨棘附近、經小坐骨孔進會陰，再沿陰部管行走。"
   ],
   [
    "陰部神經與骨盆內臟神經都來自S2–S4，能互換嗎？",
    "不能。前者主要是體神經，後者帶副交感節前纖維；用途與路徑不同。"
   ]
  ]
 ],
 "ischioanal-fossa": [
  "中央管、內斜壁、外直壁",
  "畫中央肛管，內上方放提肛肌，外側放閉孔內肌。兩者之間填脂肪；外壁內放陰部管，下直腸支再橫跨向內。",
  "陰部管在外側壁筋膜內，不是脂肪窩中央的一條自由管子。",
  [
   [
    "坐骨肛門窩外側壁的主要肌肉與筋膜是什麼？",
    "閉孔內肌與其筋膜，陰部管就在這片筋膜相關通道內。"
   ],
   [
    "陰部主幹與下直腸分支在窩中的位置一樣嗎？",
    "不一樣。主幹主要沿外側壁的陰部管走；下直腸神經血管支可跨脂肪窩向內側肛門。"
   ]
  ]
 ],
 "deltoid-cuff": [
  "大三小一，前內旋後外旋",
  "肱骨頭前面放肩胛下肌，到小結節；後上三條到大結節。另畫大圓肌在肩袖外，不湊成第五條。",
  "小圓肌配腋神經；大圓肌配下肩胛下神經，名字像但不同。",
  [
   [
    "SITS中誰附小結節？",
    "肩胛下肌Subscapularis；其他三條附大結節，記大三小一。"
   ],
   [
    "大、小圓肌都是肩袖且同神經嗎？",
    "都不是同一組。小圓肌是肩袖、配腋神經；大圓肌不屬肩袖、配下肩胛下神經。"
   ]
  ]
 ],
 "shoulder-bursa": [
  "層次一張圖，動作一張圖",
  "先畫肩峰、滑囊、棘上肌腱、肱骨頭，再另畫肱骨和肩胛骨共同抬高手臂的方向。",
  "0–15／15–90／90以上是主力教學分段，不是各肌肉絕對開關。",
  [
   [
    "肩峰下滑囊與盂肱關節腔正常時相同嗎？",
    "不同。完整肩袖通常將兩者分開；不能把滑囊積液直接等同關節腔積液。"
   ],
   [
    "手臂超過90度才開始肩胛骨上旋嗎？",
    "不是。肩胛骨在更早角度已可參與；分段是簡化的主力模型。"
   ]
  ]
 ],
 "posterior-spaces": [
  "長頭分內外，大圓分上下",
  "先畫小圓、大圓兩條橫肌，長頭縱向往下，再在外側加肱骨。上方切內外，下方留橈神經通道。",
  "Triangular space和triangular interval不同；中文常只差孔、隙，仍要回邊界。",
  [
   [
    "四邊孔最重要的神經血管配對？",
    "腋神經與旋肱後動脈。接著沿外科頸追回三角肌。"
   ],
   [
    "三邊孔與三角間隙各通過什麼？",
    "三邊孔以旋肩胛血管為主；三角間隙有橈神經與肱深動脈。"
   ]
  ]
 ],
 "axillary-vessels": [
  "胸小肌三分段，再把分支追回去",
  "先畫一條主幹穿過胸小肌後方，近端1、肌後2、遠端3。肩胛下再分旋肩胛與胸背。",
  "肱深動脈典型來自肱動脈，不因它在肩後通道附近就塞進腋動脈六分支。",
  [
   [
    "腋動脈三段以哪條肌肉分界？",
    "胸小肌：近端第1、肌後第2、遠端第3。"
   ],
   [
    "旋肩胛和旋肱後動脈的典型來源、通道如何分？",
    "旋肩胛來自肩胛下，走三邊孔；旋肱後來自腋動脈第3段，走四邊孔。"
   ]
  ]
 ],
 "axilla-walls": [
  "每個壁面只放一組主要肌肉",
  "前面胸肌、後面肩胛下與大圓／闊背、內面胸壁前鋸、外面狹窄肱骨溝。最後加頂端頸部通道與底部皮膚。",
  "腋窩不等於腋鞘；三束命名以腋動脈第2段為比較基準。",
  [
   [
    "前、後腋襞的主要肌肉各是什麼？",
    "前以胸大肌下緣為主；後以大圓肌與闊背肌相關區為主。"
   ],
   [
    "臂神經叢內側、外側、後束，是相對哪個結構命名？",
    "相對腋動脈第2段的位置。先把胸小肌畫在該段前面再辨三束。"
   ]
  ]
 ],
 "arm-muscles": [
  "前室三肌，各看終點",
  "喙肱到肱骨，二頭到橈骨，肱肌到尺骨；前室主要肌皮。後面三頭到鷹嘴，配橈神經。",
  "二頭肌旋後仍配肌皮；肱橈肌屈肘卻配橈神經。",
  [
   [
    "肱二頭肌與肱肌各附哪塊前臂骨？",
    "肱二頭肌主要附橈骨粗隆；肱肌附尺骨近端。前者可帶橈骨旋後，後者主屈肘。"
   ],
   [
    "屈肘肌都是肌皮神經、旋後肌都是橈神經嗎？",
    "都不是。肱橈肌屈肘配橈神經；肱二頭肌旋後配肌皮神經。"
   ]
  ]
 ],
 "forearm-intro": [
  "先規則，再放兩個尺神經例外",
  "先寫前正中、後橈，再把FCU和FDP內側放進尺神經例外格；肱橈肌另外用屈肘但橈神經記。",
  "分區、動作與神經相關但不完全相等，不能只看肌肉動作猜神經。",
  [
   [
    "前臂前側肌群的兩個經典尺神經例外？",
    "尺側屈腕肌與深屈指肌內側部分（主要第4、5指相關部）。"
   ],
   [
    "掌長肌缺如與前臂整理進度各要怎麼理解？",
    "掌長肌可有正常變異；本片只開始前臂分層，完整腕隧道及手肌仍待後續，不因原圖有畫就當已講完。"
   ]
  ]
 ],
 "rapid-review": [
  "一張錯題只修一條關係",
  "先說是區域、肌層、神經還是通道錯，再回同一張圖重畫；不要只把選項字母抄進筆記。",
  "相同神經根不等於相同神經；相似空間名稱不等於同一個通道。",
  [
   [
    "用一句話區分提肛肌神經與陰部神經。",
    "提肛肌主要有薦神經直接肌支；陰部神經主要管會陰體感覺與外括約肌、會陰肌等運動。"
   ],
   [
    "把肩後三個空間各說出一組主要內容。",
    "四邊孔：腋神經與旋肱後；三邊孔：旋肩胛血管；三角間隙：橈神經與肱深動脈。"
   ]
  ]
 ]
};
