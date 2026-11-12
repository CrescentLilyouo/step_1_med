# 第 09 章　TCA 循環：碳流、能量與代謝交會

## 先理解循環的目的與區室

TCA cycle、citric acid cycle與Krebs cycle指同一套核心反應。它把acetyl-CoA的二碳單位引入四碳oxaloacetate（OAA），經過一圈氧化反應後再生OAA，並把燃料的部分自由能保存為NADH、FAD相關還原當量與GTP／ATP。讀這章要同時追三本帳：碳去哪裡、電子交給誰、直接產生多少核苷酸三磷酸。

大部分反應在粒線體基質進行；succinate dehydrogenase嵌在內膜，同時是電子傳遞鏈complex II。成熟紅血球沒有粒線體，因此不能進行自身的TCA與氧化磷酸化。這不是缺少葡萄糖，而是缺少氧化代謝的區室與設備。

### 沒有一步直接用氧，為何仍稱有氧代謝？

TCA的氧化反應需要NAD⁺等電子接受者。生成的NADH必須經呼吸鏈再氧化，電子最後交給O₂；缺氧時NADH/NAD⁺升高，氧化步驟難以持續。因此「反應式沒有O₂」與「可長期不依賴氧」不同。若呼吸鏈被抑制，即使TCA酵素都還存在，整體通量也會受限。

ATP用得越快，ADP通常越多，氧化磷酸化越有需求；呼吸鏈再生NAD⁺，又支持TCA繼續。供能與用能因而連在一起，不是細胞把所有燃料無限制氧化。

## 八步路徑：先用碳數建立地圖

|步驟|酵素與反應|碳數|這一步的帳|
|---|---|---|---|
|1|Citrate synthase：OAA+acetyl-CoA→citrate|4+2→6|釋CoA；無NADH|
|2|Aconitase：citrate⇌isocitrate|6→6|異構化；無淨氧化還原|
|3|Isocitrate dehydrogenase：isocitrate→α-KG|6→5|1 CO₂、1 NADH|
|4|α-KG dehydrogenase：α-KG→succinyl-CoA|5→4|1 CO₂、1 NADH|
|5|Succinyl-CoA synthetase：succinyl-CoA⇌succinate|4→4|1 GTP或ATP|
|6|Succinate dehydrogenase：succinate⇌fumarate|4→4|FAD相關還原當量交CoQ|
|7|Fumarase：fumarate⇌malate|4→4|加水|
|8|Malate dehydrogenase：malate⇌OAA|4→4|1 NADH|

第一輪先背「6、6、5、4、4、4、4、4」與兩個脫羧點，再把三個NADH位置標出。α-KG是α-ketoglutarate，又稱2-oxoglutarate；succinyl-CoA與succinate只差CoA卻有不同能量性質。若只記中文發音，很容易把第4與第5步混成同一反應。

### 兩個CO₂的來源要分層看

就每圈淨反應而言，輸入一個二碳acetyl-CoA，輸出兩個CO₂。但新進來的acetyl碳通常不是第一圈立刻放出的那兩個碳；第一圈的脫羧位置與酵素立體專一性使新加入碳先保留於中間物。碳同位素題因此不能把「淨少兩碳」直接當成「剛進來兩碳當場離開」。

中間物經過對稱的succinate後，後續圈數可出現標記位置重新分配。需要逐碳追蹤時應畫結構，而不是僅用代謝物總碳數推論。一般能量題只算每圈淨反應，不必額外把第一圈保留碳視為未產生CO₂。

## Citrate synthase與aconitase：先接上，再改位置

Citrate synthase先讓OAA與acetyl-CoA形成碳碳鍵，再經硫酯水解釋出CoA，支持citrate生成。這一步常在細胞條件下遠離平衡，屬重要入口關卡。它不是把acetyl-CoA直接拆成兩個CO₂，也不直接生成NADH；主要工作是把二碳單位接到四碳接受者。

### OAA是循環接受者，不是完全不需要的受質

OAA在一圈結尾被再生，淨消耗為零，但起始仍必須有足量OAA參與縮合。就像一組能重複使用的工具，工具不被每次消耗不代表可以把工具拿光。若OAA被抽去糖新生而補充不足，acetyl-CoA即使很多，也不保證TCA能同樣快速運轉。

