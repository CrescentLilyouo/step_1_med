/* Curated from existing biochemistry bank; original IDs and official answer fields retained. */
const biochemistryExamAnalysis = {
  "bankCount": 1022,
  "yearMin": 96,
  "yearMax": 115,
  "groups": [
    {
      "id": "charge",
      "title": "pH、pKa、pI 與分子電荷",
      "topic": "charge",
      "summary": "出題會從辨認兩性離子，改成逐個基團算電荷，再延伸到等電點。先比 pH 與每個 pKa，再把電荷相加；不能直接把所有 pKa 平均。",
      "questions": [
        {
          "number": 41,
          "text": "α-胺基酸中的胺基(-NH2)與羧基(-COOH),其pKa 值分別為10 和2,當pH 接近中性時,\n胺基會接受一個質子(proton),而羧基則失去一個質子,這種狀態或現象稱為: \nA 異構現象(isomerization) \nB中和現象(neutralization) \nC兩性離子(zwitterions) \nD立體異構現象(stereoisomerization)",
          "regions": [
            {
              "page": 4,
              "rect": [
                30.0,
                500.93,
                570.0,
                562.91
              ]
            }
          ],
          "id": "96-2-2-41",
          "year": 96,
          "session": 2,
          "paper": 2,
          "subject": "biochemistry",
          "pdf": "exams/96/2/medicine-2-Q.pdf",
          "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=096130&c=103&s=2001&q=1&verify=step1-20261013-096130-103-2001-Q",
          "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=096130&y=2007",
          "answers": [
            "C"
          ],
          "answerPdf": "exams/96/2/medicine-2-M.pdf",
          "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=096130&c=103&s=2001&q=1&verify=step1-20261013-096130-103-2001-M",
          "corrected": true,
          "answerVersion": "M",
          "point": "兩性離子不是「完全不帶電」",
          "analysis": "中性附近，α-胺基以 NH₃⁺ 為主，羧基以 COO⁻ 為主；同一分子同時有正負電中心，稱兩性離子。答案 C。A、D 是異構分類，沒有描述同時帶正負電；B 的中和反應也不是這個分子形式的名稱。",
          "trap": "先寫出 NH₃⁺–CHR–COO⁻，再判斷淨電荷，別把淨零與各基團皆不帶電混為一談。"
        },
        {
          "number": 49,
          "text": "組胺酸(histidine)的胺基(-NH2)、側鏈(R-group)與羧基(-COOH)的pKa值分別為9、6 和2\n,當此胺基酸處於pH 5.0 的環境中時,溶液中大部分組胺酸分子的帶電狀態應為: \nA帶二個正電荷 \nB帶一個正電荷 \nC不帶電 \nD帶一個負電荷",
          "regions": [
            {
              "page": 4,
              "rect": [
                30.0,
                715.98,
                570.0,
                756.48
              ]
            }
          ],
          "id": "98-2-2-49",
          "year": 98,
          "session": 2,
          "paper": 2,
          "subject": "biochemistry",
          "pdf": "exams/98/2/medicine-2-Q.pdf",
          "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=098140&c=103&s=c021&q=1&verify=step1-20261013-098140-103-c021-Q",
          "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=098140&y=2009",
          "answers": [
            "B"
          ],
          "answerPdf": "exams/98/2/medicine-2-M.pdf",
          "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=098140&c=103&s=c021&q=1&verify=step1-20261013-098140-103-c021-M",
          "corrected": true,
          "answerVersion": "M",
          "point": "三個基團分別判斷，不只看側鏈",
          "analysis": "pH 5 低於胺基 pKa 9，胺基主要 +1；高於羧基 pKa 2，羧基主要 −1；低於 imidazole pKa 6，側鏈主要 +1。總和 +1，答案 B。A 忽略羧基負電，C 忽略側鏈正電，D 則把質子化方向判反。這是主要分子形式的整數電荷，不代表溶液中每個分子都同一狀態。",
          "trap": "依序寫 +1、−1、+1，再加總。若題目改問平均電荷，還需要各基團解離分率。"
        },
        {
          "number": 26,
          "text": "組胺酸(histidine)的胺基(-NH2)、側鏈(R-group)與羧基(-COOH)的pKa 值分別為9、6 和2,\n此氨基酸的等電點(isoelectric point)應為: \nA7.5 \nB4 \nC6 \nD8.5",
          "regions": [
            {
              "page": 3,
              "rect": [
                30.0,
                81.39,
                570.22,
                121.89
              ]
            }
          ],
          "id": "101-1-2-26",
          "year": 101,
          "session": 1,
          "paper": 2,
          "subject": "biochemistry",
          "pdf": "exams/101/1/medicine-2-Q.pdf",
          "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=101030&c=101&s=0102&q=1&verify=step1-20261013-101030-101-0102-Q",
          "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=101030&y=2012",
          "answers": [
            "A"
          ],
          "answerPdf": "exams/101/1/medicine-2-M.pdf",
          "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=101030&c=101&s=0102&q=1&verify=step1-20261013-101030-101-0102-M",
          "corrected": false,
          "answerVersion": "M",
          "originalAnswers": [
            "A"
          ],
          "point": "等電點：找夾住淨零形式的兩個 pKa",
          "analysis": "Histidine 低 pH 時淨電荷 +2；通過 pKa 2 後為 +1，通過側鏈 pKa 6 後為 0，再通過胺基 pKa 9 後為 −1。因此 pI ≈ (6+9)/2 = 7.5，答案 A。B 用錯解離區間，C 只取一個 pKa，D 不是夾住淨零的兩個數值平均。此為下一章 pI 計算的銜接題。",
          "trap": "先列 +2 → +1 → 0 → −1，圈住 0 左右兩個 pKa。不要將三個 pKa 一起平均。"
        },
        {
          "number": 28,
          "text": "在水溶液的pH值低於胺基酸的pI值時,該胺基酸的主要性質為何? \nA 呈淨負電荷 \n\n \nB.呈淨正電荷 \nC.呈中性 \nD.呈正、負電荷等量",
          "regions": [
            {
              "page": 3,
              "rect": [
                30.0,
                780.76,
                570.0,
                807.0
              ]
            },
            {
              "page": 4,
              "rect": [
                30.0,
                28.0,
                570.0,
                66.89
              ]
            }
          ],
          "id": "105-1-2-28",
          "year": 105,
          "session": 1,
          "paper": 2,
          "subject": "biochemistry",
          "pdf": "exams/105/1/medicine-2-Q.pdf",
          "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=105020&c=301&s=66&q=1&verify=step1-20261013-105020-301-66-Q",
          "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=105020&y=2016",
          "answers": [
            "B"
          ],
          "answerPdf": "exams/105/1/medicine-2-M.pdf",
          "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=105020&c=301&s=66&q=1&verify=step1-20261013-105020-301-66-M",
          "corrected": false,
          "answerVersion": "M",
          "originalAnswers": [
            "B"
          ],
          "point": "把單一基團 pKa 延伸成整個分子 pI",
          "analysis": "pH 低於 pI 時，相對於淨零狀態，分子較容易保留質子，平均淨電荷偏正，答案 B。A 是 pH 高於 pI 的方向；C、D 比較接近 pH = pI 時的淨電荷描述。",
          "trap": "pH 與 pKa 比較看一個解離步驟；pH 與 pI 比較看整個分子的平均淨電荷。"
        },
        {
          "number": 27,
          "text": "組胺酸(histidine)有三個酸解離常數(pKa)值,分別為1.82、 6.0、 9.17。其中那個官能基團的pKa為1.82 ? \n \nA.胺基(-NH3\n+) \nB.羧基(-COOH) \nC.側鏈異吡唑基(side-chain imidazole group) \nD.α碳原子(α carbon)的氫原子",
          "regions": [
            {
              "page": 3,
              "rect": [
                30.0,
                471.41,
                570.0,
                541.37
              ]
            }
          ],
          "id": "105-2-2-27",
          "year": 105,
          "session": 2,
          "paper": 2,
          "subject": "biochemistry",
          "pdf": "exams/105/2/medicine-2-Q.pdf",
          "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=105100&c=301&s=66&q=1&verify=step1-20261013-105100-301-66-Q",
          "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=105100&y=2016",
          "answers": [
            "B"
          ],
          "answerPdf": "exams/105/2/medicine-2-M.pdf",
          "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=105100&c=301&s=66&q=1&verify=step1-20261013-105100-301-66-M",
          "corrected": false,
          "answerVersion": "M",
          "originalAnswers": [
            "B"
          ],
          "point": "由 pKa 辨認官能基",
          "analysis": "題目給 histidine 三個 pKa 為 1.82、6.0、9.17；最低的 1.82 對應羧基，答案 B。胺基約對應 9.17，imidazole 側鏈約對應 6.0；α 碳上的氫不是這三步一般水溶液酸鹼滴定的對象。原題 C 的中文名稱保留原卷文字，正確英文官能基為 imidazole。",
          "trap": "羧基先失 H，imidazole 居中，胺基較晚失 H；數值依題目給定條件使用。"
        },
        {
          "number": 74,
          "text": "某多胜肽(polypeptide)在其等電點pH(isolelectric pH)的溶液中,該多胜肽的電荷為何?\nA.胺基(amino)和羧基(carboxyl)末端(termini)皆帶正電荷\nB.胺基和羧基末端皆不帶電荷\nC.淨電荷為零\nD.帶有四個淨電荷",
          "regions": [
            {
              "page": 11,
              "rect": [
                30.0,
                593.72,
                570.0,
                699.19
              ]
            }
          ],
          "id": "108-1-1-74",
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
          "point": "淨電荷零不等於所有基團都不帶電",
          "analysis": "等電點定義為平均淨電荷為零，答案 C。它不要求胺基與羧基末端都呈中性，也不表示兩端都帶正電；D 的四個淨電荷與定義不合。",
          "trap": "把「正負相抵」與「完全沒有電荷」分開。"
        }
      ]
    },
    {
      "id": "bonds",
      "title": "共價鍵、氫鍵與結構穩定性",
      "topic": "interactions",
      "summary": "同一組作用力常換成「何者是共價」「何者不是非共價」「受氧化還原影響」或「作用在主幹還是側鏈」。先辨認結構層級與反應條件，再挑選作用力。",
      "questions": [
        {
          "number": 27,
          "text": "根據Watson-Crick 的DNA 模式,有\n關兩股核苷酸鏈結合\n的力量,下列何者為非?\nA各鹼基間所形成的氫鍵(hydrogen bonds between bases)\nB鹼基間的堆積力量(Stacking of the bases)\nC鹼基間所產生的凡得瓦爾交互作用(Van der Waals interaction)\nD磷酸根與鹼基間之離子交互作用(ionic interaction)",
          "regions": [
            {
              "page": 3,
              "rect": [
                30.0,
                229.81,
                570.0,
                297.25
              ]
            }
          ],
          "id": "97-2-2-27",
          "year": 97,
          "session": 2,
          "paper": 2,
          "subject": "biochemistry",
          "pdf": "exams/97/2/medicine-2-Q.pdf",
          "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=097140&c=103&s=c021&q=1&verify=step1-20261013-097140-103-c021-Q",
          "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=097140&y=2008",
          "answers": [
            "D"
          ],
          "answerPdf": "exams/97/2/medicine-2-M.pdf",
          "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=097140&c=103&s=c021&q=1&verify=step1-20261013-097140-103-c021-M",
          "corrected": true,
          "answerVersion": "M",
          "point": "DNA 雙股穩定不能只背氫鍵",
          "analysis": "題目問「何者為非」。鹼基配對氫鍵、鹼基堆疊及 van der Waals 作用都與雙股穩定有關；磷酸根與鹼基間的離子作用不是題目所指的標準雙股結合機制，答案 D。",
          "trap": "區分同一股的共價骨架與兩股之間的非共價作用；鹼基堆疊也要算進來。"
        },
        {
          "number": 29,
          "text": "下列何者不是穩定蛋白質三級結構的非共價交互作用力? \nA氫鍵(hydrogen bond) \nB凡德瓦爾力(van der Waals interaction) \nC離子交互作用(ionic interaction) \nD雙硫鍵(disulfide bond)",
          "regions": [
            {
              "page": 3,
              "rect": [
                30.0,
                386.3,
                570.22,
                429.8
              ]
            }
          ],
          "id": "100-1-2-29",
          "year": 100,
          "session": 1,
          "paper": 2,
          "subject": "biochemistry",
          "pdf": "exams/100/1/medicine-2-Q.pdf",
          "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=100030&c=101&s=0102&q=1&verify=step1-20261013-100030-101-0102-Q",
          "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=100030&y=2011",
          "answers": [
            "D"
          ],
          "answerPdf": "exams/100/1/medicine-2-M.pdf",
          "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=100030&c=101&s=0102&q=1&verify=step1-20261013-100030-101-0102-M",
          "corrected": true,
          "answerVersion": "M",
          "point": "否定問法：不是非共價的就是共價",
          "analysis": "雙硫鍵是兩個硫原子間的共價鍵，答案 D。氫鍵、van der Waals 與離子交互作用均屬非共價作用。",
          "trap": "把題幹的「不是」圈出來，避免看到常見結構作用力就選。"
        },
        {
          "number": 27,
          "text": "最常見於蛋白質之三級結構內部的共價交互作用為: \nA氫鍵(Hydrogen bond) \nB凡德瓦爾力(van der Waals interaction) \nC離子交互作用(Ionic interaction) \nD雙硫鍵(Disulfide bond)",
          "regions": [
            {
              "page": 3,
              "rect": [
                30.0,
                247.11,
                570.22,
                292.11
              ]
            }
          ],
          "id": "100-2-2-27",
          "year": 100,
          "session": 2,
          "paper": 2,
          "subject": "biochemistry",
          "pdf": "exams/100/2/medicine-2-Q.pdf",
          "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=100140&c=101&s=0102&q=1&verify=step1-20261013-100140-101-0102-Q",
          "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=100140&y=2011",
          "answers": [
            "D"
          ],
          "answerPdf": "exams/100/2/medicine-2-M.pdf",
          "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=100140&c=101&s=0102&q=1&verify=step1-20261013-100140-101-0102-M",
          "corrected": false,
          "answerVersion": "M",
          "originalAnswers": [
            "D"
          ],
          "point": "同年改成正向問法，核心不變",
          "analysis": "題目問三級結構中的共價交互作用，四個選項裡雙硫鍵符合，答案 D。A、B、C 均為非共價。這不代表每個蛋白質都必須具有雙硫鍵。",
          "trap": "和 100 年第 1 次第 29 題並讀：由否定非共價改成直接問共價。"
        },
        {
          "number": 26,
          "text": "維繫蛋白質三級結構穩定性作用力之中,何者最易受到所處環境之氧化還原狀態的影響? \nA雙硫鍵(disulfide bond) \nB氫鍵(hydrogen bond) \nC凡德瓦爾力(van der Waals interaction) \nD離子交互作用(ionic interaction)",
          "regions": [
            {
              "page": 4,
              "rect": [
                30.0,
                84.62,
                570.22,
                144.62
              ]
            }
          ],
          "id": "103-2-2-26",
          "year": 103,
          "session": 2,
          "paper": 2,
          "subject": "biochemistry",
          "pdf": "exams/103/2/medicine-2-Q.pdf",
          "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=103100&c=101&s=0102&q=1&verify=step1-20261013-103100-101-0102-Q",
          "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=103100&y=2014",
          "answers": [
            "A"
          ],
          "answerPdf": "exams/103/2/medicine-2-M.pdf",
          "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=103100&c=101&s=0102&q=1&verify=step1-20261013-103100-101-0102-M",
          "corrected": false,
          "answerVersion": "M",
          "originalAnswers": [
            "A"
          ],
          "point": "從鍵結分類改問氧化還原敏感性",
          "analysis": "雙硫鍵可由 cysteine 的硫醇氧化形成，也可被還原斷開，因此最直接受氧化還原環境影響，答案 A。氫鍵、van der Waals 與鹽橋不以這種硫醇／雙硫鍵轉換為核心。",
          "trap": "看到還原劑、氧化環境，先聯想到 –SH 與 –S–S– 的互換。"
        },
        {
          "number": 75,
          "text": "下列何者為形成蛋白質二級結構(如α-螺旋)的最主要原因? \n \nA.疏水性(hydrophobic)交互作用  \nB.靜電作用  \nC.分子內氫鍵(hydrogen bond) \nD.兩條α-螺旋鏈之間的雙硫鍵(disulfide bond)",
          "regions": [
            {
              "page": 11,
              "rect": [
                30.0,
                611.05,
                570.0,
                716.05
              ]
            }
          ],
          "id": "107-1-1-75",
          "year": 107,
          "session": 1,
          "paper": 1,
          "subject": "biochemistry",
          "pdf": "exams/107/1/medicine-1-Q.pdf",
          "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=107020&c=301&s=55&q=1&verify=step1-20261013-107020-301-55-Q",
          "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=107020&y=2018",
          "answers": [
            "C"
          ],
          "answerPdf": "exams/107/1/medicine-1-M.pdf",
          "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=107020&c=301&s=55&q=1&verify=step1-20261013-107020-301-55-M",
          "corrected": false,
          "answerVersion": "M",
          "originalAnswers": [
            "C"
          ],
          "point": "二級結構的主幹氫鍵",
          "analysis": "α-螺旋主要以胜肽主幹 C=O 與 N–H 間的氫鍵穩定，答案 C。疏水作用對整體摺疊很重要，卻不是本題辨認二級結構的最佳答案；兩條螺旋之間的雙硫鍵也不是形成單一 α-螺旋的基本原因。",
          "trap": "題目先說二級結構，再問主要因素；不要把三級摺疊的疏水核心直接搬過來。"
        },
        {
          "number": 75,
          "text": "下列何者為穩定蛋白質α-螺旋結構的主要因素?\n \nA.胜肽鏈上α碳原子之間的疏水性(hydrophobic)交互作用\nB.螺旋結構內胜肽鏈主幹上的胜肽鍵(peptide bond)之間的氫鍵作用(hydrogen bond)\nC.R基團(R group;side chain)之間靜電性的作用(electrostatic interaction)\nD.R基團(R group;side chain)之間氫鍵(hydrogen bond)",
          "regions": [
            {
              "page": 14,
              "rect": [
                30.0,
                443.63,
                569.96,
                573.7
              ]
            }
          ],
          "id": "113-1-1-75",
          "year": 113,
          "session": 1,
          "paper": 1,
          "subject": "biochemistry",
          "pdf": "exams/113/1/medicine-1-Q.pdf",
          "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=113020&c=301&s=11&q=1&verify=step1-20261013-113020-301-11-Q",
          "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=113020&y=2024",
          "answers": [
            "B"
          ],
          "answerPdf": "exams/113/1/medicine-1-M.pdf",
          "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=113020&c=301&s=11&q=1&verify=step1-20261013-113020-301-11-M",
          "corrected": false,
          "answerVersion": "M",
          "originalAnswers": [
            "B"
          ],
          "point": "同考點深化：主幹與 R 基團分開",
          "analysis": "答案 B，關鍵是螺旋內胜肽主幹上的氫鍵。A 的 α 碳疏水作用、C 的側鏈靜電、D 的側鏈氫鍵都不是 α-螺旋主幹規律結構的主要穩定機制。",
          "trap": "107 年考「哪種力」，113 年進一步考「哪個位置的哪種力」。"
        },
        {
          "number": 74,
          "text": "下列鍵結或作用力中,何者在生理條件下的穩定度最高? \n \nA.離子鍵(ionic bonds∕salt bridge)  \nB.共價鍵(covalent bonds)  \nC.氫鍵(hydrogen bonds)  \nD.凡得瓦力(van der Waals interactions)",
          "regions": [
            {
              "page": 14,
              "rect": [
                30.0,
                216.78,
                570.32,
                345.81
              ]
            }
          ],
          "id": "114-1-1-74",
          "year": 114,
          "session": 1,
          "paper": 1,
          "subject": "biochemistry",
          "pdf": "exams/114/1/medicine-1-Q.pdf",
          "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=114020&c=301&s=0101&q=1&verify=step1-20261013-114020-301-0101-Q",
          "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=114020&y=2025",
          "answers": [
            "B"
          ],
          "answerPdf": "exams/114/1/medicine-1-M.pdf",
          "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=114020&c=301&s=0101&q=1&verify=step1-20261013-114020-301-0101-M",
          "corrected": false,
          "answerVersion": "M",
          "originalAnswers": [
            "B"
          ],
          "point": "比較一般鍵結穩定度",
          "analysis": "在這組選項與一般生理條件的比較下，共價鍵最穩定，答案 B。離子、氫鍵及 van der Waals 單個作用通常較弱；但大量非共價作用累積仍能穩定大分子。",
          "trap": "不能由單一作用較弱，推論它對蛋白質功能不重要；也不要把非共價作用排成無視環境的固定強弱順序。"
        }
      ]
    },
    {
      "id": "folding",
      "title": "疏水效應與摺疊熱力學",
      "topic": "interactions",
      "summary": "考法會把抽象疏水作用放入 HbS 聚集，或用自發摺疊考自由能、焓與熵的區別。分析時同時看蛋白質和周圍水，別只看蛋白質本身。",
      "questions": [
        {
          "number": 74,
          "text": "血紅素S(Hemoglobin S)是由於其中的胺基酸Glu被置換成Val,致使血紅素S有聚集(aggregation)的現象,\n其原因為何?\n \nA.血紅素S間形成共價鍵(covalent bond)\nB.血紅素S間形成雙硫鍵(disulfide bond)\nC.血紅素S間的疏水性交互作用(hydrophobic interactions)增加\nD.血紅素S間的離子交互作用(ionic interactions)增加",
          "regions": [
            {
              "page": 11,
              "rect": [
                30.0,
                359.71,
                569.96,
                483.86
              ]
            }
          ],
          "id": "109-2-1-74",
          "year": 109,
          "session": 2,
          "paper": 1,
          "subject": "biochemistry",
          "pdf": "exams/109/2/medicine-1-Q.pdf",
          "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=109100&c=301&s=11&q=1&verify=step1-20261013-109100-301-11-Q",
          "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=109100&y=2020",
          "answers": [
            "C"
          ],
          "answerPdf": "exams/109/2/medicine-1-M.pdf",
          "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=109100&c=301&s=11&q=1&verify=step1-20261013-109100-301-11-M",
          "corrected": false,
          "answerVersion": "M",
          "originalAnswers": [
            "C"
          ],
          "point": "Glu → Val：由帶電側鏈換成疏水側鏈",
          "analysis": "Glu 的側鏈在生理 pH 通常帶負電，Val 則為非極性；替換增加特定疏水接觸，與 HbS 聚集相關，答案 C。不是新形成共價鍵或雙硫鍵，也不是增加離子作用。HbS 聚合還受去氧狀態等條件影響，不能理解成所有狀態下都同程度聚集。",
          "trap": "從側鏈性質改變 → 表面互動改變 → 聚集來推，不需只背疾病名稱。"
        },
        {
          "number": 74,
          "text": "某種蛋白質可用尿素(urea)將其變性(denature),且將尿素移除後會自發性地折疊回其具有活性的三級\n結構。關於下列熱力學對於該蛋白質再折疊(protein refolding)的描述,何者錯誤? \nA.蛋白質本身亂度(entropy)一定減少  \nB.過程一定是放熱反應  \nC.反應過程的自由能(free energy)一定減少  \nD.總亂度(蛋白質本身和環境)一定增加",
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
          "point": "自發不等於一定放熱",
          "analysis": "答案 B。恆溫恆壓下，自發過程的判據是 ΔG < 0；由 ΔG = ΔH − TΔS，不能單憑自發就說 ΔH 一定小於 0。摺疊通常降低蛋白質構形熵，但溶劑等環境的熵也必須計入。題目 D 應依蛋白質加環境的總熵理解，不是只看蛋白質自己的亂度。此題為能量學延伸。",
          "trap": "看到「自發」，先想 ΔG；看到「放熱」，是在問 ΔH。先確認系統邊界，才比較熵。"
        }
      ]
    },
    {
      "id": "catalysis",
      "title": "活化能、反應速率與化學平衡",
      "topic": "hydrolysis",
      "summary": "這組原理在不同年份反覆改寫：降低什麼、改變哪個常數、是否改變平衡、最緊密結合哪個狀態。核心是降低活化能障礙，而非改變反應物與產物的總自由能差。",
      "questions": [
        {
          "number": 27,
          "text": "酵素能夠有效降低反應活化能,以提升反應速率的關鍵在於: \nA酵素能與受質(substrate)緊密的結合 \nB酵素能與反應過渡態(transition state)緊密的結合 \nC酵素能與反應中間物(intermediate)緊密的結合 \nD酵素能與產物(product)緊密的結合",
          "regions": [
            {
              "page": 4,
              "rect": [
                30.0,
                144.62,
                570.22,
                244.58
              ]
            }
          ],
          "id": "103-2-2-27",
          "year": 103,
          "session": 2,
          "paper": 2,
          "subject": "biochemistry",
          "pdf": "exams/103/2/medicine-2-Q.pdf",
          "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=103100&c=101&s=0102&q=1&verify=step1-20261013-103100-101-0102-Q",
          "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=103100&y=2014",
          "answers": [
            "B"
          ],
          "answerPdf": "exams/103/2/medicine-2-M.pdf",
          "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=103100&c=101&s=0102&q=1&verify=step1-20261013-103100-101-0102-M",
          "corrected": false,
          "answerVersion": "M",
          "originalAnswers": [
            "B"
          ],
          "point": "過渡態穩定，而非單純抓牢受質",
          "analysis": "酵素對過渡態的相對穩定作用可降低活化自由能障礙，答案 B。單純過度穩定基態受質不一定促進反應，甚至可能讓跨越障礙更難；緊密結合中間物或產物也不是本題核心。",
          "trap": "先區分受質、過渡態、中間物、產物。過渡態不是可長時間累積的反應中間物。"
        },
        {
          "number": 75,
          "text": "酶具有高效率的化學反應催化作用(catalysis),原因為何?\nA.可抑制酶促反應(enzymatic catalytic reaction)的逆反應\nB.可增加催化反應的平衡常數(equilibrium constant)\nC.可降低化學反應的活化能(activation energy, ΔG‡)\nD.可增加化學反應的活化能(activation energy, ΔG‡)",
          "regions": [
            {
              "page": 11,
              "rect": [
                30.0,
                490.55,
                570.0,
                595.99
              ]
            }
          ],
          "id": "109-1-1-75",
          "year": 109,
          "session": 1,
          "paper": 1,
          "subject": "biochemistry",
          "pdf": "exams/109/1/medicine-1-Q.pdf",
          "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=109020&c=301&s=11&q=1&verify=step1-20261013-109020-301-11-Q",
          "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=109020&y=2020",
          "answers": [
            "C"
          ],
          "answerPdf": "exams/109/1/medicine-1-M.pdf",
          "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=109020&c=301&s=11&q=1&verify=step1-20261013-109020-301-11-M",
          "corrected": false,
          "answerVersion": "M",
          "originalAnswers": [
            "C"
          ],
          "point": "催化改變的是活化能障礙",
          "analysis": "答案 C，降低 ΔG‡。酵素不靠抑制逆反應來單向推動反應，也不增加平衡常數；增加活化能反而使反應更難發生。",
          "trap": "ΔG‡ 是反應障礙；ΔG 是反應物與產物間差值，兩個符號不可混讀。"
        },
        {
          "number": 75,
          "text": "在一個酵素催化反應中,酵素改變的是原化學反應的:\n \nA.平衡常數(equilibrium constant)\nB.速率常數(rate constant)\nC.反應物和產物之間的自由能差(free energy difference)\nD.產物的化學結構",
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
          "point": "從活化能換成速率常數問法",
          "analysis": "答案 B，酵素影響反應速率常數。A 的平衡常數及 C 的反應物、產物自由能差不因催化改變；D 的產物結構不是催化的定義性變化。",
          "trap": "同一指定總反應在相同條件下，比較有無酵素，會更快達平衡，而非達到另一個平衡。"
        },
        {
          "number": 76,
          "text": "下列關於酵素的敘述,何者錯誤?\n A.酵素可降低化學反應物及產物之間的自由能差異\n\nB.大多數酵素會與反應過渡態(transition state)緊密結合\nC.大多數酵素催化反應有立體化學專一性(stereospecificity)\nD.酵素可縮短反應達到化學平衡所需的時間",
          "regions": [
            {
              "page": 11,
              "rect": [
                30.0,
                759.51,
                569.96,
                806.92
              ]
            },
            {
              "page": 12,
              "rect": [
                30.0,
                28.0,
                569.96,
                90.71
              ]
            }
          ],
          "id": "110-2-1-76",
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
          "point": "找錯誤敘述：自由能差不是活化能",
          "analysis": "題目問錯誤者，答案 A。酵素不降低反應物與產物之間的自由能差。B 的過渡態結合、C 的立體專一性及 D 的加速達平衡皆符合一般酵素觀念。",
          "trap": "看到「自由能」先看後面描述哪兩個狀態，不能只憑熟悉字詞作答。"
        },
        {
          "number": 76,
          "text": "下列關於酵素的敘述,何者錯誤? \n \nA.具有酵素功能的生物分子不一定是蛋白質 \nB.酵素可改變其催化反應的熱力學平衡狀態 \nC.酵素可改變其催化反應的動力學活化能 \nD.酵素催化反應後大多可回復至初始狀態",
          "regions": [
            {
              "page": 14,
              "rect": [
                30.0,
                495.83,
                570.32,
                624.86
              ]
            }
          ],
          "id": "114-1-1-76",
          "year": 114,
          "session": 1,
          "paper": 1,
          "subject": "biochemistry",
          "pdf": "exams/114/1/medicine-1-Q.pdf",
          "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=114020&c=301&s=0101&q=1&verify=step1-20261013-114020-301-0101-Q",
          "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=114020&y=2025",
          "answers": [
            "B"
          ],
          "answerPdf": "exams/114/1/medicine-1-M.pdf",
          "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=114020&c=301&s=0101&q=1&verify=step1-20261013-114020-301-0101-M",
          "corrected": false,
          "answerVersion": "M",
          "originalAnswers": [
            "B"
          ],
          "point": "再次把熱力學與動力學對比",
          "analysis": "錯誤選項 B：酵素不改變其催化總反應的熱力學平衡。A 可由催化 RNA 理解；C 是降低動力學障礙；D 是催化者在反應週期後再生的概念。",
          "trap": "109 年問活化能，110 年問速率常數與自由能差，114 年改問熱力學平衡；都可回到同一張能量圖。"
        }
      ]
    }
  ]
};
