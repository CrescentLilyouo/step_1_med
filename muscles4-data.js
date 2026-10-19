/* Sampled board review; textbook extensions labeled; no full-audio transcript. */
const muscles4VideoUrl="https://www.youtube.com/playlist?list=PLoKlbKOZ9XPpsITjehrHKiYvhih_3OJOz";
const muscles4Scope="本章依〈2016DF04 02_肌肉(4)〉全片板書畫面整理，長1:49:45.60；每20秒取一張，共330張，已檢視。未完成音訊轉錄或逐句審聽，未寫在板書的口頭內容可能遺漏。時間碼為約略畫面定位，非逐句字幕。完整肌肉附著、神經分支、通道邊界及臨床定位另標為教材補充。";
const muscles4Sources=[
 {
  "id": "M4VIDEO",
  "title": "使用者上傳：2016DF04 02_肌肉(4) 360P.mp4",
  "url": "https://www.youtube.com/playlist?list=PLoKlbKOZ9XPpsITjehrHKiYvhih_3OJOz",
  "type": "課程影片",
  "note": "本章依〈2016DF04 02_肌肉(4)〉全片板書畫面整理，長1:49:45.60；每20秒取一張，共330張，已檢視。未完成音訊轉錄或逐句審聽，未寫在板書的口頭內容可能遺漏。時間碼為約略畫面定位，非逐句字幕。完整肌肉附著、神經分支、通道邊界及臨床定位另標為教材補充。"
 },
 {
  "id": "M4FOREARM",
  "title": "Texas Tech：Forearm & Wrist — Tables",
  "url": "https://anatomy.ttuhscep.edu/musculoskeletal_system/forearm_tables.html",
  "type": "大學解剖教材",
  "note": "前臂肌群、附著、作用與神經分工。"
 },
 {
  "id": "M4FOREANS",
  "title": "Texas Tech：Forearm & Wrist — Answers",
  "url": "https://anatomy.ttuhscep.edu/musculoskeletal_system/forearm_ans.html",
  "type": "大學解剖教材",
  "note": "腕背伸肌腱、腱鞘與前臂分層。"
 },
 {
  "id": "M4HAND",
  "title": "Texas Tech：Hand — Tables",
  "url": "https://anatomy.ttuhscep.edu/musculoskeletal_system/hand_tables.html",
  "type": "大學解剖教材",
  "note": "手內在肌、腕隧道與骨間肌計數。"
 },
 {
  "id": "M4HANDANS",
  "title": "Texas Tech：Hand — Answers",
  "url": "https://anatomy.ttuhscep.edu/musculoskeletal_system/hand_ans.html",
  "type": "大學解剖教材",
  "note": "手掌空間、拇指動作與屈肌支持帶周圍路徑。"
 },
 {
  "id": "M4GLUTEAL",
  "title": "Texas Tech：Hip & Posterior Thigh & Leg — Tables",
  "url": "https://anatomy.ttuhscep.edu/musculoskeletal_system/gluteal_tables.html",
  "type": "大學解剖教材",
  "note": "臀肌、腿後肌與膕窩區域。"
 },
 {
  "id": "M4THIGH",
  "title": "Texas Tech：Anterior & Medial Thigh — Tables",
  "url": "https://anatomy.ttuhscep.edu/musculoskeletal_system/thigh_tables.html",
  "type": "大學解剖教材",
  "note": "大腿前內側肌群、股鞘、股三角。"
 },
 {
  "id": "M4THIGHANS",
  "title": "Texas Tech：Anterior & Medial Thigh — Answers",
  "url": "https://anatomy.ttuhscep.edu/musculoskeletal_system/thigh_ans.html",
  "type": "大學解剖教材",
  "note": "大腿區域與內收肌管路徑。"
 },
 {
  "id": "M4LOWER",
  "title": "Texas Tech：Muscles of the Lower Limb",
  "url": "https://anatomy.ttuhscep.edu/anatomytables/muscles_lowerlimb.html",
  "type": "大學解剖教材",
  "note": "大內收肌兩部、膝關節肌與下肢肌肉比較。"
 },
 {
  "id": "M4TOPO",
  "title": "UAMS：Topographical Anatomy of the Lower Limb",
  "url": "https://medicine.uams.edu/neuroscience/education/medical-school-courses/human-structure-module/anatomy-tables/topographical-anatomy-tables/topographical-anatomy-of-the-lower-limb/",
  "type": "大學解剖教材",
  "note": "內收肌管與下肢筋膜分區。"
 },
 {
  "id": "M4VAR",
  "title": "Caetano et al.：Flexor Pollicis Brevis Muscle — Anatomical Study（2017）",
  "url": "https://openorthopaedicsjournal.com/VOLUME/11/PAGE/1321/PDF/",
  "type": "原始解剖研究",
  "note": "屍體解剖研究顯示FPB兩頭的正中／尺神經支配有變異，故不將口訣寫成絕對規則。"
 },
 {
  "id": "M4PERIPH",
  "title": "Peripheral Nerve（Operative Neurosurgery 2019；大學教學用全文）",
  "url": "https://bpb-us-e1.wpmucdn.com/sites.uw.edu/dist/b/8770/files/2022/09/Peripheral-Nerve.pdf",
  "type": "神經外科教學專章",
  "note": "核對AIN沒有皮膚感覺、掌皮支與腕隧道分流，以及魚際返支和蚓狀肌掌指支。"
 },
 {
  "id": "M4CANAL",
  "title": "Lee et al.：Anatomical study of the adductor canal（2023）",
  "url": "https://pubmed.ncbi.nlm.nih.gov/36245345/",
  "type": "原始解剖研究",
  "note": "內收肌管近遠端筋膜頂及股內側肌神經分支關係不同；本站保留基本教材與精細筋膜模型的區分。"
 }
];
anatomySources.push(...muscles4Sources);
const muscles4Topics=[
 {
  "id": "muscles4-video-notes",
  "title": "全片板書時間軸與整理範圍",
  "english": "Video board timeline",
  "summary": "31段回查；前臂、手、臀、大腿至膕窩開頭。",
  "sources": [
   "M4VIDEO",
   "YX2021"
  ],
  "sections": [
   {
    "id": "muscles4-video-notes-1",
    "title": "01｜材料、限制與閱讀順序",
    "html": "<p>本章依〈2016DF04 02_肌肉(4)〉全片板書畫面整理，長1:49:45.60；每20秒取一張，共330張，已檢視。未完成音訊轉錄或逐句審聽，未寫在板書的口頭內容可能遺漏。時間碼為約略畫面定位，非逐句字幕。完整肌肉附著、神經分支、通道邊界及臨床定位另標為教材補充。</p><p>網站按主題重排；時間碼供在原檔拖曳，非字幕。原筆記PDF第46–50頁是對照材料，不能將原頁所有文字視為影片逐句內容。</p>"
   },
   {
    "id": "muscles4-video-notes-2",
    "title": "02｜00:00–02:40｜延續前臂前室總圖",
    "html": "<p>淺層橫排與前後室示意，搭配手臂動作。</p><p><a href=\"#/subject/anatomy/chapter/muscles4/topic/forearm-map\">前往主題 →</a></p>"
   },
   {
    "id": "muscles4-video-notes-3",
    "title": "03｜02:40–05:00｜旋前圓肌與前臂淺層",
    "html": "<p>側面肌束示意連回前臂前室；以掌前／掌後比動作。</p><p><a href=\"#/subject/anatomy/chapter/muscles4/topic/flexor-superficial\">前往主題 →</a></p>"
   },
   {
    "id": "muscles4-video-notes-4",
    "title": "04｜05:00–08:00｜前室神經例外",
    "html": "<p>板書加入神經箭頭與前室層次；先找尺側例外。</p><p><a href=\"#/subject/anatomy/chapter/muscles4/topic/flexor-deep\">前往主題 →</a></p>"
   },
   {
    "id": "muscles4-video-notes-5",
    "title": "05｜08:00–10:00｜腕骨弓與隧道屋頂",
    "html": "<p>新增腕部橫切小圖與carpal arch文字。</p><p><a href=\"#/subject/anatomy/chapter/muscles4/topic/carpal-tunnel\">前往主題 →</a></p>"
   },
   {
    "id": "muscles4-video-notes-6",
    "title": "06｜10:00–12:00｜支持帶下的肌腱與神經",
    "html": "<p>持續補腕橫切面，區分隧道內外。</p><p><a href=\"#/subject/anatomy/chapter/muscles4/topic/carpal-tunnel\">前往主題 →</a></p>"
   },
   {
    "id": "muscles4-video-notes-7",
    "title": "07｜12:00–15:00｜腕隧道及手部動作對照",
    "html": "<p>以前臂表和腕橫切面交互指認；口述內容未逐句轉錄。</p><p><a href=\"#/subject/anatomy/chapter/muscles4/topic/carpal-tunnel\">前往主題 →</a></p>"
   },
   {
    "id": "muscles4-video-notes-8",
    "title": "08｜15:00–17:20｜切換至前臂後室",
    "html": "<p>擦除局部板書，保留前室和腕小圖，準備後室排列。</p><p><a href=\"#/subject/anatomy/chapter/muscles4/topic/posterior-forearm\">前往主題 →</a></p>"
   },
   {
    "id": "muscles4-video-notes-9",
    "title": "09｜17:20–20:00｜後室淺層肌束",
    "html": "<p>在同一分區圖填入後室肌束與遠端腱。</p><p><a href=\"#/subject/anatomy/chapter/muscles4/topic/posterior-forearm\">前往主題 →</a></p>"
   },
   {
    "id": "muscles4-video-notes-10",
    "title": "10｜20:00–23:00｜後室深層與拇指腱",
    "html": "<p>加入深層斜束，建立拇長外展／長短伸及伸食指。</p><p><a href=\"#/subject/anatomy/chapter/muscles4/topic/posterior-forearm\">前往主題 →</a></p>"
   },
   {
    "id": "muscles4-video-notes-11",
    "title": "11｜23:00–26:00｜腕背六腱室",
    "html": "<p>沿遠端支持帶標出1至6並反覆指認。</p><p><a href=\"#/subject/anatomy/chapter/muscles4/topic/extensor-compartments\">前往主題 →</a></p>"
   },
   {
    "id": "muscles4-video-notes-12",
    "title": "12｜26:00–29:20｜橈神經系統與鼻煙窩關係",
    "html": "<p>神經箭頭與拇指肌腱旁標記增加；以腱室互相比較。</p><p><a href=\"#/subject/anatomy/chapter/muscles4/topic/snuffbox\">前往主題 →</a></p>"
   },
   {
    "id": "muscles4-video-notes-13",
    "title": "13｜29:20–34:00｜前後室總整理",
    "html": "<p>在大圖上補神經縮寫並用雙手示範指腕動作。</p><p><a href=\"#/subject/anatomy/chapter/muscles4/topic/forearm-map\">前往主題 →</a></p>"
   },
   {
    "id": "muscles4-video-notes-14",
    "title": "14｜34:00–37:00｜手內在肌分群",
    "html": "<p>新增手掌輪廓，在拇側、小指側標OAF。</p><p><a href=\"#/subject/anatomy/chapter/muscles4/topic/hand-intrinsics\">前往主題 →</a></p>"
   },
   {
    "id": "muscles4-video-notes-15",
    "title": "15｜37:00–39:20｜拇指與小指側動作",
    "html": "<p>示範對掌、外展與屈曲，回指兩側分群。</p><p><a href=\"#/subject/anatomy/chapter/muscles4/topic/hand-intrinsics\">前往主題 →</a></p>"
   },
   {
    "id": "muscles4-video-notes-16",
    "title": "16｜39:20–43:00｜蚓狀肌與指間動作",
    "html": "<p>板書出現蚓狀肌字樣與手勢；掌指／指間角度分開。</p><p><a href=\"#/subject/anatomy/chapter/muscles4/topic/lumbricals-interossei\">前往主題 →</a></p>"
   },
   {
    "id": "muscles4-video-notes-17",
    "title": "17｜43:00–46:00｜臀區背側分層",
    "html": "<p>新增臀部外形與橫向肌束，延伸向大腿後側。</p><p><a href=\"#/subject/anatomy/chapter/muscles4/topic/gluteal-muscles\">前往主題 →</a></p>"
   },
   {
    "id": "muscles4-video-notes-18",
    "title": "18｜46:00–51:00｜臀肌功能與下肢連結",
    "html": "<p>在臀部圖和前臂圖之間指認與動作示範。</p><p><a href=\"#/subject/anatomy/chapter/muscles4/topic/gluteal-muscles\">前往主題 →</a></p>"
   },
   {
    "id": "muscles4-video-notes-19",
    "title": "19｜51:00–54:40｜大腿、小腿肌室與主要神經",
    "html": "<p>新畫大腿三室及小腿分區，先作總圖。小腿僅導覽。</p><p><a href=\"#/subject/anatomy/chapter/muscles4/topic/thigh-map\">前往主題 →</a></p>"
   },
   {
    "id": "muscles4-video-notes-20",
    "title": "20｜54:40–58:40｜前室股四頭肌",
    "html": "<p>加入大腿橫切肌群，前室分股直與三廣肌。</p><p><a href=\"#/subject/anatomy/chapter/muscles4/topic/anterior-thigh\">前往主題 →</a></p>"
   },
   {
    "id": "muscles4-video-notes-21",
    "title": "21｜58:40–62:00｜前側肌肉與作用示範",
    "html": "<p>由前室圖搭配髖、膝動作，再回分區神經。</p><p><a href=\"#/subject/anatomy/chapter/muscles4/topic/anterior-thigh\">前往主題 →</a></p>"
   },
   {
    "id": "muscles4-video-notes-22",
    "title": "22｜62:00–66:00｜內側長短大內收肌",
    "html": "<p>填入內側室肌群，旁邊保留神經對照。</p><p><a href=\"#/subject/anatomy/chapter/muscles4/topic/medial-thigh\">前往主題 →</a></p>"
   },
   {
    "id": "muscles4-video-notes-23",
    "title": "23｜66:00–69:20｜內收大肌與股薄肌",
    "html": "<p>內側室增加肌束與神經關係，區分長短與不同部分。</p><p><a href=\"#/subject/anatomy/chapter/muscles4/topic/medial-thigh\">前往主題 →</a></p>"
   },
   {
    "id": "muscles4-video-notes-24",
    "title": "24｜69:20–73:20｜大腿後室與股二頭長短頭",
    "html": "<p>填入後室，左右分外側二頭與內側半腱半膜。</p><p><a href=\"#/subject/anatomy/chapter/muscles4/topic/hamstrings\">前往主題 →</a></p>"
   },
   {
    "id": "muscles4-video-notes-25",
    "title": "25｜73:20–76:40｜縫匠肌、遠端附著與鵝足",
    "html": "<p>在臀／後大腿圖延伸膝部附著與肌束。</p><p><a href=\"#/subject/anatomy/chapter/muscles4/topic/hamstrings\">前往主題 →</a></p>"
   },
   {
    "id": "muscles4-video-notes-26",
    "title": "26｜76:40–80:00｜股三角的三邊與深面",
    "html": "<p>另畫腹股溝到膝的前內側示意，先標肌肉邊界。</p><p><a href=\"#/subject/anatomy/chapter/muscles4/topic/femoral-triangle\">前往主題 →</a></p>"
   },
   {
    "id": "muscles4-video-notes-27",
    "title": "27｜80:00–84:00｜三角內神經血管排列",
    "html": "<p>補入上端神經血管並延伸向大腿遠端。</p><p><a href=\"#/subject/anatomy/chapter/muscles4/topic/femoral-triangle\">前往主題 →</a></p>"
   },
   {
    "id": "muscles4-video-notes-28",
    "title": "28｜84:00–88:40｜股鞘與淺層血管路徑",
    "html": "<p>回上端標記與筋膜、靜脈開口位置。</p><p><a href=\"#/subject/anatomy/chapter/muscles4/topic/femoral-triangle\">前往主題 →</a></p>"
   },
   {
    "id": "muscles4-video-notes-29",
    "title": "29｜88:40–93:20｜內收肌管與血管向後",
    "html": "<p>沿縫匠肌深面和內收大肌的遠端路徑補線。</p><p><a href=\"#/subject/anatomy/chapter/muscles4/topic/adductor-canal\">前往主題 →</a></p>"
   },
   {
    "id": "muscles4-video-notes-30",
    "title": "30｜93:20–98:40｜通道與出口反覆比對",
    "html": "<p>前內側長圖與橫切肌群反覆核對；分清三角、管、裂孔。</p><p><a href=\"#/subject/anatomy/chapter/muscles4/topic/adductor-canal\">前往主題 →</a></p>"
   },
   {
    "id": "muscles4-video-notes-31",
    "title": "31｜98:40–105:00｜大腿神經與膝內側路徑",
    "html": "<p>以動作示範和圖上的神經血管路徑整合。</p><p><a href=\"#/subject/anatomy/chapter/muscles4/topic/rapid-review\">前往主題 →</a></p>"
   },
   {
    "id": "muscles4-video-notes-32",
    "title": "32｜105:00–109:45.60｜膕窩開頭",
    "html": "<p>新增膝後菱形肌束與中央神經血管；全片於此結束。</p><p><a href=\"#/subject/anatomy/chapter/muscles4/topic/popliteal-fossa\">前往主題 →</a></p>"
   }
  ]
 },
 {
  "id": "forearm-map",
  "title": "前臂總圖：前後分區與神經例外",
  "english": "Forearm compartments",
  "summary": "先分掌側／背側，再用共同起點和神經建立骨架。",
  "sources": [
   "M4VIDEO",
   "YX2021",
   "M4FOREARM"
  ],
  "sections": [
   {
    "id": "forearm-map-1",
    "title": "01｜先建立位置與動作",
    "html": "<p>每遇到肌肉先回答「在哪一室、跨哪個關節、肌腱落在軸哪側」，再補神經。先記多數規則，再圈例外。</p>"
   },
   {
    "id": "forearm-map-2",
    "title": "02｜原筆記圖與指認任務",
    "html": "<figure class=\"study-figure\"><a href=\"assets/anatomy-notes/pdf-046.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/anatomy-notes/pdf-046.webp\" alt=\"奕翔解剖原筆記 PDF第46頁，點圖放大\" loading=\"lazy\"></a><figcaption>賴奕翔《奕翔的解剖筆記三版》2021-07-25，PDF第46頁（含封面；非手寫頁碼）。原頁完整保留，點圖放大。</figcaption></figure><p><strong>讀圖順序：</strong>掌心朝前；圖上先找橈骨拇指側與尺骨小指側。沿肱骨內上髁進前室，沿外上髁進後室；最後指認腕隧道小圖。</p>"
   },
   {
    "id": "forearm-map-3",
    "title": "03｜肌肉／結構對照（教材補充）",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"構造／附著／位置／作用／內容／神經／考點\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">附著／位置</th><th scope=\"col\">作用／內容</th><th scope=\"col\">神經／考點</th></tr></thead><tbody><tr><td>前室淺／中層</td><td>內上髁共同屈肌起點為主</td><td>屈腕、屈指、旋前</td><td>多為正中神經</td></tr><tr><td>前室深層</td><td>尺橈骨及骨間膜</td><td>FDP、FPL、PQ</td><td>正中之前骨間支；FDP尺側半例外</td></tr><tr><td>後室</td><td>外上髁、外上髁上脊、尺橈骨</td><td>伸腕伸指、旋後；肱橈肌屈肘</td><td>橈神經及其深支／後骨間支</td></tr><tr><td>前室尺神經例外</td><td>尺側屈腕肌＋FDP尺側半</td><td>屈腕尺偏、屈第4–5指DIP</td><td>尺神經</td></tr></tbody></table></div>"
   },
   {
    "id": "forearm-map-4",
    "title": "04｜最容易混的地方",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較／分辨方法\"><table><thead><tr><th scope=\"col\">比較</th><th scope=\"col\">分辨方法</th></tr></thead><tbody><tr><td>肌室與動作</td><td>肱橈肌在後室、受橈神經支配，主要仍屈肘。</td></tr><tr><td>位置與觀看方向</td><td>前臂旋前後橈骨移動；不要把螢幕左右當解剖內外。</td></tr></tbody></table></div><div class=\"study-note\"><strong>教材核對／補充：</strong>肌室的命名不是每條肌肉動作的保證；掌側也有旋前肌。</div>"
   }
  ]
 },
 {
  "id": "flexor-superficial",
  "title": "前臂淺層與屈指淺肌",
  "english": "Superficial flexors & FDS",
  "summary": "將共同屈肌起點連到腕、掌腱膜與中節指骨。",
  "sources": [
   "M4VIDEO",
   "YX2021",
   "M4FOREARM"
  ],
  "sections": [
   {
    "id": "flexor-superficial-1",
    "title": "01｜先建立位置與動作",
    "html": "<p>把附著點分成三種終點：掌骨控制腕、掌腱膜繃緊手掌、指骨控制手指。終點決定它有沒有跨過某個關節。</p>"
   },
   {
    "id": "flexor-superficial-2",
    "title": "02｜原筆記圖與指認任務",
    "html": "<figure class=\"study-figure\"><a href=\"assets/anatomy-notes/pdf-046.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/anatomy-notes/pdf-046.webp\" alt=\"奕翔解剖原筆記 PDF第46頁，點圖放大\" loading=\"lazy\"></a><figcaption>賴奕翔《奕翔的解剖筆記三版》2021-07-25，PDF第46頁（含封面；非手寫頁碼）。原頁完整保留，點圖放大。</figcaption></figure><p><strong>讀圖順序：</strong>沿前室上排由橈側找旋前圓肌、橈側屈腕肌、掌長肌、尺側屈腕肌，再到中層FDS；用終點分腕肌和指肌。</p>"
   },
   {
    "id": "flexor-superficial-3",
    "title": "03｜肌肉／結構對照（教材補充）",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"構造／附著／位置／作用／內容／神經／考點\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">附著／位置</th><th scope=\"col\">作用／內容</th><th scope=\"col\">神經／考點</th></tr></thead><tbody><tr><td>旋前圓肌 PT</td><td>內上髁／尺骨冠突→橈骨中段外側</td><td>旋前，輔助屈肘</td><td>正中神經</td></tr><tr><td>橈側屈腕肌 FCR</td><td>共同屈肌起點→第2掌骨底為主</td><td>屈腕＋橈偏</td><td>正中神經</td></tr><tr><td>掌長肌 PL</td><td>共同屈肌起點→屈肌支持帶／掌腱膜</td><td>繃緊掌腱膜，弱屈腕</td><td>正中神經；可先天缺如</td></tr><tr><td>尺側屈腕肌 FCU</td><td>內上髁／鷹嘴→豆狀骨，續接鉤骨與第5掌骨</td><td>屈腕＋尺偏</td><td>尺神經</td></tr><tr><td>屈指淺肌 FDS</td><td>肱尺頭＋橈頭→第2–5指中節指骨</td><td>以PIP屈曲辨認</td><td>正中神經</td></tr></tbody></table></div>"
   },
   {
    "id": "flexor-superficial-4",
    "title": "04｜最容易混的地方",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較／分辨方法\"><table><thead><tr><th scope=\"col\">比較</th><th scope=\"col\">分辨方法</th></tr></thead><tbody><tr><td>FDS與FDP</td><td>FDS到中節、主屈PIP；FDP到末節、可屈DIP。</td></tr><tr><td>FCR與FCU</td><td>都有屈腕；橈／尺側分別加上橈偏／尺偏。</td></tr></tbody></table></div><div class=\"study-note\"><strong>教材核對／補充：</strong>FDS不是前室最深層；三層分類時放中層。掌長肌腱在屈肌支持帶表面，不算腕隧道九腱。</div>"
   }
  ]
 },
 {
  "id": "flexor-deep",
  "title": "前臂深層：FDP、FPL、PQ",
  "english": "Deep flexors & AIN",
  "summary": "從末節指骨與前骨間神經理解深層三肌。",
  "sources": [
   "M4VIDEO",
   "YX2021",
   "M4FOREARM",
   "M4PERIPH"
  ],
  "sections": [
   {
    "id": "flexor-deep-1",
    "title": "01｜先建立位置與動作",
    "html": "<p>先看終點：FDP到四指末節，FPL到拇指末節，PQ不進手掌。用「深層三肌＋FDP尺半另走尺神經」建立例外。</p>"
   },
   {
    "id": "flexor-deep-2",
    "title": "02｜原筆記圖與指認任務",
    "html": "<figure class=\"study-figure\"><a href=\"assets/anatomy-notes/pdf-046.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/anatomy-notes/pdf-046.webp\" alt=\"奕翔解剖原筆記 PDF第46頁，點圖放大\" loading=\"lazy\"></a><figcaption>賴奕翔《奕翔的解剖筆記三版》2021-07-25，PDF第46頁（含封面；非手寫頁碼）。原頁完整保留，點圖放大。</figcaption></figure><p><strong>讀圖順序：</strong>找到前室深層斜線區，沿FDP分到橈側兩指與尺側兩指；再單獨追拇長屈肌及遠端橫走的旋前方肌。</p>"
   },
   {
    "id": "flexor-deep-3",
    "title": "03｜肌肉／結構對照（教材補充）",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"構造／附著／位置／作用／內容／神經／考點\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">附著／位置</th><th scope=\"col\">作用／內容</th><th scope=\"col\">神經／考點</th></tr></thead><tbody><tr><td>FDP橈側半</td><td>尺骨／骨間膜→第2–3指末節底</td><td>屈DIP，可共同屈PIP/MCP</td><td>前骨間神經 AIN（正中支）</td></tr><tr><td>FDP尺側半</td><td>同群→第4–5指末節底</td><td>屈第4–5指DIP</td><td>尺神經</td></tr><tr><td>拇長屈肌 FPL</td><td>橈骨前面／骨間膜→拇指末節底</td><td>屈拇指IP</td><td>AIN</td></tr><tr><td>旋前方肌 PQ</td><td>尺骨遠端前面→橈骨遠端前面</td><td>旋前並穩定遠端橈尺關係</td><td>AIN</td></tr></tbody></table></div>"
   },
   {
    "id": "flexor-deep-4",
    "title": "04｜最容易混的地方",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較／分辨方法\"><table><thead><tr><th scope=\"col\">比較</th><th scope=\"col\">分辨方法</th></tr></thead><tbody><tr><td>AIN與正中神經主幹</td><td>AIN主要是運動支；典型孤立AIN損傷沒有手指皮膚感覺缺失。</td></tr><tr><td>OK手勢與拇指對掌</td><td>OK圓圈涉及FPL與食指FDP；對掌看魚際肌，不能當同一測試。</td></tr></tbody></table></div><div class=\"study-note\"><strong>教材核對／補充：</strong>AIN的屈指功能在前臂已分支；單純腕隧道壓迫不應直接造成FPL或FDP去神經性癱瘓。</div>"
   }
  ]
 },
 {
  "id": "wrist-force",
  "title": "腕部合力：屈伸與橈尺偏",
  "english": "Wrist force pairs",
  "summary": "用兩條肌腱的共同分量推動作，避免背互相矛盾的清單。",
  "sources": [
   "M4VIDEO",
   "YX2021",
   "M4FOREARM"
  ],
  "sections": [
   {
    "id": "wrist-force-1",
    "title": "01｜先建立位置與動作",
    "html": "<p>把腕看成四角拉繩，先看肌腱相對關節軸的位置，再把兩個向量共同的方向留下。這是讀圖的推理模型，不是實際肌力定量。</p>"
   },
   {
    "id": "wrist-force-2",
    "title": "02｜原筆記圖與指認任務",
    "html": "<figure class=\"study-figure\"><a href=\"assets/anatomy-notes/pdf-046.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/anatomy-notes/pdf-046.webp\" alt=\"奕翔解剖原筆記 PDF第46頁，點圖放大\" loading=\"lazy\"></a><figcaption>賴奕翔《奕翔的解剖筆記三版》2021-07-25，PDF第46頁（含封面；非手寫頁碼）。原頁完整保留，點圖放大。</figcaption></figure><p><strong>讀圖順序：</strong>在腕部小圖上將掌／背、橈／尺分成四角。FCR、FCU位掌側；ECRL/B與ECU位背側，再比共同方向。</p>"
   },
   {
    "id": "wrist-force-3",
    "title": "03｜肌肉／結構對照（教材補充）",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"構造／附著／位置／作用／內容／神經／考點\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">附著／位置</th><th scope=\"col\">作用／內容</th><th scope=\"col\">神經／考點</th></tr></thead><tbody><tr><td>FCR＋FCU</td><td>掌側兩邊</td><td>屈腕分量相加，橈尺偏分量可互抵</td><td>正中＋尺神經</td></tr><tr><td>ECRL/B＋ECU</td><td>背側兩邊</td><td>伸腕</td><td>橈神經系統</td></tr><tr><td>FCR＋ECRL/B</td><td>橈側的前後兩邊</td><td>橈偏，屈伸分量可互抵</td><td>跨不同神經仍可協同</td></tr><tr><td>FCU＋ECU</td><td>尺側的前後兩邊</td><td>尺偏</td><td>尺神經＋橈神經系統</td></tr></tbody></table></div>"
   },
   {
    "id": "wrist-force-4",
    "title": "04｜最容易混的地方",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較／分辨方法\"><table><thead><tr><th scope=\"col\">比較</th><th scope=\"col\">分辨方法</th></tr></thead><tbody><tr><td>橈偏與旋後</td><td>前者是腕部偏移；後者是橈尺關節旋轉。</td></tr><tr><td>尺側名字與尺神經</td><td>ECU有尺側之名，神經仍屬橈神經系統。</td></tr></tbody></table></div><div class=\"study-note\"><strong>教材核對／補充：</strong>屈伸與橈尺偏可同時存在；不用把一條肌肉限制成只有一個動作。</div>"
   }
  ]
 },
 {
  "id": "posterior-forearm",
  "title": "後室肌群與旋後",
  "english": "Posterior forearm",
  "summary": "橈神經家族控制後室，先分淺層、深層與屈肘例外。",
  "sources": [
   "M4VIDEO",
   "YX2021",
   "M4FOREARM"
  ],
  "sections": [
   {
    "id": "posterior-forearm-1",
    "title": "01｜先建立位置與動作",
    "html": "<p>後室先把「肱橈肌屈肘、旋後肌旋後」挑出，其餘再依腕、四指、拇指、食指分群。名字告訴作用，附著告訴跨哪些關節。</p>"
   },
   {
    "id": "posterior-forearm-2",
    "title": "02｜原筆記圖與指認任務",
    "html": "<figure class=\"study-figure\"><a href=\"assets/anatomy-notes/pdf-046.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/anatomy-notes/pdf-046.webp\" alt=\"奕翔解剖原筆記 PDF第46頁，點圖放大\" loading=\"lazy\"></a><figcaption>賴奕翔《奕翔的解剖筆記三版》2021-07-25，PDF第46頁（含封面；非手寫頁碼）。原頁完整保留，點圖放大。</figcaption></figure><p><strong>讀圖順序：</strong>由圖後室上外側的肱橈肌和橈側伸腕肌開始，沿淺排看ED、EDM、ECU；深排追向拇指及食指。</p>"
   },
   {
    "id": "posterior-forearm-3",
    "title": "03｜肌肉／結構對照（教材補充）",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"構造／附著／位置／作用／內容／神經／考點\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">附著／位置</th><th scope=\"col\">作用／內容</th><th scope=\"col\">神經／考點</th></tr></thead><tbody><tr><td>肱橈肌 BR</td><td>外上髁上脊→橈骨莖突近端</td><td>中立位屈肘</td><td>橈神經本幹</td></tr><tr><td>ECRL／ECRB</td><td>上髁上脊／共同伸肌起點→第2／3掌骨底</td><td>伸腕、橈偏</td><td>ECRL橈神經；ECRB多為深支</td></tr><tr><td>伸指肌ED／小指伸肌EDM／ECU</td><td>共同伸肌起點→伸肌腱膜／第5掌骨底</td><td>伸指／小指伸展／伸腕尺偏</td><td>深支延續之後骨間神經系統</td></tr><tr><td>旋後肌 supinator</td><td>外上髁、韌帶及尺骨→近端橈骨</td><td>旋後</td><td>橈神經深支穿過</td></tr><tr><td>APL、EPB、EPL、EI</td><td>尺橈骨及骨間膜→拇指／食指</td><td>拇指外展伸展、食指獨立伸展</td><td>後骨間神經 PIN</td></tr></tbody></table></div>"
   },
   {
    "id": "posterior-forearm-4",
    "title": "04｜最容易混的地方",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較／分辨方法\"><table><thead><tr><th scope=\"col\">比較</th><th scope=\"col\">分辨方法</th></tr></thead><tbody><tr><td>肱二頭肌與旋後肌</td><td>都能旋後；前者肌皮神經且屈肘時有力，後者橈神經深支。</td></tr><tr><td>深支與PIN</td><td>典型以穿越旋後肌後稱PIN；不要把所有分支近端層級寫成完全相同。</td></tr></tbody></table></div><div class=\"study-note\"><strong>教材核對／補充：</strong>PIN損傷主要看伸指等運動障礙；高位橈神經損傷才可能同時影響肱橈肌及更廣泛的伸腕功能。</div>"
   }
  ]
 },
 {
  "id": "extensor-compartments",
  "title": "腕背六腱室：從橈側數到尺側",
  "english": "Six dorsal tendon compartments",
  "summary": "用1到6定位肌腱，將拇指肌腱和腕肌腱分開。",
  "sources": [
   "M4VIDEO",
   "YX2021",
   "M4FOREANS"
  ],
  "sections": [
   {
    "id": "extensor-compartments-1",
    "title": "01｜先建立位置與動作",
    "html": "<p>先用「二、二、一、二、一、一」記每室肌腱名稱組數，再填1拇外展短伸、2雙橈伸腕、3拇長伸、4伸指食指、5小指、6尺伸腕。ED本身有多條肌腱，不把組數當實際腱數。</p>"
   },
   {
    "id": "extensor-compartments-2",
    "title": "02｜原筆記圖與指認任務",
    "html": "<figure class=\"study-figure\"><a href=\"assets/anatomy-notes/pdf-046.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/anatomy-notes/pdf-046.webp\" alt=\"奕翔解剖原筆記 PDF第46頁，點圖放大\" loading=\"lazy\"></a><figcaption>賴奕翔《奕翔的解剖筆記三版》2021-07-25，PDF第46頁（含封面；非手寫頁碼）。原頁完整保留，點圖放大。</figcaption></figure><p><strong>讀圖順序：</strong>沿後室圖腕端的紅色支持帶找數字1–6；先找第1室的兩條拇指腱，再找到第3室EPL的斜向路徑。</p>"
   },
   {
    "id": "extensor-compartments-3",
    "title": "03｜肌肉／結構對照（教材補充）",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"構造／附著／位置／作用／內容／神經／考點\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">附著／位置</th><th scope=\"col\">作用／內容</th><th scope=\"col\">神經／考點</th></tr></thead><tbody><tr><td>第1室</td><td>橈側莖突附近</td><td>APL＋EPB</td><td>拇長外展＋拇短伸</td></tr><tr><td>第2室</td><td>橈背側</td><td>ECRL＋ECRB</td><td>橈側伸腕兩肌</td></tr><tr><td>第3室</td><td>橈骨背側結節尺側繞行</td><td>EPL</td><td>拇長伸</td></tr><tr><td>第4室</td><td>背側中央</td><td>ED＋EI</td><td>伸指＋伸食指</td></tr><tr><td>第5室</td><td>較尺側</td><td>EDM</td><td>小指伸肌</td></tr><tr><td>第6室</td><td>尺骨遠端背側</td><td>ECU</td><td>尺側伸腕肌</td></tr></tbody></table></div>"
   },
   {
    "id": "extensor-compartments-4",
    "title": "04｜最容易混的地方",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較／分辨方法\"><table><thead><tr><th scope=\"col\">比較</th><th scope=\"col\">分辨方法</th></tr></thead><tbody><tr><td>第1與第3室</td><td>第1有APL/EPB兩腱，第3只有EPL；長外展不是長伸。</td></tr><tr><td>六腱室與腕隧道</td><td>前者背側受伸肌支持帶約束；後者掌側在屈肌支持帶深面。</td></tr></tbody></table></div><div class=\"study-note\"><strong>教材核對／補充：</strong>數的是六個骨纖維通道；肌肉名稱組數和實際肌腱數不同。</div>"
   }
  ]
 },
 {
  "id": "carpal-tunnel",
  "title": "腕隧道：九腱一神經與隧道外",
  "english": "Carpal tunnel",
  "summary": "先畫屋頂和骨性溝，再決定每個結構究竟有沒有進隧道。",
  "sources": [
   "M4VIDEO",
   "YX2021",
   "M4HANDANS",
   "M4PERIPH"
  ],
  "sections": [
   {
    "id": "carpal-tunnel-1",
    "title": "01｜先建立位置與動作",
    "html": "<p>先把隧道圈出，再點數4＋4＋1腱；神經另算。接著將FCR、PL、尺神經血管、橈動脈放回正確的隧道外路徑。</p>"
   },
   {
    "id": "carpal-tunnel-2",
    "title": "02｜原筆記圖與指認任務",
    "html": "<figure class=\"study-figure\"><a href=\"assets/anatomy-notes/pdf-046.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/anatomy-notes/pdf-046.webp\" alt=\"奕翔解剖原筆記 PDF第46頁，點圖放大\" loading=\"lazy\"></a><figcaption>賴奕翔《奕翔的解剖筆記三版》2021-07-25，PDF第46頁（含封面；非手寫頁碼）。原頁完整保留，點圖放大。</figcaption></figure><p><strong>讀圖順序：</strong>看頁下腕橫切面：上方屈肌支持帶為屋頂，下方腕骨成溝；在隧道內圈正中神經與屈指腱，再把表面的神經血管排除。</p>"
   },
   {
    "id": "carpal-tunnel-3",
    "title": "03｜肌肉／結構對照（教材補充）",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"構造／附著／位置／作用／內容／神經／考點\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">附著／位置</th><th scope=\"col\">作用／內容</th><th scope=\"col\">神經／考點</th></tr></thead><tbody><tr><td>屋頂／底壁</td><td>屈肌支持帶／腕骨溝</td><td>橈側舟骨、大多角骨；尺側豆狀骨、鉤骨鉤</td><td>支持帶附著以舟骨與大多角骨、豆狀骨與鉤骨鉤記</td></tr><tr><td>隧道內容</td><td>4FDS＋4FDP＋1FPL</td><td>九條肌腱與正中神經</td><td>不是九條肌肉</td></tr><tr><td>FCR腱</td><td>支持帶橈側獨立通道</td><td>不算主要腕隧道九腱</td><td>即使在支持帶內也非同一隧道</td></tr><tr><td>PL腱／尺神經與尺動脈</td><td>PL表面；尺神經血管走Guyon管</td><td>均不算腕隧道內容</td><td>橈動脈也在隧道外</td></tr><tr><td>正中神經掌皮支</td><td>通常由支持帶表面通過</td><td>魚際表面皮膚可相對保留</td><td>魚際運動支走向與皮支不同</td></tr></tbody></table></div>"
   },
   {
    "id": "carpal-tunnel-4",
    "title": "04｜最容易混的地方",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較／分辨方法\"><table><thead><tr><th scope=\"col\">比較</th><th scope=\"col\">分辨方法</th></tr></thead><tbody><tr><td>腕隧道與AIN損傷</td><td>前者正中神經遠端壓迫；AIN在前臂，影響FPL／食指FDP與PQ。</td></tr><tr><td>Tinel與確診</td><td>叩擊誘發麻感是線索，不能只靠單一徵象確診。</td></tr></tbody></table></div><div class=\"study-note\"><strong>教材核對／補充：</strong>猴手、魚際萎縮與正中神經損傷有關，但不是每位腕隧道患者都有，也不能用單一手形判定位點。</div>"
   }
  ]
 },
 {
  "id": "snuffbox",
  "title": "解剖鼻煙窩：邊界不等於內容",
  "english": "Anatomical snuffbox",
  "summary": "把三條拇指腱、兩塊底部腕骨與橈動脈分層。",
  "sources": [
   "M4VIDEO",
   "YX2021",
   "M4FOREANS"
  ],
  "sections": [
   {
    "id": "snuffbox-1",
    "title": "01｜先建立位置與動作",
    "html": "<p>伸拇指後先指兩邊肌腱，再從表面到深部想頭靜脈／感覺支、橈動脈、骨性底。每說一個名字同時說它是哪一層。</p>"
   },
   {
    "id": "snuffbox-2",
    "title": "02｜原筆記圖與指認任務",
    "html": "<figure class=\"study-figure\"><a href=\"assets/anatomy-notes/pdf-046.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/anatomy-notes/pdf-046.webp\" alt=\"奕翔解剖原筆記 PDF第46頁，點圖放大\" loading=\"lazy\"></a><figcaption>賴奕翔《奕翔的解剖筆記三版》2021-07-25，PDF第46頁（含封面；非手寫頁碼）。原頁完整保留，點圖放大。</figcaption></figure><p><strong>讀圖順序：</strong>看原頁鼻煙窩文字與腕背肌腱圖，先找第1室APL／EPB，再找第3室EPL。以自己伸拇指的手背凹陷比位置。</p>"
   },
   {
    "id": "snuffbox-3",
    "title": "03｜肌肉／結構對照（教材補充）",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"構造／附著／位置／作用／內容／神經／考點\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">附著／位置</th><th scope=\"col\">作用／內容</th><th scope=\"col\">神經／考點</th></tr></thead><tbody><tr><td>橈側／外側界</td><td>APL＋EPB肌腱</td><td>兩條形成一邊</td><td>第1腱室</td></tr><tr><td>尺側／內側界</td><td>EPL肌腱</td><td>拇長伸形成另一邊</td><td>第3腱室</td></tr><tr><td>骨性底</td><td>舟骨、大多角骨</td><td>底部可觸及舟骨區</td><td>ECRL/B腱也與底部深層關係相關</td></tr><tr><td>深部通過／表淺跨越</td><td>橈動脈／頭靜脈、橈神經淺支</td><td>不同深度，不全塞成同一層</td><td>橈神經淺支為感覺支</td></tr></tbody></table></div>"
   },
   {
    "id": "snuffbox-4",
    "title": "04｜最容易混的地方",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較／分辨方法\"><table><thead><tr><th scope=\"col\">比較</th><th scope=\"col\">分辨方法</th></tr></thead><tbody><tr><td>邊界和經過</td><td>三條拇指腱形成邊界；橈動脈是通過者。</td></tr><tr><td>短伸與短外展</td><td>鼻煙窩邊界為EPB，別寫成手內在肌APB。</td></tr></tbody></table></div><div class=\"study-note\"><strong>教材核對／補充：</strong>舟骨壓痛是典型定位連結；症狀與是否骨折仍須靠完整評估，這裡只練解剖位置。</div>"
   }
  ]
 },
 {
  "id": "hand-intrinsics",
  "title": "手內在肌：魚際、小魚際與神經",
  "english": "Intrinsic hand muscles",
  "summary": "大多尺神經，正中神經例外要同時記肌肉和分支。",
  "sources": [
   "M4VIDEO",
   "YX2021",
   "M4HAND",
   "M4VAR",
   "M4PERIPH"
  ],
  "sections": [
   {
    "id": "hand-intrinsics-1",
    "title": "01｜先建立位置與動作",
    "html": "<p>先把手內在肌分成拇指、小指、中央、骨間四群。總規則是尺神經為主，再把魚際與外側兩蚓狀圈成正中例外。</p>"
   },
   {
    "id": "hand-intrinsics-2",
    "title": "02｜原筆記圖與指認任務",
    "html": "<figure class=\"study-figure\"><a href=\"assets/anatomy-notes/pdf-047.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/anatomy-notes/pdf-047.webp\" alt=\"奕翔解剖原筆記 PDF第47頁，點圖放大\" loading=\"lazy\"></a><figcaption>賴奕翔《奕翔的解剖筆記三版》2021-07-25，PDF第47頁（含封面；非手寫頁碼）。原頁完整保留，點圖放大。</figcaption></figure><p><strong>讀圖順序：</strong>先看拇側OAF與小指側OAF，將對掌、外展、屈曲逐一做出；再圈拇收肌，確認它雖在拇指區卻屬尺神經。</p>"
   },
   {
    "id": "hand-intrinsics-3",
    "title": "03｜肌肉／結構對照（教材補充）",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"構造／附著／位置／作用／內容／神經／考點\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">附著／位置</th><th scope=\"col\">作用／內容</th><th scope=\"col\">神經／考點</th></tr></thead><tbody><tr><td>魚際肌</td><td>APB、OP、FPB淺頭</td><td>拇指掌側外展、對掌、屈MCP</td><td>典型正中神經返支；FPB深頭常有尺神經成分／變異</td></tr><tr><td>拇收肌</td><td>斜頭及橫頭→拇指近節底</td><td>拇指內收、捏持</td><td>尺神經深支</td></tr><tr><td>小魚際三肌</td><td>ADM、FDMB、ODM</td><td>小指外展、屈曲、對掌</td><td>尺神經深支</td></tr><tr><td>掌短肌</td><td>掌腱膜／支持帶→尺側掌皮</td><td>皺縮尺側手掌皮膚</td><td>尺神經淺支</td></tr><tr><td>第1、2蚓狀肌</td><td>第2、3指對應FDP腱</td><td>MCP屈＋IP伸</td><td>正中神經掌指支，非魚際返支</td></tr></tbody></table></div>"
   },
   {
    "id": "hand-intrinsics-4",
    "title": "04｜最容易混的地方",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較／分辨方法\"><table><thead><tr><th scope=\"col\">比較</th><th scope=\"col\">分辨方法</th></tr></thead><tbody><tr><td>LOAF的範圍</td><td>L外側兩蚓狀、O對掌、A短外展、F短屈作入門；FPB深頭及變異另記。</td></tr><tr><td>正中返支與掌指支</td><td>魚際主要返支；外側兩蚓狀由掌指支。</td></tr></tbody></table></div><div class=\"study-note\"><strong>教材核對／補充：</strong>「全部手內在肌都由尺神經深支」錯：正中例外之外，掌短肌走尺神經淺支；FPB深頭也不能一概寫死。</div>"
   }
  ]
 },
 {
  "id": "lumbricals-interossei",
  "title": "蚓狀肌與骨間肌：MCP屈、IP伸",
  "english": "Lumbricals & interossei",
  "summary": "用肌腱路徑解釋看似相反的關節動作，再分外展內收。",
  "sources": [
   "M4VIDEO",
   "YX2021",
   "M4HAND",
   "M4VAR"
  ],
  "sections": [
   {
    "id": "lumbricals-interossei-1",
    "title": "01｜先建立位置與動作",
    "html": "<p>先畫肌腱在MCP掌側、在IP背側伸肌裝置的路線，才記「掌指屈、指間伸」。最後加上DAB／PAD和神經二二分。</p>"
   },
   {
    "id": "lumbricals-interossei-2",
    "title": "02｜原筆記圖與指認任務",
    "html": "<figure class=\"study-figure\"><a href=\"assets/anatomy-notes/pdf-047.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/anatomy-notes/pdf-047.webp\" alt=\"奕翔解剖原筆記 PDF第47頁，點圖放大\" loading=\"lazy\"></a><figcaption>賴奕翔《奕翔的解剖筆記三版》2021-07-25，PDF第47頁（含封面；非手寫頁碼）。原頁完整保留，點圖放大。</figcaption></figure><p><strong>讀圖順序：</strong>看中段蚓狀肌的手勢：掌指關節屈、兩個指間關節伸。下段以中指作軸，看掌側向軸收、背側離軸開。</p>"
   },
   {
    "id": "lumbricals-interossei-3",
    "title": "03｜肌肉／結構對照（教材補充）",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"構造／附著／位置／作用／內容／神經／考點\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">附著／位置</th><th scope=\"col\">作用／內容</th><th scope=\"col\">神經／考點</th></tr></thead><tbody><tr><td>蚓狀肌4條</td><td>FDP腱→伸肌腱膜橈側</td><td>屈MCP、伸PIP/DIP</td><td>第1–2正中；第3–4尺神經深支</td></tr><tr><td>背側骨間肌4條</td><td>相鄰掌骨→近節底與伸肌腱膜</td><td>DAB：外展，並協助MCP屈/IP伸</td><td>尺神經深支</td></tr><tr><td>掌側骨間肌典型3條</td><td>第2、4、5掌骨→近節底／伸肌腱膜</td><td>PAD：內收，並協助MCP屈/IP伸</td><td>尺神經深支</td></tr><tr><td>計數模型</td><td>部分教材另算拇指掌側骨間肌</td><td>可出現3或4條描述</td><td>原筆記寫4，須註明採用模型</td></tr></tbody></table></div>"
   },
   {
    "id": "lumbricals-interossei-4",
    "title": "04｜最容易混的地方",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較／分辨方法\"><table><thead><tr><th scope=\"col\">比較</th><th scope=\"col\">分辨方法</th></tr></thead><tbody><tr><td>手指外展的軸</td><td>第2–5指以第3指軸為準，非整隻手的身體正中線。</td></tr><tr><td>蚓狀與FDS/FDP</td><td>蚓狀/IP伸；長屈指腱/IP屈，不能只看同在掌側就判相同。</td></tr></tbody></table></div><div class=\"study-note\"><strong>教材核對／補充：</strong>原筆記的掌側骨間肌4條不是唯一計數；常規考題多用3掌、4背。先看題目是否把拇指成分獨立計入。</div>"
   }
  ]
 },
 {
  "id": "gluteal-muscles",
  "title": "臀肌：伸髖、外展與骨盆穩定",
  "english": "Gluteal muscles",
  "summary": "臀大肌起身用力；臀中小肌在支撐側維持骨盆。",
  "sources": [
   "M4VIDEO",
   "YX2021",
   "M4GLUTEAL"
  ],
  "sections": [
   {
    "id": "gluteal-muscles-1",
    "title": "01｜先建立位置與動作",
    "html": "<p>先用動作分兩群：起身爬階需要強力伸髖的臀大肌；單腳站立需要臀中小肌穩住骨盆。再把上、下臀神經放回去。</p>"
   },
   {
    "id": "gluteal-muscles-2",
    "title": "02｜原筆記圖與指認任務",
    "html": "<figure class=\"study-figure\"><a href=\"assets/anatomy-notes/pdf-048.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/anatomy-notes/pdf-048.webp\" alt=\"奕翔解剖原筆記 PDF第48頁，點圖放大\" loading=\"lazy\"></a><figcaption>賴奕翔《奕翔的解剖筆記三版》2021-07-25，PDF第48頁（含封面；非手寫頁碼）。原頁完整保留，點圖放大。</figcaption></figure><p><strong>讀圖順序：</strong>這是背側圖：先找最淺臀大肌，再看深面的臀中、臀小肌。想像右腳站地、左腳抬起，觀察對側骨盆的重量。</p>"
   },
   {
    "id": "gluteal-muscles-3",
    "title": "03｜肌肉／結構對照（教材補充）",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"構造／附著／位置／作用／內容／神經／考點\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">附著／位置</th><th scope=\"col\">作用／內容</th><th scope=\"col\">神經／考點</th></tr></thead><tbody><tr><td>臀大肌</td><td>髂骨後部／薦尾骨等→髂脛束及臀肌粗隆</td><td>強力伸髖，並有外旋</td><td>臀下神經</td></tr><tr><td>臀中肌</td><td>髂骨外側→大轉子外側</td><td>外展，支撐側穩定骨盆</td><td>臀上神經</td></tr><tr><td>臀小肌</td><td>髂骨外側較深→大轉子前面</td><td>外展、內旋與穩定</td><td>臀上神經</td></tr><tr><td>闊筋膜張肌</td><td>ASIS／髂嵴前方→髂脛束</td><td>屈髖、外展、內旋與張緊髂脛束</td><td>臀上神經</td></tr></tbody></table></div>"
   },
   {
    "id": "gluteal-muscles-4",
    "title": "04｜最容易混的地方",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較／分辨方法\"><table><thead><tr><th scope=\"col\">比較</th><th scope=\"col\">分辨方法</th></tr></thead><tbody><tr><td>Trendelenburg側別</td><td>右支撐側外展機制弱，可見左側骨盆下垂；病變側與下垂側不同。</td></tr><tr><td>臀上與臀下</td><td>中、小、TFL走上；臀大走下。名稱不是按肌肉在圖上高低。</td></tr></tbody></table></div><div class=\"study-note\"><strong>教材核對／補充：</strong>骨盆下垂反映支撐側外展機制問題，也可能有肌腱或骨性原因；不能僅憑一個動作直接斷言神經受傷。</div>"
   }
  ]
 },
 {
  "id": "thigh-map",
  "title": "大腿總圖：前、內、後三室",
  "english": "Thigh compartments",
  "summary": "先把神經和關節動作放進三室，再拆例外。",
  "sources": [
   "M4VIDEO",
   "YX2021",
   "M4THIGH"
  ],
  "sections": [
   {
    "id": "thigh-map-1",
    "title": "01｜先建立位置與動作",
    "html": "<p>每室先只寫一條主要神經、一個主要動作、一條代表肌。讀到細表時把例外加回同一張圖，而不是重背另一份清單。</p>"
   },
   {
    "id": "thigh-map-2",
    "title": "02｜原筆記圖與指認任務",
    "html": "<figure class=\"study-figure\"><a href=\"assets/anatomy-notes/pdf-049.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/anatomy-notes/pdf-049.webp\" alt=\"奕翔解剖原筆記 PDF第49頁，點圖放大\" loading=\"lazy\"></a><figcaption>賴奕翔《奕翔的解剖筆記三版》2021-07-25，PDF第49頁（含封面；非手寫頁碼）。原頁完整保留，點圖放大。</figcaption></figure><p><strong>讀圖順序：</strong>看頁上三分圓圖，先放前股、內閉孔、後坐骨；再到第50頁橫切圖找股骨中心與各室的相對位置。</p>"
   },
   {
    "id": "thigh-map-3",
    "title": "03｜肌肉／結構對照（教材補充）",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"構造／附著／位置／作用／內容／神經／考點\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">附著／位置</th><th scope=\"col\">作用／內容</th><th scope=\"col\">神經／考點</th></tr></thead><tbody><tr><td>前室</td><td>髂腰肌、縫匠肌、股四頭肌相關</td><td>屈髖、伸膝</td><td>主要股神經；腰大肌另有腰神經直接支</td></tr><tr><td>內側室</td><td>長短大內收、股薄、閉孔外肌等</td><td>內收；另有屈髖或伸髖成分</td><td>主要閉孔神經；恥骨肌、內收大肌腿後部例外</td></tr><tr><td>後室</td><td>股二頭、半腱、半膜</td><td>伸髖、屈膝</td><td>主要坐骨神經脛側部；股二頭短頭腓總側</td></tr><tr><td>外側的筋膜地標</td><td>髂脛束及闊筋膜張肌</td><td>連接臀區與膝外側穩定</td><td>不要另造一條「外側大腿主神經」取代三室</td></tr></tbody></table></div>"
   },
   {
    "id": "thigh-map-4",
    "title": "04｜最容易混的地方",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較／分辨方法\"><table><thead><tr><th scope=\"col\">比較</th><th scope=\"col\">分辨方法</th></tr></thead><tbody><tr><td>大腿和小腿</td><td>股四頭肌伸的是膝／小腿；不是把股骨向後伸。</td></tr><tr><td>例外和規則</td><td>先背前股、內閉、後坐骨，再附恥骨肌、內收大肌、二頭短頭。</td></tr></tbody></table></div><div class=\"study-note\"><strong>教材核對／補充：</strong>部位、作用、神經三種分類未必完全重疊；髂腰肌與恥骨肌尤其需要分清。</div>"
   }
  ]
 },
 {
  "id": "anterior-thigh",
  "title": "大腿前側：股四頭肌與縫匠肌",
  "english": "Anterior thigh muscles",
  "summary": "用跨不跨髖關節分股直肌與三廣肌，再接鵝足。",
  "sources": [
   "M4VIDEO",
   "YX2021",
   "M4THIGH"
  ],
  "sections": [
   {
    "id": "anterior-thigh-1",
    "title": "01｜先建立位置與動作",
    "html": "<p>沿每條肌的起止點畫線，確認跨髖或跨膝。股直肌跨兩關節，三廣肌只跨膝；縫匠肌斜跨兩關節，動作分髖與膝兩列。</p>"
   },
   {
    "id": "anterior-thigh-2",
    "title": "02｜原筆記圖與指認任務",
    "html": "<figure class=\"study-figure\"><a href=\"assets/anatomy-notes/pdf-049.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/anatomy-notes/pdf-049.webp\" alt=\"奕翔解剖原筆記 PDF第49頁，點圖放大\" loading=\"lazy\"></a><figcaption>賴奕翔《奕翔的解剖筆記三版》2021-07-25，PDF第49頁（含封面；非手寫頁碼）。原頁完整保留，點圖放大。</figcaption></figure><p><strong>讀圖順序：</strong>先在上段找股直肌與三廣肌，再沿縫匠肌從外上向內下的斜線走到脛骨內側。膝關節肌在股中間肌深面。</p>"
   },
   {
    "id": "anterior-thigh-3",
    "title": "03｜肌肉／結構對照（教材補充）",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"構造／附著／位置／作用／內容／神經／考點\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">附著／位置</th><th scope=\"col\">作用／內容</th><th scope=\"col\">神經／考點</th></tr></thead><tbody><tr><td>股直肌 RF</td><td>髂前下棘／髖臼上緣→髕骨及髕韌帶至脛骨粗隆</td><td>伸膝並屈髖</td><td>股神經；跨髖、膝</td></tr><tr><td>內／外／中間廣肌</td><td>股骨→髕骨及伸膝裝置</td><td>伸膝；不直接屈髖</td><td>股神經；中間廣肌在股直肌深面</td></tr><tr><td>縫匠肌 sartorius</td><td>ASIS→鵝足脛骨內上方</td><td>屈髖、外展、外旋；屈膝，屈膝時內旋小腿</td><td>股神經</td></tr><tr><td>髂肌／腰大肌</td><td>髂窩／腰椎→小轉子</td><td>屈髖</td><td>髂肌股神經；腰大肌腰神經前支</td></tr><tr><td>膝關節肌</td><td>股骨遠端前面→膝關節囊</td><td>伸膝時牽提關節囊</td><td>股神經</td></tr></tbody></table></div>"
   },
   {
    "id": "anterior-thigh-4",
    "title": "04｜最容易混的地方",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較／分辨方法\"><table><thead><tr><th scope=\"col\">比較</th><th scope=\"col\">分辨方法</th></tr></thead><tbody><tr><td>ASIS與AIIS</td><td>縫匠ASIS；股直肌直頭AIIS，不要把前上／前下對調。</td></tr><tr><td>股直肌與廣肌</td><td>都伸膝；只有股直肌跨髖，具屈髖功能。</td></tr></tbody></table></div><div class=\"study-note\"><strong>教材核對／補充：</strong>股神經不是每一個屈髖肌的唯一神經；腰大肌主要由腰神經直接分支支配。</div>"
   }
  ]
 },
 {
  "id": "medial-thigh",
  "title": "大腿內側：內收肌與雙重神經",
  "english": "Medial thigh muscles",
  "summary": "內收大肌拆兩部，恥骨肌作股神經例外。",
  "sources": [
   "M4VIDEO",
   "YX2021",
   "M4LOWER"
  ],
  "sections": [
   {
    "id": "medial-thigh-1",
    "title": "01｜先建立位置與動作",
    "html": "<p>把同一條內收大肌畫成兩束：恥坐支到粗線的斜束，與坐骨結節到內收結節的縱束。用起止點連接神經及功能。</p>"
   },
   {
    "id": "medial-thigh-2",
    "title": "02｜原筆記圖與指認任務",
    "html": "<figure class=\"study-figure\"><a href=\"assets/anatomy-notes/pdf-049.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/anatomy-notes/pdf-049.webp\" alt=\"奕翔解剖原筆記 PDF第49頁，點圖放大\" loading=\"lazy\"></a><figcaption>賴奕翔《奕翔的解剖筆記三版》2021-07-25，PDF第49頁（含封面；非手寫頁碼）。原頁完整保留，點圖放大。</figcaption></figure><p><strong>讀圖順序：</strong>看中段的長短大內收肌，將內收大肌的兩部用兩個框分開；股薄肌往下越過膝，其他多止於股骨。</p>"
   },
   {
    "id": "medial-thigh-3",
    "title": "03｜肌肉／結構對照（教材補充）",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"構造／附著／位置／作用／內容／神經／考點\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">附著／位置</th><th scope=\"col\">作用／內容</th><th scope=\"col\">神經／考點</th></tr></thead><tbody><tr><td>長／短內收肌</td><td>恥骨→股骨粗線及其附近</td><td>內收髖，具屈髖成分</td><td>閉孔神經為主</td></tr><tr><td>內收大肌內收部</td><td>坐恥骨支→臀肌粗隆、粗線及內側髁上線</td><td>內收，部分纖維屈髖</td><td>閉孔神經後支</td></tr><tr><td>內收大肌腿後部</td><td>坐骨結節→內收結節</td><td>伸髖並內收</td><td>坐骨神經脛側部</td></tr><tr><td>股薄肌 gracilis</td><td>恥骨→鵝足</td><td>內收髖、屈膝及屈膝時內旋小腿</td><td>閉孔神經</td></tr><tr><td>恥骨肌 pectineus</td><td>恥骨梳→股骨恥骨肌線</td><td>內收、屈髖</td><td>主要股神經；可有閉孔／副閉孔成分</td></tr><tr><td>閉孔外肌</td><td>閉孔膜外面及邊緣→轉子窩</td><td>外旋並穩定髖</td><td>閉孔神經</td></tr></tbody></table></div>"
   },
   {
    "id": "medial-thigh-4",
    "title": "04｜最容易混的地方",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較／分辨方法\"><table><thead><tr><th scope=\"col\">比較</th><th scope=\"col\">分辨方法</th></tr></thead><tbody><tr><td>內收大肌兩部</td><td>內收部閉孔；腿後部坐骨脛側，動作和起止也一起拆。</td></tr><tr><td>內收部與伸髖</td><td>不能把整條內收大肌寫成只屈髖，腿後部可伸髖。</td></tr></tbody></table></div><div class=\"study-note\"><strong>教材核對／補充：</strong>恥骨肌不能因為能內收就一概歸閉孔神經；內收大肌也不能整條只寫閉孔。</div>"
   }
  ]
 },
 {
  "id": "hamstrings",
  "title": "腿後肌：長短頭、內外旋與鵝足",
  "english": "Hamstrings & pes anserinus",
  "summary": "用坐骨結節與膝內外側終點記肌肉群，再拆短頭例外。",
  "sources": [
   "M4VIDEO",
   "YX2021",
   "M4GLUTEAL"
  ],
  "sections": [
   {
    "id": "hamstrings-1",
    "title": "01｜先建立位置與動作",
    "html": "<p>先找膝內外兩邊：二頭到腓骨外側，半腱半膜到脛骨內側。再看起點是否坐骨結節，判斷能不能伸髖。</p>"
   },
   {
    "id": "hamstrings-2",
    "title": "02｜原筆記圖與指認任務",
    "html": "<figure class=\"study-figure\"><a href=\"assets/anatomy-notes/pdf-049.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/anatomy-notes/pdf-049.webp\" alt=\"奕翔解剖原筆記 PDF第49頁，點圖放大\" loading=\"lazy\"></a><figcaption>賴奕翔《奕翔的解剖筆記三版》2021-07-25，PDF第49頁（含封面；非手寫頁碼）。原頁完整保留，點圖放大。</figcaption></figure><p><strong>讀圖順序：</strong>在下段先找外側股二頭肌，再指內側半腱、半膜；原頁刪除線是提示短頭不跨髖，不能把長短頭作用合寫。</p>"
   },
   {
    "id": "hamstrings-3",
    "title": "03｜肌肉／結構對照（教材補充）",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"構造／附著／位置／作用／內容／神經／考點\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">附著／位置</th><th scope=\"col\">作用／內容</th><th scope=\"col\">神經／考點</th></tr></thead><tbody><tr><td>股二頭肌長頭</td><td>坐骨結節→腓骨頭</td><td>伸髖、屈膝；屈膝時外旋小腿</td><td>坐骨神經脛側部</td></tr><tr><td>股二頭肌短頭</td><td>股骨粗線外側等→腓骨頭</td><td>屈膝、屈膝時外旋；不直接伸髖</td><td>坐骨神經腓總側部</td></tr><tr><td>半腱肌</td><td>坐骨結節→鵝足脛骨內側</td><td>伸髖、屈膝、屈膝時內旋</td><td>坐骨神經脛側部</td></tr><tr><td>半膜肌</td><td>坐骨結節→脛骨內髁後面</td><td>伸髖、屈膝、屈膝時內旋</td><td>坐骨神經脛側部</td></tr><tr><td>鵝足三肌</td><td>縫匠／股薄／半腱→脛骨內上側</td><td>共同參與膝內側功能</td><td>股／閉孔／坐骨脛側：三個來源</td></tr></tbody></table></div>"
   },
   {
    "id": "hamstrings-4",
    "title": "04｜最容易混的地方",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較／分辨方法\"><table><thead><tr><th scope=\"col\">比較</th><th scope=\"col\">分辨方法</th></tr></thead><tbody><tr><td>二頭長頭與短頭</td><td>短頭起股骨不跨髖，也不符合所有典型腿後肌條件。</td></tr><tr><td>半腱與半膜</td><td>半腱到鵝足；半膜到脛骨內髁後面，兩者不是同一止點。</td></tr></tbody></table></div><div class=\"study-note\"><strong>教材核對／補充：</strong>腿後肌群的區域歸類與嚴格定義可不同；股二頭短頭常列後室，但不跨髖、神經分部也不同。</div>"
   }
  ]
 },
 {
  "id": "femoral-triangle",
  "title": "股三角與股鞘：外到內NAVEL",
  "english": "Femoral triangle & sheath",
  "summary": "先畫三邊與底，再分神經是否進股鞘。",
  "sources": [
   "M4VIDEO",
   "YX2021",
   "M4THIGH"
  ],
  "sections": [
   {
    "id": "femoral-triangle-1",
    "title": "01｜先建立位置與動作",
    "html": "<p>先固定外到內順序N-A-V-股管，再畫股鞘只包A、V與股管。用「三角內」和「鞘內」兩個不同框避免混淆。</p>"
   },
   {
    "id": "femoral-triangle-2",
    "title": "02｜原筆記圖與指認任務",
    "html": "<figure class=\"study-figure\"><a href=\"assets/anatomy-notes/pdf-050.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/anatomy-notes/pdf-050.webp\" alt=\"奕翔解剖原筆記 PDF第50頁，點圖放大\" loading=\"lazy\"></a><figcaption>賴奕翔《奕翔的解剖筆記三版》2021-07-25，PDF第50頁（含封面；非手寫頁碼）。原頁完整保留，點圖放大。</figcaption></figure><p><strong>讀圖順序：</strong>看頁下三角形：腹股溝韌帶為上邊，縫匠肌外邊、長內收肌內邊。由外到內指N、A、V及股管，神經在鞘外。</p>"
   },
   {
    "id": "femoral-triangle-3",
    "title": "03｜肌肉／結構對照（教材補充）",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"構造／附著／位置／作用／內容／神經／考點\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">附著／位置</th><th scope=\"col\">作用／內容</th><th scope=\"col\">神經／考點</th></tr></thead><tbody><tr><td>三邊</td><td>上腹股溝韌帶；外縫匠肌內側緣；內長內收肌內側緣</td><td>尖端朝遠端</td><td>不要把鵝足當股三角邊界</td></tr><tr><td>底／頂</td><td>髂腰肌、恥骨肌等形成底；闊筋膜等形成頂</td><td>由外向內辨底部肌肉</td><td>教材對底邊列法可略有不同</td></tr><tr><td>NAVEL</td><td>外→內：股神經、動脈、靜脈、股管空間及淋巴</td><td>E/L常為記憶拆寫，同一股管區</td><td>不是五個股鞘分室</td></tr><tr><td>股鞘</td><td>動脈室、靜脈室、股管</td><td>包血管和股管</td><td>股神經在外側鞘外</td></tr><tr><td>隱靜脈裂孔</td><td>闊筋膜開口，篩筋膜覆蓋</td><td>大隱靜脈入股靜脈</td><td>與內收裂孔不同位置</td></tr></tbody></table></div>"
   },
   {
    "id": "femoral-triangle-4",
    "title": "04｜最容易混的地方",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較／分辨方法\"><table><thead><tr><th scope=\"col\">比較</th><th scope=\"col\">分辨方法</th></tr></thead><tbody><tr><td>股神經與股鞘</td><td>在三角內不等於在股鞘內；神經在鞘外。</td></tr><tr><td>股管與內收肌管</td><td>股管是股鞘內側短空間；內收肌管在大腿較遠端深於縫匠肌。</td></tr></tbody></table></div><div class=\"study-note\"><strong>教材核對／補充：</strong>NAVEL的E與L是空間及淋巴的口訣，不代表兩個獨立股鞘室；股管含疏鬆組織與淋巴結／管，並非完全空。</div>"
   }
  ]
 },
 {
  "id": "adductor-canal",
  "title": "內收肌管與內收裂孔：神經中途離隊",
  "english": "Adductor canal & hiatus",
  "summary": "追股血管到膕窩，同時把隱神經拉出不同出口。",
  "sources": [
   "M4VIDEO",
   "YX2021",
   "M4TOPO",
   "M4CANAL"
  ],
  "sections": [
   {
    "id": "adductor-canal-1",
    "title": "01｜先建立位置與動作",
    "html": "<p>畫一條血管線從股三角穿管、穿裂孔到膕窩；再用另一條線畫隱神經中途離開。出口比只背內容物更能辨題。</p>"
   },
   {
    "id": "adductor-canal-2",
    "title": "02｜原筆記圖與指認任務",
    "html": "<figure class=\"study-figure\"><a href=\"assets/anatomy-notes/pdf-050.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/anatomy-notes/pdf-050.webp\" alt=\"奕翔解剖原筆記 PDF第50頁，點圖放大\" loading=\"lazy\"></a><figcaption>賴奕翔《奕翔的解剖筆記三版》2021-07-25，PDF第50頁（含封面；非手寫頁碼）。原頁完整保留，點圖放大。</figcaption></figure><p><strong>讀圖順序：</strong>沿股三角尖端往下，找到縫匠肌深面的長管；接著沿血管穿內收大肌裂孔到後面，隱神經在之前改走表淺。</p>"
   },
   {
    "id": "adductor-canal-3",
    "title": "03｜肌肉／結構對照（教材補充）",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"構造／附著／位置／作用／內容／神經／考點\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">附著／位置</th><th scope=\"col\">作用／內容</th><th scope=\"col\">神經／考點</th></tr></thead><tbody><tr><td>近端／遠端</td><td>股三角尖端→內收裂孔</td><td>大腿中段的筋膜通道</td><td>又稱Hunter／縫匠肌下管</td></tr><tr><td>壁／頂</td><td>前外股內側肌；後為長／大內收肌；頂有筋膜並覆縫匠肌</td><td>不同高度後壁肌肉可變</td><td>精細模型要分筋膜頂與縫匠肌覆蓋</td></tr><tr><td>管內主要結構</td><td>股動脈、股靜脈、隱神經</td><td>股內側肌神經的歸類依筋膜模型可異</td><td>不能寫成股神經主幹整條入管</td></tr><tr><td>內收裂孔</td><td>內收大肌遠端的開口</td><td>股動靜脈通過，延續為膕動靜脈</td><td>隱神經不跟著穿孔</td></tr><tr><td>隱神經出口</td><td>穿管頂附近轉向內側膝、小腿</td><td>純感覺支</td><td>不是運動支配腿後肌</td></tr></tbody></table></div>"
   },
   {
    "id": "adductor-canal-4",
    "title": "04｜最容易混的地方",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較／分辨方法\"><table><thead><tr><th scope=\"col\">比較</th><th scope=\"col\">分辨方法</th></tr></thead><tbody><tr><td>同進管、不同出孔</td><td>隱神經進入內收肌管，但在裂孔前離開；血管才轉後。</td></tr><tr><td>三種孔管</td><td>隱靜脈裂孔在筋膜；內收肌管在縫匠肌深面；內收裂孔在內收大肌。</td></tr></tbody></table></div><div class=\"study-note\"><strong>教材核對／補充：</strong>教材常將股內側肌神經列為管內容；精細筋膜研究有不同界定。基本考點仍是隱神經不穿內收裂孔。</div>"
   }
  ]
 },
 {
  "id": "popliteal-fossa",
  "title": "膕窩開頭：菱形邊界與淺深層",
  "english": "Popliteal fossa — introduction",
  "summary": "影片最後開始膝後圖；完整邊界與層次作教材延伸。",
  "sources": [
   "M4VIDEO",
   "YX2021",
   "M4GLUTEAL"
  ],
  "sections": [
   {
    "id": "popliteal-fossa-1",
    "title": "01｜先建立位置與動作",
    "html": "<p>先畫菱形四邊，再沿深度放脛神經、靜脈、動脈。每次說順序時一定先說方向，避免N-A-V與N-V-A互相覆蓋。</p>"
   },
   {
    "id": "popliteal-fossa-2",
    "title": "02｜原筆記圖與指認任務",
    "html": "<figure class=\"study-figure\"><a href=\"assets/anatomy-notes/pdf-050.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/anatomy-notes/pdf-050.webp\" alt=\"奕翔解剖原筆記 PDF第50頁，點圖放大\" loading=\"lazy\"></a><figcaption>賴奕翔《奕翔的解剖筆記三版》2021-07-25，PDF第50頁（含封面；非手寫頁碼）。原頁完整保留，點圖放大。</figcaption></figure><p><strong>讀圖順序：</strong>本頁原圖先提供股血管轉到後方的路徑；膕窩菱形見影片約105分鐘以後。先以腿後肌作上兩邊、腓腸肌作下兩邊。</p>"
   },
   {
    "id": "popliteal-fossa-3",
    "title": "03｜肌肉／結構對照（教材補充）",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"構造／附著／位置／作用／內容／神經／考點\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">附著／位置</th><th scope=\"col\">作用／內容</th><th scope=\"col\">神經／考點</th></tr></thead><tbody><tr><td>上外側界</td><td>股二頭肌</td><td>外上方</td><td>腓總神經沿外上側往腓骨頸</td></tr><tr><td>上內側界</td><td>半膜肌、表淺的半腱肌</td><td>內上方</td><td>不要用股薄肌取代主要邊界</td></tr><tr><td>下兩側界</td><td>腓腸肌內、外側頭；外側附近可見蹠肌</td><td>下方兩邊</td><td>完整下肢肌群留待後續影片</td></tr><tr><td>中央由淺到深</td><td>脛神經→膕靜脈→膕動脈</td><td>N-V-A</td><td>動脈最貼近深面，與股三角橫向N-A-V不是同一軸</td></tr><tr><td>底與頂</td><td>股骨膕面、膝後囊／相關韌帶、膕肌筋膜；頂為皮膚和膕筋膜</td><td>理解深淺，不把底寫成腓腸肌</td><td>小隱靜脈常在此入膕靜脈</td></tr></tbody></table></div>"
   },
   {
    "id": "popliteal-fossa-4",
    "title": "04｜最容易混的地方",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較／分辨方法\"><table><thead><tr><th scope=\"col\">比較</th><th scope=\"col\">分辨方法</th></tr></thead><tbody><tr><td>方向不同的排序</td><td>股三角外到內N-A-V；膕窩淺到深N-V-A。</td></tr><tr><td>影片範圍與完整下肢</td><td>最後只開始膕窩；本頁完整邊界為教材補充，不宣稱已完成小腿足部。</td></tr></tbody></table></div><div class=\"study-note\"><strong>教材核對／補充：</strong>本片未系統完成小腿與足內在肌；膕窩的完整邊界、底與血管深淺是延伸核對。</div>"
   }
  ]
 },
 {
  "id": "rapid-review",
  "title": "全章整合：從動作回推位置",
  "english": "Integrated retrieval",
  "summary": "把前臂手部與大腿通道做雙向回想，先說關節再說神經。",
  "sources": [
   "M4VIDEO",
   "YX2021",
   "M4THIGHANS"
  ],
  "sections": [
   {
    "id": "rapid-review-1",
    "title": "01｜先建立位置與動作",
    "html": "<p>每題先說「我在找哪個關節的哪個動作」，再找跨過它的肌肉、神經、通道。最後用例外反問一次，檢查自己是否只背口訣。</p>"
   },
   {
    "id": "rapid-review-2",
    "title": "02｜原筆記圖與指認任務",
    "html": "<figure class=\"study-figure\"><a href=\"assets/anatomy-notes/pdf-050.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/anatomy-notes/pdf-050.webp\" alt=\"奕翔解剖原筆記 PDF第50頁，點圖放大\" loading=\"lazy\"></a><figcaption>賴奕翔《奕翔的解剖筆記三版》2021-07-25，PDF第50頁（含封面；非手寫頁碼）。原頁完整保留，點圖放大。</figcaption></figure><p><strong>讀圖順序：</strong>先用第46頁前臂圖重畫前後分區，再用本頁股骨中心三室圖做對照；不要直接把上肢神經名字套到下肢。</p>"
   },
   {
    "id": "rapid-review-3",
    "title": "03｜肌肉／結構對照（教材補充）",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"構造／附著／位置／作用／內容／神經／考點\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">附著／位置</th><th scope=\"col\">作用／內容</th><th scope=\"col\">神經／考點</th></tr></thead><tbody><tr><td>屈指／伸指</td><td>先確認PIP、DIP或MCP</td><td>FDS偏PIP，FDP可DIP；內在肌MCP屈/IP伸</td><td>分正中、尺與橈神經分支</td></tr><tr><td>腕隧道／腕背腱室</td><td>掌側／背側</td><td>九腱一正中神經／六腱室</td><td>尺神經與FCR均不算主要腕隧道內容</td></tr><tr><td>大腿／臀肌</td><td>先分髖、膝與支撐腳</td><td>臀大伸髖；臀中小穩骨盆；前室伸膝</td><td>先大規則再補例外</td></tr><tr><td>血管與神經路徑</td><td>股三角→內收肌管→裂孔→膕窩</td><td>血管走到後方；隱神經離管</td><td>不要背成所有內容都穿每個出口</td></tr></tbody></table></div>"
   },
   {
    "id": "rapid-review-4",
    "title": "04｜最容易混的地方",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較／分辨方法\"><table><thead><tr><th scope=\"col\">比較</th><th scope=\"col\">分辨方法</th></tr></thead><tbody><tr><td>同名不等於同神經</td><td>ECU是尺側但走橈神經；拇收肌在拇側卻走尺神經。</td></tr><tr><td>同一肌不同部分</td><td>FDP、內收大肌、股二頭肌都需要再細分。</td></tr></tbody></table></div><div class=\"study-note\"><strong>教材核對／補充：</strong>回想時不能只念縮寫；每個縮寫至少能說中文、動作與神經，再回原圖指認。</div>"
   }
  ]
 },
 {
  "id": "board-atlas",
  "title": "原筆記圖集：前臂到大腿通道",
  "english": "Original notebook atlas",
  "summary": "PDF第46–50頁，完整原頁、署名與讀圖方向。",
  "sources": [
   "M4VIDEO",
   "YX2021"
  ],
  "sections": [
   {
    "id": "atlas-46",
    "title": "01｜PDF第46頁",
    "html": "<figure class=\"study-figure\"><a href=\"assets/anatomy-notes/pdf-046.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/anatomy-notes/pdf-046.webp\" alt=\"奕翔解剖原筆記 PDF第46頁，點圖放大\" loading=\"lazy\"></a><figcaption>賴奕翔《奕翔的解剖筆記三版》2021-07-25，PDF第46頁（含封面；非手寫頁碼）。原頁完整保留，點圖放大。</figcaption></figure><p><strong>讀圖順序：</strong>前臂掌背兩室→腕背六腱室→腕隧道。</p>"
   },
   {
    "id": "atlas-47",
    "title": "02｜PDF第47頁",
    "html": "<figure class=\"study-figure\"><a href=\"assets/anatomy-notes/pdf-047.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/anatomy-notes/pdf-047.webp\" alt=\"奕翔解剖原筆記 PDF第47頁，點圖放大\" loading=\"lazy\"></a><figcaption>賴奕翔《奕翔的解剖筆記三版》2021-07-25，PDF第47頁（含封面；非手寫頁碼）。原頁完整保留，點圖放大。</figcaption></figure><p><strong>讀圖順序：</strong>魚際／小魚際→蚓狀肌→骨間肌；掌側骨間肌計數另見教材核對。</p>"
   },
   {
    "id": "atlas-48",
    "title": "03｜PDF第48頁",
    "html": "<figure class=\"study-figure\"><a href=\"assets/anatomy-notes/pdf-048.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/anatomy-notes/pdf-048.webp\" alt=\"奕翔解剖原筆記 PDF第48頁，點圖放大\" loading=\"lazy\"></a><figcaption>賴奕翔《奕翔的解剖筆記三版》2021-07-25，PDF第48頁（含封面；非手寫頁碼）。原頁完整保留，點圖放大。</figcaption></figure><p><strong>讀圖順序：</strong>臀大／中／小的深淺→臀上／下神經→單腳站立骨盆。</p>"
   },
   {
    "id": "atlas-49",
    "title": "04｜PDF第49頁",
    "html": "<figure class=\"study-figure\"><a href=\"assets/anatomy-notes/pdf-049.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/anatomy-notes/pdf-049.webp\" alt=\"奕翔解剖原筆記 PDF第49頁，點圖放大\" loading=\"lazy\"></a><figcaption>賴奕翔《奕翔的解剖筆記三版》2021-07-25，PDF第49頁（含封面；非手寫頁碼）。原頁完整保留，點圖放大。</figcaption></figure><p><strong>讀圖順序：</strong>大腿前內後室→神經例外→兩關節肌。</p>"
   },
   {
    "id": "atlas-50",
    "title": "05｜PDF第50頁",
    "html": "<figure class=\"study-figure\"><a href=\"assets/anatomy-notes/pdf-050.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/anatomy-notes/pdf-050.webp\" alt=\"奕翔解剖原筆記 PDF第50頁，點圖放大\" loading=\"lazy\"></a><figcaption>賴奕翔《奕翔的解剖筆記三版》2021-07-25，PDF第50頁（含封面；非手寫頁碼）。原頁完整保留，點圖放大。</figcaption></figure><p><strong>讀圖順序：</strong>橫切肌群→股三角→股鞘與內收肌管→內收裂孔。</p>"
   }
  ]
 },
 {
  "id": "exam-sources",
  "title": "考題範圍、來源與更正",
  "english": "Sources & scope",
  "summary": "分開影片板書、原筆記與教材延伸，保留未完成項目。",
  "sources": [
   "M4VIDEO",
   "M4FOREARM",
   "M4FOREANS",
   "M4HAND",
   "M4HANDANS",
   "M4GLUTEAL",
   "M4THIGH",
   "M4THIGHANS",
   "M4LOWER",
   "M4TOPO",
   "YX2021",
   "M4VAR",
   "M4PERIPH",
   "M4CANAL"
  ],
  "sections": [
   {
    "id": "sources-scope",
    "title": "01｜本次完成與未完成",
    "html": "<p>本章依〈2016DF04 02_肌肉(4)〉全片板書畫面整理，長1:49:45.60；每20秒取一張，共330張，已檢視。未完成音訊轉錄或逐句審聽，未寫在板書的口頭內容可能遺漏。時間碼為約略畫面定位，非逐句字幕。完整肌肉附著、神經分支、通道邊界及臨床定位另標為教材補充。</p><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"材料／處理範圍\"><table><thead><tr><th scope=\"col\">材料</th><th scope=\"col\">處理範圍</th></tr></thead><tbody><tr><td>上傳影片</td><td>330張全片抽樣板書已檢視；未完成音訊逐句轉錄。</td></tr><tr><td>原筆記</td><td>PDF第46–50頁完整呈現，含原作者署名；不修改原頁錯字，於文中核對。</td></tr><tr><td>教材補充</td><td>完整起止／神經表、腕隧道外路徑、神經分部與通道出口。</td></tr><tr><td>尚未涵蓋</td><td>小腿分區只有總圖；小腿、足部肌肉與完整下肢神經血管未系統完成。</td></tr><tr><td>考題</td><td>本章附自編回想練習；不宣稱每一條重點都對應某年真題。</td></tr></tbody></table></div>"
   },
   {
    "id": "sources-corrections",
    "title": "02｜必須保留的核對",
    "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"原筆記／常見簡化／本站採用\"><table><thead><tr><th scope=\"col\">原筆記／常見簡化</th><th scope=\"col\">本站採用</th></tr></thead><tbody><tr><td>掌側骨間肌4條</td><td>常規3掌4背；若計拇指成分可有4掌模型，先確認定義。</td></tr><tr><td>魚際全正中</td><td>APB／OP及FPB淺頭典型正中；FPB深頭與變異另註，拇收肌尺神經。</td></tr><tr><td>正中例外全返支</td><td>第1、2蚓狀走掌指支；魚際主要返支。</td></tr><tr><td>腕隧道＝所有腕部結構</td><td>排除FCR獨立通道、PL表面、Guyon管及橈動脈。</td></tr><tr><td>後室全伸、內收全閉孔</td><td>保留肱橈肌、恥骨肌、內收大肌兩部等例外。</td></tr><tr><td>內收肌管全內容穿裂孔</td><td>隱神經在裂孔前離開；股血管才通過。</td></tr></tbody></table></div>"
   },
   {
    "id": "sources-list",
    "title": "03｜教材與授權說明",
    "html": "<p><a href=\"https://www.youtube.com/playlist?list=PLoKlbKOZ9XPpsITjehrHKiYvhih_3OJOz\" target=\"_blank\" rel=\"noopener\">M4VIDEO · 使用者上傳：2016DF04 02_肌肉(4) 360P.mp4</a>：本章依〈2016DF04 02_肌肉(4)〉全片板書畫面整理，長1:49:45.60；每20秒取一張，共330張，已檢視。未完成音訊轉錄或逐句審聽，未寫在板書的口頭內容可能遺漏。時間碼為約略畫面定位，非逐句字幕。完整肌肉附著、神經分支、通道邊界及臨床定位另標為教材補充。</p><p><a href=\"https://anatomy.ttuhscep.edu/musculoskeletal_system/forearm_tables.html\" target=\"_blank\" rel=\"noopener\">M4FOREARM · Texas Tech：Forearm & Wrist — Tables</a>：前臂肌群、附著、作用與神經分工。</p><p><a href=\"https://anatomy.ttuhscep.edu/musculoskeletal_system/forearm_ans.html\" target=\"_blank\" rel=\"noopener\">M4FOREANS · Texas Tech：Forearm & Wrist — Answers</a>：腕背伸肌腱、腱鞘與前臂分層。</p><p><a href=\"https://anatomy.ttuhscep.edu/musculoskeletal_system/hand_tables.html\" target=\"_blank\" rel=\"noopener\">M4HAND · Texas Tech：Hand — Tables</a>：手內在肌、腕隧道與骨間肌計數。</p><p><a href=\"https://anatomy.ttuhscep.edu/musculoskeletal_system/hand_ans.html\" target=\"_blank\" rel=\"noopener\">M4HANDANS · Texas Tech：Hand — Answers</a>：手掌空間、拇指動作與屈肌支持帶周圍路徑。</p><p><a href=\"https://anatomy.ttuhscep.edu/musculoskeletal_system/gluteal_tables.html\" target=\"_blank\" rel=\"noopener\">M4GLUTEAL · Texas Tech：Hip & Posterior Thigh & Leg — Tables</a>：臀肌、腿後肌與膕窩區域。</p><p><a href=\"https://anatomy.ttuhscep.edu/musculoskeletal_system/thigh_tables.html\" target=\"_blank\" rel=\"noopener\">M4THIGH · Texas Tech：Anterior & Medial Thigh — Tables</a>：大腿前內側肌群、股鞘、股三角。</p><p><a href=\"https://anatomy.ttuhscep.edu/musculoskeletal_system/thigh_ans.html\" target=\"_blank\" rel=\"noopener\">M4THIGHANS · Texas Tech：Anterior & Medial Thigh — Answers</a>：大腿區域與內收肌管路徑。</p><p><a href=\"https://anatomy.ttuhscep.edu/anatomytables/muscles_lowerlimb.html\" target=\"_blank\" rel=\"noopener\">M4LOWER · Texas Tech：Muscles of the Lower Limb</a>：大內收肌兩部、膝關節肌與下肢肌肉比較。</p><p><a href=\"https://medicine.uams.edu/neuroscience/education/medical-school-courses/human-structure-module/anatomy-tables/topographical-anatomy-tables/topographical-anatomy-of-the-lower-limb/\" target=\"_blank\" rel=\"noopener\">M4TOPO · UAMS：Topographical Anatomy of the Lower Limb</a>：內收肌管與下肢筋膜分區。</p><p>原頁：賴奕翔《奕翔的解剖筆記三版》，2021-07-25，使用者提供；保留署名及原頁完整性。原頁第三方內容權利仍屬各權利人。影片連結為課程播放清單，非本片精確網址。</p><p><a href=\"https://openorthopaedicsjournal.com/VOLUME/11/PAGE/1321/PDF/\" target=\"_blank\" rel=\"noopener\">M4VAR · Caetano et al.：Flexor Pollicis Brevis Muscle — Anatomical Study（2017）</a>：屍體解剖研究顯示FPB兩頭的正中／尺神經支配有變異，故不將口訣寫成絕對規則。</p><p><a href=\"https://bpb-us-e1.wpmucdn.com/sites.uw.edu/dist/b/8770/files/2022/09/Peripheral-Nerve.pdf\" target=\"_blank\" rel=\"noopener\">M4PERIPH · Peripheral Nerve（Operative Neurosurgery 2019；大學教學用全文）</a>：核對AIN沒有皮膚感覺、掌皮支與腕隧道分流，以及魚際返支和蚓狀肌掌指支。</p><p><a href=\"https://pubmed.ncbi.nlm.nih.gov/36245345/\" target=\"_blank\" rel=\"noopener\">M4CANAL · Lee et al.：Anatomical study of the adductor canal（2023）</a>：內收肌管近遠端筋膜頂及股內側肌神經分支關係不同；本站保留基本教材與精細筋膜模型的區分。</p>"
   }
  ]
 }
];
const muscles4MemoryLessons={
 "forearm-map": [
  "前臂總圖：前後分區與神經例外：先定位，再推動作",
  "每遇到肌肉先回答「在哪一室、跨哪個關節、肌腱落在軸哪側」，再補神經。先記多數規則，再圈例外。",
  "肌室的命名不是每條肌肉動作的保證；掌側也有旋前肌。",
  [
   [
    "前臂前室的尺神經例外是哪兩組？",
    "尺側屈腕肌與屈指深肌尺側半（第4、5指）。"
   ],
   [
    "橈神經支配的肌肉一定伸肘或伸腕嗎？",
    "不一定。肱橈肌主要屈肘；旋後肌負責旋後。"
   ]
  ]
 ],
 "flexor-superficial": [
  "前臂淺層與屈指淺肌：先定位，再推動作",
  "把附著點分成三種終點：掌骨控制腕、掌腱膜繃緊手掌、指骨控制手指。終點決定它有沒有跨過某個關節。",
  "FDS不是前室最深層；三層分類時放中層。掌長肌腱在屈肌支持帶表面，不算腕隧道九腱。",
  [
   [
    "只靠FDS能主動彎曲DIP嗎？",
    "不能以FDS完成孤立DIP屈曲；它止於中節，DIP要找FDP。"
   ],
   [
    "哪個淺層屈腕肌受尺神經支配？",
    "FCU；FCR、PL與PT受正中神經支配。"
   ]
  ]
 ],
 "flexor-deep": [
  "前臂深層：FDP、FPL、PQ：先定位，再推動作",
  "先看終點：FDP到四指末節，FPL到拇指末節，PQ不進手掌。用「深層三肌＋FDP尺半另走尺神經」建立例外。",
  "AIN的屈指功能在前臂已分支；單純腕隧道壓迫不應直接造成FPL或FDP去神經性癱瘓。",
  [
   [
    "拇指IP與食指DIP屈曲弱、皮膚感覺正常，先想哪條支？",
    "前骨間神經；再檢查PQ旋前，並依完整資料排除其他原因。"
   ],
   [
    "FDP第4、5指由AIN支配嗎？",
    "典型由尺神經支配，不能把整條FDP都歸AIN。"
   ]
  ]
 ],
 "wrist-force": [
  "腕部合力：屈伸與橈尺偏：先定位，再推動作",
  "把腕看成四角拉繩，先看肌腱相對關節軸的位置，再把兩個向量共同的方向留下。這是讀圖的推理模型，不是實際肌力定量。",
  "屈伸與橈尺偏可同時存在；不用把一條肌肉限制成只有一個動作。",
  [
   [
    "要產生尺偏，哪組腕肌可共同出力？",
    "FCU＋ECU；屈伸方向相反，尺偏方向相同。"
   ],
   [
    "FCR與ECRL共同收縮留下哪個共同方向？",
    "橈偏；不要回答旋前或旋後。"
   ]
  ]
 ],
 "posterior-forearm": [
  "後室肌群與旋後：先定位，再推動作",
  "後室先把「肱橈肌屈肘、旋後肌旋後」挑出，其餘再依腕、四指、拇指、食指分群。名字告訴作用，附著告訴跨哪些關節。",
  "PIN損傷主要看伸指等運動障礙；高位橈神經損傷才可能同時影響肱橈肌及更廣泛的伸腕功能。",
  [
   [
    "後室裡哪兩條肌肉不以伸腕伸指為主？",
    "肱橈肌屈肘、旋後肌旋後。"
   ],
   [
    "食指能比較獨立伸直，哪條深層肌有貢獻？",
    "伸食指肌EI，受PIN支配；它與ED共同連到食指伸肌裝置。"
   ]
  ]
 ],
 "extensor-compartments": [
  "腕背六腱室：從橈側數到尺側：先定位，再推動作",
  "先用「二、二、一、二、一、一」記每室肌腱名稱組數，再填1拇外展短伸、2雙橈伸腕、3拇長伸、4伸指食指、5小指、6尺伸腕。ED本身有多條肌腱，不把組數當實際腱數。",
  "數的是六個骨纖維通道；肌肉名稱組數和實際肌腱數不同。",
  [
   [
    "第4室有哪些肌腱組？",
    "ED＋EI；不是EPL。"
   ],
   [
    "APL與EPB同在第幾室？",
    "第1室；EPL單獨在第3室。"
   ]
  ]
 ],
 "carpal-tunnel": [
  "腕隧道：九腱一神經與隧道外：先定位，再推動作",
  "先把隧道圈出，再點數4＋4＋1腱；神經另算。接著將FCR、PL、尺神經血管、橈動脈放回正確的隧道外路徑。",
  "猴手、魚際萎縮與正中神經損傷有關，但不是每位腕隧道患者都有，也不能用單一手形判定位點。",
  [
   [
    "腕隧道內的九腱是哪三組？",
    "4條FDS＋4條FDP＋1條FPL，另有正中神經。"
   ],
   [
    "尺神經或FCR腱能算入九腱一神經嗎？",
    "不能。尺神經走Guyon管；FCR腱走橈側獨立通道。"
   ]
  ]
 ],
 "snuffbox": [
  "解剖鼻煙窩：邊界不等於內容：先定位，再推動作",
  "伸拇指後先指兩邊肌腱，再從表面到深部想頭靜脈／感覺支、橈動脈、骨性底。每說一個名字同時說它是哪一層。",
  "舟骨壓痛是典型定位連結；症狀與是否骨折仍須靠完整評估，這裡只練解剖位置。",
  [
   [
    "鼻煙窩外側與內側界各是什麼？",
    "外側APL＋EPB；內側EPL。"
   ],
   [
    "橈動脈在這裡是邊界還是通過結構？",
    "是深部通過結構；骨性底主要舟骨與大多角骨。"
   ]
  ]
 ],
 "hand-intrinsics": [
  "手內在肌：魚際、小魚際與神經：先定位，再推動作",
  "先把手內在肌分成拇指、小指、中央、骨間四群。總規則是尺神經為主，再把魚際與外側兩蚓狀圈成正中例外。",
  "「全部手內在肌都由尺神經深支」錯：正中例外之外，掌短肌走尺神經淺支；FPB深頭也不能一概寫死。",
  [
   [
    "拇收肌與拇短外展肌的典型神經有何不同？",
    "拇收肌：尺神經深支；拇短外展肌：正中神經返支。"
   ],
   [
    "外側兩蚓狀肌也由正中神經返支支配嗎？",
    "不是，主要由正中神經掌指支；返支主要負責魚際肌。"
   ]
  ]
 ],
 "lumbricals-interossei": [
  "蚓狀肌與骨間肌：MCP屈、IP伸：先定位，再推動作",
  "先畫肌腱在MCP掌側、在IP背側伸肌裝置的路線，才記「掌指屈、指間伸」。最後加上DAB／PAD和神經二二分。",
  "原筆記的掌側骨間肌4條不是唯一計數；常規考題多用3掌、4背。先看題目是否把拇指成分獨立計入。",
  [
   [
    "蚓狀肌收縮時MCP與IP各怎麼動？",
    "MCP屈曲，PIP與DIP伸展；路徑跨不同關節軸的相對位置不同。"
   ],
   [
    "DAB/PAD的含義及軸線？",
    "背側外展、掌側內收；以第3指為軸。典型4背3掌。"
   ]
  ]
 ],
 "gluteal-muscles": [
  "臀肌：伸髖、外展與骨盆穩定：先定位，再推動作",
  "先用動作分兩群：起身爬階需要強力伸髖的臀大肌；單腳站立需要臀中小肌穩住骨盆。再把上、下臀神經放回去。",
  "骨盆下垂反映支撐側外展機制問題，也可能有肌腱或骨性原因；不能僅憑一個動作直接斷言神經受傷。",
  [
   [
    "右腳支撐時左骨盆下垂，先檢查哪一側外展機制？",
    "右側臀中／小肌與臀上神經相關功能。"
   ],
   [
    "臀大肌與臀中肌分別由哪條神經支配？",
    "臀大：臀下神經；臀中：臀上神經。"
   ]
  ]
 ],
 "thigh-map": [
  "大腿總圖：前、內、後三室：先定位，再推動作",
  "每室先只寫一條主要神經、一個主要動作、一條代表肌。讀到細表時把例外加回同一張圖，而不是重背另一份清單。",
  "部位、作用、神經三種分類未必完全重疊；髂腰肌與恥骨肌尤其需要分清。",
  [
   [
    "大腿三室的主要神經如何配對？",
    "前室股神經，內側室閉孔神經，後室坐骨神經。"
   ],
   [
    "股二頭肌短頭和長頭的神經一樣嗎？",
    "同屬坐骨神經家族但分部不同：短頭腓總側、長頭脛側。"
   ]
  ]
 ],
 "anterior-thigh": [
  "大腿前側：股四頭肌與縫匠肌：先定位，再推動作",
  "沿每條肌的起止點畫線，確認跨髖或跨膝。股直肌跨兩關節，三廣肌只跨膝；縫匠肌斜跨兩關節，動作分髖與膝兩列。",
  "股神經不是每一個屈髖肌的唯一神經；腰大肌主要由腰神經直接分支支配。",
  [
   [
    "股四頭肌中哪一條可以屈髖？為什麼？",
    "股直肌，因為起於骨盆而跨過髖關節；三廣肌起於股骨。"
   ],
   [
    "縫匠肌起點與遠端附著地標？",
    "ASIS到脛骨內側鵝足；不是AIIS，也不是腓骨頭。"
   ]
  ]
 ],
 "medial-thigh": [
  "大腿內側：內收肌與雙重神經：先定位，再推動作",
  "把同一條內收大肌畫成兩束：恥坐支到粗線的斜束，與坐骨結節到內收結節的縱束。用起止點連接神經及功能。",
  "恥骨肌不能因為能內收就一概歸閉孔神經；內收大肌也不能整條只寫閉孔。",
  [
   [
    "內收大肌的腿後部由哪個神經分部支配？",
    "坐骨神經的脛側部；內收部典型為閉孔神經後支。"
   ],
   [
    "內收肌群中哪個常見主要由股神經支配？",
    "恥骨肌；可有其他神經參與的變異。"
   ]
  ]
 ],
 "hamstrings": [
  "腿後肌：長短頭、內外旋與鵝足：先定位，再推動作",
  "先找膝內外兩邊：二頭到腓骨外側，半腱半膜到脛骨內側。再看起點是否坐骨結節，判斷能不能伸髖。",
  "腿後肌群的區域歸類與嚴格定義可不同；股二頭短頭常列後室，但不跨髖、神經分部也不同。",
  [
   [
    "為什麼股二頭短頭不能直接伸髖？",
    "起於股骨，沒有跨過髖關節。"
   ],
   [
    "鵝足三肌與各自神經怎麼配？",
    "縫匠—股神經；股薄—閉孔神經；半腱—坐骨神經脛側部。"
   ]
  ]
 ],
 "femoral-triangle": [
  "股三角與股鞘：外到內NAVEL：先定位，再推動作",
  "先固定外到內順序N-A-V-股管，再畫股鞘只包A、V與股管。用「三角內」和「鞘內」兩個不同框避免混淆。",
  "NAVEL的E與L是空間及淋巴的口訣，不代表兩個獨立股鞘室；股管含疏鬆組織與淋巴結／管，並非完全空。",
  [
   [
    "股神經在股三角內，是否也在股鞘內？",
    "不在；它在股鞘外側。"
   ],
   [
    "大隱靜脈穿哪個筋膜開口匯入哪條靜脈？",
    "經隱靜脈裂孔附近穿篩筋膜，匯入股靜脈；不是經內收裂孔。"
   ]
  ]
 ],
 "adductor-canal": [
  "內收肌管與內收裂孔：神經中途離隊：先定位，再推動作",
  "畫一條血管線從股三角穿管、穿裂孔到膕窩；再用另一條線畫隱神經中途離開。出口比只背內容物更能辨題。",
  "教材常將股內側肌神經列為管內容；精細筋膜研究有不同界定。基本考點仍是隱神經不穿內收裂孔。",
  [
   [
    "隱神經會跟股動脈一起穿內收裂孔嗎？",
    "不會，隱神經在之前離開；股動靜脈通過裂孔到膕窩。"
   ],
   [
    "股動脈穿內收裂孔後改稱什麼？",
    "膕動脈；膕靜脈往近端穿孔後續成股靜脈。"
   ]
  ]
 ],
 "popliteal-fossa": [
  "膕窩開頭：菱形邊界與淺深層：先定位，再推動作",
  "先畫菱形四邊，再沿深度放脛神經、靜脈、動脈。每次說順序時一定先說方向，避免N-A-V與N-V-A互相覆蓋。",
  "本片未系統完成小腿與足內在肌；膕窩的完整邊界、底與血管深淺是延伸核對。",
  [
   [
    "膕窩中央由淺到深的主要三結構？",
    "脛神經、膕靜脈、膕動脈；這是深度順序。"
   ],
   [
    "膕窩上外側與上內側主要肌肉？",
    "外側股二頭肌；內側半膜肌及其表淺半腱肌。"
   ]
  ]
 ],
 "rapid-review": [
  "全章整合：從動作回推位置：先定位，再推動作",
  "每題先說「我在找哪個關節的哪個動作」，再找跨過它的肌肉、神經、通道。最後用例外反問一次，檢查自己是否只背口訣。",
  "回想時不能只念縮寫；每個縮寫至少能說中文、動作與神經，再回原圖指認。",
  [
   [
    "列出本章三個必須分部才可配神經的肌肉。",
    "FDP橈／尺半；內收大肌內收／腿後部；股二頭長／短頭。"
   ],
   [
    "隱靜脈裂孔、內收肌管、內收裂孔各用一句定位。",
    "闊筋膜開口供大隱靜脈入股靜脈；縫匠肌深面通道；內收大肌遠端開口供股血管轉膕窩。"
   ]
  ]
 ]
};
