# 第 08 章　糖解作用與丙酮酸代謝

## 路徑目的與器官差異

糖解作用位於細胞質，將一個六碳葡萄糖轉成兩個三碳pyruvate，淨得2 ATP及2 NADH。路徑本身沒有直接消耗O₂的一步，但能否持續仍需再生NAD⁺。成熟紅血球沒有粒線體，只能把pyruvate主要轉為lactate再生NAD⁺；有粒線體的細胞可利用穿梭與呼吸鏈回收還原當量。

不要把糖解與葡萄糖完全氧化混稱。糖解淨2 ATP是直接收支，完整氧化還包括PDH、TCA及氧化磷酸化。氧供足夠也不代表所有細胞不產乳酸；乳酸生成受通量、氧化能力與氧化還原狀態共同影響。

讀每一步先看碳數、磷酸來源與去向、是否有電子轉移，再看ATP。這樣遇到抑制某酵素，能推上游累積、下游不足及能量損失，而不只是背順序。

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

## Hexokinase與glucokinase的分工

多數組織hexokinase對葡萄糖親和力較高，在低葡萄糖時仍能進行磷酸化，且常受G6P產物抑制。肝臟與胰島β細胞的glucokinase在較高葡萄糖濃度時更活躍，參與餐後處理及葡萄糖感測；不應把較高半飽和濃度解讀成沒有功能。

|特性|一般hexokinase|Glucokinase|
|---|---|---|
|常見組織定位|多種組織|肝、胰島β細胞等|
|葡萄糖反應範圍|較低濃度即可作用|較高濃度時通量增加明顯|
|G6P產物抑制|常見|不受同樣直接抑制|
|生理角色|基本葡萄糖利用|餐後處理、感測|

Glucokinase具有特別的動力學與調節，不宜無條件套用最簡Michaelis–Menten模型；教材常以較高Km概括，嚴格可用S₀.₅描述。肝的glucokinase也受GKRP及區室分布調控，β細胞的功能不能照搬所有肝調控細節。

## PFK-1：能量狀態與F2,6BP

ATP是PFK-1反應的受質，但高ATP也可在調節位點抑制，反映能量充足；AMP等低能量訊號常促進糖解。Citrate可支持高能量／充足碳源訊號；低pH在肌肉中可抑制PFK-1，避免糖解與酸負荷持續增加。

F2,6BP是強力調節分子，活化PFK-1並抑制FBPase-1，讓糖解與糖新生朝相反方向調節。它不是PFK-1生成的F1,6BP，也不是必須依序流向pyruvate的普通糖解中間物。

在典型肝臟模型，glucagon→cAMP/PKA→磷酸化肝型PFK-2/FBPase-2，偏向降低F2,6BP，使糖解減少、糖新生增加；insulin相反。心臟等不同isoform可能對磷酸化有不同反應，所以不能說所有器官的PFK-2一磷酸化都受抑制。

## Pyruvate kinase與不可逆關卡

糖解在一般細胞條件下的重要不可逆步驟為hexokinase/glucokinase、PFK-1與pyruvate kinase。這些反應不能在糖新生中簡單把箭頭反過來，需另有繞道。其他接近平衡步驟可依濃度改變方向。

F1,6BP可feed-forward活化pyruvate kinase，表示上游碳流已進來，應支持後半段排出。ATP與alanine等則可在適當組織情境下抑制。肝型pyruvate kinase受glucagon/PKA磷酸化抑制，避免飢餓時把準備用於糖新生的碳又拉回糖解。

不可逆不表示宇宙中任何條件都不可能反向，而是正常生理條件下淨ΔG很負、反向通量不具實際路徑作用。這個詞必須和細胞濃度及旁路酵素一起理解。

## 乳酸：再生NAD⁺而非額外生成ATP

LDH催化pyruvate+NADH+H⁺⇌lactate+NAD⁺。這一步本身不再產ATP，卻回收GAPDH所需NAD⁺，讓糖解持續。氧化磷酸化能力不足或糖解通量很高時，乳酸路徑可支援胞質氧化還原平衡。

將糖解與LDH加總，NADH/NAD⁺被循環再生，淨產物為兩個lactate與2 ATP等，而非同時留下2 NADH作額外能量收益。不要把已被LDH消耗的NADH又拿去算呼吸鏈ATP，否則重複計帳。

