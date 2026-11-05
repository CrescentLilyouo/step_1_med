const physiologyExamNotes = [
  {
    "id": "membrane",
    "name": "細胞膜與跨膜運輸",
    "pattern": "辨認與機轉分類",
    "strategy": "先找載體或通道，再問移動方向及能量來源。遇到共同運輸時，分開判斷每一種溶質。",
    "notes": [
      [
        "106-1-2-16",
        "SGLT1 缺陷與滲透性腹瀉｜跨章・腸胃",
        "SGLT1 缺陷使葡萄糖與半乳糖留在腸腔，增加管腔有效滲透粒子。官方也接受 C，原題選項未指定是哪一種 aquaporin；複習可先掌握 SGLT1 的典型機轉。"
      ],
      [
        "98-2-2-7",
        "上皮 Na⁺ 驅動力｜跨章・腎臟",
        "外液 Na⁺ 高於胞內。近端小管透過鈉鉀幫浦維持驅動力，並利用 Na⁺ 梯度耦合 H⁺ 分泌等運輸。官方接受 B 或 C。"
      ],
      [
        "96-2-2-1",
        "化學梯度與電位差",
        "題幹只給膜兩側 Na⁺ 濃度差，所問的驅動能屬化學位能。帶電離子在真實膜上的淨流動還要考慮膜電位，兩者合稱電化學梯度。"
      ],
      [
        "96-2-2-2",
        "Fick 擴散與有效面積",
        "微絨毛增加交換面積，能直接提高擴散。官方另接受 B；胞內滲透度本身不能單獨判斷特定物質的濃度差，解題時保留官方更正，觀念題以明示的濃度差和膜面積為準。"
      ],
      [
        "97-1-2-2",
        "脂雙層擴散與通道擴散",
        "Na⁺ 不能有效直接穿越脂雙層，卻可經通道順電化學梯度移動。題幹使用較廣義的「擴散」，題庫記錄為一律給分。碰到類似題，先看是否限定穿過脂雙層本身。"
      ],
      [
        "99-1-2-23",
        "細胞內外離子分布",
        "Na⁺ 是細胞外主要陽離子，K⁺ 是細胞內主要陽離子。鈉鉀幫浦維持梯度；細胞外液量估算另可用總體水量的約三分之一。"
      ],
      [
        "101-1-2-6",
        "GLUT5 與 SGLT1",
        "果糖經 GLUT5 順梯度促進性擴散，半乳糖與葡萄糖主要經頂端膜 SGLT1 借用 Na⁺ 梯度。官方同時接受 A、B 或 AB；廣義被動擴散可涵蓋促進性擴散。"
      ],
      [
        "102-2-2-5",
        "被動運輸與能量",
        "簡單擴散、促進性擴散、滲透都由既有梯度驅動。主動運輸需能量，可能直接來自 ATP，或間接由另一種溶質的梯度提供。"
      ],
      [
        "102-2-2-13",
        "Na⁺ 梯度推動葡萄糖吸收",
        "外 Na⁺ 高能促進頂端 SGLT 同向運輸。GLUT2 通常在基底外側讓葡萄糖順梯度離開，鈉鉀幫浦負責維持低胞內 Na⁺。"
      ],
      [
        "103-1-2-17",
        "小腸胺基酸次級主動運輸",
        "許多小腸胺基酸以 Na⁺ 耦合方式進入上皮細胞。果糖經 GLUT5，遇到胺基酸與二、三胜肽並列時，還要區分可由 H⁺ 梯度驅動的 PEPT1。"
      ],
      [
        "105-1-2-1",
        "幫浦抑制與 NCX｜跨章・心血管",
        "Ouabain 抑制鈉鉀幫浦，使胞內 Na⁺ 增加，NCX 正向排鈣的驅動力下降，因此胞內 Ca²⁺ 可增加。解題用兩段因果，避免把兩個蛋白視為同一幫浦。"
      ],
      [
        "105-1-2-17",
        "腎近端 SGLT｜跨章・腎臟",
        "近端腎小管頂端膜的 SGLT 透過 Na⁺ 順梯度內流回收葡萄糖。基底外側 GLUT 負責後續外運，兩個膜面的機轉不同。"
      ],
      [
        "105-2-2-1",
        "Cl⁻／HCO₃⁻ 交換的用途｜跨章・呼吸、腸胃",
        "先找跨膜交換的兩種陰離子。紅血球 chloride shift、胃壁細胞的鹼潮與部分上皮分泌可涉及此交換器。依原題選出與交換無關的一項。"
      ],
      [
        "106-1-2-1",
        "膽固醇調節膜性質",
        "膽固醇的羥基朝親水側、環狀結構嵌在脂尾之間。它緩衝溫度造成的流動性改變。低溫時干擾磷脂緊密堆積，高溫時限制膜脂過度移動。"
      ],
      [
        "108-1-1-47",
        "逐一比較溶質方向",
        "第 2 項的 Na⁺ 從高濃度的細胞外進入，第 4 項的 K⁺ 從高濃度的細胞內外流。SERCA 回收 Ca²⁺ 及 NHE 分泌 H⁺ 則是題設下被推動的逆濃度項目。"
      ],
      [
        "110-2-1-47",
        "Tight junction 與旁細胞路徑",
        "緊密連結限制物質走細胞間隙，讓選擇性跨細胞運輸更有作用，也幫助維持頂端和基底外側膜的極性。Gap junction 則讓相鄰細胞溝通。"
      ],
      [
        "111-1-1-53",
        "鈉鉀幫浦計量與方向",
        "每水解 1 ATP，3 Na⁺ 出、2 K⁺ 進，淨移出一個正電荷。誘答把「打進」與「打出」對調。強心配糖體可抑制此幫浦。"
      ],
      [
        "111-2-1-47",
        "低溫下的膜流動性",
        "低溫時膽固醇干擾磷脂脂尾密集排列。飽和脂肪酸通常更易緊密堆積，和題幹要求的效果相反。"
      ],
      [
        "112-2-1-47",
        "比較直接穿膜的難易",
        "葡萄糖大且多羥基，四個選項中最依賴運輸蛋白。CO₂ 易直接擴散，甘油較小，醋酸則要區分可穿膜的未解離型和帶電型。"
      ],
      [
        "112-2-1-69",
        "SGLT 與 GLUT4 的差異",
        "SGLT 是 Na⁺ 耦合次級主動運輸，主要見於腎與小腸。胰島素促進的是某些組織 GLUT4 轉位。SGLT2 抑制會增加尿糖排出。"
      ],
      [
        "113-1-1-47",
        "細胞膜基本構造",
        "磷脂的兩親性使其能形成雙層，膜蛋白嵌入或附著。膽固醇會調節膜物性，三酸甘油酯主要用於能量儲存。"
      ],
      [
        "113-2-1-47",
        "細胞外液組成",
        "細胞外主要陽離子是 Na⁺，主要陰離子包括 Cl⁻。K⁺ 高濃度主要見於細胞內。題目若同時給 70 kg 成人，用近似體液比例處理。"
      ],
      [
        "115-1-1-47",
        "NCX 與直接耗 ATP 的幫浦",
        "NCX 正向模式借 Na⁺ 順梯度內流排出 Ca²⁺，屬次級主動運輸。PMCA 和 SERCA 才直接水解 ATP。遇到梯度或電位改變，交換方向可反轉。"
      ]
    ]
  },
  {
    "id": "osmosis",
    "name": "滲透、張力與體液",
    "pattern": "定量與跨膜推理",
    "strategy": "先標膜能通過的物質，再分清總滲透濃度、有效滲透粒子與觀察時間。",
    "notes": [
      [
        "108-1-1-65",
        "AQP2 轉位與水的被動移動｜跨章・腎臟",
        "ADH 活化集合管主細胞 V2 受體，使 AQP2 插入頂端膜。它提高水通透性，水仍依滲透梯度移動，幫浦不會主動運送水。"
      ],
      [
        "104-1-2-22",
        "高滲刺激 ADH｜跨章・腎臟",
        "體液滲透濃度升高會增強下視丘滲透受器驅動，促進 ADH 釋放。與有效循環血量下降造成的非滲透性刺激分開。"
      ],
      [
        "97-1-2-23",
        "有效滲透濃度與缺少條件",
        "估算血漿張力常用 2×Na⁺＋glucose/18，常規不加 BUN。題幹未提供血糖，題庫記錄為一律給分。切勿用 creatinine 代替血糖。"
      ],
      [
        "98-1-2-1",
        "低滲血漿與 ADH｜跨章・腎臟",
        "低滲時通常抑制滲透受器驅動的 ADH 釋放，也不會以高滲機制刺激口渴。單一血漿滲透值不能決定血容量改變方向。"
      ],
      [
        "110-1-1-48",
        "高張的定義與近似數字",
        "本題按近似正常血漿 300 mOsm/L 選 D。更一般的判法應以不可透溶質的有效濃度比較，預測細胞失水縮小，並保留等滲與等張的差別。"
      ],
      [
        "111-1-1-47",
        "選擇性通透、電荷分離與水移動",
        "Na⁺ 可由右向左通過，右側相對留下負電。左側增加滲透粒子而有水移入趨勢。這題需同時判電荷和水，且很小的電荷分離就能建立電位差。"
      ],
      [
        "112-2-1-65",
        "血漿滲透濃度的估算",
        "總估算常用 2×Na⁺＋glucose/18＋BUN/2.8。代入 Na⁺ 135、glucose 180、BUN 56，得 270＋10＋20＝300 mOsm/kg H₂O。若改問有效滲透濃度，通常扣除尿素的貢獻。"
      ],
      [
        "112-1-1-67",
        "急性水負荷｜跨章・腎臟",
        "先由水負荷判血漿滲透濃度下降，再接 ADH 下降與集合管水通透性下降，尿變稀。兩個滲透濃度同向下降。"
      ],
      [
        "115-2-1-65",
        "水負荷與 ADH 回饋｜跨章・腎臟",
        "水負荷稀釋血漿，使下視丘滲透受器降低對 ADH 釋放的驅動。先判被調控變數，再判荷爾蒙方向。"
      ]
    ]
  },
  {
    "id": "voltage",
    "name": "平衡電位與靜止膜電位",
    "pattern": "方向與電化學平衡",
    "strategy": "先找 E，再比較 Vₘ 和 E。開通道會把 Vₘ 往該通道的反轉電位拉。",
    "notes": [
      [
        "103-2-2-1",
        "開啟細胞膜 Ca²⁺ 通道的流向",
        "靜止時膜內偏負且胞外游離 Ca²⁺ 高，電、化學梯度通常都促進 Ca²⁺ 內流。別和 PMCA 主動排鈣或 SR 通道釋鈣混在一起。"
      ],
      [
        "96-1-2-2",
        "骨骼肌靜止電位與 Cl⁻ 電導",
        "K⁺ 梯度及漏電導對靜止膜電位重要，骨骼肌 Cl⁻ 電導也很大，有助穩定興奮性。官方接受 B 或 D；作答時要辨認題幹限定骨骼肌。"
      ],
      [
        "97-2-2-2",
        "Nernst 平衡與 Donnan 分布",
        "官方答案 B。單一可透離子的化學與電梯度相抵，是 Nernst 平衡。Donnan 分布則要辨認題目是否明示被困在一側的不可透帶電溶質與多種離子條件。"
      ],
      [
        "99-1-2-24",
        "Cl⁻ 平衡電位與電流符號",
        "只知道濃度比可估 ECl，離子淨移動還需要初始 Vₘ。Cl⁻ 內流等同慣例的向外電流。官方接受 A、B、C 或 D，練習時宜把初始 Vₘ 補進題目。"
      ],
      [
        "99-1-2-25",
        "混合陽離子通道的反轉電位",
        "典型 Na⁺／K⁺ 通道的反轉電位常近 0 mV，從 −60 mV 開啟通常去極化。精確判斷需離子梯度和相對通透性，這題依題庫一律給分。"
      ],
      [
        "100-1-2-3",
        "Vₘ＝Eₖ 時的淨電流",
        "鉀的化學梯度和電梯度抵銷，淨被動流量為零。通道可以開著，仍有雙向個別離子移動。幫浦也不必停止。"
      ],
      [
        "100-2-2-4",
        "單一高通透陽離子的濃度比",
        "陽離子外濃度遠高於內，E 為正。在該離子通透性主導時，膜電位趨近其正的平衡電位。"
      ],
      [
        "104-1-2-1",
        "電化學平衡的定義",
        "電梯度與化學梯度相抵，淨移動為零。題幹問平衡時先看有沒有把「無淨通量」誤寫成「兩邊濃度相同」。"
      ],
      [
        "110-2-1-53",
        "由 Vₘ 與 E 預測超極化或去極化",
        "Vₘ −75、ECl −70、EK −80 mV。開 Cl⁻ 通道往 −70 去極化，開 K⁺ 通道往 −80 超極化。遇陰離子先判電位，再判離子移動。"
      ],
      [
        "111-2-1-53",
        "Na⁺、K⁺ 被動漏流",
        "−60 mV 通常位在 EK 與 ENa 之間，Na⁺ 淨內漏、K⁺ 淨外漏。題幹已排除主動運輸，避免套 3 Na⁺ 出、2 K⁺ 進。"
      ],
      [
        "115-2-1-47",
        "同量增加外 Na⁺ 或 K⁺",
        "外 K⁺ 起始濃度低，同加 2 mM 的比例改變更大。靜止膜對 K⁺ 通透性也較高。外 K⁺ 增加使 EK 較不負，典型反應為去極化。"
      ]
    ]
  },
  {
    "id": "action",
    "name": "局部電位、動作電位與傳導",
    "pattern": "時相與變項比較",
    "strategy": "先分分級電位或全有全無，再找通道時相。比較速度時分開看軸突直徑和髓鞘。",
    "notes": [
      [
        "115-2-1-54",
        "慢痛 C 纖維｜跨章・感覺",
        "慢痛定位較模糊，傳入以無髓 C 纖維為主，常涉及 glutamate 和 substance P。遇到無髓 Aβ 的選項，先辨認纖維分類。"
      ],
      [
        "112-2-1-54",
        "快痛 Aδ 與髓鞘｜跨章・感覺",
        "快痛通常由細而有髓鞘的 Aδ 纖維傳遞，慢痛多由無髓 C 纖維傳遞。此題把基本傳導特性放在痛覺情境。"
      ],
      [
        "96-1-2-1",
        "局部電位適用範圍",
        "受器電位、突觸後電位和終板電位都是例子，可出現在神經元以外的細胞。局部電位可加成並隨距離衰減，沒有典型 AP 的不反應期。"
      ],
      [
        "97-1-2-1",
        "動作電位尖峰的離子濃度",
        "單次 AP 移動的離子量只占整體離子很小比例。即使電位轉正，胞外 Na⁺ 濃度仍遠高於胞內。把電荷分離和總濃度變化分開。"
      ],
      [
        "102-1-2-4",
        "無髓神經纖維傳導速度",
        "典型無髓 C 纖維速度可低至約 0.5 m/s。低速來自較細軸徑和連續傳導；題目問最可能值，避免選有髓大纖維的速度級距。"
      ],
      [
        "104-1-2-2",
        "分級電位隨距離衰減",
        "局部膜電位透過被動電流傳開，振幅越遠越小，且可以加成。達閾後再生、全有全無是動作電位的特徵。"
      ],
      [
        "105-1-2-3",
        "刺激強度的頻率編碼",
        "較強的受器刺激可產生較大的分級電位，通常使動作電位頻率上升。單個動作電位的振幅由通道與電化學梯度決定。"
      ],
      [
        "112-1-1-52",
        "Overshoot 與 undershoot",
        "過衝對應 Na⁺ 電導高，後超極化對應 K⁺ 電導持續偏高。畫一條 AP 曲線，分別標 Eₙₐ 與 Eₖ 來記方向。"
      ],
      [
        "113-1-1-53",
        "分級電位的三個特徵",
        "分級電位可加成、可隨刺激大小改變，也可去極化或超極化。遇到全有全無或振幅不衰減的敘述，換成 AP 思考。"
      ],
      [
        "115-1-1-53",
        "軸徑與髓鞘的獨立作用",
        "粗軸突降低軸內阻，髓鞘提高膜電阻並降低膜電容。最快選兩條件兼備者；題目若比較粗無髓和細有髓，需更具體的數值或纖維類型。"
      ],
      [
        "115-2-1-52",
        "相對不反應期的通道狀態",
        "已有部分 Na⁺ 通道恢復可用，但仍有 K⁺ 通道開啟，閾上放電通常需要較強刺激。把「主要仍失活」留給絕對不反應期。"
      ]
    ]
  },
  {
    "id": "synapse",
    "name": "突觸與神經肌肉接合處",
    "pattern": "定位與情境反推",
    "strategy": "依突觸前釋放、突觸間隙清除、突觸後受體三站排除選項。中樞題再分離子型與代謝型受體。",
    "notes": [
      [
        "96-1-2-4",
        "Nm 與 Nn 受體的位置｜跨章・自主神經",
        "骨骼肌終板是 Nm，交感及副交感神經節均主要用 Nn。多數副交感效應器主要是 muscarinic。題庫記錄一律給分，複習時避免把「主要分布」擴大成絕對排除。"
      ],
      [
        "96-1-2-17",
        "LTP 增強突觸效能｜跨章・記憶",
        "LTP 可使同一突觸前輸入產生較大突觸後反應。它可涉及 NMDA 訊號，與學習記憶相關；題目故意把突觸後反應變大寫成單一動作電位振幅變大。"
      ],
      [
        "97-2-2-24",
        "重症肌無力在突觸後",
        "典型 AChR 型是功能性受體減少，EPP 變小，刺激較不易達肌膜閾值。主要缺陷在接收端，故將其歸因於 ACh 釋放量顯著下降是本題的誘答。"
      ],
      [
        "101-2-2-2",
        "NMDA 通道的離子選擇性",
        "NMDA 為可通過 Na⁺、K⁺、Ca²⁺ 的陽離子通道。選項若只列 Na⁺ 和 K⁺，漏掉了其 Ca²⁺ 通透性。"
      ],
      [
        "102-1-2-2",
        "麩胺酸興奮毒性",
        "過多 glutamate 可過度活化 NMDA 與 AMPA 類受體，造成興奮及離子負荷。NMDA 的 Ca²⁺ 內流尤其重要。官方接受 A、B 或 AB，保留不同受體皆可參與的範圍。"
      ],
      [
        "102-1-2-6",
        "箭毒阻斷終板受體",
        "d-Tubocurarine 競爭性阻斷肌肉 Nm 受體，降低或阻斷終板反應。運動神經仍能放電並釋放 ACh，AChE 也仍能作用。"
      ],
      [
        "103-1-2-6",
        "有機磷與去極化阻斷",
        "有機磷抑制 AChE，ACh 累積。骨骼肌可先出現抽動，持續作用後可因去極化阻斷與受體去敏感而無力。先分抑制分解與抑制釋放。"
      ],
      [
        "103-2-2-5",
        "海馬迴 LTP 的遞質與受體｜跨章・記憶",
        "典型海馬迴 NMDA 依賴性 LTP 由 glutamate 活化受體。突觸後去極化解除 Mg²⁺ 阻塞後，Ca²⁺ 內流啟動可塑性訊號。"
      ],
      [
        "103-2-2-6",
        "ACh 合成、受體與清除",
        "ACh 由 choline 與 acetyl-CoA 合成。Atropine 主要拮抗 muscarinic 受體，不能涵蓋 nicotinic；神經肌接頭的 AChE 主要繫於突觸間隙基底板。官方接受 C、D 或 CD。"
      ],
      [
        "103-2-2-9",
        "依症狀定位神經肌肉接合處",
        "眼瞼下垂、吞嚥障礙、波動性無力與 AChE 抑制劑改善，共同指向重症肌無力。步態和協調線索用來降低小腦病變的可能。"
      ],
      [
        "107-2-1-54",
        "運動終板的 Nm 受體",
        "ACh 活化終板的 nicotinic 受體，讓陽離子通過。EPP 去極化傳至鄰近膜達閾值後，電壓門控 Na⁺ 通道才產生肌肉 AP。"
      ],
      [
        "109-1-1-56",
        "終板電位的性質",
        "EPP 是骨骼肌終板的興奮性分級電位。肌肉 AP 才是再生且能沿肌膜與橫管傳導。以發生位置和能否全有全無拆開。"
      ],
      [
        "109-2-1-55",
        "AChR 減少與 AChE 抑制劑",
        "受體減少指向典型 AChR 型重症肌無力。減慢 ACh 分解可延長剩餘受體接觸 ACh 的時間。Lambert–Eaton 則先影響突觸前 Ca²⁺ 內流。"
      ],
      [
        "110-2-1-54",
        "突觸前 Ca²⁺ 驅動釋放",
        "AP 到達末梢開啟電壓門控 Ca²⁺ 通道。阻斷 Ca²⁺ 內流可抑制囊泡融合和遞質釋放。典型化學突觸有釋放與受體活化所需的延遲。"
      ],
      [
        "111-1-1-54",
        "肉毒毒素阻斷囊泡融合",
        "肉毒毒素切割 SNARE 蛋白，阻礙 ACh 囊泡融合。和直接封鎖 Ca²⁺ 通道、終板 Nm 拮抗、抑制 AChE 分開。"
      ],
      [
        "111-1-1-55",
        "Glycine 是抑制性遞質",
        "Glycine 在脊髓、腦幹重要，受體為配體門控 Cl⁻ 通道。Strychnine 是 glycine 受體拮抗劑。K⁺ 外流是另一種可能的抑制機轉。"
      ],
      [
        "112-2-1-52",
        "從受體預測 IPSP",
        "Glycine 受體提高 Cl⁻ 電導，典型成熟神經元可藉超極化或分流抑制興奮。AMPA 與 NMDA 則多形成興奮性突觸電流。"
      ],
      [
        "113-1-1-54",
        "苯二氮平與 GABA-A",
        "BZD 結合 GABA-A 受體的調節位點，增強 GABA 介導的抑制。GABA-B 為代謝型受體。題幹的睡眠效果是線索，直接考的是受體配對。"
      ],
      [
        "113-2-1-50",
        "EPP 與 MEPP 的位置與大小",
        "EPP 發生在突觸後肌膜，非運動神經末梢。MEPP 可由單顆囊泡的自發釋放產生，是量子釋放的證據。"
      ],
      [
        "113-2-1-51",
        "NO 不儲存於典型突觸囊泡",
        "NO 隨需求合成後可擴散。ATP、histamine 或胜肽型遞質可經囊泡儲存釋放。判題時區分氣體訊號與囊泡遞質。"
      ],
      [
        "113-2-1-52",
        "代謝型受體辨認",
        "AMPA、NMDA、glycine 受體本身是離子通道，代謝型受體則透過 G 蛋白改變下游訊號。碰到同一遞質的不同亞型時，不能只靠遞質名稱分類。"
      ],
      [
        "114-2-1-48",
        "EPP 減小如何影響肌肉 AP",
        "肉毒使 ACh 釋放下降，EPP 變小，肌膜較難達閾。受體是 Nm，EPP 為分級電位；真正進入橫管的是肌肉 AP。"
      ],
      [
        "114-2-1-52",
        "遞質與代謝型受體配對",
        "Norepinephrine 的 α1 受體是 GPCR，典型耦聯 Gq。逐項檢查兩件事：遞質能否活化該受體，以及受體是否為代謝型。"
      ],
      [
        "115-1-1-54",
        "沙林與兩種膽鹼受體效應",
        "縮瞳及胃腸道症狀提示 muscarinic，肌抽搐提示 nicotinic。共同上游是 ACh 累積，定位到 AChE 被抑制；受體拮抗和阻礙釋放都與效應方向相反。"
      ],
      [
        "115-2-1-51",
        "靜止電位下 NMDA 的 Mg²⁺ 阻塞",
        "在負膜電位時，Mg²⁺ 可堵塞 NMDA 通道。去極化解除阻塞，並配合 glutamate 與共致效劑結合讓離子通過。這題同時考電位依賴與配體依賴。"
      ],
      [
        "104-1-2-3",
        "Muscarinic 與 nicotinic 的受體型別",
        "Muscarinic 是 GPCR，不能把它寫成終板直接開啟的陽離子通道。骨骼肌終板對應 Nm，自主神經節快速傳遞典型對應 Nn。"
      ],
      [
        "106-1-2-3",
        "膽鹼性運動神經元｜跨章・自主神經",
        "α 與 γ 運動神經元在各自的肌肉接頭都使用 ACh，典型自主節前神經元也用 ACh。多數交感節後神經元主要用 norepinephrine，另有汗腺等例外。"
      ]
    ]
  },
  {
    "id": "skeletal",
    "name": "骨骼肌、肌節與運動單位",
    "pattern": "機轉順序、構造與曲線",
    "strategy": "先區分電位傳播、SR 釋鈣、薄肌絲開關、橫橋和鈣回收。力學題先判斷固定肌長或負重。",
    "notes": [
      [
        "96-1-2-18",
        "運動單位定義",
        "一個 α 運動神經元與它支配的所有梭外肌纖維是一個單位。將整塊肌肉所有神經元或拮抗肌群合在一起，範圍都太大。"
      ],
      [
        "96-2-2-5",
        "開始收縮時的 ATP 再生",
        "最初幾秒由 phosphocreatine 快速把磷酸基轉給 ADP。這題問「再生」來源，分清已存在的 ATP 和重新合成 ATP 的第一條途徑。"
      ],
      [
        "96-2-2-20",
        "惡性高體溫與 SR 釋鈣",
        "T-tubule 將 AP 帶入細胞內部，SR 才是釋鈣來源。異常持續釋鈣可使收縮與能量消耗增加。Troponin 接鈣，SERCA 回收鈣，ATP 促橫橋解離。"
      ],
      [
        "97-1-2-7",
        "撤除細胞質 Ca²⁺ 後的薄肌絲",
        "Ca²⁺ 離開 TnC 後，tropomyosin 回到覆蓋 actin 上 myosin 結合位的位置。題目問舒張，方向和啟動收縮相反。"
      ],
      [
        "97-2-2-5",
        "整肌張力、招募與頻率",
        "整肌張力會因招募更多運動單位及提高刺激頻率而增大。一個已活化的運動單位通常共同激發其支配纖維，不能靠任意選擇其中幾條調節。"
      ],
      [
        "97-2-2-6",
        "慢縮肌纖維的耐疲勞性",
        "Type I 通常富粒線體、肌紅蛋白與微血管，適合持續有氧工作。易疲勞較接近快速糖解型纖維。題幹用了「肌球蛋白」等易混譯名，以原卷與官方答案核對。"
      ],
      [
        "98-1-2-3",
        "肌節縮短時的明帶與暗帶",
        "等張縮短時肌節與 I band 變短，A band 保持原長。A band 的長度由粗絲本身決定，滑動改變的是重疊範圍。"
      ],
      [
        "99-2-2-7",
        "TnC、TnI 與 tropomyosin 的位置",
        "官方選 B。Ca²⁺ 先結合 TnC，troponin 複合體改變構型，接著 tropomyosin 移開，暴露 actin 結合位。解題時寫清楚直接接鈣與實際移開遮蔽物的蛋白。"
      ],
      [
        "100-1-2-11",
        "DHPR 和 RyR1 分工",
        "骨骼肌 DHPR 位於 T-tubule 膜感測電壓，釋放 SR 中 Ca²⁺ 的通道是 RyR1。誘答把 SR 釋鈣的位置寫給 DHPR。"
      ],
      [
        "100-2-2-5",
        "舒張時的 SERCA",
        "SERCA 直接耗 ATP，將細胞質 Ca²⁺ 送回 SR。Calsequestrin 在 SR 內結合儲存 Ca²⁺，不是跨膜搬運蛋白。"
      ],
      [
        "100-2-2-7",
        "ATP 水解與高能構型",
        "ATP 結合先使橫橋解離；接著水解成 ADP＋Pi，將 myosin 頭置於高能構型。題目問預備狀態，不能和解離混用。"
      ],
      [
        "101-2-2-6",
        "骨骼肌的釋鈣位置",
        "肌膜 AP 進入 T-tubule 後透過 DHPR–RyR1 耦聯，Ca²⁺ 從 SR 到細胞質。題目把釋鈣源寫成肌細胞膜，是辨認錯項的線索。"
      ],
      [
        "103-1-2-23",
        "骨骼肌感受 Ca²⁺ 的蛋白",
        "Troponin C 接收 Ca²⁺ 訊號，tropomyosin 因此移位。Actin 是薄肌絲骨架，myosin 形成橫橋；兩者在後續產生力量。"
      ],
      [
        "103-2-2-10",
        "T-tubule 傳電、SR 釋鈣",
        "T-tubule 是肌膜內陷，負責讓去極化到達纖維深處。主要供給收縮用 Ca²⁺ 的是 SR，選項若把橫管當作釋鈣庫即有誤。"
      ],
      [
        "104-1-2-7",
        "橫橋高能化的步驟",
        "Myosin 的 ATPase 水解 ATP，使頭部上弦並保留 ADP、Pi。若問解離選 ATP 結合，若問何時產生力則接到強結合與 Pi 釋放。"
      ],
      [
        "104-2-2-7",
        "最快疲勞的肌纖維",
        "快速糖解型骨骼肌纖維可輸出高功率，但耐疲勞性低。慢氧化型肌纖維粒線體多，更適合長時間維持張力。"
      ],
      [
        "106-1-2-7",
        "肌纖維功能與 myosin ATPase",
        "本題以手指快速、精細操作和背部姿勢維持對照，選 ATPase 活性較高。肌肉通常是多種纖維混合；精細度也與運動單位大小相關。"
      ],
      [
        "106-2-1-54",
        "SR 上的 ryanodine receptor",
        "RyR 位於 SR 膜，開啟使 Ca²⁺ 進入細胞質。DHPR 在橫管感測電位；SERCA 將 Ca²⁺ 送回 SR。"
      ],
      [
        "107-1-1-55",
        "紅肌與白肌比較",
        "白肌較偏快速糖解，通常粒線體較少、疲勞較快。紅肌肌紅蛋白與氧化能力高，較適合耐力工作。"
      ],
      [
        "108-1-1-52",
        "Tropomyosin 移位後的作用",
        "Ca²⁺ 先結合 TnC，促使 tropomyosin 從 actin 的 myosin 結合位移開。再由 actin 與 myosin 互動產生張力。"
      ],
      [
        "108-2-1-54",
        "DHPR 的位置和通道種類",
        "骨骼肌 DHPR 位於橫管膜，屬電壓門控 L 型 Ca²⁺ 通道，在典型骨骼肌偶聯中主要作電壓感測。SR 上的釋鈣通道另為 RyR1。"
      ],
      [
        "108-2-1-55",
        "薄肌絲調節與肌節地標",
        "依官方選 B。Ca²⁺ 結合 TnC 後，實際讓 actin 結合位暴露的是 tropomyosin 移位；H zone 在中央，I band 主要只有細絲。"
      ],
      [
        "110-1-1-54",
        "等長與等張單次收縮的時間",
        "在題設比較下，等長張力較早可偵測；等張縮短須先產生足以克服負重的張力。依本題比較，等長單次張力變化持續時間較長。"
      ],
      [
        "110-1-1-55",
        "收縮用 Ca²⁺ 的主要儲庫",
        "典型骨骼肌的快速收縮主要靠 SR 釋鈣。橫管負責傳遞膜去極化，核對題幹是在問訊號路徑還是離子來源。"
      ],
      [
        "110-2-1-55",
        "最初數秒的磷酸肌酸",
        "Creatine kinase 讓 phosphocreatine 將磷酸基交給 ADP，快速補回 ATP。以「快但短」區分初期供能與持續氧化代謝。"
      ],
      [
        "111-1-1-57",
        "屍僵與橫橋無法解離",
        "ATP 耗竭讓 myosin 無法從 actin 分離，Ca²⁺ 回收也受限。題幹若問直接造成橫橋維持的原因，要答 ATP 不足與解離失敗。"
      ],
      [
        "111-2-1-55",
        "等張單抽搐的負重效果",
        "同樣刺激下，重負載要等更久才能縮短，縮短速度較低，所需張力較大。依本題典型曲線，重負載可縮短實際縮短時間，不能推成收縮期間增加。"
      ],
      [
        "112-1-1-55",
        "氧化型纖維與招募順序",
        "慢氧化單位通常由較小的運動神經元支配，較早招募。題幹問錯誤，把有氧型單位的運動神經元寫得更大即顛倒大小原則。"
      ],
      [
        "112-1-1-56",
        "ATP 結合直接促橫橋分離",
        "直接促成 actin–myosin 解離的是 ATP 結合。Ca²⁺ 讓結合位露出，MLCK 與 MLCP 則屬平滑肌常考路徑。"
      ],
      [
        "113-2-1-55",
        "肌纖維最快補充 ATP",
        "磷酸肌酸系統最快，可經一個磷酸基轉移反應補 ATP。糖解和氧化磷酸化對後續供能重要，時間尺度不同。"
      ],
      [
        "114-1-1-55",
        "缺 ATP 與屍僵",
        "肌細胞失去 ATP 後，橫橋無法正常解離。乳酸累積和肝醣耗盡是誘答。若改問肌漿 Ca²⁺ 為何維持，也要想到 SERCA 缺 ATP。"
      ],
      [
        "114-1-1-56",
        "主動與被動長度–張力",
        "主動張力隨可形成的橫橋數而變，過短或過長均可下降。被動張力來自彈性成分且隨拉長上升。題目用「越長一定越大」混淆兩條曲線。"
      ],
      [
        "114-2-1-55",
        "運動初期的 ATP 來源",
        "磷酸肌酸可在最初幾秒迅速供磷酸基給 ADP。若時間拉長，才逐步比較快速糖解與氧化代謝的貢獻。"
      ],
      [
        "114-2-1-56",
        "Type IIx 與 Type I",
        "IIx 收縮快、易疲勞，通常較少粒線體、肌紅蛋白與微血管。把高氧化能力、耐疲勞留給 Type I。"
      ]
    ]
  },
  {
    "id": "smooth",
    "name": "平滑肌與三種肌肉比較",
    "pattern": "比較與跨章機轉",
    "strategy": "先認肌肉種類，再分別問 Ca²⁺ 從哪來、先結合誰、下游改變哪一條肌絲。",
    "notes": [
      [
        "96-1-2-37",
        "PDE5 與平滑肌舒張｜跨章・自主神經",
        "PDE5 分解 cGMP。抑制 PDE5 延長 cGMP 訊號，促進海綿體平滑肌舒張。別把阻礙 cGMP 分解當成直接刺激 guanylyl cyclase。"
      ],
      [
        "98-2-2-9",
        "平滑肌 spike potential 與 Ca²⁺",
        "消化道平滑肌的 spike 通常由 Ca²⁺ 內流主導，且同時提升胞內 Ca²⁺ 引發收縮。不要直接套用典型神經元 Na⁺ 上升相。"
      ],
      [
        "98-2-2-18",
        "Gap junction 與肌肉同步",
        "心肌及許多 single-unit 平滑肌有 gap junction，讓相鄰細胞電性耦合。骨骼肌纖維由運動神經分別激發。"
      ],
      [
        "99-1-2-4",
        "Single-unit 平滑肌的共同活動",
        "許多 single-unit 平滑肌藉 gap junction 耦合，能有自發節律，也可能對牽張反應。題目說每一細胞都必須獨立由神經啟動，與此型特性不合。"
      ],
      [
        "99-2-2-6",
        "平滑肌可由多種刺激啟動",
        "膜去極化、牽張、局部訊號與 Gq–IP₃ 等皆可影響 Ca²⁺。部分路徑不需動作電位。題幹的「完全只由化學信使」過度絕對。"
      ],
      [
        "100-1-2-6",
        "不同肌肉達峰張力時間",
        "平滑肌的 myosin ATPase 與橫橋循環通常較慢，小腸平滑肌在選項中達峰最慢。先確認問的是力學收縮時間而非 AP 時間。"
      ],
      [
        "102-2-2-8",
        "平滑肌橫橋由粗肌絲調節",
        "Ca²⁺–CaM 活化 MLCK，使 myosin 輕鏈磷酸化，再增加橫橋循環。題目把啟動機轉寫成 actin 端的調節，是把骨骼肌概念套錯。"
      ],
      [
        "103-1-2-8",
        "心肌不易發生強直｜跨章・心血管",
        "L 型 Ca²⁺ 內流支撐平台期，延長不反應期，和收縮時間高度重疊，因而限制張力加成與強直。"
      ],
      [
        "105-1-2-7",
        "牽張引發平滑肌收縮",
        "典型內臟平滑肌可對牽張出現去極化或收縮。小腸平滑肌在這組選項最符合。分開直接肌源性反應和骨骼肌牽張反射。"
      ],
      [
        "105-1-2-10",
        "加速心肌 Ca²⁺ 回收｜跨章・心血管",
        "提高 SERCA 功能可加快 SR 回收 Ca²⁺，促進心肌舒張。別把更多 Ca²⁺ 內流或 SR 釋鈣當成直接加快胞質清除。"
      ],
      [
        "105-2-2-7",
        "平滑肌構造與調控",
        "平滑肌有 actin、myosin、dense bodies，肌絲沒有規律肌節。部分平滑肌保留增生能力。Dense bodies 位於細胞質或細胞膜附近，題目把它放進細胞核，是錯項。"
      ],
      [
        "106-1-2-8",
        "細肌絲的錨定點",
        "骨骼肌 actin 錨定於 Z 線，平滑肌錨定於 dense bodies 等結構。兩者都有 actin 與 myosin，排列和調節方式不同。"
      ],
      [
        "106-2-1-55",
        "MLCP 功能",
        "MLCP 使 myosin 輕鏈去磷酸化，傾向降低張力。MLCK 才負責加磷酸。若胞內 Ca²⁺ 不變，抑制 MLCP 也可增加收縮。"
      ],
      [
        "107-1-1-54",
        "RyR 與肌肉釋鈣",
        "依原題選 SR 膜上的 RyR。骨骼肌多為 RyR1，心肌多為 RyR2；平滑肌可用 RyR，也常用 IP₃ 受體及外鈣內流。避免把原題的廣義敘述背成所有平滑肌都依賴 RyR。"
      ],
      [
        "107-2-1-55",
        "平滑肌 Ca²⁺ 的直接標的",
        "Ca²⁺ 先結合 calmodulin，再活化 MLCK。肌凝蛋白輕鏈是 MLCK 的磷酸化標的，actin 是橫橋作用對象。"
      ],
      [
        "108-1-1-51",
        "平滑肌較低 myosin ATPase 活性",
        "平滑肌橫橋循環慢，能以較低的 ATP 消耗維持張力。與骨骼肌快縮或慢縮纖維比較時，先辨認題幹問的是 myosin ATPase。"
      ],
      [
        "109-2-1-54",
        "Single-unit 與 multi-unit 的基礎張力",
        "依本題選單一單位型可在無外刺激下維持部分張力。Single-unit 較常有自發活動與牽張反應；不同器官仍可受神經、局部或激素訊號調節。"
      ],
      [
        "112-2-1-55",
        "三類肌肉偶聯的共同與例外",
        "平滑肌沒有典型 T-tubule，且可藉受體與 IP₃ 啟動收縮。骨骼肌和心肌雖有 T-tubule，前者以電壓感測耦聯 SR，後者以外鈣觸發 SR 釋鈣。"
      ],
      [
        "113-1-1-55",
        "平滑肌先結合 CaM",
        "選 calmodulin。Troponin C 對應骨骼肌與心肌；tropomyosin 可存在於平滑肌，但不是本題的直接 Ca²⁺ 感測標的。"
      ],
      [
        "113-2-1-65",
        "腸道慢波與 spike｜跨章・腸胃",
        "慢波與 Cajal 間質細胞有關。只出現慢波且未達閾值時，不等於已有引發明顯收縮的 Ca²⁺ spike。先辨認題幹有無 spike。"
      ],
      [
        "115-1-1-55",
        "Ca²⁺ 直接標的與粗肌絲調節",
        "骨骼肌 Ca²⁺ 結合 TnC，平滑肌結合 CaM。B 借用「平滑肌在粗肌絲調節」的真概念，但將它錯放在 Ca²⁺ 的第一個結合步驟。"
      ],
      [
        "115-2-1-55",
        "三種肌肉的 Ca²⁺ 來源",
        "典型骨骼肌主要依靠 SR；心肌需外 Ca²⁺ 觸發 SR 釋鈣；平滑肌可同時由胞外內流與胞內儲庫釋放。「平滑肌全部來自單一來源」是本題錯項。"
      ],
      [
        "108-1-1-56",
        "鈉鉀幫浦抑制提高心肌收縮力｜跨章・心血管",
        "抑制鈉鉀幫浦使胞內 Na⁺ 升高，降低 NCX 正向排鈣驅動力，增加可供收縮的 Ca²⁺。若反而提高正向 NCX 活性，Ca²⁺ 排出會增加。"
      ],
      [
        "110-1-1-47",
        "IP₃ 受體釋放內儲 Ca²⁺",
        "IP₃ 結合內質網上的 IP₃ 受體後開啟釋鈣通道。SERCA 將鈣送回內質網，store-operated 通道則在細胞膜補充 Ca²⁺，三者位置與方向不同。"
      ]
    ]
  }
];

