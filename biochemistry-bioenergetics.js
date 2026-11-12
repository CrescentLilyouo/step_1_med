biochemistryChapters.push({
  "id": "bioenergetics",
  "number": "06",
  "title": "生物能量學與能量耦合",
  "summary": "從機制與能量收支重新建立理解，配合算例、比較表與可追溯歷屆原題。",
  "sources": "Harper’s Illustrated Biochemistry, 31st ed. 生物能量學、生物氧化、呼吸鏈與糖解相關主題；補充來源見章末。",
  "references": "<p>本章為原創教學整理；歷屆題取自既有題庫，答案欄位保留原版本，解析另行撰寫。ATP產率等使用明示的教學近似，作題依題幹條件。</p><p>補充閱讀：<a href=\"https://www.ncbi.nlm.nih.gov/books/NBK9885/\">The Mechanism of Oxidative Phosphorylation</a>；<a href=\"https://www.ncbi.nlm.nih.gov/books/NBK482303/\">Biochemistry, Glycolysis</a>。正文以教學重組為主，非逐段譯文。</p>",
  "sections": [
    {
      "id": "topic-1",
      "title": "為什麼代謝不能只背箭頭",
      "html": "<p>代謝圖上的箭頭同時隱含方向、速率與調控，但三者不是同一件事。ΔG描述在指定條件下反應前進是否有利；活化自由能描述跨越過渡態的困難；酵素與受質供應影響實際通量。負的ΔG不能保證反應很快，正的標準自由能也不能保證細胞內反應不會進行。</p>\n<p>讀每條路徑先問目的、區室、碳來源、電子去向、ATP收支與調控。ATP是可被多種工作使用的能量媒介，NADH主要攜帶還原當量，acetyl-CoA則同時是碳單位與活化醯基。三者不能全部簡稱成相同的能量分子。</p>\n<p>閉卷回想：一個反應ΔG很負卻很慢，缺少的通常是什麼？答案是適當的動力學途徑或催化，而不是一定要再改變平衡。</p>\n"
    },
    {
      "id": "topic-2",
      "title": "ΔG、ΔG°′與反應商",
      "html": "<p>在指定溫度，ΔG=ΔG°′+RT ln\nQ。Q用當下產物與反應物的活度組成；稀溶液計算常以濃度近似，嚴格的對數內容為無因次。撇號表示生化轉換標準條件，常以固定pH處理質子，不表示細胞內各物質都實際處於標準濃度。</p>\n<p>當產物被下一步快速消耗，Q下降，RT ln\nQ更負，可以把原本標準條件不利的反應往前拉。反過來，產物累積也會削弱前進驅動力。因此要區分反應本身的標準性質與當下細胞環境。</p>\n<p>算例：310 K時RT約2.58 kJ/mol，若ΔG°′=+5\nkJ/mol、Q=0.01，則ΔG≈5+2.58×(−4.605)=−6.9\nkJ/mol。標準值正，實際值仍可負；解題必須統一J與kJ。</p>\n"
    },
    {
      "id": "topic-3",
      "title": "平衡常數與反應方向",
      "html": "<p>平衡時ΔG=0，且Q=K′eq，因此ΔG°′=−RT ln\nK′eq。K′eq&gt;1時標準自由能為負；K′eq=1時為零；K′eq&lt;1時為正。但平衡不是所有分子停止反應，而是正反通量相等，沒有淨變化。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>判斷</th>\n<th>含義</th>\n<th>不能直接推論</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>ΔG&lt;0</td>\n<td>目前條件下前進有利</td>\n<td>速率一定很快</td>\n</tr>\n<tr class=\"even\">\n<td>ΔG=0</td>\n<td>達平衡，無淨驅動</td>\n<td>分子完全靜止</td>\n</tr>\n<tr class=\"odd\">\n<td>ΔG°′&lt;0</td>\n<td>標準條件前進有利</td>\n<td>任何濃度都往前</td>\n</tr>\n<tr class=\"even\">\n<td>Keq很大</td>\n<td>平衡偏向產物</td>\n<td>一定不需要酵素</td>\n</tr>\n</tbody>\n</table></div>\n<p>酵素降低活化障礙，加快正反方向接近平衡，不改變同一反應的平衡常數。細胞穩態也不同於平衡：某中間物濃度不變，可能因持續生成與持續消耗互相抵銷，整條路徑仍有通量。</p>\n"
    },
    {
      "id": "topic-4",
      "title": "焓、熵與自發性",
      "html": "<p>ΔG=ΔH−TΔS。放熱指ΔH&lt;0，自發前進看ΔG&lt;0，兩者不能互換。吸熱反應若有足夠有利的熵變，仍可能自發；放熱反應也可能因熵代價而在某些條件下不利。</p>\n<p>蛋白摺疊常使鏈本身的構形熵下降，但釋放部分受限制的水可有利於環境熵；需要把蛋白與溶劑一起看。等溫等壓且適當系統定義下，自發過程與總熵增加相容，不能只取肽鏈一部分來判斷。</p>\n<p>國考遇到「一定放熱」要特別小心：知道ΔG負，仍不足以唯一決定ΔH正負。能確定的只是ΔH與TΔS合起來使自由能下降。</p>\n"
    },
    {
      "id": "topic-5",
      "title": "ATP水解與磷醯基轉移勢",
      "html": "<p>ATP→ADP+Pi的標準轉換自由能常用約−30.5\nkJ/mol；細胞內實際值受ATP/ADP/Pi、Mg²⁺、pH與條件影響，不能把此數字當成所有細胞固定的值。水解有利來自整個反應的產物穩定化、溶劑化與靜電等因素。</p>\n<p>「高能鍵一斷就放能」是容易誤導的說法：單獨斷鍵需要能量，淨釋能來自舊鍵打破與新鍵形成及產物整體較穩定。ATP的磷酸酐鍵不同於一般磷酸酯；但反應能量仍要比較整個過程。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>化合物</th>\n<th>教學用相對磷醯基轉移勢</th>\n<th>代謝角色</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>PEP</td>\n<td>高於ATP</td>\n<td>可把磷酸轉給ADP</td>\n</tr>\n<tr class=\"even\">\n<td>1,3-BPG</td>\n<td>高於ATP</td>\n<td>糖解的ATP生成前驅物</td>\n</tr>\n<tr class=\"odd\">\n<td>Phosphocreatine</td>\n<td>高於ATP</td>\n<td>快速緩衝ATP供應</td>\n</tr>\n<tr class=\"even\">\n<td>ATP</td>\n<td>居中</td>\n<td>接受高轉移勢來源，再驅動其他工作</td>\n</tr>\n<tr class=\"odd\">\n<td>Glucose-6-phosphate</td>\n<td>低於ATP</td>\n<td>葡萄糖磷酸化的產物</td>\n</tr>\n</tbody>\n</table></div>\n<p>PEP水解後產物可由烯醇型轉成較穩定的酮型pyruvate，是其高轉移勢的重要來源。不同表格數字受條件影響，題目指定數值時優先使用。</p>\n"
    },
    {
      "id": "topic-6",
      "title": "耦合不是把兩個反應寫在旁邊",
      "html": "<p>若反應A自由能+14、反應B為−30，真正耦合且化學計量相容時總ΔG=−16\nkJ/mol。自由能可以相加，但必須有實際共同中間物、直接基團轉移或機械／電化學連結，不能在紙上相加就使任意兩個互不相關反應耦合。</p>\n<p>Hexokinase不是先讓ATP在旁邊水解，再把熱拿來磷酸化葡萄糖；它在活性中心將ATP的磷醯基直接轉給葡萄糖。ATP\nsynthase則透過質子電化學梯度與旋轉構形變化驅動合成，屬另一種耦合方式。</p>\n<p>ATP→AMP+PPi後，PPi再水解，可使整體反應更有利。回收AMP至ATP通常需要相當於兩個高能磷酸鍵的能量投入，因此不能把ATP→AMP與ATP→ADP在能量帳上一律算相同。</p>\n"
    },
    {
      "id": "topic-7",
      "title": "氧化還原：電子流向與能量",
      "html": "<p>氧化是失去電子，還原是得到電子。NAD⁺接受氫化物後成NADH；FAD可接受兩電子與兩質子成FADH₂，且某些黃素可經單電子中間態。NADH與NADPH雖化學反應性相似，因酵素辨認與細胞池分配而有不同功能分工。</p>\n<p>常見分工是NAD⁺/NADH偏向分解代謝與能量回收，NADPH提供還原性生合成與抗氧化所需電子。這是主要角色，不是每個區室所有反應都遵守絕對排他規則。</p>\n<p>ΔG°′=−nFΔE°′，ΔE°′以接受者減供應者的還原電位計算。若電子由較低還原電位供體流向較高電位受體，ΔE正而ΔG負。n是電子數，不是質子數。下一章將看這個自由能如何用於把質子泵出基質。</p>\n"
    },
    {
      "id": "topic-8",
      "title": "兩種ATP生成與能量狀態",
      "html": "<p>受質階層磷酸化由高轉移勢受質直接將基團轉給ADP或GDP。它可出現在細胞質糖解，也可出現在粒線體的succinyl-CoA\nsynthetase反應；不能背成只有細胞質。氧化磷酸化則仰賴電子傳遞建立梯度，再由ATP\nsynthase利用。</p>\n<p>Energy\ncharge=(ATP+0.5ADP)/(ATP+ADP+AMP)，範圍0到1。若ATP、ADP、AMP分別為6、3、1，能量荷為(6+1.5)/10=0.75。這只是腺嘌呤核苷酸池狀態的指標，不能代表所有區室的能量需求或直接等於細胞健康程度。</p>\n<p>Adenylate\nkinase的2ADP⇌ATP+AMP讓ATP消耗引發較敏感的AMP變化，連到AMPK等能量感測。高能量常抑制分解供能、支持儲存，低能量則相反；實際仍取決於器官與訊號。學代謝調控時要同時說出「哪個器官、哪個酵素、哪個狀態」。</p>\n"
    }
  ],
  "questions": [
    {
      "title": "01　ΔG°′為+5、310K且Q=0.01，ΔG約多少？",
      "prompt": "<p>ΔG°′為+5、310K且Q=0.01，ΔG約多少？</p>",
      "answer": "<p>RT約2.58 kJ/mol，ΔG=5+2.58 ln0.01≈−6.9 kJ/mol。標準不利不等於實際不利。</p>"
    },
    {
      "title": "02　平衡時分子是否停止反應？",
      "prompt": "<p>平衡時分子是否停止反應？</p>",
      "answer": "<p>否，正反反應速率相等，只有淨變化為零。穩態也未必達平衡。</p>"
    },
    {
      "title": "03　自發過程是否必定放熱？",
      "prompt": "<p>自發過程是否必定放熱？</p>",
      "answer": "<p>否。ΔG=ΔH−TΔS，吸熱也可能被有利熵變補償。</p>"
    },
    {
      "title": "04　斷開ATP的鍵本身是否釋能？",
      "prompt": "<p>斷開ATP的鍵本身是否釋能？</p>",
      "answer": "<p>單獨斷鍵需要能量；整體水解的產物形成與穩定化才造成淨自由能下降。</p>"
    },
    {
      "title": "05　兩反應ΔG為+14及−30，可否直接保證前者進行？",
      "prompt": "<p>兩反應ΔG為+14及−30，可否直接保證前者進行？</p>",
      "answer": "<p>總和雖−16，但需真實化學或物理耦合，不能只在紙上相加。</p>"
    },
    {
      "title": "06　ATP→AMP的回收成本與ATP→ADP相同嗎？",
      "prompt": "<p>ATP→AMP的回收成本與ATP→ADP相同嗎？</p>",
      "answer": "<p>通常不同。AMP回到ATP需兩次磷酸化當量，PPi水解也支持整體方向。</p>"
    },
    {
      "title": "07　ΔE為正，ΔG應為何符號？",
      "prompt": "<p>ΔE為正，ΔG應為何符號？</p>",
      "answer": "<p>ΔG=−nFΔE，n及F為正，因此ΔG負；n指電子數。</p>"
    },
    {
      "title": "08　ATP6、ADP3、AMP1，energy charge為何？",
      "prompt": "<p>ATP6、ADP3、AMP1，energy charge為何？</p>",
      "answer": "<p>(6+0.5×3)/(6+3+1)=0.75。它是核苷酸池指標，不代表全部區室狀態。</p>"
    },
    {
      "title": "09　受質階層磷酸化是否只在胞質？",
      "prompt": "<p>受質階層磷酸化是否只在胞質？</p>",
      "answer": "<p>否，TCA的succinyl-CoA synthetase也是粒線體內例子。</p>"
    },
    {
      "title": "10　酵素使反應變快，會改變Keq嗎？",
      "prompt": "<p>酵素使反應變快，會改變Keq嗎？</p>",
      "answer": "<p>不會。酵素降低活化障礙，改變接近平衡速度，不改變同反應的平衡常數。</p>"
    }
  ],
  "recalls": [
    [
      "ΔG°′為+5、310K且Q=0.01，ΔG約多少？",
      "RT約2.58 kJ/mol，ΔG=5+2.58 ln0.01≈−6.9 kJ/mol。標準不利不等於實際不利。"
    ],
    [
      "ΔG°′為+5、310K且Q=0.01，ΔG約多少？",
      "RT約2.58 kJ/mol，ΔG=5+2.58 ln0.01≈−6.9 kJ/mol。標準不利不等於實際不利。"
    ],
    [
      "平衡時分子是否停止反應？",
      "否，正反反應速率相等，只有淨變化為零。穩態也未必達平衡。"
    ],
    [
      "自發過程是否必定放熱？",
      "否。ΔG=ΔH−TΔS，吸熱也可能被有利熵變補償。"
    ],
    [
      "斷開ATP的鍵本身是否釋能？",
      "單獨斷鍵需要能量；整體水解的產物形成與穩定化才造成淨自由能下降。"
    ],
    [
      "兩反應ΔG為+14及−30，可否直接保證前者進行？",
      "總和雖−16，但需真實化學或物理耦合，不能只在紙上相加。"
    ],
    [
      "ΔE為正，ΔG應為何符號？",
      "ΔG=−nFΔE，n及F為正，因此ΔG負；n指電子數。"
    ],
    [
      "ATP6、ADP3、AMP1，energy charge為何？",
      "(6+0.5×3)/(6+3+1)=0.75。它是核苷酸池指標，不代表全部區室狀態。"
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
            "number": 50,
            "text": "50 \n在標準條件下,下列何者在水解所釋出的自由能(free energy)最大? \nAcreatine phosphate \n \nBphosphoenolpyruvate \nCATP \n \nD1,3-bisphosphoglycerate \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  383.69,
                  570.0,
                  423.18
                ]
              }
            ],
            "id": "96-1-2-50",
            "year": 96,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/96/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=096040&c=122&s=2001&q=1&verify=step1-20261013-096040-122-2001-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=096040&y=2007",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/96/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=096040&c=122&s=2001&q=1&verify=step1-20261013-096040-122-2001-M",
            "corrected": true,
            "answerVersion": "M",
            "point": "機制與選項判讀",
            "analysis": "PEP水解的標準自由能下降幅度大於題目其他選項；產物由烯醇轉為酮型的穩定化是重要原因。",
            "trap": "先說出分子機制或計算依據，再核對選項；不要只記答案字母。"
          },
          {
            "number": 48,
            "text": "48 \n下列有關自由能變化(∆G)的敘述中何者正確? \nA當K'eq 大於1 時,∆G'o 小於0 \nB當K'eq 小於1 時,∆G'o 小於0 \nC當K'eq 等於1 時,∆G'o 等於1 \nD對任一反應而言,∆G'o 為一常數 \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  444.36,
                  570.0,
                  487.86
                ]
              }
            ],
            "id": "98-1-2-48",
            "year": 98,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/98/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=098020&c=103&s=c021&q=1&verify=step1-20261013-098020-103-c021-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=098020&y=2009",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/98/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=098020&c=103&s=c021&q=1&verify=step1-20261013-098020-103-c021-M",
            "corrected": true,
            "answerVersion": "M",
            "point": "機制與選項判讀",
            "analysis": "ΔG°′=−RT ln K′eq；K′eq大於1時ln為正，故標準自由能為負。實際ΔG另受Q影響。",
            "trap": "先說出分子機制或計算依據，再核對選項；不要只記答案字母。"
          },
          {
            "number": 96,
            "text": "96.下列關於人類細胞內受質階層磷酸化(substrate-level phosphorylation)與氧化磷酸化(oxidative \nphosphorylation)生化反應進行之位點(compartments)分布,何者正確? \n \nA.受質階層磷酸化只在粒線體中進行,氧化磷酸化在細胞質中進行 \nB.受質階層磷酸化只在細胞質中進行,氧化磷酸化在粒線體中進行 \nC.受質階層磷酸化可分別在細胞質及粒線體中進行,氧化磷酸化在粒線體中進行 \nD.受質階層磷酸化與氧化磷酸化皆只在粒線體中進行 \n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  655.61,
                  570.0,
                  779.05
                ]
              }
            ],
            "id": "106-2-1-96",
            "year": 106,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/106/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=106100&c=301&s=11&q=1&verify=step1-20261013-106100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=106100&y=2017",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/106/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=106100&c=301&s=11&q=1&verify=step1-20261013-106100-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "C"
            ],
            "point": "機制與選項判讀",
            "analysis": "受質階層磷酸化可在胞質糖解及粒線體TCA出現；氧化磷酸化位於粒線體內膜。",
            "trap": "先說出分子機制或計算依據，再核對選項；不要只記答案字母。"
          },
          {
            "number": 75,
            "text": "75.在一個酵素催化反應中,酵素改變的是原化學反應的:\n \nA.平衡常數(equilibrium constant)\nB.速率常數(rate constant)\nC.反應物和產物之間的自由能差(free energy difference)\nD.產物的化學結構\n",
            "regions": [
              {
                "page": 11,
                "rect": [
                  30.0,
                  506.03,
                  569.96,
                  609.49
                ]
              }
            ],
            "id": "110-1-1-75",
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
            "point": "機制與選項判讀",
            "analysis": "酵素降低活化障礙、改變速率，不改變同反應的平衡常數及反應物產物自由能差。",
            "trap": "先說出分子機制或計算依據，再核對選項；不要只記答案字母。"
          },
          {
            "number": 74,
            "text": "74.某種蛋白質可用尿素(urea)將其變性(denature),且將尿素移除後會自發性地折疊回其具有活性的三級\n結構。關於下列熱力學對於該蛋白質再折疊(protein refolding)的描述,何者錯誤? \nA.蛋白質本身亂度(entropy)一定減少  \nB.過程一定是放熱反應  \nC.反應過程的自由能(free energy)一定減少  \nD.總亂度(蛋白質本身和環境)一定增加 \n \n \n \n\n",
            "regions": [
              {
                "page": 13,
                "rect": [
                  30.0,
                  556.07,
                  587.0,
                  757.0
                ]
              },
              {
                "page": 14,
                "rect": [
                  30.0,
                  28.0,
                  587.0,
                  31.55
                ]
              }
            ],
            "id": "115-1-1-74",
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
            "point": "機制與選項判讀",
            "analysis": "自發復性代表適當條件下ΔG有利，不能單憑此斷言一定放熱；須同時考慮焓與總熵。",
            "trap": "先說出分子機制或計算依據，再核對選項；不要只記答案字母。"
          }
        ]
      }
    ]
  }
});