Cori cycle中周邊乳酸可送肝轉回葡萄糖，將部分負擔轉到肝；肝糖新生耗能高於周邊糖解所得，因此整體不是免費循環。乳酸也可被其他組織氧化利用，不是只能被肝清除的廢物。

## 紅血球旁路與抑制物

紅血球2,3-BPG旁路由1,3-BPG分流，繞過phosphoglycerate kinase的ATP生成，代價是少回收該步ATP，收益是調節Hb釋氧。若某一份三碳中間物走旁路，失去一次該步ATP；不能不看分流比例就把整個葡萄糖收支固定說成零。

Arsenate可在GAPDH反應中代替Pi形成不穩定產物，繞過原本的ATP回收，因此糖解碳流可繼續但能量收益減少；arsenite則與lipoate相關酵素抑制相連，兩者不可因中文都叫砷就當成同一作用。Fluoride可抑制enolase，是另一個常見辨認點。

Pyruvate kinase缺陷使紅血球ATP生成不足，膜維持受影響，可連到溶血；G6PD缺陷則主要涉及NADPH與抗氧化能力。兩者都能有紅血球問題，但能量供應與抗氧化還原力是不同故障。

## PDH：糖解進入氧化代謝的不可逆橋樑

Pyruvate進入粒線體後，PDH complex催化pyruvate+CoA+NAD⁺→acetyl-CoA+CO₂+NADH。每個pyruvate產一個NADH與一個CO₂，不直接產ATP；每個葡萄糖有兩個pyruvate，所以反應兩次。

|組件／輔因子|核心工作|
|---|---|
|E1與TPP（B1）|脫羧並處理羥乙基中間物|
|E2與lipoamide、CoA（B5）|氧化／轉移醯基，形成acetyl-CoA|
|E3與FAD（B2）、NAD⁺（B3）|再氧化lipoamide，最後把電子交給NAD⁺|

五個常背輔因子是TPP、lipoate、CoA、FAD、NAD⁺，不是PLP。Acetyl-CoA無法藉PDH反向變回pyruvate，所以偶數鏈脂肪酸生成的acetyl-CoA一般不能提供人類淨糖新生碳；這與glycerol能進入糖新生並不矛盾。

## PDH調控與pyruvate的其他去向

PDH kinase磷酸化使PDH失活，PDH phosphatase去磷酸化使其活化。高NADH、acetyl-CoA與能量充足狀態支持關閉進一步氧化碳流；pyruvate、ADP等訊號可抑制kinase，肌肉Ca²⁺可促進phosphatase而配合收縮供能。調控的具體強度與isoform、組織有關。

|去向|酵素|主要目的|
|---|---|---|
|Lactate|LDH|再生胞質NAD⁺|
|Acetyl-CoA|PDH|進入氧化／生合成碳流|
|Oxaloacetate|Pyruvate carboxylase，biotin、ATP|補充TCA與糖新生|
|Alanine|ALT，PLP|轉胺與氮／碳運輸|

Pyruvate carboxylase受acetyl-CoA活化，與PDH在碳流配置上相互配合。TPP不足或PDH功能受損時，pyruvate較可能流向lactate等，必須從反應瓶頸理解，而不是看到乳酸上升就只想到沒有氧。

## 能量總帳與閉卷重建

葡萄糖到兩個pyruvate：直接淨2 ATP與2胞質NADH；再經PDH：增加2基質NADH、2 acetyl-CoA與2 CO₂。到這裡還沒有把acetyl-CoA在TCA完全氧化，也不能直接宣稱已得到整個葡萄糖的30/32 ATP。

若只算糖解到pyruvate並允許胞質NADH經呼吸鏈回收，使用2.5或1.5的穿梭估算，可得總約7或5 ATP當量，其中直接ATP仍只有2。若走lactate，NADH用於再生NAD⁺，淨直接收益仍2 ATP。

閉卷畫圖時先畫三個不可逆關卡，再補唯一NADH生成步驟與兩個ATP回收步驟，最後畫pyruvate四個去向。能說出每個關卡的目的、訊號與能量帳，才算把路徑讀懂。
