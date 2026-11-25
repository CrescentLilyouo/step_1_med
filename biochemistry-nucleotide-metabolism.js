biochemistryChapters.push({
  "id": "nucleotide-metabolism",
  "number": "22",
  "title": "核苷酸代謝",
  "summary": "從嘌呤與嘧啶的環如何形成，推導回收缺陷、免疫缺陷及抗代謝藥物的作用。",
  "sources": "Harper’s Illustrated Biochemistry, 31st Edition；歷屆題目依本站醫師第一階段生物化學題庫及各題官方答案。",
  "references": "<p>Harper’s Illustrated Biochemistry, 31st Edition；歷屆題目依本站醫師第一階段生物化學題庫及各題官方答案。</p><p>正文與圖為原創教學重組，非逐段翻譯。題目取自現有歷屆題庫，官方採計答案與更正版本原樣保留；機轉解析另行撰寫。精選題數不等同完整考頻統計。</p>",
  "sections": [
    {
      "id": "topic-1",
      "title": "先分清楚名詞：鹼基、核苷與核苷酸不是同一層",
      "html": "<p>核苷酸不只拿來做DNA。ATP參與能量轉移，GTP參與訊息及蛋白質合成，UDP-glucose搬運糖，CDP相關分子參與磷脂合成，NAD及CoA也含有核苷酸相關結構。因此核苷酸的供應必須配合細胞生長、修復及代謝需求，而不是只有分裂中的細胞才需要。</p>\n<p><strong>Base＋糖＝nucleoside；nucleoside再接磷酸＝nucleotide。</strong>例如adenine是鹼基，adenosine是核苷，AMP才是核苷酸。Inosine的鹼基為hypoxanthine，IMP是inosine\nmonophosphate，不能因名字有inosine就把IMP當成沒有磷酸的分子。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>分類</th>\n<th>代表成員</th>\n<th>結構辨認</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Purine，嘌呤</td>\n<td>Adenine、guanine；另有hypoxanthine等</td>\n<td>雙環融合骨架</td>\n</tr>\n<tr class=\"even\">\n<td>Pyrimidine，嘧啶</td>\n<td>Cytosine、uracil、thymine</td>\n<td>單個六員環</td>\n</tr>\n<tr class=\"odd\">\n<td>Ribonucleotide</td>\n<td>AMP、GMP、UMP、CMP等</td>\n<td>糖的2′位置有OH</td>\n</tr>\n<tr class=\"even\">\n<td>Deoxyribonucleotide</td>\n<td>dAMP、dGMP、dCMP、dTMP等</td>\n<td>糖的2′位置是H，而非OH</td>\n</tr>\n</tbody>\n</table></div>\n<p>Thymine可以視為5-methyluracil：差別在鹼基上的甲基，不在糖是否去氧。Thymine與thymidine也不是同一名詞。典型RNA主要使用A、G、C、U，但某些RNA有修飾核苷，不能把「一般RNA不用thymine作四種主要鹼基之一」擴張成任何RNA絕不可能有核糖胸苷。</p>\n<p>另有三種鍵常被混用：鹼基與糖是N-glycosidic\nbond；核酸同股骨架以phosphodiester\nbond連接；ATP多個磷酸之間有phosphoanhydride\nbond。Depurination切的是鹼基與糖之間的糖苷鍵，不等於直接切斷DNA整條磷酸骨架。之後DNA結構與修復章節會再使用這個區分。</p>\n"
    },
    {
      "id": "topic-2",
      "title": "PRPP與IMP總圖：先做糖底座，再把嘌呤環逐步搭上去",
      "html": "<p>Ribose-5-phosphate可由PPP供應。PRPP\nsynthetase將ATP的pyrophosphoryl部分轉到ribose-5-P的1號碳，形成5-phosphoribosyl-1-pyrophosphate（PRPP），ATP變成AMP。<strong>PRPP是活化的核糖磷酸供體，不是已完成的嘌呤鹼基。</strong></p>\n<p>嘌呤de\nnovo合成是在這個核糖底座上逐步建立環。重要承諾步驟由glutamine-PRPP\namidotransferase將glutamine的醯胺氮導入，產生5-phosphoribosylamine。接著再陸續接上glycine、glutamine、aspartate、CO₂及一碳單位，最後形成IMP，再由IMP分支成AMP或GMP。</p>\n<p>可以把流程拆成三層：<strong>Ribose-5-P→PRPP是準備活化底座；PRPP→phosphoribosylamine是嘌呤承諾步驟；IMP→AMP／GMP是兩支成品分流。</strong>如果題目問第一個完整嘌呤核苷酸共同產物，答案是IMP，而不是ATP、adenine或PRPP。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>分子／步驟</th>\n<th>角色</th>\n<th>常見錯配</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Ribose-5-P</td>\n<td>提供五碳糖</td>\n<td>與deoxyribose或ribulose名稱混用</td>\n</tr>\n<tr class=\"even\">\n<td>PRPP</td>\n<td>活化核糖供體，亦參與salvage及嘧啶合成</td>\n<td>誤認僅在purine de novo使用</td>\n</tr>\n<tr class=\"odd\">\n<td>Glutamine-PRPP amidotransferase</td>\n<td>導入氮、進入嘌呤合成</td>\n<td>與製造PRPP的synthetase混淆</td>\n</tr>\n<tr class=\"even\">\n<td>IMP</td>\n<td>AMP與GMP共同前驅物</td>\n<td>誤以為先做AMP再全部轉GMP</td>\n</tr>\n</tbody>\n</table></div>\n<p>De\nnovo很耗能，salvage回收既有鹼基則可省去重新搭環的許多步驟。PRPP出現在兩條路，所以「看到PRPP就一定是de\nnovo」不成立。另一個稍後要比較的差異是：嘧啶先做環，再接PRPP；嘌呤則在糖底座上搭環，順序剛好相反。</p>\n"
    },
    {
      "id": "topic-3",
      "title": "嘌呤環的原子來源：用分工記，不必硬背整張結構",
      "html": "<p>Purine環有九個位置，來源並非全部是同一個胺基酸。Glycine提供一整塊三原子，glutamine兩次提供醯胺氮，aspartate留下氮，一碳代謝補兩個碳，CO₂再供一碳。把「誰提供碳，誰提供氮」分開，就能看懂為何葉酸或glutamine相關反應被抑制時，嘌呤供應會下降。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>原子位置</th>\n<th>主要來源</th>\n<th>好記的方法</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>N1</td>\n<td>Aspartate</td>\n<td>Asp留下氮，其他碳可離開</td>\n</tr>\n<tr class=\"even\">\n<td>C2、C8</td>\n<td>N10-formyl-THF的一碳單位</td>\n<td>兩個formyl碳，接到兩個位置</td>\n</tr>\n<tr class=\"odd\">\n<td>N3、N9</td>\n<td>Glutamine醯胺氮</td>\n<td>Gln兩次送氮</td>\n</tr>\n<tr class=\"even\">\n<td>C4、C5、N7</td>\n<td>Glycine</td>\n<td>一次帶進二碳一氮</td>\n</tr>\n<tr class=\"odd\">\n<td>C6</td>\n<td>CO₂／HCO₃⁻相關碳源</td>\n<td>其餘的一個碳</td>\n</tr>\n</tbody>\n</table></div>\n<p>此表描述人類典型de\nnovo反應。某些教材圖會將相通的一碳池形式一起表示，做題時要落到實際formyltransferase使用的N10-formyl-THF，不要把N5-methyl-THF或SAM直接代替。上一章SAM負責許多甲基轉移；本章嘌呤C2、C8需要的是formyl層級的一碳單位。</p>\n<p>Aspartate還參與尿素第二個氮的供應，以及嘧啶環的大部分骨架。相同胺基酸在不同路徑留下的部分不完全一樣：在嘌呤合成時主要留下特定氮，在嘧啶合成時則留下更多環原子。這就是國考問「同時參與尿素、嘌呤、嘧啶合成」時，Asp比只背「氮都來自glutamine」更能解題的原因。</p>\n<p>不要把一個碳源寫成所有細胞均必須從某個飲食成分直接取得。細胞可由不同代謝路徑補充glycine、glutamine及一碳池；考點是化學反應的直接原子捐贈者，而不是所有上游營養來源。</p>\n"
    },
    {
      "id": "topic-4",
      "title": "IMP分成AMP與GMP：供氮與耗能要成對記",
      "html": "<figure><div class=\"table-scroll\" tabindex=\"0\"><img src=\"assets/biochemistry/purine-branches.svg\" alt=\"IMP 分流至 AMP 與 GMP 時的氮源及能量\" style=\"width:100%;min-width:540px;max-width:780px;height:auto\"></div><figcaption>IMP 分流至 AMP 與 GMP 時的氮源及能量。圖中為教學模型；手機可橫向捲動，條件與例外見正文。</figcaption></figure><p>IMP的鹼基為hypoxanthine，從這個共同骨架分兩路。AMP支路先由adenylosuccinate\nsynthetase加入aspartate並使用GTP，形成adenylosuccinate，再由lyase釋出fumarate，留下胺基形成AMP。Asp留下氮，碳骨架以fumarate形式離開，與前面尿素循環的某些反應策略很相似。</p>\n<p>GMP支路先由IMP\ndehydrogenase將IMP氧化成XMP，使用NAD⁺並產生NADH；再由GMP\nsynthetase以glutamine供氮、使用ATP，把XMP轉成GMP。這裡不能把「glutamine供氮」與「NADPH供還原力」混成同一件事，實際上前一步是氧化反應。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>分支</th>\n<th>先經中間物</th>\n<th>主要氮來源</th>\n<th>分支耗能辨認</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>IMP→AMP</td>\n<td>Adenylosuccinate</td>\n<td>Aspartate</td>\n<td>使用GTP</td>\n</tr>\n<tr class=\"even\">\n<td>IMP→GMP</td>\n<td>XMP</td>\n<td>Glutamine</td>\n<td>使用ATP</td>\n</tr>\n</tbody>\n</table></div>\n<p>最實用的記法是「做A用G，做G用A」。這種交叉使用有助於兩類核苷酸平衡，但不要理解成兩支必須在每個瞬間產量完全相等。AMP對自己的支路、GMP對自己的支路可提供回饋；IMP、AMP、GMP等終產物也參與上游承諾步驟調節，PRPP供應則反映可用原料與消耗狀態。</p>\n<p>若salvage變少，PRPP可能較少被消耗，回收形成的IMP／GMP也下降，上游de\nnovo受到的回饋可能減弱。因此「回收壞掉」不必然造成所有核苷酸都無法製造；它反而可能刺激新的嘌呤合成，最後增加降解負擔。這個因果鏈是Lesch–Nyhan題目的核心。</p>\n"
    },
    {
      "id": "topic-5",
      "title": "Salvage：回收的是鹼基還是核苷，決定使用哪種酵素",
      "html": "<p>Purine\nsalvage的一類反應，是既有鹼基接上PRPP。HGPRT／HPRT將hypoxanthine變成IMP，將guanine變成GMP；APRT則將adenine變成AMP。反應釋出PPi，後續水解有利反應前進。<strong>HGPRT的兩個受質在名字裡，但adenine不是其中之一。</strong></p>\n<p>另一類salvage由nucleoside\nkinase把磷酸加到已經帶糖的核苷，例如adenosine\nkinase可形成AMP。因此回收不是單一酵素、單一受質、單一反應。題目若問一般salvage，要先看選項是base、nucleoside還是nucleotide，不要全部當作「再加一個磷酸」。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>鹼基</th>\n<th>酵素</th>\n<th>配合PRPP後的產物</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Hypoxanthine</td>\n<td>HGPRT</td>\n<td>IMP</td>\n</tr>\n<tr class=\"even\">\n<td>Guanine</td>\n<td>HGPRT</td>\n<td>GMP</td>\n</tr>\n<tr class=\"odd\">\n<td>Adenine</td>\n<td>APRT</td>\n<td>AMP</td>\n</tr>\n<tr class=\"even\">\n<td>Xanthine</td>\n<td>非上述典型人類主要回收受質</td>\n<td>較偏向後續尿酸生成的路徑</td>\n</tr>\n</tbody>\n</table></div>\n<p>Lesch–Nyhan\ndisease位於HPRT1缺陷光譜的嚴重端，可出現尿酸過度生成以及神經、動作、行為異常；較輕的HPRT1相關疾病不必具有同樣完整表現。不能把任何HGPRT活性降低者一律描述為相同程度的自傷或神經症狀。</p>\n<p>代謝推理是：HGPRT回收下降→PRPP消耗下降，加上IMP／GMP回饋來源減少→促使de\nnovo相對增加→更多purine最後進入降解而產尿酸。它不是de\nnovo的guanine合成酵素缺陷。降低尿酸生成也不代表已修復所有神經行為病理；疾病表現不能全歸因於「尿酸跑進腦中」。</p>\n"
    },
    {
      "id": "topic-6",
      "title": "嘌呤降解、尿酸與免疫缺陷：不同關卡產生不同後果",
      "html": "<p>AMP與GMP可先去磷酸、去胺及去糖，再進入鹼基降解。Adenosine由adenosine\ndeaminase（ADA）變inosine，inosine可由purine nucleoside\nphosphorylase（PNP）產hypoxanthine。Guanosine經PNP可產guanine，guanine再去胺成xanthine。Hypoxanthine→xanthine→uric\nacid兩步皆與xanthine oxidoreductase系統相關，考試常以xanthine\noxidase概括。</p>\n<p>人體沒有功能性uricase將尿酸繼續大量轉成allantoin，因此尿酸是人類嘌呤降解的重要末端產物。高尿酸可以來自生成過多，也可以來自排泄不足，不能把所有痛風都當成de\nnovo一定過度活躍。Uric\nacid／urate的酸鹼形式與溶解性亦有關，濃度超過相應條件下的溶解範圍可能形成結晶。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>阻塞／異常</th>\n<th>主要生化方向</th>\n<th>考試定位</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>HGPRT缺陷</td>\n<td>回收下降、purine生成及尿酸負擔增加</td>\n<td>Lesch–Nyhan／HPRT1光譜</td>\n</tr>\n<tr class=\"even\">\n<td>ADA缺陷</td>\n<td>Deoxyadenosine及dATP等累積</td>\n<td>淋巴球毒性、嚴重免疫缺陷</td>\n</tr>\n<tr class=\"odd\">\n<td>PNP缺陷</td>\n<td>Purine nucleoside處理受限，dGTP等異常</td>\n<td>常特別影響T細胞相關功能</td>\n</tr>\n<tr class=\"even\">\n<td>Xanthine oxidoreductase缺陷</td>\n<td>尿酸生成下降，xanthine可能堆積</td>\n<td>Xanthinuria與結石風險</td>\n</tr>\n</tbody>\n</table></div>\n<p>ADA不只處理adenosine，也處理deoxyadenosine。ADA缺乏時，後者累積並可再磷酸化為dATP；過多dATP抑制ribonucleotide\nreductase的整體活性，干擾平衡的dNTP供應與DNA相關功能。這是重要教學機轉，但ADA缺陷的細胞毒性還涉及其他過程，不應將全部免疫表現簡化為唯一一個箭頭。</p>\n<p>不要說「ADA原本負責合成dATP，所以缺乏會無法產dATP」；實際是清除路徑受阻而使其池量異常增加。也不要把ADA缺陷與ADA2缺陷當同一疾病。本章與歷屆核苷酸代謝題討論的是典型ADA／ADA1相關代謝及免疫缺陷。</p>\n"
    },
    {
      "id": "topic-7",
      "title": "嘧啶de novo：先完成環，再加PRPP，且有粒線體關卡",
      "html": "<figure><div class=\"table-scroll\" tabindex=\"0\"><img src=\"assets/biochemistry/pyrimidine-path.svg\" alt=\"嘧啶環合成、粒線體氧化與 UMP 的形成\" style=\"width:100%;min-width:540px;max-width:780px;height:auto\"></div><figcaption>嘧啶環合成、粒線體氧化與 UMP 的形成。圖中為教學模型；手機可橫向捲動，條件與例外見正文。</figcaption></figure><p>嘧啶與嘌呤的建造順序不同：<strong>嘧啶先形成orotate環，再把它接到PRPP上；嘌呤則在核糖底座上搭環。</strong>嘧啶環的原子主要來自aspartate與carbamoyl\nphosphate，而carbamoyl phosphate的氮由glutamine提供。</p>\n<p>在人類，胞質CAD是多功能蛋白，包含CPS-II、aspartate\ntranscarbamoylase及dihydroorotase活性。CPS-II使用glutamine、HCO₃⁻與ATP製造carbamoyl\nphosphate；再加入Asp形成carbamoyl\naspartate，環化成dihydroorotate。此時還沒有接上ribose。</p>\n<p>下一步dihydroorotate\ndehydrogenase（DHODH）將dihydroorotate氧化為orotate。人類DHODH與粒線體內膜相連，電子經FMN及ubiquinone相關系統交給呼吸鏈。這解釋為何抑制粒線體呼吸會牽動嘧啶de\nnovo，不是因為所有核苷酸合成都在粒線體進行，也不是只用「ATP少所以什麼都停」就能回答這個特定酵素題。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>比較</th>\n<th>CPS-I</th>\n<th>CPS-II</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>典型區室</td>\n<td>粒線體基質</td>\n<td>胞質CAD的一部分</td>\n</tr>\n<tr class=\"even\">\n<td>氮來源</td>\n<td>游離氨相關形式</td>\n<td>Glutamine醯胺氮</td>\n</tr>\n<tr class=\"odd\">\n<td>主要目的</td>\n<td>尿素循環排氮</td>\n<td>嘧啶核苷酸合成</td>\n</tr>\n<tr class=\"even\">\n<td>重要調控</td>\n<td>NAG為必要活化因子</td>\n<td>UTP回饋抑制，PRPP等促進</td>\n</tr>\n</tbody>\n</table></div>\n<p>上述CPS-II調控是考試基礎模型，細胞訊息與磷酸化可再改變CAD活性。不要把細菌aspartate\ntranscarbamoylase的經典CTP調控圖原封不動當作人體整條路的唯一控制點；先辨認物種及問的是哪一個酵素。</p>\n"
    },
    {
      "id": "topic-8",
      "title": "Orotate變UMP，再到UTP與CTP：兩個UMPS活性接在一起",
      "html": "<p>Orotate\nphosphoribosyltransferase將orotate與PRPP結合成OMP，釋出PPi；OMP\ndecarboxylase再移除CO₂形成UMP。人體這兩個活性位於雙功能UMP\nsynthase（UMPS）蛋白上。<strong>第一個形成的典型嘧啶核苷酸成品是UMP，不是游離uracil先被放進DNA。</strong></p>\n<p>UMP經磷酸轉移成UDP及UTP，CTP\nsynthetase再以glutamine供氮、利用ATP，把UTP的特定官能基改成CTP。這裡氮是後加到核苷酸上的，不是重新從頭搭一個cytosine環。Asp與Gln因而都能參與CTP的合成，但角色與加入時點不同。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>反應段</th>\n<th>原料／工具</th>\n<th>產物</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Orotate＋PRPP</td>\n<td>UMPS的phosphoribosyltransferase活性</td>\n<td>OMP＋PPi</td>\n</tr>\n<tr class=\"even\">\n<td>OMP脫羧</td>\n<td>UMPS的OMP decarboxylase活性</td>\n<td>UMP＋CO₂</td>\n</tr>\n<tr class=\"odd\">\n<td>UMP逐步磷酸化</td>\n<td>Kinases與磷酸供體</td>\n<td>UDP、UTP</td>\n</tr>\n<tr class=\"even\">\n<td>UTP胺化</td>\n<td>CTP synthetase、Gln、ATP</td>\n<td>CTP</td>\n</tr>\n</tbody>\n</table></div>\n<p>Hereditary orotic\naciduria典型涉及UMPS缺陷：orotate無法順利向UMP走，尿中orotic\nacid增加，嘧啶供應不足可影響DNA合成與造血，出現megaloblastic\nanemia及生長障礙。這與OTC缺陷造成的orotic\nacid增加不同：OTC在尿素循環，carbamoyl\nphosphate溢入嘧啶途徑，通常需同時注意高血氨。</p>\n<p>經典比較是UMPS缺陷偏向「orotic\nacid高＋巨幼紅血球性貧血，通常沒有尿素循環型高血氨」；OTC缺陷偏向「高血氨＋orotic\nacid高」。它是定位框架，不是任何病人只驗兩項即可確診；部分UMPS病例表現也非完整教科書組合。</p>\n<p>Uridine可經salvage形成UMP，提供繞過阻塞的路徑，並透過終產物回饋降低上游過度製造。國考問補充何種分子的機轉時可用這條旁路推導；實際治療製劑與使用方式須依疾病臨床處置，不以本節取代個別處方。</p>\n"
    },
    {
      "id": "topic-9",
      "title": "Ribonucleotide reductase：改的是糖的2′位置，不是鹼基",
      "html": "<p>RNA與DNA原料差異的一個關鍵是核糖2′位置。人類ribonucleotide\nreductase（RNR）典型將ribonucleoside\ndiphosphate（NDP）還原成deoxyribonucleoside\ndiphosphate（dNDP）：ADP→dADP、GDP→dGDP、CDP→dCDP、UDP→dUDP。<strong>它不是把游離ribose直接變deoxyribose後再拿去搭全部核苷酸，也不是把U直接換成T。</strong></p>\n<p>RNR運作涉及自由基與酵素cysteine氧化還原化學，需要還原系統再生。Thioredoxin或glutaredoxin等可參與傳遞還原力，上游最終可由NADPH支持。因此PPP不只供ribose-5-P，也能以NADPH間接支援DNA原料形成，將碳骨架供應與電子供應連在一起。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>需要改變什麼</th>\n<th>相關反應</th>\n<th>不要誤選</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Ribose 2′-OH→H</td>\n<td>RNR，NDP→dNDP</td>\n<td>不是nucleotide kinase</td>\n</tr>\n<tr class=\"even\">\n<td>增加磷酸數</td>\n<td>Kinase，dNDP→dNTP</td>\n<td>不是RNR新增第三個磷酸</td>\n</tr>\n<tr class=\"odd\">\n<td>dUMP→dTMP</td>\n<td>Thymidylate synthase</td>\n<td>不是RNR直接在鹼基上加甲基</td>\n</tr>\n</tbody>\n</table></div>\n<p>RNR需同時控制總活性及受質選擇，讓四類dNTP池保持合適比例。整體活性方面，ATP支持活化、dATP提供強烈抑制是重要考點；另一組受質專一性調控會讓不同核苷酸訊號改變偏好，不能將所有核苷酸在所有位點都說成單純抑制。</p>\n<p>為什麼不只追求「dNTP越多越好」？DNA合成需要平衡的原料池，某一種過多或其他種不足都可能干擾複製與修復。ADA缺陷的dATP累積就是例子；它並不因為dATP是DNA原料就變成對細胞有利的現象。</p>\n"
    },
    {
      "id": "topic-10",
      "title": "dTMP與葉酸循環：供一碳的同時，也改變葉酸氧化態",
      "html": "<p>dTMP由dUMP經thymidylate\nsynthase生成，所需一碳及還原當量來自N5,N10-methylene-THF。反應使uracil環的5號位置取得甲基，同時THF衍生物氧化成DHF。接著dihydrofolate\nreductase（DHFR）使用NADPH將DHF還原回THF，才有利持續補充一碳載體。</p>\n<p>這裡與一般SAM甲基轉移不同：題目問dUMP→dTMP的直接輔因子，要選N5,N10-methylene-THF，不是SAM，也不是用於purine\nC2、C8的N10-formyl-THF。三種分子都與「一碳」有關，化學型態與反應位置卻不同。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>一碳形式</th>\n<th>本章最重要用途</th>\n<th>考試辨認</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>N10-formyl-THF</td>\n<td>Purine環C2、C8</td>\n<td>Formyl碳</td>\n</tr>\n<tr class=\"even\">\n<td>N5,N10-methylene-THF</td>\n<td>dUMP→dTMP</td>\n<td>同時支援形成甲基，葉酸氧化為DHF</td>\n</tr>\n<tr class=\"odd\">\n<td>N5-methyl-THF</td>\n<td>Homocysteine再甲基化</td>\n<td>與B12、methionine循環相連</td>\n</tr>\n<tr class=\"even\">\n<td>SAM</td>\n<td>多種一般甲基轉移</td>\n<td>不直接取代thymidylate synthase的一碳供體</td>\n</tr>\n</tbody>\n</table></div>\n<p>dUMP可由dUTP經dUTPase等路徑形成，也可由其他deoxynucleotide代謝銜接。不要直接把一張簡化圖的UDP→dUDP→dUMP當成所有步驟都由同一個酵素完成；RNR只負責糖還原，磷酸數調整與dTMP形成仍是不同反應。</p>\n<p>葉酸缺乏可使dTMP供應受限，而不是讓dTMP大量堆積。核苷酸池失衡可增加uracil進入DNA的機會，DNA修復反覆處理亦可帶來損傷。這與megaloblastic\nchange的DNA合成障礙相連；B12缺乏造成folate\ntrap也能間接牽動這一套系統。看到大球性貧血仍須結合其他資料，不能由這個機轉直接確定單一營養缺乏。</p>\n"
    },
    {
      "id": "topic-11",
      "title": "藥物靶點：先在路徑上定位，再解釋為何DNA原料下降",
      "html": "<p>本節用來整理國考生化機轉，不列個人治療劑量。遇到藥名，不要只答「抑制DNA」，而要指出哪個酵素、哪個原料池先受影響；同樣最後DNA合成下降，直接作用點可以相差好幾步。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>藥物／活性形式</th>\n<th>主要考點位置</th>\n<th>推導結果</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>5-FU的FdUMP</td>\n<td>Thymidylate synthase；與酵素及folate形成穩定複合體</td>\n<td>dTMP供應下降</td>\n</tr>\n<tr class=\"even\">\n<td>Methotrexate</td>\n<td>DHFR</td>\n<td>THF再生受限，牽動dTMP及purine等葉酸依賴途徑</td>\n</tr>\n<tr class=\"odd\">\n<td>Hydroxyurea</td>\n<td>RNR相關自由基機制</td>\n<td>dNDP供應受抑</td>\n</tr>\n<tr class=\"even\">\n<td>Mycophenolic acid</td>\n<td>IMP dehydrogenase</td>\n<td>IMP→XMP→GMP支路受限</td>\n</tr>\n<tr class=\"odd\">\n<td>Azaserine</td>\n<td>Glutamine類似物，抑制相關amidotransferase</td>\n<td>阻礙glutamine供氮的合成反應</td>\n</tr>\n<tr class=\"even\">\n<td>Allopurinol／oxypurinol</td>\n<td>Xanthine oxidoreductase系統</td>\n<td>尿酸生成下降，不是直接抗發炎止痛</td>\n</tr>\n</tbody>\n</table></div>\n<p>5-FU會形成不同代謝物，除了FdUMP對thymidylate\nsynthase的作用，也可影響RNA與DNA相關過程；國考若明確寫FdUMP，就應精準回答thymidylate\nsynthase，而不是thymidine\nkinase。Kinase與synthase名字都提到thymidine／thymidylate，反應卻不同。</p>\n<p>Methotrexate與5-FU都可降低dTMP供應，但不是抑制同一酵素。DHFR在「葉酸再生」層，thymidylate\nsynthase在「dUMP變dTMP」層。Leucovorin是還原型葉酸衍生物，其與不同藥物搭配的意義不相同；不能看到它是folate就一律說只會解除所有抗代謝藥的效果。</p>\n<p>Allopurinol抑制尿酸形成，與急性關節發炎的直接止痛作用必須分開。這個區分也不等於「任何急性發作期間都絕不能使用降尿酸藥」的治療規則；本章只判斷分子作用，不把歷屆生化題擴張成未加條件的臨床處方。</p>\n"
    },
    {
      "id": "topic-12",
      "title": "嘧啶降解與整合：把合成、回收、降解三種故障分開",
      "html": "<p>嘧啶環可被還原並開環，形成較小、較水溶性的產物。Uracil主要形成β-alanine相關產物，thymine因多一個甲基而形成β-aminoisobutyrate；cytosine相關分子可先經去胺接到uracil路徑。它們不是像purine一樣全部以uric\nacid作終點。</p>\n<p>第一個還原步驟涉及dihydropyrimidine\ndehydrogenase（DPD），與前面合成路徑的dihydroorotate\ndehydrogenase（DHODH）只差部分名字，但不是同一酵素。DPD亦參與5-FU的分解，因此功能不足可增加fluoropyrimidine相關毒性風險；這是「降解藥物變慢」而非「藥物靶點變多」的概念。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>題幹線索</th>\n<th>優先定位</th>\n<th>最常錯在哪</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>HGPRT缺陷、尿酸多</td>\n<td>Purine salvage與回饋</td>\n<td>說成de novo無法合成guanine</td>\n</tr>\n<tr class=\"even\">\n<td>ADA缺陷、dATP多、免疫異常</td>\n<td>Purine nucleoside清除與dNTP失衡</td>\n<td>以為DNA原料多就更利於複製</td>\n</tr>\n<tr class=\"odd\">\n<td>Orotic acid高、貧血</td>\n<td>UMPS／pyrimidine不足</td>\n<td>與OTC高血氨未區分</td>\n</tr>\n<tr class=\"even\">\n<td>呼吸抑制影響嘧啶</td>\n<td>粒線體DHODH</td>\n<td>把CPS-II搬到粒線體</td>\n</tr>\n<tr class=\"odd\">\n<td>FdUMP、dTMP不足</td>\n<td>Thymidylate synthase</td>\n<td>選成thymidine kinase或DHFR</td>\n</tr>\n<tr class=\"even\">\n<td>Thymine分解</td>\n<td>β-Aminoisobutyrate</td>\n<td>誤選uric acid或β-alanine</td>\n</tr>\n</tbody>\n</table></div>\n<p>再以兩條比較收尾：<strong>Purine在糖上搭環，pyrimidine先做環再接糖；purine降解到尿酸，pyrimidine可開環成小分子。</strong>中間無論走de\nnovo還是salvage，都還要平衡核苷酸池，並透過RNR與thymidylate\nsynthase等步驟供DNA需要的去氧原料。</p>\n<p>最後練習說出完整因果，而不是只背酵素配病名：一個缺陷可能使受質堆積、產物不足、回饋減弱、替代通路增加；藥物也可能抑制合成、限制輔因子再生或降低降解。先判是哪一種，再追到DNA、免疫、造血或尿酸，就能處理題幹換寫法的問題。</p>\n"
    }
  ],
  "recalls": [
    [
      "Adenine、adenosine、AMP 的結構差在哪裡？",
      "從 adenine 開始依序加核糖、再加磷酸，便得到核苷與核苷酸。"
    ],
    [
      "嘌呤的環在哪個底座上組裝？",
      "PRPP 提供活化的核糖磷酸。經第一個承諾步驟後在糖上逐步組環，先形成 IMP。"
    ],
    [
      "嘌呤環上 C2、C8 從哪裡來？",
      "兩者都來自 N¹⁰-formyl-THF。Glycine 則一次提供 C4、C5、N7。"
    ],
    [
      "IMP 分流時，哪一支耗用 GTP？",
      "往 AMP 的分支使用 GTP 與 aspartate；往 GMP 的分支使用 ATP 與 glutamine。"
    ],
    [
      "HGPRT 如何同時回收兩種鹼基？",
      "Hypoxanthine 和 guanine 分別與 PRPP 形成 IMP 和 GMP，兩個反應共用 HGPRT。"
    ],
    [
      "ADA 缺乏怎麼影響 DNA 原料？",
      "Deoxyadenosine 堆積並轉成 dATP，過量 dATP 抑制 ribonucleotide reductase，造成去氧核苷酸池失衡。"
    ],
    [
      "哪一步讓嘧啶合成與呼吸鏈有關？",
      "粒線體內膜上的 dihydroorotate dehydrogenase 把電子交給 ubiquinone。"
    ],
    [
      "UMPS 的兩項活性各做什麼？",
      "先將 orotate 與 PRPP 轉成 OMP，再將 OMP 脫羧為 UMP。"
    ],
    [
      "人類 RNR 的直接受質是哪個磷酸層級？",
      "主要是 ADP、GDP、CDP、UDP 等 NDP，還原核糖的 2′ 位置形成 dNDP。"
    ],
    [
      "dUMP 變成 dTMP 時葉酸發生什麼事？",
      "N⁵,N¹⁰-methylene-THF 提供一碳與還原力並變成 DHF，需經 DHFR 再生 THF。"
    ],
    [
      "5-FU 與 methotrexate 為何都能降低 dTMP？",
      "前者的 FdUMP 抑制 thymidylate synthase，後者抑制 DHFR，降低可循環使用的還原型葉酸。"
    ],
    [
      "Thymine 與 uracil 的分解末端怎麼區分？",
      "Thymine 可產生 β-aminoisobutyrate，uracil 可產生 β-alanine。"
    ]
  ],
  "readingIntro": "先畫出 PRPP、IMP、UMP 三個節點，再標出氮源、能量與回饋調控。遇到藥物題，先判斷受影響的是鹼基、核糖還是一碳轉移。",
  "figure": "<p>先依圖表追蹤反應，再將題目線索對應到關鍵步驟。</p>",
  "questions": [
    {
      "title": "01　若把核苷去掉磷酸，能得到游離鹼基嗎？",
      "prompt": "<p>若把核苷去掉磷酸，能得到游離鹼基嗎？</p>",
      "answer": "<p>核苷原本就沒有磷酸；必須斷開糖和鹼基間的 N-glycosidic bond 才會分開兩者。</p>"
    },
    {
      "title": "02　若 IMP 充足而 GTP 不足，哪一支直接受限？",
      "prompt": "<p>若 IMP 充足而 GTP 不足，哪一支直接受限？</p>",
      "answer": "<p>AMP 分支的 adenylosuccinate 合成需要 GTP。不要依產品名稱猜消耗的能量。</p>"
    },
    {
      "title": "03　為何 HGPRT 缺乏會連帶提高從頭合成？",
      "prompt": "<p>為何 HGPRT 缺乏會連帶提高從頭合成？</p>",
      "answer": "<p>回收減少使 PRPP 增多，IMP、GMP 的回饋減弱，兩者都促進嘌呤從頭合成。</p>"
    },
    {
      "title": "04　如何從 dATP 升高連到淋巴球受損？",
      "prompt": "<p>如何從 dATP 升高連到淋巴球受損？</p>",
      "answer": "<p>RNR 受抑制後各種 dNTP 的供應失衡，影響需要增殖的淋巴球。這是 ADA 缺陷的重要機轉。</p>"
    },
    {
      "title": "05　若呼吸鏈無法有效再氧化 CoQ，哪一段嘧啶反應首先受牽連？",
      "prompt": "<p>若呼吸鏈無法有效再氧化 CoQ，哪一段嘧啶反應首先受牽連？</p>",
      "answer": "<p>Dihydroorotate 氧化成 orotate 時需將電子交給 CoQ，因此嘧啶環合成受阻。</p>"
    },
    {
      "title": "06　尿中 orotate 上升合併高血氨，優先想到哪種機轉？",
      "prompt": "<p>尿中 orotate 上升合併高血氨，優先想到哪種機轉？</p>",
      "answer": "<p>考慮 OTC 缺乏造成粒線體 carbamoyl phosphate 堆積並流入嘧啶路徑。原發性 UMPS 缺乏通常沒有高血氨。</p>"
    },
    {
      "title": "07　為何 uridine 可繞過 UMPS 缺陷？",
      "prompt": "<p>為何 uridine 可繞過 UMPS 缺陷？</p>",
      "answer": "<p>回收 uridine 可經磷酸化形成 UMP，避開 orotate 經 OMP 到 UMP 的阻塞。</p>"
    },
    {
      "title": "08　若抑制 RNR，直接缺少的是 dTMP 嗎？",
      "prompt": "<p>若抑制 RNR，直接缺少的是 dTMP 嗎？</p>",
      "answer": "<p>直接受影響的是 NDP 到 dNDP；後續多種 DNA 前驅物都可能減少，專門將 dUMP 轉成 dTMP 的是另一個酵素。</p>"
    },
    {
      "title": "09　抑制 xanthine oxidoreductase，最直接降低什麼？",
      "prompt": "<p>抑制 xanthine oxidoreductase，最直接降低什麼？</p>",
      "answer": "<p>降低尿酸生成。它位於嘌呤分解末段，不負責將 guanine 回收成 GMP。</p>"
    },
    {
      "title": "10　題目給 N¹⁰-formyl-THF 與 N⁵,N¹⁰-methylene-THF，怎麼選？",
      "prompt": "<p>題目給 N¹⁰-formyl-THF 與 N⁵,N¹⁰-methylene-THF，怎麼選？</p>",
      "answer": "<p>先找反應。嘌呤環 C2、C8 使用前者；dUMP 的甲基化使用後者。</p>"
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
        "title": "共同底物",
        "topic": "topic-2",
        "summary": "從頭合成用 PRPP 當底座，鹼基回收也用它提供核糖磷酸。",
        "questions": [
          {
            "number": 80,
            "text": "80.下列何者為核苷酸(nucleotide)重新合成路徑(de novo synthesis)及補救合成路徑(salvage pathway)皆會使用\n的重要代謝物? \nA.glycinamide ribonucleotide(GAR) \nB.5-phosphoribosylamine(PRA) \nC.formylglycinamide ribonucleotide(FGAR) \nD.5-phospho-α-D-ribosyl-1-pyrophosphate(PRPP) \n",
            "regions": [
              {
                "page": 15,
                "rect": [
                  30.0,
                  162.76,
                  570.32,
                  312.76
                ]
              }
            ],
            "id": "112-1-1-80",
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
            "point": "共同底物",
            "analysis": "從頭合成用 PRPP 當底座，鹼基回收也用它提供核糖磷酸。",
            "trap": "GAR、PRA、FGAR 都是從頭合成中間物。"
          }
        ]
      },
      {
        "id": "group-2",
        "title": "嘌呤回饋",
        "topic": "topic-2",
        "summary": "AMP 可回饋抑制 PRPP amidotransferase，降低進入嘌呤從頭合成的流量。",
        "questions": [
          {
            "number": 32,
            "text": "32.5-phosphoribosyl-1-pyrophosphate(PRPP)合成inosine 5'-monophosphate(IMP)的核苷酸生合成途徑中,PRPP \namidotransferase反應速率可受到下列那一個產物的直接負調控? \n \nA.AMP \nB.CMP \nC.FAD \nD.malonyl-CoA \n",
            "regions": [
              {
                "page": 3,
                "rect": [
                  30.0,
                  701.72,
                  570.0,
                  780.2
                ]
              }
            ],
            "id": "106-1-2-32",
            "year": 106,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/106/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=106020&c=301&s=66&q=1&verify=step1-20261013-106020-301-66-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=106020&y=2017",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/106/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=106020&c=301&s=66&q=1&verify=step1-20261013-106020-301-66-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "A"
            ],
            "point": "嘌呤回饋",
            "analysis": "AMP 可回饋抑制 PRPP amidotransferase，降低進入嘌呤從頭合成的流量。",
            "trap": "先辨識承諾步驟，再判斷同一路徑的終產物。"
          }
        ]
      },
      {
        "id": "group-3",
        "title": "共用氮源",
        "topic": "topic-3",
        "summary": "Aspartate 提供尿素的一個氮、嘌呤的 N1，也貢獻嘧啶環骨架。",
        "questions": [
          {
            "number": 93,
            "text": "93.下列何種胺基酸可作為基質(substrate)參與尿素(urea)、嘌呤(purine)或嘧啶(pyrimidine)的合成?\n \nA.甲硫胺酸(methionine)\nB.離胺酸(lysine)\nC.天門冬胺酸(aspartate)\nD.脯胺酸(proline)\n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  649.4,
                  569.96,
                  752.86
                ]
              }
            ],
            "id": "110-1-1-93",
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
            "point": "共用氮源",
            "analysis": "Aspartate 提供尿素的一個氮、嘌呤的 N1，也貢獻嘧啶環骨架。",
            "trap": "題幹要求三條路徑同時符合。"
          }
        ]
      },
      {
        "id": "group-4",
        "title": "Lesch–Nyhan",
        "topic": "topic-5",
        "summary": "HGPRT 缺乏影響回收，從頭合成反而可增加，因此 B 為錯誤敘述。",
        "questions": [
          {
            "number": 80,
            "text": "80.下列關於Lesch-Nyhan syndrome的敘述,何者錯誤?\n \nA.先天缺乏hypoxanthine-guanine phosphoribosyltransferase而導致\nB.無法藉由新合成路徑(de novo pathway)合成鳥糞嘌呤(guanine)\nC.X染色體相關之遺傳性疾病\nD.嚴重者會累積過多的尿酸,造成組織的破壞\n",
            "regions": [
              {
                "page": 12,
                "rect": [
                  30.0,
                  429.17,
                  569.96,
                  532.63
                ]
              }
            ],
            "id": "110-2-1-80",
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
            "point": "Lesch–Nyhan",
            "analysis": "HGPRT 缺乏影響回收，從頭合成反而可增加，因此 B 為錯誤敘述。",
            "trap": "題幹問錯誤選項，留意回收與從頭合成的區別。"
          }
        ]
      },
      {
        "id": "group-5",
        "title": "免疫缺陷",
        "topic": "topic-6",
        "summary": "ADA 參與嘌呤核苷降解，其缺陷可造成毒性代謝物累積與免疫缺陷。",
        "questions": [
          {
            "number": 32,
            "text": "32.下列那一個酵素的缺陷,最可能導致嘌呤核苷降解(purine nucleoside degradation)的異\n常,導致免疫缺陷疾病(immunodeficiency diseases)的發生? \n \nA.Adenosine deaminase \nB.AMP aminohydrolase \nC.Purine oxidase \nD.Xanthine oxidoreductase \n \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  416.81,
                  570.0,
                  500.81
                ]
              }
            ],
            "id": "104-2-2-32",
            "year": 104,
            "session": 2,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/104/2/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=104090&c=301&s=66&q=1&verify=step1-20261013-104090-301-66-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=104090&y=2015",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/104/2/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=104090&c=301&s=66&q=1&verify=step1-20261013-104090-301-66-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "A"
            ],
            "point": "免疫缺陷",
            "analysis": "ADA 參與嘌呤核苷降解，其缺陷可造成毒性代謝物累積與免疫缺陷。",
            "trap": "Xanthine oxidoreductase 位於較下游的尿酸生成步驟。"
          }
        ]
      },
      {
        "id": "group-6",
        "title": "粒線體關卡",
        "topic": "topic-7",
        "summary": "Dihydroorotate dehydrogenase 透過 ubiquinone 與呼吸鏈相連，因此呼吸抑制可牽動嘧啶供應。",
        "questions": [
          {
            "number": 79,
            "text": "79.當粒線體呼吸(mitochondrial respiration)被抑制時,也會造成嘧啶(pyrimidine)重新合成路徑(de \nnovo synthesis)之抑制,此現象是影響下列何種酵素所造成? \n \nA.carbamoyl phosphate synthetase \nB.aspartate transcarbamoylase \nC.dihydroorotate dehydrogenase \nD.orotidine 5'-mono-phosphate decarboxylase \n",
            "regions": [
              {
                "page": 16,
                "rect": [
                  30.0,
                  87.78,
                  570.32,
                  237.78
                ]
              }
            ],
            "id": "114-1-1-79",
            "year": 114,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/114/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=114020&c=301&s=0101&q=1&verify=step1-20261013-114020-301-0101-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=114020&y=2025",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/114/1/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=114020&c=301&s=0101&q=1&verify=step1-20261013-114020-301-0101-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "C"
            ],
            "point": "粒線體關卡",
            "analysis": "Dihydroorotate dehydrogenase 透過 ubiquinone 與呼吸鏈相連，因此呼吸抑制可牽動嘧啶供應。",
            "trap": "多數步驟位於胞質，不能據此排除粒線體關卡。"
          }
        ]
      },
      {
        "id": "group-7",
        "title": "Orotic aciduria",
        "topic": "topic-8",
        "summary": "Uridine 可經回收產生 UMP，補償 UMPS 缺陷。",
        "questions": [
          {
            "number": 79,
            "text": "79.遺傳性的orotic aciduria疾病會造成嚴重的貧血及生長障礙,病患可以攝取下列何種物質加以治療? \n \nA.uridine \nB.thymine \nC.adenosine \nD.allopurinol \n",
            "regions": [
              {
                "page": 12,
                "rect": [
                  30.0,
                  254.17,
                  570.0,
                  359.17
                ]
              }
            ],
            "id": "107-1-1-79",
            "year": 107,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/107/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=107020&c=301&s=55&q=1&verify=step1-20261013-107020-301-55-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=107020&y=2018",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/107/1/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=107020&c=301&s=55&q=1&verify=step1-20261013-107020-301-55-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "A"
            ],
            "point": "Orotic aciduria",
            "analysis": "Uridine 可經回收產生 UMP，補償 UMPS 缺陷。",
            "trap": "給嘌呤前驅物不能繞過這段嘧啶阻塞。"
          }
        ]
      },
      {
        "id": "group-8",
        "title": "去氧核苷酸",
        "topic": "topic-9",
        "summary": "RNR 還原核糖的 2′ 位置，使細胞能由核糖核苷酸供應 DNA 原料。",
        "questions": [
          {
            "number": 84,
            "text": "84.核糖核苷酸(ribonucleotide)需要何種酵素將其催化成為去氧核糖核苷酸(deoxyribonucleotide),使其\n能被用於DNA 之複製及修復? \nA.胸苷酸合成酶(thymidylate synthase) \nB.核苷單磷酸激酶(nucleoside monophosphate kinase) \nC.核糖核苷酸還原酶(ribonucleotide reductase) \nD.胞苷酸合成酶(cytidylate synthase) \n \n \n\n",
            "regions": [
              {
                "page": 15,
                "rect": [
                  30.0,
                  575.87,
                  587.0,
                  757.0
                ]
              },
              {
                "page": 16,
                "rect": [
                  30.0,
                  28.0,
                  587.0,
                  31.55
                ]
              }
            ],
            "id": "115-1-1-84",
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
            "point": "去氧核苷酸",
            "analysis": "RNR 還原核糖的 2′ 位置，使細胞能由核糖核苷酸供應 DNA 原料。",
            "trap": "磷酸化與改變核糖氧化態是不同反應。"
          }
        ]
      },
      {
        "id": "group-9",
        "title": "FdUMP 靶點",
        "topic": "topic-10",
        "summary": "FdUMP 與 thymidylate synthase 及葉酸輔因子形成穩定複合物，使 dTMP 合成受阻。",
        "questions": [
          {
            "number": 79,
            "text": "79.化療藥物5-fluorouracil 經酵素作用轉化成5-fluoro-2'-deoxyuridine 5'-monophosphate(FdUMP),會\n與下列何種酵素結合抑制DNA 合成? \n \nA.黃嘌呤氧化酶(xanthine oxidase) \nB.胺基甲醯磷酸合成酶II(carbamoyl phosphate synthase II) \nC.腺苷脫胺酶(adenosine deaminase) \nD.胸苷酸合成酶(thymidylate synthase) \n",
            "regions": [
              {
                "page": 15,
                "rect": [
                  30.0,
                  462.83,
                  570.32,
                  612.86
                ]
              }
            ],
            "id": "114-2-1-79",
            "year": 114,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/114/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=114090&c=301&s=0101&q=1&verify=step1-20261013-114090-301-0101-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=114090&y=2025",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/114/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=114090&c=301&s=0101&q=1&verify=step1-20261013-114090-301-0101-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "D"
            ],
            "point": "FdUMP 靶點",
            "analysis": "FdUMP 與 thymidylate synthase 及葉酸輔因子形成穩定複合物，使 dTMP 合成受阻。",
            "trap": "區分直接酵素靶點與下游 DNA 合成下降。"
          }
        ]
      },
      {
        "id": "group-10",
        "title": "嘧啶降解",
        "topic": "topic-12",
        "summary": "Thymine 的降解可產生 β-aminoisobutyric acid。",
        "questions": [
          {
            "number": 84,
            "text": "84.胸腺嘧啶(thymine)經代謝後在尿液中可測得的代謝產物為下列何者?\n \nA.β-aminoisobutyric acid\nB.β-alanine\nC.uridine\nD.citidine\n",
            "regions": [
              {
                "page": 13,
                "rect": [
                  30.0,
                  177.17,
                  569.96,
                  280.63
                ]
              }
            ],
            "id": "111-1-1-84",
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
            "point": "嘧啶降解",
            "analysis": "Thymine 的降解可產生 β-aminoisobutyric acid。",
            "trap": "β-alanine 對應 uracil 的降解。"
          }
        ]
      }
    ]
  }
});
