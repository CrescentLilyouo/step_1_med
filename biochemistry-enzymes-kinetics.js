/* Authored chapter 5; rebuild with scripts/build-biochemistry-batch.py. */
biochemistryChapters.push({
  "id": "enzymes-kinetics",
  "number": "05",
  "title": "酵素、催化機制與動力學",
  "summary": "從催化機制推導Michaelis–Menten方程式，用算例、單位與圖形分辨酵素參數及抑制模型。",
  "sources": "Harper’s Illustrated Biochemistry, 31st ed., Chapters 7–9；EC分類另核對IUBMB",
  "sections": [
    {
      "id": "map",
      "title": "學習地圖：先分方向、速度與調控",
      "html": "<p>反應會不會往前、目前跑多快、細胞要不要讓它跑，是三個不同問題。熱力學的\nΔG\n與平衡回答方向與最終分布；動力學回答速度；調控則改變可用酵素、受質、位置與活性。把這三層分開，才能理解為什麼酵素讓反應快很多，卻不改變平衡常數。</p>\n<p>本章用 E 代表酵素、S 代表受質、P 代表產物、ES\n代表酵素—受質複合體。酵素是參與反應循環後再生的催化者，不是完全不曾改變結構；有些機制中酵素會暫時形成共價中間物，最後再回到可繼續催化的狀態。</p>\n<p>大多數酵素是蛋白質，但某些 RNA\n具有催化能力，例如核糖體的肽基轉移反應由 rRNA\n形成的催化核心完成。因此「所有生物催化者都是蛋白質」錯誤。這不表示蛋白質對核糖體功能不重要，而是催化中心的化學身份不同。</p>\n"
    },
    {
      "id": "energy",
      "title": "自由能與活化能：催化究竟降低哪一個",
      "html": "<p>反應物與產物之間的自由能差是\nΔG；從反應物到過渡態所需跨越的自由能障礙是\nΔG‡。酵素提供較低障礙的反應途徑，使正反方向更快接近平衡，不會把產物的能量任意改低，也不會改變該反應的平衡常數。</p>\n<p>ΔG = ΔG°′ + RT ln Q，表示實際濃度也影響方向。ΔG°′\n是生化標準條件下的自由能變化，不是細胞內每一刻的\nΔG。即使標準條件不利，只要與其他反應耦合或實際濃度比例合適，總體反應仍可能前進。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"自由能與活化能：催化究竟降低哪一個比較表\"><table>\n<thead>\n<tr class=\"header\">\n<th>量</th>\n<th>描述</th>\n<th>加入酵素是否改變？</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>ΔG、ΔG°′</td>\n<td>反應物與產物的自由能差</td>\n<td>同反應與條件下不改變</td>\n</tr>\n<tr class=\"even\">\n<td>Keq</td>\n<td>平衡時的組成比關係</td>\n<td>不改變</td>\n</tr>\n<tr class=\"odd\">\n<td>ΔG‡</td>\n<td>跨越過渡態的障礙</td>\n<td>可降低</td>\n</tr>\n<tr class=\"even\">\n<td>到達平衡的速率</td>\n<td>反應需要多久</td>\n<td>通常大幅加快</td>\n</tr>\n</tbody>\n</table></div>\n<p>酵素若只把穩定受質抓得特別緊，卻沒有相對更好地穩定過渡態，可能反而提高離開\nES\n的困難。理解催化應問「過渡態相對基態如何被穩定」，不是只有「結合越緊越好」。過渡態類似物可成為高親和力抑制劑，也是這個概念的延伸。</p>\n"
    },
    {
      "id": "active-site",
      "title": "活性中心與 induced fit",
      "html": "<p>活性中心是三維口袋，參與殘基在序列上可以相距很遠。它同時負責辨認、定位與催化。Lock-and-key\n比喻可說明專一性，但常忽略蛋白質與受質皆可調整；induced fit\n強調結合伴隨構形改變，使反應基團排列更合適。</p>\n<p>這種構形變化可以排除不合適的水、調整局部\npKa、讓反應原子靠近正確方向，或施加有利於轉換的應力。酵素不一定只接受唯一一個化合物；專一性有程度差異，也可能對一群相關受質具有不同效率。</p>\n<p>pH\n改變可能先改變催化殘基的質子化，使它不能當酸、鹼或親核基；這時整個蛋白未必已變性。溫度提高常先加速反應，再因穩定性下降或失活而降低活性，因此所謂最適溫度還受測量時間與實驗條件影響，不是所有酵素共有一個固定數字。</p>\n"
    },
    {
      "id": "catalysis",
      "title": "四種催化策略與 serine protease",
      "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"四種催化策略與 serine protease比較表\"><table>\n<thead>\n<tr class=\"header\">\n<th>策略</th>\n<th>酵素做了什麼</th>\n<th>代表概念</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>一般酸鹼催化</td>\n<td>提供或接受質子</td>\n<td>His 等殘基在步驟間切換角色</td>\n</tr>\n<tr class=\"even\">\n<td>共價催化</td>\n<td>形成暫時酵素—受質共價中間物</td>\n<td>Ser、Cys 等親核基</td>\n</tr>\n<tr class=\"odd\">\n<td>金屬離子催化</td>\n<td>穩定電荷、活化水或參與電子轉移</td>\n<td>Zn²⁺、Mg²⁺等依酵素而異</td>\n</tr>\n<tr class=\"even\">\n<td>接近與定向</td>\n<td>增加反應基團以正確方向相遇的機率</td>\n<td>將受質固定在合適幾何</td>\n</tr>\n</tbody>\n</table></div>\n<p>Chymotrypsin 的經典催化三聯體為 Ser195、His57、Asp102。His 協助\nSer–OH 去質子化，使氧具親核性並攻擊肽鍵羰基；形成四面體中間物，其負電由\noxyanion hole 穩定。中間物崩解後先釋出一段產物，留下\nacyl-enzyme；再由活化的水攻擊，經另一四面體中間物釋出剩餘產物並再生酵素。</p>\n<p>Asp 影響 His\n的定位與電性，不應把它描述為每一步都直接攻擊受質。Oxyanion hole\n與受質專一性口袋也不同：前者穩定反應中間物的負電，後者協助辨認側鏈。Trypsin\n偏好 Lys/Arg 後的切割，chymotrypsin\n偏好大型疏水或芳香側鏈附近，不能因三聯體相似就認為受質範圍完全相同。</p>\n<p>此機制串起三個重點：活性中心由遠端序列聚在一起、共價中間物不代表酵素被永久消耗、同一酵素可同時使用多種催化策略。</p>\n"
    },
    {
      "id": "cofactors",
      "title": "Cofactor、coenzyme、prosthetic group 與 EC 分類",
      "html": "<p>廣義 cofactor\n是催化所需的非蛋白成分，可為金屬離子或有機輔酶；不同教材對名詞範圍略有差異。Coenzyme\n多指有機輔助分子，prosthetic group\n強調與酵素緊密結合，可能共價也可能非共價。Apoenzyme\n是缺少必要輔助成分的蛋白部分，holoenzyme 是組裝完整的活性形式。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Cofactor、coenzyme、prosthetic group 與 EC 分類比較表\"><table>\n<thead>\n<tr class=\"header\">\n<th>輔助分子</th>\n<th>主要角色</th>\n<th>來源／連結</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>NAD⁺、NADP⁺</td>\n<td>氧化還原中的氫化物轉移</td>\n<td>niacin（B3）</td>\n</tr>\n<tr class=\"even\">\n<td>FAD、FMN</td>\n<td>電子轉移</td>\n<td>riboflavin（B2）</td>\n</tr>\n<tr class=\"odd\">\n<td>CoA</td>\n<td>醯基攜帶</td>\n<td>pantothenate（B5）</td>\n</tr>\n<tr class=\"even\">\n<td>TPP</td>\n<td>α-keto acid 脫羧等</td>\n<td>thiamine（B1）</td>\n</tr>\n<tr class=\"odd\">\n<td>PLP</td>\n<td>胺基酸反應，如轉胺</td>\n<td>pyridoxine（B6）相關</td>\n</tr>\n<tr class=\"even\">\n<td>Biotin</td>\n<td>羧化中的 CO₂ 單位攜帶</td>\n<td>biotin</td>\n</tr>\n<tr class=\"odd\">\n<td>THF</td>\n<td>不同氧化態的一碳單位轉移</td>\n<td>folate（B9）</td>\n</tr>\n</tbody>\n</table></div>\n<p>不要把 coenzyme\n當作永遠不改變的旁觀者：它可能在一次反應中被還原、氧化或攜帶基團，再由另一反應再生。</p>\n<p>傳統教材常列六大類 EC；目前 IUBMB 分類另有 EC 7 translocases。EC\n分類依催化反應，而非蛋白質名稱、長相或基因來源。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Cofactor、coenzyme、prosthetic group 與 EC 分類比較表\"><table>\n<thead>\n<tr class=\"header\">\n<th>EC</th>\n<th>類別</th>\n<th>判讀線索</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>1</td>\n<td>Oxidoreductases</td>\n<td>氧化還原</td>\n</tr>\n<tr class=\"even\">\n<td>2</td>\n<td>Transferases</td>\n<td>轉移官能基；kinase 常屬此類</td>\n</tr>\n<tr class=\"odd\">\n<td>3</td>\n<td>Hydrolases</td>\n<td>以水切斷鍵；protease、phosphatase</td>\n</tr>\n<tr class=\"even\">\n<td>4</td>\n<td>Lyases</td>\n<td>非水解、非氧化方式斷鍵或對雙鍵加成</td>\n</tr>\n<tr class=\"odd\">\n<td>5</td>\n<td>Isomerases</td>\n<td>分子內重排</td>\n</tr>\n<tr class=\"even\">\n<td>6</td>\n<td>Ligases</td>\n<td>連接分子，通常與 NTP 水解耦合</td>\n</tr>\n<tr class=\"odd\">\n<td>7</td>\n<td>Translocases</td>\n<td>催化離子或分子跨膜／膜內轉位</td>\n</tr>\n</tbody>\n</table></div>\n<p>Kinase 常由 ATP 將磷酸基轉給受質；phosphorylase\n通常用無機磷酸參與磷解；phosphatase\n則水解除磷酸。三者名字都含磷，反應卻不同。讀舊題的六類框架時保留其題目語境，但新教材不再宣稱只有六類。</p>\n"
    },
    {
      "id": "steady-state",
      "title": "如何測初速度：穩態不是平衡",
      "html": "<p>最簡模型為 E + S ⇌ ES → E + P。前進結合速率常數 k₁、解離\nk₋₁、產物形成 k₂。初速度 v₀\n在產物尚少、受質尚未大量耗盡時測量，可忽略顯著的產物逆反應與產物累積效應。</p>\n<p>常見 Michaelis–Menten 推導使用受質遠多於酵素，並在短暫起始過程後令\nd[ES]/dt ≈ 0：ES 生成速率與消失速率近似相等。這叫穩態，不表示 E+S⇌ES\n已達到熱力學平衡，更不表示整個反應停止；此時仍可持續生成產物。</p>\n<p>[E]ₜ = [E] + [ES]，而穩態下 k₁[E][S] ≈ (k₋₁+k₂)[ES]。定義 Kₘ =\n(k₋₁+k₂)/k₁，代入並整理得 [ES] = [E]ₜ[S]/(Kₘ+[S])。再用 v₀ =\nk₂[ES]、Vmax = k₂[E]ₜ，得到 v₀ = Vmax[S]/(Kₘ+[S])。</p>\n<p>這是單受質簡化模型。多受質反應、協同酵素、受質抑制、時間依賴失活等可能不符合，不能看到任何酵素都硬套一條雙曲線。即使符合，也應在固定\npH、溫度、離子與輔因子條件下比較。</p>\n"
    },
    {
      "id": "parameters",
      "title": "Kₘ 與 Vmax：定義、單位及不能推論的事",
      "html": "<p>Vmax 是給定總酵素量與條件下的飽和速率。增加活性酵素量，Vmax\n通常同比增加；它不是完全獨立於樣品濃度的蛋白本質常數。Kₘ\n的單位是濃度，在符合模型時是 v = Vmax/2 對應的受質濃度。</p>\n<p>Kₘ = (k₋₁+k₂)/k₁，而純結合的 Kd = k₋₁/k₁。只有當 k₂ 遠小於\nk₋₁等適當條件下，Kₘ 才近似 Kd。因此「Kₘ\n越低代表較低受質濃度達半飽和」通常可直接說；「Kₘ\n就是精確結合親和力」則需要條件。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Kₘ 與 Vmax：定義、單位及不能推論的事比較表\"><table>\n<thead>\n<tr class=\"header\">\n<th>比較</th>\n<th>能直接推論</th>\n<th>不能只靠這個數字推論</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Kₘ 降低</td>\n<td>達半最大速率所需 [S] 較低</td>\n<td>kcat 一定更大</td>\n</tr>\n<tr class=\"even\">\n<td>Vmax 增加</td>\n<td>此樣品在飽和時速率更大</td>\n<td>每個酵素分子一定更有效率</td>\n</tr>\n<tr class=\"odd\">\n<td>酵素量加倍</td>\n<td>理想情況 Vmax 加倍</td>\n<td>Kₘ 也加倍</td>\n</tr>\n<tr class=\"even\">\n<td>相同 Kₘ</td>\n<td>半飽和濃度相同</td>\n<td>不同受質的全部反應機制相同</td>\n</tr>\n</tbody>\n</table></div>\n<p>對多步驟機制，kcat\n反映整體週轉限制，不一定等於某一個單獨化學步驟。題目若只給\nKₘ，沒有酵素量、kcat 或 Vmax，不能武斷比較全部情境下誰反應最快。</p>\n"
    },
    {
      "id": "concentration",
      "title": "三個濃度區間與分率反推",
      "html": "<p>當 [S] ≪ Kₘ，分母近似 Kₘ，v ≈\n(Vmax/Kₘ)[S]，固定酵素量時對受質近似一級。當 [S] ≫ Kₘ，v ≈\nVmax，對受質近似零級；不是整個反應對任何物質都零級，改變酵素量仍會改變速率。</p>\n<p>令 f = v/Vmax = [S]/(Kₘ+[S])，重排得 [S]/Kₘ =\nf/(1−f)。這個小公式能快速解大量比例題，不需反覆猜選項。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"三個濃度區間與分率反推比較表\"><table>\n<thead>\n<tr class=\"header\">\n<th>目標速率</th>\n<th>需要的 [S]</th>\n<th>理解</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>20% Vmax</td>\n<td>0.25 Kₘ</td>\n<td>未飽和</td>\n</tr>\n<tr class=\"even\">\n<td>50% Vmax</td>\n<td>1 Kₘ</td>\n<td>Kₘ 的定義</td>\n</tr>\n<tr class=\"odd\">\n<td>75% Vmax</td>\n<td>3 Kₘ</td>\n<td>不是 0.75 Kₘ</td>\n</tr>\n<tr class=\"even\">\n<td>80% Vmax</td>\n<td>4 Kₘ</td>\n<td>歷屆常見比例</td>\n</tr>\n<tr class=\"odd\">\n<td>90% Vmax</td>\n<td>9 Kₘ</td>\n<td>逐漸接近平台</td>\n</tr>\n<tr class=\"even\">\n<td>99% Vmax</td>\n<td>99 Kₘ</td>\n<td>越接近極限，所需增加越大</td>\n</tr>\n</tbody>\n</table></div>\n<p>Vmax 是理想漸近值，有限 [S] 下通常不會精確等於\n100%。所以「較低濃度達飽和」常是作題上的近似說法，嚴格而言應說較低濃度達到某一固定飽和比例。</p>\n"
    },
    {
      "id": "efficiency",
      "title": "kcat、催化效率與單位陷阱",
      "html": "<p>kcat = Vmax/[E]ₜ，單位通常\ns⁻¹，表示受質飽和時，每個活性中心每秒的週轉次數。若酵素有多個活性中心，要確認題幹的\n[E] 是酵素分子濃度還是活性中心濃度，不能未說明就混用。</p>\n<p>在低受質濃度，v ≈ (kcat/Kₘ)[E]ₜ[S]；kcat/Kₘ 單位為濃度⁻¹·時間⁻¹，是低\n[S] 下比較受質利用效率的指標。高 [S] 時應更關注 kcat 與酵素量，不能保證\nkcat/Kₘ 最大者在所有濃度都最快。</p>\n<p><strong>算例一：</strong> kcat = 600 s⁻¹、[E]ₜ = 20 nM = 0.020\nμM，Vmax = 12 μM/s。若 Kₘ = 10 μM、[S] = 50 μM，v = 12×50/60 = 10\nμM/s。漏掉 nM→μM 會錯一千倍。</p>\n<p><strong>算例二：</strong> A 的 kcat = 100 s⁻¹、Kₘ = 1 mM；B 的 kcat =\n50 s⁻¹、Kₘ = 0.1 mM。A 的效率 100 mM⁻¹s⁻¹，B 為\n500，因此相同酵素量且極低 [S] 時 B 較有效；受質飽和時 A\n的每中心週轉更快。先看實驗濃度再選比較參數。</p>\n<p>歷屆題有時把「低受質速率常數」用來指 Vmax/Kₘ，也有題目指\nkcat/Kₘ。前者對固定 [E] 寫 v = kobs[S]；後者寫 v =\nk[E][S]。看題幹是否已把酵素濃度吸收到常數內，以及選項單位，避免只背一個名稱。</p>\n"
    },
    {
      "id": "lineweaver",
      "title": "Lineweaver–Burk plot：從公式找斜率與截距",
      "html": "<p>將方程式取倒數：1/v = (Kₘ/Vmax)(1/[S]) + 1/Vmax。令 y = 1/v、x =\n1/[S]，就是 y = mx+b。斜率 Kₘ/Vmax，y 截距 1/Vmax，x 截距 −1/Kₘ。</p>\n<p><strong>算例：</strong> x 截距為 −0.25 mM⁻¹，Kₘ = 4 mM；y 截距為 0.02\nmin/μmol，Vmax = 50 μmol/min。要取倒數並保留正負號與單位，不是直接把\n−0.25 當成負的 Kₘ。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Lineweaver–Burk plot：從公式找斜率與截距比較表\"><table>\n<thead>\n<tr class=\"header\">\n<th>圖上變化</th>\n<th>參數推論</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>y 截距升高</td>\n<td>Vmax 降低</td>\n</tr>\n<tr class=\"even\">\n<td>x 截距往零靠近</td>\n<td>Kₘ 增加</td>\n</tr>\n<tr class=\"odd\">\n<td>x 截距往更負方向</td>\n<td>Kₘ 降低</td>\n</tr>\n<tr class=\"even\">\n<td>斜率增加</td>\n<td>Kₘ/Vmax 增加，不能單靠它判是哪一個變了</td>\n</tr>\n</tbody>\n</table></div>\n<p>雙倒數圖能快速理解抑制類型，但低 [S]\n點的測量誤差會因取倒數而被放大；實際參數估計常使用原始速率資料的適當非線性擬合。考試圖形判讀與最佳實驗分析方法是不同層次。</p>\n"
    },
    {
      "id": "inhibition",
      "title": "可逆抑制的共同模型：先看抑制劑能結合誰",
      "html": "<p>在常用混合抑制模型，抑制劑可結合游離 E 或\nES，生成不產生產物的複合體。定義 α = 1+[I]/Ki 描述對 E 的結合，α′ =\n1+[I]/Ki′ 描述對 ES 的結合。方程式為 v = Vmax[S]/(αKₘ+α′[S])，所以\nVmax,app = Vmax/α′，Kₘ,app = (α/α′)Kₘ。</p>\n<p>這個總式可把三四張表變成同一套推理：只抓 E，α 增加而 α′=1；只抓\nES，α=1 而\nα′增加；兩者都抓則看偏好。前提是可逆、符合該穩態模型且抑制複合體無活性，不能推廣到任何複雜藥物曲線。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"可逆抑制的共同模型：先看抑制劑能結合誰比較表\"><table>\n<thead>\n<tr class=\"header\">\n<th>型態</th>\n<th>結合對象</th>\n<th>Vmax,app</th>\n<th>Kₘ,app</th>\n<th>雙倒數圖</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Competitive</td>\n<td>E；與 S 結合互斥</td>\n<td>不變</td>\n<td>上升</td>\n<td>交於 y 軸</td>\n</tr>\n<tr class=\"even\">\n<td>Uncompetitive</td>\n<td>只結合 ES</td>\n<td>下降</td>\n<td>同倍率下降</td>\n<td>平行線</td>\n</tr>\n<tr class=\"odd\">\n<td>Pure noncompetitive</td>\n<td>E、ES 親和力相同</td>\n<td>下降</td>\n<td>不變</td>\n<td>交於 x 軸</td>\n</tr>\n<tr class=\"even\">\n<td>Mixed</td>\n<td>E、ES 親和力不同</td>\n<td>下降</td>\n<td>可升可降</td>\n<td>一般交點不在軸上</td>\n</tr>\n</tbody>\n</table></div>\n<p>中文「非競爭／不競爭」在不同題庫可能指向不同英文，所以以\ncompetitive、uncompetitive、noncompetitive 與 E/ES\n機制為準。本章保留原題英文，不用中文一字差異猜答案。</p>\n<figure><img class=\"bio-diagram\" src=\"assets/biochemistry/enzyme-inhibition.svg\" alt=\"共同座標以未抑制Km、Vmax標準化。Competitive α=4；pure noncompetitive α=α′=2；uncompetitive α′=2。後兩者Vmax都減半，但半最大速率的受質濃度不同。有限[S]時競爭曲線尚未回到飽和極限。\" width=\"760\" height=\"450\" loading=\"lazy\"><figcaption>共同座標以未抑制Km、Vmax標準化。Competitive α=4；pure noncompetitive α=α′=2；uncompetitive α′=2。後兩者Vmax都減半，但半最大速率的受質濃度不同。有限[S]時競爭曲線尚未回到飽和極限。</figcaption></figure>"
    },
    {
      "id": "competitive",
      "title": "Competitive：為什麼 Kₘ 變大而 Vmax 保留",
      "html": "<p>競爭抑制使受質需要更高濃度才能占到足夠酵素。固定抑制劑濃度、可逆結合的理想條件下，大幅增加\n[S] 可以使受質占優，故飽和極限 Vmax 不變；達半最大速率所需 [S]\n增加，表觀 Kₘ 上升。</p>\n<p>典型競爭劑占據活性中心，但動力學的核心是 S 與 I\n不能同時有效結合，而不是所有競爭抑制都一定在原子層級占完全相同位置。Vmax\n不變也意味同一活性酵素總量下的飽和 kcat 不變；kcat/Kₘ,app 則降低。</p>\n<p><strong>算例：</strong> 無抑制時 Kₘ=2 mM、Vmax=100 μmol/min。若\n[I]/Ki=3，α=4，表觀 Kₘ=8 mM。當\n[S]=2，原速率50，抑制後100×2/(8+2)=20。當\n[S]非常大，兩者都趨近100；不是加入任何有限量受質就瞬間完全解除。</p>\n<p>Lineweaver–Burk 的 y 截距同為 1/Vmax，斜率變大，x 截距由 −1/2 移向\n−1/8，往原點靠近。若題目改問 Vmax/Kₘ，該比值下降，不能因 Vmax\n不變就選「所有參數不變」。</p>\n"
    },
    {
      "id": "mixed",
      "title": "Uncompetitive、純非競爭與混合：不要只背「不被受質救回」",
      "html": "<p>Uncompetitive 只結合 ES。增加 S 同時也提供更多 ES\n可被抑制，不符合競爭抑制的解除模式。α′ &gt;1、α=1，因此表觀 Vmax 與 Kₘ\n同除以 α′，斜率 Kₘ/Vmax 不變，雙倒數線平行。Kₘ\n降低不代表催化被活化；最大速率也下降了。</p>\n<p>Pure noncompetitive 是 mixed 的特殊情形：對 E 與 ES\n親和力相同，α=α′，表觀 Kₘ 不變，Vmax\n降低。只看到「在活性中心以外結合」並不足以保證此數學型態，因為若它影響 S\n的結合，仍可能是 mixed。</p>\n<p>Mixed 的 Kₘ 可升或降。若偏好 E，α&gt;α′，表觀 Kₘ 上升；若偏好\nES，α&lt;α′，表觀 Kₘ 下降。Vmax 皆因 α′&gt;1\n而降低。不要把所有可逆非競爭現象一律背成 Kₘ 不變。</p>\n<p><strong>算例：</strong> 原 Kₘ=4、Vmax=120。若 α=3、α′=2，表觀\nKₘ=6、Vmax=60；若 α=2、α′=4，表觀 Kₘ=2、Vmax=30。兩者皆 mixed，但 Kₘ\n方向相反。若原 Kₘ=4、Vmax=120 且純 uncompetitive α′=3，則變成\nKₘ=4/3、Vmax=40，下降相同比例。</p>\n"
    },
    {
      "id": "irreversible",
      "title": "不可逆抑制與時間依賴：活性酵素真的變少",
      "html": "<p>不可逆抑制常透過共價修飾或極持久的失活，降低可用活性酵素量。移除游離抑制劑後活性不容易恢復，與典型可逆抑制不同。若只剩部分正常酵素，可能看到\nVmax 下降，但不能只靠一組 Vmax/Kₘ 就證明不可逆；可逆 pure noncompetitive\n也會有類似參數結果。</p>\n<p>機制型／suicide inhibitor\n先被酵素當受質處理，再生成使酵素失活的反應物，因而可有較高專一性。它不等於所有一般可逆競爭抑制劑，也不代表所有不可逆抑制都走這種路徑。</p>\n<p>判斷時可比較預孵育時間、稀釋或移除抑制劑後是否恢復、以及有無共價修飾證據。IC₅₀\n是特定實驗條件下讓活性降到一半的濃度，受 [S]、時間與機制影響；Ki\n則是模型中的抑制結合常數，兩者不能無條件互換。</p>\n"
    },
    {
      "id": "regulation",
      "title": "酵素調控：異位性、磷酸化與酶原",
      "html": "<p>細胞可以改變受質供應、區室、酵素量或現有酵素的活性。短時間的調控常靠異位性與共價修飾，較長時間可經轉錄、轉譯或降解改變酵素量。但不同路徑的時間尺度會重疊，不是所有調控都固定一秒或一天。</p>\n<p>異位酵素常呈 S 型受質—速率曲線，可用 S₀.₅ 或 K₀.₅\n描述半最大速率濃度；不應未驗證就把它當成 Michaelis–Menten 的\nKₘ。效應物可能改變曲線位置、最大速率或兩者，異位性也不等於一定抑制。</p>\n<p>磷酸化由 kinase 催化，去磷酸化由 phosphatase\n催化；磷酸化可活化某些酵素，也可抑制另一些，取決於構形改變。PKA\n的活化則是 cAMP 非共價結合調節次單元，使催化次單元活性釋放，不能說 cAMP\n把自己共價接到 PKA 上。</p>\n<p>Zymogen 經有限蛋白水解活化，例如\ntrypsinogen→trypsin。切斷的肽鍵不會靠一般去磷酸化「接回去」，所以對同一分子而言是不可逆加工；系統仍可用抑制蛋白、清除或重新合成來控制。這與可逆磷酸化的開關不同。</p>\n"
    },
    {
      "id": "purification",
      "title": "活性單位、純化表與同功酶",
      "html": "<p>酵素活性 1 U 通常代表指定測量條件下每分鐘轉換 1 μmol 受質；SI 單位\nkatal 是每秒 1 mol。比活性 specific activity 是活性除以總蛋白量，常用\nU/mg，是追蹤純化的重要指標，不等於\nkcat。粗萃取物的蛋白量含大量其他蛋白。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"活性單位、純化表與同功酶比較表\"><table>\n<thead>\n<tr class=\"header\">\n<th>純化階段</th>\n<th>總蛋白 mg</th>\n<th>總活性 U</th>\n<th>比活性 U/mg</th>\n<th>回收率</th>\n<th>純化倍數</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>粗萃取</td>\n<td>1000</td>\n<td>10000</td>\n<td>10</td>\n<td>100%</td>\n<td>1</td>\n</tr>\n<tr class=\"even\">\n<td>第一步</td>\n<td>100</td>\n<td>6000</td>\n<td>60</td>\n<td>60%</td>\n<td>6</td>\n</tr>\n<tr class=\"odd\">\n<td>第二步</td>\n<td>10</td>\n<td>4000</td>\n<td>400</td>\n<td>40%</td>\n<td>40</td>\n</tr>\n</tbody>\n</table></div>\n<p>回收率 = 此步總活性/起始總活性；純化倍數 =\n此步比活性/起始比活性。純化過程常總活性下降而比活性上升，表示丟掉一部分酵素但去掉更多雜蛋白。若去除了抑制物，量測總活性也可能反而增加，不能把所有超過100%的表觀回收率直接當成數學不可能。</p>\n<p>Isoenzymes\n催化相同類型反應但分子形式不同，可有不同組織分布或動力學。這與同一蛋白單純暫時磷酸化不是同義詞。臨床酵素升高也可能反映細胞釋放與清除，不等於原組織內代謝反應一定變快。</p>\n"
    },
    {
      "id": "review",
      "title": "多受質反應與整合解題流程",
      "html": "<p>多受質反應可能先讓兩個受質都結合形成三元複合體，再釋出產物，稱\nsequential；進入順序可有序或隨機。Ping-pong\n則先有一個受質進入、產物離開，留下暫時改變的酵素，再與另一受質反應使酵素再生，例如轉胺反應的典型模式。這裡的暫時改變不必然是不可逆抑制。</p>\n<p>在理想雙受質動力學分析中，改變一個受質、固定另一受質的多組雙倒數線可呈交會或平行，用來協助推測機制；但不要把這種「多受質機制的平行線」與「單受質\nuncompetitive 抑制平行線」當成相同實驗設計。</p>\n<p>解題流程：先確認模型與初速度 → 統一濃度／時間單位 → 看 [S]/Kₘ\n所在區間 → 決定使用完整式或近似式 → 若有 I，先辨認 E/ES 結合 →\n回頭檢查數值是否超過 Vmax。只要 v 大於給定\nVmax，就應優先檢查單位、代入或參數是否讀錯。</p>\n<p>閉卷時應能推導 f/(1−f)、說出 Km 與 Kd 的差異、由\nα/α′推出抑制表，再用一個例子解釋為何低\nKₘ不代表任何濃度都最快。這些能力比背四條線圖更能應付變形題。</p>\n"
    }
  ],
  "questions": [
    {
      "title": "01　酵素改變ΔG、Keq還是ΔG‡？",
      "prompt": "<p>酵素改變ΔG、Keq還是ΔG‡？</p>",
      "answer": "<p>降低反應途徑的活化自由能ΔG‡，不改變同反應同條件下的ΔG或平衡常數。它加快接近平衡而非創造新的平衡。</p>"
    },
    {
      "title": "02　pH改變造成失活，一定是完全變性嗎？",
      "prompt": "<p>pH改變造成失活，一定是完全變性嗎？</p>",
      "answer": "<p>不一定。催化殘基的質子化可能先改變，使酸、鹼或親核功能失常；更極端條件才可能另破壞整體構造。</p>"
    },
    {
      "title": "03　三聯體與oxyanion hole有何分工？",
      "prompt": "<p>三聯體與oxyanion hole有何分工？</p>",
      "answer": "<p>Ser提供親核基，His協助質子轉移，Asp影響His電性與定位；oxyanion hole穩定四面體中間物的負電。不是所有部位都直接攻擊受質。</p>"
    },
    {
      "title": "04　Kinase、phosphatase、translocase分別屬哪類？",
      "prompt": "<p>Kinase、phosphatase、translocase分別屬哪類？</p>",
      "answer": "<p>通常EC2 transferase、EC3 hydrolase、EC7 translocase。舊六類框架需補第七類，並依實際反應分類。</p>"
    },
    {
      "title": "05　穩態d[ES]/dt≈0是否代表不再生成產物？",
      "prompt": "<p>穩態d[ES]/dt≈0是否代表不再生成產物？</p>",
      "answer": "<p>否。ES生成與消失近似相等，但反應仍可持續通過ES流向產物；穩態不等於整體熱力學平衡。</p>"
    },
    {
      "title": "06　Kₘ何時近似Kd？",
      "prompt": "<p>Kₘ何時近似Kd？</p>",
      "answer": "<p>最簡模型Kₘ=(k−1+k₂)/k₁；k₂遠小於k−1時近似k−1/k₁=Kd。一般不能把Kₘ當作精確結合常數。</p>"
    },
    {
      "title": "07　活性酵素量加倍，Vmax與Kₘ如何？",
      "prompt": "<p>活性酵素量加倍，Vmax與Kₘ如何？</p>",
      "answer": "<p>在模型與條件不變下Vmax加倍，Kₘ不變。Vmax依樣品酵素量而變，不是完全獨立於濃度的本質常數。</p>"
    },
    {
      "title": "08　v=0.8Vmax時，[S]為幾倍Kₘ？",
      "prompt": "<p>v=0.8Vmax時，[S]為幾倍Kₘ？</p>",
      "answer": "<p>[S]/Kₘ=f/(1−f)=0.8/0.2=4。不是0.8倍，也不是5倍。</p>"
    },
    {
      "title": "09　[S]遠大於Kₘ時的零級，是對哪個變項？",
      "prompt": "<p>[S]遠大於Kₘ時的零級，是對哪個變項？</p>",
      "answer": "<p>對受質濃度近似零級，速率仍受活性酵素量影響。不能推論所有條件改變都無效。</p>"
    },
    {
      "title": "10　kcat600 s⁻¹、E20 nM、Kₘ10 μM、S50 μM，v？",
      "prompt": "<p>kcat600 s⁻¹、E20 nM、Kₘ10 μM、S50 μM，v？</p>",
      "answer": "<p>E=0.020 μM，Vmax=12 μM/s；v=12×50/(10+50)=10 μM/s。先統一濃度單位。</p>"
    },
    {
      "title": "11　A的kcat100、Kₘ1；B為50、0.1，同量酵素誰快？",
      "prompt": "<p>A的kcat100、Kₘ1；B為50、0.1，同量酵素誰快？</p>",
      "answer": "<p>同濃度單位下，低S時B的效率500大於A的100；飽和時A的kcat較高。必須先知道受質濃度範圍。</p>"
    },
    {
      "title": "12　x截距−0.25 mM⁻¹、y截距0.02 min/μmol，求參數。",
      "prompt": "<p>x截距−0.25 mM⁻¹、y截距0.02 min/μmol，求參數。</p>",
      "answer": "<p>Kₘ=4 mM，Vmax=50 μmol/min。x截距是−1/Kₘ，y截距是1/Vmax，需取倒數並處理正負號。</p>"
    },
    {
      "title": "13　Kₘ2、Vmax100，競爭抑制[I]/Ki3，S2時v？",
      "prompt": "<p>Kₘ2、Vmax100，競爭抑制[I]/Ki3，S2時v？</p>",
      "answer": "<p>α=4，表觀Kₘ=8，Vmax仍100；v=100×2/(8+2)=20。高受質的極限才能接近原Vmax。</p>"
    },
    {
      "title": "14　Uncompetitive為何在雙倒數圖平行？",
      "prompt": "<p>Uncompetitive為何在雙倒數圖平行？</p>",
      "answer": "<p>Kₘ與Vmax同除以α′，斜率Kₘ/Vmax不變；y截距上升、x截距更負。Kₘ下降並不表示酵素活化。</p>"
    },
    {
      "title": "15　在活性中心外結合是否保證Kₘ不變？",
      "prompt": "<p>在活性中心外結合是否保證Kₘ不變？</p>",
      "answer": "<p>否。只有對E與ES相同親和力的pure noncompetitive才有該結果；一般mixed可使表觀Kₘ升高或降低。</p>"
    },
    {
      "title": "16　原Kₘ4、Vmax120，α3、α′2，表觀值？",
      "prompt": "<p>原Kₘ4、Vmax120，α3、α′2，表觀值？</p>",
      "answer": "<p>Kₘ,app=(3/2)×4=6；Vmax,app=120/2=60。先區分α描述E與α′描述ES。</p>"
    },
    {
      "title": "17　Vmax下降Kₘ不變可否證明不可逆？",
      "prompt": "<p>Vmax下降Kₘ不變可否證明不可逆？</p>",
      "answer": "<p>不能。可逆pure noncompetitive也可如此；需看移除抑制劑後恢復、預孵育時間或化學修飾等證據。</p>"
    },
    {
      "title": "18　磷酸化與酶原切割，哪個能由phosphatase逆轉？",
      "prompt": "<p>磷酸化與酶原切割，哪個能由phosphatase逆轉？</p>",
      "answer": "<p>適當受質的磷酸化可去磷酸化；酶原斷掉的肽鍵不能由phosphatase接回，對同一分子屬不可逆加工。</p>"
    },
    {
      "title": "19　起始1000 mg/10000 U，之後10 mg/4000 U，回收率與純化倍數？",
      "prompt": "<p>起始1000 mg/10000 U，之後10 mg/4000 U，回收率與純化倍數？</p>",
      "answer": "<p>回收率40%；比活性10→400 U/mg，所以純化40倍。總活性下降不等於純化無效。</p>"
    },
    {
      "title": "20　低S時Vmax/Kₘ與kcat/Kₘ為何都可能出現？",
      "prompt": "<p>低S時Vmax/Kₘ與kcat/Kₘ為何都可能出現？</p>",
      "answer": "<p>v=(Vmax/Kₘ)[S]把固定酵素量納入係數；v=(kcat/Kₘ)[E][S]保留酵素量。看選項單位與模型，不只看速率常數這個名稱。</p>"
    }
  ],
  "recalls": [
    [
      "酵素改變ΔG、Keq還是ΔG‡？",
      "降低反應途徑的活化自由能ΔG‡，不改變同反應同條件下的ΔG或平衡常數。它加快接近平衡而非創造新的平衡。"
    ],
    [
      "酵素改變ΔG、Keq還是ΔG‡？",
      "降低反應途徑的活化自由能ΔG‡，不改變同反應同條件下的ΔG或平衡常數。它加快接近平衡而非創造新的平衡。"
    ],
    [
      "pH改變造成失活，一定是完全變性嗎？",
      "不一定。催化殘基的質子化可能先改變，使酸、鹼或親核功能失常；更極端條件才可能另破壞整體構造。"
    ],
    [
      "三聯體與oxyanion hole有何分工？",
      "Ser提供親核基，His協助質子轉移，Asp影響His電性與定位；oxyanion hole穩定四面體中間物的負電。不是所有部位都直接攻擊受質。"
    ],
    [
      "Kinase、phosphatase、translocase分別屬哪類？",
      "通常EC2 transferase、EC3 hydrolase、EC7 translocase。舊六類框架需補第七類，並依實際反應分類。"
    ],
    [
      "穩態d[ES]/dt≈0是否代表不再生成產物？",
      "否。ES生成與消失近似相等，但反應仍可持續通過ES流向產物；穩態不等於整體熱力學平衡。"
    ],
    [
      "Kₘ何時近似Kd？",
      "最簡模型Kₘ=(k−1+k₂)/k₁；k₂遠小於k−1時近似k−1/k₁=Kd。一般不能把Kₘ當作精確結合常數。"
    ],
    [
      "v=0.8Vmax時，[S]為幾倍Kₘ？",
      "[S]/Kₘ=f/(1−f)=0.8/0.2=4。不是0.8倍，也不是5倍。"
    ],
    [
      "A的kcat100、Kₘ1；B為50、0.1，同量酵素誰快？",
      "同濃度單位下，低S時B的效率500大於A的100；飽和時A的kcat較高。必須先知道受質濃度範圍。"
    ],
    [
      "x截距−0.25 mM⁻¹、y截距0.02 min/μmol，求參數。",
      "Kₘ=4 mM，Vmax=50 μmol/min。x截距是−1/Kₘ，y截距是1/Vmax，需取倒數並處理正負號。"
    ],
    [
      "在活性中心外結合是否保證Kₘ不變？",
      "否。只有對E與ES相同親和力的pure noncompetitive才有該結果；一般mixed可使表觀Kₘ升高或降低。"
    ],
    [
      "Kₘ2、Vmax100，競爭抑制[I]/Ki3，S2時v？",
      "α=4，表觀Kₘ=8，Vmax仍100；v=100×2/(8+2)=20。高受質的極限才能接近原Vmax。"
    ],
    [
      "Uncompetitive為何在雙倒數圖平行？",
      "Kₘ與Vmax同除以α′，斜率Kₘ/Vmax不變；y截距上升、x截距更負。Kₘ下降並不表示酵素活化。"
    ],
    [
      "Vmax下降Kₘ不變可否證明不可逆？",
      "不能。可逆pure noncompetitive也可如此；需看移除抑制劑後恢復、預孵育時間或化學修飾等證據。"
    ],
    [
      "磷酸化與酶原切割，哪個能由phosphatase逆轉？",
      "適當受質的磷酸化可去磷酸化；酶原斷掉的肽鍵不能由phosphatase接回，對同一分子屬不可逆加工。"
    ],
    [
      "起始1000 mg/10000 U，之後10 mg/4000 U，回收率與純化倍數？",
      "回收率40%；比活性10→400 U/mg，所以純化40倍。總活性下降不等於純化無效。"
    ],
    [
      "低S時Vmax/Kₘ與kcat/Kₘ為何都可能出現？",
      "v=(Vmax/Kₘ)[S]把固定酵素量納入係數；v=(kcat/Kₘ)[E][S]保留酵素量。看選項單位與模型，不只看速率常數這個名稱。"
    ]
  ],
  "readingIntro": "先理解催化與模型假設，再推導參數和濃度近似，最後由E/ES結合模型重建抑制表。計算前先統一單位。",
  "figure": "<div class=\"relearn-bridge\"><p>讀法：結構或模型 → 分子作用 → 可觀察結果 → 關閉正文後自己推一次。</p></div>",
  "references": "<p>Harper’s Illustrated Biochemistry, 31st ed., Chapters 7–9；EC分類另核對IUBMB。正文依使用者教材重組並補充推導；歷屆題取自網站既有題庫，解析為自行撰寫。模型數字為教學用途，臨床治療現況不以舊版課本作唯一依據。</p><ul><li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://iubmb.qmul.ac.uk/enzyme/\">IUBMB 酵素分類</a></li><li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://iubmb.qmul.ac.uk/enzyme/EC7/\">EC 7 Translocases</a></li></ul>",
  "exams": {
    "bankCount": 1022,
    "yearMin": 96,
    "yearMax": 115,
    "groups": [
      {
        "id": "group-0",
        "title": "Km、kcat與算例",
        "topic": "parameters",
        "summary": "先看濃度區間與單位，再選完整式或近似式。",
        "questions": [
          {
            "number": 46,
            "text": "46 \n下表為某一酵素之受質(substrate)濃度與反應速率分析表,已知此酵素依據米凱利斯-門頓動力學\n(Michaelis-Menten kinetics)運作,此酵素的KM值約為多少mM? \n受質濃度(substrate concentration) \nV0\n(mmol/L) \n(μmol/min) \n1.2 \n326 \n3 \n485 \n6 \n650 \n9 \n732 \n1500 \n970 \nA1.5 \nB3 \nC6 \nD1500 \n",
            "regions": [
              {
                "page": 5,
                "rect": [
                  30.0,
                  504.76,
                  570.0,
                  689.44
                ]
              }
            ],
            "id": "99-1-2-46",
            "year": 99,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/99/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=099010&c=101&s=200&q=1&verify=step1-20261013-099010-101-200-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=099010&y=2010",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/99/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=099010&c=101&s=200&q=1&verify=step1-20261013-099010-101-200-M",
            "corrected": true,
            "answerVersion": "M",
            "point": "由資料估Km",
            "analysis": "高[S]時速率接近970，半最大約485；表中[S]=3 mM時v=485，因此Km約3 mM。",
            "trap": "先估Vmax再找一半，不把最高[S]當Km。"
          },
          {
            "number": 27,
            "text": "27 \n動力學分析顯示某酵素與其突變型對相同受質的Km 值分別為0.001 與0.0001 mM,由此數據可知: \nA突變酵素催化的反應在較低受質濃度時達到飽和 \nB突變導致酵素與受質的親合力下降 \nC突變酵素的催化速率較快 \nD野生型酵素對此受質的專一性較高 \n",
            "regions": [
              {
                "page": 3,
                "rect": [
                  30.0,
                  121.89,
                  570.22,
                  189.39
                ]
              }
            ],
            "id": "101-1-2-27",
            "year": 101,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/101/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=101030&c=101&s=0102&q=1&verify=step1-20261013-101030-101-0102-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=101030&y=2012",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/101/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=101030&c=101&s=0102&q=1&verify=step1-20261013-101030-101-0102-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "A"
            ],
            "point": "Km降低的意義",
            "analysis": "突變型Km較小，可在較低[S]達相同飽和比例。只給Km不能證明kcat更高或催化一定更快。",
            "trap": "題目的達飽和為近似說法，嚴格看固定分率。"
          },
          {
            "number": 26,
            "text": "26 \n某酵素對受質A的動力學參數為:Km=0.01 mM;Kcat=5 S-1,而對受質B的動力學參數為:Km\n=0.1 mM;Kcat=5 S-1,由以上數據可知: \nA此酵素對受質B 的反應速率較易飽和 \nB當催化速率處於飽和時,此酵素對受質A 的反應較快 \nC此酵素對受質A 的專一性較高 \nD當受質濃度極低時,此酵素對受質B 的反應較快 \n",
            "regions": [
              {
                "page": 2,
                "rect": [
                  30.0,
                  715.89,
                  570.22,
                  807.0
                ]
              }
            ],
            "id": "101-2-2-26",
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
            "point": "低S專一性常數",
            "analysis": "兩者kcat相同，A的Km為B的十分之一，所以kcat/Km高十倍；低S時較有效，飽和時每中心週轉相同。",
            "trap": "不要把低Km直接當高Vmax。"
          },
          {
            "number": 28,
            "text": "28.某酵素的kcat=500 s-1,Km=5 mM,在受質濃度遠高於Km的狀況下,此酵素反應的速率常數約為: \n \nA.500 s-1 \nB.2,500 mM s-1 \nC.100 mM-1s-1 \nD.0.01 s mM-1 \n",
            "regions": [
              {
                "page": 3,
                "rect": [
                  30.0,
                  541.37,
                  570.0,
                  612.77
                ]
              }
            ],
            "id": "105-2-2-28",
            "year": 105,
            "session": 2,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/105/2/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=105100&c=301&s=66&q=1&verify=step1-20261013-105100-301-66-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=105100&y=2016",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/105/2/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=105100&c=301&s=66&q=1&verify=step1-20261013-105100-301-66-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "A"
            ],
            "point": "高S週轉",
            "analysis": "[S]遠大於Km，v/[E]接近kcat=500 s⁻¹；kcat/Km適用低S的效率比較。",
            "trap": "用單位s⁻¹辨認飽和週轉。"
          },
          {
            "number": 74,
            "text": "74.酵素反應在受質濃度極低時,所測得的初始反應速率會與受質濃度成正比,此反應速率常數應為下列何者? \n \nA.k cat  \nB.k cat×Km  \nC.V max/Km  \nD.1/Km  \n",
            "regions": [
              {
                "page": 11,
                "rect": [
                  30.0,
                  485.05,
                  570.0,
                  590.05
                ]
              }
            ],
            "id": "106-2-1-74",
            "year": 106,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/106/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=106100&c=301&s=11&q=1&verify=step1-20261013-106100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=106100&y=2017",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/106/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=106100&c=301&s=11&q=1&verify=step1-20261013-106100-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "C"
            ],
            "point": "低S固定酵素量",
            "analysis": "v≈(Vmax/Km)[S]，固定E時把Vmax/Km當對[S]的一級係數，因此選C。",
            "trap": "若方程另保留[E]，係數會寫kcat/Km。"
          },
          {
            "number": 76,
            "text": "76.一合乎Michaelis-Menten動力學之酵素,若其反應的初速度(initial reaction rate)為0.8 Vmax時,受質的濃度應\n為:\n \nA.2 Km\nB.3 Km\nC.4 Km\nD.5 Km\n",
            "regions": [
              {
                "page": 11,
                "rect": [
                  30.0,
                  649.4,
                  569.96,
                  792.03
                ]
              }
            ],
            "id": "109-2-1-76",
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
            "point": "分率反推",
            "analysis": "0.8=[S]/(Km+[S])，整理0.8Km=0.2[S]，所以[S]=4Km。",
            "trap": "使用f/(1−f)，不要把百分率直接乘Km。"
          },
          {
            "number": 75,
            "text": "75.下列何者數值越大,表示酵素之催化效率越佳?\n \nA.1 /kcat\nB.KM\nC.kcat / KM\nD.KM / kcat\n",
            "regions": [
              {
                "page": 11,
                "rect": [
                  30.0,
                  641.27,
                  569.96,
                  759.51
                ]
              }
            ],
            "id": "110-2-1-75",
            "year": 110,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/110/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=110101&c=301&s=11&q=1&verify=step1-20261013-110101-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=110101&y=2021",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/110/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=110101&c=301&s=11&q=1&verify=step1-20261013-110101-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "C"
            ],
            "point": "催化效率",
            "analysis": "kcat/Km反映低受質時的利用效率；數值越大通常越有效。只看Km或1/kcat不能表示同一量。",
            "trap": "限於適用模型與低S比較，非所有濃度都一樣。"
          },
          {
            "number": 74,
            "text": "74.在一個符合Michaelis-Menten equation的酵素催化反應中,當受質(substrate)濃度遠大於Michaelis常數\n(KM)時,此反應會近似於幾級化學反應?\n \nA.零級反應(zero-order reaction)\nB.一級反應(first-order reaction)\nC.二級反應(second-order reaction)\nD.三級反應(third-order reaction)\n",
            "regions": [
              {
                "page": 11,
                "rect": [
                  30.0,
                  649.4,
                  569.96,
                  784.64
                ]
              }
            ],
            "id": "111-1-1-74",
            "year": 111,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/111/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=111020&c=301&s=11&q=1&verify=step1-20261013-111020-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=111020&y=2022",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/111/1/medicine-1-S.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=S&code=111020&c=301&s=11&q=1&verify=step1-20261013-111020-301-11-S",
            "corrected": false,
            "answerVersion": "S",
            "originalAnswers": [
              "A"
            ],
            "point": "反應級數",
            "analysis": "[S]遠大於Km時v≈Vmax，對[S]近似零級；對酵素量仍有依賴。",
            "trap": "一定指出是對哪個變項的級數。"
          },
          {
            "number": 76,
            "text": "76.在一個符合Michaelis-Menten equation的酵素催化反應中,當受質(substrate)濃度極小於Michaelis常數\n(KM)時,此反應之速率常數應為下列何者?\n \nA.Vmax\nB.kcat / KM\nC.1 / kcat\nD.kcat  × KM\n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  418.83,
                  569.96,
                  585.1
                ]
              }
            ],
            "id": "111-2-1-76",
            "year": 111,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/111/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=111100&c=301&s=11&q=1&verify=step1-20261013-111100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=111100&y=2022",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/111/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=111100&c=301&s=11&q=1&verify=step1-20261013-111100-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "B"
            ],
            "point": "低S效率",
            "analysis": "v≈(kcat/Km)[E][S]，此題以雙分子係數表示，故選B。",
            "trap": "與106年題的Vmax/Km並不矛盾，差在是否納入E。"
          },
          {
            "number": 76,
            "text": "76.某酵素的Km=10 mM, kcat=1000 s\n-1,當受質濃度為0.01 mM 時,該酵素催化反應所展現的反應速率常數(rate \nconstant)最接近下列何者? \nA.1,000 s\n-1 \nB.10,000 mM s\n-1 \nC.10 mM s\n-1 \nD.100 mM\n-1 s\n-1 \n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  408.76,
                  570.32,
                  558.76
                ]
              }
            ],
            "id": "112-1-1-76",
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
            "point": "效率與單位",
            "analysis": "0.01 mM遠小於10 mM，使用kcat/Km=1000/10=100 mM⁻¹s⁻¹。",
            "trap": "這是效率常數，不是直接算出樣品v；還缺[E]。"
          },
          {
            "number": 75,
            "text": "75.某酵素催化反應的kcat=600(單位 1/s),KM=10 μM。當受質濃度是50 μM,酵素濃度是20 nM,此時測得\n之反應初速度(V0)約為多少μM/s? \nA.1  \nB.10 \nC.60 \nD.500 \n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  31.55,
                  587.0,
                  172.55
                ]
              }
            ],
            "id": "115-1-1-75",
            "year": 115,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/115/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=115020&c=301&s=0101&q=1&verify=step1-20261013-115020-301-0101-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=115020&y=2026",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/115/1/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=115020&c=301&s=0101&q=1&verify=step1-20261013-115020-301-0101-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "B"
            ],
            "point": "完整速率計算",
            "analysis": "20 nM=0.020 μM；Vmax=600×0.020=12 μM/s；v=12×50/(10+50)=10 μM/s。",
            "trap": "先統一濃度，避免千倍錯誤。"
          }
        ]
      },
      {
        "id": "group-1",
        "title": "抑制、圖形與調控",
        "topic": "inhibition",
        "summary": "參數、圖形和結合模型互相核對；保留英文避免譯名混淆。",
        "questions": [
          {
            "number": 28,
            "text": "28\n酵素催化反應的雙倒數圖(double-reciprocal plot)若有一競爭性抑制劑(competitive inhibitor)存在\n時,則下列何項會改變?\nA1/V 軸的截距\nB1/[S]軸的截距\nCV max\nD平衡常數K(pK)\n",
            "regions": [
              {
                "page": 3,
                "rect": [
                  30.0,
                  297.25,
                  570.0,
                  337.81
                ]
              }
            ],
            "id": "97-2-2-28",
            "year": 97,
            "session": 2,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/97/2/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=097140&c=103&s=c021&q=1&verify=step1-20261013-097140-103-c021-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=097140&y=2008",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/97/2/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=097140&c=103&s=c021&q=1&verify=step1-20261013-097140-103-c021-M",
            "corrected": true,
            "answerVersion": "M",
            "point": "競爭雙倒數",
            "analysis": "競爭抑制Vmax不變而Km,app上升，所以x截距−1/Km改變，y截距不變；平衡常數不受抑制劑這種動力學效應改寫。",
            "trap": "同y截距→同Vmax。"
          },
          {
            "number": 34,
            "text": "34 \n競爭型抑制劑(competitive inhibitor)會對酵素催化反應之動力學參數,產生何種影響? \nAVmax 降低 \nBKm值降低 \nCVmax/Km值降低 \nDKm值不變 \n",
            "regions": [
              {
                "page": 3,
                "rect": [
                  30.0,
                  458.88,
                  570.0,
                  487.86
                ]
              }
            ],
            "id": "98-1-2-34",
            "year": 98,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/98/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=098020&c=103&s=c021&q=1&verify=step1-20261013-098020-103-c021-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=098020&y=2009",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/98/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=098020&c=103&s=c021&q=1&verify=step1-20261013-098020-103-c021-M",
            "corrected": true,
            "answerVersion": "M",
            "point": "競爭比值",
            "analysis": "Vmax不變、Km,app增加，故Vmax/Km,app下降。選項以比值提問，不能只背單一參數。",
            "trap": "把兩個參數一起代入比值。"
          },
          {
            "number": 26,
            "text": "26 \n競爭型抑制劑(competitive inhibitor)對於酵素動力學參數的影響為: \nA使Km值上升 \nB使kcat值下降 \nC使kcat / Km值上升 \nD使Vmax下降 \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  177.38,
                  570.22,
                  214.76
                ]
              }
            ],
            "id": "102-1-2-26",
            "year": 102,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/102/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=102030&c=101&s=0102&q=1&verify=step1-20261013-102030-101-0102-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=102030&y=2013",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/102/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=102030&c=101&s=0102&q=1&verify=step1-20261013-102030-101-0102-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "A"
            ],
            "point": "競爭參數",
            "analysis": "理想可逆競爭抑制提高表觀Km，不降低飽和Vmax或kcat；表觀kcat/Km反而下降。",
            "trap": "區分表觀參數與酵素本身飽和週轉。"
          },
          {
            "number": 28,
            "text": "28 \n關於競爭型抑制劑(competitive inhibitor)的敘述,下列何者錯誤? \nA競爭型抑制劑能與酵素的活性中心結合 \nB競爭型抑制劑的存在會使酵素Km 上升 \nC競爭型抑制劑的存在會使酵素Kcat 下降 \nD競爭型抑制劑與酵素的結合是可逆的 \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  244.58,
                  570.22,
                  304.58
                ]
              }
            ],
            "id": "103-2-2-28",
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
            "point": "競爭錯誤敘述",
            "analysis": "錯誤為kcat下降；在同E與理想可逆競爭模型下，足夠高S仍可趨近原Vmax。",
            "trap": "高S可克服是模型極限，非任意少量受質即可。"
          },
          {
            "number": 27,
            "text": "27 \n某抑制劑會使酵素反應的Km 上升,但是不影響最高反應速率(即Vmax 不變),此抑制劑應屬於下列\n何者? \nA競爭型抑制劑(competitive inhibitor) \nB不競爭型抑制劑(uncompetitive inhibitor) \nC非競爭型抑制劑(noncompetitive inhibitor) \nD混合型抑制劑(mixed inhibitor) \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  120.4,
                  570.22,
                  193.6
                ]
              }
            ],
            "id": "104-1-2-27",
            "year": 104,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/104/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=104030&c=101&s=0102&q=1&verify=step1-20261013-104030-101-0102-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=104030&y=2015",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/104/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=104030&c=101&s=0102&q=1&verify=step1-20261013-104030-101-0102-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "A"
            ],
            "point": "由參數辨識",
            "analysis": "Km上升而Vmax不變符合competitive。Uncompetitive會兩者下降，pure noncompetitive則Km不變。",
            "trap": "同時比對兩個參數。"
          },
          {
            "number": 75,
            "text": "75.在非競爭性抑制劑(uncompetitive inhibitor)的存在下,下列何項是可預期的Michaelis-Menten 酵素動力學變\n化? \nA.Vmax下降,KM下降 \nB.Vmax不變,KM下降 \nC.Vmax下降,KM上升 \nD.Vmax不變,KM上升 \n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  339.55,
                  570.0,
                  489.55
                ]
              }
            ],
            "id": "112-2-1-75",
            "year": 112,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/112/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=112100&c=301&s=11&q=1&verify=step1-20261013-112100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=112100&y=2023",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/112/2/medicine-1-S.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=S&code=112100&c=301&s=11&q=1&verify=step1-20261013-112100-301-11-S",
            "corrected": false,
            "answerVersion": "S",
            "originalAnswers": [
              "A"
            ],
            "point": "Uncompetitive",
            "analysis": "只結合ES的模型使Vmax及Km同倍率下降，因此選A。原題中文非競爭需以括號uncompetitive為準。",
            "trap": "不要與pure noncompetitive的Km不變混淆。"
          },
          {
            "number": 74,
            "text": "74.在競爭性抑制劑(competitive inhibitor)的存在下,下列何項是可預期的Michaelis-Menten酵素動力學\n變化?\n \nA.Vmax下降,KM下降\nB.Vmax不變,KM下降\nC.Vmax下降,KM上升\nD.Vmax不變,KM上升\n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  284.01,
                  569.96,
                  443.63
                ]
              }
            ],
            "id": "113-1-1-74",
            "year": 113,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/113/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=113020&c=301&s=11&q=1&verify=step1-20261013-113020-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=113020&y=2024",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/113/1/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=113020&c=301&s=11&q=1&verify=step1-20261013-113020-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "D"
            ],
            "point": "競爭再現考法",
            "analysis": "競爭抑制使半最大速率所需S升高，但飽和極限不變，故Vmax不變、Km上升。",
            "trap": "從機制推，不只記題目年份。"
          },
          {
            "number": 76,
            "text": "76.將Michaelis-Menten equation轉型作成的雙倒數圖(double reciprocal plot),稱為Lineweaver-Burk\nplot,其方程式:1/V0=Km/(Vmax[S])+1/Vmax,由此雙倒數圖要如何求得Km?\n \nA.X軸的截距為其Km\nB.X軸截距的倒數為其Km\nC.X軸截距的倒數乘以-1為其Km\nD.Y軸截距的倒數乘以-1為其Km\n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  210.84,
                  569.96,
                  373.43
                ]
              }
            ],
            "id": "113-2-1-76",
            "year": 113,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/113/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=113090&c=301&s=11&q=1&verify=step1-20261013-113090-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=113090&y=2024",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/113/2/medicine-1-S.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=S&code=113090&c=301&s=11&q=1&verify=step1-20261013-113090-301-11-S",
            "corrected": false,
            "answerVersion": "S",
            "originalAnswers": [
              "C"
            ],
            "point": "x截距取倒數",
            "analysis": "x截距=−1/Km，取倒數再乘−1才得到正的Km。y截距則對應1/Vmax。",
            "trap": "先標橫軸1/[S]，再處理負號。"
          },
          {
            "number": 27,
            "text": "27 \n下列調控酵素活性的方式,何者為不可逆的(irreversible)? \nA 異位調節(allosteric regulation) \nB共價修飾(covalent modification) \nC酶原(zymogen)的蛋白水解切割(proteolytic clevage) \nD非競爭型抑制劑(uncompetitive inhibitor)的結合 \n",
            "regions": [
              {
                "page": 3,
                "rect": [
                  30.0,
                  81.24,
                  570.0,
                  147.24
                ]
              }
            ],
            "id": "99-2-2-27",
            "year": 99,
            "session": 2,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/99/2/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=099130&c=101&s=200&q=1&verify=step1-20261013-099130-101-200-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=099130&y=2010",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/99/2/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=099130&c=101&s=200&q=1&verify=step1-20261013-099130-101-200-M",
            "corrected": true,
            "answerVersion": "M",
            "point": "不可逆加工",
            "analysis": "酶原的有限蛋白水解切斷肽鍵，對同一分子不可直接逆轉。異位性與常見磷酸化可逆；原題抑制類型依英文閱讀。",
            "trap": "不可逆加工不代表整個生理系統不能關閉活性。"
          }
        ]
      }
    ],
    "note": "本頁為主題精選，不是完整歷年頻率統計。題幹譯名或文字擷取有歧義時，解析另加註並以原卷及英文術語核對。"
  }
});
