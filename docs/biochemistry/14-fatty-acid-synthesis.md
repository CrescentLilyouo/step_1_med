# 脂肪酸合成與調控：把多餘碳源轉成可儲存的還原碳鏈

## 合成不是β氧化倒轉：先建立比較座標

脂肪酸合成的目的是在碳源、能量與還原力充足時，建立脂肪酸供儲存或其他脂質合成使用。人體典型de novo fatty acid synthesis主要在胞質進行，使用acetyl-CoA、malonyl-CoA與NADPH；β氧化則以粒線體為主要場地，逐次釋放acetyl-CoA並產生NADH及FAD相關電子。

| 面向 | 典型脂肪酸合成 | 粒線體β氧化 |
|---|---|---|
| 主要區室 | 胞質 | 基質及相關內膜酵素系統 |
| 碳鏈載體 | ACP的phosphopantetheine | CoA |
| 每輪碳變化 | 淨增加2C | 減少2C |
| 電子 | 消耗NADPH | 產NADH與FAD電子 |
| 關鍵入口控制 | ACC產malonyl-CoA | CPT-I控制長鏈脂醯基進入 |
| 羥基中間物 | D-3-hydroxyacyl | L-3-hydroxyacyl |

兩條路徑使用不同載體、輔酶、立體配置及酵素組織，因此不能只把四個箭頭反過來就得到合成。區室分離也讓細胞能分別調節，避免大量徒勞循環。

脂肪酸合成、TAG合成、膽固醇合成是不同層次。合成出palmitate只是取得一條脂肪酸，尚未接到glycerol上成TAG；膽固醇則是另一種碳骨架。看到題目寫lipogenesis時，應看它是在問脂肪酸de novo synthesis，還是更廣義的脂質儲存。

## 碳源如何離開粒線體：citrate不是只屬於TCA

醣類可經糖解成pyruvate，再由PDH形成粒線體acetyl-CoA。Acetyl-CoA不能直接自由穿越粒線體內膜到胞質，因此先與OAA縮合成citrate；citrate輸出後，由ATP-citrate lyase消耗ATP及CoA，生成胞質acetyl-CoA與OAA。

這個步驟同時解決「運碳」與「保留acetyl單位」的問題。並不是將CoA整包跨膜搬出，也不是利用carnitine把acetyl-CoA搬到胞質的典型de novo合成路徑。Carnitine shuttle上一章主要處理長鏈脂醯基進粒線體，方向與任務不同。

胞質OAA可由malate dehydrogenase使用NADH還原成malate。Malate可回粒線體，也可由NADP⁺依賴malic enzyme形成pyruvate、CO₂及NADPH；pyruvate再回粒線體，經pyruvate carboxylase補回OAA。若走後一條回路，額外涉及ATP與NADH，計算時不能把「合成核心」的成本當成整個由葡萄糖出發的總成本。

| 酵素 | 主要作用 | 能量／輔酶 |
|---|---|---|
| ATP-citrate lyase | Citrate→acetyl-CoA＋OAA | 耗ATP |
| Cytosolic malate dehydrogenase | OAA→malate | 耗NADH |
| NADP-dependent malic enzyme | Malate→pyruvate＋CO₂ | 產NADPH |
| Pyruvate carboxylase | Pyruvate→OAA | 耗ATP，需biotin |

Citrate因此有雙重意義：是運送acetyl單位的形式，也可成為能量與碳源充足的調控訊號。不能因它離開TCA就認為「TCA中間物都只能被氧化，不能用來合成」。

## ACC與biotin：先花ATP做出malonyl-CoA

Acetyl-CoA carboxylase（ACC）催化acetyl-CoA＋HCO₃⁻＋ATP→malonyl-CoA＋ADP＋Pi，是典型脂肪酸合成的重要承諾及速率限制步驟。Biotin攜帶活化的CO₂，先被羧化，再將羧基轉移到acetyl-CoA上。

Acetyl-CoA有2C，malonyl-CoA有3C。這一步不是把兩個acetyl-CoA接成四碳，也不是從malonate直接接CoA的主要生合成路徑。題目若問「速率限制步驟」，通常找ACC形成malonyl-CoA，而不是fatty acid synthase的第一輪縮合。

| 羧化反應 | 受質→產物 | 共同點 |
|---|---|---|
| ACC | Acetyl-CoA→malonyl-CoA | Biotin、ATP、HCO₃⁻ |
| Pyruvate carboxylase | Pyruvate→OAA | Biotin、ATP、HCO₃⁻ |
| Propionyl-CoA carboxylase | Propionyl-CoA→methylmalonyl-CoA | Biotin、ATP、HCO₃⁻ |

