# 第20章　胺基酸衍生物與一碳代謝：從輔酶到神經訊號

## 先辨反應：同一個胺基酸可以有不同用途

前兩章把胺基酸拆成氮與碳骨架，這章改問「保留部分結構，再加工成什麼」。胺基酸不只拿來合成蛋白質或產能，也供應神經傳導物質、甲基、抗氧化分子與短時間能量緩衝系統。若只背前驅物配對，遇到輔酶或酵素名稱就容易失去方向；先辨認反應種類會更可靠。

**羥化是在分子上增加羥基；脫羧是移除CO₂；轉胺是交換胺基；甲基化是搬運一個甲基。**每一類需要的工具不同，不可看到胺基酸就全部選vitamin B6。

| 工具 | 本章的典型任務 | 容易混淆的地方 |
|---|---|---|
| PLP（B6） | 胺基酸脫羧、轉胺、部分transsulfuration反應 | 不是所有羥化反應的輔酶 |
| BH4 | Tyrosine／tryptophan hydroxylase及NOS等 | 不是NADPH，也不是葉酸THF |
| THF及其衍生物 | 攜帶不同氧化態的一碳單位 | 不只攜帶methyl；methylene與formyl用途不同 |
| SAM | 多種甲基轉移的直接供體 | 並非所有名稱有「甲基」的反應都直接用SAM |
| B12 | Methionine synthase的甲基轉移及methylmalonyl-CoA mutase重排 | 兩個反應使用不同輔酶型式，區室也不同 |
| NADPH | 多種還原與抗氧化再生反應供電子 | 與磷酸基供體ATP分開 |

例如tyrosine形成dopamine需要先羥化、後脫羧，所以前一步對應BH4、後一步對應PLP。若接著把norepinephrine變成epinephrine，則要想到SAM。把酵素依反應順序排好，輔酶就不再是獨立清單。

## Methionine循環：SAM交出甲基後去哪裡

Methionine先經methionine adenosyltransferase，利用ATP形成S-adenosylmethionine（SAM）。ATP提供adenosyl部分，不只是把一個磷酸黏到methionine。SAM的硫形成帶正電的sulfonium結構，使連接的甲基適合被轉移；因此它是多種methyltransferase的共同供體。

SAM交出甲基後成為S-adenosylhomocysteine（SAH），再由SAH hydrolase相關反應形成homocysteine與adenosine。完整順序是：**methionine → SAM → SAH → homocysteine**。不要把SAM交出甲基後的直接產物省略成homocysteine，也不要把homocysteine寫成arginine的衍生物。

| 甲基化對象 | 使用SAM的例子 | 功能連結 |
|---|---|---|
| 小分子 | Guanidinoacetate → creatine | 支援磷酸肌酸系統 |
| 神經內分泌分子 | Norepinephrine → epinephrine | PNMT反應 |
| 脂質頭部 | 肝臟PE逐步甲基化形成PC | 接回脂蛋白組裝及膜脂章 |
| 核酸／蛋白 | 特定DNA、RNA或蛋白殘基甲基化 | 調節分子功能，不等於改變遺傳密碼 |

SAH累積可抑制多種甲基轉移，因此不能只看SAM存量而忽略產物去除。Homocysteine是下一個分流點：可接受甲基回到methionine，也可將硫送往cysteine。前者偏向回收甲基循環，後者是離開methionine循環的重要出口。

本章討論的是自由胺基酸及代謝物，不是把蛋白質上的methionine直接換成homocysteine。也要分清homocysteine與homocystine：後者是氧化形成的雙硫鍵形式，檢驗常報total homocysteine，涵蓋多種存在型態。

## Homocysteine兩條路：再甲基化與轉硫作用

再甲基化（remethylation）把homocysteine變回methionine。典型methionine synthase反應使用5-methyl-THF的甲基，經methylcobalamin傳給homocysteine，同時再生THF。因此葉酸與B12在同一反應串連，缺其中一環都可能影響homocysteine處理。肝、腎等組織另有betaine-homocysteine methyltransferase路徑，以betaine供甲基；不能把它當作所有組織均可完全替代B12依賴反應。

