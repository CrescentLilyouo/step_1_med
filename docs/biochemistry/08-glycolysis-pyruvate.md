# 第 08 章　糖解作用與丙酮酸代謝

## 路徑目的與器官差異

糖解作用位於細胞質，將一個六碳葡萄糖轉成兩個三碳pyruvate，淨得2 ATP及2 NADH。路徑本身沒有直接消耗O₂的一步，但能否持續仍需再生NAD⁺。成熟紅血球沒有粒線體，只能把pyruvate主要轉為lactate再生NAD⁺；有粒線體的細胞可利用穿梭與呼吸鏈回收還原當量。

不要把糖解與葡萄糖完全氧化混稱。糖解淨2 ATP是直接收支，完整氧化還包括PDH、TCA及氧化磷酸化。氧供足夠也不代表所有細胞不產乳酸；乳酸生成受通量、氧化能力與氧化還原狀態共同影響。

讀每一步先看碳數、磷酸來源與去向、是否有電子轉移，再看ATP。這樣遇到抑制某酵素，能推上游累積、下游不足及能量損失，而不只是背順序。

### 為什麼要先學器官，再背共同路徑？

肝臟在進食後可以把多餘葡萄糖導向氧化、肝醣與脂質合成；空腹時則需要保留或輸出葡萄糖。骨骼肌主要依自身收縮需求利用糖，不能把自己的G6P直接當成自由葡萄糖大量輸回血液。成熟紅血球沒有粒線體，即使血中氧很多也不能使用PDH、TCA與氧化磷酸化，所以胞質糖解對它是必要供能途徑。

這些差異不表示三種細胞的糖解十步順序不同，而是入口酵素、激素反應、ATP需求與pyruvate出口不同。遇到「glucagon使糖解下降」，必須先確認是典型肝臟模型，不能直接套成運動肌肉同樣停止供能。

### 先寫總反應，再往內拆

葡萄糖到pyruvate的常用總式為：glucose+2 ADP+2 Pi+2 NAD⁺→2 pyruvate+2 ATP+2 NADH+2 H⁺+2 H₂O。它告訴你碳從6變兩個3，兩個無機Pi被用來幫助保存氧化能，電子交給NAD⁺，且沒有直接消耗氧。

加上兩次LDH反應後，NADH與NAD⁺在總帳相消，得到葡萄糖到乳酸的淨直接ATP仍為2。不同pH轉換慣例的反應式可能省略部分H⁺或水，但碳、電子與ATP帳仍應一致。先掌握這個骨架，再記酵素不易迷路。

## 投資階段：先花兩個ATP

|步驟|反應／酵素|目的與能量|
|---|---|---|
|1|Glucose→G6P；hexokinase/glucokinase|用1 ATP將糖磷酸化|
|2|G6P⇌F6P；phosphoglucose isomerase|醛糖轉酮糖，準備後續切割|
|3|F6P→F1,6BP；PFK-1|再用1 ATP，重要承諾步驟|
|4|F1,6BP⇌GAP+DHAP；aldolase|六碳分成兩個三碳|
|5|DHAP⇌GAP；triose phosphate isomerase|兩份碳流皆進入GAP後半段|

第一步將葡萄糖留在細胞代謝池，但G6P也能走肝醣或磷酸戊糖途徑，故不是糖解的第一個專一承諾步驟。PFK-1使碳流更明確進入糖解；PFK-2則主要製造調節物F2,6BP，不能把兩個酵素當成連續的同名版本。

Aldolase產物是GAP與DHAP各一，並非直接兩個GAP；經異構化後才讓一個葡萄糖的兩個三碳單位都走相同後半段。從第6步開始，每個葡萄糖的反應次數都要乘二。

### 第1至5步各解決一個化學問題

第1步在葡萄糖加上帶電的磷酸，使其不再是一般GLUT可直接運出的自由葡萄糖，並成為其他路徑可辨認的中間物。這筆ATP不是沒有回報：它協助保留與活化細胞內碳流，但不能保證所有G6P都會被送進糖解。

