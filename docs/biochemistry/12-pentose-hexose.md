# 磷酸戊糖途徑與其他單醣：還原力、碳骨架與代謝阻塞

## 先分清三種葡萄糖需求：ATP、還原力、核糖

讀完糖解、TCA與肝醣後，很容易把每一條糖代謝路徑都理解成「用來製造ATP」。磷酸戊糖途徑（pentose phosphate pathway, PPP；又稱hexose monophosphate shunt）正是重要反例：它直接提供NADPH及五碳糖，不直接產ATP。細胞除了要付能量帳，也必須取得合成脂肪所需的電子、抵抗氧化壓力的還原力，以及製造核苷酸的碳骨架。

PPP主要位於胞質，從glucose-6-phosphate（G6P）分流。G6P不是專屬糖解的受質：可以走糖解、肝醣合成或PPP，實際流向取決於需求與酵素調控。紅血球沒有粒線體，仍能利用PPP；因此「沒有TCA」不等於「葡萄糖只能走一條路」。

| 需求 | 主要路徑／產品 | 最容易混淆處 |
|---|---|---|
| ATP維持離子梯度等工作 | 糖解、氧化磷酸化 | PPP本身不直接產ATP |
| 還原性生合成與抗氧化 | NADPH | 不能把NADPH直接當成糖解的NADH |
| 核苷酸的糖骨架 | Ribose-5-phosphate | 不等於已完成嘌呤或嘧啶環合成 |

NADH與NADPH都可攜帶電子，差別不在「一個有能量、一個沒能量」，而是細胞使用不同酵素、不同氧化還原池，分配給不同工作。NADPH的磷酸標記有助酵素辨認，不是每送一次電子就拿這個磷酸去合成ATP。

## 氧化階段：一個六碳換兩個NADPH與一個五碳

氧化階段的方向通常視為不可逆。先逐步讀，而不是只背總產物。

| 步驟 | 反應 | 本步重點 |
|---|---|---|
| 1 | G6P→6-phosphogluconolactone；G6PD | NADP⁺接受電子，產第一個NADPH |
| 2 | Lactone→6-phosphogluconate；lactonase | 加水開環，不產第二個NADPH |
| 3 | 6-phosphogluconate→ribulose-5-P；6-phosphogluconate dehydrogenase | 第二個NADPH，並釋放CO₂ |

從碳數檢查：6C→5C＋1C，因此不能把CO₂漏掉。從電子檢查：兩次dehydrogenase反應各使用一個NADP⁺；中間的水解反應不做氧化還原。總結為每個G6P通過一次氧化段，產2 NADPH、1 CO₂與1 ribulose-5-phosphate。

**Ribulose不是ribose。** 前者是酮戊糖，後者是醛戊糖；兩者可經isomerase轉換。氧化段直接產物若問得精確，應先選ribulose-5-P，而不是因為PPP與核酸有關便一律填ribose-5-P。

第一個離開的CO₂來自原G6P的C1。若題目比較放射標記C1與C6在PPP初期釋出的差異，關鍵是氧化脫羧的位置；不能直接套用TCA第一圈的碳追蹤規則。

## 非氧化階段：二碳、三碳搬運，不是再多產NADPH

Ribulose-5-P可由isomerase變ribose-5-P，也可由epimerase變xylulose-5-P。後續用不同長度的糖重新排列碳骨架，主要反應可逆，因此可依核糖需求與糖解中間物濃度朝不同方向運作。

| 反應 | 酵素 | 碳數核對 |
|---|---|---|
| Xylulose-5-P＋ribose-5-P⇌GAP＋sedoheptulose-7-P | Transketolase | 5＋5＝3＋7 |
| Sedoheptulose-7-P＋GAP⇌F6P＋erythrose-4-P | Transaldolase | 7＋3＝6＋4 |
| Xylulose-5-P＋erythrose-4-P⇌F6P＋GAP | Transketolase | 5＋4＝6＋3 |

相加後中間產物消掉，得到**3個五碳糖⇌2個F6P＋1個GAP**，兩邊都是15個碳。這不是三個五碳糖各自變成一個六碳糖，不能逐分子硬配。