Aconitase先脫水成cis-aconitate，再加水形成isocitrate，把羥基從較不利後續氧化的位置調整到可進行氧化脫羧的位置。這是為第3步準備受質；不是此步就把NAD⁺還原。其Fe-S中心協助受質結合與催化，不能看到Fe-S就一律認定在這一步傳遞電子。

### 抑制物如何推回反應位置？

Fluoroacetate可先活化並與OAA形成fluorocitrate，後者抑制aconitase。因而可出現citrate累積與下游碳流受限。題目若問直接抑制者，需區分原始前驅物fluoroacetate與形成後的fluorocitrate；不要把第8章抑制enolase的fluoride混過來。

## 兩次氧化脫羧：IDH與α-KG dehydrogenase

典型氧化型TCA使用NAD⁺依賴的isocitrate dehydrogenase（IDH3）。Isocitrate先氧化，經不穩定的酵素結合中間物再脫羧成α-KG，得到第一個NADH與CO₂。人類還有NADP⁺依賴的IDH1、IDH2，不能把所有isocitrate dehydrogenase都算成相同區室或一律產NADH。

接著α-KG dehydrogenase把五碳α-KG氧化脫羧為四碳succinyl-CoA，產生第二個CO₂與NADH。它與上一章PDH是相似的多酵素氧化脫羧架構，五個輔因子也是TPP、lipoate、CoA、FAD、NAD⁺。

|比較|PDH|α-KG dehydrogenase|
|---|---|---|
|受質與產物|Pyruvate→acetyl-CoA|α-KG→succinyl-CoA|
|碳數|3→2+CO₂|5→4+CO₂|
|位置與角色|TCA之前的入口橋樑|TCA循環內的第4步|
|淨電子輸出|NADH|NADH|
|直接ATP|無|無|

E1藉TPP處理脫羧片段，lipoamide接受與轉交醯基，CoA接成硫酯，FAD與NAD⁺再將lipoamide氧化復原。FAD在複合體內部接力，不額外輸出一份可獨立計帳的FADH₂。第4步形成高轉移勢的succinyl-CoA，是下一步直接回收GTP／ATP的能量來源。

### 輔因子與抑制的連結

B1不足可影響TPP依賴步驟；B2、B3、B5分別對應FAD、NAD⁺及CoA。Arsenite影響lipoate相關巰基功能，可限制PDH與α-KG dehydrogenase；arsenate取代糖解中的Pi則是另一機制。Succinyl-CoA與NADH是α-KG dehydrogenase的產物，累積時提供回饋抑制訊號。先從受質、產物及輔因子推導，比單背毒物名字容易保留。

## Succinyl-CoA synthetase：循環唯一的直接核苷酸收益

Succinyl-CoA的硫酯能量透過酵素中間步驟轉成GDP或ADP的磷酸化，生成succinate與GTP／ATP。常用反應式是succinyl-CoA+GDP+Pi⇌succinate+GTP+CoA。依isoform及組織可使用GDP或ADP，國考多以一圈1 GTP記憶；不要把兩種isoform當成同一圈各生一個而算成2。

### 為什麼叫受質階層磷酸化？

此反應的能量來自特定受質的高轉移勢，不必在這個反應步驟直接靠質子梯度推動。機制可經succinyl phosphate及酵素上的磷酸化histidine等中間態，把磷醯基送給核苷酸。雖然原始高能鍵是硫酯，整套反應仍可產核苷酸三磷酸；不能限定只有一開始就帶高能磷酸的受質才行。

GTP可透過nucleoside diphosphate kinase與ADP交換高能磷酸，GTP+ADP⇌GDP+ATP。能量帳一般把一個GTP視為一個ATP當量，並不表示GTP只能拿去換ATP；它也可支援PEPCK等反應。

### 解題邊界

若問「TCA直接生成多少ATP當量」，答1；若問「連同NADH、FAD相關電子的後續氧化」，約10。這與糖解直接ATP與總ATP當量的區分相同。Succinyl-CoA也能供heme生合成，若碳從這裡被抽走，就不能同時假設每個分子都完成後半圈並拿滿收益。

## 後半圈：FAD氧化、加水、NAD氧化

Succinate dehydrogenase將succinate的碳碳單鍵氧化為fumarate的雙鍵。酵素結合的FAD接受電子，再透過Fe-S中心送到CoQ；因此常把本步收益寫成1 FADH₂當量。這是記帳語言，並不表示自由FADH₂先離開酵素、再跑去別處找complex II。

