const cardiovascularTopics = [
  {
    "id": "flow",
    "title": "循環配置、血管阻力與動脈壓",
    "english": "Circuits & hemodynamics",
    "summary": "從壓差、阻力和順應性推導血流。",
    "html": "<p class=\"quiz-note\">閱讀對照：BRS Physiology 第 7 版第 3 章，I–II，循環配置與血流動力學。本節由概念、條件、定量到題型依序閱讀。</p><nav class=\"study-actions\" aria-label=\"本節目錄\"><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-flow-1\">從串聯與並聯建立循環模型</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-flow-2\">Q、v 和 R 分別描述什麼</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-flow-3\">順應性把脈衝射血轉成舒張期流動</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-flow-4\">壁張力、紊流與量血壓</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-flow-5\">為什麼同一管段的 r⁴ 規則不能直接用來解所有狹窄</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-flow-6\">動脈硬化與脈壓的機械解釋</button></nav><section aria-labelledby=\"phys-rewrite-cardiovascular-flow-1\"><h3 id=\"phys-rewrite-cardiovascular-flow-1\" tabindex=\"-1\">從串聯與並聯建立循環模型</h3><p>體循環與肺循環串聯，穩態下兩側心室的平均輸出相同。肺血管阻力較低，因此可以用較低灌流壓維持相同流量。多數器官血管床彼此並聯，器官可藉自身小動脈調整流量。串聯阻力相加，並聯則 <strong>1/R總＝Σ1/Rᵢ</strong>。增加並聯支路通常降低總阻力，而非增加。</p>\n<p>大動脈儲存彈性能量，小動脈提供主要可調阻力，微血管提供交換表面，靜脈則因高順應性容納大部分血液。血量最大、總截面積最大、壓降最大是三個不同問題，分別常指靜脈、微血管床與小動脈區段。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-flow-2\"><h3 id=\"phys-rewrite-cardiovascular-flow-2\" tabindex=\"-1\">Q、v 和 R 分別描述什麼</h3><p><strong>Q＝ΔP/R，v＝Q/A，R＝8ηL/(πr⁴)</strong>。Poiseuille 式是理想圓管、層流、條件固定的模型。半徑減半使阻力 16 倍，固定壓差時 Q 為 1/16。若題目固定整段 Q，狹窄處因 A 減少而 v 增加；若只固定兩端 ΔP，狹窄提高 R 還可能使整段 Q 下降。先圈固定條件再做比例。</p>\n<p>設兩條並聯支路 R 為 10、20 mmHg·min/L，共用 ΔP 60 mmHg，Q 分別 6、3 L/min，總 Q 9、總 R 約 6.7。若第二支舒張成 R 10、ΔP 仍固定，第一支維持 6、第二支變 6，總 Q 12。若改成固定總 CO，系統壓差就可下降。血流量重新分配不能忽略心臟是否維持壓力。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-flow-3\"><h3 id=\"phys-rewrite-cardiovascular-flow-3\" tabindex=\"-1\">順應性把脈衝射血轉成舒張期流動</h3><p><strong>C＝ΔV/ΔP</strong>。動脈射血時擴張，舒張時回彈，產生 Windkessel 效應。簡化下 PP 隨 SV 增加、隨動脈順應性降低而增大。舒張壓還受 TPR 和舒張長度影響。正常心率常用 <strong>MAP≈DBP＋PP/3</strong>，因舒張占比通常較長。120/50 的 PP 70、MAP 約 73。高心率或波形明顯改變時近似程度會改變。</p>\n<p>104-1 第 11 題 CO 5、TPR 22，忽略 RAP 得 MAP 110。已知 SBP 150，解 110≈DBP＋(150−DBP)/3 得 DBP 90。若有 RAP，應由 MAP−RAP＝CO×TPR 計算，不能把 RAP 漏掉。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-flow-4\"><h3 id=\"phys-rewrite-cardiovascular-flow-4\" tabindex=\"-1\">壁張力、紊流與量血壓</h3><p>薄壁圓柱近似下壁張力與跨壁壓乘半徑相關，壁應力再與壁厚成反比。大半徑心室或血管即使壓力相同，也可承受較高壁負荷。這和血管內流量的 r⁴ 規則屬不同物理問題。</p>\n<p>Reynolds 指標隨密度、速度、直徑增加而增加，隨黏度增加而降低。低黏度與局部高速噴流有利紊流。袖帶壓在 SBP 和 DBP 之間時，動脈部分時間通過血流，可聽到 Korotkoff 聲。高於 SBP 多無流，低於 DBP 血流較持續、聲音通常消失。不要因為狹窄直徑小，就忽略其造成的局部速度大增。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-flow-5\"><h3 id=\"phys-rewrite-cardiovascular-flow-5\" tabindex=\"-1\">為什麼同一管段的 r⁴ 規則不能直接用來解所有狹窄</h3><p>Poiseuille 模型假設穩態層流、圓管、固定幾何與近似牛頓流體。真實血管有脈動、分支、可變半徑與血球效應。嚴重狹窄的噴流和紊流還可使壓差與流量不再單純線性。臨床常用簡化 Bernoulli ΔP≈4v²（v 為 m/s，ΔP 為 mmHg）估某些高速噴流壓差，但需條件合適，不能把這式和全身 MAP＝CO×TPR 混用。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-flow-6\"><h3 id=\"phys-rewrite-cardiovascular-flow-6\" tabindex=\"-1\">動脈硬化與脈壓的機械解釋</h3><p>若主動脈較僵硬，同一搏注入的 ΔV 需要更大 ΔP，故脈壓可增加。這不等同 TPR 必按相同比例上升，因順應性和阻力分別描述容量–壓力關係與流量–壓差關係。題目給年齡、相同 SV、較大 PP，先考慮順應性；給相同 CO、MAP 較高，再考慮總阻力。</p>\n</section><section><h3>用既有原題檢查本節</h3><p>先完成選擇，再說出每個選項成立所需的條件。轉錄若有符號或欄位錯序，以原卷為準。</p><details class=\"quiz-question\"><summary>104 年第 1 次醫學（二）第 11 題</summary><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">11 \n一位50 歲男性,其心輸出量(cardiac output)為每分鐘5 L,心跳速率每分鐘80 次。若測得其全身\n周邊血管總阻力為22 mmHg/L/min,假設其收縮壓為150 毫米汞柱(mmHg),其舒張壓的值最接近\n多少mmHg? \n70\nA\n \nB80 \nC90 \nD110</p><p><a href=\"exams/104/1/medicine-2-Q.pdf#page=2\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>作答後展開答案與解析</summary><p><strong>官方採計答案</strong>　C</p><p>壓差＝流量×阻力。CO 5 L/min×22 mmHg·min/L＝110 mmHg，忽略右房壓時近似 MAP。再用 110≈DBP＋(150−DBP)/3，求得 DBP 約 90 mmHg。</p><p><a href=\"exams/104/1/medicine-2-M.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></details><details class=\"quiz-question\"><summary>107 年第 2 次醫學（一）第 57 題</summary><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">和\n活化\n57.若血液黏滯係數(blood viscosity)增加時,最可能直接引起下列那一改變? \n \nA.周邊總阻力(total peripheral resistance)增加 \nB.小動脈(arterioles)半徑增加 \nC.平均動脈壓(mean arterial pressure)下降 \nD.心搏量(stroke volume)增加</p><p><a href=\"exams/107/2/medicine-1-Q.pdf#page=9\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>作答後展開答案與解析</summary><p><strong>官方採計答案</strong>　A</p><p>在管徑、長度相同時，Poiseuille 阻力與黏度成正比。流量和動脈壓還要看其餘條件與代償。</p><p><a href=\"exams/107/2/medicine-1-M.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></details><details class=\"quiz-question\"><summary>112 年第 1 次醫學（一）第 59 題</summary><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">59.健康檢查時測量得檢測者血壓之舒張壓(diastolic pressure)為50 mmHg,收縮壓(systolic pressure)為120 \nmmHg,下列敘述何者正確? \nA.脈搏壓(pulse pressure)為170 mmHg \nB.脈搏壓(pulse pressure)為70 mmHg \nC.平均動脈壓(mean arterial pressure)約為85 mmHg \nD.平均動脈壓(mean arterial pressure)約為97 mmHg</p><p><a href=\"exams/112/1/medicine-1-Q.pdf#page=11\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>作答後展開答案與解析</summary><p><strong>官方採計答案</strong>　B</p><p>脈壓為 70，官方正確選項為脈壓 70。若另估算 MAP，正常心率時近似 50＋70/3≈73 mmHg。舒張時間通常較長。</p><p><a href=\"exams/112/1/medicine-1-M.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></details></section>"
  },
  {
    "id": "electrical",
    "title": "心臟動作電位、傳導與 ECG",
    "english": "Electrophysiology & ECG",
    "summary": "先分竇房結和心室，再把電事件放回心動週期。",
    "html": "<p class=\"quiz-note\">閱讀對照：BRS Physiology 第 7 版第 3 章，III，心臟電生理。本節由概念、條件、定量到題型依序閱讀。</p><nav class=\"study-actions\" aria-label=\"本節目錄\"><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-electrical-1\">心室與竇房結的上升相不同</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-electrical-2\">交感與迷走從三種變項改心率</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-electrical-3\">傳導最快與自發放電最快是兩件事</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-electrical-4\">ECG 的波形、間期和格數</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-electrical-5\">高 K⁺ 題要保留濃度與嚴重度條件</button></nav><section aria-labelledby=\"phys-rewrite-cardiovascular-electrical-1\"><h3 id=\"phys-rewrite-cardiovascular-electrical-1\" tabindex=\"-1\">心室與竇房結的上升相不同</h3><p>典型心室第 4 期穩定，K⁺ 電導重要。第 0 期快速 Na⁺ 內流，第 1 期 Na⁺ 通道失活、短暫外向 K⁺ 電流使電位略降，第 2 期 L 型 Ca²⁺ 內流與外向 K⁺ 電流平衡形成平台，第 3 期外向 K⁺ 優勢使再極化。平台和不反應期長，與收縮重疊，限制強直。</p>\n<p>SA node 無穩定第 4 期，If、Ca²⁺ 電流及 K⁺ 電流的時間變化使其自發去極化，第 0 期主要 L 型 Ca²⁺ 內流，第 3 期 K⁺ 外流。If 為在較負電位活化的混合陽離子電流，起搏範圍淨效果向內。問第 4 期和問主升段必須分開。110-2 第 56 題與 114-1 第 59 題正好對照。</p>\n<figure><a href=\"physiology-figures/brs-3-5.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"physiology-figures/brs-3-5.webp\" alt=\"竇房結動作電位\" style=\"max-width:100%;height:auto\" loading=\"lazy\"></a><figcaption>BRS Physiology 第 7 版圖 3.5，印刷頁 74。沿第 4 期斜率、第 0 期和第 3 期比較通道作用。</figcaption></figure>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-electrical-2\"><h3 id=\"phys-rewrite-cardiovascular-electrical-2\" tabindex=\"-1\">交感與迷走從三種變項改心率</h3><p>達閾所需時間受第 4 期斜率、最大舒張電位和閾值共同影響。β1 增 cAMP，增加起搏與鈣電流，使達閾較快；M2 降 cAMP 並可開 K⁺ 電流，使斜率變小、起始更負。AV node 也受自主調節，迷走可減慢傳導。心房和心室的支配程度不同，不能把全心收縮力的變化完全等同心率。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-electrical-3\"><h3 id=\"phys-rewrite-cardiovascular-electrical-3\" tabindex=\"-1\">傳導最快與自發放電最快是兩件事</h3><p>SA node 通常主導節律，Purkinje 最擅長快速傳導，AV node 延遲讓心房先完成部分充盈。異位節律與逃脫節律要考慮起搏頻率、傳導與抑制關係。長期部分去極化可使快速 Na⁺ 通道失活，工作肌傳導反而下降，不能只以「更接近閾值」推興奮性一定提高。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-electrical-4\"><h3 id=\"phys-rewrite-cardiovascular-electrical-4\" tabindex=\"-1\">ECG 的波形、間期和格數</h3><p>P 是心房去極化，QRS 是心室去極化，T 是心室再極化。PR 從 P 起始到 QRS 起始，涵蓋心房和房室傳導；QT 從 QRS 起始到 T 結束，反映心室電活動總時間。ST 對應心室大部分已去極化及平台相關時段，仍可在射血。心房再極化多被 QRS 遮蔽。</p>\n<p>25 mm/s 時小格 0.04 s、大格 0.20 s。R–R 四大格是 0.8 s，HR 75/min。PR 六小格是 0.24 s；若所有 P 都傳下且持續延長，典型第一度 AV 延遲。Purkinje 或束支傳導受阻常使 QRS 寬，與 PR 延長不同。QT 隨心率變，常用 QTc 比較。高 K⁺ 可見高尖 T、嚴重時去極化傳導異常；Ca²⁺ 變化較常連到 QT 時間，仍須按題目條件判。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-electrical-5\"><h3 id=\"phys-rewrite-cardiovascular-electrical-5\" tabindex=\"-1\">高 K⁺ 題要保留濃度與嚴重度條件</h3><p>外 K⁺ 增可改靜止電位並影響再極化電流。部分題型以高尖 T 為辨識，嚴重持續去極化又可使快速 Na⁺ 失活、QRS 變寬與傳導惡化。這些並不互斥，代表不同程度和時間的效應。不能從「高 K⁺ 使去極化」推成所有細胞都更快傳導。</p>\n</section><section><h3>用既有原題檢查本節</h3><p>先完成選擇，再說出每個選項成立所需的條件。轉錄若有符號或欄位錯序，以原卷為準。</p><details class=\"quiz-question\"><summary>114 年第 1 次醫學（一）第 59 題</summary><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">59.SA node 的動作電位的主升段(上升幅度最大的段落)主要是因下列何種離子的流動而產生? \n \nA.fast sodium channels open,使鈉離子流入細胞內 \nB.funny channels open,使鈉離子流入細胞內 \nC.funny channels open,使鉀離子流入細胞內 \nD.L-type calcium channels open,使鈣離子流入細胞內</p><p><a href=\"exams/114/1/medicine-1-Q.pdf#page=11\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>作答後展開答案與解析</summary><p><strong>官方採計答案</strong>　D</p><p>SA node 第 0 期主要由 L 型 Ca²⁺ 內流引起。If 在第 4 期有貢獻；快速 Na⁺ 上升相典型見於心室工作肌。</p><p>題幹限定 SA node 主升段，即第 0 期。它和第 4 期起搏斜率的來源不同。</p><ul><li>A　快速 Na⁺ 上升相典型用於心室等快速反應細胞，不是 SA node 的主要第 0 期。</li><li>B　If 對自發第 4 期去極化重要，不能直接當主升段。</li><li>C　If 為混合陽離子電流，起搏電位下淨向內；此敘述的 K⁺ 內流也不是主升段機轉。</li><li>D　L 型 Ca²⁺ 通道開啟使鈣內流，符合 SA node 第 0 期，選 D。</li></ul><p><strong>換條件再推</strong>　若改問副交感如何減慢心跳，先看第 4 期斜率下降、最大舒張電位變負等變化。</p><p><a href=\"exams/114/1/medicine-1-M.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></details><details class=\"quiz-question\"><summary>114 年第 2 次醫學（一）第 59 題</summary><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">59.記錄心肌細胞的動作電位時,在去極化與平原期之間有一段快速而短暫的再極化期(initial rapid \nrepolarization),下列何者是它產生的主要機制? \n \nA.關閉鈉離子通道,打開鉀離子通道 \nB.關閉鈉離子通道,打開氯離子通道 \nC.關閉L-type 鈣離子通道,打開T-type 鈣離子通道 \n\nD.關閉T-type 鈣離子通道,打開L-type 鈣離子通道</p><p><a href=\"exams/114/2/medicine-1-Q.pdf#page=11\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>作答後展開答案與解析</summary><p><strong>官方採計答案</strong>　A</p><p>快速 Na⁺ 通道失活，短暫外向 K⁺ 電流使膜電位先下降。接著 L 型 Ca²⁺ 內流參與平台期。</p><p><a href=\"exams/114/2/medicine-1-M.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></details><details class=\"quiz-question\"><summary>115 年第 2 次醫學（一）第 57 題</summary><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">57.下列有關副交感神經對SA node 細胞的調控,何者最為適當? \n \nA.增加SA node 細胞pacemaker potential 的斜率(slope),而增加心跳速率 \nB.減少SA node 細胞pacemaker potential 的斜率(slope),而減少心跳速率 \nC.增加SA node 細胞pacemaker potential 的斜率(slope),而減少心跳速率 \nD.減少SA node 細胞pacemaker potential 的斜率(slope),而增加心跳速率</p><p><a href=\"exams/115/2/medicine-1-Q.pdf#page=11\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>作答後展開答案與解析</summary><p><strong>官方採計答案</strong>　B</p><p>M2 使 cAMP 降低並可增加 K⁺ 電導，達閾時間延長，心率下降。</p><p><a href=\"exams/115/2/medicine-1-M.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></details></section>"
  },
  {
    "id": "output",
    "title": "心肌收縮、前後負荷與心輸出量",
    "english": "Contractility & cardiac output",
    "summary": "區分每搏射多少、每分鐘射多少，以及收縮力如何改變。",
    "html": "<p class=\"quiz-note\">閱讀對照：BRS Physiology 第 7 版第 3 章，IV，心肌與心輸出。本節由概念、條件、定量到題型依序閱讀。</p><nav class=\"study-actions\" aria-label=\"本節目錄\"><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-output-1\">外鈣觸發 SR，SERCA 參與舒張</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-output-2\">前負荷、後負荷、收縮力有不同定義</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-output-3\">SV、EF 和 CO 用實際數字比較</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-output-4\">Fick 是氧守恆，分母要用含量</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-output-5\">Fick 應用的守恆範圍</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-output-6\">收縮障礙和充盈障礙都可能低輸出</button><button type=\"button\" data-phys-section=\"phys-case-cardiovascular-output\">整合案例：二尖瓣逆流，為何 EF 高但有效流量低</button></nav><section aria-labelledby=\"phys-rewrite-cardiovascular-output-1\"><h3 id=\"phys-rewrite-cardiovascular-output-1\" tabindex=\"-1\">外鈣觸發 SR，SERCA 參與舒張</h3><p>Cav1.2 內流 Ca²⁺ 觸發 RyR2 放 SR 鈣，Ca²⁺ 結合 TnC 促收縮。SERCA 回收、NCX 等排出降低胞質鈣。β1 可增觸發鈣、提高 SR 供鈣並促進回收，所以可同時增強收縮與加快放鬆。抑制 Na⁺/K⁺ 幫浦使胞內 Na⁺ 上升、NCX 正向排鈣驅動下降，可能增強收縮，這和直接阻斷鈣通道不同。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-output-2\"><h3 id=\"phys-rewrite-cardiovascular-output-2\" tabindex=\"-1\">前負荷、後負荷、收縮力有不同定義</h3><p>前負荷是收縮前的肌肉伸展，EDV 是常用近似。若順應性下降，同 EDV 可有更高 EDP，因此壓力不等同容積。後負荷是射血需克服的負荷，可用動脈壓、瓣膜阻力與壁應力理解。收縮力則是在負荷可比時心肌本身的收縮表現。輸液首先提高回流與 EDV，β1 刺激才直接涉及收縮力。Frank–Starling 增力是沿同條曲線移動，收縮力提高使曲線上移。</p>\n<figure><a href=\"physiology-figures/brs-3-8.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"physiology-figures/brs-3-8.webp\" alt=\"Frank–Starling 曲線\" style=\"max-width:100%;height:auto\" loading=\"lazy\"></a><figcaption>BRS Physiology 第 7 版圖 3.8，印刷頁 79。沿同一條曲線移動代表前負荷改變。曲線上移或下移反映收縮力改變。</figcaption></figure>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-output-3\"><h3 id=\"phys-rewrite-cardiovascular-output-3\" tabindex=\"-1\">SV、EF 和 CO 用實際數字比較</h3><p><strong>SV＝EDV−ESV，EF＝SV/EDV，CO＝HR×SV</strong>。EDV 120、ESV 50、HR 72，SV 70 mL、EF 58%、CO 5.04 L/min。甲 EDV 120、ESV 48；乙 EDV 80、ESV 32，EF 都 60%，但 HR 同為 75 時 CO 各為 5.4、3.6 L/min。只給 EF 無法定每分鐘血流。心率太快會縮短充盈，SV 可能下降，CO 不一定和 HR 等比例升。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-output-4\"><h3 id=\"phys-rewrite-cardiovascular-output-4\" tabindex=\"-1\">Fick 是氧守恆，分母要用含量</h3><p><strong>CO＝V̇O₂/(CaO₂−CvO₂)</strong>。111-2 第 60 題 600 mL/min 除以 200−140＝60 mL/L，得 10 L/min。肺動脈血是混合靜脈含量來源，血管名稱不代表氧合程度。若含量以 mL/dL 給，結果先是 dL/min，再除 10 成 L/min。</p>\n<p>CaO₂ 常近似 <strong>1.34×Hb×SaO₂＋0.003×PaO₂</strong>，Hb g/dL、SaO₂ 小數、PaO₂ mmHg，結果 mL/dL。Hb 15、SaO₂ 0.98、PaO₂ 100 時約 20 mL/dL。CO 5 L/min＝50 dL/min，氧輸送約 1,000 mL/min。貧血可在 PaO₂ 和 SaO₂ 近似正常時降低含量，引發高輸出代償。Fick 不能直接用分壓差取代含量差。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-output-5\"><h3 id=\"phys-rewrite-cardiovascular-output-5\" tabindex=\"-1\">Fick 應用的守恆範圍</h3><p>分子分母必須描述同一時間與同一循環範圍的氧交換。全身 Fick 使用全身耗氧、體動脈與混合靜脈含量。若只拿某一局部靜脈，未必代表全身平均萃取；若生理狀態快速變動，近似穩態的條件也較差。估算耗氧和實測耗氧還可能有差。計算出一個 L/min 後，先檢查數值是否合理，再核對含量與耗氧的單位。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-output-6\"><h3 id=\"phys-rewrite-cardiovascular-output-6\" tabindex=\"-1\">收縮障礙和充盈障礙都可能低輸出</h3><p>收縮力下降可使 ESV 增、SV 減、EF 降。充盈受限可使 EDV 和 SV 都下降，而 EF 仍相對保留。兩者都可有低 CO 或高充盈壓，但直接改變的曲線不同。題目若只有 EF，要補問 EDV、心率與壓力，才能定義循環功能。</p>\n</section><section aria-labelledby=\"phys-case-cardiovascular-output\"><h3 id=\"phys-case-cardiovascular-output\" tabindex=\"-1\">整合案例：二尖瓣逆流，為何 EF 高但有效流量低</h3><p>假設一名有二尖瓣逆流的患者 EDV 160 mL、ESV 60 mL、HR 75/min。另量到主動脈每拍前向量 55 mL。先由左室容積算總 SV＝100 mL，EF＝62.5%；再算逆流量 100−55＝45 mL，逆流分率 45/100＝45%。總左室射出量每分鐘 7.5 L，體循環前向輸出卻為 4.125 L/min。若拿總 SV 乘 HR 當全身送血量，就會把進入左房的逆流也計入。</p>\n<p>回看 PV loop：寬度反映整拍左室容積減少，包含往左房與往主動脈的兩路。左室壓一旦高於左房壓，可能在主動脈瓣開啟前就開始失去容積；主動脈瓣關後也可能繼續逆流，典型等容期因此縮短或消失。若題目改成主動脈逆流，回流主要在舒張期發生，要從瓣膜兩側的壓差重推。若再給動靜脈氧含量差 50 mL/L，以 Fick 法估全身耗氧量時用 4.125 L/min，結果約 206 mL/min。</p>\n</section><section><h3>用既有原題檢查本節</h3><p>先完成選擇，再說出每個選項成立所需的條件。轉錄若有符號或欄位錯序，以原卷為準。</p><details class=\"quiz-question\"><summary>111 年第 2 次醫學（一）第 60 題</summary><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">60.某受試者,其氧氣消耗量為每分鐘600毫升(mL/min),肺動脈血氧濃度為每公升140毫升,肱動脈(brachial\nartery)血氧濃度為每公升200毫升,則此受試者的心輸出量(cardiac output)為多少L/min?\n \nA.4.2\nB.10\nC.30\nD.34.2</p><p><a href=\"exams/111/2/medicine-1-Q.pdf#page=11\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>作答後展開答案與解析</summary><p><strong>官方採計答案</strong>　B</p><p>含量差為 200−140＝60 mL/L。600 mL/min 除以 60 mL/L＝10 L/min。</p><p>Fick 用每分鐘耗氧量除以每公升血交出的氧。200−140＝60 mL/L，600÷60＝10 L/min。</p><ul><li>A　4.2 不符合題目給定的含量差與耗氧，檢查是否把單側含量或不相關比例當分母。</li><li>B　10 L/min 正確，單位 mL O₂/min 除 mL O₂/L blood，留下 L blood/min。</li><li>C　30 不符合 600/60，應重新檢查含量差。</li><li>D　34.2 同樣不滿足本題氧守恆。不能用相加或分壓替代動靜脈含量差。</li></ul><p><strong>換條件再推</strong>　肺動脈血提供混合靜脈含量。若改以 mL/dL 給含量，先得到 dL/min，再換 L/min。</p><p><a href=\"exams/111/2/medicine-1-M.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></details><details class=\"quiz-question\"><summary>112 年第 1 次醫學（一）第 61 題</summary><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">61.血液容積大量增加後最可能導致下列何種現象? \nA.心室舒張末期容積上升,心搏量增加 \nB.心室舒張末期容積上升,心搏量減少 \nC.心室舒張末期容積降低,心搏量增加 \nD.心室舒張末期容積降低,心搏量減少</p><p><a href=\"exams/112/1/medicine-1-Q.pdf#page=11\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>作答後展開答案與解析</summary><p><strong>官方採計答案</strong>　A</p><p>容量增加可提高回流及 EDV，依 Frank–Starling 機制 SV 增加。先定位前負荷，無須假定收縮力增加。</p><p><a href=\"exams/112/1/medicine-1-M.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></details><details class=\"quiz-question\"><summary>113 年第 1 次醫學（一）第 59 題</summary><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">59.下列何種情況最有可能增加心輸出量(cardiac output)?\n \nA.慢性中度貧血(moderate chronic anemia)\nB.心肌梗塞(myocardial infarction)\nC.心肌炎(myocarditis)\nD.增加靜脈順應性(increase of venous compliance)</p><p><a href=\"exams/113/1/medicine-1-Q.pdf#page=11\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>作答後展開答案與解析</summary><p><strong>官方採計答案</strong>　A</p><p>血液攜氧能力下降，可伴流量代償及較低黏度。心肌梗塞則可因收縮力下降使輸出降低。</p><p><a href=\"exams/113/1/medicine-1-M.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></details></section>"
  },
  {
    "id": "loops",
    "title": "壓力–容積環與回流穩態",
    "english": "PV loops & venous return",
    "summary": "把一搏的壓力與容積，接到整體循環的穩態交點。",
    "html": "<p class=\"quiz-note\">閱讀對照：BRS Physiology 第 7 版第 3 章，IV，PV loop 與功能曲線。本節由概念、條件、定量到題型依序閱讀。</p><nav class=\"study-actions\" aria-label=\"本節目錄\"><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-loops-1\">沿四個瓣膜事件讀環</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-loops-2\">單獨改變與多搏後穩態</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-loops-3\">瓣膜異常如何破壞等容邊</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-loops-4\">VR 曲線的橫截距和斜率</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-loops-5\">PV 面積、機械功與氧耗</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-loops-6\">前向輸出與總射出量在逆流時不同</button><button type=\"button\" data-phys-section=\"phys-case-cardiovascular-loops\">整合案例：後負荷突然上升，算第一拍再看幾拍後</button></nav><section aria-labelledby=\"phys-rewrite-cardiovascular-loops-1\"><h3 id=\"phys-rewrite-cardiovascular-loops-1\" tabindex=\"-1\">沿四個瓣膜事件讀環</h3><p>二尖瓣開後左室由 ESV 沿底部充盈至 EDV。二尖瓣關，沿右界等容收縮，左室壓超過主動脈壓後開主動脈瓣，向左射血至 ESV。主動脈瓣關後沿左界等容舒張，直到左室壓低於左房壓再開二尖瓣。右界容積是 EDV，左界 ESV，寬度 SV，面積近似每搏外功。垂直邊代表容積固定、兩瓣皆關。</p>\n<figure><a href=\"physiology-figures/brs-3-9.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"physiology-figures/brs-3-9.webp\" alt=\"左心室壓力–容積環\" style=\"max-width:100%;height:auto\" loading=\"lazy\"></a><figcaption>BRS Physiology 第 7 版圖 3.9，印刷頁 80。先定位 EDV、ESV 和四個瓣膜事件，再讀環寬與面積。</figcaption></figure>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-loops-2\"><h3 id=\"phys-rewrite-cardiovascular-loops-2\" tabindex=\"-1\">單獨改變與多搏後穩態</h3><p>EDV 120、ESV 50 時 SV 70。後負荷突然增高，示意第一搏 ESV 可增至 65，SV 降至 55；較高壓力才射出。收縮力增加、後負荷近似不變，ESV 可減至 35，SV 85。前負荷增加則右界移右。數搏後殘餘血會影響下一次 EDV，反射也可能改 HR 和阻力，所以題目指定時間很重要。</p>\n<p>ESPVR 斜率可反映收縮力，收縮力增強時較陡。EDPVR 反映被動舒張特性，較僵硬時向上、左偏，在同一充盈壓下 EDV 可較低。EF 保留而充盈受限，就不能用正常 EF 排除低輸出。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-loops-3\"><h3 id=\"phys-rewrite-cardiovascular-loops-3\" tabindex=\"-1\">瓣膜異常如何破壞等容邊</h3><p>主動脈逆流使舒張時血可由主動脈回左室，理想等容舒張不再維持固定容積。二尖瓣逆流使收縮時血可回左房，理想等容收縮也不再固定容積，總射出量和有效前向射出量需分開。主動脈狹窄則增加左室射血負荷，可使收縮期左室與主動脈壓差增大。畫病變環先問哪個本該關閉的出口仍在漏，再推那條垂直邊。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-loops-4\"><h3 id=\"phys-rewrite-cardiovascular-loops-4\" tabindex=\"-1\">VR 曲線的橫截距和斜率</h3><p><strong>VR＝(Pms−RAP)/RVR</strong>。Pms 是平均全身充盈壓，RAP 是右房壓，RVR 回流阻力。Pms 7、RAP 2、RVR 1，VR 5 L/min。容量或靜脈張力增加可提高 Pms，曲線向右。RVR 增加使斜率絕對值變小。RAP 很負時大靜脈可塌陷，VR 出現平台，不能無限增加。</p>\n<p>穩態交點滿足 CO＝VR。心功能曲線上移、回流曲線固定時，CO 常增、RAP 常降。若題目同時改變 TPR，心功能與回流曲線可能都變，須按模型重找交點。109-2 第 58 題官方複數採計，作概念題時應寫清哪一條曲線固定，不把某選項升格為普遍定律。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-loops-5\"><h3 id=\"phys-rewrite-cardiovascular-loops-5\" tabindex=\"-1\">PV 面積、機械功與氧耗</h3><p>每搏外功由壓力對容積的積分表示，圖上就是環面積。兩條等容邊雖無外部容積功，心肌仍需用能量建立或解除張力，因此不能推氧耗為零。氧需求受心率、收縮力與壁張力等影響。薄壁球形近似下壁應力可寫 P×r/(2h)，半徑大或壁薄使同壓力的應力增加。這是心室擴大與壓力負荷影響耗氧的機械基礎。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-loops-6\"><h3 id=\"phys-rewrite-cardiovascular-loops-6\" tabindex=\"-1\">前向輸出與總射出量在逆流時不同</h3><p>若二尖瓣逆流，LV 容積從 EDV 到 ESV 的下降包含射到主動脈與回左房兩部分。用 SV＝EDV−ESV 得的是總容積射出，不等於有效前向搏出量。若題目同時給逆流比例與總 SV，需扣除逆流量再算前向 CO。這也是 EF 看似不低卻仍可能有供血不足的原因。</p>\n</section><section aria-labelledby=\"phys-case-cardiovascular-loops\"><h3 id=\"phys-case-cardiovascular-loops\" tabindex=\"-1\">整合案例：後負荷突然上升，算第一拍再看幾拍後</h3><p>基線 EDV 120 mL、ESV 50 mL、HR 75/min，因此 SV 70 mL、EF 58%、CO 5.25 L/min。題設使動脈壓突然上升，第一拍 EDV 與收縮力固定，觀察到 ESV 變 65 mL。再過幾拍，回流仍存在，觀察到 EDV 變 132、ESV 62、HR 仍 75。最後一組是提供的觀測值，用來算回復程度。</p>\n<table>\n<thead>\n<tr class=\"header\">\n<th>時點</th>\n<th style=\"text-align: right;\">EDV／ESV（mL）</th>\n<th style=\"text-align: right;\">SV（mL）</th>\n<th style=\"text-align: right;\">EF</th>\n<th style=\"text-align: right;\">CO（L/min）</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>基線</td>\n<td style=\"text-align: right;\">120／50</td>\n<td style=\"text-align: right;\">70</td>\n<td style=\"text-align: right;\">58%</td>\n<td style=\"text-align: right;\">5.25</td>\n</tr>\n<tr class=\"even\">\n<td>第一拍</td>\n<td style=\"text-align: right;\">120／65</td>\n<td style=\"text-align: right;\">55</td>\n<td style=\"text-align: right;\">46%</td>\n<td style=\"text-align: right;\">4.13</td>\n</tr>\n<tr class=\"odd\">\n<td>數拍後</td>\n<td style=\"text-align: right;\">132／62</td>\n<td style=\"text-align: right;\">70</td>\n<td style=\"text-align: right;\">53%</td>\n<td style=\"text-align: right;\">5.25</td>\n</tr>\n</tbody>\n</table>\n<p>第一拍的 PV loop 變高、變窄，右界固定，左界右移；射血終點沿原 ESPVR 移動。數拍後殘餘血量與靜脈流入使 EDV 有機會增加，Frank–Starling 可回復部分 SV。表中 SV 完全回到基線是算例設定，並非每人必然如此。若加入完整感壓反射，動脈壓升高可使 HR、收縮力及交感血管張力下降，需另外追蹤。若題幹沒有提供壓力或整體阻力，也不能從 EF 一項反推出 MAP。</p>\n</section><section><h3>用既有原題檢查本節</h3><p>先完成選擇，再說出每個選項成立所需的條件。轉錄若有符號或欄位錯序，以原卷為準。</p><details class=\"quiz-question\"><summary>113 年第 2 次醫學（一）第 60 題</summary><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">60.循環系統作用受到體內恆定機制嚴謹調控,下列何項敘述最不可能發生?\n \nA.血液體積上升,可導致周邊靜脈壓上升,心臟收縮末期容積增加\nB.周邊靜脈壓上升,可導致心搏量增加,動脈壓上升\nC.周邊靜脈壓上升,靜脈回流心臟增加,可導致心輸出量上升\nD.血液體積上升,可導致尿液流失鈉離子與水分增加</p><p><a href=\"exams/113/2/medicine-1-Q.pdf#page=11\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>作答後展開答案與解析</summary><p><strong>官方採計答案</strong>　A</p><p>血量上升主要經靜脈回流增加前負荷與 EDV。ESV 還受後負荷與收縮力，不能用前負荷直接推一定增加。</p><p><a href=\"exams/113/2/medicine-1-S.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></details><details class=\"quiz-question\"><summary>112 年第 1 次醫學（一）第 61 題</summary><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">61.血液容積大量增加後最可能導致下列何種現象? \nA.心室舒張末期容積上升,心搏量增加 \nB.心室舒張末期容積上升,心搏量減少 \nC.心室舒張末期容積降低,心搏量增加 \nD.心室舒張末期容積降低,心搏量減少</p><p><a href=\"exams/112/1/medicine-1-Q.pdf#page=11\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>作答後展開答案與解析</summary><p><strong>官方採計答案</strong>　A</p><p>容量增加可提高回流及 EDV，依 Frank–Starling 機制 SV 增加。先定位前負荷，無須假定收縮力增加。</p><p><a href=\"exams/112/1/medicine-1-M.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></details><details class=\"quiz-question\"><summary>99 年第 2 次醫學（二）第 9 題</summary><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">CANP \n \nDCarbon monoxide(CO) \n9 \n一位30 歲健康男性,在心室收縮末期,左心室仍約留有42 c.c.的血液;在心室舒張末期,左心室亦\n留有約140 c.c.的血液。其左心室射出分率(ejection fraction)為何? \nA60%\nB65%\nC70%\nD75%</p><p><a href=\"exams/99/2/medicine-2-Q.pdf#page=1\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>作答後展開答案與解析</summary><p><strong>官方採計答案</strong>　C（更正）</p><p>EDV 140、ESV 42，SV＝98 mL，EF＝98/140＝70%。分母是 EDV。</p><p><a href=\"exams/99/2/medicine-2-M.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></details></section>"
  },
  {
    "id": "cycle",
    "title": "心動週期的壓力、容積與心音",
    "english": "Cardiac cycle & heart sounds",
    "summary": "用壓力交叉推瓣膜，再把心音、波形和容積疊在一起。",
    "html": "<p class=\"quiz-note\">閱讀對照：BRS Physiology 第 7 版第 3 章，V，心動週期。本節由概念、條件、定量到題型依序閱讀。</p><nav class=\"study-actions\" aria-label=\"本節目錄\"><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-cycle-1\">先畫壓差，再放 ECG</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-cycle-2\">a、c、v 是心房在不同時點的反應</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-cycle-3\">心音由時相定位</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-cycle-4\">用雜音作機轉延伸</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-cycle-5\">壓差存在與流量開始的關係</button></nav><section aria-labelledby=\"phys-rewrite-cardiovascular-cycle-1\"><h3 id=\"phys-rewrite-cardiovascular-cycle-1\" tabindex=\"-1\">先畫壓差，再放 ECG</h3><p>舒張末期二尖瓣開，心房收縮補充充盈。QRS 後心室收縮，LV&gt;LA 時二尖瓣關，與右側房室瓣關閉形成 S1。此時 Ao&gt;LV，主動脈瓣仍閉，所以等容收縮。LV 超過 Ao 後射血，容積下降。T 波可在射血後段。Ao 再高於回落的 LV 時主動脈瓣關，形成 A2 與主動脈切跡，進入等容舒張。LV&lt;LA 時二尖瓣再開。</p>\n<figure><a href=\"physiology-figures/brs-3-15.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"physiology-figures/brs-3-15.webp\" alt=\"心動週期 Wiggers 圖\" style=\"max-width:100%;height:auto\" loading=\"lazy\"></a><figcaption>BRS Physiology 第 7 版圖 3.15，印刷頁 87。沿同一條垂直線比對壓力、瓣膜事件、心室容積、心音與 ECG。</figcaption></figure>\n<p>等容收縮的壓力順序 <strong>Ao&gt;LV&gt;LA</strong>，因二尖瓣已關而主動脈瓣未開。等容舒張早段 Ao&gt;LV&gt;LA 也可成立，但壓力是下降且容積為 ESV，不能只靠排序分期。圖題至少同時看壓力斜率與容積。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-cycle-2\"><h3 id=\"phys-rewrite-cardiovascular-cycle-2\" tabindex=\"-1\">a、c、v 是心房在不同時點的反應</h3><p>a 波來自心房收縮，P 波後發生。c 波在心室收縮初期，和房室瓣向房側膨隆等有關。v 波在房室瓣閉時因靜脈持續流入而累積，瓣開後心房向心室排血、壓下降。若沒有組織化心房收縮，可失去明顯 a 波。若房室瓣逆流，心房收縮期波形也會改變。用心房當時在收縮、被擠、還是在蓄血解讀，比背字母可靠。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-cycle-3\"><h3 id=\"phys-rewrite-cardiovascular-cycle-3\" tabindex=\"-1\">心音由時相定位</h3><p>S1–S2 為心室收縮時段，包括等容收縮和射血。S2–下一個 S1 包括等容舒張、充盈及晚期心房收縮。S3 和早期快速充盈相關，S4 和心房將血送進較不順應心室相關，需要有效心房收縮。吸氣右回流增加可延長右室射血，使 P2 延後，正常 S2 分裂較寬。</p>\n<p>113-1 第 58 題在 S1 和 S2 間問容積，射血使容積快速下降。115-1 第 58 題問舒張期，S3、AV 瓣開和心房收縮可在其中，T 波開始通常還在射血。電事件先於機械反應，不能把波形起始直接當瓣膜開關。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-cycle-4\"><h3 id=\"phys-rewrite-cardiovascular-cycle-4\" tabindex=\"-1\">用雜音作機轉延伸</h3><p>收縮期左室壓高，二尖瓣逆流可將血送回左房；射血時主動脈狹窄造成跨瓣高速。舒張期主動脈壓高於 LV，主動脈逆流因此發生；二尖瓣狹窄則限制充盈。先問哪一瓣、哪一相應該開或關，再推壓差方向。這也連到 PV loop 的等容邊變化。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-cycle-5\"><h3 id=\"phys-rewrite-cardiovascular-cycle-5\" tabindex=\"-1\">壓差存在與流量開始的關係</h3><p>理想瓣膜模型以壓力交叉定位開關，實際血流還有慣性和瓣膜動態，所以壓力曲線與流量峰不必完全同步。基礎時相題先按正常瓣膜事件作圖，若題目明給逆流、狹窄或特殊波形，再用實際通路修正。避免把某一條壓力曲線較高就當成任意兩腔都有流動。</p>\n</section><section><h3>用既有原題檢查本節</h3><p>先完成選擇，再說出每個選項成立所需的條件。轉錄若有符號或欄位錯序，以原卷為準。</p><details class=\"quiz-question\"><summary>111 年第 1 次醫學（一）第 60 題</summary><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">60.在正常心臟週期的等容收縮(isovolumic contraction)期中,下列各腔室的壓力排列順序何者正確?\n \nA.主動脈的壓力(aortic pressure)&gt;左心室的壓力(left ventricular pressure)&gt;左心房的壓力(left atrial\npressure)\nB.主動脈的壓力(aortic pressure)&gt;左心房的壓力(left atrial pressure)&gt;左心室的壓力(left ventricular\npressure)\nC.左心室的壓力(left ventricular pressure)&gt; 主動脈的壓力(aortic pressure)&gt; 左心房的壓力(left atrial\npressure)\nD.左心室的壓力(left ventricular pressure)&gt;左心房的壓力(left atrial pressure)&gt; 主動脈的壓力(aortic\npressure)</p><p><a href=\"exams/111/1/medicine-1-Q.pdf#page=9\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>作答後展開答案與解析</summary><p><strong>官方採計答案</strong>　A</p><p>二尖瓣已關，所以 LV&gt;LA。主動脈瓣尚未開，所以 Ao&gt;LV。合起來 Ao&gt;LV&gt;LA。</p><p>等容收縮時二尖瓣已關，LV&gt;LA；主動脈瓣尚未開，Ao&gt;LV。兩條不等式合起來 Ao&gt;LV&gt;LA。</p><ul><li>A　滿足兩個瓣膜關閉的條件，選 A。</li><li>B　LA&gt;LV 會有利二尖瓣打開，與該期條件不符。</li><li>C　LV&gt;Ao 已有利主動脈瓣打開，接近射血而非等容收縮。</li><li>D　同樣使 LV&gt;Ao，且把 Ao 排得比 LA 更低，不符合典型該時相。</li></ul><p><strong>換條件再推</strong>　等容舒張某段也可出現相同排序，須再看 LV 壓下降、容積在 ESV，才能區分。</p><p><a href=\"exams/111/1/medicine-1-S.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></details><details class=\"quiz-question\"><summary>113 年第 1 次醫學（一）第 58 題</summary><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">58.對正常的心臟週期而言,在第一心音與第二心音之間,會發生下列何項生理變化?\n \nA.心房於此時去極化\nB.心室容積快速下降\nC.心房壓力先上升之後下降\nD.心室壓力維持不變</p><p><a href=\"exams/113/1/medicine-1-Q.pdf#page=11\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>作答後展開答案與解析</summary><p><strong>官方採計答案</strong>　B</p><p>這段是心室收縮期，先等容收縮再射血。射血使左室容積快速下降。</p><p><a href=\"exams/113/1/medicine-1-M.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></details><details class=\"quiz-question\"><summary>115 年第 1 次醫學（一）第 58 題</summary><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">58.正常情況下,下列那一現象最不可能發生於心臟週期中的舒張期(diastole)? \nA.產生第三心音 \nB.心房收縮 \nC.房室瓣(A-V valve)打開 \nD.心電圖的T 波開始發生</p><p><a href=\"exams/115/1/medicine-1-Q.pdf#page=10\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>作答後展開答案與解析</summary><p><strong>官方採計答案</strong>　D</p><p>房室瓣打開、快速充盈的 S3 與晚期心房收縮皆可在舒張期。T 波開始一般仍在射血後期。</p><p><a href=\"exams/115/1/medicine-1-M.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></details></section>"
  },
  {
    "id": "regulation",
    "title": "血壓反射、容量與長期恆定",
    "english": "Arterial pressure regulation",
    "summary": "先判感壓受器的輸入，再判交感、迷走與腎臟的輸出。",
    "html": "<p class=\"quiz-note\">閱讀對照：BRS Physiology 第 7 版第 3 章，VI，動脈壓調控。本節由概念、條件、定量到題型依序閱讀。</p><nav class=\"study-actions\" aria-label=\"本節目錄\"><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-regulation-1\">受器放電與交感輸出可相反</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-regulation-2\">四個效應器分四條支路</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-regulation-3\">秒級反射和較慢保液</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-regulation-4\">Cushing 反應是兩段反射</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-regulation-5\">低有效循環量不一定等於全身總水少</button><button type=\"button\" data-phys-section=\"phys-case-cardiovascular-regulation\">整合案例：看見心跳變慢，先區分直接作用和反射</button></nav><section aria-labelledby=\"phys-rewrite-cardiovascular-regulation-1\"><h3 id=\"phys-rewrite-cardiovascular-regulation-1\" tabindex=\"-1\">受器放電與交感輸出可相反</h3><p><strong>MAP−RAP＝CO×TPR</strong>。血壓下降使頸動脈竇、主動脈弓伸展減少，經 IX、X 到孤束核的傳入減少，短期使交感升、迷走降。β1 增 HR、收縮力，α1 促小動脈和靜脈收縮。小動脈主要改 TPR，靜脈主要改容量與回流。壓力升高則反向。頸動脈體是化學感受、頸動脈竇是壓力感受，不能把位置近當成功能同。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-regulation-2\"><h3 id=\"phys-rewrite-cardiovascular-regulation-2\" tabindex=\"-1\">四個效應器分四條支路</h3><p>HR 增可提高 CO，太快則充盈下降。收縮力增有利 ESV 下降。小動脈收縮提高阻力。靜脈收縮減少未受壓儲血的容量，提升有效充盈與回流驅動。這四者在失血時可同時發生，卻不等同恢復了所有血量。112-1 第 58 題以感壓放電增加作起點，答心率減慢；113-1 第 60 題以失血作起點，迷走增加反而是錯項。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-regulation-3\"><h3 id=\"phys-rewrite-cardiovascular-regulation-3\" tabindex=\"-1\">秒級反射和較慢保液</h3><p>腎灌流減少、macula densa NaCl 訊號低或腎交感 β1 活化可促 renin。Angiotensin II 收縮血管並促 aldosterone、口渴及相關保液反應。Aldosterone 增遠端鈉回收，ADH 增集合管水通透性。心房牽張可促 ANP、傾向排鈉。長期鈉水平衡與腎壓力排鈉對持續血壓重要，感壓反射可重新設定，不能用其秒級效果解釋全部長期變化。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-regulation-4\"><h3 id=\"phys-rewrite-cardiovascular-regulation-4\" tabindex=\"-1\">Cushing 反應是兩段反射</h3><p>ICP 上升威脅腦灌流，可引出升壓反應。全身動脈壓升高後又活化感壓反射，心率可下降。114-2 第 61 題高壓慢脈可由兩段機轉同時解釋。若只看「低灌流應心跳快」會漏掉第二段。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-regulation-5\"><h3 id=\"phys-rewrite-cardiovascular-regulation-5\" tabindex=\"-1\">低有效循環量不一定等於全身總水少</h3><p>感受器與腎臟反應更關心有效灌流和壓力。某些循環功能不足的情況可同時有水腫和保鈉保水訊號。要由 CO、動脈充盈與腎灌流理解，不能只因外觀水多就推 RAAS、ADH 一定受到完全抑制。這是心臟、微循環與腎章的重要接口。</p>\n</section><section aria-labelledby=\"phys-case-cardiovascular-regulation\"><h3 id=\"phys-case-cardiovascular-regulation\" tabindex=\"-1\">整合案例：看見心跳變慢，先區分直接作用和反射</h3><p>假設實驗給一種只活化血管 α₁ 的物質。最初 TPR 上升使 MAP 上升；隨後頸動脈竇與主動脈弓放電增加，延髓輸出使心臟交感下降、迷走增加，出現反射性心跳變慢。若先阻斷心臟迷走作用，反射性心跳變慢通常減弱，交感撤除仍可能貢獻；若切斷感壓傳入，初始血管收縮仍可出現，反射就缺乏這條輸入。</p>\n<p>把題目改成顱內壓上升。若 MAP 90、ICP 15，CPP 約 75 mmHg。ICP 升到 45、MAP 尚未變，CPP 降至 45；嚴重時腦幹缺血引發交感升壓。如果 MAP 上升到 120，CPP 才算回 75。此時動脈感壓受器因全身血壓升高，促進反射性心跳變慢。兩個案例都有血壓上升和心跳變慢，但起點不同。讀題時沿著「最初擾動 → 被偵測的變量 → 反射輸出 → 最終讀值」排列，便能理解為何交感升壓與迷走性心搏過緩可同時出現。</p>\n</section><section><h3>用既有原題檢查本節</h3><p>先完成選擇，再說出每個選項成立所需的條件。轉錄若有符號或欄位錯序，以原卷為準。</p><details class=\"quiz-question\"><summary>112 年第 1 次醫學（一）第 58 題</summary><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">58.增加baroreceptor discharges 會導致下列何種生理變化? \nA.心跳速率減緩(bradycardia) \nB.心搏量(stroke volume)增加 \nC.抑制心臟交感神經活性,但不影響心臟副交感神經活性 \nD.抑制心臟副交感神經活性,但不影響心臟交感神經活性</p><p><a href=\"exams/112/1/medicine-1-Q.pdf#page=11\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>作答後展開答案與解析</summary><p><strong>官方採計答案</strong>　A</p><p>較高伸展使傳入增加，經延腦增加心臟迷走作用，較可能出現 bradycardia。</p><p><a href=\"exams/112/1/medicine-1-M.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></details><details class=\"quiz-question\"><summary>114 年第 2 次醫學（一）第 61 題</summary><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">61.下列血壓、心跳之變化,何者最易發生於顱內壓上升的病人? \n \nA.血壓、心跳速率均下降 \nB.血壓上升、心跳速率下降 \nC.血壓、心跳速率均上升 \nD.血壓下降、心跳速率上升</p><p><a href=\"exams/114/2/medicine-1-Q.pdf#page=12\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>作答後展開答案與解析</summary><p><strong>官方採計答案</strong>　B</p><p>腦灌流受威脅可引起升壓反應，感壓反射隨後造成心率下降。兩步一起推可理解高壓、慢脈。</p><p><a href=\"exams/114/2/medicine-1-M.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></details><details class=\"quiz-question\"><summary>110 年第 1 次醫學（一）第 60 題</summary><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">60.若完全切除動物的感壓接受器(baroreceptor)神經路徑,下列何者最符合切除後短期內平均動脈壓的變化?\n \nA.顯著升高\nB.顯著下降\nC.先降後升\nD.完全不受影響</p><p><a href=\"exams/110/1/medicine-1-Q.pdf#page=9\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>作答後展開答案與解析</summary><p><strong>官方採計答案</strong>　A</p><p>失去正常感壓傳入可解除延腦對交感的抑制，短期血壓可能上升。長期調節另涉及腎臟。</p><p><a href=\"exams/110/1/medicine-1-S.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></details></section>"
  },
  {
    "id": "micro",
    "title": "微循環的壓力、屏障與淋巴",
    "english": "Microcirculation & lymph",
    "summary": "逐項判液體往外或往內，再看淋巴是否能帶走。",
    "html": "<p class=\"quiz-note\">閱讀對照：BRS Physiology 第 7 版第 3 章，VII，微循環與淋巴。本節由概念、條件、定量到題型依序閱讀。</p><nav class=\"study-actions\" aria-label=\"本節目錄\"><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-micro-1\">先定向外為正，再拆兩個壓差</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-micro-2\">前後阻力同樣降低血流，對 Pc 卻可相反</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-micro-3\">四種水腫機轉各改不同參數</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-micro-4\">淋巴是有動力的回流路</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-micro-5\">用 Kf 和 σ 判同一淨壓的濾出量</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-micro-6\">淋巴能代償，所以濾出增加不必立刻明顯水腫</button></nav><section aria-labelledby=\"phys-rewrite-cardiovascular-micro-1\"><h3 id=\"phys-rewrite-cardiovascular-micro-1\" tabindex=\"-1\">先定向外為正，再拆兩個壓差</h3><p>傳統題型使用 <strong>Jv＝Kf[(Pc−Pi)−σ(πc−πi)]</strong>。Pc 推水向外，Pi 抵銷外濾，πc 把水保在血管內，πi 增外濾。Kf 決定同樣壓差下流量大小，σ 是蛋白反射係數。115-1 第 59 題 36−0−(26−3)＝+13 mmHg。112-2 第 60 題 15−0−(28−3)＝−10 mmHg。只給壓力時回答淨壓差與方向，不能將 mmHg 寫成 mL/min。</p>\n<figure><a href=\"physiology-figures/brs-3-18.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"physiology-figures/brs-3-18.webp\" alt=\"微血管的 Starling 力\" style=\"max-width:100%;height:auto\" loading=\"lazy\"></a><figcaption>BRS Physiology 第 7 版圖 3.18，印刷頁 93。箭頭表示各壓力所造成的水移動傾向。作題時固定向外為正。</figcaption></figure>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-micro-2\"><h3 id=\"phys-rewrite-cardiovascular-micro-2\" tabindex=\"-1\">前後阻力同樣降低血流，對 Pc 卻可相反</h3><p>在入口、出口壓固定的串聯模型，前微血管小動脈阻力增加，使較多壓降發生在抵達微血管前，Pc 下降。後微血管小靜脈阻力增加，則使壓力較難向後釋放，Pc 上升。兩種都可減整段 Q，不能由 Q 下降直接推過濾一定下降。靜脈阻塞或長時間站立水腫，常由較高下游壓力傳回微血管解釋。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-micro-3\"><h3 id=\"phys-rewrite-cardiovascular-micro-3\" tabindex=\"-1\">四種水腫機轉各改不同參數</h3><p>靜脈壓高主要增 Pc，低白蛋白降 πc，發炎增加屏障通透性可增 Kf、降 σ 並使間質蛋白增多，淋巴阻塞減少水與蛋白清除。不同原因可共同存在。大量蛋白留在間質會影響有效滲透力，不能把所有水腫只叫水太多。</p>\n<p>實際穩態還受內皮糖萼與糖萼下方蛋白濃度影響，許多組織的穩態過濾主要由淋巴回收。歷屆定量題依指定的傳統模型算，生理解釋則不把「每條毛細血管動脈端濾、靜脈端吸」當成所有組織的固定結局。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-micro-4\"><h3 id=\"phys-rewrite-cardiovascular-micro-4\" tabindex=\"-1\">淋巴是有動力的回流路</h3><p>單向瓣膜、管壁平滑肌節律、骨骼肌擠壓與呼吸壓差促回流。濾出增加時淋巴可代償，超過能力或通路阻塞才易持續蓄積。113-2 第 59 題、115-2 第 58 題問推進機轉，需分淋巴自身平滑肌與靜脈管壁，不因兩者都會收縮就當成同一泵。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-micro-5\"><h3 id=\"phys-rewrite-cardiovascular-micro-5\" tabindex=\"-1\">用 Kf 和 σ 判同一淨壓的濾出量</h3><p>若淨有效壓維持 10 mmHg，Kf 從 0.01 增到 0.02 mL/min/mmHg，模型的濾出量由 0.1 增為 0.2 mL/min。若 σ 下降，蛋白壓差的有效保水作用減弱，即使 Pc、πc 原值不變也可增加外濾。發炎時不只是水通透性，也可能蛋白選擇性改變，單算 Pc 不足以解釋。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-micro-6\"><h3 id=\"phys-rewrite-cardiovascular-micro-6\" tabindex=\"-1\">淋巴能代償，所以濾出增加不必立刻明顯水腫</h3><p>當外濾增加，間質壓與淋巴流量的改變可協助限制液體累積。只有產生量持續超過清除，或蛋白屏障和淋巴同時受損，才容易持續水腫。題目若比較急性變化和慢性外觀，須把這些代償放進時間軸。</p>\n</section><section><h3>用既有原題檢查本節</h3><p>先完成選擇，再說出每個選項成立所需的條件。轉錄若有符號或欄位錯序，以原卷為準。</p><details class=\"quiz-question\"><summary>115 年第 1 次醫學（一）第 59 題</summary><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">59.某段微血管內靠近動脈端之微血管流體\n管外組織間液流體靜壓為0 毫米汞柱,\n為何? \n \nA.7 毫米汞柱 \nB.13 毫米汞柱 \nC.59 毫米汞柱 \nD.65 毫米汞柱 \n體靜壓為36 毫米汞柱,血漿蛋白質造成之滲透壓\n組織間液蛋白質造成之滲透壓為3 毫米汞柱,該\n為26 毫米汞柱,微血\n該微血管之淨過濾壓值</p><p><a href=\"exams/115/1/medicine-1-Q.pdf#page=11\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>作答後展開答案與解析</summary><p><strong>官方採計答案</strong>　B</p><p>36−0−26＋3＝13 mmHg，向外。間質蛋白吸引水往組織，因此 πi 要加回。</p><p>原卷的傳統 Starling 模型取向外為正，36−0−26＋3＝13 mmHg，表示外濾傾向。</p><ul><li>A　7 mmHg 常見於把間質蛋白壓 3 當成往內，算成 36−26−3。間質蛋白實際增加向外拉力。</li><li>B　13 mmHg 正確，外靜水壓為 0，間質膠體壓要加回。</li><li>C　59 mmHg 不是指定四個作用合成的結果，需重新確認血漿蛋白向內的符號。</li><li>D　65 mmHg 可由把各蛋白壓都當向外相加得到，忽略 πc 的保水作用。</li></ul><p><strong>換條件再推</strong>　若改為 Pc 15、πc 28、πi 3，其餘同，結果 −10 mmHg，依傳統題設表示淨向內。壓差未乘 Kf 不能寫成濾出量。</p><p><a href=\"exams/115/1/medicine-1-M.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></details><details class=\"quiz-question\"><summary>112 年第 2 次醫學（一）第 60 題</summary><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">60.微血管之淨過濾壓(net filtration pressure)是決定微血管內液體流出微血管或是流入微血管的重要因素。某段\n微血管之微血管流體靜壓為15 毫米汞柱,組織間液流體靜壓為0 毫米汞柱,血漿蛋白質造成之滲透壓為28 毫\n米汞柱,組織間液蛋白質造成之滲透壓為3 毫米汞柱。此段微血管其淨過濾壓值,與該淨過濾壓值導致的微\n血管液體流向傾向分別為何? \nA.-16 毫米汞柱,液體流向傾向流入微血管 \nB.-10 毫米汞柱,液體流向傾向流入微血管 \nC.40 毫米汞柱,液體流向傾向流出微血管 \nD.46 毫米汞柱,液體流向傾向流出微血管</p><p><a href=\"exams/112/2/medicine-1-Q.pdf#page=11\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>作答後展開答案與解析</summary><p><strong>官方採計答案</strong>　B</p><p>依題意以向外為正，計算 15−0−28＋3＝−10 mmHg。負值在原題模型表示淨向內。</p><p><a href=\"exams/112/2/medicine-1-S.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></details><details class=\"quiz-question\"><summary>115 年第 2 次醫學（一）第 58 題</summary><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">58.淋巴系統提供組織間液流向心血管系統的單行道路徑,下列何者最不可能促進淋巴回流? \n \nA.骨骼肌泵 \nB.靜脈管上之平滑肌收縮 \nC.呼吸泵 \nD.淋巴管上之平滑肌收縮</p><p><a href=\"exams/115/2/medicine-1-Q.pdf#page=11\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>作答後展開答案與解析</summary><p><strong>官方採計答案</strong>　B</p><p>呼吸泵、骨骼肌泵與淋巴管自身收縮可推進。靜脈壁平滑肌收縮並非此題的直接淋巴泵。</p><p><a href=\"exams/115/2/medicine-1-M.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></details></section>"
  },
  {
    "id": "regional",
    "title": "局部調節與特殊器官血流",
    "english": "Regional circulation",
    "summary": "辨認灌流壓、代謝訊號與組織壓迫的作用。",
    "html": "<p class=\"quiz-note\">閱讀對照：BRS Physiology 第 7 版第 3 章，VIII，特殊循環。本節由概念、條件、定量到題型依序閱讀。</p><nav class=\"study-actions\" aria-label=\"本節目錄\"><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-regional-1\">由起始刺激區分三種充血或自動調節</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-regional-2\">冠狀灌流要扣掉心肌內壓迫</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-regional-3\">腦、肺與皮膚各有主導變項</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-regional-4\">局部與全身反應可朝不同方向</button></nav><section aria-labelledby=\"phys-rewrite-cardiovascular-regional-1\"><h3 id=\"phys-rewrite-cardiovascular-regional-1\" tabindex=\"-1\">由起始刺激區分三種充血或自動調節</h3><p>壓力改變而流量相對維持是自動調節，涉及肌源性與代謝調整。活動耗氧增加引發血流增加是主動充血。先堵血再解除、短暫超過基線是反應性充血，反映缺血期間累積的局部訊號及氧供回補。110-2 第 57 題綁住手指後放開，時間順序直接指向反應性充血。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-regional-2\"><h3 id=\"phys-rewrite-cardiovascular-regional-2\" tabindex=\"-1\">冠狀灌流要扣掉心肌內壓迫</h3><p>左室收縮壓迫心肌內血管，左冠血流通常以舒張期為主，心內膜下更易受壓。簡化左冠灌流壓可近似主動脈舒張壓−LVEDP。舒張壓低、LVEDP 高或心率快縮短舒張都可能不利供血。右心收縮壓低，右冠相位分布與左冠不同。</p>\n<p>心肌平時氧萃取已高，需求增加時常靠增冠流。腺苷、NO 等局部訊號有助舒張。113-1 第 61 題心率降低、需求下降時，代謝舒張驅動也可能下降，應按情境回答，避免背成慢脈直接作用受體使收縮。114-1 第 60 題則從舒張期壓迫減少判灌流時相。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-regional-3\"><h3 id=\"phys-rewrite-cardiovascular-regional-3\" tabindex=\"-1\">腦、肺與皮膚各有主導變項</h3><p>腦 PaCO₂ 增通常舒張。腦灌流壓在 ICP 為主要下游限制時近似 MAP−ICP。MAP 90、ICP 10，CPP 約 80；ICP 升至 25，MAP 不變則 CPP 約 65。自動調節有範圍，壓力或病變超出時流量不再相對固定。</p>\n<p>肺泡局部低氧使附近肺小動脈收縮，幫血流轉向較通氣區；全肺低氧則可增肺阻。多數體組織局部缺氧更常促舒張。皮膚血流又受散熱調控，汗液蒸發與皮膚灌流共同影響熱交換。題幹只寫低氧或 CO₂ 時，先找器官和刺激所在區室。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-regional-4\"><h3 id=\"phys-rewrite-cardiovascular-regional-4\" tabindex=\"-1\">局部與全身反應可朝不同方向</h3><p>動態運動時全身交感上升，但活動骨骼肌的局部代謝舒張仍可占優勢。冠流也可因耗氧增加而上升。不能從交感提高推所有器官小動脈都同幅收縮。解題時先找器官需求，再看局部和神經作用誰在題目條件下較重要。</p>\n</section><section><h3>用既有原題檢查本節</h3><p>先完成選擇，再說出每個選項成立所需的條件。轉錄若有符號或欄位錯序，以原卷為準。</p><details class=\"quiz-question\"><summary>110 年第 2 次醫學（一）第 57 題</summary><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">57.若以一條繩線緊綁某根手指頭根部1~2分鐘後,移除該繩線後會發現該手指因短暫血流增加而變紅,這現象\n最主要是下列何種局部控制機制所致?\n \nA.主動性充血(active hyperemia)\nB.反應性充血(reactive hyperemia)\nC.肌原反應(myogenic responses)\nD.對傷害的反應(response to injury)</p><p><a href=\"exams/110/2/medicine-1-Q.pdf#page=9\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>作答後展開答案與解析</summary><p><strong>官方採計答案</strong>　B</p><p>綁住造成短暫缺血，鬆開後血流超過基線。活動增加時因代謝而增加血流才是主動充血。</p><p><a href=\"exams/110/2/medicine-1-M.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></details><details class=\"quiz-question\"><summary>114 年第 1 次醫學（一）第 60 題</summary><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">60.正常生理情況下,下列有關冠狀動脈(coronary artery)血流增加的時機與其原因的說明,何者正確? \n \nA.主要在心舒張期(diastole)才會出現明顯血流,因為在心收縮期冠狀動脈會受收縮的心肌壓迫且其入口亦\n遭遮蔽 \nB.主要在心舒張期(diastole)才會出現明顯血流,因為心舒張期時冠狀動脈壓力小於主動脈壓力,冠狀動脈\n瓣膜才能開啟 \nC.主要在心收縮期(systole)才會出現明顯血流,因心收縮期時主動脈壓較大,較容易將血液送入冠狀動脈 \nD.主要在心收縮期(systole)才會出現明顯血流,因僅在心收縮期時血液才由左心室送入主動脈,進而再送\n入冠狀動脈</p><p><a href=\"exams/114/1/medicine-1-Q.pdf#page=11\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>作答後展開答案與解析</summary><p><strong>官方採計答案</strong>　A</p><p>左心室舒張時心肌對血管的壓迫減少，利於冠脈血流。不要只用主動脈壓在收縮期較高來判斷。</p><p><a href=\"exams/114/1/medicine-1-M.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></details><details class=\"quiz-question\"><summary>115 年第 1 次醫學（一）第 60 題</summary><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">60.有關腦部循環與血流調控之敘述,何者\n \nA.腦部之流量自動控制(flow autoregu\n血管擴張 \nB.肝臟之流量自動控制(flow autoregu\n血管擴張 \nC.腦部之流量自動控制(flow autoregu\n血管收縮 \nD.肝臟之流量自動控制(flow autoregu\n血管收縮 \n者最為適當? \nulation)機制較肝臟顯著,腦部動脈血中二氧化\nulation)機制較腦部顯著,腦部動脈血中二氧化\nulation)機制較肝臟顯著,腦部動脈血中二氧化\nulation)機制較腦部顯著,腦部動脈血中二氧化\n化碳濃度升高時會引起\n化碳濃度升高時會引起\n化碳濃度升高時會引起\n化碳濃度升高時會引起</p><p><a href=\"exams/115/1/medicine-1-Q.pdf#page=11\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>作答後展開答案與解析</summary><p><strong>官方採計答案</strong>　A</p><p>判讀原卷的灌流壓與血管口徑條件。壓力下降時可舒張以維持腦血流；PaCO₂ 上升也可經代謝機轉促舒張。</p><p><a href=\"exams/115/1/medicine-1-M.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></details></section>"
  },
  {
    "id": "integration",
    "title": "站立、運動、失血與整合推理",
    "english": "Exercise, posture & hemorrhage",
    "summary": "從第一個擾動往後推，區分原發變化和代償。",
    "html": "<p class=\"quiz-note\">閱讀對照：BRS Physiology 第 7 版第 3 章，IX，重力、運動與失血。本節由概念、條件、定量到題型依序閱讀。</p><nav class=\"study-actions\" aria-label=\"本節目錄\"><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-integration-1\">先寫原發擾動，再接快速和慢速代償</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-integration-2\">用乘積解釋看似正常的 MAP</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-integration-3\">動態運動和等長用力要分條件</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-integration-4\">整合題固定用四個問題</button><button type=\"button\" data-phys-section=\"phys-rewrite-cardiovascular-integration-5\">代償提高和高於原基線要區分</button><button type=\"button\" data-phys-section=\"phys-case-cardiovascular-integration\">整合案例：急性失血後，血壓近正常代表流量正常嗎</button></nav><section aria-labelledby=\"phys-rewrite-cardiovascular-integration-1\"><h3 id=\"phys-rewrite-cardiovascular-integration-1\" tabindex=\"-1\">先寫原發擾動，再接快速和慢速代償</h3><p>站立使下肢與腹部暫時蓄血，胸腔回流、EDV、SV 可先下降，再透過感壓反射增 HR 和血管張力。失血則是真正容量下降，除了神經反射，微血管濾出下降與短暫液體回補、RAAS 和 ADH 都可參與。若題幹問最初數秒，先看神經；問恢復血量則看較慢的水鈉平衡。</p>\n<p>正常吸氣胸內壓降低有助右回流，腹胸壓變和骨骼肌泵也會影響回流。左室短期輸出與右室未必每一搏都相等，穩態平均才需匹配。這讓呼吸造成的心音變化和持續循環平衡可以並存。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-integration-2\"><h3 id=\"phys-rewrite-cardiovascular-integration-2\" tabindex=\"-1\">用乘積解釋看似正常的 MAP</h3><p>初始 CO 5、TPR 18，MAP 近 90。失血後 CO 4、TPR 22.5，MAP 仍近 90。壓力相同不能推血量與組織血流已恢復。動態運動即使 TPR 下降，CO 大幅增加仍可使 MAP 上升。先把兩方向寫在 CO×TPR 兩側，再判是否有足夠數字定量。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-integration-3\"><h3 id=\"phys-rewrite-cardiovascular-integration-3\" tabindex=\"-1\">動態運動和等長用力要分條件</h3><p>動態運動使活動肌局部舒張、CO 上升，皮膚散熱與其他器官交感調整也可同時存在，TPR 常下降。持續等長或舉重則可因收縮直接壓迫血管而增阻，血壓反應不同。109-2 第 59 題特別寫舉重，就是要抓機械壓迫，不能全套慢跑的舒張模型。貧血、發熱與運動都可能高輸出，但各自原發刺激不同。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-integration-4\"><h3 id=\"phys-rewrite-cardiovascular-integration-4\" tabindex=\"-1\">整合題固定用四個問題</h3><p>先問哪個量最先改，接著問此刻哪些條件固定，再加上代償，最後看題目問前後哪個時間點。103-1 第 14 題起立 CO 降，抓 SV；110-1 第 59 題失血代償後何者增，抓 TPR；113-1 第 60 題問最不可能，迷走增加與低壓反射方向不符。只背終點會被「最初」「代償後」「不可能」三種問法拆散，沿因果順序重建才能轉用到陌生題。</p>\n</section><section aria-labelledby=\"phys-rewrite-cardiovascular-integration-5\"><h3 id=\"phys-rewrite-cardiovascular-integration-5\" tabindex=\"-1\">代償提高和高於原基線要區分</h3><p>失血後交感讓 SV 相對沒有代償時提高，仍可能低於失血前。題目若問「哪個比失血前增加」，TPR 或 HR 常較直接；若問「代償如何維持 SV」，收縮力與回流的支路則相關。同樣文字寫增加，基準不同就會得到不同選項。</p>\n</section><section aria-labelledby=\"phys-case-cardiovascular-integration\"><h3 id=\"phys-case-cardiovascular-integration\" tabindex=\"-1\">整合案例：急性失血後，血壓近正常代表流量正常嗎</h3><p>假設基線 HR 75/min、EDV 120 mL、ESV 50 mL、TPR 18 mmHg·min/L，右房壓可略。SV 70、CO 5.25，MAP 約 94.5 mmHg。失血後最先下降的是有效循環容量與平均全身充盈壓。第一階段假設 HR 和 TPR 尚未變，EDV 變 100、ESV 仍為 50，則 SV 50、CO 3.75，MAP 約 67.5。</p>\n<p>接著感壓受器放電下降，交感提高 HR、收縮力、靜脈張力及部分小動脈阻力。若新的 EDV 105、ESV 55、HR 90，CO 為 4.5 L/min；TPR 升為 21 時，MAP 又是 94.5。此例收縮力提高但 ESV 仍較基線高，因後負荷也變了。由此可見只觀察 ESV 不能反推收縮力，也不能由 MAP 回復就認定 CO 回復。實際第一拍 ESV 亦可能隨後負荷下降而改變，題目固定 ESV 是為了隔離前負荷效應。</p>\n<p>如果同時給 CaO₂ 20 mL/dL，兩時點送氧量分別約 1050 和 900 mL/min。皮膚或內臟局部血流可因血管收縮降得更明顯。之後若問恢復容量，才加入毛細血管液體動員、腎臟保鈉與保水，並區分秒、分與小時尺度。</p>\n</section><section><h3>用既有原題檢查本節</h3><p>先完成選擇，再說出每個選項成立所需的條件。轉錄若有符號或欄位錯序，以原卷為準。</p><details class=\"quiz-question\"><summary>109 年第 2 次醫學（一）第 59 題</summary><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">59.從事舉重運動時,造成運動者當下血管周邊總阻力(total peripheral resistance; TPR)上升的最主要原因為\n何?\n \nA.肌肉收縮壓迫血管\nB.心輸出量增加,血壓上升\nC.肌肉局部代謝物因子增加\nD.感壓受器反射(baroreceptor reflex)作用增加</p><p><a href=\"exams/109/2/medicine-1-Q.pdf#page=9\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>作答後展開答案與解析</summary><p><strong>官方採計答案</strong>　A</p><p>較強且持續的肌肉收縮可壓迫血管，提高阻力。動態耐力運動的局部舒張不能直接套在此情境。</p><p><a href=\"exams/109/2/medicine-1-M.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></details><details class=\"quiz-question\"><summary>110 年第 1 次醫學（一）第 59 題</summary><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">59.若因車禍而失血(hemorrhage)約20%血量,在身體啟動代償機制(reflex compensations)後,下列何者最可\n能比失血前增高?\n \nA.心搏量(stroke volume)\nB.心輸出量(cardiac output)\nC.血管周邊總阻力(total peripheral resistance)\nD.平均動脈壓(mean arterial pressure)</p><p><a href=\"exams/110/1/medicine-1-Q.pdf#page=9\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>作答後展開答案與解析</summary><p><strong>官方採計答案</strong>　C</p><p>前負荷與 SV 原發下降，反射可提高交感與阻力。題目問代償後增加的項目，先找交感效應。</p><p><a href=\"exams/110/1/medicine-1-S.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></details><details class=\"quiz-question\"><summary>113 年第 1 次醫學（一）第 60 題</summary><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">60.在大失血造成動脈壓下降時,體內循環系統為維持恆定,會產生一連串接續反應將血壓朝向正常值回復,該\n過程中最不可能發生者為下列何項?\n \nA.分布到心臟的副交感神經活性增加,使心房竇房結心跳速率增快\nB.分布到心室心肌細胞的交感神經活性增加,增強心室收縮與心搏量\nC.分布到靜脈的交感神經活性增加,增加靜脈回流與心臟舒張末期容積\nD.分布到微動脈的交感神經活性增加,減少微動脈半徑,增加周邊總阻力</p><p><a href=\"exams/113/1/medicine-1-Q.pdf#page=11\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>作答後展開答案與解析</summary><p><strong>官方採計答案</strong>　A</p><p>血壓下降使感壓放電下降，交感增加而副交感通常下降。選項若說迷走增加，方向和代償不符。</p><p>低動脈壓降低感壓放電，引起交感增加、心臟迷走下降。題幹問最不可能。</p><ul><li>A　副交感增加本身通常使 SA node 變慢；失血代償又多為副交感下降。方向與效果都不符，選 A。</li><li>B　交感增加可增心室收縮力，傾向提高相對未代償時的 SV。</li><li>C　靜脈交感收縮可減少容量儲血、促回流，支持 EDV。</li><li>D　小動脈收縮減半徑、增 TPR，是維持壓力的典型支路。</li></ul><p><strong>換條件再推</strong>　B、C 的代償效果不代表所有數值必超過失血前。要分「相對未代償時提高」和「高於原基線」。</p><p><a href=\"exams/113/1/medicine-1-M.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></details></section>"
  },
  {
    "id": "review",
    "title": "五題考古與重練",
    "english": "Past exam questions & review",
    "summary": "從既有題庫選五題，涵蓋電生理、循環定量、心動週期和失血代償。",
    "html": "<h2>章末原題精讀</h2><p>這五題取自既有題庫，涵蓋本章不同推理。每題依原選項逐項解析，並說明改變條件後應如何重推。</p><details class=\"quiz-question\"><summary>114 年第 1 次醫學（一）第 59 題</summary><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">59.SA node 的動作電位的主升段(上升幅度最大的段落)主要是因下列何種離子的流動而產生? \n \nA.fast sodium channels open,使鈉離子流入細胞內 \nB.funny channels open,使鈉離子流入細胞內 \nC.funny channels open,使鉀離子流入細胞內 \nD.L-type calcium channels open,使鈣離子流入細胞內</p><p><a href=\"exams/114/1/medicine-1-Q.pdf#page=11\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>作答後展開答案與解析</summary><p><strong>官方採計答案</strong>　D</p><p>SA node 第 0 期主要由 L 型 Ca²⁺ 內流引起。If 在第 4 期有貢獻；快速 Na⁺ 上升相典型見於心室工作肌。</p><p>題幹限定 SA node 主升段，即第 0 期。它和第 4 期起搏斜率的來源不同。</p><ul><li>A　快速 Na⁺ 上升相典型用於心室等快速反應細胞，不是 SA node 的主要第 0 期。</li><li>B　If 對自發第 4 期去極化重要，不能直接當主升段。</li><li>C　If 為混合陽離子電流，起搏電位下淨向內；此敘述的 K⁺ 內流也不是主升段機轉。</li><li>D　L 型 Ca²⁺ 通道開啟使鈣內流，符合 SA node 第 0 期，選 D。</li></ul><p><strong>換條件再推</strong>　若改問副交感如何減慢心跳，先看第 4 期斜率下降、最大舒張電位變負等變化。</p><p><a href=\"exams/114/1/medicine-1-M.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></details><details class=\"quiz-question\"><summary>111 年第 2 次醫學（一）第 60 題</summary><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">60.某受試者,其氧氣消耗量為每分鐘600毫升(mL/min),肺動脈血氧濃度為每公升140毫升,肱動脈(brachial\nartery)血氧濃度為每公升200毫升,則此受試者的心輸出量(cardiac output)為多少L/min?\n \nA.4.2\nB.10\nC.30\nD.34.2</p><p><a href=\"exams/111/2/medicine-1-Q.pdf#page=11\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>作答後展開答案與解析</summary><p><strong>官方採計答案</strong>　B</p><p>含量差為 200−140＝60 mL/L。600 mL/min 除以 60 mL/L＝10 L/min。</p><p>Fick 用每分鐘耗氧量除以每公升血交出的氧。200−140＝60 mL/L，600÷60＝10 L/min。</p><ul><li>A　4.2 不符合題目給定的含量差與耗氧，檢查是否把單側含量或不相關比例當分母。</li><li>B　10 L/min 正確，單位 mL O₂/min 除 mL O₂/L blood，留下 L blood/min。</li><li>C　30 不符合 600/60，應重新檢查含量差。</li><li>D　34.2 同樣不滿足本題氧守恆。不能用相加或分壓替代動靜脈含量差。</li></ul><p><strong>換條件再推</strong>　肺動脈血提供混合靜脈含量。若改以 mL/dL 給含量，先得到 dL/min，再換 L/min。</p><p><a href=\"exams/111/2/medicine-1-M.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></details><details class=\"quiz-question\"><summary>111 年第 1 次醫學（一）第 60 題</summary><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">60.在正常心臟週期的等容收縮(isovolumic contraction)期中,下列各腔室的壓力排列順序何者正確?\n \nA.主動脈的壓力(aortic pressure)&gt;左心室的壓力(left ventricular pressure)&gt;左心房的壓力(left atrial\npressure)\nB.主動脈的壓力(aortic pressure)&gt;左心房的壓力(left atrial pressure)&gt;左心室的壓力(left ventricular\npressure)\nC.左心室的壓力(left ventricular pressure)&gt; 主動脈的壓力(aortic pressure)&gt; 左心房的壓力(left atrial\npressure)\nD.左心室的壓力(left ventricular pressure)&gt;左心房的壓力(left atrial pressure)&gt; 主動脈的壓力(aortic\npressure)</p><p><a href=\"exams/111/1/medicine-1-Q.pdf#page=9\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>作答後展開答案與解析</summary><p><strong>官方採計答案</strong>　A</p><p>二尖瓣已關，所以 LV&gt;LA。主動脈瓣尚未開，所以 Ao&gt;LV。合起來 Ao&gt;LV&gt;LA。</p><p>等容收縮時二尖瓣已關，LV&gt;LA；主動脈瓣尚未開，Ao&gt;LV。兩條不等式合起來 Ao&gt;LV&gt;LA。</p><ul><li>A　滿足兩個瓣膜關閉的條件，選 A。</li><li>B　LA&gt;LV 會有利二尖瓣打開，與該期條件不符。</li><li>C　LV&gt;Ao 已有利主動脈瓣打開，接近射血而非等容收縮。</li><li>D　同樣使 LV&gt;Ao，且把 Ao 排得比 LA 更低，不符合典型該時相。</li></ul><p><strong>換條件再推</strong>　等容舒張某段也可出現相同排序，須再看 LV 壓下降、容積在 ESV，才能區分。</p><p><a href=\"exams/111/1/medicine-1-S.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></details><details class=\"quiz-question\"><summary>115 年第 1 次醫學（一）第 59 題</summary><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">59.某段微血管內靠近動脈端之微血管流體\n管外組織間液流體靜壓為0 毫米汞柱,\n為何? \n \nA.7 毫米汞柱 \nB.13 毫米汞柱 \nC.59 毫米汞柱 \nD.65 毫米汞柱 \n體靜壓為36 毫米汞柱,血漿蛋白質造成之滲透壓\n組織間液蛋白質造成之滲透壓為3 毫米汞柱,該\n為26 毫米汞柱,微血\n該微血管之淨過濾壓值</p><p><a href=\"exams/115/1/medicine-1-Q.pdf#page=11\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>作答後展開答案與解析</summary><p><strong>官方採計答案</strong>　B</p><p>36−0−26＋3＝13 mmHg，向外。間質蛋白吸引水往組織，因此 πi 要加回。</p><p>原卷的傳統 Starling 模型取向外為正，36−0−26＋3＝13 mmHg，表示外濾傾向。</p><ul><li>A　7 mmHg 常見於把間質蛋白壓 3 當成往內，算成 36−26−3。間質蛋白實際增加向外拉力。</li><li>B　13 mmHg 正確，外靜水壓為 0，間質膠體壓要加回。</li><li>C　59 mmHg 不是指定四個作用合成的結果，需重新確認血漿蛋白向內的符號。</li><li>D　65 mmHg 可由把各蛋白壓都當向外相加得到，忽略 πc 的保水作用。</li></ul><p><strong>換條件再推</strong>　若改為 Pc 15、πc 28、πi 3，其餘同，結果 −10 mmHg，依傳統題設表示淨向內。壓差未乘 Kf 不能寫成濾出量。</p><p><a href=\"exams/115/1/medicine-1-M.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></details><details class=\"quiz-question\"><summary>113 年第 1 次醫學（一）第 60 題</summary><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">60.在大失血造成動脈壓下降時,體內循環系統為維持恆定,會產生一連串接續反應將血壓朝向正常值回復,該\n過程中最不可能發生者為下列何項?\n \nA.分布到心臟的副交感神經活性增加,使心房竇房結心跳速率增快\nB.分布到心室心肌細胞的交感神經活性增加,增強心室收縮與心搏量\nC.分布到靜脈的交感神經活性增加,增加靜脈回流與心臟舒張末期容積\nD.分布到微動脈的交感神經活性增加,減少微動脈半徑,增加周邊總阻力</p><p><a href=\"exams/113/1/medicine-1-Q.pdf#page=11\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>作答後展開答案與解析</summary><p><strong>官方採計答案</strong>　A</p><p>血壓下降使感壓放電下降，交感增加而副交感通常下降。選項若說迷走增加，方向和代償不符。</p><p>低動脈壓降低感壓放電，引起交感增加、心臟迷走下降。題幹問最不可能。</p><ul><li>A　副交感增加本身通常使 SA node 變慢；失血代償又多為副交感下降。方向與效果都不符，選 A。</li><li>B　交感增加可增心室收縮力，傾向提高相對未代償時的 SV。</li><li>C　靜脈交感收縮可減少容量儲血、促回流，支持 EDV。</li><li>D　小動脈收縮減半徑、增 TPR，是維持壓力的典型支路。</li></ul><p><strong>換條件再推</strong>　B、C 的代償效果不代表所有數值必超過失血前。要分「相對未代償時提高」和「高於原基線」。</p><p><a href=\"exams/113/1/medicine-1-M.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></details><h2>完成一章的檢核</h2><p>能由空白圖重建機轉、能帶單位完成計算、能說出錯誤選項錯在哪一步，再進入 20 題章末測驗。以 18 題為練習目標。用不同一輪檢查穩定性，再回讀最低的考點。</p>"
  }
];