可把三個反應並排記，但不要把產物或區室混用。PC的acetyl-CoA活化訊號也不能直接搬到ACC題目，ACC的典型異位活化物是citrate。

ACC本身不是需要直接消耗NADPH的還原步驟，更不直接消耗NADH。整條脂肪酸合成確實需要NADPH，但電子是在後續FAS兩次還原中使用；「整條路徑需要」與「這個酵素直接需要」是不同題目。

## FAS與ACP：在一個多功能系統上搬運碳鏈

哺乳類fatty acid synthase（FAS）是多功能酵素系統，將裝載、縮合、還原、脫水與釋放等催化功能整合。Acyl carrier protein（ACP）部分帶有4′-phosphopantetheine，這條可移動的臂以末端硫基暫時抓住碳鏈，使中間物在催化位置間移動。

Phosphopantetheine來自pantothenic acid（維生素B5）；CoA也含此相關結構。兩者都能以硫酯鍵攜帶acyl group，卻不是同一分子：CoA通常是可擴散的輔酶，ACP則是蛋白質載體。不要因為都看到-SH就把合成中間物全部寫成acyl-CoA。

啟動時acetyl單位裝載到系統並轉至condensing enzyme的cysteine；malonyl單位裝到ACP。接下來acetyl與malonyl縮合，釋出CO₂並形成四碳β-ketoacyl-ACP。之後反覆把延長鏈移位、重新裝malonyl，讓反應持續。

**ACP不是血中的apolipoprotein。** 前者在合成機器內搬中間物；後者參與脂蛋白顆粒的結構、酵素活化或受體辨認。CPT、ACP與apo等名稱很像，但分別是跨膜脂醯基轉移、細胞內合成載體及血液脂質運輸相關蛋白。

## 每輪四步：縮合、還原、脫水、再還原

第一輪由2C acetyl primer與3C malonyl形成4C碳鏈，malonyl先前加上的一個碳以CO₂離開。此脫羧提供有利的反應推力，解釋為什麼先花ATP羧化，之後又把CO₂放掉，並不是多此一舉。

| 順序 | 變化 | 碳鏈／電子 |
|---|---|---|
| 1 縮合 | Acyl＋malonyl，釋CO₂ | 碳鏈淨長2C，成β-ketoacyl |
| 2 還原 | β-keto→D-3-hydroxyacyl | 消耗1 NADPH |
| 3 脫水 | 移去水形成雙鍵 | 不消耗第二個ATP |
| 4 還原 | 雙鍵被還原成飽和鏈 | 再消耗1 NADPH |

每輪使用2 NADPH。常見錯誤是把兩次還原記成一次，或看到四步就以為需4 ATP。FAS核心延長輪次的ATP主要已經花在上游形成malonyl-CoA，並非每個催化動作都另外水解ATP。

第一輪結束為4C，之後6、8、10、12、14、16C。人類典型FAS以palmitate（16:0）為主要終產物，由thioesterase水解釋放。它不是一次反應直接做出所有18C與20C脂肪酸，後續需elongation及desaturation等系統加工。

如果題目問碳來源，最終palmitate的16個碳可追到8個acetyl-CoA；其中7個先經ACC變malonyl-CoA。HCO₃⁻暫時加上的7個碳在縮合過程釋回，沒有淨留在palmitate裡。

## Palmitate合成的帳：8、7、7、14各代表什麼

以已在胞質可用的acetyl-CoA為起點，合成一個palmitate需1 acetyl primer加7 malonyl-CoA。這7個malonyl由7 acetyl-CoA與7 ATP製造；FAS延長7輪，每輪2 NADPH，共14 NADPH。

| 數字 | 代表意義 | 常見誤讀 |
|---|---|---|
| 8 acetyl-CoA | 1個啟動＋7個供malonyl形成 | 誤算成8個malonyl |
| 7 malonyl-CoA | 每個淨貢獻2C | 以3C乘7，忘記脫羧 |
| 7 ATP | ACC形成7個malonyl的核心成本 | 當成從glucose起算的全部成本 |
| 14 NADPH | 7輪×每輪2次還原 | 誤用NADH或只算7個 |

碳核對：2＋7×(3−1)＝16。輪次核對：(16−2)/2＝7。電子核對：7×2＝14 NADPH。把三條線分開寫，再合起來，比死背「八七七十四」可靠。

若從粒線體acetyl-CoA經citrate運到胞質，ATP-citrate lyase等還有額外成本；若問由葡萄糖生成，還需考慮糖解、PDH、NADPH來源與碳損失。除非題幹指定完整邊界，不應在不同路徑之間任意加減一個固定「總ATP」。