轉硫作用（transsulfuration）則先由cystathionine β-synthase（CBS）使homocysteine與serine結合成cystathionine，再由cystathionine γ-lyase分解，形成cysteine、α-ketobutyrate及氨等產物。兩個核心酵素皆需PLP。**Cysteine的硫來自methionine／homocysteine，主要碳骨架來自serine。**這是很適合用原子追蹤解題的地方。

| 路線 | 去向 | 關鍵營養／輔酶 | 生理意義 |
|---|---|---|---|
| Methionine synthase | Homocysteine → methionine | 5-methyl-THF、methyl-B12 | 回收甲基循環並釋回THF |
| Betaine相關再甲基化 | Homocysteine → methionine | Betaine | 有組織限制的另一條回收路 |
| CBS＋γ-lyase | Homocysteine → cysteine | B6／PLP、serine | 將硫轉供cysteine等用途 |

人體不能有效把cysteine的硫反向拿回去淨合成methionine，所以methionine仍是必需胺基酸。反過來，充足methionine可支持cysteine供應；若轉硫路徑不足或需求增加，cysteine的條件必需性就有意義。不要把「可互相連結」誤讀成「兩方向完全可逆、營養上能自由替代」。

## 一碳單位不是一種東西：THF的三個考試出口

THF以N5、N10或跨兩者的位置攜帶一碳片段。一碳來源包括serine、glycine、histidine及其他代謝途徑。最常用來推理的是serine hydroxymethyltransferase：**serine＋THF ⇌ glycine＋5,10-methylene-THF＋H₂O**，需PLP。Serine的三碳骨架變成glycine二碳骨架，剩下一碳交給葉酸載體，不是丟成CO₂。

| 葉酸型式 | 直接連結的典型用途 | 易錯替代答案 |
|---|---|---|
| 5,10-Methylene-THF | dUMP → dTMP的thymidylate synthase反應 | 不是直接用SAM |
| 10-Formyl-THF | Purine環的C2與C8供碳 | 不等於提供所有purine碳或氮 |
| 5-Methyl-THF | Methionine synthase再甲基化homocysteine | 不是直接拿來做dTMP的同一型式 |

Methylene、methenyl及formyl相關葉酸池可以透過反應互相連接，但每個受體酵素認的型式仍有差別。MTHFR把5,10-methylene-THF還原為5-methyl-THF，使一碳單位進入methionine回收方向；不能把MTHFR誤認成methionine synthase本身。

dTMP反應中，5,10-methylene-THF同時參與一碳供應與還原過程，產物含DHF，需DHFR利用NADPH再生THF。這與許多只轉移一碳、仍保留THF還原態的反應不同。國考問dUMP→dTMP，即使產物比受質多一個甲基，直接輔酶仍選methylene-THF，而非看到methyl就直覺選SAM。

## Folate trap與B12：用兩條反應辨認缺陷

當B12相關methionine synthase功能不足，5-methyl-THF難以順利交出甲基並回復THF。由於MTHFR方向在生理上不易直接逆轉，葉酸便較多停留在methyl形式，其他一碳反應可利用的葉酸池相對不足，稱為methyl-folate trap。問題不是身體憑空完全沒有folate，而是**有葉酸卻不容易用到需要的位置**。

這可使dTMP及DNA合成受影響，快速分裂細胞如骨髓前驅細胞特別明顯，形成megaloblastic變化。葉酸本身缺乏也會影響DNA合成，但B12還參與另一個獨立反應：粒線體methylmalonyl-CoA mutase使用adenosylcobalamin，把methylmalonyl-CoA重排為succinyl-CoA。此步受阻可使methylmalonic acid（MMA）升高。

| 比較 | 葉酸不足的典型生化模式 | B12不足的典型生化模式 |
|---|---|---|
| Homocysteine | 可升高 | 可升高 |
| MMA | 不因單純葉酸不足而典型升高 | 可升高 |
| DNA合成／巨幼紅血球變化 | 可出現 | 可出現 |
| 神經損害 | 不能用「任何神經功能皆不受影響」作絕對定義 | 可有典型周邊神經及脊髓相關表現，且不一定先有貧血 |

Homocysteine不是葉酸或B12的單一特異指標，腎功能及其他因素也會影響；MMA同樣需考慮腎功能等背景。這張表用來理解路徑，不是僅憑一個數字自行確診。另一個重要推論是：改善葉酸相關造血表現，不等於已修復B12所涉及的所有代謝及神經問題。

