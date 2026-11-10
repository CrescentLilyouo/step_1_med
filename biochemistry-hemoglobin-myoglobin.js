/* Authored chapter 4; rebuild with scripts/build-biochemistry-batch.py. */
biochemistryChapters.push({
  "id": "hemoglobin-myoglobin",
  "number": "04",
  "title": "血紅素與肌紅素：結構如何控制攜氧與釋氧",
  "summary": "由heme配位與T/R平衡推導協同性、BPG、Bohr/Haldane效應，再辨認氧含量與異常血紅素。",
  "sources": "Harper’s Illustrated Biochemistry, 31st ed., Chapter 6（pp.47–55）",
  "sections": [
    {
      "id": "map",
      "title": "先分清四個名字與三個測量值",
      "html": "<p>Hemoglobin（Hb，血紅蛋白／血紅素）是紅血球內的攜氧蛋白；heme（血基質）是它的含鐵輔基；globin\n是蛋白質鏈部分；myoglobin（Mb，肌紅蛋白／肌紅素）則是肌肉內的單鏈含 heme\n蛋白。中文的「血紅素」有時被混用來指 Hb 或\nheme，讀題務必看括號英文。</p>\n<p>氧分壓 PO₂\n反映溶解氧的化學勢與擴散驅動，不直接等於血液裝了多少氧。飽和度表示氧結合位點中被\nO₂ 佔據的比例；氧含量則是每單位血液的總氧量，主要受 Hb\n濃度與飽和度影響。三者相關，但不可互換。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"先分清四個名字與三個測量值比較表\"><table>\n<colgroup>\n<col style=\"width: 25%\" />\n<col style=\"width: 25%\" />\n<col style=\"width: 25%\" />\n<col style=\"width: 25%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>量</th>\n<th>回答的問題</th>\n<th>典型單位</th>\n<th>最常見誤解</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>PO₂</td>\n<td>溶解氧提供多大氧分壓？</td>\n<td>mmHg</td>\n<td>正常就代表 Hb 足夠</td>\n</tr>\n<tr class=\"even\">\n<td>O₂ saturation</td>\n<td>可計算範圍內的 Hb 位點有多少被氧占據？</td>\n<td>比例或 %</td>\n<td>高就代表總含氧量正常</td>\n</tr>\n<tr class=\"odd\">\n<td>O₂ content</td>\n<td>每單位血液實際帶多少氧？</td>\n<td>mL O₂/dL</td>\n<td>只由 PO₂ 決定</td>\n</tr>\n</tbody>\n</table></div>\n<p>先問「能裝多少」「裝了多少比例」「卸得下來嗎」，比只背曲線左移右移更有用。本章的所有異常情境都可以放回這三個問題。</p>\n"
    },
    {
      "id": "heme",
      "title": "Heme 的六個配位位置與兩個 His",
      "html": "<p>Heme 含 protoporphyrin IX 與中央\nFe²⁺。四個配位位置由卟啉環的氮提供；第五個由 globin 的 proximal\nhistidine（近端 His，F8）直接與鐵配位；第六個可結合 O₂。每個 heme\n通常可結合一個氧分子，不是兩個氧原子各占一個獨立位置。</p>\n<p>Distal histidine（遠端\nHis，E7）位在氧結合口袋另一側，並非正常情況下直接占據第六個鐵配位位置。它可與已結合的\nO₂ 形成氫鍵，影響配體幾何與穩定性，也影響 CO 相對 O₂\n的結合偏好。因此「His 與鐵直接配位」與「His\n穩定氧分子」分別在問近端與遠端。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Heme 的六個配位位置與兩個 His比較表\"><table>\n<thead>\n<tr class=\"header\">\n<th>角色</th>\n<th>直接對象</th>\n<th>重要結果</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>卟啉四個氮</td>\n<td>中央 Fe</td>\n<td>固定 heme 平面中的配位環境</td>\n</tr>\n<tr class=\"even\">\n<td>Proximal His F8</td>\n<td>Fe</td>\n<td>把鐵的位置變化連到蛋白質 F helix</td>\n</tr>\n<tr class=\"odd\">\n<td>Distal His E7</td>\n<td>結合的 O₂ 等配體環境</td>\n<td>氫鍵與空間限制，影響結合選擇性</td>\n</tr>\n<tr class=\"even\">\n<td>第六配位位置</td>\n<td>O₂ 或其他可結合配體</td>\n<td>氧與 CO 的競爭位置</td>\n</tr>\n</tbody>\n</table></div>\n<p>氧合時，以國考與功能分類而言鐵仍歸為 Fe²⁺；不能把 oxyhemoglobin\n直接當成 methemoglobin 的 Fe³⁺。真正的 methemoglobin 是鐵氧化成\nFe³⁺的狀態，該 heme\n不再正常可逆結合氧。精細電子結構可更複雜，但不改變這個功能上的重要區別。</p>\n"
    },
    {
      "id": "myoglobin",
      "title": "肌紅素：高親和力為什麼適合局部供氧",
      "html": "<p>Myoglobin 為單條多肽、含一個 heme，整體富含 α\n螺旋。它沒有四個次單元之間的協同性，所以典型氧結合曲線是雙曲線。低 PO₂\n時仍能保有相當比例氧，當肌肉局部 PO₂\n很低時再釋出，適合局部氧儲備與促進氧在肌細胞內的傳遞。</p>\n<p>以單一獨立位點的模型，分率飽和度 Y = PO₂/(P₅₀ + PO₂)。P₅₀ 是 Y = 0.5\n時的氧分壓；P₅₀ 越低，達半飽和需要的氧越少，親和力越高。Mb 的 P₅₀ 約數\nmmHg，明顯低於成人 Hb 的約 26–27 mmHg，但實際值受條件影響。</p>\n<p><strong>算例：</strong> 假設 Mb 的 P₅₀ = 3 mmHg，在 PO₂ 30 時 Y =\n30/33 ≈ 91%；降到 3 時才到\n50%。若這種高親和力的單體取代主要血液攜氧功能，從肺到一般靜息組織的氧分壓差可能只釋出較少比例氧。因此「抓得越緊」不等於「越適合大量運送」。</p>\n<p>Mb\n的單體性不等於完全沒有構形變動；單一蛋白仍可在結合配體後調整形狀。缺少的是\nHb 那種四個 heme 位點之間的正協同性，不是分子像石頭一樣不會動。</p>\n"
    },
    {
      "id": "states",
      "title": "Hb 的四級結構與 T／R 平衡",
      "html": "<p>成人主要 HbA 由兩條 α 與兩條 β 鏈組成，每條一個 heme，最多結合四個\nO₂。各鏈的 globin fold 與 Mb 有共同結構特色，但 Hb\n的次單元界面提供了鏈間通訊，讓結合能力可以互相影響。</p>\n<p>T（tense）狀態相對低氧親和力，R（relaxed）相對高親和力。這是不同構形族群的平衡，不應死背成\nT 絕對不能結合氧、R 絕對只能滿載。氧結合會使平衡偏向 R；促進 T\n的因子則有利釋氧。</p>\n<p>去氧狀態的 heme\n鐵稍偏離卟啉平面。氧結合後，鐵位置移近環平面，牽動近端 His\n與相連螺旋，再經界面影響其他次單元。重要的是局部配位變化可以傳到四級結構，不需要把一級序列重新合成。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Hb 的四級結構與 T／R 平衡比較表\"><table>\n<thead>\n<tr class=\"header\">\n<th>狀態</th>\n<th>相對親和力</th>\n<th>中央空腔與 BPG</th>\n<th>傾向的功能</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>T</td>\n<td>低</td>\n<td>較適合 2,3-BPG 結合</td>\n<td>較易在組織卸氧</td>\n</tr>\n<tr class=\"even\">\n<td>R</td>\n<td>高</td>\n<td>空腔縮小，BPG 較不利結合</td>\n<td>較易在肺部載氧</td>\n</tr>\n</tbody>\n</table></div>\n<p>Hb\n常用協同性模型說明，但兩態模型是理解用的近似，不代表所有原子的變化都只有兩張固定照片。</p>\n"
    },
    {
      "id": "cooperativity",
      "title": "協同性、異位性與 S 型曲線",
      "html": "<p>正協同性是某個 O₂ 結合後，使其他位點對後續 O₂ 的結合更有利。低 PO₂\n時多數 Hb 較偏 T，開始結合相對不易；結合增加後偏向\nR，中段飽和度上升更快；到高 PO₂ 時接近滿載而出現平台，形成 S\n型曲線。</p>\n<p>O₂ 自己既是配體，也是影響其他 O₂ 位點的調節者，因此是 homotropic\neffector（同向／同種配體的異位調節）。H⁺、CO₂、2,3-BPG 則與 O₂\n不是同一物質，屬 heterotropic effectors。Homotropic\n並不是「兩個配體擠同一個位置」，而是相同種類的配體影響不同位點。</p>\n<p>單體也可能有異位調節，異位性不一定要求四個次單元；但典型 Hb\n的氧協同性確實利用多個 heme\n位點及次單元互動。不要把「異位性」「協同性」「四級結構」三者完全視為同義詞。</p>\n<p>Hill 形式可寫成 Y = PO₂ⁿ/(P₅₀ⁿ + PO₂ⁿ)，其中 n\n是描述曲線陡峭與協同性的經驗參數。n = 1 對應簡單獨立位點；n &gt; 1\n支持正協同性。Hb 的 Hill coefficient 常約 2.8，並不等於它只有 2.8\n個氧位點，更不能從 n\n直接讀出精確次單元數。此式適合教學曲線，並非所有飽和範圍的完整機制模型。</p>\n"
    },
    {
      "id": "curve",
      "title": "氧解離曲線：左移右移與平台、陡坡",
      "html": "<p>讀曲線先固定橫軸 PO₂，再比較縱軸飽和度。左移代表同一 PO₂\n下較易保持氧、P₅₀\n降低、親和力增加；右移相反。不要只盯圖形向左向右，忘記它描述的是相同氧分壓下的差異。</p>\n<p>高氧分壓端的平台，使肺部 PO₂ 在一定範圍下降時，Hb\n飽和度仍能維持相對高；中間較陡的區段，使組織 PO₂\n下降可以促進較多氧釋放。這是 S\n型曲線對運輸的優點。低於正常範圍很多時，平台保護仍會消失。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"氧解離曲線：左移右移與平台、陡坡比較表\"><table>\n<thead>\n<tr class=\"header\">\n<th>變化</th>\n<th>曲線</th>\n<th>P₅₀</th>\n<th>同 PO₂ 的飽和度</th>\n<th>一般組織卸氧傾向</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>親和力升高</td>\n<td>左移</td>\n<td>下降</td>\n<td>較高</td>\n<td>較不易</td>\n</tr>\n<tr class=\"even\">\n<td>親和力降低</td>\n<td>右移</td>\n<td>上升</td>\n<td>較低</td>\n<td>較易</td>\n</tr>\n</tbody>\n</table></div>\n<p><strong>算例：</strong> 假設 Hb = 15 g/dL、肺端飽和度 98%、組織回流端\n75%。忽略溶解氧時，一次經過組織釋出的氧約為 1.34×15×(0.98−0.75) = 4.62\nmL/dL。不是把動脈全部約 20 mL/dL\n都當作已被組織取走；實際釋放取決於兩端的差。</p>\n<figure><img class=\"bio-diagram\" src=\"assets/biochemistry/oxygen-binding.svg\" alt=\"教學模型：Mb採P₅₀=3 mmHg；HbF/HbA採Hill n=2.8、P₅₀分別20/26.6 mmHg。曲線不是病人實測值。固定PO₂比較：HbF比HbA更易維持氧合，Mb呈高親和力雙曲線。\" width=\"760\" height=\"450\" loading=\"lazy\"><figcaption>教學模型：Mb採P₅₀=3 mmHg；HbF/HbA採Hill n=2.8、P₅₀分別20/26.6 mmHg。曲線不是病人實測值。固定PO₂比較：HbF比HbA更易維持氧合，Mb呈高親和力雙曲線。</figcaption></figure>"
    },
    {
      "id": "bohr",
      "title": "Bohr effect：代謝產生的酸如何促進卸氧",
      "html": "<p>代謝旺盛的組織產生較多 CO₂ 與 H⁺。較低 pH 促進 Hb\n部分殘基的質子化，支持穩定 T 狀態的互動，降低氧親和力，使曲線右移。這種\nH⁺／CO₂ 對氧結合的影響稱為 Bohr effect。</p>\n<p>在紅血球，carbonic anhydrase 加速 CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻\n的轉換。去氧 Hb 對質子的結合可參與緩衝；CO₂ 也可直接與 globin\n的末端胺基形成 carbamate，支持去氧狀態並釋出 H⁺。CO₂ 不是像 O₂\n一樣直接與 heme 的第六位置競爭。</p>\n<p>在肺部，較低 CO₂ 與氧結合促進反向過程，支持氧載入及 CO₂\n排出。若只背「酸右移」，容易漏掉分子理由：質子化改變鹽橋與 T/R\n平衡。也不能將所有右移都叫 Bohr effect；溫度升高與 BPG\n增加也能右移，但不是這個名詞的核心定義。</p>\n"
    },
    {
      "id": "haldane",
      "title": "Haldane effect：把因果方向反過來看",
      "html": "<p>Bohr effect 問「H⁺/CO₂ 改變時，Hb 對氧如何改變？」Haldane effect\n問「Hb 氧合程度改變時，血液攜帶 CO₂ 與\nH⁺的能力如何改變？」兩者互相配合，但題目檢驗的因果方向不同。</p>\n<p>去氧 Hb 較能結合質子，也較有利形成 carbamino 形式，使靜脈血在組織接收\nCO₂。肺中氧合後，Hb 對 H⁺等的結合改變，釋出的質子與 HCO₃⁻ 重新形成\nCO₂，便於排出。因此 Haldane effect 是氧合對 CO₂\n運輸的影響，不能只回答「酸促進釋氧」。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Haldane effect：把因果方向反過來看比較表\"><table>\n<thead>\n<tr class=\"header\">\n<th>效應</th>\n<th>先改變的變項</th>\n<th>觀察的結果</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Bohr</td>\n<td>pH／CO₂</td>\n<td>O₂ 親和力與釋放</td>\n</tr>\n<tr class=\"even\">\n<td>Haldane</td>\n<td>Hb 氧合程度</td>\n<td>CO₂／H⁺攜帶能力</td>\n</tr>\n</tbody>\n</table></div>\n<p>Chloride shift 則是 HCO₃⁻ 經紅血球膜交換並以 Cl⁻ 維持電中性：組織端\nHCO₃⁻ 外出、Cl⁻ 進入；肺端相反。它與 CO₂ 運輸相連，但不是 T/R\n構形轉換本身。</p>\n"
    },
    {
      "id": "bpg",
      "title": "2,3-BPG：紅血球把糖解與供氧接起來",
      "html": "<p>2,3-bisphosphoglycerate 帶多個負電，可結合去氧 Hb\n中央空腔內的正電基團，主要位於 β 鏈之間。典型為每個 Hb 四聚體結合一個\nBPG，不是每個 heme 都各結合一個。它穩定 T 狀態，降低 O₂ 親和力，提高\nP₅₀，促進組織卸氧。</p>\n<p>紅血球可由糖解中間產物 1,3-BPG 經 Rapoport–Luebering shunt 形成\n2,3-BPG，再回到 3-phosphoglycerate。這個旁路繞過 phosphoglycerate kinase\n的 ATP 生成步驟，因此存在能量收益與調節供氧之間的取捨。不要把\n1,3-BPG、2,3-BPG、fructose-2,6-bisphosphate\n混在一起；名稱相似但角色不同。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"2,3-BPG：紅血球把糖解與供氧接起來比較表\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>分子</th>\n<th>主要定位</th>\n<th>本章要記的功能</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>1,3-BPG</td>\n<td>糖解中間產物</td>\n<td>可經一般路徑產 ATP，也可進旁路</td>\n</tr>\n<tr class=\"even\">\n<td>2,3-BPG</td>\n<td>紅血球調節分子</td>\n<td>穩定 Hb 的 T 狀態</td>\n</tr>\n<tr class=\"odd\">\n<td>Fructose-2,6-bisphosphate</td>\n<td>糖代謝調節</td>\n<td>調節 PFK-1／FBPase-1，非 Hb 的這個效應物</td>\n</tr>\n</tbody>\n</table></div>\n<p>低氧適應可伴隨 BPG\n上升，增加卸氧傾向；但高海拔同時有通氣、酸鹼、紅血球量等多種變化，不能說\nBPG 單獨決定所有供氧。儲存紅血球的 BPG\n可降低，使其氧親和力改變；這是生化概念，不應直接用來替代輸血臨床評估。</p>\n"
    },
    {
      "id": "fetal",
      "title": "HbF：胎兒如何在較低氧分壓下接收氧",
      "html": "<p>HbF 是 α₂γ₂，HbA 是 α₂β₂，成人少量 HbA₂ 則為 α₂δ₂。胎兒 γ 鏈與成人 β\n鏈的差異，使 HbF 對 2,3-BPG 的結合較弱；T\n狀態受到的穩定較少，因此在相同條件下 HbF 氧親和力較高，曲線較左移。</p>\n<p>經典結構比較包括成人 β 鏈某個參與 BPG 結合的 His，在 γ 鏈相對位置為\nSer，減少正電互動。考試先掌握「γ 鏈 → BPG 結合弱 → T 穩定較少 → O₂\n親和力較高」整條因果，而不是只背 HbF 左移。</p>\n<p>胎盤氧交換仍需要母胎兩側氧分壓差與血流等條件，不是胎兒 Hb 直接從母體\nHb 手上搬運氧分子。CO₂\n由胎兒往母體轉移，也可造成胎側相對鹼化、母側相對酸化，支持雙重 Bohr\n效應，有利氧轉移。</p>\n<p>出生後 globin 表現逐漸轉換，HbF 比例下降，某些 β-globin\n疾病因此在出生後一段時間才明顯。不能將 HbF 的較高親和力解釋成胎兒有更多\nheme 位點；兩者仍各有四個 heme。</p>\n"
    },
    {
      "id": "content",
      "title": "氧含量與氧輸送：把單位算清楚",
      "html": "<p>常用近似式：CaO₂（mL O₂/dL）≈ 1.34×Hb（g/dL）×SaO₂（小數）+\n0.003×PaO₂（mmHg）。前項是 Hb\n結合氧，後項是溶解氧；係數會依採用的測量與教學慣例略有差異，作題優先使用題幹指定值。</p>\n<p><strong>正常量級算例：</strong> Hb 15、SaO₂ 0.98、PaO₂ 100，結合氧約\n19.70，溶解氧約 0.30，合計約 20.0 mL/dL。<strong>貧血算例：</strong> 若\nHb 變成 7.5，其餘相同，總含量約 10.15\nmL/dL。即使氧分壓與飽和度相同，攜氧量仍大幅減少。</p>\n<p>若要換成每分鐘全身氧輸送量 DO₂，還須乘心輸出量：DO₂ ≈ cardiac\noutput（L/min）×CaO₂（mL/dL）×10（dL/L）。例如 5×20×10 = 1000\nmL/min。這是送達動脈系統的氧量，不是所有氧都被消耗；氧消耗另須考慮動靜脈含量差。</p>\n<p>一般二波長 pulse oximeter 的 SpO₂ 與直接檢測不同 Hb 物種的\nco-oximetry 不能完全互換。若有 COHb、MetHb，須區分 functional saturation\n與 fractional oxyhemoglobin；不應把可能受干擾的 SpO₂\n直接代入公式，假設每一克 Hb 都正常可攜氧。</p>\n"
    },
    {
      "id": "co",
      "title": "一氧化碳：可用位點減少，剩餘氧又更難卸下",
      "html": "<p>CO 可與 heme Fe²⁺ 結合，與 O₂ 競爭，形成\ncarboxyhemoglobin。它不需要先把鐵氧化成 Fe³⁺，因此與 methemoglobin\n是不同問題。CO 與 Hb 的高親和力讓可供氧使用的位點減少。</p>\n<p>另一個關鍵是 CO 結合偏向穩定高親和力構形，使剩餘 O₂\n位點更難釋氧，表現為剩餘氧結合曲線左移。這兩個影響要同時記：容量下降加上卸氧受阻，不是只有少裝幾個氧分子。</p>\n<p>PaO₂ 反映溶解氧，因此 CO 中毒時可以仍在正常範圍；一般 SpO₂\n也可能具有誤導性。這不代表組織供氧正常。考題若描述正常 PaO₂ 加上可能的\nCO 暴露，應想到測量對象不同，不要把正常血氣氧分壓當作排除依據。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"一氧化碳：可用位點減少，剩餘氧又更難卸下比較表\"><table>\n<thead>\n<tr class=\"header\">\n<th>狀態</th>\n<th>heme 鐵功能分類</th>\n<th>主要問題</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>DeoxyHb</td>\n<td>Fe²⁺</td>\n<td>尚未結合氧，可再結合</td>\n</tr>\n<tr class=\"even\">\n<td>OxyHb</td>\n<td>Fe²⁺氧合態</td>\n<td>可逆攜氧</td>\n</tr>\n<tr class=\"odd\">\n<td>COHb</td>\n<td>Fe²⁺結合 CO</td>\n<td>位點被占及剩餘氧不易卸下</td>\n</tr>\n<tr class=\"even\">\n<td>MetHb</td>\n<td>Fe³⁺</td>\n<td>受影響 heme 無法正常結合氧</td>\n</tr>\n</tbody>\n</table></div>\n"
    },
    {
      "id": "methemoglobin",
      "title": "Methemoglobin：氧化不是氧合",
      "html": "<p>Methemoglobin 的鐵為 Fe³⁺。紅血球平常會產生少量氧化 Hb，並主要由\nNADH–cytochrome b₅ reductase\n系統維持低含量。氧化負荷過高、酵素缺陷或某些 Hb\n結構變異，可使比例升高。</p>\n<p>部分 heme 變成 Fe³⁺後，除了這些位點不能正常攜氧，剩餘\nFe²⁺位點的氧親和力也可能增加，進一步影響卸氧。因此不能只用「氧分壓正常」判斷供氧無虞。HbM\n的某些突變會穩定 ferric 狀態，但不同 HbM\n變異位置不同，不宜把全部寫成唯一一個 His 突變。</p>\n<p>本章只建立辨認路徑：COHb 是配體占位，MetHb 是鐵氧化態改變，貧血是 Hb\n總量下降。三者都可能降低有效供氧，卻不是同一個生化故障；臨床診斷與治療需另依實際檢驗及情境。</p>\n"
    },
    {
      "id": "variants",
      "title": "HbS 與 thalassemia：品質異常和合成不足",
      "html": "<p>HbS 經典變異是 β-globin 第 6 位 Glu 被 Val\n取代。原本帶負電、較親水的表面位置變成疏水性斑塊；在去氧狀態下，這個斑塊可與其他\nHb 的互補表面接觸，促進聚合形成纖維。不是因為新長出\nCys，所以雙硫鍵增加，也不是單純靠新形成的共價鍵把所有 Hb 串住。</p>\n<p>低氧、脫水造成的濃度升高等因素可促進聚合與鐮變；紅血球變形能力下降，加上反覆傷害，連到溶血與微血管阻塞。這說明一個一級結構變化可以透過三級表面性質影響分子間聚集與臨床表現。HbF\n可降低 HbS 聚合傾向，是理解胎兒期與出生後表現差異的重要概念。</p>\n<p>Thalassemia 則主要是某類 globin\n鏈合成減少或缺乏，造成鏈數失衡與無效造血等問題。α-thalassemia\n常與基因缺失相關，β-thalassemia\n常涉及轉錄、剪接或轉譯相關變異，但不是說兩類都只能由唯一一種突變造成。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"HbS 與 thalassemia：品質異常和合成不足比較表\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>疾病概念</th>\n<th>核心異常</th>\n<th>讀題線索</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>HbS</td>\n<td>β 鏈特定位點置換</td>\n<td>疏水斑塊、去氧聚合</td>\n</tr>\n<tr class=\"even\">\n<td>β-thalassemia</td>\n<td>β 鏈生成不足</td>\n<td>鏈量失衡，不能說是由 Val 取代造成</td>\n</tr>\n<tr class=\"odd\">\n<td>α-thalassemia</td>\n<td>α 鏈生成不足</td>\n<td>嚴重時可有 γ₄（Hb Bart’s）或 β₄（HbH）</td>\n</tr>\n<tr class=\"even\">\n<td>高氧親和力 Hb 變異</td>\n<td>T/R 或結合性質改變</td>\n<td>氧抓得緊卻難卸，可能引發代償性紅血球增多</td>\n</tr>\n</tbody>\n</table></div>\n<p>此處重點是結構與合成機制，不採用舊版教材中的治療現況作為最新處置建議。</p>\n"
    },
    {
      "id": "review",
      "title": "整合題的五步判讀與複習",
      "html": "<p>第一步看 Hb 量是否改變；第二步看 heme 是否仍能攜氧；第三步看 P₅₀\n與曲線方向；第四步區分\nPO₂、飽和度與含量；第五步看組織需求與血流。依這個順序，便不會把所有缺氧問題都塞成「曲線右移」。</p>\n<p>運動肌肉溫度、CO₂\n與酸負荷上升，支持卸氧，但血流也增加；單靠曲線不能算出總供氧。HbF\n較左移有利在胎盤低氧分壓環境載氧；CO\n造成左移卻同時占據位點且阻礙卸氧。相同的「左移」不是同一個生理目的。</p>\n<p>閉卷時請完整說出三條鏈：O₂ 結合 → Fe/近端 His 位移 → 次單元界面改變 →\n正協同性；BPG 結合 → T 穩定 → P₅₀ 上升 → 較易卸氧；β6 Glu→Val →\n表面疏水性增加 → 去氧 HbS 聚合。能講出中間兩步，才表示不只是背結果。</p>\n"
    }
  ],
  "questions": [
    {
      "title": "01　Heme、globin、Hb三者有何不同？",
      "prompt": "<p>Heme、globin、Hb三者有何不同？</p>",
      "answer": "<p>Heme是含鐵卟啉輔基，globin是蛋白鏈，Hb是包含globin及heme的攜氧蛋白。中文血紅素可能混用，須看英文。</p>"
    },
    {
      "title": "02　氧合heme第五與第六配位位置分別接誰？",
      "prompt": "<p>氧合heme第五與第六配位位置分別接誰？</p>",
      "answer": "<p>第五為近端His，第六為O₂；卟啉四個氮提供其他四個。不是一個氧原子占一個額外配位位置。</p>"
    },
    {
      "title": "03　近端與遠端His分別有何功能？",
      "prompt": "<p>近端與遠端His分別有何功能？</p>",
      "answer": "<p>近端His F8直接配位鐵並連動F helix；遠端His E7可與O₂形成氫鍵、影響配體環境，而非正常直接占第六鐵配位位置。</p>"
    },
    {
      "title": "04　OxyHb是否就是Fe³⁺的MetHb？",
      "prompt": "<p>OxyHb是否就是Fe³⁺的MetHb？</p>",
      "answer": "<p>否。功能分類中oxyHb仍為Fe²⁺氧合態；MetHb為Fe³⁺，該heme無法正常可逆攜氧。氧合與氧化不同。</p>"
    },
    {
      "title": "05　Mb的P50=3，PO₂=9時飽和度為何？",
      "prompt": "<p>Mb的P50=3，PO₂=9時飽和度為何？</p>",
      "answer": "<p>單位點模型Y=9/(3+9)=0.75。PO₂=P50時才是50%，不是9/3得到300%。</p>"
    },
    {
      "title": "06　Mb為何不適合直接取代Hb的主要血液輸氧角色？",
      "prompt": "<p>Mb為何不適合直接取代Hb的主要血液輸氧角色？</p>",
      "answer": "<p>Mb高親和力使它在一般組織PO₂下仍保有較多氧，肺到組織的釋放比例較小。Hb的協同性與調節更利於載入後卸下。</p>"
    },
    {
      "title": "07　BPG與O₂分別穩定哪種狀態？",
      "prompt": "<p>BPG與O₂分別穩定哪種狀態？</p>",
      "answer": "<p>BPG偏向低親和力T狀態；O₂結合使平衡偏向高親和力R。不是T絕對不能結合氧。</p>"
    },
    {
      "title": "08　Homotropic是否指兩個氧占同一位點？",
      "prompt": "<p>Homotropic是否指兩個氧占同一位點？</p>",
      "answer": "<p>不是。一位點的O₂影響其他位點對同種配體的結合；各heme仍各有獨立配位位置。</p>"
    },
    {
      "title": "09　Hill coefficient約2.8，表示幾個氧位點？",
      "prompt": "<p>Hill coefficient約2.8，表示幾個氧位點？</p>",
      "answer": "<p>不能由它讀出位點數；它描述協同性及曲線陡峭。Hb四聚體仍有四個heme。</p>"
    },
    {
      "title": "10　P50從27降至20，曲線與親和力如何？",
      "prompt": "<p>P50從27降至20，曲線與親和力如何？</p>",
      "answer": "<p>左移、親和力增加。在相同組織PO₂下通常較不易卸氧；總供氧還要看Hb量與血流。</p>"
    },
    {
      "title": "11　Hb15，動脈飽和0.98、回流0.75，忽略溶解氧的釋氧量？",
      "prompt": "<p>Hb15，動脈飽和0.98、回流0.75，忽略溶解氧的釋氧量？</p>",
      "answer": "<p>1.34×15×(0.98−0.75)=4.62 mL/dL。計算兩端差額，不是把動脈所有含氧量當作消耗。</p>"
    },
    {
      "title": "12　酸增加促進釋氧與氧合促進CO₂釋放，各是哪個效應？",
      "prompt": "<p>酸增加促進釋氧與氧合促進CO₂釋放，各是哪個效應？</p>",
      "answer": "<p>前者Bohr，後者Haldane。前者問H⁺/CO₂如何影響O₂結合，後者問氧合如何影響CO₂/H⁺攜帶能力。</p>"
    },
    {
      "title": "13　CO₂是否直接占O₂的heme配位位置？",
      "prompt": "<p>CO₂是否直接占O₂的heme配位位置？</p>",
      "answer": "<p>不是。CO₂可與globin末端胺基形成carbamate，也透過H⁺/HCO₃⁻系統調節。CO才是與O₂競爭heme位置的重要配體。</p>"
    },
    {
      "title": "14　一個Hb四聚體典型結合幾個BPG？",
      "prompt": "<p>一個Hb四聚體典型結合幾個BPG？</p>",
      "answer": "<p>一個，位於中央空腔，穩定T、提高P50；不是四個heme各結合一個。</p>"
    },
    {
      "title": "15　用因果鏈說明HbF親和力較高。",
      "prompt": "<p>用因果鏈說明HbF親和力較高。</p>",
      "answer": "<p>γ鏈差異→BPG結合較弱→T狀態較少受穩定→O₂親和力較高。不是胎兒多了heme位點。</p>"
    },
    {
      "title": "16　Hb7.5、SaO₂0.98、PaO₂100，CaO₂近似多少？",
      "prompt": "<p>Hb7.5、SaO₂0.98、PaO₂100，CaO₂近似多少？</p>",
      "answer": "<p>1.34×7.5×0.98+0.003×100≈10.15 mL/dL。氧分壓正常仍可能因Hb不足而攜氧量低。</p>"
    },
    {
      "title": "17　CO5 L/min，CaO₂20 mL/dL，DO₂為何？",
      "prompt": "<p>CO5 L/min，CaO₂20 mL/dL，DO₂為何？</p>",
      "answer": "<p>5×20×10=1000 mL/min；乘10為L轉dL。這是輸送量，不代表全部被消耗。</p>"
    },
    {
      "title": "18　CO除了占位還有哪個重要影響？",
      "prompt": "<p>CO除了占位還有哪個重要影響？</p>",
      "answer": "<p>提高剩餘位點的氧親和力，讓卸氧更困難。PaO₂只反映溶解氧，不能用正常值排除有效輸氧障礙。</p>"
    },
    {
      "title": "19　HbS的Glu→Val為何增加聚合？",
      "prompt": "<p>HbS的Glu→Val為何增加聚合？</p>",
      "answer": "<p>表面親水帶負電位置變成疏水斑塊，去氧時可與其他分子的互補表面作用。不是增加雙硫鍵。</p>"
    },
    {
      "title": "20　HbS與β-thalassemia的核心異常有何不同？",
      "prompt": "<p>HbS與β-thalassemia的核心異常有何不同？</p>",
      "answer": "<p>HbS是特定序列置換改變性質；β-thalassemia主要是β鏈合成不足與鏈量失衡，可由不同轉錄、剪接或轉譯相關變異造成。</p>"
    }
  ],
  "recalls": [
    [
      "Heme、globin、Hb三者有何不同？",
      "Heme是含鐵卟啉輔基，globin是蛋白鏈，Hb是包含globin及heme的攜氧蛋白。中文血紅素可能混用，須看英文。"
    ],
    [
      "近端與遠端His分別有何功能？",
      "近端His F8直接配位鐵並連動F helix；遠端His E7可與O₂形成氫鍵、影響配體環境，而非正常直接占第六鐵配位位置。"
    ],
    [
      "Mb的P50=3，PO₂=9時飽和度為何？",
      "單位點模型Y=9/(3+9)=0.75。PO₂=P50時才是50%，不是9/3得到300%。"
    ],
    [
      "BPG與O₂分別穩定哪種狀態？",
      "BPG偏向低親和力T狀態；O₂結合使平衡偏向高親和力R。不是T絕對不能結合氧。"
    ],
    [
      "Homotropic是否指兩個氧占同一位點？",
      "不是。一位點的O₂影響其他位點對同種配體的結合；各heme仍各有獨立配位位置。"
    ],
    [
      "P50從27降至20，曲線與親和力如何？",
      "左移、親和力增加。在相同組織PO₂下通常較不易卸氧；總供氧還要看Hb量與血流。"
    ],
    [
      "酸增加促進釋氧與氧合促進CO₂釋放，各是哪個效應？",
      "前者Bohr，後者Haldane。前者問H⁺/CO₂如何影響O₂結合，後者問氧合如何影響CO₂/H⁺攜帶能力。"
    ],
    [
      "酸增加促進釋氧與氧合促進CO₂釋放，各是哪個效應？",
      "前者Bohr，後者Haldane。前者問H⁺/CO₂如何影響O₂結合，後者問氧合如何影響CO₂/H⁺攜帶能力。"
    ],
    [
      "一個Hb四聚體典型結合幾個BPG？",
      "一個，位於中央空腔，穩定T、提高P50；不是四個heme各結合一個。"
    ],
    [
      "用因果鏈說明HbF親和力較高。",
      "γ鏈差異→BPG結合較弱→T狀態較少受穩定→O₂親和力較高。不是胎兒多了heme位點。"
    ],
    [
      "Hb7.5、SaO₂0.98、PaO₂100，CaO₂近似多少？",
      "1.34×7.5×0.98+0.003×100≈10.15 mL/dL。氧分壓正常仍可能因Hb不足而攜氧量低。"
    ],
    [
      "CO除了占位還有哪個重要影響？",
      "提高剩餘位點的氧親和力，讓卸氧更困難。PaO₂只反映溶解氧，不能用正常值排除有效輸氧障礙。"
    ],
    [
      "OxyHb是否就是Fe³⁺的MetHb？",
      "否。功能分類中oxyHb仍為Fe²⁺氧合態；MetHb為Fe³⁺，該heme無法正常可逆攜氧。氧合與氧化不同。"
    ],
    [
      "HbS的Glu→Val為何增加聚合？",
      "表面親水帶負電位置變成疏水斑塊，去氧時可與其他分子的互補表面作用。不是增加雙硫鍵。"
    ],
    [
      "HbS與β-thalassemia的核心異常有何不同？",
      "HbS是特定序列置換改變性質；β-thalassemia主要是β鏈合成不足與鏈量失衡，可由不同轉錄、剪接或轉譯相關變異造成。"
    ]
  ],
  "readingIntro": "先分清測量值與heme配位，再理解T/R和曲線調節，最後用含氧量算例、CO與HbS檢查是否能把結構連到功能。",
  "figure": "<div class=\"relearn-bridge\"><p>讀法：結構或模型 → 分子作用 → 可觀察結果 → 關閉正文後自己推一次。</p></div>",
  "references": "<p>Harper’s Illustrated Biochemistry, 31st ed., Chapter 6（pp.47–55）。正文依使用者教材重組並補充推導；歷屆題取自網站既有題庫，解析為自行撰寫。模型數字為教學用途，臨床治療現況不以舊版課本作唯一依據。</p><ul><li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://pdb101.rcsb.org/motm/41\">RCSB PDB：Hemoglobin</a></li><li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://pdb101.rcsb.org/motm/257\">RCSB PDB：Fetal hemoglobin</a></li></ul>",
  "exams": {
    "bankCount": 1022,
    "yearMin": 96,
    "yearMax": 115,
    "groups": [
      {
        "id": "group-0",
        "title": "配位、構形與協同性",
        "topic": "heme",
        "summary": "先分近端/遠端His，再理解T/R與位點間互動。",
        "questions": [
          {
            "number": 26,
            "text": "26.當氧分子與血紅素(hemoglobin)結合時,此時血基質(heme)中Fe2+上的兩個開放配位鍵(open coordination bonds)與\n下列何組物質結合? \n \nA.一水分子與一胺基酸的側鏈 \nB.一氧分子與一胺基酸的側鏈 \nC.一氧分子與一水分子 \nD.兩個氧分子 \n",
            "regions": [
              {
                "page": 3,
                "rect": [
                  30.0,
                  388.72,
                  570.0,
                  471.41
                ]
              }
            ],
            "id": "105-2-2-26",
            "year": 105,
            "session": 2,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/105/2/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=105100&c=301&s=66&q=1&verify=step1-20261013-105100-301-66-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=105100&y=2016",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/105/2/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=105100&c=301&s=66&q=1&verify=step1-20261013-105100-301-66-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "B"
            ],
            "point": "Heme配位",
            "analysis": "四個位置由卟啉氮占據，另外為近端His側鏈及O₂，故選一氧分子與一胺基酸側鏈。",
            "trap": "每個heme結合一個O₂分子。"
          },
          {
            "number": 74,
            "text": "74.氧氣和肌紅蛋白(myoglobin)結合時,蛋白質上的何種胺基酸會和此氧分子形成氫鍵,使氧分子結合更為穩\n定?\n \nA.serine\nB.histidine\nC.proline\nD.tyrosine\n",
            "regions": [
              {
                "page": 11,
                "rect": [
                  30.0,
                  515.64,
                  569.96,
                  641.27
                ]
              }
            ],
            "id": "110-2-1-74",
            "year": 110,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/110/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=110101&c=301&s=11&q=1&verify=step1-20261013-110101-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=110101&y=2021",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/110/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=110101&c=301&s=11&q=1&verify=step1-20261013-110101-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "B"
            ],
            "point": "遠端His",
            "analysis": "遠端His可與結合的氧形成氫鍵，穩定氧結合；近端His則直接配位鐵。",
            "trap": "相同胺基酸、不同位置，功能要分開。"
          },
          {
            "number": 35,
            "text": "35 \n血紅蛋白(Hemoglobin)其構形由T 轉變成R 型是由於結合了下列那些物質所引起? \nA氧氣(O2) \n \nB三價鐵(Fe3+) \nC次單元之結合(subunit association) \nD次單元之解離(subunit dissociation) \n",
            "regions": [
              {
                "page": 3,
                "rect": [
                  30.0,
                  487.86,
                  570.0,
                  531.36
                ]
              }
            ],
            "id": "98-1-2-35",
            "year": 98,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/98/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=098020&c=103&s=c021&q=1&verify=step1-20261013-098020-103-c021-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=098020&y=2009",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/98/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=098020&c=103&s=c021&q=1&verify=step1-20261013-098020-103-c021-M",
            "corrected": true,
            "answerVersion": "M",
            "point": "T到R轉換",
            "analysis": "O₂結合使Hb平衡偏向高親和力R狀態；不是靠變成Fe³⁺或將四聚體拆散。",
            "trap": "氧合不等於鐵氧化。"
          },
          {
            "number": 75,
            "text": "75.配體(Ligand)與蛋白質之同向異位性作用(homotropic allosteric interaction)的定義為何?\n \nA.一分子的配體與蛋白質上的結合位點(binding site)結合後,會影響第二個相同的配體分子結合到同一位點\n上\nB.一分子的配體與蛋白質上的結合位點(binding site)結合後,會影響該蛋白質其他配體結合位點與配體的結\n合能力\nC.二個不同的配體能與同一個蛋白質結合位點(binding site)結合\nD.配體與蛋白質結合位點(binding site)結合後,不會造成該蛋白質其他部分的結構變化(conformational\nchange)\n",
            "regions": [
              {
                "page": 11,
                "rect": [
                  30.0,
                  483.86,
                  569.96,
                  649.4
                ]
              }
            ],
            "id": "109-2-1-75",
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
            "point": "同向異位性",
            "analysis": "相同種類配體在一位點結合，影響其他位點的結合能力，符合homotropic。",
            "trap": "不是兩個配體占同一位點。"
          }
        ]
      },
      {
        "id": "group-1",
        "title": "BPG與胎兒Hb",
        "topic": "bpg",
        "summary": "由結合位置與穩定狀態推導親和力。",
        "questions": [
          {
            "number": 30,
            "text": "30.在紅血球中,下列那一種物質可直接調控血紅素(hemoglobin)中氧分子的釋放? \n \nA.Dihydroorotate \nB.2,3-bisphosphoglycerate \nC.Fructose-1,6-bisphosphate \nD.Cytochrome oxidase \n \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  276.89,
                  570.0,
                  346.85
                ]
              }
            ],
            "id": "104-2-2-30",
            "year": 104,
            "session": 2,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/104/2/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=104090&c=301&s=66&q=1&verify=step1-20261013-104090-301-66-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=104090&y=2015",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/104/2/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=104090&c=301&s=66&q=1&verify=step1-20261013-104090-301-66-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "B"
            ],
            "point": "BPG調節釋氧",
            "analysis": "2,3-BPG結合去氧Hb中央空腔、穩定T，降低氧親和力而促進釋放。",
            "trap": "勿把fructose-1,6-bisphosphate當作相同調節物。"
          },
          {
            "number": 76,
            "text": "76.當血紅蛋白(hemoglobin)與2,3-bisphosphoglycerate(2,3-BPG)結合時,會更易於形成下列何種四級結\n構? \n \nA.R 狀態(R state) \nB.T 狀態(T state) \nC.A 形態(A form) \nD.Z 形態(Z form) \n",
            "regions": [
              {
                "page": 15,
                "rect": [
                  30.0,
                  33.76,
                  570.32,
                  183.78
                ]
              }
            ],
            "id": "114-2-1-76",
            "year": 114,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/114/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=114090&c=301&s=0101&q=1&verify=step1-20261013-114090-301-0101-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=114090&y=2025",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/114/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=114090&c=301&s=0101&q=1&verify=step1-20261013-114090-301-0101-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "B"
            ],
            "point": "T狀態穩定",
            "analysis": "BPG對T構形的中央空腔結合較有利，故促進T而非R。",
            "trap": "BPG增加→T增加→P50增加。"
          },
          {
            "number": 74,
            "text": "74.母體血液中的氧可以輸送給胎兒,是因為胎兒的血紅蛋白(hemoglobin)對氧氣的結合力比母體強,造成此差\n異之原因為何? \nA.胎兒心跳速率高於母體 \nB.胎兒和母體使用不同的血紅蛋白 \nC.胎兒體內含氧量與母體不同 \nD.胎兒體內產生較多的血紅蛋白 \n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  189.55,
                  570.0,
                  339.55
                ]
              }
            ],
            "id": "112-2-1-74",
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
            "point": "胎兒與成人Hb",
            "analysis": "HbF為α₂γ₂，與HbA的α₂β₂不同，BPG結合較弱而氧親和力較高。",
            "trap": "不是因為胎兒心跳較快或heme數目更多。"
          }
        ]
      },
      {
        "id": "group-2",
        "title": "CO占位與卸氧",
        "topic": "co",
        "summary": "CO同時降低可用位點及阻礙剩餘氧的釋放。",
        "questions": [
          {
            "number": 30,
            "text": "30 \n25 歲病患因頭痛、昏眩、噁心來到急診,經檢查後懷疑可能是一氧化碳中毒。下列有關一氧化碳對\n血紅蛋白(hemoglobin)所產生的效應,何者敘述正確? \nA它會增加血液酸度,導致氧合血紅蛋白(oxyhemoglobin)沈澱 \nB它會改變血紅蛋白結合的鐵離子的氧化態 \nC它會將肌球蛋白(myoglobin)直接轉變成碳氧血紅蛋白(carboxyhemoglobin) \nD它會與氧分子競爭,導致氧合血紅蛋白(oxyhemoglobin)減少 \n",
            "regions": [
              {
                "page": 3,
                "rect": [
                  30.0,
                  256.89,
                  570.22,
                  337.89
                ]
              }
            ],
            "id": "101-1-2-30",
            "year": 101,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/101/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=101030&c=101&s=0102&q=1&verify=step1-20261013-101030-101-0102-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=101030&y=2012",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/101/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=101030&c=101&s=0102&q=1&verify=step1-20261013-101030-101-0102-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "D"
            ],
            "point": "CO占位",
            "analysis": "CO與O₂競爭heme Fe²⁺配位位置，減少有效氧合位點；不需先使鐵變Fe³⁺。原題將myoglobin譯為肌球蛋白，應讀作肌紅蛋白。",
            "trap": "分清COHb、MetHb與myoglobin。"
          },
          {
            "number": 28,
            "text": "28 \n25 歲病患因昏迷被送來急診,檢查發現血中碳氧血紅蛋白(carboxyhemoglobin)占總血紅蛋白的40%。\n相較於氧合血紅蛋白(oxyhemoglobin),下列何者可能是碳氧血紅蛋白不能有效輸送氧分子至一般\n組織的主要原因? \nA於一般組織的低氧狀態下,結合一個一氧化碳時,碳氧血紅蛋白結合氧分子的能力過高 \nB於一般組織的低氧狀態下,結合一個一氧化碳時,碳氧血紅蛋白結合氧分子的能力過低 \nC於肺泡組織的高氧狀態下,結合一個一氧化碳時,碳氧血紅蛋白結合氧分子的能力不變 \nD於肺泡組織的高氧狀態下,結合一個一氧化碳時,碳氧血紅蛋白結合氧分子的能力過低 \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  345.68,
                  570.22,
                  476.59
                ]
              }
            ],
            "id": "102-1-2-28",
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
            "point": "CO與卸氧",
            "analysis": "CO結合後剩餘氧位點親和力升高，使組織端釋氧更困難；另有總可用位點減少的效應。",
            "trap": "左移不代表總供氧一定改善。"
          }
        ]
      },
      {
        "id": "group-3",
        "title": "HbS的結構異常",
        "topic": "variants",
        "summary": "分清序列性質改變與鏈量不足。",
        "questions": [
          {
            "number": 74,
            "text": "74.血紅素S(Hemoglobin S)是由於其中的胺基酸Glu被置換成Val,致使血紅素S有聚集(aggregation)的現象,\n其原因為何?\n \nA.血紅素S間形成共價鍵(covalent bond)\nB.血紅素S間形成雙硫鍵(disulfide bond)\nC.血紅素S間的疏水性交互作用(hydrophobic interactions)增加\nD.血紅素S間的離子交互作用(ionic interactions)增加\n",
            "regions": [
              {
                "page": 11,
                "rect": [
                  30.0,
                  359.71,
                  569.96,
                  483.86
                ]
              }
            ],
            "id": "109-2-1-74",
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
            "point": "HbS聚合",
            "analysis": "Glu變Val造成表面疏水斑塊，去氧時促進分子間疏水接觸與聚合，非新增共價或雙硫鍵。",
            "trap": "回到側鏈性質，而非只背突變名稱。"
          },
          {
            "number": 75,
            "text": "75.關於鐮形血球貧血症(sickle-cell disease)的敘述,下列何者正確?\n \nA.血紅素的β血球蛋白(β globin)基因點突變造成\nB.患者體內缺少β血球蛋白造成(由γ血球蛋白取代)\nC.血紅素缺少α血球蛋白造成\nD.鐮形血球貧血症致死率高,在嬰兒期就會死亡\n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  290.24,
                  569.96,
                  418.83
                ]
              }
            ],
            "id": "111-2-1-75",
            "year": 111,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/111/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=111100&c=301&s=11&q=1&verify=step1-20261013-111100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=111100&y=2022",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/111/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=111100&c=301&s=11&q=1&verify=step1-20261013-111100-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "A"
            ],
            "point": "HbS與合成缺陷",
            "analysis": "鐮形血球病典型由β-globin點突變造成；缺乏某鏈的量較接近thalassemia概念。",
            "trap": "質的改變與量的不足分開。"
          }
        ]
      },
      {
        "id": "group-4",
        "title": "酸鹼調節",
        "topic": "bohr",
        "summary": "Bohr效應的定義不能泛指所有曲線位移。",
        "questions": [
          {
            "number": 76,
            "text": "76.根據波爾效應(Bohr effect),人類的血紅蛋白(hemoglobin)對氧的結合力會受到下列何項因素而發生改\n變? \n \nA.血液酸鹼度  \nB.體溫  \nC.大氣中的含氧量  \nD.心跳速度 \n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  612.78,
                  570.22,
                  762.78
                ]
              }
            ],
            "id": "115-2-1-76",
            "year": 115,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/115/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=115090&c=301&s=0101&q=1&verify=step1-20261013-115090-301-0101-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=115090&y=2026",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/115/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=115090&c=301&s=0101&q=1&verify=step1-20261013-115090-301-0101-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "A"
            ],
            "point": "Bohr效應",
            "analysis": "Bohr效應核心為血液酸鹼度等H⁺/CO₂因素影響氧親和力。溫度亦可移動曲線，但不是此定義的最佳答案。",
            "trap": "不要把任何右移都叫Bohr。"
          }
        ]
      }
    ],
    "note": "本頁為主題精選，不是完整歷年頻率統計。題幹譯名或文字擷取有歧義時，解析另加註並以原卷及英文術語核對。"
  }
});
