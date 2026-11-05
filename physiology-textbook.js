const physiologyTextbooks = {
  "cell-physiology": [
    {
      "title": "膜與跨膜運輸",
      "topic": "membrane",
      "html": "<p>細胞膜一方面隔開細胞內液與細胞外液，一方面選擇性地允許物質交換。脂雙層的疏水核心容許 O₂、CO₂ 等小型非極性分子較容易通過，卻限制離子和許多極性分子直接穿膜。因此，兩側即使有濃度差，也要先看膜是否通透。磷脂脂尾的組成會改變堆積程度，膽固醇則能緩衝膜流動性隨溫度的變化。例如在低溫下，膽固醇可干擾脂尾過度緊密排列。</p>\n<p>對能直接穿越膜的中性溶質，簡化的 Fick 關係是<strong>淨擴散速率＝通透係數 × 面積 × 濃度差</strong>。若用擴散係數推導通透性，還需考慮擴散距離。若題目已給膜通透係數，通常不再把厚度除一次。在其他條件相同時，面積增加一倍、濃度差縮成一半，淨速率約不變。離子則同時受到化學梯度和膜電位作用，兩者合起來才是離子的電化學驅動力。</p>\n<p>膜蛋白提供了另外幾條路。通道形成孔道，讓離子沿自己的電化學梯度移動。載體透過結合與構型改變搬運溶質，有限的結合位會使運輸速率趨近飽和。GLUT 雖然需要載體，葡萄糖仍沿自身濃度梯度移動，因此屬促進性擴散。若是 Na⁺/K⁺-ATPase，每消耗 1 ATP 排出 3 Na⁺、送入 2 K⁺，屬直接耗能的初級主動運輸。</p>\n<p>鈉鉀幫浦建立的低胞內 Na⁺，可以供其他蛋白使用。小腸頂端膜的 SGLT1 讓 Na⁺ 順梯度進入，藉此推動葡萄糖一起進入。葡萄糖接著經基底外側的 GLUT2 離開，鈉鉀幫浦維持低胞內 Na⁺。沿這條路走一遍，可看到同一個吸收過程同時包含初級主動、次級主動和促進性擴散。NCX 的典型正向運輸則借用 Na⁺ 內流驅動 Ca²⁺ 外排，兩種離子方向相反。<strong>讀圖時先指認 Na⁺ 的順梯度方向，再找 Ca²⁺ 的反向箭頭。</strong></p>\n<!--figure-->\n<p>這些蛋白讓膜兩側維持不同的溶質組成。當其中一些粒子被留在一側，它們接下來會影響水在兩側的分布。</p>\n"
    },
    {
      "title": "滲透與細胞體積",
      "topic": "osmosis",
      "html": "<p>水可以穿越許多細胞膜，溶質能否跟著穿過則視溶質與膜而異。滲透濃度描述溶液中粒子的數量，張力則描述外液對細胞平衡體積的影響。理想近似下，1 mmol 的 NaCl 解離後約有 2 mOsm，1 mmol 的尿素約有 1 mOsm。計數之後，還要判斷這些粒子在觀察的時間內能否留在膜的一側。</p>\n<!--figure-->\n<p>設細胞起初含有 300 mOsm/L 的不可透溶質，將它置於足夠大的外液中。如果外液含有 450 mOsm/L 的不可透粒子，細胞會失水。若不可透粒子總量不變，平衡時胞內濃度升至約 450 mOsm/L，則 <strong>V終/V初＝300/450＝2/3</strong>。同一細胞若改置於由 200 mOsm/L 不可透粒子和 100 mOsm/L 尿素組成的外液，起初兩側等滲。尿素逐漸進入、內外尿素濃度接近後，有效外液濃度約是 200 mOsm/L，理想模型的細胞體積會趨近 1.5 倍。這就是<strong>等滲可以低張</strong>的原因。</p>\n<p>血漿題也有同一個區別。當 glucose 和 BUN 以 mg/dL 表示，常用總滲透濃度估算式為 <strong>2 × Na⁺＋glucose/18＋BUN/2.8</strong>。112-2 第 65 題的 Na⁺ 135、glucose 180、BUN 56，代入得約 300 mOsm/kg H₂O。若改問有效滲透濃度，常用近似式扣除尿素貢獻，得約 280 mOsm/kg H₂O。想預測細胞脹縮，應先問哪種粒子能維持跨膜水分驅動力。</p>\n<p>同一張膜除了能限制溶質與水的移動，也能選擇性地通過某些帶電粒子。選擇性通透帶來的下一個結果，就是膜電位。</p>\n"
    },
    {
      "title": "平衡電位與靜止膜電位",
      "topic": "voltage",
      "html": "<p>假設細胞膜只對 K⁺ 通透，且胞內 K⁺ 比胞外高。通道打開時，K⁺ 起初沿濃度梯度外流，膜內相對變負。隨著膜內變負，電力又把 K⁺ 拉回。當兩股力量相抵時，K⁺ 的<strong>淨被動移動為零</strong>，對應的膜電位稱為 K⁺ 平衡電位。通道此時仍可開啟，兩個方向的個別離子移動仍能發生。</p>\n<p>在 37 °C，Nernst 方程可寫成 <strong>E ≈ (61 mV/z) × log₁₀([外]/[內])</strong>。用外 K⁺ 4、內 K⁺ 140 mmol/L 代入，得到 Eₖ 約 −94 mV。若外 K⁺ 變成 6 mmol/L，Eₖ 增加約 10.7 mV，變得較不負。同樣增加 2 mmol/L，外 Na⁺ 從 145 到 147 時，Eₙₐ 僅增加約 0.36 mV。靜止膜通常對 K⁺ 較通透，因此兩種處理對靜止電位的影響差異更大。</p>\n<p>真實細胞有多種通道。Nernst 各算一種離子的平衡電位，Goldman 方程再把多種離子濃度及相對通透性納入。對單一離子，常用 <strong>Iᵢ＝gᵢ(Vₘ−Eᵢ)</strong> 判斷電流。若 Vₘ＝−65 mV、ECl＝−75 mV，開啟 Cl⁻ 通道會讓膜電位更負。按正電荷外流為正電流的慣例，此時正電流由 Cl⁻ 內流形成。若 Vₘ 已等於 ECl，開通道當下雖無淨 Cl⁻ 電流，電導增加仍可減弱同樣大小的興奮性輸入造成的電位改變，形成分流抑制。</p>\n<p>靜止膜電位因此是一個由多種電流維持的穩態。當某些通道突然改變開關，膜電位會離開原來的穩態。在可興奮細胞中，這種變化一旦觸發正回饋，就會進入動作電位。</p>\n"
    },
    {
      "title": "動作電位與軸突傳導",
      "topic": "action",
      "html": "<p>典型神經元受到刺激時，起初的膜電位變化通常是分級的，能隨刺激大小改變、彼此加成，也會隨距離衰減。去極化達到足夠程度後，電壓門控 Na⁺ 通道開啟。Na⁺ 內流讓膜更正，進一步開啟更多 Na⁺ 通道，形成快速上升相。膜電位超過 0 mV 的部分稱過衝。單次放電只需移動很少比例的離子，外 Na⁺ 仍遠高於內 Na⁺。</p>\n<!--figure-->\n<p>快速去極化之後，Na⁺ 通道失活，延遲開啟的 K⁺ 通道使 K⁺ 外流增加，膜再極化。K⁺ 電導回落較慢時，電位可短暫更接近 Eₖ，形成後超極化。絕對不反應期的關鍵是可再開啟的 Na⁺ 通道不足。相對不反應期已有部分 Na⁺ 通道恢復，但仍可能因 K⁺ 電導偏高而需要較強刺激。判題時要把靜止時「關閉但可開啟」和放電後「失活、需要復原」分清楚。</p>\n<p>一段軸突放電後，局部電流使下一段膜去極化，達閾後重新產生動作電位。粗軸突的軸內阻較低，電流較容易向前傳。髓鞘提高膜電阻並降低膜電容，結間較少漏電，也較容易改變電位，動作電位在 Ranvier 結再生。較強的刺激通常用較高的放電頻率編碼；同一膜狀態下，單次動作電位的振幅通常近似固定。若題目改變的是胞外 Na⁺ 或可用的 Na⁺ 通道數，波形本身才可能明顯改變。</p>\n<p>軸突能將訊號傳到很遠，但到達末端後，下一個細胞仍需要接到訊息。多數神經肌肉接合處藉由化學突觸完成這次交接。</p>\n"
    },
    {
      "title": "從神經末梢到肌肉動作電位",
      "topic": "synapse",
      "html": "<p>當神經動作電位到達末端，電壓門控 Ca²⁺ 通道開啟，Ca²⁺ 促使囊泡融合並釋放 ACh。ACh 擴散到肌肉終板，活化 Nm 受體。此受體為陽離子通道，在終板靜止電位附近形成淨內向電流。這個局部分級去極化就是終板電位（EPP）。它使鄰近肌膜達閾後，電壓門控 Na⁺ 通道才產生能沿肌膜和橫管傳導的<strong>肌肉動作電位</strong>。AChE 隨後分解 ACh，限制訊號作用時間。</p>\n<!--figure-->\n<p>一顆囊泡自發釋放可形成微小終板電位（MEPP），一次神經刺激誘發多顆囊泡釋放，形成較大的 EPP。若主要是釋放囊泡數下降，EPP 可減小，而單顆囊泡引起的反應未必等比例改變。若突觸後的 Nm 受體減少，則同樣的 ACh 可能引起更小的反應。這使我們能分辨突觸前 Ca²⁺ 內流或囊泡融合受損，與典型 AChR 型重症肌無力的突觸後受體減少。</p>\n<p>接合處的干擾可依「釋放、分解、接收」排列。肉毒毒素使囊泡融合受阻，ACh 釋放降低。沙林抑制 AChE，ACh 在間隙累積，故可能同時出現縮瞳等 muscarinic 效應，以及肌抽搐等 nicotinic 效應。兩者都會影響肌肉活動，但影響 ACh 的方向不同。中樞突觸還可透過多個興奮與抑制性突觸後電位加成，最後由細胞整合是否放電。</p>\n<p>一旦肌肉自己發出動作電位，訊號進入纖維深處，接下來便是把短暫電位變化轉成能產生力量的 Ca²⁺ 訊號。</p>\n"
    },
    {
      "title": "骨骼肌的興奮—收縮偶聯",
      "topic": "skeletal",
      "html": "<p>典型骨骼肌的三聯體由一條 T-tubule 和兩側肌漿網終池構成。T-tubule 是肌膜內陷，將去極化送進纖維深部。位於橫管膜的 Cav1.1（DHPR）感測電位，與肌漿網膜上的 RyR1 耦聯，促使肌漿網釋出 Ca²⁺。鈣先結合薄肌絲上的 troponin C，改變 troponin 複合體構型，讓 tropomyosin 移開，露出 actin 上的 myosin 結合位。<strong>橫管傳電，肌漿網供鈣，TnC 接鈣</strong>，三個位置各解一種考法。</p>\n<!--figure-->\n<p>肌節縮短時，粗、細肌絲相對滑動。A band 的長度由粗肌絲全長決定，因此近似不變。I band 只有細肌絲，H zone 只有粗肌絲，兩者都可隨重疊增加而縮短。圖上先找兩條 Z 線，再用粗肌絲全長定出 A band，最後圈出只有一種肌絲的區域。</p>\n<p>橫橋循環也有固定順序。ATP 與 myosin 結合，讓 myosin 從 actin 解離。ATP 水解後，ADP 與 Pi 暫留，頭部進入高能構型。頭部再與 actin 互動，Pi 釋放與動力衝程相連，之後 ADP 離開。缺 ATP 時既難以讓橫橋解離，也會影響 SERCA 把 Ca²⁺ 回收進肌漿網。這就把「ATP 結合」「ATP 水解」「屍僵」三種歷屆問法放回同一循環。</p>\n<p>整塊肌肉的張力受初始長度、負載和刺激頻率影響。肌絲重疊適當時主動張力較大，過短或過長均可降低。被動張力則會在拉長時由彈性構造提供。增加向心收縮負載通常降低縮短速度。若刺激間隔縮短，Ca²⁺ 尚未完全回收，張力可加成。整肌也能靠招募更多運動單位增力，通常較小、耐疲勞的單位先被招募。</p>\n<p>骨骼肌的薄肌絲開關解釋了隨意動作。血管、腸道等平滑肌也用 Ca²⁺ 控制收縮，但它們把調節放在不同位置。</p>\n"
    },
    {
      "title": "平滑肌與心肌如何改寫這條路徑",
      "topic": "smooth",
      "html": "<p>平滑肌可在去極化後經 L 型 Ca²⁺ 通道引入外鈣，也可由 Gq–PLC–IP₃ 等路徑讓胞內儲庫釋鈣。Ca²⁺ 結合 calmodulin，活化 MLCK，讓 myosin 調節輕鏈磷酸化，促進橫橋循環。MLCP 則去除磷酸。當 MLCP 被抑制，即使胞內 Ca²⁺ 沒有明顯上升，也可能因輕鏈磷酸化增加而提高張力，稱為鈣敏感化。</p>\n<!--figure-->\n<p>許多單一單位型平滑肌可經 gap junction 協調活動。多單位型的細胞則較能獨立調控。平滑肌沒有典型肌節，肌絲可錨定在 dense bodies，部分平滑肌能以相對低的 ATP 消耗維持張力。腸道慢波若沒有達到閾值引發 Ca²⁺ spike，膜電位雖然週期性變化，仍不能直接推成每一次都出現明顯收縮。</p>\n<p>心室肌和骨骼肌都透過 troponin C 調節薄肌絲，但心室肌的 Cav1.2 會讓外鈣實際流入，觸發 RyR2 釋鈣。骨骼肌 Cav1.1 主要感測電位並耦聯 RyR1。心室肌的平台期又讓不反應期與收縮高度重疊，限制張力加成與強直。把三種肌肉放回同一順序，先問<strong>刺激從哪來、Ca²⁺ 從哪來、直接結合誰、最後由誰調節張力</strong>，即可解開多數比較題。</p>\n"
    }
  ],
  "neurophysiology": [
    {
      "title": "自主神經如何把中樞指令送到器官",
      "topic": "autonomic",
      "html": "<p>上一章追蹤的是單一細胞如何產生與傳遞訊號。本章把視角移到神經迴路。中樞必須接收身體狀況、整合資訊，再將指令送回器官。自主神經是理解這個架構的起點，因為同樣一個「增加交感活動」的指令，可以同時加快心跳、改變瞳孔與血管張力。</p>\n<p>典型自主傳出有兩站。節前神經元的細胞體位於中樞，軸突先在周邊神經節接到節後神經元，節後軸突再到效應器。交感節前主要起於 T1–L2，副交感節前由腦幹與 S2–S4 發出。兩者在神經節典型都用 ACh 作用於 Nn。真正造成器官反應差異的，往往是<strong>節後末端釋出的遞質及效應器受體</strong>。</p>\n<!--figure-->\n<p>一般交感節後以 norepinephrine 為主，副交感節後以 ACh 為主。典型汗腺是交感支配，但節後以 ACh 作用在 muscarinic 受體。腎上腺髓質接受交感節前 ACh，嗜鉻細胞經 Nn 活化後把兒茶酚胺釋入血中。因此題目問「支配腎上腺髓質的神經末端釋出什麼」，答案是 ACh。若問「髓質釋入血中的主要激素」，才考慮 epinephrine。</p>\n<p>受體必須和組織一起看。α1 活化可使虹膜放射肌收縮而散瞳，β1 可提高竇房結放電，β2 在支氣管平滑肌通常促進舒張。M2 可減慢心臟節律，M3 在虹膜括約肌促縮瞳。M3 若在血管<strong>內皮</strong>，則可經 NO 使鄰近血管平滑肌舒張。114-1 第 49 題把心臟、汗腺、支氣管和虹膜放在四個選項，就是要逐項核對「遞質—受體—位置—方向」。少核對其中一步，就容易被部分正確的選項騙到。</p>\n<p>這些傳出反應由感覺回饋驅動。例如起立時動脈壓可短暫下降，壓力受器放電減少，交感反射增加。此例提醒我們，<strong>感覺傳入頻率與器官輸出可以朝相反方向變化</strong>。接下來先看感覺如何被編碼，再追它往中樞的路。</p>\n"
    },
    {
      "title": "體感如何編碼刺激並走向大腦",
      "topic": "somatic",
      "html": "<p>刺激作用在受器，先形成局部受器電位。刺激變強時，受器電位通常增加，傳入訊號可用更高的放電頻率與更多被招募的纖維來表達。受器在持續刺激下若迅速降低放電，稱快適應，適合報告振動或刺激變化。慢適應受器則能持續反映壓迫、牽張或位置。接受野大小是另一件事，小接受野及高受器密度有利精細定位。遇到題目把「適應快」與「定位精細」混寫，要分別判斷。</p>\n<p>精細觸覺、振動及意識性本體覺主要走後柱–內側丘系。第一級神經元細胞體在背根神經節，傳入纖維進脊髓後先<strong>同側</strong>上行。下肢走較內側的薄束，上半身走較外側的楔束。到延腦換神經元後才交叉，接著往 VPL 和體感皮質。痛溫覺也由背根神經節傳入，但在脊髓背角換神經元，第二級纖維經前白連合交叉後，走對側前外側系統。身體的 VPL 與臉部主要的 VPM 也要分開。</p>\n<p>由此可以直接推病灶。右側脊髓病灶以下，右側振動與本體覺可下降，左側痛溫覺可下降。痛溫缺損可能從病灶以下數節開始，因為部分傳入進髓後會先在鄰近節段上下走。109-1 第 54 題只給右腳精細觸覺喪失、痛溫保留，先排除前外側系統，再用後柱在腰髓尚未交叉選右側。若病灶換在延腦交叉以上，就要重新推側別。</p>\n<p>痛覺本身也分傳入纖維。薄髓鞘 Aδ 較常傳定位清楚的快痛，無髓 C 纖維較常傳瀰漫慢痛，可涉及 glutamate 和 substance P。內臟傳入與體表傳入若會聚於同一脊髓神經元，可形成牽涉痛。112-2 第 54 題問快痛纖維，115-2 第 54 題改問慢痛遞質，兩題應用同一張對照。特殊感覺仍遵循刺激轉導、傳入與中樞定位，只是受器結構和交叉方式各有特色。</p>\n"
    },
    {
      "title": "視覺從光轉導走到視野定位",
      "topic": "vision",
      "html": "<p>黑暗時，感光細胞外節的 cGMP 較高，使陽離子通道維持開啟，細胞相對去極化並持續釋放 glutamate。光活化感光色素後，經 transducin 活化 PDE，cGMP 降低，外節陽離子通道關閉，感光細胞<strong>超極化</strong>，glutamate 下降。典型 ON bipolar cell 因 mGluR6 訊號減弱而解除抑制，反而去極化。OFF bipolar cell 的反應方向不同。作答時先說清楚題幹問的是感光細胞、雙極細胞還是節細胞，避免把同一次光照的不同細胞反應混在一起。</p>\n<p>桿細胞擅長弱光偵測，較多匯聚提高靈敏度，但降低定位解析。錐細胞負責明視、色覺與高解析度，中央凹特別集中。視神經盤是節細胞軸突離開眼球的位置，缺乏感光細胞。光從視網膜內層進入再到感光細胞，訊號則由感光細胞經雙極細胞到節細胞。若問哪類細胞典型以動作電位輸出，應想到節細胞。</p>\n<p>感光細胞知道光落在哪裡，臨床視野題卻用病人從外界看不見的範圍描述。因此要反投影。左半視野投到兩眼視網膜的右半邊，右半視野投到兩眼視網膜的左半邊。鼻側視網膜纖維在視交叉交叉，顳側視網膜纖維不交叉。以右半視野為例，訊號分別落在左眼顳側與右眼鼻側視網膜，最後都進入左側視交叉後路徑。</p>\n<!--figure-->\n<p>視神經病灶可造成同側單眼缺損。中央視交叉受損，典型為雙顳側偏盲。交叉後單側病灶可造成對側同向缺損。顳葉 Meyer loop 傳遞對側上視野訊號，病灶可造成對側上象限缺損。107-1 第 49 題給左眼內側、右眼外側都看不見，先把兩者標為右半視野，再定位左側交叉後。109-1 第 50 題從兩眼外側視野都缺，反推中央視交叉。用同一張圖可以正推與反推。</p>\n<p>屈光與視野是不同問題。看近時睫狀肌收縮，使懸韌帶放鬆，水晶體變凸。典型近視的遠物焦點在視網膜前，可用凹透鏡。遠視傾向焦點在視網膜後，可用凸透鏡。老花主要是調節能力下降。正透鏡焦距 0.5 m 時，屈光度為 +2 D。這類題需先定位焦點，然後才判鏡片方向。</p>\n"
    },
    {
      "title": "耳蝸與前庭如何把位移轉成訊號",
      "topic": "hearing",
      "html": "<p>聲音經鼓膜和聽小骨傳到卵圓窗，鐙骨的運動引起耳蝸液體及基底膜行波。Scala vestibuli 與 scala tympani 含外淋巴，頂端由 helicotrema 相通。Scala media 含高 K⁺ 的內淋巴。毛束朝最高纖毛偏轉會拉開機械通道，高 K⁺ 的內淋巴和耳蝸內電位讓 <strong>K⁺ 進入毛細胞</strong>，使其去極化。基底側接著開啟 Ca²⁺ 通道並釋放遞質。104-1 第 4 題問最初的離子移動，答 K⁺ 內流，Ca²⁺ 內流是後面的步驟。</p>\n<!--figure-->\n<p>基底膜的基底部較窄、較硬，對高頻反應強，頂端較寬柔，偏低頻。內毛細胞負責大部分聽覺感覺輸出。外毛細胞可放大並銳化局部基底膜振動。聽神經進入耳蝸核後，很早便形成雙側投射，因此耳蝸後的單側中樞病灶通常不等同單耳全聾。111-2 第 49 題問耳蝸頂端孔道時，應由腔室內容區分外淋巴與內淋巴。112-1 第 54 題問高頻位置，應回到基底膜力學。</p>\n<p>前庭半規管感受角加速度，橢圓囊與球囊感受線性加速度及頭位。頭向右轉時，典型水平 VOR 使眼球慢相向左，以穩定視線。眼震以快相命名。112-1 第 48 題的左耳冷水刺激，在題設與清醒條件下快相向右。若改問慢相則反過來。聽覺和前庭都從毛細胞開始，但前者多問聲波、頻率和路徑，後者多問加速度與雙側訊號不對稱。</p>\n"
    },
    {
      "title": "嗅覺和味覺如何辨認化學刺激",
      "topic": "chemical",
      "html": "<p>嗅神經元位於嗅上皮，氣味分子在纖毛活化嗅覺 GPCR，經 Golf、adenylyl cyclase 與 cAMP 影響陽離子通道。受器電位達閾後，初級嗅神經元放電，軸突穿過篩板到嗅球。同類受體神經元可匯聚到特定嗅小球，再由 mitral／tufted cells 輸出。108-1 第 48 題問受體位置，應答嗅上皮。114-1 第 47 題問匯聚位置，則指嗅球 glomerulus。兩者在同一路徑的不同站。</p>\n<p>味蕾受器細胞經離子通道或 GPCR 等轉導，再把訊息交給感覺纖維。舌前 2/3 味覺主要走 VII 鼓索，舌後 1/3 多走 IX，會厭附近多走 X。舌前部的一般感覺主要是 V3 舌神經，兩類纖維可在鼓索併入舌神經後同行。題目若給神經切斷位置，應判是在匯合前還是後。XII 主要為舌肌運動，和味覺傳入分開。</p>\n<p>感覺訊號到達中樞後，有些讓人意識到刺激，有些直接在脊髓調節動作。下一節用肌梭說明第二種用法。</p>\n"
    },
    {
      "title": "脊髓如何用感覺訊號修正運動",
      "topic": "reflex",
      "html": "<p>肌梭與梭外肌纖維平行，感受肌長與變化速度。Ia 初級末梢對快速牽張敏感，II 次級末梢較偏持續肌長。Golgi tendon organ 與肌纖維串聯，透過 Ib 反映張力。若題目給「肌肉正在主動縮短」，肌長和張力可以朝不同方向改變，不能用同一種受器回答。</p>\n<p>敲髕腱短暫拉長股四頭肌，Ia 傳入脊髓後直接興奮同名肌 α 運動神經元。這一支是典型單突觸伸張反射。Ia 還可透過抑制性中間神經元降低拮抗肌活動。數突觸時，要分清同名肌的主支路和拮抗肌的側支。若是腳底刺痛，則經多突觸迴路使同側屈肌收縮以縮回，並使對側伸肌收縮以承重。</p>\n<!--figure-->\n<p>α 運動神經元使梭外肌纖維縮短。若肌梭也跟著鬆掉，便無法有效偵測後續牽張。γ 運動神經元使梭內肌兩端收縮，維持感覺區張力。這解釋 110-1 第 51 題所問的 α–γ 共活化。113-1 第 56 題進一步只問 dynamic γ，這時重點改為提高肌梭對<strong>長度變動速度</strong>的反應。脊髓能即時調整反射，但隨意運動的選擇、下達與修正還需要更上層的網絡。</p>\n"
    },
    {
      "title": "從脊髓到皮質、基底核與小腦",
      "topic": "motor",
      "html": "<p>多數皮質脊髓束纖維在延腦錐體交叉。若病灶在交叉前，通常影響對側肢體。若在交叉後的脊髓，常影響病灶以下同側運動。上運動神經元病灶在急性期可先低張，後續常見反射亢進、痙攣或 Babinski 徵。下運動神經元受損會中斷反射傳出和肌肉輸出，較常出現低反射、萎縮與肌束顫動。若同時有兩組徵象，像部分 ALS 題，要考慮病變是否同時影響上下運動神經元。</p>\n<p>基底核的經典模型要從輸出端開始。GPi／SNr 平時抑制視丘。直接路徑讓紋狀體抑制 GPi／SNr，視丘因此被去抑制，較能促進選定動作。間接路徑抑制 GPe，使 STN 較能興奮 GPi／SNr，增加視丘受到的抑制。SNc 的 dopamine 促 D1 直接路徑並抑制 D2 間接路徑，兩者在這個模型中都傾向促動。109-2 第 50 題只問如何影響運動皮質，直接回答經視丘即可。若改問 dopamine 缺乏，才需要沿上述路徑推抑制方向。</p>\n<p>小腦依預期動作和感覺回饋做時序與誤差修正。半球病灶常見同側肢體動幅障礙及動態顫抖，蚓部病灶較常有軀幹或步態不穩，前庭小腦病變可影響眼動和平衡。Climbing fibers 來自下橄欖核，Purkinje 細胞是小腦皮質的抑制性輸出。108-2 第 52 題從症狀定位小腦，102-2 第 3 題從輸入纖維追下橄欖核。若考學習投籃，則應理解反覆用誤差修正技巧和單純記住規則的差別。</p>\n"
    },
    {
      "title": "由保留功能反推語言、記憶與注意網絡",
      "topic": "cortex",
      "html": "<p>語言題可先問三件事：說話是否流暢、是否理解、能否複誦。Broca 型常表現費力而不流暢，理解相對保留。Wernicke 型可流暢但內容失當，理解受損。傳導型在流暢度與理解相對保留時，複誦特別差，典型考點是弓狀束及相關連結。若只是發音不清，也要分別考慮構音和語言處理。</p>\n<p>海馬迴和內側顳葉對形成新的陳述性記憶重要。病灶後難以建立新事件或事實記憶，稱順向失憶。程序性學習涉及基底核、小腦及運動網絡，因此 115-1 第 52 題的雙側海馬受損者可能仍學會騎車，卻未必記得昨天與誰練習。當題目換掉活動內容，要先判它在測可敘述的經驗，還是重複練習的技巧。</p>\n<p>注意力病灶也可能表現為看漏一邊。視放射病灶引起的偏盲，可沿兩眼對應視野定位。右側頂葉注意網絡病灶引起的左側忽略，則可在刪線、畫鐘或雙側同時刺激時暴露，影響也可能不限於視覺。112-1 第 49 題給視網膜功能保留，提示要把推理往高階注意網絡移動。</p>\n"
    },
    {
      "title": "腦波與睡眠如何反映神經網絡狀態",
      "topic": "sleep",
      "html": "<p>腦電圖反映大量皮質神經元活動的總和。清醒放鬆閉眼時枕部 α 較明顯。N1 轉向較多 theta，N2 的辨認線索是睡眠紡錘波與 K complex，N3 有較多高振幅慢波。REM 則可能呈低振幅混合頻率，外觀接近清醒。若同時看到快速眼動和骨骼肌張力大幅下降，才更能支持 REM。114-1 第 51 題用 K complex 找 N2，115-2 第 48 題用 EEG 相似性比較 REM 與清醒。兩題都先抓最具辨識度的線索。</p>\n<p>入睡還受恆定睡眠壓力與日夜節律影響。SCN 接收視網膜的光照資訊，並透過下游自主路徑調節松果體褪黑激素。清醒網絡則有藍斑核的 norepinephrine 等訊號。Orexin 幫助維持清醒狀態穩定，其缺失與第一型猝睡症相關。看到「與白天清醒最相關的 NE 神經元」，找藍斑核。看到「猝睡症的缺失訊號」，才找 orexin。</p>\n"
    },
    {
      "title": "中樞的液體環境與體溫回饋",
      "topic": "homeostasis",
      "html": "<p>神經網絡要正常工作，也需要穩定的周邊環境。腦微血管內皮的 tight junction 是 BBB 的主要物理屏障。星狀膠細胞末端、周細胞等參與維持，星狀膠細胞也有胞外 K⁺ 緩衝功能。中樞髓鞘則由 oligodendrocytes 形成。脈絡叢的血液–CSF 障壁主要在脈絡叢上皮緊密連結。遇到「血到腦實質」和「血到腦室」，先把最後要進入的區室分開。</p>\n<p>CSF 自側腦室經 Monro 孔到第三腦室，再經大腦導水管到第四腦室，經正中與外側開口到蛛網膜下腔。局部阻塞使上游較易擴張。若雙側側腦室和第三腦室擴張，而第四腦室相對不大，可考慮導水管阻塞。題目若把阻塞改到單側 Monro 孔，擴張範圍也會隨之縮小。</p>\n<p>體溫調節也靠回饋。下視丘視前區整合核心與周邊溫度訊號。發燒初期，PGE₂ 相關訊號使設定點上升，原本的體溫相對低於新設定點，因此可先畏寒、血管收縮和寒顫。設定點回落時，同一個體溫相對偏高，反應變成血管擴張及出汗。過熱則可能在設定點沒有上升時，由產熱過多或散熱受限造成。這和本章開頭的壓力反射有相同推理方式：先找系統感測的變量，再看中樞如何比較，最後推效應器方向。</p>\n"
    }
  ]
};