**練習換終點：**若僅用同樣FAS延長邏輯建立14C飽和鏈，需1 acetyl primer、6 malonyl、6 ATP及12 NADPH。這是計帳模型，並非說人類FAS主要終產物就改成14C；要分開化學推算與生理主要產品。

## NADPH從哪裡來：把上一章的PPP接回來

PPP氧化段每個G6P一次通過可產2 NADPH；胞質NADP⁺依賴malic enzyme等也能提供還原力。各組織的相對來源會隨狀態改變，因此「脂肪酸合成所有NADPH都必須由同一條路徑產生」不適合作為普遍規則。

若教學題限定14 NADPH全部來自PPP氧化段，需7次G6P通過氧化段。但這不等於淨消耗7個外來glucose分子：五碳糖可被重排、部分碳回收或另作核糖，淨碳需求須看整個系統邊界。從NADPH數字直接跳成飲食葡萄糖量，容易漏掉碳回收。

Malic enzyme與malate dehydrogenase也常混淆。前者在此討論的是malate氧化脫羧成pyruvate並產NADPH；後者是OAA與malate互轉，常使用NADH/NAD⁺。名字都有malate，卻不是同一產物，也不提供同一輔酶。

| 反應 | 是否產CO₂ | 典型輔酶重點 |
|---|---|---|
| PPP氧化段 | 有 | NADPH |
| NADP-dependent malic enzyme | 有 | NADPH |
| Cytosolic malate dehydrogenase | 無 | NADH/NAD⁺ |
| FAS還原反應 | 無須因還原另釋CO₂ | 消耗NADPH |

脂肪合成同時需要ATP與NADPH：ATP提供反應與運輸的能量成本，NADPH把碳還原到較高能量狀態。兩者不能彼此完全替代，這也是大量能量不等於一定能完成生合成的原因。

## 急性調控：citrate、長鏈acyl-CoA與AMPK

ACC整合碳源供應、產品累積與能量需求。Citrate是典型活化訊號，支持脂肪合成；palmitoyl-CoA等長鏈acyl-CoA可回饋抑制。能量不足時AMPK被活化，磷酸化ACC使其活性下降，減少在缺能量時繼續投入合成。

| 訊號 | ACC方向 | 推理 |
|---|---|---|
| Citrate增加 | 活化 | 碳源與能量充足的訊號 |
| 長鏈acyl-CoA累積 | 抑制 | 已有產品或脂醯供應足夠 |
| AMPK活化 | 抑制 | 節省ATP，偏向供能 |
| Insulin訊號 | 整體促進合成 | 支援餐後儲存狀態 |
| Glucagon等空腹訊號 | 整體降低合成 | 支援供糖與脂肪動員 |

「磷酸化＝活化」不是普遍規則。上一章glycogen phosphorylase磷酸化後偏活化，這裡ACC磷酸化後偏抑制；必須看被修飾的是哪個蛋白，不能只背共同動詞。

AMPK不只是「AMP碰到ACC」：它是激酶，經能量感測與上游調控後改變下游磷酸化。題目問直接作用者時選AMPK對ACC的修飾；問整體激素效果則看餐後與空腹情境。不要將所有glucagon效應硬畫成唯一一條不分組織的直線。

## 長期調控與器官差異：酵素數量也會改變

短期調控可在既有酵素上改變活性；長期營養狀態則會改變酵素表現。Insulin相關SREBP-1c與碳水化合物相關ChREBP等轉錄調控，能提升脂肪合成所需酵素的表現。這些訊號不只是在一個ACC分子上貼磷酸，而是改變整套合成能力。

肝臟與脂肪組織都可參與脂質合成，但兩者的葡萄糖攝取與輸出功能不同。不能把脂肪組織的insulin-responsive GLUT4直接套到肝細胞；肝臟主要以其他運輸與代謝調控安排碳流。肝臟合成的TAG可包裝成VLDL輸出，脂肪組織則以儲存為重要任務。

ACC1較常與胞質脂肪酸合成供應malonyl-CoA連結；ACC2常與靠近粒線體的malonyl-CoA調控脂肪酸氧化連結。這是理解功能分工的方式，不表示兩者在所有組織絕對互斥。考題若僅問ACC，一般先回答催化及調控核心，不自行加入題目沒有要求的isoform排除法。

把調控分三個時間層：受質與異位作用、磷酸化狀態、基因表現。餐後脂肪合成增加不是只靠其中一層；如果題目寫「數小時至數日的高碳水飲食」，轉錄層就比單一瞬間的allosteric變化更值得考慮。

## Malonyl-CoA協調供能與儲存：不要把合成品當成活化物