第2步把醛糖轉成酮糖，讓羰基位置有利於後續切成兩個三碳單位。第3步再加一個磷酸到另一端；切開之後兩個三碳片段都保有磷酸，能繼續被代謝酵素處理。第4步aldolase切斷碳骨架，產生醛型GAP與酮型DHAP；第5步triose phosphate isomerase使DHAP加入GAP的後段路徑。

單看DHAP⇌GAP的平衡偏向哪邊，不能斷定糖解一定停住；GAP持續被下一步消耗，可拉動異構化朝GAP前進。這正是第6章Q與產物移除觀念在真實路徑中的用法。

### 名字相似但功能不同

Bisphosphate表示兩個磷酸分別接在不同位置，F1,6BP與F2,6BP是不同分子；不能只看「fructose加兩個磷酸」就視為同物。F1,6BP是糖解主路徑的受質，F2,6BP則是低濃度就可改變流量的調節物。PFK-1製造前者，PFK-2製造後者。

閉卷檢查：從一個glucose到兩個GAP，共消耗2 ATP，尚未產生NADH，也沒有釋出CO₂。若這時已在帳上寫CO₂，就把PDH或TCA提早搬進糖解了。

## 回收階段：唯一氧化還原與兩次直接產ATP

|步驟|反應／酵素|每葡萄糖收支|
|---|---|---|
|6|GAP→1,3-BPG；GAP dehydrogenase|生成2 NADH，使用無機Pi|
|7|1,3-BPG→3PG；phosphoglycerate kinase|生成2 ATP|
|8|3PG⇌2PG；phosphoglycerate mutase|調整磷酸位置|
|9|2PG⇌PEP；enolase|脫水形成高轉移勢PEP|
|10|PEP→pyruvate；pyruvate kinase|生成2 ATP|

GAPDH將醛基氧化與Pi加入耦合，形成高轉移勢的1,3-BPG，不是消耗ATP來加這個磷酸。NAD⁺在此被還原成NADH；若NAD⁺耗盡，即使其他酵素都存在，後半段也無法持續。

第7、10步皆是受質階層磷酸化。總生成4 ATP，扣除前段2 ATP，淨2 ATP。Pyruvate kinase雖名為kinase，此處磷酸從PEP交給ADP而形成ATP，不能看到kinase就一律判斷耗ATP。

### GAPDH如何把氧化能保存下來？

GAP的醛基若直接被氧化成游離羧酸，能量很容易散失。GAPDH先藉活性位cysteine形成共價中間物，氧化時把電子交給NAD⁺，並形成具有能量轉移能力的酵素硫酯中間物；無機Pi再參與生成1,3-BPG的醯基磷酸。這把氧化與磷酸化耦合，為下一步直接生成ATP作準備。

1,3-BPG的「1位」醯基磷酸轉移勢高，可交給ADP成ATP；留下的3PG在「3位」仍保有磷酸。這不是同一分子一次把兩個磷酸全交出。之後mutase把磷酸移至2位，enolase脫水成PEP，最後pyruvate kinase把磷醯基交給ADP；產物轉成穩定酮型pyruvate，幫助驅動反應。

### 逐步驗算每葡萄糖的ATP

|時點|當步ATP變化|累積直接ATP淨值|
|---|---:|---:|
|Hexokinase後|−1|−1|
|PFK-1後|−1|−2|
|兩次PGK後|+2|0|
|兩次pyruvate kinase後|+2|+2|

GAPDH雖不直接產ATP，卻是PGK能產ATP的前提。若問「哪一步產生NADH」，選GAPDH；問「哪一步直接形成ATP」，則是PGK與pyruvate kinase。把酵素名含kinase視為一定消耗ATP會選錯，必須看磷酸從誰轉給誰。

常見陷阱：忘記後半段乘二，算成產2、耗2而淨0；或把2 NADH不問去向就各加固定ATP。先分開直接ATP與電子的未結帳收益，最後再合併。

## Hexokinase與glucokinase的分工