function physiologyReading(chapter, chapterRoot) {
  const sections = physiologyTextbooks[chapter.id];
  if (!sections) return '';
  const jump = sections.map((section, i) => '<button type="button" data-phys-section="phys-text-' + i + '">' + (i + 1) + '　' + section.title + '</button>').join('');
  const body = sections.map((section, i) => {
    const topic = chapter.topics.find(item => item.id === section.topic);
    const figure = topic?.html.match(/<figure[\s\S]*?<\/figure>/)?.[0] || '';
    const explanation = section.html.replace('<!--figure-->', figure);
    const deeper = (section.topic === 'smooth' && chapter.id === 'cell-physiology')
      ? ' · <a href="' + chapterRoot + '/topic/compare">三種肌肉完整比較</a>' : '';
    return '<section aria-labelledby="phys-text-' + i + '"><h2 id="phys-text-' + i + '" tabindex="-1">' + (i + 1) + '　' + section.title + '</h2>'
      + explanation + '<p class="quiz-note"><a href="' + chapterRoot + '/topic/' + section.topic + '">本節深入閱讀、公式與回想 →</a>' + deeper + '</p></section>';
  }).join('');
  return '<nav class="study-actions" aria-label="正文目錄">' + jump + '</nav>'
    + '<article class="lesson">' + body + '<footer class="lesson-footer">教材參考：' + chapter.sources + '</footer></article>'
    + '<section class="quiz-panel"><h2>章末練習</h2><p>先用五題複習題確認推理步驟。再用 20 題章末測驗檢查是否達到 18 題，交卷後可按主題回查錯題。</p>'
    + '<div class="study-actions"><a class="study-button" href="' + chapterRoot + '/topic/review">五題複習</a>'
    + '<a class="quiz-button" href="' + chapterRoot + '/practice">20 題章末測驗 →</a>'
    + '<a class="study-button" href="' + chapterRoot + '/exams">本章歷屆題與解析</a></div></section>';
}