Transketolase轉移二碳單位，需要thiamine pyrophosphate（TPP，維生素B1衍生物）；transaldolase轉移三碳單位，不能把它也列成典型TPP酵素。可把「酮二、醛三」作為提示，但一定要連同實際碳數表驗算。

這一段沒有直接消耗或生成NADPH，也不直接產CO₂。題目若說PPP可產CO₂是對的；若說非氧化段每搬一次碳都釋CO₂，就錯在把兩個階段混在一起。

## 細胞如何依需求改變PPP的走法

PPP不是固定每走一次就必須把所有五碳糖送去DNA。先問細胞此刻比較缺NADPH還是ribose。

| 細胞需求 | 可採用的碳流 | 推理 |
|---|---|---|
| NADPH與ribose皆需要 | 氧化段後接ribose形成 | 同時取得還原力與五碳骨架 |
| Ribose需求大於NADPH | 非氧化段由F6P、GAP反向重排 | 不必為取得核糖而強迫額外做氧化段 |
| NADPH需求大於ribose | 五碳糖重排回糖解中間物，部分再生G6P | 碳回收可繼續供氧化段使用 |
| 還需要ATP | F6P、GAP進糖解 | ATP來自接上的糖解，不是PPP直接產生 |

「反向做非氧化段」不等於把不可逆氧化段倒轉。反向重排可用2 F6P＋1 GAP形成3個五碳糖；這個過程不會憑空產生NADPH。

在具備所需酵素的組織，若完整回收碳並反覆氧化，一個G6P的六個碳最終可全部成CO₂，同時得到12 NADPH。**單次通過氧化段是2 NADPH；完整循環氧化是12 NADPH。** 兩個數字對應不同邊界，不矛盾。完整回收涉及F1,6-bisphosphatase等反應能力，不能假設每一種細胞都能同樣操作。

## G6PD調控：還原力用得越快，需求訊號越明顯

Glucose-6-phosphate dehydrogenase（G6PD）是氧化段的重要速率限制酵素。當NADPH被消耗並轉成NADP⁺，受質供應增加，使PPP較能回應還原需求；NADPH充足時則抑制流量。這是用氧化還原池的比例回報「電子還夠不夠」。

肝臟、脂肪組織、腎上腺皮質、泌乳乳腺等需要還原性生合成，PPP很有意義；紅血球則尤其仰賴它維持抗氧化能力。不同組織的功能不能只用「哪裡ATP消耗最多」推估PPP活性。

NADPH也用於cytochrome P450反應、NO合成與吞噬細胞的NADPH oxidase。後者利用NADPH產生活性氧殺菌，乍看與抗氧化相反，其實是同一電子來源被不同酵素分配到不同目的。G6PD缺乏與NADPH oxidase缺陷不是同一疾病：前者是還原力來源受限，後者是呼吸爆發的執行系統異常。

糖解的PFK-1看ATP、AMP、F2,6BP等訊號；PPP的G6PD主要回應NADP⁺/NADPH需求。不要看到同一受質都是葡萄糖就把兩套控制開關交換。

## 紅血球抗氧化：把NADPH、GSH與過氧化物串起來

氧運輸使紅血球長期接觸氧化壓力。過氧化物若未被處理，可傷害血紅素及膜蛋白；紅血球又無法像有細胞核的細胞一樣持續重新合成酵素，因此既有防禦能力非常重要。

反應分成兩層：glutathione peroxidase使用還原型glutathione（GSH）處理H₂O₂，GSH被氧化成GSSG；glutathione reductase再使用NADPH把GSSG還原回GSH。後者含FAD輔基，前者典型為selenium相關酵素。若把NADPH直接畫成peroxidase的受質，就省略了真正傳遞電子的GSH循環。

**G6PD→NADPH→glutathione reductase→GSH→glutathione peroxidase→清除過氧化物。** 順序不只是記憶句，它能預測故障後果：NADPH不足，GSH再生能力下降，遇到較大氧化負荷時便容易溶血。

氧化變性的血紅素可形成Heinz bodies；脾臟移除變性聚集物後可見bite cells。這些形態要和「氧化損傷」連結，不能把所有溶血都背成同一張血片。另一方面，methemoglobin主要的生理還原途徑涉及NADH依賴cytochrome b5 reductase；不要把紅血球所有還原反應都說成由PPP單獨負責。