const cardiovascularExamNotes = [
  {
    "id": "flow",
    "name": "循環配置與血流動力學",
    "pattern": "定量、容積與阻力",
    "strategy": "先分壓差、阻力和容積。辨認公式適用條件與單位。",
    "notes": [
      [
        "103-1-2-11",
        "脈壓與 MAP 近似",
        "148/82 的脈壓是 66。以 DBP＋PP/3，MAP 約 104 mmHg，不能直接取算術平均。"
      ],
      [
        "104-1-2-11",
        "由 CO 與 TPR 推壓差",
        "壓差＝流量×阻力。CO 5 L/min×22 mmHg·min/L＝110 mmHg，忽略右房壓時近似 MAP。再用 110≈DBP＋(150−DBP)/3，求得 DBP 約 90 mmHg。"
      ],
      [
        "107-2-1-57",
        "黏度增加使阻力上升",
        "在管徑、長度相同時，Poiseuille 阻力與黏度成正比。流量和動脈壓還要看其餘條件與代償。"
      ],
      [
        "109-1-1-61",
        "Korotkoff 聲出現區間",
        "袖帶壓介於收縮壓與舒張壓時，動脈部分時間被壓迫，血液間歇流過，可聽到敲擊聲。"
      ],
      [
        "109-2-1-57",
        "靜脈是主要血量庫",
        "靜脈順應性較高，能容納較多血液。微血管床總截面積大，和血液容積最大是不同問題。"
      ],
      [
        "112-1-1-59",
        "由 120/50 求 MAP",
        "脈壓為 70，官方正確選項為脈壓 70。若另估算 MAP，正常心率時近似 50＋70/3≈73 mmHg。舒張時間通常較長。"
      ],
      [
        "114-1-1-58",
        "左右心穩態流量",
        "左右心在穩態有相同平均輸出，肺循環壓力與阻力較低。不能由左室壓力較高推成左室搏出量較大。"
      ]
    ]
  },
  {
    "id": "electrical",
    "name": "心臟電生理與 ECG",
    "pattern": "離子時相、傳導與波形",
    "strategy": "先認細胞型態，再判 AP 時相。ECG 是電事件，機械收縮稍後發生。",
    "notes": [
      [
        "109-1-1-60",
        "ECG 與傳導異常",
        "Purkinje 系統傳導受阻使心室去極化較不同步，QRS 可延長。第一度 AV block 典型 PR 延長，QT 主要反映心室去極化至再極化。"
      ],
      [
        "110-2-1-56",
        "起搏電位第 4 期",
        "第 4 期由 If、Ca²⁺ 電流與 K⁺ 電導變化共同作用。主升段第 0 期則主要靠 L 型 Ca²⁺。"
      ],
      [
        "110-2-1-59",
        "心肌不反應期",
        "心肌 AP 平台期使不反應期很長，與收縮高度重疊，限制張力加成和強直。"
      ],
      [
        "111-1-1-59",
        "自主神經改變心率",
        "交感 β1 提高竇房結起搏速率。迷走經 ACh、M2 降低斜率及增加 K⁺ 電導，心跳減慢。"
      ],
      [
        "111-2-1-57",
        "P、QRS、ST、T",
        "P 是心房去極化，T 是心室再極化。ST 與心室肌平台期相關，切勿把 P 當成心房再極化。"
      ],
      [
        "113-2-1-58",
        "傳導速度比較",
        "Purkinje 專長快速傳導，結節組織較慢。自發放電最快的起搏點和傳導最快的組織不是同一概念。"
      ],
      [
        "114-1-1-59",
        "竇房結主升段",
        "SA node 第 0 期主要由 L 型 Ca²⁺ 內流引起。If 在第 4 期有貢獻；快速 Na⁺ 上升相典型見於心室工作肌。"
      ],
      [
        "114-2-1-59",
        "心室第 1 期早期再極化",
        "快速 Na⁺ 通道失活，短暫外向 K⁺ 電流使膜電位先下降。接著 L 型 Ca²⁺ 內流參與平台期。"
      ],
      [
        "114-2-1-60",
        "心室與 SA node AP",
        "心室通常有穩定靜止電位和平台期。SA node 有自發第 4 期去極化，上升相依 Ca²⁺。"
      ],
      [
        "115-2-1-57",
        "副交感降低起搏斜率",
        "M2 使 cAMP 降低並可增加 K⁺ 電導，達閾時間延長，心率下降。"
      ]
    ]
  },
  {
    "id": "output",
    "name": "心肌收縮、心輸出量與回流",
    "pattern": "Fick、EF 與前後負荷",
    "strategy": "先寫守恆或容積公式，再判哪個變項直接改變。",
    "notes": [
      [
        "98-1-2-7",
        "Fick 氧守恆",
        "動脈減混合靜脈氧含量為 0.05 mL O₂/mL blood。每分鐘耗氧除以這個差，所得先是 mL/min。"
      ],
      [
        "99-2-2-9",
        "由 EDV、ESV 求 EF",
        "EDV 140、ESV 42，SV＝98 mL，EF＝98/140＝70%。分母是 EDV。"
      ],
      [
        "108-1-1-56",
        "幫浦與收縮力｜跨章・細胞生理",
        "抑制鈉鉀幫浦使 Na⁺ 梯度下降，減弱 NCX 正向排鈣，增加可用 Ca²⁺。這和直接抑制 SERCA 不同。"
      ],
      [
        "111-1-1-61",
        "Fick 的 L 與 mL",
        "耗氧 1.9 L/min 先換 1900 mL/min。含量差 188−134＝54 mL/L，CO 約 35 L/min。"
      ],
      [
        "111-2-1-60",
        "肺動脈提供混合靜脈氧含量",
        "含量差為 200−140＝60 mL/L。600 mL/min 除以 60 mL/L＝10 L/min。"
      ],
      [
        "112-1-1-61",
        "血液量增加與前負荷",
        "容量增加可提高回流及 EDV，依 Frank–Starling 機制 SV 增加。先定位前負荷，無須假定收縮力增加。"
      ],
      [
        "113-1-1-59",
        "慢性中度貧血與高輸出",
        "血液攜氧能力下降，可伴流量代償及較低黏度。心肌梗塞則可因收縮力下降使輸出降低。"
      ],
      [
        "113-2-1-60",
        "容量首先改變舒張末期容積",
        "血量上升主要經靜脈回流增加前負荷與 EDV。ESV 還受後負荷與收縮力，不能用前負荷直接推一定增加。"
      ],
      [
        "115-2-1-60",
        "回流泵的方向",
        "靜脈收縮、容量增加、骨骼肌泵皆可促回流。題目比較生理條件下的呼氣，通常不像吸氣時胸內壓下降有助回流。"
      ]
    ]
  },
  {
    "id": "cycle",
    "name": "心動週期、壓力–容積環與心音",
    "pattern": "瓣膜時相、壓力排序與圖判讀",
    "strategy": "先找壓力交叉，再由瓣膜狀態推容積、心音與 ECG。",
    "notes": [
      [
        "103-1-2-10",
        "主動脈瓣關閉的時點",
        "射血結束後，主動脈壓超過心室壓，瓣膜關閉，標記等容舒張開始。"
      ],
      [
        "104-2-2-12",
        "P 波與心室舒張末期",
        "P 波為心房去極化，通常在心室舒張末期，先於心房收縮及其追加的充盈。"
      ],
      [
        "109-1-1-59",
        "三條壓力曲線",
        "依序找二尖瓣和主動脈瓣開關的交叉點，再區分低壓心房波、心室壓快速變化和主動脈舒張壓。"
      ],
      [
        "111-1-1-60",
        "等容收縮壓力順序",
        "二尖瓣已關，所以 LV>LA。主動脈瓣尚未開，所以 Ao>LV。合起來 Ao>LV>LA。"
      ],
      [
        "111-2-1-58",
        "主動脈瓣關閉的因果",
        "當主動脈壓高於回落的左室壓時瓣膜關閉，產生 A2 並開始等容舒張。核對血流方向與關瓣壓差。"
      ],
      [
        "112-1-1-60",
        "循環瓣膜防逆流",
        "二尖瓣開時血可從左房到左室，主動脈瓣開時血由左室到主動脈。瓣膜按兩側壓差被動開關。"
      ],
      [
        "112-2-1-58",
        "S2 是收縮與舒張的界標",
        "第二心音來自半月瓣關閉，標記舒張起點。T 波可在射血後段出現，不能只用 T 波把事件劃入舒張。"
      ],
      [
        "113-1-1-58",
        "S1 到 S2 的射血",
        "這段是心室收縮期，先等容收縮再射血。射血使左室容積快速下降。"
      ],
      [
        "113-2-1-61",
        "吸氣的 S2 分裂",
        "吸氣時右心回流可增加，肺動脈瓣關閉延後。主動脈瓣和肺動脈瓣都是 S2 成分。"
      ],
      [
        "115-1-1-58",
        "舒張期能發生什麼",
        "房室瓣打開、快速充盈的 S3 與晚期心房收縮皆可在舒張期。T 波開始一般仍在射血後期。"
      ]
    ]
  },
  {
    "id": "regulation",
    "name": "動脈壓調控",
    "pattern": "感壓反射、器官受體與壓力回饋",
    "strategy": "先寫受器放電，再畫交感、迷走與效應器方向。",
    "notes": [
      [
        "106-1-2-12",
        "起立與感壓反射",
        "短暫動脈壓下降使感壓放電下降，交感上升並抑制迷走，以維持 CO 和阻力。"
      ],
      [
        "110-1-1-60",
        "移除感壓抑制後短期血壓",
        "失去正常感壓傳入可解除延腦對交感的抑制，短期血壓可能上升。長期調節另涉及腎臟。"
      ],
      [
        "111-2-1-59",
        "動脈壓升高的負回饋",
        "感壓放電上升，心臟迷走增加、交感減少。反射方向和原發的緊張升壓不同。"
      ],
      [
        "112-1-1-58",
        "感壓放電增加使心率下降",
        "較高伸展使傳入增加，經延腦增加心臟迷走作用，較可能出現 bradycardia。"
      ],
      [
        "114-2-1-61",
        "顱內壓升高與 Cushing 反應｜跨章・神經",
        "腦灌流受威脅可引起升壓反應，感壓反射隨後造成心率下降。兩步一起推可理解高壓、慢脈。"
      ],
      [
        "115-2-1-59",
        "微動脈的神經與局部控制",
        "多數微動脈的重要神經支配是交感，廣泛副交感支配是錯項。另有 NO、腎上腺素受體等局部或體液機轉。"
      ]
    ]
  },
  {
    "id": "micro",
    "name": "微循環與淋巴",
    "pattern": "Starling 力與淋巴泵",
    "strategy": "固定正方向，再分水靜壓、蛋白拉力與淋巴回收。",
    "notes": [
      [
        "112-2-1-60",
        "Starling 負值的方向",
        "依題意以向外為正，計算 15−0−28＋3＝−10 mmHg。負值在原題模型表示淨向內。"
      ],
      [
        "113-2-1-59",
        "淋巴管的推進方式",
        "骨骼肌泵、淋巴管節律性收縮及單向瓣膜有利回流。不能由交感提高管壁活動直接推成淋巴流速減緩。"
      ],
      [
        "115-1-1-59",
        "Starling 淨過濾壓",
        "36−0−26＋3＝13 mmHg，向外。間質蛋白吸引水往組織，因此 πi 要加回。"
      ],
      [
        "115-2-1-58",
        "淋巴回流與靜脈壁",
        "呼吸泵、骨骼肌泵與淋巴管自身收縮可推進。靜脈壁平滑肌收縮並非此題的直接淋巴泵。"
      ]
    ]
  },
  {
    "id": "regional",
    "name": "局部與特殊器官循環",
    "pattern": "灌流時相、局部代謝與自動調節",
    "strategy": "分清血壓變動、耗氧增加、解除阻塞三種起始條件。",
    "notes": [
      [
        "101-2-2-9",
        "左冠狀循環主要在舒張",
        "左室收縮會壓迫心肌內血管，舒張時壓迫減少，冠脈較易灌流。"
      ],
      [
        "110-2-1-57",
        "反應性充血",
        "綁住造成短暫缺血，鬆開後血流超過基線。活動增加時因代謝而增加血流才是主動充血。"
      ],
      [
        "113-1-1-61",
        "冠狀血流與心肌代謝",
        "腺苷及 NO 傾向舒血管。若心率降低、耗氧減少，代謝性舒血管驅動可下降，按原題選相對收縮的情境。"
      ],
      [
        "114-1-1-60",
        "心肌壓迫與冠狀血流時相",
        "左心室舒張時心肌對血管的壓迫減少，利於冠脈血流。不要只用主動脈壓在收縮期較高來判斷。"
      ],
      [
        "115-1-1-60",
        "腦血流自動調節",
        "判讀原卷的灌流壓與血管口徑條件。壓力下降時可舒張以維持腦血流；PaCO₂ 上升也可經代謝機轉促舒張。"
      ]
    ]
  },
  {
    "id": "integration",
    "name": "站立、運動與失血",
    "pattern": "整合題與代償",
    "strategy": "先判最早改變的變項，再加入反射及後續體液調節。",
    "notes": [
      [
        "103-1-2-14",
        "起立初期 CO 下降",
        "血液短暫蓄積下肢，回流和 SV 可先下降。題目問初始心輸出量時，須與代償後區分。"
      ],
      [
        "107-1-1-59",
        "運動增加 CO",
        "心率、收縮力、肌肉泵及回流可提高 CO。運動的局部舒張與交感對其他器官的調整可同時存在。"
      ],
      [
        "109-2-1-59",
        "舉重時的血管壓迫",
        "較強且持續的肌肉收縮可壓迫血管，提高阻力。動態耐力運動的局部舒張不能直接套在此情境。"
      ],
      [
        "110-1-1-59",
        "失血後與失血前比較",
        "前負荷與 SV 原發下降，反射可提高交感與阻力。題目問代償後增加的項目，先找交感效應。"
      ],
      [
        "110-2-1-58",
        "血壓被維持的代償",
        "感壓反射、心率與血管張力變化可維持 MAP。血壓穩定不等於血量和回流未變。"
      ],
      [
        "112-2-1-59",
        "費力運動的心輸出量",
        "健康成人費力運動時 HR 和 SV 的整體效果通常使 CO 上升。局部血流分配與全身 CO 分開看。"
      ],
      [
        "113-1-1-60",
        "失血時迷走下降",
        "血壓下降使感壓放電下降，交感增加而副交感通常下降。選項若說迷走增加，方向和代償不符。"
      ]
    ]
  }
];