Malonate與succinate結構相似，可競爭性抑制succinate dehydrogenase。在簡化的競爭抑制模型，提高受質可減輕抑制，表觀Km增加、Vmax不變。若題目只問TCA哪個酵素受影響，不要改選相鄰的fumarase；抑制點須對到受質結構與反應。

Fumarase把水加到fumarate雙鍵，生成L-malate，沒有NADH收益。Malate dehydrogenase再把malate羥基氧化成OAA的羰基，產第三個NADH。最後三步可用「形成雙鍵→加水→氧化羥基」重建，而不是把每個dehydrogenase都背成相同輔酶。

### 為何malate→OAA標準上不利，仍能前進？

這一步的ΔG°′為正，單獨達平衡較偏malate；但細胞內OAA濃度低、持續被citrate synthase等使用，NADH也可由呼吸鏈再氧化。這些條件降低反應商，使實際ΔG可適合前進。第6章的ΔG=ΔG°′+RT lnQ在這裡不是抽象公式，而是維持循環的理由。

若NADH/NAD⁺過高，malate氧化與OAA供應更容易受限。不能因「酵素存在」就斷定通量正常，也不能把標準自由能正誤寫成這一步永遠無法在人體進行。

## 一圈、每pyruvate、每glucose：分開算三種邊界

|題目邊界|NADH|FAD相關當量|直接GTP／ATP|常用總ATP當量|
|---|---:|---:|---:|---:|
|1 acetyl-CoA跑1圈TCA|3|1|1|3×2.5+1.5+1=10|
|1 pyruvate經PDH再跑TCA|4|1|1|4×2.5+1.5+1=12.5|
|1 glucose產生的2 acetyl-CoA只跑TCA|6|2|2|20|
|1 glucose的PDH加TCA，未計糖解|8|2|2|25|

小數表示每莫耳的平均化學計量收益近似，不是把一個ATP分子切半。題幹若指定舊式3／2或其他P/O，依給定條件重新算，不要把不同年代假設混在同一張帳。

### 從頭得到30或32

糖解直接淨2 ATP，另有2胞質NADH；PDH+TCA合計約25。若胞質NADH走malate–aspartate，另加5，總2+25+5=32；若走glycerol-3-phosphate，另加3，總30。這是完整氧化並依指定穿梭與P/O的教學帳，實際細胞收益會受質子漏及其他需求影響。

反推練習：題目由一個pyruvate生成3 CO₂，問NADH幾個。PDH先生成1 CO₂及1 NADH，TCA再生成2 CO₂及3 NADH，合計4。若答3，通常只算TCA；若答8，通常誤以每葡萄糖為單位。先在紙上圈起題幹起點與分母，往往比重新背整圈更有效。

## 調控：受質、還原狀態與需求共同決定流量

不能用「有acetyl-CoA就一定加速」概括TCA。至少要有OAA、氧化態輔酶、下游電子出口與ATP需求。高ATP/ADP或高NADH/NAD⁺常使氧化通量下降；ADP增加表示用能需求，Ca²⁺在收縮肌肉可協調供能。

|調控層級|典型訊號|要連到的理由|
|---|---|---|
|Citrate synthase入口|OAA與acetyl-CoA供應，產物／能量狀態|缺一個碳受質就不能縮合|
|NAD依賴IDH|ADP、Ca²⁺促進；ATP、NADH抑制|需求上升支持氧化，能量充足減速|
|α-KG dehydrogenase|Ca²⁺促進；NADH、succinyl-CoA抑制|以需求及產物回饋調節|
|整體呼吸耦合|ADP、氧與電子鏈功能|影響NAD⁺再生|

這些是典型教學方向，效應大小仍受條件、組織與isoform影響。TCA三個常見調控關卡不能照搬成PDH kinase／phosphatase都控制：PDH的共價修飾機制屬入口橋樑，不代表α-KG dehydrogenase也用完全相同的磷酸化開關。

### 運動時的因果鏈

肌肉收縮消耗ATP、提高ADP，Ca²⁺也上升；氧化磷酸化需求增加，呼吸鏈加快NADH氧化，並配合PDH、IDH與α-KG dehydrogenase的調節，使碳氧化支援ATP再生。若氧輸送不足或電子鏈受阻，這條鏈仍會卡住，Ca²⁺或ADP並不能替代氧的末端電子接受作用。

## Amphibolic：既供能，也供原料

