/* Chapter 02: original teaching notes and traceable exam selections. */
biochemistryChapters.push({
  "id": "amino-acids-peptides",
  "number": "02",
  "title": "胺基酸與肽：從側鏈結構到電荷判讀",
  "summary": "從二十種胺基酸與立體化學重新學起，逐步推導電荷、等電點與肽鍵，再串起電泳、穀胱甘肽和代謝前驅物。",
  "sources": "Harper’s Illustrated Biochemistry, 31st ed., Chapter 3（pp. 14–22）；相關章節作跨章銜接。",
  "references": "<p>依使用者提供之 Harper’s 第 31 版 Chapter 3 重組教學；部分定量及代謝內容為補充。自由胺基酸 pKa 為近似，實際作題優先使用題幹數值。成人九種必需的範圍可參考 <a href=\"https://medlineplus.gov/ency/article/002222.htm\" target=\"_blank\" rel=\"noopener noreferrer\">MedlinePlus：Amino acids</a>。歷屆原題與官方答案連結見考點分析頁，解析為本教材撰寫。</p>",
  "sections": [
    {
      "id": "backbone",
      "title": "先建立骨架：自由胺基酸與蛋白質殘基",
      "html": "<p>胺基酸不是一串只能死背的名字。先看共同骨架，再看不同的側鏈，就能推理它會接近水、藏進蛋白質內部、參與催化，還是提供可修飾的位置。一般\nα-胺基酸的 α 碳連接胺基、羧基、氫及 R 側鏈；α\n的意思是緊鄰羧基碳的那個碳。Gly 的 R 是氫，所以 α 碳連著兩個氫；Pro\n的側鏈則繞回氮，形成環狀結構。</p>\n<p>在接近生理 pH 的水溶液中，不能只畫 NH₂–CHR–COOH\n就開始算電荷。常見主體形式是\nNH₃⁺–CHR–COO⁻，稱為兩性離子（zwitterion）。「同時有正負電」不等於一定淨電荷為零：還要把側鏈的電荷加進去。例如自由\nLys 在此範圍通常另外帶一個側鏈正電，淨電荷約 +1。</p>\n<p>胺基酸能接受也能釋出質子，因此是兩性電解質（ampholyte）。兩性電解質描述酸鹼行為；兩性離子描述同一分子內同時存在正負電中心。兩個名詞相關，但不能互相替代所有語境。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"先建立骨架：自由胺基酸與蛋白質殘基比較表\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>讀題對象</th>\n<th>可計算的主鏈基團</th>\n<th>最容易犯的錯</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>自由胺基酸</td>\n<td>一個 α 胺基、一個 α 羧基，加上可解離側鏈</td>\n<td>只看側鏈，漏掉兩個主鏈基團</td>\n</tr>\n<tr class=\"even\">\n<td>一般線性肽的內部殘基</td>\n<td>主鏈已參與肽鍵，不再當成自由胺基、羧基計算</td>\n<td>每個殘基都加 +1 與 −1</td>\n</tr>\n<tr class=\"odd\">\n<td>未修飾線性肽整條鏈</td>\n<td>N 端、C 端及所有可解離側鏈</td>\n<td>漏掉端點，或把醯胺當成胺</td>\n</tr>\n<tr class=\"even\">\n<td>端點封閉、環肽或有修飾的肽</td>\n<td>依實際結構逐項判定</td>\n<td>硬套一個 N 端加一個 C 端</td>\n</tr>\n</tbody>\n</table></div>\n<p>「殘基 residue」是胺基酸已成為肽的一部分的稱呼。序列中寫\nLys，表示具有 Lys 側鏈的殘基，不表示鏈內藏著一個完整自由 Lys 分子。</p>\n"
    },
    {
      "id": "stereochemistry",
      "title": "立體化學：L、D 與 R、S 是不同命名系統",
      "html": "<p>人類核糖體合成蛋白質使用的標準手性胺基酸是 L 型；Gly 沒有手性，不分 L\n或 D。L/D 描述相對構型，並不是旋光方向的正負號，因此不能把 L\n直接翻成一定左旋。R/S 則依 CIP\n優先序判定絕對構型，兩套命名不能畫上等號。</p>\n<p>標準 L 胺基酸的 α 碳多為 S；L-Cys 的 α 碳是\nR。原因是含硫側鏈改變優先序，並不是 Cys 被換成 D 型。Ile 與 Thr 除了 α\n碳，側鏈也各有一個手性中心，所以只寫「L」並未逐一描述所有手性中心。</p>\n<p>Gly 的特殊性來自側鏈很小，容許其他殘基難以採取的主鏈構形；Pro\n的特殊性來自環狀側鏈限制旋轉。兩者常出現在轉彎位置，但理由相反：一個自由度大，一個幾何限制強。不要把「都可能出現在轉彎」背成「都柔軟」。</p>\n<p>D 型胺基酸並非自然界不存在：細菌細胞壁可有 D-Ala、D-Glu，人類也有\nD-Ser\n等生理分子。國考若問「一般核糖體合成蛋白質的胺基酸」，與「自然界是否存在\nD 型」是不同問題。</p>\n"
    },
    {
      "id": "twenty",
      "title": "二十種胺基酸：名字、代碼與側鏈一起記",
      "html": "<p>分類是學習工具，不是彼此完全排斥的盒子。例如 Tyr\n同時有芳香環與極性羥基；Trp 有大疏水環系，也有可提供氫鍵的 NH；His\n的環具有芳香性，但教學上常放在鹼性群。題目要的是官能基行為時，回到結構比爭論分類名稱更可靠。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"二十種胺基酸：名字、代碼與側鏈一起記比較表\"><table>\n<thead>\n<tr class=\"header\">\n<th>中文／英文</th>\n<th>三字／單字</th>\n<th>側鏈辨認</th>\n<th>首先聯想到的性質</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>甘胺酸 Glycine</td>\n<td>Gly／G</td>\n<td>H</td>\n<td>最小、無手性、構形自由度大</td>\n</tr>\n<tr class=\"even\">\n<td>丙胺酸 Alanine</td>\n<td>Ala／A</td>\n<td>CH₃</td>\n<td>小型非極性側鏈</td>\n</tr>\n<tr class=\"odd\">\n<td>纈胺酸 Valine</td>\n<td>Val／V</td>\n<td>支鏈烴</td>\n<td>BCAA、必需</td>\n</tr>\n<tr class=\"even\">\n<td>白胺酸 Leucine</td>\n<td>Leu／L</td>\n<td>支鏈烴</td>\n<td>BCAA、必需、純生酮</td>\n</tr>\n<tr class=\"odd\">\n<td>異白胺酸 Isoleucine</td>\n<td>Ile／I</td>\n<td>支鏈烴</td>\n<td>BCAA、兩個手性中心</td>\n</tr>\n<tr class=\"even\">\n<td>脯胺酸 Proline</td>\n<td>Pro／P</td>\n<td>側鏈接回主鏈氮</td>\n<td>環狀、限制主鏈構形</td>\n</tr>\n<tr class=\"odd\">\n<td>甲硫胺酸 Methionine</td>\n<td>Met／M</td>\n<td>硫醚</td>\n<td>非極性、SAM 的前驅物</td>\n</tr>\n<tr class=\"even\">\n<td>苯丙胺酸 Phenylalanine</td>\n<td>Phe／F</td>\n<td>苯環</td>\n<td>芳香、疏水、Tyr 前驅物</td>\n</tr>\n<tr class=\"odd\">\n<td>酪胺酸 Tyrosine</td>\n<td>Tyr／Y</td>\n<td>酚環</td>\n<td>芳香、可磷酸化、弱酸性 OH</td>\n</tr>\n<tr class=\"even\">\n<td>色胺酸 Tryptophan</td>\n<td>Trp／W</td>\n<td>吲哚環</td>\n<td>芳香、280 nm 吸光重要</td>\n</tr>\n<tr class=\"odd\">\n<td>絲胺酸 Serine</td>\n<td>Ser／S</td>\n<td>CH₂OH</td>\n<td>極性、可磷酸化</td>\n</tr>\n<tr class=\"even\">\n<td>蘇胺酸 Threonine</td>\n<td>Thr／T</td>\n<td>含 OH 與 CH₃</td>\n<td>極性、可磷酸化、必需</td>\n</tr>\n<tr class=\"odd\">\n<td>半胱胺酸 Cysteine</td>\n<td>Cys／C</td>\n<td>CH₂SH</td>\n<td>硫醇、雙硫鍵、親核作用</td>\n</tr>\n<tr class=\"even\">\n<td>天門冬醯胺 Asparagine</td>\n<td>Asn／N</td>\n<td>CH₂CONH₂</td>\n<td>極性醯胺，通常不帶電</td>\n</tr>\n<tr class=\"odd\">\n<td>麩醯胺酸 Glutamine</td>\n<td>Gln／Q</td>\n<td>CH₂CH₂CONH₂</td>\n<td>極性醯胺，氮運輸與供體</td>\n</tr>\n<tr class=\"even\">\n<td>天門冬胺酸 Aspartate</td>\n<td>Asp／D</td>\n<td>CH₂COO⁻</td>\n<td>生理 pH 側鏈通常 −1</td>\n</tr>\n<tr class=\"odd\">\n<td>麩胺酸 Glutamate</td>\n<td>Glu／E</td>\n<td>CH₂CH₂COO⁻</td>\n<td>生理 pH 側鏈通常 −1</td>\n</tr>\n<tr class=\"even\">\n<td>離胺酸 Lysine</td>\n<td>Lys／K</td>\n<td>長鏈末端 ε 胺基</td>\n<td>生理 pH 側鏈通常 +1</td>\n</tr>\n<tr class=\"odd\">\n<td>精胺酸 Arginine</td>\n<td>Arg／R</td>\n<td>胍基</td>\n<td>強鹼性，生理 pH 通常 +1</td>\n</tr>\n<tr class=\"even\">\n<td>組胺酸 Histidine</td>\n<td>His／H</td>\n<td>咪唑環</td>\n<td>pKa 約 6，酸鹼催化與配位</td>\n</tr>\n</tbody>\n</table></div>\n<p>先把 D/E 與 N/Q 成對記：Asp/Glu 的側鏈是羧基；Asn/Gln\n是對應的醯胺。後者雖然有氮，卻不等於 Lys\n那樣的可質子化胺基。醯胺氮的電子參與共振，使其鹼性明顯不同。</p>\n<p>單字碼最容易混淆的是 Lys K、Arg R、Asn N、Gln Q、Trp W、Tyr\nY。遇到序列\nKEDH，應直接讀成「鹼性、酸性、酸性、可滴定咪唑」，練習把字母翻成化學性質。</p>\n"
    },
    {
      "id": "interactions",
      "title": "側鏈決定互動：疏水、氫鍵、鹽橋與配位",
      "html": "<p>水溶性球狀蛋白通常把較多非極性側鏈藏在內部，讓極性及帶電側鏈接觸水；這與水對非極性表面的排列有關。不是每一個疏水殘基都必須在內部：跨膜蛋白接觸脂肪酸鏈的外表面常含疏水殘基，膜水交界則常見\nTrp、Tyr 等兼具不同互動能力的殘基。</p>\n<p>帶相反電荷的側鏈可以形成鹽橋，但互動強弱取決於距離、周圍介電環境及是否被水競爭。把一個帶電側鏈埋入疏水環境可能非常不利，除非有配對或功能需求；同樣的環境也會改變其\npKa。因此，自由胺基酸表上的數字只是蛋白質內殘基的起點。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"側鏈決定互動：疏水、氫鍵、鹽橋與配位比較表\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>結構線索</th>\n<th>可能功能</th>\n<th>不要過度推論</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Ser／Thr／Tyr 的 OH</td>\n<td>氫鍵、受調控磷酸化</td>\n<td>有 OH 不代表每個位置都會被激酶修飾</td>\n</tr>\n<tr class=\"even\">\n<td>Cys 的 SH／S⁻</td>\n<td>親核反應、金屬配位、氧化還原</td>\n<td>Met 雖含硫，沒有同樣的自由 SH</td>\n</tr>\n<tr class=\"odd\">\n<td>His 的咪唑</td>\n<td>接受或提供質子、金屬配位</td>\n<td>生理 pH 不代表全數帶正電</td>\n</tr>\n<tr class=\"even\">\n<td>Asp／Glu 的羧酸根</td>\n<td>鹽橋、金屬配位、催化</td>\n<td>負電不是永久不變，低 pH 可質子化</td>\n</tr>\n<tr class=\"odd\">\n<td>Asn／Gln 的醯胺</td>\n<td>氫鍵供受體、極性接觸</td>\n<td>不能當作帶負電的 Asp／Glu</td>\n</tr>\n</tbody>\n</table></div>\n<p>His 的 pKa\n接近一些生理或活性中心環境，因此可在酸與鹼的角色間切換。以自由側鏈 pKa 6\n為例，pH 7\n時中性形式較多，但仍有帶正電形式；酵素微環境又能改變比例。催化要問的是「哪個形式能完成這一步反應」，而不是把整種胺基酸永久貼上正電標籤。</p>\n"
    },
    {
      "id": "special",
      "title": "芳香族、硫與兩個構形特例",
      "html": "<p>Trp、Tyr、Phe 都有芳香結構，但對 280 nm 吸光的貢獻差很多：Trp\n通常最重要，Tyr 次之，Phe\n在這個波長很弱，主要吸收較偏短波長。不能將「芳香族」直接換成「280 nm\n一樣強」。Asn 沒有這類芳香發色團，相關歷屆選擇題常把它作為辨認對象。</p>\n<p>Beer–Lambert 定律 A =\nεlc：吸光值取決於莫耳吸光係數、光徑與濃度。同樣濃度的不同蛋白質，因\nTrp/Tyr 含量不同，A₂₈₀ 不一定相同；要定量需知道或估算該蛋白質的\nε，並注意混濁、核酸等干擾。肽鍵的強吸收主要位於更短的紫外區域，不是把\nA₂₈₀ 當作肽鍵總數計。</p>\n<p>兩個 Cys 的 SH 氧化後形成 Cys–S–S–Cys，稱 cystine\n形式；還原可恢復兩個硫醇。雙硫鍵是共價鍵，可連同一鏈不同位置，也可連兩條鏈。還原環境的細胞質通常不利於穩定雙硫鍵累積；分泌蛋白與細胞外蛋白較常利用它穩定結構。Met\n的硫醚可被氧化，但不是以兩個 Met 形成一般蛋白質的雙硫鍵。</p>\n<p>Gly 對膠原蛋白尤其重要：重複序列每第三個位置常為\nGly，因三股螺旋中心空間狹小，需要最小側鏈。Pro／羥脯胺酸的幾何與穩定作用則不同。不要將膠原蛋白的三股螺旋叫作一般\nα 螺旋。</p>\n"
    },
    {
      "id": "essential",
      "title": "必需與非必需：先分營養需求，再分代謝去向",
      "html": "<p>成人通常使用九種必需胺基酸分類：His、Ile、Leu、Lys、Met、Phe、Thr、Trp、Val。必需是人體合成量不足以滿足需求，必須從飲食取得，不代表其他胺基酸不重要。Arg\n在成長或特定生理狀態可屬條件性必需；一些教材將成長期需求一起討論，因此會看到不同數目的列表。讀題先辨認成人、兒童或疾病情境。</p>\n<p>BCAA 是\nVal、Leu、Ile，指支鏈結構，三者都是必需，但必需胺基酸不只三個。Tyr 可由\nPhe 生成；Cys 的硫可經 Met\n代謝提供。若前驅物不足或轉換路徑受損，原本可合成的產物便可能需要額外供給。苯丙酮尿症中\nTyr 的條件性需求就是重要例子。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"必需與非必需：先分營養需求，再分代謝去向比較表\"><table>\n<thead>\n<tr class=\"header\">\n<th>分類問題</th>\n<th>判定依據</th>\n<th>代表</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>是否必需</td>\n<td>人體合成能否滿足需求</td>\n<td>Leu、Lys 都是必需</td>\n</tr>\n<tr class=\"even\">\n<td>是否生酮</td>\n<td>碳骨架能否形成生酮產物</td>\n<td>Leu、Lys 為純生酮</td>\n</tr>\n<tr class=\"odd\">\n<td>是否生糖</td>\n<td>碳骨架能否提供淨糖新生前驅物</td>\n<td>Ala、Asp 等</td>\n</tr>\n<tr class=\"even\">\n<td>是否支鏈</td>\n<td>側鏈的化學結構</td>\n<td>Val、Leu、Ile</td>\n</tr>\n</tbody>\n</table></div>\n<p>這些分類是不同軸。Leu\n同時是非極性、支鏈、必需與純生酮，不能只背其中一個標籤。Ile 雖與 Leu\n同為 BCAA，卻兼具生糖與生酮性；Val\n為生糖性。詳細分解路徑會另章處理。</p>\n"
    },
    {
      "id": "charge",
      "title": "電荷演算法：每個官能基各算一次",
      "html": "<p>第一步列出所有可解離基團；第二步寫出各自的 pKa；第三步比較 pH 與每個\npKa；第四步把電荷加總。pH 低於 pKa\n時偏向質子化，高於時偏向去質子化。關鍵是「去掉 H⁺\n會讓電荷減少一」，不代表每個基團都變成 −1。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"電荷演算法：每個官能基各算一次比較表\"><table>\n<thead>\n<tr class=\"header\">\n<th>基團</th>\n<th>質子化形式及電荷</th>\n<th>去質子化形式及電荷</th>\n<th>常用近似 pKa</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>自由 α 羧基</td>\n<td>COOH：0</td>\n<td>COO⁻：−1</td>\n<td>約 2</td>\n</tr>\n<tr class=\"even\">\n<td>Asp／Glu 側鏈</td>\n<td>COOH：0</td>\n<td>COO⁻：−1</td>\n<td>約 4</td>\n</tr>\n<tr class=\"odd\">\n<td>His 側鏈</td>\n<td>咪唑鎓：+1</td>\n<td>咪唑：0</td>\n<td>約 6</td>\n</tr>\n<tr class=\"even\">\n<td>Cys 側鏈</td>\n<td>SH：0</td>\n<td>S⁻：−1</td>\n<td>約 8.3</td>\n</tr>\n<tr class=\"odd\">\n<td>自由 α 胺基</td>\n<td>NH₃⁺：+1</td>\n<td>NH₂：0</td>\n<td>約 9–10</td>\n</tr>\n<tr class=\"even\">\n<td>Tyr 側鏈</td>\n<td>OH：0</td>\n<td>O⁻：−1</td>\n<td>約 10.1</td>\n</tr>\n<tr class=\"odd\">\n<td>Lys 側鏈</td>\n<td>NH₃⁺：+1</td>\n<td>NH₂：0</td>\n<td>約 10.5</td>\n</tr>\n<tr class=\"even\">\n<td>Arg 側鏈</td>\n<td>質子化胍基：+1</td>\n<td>中性胍基：0</td>\n<td>約 12.5</td>\n</tr>\n</tbody>\n</table></div>\n<p>數字是學習近似，不是所有分子共用的常數。題幹提供數值時一律使用題目數值；自由\nα 胺基、肽的 N 端與蛋白質內側鏈不能直接互換 pKa。</p>\n<p>以 His 的 pKa 為 2、6、9 為例：pH 1 時羧基 0、α 胺基 +1、咪唑\n+1，主要淨電荷 +2。pH 5 時羧基 −1，其餘兩個多為 +1，主要淨電荷 +1。pH\n7.5 時羧基 −1、α 胺基 +1、咪唑多為 0，主要形式淨電荷 0。pH 11 時羧基\n−1，其餘多為 0，主要淨電荷 −1。</p>\n<p>「主要形式」用整數做題很方便，但大量分子的平均電荷可以是小數。在 pH\n接近 pKa 時，必須特別分辨題目在問哪一種。</p>\n"
    },
    {
      "id": "glycine",
      "title": "等電點第一步：用 Gly 看懂滴定，而不是背平均",
      "html": "<p>等電點 pI 是分子族群平均淨電荷為零時的\npH；不是每一個原子都不帶電，也不是所有分子都處於單一形式。Gly 的兩個 pKa\n若為 2.4、9.8，隨 pH 升高，主導形式依序由 +1 變 0 再變 −1。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"等電點第一步：用 Gly 看懂滴定，而不是背平均比較表\"><table>\n<thead>\n<tr class=\"header\">\n<th>pH 區間</th>\n<th>主導結構</th>\n<th>主要淨電荷</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>遠低於 2.4</td>\n<td>NH₃⁺–CH₂–COOH</td>\n<td>+1</td>\n</tr>\n<tr class=\"even\">\n<td>介於兩個 pKa，且離兩端夠遠</td>\n<td>NH₃⁺–CH₂–COO⁻</td>\n<td>0</td>\n</tr>\n<tr class=\"odd\">\n<td>遠高於 9.8</td>\n<td>NH₂–CH₂–COO⁻</td>\n<td>−1</td>\n</tr>\n</tbody>\n</table></div>\n<p>零電荷主導形式被兩次解離夾住，所以 pI = (2.4 + 9.8)/2 =\n6.1。平均的真正理由是找到「包住零電荷形式的兩個相鄰\npKa」，不是看到任何胺基酸就拿最小與最大平均。</p>\n<p>滴定曲線在 pKa 附近有較佳緩衝作用，因指定共軛酸鹼對比例接近一。Gly 的\npI 6.1 與兩個 pKa 都相距很遠，雖平均淨電荷為零，卻不代表最能緩衝。這是把\npI 與 pKa 分開理解的最好例子。</p>\n<p>在 pH 2.4，第一組羧基約一半解離，α 胺基幾乎全帶正電，平均電荷約\n+0.5；在 pH 9.8，胺基約一半仍帶正電，羧基幾乎全帶負電，平均約\n−0.5。這些是以其他基團接近完全質子化或去質子化作的近似。</p>\n"
    },
    {
      "id": "pi",
      "title": "酸性與鹼性側鏈：pI 的四個完整算例",
      "html": "<p><strong>Asp：pKa 2.1、3.9、9.9。</strong> 從強酸開始，α 胺基 +1，兩個\nCOOH 都是 0，總共 +1。第一個羧基解離後變 0；第二個羧基解離後變\n−1；最後胺基解離後變 −2。所以零電荷區夾在 2.1 與 3.9，pI 約 3.0。拿 2.1\n與 9.9 平均會得到 6，卻不是本題要的答案。</p>\n<p><strong>Lys：pKa 2.2、9.0、10.5。</strong> 強酸時兩個胺基各 +1，羧基\n0，淨 +2。依序解離變 +1、0、−1。零電荷區在 9.0 與 10.5，pI 約\n9.75。這裡要平均較高兩個 pKa。</p>\n<p><strong>His：pKa 2、6、9。</strong> 強酸淨 +2，依序變\n+1、0、−1，零電荷區在 6 與 9，因此 pI 7.5。歷屆題會先問 pH 5\n帶幾個電，再用同組數字問\npI；你需要同一張解離順序表，無須另背兩套技巧。</p>\n<p><strong>Cys：pKa 1.9、8.3、10.8。</strong> 強酸淨 +1；羧基解離後\n0；硫醇解離後 −1；胺基解離後 −2。因此 pI 約 (1.9 + 8.3)/2 = 5.1。Cys\n常被放在「極性不帶電」群，但其 SH\n仍可滴定，所以不能用「分類寫中性」就忽略側鏈。</p>\n<p>做題順序固定為：排序 pKa、列出強酸起始總電荷、每跨過一個 pKa\n減一、找到零電荷區，再取相鄰值平均。對複雜多肽，通常需用各基團分率求和，不能任選兩個\npKa。</p>\n"
    },
    {
      "id": "fraction",
      "title": "分率電荷：解釋為什麼 His 不是整顆都帶正電",
      "html": "<p>對單一酸性基團 HA → H⁺ + A⁻，帶負電分率為 1/[1 +\n10^(pKa−pH)]，電荷貢獻為該分率的負值。對鹼性基團 BH⁺ → H⁺ +\nB，帶正電分率為 1/[1 +\n10^(pH−pKa)]。多個基團的平均淨電荷就是全部正負貢獻相加；這是假設可各自以給定\npKa 描述的模型。</p>\n<p>His 側鏈 pKa 6，在 pH 7.4 的質子化分率為 1/(1+10^1.4)，約 0.038，即\n3.8%。因此「His 屬鹼性胺基酸」與「生理 pH\n自由側鏈主要中性」可以同時成立。Lys 側鏈 pKa 10.5，在同一 pH\n則絕大部分帶正電，不能把兩者視為相同。</p>\n<p>若只看 pH 5 的 His 咪唑，約 10/11 = 90.9% 帶 +1；另加 α\n胺基及羧基後，平均淨電荷約 +0.91，而主要分子形式為\n+1。題目問「大部分分子的帶電狀態」選\n+1；要求平均電荷且給精確數值時，才需要分率計算。</p>\n<p>pH = pKa 只表示那組酸鹼對各半。若該基團由 +1 變 0，平均是 +0.5；若由\n0 變 −1，平均是 −0.5。不能看到各半就回答零電荷。</p>\n"
    },
    {
      "id": "electrophoresis",
      "title": "電泳與溶解度：把 pI 變成實驗預測",
      "html": "<p>若 pH 高於\npI，分子相對更去質子化，平均淨電荷偏負，在一般電泳電場中朝正極（anode）移動；pH\n低於\npI，平均偏正，朝負極（cathode）移動。記法先記電荷與吸引，不要硬背一串極名而顛倒方向。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"電泳與溶解度：把 pI 變成實驗預測比較表\"><table>\n<thead>\n<tr class=\"header\">\n<th>環境</th>\n<th>平均淨電荷</th>\n<th>一般電泳方向</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>pH &lt; pI</td>\n<td>正</td>\n<td>負極 cathode</td>\n</tr>\n<tr class=\"even\">\n<td>pH = pI</td>\n<td>零</td>\n<td>無由淨電荷造成的定向電泳遷移</td>\n</tr>\n<tr class=\"odd\">\n<td>pH &gt; pI</td>\n<td>負</td>\n<td>正極 anode</td>\n</tr>\n</tbody>\n</table></div>\n<p>等電聚焦利用 pH 梯度。蛋白質偏離自身 pI 後會帶上使其往 pI\n區域移動的電荷，因此集中成帶。一般 native\n電泳的遷移還受大小、形狀等影響；SDS-PAGE 則利用 SDS\n變性與賦予近似一致的負電荷／質量比，使分離主要反映分子大小。SDS-PAGE\n不是測天然 pI，也不是保留酵素活性的工具。</p>\n<p>在 pI\n附近，蛋白質分子間的電荷排斥常降低，因而較容易聚集、溶解度常較低；但鹽濃度、溫度及表面結構仍重要，不能說所有蛋白質在\npI 都必定完全沉澱。</p>\n"
    },
    {
      "id": "peptide",
      "title": "肽鍵：共振、平面與 cis／trans",
      "html": "<p>典型肽鍵連接一個胺基酸的 α 羧基碳與下一個胺基酸的 α\n胺基氮，是醯胺鍵。氮的孤電子對可與羰基共振，使 C–N\n帶部分雙鍵性，因此該鍵旋轉受限，肽單元近似共平面。肽鏈能折疊，主要利用相鄰\nN–Cα 的 φ 角與 Cα–C 的 ψ 角變動；不是每條主鏈鍵都能任意旋轉。</p>\n<p>多數肽鍵是 trans，兩側 α 碳位於相對兩側，立體碰撞較少。X–Pro 肽鍵的\ncis 比例比一般肽鍵高，但仍不能說所有含 Pro 的肽鍵都是 cis；要辨認的是\nPro 位於該肽鍵氮端的 X–Pro。</p>\n<p>內部 Pro 的主鏈氮沒有一般醯胺 N–H\n可作氫鍵供體，加上環限制構形，容易干擾某些規則二級結構。但其羰基仍可接受氫鍵，Pro\n也能穩定特定轉角；因此「Pro\n完全不能形成氫鍵」與「不可能出現在蛋白質」都錯。</p>\n<p>肽鍵水解在熱力學上可有利，但未催化時反應很慢；蛋白酶降低活化障礙。加熱造成蛋白質變性通常先影響非共價結構，不能直接等同把所有肽鍵切斷。還原劑主要處理雙硫鍵，也不是一般肽鍵切割劑。</p>\n"
    },
    {
      "id": "counting",
      "title": "肽的方向、鍵數、質量與總電荷",
      "html": "<p>序列慣例由 N 端寫到 C 端。Ala–Gly 與 Gly–Ala\n的胺基酸組成相同，序列與端點卻不同，所以是不同分子。一般未成環、單鏈、沒有額外交聯的\nn 個殘基形成 n−1 個主鏈肽鍵；若有 k 條各自線性的鏈，總主鏈肽鍵數為\nn−k。雙硫鍵不列入肽鍵數。</p>\n<p>以自由胺基酸形式計算組成差，形成一條線性肽可形式上扣除 (n−1)\n個水分子，平均質量近似扣掉 18×(n−1) Da。但生物體內的轉譯經胺醯-tRNA\n活化與肽基轉移，並非自由胺基酸在水中自發脫水聚合。形成肽鍵當下不必直接再水解\nATP，不代表整個蛋白質合成不耗能；活化與延伸其他步驟都有能量成本。</p>\n<p><strong>算例：未修飾 Ala–Lys–Asp–Gly 在 pH 7。</strong> 列出 N 端\n+1、C 端 −1、Lys 側鏈 +1、Asp 側鏈 −1；Ala/Gly\n無此範圍可滴定側鏈，主要淨電荷約 0。中間四個 α 胺基與 α\n羧基不能各算一次，因大部分已進入肽鍵。</p>\n<p><strong>若同一肽 N 端被乙醯化：</strong> 原本自由 N\n端胺基變成醯胺，少掉約 +1，主要淨電荷約 −1。<strong>若只有 C\n端醯胺化：</strong> 少掉約 −1，主要淨電荷約\n+1。<strong>若加上一個磷酸基：</strong>\n須依其解離狀態重新計算，不能仍只數原本二十種側鏈。</p>\n"
    },
    {
      "id": "glutathione",
      "title": "功能性肽：穀胱甘肽與氧化還原循環",
      "html": "<p>Glutathione（GSH）是 Glu、Cys、Gly 組成的三肽。第一個連接點用 Glu 的\nγ 羧基，而非一般主鏈 α 羧基，因此稱 γ-glutamyl-cysteinyl-glycine；Cys 與\nGly 間為一般肽連接。辨認組成後，還要知道真正執行氧化還原的是 Cys\n的硫醇。</p>\n<p>兩個 GSH 被氧化形成一個 GSSG，其中雙硫鍵連接兩個分子的\nCys。Glutathione peroxidase 可用 GSH 還原 H₂O₂\n或其他過氧化物；glutathione reductase 再利用 NADPH 將 GSSG 還原回兩個\nGSH。不能把還原來源寫成 ATP，也不能把 peroxidase 與 reductase 對調。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"功能性肽：穀胱甘肽與氧化還原循環比較表\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>反應角色</th>\n<th>核心關係</th>\n<th>考題連結</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>清除過氧化氫</td>\n<td>2 GSH + H₂O₂ → GSSG + 2 H₂O</td>\n<td>glutathione peroxidase</td>\n</tr>\n<tr class=\"even\">\n<td>再生 GSH</td>\n<td>GSSG + NADPH + H⁺ → 2 GSH + NADP⁺</td>\n<td>glutathione reductase</td>\n</tr>\n<tr class=\"odd\">\n<td>提供 NADPH</td>\n<td>紅血球仰賴磷酸戊糖途徑的重要供應</td>\n<td>G6PD 缺乏與氧化壓力</td>\n</tr>\n<tr class=\"even\">\n<td>處理超氧陰離子</td>\n<td>superoxide dismutase 生成 H₂O₂ 等</td>\n<td>不要把 SOD 與 peroxidase 的受質混淆</td>\n</tr>\n</tbody>\n</table></div>\n<p>這條鏈可從結構一路推到臨床：Cys 的 SH 提供還原能力，GSH 用掉後需\nNADPH 再生，紅血球缺乏足夠 NADPH\n時，面對氧化壓力較易受損。後續磷酸戊糖途徑章會再解釋\nG6PD，而此處先建立分子間的因果關係。</p>\n<p>Carnosine 為 β-alanine 與 His\n組成的二肽，可參與肌肉等組織的緩衝；其中 β-alanine 不是標準 α\n胺基酸。Aspartame 則是 Asp–Phe\n的甲酯衍生物，不是三肽。短肽分類不要只靠名稱長短。</p>\n"
    },
    {
      "id": "connections",
      "title": "修飾與生合成前驅物：把側鏈接到後續章節",
      "html": "<p>蛋白質剛轉譯完成後，某些殘基可再經修飾。Ser、Thr、Tyr\n常是磷酸化位置；PKA 是 Ser/Thr kinase，不能因 Tyr 也能磷酸化就把 PKA\n當作 tyrosine kinase。膠原蛋白的 Pro/Lys 羥化與維生素 C 有關；Lys\n還可參與乙醯化、甲基化及泛素連接等不同調控。</p>\n<p>Selenocysteine 是含硒的特殊蛋白質胺基酸，經特定轉譯機制與 SECIS\n等訊號將某些 UGA 解讀為插入 Sec；一般情況 UGA\n仍是終止密碼。這不同於蛋白質形成後把普通 Cys 直接修飾成 Sec。某些\nglutathione peroxidase 與 thioredoxin reductase 含\nSec，但不要把所有同名酵素家族成員一概視為含硒。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"修飾與生合成前驅物：把側鏈接到後續章節比較表\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>前驅物</th>\n<th>應先記住的產物／角色</th>\n<th>避免混淆</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Tyr</td>\n<td>兒茶酚胺、甲狀腺素、黑色素</td>\n<td>dopamine 不是由 Trp 生成</td>\n</tr>\n<tr class=\"even\">\n<td>Trp</td>\n<td>serotonin、melatonin、可供 niacin 合成</td>\n<td>不是所有 Trp 都流向神經傳遞物</td>\n</tr>\n<tr class=\"odd\">\n<td>His</td>\n<td>histamine</td>\n<td>胺基酸與脫羧後的生物胺是不同分子</td>\n</tr>\n<tr class=\"even\">\n<td>Glu</td>\n<td>GABA 的前驅物、重要氮代謝節點</td>\n<td>Gln 是醯胺型氮運輸分子</td>\n</tr>\n<tr class=\"odd\">\n<td>Arg</td>\n<td>NO、尿素循環及肌酸合成相關</td>\n<td>不同路徑的受質與酵素不同</td>\n</tr>\n<tr class=\"even\">\n<td>Gly</td>\n<td>heme、purine、creatine、GSH 的組成來源</td>\n<td>同一胺基酸可參與多條路徑</td>\n</tr>\n<tr class=\"odd\">\n<td>Met</td>\n<td>SAM 的前驅物，連接甲基轉移</td>\n<td>SAM 提供甲基不等於 Met 直接逐次轉移</td>\n</tr>\n</tbody>\n</table></div>\n<p>這張表是後續章節的定位圖，現在先能把產物連回側鏈及前驅物。等到代謝章再補酵素、輔因子、區室與缺陷疾病，避免一開始把所有路徑擠成沒有因果的名詞清單。</p>\n"
    },
    {
      "id": "review",
      "title": "閉卷整合：遇到題目時怎麼重建答案",
      "html": "<p>第一輪只做結構辨認：看到序列能指出酸性、鹼性、芳香、含硫與特殊構形殘基。第二輪把所有電荷題都用同一流程推一次，直到能解釋為什麼\nHis 用 6 與 9 算 pI、Cys 卻用 1.9 與\n8.3。第三輪再把肽鍵、GSH、電泳與臨床連結放回來。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"閉卷整合：遇到題目時怎麼重建答案比較表\"><table>\n<colgroup>\n<col style=\"width: 50%\" />\n<col style=\"width: 50%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>錯誤直覺</th>\n<th>重建答案的方法</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>pI 代表整個分子沒有任何電荷</td>\n<td>區分局部電荷與平均淨電荷</td>\n</tr>\n<tr class=\"even\">\n<td>pH = pKa 就是 pI</td>\n<td>先問是哪一個可解離基團，再加總所有電荷</td>\n</tr>\n<tr class=\"odd\">\n<td>L 就是 S，也就是左旋</td>\n<td>L/D、R/S、旋光正負是不同描述</td>\n</tr>\n<tr class=\"even\">\n<td>有 N 的側鏈都帶正電</td>\n<td>辨認胺、醯胺、咪唑與吲哚</td>\n</tr>\n<tr class=\"odd\">\n<td>所有含硫胺基酸都做雙硫鍵</td>\n<td>需要可氧化的硫醇，Cys 與 Met 不同</td>\n</tr>\n<tr class=\"even\">\n<td>肽鍵是自由旋轉的單鍵</td>\n<td>從醯胺共振推出部分雙鍵性與平面</td>\n</tr>\n<tr class=\"odd\">\n<td>肽鍵形成不直接用 ATP，所以蛋白質合成不耗能</td>\n<td>把活化、肽基轉移與延伸步驟分開</td>\n</tr>\n<tr class=\"even\">\n<td>所有蛋白質相同濃度都同 A₂₈₀</td>\n<td>A = εlc，先看不同序列的 ε</td>\n</tr>\n</tbody>\n</table></div>\n<p>離開本章前，試著不用表格說出：二十種代碼、九種必需、三個\nBCAA、兩個純生酮、三種常見磷酸化殘基、GSH\n三種組成，以及一條肽的電荷清單。忘記時回到對應機轉，而不是把全部重新抄一遍。</p>\n"
    }
  ],
  "questions": [
    {
      "title": "01　自由 Lys 與鏈內 Lys",
      "prompt": "<p>為何自由 Lys 在 pH 7 約 +1，鏈內 Lys 殘基卻不能再算一組 α 胺基與 α 羧基？</p>",
      "answer": "<p>自由 Lys 的主鏈 +1 與 −1 抵銷，側鏈約 +1。鏈內的主鏈基團已參與肽鍵，只有其可解離側鏈列入；整條肽另算真正的 N/C 端。</p>"
    },
    {
      "title": "02　L 與 R",
      "prompt": "<p>L-Cys 可以同時是 R 構型嗎？Gly 呢？</p>",
      "answer": "<p>可以。L/D 與 R/S 是不同系統；含硫側鏈改變 CIP 優先序，L-Cys 的 α 碳為 R。Gly 有兩個 H，無手性，不標 L/D 或 R/S。</p>"
    },
    {
      "title": "03　序列辨認",
      "prompt": "<p>把 W–Y–F–N 的三字碼寫出，哪個不是芳香側鏈？</p>",
      "answer": "<p>Trp–Tyr–Phe–Asn；Asn 不是芳香族。Trp 與 Tyr 對 280 nm 較重要，Phe 在此波長很弱。</p>"
    },
    {
      "title": "04　側鏈的氮",
      "prompt": "<p>Gln 與 Lys 都含氮，為何不能都算側鏈 +1？</p>",
      "answer": "<p>Gln 是醯胺，氮孤電子對參與共振，在一般生理範圍不如 Lys 的 ε 胺基容易質子化。應辨認官能基，不只數 N。</p>"
    },
    {
      "title": "05　含硫不等於硫醇",
      "prompt": "<p>兩個 Met 能否直接形成一般的蛋白質雙硫鍵？</p>",
      "answer": "<p>不能用這個模型。Met 為硫醚，Cys 才有自由 SH；兩個 Cys 氧化後形成 S–S。Met 可有其他氧化反應，但與此不同。</p>"
    },
    {
      "title": "06　營養與代謝兩軸",
      "prompt": "<p>Leu、Ile、Val 都是必需且支鏈，是否全為純生酮？</p>",
      "answer": "<p>不是。Leu 純生酮；Ile 兼生糖與生酮；Val 生糖。另一個純生酮胺基酸為 Lys。</p>"
    },
    {
      "title": "07　His 電荷",
      "prompt": "<p>His 的 pKa 2、6、9，在 pH 5 主要形式淨電荷為何？</p>",
      "answer": "<p>羧基 −1、α 胺基 +1、咪唑側鏈 +1，主要形式合計 +1。平均值不是恰好整數，勿混淆題意。</p>"
    },
    {
      "title": "08　Gly pI",
      "prompt": "<p>Gly 的 pKa 2.4、9.8，求 pI，並說明是否是最佳緩衝 pH。</p>",
      "answer": "<p>pI = 6.1，兩者夾住零電荷形式。最佳緩衝區接近各 pKa；pI 不是最佳緩衝的同義詞。</p>"
    },
    {
      "title": "09　Asp pI",
      "prompt": "<p>Asp 的 pKa 2.1、3.9、9.9，應選哪兩個？</p>",
      "answer": "<p>電荷依序 +1、0、−1、−2，零電荷夾在 2.1 與 3.9，pI = 3.0。不能取最小最大平均。</p>"
    },
    {
      "title": "10　Lys pI",
      "prompt": "<p>Lys 的 pKa 2.2、9.0、10.5，求 pI。</p>",
      "answer": "<p>電荷依序 +2、+1、0、−1。零電荷夾在 9.0 與 10.5，pI = 9.75。</p>"
    },
    {
      "title": "11　Cys 的陷阱",
      "prompt": "<p>Cys 的 pKa 1.9、8.3、10.8。為何不是取 1.9 與 10.8？</p>",
      "answer": "<p>SH 在 α 胺基之前解離，電荷由 0 變 −1，所以零電荷區由 1.9 與 8.3 夾住，pI = 5.1。</p>"
    },
    {
      "title": "12　分率",
      "prompt": "<p>His 側鏈 pKa 6，在 pH 7.4 時約多少比例帶正電？</p>",
      "answer": "<p>1/(1+10^1.4) ≈ 0.038，即 3.8%。這是側鏈比例，不是整個自由 His 的總電荷。</p>"
    },
    {
      "title": "13　電泳方向",
      "prompt": "<p>pI 8 的蛋白質置於 pH 6，一般電泳朝哪一極？</p>",
      "answer": "<p>pH < pI，平均淨正電，朝負極 cathode。若改 pH 10 則偏負，朝正極 anode。這不是 SDS 處理後的天然電荷預測。</p>"
    },
    {
      "title": "14　肽鍵旋轉",
      "prompt": "<p>肽鏈能折疊，是否代表肽鍵 C–N 可自由旋轉？</p>",
      "answer": "<p>否。醯胺共振造成部分雙鍵性與平面；主要構形變化來自 φ、ψ 角，且還受立體障礙限制。</p>"
    },
    {
      "title": "15　Pro 順式",
      "prompt": "<p>含 Pro 的肽鍵是否全部 cis？</p>",
      "answer": "<p>否。X–Pro 的 cis 比例相對一般肽鍵較高，仍多見 trans；Pro 在肽鍵氮端才是此處比較的對象。</p>"
    },
    {
      "title": "16　鍵數與質量",
      "prompt": "<p>12 個殘基的一條普通線性肽有幾個肽鍵？相對自由胺基酸總質量少多少？</p>",
      "answer": "<p>11 個；形式組成差為 11 個水，約 198 Da。條件是單鏈線性且無其他修飾；不是描述核糖體直接脫水的機制。</p>"
    },
    {
      "title": "17　多肽電荷",
      "prompt": "<p>未修飾 Ala–Lys–Asp–Gly 在 pH 7 的主要淨電荷？若 N 端乙醯化？</p>",
      "answer": "<p>原本 N +1、C −1、Lys +1、Asp −1，約 0。N 端乙醯化失去自由胺基的約 +1，改約 −1。</p>"
    },
    {
      "title": "18　GSH 結構",
      "prompt": "<p>GSH 的組成、特殊肽連接與氧化還原部位各是什麼？</p>",
      "answer": "<p>Glu、Cys、Gly；Glu 以 γ 羧基連 Cys；Cys 的 SH 參與氧化還原，兩個 GSH 氧化生成一個 GSSG。</p>"
    },
    {
      "title": "19　GSH 再生",
      "prompt": "<p>GSSG 變回 GSH 使用 ATP、NADH 還是 NADPH？由何酵素催化？</p>",
      "answer": "<p>NADPH，由 glutathione reductase 催化。Glutathione peroxidase 是利用 GSH 去還原過氧化物，不要把兩者交換。</p>"
    },
    {
      "title": "20　跨章整合",
      "prompt": "<p>PKA、兒茶酚胺與 serotonin，各應連到哪些胺基酸？</p>",
      "answer": "<p>PKA 常磷酸化 Ser/Thr；兒茶酚胺由 Tyr 路徑生成；serotonin 由 Trp 路徑生成。不要將所有可磷酸化側鏈視為同一激酶受質。</p>"
    }
  ],
  "recalls": [
    [
      "為何自由 Lys 在 pH 7 約 +1，鏈內 Lys 殘基卻不能再算一組 α 胺基與 α 羧基？",
      "自由 Lys 的主鏈 +1 與 −1 抵銷，側鏈約 +1。鏈內的主鏈基團已參與肽鍵，只有其可解離側鏈列入；整條肽另算真正的 N/C 端。"
    ],
    [
      "L-Cys 可以同時是 R 構型嗎？Gly 呢？",
      "可以。L/D 與 R/S 是不同系統；含硫側鏈改變 CIP 優先序，L-Cys 的 α 碳為 R。Gly 有兩個 H，無手性，不標 L/D 或 R/S。"
    ],
    [
      "把 W–Y–F–N 的三字碼寫出，哪個不是芳香側鏈？",
      "Trp–Tyr–Phe–Asn；Asn 不是芳香族。Trp 與 Tyr 對 280 nm 較重要，Phe 在此波長很弱。"
    ],
    [
      "Gln 與 Lys 都含氮，為何不能都算側鏈 +1？",
      "Gln 是醯胺，氮孤電子對參與共振，在一般生理範圍不如 Lys 的 ε 胺基容易質子化。應辨認官能基，不只數 N。"
    ],
    [
      "兩個 Met 能否直接形成一般的蛋白質雙硫鍵？",
      "不能用這個模型。Met 為硫醚，Cys 才有自由 SH；兩個 Cys 氧化後形成 S–S。Met 可有其他氧化反應，但與此不同。"
    ],
    [
      "Leu、Ile、Val 都是必需且支鏈，是否全為純生酮？",
      "不是。Leu 純生酮；Ile 兼生糖與生酮；Val 生糖。另一個純生酮胺基酸為 Lys。"
    ],
    [
      "His 的 pKa 2、6、9，在 pH 5 主要形式淨電荷為何？",
      "羧基 −1、α 胺基 +1、咪唑側鏈 +1，主要形式合計 +1。平均值不是恰好整數，勿混淆題意。"
    ],
    [
      "Gly 的 pKa 2.4、9.8，求 pI，並說明是否是最佳緩衝 pH。",
      "pI = 6.1，兩者夾住零電荷形式。最佳緩衝區接近各 pKa；pI 不是最佳緩衝的同義詞。"
    ],
    [
      "Cys 的 pKa 1.9、8.3、10.8。為何不是取 1.9 與 10.8？",
      "SH 在 α 胺基之前解離，電荷由 0 變 −1，所以零電荷區由 1.9 與 8.3 夾住，pI = 5.1。"
    ],
    [
      "His 側鏈 pKa 6，在 pH 7.4 時約多少比例帶正電？",
      "1/(1+10^1.4) ≈ 0.038，即 3.8%。這是側鏈比例，不是整個自由 His 的總電荷。"
    ],
    [
      "pI 8 的蛋白質置於 pH 6，一般電泳朝哪一極？",
      "pH < pI，平均淨正電，朝負極 cathode。若改 pH 10 則偏負，朝正極 anode。這不是 SDS 處理後的天然電荷預測。"
    ],
    [
      "肽鏈能折疊，是否代表肽鍵 C–N 可自由旋轉？",
      "否。醯胺共振造成部分雙鍵性與平面；主要構形變化來自 φ、ψ 角，且還受立體障礙限制。"
    ],
    [
      "未修飾 Ala–Lys–Asp–Gly 在 pH 7 的主要淨電荷？若 N 端乙醯化？",
      "原本 N +1、C −1、Lys +1、Asp −1，約 0。N 端乙醯化失去自由胺基的約 +1，改約 −1。"
    ],
    [
      "GSH 的組成、特殊肽連接與氧化還原部位各是什麼？",
      "Glu、Cys、Gly；Glu 以 γ 羧基連 Cys；Cys 的 SH 參與氧化還原，兩個 GSH 氧化生成一個 GSSG。"
    ],
    [
      "PKA、兒茶酚胺與 serotonin，各應連到哪些胺基酸？",
      "PKA 常磷酸化 Ser/Thr；兒茶酚胺由 Tyr 路徑生成；serotonin 由 Trp 路徑生成。不要將所有可磷酸化側鏈視為同一激酶受質。"
    ],
    [
      "能否由結構重建答案，而不是只背名稱？",
      "先辨認官能基，再列電荷、鍵結或反應角色；最後核對題目問的是主要形式、平均值還是功能。"
    ]
  ],
  "readingIntro": "先讀 1–6 節，把側鏈與性質連起來；接著用 7–11 節逐步練習電荷與等電點；最後讀肽鍵、功能性肽與修飾，完成自編題再對照歷屆考法。",
  "figure": "<div class=\"relearn-bridge\"><p><strong>低 pH：較多質子 → 正電增加；高 pH：較少質子 → 正電減少或負電增加。</strong></p><p>pI 計算：列基團 → 排 pKa → 從強酸總電荷逐次減一 → 找零電荷區。</p></div>",
  "exams": {
    "bankCount": 1022,
    "yearMin": 96,
    "yearMax": 115,
    "groups": [
      {
        "id": "charge",
        "title": "電荷、等電點與兩性電解質",
        "topic": "charge",
        "summary": "同一解離模型可回答質子化、淨電荷與 pI。",
        "questions": [
          {
            "number": 49,
            "text": "49 \n組胺酸(histidine)的胺基(-NH2)、側鏈(R-group)與羧基(-COOH)的pKa值分別為9、6 和2\n,當此胺基酸處於pH 5.0 的環境中時,溶液中大部分組胺酸分子的帶電狀態應為: \nA帶二個正電荷 \nB帶一個正電荷 \nC不帶電 \nD帶一個負電荷 \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  715.98,
                  570.0,
                  756.48
                ]
              }
            ],
            "id": "98-2-2-49",
            "year": 98,
            "session": 2,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/98/2/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=098140&c=103&s=c021&q=1&verify=step1-20261013-098140-103-c021-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=098140&y=2009",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/98/2/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=098140&c=103&s=c021&q=1&verify=step1-20261013-098140-103-c021-M",
            "corrected": true,
            "answerVersion": "M",
            "point": "His 在 pH 5 的電荷",
            "analysis": "pKa 為 2、6、9：羧基 −1、側鏈 +1、α 胺基 +1，主要形式總和 +1，選 B。",
            "trap": "先列三個基團再加總，不能只看咪唑。"
          },
          {
            "number": 26,
            "text": "26 \n組胺酸(histidine)的胺基(-NH2)、側鏈(R-group)與羧基(-COOH)的pKa 值分別為9、6 和2,\n此氨基酸的等電點(isoelectric point)應為: \nA7.5 \nB4 \nC6 \nD8.5 \n",
            "regions": [
              {
                "page": 3,
                "rect": [
                  30.0,
                  81.39,
                  570.22,
                  121.89
                ]
              }
            ],
            "id": "101-1-2-26",
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
            "point": "His 等電點",
            "analysis": "電荷隨 pH 上升由 +2、+1、0 到 −1，零電荷區由 pKa 6 與 9 夾住，平均 7.5，選 A。",
            "trap": "不要把三個 pKa 全平均或取最小最大。"
          },
          {
            "number": 27,
            "text": "27.組胺酸(histidine)有三個酸解離常數(pKa)值,分別為1.82、 6.0、 9.17。其中那個官能基團的pKa為1.82 ? \n \nA.胺基(-NH3\n+) \nB.羧基(-COOH) \nC.側鏈異吡唑基(side-chain imidazole group) \nD.α碳原子(α carbon)的氫原子\n",
            "regions": [
              {
                "page": 3,
                "rect": [
                  30.0,
                  471.41,
                  570.0,
                  541.37
                ]
              }
            ],
            "id": "105-2-2-27",
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
            "point": "pKa 對應官能基",
            "analysis": "最低的 1.82 對應羧基解離，選 B；咪唑約 6，α 胺基約 9.17。",
            "trap": "題幹的咪唑中文翻譯不影響由官能基判斷。"
          },
          {
            "number": 74,
            "text": "74.某多胜肽(polypeptide)在其等電點pH(isolelectric pH)的溶液中,該多胜肽的電荷為何?\nA.胺基(amino)和羧基(carboxyl)末端(termini)皆帶正電荷\nB.胺基和羧基末端皆不帶電荷\nC.淨電荷為零\nD.帶有四個淨電荷\n",
            "regions": [
              {
                "page": 11,
                "rect": [
                  30.0,
                  593.72,
                  570.0,
                  699.19
                ]
              }
            ],
            "id": "108-1-1-74",
            "year": 108,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/108/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=108030&c=301&s=11&q=1&verify=step1-20261013-108030-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=108030&y=2019",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/108/1/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=108030&c=301&s=11&q=1&verify=step1-20261013-108030-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "C"
            ],
            "point": "pI 的定義",
            "analysis": "等電點代表平均淨電荷為零，選 C，不要求所有端點或側鏈不帶電。",
            "trap": "淨電荷是總和，不是局部電荷全部消失。"
          },
          {
            "number": 76,
            "text": "76.以NaOH強鹼滴定含有甘胺酸(glycine)的溶液,在pH=12時,完成滴定過程,此時甘胺酸的主要化學式為\n何?\nA.NH3\n+—CH2—COOH\nB.NH2—CH2—COO-\nC.NH2—CH3\n+—COO-\nD.NH3\n+—CH2—COO-\n",
            "regions": [
              {
                "page": 11,
                "rect": [
                  30.0,
                  637.99,
                  570.0,
                  763.99
                ]
              }
            ],
            "id": "108-2-1-76",
            "year": 108,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/108/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=108100&c=301&s=11&q=1&verify=step1-20261013-108100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=108100&y=2019",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/108/2/medicine-1-S.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=S&code=108100&c=301&s=11&q=1&verify=step1-20261013-108100-301-11-S",
            "corrected": false,
            "answerVersion": "S",
            "originalAnswers": [
              "B"
            ],
            "point": "Gly 強鹼滴定終點",
            "analysis": "pH 12 高於羧基與胺基的 pKa，主要為 NH₂–CH₂–COO⁻，選 B。",
            "trap": "胺基去質子化變中性，羧基去質子化變負。"
          },
          {
            "number": 76,
            "text": "76.胺基酸被歸類為一種兩性電解質(ampholytes)的主因是胺基酸能: \nA.呈現酸性及鹼性的功能 \nB.轉換為不帶電荷的分子及離子的狀態 \nC.轉換為極性及非極性的狀態 \nD.轉換為在260nm 及280nm 的吸光化合物 \n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  172.55,
                  587.0,
                  293.87
                ]
              }
            ],
            "id": "115-1-1-76",
            "year": 115,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/115/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=115020&c=301&s=0101&q=1&verify=step1-20261013-115020-301-0101-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=115020&y=2026",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/115/1/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=115020&c=301&s=0101&q=1&verify=step1-20261013-115020-301-0101-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "A"
            ],
            "point": "兩性電解質",
            "analysis": "能表現酸性及鹼性功能，選 A。酸鹼能力是定義，並非單純是否可在中性與離子間切換。",
            "trap": "ampholyte 與 zwitterion 不要當成完全相同的描述。"
          }
        ]
      },
      {
        "id": "structure",
        "title": "側鏈、構形與光譜",
        "topic": "special",
        "summary": "從官能基推理，比只記分類更能應付不同問法。",
        "questions": [
          {
            "number": 35,
            "text": "35\n一胺基酸的側鍵為一環狀結構,但其生化性質與脂族側鍵(aliphatic side chain)相類似,由於此環狀\n結構的剛性,故難以摺疊進蛋白質的結構中,請問這個胺基酸的名稱為何?\nA組織胺酸(Histidine)\nB脯胺酸(Proline)\nC酪胺酸(Tyrosine)\nD色胺酸(Tryptophan)\n",
            "regions": [
              {
                "page": 3,
                "rect": [
                  30.0,
                  742.81,
                  570.0,
                  807.0
                ]
              }
            ],
            "id": "97-2-2-35",
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
            "point": "環狀側鏈剛性",
            "analysis": "側鏈接回主鏈氮形成環的是 Pro，選 B；其構形受限，但並不是無法出現在蛋白質。",
            "trap": "修正題幹的簡化說法：限制構形不代表不能摺疊。"
          },
          {
            "number": 26,
            "text": "26 \n許多蛋白質須與金屬離子結合後才能展現正確的功能,下列何種胺基酸的側鏈具備與金屬離子直接\n結合的能力? \nA半胱胺酸(cysteine)  \nB丙胺酸(alanine) \nC苯丙胺酸(phenylalanine) \nD脯胺酸(proline) \n",
            "regions": [
              {
                "page": 2,
                "rect": [
                  30.0,
                  739.58,
                  570.22,
                  807.0
                ]
              }
            ],
            "id": "102-2-2-26",
            "year": 102,
            "session": 2,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/102/2/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=102110&c=101&s=0102&q=1&verify=step1-20261013-102110-101-0102-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=102110&y=2013",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/102/2/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=102110&c=101&s=0102&q=1&verify=step1-20261013-102110-101-0102-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "A"
            ],
            "point": "金屬配位",
            "analysis": "Cys 的硫可參與金屬配位，選 A；Ala、Phe、Pro 側鏈缺少相同的硫醇配位基。",
            "trap": "其他題目也可能出現 His、Asp/Glu；此題依選項判斷。"
          },
          {
            "number": 75,
            "text": "75.下列那一個胺基酸不會吸收波長為280 nm的紫外光? \n \nA.苯丙胺酸(phenylalanine) \nB.天冬醯胺(asparagine) \nC.酪胺酸(tyrosine) \nD.色胺酸(tryptophan) \n",
            "regions": [
              {
                "page": 11,
                "rect": [
                  30.0,
                  590.05,
                  570.0,
                  695.05
                ]
              }
            ],
            "id": "106-2-1-75",
            "year": 106,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/106/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=106100&c=301&s=11&q=1&verify=step1-20261013-106100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=106100&y=2017",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/106/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=106100&c=301&s=11&q=1&verify=step1-20261013-106100-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "B"
            ],
            "point": "辨認芳香側鏈",
            "analysis": "本題採計 B：Asn 缺乏芳香發色團。Trp/Tyr 對 280 nm 重要，Phe 在此波長很弱。",
            "trap": "不要把題目簡化成 Phe 與 Trp 在 280 nm 同樣強。"
          },
          {
            "number": 74,
            "text": "74.下列那一種胜肽能吸收280 nm波長的光?\nA.丙胺酸-離胺酸-組織胺酸(Ala-Lys-His)\nB.丙胺酸-丙胺酸-色胺酸(Ala-Ala-Trp)\nC.絲胺酸-甘胺酸-天門冬醯胺(Ser-Gly-Asn)\nD.纈胺酸-脯胺酸-白胺酸(Val-Pro-Leu)\n",
            "regions": [
              {
                "page": 11,
                "rect": [
                  30.0,
                  385.55,
                  570.0,
                  490.55
                ]
              }
            ],
            "id": "109-1-1-74",
            "year": 109,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/109/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=109020&c=301&s=11&q=1&verify=step1-20261013-109020-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=109020&y=2020",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/109/1/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=109020&c=301&s=11&q=1&verify=step1-20261013-109020-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "B"
            ],
            "point": "從序列找吸光基團",
            "analysis": "Ala–Ala–Trp 含 Trp，選 B。其餘序列不含 Trp/Tyr 這類主要的 280 nm 發色團。",
            "trap": "題目把單一胺基酸辨認換成序列，原理不變。"
          },
          {
            "number": 74,
            "text": "74.我們可以利用波長280 nm的吸光值來決定蛋白質樣品的濃度,此定量分析法的原理主要基於蛋白質中何種胺\n基酸的吸光特性?\n \nA.絲胺酸(serine)\nB.羥丁胺酸(threonine)\nC.色胺酸(tryptophan)\nD.纈胺酸(valine)\n",
            "regions": [
              {
                "page": 11,
                "rect": [
                  30.0,
                  380.4,
                  569.96,
                  506.03
                ]
              }
            ],
            "id": "110-1-1-74",
            "year": 110,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/110/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=110020&c=301&s=11&q=1&verify=step1-20261013-110020-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=110020&y=2021",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/110/1/medicine-1-S.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=S&code=110020&c=301&s=11&q=1&verify=step1-20261013-110020-301-11-S",
            "corrected": false,
            "answerVersion": "S",
            "originalAnswers": [
              "C"
            ],
            "point": "A₂₈₀ 定量原理",
            "analysis": "選 C，Trp 是主要吸光貢獻者之一。不同蛋白質需考量自己的吸光係數。",
            "trap": "不是每個肽鍵對 280 nm 貢獻都相同。"
          }
        ]
      },
      {
        "id": "peptide",
        "title": "肽鍵與序列計數",
        "topic": "peptide",
        "summary": "從鍵的性質延伸到順反異構及主鏈鍵數。",
        "questions": [
          {
            "number": 74,
            "text": "74.下列那一種胺基酸最有可能在蛋白質結構中參與順式胜肽鍵(cis peptide bond)的形成? \n \nA.組胺酸(histidine) \nB.丙胺酸(alanine) \nC.脯胺酸(proline) \nD.甘胺酸(glycine) \n",
            "regions": [
              {
                "page": 11,
                "rect": [
                  30.0,
                  506.05,
                  570.0,
                  611.05
                ]
              }
            ],
            "id": "107-1-1-74",
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
            "point": "cis 肽鍵",
            "analysis": "X–Pro 的 cis 比例較一般肽鍵高，選 C。環狀結構改變順反兩態的立體能量差。",
            "trap": "較容易形成 cis 不代表全為 cis。"
          },
          {
            "number": 74,
            "text": "74.一條由12 個胺基酸形成的多肽(polypeptide)含有幾個胜肽鍵(peptide bond)? \n \nA.9 \nB.10 \nC.11 \nD.12 \n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  543.83,
                  570.32,
                  672.86
                ]
              }
            ],
            "id": "114-2-1-74",
            "year": 114,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/114/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=114090&c=301&s=0101&q=1&verify=step1-20261013-114090-301-0101-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=114090&y=2025",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/114/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=114090&c=301&s=0101&q=1&verify=step1-20261013-114090-301-0101-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "C"
            ],
            "point": "線性多肽鍵數",
            "analysis": "12 個胺基酸接成單條一般線性鏈，需要 11 個肽鍵，選 C。",
            "trap": "先確認是否單鏈、線性，再用 n−1。"
          },
          {
            "number": 89,
            "text": "89.核糖體在進行蛋白質合成時,下列那個步驟不會直接消耗能量? \nA.胺基酸活化(amino acid activation) \nB.胺醯-tRNA 進入核糖體進行結合(binding of an incoming aminoacyl-tRNA) \nC.肽鍵形成(peptide bond formation) \nD.轉位(translocation) \n",
            "regions": [
              {
                "page": 16,
                "rect": [
                  30.0,
                  522.23,
                  587.0,
                  628.43
                ]
              }
            ],
            "id": "115-1-1-89",
            "year": 115,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/115/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=115020&c=301&s=0101&q=1&verify=step1-20261013-115020-301-0101-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=115020&y=2026",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/115/1/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=115020&c=301&s=0101&q=1&verify=step1-20261013-115020-301-0101-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "C"
            ],
            "point": "肽鍵形成的能量",
            "analysis": "選 C。肽基轉移利用已活化的胺醯／肽醯-tRNA 鍵能，不在該步直接再消耗 ATP/GTP；活化、遞送與轉位仍有能量成本。",
            "trap": "不直接耗能的單一步驟，不能推出整個蛋白質合成不用能量。"
          }
        ]
      },
      {
        "id": "gsh",
        "title": "GSH 結構與再生",
        "topic": "glutathione",
        "summary": "題目由三肽組成逐步延伸到氧化還原供體。",
        "questions": [
          {
            "number": 45,
            "text": "45.穀胱甘肽(glutathione)為人體內調節氧化還原之重要物質,下列那一種胺基酸不是作為合\n成穀胱甘肽之主要骨架? \n \nA.麩胺酸(glutamate) \nB.離胺酸(lysine) \nC.半胱胺酸(cysteine) \nD.甘胺酸(glycine) \n \n",
            "regions": [
              {
                "page": 5,
                "rect": [
                  30.0,
                  696.77,
                  570.0,
                  780.76
                ]
              }
            ],
            "id": "104-2-2-45",
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
            "point": "排除非組成胺基酸",
            "analysis": "GSH 是 Glu、Cys、Gly，Lys 不在其主要骨架，選 B。",
            "trap": "Glu 與 Gln 不同；此處為 Glu。"
          },
          {
            "number": 94,
            "text": "94.Glutathione在細胞內參與氧化還原反應,它是由那三種胺基酸所構成之三胜肽(tripeptide)? \n \nA.methionine, glutamate, cysteine \nB.glutamate, cysteine, glycine \nC.alanine, methionine, glutamate \nD.arginine, aspartic acid, methionine\n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  338.17,
                  570.0,
                  443.05
                ]
              }
            ],
            "id": "107-1-1-94",
            "year": 107,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/107/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=107020&c=301&s=55&q=1&verify=step1-20261013-107020-301-55-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=107020&y=2018",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/107/1/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=107020&c=301&s=55&q=1&verify=step1-20261013-107020-301-55-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "B"
            ],
            "point": "三肽的組成",
            "analysis": "glutamate、cysteine、glycine，選 B；Cys 的 SH 負責氧化還原。",
            "trap": "記組成後再連到 γ 肽鍵與硫醇。"
          },
          {
            "number": 91,
            "text": "91.下列有關glutathione(GSH)的敘述,何者錯誤?\nA.由Glu、Cys及Gly三種胺基酸組成\nB.某些種類的leukotriene的生合成需要glutathione的參與\nC.GSH被氧化時,經由雙硫鍵的形成產生glutathione disulfide(GSSG)\nD.glutathione reductase利用ATP可直接將GSSG還原成2個GSH\n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  195.31,
                  570.0,
                  300.31
                ]
              }
            ],
            "id": "108-1-1-91",
            "year": 108,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/108/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=108030&c=301&s=11&q=1&verify=step1-20261013-108030-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=108030&y=2019",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/108/1/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=108030&c=301&s=11&q=1&verify=step1-20261013-108030-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "D"
            ],
            "point": "GSH 循環錯誤敘述",
            "analysis": "錯誤為 D：glutathione reductase 使用 NADPH，不是 ATP 直接供還原。GSH 亦可參與某些 leukotriene 的合成。",
            "trap": "區分還原力 NADPH 與 ATP 的能量角色。"
          },
          {
            "number": 94,
            "text": "94.下列何者為三胜肽(tripeptide)?\n A.阿斯巴甜(aspartame)\n\nB.血清素(serotonin)\nC.血基質(heme)\nD.穀胱甘肽(glutathione)\n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  752.86,
                  569.96,
                  806.92
                ]
              },
              {
                "page": 15,
                "rect": [
                  30.0,
                  28.0,
                  569.96,
                  90.71
                ]
              }
            ],
            "id": "110-1-1-94",
            "year": 110,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/110/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=110020&c=301&s=11&q=1&verify=step1-20261013-110020-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=110020&y=2021",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/110/1/medicine-1-S.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=S&code=110020&c=301&s=11&q=1&verify=step1-20261013-110020-301-11-S",
            "corrected": false,
            "answerVersion": "S",
            "originalAnswers": [
              "D"
            ],
            "point": "辨認三肽",
            "analysis": "GSH 為三肽，選 D。Aspartame 是二肽甲酯衍生物，serotonin 與 heme 都不是肽。",
            "trap": "不能只靠名稱或分子大小判斷。"
          }
        ]
      },
      {
        "id": "bridges",
        "title": "營養與修飾銜接",
        "topic": "connections",
        "summary": "將本章分類接到代謝與訊息傳遞。",
        "questions": [
          {
            "number": 99,
            "text": "99.下列何者兼具必需胺基酸(essential amino acid)及生酮性胺基酸(ketogenic amino acid)特性?\n \nA.天門冬胺酸(aspartate)\nB.組胺酸(histidine)\nC.酪胺酸(tyrosine)\nD.白胺酸(leucine)\n",
            "regions": [
              {
                "page": 15,
                "rect": [
                  30.0,
                  259.94,
                  569.96,
                  363.4
                ]
              }
            ],
            "id": "111-1-1-99",
            "year": 111,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/111/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=111020&c=301&s=11&q=1&verify=step1-20261013-111020-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=111020&y=2022",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/111/1/medicine-1-S.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=S&code=111020&c=301&s=11&q=1&verify=step1-20261013-111020-301-11-S",
            "corrected": false,
            "answerVersion": "S",
            "originalAnswers": [
              "D"
            ],
            "point": "必需且生酮",
            "analysis": "選 D，Leu 為必需且純生酮。His 雖必需但為生糖，Tyr 雖可生酮但不屬成人九種必需。",
            "trap": "各分類分開檢查，不能只符合一半條件。"
          },
          {
            "number": 98,
            "text": "98.Protein kinase A(PKA)是一種磷酸化激酶,可催化在其受質蛋白中的何種胺基酸上進行磷酸化\n(phosphorylation)? \nA.組胺酸(histidine) \nB.蘇胺酸(threonine) \nC.酪胺酸(tyrosine) \nD.麩胺酸(glutamate) \n",
            "regions": [
              {
                "page": 18,
                "rect": [
                  30.0,
                  152.87,
                  587.0,
                  293.87
                ]
              }
            ],
            "id": "115-1-1-98",
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
            "point": "PKA 的受質",
            "analysis": "PKA 為 Ser/Thr kinase，四個選項中 Thr 符合，選 B。Tyr 可被其他激酶磷酸化，不能因此選 Tyr。",
            "trap": "先確認激酶類型，再找受質 OH。"
          }
        ]
      }
    ],
    "note": "本章選題包含電荷、側鏈、肽鍵與功能性肽；能量與激酶題作為後續章節銜接。"
  }
});
