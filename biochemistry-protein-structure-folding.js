/* Authored chapter 3; rebuild with scripts/build-biochemistry-batch.py. */
biochemistryChapters.push({
  "id": "protein-structure-folding",
  "number": "03",
  "title": "蛋白質結構、摺疊與功能失常",
  "summary": "從主鏈幾何到摺疊、伴護、膠原成熟與實驗判讀，逐步理解構造如何決定功能。",
  "sources": "Harper’s Illustrated Biochemistry, 31st ed., Chapters 4–5（第5章 pp.33–46）",
  "sections": [
    {
      "id": "map",
      "title": "學習地圖：同一條鏈如何變成可工作的分子",
      "html": "<p>第 2\n章學的是材料：側鏈的大小、電荷與反應性。本章問的是，這些材料如何被安排成可結合氧、催化反應或支撐組織的形狀。某個殘基能否作用，除了「它是什麼」，還取決於它在三維空間中靠近誰、是否接觸水、能不能移動。</p>\n<p>一條肽鏈不是細胞先做好僵硬骨架再裝上側鏈；主鏈與側鏈彼此限制，共同決定可採取的構形。序列相距很遠的殘基，摺疊後可能共同構成活性中心；序列相鄰的殘基則未必朝同一方向。這是為什麼突變可以在遠離活性中心的位置改變功能。</p>\n<p>讀題時先辨認層次：題目問序列、局部氫鍵模式、整條鏈的摺疊，還是不同鏈的組裝？接著辨認作用力：是在問主鏈氫鍵、側鏈疏水效應，或共價雙硫鍵？最後才判斷改變\npH、溫度或加入還原劑會造成何種結果。</p>\n"
    },
    {
      "id": "levels",
      "title": "四個結構層次：區分鏈內與鏈間",
      "html": "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"四個結構層次：區分鏈內與鏈間比較表\"><table>\n<colgroup>\n<col style=\"width: 25%\" />\n<col style=\"width: 25%\" />\n<col style=\"width: 25%\" />\n<col style=\"width: 25%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>層次</th>\n<th>核心問題</th>\n<th>例子</th>\n<th>易錯處</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>一級 primary</td>\n<td>殘基沿主鏈的排列順序</td>\n<td>β-globin 第 6 位 Glu 變 Val</td>\n<td>不能只說胺基酸種類與數量；順序也重要</td>\n</tr>\n<tr class=\"even\">\n<td>二級 secondary</td>\n<td>局部主鏈採取什麼重複構形</td>\n<td>α helix、β sheet、β turn</td>\n<td>主要看主鏈幾何與氫鍵，不是側鏈序列清單</td>\n</tr>\n<tr class=\"odd\">\n<td>三級 tertiary</td>\n<td>單條多肽鏈如何整體摺疊</td>\n<td>myoglobin 的 globin fold</td>\n<td>不要求有多條鏈，單體也有三級結構</td>\n</tr>\n<tr class=\"even\">\n<td>四級 quaternary</td>\n<td>多條多肽鏈如何排列與互動</td>\n<td>HbA 的 α₂β₂</td>\n<td>一條鏈有四個 domain 不等於四級結構</td>\n</tr>\n</tbody>\n</table></div>\n<p>有些定義將雙硫鍵的共價連接位置納入完整的一級結構描述；國考問「穩定三級構造的共價作用力」時仍通常選雙硫鍵。前者在描述完整共價連接資訊，後者在問這個鍵對摺疊的作用，並不矛盾。</p>\n<p>結構層次也不是四個彼此獨立的抽屜。一級序列改變可能影響二級構形、三級摺疊或四級組裝；選擇性剪接可改變序列，不能說只影響\nRNA\n而與蛋白質無關。蛋白質也可能在不同寡聚狀態間轉換，不一定永遠固定同一種四級結構。</p>\n"
    },
    {
      "id": "geometry",
      "title": "主鏈幾何與 Ramachandran plot",
      "html": "<p>肽鍵 C–N 因醯胺共振帶部分雙鍵性，旋轉受限；主要構形自由度來自 N–Cα 的\nφ 與 Cα–C 的 ψ。Ramachandran plot\n將這兩個角度作為座標，顯示哪些組合在立體上較可行。空白區不是「細胞不喜歡這個顏色」，而是某些原子會靠得太近，產生高能量的碰撞。</p>\n<p>Gly 的側鏈只有 H，容許的角度較廣；Pro 的側鏈接回主鏈氮，使 φ\n的範圍更受限。因此同一張一般殘基的允許區域圖不能毫無調整地套在 Gly、Pro\n上。常見右手 α helix 與伸展 β strand\n位於不同角度區域，反映不同的主鏈排列。</p>\n<p>多數肽鍵為 trans；X–Pro 的 cis 比例相對較高，cis/trans\n的轉換可能成為摺疊速度的限制步驟。Peptidyl-prolyl isomerase\n可以加速此異構化，但不改變最終平衡的熱力學原則。</p>\n<p>不需要先背所有角度數字才理解摺疊。先掌握「肽單元近似平面、相鄰單鍵可旋轉但有障礙、特定角度重複形成規則二級構造」，就能串起大部分結構題。</p>\n"
    },
    {
      "id": "alpha",
      "title": "α 螺旋：氫鍵、方向與螺旋偶極",
      "html": "<p>一般蛋白質常見的是右手 α helix。每圈約 3.6 個殘基，沿軸每個殘基上升約\n1.5 Å，每圈螺距約 5.4 Å。典型氫鍵由第 i 位主鏈 C=O 接受第 i+4 位主鏈 N–H\n提供的氫；側鏈向外伸出，並不是藏在螺旋中央。</p>\n<p>「α helix 靠氫鍵穩定」需要說清楚是哪裡的氫鍵：規則的主鏈 C=O 與 N–H\n配對是核心。側鏈也會影響穩定性，但不是把每個 R\n基團彼此氫鍵連成螺旋。許多微弱互動累積才形成穩定構造，單一氫鍵並非無法被水競爭。</p>\n<p>主鏈肽鍵具有偶極，規則排列使整段螺旋的 N 端偏部分正電、C\n端偏部分負電。這與自由 N 端/C\n端的化學電荷是不同概念；即使螺旋位於整條鏈中間，仍可有螺旋偶極。酸性側鏈靠近螺旋\nN 端、鹼性側鏈靠近 C\n端，有時可提供有利的靜電作用，但仍須看局部結構。</p>\n<p><strong>算例：</strong> 若一段理想 α 螺旋約 20 個殘基，長度量級約\n20×1.5 = 30 Å，可跨越膜疏水區的量級。精確端點距離與使用 n 或 n−1\n個間隔有關；題目通常要你理解為何跨膜 α\n螺旋常需約二十個左右的殘基，而非硬套每條膜都一樣厚。</p>\n"
    },
    {
      "id": "beta",
      "title": "β 摺板、轉角與規則結構的中斷",
      "html": "<p>β strand 為較伸展的主鏈，相鄰 strand 之間以主鏈氫鍵形成 β\nsheet。相鄰股的 N→C\n方向相同叫平行，相反叫反平行；相鄰股可以來自同一條鏈不同區段，也可以來自不同鏈。因此看到\nβ sheet 不代表一定是四級結構。</p>\n<p>β strand\n的側鏈交替朝摺板兩側。若序列每隔一個殘基呈疏水性，可能形成一面疏水、一面親水的兩親性\nβ 結構。α helix 則需考慮每圈約 3.6\n個殘基，不會以完全相同的交替規律形成同一面。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"β 摺板、轉角與規則結構的中斷比較表\"><table>\n<thead>\n<tr class=\"header\">\n<th>比較</th>\n<th>α helix</th>\n<th>β sheet</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>主鏈形狀</td>\n<td>螺旋</td>\n<td>延伸股並排</td>\n</tr>\n<tr class=\"even\">\n<td>常見氫鍵配對</td>\n<td>同段鏈 i 與 i+4</td>\n<td>相鄰 β 股間</td>\n</tr>\n<tr class=\"odd\">\n<td>側鏈方向</td>\n<td>向外環繞</td>\n<td>交替朝兩面</td>\n</tr>\n<tr class=\"even\">\n<td>序列遠近</td>\n<td>典型為局部相鄰區段</td>\n<td>配對股可在序列上相距很遠</td>\n</tr>\n<tr class=\"odd\">\n<td>方向分類</td>\n<td>常見右手螺旋</td>\n<td>平行或反平行</td>\n</tr>\n</tbody>\n</table></div>\n<p>反平行 β sheet\n的氫鍵幾何通常較接近直線；平行配對較傾斜，是教材比較兩者局部氫鍵強度的原因。但整個蛋白質穩定性還受側鏈、溶劑與其他互動影響，不宜推出所有反平行蛋白質一定比平行蛋白質耐熱。</p>\n<p>β turn 常使鏈急轉，典型涉及四個殘基，可見 i 與 i+3\n的主鏈氫鍵；Gly、Pro 常出現在轉角，但理由不同。Gly 小而靈活，Pro\n的環限制角度且可固定某些轉彎。內部 Pro 少了常見主鏈 N–H 供體，常中斷規則\nα 螺旋或 β 結構，卻不是完全不能形成任何氫鍵。</p>\n"
    },
    {
      "id": "domains",
      "title": "Motif、domain 與 subunit：三個常混淆名詞",
      "html": "<p>Motif（基序）是反覆出現的局部結構安排或序列模式，例如\nhelix-turn-helix、β-α-β。Domain（結構域）是較大的緊密單位，常能相對獨立摺疊，並負責特定功能。Subunit（次單元）則是寡聚蛋白質中的一條多肽鏈。三個名詞關心的尺度與問題不同。</p>\n<p>一條蛋白質可以有多個 domain，每個 domain 裡又有多個\nmotif；多條這樣的鏈再組成複合體。若一個受體具有細胞外配體結合域、跨膜區與細胞內酵素域，不能把三個區域自動算成三個\nsubunit。</p>\n<p>序列 motif 不一定等於整個三維結構\nmotif，也不必然證明功能。看到一段疏水序列只能提出跨膜或疏水核心的假設，需結合長度、位置及其他證據。Hydropathy\nplot\n是把連續序列的疏水性作窗口平均，用來尋找可能跨膜的片段，不直接測出分子量、四級結構或含水量。</p>\n"
    },
    {
      "id": "forces",
      "title": "摺疊的驅動力：把蛋白質與水一起算",
      "html": "<p>水溶性球狀蛋白通常將較多非極性側鏈埋入內部。分散暴露的疏水表面會影響周圍水的排列；疏水表面聚在一起時，一部分受限制的水被釋放，能有利於整個系統的自由能。這是疏水效應，不能將它描述成新形成的一條特殊共價「疏水鍵」。</p>\n<p>摺疊讓肽鏈本身的構形選擇減少，鏈的構形熵通常下降；但不能因此斷言總熵一定下降或摺疊不自發。要比較蛋白質加溶劑的整體\nΔG = ΔH −\nTΔS。氫鍵、鹽橋、凡德瓦爾接觸、溶劑重排及構形熵一起決定結果。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"摺疊的驅動力：把蛋白質與水一起算比較表\"><table>\n<thead>\n<tr class=\"header\">\n<th>互動</th>\n<th>化學本質</th>\n<th>讀題時的要點</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>疏水效應</td>\n<td>溶劑相關的自由能效應</td>\n<td>常是球狀蛋白形成內部核心的重要因素</td>\n</tr>\n<tr class=\"even\">\n<td>氫鍵</td>\n<td>非共價</td>\n<td>主鏈與側鏈皆可參與，要辨認位置</td>\n</tr>\n<tr class=\"odd\">\n<td>離子作用／鹽橋</td>\n<td>帶電基團間作用</td>\n<td>受 pH、距離與環境影響</td>\n</tr>\n<tr class=\"even\">\n<td>凡德瓦爾作用</td>\n<td>短距離弱作用</td>\n<td>良好堆積可累積穩定作用，太近則排斥</td>\n</tr>\n<tr class=\"odd\">\n<td>雙硫鍵</td>\n<td>兩個 Cys 氧化形成共價 S–S</td>\n<td>對還原劑敏感，不能列為非共價作用</td>\n</tr>\n</tbody>\n</table></div>\n<p>蛋白質的穩定性往往來自許多互動的差額，不是「鍵越多永遠越穩」。把極性基團埋入內部卻沒有合適配對可能付出能量代價；膜蛋白面向脂質的表面可富疏水殘基，也不能硬套所有疏水基團一律藏內部。</p>\n"
    },
    {
      "id": "folding",
      "title": "能量地景、Anfinsen 實驗與分子伴護子",
      "html": "<p>蛋白質不可能把所有構形逐一試完才找到正確答案。局部結構與有利接觸會限制後續搜尋，摺疊可經多條路徑與中間態到達穩定構形。能量地景常以漏斗示意：往低自由能方向前進，但可能被局部低谷困住或形成錯誤聚集。圖是概念模型，不表示每條蛋白質都有相同的單一路徑。</p>\n<p>RNase A\n的經典復性實驗顯示：以尿素破壞摺疊、以還原條件處理雙硫鍵後，若在適當順序與環境移除處理，蛋白質可恢復天然結構與活性。若仍在變性環境就讓雙硫鍵隨機重建，容易形成錯配而活性低；允許雙硫鍵重新交換後，可走向較有利的配對。核心結論是序列包含摺疊所需的重要資訊，不是所有蛋白質離開細胞都必定自動完整復性。</p>\n<p>Chaperone\n會暫時結合暴露的疏水區或提供受保護的環境，降低未摺疊鏈彼此聚集的機會。Hsp70、Hsp60/chaperonin\n等常利用 ATP 結合與水解驅動工作週期；也有不直接用 ATP\n的伴護系統，因此應說「許多重要伴護系統需要 ATP」，不是所有都一樣。</p>\n<p>伴護子不會把自己的胺基酸接進受質，通常也不成為成熟蛋白的永久次單元。它提供有利於正確摺疊的條件，並非替任意錯誤序列指定正常形狀。Protein\ndisulfide isomerase 協助雙硫鍵交換；peptidyl-prolyl isomerase 加速 Pro\n肽鍵的順反異構化，兩者解決不同的摺疊瓶頸。</p>\n"
    },
    {
      "id": "denaturation",
      "title": "變性與復性：用處理條件判斷哪一層被破壞",
      "html": "<p>變性是原有天然構形與功能受破壞，不一定切斷主鏈肽鍵。加熱、極端\npH、尿素或界面活性劑都可能使蛋白質展開，但主要作用機制不完全一樣。若殘基序列未被切斷，仍可能失去活性，因為活性中心需要三維排列。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"變性與復性：用處理條件判斷哪一層被破壞比較表\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>處理</th>\n<th>主要影響</th>\n<th>不能直接推出</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>加熱</td>\n<td>改變非共價作用與構形分布，可能聚集</td>\n<td>所有肽鍵都已水解</td>\n</tr>\n<tr class=\"even\">\n<td>極端 pH</td>\n<td>改變質子化、鹽橋與局部結合</td>\n<td>每次活性下降都是完全變性</td>\n</tr>\n<tr class=\"odd\">\n<td>尿素／guanidinium</td>\n<td>干擾維持天然構形的溶劑與非共價互動</td>\n<td>一定直接切斷雙硫鍵</td>\n</tr>\n<tr class=\"even\">\n<td>SDS</td>\n<td>變性並賦予大量負電</td>\n<td>已還原全部雙硫鍵</td>\n</tr>\n<tr class=\"odd\">\n<td>DTT／β-mercaptoethanol</td>\n<td>還原雙硫鍵</td>\n<td>一般主鏈肽鍵也被剪斷</td>\n</tr>\n<tr class=\"even\">\n<td>蛋白酶</td>\n<td>水解特定肽鍵</td>\n<td>只是改變三級結構而保留完整序列</td>\n</tr>\n</tbody>\n</table></div>\n<p>移除變性劑後能否復性，取決於是否已聚集、形成錯配共價鍵、被化學修飾或失去必要輔因子。煮熟蛋白不能回到原狀，是理解不可逆聚集的例子，但不能把它推廣成所有變性都不可逆。</p>\n"
    },
    {
      "id": "misfolding",
      "title": "錯誤摺疊、amyloid 與 prion",
      "html": "<p>錯誤摺疊可能造成失去原本功能，也可能獲得聚集或毒性作用。細胞會透過伴護、降解與運輸品質管制處理問題；若需求超過處理能力，就可能累積不正常蛋白質。蛋白質品質控制不是單純把所有不完美構形立刻清除，也包含嘗試重新摺疊。</p>\n<p>Amyloid 常具有跨 β（cross-β）排列：β\n股與纖維長軸大致垂直，形成高度有序的纖維架構。不同疾病的前驅蛋白可不同，卻收斂成類似聚集構造。因此不能把\namyloid 當成某一種特定胺基酸序列，也不能說所有 β sheet\n都是病態；大量正常蛋白本來就含 β 結構。</p>\n<p>Prion 的重要概念是錯誤構形可促進同種正常蛋白轉成類似異常構形。正常\nPrP 與疾病相關構形的序列可能相同，而二級與高階構形不同；病態形式相對富 β\n結構，且較易聚集、對部分蛋白水解較有抗性。「具有傳播能力的蛋白構形」不等於一般病毒，不能把其感染性歸因於自身攜帶核酸基因體。</p>\n<p>Aβ、tau、α-synuclein\n等可用來理解不同蛋白病的概念，但本章不把所有神經退化疾病都歸為同一機制。國考先掌握序列與構形可分離、β\n富集與聚集相關，以及正常 β 結構並非病態即可。</p>\n"
    },
    {
      "id": "collagen",
      "title": "膠原蛋白：三股螺旋不是 α 螺旋",
      "html": "<p>Collagen 的主題是抗拉強度。每條鏈富含 Gly、Pro 及修飾後的\nhydroxyproline，常有 Gly–X–Y 重複，其中每第三個位置的 Gly\n很重要，因三股螺旋中心空間狹小，只容許極小側鏈。X 常見 Pro，Y 常見\nhydroxyproline，但不是每一個 X/Y 都固定相同。</p>\n<p>單條 collagen 鏈採取不同於典型 α helix\n的延伸螺旋構形，三條鏈纏成右手三股超螺旋。相鄰鏈間氫鍵與後續交聯共同支持結構。不要看到「螺旋」就回答\ni→i+4 的 α 螺旋氫鍵；兩者幾何不同。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"膠原蛋白：三股螺旋不是 α 螺旋比較表\"><table>\n<thead>\n<tr class=\"header\">\n<th>常見型別</th>\n<th>典型分布</th>\n<th>記憶關聯</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>I</td>\n<td>骨、肌腱、皮膚等</td>\n<td>抗拉支架；成骨不全症常涉及 I 型</td>\n</tr>\n<tr class=\"even\">\n<td>II</td>\n<td>軟骨、玻璃體等</td>\n<td>軟骨與眼部結構</td>\n</tr>\n<tr class=\"odd\">\n<td>III</td>\n<td>網狀纖維、血管及多種軟組織</td>\n<td>血管型 Ehlers–Danlos 與 III 型相關</td>\n</tr>\n<tr class=\"even\">\n<td>IV</td>\n<td>基底膜網狀結構</td>\n<td>網狀，不是典型長纖維束</td>\n</tr>\n</tbody>\n</table></div>\n<p>型別表是常見考點，不是所有組織只含一種\ncollagen。臨床疾病也可能涉及合成酵素、修飾或組裝，而非只有主鏈基因突變。</p>\n"
    },
    {
      "id": "maturation",
      "title": "膠原蛋白成熟：細胞內修飾與細胞外交聯",
      "html": "<p>先在粗糙內質網合成前驅鏈，移除訊號胜肽，並對特定 Pro/Lys\n進行羥化。這些 hydroxylase 需要 Fe²⁺、O₂、α-ketoglutarate 等參與，維生素\nC 有助維持催化所需的鐵還原狀態。部分 hydroxylysine\n再接醣，三條鏈經對齊後組成 procollagen 三股螺旋。</p>\n<p>Procollagen 分泌後，在細胞外切除端部 propeptide，再組裝成纖維；lysyl\noxidase 透過氧化脫胺生成可交聯的醛基，這一步需要銅，與維生素 C\n參與的羥化不是同一步。交聯增加纖維抗拉能力。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"膠原蛋白成熟：細胞內修飾與細胞外交聯比較表\"><table>\n<thead>\n<tr class=\"header\">\n<th>階段</th>\n<th>位置／條件</th>\n<th>常見失誤</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Pro/Lys 羥化</td>\n<td>內質網，與維生素 C 有關</td>\n<td>誤背成維生素 K 或細胞外交聯</td>\n</tr>\n<tr class=\"even\">\n<td>部分 hydroxylysine 醣基化</td>\n<td>細胞內</td>\n<td>把所有 Lys 都當作醣基化位置</td>\n</tr>\n<tr class=\"odd\">\n<td>三股螺旋組裝</td>\n<td>分泌前</td>\n<td>把單條 α chain 誤當典型 α helix</td>\n</tr>\n<tr class=\"even\">\n<td>端部切除與纖維組裝</td>\n<td>分泌後的細胞外</td>\n<td>忘記前驅物與成熟纖維不同</td>\n</tr>\n<tr class=\"odd\">\n<td>lysyl oxidase 交聯</td>\n<td>細胞外，銅相關</td>\n<td>與 hydroxylase／維生素 C 混淆</td>\n</tr>\n</tbody>\n</table></div>\n<p>壞血病可從羥化不足理解結締組織脆弱、出血與傷口癒合不良。成骨不全症常涉及\nI 型 collagen 的量或結構異常；某些 Ehlers–Danlos 類型涉及 collagen\n或其加工，不能把所有亞型都歸因於同一酵素缺陷。讀病例先找骨脆、皮膚延展、關節鬆弛或血管脆弱等線索，再對照故障層級。</p>\n"
    },
    {
      "id": "fibrous",
      "title": "纖維蛋白比較：collagen、elastin 與 keratin",
      "html": "<p>Elastin 的核心功能是伸展後回彈，富含可產生疏水互動的區域，並由特定\nLys 衍生的交聯維持網絡。Desmosine／isodesmosine\n交聯是重要辨認點，其形成也與 lysyl oxidase 有關。Fibrillin\n微纖維提供彈性纖維組裝支架；Marfan syndrome 典型與 fibrillin-1\n相關，不是把它當作 collagen I 突變。</p>\n<p>α-Keratin 常見於毛髮、指甲等，α 螺旋鏈形成\ncoiled-coil；不同程度的雙硫鍵交聯影響材料性質。Collagen 抗拉、elastin\n回彈、keratin 保護支撐，是三個不同的結構—功能例子。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"纖維蛋白比較：collagen、elastin 與 keratin比較表\"><table>\n<thead>\n<tr class=\"header\">\n<th>蛋白／支架</th>\n<th>結構關鍵</th>\n<th>功能線索</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Collagen</td>\n<td>Gly–X–Y、三股螺旋與交聯</td>\n<td>抗拉、骨與肌腱等支架</td>\n</tr>\n<tr class=\"even\">\n<td>Elastin</td>\n<td>彈性網絡、desmosine 類交聯</td>\n<td>動脈與肺等組織回彈</td>\n</tr>\n<tr class=\"odd\">\n<td>Fibrillin</td>\n<td>微纖維支架</td>\n<td>彈性纖維組裝與相關訊號環境</td>\n</tr>\n<tr class=\"even\">\n<td>α-Keratin</td>\n<td>coiled-coil、Cys 交聯</td>\n<td>毛髮、角化組織</td>\n</tr>\n</tbody>\n</table></div>\n"
    },
    {
      "id": "methods",
      "title": "實驗判讀：大小、電荷、純化與結構證據",
      "html": "<p>SDS-PAGE\n將蛋白質變性並賦予近似一致的負電荷／質量比，遷移主要反映大小。加入還原劑後還能拆開雙硫鍵連接的鏈。Native\nPAGE\n則保留較多天然互動，遷移受大小、形狀與電荷共同影響，不能單靠一條帶直接精確判分子量。</p>\n<p><strong>算例：</strong> 某蛋白在合適的天然分子量分析下約 100\nkDa，非還原 SDS-PAGE 約 50 kDa，還原 SDS-PAGE 只有 25 kDa\n一種帶。可提出四個 25 kDa\n鏈組裝，其中兩兩由雙硫鍵相連、兩個二聚體間主要非共價結合的模型。但單一\n25 kDa\n帶不能證明四條鏈序列相同；不同鏈也可能大小相同，且天然大小測量受形狀等條件影響。</p>\n<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"實驗判讀：大小、電荷、純化與結構證據比較表\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>方法</th>\n<th>主要依據</th>\n<th>容易顛倒的方向</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Size-exclusion chromatography</td>\n<td>水動力大小</td>\n<td>大分子較難進孔洞，通常先流出</td>\n</tr>\n<tr class=\"even\">\n<td>Ion-exchange chromatography</td>\n<td>淨電荷</td>\n<td>陰離子交換樹脂帶正電，吸附負電分子</td>\n</tr>\n<tr class=\"odd\">\n<td>Affinity chromatography</td>\n<td>特異結合</td>\n<td>如 His-tag 與固定金屬配位，不是單純按大小</td>\n</tr>\n<tr class=\"even\">\n<td>Isoelectric focusing</td>\n<td>pH 梯度中的 pI</td>\n<td>蛋白集中於淨電荷約零的位置</td>\n</tr>\n<tr class=\"odd\">\n<td>SDS-PAGE</td>\n<td>變性後主要依大小</td>\n<td>較小多肽通常跑得較遠</td>\n</tr>\n</tbody>\n</table></div>\n<p>X-ray crystallography 由繞射資料推得電子密度與模型；NMR\n可研究溶液中的結構與動態；cryo-EM\n可由多個投影重建結構，通常不需形成蛋白晶體。任何方法都有解析度與樣品限制，模型也不是完全靜止的真實細胞。計算預測可提出結構假說，但不能單憑一張預測圖證明活性、親和力或特定配體一定結合。</p>\n"
    },
    {
      "id": "review",
      "title": "閉卷整合：從改變到結果",
      "html": "<p>遇到「加入還原劑」先想到\nS–S，而非所有非共價作用；遇到「高溫」先想到構形與聚集，不先假設肽鏈全部斷裂。遇到「序列遠端突變影響催化」，先考慮三級結構、動態或異位性傳遞，而不是認為離活性中心遠就一定無效。</p>\n<p>用三條因果鏈檢查理解：Gly 被較大殘基取代 → collagen 中央堆積受干擾 →\n抗拉結構異常；疏水表面暴露 → 蛋白彼此不當接觸 →\n聚集與功能失常；酵素序列未變但 pH 改變 → 質子化與互動改變 →\n可能活性下降甚至變性。</p>\n<p>本章最後應能分清四組：二級主鏈氫鍵與三級整體核心、domain 與\nsubunit、變性與水解、正常 β sheet 與病態\namyloid。下一章將以血紅素展示正常蛋白如何利用構形變化調節功能。</p>\n"
    }
  ],
  "questions": [
    {
      "title": "01　單條鏈有三個 domain，是否一定有四級結構？",
      "prompt": "<p>單條鏈有三個 domain，是否一定有四級結構？</p>",
      "answer": "<p>否。Domain 是鏈內較大的摺疊單位；四級結構描述多條多肽鏈的組裝。單鏈可以有多個 domain 及完整三級結構。</p>"
    },
    {
      "title": "02　遠離活性中心的序列突變為何仍會影響活性？",
      "prompt": "<p>遠離活性中心的序列突變為何仍會影響活性？</p>",
      "answer": "<p>序列距離不等於三維距離，也可能改變核心堆積、動態或次單元界面。先檢查摺疊與訊號傳遞，不應只憑線性距離判定無影響。</p>"
    },
    {
      "title": "03　Gly 與 Pro 哪個通常有較廣的主鏈角度範圍？",
      "prompt": "<p>Gly 與 Pro 哪個通常有較廣的主鏈角度範圍？</p>",
      "answer": "<p>Gly 側鏈小，立體障礙較低；Pro 環狀側鏈限制 φ。因此不能把一般殘基的 Ramachandran 允許區原封套用兩者。</p>"
    },
    {
      "title": "04　α helix 第 i 位 C=O 與哪一位 N–H 配對？",
      "prompt": "<p>α helix 第 i 位 C=O 與哪一位 N–H 配對？</p>",
      "answer": "<p>典型是 i+4；側鏈向外。規則氫鍵主要來自主鏈，不是每個 R 基團互相連成螺旋。</p>"
    },
    {
      "title": "05　每圈3.6殘基、螺距5.4 Å，每殘基上升多少？",
      "prompt": "<p>每圈3.6殘基、螺距5.4 Å，每殘基上升多少？</p>",
      "answer": "<p>5.4/3.6 = 1.5 Å。20 殘基約為30 Å量級；精確端點距離要注意計算的是殘基還是間隔。</p>"
    },
    {
      "title": "06　α helix N 端的偶極方向為何？",
      "prompt": "<p>α helix N 端的偶極方向為何？</p>",
      "answer": "<p>偏部分正電，C端偏部分負電；來自主鏈肽鍵偶極排列，不只來自自由胺基／羧基。因此位於鏈中間的螺旋也有偶極。</p>"
    },
    {
      "title": "07　β sheet 是否一定來自不同多肽鏈？",
      "prompt": "<p>β sheet 是否一定來自不同多肽鏈？</p>",
      "answer": "<p>否。同一條鏈的不同區段也可形成相鄰β股，不能看到β sheet就判為四級結構。</p>"
    },
    {
      "title": "08　雙硫鍵屬哪種作用力？如何破壞？",
      "prompt": "<p>雙硫鍵屬哪種作用力？如何破壞？</p>",
      "answer": "<p>Cys間的共價S–S，可由DTT或β-mercaptoethanol還原；不是Met間的鍵，也不是一般非共價作用。</p>"
    },
    {
      "title": "09　摺疊降低肽鏈構形熵，是否必定不自發？",
      "prompt": "<p>摺疊降低肽鏈構形熵，是否必定不自發？</p>",
      "answer": "<p>否。需計入水與整體的ΔH、ΔS。疏水表面埋入可釋放部分受限制水，總ΔG仍可能有利。</p>"
    },
    {
      "title": "10　RNase復性實驗能否推論所有蛋白皆可自行復性？",
      "prompt": "<p>RNase復性實驗能否推論所有蛋白皆可自行復性？</p>",
      "answer": "<p>不能。它支持序列包含重要摺疊資訊，但仍依賴適當環境；聚集、修飾、錯配與缺乏輔因子等都可阻礙復性。</p>"
    },
    {
      "title": "11　Chaperone 如何減少不當聚集？",
      "prompt": "<p>Chaperone 如何減少不當聚集？</p>",
      "answer": "<p>暫時結合暴露疏水區或提供受保護的摺疊環境。許多重要系統利用ATP，通常不成為成熟受質的永久次單元。</p>"
    },
    {
      "title": "12　尿素處理後失活，能否直接推論肽鏈已斷？",
      "prompt": "<p>尿素處理後失活，能否直接推論肽鏈已斷？</p>",
      "answer": "<p>不能。變性可破壞活性中心三維排列而保留序列；蛋白水解才直接切斷主鏈肽鍵。</p>"
    },
    {
      "title": "13　所有含β sheet的蛋白都是amyloid嗎？",
      "prompt": "<p>所有含β sheet的蛋白都是amyloid嗎？</p>",
      "answer": "<p>否。正常蛋白常有β結構；amyloid具有特定cross-β聚集架構，不能只靠有無β sheet判病態。</p>"
    },
    {
      "title": "14　正常PrP與疾病相關形式一定有不同序列嗎？",
      "prompt": "<p>正常PrP與疾病相關形式一定有不同序列嗎？</p>",
      "answer": "<p>不一定。同序列可有不同構形；異常構形可促進同種蛋白轉變。其傳播概念不是自身攜帶核酸基因體的普通病毒。</p>"
    },
    {
      "title": "15　Collagen每第三個位置的Gly為何重要？",
      "prompt": "<p>Collagen每第三個位置的Gly為何重要？</p>",
      "answer": "<p>三股螺旋中心空間狹小，需要極小側鏈。換成較大殘基可干擾組裝；不是因為Gly有特殊氫鍵側鏈。</p>"
    },
    {
      "title": "16　維生素C與銅分別參與collagen哪一步？",
      "prompt": "<p>維生素C與銅分別參與collagen哪一步？</p>",
      "answer": "<p>維生素C與細胞內Pro/Lys羥化有關；銅與細胞外lysyl oxidase交聯有關。位置、酵素與化學反應不同。</p>"
    },
    {
      "title": "17　Marfan與常見成骨不全症分別聯想到哪個蛋白？",
      "prompt": "<p>Marfan與常見成骨不全症分別聯想到哪個蛋白？</p>",
      "answer": "<p>Marfan典型為fibrillin-1；常見成骨不全症涉及I型collagen。結締組織病並非都由相同蛋白缺陷造成。</p>"
    },
    {
      "title": "18　天然100 kDa、非還原SDS 50、還原SDS 25，提出模型。",
      "prompt": "<p>天然100 kDa、非還原SDS 50、還原SDS 25，提出模型。</p>",
      "answer": "<p>可能有四條25 kDa鏈，兩兩由雙硫鍵相連成50 kDa，再以非共價作用組成100 kDa。這是合理模型，單一帶不能證明鏈序列完全相同。</p>"
    },
    {
      "title": "19　Size-exclusion誰先出？陰離子交換樹脂帶何電？",
      "prompt": "<p>Size-exclusion誰先出？陰離子交換樹脂帶何電？</p>",
      "answer": "<p>較大分子通常先流出，因較不進入孔洞；陰離子交換樹脂本身帶正電，吸附負電分子。</p>"
    },
    {
      "title": "20　計算預測到結合口袋，是否證明具有指定酵素活性？",
      "prompt": "<p>計算預測到結合口袋，是否證明具有指定酵素活性？</p>",
      "answer": "<p>不足。結構模型可產生假說，仍需催化、結合或其他功能證據。相似構造不等於反應完全相同。</p>"
    }
  ],
  "recalls": [
    [
      "遠離活性中心的序列突變為何仍會影響活性？",
      "序列距離不等於三維距離，也可能改變核心堆積、動態或次單元界面。先檢查摺疊與訊號傳遞，不應只憑線性距離判定無影響。"
    ],
    [
      "單條鏈有三個 domain，是否一定有四級結構？",
      "否。Domain 是鏈內較大的摺疊單位；四級結構描述多條多肽鏈的組裝。單鏈可以有多個 domain 及完整三級結構。"
    ],
    [
      "Gly 與 Pro 哪個通常有較廣的主鏈角度範圍？",
      "Gly 側鏈小，立體障礙較低；Pro 環狀側鏈限制 φ。因此不能把一般殘基的 Ramachandran 允許區原封套用兩者。"
    ],
    [
      "α helix 第 i 位 C=O 與哪一位 N–H 配對？",
      "典型是 i+4；側鏈向外。規則氫鍵主要來自主鏈，不是每個 R 基團互相連成螺旋。"
    ],
    [
      "β sheet 是否一定來自不同多肽鏈？",
      "否。同一條鏈的不同區段也可形成相鄰β股，不能看到β sheet就判為四級結構。"
    ],
    [
      "單條鏈有三個 domain，是否一定有四級結構？",
      "否。Domain 是鏈內較大的摺疊單位；四級結構描述多條多肽鏈的組裝。單鏈可以有多個 domain 及完整三級結構。"
    ],
    [
      "摺疊降低肽鏈構形熵，是否必定不自發？",
      "否。需計入水與整體的ΔH、ΔS。疏水表面埋入可釋放部分受限制水，總ΔG仍可能有利。"
    ],
    [
      "Chaperone 如何減少不當聚集？",
      "暫時結合暴露疏水區或提供受保護的摺疊環境。許多重要系統利用ATP，通常不成為成熟受質的永久次單元。"
    ],
    [
      "尿素處理後失活，能否直接推論肽鏈已斷？",
      "不能。變性可破壞活性中心三維排列而保留序列；蛋白水解才直接切斷主鏈肽鍵。"
    ],
    [
      "所有含β sheet的蛋白都是amyloid嗎？",
      "否。正常蛋白常有β結構；amyloid具有特定cross-β聚集架構，不能只靠有無β sheet判病態。"
    ],
    [
      "Collagen每第三個位置的Gly為何重要？",
      "三股螺旋中心空間狹小，需要極小側鏈。換成較大殘基可干擾組裝；不是因為Gly有特殊氫鍵側鏈。"
    ],
    [
      "維生素C與銅分別參與collagen哪一步？",
      "維生素C與細胞內Pro/Lys羥化有關；銅與細胞外lysyl oxidase交聯有關。位置、酵素與化學反應不同。"
    ],
    [
      "Marfan與常見成骨不全症分別聯想到哪個蛋白？",
      "Marfan典型為fibrillin-1；常見成骨不全症涉及I型collagen。結締組織病並非都由相同蛋白缺陷造成。"
    ],
    [
      "天然100 kDa、非還原SDS 50、還原SDS 25，提出模型。",
      "可能有四條25 kDa鏈，兩兩由雙硫鍵相連成50 kDa，再以非共價作用組成100 kDa。這是合理模型，單一帶不能證明鏈序列完全相同。"
    ],
    [
      "計算預測到結合口袋，是否證明具有指定酵素活性？",
      "不足。結構模型可產生假說，仍需催化、結合或其他功能證據。相似構造不等於反應完全相同。"
    ]
  ],
  "readingIntro": "先讀結構層次與主鏈幾何，再看摺疊和錯誤聚集，最後把膠原成熟與實驗證據連起來。每節都先問原因，再預測處理或突變的結果。",
  "figure": "<div class=\"relearn-bridge\"><p>讀法：結構或模型 → 分子作用 → 可觀察結果 → 關閉正文後自己推一次。</p></div>",
  "references": "<p>Harper’s Illustrated Biochemistry, 31st ed., Chapters 4–5（第5章 pp.33–46）。正文依使用者教材重組並補充推導；歷屆題取自網站既有題庫，解析為自行撰寫。模型數字為教學用途，臨床治療現況不以舊版課本作唯一依據。</p><ul><li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://pdb101.rcsb.org/motm/4\">RCSB PDB：Collagen</a></li><li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://pdb101.rcsb.org/motm/032\">RCSB PDB：Chaperones</a></li></ul>",
  "exams": {
    "bankCount": 1022,
    "yearMin": 96,
    "yearMax": 115,
    "groups": [
      {
        "id": "group-0",
        "title": "二級與高階結構",
        "topic": "alpha",
        "summary": "題目從結構分類延伸至氫鍵、偶極與方向，需能指出實際作用位置。",
        "questions": [
          {
            "number": 26,
            "text": "26.蛋白質結構中的β-摺板(β-sheet)與α-螺旋(α-helix)在結構分類上屬於: \n \nA.一級結構(primary structure) \nB.二級結構(secondary structure) \nC.三級結構(tertiary structure) \nD 四級結構(quaternary structure)\n \n",
            "regions": [
              {
                "page": 3,
                "rect": [
                  30.0,
                  738.77,
                  570.0,
                  807.0
                ]
              }
            ],
            "id": "104-2-2-26",
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
            "point": "結構層次",
            "analysis": "α helix與β sheet都是二級構造。三級描述單鏈整體摺疊，四級描述多鏈組裝。",
            "trap": "先分局部主鏈排列與整體組裝。"
          },
          {
            "number": 75,
            "text": "75.下列何者屬於蛋白質的二級結構(secondary structure)? \n \nA.α-helix \nB.tetramer \nC.subunit \nD.capping structure \n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  483.78,
                  570.22,
                  612.78
                ]
              }
            ],
            "id": "115-2-1-75",
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
            "point": "二級構造辨認",
            "analysis": "α helix是二級構造；tetramer描述寡聚狀態，subunit是次單元，不是二級結構名稱。",
            "trap": "不要把所有與蛋白有關的名詞放在同一層。"
          },
          {
            "number": 75,
            "text": "75.下列關於蛋白質結構中α螺旋(α helix)與β摺板(β sheet)的敘述,何者正確? \nA.α螺旋的胺基端(amino terminus)會因電偶極(dipole)排列的規律性而帶部分負電性(partial negative \ncharge) \nB.自然界中的α螺旋大部分具有左手性(left-handed)的結構 \nC.氫鍵(hydrogen bond)的形成與α螺旋的穩定性有關,但與β摺板的穩定性無關 \nD.β摺板中相鄰的兩條多肽鏈(polypeptide chains)之間的方向性可為平行(parallel)或反平行(antiparallel)的\n關係 \n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  237.76,
                  570.32,
                  408.76
                ]
              }
            ],
            "id": "112-1-1-75",
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
            "point": "螺旋與摺板",
            "analysis": "β股可平行或反平行。α螺旋N端偏部分正電，常見右手性；兩種二級結構均有主鏈氫鍵參與。",
            "trap": "逐項核對方向、偶極與氫鍵，不只看一個熟悉詞。"
          },
          {
            "number": 75,
            "text": "75.下列何者為穩定蛋白質α-螺旋結構的主要因素?\n \nA.胜肽鏈上α碳原子之間的疏水性(hydrophobic)交互作用\nB.螺旋結構內胜肽鏈主幹上的胜肽鍵(peptide bond)之間的氫鍵作用(hydrogen bond)\nC.R基團(R group;side chain)之間靜電性的作用(electrostatic interaction)\nD.R基團(R group;side chain)之間氫鍵(hydrogen bond)\n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  443.63,
                  569.96,
                  573.7
                ]
              }
            ],
            "id": "113-1-1-75",
            "year": 113,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/113/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=113020&c=301&s=11&q=1&verify=step1-20261013-113020-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=113020&y=2024",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/113/1/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=113020&c=301&s=11&q=1&verify=step1-20261013-113020-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "B"
            ],
            "point": "α螺旋氫鍵",
            "analysis": "典型規則氫鍵由主鏈C=O與N–H形成。側鏈互動可影響穩定性，但不是題目問的主要規則氫鍵模式。",
            "trap": "記i到i+4，並指出是主鏈。"
          },
          {
            "number": 26,
            "text": "26.蛋白質中的平行鏈(parallel β-stranded)結構比反平行鏈(antiparallel β-stranded)結構較\n不穩定,原因為何? \n \nA.平行鏈結構的横向相鄰鏈之間所形成的氫鍵鍵結較弱 \nB.平行鏈結構缺少雙硫鍵(disulfide bond)與鄰近的鏈鍵結 \nC.平行鏈結構不能如反平行鏈堆疊(stacking)成β-折疊層(β-sheet) \nD.平行鏈結構缺少蛋白質-蛋白質結合區域(protein-protein binding domain)以穩定平行鏈\n結構 \n \n",
            "regions": [
              {
                "page": 3,
                "rect": [
                  30.0,
                  612.76,
                  570.0,
                  710.8
                ]
              }
            ],
            "id": "105-1-2-26",
            "year": 105,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/105/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=105020&c=301&s=66&q=1&verify=step1-20261013-105020-301-66-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=105020&y=2016",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/105/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=105020&c=301&s=66&q=1&verify=step1-20261013-105020-301-66-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "A"
            ],
            "point": "平行與反平行",
            "analysis": "反平行的氫鍵幾何通常較接近直線；平行配對較傾斜，這是題目所比較的局部穩定因素。",
            "trap": "不能由此推論所有反平行蛋白都較耐熱。"
          },
          {
            "number": 75,
            "text": "75.在某些蛋白質中含有-Ser-Gly-Pro-Gly-的胺基酸序列,最有可能形成下列何種蛋白質的二級結構? \n \nA.β-turn \nB.α-helix \nC.β-sheet \nD.zinc finger \n",
            "regions": [
              {
                "page": 11,
                "rect": [
                  30.0,
                  527.05,
                  570.0,
                  632.05
                ]
              }
            ],
            "id": "107-2-1-75",
            "year": 107,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/107/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=107100&c=301&s=11&q=1&verify=step1-20261013-107100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=107100&y=2018",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/107/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=107100&c=301&s=11&q=1&verify=step1-20261013-107100-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "A"
            ],
            "point": "轉角序列",
            "analysis": "Gly與Pro常見於β-turn：Gly小而靈活，Pro環狀結構可固定某些轉角。",
            "trap": "兩者出現位置相近，物理理由卻不同。"
          }
        ]
      },
      {
        "id": "group-1",
        "title": "穩定作用與處理條件",
        "topic": "forces",
        "summary": "區分非共價變性、S–S還原及主鏈水解。",
        "questions": [
          {
            "number": 29,
            "text": "29 \n下列何者不是穩定蛋白質三級結構的非共價交互作用力? \nA氫鍵(hydrogen bond) \nB凡德瓦爾力(van der Waals interaction) \nC離子交互作用(ionic interaction) \nD雙硫鍵(disulfide bond) \n",
            "regions": [
              {
                "page": 3,
                "rect": [
                  30.0,
                  386.3,
                  570.22,
                  429.8
                ]
              }
            ],
            "id": "100-1-2-29",
            "year": 100,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/100/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=100030&c=101&s=0102&q=1&verify=step1-20261013-100030-101-0102-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=100030&y=2011",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/100/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=100030&c=101&s=0102&q=1&verify=step1-20261013-100030-101-0102-M",
            "corrected": true,
            "answerVersion": "M",
            "point": "共價與非共價",
            "analysis": "題目問不是非共價作用，雙硫鍵為共價S–S；其餘三者為非共價互動。",
            "trap": "先圈出否定詞，再分類作用力。"
          },
          {
            "number": 26,
            "text": "26 \n維繫蛋白質三級結構穩定性作用力之中,何者最易受到所處環境之氧化還原狀態的影響? \nA雙硫鍵(disulfide bond) \nB氫鍵(hydrogen bond) \nC凡德瓦爾力(van der Waals interaction) \nD離子交互作用(ionic interaction) \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  84.62,
                  570.22,
                  144.62
                ]
              }
            ],
            "id": "103-2-2-26",
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
            "point": "氧化還原影響",
            "analysis": "Cys硫醇氧化可成S–S，還原可拆開，故雙硫鍵最直接受氧化還原狀態影響。",
            "trap": "不要把pH影響與氧化還原影響完全混為一談。"
          },
          {
            "number": 75,
            "text": "75.下列有關雙硫鍵(disulfide bond)的敘述,何者錯誤?\nA.甲硫胺酸(methionine)側鏈的硫原子可參與雙硫鍵的形成\nB.蛋白質中的雙硫鍵會在強還原劑的作用下發生斷裂\nC.蛋白質中的雙硫鍵可增加其結構的熱穩定性\nD.雙硫鍵異構酶(disulfide isomerase)可幫助蛋白質摺疊\n",
            "regions": [
              {
                "page": 11,
                "rect": [
                  30.0,
                  532.99,
                  570.0,
                  637.99
                ]
              }
            ],
            "id": "108-2-1-75",
            "year": 108,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/108/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=108100&c=301&s=11&q=1&verify=step1-20261013-108100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=108100&y=2019",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/108/2/medicine-1-S.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=S&code=108100&c=301&s=11&q=1&verify=step1-20261013-108100-301-11-S",
            "corrected": false,
            "answerVersion": "S",
            "originalAnswers": [
              "A"
            ],
            "point": "雙硫鍵與摺疊",
            "analysis": "錯誤是Met側鏈能形成一般蛋白雙硫鍵；典型來源為兩個Cys。還原劑可拆開，PDI可協助配對重排。",
            "trap": "含硫不等於有可形成S–S的自由硫醇。"
          },
          {
            "number": 75,
            "text": "75.下列何種處理方法最容易破壞蛋白質結構中的雙硫鍵(disulfide bond)?\n \nA.高溫(high temperature)\nB.強酸(low pH)\nC.加入還原劑(reducing agent)\nD.加入界面活性劑(detergent)\n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  78.56,
                  569.96,
                  210.84
                ]
              }
            ],
            "id": "113-2-1-75",
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
            "point": "選擇處理條件",
            "analysis": "還原劑最直接破壞S–S。高溫、酸與界面活性劑可影響摺疊，但不能等同專門還原雙硫鍵。",
            "trap": "把變性、還原與蛋白水解分開。"
          }
        ]
      },
      {
        "id": "group-2",
        "title": "摺疊與聚集",
        "topic": "folding",
        "summary": "伴護工作週期、正常摺疊與病態聚集分開理解。",
        "questions": [
          {
            "number": 29,
            "text": "29 \n下列關於分子伴護蛋白(molecular chaperones)性質的敘述,何者錯誤? \nA分子伴護蛋白可以協助摺疊錯誤的蛋白質(misfolded protein)走向正確的摺疊途徑 \nB大部分分子伴護蛋白在作用時,無須消耗腺嘌呤核苷三磷酸(ATP) \nC大部分分子伴護蛋白的含量在細胞處與高溫狀態時會上升 \nD某些分子伴護蛋白可藉由與未摺疊蛋白質所暴露之疏水性區域結合,防止其不當凝聚 \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  476.59,
                  570.22,
                  570.07
                ]
              }
            ],
            "id": "102-1-2-29",
            "year": 102,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/102/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=102030&c=101&s=0102&q=1&verify=step1-20261013-102030-101-0102-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=102030&y=2013",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/102/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=102030&c=101&s=0102&q=1&verify=step1-20261013-102030-101-0102-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "B"
            ],
            "point": "伴護的能量",
            "analysis": "本題錯誤項為大部分伴護作用不需ATP；Hsp70與chaperonin等重要系統使用ATP週期。也存在ATP非依賴系統。",
            "trap": "依題目範圍判斷，不把答案擴張成全部伴護子都耗ATP。"
          },
          {
            "number": 26,
            "text": "26.若蛋白質A的正確摺疊(folding)需要另一蛋白質B的幫助,然而蛋白質B的正確摺疊不需要蛋白質A的幫忙。蛋白質B是屬於\n下列何種物質? \n \nA.配體(ligand) \nB.分子伴護子(molecular chaperone) \nC.蛋白質A的同功酶(isoenzyme) \nD.結構基序(structural motif) \n",
            "regions": [
              {
                "page": 3,
                "rect": [
                  30.0,
                  276.2,
                  570.0,
                  354.68
                ]
              }
            ],
            "id": "106-1-2-26",
            "year": 106,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/106/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=106020&c=301&s=66&q=1&verify=step1-20261013-106020-301-66-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=106020&y=2017",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/106/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=106020&c=301&s=66&q=1&verify=step1-20261013-106020-301-66-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "B"
            ],
            "point": "分子伴護子",
            "analysis": "協助另一蛋白正確摺疊符合chaperone功能；isoenzyme指催化相同反應的不同分子形式。",
            "trap": "輔助摺疊不等於成為受質的永久次單元。"
          },
          {
            "number": 43,
            "text": "43 \n澱粉樣變性病(amyloidosis)是一類由蛋白質摺疊錯誤所引發的疾病,何種蛋白質二級結構(secondary \nstructure)與導致此類疾病的關係最為密切? \nAα-螺旋(α-helix) \n \nBβ-摺板(β-sheet) \nCβ-回轉(β-turn) \n \nD隨機線圈(random coil) \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  162.39,
                  570.22,
                  216.39
                ]
              }
            ],
            "id": "101-2-2-43",
            "year": 101,
            "session": 2,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/101/2/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=101110&c=101&s=0102&q=1&verify=step1-20261013-101110-101-0102-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=101110&y=2012",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/101/2/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=101110&c=101&s=0102&q=1&verify=step1-20261013-101110-101-0102-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "B"
            ],
            "point": "Amyloid",
            "analysis": "Amyloid纖維與cross-β架構密切相關，故選β-sheet。並非所有正常β-sheet都病態。",
            "trap": "區分正常二級結構與特定病態聚集排列。"
          }
        ]
      },
      {
        "id": "group-3",
        "title": "膠原結構與成熟",
        "topic": "collagen",
        "summary": "從Gly的空間需求、修飾到結構疾病。",
        "questions": [
          {
            "number": 26,
            "text": "26 \n一位男童特別高大,主訴關節鬆動、視網膜剝離病變。檢查發現他的第二型膠原蛋白(type II collagen)\n於三胜肽重複單位(tripeptide repeat)產生突變,以致影響它的四級結構。這個突變最可能發生在那\n個胺基酸? \nA羥離胺酸(hydroxylysine) \nB羥脯胺酸(hydroxyproline) \nC甘胺酸(glycine) \n \nD色胺酸(tryptophan) \n",
            "regions": [
              {
                "page": 3,
                "rect": [
                  30.0,
                  197.78,
                  570.22,
                  270.26
                ]
              }
            ],
            "id": "100-1-2-26",
            "year": 100,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/100/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=100030&c=101&s=0102&q=1&verify=step1-20261013-100030-101-0102-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=100030&y=2011",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/100/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=100030&c=101&s=0102&q=1&verify=step1-20261013-100030-101-0102-M",
            "corrected": true,
            "answerVersion": "M",
            "point": "Collagen的Gly",
            "analysis": "Gly–X–Y中每第三個Gly可容納於三股螺旋狹小中心，大側鏈置換可干擾堆積。",
            "trap": "從空間需求推理，勿只背病例外觀。"
          },
          {
            "number": 27,
            "text": "27 \n膠原蛋白(collagen)之羥基化(hydroxylation)修飾反應所需的維生素為: \nAthiamine \nBascorbate \nCpyridoxal \nDcobalamin \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  83.9,
                  570.22,
                  121.28
                ]
              }
            ],
            "id": "103-1-2-27",
            "year": 103,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/103/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=103030&c=101&s=0102&q=1&verify=step1-20261013-103030-101-0102-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=103030&y=2014",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/103/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=103030&c=101&s=0102&q=1&verify=step1-20261013-103030-101-0102-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "B"
            ],
            "point": "羥化輔助因子",
            "analysis": "Ascorbate與Pro/Lys hydroxylase所需鐵的還原狀態維持有關；其餘維生素參與其他反應。",
            "trap": "維生素C連羥化，銅連lysyl oxidase交聯。"
          },
          {
            "number": 74,
            "text": "74.下列何種蛋白質結構的變異,是導致成骨不全症(osteogenesis imperfecta)的原因?\n \nA.纖黏蛋白(fibronectin) \nB.骨橋蛋白(osteopontin) \nC.角質蛋白(keratin) \nD.膠原蛋白(collagen) \n",
            "regions": [
              {
                "page": 11,
                "rect": [
                  30.0,
                  425.27,
                  570.0,
                  527.05
                ]
              }
            ],
            "id": "107-2-1-74",
            "year": 107,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/107/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=107100&c=301&s=11&q=1&verify=step1-20261013-107100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=107100&y=2018",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/107/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=107100&c=301&s=11&q=1&verify=step1-20261013-107100-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "D"
            ],
            "point": "成骨不全症",
            "analysis": "典型成骨不全症與I型collagen量或結構異常相關，四選項中為collagen。",
            "trap": "不要與fibrillin相關的Marfan混淆。"
          }
        ]
      },
      {
        "id": "group-4",
        "title": "實驗與序列分析",
        "topic": "methods",
        "summary": "先辨認方法測量的對象，再判讀能得到的結論。",
        "questions": [
          {
            "number": 76,
            "text": "76.以凝膠電泳法(gel electrophoresis)分離蛋白質時,加入SDS(sodium dodecyl sulfate)的目的為何? \n \nA.用以決定一個蛋白質的等電點(isoelectric point) \nB.用以決定一個蛋白質的特異活性(specific activity) \nC.用以保護蛋白質的生物結構和活性 \n\nD.用以決定蛋白質分子量 \n",
            "regions": [
              {
                "page": 11,
                "rect": [
                  30.0,
                  716.05,
                  570.0,
                  807.0
                ]
              },
              {
                "page": 12,
                "rect": [
                  30.0,
                  28.0,
                  570.0,
                  44.17
                ]
              }
            ],
            "id": "107-1-1-76",
            "year": 107,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/107/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=107020&c=301&s=55&q=1&verify=step1-20261013-107020-301-55-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=107020&y=2018",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/107/1/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=107020&c=301&s=55&q=1&verify=step1-20261013-107020-301-55-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "D"
            ],
            "point": "SDS-PAGE",
            "analysis": "SDS變性並提供近似一致負電荷／質量比，使分離主要反映分子大小，用來估計分子量。",
            "trap": "天然pI由其他方法測，SDS不是保存活性的試劑。"
          },
          {
            "number": 42,
            "text": "42 \n厭水性分析圖(hydropathy plot)一般可用於: \nA推算膜蛋白質的四級結構 \nB測定天然的蛋白質(native protein)的水含量 \nC推算膜蛋白質的實際分子量 \nD預測已知的蛋白質胺基酸序列是否含有穿膜區(membrane-spanning segment) \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  81.62,
                  570.22,
                  151.58
                ]
              }
            ],
            "id": "102-2-2-42",
            "year": 102,
            "session": 2,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/102/2/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=102110&c=101&s=0102&q=1&verify=step1-20261013-102110-101-0102-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=102110&y=2013",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/102/2/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=102110&c=101&s=0102&q=1&verify=step1-20261013-102110-101-0102-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "D"
            ],
            "point": "Hydropathy plot",
            "analysis": "連續序列疏水性高的片段可提示跨膜區；不能直接測出實際分子量、含水量或四級結構。",
            "trap": "預測片段不等於已證實完整膜拓樸。"
          }
        ]
      }
    ],
    "note": "本頁為主題精選，不是完整歷年頻率統計。題幹譯名或文字擷取有歧義時，解析另加註並以原卷及英文術語核對。"
  }
});
