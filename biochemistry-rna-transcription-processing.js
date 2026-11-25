biochemistryChapters.push({
  "number": "24",
  "id": "rna-transcription-processing",
  "title": "RNA 轉錄與加工",
  "summary": "把一段 DNA 讀成有方向的 RNA，追蹤它如何加帽、剪接、加尾，再用序列和臨床題定位故障。",
  "sources": "Molecular Biology of the Cell（Alberts 等）；考選部歷屆醫師第一階段試題與採計答案。",
  "references": "<p>Molecular Biology of the Cell（Alberts 等）；考選部歷屆醫師第一階段試題與採計答案。</p><p><a href=\"https://www.ncbi.nlm.nih.gov/books/NBK26887/\" target=\"_blank\" rel=\"noopener noreferrer\">From DNA to RNA</a></p>",
  "readingIntro": "先在紙上寫出模板股與 RNA 的兩端；再沿著一條 Pol II 轉錄本，指出何時出現帽、套索、切割點與尾巴。最後比較同一段基因在 DNA、前驅 RNA、成熟 RNA 上各能看到什麼。",
  "figure": "<p>圖表位於對應小節，可橫向捲動。</p>",
  "sections": [
    {
      "id": "topic-1",
      "title": "轉錄方向與模板判讀",
      "html": "<figure><div class=\"table-scroll\" tabindex=\"0\"><img src=\"assets/biochemistry/rna-strands.svg\" alt=\"同一段基因的三種寫法；分子、左端、由左向右的序列、右端。編碼股 DNA，5′，A T G   G A A，3′；模板股 DNA，3′，T A C   C T T，5′；新生 RNA，5′，A U G   G A A，3′\" style=\"width:100%;min-width:600px;max-width:780px;height:auto\"></div><figcaption>聚合酶沿中列由左往右讀取，在下列 RNA 的 3′ 端延長。</figcaption></figure><p>一段 DNA 有兩股，但對某個轉錄單位而言，RNA 聚合酶沿模板股的 3′→5′ 方向讀取，RNA 在自己的 3′ 端增加核苷酸。編碼股若也以 5′→3′ 書寫，序列與 RNA 相同，只需將 T 換成 U。哪一股擔任模板取決於該基因啟動子的方向，相鄰基因可以使用不同股。</p><p>試算：若模板寫成 5′-GTCATA-3′，先反向寫成 3′-ATACTG-5′，互補後得到 5′-UAUGAC-3′。只做互補而沒有反轉，會得到方向錯誤的答案。若題目直接給編碼股，就不需要再做互補。</p>"
    },
    {
      "id": "topic-2",
      "title": "不靠引子起始的化學反應",
      "html": "<p>RNA polymerase 使用 ATP、GTP、CTP、UTP，並需要二價金屬離子參與催化。第一個 NTP 本身就能成為起點，接著末端的 3′-OH 攻擊下一個 NTP 的 α 磷酸，釋出焦磷酸。聚合酶局部打開 DNA，只維持短暫的 RNA–DNA 雜合區，通過後兩股 DNA 重新配對。</p><p>比較複製：兩者都以 5′→3′ 延長、都依模板選互補鹼基。DNA 聚合酶需要既有 3′-OH，引子酶與一般轉錄用 RNA 聚合酶則可從頭起始。核糖的 2′-OH 也使 RNA 在鹼性環境比 DNA 更容易水解。</p>"
    },
    {
      "id": "topic-3",
      "title": "細菌起始、延長與終止",
      "html": "<p>核心聚合酶負責催化，加入 σ 因子後形成能辨識特定啟動子的全酶。典型 σ⁷⁰ 啟動子在 +1 上游有 −10、−35 區；負號是位置，不代表要把該段轉錄成 RNA。啟動子控制起始的位置與方向，operator 則提供調控蛋白結合。</p><p>聚合酶離開啟動子後，σ 對主體延長的需求降低。內在終止常靠新生 RNA 的髮夾配合 U 串，使延長複合體不穩定；Rho 依賴型終止則需要可在 RNA 上移動的 ATPase。辨題時先找「辨認 DNA」或「形成 RNA 二級結構」。</p>"
    },
    {
      "id": "topic-4",
      "title": "真核核內三種 RNA 聚合酶",
      "html": "<p>Pol I 主要在核仁轉錄大的 rRNA 前驅物，再加工得到 18S、5.8S、28S rRNA。Pol III 合成 tRNA 及 5S rRNA。Pol II 主要製造 pre-mRNA，也合成多種調控性小 RNA 的前驅物。判斷不能只用「大小 RNA」或「是否屬於核糖體」。</p><p>真核大次單元的 rRNA 有不同來源，5S 與 28S 最後一起工作，卻由不同聚合酶製造。α-amanitin 的經典考點是 Pol II 高度敏感；解題要跟著產物追聚合酶，避免把蛋白質合成減少直接當成核糖體受抑制。</p><div class=\"table-scroll\" tabindex=\"0\"><table><thead><tr><th>聚合酶</th><th>產物</th><th>考題如何反向問</th></tr></thead><tbody><tr><td>Pol I</td><td>18S、5.8S、28S 的共同前驅物</td><td>大 rRNA 前驅物不足，5S 仍可製造</td></tr><tr><td>Pol II</td><td>pre-mRNA、部分小 RNA</td><td>轉錄起始與 CTD 磷酸化</td></tr><tr><td>Pol III</td><td>5S rRNA、tRNA 等</td><td>兩種功能不同的 RNA 卻共用聚合酶</td></tr></tbody></table></div>"
    },
    {
      "id": "topic-5",
      "title": "真核啟動子與 TFIIH",
      "html": "<p>對含 TATA box 的典型啟動子，TFIID 的 TBP 辨識上游約 25–30 bp 的 DNA，其他一般轉錄因子與 Pol II 隨後組裝。哺乳類也有大量不含 TATA box 的啟動子，不能用有無 TATA 直接判定能否轉錄。</p><p>TFIIH 參與打開啟動子附近 DNA，其 kinase 可磷酸化 Pol II 最大次單元的 CTD。離開啟動子後，CTD 的磷酸化狀態協助招募 RNA 加工因子。TFIIH 也參與核苷酸切除修復；題目若問轉錄終止，先排除這個以起始與修復見長的因子。</p>"
    },
    {
      "id": "topic-6",
      "title": "5′ 帽的結構、位置與用途",
      "html": "<p>Pol II 轉錄本還很短時，核內酵素就處理其 5′ 端，接上 guanosine 並甲基化成 m⁷G cap。帽與第一個核苷酸之間是特殊的 5′–5′ triphosphate 鍵；RNA 主鏈其餘位置仍然是 3′–5′ 磷酸二酯鍵。</p><p>帽能保護末端、招募核內 cap-binding complex，並幫助加工與核輸出。進入胞質後，典型帽依賴轉譯由 eIF4E 辨認帽。注意方向：帽裝在 RNA 上，識別帽的翻譯因子位於下游；破壞其中一項，不等於 RNA 的編碼序列發生突變。</p>"
    },
    {
      "id": "topic-7",
      "title": "剪接位點與兩次轉酯",
      "html": "<figure><div class=\"table-scroll\" tabindex=\"0\"><img src=\"assets/biochemistry/rna-splicing.svg\" alt=\"兩次轉酯如何接合外顯子；反應、提供羥基、攻擊位置、反應後。第一次，分支 A 的 2′-OH，5′ 剪接位點，產生套索鍵；第二次，外顯子一的 3′-OH，3′ 剪接位點，兩外顯子相接\" style=\"width:100%;min-width:600px;max-width:780px;height:auto\"></div><figcaption>第一步釋出外顯子一的 3′-OH，才有第二步的攻擊者。</figcaption></figure><p>典型主要型內含子 RNA 的 5′ 端為 GU，3′ 端為 AG。分支點 A 的 2′-OH 先攻擊 5′ splice site，形成特殊 2′–5′ 鍵與套索。接著前一外顯子的自由 3′-OH 攻擊下一外顯子交界處，接上兩段外顯子，內含子以套索釋出。</p><p>U1 辨識 5′ 位點、U2 參與辨識分支點；之後經 U4/U6、U5 等重排形成催化中心。整個剪接體的裝配與重排要能量，兩次轉酯本身則交換既有磷酸二酯鍵。別因「需要 ATP」就選成以 DNA ligase 接外顯子。</p>"
    },
    {
      "id": "topic-8",
      "title": "替代剪接與臨床變異",
      "html": "<p>同一條前驅 RNA 可以跳過某個外顯子，也可以選用不同的 5′ 或 3′ 剪接位點。兩段外顯子在基因組的位置未變，成熟 RNA 的接合點卻改變。UTR 中的外顯子也可保留於成熟 RNA，因此 exon 不等於一律編碼胺基酸。</p><p>以 β-thalassemia 的部分變異為例，剪接位點受損可使正常 β-globin mRNA 減少。若誤用附近的隱蔽位點，結果可能保留一段內含子或少一段外顯子；是否移框，取決於編碼區增減的長度是否為三的倍數。</p>"
    },
    {
      "id": "topic-9",
      "title": "自我剪接與 RNA 的催化角色",
      "html": "<p>Group I intron 使用外來 guanosine 的 3′-OH 發動第一次攻擊，通常釋出線性內含子。Group II intron 則以內部 adenosine 的 2′-OH 發動，形成套索，在化學機轉上更接近剪接體。考題給「自由 guanosine」時，先想到 group I。</p><p>兩者都是 RNA 可以催化化學反應的例子。生理環境中蛋白質可協助折疊與效率，不能把 RNA 具催化能力誤讀為細胞內完全不需要蛋白質。另一個易混名詞是 RNase P，其經典工作是切除前驅 tRNA 的 5′ 前導序列。</p>"
    },
    {
      "id": "topic-10",
      "title": "3′ 端切割與 poly(A) 尾",
      "html": "<p>典型哺乳類 pre-mRNA 上的 AAUAAA 是辨識訊號。加工複合體結合訊號與下游序列，在訊號下游切割；poly(A) polymerase 再用 ATP 對新形成的 3′ 端連加 A。訊號來自模板，長尾則在切割後加上，不需 DNA 上有同長的 T 串。</p><p>尾端結合蛋白協助穩定性與轉譯；尾巴縮短常是 mRNA 降解的前奏。切割成熟轉錄本的 3′ 端，與 Pol II 在更下游結束轉錄是兩件事。常見例外是複製依賴型 histone mRNA，其 3′ 端以特殊莖環加工。</p>"
    },
    {
      "id": "topic-11",
      "title": "成熟、輸出與品質管制",
      "html": "<p>成熟 mRNA 經核孔進入胞質後，仍會受到穩定性與轉譯起始調控。提前終止密碼子若位在最後一個 exon–exon junction 上游約 50–55 nt 以上，在典型哺乳類情境可引發 nonsense-mediated decay（NMD）。這是經驗判準，還要看轉錄本結構。</p><p>同樣是 nonsense 變異，位於最後外顯子者可能避開這種偵測並留下截短蛋白。判讀檢驗先問測的是 genomic DNA、mRNA 或蛋白；DNA 突變可存在於每個帶因細胞，異常 RNA 卻可能因降解而難以測到。</p>"
    },
    {
      "id": "topic-12",
      "title": "整合判題：從觀察結果定位故障",
      "html": "<p>若前驅 RNA 量正常、成熟 RNA 接合點異常，優先檢查剪接；若 3′ 端變長或改用下游位置，先想切割與加尾；若成熟 RNA 量相近、蛋白量下降，還需比較起始效率和蛋白分解。這些是待驗證的機轉，一個測量值通常不能唯一定位。</p><p>例如某基因有外顯子 A、B、C，病人的成熟 RNA 出現 A–C 接合。此結果直接支持 exon B skipping，卻不能單憑 RNA 結果斷言基因組的 B 已缺失；可再看 DNA 是否保留 B，以及 B 兩側剪接訊號是否變異。</p><div class=\"table-scroll\" tabindex=\"0\"><table><thead><tr><th>觀察</th><th>較直接支持</th><th>仍待確認</th></tr></thead><tbody><tr><td>前驅 RNA 有 B，成熟 RNA 顯示 A–C</td><td>成熟產物少了 B</td><td>正常替代剪接或致病變異</td></tr><tr><td>成熟 RNA 的 3′ 端移到下游</td><td>切割或位點選擇改變</td><td>是否造成蛋白量變化</td></tr><tr><td>DNA 含變異，異常 RNA 很少</td><td>異常轉錄本穩態量低</td><td>合成不足或降解加快</td></tr></tbody></table></div>"
    }
  ],
  "recalls": [
    [
      "模板 5′-CAT-3′ 對應哪段 RNA？",
      "5′-AUG-3′。先將模板按 3′→5′ 排好，再寫互補 RNA。"
    ],
    [
      "轉錄和複製各用什麼原料？",
      "轉錄用 NTP；DNA 複製用 dNTP。兩者選料不同，但延長方向相同。"
    ],
    [
      "細菌終止子中的髮夾形成在哪個分子？",
      "新生 RNA 自行配對形成髮夾；DNA 上的序列提供形成它的資訊。"
    ],
    [
      "5S 與 5.8S rRNA 是誰製造的？",
      "5S 來自 Pol III；5.8S 由 Pol I 的大前驅物加工得到。"
    ],
    [
      "為何 CTD 的改變可影響加帽？",
      "CTD 是招募加工酵素的平台，將新生 RNA 的合成與加工接在一起。"
    ],
    [
      "若在高基氏體尋找 mRNA 加帽，位置錯在哪？",
      "一般核編碼 Pol II 轉錄本在細胞核內、轉錄早期就加帽。"
    ],
    [
      "套索上哪個鹼基形成特別的鍵？",
      "分支點 adenosine 的 2′-OH 與內含子 5′ 端形成 2′–5′ 鍵。"
    ],
    [
      "少一個外顯子一定改變閱讀框嗎？",
      "先確認是否位於編碼區，再看移除的核苷酸數是否為三的倍數。"
    ],
    [
      "由起始親核基團怎麼分 group I 與 II？",
      "Group I 用外來 G 的 3′-OH；group II 用內部 A 的 2′-OH。"
    ],
    [
      "若 AAUAAA 變異，第一個要想的故障是什麼？",
      "正常的 3′ 端辨識與切割可能受影響，亦可改用其他 poly(A) 位點。"
    ],
    [
      "為什麼看到 DNA 提早停碼，不能直接推定有大量截短蛋白？",
      "異常轉錄本可能先被 NMD 降解，蛋白穩定性也會影響檢出量。"
    ],
    [
      "在成熟 RNA 上發現 A–C 接合，能否證明 DNA 的 B 被刪？",
      "不能。替代剪接與基因組刪除均可產生該接合，需要 DNA 層級的資料。"
    ]
  ],
  "questions": [
    {
      "title": "01　給編碼股 5′-TACG-3′，同方向 RNA 是什麼？",
      "prompt": "<p>給編碼股 5′-TACG-3′，同方向 RNA 是什麼？</p>",
      "answer": "<p>5′-UACG-3′。只有給模板股才要反向互補。</p>"
    },
    {
      "title": "02　啟動子反向排列，會影響哪兩項資訊？",
      "prompt": "<p>啟動子反向排列，會影響哪兩項資訊？</p>",
      "answer": "<p>可能改變轉錄方向與被讀取的模板股；實際是否啟動仍取決於序列與周圍環境。</p>"
    },
    {
      "title": "03　成熟核糖體缺乏 5S，其他 Pol I 產物尚在，應先查哪一類合成？",
      "prompt": "<p>成熟核糖體缺乏 5S，其他 Pol I 產物尚在，應先查哪一類合成？</p>",
      "answer": "<p>5S 是 Pol III 產物。不能因大次單元也含 28S，就把所有 rRNA 歸給 Pol I。</p>"
    },
    {
      "title": "04　轉錄本 5′ 端容易遭分解，帽依賴起始也下降，何種結構可同時解釋？",
      "prompt": "<p>轉錄本 5′ 端容易遭分解，帽依賴起始也下降，何種結構可同時解釋？</p>",
      "answer": "<p>缺少或破壞 m⁷G cap 可同時影響末端保護及 eIF4E 辨識；還須以實驗排除其他原因。</p>"
    },
    {
      "title": "05　RNA 上看到 GU…AG，要怎麼寫成編碼股 DNA？",
      "prompt": "<p>RNA 上看到 GU…AG，要怎麼寫成編碼股 DNA？</p>",
      "answer": "<p>同方向 DNA 是 GT…AG。題目若提供模板股，還要反向互補。</p>"
    },
    {
      "title": "06　若編碼區因剪接少了 18 nt，能否據此判定成品正常？",
      "prompt": "<p>若編碼區因剪接少了 18 nt，能否據此判定成品正常？</p>",
      "answer": "<p>不移框，但可少六個胺基酸，仍可能破壞關鍵結構或功能。</p>"
    },
    {
      "title": "07　內含子反應依賴游離 guanosine，是否預期第一步形成典型 A 套索？",
      "prompt": "<p>內含子反應依賴游離 guanosine，是否預期第一步形成典型 A 套索？</p>",
      "answer": "<p>這指向 group I，以外來 G 啟動；典型分支 A 套索對應 group II 或剪接體。</p>"
    },
    {
      "title": "08　測得 RNA 尾巴長達數十個 A，為何在基因組找不到同長的 T 串？",
      "prompt": "<p>測得 RNA 尾巴長達數十個 A，為何在基因組找不到同長的 T 串？</p>",
      "answer": "<p>大多數真核 mRNA 的 poly(A) 尾是核苷酸轉移酵素在切割後添加，不由模板逐字指定。</p>"
    },
    {
      "title": "09　內含子序列是否可能短暫出現在細胞核 RNA 中？",
      "prompt": "<p>內含子序列是否可能短暫出現在細胞核 RNA 中？</p>",
      "answer": "<p>會。新生轉錄本可仍含內含子，偵測到不等於成熟 mRNA 一定保留它。</p>"
    },
    {
      "title": "10　同一變異患者的基因組 DNA 訊號明顯，異常接合 RNA 訊號卻很弱，能排除剪接異常嗎？",
      "prompt": "<p>同一變異患者的基因組 DNA 訊號明顯，異常接合 RNA 訊號卻很弱，能排除剪接異常嗎？</p>",
      "answer": "<p>不能。異常 RNA 可能迅速降解；需同時考慮採樣組織、表現量和品質管制。</p>"
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
        "title": "聚合反應與啟動",
        "topic": "topic-2",
        "summary": "對照本組原題中的引子、啟動子、σ 因子，辨認題幹指定的步驟與直接作用。",
        "questions": [
          {
            "number": 83,
            "text": "83.基因轉錄作用中,RNA 聚合酶(RNA polymerase)催化的反應不需要下列何者? \n \nA.四種ribonucleoside 5'-triphosphates \nB.引子(primer) \nC.鎂離子 \nD.DNA 模板",
            "regions": [
              {
                "page": 16,
                "rect": [
                  30,
                  33.78,
                  570.22,
                  162.78
                ]
              }
            ],
            "id": "115-2-1-83",
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
            "point": "引子",
            "analysis": "RNA 聚合酶可以由兩個 NTP 啟動新鏈，反應仍需要模板、NTP 與金屬離子。",
            "trap": "「不需引子」與「不需模板」是不同判斷。"
          },
          {
            "number": 86,
            "text": "86.RNA 聚合酶執行轉錄作用時,首先結合的特定DNA 序列稱為: \n \nA.操作子(operator) \nB.抑制因子(repressor) \nC.啟動子(promoter) \nD.誘導子(inducer)",
            "regions": [
              {
                "page": 17,
                "rect": [
                  30,
                  270.81,
                  570.32,
                  399.81
                ]
              }
            ],
            "id": "114-1-1-86",
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
            "point": "啟動子",
            "analysis": "題目問 RNA 聚合酶起始時定位的 DNA 序列，故選 promoter。",
            "trap": "Operator 是調控蛋白結合區，repressor 則是蛋白。"
          },
          {
            "number": 84,
            "text": "84.原核生物RNA聚合酶在進行轉錄延伸作用(elongation)時,下列那一個次單元(subunit)參與最少?\n \nA.α\nB.β\nC.β’\nD.σ",
            "regions": [
              {
                "page": 16,
                "rect": [
                  30,
                  105.9,
                  569.96,
                  233.01
                ]
              }
            ],
            "id": "113-1-1-84",
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
            "point": "σ 因子",
            "analysis": "σ 的代表功能在辨識啟動子；延長時主體催化由核心酶執行。",
            "trap": "題幹特別問延伸且問「最少」，不能只看到 RNA polymerase 就選辨認啟動子的因子。"
          }
        ]
      },
      {
        "id": "group-2",
        "title": "真核聚合酶與轉錄因子",
        "topic": "topic-4",
        "summary": "對照本組原題中的Pol III、TFIIH、TATA box，辨認題幹指定的步驟與直接作用。",
        "questions": [
          {
            "number": 84,
            "text": "84.脊椎動物中,由下列那種酵素合成5S rRNA與tRNA?\nA.RNA polymerase I\n\nB.RNA polymerase II\nC.RNA polymerase III\nD.ribosomal RNase",
            "regions": [
              {
                "page": 12,
                "rect": [
                  30,
                  763.99,
                  570,
                  807
                ]
              },
              {
                "page": 13,
                "rect": [
                  30,
                  28,
                  570,
                  92.11
                ]
              }
            ],
            "id": "108-2-1-84",
            "year": 108,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/108/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=108100&c=301&s=11&q=1&verify=step1-20261013-108100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=108100&y=2019",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/108/2/medicine-1-S.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=S&code=108100&c=301&s=11&q=1&verify=step1-20261013-108100-301-11-S",
            "corrected": false,
            "answerVersion": "S",
            "originalAnswers": [
              "C"
            ],
            "point": "Pol III",
            "analysis": "5S rRNA 與 tRNA 的共同合成者是 Pol III。",
            "trap": "5S 與 5.8S 名字相近但來源不同。"
          },
          {
            "number": 84,
            "text": "84.下列何者不是真核細胞RNA 聚合酶II之TFIIH 次單元所具有的生理功能? \n \nA.三磷酸腺苷的水解(ATP hydrolysis) \nB.轉錄前起始複合體的形成 \nC.具有去氧核糖核酸解旋酶(helicase)與激酶(kinase)的活性 \nD.轉錄作用的終止",
            "regions": [
              {
                "page": 16,
                "rect": [
                  30,
                  414.81,
                  570.32,
                  543.83
                ]
              }
            ],
            "id": "114-2-1-84",
            "year": 114,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/114/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=114090&c=301&s=0101&q=1&verify=step1-20261013-114090-301-0101-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=114090&y=2025",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/114/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=114090&c=301&s=0101&q=1&verify=step1-20261013-114090-301-0101-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "D"
            ],
            "point": "TFIIH",
            "analysis": "TFIIH 參與起始複合體、開放 DNA 與 CTD 磷酸化。列為它生理功能的選項中，終止最不相符。",
            "trap": "看清否定問法。TFIIH 也參與修復，但不因此變成終止因子。"
          },
          {
            "number": 90,
            "text": "90.真核細胞RNA 聚合酶II(RNA polymerase II)會辨認位於轉錄起始位置(transcription start site)上游\n約30 base pairs 的啟動子(promoter),下列何者為最常出現於啟動子的DNA 序列? \nA.TRE(GAGGGACGTACCGCA) \nB.GC box(GGGCGG) \nC.TATA box(TATAAAA) \nD.Octamer(ATTTGCAT)",
            "regions": [
              {
                "page": 16,
                "rect": [
                  30,
                  628.43,
                  587,
                  757
                ]
              },
              {
                "page": 17,
                "rect": [
                  30,
                  28,
                  587,
                  31.55
                ]
              }
            ],
            "id": "115-1-1-90",
            "year": 115,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/115/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=115020&c=301&s=0101&q=1&verify=step1-20261013-115020-301-0101-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=115020&y=2026",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/115/1/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=115020&c=301&s=0101&q=1&verify=step1-20261013-115020-301-0101-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "C"
            ],
            "point": "TATA box",
            "analysis": "題幹給上游約 30 bp，對應典型 TATA box，TBP 參與辨認。",
            "trap": "這是依題目位置辨認，不表示所有真核啟動子都含 TATA。"
          }
        ]
      },
      {
        "id": "group-3",
        "title": "端點加工與剪接",
        "topic": "topic-6",
        "summary": "對照本組原題中的帽的區室、加尾訊號、第一型內含子、3′ 端穩定性，辨認題幹指定的步驟與直接作用。",
        "questions": [
          {
            "number": 86,
            "text": "86.下列關於真核細胞中,mRNA 在5' 端會經過加帽(capping)修飾的敘述,何者錯誤? \nA.可保護mRNA 不被核酸外切酶(exonuclease)所水解 \nB.可被eIF4E 辨識 \nC.可幫助mRNA 之轉譯(translation) \nD.修飾反應主要發生於內質網(ER)及高基氏體(Golgi apparatus)內",
            "regions": [
              {
                "page": 16,
                "rect": [
                  30,
                  216.76,
                  570.32,
                  345.76
                ]
              }
            ],
            "id": "112-1-1-86",
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
            "point": "帽的區室",
            "analysis": "加帽在細胞核內與轉錄耦合。保護末端、與 eIF4E 辨識及轉譯有關都正確。",
            "trap": "ER 與 Golgi 容易讓人聯想到加工，但它們加工的典型對象是蛋白與脂質。"
          },
          {
            "number": 87,
            "text": "87.下列何序列最可能含有真核細胞RNA polymerase II聚腺苷酸化訊號(polyadenylation signal)?\n \nA.5'-AUUCAUGUGCGGCGCGCCGCAGCUCCUAGCUUUUU-3'\nB.5'-GUGCGGCGAUUCAUCGCCGCAGCUCCUAGCUUUUU-3'\nC.5'-GUGCGGCGAUUCAUCGCCGCUUUUUAGCUCCUAGC-3'\nD.5'-AAAAAUUUUUUAAUAAAAGGGGGGGGUUUUUUGG-3'",
            "regions": [
              {
                "page": 16,
                "rect": [
                  30,
                  445.43,
                  569.96,
                  572.54
                ]
              }
            ],
            "id": "111-2-1-87",
            "year": 111,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/111/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=111100&c=301&s=11&q=1&verify=step1-20261013-111100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=111100&y=2022",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/111/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=111100&c=301&s=11&q=1&verify=step1-20261013-111100-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "D"
            ],
            "point": "加尾訊號",
            "analysis": "在選項中尋找連續的 AAUAAA 六核苷酸，D 含有該訊號。",
            "trap": "單純很多 A 或很多 U 都不等同該辨識序列。"
          },
          {
            "number": 83,
            "text": "83.在第一型內含子(group I intron)剪接(splicing)的過程中,需要下列何者協助? \n \nA.鳥嘌呤核苷(guanine nucleoside)或鳥嘌呤核苷酸(guanine nucleotide) \nB.接合酶(ligase) \nC.小核RNAs(small nuclear RNAs)和接合酶(ligase) \nD.ATP、NAD+和小核RNAs(small nuclear RNAs)",
            "regions": [
              {
                "page": 12,
                "rect": [
                  30,
                  590.05,
                  570,
                  695.05
                ]
              }
            ],
            "id": "107-2-1-83",
            "year": 107,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/107/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=107100&c=301&s=11&q=1&verify=step1-20261013-107100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=107100&y=2018",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/107/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=107100&c=301&s=11&q=1&verify=step1-20261013-107100-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "A"
            ],
            "point": "第一型內含子",
            "analysis": "第一型內含子由外來 guanosine 或其核苷酸的 3′-OH 發動第一次轉酯。",
            "trap": "不要選剪接體的 snRNA，也不要和內部 A 形成套索混在一起。"
          },
          {
            "number": 86,
            "text": "86.關於真核生物基因表現的敘述,下列何者錯誤? \n \nA.mRNA的表現主要是由RNA polymerase II負責 \nB.mRNA的3'端會進行磷酸化(phosphorylation)以穩定其結構 \nC.DNA上之CpG island的甲基化可造成基因無法表現 \nD.histones上的乙醯化程度可影響基因的表現",
            "regions": [
              {
                "page": 13,
                "rect": [
                  30,
                  149.17,
                  570,
                  254.17
                ]
              }
            ],
            "id": "107-2-1-86",
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
            "point": "3′ 端穩定性",
            "analysis": "典型真核 mRNA 在切割後加 poly(A) 尾；B 把主要穩定機制寫成 3′ 端磷酸化。",
            "trap": "辨認成熟 RNA 末端真正的化學修飾。"
          }
        ]
      }
    ]
  }
});
