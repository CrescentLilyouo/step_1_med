biochemistryChapters.push({
  "id": "hormone-signaling",
  "number": "27",
  "title": "荷爾蒙與細胞訊息傳遞",
  "summary": "先辨認受體，再追第二信使、效應酵素與關閉機制。",
  "sources": "Harper’s Illustrated Biochemistry, 31st ed.；本站歷屆題庫與各題考選部答案。",
  "references": "<p>Harper’s Illustrated Biochemistry, 31st ed.；本站歷屆題庫與各題考選部答案。</p>",
  "readingIntro": "先辨認受體，再追第二信使、效應酵素與關閉機制。",
  "figure": "<div class=\"table-scroll\" tabindex=\"0\"><table><tr><th>受體</th><th>中繼步驟</th><th>典型終點</th></tr><tr><td>Gs 型 GPCR</td><td>cAMP → PKA</td><td>肝醣動員</td></tr><tr><td>Gq 型 GPCR</td><td>IP₃、DAG</td><td>Ca²⁺ 釋出、PKC</td></tr><tr><td>胰島素受體</td><td>IRS → PI3K → Akt</td><td>GLUT4 移位</td></tr><tr><td>ANP 受體</td><td>cGMP → PKG</td><td>血管舒張</td></tr></table></div>",
  "sections": [
    {
      "id": "topic-1",
      "title": "荷爾蒙如何找到目標細胞",
      "html": "<p>同一種荷爾蒙可到達許多器官，反應卻取決於細胞表現哪種受體與效應蛋白。水溶性胜肽通常從膜面傳訊；類固醇可經細胞內受體改變轉錄。甲狀腺素雖衍生自胺基酸，主要機轉也屬核受體。遇到題目先圈出配體，再問受體位在哪一側。</p>"
    },
    {
      "id": "topic-2",
      "title": "外界刺激不限於荷爾蒙",
      "html": "<p>內分泌訊號經血流作用於遠端，旁分泌作用於附近，自分泌作用於產生訊號的細胞本身。三者按傳遞距離分類，不能據此推斷受體家族。機械拉伸也能開啟機械敏感通道，引起離子流動；同一細胞可整合化學與物理刺激。</p>"
    },
    {
      "id": "topic-3",
      "title": "Gs 與 Gi 的方向",
      "html": "<p>GPCR 活化後促進 Gα 釋放 GDP、結合 GTP。Gs 活化 adenylyl cyclase，將 ATP 轉成 cAMP，cAMP 結合 PKA 的調控次單元，使催化次單元能磷酸化受質。Gi 則常抑制 adenylyl cyclase。Gα 的 GTP 水解終止上游訊號，phosphodiesterase 分解已產生的 cAMP。</p>"
    },
    {
      "id": "topic-4",
      "title": "Gq 把訊號分送到膜與胞質",
      "html": "<p>Gq 活化 PLCβ，把膜上的 PIP₂ 水解成 IP₃ 與 DAG。IP₃ 可擴散至內質網，開啟 IP₃ 受體鈣通道；DAG 留在膜中。典型 conventional PKC 在 DAG 與鈣共同支持下活化。Ca²⁺ 也可結合 calmodulin 調節其他酵素。</p>"
    },
    {
      "id": "topic-5",
      "title": "cGMP 的兩種入口",
      "html": "<p>ANP 可結合本身具有 guanylyl cyclase 活性的膜受體，由 GTP 形成 cGMP。NO 則可擴散進入鄰近細胞，活化含 heme 的可溶性 guanylyl cyclase。兩者可共同提高 cGMP 與 PKG 訊號，但被啟動的酵素不在相同區室。</p>"
    },
    {
      "id": "topic-6",
      "title": "胰島素受體與 GLUT4",
      "html": "<p>胰島素受體是具有內在 tyrosine kinase 活性的跨膜受體。配體結合促使胞質端磷酸化，IRS 招募 PI3K，使膜上 PIP₃ 增加，並促進 Akt 活化。骨骼肌和脂肪細胞可快速將既有 GLUT4 囊泡移至膜面；這種分鐘內的反應不必等待新轉錄。</p>"
    },
    {
      "id": "topic-7",
      "title": "從 Akt 推到肝醣",
      "html": "<p>GSK3 的名字是 glycogen synthase kinase：它磷酸化 glycogen synthase（GS）而抑制後者。Akt 磷酸化 GSK3 使它失活，等於移除對 GS 的抑制，配合磷酸酶使 GS 較活躍。解這種雙重負調控題，先分清 GS 是受質、GSK3 才是 kinase。</p>"
    },
    {
      "id": "topic-8",
      "title": "Ras 與 MAPK",
      "html": "<p>生長因子受體可透過 adaptor 與 GEF 促使 Ras 交換 GDP 為 GTP，再傳到 Raf、MEK、ERK，改變轉錄及增殖反應。Ras 是小型單體 G 蛋白，與異三聚體 G 蛋白都用 GDP/GTP 切換，但夥伴和效應酵素不同。</p>"
    },
    {
      "id": "topic-9",
      "title": "JAK–STAT 與核受體",
      "html": "<p>生長激素、泌乳素等可藉受體相關 JAK 傳訊。受體缺乏內在 kinase，依靠 JAK 磷酸化受體與 STAT；STAT 二聚後進核。類固醇則由配體結合的受體直接參與轉錄調控。兩者都可能改變 mRNA，所以應靠上游步驟區分。</p>"
    },
    {
      "id": "topic-10",
      "title": "反應為何隨時間減弱",
      "html": "<p>持續刺激 β-腎上腺素受體時，GRK 可磷酸化受體的胞質側，招募 β-arrestin，降低與 G 蛋白偶聯並促進內吞。部分受體在內體去磷酸化後回收，另一些可被送去降解。配體仍在時反應減弱，可由受體去敏感化解釋。</p>"
    },
    {
      "id": "topic-11",
      "title": "訊號放大與時間尺度",
      "html": "<p>少量配體結合可驅動多個 G 蛋白，每個效應酵素又可產生多個第二信使，最後由多層酵素改變通量。放大提供靈敏性，也需要清除機制限制作用。若反應在數秒內發生，先考慮既有通道、酵素或蛋白的位置改變；若需合成新蛋白，通常有較長延遲。</p>"
    },
    {
      "id": "topic-12",
      "title": "用旁路刺激定位故障",
      "html": "<p>比較配體與直接提高第二信使所引起的反應。若刺激受體無效，但直接提高 cAMP 還能促進終端酵素活性，故障較可能在受體、G 蛋白或 cAMP 產生步驟。若兩者都無效，還須考慮 PKA、受質或終端測量的問題。單一結果無法區分上游的每個蛋白。</p><figure><div class=\"table-scroll\"><svg viewBox=\"0 0 720 232\" style=\"width:100%;min-width:490px\" role=\"img\" aria-label=\"胞外，膜或胞內受體，判斷配體與受體位置；傳遞，信使或 kinase，尋找直接受質；效應，酵素、通道或轉錄，判斷方向與所需時間；終止，水解、去磷酸化，區分關閉與受體回收\"><rect x=\"8\" y=\"4\" width=\"700\" height=\"47\" rx=\"9\" fill=\"#eef2fa\"/><g font-family=\"sans-serif\" font-size=\"17\" fill=\"#193b43\"><text x=\"24\" y=\"34\">胞外</text><text x=\"167\" y=\"34\">膜或胞內受體</text><text x=\"420\" y=\"34\">判斷配體與受體位置</text></g><rect x=\"8\" y=\"59\" width=\"700\" height=\"47\" rx=\"9\" fill=\"#edf6f2\"/><g font-family=\"sans-serif\" font-size=\"17\" fill=\"#193b43\"><text x=\"24\" y=\"89\">傳遞</text><text x=\"167\" y=\"89\">信使或 kinase</text><text x=\"420\" y=\"89\">尋找直接受質</text></g><rect x=\"8\" y=\"114\" width=\"700\" height=\"47\" rx=\"9\" fill=\"#eef2fa\"/><g font-family=\"sans-serif\" font-size=\"17\" fill=\"#193b43\"><text x=\"24\" y=\"144\">效應</text><text x=\"167\" y=\"144\">酵素、通道或轉錄</text><text x=\"420\" y=\"144\">判斷方向與所需時間</text></g><rect x=\"8\" y=\"169\" width=\"700\" height=\"47\" rx=\"9\" fill=\"#edf6f2\"/><g font-family=\"sans-serif\" font-size=\"17\" fill=\"#193b43\"><text x=\"24\" y=\"199\">終止</text><text x=\"167\" y=\"199\">水解、去磷酸化</text><text x=\"420\" y=\"199\">區分關閉與受體回收</text></g></svg></div><figcaption>先辨認受體，再追第二信使、效應酵素與關閉機制。</figcaption></figure>"
    }
  ],
  "recalls": [
    [
      "類固醇作用一定要先活化膜面 GPCR 嗎？",
      "經典作用由細胞內受體結合配體，調控特定基因表現。"
    ],
    [
      "血管內皮感受到血流剪力，這算細胞訊號嗎？",
      "算。力學刺激能改變通道或細胞骨架相關訊號，並不要求先有化學配體。"
    ],
    [
      "阻斷 cAMP 分解會如何改變短暫刺激後的反應？",
      "相同合成量下，cAMP 清除變慢，PKA 訊號可延長；這不同於增加受體數目。"
    ],
    [
      "題目問 PLC 的「直接產物」，鈣可以選嗎？",
      "直接產物是 IP₃ 和 DAG；鈣升高是 IP₃ 作用於內質網之後的結果。"
    ],
    [
      "ANP 與升糖素何者常用 cGMP？",
      "ANP。升糖素在肝細胞的典型路徑為 Gs、cAMP、PKA。"
    ],
    [
      "看到肝細胞作用時，可以用 GLUT4 移位解釋嗎？",
      "肝臟以 GLUT2 為主要葡萄糖轉運者；胰島素仍經受體改變肝內酵素與代謝通量。"
    ],
    [
      "若 GSK3 持續活化，肝醣合成會偏哪個方向？",
      "其他條件相同，GS 較易被磷酸化而受抑制，肝醣合成下降。"
    ],
    [
      "GAP 的「活化」指活化哪件事？",
      "促進 Ras 自身 GTPase 的水解反應，結果是 Ras 回到不活躍的 GDP 型。"
    ],
    [
      "題幹說「最後調控轉錄」足以選核受體嗎？",
      "不夠。膜受體也能經 STAT 或 MAPK 改變轉錄，要看最初的受體與配體。"
    ],
    [
      "若選項寫 kinase 從胞質磷酸化受體胞外 N 端，哪裡矛盾？",
      "酵素接觸的是受體胞質側；典型 β 受體的 N 端位於胞外。"
    ],
    [
      "相同配體引起一快一慢兩波反應是否矛盾？",
      "不矛盾。同一訊號可先改變既有蛋白，後續再透過轉錄與蛋白合成維持較長期效應。"
    ],
    [
      "cAMP 能救回反應，可直接證明受體基因突變嗎？",
      "只能把問題縮小到 cAMP 上游或供應不足，尚須區分受體、偶聯與 cyclase。"
    ]
  ],
  "questions": [
    {
      "title": "1　刺激後 IP₃ 增加但鈣峰消失，PLC 一定故障嗎？",
      "prompt": "<p>刺激後 IP₃ 增加但鈣峰消失，PLC 一定故障嗎？</p>",
      "answer": "<p>IP₃ 已能形成，故應進一步檢查內質網鈣存量、IP₃ 受體與鈣清除。</p>"
    },
    {
      "title": "2　為何同為腎上腺素，在不同器官的反應不同？",
      "prompt": "<p>為何同為腎上腺素，在不同器官的反應不同？</p>",
      "answer": "<p>不同組織表現不同受體亞型，例如 β 型常偶聯 Gs、α₁ 常偶聯 Gq。</p>"
    },
    {
      "title": "3　Gα 能結合 GTP 卻無法水解，最直接的時間變化是什麼？",
      "prompt": "<p>Gα 能結合 GTP 卻無法水解，最直接的時間變化是什麼？</p>",
      "answer": "<p>活化態延長。最後效應方向要看它是 Gs 還是 Gi。</p>"
    },
    {
      "title": "4　膜受體被活化後，GTP 可有哪兩種不同用途？",
      "prompt": "<p>膜受體被活化後，GTP 可有哪兩種不同用途？</p>",
      "answer": "<p>可結合 G 蛋白作開關，也可被 guanylyl cyclase 用來合成 cGMP。</p>"
    },
    {
      "title": "5　同時見到 GLUT4 到膜面與糖攝取增加，必須先轉錄新的 GLUT4 嗎？",
      "prompt": "<p>同時見到 GLUT4 到膜面與糖攝取增加，必須先轉錄新的 GLUT4 嗎？</p>",
      "answer": "<p>不用。既有囊泡重新定位足以快速增加膜面轉運量。</p>"
    },
    {
      "title": "6　若 GS 和 GSK3 都被描述成磷酸化，能用同一句話判定肝醣合成嗎？",
      "prompt": "<p>若 GS 和 GSK3 都被描述成磷酸化，能用同一句話判定肝醣合成嗎？</p>",
      "answer": "<p>先辨認被修飾的是誰及哪個位點。抑制 GSK3 可間接促進 GS，而磷酸化 GS 常抑制它。</p>"
    },
    {
      "title": "7　受體本身沒有 kinase 但刺激後 STAT 磷酸化，可如何解釋？",
      "prompt": "<p>受體本身沒有 kinase 但刺激後 STAT 磷酸化，可如何解釋？</p>",
      "answer": "<p>受體可招募 JAK，利用受體相關 kinase 完成磷酸化。</p>"
    },
    {
      "title": "8　PDE 抑制與磷酸酶抑制是同一步嗎？",
      "prompt": "<p>PDE 抑制與磷酸酶抑制是同一步嗎？</p>",
      "answer": "<p>PDE 水解 cyclic nucleotide；蛋白 phosphatase 移除蛋白上的磷酸基。</p>"
    },
    {
      "title": "9　配體移除後仍有反應，是不是受體還有配體占據？",
      "prompt": "<p>配體移除後仍有反應，是不是受體還有配體占據？</p>",
      "answer": "<p>不一定。第二信使或已被磷酸化的受質可能尚未回到基線。</p>"
    },
    {
      "title": "10　細胞中可見內吞的受體，能否推論受體蛋白全被降解？",
      "prompt": "<p>細胞中可見內吞的受體，能否推論受體蛋白全被降解？</p>",
      "answer": "<p>不能。部分會去磷酸化並回收至膜面，要再看受體去向與總量。</p>"
    }
  ],
  "exams": {
    "bankCount": 1022,
    "yearMin": 96,
    "yearMax": 115,
    "note": "每組題數只代表本章精選。",
    "groups": [
      {
        "id": "group-1",
        "topic": "topic-1",
        "title": "荷爾蒙如何找到目標細胞",
        "summary": "類固醇作用一定要先活化膜面 GPCR 嗎？",
        "questions": [
          {
            "number": 98,
            "text": "98.下列何者與類固醇激素(steroid hormone)之作用方式無關? \nA.激素會與受體形成複合體(hormone-receptor complexes) \nB.受體主要在細胞膜表面以磷酸化方式活化 \nC.受體具備與特殊DNA 序列結合之特性 \nD.受體與激素結合後可活化或抑制基因轉錄",
            "regions": [
              {
                "page": 18,
                "rect": [
                  30,
                  243.76,
                  570.32,
                  372.76
                ]
              }
            ],
            "id": "112-1-1-98",
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
            "point": "荷爾蒙如何找到目標細胞",
            "analysis": "類固醇的經典受體位於細胞內，B 所稱主要在膜面與此不符。",
            "trap": "經典作用由細胞內受體結合配體，調控特定基因表現。"
          }
        ]
      },
      {
        "id": "group-2",
        "topic": "topic-2",
        "title": "外界刺激不限於荷爾蒙",
        "summary": "血管內皮感受到血流剪力，這算細胞訊號嗎？",
        "questions": [
          {
            "number": 97,
            "text": "97.下列有關細胞訊號傳遞的敘述,何者最不適當? \nA.多細胞生物體可藉由細胞間互相交換眾多不同的訊號,來引發各種合適的反應 \nB.細胞和生物體只會偵測環境中的化學訊號,而物理訊號則無法啟動細胞傳訊機制 \nC.訊號分子是可被特異受體偵測到的訊息,可引發細胞做出適當反應 \nD.將訊號分子轉換成化學變化,即稱為訊息傳導(signal transduction),乃是活細胞普遍存在的一種特性",
            "regions": [
              {
                "page": 18,
                "rect": [
                  30,
                  31.55,
                  587,
                  152.87
                ]
              }
            ],
            "id": "115-1-1-97",
            "year": 115,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/115/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=115020&c=301&s=0101&q=1&verify=step1-20261013-115020-301-0101-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=115020&y=2026",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/115/1/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=115020&c=301&s=0101&q=1&verify=step1-20261013-115020-301-0101-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "B"
            ],
            "point": "外界刺激不限於荷爾蒙",
            "analysis": "細胞能以機械敏感通道等機制回應物理刺激，故排除物理訊號的 B 錯誤。",
            "trap": "算。力學刺激能改變通道或細胞骨架相關訊號，並不要求先有化學配體。"
          }
        ]
      },
      {
        "id": "group-3",
        "topic": "topic-3",
        "title": "Gs 與 Gi 的方向",
        "summary": "阻斷 cAMP 分解會如何改變短暫刺激後的反應？",
        "questions": [
          {
            "number": 96,
            "text": "96.下列受體系統何者最常透過環腺苷酸(c-AMP)當作訊號傳遞之第二信差(secondary messenger)? \n \nA.G 蛋白偶聯受體(G protein-coupled receptor) \nB.受體酪胺酸激酶(receptor tyrosine kinase) \nC.核受體(nuclear receptor) \nD.配體門控離子通道(ligand-gated ion channel)",
            "regions": [
              {
                "page": 19,
                "rect": [
                  30,
                  114.78,
                  570.32,
                  243.78
                ]
              }
            ],
            "id": "114-1-1-96",
            "year": 114,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/114/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=114020&c=301&s=0101&q=1&verify=step1-20261013-114020-301-0101-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=114020&y=2025",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/114/1/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=114020&c=301&s=0101&q=1&verify=step1-20261013-114020-301-0101-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "A"
            ],
            "point": "Gs 與 Gi 的方向",
            "analysis": "Gs／Gi 偶聯 GPCR 可調控 adenylyl cyclase。這不表示每一種 GPCR 都使用 cAMP。",
            "trap": "相同合成量下，cAMP 清除變慢，PKA 訊號可延長；這不同於增加受體數目。"
          }
        ]
      },
      {
        "id": "group-4",
        "topic": "topic-4",
        "title": "Gq 把訊號分送到膜與胞質",
        "summary": "題目問 PLC 的「直接產物」，鈣可以選嗎？",
        "questions": [
          {
            "number": 99,
            "text": "99.磷脂酶C(phospholipase C)水解phosphatidylinositol 4,5-bisphosphate(PIP2),直接產生的次級訊\n息傳遞者(second messenger)包括下列何者?\n \nA.二醯基甘油(diacylglycerol)\nB.磷脂醯肌醇(phosphatidylinositol)\nC.cAMP\nD.cGMP",
            "regions": [
              {
                "page": 18,
                "rect": [
                  30,
                  156.9,
                  569.96,
                  307.65
                ]
              }
            ],
            "id": "113-2-1-99",
            "year": 113,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/113/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=113090&c=301&s=11&q=1&verify=step1-20261013-113090-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=113090&y=2024",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/113/2/medicine-1-S.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=S&code=113090&c=301&s=11&q=1&verify=step1-20261013-113090-301-11-S",
            "corrected": false,
            "answerVersion": "S",
            "originalAnswers": [
              "A"
            ],
            "point": "Gq 把訊號分送到膜與胞質",
            "analysis": "PIP₂ 一分為二，直接得到膜內 DAG 和可擴散的 IP₃。Ca²⁺ 是後續由儲庫釋出。",
            "trap": "直接產物是 IP₃ 和 DAG；鈣升高是 IP₃ 作用於內質網之後的結果。"
          }
        ]
      },
      {
        "id": "group-5",
        "topic": "topic-5",
        "title": "cGMP 的兩種入口",
        "summary": "ANP 與升糖素何者常用 cGMP？",
        "questions": [
          {
            "number": 97,
            "text": "97.下列何種分子引發的訊息傳遞通常不使用cAMP作為其主要的second messenger?\n \nA.atrial natriuretic factor(ANF)\nB.glucagon\nC.dopamine\nD.serotonin",
            "regions": [
              {
                "page": 18,
                "rect": [
                  30,
                  334.26,
                  569.96,
                  461.37
                ]
              }
            ],
            "id": "113-1-1-97",
            "year": 113,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/113/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=113020&c=301&s=11&q=1&verify=step1-20261013-113020-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=113020&y=2024",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/113/1/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=113020&c=301&s=11&q=1&verify=step1-20261013-113020-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "A"
            ],
            "point": "cGMP 的兩種入口",
            "analysis": "ANF 即 ANP，典型膜受體具有 guanylyl cyclase 活性，第二信使為 cGMP。",
            "trap": "ANP。升糖素在肝細胞的典型路徑為 Gs、cAMP、PKA。"
          }
        ]
      },
      {
        "id": "group-6",
        "topic": "topic-6",
        "title": "胰島素受體與 GLUT4",
        "summary": "看到肝細胞作用時，可以用 GLUT4 移位解釋嗎？",
        "questions": [
          {
            "number": 97,
            "text": "97.下列何種訊息分子通常不會直接結合於G protein-coupled receptor(GPCR)來進行訊息傳遞? \nA.angiotensin \nB.prostaglandin \nC.epinephrine \nD.insulin",
            "regions": [
              {
                "page": 18,
                "rect": [
                  30,
                  141.55,
                  570,
                  270.55
                ]
              }
            ],
            "id": "112-2-1-97",
            "year": 112,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/112/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=112100&c=301&s=11&q=1&verify=step1-20261013-112100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=112100&y=2023",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/112/2/medicine-1-S.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=S&code=112100&c=301&s=11&q=1&verify=step1-20261013-112100-301-11-S",
            "corrected": false,
            "answerVersion": "S",
            "originalAnswers": [
              "D"
            ],
            "point": "胰島素受體與 GLUT4",
            "analysis": "Insulin 直接結合受體 tyrosine kinase，與其他選項經典的 GPCR 路徑不同。",
            "trap": "肝臟以 GLUT2 為主要葡萄糖轉運者；胰島素仍經受體改變肝內酵素與代謝通量。"
          }
        ]
      },
      {
        "id": "group-7",
        "topic": "topic-7",
        "title": "從 Akt 推到肝醣",
        "summary": "若 GSK3 持續活化，肝醣合成會偏哪個方向？",
        "questions": [
          {
            "number": 95,
            "text": "95.關於胰島素(insulin)訊息如何活化肝臟細胞的肝醣合成酶(glycogen synthase, GS)的活性,下列描述\n何者最合理? \n \nA.造成肝醣合成激酶3(glycogen synthase kinase 3, GSK3)去磷酸化,提高GSK3 激酶活性,活化GS \nB.造成肝醣合成激酶3(glycogen synthase kinase 3, GSK3)磷酸化,提高GSK3 激酶活性,活化GS \nC.造成肝醣合成激酶3(glycogen synthase kinase 3, GSK3)去磷酸化,抑制GSK3 激酶活性,活化GS \nD.造成肝醣合成激酶3(glycogen synthase kinase 3, GSK3)磷酸化,抑制GSK3 激酶活性,活化GS",
            "regions": [
              {
                "page": 18,
                "rect": [
                  30,
                  525.83,
                  570.32,
                  675.86
                ]
              }
            ],
            "id": "114-2-1-95",
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
            "point": "從 Akt 推到肝醣",
            "analysis": "Akt 磷酸化並抑制 GSK3，使 GS 較不受抑制。D 同時符合修飾方向與酵素活性方向。",
            "trap": "其他條件相同，GS 較易被磷酸化而受抑制，肝醣合成下降。"
          }
        ]
      },
      {
        "id": "group-8",
        "topic": "topic-8",
        "title": "Ras 與 MAPK",
        "summary": "GAP 的「活化」指活化哪件事？",
        "questions": [
          {
            "number": 98,
            "text": "98.GTP 酶活化蛋白(GTPase activator proteins, GAPs)最可能直接結合下列何者而調節訊息傳遞? \nA.環鳥苷單磷酸(cGMP) \nB.Ras 蛋白 \nC.二醯基甘油(diacylglycerol) \nD.腺苷酸環化酶(adenylyl cyclase)",
            "regions": [
              {
                "page": 18,
                "rect": [
                  30,
                  270.55,
                  570,
                  399.55
                ]
              }
            ],
            "id": "112-2-1-98",
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
            "point": "Ras 與 MAPK",
            "analysis": "GAP 直接促進 Ras 的 GTP 水解；DAG 和 cGMP 都不是具有 GTPase 活性的蛋白。",
            "trap": "促進 Ras 自身 GTPase 的水解反應，結果是 Ras 回到不活躍的 GDP 型。"
          }
        ]
      },
      {
        "id": "group-9",
        "topic": "topic-9",
        "title": "JAK–STAT 與核受體",
        "summary": "題幹說「最後調控轉錄」足以選核受體嗎？",
        "questions": [
          {
            "number": 95,
            "text": "95.下列荷爾蒙(hormones),何者不需藉由細胞膜上受體來傳遞訊號至胞內? \n A.甲狀腺刺激素(thyroid-stimulating hormone) \n\nB.腎上腺素(adrenaline) \nC.濾泡刺激素(follicle-stimulating hormone) \nD.甲狀腺素(thyroid hormones)",
            "regions": [
              {
                "page": 18,
                "rect": [
                  30,
                  753.85,
                  570.32,
                  807.04
                ]
              },
              {
                "page": 19,
                "rect": [
                  30,
                  28,
                  570.32,
                  114.78
                ]
              }
            ],
            "id": "114-1-1-95",
            "year": 114,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/114/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=114020&c=301&s=0101&q=1&verify=step1-20261013-114020-301-0101-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=114020&y=2025",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/114/1/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=114020&c=301&s=0101&q=1&verify=step1-20261013-114020-301-0101-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "D"
            ],
            "point": "JAK–STAT 與核受體",
            "analysis": "甲狀腺素可透過核受體調節轉錄；TSH、FSH 與腎上腺素的典型作用依靠膜受體。",
            "trap": "不夠。膜受體也能經 STAT 或 MAPK 改變轉錄，要看最初的受體與配體。"
          }
        ]
      },
      {
        "id": "group-10",
        "topic": "topic-10",
        "title": "反應為何隨時間減弱",
        "summary": "若選項寫 kinase 從胞質磷酸化受體胞外 N 端，哪裡矛盾？",
        "questions": [
          {
            "number": 96,
            "text": "96.下列有關細胞持續存在腎上腺素時,對於β-腎上腺素受體(receptor)之去敏感化(desensitization)的\n描述,何者錯誤? \n \nA.腎上腺素結合到受體促進Gsα與Gsβγ的分開,Gsβγ會招引β-adrenergic receptor kinase(βARK)\n來將β-腎上腺素受體位於胺基(amino)端的絲胺酸(serine)磷酸化 \nB.β-arrestin 會結合於β-腎上腺素受體上被磷酸化之絲胺酸(serine),引發細胞內吞(endocytosis)作\n用 \nC.結合於β-腎上腺素受體的β-arrestin 在被內吞進入細胞內的囊泡(vesicles)後,會與β-腎上腺素受體\n分開 \nD.β-腎上腺素受體在其絲胺酸(serine)於胞內囊泡(vesicles)中被去磷酸化(dephosphorylated)後,\n可再度被運回細胞膜上,解除去敏感化",
            "regions": [
              {
                "page": 18,
                "rect": [
                  30,
                  291.78,
                  570.22,
                  525.78
                ]
              }
            ],
            "id": "115-2-1-96",
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
            "point": "反應為何隨時間減弱",
            "analysis": "A 的錯點在受體端點。GRK 對胞質側 Ser/Thr 作用，典型 β 受體 N 端在胞外。",
            "trap": "酵素接觸的是受體胞質側；典型 β 受體的 N 端位於胞外。"
          }
        ]
      }
    ]
  }
});
