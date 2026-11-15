biochemistryChapters.push({
  "id": "amino-acid-carbon",
  "number": "19",
  "title": "胺基酸碳骨架：合成來源、供能出口與代謝疾病",
  "summary": "將胺基酸收斂到七個碳代謝入口，從共同步驟與分支阻塞推導MSUD、PKU、黑尿症與有機酸代謝異常。",
  "sources": "Harper’s Illustrated Biochemistry, 31st ed., Ch. 27 Biosynthesis of the Nutritionally Nonessential Amino Acids（印刷頁263–268）；Ch. 29 Catabolism of the Carbon Skeletons of Amino Acids（印刷頁280–295）。成人必需胺基酸與Thr分類採本文範圍說明；人類TDH、THA1P基因註記與疾病補充見來源連結。",
  "references": "<p>Harper’s Illustrated Biochemistry, 31st ed., Ch. 27 Biosynthesis of the Nutritionally Nonessential Amino Acids（印刷頁263–268）；Ch. 29 Catabolism of the Carbon Skeletons of Amino Acids（印刷頁280–295）。成人必需胺基酸與Thr分類採本文範圍說明；人類TDH、THA1P基因註記與疾病補充見來源連結。</p><p>正文與圖為原創教學重組，非逐段翻譯。題目取自現有歷屆題庫，官方採計答案與更正版本原樣保留；機轉解析另行撰寫。精選題數不等同完整考頻統計。</p><p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.ncbi.nlm.nih.gov/gene/157739/\">NCBI Gene：人類TDH為pseudogene</a></p><p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.ncbi.nlm.nih.gov/gene/390816/\">NCBI Gene：人類THA1P為pseudogene</a></p><p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.ncbi.nlm.nih.gov/books/NBK1319/\">GeneReviews：Maple Syrup Urine Disease</a></p><p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.ncbi.nlm.nih.gov/books/NBK1504/\">GeneReviews：Phenylalanine Hydroxylase Deficiency</a></p><p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.ncbi.nlm.nih.gov/books/NBK1515/\">GeneReviews：Tyrosinemia Type I</a></p>",
  "sections": [
    {
      "id": "topic-1",
      "title": "先分兩個問題：營養上需不需要，代謝後能變成什麼",
      "html": "<p>上一章追蹤氮如何集合、運送並排出；這一章保留另一半問題：<strong>拿走氮以後，碳骨架去哪裡？</strong>同一個胺基酸可以把氮交給glutamate，碳骨架則進入糖質新生或氧化供能。氮與碳的命運必須分開，不可把「能排成尿素」誤認成「整個分子都變成尿素」。</p>\n<p>「必需胺基酸」是營養供應分類，指人體無法以足夠速率自行合成，須由飲食取得；不表示其他胺基酸不重要。成人一般列九種：<strong>His、Ile、Leu、Lys、Met、Phe、Thr、Trp、Val</strong>。可以拆成BCAA三個Ile／Leu／Val，加上His、Lys、Met、Phe、Thr、Trp六個，而不是硬背一串沒有功能意義的字母。Harper本版部分段落沿用較早期計數，本章以含histidine的九種列表為準。</p>\n<p>非必需胺基酸多能從糖解或TCA中間物取得碳骨架，再加上氮。條件性必需則提醒：平常能合成，不表示生長、疾病、前驅物不足或特定代謝缺陷時仍一定足夠。例如tyrosine平常可由phenylalanine生成，但PAH缺陷時此供應受限；cysteine的硫來自methionine，不能把它視為完全不依賴必需胺基酸的產物。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>分類問題</th>\n<th>依據</th>\n<th>例子</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>必需／非必需</td>\n<td>是否需從飲食供應足量</td>\n<td>Leu必需；Ala通常可自行合成</td>\n</tr>\n<tr class=\"even\">\n<td>生糖／生酮</td>\n<td>碳骨架降解後的出口</td>\n<td>Leu純生酮；Ala生糖</td>\n</tr>\n<tr class=\"odd\">\n<td>側鏈性質</td>\n<td>電荷、極性、芳香環或支鏈</td>\n<td>Leu為支鏈；Lys為鹼性側鏈</td>\n</tr>\n</tbody>\n</table></div>\n<p>三個分類不能互相替代。Lys是必需且純生酮，但不是BCAA；Tyr兼具生糖與生酮出口，卻通常不是營養必需。也沒有專門的「多餘胺基酸儲藏槽」：體蛋白是功能組織，動員會有代價；過量胺基酸會被代謝，不能原封不動長期存成另一個蛋白質倉庫。</p>\n"
    },
    {
      "id": "topic-2",
      "title": "七個出口：從最後落點推生糖與生酮",
      "html": "<figure><div class=\"table-scroll\" tabindex=\"0\"><img src=\"assets/biochemistry/amino-carbon-entries.svg\" alt=\"胺基酸碳骨架的七個代謝入口\" style=\"width:100%;min-width:540px;max-width:780px;height:auto\"></div><figcaption>胺基酸碳骨架的七個代謝入口。圖中為教學模型；手機可橫向捲動，條件與例外見正文。</figcaption></figure><p>常用的七個匯流點是<strong>pyruvate、oxaloacetate、α-ketoglutarate、succinyl-CoA、fumarate、acetyl-CoA、acetoacetate／acetoacetyl-CoA</strong>。前五種可與糖質新生接軌，後兩類對應生酮碳。這是整理途徑的入口圖，不表示每個胺基酸只經一步就直接變成該中間物。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>代表出口</th>\n<th>代表來源</th>\n<th>讀法</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Pyruvate</td>\n<td>Ala、Ser、Cys；Gly可經Ser銜接</td>\n<td>三碳可經pyruvate carboxylase到OAA</td>\n</tr>\n<tr class=\"even\">\n<td>Oxaloacetate</td>\n<td>Asp、Asn</td>\n<td>Asp轉胺；Asn先去醯胺氮</td>\n</tr>\n<tr class=\"odd\">\n<td>α-Ketoglutarate</td>\n<td>Glu、Gln、Pro、Arg、His</td>\n<td>多先匯集成Glu相關中間物</td>\n</tr>\n<tr class=\"even\">\n<td>Succinyl-CoA</td>\n<td>Val、Ile、Met、Thr的相關路徑</td>\n<td>需注意propionyl-CoA及B12接點</td>\n</tr>\n<tr class=\"odd\">\n<td>Fumarate</td>\n<td>Phe、Tyr</td>\n<td>芳香族碳骨架分解後的一個出口</td>\n</tr>\n<tr class=\"even\">\n<td>Acetyl-CoA／acetoacetate類</td>\n<td>Leu、Lys及部分混合型胺基酸</td>\n<td>供氧化或酮體相關用途，不能淨生糖</td>\n</tr>\n</tbody>\n</table></div>\n<p><strong>Leu與Lys是典型純生酮二人組。</strong>Ile、Phe、Tyr、Trp具有明確的生糖與生酮分支。許多考試表格再把Thr列入混合型形成五個口訣，但Thr涉及物種與路徑範圍，後面另作說明；遇到精確人體代謝題不要只憑口訣。</p>\n<p>為什麼acetyl-CoA進TCA仍不能淨生糖？TCA需要原有OAA接住二碳acetyl-CoA，轉一圈再生OAA，沒有憑空淨多出可抽走的四碳骨架；人體也沒有可用來把acetyl-CoA大量淨轉成糖的glyoxylate\ncycle。因此「能在TCA供能」與「能為糖質新生淨供碳」是兩種判準。脂肪酸氧化產的acetyl-CoA能支持糖質新生的能量與調控，並不等於其碳成為淨葡萄糖來源。</p>\n"
    },
    {
      "id": "topic-3",
      "title": "從糖解與TCA反向建立胺基酸：先記三組轉胺配對",
      "html": "<p>把酮酸與胺基酸並排看，最容易建立骨架記憶：<strong>pyruvate↔︎alanine、oxaloacetate↔︎aspartate、α-ketoglutarate↔︎glutamate</strong>。轉胺反應搬動的是胺基，不是把整個胺基酸碳鏈切碎重接。典型反應需要pyridoxal\nphosphate（PLP，維生素B6衍生物），由酵素決定受質專一性。</p>\n<p>例如ALT可催化alanine＋α-ketoglutarate⇌pyruvate＋glutamate。Ala三碳仍在pyruvate，α-KG五碳仍在Glu；只是氮換位置。AST則把Asp的胺基與α-KG交換，形成OAA與Glu。這也說明為什麼AST／ALT連結碳代謝與氮代謝，但不是直接催化尿素生成。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>碳源</th>\n<th>合成產物</th>\n<th>不能省略的概念</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Pyruvate</td>\n<td>Alanine</td>\n<td>需有氮供應，常由Glu轉移</td>\n</tr>\n<tr class=\"even\">\n<td>OAA</td>\n<td>Aspartate</td>\n<td>四碳骨架保留</td>\n</tr>\n<tr class=\"odd\">\n<td>α-KG</td>\n<td>Glutamate及相關家族</td>\n<td>與氮的集合站相連</td>\n</tr>\n<tr class=\"even\">\n<td>3-Phosphoglycerate</td>\n<td>Serine</td>\n<td>先氧化、轉胺，再去磷酸，不是3-PG直接換名</td>\n</tr>\n<tr class=\"odd\">\n<td>Phenylalanine</td>\n<td>Tyrosine</td>\n<td>羥化需要PAH及BH4，非一般轉胺</td>\n</tr>\n</tbody>\n</table></div>\n<p>Serine合成從糖解中間物3-phosphoglycerate開始，經氧化形成相應酮酸、轉胺，再移去磷酸。這提供一個容易混淆的對照：脂質合成常用的是glycerol-3-phosphate，serine碳源則是3-phosphoglycerate；名字都有「3」與phosphate，但分子氧化態與代謝任務不同。</p>\n<p>還要避免「所有胺基酸第一步必為轉胺」。多數使用此策略，但Lys、Pro等有不同的初始去氮反應，Thr也不能硬套成一個典型α-aminotransferase反應。先用常見規則建地圖，再保留例外，比背成全稱命題更安全。</p>\n"
    },
    {
      "id": "topic-4",
      "title": "Glutamate家族與Aspartate家族：把多個名字收斂成兩個TCA點",
      "html": "<p>Gln、Glu、Pro、Arg、His名稱不同，碳骨架卻可匯向α-KG。Gln先由glutaminase移去側鏈醯胺氮成Glu；Glu再經轉胺或glutamate\ndehydrogenase相關反應接到α-KG。注意Gln有兩個氮：去醯胺形成Glu後，α-胺基仍在，不能說一次水解就把所有氮清空。</p>\n<p>Proline是環狀胺基酸，其碳骨架經pyrroline-5-carboxylate／glutamate\nsemialdehyde相關中間物轉向Glu。Arginine經arginase形成urea與ornithine，ornithine再可接到Glu相關代謝。尿素帶走的是特定氮與碳，不是整條Arg碳鏈都離開身體；剩餘骨架仍有用途。</p>\n<p>Histidine經urocanate等中間物形成FIGLU（formiminoglutamate），再把formimino基團交給THF後形成Glu。因此His是生糖性，但出口應記<strong>Glu→α-KG</strong>，不是succinyl-CoA。葉酸不足時FIGLU處理受限，是一碳代謝與胺基酸分解相接的考點；詳細THF各種一碳形式放在下一章。</p>\n<p>Asp與Asn則收斂到OAA。Asparaginase將Asn變成Asp並釋出醯胺氮；AST再使Asp碳骨架變成OAA。反向合成Asn需要asparagine\nsynthetase，人體典型使用glutamine提供醯胺氮，並需要ATP，不能把降解的水解反應直接當作不花能量的合成方法。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>家族</th>\n<th>氮處理重點</th>\n<th>碳落點</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Gln→Glu</td>\n<td>先處理側鏈醯胺氮</td>\n<td>α-KG</td>\n</tr>\n<tr class=\"even\">\n<td>Pro／Arg→Glu相關中間物</td>\n<td>環打開或經ornithine等步驟</td>\n<td>α-KG</td>\n</tr>\n<tr class=\"odd\">\n<td>His→FIGLU→Glu</td>\n<td>THF接formimino基團</td>\n<td>α-KG</td>\n</tr>\n<tr class=\"even\">\n<td>Asn→Asp</td>\n<td>Asparaginase去醯胺氮</td>\n<td>OAA</td>\n</tr>\n</tbody>\n</table></div>\n<p>做選擇題時，把His誤連succinyl-CoA是常見陷阱。看到His先想「FIGLU、THF、Glu」，三個字連起來，就能回到正確五碳入口。</p>\n"
    },
    {
      "id": "topic-5",
      "title": "三碳出口：Alanine、Serine、Glycine與Cysteine",
      "html": "<p>Alanine的三碳最直接：ALT轉胺後就是pyruvate。肌肉把部分胺基交給pyruvate形成Ala，Ala到肝後又可轉回pyruvate供糖質新生。這條glucose–alanine\ncycle同時搬運碳與氮；它本身不是憑空產生能量，肝臟把碳做回糖及處理氮都需要能量支持。</p>\n<p>Serine可經PLP依賴的脫水／脫胺反應轉成pyruvate，也可經serine\nhydroxymethyltransferase與glycine互轉。Ser是三碳，Gly是二碳，差的一碳可以交給THF。因此「Ser變Gly」不是單純把一個碳當CO₂丟掉，而是能保留為一碳代謝的資源。</p>\n<p>Gly也有glycine cleavage\nsystem可分解成CO₂、氨，並將一碳交給THF；不是所有Gly都必須先變Ser再變pyruvate。分類圖把Gly列為生糖，是在說存在可接入生糖骨架的代謝關係，並不是承諾每一分子Gly在所有條件都完整保留兩個碳製糖。</p>\n<p>Cys的碳骨架可轉為pyruvate，硫則經其他反應處理。合成Cys時，Ser提供主要碳骨架，Met經homocysteine等步驟提供硫；因此不要把「Cys由Met衍生」誤讀成「Cys的全部三個碳也都來自Met」。下一章會把transsulfuration與SAM循環接起來。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>易混名字</th>\n<th>指的是什麼</th>\n<th>與碳骨架的關係</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Cysteine</td>\n<td>單個含硫胺基酸</td>\n<td>可走向pyruvate</td>\n</tr>\n<tr class=\"even\">\n<td>Cystine</td>\n<td>兩個Cys以雙硫鍵相連</td>\n<td>還原後回到兩個Cys</td>\n</tr>\n<tr class=\"odd\">\n<td>Homocysteine</td>\n<td>Met代謝相關的四碳含硫中間物</td>\n<td>可再甲基化或走transsulfuration</td>\n</tr>\n<tr class=\"even\">\n<td>Cystathionine</td>\n<td>Ser與homocysteine結合形成</td>\n<td>拆解可產Cys與α-ketobutyrate等</td>\n</tr>\n</tbody>\n</table></div>\n<p>學這一組最好真的數碳：Ala／Ser／Cys都三碳，Gly二碳；三碳到pyruvate很直觀，但兩碳Gly必須把一碳交換與其他路徑算進去，不能只按名字猜。</p>\n"
    },
    {
      "id": "topic-6",
      "title": "BCAA共同前兩步：先轉胺，再氧化脫羧",
      "html": "<p>支鏈胺基酸只有<strong>Leu、Ile、Val</strong>。Lys雖然也以L開頭，而且與Leu一起屬純生酮，側鏈卻不是這組BCAA分類。三者都是必需胺基酸，但降解後的碳出口不同。</p>\n<p>第一步由branched-chain\naminotransferase（BCAT）把胺基交給α-KG，生成Glu及對應branched-chain\nα-keto\nacid。BCAT使用PLP，骨骼肌的相關轉胺能力相對肝臟高，因此不能將所有胺基酸的起始分解都畫在肝。這也不等於肝臟完全不能處理後續BCAA酮酸，更不表示BCAA只在肌肉代謝。</p>\n<p>第二步由粒線體branched-chain α-ketoacid dehydrogenase\ncomplex（BCKDH）進行氧化脫羧，形成少一碳的branched\nacyl-CoA並產生NADH。這與PDH、α-KGDH在化學策略上相似：先脫羧，再把剩餘醯基交給CoA，並回收氧化還原載體。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>步驟</th>\n<th>酵素</th>\n<th>輔因子與產物重點</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>胺基轉移</td>\n<td>BCAT</td>\n<td>PLP；形成支鏈α-酮酸及Glu</td>\n</tr>\n<tr class=\"even\">\n<td>氧化脫羧</td>\n<td>BCKDH</td>\n<td>TPP、lipoamide、CoA、FAD、NAD⁺；形成acyl-CoA、CO₂、NADH</td>\n</tr>\n<tr class=\"odd\">\n<td>後續分解</td>\n<td>各支鏈的不同酵素</td>\n<td>才決定生糖或生酮出口</td>\n</tr>\n</tbody>\n</table></div>\n<p>五個輔因子可沿用PDH的記憶鏈：B1→TPP、B2→FAD、B3→NAD⁺、B5→CoA，加lipoate。<strong>B6負責前一步轉胺，不是用來取代BCKDH的TPP。</strong>調控上，BCKDH被其kinase磷酸化時活性降低，去磷酸化則較活化；不能把「磷酸化＝活化」套到所有代謝酵素。</p>\n"
    },
    {
      "id": "topic-7",
      "title": "BCAA分流與MSUD：同一個共同阻塞，三種胺基酸一起堆積",
      "html": "<p>經過共同前兩步後，三條路開始分流。Leu最後形成acetyl-CoA與acetoacetate，屬純生酮；Val主要經propionyl-CoA到succinyl-CoA，屬生糖；Ile同時提供acetyl-CoA與propionyl-CoA，因此兼具生酮與生糖。三個一起背起點，再分出口，比三條獨立死背更省力。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>胺基酸</th>\n<th>主要末端出口</th>\n<th>分類</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Leucine</td>\n<td>Acetyl-CoA＋acetoacetate</td>\n<td>純生酮</td>\n</tr>\n<tr class=\"even\">\n<td>Valine</td>\n<td>Propionyl-CoA→succinyl-CoA</td>\n<td>生糖</td>\n</tr>\n<tr class=\"odd\">\n<td>Isoleucine</td>\n<td>Acetyl-CoA＋propionyl-CoA→succinyl-CoA</td>\n<td>兩者皆有</td>\n</tr>\n</tbody>\n</table></div>\n<p>Maple syrup urine\ndisease（MSUD）的典型共同缺陷在BCKDH，所以血中BCAA與其對應α-酮酸可累積。<strong>酵素名稱是支鏈「酮酸」去氫酵素，疾病卻可看到上游「胺基酸」升高</strong>，原因是整條通量受阻、前後反應連動，不是每種堆積物都必須是缺陷酵素的直接受質。Alloisoleucine可作重要生化線索，不能單憑尿味確立分型。</p>\n<p>若題目是Leu後段的isovaleryl-CoA dehydrogenase缺陷，則想到isovaleric\nacidemia，位置已在三條路分開之後；不應把它等同BCKDH共同阻塞。這個「共同閘門與分支閘門」概念也能用在其他代謝病：共同步驟受阻，影響一群受質；後段獨立步驟受阻，影響較特定分支。</p>\n<p>E3 dihydrolipoamide\ndehydrogenase與其他α-酮酸去氫酵素複合體共享，因此E3缺陷可能有更廣泛的能量代謝異常，不能把所有BCKDH相關缺陷都當成完全相同表型。考試先掌握典型MSUD的BCKDH，再依題幹出現的lactate、其他酮酸與遺傳資訊往下細分。</p>\n"
    },
    {
      "id": "topic-8",
      "title": "Propionyl-CoA接回TCA：Biotin與B12是兩道不同的關卡",
      "html": "<p>Val、Ile、Met及Thr相關分解途徑可以匯向propionyl-CoA；奇數鏈脂肪酸最後也留下propionyl-CoA。這使胺基酸分解與前面脂肪酸氧化章節連在一起。Propionyl-CoA只有三碳，不能直接改名字成四碳succinyl-CoA，必須先加上一個碳，再重排。</p>\n<p>第一步propionyl-CoA\ncarboxylase使用biotin、HCO₃⁻與ATP，形成methylmalonyl-CoA；經epimerase調整立體構型後，由methylmalonyl-CoA\nmutase利用adenosylcobalamin（B12）進行碳骨架重排，得到succinyl-CoA。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>關卡</th>\n<th>動作</th>\n<th>需要什麼</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Propionyl-CoA carboxylase</td>\n<td>3C加CO₂成4C</td>\n<td>Biotin＋ATP＋HCO₃⁻</td>\n</tr>\n<tr class=\"even\">\n<td>Methylmalonyl-CoA epimerase</td>\n<td>改立體構型</td>\n<td>不負責加碳，也不是B12的mutase步驟</td>\n</tr>\n<tr class=\"odd\">\n<td>Methylmalonyl-CoA mutase</td>\n<td>4C骨架重排成succinyl-CoA</td>\n<td>Adenosyl-B12</td>\n</tr>\n</tbody>\n</table></div>\n<p>Methylmalonic\nacid升高可來自mutase本身或cobalamin相關代謝異常，也可見於B12缺乏；不能只看到MMA就認定一定是單一MMUT基因缺陷。相反地，propionyl-CoA\ncarboxylase缺陷是更上游的propionic\nacidemia，不能把biotin與B12交換配對。</p>\n<p>以Ile作算例：它有一支形成acetyl-CoA，另一支形成propionyl-CoA，後者才經上述三步接TCA。若B12依賴步驟受限，受影響的是propionyl→succinyl這條支線，不等於Ile所有每一步反應都直接使用B12。Met也可經homocysteine、cystathionine後留下α-ketobutyrate，再到propionyl-CoA；Met的甲基循環與剩餘碳鏈要分別追蹤。</p>\n"
    },
    {
      "id": "topic-9",
      "title": "Phenylalanine到Tyrosine：酵素正常也可能缺輔因子",
      "html": "<figure><div class=\"table-scroll\" tabindex=\"0\"><img src=\"assets/biochemistry/amino-phe-bh4.svg\" alt=\"PAH缺陷與BH4缺陷的分別\" style=\"width:100%;min-width:540px;max-width:780px;height:auto\"></div><figcaption>PAH缺陷與BH4缺陷的分別。圖中為教學模型；手機可橫向捲動，條件與例外見正文。</figcaption></figure><p>Phenylalanine\nhydroxylase（PAH）把Phe羥化成Tyr，使用O₂及tetrahydrobiopterin（BH4）。一個氧原子加入芳香環，另一個被還原成水，BH4提供反應所需的還原能力並需再生。因此這是羥化與氧化還原反應，不是PLP轉胺。</p>\n<p>PAH缺陷會限制Phe進入Tyr路徑，使Phe升高，另有部分碳流改走phenylpyruvate、phenyllactate、phenylacetate等支路。Phenylketonuria名稱指向這些替代代謝物，但不要把尿液中某個代謝物或氣味當成唯一、無條件的診斷標準。Tyr合成受限後，原本可自行供應的Tyr在此情境變得條件性必需。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>障礙</th>\n<th>PAH蛋白是否一定本身異常</th>\n<th>其他重要後果</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>PAH deficiency</td>\n<td>直接涉及PAH活性／功能</td>\n<td>Phe清除受限，Tyr供應受影響</td>\n</tr>\n<tr class=\"even\">\n<td>BH4合成或再生缺陷</td>\n<td>不一定</td>\n<td>可同時影響Tyr hydroxylase、Trp hydroxylase相關神經傳遞物合成</td>\n</tr>\n<tr class=\"odd\">\n<td>Tyrosinase缺陷</td>\n<td>不是PAH</td>\n<td>涉及melanin支路，不能直接當成PKU</td>\n</tr>\n</tbody>\n</table></div>\n<p>如果題目說Phe與phenylpyruvate升高，但PAH檢測正常，要想到輔因子供應／再生是否有問題，例如dihydropteridine\nreductase相關缺陷。這一層為何重要？BH4不只服務PAH，也服務catecholamine與serotonin合成中的羥化步驟，所以降低Phe並不自動等於其他神經傳遞物問題都被解決。</p>\n<p>這裡只建立生化分類，不把所有hyperphenylalaninemia都稱作同一種PAH缺陷，也不以舊題的PKU廣義用法取代現代精確病因分類。實際判讀須把Phe、Tyr、輔因子相關檢測與酵素／基因資訊一起看。</p>\n"
    },
    {
      "id": "topic-10",
      "title": "Tyrosine降解：同一路徑不同阻塞，疾病完全不同",
      "html": "<p>Tyr先經tyrosine\naminotransferase形成p-hydroxyphenylpyruvate，再經4-hydroxyphenylpyruvate\ndioxygenase形成homogentisate，接著由homogentisate\ndioxygenase開環，經maleylacetoacetate、fumarylacetoacetate，最後由fumarylacetoacetate\nhydrolase（FAH）產生fumarate與acetoacetate。正因最後一刀同時得到生糖與生酮碳，Tyr與上游Phe都屬混合型。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>阻塞酵素</th>\n<th>代表疾病</th>\n<th>定位線索</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>PAH</td>\n<td>PAH deficiency／典型PKU</td>\n<td>還沒從Phe進到Tyr</td>\n</tr>\n<tr class=\"even\">\n<td>Tyrosine aminotransferase</td>\n<td>Tyrosinemia type II</td>\n<td>Tyr降解起始轉胺步驟</td>\n</tr>\n<tr class=\"odd\">\n<td>4-Hydroxyphenylpyruvate dioxygenase</td>\n<td>Tyrosinemia type III</td>\n<td>Tyr轉胺之後的步驟</td>\n</tr>\n<tr class=\"even\">\n<td>Homogentisate dioxygenase</td>\n<td>Alkaptonuria</td>\n<td>Homogentisate堆積，尿放置後變深、ochronosis等</td>\n</tr>\n<tr class=\"odd\">\n<td>FAH</td>\n<td>Tyrosinemia type I</td>\n<td>末端分解受阻，succinylacetone是重要指標</td>\n</tr>\n</tbody>\n</table></div>\n<p>Alkaptonuria並不是「所有tyrosine都變成黑色」。關鍵是homogentisate無法正常往下處理，排出後氧化等反應使尿液變深，長期可與結締組織色素沉積及關節問題相關。這與血紅素合成異常的porphyria也不是同一條路，不能只靠尿色分類。</p>\n<p>Tyrosinemia type\nI的FAH缺陷可伴嚴重肝臟及腎小管問題；succinylacetone比「Tyr升高」更能指向特定阻塞。Tyr升高本身並不專一，不能憑它直接區分type\nI、II、III或其他肝臟情況。Succinylacetone還可抑制ALA\ndehydratase，提供下一批heme代謝章節的連結，但不代表FAH原本就是heme合成酵素。</p>\n<p>做題時先在直線上標酵素，再看堆積物位於哪一段。相似病名不可靠，碳流與受質位置才可靠。</p>\n"
    },
    {
      "id": "topic-11",
      "title": "Tryptophan、Lysine與Threonine：不要把表格口訣當成完整人體路徑",
      "html": "<p>Tryptophan的分解可經kynurenine路徑，產生alanine相關碳流及最終acetoacetyl-CoA等生酮出口，因此兼具生糖與生酮。Trp也可作niacin／NAD相關合成及serotonin、melatonin前驅物，但這些是不同分支，不能把「Trp能做serotonin」當成它分類為生糖的理由。分類仍要看碳骨架的代謝出口。</p>\n<p>Lysine是純生酮，典型分解涉及saccharopine等中間物，與多數胺基酸先做一般α-轉胺的簡圖不同。Lys有α-與ε-胺基，不代表可以用兩次相同ALT反應就完成分解。考試可先抓「Lys與Leu純生酮」及「Lys不是BCAA」兩個穩定支點，再逐步加上專屬路徑。</p>\n<p><strong>Thr是需要保留範圍的例外。</strong>很多教學總表把Ile、Phe、Tyr、Trp、Thr列為五種混合型，反映把不同threonine降解支路一起納入的傳統分類；Harper第31版Table29-1則將Thr列為生糖性，且其他頁面仍描述到glycine與acetyl-CoA的路徑。不能把這兩種整理方式假裝成完全相同。</p>\n<p>以人體實際酵素背景來看，TDH（threonine\ndehydrogenase）為pseudogene，不能把其他哺乳動物的功能性TDH路徑不加區分地搬過來。人體重要的Thr分解方向為dehydratase產α-ketobutyrate，再到propionyl-CoA、succinyl-CoA，支持生糖性分類。對於教材另畫的aldolase支路，也要注意人類相應基因的限制，不能以一張跨物種圖證明人體具有同樣通量。</p>\n<p>因此本章自編題若要問Thr，會指定「經α-ketobutyrate→propionyl-CoA這條路徑」；歷屆原題則保留原題範圍及官方答案，不自行替題目增加條件。穩定的核心是Leu／Lys純生酮，以及Ile／Phe／Tyr／Trp具有混合出口；不要為了一句口訣犧牲分子機轉的精確性。</p>\n"
    },
    {
      "id": "topic-12",
      "title": "用一個代謝阻塞框架整理全部疾病",
      "html": "<p>遇到先天代謝異常題，依序問四件事：正常反應是什麼？阻塞前哪些物質可能增加？阻塞後哪些產物可能不足？還有沒有替代支路或其他使用同一輔因子的酵素？這能同時解釋PAH缺陷的Phe增加與Tyr不足，以及BH4缺陷為何影響範圍更大。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>看到的組合</th>\n<th>優先回到哪個位置</th>\n<th>先排除的混淆</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Leu／Ile／Val與支鏈酮酸增加</td>\n<td>BCKDH共同步驟</td>\n<td>不是單獨Lys分解或PAH</td>\n</tr>\n<tr class=\"even\">\n<td>Phe及phenylpyruvate增加</td>\n<td>Phe→Tyr／BH4系統</td>\n<td>不等於Phe吸收不良或食物過敏</td>\n</tr>\n<tr class=\"odd\">\n<td>Homogentisate相關黑尿</td>\n<td>Homogentisate dioxygenase</td>\n<td>不等於FAH或tyrosinase</td>\n</tr>\n<tr class=\"even\">\n<td>Succinylacetone、肝腎問題</td>\n<td>FAH末端步驟</td>\n<td>不只寫「Tyr偏高」就結束</td>\n</tr>\n<tr class=\"odd\">\n<td>Methylmalonic acid增加</td>\n<td>Mutase／cobalamin相關接點</td>\n<td>Biotin在前一步carboxylase</td>\n</tr>\n<tr class=\"even\">\n<td>Asn或Asp的碳去向</td>\n<td>OAA</td>\n<td>不因名字有amino就自動生酮</td>\n</tr>\n</tbody>\n</table></div>\n<p>再用碳數驗證分類：Leu即使可在TCA產能，仍不能提供淨生糖碳；Val經三碳propionyl補一碳後可到四碳succinyl；Phe／Tyr最後分成fumarate與acetoacetate，所以同一分子能有兩種出口。這些是能推導的結果，不必只靠列表記憶。</p>\n<p>也要把「代謝酵素缺陷」與「運輸蛋白缺陷」分開。尿中某胺基酸增加，可能是血中負荷高，也可能是腎小管回收異常；不一定表示其分解酵素壞掉。前者追碳流阻塞，後者追跨膜位置。相同檢驗名稱背後可以是完全不同的生理原因。</p>\n<p>最後，受質可能有毒不代表患者完全不需要該胺基酸。必需胺基酸仍是蛋白質合成原料，且分解體蛋白本身也會釋出受質；國考的機轉題不能簡化為「把所有蛋白質停掉就好」。本章要掌握的是受質負荷、殘存代謝能力與營養需求的平衡概念，個別飲食與治療則需依疾病與臨床情況訂定。</p>\n"
    }
  ],
  "recalls": [
    [
      "必需胺基酸與生糖胺基酸是在回答同一問題嗎？",
      "不是。必需性問飲食是否須供足量；生糖性問碳骨架降解後能否淨供糖質新生。Leu既必需又純生酮，兩種分類可以交叉。"
    ],
    [
      "Acetyl-CoA能進TCA，為何仍不能淨生糖？",
      "TCA再生原有OAA，沒有因加入二碳acetyl-CoA而淨增加可抽走的四碳骨架；人體也沒有可作此用途的glyoxylate cycle。"
    ],
    [
      "三組最重要的酮酸與胺基酸轉胺配對？",
      "Pyruvate／alanine、oxaloacetate／aspartate、α-ketoglutarate／glutamate；典型轉胺需要PLP，碳骨架不因搬氮而互換。"
    ],
    [
      "Histidine應接succinyl-CoA還是α-KG？",
      "經FIGLU、THF接一碳相關基團、Glu等步驟，最後接α-KG；不能把His列入propionyl-CoA那一組。"
    ],
    [
      "Serine變成glycine少的一碳去哪裡？",
      "經serine hydroxymethyltransferase可交給THF，形成5,10-methylene-THF；不必一律當成CO₂丟掉。"
    ],
    [
      "BCAT與BCKDH各使用哪類輔因子？",
      "BCAT是PLP依賴轉胺；BCKDH是氧化脫羧複合體，需TPP、lipoamide、CoA、FAD及NAD⁺，不能把前一步的B6換成後一步全部工具。"
    ],
    [
      "Leu、Ile、Val的末端碳出口如何分開？",
      "Leu純生酮；Val經propionyl-CoA到succinyl-CoA而生糖；Ile同時提供acetyl-CoA與propionyl-CoA，因此混合型。"
    ],
    [
      "Propionyl-CoA到succinyl-CoA，biotin與B12各做什麼？",
      "Biotin參與carboxylase加碳，另需ATP及HCO₃⁻；經epimerase後，adenosyl-B12參與mutase碳骨架重排。"
    ],
    [
      "PAH活性正常但Phe升高，還要檢查哪一層？",
      "BH4合成與再生是否正常；輔因子缺陷可限制PAH反應，並影響其他BH4依賴的芳香族胺基酸羥化酵素。"
    ],
    [
      "Alkaptonuria與tyrosinemia I分別阻在哪裡？",
      "前者為homogentisate dioxygenase相關缺陷；後者為FAH缺陷，succinylacetone是重要定位線索，不能只靠Tyr高或尿色分型。"
    ],
    [
      "為何Thr不能不分範圍背成一律混合型？",
      "傳統表格納入不同支路，但人類TDH為pseudogene；本文指定Thr經α-ketobutyrate、propionyl-CoA到succinyl-CoA時屬生糖碳流。"
    ],
    [
      "看到代謝物堆積時，最先問哪四件事？",
      "正常反應、阻塞前受質、阻塞後產物、替代支路或共用輔因子；另須排除運輸缺陷，而不是看到尿中胺基酸多就認定分解酵素壞掉。"
    ]
  ],
  "readingIntro": "先把氮帳與碳帳分開，再看七個出口；同一條路用正常反應、阻塞前累積、阻塞後不足三層推理，不只背疾病名稱。",
  "figure": "<p>先追氮與碳的去向，再讀輔因子、跨器官分工與代謝阻塞。每節末可閉卷回答，歷屆題分組連回對應小節。</p>",
  "questions": [
    {
      "title": "01　一名學生說「Lys是純生酮，所以不是營養必需」，錯在哪裡？",
      "prompt": "<p>一名學生說「Lys是純生酮，所以不是營養必需」，錯在哪裡？</p>",
      "answer": "<p>把兩種分類混用。Lys是九種成人必需胺基酸之一，同時碳分解屬純生酮；生酮性不能決定飲食需求。</p>"
    },
    {
      "title": "02　Alanine將胺基交給α-KG後，三碳與五碳各去哪裡？",
      "prompt": "<p>Alanine將胺基交給α-KG後，三碳與五碳各去哪裡？</p>",
      "answer": "<p>Ala的三碳成pyruvate；α-KG的五碳成Glu。ALT搬的是氮，沒有把兩條碳鏈交換或接在一起。</p>"
    },
    {
      "title": "03　用TCA中間物直接轉胺製造Ala與Ser，這句為何不精確？",
      "prompt": "<p>用TCA中間物直接轉胺製造Ala與Ser，這句為何不精確？</p>",
      "answer": "<p>直接典型配對為α-KG→Glu與OAA→Asp。Ala由糖解末端pyruvate取得骨架；Ser合成源於3-phosphoglycerate，還需多步反應。</p>"
    },
    {
      "title": "04　Gln經glutaminase變成Glu後，是否已去除全部氮？",
      "prompt": "<p>Gln經glutaminase變成Glu後，是否已去除全部氮？</p>",
      "answer": "<p>沒有。側鏈amide氮被釋出，但α-amino氮仍在Glu，還需轉胺或脫胺等後續處理。</p>"
    },
    {
      "title": "05　BCKDH阻塞為何會同時見Leu、Ile、Val增加，而非只一個？",
      "prompt": "<p>BCKDH阻塞為何會同時見Leu、Ile、Val增加，而非只一個？</p>",
      "answer": "<p>三者先共用BCAT與BCKDH，再各自分流；共同步驟堵塞影響一群上游受質。單獨後段分支酵素缺陷則影響範圍不同。</p>"
    },
    {
      "title": "06　已知Ile產acetyl-CoA與propionyl-CoA，如何推其分類？",
      "prompt": "<p>已知Ile產acetyl-CoA與propionyl-CoA，如何推其分類？</p>",
      "answer": "<p>Acetyl-CoA端是生酮碳；propionyl-CoA可補碳並重排為succinyl-CoA，提供生糖碳。因此Ile兼有兩類出口，不能因為有acetyl-CoA就判純生酮。</p>"
    },
    {
      "title": "07　Biotin不足與B12不足，會卡住propionyl-CoA路徑的同一步嗎？",
      "prompt": "<p>Biotin不足與B12不足，會卡住propionyl-CoA路徑的同一步嗎？</p>",
      "answer": "<p>不會。Biotin用在加碳的propionyl-CoA carboxylase；B12用在後續methylmalonyl-CoA mutase。兩者可影響同一路徑，卻不是同一酵素的替代輔因子。</p>"
    },
    {
      "title": "08　PAH本身缺陷與BH4再生缺陷，為何不能只靠Phe高區分？",
      "prompt": "<p>PAH本身缺陷與BH4再生缺陷，為何不能只靠Phe高區分？</p>",
      "answer": "<p>兩者都可能使Phe→Tyr通量下降。BH4還服務Tyr及Trp hydroxylase，所以需結合輔因子與其他生化／基因資料；不能把所有高Phe都當同一PAH病因。</p>"
    },
    {
      "title": "09　Tyr升高與succinylacetone升高相比，哪個更能定位FAH阻塞？",
      "prompt": "<p>Tyr升高與succinylacetone升高相比，哪個更能定位FAH阻塞？</p>",
      "answer": "<p>Succinylacetone更能指向tyrosinemia I相關位置；Tyr升高可見於多種情況，不能單獨區分I、II、III型或其他肝臟問題。</p>"
    },
    {
      "title": "10　題目指定Thr經α-ketobutyrate→propionyl-CoA→succinyl-CoA，這段是生糖還是生酮？",
      "prompt": "<p>題目指定Thr經α-ketobutyrate→propionyl-CoA→succinyl-CoA，這段是生糖還是生酮？</p>",
      "answer": "<p>這條指定路徑提供生糖碳。不要拿未限定物種與支路的「五種混合型」口訣覆蓋已明確寫出的碳流。</p>"
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
        "title": "合成來源與碳骨架匯流",
        "topic": "topic-3",
        "summary": "用Glu／α-KG、Asp／OAA及家族關係連回糖解與TCA。",
        "questions": [
          {
            "number": 43,
            "text": "43.克氏循環(TCA cycle)的中間產物可經由轉氨基作用(transamination)直接生成下列那兩種胺基酸? \n \nA.精胺酸(arginine)與組胺酸(histidine) \nB.酪胺酸(tyrosine)與脯胺酸(proline) \nC.麩胺酸(glutamate)與天冬胺酸(aspartate) \nD.丙胺酸(alanine)與絲胺酸(serine) \n",
            "regions": [
              {
                "page": 5,
                "rect": [
                  30.0,
                  66.89,
                  570.0,
                  137.69
                ]
              }
            ],
            "id": "105-2-2-43",
            "year": 105,
            "session": 2,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/105/2/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=105100&c=301&s=66&q=1&verify=step1-20261013-105100-301-66-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=105100&y=2016",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/105/2/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=105100&c=301&s=66&q=1&verify=step1-20261013-105100-301-66-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "C"
            ],
            "point": "合成來源與碳骨架匯流",
            "analysis": "C正確：α-KG與OAA可經轉胺分別形成Glu與Asp。A Arg、His不是這兩個TCA中間物直接一次轉胺的產物；B Tyr合成涉及Phe羥化，Pro亦需其他反應；D Ala來自pyruvate，Ser由3-phosphoglycerate多步合成，不是題目所問的TCA中間物直接轉胺組合。",
            "trap": "看到「直接轉胺」就先找α-KG／Glu、OAA／Asp，不只看最終能否互相接通。"
          },
          {
            "number": 93,
            "text": "93.葡萄糖生成性(glucogenic)胺基酸可在酵素作用下直接轉變為克氏循環(TCA cycle)的中間產物,下列何\n者錯誤?\nA.麩胺酸(glutamate)→α-酮基戊二酸(α-ketoglutarate)\nB.組胺酸(histidine)→ 琥珀醯基輔酶A(succinyl-CoA)\nC.天冬胺酸(aspartate)→草醯乙酸(oxaloacetate)\nD.酪胺酸(tyrosine)→反丁烯二酸(fumarate)\n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  175.99,
                  570.0,
                  302.59
                ]
              }
            ],
            "id": "108-2-1-93",
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
            "point": "合成來源與碳骨架匯流",
            "analysis": "B錯：His經FIGLU與Glu相關步驟匯向α-KG，不是succinyl-CoA。A Glu→α-KG與C Asp→OAA為典型配對；D Tyr的降解確可產fumarate，但要經多個反應，題幹的「直接」不能字面解作所有選項都只需一步。",
            "trap": "His→FIGLU→Glu→α-KG；同時分清碳落點與單步酵素反應。"
          },
          {
            "number": 94,
            "text": "94.有關天門冬醯胺(asparagine)的敘述,下列何者錯誤? \nA.為非必需胺基酸(nonessential amino acid) \nB.可代謝成為天門冬胺酸(aspartate) \nC.屬於生酮性胺基酸(ketogenic amino acid) \nD.天門冬醯胺酶(asparaginase)能分解血液中的asparagine \n",
            "regions": [
              {
                "page": 17,
                "rect": [
                  30.0,
                  528.55,
                  570.0,
                  657.55
                ]
              }
            ],
            "id": "112-2-1-94",
            "year": 112,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/112/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=112100&c=301&s=11&q=1&verify=step1-20261013-112100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=112100&y=2023",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/112/2/medicine-1-S.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=S&code=112100&c=301&s=11&q=1&verify=step1-20261013-112100-301-11-S",
            "corrected": false,
            "answerVersion": "S",
            "originalAnswers": [
              "C"
            ],
            "point": "合成來源與碳骨架匯流",
            "analysis": "C錯：Asn先可變Asp，再接OAA，屬生糖性而非生酮性。A通常為非必需胺基酸、B可代謝為Asp、D asparaginase可分解Asn皆符合基本機轉。",
            "trap": "Asn去掉側鏈amide氮仍留下四碳Asp，沿碳骨架即可回到OAA。"
          },
          {
            "number": 93,
            "text": "93.在人體細胞中,下列何種胺基酸是主要用來製造脯胺酸(proline)的前驅物? \n \nA.苯丙胺酸(phenylalanine) \nB.色胺酸(tryptophan) \nC.麩胺酸(glutamate) \nD.酪胺酸(tyrosine) \n",
            "regions": [
              {
                "page": 17,
                "rect": [
                  30.0,
                  603.78,
                  570.22,
                  732.78
                ]
              }
            ],
            "id": "115-2-1-93",
            "year": 115,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/115/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=115090&c=301&s=0101&q=1&verify=step1-20261013-115090-301-0101-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=115090&y=2026",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/115/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=115090&c=301&s=0101&q=1&verify=step1-20261013-115090-301-0101-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "C"
            ],
            "point": "合成來源與碳骨架匯流",
            "analysis": "C Glu正確，可經glutamate semialdehyde／pyrroline-5-carboxylate相關步驟形成Pro。A Phe、B Trp與D Tyr不是人體製造Pro的主要直接前驅家族。",
            "trap": "Pro是環狀，但先記它屬Glu家族；不是所有環狀側鏈都從芳香族胺基酸製造。"
          }
        ]
      },
      {
        "id": "group-2",
        "title": "BCAA共同阻塞與propionyl-CoA出口",
        "topic": "topic-7",
        "summary": "共用BCKDH解釋三種堆積，再以biotin及B12定位後段。",
        "questions": [
          {
            "number": 45,
            "text": "45 \n一位新生兒的血液篩檢發現有白胺酸(leucine)、異白胺酸(isoleucine)及纈胺酸(valine)的堆積,\n懷疑是楓糖漿尿症(maple syrup urine disease)的患者,必須終身作嚴格的飲食控制。下列那個酵素\n的功能障礙,最可能是這個疾病的原因? \nA胺甲醯磷酸鹽合成(carbamoyl phosphate synthetase) \nB黑尿酸氧化(homogentisic acid oxidase) \nC支鏈酮酸去氫酵素(branched-chain α–keto acid dehydrogenase) \nD苯丙胺酸羥化(phenylalanine hydroxylase) \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  270.39,
                  570.22,
                  364.89
                ]
              }
            ],
            "id": "101-2-2-45",
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
            "point": "BCAA共同阻塞與propionyl-CoA出口",
            "analysis": "C BCKDH為MSUD的典型缺陷，Leu、Ile、Val共同降解受阻。A carbamoyl phosphate synthetase連到氮代謝／核苷酸相關路徑，非BCAA共同酮酸分解；B homogentisate oxidase連到黑尿症；D PAH連到Phe→Tyr障礙。題幹提到飲食控制，本文不據此提供個人飲食處方。",
            "trap": "酵素受質叫支鏈酮酸，但上游BCAA也會增加；不要只找字面完全相同的代謝物。"
          },
          {
            "number": 43,
            "text": "43 \n下列那一種胺基酸無法代謝時會導致甲基丙二酸血症(methylmalonic acidemia)? \nalanine\nA\n \nBglycine \nCisoleucine \nDhistidine \n",
            "regions": [
              {
                "page": 5,
                "rect": [
                  30.0,
                  649.83,
                  570.22,
                  685.23
                ]
              }
            ],
            "id": "104-1-2-43",
            "year": 104,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/104/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=104030&c=101&s=0102&q=1&verify=step1-20261013-104030-101-0102-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=104030&y=2015",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/104/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=104030&c=101&s=0102&q=1&verify=step1-20261013-104030-101-0102-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "C"
            ],
            "point": "BCAA共同阻塞與propionyl-CoA出口",
            "analysis": "C Ile的一部分碳經propionyl-CoA、methylmalonyl-CoA到succinyl-CoA，可連到methylmalonic acidemia相關阻塞。A Ala主要到pyruvate；B Gly可經Ser及一碳代謝等處理；D His主要匯向Glu／α-KG，均不是選項中此典型支線。",
            "trap": "MMA升高可能涉及mutase或cobalamin代謝，不等於每一例都是Ile入口酵素本身壞掉。"
          }
        ]
      },
      {
        "id": "group-3",
        "title": "Phe→Tyr：酵素、輔因子與下游不足",
        "topic": "topic-9",
        "summary": "同時追Phe累積、Tyr供應下降及BH4的其他用途。",
        "questions": [
          {
            "number": 37,
            "text": "37 \n一位3 個月大男嬰的血清中,有兩個化合物的濃度較高,包括苯丙胺酸(phenylalanine)與苯丙酮酸\n(phenylpyruvate),懷疑是苯酮尿症(phenylketonuria),但檢驗測得的苯丙胺酸羥化酶(Phenylalanine \nhydroxylase)活性卻正常。若下列那個酵素檢驗項目異常,仍可以支持你的苯酮尿症診斷? \nA酪胺酸酶(tyrosinase) \n \nB雙氫喋啶還原酵素(dihydrobiopterin reductase) \nC黑尿酸氧化酶(homogentisic acid oxidase) \nD多巴胺羥化酶(dopamine hydroxylase) \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  157.1,
                  570.22,
                  262.09
                ]
              }
            ],
            "id": "100-1-2-37",
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
            "point": "Phe→Tyr：酵素、輔因子與下游不足",
            "analysis": "B為題目所指的BH4再生相關還原酵素缺陷；即使PAH本身活性檢查正常，體內缺乏可用BH4仍可阻礙Phe羥化。A tyrosinase涉及melanin，C homogentisate oxidase涉及Tyr分解及黑尿症，D dopamine hydroxylase涉及catecholamine後段，不是此Phe清除關卡。原題以PKU作較廣義用法，本文另區分PAH缺陷與BH4缺陷。",
            "trap": "酵素蛋白正常不保證整個反應正常，還要檢查輔因子供應與再生。"
          },
          {
            "number": 45,
            "text": "45.體內苯丙胺酸羥化酶(phenylalanine hydroxylase)活性的缺失會導致苯丙酮酸尿症\n(phenylketonuria),此疾病患者會出現下列何種症狀? \n \nA.患者無法自行合成足夠的酪胺酸(tyrosine) \nB.患者尿液中會出現大量的色胺酸(tryptophan) \nC.患者會對苯丙胺酸(phenylalanine)過敏 \nD.患者腸道無法吸收足夠的苯丙胺酸(phenylalanine) \n \n",
            "regions": [
              {
                "page": 5,
                "rect": [
                  30.0,
                  500.81,
                  570.0,
                  584.81
                ]
              }
            ],
            "id": "105-1-2-45",
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
            "point": "Phe→Tyr：酵素、輔因子與下游不足",
            "analysis": "A正確：PAH功能不足使Phe轉Tyr受限，患者自行合成Tyr的供應可能不足。B大量Trp尿不是此缺陷的特徵；C不是Phe過敏；D不是腸道吸收Phe不足，問題在吸收後的細胞內代謝。",
            "trap": "前驅物Phe高與下游Tyr不足可以同時發生；代謝阻塞不是食物過敏或吸收障礙。"
          }
        ]
      },
      {
        "id": "group-4",
        "title": "芳香族碳出口與黑尿症定位",
        "topic": "topic-10",
        "summary": "以fumarate＋acetoacetate解釋混合分類，再辨認路徑中段的阻塞。",
        "questions": [
          {
            "number": 95,
            "text": "95.酪胺酸(tyrosine)與苯丙胺酸(phenylalanine)在體內皆可經由酵素催化形成反丁烯二酸(fumarate)或乙醯\n乙酸(acetoacetate),這兩種胺基酸具有下列何種特性?\n \nA.絕對葡萄糖生成性(glucogenic)\nB.絕對生酮性(ketogenic)\nC.兼具葡萄糖生成性(glucogenic)與生酮性(ketogenic)\nD.不具生酮性(ketogenic)\n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  466.86,
                  569.96,
                  593.97
                ]
              }
            ],
            "id": "110-2-1-95",
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
            "point": "芳香族碳出口與黑尿症定位",
            "analysis": "C正確，Phe經Tyr降解後產fumarate與acetoacetate，前者供生糖碳，後者屬生酮碳。A只生糖、B只生酮及D不具生酮性都漏掉其中一個出口。",
            "trap": "同一胺基酸可切成兩類碳片段；不能只挑其中一個產物替整體分類。"
          },
          {
            "number": 41,
            "text": "41 \nAlkaptonuria 與下列何種酵素缺陷有關? \nABranched-chain α-keto acid dehydrogenase complex \nBHomogentisic acid dioxygenase \nCAlanine transaminase \nDGlutamine amidotransferase \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  139.86,
                  570.0,
                  212.39
                ]
              }
            ],
            "id": "98-1-2-41",
            "year": 98,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/98/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=098020&c=103&s=c021&q=1&verify=step1-20261013-098020-103-c021-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=098020&y=2009",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/98/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=098020&c=103&s=c021&q=1&verify=step1-20261013-098020-103-c021-M",
            "corrected": true,
            "answerVersion": "M",
            "point": "芳香族碳出口與黑尿症定位",
            "analysis": "B homogentisic acid dioxygenase（homogentisate dioxygenase）缺陷對應alkaptonuria。A BCKDH缺陷為MSUD；C ALT是Ala與pyruvate的轉胺；D glutamine amidotransferase不是此Tyr降解開環步驟。",
            "trap": "黑尿症先定位homogentisate，不要與PAH、FAH或heme合成疾病只按尿色混在一起。"
          }
        ]
      }
    ]
  }
});