TCA是amphibolic pathway，兼具分解與合成功能。Citrate可輸出到胞質提供脂肪酸與膽固醇合成的acetyl-CoA；α-KG可透過glutamate連到胺基酸代謝；OAA可經aspartate連到胺基酸、核苷酸與尿素循環；succinyl-CoA參與heme合成。

這些出口使「一圈必定產10 ATP」有適用條件：必須真的完成一圈且還原當量完成對應氧化。若citrate先被送出去合成脂質，就不能一邊算它全部氧化、一邊算同一份碳全部變成脂肪酸。

### Citrate運輸不是acetyl-CoA直接穿膜

粒線體acetyl-CoA不能直接自由跨內膜。與OAA形成citrate並輸出後，可由胞質ATP-citrate lyase消耗ATP裂解出acetyl-CoA與OAA，支援合成。這個能量成本與碳骨架回收屬另一套運輸／合成帳；不能把citrate輸出當作無成本增加胞質acetyl-CoA。

Aspartate–argininosuccinate shunt則連結TCA與尿素循環：aspartate提供尿素循環的一個氮，相關反應產生的fumarate可轉malate再回OAA。這是碳與氮路徑交會，不等於TCA直接把氨製成尿素；尿素循環的關鍵酵素仍是另一套。

## Anaplerosis：抽走中間物，就要補回

Anaplerotic reaction指淨補充TCA中間物的反應。最重要的例子是pyruvate carboxylase：pyruvate+HCO₃⁻+ATP→OAA+ADP+Pi，位於粒線體，需biotin，並受acetyl-CoA活化。當acetyl-CoA很多而四碳接受者不足，增加OAA供應便有功能上的合理性。

|補充來源|進入點|關鍵辨認|
|---|---|---|
|Pyruvate羧化|OAA|PC、biotin、ATP|
|Aspartate轉胺|OAA|與glutamate／α-KG交換胺基|
|Glutamate相關代謝|α-KG|連接胺基酸碳骨架|
|Propionyl-CoA代謝|Succinyl-CoA|先需biotin羧化，再需B12依賴mutase|

奇數鏈脂肪酸最後留下propionyl-CoA，先成methylmalonyl-CoA，再重排成succinyl-CoA；不是propionyl-CoA直接變成TCA八步之一。這個三碳尾端可提供淨糖新生碳，與偶數鏈脂肪酸只產acetyl-CoA的情況不同。

### 為什麼acetyl-CoA進TCA不算淨補充？

一圈進2碳、出2 CO₂，OAA只是再生，沒有淨增加OAA。人類又沒有glyoxylate cycle繞過兩次脫羧來保留額外碳，因此不能把偶數鏈脂肪酸的acetyl-CoA當成一般淨產葡萄糖來源。標記碳可能出現在糖分子中，與整體是否淨增加糖碳是兩種問題；考題通常在問後者。

## 臨床機轉與跨章整合

空腹時脂肪酸氧化提供acetyl-CoA與能量，但肝臟OAA可被導向糖新生，高NADH也影響OAA／malate比例；acetyl-CoA供應相對超過TCA處理能力時，肝臟可增加酮體生成。不能把酮體增加簡化為TCA必定加速。糖尿病的代謝失衡還涉及激素、脂解與肝臟碳流，將在整合章詳述。

B1缺乏可能限制PDH與α-KG dehydrogenase等反應，影響高耗能組織；高氨則可影響α-KG／glutamate／glutamine的平衡與能量代謝。神經症狀的機制通常不只單一TCA步驟，不能把複雜疾病全歸因成「OAA太低」或「缺一個ATP」。本章用這些情境練習從瓶頸推代謝方向。

### 三個整合情境

第一，呼吸鏈IV受阻：先預測NADH再氧化下降，再預測TCA氧化步驟受限，而不是直接把IV放進TCA八個酵素。第二，citrate大量輸出：先問中間物如何補回，再問還原力與ATP成本。第三，由一個pyruvate起算：先加PDH的一份NADH與CO₂，再算一圈TCA，不漏掉橋樑也不重複計帳。

讀完應能不看表畫出八步，標出「3 NADH、1 FAD相關當量、1 GTP、2 CO₂」，再用一句話解釋OAA淨消耗為零卻仍可能限制通量。最後能說出一個抽出路徑與一個補充路徑，才算從背圈圈進展到理解碳流。