const cellPhysiologyExamRoute = '#/subject/physiology/chapter/cell-physiology/exams';

function physiologyExamEntry() {
  return '<section class="quiz-panel"><p class="eyebrow">CHAPTER 01 / EXAM ARCHIVE</p><h2>本章歷屆考古題與考點分析</h2>'
    + '<p>按考點、年度與跨章範圍找題。每題附原卷、官方答案、判題依據及易錯處。</p>'
    + '<a class="quiz-button" href="' + cellPhysiologyExamRoute + '">瀏覽本章歷屆考題 →</a></section>';
}

function physiologyExamAnswer(question) {
  if (question.answers.includes('*')) return '一律給分';
  if (question.answers.includes('+')) return '有作答即給分';
  return question.answers.join(' 或 ');
}

async function renderPhysiologyExamArchive() {
  const app = document.getElementById('physiology-exam-archive');
  const generation = quizGeneration;
  try {
    const bank = await quizLoadBank('physiology');
    if (!app.isConnected || generation !== quizGeneration) return;
    const byId = new Map(bank.map(question => [question.id, question]));
    const groups = physiologyExamNotes.map(group => ({
      ...group,
      entries: group.notes.map(([id, label, analysis]) => {
        const question = byId.get(id);
        if (!question) throw new Error('Missing question: ' + id);
        const [point, crossover] = label.split('｜');
        return { question, point, crossover, analysis };
      }).sort((a, b) => b.question.year - a.question.year || b.question.session - a.question.session || a.question.number - b.question.number),
    }));
    const entries = groups.flatMap(group => group.entries);
    const years = [...new Set(entries.map(entry => entry.question.year))].sort((a, b) => b - a);
    const crossCount = entries.filter(entry => entry.crossover).length;
    const correctedCount = entries.filter(entry => entry.question.corrected || entry.question.answers.length > 1 || entry.question.answers.some(answer => answer === '*' || answer === '+')).length;
    app.innerHTML = `<section class="quiz-panel">
      <h2>收錄範圍與命題分布</h2>
      <p>從本站生理學題庫（民國 ${Math.min(...bank.map(q => q.year))}–${Math.max(...bank.map(q => q.year))} 年，共 ${bank.length.toLocaleString('zh-TW')} 題）整理出 <strong>${entries.length} 題</strong>。其中 ${entries.length - crossCount} 題以本章機轉為主，${crossCount} 題為可用本章觀念解出的跨章題，${correctedCount} 題有更正、複數採計或特殊給分紀錄。章節歸類與考點統計為本站整理。</p>
      <p>以 BRS 第 1 章範圍為準。題目若主要在考感覺路徑、心臟節律、腎臟清除率或器官功能，即使提及膜電位或滲透壓，也留給對應系統章節。</p>
      <div class="archive-scroll"><table>
        <thead><tr><th scope="col">考點</th><th scope="col">題數</th><th scope="col">常見問法</th><th scope="col">判題順序</th></tr></thead>
        <tbody>${groups.map(group => `<tr><th scope="row">${quizEscape(group.name)}</th><td>${group.entries.length}</td><td>${quizEscape(group.pattern)}</td><td>${quizEscape(group.strategy)}</td></tr>`).join('')}</tbody>
      </table></div>
      <h3>同一個考點，歷屆怎麼換問法</h3>
      <ul>
        <li><strong>橫橋與 ATP。</strong> 100-2 第 7 題和 104-1 第 7 題問高能構型，答 ATP 水解。112-1 第 56 題問解離，答 ATP 結合。111-1 第 57 題與 114-1 第 55 題改用屍僵反向考。</li>
        <li><strong>骨骼肌的 Ca²⁺ 路徑。</strong> 100-1 第 11 題與 108-2 第 54 題問 DHPR，106-2 第 54 題問 RyR，110-1 第 55 題問 Ca²⁺ 儲庫。把「哪個膜、哪個蛋白、哪個方向」三欄分開。</li>
        <li><strong>終板電位。</strong> 109-1 第 56 題問電位性質，113-2 第 50 題問發生位置與量子釋放，114-2 第 48 題用肉毒毒素反推 EPP 大小。可串成「釋放 → 接收 → 達閾」來重做。</li>
        <li><strong>平滑肌收縮的調節層次。</strong> 107-2 第 55 題與 113-1 第 55 題直接問 Ca²⁺ 結合誰，106-2 第 55 題問 MLCP，115-1 第 55 題把 Ca²⁺ 的直接標的和粗肌絲的調節位置放在同一題比較。</li>
        <li><strong>膜電位的方向。</strong> 100-1 第 3 題問 Vₘ＝E 時的淨流量，110-2 第 53 題改成開通道後電位往哪走，115-2 第 47 題再改外液濃度。依序練「驅動力 → 電位 → 改變離子梯度」。</li>
      </ul>
    </section>
    <section class="quiz-panel" aria-label="題目篩選">
      <div class="quiz-actions">
        <label>考點<select id="phys-exam-topic"><option value="">全部考點</option>${groups.map(group => `<option value="${group.id}">${quizEscape(group.name)}（${group.entries.length}）</option>`).join('')}</select></label>
        <label>年度<select id="phys-exam-year"><option value="">全部年度</option>${years.map(year => `<option value="${year}">${year} 年</option>`).join('')}</select></label>
        <label>範圍<select id="phys-exam-scope"><option value="">全部</option><option value="core">本章核心</option><option value="cross">跨章應用</option><option value="special">更正或特殊給分</option></select></label>
        <label>搜尋<input type="search" id="phys-exam-search" class="study-search" placeholder="例如 NCX、屍僵、115-1-1-47"></label>
      </div>
      <p id="phys-exam-count" role="status"></p>
    </section><div id="phys-exam-list"></div>`;

    const topic = app.querySelector('#phys-exam-topic');
    const year = app.querySelector('#phys-exam-year');
    const scope = app.querySelector('#phys-exam-scope');
    const search = app.querySelector('#phys-exam-search');
    const list = app.querySelector('#phys-exam-list');
    const special = q => q.corrected || q.answers.length > 1 || q.answers.some(answer => answer === '*' || answer === '+');
    const meta = q => `${q.year} 年第 ${q.session} 次醫學（${q.paper === 1 ? '一' : '二'}）第 ${q.number} 題`;

    function questionCard({ question: q, point, crossover, analysis }) {
      return `<article class="quiz-question">
        <details class="phys-exam-card">
          <summary><strong>${meta(q)}</strong> · ${quizEscape(point)}${crossover ? ` <small>（${quizEscape(crossover)}）</small>` : ''}</summary>
          <div class="quiz-actions">
            <button type="button" class="quiz-button secondary" data-phys-question="${q.id}">載入原卷題圖</button>
            <a class="quiz-button secondary" href="${q.pdf}#page=${q.regions[0].page}" target="_blank" rel="noopener">開啟原卷第 ${q.regions[0].page} 頁</a>
          </div>
          <div class="quiz-image" hidden></div>
          <p class="quiz-note">題庫文字轉錄。數學符號、圖表或欄位錯序時，以原卷為準。</p>
          <p style="white-space:pre-wrap;overflow-wrap:anywhere">${quizEscape(q.text.trim())}</p>
          <details><summary>展開官方答案與考點分析</summary>
            <p><strong>官方採計答案：</strong>${quizEscape(physiologyExamAnswer(q))}${q.corrected ? '（依官方更正）' : ''}</p>
            <p><strong>考點：</strong>${quizEscape(point)}</p>
            <p><strong>判題依據與易錯處：</strong>${quizEscape(analysis)}</p>
            <p><a href="${q.answerPdf}" target="_blank" rel="noopener">${q.answerVersion === 'M' ? '官方更正答案 PDF' : '官方答案 PDF'}</a></p>
          </details>
        </details>
      </article>`;
    }

    function update() {
      const query = search.value.trim().toLocaleLowerCase();
      const matching = groups.filter(group => !topic.value || group.id === topic.value).map(group => ({
        ...group,
        entries: group.entries.filter(({question: q, crossover, point, analysis}) =>
          (!year.value || q.year === Number(year.value))
          && (scope.value !== 'cross' || crossover)
          && (scope.value !== 'core' || !crossover)
          && (scope.value !== 'special' || special(q))
          && (!query || [q.id, q.text, crossover, point, analysis].some(value => value?.toLocaleLowerCase().includes(query)))),
      })).filter(group => group.entries.length);
      const count = matching.reduce((total, group) => total + group.entries.length, 0);
      app.querySelector('#phys-exam-count').textContent = `顯示 ${count} / ${entries.length} 題`;
      list.innerHTML = matching.map(group => `<section aria-label="${quizEscape(group.name)}"><h2>${quizEscape(group.name)}（${group.entries.length} 題）</h2><p>${quizEscape(group.strategy)}</p>${group.entries.map(questionCard).join('')}</section>`).join('')
        || '<p>沒有符合條件的題目。可清除搜尋或改用全部年度。</p>';
    }

    [topic, year, scope].forEach(select => select.addEventListener('change', update));
    search.addEventListener('input', update);
    list.addEventListener('click', event => {
      const button = event.target.closest('button[data-phys-question]');
      if (!button || button.disabled) return;
      const holder = button.closest('.phys-exam-card').querySelector('.quiz-image');
      button.hidden = true;
      holder.hidden = false;
      holder.innerHTML = '<p class="quiz-loading">載入原題…</p>';
      quizImage(byId.get(button.dataset.physQuestion), holder, generation);
    });
    update();
  } catch (error) {
    if (app.isConnected && generation === quizGeneration) app.innerHTML = '<p class="quiz-error" role="alert">章節題庫載入失敗，請重新整理頁面再試。</p>';
  }
}