## G6PD缺乏與其他紅血球代謝題的區分

G6PD缺乏常以X-linked方式遺傳；女性異合子也可能因X染色體失活情形而有不同程度表現，不能寫成「女性不會有」。感染、蠶豆及某些氧化性藥物可能增加氧化負荷，疾病重點是酵素活性與壓力間的失衡，而非每次接觸任何藥物都必定溶血。

| 故障 | 首先受影響 | 題目推理線索 |
|---|---|---|
| G6PD缺乏 | NADPH及GSH再生 | 氧化壓力相關溶血 |
| Pyruvate kinase缺乏 | 糖解ATP供應 | 膜與離子平衡維持困難，可造成溶血 |
| 2,3-BPG變化 | Hb對O₂親和力 | 來自糖解支路，不是PPP |
| 成熟紅血球無粒線體 | 無PDH/TCA/呼吸鏈能量系統 | 有PPP與糖解，不代表有脂肪酸氧化 |

急性溶血後測酵素可能受年輕紅血球比例、輸血等因素影響；考題如果問檢驗時機，不宜只用一次結果完全排除。此處建立的是機轉與判讀概念，具體診斷仍須看臨床與檢驗情境。

把兩種溶血原因分開記：PK缺乏是「工作能量不足」，G6PD缺乏是「抗氧化再生不足」。兩者都可能破壞紅血球，卻不能用相同輔酶或相同路徑解釋。

## 果糖代謝：為何入口位置決定調控方式

飲食蔗糖可提供glucose與fructose。典型肝臟路徑先由fructokinase（ketohexokinase）消耗ATP，把fructose變成fructose-1-phosphate（F1P）；aldolase B再將F1P切成DHAP與glyceraldehyde。後者經triokinase消耗ATP成GAP，兩個三碳單位便能接入既有糖代謝。

| 分子 | 不要與它混淆 | 理由 |
|---|---|---|
| F1P | F1,6BP | 前者由fructokinase產生，後者是PFK-1產品 |
| Glyceraldehyde | GAP | 前者尚須磷酸化 |
| Aldolase B | Fructose-1,6-bisphosphatase | 前者切碳骨架，後者水解磷酸 |

這條入口位於PFK-1之後，因此繞過PFK-1的主要流量控制；但「繞過PFK-1」不等於整個人體完全不調控果糖，也不代表攝取一口水果便直接造成疾病。實際結果取決於劑量、組織處理能力、能量狀態及其他飲食因素。

由一個fructose到兩個三碳磷酸，在典型路徑共用2 ATP；若再完整走糖解後半段至lactate，可淨得2 ATP。要把fructokinase與triokinase兩筆都列入，不能只因少走PFK-1就少扣一筆投資。

## 果糖尿與遺傳性果糖不耐：阻塞前後差一步差很多

Essential fructosuria典型為fructokinase缺乏。果糖不易進入F1P路徑，可出現在尿中，通常較良性。Hereditary fructose intolerance（HFI）則為aldolase B缺乏：前一步仍把磷酸與ATP投入F1P，下一步卻無法順利處理，因此F1P累積並牽連磷酸、ATP與肝臟供糖。

不能只說「果糖不能變成葡萄糖，所以低血糖」；真正嚴重的地方是阻塞同時干擾糖質新生與肝醣分解，使其他碳來源的供糖也受影響。這解釋了為什麼飲食含果糖後可能出現低血糖與肝臟損傷，而不是單純少利用一種糖。

| 項目 | Essential fructosuria | HFI |
|---|---|---|
| 典型酵素 | Fructokinase | Aldolase B |
| 磷酸化果糖大量困住 | 非典型主要機轉 | F1P累積是關鍵 |
| 題目常見線索 | 尿中還原糖、較良性 | 接觸果糖或蔗糖後不適、低血糖、肝功能異常 |

Sorbitol可轉成fructose，sucrose含fructose，因此不能把HFI理解成只和名稱中有「果糖」的食物有關。HFI也不同於腸道果糖吸收不良；後者以吸收與腸道症狀為核心，不是aldolase B阻塞。國考先辨病名層次，再選酵素，避免看到fructose就選同一個答案。

## 半乳糖的Leloir途徑：UDP不是裝飾性前綴

