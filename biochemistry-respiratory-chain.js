biochemistryChapters.push({
  "id": "respiratory-chain",
  "number": "07",
  "title": "電子傳遞鏈與氧化磷酸化",
  "summary": "從機制與能量收支重新建立理解，配合算例、比較表與可追溯歷屆原題。",
  "sources": "Harper’s Illustrated Biochemistry, 31st ed., Ch. 13 The Respiratory Chain & Oxidative Phosphorylation（印刷頁117–128）；Ch. 12氧化還原及抗氧化背景。",
  "references": "<p>Harper’s Illustrated Biochemistry, 31st ed., Ch. 13 The Respiratory Chain & Oxidative Phosphorylation（印刷頁117–128）；Ch. 12氧化還原及抗氧化背景。</p><p>正文與教學圖為概念重組與原創說明，非逐段譯文。算例為明示條件的教學模型；歷屆原題、官方採計答案與更正版本沿用題庫，解析另行撰寫。精選題數不是完整出題頻率。</p>",
  "sections": [
    {
      "id": "topic-1",
      "title": "空間地圖：先認膜的兩側",
      "html": "<p>電子傳遞鏈與ATP\nsynthase位於粒線體內膜。內膜將基質與膜間腔隔開，是維持質子電化學梯度的重要屏障；外膜較易讓小分子通過，不能代替內膜的角色。ATP\nsynthase的F₁催化頭朝基質，ATP生成位置與質子回流方向因此可一起記。</p>\n<p>電子傳遞釋出的能量把H⁺由基質移向膜間腔；H⁺再沿電化學勢回到基質時可驅動ATP合成。前一個是建立梯度，後一個是使用梯度，國考最常把兩個方向混在一起。</p>\n<p>膜間腔相對較正、較酸，基質相對較負、較鹼。質子動力同時包含膜電位與濃度差，不是只有pH差。若內膜變得對H⁺容易漏，電子仍可能傳遞，但能量就難以保存為ATP。</p>\n<h3 id=\"把粒線體分成三個功能區\">把粒線體分成三個功能區</h3>\n<p>基質有PDH與大部分TCA酵素，產生NADH；內膜負責電子傳遞、質子屏障與ATP合成；膜間腔接受被移出的H⁺，cytochrome\nc位於內膜外側。Complex II同時是TCA的succinate\ndehydrogenase且嵌於內膜，是「大部分TCA酵素在基質」的重要例外。</p>\n<p>外膜可讓許多小分子經porin通過，因此膜間腔與細胞質對部分小分子的環境較接近；內膜則需要選擇性運輸蛋白。這使「胞質有NADH」與「基質有NADH」不是同一件事，也說明為什麼ADP、Pi、ATP的進出要另有運輸系統。</p>\n<h3 id=\"正負與酸鹼要一起推\">正負與酸鹼要一起推</h3>\n<p>H⁺帶正電且增加酸性。由基質泵出後，基質相對負且鹼，膜間腔相對正且酸，兩種力量都傾向讓H⁺回基質。呼吸鏈逆著這個趨勢泵出，ATP\nsynthase順著趨勢利用能量。不要只背「向外」：內外在不同圖的畫法會變，明確寫基質與膜間腔才不會錯。</p>\n<p>內膜若完整但ATP\nsynthase停止，梯度可以一度升高；內膜若對H⁺大量滲漏，梯度則難維持。因此「ATP都下降」不代表兩種狀況的膜電位也相同。</p>\n"
    },
    {
      "id": "topic-2",
      "title": "路徑總覽：I與II不是串聯",
      "html": "<figure><div class=\"table-scroll\" tabindex=\"0\"><img src=\"assets/biochemistry/energy-electron-proton.svg\" alt=\"兩種電子入口平行匯入CoQ，質子梯度耦合ATP合成\" style=\"width:100%;min-width:520px;max-width:720px;height:auto\"></div><figcaption>兩種電子入口平行匯入CoQ，質子梯度耦合ATP合成。手機可橫向捲動閱讀；詳細條件與收支見本節。</figcaption></figure><p>NADH把電子送入complex I，succinate氧化則經complex\nII；兩者都可把電子送向CoQ，再到III、cytochrome\nc、IV，最後還原O₂成水。Complex\nII不是由I接收電子後再送III的下一站，這是最重要的拓樸辨認。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>元件</th>\n<th>電子來源與去向</th>\n<th>泵出H⁺？</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>I</td>\n<td>NADH→CoQ</td>\n<td>是</td>\n</tr>\n<tr class=\"even\">\n<td>II</td>\n<td>Succinate經結合的FAD/Fe-S→CoQ</td>\n<td>否</td>\n</tr>\n<tr class=\"odd\">\n<td>CoQ</td>\n<td>內膜中的可移動電子載體→III</td>\n<td>本身不是獨立蛋白幫浦</td>\n</tr>\n<tr class=\"even\">\n<td>III</td>\n<td>QH₂→cytochrome c</td>\n<td>是，透過Q循環的整體效果</td>\n</tr>\n<tr class=\"odd\">\n<td>Cytochrome c</td>\n<td>III→IV，單電子傳遞</td>\n<td>否</td>\n</tr>\n<tr class=\"even\">\n<td>IV</td>\n<td>Cytochrome c→O₂</td>\n<td>是，並消耗基質質子生成水</td>\n</tr>\n</tbody>\n</table></div>\n<p>CoQ為脂溶性，可在膜中移動並處理兩電子與質子；cytochrome\nc位於內膜外側、以heme進行單電子傳遞。不能因兩者都是移動載體就當作相同性質。</p>\n<h3\nid=\"用不同入口測試你是否真的懂路徑\">用不同入口測試你是否真的懂路徑</h3>\n<p>若只有NADH相關受質，I的完整性很重要；改供succinate，電子可由II進入而繞過I。但兩條入口最後共用Q、III、cytochrome\nc與IV，所以共同下游受阻時都無法通過。這就是補受質實驗的核心，並不是把受質換成「更多能量」就能解決一切。</p>\n<p>請分別畫NADH與succinate的路徑，圈出兩條共同經過的節點。再問：若刪掉I，哪條仍通？若刪掉III，哪條仍通？最後才把H⁺泵的位置標在I、III、IV旁，便能同時推導入口不同為何ATP產率不同。</p>\n<p>CoQ與cytochrome c是移動載體，I至IV則是複合體；ATP\nsynthase不在這條電子傳遞順序中。題目若寫「CoQ把I的電子交給II」，錯在拓樸，不是只錯了一個編號。</p>\n"
    },
    {
      "id": "topic-3",
      "title": "各複合體的重點與計量",
      "html": "<p>Complex I含FMN及Fe-S等傳遞中心；II就是succinate\ndehydrogenase，同時參與TCA與電子傳遞，含結合型FAD但不泵質子。III將Q系統與單電子cytochrome\nc連接。IV的金屬中心完成氧還原，避免把氧只停留在高度反應性的部分還原狀態。</p>\n<p>常用每一對電子的教學計量為I泵4、III整體轉移4、IV泵2個H⁺，NADH合計10；由II進入而繞過I時約6。必須標示「每兩電子」：若按一個O₂接受四電子計算，IV的泵質子數便加倍。不能把不同基準的數字放在同一欄比較。</p>\n<p>IV除了泵出去的H⁺，還使用基質的化學質子形成水；兩者不能混算成全部跨膜泵出。O₂最終成H₂O，並非直接成CO₂；CO₂主要來自PDH、TCA等脫羧反應。</p>\n<h3 id=\"每個複合體內部在做什麼\">每個複合體內部在做什麼？</h3>\n<p>I先以FMN接受NADH的電子，再經Fe-S中心交給CoQ，同時驅動質子轉運。II把succinate氧化為fumarate，酵素結合的FAD接電子後經Fe-S送入CoQ；這個入口沒有I那段質子轉運，II本身也不泵H⁺。FAD參與並不自動代表電子必須進II：glycerol-3-phosphate\ndehydrogenase與脂肪酸氧化的ETF路徑也可在CoQ層級匯入。</p>\n<p>CoQ具有脂溶性尾部，在膜內移動；Q可接受兩電子與兩質子成QH₂，也可經半醌中間態。Cytochrome\nc是可移動的小蛋白，其heme鐵在Fe³⁺/Fe²⁺間轉換，一次攜帶一電子。二者都叫載體，但所在位置與每次可處理電子數不相同。</p>\n<p>III利用Q cycle銜接QH₂的兩電子與cytochrome\nc的一電子傳遞。一次QH₂氧化時，兩電子分走不同支路；經兩次週期與Q的回收，淨結果是每交出一對電子到兩個cytochrome\nc，在膜間腔側釋出4 H⁺，並從基質側攝取2\nH⁺參與QH₂再生。考試首先掌握淨跨膜效果與兩種載體的電子數，不必把支路誤背成I與II串聯。</p>\n<p>IV包含heme與銅中心，從cytochrome\nc接受電子，最後完成O₂還原。完整一個O₂需4電子與4個基質化學質子形成2H₂O；以每2電子計則為½O₂→1H₂O。把氧轉水的化學質子與跨膜泵出的質子分開計，才不會讓4、2、10這些數字互相打架。</p>\n<h3 id=\"質子帳的分母必須寫清楚\">質子帳的分母必須寫清楚</h3>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>電子路徑</th>\n<th style=\"text-align: right;\">I</th>\n<th style=\"text-align: right;\">III</th>\n<th style=\"text-align: right;\">IV</th>\n<th style=\"text-align: right;\">淨泵出總量（每2電子）</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>NADH經I進入</td>\n<td style=\"text-align: right;\">4</td>\n<td style=\"text-align: right;\">4</td>\n<td style=\"text-align: right;\">2</td>\n<td style=\"text-align: right;\">10 H⁺</td>\n</tr>\n<tr class=\"even\">\n<td>Succinate經II進入</td>\n<td style=\"text-align: right;\">0</td>\n<td style=\"text-align: right;\">4</td>\n<td style=\"text-align: right;\">2</td>\n<td style=\"text-align: right;\">6 H⁺</td>\n</tr>\n</tbody>\n</table></div>\n<p>若問每個O₂完整還原，則對應4電子，表中數字須乘二。若問IV生成水消耗的基質H⁺，則是另一筆化學反應帳，不能直接加到泵出數字而仍稱「泵出」。</p>\n"
    },
    {
      "id": "topic-4",
      "title": "ATP synthase與呼吸控制",
      "html": "<p>ATP\nsynthase的F₀部分提供質子通路並耦合旋轉，F₁利用構形改變完成ADP、Pi結合與ATP生成／釋放。它不是把電子直接交給ADP，也不是簡單H⁺與Pi的同向運輸器。若能量條件反轉，酵素可具有ATP水解驅動質子轉運的能力，細胞有調節機制避免不必要耗損。</p>\n<p>當ADP不足，ATP合成變慢、梯度較高，電子傳遞面對較大的回壓，耗氧下降；加入ADP可促進ATP合成，H⁺回流增加，電子傳遞與耗氧加速。這是耦合粒線體常見的acceptor\ncontrol。</p>\n<p>因此耗氧量不是單純由氧濃度決定；還受受質、ADP、Pi、內膜完整性及呼吸鏈功能影響。實驗題應先確認是否供應了足夠受質與氧，避免把任何條件下的解偶聯都說成耗氧無限增加。</p>\n<h3 id=\"atp-synthase不是電子鏈的下一個電子接受者\">ATP\nsynthase不是電子鏈的下一個電子接受者</h3>\n<p>Complex\nV的工作是使用質子動力，不直接把電子傳給下一站。F₀部分含膜內質子通道與轉子；F₁的β催化亞基透過旋轉引發構形改變，依序結合ADP/Pi、形成緊密結合ATP、釋出ATP。可用loose、tight、open三種狀態理解binding-change機制，而不是想成質子直接黏在ADP上變ATP。</p>\n<p>ATP合成後，要把基質ATP送到細胞質。Adenine nucleotide\ntranslocase交換ATP⁴⁻向外與ADP³⁻向內，利用膜電位；Pi的輸入也與質子動力相關。因此估算「細胞可用ATP」時，不能只算轉子需要幾個H⁺而完全忽略運輸成本。</p>\n<h3\nid=\"呼吸控制實驗逐段讀氧濃度曲線\">呼吸控制實驗：逐段讀氧濃度曲線</h3>\n<p>假設分離粒線體完整，有足量氧與可氧化受質，ADP有限。加入ADP後進入較快的磷酸化呼吸狀態，氧濃度下降較快；ADP轉成ATP後，耗氧又降到較低基礎值。不是氧突然變得不好用，而是ATP合成需求下降，使梯度回壓升高。</p>\n<p>圖若畫的是「氧濃度對時間」，線越陡往下代表耗氧越快；若畫的是「耗氧速率」，則曲線越高代表越快。先看縱軸，能避免知道機制卻把圖選反。加入ADP後若仍無法增加呼吸，要考慮受質、電子鏈、轉運或磷酸化系統，不能只憑一個結果指定唯一缺陷。</p>\n"
    },
    {
      "id": "topic-5",
      "title": "P/O比與胞質NADH穿梭",
      "html": "<p>常用近似每個基質NADH約2.5 ATP、由FAD相關途徑在CoQ層級進入約1.5\nATP。差別主要是是否經過complex\nI的質子泵，不是FADH₂只帶一個電子。實際產率受質子漏、轉運與酵素計量影響，題目給定比值時依題目計算。</p>\n<p>胞質NADH不直接自由穿過內膜。Malate–aspartate\nshuttle把還原當量轉成基質NADH；glycerol-3-phosphate\nshuttle經內膜黃素酵素將電子交給CoQ，繞過I。前者常以2.5、後者1.5\nATP估算每個胞質NADH的能量回收。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>穿梭</th>\n<th>最後進入層級</th>\n<th>每胞質NADH的教學估算</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Malate–aspartate</td>\n<td>基質NADH→I</td>\n<td>約2.5 ATP</td>\n</tr>\n<tr class=\"even\">\n<td>Glycerol-3-phosphate</td>\n<td>CoQ</td>\n<td>約1.5 ATP</td>\n</tr>\n</tbody>\n</table></div>\n<p>穿梭傳的是還原當量，不是原封不動把同一顆NADH搬進去。完整葡萄糖氧化常見30或32\nATP的差別之一即出在這裡；不是糖解本身突然直接多產兩個ATP。</p>\n<h3\nid=\"為什麼常用2.5與1.5而不是整數\">為什麼常用2.5與1.5，而不是整數？</h3>\n<p>一個NADH經I、III、IV可驅動約10 H⁺的淨轉移；CoQ層級進入則約6\nH⁺。以包含ATP合成與相關運輸的約4\nH⁺當量/ATP作教學估算，10/4≈2.5、6/4≈1.5。這是能量會計的近似，不能反推「所有物種F₀每合成一ATP固定轉4個質子」；轉子亞基計量、漏流與實際條件會影響效率。</p>\n<p>P/O的O傳統上以一個氧原子、也就是½O₂接受一對電子計。若題幹明確問每莫耳O₂，對應兩對電子，不能還直接套2.5。讀老題若指定NADH=3、FADH₂=2，依該題給定規則算，並區別現代常用近似。</p>\n<h3 id=\"malateaspartate-shuttle逐步理解\">Malate–aspartate\nshuttle逐步理解</h3>\n<p>胞質OAA先接受NADH的電子成malate，同時再生胞質NAD⁺；malate進基質後被氧化回OAA，產生基質NADH。OAA本身不能直接自由跨內膜，因此經轉胺成aspartate及相關交換把碳骨架與胺基循環補回。最後主要淨效果是把胞質還原當量變成基質NADH，不是把NADH整顆搬過去，也不是把每一次中間物變化都算成額外ATP。</p>\n<h3 id=\"glycerol-3-phosphate-shuttle逐步理解\">Glycerol-3-phosphate\nshuttle逐步理解</h3>\n<p>胞質NADH將DHAP還原成glycerol-3-phosphate，先再生NAD⁺；內膜相關的FAD酵素再將它氧化回DHAP，電子送CoQ。因繞過I，只保留III與IV的質子轉運收益。不同組織兩種穿梭的相對使用不同，常見器官分工是便於記憶的主趨勢，不宜寫成一個器官絕對只能用一種。</p>\n<p>算例：2個胞質NADH若全走malate–aspartate，約回收5\nATP當量；若全走glycerol-3-phosphate，約3。兩種情況糖解直接生成的淨ATP仍相同，差的2\nATP來自還原當量後續回收。</p>\n"
    },
    {
      "id": "topic-6",
      "title": "抑制劑：阻塞點前後的氧化還原狀態",
      "html": "<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>作用位置</th>\n<th>代表</th>\n<th>初步預測</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>I</td>\n<td>Rotenone</td>\n<td>NADH途徑受阻；II來源仍可能繞入</td>\n</tr>\n<tr class=\"even\">\n<td>III</td>\n<td>Antimycin A</td>\n<td>CoQ上游較還原，下游較氧化</td>\n</tr>\n<tr class=\"odd\">\n<td>IV</td>\n<td>Cyanide、CO等</td>\n<td>氧還原受阻，整體電子流下降</td>\n</tr>\n<tr class=\"even\">\n<td>ATP synthase</td>\n<td>Oligomycin</td>\n<td>質子回流受阻，梯度回壓使耗氧下降</td>\n</tr>\n</tbody>\n</table></div>\n<p>分析某點完全阻塞，先畫電子方向：阻塞前容易累積還原態，後面若仍能把電子交給氧則較氧化。例如III被阻斷，NADH與CoQ池較還原，而cytochrome\nc較氧化。這是有氧、有受質、其他功能尚存的簡化穩態預測，不能忽略實驗條件。</p>\n<p>若I被抑制，succinate可經II供電子；若III或IV被完全抑制，增加succinate不能繞過下游瓶頸。問「補何受質可恢復耗氧」時，要辨認它進入的位置，而不是只看是否有更多能量來源。</p>\n<h3\nid=\"用上游堆電子下游缺電子解題\">用「上游堆電子、下游缺電子」解題</h3>\n<p>在有氧且受質供應足夠、指定位置完全阻塞的模型，阻塞前電子難以交出去而較還原；阻塞後若還能往氧傳遞，就較氧化。例如III受阻時CoQ池較偏QH₂，cytochrome\nc則較氧化。若IV受阻，cytochrome\nc也成為上游，便較還原。不要把某一載體固定背成「中毒時一定氧化」。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>實驗處理</th>\n<th>後續加入succinate</th>\n<th>為什麼</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Rotenone阻I</td>\n<td>可能恢復部分耗氧</td>\n<td>II→Q→III→IV仍可通；ATP產率依II入口估算</td>\n</tr>\n<tr class=\"even\">\n<td>Antimycin A阻III</td>\n<td>不能繞過</td>\n<td>II也必須經III</td>\n</tr>\n<tr class=\"odd\">\n<td>Cyanide阻IV</td>\n<td>不能繞過</td>\n<td>末端接受氧的步驟仍堵住</td>\n</tr>\n<tr class=\"even\">\n<td>Oligomycin阻ATP synthase</td>\n<td>不能靠更多受質解除耦合回壓</td>\n<td>主要障礙不是缺電子供體</td>\n</tr>\n</tbody>\n</table></div>\n<h3 id=\"同樣atp不足原因可以不同\">同樣ATP不足，原因可以不同</h3>\n<p>Cyanide使氧的利用受阻；CO除了可作用於呼吸鏈，也與hemoglobin結合而影響氧輸送。器官缺血則可能同時缺氧與缺受質。這些情境不能只用「血中有沒有氧」一項判定粒線體是否能供能。本章只以機轉理解，不把單一實驗模型當作臨床診斷或處置。</p>\n<p>寡黴素雖不直接堵I至IV的電子傳遞位置，仍會在完整耦合粒線體降低耗氧。因此「耗氧下降」不足以證明抑制劑直接作用在電子鏈；必須加上解偶聯等實驗來區分。</p>\n"
    },
    {
      "id": "topic-7",
      "title": "解偶聯：電子還在跑，ATP卻收不到",
      "html": "<p>解偶聯使質子梯度不經正常ATP合成途徑而耗散。DNP為經典化學例子，UCP1為棕色脂肪生理性產熱相關蛋白。H⁺回到基質，梯度降低，呼吸鏈在有受質與氧時可加速耗氧，但氧化磷酸化ATP產率下降，更多能量以熱散失。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>狀態</th>\n<th>梯度</th>\n<th>耗氧的典型趨勢</th>\n<th>氧化磷酸化ATP</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>呼吸鏈完全受阻</td>\n<td>逐漸無法維持</td>\n<td>下降</td>\n<td>下降</td>\n</tr>\n<tr class=\"even\">\n<td>ATP synthase受阻</td>\n<td>初期升高、回壓增加</td>\n<td>下降</td>\n<td>下降</td>\n</tr>\n<tr class=\"odd\">\n<td>解偶聯</td>\n<td>下降</td>\n<td>常增加</td>\n<td>下降</td>\n</tr>\n</tbody>\n</table></div>\n<p>先加oligomycin再加解偶聯劑，可能恢復電子傳遞與耗氧，卻不會恢復被阻斷ATP\nsynthase的ATP生成。若IV已完全堵住，解偶聯也不能幫電子跨越阻塞點。原題有時寫「抑制呼吸鏈」泛指干擾供能，解析應分清真正抑制電子流與破壞耦合。</p>\n<h3\nid=\"串連加藥實驗每一步都要重新預測\">串連加藥實驗：每一步都要重新預測</h3>\n<p>從正常、有受質與氧的耦合粒線體開始：先加ADP，ATP合成與耗氧都增加；再加oligomycin，F₀質子通路受阻，ATP合成下降，梯度升高而電子流減慢；最後加適量DNP，質子可經別條路回流，梯度下降，耗氧恢復或增加，但ATP\nsynthase仍被阻斷，氧化磷酸化ATP不恢復。</p>\n<p>如果改成先加cyanide堵IV，再加DNP，無論梯度多低，電子都不能經IV交給氧，因此不能恢復這條鏈的耗氧。解偶聯劑只解除梯度的回壓，不能修復被堵住的電子出口。</p>\n<h3 id=\"ucp1為何能產熱\">UCP1為何能產熱？</h3>\n<p>棕色脂肪含豐富粒線體，UCP1讓燃料氧化所建立的質子動力較多以非ATP合成方式耗散，能量釋成熱。這不表示生物體總能量增加，也不表示細胞所有ATP來源都瞬間歸零；題目問的是氧化磷酸化效率下降。化學解偶聯過強時仍可能因受質耗竭、膜損傷等讓呼吸受限，因此「任何劑量、任何時間都增加耗氧」太絕對。</p>\n<p>記憶可用三個故障點：電子路斷、ATP出口堵、質子屏障漏。分別追問電子能否走、H⁺能否回來、回來時是否經ATP\nsynthase，比背一長排上升下降更穩。</p>\n"
    },
    {
      "id": "topic-8",
      "title": "ROS、抗氧化與細胞脈絡",
      "html": "<p>電子若不完全還原氧，可形成superoxide等ROS。SOD把superoxide轉為H₂O₂等產物，catalase或glutathione\nperoxidase再處理H₂O₂。SOD不是直接把所有氧化物都變成水；glutathione\nreductase則用NADPH再生GSH，不是直接清除superoxide的主要酵素。</p>\n<p>成熟紅血球沒有粒線體，因此沒有自身氧化磷酸化，ATP主要靠糖解；但仍有抗氧化需求，與磷酸戊糖途徑供應NADPH相連。神經與肌肉能量需求高，因此粒線體功能障礙常有相關表現，但呼吸鏈蛋白並非全部由粒線體基因編碼，核基因也有重要貢獻。</p>\n<p>複習時依序說出：電子入口→移動載體→氧的終點；H⁺泵出→梯度保存→H⁺回流；阻塞點→上下游還原狀態→耗氧與ATP。這三條因果鏈比單背I到V的名字更能解題。</p>\n<h3 id=\"抗氧化接力要認得每一棒\">抗氧化接力要認得每一棒</h3>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>酵素</th>\n<th>主要反應意義</th>\n<th>常見混淆</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>SOD</td>\n<td>2 O₂•⁻+2 H⁺→H₂O₂+O₂</td>\n<td>產物仍有H₂O₂，需要後續處理</td>\n</tr>\n<tr class=\"even\">\n<td>Catalase</td>\n<td>2 H₂O₂→2 H₂O+O₂</td>\n<td>不是把NADPH直接轉成ATP</td>\n</tr>\n<tr class=\"odd\">\n<td>Glutathione peroxidase</td>\n<td>H₂O₂+2 GSH→2 H₂O+GSSG</td>\n<td>消耗還原型glutathione</td>\n</tr>\n<tr class=\"even\">\n<td>Glutathione reductase</td>\n<td>GSSG藉NADPH還原回2 GSH</td>\n<td>再生抗氧化系統，不是SOD同一步</td>\n</tr>\n</tbody>\n</table></div>\n<p>ROS不是所有氧氣的同義字，也不是所有氧化反應都必然有害；正常細胞有訊號功能與清除系統。當生成超過清除能力，蛋白、脂質與核酸才更容易受到氧化損害。紅血球雖無粒線體，hemoglobin相關氧化壓力仍存在，因此PPP生成NADPH依然重要。</p>\n<h3 id=\"從氧化磷酸化連到下一章\">從氧化磷酸化連到下一章</h3>\n<p>當呼吸鏈不能有效把NADH再氧化，基質NADH/NAD⁺升高，多種氧化代謝受限；胞質則可透過LDH再生NAD⁺以維持糖解。這使「有氧供應但利用受阻」也可能伴隨乳酸增加。另一方面，成熟紅血球正常就必須持續用這套胞質策略，不能把紅血球產乳酸都當成病理缺氧。</p>\n<p>章末閉卷檢查：畫出兩個電子入口、一個Q匯流點、III與IV之間的cytochrome\nc，再畫與電子箭頭分開的H⁺出入箭頭。若只能背出I、II、III、IV、V串成一條線，表示還需要回到空間地圖。</p>\n"
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
      "基質與膜間腔哪邊較負、較鹼？",
      "泵出H⁺後基質相對較負、較鹼；H⁺沿電化學勢回基質可驅動ATP合成。"
    ],
    [
      "刪掉I和刪掉III，各剩哪些電子入口能供氧還原？",
      "刪I時II入口仍可通；刪III時I與II都不能經共同下游到IV。"
    ],
    [
      "10與6個H⁺是以什麼為計算單位？",
      "每一對電子；NADH經I為4+4+2=10，CoQ入口為4+2=6。每O₂則需乘二。"
    ],
    [
      "ADP加入完整耦合粒線體時，耗氧為何加快？",
      "ATP合成使用梯度，降低電子傳遞回壓；需要足量受質、氧與完整系統。"
    ],
    [
      "兩種穿梭為何相差約2 ATP/葡萄糖？",
      "兩個胞質NADH分別以2.5或1.5回收；差別在I或CoQ入口，不是糖解直接ATP改變。"
    ],
    [
      "III受阻時CoQ與cytochrome c為何不同？",
      "上游CoQ較還原；下游cytochrome c仍可把電子交給IV與氧而較氧化。"
    ],
    [
      "Oligomycin後加DNP，能救回什麼？",
      "足量受質與氧下可恢復耗氧；不能恢復已被阻的ATP synthase供能。"
    ],
    [
      "SOD產物為什麼還需要下一個酵素？",
      "它產生H₂O₂；catalase或glutathione peroxidase需繼續處理，後者依靠GSH系統。"
    ]
  ],
  "readingIntro": "先定位粒線體兩側與平行電子入口，再算質子與ATP，最後逐步分析加ADP、抑制劑與解偶聯劑的實驗。",
  "figure": "<p>閱讀順序：先理解名詞與方向，再逐步推導算例，最後用歷屆不同問法檢查；每節末有對應的閉卷回想。</p>",
  "exams": {
    "bankCount": 1022,
    "yearMin": 96,
    "yearMax": 115,
    "note": "人工精選並按解題機制分組，非完整頻率統計；各題保留原卷與答案連結。選項措辭有條件限制或歧義時，解析另列，不自行改寫官方採計答案。",
    "groups": [
      {
        "id": "group-1",
        "title": "電子入口與載體順序",
        "topic": "topic-2",
        "summary": "先畫I/II匯入Q，避免把兩入口畫成串聯。",
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
            "point": "電子入口與載體順序",
            "analysis": "氧是最終電子接受者，被還原為水；CO₂主要來自脫羧，不是氧在complex IV的產物。 A磷酸不是O₂在IV被還原的終點；B CO₂主要與碳骨架脫羧相關；C CO亦非此末端產物。每個O₂接受4電子及4化學質子形成2H₂O，不能把呼吸排CO₂直接等同氧被變成CO₂。",
            "trap": "回到本組對應小節，先重建因果，再判斷題目問正確或錯誤；本題的各選項差異見上方逐項解析。"
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
            "point": "電子入口與載體順序",
            "analysis": "Complex II就是succinate dehydrogenase，連接TCA與呼吸鏈，不泵H⁺。 A NADH dehydrogenase對應I；B cytochrome c oxidase對應IV；D ubiquinol-cytochrome c oxidoreductase對應III。II同時催化succinate→fumarate，這個TCA連結比背編號更好記。",
            "trap": "回到本組對應小節，先重建因果，再判斷題目問正確或錯誤；本題的各選項差異見上方逐項解析。"
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
            "point": "電子入口與載體順序",
            "analysis": "I與II都向CoQ供電子，不是CoQ將I電子傳給II；CoQ再把電子交向III。 本題選錯誤。A氧為末端接受者、B NADH由I進入、D cytochrome c連接III與IV都符合路徑；C將平行入口誤寫成I到II串聯。畫兩個入口匯到Q即可辨認。",
            "trap": "回到本組對應小節，先重建因果，再判斷題目問正確或錯誤；本題的各選項差異見上方逐項解析。"
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
            "point": "電子入口與載體順序",
            "analysis": "Cytochrome c將電子交給IV，IV再還原O₂；不能省略IV說cytochrome c直接還原氧。 A succinate先經II；C CoQ將電子交III；D NADH先經I。題目問IV的直接供應者，須選在III與IV之間的一電子載體cytochrome c。",
            "trap": "回到本組對應小節，先重建因果，再判斷題目問正確或錯誤；本題的各選項差異見上方逐項解析。"
          }
        ]
      },
      {
        "id": "group-2",
        "title": "質子計量與產率差異",
        "topic": "topic-3",
        "summary": "區分泵出質子、生成水的化學質子與電子對數。",
        "questions": [
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
            "point": "質子計量與產率差異",
            "analysis": "常見H⁺泵為I、III、IV；II不泵，這也是不同入口ATP產率不同的原因。 A、B、D都包含不泵質子的II；正確組合是I、III、IV。III以Q cycle產生淨質子轉移效果，不能因機制不同就把它排除。",
            "trap": "回到本組對應小節，先重建因果，再判斷題目問正確或錯誤；本題的各選項差異見上方逐項解析。"
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
            "point": "質子計量與產率差異",
            "analysis": "II入口繞過I的泵質子步驟，回收的質子動力較少，不是FADH₂只帶一電子。 A錯在FADH₂也攜帶2電子；B複合體數量與D載體濃度都不能解釋每對電子的固有耦合產率差異。C抓到II不泵H⁺，因此少了I那一段收益。",
            "trap": "回到本組對應小節，先重建因果，再判斷題目問正確或錯誤；本題的各選項差異見上方逐項解析。"
          }
        ]
      },
      {
        "id": "group-3",
        "title": "化學滲透與耦合",
        "topic": "topic-4",
        "summary": "位置、屏障、梯度與ATP synthase缺一不可。",
        "questions": [
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
            "point": "化學滲透與耦合",
            "analysis": "化學滲透理論將電子傳遞與ATP合成透過質子動力連結；內膜及梯度是必要條件。 A應為內膜而非外膜；B忽略跨膜電化學梯度；C忽略將梯度轉成ATP的酵素。D把電子傳遞與ATP生成用proton-motive force連起來。",
            "trap": "回到本組對應小節，先重建因果，再判斷題目問正確或錯誤；本題的各選項差異見上方逐項解析。"
          }
        ]
      },
      {
        "id": "group-4",
        "title": "胞質還原當量穿梭",
        "topic": "topic-5",
        "summary": "比較進入層級，不把穿梭當作ATP輸出。",
        "questions": [
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
            "point": "胞質還原當量穿梭",
            "analysis": "Glycerol-3-phosphate shuttle將胞質還原當量交到CoQ層級，不是把同一顆NADH直接搬入。 A以器官偏好描述較接近malate–aspartate的常見教學分工，且不要把穿梭當成整顆NADH搬運。C產率順序顛倒；D的ATP輸出是核苷酸轉運蛋白的工作。B抓到CoQ入口才是穩定辨認點。",
            "trap": "回到本組對應小節，先重建因果，再判斷題目問正確或錯誤；本題的各選項差異見上方逐項解析。"
          }
        ]
      },
      {
        "id": "group-5",
        "title": "抑制位置與氧化還原狀態",
        "topic": "topic-6",
        "summary": "找到堵塞點後，再判斷上游與下游。",
        "questions": [
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
            "point": "抑制位置與氧化還原狀態",
            "analysis": "Rotenone阻斷complex I向CoQ的電子流；由II進入的電子可繞過I，但仍需下游完整。 A是I的NADH到CoQ電子轉移。B位於III相關電子傳遞範圍，C是III到可移動cytochrome c的交接，D涉及cytochrome c向IV傳遞，均不是rotenone的主要阻斷點。",
            "trap": "回到本組對應小節，先重建因果，再判斷題目問正確或錯誤；本題的各選項差異見上方逐項解析。"
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
            "point": "抑制位置與氧化還原狀態",
            "analysis": "III完全受阻後，上游NADH與CoQ池較還原；下游cytochrome c可把電子交向氧而較氧化。 A的兩者都在阻塞上游而偏還原。B、C各含下游cytochrome c；D含更下游IV的cytochrome a，因此不能當作兩者皆上游堆電子。題設完全阻III並持續一段時間，仍需假定下游可接觸氧。",
            "trap": "回到本組對應小節，先重建因果，再判斷題目問正確或錯誤；本題的各選項差異見上方逐項解析。"
          }
        ]
      },
      {
        "id": "group-6",
        "title": "解偶聯與產熱",
        "topic": "topic-7",
        "summary": "分別預測梯度、耗氧與ATP，不能只背『抑制』。",
        "questions": [
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
            "point": "解偶聯與產熱",
            "analysis": "DNP耗散梯度，足夠受質與氧下解除回壓而使耗氧增加，但氧化磷酸化ATP生成下降。 題設succinate經II供電子，DNP降低梯度並解除回壓，典型模型耗氧增加。A方向相反；D梯度不會被正常維持；C不是耦合ATP合成仍正常。需假設足量氧、受質與合適劑量，不把耗氧增加解釋為效率提高。",
            "trap": "回到本組對應小節，先重建因果，再判斷題目問正確或錯誤；本題的各選項差異見上方逐項解析。"
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
            "point": "解偶聯與產熱",
            "analysis": "UCP1促進H⁺回到基質而耗散梯度，支持產熱，不是直接堵住ATP synthase。 A讓H⁺回基質而耗散動力，符合解偶聯。B阻止建立梯度與A增加漏流是不同機制；C是直接抑制I的描述；D則混淆成ATP synthase抑制劑。不能只看『ATP下降』判斷。",
            "trap": "回到本組對應小節，先重建因果，再判斷題目問正確或錯誤；本題的各選項差異見上方逐項解析。"
          }
        ]
      }
    ]
  }
});