## Homocystinuria：先問阻在回收，還是阻在出口

Homocysteine升高可以來自不同位置。典型CBS缺乏使轉硫出口受阻，homocysteine無法順利進入cystathionine方向，回流到methionine循環後，常見homocysteine高、methionine也高的組合。若是methionine synthase、MTHFR或某些cobalamin代謝問題，使再甲基化不足，則可能呈現homocysteine高而methionine低或正常。不能把所有「homocystinuria」都寫成同一個酵素缺陷。

| 阻塞方向 | 推理重點 | 不宜一概而論 |
|---|---|---|
| CBS相關轉硫缺陷 | 硫離開methionine循環的出口受限 | 並非所有病例都對B6有相同反應 |
| 再甲基化缺陷 | Homocysteine難變回methionine | 不是所有病例methionine都升高 |
| B12兩路都受影響 | Homocysteine與MMA可同時升高 | 仍需結合原因與檢驗背景 |
| 單純葉酸供應不足 | 再甲基化及核苷酸供應受影響 | 不是MMA升高的典型直接原因 |

CBS缺乏的經典臨床線索可包括晶狀體異位、細長體型／骨骼異常及血栓風險；表現可變，不是每位病人同時具備全部特徵。與Marfan樣體態比較時，代謝檢驗及血管表現能提供不同方向；只用身高或單一眼部特徵不夠。

國考有時把「folate可降低homocysteine」與「可預防所有心血管事件」寫在同一句。前者有代謝依據，後者需要臨床試驗與人群條件，不能直接等號相連。教材保留原題官方採計答案，同時把降低生化指標與改善臨床終點分開，避免把題幹的過度概括擴張成一般保健建議。

## Catecholamines：四個箭頭配四種工具

Tyrosine是dopamine、norepinephrine與epinephrine的前驅物。第一步tyrosine hydroxylase使tyrosine成為L-DOPA，需BH4與O₂，是兒茶酚胺合成的重要速率限制步驟。第二步aromatic L-amino acid decarboxylase（AADC，又稱DOPA decarboxylase）使用PLP移除CO₂，形成dopamine。順序為先在環上羥化，再從側鏈脫羧。

| 反應 | 酵素 | 本章必記工具 |
|---|---|---|
| Tyrosine → L-DOPA | Tyrosine hydroxylase | BH4、O₂ |
| L-DOPA → dopamine | AADC／DOPA decarboxylase | PLP |
| Dopamine → norepinephrine | Dopamine β-hydroxylase | Copper、ascorbate及O₂ |
| Norepinephrine → epinephrine | PNMT | SAM提供甲基 |

Dopamine β-hydroxylase與tyrosine hydroxylase都叫hydroxylase，但使用的輔助因子不同。PNMT是phenylethanolamine N-methyltransferase，甲基化的是胺基，並非再於芳香環增加一個羥基。腎上腺髓質的PNMT表現與局部高濃度glucocorticoid訊號有關，構成皮質與髓質的功能連結。

區室也能幫助記憶：dopamine可進入分泌囊泡，由囊泡中的DBH形成norepinephrine；在能表現PNMT的細胞中，後續才可形成epinephrine。不是每個製造dopamine的神經元都必定一路做到epinephrine，因為酵素表現決定細胞最終產物。

Tyrosine也與melanin及甲狀腺荷爾蒙有關，但不能直接沿用同一條catecholamine酵素表。Melanin涉及tyrosinase；甲狀腺荷爾蒙涉及thyroglobulin上的tyrosyl residues碘化與偶聯。**共用前驅物不代表共用後續反應。**

## Tryptophan、histidine與glutamate：三組神經傳導配對

Tryptophan先由tryptophan hydroxylase形成5-hydroxytryptophan，需BH4；再由PLP依賴的AADC脫羧形成serotonin（5-hydroxytryptamine，5-HT）。這與tyrosine→DOPA→dopamine有相似的「先羥化、再脫羧」結構，但起始胺基酸及產物不同。Tryptophan不是dopamine的典型直接碳源。

Serotonin再經acetylation與methylation可形成melatonin：常用教學路線為serotonin → N-acetylserotonin → melatonin，分別由acetyl-CoA供乙醯基、SAM供甲基。Serotonin的分解則可經MAO與後續醛代謝形成5-HIAA；不要把5-HIAA背成melatonin的必要中間物。

