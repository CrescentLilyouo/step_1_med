/* Learning routes and image tasks use each topic's existing cited anatomy; progress keys are unchanged. */
const musclesLearning={
 "muscles1": {
  "goal": "從頭頸肌的動作回推腦神經；先分肌群，再分運動、感覺及同行纖維。",
  "paths": [
   [
    "先讀眼與臉",
    "在自己臉上做動作，再回原圖找拉力。",
    [
     "facial-muscles",
     "eyelid",
     "eye-muscles",
     "eye-exam",
     "orbit-pathways"
    ]
   ],
   [
    "再串口腔到吞嚥",
    "將咀嚼、舌、軟顎、咽與喉分工後串起來。",
    [
     "tmj",
     "mastication",
     "tongue",
     "palate",
     "pharynx",
     "larynx-structure",
     "larynx-muscles",
     "swallowing"
    ]
   ],
   [
    "最後用頸部定位整合",
    "確認舌骨固定端、神經來源與頸三角，再作跨區回想。",
    [
     "hyoid-neck",
     "neck-triangles",
     "rapid-review"
    ]
   ]
  ],
  "checks": [
   [
    "閉眼和抬上眼瞼",
    "eyelid",
    "請先說兩個動作各對應哪一個主要肌肉與神經。",
    "閉眼：眼輪匝肌／VII；抬上眼瞼：提上瞼肌／III；上瞼板肌由交感參與。不要把所有眼瞼下垂歸成同一損傷。"
   ],
   [
    "眼位改變後的垂直運動",
    "eye-exam",
    "為何不能只問「向上看是哪條肌肉」？",
    "先說眼球內收還是外展：外展位看垂直直肌，內收位看斜肌。眼位改變有助於突出某肌的垂直作用，仍須整合完整眼動。"
   ],
   [
    "軟顎與咽的神經例外",
    "palate",
    "同樣在吞嚥區，哪兩條肌肉要從X的多數規則挑出？",
    "張顎帆肌為V3；莖突咽肌為IX。其餘軟顎／多數咽肌主要經X的咽叢分支。"
   ],
   [
    "舌下神經和同行C1",
    "hyoid-neck",
    "看見C1隨XII走，能說頦舌骨肌由XII核支配嗎？",
    "不能。同行纖維來自C1，借道XII，供頦舌骨肌與甲狀舌骨肌等；與XII自身支配舌肌的運動纖維分開。"
   ]
  ],
  "tasks": {
   "facial-muscles": "先圈口裂，再沿頰肌指向口角；做閉唇與鼓頰，說明表情肌VII和咀嚼肌V3的分類差別。",
   "eyelid": "在眼瞼原圖分別指眼輪匝、提上瞼與上瞼板肌；每指一條都說閉眼、抬瞼或交感輔助。",
   "eye-muscles": "先標角膜前方，再畫肌肉拉力；把四直肌與兩斜肌分群，逐一說主動作、次動作與III／IV／VI。",
   "eye-exam": "用手指在紙上走H形；每到垂直段先說眼球已內收或外展，再指定要突出的肌肉。",
   "orbit-pathways": "在眶尖圖圈共同腱環；將視神經管、眶上裂環內與環外內容放在不同格，避免把同孔等同同環。",
   "tmj": "在矢狀圖找關節盤，分上下腔；將轉動和向前平移分開，再追外翼肌到盤／髁突頸區。",
   "mastication": "沿顳肌、咬肌、內外翼肌的起止畫箭頭；先做雙側動作，再問單側無力時下顎偏向哪邊。",
   "tongue": "固定下頜作參考，沿頦舌、舌骨舌、莖突舌與腭舌肌四條線；將伸舌和舌尖偏斜另作一組。",
   "pharynx": "先找三層咽縮肌與中線咽縫，再把通過不同肌隙的構造放在對應高度；標莖突咽肌IX例外。",
   "palate": "先辨軟顎游離緣與耳咽管，再找張與提的作用；把張顎帆肌V3圈出，其餘依本頁神經表核對。",
   "hyoid-neck": "在原圖固定舌骨，再反過來固定下頜；比較同一肌群對舌骨與下頜動作的影響，C1同行纖維另用一條線。",
   "larynx-structure": "先指甲狀、環狀、杓狀軟骨，再連聲帶；沿喉神經入口分外支、內支與返喉支。",
   "larynx-muscles": "俯視圖先找聲門裂與杓狀軟骨旋轉；讓聲帶外展／內收／張緊各走一次，再配肌肉與神經。",
   "swallowing": "以口腔、鼻咽、喉入口、食道方向分四區；用箭頭說食團去路和需要暫時封閉的入口。",
   "neck-triangles": "先用胸鎖乳突肌分前後三角，補鎖骨與下頜；再用舌骨和肩胛舌骨肌細分，最後才放內容物。",
   "rapid-review": "遮住原圖標籤，依序指出眼、咀嚼、舌、軟顎、咽、喉的主要神經，再只留下各群例外。"
  },
  "related": [
   [
    "neck-triangles",
    "muscles2",
    "cervical-fascia",
    "把頸三角接到頸筋膜"
   ],
   [
    "hyoid-neck",
    "muscles2",
    "accessory-suboccipital",
    "比較C1同行與C1後支"
   ],
   [
    "rapid-review",
    "muscles2",
    "rapid-review",
    "接續胸腹壁神經例外"
   ]
  ]
 },
 "muscles2": {
  "goal": "用筋膜和肌層建立胸腹壁空間；通道題同時回答方向、邊界與內容。",
  "paths": [
   [
    "頸與肩胛先定位",
    "把副神經、斜角肌間隙和肩胛肌動作接起來。",
    [
     "accessory-suboccipital",
     "cervical-fascia",
     "scalenes",
     "serratus",
     "back-muscles"
    ]
   ],
   [
    "胸腹壁由表到深",
    "以橫膈為分界，再拆肋間肌及腹壁的層次。",
    [
     "diaphragm",
     "intercostals",
     "posterior-wall",
     "abdominal-muscles"
    ]
   ],
   [
    "把層次轉成通道",
    "用白線、半月線及弓狀線定位，最後推腹股溝包被。",
    [
     "wall-landmarks",
     "rectus-sheath",
     "inguinal-intro",
     "rapid-review"
    ]
   ]
  ],
  "checks": [
   [
    "副神經與長胸神經",
    "serratus",
    "同樣肩胛異常，如何用肌肉動作拆開？",
    "XI連斜方肌／胸鎖乳突肌；長胸神經連前鋸肌。先分聳肩與肩胛前引／固定，再回本頁比較；單一外觀不能完全定位。"
   ],
   [
    "三大橫膈通道",
    "diaphragm",
    "T8、T10、T12各放哪個主要構造？還要補哪個位置差別？",
    "T8下腔靜脈孔在中央腱；T10食道裂孔主要由右腳相關肌纖維形成；T12主動脈裂孔在橫膈後方、正中弓狀韌帶下。"
   ],
   [
    "肋間束的兩個方向",
    "intercostals",
    "VAN是上下順序還是肌層深淺？",
    "是典型主束由上到下V-A-N；深淺另答在內肋間肌與最內肋間肌之間。說兩條不同的方向。"
   ],
   [
    "弓狀線下方後壁",
    "rectus-sheath",
    "沒有腹直肌鞘後層，是否直接沒有任何深面層次？",
    "不是。弓狀線下三層腱膜主要移到前方，深面仍有腹橫筋膜、腹膜外組織及壁腹膜等。"
   ]
  ],
  "tasks": {
   "accessory-suboccipital": "在後頸圖先分淺層斜方肌與深層枕下三角；先畫三邊，再把椎動脈、C1後支與枕大神經關係分開。",
   "cervical-fascia": "以頸橫切面圈頸動脈鞘，再從外向內辨各筋膜；把鞘內、鞘壁和鞘後構造放在不同位置。",
   "diaphragm": "在上／下視圖先找中央腱與左右腳，再放T8/T10/T12；將主動脈後方路徑畫在食道裂孔之外。",
   "posterior-wall": "把腰大肌、髂肌、腰方肌分成三塊；先說小轉子和第12肋是不同終點，再找腰叢相對腰大肌的位置。",
   "scalenes": "先固定第1肋和前斜角肌，再放鎖骨下靜脈在前、動脈及臂叢在肌間；膈神經另放肌前面。",
   "intercostals": "從胸壁外側往內疊三層；再沿肋溝由上到下放V-A-N，分開肌層位置和束內順序。",
   "serratus": "沿前鋸肌從肋骨繞向肩胛內側緣肋面；用推牆想肩胛固定，再和斜方肌的神經／動作比較。",
   "back-muscles": "先分淺背肌與本體背肌，再用肩胛骨作移動端；將肌肉拉力連到上提、內收、下轉或上轉。",
   "abdominal-muscles": "同一側腹壁先畫外斜、內斜、橫肌三方向；雙側和單側收縮分兩次推，不用一個旋轉口訣包全部。",
   "wall-landmarks": "在腹直肌外框先找白線與半月線，再標腱劃；血管走向與弓狀線的深層位置另畫一張切面。",
   "rectus-sheath": "先畫弓狀線上下一對橫切圖，讓每層腱膜逐條走完；深面腹橫筋膜一直保留，不用空白取代它。",
   "inguinal-intro": "先沿深環到淺環畫通道，再把外斜腱膜、內斜肌與腹橫筋膜對應精索包被；別把腹橫肌硬加一層。",
   "rapid-review": "在紙上畫頸、胸、腹三個切面，每圖只留層次、主神經血管和一個例外；答錯再回對應原頁。"
  },
  "related": [
   [
    "accessory-suboccipital",
    "muscles1",
    "neck-triangles",
    "回看XI經過的頸三角"
   ],
   [
    "serratus",
    "muscles3",
    "shoulder-bursa",
    "接肩胛上轉與外展"
   ],
   [
    "inguinal-intro",
    "muscles4",
    "femoral-triangle",
    "比較腹股溝韌帶上下通道"
   ],
   [
    "posterior-wall",
    "muscles4",
    "anterior-thigh",
    "追髂腰肌到小轉子"
   ],
   [
    "rapid-review",
    "muscles3",
    "pelvic-diaphragm",
    "胸腹壁之後接骨盆底"
   ]
  ]
 },
 "muscles3": {
  "goal": "把骨盆底、會陰、肩腋視為兩組空間；同一構造在不同切面要能認回來。",
  "paths": [
   [
    "先看骨盆底與會陰座標",
    "先定上／下與前／後，再談括約和肌束。",
    [
     "pelvic-diaphragm",
     "continence",
     "perineum-map"
    ]
   ],
   [
    "再疊會陰筋膜和通道",
    "將淺深空間、神經血管和外滲條件連成一張圖。",
    [
     "superficial-pouch",
     "deep-pouch",
     "pouch-comparison",
     "fascia-spread",
     "pudendal-neurovascular",
     "ischioanal-fossa"
    ]
   ],
   [
    "肩腋換到上肢座標",
    "由肩袖功能到通道，再進腋窩和上臂前後室。",
    [
     "deltoid-cuff",
     "shoulder-bursa",
     "posterior-spaces",
     "axillary-vessels",
     "axilla-walls",
     "arm-muscles",
     "forearm-intro",
     "rapid-review"
    ]
   ]
  ],
  "checks": [
   [
    "骨盆底與會陰淺深隙",
    "pouch-comparison",
    "看到深會陰區，能直接叫它骨盆膈嗎？",
    "不能。骨盆膈以提肛肌與尾骨肌為主；會陰膜及其上下的空間位於更下方的區域。先確認切面與上下座標。"
   ],
   [
    "提肛肌與陰部神經",
    "pelvic-diaphragm",
    "會陰骨骼肌是否全部由陰部神經支配？",
    "不能一概而論。提肛肌有薦神經直接分支；會陰多條肌與外括約肌則與陰部神經相關。依本頁現代研究核對。"
   ],
   [
    "肩後三個通道",
    "posterior-spaces",
    "四邊孔、三邊孔、三角間隙的主要神經血管如何配？",
    "四邊孔腋神經／旋肱後動脈；三邊孔旋肩胛動脈；三角間隙橈神經／肱深動脈。先用肱三頭長頭分內外。"
   ],
   [
    "屈肘與旋後",
    "arm-muscles",
    "肱二頭肌和肱橈肌都能屈肘，是否同神經？",
    "肱二頭肌為肌皮神經，並有強力旋後作用；肱橈肌為橈神經，主要在中立位屈肘。將動作和神經拆成兩欄。"
   ]
  ],
  "tasks": {
   "pelvic-diaphragm": "先從骨盆側壁畫肌束朝中線匯聚，再在上下視圖認回恥骨、坐骨棘與尾骨；別把會陰膜當同一平面。",
   "continence": "在側面圖找直腸肛管轉折與恥骨直腸肌吊帶；分放鬆吊帶和放鬆外括約肌兩個動作。",
   "perineum-map": "先畫恥骨聯合、兩坐骨結節與尾骨的菱形，連兩坐骨結節分三角；用會陰體辨中線會合點。",
   "superficial-pouch": "先找會陰膜下方，再把陰莖／陰蒂根部及球、腳放回附著處；男女肌肉對應要同視角。",
   "deep-pouch": "以會陰膜上方定位，再分尿道外括約肌複合體與腺體；女性圖不可硬套舊式三層夾心尿生殖膈。",
   "pouch-comparison": "同時看矢狀和冠狀圖，先圈會陰膜；每說一個淺／深空間內容都指出它在膜的哪一側。",
   "fascia-spread": "在圖上標破裂點、Buck筋膜是否完整，再沿Colles連Scarpa畫可能擴散；先畫邊界才判能否進大腿。",
   "pudendal-neurovascular": "按出大孔、繞坐骨棘、入小孔、進陰部管的順序畫線；將體神經運動與自主勃起路徑分開。",
   "ischioanal-fossa": "冠狀圖先辨外側閉孔內肌筋膜與內側肛管／提肛肌，陰部管放外側壁，別畫在脂肪中央。",
   "deltoid-cuff": "先找大／小結節，再按肩前後面放SITS；分每肌的動作與神經後，才把三角肌外展加入。",
   "shoulder-bursa": "畫肱骨頭、肩峰與棘上肌腱三層，將滑囊放在腱上；外展時同時畫肩胛上轉，別當角度開關。",
   "posterior-spaces": "由肱三頭長頭先分內外，再以小圓／大圓肌分上下；三個洞各只放一組主要內容物。",
   "axillary-vessels": "用胸小肌把腋動脈分三段，先填1/2/3分支群；再沿旋肩胛與旋肱後分別走到肩後通道。",
   "axilla-walls": "先畫腋窩頂和底，再圍前後內外四壁；每壁說骨架和覆蓋肌肉，不把通過內容當成牆。",
   "arm-muscles": "將肱骨前後分室，在前側放肌皮神經、後側放橈神經；肱肌和肱二頭的止點先分尺／橈骨。",
   "forearm-intro": "先從肘向腕看橈尺骨方向，再將掌側屈肌與背側伸肌分區；下一章以相同座標補全肌肉表。",
   "rapid-review": "分骨盆會陰與肩上肢兩張圖，各挑三個通道和一個神經例外；再打亂順序問內容物。"
  },
  "related": [
   [
    "forearm-intro",
    "muscles4",
    "forearm-map",
    "前臂完整分群在下一章"
   ],
   [
    "arm-muscles",
    "muscles4",
    "posterior-forearm",
    "比較屈肘與旋後肌"
   ],
   [
    "deltoid-cuff",
    "muscles2",
    "serratus",
    "補肩胛固定與上轉"
   ],
   [
    "pudendal-neurovascular",
    "muscles4",
    "gluteal-muscles",
    "連回臀區與骨盆出口"
   ],
   [
    "rapid-review",
    "muscles4",
    "rapid-review",
    "跨章整合上肢到下肢"
   ]
  ]
 },
 "muscles4": {
  "goal": "由關節動作回推肌肉，再用神經例外與出口路徑確認位置。",
  "paths": [
   [
    "先掌握前臂規則和例外",
    "前後室、跨關節終點、腕部合力三條線一起建立。",
    [
     "forearm-map",
     "flexor-superficial",
     "flexor-deep",
     "wrist-force",
     "posterior-forearm"
    ]
   ],
   [
    "把肌腱放進腕手空間",
    "從六腱室、隧道到手內在肌，分外來長腱與手內肌。",
    [
     "extensor-compartments",
     "carpal-tunnel",
     "snuffbox",
     "hand-intrinsics",
     "lumbricals-interossei"
    ]
   ],
   [
    "下肢用三室加通道路徑",
    "臀肌穩定骨盆後，進大腿三室和股血管轉後方路線。",
    [
     "gluteal-muscles",
     "thigh-map",
     "anterior-thigh",
     "medial-thigh",
     "hamstrings",
     "femoral-triangle",
     "adductor-canal",
     "popliteal-fossa",
     "rapid-review"
    ]
   ]
  ],
  "checks": [
   [
    "FDS、FDP與蚓狀肌",
    "lumbricals-interossei",
    "PIP屈、DIP屈、MCP屈而IP伸，各先找誰？",
    "依序FDS、FDP、蚓狀／骨間肌參與的內在肌動作。先說關節與方向，再配神經，不能只答屈指肌。"
   ],
   [
    "三組分部神經",
    "rapid-review",
    "列出FDP、內收大肌與股二頭肌各自必拆的部分。",
    "FDP橈半AIN／尺半尺神經；內收大肌內收部閉孔／腿後部坐骨脛側；二頭長頭坐骨脛側／短頭腓總側。"
   ],
   [
    "腕隧道和鼻煙窩",
    "snuffbox",
    "正中神經與橈動脈分別應放哪個空間？",
    "正中神經在腕隧道；橈動脈走鼻煙窩深部，並不在主要腕隧道。先確認掌背側與邊界／通過物。"
   ],
   [
    "內收肌管的兩條出口",
    "adductor-canal",
    "股血管和隱神經是否一起轉進膕窩？",
    "血管穿內收裂孔轉膕窩；隱神經提前離管走向膝及小腿內側，不穿裂孔。"
   ]
  ],
  "tasks": {
   "forearm-map": "先畫掌背側和橈尺兩骨，再用正中／尺／橈神經分色；把FCU和FDP尺半圈成前室例外。",
   "flexor-superficial": "從內上髁沿五條肌束追到掌骨、掌腱膜或中節指骨；用終點回答跨腕或跨指關節。",
   "flexor-deep": "深層圖只留FDP、FPL、PQ；將FDP第2–3指與第4–5指分色，親做拇IP與食指DIP屈曲。",
   "wrist-force": "腕關節周圍畫四角肌腱，兩兩合成屈、伸、橈偏、尺偏；說明為何FCU和ECU能協同。",
   "posterior-forearm": "先把肱橈肌與旋後肌挑出，再按腕、四指、拇、食指分肌；橈神經深支穿旋後肌後接PIN。",
   "extensor-compartments": "在腕背支持帶由橈到尺畫六格，先填第1與第3室的拇指腱，再補2、4、5、6。",
   "carpal-tunnel": "先圈屈肌支持帶深面的主隧道，數4＋4＋1腱；FCR獨立通道、PL與Guyon管分別畫在圈外。",
   "snuffbox": "伸拇指，先摸兩邊肌腱，再由表到深放感覺支／頭靜脈、橈動脈與骨底；每個名稱說它是界或內容。",
   "hand-intrinsics": "將OAF在拇側與小指側各做一次，再圈拇收肌和掌短肌；用神經分支證明它們不是全同一路。",
   "lumbricals-interossei": "畫中指軸線做DAB／PAD，再畫MCP掌側與IP背側伸肌腱膜路徑；掌骨間肌依本頁模型核對3或4。",
   "gluteal-muscles": "原圖分臀大中小深淺；再畫右腳站地，左骨盆重量由右側外展肌平衡，指出下垂側和支撐側。",
   "thigh-map": "股骨放中央，畫前內後三室；先寫股、閉孔、坐骨，再補各室的一個例外。",
   "anterior-thigh": "將股直肌起點連骨盆、三廣肌連股骨；只讓真正跨髖的肌肉產生直接屈髖，再追縫匠到鵝足。",
   "medial-thigh": "將內收大肌畫成斜行內收部與縱行腿後部；各自標起點、止點、動作與神經，恥骨肌另圈股神經。",
   "hamstrings": "在膝後畫外側腓骨頭與內側脛骨止點；短頭起在股骨，將它的髖關節動作劃除。",
   "femoral-triangle": "先畫三邊，再橫排N-A-V-股管；用另一個框畫股鞘，讓N留在框外，最後找淺層大隱靜脈入口。",
   "adductor-canal": "由股三角尖端畫血管經管、裂孔到膕窩；隱神經用另一線在穿裂孔前離開。",
   "popliteal-fossa": "畫上二頭／半腱半膜、下腓腸兩頭的菱形；中央用深度箭頭標脛神經、膕靜脈、膕動脈。",
   "rapid-review": "遮住神經欄，先說肌肉跨的關節與作用；再抽FDP、內收大肌、二頭肌三個分部題，最後重畫兩個通道出口。"
  },
  "related": [
   [
    "forearm-map",
    "muscles3",
    "forearm-intro",
    "回顧前臂分區起點"
   ],
   [
    "posterior-forearm",
    "muscles3",
    "arm-muscles",
    "與上臂屈肘旋後比較"
   ],
   [
    "femoral-triangle",
    "muscles2",
    "inguinal-intro",
    "回看腹股溝管與包被"
   ],
   [
    "gluteal-muscles",
    "muscles3",
    "pudendal-neurovascular",
    "回看骨盆到臀會陰路徑"
   ],
   [
    "rapid-review",
    "muscles1",
    "rapid-review",
    "打亂頭頸與四肢神經分類"
   ]
  ]
 }
};
function muscleLearningLink(chapter,id,label){return `<a class="study-button" href="#/subject/anatomy/chapter/${chapter}/topic/${id}">${studyEscape(label)}</a>`;}
function muscleImageTask(topic){
 const guide=musclesLearning[studyChapter.id],task=guide?.tasks[topic.id];if(!task)return '';
 const related=guide.related.filter(([from])=>from===topic.id);
 return `<aside class="muscle-image-task" aria-label="原圖指認任務"><h3>讀圖時，完成這個任務</h3><p>${studyEscape(task)}</p><p class="memory-foot">先說觀看方向 → 指認位置 → 沿起止／路徑推功能 → 遮標示重畫。下方原圖可點開放大；答錯回到圖上的位置再練。</p>${related.length?`<p>接著比較：${related.map(([,ch,id,label])=>muscleLearningLink(ch,id,label)).join(' ')}</p>`:''}</aside>`;
}
function muscleChapterGuide(){
 const id=studyChapter.id,g=musclesLearning[id];if(!g)return '';
 const title=t=>studyChapter.topics.find(x=>x.id===t)?.title||t;
 return `<section class="muscle-learning-guide" aria-label="本章學習路線"><p class="eyebrow">先讀圖 → 懂動作 → 記例外 → 遮答回想</p><h2>這一章，按這個順序讀</h2><p>${studyEscape(g.goal)}</p><ol>${g.paths.map(([name,why,ids])=>`<li><h3>${studyEscape(name)}</h3><p>${studyEscape(why)}</p><p>${ids.map(t=>muscleLearningLink(id,t,title(t))).join(' ')}</p></li>`).join('')}</ol><h3>讀完，換個問法再試一次</h3><p>先答，再展開核對。若卡住，連回對應主題看原圖；原有回想卡的重練時間照常保留。</p><div class="muscle-check-grid">${g.checks.map(([label,target,q,a])=>`<details><summary>${studyEscape(label)}：${studyEscape(q)}</summary><p>${studyEscape(a)}</p>${muscleLearningLink(id,target,'回原圖與比較表 →')}</details>`).join('')}</div><p class="memory-foot">以上為依本章既有來源設計的自編練習，供解剖理解與國考複習，非新增真題。</p></section>`;
}