多數組織hexokinase對葡萄糖親和力較高，在低葡萄糖時仍能進行磷酸化，且常受G6P產物抑制。肝臟與胰島β細胞的glucokinase在較高葡萄糖濃度時更活躍，參與餐後處理及葡萄糖感測；不應把較高半飽和濃度解讀成沒有功能。

|特性|一般hexokinase|Glucokinase|
|---|---|---|
|常見組織定位|多種組織|肝、胰島β細胞等|
|葡萄糖反應範圍|較低濃度即可作用|較高濃度時通量增加明顯|
|G6P產物抑制|常見|不受同樣直接抑制|
|生理角色|基本葡萄糖利用|餐後處理、感測|

Glucokinase具有特別的動力學與調節，不宜無條件套用最簡Michaelis–Menten模型；教材常以較高Km概括，嚴格可用S₀.₅描述。肝的glucokinase也受GKRP及區室分布調控，β細胞的功能不能照搬所有肝調控細節。

### 相同反應，為何需要不同酵素特性？

一般hexokinase在較低葡萄糖濃度就能有效工作，符合許多周邊組織持續利用葡萄糖的需求；累積G6P可抑制它，避免下游已塞車時仍不斷把糖困入。Glucokinase在較高葡萄糖時活性變化較明顯，適合肝臟在餐後增加處理能力，也參與β細胞的葡萄糖感測。

GK的葡萄糖反應具有動力學協同性，嚴格描述常用S₀.₅而不是把它完全當成標準Michaelis–Menten酵素；國考常以「較高Km」作比較速記，知道它代表較高濃度才達半最大速率即可，不要因此推論其多聚體結構。

肝臟GKRP可將GK隔離於細胞核等方式調節可用量；F6P促進GKRP相關抑制，而F1P可解除。G6P不直接回饋抑制GK，並不代表GK完全沒有調控。F1P、F6P、F1,6BP與F2,6BP四個名稱只差一點，作用位置卻不一樣。

### β細胞串聯到生理學

葡萄糖代謝增加使ATP/ADP比上升，ATP-sensitive K⁺ channel關閉，K⁺外流減少而膜去極化，電壓依賴Ca²⁺通道開啟，Ca²⁺進入促進insulin釋放。GK是感測鏈的一部分，並不是直接以磷酸化方式把insulin囊泡推出去。將「代謝訊號→電位→鈣→分泌」串起來，便能與之前生理學內容接上。

## PFK-1：能量狀態與F2,6BP

ATP是PFK-1反應的受質，但高ATP也可在調節位點抑制，反映能量充足；AMP等低能量訊號常促進糖解。Citrate可支持高能量／充足碳源訊號；低pH在肌肉中可抑制PFK-1，避免糖解與酸負荷持續增加。

F2,6BP是強力調節分子，活化PFK-1並抑制FBPase-1，讓糖解與糖新生朝相反方向調節。它不是PFK-1生成的F1,6BP，也不是必須依序流向pyruvate的普通糖解中間物。

在典型肝臟模型，glucagon→cAMP/PKA→磷酸化肝型PFK-2/FBPase-2，偏向降低F2,6BP，使糖解減少、糖新生增加；insulin相反。心臟等不同isoform可能對磷酸化有不同反應，所以不能說所有器官的PFK-2一磷酸化都受抑制。

### ATP既是受質又是抑制訊號，不矛盾嗎？

PFK-1需要ATP提供磷醯基，但高ATP也能透過調節作用降低酵素對F6P的有效反應，表示細胞能量充足。受質結合與調節作用是不同層次；不能用「反應需要ATP」否定ATP高時可能抑制。AMP與ADP提供缺能訊號，F2,6BP則提高糖解傾向；citrate可傳達氧化代謝碳源較充足的訊息。

肌肉在強烈活動時AMP有利糖解，但H⁺累積、pH下降可抑制PFK-1，限制持續酸化。調控不是只有一個開關：缺能促進與酸性抑制可能同時存在，淨流量由多個因素決定。

### 肝臟飽食與空腹：一步一步走訊號