| 胺基酸 | 主要反應 | 產物 | 解題提醒 |
|---|---|---|---|
| Tryptophan | BH4相關羥化後，PLP相關脫羧 | Serotonin | 再加工可形成melatonin |
| Histidine | Histidine decarboxylase，PLP | Histamine | 不是先把imidazole環切掉 |
| Glutamate | Glutamate decarboxylase，PLP | GABA | 5C脫去CO₂，得到4C分子 |

GABA可經GABA transaminase與succinic semialdehyde相關步驟接到succinate，形成GABA shunt；因此神經傳導物質代謝也能與TCA中間物相連。GABA的合成與分解都可出現B6相關酵素，不能只記其中一端。

Serotonin、dopamine與情緒或行為的關係涉及受體、神經迴路、時間與疾病背景。考題用「抑制某合成酵素易導致憂鬱」是簡化的路徑提示，不宜推成任何憂鬱症都由單一神經傳導物質不足造成，更不能直接由補充前驅物推導療效。

## Arginine與NO：同一個受質，與尿素循環走不同出口

Nitric oxide synthase（NOS）以arginine、O₂與NADPH等形成NO及citrulline。NOS還含heme、FAD、FMN，並需BH4等輔助因子，功能上把電子傳遞與氧化反應串在一起。**NOS的另一個胺基酸產物是citrulline，不是ornithine。**Ornithine＋urea是arginase切開arginine時的產物，兩條路只因共用受質而容易混淆。

| 反應 | 主要產物 | 功能 |
|---|---|---|
| Arginase | Ornithine＋urea | 尿素生成的最後一步 |
| NOS | Citrulline＋NO | 局部訊息、血管舒張與免疫等 |
| Arginine:glycine amidinotransferase | Guanidinoacetate＋ornithine | Creatine合成的上游 |

eNOS及nNOS的活性典型受到Ca²⁺／calmodulin調節；iNOS與calmodulin結合較緊，可在較低Ca²⁺背景保持活性，且其酵素表現受誘導調控。因此「所有NOS都完全依賴一樣的急性Ca²⁺升降」不精確。BH4不足等情境可影響NOS的耦合狀態，也提醒我們輔酶不只是一個背誦名稱。

在典型血管平滑肌路徑，NO擴散進細胞後活化soluble guanylyl cyclase，使GTP形成cGMP，再經PKG等下游促進舒張。它不是先結合GPCR，也不是主要活化膜型guanylyl cyclase。ANP等natriuretic peptide的受體型guanylyl cyclase才屬另一個常見考試配對。要同時記住「NO→可溶型」與「ANP→膜受體型」。

## Creatine與phosphocreatine：先做分子，再存高能磷酸

Creatine合成需要glycine、arginine及methionine提供的SAM。上游arginine把guanidino相關基團交給glycine，形成guanidinoacetate並留下ornithine；接著guanidinoacetate methyltransferase利用SAM甲基化，形成creatine。Methionine不是整顆併入creatine骨架，而是以SAM提供一個甲基。

典型器官分工可用腎臟等組織參與上游、肝臟等組織參與甲基化，再由血液輸送到骨骼肌等需求處理解；實際酵素分布不只一個器官，因此不要背成只有腎與肝各能做唯一一步、其他細胞完全不能合成。

| 名稱 | 性質 | 反應關係 |
|---|---|---|
| Creatine | 可接受高能磷酸的分子 | 由Gly、Arg與SAM相關路徑合成 |
| Phosphocreatine | 高磷酸轉移潛能的緩衝池 | Creatine kinase可將磷酸交給ADP |
| Creatinine | 非酵素性環化形成的分解產物 | 不是用來把ADP變ATP的儲能分子 |

Creatine kinase催化可逆反應：**phosphocreatine＋ADP＋H⁺ ⇌ creatine＋ATP**。ATP充足時可補充phosphocreatine；需求突然增加時，可迅速將磷酸轉回ADP。這不是憑空製造能量，而是把先前投入的能量以不同形式暫存、在時間與位置上緩衝需求。短時間爆發活動可利用此系統，但長時間活動仍需糖解與氧化代謝等供應。

