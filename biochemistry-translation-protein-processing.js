biochemistryChapters.push({
  "number": "25",
  "id": "translation-protein-processing",
  "title": "蛋白質轉譯與轉譯後修飾",
  "summary": "從 tRNA 如何帶對胺基酸，到新生蛋白怎麼找到目的地，沿途釐清方向、能量與疾病線索。",
  "sources": "Molecular Biology of the Cell（Alberts 等）；考選部歷屆醫師第一階段試題與採計答案。",
  "references": "<p>Molecular Biology of the Cell（Alberts 等）；考選部歷屆醫師第一階段試題與採計答案。</p><p><a href=\"https://www.ncbi.nlm.nih.gov/books/NBK26829/\" target=\"_blank\" rel=\"noopener noreferrer\">From RNA to Protein</a></p>",
  "readingIntro": "拿兩張紙代表 tRNA，依序移過 A、P、E 位。每一步都問：現在胜肽接在哪張紙上？這個反應用掉的是 ATP、GTP，還是先前儲存的能量？",
  "figure": "<p>圖表位於對應小節，可橫向捲動。</p>",
  "sections": [
    {
      "id": "topic-1",
      "title": "從 mRNA 到胺基酸序列",
      "html": "<p>核糖體沿 mRNA 的 5′→3′ 讀取，蛋白由 N 端往 C 端延長。起始位置確立之後，每三個核苷酸一組。遺傳密碼的簡併性指同一胺基酸可有多個 codon；在標準密碼表的同一解讀情境中，一個 sense codon 指定一個胺基酸。</p><p>算例：5′-AUG GCU UUU UGA-3′ 產生 Met–Ala–Phe，終止密碼子由蛋白質釋放因子辨識，不多算一個胺基酸。題目給單股序列時先認清是 DNA 模板、DNA 編碼股或 mRNA，再辨閱讀框。</p>"
    },
    {
      "id": "topic-2",
      "title": "tRNA 的兩端與 wobble",
      "html": "<p>tRNA 的反密碼子與 mRNA 反平行配對，胺基酸則接在另一端的 3′-CCA 末端腺苷。若 codon 與 anticodon 都由 5′ 端開始編號，codon 的第三位對到 anticodon 的第一位。此位置容許較寬鬆的配對，使一種 tRNA 可讀數種同義密碼子。</p><p>例如 5′-GAA-3′ 的完全互補反密碼子寫成 3′-CUU-5′，若答案欄規定 5′ 起頭則寫 5′-UUC-3′。先畫兩端再談 wobble；寬鬆不等於任意，仍受特定鹼基與修飾鹼基的配對規則限制。</p>"
    },
    {
      "id": "topic-3",
      "title": "裝載與校對先於核糖體解碼",
      "html": "<p>Aminoacyl-tRNA synthetase 先讓胺基酸與 ATP 形成 aminoacyl-AMP，再將胺基酸轉到相應 tRNA 的末端，形成高能酯鍵。ATP 到 AMP，再加上 PPi 水解，活化一個胺基酸相當於消耗兩個高能磷酸鍵。部分酵素有編輯功能，可排除很相似的錯誤胺基酸。</p><p>核糖體主要檢查 codon–anticodon 是否配對。若 tRNA 的反密碼子正確、卻被錯接另一種胺基酸，核糖體可能照常接受它，使成熟蛋白在該位置出錯。這與基因本身發生 missense mutation 的差別，在於 DNA 與 mRNA 序列可完全正常。</p>"
    },
    {
      "id": "topic-4",
      "title": "細菌和真核的起始定位",
      "html": "<p>細菌小次單元的 16S rRNA 可與 mRNA 的 Shine–Dalgarno 序列配對，將起始密碼子放到正確位置。IF2–GTP 協助攜帶 fMet 的起始 tRNA 就位。多順反子 mRNA 的不同編碼區各自有起始定位需求。</p><p>典型真核胞質路徑由 eIF4E 辨識 5′ 帽、eIF4G 作支架，預起始複合體掃描到合適的 AUG 周圍序列（Kozak context）；eIF2–GTP 攜帶 Met 起始 tRNA。辨題時圈出「帽」或「16S」，不要僅憑兩者都用 AUG 選答案。</p>"
    },
    {
      "id": "topic-5",
      "title": "核糖體三位置與胜肽轉移",
      "html": "<figure><div class=\"table-scroll\" tabindex=\"0\"><img src=\"assets/biochemistry/ribosomal-sites.svg\" alt=\"跟著新生肽走過一輪延長；時間點、E 位、P 位、A 位。遞送完成，空或即將離開，帶舊肽鏈，帶新胺基酸；剛成鍵，—，去醯化 tRNA，帶延長的肽鏈；轉位完成，去醯化 tRNA，帶延長的肽鏈，空出\" style=\"width:100%;min-width:600px;max-width:780px;height:auto\"></div><figcaption>讀同一列看相對位置，沿列往下看肽鏈先轉移、再隨 tRNA 移位。</figcaption></figure><p>起始 tRNA 直接位於 P 位。下一個帶胺基酸的 tRNA 進入 A 位，A 位胺基酸的 α-胺基攻擊 P 位 peptidyl-tRNA 的酯鍵，使整條新生胜肽轉到 A 位。催化中心的要角是大次單元 rRNA，故稱核糖體具有 ribozyme 活性。</p><p>轉位後，帶著新生鏈的 tRNA 從 A 移到 P，去醯化的 tRNA 從 P 移到 E 並離開，A 位再度可用。畫圖時始終把「帶鏈」標在 tRNA 上，避免誤以為 A 位胺基酸被搬去接在仍停於 P 位的鏈後。</p>"
    },
    {
      "id": "topic-6",
      "title": "延長、轉位與能量帳",
      "html": "<p>細菌的 EF-Tu–GTP 或真核的 eEF1A–GTP 負責遞送延長用的 aminoacyl-tRNA；細菌 EF-G 或真核 eEF2 使用 GTP 推進轉位。胜肽鍵形成的能量已儲存在先前裝載 tRNA 的酯鍵中，成鍵當下無須再直接水解一個 ATP。</p><p>典型延長循環若從游離胺基酸算起，裝載相當於兩個高能磷酸鍵，加上遞送與轉位各一個 GTP，共約四個高能磷酸鍵。若題目已給裝載好的 tRNA，或問整條蛋白含起始終止的總耗能，就不能原封照套這個數字。</p><div class=\"table-scroll\" tabindex=\"0\"><table><thead><tr><th>步驟</th><th>直接能量或能量來源</th><th>解題提示</th></tr></thead><tbody><tr><td>裝載游離胺基酸</td><td>ATP → AMP＋PPi</td><td>兩個高能磷酸鍵等價量</td></tr><tr><td>遞送延長用 tRNA</td><td>GTP → GDP＋Pi</td><td>EF-Tu／eEF1A</td></tr><tr><td>胜肽鍵形成</td><td>既有酯鍵</td><td>當下不直接水解額外 NTP</td></tr><tr><td>轉位</td><td>GTP → GDP＋Pi</td><td>EF-G／eEF2</td></tr></tbody></table></div>"
    },
    {
      "id": "topic-7",
      "title": "終止與蛋白合成抑制劑",
      "html": "<p>當 UAA、UAG 或 UGA 在標準解讀情境下進入 A 位，release factor 促使 P 位胜肽與 tRNA 間的酯鍵水解，蛋白釋出。停止時加入的是水；終止密碼子本身沒有對應的一般 aminoacyl-tRNA。</p><p>藥物題先按機器分類。Tetracycline 阻礙細菌 aminoacyl-tRNA 進入 A 位；aminoglycoside 可干擾解碼，macrolide 作用在 50S 的新生肽通道附近。Rifampicin 作用於細菌 RNA polymerase。蛋白產量都可能下降，但直接靶點不同。</p>"
    },
    {
      "id": "topic-8",
      "title": "新生鏈如何進入分泌路徑",
      "html": "<p>分泌蛋白的轉譯通常先在胞質開始。疏水性訊號序列從核糖體露出時，SRP 結合並將核糖體與新生鏈帶至 ER 膜上的受體與 translocon，之後續行轉譯與跨膜輸送。訊號肽可被切除；內部訊號錨則可保留成為跨膜區。</p><p>胰島素是分辨步驟的例子：preproinsulin 的訊號肽引導進入 ER，切除後成 proinsulin，折疊並建立二硫鍵；分泌顆粒內再切去 C-peptide 得到成熟胰島素。訊號肽與 C-peptide 並非同一段，切除的區室也不同。</p>"
    },
    {
      "id": "topic-9",
      "title": "醣基化與高基氏體分選",
      "html": "<figure><div class=\"table-scroll\" tabindex=\"0\"><img src=\"assets/biochemistry/protein-trafficking.svg\" alt=\"分泌路徑的區室與故障線索；區室、處理步驟、若受阻、典型線索。胞質 → ER，SRP 導引，進入 ER 減少，訊號肽異常；ER 腔，折疊與二硫鍵，異常鏈滯留，品質管制；Golgi，溶小體酵素分選，酵素外流，M6P 標記不足；分泌顆粒，前驅物切割，成熟產物減少，胰島素加工\" style=\"width:100%;min-width:600px;max-width:780px;height:auto\"></div><figcaption>依蛋白所在區室尋找受影響的步驟。</figcaption></figure><p>典型 N-linked glycosylation 從 ER 開始，預組裝的寡醣接到 Asn 側鏈醯胺氮，辨認序列常為 Asn-X-Ser/Thr，X 不可為 Pro。符合 motif 仍要看位點暴露及所在區室。常見分泌路徑的 O-linked 醣化則在 Golgi 逐個加糖至 Ser 或 Thr 的羥基。</p><p>溶小體水解酶所帶的 mannose-6-phosphate 是用來分選的醣鏈標記。I-cell disease 的典型問題是形成此標記的 phosphotransferase 缺陷，許多水解酶被分泌到細胞外，溶小體內反而缺酵素。題目問「血中高、細胞內不足」時，先追去向。</p>"
    },
    {
      "id": "topic-10",
      "title": "可逆標記與不可逆切割",
      "html": "<p>常考的蛋白 kinase 將 ATP 的磷酸基轉到 Ser、Thr、Tyr 的羥基；phosphatase 可水解除去此標記。磷酸化改變電荷、構形或結合伙伴，同一種修飾在不同蛋白上可以促進或抑制活性。</p><p>相較之下，蛋白水解活化會切斷主鏈，例如 trypsinogen 變成 trypsin；細胞不能只靠 phosphatase 把它接回原狀。維生素 K 依賴的 γ-carboxylation 是另一種化學反應，在特定凝血蛋白的 Glu 側鏈增加羧基，有助結合鈣。</p><div class=\"table-scroll\" tabindex=\"0\"><table><thead><tr><th>改變</th><th>典型位置或受質</th><th>作用後果</th></tr></thead><tbody><tr><td>磷酸化</td><td>Ser、Thr、Tyr</td><td>依蛋白而活化或抑制</td></tr><tr><td>羥化</td><td>膠原蛋白的 Pro、Lys</td><td>影響穩定性或後續加工</td></tr><tr><td>γ-羧化</td><td>特定凝血蛋白的 Glu</td><td>有助 Ca²⁺ 結合</td></tr><tr><td>切除前驅胜肽</td><td>proinsulin</td><td>產生成熟胰島素與 C-peptide</td></tr></tbody></table></div>"
    },
    {
      "id": "topic-11",
      "title": "折疊監控與 ubiquitin",
      "html": "<p>新生鏈須折疊成適當構形。ER 品管可保留折疊異常的分泌蛋白，部分經 ER-associated degradation 回到胞質側，由 ubiquitin–proteasome 系統處理。故蛋白量降低可能來自分解加速，即使 mRNA 和初始合成率正常。</p><p>E1 用 ATP 活化 ubiquitin，E2 攜帶它，E3 對受質選擇特別重要；常見連接為 ubiquitin C 端與受質 Lys 側鏈間的異肽鍵。K48 型多聚鏈常導引至 26S proteasome，單一 ubiquitin 及其他鏈型也可參與運輸或訊號，不能把所有標記都當成降解。</p>"
    },
    {
      "id": "topic-12",
      "title": "由臨床線索定位處理階段",
      "html": "<p>同樣是成熟蛋白不足，若新生鏈根本沒有進入 ER，先找訊號肽或定位步驟；若鏈能進 ER 卻滯留，可查折疊與品質管制；若成熟蛋白被送到錯誤區室，先查分選標記。解題應將合成率、位置與半衰期當成三個不同變數。</p><p>以膠原蛋白為例，proline、lysine 羥化發生於細胞內，需維生素 C 維持羥化酵素所需的鐵狀態；分泌後纖維交聯則涉及需銅的 lysyl oxidase。遇到結締組織脆弱，先把題幹中的區室和輔因子配成一對，再決定是哪一步。</p>"
    }
  ],
  "recalls": [
    [
      "含起始與終止共 303 個編碼區核苷酸，可產生幾個胺基酸？",
      "若包含一個終止密碼子且無內含子，303÷3−1＝100 個。"
    ],
    [
      "Wobble 位在哪一端？",
      "反密碼子 5′ 端，對應密碼子的第三個核苷酸。"
    ],
    [
      "若帶錯胺基酸的 tRNA 配對成功，實際加進去的是哪一個？",
      "加進去的是 tRNA 實際攜帶的胺基酸；反密碼子決定它讀哪個 codon。"
    ],
    [
      "細菌與真核胞質的起始胺基酸有何差別？",
      "細菌是 N-formylmethionine，真核胞質通常是未甲醯化的 methionine。"
    ],
    [
      "剛成鍵、還沒轉位時，新生肽在哪裡？",
      "在 A 位的 tRNA 上；之後才隨轉位移到 P 位。"
    ],
    [
      "只問轉位本身的能量來源，該算幾個 ATP？",
      "典型轉位用 GTP 水解為 GDP 與 Pi，不能把上游 ATP 裝載成本算進來。"
    ],
    [
      "藥物使 mRNA 與蛋白一同減少，必然直接抑制轉譯嗎？",
      "不能只看終點。先查直接靶點，例如 rifampicin 先抑制轉錄。"
    ],
    [
      "哪一段讓 preproinsulin 最先進入 ER？",
      "N 端訊號肽。C-peptide 在之後的加工才被移除。"
    ],
    [
      "在 N-linked motif 中，真正接醣的是哪個殘基？",
      "Asparagine；後方的 Ser/Thr 協助形成辨認序列。"
    ],
    [
      "凝血蛋白需要的 γ-carboxylation 改了哪種殘基？",
      "改變特定 glutamate 的側鏈，增加結合鈣離子的能力。"
    ],
    [
      "為何辨認特定蛋白遭到標記時，先看 E3？",
      "E3 負責選擇或招募特定受質；E1 的主要工作是活化 ubiquitin。"
    ],
    [
      "缺維生素 C 與缺銅，對膠原蛋白各影響哪一步？",
      "前者影響細胞內羥化，後者可影響細胞外 lysyl oxidase 媒介的交聯。"
    ]
  ],
  "questions": [
    {
      "title": "01　編碼區中插入一個三核苷酸片段會怎樣？",
      "prompt": "<p>編碼區中插入一個三核苷酸片段會怎樣？</p>",
      "answer": "<p>整體閱讀框通常維持，可能插入一個胺基酸；若打斷既有 codon，局部序列也可能不同，功能仍須另判。</p>"
    },
    {
      "title": "02　tRNA 反密碼子由 5′ 寫為 CAU，完全配對的 codon 為何？",
      "prompt": "<p>tRNA 反密碼子由 5′ 寫為 CAU，完全配對的 codon 為何？</p>",
      "answer": "<p>5′-AUG-3′。兩者反平行，不可按同方向逐字互補。</p>"
    },
    {
      "title": "03　若 synthetase 誤把 serine 接到讀取 alanine 的 tRNA，遇 Ala codon 時會怎樣？",
      "prompt": "<p>若 synthetase 誤把 serine 接到讀取 alanine 的 tRNA，遇 Ala codon 時會怎樣？</p>",
      "answer": "<p>若該 tRNA 通過遞送及解碼，會插入 serine。核糖體主要核對反密碼子。</p>"
    },
    {
      "title": "04　給已裝載的延長用 tRNA，從遞送至轉位，經典循環直接用什麼？",
      "prompt": "<p>給已裝載的延長用 tRNA，從遞送至轉位，經典循環直接用什麼？</p>",
      "answer": "<p>通常使用兩個 GTP，分別用於遞送及轉位；裝載成本已先支付。</p>"
    },
    {
      "title": "05　起始後第一個延長用 tRNA 進入時，P 位是空的嗎？",
      "prompt": "<p>起始後第一個延長用 tRNA 進入時，P 位是空的嗎？</p>",
      "answer": "<p>不是。起始 tRNA 已在 P 位，延長用 tRNA 進入 A 位。</p>"
    },
    {
      "title": "06　在 A 位見到 stop codon，下一個進入的是哪一類分子？",
      "prompt": "<p>在 A 位見到 stop codon，下一個進入的是哪一類分子？</p>",
      "answer": "<p>一般是蛋白質釋放因子，促使 peptidyl-tRNA 水解。</p>"
    },
    {
      "title": "07　preproinsulin 切去訊號肽後是否已可直接當成熟胰島素？",
      "prompt": "<p>preproinsulin 切去訊號肽後是否已可直接當成熟胰島素？</p>",
      "answer": "<p>仍是 proinsulin，之後還需適當折疊及切除 C-peptide 等加工。</p>"
    },
    {
      "title": "08　蛋白序列 Asn-Pro-Ser 是否符合典型 N-linked motif？",
      "prompt": "<p>蛋白序列 Asn-Pro-Ser 是否符合典型 N-linked motif？</p>",
      "answer": "<p>不符合；中間 X 不可是 Pro。縱使符合序列也不保證一定有修飾。</p>"
    },
    {
      "title": "09　溶小體酵素在血中升高，細胞內卻缺乏，何種缺陷可解釋？",
      "prompt": "<p>溶小體酵素在血中升高，細胞內卻缺乏，何種缺陷可解釋？</p>",
      "answer": "<p>M6P 標記不足會造成分選錯誤，酵素可能經預設分泌路徑到細胞外。</p>"
    },
    {
      "title": "10　藥物讓蛋白半衰期變長，能否據此說轉錄增強？",
      "prompt": "<p>藥物讓蛋白半衰期變長，能否據此說轉錄增強？</p>",
      "answer": "<p>不能。分解變慢本身就會使穩態蛋白量增加，需另外測 RNA 及合成速率。</p>"
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
        "title": "裝載與解碼",
        "topic": "topic-3",
        "summary": "對照本組原題中的酯化、Wobble 位置，辨認題幹指定的步驟與直接作用。",
        "questions": [
          {
            "number": 83,
            "text": "83.胺醯-tRNA合成酶(aminoacyl-tRNA synthetase)的功能為何?\n \nA.能使 tRNA和相對應的胺基酸進行酯化作用(esterification)\nB.能與特定的蛋白質結合後,間接促進tRNA與胺基酸進行酯化作用(esterification)\nC.存在於核糖體(ribosome)中,促進胜肽鍵(peptide bond)的合成\nD.需要GTP的作用才能活化胺基酸",
            "regions": [
              {
                "page": 12,
                "rect": [
                  30,
                  653.09,
                  569.96,
                  756.55
                ]
              }
            ],
            "id": "109-2-1-83",
            "year": 109,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/109/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=109100&c=301&s=11&q=1&verify=step1-20261013-109100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=109100&y=2020",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/109/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=109100&c=301&s=11&q=1&verify=step1-20261013-109100-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "A"
            ],
            "point": "酯化",
            "analysis": "Synthetase 利用 ATP 將正確胺基酸接到相應 tRNA，兩者以酯鍵連接。",
            "trap": "裝載在進核糖體前完成，不是胜肽轉移反應。"
          },
          {
            "number": 86,
            "text": "86.下列何者是擺動假說(wobble hypothesis)的特點?(密碼子與反密碼子均由5' 端開始算)\n \nA.tRNA的反密碼子第一個鹼基可與多種密碼子的第一個鹼基形成配對\nB.tRNA的反密碼子第三個鹼基可與多種密碼子的第一個鹼基形成配對\nC.tRNA的反密碼子第一個鹼基可與多種密碼子的第三個鹼基形成配對\nD.密碼子的第三個鹼基一般是以華生-克里克(Watson-Crick)模式配對",
            "regions": [
              {
                "page": 13,
                "rect": [
                  30,
                  609.49,
                  569.96,
                  712.95
                ]
              }
            ],
            "id": "110-1-1-86",
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
            "point": "Wobble 位置",
            "analysis": "反密碼子第一位對到密碼子第三位，可容許部分非典型配對。",
            "trap": "兩串都由 5′ 算位置時，編號順序正好相反。"
          }
        ]
      },
      {
        "id": "group-2",
        "title": "起始複合體",
        "topic": "topic-4",
        "summary": "對照本組原題中的起始胺基酸、帽辨識、起始 tRNA 位置，辨認題幹指定的步驟與直接作用。",
        "questions": [
          {
            "number": 91,
            "text": "91.主要用於解碼mRNA 上起始密碼子(initiation codon)的胺醯-tRNA(aminoacyl-tRNA),在原核生物及真\n核生物中分別為下列何者? \nA.Met-tRNA;N-formyl-Met-tRNA \nB.N-formyl-Pro-tRNA;Pro-tRNA \nC.N-formyl-Met-tRNA;Met-tRNA \nD.Met-tRNA;Met-tRNA",
            "regions": [
              {
                "page": 17,
                "rect": [
                  30,
                  31.55,
                  587,
                  172.55
                ]
              }
            ],
            "id": "115-1-1-91",
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
            "point": "起始胺基酸",
            "analysis": "依題目順序，細菌用 fMet，真核胞質用 Met，兩者都有專用起始 tRNA。",
            "trap": "先標物種順序再選。"
          },
          {
            "number": 86,
            "text": "86.下列何種真核細胞轉譯起始因子(eIF)直接參與蛋白質合成起始階段(initiation stage)之mRNA 5'端帽\n結構(5' cap structure)的辨識與結合? \n \nA.eIF4A \nB.eIF4B \nC.eIF4E \nD.eIF4G",
            "regions": [
              {
                "page": 16,
                "rect": [
                  30,
                  420.78,
                  570.22,
                  570.78
                ]
              }
            ],
            "id": "115-2-1-86",
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
            "point": "帽辨識",
            "analysis": "eIF4E 直接結合 5′ 帽；eIF4G 作支架，eIF4A 具 RNA helicase 活性。",
            "trap": "同一個複合體的成員不代表都直接辨認帽。"
          },
          {
            "number": 85,
            "text": "85.在原核生物組裝完成的蛋白質轉譯起始複合物(translation initiation complex)中,起始轉運核糖核酸\n(initiator tRNA)位於下列那一個位置?\n \nA.A 位 [aminoacyl (A) site]\nB.P 位 [peptidyl (P) site]\nC.E 位 [exit (E) site]\nD.信使核糖核酸進入通道(mRNA entry tunnel)",
            "regions": [
              {
                "page": 13,
                "rect": [
                  30,
                  485.34,
                  569.96,
                  609.49
                ]
              }
            ],
            "id": "110-1-1-85",
            "year": 110,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/110/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=110020&c=301&s=11&q=1&verify=step1-20261013-110020-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=110020&y=2021",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/110/1/medicine-1-S.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=S&code=110020&c=301&s=11&q=1&verify=step1-20261013-110020-301-11-S",
            "corrected": false,
            "answerVersion": "S",
            "originalAnswers": [
              "B"
            ],
            "point": "起始 tRNA 位置",
            "analysis": "組裝完成時起始 tRNA 在 P 位，A 位留給首個延長用的 tRNA。",
            "trap": "「帶著胺基酸」不足以判定進 A 位，起始是例外。"
          }
        ]
      },
      {
        "id": "group-3",
        "title": "能量與直接靶點",
        "topic": "topic-6",
        "summary": "對照本組原題中的胜肽鍵、轉位、Rifampicin，辨認題幹指定的步驟與直接作用。",
        "questions": [
          {
            "number": 89,
            "text": "89.核糖體在進行蛋白質合成時,下列那個步驟不會直接消耗能量? \nA.胺基酸活化(amino acid activation) \nB.胺醯-tRNA 進入核糖體進行結合(binding of an incoming aminoacyl-tRNA) \nC.肽鍵形成(peptide bond formation) \nD.轉位(translocation)",
            "regions": [
              {
                "page": 16,
                "rect": [
                  30,
                  522.23,
                  587,
                  628.43
                ]
              }
            ],
            "id": "115-1-1-89",
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
            "point": "胜肽鍵",
            "analysis": "成鍵所需能量來自 peptidyl-tRNA 的酯鍵，不需當場再水解 ATP 或 GTP。",
            "trap": "「不直接消耗」不代表製造蛋白沒有能量成本。"
          },
          {
            "number": 84,
            "text": "84.三磷酸核苷(nucleoside triphosphate)是細胞內生化反應重要的能量來源,在蛋白質轉譯的過程中,核糖體轉\n位(translocation)所需的能量是由下列何者提供? \nA.ATP → ADP + Pi \nB.GTP → GDP + Pi \n\nC.ATP → AMP + PPi \nD.GTP → GMP + PPi",
            "regions": [
              {
                "page": 15,
                "rect": [
                  30,
                  699.76,
                  570.32,
                  806.92
                ]
              },
              {
                "page": 16,
                "rect": [
                  30,
                  28,
                  570.32,
                  87.76
                ]
              }
            ],
            "id": "112-1-1-84",
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
            "point": "轉位",
            "analysis": "EF-G 或 eEF2 藉 GTP 水解推動轉位，產物是 GDP 與 Pi。",
            "trap": "ATP 到 AMP 對應 tRNA 裝載。"
          },
          {
            "number": 85,
            "text": "85.許多抗生素的作用機轉為抑制細菌中的蛋白質轉譯。下列何者不是抑制蛋白質轉譯作用的抗生素?\n \nA.四環黴素(tetracycline)\nB.立汎黴素(rifampicin)\nC.紅黴素(erythromycin)\nD.鏈黴素(streptomycin)",
            "regions": [
              {
                "page": 15,
                "rect": [
                  30,
                  674.94,
                  569.96,
                  806.92
                ]
              }
            ],
            "id": "113-2-1-85",
            "year": 113,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/113/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=113090&c=301&s=11&q=1&verify=step1-20261013-113090-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=113090&y=2024",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/113/2/medicine-1-S.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=S&code=113090&c=301&s=11&q=1&verify=step1-20261013-113090-301-11-S",
            "corrected": false,
            "answerVersion": "S",
            "originalAnswers": [
              "B"
            ],
            "point": "Rifampicin",
            "analysis": "Rifampicin 的直接靶點是細菌 RNA polymerase；其他三項皆可干擾細菌核糖體。",
            "trap": "題幹找不屬於轉譯抑制者。"
          }
        ]
      },
      {
        "id": "group-4",
        "title": "轉譯後修飾",
        "topic": "topic-9",
        "summary": "對照本組原題中的N-linked、Ubiquitin，辨認題幹指定的步驟與直接作用。",
        "questions": [
          {
            "number": 89,
            "text": "89.醣基化是蛋白質上常見的一種轉譯後修飾,有N-linked 與O-linked 兩種主要的鍵結方式,其中N-linked 主要是\n透過與蛋白質上的何種胺基酸結合? \nA.絲胺酸(serine) \nB.酪胺酸(tyrosine) \nC.天門冬醯胺(asparagine) \nD.天門冬胺酸(aspartate)",
            "regions": [
              {
                "page": 16,
                "rect": [
                  30,
                  603.76,
                  570.32,
                  753.76
                ]
              }
            ],
            "id": "112-1-1-89",
            "year": 112,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/112/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=112020&c=301&s=11&q=1&verify=step1-20261013-112020-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=112020&y=2023",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/112/1/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=112020&c=301&s=11&q=1&verify=step1-20261013-112020-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "C"
            ],
            "point": "N-linked",
            "analysis": "受體是 Asn 側鏈的醯胺氮。",
            "trap": "Asp 雖然中文名相近，側鏈為羧基，不能互換。"
          },
          {
            "number": 84,
            "text": "84.下列有關ubiquitin 對蛋白質進行的轉譯後修飾,何者錯誤? \n \nA.被ubiquitin 修飾的蛋白質一定會被26S proteasome 分解 \nB.被修飾的蛋白質在分解前,deubiquitinating enzymes 會先將ubiquitin 釋出並回收使用 \nC.ubiquitin 主要連接於標的蛋白上之離胺酸(lysine) \nD.E3 接合酶(E3 ligase)可將ubiquitin 連接於標的蛋白上",
            "regions": [
              {
                "page": 16,
                "rect": [
                  30,
                  162.78,
                  570.22,
                  291.78
                ]
              }
            ],
            "id": "115-2-1-84",
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
            "point": "Ubiquitin",
            "analysis": "並非所有泛素標記都導向蛋白酶體，作用取決於標記型態與細胞情境。",
            "trap": "看到「一定」先找單泛素或非典型降解鏈的功能。"
          }
        ]
      }
    ]
  }
});