典型肝臟空腹模型是glucagon→cAMP→PKA→肝型PFK-2/FBPase-2磷酸化；PFK-2活性下降、FBPase-2活性上升，F2,6BP下降，於是PFK-1的活化減少，FBPase-1所受抑制解除，方向偏向糖新生。Insulin支持相反方向，餐後F2,6BP上升有利糖解。

這段有四種酵素名稱：PFK-2製造調節物；FBPase-2分解調節物；PFK-1執行糖解主路徑；FBPase-1執行糖新生繞道。若把後兩者與前兩者混成同一對，整條推論會失效。

「磷酸化使PFK-2下降」需附上肝型條件。心肌等isoform可有不同反應，不可把肝臟的激素規則無條件套用全身。

## Pyruvate kinase與不可逆關卡

糖解在一般細胞條件下的重要不可逆步驟為hexokinase/glucokinase、PFK-1與pyruvate kinase。這些反應不能在糖新生中簡單把箭頭反過來，需另有繞道。其他接近平衡步驟可依濃度改變方向。

F1,6BP可feed-forward活化pyruvate kinase，表示上游碳流已進來，應支持後半段排出。ATP與alanine等則可在適當組織情境下抑制。肝型pyruvate kinase受glucagon/PKA磷酸化抑制，避免飢餓時把準備用於糖新生的碳又拉回糖解。

不可逆不表示宇宙中任何條件都不可能反向，而是正常生理條件下淨ΔG很負、反向通量不具實際路徑作用。這個詞必須和細胞濃度及旁路酵素一起理解。

### 為什麼上游產物要活化下游酵素？

F1,6BP升高表示前半段已把碳流投入糖解，feed-forward活化pyruvate kinase可協助下游處理即將到來的中間物。這和終產物回饋抑制方向不同：前者是提前通知，後者是產品充足後限制再生產。ATP與alanine等訊號則可降低某些PK isoform的活性，提示能量或碳氮需求已較滿足。

肝型PK可受PKA磷酸化抑制，與空腹保留三碳前驅物供糖新生相符；骨骼肌不能直接照搬這條肝型激素規則。最容易記錯的是把F1,6BP與F2,6BP對調：前者活化PK，後者重要作用在PFK-1與FBPase-1。

### 三個不可逆關卡如何連到糖新生？

|糖解關卡|糖新生如何繞道|先記住的理由|
|---|---|---|
|Hexokinase/GK|Glucose-6-phosphatase|用水解釋放葡萄糖，不是直接反向產ATP|
|PFK-1|Fructose-1,6-bisphosphatase|和PFK-1互相反向調節，避免白白耗ATP|
|Pyruvate kinase|Pyruvate carboxylase加PEPCK|需先經OAA，投入ATP與GTP|

本章先建立「逆向不能原路倒車」的理由；糖新生章再詳算跨區室與成本。不要把PEPCK放進葡萄糖到acetyl-CoA的正向路徑。

## 乳酸：再生NAD⁺而非額外生成ATP

LDH催化pyruvate+NADH+H⁺⇌lactate+NAD⁺。這一步本身不再產ATP，卻回收GAPDH所需NAD⁺，讓糖解持續。氧化磷酸化能力不足或糖解通量很高時，乳酸路徑可支援胞質氧化還原平衡。

將糖解與LDH加總，NADH/NAD⁺被循環再生，淨產物為兩個lactate與2 ATP等，而非同時留下2 NADH作額外能量收益。不要把已被LDH消耗的NADH又拿去算呼吸鏈ATP，否則重複計帳。

Cori cycle中周邊乳酸可送肝轉回葡萄糖，將部分負擔轉到肝；肝糖新生耗能高於周邊糖解所得，因此整體不是免費循環。乳酸也可被其他組織氧化利用，不是只能被肝清除的廢物。

### 為什麼pyruvate接受電子就能讓糖解繼續？

GAPDH每跑一次把NAD⁺變NADH；若沒有再生，有限NAD⁺池會逐漸耗盡。LDH將pyruvate還原成lactate，同時把NADH氧化回NAD⁺，讓GAPDH再次工作。其直接收益是維持電子接受者供應，ATP仍來自PGK與PK。

