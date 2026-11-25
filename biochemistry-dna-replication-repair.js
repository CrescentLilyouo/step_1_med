biochemistryChapters.push({
  "id": "dna-replication-repair",
  "number": "23",
  "title": "DNA 複製與修復",
  "summary": "從複製叉的方向判讀引子與聚合酶的分工，再依損傷類型選出修復路徑。",
  "sources": "Harper’s Illustrated Biochemistry, 31st Edition；歷屆題目依本站醫師第一階段生物化學題庫及各題官方答案。",
  "references": "<p>Harper’s Illustrated Biochemistry, 31st Edition；歷屆題目依本站醫師第一階段生物化學題庫及各題官方答案。</p><p>正文與圖為原創教學重組，非逐段翻譯。題目取自現有歷屆題庫，官方採計答案與更正版本原樣保留；機轉解析另行撰寫。精選題數不等同完整考頻統計。</p>",
  "sections": [
    {
      "id": "topic-1",
      "title": "先定義方向：模板怎麼讀，新股怎麼長",
      "html": "<p>DNA複製的任務，是把既有序列資訊交給兩個子代分子。半保留（semiconservative）表示每個子代雙股DNA都含一股親代與一股新合成股；不是一個子代全舊、另一個全新，也不是每一股都由舊、新小片段交錯構成。互補配對提供資訊，但真正連成新鏈的是糖－磷酸骨架的共價鍵。</p>\n<p>一般DNA\npolymerase讓新股末端的<strong>3′-OH攻擊進入dNTP的α磷酸</strong>，形成phosphodiester\nbond並釋出pyrophosphate。原來dNTP的β與γ磷酸離開，α磷酸保留在DNA骨架中。這也是放射性標記題要選α標記dNTP的理由；不是把dNTP的三個磷酸全部接入DNA。</p>\n<p>新股因此只能在3′端增加核苷酸，整體方向為5′→3′；聚合酶沿模板前進的方向則是3′→5′。題幹問「新股合成方向」與「讀模板方向」時必須分開。兩股反向平行並不代表其中一股改成3′→5′合成。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>名詞</th>\n<th>真正描述的內容</th>\n<th>容易混淆</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>5′→3′合成</td>\n<td>新DNA由5′端向3′端延伸</td>\n<td>不等於聚合酶沿模板5′→3′讀取</td>\n</tr>\n<tr class=\"even\">\n<td>3′-OH</td>\n<td>既有primer／新股的可延伸末端</td>\n<td>不是3′-phosphate或5′-OH</td>\n</tr>\n<tr class=\"odd\">\n<td>dNTP</td>\n<td>提供核苷酸及聚合所需化學能</td>\n<td>不是把ATP當成每一步獨立必需的燃料</td>\n</tr>\n<tr class=\"even\">\n<td>Mg²⁺</td>\n<td>聚合酶催化所需二價金屬之一</td>\n<td>不提供序列資訊</td>\n</tr>\n</tbody>\n</table></div>\n<p>例如模板寫成3′-A C G T-5′，對應新股為5′-T G C\nA-3′。如果題目把模板以5′→3′寫出，求新股通常需先做互補，再反轉順序成標準5′→3′表示；只寫互補字母、忘了方向，是分子題最常見的失分方式。</p>\n"
    },
    {
      "id": "topic-2",
      "title": "從哪裡開始：起始點、雙向複製與一次性授權",
      "html": "<p>E.\ncoli的典型環狀染色體由oriC啟動，通常形成兩個向相反方向移動的replication\nforks。真核線狀染色體長得多，會由多個起始點建立replication\nbubbles，再讓相鄰複製區域相遇完成。<strong>一個起始點可以產生兩個複製叉；起始點數不等於複製叉數。</strong>不能把E.\ncoli的「一個oriC」推成所有原核生物或所有DNA分子都只有一個起始點。</p>\n<p>DnaA參與E.\ncoli起始辨認，使鄰近較易打開的A-T-rich區域局部解開。真核細胞以origin\nrecognition complex及其他起始因子建立複製準備；並不是把E.\ncoli的DnaA與oriC名稱直接搬到人類染色體。</p>\n<p>真核核DNA的整體複製主要在S\nphase進行。細胞必須同時做到「全部複製一次」與「不要重複複製某一段」，所以起始前先授權、啟動後限制再次授權。G1階段ORC、Cdc6、Cdt1等協助裝載MCM\nhelicase相關複合體；進入S期後，CDK與DDK等訊號使授權的起始點啟動，並限制重複裝載。細節很多，但考試核心是<strong>授權與啟動分開，以防re-replication</strong>。</p>\n<p>不需要把所有起始點理解為完全同時發動；染色質環境與replication\ntiming會影響不同區域的時序。也不能把「核DNA主要在S期複製」變成「其他期完全沒有任何DNA合成」：DNA\nrepair synthesis與粒線體DNA相關活動的範圍不同。</p>\n"
    },
    {
      "id": "topic-3",
      "title": "複製叉：兩股都5′→3′，為何一股要分段",
      "html": "<figure><div class=\"table-scroll\" tabindex=\"0\"><img src=\"assets/biochemistry/replication-fork.svg\" alt=\"辨認複製叉行進方向及兩股的新生 3′ 端\" style=\"width:100%;min-width:540px;max-width:780px;height:auto\"></div><figcaption>辨認複製叉行進方向及兩股的新生 3′ 端。圖中為教學模型；手機可橫向捲動，條件與例外見正文。</figcaption></figure><p>假設複製叉向右前進。能讓聚合酶沿模板朝右讀取3′→5′的一側，新股便可朝複製叉方向持續延伸，稱leading\nstrand。另一側模板方向相反，聚合酶仍不能違反5′→3′合成原則，只能等待新模板暴露後反覆起始，形成一段段Okazaki\nfragments，再接成完整lagging strand。</p>\n<p>Leading與lagging是<strong>相對某一個複製叉</strong>的描述，不是整條親代股永久貼上的標籤。同一replication\nbubble的左右兩端，某股在一端當leading的模板，在另一端可以是lagging的模板。判圖時先畫出複製叉移動箭頭，再標模板5′／3′，最後才決定哪邊連續、哪邊分段。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>比較</th>\n<th>Leading strand</th>\n<th>Lagging strand</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>新股聚合方向</td>\n<td>5′→3′</td>\n<td>5′→3′</td>\n</tr>\n<tr class=\"even\">\n<td>相對複製叉移動</td>\n<td>朝前進方向持續延伸</td>\n<td>每段朝與叉前進相反方向延伸</td>\n</tr>\n<tr class=\"odd\">\n<td>起始需求</td>\n<td>仍需要primer</td>\n<td>反覆需要新primer</td>\n</tr>\n<tr class=\"even\">\n<td>中間產物</td>\n<td>典型較連續的新股</td>\n<td>Okazaki fragments</td>\n</tr>\n<tr class=\"odd\">\n<td>後續成熟</td>\n<td>仍需處理相關起始結構</td>\n<td>反覆移除primer、補DNA及封nick</td>\n</tr>\n</tbody>\n</table></div>\n<p>E.\ncoli與真核的片段長度不同：常用概念為細菌較長、真核約百餘至數百核苷酸，與真核染色質環境相關。本章重點不是死背一個固定長度，而是知道它們都由primer開始且都5′→3′延伸。Okazaki\nfragment不是先做一條完整新股再被endonuclease切碎，也不是核糖體中的RNA片段。</p>\n"
    },
    {
      "id": "topic-4",
      "title": "複製機器分工：打開、穩住、解除纏繞、延長",
      "html": "<p>Helicase把雙股DNA局部解開，讓單股模板能被讀取；SSB或真核RPA則結合已暴露的單股，減少重新配對及不適當二級結構。<strong>Helicase負責打開，SSB／RPA負責穩住打開後的狀態。</strong>不能因SSB會結合單股，就說它是切開雙股的酵素。</p>\n<p>當複製叉不斷打開雙股，前方DNA會累積扭轉壓力。Topoisomerase透過暫時切斷與重新接合骨架，改變DNA的拓樸狀態；helicase則不以切斷phosphodiester骨架來完成解旋。Type\nI典型暫切一股，type\nII暫切兩股並讓另一段DNA通過；ATP需求與具體功能要看類型，不能一律說所有topoisomerase都相同。細菌DNA\ngyrase是type II成員，不能把所有人類type II都叫gyrase。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>任務</th>\n<th>E. coli典型名稱</th>\n<th>真核主要對應</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>解開DNA</td>\n<td>DnaB helicase</td>\n<td>CMG helicase（含MCM）</td>\n</tr>\n<tr class=\"even\">\n<td>穩定單股</td>\n<td>SSB</td>\n<td>RPA</td>\n</tr>\n<tr class=\"odd\">\n<td>產生初始引子</td>\n<td>Primase／DnaG</td>\n<td>Pol α–primase複合體</td>\n</tr>\n<tr class=\"even\">\n<td>主體延伸</td>\n<td>Pol III</td>\n<td>Pol ε偏leading、Pol δ偏lagging</td>\n</tr>\n<tr class=\"odd\">\n<td>提高processivity</td>\n<td>β sliding clamp</td>\n<td>PCNA</td>\n</tr>\n<tr class=\"even\">\n<td>裝上clamp</td>\n<td>Clamp loader</td>\n<td>RFC</td>\n</tr>\n</tbody>\n</table></div>\n<p>這張表是典型分工模型，不是每種聚合酶在任何條件下都只做一件事。例如Pol\nδ可參與起始與修復；Pol ε／δ的正常主分工不能推成絕無任何交叉。Pol\nγ則要想到粒線體DNA；Pol\nβ主要連到BER等修復，不是核染色體大規模複製的主力。</p>\n"
    },
    {
      "id": "topic-5",
      "title": "引子與片段成熟：起始、填空、封口是三種工作",
      "html": "<p>一般複製型DNA\npolymerase不能從完全沒有引子的模板上自行開始，因為需要可供延伸的3′-OH。Primase可以從頭合成短RNA，提供起始末端。真核Pol\nα–primase複合體先由primase做RNA，再由Pol\nα延長一小段DNA，形成RNA–DNA起始片段，之後交給主要延伸聚合酶。</p>\n<p>因此「細胞內染色體複製的初始primer是RNA」與「DNA\npolymerase也能延伸DNA\nprimer」並不矛盾。PCR提供的是人工DNA寡核苷酸primer；細胞複製則藉primase產生RNA起點。題目若問初始primer的來源，選RNA；若問一般聚合酶能延伸哪些primer，不能排除DNA。</p>\n<p>E. coli的Pol I具有5′→3′ polymerase、3′→5′ proofreading\nexonuclease及5′→3′ exonuclease三類重要活性。後者可參與移除前方RNA\nprimer，並用DNA替換；Pol III才是染色體複製主要延伸者。Klenow\nfragment保留polymerase與3′→5′外切活性，缺少Pol\nI的5′→3′外切部分，是常見實驗題。</p>\n<p>真核Okazaki片段成熟由Pol δ、RNase\nH、FEN1等共同完成相關置換與引子移除，最後由DNA\nligase封閉剩下的nick。Ligase是在相鄰3′-OH與5′-phosphate之間建立骨架連接；若中間還少了一串核苷酸，不能期待ligase自己合成那段DNA。</p>\n<p><strong>區分gap與nick：</strong>gap是缺核苷酸，需要polymerase填補；nick是相鄰核苷酸已就位但骨架尚未連上，需要ligase封口。DNA聚合所需能量來自dNTP反應，不代表整套複製完全不需要ATP；helicase、clamp\nloading及許多連接／調控反應仍耗能。</p>\n"
    },
    {
      "id": "topic-6",
      "title": "準確度的三層防線：選對、回頭剪、事後修",
      "html": "<p>第一層是聚合酶活性中心對正確鹼基配對及幾何形狀的選擇；第二層是proofreading，把剛接錯的新股3′端核苷酸移到外切活性位置切除，再恢復延伸；第三層是複製後的mismatch\nrepair，處理漏網的錯配及小型插入／缺失loop。這些不是同一個反應的不同名字。</p>\n<p>Proofreading的典型方向為<strong>3′→5′\nexonuclease</strong>，因為錯誤通常位於正在長大的新股3′端。剪掉末端錯字不代表新股開始3′→5′聚合；剪除與合成是不同活性。也不要把Pol\nI的5′→3′ primer removal拿來回答proofreading。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>能力</th>\n<th>問的是什麼</th>\n<th>典型蛋白／功能</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Polymerization rate</td>\n<td>每秒加多少核苷酸</td>\n<td>催化速度</td>\n</tr>\n<tr class=\"even\">\n<td>Processivity</td>\n<td>一次結合後、解離前能連續加多少</td>\n<td>PCNA／β clamp提高穩定附著</td>\n</tr>\n<tr class=\"odd\">\n<td>Proofreading</td>\n<td>加錯後能否切掉末端錯誤</td>\n<td>3′→5′外切活性</td>\n</tr>\n<tr class=\"even\">\n<td>Mismatch repair</td>\n<td>漏網錯配是否事後被辨識與替換</td>\n<td>MSH／MLH等系統</td>\n</tr>\n</tbody>\n</table></div>\n<p>PCNA本身不是一把3′→5′剪刀；它提高聚合酶持續工作能力，也作為多種蛋白的互動平台。考題若選項同時有「增加準確度」與「增加processivity」，看到PCNA／β\nclamp應先選後者。另需保留例外：並非所有DNA\npolymerase都有自己的proofreading；Pol\nα及某些跨損傷聚合酶就不能套用複製型Pol δ／ε的全部特性。</p>\n"
    },
    {
      "id": "topic-7",
      "title": "線狀染色體末端：Telomere為何需要另一套方法",
      "html": "<p>在染色體末端移除最後一段RNA\nprimer後，可能缺乏合適的上游3′-OH讓一般聚合酶補齊到最外端，形成end-replication\nproblem。真核telomere的重複DNA與相關蛋白提供末端保護，避免染色體自然末端被誤認成雙股斷裂，並減少不適當融合。它不是單純一段「沒有用的重複序列」。</p>\n<p>Telomerase是一個ribonucleoprotein，含提供模板的RNA與具reverse\ntranscriptase活性的TERT。它使用自身RNA模板延長染色體G-rich股的3′端DNA，讓互補股之後能由一般引子／DNA合成系統建立。<strong>RNA模板、DNA產物，就是反轉錄活性。</strong>Telomerase不是RNA\npolymerase，也不是拿DNA作模板產RNA。</p>\n<p>人類telomeric repeats常以5′-TTAGGG-3′描述。末端可形成3′\noverhang及受shelterin等保護的構形；G-rich序列也具有形成G-quadruplex的能力。但不要把一種特殊構形當作所有端粒在所有時刻的唯一樣子。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 50%\" />\n<col style=\"width: 50%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>常見說法</th>\n<th>精確理解</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Telomerase可協助延長細胞增殖能力</td>\n<td>可維持端粒，並非單靠它就能保證細胞永不老化</td>\n</tr>\n<tr class=\"even\">\n<td>癌細胞常有端粒維持機制</td>\n<td>不代表所有癌細胞都只靠telomerase；另有ALT等方式</td>\n</tr>\n<tr class=\"odd\">\n<td>一般體細胞telomerase活性低</td>\n<td>不能推論生殖、幹細胞或其他細胞都完全沒有</td>\n</tr>\n<tr class=\"even\">\n<td>端粒酶只處理末端問題</td>\n<td>不是用來修復全基因組所有錯配或UV損傷</td>\n</tr>\n</tbody>\n</table></div>\n"
    },
    {
      "id": "topic-8",
      "title": "DNA損傷與突變：先辨傷口，再選修復工具",
      "html": "<p>DNA\ndamage是化學結構受到傷害，例如氧化、去胺、烷化、二聚體或骨架斷裂；mutation則是序列改變被保留下來。損傷若在複製前正確修復，未必形成永久突變；反之，錯配一旦複製並固定成正常但錯誤的鹼基對，修復系統未必還知道原本資訊。</p>\n<p>Cytosine去胺可形成uracil；DNA中出現U會提示需移除的異常鹼基。5-methylcytosine去胺則形成thymine，產物本身是DNA的正常鹼基，使辨識更具挑戰。去嘌呤可留下AP\nsite，表示糖－磷酸骨架仍在但鹼基缺失；它不同於整個核苷酸已經被切掉的gap。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>損傷線索</th>\n<th>典型處理方向</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>單一U、氧化或某些小型異常鹼基</td>\n<td>BER常見受質</td>\n</tr>\n<tr class=\"even\">\n<td>UV造成pyrimidine photoproduct、bulky adduct</td>\n<td>NER重要受質</td>\n</tr>\n<tr class=\"odd\">\n<td>新合成股錯配、小型insertion/deletion loop</td>\n<td>MMR</td>\n</tr>\n<tr class=\"even\">\n<td>雙股斷裂</td>\n<td>HR或NHEJ等</td>\n</tr>\n<tr class=\"odd\">\n<td>O6-methylguanine</td>\n<td>MGMT可直接轉移移除甲基</td>\n</tr>\n</tbody>\n</table></div>\n<p>直接逆轉修復不必先切下一段DNA。例如MGMT把O6-methylguanine的甲基轉到自身殘基；具photolyase的生物可利用光能修復特定UV\nphotoproduct。<strong>人體不能直接套用細菌photolyase的光復活路徑</strong>，即使相關酵素出現在國考選項也要先看物種。</p>\n<p>Translesion\nsynthesis（TLS）則是讓某些聚合酶跨過損傷，屬損傷容忍／繞過策略，未必已移除原來的傷口；其準確度取決於損傷與聚合酶配對。不要把「複製能繼續」等同「DNA已經被修好」。</p>\n"
    },
    {
      "id": "topic-9",
      "title": "BER與NER：先剪一個鹼基，或切下一小段核苷酸",
      "html": "<figure><div class=\"table-scroll\" tabindex=\"0\"><img src=\"assets/biochemistry/repair-choice.svg\" alt=\"由損傷類型選擇 DNA 修復路徑\" style=\"width:100%;min-width:540px;max-width:780px;height:auto\"></div><figcaption>由損傷類型選擇 DNA 修復路徑。圖中為教學模型；手機可橫向捲動，條件與例外見正文。</figcaption></figure><p>BER典型第一步由DNA\nglycosylase辨認異常鹼基，切斷鹼基與糖之間的N-glycosidic bond，留下AP\nsite。接著AP\nendonuclease等處理糖－磷酸骨架，移除殘留基團、補DNA，最後ligase封口。部分glycosylase兼具lyase活性，實際細節可能不同，但國考基本順序仍是<strong>先辨認並移除鹼基，再處理骨架</strong>。</p>\n<p>因此問「移除DNA中的uracil用哪一途徑」選BER；問「BER第一個典型作用酵素」選DNA\nglycosylase，不要因為endonuclease像剪刀就搶先選它。AP\nendonuclease面對的是已無鹼基的部位，不是負責所有異常鹼基的原始辨認。</p>\n<p>NER則辨認較會扭曲雙股的損傷，以兩側切口移除含損傷的一小段oligonucleotide，再以未受損互補股為模板補上。它沒有先用glycosylase只挖下一個鹼基的標準起始步驟。E.\ncoli常考UvrABC相關系統；人類則有XPC、TFIIH、XPA、XPF–ERCC1、XPG等參與，不能把細菌名稱直接當成人類酵素。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>比較</th>\n<th>BER</th>\n<th>NER</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>典型起始辨認</td>\n<td>特定異常鹼基</td>\n<td>損傷造成的結構異常／轉錄停滯等</td>\n</tr>\n<tr class=\"even\">\n<td>最先移除的單位</td>\n<td>鹼基本身</td>\n<td>含損傷的一段核苷酸</td>\n</tr>\n<tr class=\"odd\">\n<td>常考酵素</td>\n<td>Glycosylase、AP endonuclease</td>\n<td>UvrABC；人類TFIIH及XP相關蛋白</td>\n</tr>\n<tr class=\"even\">\n<td>代表線索</td>\n<td>DNA中的U、某些氧化鹼基</td>\n<td>UV光產物、bulky adduct、cisplatin常見intrastrand adduct</td>\n</tr>\n</tbody>\n</table></div>\n<p>TFIIH同時參與轉錄起始與NER，說明同一複合體可在不同情境協助打開DNA。NER又可分全基因組辨認與transcription-coupled\nrepair；後者由受損模板造成轉錄停滯啟動相關處理，不等於RNA本身被修成DNA。</p>\n"
    },
    {
      "id": "topic-10",
      "title": "Mismatch repair：為何必須知道哪股比較新",
      "html": "<p>若DNA出現G與T錯配，只看這一對無法判斷該把G改成A，還是把T改成C。MMR除了辨認不合適配對，還必須利用複製相關線索辨識應被替換的新股，避免反而把親代正確資訊改掉。</p>\n<p>E. coli的methyl-directed mismatch repair是經典模型：Dam\nmethylase在GATC序列的adenine上甲基化。剛複製後短暫形成半甲基化狀態，舊股較先帶標記，新股尚未完成甲基化；MutS辨錯、MutL協調、MutH等參與新股切口，之後移除含錯誤區段、重新合成及封口。Dam的功能是提供股別辨認線索，不是直接把錯配鹼基剪掉。</p>\n<p><strong>此模型不等於人類MMR也用Dam／MutH或adenine半甲基化判別。</strong>真核MMR利用新股缺口與複製機器等相關線索；MSH2–MSH6等辨認錯配，MLH1–PMS2等參與後續處理。許多細菌也不是完整照搬E.\ncoli機制，題幹寫E. coli時才可直接使用這套口訣。</p>\n<p>MMR失效常使重複序列中的slippage錯誤累積，產生microsatellite\ninstability（MSI）。Lynch\nsyndrome（舊稱HNPCC）的重要機轉涉及MLH1、MSH2、MSH6、PMS2等MMR基因；EPCAM某些缺失也可經影響鄰近MSH2表現造成相關問題。<strong>Lynch配MMR，不是因為名字有癌就一律選任何修復。</strong></p>\n<p>MSI是腫瘤特徵，不等於每個MSI腫瘤都來自遺傳性Lynch；體細胞事件等也可能造成MMR失能。本章著重路徑定位，不把單一腫瘤檢驗結果當成家族遺傳診斷。</p>\n"
    },
    {
      "id": "topic-11",
      "title": "雙股斷裂：有模板時借答案，沒有模板時接回端點",
      "html": "<p>若只斷一股，另一股常能保留完整序列作為修復資訊；兩股同時斷裂則失去連續的局部模板，也可能產生染色體片段錯接。修復必須處理端點、找回適當資訊並避免把不同染色體隨意連在一起。</p>\n<p>Homologous\nrecombination（HR）使用同源序列作模板，體細胞常利用S／G2期可用的sister\nchromatid。端點處理後形成單股尾端，RAD51等協助同源搜尋及strand\ninvasion，再延伸與完成後續步驟。BRCA1／BRCA2等與HR相關；E.\ncoli中的RecA則是理解同源配對的重要細菌範例，不是人類直接使用RecA名稱。</p>\n<p>Nonhomologous end\njoining（NHEJ）則不要求一條長同源模板，可由Ku70／Ku80辨認端點，DNA-PK等協調處理，再由ligase\nIV與相關複合體連接。若端點需切除或補加，可能留下小型插入／缺失；但不是每一次NHEJ都一定有錯，乾淨且相容的端點也可能精確連回。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>比較</th>\n<th>HR</th>\n<th>NHEJ</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>資訊來源</td>\n<td>同源模板，常為姐妹染色分體</td>\n<td>主要處理現有斷端</td>\n</tr>\n<tr class=\"even\">\n<td>細胞週期關聯</td>\n<td>常在S／G2較有利</td>\n<td>多個時期可用，G1尤其重要</td>\n</tr>\n<tr class=\"odd\">\n<td>代表蛋白</td>\n<td>BRCA相關、RAD51</td>\n<td>Ku、DNA-PK、ligase IV等</td>\n</tr>\n<tr class=\"even\">\n<td>風險</td>\n<td>選錯模板或異常重組仍可出問題</td>\n<td>端點加工或錯接可造成indel／重排</td>\n</tr>\n</tbody>\n</table></div>\n<p>Interstrand\ncrosslink把兩股黏在一起，會阻礙分離與複製，處理往往需Fanconi相關協調及多條路徑合作，不能完全縮成一個NER或一個HR箭頭。Cisplatin題常問最常見intrastrand\nadduct的NER移除，不代表所有cisplatin造成的DNA結果都只靠NER完成。</p>\n"
    },
    {
      "id": "topic-12",
      "title": "疾病與整合題：把機轉、物種、時間三個條件一起讀",
      "html": "<p>修復疾病最有用的讀法，是把臨床線索反推損傷型態，再配對缺失路徑。典型xeroderma\npigmentosum（XP）有UV敏感與皮膚癌風險，主要連到NER；但XP\nvariant可由POLH／DNA polymerase\nη缺陷造成跨損傷合成異常，NER本身可正常。因此「所有XP都缺相同NER酵素」過於絕對。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>題幹線索</th>\n<th>優先定位</th>\n<th>不要誤配</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>UV敏感、XP</td>\n<td>典型NER；記住POLH變異型例外</td>\n<td>不一律當BER缺陷</td>\n</tr>\n<tr class=\"even\">\n<td>Lynch／HNPCC、MSI</td>\n<td>MMR相關</td>\n<td>不是NER的同義字</td>\n</tr>\n<tr class=\"odd\">\n<td>BRCA相關修復缺陷</td>\n<td>HR與雙股斷裂處理</td>\n<td>不等於直接剪除單一U</td>\n</tr>\n<tr class=\"even\">\n<td>DNA中出現uracil</td>\n<td>BER及glycosylase</td>\n<td>不因是錯誤鹼基就自動選MMR</td>\n</tr>\n<tr class=\"odd\">\n<td>新股末端剛接錯一個核苷酸</td>\n<td>3′→5′ proofreading</td>\n<td>與5′→3′引子移除分開</td>\n</tr>\n<tr class=\"even\">\n<td>末端複製困難</td>\n<td>Telomerase／telomere維持</td>\n<td>不是用ligase補出缺少的序列</td>\n</tr>\n</tbody>\n</table></div>\n<p>DNA損傷反應還會連到checkpoint：例如ATM／ATR等訊號與p53、p21相關路徑可延緩細胞週期，爭取修復時間；無法適當處理時可引導senescence或apoptosis。這些蛋白不是每一個都直接切DNA的修復酵素。<strong>偵測、暫停、修補與清除受損細胞，是不同層級的工作。</strong></p>\n<p>最後以三問排除選項：第一，題目在問E.\ncoli還是人類？第二，錯誤發生在剛聚合的3′端、複製後錯配，還是外在化學傷害？第三，選項改變的是合成方向、剪除方向，還是複製叉移動方向？把這三層分開後，Pol\nI、Pol III、PCNA、glycosylase、UvrABC與MMR就不再只是各自獨立的名詞。</p>\n"
    }
  ],
  "recalls": [
    [
      "新股往哪個方向延長？",
      "新核苷酸接到既有股的 3′-OH，新股因此沿 5′→3′ 合成，模板沿 3′→5′ 被讀取。"
    ],
    [
      "真核細胞為何將授權和啟動分開？",
      "G1 建立可用的複製起點，在 S 期啟動並限制再次授權，可避免同一段序列在同一週期重複複製。"
    ],
    [
      "怎麼在圖上認出落後股？",
      "找同一個複製叉旁多段新合成的短片段。各段的 3′ 端延長方向背離該叉前進方向。"
    ],
    [
      "滑動夾的功能如何與校對區分？",
      "PCNA 或細菌 β clamp 協助聚合酶留在 DNA 上，增加每次結合可延長的長度；校對要靠移除錯誤核苷酸。"
    ],
    [
      "大腸桿菌怎麼把岡崎片段接成連續 DNA？",
      "Pol I 移除 RNA 引子並補入 DNA，最後的 nick 再由 ligase 封口。"
    ],
    [
      "Proofreading 剪哪一端？",
      "剛接錯的核苷酸位於新股 3′ 端，聚合酶的 3′→5′ 外切活性可移除它。"
    ],
    [
      "端粒酶自帶哪一種模板？",
      "自帶 RNA，利用反轉錄酶活性延長染色體富 G 的 3′ 端。"
    ],
    [
      "鹼基受損何時才可能變成固定突變？",
      "若在複製前未正確修復，錯配經後續複製可能固定為序列改變；損傷本身與已固定的突變不同。"
    ],
    [
      "BER 與 NER 最先認出什麼？",
      "BER 常由 glycosylase 辨認特定異常鹼基，NER 辨認造成雙螺旋變形的損傷並切下一段寡核苷酸。"
    ],
    [
      "MMR 為什麼需要股別資訊？",
      "錯配的兩個鹼基本身不告訴系統原始序列；定位新股才能依親代模板重做。"
    ],
    [
      "什麼情況較有利於同源重組修復？",
      "S、G2 期通常有姐妹染色分體，可用作高相似度修復模板。"
    ],
    [
      "Lynch syndrome 與著色性乾皮症各提示哪種修復問題？",
      "Lynch 提示 MMR 缺陷與微衛星不穩定；典型 XP 提示 NER 缺陷，XP variant 則與跨損傷合成有關。"
    ]
  ],
  "readingIntro": "先在紙上標兩條親代股的 5′ 和 3′。再用三個問題整理題幹：哪種生物、哪個時間點、傷口的化學性質是什麼？",
  "figure": "<p>先依圖表追蹤反應，再將題目線索對應到關鍵步驟。</p>",
  "questions": [
    {
      "title": "01　複製叉向右時，落後股片段可否沿 3′→5′ 延長？",
      "prompt": "<p>複製叉向右時，落後股片段可否沿 3′→5′ 延長？</p>",
      "answer": "<p>不能。沿圖的左右方向與化學合成方向是兩套標記；此例落後股片段向左延長，仍然是 5′→3′。</p>"
    },
    {
      "title": "02　把引子 3′-OH 換成氫，聚合為何停止？",
      "prompt": "<p>把引子 3′-OH 換成氫，聚合為何停止？</p>",
      "answer": "<p>缺少可攻擊下一個 dNTP 的 α 磷酸的羥基，無法形成下一個磷酸二酯鍵。</p>"
    },
    {
      "title": "03　若 DNA 已填滿，但相鄰片段仍有 nick，要補哪種活性？",
      "prompt": "<p>若 DNA 已填滿，但相鄰片段仍有 nick，要補哪種活性？</p>",
      "answer": "<p>需要 DNA ligase 把相鄰 3′-OH 與 5′ 磷酸接起來。若還缺一段核苷酸才需要聚合酶。</p>"
    },
    {
      "title": "04　某突變令聚合酶常脫落，但錯配移除正常，優先看哪個配件？",
      "prompt": "<p>某突變令聚合酶常脫落，但錯配移除正常，優先看哪個配件？</p>",
      "answer": "<p>檢查 sliding clamp 或其裝載。停留時間下降會降低 processivity，與校對有別。</p>"
    },
    {
      "title": "05　為什麼不能直接將大腸桿菌 Pol I 的分工套到人類？",
      "prompt": "<p>為什麼不能直接將大腸桿菌 Pol I 的分工套到人類？</p>",
      "answer": "<p>真核落後股成熟涉及 Pol δ、FEN1 等的協作，細菌以 Pol I 移除引子並補 DNA。</p>"
    },
    {
      "title": "06　端粒酶延長哪一股？另一股怎麼補？",
      "prompt": "<p>端粒酶延長哪一股？另一股怎麼補？</p>",
      "answer": "<p>先依酶內 RNA 模板延長富 G 的 3′ 端，再由一般引子及聚合系統合成互補股。</p>"
    },
    {
      "title": "07　DNA 出現 U，首選哪種修復？",
      "prompt": "<p>DNA 出現 U，首選哪種修復？</p>",
      "answer": "<p>通常由 uracil-DNA glycosylase 辨認並除去 U，繼而經 BER 處理 AP site。</p>"
    },
    {
      "title": "08　同樣是 UV 二聚體，細菌的 UvrABC 與 photolyase 做法相同嗎？",
      "prompt": "<p>同樣是 UV 二聚體，細菌的 UvrABC 與 photolyase 做法相同嗎？</p>",
      "answer": "<p>UvrABC 所屬 NER 切除受損寡核苷酸；photolyase 可利用光能直接逆轉特定損傷。</p>"
    },
    {
      "title": "09　為何 Lynch 腫瘤容易出現微衛星長度變化？",
      "prompt": "<p>為何 Lynch 腫瘤容易出現微衛星長度變化？</p>",
      "answer": "<p>短重複序列複製時容易滑動並產生小型插入或缺失環，MMR 缺陷使這些錯誤得以保留。</p>"
    },
    {
      "title": "10　G1 期發生染色體雙股斷裂，為何常由 NHEJ 處理？",
      "prompt": "<p>G1 期發生染色體雙股斷裂，為何常由 NHEJ 處理？</p>",
      "answer": "<p>這時通常沒有姐妹染色分體可供 HR，NHEJ 可直接處理與接合兩端；若須修整端點，接合處可能遺失序列。</p>"
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
        "title": "引子官能基",
        "topic": "topic-1",
        "summary": "引子提供游離 3′-OH，聚合酶才能加上下一個核苷酸。",
        "questions": [
          {
            "number": 80,
            "text": "80.細胞內DNA複製過程中,為何需要RNA引子(primer)?\nA.提供DNA聚合酶合成反應所需要的3'-端磷酸基\nB.提供DNA聚合酶合成反應所需要的3'-端羥基(OH)\nC.提供DNA聚合酶合成反應所需要的5'-端羥基(OH)\nD.提供DNA聚合酶合成反應所需要的5'-端磷酸基\n",
            "regions": [
              {
                "page": 12,
                "rect": [
                  30.0,
                  343.99,
                  570.0,
                  448.99
                ]
              }
            ],
            "id": "108-2-1-80",
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
            "point": "引子官能基",
            "analysis": "引子提供游離 3′-OH，聚合酶才能加上下一個核苷酸。",
            "trap": "5′ 磷酸與 3′ 端羥基的位置不可互換。"
          }
        ]
      },
      {
        "id": "group-2",
        "title": "細胞週期",
        "topic": "topic-2",
        "summary": "真核細胞核染色體的複製主要發生於 S 期。",
        "questions": [
          {
            "number": 77,
            "text": "77.DNA複製在真核生物細胞週期(cell cycle)的那一個時期(phase)中進行?\n \nA.G1\nB.S\nC.G2\nD.M\n",
            "regions": [
              {
                "page": 12,
                "rect": [
                  30.0,
                  214.86,
                  569.96,
                  318.32
                ]
              }
            ],
            "id": "111-1-1-77",
            "year": 111,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/111/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=111020&c=301&s=11&q=1&verify=step1-20261013-111020-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=111020&y=2022",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/111/1/medicine-1-S.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=S&code=111020&c=301&s=11&q=1&verify=step1-20261013-111020-301-11-S",
            "corrected": false,
            "answerVersion": "S",
            "originalAnswers": [
              "B"
            ],
            "point": "細胞週期",
            "analysis": "真核細胞核染色體的複製主要發生於 S 期。",
            "trap": "G1 的複製授權屬於準備階段。"
          }
        ]
      },
      {
        "id": "group-3",
        "title": "岡崎片段",
        "topic": "topic-3",
        "summary": "落後股需分段合成，因此岡崎片段出現在 DNA 複製。",
        "questions": [
          {
            "number": 39,
            "text": "39 \n岡崎氏片段(Okazaki fragments)會在下列何種生物過程中出現? \nA轉錄作用(transcription) \nB轉譯作用(translation) \nCDNA 重組(DNA recombination) \nDDNA 複製(DNA replication) \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  81.48,
                  570.0,
                  121.98
                ]
              }
            ],
            "id": "98-2-2-39",
            "year": 98,
            "session": 2,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/98/2/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=098140&c=103&s=c021&q=1&verify=step1-20261013-098140-103-c021-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=098140&y=2009",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/98/2/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=098140&c=103&s=c021&q=1&verify=step1-20261013-098140-103-c021-M",
            "corrected": true,
            "answerVersion": "M",
            "point": "岡崎片段",
            "analysis": "落後股需分段合成，因此岡崎片段出現在 DNA 複製。",
            "trap": "每段短暫含 RNA 引子，並不表示這是轉錄。"
          }
        ]
      },
      {
        "id": "group-4",
        "title": "主要複製酶",
        "topic": "topic-4",
        "summary": "大腸桿菌染色體主要由 Pol III 延長。",
        "questions": [
          {
            "number": 81,
            "text": "81.大腸桿菌裡染色體DNA複製最主要的聚合酶為:\n \nA.DNA聚合酶 I\nB.DNA聚合酶 II\nC.DNA聚合酶 III\nD.DNA聚合酶 IV\n",
            "regions": [
              {
                "page": 12,
                "rect": [
                  30.0,
                  532.63,
                  569.96,
                  636.1
                ]
              }
            ],
            "id": "110-2-1-81",
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
            "point": "主要複製酶",
            "analysis": "大腸桿菌染色體主要由 Pol III 延長。",
            "trap": "Pol I 雖也能合成 DNA，重點職務是引子移除及補缺。"
          }
        ]
      },
      {
        "id": "group-5",
        "title": "滑動夾功能",
        "topic": "topic-4",
        "summary": "PCNA 與 β clamp 都增加聚合酶的 processivity，使一次結合能複製更長的 DNA。",
        "questions": [
          {
            "number": 82,
            "text": "82.真核細胞的DNA複製蛋白質PCNA(proliferating cell nuclear antigen)與大腸桿菌DNA聚合酶III的β次單元(β\nsubunit)共通的特性為:\n \nA.參與DNA校對(proofreading)\nB.增加DNA聚合酶酵素活性\nC.增加DNA聚合酶的持續合成能力(processivity)\nD.帶有3’→5’  DNA水解酵素活性\n",
            "regions": [
              {
                "page": 15,
                "rect": [
                  30.0,
                  504.55,
                  569.96,
                  652.35
                ]
              }
            ],
            "id": "111-2-1-82",
            "year": 111,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/111/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=111100&c=301&s=11&q=1&verify=step1-20261013-111100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=111100&y=2022",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/111/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=111100&c=301&s=11&q=1&verify=step1-20261013-111100-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "C"
            ],
            "point": "滑動夾功能",
            "analysis": "PCNA 與 β clamp 都增加聚合酶的 processivity，使一次結合能複製更長的 DNA。",
            "trap": "兩者都沒有負責切除錯配的外切酶活性。"
          }
        ]
      },
      {
        "id": "group-6",
        "title": "移除引子",
        "topic": "topic-5",
        "summary": "大腸桿菌 Pol I 能移除前方 RNA 引子並填入 DNA。",
        "questions": [
          {
            "number": 85,
            "text": "85.在大腸桿菌DNA 複製過程中,下列何種酶的功能是去除RNA 引子,並用DNA 替換? \nA.解旋酶(helicase) \nB.引子酶(primase) \nC.DNA 連接酶(DNA ligase) \nD.DNA 聚合酶I(DNA polymerase I) \n",
            "regions": [
              {
                "page": 16,
                "rect": [
                  30.0,
                  31.55,
                  587.0,
                  141.59
                ]
              }
            ],
            "id": "115-1-1-85",
            "year": 115,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/115/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=115020&c=301&s=0101&q=1&verify=step1-20261013-115020-301-0101-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=115020&y=2026",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/115/1/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=115020&c=301&s=0101&q=1&verify=step1-20261013-115020-301-0101-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "D"
            ],
            "point": "移除引子",
            "analysis": "大腸桿菌 Pol I 能移除前方 RNA 引子並填入 DNA。",
            "trap": "Ligase 僅封閉最後的 nick。"
          }
        ]
      },
      {
        "id": "group-7",
        "title": "校對方向",
        "topic": "topic-6",
        "summary": "3′→5′ 外切酶可從新股末端去掉錯配，讓聚合酶重新延長。",
        "questions": [
          {
            "number": 82,
            "text": "82.在DNA複製中,下列何酵素功能主要是用以增加DNA複製之準確度?\nA.單股DNA結合蛋白\nB.3'→5'外切核酸酶\nC.DNA連接酶\nD.DNA解螺旋酶\n",
            "regions": [
              {
                "page": 12,
                "rect": [
                  30.0,
                  469.99,
                  570.0,
                  574.99
                ]
              }
            ],
            "id": "109-1-1-82",
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
            "point": "校對方向",
            "analysis": "3′→5′ 外切酶可從新股末端去掉錯配，讓聚合酶重新延長。",
            "trap": "不要把校對方向當成合成方向。"
          }
        ]
      },
      {
        "id": "group-8",
        "title": "反轉錄活性",
        "topic": "topic-7",
        "summary": "Telomerase 可依其內建 RNA 模板合成 DNA，屬反轉錄酶。",
        "questions": [
          {
            "number": 87,
            "text": "87.下列何者具有反轉錄酶(reverse transcriptase)之活性?\n \nA.telomerase\nB.hammerhead ribozyme\nC.RNase P\nD.RNA polymerase III\n",
            "regions": [
              {
                "page": 16,
                "rect": [
                  30.0,
                  156.89,
                  569.96,
                  284.01
                ]
              }
            ],
            "id": "113-2-1-87",
            "year": 113,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/113/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=113090&c=301&s=11&q=1&verify=step1-20261013-113090-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=113090&y=2024",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/113/2/medicine-1-S.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=S&code=113090&c=301&s=11&q=1&verify=step1-20261013-113090-301-11-S",
            "corrected": false,
            "answerVersion": "S",
            "originalAnswers": [
              "A"
            ],
            "point": "反轉錄活性",
            "analysis": "Telomerase 可依其內建 RNA 模板合成 DNA，屬反轉錄酶。",
            "trap": "帶有 RNA 成分不等於 RNA 就是進行聚合的催化中心。"
          }
        ]
      },
      {
        "id": "group-9",
        "title": "異常鹼基",
        "topic": "topic-9",
        "summary": "錯置的 uracil 可先被 glycosylase 移除，再由 BER 完成修補。",
        "questions": [
          {
            "number": 86,
            "text": "86.移除DNA 上錯誤的脲嘧啶(uracil)鹼基,主要由何種DNA 修復機制來執行?  \nA.直接修復機制(direct repair) \nB.鹼基切除修復(base excision repair) \nC.鹼基錯誤配對修復(mismatch repair) \nD.核苷酸切除修復(nucleotide-excision repair) \n",
            "regions": [
              {
                "page": 16,
                "rect": [
                  30.0,
                  141.59,
                  587.0,
                  251.51
                ]
              }
            ],
            "id": "115-1-1-86",
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
            "point": "異常鹼基",
            "analysis": "錯置的 uracil 可先被 glycosylase 移除，再由 BER 完成修補。",
            "trap": "MMR 優先處理複製後錯配，不能單靠題幹的「錯誤」一詞作答。"
          }
        ]
      },
      {
        "id": "group-10",
        "title": "Lynch syndrome",
        "topic": "topic-10",
        "summary": "HNPCC 的典型分子機轉為 mismatch repair 缺陷。",
        "questions": [
          {
            "number": 82,
            "text": "82.遺傳性非息肉症大腸直腸癌(hereditary nonpolyposis colon cancer, HNPCC)病患,主要是在何種DNA 修復功能\n上產生缺失? \nA.核苷酸切除修復(nucleotide excision repair) \nB.鹼基切除修復(base excision repair) \nC.重組修復(recombinational repair) \nD.核酸錯誤配對修復(mismatch repair) \n",
            "regions": [
              {
                "page": 15,
                "rect": [
                  30.0,
                  501.55,
                  570.0,
                  651.55
                ]
              }
            ],
            "id": "112-2-1-82",
            "year": 112,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/112/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=112100&c=301&s=11&q=1&verify=step1-20261013-112100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=112100&y=2023",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/112/2/medicine-1-S.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=S&code=112100&c=301&s=11&q=1&verify=step1-20261013-112100-301-11-S",
            "corrected": false,
            "answerVersion": "S",
            "originalAnswers": [
              "D"
            ],
            "point": "Lynch syndrome",
            "analysis": "HNPCC 的典型分子機轉為 mismatch repair 缺陷。",
            "trap": "辨認微衛星不穩定這條線索，避免與 UV 損傷的 NER 混淆。"
          }
        ]
      }
    ]
  }
});
