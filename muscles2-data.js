/* Board-based synthesis from the user-uploaded video; no full-audio transcript claimed. */
const muscles2VideoUrl="https://www.youtube.com/playlist?list=PLoKlbKOZ9XPpsITjehrHKiYvhih_3OJOz";
const muscles2Scope="本章依使用者上傳影片的全片板書畫面整理：00:00至1:55:06.93，每20秒擷取一張，共346張。已檢視這些畫面並與《奕翔的解剖筆記》及大學教材核對；未完成音訊轉錄或逐句審聽，因此未呈現在板書的口頭內容可能遺漏。時間碼為約略畫面定位，段落間有重疊與回顧；不是逐字稿。";
const muscles2Sources=[
 {
  "id": "M2VIDEO",
  "title": "使用者上傳：2016DF03 02_肌肉(2) 360P.mp4",
  "url": "https://www.youtube.com/playlist?list=PLoKlbKOZ9XPpsITjehrHKiYvhih_3OJOz",
  "type": "課程影片",
  "note": "全長1:55:06.93；檢視每20秒畫面共346張，時間約略到20秒。未完成音訊轉錄；來源連結僅為原播放清單，不是本片精確連結。"
 },
 {
  "id": "M2BACK",
  "title": "Texas Tech：Muscles of the Back",
  "url": "https://anatomy.ttuhscep.edu/anatomytables/muscles_back.html",
  "type": "大學教材",
  "note": "深背肌、枕下肌群與後支。"
 },
 {
  "id": "M2SUPER",
  "title": "Texas Tech：Superficial Back",
  "url": "https://anatomy.ttuhscep.edu/musculoskeletal_system/introback_tables.html",
  "type": "大學教材",
  "note": "斜方肌、闊背肌與肩胛肌群。"
 },
 {
  "id": "M2NECK",
  "title": "Texas Tech：Muscles of the Head and Neck",
  "url": "https://anatomy.ttuhscep.edu/anatomytables/muscles_head_neck.html",
  "type": "大學教材",
  "note": "頸肌與附著、作用；選取本章所需解剖事實重新整理。"
 },
 {
  "id": "M2SCAL",
  "title": "Texas Tech：Posterior Triangle of the Neck — Answers",
  "url": "https://anatomy.ttuhscep.edu/nervous_system/postneck_ans.html",
  "type": "大學教材",
  "note": "前斜角肌與神經血管的前後關係。"
 },
 {
  "id": "M2FASCIA",
  "title": "Feigl et al.：Cervical fascia and spaces terminology（2020）",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7309289/",
  "type": "解剖研究",
  "note": "頸筋膜命名與間隙邊界存在不同描述；不把簡圖當成唯一分類。"
 },
 {
  "id": "M2THORAX",
  "title": "Texas Tech：Muscles of the Thorax",
  "url": "https://anatomy.ttuhscep.edu/anatomytables/muscles_thorax.html",
  "type": "大學教材",
  "note": "橫膈、三層肋間肌及神經血管層面。"
 },
 {
  "id": "M2ABDOMEN",
  "title": "Texas Tech：Muscles of the Abdomen",
  "url": "https://anatomy.ttuhscep.edu/anatomytables/muscles_abdomen.html",
  "type": "大學教材",
  "note": "後腹壁與腹壁肌的附著及神經。"
 },
 {
  "id": "M2WALL",
  "title": "Texas Tech：Abdominal Wall — Dissector Answers",
  "url": "https://anatomy.ttuhscep.edu/gastrointestinal_system/abdo_wall_ans.html",
  "type": "大學教材",
  "note": "腹壁由淺至深層次、弓狀線上下的腱膜分配。"
 },
 {
  "id": "M2LAND",
  "title": "Texas Tech：Abdominal Wall — Tables",
  "url": "https://anatomy.ttuhscep.edu/schemes/abdo_wall_tables.html",
  "type": "大學教材",
  "note": "白線、半月線與腹壁定位。"
 },
 {
  "id": "M2ING",
  "title": "Texas Tech：Abdominal Wall and Inguinal Region",
  "url": "https://anatomy.ttuhscep.edu/schemes/abdo_wall_ing_tables.html",
  "type": "大學教材",
  "note": "深淺鼠蹊環及精索包被；屬影片末段的教材延伸。"
 },
 {
  "id": "M2ARCUATE",
  "title": "Loukas et al.：Arcuate line of the rectus sheath（2008）",
  "url": "https://onlinelibrary.wiley.com/doi/10.1111/j.1447-073X.2007.00221.x",
  "type": "解剖研究",
  "note": "弓狀線的位置、形態可變；不背成固定高度。"
 },
 {
  "id": "M2SCALRES",
  "title": "Functional anatomy of human scalene musculature（2010）",
  "url": "https://pubmed.ncbi.nlm.nih.gov/21036281/",
  "type": "解剖研究",
  "note": "斜角肌旋轉動作受節段、姿勢影響，不以單一口訣概括。"
 }
];
anatomySources.push(...muscles2Sources);
const muscles2Topics=[
 {
  "id": "muscles2-video-notes",
  "title": "全片板書時間軸與整理範圍",
  "english": "Video board timeline",
  "summary": "25個回看片段；清楚區分板書、原筆記與教材延伸。",
  "sources": [
   "M2VIDEO"
  ],
  "sections": [
   {
    "id": "muscles2-video-notes-1",
    "title": "01｜這一部怎麼讀",
    "html": "<p>本章依使用者上傳影片的全片板書畫面整理：00:00至1:55:06.93，每20秒擷取一張，共346張。已檢視這些畫面並與《奕翔的解剖筆記》及大學教材核對；未完成音訊轉錄或逐句審聽，因此未呈現在板書的口頭內容可能遺漏。時間碼為約略畫面定位，段落間有重疊與回顧；不是逐字稿。</p><p>建議順序：先看頸與呼吸肌，接背肌，再用兩個橫切面學腹壁。影片不依部位完全分段，網站把重複出現的概念合併到主題頁。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"材料／可確認內容／閱讀方式\"><table><thead><tr><th scope=\"col\">材料</th><th scope=\"col\">可確認內容</th><th scope=\"col\">閱讀方式</th></tr></thead><tbody><tr><td>影片畫面</td><td>板書圖、可辨認標記、先後順序</td><td>以下時間軸可回原檔拖曳定位</td></tr><tr><td>奕翔原筆記</td><td>對應主題圖像與原作者整理</td><td>原頁不改字，旁列教材核對</td></tr><tr><td>外部教材</td><td>肌肉起止、神經、層次及例外</td><td>標示為補充，來源可點開</td></tr></tbody></table></div>"
   },
   {
    "id": "muscles2-video-notes-2",
    "title": "02｜00:00–01:40｜接續上一部喉部板書",
    "html": "<p>開頭保留上一部的頸三角及喉部圖，接著移到背側頸肩肌。此處作銜接，不把前一部的內容重複計為新主題。</p><p><a href=\"#/subject/anatomy/chapter/muscles2/topic/accessory-suboccipital\">前往主題：接續上一部喉部板書 →</a></p>"
   },
   {
    "id": "muscles2-video-notes-3",
    "title": "03｜01:40–05:00｜斜方肌背面圖",
    "html": "<p>由頸後正中拉向肩帶，辨認左右合成的菱形輪廓。配合不同方向的肌纖維，理解上提、後收、下壓及上旋。</p><p><a href=\"#/subject/anatomy/chapter/muscles2/topic/accessory-suboccipital\">前往主題：斜方肌背面圖 →</a></p>"
   },
   {
    "id": "muscles2-video-notes-4",
    "title": "04｜05:00–11:20｜枕下區與頸三角回顧",
    "html": "<p>板書加上枕骨、寰椎、樞椎的關係；枕下三角與較大的頸後三角要分開。</p><p><a href=\"#/subject/anatomy/chapter/muscles2/topic/accessory-suboccipital\">前往主題：枕下區與頸三角回顧 →</a></p>"
   },
   {
    "id": "muscles2-video-notes-5",
    "title": "05｜11:20–15:00｜頸部橫切面定位",
    "html": "<p>由外圍、前方臟器群、後方椎體及兩側血管鞘建立地圖，先確認前後再背筋膜名稱。</p><p><a href=\"#/subject/anatomy/chapter/muscles2/topic/cervical-fascia\">前往主題：頸部橫切面定位 →</a></p>"
   },
   {
    "id": "muscles2-video-notes-6",
    "title": "06｜15:00–19:00｜頸筋膜分層",
    "html": "<p>標出包圍層、氣管前層、椎前層與頸動脈鞘；數字分類須連回講者的示意範圍。</p><p><a href=\"#/subject/anatomy/chapter/muscles2/topic/cervical-fascia\">前往主題：頸筋膜分層 →</a></p>"
   },
   {
    "id": "muscles2-video-notes-7",
    "title": "07｜19:00–26:00｜頸部橫切圖持續與回查索引",
    "html": "<p>畫面多沿用同一橫切圖。鞘內外與感染擴散路徑的細節在主題頁標為教材補充，不推定為逐句口述。</p><p><a href=\"#/subject/anatomy/chapter/muscles2/topic/cervical-fascia\">前往主題：頸部橫切圖持續與回查索引 →</a></p>"
   },
   {
    "id": "muscles2-video-notes-8",
    "title": "08｜26:00–29:40｜橫膈腰椎附著與弓狀韌帶",
    "html": "<p>新畫T12至腰椎和橫膈腳；再向外側補拱橋狀附著。先找脊柱、肋骨與肌肉。</p><p><a href=\"#/subject/anatomy/chapter/muscles2/topic/diaphragm\">前往主題：橫膈腰椎附著與弓狀韌帶 →</a></p>"
   },
   {
    "id": "muscles2-video-notes-9",
    "title": "09｜29:40–32:00｜腰方肌與髂腰肌",
    "html": "<p>板書由腰椎向髂骨及股骨畫下行肌束；用腰方肌固定第12肋、髂腰肌跨髖關節比較。</p><p><a href=\"#/subject/anatomy/chapter/muscles2/topic/posterior-wall\">前往主題：腰方肌與髂腰肌 →</a></p>"
   },
   {
    "id": "muscles2-video-notes-10",
    "title": "10｜32:00–36:40｜髂腰肌與動作回顧",
    "html": "<p>看肌腱跨過髖關節前方到股骨近端；完整的神經分支表另列教材延伸。</p><p><a href=\"#/subject/anatomy/chapter/muscles2/topic/posterior-wall\">前往主題：髂腰肌與動作回顧 →</a></p>"
   },
   {
    "id": "muscles2-video-notes-11",
    "title": "11｜36:40–42:00｜橫膈與前段圖像回顧",
    "html": "<p>在既有圖上補標記，部分口頭內容沒有新增板書；本章以可辨認的橫膈與呼吸肌關係整理。</p><p><a href=\"#/subject/anatomy/chapter/muscles2/topic/diaphragm\">前往主題：橫膈與前段圖像回顧 →</a></p>"
   },
   {
    "id": "muscles2-video-notes-12",
    "title": "12｜42:00–46:00｜三條斜角肌與第1、2肋",
    "html": "<p>新圖標示R1、R2、R3、R4。前、中斜角肌接第1肋，後斜角肌接第2肋。</p><p><a href=\"#/subject/anatomy/chapter/muscles2/topic/scalenes\">前往主題：三條斜角肌與第1、2肋 →</a></p>"
   },
   {
    "id": "muscles2-video-notes-13",
    "title": "13｜46:00–51:40｜斜角肌前後的神經血管",
    "html": "<p>先畫前斜角肌，再加入前方靜脈與後方動脈、臂神經叢；以肌肉為分隔基準。</p><p><a href=\"#/subject/anatomy/chapter/muscles2/topic/scalenes\">前往主題：斜角肌前後的神經血管 →</a></p>"
   },
   {
    "id": "muscles2-video-notes-14",
    "title": "14｜51:40–55:20｜肋間肌方向",
    "html": "<p>在肋骨間畫相反斜向線，對照外、內及最內肋間肌；呼氣、吸氣要加上部位和用力條件。</p><p><a href=\"#/subject/anatomy/chapter/muscles2/topic/intercostals\">前往主題：肋間肌方向 →</a></p>"
   },
   {
    "id": "muscles2-video-notes-15",
    "title": "15｜55:20–59:20｜前鋸肌與肩胛骨",
    "html": "<p>肩胛骨內側緣旁加入肌束及神經標記，理解肌肉包繞胸壁後把肩胛骨貼回胸廓。</p><p><a href=\"#/subject/anatomy/chapter/muscles2/topic/serratus\">前往主題：前鋸肌與肩胛骨 →</a></p>"
   },
   {
    "id": "muscles2-video-notes-16",
    "title": "16｜59:20–62:20｜闊背肌",
    "html": "<p>下背向肱骨方向畫扇形肌，將肩關節動作與肩胛骨動作分開。</p><p><a href=\"#/subject/anatomy/chapter/muscles2/topic/back-muscles\">前往主題：闊背肌 →</a></p>"
   },
   {
    "id": "muscles2-video-notes-17",
    "title": "17｜62:20–65:20｜提肩胛肌、菱形肌與後鋸肌",
    "html": "<p>肩胛骨之間補橫斜肌束，上下另畫肋骨相關纖維；不要把所有鋸肌配同一條神經。</p><p><a href=\"#/subject/anatomy/chapter/muscles2/topic/back-muscles\">前往主題：提肩胛肌、菱形肌與後鋸肌 →</a></p>"
   },
   {
    "id": "muscles2-video-notes-18",
    "title": "18｜65:20–69:20｜背肌層次與神經統整",
    "html": "<p>由淺層肩帶肌往固有背肌理解；固有背肌通常由後支支配。</p><p><a href=\"#/subject/anatomy/chapter/muscles2/topic/back-muscles\">前往主題：背肌層次與神經統整 →</a></p>"
   },
   {
    "id": "muscles2-video-notes-19",
    "title": "19｜69:20–75:00｜前腹壁總圖與腹直肌",
    "html": "<p>畫出左右腹直肌、中央白線與腹股溝下界；腱劃、錐狀肌與白線分開。</p><p><a href=\"#/subject/anatomy/chapter/muscles2/topic/abdominal-muscles\">前往主題：前腹壁總圖與腹直肌 →</a></p>"
   },
   {
    "id": "muscles2-video-notes-20",
    "title": "20｜75:00–80:20｜腹外斜肌腱膜",
    "html": "<p>由側腹向前內方的肌纖維轉成腱膜，從大圖接到包覆腹直肌的小圖。</p><p><a href=\"#/subject/anatomy/chapter/muscles2/topic/abdominal-muscles\">前往主題：腹外斜肌腱膜 →</a></p>"
   },
   {
    "id": "muscles2-video-notes-21",
    "title": "21｜80:20–84:00｜腹內斜肌",
    "html": "<p>新增與腹外斜肌不同走向的纖維；腱膜的前後分層在下方直肌鞘頁逐步拆解。</p><p><a href=\"#/subject/anatomy/chapter/muscles2/topic/rectus-sheath\">前往主題：腹內斜肌 →</a></p>"
   },
   {
    "id": "muscles2-video-notes-22",
    "title": "22｜84:00–90:00｜腹橫肌與腱膜對照",
    "html": "<p>將外、內、橫三層放進同一張腹壁模型；不要把腹橫肌和腹橫筋膜混為一層。</p><p><a href=\"#/subject/anatomy/chapter/muscles2/topic/rectus-sheath\">前往主題：腹橫肌與腱膜對照 →</a></p>"
   },
   {
    "id": "muscles2-video-notes-23",
    "title": "23｜90:00–94:40｜白線、半月線、腱劃",
    "html": "<p>在正面圖補縱向邊界及橫向腱劃，與下一段橫切面互相對照。</p><p><a href=\"#/subject/anatomy/chapter/muscles2/topic/wall-landmarks\">前往主題：白線、半月線、腱劃 →</a></p>"
   },
   {
    "id": "muscles2-video-notes-24",
    "title": "24｜94:40–100:40｜弓狀線以上的橫切層次",
    "html": "<p>由皮膚往腹膜逐層編號；腹內斜肌腱膜分前後，其他兩層分配到相應位置。</p><p><a href=\"#/subject/anatomy/chapter/muscles2/topic/rectus-sheath\">前往主題：弓狀線以上的橫切層次 →</a></p>"
   },
   {
    "id": "muscles2-video-notes-25",
    "title": "25｜100:40–110:20｜弓狀線以下及神經走行",
    "html": "<p>再畫下方橫切面，三層腱膜移到前方；深面筋膜仍在，神經通常行於內斜與腹橫肌間。</p><p><a href=\"#/subject/anatomy/chapter/muscles2/topic/rectus-sheath\">前往主題：弓狀線以下及神經走行 →</a></p>"
   },
   {
    "id": "muscles2-video-notes-26",
    "title": "26｜110:20–1:55:06｜腹股溝與精索包被的起始圖",
    "html": "<p>末段出現鼠蹊部肌層與通道簡圖。僅收錄入門對照；完整疝氣與會陰內容不能據此宣稱已由本片講完。</p><p><a href=\"#/subject/anatomy/chapter/muscles2/topic/inguinal-intro\">前往主題：腹股溝與精索包被的起始圖 →</a></p>"
   }
  ]
 },
 {
  "id": "accessory-suboccipital",
  "title": "副神經肌群與枕下三角",
  "english": "CN XI muscles and suboccipital triangle",
  "summary": "從斜方肌纖維方向，連到SCM、枕下四肌與C1／C2的區別。",
  "sources": [
   "M2VIDEO",
   "M2SUPER",
   "M2BACK",
   "M2NECK",
   "YX2021"
  ],
  "sections": [
   {
    "id": "original-pages",
    "title": "原圖定位與讀圖順序",
    "html": "<p>先看原圖建立位置，再用下方表格整理。原筆記與影片為不同教材；補充內容不當成老師逐字講解。</p><figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-031.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第31頁\"><img src=\"assets/anatomy-notes/pdf-031.webp\" alt=\"奕翔解剖筆記：上半找斜方肌與SCM，下半找枕下三角，PDF第31頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第31頁，含封面。上半找斜方肌與SCM，下半找枕下三角。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "accessory-suboccipital-1",
    "title": "01｜先分兩張地圖",
    "html": "<p>約01:40–11:20。斜方肌是背面大菱形；枕下三角是枕骨與C1、C2之間的小區域；頸後三角則位在SCM、斜方肌與鎖骨之間。三個圖的邊界不同，不要因為都在頸後而合併背。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"肌肉／骨性連接主幹／主要動作／神經\"><table><thead><tr><th scope=\"col\">肌肉</th><th scope=\"col\">骨性連接主幹</th><th scope=\"col\">主要動作</th><th scope=\"col\">神經</th></tr></thead><tbody><tr><td>胸鎖乳突肌 SCM</td><td>胸骨柄、鎖骨內側端 → 乳突／上項線外側</td><td>單側：同側側彎＋對側轉頭；雙側可屈頸，亦涉及上頸伸展</td><td>CN XI運動；C2–C3感覺／本體覺</td></tr><tr><td>斜方肌 Trapezius</td><td>枕部、項韌帶與C7–T12棘突 → 鎖骨外側、肩峰、肩胛棘</td><td>上束上提、中束後收、下束下壓；上下束合作上旋</td><td>CN XI運動；C3–C4本體覺</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>SCM為上一部的銜接補充。雙側收縮不能只用「頭整個向前低」描述所有頸椎節段；須區分下頸與頭頸交界。</div>"
   },
   {
    "id": "accessory-suboccipital-2",
    "title": "02｜枕下四肌：先把C1與C2畫出來",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"肌肉／由哪裡到哪裡／主要作用／是否構成枕下三角\"><table><thead><tr><th scope=\"col\">肌肉</th><th scope=\"col\">由哪裡到哪裡</th><th scope=\"col\">主要作用</th><th scope=\"col\">是否構成枕下三角</th></tr></thead><tbody><tr><td>頭後大直肌 Rectus capitis posterior major</td><td>C2棘突 → 下項線外側</td><td>伸頭、同側旋轉</td><td>是：上內側邊</td></tr><tr><td>頭後小直肌 Rectus capitis posterior minor</td><td>C1後結節 → 下項線內側</td><td>伸頭</td><td>否</td></tr><tr><td>頭上斜肌 Obliquus capitis superior</td><td>C1橫突 → 枕骨</td><td>伸頭、同側側彎</td><td>是：上外側邊</td></tr><tr><td>頭下斜肌 Obliquus capitis inferior</td><td>C2棘突 → C1橫突</td><td>帶C1及頭向同側旋轉</td><td>是：下外側邊</td></tr></tbody></table></div><p>四條主要由枕下神經（C1後支）支配。頭下斜肌的兩端都在椎骨，名字有capitis卻沒有直接附著枕骨，是很好用的辨認點。</p>"
   },
   {
    "id": "accessory-suboccipital-3",
    "title": "03｜通過物與考題線索",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"問法／回答／理由\"><table><thead><tr><th scope=\"col\">問法</th><th scope=\"col\">回答</th><th scope=\"col\">理由</th></tr></thead><tbody><tr><td>枕下三角的重要內容？</td><td>椎動脈V3段、枕下神經及相關靜脈叢</td><td>椎動脈繞過C1後弓再往枕骨大孔</td></tr><tr><td>大枕神經等於枕下神經嗎？</td><td>不同；大枕神經主要是C2後支內側支</td><td>它繞頭下斜肌下緣向上，不能當成C1後支</td></tr><tr><td>聳肩無力最先配哪條神經？</td><td>副神經CN XI與斜方肌</td><td>先看是否另有頭轉動無力及損傷位置</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>本頁為解剖定位練習；不以單一動作無力直接確診神經損傷。</div>"
   }
  ]
 },
 {
  "id": "cervical-fascia",
  "title": "頸筋膜與頸動脈鞘",
  "english": "Cervical fascia and carotid sheath",
  "summary": "用橫切面分外圈、臟器、椎前肌群與血管神經；補上鞘內外與命名限制。",
  "sources": [
   "M2VIDEO",
   "M2FASCIA",
   "M2SCAL",
   "YX2021"
  ],
  "sections": [
   {
    "id": "original-pages",
    "title": "原圖定位與讀圖順序",
    "html": "<p>先看原圖建立位置，再用下方表格整理。原筆記與影片為不同教材；補充內容不當成老師逐字講解。</p><figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-033.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第33頁\"><img src=\"assets/anatomy-notes/pdf-033.webp\" alt=\"奕翔解剖筆記：先定前方氣道／食道，再看後方椎體與兩側頸動脈鞘，PDF第33頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第33頁，含封面。先定前方氣道／食道，再看後方椎體與兩側頸動脈鞘。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "cervical-fascia-1",
    "title": "01｜把層次變成可以指認的區域",
    "html": "<p>約11:20–26:00。先確認：頸前方臟器群、後方脊柱／深頸肌、兩側血管神經。深頸筋膜常用包圍層、氣管前層與椎前層教學；頸動脈鞘是另列的縱向包被。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"結構／包住什麼／在哪裡／怎麼記\"><table><thead><tr><th scope=\"col\">結構</th><th scope=\"col\">包住什麼／在哪裡</th><th scope=\"col\">怎麼記</th></tr></thead><tbody><tr><td>淺筋膜 Superficial fascia</td><td>皮下組織，含頸闊肌</td><td>皮下的「淺」，不同於深筋膜的淺層</td></tr><tr><td>深頸筋膜包圍層 Investing layer</td><td>分開包住SCM與斜方肌等</td><td>先畫外圈，遇兩塊大肌再分開</td></tr><tr><td>氣管前層 Pretracheal layer</td><td>舌骨下肌及前方臟器相關包被</td><td>中前區：肌肉與臟器</td></tr><tr><td>椎前層 Prevertebral layer</td><td>椎體與深頸肌相關區</td><td>後方肌骨支架</td></tr><tr><td>頸動脈鞘 Carotid sheath</td><td>成對、沿頸部縱向</td><td>兩側交通幹線</td></tr></tbody></table></div>"
   },
   {
    "id": "cervical-fascia-2",
    "title": "02｜鞘內、鞘壁、鞘後要分三欄",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"位置／典型構造／常見陷阱\"><table><thead><tr><th scope=\"col\">位置</th><th scope=\"col\">典型構造</th><th scope=\"col\">常見陷阱</th></tr></thead><tbody><tr><td>鞘內</td><td>總／內頸動脈、內頸靜脈、迷走神經</td><td>頸外動脈離開此典型鞘內走向，不一路陪到顱底</td></tr><tr><td>前壁相關</td><td>頸袢可位於或附著鞘前壁</td><td>前壁相關不代表在鞘腔中央</td></tr><tr><td>鞘後、椎前區相關</td><td>頸交感幹</td><td>不把交感幹列為典型頸動脈鞘主要內容物</td></tr></tbody></table></div><p>橫切面上可先把動脈放內側、靜脈放外側，迷走神經放在兩者後方之間。這是典型關係；畫面左右須先確認觀看方向。</p>"
   },
   {
    "id": "cervical-fascia-3",
    "title": "03｜筋膜間隙：先學邊界，再談感染",
    "html": "<p>教材延伸：咽後間隙與danger space的概念用來解釋頸部感染可能往胸腔擴散。不同作者對alar fascia、intercarotid fascia及筋膜連續性的命名並不完全一致。</p><div class=\"study-note teal\"><b>教材核對／補充</b><br>原筆記把三層畫成清楚圈線是學習模型。真實筋膜有融合、變薄與變異；不要由簡圖推成「所有感染必然沿單一路徑」或用固定層數取代實際影像邊界。</div>"
   }
  ]
 },
 {
  "id": "diaphragm",
  "title": "橫膈、三大通道與弓狀韌帶",
  "english": "Diaphragm, openings and arcuate ligaments",
  "summary": "從肌肉附著理解吸氣，將T8／T10／T12與C3–C5分開記。",
  "sources": [
   "M2VIDEO",
   "M2THORAX",
   "M2ABDOMEN",
   "YX2021"
  ],
  "sections": [
   {
    "id": "original-pages",
    "title": "原圖定位與讀圖順序",
    "html": "<p>先看原圖建立位置，再用下方表格整理。原筆記與影片為不同教材；補充內容不當成老師逐字講解。</p><figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-034.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第34頁\"><img src=\"assets/anatomy-notes/pdf-034.webp\" alt=\"奕翔解剖筆記：上方找三大通道，後側依序找膈腳、腰大肌與腰方肌，PDF第34頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第34頁，含封面。上方找三大通道，後側依序找膈腳、腰大肌與腰方肌。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "diaphragm-1",
    "title": "01｜由周邊肌肉拉中央腱",
    "html": "<p>約26:00–29:40，並在36:40後回顧。橫膈分隔胸腹腔，是主要吸氣肌；周邊肌纖維朝中央腱聚集。收縮時穹頂下降、胸腔垂直徑增加。安靜呼氣多靠彈性回縮，不要把橫膈放到主動呼氣肌。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"部分／主要附著／讀圖要點\"><table><thead><tr><th scope=\"col\">部分</th><th scope=\"col\">主要附著</th><th scope=\"col\">讀圖要點</th></tr></thead><tbody><tr><td>胸骨部</td><td>劍突後面</td><td>前方小部分</td></tr><tr><td>肋部</td><td>下六肋及肋軟骨內面相關區</td><td>與腹橫肌附著區接近</td></tr><tr><td>腰部／膈腳</td><td>右腳常至L1–L3，左腳常至L1–L2</td><td>右側常較長；範圍有差異</td></tr><tr><td>中央腱 Central tendon</td><td>周邊肌纖維匯集的腱性部分</td><td>下腔靜脈孔位於中央腱相關區</td></tr></tbody></table></div>"
   },
   {
    "id": "diaphragm-2",
    "title": "02｜8、10、12：位置與通過物成對背",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"高度／通道／主要內容／空間理解\"><table><thead><tr><th scope=\"col\">高度</th><th scope=\"col\">通道</th><th scope=\"col\">主要內容</th><th scope=\"col\">空間理解</th></tr></thead><tbody><tr><td>T8</td><td>Caval opening 下腔靜脈孔</td><td>下腔靜脈；右膈神經終末分支等</td><td>中央腱內</td></tr><tr><td>T10</td><td>Esophageal hiatus 食道裂孔</td><td>食道、前後迷走幹、相關小血管／淋巴</td><td>肌性部分，主要與右膈腳有關</td></tr><tr><td>T12</td><td>Aortic hiatus 主動脈裂孔</td><td>主動脈、胸管；奇靜脈走行可變</td><td>兩腳間、正中弓狀韌帶後方，不是中央腱打洞</td></tr></tbody></table></div><p>記法：<b>8靜、10食、12主</b>。這是通道高度；支配橫膈運動的卻是頸部來的膈神經C3–C5。把「高度」和「神經根」用不同顏色寫。</p>"
   },
   {
    "id": "diaphragm-3",
    "title": "03｜三條弓狀韌帶：看下面跨過誰",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"韌帶／跨過／連接／定位口訣\"><table><thead><tr><th scope=\"col\">韌帶</th><th scope=\"col\">跨過／連接</th><th scope=\"col\">定位口訣</th></tr></thead><tbody><tr><td>正中弓狀 Median arcuate</td><td>兩側膈腳之間，跨主動脈前上方</td><td>正中配主動脈</td></tr><tr><td>內側弓狀 Medial arcuate</td><td>跨腰大肌上方筋膜弓</td><td>內側配腰大肌</td></tr><tr><td>外側弓狀 Lateral arcuate</td><td>跨腰方肌，由腰椎橫突相關區向第12肋</td><td>外側配腰方肌</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>弓狀韌帶的median與medial只差一個字母；中文「正中」與「內側」也不可互換。膈神經提供主要運動；周邊感覺另有下位肋間神經參與，不將所有感覺來源簡化為C3–C5。</div>"
   }
  ]
 },
 {
  "id": "posterior-wall",
  "title": "後腹壁：腰大肌、髂肌與腰方肌",
  "english": "Posterior abdominal wall",
  "summary": "用是否跨髖關節，區分抬腿與固定第12肋；腰神經叢作教材延伸。",
  "sources": [
   "M2VIDEO",
   "M2ABDOMEN",
   "YX2021"
  ],
  "sections": [
   {
    "id": "original-pages",
    "title": "原圖定位與讀圖順序",
    "html": "<p>先看原圖建立位置，再用下方表格整理。原筆記與影片為不同教材；補充內容不當成老師逐字講解。</p><figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-034.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第34頁\"><img src=\"assets/anatomy-notes/pdf-034.webp\" alt=\"奕翔解剖筆記：先找腰椎，再辨腰大肌、髂肌、腰方肌與第12肋，PDF第34頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第34頁，含封面。先找腰椎，再辨腰大肌、髂肌、腰方肌與第12肋。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "posterior-wall-1",
    "title": "01｜先問肌腱有沒有跨過髖關節",
    "html": "<p>約29:40–36:40。腰大肌與髂肌往下匯成髂腰肌，附著股骨小轉子；腰方肌留在髂嵴、腰椎橫突與第12肋之間。這一點就能拆開「屈髖」與「軀幹側彎／固定肋骨」。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"肌肉／主要骨端／主要作用／神經主幹\"><table><thead><tr><th scope=\"col\">肌肉</th><th scope=\"col\">主要骨端</th><th scope=\"col\">主要作用</th><th scope=\"col\">神經主幹</th></tr></thead><tbody><tr><td>腰大肌 Psoas major</td><td>腰椎椎體、椎間盤及橫突相關區 → 股骨小轉子</td><td>屈髖；股骨固定時參與軀幹／腰椎動作</td><td>腰神經前支直接肌支</td></tr><tr><td>髂肌 Iliacus</td><td>髂窩 → 與腰大肌共同到小轉子</td><td>屈髖</td><td>股神經</td></tr><tr><td>腰方肌 Quadratus lumborum</td><td>髂嵴／髂腰韌帶 → 第12肋與L1–L4橫突</td><td>軀幹同側側彎、固定第12肋</td><td>肋下神經及腰神經前支</td></tr><tr><td>腰小肌 Psoas minor</td><td>T12–L1相關區 → 髂恥隆起／筋膜相關區</td><td>弱屈軀幹；不屬髂腰肌主要屈髖肌腱</td><td>腰神經前支；可缺如</td></tr></tbody></table></div>"
   },
   {
    "id": "posterior-wall-2",
    "title": "02｜神經叢如何放回腰大肌",
    "html": "<p>以下為教材延伸，不以畫面上的每一條線宣稱逐支辨認。腰神經叢位在腰大肌內／後部相關區，重要分支由不同邊緣離開。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"相對腰大肌／可先記的神經／功能方向\"><table><thead><tr><th scope=\"col\">相對腰大肌</th><th scope=\"col\">可先記的神經</th><th scope=\"col\">功能方向</th></tr></thead><tbody><tr><td>外側緣</td><td>股神經、股外側皮神經等</td><td>股神經：前大腿運動與感覺；股外側皮神經：外側大腿皮感</td></tr><tr><td>內側緣</td><td>閉孔神經、腰薦幹等</td><td>閉孔神經：大腿內收肌群為主</td></tr><tr><td>前面穿出</td><td>生殖股神經</td><td>生殖支與股支的分布另在鼠蹊部學習</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>髂腰肌是一組肌肉，並非兩條都只由股神經支配；腰大肌的直接腰神經肌支與髂肌的股神經應分欄。</div>"
   },
   {
    "id": "posterior-wall-3",
    "title": "03｜用動作定位，而非只背名字",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"題目動作／位置／先想到／核對點\"><table><thead><tr><th scope=\"col\">題目動作／位置</th><th scope=\"col\">先想到</th><th scope=\"col\">核對點</th></tr></thead><tbody><tr><td>抬起大腿、屈髖</td><td>髂腰肌</td><td>肌腱跨過髖前方到小轉子</td></tr><tr><td>固定第12肋、同側側彎</td><td>腰方肌</td><td>由髂嵴連到第12肋</td></tr><tr><td>腰大肌前表面出現一條神經</td><td>生殖股神經</td><td>不是股神經的典型離開方向</td></tr><tr><td>小轉子附著</td><td>髂腰肌腱</td><td>不能換成股骨大轉子</td></tr></tbody></table></div>"
   }
  ]
 },
 {
  "id": "scalenes",
  "title": "斜角肌與頸根部神經血管",
  "english": "Scalenes and root-of-neck relations",
  "summary": "前中到第1肋、後到第2肋；用前斜角肌分開靜脈、動脈與臂神經叢。",
  "sources": [
   "M2VIDEO",
   "M2NECK",
   "M2SCAL",
   "M2SCALRES",
   "YX2021"
  ],
  "sections": [
   {
    "id": "original-pages",
    "title": "原圖定位與讀圖順序",
    "html": "<p>先看原圖建立位置，再用下方表格整理。原筆記與影片為不同教材；補充內容不當成老師逐字講解。</p><figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-034.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第34頁\"><img src=\"assets/anatomy-notes/pdf-034.webp\" alt=\"奕翔解剖筆記：下半先找前斜角肌，再分肌前與肌後，PDF第34頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第34頁，含封面。下半先找前斜角肌，再分肌前與肌後。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "scalenes-1",
    "title": "01｜先記到哪根肋骨",
    "html": "<p>約42:00–51:40。頸部固定時，斜角肌可抬高上位肋骨、協助吸氣；肋骨固定時參與頸部動作。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"肌肉／頸椎端主幹／肋骨端／學習重點\"><table><thead><tr><th scope=\"col\">肌肉</th><th scope=\"col\">頸椎端主幹</th><th scope=\"col\">肋骨端</th><th scope=\"col\">學習重點</th></tr></thead><tbody><tr><td>前斜角肌 Anterior scalene</td><td>C3–C6橫突前結節</td><td>第1肋斜角肌結節</td><td>最重要的神經血管分隔地標</td></tr><tr><td>中斜角肌 Middle scalene</td><td>多個頸椎橫突後結節相關區</td><td>第1肋、動脈溝後方</td><td>與前斜角肌形成斜角肌間隙</td></tr><tr><td>後斜角肌 Posterior scalene</td><td>下位頸椎橫突後結節相關區</td><td>第2肋</td><td>與前、中肌分開記肋骨數</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>前、中配1，後配2。神經供應為頸神經前支，節段列法可因教材與肌肉部分不同；旋轉動作也受節段與姿勢影響，不用一句「全都對側轉」概括。</div>"
   },
   {
    "id": "scalenes-2",
    "title": "02｜肌前、肌間、肌表面三個位置",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"構造／相對於前斜角肌／圖上如何放\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">相對於前斜角肌</th><th scope=\"col\">圖上如何放</th></tr></thead><tbody><tr><td>鎖骨下靜脈 Subclavian vein</td><td>前方</td><td>跨第1肋、在肌前通過</td></tr><tr><td>鎖骨下動脈 Subclavian artery</td><td>後方，經前／中斜角肌之間</td><td>不要放進靜脈的前方通道</td></tr><tr><td>臂神經叢根／幹 Brachial plexus</td><td>前與中斜角肌之間</td><td>與動脈同一個間隙相關</td></tr><tr><td>膈神經 Phrenic nerve</td><td>沿前斜角肌前表面下降</td><td>不列為斜角肌間隙內容</td></tr></tbody></table></div><p>記法是<b>靜脈在前、動脈神經叢在間、膈神經貼前面走</b>。最後一定說出比較基準是前斜角肌；只背「前後」會失去座標。</p>"
   },
   {
    "id": "scalenes-3",
    "title": "03｜把解剖關係轉成判讀線索",
    "html": "<p>教材延伸：斜角肌間隙壓迫較容易連到臂神經叢與鎖骨下動脈；鎖骨下靜脈雖也可能在胸廓出口其他部位受壓，卻不是典型斜角肌間隙內的結構。</p><div class=\"study-note teal\"><b>教材核對／補充</b><br>存在肌束與血管走行變異。這裡是典型國考關係，不是以「手麻」一項症狀就診斷胸廓出口症候群。</div>"
   }
  ]
 },
 {
  "id": "intercostals",
  "title": "三層肋間肌與VAN",
  "english": "Intercostal layers and neurovascular plane",
  "summary": "把肌纖維方向、膜性延續與主神經血管束放進同一張胸壁橫切面。",
  "sources": [
   "M2VIDEO",
   "M2THORAX",
   "YX2021"
  ],
  "sections": [
   {
    "id": "original-pages",
    "title": "原圖定位與讀圖順序",
    "html": "<p>先看原圖建立位置，再用下方表格整理。原筆記與影片為不同教材；補充內容不當成老師逐字講解。</p><figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-034.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第34頁\"><img src=\"assets/anatomy-notes/pdf-034.webp\" alt=\"奕翔解剖筆記：下方看外／內肋間肌方向，PDF第34頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第34頁，含封面。下方看外／內肋間肌方向。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure><figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-035.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第35頁\"><img src=\"assets/anatomy-notes/pdf-035.webp\" alt=\"奕翔解剖筆記：用內肋間肌與最內肋間肌定位VAN，PDF第35頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第35頁，含封面。用內肋間肌與最內肋間肌定位VAN。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "intercostals-1",
    "title": "01｜先層次，再纖維方向",
    "html": "<p>約51:40–55:20。由胸壁外面往內：外肋間肌 → 內肋間肌 → 最內肋間肌，後面再到胸內筋膜與壁層胸膜。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"肌層／典型方向／分布／膜性延續／呼吸重點\"><table><thead><tr><th scope=\"col\">肌層</th><th scope=\"col\">典型方向／分布</th><th scope=\"col\">膜性延續</th><th scope=\"col\">呼吸重點</th></tr></thead><tbody><tr><td>外肋間 External intercostal</td><td>向前下，類似手插口袋</td><td>前方肋軟骨交界附近轉為外肋間膜</td><td>多協助抬肋吸氣，也穩定肋間隙</td></tr><tr><td>內肋間 Internal intercostal</td><td>與外層交叉，較向後下</td><td>肋角後方轉為內肋間膜</td><td>骨間部助用力呼氣；軟骨間部可助吸氣</td></tr><tr><td>最內肋間 Innermost intercostal</td><td>方向近內肋間肌、層次更深</td><td>不是完整連續厚板</td><td>與內肋間肌共同穩定胸壁，功能依部位而異</td></tr></tbody></table></div>"
   },
   {
    "id": "intercostals-2",
    "title": "02｜VAN同時要答兩個方向",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"問題／答案／為何常考錯\"><table><thead><tr><th scope=\"col\">問題</th><th scope=\"col\">答案</th><th scope=\"col\">為何常考錯</th></tr></thead><tbody><tr><td>由上到下？</td><td>V靜脈、A動脈、N神經</td><td>這是肋溝主束，不是三層肌的名稱順序</td></tr><tr><td>在何肌層之間？</td><td>內肋間肌與最內肋間肌之間</td><td>不能寫成外與內之間</td></tr><tr><td>靠哪根肋骨？</td><td>上方肋骨下緣的肋溝</td><td>神經通常最下，較缺少肋骨保護</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>肋間還有側支、前後分支及個體差異。學習穿刺相關解剖時，可理解為何避開主束；不能把肋骨上緣說成絕對無血管的安全線。</div>"
   },
   {
    "id": "intercostals-3",
    "title": "03｜和腹壁的神經平面一起比較",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"部位／主要神經血管平面／記憶方式\"><table><thead><tr><th scope=\"col\">部位</th><th scope=\"col\">主要神經血管平面</th><th scope=\"col\">記憶方式</th></tr></thead><tbody><tr><td>胸壁</td><td>內肋間與最內肋間之間</td><td>中、深兩層之間</td></tr><tr><td>前外側腹壁</td><td>腹內斜與腹橫肌之間</td><td>也是中、深兩層之間，但肌名不同</td></tr></tbody></table></div><p>再加一個例外：內肋間肌不同部分的呼吸作用不完全一樣，所以考題若指定interchondral與interosseous，必須讀完整。</p>"
   }
  ]
 },
 {
  "id": "serratus",
  "title": "前鋸肌、翼狀肩胛與神經比較",
  "english": "Serratus anterior and scapular winging",
  "summary": "先理解把肩胛骨貼回胸壁，再分長胸神經、CN XI與肩胛背神經。",
  "sources": [
   "M2VIDEO",
   "M2SUPER",
   "YX2021"
  ],
  "sections": [
   {
    "id": "original-pages",
    "title": "原圖定位與讀圖順序",
    "html": "<p>先看原圖建立位置，再用下方表格整理。原筆記與影片為不同教材；補充內容不當成老師逐字講解。</p><figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-035.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第35頁\"><img src=\"assets/anatomy-notes/pdf-035.webp\" alt=\"奕翔解剖筆記：上方看前鋸肌與翼狀肩胛的對照，PDF第35頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第35頁，含封面。上方看前鋸肌與翼狀肩胛的對照。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "serratus-1",
    "title": "01｜把肩胛骨當成貼在球面的板子",
    "html": "<p>約55:20–59:20。前鋸肌由上位肋骨外側向後包繞胸壁，到肩胛骨內側緣的前面；這條拉力使肩胛骨貼近胸壁，也讓它前引與上旋。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"肌肉／附著主幹／動作／神經\"><table><thead><tr><th scope=\"col\">肌肉</th><th scope=\"col\">附著主幹</th><th scope=\"col\">動作</th><th scope=\"col\">神經</th></tr></thead><tbody><tr><td>前鋸肌 Serratus anterior</td><td>約第1–8／9肋外側 → 肩胛骨內側緣前面</td><td>前引、貼胸壁；下部纖維參與上旋</td><td>長胸神經 Long thoracic，C5–C7</td></tr><tr><td>斜方肌 Trapezius</td><td>後正中 → 肩帶</td><td>後收、上提／下壓；與前鋸肌合作上旋</td><td>CN XI</td></tr><tr><td>菱形肌 Rhomboids</td><td>頸胸椎棘突 → 肩胛骨內側緣</td><td>後收、下旋與穩定</td><td>肩胛背神經 Dorsal scapular，常以C5記</td></tr></tbody></table></div>"
   },
   {
    "id": "serratus-2",
    "title": "02｜翼狀肩胛不能只背一條神經",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"情境／表現／典型聯想／需再比什麼\"><table><thead><tr><th scope=\"col\">情境／表現</th><th scope=\"col\">典型聯想</th><th scope=\"col\">需再比什麼</th></tr></thead><tbody><tr><td>推牆時內側緣明顯翹起</td><td>前鋸肌／長胸神經</td><td>前引及上旋功能</td></tr><tr><td>肩下垂、聳肩無力</td><td>斜方肌／CN XI</td><td>肩胛骨位置與頸轉動</td></tr><tr><td>肩胛後收無力</td><td>菱形肌／肩胛背神經</td><td>須與斜方肌等其他後收肌一起評估</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>這是教材延伸的典型組合。內側型與外側型翼狀肩胛有助定位，但實際表現會重疊；不能以一張靜態圖替代肌力與神經評估。</div>"
   },
   {
    "id": "serratus-3",
    "title": "03｜最省力的動作記憶",
    "html": "<p>做出往前推的姿勢，想像前鋸肌把肩胛骨沿胸壁帶向前。再把手抬高，想像前鋸肌與斜方肌共同讓關節盂朝上。前引與上旋是不同方向，卻可由同一肌的不同纖維協調參與。</p>"
   }
  ]
 },
 {
  "id": "back-muscles",
  "title": "背肌分層、肩胛動作與三角區",
  "english": "Back muscle layers and triangles",
  "summary": "由闊背肌與菱形肌往深層走；用前支／後支區分外來背肌與固有背肌。",
  "sources": [
   "M2VIDEO",
   "M2SUPER",
   "M2BACK",
   "YX2021"
  ],
  "sections": [
   {
    "id": "original-pages",
    "title": "原圖定位與讀圖順序",
    "html": "<p>先看原圖建立位置，再用下方表格整理。原筆記與影片為不同教材；補充內容不當成老師逐字講解。</p><figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-038.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第38頁\"><img src=\"assets/anatomy-notes/pdf-038.webp\" alt=\"奕翔解剖筆記：淺中層肌肉、聽診三角與腰三角放在同一張背面圖，PDF第38頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第38頁，含封面。淺中層肌肉、聽診三角與腰三角放在同一張背面圖。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "back-muscles-1",
    "title": "01｜淺層肩帶肌：終點決定你在拉誰",
    "html": "<p>約59:20–69:20。先看肌肉終點：到肱骨的闊背肌主要動肩關節；到肩胛骨的菱形肌、提肩胛肌則主要移動肩胛骨。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"肌肉／主要附著終點／主要作用／神經\"><table><thead><tr><th scope=\"col\">肌肉</th><th scope=\"col\">主要附著終點</th><th scope=\"col\">主要作用</th><th scope=\"col\">神經</th></tr></thead><tbody><tr><td>闊背肌 Latissimus dorsi</td><td>肱骨結節間溝底</td><td>伸展、內收、內旋肱骨</td><td>胸背神經 Thoracodorsal，C6–C8</td></tr><tr><td>提肩胛肌 Levator scapulae</td><td>肩胛上角與內側緣上部</td><td>上提、下旋肩胛骨</td><td>肩胛背神經與C3–C4肌支</td></tr><tr><td>小菱形肌 Rhomboid minor</td><td>肩胛棘根部內側緣</td><td>後收、穩定與下旋</td><td>肩胛背神經</td></tr><tr><td>大菱形肌 Rhomboid major</td><td>肩胛棘以下內側緣</td><td>後收、穩定與下旋</td><td>肩胛背神經</td></tr><tr><td>上／下後鋸肌 Serratus posterior</td><td>上位／下位肋骨</td><td>傳統描述分抬肋／壓肋，實際呼吸貢獻有限</td><td>胸神經前支／肋間神經相關支</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>後鋸肌不是前鋸肌的上下兩半，神經不同。不要把「在背部」直接等同「脊神經後支」。</div>"
   },
   {
    "id": "back-muscles-2",
    "title": "02｜深背肌：外肋、中長、內棘",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"群／由外到內／由淺到深／功能與神經\"><table><thead><tr><th scope=\"col\">群</th><th scope=\"col\">由外到內／由淺到深</th><th scope=\"col\">功能與神經</th></tr></thead><tbody><tr><td>豎脊肌 Erector spinae</td><td>外：髂肋肌Iliocostalis；中：最長肌Longissimus；內：棘肌Spinalis</td><td>伸展及同側側彎；主要為脊神經後支</td></tr><tr><td>橫突棘肌群 Transversospinalis</td><td>半棘肌Semispinalis、多裂肌Multifidus、迴旋肌Rotatores</td><td>深層節段控制；雙側伸展、單側常參與對側旋轉；後支</td></tr><tr><td>夾肌 Splenius</td><td>頭夾肌、頸夾肌在後頸較淺的固有肌層</td><td>雙側伸展，單側同側旋轉；後支</td></tr></tbody></table></div><p>理解法：肩胛肌群是帶著上肢任務來到背面；固有背肌才是沿脊柱工作的局部系統。兩者神經來源不可只靠位置推斷。</p>"
   },
   {
    "id": "back-muscles-3",
    "title": "03｜兩個三角區先找三條邊",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"區域／主要邊界／底／用途\"><table><thead><tr><th scope=\"col\">區域</th><th scope=\"col\">主要邊界</th><th scope=\"col\">底／用途</th></tr></thead><tbody><tr><td>聽診三角 Triangle of auscultation</td><td>內側斜方肌、下方闊背肌、外側肩胛骨內側緣</td><td>底部有菱形大肌與胸壁；手臂前抱可使區域較易顯露</td></tr><tr><td>下腰三角 Inferior lumbar triangle／Petit</td><td>後內側闊背肌、前外側腹外斜肌、下方髂嵴</td><td>底部腹內斜肌；是潛在薄弱區</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>上腰三角（Grynfeltt）是另一個區域，邊界不同；原筆記圖上的「腰三角」在此先對應下腰三角，不把二者互換。</div>"
   }
  ]
 },
 {
  "id": "abdominal-muscles",
  "title": "前外側腹壁肌：方向、附著與動作",
  "english": "Anterolateral abdominal muscles",
  "summary": "從外、內、橫三層方向理解旋轉，補上腹直肌、錐狀肌與神經平面。",
  "sources": [
   "M2VIDEO",
   "M2ABDOMEN",
   "M2WALL",
   "YX2021"
  ],
  "sections": [
   {
    "id": "original-pages",
    "title": "原圖定位與讀圖順序",
    "html": "<p>先看原圖建立位置，再用下方表格整理。原筆記與影片為不同教材；補充內容不當成老師逐字講解。</p><figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-036.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第36頁\"><img src=\"assets/anatomy-notes/pdf-036.webp\" alt=\"奕翔解剖筆記：正面圖認白線與腹直肌，左側小圖比較三層扁肌，PDF第36頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第36頁，含封面。正面圖認白線與腹直肌，左側小圖比較三層扁肌。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "abdominal-muscles-1",
    "title": "01｜三層扁肌與兩條縱向肌",
    "html": "<p>約69:20–90:00。腹壁肌可支持臟器、控制軀幹、增加腹內壓；咳嗽、用力呼氣與排便需要協調收縮。此處「增壓」不等於各肌都直接負責呼吸的同一階段。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"肌肉／主要附著主幹／纖維／動作理解\"><table><thead><tr><th scope=\"col\">肌肉</th><th scope=\"col\">主要附著主幹</th><th scope=\"col\">纖維／動作理解</th></tr></thead><tbody><tr><td>腹外斜肌 External oblique，EO</td><td>第5–12肋 → 白線、髂嵴、恥骨相關區</td><td>向前下；單側使軀幹向對側旋轉</td></tr><tr><td>腹內斜肌 Internal oblique，IO</td><td>胸腰筋膜、髂嵴、腹股溝韌帶 → 下位肋骨、白線與恥骨相關區</td><td>多向前上；單側使軀幹向同側旋轉</td></tr><tr><td>腹橫肌 Transversus abdominis，TA</td><td>下位肋軟骨、胸腰筋膜、髂嵴等 → 白線與恥骨相關區</td><td>主要橫向，像腹部束帶，壓縮支持腹內容物</td></tr><tr><td>腹直肌 Rectus abdominis</td><td>恥骨 → 劍突與第5–7肋軟骨</td><td>屈軀幹、穩定骨盆，左右位於白線兩側</td></tr><tr><td>錐狀肌 Pyramidalis</td><td>恥骨前方 → 下段白線</td><td>拉緊白線；可缺如，不是腹直肌的另一個名字</td></tr></tbody></table></div>"
   },
   {
    "id": "abdominal-muscles-2",
    "title": "02｜轉向右邊時，哪兩邊合作？",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"動作／主要組合／回想方法\"><table><thead><tr><th scope=\"col\">動作</th><th scope=\"col\">主要組合</th><th scope=\"col\">回想方法</th></tr></thead><tbody><tr><td>軀幹向右旋轉</td><td>左腹外斜＋右腹內斜</td><td>外斜拉向對側，內斜拉向同側</td></tr><tr><td>軀幹向左旋轉</td><td>右腹外斜＋左腹內斜</td><td>把左右互換，再用動作檢查</td></tr><tr><td>軀幹前屈</td><td>兩側腹直肌及腹斜肌協作</td><td>胸骨靠近恥骨的方向</td></tr><tr><td>腹部加壓／穩定</td><td>三層扁肌與其他核心結構協作</td><td>腹橫肌想成束帶，避免只背成旋轉肌</td></tr></tbody></table></div><p>動作記憶要講清楚誰相對誰旋轉。本頁以骨盆相對固定、胸廓轉動為主，不能將站姿、固定端不同的動作描述硬套。</p>"
   },
   {
    "id": "abdominal-muscles-3",
    "title": "03｜神經怎麼進腹壁",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"區域／構造／主要神經概念／不能混的地方\"><table><thead><tr><th scope=\"col\">區域／構造</th><th scope=\"col\">主要神經概念</th><th scope=\"col\">不能混的地方</th></tr></thead><tbody><tr><td>大部分前外側腹壁</td><td>下位胸腹神經、肋下神經；下段另有L1支</td><td>不同肌與來源的節段列法略異</td></tr><tr><td>腹內斜與腹橫肌之間</td><td>神經血管走行的重要平面</td><td>TAP平面：不是EO與IO之間</td></tr><tr><td>腹直肌</td><td>由側方進鞘的節段神經支</td><td>進鞘後分支到肌肉，不是一條神經由上管到底</td></tr><tr><td>下腹部L1</td><td>髂腹下與髂鼠蹊神經</td><td>與下一頁鼠蹊部通道相連</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>本頁的肌肉動作表為依附著整理的教材補充，不宣稱每一項動作均在影片口頭逐一提到。</div>"
   }
  ]
 },
 {
  "id": "wall-landmarks",
  "title": "白線、半月線、腱劃與血管",
  "english": "Linea alba, semilunar line and epigastric vessels",
  "summary": "將縱向中線、縱向外界、橫向腱劃與弓狀線分開；血管內容為延伸。",
  "sources": [
   "M2VIDEO",
   "M2LAND",
   "M2WALL",
   "YX2021"
  ],
  "sections": [
   {
    "id": "original-pages",
    "title": "原圖定位與讀圖順序",
    "html": "<p>先看原圖建立位置，再用下方表格整理。原筆記與影片為不同教材；補充內容不當成老師逐字講解。</p><figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-036.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第36頁\"><img src=\"assets/anatomy-notes/pdf-036.webp\" alt=\"奕翔解剖筆記：大圖看兩條縱線，小橫切面再找後鞘下緣，PDF第36頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第36頁，含封面。大圖看兩條縱線，小橫切面再找後鞘下緣。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "wall-landmarks-1",
    "title": "01｜四個名字不能只靠「線」去背",
    "html": "<p>約90:00–94:40；後續直肌鞘段落會再次回顧。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"名詞／方向／位置／本質／容易混誰\"><table><thead><tr><th scope=\"col\">名詞</th><th scope=\"col\">方向／位置</th><th scope=\"col\">本質</th><th scope=\"col\">容易混誰</th></tr></thead><tbody><tr><td>白線 Linea alba</td><td>正中縱向，劍突至恥骨聯合</td><td>左右扁肌腱膜交織</td><td>不是一條肌腹</td></tr><tr><td>半月線 Linea semilunaris</td><td>腹直肌外側緣相關的弧形縱界</td><td>腱膜與直肌鞘外側界相關</td><td>不是橫向弓狀線</td></tr><tr><td>腱劃 Tendinous intersections</td><td>橫向分隔腹直肌肌腹</td><td>與前鞘附著相關的腱性帶</td><td>不等於後鞘終點</td></tr><tr><td>弓狀線 Arcuate line</td><td>腹直肌後面、臍下某高度</td><td>腱膜性後鞘的下緣</td><td>位置與形態可變，不固定為臍水平</td></tr></tbody></table></div>"
   },
   {
    "id": "wall-landmarks-2",
    "title": "02｜血供從上、下兩條路接起來",
    "html": "<p>教材延伸：腹壁上、下腹壁血管與直肌鞘有關，這也能幫助理解鼠蹊環的定位。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"血管／主要來源／走行記憶\"><table><thead><tr><th scope=\"col\">血管</th><th scope=\"col\">主要來源</th><th scope=\"col\">走行記憶</th></tr></thead><tbody><tr><td>上腹壁動脈 Superior epigastric</td><td>內胸動脈終末分支</td><td>由上進直肌鞘，沿腹直肌深面</td></tr><tr><td>下腹壁動脈 Inferior epigastric</td><td>外髂動脈</td><td>由下往上，進入直肌鞘與上方分支吻合</td></tr><tr><td>淺腹壁動脈 Superficial epigastric</td><td>股動脈</td><td>主要在較淺皮下層，不能代替下腹壁動脈作深環內外地標</td></tr></tbody></table></div>"
   },
   {
    "id": "wall-landmarks-3",
    "title": "03｜只看正面圖，為何會背錯？",
    "html": "<p>腱劃畫在正面很顯眼，弓狀線卻是後鞘深面的下緣。把兩個都畫成一條橫線時，最容易誤認為同一構造。請另畫腹直肌橫切面，再把後鞘向下終止的位置標出來。</p><div class=\"study-note teal\"><b>教材核對／補充</b><br>白線是相對少大血管的中線腱膜區，不是完全沒有血管；弓狀線「常在臍下」只供概略定位，精確高度不能當固定比例。</div>"
   }
  ]
 },
 {
  "id": "rectus-sheath",
  "title": "腹直肌鞘：弓狀線上下逐層拆解",
  "english": "Rectus sheath above and below the arcuate line",
  "summary": "把外、內、橫三層腱膜重新分配；明確區分後鞘、腹橫筋膜與腹膜。",
  "sources": [
   "M2VIDEO",
   "M2WALL",
   "M2LAND",
   "M2ARCUATE",
   "YX2021"
  ],
  "sections": [
   {
    "id": "original-pages",
    "title": "原圖定位與讀圖順序",
    "html": "<p>先看原圖建立位置，再用下方表格整理。原筆記與影片為不同教材；補充內容不當成老師逐字講解。</p><figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-036.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第36頁\"><img src=\"assets/anatomy-notes/pdf-036.webp\" alt=\"奕翔解剖筆記：右側上下兩張橫切面是本頁核心：先找肌腹，再數前後腱膜，PDF第36頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第36頁，含封面。右側上下兩張橫切面是本頁核心：先找肌腹，再數前後腱膜。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "rectus-sheath-1",
    "title": "01｜肋緣以下、弓狀線以上：先讓內斜腱膜分叉",
    "html": "<p>約94:40–100:40。此處的「以上」特指肋緣以下的典型腹壁區，不把最上方肋軟骨區也套進同一模型。先把腹直肌畫成圓，再將IO腱膜分成前後兩葉。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"哪一面／腱膜組成／怎麼理解\"><table><thead><tr><th scope=\"col\">哪一面</th><th scope=\"col\">腱膜組成</th><th scope=\"col\">怎麼理解</th></tr></thead><tbody><tr><td>前鞘</td><td>EO腱膜＋IO前葉</td><td>外斜在前，內斜一半到前</td></tr><tr><td>後鞘</td><td>IO後葉＋TA腱膜</td><td>內斜另一半在後，腹橫在後</td></tr><tr><td>後鞘更深面</td><td>腹橫筋膜 → 腹膜外組織 → 壁層腹膜</td><td>這些層仍獨立存在，不合稱為腹直肌後鞘</td></tr></tbody></table></div><p><b>先畫內斜分叉，再補外前、橫後。</b>這比記「前幾層後幾層」更不容易在不同高度失效。</p>"
   },
   {
    "id": "rectus-sheath-2",
    "title": "02｜弓狀線以下：三層腱膜全部到前面",
    "html": "<p>約100:40–110:20。從上往下走，腱膜性後鞘在弓狀線終止；三層扁肌腱膜均到腹直肌前方。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"結構／弓狀線以上的典型區／弓狀線以下\"><table><thead><tr><th scope=\"col\">結構</th><th scope=\"col\">弓狀線以上的典型區</th><th scope=\"col\">弓狀線以下</th></tr></thead><tbody><tr><td>EO腱膜</td><td>前方</td><td>前方</td></tr><tr><td>IO腱膜</td><td>分前後兩葉</td><td>前方</td></tr><tr><td>TA腱膜</td><td>後方</td><td>前方</td></tr><tr><td>腹直肌後面是否有腱膜性後鞘？</td><td>有</td><td>無</td></tr><tr><td>腹橫筋膜與腹膜外組織還在嗎？</td><td>在</td><td>仍在</td></tr><tr><td>是否等於腹直肌直接貼腹腔？</td><td>不是</td><td>也不是</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>「後鞘消失」不是「後面全部消失」。完整句子：弓狀線以下無腱膜性後鞘，腹直肌深面仍有腹橫筋膜、腹膜外組織與壁層腹膜。</div>"
   },
   {
    "id": "rectus-sheath-3",
    "title": "03｜由皮膚到腹膜，分三條穿越路徑",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"路徑／由淺到深的主幹／關鍵分別\"><table><thead><tr><th scope=\"col\">路徑</th><th scope=\"col\">由淺到深的主幹</th><th scope=\"col\">關鍵分別</th></tr></thead><tbody><tr><td>側腹、避開腹直肌</td><td>皮膚 → 皮下淺筋膜 → EO → IO → TA → 腹橫筋膜 → 腹膜外組織 → 壁層腹膜</td><td>神經血管常在IO與TA之間</td></tr><tr><td>穿腹直肌、弓狀線以上典型區</td><td>皮膚 → 皮下層 → 前鞘 → 腹直肌 → 後鞘 → 腹橫筋膜 → 腹膜外組織 → 壁層腹膜</td><td>有前後兩個腱膜性鞘</td></tr><tr><td>穿腹直肌、弓狀線以下</td><td>皮膚 → 皮下層 → 三層腱膜構成的前鞘 → 腹直肌 → 腹橫筋膜 → 腹膜外組織 → 壁層腹膜</td><td>後面少的是腱膜性後鞘</td></tr></tbody></table></div><p>下腹淺筋膜常再分Camper脂肪層與Scarpa膜性層。由哪個位置穿過腹壁會改變看到的結構，不能把側腹三層「肌腹」硬套到正中白線。</p>"
   },
   {
    "id": "rectus-sheath-4",
    "title": "04｜上端例外與常見考法",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"考法／作答要點／陷阱\"><table><thead><tr><th scope=\"col\">考法</th><th scope=\"col\">作答要點</th><th scope=\"col\">陷阱</th></tr></thead><tbody><tr><td>肋緣以上也一定有IO後葉＋TA後鞘嗎？</td><td>不能；上部腹直肌與肋軟骨／肋間結構直接相關，鞘型不同</td><td>「弓狀線以上」需先限定區域</td></tr><tr><td>腹橫肌能否與腹橫筋膜互換？</td><td>不能，一個是肌肉／腱膜，另一個是深面筋膜</td><td>都含transversus／transversalis而混背</td></tr><tr><td>弓狀線在哪個固定百分比？</td><td>高度與形態有個體差異，先辨定義</td><td>不要背成每個人都固定在臍恥中點</td></tr><tr><td>下腹壁動脈到鞘內何處？</td><td>沿腹直肌深面上行，與上下血供聯繫</td><td>不把皮下淺腹壁血管放進後鞘模型</td></tr></tbody></table></div>"
   }
  ]
 },
 {
  "id": "inguinal-intro",
  "title": "腹股溝入門：通道與精索包被",
  "english": "Inguinal introduction and cord coverings",
  "summary": "接續影片末段簡圖；完整四壁、深淺環與疝氣定位列為教材延伸。",
  "sources": [
   "M2VIDEO",
   "M2ING",
   "YX2021"
  ],
  "sections": [
   {
    "id": "original-pages",
    "title": "原圖定位與讀圖順序",
    "html": "<p>先看原圖建立位置，再用下方表格整理。原筆記與影片為不同教材；補充內容不當成老師逐字講解。</p><figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-037.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第37頁\"><img src=\"assets/anatomy-notes/pdf-037.webp\" alt=\"奕翔解剖筆記：原筆記鼠蹊管與疝氣對照供延伸；本片只開啟入門概念，PDF第37頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第37頁，含封面。原筆記鼠蹊管與疝氣對照供延伸；本片只開啟入門概念。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "inguinal-intro-1",
    "title": "01｜從三層腹壁走向一條斜通道",
    "html": "<p>約110:20至片尾。畫面開始用肌層與穿越物示意鼠蹊部。以下完整表格屬教材延伸；本片沒有足夠板書可確認已逐項講完所有疝氣分類。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"結構／由哪一層形成／定位／記憶連結\"><table><thead><tr><th scope=\"col\">結構</th><th scope=\"col\">由哪一層形成／定位</th><th scope=\"col\">記憶連結</th></tr></thead><tbody><tr><td>深鼠蹊環 Deep inguinal ring</td><td>腹橫筋膜的開口；下腹壁血管外側</td><td>深配筋膜</td></tr><tr><td>淺鼠蹊環 Superficial inguinal ring</td><td>腹外斜肌腱膜的開口</td><td>淺配外斜</td></tr><tr><td>腹股溝韌帶 Inguinal ligament</td><td>EO腱膜下緣增厚、由ASIS至恥骨結節</td><td>是下緣地標，不是另一層腹肌</td></tr><tr><td>典型主要通過物</td><td>男性精索；女性子宮圓韌帶</td><td>另有髂鼠蹊神經行於管內一段，但不經深環進入</td></tr></tbody></table></div>"
   },
   {
    "id": "inguinal-intro-2",
    "title": "02｜精索包被：由深到淺追來源",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"精索包被／腹壁來源／不要誤配\"><table><thead><tr><th scope=\"col\">精索包被</th><th scope=\"col\">腹壁來源</th><th scope=\"col\">不要誤配</th></tr></thead><tbody><tr><td>精索內筋膜 Internal spermatic fascia</td><td>腹橫筋膜</td><td>不是腹橫肌腱膜</td></tr><tr><td>提睪肌及筋膜 Cremasteric muscle／fascia</td><td>主要來自腹內斜肌</td><td>不是平滑肌的肉膜Dartos</td></tr><tr><td>精索外筋膜 External spermatic fascia</td><td>腹外斜肌腱膜相關筋膜</td><td>與淺環相連</td></tr><tr><td>腹橫肌</td><td>典型不提供一層獨立精索包被</td><td>纖維拱過通道，不代表完全沒有區域關係</td></tr></tbody></table></div><p>把包被一路往腹壁追回去，比獨立背三個名字更有效。髂鼠蹊神經在管內伴行，與精索本身的包被、內容物應分開敘述。</p>"
   },
   {
    "id": "inguinal-intro-3",
    "title": "03｜先用血管分內外，再學疝氣",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"類型／相對下腹壁血管／典型路徑\"><table><thead><tr><th scope=\"col\">類型</th><th scope=\"col\">相對下腹壁血管</th><th scope=\"col\">典型路徑</th></tr></thead><tbody><tr><td>間接型鼠蹊疝氣 Indirect</td><td>外側</td><td>經深環進入鼠蹊管，可往陰囊</td></tr><tr><td>直接型鼠蹊疝氣 Direct</td><td>內側</td><td>由Hesselbach三角薄弱處突出，非典型從深環起始</td></tr><tr><td>股疝氣 Femoral</td><td>此表先不以血管內外區分</td><td>關鍵在腹股溝韌帶下方的股管</td></tr></tbody></table></div><div class=\"study-note teal\"><b>教材核對／補充</b><br>本節為下一部可銜接的延伸內容，未將疝氣處置、完整會陰或骨盆底標成影片已完成。</div>"
   }
  ]
 },
 {
  "id": "rapid-review",
  "title": "跨主題總複習與易混表",
  "english": "Integrated recall and error patterns",
  "summary": "以方向、肌層、神經及通道四類錯誤自查；每個口訣都保留適用條件。",
  "sources": [
   "M2VIDEO",
   "M2BACK",
   "M2WALL",
   "M2SCAL",
   "M2ING"
  ],
  "sections": [
   {
    "id": "rapid-review-1",
    "title": "01｜名字很像，先拆成配對",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"容易混／正確配對／最短的回想動作\"><table><thead><tr><th scope=\"col\">容易混</th><th scope=\"col\">正確配對</th><th scope=\"col\">最短的回想動作</th></tr></thead><tbody><tr><td>長胸神經／胸背神經</td><td>前鋸肌／闊背肌</td><td>推牆貼肩胛／把手臂往後拉</td></tr><tr><td>枕下／大枕神經</td><td>C1後支／C2後支主要分支</td><td>小三角運動／後頭皮感覺</td></tr><tr><td>腹橫肌／腹橫筋膜</td><td>肌肉／其深面筋膜</td><td>三層肌後面再畫一條筋膜</td></tr><tr><td>正中／內側弓狀韌帶</td><td>主動脈／腰大肌</td><td>沿中線向外逐條指認</td></tr><tr><td>腱劃／弓狀線</td><td>腹直肌分段／後鞘下緣</td><td>正面看肌腹／深面看後鞘</td></tr><tr><td>外斜／內斜旋轉</td><td>對側／同側</td><td>右轉：左外＋右內</td></tr></tbody></table></div>"
   },
   {
    "id": "rapid-review-2",
    "title": "02｜五組閉眼也能畫的圖",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"圖／必須有的標記／自評條件\"><table><thead><tr><th scope=\"col\">圖</th><th scope=\"col\">必須有的標記</th><th scope=\"col\">自評條件</th></tr></thead><tbody><tr><td>枕下圖</td><td>枕骨、C1、C2、三邊、C1後支</td><td>不把小直肌放進邊界</td></tr><tr><td>前斜角肌</td><td>肌前靜脈、肌間動脈與臂叢、表面膈神經</td><td>所有前後都說出比較基準</td></tr><tr><td>橫膈</td><td>8靜10食12主、內外弓狀韌帶</td><td>通道高度與C3–C5分欄</td></tr><tr><td>胸／腹肌層</td><td>胸：內與最內；腹：IO與TA</td><td>神經血管平面不互換名字</td></tr><tr><td>直肌鞘雙圖</td><td>上方IO分叉、下方三層向前</td><td>下方仍保留腹橫筋膜和腹膜</td></tr></tbody></table></div>"
   },
   {
    "id": "rapid-review-3",
    "title": "03｜遇到選項，先辨錯在哪一類",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"錯誤類型／例子／訂正方式\"><table><thead><tr><th scope=\"col\">錯誤類型</th><th scope=\"col\">例子</th><th scope=\"col\">訂正方式</th></tr></thead><tbody><tr><td>座標未定</td><td>只寫動脈在後</td><td>補成在前斜角肌後方</td></tr><tr><td>層次跳躍</td><td>後鞘無＝直接腹腔</td><td>把腹橫筋膜、腹膜外組織、腹膜補回</td></tr><tr><td>神經名稱顛倒</td><td>闊背肌配長胸</td><td>寫出肌肉動作再追回神經</td></tr><tr><td>口訣過度延伸</td><td>所有內肋間都呼氣</td><td>補上骨間部、軟骨間部與條件</td></tr><tr><td>進度誤認</td><td>影片末段談鼠蹊＝完整疝氣已教完</td><td>回時間軸看實際板書範圍，延伸另標</td></tr></tbody></table></div><p>練習節奏：先不看答案口述或手畫；錯一項只回對應主題，不必整片重看。能說出再用1、3、7、14天的重練安排；忘記則提早回看。</p>"
   }
  ]
 },
 {
  "id": "board-atlas",
  "title": "奕翔解剖筆記原圖集",
  "english": "Original notebook atlas",
  "summary": "8張對應原頁：頸肩、筋膜、橫膈、腹壁、背肌；圖下列回查主題。",
  "sources": [
   "M2VIDEO",
   "YX2021"
  ],
  "sections": [
   {
    "id": "board-atlas-1",
    "title": "01｜PDF第31頁｜副神經肌群與枕下三角",
    "html": "<figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-031.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第31頁\"><img src=\"assets/anatomy-notes/pdf-031.webp\" alt=\"奕翔解剖筆記：副神經肌群與枕下三角，PDF第31頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第31頁，含封面。副神經肌群與枕下三角。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "board-atlas-2",
    "title": "02｜PDF第32頁｜頸三角回顧",
    "html": "<figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-032.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第32頁\"><img src=\"assets/anatomy-notes/pdf-032.webp\" alt=\"奕翔解剖筆記：頸三角回顧，PDF第32頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第32頁，含封面。頸三角回顧。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "board-atlas-3",
    "title": "03｜PDF第33頁｜頸筋膜橫切面",
    "html": "<figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-033.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第33頁\"><img src=\"assets/anatomy-notes/pdf-033.webp\" alt=\"奕翔解剖筆記：頸筋膜橫切面，PDF第33頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第33頁，含封面。頸筋膜橫切面。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "board-atlas-4",
    "title": "04｜PDF第34頁｜橫膈、後腹壁與斜角肌",
    "html": "<figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-034.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第34頁\"><img src=\"assets/anatomy-notes/pdf-034.webp\" alt=\"奕翔解剖筆記：橫膈、後腹壁與斜角肌，PDF第34頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第34頁，含封面。橫膈、後腹壁與斜角肌。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "board-atlas-5",
    "title": "05｜PDF第35頁｜肋間肌、前鋸肌及纖維方向",
    "html": "<figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-035.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第35頁\"><img src=\"assets/anatomy-notes/pdf-035.webp\" alt=\"奕翔解剖筆記：肋間肌、前鋸肌及纖維方向，PDF第35頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第35頁，含封面。肋間肌、前鋸肌及纖維方向。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "board-atlas-6",
    "title": "06｜PDF第36頁｜腹壁三層與腹直肌鞘",
    "html": "<figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-036.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第36頁\"><img src=\"assets/anatomy-notes/pdf-036.webp\" alt=\"奕翔解剖筆記：腹壁三層與腹直肌鞘，PDF第36頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第36頁，含封面。腹壁三層與腹直肌鞘。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "board-atlas-7",
    "title": "07｜PDF第37頁｜鼠蹊部與疝氣教材延伸",
    "html": "<figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-037.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第37頁\"><img src=\"assets/anatomy-notes/pdf-037.webp\" alt=\"奕翔解剖筆記：鼠蹊部與疝氣教材延伸，PDF第37頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第37頁，含封面。鼠蹊部與疝氣教材延伸。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   },
   {
    "id": "board-atlas-8",
    "title": "08｜PDF第38頁｜背肌與三角區",
    "html": "<figure class=\"anatomy-original\"><a href=\"assets/anatomy-notes/pdf-038.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大奕翔解剖筆記PDF第38頁\"><img src=\"assets/anatomy-notes/pdf-038.webp\" alt=\"奕翔解剖筆記：背肌與三角區，PDF第38頁\" loading=\"lazy\" decoding=\"async\" width=\"1620\"></a><figcaption>賴奕翔《奕翔的解剖筆記》三版（2021-07-25），PDF第38頁，含封面。背肌與三角區。點圖放大；原頁保留，細節以本頁教材核對欄並讀。</figcaption></figure>"
   }
  ]
 },
 {
  "id": "exam-sources",
  "title": "整理範圍、考古練習與參考來源",
  "english": "Scope, practice and references",
  "summary": "來源可回查；已核對的知識與未完成音訊轉錄的限制分開記錄。",
  "sources": [
   "M2VIDEO",
   "M2BACK",
   "M2SUPER",
   "M2NECK",
   "M2SCAL",
   "M2FASCIA",
   "M2THORAX",
   "M2ABDOMEN",
   "M2WALL",
   "M2LAND",
   "M2ING",
   "M2ARCUATE",
   "M2SCALRES"
  ],
  "sections": [
   {
    "id": "exam-sources-1",
    "title": "01｜整理方法與本片邊界",
    "html": "<p>本章依使用者上傳影片的全片板書畫面整理：00:00至1:55:06.93，每20秒擷取一張，共346張。已檢視這些畫面並與《奕翔的解剖筆記》及大學教材核對；未完成音訊轉錄或逐句審聽，因此未呈現在板書的口頭內容可能遺漏。時間碼為約略畫面定位，段落間有重疊與回顧；不是逐字稿。</p><p>〈肌肉（2）〉為網站第6部；板書依序涵蓋斜方／枕下區、頸筋膜、橫膈與後腹壁、斜角肌、胸壁、前鋸肌、背肌、腹壁及鼠蹊部起始。各主題表格為重新統整，不是逐字轉錄。</p><p>原筆記圖片取自使用者已提供的PDF，依原頁呈現並保留作者；原頁的簡化與本頁核對文字可能不同，請並讀。尚未辨清或沒有畫面的口頭內容，不自行補造成影片內容。</p>"
   },
   {
    "id": "exam-sources-2",
    "title": "02｜如何接考古題",
    "html": "<p>本章沒有捏造已核對的歷屆題號或命題頻率。請在解剖學的既有考古快寫練習，遇到相關題目後回到對應主題訂正。此入口抽取整科題目，尚未限定為本章肌肉題。</p><p><a class=\"study-button\" href=\"#/subject/anatomy/quiz\">解剖學考古快寫 →</a></p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"題幹線索／回哪一頁\"><table><thead><tr><th scope=\"col\">題幹線索</th><th scope=\"col\">回哪一頁</th></tr></thead><tbody><tr><td>肌無力／神經配對</td><td>副神經肌群、前鋸肌、背肌</td></tr><tr><td>前斜角肌前後／第1肋</td><td>斜角肌</td></tr><tr><td>T8／T10／T12</td><td>橫膈</td></tr><tr><td>肋溝／VAN</td><td>肋間肌</td></tr><tr><td>弓狀線／IO前後葉</td><td>腹直肌鞘</td></tr><tr><td>深環／精索包被</td><td>腹股溝入門（延伸）</td></tr></tbody></table></div>"
   },
   {
    "id": "exam-sources-3",
    "title": "03｜參考來源與圖像說明",
    "html": "<ol class=\"source-list\"><li><b>M2VIDEO · 課程影片</b> — <a href=\"https://www.youtube.com/playlist?list=PLoKlbKOZ9XPpsITjehrHKiYvhih_3OJOz\" target=\"_blank\" rel=\"noopener\">使用者上傳：2016DF03 02_肌肉(2) 360P.mp4</a><small>全長1:55:06.93；檢視每20秒畫面共346張，時間約略到20秒。未完成音訊轉錄；來源連結僅為原播放清單，不是本片精確連結。</small></li><li><b>M2BACK · 大學教材</b> — <a href=\"https://anatomy.ttuhscep.edu/anatomytables/muscles_back.html\" target=\"_blank\" rel=\"noopener\">Texas Tech：Muscles of the Back</a><small>深背肌、枕下肌群與後支。</small></li><li><b>M2SUPER · 大學教材</b> — <a href=\"https://anatomy.ttuhscep.edu/musculoskeletal_system/introback_tables.html\" target=\"_blank\" rel=\"noopener\">Texas Tech：Superficial Back</a><small>斜方肌、闊背肌與肩胛肌群。</small></li><li><b>M2NECK · 大學教材</b> — <a href=\"https://anatomy.ttuhscep.edu/anatomytables/muscles_head_neck.html\" target=\"_blank\" rel=\"noopener\">Texas Tech：Muscles of the Head and Neck</a><small>頸肌與附著、作用；選取本章所需解剖事實重新整理。</small></li><li><b>M2SCAL · 大學教材</b> — <a href=\"https://anatomy.ttuhscep.edu/nervous_system/postneck_ans.html\" target=\"_blank\" rel=\"noopener\">Texas Tech：Posterior Triangle of the Neck — Answers</a><small>前斜角肌與神經血管的前後關係。</small></li><li><b>M2FASCIA · 解剖研究</b> — <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC7309289/\" target=\"_blank\" rel=\"noopener\">Feigl et al.：Cervical fascia and spaces terminology（2020）</a><small>頸筋膜命名與間隙邊界存在不同描述；不把簡圖當成唯一分類。</small></li><li><b>M2THORAX · 大學教材</b> — <a href=\"https://anatomy.ttuhscep.edu/anatomytables/muscles_thorax.html\" target=\"_blank\" rel=\"noopener\">Texas Tech：Muscles of the Thorax</a><small>橫膈、三層肋間肌及神經血管層面。</small></li><li><b>M2ABDOMEN · 大學教材</b> — <a href=\"https://anatomy.ttuhscep.edu/anatomytables/muscles_abdomen.html\" target=\"_blank\" rel=\"noopener\">Texas Tech：Muscles of the Abdomen</a><small>後腹壁與腹壁肌的附著及神經。</small></li><li><b>M2WALL · 大學教材</b> — <a href=\"https://anatomy.ttuhscep.edu/gastrointestinal_system/abdo_wall_ans.html\" target=\"_blank\" rel=\"noopener\">Texas Tech：Abdominal Wall — Dissector Answers</a><small>腹壁由淺至深層次、弓狀線上下的腱膜分配。</small></li><li><b>M2LAND · 大學教材</b> — <a href=\"https://anatomy.ttuhscep.edu/schemes/abdo_wall_tables.html\" target=\"_blank\" rel=\"noopener\">Texas Tech：Abdominal Wall — Tables</a><small>白線、半月線與腹壁定位。</small></li><li><b>M2ING · 大學教材</b> — <a href=\"https://anatomy.ttuhscep.edu/schemes/abdo_wall_ing_tables.html\" target=\"_blank\" rel=\"noopener\">Texas Tech：Abdominal Wall and Inguinal Region</a><small>深淺鼠蹊環及精索包被；屬影片末段的教材延伸。</small></li><li><b>M2ARCUATE · 解剖研究</b> — <a href=\"https://onlinelibrary.wiley.com/doi/10.1111/j.1447-073X.2007.00221.x\" target=\"_blank\" rel=\"noopener\">Loukas et al.：Arcuate line of the rectus sheath（2008）</a><small>弓狀線的位置、形態可變；不背成固定高度。</small></li><li><b>M2SCALRES · 解剖研究</b> — <a href=\"https://pubmed.ncbi.nlm.nih.gov/21036281/\" target=\"_blank\" rel=\"noopener\">Functional anatomy of human scalene musculature（2010）</a><small>斜角肌旋轉動作受節段、姿勢影響，不以單一口訣概括。</small></li></ol><p>原圖：賴奕翔《奕翔的解剖筆記》三版，2021-07-25，PDF第31–38頁；頁碼含封面，非手寫頁碼。圖片為原頁完整渲染，不重繪、不更改原頁文字。更新／查閱：2026-10-19。</p>"
   }
  ]
 }
];
const muscles2MemoryLessons={
 "accessory-suboccipital": [
  "大菱形、小三角分兩次畫",
  "先畫斜方肌的上、中、下束，再另畫枕骨、C1、C2。把大直肌、上斜肌、下斜肌連成三角，最後補小直肌在三角外。",
  "C1後支是枕下神經；C2後支主要分支才是大枕神經。",
  [
   [
    "哪一條枕下肌沒有附著顱骨？",
    "頭下斜肌：C2棘突到C1橫突；可用它把寰樞旋轉連回骨骼章。"
   ],
   [
    "聳肩與枕下肌收縮，主要運動神經分別是什麼？",
    "斜方肌配CN XI；枕下四肌配C1後支。位置近，神經來源不同。"
   ]
  ]
 ],
 "cervical-fascia": [
  "先三區，後加兩側鞘",
  "畫前方氣管／食道、後方椎體，再在兩側放動脈、靜脈、迷走神經。最後才加三層筋膜名稱。",
  "淺筋膜與深筋膜的包圍層不同；交感幹通常在頸動脈鞘後方。",
  [
   [
    "頸動脈鞘的三個核心內容是什麼？",
    "總／內頸動脈、內頸靜脈、迷走神經。先畫動內、靜外、迷走居後之間。"
   ],
   [
    "為何交感幹不直接與迷走神經一起寫入鞘內？",
    "交感幹典型位於鞘後方的椎前區；用鞘內、鞘壁、鞘後三格記。"
   ]
  ]
 ],
 "diaphragm": [
  "把數字綁到不同問題",
  "一張寫通道：8靜、10食、12主；另一張寫運動神經：C3、4、5。再從中央往外畫正中、內側、外側弓狀韌帶。",
  "Median正中跨主動脈；medial內側跨腰大肌。",
  [
   [
    "食道裂孔在哪裡？它的迷走幹與膈神經角色一樣嗎？",
    "約T10；迷走幹隨食道過裂孔，膈神經C3–C5才是橫膈主要運動來源。"
   ],
   [
    "內側與外側弓狀韌帶各跨什麼？",
    "內側跨腰大肌；外側跨腰方肌。先找脊柱，腰大肌較內，再往外找腰方肌。"
   ]
  ]
 ],
 "posterior-wall": [
  "跨髖就能拉大腿",
  "畫腰大肌與髂肌在髖前方會合到小轉子，再把腰方肌畫在外側，止於第12肋而非股骨。",
  "腰方肌不是屈髖主肌；腰大肌與髂肌的神經來源也不能合寫成全部股神經。",
  [
   [
    "髂腰肌附大轉子還是小轉子？",
    "小轉子。看到小轉子，沿髖前方往上找腰大肌與髂窩的髂肌。"
   ],
   [
    "固定第12肋的是哪條後腹壁肌？",
    "腰方肌；先看它連接髂嵴、第12肋與腰椎橫突，並沒有直接跨到股骨。"
   ]
  ]
 ],
 "scalenes": [
  "拿一塊肌肉當分隔板",
  "紙中央畫前斜角肌，前面放靜脈和沿肌下降的膈神經；後面再畫中斜角肌，兩肌之間放動脈與臂神經叢。",
  "膈神經在前斜角肌表面；鎖骨下靜脈也在肌前，不進典型斜角肌間隙。",
  [
   [
    "前、中、後斜角肌各到第幾肋？",
    "前與中到第1肋；後到第2肋。用1、1、2配三條肌。"
   ],
   [
    "斜角肌間隙內有鎖骨下靜脈嗎？",
    "典型沒有；主要是鎖骨下動脈與臂神經叢。靜脈在前斜角肌前方。"
   ]
  ]
 ],
 "intercostals": [
  "先寫三層，再把束插到中深之間",
  "在橫切面依序寫外、內、最內，於內與最內之間加入VAN；另在肋骨旁垂直寫上V、中A、下N。",
  "內肋間肌軟骨間部可助吸氣，不能把所有內肋間肌只背成呼氣。",
  [
   [
    "肋間主束在哪兩層之間？",
    "內肋間與最內肋間之間；再補由上到下VAN。"
   ],
   [
    "內肋間肌全部都是用力呼氣肌嗎？",
    "不是。骨間部多助用力呼氣；軟骨間部可抬肋助吸氣。"
   ]
  ]
 ],
 "serratus": [
  "先推牆，再抬手",
  "先想前鋸肌把肩胛骨貼住胸壁，接著沿胸壁向前拉；最後加下部纖維與斜方肌合作上旋。",
  "前鋸肌是長胸神經，不是胸背神經；胸背神經配闊背肌。",
  [
   [
    "前鋸肌與闊背肌分別配哪條神經？",
    "前鋸肌配長胸神經；闊背肌配胸背神經。把長胸與胸背兩個近似名字拆開。"
   ],
   [
    "為什麼前鋸肌失能時推牆容易看到肩胛骨翹起？",
    "它原本將肩胛骨內側緣貼住胸壁；失能後推牆負荷可讓內側緣突出。"
   ]
  ]
 ],
 "back-muscles": [
  "終點、神經、層次一起看",
  "先找肌肉止於肱骨還是肩胛骨，再由淺入深畫到脊柱旁。豎脊肌用外肋、中長、內棘作橫向排序。",
  "長胸神經配前鋸肌；胸背神經配闊背肌；背面肌肉也可能由前支系統支配。",
  [
   [
    "豎脊肌由外到內如何排？",
    "髂肋肌、最長肌、棘肌；口訣外肋中長內棘。主要由脊神經後支支配。"
   ],
   [
    "聽診三角和下腰三角的下界分別是什麼？",
    "聽診三角下界為闊背肌；下腰三角下界為髂嵴。先畫整張背面圖再圈出兩區。"
   ]
  ]
 ],
 "abdominal-muscles": [
  "外斜插口袋，內斜反方向，腹橫當束帶",
  "先畫三種纖維方向，再固定骨盆，想像右轉：左外斜＋右內斜一起拉。最後把兩側腹直肌放在白線旁。",
  "腹橫肌是肌肉，腹橫筋膜是深面的筋膜；名稱近但不是同一層。",
  [
   [
    "骨盆固定，軀幹右轉主要用哪兩條斜肌？",
    "左腹外斜肌與右腹內斜肌。說出側別，再把動作倒成左轉檢查。"
   ],
   [
    "腹壁主要神經血管平面位在哪兩肌之間？",
    "腹內斜肌與腹橫肌之間，對應TAP平面。"
   ]
  ]
 ],
 "wall-landmarks": [
  "先兩條縱線，再兩種橫向結構",
  "正中寫白線，腹直肌外側寫半月線；腹肌中畫腱劃，再翻到深面畫後鞘終點弓狀線。",
  "腱劃在腹直肌內／前鞘相關，弓狀線是腱膜性後鞘下緣。",
  [
   [
    "半月線與弓狀線，哪個是腹直肌外側界？",
    "半月線；弓狀線是後鞘下緣。先講方向，再講構造。"
   ],
   [
    "上、下腹壁動脈分別來自哪裡？",
    "上腹壁來自內胸動脈；下腹壁來自外髂動脈。淺腹壁才主要來自股動脈。"
   ]
  ]
 ],
 "rectus-sheath": [
  "畫同一顆圓，改變三條腱膜路徑",
  "第一張IO分叉：EO＋IO前葉在前，IO後葉＋TA在後。第二張三層全到前，但深面的腹橫筋膜和腹膜仍畫著。",
  "肋緣以上另有上端例外；弓狀線以下無後鞘，不等於無腹橫筋膜。",
  [
   [
    "肋緣以下、弓狀線以上，前後鞘各怎麼組成？",
    "前：EO＋IO前葉；後：IO後葉＋TA。先畫IO分叉，再放EO與TA。"
   ],
   [
    "弓狀線以下，腹直肌後方還有哪些主要層？",
    "腹橫筋膜、腹膜外組織、壁層腹膜。消失的是腱膜性後鞘。"
   ]
  ]
 ],
 "inguinal-intro": [
  "先找深淺環，再追回包被",
  "深環放在腹橫筋膜，淺環放在外斜腱膜；中間加IO提供的提睪肌，再用下腹壁血管分疝氣內外。",
  "Internal spermatic fascia來自transversalis fascia，不能寫成transversus abdominis肌。",
  [
   [
    "精索內筋膜、提睪肌、精索外筋膜分別來自哪層？",
    "依序腹橫筋膜、腹內斜肌、腹外斜肌相關腱膜／筋膜。由深到淺追一次。"
   ],
   [
    "間接與直接鼠蹊疝氣相對下腹壁血管在哪側？",
    "間接在外側、直接在內側。間接先找深環，直接先找Hesselbach三角。"
   ]
  ]
 ],
 "rapid-review": [
  "錯題只改一個關係，再重新畫",
  "每次錯題標記是方向、肌層、神經還是例外。回到對應圖修一個關係，隔天再空白重畫一次。",
  "口訣只是取回線索；題目改了位置或高度時，要把條件補回。",
  [
   [
    "用一句話分開胸壁與腹壁的主要神經血管平面。",
    "胸壁在內與最內肋間肌間；腹壁在腹內斜與腹橫肌間。兩者都可想中深之間，但名稱要完整。"
   ],
   [
    "「後鞘沒有了」最容易漏掉哪三層？",
    "腹橫筋膜、腹膜外組織、壁層腹膜。這是層次錯誤，應回直肌鞘兩張圖重畫。"
   ]
  ]
 ]
};