Malonyl-CoA是ACC產物、FAS延長受質，同時抑制CPT-I。這個設計使正在建立脂肪酸時，較少將同一批長鏈脂醯基立即送入粒線體氧化。它不是活化CPT-I，也不是直接將β氧化所有四個酵素逐一關閉。

餐後：insulin與碳源充足→ACC及合成能力上升→malonyl-CoA增加→CPT-I受抑，偏向脂質合成與儲存。空腹／能量壓力：ACC受抑→malonyl-CoA降低→CPT-I限制減輕→脂肪酸氧化增加。肝臟再視OAA與acetyl-CoA供需安排TCA或酮體生成。

| 題目改變的條件 | 預期方向 | 不能直接推出的結論 |
|---|---|---|
| AMPK活化 | ACC下降，malonyl-CoA下降 | 不代表所有細胞立即同樣速率產酮 |
| Malonyl-CoA增加 | 長鏈脂醯基進粒線體受限 | 不代表短中鏈進入機制完全相同 |
| CPT-I缺陷 | 長鏈氧化受限 | 不等於FAS失去ACP |
| 肝臟空腹 | 脂肪酸氧化、產酮可增加 | 不等於所有器官都能產或用酮 |

「肝臟空腹產酮」與「脂肪組織釋放脂肪酸」是跨器官合作，不宜畫在同一顆細胞裡當作全部反應。掌握訊號發生位置，才不會把glucagon對肝臟的直接作用誤套到骨骼肌。

## 延長與去飽和：palmitate之後還有哪些加工

Palmitate釋出後可再活化為palmitoyl-CoA，進入主要位於內質網的elongation系統。延長也可使用malonyl-CoA提供淨二碳，並需還原力；但載體以CoA為主，不是將整條鏈永久留在原本FAS的ACP上。

Desaturase在碳鏈引入雙鍵，需O₂及電子傳遞系統，與單純鏈延長不同。人體可形成Δ9等雙鍵，但不能從頭建立linoleic acid及α-linolenic acid所需的ω6、ω3家族起點，故它們是必需脂肪酸。

| 脂肪酸 | 記法 | 重點 |
|---|---|---|
| Palmitate | 16:0 | FAS主要產物 |
| Stearate | 18:0 | 可由延長形成 |
| Oleate | 18:1 Δ9；ω9 | 可由人體去飽和形成，非典型必需脂肪酸 |
| Linoleate | 18:2 Δ9,12；ω6 | 必需脂肪酸 |
| α-Linolenate | 18:3 Δ9,12,15；ω3 | 必需脂肪酸 |
| Arachidonate | 20:4 Δ5,8,11,14；ω6 | 可由linoleate經加工形成，轉換有條件與限制 |

Δ從羧基端計算雙鍵位置，ω從甲基端看第一個雙鍵。延長通常加在羧基端，因此ω家族維持，不能因18C變20C就把ω6變成ω3。人體由α-linolenate轉成EPA、DHA的效率有限，不宜把「具有途徑」寫成「可無限制滿足所有需要」。

## 從脂肪酸到膜與訊號：整合而不混成同一條路

脂肪酸可接到glycerol骨架形成TAG或glycerophospholipids，也可進其他複雜脂質。TAG偏向能量儲備，膜脂則有結構與訊號功能；脂肪酸碳鏈長度與不飽和程度會影響脂質性質，但不能由單一鏈的性質推斷整個細胞膜的全部行為。

Arachidonate可由膜磷脂釋出，再經cyclooxygenase（COX）路徑形成prostaglandins與thromboxanes，或經lipoxygenase路徑形成leukotrienes等訊號分子。COX不是FAS，eicosanoid不是TAG；先分清「建立碳鏈」、「存放碳鏈」與「加工成局部訊號」三件事。更完整的脂質運輸與複雜脂質疾病留待後續章節展開。

**整合情境：吃飽後糖很多，如何支持脂肪酸合成？** 糖解與PDH供acetyl-CoA；citrate把acetyl單位帶到胞質；ACC用ATP與biotin產malonyl-CoA；PPP與malic enzyme等供NADPH；FAS以ACP攜帶碳鏈延長；同時malonyl-CoA限制CPT-I，避免立即大量氧化。這是一張跨區室、跨路徑的圖，不是一個酵素完成所有工作。

**反向檢核：缺能量時為何停合成？** 因合成消耗ATP與還原力，AMPK抑制ACC使malonyl-CoA下降，同時較有利脂肪酸進入粒線體供能。若你能從能量需求推回酵素方向，就不必將每一個調控箭頭當作孤立的記憶點。