若同一批NADH已交給LDH，就不能又假定它穿梭進粒線體產ATP。這是乳酸情境最常見的雙重計帳。LDH反應可逆：有氧化能力的組織可把lactate轉回pyruvate再利用，所以乳酸是可交換的代謝燃料，不只是無用廢物。

### Cori cycle的成本由誰負擔？

周邊組織由一個glucose生成兩個lactate得2 ATP；肝臟把兩個lactate再製成一個glucose，糖新生消耗4 ATP與2 GTP，共6個高能磷酸鍵當量。因此整個循環淨耗4個當量，能量由肝臟其他氧化燃料支援。它把局部緊急ATP供應與全身回收工作分開，不是永動機。

乳酸上升可能來自生成增加、利用或清除下降，或兩者並存。高糖解通量、氧化能力受限與肝臟處理能力改變都需依情境考慮；只憑乳酸不能一律斷言完全缺氧。LDH的pyruvate→lactate反應本身還消耗H⁺，不能把運動相關酸化簡化成這一步直接釋出所有酸。

## 紅血球旁路與抑制物

紅血球2,3-BPG旁路由1,3-BPG分流，繞過phosphoglycerate kinase的ATP生成，代價是少回收該步ATP，收益是調節Hb釋氧。若某一份三碳中間物走旁路，失去一次該步ATP；不能不看分流比例就把整個葡萄糖收支固定說成零。

Arsenate可在GAPDH反應中代替Pi形成不穩定產物，繞過原本的ATP回收，因此糖解碳流可繼續但能量收益減少；arsenite則與lipoate相關酵素抑制相連，兩者不可因中文都叫砷就當成同一作用。Fluoride可抑制enolase，是另一個常見辨認點。

Pyruvate kinase缺陷使紅血球ATP生成不足，膜維持受影響，可連到溶血；G6PD缺陷則主要涉及NADPH與抗氧化能力。兩者都能有紅血球問題，但能量供應與抗氧化還原力是不同故障。

### 2,3-BPG旁路用能量換氧釋放

1,3-BPG可經bisphosphoglycerate mutase轉為2,3-BPG，再水解成3PG返回主路徑。這繞過PGK，故每一個走旁路的三碳分子少回收1 ATP。2,3-BPG與去氧Hb結合，降低氧親和力、支持周邊釋氧；它是紅血球代謝與氧解離曲線的直接連結。

假設一個glucose的兩份三碳流都完全走旁路，再到lactate：前段花2 ATP，PK仍回收2，但PGK的2 ATP全失去，淨收益為0。真實細胞只分配部分通量走旁路，不應把這個極端算例當作紅血球日常全部糖解的固定產率。

### 三種毒物／抑制點要拆開

|物質|作用層次|推理結果|
|---|---|---|
|Arsenate，As(V)|可取代GAPDH步驟的Pi，形成易水解產物|跳過PGK回收ATP；碳流可繼續|
|Arsenite，As(III)|影響還原型lipoamide的巰基相關功能|PDH等含lipoate複合體受限|
|Fluoride|抑制enolase|PEP形成與後續PK供能受影響|

若理想化假設兩個GAP都因arsenate跳過PGK、其餘正常到lactate，淨ATP同樣由2降到0。這不是說真實中毒只作用這一點，而是題目指定模型的收支。

### PK缺陷與G6PD缺陷，先找壞掉的是哪本帳

PK缺陷主要使糖解ATP不足，紅血球膜幫浦與膜穩定性受影響，易溶血；G6PD缺陷主要降低PPP供應NADPH，使GSH再生與抗氧化能力受限。兩者都可溶血，卻不是同一種故障。把ATP、NADH、NADPH寫成三欄，便不會因名稱相近混淆。

## PDH：糖解進入氧化代謝的不可逆橋樑

Pyruvate進入粒線體後，PDH complex催化pyruvate+CoA+NAD⁺→acetyl-CoA+CO₂+NADH。每個pyruvate產一個NADH與一個CO₂，不直接產ATP；每個葡萄糖有兩個pyruvate，所以反應兩次。

