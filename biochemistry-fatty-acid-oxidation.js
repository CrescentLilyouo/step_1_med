biochemistryChapters.push({
  "id": "fatty-acid-oxidation",
  "number": "13",
  "title": "脂肪酸氧化與酮體：空腹供能的碳與電子帳",
  "summary": "從活化與carnitine運輸開始，逐步計算β氧化，再連到特殊脂肪酸與跨器官酮體利用。",
  "sources": "Harper’s Illustrated Biochemistry, 31st ed., Ch. 22 Oxidation of Fatty Acids: Ketogenesis（印刷頁207–215）；奇數鏈連結Ch. 19、28；MCAD表現核對GeneReviews。",
  "references": "<p>Harper’s Illustrated Biochemistry, 31st ed., Ch. 22 Oxidation of Fatty Acids: Ketogenesis（印刷頁207–215）；奇數鏈連結Ch. 19、28；MCAD表現核對GeneReviews。</p><p>正文與圖為原創教學重組，非逐段翻譯。題目取自現有歷屆題庫，官方採計答案與更正版本原樣保留；機轉解析另行撰寫。精選題數不等同完整考頻統計。</p><p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.ncbi.nlm.nih.gov/books/NBK1424/\">GeneReviews：Medium-Chain Acyl-Coenzyme A Dehydrogenase Deficiency</a></p>",
  "sections": [
    {
      "id": "topic-1",
      "title": "脂肪的高能量來自哪裡：先看運輸與器官",
      "html": "<p>脂肪酸的碳比葡萄糖更還原，完全氧化時能轉出較多電子；triacylglycerol（TAG）又能以較少水分伴隨的形式儲存，因此是重要的長期能量儲備。但脂肪不是一離開脂肪細胞便直接在血液中燃燒，必須經過動員、運輸、細胞攝取、活化與區室運送。</p>\n<p>脂肪組織TAG水解放出非酯化脂肪酸與glycerol。長鏈非酯化脂肪酸在血中主要與albumin結合；「free\nfatty\nacid」表示未被酯化，不代表全部游離在水相。Glycerol可到肝臟進糖質新生；多數偶數鏈脂肪酸則主要供能，不能淨提供葡萄糖碳。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 50%\" />\n<col style=\"width: 50%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>組織</th>\n<th>脂肪酸／酮體的使用重點</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>肝臟</td>\n<td>氧化脂肪酸以支援供糖，並可產酮；不利用自己產的酮體</td>\n</tr>\n<tr class=\"even\">\n<td>心肌與骨骼肌</td>\n<td>可氧化脂肪酸，亦可利用酮體；取決於狀態</td>\n</tr>\n<tr class=\"odd\">\n<td>腦</td>\n<td>平時依賴葡萄糖；長期空腹增加利用酮體，不把長鏈脂肪酸當主要直接燃料</td>\n</tr>\n<tr class=\"even\">\n<td>成熟紅血球</td>\n<td>無粒線體，不能靠β氧化或酮體氧化製ATP</td>\n</tr>\n</tbody>\n</table></div>\n<p>Lipolysis是水解TAG，β-oxidation是逐段氧化脂肪酸碳鏈。前者主要回答「燃料是否釋放」，後者回答「進細胞後如何使用」。兩者相關，但酵素、位置與產物不同。</p>\n"
    },
    {
      "id": "topic-2",
      "title": "脂肪酸活化：為何一個ATP要扣兩個ATP當量",
      "html": "<p>Acyl-CoA synthetase（thiokinase）使fatty acid＋CoA＋ATP形成fatty\nacyl-CoA＋AMP＋PPi。PPi後續被水解，協助推動整體反應。這不是ATP→ADP的一個高能磷酸鍵支出，而是ATP→AMP，通常記為消耗2\nATP當量。</p>\n<p>活化先形成acyl-adenylate中間物，再由CoA接上脂醯基；因此不能把這一步寫成脂肪酸「被磷酸化」後永久帶著磷酸進粒線體。真正形成的是高能硫酯鍵，CoA的硫與脂肪酸羧基形成連結。</p>\n<p>能量題先圈出起點：若給的是游離palmitate，需扣活化成本；若給的是已活化palmitoyl-CoA，題目通常不再扣同一筆。也不能每跑一圈β氧化就再扣2\nATP，因為縮短後的碳鏈仍以acyl-CoA形式接續反應。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>起點</th>\n<th>後續完整氧化時的活化扣款</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>游離脂肪酸</td>\n<td>通常扣2 ATP當量</td>\n</tr>\n<tr class=\"even\">\n<td>已活化fatty acyl-CoA</td>\n<td>不重複扣原活化成本</td>\n</tr>\n<tr class=\"odd\">\n<td>TAG中的脂肪酸鏈</td>\n<td>先分清水解、活化與glycerol部分，不能只套單鏈答案</td>\n</tr>\n</tbody>\n</table></div>\n<p>「用了幾個ATP分子」與「耗幾個高能磷酸鍵當量」是不同問法。這一步用1個ATP分子，但代價相當於2\nATP→ADP的能量計帳；國考通常在後者的總ATP收支出題。</p>\n"
    },
    {
      "id": "topic-3",
      "title": "Carnitine shuttle：搬的是脂醯基，不是整包CoA",
      "html": "<figure><div class=\"table-scroll\" tabindex=\"0\"><img src=\"assets/biochemistry/lipid-carnitine.svg\" alt=\"長鏈脂醯基經CPT-I、translocase與CPT-II進入粒線體基質\" style=\"width:100%;min-width:540px;max-width:780px;height:auto\"></div><figcaption>長鏈脂醯基經CPT-I、translocase與CPT-II進入粒線體基質。圖中為教學模型；手機可橫向捲動，條件與例外見正文。</figcaption></figure><p>長鏈acyl-CoA不能直接穿越粒線體內膜進入基質。CPT-I位於外膜，先把脂醯基從CoA轉到carnitine，形成acylcarnitine；carnitine-acylcarnitine\ntranslocase跨內膜交換運送；CPT-II在內膜基質側把脂醯基交回基質CoA，重新形成acyl-CoA。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>元件</th>\n<th>功能</th>\n<th>最常見錯誤</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>CPT-I</td>\n<td>Acyl-CoA→acylcarnitine</td>\n<td>誤以為直接做β氧化切斷碳鏈</td>\n</tr>\n<tr class=\"even\">\n<td>Translocase</td>\n<td>跨內膜交換acylcarnitine與carnitine</td>\n<td>忘記CPT本身不等於跨膜通道</td>\n</tr>\n<tr class=\"odd\">\n<td>CPT-II</td>\n<td>基質側再生acyl-CoA</td>\n<td>誤以為將脂肪酸送出細胞</td>\n</tr>\n</tbody>\n</table></div>\n<p>胞質側與基質側CoA池藉此保持區隔，穿膜的是acylcarnitine而非整個acyl-CoA。短鏈、中鏈脂肪酸的進入不依賴同樣的長鏈carnitine\nshuttle，因此CPT缺陷不能簡化成「所有脂肪酸都完全無法進粒線體」。</p>\n<p>Malonyl-CoA抑制CPT-I，是合成與氧化協調的重要開關。當細胞正在合成脂肪酸，malonyl-CoA升高，就降低長鏈脂醯基進基質氧化的機會。它不是抑制CPT-II的標準答案，也不是carnitine本身的分解產物。</p>\n"
    },
    {
      "id": "topic-4",
      "title": "β氧化四步：氧化、加水、再氧化、硫解",
      "html": "<p>β碳是以羧基碳為C1時的C3。每一輪先把這個位置轉成適合切割的β-keto狀態，再從羧基端釋出二碳acetyl-CoA。主要路徑在粒線體基質及相關內膜酵素系統進行。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>順序</th>\n<th>酵素與變化</th>\n<th>收支</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>1</td>\n<td>Acyl-CoA dehydrogenase：形成trans-Δ2雙鍵</td>\n<td>FAD相關電子轉出</td>\n</tr>\n<tr class=\"even\">\n<td>2</td>\n<td>Enoyl-CoA hydratase：雙鍵加水</td>\n<td>形成L-3-hydroxyacyl-CoA</td>\n</tr>\n<tr class=\"odd\">\n<td>3</td>\n<td>L-3-hydroxyacyl-CoA dehydrogenase：羥基氧化成酮</td>\n<td>NAD⁺→NADH</td>\n</tr>\n<tr class=\"even\">\n<td>4</td>\n<td>Thiolase：加入CoA-SH後硫解</td>\n<td>Acetyl-CoA＋縮短2C的acyl-CoA</td>\n</tr>\n</tbody>\n</table></div>\n<p>第一步的FAD緊密結合酵素，電子經electron-transfer\nflavoprotein（ETF）及ETF:ubiquinone\noxidoreductase送到CoQ；不是每輪釋出一個自由FADH₂分子游到complex\nII。計算時可用「FADH₂當量」表示，但路徑圖應保留ETF入口。</p>\n<p>第三步產NADH，之後由complex\nI把電子交給呼吸鏈。β氧化本身的四步不直接產ATP；ATP收益主要來自電子氧化與acetyl-CoA進TCA。缺氧時呼吸鏈難以再生足夠氧化型輔酶，β氧化便受限，不能因四步沒把O₂寫在受質欄就說它能長期無氧供能。</p>\n"
    },
    {
      "id": "topic-5",
      "title": "圈數與碳數：最後一刀產兩個acetyl-CoA",
      "html": "<p>對飽和、偶數碳、直鏈脂肪酸Cₙ，一般β氧化圈數為n/2−1，acetyl-CoA總數為n/2。每一輪產1\nNADH與1\nFAD相關當量；最後四碳acyl-CoA被切成兩個acetyl-CoA，這正是「圈數少一」的理由。</p>\n<p>以C16為例，碳鏈依序16→14→12→10→8→6→4→兩個2。共7輪，得到8\nacetyl-CoA、7 NADH與7 FAD相關當量。把8\nacetyl-CoA當成8輪，會多算一次NADH與FAD電子。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>脂肪酸</th>\n<th style=\"text-align: right;\">β氧化輪數</th>\n<th style=\"text-align: right;\">Acetyl-CoA</th>\n<th style=\"text-align: right;\">β氧化的NADH／FAD當量</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>C12:0</td>\n<td style=\"text-align: right;\">5</td>\n<td style=\"text-align: right;\">6</td>\n<td style=\"text-align: right;\">各5</td>\n</tr>\n<tr class=\"even\">\n<td>C16:0</td>\n<td style=\"text-align: right;\">7</td>\n<td style=\"text-align: right;\">8</td>\n<td style=\"text-align: right;\">各7</td>\n</tr>\n<tr class=\"odd\">\n<td>C18:0</td>\n<td style=\"text-align: right;\">8</td>\n<td style=\"text-align: right;\">9</td>\n<td style=\"text-align: right;\">各8</td>\n</tr>\n</tbody>\n</table></div>\n<p>這個簡式不直接套到奇數碳、不飽和、分支脂肪酸，也不能把peroxisome每一輪電子收益當成同樣數字。算式的前提必須跟題幹一起記，否則公式越熟越容易在例外題失分。</p>\n"
    },
    {
      "id": "topic-6",
      "title": "完整ATP計算：先分β氧化與TCA兩本帳",
      "html": "<p>採用NADH約2.5 ATP、FAD相關當量約1.5 ATP，每acetyl-CoA進TCA約10\nATP。游離palmitate（C16:0）完整氧化的帳為：</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>來源</th>\n<th>計算</th>\n<th style=\"text-align: right;\">ATP當量</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>β氧化NADH</td>\n<td>7×2.5</td>\n<td style=\"text-align: right;\">17.5</td>\n</tr>\n<tr class=\"even\">\n<td>β氧化FAD電子</td>\n<td>7×1.5</td>\n<td style=\"text-align: right;\">10.5</td>\n</tr>\n<tr class=\"odd\">\n<td>8 acetyl-CoA的TCA</td>\n<td>8×10</td>\n<td style=\"text-align: right;\">80</td>\n</tr>\n<tr class=\"even\">\n<td>游離脂肪酸活化</td>\n<td>ATP→AMP</td>\n<td style=\"text-align: right;\">−2</td>\n</tr>\n<tr class=\"odd\">\n<td>淨收益</td>\n<td>17.5＋10.5＋80−2</td>\n<td style=\"text-align: right;\">106</td>\n</tr>\n</tbody>\n</table></div>\n<p>若起點palmitoyl-CoA，答案是108；若題目指定舊式P/O為3與2，palmitate的對應總數是129。數字不同常是起點或計帳假設不同，不必把其中一個永遠判成錯誤。</p>\n<p>對相同前提的偶數鏈Cₙ，淨收益可整理成(n/2−1)×4＋(n/2)×10−2＝7n−6。例如C18:0是120\nATP。這是快速驗算，正式解題仍先寫圈數，避免把不存在的acetyl-CoA算進去。</p>\n<p>如果題目只問「β氧化產生幾個NADH」，C16答案是7；若問包含TCA的總NADH，還要加8×3＝24，合計31。題幹的邊界比背總數更重要。這些是理想化生化計帳，真實細胞的ATP回收會受耦聯效率與運輸等條件影響。</p>\n"
    },
    {
      "id": "topic-7",
      "title": "奇數鏈與不飽和脂肪酸：哪一步需要額外處理",
      "html": "<p>奇數鏈最後留下propionyl-CoA（3C）。先由propionyl-CoA\ncarboxylase使用ATP、HCO₃⁻與biotin生成D-methylmalonyl-CoA，經epimerase形成L型，再由B12依賴methylmalonyl-CoA\nmutase變成succinyl-CoA。</p>\n<p>因此「最後三碳產物」是propionyl-CoA，「直接進TCA的形式」是succinyl-CoA。Succinyl-CoA可提供淨TCA中間物並連到糖質新生，這是奇數鏈尾端的生糖潛力；不是整條脂肪酸的每個acetyl-CoA突然都能生糖。</p>\n<p>不飽和脂肪酸的cis雙鍵不一定符合hydratase需要的trans-Δ2配置，需要enoyl-CoA\nisomerase等酵素調整。遇到已存在的雙鍵，可略過某些原本產FAD電子的步驟，因此同碳數的不飽和脂肪酸通常較少ATP收益。多元不飽和脂肪酸還可能需要2,4-dienoyl-CoA\nreductase，消耗NADPH。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>類型</th>\n<th>額外重點</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>奇數鏈</td>\n<td>Biotin羧化、B12重排、succinyl-CoA入口</td>\n</tr>\n<tr class=\"even\">\n<td>單元不飽和</td>\n<td>Isomerase調雙鍵，少部分FAD收益</td>\n</tr>\n<tr class=\"odd\">\n<td>多元不飽和</td>\n<td>可能需NADPH依賴reductase，不能一律只扣一次FAD</td>\n</tr>\n</tbody>\n</table></div>\n<p>NADPH主要支持合成，但這個不飽和脂肪酸氧化的輔助反應是重要例外。故「所有脂肪酸氧化絕不使用NADPH」太絕對；典型飽和β氧化核心四步則使用FAD與NAD⁺。</p>\n"
    },
    {
      "id": "topic-8",
      "title": "Peroxisome、α與ω氧化：不要把所有脂肪酸送同一入口",
      "html": "<p>Peroxisome能處理very-long-chain fatty\nacids等受質並縮短碳鏈，後續可交由粒線體繼續代謝。第一步acyl-CoA\noxidase把電子交給O₂形成H₂O₂，再由catalase等處理，沒有像粒線體ETF→CoQ那樣直接把第一步電子連到ATP回收。</p>\n<p>因此peroxisomal β氧化與mitochondrial\nβ氧化雖都有縮短二碳的邏輯，能量帳不同。Peroxisome不是縮小版粒線體，也沒有同樣的呼吸鏈ATP合成系統。</p>\n<p>Phytanic\nacid等在β位置有分支的脂肪酸難以直接走一般β氧化，需要先α氧化移去一個碳，再進一步處理；Refsum\ndisease與此路徑異常相關。ω氧化則從甲基末端進行，主要涉及內質網，能形成dicarboxylic\nacids；當常規β氧化受阻時，尿中二羧酸增加可成線索。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>路徑</th>\n<th>先看哪個位置／受質</th>\n<th>關鍵產物或特性</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>β氧化</td>\n<td>羧基端逐次二碳</td>\n<td>Acetyl-CoA</td>\n</tr>\n<tr class=\"even\">\n<td>α氧化</td>\n<td>特殊分支脂肪酸</td>\n<td>先少一碳，解除障礙</td>\n</tr>\n<tr class=\"odd\">\n<td>ω氧化</td>\n<td>甲基末端</td>\n<td>二羧酸，內質網相關</td>\n</tr>\n<tr class=\"even\">\n<td>Peroxisomal β氧化</td>\n<td>很長鏈等特殊受質</td>\n<td>縮短碳鏈，第一步產H₂O₂</td>\n</tr>\n</tbody>\n</table></div>\n<p>做疾病題時先定位區室與受質，不要僅因都叫fatty acid\noxidation就把MCAD缺乏、Refsum及peroxisomal疾病互相代換。</p>\n"
    },
    {
      "id": "topic-9",
      "title": "酮體生成：肝粒線體把acetyl-CoA改裝成可輸出的燃料",
      "html": "<p>肝臟β氧化增加時，acetyl-CoA供應上升；空腹時OAA又可能被拉去糖質新生，使TCA處理acetyl-CoA的能力相對於供應受限。酮體生成提供另一個出口，同時再生CoA供後續代謝使用。這不是肝臟整個TCA完全停止，而是碳流分配改變。</p>\n<p>兩個acetyl-CoA經thiolase形成acetoacetyl-CoA，再加一個acetyl-CoA，由粒線體HMG-CoA\nsynthase形成HMG-CoA；HMG-CoA\nlyase裂解後產生acetoacetate並釋回一個acetyl-CoA。淨碳帳是兩個acetyl-CoA形成一個四碳acetoacetate，不是淨消耗三個二碳。</p>\n<p>Acetoacetate可由β-hydroxybutyrate\ndehydrogenase還原成D-β-hydroxybutyrate（BHB），消耗NADH；也可脫羧形成acetone。高NADH/NAD⁺狀態使BHB比例較高。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 50%\" />\n<col style=\"width: 50%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>酮體</th>\n<th>特色</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Acetoacetate</td>\n<td>可被周邊組織利用的四碳燃料</td>\n</tr>\n<tr class=\"even\">\n<td>β-Hydroxybutyrate</td>\n<td>化學上非酮，但生理上列為酮體；常在高NADH時比例增加</td>\n</tr>\n<tr class=\"odd\">\n<td>Acetone</td>\n<td>揮發性，主要不是重要能量供應形式</td>\n</tr>\n</tbody>\n</table></div>\n<p>粒線體HMG-CoA\nsynthase屬酮體生成；膽固醇合成使用另一區室的HMG-CoA路徑。看見HMG-CoA就選膽固醇，是忽略區室造成的典型失分。</p>\n"
    },
    {
      "id": "topic-10",
      "title": "酮體利用：為何肝臟產得出卻用不了",
      "html": "<p>周邊組織先將BHB氧化回acetoacetate，形成NADH；SCOT（succinyl-CoA:acetoacetate\nCoA\ntransferase，亦稱thiophorase）把succinyl-CoA的CoA轉給acetoacetate，形成acetoacetyl-CoA及succinate；thiolase再切成兩個acetyl-CoA進TCA。</p>\n<p>肝臟缺乏有效SCOT酮體利用途徑，因此把酮體輸出給其他組織，不能大量拿自己產的酮體來供能。紅血球則因沒有粒線體而不能利用，兩者限制原因不同。長期空腹的腦可增加酮體利用，節省部分葡萄糖需求，但不代表葡萄糖需求降為零。</p>\n<p>如果以能量題延伸，acetoacetate的兩個acetyl-CoA可回收約20\nATP，但SCOT使用succinyl-CoA轉CoA，繞過原可產GTP的succinyl-CoA\nsynthetase步驟，按機會成本扣1，約19 ATP；BHB多提供一個NADH，約21.5\nATP。只有題目採用相同完整氧化邊界時才用這個數字，不能把它與酮體合成成本或運輸條件混為一談。</p>\n<p>酮體可被氧化供能，因此「酮體是廢物，只能排泄」錯誤。過量與正常使用也要分開：有酮體不必然有ketoacidosis，是否造成酸鹼失衡要看生成、利用與排泄的平衡。</p>\n"
    },
    {
      "id": "topic-11",
      "title": "空腹、胰島素不足與脂肪酸氧化障礙的對照",
      "html": "<p>正常空腹時低insulin與反調節訊號使脂肪動員增加，肝臟脂肪酸氧化支持糖質新生並產酮。嚴重insulin不足時這些流量可能失去適當限制，酮酸生成超過使用與排除，形成ketoacidosis。Acetone不是主要造成酸負荷的酮體。</p>\n<p>相反地，MCAD缺乏使中鏈脂醯基氧化受阻，空腹或生病時可能出現hypoketotic\nhypoglycemia：糖儲備減少，脂肪酸供能又受阻，產酮不足且供糖支持下降。Hypoketotic是「相對應有程度偏低」，不是尿中絕不可能測到任何酮體。此處不把特徵當成單一檢驗即可確診的規則。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>情境</th>\n<th>脂肪酸氧化／產酮</th>\n<th>血糖推理</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>正常較長空腹</td>\n<td>增加，提供替代燃料</td>\n<td>由肝醣及糖質新生維持，隨時間改變</td>\n</tr>\n<tr class=\"even\">\n<td>嚴重insulin不足</td>\n<td>動員及產酮過多</td>\n<td>可高血糖伴酮酸中毒</td>\n</tr>\n<tr class=\"odd\">\n<td>脂肪酸氧化障礙</td>\n<td>供能不足，常產酮相對不足</td>\n<td>空腹時低血糖風險</td>\n</tr>\n</tbody>\n</table></div>\n<p>讀題看到低血糖，先看ketone多不多，再辨是否有肝醣動員、糖質新生、脂肪酸氧化或激素問題。這比將所有低血糖都歸為「糖沒吃夠」更有鑑別力。</p>\n"
    },
    {
      "id": "topic-12",
      "title": "合成與分解的交接：用malonyl-CoA收束全章",
      "html": "<p>餐後能量與碳源充足，acetyl-CoA\ncarboxylase較活躍，malonyl-CoA增加；它既是脂肪酸合成原料，也抑制CPT-I。空腹或能量壓力時，ACC受抑，malonyl-CoA降低，長鏈脂肪酸進粒線體氧化的限制減輕。這是路徑間的協調，不代表任何情況下兩條路徑都絕對不可能同時有通量。</p>\n<p>最後用四個問題檢核：第一，長鏈脂醯基如何跨內膜？回答三個shuttle元件。第二，C16為何是7輪？回答最後四碳切成兩個acetyl-CoA。第三，脂肪酸不能淨生糖為何仍能支持糖新生？回答能量、NADH與acetyl-CoA調控，而非偷換成碳直接轉糖。第四，肝臟為何不能用酮體？回答SCOT，而不是沒有粒線體。</p>\n<p>把這四題答完整，再練習106\nATP與奇數鏈例外，才算把「路徑、收支、調控、器官」連起來。下一章會沿著同一個malonyl-CoA，反過來看人體如何在能量充足時建立脂肪酸碳鏈。</p>\n"
    }
  ],
  "recalls": [
    [
      "Lipolysis與β氧化差在哪裡？",
      "前者水解TAG釋出脂肪酸及glycerol；後者在細胞內逐段氧化脂肪酸產acetyl-CoA與電子。"
    ],
    [
      "為何一個ATP活化脂肪酸要扣2當量？",
      "ATP變AMP與PPi，PPi再水解，支出兩個高能磷酸鍵當量；不是每圈重扣。"
    ],
    [
      "CPT-I、translocase、CPT-II依序搬什麼？",
      "先將脂醯基轉到carnitine，以acylcarnitine跨內膜，再交回基質CoA。"
    ],
    [
      "β氧化四步順序與電子出口？",
      "FAD相關氧化、加水、NAD⁺相關氧化、硫解；FAD電子經ETF到CoQ，NADH從complex I進呼吸鏈。"
    ],
    [
      "C16為何7輪卻有8 acetyl-CoA？",
      "最後4C一刀切成兩個2C，因此輪數為n/2−1，acetyl-CoA為n/2。"
    ],
    [
      "Palmitate與palmitoyl-CoA為何差2 ATP？",
      "前者須付活化成本；現代P/O計帳為106與108。"
    ],
    [
      "奇數鏈尾端直接以propionyl-CoA進TCA嗎？",
      "不是；先經biotin依賴羧化、epimerase、B12依賴mutase成succinyl-CoA。"
    ],
    [
      "Peroxisome第一步電子為何不能照算1.5 ATP？",
      "Acyl-CoA oxidase把電子交O₂產H₂O₂，沒有直接接粒線體ETF/CoQ的能量回收。"
    ],
    [
      "產一個acetoacetate淨用幾個acetyl-CoA？",
      "淨兩個；HMG-CoA形成時加第三個，lyase步驟又釋回一個。"
    ],
    [
      "肝臟與紅血球不能用酮的原因是否相同？",
      "不同；肝臟缺SCOT利用途徑，紅血球沒有粒線體。"
    ],
    [
      "Hypoketotic hypoglycemia如何從燃料角度解釋？",
      "糖儲備下降時脂肪酸供能又受阻，酮體相對不足且供糖支持下降；不等於完全無酮。"
    ],
    [
      "Malonyl-CoA下降如何支持長鏈脂肪酸氧化？",
      "減輕對CPT-I的抑制，使脂醯基更易進粒線體；仍需其他供能條件。"
    ]
  ],
  "readingIntro": "先讀機轉與碳數，再用表格核對輔酶、區室及能量；每節閉卷回想，最後以歷屆題檢查能否處理條件改變。",
  "figure": "<p>先追碳流、還原力與區室，再讀能量收支、器官調控與疾病連結。每節末可閉卷回答，歷屆題分組連回對應小節。</p>",
  "questions": [
    {
      "title": "01　計算游離C18:0完整氧化ATP。",
      "prompt": "<p>計算游離C18:0完整氧化ATP。</p>",
      "answer": "<p>8輪產各8 NADH、FAD當量，9 acetyl-CoA；8×4＋9×10−2＝120 ATP，採2.5/1.5 P/O。</p>"
    },
    {
      "title": "02　C16只問β氧化NADH，為何不是31？",
      "prompt": "<p>C16只問β氧化NADH，為何不是31？</p>",
      "answer": "<p>β氧化是7；31包含8 acetyl-CoA在TCA再產的24，題幹邊界不同。</p>"
    },
    {
      "title": "03　CPT-I受抑時，是否表示CoA不能穿過膜？",
      "prompt": "<p>CPT-I受抑時，是否表示CoA不能穿過膜？</p>",
      "answer": "<p>重點是長鏈脂醯基無法順利轉成acylcarnitine，CoA本來就不靠此穿內膜；shuttle維持兩側CoA池。</p>"
    },
    {
      "title": "04　為何不能說所有β氧化電子都從complex II進入？",
      "prompt": "<p>為何不能說所有β氧化電子都從complex II進入？</p>",
      "answer": "<p>NADH經complex I，acyl-CoA dehydrogenase的FAD電子經ETF與ETF:Q oxidoreductase到CoQ，不是SDH/complex II。</p>"
    },
    {
      "title": "05　奇數鏈脂肪酸的哪部分可支援淨糖碳？",
      "prompt": "<p>奇數鏈脂肪酸的哪部分可支援淨糖碳？</p>",
      "answer": "<p>末端propionyl-CoA經succinyl-CoA提供淨TCA中間物；大部分acetyl-CoA不能淨生糖。</p>"
    },
    {
      "title": "06　同碳數不飽和脂肪酸一定比飽和者多產ATP嗎？",
      "prompt": "<p>同碳數不飽和脂肪酸一定比飽和者多產ATP嗎？</p>",
      "answer": "<p>通常較少，已有雙鍵可略過部分產FAD電子步驟，多不飽和還可能耗NADPH處理；應逐步追蹤。</p>"
    },
    {
      "title": "07　高粒線體NADH會使BHB/acetoacetate比值如何改變？",
      "prompt": "<p>高粒線體NADH會使BHB/acetoacetate比值如何改變？</p>",
      "answer": "<p>反應偏向還原acetoacetate成BHB，因此比值上升；不能將二者固定看作等量。</p>"
    },
    {
      "title": "08　SCOT利用酮體時為何扣一個GTP機會成本？",
      "prompt": "<p>SCOT利用酮體時為何扣一個GTP機會成本？</p>",
      "answer": "<p>它取用succinyl-CoA將CoA轉給acetoacetate，繞過原可產GTP的succinyl-CoA synthetase步驟。</p>"
    },
    {
      "title": "09　低血糖合併酮體相對偏低，可否先猜正常長期空腹？",
      "prompt": "<p>低血糖合併酮體相對偏低，可否先猜正常長期空腹？</p>",
      "answer": "<p>不能只套正常空腹；應考慮脂肪酸氧化或其他調控障礙。MCAD是機轉例子，仍需臨床與檢驗確認。</p>"
    },
    {
      "title": "10　肝臟產酮是否表示TCA完全停止？",
      "prompt": "<p>肝臟產酮是否表示TCA完全停止？</p>",
      "answer": "<p>不是；是acetyl-CoA供應相對於OAA及TCA處理能力增加而分流，並非所有TCA反應歸零。</p>"
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
        "title": "長鏈脂醯基跨內膜",
        "topic": "topic-3",
        "summary": "辨CPT功能與脂質顆粒、其他代謝物。",
        "questions": [
          {
            "number": 91,
            "text": "91.Carnitine palmitoyl transferases(CPTs)的損壞最可能會導致下列何種物質無法直接進入粒線體中?\n\n A.NADH\nB.succinyl CoA\nC.triacylglycerol\nD.long-chain fatty acids\n",
            "regions": [
              {
                "page": 13,
                "rect": [
                  30.0,
                  780.94,
                  569.96,
                  806.92
                ]
              },
              {
                "page": 14,
                "rect": [
                  30.0,
                  28.0,
                  569.96,
                  111.4
                ]
              }
            ],
            "id": "109-2-1-91",
            "year": 109,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/109/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=109100&c=301&s=11&q=1&verify=step1-20261013-109100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=109100&y=2020",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/109/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=109100&c=301&s=11&q=1&verify=step1-20261013-109100-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "D"
            ],
            "point": "長鏈脂醯基跨內膜",
            "analysis": "D長鏈脂肪酸的脂醯基需carnitine shuttle進基質。A NADH的還原當量使用其他shuttle；B succinyl-CoA非CPT受質；C TAG不整顆經CPT入粒線體。",
            "trap": "題目簡稱脂肪酸進入，實際跨內膜形式為acylcarnitine。"
          }
        ]
      },
      {
        "id": "group-2",
        "title": "特殊碳鏈的額外酵素",
        "topic": "topic-7",
        "summary": "奇數鏈看三碳尾端，多不飽和看雙鍵配置。",
        "questions": [
          {
            "number": 89,
            "text": "89.奇數碳的脂肪酸經過β-oxidation後,最後產生的三碳產物會以何種形式直接進入檸檬酸循環(citric acid \ncycle)?\nA.α-ketoglutarate\nB.succinyl-CoA\nC.oxaloacetate\nD.propionyl-CoA\n",
            "regions": [
              {
                "page": 13,
                "rect": [
                  30.0,
                  511.99,
                  570.0,
                  637.99
                ]
              }
            ],
            "id": "108-2-1-89",
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
            "point": "特殊碳鏈的額外酵素",
            "analysis": "B succinyl-CoA是直接進TCA的形式。D propionyl-CoA是前一步三碳尾端，尚須羧化與B12重排；A、C不是這條路徑的直接入口。",
            "trap": "題幹問最後三碳的後續入口，不是只問β氧化最後留下什麼。"
          },
          {
            "number": 93,
            "text": "93.下列何種脂肪酸在進行β-oxidation時,需要2,4-dienoyl-CoA reductase的參與?\n \nA.laurate\nB.palmitoleate\nC.oleate\nD.linoleate\n",
            "regions": [
              {
                "page": 17,
                "rect": [
                  30.0,
                  481.64,
                  569.96,
                  608.75
                ]
              }
            ],
            "id": "111-2-1-93",
            "year": 111,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/111/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=111100&c=301&s=11&q=1&verify=step1-20261013-111100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=111100&y=2022",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/111/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=111100&c=301&s=11&q=1&verify=step1-20261013-111100-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "D"
            ],
            "point": "特殊碳鏈的額外酵素",
            "analysis": "D linoleate為多不飽和脂肪酸，代謝可形成需2,4-dienoyl-CoA reductase處理的中間物。A laurate飽和；B palmitoleate及C oleate為典型單不飽和，主要需isomerase處理。",
            "trap": "不是任何cis雙鍵都一定需要此reductase；要追雙鍵相對位置。"
          }
        ]
      },
      {
        "id": "group-3",
        "title": "酮體成員與合成區室",
        "topic": "topic-9",
        "summary": "認清化學分類、粒線體HMG-CoA與肝臟來源。",
        "questions": [
          {
            "number": 46,
            "text": "46 \n酮體(ketone bodies)不包括下列何者? \nAacetobutyrate \nB3-hydroxybutyrate \nCacetone \nDacetoacetate \n \n \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  733.43,
                  570.0,
                  807.0
                ]
              }
            ],
            "id": "96-2-2-46",
            "year": 96,
            "session": 2,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/96/2/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=096130&c=103&s=2001&q=1&verify=step1-20261013-096130-103-2001-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=096130&y=2007",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/96/2/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=096130&c=103&s=2001&q=1&verify=step1-20261013-096130-103-2001-M",
            "corrected": true,
            "answerVersion": "M",
            "point": "酮體成員與合成區室",
            "analysis": "A acetobutyrate不是標準三種酮體。B 3-hydroxybutyrate、C acetone、D acetoacetate是生理分類的酮體；B化學上不是酮仍列入。",
            "trap": "名稱相似不代表都是酮體。"
          },
          {
            "number": 40,
            "text": "40 \n肝臟粒線體內HMG-CoA synthase 合成酶的主要功能為下列何者? \nA促進膽固醇合成(Cholesterol biosynthesis) \nB抑制脂肪酸合成(Fatty acid biosynthesis) \nC促進酮體合成(Ketone body biosynthesis) \nD促進糖質新生(Gluconeogenesis) \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  202.11,
                  570.22,
                  247.11
                ]
              }
            ],
            "id": "100-2-2-40",
            "year": 100,
            "session": 2,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/100/2/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=100140&c=101&s=0102&q=1&verify=step1-20261013-100140-101-0102-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=100140&y=2011",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/100/2/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=100140&c=101&s=0102&q=1&verify=step1-20261013-100140-101-0102-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "C"
            ],
            "point": "酮體成員與合成區室",
            "analysis": "C正確：肝粒線體HMG-CoA synthase參與產酮。A膽固醇是另一區室的HMG-CoA路徑；B不是它的主要反應，D糖新生也非它直接催化。",
            "trap": "關鍵字是粒線體，不只HMG-CoA。"
          },
          {
            "number": 41,
            "text": "41 \n在人體中,屬於酮體(ketone body)成員之一的acetoacetate,主要在下列那一個組織或器官中合成? \nALiver \nBIntestinal mucosa \nCAdipose tissues \nDKidney \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  175.89,
                  570.22,
                  202.89
                ]
              }
            ],
            "id": "101-1-2-41",
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
            "point": "酮體成員與合成區室",
            "analysis": "A肝臟是人體acetoacetate主要合成來源。B腸黏膜、C脂肪組織、D腎臟並非本題所問的主要生理產酮器官。",
            "trap": "主要來源不需誇大成任何情況下其他細胞完全不能表現相關酵素。"
          }
        ]
      },
      {
        "id": "group-4",
        "title": "酮體可用性與器官限制",
        "topic": "topic-10",
        "summary": "產物是燃料，但需要粒線體與利用酵素。",
        "questions": [
          {
            "number": 34,
            "text": "34 \n第一型糖尿病病人在極度缺乏胰島素及嚴重壓力下會產生diabetic ketoacidosis,血中的ketone bodies\n濃度上升。下列相關敘述,何者錯誤? \nAketone bodies 含acetoacetic acid 及β-hydroxybutyric acid \nBketone bodies 由acetyl-CoA 所形成 \nCketone bodies 是代謝酸,必須由呼吸及腎臟排出,無法被身體利用 \nDketone bodies 主要來源是脂肪酸分解而來的 \n",
            "regions": [
              {
                "page": 3,
                "rect": [
                  30.0,
                  499.89,
                  570.22,
                  580.89
                ]
              }
            ],
            "id": "101-1-2-34",
            "year": 101,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/101/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=101030&c=101&s=0102&q=1&verify=step1-20261013-101030-101-0102-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=101030&y=2012",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/101/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=101030&c=101&s=0102&q=1&verify=step1-20261013-101030-101-0102-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "C"
            ],
            "point": "酮體可用性與器官限制",
            "analysis": "C錯：acetoacetate與BHB可被周邊組織轉成acetyl-CoA供能，不是只能排出的代謝酸。A酮體包含兩者、B來自acetyl-CoA、D常由脂肪酸分解供碳皆成立。",
            "trap": "有用的燃料在過量時仍可造成酸鹼問題。"
          },
          {
            "number": 90,
            "text": "90.人體下列何組織較不會以酮體(ketone bodies)作為能量的來源?\n \nA.心臟\nB.腦\nC.肌肉組織\nD.肝臟\n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  318.32,
                  569.96,
                  421.78
                ]
              }
            ],
            "id": "110-1-1-90",
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
            "point": "酮體可用性與器官限制",
            "analysis": "D肝臟缺乏SCOT利用路徑，較不以酮體供能。A心臟、C肌肉可用；B腦在較長空腹等情境會增加利用。",
            "trap": "腦能用酮不等於完全不需葡萄糖。"
          }
        ]
      },
      {
        "id": "group-5",
        "title": "產酮增加的代謝情境",
        "topic": "topic-11",
        "summary": "把動員、OAA與TCA處理能力放在同一張圖。",
        "questions": [
          {
            "number": 91,
            "text": "91.下列何者不是造成未治療的第一型(type 1)糖尿病病人有ketoacidosis的原因?\n \nA.草醯乙酸(oxaloacetate)太低\nB.酮體(ketone bodies)產生過多\nC.檸檬酸循環(TCA cycle)加速進行\nD.解脂作用(lipolysis)升高\n",
            "regions": [
              {
                "page": 16,
                "rect": [
                  30.0,
                  665.34,
                  569.96,
                  792.44
                ]
              }
            ],
            "id": "113-2-1-91",
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
            "point": "產酮增加的代謝情境",
            "analysis": "C TCA加速不是本題促成酮酸中毒的原因；A OAA相對不足使acetyl-CoA分流，B產酮過多直接增加酮酸負荷，D脂解升高增加脂肪酸供應。",
            "trap": "不必把TCA加速不成立誇大成TCA完全停止。"
          }
        ]
      },
      {
        "id": "group-6",
        "title": "飽和β氧化的調節物",
        "topic": "topic-12",
        "summary": "分辨核心四步與不飽和脂肪酸輔助反應。",
        "questions": [
          {
            "number": 93,
            "text": "93.下列何者與細胞調節飽和脂肪酸氧化反應(β-oxidation)的關聯性最低?\n \nA.acetyl-CoA濃度  \nB.cyclic AMP濃度  \nC.malonyl-CoA濃度 \nD.NADPH濃度  \n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  259.94,
                  569.96,
                  363.4
                ]
              }
            ],
            "id": "110-2-1-93",
            "year": 110,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/110/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=110101&c=301&s=11&q=1&verify=step1-20261013-110101-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=110101&y=2021",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/110/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=110101&c=301&s=11&q=1&verify=step1-20261013-110101-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "D"
            ],
            "point": "飽和β氧化的調節物",
            "analysis": "D NADPH與典型飽和β氧化調節關聯最低。A acetyl-CoA涉及產品與碳流，B cAMP反映激素動員訊號，C malonyl-CoA抑CPT-I；核心電子輔酶是NAD⁺與FAD。",
            "trap": "此題限定飽和；多不飽和處理可使用NADPH。"
          }
        ]
      }
    ]
  }
});
