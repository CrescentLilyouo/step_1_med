const cardiovascularTopics = [
  {
    "id": "flow",
    "title": "循環的配置與血流動力學",
    "english": "Circuits & hemodynamics",
    "summary": "從壓差、阻力和順應性推導血流。",
    "html": "<nav class=\"study-actions\" aria-label=\"段落目錄\"><button type=\"button\" data-phys-section=\"phys-cv-flow-1\">兩個循環串聯，各器官多為並聯</button><button type=\"button\" data-phys-section=\"phys-cv-flow-2\">壓差、流量與流速各有一條公式</button><button type=\"button\" data-phys-section=\"phys-cv-flow-3\">壓力、順應性與壁張力</button><button type=\"button\" data-phys-section=\"phys-cv-flow-4\">遮答案回想</button></nav><section aria-labelledby=\"phys-cv-flow-1\"><h2 id=\"phys-cv-flow-1\" tabindex=\"-1\">兩個循環串聯，各器官多為並聯</h2><p>體循環由左心室把血送到器官，再經體靜脈回右心。肺循環由右心室把血送到肺，再回左心。兩套循環串聯，穩態下右心和左心的平均心輸出量相同。肺循環能在較低壓力下維持同一流量，原因是肺血管阻力低。各器官大致並聯，器官小動脈阻力的變化能調整自身流量。若增加一條並聯支路，總阻力通常下降。把幾段血管接成串聯時，各段阻力相加，而且沿路會出現壓降。</p>\n<p>大動脈的彈性使射血時儲存部分能量，舒張時回彈，維持下游血流。小動脈是主要可調的阻力部位。微血管是主要交換部位，總橫截面積大，血液流速相對慢。靜脈的順應性高，能在壓力變化較小時儲存較多血液。讀 109-2 第 57 題時，要分清「血液容積最大」問靜脈，「總橫截面積最大」則通常問微血管床。</p>\n</section><section aria-labelledby=\"phys-cv-flow-2\"><h2 id=\"phys-cv-flow-2\" tabindex=\"-1\">壓差、流量與流速各有一條公式</h2><p><strong>Q＝ΔP/R</strong>。壓差是入口減出口。當單一器官的小動脈收縮，若灌流壓差不變，器官血流下降。以 Poiseuille 的理想層流管模型，<strong>R＝8ηL/(πr⁴)</strong>。半徑變成原本一半，阻力變 16 倍，固定壓差時流量降為 1/16。這個比例用於同一管段、其他條件固定的題目。整個循環可能同時調整壓力和其他阻力，因此不能直接把單一血管的比例套給整個器官。</p>\n<p>流速 <strong>v＝Q/A</strong>。若同一流量流經狹窄處，局部流速增加。若比較血管床，要以所有並聯血管的總截面積計算。紊流較容易出現在速度高、口徑較大或黏度較低的條件。用袖帶量血壓時，袖帶壓位於收縮壓和舒張壓間，血流在部分心動週期通過受壓動脈，可聽到 Korotkoff 聲。</p>\n</section><section aria-labelledby=\"phys-cv-flow-3\"><h2 id=\"phys-cv-flow-3\" tabindex=\"-1\">壓力、順應性與壁張力</h2><p>脈壓是 SBP−DBP。安靜且心率正常時，<strong>MAP ≈ DBP＋脈壓/3</strong>。112-1 第 59 題給 120/50 mmHg，脈壓 70 mmHg，MAP 約 73 mmHg。若心率很快，舒張占比改變，這個近似會變差。動脈順應性 <strong>C＝ΔV/ΔP</strong>，固定搏出量時，順應性下降常使脈壓加大。薄壁圓柱近似下，壁張力與跨壁壓乘半徑相關，壁應力還需考慮壁厚。要分清血壓與血管壁承受的力。</p>\n</section><section aria-labelledby=\"phys-cv-flow-4\"><h2 id=\"phys-cv-flow-4\" tabindex=\"-1\">遮答案回想</h2><details>\n<summary>\n血管半徑減半，固定壓差下流量怎麼變？\n</summary>\n<p>\n在其他條件固定的理想層流模型，阻力變 16 倍，流量為原來 1/16。\n</p>\n</details>\n</section>"
  },
  {
    "id": "electrical",
    "title": "心臟電生理、傳導與心電圖",
    "english": "Electrophysiology & ECG",
    "summary": "先分竇房結和心室，再把電事件放回心動週期。",
    "html": "<nav class=\"study-actions\" aria-label=\"段落目錄\"><button type=\"button\" data-phys-section=\"phys-cv-electrical-1\">兩種動作電位的上升相不同</button><button type=\"button\" data-phys-section=\"phys-cv-electrical-2\">房室結延遲與 Purkinje 快傳</button><button type=\"button\" data-phys-section=\"phys-cv-electrical-3\">用時間對照 ECG</button><button type=\"button\" data-phys-section=\"phys-cv-electrical-4\">遮答案回想</button></nav><section aria-labelledby=\"phys-cv-electrical-1\"><h2 id=\"phys-cv-electrical-1\" tabindex=\"-1\">兩種動作電位的上升相不同</h2><p>典型心室工作肌有穩定的第 4 期靜止電位，主要受 K⁺ 電導影響。第 0 期由快速 Na⁺ 內流主導。第 1 期早期短暫再極化與 Na⁺ 通道失活、短暫外向 K⁺ 電流有關。第 2 期平台期由 L 型 Ca²⁺ 內流與外向 K⁺ 電流形成。第 3 期 Ca²⁺ 電流減少、K⁺ 外流占優勢，膜電位回負。平台期延長不反應期，與收縮時間重疊，使心肌不易產生強直。</p>\n<p>竇房結沒有穩定靜止電位。第 4 期因 If、Ca²⁺ 內流和外向 K⁺ 電流變化逐漸去極化。到閾值後，第 0 期主要由 L 型 Ca²⁺ 內流造成。第 3 期由 K⁺ 外流再極化。110-2 第 56 題問第 4 期斜率的來源，114-1 第 59 題改問主升段，不能把 If 與 Ca²⁺ 主導的第 0 期互換。</p>\n<figure><a href=\"physiology-figures/brs-3-5.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"physiology-figures/brs-3-5.webp\" alt=\"竇房結動作電位\" style=\"max-width:100%;height:auto\" loading=\"lazy\"></a><figcaption>BRS Physiology 第 7 版圖 3.5，印刷頁 74。沿第 4 期斜率、第 0 期和第 3 期比較通道作用。</figcaption></figure>\n<p>交感 β1 提高 cAMP，可增加起搏電流和鈣電流，使第 4 期較快達閾。迷走 M2 降低 cAMP，並可增加 K⁺ 電導，使自發去極化變慢。115-2 第 57 題問副交感效應，先判第 4 期斜率降低，再推心率下降。</p>\n</section><section aria-labelledby=\"phys-cv-electrical-2\"><h2 id=\"phys-cv-electrical-2\" tabindex=\"-1\">房室結延遲與 Purkinje 快傳</h2><p>興奮由 SA node 經心房到 AV node，通過 His 束、束支與 Purkinje 系統進入心室。AV node 傳導慢，讓心房和心室收縮錯開。Purkinje 傳導快，協調心室興奮。題目問傳得最快和問哪裡先自發放電，是兩個不同問題。</p>\n</section><section aria-labelledby=\"phys-cv-electrical-3\"><h2 id=\"phys-cv-electrical-3\" tabindex=\"-1\">用時間對照 ECG</h2><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>波形或間期</th>\n<th>代表事件</th>\n<th>常見陷阱</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>P 波</td>\n<td>心房去極化</td>\n<td>心房收縮在電事件之後</td>\n</tr>\n<tr class=\"even\">\n<td>PR 間期</td>\n<td>心房去極化開始到心室去極化開始</td>\n<td>AV 傳導延遲是重要成分，第一度 AV block 典型 PR 延長</td>\n</tr>\n<tr class=\"odd\">\n<td>QRS</td>\n<td>心室去極化</td>\n<td>心房再極化多被遮蔽</td>\n</tr>\n<tr class=\"even\">\n<td>ST 段</td>\n<td>心室大部分心肌已去極化，與平台期相關</td>\n<td>心室仍可能正在射血</td>\n</tr>\n<tr class=\"odd\">\n<td>T 波</td>\n<td>心室再極化</td>\n<td>不可直接把 T 波開始當成舒張開始</td>\n</tr>\n<tr class=\"even\">\n<td>QT</td>\n<td>心室去極化到再極化結束</td>\n<td>隨心率改變，臨床常校正為 QTc</td>\n</tr>\n</tbody>\n</table>\n</section><section aria-labelledby=\"phys-cv-electrical-4\"><h2 id=\"phys-cv-electrical-4\" tabindex=\"-1\">遮答案回想</h2><details>\n<summary>\nSA node 第 0 期和心室第 0 期各靠哪個離子內流？\n</summary>\n<p>\nSA node 主要靠 L 型 Ca²⁺ 內流，典型心室工作肌靠快速 Na⁺ 內流。\n</p>\n</details>\n</section>"
  },
  {
    "id": "output",
    "title": "心肌收縮、搏出量與 Fick 原理",
    "english": "Contractility & cardiac output",
    "summary": "區分每搏射多少、每分鐘射多少，以及收縮力如何改變。",
    "html": "<nav class=\"study-actions\" aria-label=\"段落目錄\"><button type=\"button\" data-phys-section=\"phys-cv-output-1\">從心肌鈣訊號推到收縮力</button><button type=\"button\" data-phys-section=\"phys-cv-output-2\">EDV、ESV、SV、EF、CO</button><button type=\"button\" data-phys-section=\"phys-cv-output-3\">Fick 用氧守恆反推心輸出量</button><button type=\"button\" data-phys-section=\"phys-cv-output-4\">遮答案回想</button></nav><section aria-labelledby=\"phys-cv-output-1\"><h2 id=\"phys-cv-output-1\" tabindex=\"-1\">從心肌鈣訊號推到收縮力</h2><p>心室肌去極化開啟 L 型 Ca²⁺ 通道，外鈣內流觸發 RyR2 放出肌漿網 Ca²⁺，使 Ca²⁺ 結合 TnC。舒張時 SERCA 回收 Ca²⁺，NCX 等協助將 Ca²⁺ 排出。β1 刺激可增加 Ca²⁺ 供應，也可加快回收，因此可同時增加收縮力及促進放鬆。若鈉鉀幫浦受到抑制，胞內 Na⁺ 增加，NCX 正向排鈣驅動下降，可使收縮所用 Ca²⁺ 增加。要分清 SR 回收與跨質膜排出。</p>\n</section><section aria-labelledby=\"phys-cv-output-2\"><h2 id=\"phys-cv-output-2\" tabindex=\"-1\">EDV、ESV、SV、EF、CO</h2><p><strong>SV＝EDV−ESV，EF＝SV/EDV，CO＝HR×SV。</strong> EDV 120 mL、ESV 50 mL、HR 72/min 時，SV 70 mL，EF 約 58%，CO 約 5.04 L/min。EF 是比例，CO 是每分鐘絕對流量。若 EDV 與 SV 都降低，EF 可以維持，因此題幹只給 EF 時，不能直接判 CO 一定正常。</p>\n<p>在固定心肌收縮力的條件下，前負荷增加可使肌纖維初始長度增加，通常使 SV 增加，稱 Frank–Starling 機制。這相當於沿同一條曲線移動。收縮力增加時，在相同前負荷下可射出較多，曲線上移。112-1 第 61 題給血液量增加，首先推回流、EDV 與 SV，不必假設交感增加。</p>\n<figure><a href=\"physiology-figures/brs-3-8.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"physiology-figures/brs-3-8.webp\" alt=\"Frank–Starling 曲線\" style=\"max-width:100%;height:auto\" loading=\"lazy\"></a><figcaption>BRS Physiology 第 7 版圖 3.8，印刷頁 79。沿同一條曲線移動代表前負荷改變。曲線上移或下移反映收縮力改變。</figcaption></figure>\n</section><section aria-labelledby=\"phys-cv-output-3\"><h2 id=\"phys-cv-output-3\" tabindex=\"-1\">Fick 用氧守恆反推心輸出量</h2><p>全身每分鐘消耗的氧量等於每公升血通過體循環時交出的氧量乘以每分鐘血流。<strong>CO＝V̇O₂/(CaO₂−CvO₂)</strong>。111-2 第 60 題的耗氧為 600 mL/min，動脈氧含量 200 mL/L，混合靜脈血 140 mL/L。CO＝600/60＝10 L/min。肺動脈取到的是混合靜脈血，血管叫動脈不代表其氧含量較高。若含量單位是 mL/dL，算出的流量先是 dL/min，再換成 L/min。</p>\n</section><section aria-labelledby=\"phys-cv-output-4\"><h2 id=\"phys-cv-output-4\" tabindex=\"-1\">遮答案回想</h2><details>\n<summary>\nEDV 不變時 ESV 下降，SV 與 EF 怎麼變？\n</summary>\n<p>\nSV 上升，EF 也上升。若同時知道後負荷不變，這與收縮力增加相符。\n</p>\n</details>\n</section>"
  },
  {
    "id": "loops",
    "title": "壓力–容積環與靜脈回流曲線",
    "english": "PV loops & venous return",
    "summary": "把一搏的壓力與容積，接到整體循環的穩態交點。",
    "html": "<nav class=\"study-actions\" aria-label=\"段落目錄\"><button type=\"button\" data-phys-section=\"phys-cv-loops-1\">先沿環走四邊</button><button type=\"button\" data-phys-section=\"phys-cv-loops-2\">一次只改一個條件</button><button type=\"button\" data-phys-section=\"phys-cv-loops-3\">靜脈回流與心輸出量為什麼相等</button><button type=\"button\" data-phys-section=\"phys-cv-loops-4\">遮答案回想</button></nav><section aria-labelledby=\"phys-cv-loops-1\"><h2 id=\"phys-cv-loops-1\" tabindex=\"-1\">先沿環走四邊</h2><p>從左下方 ESV 開始，二尖瓣打開，沿下緣向右充盈至 EDV。二尖瓣關閉後，兩瓣關閉，等容收縮沿右邊垂直上升。左室壓超過主動脈壓後主動脈瓣開，射血使容積向左減少。主動脈瓣關後，兩瓣關閉，等容舒張沿左邊垂直下降。左室壓低於左房壓，二尖瓣再開。<strong>環寬是 SV，面積是每搏外功的近似。</strong> 兩條垂直邊只改變壓力。</p>\n<figure><a href=\"physiology-figures/brs-3-9.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"physiology-figures/brs-3-9.webp\" alt=\"左心室壓力–容積環\" style=\"max-width:100%;height:auto\" loading=\"lazy\"></a><figcaption>BRS Physiology 第 7 版圖 3.9，印刷頁 80。先定位 EDV、ESV 和四個瓣膜事件，再讀環寬與面積。</figcaption></figure>\n</section><section aria-labelledby=\"phys-cv-loops-2\"><h2 id=\"phys-cv-loops-2\" tabindex=\"-1\">一次只改一個條件</h2><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>改變</th>\n<th>第一個直接變項</th>\n<th>典型單獨改變下的環</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>前負荷增加</td>\n<td>EDV 增加</td>\n<td>右界右移，SV 增加</td>\n</tr>\n<tr class=\"even\">\n<td>後負荷增加</td>\n<td>必須達更高射血壓</td>\n<td>環變高且較窄，ESV 上升，SV 下降</td>\n</tr>\n<tr class=\"odd\">\n<td>收縮力增加</td>\n<td>相同容積可達較高收縮壓</td>\n<td>收縮末期壓力–容積關係變陡，ESV 下降，SV 增加</td>\n</tr>\n<tr class=\"even\">\n<td>舒張順應性降低</td>\n<td>同容積下舒張壓較高</td>\n<td>舒張壓–容積曲線向上移，固定充盈壓時 EDV 可下降</td>\n</tr>\n</tbody>\n</table>\n<p>這是各變項單獨改變的比較。若題目問數搏後的穩態，回流和反射可能再改變 EDV、心率或血管張力。先標清急性第一搏還是重新平衡。</p>\n</section><section aria-labelledby=\"phys-cv-loops-3\"><h2 id=\"phys-cv-loops-3\" tabindex=\"-1\">靜脈回流與心輸出量為什麼相等</h2><p>可用 <strong>VR＝(Pms−RAP)/RVR</strong> 概括。Pms 是平均全身充盈壓，RAP 是右房壓，RVR 是回流阻力。其餘固定時，RAP 上升會使推動回流的壓差變小。血液量增加或靜脈收縮可提高 Pms，使回流曲線偏右。收縮力增加則使心功能曲線向上移。兩曲線交點決定穩態的 CO、VR 與 RAP。單純增加幫浦功能通常可使 CO 增加且 RAP 降低，題庫若有複數採計，需分開看題目是否同時改變了血管條件。</p>\n</section><section aria-labelledby=\"phys-cv-loops-4\"><h2 id=\"phys-cv-loops-4\" tabindex=\"-1\">遮答案回想</h2><details>\n<summary>\n只突然增加後負荷，第一搏 ESV 和 SV 怎麼變？\n</summary>\n<p>\n通常 ESV 上升、SV 下降。左心室須先建立更高壓力才能射血。\n</p>\n</details>\n</section>"
  },
  {
    "id": "cycle",
    "title": "心動週期、瓣膜與心音",
    "english": "Cardiac cycle & heart sounds",
    "summary": "用壓力交叉推瓣膜，再把心音、波形和容積疊在一起。",
    "html": "<nav class=\"study-actions\" aria-label=\"段落目錄\"><button type=\"button\" data-phys-section=\"phys-cv-cycle-1\">Wiggers 圖先畫壓力，再看流量</button><button type=\"button\" data-phys-section=\"phys-cv-cycle-2\">用瓣膜事件做歷屆題</button><button type=\"button\" data-phys-section=\"phys-cv-cycle-3\">遮答案回想</button></nav><section aria-labelledby=\"phys-cv-cycle-1\"><h2 id=\"phys-cv-cycle-1\" tabindex=\"-1\">Wiggers 圖先畫壓力，再看流量</h2><p>舒張末期，二尖瓣開，心房收縮補充心室充盈。QRS 後心室開始收縮。左室壓超過左房壓時二尖瓣關閉，與三尖瓣關閉形成 S1。此時左室壓仍小於主動脈壓，兩瓣閉合，故等容收縮。當左室壓超過主動脈壓，主動脈瓣才打開，血液射出，左室容積下降。射血末期可見 T 波。當主動脈壓再超過左室壓，主動脈瓣關閉，形成 S2 的 A2 成分與主動脈壓的切跡。</p>\n<figure><a href=\"physiology-figures/brs-3-15.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"physiology-figures/brs-3-15.webp\" alt=\"心動週期 Wiggers 圖\" style=\"max-width:100%;height:auto\" loading=\"lazy\"></a><figcaption>BRS Physiology 第 7 版圖 3.15，印刷頁 87。沿同一條垂直線比對壓力、瓣膜事件、心室容積、心音與 ECG。</figcaption></figure>\n<p>S2 後左室等容舒張，直到左室壓低於左房壓，二尖瓣打開並開始快速充盈。S3 若出現，多與早期快速充盈相關。S4 若出現，通常是心房收縮將血送入較不順應心室時的晚期舒張音，需要心房有效收縮。正常吸氣可增加右心回流、延後 P2，使 S2 生理性分裂較寬。看見「主動脈和肺動脈瓣關閉時差」，應先找 S2。</p>\n</section><section aria-labelledby=\"phys-cv-cycle-2\"><h2 id=\"phys-cv-cycle-2\" tabindex=\"-1\">用瓣膜事件做歷屆題</h2><p>111-1 第 60 題問等容收縮壓力順序。二尖瓣已閉，LV&gt;LA。主動脈瓣尚未開，Ao&gt;LV，因此 Ao&gt;LV&gt;LA。113-1 第 58 題問 S1 到 S2 發生什麼，先標出這段包括等容收縮和射血，容積在射血段快速下降。115-1 第 58 題問舒張期，早期充盈可有 S3，晚期可有心房收縮，T 波開始通常仍在射血後段。用電事件標時點，再回到機械事件。</p>\n</section><section aria-labelledby=\"phys-cv-cycle-3\"><h2 id=\"phys-cv-cycle-3\" tabindex=\"-1\">遮答案回想</h2><details>\n<summary>\nS2 剛發生後，左心室容積會立刻增加嗎？\n</summary>\n<p>\n不會。先等容舒張，兩瓣仍關閉。左室壓低於左房壓，二尖瓣打開才開始增加。\n</p>\n</details>\n</section>"
  },
  {
    "id": "regulation",
    "title": "動脈壓的快速與長期調控",
    "english": "Arterial pressure regulation",
    "summary": "先判感壓受器的輸入，再判交感、迷走與腎臟的輸出。",
    "html": "<nav class=\"study-actions\" aria-label=\"段落目錄\"><button type=\"button\" data-phys-section=\"phys-cv-regulation-1\">秒級的感壓反射</button><button type=\"button\" data-phys-section=\"phys-cv-regulation-2\">容量的較長期調節</button><button type=\"button\" data-phys-section=\"phys-cv-regulation-3\">遮答案回想</button></nav><section aria-labelledby=\"phys-cv-regulation-1\"><h2 id=\"phys-cv-regulation-1\" tabindex=\"-1\">秒級的感壓反射</h2><p><strong>MAP−RAP＝CO×TPR</strong>。RAP 通常相對小，常近似 MAP≈CO×TPR。血壓下降使頸動脈竇與主動脈弓伸展減少，傳入放電降低。頸動脈竇走 IX，主動脈弓走 X，兩者到延腦孤束核。短期反射通常提高交感並降低迷走，使心率、收縮力、靜脈張力和小動脈阻力上升。血壓升高則反向。不要把頸動脈竇的壓力感受和頸動脈體的化學感受混在一起。</p>\n<p>壓力受器主要緩衝快速波動。若長期血壓改變，壓力受器可重新設定，腎臟的體液平衡更重要。頸動脈竇按摩增加機械伸展，可模擬血壓較高的傳入訊號。用這條鏈也可理解 112-1 第 58 題，感壓放電增加時較可能心率下降。</p>\n</section><section aria-labelledby=\"phys-cv-regulation-2\"><h2 id=\"phys-cv-regulation-2\" tabindex=\"-1\">容量的較長期調節</h2><p>腎灌流下降、遠端 NaCl 訊號下降或腎交感 β1 增強，可促 renin 釋放。Angiotensin II 可收縮血管，也促 aldosterone 與其他保液反應。Aldosterone 增加遠端腎元鈉回收；ADH 可提高集合管水通透性。心房牽張則可促 ANP 釋放，傾向排鈉。短期血壓能回升不代表血容量已回補。若題目問「失血最初數秒」，先選神經反射。問較久的維持，再加入腎臟及荷爾蒙。</p>\n</section><section aria-labelledby=\"phys-cv-regulation-3\"><h2 id=\"phys-cv-regulation-3\" tabindex=\"-1\">遮答案回想</h2><details>\n<summary>\n大失血後感壓受器放電和交感活性各往哪個方向？\n</summary>\n<p>\n受器放電下降，交感活性上升。心臟副交感通常下降。\n</p>\n</details>\n</section>"
  },
  {
    "id": "micro",
    "title": "微循環、Starling 力與淋巴",
    "english": "Microcirculation & lymph",
    "summary": "逐項判液體往外或往內，再看淋巴是否能帶走。",
    "html": "<nav class=\"study-actions\" aria-label=\"段落目錄\"><button type=\"button\" data-phys-section=\"phys-cv-micro-1\">傳統 Starling 算法</button><button type=\"button\" data-phys-section=\"phys-cv-micro-2\">由哪個參數變化推水腫</button><button type=\"button\" data-phys-section=\"phys-cv-micro-3\">淋巴往心臟的單向推進</button><button type=\"button\" data-phys-section=\"phys-cv-micro-4\">遮答案回想</button></nav><section aria-labelledby=\"phys-cv-micro-1\"><h2 id=\"phys-cv-micro-1\" tabindex=\"-1\">傳統 Starling 算法</h2><p>題庫常用 <strong>Jv＝Kf[(Pc−Pi)−σ(πc−πi)]</strong>。Pc 和 Pi 是血管內外的靜水壓，πc 和 πi 是內外膠體滲透壓。以向外為正，Pc 推向組織，Pi 抵銷外濾，血漿蛋白 πc 保留血管內的水，間質蛋白 πi 增加外濾傾向。115-1 第 59 題給 Pc 36、Pi 0、πc 26、πi 3 mmHg，按原題的傳統近似且 σ＝1，得 <strong>(36−0)−(26−3)＝13 mmHg，向外</strong>。若結果為負，按題目模型表示淨向內。</p>\n<figure><a href=\"physiology-figures/brs-3-18.webp\" target=\"_blank\" rel=\"noopener\"><img src=\"physiology-figures/brs-3-18.webp\" alt=\"微血管的 Starling 力\" style=\"max-width:100%;height:auto\" loading=\"lazy\"></a><figcaption>BRS Physiology 第 7 版圖 3.18，印刷頁 93。箭頭表示各壓力所造成的水移動傾向。作題時固定向外為正。</figcaption></figure>\n</section><section aria-labelledby=\"phys-cv-micro-2\"><h2 id=\"phys-cv-micro-2\" tabindex=\"-1\">由哪個參數變化推水腫</h2><p>靜脈壓上升可推高 Pc。低白蛋白使 πc 下降。發炎可改變通透性，使 Kf 增加或反射係數下降。淋巴阻塞則降低間質液與蛋白清除。小動脈收縮通常減少上游壓力傳至微血管，可降低 Pc。實際穩態液體交換還受內皮糖萼與糖萼下方的蛋白濃度影響。許多組織的穩態外濾主要由淋巴回收。做歷屆定量題時使用題目指定的傳統模型，解釋體液分布時保留這個生理區別。</p>\n</section><section aria-labelledby=\"phys-cv-micro-3\"><h2 id=\"phys-cv-micro-3\" tabindex=\"-1\">淋巴往心臟的單向推進</h2><p>淋巴管瓣膜、管壁平滑肌收縮、鄰近骨骼肌泵與呼吸壓變化可協助回流。水腫不只看濾出量，也要看淋巴是否能提高清除。115-2 第 58 題給骨骼肌、呼吸泵、淋巴管自身平滑肌和靜脈管壁，應先分哪一個直接屬淋巴推進機轉。</p>\n</section><section aria-labelledby=\"phys-cv-micro-4\"><h2 id=\"phys-cv-micro-4\" tabindex=\"-1\">遮答案回想</h2><details>\n<summary>\n若只降低血漿白蛋白，Starling 方程哪一項先改變？\n</summary>\n<p>\nπc 下降，保留水在血管內的力量減弱，淨外濾傾向增加。\n</p>\n</details>\n</section>"
  },
  {
    "id": "regional",
    "title": "局部血流與特殊器官循環",
    "english": "Regional circulation",
    "summary": "辨認灌流壓、代謝訊號與組織壓迫的作用。",
    "html": "<nav class=\"study-actions\" aria-label=\"段落目錄\"><button type=\"button\" data-phys-section=\"phys-cv-regional-1\">自動調節、主動充血、反應性充血</button><button type=\"button\" data-phys-section=\"phys-cv-regional-2\">冠狀、腦與皮膚</button><button type=\"button\" data-phys-section=\"phys-cv-regional-3\">肺循環與體循環的低氧反應</button><button type=\"button\" data-phys-section=\"phys-cv-regional-4\">遮答案回想</button></nav><section aria-labelledby=\"phys-cv-regional-1\"><h2 id=\"phys-cv-regional-1\" tabindex=\"-1\">自動調節、主動充血、反應性充血</h2><p>灌流壓增加時，小動脈可經肌源性機轉收縮，讓流量在一定範圍內相對維持，這是自動調節。組織代謝增加時，局部舒血管訊號提高血流，稱主動充血。暫時阻斷灌流後，恢復時出現短暫超過基線的血流，稱反應性充血。110-2 第 57 題先綁手指再鬆開，題幹的時間順序就能辨認反應性充血。</p>\n</section><section aria-labelledby=\"phys-cv-regional-2\"><h2 id=\"phys-cv-regional-2\" tabindex=\"-1\">冠狀、腦與皮膚</h2><p>左心室收縮時，心肌內血管受到壓迫，左冠狀循環常以舒張期灌流為主。心率過快縮短舒張期，可影響供血。心肌平時氧萃取率已高，耗氧增加時常仰賴冠脈血流增加。腦血流受 PaCO₂ 與 pH 影響，PaCO₂ 上升通常促腦血管舒張。腦灌流壓可簡化為 MAP−ICP，前提是 ICP 為相關的下游壓力。皮膚血流則常隨散熱需求變化。比較器官時要問最重要的是代謝、壓力還是體溫訊號。</p>\n</section><section aria-labelledby=\"phys-cv-regional-3\"><h2 id=\"phys-cv-regional-3\" tabindex=\"-1\">肺循環與體循環的低氧反應</h2><p>肺泡局部低氧可使附近肺小動脈收縮，有助把血轉向較通氣區域。全肺低氧則可能提高肺血管阻力。多數體循環局部缺氧較常促進舒張，以增加氧供。題目若只寫「低氧」，先找是在肺泡還是周邊組織。</p>\n</section><section aria-labelledby=\"phys-cv-regional-4\"><h2 id=\"phys-cv-regional-4\" tabindex=\"-1\">遮答案回想</h2><details>\n<summary>\n短暫夾住血管再放開後，血流高於原來，屬於哪一種充血？\n</summary>\n<p>\n反應性充血。若是器官活動增加後血流提高，則是主動充血。\n</p>\n</details>\n</section>"
  },
  {
    "id": "integration",
    "title": "站立、運動與失血的整合",
    "english": "Exercise, posture & hemorrhage",
    "summary": "從第一個擾動往後推，區分原發變化和代償。",
    "html": "<nav class=\"study-actions\" aria-label=\"段落目錄\"><button type=\"button\" data-phys-section=\"phys-cv-integration-1\">站立與失血都讓回流下降，原因不同</button><button type=\"button\" data-phys-section=\"phys-cv-integration-2\">動態運動與等長用力</button><button type=\"button\" data-phys-section=\"phys-cv-integration-3\">把所有變項拉回同一條因果鏈</button><button type=\"button\" data-phys-section=\"phys-cv-integration-4\">遮答案回想</button></nav><section aria-labelledby=\"phys-cv-integration-1\"><h2 id=\"phys-cv-integration-1\" tabindex=\"-1\">站立與失血都讓回流下降，原因不同</h2><p>由臥到站時，下肢與腹部靜脈暫時蓄血，有效回到胸腔的血量下降。EDV、SV 與 CO 可先下降，再由感壓反射提高心率和血管張力。骨骼肌泵與呼吸泵也有助回流。失血則是真的血液量減少，除了類似的神經反射，低微血管壓可降低外濾並促短暫液體回補，腎臟與荷爾蒙也逐步保水保鈉。題目問「代償後何者較失血前增加」，通常考交感效應或血管阻力，而非原發下降的搏出量。</p>\n</section><section aria-labelledby=\"phys-cv-integration-2\"><h2 id=\"phys-cv-integration-2\" tabindex=\"-1\">動態運動與等長用力</h2><p>動態運動時 HR、SV 和 CO 多上升。活動骨骼肌局部舒張可使整體 TPR 下降，因此收縮壓常上升，舒張壓可變動較小。運動中肌肉泵有利回流，血流重新分布也要兼顧骨骼肌、冠狀循環和皮膚。等長用力或舉重時，肌肉持續收縮可壓迫血管，阻力和血壓反應可能與動態跑步不同。109-2 第 59 題指定舉重，應抓血管受壓的條件。</p>\n</section><section aria-labelledby=\"phys-cv-integration-3\"><h2 id=\"phys-cv-integration-3\" tabindex=\"-1\">把所有變項拉回同一條因果鏈</h2><p>先定位原發擾動在血容量、血管阻力、收縮力或心率，再推回流、EDV、SV、CO 和 MAP。最後再加入代償。以失血為例，原發鏈是血量下降 → 靜脈回流下降 → SV 下降。代償鏈是感壓放電下降 → 交感增加、迷走下降 → HR 與 TPR 傾向上升。即使最後量到 MAP 近似原值，也可能只是 CO 的下降被 TPR 的增加抵銷。</p>\n</section><section aria-labelledby=\"phys-cv-integration-4\"><h2 id=\"phys-cv-integration-4\" tabindex=\"-1\">遮答案回想</h2><details>\n<summary>\n失血後血壓近乎不變，能推論血量和 CO 都已回到原值嗎？\n</summary>\n<p>\n不能。阻力與心率調整可部分維持 MAP，血量與 SV 仍可能偏低。\n</p>\n</details>\n</section>"
  },
  {
    "id": "review",
    "title": "五題考古與重練",
    "english": "Past exam questions & review",
    "summary": "從既有題庫選五題，涵蓋電生理、循環定量、心動週期和失血代償。",
    "html": "<h2>五題歷屆原題與逐題解析</h2><p>先作答，再展開答案。遇到圖表、數值或符號錯序時，以原卷為準。</p><section><h3>114 年第 1 次醫學（一）第 59 題</h3><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">59.SA node 的動作電位的主升段(上升幅度最大的段落)主要是因下列何種離子的流動而產生? \n \nA.fast sodium channels open,使鈉離子流入細胞內 \nB.funny channels open,使鈉離子流入細胞內 \nC.funny channels open,使鉀離子流入細胞內 \nD.L-type calcium channels open,使鈣離子流入細胞內</p><p><a href=\"exams/114/1/medicine-1-Q.pdf#page=11\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>展開答案與判題</summary><p><strong>官方答案：D</strong></p><p>SA node 第 0 期主要由 L 型 Ca²⁺ 內流引起。If 在第 4 期有貢獻；快速 Na⁺ 上升相典型見於心室工作肌。</p><p><a href=\"exams/114/1/medicine-1-M.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></section><section><h3>111 年第 2 次醫學（一）第 60 題</h3><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">60.某受試者,其氧氣消耗量為每分鐘600毫升(mL/min),肺動脈血氧濃度為每公升140毫升,肱動脈(brachial\nartery)血氧濃度為每公升200毫升,則此受試者的心輸出量(cardiac output)為多少L/min?\n \nA.4.2\nB.10\nC.30\nD.34.2</p><p><a href=\"exams/111/2/medicine-1-Q.pdf#page=11\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>展開答案與判題</summary><p><strong>官方答案：B</strong></p><p>含量差為 200−140＝60 mL/L。600 mL/min 除以 60 mL/L＝10 L/min。</p><p><a href=\"exams/111/2/medicine-1-M.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></section><section><h3>111 年第 1 次醫學（一）第 60 題</h3><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">60.在正常心臟週期的等容收縮(isovolumic contraction)期中,下列各腔室的壓力排列順序何者正確?\n \nA.主動脈的壓力(aortic pressure)&gt;左心室的壓力(left ventricular pressure)&gt;左心房的壓力(left atrial\npressure)\nB.主動脈的壓力(aortic pressure)&gt;左心房的壓力(left atrial pressure)&gt;左心室的壓力(left ventricular\npressure)\nC.左心室的壓力(left ventricular pressure)&gt; 主動脈的壓力(aortic pressure)&gt; 左心房的壓力(left atrial\npressure)\nD.左心室的壓力(left ventricular pressure)&gt;左心房的壓力(left atrial pressure)&gt; 主動脈的壓力(aortic\npressure)</p><p><a href=\"exams/111/1/medicine-1-Q.pdf#page=9\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>展開答案與判題</summary><p><strong>官方答案：A</strong></p><p>二尖瓣已關，所以 LV>LA。主動脈瓣尚未開，所以 Ao>LV。合起來 Ao>LV>LA。</p><p><a href=\"exams/111/1/medicine-1-S.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></section><section><h3>115 年第 1 次醫學（一）第 59 題</h3><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">59.某段微血管內靠近動脈端之微血管流體\n管外組織間液流體靜壓為0 毫米汞柱,\n為何? \n \nA.7 毫米汞柱 \nB.13 毫米汞柱 \nC.59 毫米汞柱 \nD.65 毫米汞柱 \n體靜壓為36 毫米汞柱,血漿蛋白質造成之滲透壓\n組織間液蛋白質造成之滲透壓為3 毫米汞柱,該\n為26 毫米汞柱,微血\n該微血管之淨過濾壓值</p><p><a href=\"exams/115/1/medicine-1-Q.pdf#page=11\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>展開答案與判題</summary><p><strong>官方答案：B</strong></p><p>36−0−26＋3＝13 mmHg，向外。間質蛋白吸引水往組織，因此 πi 要加回。</p><p><a href=\"exams/115/1/medicine-1-M.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></section><section><h3>113 年第 1 次醫學（一）第 60 題</h3><p style=\"white-space:pre-wrap;overflow-wrap:anywhere\">60.在大失血造成動脈壓下降時,體內循環系統為維持恆定,會產生一連串接續反應將血壓朝向正常值回復,該\n過程中最不可能發生者為下列何項?\n \nA.分布到心臟的副交感神經活性增加,使心房竇房結心跳速率增快\nB.分布到心室心肌細胞的交感神經活性增加,增強心室收縮與心搏量\nC.分布到靜脈的交感神經活性增加,增加靜脈回流與心臟舒張末期容積\nD.分布到微動脈的交感神經活性增加,減少微動脈半徑,增加周邊總阻力</p><p><a href=\"exams/113/1/medicine-1-Q.pdf#page=11\" target=\"_blank\" rel=\"noopener\">原題 PDF</a></p><details><summary>展開答案與判題</summary><p><strong>官方答案：A</strong></p><p>血壓下降使感壓放電下降，交感增加而副交感通常下降。選項若說迷走增加，方向和代償不符。</p><p><a href=\"exams/113/1/medicine-1-M.pdf\" target=\"_blank\" rel=\"noopener\">官方答案 PDF</a></p></details></section><h2 id=\"重練順序\">重練順序</h2>\n<table>\n<thead>\n<tr class=\"header\">\n<th>時間</th>\n<th>重練</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>今天</td>\n<td>閉上講義，畫一圈 PV loop，標兩條等容邊與四個瓣膜事件</td>\n</tr>\n<tr class=\"even\">\n<td>明天</td>\n<td>把 SA node 與心室 AP 分開畫，各標上升相與第 4 期</td>\n</tr>\n<tr class=\"odd\">\n<td>第 3 天</td>\n<td>重算 Fick、MAP 和 Starling 力各一題，寫出單位與正負方向</td>\n</tr>\n<tr class=\"even\">\n<td>第 7 天</td>\n<td>做 20 題章末測驗，按錯題主題回讀，再換一輪題目</td>\n</tr>\n</tbody>\n</table>\n"
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

physiologyTextbooks['cardiovascular'] = [
  {
    "title": "循環的配置與血流動力學",
    "topic": "flow",
    "html": "<h3 id=\"兩個循環串聯各器官多為並聯\">兩個循環串聯，各器官多為並聯</h3>\n<p>體循環由左心室把血送到器官，再經體靜脈回右心。肺循環由右心室把血送到肺，再回左心。兩套循環串聯，穩態下右心和左心的平均心輸出量相同。肺循環能在較低壓力下維持同一流量，原因是肺血管阻力低。各器官大致並聯，器官小動脈阻力的變化能調整自身流量。若增加一條並聯支路，總阻力通常下降。把幾段血管接成串聯時，各段阻力相加，而且沿路會出現壓降。</p>\n<p>大動脈的彈性使射血時儲存部分能量，舒張時回彈，維持下游血流。小動脈是主要可調的阻力部位。微血管是主要交換部位，總橫截面積大，血液流速相對慢。靜脈的順應性高，能在壓力變化較小時儲存較多血液。讀 109-2 第 57 題時，要分清「血液容積最大」問靜脈，「總橫截面積最大」則通常問微血管床。 ### 壓差、流量與流速各有一條公式 <strong>Q＝ΔP/R</strong>。壓差是入口減出口。當單一器官的小動脈收縮，若灌流壓差不變，器官血流下降。以 Poiseuille 的理想層流管模型，<strong>R＝8ηL/(πr⁴)</strong>。半徑變成原本一半，阻力變 16 倍，固定壓差時流量降為 1/16。這個比例用於同一管段、其他條件固定的題目。整個循環可能同時調整壓力和其他阻力，因此不能直接把單一血管的比例套給整個器官。</p>\n<p>流速 <strong>v＝Q/A</strong>。若同一流量流經狹窄處，局部流速增加。若比較血管床，要以所有並聯血管的總截面積計算。紊流較容易出現在速度高、口徑較大或黏度較低的條件。用袖帶量血壓時，袖帶壓位於收縮壓和舒張壓間，血流在部分心動週期通過受壓動脈，可聽到 Korotkoff 聲。 ### 壓力、順應性與壁張力 脈壓是 SBP−DBP。安靜且心率正常時，<strong>MAP ≈ DBP＋脈壓/3</strong>。112-1 第 59 題給 120/50 mmHg，脈壓 70 mmHg，MAP 約 73 mmHg。若心率很快，舒張占比改變，這個近似會變差。動脈順應性 <strong>C＝ΔV/ΔP</strong>，固定搏出量時，順應性下降常使脈壓加大。薄壁圓柱近似下，壁張力與跨壁壓乘半徑相關，壁應力還需考慮壁厚。要分清血壓與血管壁承受的力。</p>\n"
  },
  {
    "title": "心臟電生理、傳導與心電圖",
    "topic": "electrical",
    "html": "<h3 id=\"兩種動作電位的上升相不同\">兩種動作電位的上升相不同</h3>\n<p>典型心室工作肌有穩定的第 4 期靜止電位，主要受 K⁺ 電導影響。第 0 期由快速 Na⁺ 內流主導。第 1 期早期短暫再極化與 Na⁺ 通道失活、短暫外向 K⁺ 電流有關。第 2 期平台期由 L 型 Ca²⁺ 內流與外向 K⁺ 電流形成。第 3 期 Ca²⁺ 電流減少、K⁺ 外流占優勢，膜電位回負。平台期延長不反應期，與收縮時間重疊，使心肌不易產生強直。</p>\n<p>竇房結沒有穩定靜止電位。第 4 期因 If、Ca²⁺ 內流和外向 K⁺ 電流變化逐漸去極化。到閾值後，第 0 期主要由 L 型 Ca²⁺ 內流造成。第 3 期由 K⁺ 外流再極化。110-2 第 56 題問第 4 期斜率的來源，114-1 第 59 題改問主升段，不能把 If 與 Ca²⁺ 主導的第 0 期互換。</p>\n<!--figure-->\n<p>交感 β1 提高 cAMP，可增加起搏電流和鈣電流，使第 4 期較快達閾。迷走 M2 降低 cAMP，並可增加 K⁺ 電導，使自發去極化變慢。115-2 第 57 題問副交感效應，先判第 4 期斜率降低，再推心率下降。 ### 房室結延遲與 Purkinje 快傳 興奮由 SA node 經心房到 AV node，通過 His 束、束支與 Purkinje 系統進入心室。AV node 傳導慢，讓心房和心室收縮錯開。Purkinje 傳導快，協調心室興奮。題目問傳得最快和問哪裡先自發放電，是兩個不同問題。 ### 用時間對照 ECG | 波形或間期 | 代表事件 | 常見陷阱 | |---|---|---| | P 波 | 心房去極化 | 心房收縮在電事件之後 | | PR 間期 | 心房去極化開始到心室去極化開始 | AV 傳導延遲是重要成分，第一度 AV block 典型 PR 延長 | | QRS | 心室去極化 | 心房再極化多被遮蔽 | | ST 段 | 心室大部分心肌已去極化，與平台期相關 | 心室仍可能正在射血 | | T 波 | 心室再極化 | 不可直接把 T 波開始當成舒張開始 | | QT | 心室去極化到再極化結束 | 隨心率改變，臨床常校正為 QTc |</p>\n"
  },
  {
    "title": "心肌收縮、搏出量與 Fick 原理",
    "topic": "output",
    "html": "<h3 id=\"從心肌鈣訊號推到收縮力\">從心肌鈣訊號推到收縮力</h3>\n<p>心室肌去極化開啟 L 型 Ca²⁺ 通道，外鈣內流觸發 RyR2 放出肌漿網 Ca²⁺，使 Ca²⁺ 結合 TnC。舒張時 SERCA 回收 Ca²⁺，NCX 等協助將 Ca²⁺ 排出。β1 刺激可增加 Ca²⁺ 供應，也可加快回收，因此可同時增加收縮力及促進放鬆。若鈉鉀幫浦受到抑制，胞內 Na⁺ 增加，NCX 正向排鈣驅動下降，可使收縮所用 Ca²⁺ 增加。要分清 SR 回收與跨質膜排出。</p>\n<h3 id=\"edvesvsvefco\">EDV、ESV、SV、EF、CO</h3>\n<p><strong>SV＝EDV−ESV，EF＝SV/EDV，CO＝HR×SV。</strong> EDV 120 mL、ESV 50 mL、HR 72/min 時，SV 70 mL，EF 約 58%，CO 約 5.04 L/min。EF 是比例，CO 是每分鐘絕對流量。若 EDV 與 SV 都降低，EF 可以維持，因此題幹只給 EF 時，不能直接判 CO 一定正常。</p>\n<p>在固定心肌收縮力的條件下，前負荷增加可使肌纖維初始長度增加，通常使 SV 增加，稱 Frank–Starling 機制。這相當於沿同一條曲線移動。收縮力增加時，在相同前負荷下可射出較多，曲線上移。112-1 第 61 題給血液量增加，首先推回流、EDV 與 SV，不必假設交感增加。</p>\n<!--figure-->\n<h3 id=\"fick-用氧守恆反推心輸出量\">Fick 用氧守恆反推心輸出量</h3>\n<p>全身每分鐘消耗的氧量等於每公升血通過體循環時交出的氧量乘以每分鐘血流。<strong>CO＝V̇O₂/(CaO₂−CvO₂)</strong>。111-2 第 60 題的耗氧為 600 mL/min，動脈氧含量 200 mL/L，混合靜脈血 140 mL/L。CO＝600/60＝10 L/min。肺動脈取到的是混合靜脈血，血管叫動脈不代表其氧含量較高。若含量單位是 mL/dL，算出的流量先是 dL/min，再換成 L/min。</p>\n"
  },
  {
    "title": "壓力–容積環與靜脈回流曲線",
    "topic": "loops",
    "html": "<h3 id=\"先沿環走四邊\">先沿環走四邊</h3>\n<p>從左下方 ESV 開始，二尖瓣打開，沿下緣向右充盈至 EDV。二尖瓣關閉後，兩瓣關閉，等容收縮沿右邊垂直上升。左室壓超過主動脈壓後主動脈瓣開，射血使容積向左減少。主動脈瓣關後，兩瓣關閉，等容舒張沿左邊垂直下降。左室壓低於左房壓，二尖瓣再開。<strong>環寬是 SV，面積是每搏外功的近似。</strong> 兩條垂直邊只改變壓力。</p>\n<!--figure-->\n<h3 id=\"一次只改一個條件\">一次只改一個條件</h3>\n<table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>改變</th>\n<th>第一個直接變項</th>\n<th>典型單獨改變下的環</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>前負荷增加</td>\n<td>EDV 增加</td>\n<td>右界右移，SV 增加</td>\n</tr>\n<tr class=\"even\">\n<td>後負荷增加</td>\n<td>必須達更高射血壓</td>\n<td>環變高且較窄，ESV 上升，SV 下降</td>\n</tr>\n<tr class=\"odd\">\n<td>收縮力增加</td>\n<td>相同容積可達較高收縮壓</td>\n<td>收縮末期壓力–容積關係變陡，ESV 下降，SV 增加</td>\n</tr>\n<tr class=\"even\">\n<td>舒張順應性降低</td>\n<td>同容積下舒張壓較高</td>\n<td>舒張壓–容積曲線向上移，固定充盈壓時 EDV 可下降</td>\n</tr>\n</tbody>\n</table>\n<p>這是各變項單獨改變的比較。若題目問數搏後的穩態，回流和反射可能再改變 EDV、心率或血管張力。先標清急性第一搏還是重新平衡。 ### 靜脈回流與心輸出量為什麼相等 可用 <strong>VR＝(Pms−RAP)/RVR</strong> 概括。Pms 是平均全身充盈壓，RAP 是右房壓，RVR 是回流阻力。其餘固定時，RAP 上升會使推動回流的壓差變小。血液量增加或靜脈收縮可提高 Pms，使回流曲線偏右。收縮力增加則使心功能曲線向上移。兩曲線交點決定穩態的 CO、VR 與 RAP。單純增加幫浦功能通常可使 CO 增加且 RAP 降低，題庫若有複數採計，需分開看題目是否同時改變了血管條件。</p>\n"
  },
  {
    "title": "心動週期、瓣膜與心音",
    "topic": "cycle",
    "html": "<h3 id=\"wiggers-圖先畫壓力再看流量\">Wiggers 圖先畫壓力，再看流量</h3>\n<p>舒張末期，二尖瓣開，心房收縮補充心室充盈。QRS 後心室開始收縮。左室壓超過左房壓時二尖瓣關閉，與三尖瓣關閉形成 S1。此時左室壓仍小於主動脈壓，兩瓣閉合，故等容收縮。當左室壓超過主動脈壓，主動脈瓣才打開，血液射出，左室容積下降。射血末期可見 T 波。當主動脈壓再超過左室壓，主動脈瓣關閉，形成 S2 的 A2 成分與主動脈壓的切跡。</p>\n<!--figure-->\n<p>S2 後左室等容舒張，直到左室壓低於左房壓，二尖瓣打開並開始快速充盈。S3 若出現，多與早期快速充盈相關。S4 若出現，通常是心房收縮將血送入較不順應心室時的晚期舒張音，需要心房有效收縮。正常吸氣可增加右心回流、延後 P2，使 S2 生理性分裂較寬。看見「主動脈和肺動脈瓣關閉時差」，應先找 S2。 ### 用瓣膜事件做歷屆題 111-1 第 60 題問等容收縮壓力順序。二尖瓣已閉，LV&gt;LA。主動脈瓣尚未開，Ao&gt;LV，因此 Ao&gt;LV&gt;LA。113-1 第 58 題問 S1 到 S2 發生什麼，先標出這段包括等容收縮和射血，容積在射血段快速下降。115-1 第 58 題問舒張期，早期充盈可有 S3，晚期可有心房收縮，T 波開始通常仍在射血後段。用電事件標時點，再回到機械事件。</p>\n"
  },
  {
    "title": "動脈壓的快速與長期調控",
    "topic": "regulation",
    "html": "<h3 id=\"秒級的感壓反射\">秒級的感壓反射</h3>\n<p><strong>MAP−RAP＝CO×TPR</strong>。RAP 通常相對小，常近似 MAP≈CO×TPR。血壓下降使頸動脈竇與主動脈弓伸展減少，傳入放電降低。頸動脈竇走 IX，主動脈弓走 X，兩者到延腦孤束核。短期反射通常提高交感並降低迷走，使心率、收縮力、靜脈張力和小動脈阻力上升。血壓升高則反向。不要把頸動脈竇的壓力感受和頸動脈體的化學感受混在一起。</p>\n<p>壓力受器主要緩衝快速波動。若長期血壓改變，壓力受器可重新設定，腎臟的體液平衡更重要。頸動脈竇按摩增加機械伸展，可模擬血壓較高的傳入訊號。用這條鏈也可理解 112-1 第 58 題，感壓放電增加時較可能心率下降。 ### 容量的較長期調節 腎灌流下降、遠端 NaCl 訊號下降或腎交感 β1 增強，可促 renin 釋放。Angiotensin II 可收縮血管，也促 aldosterone 與其他保液反應。Aldosterone 增加遠端腎元鈉回收；ADH 可提高集合管水通透性。心房牽張則可促 ANP 釋放，傾向排鈉。短期血壓能回升不代表血容量已回補。若題目問「失血最初數秒」，先選神經反射。問較久的維持，再加入腎臟及荷爾蒙。</p>\n"
  },
  {
    "title": "微循環、Starling 力與淋巴",
    "topic": "micro",
    "html": "<h3 id=\"傳統-starling-算法\">傳統 Starling 算法</h3>\n<p>題庫常用 <strong>Jv＝Kf[(Pc−Pi)−σ(πc−πi)]</strong>。Pc 和 Pi 是血管內外的靜水壓，πc 和 πi 是內外膠體滲透壓。以向外為正，Pc 推向組織，Pi 抵銷外濾，血漿蛋白 πc 保留血管內的水，間質蛋白 πi 增加外濾傾向。115-1 第 59 題給 Pc 36、Pi 0、πc 26、πi 3 mmHg，按原題的傳統近似且 σ＝1，得 <strong>(36−0)−(26−3)＝13 mmHg，向外</strong>。若結果為負，按題目模型表示淨向內。</p>\n<!--figure-->\n<h3 id=\"由哪個參數變化推水腫\">由哪個參數變化推水腫</h3>\n<p>靜脈壓上升可推高 Pc。低白蛋白使 πc 下降。發炎可改變通透性，使 Kf 增加或反射係數下降。淋巴阻塞則降低間質液與蛋白清除。小動脈收縮通常減少上游壓力傳至微血管，可降低 Pc。實際穩態液體交換還受內皮糖萼與糖萼下方的蛋白濃度影響。許多組織的穩態外濾主要由淋巴回收。做歷屆定量題時使用題目指定的傳統模型，解釋體液分布時保留這個生理區別。 ### 淋巴往心臟的單向推進 淋巴管瓣膜、管壁平滑肌收縮、鄰近骨骼肌泵與呼吸壓變化可協助回流。水腫不只看濾出量，也要看淋巴是否能提高清除。115-2 第 58 題給骨骼肌、呼吸泵、淋巴管自身平滑肌和靜脈管壁，應先分哪一個直接屬淋巴推進機轉。</p>\n"
  },
  {
    "title": "局部血流與特殊器官循環",
    "topic": "regional",
    "html": "<h3 id=\"自動調節主動充血反應性充血\">自動調節、主動充血、反應性充血</h3>\n<p>灌流壓增加時，小動脈可經肌源性機轉收縮，讓流量在一定範圍內相對維持，這是自動調節。組織代謝增加時，局部舒血管訊號提高血流，稱主動充血。暫時阻斷灌流後，恢復時出現短暫超過基線的血流，稱反應性充血。110-2 第 57 題先綁手指再鬆開，題幹的時間順序就能辨認反應性充血。 ### 冠狀、腦與皮膚 左心室收縮時，心肌內血管受到壓迫，左冠狀循環常以舒張期灌流為主。心率過快縮短舒張期，可影響供血。心肌平時氧萃取率已高，耗氧增加時常仰賴冠脈血流增加。腦血流受 PaCO₂ 與 pH 影響，PaCO₂ 上升通常促腦血管舒張。腦灌流壓可簡化為 MAP−ICP，前提是 ICP 為相關的下游壓力。皮膚血流則常隨散熱需求變化。比較器官時要問最重要的是代謝、壓力還是體溫訊號。 ### 肺循環與體循環的低氧反應 肺泡局部低氧可使附近肺小動脈收縮，有助把血轉向較通氣區域。全肺低氧則可能提高肺血管阻力。多數體循環局部缺氧較常促進舒張，以增加氧供。題目若只寫「低氧」，先找是在肺泡還是周邊組織。</p>\n"
  },
  {
    "title": "站立、運動與失血的整合",
    "topic": "integration",
    "html": "<h3 id=\"站立與失血都讓回流下降原因不同\">站立與失血都讓回流下降，原因不同</h3>\n<p>由臥到站時，下肢與腹部靜脈暫時蓄血，有效回到胸腔的血量下降。EDV、SV 與 CO 可先下降，再由感壓反射提高心率和血管張力。骨骼肌泵與呼吸泵也有助回流。失血則是真的血液量減少，除了類似的神經反射，低微血管壓可降低外濾並促短暫液體回補，腎臟與荷爾蒙也逐步保水保鈉。題目問「代償後何者較失血前增加」，通常考交感效應或血管阻力，而非原發下降的搏出量。 ### 動態運動與等長用力 動態運動時 HR、SV 和 CO 多上升。活動骨骼肌局部舒張可使整體 TPR 下降，因此收縮壓常上升，舒張壓可變動較小。運動中肌肉泵有利回流，血流重新分布也要兼顧骨骼肌、冠狀循環和皮膚。等長用力或舉重時，肌肉持續收縮可壓迫血管，阻力和血壓反應可能與動態跑步不同。109-2 第 59 題指定舉重，應抓血管受壓的條件。 ### 把所有變項拉回同一條因果鏈 先定位原發擾動在血容量、血管阻力、收縮力或心率，再推回流、EDV、SV、CO 和 MAP。最後再加入代償。以失血為例，原發鏈是血量下降 → 靜脈回流下降 → SV 下降。代償鏈是感壓放電下降 → 交感增加、迷走下降 → HR 與 TPR 傾向上升。即使最後量到 MAP 近似原值，也可能只是 CO 的下降被 TPR 的增加抵銷。</p>\n"
  }
];
