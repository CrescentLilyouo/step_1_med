biochemistryChapters.push({
  "id": "fatty-acid-synthesis",
  "number": "14",
  "title": "脂肪酸合成與調控：從citrate到palmitate",
  "summary": "追蹤胞質碳源、ACC與FAS的分工，算清ATP與NADPH，再理解餐後儲存及空腹氧化的切換。",
  "sources": "Harper’s Illustrated Biochemistry, 31st ed., Ch. 23 Biosynthesis of Fatty Acids & Eicosanoids（印刷頁216–228）；區室與氧化協調連結Ch. 22。",
  "references": "<p>Harper’s Illustrated Biochemistry, 31st ed., Ch. 23 Biosynthesis of Fatty Acids &amp; Eicosanoids（印刷頁216–228）；區室與氧化協調連結Ch. 22。</p><p>正文與圖為原創教學重組，非逐段翻譯。題目取自現有歷屆題庫，官方採計答案與更正版本原樣保留；機轉解析另行撰寫。精選題數不等同完整考頻統計。</p>",
  "sections": [
    {
      "id": "topic-1",
      "title": "合成不是β氧化倒轉：先建立比較座標",
      "html": "<p>脂肪酸合成的目的是在碳源、能量與還原力充足時，建立脂肪酸供儲存或其他脂質合成使用。人體典型de\nnovo fatty acid\nsynthesis主要在胞質進行，使用acetyl-CoA、malonyl-CoA與NADPH；β氧化則以粒線體為主要場地，逐次釋放acetyl-CoA並產生NADH及FAD相關電子。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>面向</th>\n<th>典型脂肪酸合成</th>\n<th>粒線體β氧化</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>主要區室</td>\n<td>胞質</td>\n<td>基質及相關內膜酵素系統</td>\n</tr>\n<tr class=\"even\">\n<td>碳鏈載體</td>\n<td>ACP的phosphopantetheine</td>\n<td>CoA</td>\n</tr>\n<tr class=\"odd\">\n<td>每輪碳變化</td>\n<td>淨增加2C</td>\n<td>減少2C</td>\n</tr>\n<tr class=\"even\">\n<td>電子</td>\n<td>消耗NADPH</td>\n<td>產NADH與FAD電子</td>\n</tr>\n<tr class=\"odd\">\n<td>關鍵入口控制</td>\n<td>ACC產malonyl-CoA</td>\n<td>CPT-I控制長鏈脂醯基進入</td>\n</tr>\n<tr class=\"even\">\n<td>羥基中間物</td>\n<td>D-3-hydroxyacyl</td>\n<td>L-3-hydroxyacyl</td>\n</tr>\n</tbody>\n</table></div>\n<p>兩條路徑使用不同載體、輔酶、立體配置及酵素組織，因此不能只把四個箭頭反過來就得到合成。區室分離也讓細胞能分別調節，避免大量徒勞循環。</p>\n<p>脂肪酸合成、TAG合成、膽固醇合成是不同層次。合成出palmitate只是取得一條脂肪酸，尚未接到glycerol上成TAG；膽固醇則是另一種碳骨架。看到題目寫lipogenesis時，應看它是在問脂肪酸de\nnovo synthesis，還是更廣義的脂質儲存。</p>\n"
    },
    {
      "id": "topic-2",
      "title": "碳源如何離開粒線體：citrate不是只屬於TCA",
      "html": "<p>醣類可經糖解成pyruvate，再由PDH形成粒線體acetyl-CoA。Acetyl-CoA不能直接自由穿越粒線體內膜到胞質，因此先與OAA縮合成citrate；citrate輸出後，由ATP-citrate\nlyase消耗ATP及CoA，生成胞質acetyl-CoA與OAA。</p>\n<p>這個步驟同時解決「運碳」與「保留acetyl單位」的問題。並不是將CoA整包跨膜搬出，也不是利用carnitine把acetyl-CoA搬到胞質的典型de\nnovo合成路徑。Carnitine\nshuttle上一章主要處理長鏈脂醯基進粒線體，方向與任務不同。</p>\n<p>胞質OAA可由malate\ndehydrogenase使用NADH還原成malate。Malate可回粒線體，也可由NADP⁺依賴malic\nenzyme形成pyruvate、CO₂及NADPH；pyruvate再回粒線體，經pyruvate\ncarboxylase補回OAA。若走後一條回路，額外涉及ATP與NADH，計算時不能把「合成核心」的成本當成整個由葡萄糖出發的總成本。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>酵素</th>\n<th>主要作用</th>\n<th>能量／輔酶</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>ATP-citrate lyase</td>\n<td>Citrate→acetyl-CoA＋OAA</td>\n<td>耗ATP</td>\n</tr>\n<tr class=\"even\">\n<td>Cytosolic malate dehydrogenase</td>\n<td>OAA→malate</td>\n<td>耗NADH</td>\n</tr>\n<tr class=\"odd\">\n<td>NADP-dependent malic enzyme</td>\n<td>Malate→pyruvate＋CO₂</td>\n<td>產NADPH</td>\n</tr>\n<tr class=\"even\">\n<td>Pyruvate carboxylase</td>\n<td>Pyruvate→OAA</td>\n<td>耗ATP，需biotin</td>\n</tr>\n</tbody>\n</table></div>\n<p>Citrate因此有雙重意義：是運送acetyl單位的形式，也可成為能量與碳源充足的調控訊號。不能因它離開TCA就認為「TCA中間物都只能被氧化，不能用來合成」。</p>\n"
    },
    {
      "id": "topic-3",
      "title": "ACC與biotin：先花ATP做出malonyl-CoA",
      "html": "<p>Acetyl-CoA\ncarboxylase（ACC）催化acetyl-CoA＋HCO₃⁻＋ATP→malonyl-CoA＋ADP＋Pi，是典型脂肪酸合成的重要承諾及速率限制步驟。Biotin攜帶活化的CO₂，先被羧化，再將羧基轉移到acetyl-CoA上。</p>\n<p>Acetyl-CoA有2C，malonyl-CoA有3C。這一步不是把兩個acetyl-CoA接成四碳，也不是從malonate直接接CoA的主要生合成路徑。題目若問「速率限制步驟」，通常找ACC形成malonyl-CoA，而不是fatty\nacid synthase的第一輪縮合。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>羧化反應</th>\n<th>受質→產物</th>\n<th>共同點</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>ACC</td>\n<td>Acetyl-CoA→malonyl-CoA</td>\n<td>Biotin、ATP、HCO₃⁻</td>\n</tr>\n<tr class=\"even\">\n<td>Pyruvate carboxylase</td>\n<td>Pyruvate→OAA</td>\n<td>Biotin、ATP、HCO₃⁻</td>\n</tr>\n<tr class=\"odd\">\n<td>Propionyl-CoA carboxylase</td>\n<td>Propionyl-CoA→methylmalonyl-CoA</td>\n<td>Biotin、ATP、HCO₃⁻</td>\n</tr>\n</tbody>\n</table></div>\n<p>可把三個反應並排記，但不要把產物或區室混用。PC的acetyl-CoA活化訊號也不能直接搬到ACC題目，ACC的典型異位活化物是citrate。</p>\n<p>ACC本身不是需要直接消耗NADPH的還原步驟，更不直接消耗NADH。整條脂肪酸合成確實需要NADPH，但電子是在後續FAS兩次還原中使用；「整條路徑需要」與「這個酵素直接需要」是不同題目。</p>\n"
    },
    {
      "id": "topic-4",
      "title": "FAS與ACP：在一個多功能系統上搬運碳鏈",
      "html": "<p>哺乳類fatty acid\nsynthase（FAS）是多功能酵素系統，將裝載、縮合、還原、脫水與釋放等催化功能整合。Acyl\ncarrier\nprotein（ACP）部分帶有4′-phosphopantetheine，這條可移動的臂以末端硫基暫時抓住碳鏈，使中間物在催化位置間移動。</p>\n<p>Phosphopantetheine來自pantothenic\nacid（維生素B5）；CoA也含此相關結構。兩者都能以硫酯鍵攜帶acyl\ngroup，卻不是同一分子：CoA通常是可擴散的輔酶，ACP則是蛋白質載體。不要因為都看到-SH就把合成中間物全部寫成acyl-CoA。</p>\n<p>啟動時acetyl單位裝載到系統並轉至condensing\nenzyme的cysteine；malonyl單位裝到ACP。接下來acetyl與malonyl縮合，釋出CO₂並形成四碳β-ketoacyl-ACP。之後反覆把延長鏈移位、重新裝malonyl，讓反應持續。</p>\n<p><strong>ACP不是血中的apolipoprotein。</strong>\n前者在合成機器內搬中間物；後者參與脂蛋白顆粒的結構、酵素活化或受體辨認。CPT、ACP與apo等名稱很像，但分別是跨膜脂醯基轉移、細胞內合成載體及血液脂質運輸相關蛋白。</p>\n"
    },
    {
      "id": "topic-5",
      "title": "每輪四步：縮合、還原、脫水、再還原",
      "html": "<p>第一輪由2C acetyl primer與3C\nmalonyl形成4C碳鏈，malonyl先前加上的一個碳以CO₂離開。此脫羧提供有利的反應推力，解釋為什麼先花ATP羧化，之後又把CO₂放掉，並不是多此一舉。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>順序</th>\n<th>變化</th>\n<th>碳鏈／電子</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>1 縮合</td>\n<td>Acyl＋malonyl，釋CO₂</td>\n<td>碳鏈淨長2C，成β-ketoacyl</td>\n</tr>\n<tr class=\"even\">\n<td>2 還原</td>\n<td>β-keto→D-3-hydroxyacyl</td>\n<td>消耗1 NADPH</td>\n</tr>\n<tr class=\"odd\">\n<td>3 脫水</td>\n<td>移去水形成雙鍵</td>\n<td>不消耗第二個ATP</td>\n</tr>\n<tr class=\"even\">\n<td>4 還原</td>\n<td>雙鍵被還原成飽和鏈</td>\n<td>再消耗1 NADPH</td>\n</tr>\n</tbody>\n</table></div>\n<p>每輪使用2 NADPH。常見錯誤是把兩次還原記成一次，或看到四步就以為需4\nATP。FAS核心延長輪次的ATP主要已經花在上游形成malonyl-CoA，並非每個催化動作都另外水解ATP。</p>\n<p>第一輪結束為4C，之後6、8、10、12、14、16C。人類典型FAS以palmitate（16:0）為主要終產物，由thioesterase水解釋放。它不是一次反應直接做出所有18C與20C脂肪酸，後續需elongation及desaturation等系統加工。</p>\n<p>如果題目問碳來源，最終palmitate的16個碳可追到8個acetyl-CoA；其中7個先經ACC變malonyl-CoA。HCO₃⁻暫時加上的7個碳在縮合過程釋回，沒有淨留在palmitate裡。</p>\n"
    },
    {
      "id": "topic-6",
      "title": "Palmitate合成的帳：8、7、7、14各代表什麼",
      "html": "<p>以已在胞質可用的acetyl-CoA為起點，合成一個palmitate需1 acetyl\nprimer加7 malonyl-CoA。這7個malonyl由7 acetyl-CoA與7\nATP製造；FAS延長7輪，每輪2 NADPH，共14 NADPH。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>數字</th>\n<th>代表意義</th>\n<th>常見誤讀</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>8 acetyl-CoA</td>\n<td>1個啟動＋7個供malonyl形成</td>\n<td>誤算成8個malonyl</td>\n</tr>\n<tr class=\"even\">\n<td>7 malonyl-CoA</td>\n<td>每個淨貢獻2C</td>\n<td>以3C乘7，忘記脫羧</td>\n</tr>\n<tr class=\"odd\">\n<td>7 ATP</td>\n<td>ACC形成7個malonyl的核心成本</td>\n<td>當成從glucose起算的全部成本</td>\n</tr>\n<tr class=\"even\">\n<td>14 NADPH</td>\n<td>7輪×每輪2次還原</td>\n<td>誤用NADH或只算7個</td>\n</tr>\n</tbody>\n</table></div>\n<p>碳核對：2＋7×(3−1)＝16。輪次核對：(16−2)/2＝7。電子核對：7×2＝14\nNADPH。把三條線分開寫，再合起來，比死背「八七七十四」可靠。</p>\n<p>若從粒線體acetyl-CoA經citrate運到胞質，ATP-citrate\nlyase等還有額外成本；若問由葡萄糖生成，還需考慮糖解、PDH、NADPH來源與碳損失。除非題幹指定完整邊界，不應在不同路徑之間任意加減一個固定「總ATP」。</p>\n<p><strong>練習換終點：</strong>若僅用同樣FAS延長邏輯建立14C飽和鏈，需1\nacetyl primer、6 malonyl、6 ATP及12\nNADPH。這是計帳模型，並非說人類FAS主要終產物就改成14C；要分開化學推算與生理主要產品。</p>\n"
    },
    {
      "id": "topic-7",
      "title": "NADPH從哪裡來：把上一章的PPP接回來",
      "html": "<p>PPP氧化段每個G6P一次通過可產2 NADPH；胞質NADP⁺依賴malic\nenzyme等也能提供還原力。各組織的相對來源會隨狀態改變，因此「脂肪酸合成所有NADPH都必須由同一條路徑產生」不適合作為普遍規則。</p>\n<p>若教學題限定14\nNADPH全部來自PPP氧化段，需7次G6P通過氧化段。但這不等於淨消耗7個外來glucose分子：五碳糖可被重排、部分碳回收或另作核糖，淨碳需求須看整個系統邊界。從NADPH數字直接跳成飲食葡萄糖量，容易漏掉碳回收。</p>\n<p>Malic enzyme與malate\ndehydrogenase也常混淆。前者在此討論的是malate氧化脫羧成pyruvate並產NADPH；後者是OAA與malate互轉，常使用NADH/NAD⁺。名字都有malate，卻不是同一產物，也不提供同一輔酶。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>反應</th>\n<th>是否產CO₂</th>\n<th>典型輔酶重點</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>PPP氧化段</td>\n<td>有</td>\n<td>NADPH</td>\n</tr>\n<tr class=\"even\">\n<td>NADP-dependent malic enzyme</td>\n<td>有</td>\n<td>NADPH</td>\n</tr>\n<tr class=\"odd\">\n<td>Cytosolic malate dehydrogenase</td>\n<td>無</td>\n<td>NADH/NAD⁺</td>\n</tr>\n<tr class=\"even\">\n<td>FAS還原反應</td>\n<td>無須因還原另釋CO₂</td>\n<td>消耗NADPH</td>\n</tr>\n</tbody>\n</table></div>\n<p>脂肪合成同時需要ATP與NADPH：ATP提供反應與運輸的能量成本，NADPH把碳還原到較高能量狀態。兩者不能彼此完全替代，這也是大量能量不等於一定能完成生合成的原因。</p>\n"
    },
    {
      "id": "topic-8",
      "title": "急性調控：citrate、長鏈acyl-CoA與AMPK",
      "html": "<p>ACC整合碳源供應、產品累積與能量需求。Citrate是典型活化訊號，支持脂肪合成；palmitoyl-CoA等長鏈acyl-CoA可回饋抑制。能量不足時AMPK被活化，磷酸化ACC使其活性下降，減少在缺能量時繼續投入合成。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>訊號</th>\n<th>ACC方向</th>\n<th>推理</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Citrate增加</td>\n<td>活化</td>\n<td>碳源與能量充足的訊號</td>\n</tr>\n<tr class=\"even\">\n<td>長鏈acyl-CoA累積</td>\n<td>抑制</td>\n<td>已有產品或脂醯供應足夠</td>\n</tr>\n<tr class=\"odd\">\n<td>AMPK活化</td>\n<td>抑制</td>\n<td>節省ATP，偏向供能</td>\n</tr>\n<tr class=\"even\">\n<td>Insulin訊號</td>\n<td>整體促進合成</td>\n<td>支援餐後儲存狀態</td>\n</tr>\n<tr class=\"odd\">\n<td>Glucagon等空腹訊號</td>\n<td>整體降低合成</td>\n<td>支援供糖與脂肪動員</td>\n</tr>\n</tbody>\n</table></div>\n<p>「磷酸化＝活化」不是普遍規則。上一章glycogen\nphosphorylase磷酸化後偏活化，這裡ACC磷酸化後偏抑制；必須看被修飾的是哪個蛋白，不能只背共同動詞。</p>\n<p>AMPK不只是「AMP碰到ACC」：它是激酶，經能量感測與上游調控後改變下游磷酸化。題目問直接作用者時選AMPK對ACC的修飾；問整體激素效果則看餐後與空腹情境。不要將所有glucagon效應硬畫成唯一一條不分組織的直線。</p>\n"
    },
    {
      "id": "topic-9",
      "title": "長期調控與器官差異：酵素數量也會改變",
      "html": "<p>短期調控可在既有酵素上改變活性；長期營養狀態則會改變酵素表現。Insulin相關SREBP-1c與碳水化合物相關ChREBP等轉錄調控，能提升脂肪合成所需酵素的表現。這些訊號不只是在一個ACC分子上貼磷酸，而是改變整套合成能力。</p>\n<p>肝臟與脂肪組織都可參與脂質合成，但兩者的葡萄糖攝取與輸出功能不同。不能把脂肪組織的insulin-responsive\nGLUT4直接套到肝細胞；肝臟主要以其他運輸與代謝調控安排碳流。肝臟合成的TAG可包裝成VLDL輸出，脂肪組織則以儲存為重要任務。</p>\n<p>ACC1較常與胞質脂肪酸合成供應malonyl-CoA連結；ACC2常與靠近粒線體的malonyl-CoA調控脂肪酸氧化連結。這是理解功能分工的方式，不表示兩者在所有組織絕對互斥。考題若僅問ACC，一般先回答催化及調控核心，不自行加入題目沒有要求的isoform排除法。</p>\n<p>把調控分三個時間層：受質與異位作用、磷酸化狀態、基因表現。餐後脂肪合成增加不是只靠其中一層；如果題目寫「數小時至數日的高碳水飲食」，轉錄層就比單一瞬間的allosteric變化更值得考慮。</p>\n"
    },
    {
      "id": "topic-10",
      "title": "Malonyl-CoA協調供能與儲存：不要把合成品當成活化物",
      "html": "<figure><div class=\"table-scroll\" tabindex=\"0\"><img src=\"assets/biochemistry/lipid-acc-switch.svg\" alt=\"ACC、malonyl-CoA與CPT-I：餐後合成及能量壓力下氧化的協調\" style=\"width:100%;min-width:540px;max-width:780px;height:auto\"></div><figcaption>ACC、malonyl-CoA與CPT-I：餐後合成及能量壓力下氧化的協調。圖中為教學模型；手機可橫向捲動，條件與例外見正文。</figcaption></figure><p>Malonyl-CoA是ACC產物、FAS延長受質，同時抑制CPT-I。這個設計使正在建立脂肪酸時，較少將同一批長鏈脂醯基立即送入粒線體氧化。它不是活化CPT-I，也不是直接將β氧化所有四個酵素逐一關閉。</p>\n<p>餐後：insulin與碳源充足→ACC及合成能力上升→malonyl-CoA增加→CPT-I受抑，偏向脂質合成與儲存。空腹／能量壓力：ACC受抑→malonyl-CoA降低→CPT-I限制減輕→脂肪酸氧化增加。肝臟再視OAA與acetyl-CoA供需安排TCA或酮體生成。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>題目改變的條件</th>\n<th>預期方向</th>\n<th>不能直接推出的結論</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>AMPK活化</td>\n<td>ACC下降，malonyl-CoA下降</td>\n<td>不代表所有細胞立即同樣速率產酮</td>\n</tr>\n<tr class=\"even\">\n<td>Malonyl-CoA增加</td>\n<td>長鏈脂醯基進粒線體受限</td>\n<td>不代表短中鏈進入機制完全相同</td>\n</tr>\n<tr class=\"odd\">\n<td>CPT-I缺陷</td>\n<td>長鏈氧化受限</td>\n<td>不等於FAS失去ACP</td>\n</tr>\n<tr class=\"even\">\n<td>肝臟空腹</td>\n<td>脂肪酸氧化、產酮可增加</td>\n<td>不等於所有器官都能產或用酮</td>\n</tr>\n</tbody>\n</table></div>\n<p>「肝臟空腹產酮」與「脂肪組織釋放脂肪酸」是跨器官合作，不宜畫在同一顆細胞裡當作全部反應。掌握訊號發生位置，才不會把glucagon對肝臟的直接作用誤套到骨骼肌。</p>\n"
    },
    {
      "id": "topic-11",
      "title": "延長與去飽和：palmitate之後還有哪些加工",
      "html": "<p>Palmitate釋出後可再活化為palmitoyl-CoA，進入主要位於內質網的elongation系統。延長也可使用malonyl-CoA提供淨二碳，並需還原力；但載體以CoA為主，不是將整條鏈永久留在原本FAS的ACP上。</p>\n<p>Desaturase在碳鏈引入雙鍵，需O₂及電子傳遞系統，與單純鏈延長不同。人體可形成Δ9等雙鍵，但不能從頭建立linoleic\nacid及α-linolenic acid所需的ω6、ω3家族起點，故它們是必需脂肪酸。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>脂肪酸</th>\n<th>記法</th>\n<th>重點</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Palmitate</td>\n<td>16:0</td>\n<td>FAS主要產物</td>\n</tr>\n<tr class=\"even\">\n<td>Stearate</td>\n<td>18:0</td>\n<td>可由延長形成</td>\n</tr>\n<tr class=\"odd\">\n<td>Oleate</td>\n<td>18:1 Δ9；ω9</td>\n<td>可由人體去飽和形成，非典型必需脂肪酸</td>\n</tr>\n<tr class=\"even\">\n<td>Linoleate</td>\n<td>18:2 Δ9,12；ω6</td>\n<td>必需脂肪酸</td>\n</tr>\n<tr class=\"odd\">\n<td>α-Linolenate</td>\n<td>18:3 Δ9,12,15；ω3</td>\n<td>必需脂肪酸</td>\n</tr>\n<tr class=\"even\">\n<td>Arachidonate</td>\n<td>20:4 Δ5,8,11,14；ω6</td>\n<td>可由linoleate經加工形成，轉換有條件與限制</td>\n</tr>\n</tbody>\n</table></div>\n<p>Δ從羧基端計算雙鍵位置，ω從甲基端看第一個雙鍵。延長通常加在羧基端，因此ω家族維持，不能因18C變20C就把ω6變成ω3。人體由α-linolenate轉成EPA、DHA的效率有限，不宜把「具有途徑」寫成「可無限制滿足所有需要」。</p>\n"
    },
    {
      "id": "topic-12",
      "title": "從脂肪酸到膜與訊號：整合而不混成同一條路",
      "html": "<p>脂肪酸可接到glycerol骨架形成TAG或glycerophospholipids，也可進其他複雜脂質。TAG偏向能量儲備，膜脂則有結構與訊號功能；脂肪酸碳鏈長度與不飽和程度會影響脂質性質，但不能由單一鏈的性質推斷整個細胞膜的全部行為。</p>\n<p>Arachidonate可由膜磷脂釋出，再經cyclooxygenase（COX）路徑形成prostaglandins與thromboxanes，或經lipoxygenase路徑形成leukotrienes等訊號分子。COX不是FAS，eicosanoid不是TAG；先分清「建立碳鏈」、「存放碳鏈」與「加工成局部訊號」三件事。更完整的脂質運輸與複雜脂質疾病留待後續章節展開。</p>\n<p><strong>整合情境：吃飽後糖很多，如何支持脂肪酸合成？</strong>\n糖解與PDH供acetyl-CoA；citrate把acetyl單位帶到胞質；ACC用ATP與biotin產malonyl-CoA；PPP與malic\nenzyme等供NADPH；FAS以ACP攜帶碳鏈延長；同時malonyl-CoA限制CPT-I，避免立即大量氧化。這是一張跨區室、跨路徑的圖，不是一個酵素完成所有工作。</p>\n<p><strong>反向檢核：缺能量時為何停合成？</strong>\n因合成消耗ATP與還原力，AMPK抑制ACC使malonyl-CoA下降，同時較有利脂肪酸進入粒線體供能。若你能從能量需求推回酵素方向，就不必將每一個調控箭頭當作孤立的記憶點。</p>\n"
    }
  ],
  "recalls": [
    [
      "合成為何不是β氧化倒轉？",
      "區室、載體ACP/CoA、NADPH與NADH/FAD、酵素組織及羥基立體配置都不同。"
    ],
    [
      "胞質acetyl-CoA如何由粒線體碳源取得？",
      "先形成並輸出citrate，再由ATP-citrate lyase用ATP與CoA切回acetyl-CoA及OAA。"
    ],
    [
      "ACC直接用NADPH嗎？",
      "不；它用ATP、HCO₃⁻與biotin羧化acetyl-CoA成malonyl-CoA，NADPH用在後續FAS還原。"
    ],
    [
      "ACP的可動手臂來自哪個維生素？",
      "4′-phosphopantetheine與B5相關，以末端硫基載acyl chain；不是血中apolipoprotein。"
    ],
    [
      "Malonyl有3C為何每輪只增加2C？",
      "先前羧化加入的碳在縮合時以CO₂離開，淨留下2C。"
    ],
    [
      "合成一個palmitate需多少acetyl-CoA與NADPH？",
      "總8 acetyl-CoA，其中7形成malonyl；7輪共14 NADPH，ACC核心耗7 ATP。"
    ],
    [
      "Malic enzyme與malate dehydrogenase是一樣的NADPH來源嗎？",
      "不是；此處NADP-dependent malic enzyme將malate脫羧成pyruvate產NADPH；MDH處理OAA/malate與NADH/NAD⁺。"
    ],
    [
      "AMPK活化後ACC如何變？",
      "被磷酸化而活性降低，減少malonyl-CoA生成；磷酸化不是必然活化。"
    ],
    [
      "長期高碳水飲食只改變ACC磷酸化嗎？",
      "不只；ChREBP、SREBP-1c等可改變合成酵素表現，須區分急性活性與長期酵素量。"
    ],
    [
      "Malonyl-CoA如何連接合成與氧化？",
      "它是合成原料，也抑制CPT-I；降低時可減輕長鏈脂醯基進粒線體的限制。"
    ],
    [
      "延長18C ω6成20C後會變ω3嗎？",
      "不會；在羧基端延長不改變從甲基端看第一個雙鍵的家族。"
    ],
    [
      "FAS、TAG合成與COX各處理哪層工作？",
      "FAS建立脂肪酸鏈，TAG合成把鏈接到glycerol，COX將arachidonate加工成局部訊號前驅物。"
    ]
  ],
  "readingIntro": "先讀機轉與碳數，再用表格核對輔酶、區室及能量；每節閉卷回想，最後以歷屆題檢查能否處理條件改變。",
  "figure": "<p>先追碳流、還原力與區室，再讀能量收支、器官調控與疾病連結。每節末可閉卷回答，歷屆題分組連回對應小節。</p>",
  "questions": [
    {
      "title": "01　從胞質acetyl-CoA合成palmitate，列核心用量。",
      "prompt": "<p>從胞質acetyl-CoA合成palmitate，列核心用量。</p>",
      "answer": "<p>8 acetyl-CoA、7 ATP與14 NADPH；1 primer＋7 malonyl，7輪各用2 NADPH。</p>"
    },
    {
      "title": "02　把7 malonyl的21C全算入palmitate錯在哪裡？",
      "prompt": "<p>把7 malonyl的21C全算入palmitate錯在哪裡？</p>",
      "answer": "<p>每次縮合釋一個先前加上的CO₂；2＋7×(3−1)＝16C。</p>"
    },
    {
      "title": "03　若從粒線體acetyl-CoA出發，7 ATP就是所有成本嗎？",
      "prompt": "<p>若從粒線體acetyl-CoA出發，7 ATP就是所有成本嗎？</p>",
      "answer": "<p>不是，還需citrate輸出後ATP-citrate lyase等成本；OAA回收路線也影響總帳，須依題目邊界。</p>"
    },
    {
      "title": "04　ACC反應缺NADH會立即沒有電子可用嗎？",
      "prompt": "<p>ACC反應缺NADH會立即沒有電子可用嗎？</p>",
      "answer": "<p>ACC不是還原反應，直接需要ATP、HCO₃⁻與biotin；FAS兩個還原步驟用NADPH，不是NADH。</p>"
    },
    {
      "title": "05　能量不足且AMPK活化，預測ACC、malonyl與CPT-I。",
      "prompt": "<p>能量不足且AMPK活化，預測ACC、malonyl與CPT-I。</p>",
      "answer": "<p>ACC活性下降，malonyl-CoA下降，CPT-I受抑減輕，有利長鏈脂肪酸氧化。</p>"
    },
    {
      "title": "06　為何citrate同時是原料運輸形式及調控訊號？",
      "prompt": "<p>為何citrate同時是原料運輸形式及調控訊號？</p>",
      "answer": "<p>它將acetyl單位從粒線體送到胞質，並可活化ACC，使碳供應與合成能力配合。</p>"
    },
    {
      "title": "07　ACP與CoA的共同與不同點？",
      "prompt": "<p>ACP與CoA的共同與不同點？</p>",
      "answer": "<p>都含phosphopantetheine相關結構並以硫酯載acyl；ACP是蛋白質載體，CoA是輔酶，典型合成與β氧化使用不同載體。</p>"
    },
    {
      "title": "08　把PPP產生的NADPH拿去FAS，是不是直接用它產ATP？",
      "prompt": "<p>把PPP產生的NADPH拿去FAS，是不是直接用它產ATP？</p>",
      "answer": "<p>不是；NADPH的電子用於還原碳鏈，ATP另供羧化與運輸等反應成本。</p>"
    },
    {
      "title": "09　Oleate與linoleate哪個是典型必需脂肪酸？",
      "prompt": "<p>Oleate與linoleate哪個是典型必需脂肪酸？</p>",
      "answer": "<p>Linoleate；人體可形成oleate的Δ9雙鍵，但不能從頭形成ω6與ω3家族起點。α-Linolenate也是必需脂肪酸。</p>"
    },
    {
      "title": "10　餐後肝臟脂肪合成增加是否意味GLUT4移到肝膜？",
      "prompt": "<p>餐後肝臟脂肪合成增加是否意味GLUT4移到肝膜？</p>",
      "answer": "<p>不能套用脂肪與肌肉的GLUT4敘述到肝臟；肝臟靠其運輸與代謝、轉錄調控處理碳流，insulin效應需分器官。</p>"
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
        "title": "ACC的反應與速率限制",
        "topic": "topic-3",
        "summary": "區分核心羧化與後續還原。",
        "questions": [
          {
            "number": 90,
            "text": "90.脂肪酸生合成之速率決定步驟(rate-limiting step)為: \n \nA.從acetate合成acetyl-CoA \nB.acetyl-CoA與malonyl-CoA的縮合反應(condensation) \nC.acetyl-CoA carboxylase所催化合成malonyl-CoA的反應步驟 \nD.使malonate轉變為malonyl-CoA的反應步驟 \n",
            "regions": [
              {
                "page": 13,
                "rect": [
                  30.0,
                  695.05,
                  570.0,
                  807.0
                ]
              }
            ],
            "id": "107-1-1-90",
            "year": 107,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/107/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=107020&c=301&s=55&q=1&verify=step1-20261013-107020-301-55-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=107020&y=2018",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/107/1/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=107020&c=301&s=55&q=1&verify=step1-20261013-107020-301-55-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "C"
            ],
            "point": "ACC的反應與速率限制",
            "analysis": "C ACC催化acetyl-CoA→malonyl-CoA是主要速率限制步驟。A是acetate活化，B為FAS縮合的一部分，D不是主要malonyl形成路徑。",
            "trap": "問速率限制找ACC，問碳鏈延長機器才找FAS。"
          },
          {
            "number": 92,
            "text": "92.關於acetyl-CoA carboxylase在脂肪生成(lipogenesis)中的敘述,下列何者錯誤?\n \nA.催化反應的產物之一為malonyl-CoA\nB.反應過程需直接消耗NADH\nC.催化的化學反應為脂肪酸合成的速率限制步驟\nD.肌肉中AMP上升時,經由活化AMPK,進而抑制acetyl-CoA carboxylase的酵素活性\n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  111.4,
                  569.96,
                  214.86
                ]
              }
            ],
            "id": "109-2-1-92",
            "year": 109,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/109/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=109100&c=301&s=11&q=1&verify=step1-20261013-109100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=109100&y=2020",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/109/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=109100&c=301&s=11&q=1&verify=step1-20261013-109100-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "B"
            ],
            "point": "ACC的反應與速率限制",
            "analysis": "B錯：ACC直接用ATP、HCO₃⁻與biotin，不需直接消耗NADH。A產malonyl-CoA、C為速率限制步驟、D AMPK活化抑ACC皆正確。",
            "trap": "整條合成需NADPH，也不代表ACC直接消耗NADPH。"
          }
        ]
      },
      {
        "id": "group-2",
        "title": "異位與激素調控",
        "topic": "topic-8",
        "summary": "用能量、碳源、產品三種訊號推方向。",
        "questions": [
          {
            "number": 90,
            "text": "90.Acetyl-CoA carboxylase 為脂肪酸生合成的第一個酵素,其活性最不受下列何者調控? \n\nA.胰島素(insulin) \nB.輔酶A(coenzyme A) \nC.檸檬酸(citrate) \nD.AMP-activated protein kinase(AMPK) \n",
            "regions": [
              {
                "page": 16,
                "rect": [
                  30.0,
                  786.55,
                  570.0,
                  807.0
                ]
              },
              {
                "page": 17,
                "rect": [
                  30.0,
                  28.0,
                  570.0,
                  141.55
                ]
              }
            ],
            "id": "112-2-1-90",
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
            "point": "異位與激素調控",
            "analysis": "B CoA不是這組比較中的典型主要調控訊號。A insulin整體促進合成，C citrate活化ACC，D AMPK磷酸化抑ACC。",
            "trap": "最不受調控是比較問法，不必宣稱CoA在細胞完全沒有任何影響。"
          },
          {
            "number": 91,
            "text": "91.下列何者可促進脂質合成速限步驟(rate-limiting step)酵素acetyl-CoA carboxylase 的活性? \n \nA.citrate \nB.glucagon \nC.palmitoyl-CoA \nD.epinephrine \n",
            "regions": [
              {
                "page": 18,
                "rect": [
                  30.0,
                  216.78,
                  570.32,
                  345.81
                ]
              }
            ],
            "id": "114-1-1-91",
            "year": 114,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/114/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=114020&c=301&s=0101&q=1&verify=step1-20261013-114020-301-0101-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=114020&y=2025",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/114/1/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=114020&c=301&s=0101&q=1&verify=step1-20261013-114020-301-0101-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "A"
            ],
            "point": "異位與激素調控",
            "analysis": "A citrate活化ACC。B glucagon與D epinephrine整體偏向動員而非活化脂肪合成；C palmitoyl-CoA回饋抑制。",
            "trap": "Citrate與palmitoyl-CoA都是碳代謝物，但對ACC方向相反。"
          }
        ]
      },
      {
        "id": "group-3",
        "title": "Malonyl-CoA與餐後／空腹切換",
        "topic": "topic-10",
        "summary": "看合成原料如何限制氧化入口。",
        "questions": [
          {
            "number": 46,
            "text": "46 \n下列關於脂肪酸的敘述,何者正確? \nA血液中荷爾蒙glucagon 可以促進細胞中脂肪酸的生合成 \n \nB細胞中脂肪酸的生合成過程中需要NADPH 做為電子攜帶者(electron carrier) \nC細胞中脂肪酸的生合成中間產物malonyl-CoA 會活化粒線體外膜上酵素(carnitine acyltransferase I) \nD胰島素(insulin)可以增加血液中脂肪酸的濃度 \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  622.1,
                  570.22,
                  697.09
                ]
              }
            ],
            "id": "100-1-2-46",
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
            "point": "Malonyl-CoA與餐後／空腹切換",
            "analysis": "B脂肪酸生合成使用NADPH作還原力。A glucagon通常不促進合成；C malonyl-CoA是抑制CPT-I而非活化；D insulin通常抑制脂解，不能概括成提高血中非酯化脂肪酸。",
            "trap": "不要把NADPH電子供應與ACC羧化直接混合。"
          },
          {
            "number": 40,
            "text": "40 \n在饑餓或糖尿病時,下列何者最不可能發生? \nA丙二醯輔酶A(Malonyl-CoA)濃度升高 \nB乙醯乙醯輔酶A(Acetoacetyl-CoA)濃度升高 \nC酮體(Ketone body)濃度升高 \nD脂肪酸(Fatty acid)濃度升高 \n",
            "regions": [
              {
                "page": 5,
                "rect": [
                  30.0,
                  404.6,
                  570.22,
                  464.6
                ]
              }
            ],
            "id": "103-2-2-40",
            "year": 103,
            "session": 2,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/103/2/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=103100&c=101&s=0102&q=1&verify=step1-20261013-103100-101-0102-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=103100&y=2014",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/103/2/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=103100&c=101&s=0102&q=1&verify=step1-20261013-103100-101-0102-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "A"
            ],
            "point": "Malonyl-CoA與餐後／空腹切換",
            "analysis": "A在典型飢餓或insulin不足的糖尿病情境，ACC受抑，malonyl-CoA不傾向升高。B acetoacetyl-CoA、C酮體與D脂肪酸增加符合動員與產酮方向。題幹糖尿病須按其代謝情境理解，非所有已治療患者皆相同。",
            "trap": "降低malonyl可鬆開CPT-I限制，不是讓CPT-I受抑更強。"
          }
        ]
      },
      {
        "id": "group-4",
        "title": "延長反應的受質",
        "topic": "topic-11",
        "summary": "分清malonyl、methyl與既有碳鏈。",
        "questions": [
          {
            "number": 39,
            "text": "39 \n下列有關脊椎動物脂肪酸的延長之敘述,何者錯誤? \nA合成的位置在平滑內質網上 \nB利用malonyl-CoA 作為受質 \nC把palmitoyl-CoA 延長後變成stearoyl-CoA \nDmethyl-CoA 亦可作為其受質 \n",
            "regions": [
              {
                "page": 5,
                "rect": [
                  30.0,
                  120.46,
                  570.0,
                  175.36
                ]
              }
            ],
            "id": "99-1-2-39",
            "year": 99,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/99/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=099010&c=101&s=200&q=1&verify=step1-20261013-099010-101-200-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=099010&y=2010",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/99/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=099010&c=101&s=200&q=1&verify=step1-20261013-099010-101-200-M",
            "corrected": true,
            "answerVersion": "M",
            "point": "延長反應的受質",
            "analysis": "D methyl-CoA不是典型脂肪酸延長供體。A平滑內質網是主要延長場地，B可用malonyl-CoA，C palmitoyl-CoA可延長至stearoyl-CoA。",
            "trap": "Malonyl提供淨二碳；不要被methyl名稱相近誤導。"
          }
        ]
      }
    ]
  }
});