async function renderPhysiologyChapterPractice(chapter) {
  const app = document.getElementById('physiology-chapter-practice');
  const generation = quizGeneration;
  const size = 20;
  try {
    const bank = await quizLoadBank('physiology');
    if (!app.isConnected || generation !== quizGeneration) return;
    const byId = new Map(bank.map(question => [question.id, question]));
    const pool = chapter.exams.notes.flatMap(group => group.notes.flatMap(([id, point, analysis]) => {
      const question = byId.get(id);
      return question && question.answers.length === 1 && /^[A-D]$/.test(question.answers[0])
        ? [{ question, group: group.name, point, analysis }] : [];
    }));
    if (pool.length < size) throw new Error('Insufficient questions');
    app.innerHTML = '<section class="quiz-panel"><p>每回從本章既有題庫抽 20 道有單一採計答案的原題，先從各考點各抽一題，其餘隨機補足。每題 5 分，18 題為 90 分。交卷後顯示各考點表現。</p>'
      + '<button class="quiz-button" type="button" id="phys-practice-start">抽 20 題</button></section><div id="phys-practice-round"></div>';
    const round = app.querySelector('#phys-practice-round');
    const start = app.querySelector('#phys-practice-start');
    start.onclick = () => {
      if (round.querySelector('form:not([data-scored]) input:checked') && !window.confirm('重新抽題會清除目前的作答。')) return;
      const first = chapter.exams.notes.flatMap(group => QuizCore.draw(pool.filter(item => item.group === group.name), 1));
      const chosen = new Set(first.map(item => item.question.id));
      const extra = QuizCore.draw(pool.filter(item => !chosen.has(item.question.id)), size - first.length);
      const selected = QuizCore.draw([...first, ...extra], size);
      round.innerHTML = '<form><div class="quiz-panel"><p>文字轉錄可能有欄位或符號錯序，遇到圖題請開原卷。</p></div>'
        + selected.map(({ question: q }, i) => `<article class="quiz-question">
          <h2>第 ${i + 1} 題 <small>· ${q.year}-${q.session} 原題 ${q.number}</small></h2>
          <p style="white-space:pre-wrap;overflow-wrap:anywhere">${quizEscape(q.text.trim())}</p>
          <p><a href="${q.pdf}#page=${q.regions[0].page}" target="_blank" rel="noopener">開啟原卷第 ${q.regions[0].page} 頁</a></p>
          <button type="button" class="quiz-button secondary" data-practice-figure="${i}">顯示原卷題圖</button><div class="quiz-image" hidden></div>
          <fieldset class="quiz-options"><legend>選擇答案</legend>${['A','B','C','D'].map(choice => `<label><input type="radio" name="phys-q${i}" value="${choice}">${choice}</label>`).join('')}</fieldset>
          <div id="phys-practice-result-${i}" hidden></div></article>`).join('')
        + '<button type="submit" class="quiz-button">交卷與分析</button><section id="phys-practice-score" class="quiz-panel" aria-live="polite" tabindex="-1" hidden></section></form>';
      const form = round.querySelector('form');
      form.querySelectorAll('[data-practice-figure]').forEach(button => {
        button.onclick = () => {
          const holder = button.nextElementSibling;
          button.hidden = true;
          holder.hidden = false;
          holder.innerHTML = '<p class="quiz-loading">載入原卷題圖…</p>';
          quizImage(selected[Number(button.dataset.practiceFigure)].question, holder, generation);
        };
      });
      form.onsubmit = event => {
        event.preventDefault();
        if (form.hasAttribute('data-scored')) return;
        form.setAttribute('data-scored', '');
        const counts = new Map();
        let correct = 0;
        selected.forEach(({ question: q, point, group, analysis }, i) => {
          const value = form.querySelector(`input[name="phys-q${i}"]:checked`)?.value;
          const ok = QuizCore.grade(q, value ? [value] : []);
          if (ok) correct++;
          const groupCount = counts.get(group) || { hits: 0, total: 0 };
          groupCount.hits += Number(ok);
          groupCount.total++;
          counts.set(group, groupCount);
          const result = form.querySelector('#phys-practice-result-' + i);
          result.hidden = false;
          result.className = 'quiz-result' + (ok ? '' : ' wrong');
          result.innerHTML = `<p><strong>${ok ? '答對' : value ? '答錯' : '未作答'}</strong> · 官方答案 ${q.answers[0]}${q.corrected ? '（更正）' : ''}</p>
            <p><strong>${quizEscape(point)}</strong>　${quizEscape(analysis)}</p><a href="${q.answerPdf}" target="_blank" rel="noopener">官方答案 PDF</a>`;
        });
        form.querySelectorAll('input, button[type="submit"]').forEach(field => field.disabled = true);
        const score = form.querySelector('#phys-practice-score');
        score.hidden = false;
        score.innerHTML = '<h2>' + correct + ' / ' + size + ' 題 · ' + (correct * 5) + ' 分</h2>'
          + '<ul>' + [...counts].map(([name, {hits, total}]) => '<li>' + quizEscape(name) + '　' + hits + ' / ' + total + '</li>').join('') + '</ul>'
          + '<p>重做時先針對最低的主題回讀正文，再換一輪原題驗證。</p>';
        score.focus();
      };
    };
  } catch (error) {
    if (app.isConnected && generation === quizGeneration) app.innerHTML = '<p class="quiz-error" role="alert">章末測驗載入失敗，請重新整理再試。</p>';
  }
}