|組件／輔因子|核心工作|
|---|---|
|E1與TPP（B1）|脫羧並處理羥乙基中間物|
|E2與lipoamide、CoA（B5）|氧化／轉移醯基，形成acetyl-CoA|
|E3與FAD（B2）、NAD⁺（B3）|再氧化lipoamide，最後把電子交給NAD⁺|

五個常背輔因子是TPP、lipoate、CoA、FAD、NAD⁺，不是PLP。Acetyl-CoA無法藉PDH反向變回pyruvate，所以偶數鏈脂肪酸生成的acetyl-CoA一般不能提供人類淨糖新生碳；這與glycerol能進入糖新生並不矛盾。

### 讓五個輔因子各做一件工作

第一棒E1利用TPP穩定脫羧後的二碳片段，釋出CO₂；第二棒把片段轉交E2的lipoamide，同時氧化成醯基，lipoamide的二硫鍵被還原。CoA再接受醯基形成acetyl-CoA，碳的工作完成，但還原型lipoamide還必須恢復才能接下一輪。

第三棒E3的FAD接受lipoamide電子，接著NAD⁺再把電子接走，最後輸出NADH並再生FAD。因此FAD是複合體內部接力，淨產物不是另多一個可送呼吸鏈的FADH₂。若同時把PDH算成1 NADH加1 FADH₂，就是把接力中間態重複計入收益。

Lipoate藉amide鍵連在E2的lysine上，形成能在活性位之間移動的長臂。把多酵素集中可提高中間物傳遞效率並減少副反應，這叫substrate channeling；不是把所有中間物先釋入基質才由下一個酵素碰運氣接走。

### 用碳與輔因子排除選項

每個pyruvate有3碳，釋1個CO₂，剩2碳成acetyl-CoA；每葡萄糖則重複兩次。B1對應TPP、B2對應FAD、B3對應NAD⁺、B5對應CoA；B6的PLP用於如ALT轉胺，B7的biotin用於如pyruvate carboxylase羧化，二者不是PDH五輔因子之一。

PDH與α-ketoglutarate dehydrogenase有相似的氧化脫羧輔因子架構。讀到B1缺乏時要想到不只一個步驟可能受影響；但不要把所有需B1的酵素都誤認為同一種脫羧反應，例如transketolase負責碳單位轉移。

## PDH調控與pyruvate的其他去向

PDH kinase磷酸化使PDH失活，PDH phosphatase去磷酸化使其活化。高NADH、acetyl-CoA與能量充足狀態支持關閉進一步氧化碳流；pyruvate、ADP等訊號可抑制kinase，肌肉Ca²⁺可促進phosphatase而配合收縮供能。調控的具體強度與isoform、組織有關。

|去向|酵素|主要目的|
|---|---|---|
|Lactate|LDH|再生胞質NAD⁺|
|Acetyl-CoA|PDH|進入氧化／生合成碳流|
|Oxaloacetate|Pyruvate carboxylase，biotin、ATP|補充TCA與糖新生|
|Alanine|ALT，PLP|轉胺與氮／碳運輸|

Pyruvate carboxylase受acetyl-CoA活化，與PDH在碳流配置上相互配合。TPP不足或PDH功能受損時，pyruvate較可能流向lactate等，必須從反應瓶頸理解，而不是看到乳酸上升就只想到沒有氧。

### PDH kinase是煞車的開關

先記住PDH被磷酸化後活性下降。若高NADH/NAD⁺、高acetyl-CoA/CoA及高能量狀態促進PDH kinase，結果就是讓PDH關閉；若pyruvate或ADP抑制kinase，則減少這種關閉作用。不能看到「kinase被抑制」便直覺選「整條代謝下降」，要再追一層它原本抑制誰。

運動肌肉Ca²⁺增加，一方面引發收縮需求，另一方面可促進PDH phosphatase，使PDH去磷酸化活化，供應更多acetyl-CoA進氧化代謝。這讓需求與供給有前饋配合。各PDK、PDP isoform與組織反應不同，以上是常用整體教學模型。