乳糖分解後提供glucose及galactose。Galactokinase先用ATP產galactose-1-phosphate；接著GALT（galactose-1-phosphate uridylyltransferase）讓galactose-1-P與UDP-glucose交換，產生glucose-1-P與UDP-galactose。UDP-galactose 4-epimerase（GALE）再使UDP-galactose與UDP-glucose相互轉換。

| 步驟 | 輸入與輸出 | 辨認重點 |
|---|---|---|
| Galactokinase | Galactose＋ATP→galactose-1-P | 先磷酸化，不直接形成G6P |
| GALT | Galactose-1-P＋UDP-glucose→G1P＋UDP-galactose | UDP糖參與交換 |
| GALE | UDP-galactose⇌UDP-glucose | 改變C4立體配置 |
| Phosphoglucomutase | G1P⇌G6P | 接回糖解、肝醣或供糖路徑 |

Galactose與glucose是C4 epimer，不是C2；glucose與mannose才是C2 epimer。GALE使用緊密結合的NAD⁺參與暫時氧化還原，但整體不淨產一份可送去呼吸鏈的NADH，不能把它當另一個能量產生步驟。

UDP-glucose可再生，所以整條Leloir途徑不能每處理一個galactose就一律另扣一個UTP；若題目從特殊初始池或肝醣合成終點計算，才依實際反應重算。這也解釋為何UDP-glucose同時出現在肝醣合成與galactose代謝，卻不是肝醣磷酸解的必要供體。

## 半乳糖血症、polyol與白內障：由堆積物推表現

Classic galactosemia通常指GALT缺乏，galactose-1-P及其他代謝異常可造成多器官傷害。Galactokinase缺乏則未能有效磷酸化galactose，galactose可被aldose reductase還原成galactitol；後者在水晶體累積造成滲透壓與氧化相關傷害，白內障是重要線索。GALT缺乏也可有白內障，不能看到白內障就排除classic galactosemia。

| 缺乏 | 應先想到的差異 |
|---|---|
| GALT | Classic galactosemia，可能有肝臟與全身性表現 |
| Galactokinase | Galactitol與白內障的連結突出 |
| GALE | 表現依組織分布與殘餘活性有差異，不宜全部歸為良性 |
| Lactase | 腸腔乳糖消化問題，與細胞內Leloir路徑不同 |

Polyol途徑的另一組是glucose→sorbitol→fructose。第一步aldose reductase消耗NADPH，第二步sorbitol dehydrogenase使用NAD⁺。某些組織第二步處理能力較低，sorbitol容易累積。這裡同時牽涉滲透壓、NADPH需求與氧化壓力，不只是「糖變甜」的反應。

Galactose還原成galactitol與glucose還原成sorbitol是相似邏輯，但名稱不同。題目若改成galactosemia的白內障，應想到galactitol，不要機械填sorbitol。

## 葡萄糖醛酸與全章整合：用產物分辨目的

UDP-glucose可被氧化成UDP-glucuronate，作為glucuronidation的活化供體，也參與部分glycosaminoglycan的組成。這與PPP都從糖衍生，但不是同一路徑。Glucuronidation常協助增加某些物質水溶性與排泄，bilirubin結合是典型例子；不要把所有代謝物的排除都說成只靠此方式。

人體缺乏完成內生維生素C合成所需的gulonolactone oxidase，因此須由飲食取得維生素C。這個缺口不代表人體完全不能形成glucuronate；它只是在更後面的特定反應無法完成。Essential pentosuria涉及L-xylulose reductase缺乏，與G6PD缺乏的溶血機轉不同。

最後做三層整理：第一層是入口，G6P進PPP、fructose進F1P、galactose進galactose-1-P；第二層是需求，NADPH、ribose或既有糖代謝中間物；第三層是故障，分辨還原力不足、磷酸化中間物困住、polyol累積。遇到題目先定位在哪一層，才選酵素。

**閉卷整合題：紅血球不能用脂肪酸產ATP，卻為何需要PPP？** 因為能量來源和抗氧化來源不是同一件事；糖解負責ATP，PPP負責NADPH，再經GSH循環保護膜與血紅素。下一章轉入脂肪酸氧化時，請保留這個器官差異，不能把肝臟或肌肉的路徑套到紅血球。
