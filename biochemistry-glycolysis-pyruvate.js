biochemistryChapters.push({
  "id": "glycolysis-pyruvate",
  "number": "08",
  "title": "糖解作用與丙酮酸代謝",
  "summary": "從機制與能量收支重新建立理解，配合算例、比較表與可追溯歷屆原題。",
  "sources": "Harper’s Illustrated Biochemistry, 31st ed., Ch. 17 Glycolysis & the Oxidation of Pyruvate（印刷頁157–163）；跨章連結另參Ch. 13與糖新生調控。",
  "references": "<p>Harper’s Illustrated Biochemistry, 31st ed., Ch. 17 Glycolysis & the Oxidation of Pyruvate（印刷頁157–163）；跨章連結另參Ch. 13與糖新生調控。</p><p>正文與教學圖為概念重組與原創說明，非逐段譯文。算例為明示條件的教學模型；歷屆原題、官方採計答案與更正版本沿用題庫，解析另行撰寫。精選題數不是完整出題頻率。</p><p>PDH組織與isoform調控核對：<a href=\"https://pubmed.ncbi.nlm.nih.gov/11642366/\" target=\"_blank\" rel=\"noopener noreferrer\">Distinct regulatory properties of pyruvate dehydrogenase kinase and phosphatase isoforms</a>；<a href=\"https://pubmed.ncbi.nlm.nih.gov/2557923/\" target=\"_blank\" rel=\"noopener noreferrer\">Ca²⁺與心臟粒線體PDH調控實驗</a>。</p>",
  "sections": [
    {
      "id": "topic-1",
      "title": "路徑目的與器官差異",
      "html": "<p>糖解作用位於細胞質，將一個六碳葡萄糖轉成兩個三碳pyruvate，淨得2\nATP及2\nNADH。路徑本身沒有直接消耗O₂的一步，但能否持續仍需再生NAD⁺。成熟紅血球沒有粒線體，只能把pyruvate主要轉為lactate再生NAD⁺；有粒線體的細胞可利用穿梭與呼吸鏈回收還原當量。</p>\n<p>不要把糖解與葡萄糖完全氧化混稱。糖解淨2\nATP是直接收支，完整氧化還包括PDH、TCA及氧化磷酸化。氧供足夠也不代表所有細胞不產乳酸；乳酸生成受通量、氧化能力與氧化還原狀態共同影響。</p>\n<p>讀每一步先看碳數、磷酸來源與去向、是否有電子轉移，再看ATP。這樣遇到抑制某酵素，能推上游累積、下游不足及能量損失，而不只是背順序。</p>\n<h3\nid=\"為什麼要先學器官再背共同路徑\">為什麼要先學器官，再背共同路徑？</h3>\n<p>肝臟在進食後可以把多餘葡萄糖導向氧化、肝醣與脂質合成；空腹時則需要保留或輸出葡萄糖。骨骼肌主要依自身收縮需求利用糖，不能把自己的G6P直接當成自由葡萄糖大量輸回血液。成熟紅血球沒有粒線體，即使血中氧很多也不能使用PDH、TCA與氧化磷酸化，所以胞質糖解對它是必要供能途徑。</p>\n<p>這些差異不表示三種細胞的糖解十步順序不同，而是入口酵素、激素反應、ATP需求與pyruvate出口不同。遇到「glucagon使糖解下降」，必須先確認是典型肝臟模型，不能直接套成運動肌肉同樣停止供能。</p>\n<h3 id=\"先寫總反應再往內拆\">先寫總反應，再往內拆</h3>\n<p>葡萄糖到pyruvate的常用總式為：glucose+2 ADP+2 Pi+2 NAD⁺→2 pyruvate+2\nATP+2 NADH+2 H⁺+2\nH₂O。它告訴你碳從6變兩個3，兩個無機Pi被用來幫助保存氧化能，電子交給NAD⁺，且沒有直接消耗氧。</p>\n<p>加上兩次LDH反應後，NADH與NAD⁺在總帳相消，得到葡萄糖到乳酸的淨直接ATP仍為2。不同pH轉換慣例的反應式可能省略部分H⁺或水，但碳、電子與ATP帳仍應一致。先掌握這個骨架，再記酵素不易迷路。</p>\n"
    },
    {
      "id": "topic-2",
      "title": "投資階段：先花兩個ATP",
      "html": "<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>步驟</th>\n<th>反應／酵素</th>\n<th>目的與能量</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>1</td>\n<td>Glucose→G6P；hexokinase/glucokinase</td>\n<td>用1 ATP將糖磷酸化</td>\n</tr>\n<tr class=\"even\">\n<td>2</td>\n<td>G6P⇌F6P；phosphoglucose isomerase</td>\n<td>醛糖轉酮糖，準備後續切割</td>\n</tr>\n<tr class=\"odd\">\n<td>3</td>\n<td>F6P→F1,6BP；PFK-1</td>\n<td>再用1 ATP，重要承諾步驟</td>\n</tr>\n<tr class=\"even\">\n<td>4</td>\n<td>F1,6BP⇌GAP+DHAP；aldolase</td>\n<td>六碳分成兩個三碳</td>\n</tr>\n<tr class=\"odd\">\n<td>5</td>\n<td>DHAP⇌GAP；triose phosphate isomerase</td>\n<td>兩份碳流皆進入GAP後半段</td>\n</tr>\n</tbody>\n</table></div>\n<p>第一步將葡萄糖留在細胞代謝池，但G6P也能走肝醣或磷酸戊糖途徑，故不是糖解的第一個專一承諾步驟。PFK-1使碳流更明確進入糖解；PFK-2則主要製造調節物F2,6BP，不能把兩個酵素當成連續的同名版本。</p>\n<p>Aldolase產物是GAP與DHAP各一，並非直接兩個GAP；經異構化後才讓一個葡萄糖的兩個三碳單位都走相同後半段。從第6步開始，每個葡萄糖的反應次數都要乘二。</p>\n<h3 id=\"第1至5步各解決一個化學問題\">第1至5步各解決一個化學問題</h3>\n<p>第1步在葡萄糖加上帶電的磷酸，使其不再是一般GLUT可直接運出的自由葡萄糖，並成為其他路徑可辨認的中間物。這筆ATP不是沒有回報：它協助保留與活化細胞內碳流，但不能保證所有G6P都會被送進糖解。</p>\n<p>第2步把醛糖轉成酮糖，讓羰基位置有利於後續切成兩個三碳單位。第3步再加一個磷酸到另一端；切開之後兩個三碳片段都保有磷酸，能繼續被代謝酵素處理。第4步aldolase切斷碳骨架，產生醛型GAP與酮型DHAP；第5步triose\nphosphate isomerase使DHAP加入GAP的後段路徑。</p>\n<p>單看DHAP⇌GAP的平衡偏向哪邊，不能斷定糖解一定停住；GAP持續被下一步消耗，可拉動異構化朝GAP前進。這正是第6章Q與產物移除觀念在真實路徑中的用法。</p>\n<h3 id=\"名字相似但功能不同\">名字相似但功能不同</h3>\n<p>Bisphosphate表示兩個磷酸分別接在不同位置，F1,6BP與F2,6BP是不同分子；不能只看「fructose加兩個磷酸」就視為同物。F1,6BP是糖解主路徑的受質，F2,6BP則是低濃度就可改變流量的調節物。PFK-1製造前者，PFK-2製造後者。</p>\n<p>閉卷檢查：從一個glucose到兩個GAP，共消耗2\nATP，尚未產生NADH，也沒有釋出CO₂。若這時已在帳上寫CO₂，就把PDH或TCA提早搬進糖解了。</p>\n"
    },
    {
      "id": "topic-3",
      "title": "回收階段：唯一氧化還原與兩次直接產ATP",
      "html": "<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>步驟</th>\n<th>反應／酵素</th>\n<th>每葡萄糖收支</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>6</td>\n<td>GAP→1,3-BPG；GAP dehydrogenase</td>\n<td>生成2 NADH，使用無機Pi</td>\n</tr>\n<tr class=\"even\">\n<td>7</td>\n<td>1,3-BPG→3PG；phosphoglycerate kinase</td>\n<td>生成2 ATP</td>\n</tr>\n<tr class=\"odd\">\n<td>8</td>\n<td>3PG⇌2PG；phosphoglycerate mutase</td>\n<td>調整磷酸位置</td>\n</tr>\n<tr class=\"even\">\n<td>9</td>\n<td>2PG⇌PEP；enolase</td>\n<td>脫水形成高轉移勢PEP</td>\n</tr>\n<tr class=\"odd\">\n<td>10</td>\n<td>PEP→pyruvate；pyruvate kinase</td>\n<td>生成2 ATP</td>\n</tr>\n</tbody>\n</table></div>\n<p>GAPDH將醛基氧化與Pi加入耦合，形成高轉移勢的1,3-BPG，不是消耗ATP來加這個磷酸。NAD⁺在此被還原成NADH；若NAD⁺耗盡，即使其他酵素都存在，後半段也無法持續。</p>\n<p>第7、10步皆是受質階層磷酸化。總生成4 ATP，扣除前段2 ATP，淨2\nATP。Pyruvate\nkinase雖名為kinase，此處磷酸從PEP交給ADP而形成ATP，不能看到kinase就一律判斷耗ATP。</p>\n<h3 id=\"gapdh如何把氧化能保存下來\">GAPDH如何把氧化能保存下來？</h3>\n<p>GAP的醛基若直接被氧化成游離羧酸，能量很容易散失。GAPDH先藉活性位cysteine形成共價中間物，氧化時把電子交給NAD⁺，並形成具有能量轉移能力的酵素硫酯中間物；無機Pi再參與生成1,3-BPG的醯基磷酸。這把氧化與磷酸化耦合，為下一步直接生成ATP作準備。</p>\n<p>1,3-BPG的「1位」醯基磷酸轉移勢高，可交給ADP成ATP；留下的3PG在「3位」仍保有磷酸。這不是同一分子一次把兩個磷酸全交出。之後mutase把磷酸移至2位，enolase脫水成PEP，最後pyruvate\nkinase把磷醯基交給ADP；產物轉成穩定酮型pyruvate，幫助驅動反應。</p>\n<h3 id=\"逐步驗算每葡萄糖的atp\">逐步驗算每葡萄糖的ATP</h3>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>時點</th>\n<th style=\"text-align: right;\">當步ATP變化</th>\n<th style=\"text-align: right;\">累積直接ATP淨值</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Hexokinase後</td>\n<td style=\"text-align: right;\">−1</td>\n<td style=\"text-align: right;\">−1</td>\n</tr>\n<tr class=\"even\">\n<td>PFK-1後</td>\n<td style=\"text-align: right;\">−1</td>\n<td style=\"text-align: right;\">−2</td>\n</tr>\n<tr class=\"odd\">\n<td>兩次PGK後</td>\n<td style=\"text-align: right;\">+2</td>\n<td style=\"text-align: right;\">0</td>\n</tr>\n<tr class=\"even\">\n<td>兩次pyruvate kinase後</td>\n<td style=\"text-align: right;\">+2</td>\n<td style=\"text-align: right;\">+2</td>\n</tr>\n</tbody>\n</table></div>\n<p>GAPDH雖不直接產ATP，卻是PGK能產ATP的前提。若問「哪一步產生NADH」，選GAPDH；問「哪一步直接形成ATP」，則是PGK與pyruvate\nkinase。把酵素名含kinase視為一定消耗ATP會選錯，必須看磷酸從誰轉給誰。</p>\n<p>常見陷阱：忘記後半段乘二，算成產2、耗2而淨0；或把2\nNADH不問去向就各加固定ATP。先分開直接ATP與電子的未結帳收益，最後再合併。</p>\n"
    },
    {
      "id": "topic-4",
      "title": "Hexokinase與glucokinase的分工",
      "html": "<p>多數組織hexokinase對葡萄糖親和力較高，在低葡萄糖時仍能進行磷酸化，且常受G6P產物抑制。肝臟與胰島β細胞的glucokinase在較高葡萄糖濃度時更活躍，參與餐後處理及葡萄糖感測；不應把較高半飽和濃度解讀成沒有功能。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>特性</th>\n<th>一般hexokinase</th>\n<th>Glucokinase</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>常見組織定位</td>\n<td>多種組織</td>\n<td>肝、胰島β細胞等</td>\n</tr>\n<tr class=\"even\">\n<td>葡萄糖反應範圍</td>\n<td>較低濃度即可作用</td>\n<td>較高濃度時通量增加明顯</td>\n</tr>\n<tr class=\"odd\">\n<td>G6P產物抑制</td>\n<td>常見</td>\n<td>不受同樣直接抑制</td>\n</tr>\n<tr class=\"even\">\n<td>生理角色</td>\n<td>基本葡萄糖利用</td>\n<td>餐後處理、感測</td>\n</tr>\n</tbody>\n</table></div>\n<p>Glucokinase具有特別的動力學與調節，不宜無條件套用最簡Michaelis–Menten模型；教材常以較高Km概括，嚴格可用S₀.₅描述。肝的glucokinase也受GKRP及區室分布調控，β細胞的功能不能照搬所有肝調控細節。</p>\n<h3\nid=\"相同反應為何需要不同酵素特性\">相同反應，為何需要不同酵素特性？</h3>\n<p>一般hexokinase在較低葡萄糖濃度就能有效工作，符合許多周邊組織持續利用葡萄糖的需求；累積G6P可抑制它，避免下游已塞車時仍不斷把糖困入。Glucokinase在較高葡萄糖時活性變化較明顯，適合肝臟在餐後增加處理能力，也參與β細胞的葡萄糖感測。</p>\n<p>GK的葡萄糖反應具有動力學協同性，嚴格描述常用S₀.₅而不是把它完全當成標準Michaelis–Menten酵素；國考常以「較高Km」作比較速記，知道它代表較高濃度才達半最大速率即可，不要因此推論其多聚體結構。</p>\n<p>肝臟GKRP可將GK隔離於細胞核等方式調節可用量；F6P促進GKRP相關抑制，而F1P可解除。G6P不直接回饋抑制GK，並不代表GK完全沒有調控。F1P、F6P、F1,6BP與F2,6BP四個名稱只差一點，作用位置卻不一樣。</p>\n<h3 id=\"β細胞串聯到生理學\">β細胞串聯到生理學</h3>\n<p>葡萄糖代謝增加使ATP/ADP比上升，ATP-sensitive K⁺\nchannel關閉，K⁺外流減少而膜去極化，電壓依賴Ca²⁺通道開啟，Ca²⁺進入促進insulin釋放。GK是感測鏈的一部分，並不是直接以磷酸化方式把insulin囊泡推出去。將「代謝訊號→電位→鈣→分泌」串起來，便能與之前生理學內容接上。</p>\n"
    },
    {
      "id": "topic-5",
      "title": "PFK-1：能量狀態與F2,6BP",
      "html": "<p>ATP是PFK-1反應的受質，但高ATP也可在調節位點抑制，反映能量充足；AMP等低能量訊號常促進糖解。Citrate可支持高能量／充足碳源訊號；低pH在肌肉中可抑制PFK-1，避免糖解與酸負荷持續增加。</p>\n<p>F2,6BP是強力調節分子，活化PFK-1並抑制FBPase-1，讓糖解與糖新生朝相反方向調節。它不是PFK-1生成的F1,6BP，也不是必須依序流向pyruvate的普通糖解中間物。</p>\n<p>在典型肝臟模型，glucagon→cAMP/PKA→磷酸化肝型PFK-2/FBPase-2，偏向降低F2,6BP，使糖解減少、糖新生增加；insulin相反。心臟等不同isoform可能對磷酸化有不同反應，所以不能說所有器官的PFK-2一磷酸化都受抑制。</p>\n<h3\nid=\"atp既是受質又是抑制訊號不矛盾嗎\">ATP既是受質又是抑制訊號，不矛盾嗎？</h3>\n<p>PFK-1需要ATP提供磷醯基，但高ATP也能透過調節作用降低酵素對F6P的有效反應，表示細胞能量充足。受質結合與調節作用是不同層次；不能用「反應需要ATP」否定ATP高時可能抑制。AMP與ADP提供缺能訊號，F2,6BP則提高糖解傾向；citrate可傳達氧化代謝碳源較充足的訊息。</p>\n<p>肌肉在強烈活動時AMP有利糖解，但H⁺累積、pH下降可抑制PFK-1，限制持續酸化。調控不是只有一個開關：缺能促進與酸性抑制可能同時存在，淨流量由多個因素決定。</p>\n<h3\nid=\"肝臟飽食與空腹一步一步走訊號\">肝臟飽食與空腹：一步一步走訊號</h3>\n<p>典型肝臟空腹模型是glucagon→cAMP→PKA→肝型PFK-2/FBPase-2磷酸化；PFK-2活性下降、FBPase-2活性上升，F2,6BP下降，於是PFK-1的活化減少，FBPase-1所受抑制解除，方向偏向糖新生。Insulin支持相反方向，餐後F2,6BP上升有利糖解。</p>\n<p>這段有四種酵素名稱：PFK-2製造調節物；FBPase-2分解調節物；PFK-1執行糖解主路徑；FBPase-1執行糖新生繞道。若把後兩者與前兩者混成同一對，整條推論會失效。</p>\n<p>「磷酸化使PFK-2下降」需附上肝型條件。心肌等isoform可有不同反應，不可把肝臟的激素規則無條件套用全身。</p>\n"
    },
    {
      "id": "topic-6",
      "title": "Pyruvate kinase與不可逆關卡",
      "html": "<p>糖解在一般細胞條件下的重要不可逆步驟為hexokinase/glucokinase、PFK-1與pyruvate\nkinase。這些反應不能在糖新生中簡單把箭頭反過來，需另有繞道。其他接近平衡步驟可依濃度改變方向。</p>\n<p>F1,6BP可feed-forward活化pyruvate\nkinase，表示上游碳流已進來，應支持後半段排出。ATP與alanine等則可在適當組織情境下抑制。肝型pyruvate\nkinase受glucagon/PKA磷酸化抑制，避免飢餓時把準備用於糖新生的碳又拉回糖解。</p>\n<p>不可逆不表示宇宙中任何條件都不可能反向，而是正常生理條件下淨ΔG很負、反向通量不具實際路徑作用。這個詞必須和細胞濃度及旁路酵素一起理解。</p>\n<h3\nid=\"為什麼上游產物要活化下游酵素\">為什麼上游產物要活化下游酵素？</h3>\n<p>F1,6BP升高表示前半段已把碳流投入糖解，feed-forward活化pyruvate\nkinase可協助下游處理即將到來的中間物。這和終產物回饋抑制方向不同：前者是提前通知，後者是產品充足後限制再生產。ATP與alanine等訊號則可降低某些PK\nisoform的活性，提示能量或碳氮需求已較滿足。</p>\n<p>肝型PK可受PKA磷酸化抑制，與空腹保留三碳前驅物供糖新生相符；骨骼肌不能直接照搬這條肝型激素規則。最容易記錯的是把F1,6BP與F2,6BP對調：前者活化PK，後者重要作用在PFK-1與FBPase-1。</p>\n<h3\nid=\"三個不可逆關卡如何連到糖新生\">三個不可逆關卡如何連到糖新生？</h3>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>糖解關卡</th>\n<th>糖新生如何繞道</th>\n<th>先記住的理由</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Hexokinase/GK</td>\n<td>Glucose-6-phosphatase</td>\n<td>用水解釋放葡萄糖，不是直接反向產ATP</td>\n</tr>\n<tr class=\"even\">\n<td>PFK-1</td>\n<td>Fructose-1,6-bisphosphatase</td>\n<td>和PFK-1互相反向調節，避免白白耗ATP</td>\n</tr>\n<tr class=\"odd\">\n<td>Pyruvate kinase</td>\n<td>Pyruvate carboxylase加PEPCK</td>\n<td>需先經OAA，投入ATP與GTP</td>\n</tr>\n</tbody>\n</table></div>\n<p>本章先建立「逆向不能原路倒車」的理由；糖新生章再詳算跨區室與成本。不要把PEPCK放進葡萄糖到acetyl-CoA的正向路徑。</p>\n"
    },
    {
      "id": "topic-7",
      "title": "乳酸：再生NAD⁺而非額外生成ATP",
      "html": "<p>LDH催化pyruvate+NADH+H⁺⇌lactate+NAD⁺。這一步本身不再產ATP，卻回收GAPDH所需NAD⁺，讓糖解持續。氧化磷酸化能力不足或糖解通量很高時，乳酸路徑可支援胞質氧化還原平衡。</p>\n<p>將糖解與LDH加總，NADH/NAD⁺被循環再生，淨產物為兩個lactate與2\nATP等，而非同時留下2\nNADH作額外能量收益。不要把已被LDH消耗的NADH又拿去算呼吸鏈ATP，否則重複計帳。</p>\n<p>Cori\ncycle中周邊乳酸可送肝轉回葡萄糖，將部分負擔轉到肝；肝糖新生耗能高於周邊糖解所得，因此整體不是免費循環。乳酸也可被其他組織氧化利用，不是只能被肝清除的廢物。</p>\n<h3\nid=\"為什麼pyruvate接受電子就能讓糖解繼續\">為什麼pyruvate接受電子就能讓糖解繼續？</h3>\n<p>GAPDH每跑一次把NAD⁺變NADH；若沒有再生，有限NAD⁺池會逐漸耗盡。LDH將pyruvate還原成lactate，同時把NADH氧化回NAD⁺，讓GAPDH再次工作。其直接收益是維持電子接受者供應，ATP仍來自PGK與PK。</p>\n<p>若同一批NADH已交給LDH，就不能又假定它穿梭進粒線體產ATP。這是乳酸情境最常見的雙重計帳。LDH反應可逆：有氧化能力的組織可把lactate轉回pyruvate再利用，所以乳酸是可交換的代謝燃料，不只是無用廢物。</p>\n<h3 id=\"cori-cycle的成本由誰負擔\">Cori cycle的成本由誰負擔？</h3>\n<p>周邊組織由一個glucose生成兩個lactate得2\nATP；肝臟把兩個lactate再製成一個glucose，糖新生消耗4 ATP與2\nGTP，共6個高能磷酸鍵當量。因此整個循環淨耗4個當量，能量由肝臟其他氧化燃料支援。它把局部緊急ATP供應與全身回收工作分開，不是永動機。</p>\n<p>乳酸上升可能來自生成增加、利用或清除下降，或兩者並存。高糖解通量、氧化能力受限與肝臟處理能力改變都需依情境考慮；只憑乳酸不能一律斷言完全缺氧。LDH的pyruvate→lactate反應本身還消耗H⁺，不能把運動相關酸化簡化成這一步直接釋出所有酸。</p>\n"
    },
    {
      "id": "topic-8",
      "title": "紅血球旁路與抑制物",
      "html": "<p>紅血球2,3-BPG旁路由1,3-BPG分流，繞過phosphoglycerate\nkinase的ATP生成，代價是少回收該步ATP，收益是調節Hb釋氧。若某一份三碳中間物走旁路，失去一次該步ATP；不能不看分流比例就把整個葡萄糖收支固定說成零。</p>\n<p>Arsenate可在GAPDH反應中代替Pi形成不穩定產物，繞過原本的ATP回收，因此糖解碳流可繼續但能量收益減少；arsenite則與lipoate相關酵素抑制相連，兩者不可因中文都叫砷就當成同一作用。Fluoride可抑制enolase，是另一個常見辨認點。</p>\n<p>Pyruvate\nkinase缺陷使紅血球ATP生成不足，膜維持受影響，可連到溶血；G6PD缺陷則主要涉及NADPH與抗氧化能力。兩者都能有紅血球問題，但能量供應與抗氧化還原力是不同故障。</p>\n<h3 id=\"bpg旁路用能量換氧釋放\">2,3-BPG旁路用能量換氧釋放</h3>\n<p>1,3-BPG可經bisphosphoglycerate\nmutase轉為2,3-BPG，再水解成3PG返回主路徑。這繞過PGK，故每一個走旁路的三碳分子少回收1\nATP。2,3-BPG與去氧Hb結合，降低氧親和力、支持周邊釋氧；它是紅血球代謝與氧解離曲線的直接連結。</p>\n<p>假設一個glucose的兩份三碳流都完全走旁路，再到lactate：前段花2\nATP，PK仍回收2，但PGK的2\nATP全失去，淨收益為0。真實細胞只分配部分通量走旁路，不應把這個極端算例當作紅血球日常全部糖解的固定產率。</p>\n<h3 id=\"三種毒物抑制點要拆開\">三種毒物／抑制點要拆開</h3>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>物質</th>\n<th>作用層次</th>\n<th>推理結果</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Arsenate，As(V)</td>\n<td>可取代GAPDH步驟的Pi，形成易水解產物</td>\n<td>跳過PGK回收ATP；碳流可繼續</td>\n</tr>\n<tr class=\"even\">\n<td>Arsenite，As(III)</td>\n<td>影響還原型lipoamide的巰基相關功能</td>\n<td>PDH等含lipoate複合體受限</td>\n</tr>\n<tr class=\"odd\">\n<td>Fluoride</td>\n<td>抑制enolase</td>\n<td>PEP形成與後續PK供能受影響</td>\n</tr>\n</tbody>\n</table></div>\n<p>若理想化假設兩個GAP都因arsenate跳過PGK、其餘正常到lactate，淨ATP同樣由2降到0。這不是說真實中毒只作用這一點，而是題目指定模型的收支。</p>\n<h3\nid=\"pk缺陷與g6pd缺陷先找壞掉的是哪本帳\">PK缺陷與G6PD缺陷，先找壞掉的是哪本帳</h3>\n<p>PK缺陷主要使糖解ATP不足，紅血球膜幫浦與膜穩定性受影響，易溶血；G6PD缺陷主要降低PPP供應NADPH，使GSH再生與抗氧化能力受限。兩者都可溶血，卻不是同一種故障。把ATP、NADH、NADPH寫成三欄，便不會因名稱相近混淆。</p>\n"
    },
    {
      "id": "topic-9",
      "title": "PDH：糖解進入氧化代謝的不可逆橋樑",
      "html": "<p>Pyruvate進入粒線體後，PDH\ncomplex催化pyruvate+CoA+NAD⁺→acetyl-CoA+CO₂+NADH。每個pyruvate產一個NADH與一個CO₂，不直接產ATP；每個葡萄糖有兩個pyruvate，所以反應兩次。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>組件／輔因子</th>\n<th>核心工作</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>E1與TPP（B1）</td>\n<td>脫羧並處理羥乙基中間物</td>\n</tr>\n<tr class=\"even\">\n<td>E2與lipoamide、CoA（B5）</td>\n<td>氧化／轉移醯基，形成acetyl-CoA</td>\n</tr>\n<tr class=\"odd\">\n<td>E3與FAD（B2）、NAD⁺（B3）</td>\n<td>再氧化lipoamide，最後把電子交給NAD⁺</td>\n</tr>\n</tbody>\n</table></div>\n<p>五個常背輔因子是TPP、lipoate、CoA、FAD、NAD⁺，不是PLP。Acetyl-CoA無法藉PDH反向變回pyruvate，所以偶數鏈脂肪酸生成的acetyl-CoA一般不能提供人類淨糖新生碳；這與glycerol能進入糖新生並不矛盾。</p>\n<h3 id=\"讓五個輔因子各做一件工作\">讓五個輔因子各做一件工作</h3>\n<p>第一棒E1利用TPP穩定脫羧後的二碳片段，釋出CO₂；第二棒把片段轉交E2的lipoamide，同時氧化成醯基，lipoamide的二硫鍵被還原。CoA再接受醯基形成acetyl-CoA，碳的工作完成，但還原型lipoamide還必須恢復才能接下一輪。</p>\n<p>第三棒E3的FAD接受lipoamide電子，接著NAD⁺再把電子接走，最後輸出NADH並再生FAD。因此FAD是複合體內部接力，淨產物不是另多一個可送呼吸鏈的FADH₂。若同時把PDH算成1\nNADH加1 FADH₂，就是把接力中間態重複計入收益。</p>\n<p>Lipoate藉amide鍵連在E2的lysine上，形成能在活性位之間移動的長臂。把多酵素集中可提高中間物傳遞效率並減少副反應，這叫substrate\nchanneling；不是把所有中間物先釋入基質才由下一個酵素碰運氣接走。</p>\n<h3 id=\"用碳與輔因子排除選項\">用碳與輔因子排除選項</h3>\n<p>每個pyruvate有3碳，釋1個CO₂，剩2碳成acetyl-CoA；每葡萄糖則重複兩次。B1對應TPP、B2對應FAD、B3對應NAD⁺、B5對應CoA；B6的PLP用於如ALT轉胺，B7的biotin用於如pyruvate\ncarboxylase羧化，二者不是PDH五輔因子之一。</p>\n<p>PDH與α-ketoglutarate\ndehydrogenase有相似的氧化脫羧輔因子架構。讀到B1缺乏時要想到不只一個步驟可能受影響；但不要把所有需B1的酵素都誤認為同一種脫羧反應，例如transketolase負責碳單位轉移。</p>\n"
    },
    {
      "id": "topic-10",
      "title": "PDH調控與pyruvate的其他去向",
      "html": "<figure><div class=\"table-scroll\" tabindex=\"0\"><img src=\"assets/biochemistry/energy-pyruvate-fates.svg\" alt=\"Pyruvate四種去向及其區室與目的\" style=\"width:100%;min-width:520px;max-width:720px;height:auto\"></div><figcaption>Pyruvate四種去向及其區室與目的。手機可橫向捲動閱讀；詳細條件與收支見本節。</figcaption></figure><p>PDH kinase磷酸化使PDH失活，PDH\nphosphatase去磷酸化使其活化。高NADH、acetyl-CoA與能量充足狀態支持關閉進一步氧化碳流；pyruvate、ADP等訊號可抑制kinase，肌肉Ca²⁺可促進phosphatase而配合收縮供能。調控的具體強度與isoform、組織有關。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>去向</th>\n<th>酵素</th>\n<th>主要目的</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Lactate</td>\n<td>LDH</td>\n<td>再生胞質NAD⁺</td>\n</tr>\n<tr class=\"even\">\n<td>Acetyl-CoA</td>\n<td>PDH</td>\n<td>進入氧化／生合成碳流</td>\n</tr>\n<tr class=\"odd\">\n<td>Oxaloacetate</td>\n<td>Pyruvate carboxylase，biotin、ATP</td>\n<td>補充TCA與糖新生</td>\n</tr>\n<tr class=\"even\">\n<td>Alanine</td>\n<td>ALT，PLP</td>\n<td>轉胺與氮／碳運輸</td>\n</tr>\n</tbody>\n</table></div>\n<p>Pyruvate\ncarboxylase受acetyl-CoA活化，與PDH在碳流配置上相互配合。TPP不足或PDH功能受損時，pyruvate較可能流向lactate等，必須從反應瓶頸理解，而不是看到乳酸上升就只想到沒有氧。</p>\n<h3 id=\"pdh-kinase是煞車的開關\">PDH kinase是煞車的開關</h3>\n<p>先記住PDH被磷酸化後活性下降。若高NADH/NAD⁺、高acetyl-CoA/CoA及高能量狀態促進PDH\nkinase，結果就是讓PDH關閉；若pyruvate或ADP抑制kinase，則減少這種關閉作用。不能看到「kinase被抑制」便直覺選「整條代謝下降」，要再追一層它原本抑制誰。</p>\n<p>運動肌肉Ca²⁺增加，一方面引發收縮需求，另一方面可促進PDH\nphosphatase，使PDH去磷酸化活化，供應更多acetyl-CoA進氧化代謝。這讓需求與供給有前饋配合。各PDK、PDP\nisoform與組織反應不同，以上是常用整體教學模型。</p>\n<h3\nid=\"pyruvate四個出口用需要補什麼來判斷\">Pyruvate四個出口，用需要補什麼來判斷</h3>\n<p>需要胞質NAD⁺時可走LDH；需要acetyl-CoA進氧化時走PDH；需要補OAA或糖新生時走PC；需要交換胺基、運輸氮時可走ALT。PC在粒線體，使用ATP、biotin與碳酸氫根，受acetyl-CoA活化；ALT使用PLP，把pyruvate與glutamate轉成alanine與α-ketoglutarate。四者的輔因子、碳數與目的都不同。</p>\n<p>當acetyl-CoA已多而OAA不足，再把pyruvate全送PDH未必有利；活化PC能補充OAA，協助TCA或糖新生的碳流配置。此時選擇要結合器官與狀態，不能把「acetyl-CoA活化PC」誤寫成「acetyl-CoA可經PDH逆向變葡萄糖」。</p>\n<h3 id=\"機轉情境有氧仍乳酸增加\">機轉情境：有氧仍乳酸增加</h3>\n<p>若PDH受損，pyruvate進acetyl-CoA的出口變窄，可較多轉向lactate及alanine。這與缺氧造成呼吸鏈再氧化不足不同，卻可能都見到乳酸增加。B1不足也可能限制TPP依賴代謝；不能只用單一代謝物的變化推定唯一病因。考題應合併酵素、輔因子、氧供與其他線索判斷。</p>\n"
    },
    {
      "id": "topic-11",
      "title": "能量總帳與閉卷重建",
      "html": "<p>葡萄糖到兩個pyruvate：直接淨2\nATP與2胞質NADH；再經PDH：增加2基質NADH、2 acetyl-CoA與2\nCO₂。到這裡還沒有把acetyl-CoA在TCA完全氧化，也不能直接宣稱已得到整個葡萄糖的30/32\nATP。</p>\n<p>若只算糖解到pyruvate並允許胞質NADH經呼吸鏈回收，使用2.5或1.5的穿梭估算，可得總約7或5\nATP當量，其中直接ATP仍只有2。若走lactate，NADH用於再生NAD⁺，淨直接收益仍2\nATP。</p>\n<p>閉卷畫圖時先畫三個不可逆關卡，再補唯一NADH生成步驟與兩個ATP回收步驟，最後畫pyruvate四個去向。能說出每個關卡的目的、訊號與能量帳，才算把路徑讀懂。</p>\n<h3 id=\"五種題目邊界用同一張帳回答\">五種題目邊界，用同一張帳回答</h3>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>題幹終點與條件</th>\n<th style=\"text-align: right;\">直接ATP淨值</th>\n<th>另有什麼待處理／已回收</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Glucose→2 pyruvate，不算後續氧化</td>\n<td style=\"text-align: right;\">2</td>\n<td>2胞質NADH尚未換算</td>\n</tr>\n<tr class=\"even\">\n<td>Glucose→2 lactate</td>\n<td style=\"text-align: right;\">2</td>\n<td>NADH被LDH用掉，沒有淨NADH收益</td>\n</tr>\n<tr class=\"odd\">\n<td>到pyruvate，允許malate–aspartate回收電子</td>\n<td style=\"text-align: right;\">2</td>\n<td>加5，合計約7 ATP當量</td>\n</tr>\n<tr class=\"even\">\n<td>到pyruvate，允許glycerol-3-phosphate回收電子</td>\n<td style=\"text-align: right;\">2</td>\n<td>加3，合計約5 ATP當量</td>\n</tr>\n<tr class=\"odd\">\n<td>再加PDH到2 acetyl-CoA，尚未跑TCA</td>\n<td style=\"text-align: right;\">2</td>\n<td>另多2基質NADH；若全部氧化可再加約5</td>\n</tr>\n</tbody>\n</table></div>\n<p>完整葡萄糖氧化常用30或32，是連TCA與呼吸鏈一起算的總數，不是只跑十步糖解就拿到。若題幹只問受質階層磷酸化，NADH換得的ATP不能加進答案。</p>\n<h3 id=\"糖原來源為何可能淨得3-atp\">糖原來源為何可能淨得3 ATP？</h3>\n<p>若肌肉肝醣的α1→4鏈經phosphorylase釋出G1P，再轉G6P進糖解，省下hexokinase那1\nATP；在到lactate的模型可淨得3。這是以「由磷酸解釋出的葡萄糖殘基」計，不適用每個分支點的游離葡萄糖，也沒有把先前合成肝醣的成本納入。題目改了起點，能量帳就會變。</p>\n<h3 id=\"最後用一個綜合題自我檢查\">最後用一個綜合題自我檢查</h3>\n<p>假設紅血球的GAPDH正常，但NAD⁺無法再生。你應先預測GAPDH持續運作受限，後半段ATP供應下降；不能因為PGK與PK本身未被抑制，就認為ATP不受影響。若改成PDH受阻，成熟紅血球本來沒有這套粒線體途徑，不能套用同樣推論。</p>\n<p>真正讀懂的標準，是換起點、換器官、換抑制點時仍能重算。先畫三個不可逆關卡，再標GAPDH的電子、PGK和PK的ATP，最後加四個pyruvate出口；每支箭頭都說出原因，比一次默背十個酵素名字更能應付新題。</p>\n"
    }
  ],
  "questions": [
    {
      "title": "01　糖解每葡萄糖總生成與淨生成ATP各多少？",
      "prompt": "<p>糖解每葡萄糖總生成與淨生成ATP各多少？</p>",
      "answer": "<p>總生成4，前段消耗2，所以淨2；不可把總產量當淨產量。</p>"
    },
    {
      "title": "02　Aldolase是否直接產兩個GAP？",
      "prompt": "<p>Aldolase是否直接產兩個GAP？</p>",
      "answer": "<p>先產GAP與DHAP各一，再由triose phosphate isomerase轉成共同的GAP碳流。</p>"
    },
    {
      "title": "03　唯一直接產NADH的糖解酵素？",
      "prompt": "<p>唯一直接產NADH的糖解酵素？</p>",
      "answer": "<p>GAPDH；使用NAD⁺與無機Pi形成1,3-BPG，不消耗ATP來加該磷酸。</p>"
    },
    {
      "title": "04　糖解三個不可逆關卡？",
      "prompt": "<p>糖解三個不可逆關卡？</p>",
      "answer": "<p>Hexokinase/glucokinase、PFK-1、pyruvate kinase。糖新生需不同旁路。</p>"
    },
    {
      "title": "05　F1,6BP與F2,6BP角色相同嗎？",
      "prompt": "<p>F1,6BP與F2,6BP角色相同嗎？</p>",
      "answer": "<p>前者是糖解中間物且feed-forward活化pyruvate kinase；後者主要調節PFK-1與FBPase-1。</p>"
    },
    {
      "title": "06　LDH本身是否產ATP？",
      "prompt": "<p>LDH本身是否產ATP？</p>",
      "answer": "<p>不產，但把NADH氧化回NAD⁺，讓GAPDH及糖解可持續。</p>"
    },
    {
      "title": "07　走乳酸時能否再把糖解NADH算入呼吸鏈收益？",
      "prompt": "<p>走乳酸時能否再把糖解NADH算入呼吸鏈收益？</p>",
      "answer": "<p>不能，這些NADH已被LDH用來再生NAD⁺，再次計算會重複計帳。</p>"
    },
    {
      "title": "08　PDH每葡萄糖產多少NADH與CO₂？",
      "prompt": "<p>PDH每葡萄糖產多少NADH與CO₂？</p>",
      "answer": "<p>兩個pyruvate各反應一次，所以2 NADH與2 CO₂；PDH不直接產ATP。</p>"
    },
    {
      "title": "09　PDH五個輔因子與磷酸化結果？",
      "prompt": "<p>PDH五個輔因子與磷酸化結果？</p>",
      "answer": "<p>TPP、lipoate、CoA、FAD、NAD⁺；PDH kinase磷酸化使失活，phosphatase去磷酸化使活化。</p>"
    },
    {
      "title": "10　G6PD缺陷與pyruvate kinase缺陷的紅血球問題相同嗎？",
      "prompt": "<p>G6PD缺陷與pyruvate kinase缺陷的紅血球問題相同嗎？</p>",
      "answer": "<p>前者主要是NADPH與抗氧化能力不足，後者主要是ATP供應不足；不能只因都可溶血就當相同機制。</p>"
    }
  ],
  "recalls": [
    [
      "糖解不直接耗氧，為何仍要問NAD⁺如何再生？",
      "GAPDH持續消耗NAD⁺，必須用LDH或穿梭與呼吸鏈再生，否則通量受限。"
    ],
    [
      "前五步到底產生什麼、花多少？",
      "一個葡萄糖形成兩個GAP碳流，消耗2 ATP；尚未有NADH或CO₂生成。"
    ],
    [
      "GAPDH、PGK與PK各自在哪本帳上？",
      "GAPDH產NADH並建立1,3-BPG；PGK與PK直接產ATP，每葡萄糖各兩次。"
    ],
    [
      "GK不受G6P直接抑制，是否表示沒有調控？",
      "否，肝臟仍有GKRP及表現量等調控；GK也參與β細胞葡萄糖感測。"
    ],
    [
      "肝臟glucagon如何透過F2,6BP抑制糖解？",
      "PKA磷酸化肝型雙功能酵素，使F2,6BP下降，PFK-1活化減少且FBPase-1抑制解除。"
    ],
    [
      "F1,6BP對PK是什麼作用？",
      "Feed-forward活化；不要與調控PFK-1的F2,6BP互換。"
    ],
    [
      "Cori cycle為何不是免費回收葡萄糖？",
      "周邊得2 ATP，肝臟糖新生耗6個高能磷酸鍵當量，全身淨耗4。"
    ],
    [
      "兩份三碳流全走BPG旁路，直接淨ATP為何？",
      "省去PGK的2 ATP，前段耗2、PK得2，理想化全旁路模型淨0；真實通常只是部分通量。"
    ],
    [
      "PDH為何不能算1 NADH再加1 FADH₂？",
      "FAD是內部再氧化lipoamide的接力，電子最後交給NAD⁺；淨輸出只有NADH。"
    ],
    [
      "抑制PDH kinase會使PDH更活還是更不活？",
      "減少失活性磷酸化，有利保持PDH活性；需區分kinase與被調控的PDH。"
    ],
    [
      "葡萄糖到乳酸時可以再加兩個NADH的ATP嗎？",
      "不行，NADH已用於LDH再生NAD⁺；直接淨ATP為2，不能重複計帳。"
    ]
  ],
  "readingIntro": "先追碳數、磷酸與電子，再讀各器官的調控。最後用乳酸、BPG旁路、PDH與不同題幹起點重算能量帳。",
  "figure": "<p>閱讀順序：先理解名詞與方向，再逐步推導算例，最後用歷屆不同問法檢查；每節末有對應的閉卷回想。</p>",
  "exams": {
    "bankCount": 1022,
    "yearMin": 96,
    "yearMax": 115,
    "note": "人工精選並按解題機制分組，非完整頻率統計；各題保留原卷與答案連結。選項措辭有條件限制或歧義時，解析另列，不自行改寫官方採計答案。",
    "groups": [
      {
        "id": "group-1",
        "title": "糖解氧化還原與直接ATP",
        "topic": "topic-3",
        "summary": "區分GAPDH保存電子與PGK直接產ATP。",
        "questions": [
          {
            "number": 36,
            "text": "36 \n在糖解作用(glycolysis)中,下列那個酵素所催化的反應中,可直接生成ATP? \nA磷酸甘油酸變位酶(phosphoglycerate mutase) B磷酸甘油酸激酶(phosphoglycerate kinase) \nC烯醇化酶(enolase)  \nD磷酸果糖激酶(phosphofructokinase) \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  206.4,
                  570.0,
                  252.9
                ]
              }
            ],
            "id": "96-2-2-36",
            "year": 96,
            "session": 2,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/96/2/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=096130&c=103&s=2001&q=1&verify=step1-20261013-096130-103-2001-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=096130&y=2007",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/96/2/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=096130&c=103&s=2001&q=1&verify=step1-20261013-096130-103-2001-M",
            "corrected": true,
            "answerVersion": "M",
            "point": "糖解氧化還原與直接ATP",
            "analysis": "Phosphoglycerate kinase把1,3-BPG的磷酸轉給ADP直接生成ATP；PFK消耗ATP。 A只是移動磷酸位置；C脫水形成PEP但當步不直接產ATP；D PFK消耗ATP。B的高轉移勢1,3-BPG把磷醯基交給ADP，符合直接生成。",
            "trap": "回到本組對應小節，先重建因果，再判斷題目問正確或錯誤；本題的各選項差異見上方逐項解析。"
          },
          {
            "number": 88,
            "text": "88.下列那一個酵素所催化的反應為糖解作用(glycolysis)中唯一將電子轉移給NAD\n+之氧化還原反應? \nA.enolase \nB.glyceraldehyde-3-phosphate dehydrogenase \nC.pyruvate dehydrogenase \nD.pyruvate kinase \n",
            "regions": [
              {
                "page": 16,
                "rect": [
                  30.0,
                  474.76,
                  570.32,
                  603.76
                ]
              }
            ],
            "id": "112-1-1-88",
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
            "point": "糖解氧化還原與直接ATP",
            "analysis": "GAPDH是糖解直接將電子交給NAD⁺的步驟；PDH在糖解之後，不屬十步糖解。 A是脫水，D是磷醯基轉移；C PDH確實產NADH，但不屬十步糖解，位於之後的粒線體橋樑。B GAPDH才同時符合『糖解內』與『將電子交NAD⁺』兩個限制。",
            "trap": "回到本組對應小節，先重建因果，再判斷題目問正確或錯誤；本題的各選項差異見上方逐項解析。"
          }
        ]
      },
      {
        "id": "group-2",
        "title": "可逆性與糖新生繞道",
        "topic": "topic-6",
        "summary": "從三個不可逆關卡排除選項。",
        "questions": [
          {
            "number": 38,
            "text": "38 \n下列那種酶同時參與糖解(glycolysis)及葡萄糖新生(gluconeogenesis)之代謝途徑? \nA 3-磷酸甘油酸激酶(3-phosphoglycerate kinase) B六碳糖激酶(hexokinase) \nC磷酸果糖激酶-1(phosphofructokinase-1) \nD丙酮酸激酶(pyruvate kinase) \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  262.09,
                  570.22,
                  307.09
                ]
              }
            ],
            "id": "100-1-2-38",
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
            "point": "可逆性與糖新生繞道",
            "analysis": "Phosphoglycerate kinase反應可逆，供糖解與糖新生共用；其餘是糖解不可逆關卡。 B、C、D是糖解三大不可逆關卡，糖新生使用不同繞道酵素；A PGK可逆，因此兩方向共用。不能只因名字含kinase就認為只允許糖解方向。",
            "trap": "回到本組對應小節，先重建因果，再判斷題目問正確或錯誤；本題的各選項差異見上方逐項解析。"
          },
          {
            "number": 93,
            "text": "93.下列糖解作用(glycolysis)的步驟中,那一個酵素所催化的步驟在正常生理條件下為不可逆反應?\n \nA.enolase\nB.phosphoglycerate kinase\nC.pyruvate kinase\nD.aldolase\n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  359.71,
                  569.96,
                  463.17
                ]
              }
            ],
            "id": "111-1-1-93",
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
            "point": "可逆性與糖新生繞道",
            "analysis": "Pyruvate kinase為糖解三大不可逆步驟之一；其餘選項在一般條件下較可逆。 A enolase、B PGK與D aldolase可被逆向代謝利用；C PK的PEP轉移與pyruvate穩定化使正常糖解條件下高度偏向前進。不可逆性需附生理條件，不是名字決定。",
            "trap": "回到本組對應小節，先重建因果，再判斷題目問正確或錯誤；本題的各選項差異見上方逐項解析。"
          },
          {
            "number": 90,
            "text": "90.葡萄糖在細胞內代謝成acetyl-CoA 的過程中,不需要下列何者參與? \nA.glyceraldehyde 3-phosphate dehydrogenase \n\nB.pyruvate kinase \nC.pyruvate dehydrogenase complex \nD.phosphoenolpyruvate(PEP)carboxykinase \n",
            "regions": [
              {
                "page": 16,
                "rect": [
                  30.0,
                  753.76,
                  570.32,
                  806.92
                ]
              },
              {
                "page": 17,
                "rect": [
                  30.0,
                  28.0,
                  570.32,
                  114.76
                ]
              }
            ],
            "id": "112-1-1-90",
            "year": 112,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/112/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=112020&c=301&s=11&q=1&verify=step1-20261013-112020-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=112020&y=2023",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/112/1/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=112020&c=301&s=11&q=1&verify=step1-20261013-112020-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "D"
            ],
            "point": "可逆性與糖新生繞道",
            "analysis": "PEPCK用於糖新生方向的OAA→PEP，非葡萄糖到acetyl-CoA所需的糖解加PDH途徑。 A GAPDH與B PK屬糖解，C PDH把pyruvate轉為acetyl-CoA。D PEPCK由OAA製PEP，屬糖新生方向；題目沒有要求把碳逆向做回葡萄糖。",
            "trap": "回到本組對應小節，先重建因果，再判斷題目問正確或錯誤；本題的各選項差異見上方逐項解析。"
          },
          {
            "number": 89,
            "text": "89.下列那種酵素的活性並非調節糖解作用(glycolysis)速率的主要調控者? \nA.己糖激酶(hexokinase) \nB.磷酸果糖激酶(phosphofructokinase) \nC.烯醇化酶(enolase) \nD.丙酮酸激酶(pyruvate kinase) \n",
            "regions": [
              {
                "page": 16,
                "rect": [
                  30.0,
                  657.55,
                  570.0,
                  786.55
                ]
              }
            ],
            "id": "112-2-1-89",
            "year": 112,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/112/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=112100&c=301&s=11&q=1&verify=step1-20261013-112100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=112100&y=2023",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/112/2/medicine-1-S.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=S&code=112100&c=301&s=11&q=1&verify=step1-20261013-112100-301-11-S",
            "corrected": false,
            "answerVersion": "S",
            "originalAnswers": [
              "C"
            ],
            "point": "可逆性與糖新生繞道",
            "analysis": "Enolase不是題目三大不可逆調控關卡；主要為hexokinase、PFK-1、pyruvate kinase。 A、B、D是三個主要不可逆關卡，常承接能量與激素調控；C enolase雖是必要步驟且可被fluoride抑制，仍非這組主要調節關卡。必要不等於主要調控。",
            "trap": "回到本組對應小節，先重建因果，再判斷題目問正確或錯誤；本題的各選項差異見上方逐項解析。"
          }
        ]
      },
      {
        "id": "group-3",
        "title": "F2,6BP與激素調控",
        "topic": "topic-5",
        "summary": "先辨認肝型情境，再區分PFK-1/2及FBPase-1/2。",
        "questions": [
          {
            "number": 36,
            "text": "36 \n胰島素(insulin)調節下列何種分子的合成,進而活化phosphofructokinase-1 以促進糖解作用\n(glycolysis)? \nAcitrate \nBNADH \nCfructose 2,6-bisphosphate \nDATP \n",
            "regions": [
              {
                "page": 3,
                "rect": [
                  30.0,
                  571.59,
                  570.22,
                  613.59
                ]
              }
            ],
            "id": "101-2-2-36",
            "year": 101,
            "session": 2,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/101/2/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=101110&c=101&s=0102&q=1&verify=step1-20261013-101110-101-0102-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=101110&y=2012",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/101/2/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=101110&c=101&s=0102&q=1&verify=step1-20261013-101110-101-0102-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "C"
            ],
            "point": "F2,6BP與激素調控",
            "analysis": "Insulin在典型肝模型支持F2,6BP增加，活化PFK-1；ATP與citrate通常代表抑制訊號。 A citrate與D高ATP通常是PFK-1的抑制訊號；B NADH不是題目insulin透過雙功能酵素增加的主要調節物。C F2,6BP在典型肝模型增加，可活化PFK-1。",
            "trap": "回到本組對應小節，先重建因果，再判斷題目問正確或錯誤；本題的各選項差異見上方逐項解析。"
          },
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
            "point": "F2,6BP與激素調控",
            "analysis": "F2,6BP活化PFK-1並抑制FBPase-1；合成由PFK-2而非bisphosphatase催化。 A在典型肝模型方向相反，glucagon使F2,6BP下降；B合成應由PFK-2催化，FBPase-2是分解；D F2,6BP抑制FBPase-1，通常抑制糖新生。只有C活化PFK-1正確。",
            "trap": "回到本組對應小節，先重建因果，再判斷題目問正確或錯誤；本題的各選項差異見上方逐項解析。"
          }
        ]
      },
      {
        "id": "group-4",
        "title": "Arsenate與能量損失",
        "topic": "topic-8",
        "summary": "碳流繼續不代表ATP收益保留。",
        "questions": [
          {
            "number": 39,
            "text": "39 \n砷酸鹽(arsenate)的結構性質類似磷酸鹽(phosphate),對糖解作用(glycolysis)之影響為: \nA抑制六碳糖激酶(hexokinase)活性 \nB抑制磷酸果糖激酶(phosphofructokinase)活性 \nC抑制糖解過程之ATP 生成 \nD抑制整個糖解過程 \n",
            "regions": [
              {
                "page": 5,
                "rect": [
                  30.0,
                  344.6,
                  570.22,
                  404.6
                ]
              }
            ],
            "id": "103-2-2-39",
            "year": 103,
            "session": 2,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/103/2/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=103100&c=101&s=0102&q=1&verify=step1-20261013-103100-101-0102-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=103100&y=2014",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/103/2/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=103100&c=101&s=0102&q=1&verify=step1-20261013-103100-101-0102-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "C"
            ],
            "point": "Arsenate與能量損失",
            "analysis": "Arsenate可使GAPDH產物繞過PGK的ATP回收，碳流不一定完全停止，但ATP收益下降。 A、B不是此題砷酸鹽取代Pi的主要位置；D『整個糖解被抑制』太籠統。GAPDH可形成不穩定含砷中間物後水解成3PG，跳過PGK的ATP回收，故C符合能量與碳流分離。",
            "trap": "回到本組對應小節，先重建因果，再判斷題目問正確或錯誤；本題的各選項差異見上方逐項解析。"
          }
        ]
      },
      {
        "id": "group-5",
        "title": "Feed-forward與協同調控",
        "topic": "topic-6",
        "summary": "分清F1,6BP活化PK與F2,6BP活化PFK-1。",
        "questions": [
          {
            "number": 88,
            "text": "88.下列有關糖解作用(glycolysis)及葡萄糖新生(gluconeogenesis)的協同調控之敘述,何者錯誤? \n A.acetyl-CoA 會藉由抑制pyruvate kinase 活性來抑制糖解作用 \nB.acetyl-CoA 會藉由增強pyruvate carboxylase 活性來增加葡萄糖新生 \n\nC.fructose-1,6-bisphosphate 會藉由抑制pyruvate kinase 活性來抑制糖解作用 \nD.fructose-2,6-bisphosphate 會藉由增強phosphofructokinase 活性來增加糖解作用 \n \n",
            "regions": [
              {
                "page": 16,
                "rect": [
                  30.0,
                  720.78,
                  570.22,
                  807.0
                ]
              },
              {
                "page": 17,
                "rect": [
                  30.0,
                  28.0,
                  570.22,
                  87.78
                ]
              }
            ],
            "id": "115-2-1-88",
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
            "point": "Feed-forward與協同調控",
            "analysis": "F1,6BP對pyruvate kinase為feed-forward活化，非抑制；F2,6BP則活化PFK-1。 本題問錯誤；C的F1,6BP應feed-forward活化PK而非抑制。B描述acetyl-CoA活化PC，D描述F2,6BP活化PFK。A使用傳統整體代謝抑制的表述，效應仍受PK isoform與條件影響，不宜推成所有組織相同的唯一直接調控。作答關鍵是C把明確的活化方向寫反。",
            "trap": "回到本組對應小節，先重建因果，再判斷題目問正確或錯誤；本題的各選項差異見上方逐項解析。"
          }
        ]
      }
    ]
  }
});
