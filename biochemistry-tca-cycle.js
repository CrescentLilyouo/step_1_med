biochemistryChapters.push({
  "id": "tca-cycle",
  "number": "09",
  "title": "TCA循環：碳流、能量與代謝交會",
  "summary": "逐步理解八個反應、碳與電子收支，再連到補充反應、合成出口與呼吸鏈。",
  "sources": "Harper’s Illustrated Biochemistry, 31st ed., Ch. 16 The Citric Acid Cycle（印刷頁150–156）；PDH與呼吸鏈連結參Ch. 17與13。",
  "references": "<p>Harper’s Illustrated Biochemistry, 31st ed., Ch. 16 The Citric Acid Cycle（印刷頁150–156）；PDH與呼吸鏈連結參Ch. 17與13。</p><p>正文與圖為原創教學重組，非逐段翻譯。題目取自現有歷屆題庫，官方採計答案與更正版本原樣保留；機轉解析另行撰寫。精選題數不等同完整考頻統計。</p>",
  "sections": [
    {
      "id": "topic-1",
      "title": "先理解循環的目的與區室",
      "html": "<p>TCA cycle、citric acid cycle與Krebs\ncycle指同一套核心反應。它把acetyl-CoA的二碳單位引入四碳oxaloacetate（OAA），經過一圈氧化反應後再生OAA，並把燃料的部分自由能保存為NADH、FAD相關還原當量與GTP／ATP。讀這章要同時追三本帳：碳去哪裡、電子交給誰、直接產生多少核苷酸三磷酸。</p>\n<p>大部分反應在粒線體基質進行；succinate\ndehydrogenase嵌在內膜，同時是電子傳遞鏈complex\nII。成熟紅血球沒有粒線體，因此不能進行自身的TCA與氧化磷酸化。這不是缺少葡萄糖，而是缺少氧化代謝的區室與設備。</p>\n<h3\nid=\"沒有一步直接用氧為何仍稱有氧代謝\">沒有一步直接用氧，為何仍稱有氧代謝？</h3>\n<p>TCA的氧化反應需要NAD⁺等電子接受者。生成的NADH必須經呼吸鏈再氧化，電子最後交給O₂；缺氧時NADH/NAD⁺升高，氧化步驟難以持續。因此「反應式沒有O₂」與「可長期不依賴氧」不同。若呼吸鏈被抑制，即使TCA酵素都還存在，整體通量也會受限。</p>\n<p>ATP用得越快，ADP通常越多，氧化磷酸化越有需求；呼吸鏈再生NAD⁺，又支持TCA繼續。供能與用能因而連在一起，不是細胞把所有燃料無限制氧化。</p>\n"
    },
    {
      "id": "topic-2",
      "title": "八步路徑：先用碳數建立地圖",
      "html": "<figure><div class=\"table-scroll\" tabindex=\"0\"><img src=\"assets/biochemistry/carbohydrate-tca.svg\" alt=\"TCA八步、碳數與每圈能量帳；OAA再生不是淨增加\" style=\"width:100%;min-width:540px;max-width:780px;height:auto\"></div><figcaption>TCA八步、碳數與每圈能量帳；OAA再生不是淨增加。圖中為教學模型；手機可橫向捲動，條件與例外見正文。</figcaption></figure><div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>步驟</th>\n<th>酵素與反應</th>\n<th>碳數</th>\n<th>這一步的帳</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>1</td>\n<td>Citrate synthase：OAA+acetyl-CoA→citrate</td>\n<td>4+2→6</td>\n<td>釋CoA；無NADH</td>\n</tr>\n<tr class=\"even\">\n<td>2</td>\n<td>Aconitase：citrate⇌isocitrate</td>\n<td>6→6</td>\n<td>異構化；無淨氧化還原</td>\n</tr>\n<tr class=\"odd\">\n<td>3</td>\n<td>Isocitrate dehydrogenase：isocitrate→α-KG</td>\n<td>6→5</td>\n<td>1 CO₂、1 NADH</td>\n</tr>\n<tr class=\"even\">\n<td>4</td>\n<td>α-KG dehydrogenase：α-KG→succinyl-CoA</td>\n<td>5→4</td>\n<td>1 CO₂、1 NADH</td>\n</tr>\n<tr class=\"odd\">\n<td>5</td>\n<td>Succinyl-CoA synthetase：succinyl-CoA⇌succinate</td>\n<td>4→4</td>\n<td>1 GTP或ATP</td>\n</tr>\n<tr class=\"even\">\n<td>6</td>\n<td>Succinate dehydrogenase：succinate⇌fumarate</td>\n<td>4→4</td>\n<td>FAD相關還原當量交CoQ</td>\n</tr>\n<tr class=\"odd\">\n<td>7</td>\n<td>Fumarase：fumarate⇌malate</td>\n<td>4→4</td>\n<td>加水</td>\n</tr>\n<tr class=\"even\">\n<td>8</td>\n<td>Malate dehydrogenase：malate⇌OAA</td>\n<td>4→4</td>\n<td>1 NADH</td>\n</tr>\n</tbody>\n</table></div>\n<p>第一輪先背「6、6、5、4、4、4、4、4」與兩個脫羧點，再把三個NADH位置標出。α-KG是α-ketoglutarate，又稱2-oxoglutarate；succinyl-CoA與succinate只差CoA卻有不同能量性質。若只記中文發音，很容易把第4與第5步混成同一反應。</p>\n<h3 id=\"兩個co₂的來源要分層看\">兩個CO₂的來源要分層看</h3>\n<p>就每圈淨反應而言，輸入一個二碳acetyl-CoA，輸出兩個CO₂。但新進來的acetyl碳通常不是第一圈立刻放出的那兩個碳；第一圈的脫羧位置與酵素立體專一性使新加入碳先保留於中間物。碳同位素題因此不能把「淨少兩碳」直接當成「剛進來兩碳當場離開」。</p>\n<p>中間物經過對稱的succinate後，後續圈數可出現標記位置重新分配。需要逐碳追蹤時應畫結構，而不是僅用代謝物總碳數推論。一般能量題只算每圈淨反應，不必額外把第一圈保留碳視為未產生CO₂。</p>\n"
    },
    {
      "id": "topic-3",
      "title": "Citrate synthase與aconitase：先接上，再改位置",
      "html": "<p>Citrate\nsynthase先讓OAA與acetyl-CoA形成碳碳鍵，再經硫酯水解釋出CoA，支持citrate生成。這一步常在細胞條件下遠離平衡，屬重要入口關卡。它不是把acetyl-CoA直接拆成兩個CO₂，也不直接生成NADH；主要工作是把二碳單位接到四碳接受者。</p>\n<h3\nid=\"oaa是循環接受者不是完全不需要的受質\">OAA是循環接受者，不是完全不需要的受質</h3>\n<p>OAA在一圈結尾被再生，淨消耗為零，但起始仍必須有足量OAA參與縮合。就像一組能重複使用的工具，工具不被每次消耗不代表可以把工具拿光。若OAA被抽去糖新生而補充不足，acetyl-CoA即使很多，也不保證TCA能同樣快速運轉。</p>\n<p>Aconitase先脫水成cis-aconitate，再加水形成isocitrate，把羥基從較不利後續氧化的位置調整到可進行氧化脫羧的位置。這是為第3步準備受質；不是此步就把NAD⁺還原。其Fe-S中心協助受質結合與催化，不能看到Fe-S就一律認定在這一步傳遞電子。</p>\n<h3 id=\"抑制物如何推回反應位置\">抑制物如何推回反應位置？</h3>\n<p>Fluoroacetate可先活化並與OAA形成fluorocitrate，後者抑制aconitase。因而可出現citrate累積與下游碳流受限。題目若問直接抑制者，需區分原始前驅物fluoroacetate與形成後的fluorocitrate；不要把第8章抑制enolase的fluoride混過來。</p>\n"
    },
    {
      "id": "topic-4",
      "title": "兩次氧化脫羧：IDH與α-KG dehydrogenase",
      "html": "<p>典型氧化型TCA使用NAD⁺依賴的isocitrate\ndehydrogenase（IDH3）。Isocitrate先氧化，經不穩定的酵素結合中間物再脫羧成α-KG，得到第一個NADH與CO₂。人類還有NADP⁺依賴的IDH1、IDH2，不能把所有isocitrate\ndehydrogenase都算成相同區室或一律產NADH。</p>\n<p>接著α-KG\ndehydrogenase把五碳α-KG氧化脫羧為四碳succinyl-CoA，產生第二個CO₂與NADH。它與上一章PDH是相似的多酵素氧化脫羧架構，五個輔因子也是TPP、lipoate、CoA、FAD、NAD⁺。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>比較</th>\n<th>PDH</th>\n<th>α-KG dehydrogenase</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>受質與產物</td>\n<td>Pyruvate→acetyl-CoA</td>\n<td>α-KG→succinyl-CoA</td>\n</tr>\n<tr class=\"even\">\n<td>碳數</td>\n<td>3→2+CO₂</td>\n<td>5→4+CO₂</td>\n</tr>\n<tr class=\"odd\">\n<td>位置與角色</td>\n<td>TCA之前的入口橋樑</td>\n<td>TCA循環內的第4步</td>\n</tr>\n<tr class=\"even\">\n<td>淨電子輸出</td>\n<td>NADH</td>\n<td>NADH</td>\n</tr>\n<tr class=\"odd\">\n<td>直接ATP</td>\n<td>無</td>\n<td>無</td>\n</tr>\n</tbody>\n</table></div>\n<p>E1藉TPP處理脫羧片段，lipoamide接受與轉交醯基，CoA接成硫酯，FAD與NAD⁺再將lipoamide氧化復原。FAD在複合體內部接力，不額外輸出一份可獨立計帳的FADH₂。第4步形成高轉移勢的succinyl-CoA，是下一步直接回收GTP／ATP的能量來源。</p>\n<h3 id=\"輔因子與抑制的連結\">輔因子與抑制的連結</h3>\n<p>B1不足可影響TPP依賴步驟；B2、B3、B5分別對應FAD、NAD⁺及CoA。Arsenite影響lipoate相關巰基功能，可限制PDH與α-KG\ndehydrogenase；arsenate取代糖解中的Pi則是另一機制。Succinyl-CoA與NADH是α-KG\ndehydrogenase的產物，累積時提供回饋抑制訊號。先從受質、產物及輔因子推導，比單背毒物名字容易保留。</p>\n"
    },
    {
      "id": "topic-5",
      "title": "Succinyl-CoA synthetase：循環唯一的直接核苷酸收益",
      "html": "<p>Succinyl-CoA的硫酯能量透過酵素中間步驟轉成GDP或ADP的磷酸化，生成succinate與GTP／ATP。常用反應式是succinyl-CoA+GDP+Pi⇌succinate+GTP+CoA。依isoform及組織可使用GDP或ADP，國考多以一圈1\nGTP記憶；不要把兩種isoform當成同一圈各生一個而算成2。</p>\n<h3 id=\"為什麼叫受質階層磷酸化\">為什麼叫受質階層磷酸化？</h3>\n<p>此反應的能量來自特定受質的高轉移勢，不必在這個反應步驟直接靠質子梯度推動。機制可經succinyl\nphosphate及酵素上的磷酸化histidine等中間態，把磷醯基送給核苷酸。雖然原始高能鍵是硫酯，整套反應仍可產核苷酸三磷酸；不能限定只有一開始就帶高能磷酸的受質才行。</p>\n<p>GTP可透過nucleoside diphosphate\nkinase與ADP交換高能磷酸，GTP+ADP⇌GDP+ATP。能量帳一般把一個GTP視為一個ATP當量，並不表示GTP只能拿去換ATP；它也可支援PEPCK等反應。</p>\n<h3 id=\"解題邊界\">解題邊界</h3>\n<p>若問「TCA直接生成多少ATP當量」，答1；若問「連同NADH、FAD相關電子的後續氧化」，約10。這與糖解直接ATP與總ATP當量的區分相同。Succinyl-CoA也能供heme生合成，若碳從這裡被抽走，就不能同時假設每個分子都完成後半圈並拿滿收益。</p>\n"
    },
    {
      "id": "topic-6",
      "title": "後半圈：FAD氧化、加水、NAD氧化",
      "html": "<p>Succinate\ndehydrogenase將succinate的碳碳單鍵氧化為fumarate的雙鍵。酵素結合的FAD接受電子，再透過Fe-S中心送到CoQ；因此常把本步收益寫成1\nFADH₂當量。這是記帳語言，並不表示自由FADH₂先離開酵素、再跑去別處找complex\nII。</p>\n<p>Malonate與succinate結構相似，可競爭性抑制succinate\ndehydrogenase。在簡化的競爭抑制模型，提高受質可減輕抑制，表觀Km增加、Vmax不變。若題目只問TCA哪個酵素受影響，不要改選相鄰的fumarase；抑制點須對到受質結構與反應。</p>\n<p>Fumarase把水加到fumarate雙鍵，生成L-malate，沒有NADH收益。Malate\ndehydrogenase再把malate羥基氧化成OAA的羰基，產第三個NADH。最後三步可用「形成雙鍵→加水→氧化羥基」重建，而不是把每個dehydrogenase都背成相同輔酶。</p>\n<h3\nid=\"為何malateoaa標準上不利仍能前進\">為何malate→OAA標準上不利，仍能前進？</h3>\n<p>這一步的ΔG°′為正，單獨達平衡較偏malate；但細胞內OAA濃度低、持續被citrate\nsynthase等使用，NADH也可由呼吸鏈再氧化。這些條件降低反應商，使實際ΔG可適合前進。第6章的ΔG=ΔG°′+RT\nlnQ在這裡不是抽象公式，而是維持循環的理由。</p>\n<p>若NADH/NAD⁺過高，malate氧化與OAA供應更容易受限。不能因「酵素存在」就斷定通量正常，也不能把標準自由能正誤寫成這一步永遠無法在人體進行。</p>\n"
    },
    {
      "id": "topic-7",
      "title": "一圈、每pyruvate、每glucose：分開算三種邊界",
      "html": "<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>題目邊界</th>\n<th style=\"text-align: right;\">NADH</th>\n<th style=\"text-align: right;\">FAD相關當量</th>\n<th style=\"text-align: right;\">直接GTP／ATP</th>\n<th style=\"text-align: right;\">常用總ATP當量</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>1 acetyl-CoA跑1圈TCA</td>\n<td style=\"text-align: right;\">3</td>\n<td style=\"text-align: right;\">1</td>\n<td style=\"text-align: right;\">1</td>\n<td style=\"text-align: right;\">3×2.5+1.5+1=10</td>\n</tr>\n<tr class=\"even\">\n<td>1 pyruvate經PDH再跑TCA</td>\n<td style=\"text-align: right;\">4</td>\n<td style=\"text-align: right;\">1</td>\n<td style=\"text-align: right;\">1</td>\n<td style=\"text-align: right;\">4×2.5+1.5+1=12.5</td>\n</tr>\n<tr class=\"odd\">\n<td>1 glucose產生的2 acetyl-CoA只跑TCA</td>\n<td style=\"text-align: right;\">6</td>\n<td style=\"text-align: right;\">2</td>\n<td style=\"text-align: right;\">2</td>\n<td style=\"text-align: right;\">20</td>\n</tr>\n<tr class=\"even\">\n<td>1 glucose的PDH加TCA，未計糖解</td>\n<td style=\"text-align: right;\">8</td>\n<td style=\"text-align: right;\">2</td>\n<td style=\"text-align: right;\">2</td>\n<td style=\"text-align: right;\">25</td>\n</tr>\n</tbody>\n</table></div>\n<p>小數表示每莫耳的平均化學計量收益近似，不是把一個ATP分子切半。題幹若指定舊式3／2或其他P/O，依給定條件重新算，不要把不同年代假設混在同一張帳。</p>\n<h3 id=\"從頭得到30或32\">從頭得到30或32</h3>\n<p>糖解直接淨2\nATP，另有2胞質NADH；PDH+TCA合計約25。若胞質NADH走malate–aspartate，另加5，總2+25+5=32；若走glycerol-3-phosphate，另加3，總30。這是完整氧化並依指定穿梭與P/O的教學帳，實際細胞收益會受質子漏及其他需求影響。</p>\n<p>反推練習：題目由一個pyruvate生成3 CO₂，問NADH幾個。PDH先生成1 CO₂及1\nNADH，TCA再生成2 CO₂及3\nNADH，合計4。若答3，通常只算TCA；若答8，通常誤以每葡萄糖為單位。先在紙上圈起題幹起點與分母，往往比重新背整圈更有效。</p>\n"
    },
    {
      "id": "topic-8",
      "title": "調控：受質、還原狀態與需求共同決定流量",
      "html": "<p>不能用「有acetyl-CoA就一定加速」概括TCA。至少要有OAA、氧化態輔酶、下游電子出口與ATP需求。高ATP/ADP或高NADH/NAD⁺常使氧化通量下降；ADP增加表示用能需求，Ca²⁺在收縮肌肉可協調供能。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>調控層級</th>\n<th>典型訊號</th>\n<th>要連到的理由</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Citrate synthase入口</td>\n<td>OAA與acetyl-CoA供應，產物／能量狀態</td>\n<td>缺一個碳受質就不能縮合</td>\n</tr>\n<tr class=\"even\">\n<td>NAD依賴IDH</td>\n<td>ADP、Ca²⁺促進；ATP、NADH抑制</td>\n<td>需求上升支持氧化，能量充足減速</td>\n</tr>\n<tr class=\"odd\">\n<td>α-KG dehydrogenase</td>\n<td>Ca²⁺促進；NADH、succinyl-CoA抑制</td>\n<td>以需求及產物回饋調節</td>\n</tr>\n<tr class=\"even\">\n<td>整體呼吸耦合</td>\n<td>ADP、氧與電子鏈功能</td>\n<td>影響NAD⁺再生</td>\n</tr>\n</tbody>\n</table></div>\n<p>這些是典型教學方向，效應大小仍受條件、組織與isoform影響。TCA三個常見調控關卡不能照搬成PDH\nkinase／phosphatase都控制：PDH的共價修飾機制屬入口橋樑，不代表α-KG\ndehydrogenase也用完全相同的磷酸化開關。</p>\n<h3 id=\"運動時的因果鏈\">運動時的因果鏈</h3>\n<p>肌肉收縮消耗ATP、提高ADP，Ca²⁺也上升；氧化磷酸化需求增加，呼吸鏈加快NADH氧化，並配合PDH、IDH與α-KG\ndehydrogenase的調節，使碳氧化支援ATP再生。若氧輸送不足或電子鏈受阻，這條鏈仍會卡住，Ca²⁺或ADP並不能替代氧的末端電子接受作用。</p>\n"
    },
    {
      "id": "topic-9",
      "title": "Amphibolic：既供能，也供原料",
      "html": "<p>TCA是amphibolic\npathway，兼具分解與合成功能。Citrate可輸出到胞質提供脂肪酸與膽固醇合成的acetyl-CoA；α-KG可透過glutamate連到胺基酸代謝；OAA可經aspartate連到胺基酸、核苷酸與尿素循環；succinyl-CoA參與heme合成。</p>\n<p>這些出口使「一圈必定產10\nATP」有適用條件：必須真的完成一圈且還原當量完成對應氧化。若citrate先被送出去合成脂質，就不能一邊算它全部氧化、一邊算同一份碳全部變成脂肪酸。</p>\n<h3\nid=\"citrate運輸不是acetyl-coa直接穿膜\">Citrate運輸不是acetyl-CoA直接穿膜</h3>\n<p>粒線體acetyl-CoA不能直接自由跨內膜。與OAA形成citrate並輸出後，可由胞質ATP-citrate\nlyase消耗ATP裂解出acetyl-CoA與OAA，支援合成。這個能量成本與碳骨架回收屬另一套運輸／合成帳；不能把citrate輸出當作無成本增加胞質acetyl-CoA。</p>\n<p>Aspartate–argininosuccinate\nshunt則連結TCA與尿素循環：aspartate提供尿素循環的一個氮，相關反應產生的fumarate可轉malate再回OAA。這是碳與氮路徑交會，不等於TCA直接把氨製成尿素；尿素循環的關鍵酵素仍是另一套。</p>\n"
    },
    {
      "id": "topic-10",
      "title": "Anaplerosis：抽走中間物，就要補回",
      "html": "<p>Anaplerotic reaction指淨補充TCA中間物的反應。最重要的例子是pyruvate\ncarboxylase：pyruvate+HCO₃⁻+ATP→OAA+ADP+Pi，位於粒線體，需biotin，並受acetyl-CoA活化。當acetyl-CoA很多而四碳接受者不足，增加OAA供應便有功能上的合理性。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>補充來源</th>\n<th>進入點</th>\n<th>關鍵辨認</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Pyruvate羧化</td>\n<td>OAA</td>\n<td>PC、biotin、ATP</td>\n</tr>\n<tr class=\"even\">\n<td>Aspartate轉胺</td>\n<td>OAA</td>\n<td>與glutamate／α-KG交換胺基</td>\n</tr>\n<tr class=\"odd\">\n<td>Glutamate相關代謝</td>\n<td>α-KG</td>\n<td>連接胺基酸碳骨架</td>\n</tr>\n<tr class=\"even\">\n<td>Propionyl-CoA代謝</td>\n<td>Succinyl-CoA</td>\n<td>先需biotin羧化，再需B12依賴mutase</td>\n</tr>\n</tbody>\n</table></div>\n<p>奇數鏈脂肪酸最後留下propionyl-CoA，先成methylmalonyl-CoA，再重排成succinyl-CoA；不是propionyl-CoA直接變成TCA八步之一。這個三碳尾端可提供淨糖新生碳，與偶數鏈脂肪酸只產acetyl-CoA的情況不同。</p>\n<h3\nid=\"為什麼acetyl-coa進tca不算淨補充\">為什麼acetyl-CoA進TCA不算淨補充？</h3>\n<p>一圈進2碳、出2 CO₂，OAA只是再生，沒有淨增加OAA。人類又沒有glyoxylate\ncycle繞過兩次脫羧來保留額外碳，因此不能把偶數鏈脂肪酸的acetyl-CoA當成一般淨產葡萄糖來源。標記碳可能出現在糖分子中，與整體是否淨增加糖碳是兩種問題；考題通常在問後者。</p>\n"
    },
    {
      "id": "topic-11",
      "title": "臨床機轉與跨章整合",
      "html": "<p>空腹時脂肪酸氧化提供acetyl-CoA與能量，但肝臟OAA可被導向糖新生，高NADH也影響OAA／malate比例；acetyl-CoA供應相對超過TCA處理能力時，肝臟可增加酮體生成。不能把酮體增加簡化為TCA必定加速。糖尿病的代謝失衡還涉及激素、脂解與肝臟碳流，將在整合章詳述。</p>\n<p>B1缺乏可能限制PDH與α-KG\ndehydrogenase等反應，影響高耗能組織；高氨則可影響α-KG／glutamate／glutamine的平衡與能量代謝。神經症狀的機制通常不只單一TCA步驟，不能把複雜疾病全歸因成「OAA太低」或「缺一個ATP」。本章用這些情境練習從瓶頸推代謝方向。</p>\n<h3 id=\"三個整合情境\">三個整合情境</h3>\n<p>第一，呼吸鏈IV受阻：先預測NADH再氧化下降，再預測TCA氧化步驟受限，而不是直接把IV放進TCA八個酵素。第二，citrate大量輸出：先問中間物如何補回，再問還原力與ATP成本。第三，由一個pyruvate起算：先加PDH的一份NADH與CO₂，再算一圈TCA，不漏掉橋樑也不重複計帳。</p>\n<p>讀完應能不看表畫出八步，標出「3 NADH、1 FAD相關當量、1 GTP、2\nCO₂」，再用一句話解釋OAA淨消耗為零卻仍可能限制通量。最後能說出一個抽出路徑與一個補充路徑，才算從背圈圈進展到理解碳流。</p>\n"
    }
  ],
  "recalls": [
    [
      "TCA不直接用O₂，為什麼仍依賴有氧條件？",
      "NADH需經呼吸鏈再氧化；氧為末端接受者，出口受阻使NAD⁺再生及TCA氧化步驟受限。"
    ],
    [
      "新進acetyl-CoA的碳是否第一圈立即全部變CO₂？",
      "通常不是。每圈淨出2 CO₂不等於新進的2碳當圈被脫除；標記碳須按結構與立體專一性追蹤。"
    ],
    [
      "OAA淨消耗為零，為什麼仍可能限制citrate生成？",
      "它須實際參與入口縮合；被抽出而未補充時，可用濃度下降，循環再生不代表起點不需要它。"
    ],
    [
      "α-KG dehydrogenase和PDH共用哪些輔因子？",
      "TPP、lipoate、CoA、FAD、NAD⁺；FAD內部接力，淨電子收益算NADH，不再多算FADH₂。"
    ],
    [
      "TCA直接生成與含後續氧化的ATP當量各多少？",
      "每圈直接1 GTP或ATP；以2.5/1.5回收3 NADH及1 FAD相關當量，合計約10。"
    ],
    [
      "Succinate到OAA三步怎麼記？",
      "先以FAD相關氧化形成雙鍵，再加水成malate，最後以NAD⁺氧化羥基成OAA。"
    ],
    [
      "由1 pyruvate經PDH加TCA共有幾個NADH？",
      "PDH 1加TCA 3，共4；同時共3 CO₂、1 FAD相關當量、1直接核苷酸收益。"
    ],
    [
      "高NADH/NAD⁺為何不代表TCA應再加速？",
      "氧化態接受者不足及產物回饋可限制氧化；還需呼吸鏈再生NAD⁺，並符合ATP需求。"
    ],
    [
      "抽出citrate製脂肪，能否同時算同一份碳完成整圈收益？",
      "不能；碳已轉向合成，需按實際出口及補充反應重新記帳。"
    ],
    [
      "PC與acetyl-CoA進入TCA，哪個能淨補OAA？",
      "PC把pyruvate羧化成OAA，可淨補充；acetyl-CoA完成一圈出兩CO₂，通常不淨增加OAA。"
    ],
    [
      "呼吸鏈IV受阻時，應怎麼推回TCA？",
      "先推NADH再氧化下降，再推NAD⁺依賴反應受限；不要把IV列成TCA八步之一。"
    ]
  ],
  "readingIntro": "先用碳數畫八步，再找NADH、FAD相關當量與GTP；接著用不同題幹起點算能量，最後理解抽出與補充中間物。",
  "figure": "<p>先追碳流、電子與區室，再讀能量收支、器官調控與疾病連結。每節末可閉卷回答，歷屆題分組連回對應小節。</p>",
  "questions": [
    {
      "title": "01　一圈TCA，題幹規定NADH=2.5 ATP、FAD相關當量=1.5 ATP，總收益？",
      "prompt": "<p>一圈TCA，題幹規定NADH=2.5 ATP、FAD相關當量=1.5 ATP，總收益？</p>",
      "answer": "<p>列出3×2.5+1×1.5+1=10 ATP當量。只有最後的1是受質階層磷酸化直接收益，其餘要經呼吸鏈回收。若問直接產生，答案不是10。</p>"
    },
    {
      "title": "02　一個pyruvate經PDH加TCA，問NADH與CO₂；若改成一個glucose呢？",
      "prompt": "<p>一個pyruvate經PDH加TCA，問NADH與CO₂；若改成一個glucose呢？</p>",
      "answer": "<p>每pyruvate為4 NADH與3 CO₂；兩個pyruvate即8 NADH與6 CO₂，這裡尚不包含糖解本身的2 NADH。先確定起點才不會重複。</p>"
    },
    {
      "title": "03　酵素都正常，但OAA被大量抽出而未補回，額外給acetyl-CoA是否保證通量恢復？",
      "prompt": "<p>酵素都正常，但OAA被大量抽出而未補回，額外給acetyl-CoA是否保證通量恢復？</p>",
      "answer": "<p>不能。Citrate synthase同時需要OAA，額外二碳供體不等於淨補四碳接受者；可考慮PC等anaplerosis是否足夠。</p>"
    },
    {
      "title": "04　Malate→OAA的ΔG°′為正，是否代表教材的前進箭頭畫錯？",
      "prompt": "<p>Malate→OAA的ΔG°′為正，是否代表教材的前進箭頭畫錯？</p>",
      "answer": "<p>不是。實際ΔG還看Q；低OAA、持續消耗OAA與NADH再氧化可使前進有利。酵素本身不改ΔG°′或平衡常數。</p>"
    },
    {
      "title": "05　一個人把α-KG dehydrogenase算成1 NADH加1 FADH₂，錯在哪？",
      "prompt": "<p>一個人把α-KG dehydrogenase算成1 NADH加1 FADH₂，錯在哪？</p>",
      "answer": "<p>FAD是複合體內再氧化lipoamide的電子接力，電子最後送NAD⁺；只有NADH是這一步淨輸出的還原當量。</p>"
    },
    {
      "title": "06　Malonate抑制時，最直接哪個受質累積趨勢與產物形成受限？",
      "prompt": "<p>Malonate抑制時，最直接哪個受質累積趨勢與產物形成受限？</p>",
      "answer": "<p>阻succinate dehydrogenase，故succinate到fumarate受限；在其他條件相容下上游較易累積。不能把它當fluorocitrate對aconitase的抑制。</p>"
    },
    {
      "title": "07　以3與2的舊式P/O假設算一圈，為何得到12而非10？",
      "prompt": "<p>以3與2的舊式P/O假設算一圈，為何得到12而非10？</p>",
      "answer": "<p>3 NADH×3+1 FAD相關當量×2+1 GTP=12。差別是給定回收假設，不是TCA突然多了一個反應；同一題要一致使用題目數值。</p>"
    },
    {
      "title": "08　奇數鏈脂肪酸尾端如何生糖？請列兩個輔因子。",
      "prompt": "<p>奇數鏈脂肪酸尾端如何生糖？請列兩個輔因子。</p>",
      "answer": "<p>Propionyl-CoA先經biotin依賴羧化成methylmalonyl-CoA，再經立體轉換與B12依賴mutase成succinyl-CoA，提供淨TCA中間物並可導向OAA及糖新生。</p>"
    },
    {
      "title": "09　為何TCA缺氧受限，但它沒有一步直接消耗氧？",
      "prompt": "<p>為何TCA缺氧受限，但它沒有一步直接消耗氧？</p>",
      "answer": "<p>直接反應與系統依賴不同。呼吸鏈需要氧來處理還原當量，NAD⁺再生不足限制TCA；增加TCA酵素不能代替末端電子接受者。</p>"
    },
    {
      "title": "10　空腹脂肪氧化高，是否可推論肝臟TCA必定成比例加速？",
      "prompt": "<p>空腹脂肪氧化高，是否可推論肝臟TCA必定成比例加速？</p>",
      "answer": "<p>不能。還要看OAA供應、糖新生抽出、NADH/NAD⁺及ATP需求；acetyl-CoA可能轉向酮體生成。供體很多不等於所有出口都能增加。</p>"
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
        "title": "反應邊界與能量帳",
        "topic": "topic-7",
        "summary": "題幹每pyruvate、每acetyl-CoA與每glucose不能混算。",
        "questions": [
          {
            "number": 44,
            "text": "44 \n一分子的丙酮酸(pyruvate)經由丙酮酸脫氫(pyruvate dehydrogenase)以及檸檬酸循環(citric acid \ncycle)代謝生成3 分子二氧化碳時,可以產生1 分子的FADH2,1 分子的ATP(或GTP),以及幾\n分子的NADH? \nA1 \nB2 \nC3 \nD4 \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  173.34,
                  570.0,
                  225.9
                ]
              }
            ],
            "id": "96-1-2-44",
            "year": 96,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/96/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=096040&c=122&s=2001&q=1&verify=step1-20261013-096040-122-2001-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=096040&y=2007",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/96/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=096040&c=122&s=2001&q=1&verify=step1-20261013-096040-122-2001-M",
            "corrected": true,
            "answerVersion": "M",
            "point": "反應邊界與能量帳",
            "analysis": "一個pyruvate先經PDH得1 NADH與1 CO₂，再跑TCA得3 NADH與2 CO₂，故共4 NADH選D。A只算PDH，C只算TCA；B也漏掉部分氧化。題幹另列的FADH₂及ATP／GTP來自TCA。",
            "trap": "先在題幹圈出pyruvate與3 CO₂，表示必須包含PDH橋樑。"
          },
          {
            "number": 88,
            "text": "88.下列關於克式循環(Krebs cycle,亦稱citric acid cycle或TCA cycle)的敘述,何者正確? \n \nA.在克式循環過程中,oxaloacetate淨消耗(net consumption)為零 \nB.在克式循環過程中,不涉及受質階層磷酸化(substrate-level phosphorylation) \nC.一次的克式循環會產生一個分子的二氧化碳 \nD.一次的克式循環會產生四個分子的FADH2 \n",
            "regions": [
              {
                "page": 13,
                "rect": [
                  30.0,
                  485.05,
                  570.0,
                  590.05
                ]
              }
            ],
            "id": "107-1-1-88",
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
            "point": "反應邊界與能量帳",
            "analysis": "OAA在入口消耗、最後再生，理想完整一圈淨消耗為零，A正確。B漏掉succinyl-CoA synthetase的受質階層磷酸化；C應為2 CO₂；D應為1 FAD相關當量與3 NADH。",
            "trap": "淨消耗零不等於OAA濃度可以是零。"
          }
        ]
      },
      {
        "id": "group-2",
        "title": "氧化脫羧與輔因子",
        "topic": "topic-4",
        "summary": "從受質、產物與電子去向辨認反應。",
        "questions": [
          {
            "number": 35,
            "text": "35 \nα酮戊二酸脫氫酶(α-ketoglutarate dehydrogenase)為檸檬酸循環(citric acid cycle)調控酵素(\nregulatory enzyme)之一,其酵素活性可受到下列何物之抑制? \nAAMP \n \nBADP \nCNAD+ \n \nD琥珀醯輔酶A(succinyl-CoA) \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  144.42,
                  570.0,
                  206.4
                ]
              }
            ],
            "id": "96-2-2-35",
            "year": 96,
            "session": 2,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/96/2/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=096130&c=103&s=2001&q=1&verify=step1-20261013-096130-103-2001-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=096130&y=2007",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/96/2/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=096130&c=103&s=2001&q=1&verify=step1-20261013-096130-103-2001-M",
            "corrected": true,
            "answerVersion": "M",
            "point": "氧化脫羧與輔因子",
            "analysis": "Succinyl-CoA為α-KG dehydrogenase產物，累積可回饋抑制，選D。AMP／ADP是較低能量訊號而非本題主要抑制者；NAD⁺是氧化反應所需接受者，須與抑制性的NADH區分。",
            "trap": "酵素名、產物與NADH先連成一組。"
          },
          {
            "number": 38,
            "text": "38.下列何種分子不會直接參與克式循環(Krebs cycle,亦稱citric acid cycle或TCA cycle)中的化學反應? \n \nA.coenzyme A(CoA) \nB.ADP(或GDP) \nC.glutathione \nD.NAD+ \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  472.85,
                  570.0,
                  542.81
                ]
              }
            ],
            "id": "105-2-2-38",
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
            "point": "氧化脫羧與輔因子",
            "analysis": "CoA參與citrate入口及α-KG氧化脫羧等反應；GDP／ADP接受受質階層磷酸化；NAD⁺接收電子。Glutathione重要於抗氧化，但不是標準八步TCA的直接反應物，故C。",
            "trap": "重要的細胞分子不等於此路徑的直接受質。"
          },
          {
            "number": 93,
            "text": "93.使葡萄糖經糖解作用(glycolysis)後的產物直接進入克氏循環(Krebs cycle,亦稱citric acid cycle 或\nTCA cycle)的關鍵酵素為何? \nA.succinate dehydrogenase complex \nB.isocitrate dehydrogenase complex \nC.pyruvate dehydrogenase complex \nD.malate dehydrogenase complex \n",
            "regions": [
              {
                "page": 17,
                "rect": [
                  30.0,
                  278.75,
                  587.0,
                  408.47
                ]
              }
            ],
            "id": "115-1-1-93",
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
            "point": "氧化脫羧與輔因子",
            "analysis": "糖解終產物pyruvate先由PDH complex轉為acetyl-CoA，才作為二碳單位進入TCA，選C。A、B、D均為循環內部酵素，不是pyruvate變acetyl-CoA的入口橋樑。",
            "trap": "PDH支援進入循環，但不是八步循環之一。"
          }
        ]
      },
      {
        "id": "group-3",
        "title": "Succinate、complex II與抑制",
        "topic": "topic-6",
        "summary": "這個內膜反應把TCA直接連到CoQ。",
        "questions": [
          {
            "number": 33,
            "text": "33 \n檸檬酸循環(citric acid cycle)之代謝中何者活性可被丙二酸(malonate)競爭所抑制? \nA檸檬酸合成(Citrate synthase) \nB琥珀酸脫氫(Succinate dehydrogenase) \nC延胡索酸(Fumarase) \nD蘋果酸脫氫(Malate dehydrogenase) \n",
            "regions": [
              {
                "page": 3,
                "rect": [
                  30.0,
                  459.39,
                  570.22,
                  499.89
                ]
              }
            ],
            "id": "101-1-2-33",
            "year": 101,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/101/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=101030&c=101&s=0102&q=1&verify=step1-20261013-101030-101-0102-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=101030&y=2012",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/101/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=101030&c=101&s=0102&q=1&verify=step1-20261013-101030-101-0102-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "B"
            ],
            "point": "Succinate、complex II與抑制",
            "analysis": "Malonate與succinate相似，競爭性抑制succinate dehydrogenase，B正確。A citrate synthase是入口縮合，C fumarase加水，D malate dehydrogenase使用NAD⁺氧化malate；都不是malonate的典型目標。",
            "trap": "先找與抑制物相似的受質，不要只背相鄰順序。"
          },
          {
            "number": 47,
            "text": "47.下列那一種酵素參與克式循環(Krebs cycle,亦稱citric acid cycle或TCA cycle)的反應,是位於粒線體內膜上且直接參與電\n子傳遞鏈? \n \nA.succinate dehydrogenase \nB.isocitrate dehydrogenase \nC.alpha-ketoglutarate dehydrogenase complex \nD malate dehydrogenase \n",
            "regions": [
              {
                "page": 5,
                "rect": [
                  30.0,
                  169.88,
                  570.0,
                  248.24
                ]
              }
            ],
            "id": "106-1-2-47",
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
            "point": "Succinate、complex II與抑制",
            "analysis": "Succinate dehydrogenase在粒線體內膜且為complex II，選A。其餘三者雖可在基質TCA產NADH或參與氧化，並非內膜呼吸鏈複合體本身。",
            "trap": "區分產生NADH供呼吸鏈與自己就是呼吸鏈元件。"
          },
          {
            "number": 95,
            "text": "95.下列那一種克式循環(Krebs cycle,亦稱citric acid cycle或TCA cycle)的中間產物可以不經由NADH的產生,\n而將其電子直接傳遞給電子傳遞鏈中的複合體II(complex II)進行氧化?\n \nA.succinate\nB.citrate\nC.α-ketoglutarate\nD.malate\n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  421.78,
                  569.96,
                  545.94
                ]
              }
            ],
            "id": "109-2-1-95",
            "year": 109,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/109/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=109100&c=301&s=11&q=1&verify=step1-20261013-109100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=109100&y=2020",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/109/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=109100&c=301&s=11&q=1&verify=step1-20261013-109100-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "A"
            ],
            "point": "Succinate、complex II與抑制",
            "analysis": "Succinate在II被氧化，電子經結合FAD與Fe-S到CoQ，不先生成游離NADH，選A。Malate與α-KG的典型氧化使用NAD⁺；citrate也不是II直接受質。",
            "trap": "FAD相關記帳不代表自由FADH₂先從酵素離開。"
          }
        ]
      },
      {
        "id": "group-4",
        "title": "能量需求與通量",
        "topic": "topic-8",
        "summary": "高ATP或高NADH通常提示供能需求下降或電子再氧化受限。",
        "questions": [
          {
            "number": 33,
            "text": "33 \n在下列何種情況下,acetyl-CoA 進入citric acid cycle 會減少? \nA[AMP]/[ATP]高 \nB[ATP]/[ADP]高 \nC[NAD+]/[NADH]高 \nD[oxaloacetate]高 \n",
            "regions": [
              {
                "page": 3,
                "rect": [
                  30.0,
                  411.24,
                  570.0,
                  437.64
                ]
              }
            ],
            "id": "99-2-2-33",
            "year": 99,
            "session": 2,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/99/2/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=099130&c=101&s=200&q=1&verify=step1-20261013-099130-101-200-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=099130&y=2010",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/99/2/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=099130&c=101&s=200&q=1&verify=step1-20261013-099130-101-200-M",
            "corrected": true,
            "answerVersion": "M",
            "point": "能量需求與通量",
            "analysis": "高ATP/ADP表示能量較充足，典型上降低進一步氧化需求，B正確。高AMP/ATP常反映缺能；高NAD⁺/NADH有利氧化接受電子；足量OAA支持與acetyl-CoA縮合，均非本題典型減速訊號。",
            "trap": "此題採計B；不要拿相似題的更正答案替換本題。"
          }
        ]
      },
      {
        "id": "group-5",
        "title": "補充碳源與合成出口",
        "topic": "topic-10",
        "summary": "淨補中間物與只把acetyl碳氧化是兩種效果。",
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
            "point": "補充碳源與合成出口",
            "analysis": "奇數鏈尾端為propionyl-CoA，經methylmalonyl-CoA轉為succinyl-CoA才直接進入TCA，故B。D是較早前驅物，A及C不是此段的直接入口。",
            "trap": "羧化需biotin，重排需B12；直接進TCA選succinyl-CoA。"
          },
          {
            "number": 94,
            "text": "94.胺基酸最主要是經由下列何種代謝路徑間接產生葡萄糖(glucose)?\n \nA.pentose phosphate pathway \nB.urea cycle \nC.oxidative phosphorylation \nD.citric acid cycle \n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  424.73,
                  570.0,
                  529.61
                ]
              }
            ],
            "id": "106-2-1-94",
            "year": 106,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/106/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=106100&c=301&s=11&q=1&verify=step1-20261013-106100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=106100&y=2017",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/106/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=106100&c=301&s=11&q=1&verify=step1-20261013-106100-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "D"
            ],
            "point": "補充碳源與合成出口",
            "analysis": "多種生糖胺基酸的碳骨架可進入TCA中間物再到OAA與糖新生，D為題目所問主要連結。尿素循環處理氮；氧化磷酸化處理電子供能；PPP不是這個主要碳回收路徑。不是所有胺基酸都能生糖，部分也可直接經pyruvate。",
            "trap": "題目選的是概括碳路徑，勿誇大成所有胺基酸必經完整一圈。"
          }
        ]
      },
      {
        "id": "group-6",
        "title": "TCA與尿素循環交會",
        "topic": "topic-9",
        "summary": "胺基與碳骨架需分開追蹤。",
        "questions": [
          {
            "number": 93,
            "text": "93.Aspartate-argininosuccinate shunt是代謝胺基酸之重要途徑,其與下列那兩種代謝環之連結有關?\n \nA.citric acid cycle和urea cycle\nB.urea cycle和Cori cycle\nC.citric acid cycle和glyoxylate cycle\nD.glucose-alanine cycle和urea cycle\n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  214.86,
                  569.96,
                  318.32
                ]
              }
            ],
            "id": "109-2-1-93",
            "year": 109,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/109/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=109100&c=301&s=11&q=1&verify=step1-20261013-109100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=109100&y=2020",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/109/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=109100&c=301&s=11&q=1&verify=step1-20261013-109100-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "A"
            ],
            "point": "TCA與尿素循環交會",
            "analysis": "Aspartate提供尿素循環的一個氮；argininosuccinate相關反應釋出的fumarate可經malate回OAA，連到TCA，故A。Cori主要為乳酸與糖回收；人類也沒有用glyoxylate cycle完成此連結。",
            "trap": "看到aspartate與fumarate，先想到氮進尿素循環、碳回TCA。"
          }
        ]
      }
    ]
  }
});
