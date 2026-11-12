biochemistryChapters.push({
  "id": "respiratory-chain",
  "number": "07",
  "title": "電子傳遞鏈與氧化磷酸化",
  "summary": "從機制與能量收支重新建立理解，配合算例、比較表與可追溯歷屆原題。",
  "sources": "Harper’s Illustrated Biochemistry, 31st ed. 生物能量學、生物氧化、呼吸鏈與糖解相關主題；補充來源見章末。",
  "references": "<p>本章為原創教學整理；歷屆題取自既有題庫，答案欄位保留原版本，解析另行撰寫。ATP產率等使用明示的教學近似，作題依題幹條件。</p><p>補充閱讀：<a href=\"https://www.ncbi.nlm.nih.gov/books/NBK9885/\">The Mechanism of Oxidative Phosphorylation</a>；<a href=\"https://www.ncbi.nlm.nih.gov/books/NBK482303/\">Biochemistry, Glycolysis</a>。正文以教學重組為主，非逐段譯文。</p>",
  "sections": [
    {
      "id": "topic-1",
      "title": "空間地圖：先認膜的兩側",
      "html": "<p>電子傳遞鏈與ATP\nsynthase位於粒線體內膜。內膜將基質與膜間腔隔開，是維持質子電化學梯度的重要屏障；外膜較易讓小分子通過，不能代替內膜的角色。ATP\nsynthase的F₁催化頭朝基質，ATP生成位置與質子回流方向因此可一起記。</p>\n<p>電子傳遞釋出的能量把H⁺由基質移向膜間腔；H⁺再沿電化學勢回到基質時可驅動ATP合成。前一個是建立梯度，後一個是使用梯度，國考最常把兩個方向混在一起。</p>\n<p>膜間腔相對較正、較酸，基質相對較負、較鹼。質子動力同時包含膜電位與濃度差，不是只有pH差。若內膜變得對H⁺容易漏，電子仍可能傳遞，但能量就難以保存為ATP。</p>\n"
    },
    {
      "id": "topic-2",
      "title": "路徑總覽：I與II不是串聯",
      "html": "<p>NADH把電子送入complex I，succinate氧化則經complex\nII；兩者都可把電子送向CoQ，再到III、cytochrome\nc、IV，最後還原O₂成水。Complex\nII不是由I接收電子後再送III的下一站，這是最重要的拓樸辨認。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>元件</th>\n<th>電子來源與去向</th>\n<th>泵出H⁺？</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>I</td>\n<td>NADH→CoQ</td>\n<td>是</td>\n</tr>\n<tr class=\"even\">\n<td>II</td>\n<td>Succinate經結合的FAD/Fe-S→CoQ</td>\n<td>否</td>\n</tr>\n<tr class=\"odd\">\n<td>CoQ</td>\n<td>內膜中的可移動電子載體→III</td>\n<td>本身不是獨立蛋白幫浦</td>\n</tr>\n<tr class=\"even\">\n<td>III</td>\n<td>QH₂→cytochrome c</td>\n<td>是，透過Q循環的整體效果</td>\n</tr>\n<tr class=\"odd\">\n<td>Cytochrome c</td>\n<td>III→IV，單電子傳遞</td>\n<td>否</td>\n</tr>\n<tr class=\"even\">\n<td>IV</td>\n<td>Cytochrome c→O₂</td>\n<td>是，並消耗基質質子生成水</td>\n</tr>\n</tbody>\n</table></div>\n<p>CoQ為脂溶性，可在膜中移動並處理兩電子與質子；cytochrome\nc位於內膜外側、以heme進行單電子傳遞。不能因兩者都是移動載體就當作相同性質。</p>\n"
    },
    {
      "id": "topic-3",
      "title": "各複合體的重點與計量",
      "html": "<p>Complex I含FMN及Fe-S等傳遞中心；II就是succinate\ndehydrogenase，同時參與TCA與電子傳遞，含結合型FAD但不泵質子。III將Q系統與單電子cytochrome\nc連接。IV的金屬中心完成氧還原，避免把氧只停留在高度反應性的部分還原狀態。</p>\n<p>常用每一對電子的教學計量為I泵4、III整體轉移4、IV泵2個H⁺，NADH合計10；由II進入而繞過I時約6。必須標示「每兩電子」：若按一個O₂接受四電子計算，IV的泵質子數便加倍。不能把不同基準的數字放在同一欄比較。</p>\n<p>IV除了泵出去的H⁺，還使用基質的化學質子形成水；兩者不能混算成全部跨膜泵出。O₂最終成H₂O，並非直接成CO₂；CO₂主要來自PDH、TCA等脫羧反應。</p>\n"
    },
    {
      "id": "topic-4",
      "title": "ATP synthase與呼吸控制",
      "html": "<p>ATP\nsynthase的F₀部分提供質子通路並耦合旋轉，F₁利用構形改變完成ADP、Pi結合與ATP生成／釋放。它不是把電子直接交給ADP，也不是簡單H⁺與Pi的同向運輸器。若能量條件反轉，酵素可具有ATP水解驅動質子轉運的能力，細胞有調節機制避免不必要耗損。</p>\n<p>當ADP不足，ATP合成變慢、梯度較高，電子傳遞面對較大的回壓，耗氧下降；加入ADP可促進ATP合成，H⁺回流增加，電子傳遞與耗氧加速。這是耦合粒線體常見的acceptor\ncontrol。</p>\n<p>因此耗氧量不是單純由氧濃度決定；還受受質、ADP、Pi、內膜完整性及呼吸鏈功能影響。實驗題應先確認是否供應了足夠受質與氧，避免把任何條件下的解偶聯都說成耗氧無限增加。</p>\n"
    },
    {
      "id": "topic-5",
      "title": "P/O比與胞質NADH穿梭",
      "html": "<p>常用近似每個基質NADH約2.5 ATP、由FAD相關途徑在CoQ層級進入約1.5\nATP。差別主要是是否經過complex\nI的質子泵，不是FADH₂只帶一個電子。實際產率受質子漏、轉運與酵素計量影響，題目給定比值時依題目計算。</p>\n<p>胞質NADH不直接自由穿過內膜。Malate–aspartate\nshuttle把還原當量轉成基質NADH；glycerol-3-phosphate\nshuttle經內膜黃素酵素將電子交給CoQ，繞過I。前者常以2.5、後者1.5\nATP估算每個胞質NADH的能量回收。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>穿梭</th>\n<th>最後進入層級</th>\n<th>每胞質NADH的教學估算</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Malate–aspartate</td>\n<td>基質NADH→I</td>\n<td>約2.5 ATP</td>\n</tr>\n<tr class=\"even\">\n<td>Glycerol-3-phosphate</td>\n<td>CoQ</td>\n<td>約1.5 ATP</td>\n</tr>\n</tbody>\n</table></div>\n<p>穿梭傳的是還原當量，不是原封不動把同一顆NADH搬進去。完整葡萄糖氧化常見30或32\nATP的差別之一即出在這裡；不是糖解本身突然直接多產兩個ATP。</p>\n"
    },
    {
      "id": "topic-6",
      "title": "抑制劑：阻塞點前後的氧化還原狀態",
      "html": "<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>作用位置</th>\n<th>代表</th>\n<th>初步預測</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>I</td>\n<td>Rotenone</td>\n<td>NADH途徑受阻；II來源仍可能繞入</td>\n</tr>\n<tr class=\"even\">\n<td>III</td>\n<td>Antimycin A</td>\n<td>CoQ上游較還原，下游較氧化</td>\n</tr>\n<tr class=\"odd\">\n<td>IV</td>\n<td>Cyanide、CO等</td>\n<td>氧還原受阻，整體電子流下降</td>\n</tr>\n<tr class=\"even\">\n<td>ATP synthase</td>\n<td>Oligomycin</td>\n<td>質子回流受阻，梯度回壓使耗氧下降</td>\n</tr>\n</tbody>\n</table></div>\n<p>分析某點完全阻塞，先畫電子方向：阻塞前容易累積還原態，後面若仍能把電子交給氧則較氧化。例如III被阻斷，NADH與CoQ池較還原，而cytochrome\nc較氧化。這是有氧、有受質、其他功能尚存的簡化穩態預測，不能忽略實驗條件。</p>\n<p>若I被抑制，succinate可經II供電子；若III或IV被完全抑制，增加succinate不能繞過下游瓶頸。問「補何受質可恢復耗氧」時，要辨認它進入的位置，而不是只看是否有更多能量來源。</p>\n"
    },
    {
      "id": "topic-7",
      "title": "解偶聯：電子還在跑，ATP卻收不到",
      "html": "<p>解偶聯使質子梯度不經正常ATP合成途徑而耗散。DNP為經典化學例子，UCP1為棕色脂肪生理性產熱相關蛋白。H⁺回到基質，梯度降低，呼吸鏈在有受質與氧時可加速耗氧，但氧化磷酸化ATP產率下降，更多能量以熱散失。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>狀態</th>\n<th>梯度</th>\n<th>耗氧的典型趨勢</th>\n<th>氧化磷酸化ATP</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>呼吸鏈完全受阻</td>\n<td>逐漸無法維持</td>\n<td>下降</td>\n<td>下降</td>\n</tr>\n<tr class=\"even\">\n<td>ATP synthase受阻</td>\n<td>初期升高、回壓增加</td>\n<td>下降</td>\n<td>下降</td>\n</tr>\n<tr class=\"odd\">\n<td>解偶聯</td>\n<td>下降</td>\n<td>常增加</td>\n<td>下降</td>\n</tr>\n</tbody>\n</table></div>\n<p>先加oligomycin再加解偶聯劑，可能恢復電子傳遞與耗氧，卻不會恢復被阻斷ATP\nsynthase的ATP生成。若IV已完全堵住，解偶聯也不能幫電子跨越阻塞點。原題有時寫「抑制呼吸鏈」泛指干擾供能，解析應分清真正抑制電子流與破壞耦合。</p>\n"
    },
    {
      "id": "topic-8",
      "title": "ROS、抗氧化與細胞脈絡",
      "html": "<p>電子若不完全還原氧，可形成superoxide等ROS。SOD把superoxide轉為H₂O₂等產物，catalase或glutathione\nperoxidase再處理H₂O₂。SOD不是直接把所有氧化物都變成水；glutathione\nreductase則用NADPH再生GSH，不是直接清除superoxide的主要酵素。</p>\n<p>成熟紅血球沒有粒線體，因此沒有自身氧化磷酸化，ATP主要靠糖解；但仍有抗氧化需求，與磷酸戊糖途徑供應NADPH相連。神經與肌肉能量需求高，因此粒線體功能障礙常有相關表現，但呼吸鏈蛋白並非全部由粒線體基因編碼，核基因也有重要貢獻。</p>\n<p>複習時依序說出：電子入口→移動載體→氧的終點；H⁺泵出→梯度保存→H⁺回流；阻塞點→上下游還原狀態→耗氧與ATP。這三條因果鏈比單背I到V的名字更能解題。</p>\n"
    }
  ],
  "questions": [
    {
      "title": "01　呼吸鏈泵質子方向？ATP synthase使用梯度方向？",
      "prompt": "<p>呼吸鏈泵質子方向？ATP synthase使用梯度方向？</p>",
      "answer": "<p>前者基質到膜間腔，後者回到基質；前者建立梯度，後者使用梯度。</p>"
    },
    {
      "title": "02　I是否先交電子給II？",
      "prompt": "<p>I是否先交電子給II？</p>",
      "answer": "<p>否，I與II是不同入口，皆可向CoQ供電子，再經III、cytochrome c、IV到O₂。</p>"
    },
    {
      "title": "03　II為何ATP回收較少？",
      "prompt": "<p>II為何ATP回收較少？</p>",
      "answer": "<p>不經I的泵質子步驟，II本身也不泵H⁺；不是FADH₂只帶一電子。</p>"
    },
    {
      "title": "04　每兩電子I、III、IV的常用泵質子數？",
      "prompt": "<p>每兩電子I、III、IV的常用泵質子數？</p>",
      "answer": "<p>4、4、2，NADH合計10。按四電子或每O₂計算時需改變基準。</p>"
    },
    {
      "title": "05　胞質NADH是否直接穿內膜？",
      "prompt": "<p>胞質NADH是否直接穿內膜？</p>",
      "answer": "<p>否，通常靠穿梭傳遞還原當量。不同穿梭進入I或CoQ層級，收益不同。</p>"
    },
    {
      "title": "06　III完全阻斷後CoQ與cytochrome c的狀態？",
      "prompt": "<p>III完全阻斷後CoQ與cytochrome c的狀態？</p>",
      "answer": "<p>供電子與氧條件完整下，上游CoQ較還原，下游cytochrome c較氧化。</p>"
    },
    {
      "title": "07　Oligomycin後加DNP，耗氧與ATP是否都恢復？",
      "prompt": "<p>Oligomycin後加DNP，耗氧與ATP是否都恢復？</p>",
      "answer": "<p>可能恢復耗氧，不能恢復被阻斷ATP synthase的ATP生成；解偶只解除梯度回壓。</p>"
    },
    {
      "title": "08　IV完全阻斷後加succinate能繞過嗎？",
      "prompt": "<p>IV完全阻斷後加succinate能繞過嗎？</p>",
      "answer": "<p>不能。Succinate繞過I但仍需III與IV完整。</p>"
    },
    {
      "title": "09　UCP1為何產熱？",
      "prompt": "<p>UCP1為何產熱？</p>",
      "answer": "<p>促進H⁺不經ATP生成途徑回流，梯度能量較多散為熱。</p>"
    },
    {
      "title": "10　SOD與glutathione peroxidase處理相同受質嗎？",
      "prompt": "<p>SOD與glutathione peroxidase處理相同受質嗎？</p>",
      "answer": "<p>不同。SOD處理superoxide並生成H₂O₂等；peroxidase使用GSH還原過氧化物。</p>"
    }
  ],
  "recalls": [
    [
      "呼吸鏈泵質子方向？ATP synthase使用梯度方向？",
      "前者基質到膜間腔，後者回到基質；前者建立梯度，後者使用梯度。"
    ],
    [
      "I是否先交電子給II？",
      "否，I與II是不同入口，皆可向CoQ供電子，再經III、cytochrome c、IV到O₂。"
    ],
    [
      "每兩電子I、III、IV的常用泵質子數？",
      "4、4、2，NADH合計10。按四電子或每O₂計算時需改變基準。"
    ],
    [
      "Oligomycin後加DNP，耗氧與ATP是否都恢復？",
      "可能恢復耗氧，不能恢復被阻斷ATP synthase的ATP生成；解偶只解除梯度回壓。"
    ],
    [
      "胞質NADH是否直接穿內膜？",
      "否，通常靠穿梭傳遞還原當量。不同穿梭進入I或CoQ層級，收益不同。"
    ],
    [
      "III完全阻斷後CoQ與cytochrome c的狀態？",
      "供電子與氧條件完整下，上游CoQ較還原，下游cytochrome c較氧化。"
    ],
    [
      "UCP1為何產熱？",
      "促進H⁺不經ATP生成途徑回流，梯度能量較多散為熱。"
    ],
    [
      "SOD與glutathione peroxidase處理相同受質嗎？",
      "不同。SOD處理superoxide並生成H₂O₂等；peroxidase使用GSH還原過氧化物。"
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
            "number": 31,
            "text": "31 \n動物呼吸氧(O2)進入細胞進行氧化磷酸化,O2最終會轉變為何種物質? \nAH3PO4 \nBCO2 \nCCO \nDH2O \n",
            "regions": [
              {
                "page": 3,
                "rect": [
                  30.0,
                  339.84,
                  570.0,
                  367.08
                ]
              }
            ],
            "id": "98-2-2-31",
            "year": 98,
            "session": 2,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/98/2/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=098140&c=103&s=c021&q=1&verify=step1-20261013-098140-103-c021-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=098140&y=2009",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/98/2/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=098140&c=103&s=c021&q=1&verify=step1-20261013-098140-103-c021-M",
            "corrected": true,
            "answerVersion": "M",
            "point": "機制與選項判讀",
            "analysis": "氧是最終電子接受者，被還原為水；CO₂主要來自脫羧，不是氧在complex IV的產物。",
            "trap": "先說出分子機制或計算依據，再核對選項；不要只記答案字母。"
          },
          {
            "number": 43,
            "text": "43 \n在粒線體懸浮液中,以琥珀酸(succinate)為受質進行氧化磷酸化反應,此時若加入2,4 二硝基苯酚\n(2,4-dinitrophenol),下列何種情況會發生? \nA氧氣的消耗會下降 \nB氧氣的消耗會增加 \nCATP 的產生可繼續 \nD氫離子的梯度會維持 \n",
            "regions": [
              {
                "page": 5,
                "rect": [
                  30.0,
                  321.76,
                  570.0,
                  376.66
                ]
              }
            ],
            "id": "99-1-2-43",
            "year": 99,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/99/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=099010&c=101&s=200&q=1&verify=step1-20261013-099010-101-200-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=099010&y=2010",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/99/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=099010&c=101&s=200&q=1&verify=step1-20261013-099010-101-200-M",
            "corrected": true,
            "answerVersion": "M",
            "point": "機制與選項判讀",
            "analysis": "DNP耗散梯度，足夠受質與氧下解除回壓而使耗氧增加，但氧化磷酸化ATP生成下降。",
            "trap": "先說出分子機制或計算依據，再核對選項；不要只記答案字母。"
          },
          {
            "number": 45,
            "text": "45 \n有關呼吸鏈之化學滲透理論(chemiosmotic theory),下列敘述何者正確? \nA 氧化磷酸化在粒線體外膜進行 \n \nB粒線體內膜之內外側質子(protons)的濃度相同 \nCATP synthase 在chemiosmotic theory 沒有重要性 \nDATP 的合成與質子移動力(proton-motive force)有關 \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  289.14,
                  570.0,
                  354.18
                ]
              }
            ],
            "id": "99-2-2-45",
            "year": 99,
            "session": 2,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/99/2/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=099130&c=101&s=200&q=1&verify=step1-20261013-099130-101-200-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=099130&y=2010",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/99/2/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=099130&c=101&s=200&q=1&verify=step1-20261013-099130-101-200-M",
            "corrected": true,
            "answerVersion": "M",
            "point": "機制與選項判讀",
            "analysis": "化學滲透理論將電子傳遞與ATP合成透過質子動力連結；內膜及梯度是必要條件。",
            "trap": "先說出分子機制或計算依據，再核對選項；不要只記答案字母。"
          },
          {
            "number": 48,
            "text": "48 \nglycerol-3-phosphate shuttle 之作用為何? \nA是肝、腎和心臟細胞運送細胞質中NADH 進入電子傳遞鏈之途徑 \n \nB將細胞質中NADH 的還原當量(reducing equivalents)傳送至ubiquinone \nglycerol\nC\n-3-phosphate shuttle 比malate aspartate shuttle 所產生之ATP 量多 \nD主要目的是將ATP 送出粒線體外利用 \n",
            "regions": [
              {
                "page": 5,
                "rect": [
                  30.0,
                  82.1,
                  570.22,
                  157.1
                ]
              }
            ],
            "id": "100-1-2-48",
            "year": 100,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/100/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=100030&c=101&s=0102&q=1&verify=step1-20261013-100030-101-0102-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=100030&y=2011",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/100/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=100030&c=101&s=0102&q=1&verify=step1-20261013-100030-101-0102-M",
            "corrected": true,
            "answerVersion": "M",
            "point": "機制與選項判讀",
            "analysis": "Glycerol-3-phosphate shuttle將胞質還原當量交到CoQ層級，不是把同一顆NADH直接搬入。",
            "trap": "先說出分子機制或計算依據，再核對選項；不要只記答案字母。"
          },
          {
            "number": 49,
            "text": "49 \nRotenone 會抑制粒線體電子傳遞鏈的那一個步驟? \nNADH→coenzyme Q\nA\n \nCyt \nB\nb→Cyt c1 \nCyt \nC\nc1→Cyt c \nCyt \nD\nc→Cyt (a+a3) \n",
            "regions": [
              {
                "page": 5,
                "rect": [
                  30.0,
                  157.1,
                  570.22,
                  187.1
                ]
              }
            ],
            "id": "100-1-2-49",
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
            "analysis": "Rotenone阻斷complex I向CoQ的電子流；由II進入的電子可繞過I，但仍需下游完整。",
            "trap": "先說出分子機制或計算依據，再核對選項；不要只記答案字母。"
          },
          {
            "number": 46,
            "text": "46 \n下列那一個酵素位於粒線體電子傳遞鏈的Complex II? \nANADH dehydrogenase  \nBcytochrome c oxidase \nCsuccinate dehydrogenase \nDubiquinol-cytochrome c oxidoreductase \n",
            "regions": [
              {
                "page": 6,
                "rect": [
                  30.0,
                  293.06,
                  570.22,
                  350.06
                ]
              }
            ],
            "id": "102-1-2-46",
            "year": 102,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/102/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=102030&c=101&s=0102&q=1&verify=step1-20261013-102030-101-0102-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=102030&y=2013",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/102/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=102030&c=101&s=0102&q=1&verify=step1-20261013-102030-101-0102-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "C"
            ],
            "point": "機制與選項判讀",
            "analysis": "Complex II就是succinate dehydrogenase，連接TCA與呼吸鏈，不泵H⁺。",
            "trap": "先說出分子機制或計算依據，再核對選項；不要只記答案字母。"
          },
          {
            "number": 96,
            "text": "96.下列關於電子傳遞鏈的敘述,何者錯誤?\nA.氧分子(O2)為電子最終的接受者\nB.NADH的氧化發生於complex I\nC.Coenzyme Q(CoQ)可協助將電子由complex I傳遞至complex II\n\nD.Cytochrome c(Cyt c)可協助將電子由complex III傳遞至complex IV\n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  720.19,
                  570.0,
                  807.0
                ]
              },
              {
                "page": 15,
                "rect": [
                  30.0,
                  28.0,
                  570.0,
                  48.31
                ]
              }
            ],
            "id": "108-1-1-96",
            "year": 108,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/108/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=108030&c=301&s=11&q=1&verify=step1-20261013-108030-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=108030&y=2019",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/108/1/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=108030&c=301&s=11&q=1&verify=step1-20261013-108030-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "C"
            ],
            "point": "機制與選項判讀",
            "analysis": "I與II都向CoQ供電子，不是CoQ將I電子傳給II；CoQ再把電子交向III。",
            "trap": "先說出分子機制或計算依據，再核對選項；不要只記答案字母。"
          },
          {
            "number": 95,
            "text": "95.參與電子傳遞鏈(electron transport chain)有四種蛋白質複合體,下列那一組複合體均具有氫離子幫浦\n(proton pump)的活性?\n \nA.complexes I, II, III\nB.complexes I, II, IV\nC.complexes I, III, IV\nD.complexes II, III, IV\n",
            "regions": [
              {
                "page": 15,
                "rect": [
                  30.0,
                  90.71,
                  569.96,
                  214.86
                ]
              }
            ],
            "id": "110-1-1-95",
            "year": 110,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/110/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=110020&c=301&s=11&q=1&verify=step1-20261013-110020-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=110020&y=2021",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/110/1/medicine-1-S.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=S&code=110020&c=301&s=11&q=1&verify=step1-20261013-110020-301-11-S",
            "corrected": false,
            "answerVersion": "S",
            "originalAnswers": [
              "C"
            ],
            "point": "機制與選項判讀",
            "analysis": "常見H⁺泵為I、III、IV；II不泵，這也是不同入口ATP產率不同的原因。",
            "trap": "先說出分子機制或計算依據，再核對選項；不要只記答案字母。"
          },
          {
            "number": 96,
            "text": "96.在棕色脂肪細胞(brown adipose tissue)中,uncoupling protein 1(UCP1)大量表現會造成電子傳遞鏈與ATP\n合成的耦合(coupling)被破壞,並藉此產生熱。UCP1的主要作用是:\n \nA.使氫離子回到粒線體基質(matrix)\nB.阻擋氫離子轉移到粒線體內外膜間隙(intermembrane space)\nC.藉由異位連結(allosteric binding)直接抑制NADH dehydrogenase的活性\nD.藉由異位連結(allosteric binding)直接抑制ATP synthase的活性\n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  593.97,
                  569.96,
                  718.13
                ]
              }
            ],
            "id": "110-2-1-96",
            "year": 110,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/110/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=110101&c=301&s=11&q=1&verify=step1-20261013-110101-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=110101&y=2021",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/110/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=110101&c=301&s=11&q=1&verify=step1-20261013-110101-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "A"
            ],
            "point": "機制與選項判讀",
            "analysis": "UCP1促進H⁺回到基質而耗散梯度，支持產熱，不是直接堵住ATP synthase。",
            "trap": "先說出分子機制或計算依據，再核對選項；不要只記答案字母。"
          },
          {
            "number": 96,
            "text": "96.下列何者為粒線體電子傳遞鏈 complex IV 之電子供應者(electron donor)? \nA.succinate \n\nB.cytochrome c \nC.coenzyme Q \nD.NADH \n",
            "regions": [
              {
                "page": 17,
                "rect": [
                  30.0,
                  759.76,
                  570.32,
                  806.92
                ]
              },
              {
                "page": 18,
                "rect": [
                  30.0,
                  28.0,
                  570.32,
                  114.76
                ]
              }
            ],
            "id": "112-1-1-96",
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
            "analysis": "Cytochrome c將電子交給IV，IV再還原O₂；不能省略IV說cytochrome c直接還原氧。",
            "trap": "先說出分子機制或計算依據，再核對選項；不要只記答案字母。"
          },
          {
            "number": 94,
            "text": "94.一般而言,當電子從NADH 藉由電子傳遞鏈轉移到氧分子(O2),會比電子從FADH2藉由電子傳遞鏈轉移到氧\n分子產生更多的ATP,其主要原因為何? \n \nA.FADH2只能攜帶一個電子 \nB.粒線體中complexII比complexI少 \nC.complexII無法將氫離子轉移到粒線體內外膜間隙 \nD.細胞內NADH 濃度比FADH2高 \n",
            "regions": [
              {
                "page": 18,
                "rect": [
                  30.0,
                  603.86,
                  570.32,
                  753.85
                ]
              }
            ],
            "id": "114-1-1-94",
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
            "point": "機制與選項判讀",
            "analysis": "II入口繞過I的泵質子步驟，回收的質子動力較少，不是FADH₂只帶一電子。",
            "trap": "先說出分子機制或計算依據，再核對選項；不要只記答案字母。"
          },
          {
            "number": 94,
            "text": "94.細胞加入粒線體呼吸鏈抑制劑會造成呼吸鏈電子傳遞中斷。假設一新發現之藥物已知其功能為呼吸鏈抑制\n劑,並會完全阻斷complex III的功能。當細胞加入此藥物一段時間後,下列那一組呼吸鏈代謝物,兩者主要\n皆以還原態存在? \n\n \nA.coenzyme Q,NADH \nB.coenzyme Q,cytochrome c \nC.cytochrome b,cytochrome c \nD.cytochrome a,cytochrome b \n \n",
            "regions": [
              {
                "page": 17,
                "rect": [
                  30.0,
                  732.78,
                  570.22,
                  807.0
                ]
              },
              {
                "page": 18,
                "rect": [
                  30.0,
                  28.0,
                  570.22,
                  141.78
                ]
              }
            ],
            "id": "115-2-1-94",
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
            "point": "機制與選項判讀",
            "analysis": "III完全受阻後，上游NADH與CoQ池較還原；下游cytochrome c可把電子交向氧而較氧化。",
            "trap": "先說出分子機制或計算依據，再核對選項；不要只記答案字母。"
          }
        ]
      }
    ]
  }
});
