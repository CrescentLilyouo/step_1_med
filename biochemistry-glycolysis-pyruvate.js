biochemistryChapters.push({
  "id": "glycolysis-pyruvate",
  "number": "08",
  "title": "糖解作用與丙酮酸代謝",
  "summary": "從機制與能量收支重新建立理解，配合算例、比較表與可追溯歷屆原題。",
  "sources": "Harper’s Illustrated Biochemistry, 31st ed. 生物能量學、生物氧化、呼吸鏈與糖解相關主題；補充來源見章末。",
  "references": "<p>本章為原創教學整理；歷屆題取自既有題庫，答案欄位保留原版本，解析另行撰寫。ATP產率等使用明示的教學近似，作題依題幹條件。</p><p>補充閱讀：<a href=\"https://www.ncbi.nlm.nih.gov/books/NBK9885/\">The Mechanism of Oxidative Phosphorylation</a>；<a href=\"https://www.ncbi.nlm.nih.gov/books/NBK482303/\">Biochemistry, Glycolysis</a>。正文以教學重組為主，非逐段譯文。</p>",
  "sections": [
    {
      "id": "topic-1",
      "title": "路徑目的與器官差異",
      "html": "<p>糖解作用位於細胞質，將一個六碳葡萄糖轉成兩個三碳pyruvate，淨得2\nATP及2\nNADH。路徑本身沒有直接消耗O₂的一步，但能否持續仍需再生NAD⁺。成熟紅血球沒有粒線體，只能把pyruvate主要轉為lactate再生NAD⁺；有粒線體的細胞可利用穿梭與呼吸鏈回收還原當量。</p>\n<p>不要把糖解與葡萄糖完全氧化混稱。糖解淨2\nATP是直接收支，完整氧化還包括PDH、TCA及氧化磷酸化。氧供足夠也不代表所有細胞不產乳酸；乳酸生成受通量、氧化能力與氧化還原狀態共同影響。</p>\n<p>讀每一步先看碳數、磷酸來源與去向、是否有電子轉移，再看ATP。這樣遇到抑制某酵素，能推上游累積、下游不足及能量損失，而不只是背順序。</p>\n"
    },
    {
      "id": "topic-2",
      "title": "投資階段：先花兩個ATP",
      "html": "<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>步驟</th>\n<th>反應／酵素</th>\n<th>目的與能量</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>1</td>\n<td>Glucose→G6P；hexokinase/glucokinase</td>\n<td>用1 ATP將糖磷酸化</td>\n</tr>\n<tr class=\"even\">\n<td>2</td>\n<td>G6P⇌F6P；phosphoglucose isomerase</td>\n<td>醛糖轉酮糖，準備後續切割</td>\n</tr>\n<tr class=\"odd\">\n<td>3</td>\n<td>F6P→F1,6BP；PFK-1</td>\n<td>再用1 ATP，重要承諾步驟</td>\n</tr>\n<tr class=\"even\">\n<td>4</td>\n<td>F1,6BP⇌GAP+DHAP；aldolase</td>\n<td>六碳分成兩個三碳</td>\n</tr>\n<tr class=\"odd\">\n<td>5</td>\n<td>DHAP⇌GAP；triose phosphate isomerase</td>\n<td>兩份碳流皆進入GAP後半段</td>\n</tr>\n</tbody>\n</table></div>\n<p>第一步將葡萄糖留在細胞代謝池，但G6P也能走肝醣或磷酸戊糖途徑，故不是糖解的第一個專一承諾步驟。PFK-1使碳流更明確進入糖解；PFK-2則主要製造調節物F2,6BP，不能把兩個酵素當成連續的同名版本。</p>\n<p>Aldolase產物是GAP與DHAP各一，並非直接兩個GAP；經異構化後才讓一個葡萄糖的兩個三碳單位都走相同後半段。從第6步開始，每個葡萄糖的反應次數都要乘二。</p>\n"
    },
    {
      "id": "topic-3",
      "title": "回收階段：唯一氧化還原與兩次直接產ATP",
      "html": "<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>步驟</th>\n<th>反應／酵素</th>\n<th>每葡萄糖收支</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>6</td>\n<td>GAP→1,3-BPG；GAP dehydrogenase</td>\n<td>生成2 NADH，使用無機Pi</td>\n</tr>\n<tr class=\"even\">\n<td>7</td>\n<td>1,3-BPG→3PG；phosphoglycerate kinase</td>\n<td>生成2 ATP</td>\n</tr>\n<tr class=\"odd\">\n<td>8</td>\n<td>3PG⇌2PG；phosphoglycerate mutase</td>\n<td>調整磷酸位置</td>\n</tr>\n<tr class=\"even\">\n<td>9</td>\n<td>2PG⇌PEP；enolase</td>\n<td>脫水形成高轉移勢PEP</td>\n</tr>\n<tr class=\"odd\">\n<td>10</td>\n<td>PEP→pyruvate；pyruvate kinase</td>\n<td>生成2 ATP</td>\n</tr>\n</tbody>\n</table></div>\n<p>GAPDH將醛基氧化與Pi加入耦合，形成高轉移勢的1,3-BPG，不是消耗ATP來加這個磷酸。NAD⁺在此被還原成NADH；若NAD⁺耗盡，即使其他酵素都存在，後半段也無法持續。</p>\n<p>第7、10步皆是受質階層磷酸化。總生成4 ATP，扣除前段2 ATP，淨2\nATP。Pyruvate\nkinase雖名為kinase，此處磷酸從PEP交給ADP而形成ATP，不能看到kinase就一律判斷耗ATP。</p>\n"
    },
    {
      "id": "topic-4",
      "title": "Hexokinase與glucokinase的分工",
      "html": "<p>多數組織hexokinase對葡萄糖親和力較高，在低葡萄糖時仍能進行磷酸化，且常受G6P產物抑制。肝臟與胰島β細胞的glucokinase在較高葡萄糖濃度時更活躍，參與餐後處理及葡萄糖感測；不應把較高半飽和濃度解讀成沒有功能。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>特性</th>\n<th>一般hexokinase</th>\n<th>Glucokinase</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>常見組織定位</td>\n<td>多種組織</td>\n<td>肝、胰島β細胞等</td>\n</tr>\n<tr class=\"even\">\n<td>葡萄糖反應範圍</td>\n<td>較低濃度即可作用</td>\n<td>較高濃度時通量增加明顯</td>\n</tr>\n<tr class=\"odd\">\n<td>G6P產物抑制</td>\n<td>常見</td>\n<td>不受同樣直接抑制</td>\n</tr>\n<tr class=\"even\">\n<td>生理角色</td>\n<td>基本葡萄糖利用</td>\n<td>餐後處理、感測</td>\n</tr>\n</tbody>\n</table></div>\n<p>Glucokinase具有特別的動力學與調節，不宜無條件套用最簡Michaelis–Menten模型；教材常以較高Km概括，嚴格可用S₀.₅描述。肝的glucokinase也受GKRP及區室分布調控，β細胞的功能不能照搬所有肝調控細節。</p>\n"
    },
    {
      "id": "topic-5",
      "title": "PFK-1：能量狀態與F2,6BP",
      "html": "<p>ATP是PFK-1反應的受質，但高ATP也可在調節位點抑制，反映能量充足；AMP等低能量訊號常促進糖解。Citrate可支持高能量／充足碳源訊號；低pH在肌肉中可抑制PFK-1，避免糖解與酸負荷持續增加。</p>\n<p>F2,6BP是強力調節分子，活化PFK-1並抑制FBPase-1，讓糖解與糖新生朝相反方向調節。它不是PFK-1生成的F1,6BP，也不是必須依序流向pyruvate的普通糖解中間物。</p>\n<p>在典型肝臟模型，glucagon→cAMP/PKA→磷酸化肝型PFK-2/FBPase-2，偏向降低F2,6BP，使糖解減少、糖新生增加；insulin相反。心臟等不同isoform可能對磷酸化有不同反應，所以不能說所有器官的PFK-2一磷酸化都受抑制。</p>\n"
    },
    {
      "id": "topic-6",
      "title": "Pyruvate kinase與不可逆關卡",
      "html": "<p>糖解在一般細胞條件下的重要不可逆步驟為hexokinase/glucokinase、PFK-1與pyruvate\nkinase。這些反應不能在糖新生中簡單把箭頭反過來，需另有繞道。其他接近平衡步驟可依濃度改變方向。</p>\n<p>F1,6BP可feed-forward活化pyruvate\nkinase，表示上游碳流已進來，應支持後半段排出。ATP與alanine等則可在適當組織情境下抑制。肝型pyruvate\nkinase受glucagon/PKA磷酸化抑制，避免飢餓時把準備用於糖新生的碳又拉回糖解。</p>\n<p>不可逆不表示宇宙中任何條件都不可能反向，而是正常生理條件下淨ΔG很負、反向通量不具實際路徑作用。這個詞必須和細胞濃度及旁路酵素一起理解。</p>\n"
    },
    {
      "id": "topic-7",
      "title": "乳酸：再生NAD⁺而非額外生成ATP",
      "html": "<p>LDH催化pyruvate+NADH+H⁺⇌lactate+NAD⁺。這一步本身不再產ATP，卻回收GAPDH所需NAD⁺，讓糖解持續。氧化磷酸化能力不足或糖解通量很高時，乳酸路徑可支援胞質氧化還原平衡。</p>\n<p>將糖解與LDH加總，NADH/NAD⁺被循環再生，淨產物為兩個lactate與2\nATP等，而非同時留下2\nNADH作額外能量收益。不要把已被LDH消耗的NADH又拿去算呼吸鏈ATP，否則重複計帳。</p>\n<p>Cori\ncycle中周邊乳酸可送肝轉回葡萄糖，將部分負擔轉到肝；肝糖新生耗能高於周邊糖解所得，因此整體不是免費循環。乳酸也可被其他組織氧化利用，不是只能被肝清除的廢物。</p>\n"
    },
    {
      "id": "topic-8",
      "title": "紅血球旁路與抑制物",
      "html": "<p>紅血球2,3-BPG旁路由1,3-BPG分流，繞過phosphoglycerate\nkinase的ATP生成，代價是少回收該步ATP，收益是調節Hb釋氧。若某一份三碳中間物走旁路，失去一次該步ATP；不能不看分流比例就把整個葡萄糖收支固定說成零。</p>\n<p>Arsenate可在GAPDH反應中代替Pi形成不穩定產物，繞過原本的ATP回收，因此糖解碳流可繼續但能量收益減少；arsenite則與lipoate相關酵素抑制相連，兩者不可因中文都叫砷就當成同一作用。Fluoride可抑制enolase，是另一個常見辨認點。</p>\n<p>Pyruvate\nkinase缺陷使紅血球ATP生成不足，膜維持受影響，可連到溶血；G6PD缺陷則主要涉及NADPH與抗氧化能力。兩者都能有紅血球問題，但能量供應與抗氧化還原力是不同故障。</p>\n"
    },
    {
      "id": "topic-9",
      "title": "PDH：糖解進入氧化代謝的不可逆橋樑",
      "html": "<p>Pyruvate進入粒線體後，PDH\ncomplex催化pyruvate+CoA+NAD⁺→acetyl-CoA+CO₂+NADH。每個pyruvate產一個NADH與一個CO₂，不直接產ATP；每個葡萄糖有兩個pyruvate，所以反應兩次。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>組件／輔因子</th>\n<th>核心工作</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>E1與TPP（B1）</td>\n<td>脫羧並處理羥乙基中間物</td>\n</tr>\n<tr class=\"even\">\n<td>E2與lipoamide、CoA（B5）</td>\n<td>氧化／轉移醯基，形成acetyl-CoA</td>\n</tr>\n<tr class=\"odd\">\n<td>E3與FAD（B2）、NAD⁺（B3）</td>\n<td>再氧化lipoamide，最後把電子交給NAD⁺</td>\n</tr>\n</tbody>\n</table></div>\n<p>五個常背輔因子是TPP、lipoate、CoA、FAD、NAD⁺，不是PLP。Acetyl-CoA無法藉PDH反向變回pyruvate，所以偶數鏈脂肪酸生成的acetyl-CoA一般不能提供人類淨糖新生碳；這與glycerol能進入糖新生並不矛盾。</p>\n"
    },
    {
      "id": "topic-10",
      "title": "PDH調控與pyruvate的其他去向",
      "html": "<p>PDH kinase磷酸化使PDH失活，PDH\nphosphatase去磷酸化使其活化。高NADH、acetyl-CoA與能量充足狀態支持關閉進一步氧化碳流；pyruvate、ADP等訊號可抑制kinase，肌肉Ca²⁺可促進phosphatase而配合收縮供能。調控的具體強度與isoform、組織有關。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>去向</th>\n<th>酵素</th>\n<th>主要目的</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Lactate</td>\n<td>LDH</td>\n<td>再生胞質NAD⁺</td>\n</tr>\n<tr class=\"even\">\n<td>Acetyl-CoA</td>\n<td>PDH</td>\n<td>進入氧化／生合成碳流</td>\n</tr>\n<tr class=\"odd\">\n<td>Oxaloacetate</td>\n<td>Pyruvate carboxylase，biotin、ATP</td>\n<td>補充TCA與糖新生</td>\n</tr>\n<tr class=\"even\">\n<td>Alanine</td>\n<td>ALT，PLP</td>\n<td>轉胺與氮／碳運輸</td>\n</tr>\n</tbody>\n</table></div>\n<p>Pyruvate\ncarboxylase受acetyl-CoA活化，與PDH在碳流配置上相互配合。TPP不足或PDH功能受損時，pyruvate較可能流向lactate等，必須從反應瓶頸理解，而不是看到乳酸上升就只想到沒有氧。</p>\n"
    },
    {
      "id": "topic-11",
      "title": "能量總帳與閉卷重建",
      "html": "<p>葡萄糖到兩個pyruvate：直接淨2\nATP與2胞質NADH；再經PDH：增加2基質NADH、2 acetyl-CoA與2\nCO₂。到這裡還沒有把acetyl-CoA在TCA完全氧化，也不能直接宣稱已得到整個葡萄糖的30/32\nATP。</p>\n<p>若只算糖解到pyruvate並允許胞質NADH經呼吸鏈回收，使用2.5或1.5的穿梭估算，可得總約7或5\nATP當量，其中直接ATP仍只有2。若走lactate，NADH用於再生NAD⁺，淨直接收益仍2\nATP。</p>\n<p>閉卷畫圖時先畫三個不可逆關卡，再補唯一NADH生成步驟與兩個ATP回收步驟，最後畫pyruvate四個去向。能說出每個關卡的目的、訊號與能量帳，才算把路徑讀懂。</p>\n"
    }
  ],
  "questions": [
    {
      "title": "01　糖解每葡萄糖總生成與淨生成ATP各多少？",
      "prompt": "<p>糖解每葡萄糖總生成與淨生成ATP各多少？</p>",
      "answer": "<p>總生成4，前段消耗2，所以淨2；不可把總產量當淨產量。</p>"
    },
    {
      "title": "02　Aldolase是否直接產兩個GAP？",
      "prompt": "<p>Aldolase是否直接產兩個GAP？</p>",
      "answer": "<p>先產GAP與DHAP各一，再由triose phosphate isomerase轉成共同的GAP碳流。</p>"
    },
    {
      "title": "03　唯一直接產NADH的糖解酵素？",
      "prompt": "<p>唯一直接產NADH的糖解酵素？</p>",
      "answer": "<p>GAPDH；使用NAD⁺與無機Pi形成1,3-BPG，不消耗ATP來加該磷酸。</p>"
    },
    {
      "title": "04　糖解三個不可逆關卡？",
      "prompt": "<p>糖解三個不可逆關卡？</p>",
      "answer": "<p>Hexokinase/glucokinase、PFK-1、pyruvate kinase。糖新生需不同旁路。</p>"
    },
    {
      "title": "05　F1,6BP與F2,6BP角色相同嗎？",
      "prompt": "<p>F1,6BP與F2,6BP角色相同嗎？</p>",
      "answer": "<p>前者是糖解中間物且feed-forward活化pyruvate kinase；後者主要調節PFK-1與FBPase-1。</p>"
    },
    {
      "title": "06　LDH本身是否產ATP？",
      "prompt": "<p>LDH本身是否產ATP？</p>",
      "answer": "<p>不產，但把NADH氧化回NAD⁺，讓GAPDH及糖解可持續。</p>"
    },
    {
      "title": "07　走乳酸時能否再把糖解NADH算入呼吸鏈收益？",
      "prompt": "<p>走乳酸時能否再把糖解NADH算入呼吸鏈收益？</p>",
      "answer": "<p>不能，這些NADH已被LDH用來再生NAD⁺，再次計算會重複計帳。</p>"
    },
    {
      "title": "08　PDH每葡萄糖產多少NADH與CO₂？",
      "prompt": "<p>PDH每葡萄糖產多少NADH與CO₂？</p>",
      "answer": "<p>兩個pyruvate各反應一次，所以2 NADH與2 CO₂；PDH不直接產ATP。</p>"
    },
    {
      "title": "09　PDH五個輔因子與磷酸化結果？",
      "prompt": "<p>PDH五個輔因子與磷酸化結果？</p>",
      "answer": "<p>TPP、lipoate、CoA、FAD、NAD⁺；PDH kinase磷酸化使失活，phosphatase去磷酸化使活化。</p>"
    },
    {
      "title": "10　G6PD缺陷與pyruvate kinase缺陷的紅血球問題相同嗎？",
      "prompt": "<p>G6PD缺陷與pyruvate kinase缺陷的紅血球問題相同嗎？</p>",
      "answer": "<p>前者主要是NADPH與抗氧化能力不足，後者主要是ATP供應不足；不能只因都可溶血就當相同機制。</p>"
    }
  ],
  "recalls": [
    [
      "糖解每葡萄糖總生成與淨生成ATP各多少？",
      "總生成4，前段消耗2，所以淨2；不可把總產量當淨產量。"
    ],
    [
      "Aldolase是否直接產兩個GAP？",
      "先產GAP與DHAP各一，再由triose phosphate isomerase轉成共同的GAP碳流。"
    ],
    [
      "唯一直接產NADH的糖解酵素？",
      "GAPDH；使用NAD⁺與無機Pi形成1,3-BPG，不消耗ATP來加該磷酸。"
    ],
    [
      "糖解三個不可逆關卡？",
      "Hexokinase/glucokinase、PFK-1、pyruvate kinase。糖新生需不同旁路。"
    ],
    [
      "F1,6BP與F2,6BP角色相同嗎？",
      "前者是糖解中間物且feed-forward活化pyruvate kinase；後者主要調節PFK-1與FBPase-1。"
    ],
    [
      "糖解三個不可逆關卡？",
      "Hexokinase/glucokinase、PFK-1、pyruvate kinase。糖新生需不同旁路。"
    ],
    [
      "LDH本身是否產ATP？",
      "不產，但把NADH氧化回NAD⁺，讓GAPDH及糖解可持續。"
    ],
    [
      "G6PD缺陷與pyruvate kinase缺陷的紅血球問題相同嗎？",
      "前者主要是NADPH與抗氧化能力不足，後者主要是ATP供應不足；不能只因都可溶血就當相同機制。"
    ],
    [
      "PDH每葡萄糖產多少NADH與CO₂？",
      "兩個pyruvate各反應一次，所以2 NADH與2 CO₂；PDH不直接產ATP。"
    ],
    [
      "PDH五個輔因子與磷酸化結果？",
      "TPP、lipoate、CoA、FAD、NAD⁺；PDH kinase磷酸化使失活，phosphatase去磷酸化使活化。"
    ],
    [
      "走乳酸時能否再把糖解NADH算入呼吸鏈收益？",
      "不能，這些NADH已被LDH用來再生NAD⁺，再次計算會重複計帳。"
    ]
  ],
  "readingIntro": "依序讀機制、比較表與算例，再到歷屆分析核對不同問法。每節讀完請用自己的話重建因果。",
  "figure": "<p>核心路徑：自由能與還原當量 → 質子梯度 → ATP → 碳流與調控。</p>",
  "exams": {
    "bankCount": 1022,
    "yearMin": 96,
    "yearMax": 115,
    "note": "以下是人工主題精選，非完整頻率統計；相關章節可有交叉選題。",
    "groups": [
      {
        "id": "selected",
        "title": "歷屆機制與計算題",
        "topic": "topic-1",
        "summary": "先判斷問題的層次，再選擇能量、位置、方向或調控規則。",
        "questions": [
          {
            "number": 36,
            "text": "36 \n在糖解作用(glycolysis)中,下列那個酵素所催化的反應中,可直接生成ATP? \nA磷酸甘油酸變位酶(phosphoglycerate mutase) B磷酸甘油酸激酶(phosphoglycerate kinase) \nC烯醇化酶(enolase)  \nD磷酸果糖激酶(phosphofructokinase) \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  206.4,
                  570.0,
                  252.9
                ]
              }
            ],
            "id": "96-2-2-36",
            "year": 96,
            "session": 2,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/96/2/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=096130&c=103&s=2001&q=1&verify=step1-20261013-096130-103-2001-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=096130&y=2007",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/96/2/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=096130&c=103&s=2001&q=1&verify=step1-20261013-096130-103-2001-M",
            "corrected": true,
            "answerVersion": "M",
            "point": "機制與選項判讀",
            "analysis": "Phosphoglycerate kinase把1,3-BPG的磷酸轉給ADP直接生成ATP；PFK消耗ATP。",
            "trap": "先說出分子機制或計算依據，再核對選項；不要只記答案字母。"
          },
          {
            "number": 38,
            "text": "38 \n下列那種酶同時參與糖解(glycolysis)及葡萄糖新生(gluconeogenesis)之代謝途徑? \nA 3-磷酸甘油酸激酶(3-phosphoglycerate kinase) B六碳糖激酶(hexokinase) \nC磷酸果糖激酶-1(phosphofructokinase-1) \nD丙酮酸激酶(pyruvate kinase) \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  262.09,
                  570.22,
                  307.09
                ]
              }
            ],
            "id": "100-1-2-38",
            "year": 100,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/100/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=100030&c=101&s=0102&q=1&verify=step1-20261013-100030-101-0102-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=100030&y=2011",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/100/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=100030&c=101&s=0102&q=1&verify=step1-20261013-100030-101-0102-M",
            "corrected": true,
            "answerVersion": "M",
            "point": "機制與選項判讀",
            "analysis": "Phosphoglycerate kinase反應可逆，供糖解與糖新生共用；其餘是糖解不可逆關卡。",
            "trap": "先說出分子機制或計算依據，再核對選項；不要只記答案字母。"
          },
          {
            "number": 36,
            "text": "36 \n胰島素(insulin)調節下列何種分子的合成,進而活化phosphofructokinase-1 以促進糖解作用\n(glycolysis)? \nAcitrate \nBNADH \nCfructose 2,6-bisphosphate \nDATP \n",
            "regions": [
              {
                "page": 3,
                "rect": [
                  30.0,
                  571.59,
                  570.22,
                  613.59
                ]
              }
            ],
            "id": "101-2-2-36",
            "year": 101,
            "session": 2,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/101/2/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=101110&c=101&s=0102&q=1&verify=step1-20261013-101110-101-0102-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=101110&y=2012",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/101/2/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=101110&c=101&s=0102&q=1&verify=step1-20261013-101110-101-0102-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "C"
            ],
            "point": "機制與選項判讀",
            "analysis": "Insulin在典型肝模型支持F2,6BP增加，活化PFK-1；ATP與citrate通常代表抑制訊號。",
            "trap": "先說出分子機制或計算依據，再核對選項；不要只記答案字母。"
          },
          {
            "number": 39,
            "text": "39 \n砷酸鹽(arsenate)的結構性質類似磷酸鹽(phosphate),對糖解作用(glycolysis)之影響為: \nA抑制六碳糖激酶(hexokinase)活性 \nB抑制磷酸果糖激酶(phosphofructokinase)活性 \nC抑制糖解過程之ATP 生成 \nD抑制整個糖解過程 \n",
            "regions": [
              {
                "page": 5,
                "rect": [
                  30.0,
                  344.6,
                  570.22,
                  404.6
                ]
              }
            ],
            "id": "103-2-2-39",
            "year": 103,
            "session": 2,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/103/2/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=103100&c=101&s=0102&q=1&verify=step1-20261013-103100-101-0102-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=103100&y=2014",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/103/2/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=103100&c=101&s=0102&q=1&verify=step1-20261013-103100-101-0102-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "C"
            ],
            "point": "機制與選項判讀",
            "analysis": "Arsenate可使GAPDH產物繞過PGK的ATP回收，碳流不一定完全停止，但ATP收益下降。",
            "trap": "先說出分子機制或計算依據，再核對選項；不要只記答案字母。"
          },
          {
            "number": 38,
            "text": "38 \nFructose 2,6-bisphosphate 是糖解作用(glycolysis)與糖質新生作用(gluconeogenesis)的重要共同異\n位調解因子(allosteric regulator),下列有關fructose 2,6-bisphosphate 的敘述何者正確? \nA昇糖激素(glucagon)促進其合成 \nBfructose 2,6-bisphosphatase 催化其由fructose 6-phosphate 合成 \nCfructose 2,6-bisphosphate 活化phosphofructokinase-1 \nDfructose 2,6-bisphosphate 增加糖質新生作用(gluconeogenesis) \n",
            "regions": [
              {
                "page": 5,
                "rect": [
                  30.0,
                  242.73,
                  570.22,
                  348.93
                ]
              }
            ],
            "id": "104-1-2-38",
            "year": 104,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/104/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=104030&c=101&s=0102&q=1&verify=step1-20261013-104030-101-0102-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=104030&y=2015",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/104/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=104030&c=101&s=0102&q=1&verify=step1-20261013-104030-101-0102-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "C"
            ],
            "point": "機制與選項判讀",
            "analysis": "F2,6BP活化PFK-1並抑制FBPase-1；合成由PFK-2而非bisphosphatase催化。",
            "trap": "先說出分子機制或計算依據，再核對選項；不要只記答案字母。"
          },
          {
            "number": 93,
            "text": "93.下列糖解作用(glycolysis)的步驟中,那一個酵素所催化的步驟在正常生理條件下為不可逆反應?\n \nA.enolase\nB.phosphoglycerate kinase\nC.pyruvate kinase\nD.aldolase\n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  359.71,
                  569.96,
                  463.17
                ]
              }
            ],
            "id": "111-1-1-93",
            "year": 111,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/111/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=111020&c=301&s=11&q=1&verify=step1-20261013-111020-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=111020&y=2022",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/111/1/medicine-1-S.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=S&code=111020&c=301&s=11&q=1&verify=step1-20261013-111020-301-11-S",
            "corrected": false,
            "answerVersion": "S",
            "originalAnswers": [
              "C"
            ],
            "point": "機制與選項判讀",
            "analysis": "Pyruvate kinase為糖解三大不可逆步驟之一；其餘選項在一般條件下較可逆。",
            "trap": "先說出分子機制或計算依據，再核對選項；不要只記答案字母。"
          },
          {
            "number": 88,
            "text": "88.下列那一個酵素所催化的反應為糖解作用(glycolysis)中唯一將電子轉移給NAD\n+之氧化還原反應? \nA.enolase \nB.glyceraldehyde-3-phosphate dehydrogenase \nC.pyruvate dehydrogenase \nD.pyruvate kinase \n",
            "regions": [
              {
                "page": 16,
                "rect": [
                  30.0,
                  474.76,
                  570.32,
                  603.76
                ]
              }
            ],
            "id": "112-1-1-88",
            "year": 112,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/112/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=112020&c=301&s=11&q=1&verify=step1-20261013-112020-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=112020&y=2023",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/112/1/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=112020&c=301&s=11&q=1&verify=step1-20261013-112020-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "B"
            ],
            "point": "機制與選項判讀",
            "analysis": "GAPDH是糖解直接將電子交給NAD⁺的步驟；PDH在糖解之後，不屬十步糖解。",
            "trap": "先說出分子機制或計算依據，再核對選項；不要只記答案字母。"
          },
          {
            "number": 90,
            "text": "90.葡萄糖在細胞內代謝成acetyl-CoA 的過程中,不需要下列何者參與? \nA.glyceraldehyde 3-phosphate dehydrogenase \n\nB.pyruvate kinase \nC.pyruvate dehydrogenase complex \nD.phosphoenolpyruvate(PEP)carboxykinase \n",
            "regions": [
              {
                "page": 16,
                "rect": [
                  30.0,
                  753.76,
                  570.32,
                  806.92
                ]
              },
              {
                "page": 17,
                "rect": [
                  30.0,
                  28.0,
                  570.32,
                  114.76
                ]
              }
            ],
            "id": "112-1-1-90",
            "year": 112,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/112/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=112020&c=301&s=11&q=1&verify=step1-20261013-112020-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=112020&y=2023",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/112/1/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=112020&c=301&s=11&q=1&verify=step1-20261013-112020-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "D"
            ],
            "point": "機制與選項判讀",
            "analysis": "PEPCK用於糖新生方向的OAA→PEP，非葡萄糖到acetyl-CoA所需的糖解加PDH途徑。",
            "trap": "先說出分子機制或計算依據，再核對選項；不要只記答案字母。"
          },
          {
            "number": 89,
            "text": "89.下列那種酵素的活性並非調節糖解作用(glycolysis)速率的主要調控者? \nA.己糖激酶(hexokinase) \nB.磷酸果糖激酶(phosphofructokinase) \nC.烯醇化酶(enolase) \nD.丙酮酸激酶(pyruvate kinase) \n",
            "regions": [
              {
                "page": 16,
                "rect": [
                  30.0,
                  657.55,
                  570.0,
                  786.55
                ]
              }
            ],
            "id": "112-2-1-89",
            "year": 112,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/112/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=112100&c=301&s=11&q=1&verify=step1-20261013-112100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=112100&y=2023",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/112/2/medicine-1-S.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=S&code=112100&c=301&s=11&q=1&verify=step1-20261013-112100-301-11-S",
            "corrected": false,
            "answerVersion": "S",
            "originalAnswers": [
              "C"
            ],
            "point": "機制與選項判讀",
            "analysis": "Enolase不是題目三大不可逆調控關卡；主要為hexokinase、PFK-1、pyruvate kinase。",
            "trap": "先說出分子機制或計算依據，再核對選項；不要只記答案字母。"
          },
          {
            "number": 88,
            "text": "88.下列有關糖解作用(glycolysis)及葡萄糖新生(gluconeogenesis)的協同調控之敘述,何者錯誤? \n A.acetyl-CoA 會藉由抑制pyruvate kinase 活性來抑制糖解作用 \nB.acetyl-CoA 會藉由增強pyruvate carboxylase 活性來增加葡萄糖新生 \n\nC.fructose-1,6-bisphosphate 會藉由抑制pyruvate kinase 活性來抑制糖解作用 \nD.fructose-2,6-bisphosphate 會藉由增強phosphofructokinase 活性來增加糖解作用 \n \n",
            "regions": [
              {
                "page": 16,
                "rect": [
                  30.0,
                  720.78,
                  570.22,
                  807.0
                ]
              },
              {
                "page": 17,
                "rect": [
                  30.0,
                  28.0,
                  570.22,
                  87.78
                ]
              }
            ],
            "id": "115-2-1-88",
            "year": 115,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/115/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=115090&c=301&s=0101&q=1&verify=step1-20261013-115090-301-0101-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=115090&y=2026",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/115/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=115090&c=301&s=0101&q=1&verify=step1-20261013-115090-301-0101-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "C"
            ],
            "point": "機制與選項判讀",
            "analysis": "F1,6BP對pyruvate kinase為feed-forward活化，非抑制；F2,6BP則活化PFK-1。",
            "trap": "先說出分子機制或計算依據，再核對選項；不要只記答案字母。"
          }
        ]
      }
    ]
  }
});
