/* Chapter content compiled from docs/biochemistry/01-water-ph-buffers.md. */
const biochemistryChapters = [
  {
    "id": "water-ph-buffers",
    "number": "01",
    "title": "學習地圖、水、酸鹼與緩衝系統",
    "summary": "從水與分子作用開始，逐步讀懂 pH、pKa、分子電荷、緩衝計算與 bicarbonate。完整詳解、算例與 15 題自編練習。",
    "sources": "Harper’s Illustrated Biochemistry, 31st ed., Chapters 1–2, pp. 1–13；生理酸鹼延伸參考 Harrison’s, 21st ed., Chapter 55。",
    "sections": [
      {
        "id": "map",
        "title": "先知道整個生物化學在讀什麼",
        "html": "<h3 id=\"生化不是只有代謝路徑\">1.1 生化不是只有代謝路徑</h3>\n<p>生物化學其實一直在回答四個問題：身體由什麼組成？如何獲得與使用能量？如何保存及使用遺傳資訊？又如何調節這些過程？</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較表，可水平捲動\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>主軸</th>\n<th>主要內容</th>\n<th>讀懂後可以回答什麼</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>分子結構與功能</td>\n<td>胺基酸、蛋白質、酵素、醣類、脂質、核酸</td>\n<td>為什麼換一個胺基酸可能改變蛋白質功能？</td>\n</tr>\n<tr class=\"even\">\n<td>能量與代謝</td>\n<td>ATP、醣解、TCA、電子傳遞鏈、脂質與胺基酸代謝</td>\n<td>飽餐與飢餓時，肝臟為什麼走不同路徑？</td>\n</tr>\n<tr class=\"odd\">\n<td>遺傳資訊</td>\n<td>複製、修復、轉錄、轉譯、基因表現調控</td>\n<td>DNA 有突變後，蛋白質會如何改變？</td>\n</tr>\n<tr class=\"even\">\n<td>生理與疾病整合</td>\n<td>荷爾蒙訊息、營養、維生素、先天代謝異常</td>\n<td>缺一個酵素為什麼會同時造成累積與缺乏？</td>\n</tr>\n</tbody>\n</table></div>\n<p>你之後看到任何一條代謝路徑，都可以先問六件事：</p>\n<ol type=\"1\">\n<li><strong>目的</strong>：它要製造能量、儲存能量，還是製造原料？</li>\n<li><strong>位置</strong>：發生在哪個器官、哪個細胞區室？</li>\n<li><strong>原料與產物</strong>：碳、氮、電子最後去了哪裡？</li>\n<li><strong>關鍵步驟</strong>：哪一步不可逆？哪些酵素負責主要調控？</li>\n<li><strong>生理情境</strong>：吃飽、飢餓、運動時，哪個方向被促進？</li>\n<li><strong>故障後果</strong>：上游累積什麼、下游少什麼、旁路增加什麼？</li>\n</ol>\n<p>這套問法比只背「A 變 B，再變 C」更能處理題目改寫。</p>\n<h3 id=\"為什麼第一章先讀水與酸鹼\">1.2 為什麼第一章先讀水與酸鹼？</h3>\n<p>蛋白質能不能折成正確形狀、酵素能不能接住受質、DNA 為什麼帶負電，都與分子如何和水互動、如何取得或失去 H⁺ 有關。</p>\n<p>例如一個酵素的活性中心需要帶負電的官能基才能催化。若環境變酸，該官能基接回 H⁺、失去負電，催化能力便可能下降。這時酵素不一定已經整個變性；光是局部電荷改變，就足以改變功能。</p>\n<p><strong>本章真正要建立的是：環境 pH → 質子化狀態 → 電荷與分子互動 → 結構及功能。</strong></p>\n"
      },
      {
        "id": "water",
        "title": "水為什麼是適合生命的溶劑？",
        "html": "<h3 id=\"水是極性分子但不是帶淨電荷的離子\">2.1 水是極性分子，但不是帶淨電荷的離子</h3>\n<p>氧的電負度比氫高，因此 O–H 共價鍵中的電子較偏向氧。氧端呈部分負電（δ−），氫端呈部分正電（δ+）。水分子又是彎曲形，兩個 O–H 鍵的偶極無法互相抵消，所以整個分子有偶極。</p>\n<p>要分清楚：</p>\n<ul>\n<li><strong>部分電荷</strong>：電子分布不均，例如水分子的氧端。</li>\n<li><strong>形式電荷／離子電荷</strong>：例如 Na⁺、Cl⁻，是判讀帶電基團時使用的電荷。</li>\n<li>水整個分子仍是電中性；「有極性」不等於「帶淨電荷」。</li>\n</ul>\n<h3 id=\"水如何溶解鹽類\">2.2 水如何溶解鹽類？</h3>\n<p>NaCl 進入水中後，水分子的氧端傾向朝向 Na⁺，氫端傾向朝向 Cl⁻，形成水合層（hydration shell）。水的高介電常數也會降低離子之間的靜電作用，使分離的離子較能穩定存在。</p>\n<p>但不能反過來說「所有帶電物質都一定高度可溶」。實際溶解度仍受晶格能、整體分子結構、溫度等因素影響。這裡要掌握的是：帶電與極性基團通常比較能與水產生有利互動。</p>\n<h3 id=\"氫鍵先辨認-donor-與-acceptor\">2.3 氫鍵：先辨認 donor 與 acceptor</h3>\n<p>氫鍵涉及一個與電負度較高原子相連的氫，以及另一個具有合適孤電子對的原子。生化裡最常遇到 O 與 N。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較表，可水平捲動\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>角色</th>\n<th>判斷方式</th>\n<th>常見例子</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Hydrogen-bond donor，氫鍵供體</td>\n<td>是否有可以參與氫鍵的 O–H 或 N–H？</td>\n<td>水、羥基、肽鍵中的 N–H</td>\n</tr>\n<tr class=\"even\">\n<td>Hydrogen-bond acceptor，氫鍵受體</td>\n<td>是否有可用來接受氫鍵的孤電子對？</td>\n<td>羰基氧、水的氧</td>\n</tr>\n</tbody>\n</table></div>\n<p><strong>氫鍵供體不是指真的把 H⁺ 解離出去。</strong>那是 Brønsted 酸的定義；「形成氫鍵」與「酸鹼解離」是不同概念。</p>\n<p>另外，看到 N 或 O 不可一律判成供體和受體。例如肽鍵中的醯胺氮，孤電子對參與共振，通常不是氫鍵受體；若它帶 N–H，則可以當供體。質子化的胺基可以提供氫鍵，但一般不是受體。</p>\n<h3 id=\"單個氫鍵弱為什麼還重要\">2.4 單個氫鍵弱，為什麼還重要？</h3>\n<p>一個氫鍵通常弱於共價鍵，但一個蛋白質或核酸可以形成許多氫鍵。許多弱作用加總，便能穩定特定結構；同時又能在需要時重新排列，讓蛋白質變構、受質結合或 DNA 解鏈得以發生。</p>\n<p><strong>要分開記：單一作用的強度，和大量作用的總效果。</strong></p>\n"
      },
      {
        "id": "interactions",
        "title": "穩定生物分子的力量",
        "html": "<h3 id=\"先比較不要把所有作用都叫鍵\">3.1 先比較，不要把所有作用都叫「鍵」</h3>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較表，可水平捲動\"><table>\n<colgroup>\n<col style=\"width: 25%\" />\n<col style=\"width: 25%\" />\n<col style=\"width: 25%\" />\n<col style=\"width: 25%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>作用</th>\n<th>核心原理</th>\n<th>生化例子</th>\n<th>易錯處</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>共價鍵 Covalent bond</td>\n<td>原子共享電子</td>\n<td>肽鍵、磷酸二酯鍵、雙硫鍵</td>\n<td>雙硫鍵是共價鍵，不是氫鍵</td>\n</tr>\n<tr class=\"even\">\n<td>氫鍵 Hydrogen bond</td>\n<td>供體與受體的方向性作用</td>\n<td>蛋白質二級結構、鹼基配對</td>\n<td>水中也有氫鍵，不能只計算分子內新生氫鍵</td>\n</tr>\n<tr class=\"odd\">\n<td>靜電作用 Electrostatic interaction</td>\n<td>異性相吸、同性相斥</td>\n<td>Lys 與 Glu 形成鹽橋</td>\n<td>強弱與介質、距離、離子環境有關</td>\n</tr>\n<tr class=\"even\">\n<td>van der Waals 作用</td>\n<td>短距離的微弱分子間作用</td>\n<td>蛋白質內部緊密堆積</td>\n<td>太靠近會轉為強烈排斥</td>\n</tr>\n<tr class=\"odd\">\n<td>疏水效應 Hydrophobic effect</td>\n<td>減少非極性表面暴露於水所帶來的自由能效果</td>\n<td>蛋白質疏水核心、脂雙層</td>\n<td>不是多出一條「疏水共價鍵」</td>\n</tr>\n</tbody>\n</table></div>\n<p>非共價作用的強弱受環境影響很大，不宜背成放諸四海皆準的單一排名。</p>\n<h3 id=\"疏水效應不是油分子主動怕水\">3.2 疏水效應：不是油分子主動「怕水」</h3>\n<p>非極性表面無法像極性基團那樣與水形成有利的氫鍵。水在這些表面附近的排列與運動受到限制。當非極性區域聚集，暴露在水中的總表面積減少，部分受限制的水便回到較自由的狀態。</p>\n<p>在入門解釋中，這常以水的熵增加來理解。真正的自由能變化仍包含焓與熵，並受溫度、分子大小與表面形狀影響；不是所有疏水聚集都只能用「熵」一個字完整解釋。</p>\n<p>從這個原理可推導兩件事：</p>\n<ol type=\"1\">\n<li><strong>水溶性球狀蛋白質</strong>通常把非極性側鏈放進內部，讓較多極性或帶電側鏈接觸水。</li>\n<li><strong>膜蛋白</strong>接觸脂雙層脂肪酸尾端的區域，可以呈現疏水表面；不能套用「所有蛋白質表面都親水」。</li>\n</ol>\n<h3 id=\"兩親性分子如何形成膜\">3.3 兩親性分子如何形成膜？</h3>\n<p>兩親性（amphipathic）代表同一分子兼有親水區與疏水區。磷脂的頭部與水接觸，脂肪酸尾端相互聚集、避開水，便有形成脂雙層的傾向。</p>\n<p>同樣具有兩親性的分子，不一定都形成同一種結構。形成微胞（micelle）或雙層（bilayer），還與分子幾何形狀、尾鏈數、濃度及環境有關。</p>\n<h3 id=\"dna-不是只靠氫鍵維持雙股\">3.4 DNA 不是只靠氫鍵維持雙股</h3>\n<p>DNA 的每一條股內有共價的磷酸二酯骨架；股與股之間則有鹼基配對氫鍵、鹼基堆疊等作用。氫鍵提供配對辨識，堆疊也對穩定性有重大貢獻。</p>\n<p>因此，不能把 DNA 熔解溫度完全化約成「有幾條氫鍵」。序列、GC 含量、長度、鹽濃度等都會影響結果。</p>\n"
      },
      {
        "id": "hydrolysis",
        "title": "水也是反應物：水解、親核攻擊與酵素",
        "html": "<h3 id=\"什麼是親核試劑\">4.1 什麼是親核試劑？</h3>\n<p>親核試劑（nucleophile）提供電子對，攻擊相對缺電子的中心；親電試劑（electrophile）接受電子對。名稱的「親核」是指喜歡電子不足、帶部分正電的反應中心，不是指細胞核。</p>\n<p>水的氧具有孤電子對，因此可參與親核反應；在許多酵素機轉中，水經活性中心協助活化，或轉成反應性更高的形式。羰基中的碳因電子偏向氧而帶部分正電，是常見的親電中心。</p>\n<h3 id=\"水解與磷酸解不同\">4.2 水解與磷酸解不同</h3>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較表，可水平捲動\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>名稱</th>\n<th>參與斷鍵的物質</th>\n<th>例子</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>水解 Hydrolysis</td>\n<td>水</td>\n<td>蛋白酶水解肽鍵</td>\n</tr>\n<tr class=\"even\">\n<td>磷酸解 Phosphorolysis</td>\n<td>無機磷酸 Pi</td>\n<td>肝醣磷酸化酶釋出 glucose-1-phosphate</td>\n</tr>\n</tbody>\n</table></div>\n<p>記憶時不要只背名字。看產物也可以幫忙：肝醣磷酸解產物帶有磷酸，後面進入代謝的方式與游離葡萄糖不同。詳細能量意義留到肝醣章。</p>\n<h3 id=\"水很多為什麼蛋白質不會立刻全部水解\">4.3 水很多，為什麼蛋白質不會立刻全部水解？</h3>\n<p>「反應在熱力學上有利」不代表「反應速度快」。反應仍可能有很高的活化能障礙。</p>\n<ul>\n<li><strong>ΔG</strong>：在指定條件下，反應方向在熱力學上是否有利。</li>\n<li><strong>活化自由能障礙</strong>：與反應能不能迅速發生有關。</li>\n<li><strong>酵素</strong>：降低反應的活化能障礙，使反應更快到達平衡；不改變該反應的平衡常數或總 ΔG。</li>\n</ul>\n<p>這個區別會在酵素章再用到。先記住：酵素可以加速反應，不能憑空讓原本不利的反應變成有利；若要推動不利反應，通常需改變濃度條件或與有利反應偶聯。</p>\n"
      },
      {
        "id": "ph",
        "title": "pH：先把對數讀懂",
        "html": "<h3 id=\"h-不是真的孤零零漂在水中\">5.1 H⁺ 不是真的孤零零漂在水中</h3>\n<p>水中的質子與水分子相互作用，可用 H₃O⁺ 等水合形式描述。生化公式習慣用 H⁺ 簡寫。嚴格的 pH 定義使用氫離子的活度；一般入門與稀溶液計算常用濃度近似：</p>\n<p><strong>pH ≈ −log₁₀[H⁺]</strong></p>\n<h3 id=\"ph-是反向的對數尺度\">5.2 pH 是反向的對數尺度</h3>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較表，可水平捲動\"><table>\n<thead>\n<tr class=\"header\">\n<th>[H⁺]，mol/L</th>\n<th style=\"text-align: right;\">pH</th>\n<th style=\"text-align: right;\">相對於 pH 7 的 H⁺ 濃度</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>10⁻⁵</td>\n<td style=\"text-align: right;\">5</td>\n<td style=\"text-align: right;\">100 倍</td>\n</tr>\n<tr class=\"even\">\n<td>10⁻⁶</td>\n<td style=\"text-align: right;\">6</td>\n<td style=\"text-align: right;\">10 倍</td>\n</tr>\n<tr class=\"odd\">\n<td>10⁻⁷</td>\n<td style=\"text-align: right;\">7</td>\n<td style=\"text-align: right;\">1 倍</td>\n</tr>\n<tr class=\"even\">\n<td>10⁻⁸</td>\n<td style=\"text-align: right;\">8</td>\n<td style=\"text-align: right;\">0.1 倍</td>\n</tr>\n<tr class=\"odd\">\n<td>10⁻⁹</td>\n<td style=\"text-align: right;\">9</td>\n<td style=\"text-align: right;\">0.01 倍</td>\n</tr>\n</tbody>\n</table></div>\n<p><strong>pH 降低 1，H⁺ 增加 10 倍；pH 升高 1，H⁺ 減少為十分之一。</strong></p>\n<p>常用近似值：log 2 ≈ 0.30，log 3 ≈ 0.48，log 5 ≈ 0.70。</p>\n<p>因此 pH 降低約 0.30，代表 H⁺ 大約增加兩倍。不要把 pH 7.4 降到 7.1 看成只有「一點點」變化。</p>\n<h3 id=\"算例已知-h-濃度求-ph\">5.3 算例：已知 H⁺ 濃度求 pH</h3>\n<p>若 [H⁺] = 4 × 10⁻⁸ mol/L：</p>\n<p>pH = −log(4 × 10⁻⁸) = 8 − log 4 ≈ 8 − 0.60 = <strong>7.40</strong>。</p>\n<p>反過來，pH = 7.40 時，[H⁺] ≈ 4.0 × 10⁻⁸ mol/L = <strong>40 nmol/L</strong>。</p>\n<p>這裡的 nmol/L 是 10⁻⁹ mol/L，別把它誤讀成 mmol/L。</p>\n<h3 id=\"比較兩個-ph-的-h-濃度\">5.4 比較兩個 pH 的 H⁺ 濃度</h3>\n<p>直接使用：</p>\n<p><strong>[H⁺]₁ / [H⁺]₂ = 10^(pH₂ − pH₁)</strong></p>\n<p>例如溶液 1 的 pH = 6.8、溶液 2 的 pH = 7.4：比值 = 10^0.6 ≈ 4。溶液 1 的 H⁺ 約為溶液 2 的四倍。</p>\n<p>解完一定做方向檢查：pH 較低的一方，H⁺ 應該比較多。</p>\n<h3 id=\"水的離子積與中性\">5.5 水的離子積與「中性」</h3>\n<p>在 25°C、一般稀溶液近似下：</p>\n<p>Kw = [H⁺][OH⁻] ≈ 10⁻¹⁴</p>\n<p>pH + pOH = 14</p>\n<p>純水中 [H⁺] = [OH⁻]，因此兩者皆約 10⁻⁷ mol/L，pH 約 7。</p>\n<p>但 <strong>中性的本質是 [H⁺] = [OH⁻]，不是任何溫度下都 pH = 7</strong>。Kw 會隨溫度改變，所以在其他溫度，pH + pOH 不一定是 14。</p>\n<p>另一個延伸陷阱：極稀的強酸或強鹼，不能完全忽略水自解離。也不能把純水原有的 10⁻⁷ M H⁺ 或 OH⁻ 當成固定庫存直接相加，因為加入酸鹼後水的平衡會移動。一般題目若濃度遠大於 10⁻⁷ M，才較容易忽略這個影響。</p>\n"
      },
      {
        "id": "pka",
        "title": "酸、鹼、Ka 與 pKa",
        "html": "<h3 id=\"酸鹼以質子交換定義\">6.1 酸鹼以質子交換定義</h3>\n<ul>\n<li>Brønsted acid：質子供體，可以放出 H⁺。</li>\n<li>Brønsted base：質子受體，可以接收 H⁺。</li>\n</ul>\n<p>對一組弱酸：HA ⇌ H⁺ + A⁻。</p>\n<p>HA 是酸，A⁻ 是它的共軛鹼。兩者相差一個 H⁺。酸放出 H⁺ 後成為共軛鹼；鹼接住 H⁺ 後成為共軛酸。</p>\n<p><strong>酸不一定帶正電，鹼不一定帶負電。</strong>例如 CH₃COOH 是不帶電的酸，NH₃ 是不帶電的鹼。</p>\n<h3 id=\"強弱與濃稀是兩件事\">6.2 強弱與濃稀是兩件事</h3>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較表，可水平捲動\"><table>\n<thead>\n<tr class=\"header\">\n<th>概念</th>\n<th>在問什麼？</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>強酸／弱酸</td>\n<td>在指定溶劑中，解離或供出質子的傾向有多強？</td>\n</tr>\n<tr class=\"even\">\n<td>濃酸／稀酸</td>\n<td>每單位體積有多少酸？</td>\n</tr>\n</tbody>\n</table></div>\n<p>所以弱酸不一定比所有強酸溶液的 pH 高。實際 pH 同時受酸的強弱與濃度影響。酸性與鹼性也有相對性：較弱的酸有較強的共軛鹼，但不是每一個弱酸的共軛鹼，都可直接歸類為水中的「強鹼」。</p>\n<h3 id=\"ka-描述酸解離的平衡\">6.3 Ka 描述酸解離的平衡</h3>\n<p>Ka = [H⁺][A⁻] / [HA]</p>\n<p>Ka 大，表示較偏向解離產物，酸性較強。</p>\n<p>pKa = −log Ka，因此：</p>\n<p><strong>Ka 越大 → pKa 越小 → 酸越強。</strong></p>\n<h3 id=\"ph-與-pka-到底差在哪裡\">6.4 pH 與 pKa 到底差在哪裡？</h3>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較表，可水平捲動\"><table>\n<thead>\n<tr class=\"header\">\n<th>項目</th>\n<th>pH</th>\n<th>pKa</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>描述對象</td>\n<td>目前溶液環境</td>\n<td>特定酸性基團在指定條件下的解離特性</td>\n</tr>\n<tr class=\"even\">\n<td>問題</td>\n<td>現在環境的 H⁺ 多不多？</td>\n<td>這個基團多容易放出 H⁺？</td>\n</tr>\n<tr class=\"odd\">\n<td>改變原因</td>\n<td>加酸加鹼、緩衝組成等</td>\n<td>溫度、溶劑、局部電荷及分子微環境等</td>\n</tr>\n<tr class=\"even\">\n<td>最重要用途</td>\n<td>判斷環境酸鹼</td>\n<td>和 pH 比較，預測質子化比例</td>\n</tr>\n</tbody>\n</table></div>\n<p>把 pH 想成「環境」，pKa 想成「該基團的半解離基準」。注意 pKa 不是完全不受環境影響的永久常數；蛋白質活性中心中的同一種胺基酸側鏈，可以因微環境而有不同 pKa。</p>\n"
      },
      {
        "id": "henderson",
        "title": "Henderson–Hasselbalch equation：把公式變成直覺",
        "html": "<h3 id=\"從-ka-推導\">7.1 從 Ka 推導</h3>\n<p>由 Ka = [H⁺][A⁻]/[HA]，移項得：</p>\n<p>[H⁺] = Ka × [HA]/[A⁻]</p>\n<p>兩邊取負對數：</p>\n<p><strong>pH = pKa + log([A⁻]/[HA])</strong></p>\n<p>分子放共軛鹼，分母放酸。兩者必須是同一組共軛酸鹼對，不能任意找一個酸、一個鹼代入。</p>\n<h3 id=\"三個判斷先背熟\">7.2 三個判斷先背熟</h3>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較表，可水平捲動\"><table>\n<thead>\n<tr class=\"header\">\n<th>比較</th>\n<th style=\"text-align: right;\">共軛鹼／酸</th>\n<th>哪個形式較多？</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>pH &lt; pKa</td>\n<td style=\"text-align: right;\">&lt; 1</td>\n<td>質子化形式</td>\n</tr>\n<tr class=\"even\">\n<td>pH = pKa</td>\n<td style=\"text-align: right;\">= 1</td>\n<td>各一半</td>\n</tr>\n<tr class=\"odd\">\n<td>pH &gt; pKa</td>\n<td style=\"text-align: right;\">&gt; 1</td>\n<td>去質子化形式</td>\n</tr>\n</tbody>\n</table></div>\n<p>記法：<strong>環境偏酸，抓 H；環境偏鹼，放 H。</strong>這是相對於該基團 pKa 的比較，不是只拿 pH 7 當界線。</p>\n<h3 id=\"差一個-ph-單位就是十倍比例\">7.3 差一個 pH 單位，就是十倍比例</h3>\n<p>[A⁻]/[HA] = 10^(pH − pKa)</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較表，可水平捲動\"><table>\n<thead>\n<tr class=\"header\">\n<th style=\"text-align: right;\">pH − pKa</th>\n<th style=\"text-align: right;\">A⁻：HA</th>\n<th style=\"text-align: right;\">A⁻ 所占比例</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td style=\"text-align: right;\">−2</td>\n<td style=\"text-align: right;\">1：100</td>\n<td style=\"text-align: right;\">約 0.99%</td>\n</tr>\n<tr class=\"even\">\n<td style=\"text-align: right;\">−1</td>\n<td style=\"text-align: right;\">1：10</td>\n<td style=\"text-align: right;\">約 9.1%</td>\n</tr>\n<tr class=\"odd\">\n<td style=\"text-align: right;\">0</td>\n<td style=\"text-align: right;\">1：1</td>\n<td style=\"text-align: right;\">50%</td>\n</tr>\n<tr class=\"even\">\n<td style=\"text-align: right;\">+1</td>\n<td style=\"text-align: right;\">10：1</td>\n<td style=\"text-align: right;\">約 90.9%</td>\n</tr>\n<tr class=\"odd\">\n<td style=\"text-align: right;\">+2</td>\n<td style=\"text-align: right;\">100：1</td>\n<td style=\"text-align: right;\">約 99.0%</td>\n</tr>\n</tbody>\n</table></div>\n<p>注意：「10：1」的總份數是 11，不是 10。因此去質子化比例是 10/11，不是 10/10。</p>\n<h3 id=\"分率公式\">7.4 分率公式</h3>\n<p>若只有 HA 與 A⁻ 這兩個主要形式：</p>\n<p>去質子化分率 = [A⁻]/([HA]+[A⁻]) = <strong>1/[1+10^(pKa−pH)]</strong>。</p>\n<p>質子化分率 = [HA]/([HA]+[A⁻]) = <strong>1/[1+10^(pH−pKa)]</strong>。</p>\n<p>不想背兩條也可以：先算 A⁻：HA，再除以總份數。理解比多背一條公式更可靠。</p>\n<h3 id=\"算例-a由比例求-ph\">7.5 算例 A：由比例求 pH</h3>\n<p>某緩衝對 pKa = 6.8，[A⁻] = 40 mM、[HA] = 10 mM。</p>\n<p>pH = 6.8 + log(40/10) = 6.8 + log 4 ≈ <strong>7.4</strong>。</p>\n<p>方向檢查：鹼比酸多，所以 pH 應高於 pKa。</p>\n<h3 id=\"算例-b由-ph-求質子化比例\">7.6 算例 B：由 pH 求質子化比例</h3>\n<p>某基團 pKa = 6.0，環境 pH = 7.0。</p>\n<p>去質子化：質子化 = 10^(7−6) = 10：1。</p>\n<p>質子化分率 = 1/11 ≈ <strong>9.1%</strong>；去質子化分率 ≈ <strong>90.9%</strong>。</p>\n<p>這只告訴你「帶不帶那顆 H⁺」，還沒有直接告訴你分子一定帶正電或負電。必須再看基團原本是哪一種。</p>\n"
      },
      {
        "id": "charge",
        "title": "把 pH 和 pKa 轉成分子電荷",
        "html": "<h3 id=\"羧基從中性變成負電\">8.1 羧基：從中性變成負電</h3>\n<p>R–COOH ⇌ R–COO⁻ + H⁺</p>\n<ul>\n<li>pH 低於 pKa：以 COOH 為主，這個基團主要為中性。</li>\n<li>pH 高於 pKa：以 COO⁻ 為主，這個基團主要帶負電。</li>\n</ul>\n<h3 id=\"胺基從正電變成中性\">8.2 胺基：從正電變成中性</h3>\n<p>R–NH₃⁺ ⇌ R–NH₂ + H⁺</p>\n<ul>\n<li>pH 低於 pKa：以 NH₃⁺ 為主，這個基團主要帶正電。</li>\n<li>pH 高於 pKa：以 NH₂ 為主，這個基團主要為中性。</li>\n</ul>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較表，可水平捲動\"><table>\n<thead>\n<tr class=\"header\">\n<th>基團</th>\n<th>質子化形式</th>\n<th>去質子化形式</th>\n<th>失去一個 H⁺ 後</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>羧基</td>\n<td>COOH：0</td>\n<td>COO⁻：−1</td>\n<td>0 → −1</td>\n</tr>\n<tr class=\"even\">\n<td>胺基</td>\n<td>NH₃⁺：+1</td>\n<td>NH₂：0</td>\n<td>+1 → 0</td>\n</tr>\n</tbody>\n</table></div>\n<p><strong>「去質子化就帶負電」是錯的。正確說法是：每失去一個 H⁺，電荷減少一個正電單位。</strong></p>\n<h3 id=\"兩性離子-zwitterion\">8.3 兩性離子 Zwitterion</h3>\n<p>一個分子可以同時帶正電和負電，總和卻為零。例如簡化的 glycine 在某段 pH 範圍以 NH₃⁺–CH₂–COO⁻ 為主。</p>\n<p>它的淨電荷為零，不代表「沒有電荷」；仍具有分離的正負電中心，能與水強烈互動。</p>\n<p>等電點（pI）則是分子平均淨電荷為零時的 pH。<strong>pI 是整個分子的淨電荷概念；pKa 是一個解離步驟的概念。</strong>如何求酸性與鹼性胺基酸的 pI，下一章再完整處理。</p>\n<h3 id=\"為什麼-histidine-常出現在酵素活性中心\">8.4 為什麼 histidine 常出現在酵素活性中心？</h3>\n<p>Histidine 的 imidazole 側鏈 pKa 常以約 6 作為入門參考，因此在接近生理條件的範圍內，可以依局部環境參與接受或提供質子的反應。蛋白質中的實際 pKa 會偏移。</p>\n<p>重點不是「它在 pH 7.4 一定一半帶電」，而是其質子化狀態較容易受到生理附近的環境調節，適合參與酸鹼催化。</p>\n"
      },
      {
        "id": "buffers",
        "title": "緩衝液如何抵抗 pH 改變？",
        "html": "<h3 id=\"緩衝液需要兩種可互相轉換的形式\">9.1 緩衝液需要兩種可互相轉換的形式</h3>\n<p>典型緩衝系統由弱酸 HA 與其共軛鹼 A⁻ 組成。</p>\n<ul>\n<li>加入少量酸：A⁻ + H⁺ → HA。共軛鹼接住 H⁺。</li>\n<li>加入少量鹼：HA + OH⁻ → A⁻ + H₂O。弱酸提供 H⁺ 中和 OH⁻。</li>\n</ul>\n<p>這樣可以讓自由 H⁺ 的變化較小，但 <strong>pH 仍然會改變</strong>。緩衝的意思是抵抗變化，不是保證完全固定。</p>\n<h3 id=\"為什麼-ph-接近-pka-時效果好\">9.2 為什麼 pH 接近 pKa 時效果好？</h3>\n<p>在 pH = pKa 時，HA 與 A⁻ 等量。兩邊都有足夠儲備，可以應對加入酸或加入鹼。若只有大量 A⁻、幾乎沒有 HA，抗酸尚有餘裕，抗鹼就很差。</p>\n<p>在其他條件相同、總緩衝濃度固定時，單一弱酸緩衝對的緩衝能力在 pH 接近 pKa 處最大。實用範圍常抓 <strong>pKa ± 1</strong>，也就是酸鹼比例約 10：1 到 1：10 之間。</p>\n<p>這不是跨過 ±1 就突然完全失效，而是離 pKa 越遠，通常越缺少其中一種可用形式。</p>\n<h3 id=\"ph-相同不代表緩衝能力相同\">9.3 pH 相同，不代表緩衝能力相同</h3>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較表，可水平捲動\"><table>\n<thead>\n<tr class=\"header\">\n<th>溶液</th>\n<th style=\"text-align: right;\">HA</th>\n<th style=\"text-align: right;\">A⁻</th>\n<th style=\"text-align: right;\">A⁻/HA</th>\n<th>pH</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>甲</td>\n<td style=\"text-align: right;\">1 mM</td>\n<td style=\"text-align: right;\">1 mM</td>\n<td style=\"text-align: right;\">1</td>\n<td>pKa</td>\n</tr>\n<tr class=\"even\">\n<td>乙</td>\n<td style=\"text-align: right;\">100 mM</td>\n<td style=\"text-align: right;\">100 mM</td>\n<td style=\"text-align: right;\">1</td>\n<td>pKa</td>\n</tr>\n</tbody>\n</table></div>\n<p>兩者的比例相同，因此在理想近似下 pH 相同。但相同體積下，乙有更多酸與鹼的儲備，可以承受更多加入的強酸或強鹼。</p>\n<p><strong>pH 主要看比例；緩衝容量還要看總量與總濃度。</strong></p>\n<h3 id=\"稀釋時會發生什麼\">9.4 稀釋時會發生什麼？</h3>\n<p>把 HA 與 A⁻ 同比例稀釋，兩者比值不變，所以理想近似下 pH 變化小；但每單位體積中的緩衝物質變少，緩衝容量下降。極度稀釋時，水自解離與其他非理想效應不可忽略，因此不能無條件說 pH 完全不變。</p>\n"
      },
      {
        "id": "calculations",
        "title": "緩衝計算：一定先算反應，再代公式",
        "html": "<h3 id=\"標準流程\">10.1 標準流程</h3>\n<ol type=\"1\">\n<li>辨認 HA 與 A⁻，寫出共軛酸鹼對。</li>\n<li>若加入強酸或強鹼，先換算成莫耳數或 mmol。</li>\n<li>先用中和反應更新 HA、A⁻ 的量。</li>\n<li>確認兩種形式都還存在，且沒有過量強酸或強鹼主導。</li>\n<li>用更新後的 A⁻/HA 代入 Henderson–Hasselbalch equation。</li>\n<li>用「加酸應下降、加鹼應上升」檢查結果。</li>\n</ol>\n<p>當 HA 與 A⁻ 在同一最終體積中，濃度比等於莫耳數比；因此可直接用 mmol 相除。不要把初始濃度比誤當成反應後比例。</p>\n<h3 id=\"加強酸算例\">10.2 加強酸算例</h3>\n<p>一杯緩衝液中 HA = 10 mmol、A⁻ = 10 mmol，pKa = 6.8。加入 2 mmol HCl。</p>\n<p>強酸的 H⁺ 與 A⁻ 反應：A⁻ + H⁺ → HA。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較表，可水平捲動\"><table>\n<thead>\n<tr class=\"header\">\n<th>物質</th>\n<th style=\"text-align: right;\">反應前</th>\n<th style=\"text-align: right;\">變化</th>\n<th style=\"text-align: right;\">反應後</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>A⁻</td>\n<td style=\"text-align: right;\">10 mmol</td>\n<td style=\"text-align: right;\">−2</td>\n<td style=\"text-align: right;\">8 mmol</td>\n</tr>\n<tr class=\"even\">\n<td>HA</td>\n<td style=\"text-align: right;\">10 mmol</td>\n<td style=\"text-align: right;\">+2</td>\n<td style=\"text-align: right;\">12 mmol</td>\n</tr>\n</tbody>\n</table></div>\n<p>pH = 6.8 + log(8/12) ≈ 6.8 − 0.176 = <strong>6.62</strong>。</p>\n<p>錯誤算法是直接把 2 mmol H⁺ 當成最終自由 H⁺；大部分加入的 H⁺ 已被 A⁻ 接住，不能這樣計算。</p>\n<h3 id=\"加強鹼算例\">10.3 加強鹼算例</h3>\n<p>從同樣的原始緩衝液重新開始，加入 2 mmol NaOH。</p>\n<p>HA + OH⁻ → A⁻ + H₂O。</p>\n<p>反應後 HA = 8 mmol、A⁻ = 12 mmol。</p>\n<p>pH = 6.8 + log(12/8) ≈ <strong>6.98</strong>。</p>\n<p>這不是接續上一題再加鹼，而是兩個獨立算例。</p>\n<h3 id=\"緩衝被用完怎麼辦\">10.4 緩衝被用完怎麼辦？</h3>\n<p>若原本只有 1 mmol A⁻，卻加入 3 mmol 強酸，A⁻ 先被消耗完，尚有過量強酸。此時不能繼續把 A⁻ = 0 硬塞進對數公式。應依過量強酸、最終體積與必要的平衡處理求 pH。</p>\n<p>在恰好把某一種形式消耗完的點，剩下的弱酸或弱鹼仍會解離，也不是「H⁺ 或 OH⁻ 一定為零」。這類題目需要回到平衡式。</p>\n<h3 id=\"滴定曲線的三個位置\">10.5 滴定曲線的三個位置</h3>\n<p>以弱酸 HA 被強鹼滴定為例：</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較表，可水平捲動\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>位置</th>\n<th>溶液主要狀況</th>\n<th>判讀</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>起始</td>\n<td>主要為 HA</td>\n<td>用弱酸平衡判斷 pH</td>\n</tr>\n<tr class=\"even\">\n<td>半當量點</td>\n<td>HA 與 A⁻ 等量</td>\n<td>pH = pKa，緩衝良好</td>\n</tr>\n<tr class=\"odd\">\n<td>當量點</td>\n<td>加入的鹼恰好中和原始酸</td>\n<td>主要剩 A⁻，可水解呈鹼性；不一定 pH 7</td>\n</tr>\n</tbody>\n</table></div>\n<p>最常混淆的是把「半當量點」與「當量點」當成同一件事。<strong>pH = pKa 對應半當量點，不是一般所說的當量點。</strong></p>\n"
      },
      {
        "id": "bicarbonate",
        "title": "人體的緩衝系統：從本章延伸到生理學",
        "html": "<p>這一節是生化與生理的銜接，補充依據見參考資料 2。這裡先建立原理，不展開完整血氣分析與混合型酸鹼異常診斷。</p>\n<h3 id=\"不同緩衝系統各有位置\">11.1 不同緩衝系統各有位置</h3>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較表，可水平捲動\"><table>\n<thead>\n<tr class=\"header\">\n<th>系統</th>\n<th>重要位置與角色</th>\n<th>核心概念</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Bicarbonate / CO₂</td>\n<td>細胞外液的重要緩衝系統</td>\n<td>可與肺、腎的調節連結</td>\n</tr>\n<tr class=\"even\">\n<td>Phosphate</td>\n<td>細胞內及腎臟尿液緩衝</td>\n<td>H₂PO₄⁻ 與 HPO₄²⁻ 互換</td>\n</tr>\n<tr class=\"odd\">\n<td>蛋白質</td>\n<td>細胞內、血漿等</td>\n<td>可解離側鏈參與緩衝</td>\n</tr>\n<tr class=\"even\">\n<td>Hemoglobin</td>\n<td>紅血球內</td>\n<td>與 H⁺、CO₂ 運輸及氧合狀態相關</td>\n</tr>\n</tbody>\n</table></div>\n<p>不能只用「哪個 pKa 最接近 7.4」判斷哪個系統對全身最重要；還要看濃度、分布與是否能持續調節。</p>\n<h3 id=\"bicarbonate-系統的反應\">11.2 Bicarbonate 系統的反應</h3>\n<p>CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻。</p>\n<p>Carbonic anhydrase（碳酸酐酶）加速 CO₂ 與水轉換的反應；它改變反應速度，不改變平衡常數。</p>\n<p>在血液的常用近似式中：</p>\n<p><strong>pH = 6.1 + log{[HCO₃⁻] / (0.03 × PaCO₂)}</strong></p>\n<p>[HCO₃⁻] 使用 mmol/L，PaCO₂ 使用 mmHg；0.03 是在這套條件與單位下用來估算溶解 CO₂ 的係數。6.1 是此生理系統常用的表觀 pK 值，不宜和不同條件、不同定義的單純碳酸解離常數混用。[2]</p>\n<h3 id=\"正常比例為什麼約-201\">11.3 正常比例為什麼約 20：1？</h3>\n<p>用典型數值 HCO₃⁻ = 24 mmol/L、PaCO₂ = 40 mmHg：</p>\n<p>分母 = 0.03 × 40 = 1.2 mmol/L。</p>\n<p>比例 = 24/1.2 = 20。</p>\n<p>pH = 6.1 + log 20 ≈ 6.1 + 1.30 = <strong>7.40</strong>。</p>\n<p>此處的 20：1，是 bicarbonate 與公式中溶解 CO₂ 項的比值，<strong>不是 24：40，也不是把所有形式的 CO₂ 都加起來當分母</strong>。</p>\n<h3 id=\"pka-沒那麼接近-7.4為什麼仍然有效\">11.4 pKa 沒那麼接近 7.4，為什麼仍然有效？</h3>\n<p>單純密閉試管中的緩衝對，與人體的開放調節系統不同。人體可以經肺排出 CO₂，也能經腎臟調整 H⁺ 排泄與 bicarbonate 的保存、補充，因此不只仰賴原本固定的一小份酸鹼存量。[2]</p>\n<p>這不推翻「固定總濃度時，pH 接近 pKa 緩衝較佳」；兩者討論的系統條件不同。</p>\n<h3 id=\"先只看方向避免過早背一堆代償公式\">11.5 先只看方向，避免過早背一堆代償公式</h3>\n<p>在其餘條件先固定的思考模型下：</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較表，可水平捲動\"><table>\n<thead>\n<tr class=\"header\">\n<th>改變</th>\n<th>比值變化</th>\n<th>pH 方向</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>HCO₃⁻ 降低</td>\n<td>分子減少</td>\n<td>降低</td>\n</tr>\n<tr class=\"even\">\n<td>HCO₃⁻ 增加</td>\n<td>分子增加</td>\n<td>升高</td>\n</tr>\n<tr class=\"odd\">\n<td>PaCO₂ 升高</td>\n<td>分母增加</td>\n<td>降低</td>\n</tr>\n<tr class=\"even\">\n<td>PaCO₂ 降低</td>\n<td>分母減少</td>\n<td>升高</td>\n</tr>\n</tbody>\n</table></div>\n<p>真實病人的另一項數值可能因緩衝與代償而一起改變，因此這張表是推理方向，不是只看一個數字就能完成診斷。[2]</p>\n"
      },
      {
        "id": "connections",
        "title": "與後面章節的連結",
        "html": "<h3 id=\"酵素的-ph活性關係\">12.1 酵素的 pH–活性關係</h3>\n<p>酵素活性中心常需要特定的質子化組合：某基團要保有 H⁺ 才能當酸，另一個則要失去 H⁺ 才能當鹼或親核基團。因此改變 pH 可能改變催化效率，形成特定的 pH–活性曲線。</p>\n<p>曲線有時近似鐘形，但不是所有酵素都必須是同一種對稱鐘形。極端 pH 也可能破壞整體結構，這與單純活性中心電荷改變是兩種相關但不同的機制。</p>\n<h3 id=\"蛋白質分離技術\">12.2 蛋白質分離技術</h3>\n<p>蛋白質的帶電狀態會隨 pH 改變，因此可影響電泳、離子交換層析及等電聚焦。先掌握概念：相對於 pI，pH 較低時蛋白質平均較偏正電；pH 較高時平均較偏負電。詳細技術下一章再比較。</p>\n<h3 id=\"膜通透性的基本直覺\">12.3 膜通透性的基本直覺</h3>\n<p>對相同分子的不同酸鹼形式而言，較不帶電的形式通常較容易穿過脂質雙層的疏水核心。但真實跨膜行為還取決於脂溶性、分子大小與轉運蛋白，不能只看電荷就判定所有藥物的吸收位置。</p>\n<h3 id=\"多質子分子如何處理\">12.4 多質子分子如何處理？</h3>\n<p>像胺基酸或磷酸，有多個可失去的質子，每個解離步驟各有 pKa。不能把第一步的 pKa 用到所有位置。解題時先寫出題目關心的那一對酸鹼形式，再代公式。</p>\n"
      },
      {
        "id": "pitfalls",
        "title": "易錯觀念總整理",
        "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"比較表，可水平捲動\"><table>\n<thead>\n<tr class=\"header\">\n<th>錯誤想法</th>\n<th>正確修正</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>有極性就帶淨電荷</td>\n<td>水有偶極但整體電中性</td>\n</tr>\n<tr class=\"even\">\n<td>所有 N 都是氫鍵受體</td>\n<td>要看孤電子對是否可用、是否質子化及是否參與共振</td>\n</tr>\n<tr class=\"odd\">\n<td>疏水作用是一種共價鍵</td>\n<td>它是與溶劑相關的自由能效果</td>\n</tr>\n<tr class=\"even\">\n<td>酵素讓 ΔG 變負</td>\n<td>酵素降低活化能障礙，不改變反應總 ΔG</td>\n</tr>\n<tr class=\"odd\">\n<td>pH 差 1 是 H⁺ 差 1 倍</td>\n<td>實際差 10 倍</td>\n</tr>\n<tr class=\"even\">\n<td>pKa 越高酸越強</td>\n<td>pKa 越低酸越強</td>\n</tr>\n<tr class=\"odd\">\n<td>pH = pKa 表示中性</td>\n<td>只代表該酸鹼對等量，不一定 pH 7</td>\n</tr>\n<tr class=\"even\">\n<td>去質子化一定變負電</td>\n<td>胺基可由正電變中性</td>\n</tr>\n<tr class=\"odd\">\n<td>淨電荷零就是沒有電荷</td>\n<td>兩性離子可同時帶正負電</td>\n</tr>\n<tr class=\"even\">\n<td>所有蛋白質表面都親水</td>\n<td>膜蛋白的膜接觸面可疏水</td>\n</tr>\n<tr class=\"odd\">\n<td>緩衝液 pH 不會變</td>\n<td>只是減少變化，而且有容量限制</td>\n</tr>\n<tr class=\"even\">\n<td>同 pH 就有同緩衝容量</td>\n<td>還要看總濃度與酸鹼比例</td>\n</tr>\n<tr class=\"odd\">\n<td>強酸加進去直接代原始比例</td>\n<td>要先做中和反應、更新莫耳數</td>\n</tr>\n<tr class=\"even\">\n<td>弱酸滴定當量點一定 pH 7</td>\n<td>剩下的共軛鹼可使溶液呈鹼性</td>\n</tr>\n<tr class=\"odd\">\n<td>Bicarbonate 的正常比值是 24/40</td>\n<td>要先把 PaCO₂ 乘上 0.03</td>\n</tr>\n</tbody>\n</table></div>\n"
      },
      {
        "id": "practice",
        "title": "自編練習：先遮住解析再作答",
        "html": "<p>以下不是歷屆考古題。題目採短答與計算，目的是檢查推理，不只辨認選項。</p>\n<h3 id=\"題-1倍數判讀\">題 1｜倍數判讀</h3>\n<p>兩個溶液的 pH 分別為 7.4 與 7.1。後者的 H⁺ 濃度約為前者的幾倍？</p>\n<p><strong>答案與解析：</strong>10^(7.4−7.1) = 10^0.3 ≈ 2 倍。pH 降低，H⁺ 增加；答案若小於 1，方向就錯了。</p>\n<h3 id=\"題-2由濃度算-ph\">題 2｜由濃度算 pH</h3>\n<p>已知 [H⁺] = 2 × 10⁻⁶ mol/L，求 pH。</p>\n<p><strong>答案與解析：</strong>pH = 6 − log 2 ≈ 5.70。先處理 10 的次方，再減去前面係數的對數。</p>\n<h3 id=\"題-3酸強度比較\">題 3｜酸強度比較</h3>\n<p>酸甲的 pKa = 3，酸乙的 pKa = 5。在相同條件下，誰的 Ka 較大？相差幾倍？</p>\n<p><strong>答案與解析：</strong>甲較大。Ka 甲 = 10⁻³、Ka 乙 = 10⁻⁵，因此相差 100 倍。這代表解離常數的差，不可直接說所有同濃度溶液的 H⁺ 必定差 100 倍。</p>\n<h3 id=\"題-4半解離\">題 4｜半解離</h3>\n<p>某酸 pKa = 5.0。何時 HA 與 A⁻ 等量？這是否表示溶液中性？</p>\n<p><strong>答案與解析：</strong>pH = 5.0 時等量。不是中性；pH = pKa 只說明該酸鹼對比例，不表示 [H⁺] = [OH⁻]。</p>\n<h3 id=\"題-5基團電荷\">題 5｜基團電荷</h3>\n<p>某胺基的 pKa = 9.0，環境 pH = 7.0。主要形式是 NH₃⁺ 還是 NH₂？各約占多少？</p>\n<p><strong>答案與解析：</strong>NH₂/NH₃⁺ = 10^(7−9) = 0.01。NH₃⁺ 約占 100/101 ≈ 99%；NH₂ 約 1%。這個基團主要帶正電。</p>\n<h3 id=\"題-6羧基電荷\">題 6｜羧基電荷</h3>\n<p>某羧基 pKa = 4.0，環境 pH = 7.0。去質子化比例約多少？</p>\n<p><strong>答案與解析：</strong>COO⁻/COOH = 10³ = 1000。去質子化分率 = 1000/1001 ≈ 99.9%，主要帶負電。</p>\n<h3 id=\"題-7緩衝液選擇\">題 7｜緩衝液選擇</h3>\n<p>要在 pH 7.0 附近製備緩衝液，可選 pKa 4.8、6.9 或 9.2 的系統。若其他條件相當，優先選哪個？</p>\n<p><strong>答案與解析：</strong>6.9，因最接近目標 pH。實際實驗還需考量是否干擾酵素、溫度效應等；本題只比較酸鹼緩衝適配。</p>\n<h3 id=\"題-8緩衝容量\">題 8｜緩衝容量</h3>\n<p>兩杯等體積溶液，各自的 HA 與 A⁻ 比例都為 1：1，但總濃度分別是 2 mM 與 200 mM。誰的 pH 較高？誰較能抵抗加入同量強酸？</p>\n<p><strong>答案與解析：</strong>若是同一酸鹼對，在理想近似下兩者 pH 相同；200 mM 的緩衝儲備較多。不要把「濃度高」直接翻譯成「pH 高」。</p>\n<h3 id=\"題-9加強酸計算\">題 9｜加強酸計算</h3>\n<p>某緩衝液含 HA 15 mmol、A⁻ 25 mmol，pKa = 6.0。加入 5 mmol 強酸後，pH 約多少？</p>\n<p><strong>答案與解析：</strong>A⁻ 減為 20 mmol，HA 增為 20 mmol，比例為 1，所以 pH = 6.0。若直接用原始 25/15，會忽略中和反應。</p>\n<h3 id=\"題-10加強鹼計算\">題 10｜加強鹼計算</h3>\n<p>另一杯溶液含 HA 15 mmol、A⁻ 5 mmol，pKa = 6.0。加入 5 mmol 強鹼後，pH 約多少？</p>\n<p><strong>答案與解析：</strong>HA 減為 10 mmol，A⁻ 增為 10 mmol，pH = 6.0。加入 OH⁻ 後，HA 減少而 A⁻ 增加，方向與加酸相反。</p>\n<h3 id=\"題-11蛋白質與膜\">題 11｜蛋白質與膜</h3>\n<p>有人說「蛋白質所有疏水側鏈都必須埋在內部，否則不穩定」。如何修正？</p>\n<p><strong>答案與解析：</strong>對許多水溶性球狀蛋白質是有用趨勢，但不是絕對。膜蛋白與脂質尾端接觸的表面可富含疏水側鏈，蛋白質結合界面也可能含疏水區域。穩定性需考慮周圍環境。</p>\n<h3 id=\"題-12酵素與平衡\">題 12｜酵素與平衡</h3>\n<p>某水解反應熱力學上有利，但沒有酵素時速度很慢。加入酵素後，平衡常數會增加嗎？</p>\n<p><strong>答案與解析：</strong>不會。酵素降低反應活化能障礙，讓系統更快接近平衡；不改變該反應的平衡常數或總自由能差。</p>\n<h3 id=\"題-13滴定曲線\">題 13｜滴定曲線</h3>\n<p>以強鹼滴定單質子弱酸，哪個位置有 pH = pKa？當量點一定中性嗎？</p>\n<p><strong>答案與解析：</strong>半當量點。當量點主要剩共軛鹼，可能呈鹼性，因此不一定中性。半當量與當量一定要分開。</p>\n<h3 id=\"題-14bicarbonate-方向\">題 14｜Bicarbonate 方向</h3>\n<p>只在數學模型中假設 HCO₃⁻ 固定為 24 mmol/L，將 PaCO₂ 由 40 改成 80 mmHg，pH 約改變多少？</p>\n<p><strong>答案與解析：</strong>分母加倍，比值由 20 降為 10，pH 由約 7.40 降為 7.10，下降約 0.30。這是固定 HCO₃⁻ 的算式練習；真實身體可能出現緩衝與代償，不可當成所有急性或慢性呼吸性酸中毒的實際變化。[2]</p>\n<h3 id=\"題-15整合推理\">題 15｜整合推理</h3>\n<p>某酵素需要一個羧基保持 COO⁻ 才有活性，該基團 pKa = 6.0。在不考慮其他因素的簡化模型中，pH 從 7.0 降至 5.0，活性形式比例如何改變？</p>\n<p><strong>答案與解析：</strong>pH 7.0 時 COO⁻ 約占 90.9%；pH 5.0 時約占 9.1%。若活性只取決於這個因素，活性形式比例明顯降低。但不能直接宣稱真實酵素速率必定精確下降十倍，因受質結合及其他基團也可能受 pH 影響。</p>\n"
      },
      {
        "id": "review",
        "title": "複習時要能自己說出的內容",
        "html": "<h3 id=\"十句核心記憶\">15.1 十句核心記憶</h3>\n<ol type=\"1\">\n<li>水有偶極，但整體不帶淨電荷。</li>\n<li>氫鍵供體與酸鹼反應中的質子供體，不能當成完全相同的概念。</li>\n<li>疏水效應與水及非極性表面的自由能關係有關，不是一條疏水共價鍵。</li>\n<li>酵素降低活化能障礙，不改變平衡常數。</li>\n<li>pH 降低 1，H⁺ 增加 10 倍；降低約 0.3，增加約兩倍。</li>\n<li>pKa 越小，酸越強。</li>\n<li>pH 低於 pKa 時偏質子化；高於 pKa 時偏去質子化。</li>\n<li>pH = pKa 代表酸鹼對等量，不等於電中性，也不等於 pH 7。</li>\n<li>pH 看比例，緩衝容量還要看總濃度；加入強酸鹼先中和再算比例。</li>\n<li>Bicarbonate 公式分母是 0.03 × PaCO₂，不能直接用 PaCO₂。</li>\n</ol>\n<h3 id=\"不看書的主動回想\">15.2 不看書的主動回想</h3>\n<p>讀完後把教材關起來，用自己的話回答：</p>\n<ul>\n<li>如果 pH 從 6 變成 8，H⁺ 變化幾倍？</li>\n<li>為什麼 NH₃⁺ 去質子化不是變成負電？</li>\n<li>為什麼同 pH 的兩杯緩衝液可以有不同容量？</li>\n<li>為什麼水很多，蛋白質還是可以穩定存在？</li>\n<li>為什麼膜蛋白是「蛋白質表面通常親水」的例外？</li>\n<li>為什麼人體 bicarbonate 系統不能只當成一杯密閉緩衝液？</li>\n</ul>\n<p>若說不出來，回去讀對應節，不必把整章從頭機械重讀。隔天重算第 5、9、10、14 題；數日後再把數字換掉重算，檢查是否真正理解。</p>\n<h3 id=\"本章完成標準\">15.3 本章完成標準</h3>\n<p>能不用查表判斷質子化方向、正確寫出兩種基團電荷、獨立完成加入酸鹼後的緩衝計算，並說明緩衝容量與 pH 的差別，就具備進入胺基酸章的基礎。這個標準是學習檢核，不能直接換算成國考正確率。</p>\n"
      }
    ],
    "questions": [
      {
        "title": "題 1｜倍數判讀",
        "prompt": "<p>兩個溶液的 pH 分別為 7.4 與 7.1。後者的 H⁺ 濃度約為前者的幾倍？</p>\n",
        "answer": "<p>10^(7.4−7.1) = 10^0.3 ≈ 2 倍。pH 降低，H⁺ 增加；答案若小於 1，方向就錯了。</p>\n"
      },
      {
        "title": "題 2｜由濃度算 pH",
        "prompt": "<p>已知 [H⁺] = 2 × 10⁻⁶ mol/L，求 pH。</p>\n",
        "answer": "<p>pH = 6 − log 2 ≈ 5.70。先處理 10 的次方，再減去前面係數的對數。</p>\n"
      },
      {
        "title": "題 3｜酸強度比較",
        "prompt": "<p>酸甲的 pKa = 3，酸乙的 pKa = 5。在相同條件下，誰的 Ka 較大？相差幾倍？</p>\n",
        "answer": "<p>甲較大。Ka 甲 = 10⁻³、Ka 乙 = 10⁻⁵，因此相差 100 倍。這代表解離常數的差，不可直接說所有同濃度溶液的 H⁺ 必定差 100 倍。</p>\n"
      },
      {
        "title": "題 4｜半解離",
        "prompt": "<p>某酸 pKa = 5.0。何時 HA 與 A⁻ 等量？這是否表示溶液中性？</p>\n",
        "answer": "<p>pH = 5.0 時等量。不是中性；pH = pKa 只說明該酸鹼對比例，不表示 [H⁺] = [OH⁻]。</p>\n"
      },
      {
        "title": "題 5｜基團電荷",
        "prompt": "<p>某胺基的 pKa = 9.0，環境 pH = 7.0。主要形式是 NH₃⁺ 還是 NH₂？各約占多少？</p>\n",
        "answer": "<p>NH₂/NH₃⁺ = 10^(7−9) = 0.01。NH₃⁺ 約占 100/101 ≈ 99%；NH₂ 約 1%。這個基團主要帶正電。</p>\n"
      },
      {
        "title": "題 6｜羧基電荷",
        "prompt": "<p>某羧基 pKa = 4.0，環境 pH = 7.0。去質子化比例約多少？</p>\n",
        "answer": "<p>COO⁻/COOH = 10³ = 1000。去質子化分率 = 1000/1001 ≈ 99.9%，主要帶負電。</p>\n"
      },
      {
        "title": "題 7｜緩衝液選擇",
        "prompt": "<p>要在 pH 7.0 附近製備緩衝液，可選 pKa 4.8、6.9 或 9.2 的系統。若其他條件相當，優先選哪個？</p>\n",
        "answer": "<p>6.9，因最接近目標 pH。實際實驗還需考量是否干擾酵素、溫度效應等；本題只比較酸鹼緩衝適配。</p>\n"
      },
      {
        "title": "題 8｜緩衝容量",
        "prompt": "<p>兩杯等體積溶液，各自的 HA 與 A⁻ 比例都為 1：1，但總濃度分別是 2 mM 與 200 mM。誰的 pH 較高？誰較能抵抗加入同量強酸？</p>\n",
        "answer": "<p>若是同一酸鹼對，在理想近似下兩者 pH 相同；200 mM 的緩衝儲備較多。不要把「濃度高」直接翻譯成「pH 高」。</p>\n"
      },
      {
        "title": "題 9｜加強酸計算",
        "prompt": "<p>某緩衝液含 HA 15 mmol、A⁻ 25 mmol，pKa = 6.0。加入 5 mmol 強酸後，pH 約多少？</p>\n",
        "answer": "<p>A⁻ 減為 20 mmol，HA 增為 20 mmol，比例為 1，所以 pH = 6.0。若直接用原始 25/15，會忽略中和反應。</p>\n"
      },
      {
        "title": "題 10｜加強鹼計算",
        "prompt": "<p>另一杯溶液含 HA 15 mmol、A⁻ 5 mmol，pKa = 6.0。加入 5 mmol 強鹼後，pH 約多少？</p>\n",
        "answer": "<p>HA 減為 10 mmol，A⁻ 增為 10 mmol，pH = 6.0。加入 OH⁻ 後，HA 減少而 A⁻ 增加，方向與加酸相反。</p>\n"
      },
      {
        "title": "題 11｜蛋白質與膜",
        "prompt": "<p>有人說「蛋白質所有疏水側鏈都必須埋在內部，否則不穩定」。如何修正？</p>\n",
        "answer": "<p>對許多水溶性球狀蛋白質是有用趨勢，但不是絕對。膜蛋白與脂質尾端接觸的表面可富含疏水側鏈，蛋白質結合界面也可能含疏水區域。穩定性需考慮周圍環境。</p>\n"
      },
      {
        "title": "題 12｜酵素與平衡",
        "prompt": "<p>某水解反應熱力學上有利，但沒有酵素時速度很慢。加入酵素後，平衡常數會增加嗎？</p>\n",
        "answer": "<p>不會。酵素降低反應活化能障礙，讓系統更快接近平衡；不改變該反應的平衡常數或總自由能差。</p>\n"
      },
      {
        "title": "題 13｜滴定曲線",
        "prompt": "<p>以強鹼滴定單質子弱酸，哪個位置有 pH = pKa？當量點一定中性嗎？</p>\n",
        "answer": "<p>半當量點。當量點主要剩共軛鹼，可能呈鹼性，因此不一定中性。半當量與當量一定要分開。</p>\n"
      },
      {
        "title": "題 14｜Bicarbonate 方向",
        "prompt": "<p>只在數學模型中假設 HCO₃⁻ 固定為 24 mmol/L，將 PaCO₂ 由 40 改成 80 mmHg，pH 約改變多少？</p>\n",
        "answer": "<p>分母加倍，比值由 20 降為 10，pH 由約 7.40 降為 7.10，下降約 0.30。這是固定 HCO₃⁻ 的算式練習；真實身體可能出現緩衝與代償，不可當成所有急性或慢性呼吸性酸中毒的實際變化。[2]</p>\n"
      },
      {
        "title": "題 15｜整合推理",
        "prompt": "<p>某酵素需要一個羧基保持 COO⁻ 才有活性，該基團 pKa = 6.0。在不考慮其他因素的簡化模型中，pH 從 7.0 降至 5.0，活性形式比例如何改變？</p>\n",
        "answer": "<p>pH 7.0 時 COO⁻ 約占 90.9%；pH 5.0 時約占 9.1%。若活性只取決於這個因素，活性形式比例明顯降低。但不能直接宣稱真實酵素速率必定精確下降十倍，因受質結合及其他基團也可能受 pH 影響。</p>\n"
      }
    ],
    "references": "<ol type=\"1\">\n<li>Rodwell VW, Bender DA, Botham KM, Kennelly PJ, Weil PA. Harper’s Illustrated Biochemistry. 31st ed. McGraw-Hill Education; 2018. Chapters 1–2, pp. 1–13. 主要用於水的性質、分子互動、酸鹼、Henderson–Hasselbalch equation 與緩衝觀念；為使用者提供的 PDF。教學順序、例題與比較表由本教材重新組織，延伸概念並非逐一對應原書句子。</li>\n<li>DuBose TD Jr. Acidosis and Alkalosis. In: Harrison’s Principles of Internal Medicine. 21st ed. McGraw Hill. Chapter 55, Normal Acid-Base Homeostasis. 查閱日期：2026-11-06。用於第 11 節及相關計算題的生理酸鹼補充，僅採用可取得的章節內容。https://accesspharmacy.mhmedical.com/content.aspx?bookid=3095&amp;sectionid=262791135</li>\n</ol>\n<p>本章尚未完成臺灣歷屆考題逐題對照，因此不標示未經核實的「必考」「歷屆出現次數」或年份。後續題庫對照時再補入可追溯來源。</p>\n"
  }
];