### Pyruvate四個出口，用需要補什麼來判斷

需要胞質NAD⁺時可走LDH；需要acetyl-CoA進氧化時走PDH；需要補OAA或糖新生時走PC；需要交換胺基、運輸氮時可走ALT。PC在粒線體，使用ATP、biotin與碳酸氫根，受acetyl-CoA活化；ALT使用PLP，把pyruvate與glutamate轉成alanine與α-ketoglutarate。四者的輔因子、碳數與目的都不同。

當acetyl-CoA已多而OAA不足，再把pyruvate全送PDH未必有利；活化PC能補充OAA，協助TCA或糖新生的碳流配置。此時選擇要結合器官與狀態，不能把「acetyl-CoA活化PC」誤寫成「acetyl-CoA可經PDH逆向變葡萄糖」。

### 機轉情境：有氧仍乳酸增加

若PDH受損，pyruvate進acetyl-CoA的出口變窄，可較多轉向lactate及alanine。這與缺氧造成呼吸鏈再氧化不足不同，卻可能都見到乳酸增加。B1不足也可能限制TPP依賴代謝；不能只用單一代謝物的變化推定唯一病因。考題應合併酵素、輔因子、氧供與其他線索判斷。

## 能量總帳與閉卷重建

葡萄糖到兩個pyruvate：直接淨2 ATP與2胞質NADH；再經PDH：增加2基質NADH、2 acetyl-CoA與2 CO₂。到這裡還沒有把acetyl-CoA在TCA完全氧化，也不能直接宣稱已得到整個葡萄糖的30/32 ATP。

若只算糖解到pyruvate並允許胞質NADH經呼吸鏈回收，使用2.5或1.5的穿梭估算，可得總約7或5 ATP當量，其中直接ATP仍只有2。若走lactate，NADH用於再生NAD⁺，淨直接收益仍2 ATP。

閉卷畫圖時先畫三個不可逆關卡，再補唯一NADH生成步驟與兩個ATP回收步驟，最後畫pyruvate四個去向。能說出每個關卡的目的、訊號與能量帳，才算把路徑讀懂。

### 五種題目邊界，用同一張帳回答

|題幹終點與條件|直接ATP淨值|另有什麼待處理／已回收|
|---|---:|---|
|Glucose→2 pyruvate，不算後續氧化|2|2胞質NADH尚未換算|
|Glucose→2 lactate|2|NADH被LDH用掉，沒有淨NADH收益|
|到pyruvate，允許malate–aspartate回收電子|2|加5，合計約7 ATP當量|
|到pyruvate，允許glycerol-3-phosphate回收電子|2|加3，合計約5 ATP當量|
|再加PDH到2 acetyl-CoA，尚未跑TCA|2|另多2基質NADH；若全部氧化可再加約5|

完整葡萄糖氧化常用30或32，是連TCA與呼吸鏈一起算的總數，不是只跑十步糖解就拿到。若題幹只問受質階層磷酸化，NADH換得的ATP不能加進答案。

### 糖原來源為何可能淨得3 ATP？

若肌肉肝醣的α1→4鏈經phosphorylase釋出G1P，再轉G6P進糖解，省下hexokinase那1 ATP；在到lactate的模型可淨得3。這是以「由磷酸解釋出的葡萄糖殘基」計，不適用每個分支點的游離葡萄糖，也沒有把先前合成肝醣的成本納入。題目改了起點，能量帳就會變。

### 最後用一個綜合題自我檢查

假設紅血球的GAPDH正常，但NAD⁺無法再生。你應先預測GAPDH持續運作受限，後半段ATP供應下降；不能因為PGK與PK本身未被抑制，就認為ATP不受影響。若改成PDH受阻，成熟紅血球本來沒有這套粒線體途徑，不能套用同樣推論。

真正讀懂的標準，是換起點、換器官、換抑制點時仍能重算。先畫三個不可逆關卡，再標GAPDH的電子、PGK和PK的ATP，最後加四個pyruvate出口；每支箭頭都說出原因，比一次默背十個酵素名字更能應付新題。

