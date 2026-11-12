biochemistryChapters.push({
  "id": "gluconeogenesis",
  "number": "10",
  "title": "糖質新生與血糖維持",
  "summary": "從四個繞道酵素、跨膜還原力與六個高能磷酸鍵，理解空腹供糖及器官分工。",
  "sources": "Harper’s Illustrated Biochemistry, 31st ed., Ch. 19 Gluconeogenesis & the Control of Blood Glucose（印刷頁172–181）；糖解與肝醣連結參Ch. 17、18。",
  "references": "<p>Harper’s Illustrated Biochemistry, 31st ed., Ch. 19 Gluconeogenesis &amp; the Control of Blood Glucose（印刷頁172–181）；糖解與肝醣連結參Ch. 17、18。</p><p>正文與圖為原創教學重組，非逐段翻譯。題目取自現有歷屆題庫，官方採計答案與更正版本原樣保留；機轉解析另行撰寫。精選題數不等同完整考頻統計。</p>",
  "sections": [
    {
      "id": "topic-1",
      "title": "空腹時為何還需要製造葡萄糖？",
      "html": "<p>Gluconeogenesis是以非醣類前驅物重新合成葡萄糖，主要在肝臟與腎皮質進行。肝醣分解是把既有儲備拆出來；糖質新生則把lactate、glycerol與生糖胺基酸等碳源重新組合。兩者可同時存在，不是肝醣「完全歸零」後才突然啟動糖質新生。</p>\n<p>成熟紅血球無粒線體，持續依靠葡萄糖經糖解供ATP；腦在一般狀態大量使用葡萄糖，較長時間飢餓後雖增加酮體使用，仍有葡萄糖需求。部分組織的代謝限制，使全身即使有大量脂肪儲存，也不能完全停止血糖供應。</p>\n<h3\nid=\"哪些器官能把製成的糖送進血液\">哪些器官能把製成的糖送進血液？</h3>\n<p>肝臟具有糖質新生及glucose-6-phosphatase系統，可輸出游離葡萄糖；腎皮質也有重要能力，長時間空腹與酸鹼情境可增加其相對貢獻。腎髓質偏向使用葡萄糖，不能把整顆腎當成單一同質代謝區。骨骼肌缺乏有效的G6Pase供糖出口，不能像肝臟直接用自己的G6P大量維持血糖。</p>\n<p>血糖的來源比例隨飲食、空腹時間、激素與個體狀態連續改變。短暫餐間空腹常強調肝醣；空腹延長時糖質新生漸重要。避免把「一夜空腹」背成某個放諸所有人的固定百分比，也不要把考題的短期與長期飢餓混在一起。</p>\n"
    },
    {
      "id": "topic-2",
      "title": "不是糖解倒轉：三個障礙、四個繞道酵素",
      "html": "<figure><div class=\"table-scroll\" tabindex=\"0\"><img src=\"assets/biochemistry/carbohydrate-gng.svg\" alt=\"糖新生三個繞道：PC與PEPCK、FBPase-1、G6Pase；標示區室及耗能\" style=\"width:100%;min-width:540px;max-width:780px;height:auto\"></div><figcaption>糖新生三個繞道：PC與PEPCK、FBPase-1、G6Pase；標示區室及耗能。圖中為教學模型；手機可橫向捲動，條件與例外見正文。</figcaption></figure><p>糖解多數接近平衡的步驟可逆向使用，但hexokinase／GK、PFK-1、pyruvate\nkinase在一般生理糖解條件下高度偏向前進。若全部原路倒轉，熱力學代價太高，因此糖質新生另設繞道，並投入能量讓整個合成方向有利。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>糖解關卡</th>\n<th>糖質新生繞道</th>\n<th>主要區室</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Pyruvate kinase：PEP→pyruvate</td>\n<td>PC：pyruvate→OAA；PEPCK：OAA→PEP</td>\n<td>PC在粒線體；PEPCK有胞質與粒線體isoform</td>\n</tr>\n<tr class=\"even\">\n<td>PFK-1：F6P→F1,6BP</td>\n<td>FBPase-1：F1,6BP→F6P</td>\n<td>胞質</td>\n</tr>\n<tr class=\"odd\">\n<td>Hexokinase／GK：glucose→G6P</td>\n<td>G6Pase：G6P→glucose</td>\n<td>內質網系統</td>\n</tr>\n</tbody>\n</table></div>\n<p>因此常說「三個不可逆關卡、四個繞道酵素」；兩種數字不矛盾。PEPCK是carboxykinase，不是糖解最後一步的pyruvate\nkinase；名字都含kinase卻處理不同受質與方向。</p>\n<h3 id=\"哪些反應可以共用\">哪些反應可以共用？</h3>\n<p>PEP到F1,6BP之間可逆向使用enolase、phosphoglycerate\nmutase、PGK、GAPDH、triose phosphate\nisomerase與aldolase等；G6P與F6P之間可用phosphoglucose\nisomerase。方向改變後，原先產ATP的PGK步驟改成耗ATP，原先產NADH的GAPDH步驟改成耗NADH。不能只背「共用酵素」，卻把能量方向仍抄成糖解。</p>\n"
    },
    {
      "id": "topic-3",
      "title": "第一個繞道：先羧化pyruvate",
      "html": "<p>Pyruvate\ncarboxylase（PC）在粒線體基質，使用ATP、HCO₃⁻與biotin，把三碳pyruvate變四碳OAA。ATP先支援碳酸氫根活化，biotin攜帶活化羧基，再交給pyruvate。Biotin是暫時攜帶CO₂的輔因子，不是最後被消耗到葡萄糖裡的受質。</p>\n<p>每個pyruvate消耗1 ATP；由兩個pyruvate合成一個glucose，因此PC這步要花2\nATP。若題幹改由glycerol進入，則不必每個碳都經過PC，不能無條件套同一筆成本。</p>\n<h3 id=\"為何acetyl-coa活化pc\">為何acetyl-CoA活化PC？</h3>\n<p>Acetyl-CoA多，代表需要足量OAA與它縮合，或脂肪氧化正提供糖質新生所需能量。活化PC可把pyruvate導向OAA，兼具補充TCA與支援糖質新生的功能；同時高acetyl-CoA與NADH也傾向降低PDH繼續氧化pyruvate的需求。</p>\n<p>這不等於acetyl-CoA的兩個碳直接變成葡萄糖。調節者、能量提供者、碳前驅物是三個角色：偶數鏈脂肪酸氧化通常能供前兩者，卻不能一般性地提供淨糖新生碳。這是國考最常把因果混在一起的地方。</p>\n<h3 id=\"為什麼加一個碳下一步又拿掉\">為什麼加一個碳，下一步又拿掉？</h3>\n<p>PC先加入羧基，把pyruvate轉成OAA；PEPCK再利用脫羧與GTP支持形成高轉移勢PEP。暫時加碳是反應設計的一部分，不代表最後glucose多出額外兩個碳。從兩個三碳pyruvate到一個六碳glucose，加入又移除的兩份CO₂在淨碳帳相消。</p>\n"
    },
    {
      "id": "topic-4",
      "title": "PEPCK、跨膜運輸與胞質NADH",
      "html": "<p>PEPCK催化OAA+GTP→PEP+GDP+CO₂。從四碳回到三碳，同時形成磷酸烯醇結構；每glucose需兩次，花2\nGTP。PC與PEPCK合起來繞過PK，而不是把PK換個方向就能跑。</p>\n<p>OAA不能直接自由通過粒線體內膜，因此碳如何出去、還原力如何到胞質，是這個繞道的重要部分。可經malate或aspartate形式運輸，也可依組織及受質由粒線體PEPCK先製PEP再輸出。不要把所有細胞鎖死成唯一一條穿梭圖。</p>\n<h3\nid=\"由alanine或pyruvate開始為何常畫malate路徑\">由alanine或pyruvate開始：為何常畫malate路徑？</h3>\n<p>粒線體OAA可接受NADH電子成malate，輸出到胞質後再氧化回OAA，同時生成胞質NADH。之後胞質PEPCK製PEP。胞質NADH可供逆向GAPDH把1,3-BPG還原成GAP，因此運輸的不只碳骨架，也解決後段需要還原力的問題。</p>\n<h3 id=\"由lactate開始電子帳不一樣\">由lactate開始：電子帳不一樣</h3>\n<p>Lactate在胞質經LDH氧化為pyruvate時，已把NAD⁺還原成NADH。兩個lactate可提供兩個胞質NADH，恰能支援後段還原需求；不必為相同需求再額外把一套malate穿梭收益重複算入。實際出口可依PEPCK\nisoform等改變，但解題先問「胞質NADH已經從哪裡取得」就能避免混亂。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>起點</th>\n<th>進入主路徑前的典型變化</th>\n<th>對胞質還原力的影響</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Lactate</td>\n<td>LDH→pyruvate</td>\n<td>生成NADH</td>\n</tr>\n<tr class=\"even\">\n<td>Alanine</td>\n<td>ALT→pyruvate</td>\n<td>轉胺本身不生成NADH</td>\n</tr>\n<tr class=\"odd\">\n<td>Pyruvate</td>\n<td>直接進PC相關路徑</td>\n<td>仍要安排胞質NADH來源</td>\n</tr>\n<tr class=\"even\">\n<td>Glycerol</td>\n<td>Glycerol-3-P→DHAP</td>\n<td>此氧化步驟生成NADH，但進入位置較高</td>\n</tr>\n</tbody>\n</table></div>\n"
    },
    {
      "id": "topic-5",
      "title": "從PEP回到六碳糖：哪裡用能量、哪裡只用水？",
      "html": "<p>PEP逆向經enolase與mutase形成3PG，再由PGK消耗ATP形成1,3-BPG；GAPDH消耗NADH把它還原成GAP。兩個三碳單位中，一個經異構化成DHAP，再由aldolase與GAP縮合成F1,6BP。這不是兩個GAP直接由aldolase不經異構化就接起來。</p>\n<p>FBPase-1把F1,6BP水解成F6P，釋出Pi，繞過PFK-1。這一步不把磷酸交給ADP，所以不產ATP。若誤把它當成PFK-1的逆反應，就會錯誤回收一個ATP而低估糖質新生成本。</p>\n<p>F6P再異構化為G6P。G6P可以依代謝需求進肝醣合成，也可以輸入內質網腔，經G6Pase水解為glucose與Pi，最後供糖輸出。G6Pase的區室與運輸系統，使糖質新生不是「所有步驟在細胞質」。</p>\n<h3\nid=\"g6pase為什麼同時影響兩種供糖來源\">G6Pase為什麼同時影響兩種供糖來源？</h3>\n<p>肝醣分解產G1P後可變G6P；糖質新生也最後到G6P。兩條都需這個出口才能有效釋放游離葡萄糖。因此G6Pase或相關G6P轉運缺陷會同時限制兩條路的最終供糖，不是只有肝醣拆不開。這是下一章von\nGierke disease嚴重空腹低血糖的重要理由。</p>\n"
    },
    {
      "id": "topic-6",
      "title": "能量總帳：兩個pyruvate製一個glucose",
      "html": "<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>步驟</th>\n<th style=\"text-align: right;\">每pyruvate</th>\n<th style=\"text-align: right;\">每glucose</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>PC：pyruvate→OAA</td>\n<td style=\"text-align: right;\">1 ATP</td>\n<td style=\"text-align: right;\">2 ATP</td>\n</tr>\n<tr class=\"even\">\n<td>PEPCK：OAA→PEP</td>\n<td style=\"text-align: right;\">1 GTP</td>\n<td style=\"text-align: right;\">2 GTP</td>\n</tr>\n<tr class=\"odd\">\n<td>PGK逆向：3PG→1,3-BPG</td>\n<td style=\"text-align: right;\">1 ATP</td>\n<td style=\"text-align: right;\">2 ATP</td>\n</tr>\n<tr class=\"even\">\n<td>GAPDH逆向：1,3-BPG→GAP</td>\n<td style=\"text-align: right;\">1 NADH</td>\n<td style=\"text-align: right;\">2 NADH</td>\n</tr>\n<tr class=\"odd\">\n<td>合計</td>\n<td style=\"text-align: right;\">2 ATP+1 GTP+1 NADH</td>\n<td style=\"text-align: right;\">4 ATP+2 GTP+2 NADH</td>\n</tr>\n</tbody>\n</table></div>\n<p>通常說「消耗6個高能磷酸鍵當量」，指4 ATP加2 GTP；不要把2\nNADH直接當作另外兩個磷酸鍵，也不要因GTP可以換ATP就把原反應式全部寫成6\nATP。若題目問的是核苷酸種類，仍須分列。</p>\n<h3 id=\"完整算例cori-cycle成本\">完整算例：Cori cycle成本</h3>\n<p>肌肉／紅血球由1 glucose到2 lactate，得2 ATP。肝臟由2 lactate回1\nglucose時，LDH先提供2 NADH，糖質新生使用4 ATP與2\nGTP。因此整個循環高能磷酸帳是周邊+2、肝臟−6，合計−4。肝臟能量可由其他燃料氧化提供，循環的作用是分工與回收，不是淨產ATP。</p>\n<h3\nid=\"若糖解與糖新生同時全速會怎樣\">若糖解與糖新生同時全速，會怎樣？</h3>\n<p>只看PFK-1與FBPase-1：前者F6P+ATP→F1,6BP+ADP，後者F1,6BP+H₂O→F6P+Pi。相加後糖沒有淨變化，卻水解1\nATP。這類substrate\ncycle可參與調節與產熱，但若無限制同時高通量，會浪費能量；因此兩路需要協同的反向調控。</p>\n"
    },
    {
      "id": "topic-7",
      "title": "前驅物逐一追碳：哪些可以、哪些不行？",
      "html": "<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>前驅物</th>\n<th>典型入口</th>\n<th>淨糖新生判斷</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Lactate</td>\n<td>Pyruvate</td>\n<td>可；先氧化產NADH</td>\n</tr>\n<tr class=\"even\">\n<td>Alanine等生糖胺基酸</td>\n<td>Pyruvate或TCA中間物</td>\n<td>可；須另處理氮</td>\n</tr>\n<tr class=\"odd\">\n<td>Glycerol</td>\n<td>Glycerol-3-P→DHAP</td>\n<td>可；不需先走PC</td>\n</tr>\n<tr class=\"even\">\n<td>Odd-chain fatty acid的三碳尾端</td>\n<td>Propionyl-CoA→succinyl-CoA</td>\n<td>可提供部分碳</td>\n</tr>\n<tr class=\"odd\">\n<td>Even-chain fatty acid產的acetyl-CoA</td>\n<td>TCA入口</td>\n<td>一般不能淨產葡萄糖</td>\n</tr>\n<tr class=\"even\">\n<td>Ethanol</td>\n<td>Acetate→acetyl-CoA</td>\n<td>不屬有效淨糖前驅物，且可抑制糖新生</td>\n</tr>\n</tbody>\n</table></div>\n<p>Glycerol先由glycerol\nkinase消耗ATP生成glycerol-3-phosphate，再由dehydrogenase氧化為DHAP。它進在三碳磷酸階段，繞過PC、PEPCK與逆向PGK等較低段，因此由不同起點算能量時，要依實際路徑重新列帳。脂肪組織放出的triacylglycerol同時有脂肪酸與glycerol，不能因脂肪酸多數不生糖，就說整個脂肪分子所有部分都不能生糖。</p>\n<p>Leucine與lysine是典型純生酮胺基酸，不能把「胺基酸可生糖」誇大成每一種都可以。其他胺基酸可能同時有生糖與生酮部分，需按碳骨架入口判斷，之後胺基酸章會詳列。</p>\n<h3 id=\"奇數鏈例外的兩個維生素\">奇數鏈例外的兩個維生素</h3>\n<p>Propionyl-CoA先由biotin依賴carboxylase變methylmalonyl-CoA，經立體轉換再由B12依賴mutase形成succinyl-CoA。題目若問「直接進TCA的形式」，選succinyl-CoA；問羧化輔因子，選biotin；問重排輔因子，選B12。三個問法是同一路徑不同位置，不能用同一答案應付。</p>\n"
    },
    {
      "id": "topic-8",
      "title": "Cori cycle與glucose–alanine cycle：碳相似，氮不同",
      "html": "<p>Cori\ncycle主要把周邊lactate送肝臟回收成glucose，再把glucose供周邊使用。典型方向是lactate由肌肉／紅血球到肝，glucose由肝回周邊；生理上乳酸也可在其他組織氧化，不代表全身所有lactate都必須回肝。</p>\n<p>Glucose–alanine\ncycle則把肌肉的pyruvate接受胺基形成alanine，送肝臟後再轉回pyruvate。肌肉的胺基通常先集中到glutamate，ALT把胺基交給pyruvate；肝臟再藉glutamate等中介將氮導向尿素合成。它兼具碳運送與氮運送，不能說肌肉直接把大量游離氨安全地當成alanine送出。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>比較</th>\n<th>Cori</th>\n<th>Glucose–alanine</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>主要周邊輸出</td>\n<td>Lactate</td>\n<td>Alanine</td>\n</tr>\n<tr class=\"even\">\n<td>胞質NAD⁺再生</td>\n<td>LDH直接參與</td>\n<td>ALT本身不是氧化還原反應</td>\n</tr>\n<tr class=\"odd\">\n<td>是否帶氮到肝</td>\n<td>不以此為主</td>\n<td>是</td>\n</tr>\n<tr class=\"even\">\n<td>肝臟後續</td>\n<td>糖新生</td>\n<td>糖新生加氮處理</td>\n</tr>\n</tbody>\n</table></div>\n<p>因此長期只靠胺基酸供糖可能增加蛋白質消耗；飢餓適應時腦增加酮體使用，有助減少部分糖需求與蛋白質動員。這不表示蛋白分解完全停止，也不表示紅血球可改燒酮體。不同器官的代謝能力限制仍然存在。</p>\n"
    },
    {
      "id": "topic-9",
      "title": "快速調控：AMP、F2,6BP與碳流選擇",
      "html": "<p>FBPase-1受AMP與F2,6BP抑制，citrate可促進其活性；PFK-1則受AMP及F2,6BP促進，ATP與citrate通常抑制。這讓細胞缺能時偏向產ATP的糖解，能量充足且肝臟有供糖任務時才較能負擔糖新生。</p>\n<p>F2,6BP不是主路徑F1,6BP的另一個寫法。PFK-2製造F2,6BP，FBPase-2分解它；PFK-1與FBPase-1則直接決定F6P／F1,6BP那一關的碳流。把1與2分清，是解激素題的關鍵。</p>\n<h3 id=\"典型肝臟空腹訊號逐步推方向\">典型肝臟空腹訊號，逐步推方向</h3>\n<p>Glucagon→Gs→adenylyl\ncyclase→cAMP→PKA；肝型PFK-2/FBPase-2被磷酸化後，PFK-2較低、FBPase-2較高，使F2,6BP下降。結果PFK-1少了活化、FBPase-1少了抑制，方向偏向糖新生。肝型PK也可被磷酸化抑制，避免PEP又流回pyruvate。</p>\n<p>這個磷酸化方向不能不加條件地套到心肌等其他isoform。也不能背成「所有kinase活化都促進糖解」：PKA是訊號酵素，而PK是糖解酵素，兩者名稱相似但層次不同。</p>\n<p>AMP高時FBPase-1受抑制，代表能量不足不適合高成本製糖。提供生糖碳源卻沒有足夠ATP、GTP與適當還原力，糖新生仍可能受限；有原料不等於一定能生產。</p>\n"
    },
    {
      "id": "topic-10",
      "title": "長期與跨器官調控：別把一條訊號當全部",
      "html": "<p>Glucagon及其他空腹相關訊號可在較長時間尺度增加PEPCK、G6Pase等糖新生相關表現；insulin則抑制肝臟供糖程式，並藉周邊效應減少前驅物動員。這和數秒到數分鐘的allosteric／磷酸化調節不同：基因表現改變通常需要較長時間，不是激素一結合就立刻多出大量酵素蛋白。</p>\n<p>Insulin受體的訊號可經PI3K–Akt影響FoxO等轉錄調節；同時抑制脂肪組織脂解，使glycerol供應及脂肪酸氧化支援改變。因此肝臟糖新生不是只有「PEPCK開關」一個決定因素，也取決於前驅物、能量與全身激素狀態。</p>\n<h3\nid=\"肝臟與肌肉在緊急狀態為何方向不同\">肝臟與肌肉在緊急狀態為何方向不同？</h3>\n<p>Epinephrine可支持肝臟釋放葡萄糖供全身使用，同時促進骨骼肌動用肝醣與糖解供收縮。若看到「腎上腺素抑制糖解」，要先看題目是否指肝臟；在正在工作的肌肉照樣抑制供能就不符合生理目的。Glucagon的典型直接供糖調控對象是肝臟，不是讓骨骼肌直接輸出葡萄糖。</p>\n<p>腎皮質可由glutamine等來源支援糖新生，與氨生成及酸排泄相關；這使長期空腹及酸中毒情境不能只想肝臟。此處掌握器官分工，腎臟細節可與生理學的酸鹼調節章互相對照。</p>\n"
    },
    {
      "id": "topic-11",
      "title": "酒精、空腹與低血糖：追NADH比背結論重要",
      "html": "<p>Ethanol經alcohol dehydrogenase生成acetaldehyde，再經aldehyde\ndehydrogenase成acetate，相關反應把NAD⁺還原為NADH。高NADH/NAD⁺使LDH平衡更偏pyruvate→lactate，也使OAA較偏向malate，降低可用糖新生前驅物及適當氧化還原條件。</p>\n<p>若先前運動與未進食已降低肝醣儲備，此時又抑制糖新生，維持血糖的兩個主要支援都變弱，低血糖風險便上升。關鍵不是「酒精先提高胰島素敏感性」這類替代解釋，也不是必須先直接抑制glycogen\nphosphorylase才會低血糖。</p>\n<h3 id=\"一個情境拆成四個問題\">一個情境拆成四個問題</h3>\n<p>第一問碳源：lactate／alanine等能否進入？第二問還原狀態：NADH是不是過高，使pyruvate與OAA被拉向其他形式？第三問能量：是否能提供ATP與GTP？第四問出口：G6Pase系統是否正常？把四層拆開，便能區分酒精情境、PC／FBPase缺陷與GSD\nI的不同瓶頸。</p>\n<p>低血糖合併乳酸增加不是單一疾病的專屬組合。糖新生酵素缺陷、G6Pase系統缺陷、氧化代謝受限與清除問題等都可能影響數值。本章情境用於機轉學習，不以一個檢驗值代替臨床鑑別。</p>\n"
    },
    {
      "id": "topic-12",
      "title": "閉卷重建與混合題的作答順序",
      "html": "<p>讀完先畫pyruvate→OAA→PEP，再畫F1,6BP→F6P與G6P→glucose三個繞道。旁邊標PC用biotin與ATP、PEPCK用GTP、兩個phosphatase用水解，再標粒線體、胞質與內質網。若你的圖全部畫在胞質，就少了重要的區室考點。</p>\n<h3 id=\"三個容易失分的變化題\">三個容易失分的變化題</h3>\n<p>由兩個lactate製糖：先由LDH得到胞質NADH，再算4 ATP與2\nGTP，不另加不存在的糖解ATP。由glycerol製糖：從DHAP進入，不能強迫所有碳再繞到pyruvate。問fatty\nacid是否生糖：先辨一般偶數鏈acetyl-CoA、奇數鏈propionyl尾端，以及triacylglycerol的glycerol三種不同來源。</p>\n<h3 id=\"做題時依序圈出四件事\">做題時依序圈出四件事</h3>\n<p>圈出器官，判斷有沒有供糖出口；圈出起點，決定經過哪些步驟；圈出終點，區分glucose、G6P或肝醣；圈出狀態，判斷空腹、餐後、運動或高NADH。最後才代入酵素與能量數字。這個順序能讓你面對同一路徑的不同題幹，而不用每題各背一個孤立答案。</p>\n<p>本章核心不是「糖解全部倒轉」，而是以不同反應與跨器官供能維持葡萄糖。下一章會把肝醣的快速動員接上，讓你看懂短期儲備與長期製糖如何交接。</p>\n"
    }
  ],
  "recalls": [
    [
      "空腹糖新生是否等肝醣完全用完才開始？",
      "不是；兩者可同時運作，隨空腹時間改變相對貢獻，肝臟與腎皮質都可供糖。"
    ],
    [
      "為何三個關卡卻有四個繞道酵素？",
      "PK由PC加PEPCK兩步繞過，另有FBPase-1與G6Pase各繞一關。"
    ],
    [
      "Acetyl-CoA活化PC代表它的碳會淨變葡萄糖嗎？",
      "不代表。它可作調節與供能訊號，但偶數鏈來源acetyl-CoA一般不淨提供糖碳。"
    ],
    [
      "由lactate與alanine起算，胞質NADH來源有何不同？",
      "Lactate經LDH氧化會產NADH；ALT轉胺不產NADH，需另安排如malate運輸的還原力供應。"
    ],
    [
      "兩個phosphatase繞道會產ATP嗎？",
      "不會，使用水解並釋Pi，不把磷酸轉給ADP。G6Pase屬內質網系統。"
    ],
    [
      "兩個pyruvate製一個glucose總成本？",
      "4 ATP、2 GTP、2 NADH；高能磷酸鍵當量是6，NADH另列。"
    ],
    [
      "脂肪不能生糖有哪些必須分開的例外？",
      "一般偶數鏈acetyl-CoA不淨生糖；奇數鏈三碳尾端可經succinyl-CoA，脂肪的glycerol也可經DHAP。"
    ],
    [
      "Alanine cycle比Cori cycle多運什麼？",
      "Alanine帶胺基氮到肝臟處理；Cori以乳酸碳回收及葡萄糖供應為主。"
    ],
    [
      "肝臟F2,6BP下降對兩條路各有何效果？",
      "PFK-1少了活化，FBPase-1少了抑制，典型方向偏糖新生。"
    ],
    [
      "Epinephrine是否讓肝與肌肉糖解都下降？",
      "不是；肝臟側重供糖，肌肉側重運動供能，必須依器官判斷。"
    ],
    [
      "空腹飲酒為何更易低血糖？",
      "酒精代謝提高NADH/NAD⁺，使pyruvate偏lactate、OAA偏malate，限制糖新生；肝醣低時供糖更脆弱。"
    ],
    [
      "混合題先圈哪四件事？",
      "器官、起點、終點、代謝狀態；它們決定區室、反應與能量帳，不能先背固定答案。"
    ]
  ],
  "readingIntro": "先區分肝醣拆解與重新製糖，逐一走過三個不可逆關卡的繞道，再按起點重算能量、還原力與器官分工。",
  "figure": "<p>先追碳流、電子與區室，再讀能量收支、器官調控與疾病連結。每節末可閉卷回答，歷屆題分組連回對應小節。</p>",
  "questions": [
    {
      "title": "01　兩個pyruvate製糖，分別在哪三個酵素步驟花ATP或GTP？",
      "prompt": "<p>兩個pyruvate製糖，分別在哪三個酵素步驟花ATP或GTP？</p>",
      "answer": "<p>PC兩次花2 ATP、PEPCK兩次花2 GTP、PGK逆向兩次花2 ATP，共4 ATP與2 GTP；GAPDH逆向另需2 NADH。</p>"
    },
    {
      "title": "02　若有人說FBPase-1讓糖新生回收一個ATP，如何反駁？",
      "prompt": "<p>若有人說FBPase-1讓糖新生回收一個ATP，如何反駁？</p>",
      "answer": "<p>它水解F1,6BP成F6P與Pi，不把磷酸轉給ADP；若與PFK-1同時成循環，淨結果反而耗ATP。</p>"
    },
    {
      "title": "03　Cori cycle一個glucose往返的高能磷酸淨成本？",
      "prompt": "<p>Cori cycle一個glucose往返的高能磷酸淨成本？</p>",
      "answer": "<p>周邊糖解得2 ATP，肝臟回收乳酸製糖耗4 ATP+2 GTP=6當量，合計淨耗4；能量需由其他氧化燃料支援。</p>"
    },
    {
      "title": "04　由lactate開始，為何不能再把同一套胞質NADH需求重複算兩次？",
      "prompt": "<p>由lactate開始，為何不能再把同一套胞質NADH需求重複算兩次？</p>",
      "answer": "<p>LDH將兩個lactate氧化時已提供2胞質NADH，可供逆向GAPDH；運輸方案要依已有還原力安排，不能又無條件額外增加相同需求。</p>"
    },
    {
      "title": "05　Glycerol為何可以生糖，而一般偶數鏈脂肪酸不行？",
      "prompt": "<p>Glycerol為何可以生糖，而一般偶數鏈脂肪酸不行？</p>",
      "answer": "<p>Glycerol可經glycerol-3-P成DHAP，直接提供三碳糖骨架；偶數鏈脂肪酸主要產acetyl-CoA，完整TCA無淨OAA增加，PDH也不能反向回pyruvate。</p>"
    },
    {
      "title": "06　肌肉能做許多可逆糖代謝反應，為何仍不等於能直接維持血糖？",
      "prompt": "<p>肌肉能做許多可逆糖代謝反應，為何仍不等於能直接維持血糖？</p>",
      "answer": "<p>缺乏有效G6Pase供糖出口，無法像肝臟把G6P大量轉游離glucose輸出；但可輸出lactate／alanine供肝臟利用。</p>"
    },
    {
      "title": "07　PC先加CO₂、PEPCK又去CO₂，是不是多此一舉？",
      "prompt": "<p>PC先加CO₂、PEPCK又去CO₂，是不是多此一舉？</p>",
      "answer": "<p>暫時羧化結合ATP投入，再以脫羧與GTP支持形成PEP，繞過PK不可逆障礙。加入的碳在淨帳相消，但在反應機制上有用途。</p>"
    },
    {
      "title": "08　肝型PFK-2/FBPase-2被PKA磷酸化後，如何一路推到糖新生？",
      "prompt": "<p>肝型PFK-2/FBPase-2被PKA磷酸化後，如何一路推到糖新生？</p>",
      "answer": "<p>PFK-2下降、FBPase-2上升使F2,6BP下降，PFK-1少活化、FBPase-1少抑制，偏糖新生。需限定典型肝型，不能套用所有isoform。</p>"
    },
    {
      "title": "09　酒精造成高NADH為何不一定讓糖新生更順？",
      "prompt": "<p>酒精造成高NADH為何不一定讓糖新生更順？</p>",
      "answer": "<p>糖新生需要適當還原力，不是NADH越高越好；過高NADH把pyruvate拉向lactate、OAA拉向malate，限制前驅物與通量，尤其肝醣低時。</p>"
    },
    {
      "title": "10　G6Pase缺陷與debranching缺陷，哪個會堵住兩種肝臟供糖的共同末端？",
      "prompt": "<p>G6Pase缺陷與debranching缺陷，哪個會堵住兩種肝臟供糖的共同末端？</p>",
      "answer": "<p>G6Pase缺陷。肝醣與糖新生都經G6P到glucose出口；debranching只限制特定肝醣動員步驟，不能當成完全相同的瓶頸。</p>"
    }
  ],
  "exams": {
    "bankCount": 1022,
    "yearMin": 96,
    "yearMax": 115,
    "note": "人工精選，保留年份、場次、題號、原卷與答案連結；非完整考頻統計。跨章題可能重複出現，作答依題幹範圍與官方採計版本。",
    "groups": [
      {
        "id": "group-1",
        "title": "前驅物與碳源例外",
        "topic": "topic-7",
        "summary": "分清生糖胺基酸、glycerol與acetyl-CoA。",
        "questions": [
          {
            "number": 50,
            "text": "50 \n有關人類肝臟細胞的葡萄糖生成作用(gluconeogenesis),下列敘述何者正確? \nA完全由醣解作用(glycolysis)的酵素所催化的逆反應來執行 \nB可幫助在高糖飲食之後使血糖值下降 \nC對於脂肪酸轉變成為葡萄糖為必須的 \nD可利用一些胺基酸將其轉變成為葡萄糖 \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  545.88,
                  570.0,
                  618.35
                ]
              }
            ],
            "id": "98-1-2-50",
            "year": 98,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/98/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=098020&c=103&s=c021&q=1&verify=step1-20261013-098020-103-c021-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=098020&y=2009",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/98/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=098020&c=103&s=c021&q=1&verify=step1-20261013-098020-103-c021-M",
            "corrected": true,
            "answerVersion": "M",
            "point": "前驅物與碳源例外",
            "analysis": "部分胺基酸可由pyruvate或TCA中間物導向糖，D正確。A忽略不可逆關卡需繞道；B餐後降糖不是糖新生目的；C對一般偶數鏈脂肪酸的敘述不成立，奇數鏈尾端須另談。",
            "trap": "可生糖不表示每一種胺基酸都能，leucine與lysine為典型純生酮例子。"
          },
          {
            "number": 38,
            "text": "38.下列何種物質無法作為葡萄糖生合成(gluconeogenesis)之前驅物? \n \nA.脂肪酸 \nB.胺基酸 \nC.甘油(glycerol) \nD 草醯乙酸(oxaloacetate) \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  341.36,
                  570.0,
                  407.84
                ]
              }
            ],
            "id": "106-1-2-38",
            "year": 106,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/106/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=106020&c=301&s=66&q=1&verify=step1-20261013-106020-301-66-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=106020&y=2017",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/106/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=106020&c=301&s=66&q=1&verify=step1-20261013-106020-301-66-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "A"
            ],
            "point": "前驅物與碳源例外",
            "analysis": "此題採一般脂肪酸氧化成acetyl-CoA不能淨生糖的框架，官方選A。生糖胺基酸、glycerol、OAA均可提供碳。題目「脂肪酸」未限定偶數鏈，嚴格而言奇數鏈propionyl尾端是例外，不能把題目簡化為所有脂肪相關碳皆不行。",
            "trap": "保留官方答案，同時記住奇數鏈與glycerol兩個邊界。"
          },
          {
            "number": 88,
            "text": "88.病人無法進食時,因為肝臟可以進行gluconeogenesis,一般仍不至於發生低血糖,下列何種物質無法被轉化\n為glucose? \n \nA.lactate \nB.alanine \nC.glycerol \nD.ethanol \n",
            "regions": [
              {
                "page": 13,
                "rect": [
                  30.0,
                  550.61,
                  570.0,
                  674.05
                ]
              }
            ],
            "id": "106-2-1-88",
            "year": 106,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/106/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=106100&c=301&s=11&q=1&verify=step1-20261013-106100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=106100&y=2017",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/106/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=106100&c=301&s=11&q=1&verify=step1-20261013-106100-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "D"
            ],
            "point": "前驅物與碳源例外",
            "analysis": "Lactate與alanine可到pyruvate，glycerol可到DHAP；ethanol主要經acetate成acetyl-CoA，不提供有效淨糖碳，故D。其代謝還可提高NADH而抑制糖新生。",
            "trap": "碳可被氧化供能不等於可淨合成葡萄糖。"
          }
        ]
      },
      {
        "id": "group-2",
        "title": "繞道、區室與共用步驟",
        "topic": "topic-2",
        "summary": "不能把糖解原路倒轉。",
        "questions": [
          {
            "number": 36,
            "text": "36 \n下列那一個分子不是糖解作用(glycolysis)與糖質新生(gluconeogenesis)共同的中間產物? \nA磷酸烯醇式丙酮酸(phosphoenolpyruvate) \nB草醯乙酸(oxaloacetate) \nC1,3-二磷酸甘油酸(1,3-bisphosphoglycerate) \nD6-磷酸葡萄糖(glucose 6-phosphate) \n",
            "regions": [
              {
                "page": 5,
                "rect": [
                  30.0,
                  84.74,
                  570.22,
                  145.94
                ]
              }
            ],
            "id": "103-1-2-36",
            "year": 103,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/103/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=103030&c=101&s=0102&q=1&verify=step1-20261013-103030-101-0102-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=103030&y=2014",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/103/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=103030&c=101&s=0102&q=1&verify=step1-20261013-103030-101-0102-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "B"
            ],
            "point": "繞道、區室與共用步驟",
            "analysis": "OAA是pyruvate到PEP繞道中間物，不是糖解十步的中間物，B正確。PEP、1,3-BPG與G6P兩路均可用到；共同中間物不表示所有酵素也都相同。",
            "trap": "先列三個繞道，再找哪個分子是繞道新增。"
          },
          {
            "number": 90,
            "text": "90.細胞進行糖質新生(gluconeogenesis)時,需要下列那兩種酵素共同作用將pyruvate轉換為\nphosphoenolpyruvate?\n \nA.pyruvate kinase and pyruvate dehydrogenase\nB.pyruvate carboxylase and pyruvate kinase\nC.pyruvate carboxylase and phosphoenolpyruvate carboxykinase\nD.pyruvate dehydrogenease and phosphoenolpyruvate carboxykinase\n",
            "regions": [
              {
                "page": 17,
                "rect": [
                  30.0,
                  75.93,
                  569.96,
                  223.73
                ]
              }
            ],
            "id": "111-2-1-90",
            "year": 111,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/111/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=111100&c=301&s=11&q=1&verify=step1-20261013-111100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=111100&y=2022",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/111/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=111100&c=301&s=11&q=1&verify=step1-20261013-111100-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "C"
            ],
            "point": "繞道、區室與共用步驟",
            "analysis": "PC先以ATP及biotin把pyruvate變OAA，PEPCK再用GTP形成PEP，選C。PK是糖解方向，PDH則把碳送acetyl-CoA而非糖新生繞道，因此其餘組合不對。",
            "trap": "名字中的carboxylase與carboxykinase不可省略到只剩kinase。"
          },
          {
            "number": 88,
            "text": "88.下列關於葡萄糖新生(gluconeogenesis)的敘述,何者正確? \nA.葡萄糖新生全部的反應都發生在細胞質 \nB.葡萄糖新生將pyruvate 轉化成葡萄糖需要消耗ATP 及GTP \nC.葡萄糖新生過程中所參與的酵素與糖解作用(glycolysis)完全相同,只是反應方向相反 \nD.Phosphoenolpyruvate carboxykinase(PEPCK)的功能是將phosphoenolpyruvate 轉化成oxaloacetate \n",
            "regions": [
              {
                "page": 16,
                "rect": [
                  30.0,
                  528.55,
                  570.0,
                  657.55
                ]
              }
            ],
            "id": "112-2-1-88",
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
            "point": "繞道、區室與共用步驟",
            "analysis": "PC與PGK逆向耗ATP、PEPCK耗GTP，故B正確。A忽略粒線體與內質網；C忽略四個繞道酵素；D把PEPCK的糖新生方向寫反。",
            "trap": "把四個酵素、三個區室、兩種核苷酸並列檢查。"
          }
        ]
      },
      {
        "id": "group-3",
        "title": "跨器官循環",
        "topic": "topic-8",
        "summary": "乳酸與alanine運送內容不同。",
        "questions": [
          {
            "number": 92,
            "text": "92.下列關於Cori cycle在體內不同組織進行反應的敘述,何者正確?\n \nA.乳酸(lactate)由肝臟運送到骨骼肌\nB.葡萄糖由骨骼肌運送到肝臟\nC.肝臟經過糖質新生(gluconeogenesis)產生葡萄糖\nD.骨骼肌經過糖質新生(gluconeogenesis)產生乳酸\n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  256.24,
                  569.96,
                  359.71
                ]
              }
            ],
            "id": "111-1-1-92",
            "year": 111,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/111/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=111020&c=301&s=11&q=1&verify=step1-20261013-111020-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=111020&y=2022",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/111/1/medicine-1-S.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=S&code=111020&c=301&s=11&q=1&verify=step1-20261013-111020-301-11-S",
            "corrected": false,
            "answerVersion": "S",
            "originalAnswers": [
              "C"
            ],
            "point": "跨器官循環",
            "analysis": "典型Cori cycle由周邊送lactate到肝，肝糖新生再供glucose給周邊，C正確。A、B方向相反；D把肌肉產乳酸誤叫糖新生，實際是糖解加LDH。",
            "trap": "Cori把局部ATP取得與肝臟耗能回收分開。"
          },
          {
            "number": 47,
            "text": "47 \nAmino group 可藉由下列何種方式,由骨骼肌細胞運送到肝細胞代謝? \nAKrebs cycle \nBGlucose-alanine cycle CUrea cycle \nDCitric acid cycle \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  393.18,
                  570.0,
                  419.16
                ]
              }
            ],
            "id": "99-2-2-47",
            "year": 99,
            "session": 2,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/99/2/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=099130&c=101&s=200&q=1&verify=step1-20261013-099130-101-200-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=099130&y=2010",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/99/2/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=099130&c=101&s=200&q=1&verify=step1-20261013-099130-101-200-M",
            "corrected": true,
            "answerVersion": "M",
            "point": "跨器官循環",
            "analysis": "Glucose–alanine cycle以alanine攜帶胺基由肌肉到肝，B正確。TCA／Krebs是同一核心碳氧化路徑，不是這種跨器官運氮循環；尿素循環在肝處理氮但不等同肌肉到肝的運送形式。",
            "trap": "運送用alanine，後續氮處理才接尿素循環。"
          }
        ]
      },
      {
        "id": "group-4",
        "title": "肝臟協同調控",
        "topic": "topic-9",
        "summary": "先區分PFK-1/2與FBPase-1/2。",
        "questions": [
          {
            "number": 38,
            "text": "38 \nFructose 2,6-bisphosphate 是糖解作用(glycolysis)與糖質新生作用(gluconeogenesis)的重要共同異\n位調解因子(allosteric regulator),下列有關fructose 2,6-bisphosphate 的敘述何者正確? \nA昇糖激素(glucagon)促進其合成 \nBfructose 2,6-bisphosphatase 催化其由fructose 6-phosphate 合成 \nCfructose 2,6-bisphosphate 活化phosphofructokinase-1 \nDfructose 2,6-bisphosphate 增加糖質新生作用(gluconeogenesis) \n",
            "regions": [
              {
                "page": 5,
                "rect": [
                  30.0,
                  242.73,
                  570.22,
                  348.93
                ]
              }
            ],
            "id": "104-1-2-38",
            "year": 104,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/104/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=104030&c=101&s=0102&q=1&verify=step1-20261013-104030-101-0102-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=104030&y=2015",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/104/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=104030&c=101&s=0102&q=1&verify=step1-20261013-104030-101-0102-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "C"
            ],
            "point": "肝臟協同調控",
            "analysis": "F2,6BP活化PFK-1並抑制FBPase-1，C正確。A在典型肝模型方向相反；B合成者應PFK-2不是FBPase-2；D因此也把糖新生方向寫反。",
            "trap": "F1,6BP是路徑中間物，F2,6BP是主要調節物，不能互換。"
          }
        ]
      },
      {
        "id": "group-5",
        "title": "器官與緊急狀態",
        "topic": "topic-10",
        "summary": "肝臟供全身，肌肉供自己工作。",
        "questions": [
          {
            "number": 89,
            "text": "89.遇緊急狀況時,腎上腺素(epinephrine)分泌增加,調控肝臟及骨骼肌的醣類代謝以提升血糖及骨骼肌運\n動,下列相關敘述何者錯誤? \n \nA.增加骨骼肌的肝醣分解(glycogenolysis) \nB.增加骨骼肌的糖解作用(glycolysis) \nC.增加肝臟的糖解作用(glycolysis) \nD.增加肝臟的糖質新生作用(gluconeogenesis) \n",
            "regions": [
              {
                "page": 13,
                "rect": [
                  30.0,
                  467.27,
                  570.0,
                  590.05
                ]
              }
            ],
            "id": "107-2-1-89",
            "year": 107,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/107/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=107100&c=301&s=11&q=1&verify=step1-20261013-107100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=107100&y=2018",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/107/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=107100&c=301&s=11&q=1&verify=step1-20261013-107100-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "C"
            ],
            "point": "器官與緊急狀態",
            "analysis": "題目問錯誤。緊急epinephrine訊號促進肌肉肝醣動員與糖解，肝臟則支援供糖及糖新生；C把肝臟糖解寫成增加，是此題錯項。其餘方向符合典型整體反應。",
            "trap": "先讀肝或肌肉，不用一個上升下降套全身。"
          }
        ]
      },
      {
        "id": "group-6",
        "title": "空腹酒精與氧化還原",
        "topic": "topic-11",
        "summary": "高NADH可使糖新生前驅物受限。",
        "questions": [
          {
            "number": 35,
            "text": "35 \n空腹且激烈運動後,若飲用高量酒精,易發生低血糖,下列有關此現象之敘述,何者錯誤? \nA肝臟gluconeogenesis 被抑制 \nB酒精增進肝臟胰島素敏感性,使葡萄糖由血液進入細胞中 \nC肝細胞內因酒精代謝,還原物質NADH 量增加 \nD肝細胞內pyruvate 濃度下降 \n",
            "regions": [
              {
                "page": 3,
                "rect": [
                  30.0,
                  580.89,
                  570.22,
                  648.39
                ]
              }
            ],
            "id": "101-1-2-35",
            "year": 101,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/101/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=101030&c=101&s=0102&q=1&verify=step1-20261013-101030-101-0102-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=101030&y=2012",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/101/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=101030&c=101&s=0102&q=1&verify=step1-20261013-101030-101-0102-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "B"
            ],
            "point": "空腹酒精與氧化還原",
            "analysis": "本題問錯誤。酒精代謝提高NADH，推pyruvate向lactate、OAA向malate，限制糖新生；A、C、D符合此機轉。B以胰島素敏感性提高解釋急性低血糖，並非題設核心，故選B。",
            "trap": "先推NADH/NAD⁺，再推碳源與血糖，不只背酒精會低血糖。"
          }
        ]
      }
    ]
  }
});
