biochemistryChapters.push({
  "number": "26",
  "id": "gene-regulation-molecular-methods",
  "title": "基因調控與分子生物技術",
  "summary": "以 lac、trp 與染色質建立調控觀念，再依要測的分子、位置或交互作用，判讀分子檢驗。",
  "sources": "Molecular Biology of the Cell（Alberts 等）；考選部歷屆醫師第一階段試題與採計答案。",
  "references": "<p>Molecular Biology of the Cell（Alberts 等）；考選部歷屆醫師第一階段試題與採計答案。</p><p><a href=\"https://www.ncbi.nlm.nih.gov/books/NBK26872/\" target=\"_blank\" rel=\"noopener noreferrer\">How Genetic Switches Work</a></p><p><a href=\"https://www.ncbi.nlm.nih.gov/books/NBK26818/\" target=\"_blank\" rel=\"noopener noreferrer\">Studying Gene Expression and Function</a></p>",
  "readingIntro": "先說出細胞要解決哪個問題，例如有沒有乳糖可用；再分清觀察結果測到 DNA、RNA 還是蛋白。做技術題時，先遮住技術名稱，用一句話寫出要保留哪一種資訊。",
  "figure": "<p>圖表位於對應小節，可橫向捲動。</p>",
  "sections": [
    {
      "id": "topic-1",
      "title": "調控元件與作用層級",
      "html": "<p>Promoter 提供轉錄機器開始工作的位置，operator 是某些調控蛋白結合的 DNA 區段。兩者都是 cis 元件，影響與它們位在同一 DNA 分子上的轉錄單位。Repressor、activator 則是可擴散的蛋白，能以 trans 方式作用於相容序列。</p><p>若 operator 變異而不再結合 repressor，即使同一細胞仍製造正常的 repressor，該段 DNA 的結合表面仍有問題。反過來，若缺陷在可擴散蛋白，共存的功能性蛋白有機會補足。此推理預設是功能缺失，遇到顯性負效應時還要考慮蛋白間干擾。</p>"
    },
    {
      "id": "topic-2",
      "title": "Lac operon 的兩個獨立問題",
      "html": "<figure><div class=\"table-scroll\" tabindex=\"0\"><img src=\"assets/biochemistry/lac-controls.svg\" alt=\"乳糖與葡萄糖的四種組合；乳糖、葡萄糖、LacI 抑制、預期轉錄。無，高，保留，很低；無，低，保留，很低；有，高，解除，較低；有，低，解除，最高\" style=\"width:100%;min-width:600px;max-width:780px;height:auto\"></div><figcaption>低葡萄糖讓 CAP–cAMP 的正調控增強；仍要同時檢查 LacI。</figcaption></figure><p>第一問：有沒有可用的乳糖？由乳糖衍生的 allolactose 結合 LacI，使它對 operator 的親和力下降，解除負調控。第二問：葡萄糖是否缺乏？典型模型中，低葡萄糖使 cAMP 上升，CAP–cAMP 協助招募轉錄機器，形成正調控。</p><p>所以「有乳糖、低葡萄糖」可同時解除抑制並得到活化；「有乳糖、高葡萄糖」只解除抑制，轉錄通常低於前者。不要把沒有抑制者等同於已經達到最大表現。題幹若只給其中一個糖的狀態，另一個調控軸仍未確定。</p>"
    },
    {
      "id": "topic-3",
      "title": "Trp operon 的抑制與衰減",
      "html": "<p>色胺酸充足時可當作 corepressor，使 Trp repressor 有效結合 operator，降低起始。Attenuation 則發生在已經開始轉錄後；細菌的轉錄與轉譯可以偶聯，領導胜肽上的連續 Trp 密碼子讓核糖體間接感知帶電 tRNAᵀʳᵖ 的供應。</p><p>供應低時核糖體停在領導區前段，RNA 的 2–3 區可形成抗終止結構，後續生合成酵素得以轉錄。供應高時核糖體前進遮住區 2，3–4 終止髮夾形成，提早停止轉錄。終點是轉錄長度改變，雖然感測步驟仰賴轉譯。</p><div class=\"table-scroll\" tabindex=\"0\"><table><thead><tr><th>Trp 供應</th><th>核糖體在領導區</th><th>形成結構</th><th>下游轉錄</th></tr></thead><tbody><tr><td>較低</td><td>於連續 Trp codon 停滯</td><td>2–3 抗終止</td><td>繼續</td></tr><tr><td>較高</td><td>順利前進並遮住區 2</td><td>3–4 終止</td><td>提早結束</td></tr></tbody></table></div>"
    },
    {
      "id": "topic-4",
      "title": "核小體與染色質開放度",
      "html": "<p>約 147 bp DNA 繞在組蛋白八聚體上，核心由 H2A、H2B、H3、H4 各兩份組成。Lys、Arg 帶正電，有助於與 DNA 磷酸骨架作用。H1 與連接 DNA 及核小體出入口相關，不在八聚體核心內。</p><p>常染色質通常較鬆、較易接近，異染色質通常較緊密。可接近性只說明因子有機會接近 DNA，能否出現大量 RNA 仍取決於啟動子、轉錄因子和細胞狀態。DNA 序列相同的肝細胞與神經元便可因此具有不同的轉錄程式。</p>"
    },
    {
      "id": "topic-5",
      "title": "組蛋白修飾、DNA 甲基化與印記",
      "html": "<p>組蛋白 Lys 乙醯化可中和原有正電，並吸引辨認乙醯化的蛋白，常與較活躍的轉錄狀態相關。HDAC 移除乙醯基。組蛋白甲基化的效果則依位置而定，例如 H3K4me3 常見於活躍啟動子，H3K27me3 常與抑制相關。</p><p>哺乳類 DNA 甲基化常發生在 CpG 的 cytosine。啟動子 CpG 島高度甲基化常與轉錄抑制相關，但不能將任何位置的甲基化都解讀為基因關閉。基因體印記（imprinting）使部分基因依親本來源而有不同表現，分析時要分開序列變化與表現差異。</p>"
    },
    {
      "id": "topic-6",
      "title": "Enhancer、轉錄因子與訊號",
      "html": "<p>Enhancer 是具有調控功能的 DNA。可辨識特定序列的 activator 結合後，透過 coactivator、Mediator 與染色質接觸促進目標啟動子工作。Coactivator 雖可增強轉錄，通常透過與其他蛋白作用被招募。辨認「誰直接看懂 DNA 序列」是考題重點。</p><p>類固醇受體可因配體結合而改變活性，與反應元件及其他調控蛋白配合。不同組織即使接受相同訊號，若受體或必要輔因子量不同，反應仍可不同。題幹若只量到蛋白變多，還不能直接證明受體曾占據該基因的 enhancer。</p>"
    },
    {
      "id": "topic-7",
      "title": "RNA 穩定性與轉譯調控",
      "html": "<p>穩態 RNA 量同時由合成與降解決定。miRNA 由前驅物加工後，導引含 Argonaute 的複合體辨識目標 RNA；動物中常經不完全互補配對影響轉譯及促進去腺苷化與降解。目標常位於 3′ UTR，故沒有改變蛋白編碼序列也能改變表現量。</p><p>鐵調控提供位置決定效果的例子。缺鐵時 IRP 可結合 ferritin mRNA 的 5′ UTR IRE，降低轉譯；結合 transferrin receptor mRNA 的 3′ UTR IRE 則有利其穩定，使細胞增加攝鐵。不能只背「IRP 結合就抑制」，要先看它結合哪一端。</p>"
    },
    {
      "id": "topic-8",
      "title": "PCR、反轉錄與定量曲線",
      "html": "<p>傳統 PCR 回答特定 DNA 片段能否被擴增。聚合酶需要模板、引子、dNTP 與適當反應條件。若起始材料是 RNA，要先經 reverse transcription 產生 cDNA；若要即時觀察擴增曲線，才是 quantitative real-time PCR。RT 與 q 描述兩個不同概念。</p><p>在起始量以外條件相當、效率接近倍增時，Cq 低約 1 個循環代表起始模板約多一倍。若病例目標基因 Cq 比對照低 3，但參考基因也低 3，正規化後未必改變。無反轉錄對照可暴露基因組 DNA 汙染，無模板對照則檢查反應本身背景。</p>"
    },
    {
      "id": "topic-9",
      "title": "Blot 與表現量：從樣本決定方法",
      "html": "<p>Southern blot 用核酸探針辨識 DNA 片段；Northern blot 辨識 RNA，可同時觀察轉錄本大小與相對量。Western blot 以抗體辨識蛋白；同一蛋白的異常條帶可能反映剪切、修飾或抗體特異性，不能單憑跑得較慢就指定是哪種修飾。</p><p>若要比較一個轉錄本在兩組的含量，RT-qPCR、適當設計的 microarray 或 RNA-seq 都可能回答。RNA immunoprecipitation 主要研究哪些 RNA 與指定蛋白共同被拉下，結果受結合和回收效率影響；直接把它當作細胞總 RNA 定量是不恰當的。</p>"
    },
    {
      "id": "topic-10",
      "title": "FISH、定序與拷貝數的解析尺度",
      "html": "<figure><div class=\"table-scroll\" tabindex=\"0\"><img src=\"assets/biochemistry/molecular-readouts.svg\" alt=\"從問題選擇能保留該資訊的方法；要問什麼、要保留的資訊、代表方法、解讀限制。染色體位置，原位座標，FISH，非單鹼基定序；RNA 相對量，RNA 族群，RT-qPCR，須正規化；RNA 大小，不同長度，Northern，量受上樣影響；蛋白保護區，DNA 切割圖譜，Footprinting，不直接證明活化\" style=\"width:100%;min-width:600px;max-width:780px;height:auto\"></div><figcaption>先選觀察對象，再讀每種方法可直接支持的推論。</figcaption></figure><p>FISH 讓螢光核酸探針與細胞核或染色體上互補區段雜交，因此保留空間位置。可依探針設計觀察特定位點數目、融合或分離訊號。一般 FISH 探針覆蓋較大區域，看見正常訊號不表示每個核苷酸都正常。</p><p>若要知道確切單一鹼基變化，應檢視適當的定序資料；若問的是 RNA 數量，則轉用表現量技術。例：核型或 FISH 提示某基因搬到另一條染色體，可支持重排；是否產生可讀的融合 RNA，仍要用 RNA 層級的資料佐證。</p>"
    },
    {
      "id": "topic-11",
      "title": "蛋白與 DNA 結合的三種證據",
      "html": "<p>EMSA 中 DNA–蛋白複合體的遷移率改變，可支持結合。DNA footprinting 看一段 DNA 因蛋白保護而較少被切割，與無蛋白組相比，可定位受保護區。ChIP 利用特定抗體富集細胞內曾與目標蛋白關聯的染色質片段，接著辨認富集區域。</p><p>三者問的問題不同。Footprint 的缺帶來自保護，不能單憑它證明基因被啟動。ChIP 的富集也可能涉及間接結合。若還要知道調控功能，可比較相應細胞中轉錄量或報導基因表現，並考慮對照與其他調控元件。</p><div class=\"table-scroll\" tabindex=\"0\"><table><thead><tr><th>技術</th><th>讀取結果</th><th>能直接回答的問題</th></tr></thead><tbody><tr><td>EMSA</td><td>帶位移</td><td>是否形成移動較慢的複合體</td></tr><tr><td>Footprinting</td><td>蛋白保護區的缺帶</td><td>候選結合區在哪裡</td></tr><tr><td>ChIP</td><td>相對輸入或對照的富集</td><td>特定蛋白與哪些染色質區段相關</td></tr><tr><td>報導基因</td><td>報導產物的量或活性</td><td>所測序列在測試條件下是否影響表現</td></tr></tbody></table></div>"
    },
    {
      "id": "topic-12",
      "title": "整合讀題：變異、表現、功能分開驗證",
      "html": "<p>病例若有正常基因拷貝數、某一組織中 mRNA 減少、蛋白也下降，至少有兩條路徑解釋：轉錄減少，或 RNA 降解增加。可比較新生轉錄與成熟 RNA 的變化，再看是否存在異常接合。只有目標蛋白減少時，還要考慮轉譯與蛋白分解。</p><p>同樣地，報告若寫「變異位在 enhancer」，只是位置；若有 DNA 結合變化，是分子作用證據；若能在相關細胞中連到目標 RNA 及功能改變，才多了另一層證據。讀研究圖或考題時，先替每個數據寫一個它能直接回答的問題。</p>"
    }
  ],
  "recalls": [
    [
      "增加正常 repressor，能否必然修正 operator 結合位點缺陷？",
      "不能；須先判斷缺陷位在可擴散因子或該段 DNA 本身。"
    ],
    [
      "有乳糖與有葡萄糖同時出現，為何不是最高表現？",
      "LacI 抑制可下降，但 CAP–cAMP 的正調控較弱。"
    ],
    [
      "低 Trp 為什麼會讓後段轉錄增加？",
      "核糖體停滯有利於形成 2–3 抗終止結構，減少 3–4 終止髮夾。"
    ],
    [
      "組蛋白核心若只有一份 H2A、H2B、H3、H4，還少什麼？",
      "每種各少一份；核心是八聚體，H1 不能拿來補數目。"
    ],
    [
      "題目只寫「甲基化增加」，還需要問什麼？",
      "先問改在 DNA 或 histone，再問是哪個位置及何種細胞狀態。"
    ],
    [
      "要區分 activator 與 coactivator，先看哪個功能？",
      "看誰直接辨認特定 DNA 序列，誰靠與蛋白結合被帶到該處。"
    ],
    [
      "缺鐵時為何可同時少做 ferritin、保留 transferrin receptor mRNA？",
      "兩者 IRE 的位置不同，一個影響轉譯起始，另一個影響 mRNA 的降解。"
    ],
    [
      "病例目標 Cq 由 25 降至 22，參考基因同時由 20 降至 17，ΔCq 改變多少？",
      "兩組都是 5，ΔΔCq 為 0；在可比較效率與穩定參考基因前提下，相對表現約相同。"
    ],
    [
      "想同時看 RNA 長度與量，哪種經典 blot 最直接？",
      "Northern blot。RT-qPCR 多半只反映被引子涵蓋的區段。"
    ],
    [
      "為什麼 PCR 測到特定序列不能直接指出它的位置？",
      "萃取後的 DNA 失去細胞內空間資訊；FISH 則保留探針與染色體的位置關係。"
    ],
    [
      "有足跡圖，但 RNA 量沒改變，這兩結果互相矛盾嗎？",
      "不矛盾。圖顯示受保護區，轉錄量還受其他調控因素影響。"
    ],
    [
      "DNA 拷貝數正常、RNA 降低，可否排除 RNA 降解加速？",
      "不能。拷貝數只反映 DNA 劑量，穩態 RNA 是合成和降解共同的結果。"
    ]
  ],
  "questions": [
    {
      "title": "01　乳糖存在、葡萄糖也充足時，lac 的兩個開關各如何？",
      "prompt": "<p>乳糖存在、葡萄糖也充足時，lac 的兩個開關各如何？</p>",
      "answer": "<p>LacI 抑制減弱；CAP–cAMP 活化較弱，因此通常達不到最高轉錄。</p>"
    },
    {
      "title": "02　Trp repressor 無法結合 operator，衰減機制必然消失嗎？",
      "prompt": "<p>Trp repressor 無法結合 operator，衰減機制必然消失嗎？</p>",
      "answer": "<p>不必然。一個控制起始，另一個由領導區 RNA 摺疊與核糖體位置控制是否提早終止。</p>"
    },
    {
      "title": "03　給新發現的乙醯化標記，為何不能直接推定所有細胞的目標蛋白升高？",
      "prompt": "<p>給新發現的乙醯化標記，為何不能直接推定所有細胞的目標蛋白升高？</p>",
      "answer": "<p>需知道位置、細胞中的轉錄因子及後續 RNA、蛋白調控。標記是線索，不能獨立決定終點。</p>"
    },
    {
      "title": "04　若 DNA 甲基化報告只標了 CpG，下一步要讀什麼？",
      "prompt": "<p>若 DNA 甲基化報告只標了 CpG，下一步要讀什麼？</p>",
      "answer": "<p>先看基因組位置與樣本細胞種類，尤其是否涵蓋目標基因啟動子。</p>"
    },
    {
      "title": "05　當缺鐵時，ferritin mRNA 未減少但蛋白減少，是否仍符合 IRP 模型？",
      "prompt": "<p>當缺鐵時，ferritin mRNA 未減少但蛋白減少，是否仍符合 IRP 模型？</p>",
      "answer": "<p>符合。其 5′ UTR 的 IRE 被 IRP 結合可抑制轉譯，不必先使 mRNA 減少。</p>"
    },
    {
      "title": "06　無反轉錄對照也出現目標擴增，何種解釋須優先排除？",
      "prompt": "<p>無反轉錄對照也出現目標擴增，何種解釋須優先排除？</p>",
      "answer": "<p>反應可能含可被引子擴增的 DNA，不能把全部訊號視為 RNA 表現。</p>"
    },
    {
      "title": "07　同效率下，病例 ΔCq 比對照低二，約幾倍表現？",
      "prompt": "<p>同效率下，病例 ΔCq 比對照低二，約幾倍表現？</p>",
      "answer": "<p>ΔΔCq 為 −2，理想倍增時 2 的二次方為四倍。前提是參考基因穩定。</p>"
    },
    {
      "title": "08　想知道疑似重排有無形成融合轉錄本，僅有 FISH 足夠嗎？",
      "prompt": "<p>想知道疑似重排有無形成融合轉錄本，僅有 FISH 足夠嗎？</p>",
      "answer": "<p>FISH 可支持基因位置改變；融合 RNA 的存在仍須由轉錄本資料驗證。</p>"
    },
    {
      "title": "09　有蛋白時某段 DNA 的切割條帶消失，直接支持什麼？",
      "prompt": "<p>有蛋白時某段 DNA 的切割條帶消失，直接支持什麼？</p>",
      "answer": "<p>該段受保護，與蛋白占據或遮蔽相符；結果本身不能證明轉錄上升。</p>"
    },
    {
      "title": "10　Northern 顯示病人 RNA 較短，要如何分辨剪接與 3′ 端改變？",
      "prompt": "<p>Northern 顯示病人 RNA 較短，要如何分辨剪接與 3′ 端改變？</p>",
      "answer": "<p>接合點資料可找外顯子跳接，3′ 端資料可找切割位置改變。單靠長度不能唯一定位。</p>"
    }
  ],
  "exams": {
    "bankCount": 1022,
    "yearMin": 96,
    "yearMax": 115,
    "note": "精選題數僅描述本章收錄內容。",
    "groups": [
      {
        "id": "group-1",
        "title": "細菌的雙層調控",
        "topic": "topic-2",
        "summary": "對照本組原題中的解除抑制與正調控、Attenuation，辨認題幹指定的步驟與直接作用。",
        "questions": [
          {
            "number": 88,
            "text": "88.大腸桿菌(E. coli)處於富含乳糖且缺乏葡萄糖的環境時,其乳糖操縱組(lac operon)的基因調控模式,\n主要有下列那兩種類型?1透過減少抑制蛋白結合而活化轉錄 2通過增加抑制蛋白結合而抑制轉錄 3通\n過增加活化蛋白結合而活化轉錄 4通過減少活化蛋白結合而抑制轉錄 \nA.14 \nB.23 \nC.24 \nD.13",
            "regions": [
              {
                "page": 16,
                "rect": [
                  30,
                  372.83,
                  587,
                  522.23
                ]
              }
            ],
            "id": "115-1-1-88",
            "year": 115,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/115/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=115020&c=301&s=0101&q=1&verify=step1-20261013-115020-301-0101-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=115020&y=2026",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/115/1/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=115020&c=301&s=0101&q=1&verify=step1-20261013-115020-301-0101-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "D"
            ],
            "point": "解除抑制與正調控",
            "analysis": "有乳糖使 LacI 占據下降，低葡萄糖則使 CAP–cAMP 活化增強，對應 1 和 3。",
            "trap": "兩個條件要分開推，少判一軸便會選錯。"
          },
          {
            "number": 86,
            "text": "86.下列何者是trp operon 調降作用(attenuation)的最佳敘述? \nA.當色胺酸(tryptophan)存在時,可增進trp operon 的轉錄表現 \nB.可調節此operon 的轉錄表現,以因應細胞中微量色胺酸(tryptophan)的改變 \nC.可直接抑制trp mRNA 轉譯作用的機制 \nD.作用在trp operon 內每一個基因個別的啟動子(promoter)上",
            "regions": [
              {
                "page": 16,
                "rect": [
                  30,
                  270.55,
                  570,
                  399.55
                ]
              }
            ],
            "id": "112-2-1-86",
            "year": 112,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/112/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=112100&c=301&s=11&q=1&verify=step1-20261013-112100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=112100&y=2023",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/112/2/medicine-1-S.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=S&code=112100&c=301&s=11&q=1&verify=step1-20261013-112100-301-11-S",
            "corrected": false,
            "answerVersion": "S",
            "originalAnswers": [
              "B"
            ],
            "point": "Attenuation",
            "analysis": "領導區的轉譯速度改變 RNA 摺疊，微調下游轉錄是否繼續。",
            "trap": "感測涉及轉譯，輸出卻是轉錄衰減。"
          }
        ]
      },
      {
        "id": "group-2",
        "title": "真核轉錄調控",
        "topic": "topic-6",
        "summary": "對照本組原題中的Enhancer、H1、HDAC、CpG，辨認題幹指定的步驟與直接作用。",
        "questions": [
          {
            "number": 85,
            "text": "85.下列那一種真核細胞調控蛋白質(eukaryotic regulatory proteins)會與增強子(enhancer)結合,以促進基\n因轉錄? \n \nA.轉錄活化子(transcription activators) \nB.輔活化子(coactivators) \nC.TATA-結合蛋白(TATA-binding proteins; TBP) \nD.基準轉錄因子(basal transcription factors)",
            "regions": [
              {
                "page": 13,
                "rect": [
                  30,
                  152.27,
                  570,
                  275.17
                ]
              }
            ],
            "id": "107-1-1-85",
            "year": 107,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/107/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=107020&c=301&s=55&q=1&verify=step1-20261013-107020-301-55-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=107020&y=2018",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/107/1/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=107020&c=301&s=55&q=1&verify=step1-20261013-107020-301-55-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "A"
            ],
            "point": "Enhancer",
            "analysis": "序列特異性 activator 結合 enhancer 並招募調控伙伴。",
            "trap": "Coactivator 的作用重要，但題目問直接結合者。"
          },
          {
            "number": 79,
            "text": "79.核小體(nucleosome)是由DNA 和組蛋白(histone)構成的,下列何種組蛋白不屬於核小體中的組蛋白核心\n(histone core)? \n \nA.H1 \nB.H2A \nC.H2B \nD.H3",
            "regions": [
              {
                "page": 15,
                "rect": [
                  30,
                  243.78,
                  570.22,
                  393.78
                ]
              }
            ],
            "id": "115-2-1-79",
            "year": 115,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/115/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=115090&c=301&s=0101&q=1&verify=step1-20261013-115090-301-0101-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=115090&y=2026",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/115/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=115090&c=301&s=0101&q=1&verify=step1-20261013-115090-301-0101-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "A"
            ],
            "point": "H1",
            "analysis": "核心為 H2A、H2B、H3、H4 各兩份；H1 是 linker histone。",
            "trap": "題幹問不屬於核心，而不是問是否屬於組蛋白。"
          },
          {
            "number": 83,
            "text": "83.下列何者是真核細胞組蛋白去乙醯酶(histone deacetylase)之主要功能?\nA.調節基因之轉錄\nB.增加組蛋白之濃度\nC.減少mRNA轉譯之作用\nD.增加真核起始因子2(eIF2)蛋白質之穩定性",
            "regions": [
              {
                "page": 13,
                "rect": [
                  30,
                  68.72,
                  570,
                  174.31
                ]
              }
            ],
            "id": "108-1-1-83",
            "year": 108,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/108/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=108030&c=301&s=11&q=1&verify=step1-20261013-108030-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=108030&y=2019",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/108/1/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=108030&c=301&s=11&q=1&verify=step1-20261013-108030-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "A"
            ],
            "point": "HDAC",
            "analysis": "去乙醯化可改變染色質狀態與因子招募，因此影響基因轉錄。",
            "trap": "主要機轉是標記改變，並非提高組蛋白濃度。"
          },
          {
            "number": 79,
            "text": "79.DNA的序列中,下列何者較易被甲基化? \n \nA.TATA box \nB.CpG site \nC.CAAT box \nD.Telomere",
            "regions": [
              {
                "page": 12,
                "rect": [
                  30,
                  170.17,
                  570,
                  275.17
                ]
              }
            ],
            "id": "107-2-1-79",
            "year": 107,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/107/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=107100&c=301&s=11&q=1&verify=step1-20261013-107100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=107100&y=2018",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/107/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=107100&c=301&s=11&q=1&verify=step1-20261013-107100-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "B"
            ],
            "point": "CpG",
            "analysis": "常見哺乳類 DNA 甲基化位點為 CpG 的 cytosine。",
            "trap": "勿與細菌 Dam 在特定序列甲基化 adenine 混為一談。"
          }
        ]
      },
      {
        "id": "group-3",
        "title": "核酸量與位置",
        "topic": "topic-8",
        "summary": "對照本組原題中的PCR 的模板、RNA 定量、FISH，辨認題幹指定的步驟與直接作用。",
        "questions": [
          {
            "number": 100,
            "text": "100.聚合酶鏈鎖反應(polymerase chain reaction, PCR)不需要下列何種物質?\n A.DNA雙股模板(template)\nB.引子(primer)\n\nC.去氧核糖核酸聚合酶(DNA polymerase)\nD.反轉錄酶(reverse transcriptase)",
            "regions": [
              {
                "page": 18,
                "rect": [
                  30,
                  736.28,
                  569.96,
                  806.92
                ]
              },
              {
                "page": 19,
                "rect": [
                  30,
                  28,
                  569.96,
                  806.92
                ]
              }
            ],
            "id": "113-1-1-100",
            "year": 113,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/113/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=113020&c=301&s=11&q=1&verify=step1-20261013-113020-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=113020&y=2024",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/113/1/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=113020&c=301&s=11&q=1&verify=step1-20261013-113020-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "D"
            ],
            "point": "PCR 的模板",
            "analysis": "傳統 PCR 由 DNA 模板開始，無須反轉錄酶。",
            "trap": "若起始材料為 RNA 才需先做 cDNA。"
          },
          {
            "number": 99,
            "text": "99.下列何者最不可能被用來測定細胞中某一特殊核糖核酸(RNA)的數量? \nA.核糖核酸免疫沉澱(RNA immunoprecipitation) \nB.核糖核酸深度定序(RNA deep sequencing) \nC.核糖核酸微陣列(RNA microarray) \nD.反轉錄-即時聚合酶連鎖反應(reverse transcription-real time polymerase chain reaction)",
            "regions": [
              {
                "page": 18,
                "rect": [
                  30,
                  399.55,
                  570,
                  528.55
                ]
              }
            ],
            "id": "112-2-1-99",
            "year": 112,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/112/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=112100&c=301&s=11&q=1&verify=step1-20261013-112100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=112100&y=2023",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/112/2/medicine-1-S.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=S&code=112100&c=301&s=11&q=1&verify=step1-20261013-112100-301-11-S",
            "corrected": false,
            "answerVersion": "S",
            "originalAnswers": [
              "A"
            ],
            "point": "RNA 定量",
            "analysis": "RIP 著重特定蛋白相關的 RNA，並非直接測細胞內指定 RNA 的總量。",
            "trap": "分清輸入樣本與免疫沉澱富集後的分量。"
          },
          {
            "number": 99,
            "text": "99.下列那一個實驗技術可以用來偵測特定基因在染色體上的位置? \n \nA.限制酶片段長度多型性(restriction fragment length polymorphism, RFLP) \nB.螢光原位雜交(fluorescent in situ hybridization, FISH) \nC.反轉錄PCR(reverse transcription-PCR, RT-PCR) \nD.DNA 微陣列(DNA microarrays)",
            "regions": [
              {
                "page": 19,
                "rect": [
                  30,
                  33.78,
                  570.22,
                  162.78
                ]
              }
            ],
            "id": "115-2-1-99",
            "year": 115,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/115/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=115090&c=301&s=0101&q=1&verify=step1-20261013-115090-301-0101-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=115090&y=2026",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/115/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=115090&c=301&s=0101&q=1&verify=step1-20261013-115090-301-0101-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "B"
            ],
            "point": "FISH",
            "analysis": "螢光探針在原位辨認與目標互補的序列，保留染色體上的座標。",
            "trap": "常規 RT-PCR 的產物不帶原始染色體空間位置。"
          }
        ]
      },
      {
        "id": "group-4",
        "title": "辨認受保護序列",
        "topic": "topic-11",
        "summary": "對照本組原題中的Footprinting，辨認題幹指定的步驟與直接作用。",
        "questions": [
          {
            "number": 84,
            "text": "84.DNA 足跡鑑定(DNA footprinting assay)最適用於下列何種分析? \n\n \nA.一段基因編碼區的5'端以及3'端的位置 \nB.基因組中會與調控RNA 結合的位置 \nC.DNA 與蛋白質發生專一性結合的位置 \nD.被剪接的內含子(intron)在前信使RNA(pro-mRNA)中的位置",
            "regions": [
              {
                "page": 16,
                "rect": [
                  30,
                  774.88,
                  570.32,
                  807.04
                ]
              },
              {
                "page": 17,
                "rect": [
                  30,
                  28,
                  570.32,
                  141.78
                ]
              }
            ],
            "id": "114-1-1-84",
            "year": 114,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/114/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=114020&c=301&s=0101&q=1&verify=step1-20261013-114020-301-0101-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=114020&y=2025",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/114/1/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=114020&c=301&s=0101&q=1&verify=step1-20261013-114020-301-0101-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "C"
            ],
            "point": "Footprinting",
            "analysis": "蛋白結合後遮蔽特定 DNA 區段，對照切割圖譜可定位足跡。",
            "trap": "無法由足跡直接推出轉錄量或剪接位點。"
          }
        ]
      }
    ]
  }
});