Creatine／phosphocreatine可非酵素性轉為creatinine。血中creatinine會受腎排除、生成量與肌肉量等影響，不是直接等於肌肉正在分解多少ATP。酵素CK與代謝物creatinine名稱相近，考試要先辨題目問的是酵素、儲能分子，還是排泄指標。

## Glutathione：三個胺基酸如何連到NADPH與抗氧化

Glutathione（GSH）是glutamate、cysteine與glycine組成的三胜肽。第一個鍵使用glutamate的γ-carboxyl，而非一般蛋白質肽鍵常用的α-carboxyl，因此稱γ-glutamyl-cysteinyl-glycine。Cysteine提供可氧化還原的thiol基團，是這個分子抗氧化功能的核心。合成由兩個ATP依賴的酵素步驟完成，並非由核糖體依mRNA逐字翻譯這三個胺基酸。

兩個GSH被氧化後，可由其cysteine的硫形成雙硫鍵，得到GSSG。Glutathione reductase使用NADPH，把GSSG還原成2 GSH。這裡直接提供還原力的是NADPH，不是ATP；雖然一開始合成GSH確實會花ATP，不能把不同步驟的能量來源混在一起。

| 酵素 | 主要工作 | 關鍵供應 |
|---|---|---|
| Glutathione peroxidase | 使用GSH還原過氧化物 | 多種典型GPx含selenocysteine；勿說所有isoform皆同樣含硒 |
| Glutathione reductase | GSSG → 2 GSH | NADPH；酵素含FAD |
| Superoxide dismutase | Superoxide → H₂O₂等 | 不是GSSG還原酵素 |
| Catalase | 處理H₂O₂ | 與GSH系統並列的另一條路 |

以過氧化氫為例，GPx可使2 GSH＋H₂O₂ → GSSG＋2 H₂O，再由reductase補回GSH。紅血球沒有粒線體，但仍可藉PPP供NADPH維持此系統，這把G6PD與氧化性溶血連起來。GSH也參與某些leukotriene合成及glutathione S-transferase相關結合反應；它不只是單一用途的「消自由基藥水」。

## 其他衍生物與整合定位：每種原料供的是哪一部分

Carnitine的合成與lysine及methionine相關：蛋白質中的lysyl residues先經SAM提供甲基，形成trimethyllysine；蛋白質分解釋出後，才經多步加工形成carnitine，部分羥化步驟涉及ascorbate、Fe²⁺及α-ketoglutarate等條件。不要直接把「游離lysine＋游離methionine」當成一步生成carnitine的化學方程式。Carnitine的功能則是在長鏈脂醯基進入粒線體氧化時參與穿梭，與creatine儲存高能磷酸完全不同。

Cysteine可形成taurine，後者可參與膽酸結合；cysteine也參與coenzyme A的含硫部分形成。Glycine除了creatine與GSH，亦參與purine及heme等合成；這些用途分別在核苷酸與血基質章再展開。Ornithine脫羧形成putrescine後，可接受decarboxylated SAM提供的aminopropyl單位，形成spermidine、spermine。這裡的decarboxylated SAM主要提供aminopropyl，不是沿用一般SAM甲基轉移的同一種反應。

| 題目線索 | 優先想到 | 用來排除的常見混淆 |
|---|---|---|
| ATP突然需求上升、CK | Phosphocreatine緩衝 | Carnitine不是直接磷酸供體 |
| 脂醯基跨粒線體內膜 | Carnitine shuttle | Creatine不是脂醯基載體 |
| γ-glutamyl鍵、Cys thiol | Glutathione | 非三個methionine組成 |
| Homocysteine＋5-methyl-THF | B12依賴再甲基化 | 不選CBS或PNMT |
| Serine變glycine | 一碳交給THF | 不是先氧化為CO₂才能使用 |
| Arginine生成citrulline | NOS／NO | 不是arginase產尿素 |

最後練習用「原料→反應→工具→用途」串出答案。例如tyrosine→羥化／脫羧→BH4／PLP→dopamine；glycine＋arginine→guanidinoacetate→SAM甲基化→creatine；GSSG→還原→NADPH→GSH再生。能把四個欄位連起來，才有辦法處理換酵素、換輔酶或換臨床線索的題目。
