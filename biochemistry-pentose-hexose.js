biochemistryChapters.push({
  "id": "pentose-hexose",
  "number": "12",
  "title": "磷酸戊糖與其他單醣：還原力、碳骨架與疾病",
  "summary": "從NADPH與核糖需求，理解PPP分流、紅血球抗氧化，以及果糖與半乳糖的代謝阻塞。",
  "sources": "Harper’s Illustrated Biochemistry, 31st ed., Ch. 20 The Pentose Phosphate Pathway & Other Pathways of Hexose Metabolism（印刷頁182–194）；HFI補充核對GeneReviews。",
  "references": "<p>Harper’s Illustrated Biochemistry, 31st ed., Ch. 20 The Pentose Phosphate Pathway &amp; Other Pathways of Hexose Metabolism（印刷頁182–194）；HFI補充核對GeneReviews。</p><p>正文與圖為原創教學重組，非逐段翻譯。題目取自現有歷屆題庫，官方採計答案與更正版本原樣保留；機轉解析另行撰寫。精選題數不等同完整考頻統計。</p><p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.ncbi.nlm.nih.gov/books/NBK333439/\">GeneReviews：Hereditary Fructose Intolerance</a></p>",
  "sections": [
    {
      "id": "topic-1",
      "title": "先分清三種葡萄糖需求：ATP、還原力、核糖",
      "html": "<p>讀完糖解、TCA與肝醣後，很容易把每一條糖代謝路徑都理解成「用來製造ATP」。磷酸戊糖途徑（pentose\nphosphate pathway, PPP；又稱hexose monophosphate\nshunt）正是重要反例：它直接提供NADPH及五碳糖，不直接產ATP。細胞除了要付能量帳，也必須取得合成脂肪所需的電子、抵抗氧化壓力的還原力，以及製造核苷酸的碳骨架。</p>\n<p>PPP主要位於胞質，從glucose-6-phosphate（G6P）分流。G6P不是專屬糖解的受質：可以走糖解、肝醣合成或PPP，實際流向取決於需求與酵素調控。紅血球沒有粒線體，仍能利用PPP；因此「沒有TCA」不等於「葡萄糖只能走一條路」。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>需求</th>\n<th>主要路徑／產品</th>\n<th>最容易混淆處</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>ATP維持離子梯度等工作</td>\n<td>糖解、氧化磷酸化</td>\n<td>PPP本身不直接產ATP</td>\n</tr>\n<tr class=\"even\">\n<td>還原性生合成與抗氧化</td>\n<td>NADPH</td>\n<td>不能把NADPH直接當成糖解的NADH</td>\n</tr>\n<tr class=\"odd\">\n<td>核苷酸的糖骨架</td>\n<td>Ribose-5-phosphate</td>\n<td>不等於已完成嘌呤或嘧啶環合成</td>\n</tr>\n</tbody>\n</table></div>\n<p>NADH與NADPH都可攜帶電子，差別不在「一個有能量、一個沒能量」，而是細胞使用不同酵素、不同氧化還原池，分配給不同工作。NADPH的磷酸標記有助酵素辨認，不是每送一次電子就拿這個磷酸去合成ATP。</p>\n"
    },
    {
      "id": "topic-2",
      "title": "氧化階段：一個六碳換兩個NADPH與一個五碳",
      "html": "<figure><div class=\"table-scroll\" tabindex=\"0\"><img src=\"assets/biochemistry/lipid-ppp.svg\" alt=\"PPP氧化段與非氧化段：產還原力及重新分配碳骨架\" style=\"width:100%;min-width:540px;max-width:780px;height:auto\"></div><figcaption>PPP氧化段與非氧化段：產還原力及重新分配碳骨架。圖中為教學模型；手機可橫向捲動，條件與例外見正文。</figcaption></figure><p>氧化階段的方向通常視為不可逆。先逐步讀，而不是只背總產物。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>步驟</th>\n<th>反應</th>\n<th>本步重點</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>1</td>\n<td>G6P→6-phosphogluconolactone；G6PD</td>\n<td>NADP⁺接受電子，產第一個NADPH</td>\n</tr>\n<tr class=\"even\">\n<td>2</td>\n<td>Lactone→6-phosphogluconate；lactonase</td>\n<td>加水開環，不產第二個NADPH</td>\n</tr>\n<tr class=\"odd\">\n<td>3</td>\n<td>6-phosphogluconate→ribulose-5-P；6-phosphogluconate\ndehydrogenase</td>\n<td>第二個NADPH，並釋放CO₂</td>\n</tr>\n</tbody>\n</table></div>\n<p>從碳數檢查：6C→5C＋1C，因此不能把CO₂漏掉。從電子檢查：兩次dehydrogenase反應各使用一個NADP⁺；中間的水解反應不做氧化還原。總結為每個G6P通過一次氧化段，產2\nNADPH、1 CO₂與1 ribulose-5-phosphate。</p>\n<p><strong>Ribulose不是ribose。</strong>\n前者是酮戊糖，後者是醛戊糖；兩者可經isomerase轉換。氧化段直接產物若問得精確，應先選ribulose-5-P，而不是因為PPP與核酸有關便一律填ribose-5-P。</p>\n<p>第一個離開的CO₂來自原G6P的C1。若題目比較放射標記C1與C6在PPP初期釋出的差異，關鍵是氧化脫羧的位置；不能直接套用TCA第一圈的碳追蹤規則。</p>\n"
    },
    {
      "id": "topic-3",
      "title": "非氧化階段：二碳、三碳搬運，不是再多產NADPH",
      "html": "<p>Ribulose-5-P可由isomerase變ribose-5-P，也可由epimerase變xylulose-5-P。後續用不同長度的糖重新排列碳骨架，主要反應可逆，因此可依核糖需求與糖解中間物濃度朝不同方向運作。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>反應</th>\n<th>酵素</th>\n<th>碳數核對</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Xylulose-5-P＋ribose-5-P⇌GAP＋sedoheptulose-7-P</td>\n<td>Transketolase</td>\n<td>5＋5＝3＋7</td>\n</tr>\n<tr class=\"even\">\n<td>Sedoheptulose-7-P＋GAP⇌F6P＋erythrose-4-P</td>\n<td>Transaldolase</td>\n<td>7＋3＝6＋4</td>\n</tr>\n<tr class=\"odd\">\n<td>Xylulose-5-P＋erythrose-4-P⇌F6P＋GAP</td>\n<td>Transketolase</td>\n<td>5＋4＝6＋3</td>\n</tr>\n</tbody>\n</table></div>\n<p>相加後中間產物消掉，得到<strong>3個五碳糖⇌2個F6P＋1個GAP</strong>，兩邊都是15個碳。這不是三個五碳糖各自變成一個六碳糖，不能逐分子硬配。</p>\n<p>Transketolase轉移二碳單位，需要thiamine\npyrophosphate（TPP，維生素B1衍生物）；transaldolase轉移三碳單位，不能把它也列成典型TPP酵素。可把「酮二、醛三」作為提示，但一定要連同實際碳數表驗算。</p>\n<p>這一段沒有直接消耗或生成NADPH，也不直接產CO₂。題目若說PPP可產CO₂是對的；若說非氧化段每搬一次碳都釋CO₂，就錯在把兩個階段混在一起。</p>\n"
    },
    {
      "id": "topic-4",
      "title": "細胞如何依需求改變PPP的走法",
      "html": "<p>PPP不是固定每走一次就必須把所有五碳糖送去DNA。先問細胞此刻比較缺NADPH還是ribose。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>細胞需求</th>\n<th>可採用的碳流</th>\n<th>推理</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>NADPH與ribose皆需要</td>\n<td>氧化段後接ribose形成</td>\n<td>同時取得還原力與五碳骨架</td>\n</tr>\n<tr class=\"even\">\n<td>Ribose需求大於NADPH</td>\n<td>非氧化段由F6P、GAP反向重排</td>\n<td>不必為取得核糖而強迫額外做氧化段</td>\n</tr>\n<tr class=\"odd\">\n<td>NADPH需求大於ribose</td>\n<td>五碳糖重排回糖解中間物，部分再生G6P</td>\n<td>碳回收可繼續供氧化段使用</td>\n</tr>\n<tr class=\"even\">\n<td>還需要ATP</td>\n<td>F6P、GAP進糖解</td>\n<td>ATP來自接上的糖解，不是PPP直接產生</td>\n</tr>\n</tbody>\n</table></div>\n<p>「反向做非氧化段」不等於把不可逆氧化段倒轉。反向重排可用2 F6P＋1\nGAP形成3個五碳糖；這個過程不會憑空產生NADPH。</p>\n<p>在具備所需酵素的組織，若完整回收碳並反覆氧化，一個G6P的六個碳最終可全部成CO₂，同時得到12\nNADPH。<strong>單次通過氧化段是2 NADPH；完整循環氧化是12\nNADPH。</strong>\n兩個數字對應不同邊界，不矛盾。完整回收涉及F1,6-bisphosphatase等反應能力，不能假設每一種細胞都能同樣操作。</p>\n"
    },
    {
      "id": "topic-5",
      "title": "G6PD調控：還原力用得越快，需求訊號越明顯",
      "html": "<p>Glucose-6-phosphate\ndehydrogenase（G6PD）是氧化段的重要速率限制酵素。當NADPH被消耗並轉成NADP⁺，受質供應增加，使PPP較能回應還原需求；NADPH充足時則抑制流量。這是用氧化還原池的比例回報「電子還夠不夠」。</p>\n<p>肝臟、脂肪組織、腎上腺皮質、泌乳乳腺等需要還原性生合成，PPP很有意義；紅血球則尤其仰賴它維持抗氧化能力。不同組織的功能不能只用「哪裡ATP消耗最多」推估PPP活性。</p>\n<p>NADPH也用於cytochrome P450反應、NO合成與吞噬細胞的NADPH\noxidase。後者利用NADPH產生活性氧殺菌，乍看與抗氧化相反，其實是同一電子來源被不同酵素分配到不同目的。G6PD缺乏與NADPH\noxidase缺陷不是同一疾病：前者是還原力來源受限，後者是呼吸爆發的執行系統異常。</p>\n<p>糖解的PFK-1看ATP、AMP、F2,6BP等訊號；PPP的G6PD主要回應NADP⁺/NADPH需求。不要看到同一受質都是葡萄糖就把兩套控制開關交換。</p>\n"
    },
    {
      "id": "topic-6",
      "title": "紅血球抗氧化：把NADPH、GSH與過氧化物串起來",
      "html": "<p>氧運輸使紅血球長期接觸氧化壓力。過氧化物若未被處理，可傷害血紅素及膜蛋白；紅血球又無法像有細胞核的細胞一樣持續重新合成酵素，因此既有防禦能力非常重要。</p>\n<p>反應分成兩層：glutathione\nperoxidase使用還原型glutathione（GSH）處理H₂O₂，GSH被氧化成GSSG；glutathione\nreductase再使用NADPH把GSSG還原回GSH。後者含FAD輔基，前者典型為selenium相關酵素。若把NADPH直接畫成peroxidase的受質，就省略了真正傳遞電子的GSH循環。</p>\n<p><strong>G6PD→NADPH→glutathione reductase→GSH→glutathione\nperoxidase→清除過氧化物。</strong>\n順序不只是記憶句，它能預測故障後果：NADPH不足，GSH再生能力下降，遇到較大氧化負荷時便容易溶血。</p>\n<p>氧化變性的血紅素可形成Heinz bodies；脾臟移除變性聚集物後可見bite\ncells。這些形態要和「氧化損傷」連結，不能把所有溶血都背成同一張血片。另一方面，methemoglobin主要的生理還原途徑涉及NADH依賴cytochrome\nb5 reductase；不要把紅血球所有還原反應都說成由PPP單獨負責。</p>\n"
    },
    {
      "id": "topic-7",
      "title": "G6PD缺乏與其他紅血球代謝題的區分",
      "html": "<p>G6PD缺乏常以X-linked方式遺傳；女性異合子也可能因X染色體失活情形而有不同程度表現，不能寫成「女性不會有」。感染、蠶豆及某些氧化性藥物可能增加氧化負荷，疾病重點是酵素活性與壓力間的失衡，而非每次接觸任何藥物都必定溶血。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>故障</th>\n<th>首先受影響</th>\n<th>題目推理線索</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>G6PD缺乏</td>\n<td>NADPH及GSH再生</td>\n<td>氧化壓力相關溶血</td>\n</tr>\n<tr class=\"even\">\n<td>Pyruvate kinase缺乏</td>\n<td>糖解ATP供應</td>\n<td>膜與離子平衡維持困難，可造成溶血</td>\n</tr>\n<tr class=\"odd\">\n<td>2,3-BPG變化</td>\n<td>Hb對O₂親和力</td>\n<td>來自糖解支路，不是PPP</td>\n</tr>\n<tr class=\"even\">\n<td>成熟紅血球無粒線體</td>\n<td>無PDH/TCA/呼吸鏈能量系統</td>\n<td>有PPP與糖解，不代表有脂肪酸氧化</td>\n</tr>\n</tbody>\n</table></div>\n<p>急性溶血後測酵素可能受年輕紅血球比例、輸血等因素影響；考題如果問檢驗時機，不宜只用一次結果完全排除。此處建立的是機轉與判讀概念，具體診斷仍須看臨床與檢驗情境。</p>\n<p>把兩種溶血原因分開記：PK缺乏是「工作能量不足」，G6PD缺乏是「抗氧化再生不足」。兩者都可能破壞紅血球，卻不能用相同輔酶或相同路徑解釋。</p>\n"
    },
    {
      "id": "topic-8",
      "title": "果糖代謝：為何入口位置決定調控方式",
      "html": "<p>飲食蔗糖可提供glucose與fructose。典型肝臟路徑先由fructokinase（ketohexokinase）消耗ATP，把fructose變成fructose-1-phosphate（F1P）；aldolase\nB再將F1P切成DHAP與glyceraldehyde。後者經triokinase消耗ATP成GAP，兩個三碳單位便能接入既有糖代謝。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>分子</th>\n<th>不要與它混淆</th>\n<th>理由</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>F1P</td>\n<td>F1,6BP</td>\n<td>前者由fructokinase產生，後者是PFK-1產品</td>\n</tr>\n<tr class=\"even\">\n<td>Glyceraldehyde</td>\n<td>GAP</td>\n<td>前者尚須磷酸化</td>\n</tr>\n<tr class=\"odd\">\n<td>Aldolase B</td>\n<td>Fructose-1,6-bisphosphatase</td>\n<td>前者切碳骨架，後者水解磷酸</td>\n</tr>\n</tbody>\n</table></div>\n<p>這條入口位於PFK-1之後，因此繞過PFK-1的主要流量控制；但「繞過PFK-1」不等於整個人體完全不調控果糖，也不代表攝取一口水果便直接造成疾病。實際結果取決於劑量、組織處理能力、能量狀態及其他飲食因素。</p>\n<p>由一個fructose到兩個三碳磷酸，在典型路徑共用2\nATP；若再完整走糖解後半段至lactate，可淨得2\nATP。要把fructokinase與triokinase兩筆都列入，不能只因少走PFK-1就少扣一筆投資。</p>\n"
    },
    {
      "id": "topic-9",
      "title": "果糖尿與遺傳性果糖不耐：阻塞前後差一步差很多",
      "html": "<p>Essential\nfructosuria典型為fructokinase缺乏。果糖不易進入F1P路徑，可出現在尿中，通常較良性。Hereditary\nfructose intolerance（HFI）則為aldolase\nB缺乏：前一步仍把磷酸與ATP投入F1P，下一步卻無法順利處理，因此F1P累積並牽連磷酸、ATP與肝臟供糖。</p>\n<p>不能只說「果糖不能變成葡萄糖，所以低血糖」；真正嚴重的地方是阻塞同時干擾糖質新生與肝醣分解，使其他碳來源的供糖也受影響。這解釋了為什麼飲食含果糖後可能出現低血糖與肝臟損傷，而不是單純少利用一種糖。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>項目</th>\n<th>Essential fructosuria</th>\n<th>HFI</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>典型酵素</td>\n<td>Fructokinase</td>\n<td>Aldolase B</td>\n</tr>\n<tr class=\"even\">\n<td>磷酸化果糖大量困住</td>\n<td>非典型主要機轉</td>\n<td>F1P累積是關鍵</td>\n</tr>\n<tr class=\"odd\">\n<td>題目常見線索</td>\n<td>尿中還原糖、較良性</td>\n<td>接觸果糖或蔗糖後不適、低血糖、肝功能異常</td>\n</tr>\n</tbody>\n</table></div>\n<p>Sorbitol可轉成fructose，sucrose含fructose，因此不能把HFI理解成只和名稱中有「果糖」的食物有關。HFI也不同於腸道果糖吸收不良；後者以吸收與腸道症狀為核心，不是aldolase\nB阻塞。國考先辨病名層次，再選酵素，避免看到fructose就選同一個答案。</p>\n"
    },
    {
      "id": "topic-10",
      "title": "半乳糖的Leloir途徑：UDP不是裝飾性前綴",
      "html": "<p>乳糖分解後提供glucose及galactose。Galactokinase先用ATP產galactose-1-phosphate；接著GALT（galactose-1-phosphate\nuridylyltransferase）讓galactose-1-P與UDP-glucose交換，產生glucose-1-P與UDP-galactose。UDP-galactose\n4-epimerase（GALE）再使UDP-galactose與UDP-glucose相互轉換。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>步驟</th>\n<th>輸入與輸出</th>\n<th>辨認重點</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Galactokinase</td>\n<td>Galactose＋ATP→galactose-1-P</td>\n<td>先磷酸化，不直接形成G6P</td>\n</tr>\n<tr class=\"even\">\n<td>GALT</td>\n<td>Galactose-1-P＋UDP-glucose→G1P＋UDP-galactose</td>\n<td>UDP糖參與交換</td>\n</tr>\n<tr class=\"odd\">\n<td>GALE</td>\n<td>UDP-galactose⇌UDP-glucose</td>\n<td>改變C4立體配置</td>\n</tr>\n<tr class=\"even\">\n<td>Phosphoglucomutase</td>\n<td>G1P⇌G6P</td>\n<td>接回糖解、肝醣或供糖路徑</td>\n</tr>\n</tbody>\n</table></div>\n<p>Galactose與glucose是C4 epimer，不是C2；glucose與mannose才是C2\nepimer。GALE使用緊密結合的NAD⁺參與暫時氧化還原，但整體不淨產一份可送去呼吸鏈的NADH，不能把它當另一個能量產生步驟。</p>\n<p>UDP-glucose可再生，所以整條Leloir途徑不能每處理一個galactose就一律另扣一個UTP；若題目從特殊初始池或肝醣合成終點計算，才依實際反應重算。這也解釋為何UDP-glucose同時出現在肝醣合成與galactose代謝，卻不是肝醣磷酸解的必要供體。</p>\n"
    },
    {
      "id": "topic-11",
      "title": "半乳糖血症、polyol與白內障：由堆積物推表現",
      "html": "<p>Classic\ngalactosemia通常指GALT缺乏，galactose-1-P及其他代謝異常可造成多器官傷害。Galactokinase缺乏則未能有效磷酸化galactose，galactose可被aldose\nreductase還原成galactitol；後者在水晶體累積造成滲透壓與氧化相關傷害，白內障是重要線索。GALT缺乏也可有白內障，不能看到白內障就排除classic\ngalactosemia。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>缺乏</th>\n<th>應先想到的差異</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>GALT</td>\n<td>Classic galactosemia，可能有肝臟與全身性表現</td>\n</tr>\n<tr class=\"even\">\n<td>Galactokinase</td>\n<td>Galactitol與白內障的連結突出</td>\n</tr>\n<tr class=\"odd\">\n<td>GALE</td>\n<td>表現依組織分布與殘餘活性有差異，不宜全部歸為良性</td>\n</tr>\n<tr class=\"even\">\n<td>Lactase</td>\n<td>腸腔乳糖消化問題，與細胞內Leloir路徑不同</td>\n</tr>\n</tbody>\n</table></div>\n<p>Polyol途徑的另一組是glucose→sorbitol→fructose。第一步aldose\nreductase消耗NADPH，第二步sorbitol\ndehydrogenase使用NAD⁺。某些組織第二步處理能力較低，sorbitol容易累積。這裡同時牽涉滲透壓、NADPH需求與氧化壓力，不只是「糖變甜」的反應。</p>\n<p>Galactose還原成galactitol與glucose還原成sorbitol是相似邏輯，但名稱不同。題目若改成galactosemia的白內障，應想到galactitol，不要機械填sorbitol。</p>\n"
    },
    {
      "id": "topic-12",
      "title": "葡萄糖醛酸與全章整合：用產物分辨目的",
      "html": "<p>UDP-glucose可被氧化成UDP-glucuronate，作為glucuronidation的活化供體，也參與部分glycosaminoglycan的組成。這與PPP都從糖衍生，但不是同一路徑。Glucuronidation常協助增加某些物質水溶性與排泄，bilirubin結合是典型例子；不要把所有代謝物的排除都說成只靠此方式。</p>\n<p>人體缺乏完成內生維生素C合成所需的gulonolactone\noxidase，因此須由飲食取得維生素C。這個缺口不代表人體完全不能形成glucuronate；它只是在更後面的特定反應無法完成。Essential\npentosuria涉及L-xylulose reductase缺乏，與G6PD缺乏的溶血機轉不同。</p>\n<p>最後做三層整理：第一層是入口，G6P進PPP、fructose進F1P、galactose進galactose-1-P；第二層是需求，NADPH、ribose或既有糖代謝中間物；第三層是故障，分辨還原力不足、磷酸化中間物困住、polyol累積。遇到題目先定位在哪一層，才選酵素。</p>\n<p><strong>閉卷整合題：紅血球不能用脂肪酸產ATP，卻為何需要PPP？</strong>\n因為能量來源和抗氧化來源不是同一件事；糖解負責ATP，PPP負責NADPH，再經GSH循環保護膜與血紅素。下一章轉入脂肪酸氧化時，請保留這個器官差異，不能把肝臟或肌肉的路徑套到紅血球。</p>\n"
    }
  ],
  "recalls": [
    [
      "PPP為何不以ATP產量評價功能？",
      "它直接供NADPH與五碳糖，支援還原反應、抗氧化與核苷酸合成；本身不直接產ATP。"
    ],
    [
      "一次氧化段的碳與電子帳為何？",
      "每G6P形成1 ribulose-5-P、1 CO₂、2 NADPH；六碳少一碳，兩次dehydrogenase各產NADPH。"
    ],
    [
      "Transketolase與transaldolase如何分辨？",
      "前者搬二碳且需TPP，後者搬三碳；總反應3個五碳糖⇌2 F6P＋1 GAP，非氧化段不直接產NADPH。"
    ],
    [
      "只需大量ribose時，必須先多產NADPH嗎？",
      "不必；可從F6P與GAP反向走可逆非氧化段取得五碳骨架，不是倒轉不可逆氧化段。"
    ],
    [
      "NADPH使用增加如何回報PPP？",
      "NADP⁺增加提供受質需求，NADPH回饋下降，支持G6PD通量增加。"
    ],
    [
      "NADPH如何間接清除過氧化物？",
      "NADPH供glutathione reductase再生GSH，GSH再供glutathione peroxidase處理過氧化物。"
    ],
    [
      "PK與G6PD缺乏都溶血，缺的是同一件事嗎？",
      "不是；PK影響糖解ATP，G6PD影響NADPH與抗氧化再生。成熟紅血球仍有PPP但沒有粒線體供能。"
    ],
    [
      "肝臟果糖入口為何繞過PFK-1？",
      "Fructokinase產F1P，aldolase B切成DHAP及glyceraldehyde，後者磷酸化成GAP；入口在PFK-1之後。"
    ],
    [
      "為何aldolase B缺乏比fructokinase缺乏嚴重？",
      "前一步仍投入ATP並困住磷酸於F1P，干擾供糖及能量；fructokinase缺乏較少形成此困住中間物。"
    ],
    [
      "GALT反應的兩個受質與兩個產物？",
      "Galactose-1-P＋UDP-glucose→G1P＋UDP-galactose；再由GALE使UDP糖互轉。"
    ],
    [
      "Galactose造成白內障應想到哪個polyol？",
      "Galactitol；glucose經aldose reductase形成的則是sorbitol，不可互換名稱。"
    ],
    [
      "不能合成維生素C是否表示不能形成glucuronate？",
      "不是；人體缺的是後段gulonolactone oxidase，仍可形成UDP-glucuronate供結合及其他用途。"
    ]
  ],
  "readingIntro": "先讀機轉與碳數，再用表格核對輔酶、區室及能量；每節閉卷回想，最後以歷屆題檢查能否處理條件改變。",
  "figure": "<p>先追碳流、還原力與區室，再讀能量收支、器官調控與疾病連結。每節末可閉卷回答，歷屆題分組連回對應小節。</p>",
  "questions": [
    {
      "title": "01　G6P一次通過PPP氧化段後，碳數與NADPH各是多少？",
      "prompt": "<p>G6P一次通過PPP氧化段後，碳數與NADPH各是多少？</p>",
      "answer": "<p>1個五碳ribulose-5-P、1 CO₂及2 NADPH；lactonase步驟是水解，不額外產NADPH。</p>"
    },
    {
      "title": "02　3個五碳糖重排後得到幾個F6P與GAP？",
      "prompt": "<p>3個五碳糖重排後得到幾個F6P與GAP？</p>",
      "answer": "<p>2 F6P＋1 GAP；15C＝12C＋3C。若算成3 F6P就憑空多出3C。</p>"
    },
    {
      "title": "03　維生素B1不足是否直接阻斷PPP兩次產NADPH的酵素？",
      "prompt": "<p>維生素B1不足是否直接阻斷PPP兩次產NADPH的酵素？</p>",
      "answer": "<p>兩次產NADPH的dehydrogenase不以TPP作其典型輔因子；TPP直接對應非氧化段transketolase，整體碳流仍可能間接受影響。</p>"
    },
    {
      "title": "04　細胞需要核糖但不需要額外NADPH，如何取材？",
      "prompt": "<p>細胞需要核糖但不需要額外NADPH，如何取材？</p>",
      "answer": "<p>由糖解中間物F6P及GAP反向走可逆碳重排形成五碳糖，無須強迫先做氧化段。</p>"
    },
    {
      "title": "05　GSH用完後由哪個酵素再生？",
      "prompt": "<p>GSH用完後由哪個酵素再生？</p>",
      "answer": "<p>Glutathione reductase使用NADPH把GSSG還原成GSH；peroxidase是使用GSH處理過氧化物的一層。</p>"
    },
    {
      "title": "06　紅血球以PPP供ATP，又以TCA供NADPH，這句哪裡錯？",
      "prompt": "<p>紅血球以PPP供ATP，又以TCA供NADPH，這句哪裡錯？</p>",
      "answer": "<p>兩處皆錯：紅血球主要以糖解供ATP、PPP供NADPH；成熟紅血球無粒線體，不能運作完整TCA。</p>"
    },
    {
      "title": "07　一個fructose走典型肝路徑至兩個lactate，淨ATP？",
      "prompt": "<p>一個fructose走典型肝路徑至兩個lactate，淨ATP？</p>",
      "answer": "<p>Fructokinase與triokinase各耗1 ATP，兩個三碳走後半糖解產4 ATP，淨2 ATP。</p>"
    },
    {
      "title": "08　吃含蔗糖食物後低血糖與肝臟異常，為何不能只寫果糖吸收不良？",
      "prompt": "<p>吃含蔗糖食物後低血糖與肝臟異常，為何不能只寫果糖吸收不良？</p>",
      "answer": "<p>需區分HFI的細胞內aldolase B阻塞與腸道吸收問題；HFI會F1P堆積、ATP及磷酸受困，影響供糖。</p>"
    },
    {
      "title": "09　Galactokinase與GALT缺乏的白內障能完全區分兩者嗎？",
      "prompt": "<p>Galactokinase與GALT缺乏的白內障能完全區分兩者嗎？</p>",
      "answer": "<p>不能；兩者皆可能增加galactitol。GALT缺乏通常需考慮更廣泛全身與肝臟表現，不能只用白內障作唯一分類。</p>"
    },
    {
      "title": "10　為何14 NADPH對應7次PPP氧化段，不等於一定淨吃掉7個glucose？",
      "prompt": "<p>為何14 NADPH對應7次PPP氧化段，不等於一定淨吃掉7個glucose？</p>",
      "answer": "<p>次數只計電子；五碳糖可重排與回收，淨碳耗用取決於其他產物及碳回收邊界。</p>"
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
        "title": "PPP的目的與區室",
        "topic": "topic-1",
        "summary": "先分還原力、碳骨架與ATP，再辨胞質或粒線體。",
        "questions": [
          {
            "number": 28,
            "text": "28 \n下列何種化合物不是五碳糖途徑(pentose phosphate pathway)之代謝物或產物? \nANADPH \nBα-ketoglutarate \nCCO2 \nDRibulose 5-phosphate \n",
            "regions": [
              {
                "page": 3,
                "rect": [
                  30.0,
                  189.39,
                  570.22,
                  216.39
                ]
              }
            ],
            "id": "101-1-2-28",
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
            "point": "PPP的目的與區室",
            "analysis": "A的NADPH、C的CO₂及D的ribulose-5-P都屬PPP氧化段產物；B α-ketoglutarate是TCA中間物，非PPP的典型代謝物。",
            "trap": "核糖途徑不等於任何含碳代謝物都在其中。"
          },
          {
            "number": 87,
            "text": "87.下列有關葡萄糖氧化的五碳糖磷酸途徑(pentose phosphate pathway)功能之敘述,何者正確?\n \nA.負責催化每莫耳葡萄糖產生36莫耳ATP\nB.負責催化每莫耳葡萄糖產生5莫耳CO2\nC.供應合成核苷酸(nucleotide)所需要之核糖(ribose)的來源\nD.主要功能是產生NADH及FADH2進入呼吸鏈氧化產生能量\n",
            "regions": [
              {
                "page": 13,
                "rect": [
                  30.0,
                  318.32,
                  569.96,
                  429.17
                ]
              }
            ],
            "id": "109-2-1-87",
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
            "point": "PPP的目的與區室",
            "analysis": "C正確：PPP供應核糖骨架。A的36 ATP非PPP直接收益；B的5 CO₂不是單次氧化段產量；D將NADPH混成呼吸鏈主要使用的NADH、FADH₂。",
            "trap": "先界定單次氧化段，不拿完整回收的六碳氧化混答。"
          },
          {
            "number": 96,
            "text": "96.下列那一類生化反應主要不是在粒線體內進行?\n \nA.pyruvate oxidative decarboxylation\nB.pentose phosphate pathway\nC.oxidative phosphorylation\nD.fatty acid β-oxidation\n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  690.78,
                  569.96,
                  806.92
                ]
              }
            ],
            "id": "111-1-1-96",
            "year": 111,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/111/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=111020&c=301&s=11&q=1&verify=step1-20261013-111020-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=111020&y=2022",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/111/1/medicine-1-S.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=S&code=111020&c=301&s=11&q=1&verify=step1-20261013-111020-301-11-S",
            "corrected": false,
            "answerVersion": "S",
            "originalAnswers": [
              "B"
            ],
            "point": "PPP的目的與區室",
            "analysis": "B的PPP主要在胞質。A PDH氧化脫羧與D典型脂肪酸β氧化在粒線體；C氧化磷酸化在粒線體內膜。β氧化另有peroxisomal形式，不影響本題典型比較。",
            "trap": "記典型位置，同時保留peroxisome例外。"
          }
        ]
      },
      {
        "id": "group-2",
        "title": "碳重排與速率限制",
        "topic": "topic-3",
        "summary": "比較氧化段的G6PD與非氧化段的碳搬運。",
        "questions": [
          {
            "number": 80,
            "text": "80.下列關於戊糖磷酸途徑(pentose phosphate pathway)的敘述,何者錯誤? \n \nA.產生NADPH供還原反應使用 \nB.產物可轉換成ribose-5-phosphate供核苷酸合成使用 \nC.反應中glucose-6-phosphate dehydrogenase缺乏會導致蠶豆症的發生\nD.該反應速率限制酵素(rate limiting enzyme)為6-phospho-gluco-lactonase \n",
            "regions": [
              {
                "page": 12,
                "rect": [
                  30.0,
                  359.17,
                  570.0,
                  467.27
                ]
              }
            ],
            "id": "107-1-1-80",
            "year": 107,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/107/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=107020&c=301&s=55&q=1&verify=step1-20261013-107020-301-55-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=107020&y=2018",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/107/1/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=107020&c=301&s=55&q=1&verify=step1-20261013-107020-301-55-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "D"
            ],
            "point": "碳重排與速率限制",
            "analysis": "D錯：速率限制酵素是G6PD，非lactonase。A NADPH供還原反應、B五碳糖轉核糖、C G6PD缺乏與蠶豆症的連結皆成立。",
            "trap": "Lactonase開環，不是主要還原力需求開關。"
          },
          {
            "number": 87,
            "text": "87.在五碳糖磷酸途徑中(pentose phosphate pathway),核酮糖5-磷酸(ribulose 5-phosphate)可經由何\n種酵素或代謝過程,轉換成glucose 6-phosphate? \n \nA.單碳代謝作用(one carbon metabolism) \nB.轉酮酶和轉醛醇酶(transketolase and transaldolase) \nC.磷酸五碳糖甲基轉移酶及其羥化酶(phosphopentose methyltransferase and hydroxylase) \nD.磷酸五碳糖羧化酶及其還原酶(phosphopentose carboxylase and reductase) \n",
            "regions": [
              {
                "page": 17,
                "rect": [
                  30.0,
                  399.81,
                  570.32,
                  549.83
                ]
              }
            ],
            "id": "114-1-1-87",
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
            "point": "碳重排與速率限制",
            "analysis": "B的transketolase及transaldolase參與將五碳糖重排成F6P與GAP，再經相應反應接回G6P。A單碳代謝不是這組重排；C、D所列酵素組合非此典型路徑。",
            "trap": "兩個重排酵素不是各自直接把一個5C變成6C；還有中間物與後續酵素。"
          }
        ]
      },
      {
        "id": "group-3",
        "title": "紅血球的還原力與能量分工",
        "topic": "topic-6",
        "summary": "NADPH、ATP及2,3-BPG分屬不同功能。",
        "questions": [
          {
            "number": 43,
            "text": "43 \n下列那種酵素活性高低會影響NADPH 的形成以及glutathione 的還原狀態? \nAGlucose 6-phosphate dehydrogenase \nBPyruvate dehydrogenase \nCLactate dehydrogenase  \nDAlcohol dehydrogenase \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  459.48,
                  570.0,
                  499.98
                ]
              }
            ],
            "id": "98-2-2-43",
            "year": 98,
            "session": 2,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/98/2/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=098140&c=103&s=c021&q=1&verify=step1-20261013-098140-103-c021-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=098140&y=2009",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/98/2/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=098140&c=103&s=c021&q=1&verify=step1-20261013-098140-103-c021-M",
            "corrected": true,
            "answerVersion": "M",
            "point": "紅血球的還原力與能量分工",
            "analysis": "A G6PD影響PPP的NADPH供應，再影響GSH再生。B PDH不在成熟紅血球運作；C LDH主要處理NADH/NAD⁺與lactate；D alcohol dehydrogenase非此抗氧化供應主軸。",
            "trap": "G6PD不直接催化GSSG還原，需接glutathione reductase。"
          },
          {
            "number": 38,
            "text": "38.下列關於紅血球醣代謝之敘述,何者正確? \n \nA.由糖解作用(glycolysis)產生的ATP是紅血球主要的能量來源 \nB.紅血球中糖解作用(glycolysis)除用於產生能量外並無其他功能 \nC.克氏循環(TCA cycle)會消耗少部分紅血球所攜帶的氧氣 \nD 紅血球中五碳糖磷酸途徑(pentose phosphate pathway)係在粒線體中進行\n \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  738.28,
                  570.0,
                  807.0
                ]
              }
            ],
            "id": "105-1-2-38",
            "year": 105,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/105/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=105020&c=301&s=66&q=1&verify=step1-20261013-105020-301-66-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=105020&y=2016",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/105/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=105020&c=301&s=66&q=1&verify=step1-20261013-105020-301-66-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "A"
            ],
            "point": "紅血球的還原力與能量分工",
            "analysis": "A正確：成熟紅血球以糖解供ATP。B忽略2,3-BPG等支路功能；C成熟紅血球無TCA；D PPP在胞質，不在粒線體。",
            "trap": "血球攜氧不等於以呼吸鏈消耗氧產ATP。"
          },
          {
            "number": 90,
            "text": "90.下列關於glucose在人類的紅血球中代謝的敘述,何者錯誤?\n \nA.glucose代謝最終產物之一為lactic acid\nB.pyruvate可轉化為acetyl-CoA進一步代謝\nC.提供NADPH使glutathione保持還原狀態\nD.glucose也可以利用pentose phosphate途徑代謝\n",
            "regions": [
              {
                "page": 16,
                "rect": [
                  30.0,
                  538.22,
                  569.96,
                  665.34
                ]
              }
            ],
            "id": "113-2-1-90",
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
            "point": "紅血球的還原力與能量分工",
            "analysis": "B錯：成熟紅血球無粒線體PDH/TCA系統。A lactate是糖解末端產物；C PPP供NADPH維持GSH；D可走PPP均正確。",
            "trap": "沒有粒線體，仍有胞質PPP。"
          }
        ]
      },
      {
        "id": "group-4",
        "title": "半乳糖與UDP-glucose",
        "topic": "topic-10",
        "summary": "把GALT交換反應與乳糖消化分開。",
        "questions": [
          {
            "number": 37,
            "text": "37 \n下列何種情況,導致遺傳疾病半乳糖血症(galactosemia)的發生? \nA缺少fructokinase \nB缺少UDP-glucose:galactose 1-phosphate uridylyltransferase \nC無法分解lactose \nD過度攝取galactose \n",
            "regions": [
              {
                "page": 5,
                "rect": [
                  30.0,
                  145.94,
                  570.22,
                  247.94
                ]
              }
            ],
            "id": "103-1-2-37",
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
            "point": "半乳糖與UDP-glucose",
            "analysis": "B GALT缺乏對應classic galactosemia。A fructokinase缺乏屬果糖尿；C無法分解乳糖涉及腸道lactase，不等於Leloir缺陷；D單純攝取過多不是這個遺傳酵素缺陷的定義。",
            "trap": "Galactosemia還有其他酵素類型；此題B指經典型。"
          },
          {
            "number": 39,
            "text": "39 \nUDP-glucose 參與下列那個代謝路徑? \nA五碳糖磷酸途徑(pentose phosphate pathway) \nB肝醣分解(glycogen degradation) \nC糖解作用(glycolysis) \nD半乳糖轉變為葡萄糖(epimerization of galactose to glucose) \n",
            "regions": [
              {
                "page": 5,
                "rect": [
                  30.0,
                  349.94,
                  570.22,
                  451.94
                ]
              }
            ],
            "id": "103-1-2-39",
            "year": 103,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/103/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=103030&c=101&s=0102&q=1&verify=step1-20261013-103030-101-0102-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=103030&y=2014",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/103/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=103030&c=101&s=0102&q=1&verify=step1-20261013-103030-101-0102-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "D"
            ],
            "point": "半乳糖與UDP-glucose",
            "analysis": "D正確：UDP-glucose參與GALT反應，UDP-galactose再由epimerase互轉。A PPP、B典型肝醣分解、C糖解皆不以UDP-glucose作此步驟的必要受質。",
            "trap": "題目用epimerization概括；實際是GALT交換加GALE的UDP糖互轉。"
          }
        ]
      }
    ]
  }
});
