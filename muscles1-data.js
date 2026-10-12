/* User-uploaded video: whole-audio ASR, 227 sampled frames; original paraphrases and separately marked textbook corrections. */
const muscles1VideoUrl="https://www.youtube.com/playlist?list=PLoKlbKOZ9XPpsITjehrHKiYvhih_3OJOz";
const muscles1Sources=[
 {
  "id": "S137",
  "title": "OpenStax：11.3 Axial Muscles of the Head, Neck, and Back",
  "url": "https://openstax.org/books/anatomy-and-physiology-2e/pages/11-3-axial-muscles-of-the-head-neck-and-back",
  "note": "顏面、眼外肌、舌骨肌群教材圖；文字口訣另與專門教材核對。",
  "type": "開放教材"
 },
 {
  "id": "S138",
  "title": "Texas Tech：Parotid Gland & Face anatomy tables",
  "url": "https://anatomy.ttuhscep.edu/nervous_system/face_tables.html",
  "note": "表情肌、頰肌及 VII／V3 的區別。",
  "type": "大學教材"
 },
 {
  "id": "S139",
  "title": "NCBI Neuroscience：The Actions and Innervation of Extraocular Muscles",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK10793/",
  "note": "正視位作用及不同眼位的測試方向。",
  "type": "解剖教材"
 },
 {
  "id": "S140",
  "title": "NCBI：The anatomy, actions, and innervation of EOMs",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK573075/table/article-133080.table1/",
  "note": "六眼外肌的一、二、三級作用與腦神經。",
  "type": "解剖教材"
 },
 {
  "id": "S141",
  "title": "Microsurgical Anatomy of the Common Tendinous Ring and Related Structures",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12068757/",
  "note": "共同腱環、視神經管與眶上裂的空間框架。",
  "type": "解剖研究"
 },
 {
  "id": "S142",
  "title": "NCBI：Anatomy, Head and Neck, Temporomandibular Joint",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK538486/",
  "note": "關節盤分腔、旋轉與滑移及韌帶。",
  "type": "解剖教材"
 },
 {
  "id": "S143",
  "title": "NCBI：Anatomy, Head and Neck, Mastication Muscles",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK541027/",
  "note": "四大咀嚼肌的骨端、動作及 V3 運動支。",
  "type": "解剖教材"
 },
 {
  "id": "S144",
  "title": "Texas Tech：Muscles of the Head and Neck",
  "url": "https://anatomy.ttuhscep.edu/anatomytables/muscles_head_neck.html",
  "note": "頭頸肌的附著、作用、神經對照。",
  "type": "大學教材"
 },
 {
  "id": "S145",
  "title": "NCBI：Anatomy, Head and Neck, Swallowing",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK554405/",
  "note": "吞嚥各期、軟顎、咽與喉的協調。",
  "type": "解剖教材"
 },
 {
  "id": "S146",
  "title": "NCBI：Anatomy, Head and Neck: Laryngeal Muscles",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK545265/",
  "note": "內在喉肌、聲帶外展內收與神經例外。",
  "type": "解剖教材"
 },
 {
  "id": "S147",
  "title": "NCBI：Anatomy, Head and Neck, Neck Triangle",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK554398/",
  "note": "頸前三角分區、邊界與內容物。",
  "type": "解剖教材"
 },
 {
  "id": "S148",
  "title": "Texas Tech：Anterior Triangle of the Neck",
  "url": "https://anatomy.ttuhscep.edu/nervous_system/antneck_tables.html",
  "note": "舌骨上、下肌，二腹肌、肩胛舌骨肌及神經。",
  "type": "大學教材"
 },
 {
  "id": "S149",
  "title": "NCBI：Anatomy, Head and Neck, Palate",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK557817/",
  "note": "軟顎五肌及顎帆張肌 V3 例外。",
  "type": "解剖教材"
 },
 {
  "id": "S150",
  "title": "American Academy of Ophthalmology EyeWiki：Extraocular Muscles",
  "url": "https://eyewiki.aao.org/Extraocular_Muscles",
  "note": "眼外肌解剖、眼位依賴與臨床導讀。",
  "type": "眼科專業教材"
 },
 {
  "id": "S151",
  "title": "NCBI：Anatomy, Head and Neck, Pharynx",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK544271/",
  "note": "咽縮肌、咽縫、咽部層級與相鄰構造。",
  "type": "解剖教材"
 },
 {
  "id": "S152",
  "title": "NCBI：Anatomy, Head and Neck: Larynx",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK538202/",
  "note": "喉軟骨、膜、聲帶與喉神經。",
  "type": "解剖教材"
 },
 {
  "id": "S153",
  "title": "NCBI：Levator Palpebrae Superioris Muscle",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK536921/",
  "note": "提上眼瞼肌與上瞼板肌的構造差別。",
  "type": "解剖教材"
 },
 {
  "id": "S154",
  "title": "NCBI Clinical Methods：Cranial Nerves III, IV, and VI",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK406/",
  "note": "周邊神經、核內上直肌交叉及提瞼雙側核支配。",
  "type": "解剖教材"
 },
 {
  "id": "S155",
  "title": "NCBI：Horner Syndrome",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK500000/",
  "note": "交感途徑受損、輕度眼瞼下垂及縮瞳。",
  "type": "解剖教材"
 },
 {
  "id": "S156",
  "title": "NCBI：Anatomy, Head and Neck, Tongue",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK507782/",
  "note": "舌內外肌、頦舌肌及 XII／顎舌肌 X。",
  "type": "解剖教材"
 },
 {
  "id": "S157",
  "title": "CT and MR Imaging of the Buccal Space: Normal Anatomy and Abnormalities",
  "url": "https://pubmed.ncbi.nlm.nih.gov/15782016/",
  "note": "頰間隙在頰肌外側、咀嚼間隙前方；不是單純兩肌平行夾層。",
  "type": "影像解剖研究"
 },
 {
  "id": "S158",
  "title": "NCBI：Medial Pterygoid Muscle",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK546588/",
  "note": "深頭來自外翼板內面，淺頭涉及上顎結節等；校正大翼口訣。",
  "type": "解剖教材"
 },
 {
  "id": "S159",
  "title": "NCBI：Thyrohyoid Membrane",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK532995/",
  "note": "上喉神經內支與上喉血管穿甲狀舌骨膜。",
  "type": "解剖教材"
 },
 {
  "id": "S160",
  "title": "Anatomy of the ansa cervicalis: nerve fiber analysis",
  "url": "https://pubmed.ncbi.nlm.nih.gov/18507614/",
  "note": "頸神經纖維與 XII 同行，不把同行當纖維來源。",
  "type": "解剖研究"
 },
 {
  "id": "S161",
  "title": "Quantification of translational and gliding components in human TMJ during mouth opening",
  "url": "https://pubmed.ncbi.nlm.nih.gov/15777532/",
  "note": "張口包含下腔旋轉與上腔平移的整合。",
  "type": "運動學研究"
 },
 {
  "id": "S162",
  "title": "Isolated superior rectus palsy due to contralateral midbrain infarction",
  "url": "https://pubmed.ncbi.nlm.nih.gov/14623739/",
  "note": "上直肌核內交叉與周邊同側支配的差別。",
  "type": "臨床解剖研究"
 },
 {
  "id": "S163",
  "title": "Classification of pharyngeal muscles based on innervations from glossopharyngeal and vagus nerves in human",
  "url": "https://pubmed.ncbi.nlm.nih.gov/19479181/",
  "note": "基本 X／IX 口訣之外，嚥肌支配仍有更細的分佈。",
  "type": "解剖研究"
 },
 {
  "id": "S164",
  "title": "NCBI：Pharynx—Anatomy, Neural Innervation, and Motor Pattern",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK54279/",
  "note": "吞嚥時嚥肌、舌骨與喉閉合的整體運動模式。",
  "type": "解剖教材"
 },
 {
  "id": "S165",
  "title": "NCBI：Physiology, Gag Reflex",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK554502/",
  "note": "咽反射的基本 IX 感覺、X 運動框架。",
  "type": "解剖教材"
 },
 {
  "id": "S166",
  "title": "NCBI Clinical Methods：Cranial Nerves IX and X",
  "url": "https://www.ncbi.nlm.nih.gov/books/NBK386/",
  "note": "軟顎抬高、懸壅垂偏向與 IX／X 檢查。",
  "type": "解剖教材"
 }
];
anatomySources.push(...muscles1Sources);
const muscles1Topics=[
 {
  "id": "muscles1-video-notes",
  "title": "第五部影片全片逐段筆記",
  "english": "Full-video notes · 1:53:42",
  "summary": "全片 45 段時間筆記，依序連結顏面、眼、顳顎、舌、咽喉與頸前三角。",
  "sources": [
   "S137",
   "S138",
   "S139",
   "S140",
   "S141",
   "S142",
   "S143",
   "S144",
   "S145",
   "S146",
   "S147",
   "S148",
   "S149",
   "S150",
   "S151",
   "S152",
   "S153",
   "S154",
   "S155",
   "S156",
   "S157",
   "S158",
   "S159",
   "S160",
   "S161",
   "S162",
   "S163",
   "S164",
   "S165",
   "S166"
  ],
  "sections": [
   {
    "id": "muscles1-video-notes-1",
    "title": "01｜全片方法與閱讀路線",
    "html": "<div class=\"enrichment-label\">整理方法</div><p>全長 1:53:42；全片音訊自動轉錄，另逐張核對 227 張抽樣板書。以下是課堂重述與分開標示的教材核對，不是逐字稿或逐秒人工觀看。回看區間為約略值，可前後 20–30 秒找完整說明。</p><div class=\"flow\"><div class=\"flow-step\">顏面／提瞼</div><div class=\"flow-arrow\" aria-hidden=\"true\">↓</div><div class=\"flow-step\">眼肌／眼眶／檢查</div><div class=\"flow-arrow\" aria-hidden=\"true\">↓</div><div class=\"flow-step\">顳顎／咀嚼／舌</div><div class=\"flow-arrow\" aria-hidden=\"true\">↓</div><div class=\"flow-step\">咽、軟顎、喉與吞嚥</div><div class=\"flow-arrow\" aria-hidden=\"true\">↓</div><div class=\"flow-step\">舌骨上下肌與頸三角、SCM</div></div><p><a href=\"#/subject/anatomy/chapter/muscles1/topic/board-atlas\">先看黑板重繪圖集 →</a></p>"
   },
   {
    "id": "muscles1-video-notes-2",
    "title": "02｜全片時間索引",
    "html": "<div class=\"enrichment-label\">影片時間索引</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">回看區間</th><th scope=\"col\">本段</th><th scope=\"col\">詳細頁</th></tr></thead><tbody><tr><td>00:00–01:54</td><td>由骨骼進到肌肉：建築物的比喻</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/rapid-review\">肌肉（1）跨區比較與易錯表</a></td></tr><tr><td>01:54–04:15</td><td>表情肌、字根與吹氣圓唇</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/facial-muscles\">表情肌、口周方向與 VII</a></td></tr><tr><td>04:15–06:15</td><td>口周板書：嘴角與上下唇的方向</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/facial-muscles\">表情肌、口周方向與 VII</a></td></tr><tr><td>06:15–09:33</td><td>提瞼骨骼肌、上瞼板平滑肌與下垂</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/eyelid\">睜眼、閉眼與眼瞼下垂</a></td></tr><tr><td>09:33–11:57</td><td>六眼外肌與第一張方向圖</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/eye-muscles\">六眼外肌、拉力與扭轉</a></td></tr><tr><td>11:57–13:45</td><td>眼球上極與 III、IV、VI</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/eye-muscles\">六眼外肌、拉力與扭轉</a></td></tr><tr><td>13:45–16:54</td><td>右眼外側：上斜滑車與下斜路線</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/eye-muscles\">六眼外肌、拉力與扭轉</a></td></tr><tr><td>16:54–20:18</td><td>受力向量：為什麼下斜能上轉</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/eye-muscles\">六眼外肌、拉力與扭轉</a></td></tr><tr><td>20:18–22:36</td><td>上直核內支配與長短肌記憶</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/eye-muscles\">六眼外肌、拉力與扭轉</a></td></tr><tr><td>22:36–25:27</td><td>把骨骼章眼眶圖加上共同腱環</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/orbit-pathways\">共同腱環、眶上裂與眶下裂</a></td></tr><tr><td>25:27–28:42</td><td>視神經管、眶裂環內／外清單</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/orbit-pathways\">共同腱環、眶上裂與眶下裂</a></td></tr><tr><td>28:42–31:33</td><td>眼眶軸、視軸與臨床測試</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/eye-exam\">H 型眼球檢查與肌肉定位</a></td></tr><tr><td>31:33–34:57</td><td>H 型檢查：外展測直，內收測斜</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/eye-exam\">H 型眼球檢查與肌肉定位</a></td></tr><tr><td>34:57–36:33</td><td>眼肌神經總結與四咀嚼肌</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/mastication\">四咀嚼肌、間隙與下顎偏斜</a></td></tr><tr><td>36:33–38:39</td><td>補回顳顎關節：關節盤與兩腔</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/tmj\">顳顎關節、關節盤與三韌帶</a></td></tr><tr><td>38:39–42:42</td><td>三韌帶：下顎頸、角、小舌</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/tmj\">顳顎關節、關節盤與三韌帶</a></td></tr><tr><td>42:42–46:42</td><td>咬肌、頰肌與頰間隙板書</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/mastication\">四咀嚼肌、間隙與下顎偏斜</a></td></tr><tr><td>46:42–48:30</td><td>顳肌、冠狀突與顴弓深面</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/mastication\">四咀嚼肌、間隙與下顎偏斜</a></td></tr><tr><td>48:30–51:36</td><td>內翼肌與翼下顎間隙</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/mastication\">四咀嚼肌、間隙與下顎偏斜</a></td></tr><tr><td>51:36–53:33</td><td>外翼肌與四肌向量合成</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/mastication\">四咀嚼肌、間隙與下顎偏斜</a></td></tr><tr><td>53:33–55:45</td><td>張閉口口誤更正與前突後縮</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/mastication\">四咀嚼肌、間隙與下顎偏斜</a></td></tr><tr><td>55:45–57:45</td><td>單側外翼與患側偏斜</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/mastication\">四咀嚼肌、間隙與下顎偏斜</a></td></tr><tr><td>57:45–1:00:42</td><td>四舌外肌：骨端、動作、神經</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/tongue\">四舌外肌、伸舌與 XII</a></td></tr><tr><td>1:00:42–1:01:57</td><td>頦舌肌與 XII 伸舌偏斜</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/tongue\">四舌外肌、伸舌與 XII</a></td></tr><tr><td>1:01:57–1:05:24</td><td>咽的側面框架與三條前附著線</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/pharynx\">咽縮肌、咽縫與四層通道</a></td></tr><tr><td>1:05:24–1:09:06</td><td>咽管展開、後縫與套杯模型</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/pharynx\">咽縮肌、咽縫與四層通道</a></td></tr><tr><td>1:09:06–1:12:12</td><td>三縮肌的前後附著與推送</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/pharynx\">咽縮肌、咽縫與四層通道</a></td></tr><tr><td>1:12:12–1:15:09</td><td>軟顎三主角與耳咽管</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/palate\">軟顎五肌、耳咽管與吞嚥</a></td></tr><tr><td>1:15:09–1:17:36</td><td>咽縱肌：顎咽、耳咽管咽、莖突咽</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/pharynx\">咽縮肌、咽縫與四層通道</a></td></tr><tr><td>1:17:36–1:20:45</td><td>咽縮肌上方與層間四通路</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/pharynx\">咽縮肌、咽縫與四層通道</a></td></tr><tr><td>1:20:45–1:23:09</td><td>九肌分組與 V3、IX、X</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/palate\">軟顎五肌、耳咽管與吞嚥</a></td></tr><tr><td>1:23:09–1:24:00</td><td>咽反射：感覺 IX，運動 X</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/palate\">軟顎五肌、耳咽管與吞嚥</a></td></tr><tr><td>1:24:00–1:25:24</td><td>單側 X 與懸壅垂偏健側</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/palate\">軟顎五肌、耳咽管與吞嚥</a></td></tr><tr><td>1:25:24–1:27:45</td><td>喉橫切／上視與杓狀軟骨</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/larynx-structure\">喉軟骨、聲帶與神經入口</a></td></tr><tr><td>1:27:45–1:29:24</td><td>環甲、環杓、甲杓與緊開關鬆</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/larynx-muscles\">內在喉肌：開、閉、張力</a></td></tr><tr><td>1:29:24–1:31:36</td><td>杓狀轉動與開聲門</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/larynx-muscles\">內在喉肌：開、閉、張力</a></td></tr><tr><td>1:31:36–1:34:39</td><td>橫杓、斜杓、聲肌三項</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/larynx-muscles\">內在喉肌：開、閉、張力</a></td></tr><tr><td>1:34:39–1:36:33</td><td>上喉外支、喉返與手術情境</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/larynx-muscles\">內在喉肌：開、閉、張力</a></td></tr><tr><td>1:36:33–1:39:12</td><td>舌骨上四肌與二腹前後腹</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/hyoid-neck\">舌骨上、下肌與 C1 同行纖維</a></td></tr><tr><td>1:39:12–1:41:33</td><td>上肌三組神經與四舌骨下肌</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/hyoid-neck\">舌骨上、下肌與 C1 同行纖維</a></td></tr><tr><td>1:41:33–1:43:36</td><td>淺深舌骨下肌與下一張圖</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/hyoid-neck\">舌骨上、下肌與 C1 同行纖維</a></td></tr><tr><td>1:43:36–1:47:18</td><td>頸部模型：SCM、二腹、肩胛舌骨</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/neck-triangles\">頸前、後三角與胸鎖乳突肌</a></td></tr><tr><td>1:47:18–1:50:42</td><td>前四區、後兩區的邊界</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/neck-triangles\">頸前、後三角與胸鎖乳突肌</a></td></tr><tr><td>1:50:42–1:52:30</td><td>內容物與頸動脈鞘</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/neck-triangles\">頸前、後三角與胸鎖乳突肌</a></td></tr><tr><td>1:52:30–1:53:42</td><td>片尾 SCM 單側作用</td><td><a href=\"#/subject/anatomy/chapter/muscles1/topic/neck-triangles\">頸前、後三角與胸鎖乳突肌</a></td></tr></tbody></table></div>"
   },
   {
    "id": "muscles1-video-notes-3",
    "title": "03｜00:00–01:54｜由骨骼進到肌肉：建築物的比喻",
    "html": "<div class=\"enrichment-label\">影片重述</div><ul><li>講者用鋼骨、外牆與隔間、水電、傢俱比喻骨骼、肌肉、循環、神經和器官系統。</li><li>第三堂課由骨骼轉進頭頸肌肉；本片先從表情肌而不是全身肌肉總論開始。</li><li>讀每組構造時把圖畫出來，再接功能與神經，是本片反覆強調的方法。</li></ul>"
   },
   {
    "id": "muscles1-video-notes-4",
    "title": "04｜01:54–04:15｜表情肌、字根與吹氣圓唇",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>額枕肌額腹抬眉形成橫皺紋；皺眉肌將眉聚向內下，閉眼則由眼輪匝肌。</li><li>講者用 cilia、supercilia、oculi、oris 的字根區分睫毛、眉毛、眼與口。</li><li>吹口哨要先用口輪匝控制唇形，再用頰肌壓頰與氣流協同。</li></ul><div class=\"study-note teal\">教材核對：字根相近不代表纖毛、睫毛是同樣組織；肌名的語源只是記憶輔助。S138、S153。</div>"
   },
   {
    "id": "muscles1-video-notes-5",
    "title": "05｜04:15–06:15｜口周板書：嘴角與上下唇的方向",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>板書以口為中心，畫笑肌向外、顴肌外上、提口角、提上唇及下方降口角／下唇的方向。</li><li>闊頸肌用寬廣的頸淺層肌説明；頦肌連到下唇與頦部皮膚。</li><li>講者接到提上眼瞼肌，提醒抬眉與把眼皮打開不是同一動作。</li></ul><div class=\"study-note teal\">教材核對：顴大主要提嘴角，顴小主要提上唇；提上眼瞼肌不屬典型第二咽弓表情肌的「VII 例外」。S138、S153。</div>"
   },
   {
    "id": "muscles1-video-notes-6",
    "title": "06｜06:15–09:33｜提瞼骨骼肌、上瞼板平滑肌與下垂",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>講者以額肌大動作與眉不動的睜眼對照，區分額肌與提上眼瞼肌。</li><li>提上眼瞼肌由 III 支配；相鄰平滑肌由交感支配，課堂以傳統混合肌方式説明。</li><li>III 與交感途徑受損都可能眼瞼下垂，片中用 Horner 作比較。</li></ul><div class=\"study-note teal\">教材核對：本章分提上眼瞼肌與上瞼板肌兩構造；Horner 常較輕下垂、縮瞳，與 III 多眼肌障礙的框架不同。S153、S155。</div>"
   },
   {
    "id": "muscles1-video-notes-7",
    "title": "07｜09:33–11:57｜六眼外肌與第一張方向圖",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>四直肌為上、下、內、外直；兩斜為上、下斜。</li><li>課堂右眼正面圖把內直向鼻側、外直向外側，上下直加內收分量。</li><li>上斜與下斜在垂直方向及外展分量上與直肌分開記。</li></ul><div class=\"study-note teal\">教材核對：圖為正視位方向摘要；斜肌正視位首要作用是扭轉，不能只背向下外／向上外。S139、S140。</div>"
   },
   {
    "id": "muscles1-video-notes-8",
    "title": "08｜11:57–13:45｜眼球上極與 III、IV、VI",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>講者用眼球上方標記定義內旋、外旋，避免只從下方附著箭頭判斷。</li><li>上直、上斜配內旋；下直、下斜配外旋。</li><li>外直由 VI、上斜由 IV，其餘六眼球肌中的主要組合由 III。</li></ul><div class=\"study-note teal\">教材核對：內旋／外旋是扭轉，不是眼看向內／外。提上眼瞼肌另列，不能加入「六轉眼肌」的數目。S140、S154。</div>"
   },
   {
    "id": "muscles1-video-notes-9",
    "title": "09｜13:45–16:54｜右眼外側：上斜滑車與下斜路線",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>講者改畫右眼外側，先畫角膜前方、外直肌，再補上斜與下斜。</li><li>上斜肌繞前內上方的滑車，再連到後外上方鞏膜。</li><li>下斜肌在後外下方的附著受拉向前內側，與上斜不同。</li></ul><div class=\"study-note teal\">教材核對：起點到止點路徑、收縮拉力、眼球轉動是三件事；外側投影將內側滑車示出，不是實際骨頭移除照片。S137、S150。</div>"
   },
   {
    "id": "muscles1-video-notes-10",
    "title": "10｜16:54–20:18｜受力向量：為什麼下斜能上轉",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>課堂從後下方附著點往前下拉，想像球體旋轉得到下斜的上轉分量。</li><li>由後外向前內的拉力，再說明外展與外旋方向。</li><li>再把上下直肌沿眶後方路線接回上／下轉加內收的摘要。</li></ul><div class=\"study-note teal\">教材核對：這是二維力學比喻，真實眼肌路徑、滑輪系統與不同眼位更複雜；不當固定三維軸的精確推導。S139、S150。</div>"
   },
   {
    "id": "muscles1-video-notes-11",
    "title": "11｜20:18–22:36｜上直核內支配與長短肌記憶",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>講者特別提醒上直肌的對側支配特性，與其他多數同側配對區別。</li><li>共同腱環被加到四直肌的後方起點；下斜由前方起，作為較短的記憶。</li><li>上斜繞滑車、有較長腱路線，與下斜短路線對照。</li></ul><div class=\"study-note teal\">教材核對：上直是動眼核亞核的交叉特性；周邊 III 仍支配同側 SR，不是同一 SR 普遍接左右兩條周邊 III。S154、S162。</div>"
   },
   {
    "id": "muscles1-video-notes-12",
    "title": "12｜22:36–25:27｜把骨骼章眼眶圖加上共同腱環",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>講者回到蝶骨大小翼、視神經管與眶上／下裂的前章圖。</li><li>共同腱環用另一色圈起，包含視神經管與眶上裂的一部分。</li><li>在環上、下、內、外配四直肌起點，說明腱環並非眶下裂。</li></ul><div class=\"study-note teal\">教材核對：環是軟組織起點框架，不是新骨孔；本站分組圖不模擬每個孔裂的精確形狀。S141。</div>"
   },
   {
    "id": "muscles1-video-notes-13",
    "title": "13｜25:27–28:42｜視神經管、眶裂環內／外清單",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>視神經管配 II 與眼動脈。</li><li>SOF 環內配 III、鼻睫 V1、VI；環外配 IV、額 V1、淚 V1 與上眼靜脈相關通路。</li><li>眶下裂回到 V2 的眶下、顴分支與靜脈交通，強調不要把 V1 三支一起塞入環內。</li></ul><div class=\"study-note teal\">教材核對：神經分支與靜脈有細部變異；V2 主幹不是全部直接穿眶下裂。S141、S154。</div>"
   },
   {
    "id": "muscles1-video-notes-14",
    "title": "14｜28:42–31:33｜眼眶軸、視軸與臨床測試",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>由上視右眼圖，講者畫出眼眶軸與眼球軸的差異。</li><li>上轉既可能由上直、也可能由下斜參與，僅叫向上看不夠定位。</li><li>將水平眼位先改變，讓後續垂直動作偏重相應肌肉，是這段核心。</li></ul><div class=\"study-note teal\">教材核對：沒有標右眼是本片作圖約定，不是解剖圖普遍規定；測試位也不代表只有一條肌肉在收縮。S139。</div>"
   },
   {
    "id": "muscles1-video-notes-15",
    "title": "15｜31:33–34:57｜H 型檢查：外展測直，內收測斜",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>先向外看，再向上看，重點測 SR；向外再向下重點測 IR。</li><li>先向內看，再向上重點測 IO；先內再下重點測 SO。</li><li>水平內收、外展則配 MR、LR；片中以兩組上下配對反覆比。</li></ul><div class=\"study-note teal\">教材核對：動作圖上的「上直向上內」與測試「外展位再上看」不矛盾，兩者講不同眼位。S139、S140、S154。</div>"
   },
   {
    "id": "muscles1-video-notes-16",
    "title": "16｜34:57–36:33｜眼肌神經總結與四咀嚼肌",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>講者再次總結眼球肌 III、IV、VI，與表情肌 VII 及提瞼 III 相對照。</li><li>咀嚼肌進入第一咽弓、V3 運動支框架。</li><li>列咬、顳、內翼、外翼四肌，先畫顴弓與下顎骨。</li></ul><div class=\"study-note teal\">教材核對：頰肌幫助食團控制，卻屬 VII，不是四大咀嚼肌之一。S138、S143。</div>"
   },
   {
    "id": "muscles1-video-notes-17",
    "title": "17｜36:33–38:39｜補回顳顎關節：關節盤與兩腔",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>這段補回骨骼第四部延後的 TMJ。</li><li>盤上方作前後滑動，盤下方作張閉口相關的旋轉。</li><li>顳骨下顎窩與下顎髁為骨端，盤分隔兩腔。</li></ul><div class=\"study-note teal\">教材核對：上下腔是主要動作分層；完整張口結合旋轉與平移，不是隻由下腔獨立完成。S142、S161。</div>"
   },
   {
    "id": "muscles1-video-notes-18",
    "title": "18｜38:39–42:42｜三韌帶：下顎頸、角、小舌",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>外側顳顎韌帶接頸；莖突下顎接角；蝶下顎接小舌，講者用三骨點記憶。</li><li>片中強調外側韌帶限制過度後移，避免把下顎髁往外耳道方向推。</li><li>蝶下顎的支持與莖突下顎的輔助比喻，用來區分兩個內外側連結。</li></ul><div class=\"study-note teal\">教材核對：被動限制不是韌帶主動帶動下顎；蝶下顎上端應找蝶骨棘。S142。</div>"
   },
   {
    "id": "muscles1-video-notes-19",
    "title": "19｜42:42–46:42｜咬肌、頰肌與頰間隙板書",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>再畫下顎髁突、冠狀突與顴弓，橘色咬肌由弓到支外側。</li><li>內側頰肌構成口腔側壁，講者在兩者相關區標 buccal space。</li><li>從止點向起點的力，推咬肌上提下顎的方向。</li></ul><div class=\"study-note teal\">教材核對：頰間隙主要在頰肌外側、咀嚼間隙前方，後方有咬肌等邊界，不能化成整面咬肌與頰肌的平行夾層。S157。</div>"
   },
   {
    "id": "muscles1-video-notes-20",
    "title": "20｜46:42–48:30｜顳肌、冠狀突與顴弓深面",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>顳肌以扇形由顳窩到冠狀突，畫在顴弓深部。</li><li>向上和向後的分量，幫助記閉口與後縮。</li><li>講者以顴弓與顳肌之間的圖上間隙區別咬／頰區。</li></ul><div class=\"study-note teal\">教材核對：顳肌前後束方向不同；課堂間隙標記只是此圖深淺提示，不等於全部正式臨床顳間隙分類。S143、S144。</div>"
   },
   {
    "id": "muscles1-video-notes-21",
    "title": "21｜48:30–51:36｜內翼肌與翼下顎間隙",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>內翼肌在下顎支內側，止在下顎角／支內側，板書用虛線。</li><li>拉力朝前上，對應上提及前突分量。</li><li>下顎支與內翼肌之間標翼下顎間隙，和外側兩個區分。</li></ul><div class=\"study-note teal\">教材核對：片中將起點概括成蝶骨大翼；教材應分外翼板內面的深頭與上顎結節／顎骨相關淺頭。S158。</div>"
   },
   {
    "id": "muscles1-video-notes-22",
    "title": "22｜51:36–53:33｜外翼肌與四肌向量合成",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>外翼肌連到顳顎區，片中用前方拉力說明前突與開口相關運動。</li><li>將四肌畫成上提、後上、前上、前下的方向摘要。</li><li>從骨端位置推力比只記動作名稱更容易分咬、顳、兩翼。</li></ul><div class=\"study-note teal\">教材核對：外翼上／下頭附著與活動不同；不能說全部只止關節盤或全部纖維都是前下開口。S143、S142。</div>"
   },
   {
    "id": "muscles1-video-notes-23",
    "title": "23｜53:33–55:45｜張閉口口誤更正與前突後縮",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>講者最初將開口閉口說反，隨即明確更正：上提閉口、下壓張口。</li><li>四大肌中咬、顳、內翼主閉口；外翼與張口相關。</li><li>前突重點內翼、外翼；後縮重點顳肌後束。</li></ul><div class=\"study-note teal\">教材核對：只在四大咀嚼肌內配對才可用「第四號開口」口訣；完整張口還需舌骨上肌等參與。S143。</div>"
   },
   {
    "id": "muscles1-video-notes-24",
    "title": "24｜55:45–57:45｜單側外翼與患側偏斜",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>右外翼正常作用可使下顎向左，左側則相反。</li><li>右側 V3 運動／外翼弱時，張口可偏右，亦即患側。</li><li>講者將正常向對側與損傷偏患側作成考題對照。</li></ul><div class=\"study-note teal\">教材核對：偏斜亦可能來自機械性關節限制；必須讀病灶情境。S143、S142。</div>"
   },
   {
    "id": "muscles1-video-notes-25",
    "title": "25｜57:45–1:00:42｜四舌外肌：骨端、動作、神經",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>顎舌抬後舌、莖突舌後上、舌骨舌後下、頦舌伸舌與下壓，以四箭頭整理。</li><li>顎舌為 X，其餘常用舌外肌以 XII 為主。</li><li>講者用 genio、glossus、hyoid、stylo 字根把舌與舌骨、下顎頦區分開。</li></ul><div class=\"study-note teal\">教材核對：各肌有不同束，動作不是永遠只限一箭頭；顎舌同時屬軟顎／咽峽框架。S156。</div>"
   },
   {
    "id": "muscles1-video-notes-26",
    "title": "26｜1:00:42–1:01:57｜頦舌肌與 XII 伸舌偏斜",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>正常右頦舌單側作用使舌向對側。</li><li>右周邊 XII 損傷，伸舌偏右，片中重點是患側一詞。</li><li>兩側同時出力時伸舌可維持中線。</li></ul><div class=\"study-note teal\">教材核對：周邊病灶口訣不能直接套所有中樞病灶；另分頦舌與頦舌骨肌的神經來源。S156。</div>"
   },
   {
    "id": "muscles1-video-notes-27",
    "title": "27｜1:01:57–1:05:24｜咽的側面框架與三條前附著線",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>講者先畫顱底、下顎、舌骨、甲狀軟骨，接到咽轉食道的 C6 高度。</li><li>翼下顎縫配頰肌與上咽縮肌，中部配莖突舌骨韌帶區。</li><li>下部由甲狀軟骨斜線接下嚥縮肌，三條前附著線與後方咽縫對照。</li></ul><div class=\"study-note teal\">教材核對：C6 是常用層級，不是咽縫被釘在 C6 椎體的骨性附著證明；完整各肌起點見表。S151。</div>"
   },
   {
    "id": "muscles1-video-notes-28",
    "title": "28｜1:05:24–1:09:06｜咽管展開、後縫與套杯模型",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>把紙捲成管，後方縫合線比喻咽縫，再畫三層環狀肌。</li><li>上、中、下嚥縮肌要彼此重疊；講者發現板書高度不合後修正。</li><li>上部較內、下部肌覆上部下緣，像套杯而不是三個分離圓圈。</li></ul><div class=\"study-note teal\">教材核對：本章按教材重疊關係重畫；原片畫圖的比例與修改過程不直接當真實尺寸。S151。</div>"
   },
   {
    "id": "muscles1-video-notes-29",
    "title": "29｜1:09:06–1:12:12｜三縮肌的前後附著與推送",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>再次背上部翼下顎縫、中部舌骨／莖突舌骨韌帶、下部甲狀軟骨區。</li><li>後方都連到咽後中線相關框架；環狀收縮協同使食團下行。</li><li>頰肌與上咽縮在翼下顎縫兩側的連接，是把口腔與咽接起來的骨點。</li></ul><div class=\"study-note teal\">教材核對：下嚥縮還需分甲咽與環咽部；下部與 UES 的作用不是隻推食團的同義詞。S151、S164。</div>"
   },
   {
    "id": "muscles1-video-notes-30",
    "title": "30｜1:12:12–1:15:09｜軟顎三主角與耳咽管",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>口腔張開圖中，顎帆張向兩側、顎帆提向上、懸壅垂肌在中線。</li><li>講者說張肌、提肌與耳咽管開放相關。</li><li>名稱 tensor、levator、velum、palatine 用來辨認肌肉動作與位置。</li></ul><div class=\"study-note teal\">教材核對：顎帆張肌是重要主動開管肌，提肌協同較複雜；完整軟顎五肌還含顎舌、顎咽。S149。</div>"
   },
   {
    "id": "muscles1-video-notes-31",
    "title": "31｜1:15:09–1:17:36｜咽縱肌：顎咽、耳咽管咽、莖突咽",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>側面圖分別從軟顎、耳咽管、莖突連接咽壁。</li><li>這三組縱向縮短抬咽與喉，幫助吞嚥，不同於環肌縮小腔徑。</li><li>莖突咽由較外側穿入，隨後與下一段層間通路連在一起。</li></ul><div class=\"study-note teal\">教材核對：縱肌與縮肌協同，不能把整個吞嚥只分成「上提或下推」兩個完全獨立步驟。S145、S151。</div>"
   },
   {
    "id": "muscles1-video-notes-32",
    "title": "32｜1:17:36–1:20:45｜咽縮肌上方與層間四通路",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>上縮上方接軟顎肌／耳咽管框架。</li><li>上與中之間配莖突咽；中下之間是上喉內支通向喉的關係。</li><li>下縮深面／下方再連喉返神經終段，片中用上喉、下喉作對照。</li></ul><div class=\"study-note teal\">教材核對：完整表補 IX 伴莖突咽及相關血管；TVP 與 LVP 的位置不同，不把二者都說成同一空隙內穿行。S151、S159。</div>"
   },
   {
    "id": "muscles1-video-notes-33",
    "title": "33｜1:20:45–1:23:09｜九肌分組與 V3、IX、X",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>課堂九項是三咽縮、三咽縱、三顎帆／懸壅垂肌。</li><li>顎帆張 V3、莖突咽 IX，其餘主要用 X 咽叢的基本框架。</li><li>講者把例外畫在較外側輔助記憶。</li></ul><div class=\"study-note teal\">教材核對：這九項是講義組合，不是所有咽部／軟顎肌肉唯一總數；不由不清楚的神經源頭口述推出 XII 支配嚥肌。S149、S151、S163。</div>"
   },
   {
    "id": "muscles1-video-notes-34",
    "title": "34｜1:23:09–1:24:00｜咽反射：感覺 IX，運動 X",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>耳鼻喉科碰咽後的反應作為 gag reflex 的例子。</li><li>片中基本配對是 IX 感覺傳入、X 運動傳出。</li><li>把感覺與動作的兩半分別記，避免只答一個神經。</li></ul><div class=\"study-note teal\">教材核對：反射有個體與刺激條件差異，不能僅由一次無反應就確診神經損傷或判斷吞嚥安全。S165。</div>"
   },
   {
    "id": "muscles1-video-notes-35",
    "title": "35｜1:24:00–1:25:24｜單側 X 與懸壅垂偏健側",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>右側 X 弱時右側軟顎上提較少，健康側仍上提。</li><li>發啊音時，懸壅垂可偏左，即健側／對側。</li><li>與前面 XII 伸舌偏患側分開比較。</li></ul><div class=\"study-note teal\">教材核對：此為周邊神經情境的基本配對，結構不對稱與其他病因仍須完整檢查。S166。</div>"
   },
   {
    "id": "muscles1-video-notes-36",
    "title": "36｜1:25:24–1:27:45｜喉橫切／上視與杓狀軟骨",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>講者把聲帶畫在管腔內，說明當前前後方與前面咽側圖的投影關係。</li><li>後方兩個杓狀軟骨，前端聲帶在甲狀框架會合。</li><li>先建立聲帶、杓狀、前後方向，後面肌肉拉力才能判開閉。</li></ul><div class=\"study-note teal\">教材核對：這是聲門層級的概念上視圖；不同高度的喉橫切內容不同。S152。</div>"
   },
   {
    "id": "muscles1-video-notes-37",
    "title": "37｜1:27:45–1:29:24｜環甲、環杓、甲杓與緊開關鬆",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>按軟骨名稱配肌肉：環甲、兩環杓、甲杓，前四項為課堂核心。</li><li>張緊與鬆弛看聲帶長短；開閉看兩條聲帶之間的間距。</li><li>環杓後肌開、環杓側肌關，是片中反覆強調的配對。</li></ul><div class=\"study-note teal\">教材核對：口頭排序可能交換開關字，但真實配對為後外展、側內收；張力與間距不能混成同一動作。S146。</div>"
   },
   {
    "id": "muscles1-video-notes-38",
    "title": "38｜1:29:24–1:31:36｜杓狀轉動與開聲門",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>拉杓狀肌突時，聲帶突會隨其轉動，片中用支點與箭頭說明。</li><li>後環杓讓聲帶分開；側環杓使膜間部分靠攏。</li><li>用兩側對照，理解為什麼同樣附著杓狀會出現不同動作。</li></ul><div class=\"study-note teal\">教材核對：兩肌骨端和杓狀三維轉動需要一起看；不能只按肌名中的後／側猜聲帶末端方向。S146、S152。</div>"
   },
   {
    "id": "muscles1-video-notes-39",
    "title": "39｜1:31:36–1:34:39｜橫杓、斜杓、聲肌三項",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>橫杓使兩杓靠攏，是片中唯一不成對的一項。</li><li>斜杓與上方喉入口閉合相關，區別於只控制聲帶張力的任務。</li><li>聲肌用來精細調整張力，補足前面環甲／甲杓的概括。</li></ul><div class=\"study-note teal\">教材核對：本片七項是學習分組；聲肌常視為甲杓專化部分，斜杓／杓會厭等也有連續與協同關係。S146。</div>"
   },
   {
    "id": "muscles1-video-notes-40",
    "title": "40｜1:34:39–1:36:33｜上喉外支、喉返與手術情境",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>環甲由上喉外支，其他主要內在喉肌由喉返／下喉神經。</li><li>上喉內支偏感覺；外支與高音控制相關。</li><li>甲狀腺手術提到喉返損傷的嗓音／氣道問題，作解剖臨床連結。</li></ul><div class=\"study-note teal\">教材核對：單雙側病灶與聲帶位置影響表現，不是每次雙側損傷都同樣立即窒息；此頁沒有操作治療指示。S146、S152。</div>"
   },
   {
    "id": "muscles1-video-notes-41",
    "title": "41｜1:36:33–1:39:12｜舌骨上四肌與二腹前後腹",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>畫下顎、舌骨、甲狀軟骨、胸骨、肩胛與莖突，將四上肌連到舌骨。</li><li>頦舌骨、下顎舌骨、二腹、莖突舌骨為四大組；二腹有前後兩腹。</li><li>從名字與骨端記抬舌骨的方向，而非先背一串無位置的肌名。</li></ul><div class=\"study-note teal\">教材核對：舌骨固定時某些肌可降下顎；目標骨與固定條件要讀清楚。S148。</div>"
   },
   {
    "id": "muscles1-video-notes-42",
    "title": "42｜1:39:12–1:41:33｜上肌三組神經與四舌骨下肌",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>二腹後腹＋莖突舌骨配 VII，下顎舌骨＋二腹前腹配 V3。</li><li>頦舌骨與下方甲狀舌骨配 C1；另外三舌骨下肌配頸神經袢。</li><li>下四為肩胛舌骨、胸骨舌骨、胸骨甲狀、甲狀舌骨。</li></ul><div class=\"study-note teal\">教材核對：C1借 XII 路線，不能當成 XII 舌肌運動纖維；神經袢常用 C1–C3 框架且有變異。S148、S160。</div>"
   },
   {
    "id": "muscles1-video-notes-43",
    "title": "43｜1:41:33–1:43:36｜淺深舌骨下肌與下一張圖",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>片中把肩胛舌骨、胸骨舌骨放淺層，胸骨甲狀、甲狀舌骨放較深。</li><li>再以四上四下與兩個C1例外作複習。</li><li>準備進頸三角，以同樣骨端圖加入 SCM 與二腹、肩胛舌骨路線。</li></ul><div class=\"study-note teal\">教材核對：圖在同頁不代表肌肉全部同平面；教材圖與層次表要合讀。S137、S148。</div>"
   },
   {
    "id": "muscles1-video-notes-44",
    "title": "44｜1:43:36–1:47:18｜頸部模型：SCM、二腹、肩胛舌骨",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>講者重畫下顎、舌骨、胸骨、鎖骨與乳突，依骨端加肌肉。</li><li>SCM 從胸骨、鎖骨到乳突，是分前後頸區最重要的長邊。</li><li>二腹在上方繞舌骨，肩胛舌骨路線把下方區再分開。</li></ul><div class=\"study-note teal\">教材核對：SCM 止點不是莖突，肩胛舌骨不是鎖骨到舌骨直接的一條線。S147、S148。</div>"
   },
   {
    "id": "muscles1-video-notes-45",
    "title": "45｜1:47:18–1:50:42｜前四區、後兩區的邊界",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>前區由頸中線、下顎與 SCM 前緣圍起；前四區為頦下、下顎下、頸動脈、肌。</li><li>後區由 SCM 後緣、斜方前緣與鎖骨圍起。</li><li>肩胛舌骨下腹分後區為枕三角、鎖骨上三角；上腹是前區的邊界。</li></ul><div class=\"study-note teal\">教材核對：頸前三角與後三角分別用 SCM 前、後緣，不能互換；頦下整體為不成對的中線區。S147。</div>"
   },
   {
    "id": "muscles1-video-notes-46",
    "title": "46｜1:50:42–1:52:30｜內容物與頸動脈鞘",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>頦下配淋巴結，下顎下配腺，頸動脈區配鞘與相關結構。</li><li>課堂鞘內記總／內頸動脈、內頸靜脈、X 與深頸淋巴相關組織。</li><li>枕區強調橫頸動脈，其他區雖未詳講仍可回主題頁看完整基礎內容。</li></ul><div class=\"study-note teal\">教材核對：外頸動脈、XII、交感幹、頸神經袢與鞘的關係要分層；同區不等於全部鞘內。S147、S148。</div>"
   },
   {
    "id": "muscles1-video-notes-47",
    "title": "47｜1:52:30–1:53:42｜片尾 SCM 單側作用",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><ul><li>回到 SCM 骨端，胸骨與鎖骨為下方、乳突為上方。</li><li>右側收縮使臉向左／對側轉，片中也以向上分量說明動作。</li><li>本上傳片在單側 SCM 解釋中結束，後續完整移頭肌課程不冒充已講。</li></ul><div class=\"study-note teal\">教材核對：SCM 可同側側屈、對側旋轉；頭與下頸姿勢影響屈伸分量。雙側細節屬補充。S144、S147。</div>"
   },
   {
    "id": "muscles1-video-notes-48",
    "title": "48｜圖像與筆記怎麼交叉讀",
    "html": "<div class=\"enrichment-label\">閱讀指引</div><p>時間索引按原片順序，主題頁按構造分開。本片到頸三角與 SCM 單側動作結束，不將後續肌肉影片內容冒充已講授。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">回想重點</th><th scope=\"col\">頁面</th></tr></thead><tbody><tr><td>眼肌方向／臨床檢查</td><td>眼外肌＋H 型檢查</td></tr><tr><td>神經與孔道</td><td>眼眶通道＋神經統整</td></tr><tr><td>下顎與舌偏斜</td><td>咀嚼肌＋舌肌</td></tr><tr><td>咽與喉的上視／側視</td><td>咽縮肌＋喉結構＋喉肌</td></tr><tr><td>片尾三角圖</td><td>頸前三角＋舌骨上下肌</td></tr></tbody></table></div>"
   }
  ]
 },
 {
  "id": "board-atlas",
  "title": "黑板重繪圖集與教材圖對照",
  "english": "Redrawn board atlas · visual guide",
  "summary": "集中查看板書構想重繪、視角說明、回看時間與相近教材圖。",
  "sources": [
   "S137",
   "S138",
   "S139",
   "S140",
   "S141",
   "S142",
   "S143",
   "S144",
   "S145",
   "S146",
   "S147",
   "S148",
   "S149",
   "S150",
   "S151",
   "S152",
   "S153",
   "S154",
   "S155",
   "S156",
   "S157",
   "S158",
   "S159",
   "S160",
   "S161",
   "S162",
   "S163",
   "S164",
   "S165",
   "S166"
  ],
  "sections": [
   {
    "id": "board-atlas-1",
    "title": "01｜先確認視角，再跟著圖讀肌肉",
    "html": "<div class=\"enrichment-label\">重繪方法</div><p>本片每 30 秒抽樣一張板書，共 227 張，逐張檢視後選取可辨認的圖像構想。重畫時保留方向、層級、骨端與神經配對，增加中文標籤；不是把低解析度截圖的每條粉筆線當成真實解剖。</p><div class=\"study-note teal\">眼外肌的動作圖、測試圖與側面拉力圖分開；喉的上視圖與頸前側面圖分開。圖中說明與教材更正優先於示意線條。</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">類型</th><th scope=\"col\">本章使用</th><th scope=\"col\">閱讀方式</th></tr></thead><tbody><tr><td>板書構想重繪</td><td>口周、眼肌、眼眶、顳顎、舌、咽、喉與頸前三角</td><td>回看時間為約略區間，必要時前後找完整說明</td></tr><tr><td>整合補充圖</td><td>吞嚥流程、神經配對與 H 型檢查整理</td><td>是本站重組，不冒充板書逐筆原樣</td></tr><tr><td>解剖教材圖</td><td>顏面、眼肌、舌骨周圍肌肉</td><td>保留原圖英文，中文對照另列</td></tr></tbody></table></div>"
   },
   {
    "id": "board-atlas-2",
    "title": "02｜口周肌：把嘴角與嘴唇方向分開",
    "html": "<div class=\"enrichment-label\">板書構想重繪／整合</div><figure><a href=\"assets/muscles1-mouth.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：口周肌：把嘴角與嘴唇方向分開\"><img src=\"assets/muscles1-mouth.svg\" alt=\"口周肌：把嘴角與嘴唇方向分開\" loading=\"lazy\" decoding=\"async\"></a><figcaption>依板書構想重繪並以教材核對，非逐筆摹寫／非等比例。回看 04:30–06:00。 圖的線條是概念關係，完整附著與來源見相應主題頁。 點圖可放大。</figcaption></figure>"
   },
   {
    "id": "board-atlas-3",
    "title": "03｜六眼外肌：動作方向與 III、IV、VI",
    "html": "<div class=\"enrichment-label\">板書構想重繪／整合</div><figure><a href=\"assets/muscles1-eye-actions.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：六眼外肌：動作方向與 III、IV、VI\"><img src=\"assets/muscles1-eye-actions.svg\" alt=\"六眼外肌：動作方向與 III、IV、VI\" loading=\"lazy\" decoding=\"async\"></a><figcaption>依板書構想重繪並以教材核對，非逐筆摹寫／非等比例。回看 10:30–13:30。 圖的線條是概念關係，完整附著與來源見相應主題頁。 點圖可放大。</figcaption></figure>"
   },
   {
    "id": "board-atlas-4",
    "title": "04｜斜肌繞行：先畫滑車，再看拉力",
    "html": "<div class=\"enrichment-label\">板書構想重繪／整合</div><figure><a href=\"assets/muscles1-oblique-pull.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：斜肌繞行：先畫滑車，再看拉力\"><img src=\"assets/muscles1-oblique-pull.svg\" alt=\"斜肌繞行：先畫滑車，再看拉力\" loading=\"lazy\" decoding=\"async\"></a><figcaption>依板書構想重繪並以教材核對，非逐筆摹寫／非等比例。回看 14:00–22:00。 圖的線條是概念關係，完整附著與來源見相應主題頁。 點圖可放大。</figcaption></figure>"
   },
   {
    "id": "board-atlas-5",
    "title": "05｜眼眶通道：孔裂與共同腱環分兩層讀",
    "html": "<div class=\"enrichment-label\">板書構想重繪／整合</div><figure><a href=\"assets/muscles1-orbital-ring.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：眼眶通道：孔裂與共同腱環分兩層讀\"><img src=\"assets/muscles1-orbital-ring.svg\" alt=\"眼眶通道：孔裂與共同腱環分兩層讀\" loading=\"lazy\" decoding=\"async\"></a><figcaption>依板書構想重繪並以教材核對，非逐筆摹寫／非等比例。回看 23:00–28:30。 圖的線條是概念關係，完整附著與來源見相應主題頁。 點圖可放大。</figcaption></figure>"
   },
   {
    "id": "board-atlas-6",
    "title": "06｜顳顎關節：關節盤、旋轉與滑移",
    "html": "<div class=\"enrichment-label\">板書構想重繪／整合</div><figure><a href=\"assets/muscles1-tmj.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：顳顎關節：關節盤、旋轉與滑移\"><img src=\"assets/muscles1-tmj.svg\" alt=\"顳顎關節：關節盤、旋轉與滑移\" loading=\"lazy\" decoding=\"async\"></a><figcaption>依板書構想重繪並以教材核對，非逐筆摹寫／非等比例。回看 36:30–42:30。 圖的線條是概念關係，完整附著與來源見相應主題頁。 點圖可放大。</figcaption></figure>"
   },
   {
    "id": "board-atlas-7",
    "title": "07｜咀嚼肌：用骨端與拉力推運動",
    "html": "<div class=\"enrichment-label\">板書構想重繪／整合</div><figure><a href=\"assets/muscles1-mastication.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：咀嚼肌：用骨端與拉力推運動\"><img src=\"assets/muscles1-mastication.svg\" alt=\"咀嚼肌：用骨端與拉力推運動\" loading=\"lazy\" decoding=\"async\"></a><figcaption>依板書構想重繪並以教材核對，非逐筆摹寫／非等比例。回看 43:00–57:30。 圖的線條是概念關係，完整附著與來源見相應主題頁。 點圖可放大。</figcaption></figure>"
   },
   {
    "id": "board-atlas-8",
    "title": "08｜頸前層級：下顎—舌骨—甲狀軟骨—胸骨",
    "html": "<div class=\"enrichment-label\">板書構想重繪／整合</div><figure><a href=\"assets/muscles1-hyoid.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：頸前層級：下顎—舌骨—甲狀軟骨—胸骨\"><img src=\"assets/muscles1-hyoid.svg\" alt=\"頸前層級：下顎—舌骨—甲狀軟骨—胸骨\" loading=\"lazy\" decoding=\"async\"></a><figcaption>依板書構想重繪並以教材核對，非逐筆摹寫／非等比例。回看 62:00–72:00、97:00–103:00。 圖的線條是概念關係，完整附著與來源見相應主題頁。 點圖可放大。</figcaption></figure>"
   },
   {
    "id": "board-atlas-9",
    "title": "09｜吞嚥：提喉、閉氣道與推送需協調",
    "html": "<div class=\"enrichment-label\">板書構想重繪／整合</div><figure><a href=\"assets/muscles1-swallow.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：吞嚥：提喉、閉氣道與推送需協調\"><img src=\"assets/muscles1-swallow.svg\" alt=\"吞嚥：提喉、閉氣道與推送需協調\" loading=\"lazy\" decoding=\"async\"></a><figcaption>依板書構想重繪並以教材核對，非逐筆摹寫／非等比例。回看 58:00–72:00、80:00–85:00。 圖的線條是概念關係，完整附著與來源見相應主題頁。 點圖可放大。</figcaption></figure>"
   },
   {
    "id": "board-atlas-10",
    "title": "10｜聲門俯視：外展打開，內收靠攏",
    "html": "<div class=\"enrichment-label\">板書構想重繪／整合</div><figure><a href=\"assets/muscles1-glottis.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：聲門俯視：外展打開，內收靠攏\"><img src=\"assets/muscles1-glottis.svg\" alt=\"聲門俯視：外展打開，內收靠攏\" loading=\"lazy\" decoding=\"async\"></a><figcaption>依板書構想重繪並以教材核對，非逐筆摹寫／非等比例。回看 85:30–96:30。 圖的線條是概念關係，完整附著與來源見相應主題頁。 點圖可放大。</figcaption></figure>"
   },
   {
    "id": "board-atlas-11",
    "title": "11｜喉肌：聲帶長短與開閉分開讀",
    "html": "<div class=\"enrichment-label\">板書構想重繪／整合</div><figure><a href=\"assets/muscles1-larynx-tension.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：喉肌：聲帶長短與開閉分開讀\"><img src=\"assets/muscles1-larynx-tension.svg\" alt=\"喉肌：聲帶長短與開閉分開讀\" loading=\"lazy\" decoding=\"async\"></a><figcaption>依板書構想重繪並以教材核對，非逐筆摹寫／非等比例。回看 88:00–96:30。 圖的線條是概念關係，完整附著與來源見相應主題頁。 點圖可放大。</figcaption></figure>"
   },
   {
    "id": "board-atlas-12",
    "title": "12｜頭頸肌神經：大分類與例外",
    "html": "<div class=\"enrichment-label\">板書構想重繪／整合</div><figure><a href=\"assets/muscles1-nerve-map.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：頭頸肌神經：大分類與例外\"><img src=\"assets/muscles1-nerve-map.svg\" alt=\"頭頸肌神經：大分類與例外\" loading=\"lazy\" decoding=\"async\"></a><figcaption>依板書構想重繪並以教材核對，非逐筆摹寫／非等比例。回看 07:00–10:00、80:00–85:00、97:00–103:00。 圖的線條是概念關係，完整附著與來源見相應主題頁。 點圖可放大。</figcaption></figure>"
   },
   {
    "id": "board-atlas-13",
    "title": "13｜頸前三角：用三條肌肉畫分區",
    "html": "<div class=\"enrichment-label\">板書構想重繪／整合</div><figure><a href=\"assets/muscles1-neck-triangles.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：頸前三角：用三條肌肉畫分區\"><img src=\"assets/muscles1-neck-triangles.svg\" alt=\"頸前三角：用三條肌肉畫分區\" loading=\"lazy\" decoding=\"async\"></a><figcaption>依板書構想重繪並以教材核對，非逐筆摹寫／非等比例。回看 103:00–113:42。 圖的線條是概念關係，完整附著與來源見相應主題頁。 點圖可放大。</figcaption></figure>"
   },
   {
    "id": "board-atlas-14",
    "title": "14｜H 型檢查：先水平定位，再測上下",
    "html": "<div class=\"enrichment-label\">板書構想重繪／整合</div><figure><a href=\"assets/muscles1-eye-test.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：H 型檢查：先水平定位，再測上下\"><img src=\"assets/muscles1-eye-test.svg\" alt=\"H 型檢查：先水平定位，再測上下\" loading=\"lazy\" decoding=\"async\"></a><figcaption>依板書構想重繪並以教材核對，非逐筆摹寫／非等比例。回看 29:00–35:00。 圖的線條是概念關係，完整附著與來源見相應主題頁。 點圖可放大。</figcaption></figure>"
   },
   {
    "id": "board-atlas-15",
    "title": "15｜四舌外肌：動作與 X／XII",
    "html": "<div class=\"enrichment-label\">板書構想重繪／整合</div><figure><a href=\"assets/muscles1-tongue.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：四舌外肌：動作與 X／XII\"><img src=\"assets/muscles1-tongue.svg\" alt=\"四舌外肌：動作與 X／XII\" loading=\"lazy\" decoding=\"async\"></a><figcaption>依板書構想重繪並以教材核對，非逐筆摹寫／非等比例。回看 58:00–61:45。 圖的線條是概念關係，完整附著與來源見相應主題頁。 點圖可放大。</figcaption></figure>"
   },
   {
    "id": "board-atlas-16",
    "title": "16｜咽管展開與重疊咽縮肌",
    "html": "<div class=\"enrichment-label\">板書構想重繪／整合</div><figure><a href=\"assets/muscles1-pharynx.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：咽管展開與重疊咽縮肌\"><img src=\"assets/muscles1-pharynx.svg\" alt=\"咽管展開與重疊咽縮肌\" loading=\"lazy\" decoding=\"async\"></a><figcaption>依板書構想重繪並以教材核對，非逐筆摹寫／非等比例。回看 62:00–72:30。 圖的線條是概念關係，完整附著與來源見相應主題頁。 點圖可放大。</figcaption></figure>"
   },
   {
    "id": "board-atlas-17",
    "title": "17｜頸後三角：枕區與鎖骨上區",
    "html": "<div class=\"enrichment-label\">板書構想重繪／整合</div><figure><a href=\"assets/muscles1-posterior-triangle.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：頸後三角：枕區與鎖骨上區\"><img src=\"assets/muscles1-posterior-triangle.svg\" alt=\"頸後三角：枕區與鎖骨上區\" loading=\"lazy\" decoding=\"async\"></a><figcaption>依板書構想重繪並以教材核對，非逐筆摹寫／非等比例。回看 107:30–112:30。 圖的線條是概念關係，完整附著與來源見相應主題頁。 點圖可放大。</figcaption></figure>"
   },
   {
    "id": "board-atlas-18",
    "title": "18｜三張相近教材圖",
    "html": "<div class=\"enrichment-label\">教材圖片</div><figure><a href=\"assets/muscles1-os-face.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：OpenStax 11.7 face 解剖教材圖\"><img src=\"assets/muscles1-os-face.webp\" alt=\"OpenStax 11.7 face 解剖教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 11.7；CC BY-NC-SA 4.0。<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/11-3-axial-muscles-of-the-head-neck-and-back\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 與口周箭頭圖一起讀。 點圖可放大。</figcaption></figure><figure><a href=\"assets/muscles1-os-eye.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：OpenStax 11.9 eye 解剖教材圖\"><img src=\"assets/muscles1-os-eye.webp\" alt=\"OpenStax 11.9 eye 解剖教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 11.9；CC BY-NC-SA 4.0。<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/11-3-axial-muscles-of-the-head-neck-and-back\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 比較外側與正面兩視角。 點圖可放大。</figcaption></figure><figure><a href=\"assets/muscles1-os-neck.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：OpenStax 11.13 neck 解剖教材圖\"><img src=\"assets/muscles1-os-neck.webp\" alt=\"OpenStax 11.13 neck 解剖教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 11.13；CC BY-NC-SA 4.0。<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/11-3-axial-muscles-of-the-head-neck-and-back\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 比較舌骨上下肌群。 點圖可放大。</figcaption></figure>"
   }
  ]
 },
 {
  "id": "facial-muscles",
  "title": "表情肌、口周方向與 VII",
  "english": "Facial expression · buccinator · CN VII",
  "summary": "先分嘴角、嘴唇與下顎，再辨認額肌、閉眼、頰肌及闊頸肌。",
  "sources": [
   "S137",
   "S138",
   "S144"
  ],
  "sections": [
   {
    "id": "facial-muscles-1",
    "title": "01｜表情肌的共同框架",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><figure><a href=\"assets/muscles1-os-face.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：OpenStax 11.7 face 解剖教材圖\"><img src=\"assets/muscles1-os-face.webp\" alt=\"OpenStax 11.7 face 解剖教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 11.7；CC BY-NC-SA 4.0。<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/11-3-axial-muscles-of-the-head-neck-and-back\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 先找眼輪匝、口輪匝與頰肌，再讀各附著區。 點圖可放大。</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">特性</th><th scope=\"col\">解剖框架</th><th scope=\"col\">不要誤推</th></tr></thead><tbody><tr><td>常見止點</td><td>皮膚與軟組織，肌纖維彼此交織</td><td>不是全部都用骨—骨的槓桿想</td></tr><tr><td>胚胎來源</td><td>第二咽弓系統</td><td>不把眼外肌與提瞼肌硬列入同一來源</td></tr><tr><td>主要運動神經</td><td>顏面神經 VII</td><td>顔面感覺主要涉及 V，不是 VII 全包</td></tr><tr><td>功能</td><td>表情、口唇控制、閉眼與壓頰</td><td>協助咀嚼不等於四大咀嚼肌</td></tr></tbody></table></div>"
   },
   {
    "id": "facial-muscles-2",
    "title": "02｜額肌、皺眉與閉眼",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">肌肉</th><th scope=\"col\">動作</th><th scope=\"col\">觀察</th></tr></thead><tbody><tr><td>額枕肌額腹 frontalis</td><td>抬眉，產生額部橫皺紋</td><td>不等於單純提上眼瞼</td></tr><tr><td>皺眉肌 corrugator supercilii</td><td>眉向內下，眉間縱皺紋</td><td>不是主要抬眉肌</td></tr><tr><td>眼輪匝肌 orbicularis oculi</td><td>閉眼，瞼部與眶部力道不同</td><td>睜眼主要提上眼瞼肌 III</td></tr><tr><td>枕腹與帽狀腱膜</td><td>頭皮運動的前後連繫</td><td>不是頭頂另有完整額肌肌腹</td></tr><tr><td>耳前／耳上／耳後肌</td><td>耳廓運動，VII 分支相關</td><td>片中未細講仍可辨認基本名稱</td></tr></tbody></table></div>"
   },
   {
    "id": "facial-muscles-3",
    "title": "03｜口周肌的向量圖",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><figure><a href=\"assets/muscles1-mouth.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：口周肌：把嘴角與嘴唇方向分開\"><img src=\"assets/muscles1-mouth.svg\" alt=\"口周肌：把嘴角與嘴唇方向分開\" loading=\"lazy\" decoding=\"async\"></a><figcaption>依板書構想重繪並以教材核對，非逐筆摹寫／非等比例。回看 04:30–06:00。 箭頭表示嘴角／唇的動作，不能當成全部纖維止點。 點圖可放大。</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">肌肉</th><th scope=\"col\">主要動作</th><th scope=\"col\">對應目標</th></tr></thead><tbody><tr><td>笑肌 risorius</td><td>嘴角向外</td><td>嘴角</td></tr><tr><td>顴大肌 zygomaticus major</td><td>嘴角向外上</td><td>嘴角</td></tr><tr><td>顴小肌 zygomaticus minor</td><td>協助提上唇</td><td>上唇為主，不能與顴大肌完全同義</td></tr><tr><td>提口角肌 levator anguli oris</td><td>提嘴角</td><td>嘴角</td></tr><tr><td>提上唇肌 levator labii superioris</td><td>提上唇</td><td>上唇</td></tr><tr><td>降口角肌 depressor anguli oris</td><td>降嘴角</td><td>嘴角</td></tr><tr><td>降下唇肌 depressor labii inferioris</td><td>降下唇</td><td>下唇</td></tr><tr><td>頦肌 mentalis</td><td>突出下唇、抬頦部皮膚</td><td>不是把整個下顎上提</td></tr><tr><td>闊頸肌 platysma</td><td>拉緊頸皮膚，輔助降下顎／嘴角</td><td>頸部淺層，VII</td></tr></tbody></table></div>"
   },
   {
    "id": "facial-muscles-4",
    "title": "04｜吹氣、圓唇與食團位置",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">作用</th><th scope=\"col\">神經</th></tr></thead><tbody><tr><td>口輪匝肌</td><td>閉唇、噘唇、控制唇形</td><td>VII</td></tr><tr><td>頰肌 buccinator</td><td>把頰壓向牙，避免食物留在口腔前庭</td><td>VII 的頰支</td></tr><tr><td>頰神經 buccal nerve</td><td>一般為 V3 感覺分支</td><td>不是頰肌主要運動神經</td></tr><tr><td>四大咀嚼肌</td><td>直接作用於下顎骨</td><td>V3 運動支</td></tr></tbody></table></div><div class=\"study-note teal\">吹口哨需口唇形狀與氣流一起控制，不能只背一塊肌肉。影片嘴角方向圖也不能代替下顎運動圖。</div>"
   }
  ]
 },
 {
  "id": "eyelid",
  "title": "睜眼、閉眼與眼瞼下垂",
  "english": "Levator · superior tarsal · ptosis",
  "summary": "比較 III 骨骼肌、交感平滑肌與 VII 閉眼，校正混合肌口訣。",
  "sources": [
   "S153",
   "S155",
   "S154",
   "S138"
  ],
  "sections": [
   {
    "id": "eyelid-1",
    "title": "01｜三種眼瞼動作的構造",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">肌肉種類</th><th scope=\"col\">支配與動作</th></tr></thead><tbody><tr><td>提上眼瞼肌 levator palpebrae superioris</td><td>骨骼肌</td><td>III 上支，主要提上瞼</td></tr><tr><td>上瞼板肌 superior tarsal／Müller</td><td>平滑肌</td><td>交感，維持上瞼張力</td></tr><tr><td>眼輪匝肌</td><td>骨骼肌</td><td>VII，閉眼</td></tr><tr><td>額肌</td><td>骨骼肌</td><td>VII，抬眉，可代償提瞼不足</td></tr></tbody></table></div><div class=\"study-note teal\">影片用提瞼「混合肌」的傳統説明。本章把提上眼瞼肌與相鄰的上瞼板肌分開命名，避免把兩者支配混為一條。</div>"
   },
   {
    "id": "eyelid-2",
    "title": "02｜瞼板不是軟骨",
    "html": "<div class=\"enrichment-label\">教材延伸 · 名詞</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">名詞</th><th scope=\"col\">位置／材質</th><th scope=\"col\">區分</th></tr></thead><tbody><tr><td>眼瞼 palpebra</td><td>上、下眼皮整體</td><td>不等於只有瞼板</td></tr><tr><td>瞼板 tarsus</td><td>緻密結締組織的支架</td><td>不是跗骨 tarsal bone，也不是軟骨板</td></tr><tr><td>提瞼腱膜</td><td>提上眼瞼肌向前的腱膜</td><td>與額肌帽狀腱膜不同</td></tr><tr><td>睫毛 cilia</td><td>瞼緣毛髮</td><td>片中字源與纖毛同字根，組織不能因此相同</td></tr><tr><td>眉毛 supercilia</td><td>眼眶上方的毛髮</td><td>不要把皺眉肌當閉眼肌</td></tr></tbody></table></div>"
   },
   {
    "id": "eyelid-3",
    "title": "03｜III 損傷與 Horner 對照",
    "html": "<div class=\"enrichment-label\">教材延伸 · 解剖臨床連結</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較</th><th scope=\"col\">III 周邊損傷</th><th scope=\"col\">Horner 交感途徑損傷</th></tr></thead><tbody><tr><td>眼瞼</td><td>可較明顯下垂</td><td>常較輕的下垂</td></tr><tr><td>瞳孔</td><td>可擴大；是否受累視病因／部位</td><td>縮瞳</td></tr><tr><td>眼球運動</td><td>可能合併多方向障礙</td><td>一般不造成典型 III 型眼外肌麻痺</td></tr><tr><td>核心構造</td><td>提上眼瞼肌＋III 支配肌群</td><td>上瞼板肌等交感效應</td></tr><tr><td>限度</td><td>只看下垂不能直接定位</td><td>出汗表現也與受損位置有關</td></tr></tbody></table></div>"
   }
  ]
 },
 {
  "id": "eye-muscles",
  "title": "六眼外肌、拉力與扭轉",
  "english": "Extraocular actions · torsion · pull",
  "summary": "由正視位三種動作，對照側面斜肌路徑及 III／IV／VI。",
  "sources": [
   "S137",
   "S139",
   "S140",
   "S150",
   "S154",
   "S162"
  ],
  "sections": [
   {
    "id": "eye-muscles-1",
    "title": "01｜六塊控制眼球的肌肉",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><figure><a href=\"assets/muscles1-os-eye.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：OpenStax 11.9 eye 解剖教材圖\"><img src=\"assets/muscles1-os-eye.webp\" alt=\"OpenStax 11.9 eye 解剖教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 11.9；CC BY-NC-SA 4.0。<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/11-3-axial-muscles-of-the-head-neck-and-back\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 上瞼提肌可同在眶內，但六塊是指轉動眼球的四直、兩斜。 點圖可放大。</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">肌肉</th><th scope=\"col\">主要起點框架</th><th scope=\"col\">止點框架</th></tr></thead><tbody><tr><td>上、下、內、外直肌</td><td>共同腱環等眶尖框架</td><td>眼球前半部鞏膜</td></tr><tr><td>上斜肌</td><td>眶尖附近 → 前內上方滑車</td><td>後外上方鞏膜</td></tr><tr><td>下斜肌</td><td>眶底前內側，上顎骨區</td><td>後外下方鞏膜</td></tr><tr><td>提上眼瞼肌</td><td>眶內蝶骨小翼附近</td><td>上眼瞼腱膜系統；不是眼球轉動止點</td></tr></tbody></table></div>"
   },
   {
    "id": "eye-muscles-2",
    "title": "02｜正視位：每一條的完整作用",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><figure><a href=\"assets/muscles1-eye-actions.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：六眼外肌：動作方向與 III、IV、VI\"><img src=\"assets/muscles1-eye-actions.svg\" alt=\"六眼外肌：動作方向與 III、IV、VI\" loading=\"lazy\" decoding=\"async\"></a><figcaption>依板書構想重繪並以教材核對，非逐筆摹寫／非等比例。回看 10:30–13:30。 這張是動作摘要，不是 H 型檢查箭頭。 點圖可放大。</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">肌肉</th><th scope=\"col\">主作用</th><th scope=\"col\">其他作用</th><th scope=\"col\">神經</th></tr></thead><tbody><tr><td>MR 內直</td><td>內收</td><td>水平為主</td><td>III</td></tr><tr><td>LR 外直</td><td>外展</td><td>水平為主</td><td>VI</td></tr><tr><td>SR 上直</td><td>上轉</td><td>內旋、內收</td><td>III</td></tr><tr><td>IR 下直</td><td>下轉</td><td>外旋、內收</td><td>III</td></tr><tr><td>SO 上斜</td><td>內旋</td><td>下轉、外展</td><td>IV</td></tr><tr><td>IO 下斜</td><td>外旋</td><td>上轉、外展</td><td>III</td></tr></tbody></table></div><p>「向上向內」或「向下向外」是課堂方向摘要；斜肌正視位的首要動作是扭轉，且不同眼位下各分量會變。不能只背圖上一根二維斜箭頭。</p>"
   },
   {
    "id": "eye-muscles-3",
    "title": "03｜上斜繞滑車，下斜由前內側起",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><figure><a href=\"assets/muscles1-oblique-pull.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：斜肌繞行：先畫滑車，再看拉力\"><img src=\"assets/muscles1-oblique-pull.svg\" alt=\"斜肌繞行：先畫滑車，再看拉力\" loading=\"lazy\" decoding=\"async\"></a><figcaption>依板書構想重繪並以教材核對，非逐筆摹寫／非等比例。回看 14:00–22:00。 外側投影特意標出內側滑車；看起點、止點與轉向。 點圖可放大。</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">關係</th><th scope=\"col\">上斜肌</th><th scope=\"col\">下斜肌</th></tr></thead><tbody><tr><td>路線</td><td>後方起 → 前內上滑車 → 後外上鞏膜</td><td>前內側起 → 後外下鞏膜</td></tr><tr><td>繞行</td><td>有滑車改變腱方向</td><td>沒有同樣滑車</td></tr><tr><td>神經</td><td>IV 滑車神經</td><td>III</td></tr><tr><td>課堂長短比較</td><td>較長的肌腱路線是常用記憶</td><td>短、起於前方是辨認點</td></tr><tr><td>受力與眼動</td><td>拉附著點不等於眼球朝同方向平移</td><td>必須考慮眼球繞軸轉動</td></tr></tbody></table></div>"
   },
   {
    "id": "eye-muscles-4",
    "title": "04｜內旋／外旋：看眼球上極",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">動作</th><th scope=\"col\">定義</th><th scope=\"col\">主要肌肉配對</th></tr></thead><tbody><tr><td>內旋 intorsion</td><td>眼球上極向鼻側傾</td><td>SR＋SO</td></tr><tr><td>外旋 extorsion</td><td>眼球上極向顳側傾</td><td>IR＋IO</td></tr><tr><td>內收 adduction</td><td>視線向鼻側</td><td>MR 主要</td></tr><tr><td>外展 abduction</td><td>視線向顳側</td><td>LR 主要</td></tr></tbody></table></div><div class=\"study-note teal\">眼球扭轉與眼睛看向內側不同；把上極畫一個標記，避免從下方附著點的箭頭誤判。</div>"
   },
   {
    "id": "eye-muscles-5",
    "title": "05｜核內交叉不等於兩條周邊 III 同接一肌",
    "html": "<div class=\"enrichment-label\">教材核對 · 神經層級</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">層級</th><th scope=\"col\">較精確說法</th><th scope=\"col\">片中提醒的用法</th></tr></thead><tbody><tr><td>周邊 III 神經</td><td>上支支配同側 SR／提上眼瞼等</td><td>不能說每一側 SR 同時接左右周邊 III</td></tr><tr><td>SR 動眼核亞核</td><td>軸突跨至對側動眼神經支配對側 SR</td><td>上直肌的交叉特性是核內層級</td></tr><tr><td>提瞼中尾核</td><td>與雙側提瞼肌支配相關</td><td>與 SR 交叉不是同一件事</td></tr><tr><td>病灶題</td><td>核、束、周邊神經受損表現不同</td><td>必須讀部位，不能只看「第三對」</td></tr></tbody></table></div>"
   }
  ]
 },
 {
  "id": "eye-exam",
  "title": "H 型眼球檢查與肌肉定位",
  "english": "H test · diagnostic gaze positions",
  "summary": "先內收／外展，才以向上向下測直肌／斜肌。",
  "sources": [
   "S139",
   "S140",
   "S154",
   "S150"
  ],
  "sections": [
   {
    "id": "eye-exam-1",
    "title": "01｜為什麼只叫向上看不夠",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><p>正視時上直與下斜都能參與上轉，下直與上斜都能參與下轉。因此影片先用眼眶軸與視軸不一致的圖，説明把眼球放到不同水平位置，再比較垂直動作。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">先把眼睛放到</th><th scope=\"col\">再看上方</th><th scope=\"col\">再看下方</th></tr></thead><tbody><tr><td>外展位</td><td>上直肌 SR</td><td>下直肌 IR</td></tr><tr><td>內收位</td><td>下斜肌 IO</td><td>上斜肌 SO</td></tr><tr><td>水平位置本身</td><td>外展主要 LR</td><td>內收主要 MR</td></tr></tbody></table></div>"
   },
   {
    "id": "eye-exam-2",
    "title": "02｜把測試圖與動作圖放旁邊",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><figure><a href=\"assets/muscles1-eye-test.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：H 型檢查：先水平定位，再測上下\"><img src=\"assets/muscles1-eye-test.svg\" alt=\"H 型檢查：先水平定位，再測上下\" loading=\"lazy\" decoding=\"async\"></a><figcaption>依板書構想重繪並以教材核對，非逐筆摹寫／非等比例。回看 29:00–35:00。 注意這張先後次序；不照正視位的斜箭頭直接測。 點圖可放大。</figcaption></figure><div class=\"study-note teal\">H 型檢查是定位與觀察協調的框架，不代表某一步其他肌肉完全停止工作，也不能只由單次看不上去就確診某條肌斷裂。</div>"
   },
   {
    "id": "eye-exam-3",
    "title": "03｜神經損傷的基本方向",
    "html": "<div class=\"enrichment-label\">教材延伸 · 檢查線索</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">受影響</th><th scope=\"col\">基本線索</th><th scope=\"col\">解題限制</th></tr></thead><tbody><tr><td>VI／LR</td><td>外展不足</td><td>也需考慮核與凝視途徑，非全部都是周邊 VI</td></tr><tr><td>IV／SO</td><td>內收位向下較弱，可有垂直／扭轉複視</td><td>頭傾、代償與完整眼位一起讀</td></tr><tr><td>III</td><td>內收、上／下轉、提瞼等可能受損</td><td>可伴瞳孔改變，表現受損範圍不同</td></tr><tr><td>機械性或肌肉性</td><td>活動受限亦可能不是腦神經病</td><td>不從一根箭頭直接跳診斷</td></tr></tbody></table></div>"
   }
  ]
 },
 {
  "id": "orbit-pathways",
  "title": "共同腱環、眶上裂與眶下裂",
  "english": "Annulus of Zinn · orbital fissures",
  "summary": "骨孔、裂隙與腱環內外是兩組不同的分類。",
  "sources": [
   "S141",
   "S154",
   "S139"
  ],
  "sections": [
   {
    "id": "orbit-pathways-1",
    "title": "01｜先找骨孔，再加軟組織腱環",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><figure><a href=\"assets/muscles1-orbital-ring.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：眼眶通道：孔裂與共同腱環分兩層讀\"><img src=\"assets/muscles1-orbital-ring.svg\" alt=\"眼眶通道：孔裂與共同腱環分兩層讀\" loading=\"lazy\" decoding=\"async\"></a><figcaption>依板書構想重繪並以教材核對，非逐筆摹寫／非等比例。回看 23:00–28:30。 這是分組框圖，不能當眶尖骨孔的真實形狀。 點圖可放大。</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">定位</th><th scope=\"col\">關係</th></tr></thead><tbody><tr><td>視神經管 optic canal</td><td>蝶骨小翼根部、眶尖</td><td>位於共同腱環包圍範圍</td></tr><tr><td>眶上裂 SOF</td><td>蝶骨大小翼間</td><td>部分位在腱環內，部分在外</td></tr><tr><td>眶下裂 IOF</td><td>眶底與外側壁交界</td><td>不在共同腱環內</td></tr><tr><td>共同腱環</td><td>四直肌起點框架</td><td>不是骨孔，也不是整個眶上裂</td></tr></tbody></table></div>"
   },
   {
    "id": "orbit-pathways-2",
    "title": "02｜環內、環外：分別背清單",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">通道</th><th scope=\"col\">主要構造</th><th scope=\"col\">分支細節</th></tr></thead><tbody><tr><td>視神經管</td><td>II、眼動脈</td><td>視神經與動脈不是 III</td></tr><tr><td>SOF 環內</td><td>III 上／下支、VI、鼻睫神經</td><td>鼻睫為 V1 分支</td></tr><tr><td>SOF 環外</td><td>IV、額神經、淚神經</td><td>額與淚也是 V1 分支</td></tr><tr><td>眼靜脈</td><td>上眼靜脈常經 SOF；通路與分支有變異</td><td>不把靜脈位置硬作每例唯一線</td></tr><tr><td>IOF</td><td>眶下、顴神經等 V2 分支，血管交通</td><td>不是 V2 主幹全部穿眶下裂</td></tr></tbody></table></div>"
   },
   {
    "id": "orbit-pathways-3",
    "title": "03｜把前章骨骼與本章肌肉接起來",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><div class=\"flow\"><div class=\"flow-step\">辨認蝶骨、視神經管與兩眶裂</div><div class=\"flow-arrow\" aria-hidden=\"true\">↓</div><div class=\"flow-step\">畫四直肌的共同腱環</div><div class=\"flow-arrow\" aria-hidden=\"true\">↓</div><div class=\"flow-step\">將 SOF 內容分環內／環外</div><div class=\"flow-arrow\" aria-hidden=\"true\">↓</div><div class=\"flow-step\">用神經供應回到相應眼肌</div></div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">題幹</th><th scope=\"col\">先做的分類</th></tr></thead><tbody><tr><td>問視神經管內容</td><td>II＋眼動脈</td></tr><tr><td>問四直肌共同起點</td><td>共同腱環</td></tr><tr><td>問鼻睫、額、淚是否同路</td><td>三個都是 V1，但腱環分組不同</td></tr><tr><td>問 VI 與 IV 相對腱環</td><td>VI 環內；IV 環外</td></tr></tbody></table></div>"
   }
  ]
 },
 {
  "id": "tmj",
  "title": "顳顎關節、關節盤與三韌帶",
  "english": "TMJ · disc · supporting ligaments",
  "summary": "補回第四章延後的顳顎關節，整理骨端、上下腔與韌帶止點。",
  "sources": [
   "S142",
   "S161"
  ],
  "sections": [
   {
    "id": "tmj-1",
    "title": "01｜誰與誰關節：盤不是第三塊骨",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><figure><a href=\"assets/muscles1-tmj.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：顳顎關節：關節盤、旋轉與滑移\"><img src=\"assets/muscles1-tmj.svg\" alt=\"顳顎關節：關節盤、旋轉與滑移\" loading=\"lazy\" decoding=\"async\"></a><figcaption>依板書構想重繪並以教材核對，非逐筆摹寫／非等比例。回看 36:30–42:30。 上腔滑移、下腔旋轉是功能分層；正常張口兩者整合。 點圖可放大。</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">配對</th><th scope=\"col\">理解</th></tr></thead><tbody><tr><td>下顎端</td><td>下顎髁／頭，髁突上方</td><td>不是冠狀突</td></tr><tr><td>顳骨端</td><td>下顎窩與關節結節區</td><td>關節可向前滑，不只停在窩裡</td></tr><tr><td>關節盤 articular disc</td><td>纖維性／纖維軟骨性組織</td><td>分隔上下滑液腔</td></tr><tr><td>表面覆蓋</td><td>以纖維軟骨相關結構為特色</td><td>不能照搬所有關節一律透明軟骨</td></tr></tbody></table></div>"
   },
   {
    "id": "tmj-2",
    "title": "02｜上、下腔與張閉口",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">區域</th><th scope=\"col\">主要動作</th><th scope=\"col\">課堂口訣核對</th></tr></thead><tbody><tr><td>上腔：盤與顳骨</td><td>平移／滑動</td><td>前突後縮相關，但完整張口也會用到</td></tr><tr><td>下腔：盤與下顎髁</td><td>旋轉</td><td>先前期張口的鉸鏈成分</td></tr><tr><td>張口整體</td><td>兩側協調，旋轉和平移並存</td><td>不是下腔單獨做全部張口</td></tr><tr><td>閉口整體</td><td>與肌肉、關節盤位置共同控制</td><td>不是隻把一根箭頭倒轉即可涵蓋所有病態</td></tr></tbody></table></div>"
   },
   {
    "id": "tmj-3",
    "title": "03｜三韌帶：頸、角、小舌",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">韌帶</th><th scope=\"col\">骨端概要</th><th scope=\"col\">記憶重點</th></tr></thead><tbody><tr><td>外側顳顎韌帶</td><td>顳骨關節區 → 下顎頸</td><td>限制過度位移，向後位移的課堂重點</td></tr><tr><td>莖突下顎韌帶</td><td>莖突 → 下顎角區</td><td>前突等方向的限制與支持</td></tr><tr><td>蝶下顎韌帶</td><td>蝶骨棘 → 下顎小舌</td><td>內側支持；不是蝶骨大翼隨便一點</td></tr><tr><td>下顎小舌 lingula</td><td>下顎孔旁的內側骨性標記</td><td>與下顎角、下顎頸不同</td></tr></tbody></table></div><div class=\"study-note teal\">「當支點／輔助運動」是影片力學比喻；韌帶被動限制作用要與肌肉主動拉力分開。</div>"
   },
   {
    "id": "tmj-4",
    "title": "04｜從張口前滑理解前脫位",
    "html": "<div class=\"enrichment-label\">教材延伸 · 構造應用</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">正常關係</th><th scope=\"col\">異常線索</th><th scope=\"col\">解剖理解</th></tr></thead><tbody><tr><td>髁與盤沿關節結節滑動</td><td>髁卡在結節前方可能形成前脫位</td><td>不是下顎骨向後撞耳道的同一種情境</td></tr><tr><td>盤與髁協調</td><td>盤位置與回復方式不同會影響聲響／鎖定</td><td>不能只由咔聲就確定盤脫位</td></tr><tr><td>兩側協調</td><td>偏斜可能與肌、神經或關節限製造成</td><td>需完整評估，不是單一方向即確診</td></tr></tbody></table></div>"
   }
  ]
 },
 {
  "id": "mastication",
  "title": "四咀嚼肌、間隙與下顎偏斜",
  "english": "Mastication · spaces · V3",
  "summary": "用骨端、拉力、雙側／單側作用理解張閉口與患側偏斜。",
  "sources": [
   "S143",
   "S144",
   "S158",
   "S157",
   "S142"
  ],
  "sections": [
   {
    "id": "mastication-1",
    "title": "01｜咬肌、顳肌：骨端先背",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><figure><a href=\"assets/muscles1-mastication.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：咀嚼肌：用骨端與拉力推運動\"><img src=\"assets/muscles1-mastication.svg\" alt=\"咀嚼肌：用骨端與拉力推運動\" loading=\"lazy\" decoding=\"async\"></a><figcaption>依板書構想重繪並以教材核對，非逐筆摹寫／非等比例。回看 43:00–57:30。 實線與箭頭是骨與動作概念，深部翼肌不能當全部外側可見。 點圖可放大。</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">肌肉</th><th scope=\"col\">主要起點</th><th scope=\"col\">主要止點</th><th scope=\"col\">作用</th></tr></thead><tbody><tr><td>咬肌</td><td>顴弓</td><td>下顎支、角外側</td><td>上提；各層纖維作用不同</td></tr><tr><td>顳肌</td><td>顳窩與顳筋膜</td><td>冠狀突與支前緣</td><td>上提，後束協助後縮</td></tr></tbody></table></div>"
   },
   {
    "id": "mastication-2",
    "title": "02｜內、外翼肌的起點不能都叫大翼",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">肌肉</th><th scope=\"col\">起點框架</th><th scope=\"col\">止點框架</th><th scope=\"col\">作用</th></tr></thead><tbody><tr><td>內翼肌</td><td>深頭：外翼板內面；淺頭：上顎結節、顎骨相關區</td><td>下顎角與支內側</td><td>上提、前突、側移</td></tr><tr><td>外翼肌上頭</td><td>蝶骨大翼下顳面等</td><td>盤／囊與髁區的附著有變異</td><td>盤與髁協調，非單純只張口</td></tr><tr><td>外翼肌下頭</td><td>外翼板外面為主要起點</td><td>下顎頸翼肌窩</td><td>前突、張口相關與對側運動</td></tr></tbody></table></div><div class=\"study-note teal\">片中把內翼肌起點概括成蝶骨大翼，本站校正為外翼板內面及淺頭來源。外翼肌亦不能只寫成全部止於關節盤。S158、S143。</div>"
   },
   {
    "id": "mastication-3",
    "title": "03｜一加二加三關口，四號參與開口",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">動作</th><th scope=\"col\">四大咀嚼肌中的主要組合</th><th scope=\"col\">教材補足</th></tr></thead><tbody><tr><td>上提／閉口</td><td>咬、顳、內翼</td><td>閉口力量由多肌協同</td></tr><tr><td>前突</td><td>內翼、外翼</td><td>咬肌淺部等亦可協同</td></tr><tr><td>後縮</td><td>顳肌後束為主要記憶</td><td>各纖維與共同控制更複雜</td></tr><tr><td>下壓／張口</td><td>外翼肌在四大肌中最相關</td><td>二腹、下顎舌骨、頦舌骨等亦參與</td></tr><tr><td>側移</td><td>單側翼肌的對側推動</td><td>不是隻改變嘴角形狀</td></tr></tbody></table></div><p>影片一度把張口與閉口方向口誤後當場更正；本表採用更正後的上提閉口、下壓張口。</p>"
   },
   {
    "id": "mastication-4",
    "title": "04｜外翼肌與 V3：偏向對側 vs 偏向患側",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">條件</th><th scope=\"col\">動作／表現</th><th scope=\"col\">原因</th></tr></thead><tbody><tr><td>右側外翼肌正常單側作用</td><td>下顎趨向左</td><td>右側髁向前，兩側協調產生轉動</td></tr><tr><td>左側正常單側作用</td><td>下顎趨向右</td><td>相對方向相反</td></tr><tr><td>右側周邊 V3 運動／外翼肌弱</td><td>張口可偏向右側</td><td>左側作用相對保留，弱側出力不足</td></tr><tr><td>神經框架</td><td>四大咀嚼肌 V3 運動支</td><td>頰肌是 VII，不能借 buccal 一字互換</td></tr></tbody></table></div><div class=\"study-note teal\">「偏向患側」是此神經肌肉情境的解剖口訣；關節盤障礙與其他機械限制也可能偏斜，不能只由外觀判定病因。</div>"
   },
   {
    "id": "mastication-5",
    "title": "05｜片中三間隙與深淺關係",
    "html": "<div class=\"enrichment-label\">影片重述＋間隙核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">課堂圖的空間</th><th scope=\"col\">圖上相鄰結構</th><th scope=\"col\">教材核對</th></tr></thead><tbody><tr><td>頰間隙 buccal space</td><td>頰肌與咬肌／頰部外側區</td><td>正式邊界更廣：頰肌在內，表情肌筋膜與皮下在外，咬肌等在後；不是純兩平行肌夾層</td></tr><tr><td>顴顳間隙（課堂標記）</td><td>顴弓與顳肌之間</td><td>用來理解投影層次；臨床顳間隙名稱與筋膜分類需另查</td></tr><tr><td>翼下顎間隙 pterygomandibular</td><td>下顎支內側與內翼肌之間</td><td>不是外翼肌與顴弓之間</td></tr><tr><td>虛線規則</td><td>被骨或肌遮擋</td><td>只是本片畫圖方式，不是神經固定走虛線</td></tr></tbody></table></div>"
   }
  ]
 },
 {
  "id": "tongue",
  "title": "四舌外肌、伸舌與 XII",
  "english": "Extrinsic tongue · protrusion · hypoglossal",
  "summary": "頦舌、舌骨舌、莖突舌與顎舌，分方向、骨端與神經。",
  "sources": [
   "S156",
   "S144",
   "S145"
  ],
  "sections": [
   {
    "id": "tongue-1",
    "title": "01｜四舌外肌方向圖",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><figure><a href=\"assets/muscles1-tongue.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：四舌外肌：動作與 X／XII\"><img src=\"assets/muscles1-tongue.svg\" alt=\"四舌外肌：動作與 X／XII\" loading=\"lazy\" decoding=\"async\"></a><figcaption>依板書構想重繪並以教材核對，非逐筆摹寫／非等比例。回看 58:00–61:45。 課堂向量摘要；不同肌束作用不能完全壓成一根箭頭。 點圖可放大。</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">肌肉</th><th scope=\"col\">主要外部附著</th><th scope=\"col\">常用動作</th><th scope=\"col\">神經</th></tr></thead><tbody><tr><td>頦舌肌 genioglossus</td><td>下顎上頦棘區</td><td>伸舌、壓低舌體等；單側向對側</td><td>XII</td></tr><tr><td>舌骨舌肌 hyoglossus</td><td>舌骨體／大角</td><td>壓低、後縮</td><td>XII</td></tr><tr><td>莖突舌肌 styloglossus</td><td>莖突等</td><td>後縮、上提</td><td>XII</td></tr><tr><td>顎舌肌 palatoglossus</td><td>顎腱膜／軟顎</td><td>抬後舌，收窄咽峽</td><td>X 經咽叢</td></tr></tbody></table></div>"
   },
   {
    "id": "tongue-2",
    "title": "02｜頦舌肌與頦舌骨肌只有一字之差",
    "html": "<div class=\"enrichment-label\">教材延伸 · 易錯名詞</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較</th><th scope=\"col\">頦舌肌</th><th scope=\"col\">頦舌骨肌</th></tr></thead><tbody><tr><td>主要目標</td><td>舌體</td><td>舌骨</td></tr><tr><td>下顎起點</td><td>上頦棘相關區</td><td>下頦棘相關區</td></tr><tr><td>作用</td><td>伸舌等</td><td>舌骨前上移；舌骨固定可助降下顎</td></tr><tr><td>運動纖維來源</td><td>XII</td><td>C1 隨 XII 行走</td></tr><tr><td>不能互換</td><td>名字含 glossus 是舌</td><td>含 hyoid 是舌骨</td></tr></tbody></table></div>"
   },
   {
    "id": "tongue-3",
    "title": "03｜單側作用與受損偏斜",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">情境</th><th scope=\"col\">方向</th><th scope=\"col\">先讀什麼</th></tr></thead><tbody><tr><td>右頦舌肌正常單側作用</td><td>舌向左</td><td>哪邊收縮？</td></tr><tr><td>右周邊 XII 受損，伸舌</td><td>舌偏右，患側可能萎縮</td><td>哪邊受損？</td></tr><tr><td>兩側作用</td><td>伸舌可保持中線</td><td>兩側協調</td></tr><tr><td>中樞或其他病因</td><td>不能全部直接套周邊口訣</td><td>病灶層級、萎縮與其他檢查</td></tr></tbody></table></div><p>片中將正常單側作用的「向對側」與右 XII 損傷後的「向患側」對比。題目若混用動作肌側與病灶側，要先寫條件。</p>"
   },
   {
    "id": "tongue-4",
    "title": "04｜內在肌改變形狀，外在肌改變位置",
    "html": "<div class=\"enrichment-label\">教材延伸 · 分類</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">分類</th><th scope=\"col\">例子</th><th scope=\"col\">主要框架</th></tr></thead><tbody><tr><td>舌內在肌</td><td>上下縱、橫、垂直肌</td><td>舌形狀，如伸長、縮短、變窄、變扁</td></tr><tr><td>舌外在肌</td><td>四塊常用配對</td><td>舌位置與舌體形狀共同控制</td></tr><tr><td>常用神經</td><td>內在肌多 XII，外在肌除顎舌多 XII</td><td>顎舌用 X 例外</td></tr></tbody></table></div>"
   }
  ]
 },
 {
  "id": "pharynx",
  "title": "咽縮肌、咽縫與四層通道",
  "english": "Pharyngeal constrictors · raphe · gaps",
  "summary": "重畫管壁與套杯模型，補完整附著、縱肌與神經通路。",
  "sources": [
   "S151",
   "S164",
   "S163",
   "S145",
   "S159"
  ],
  "sections": [
   {
    "id": "pharynx-1",
    "title": "01｜管子、展開圖與咽縫",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><figure><a href=\"assets/muscles1-pharynx.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：咽管展開與重疊咽縮肌\"><img src=\"assets/muscles1-pharynx.svg\" alt=\"咽管展開與重疊咽縮肌\" loading=\"lazy\" decoding=\"async\"></a><figcaption>依板書構想重繪並以教材核對，非逐筆摹寫／非等比例。回看 62:00–72:30。 上、中、下重疊像套杯；看圖的位置不作真實比例。 點圖可放大。</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">理解</th><th scope=\"col\">更正</th></tr></thead><tbody><tr><td>咽</td><td>顱底下至約 C6 轉食道的肌性通道</td><td>不是食道全部</td></tr><tr><td>咽縫 pharyngeal raphe</td><td>後方中線、咽縮肌附著與交織框架</td><td>上連枕骨咽結節等</td></tr><tr><td>C6</td><td>環狀軟骨下緣、咽食道交界常用層級</td><td>不是咽縫一定直接固定在 C6 椎體</td></tr><tr><td>上下重疊</td><td>下方肌的上部可覆較上方肌的下部</td><td>不是三個互不接觸的環圈</td></tr></tbody></table></div>"
   },
   {
    "id": "pharynx-2",
    "title": "02｜三個咽縮肌的前方與後方",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">肌肉</th><th scope=\"col\">前方附著框架</th><th scope=\"col\">後方／下方關係</th></tr></thead><tbody><tr><td>上咽縮肌</td><td>翼鉤、翼下顎縫、下顎舌骨線後段、舌側等</td><td>咽縫與上方枕骨框架</td></tr><tr><td>中咽縮肌</td><td>舌骨大小角、莖突舌骨韌帶等</td><td>向後至咽縫</td></tr><tr><td>下嚥縮肌甲咽部</td><td>甲狀軟骨斜線區</td><td>咽縫，斜行纖維</td></tr><tr><td>下嚥縮肌環咽部</td><td>環狀軟骨區</td><td>較水平環繞，UES 框架的一部分</td></tr><tr><td>共同功能</td><td>縮小咽腔，協調推進食團</td><td>不是每一肌只在同一個瞬間全縮</td></tr></tbody></table></div>"
   },
   {
    "id": "pharynx-3",
    "title": "03｜翼下顎縫 vs 莖突舌骨韌帶",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">名稱</th><th scope=\"col\">主要連接</th><th scope=\"col\">配對</th></tr></thead><tbody><tr><td>翼下顎縫 pterygomandibular raphe</td><td>翼鉤區 → 下顎後方附著區</td><td>頰肌與上咽縮肌的連接框架</td></tr><tr><td>莖突舌骨韌帶</td><td>莖突 → 舌骨小角區</td><td>中咽縮肌附著框架相關</td></tr><tr><td>咽縫</td><td>咽後方中線</td><td>與翼下顎縫不是同一條</td></tr><tr><td>甲狀軟骨斜線</td><td>喉軟骨外側標記</td><td>下嚥縮肌甲咽部與其他肌附著相關</td></tr></tbody></table></div>"
   },
   {
    "id": "pharynx-4",
    "title": "04｜縱向抬咽的三肌",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">肌肉</th><th scope=\"col\">上方連接</th><th scope=\"col\">主要作用／神經</th></tr></thead><tbody><tr><td>莖突嚥肌 stylopharyngeus</td><td>莖突</td><td>抬咽與喉；IX</td></tr><tr><td>顎嚥肌 palatopharyngeus</td><td>軟顎／顎腱膜區</td><td>縮短、抬咽；X 咽叢</td></tr><tr><td>耳咽管嚥肌 salpingopharyngeus</td><td>耳咽管軟骨區</td><td>抬咽、吞嚥協同；X 咽叢</td></tr><tr><td>與環肌對照</td><td>縱肌沿管長度，縮肌沿管壁環繞</td><td>都是吞嚥協同，不是相互排斥</td></tr></tbody></table></div>"
   },
   {
    "id": "pharynx-5",
    "title": "05｜四個空隙：完整通過構造",
    "html": "<div class=\"enrichment-label\">教材核對 · 通路</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">層級</th><th scope=\"col\">主要通過結構</th><th scope=\"col\">片中重點</th></tr></thead><tbody><tr><td>上咽縮肌上方</td><td>耳咽管、顎帆提肌等；顎帆張肌鄰近通路另需依位置讀</td><td>軟顎肌與耳咽管上方框架</td></tr><tr><td>上、中心縮肌之間</td><td>莖突嚥肌、IX</td><td>片中強調莖突嚥肌穿入</td></tr><tr><td>中、下嚥縮肌之間</td><td>上喉神經內支及上喉血管，穿甲狀舌骨膜</td><td>上喉內支</td></tr><tr><td>下嚥縮肌下方／深面</td><td>喉返神經終段、相關下喉血管</td><td>下喉神經／喉返神經</td></tr></tbody></table></div><div class=\"study-note teal\">課堂「兩塊肌穿上方」是畫圖口訣。實際顎帆張肌與提肌、耳咽管的關係不能當同一條孔道逐肌穿越；完整位置需依教材。</div>"
   },
   {
    "id": "pharynx-6",
    "title": "06｜神經：基本口訣與細分",
    "html": "<div class=\"enrichment-label\">教材延伸 · 神經分層</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">群</th><th scope=\"col\">基本運動配對</th><th scope=\"col\">限制</th></tr></thead><tbody><tr><td>大多數嚥肌</td><td>X 經咽叢</td><td>下嚥縮肌還可受喉支貢獻</td></tr><tr><td>莖突嚥肌</td><td>IX</td><td>基本例外</td></tr><tr><td>感覺纖維</td><td>不同咽區涉及 V／IX／X 等</td><td>不能把運動與感覺清單直接合並</td></tr><tr><td>細部研究</td><td>存在分佈與変異</td><td>原始研究不完全等於考試基礎一肌一神經表</td></tr></tbody></table></div>"
   }
  ]
 },
 {
  "id": "palate",
  "title": "軟顎五肌、耳咽管與吞嚥",
  "english": "Soft palate · auditory tube · exceptions",
  "summary": "將片中三顎帆肌與顎舌、顎咽合併成完整軟顎整理。",
  "sources": [
   "S149",
   "S145",
   "S151",
   "S165",
   "S166"
  ],
  "sections": [
   {
    "id": "palate-1",
    "title": "01｜從嘴巴張開圖找懸壅垂",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">位置</th><th scope=\"col\">先分清</th></tr></thead><tbody><tr><td>硬顎</td><td>前方骨性天花板</td><td>不是顎帆肌主體</td></tr><tr><td>軟顎／顎帆</td><td>後方可活動蓋子</td><td>抬高參與封閉鼻咽</td></tr><tr><td>懸壅垂 uvula</td><td>軟顎中線下垂部</td><td>不是扁桃體</td></tr><tr><td>顎舌弓</td><td>前弓，顎舌肌相關</td><td>顎咽弓在後</td></tr><tr><td>顎扁桃體</td><td>前後弓之間的扁桃窩</td><td>靠近上咽縮肌的外側框架</td></tr></tbody></table></div>"
   },
   {
    "id": "palate-2",
    "title": "02｜三個課堂主角與五肌完整表",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">肌肉</th><th scope=\"col\">作用框架</th><th scope=\"col\">神經</th></tr></thead><tbody><tr><td>顎帆張肌 tensor veli palatini</td><td>張緊顎帆，耳咽管開放的重要參與者</td><td>V3，內翼肌神經相關</td></tr><tr><td>顎帆提肌 levator veli palatini</td><td>抬軟顎、幫助鼻咽封閉</td><td>X 咽叢</td></tr><tr><td>懸壅垂肌 musculus uvulae</td><td>縮短、抬高／增加中線體積</td><td>X 咽叢</td></tr><tr><td>顎舌肌</td><td>抬後舌／收窄咽峽</td><td>X 咽叢</td></tr><tr><td>顎嚥肌</td><td>咽、軟顎與喉協調</td><td>X 咽叢</td></tr></tbody></table></div><div class=\"study-note teal\">片中三個顎帆／懸壅垂肌是選取的分組。軟顎完整常用表是五肌，不能把「三個」當全體總數。</div>"
   },
   {
    "id": "palate-3",
    "title": "03｜吞嚥與耳咽管不是完全同一功能",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">動作</th><th scope=\"col\">主要結構關係</th><th scope=\"col\">避免簡化</th></tr></thead><tbody><tr><td>鼻咽封閉</td><td>軟顎抬高，咽壁共同作用</td><td>不是隻有懸壅垂單獨封住</td></tr><tr><td>耳咽管開放</td><td>顎帆張肌為重要主動肌，提肌協同關係較複雜</td><td>不說兩肌每次同等拉開一扇門</td></tr><tr><td>食團後推</td><td>舌、軟顎、咽、喉時序配合</td><td>不是隻張嘴即可完成</td></tr><tr><td>咽九肌分組</td><td>三縮＋三縱＋三片中軟顎肌</td><td>是本講義教學組合，不是一般所有嚥肌分類唯一方式</td></tr></tbody></table></div>"
   },
   {
    "id": "palate-4",
    "title": "04｜咽反射與懸壅垂：不要套舌偏斜口訣",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">檢查／情境</th><th scope=\"col\">基本配對</th><th scope=\"col\">條件</th></tr></thead><tbody><tr><td>Gag reflex 咽反射傳入</td><td>IX 感覺框架</td><td>神經、感覺區與刺激條件要分開</td></tr><tr><td>Gag reflex 傳出</td><td>X 運動，咽與軟顎肌反應</td><td>無反射不單由此確定病灶</td></tr><tr><td>單側周邊 X 弱，發啊音</td><td>弱側顎帆上提較少；懸壅垂可偏健側</td><td>與 XII 伸舌偏患側不同</td></tr><tr><td>正常反應與變異</td><td>雙側協調、個體檢查反應不同</td><td>不用一次反射當所有吞嚥安全的代表</td></tr></tbody></table></div>"
   }
  ]
 },
 {
  "id": "hyoid-neck",
  "title": "舌骨上、下肌與 C1 同行纖維",
  "english": "Suprahyoid · infrahyoid · ansa cervicalis",
  "summary": "用舌骨當分界，整理二腹肌兩腹、四上四下肌與神經例外。",
  "sources": [
   "S137",
   "S148",
   "S160",
   "S147"
  ],
  "sections": [
   {
    "id": "hyoid-neck-1",
    "title": "01｜舌骨像可移動的錨點",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><figure><a href=\"assets/muscles1-os-neck.webp\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：OpenStax 11.13 neck 解剖教材圖\"><img src=\"assets/muscles1-os-neck.webp\" alt=\"OpenStax 11.13 neck 解剖教材圖\" loading=\"lazy\" decoding=\"async\"></a><figcaption>OpenStax, Anatomy and Physiology 2e, Figure 11.13；CC BY-NC-SA 4.0。<a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/11-3-axial-muscles-of-the-head-neck-and-back\" target=\"_blank\" rel=\"noopener\">教材與授權來源</a>。 教材圖的肌肉有層次；不能把全部線條當同層。 點圖可放大。</figcaption></figure><figure><a href=\"assets/muscles1-hyoid.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：頸前層級：下顎—舌骨—甲狀軟骨—胸骨\"><img src=\"assets/muscles1-hyoid.svg\" alt=\"頸前層級：下顎—舌骨—甲狀軟骨—胸骨\" loading=\"lazy\" decoding=\"async\"></a><figcaption>依板書構想重繪並以教材核對，非逐筆摹寫／非等比例。回看 62:00–72:00、97:00–103:00。 縱向層級圖把甲狀軟骨與舌骨分開。 點圖可放大。</figcaption></figure><p>舌骨不靠一個正常骨性關節固定在另一塊骨上，周圍肌與韌帶使其成為舌、口底與喉的支撐。課堂用前後參照線串下顎、舌骨、甲狀軟骨、胸骨／肩胛骨。</p>"
   },
   {
    "id": "hyoid-neck-2",
    "title": "02｜舌骨上四肌：二腹兩腹不同神經",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">肌肉</th><th scope=\"col\">附著概要</th><th scope=\"col\">支配</th></tr></thead><tbody><tr><td>二腹肌前腹</td><td>下顎二腹肌窩 → 中間腱／舌骨纖維環</td><td>V3 的下顎舌骨神經</td></tr><tr><td>二腹肌後腹</td><td>顳骨乳突切跡 → 中間腱</td><td>VII</td></tr><tr><td>莖突舌骨肌</td><td>莖突 → 舌骨</td><td>VII，與二腹後腹關聯</td></tr><tr><td>下顎舌骨肌 mylohyoid</td><td>下顎舌骨線 → 中線縫與舌骨</td><td>V3，下顎舌骨神經</td></tr><tr><td>頦舌骨肌 geniohyoid</td><td>下頦棘 → 舌骨</td><td>C1 隨 XII</td></tr></tbody></table></div>"
   },
   {
    "id": "hyoid-neck-3",
    "title": "03｜舌骨下四肌：三個袢、一個 C1 分支",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">肌肉</th><th scope=\"col\">骨端</th><th scope=\"col\">神經／作用框架</th></tr></thead><tbody><tr><td>胸骨舌骨</td><td>胸骨區 → 舌骨</td><td>頸神經袢；降舌骨</td></tr><tr><td>肩胛舌骨</td><td>肩胛骨 → 中間腱 → 舌骨</td><td>頸神經袢；上下兩腹</td></tr><tr><td>胸骨甲狀</td><td>胸骨 → 甲狀軟骨斜線</td><td>頸神經袢；降喉</td></tr><tr><td>甲狀舌骨</td><td>甲狀軟骨 → 舌骨</td><td>C1 隨 XII，視固定點降舌骨或抬喉</td></tr></tbody></table></div>"
   },
   {
    "id": "hyoid-neck-4",
    "title": "04｜隨 XII 行走，不等於 XII 的本身纖維",
    "html": "<div class=\"enrichment-label\">教材核對 · 神經</div><figure><a href=\"assets/muscles1-nerve-map.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：頭頸肌神經：大分類與例外\"><img src=\"assets/muscles1-nerve-map.svg\" alt=\"頭頸肌神經：大分類與例外\" loading=\"lazy\" decoding=\"async\"></a><figcaption>依板書構想重繪並以教材核對，非逐筆摹寫／非等比例。回看 07:00–10:00、80:00–85:00、97:00–103:00。 先看纖維源頭，再看路上與哪條神經同走。 點圖可放大。</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">問題</th><th scope=\"col\">正確區分</th></tr></thead><tbody><tr><td>頦舌骨與甲狀舌骨肌</td><td>基本來源為 C1 頸神經纖維，借 XII 路線</td></tr><tr><td>頸神經袢</td><td>基本框架 C1–C3，纖維與分支有變異</td></tr><tr><td>二腹肌</td><td>前腹 V3、後腹 VII，不能因同名同腱就當同神經</td></tr><tr><td>頦舌肌 vs 頦舌骨肌</td><td>XII 舌肌 vs C1 隨行舌骨肌</td></tr></tbody></table></div>"
   }
  ]
 },
 {
  "id": "larynx-structure",
  "title": "喉軟骨、聲帶與神經入口",
  "english": "Laryngeal framework · folds · nerve entry",
  "summary": "為聲門上視板書建立前後、軟骨、突起與膜的位置。",
  "sources": [
   "S152",
   "S159",
   "S146"
  ],
  "sections": [
   {
    "id": "larynx-structure-1",
    "title": "01｜喉不是甲狀腺",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">外形／位置</th><th scope=\"col\">功能框架</th></tr></thead><tbody><tr><td>甲狀軟骨 thyroid cartilage</td><td>喉前外側較大的盾形結構</td><td>聲帶前方附著框架</td></tr><tr><td>環狀軟骨 cricoid</td><td>完整環，後方板較高</td><td>杓狀軟骨關節與肌肉起點</td></tr><tr><td>杓狀軟骨 arytenoid</td><td>成對，在環狀後板上方</td><td>聲帶後端定位、旋轉／滑動</td></tr><tr><td>會厭 epiglottis</td><td>入口前方彈性結構</td><td>吞嚥時協同保護</td></tr><tr><td>甲狀腺 thyroid gland</td><td>喉下方／氣管兩旁的內分泌腺</td><td>名字近但不是軟骨</td></tr></tbody></table></div>"
   },
   {
    "id": "larynx-structure-2",
    "title": "02｜杓狀兩突：聲帶前，肌肉外",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><figure><a href=\"assets/muscles1-glottis.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：聲門俯視：外展打開，內收靠攏\"><img src=\"assets/muscles1-glottis.svg\" alt=\"聲門俯視：外展打開，內收靠攏\" loading=\"lazy\" decoding=\"async\"></a><figcaption>依板書構想重繪並以教材核對，非逐筆摹寫／非等比例。回看 85:30–96:30。 先認前後方向；杓狀位在後方，兩聲帶前端會合。 點圖可放大。</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">關係</th><th scope=\"col\">考法</th></tr></thead><tbody><tr><td>聲帶突 vocal process</td><td>向前，接聲韌帶後端</td><td>聲帶附著</td></tr><tr><td>肌突 muscular process</td><td>向外側，喉肌附著</td><td>透過杓狀運動控制聲門</td></tr><tr><td>真聲帶／聲襞</td><td>聲韌帶、聲肌及黏膜框架</td><td>發聲與氣道功能</td></tr><tr><td>前庭襞／假聲帶</td><td>真聲帶上方</td><td>不能把它與真聲帶互換</td></tr><tr><td>聲門裂 rima glottidis</td><td>兩聲帶／杓區間隙</td><td>膜間與軟骨間部分可分開</td></tr></tbody></table></div>"
   },
   {
    "id": "larynx-structure-3",
    "title": "03｜膜、神經與感覺分區",
    "html": "<div class=\"enrichment-label\">教材延伸 · 通道定位</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">構造</th><th scope=\"col\">通過／供應</th><th scope=\"col\">區分</th></tr></thead><tbody><tr><td>甲狀舌骨膜</td><td>上喉神經內支＋上喉血管</td><td>不是環甲膜</td></tr><tr><td>上喉神經內支</td><td>主要聲門上區感覺</td><td>不是環甲肌主要運動支</td></tr><tr><td>上喉神經外支</td><td>環甲肌運動</td><td>與內支功能不同</td></tr><tr><td>喉返神經終段／下喉神經</td><td>其餘主要內在喉肌，聲門下感覺等</td><td>不是全喉只由一條不分支的 X</td></tr><tr><td>環甲膜</td><td>甲狀、環狀軟骨間</td><td>不在此頁提供操作指導</td></tr></tbody></table></div>"
   }
  ]
 },
 {
  "id": "larynx-muscles",
  "title": "內在喉肌：開、閉、張力",
  "english": "Intrinsic larynx · abduction · tension",
  "summary": "依片中一環甲、二環杓、甲杓等圖，拆成骨端與真正的動作。",
  "sources": [
   "S146",
   "S152",
   "S159"
  ],
  "sections": [
   {
    "id": "larynx-muscles-1",
    "title": "01｜唯一外展：後環杓肌",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><figure><a href=\"assets/muscles1-glottis.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：聲門俯視：外展打開，內收靠攏\"><img src=\"assets/muscles1-glottis.svg\" alt=\"聲門俯視：外展打開，內收靠攏\" loading=\"lazy\" decoding=\"async\"></a><figcaption>依板書構想重繪並以教材核對，非逐筆摹寫／非等比例。回看 85:30–96:30。 開閉是聲帶／杓狀的動作，不是隻看肌肉名字有「後」字。 點圖可放大。</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">肌肉</th><th scope=\"col\">骨端概要</th><th scope=\"col\">主要作用</th></tr></thead><tbody><tr><td>後環杓肌 posterior cricoarytenoid</td><td>環狀後板 → 杓狀肌突</td><td>聲帶外展、開聲門</td></tr><tr><td>側環杓肌 lateral cricoarytenoid</td><td>環狀側部 → 肌突</td><td>聲帶內收，膜間聲門閉合相關</td></tr><tr><td>橫杓肌 transverse arytenoid</td><td>兩杓狀間</td><td>使杓狀靠攏，後方軟骨間隙閉合相關</td></tr><tr><td>斜杓肌 oblique arytenoid</td><td>兩杓狀間斜行交叉</td><td>入口／後部閉合協同</td></tr></tbody></table></div>"
   },
   {
    "id": "larynx-muscles-2",
    "title": "02｜環甲與甲杓：不是隻有開、關兩種功能",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><figure><a href=\"assets/muscles1-larynx-tension.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：喉肌：聲帶長短與開閉分開讀\"><img src=\"assets/muscles1-larynx-tension.svg\" alt=\"喉肌：聲帶長短與開閉分開讀\" loading=\"lazy\" decoding=\"async\"></a><figcaption>依板書構想重繪並以教材核對，非逐筆摹寫／非等比例。回看 88:00–96:30。 這張整理張力；不與聲門開閉上視圖混用。 點圖可放大。</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">肌肉</th><th scope=\"col\">作用</th><th scope=\"col\">神經</th></tr></thead><tbody><tr><td>環甲肌 cricothyroid</td><td>相對傾動甲狀／環狀，使聲帶拉長張緊</td><td>上喉神經外支</td></tr><tr><td>甲杓肌 thyroarytenoid</td><td>可縮短聲帶，協助內收與張力調控</td><td>喉返神經</td></tr><tr><td>聲肌 vocalis</td><td>精細調整局部張力</td><td>喉返神經</td></tr><tr><td>分類</td><td>長短、張力、聲門寬度分開</td><td>不能只用「外展／內收」描述所有喉肌</td></tr></tbody></table></div>"
   },
   {
    "id": "larynx-muscles-3",
    "title": "03｜片中環杓前後側的口訣更正",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">影片簡記</th><th scope=\"col\">教材結構</th><th scope=\"col\">要保留的概念</th></tr></thead><tbody><tr><td>後／側環杓</td><td>標準主要是後環杓、側環杓兩肌</td><td>後者外展與側者內收要配動作</td></tr><tr><td>環甲向前拉緊</td><td>環甲使軟骨相對傾動</td><td>拉長張緊，音高調控相關</td></tr><tr><td>甲杓向後／鬆</td><td>縮短與精細調控，各束作用不同</td><td>不全部概括成只鬆弛</td></tr><tr><td>內在喉肌都 X</td><td>以分支再分：環甲 EBSLN，其餘 RLN</td><td>上喉內支主要感覺不是該運動例外</td></tr></tbody></table></div>"
   },
   {
    "id": "larynx-muscles-4",
    "title": "04｜發聲、吸氣與吞嚥的不同任務",
    "html": "<div class=\"enrichment-label\">教材延伸 · 功能比較</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">任務</th><th scope=\"col\">肌肉／構造框架</th><th scope=\"col\">限制</th></tr></thead><tbody><tr><td>吸氣開聲門</td><td>後環杓外展</td><td>單雙側神經病灶姿勢與程度不同</td></tr><tr><td>發聲</td><td>聲帶內收、張力與氣流協調</td><td>不只是閉越緊聲越大</td></tr><tr><td>音高控制</td><td>環甲、甲杓／聲肌與其他條件</td><td>不以一肌單獨決定全音色</td></tr><tr><td>吞嚥保護</td><td>真聲帶、前庭及入口協同閉合</td><td>會厭不是唯一保護蓋子</td></tr></tbody></table></div>"
   },
   {
    "id": "larynx-muscles-5",
    "title": "05｜本片七項與甲狀腺手術的神經連結",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">課堂項目／題幹</th><th scope=\"col\">配對</th><th scope=\"col\">核對</th></tr></thead><tbody><tr><td>環甲、環杓側、環杓後、甲杓</td><td>張緊、內收、外展、縮短等</td><td>片中口訣排序有口誤，以真正肌名動作核對</td></tr><tr><td>橫杓肌</td><td>基本為不成對，兩杓之間</td><td>其餘多為成對構造</td></tr><tr><td>斜杓肌</td><td>與杓會厭延續、入口閉合相關</td><td>不能說完全與聲門毫無協同關係</td></tr><tr><td>聲肌</td><td>精細張力調整</td><td>常視為甲杓的專化部分</td></tr><tr><td>上喉外支受損</td><td>環甲與高音控制可受影響</td><td>不是保證平常說話必完全正常</td></tr><tr><td>喉返神經受損</td><td>聲帶運動、嗓音與氣道可能受影響</td><td>單雙側及聲帶位置決定表現，非每次必然立即氣切</td></tr></tbody></table></div>"
   }
  ]
 },
 {
  "id": "swallowing",
  "title": "吞嚥、舌與咽喉協調",
  "english": "Swallowing · bolus · airway protection",
  "summary": "把本片所有肌肉表串成食團運動與氣道保護的流程。",
  "sources": [
   "S145",
   "S164",
   "S149",
   "S156"
  ],
  "sections": [
   {
    "id": "swallowing-1",
    "title": "01｜三期整合與回看主線",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><figure><a href=\"assets/muscles1-swallow.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：吞嚥：提喉、閉氣道與推送需協調\"><img src=\"assets/muscles1-swallow.svg\" alt=\"吞嚥：提喉、閉氣道與推送需協調\" loading=\"lazy\" decoding=\"async\"></a><figcaption>依板書構想重繪並以教材核對，非逐筆摹寫／非等比例。回看 58:00–72:00、80:00–85:00。 流程是本站整合補充；實際吞嚥各事件有重疊。 點圖可放大。</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">階段</th><th scope=\"col\">構造框架</th><th scope=\"col\">任務</th></tr></thead><tbody><tr><td>口腔準備／推進</td><td>唇、頰、咀嚼肌、舌</td><td>準備與推送食團</td></tr><tr><td>咽期</td><td>軟顎、咽縱肌／縮肌、舌骨上、喉</td><td>封鼻咽、氣道保護、推進</td></tr><tr><td>食道期</td><td>上食道括約肌與食道動力</td><td>食團進入食道再往下</td></tr></tbody></table></div>"
   },
   {
    "id": "swallowing-2",
    "title": "02｜喉上移不等於所有肌都向上拉",
    "html": "<div class=\"enrichment-label\">教材延伸 · 運動整合</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">結構</th><th scope=\"col\">協同角色</th><th scope=\"col\">讀題</th></tr></thead><tbody><tr><td>舌骨上肌</td><td>可使舌骨、口底、喉上移</td><td>看骨端是否固定</td></tr><tr><td>舌骨下肌</td><td>定位與穩定、回落等</td><td>甲狀舌骨在舌骨固定可提喉</td></tr><tr><td>咽縱肌</td><td>縮短抬咽、抬喉相關</td><td>與環狀縮肌分工</td></tr><tr><td>UES 開放</td><td>鬆弛＋前上牽引＋食團因素</td><td>不只有一圈肌肉主動撐開</td></tr></tbody></table></div>"
   },
   {
    "id": "swallowing-3",
    "title": "03｜神經辨認總流程",
    "html": "<div class=\"enrichment-label\">教材整合 · 神經</div><div class=\"flow\"><div class=\"flow-step\">先問：是舌、軟顎、咽、喉還是舌骨肌？</div><div class=\"flow-arrow\" aria-hidden=\"true\">↓</div><div class=\"flow-step\">舌多 XII；顎舌 X</div><div class=\"flow-arrow\" aria-hidden=\"true\">↓</div><div class=\"flow-step\">軟顎／咽多 X；顎帆張 V3、莖突咽 IX</div><div class=\"flow-arrow\" aria-hidden=\"true\">↓</div><div class=\"flow-step\">內在喉肌分 X 的上喉外支與喉返</div><div class=\"flow-arrow\" aria-hidden=\"true\">↓</div><div class=\"flow-step\">舌骨肌再分 V3、VII、C1 與頸神經袢</div></div><div class=\"study-note teal\">本流程是肌肉運動支配複習，不替代感覺與反射弧清單。片中概略分類若有口誤，採各頁更正表。</div>"
   }
  ]
 },
 {
  "id": "neck-triangles",
  "title": "頸前、後三角與胸鎖乳突肌",
  "english": "Neck triangles · SCM · boundaries",
  "summary": "重畫片尾頸前四區、頸後兩區，連到 SCM 單側轉頭方向。",
  "sources": [
   "S147",
   "S148",
   "S144"
  ],
  "sections": [
   {
    "id": "neck-triangles-1",
    "title": "01｜大三角先找 SCM 與中線",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><figure><a href=\"assets/muscles1-neck-triangles.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：頸前三角：用三條肌肉畫分區\"><img src=\"assets/muscles1-neck-triangles.svg\" alt=\"頸前三角：用三條肌肉畫分區\" loading=\"lazy\" decoding=\"async\"></a><figcaption>依板書構想重繪並以教材核對，非逐筆摹寫／非等比例。回看 103:00–113:42。 這是單側的邊界拓撲；頦下圖示只表示中線區的一半。 點圖可放大。</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">邊界</th><th scope=\"col\">結構</th><th scope=\"col\">先辨認</th></tr></thead><tbody><tr><td>上方</td><td>下顎骨下緣</td><td>不是鎖骨</td></tr><tr><td>外／後側</td><td>SCM 前緣</td><td>SCM 後緣是後三角框架的一部分</td></tr><tr><td>內側</td><td>頸前中線</td><td>左右的前三角在中線相鄰</td></tr><tr><td>分區肌</td><td>二腹肌、肩胛舌骨肌上腹</td><td>不是把肩胛舌骨肌下腹畫到前區</td></tr></tbody></table></div>"
   },
   {
    "id": "neck-triangles-2",
    "title": "02｜四小區的三條邊",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">區域</th><th scope=\"col\">邊界概要</th><th scope=\"col\">關鍵</th></tr></thead><tbody><tr><td>頦下三角</td><td>兩側二腹前腹＋舌骨體</td><td>整體不成對的中線區，底為下顎舌骨肌</td></tr><tr><td>下顎下三角</td><td>下顎下緣＋二腹前、後腹</td><td>另名二腹肌三角</td></tr><tr><td>頸動脈三角</td><td>二腹後腹＋肩胛舌骨上腹＋SCM 前緣</td><td>頸動脈相關結構在此區</td></tr><tr><td>肌三角</td><td>中線＋肩胛舌骨上腹＋SCM 前緣</td><td>舌骨下肌與深面臟器框架</td></tr></tbody></table></div>"
   },
   {
    "id": "neck-triangles-3",
    "title": "03｜主要內容物與層次",
    "html": "<div class=\"enrichment-label\">教材延伸 · 內容物</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">區</th><th scope=\"col\">主要內容／相關構造</th><th scope=\"col\">不要過度推論</th></tr></thead><tbody><tr><td>頦下</td><td>頦下淋巴結、小靜脈等</td><td>不是全頸淋巴都在此</td></tr><tr><td>下顎下</td><td>下顎下腺、顏面血管、淋巴等</td><td>舌神經、XII 等需看腺深部關係</td></tr><tr><td>頸動脈</td><td>頸動脈分叉、鞘內血管與 X、鄰近 XII／神經袢等</td><td>同區不代表全部在頸動脈鞘裡</td></tr><tr><td>肌區</td><td>舌骨下肌、甲狀腺、喉氣管相關深層結構</td><td>表面三角不是無筋膜的空洞</td></tr></tbody></table></div>"
   },
   {
    "id": "neck-triangles-4",
    "title": "04｜二腹肌與肩胛舌骨：同是兩腹，路線不同",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">比較</th><th scope=\"col\">二腹肌</th><th scope=\"col\">肩胛舌骨肌</th></tr></thead><tbody><tr><td>前後／上下</td><td>前腹＋後腹</td><td>上腹＋下腹</td></tr><tr><td>中間腱固定</td><td>舌骨附近纖維環</td><td>鎖骨附近筋膜吊帶</td></tr><tr><td>骨端</td><td>下顎＋乳突切跡</td><td>舌骨＋肩胛骨</td></tr><tr><td>神經</td><td>前 V3、後 VII</td><td>頸神經袢</td></tr><tr><td>分區</td><td>下顎下、頦下、頸動脈邊界</td><td>上腹前區，下腹分後三角</td></tr></tbody></table></div>"
   },
   {
    "id": "neck-triangles-5",
    "title": "05｜頸後三角與兩個小區",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><figure><a href=\"assets/muscles1-posterior-triangle.svg\" target=\"_blank\" rel=\"noopener\" aria-label=\"放大：頸後三角：枕區與鎖骨上區\"><img src=\"assets/muscles1-posterior-triangle.svg\" alt=\"頸後三角：枕區與鎖骨上區\" loading=\"lazy\" decoding=\"async\"></a><figcaption>依板書構想重繪並以教材核對，非逐筆摹寫／非等比例。回看 107:30–112:30。 先畫 SCM 後緣、斜方前緣、鎖骨，再加肩胛舌骨下腹。 點圖可放大。</figcaption></figure><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">區域</th><th scope=\"col\">邊界</th><th scope=\"col\">內容框架</th></tr></thead><tbody><tr><td>頸後大三角</td><td>SCM 後緣、斜方前緣、鎖骨中段</td><td>不是 SCM 前緣</td></tr><tr><td>枕三角</td><td>SCM、斜方、肩胛舌骨下腹</td><td>XI、頸叢／臂叢部分及橫頸血管等，依層次</td></tr><tr><td>鎖骨上／肩胛鎖骨三角</td><td>SCM 下部、鎖骨、肩胛舌骨下腹</td><td>鎖骨下動脈第三段、臂叢等相關</td></tr><tr><td>顏色與虛線</td><td>本站分區示意</td><td>不代表所有內容物同深度</td></tr></tbody></table></div><div class=\"study-note teal\">片中只選部分內容物作考試口訣；「不考」未經本站歷屆統計驗證，故仍保留必要構造。</div>"
   },
   {
    "id": "neck-triangles-6",
    "title": "06｜頸動脈鞘：同區與鞘內分開",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">項目</th><th scope=\"col\">關係</th><th scope=\"col\">常見混淆</th></tr></thead><tbody><tr><td>總／內頸動脈</td><td>鞘內動脈部分，隨高度改變</td><td>外頸動脈主要不在鞘內</td></tr><tr><td>內頸靜脈</td><td>鞘內靜脈部分</td><td>不是外頸靜脈</td></tr><tr><td>迷走神經 X</td><td>鞘內，血管之間偏後</td><td>XII 經過相關區，不因此等於鞘內核心</td></tr><tr><td>深頸淋巴組織</td><td>沿鞘相關結構</td><td>不是與三個核心構造一樣單一管道</td></tr><tr><td>交感幹</td><td>鞘後方，與鞘有筋膜層次差別</td><td>不直接當鞘內第四條神經</td></tr><tr><td>頸神經袢</td><td>與鞘前壁關係</td><td>不等於 X 的分支</td></tr></tbody></table></div>"
   },
   {
    "id": "neck-triangles-7",
    "title": "07｜片尾 SCM 單側轉頭",
    "html": "<div class=\"enrichment-label\">影片重述＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">構造／條件</th><th scope=\"col\">基本作用</th><th scope=\"col\">限制</th></tr></thead><tbody><tr><td>SCM 起點</td><td>胸骨柄與鎖骨內側</td><td>兩頭不能畫成肩胛骨起</td></tr><tr><td>SCM 止點</td><td>乳突與上項線區</td><td>不是莖突</td></tr><tr><td>右側收縮</td><td>同側側屈、臉向左轉；片中示意左上</td><td>相對頭與下頸位置影響屈伸分量</td></tr><tr><td>神經</td><td>XI 運動，C2／C3 感覺本體相關</td><td>不與 X 喉肌混用</td></tr><tr><td>雙側／姿勢</td><td>完整頸屈伸作用依姿勢與固定條件</td><td>本片在單側說明中結束，雙側細節屬補充</td></tr></tbody></table></div>"
   }
  ]
 },
 {
  "id": "rapid-review",
  "title": "肌肉（1）跨區比較與易錯表",
  "english": "Cross-region review · corrections",
  "summary": "用目標結構、受力方向和神經來源比較眼、下顎、舌、咽與喉。",
  "sources": [
   "S137",
   "S138",
   "S139",
   "S140",
   "S141",
   "S142",
   "S143",
   "S144",
   "S145",
   "S146",
   "S147",
   "S148",
   "S149",
   "S150",
   "S151",
   "S152",
   "S153",
   "S154",
   "S155",
   "S156",
   "S157",
   "S158",
   "S159",
   "S160",
   "S161",
   "S162",
   "S163",
   "S164",
   "S165",
   "S166"
  ],
  "sections": [
   {
    "id": "rapid-review-1",
    "title": "01｜正常單側作用與患側偏斜",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">結構</th><th scope=\"col\">正常單側作用</th><th scope=\"col\">相應周邊神經受損</th></tr></thead><tbody><tr><td>外翼肌／V3</td><td>推下顎往對側</td><td>張口可偏患側</td></tr><tr><td>頦舌肌／XII</td><td>舌趨向對側</td><td>伸舌偏患側</td></tr><tr><td>眼外肌</td><td>受各眼位與各肌分量影響</td><td>要分核內／周邊、瞳孔與提瞼</td></tr><tr><td>軟顎／X</td><td>雙側協調抬高</td><td>病灶與結構檢查結合，不能借舌偏斜口訣套用</td></tr></tbody></table></div>"
   },
   {
    "id": "rapid-review-2",
    "title": "02｜最值得分開的八組",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">A</th><th scope=\"col\">B</th><th scope=\"col\">區別</th></tr></thead><tbody><tr><td>VII 頰支</td><td>V3 頰神經</td><td>頰肌運動 vs 感覺</td></tr><tr><td>額肌</td><td>提上眼瞼肌</td><td>抬眉 vs 睜眼</td></tr><tr><td>上瞼板肌</td><td>提上眼瞼肌</td><td>交感平滑肌 vs III 骨骼肌</td></tr><tr><td>眼肌作用圖</td><td>H 型測試圖</td><td>正視位分量 vs 不同眼位測法</td></tr><tr><td>眶上裂</td><td>共同腱環</td><td>骨裂 vs 軟組織框架</td></tr><tr><td>顎舌肌</td><td>顎嚥肌</td><td>連舌 vs 連咽</td></tr><tr><td>頦舌肌</td><td>頦舌骨肌</td><td>XII vs C1 隨行</td></tr><tr><td>上喉內支</td><td>上喉外支</td><td>主要感覺 vs 環甲運動</td></tr></tbody></table></div>"
   },
   {
    "id": "rapid-review-3",
    "title": "03｜從目標動作反找肌肉",
    "html": "<div class=\"enrichment-label\">影片重點＋教材核對</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">目標</th><th scope=\"col\">先想到</th><th scope=\"col\">再補完整條件</th></tr></thead><tbody><tr><td>閉眼</td><td>眼輪匝 VII</td><td>不等於睜眼肌</td></tr><tr><td>嘴角外上</td><td>顴大肌等</td><td>與整個下顎上提不同</td></tr><tr><td>眼外展</td><td>LR／VI</td><td>核內凝視途徑另分</td></tr><tr><td>外展位上看</td><td>SR／III</td><td>不是 IO 測試位</td></tr><tr><td>內收位下看</td><td>SO／IV</td><td>不要只看名字有「上」</td></tr><tr><td>下顎閉口</td><td>咬、顳、內翼</td><td>表情肌頰肌不列四大</td></tr><tr><td>伸舌</td><td>頦舌肌 XII</td><td>周邊病灶偏患側</td></tr><tr><td>抬咽</td><td>縱向三肌</td><td>莖突咽 IX 例外</td></tr><tr><td>開聲門</td><td>後環杓</td><td>唯一主要外展肌</td></tr><tr><td>張緊聲帶</td><td>環甲，上喉外支</td><td>與關閉不同</td></tr></tbody></table></div>"
   },
   {
    "id": "rapid-review-4",
    "title": "04｜影片口訣的精確化",
    "html": "<div class=\"enrichment-label\">教材核對 · 易錯</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">課堂簡化</th><th scope=\"col\">本章採用</th><th scope=\"col\">核對</th></tr></thead><tbody><tr><td>提瞼肌是表情肌例外</td><td>六眼肌與提瞼肌不屬典型第二弓表情肌組</td><td>S138、S153</td></tr><tr><td>上直肌左右動眼神經都管</td><td>區分交叉亞核與同側周邊 III</td><td>S154、S162</td></tr><tr><td>內翼肌起蝶骨大翼</td><td>主要深頭外翼板內面，淺頭另列</td><td>S158</td></tr><tr><td>外翼肌只有盤止點</td><td>盤／囊與髁頸附著不同頭且有變異</td><td>S143</td></tr><tr><td>咽縫終點C6椎體</td><td>C6是咽食道交界近似層級，不當直接骨附著</td><td>S151</td></tr><tr><td>上腔前後、下腔張口</td><td>上腔滑移下腔旋轉，完整張口整合</td><td>S142、S161</td></tr><tr><td>C1 隨 XII 就是 XII 神經支配</td><td>纖維來源與同行神經分開</td><td>S148、S160</td></tr><tr><td>教材圖箭頭就是實際位置</td><td>動作、視角、層次分開並用附著表核對</td><td>各頁圖說</td></tr></tbody></table></div>"
   }
  ]
 },
 {
  "id": "exam-sources",
  "title": "本章來源、重繪方法與授權",
  "english": "Sources · methodology · image credits",
  "summary": "說明音訊／板書處理、教材更正、圖像授權與國考使用範圍。",
  "sources": [
   "S137",
   "S138",
   "S139",
   "S140",
   "S141",
   "S142",
   "S143",
   "S144",
   "S145",
   "S146",
   "S147",
   "S148",
   "S149",
   "S150",
   "S151",
   "S152",
   "S153",
   "S154",
   "S155",
   "S156",
   "S157",
   "S158",
   "S159",
   "S160",
   "S161",
   "S162",
   "S163",
   "S164",
   "S165",
   "S166",
   "S17",
   "S89"
  ],
  "sections": [
   {
    "id": "exam-sources-1",
    "title": "01｜影片與整理範圍",
    "html": "<div class=\"enrichment-label\">整理方法</div><p>使用者上傳〈2016DF03 01_肌肉(1)〉，檔案長 1:53:41.9，頁面四捨五入標 1:53:42。全長音訊自動轉錄，另逐張檢視每 30 秒抽樣的 227 張板書。時間索引依此本地上傳檔，未取得可驗證的單支 YouTube ID，因此不製作假的秒數跳轉。</p><p>課堂筆記是重述，不是逐字稿，也不是逐秒人工觀看的聲稱。自動辨識有口音、名詞與重複錯誤，用板書、上下文及教材校正。無法可靠辨認的個別原句不補造成講者原話。</p><div class=\"study-note teal\">影片編號與講義頁碼是這堂課的指引；「沒有寫左右就是右」是本片作圖約定，不是解剖學的普遍規定。</div>"
   },
   {
    "id": "exam-sources-2",
    "title": "02｜如何重畫黑板圖",
    "html": "<div class=\"enrichment-label\">圖像方法</div><p>本站重繪 16 張中文圖，保留板書的空間／方向學習構想，再補視角、骨端、神經與教材更正。吞嚥流程、神經圖及 H 型整理是本站重組補充，並非全部黑板逐筆相同。</p><p>所有示意圖均非等比例，不代替實際手術解剖或影像定位。每張附約略回看片段；教材補充與課堂重述以標籤區分。</p><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">影像類型</th><th scope=\"col\">本章資產</th><th scope=\"col\">授權／說明</th></tr></thead><tbody><tr><td>原創重繪與整合</td><td>16 張 SVG</td><td>本站原創概念圖，保留來源與重繪說明</td></tr><tr><td>OpenStax教材</td><td>3 張原圖</td><td>CC BY-NC-SA 4.0；保留英文原標籤</td></tr><tr><td>影片抽樣畫面</td><td>僅作核對</td><td>未把講師畫面或原片重新公開上傳</td></tr></tbody></table></div>"
   },
   {
    "id": "exam-sources-3",
    "title": "03｜教材圖號與來源",
    "html": "<div class=\"enrichment-label\">圖片授權</div><div class=\"table-scroll\" role=\"region\" aria-label=\"比較表，可左右捲動\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">圖號</th><th scope=\"col\">內容</th><th scope=\"col\">檔案</th></tr></thead><tbody><tr><td>11.7</td><td>face</td><td><a href=\"assets/muscles1-os-face.webp\" target=\"_blank\" rel=\"noopener\">放大原圖</a></td></tr><tr><td>11.9</td><td>eye</td><td><a href=\"assets/muscles1-os-eye.webp\" target=\"_blank\" rel=\"noopener\">放大原圖</a></td></tr><tr><td>11.13</td><td>neck</td><td><a href=\"assets/muscles1-os-neck.webp\" target=\"_blank\" rel=\"noopener\">放大原圖</a></td></tr></tbody></table></div><p><a href=\"assets/muscles1-image-sources.json\" target=\"_blank\" rel=\"noopener\">本章圖片來源與授權清單</a>。OpenStax 圖與相關改編內容依 CC BY-NC-SA 4.0；Access for free at <a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/11-3-axial-muscles-of-the-head-neck-and-back\" target=\"_blank\" rel=\"noopener\">OpenStax</a>。</p>"
   },
   {
    "id": "exam-sources-4",
    "title": "04｜國考使用範圍",
    "html": "<div class=\"enrichment-label\">考題使用</div><p><a href=\"https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=115090&amp;y=2026\" target=\"_blank\" rel=\"noopener\">考選部：115 年第二次醫師第一階段考畢試題與答案入口</a>。先用骨端／孔道定位，再讀神經與運動。</p><div class=\"study-note teal\">講者「考過很多次／沒考過」只列為課堂提醒，不當已驗證的歷屆頻率。此章沒有新增宣稱已逐題核對的官方題號；比較表是學習整理，不冒充官方原題。</div>"
   },
   {
    "id": "exam-sources-5",
    "title": "05｜新增教材與研究",
    "html": "<div class=\"enrichment-label\">延伸閱讀</div><ul class=\"source-list\"><li><a href=\"https://openstax.org/books/anatomy-and-physiology-2e/pages/11-3-axial-muscles-of-the-head-neck-and-back\" target=\"_blank\" rel=\"noopener\">S137 · OpenStax：11.3 Axial Muscles of the Head, Neck, and Back</a><small>開放教材｜顏面、眼外肌、舌骨肌群教材圖；文字口訣另與專門教材核對。</small></li><li><a href=\"https://anatomy.ttuhscep.edu/nervous_system/face_tables.html\" target=\"_blank\" rel=\"noopener\">S138 · Texas Tech：Parotid Gland & Face anatomy tables</a><small>大學教材｜表情肌、頰肌及 VII／V3 的區別。</small></li><li><a href=\"https://www.ncbi.nlm.nih.gov/books/NBK10793/\" target=\"_blank\" rel=\"noopener\">S139 · NCBI Neuroscience：The Actions and Innervation of Extraocular Muscles</a><small>解剖教材｜正視位作用及不同眼位的測試方向。</small></li><li><a href=\"https://www.ncbi.nlm.nih.gov/books/NBK573075/table/article-133080.table1/\" target=\"_blank\" rel=\"noopener\">S140 · NCBI：The anatomy, actions, and innervation of EOMs</a><small>解剖教材｜六眼外肌的一、二、三級作用與腦神經。</small></li><li><a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC12068757/\" target=\"_blank\" rel=\"noopener\">S141 · Microsurgical Anatomy of the Common Tendinous Ring and Related Structures</a><small>解剖研究｜共同腱環、視神經管與眶上裂的空間框架。</small></li><li><a href=\"https://www.ncbi.nlm.nih.gov/books/NBK538486/\" target=\"_blank\" rel=\"noopener\">S142 · NCBI：Anatomy, Head and Neck, Temporomandibular Joint</a><small>解剖教材｜關節盤分腔、旋轉與滑移及韌帶。</small></li><li><a href=\"https://www.ncbi.nlm.nih.gov/books/NBK541027/\" target=\"_blank\" rel=\"noopener\">S143 · NCBI：Anatomy, Head and Neck, Mastication Muscles</a><small>解剖教材｜四大咀嚼肌的骨端、動作及 V3 運動支。</small></li><li><a href=\"https://anatomy.ttuhscep.edu/anatomytables/muscles_head_neck.html\" target=\"_blank\" rel=\"noopener\">S144 · Texas Tech：Muscles of the Head and Neck</a><small>大學教材｜頭頸肌的附著、作用、神經對照。</small></li><li><a href=\"https://www.ncbi.nlm.nih.gov/books/NBK554405/\" target=\"_blank\" rel=\"noopener\">S145 · NCBI：Anatomy, Head and Neck, Swallowing</a><small>解剖教材｜吞嚥各期、軟顎、咽與喉的協調。</small></li><li><a href=\"https://www.ncbi.nlm.nih.gov/books/NBK545265/\" target=\"_blank\" rel=\"noopener\">S146 · NCBI：Anatomy, Head and Neck: Laryngeal Muscles</a><small>解剖教材｜內在喉肌、聲帶外展內收與神經例外。</small></li><li><a href=\"https://www.ncbi.nlm.nih.gov/books/NBK554398/\" target=\"_blank\" rel=\"noopener\">S147 · NCBI：Anatomy, Head and Neck, Neck Triangle</a><small>解剖教材｜頸前三角分區、邊界與內容物。</small></li><li><a href=\"https://anatomy.ttuhscep.edu/nervous_system/antneck_tables.html\" target=\"_blank\" rel=\"noopener\">S148 · Texas Tech：Anterior Triangle of the Neck</a><small>大學教材｜舌骨上、下肌，二腹肌、肩胛舌骨肌及神經。</small></li><li><a href=\"https://www.ncbi.nlm.nih.gov/books/NBK557817/\" target=\"_blank\" rel=\"noopener\">S149 · NCBI：Anatomy, Head and Neck, Palate</a><small>解剖教材｜軟顎五肌及顎帆張肌 V3 例外。</small></li><li><a href=\"https://eyewiki.aao.org/Extraocular_Muscles\" target=\"_blank\" rel=\"noopener\">S150 · American Academy of Ophthalmology EyeWiki：Extraocular Muscles</a><small>眼科專業教材｜眼外肌解剖、眼位依賴與臨床導讀。</small></li><li><a href=\"https://www.ncbi.nlm.nih.gov/books/NBK544271/\" target=\"_blank\" rel=\"noopener\">S151 · NCBI：Anatomy, Head and Neck, Pharynx</a><small>解剖教材｜咽縮肌、咽縫、咽部層級與相鄰構造。</small></li><li><a href=\"https://www.ncbi.nlm.nih.gov/books/NBK538202/\" target=\"_blank\" rel=\"noopener\">S152 · NCBI：Anatomy, Head and Neck: Larynx</a><small>解剖教材｜喉軟骨、膜、聲帶與喉神經。</small></li><li><a href=\"https://www.ncbi.nlm.nih.gov/books/NBK536921/\" target=\"_blank\" rel=\"noopener\">S153 · NCBI：Levator Palpebrae Superioris Muscle</a><small>解剖教材｜提上眼瞼肌與上瞼板肌的構造差別。</small></li><li><a href=\"https://www.ncbi.nlm.nih.gov/books/NBK406/\" target=\"_blank\" rel=\"noopener\">S154 · NCBI Clinical Methods：Cranial Nerves III, IV, and VI</a><small>解剖教材｜周邊神經、核內上直肌交叉及提瞼雙側核支配。</small></li><li><a href=\"https://www.ncbi.nlm.nih.gov/books/NBK500000/\" target=\"_blank\" rel=\"noopener\">S155 · NCBI：Horner Syndrome</a><small>解剖教材｜交感途徑受損、輕度眼瞼下垂及縮瞳。</small></li><li><a href=\"https://www.ncbi.nlm.nih.gov/books/NBK507782/\" target=\"_blank\" rel=\"noopener\">S156 · NCBI：Anatomy, Head and Neck, Tongue</a><small>解剖教材｜舌內外肌、頦舌肌及 XII／顎舌肌 X。</small></li><li><a href=\"https://pubmed.ncbi.nlm.nih.gov/15782016/\" target=\"_blank\" rel=\"noopener\">S157 · CT and MR Imaging of the Buccal Space: Normal Anatomy and Abnormalities</a><small>影像解剖研究｜頰間隙在頰肌外側、咀嚼間隙前方；不是單純兩肌平行夾層。</small></li><li><a href=\"https://www.ncbi.nlm.nih.gov/books/NBK546588/\" target=\"_blank\" rel=\"noopener\">S158 · NCBI：Medial Pterygoid Muscle</a><small>解剖教材｜深頭來自外翼板內面，淺頭涉及上顎結節等；校正大翼口訣。</small></li><li><a href=\"https://www.ncbi.nlm.nih.gov/books/NBK532995/\" target=\"_blank\" rel=\"noopener\">S159 · NCBI：Thyrohyoid Membrane</a><small>解剖教材｜上喉神經內支與上喉血管穿甲狀舌骨膜。</small></li><li><a href=\"https://pubmed.ncbi.nlm.nih.gov/18507614/\" target=\"_blank\" rel=\"noopener\">S160 · Anatomy of the ansa cervicalis: nerve fiber analysis</a><small>解剖研究｜頸神經纖維與 XII 同行，不把同行當纖維來源。</small></li><li><a href=\"https://pubmed.ncbi.nlm.nih.gov/15777532/\" target=\"_blank\" rel=\"noopener\">S161 · Quantification of translational and gliding components in human TMJ during mouth opening</a><small>運動學研究｜張口包含下腔旋轉與上腔平移的整合。</small></li><li><a href=\"https://pubmed.ncbi.nlm.nih.gov/14623739/\" target=\"_blank\" rel=\"noopener\">S162 · Isolated superior rectus palsy due to contralateral midbrain infarction</a><small>臨床解剖研究｜上直肌核內交叉與周邊同側支配的差別。</small></li><li><a href=\"https://pubmed.ncbi.nlm.nih.gov/19479181/\" target=\"_blank\" rel=\"noopener\">S163 · Classification of pharyngeal muscles based on innervations from glossopharyngeal and vagus nerves in human</a><small>解剖研究｜基本 X／IX 口訣之外，嚥肌支配仍有更細的分佈。</small></li><li><a href=\"https://www.ncbi.nlm.nih.gov/books/NBK54279/\" target=\"_blank\" rel=\"noopener\">S164 · NCBI：Pharynx—Anatomy, Neural Innervation, and Motor Pattern</a><small>解剖教材｜吞嚥時嚥肌、舌骨與喉閉合的整體運動模式。</small></li><li><a href=\"https://www.ncbi.nlm.nih.gov/books/NBK554502/\" target=\"_blank\" rel=\"noopener\">S165 · NCBI：Physiology, Gag Reflex</a><small>解剖教材｜咽反射的基本 IX 感覺、X 運動框架。</small></li><li><a href=\"https://www.ncbi.nlm.nih.gov/books/NBK386/\" target=\"_blank\" rel=\"noopener\">S166 · NCBI Clinical Methods：Cranial Nerves IX and X</a><small>解剖教材｜軟顎抬高、懸壅垂偏向與 IX／X 檢查。</small></li></ul>"
   }
  ]
 }
];
