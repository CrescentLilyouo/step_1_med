# 第23章　DNA複製與修復：方向、機器分工與錯誤校正

## 先定義方向：模板怎麼讀，新股怎麼長

DNA複製的任務，是把既有序列資訊交給兩個子代分子。半保留（semiconservative）表示每個子代雙股DNA都含一股親代與一股新合成股；不是一個子代全舊、另一個全新，也不是每一股都由舊、新小片段交錯構成。互補配對提供資訊，但真正連成新鏈的是糖－磷酸骨架的共價鍵。

一般DNA polymerase讓新股末端的**3′-OH攻擊進入dNTP的α磷酸**，形成phosphodiester bond並釋出pyrophosphate。原來dNTP的β與γ磷酸離開，α磷酸保留在DNA骨架中。這也是放射性標記題要選α標記dNTP的理由；不是把dNTP的三個磷酸全部接入DNA。

新股因此只能在3′端增加核苷酸，整體方向為5′→3′；聚合酶沿模板前進的方向則是3′→5′。題幹問「新股合成方向」與「讀模板方向」時必須分開。兩股反向平行並不代表其中一股改成3′→5′合成。

| 名詞 | 真正描述的內容 | 容易混淆 |
|---|---|---|
| 5′→3′合成 | 新DNA由5′端向3′端延伸 | 不等於聚合酶沿模板5′→3′讀取 |
| 3′-OH | 既有primer／新股的可延伸末端 | 不是3′-phosphate或5′-OH |
| dNTP | 提供核苷酸及聚合所需化學能 | 不是把ATP當成每一步獨立必需的燃料 |
| Mg²⁺ | 聚合酶催化所需二價金屬之一 | 不提供序列資訊 |

例如模板寫成3′-A C G T-5′，對應新股為5′-T G C A-3′。如果題目把模板以5′→3′寫出，求新股通常需先做互補，再反轉順序成標準5′→3′表示；只寫互補字母、忘了方向，是分子題最常見的失分方式。

## 從哪裡開始：起始點、雙向複製與一次性授權

E. coli的典型環狀染色體由oriC啟動，通常形成兩個向相反方向移動的replication forks。真核線狀染色體長得多，會由多個起始點建立replication bubbles，再讓相鄰複製區域相遇完成。**一個起始點可以產生兩個複製叉；起始點數不等於複製叉數。**不能把E. coli的「一個oriC」推成所有原核生物或所有DNA分子都只有一個起始點。

DnaA參與E. coli起始辨認，使鄰近較易打開的A-T-rich區域局部解開。真核細胞以origin recognition complex及其他起始因子建立複製準備；並不是把E. coli的DnaA與oriC名稱直接搬到人類染色體。

真核核DNA的整體複製主要在S phase進行。細胞必須同時做到「全部複製一次」與「不要重複複製某一段」，所以起始前先授權、啟動後限制再次授權。G1階段ORC、Cdc6、Cdt1等協助裝載MCM helicase相關複合體；進入S期後，CDK與DDK等訊號使授權的起始點啟動，並限制重複裝載。細節很多，但考試核心是**授權與啟動分開，以防re-replication**。

不需要把所有起始點理解為完全同時發動；染色質環境與replication timing會影響不同區域的時序。也不能把「核DNA主要在S期複製」變成「其他期完全沒有任何DNA合成」：DNA repair synthesis與粒線體DNA相關活動的範圍不同。

## 複製叉：兩股都5′→3′，為何一股要分段

假設複製叉向右前進。能讓聚合酶沿模板朝右讀取3′→5′的一側，新股便可朝複製叉方向持續延伸，稱leading strand。另一側模板方向相反，聚合酶仍不能違反5′→3′合成原則，只能等待新模板暴露後反覆起始，形成一段段Okazaki fragments，再接成完整lagging strand。

Leading與lagging是**相對某一個複製叉**的描述，不是整條親代股永久貼上的標籤。同一replication bubble的左右兩端，某股在一端當leading的模板，在另一端可以是lagging的模板。判圖時先畫出複製叉移動箭頭，再標模板5′／3′，最後才決定哪邊連續、哪邊分段。

| 比較 | Leading strand | Lagging strand |
|---|---|---|
| 新股聚合方向 | 5′→3′ | 5′→3′ |
| 相對複製叉移動 | 朝前進方向持續延伸 | 每段朝與叉前進相反方向延伸 |
| 起始需求 | 仍需要primer | 反覆需要新primer |
| 中間產物 | 典型較連續的新股 | Okazaki fragments |
| 後續成熟 | 仍需處理相關起始結構 | 反覆移除primer、補DNA及封nick |

E. coli與真核的片段長度不同：常用概念為細菌較長、真核約百餘至數百核苷酸，與真核染色質環境相關。本章重點不是死背一個固定長度，而是知道它們都由primer開始且都5′→3′延伸。Okazaki fragment不是先做一條完整新股再被endonuclease切碎，也不是核糖體中的RNA片段。

## 複製機器分工：打開、穩住、解除纏繞、延長

Helicase把雙股DNA局部解開，讓單股模板能被讀取；SSB或真核RPA則結合已暴露的單股，減少重新配對及不適當二級結構。**Helicase負責打開，SSB／RPA負責穩住打開後的狀態。**不能因SSB會結合單股，就說它是切開雙股的酵素。

當複製叉不斷打開雙股，前方DNA會累積扭轉壓力。Topoisomerase透過暫時切斷與重新接合骨架，改變DNA的拓樸狀態；helicase則不以切斷phosphodiester骨架來完成解旋。Type I典型暫切一股，type II暫切兩股並讓另一段DNA通過；ATP需求與具體功能要看類型，不能一律說所有topoisomerase都相同。細菌DNA gyrase是type II成員，不能把所有人類type II都叫gyrase。

| 任務 | E. coli典型名稱 | 真核主要對應 |
|---|---|---|
| 解開DNA | DnaB helicase | CMG helicase（含MCM） |
| 穩定單股 | SSB | RPA |
| 產生初始引子 | Primase／DnaG | Pol α–primase複合體 |
| 主體延伸 | Pol III | Pol ε偏leading、Pol δ偏lagging |
| 提高processivity | β sliding clamp | PCNA |
| 裝上clamp | Clamp loader | RFC |

這張表是典型分工模型，不是每種聚合酶在任何條件下都只做一件事。例如Pol δ可參與起始與修復；Pol ε／δ的正常主分工不能推成絕無任何交叉。Pol γ則要想到粒線體DNA；Pol β主要連到BER等修復，不是核染色體大規模複製的主力。

## 引子與片段成熟：起始、填空、封口是三種工作

一般複製型DNA polymerase不能從完全沒有引子的模板上自行開始，因為需要可供延伸的3′-OH。Primase可以從頭合成短RNA，提供起始末端。真核Pol α–primase複合體先由primase做RNA，再由Pol α延長一小段DNA，形成RNA–DNA起始片段，之後交給主要延伸聚合酶。

因此「細胞內染色體複製的初始primer是RNA」與「DNA polymerase也能延伸DNA primer」並不矛盾。PCR提供的是人工DNA寡核苷酸primer；細胞複製則藉primase產生RNA起點。題目若問初始primer的來源，選RNA；若問一般聚合酶能延伸哪些primer，不能排除DNA。

E. coli的Pol I具有5′→3′ polymerase、3′→5′ proofreading exonuclease及5′→3′ exonuclease三類重要活性。後者可參與移除前方RNA primer，並用DNA替換；Pol III才是染色體複製主要延伸者。Klenow fragment保留polymerase與3′→5′外切活性，缺少Pol I的5′→3′外切部分，是常見實驗題。

真核Okazaki片段成熟由Pol δ、RNase H、FEN1等共同完成相關置換與引子移除，最後由DNA ligase封閉剩下的nick。Ligase是在相鄰3′-OH與5′-phosphate之間建立骨架連接；若中間還少了一串核苷酸，不能期待ligase自己合成那段DNA。

**區分gap與nick：**gap是缺核苷酸，需要polymerase填補；nick是相鄰核苷酸已就位但骨架尚未連上，需要ligase封口。DNA聚合所需能量來自dNTP反應，不代表整套複製完全不需要ATP；helicase、clamp loading及許多連接／調控反應仍耗能。

## 準確度的三層防線：選對、回頭剪、事後修

第一層是聚合酶活性中心對正確鹼基配對及幾何形狀的選擇；第二層是proofreading，把剛接錯的新股3′端核苷酸移到外切活性位置切除，再恢復延伸；第三層是複製後的mismatch repair，處理漏網的錯配及小型插入／缺失loop。這些不是同一個反應的不同名字。

Proofreading的典型方向為**3′→5′ exonuclease**，因為錯誤通常位於正在長大的新股3′端。剪掉末端錯字不代表新股開始3′→5′聚合；剪除與合成是不同活性。也不要把Pol I的5′→3′ primer removal拿來回答proofreading。

| 能力 | 問的是什麼 | 典型蛋白／功能 |
|---|---|---|
| Polymerization rate | 每秒加多少核苷酸 | 催化速度 |
| Processivity | 一次結合後、解離前能連續加多少 | PCNA／β clamp提高穩定附著 |
| Proofreading | 加錯後能否切掉末端錯誤 | 3′→5′外切活性 |
| Mismatch repair | 漏網錯配是否事後被辨識與替換 | MSH／MLH等系統 |

PCNA本身不是一把3′→5′剪刀；它提高聚合酶持續工作能力，也作為多種蛋白的互動平台。考題若選項同時有「增加準確度」與「增加processivity」，看到PCNA／β clamp應先選後者。另需保留例外：並非所有DNA polymerase都有自己的proofreading；Pol α及某些跨損傷聚合酶就不能套用複製型Pol δ／ε的全部特性。

## 線狀染色體末端：Telomere為何需要另一套方法

在染色體末端移除最後一段RNA primer後，可能缺乏合適的上游3′-OH讓一般聚合酶補齊到最外端，形成end-replication problem。真核telomere的重複DNA與相關蛋白提供末端保護，避免染色體自然末端被誤認成雙股斷裂，並減少不適當融合。它不是單純一段「沒有用的重複序列」。

Telomerase是一個ribonucleoprotein，含提供模板的RNA與具reverse transcriptase活性的TERT。它使用自身RNA模板延長染色體G-rich股的3′端DNA，讓互補股之後能由一般引子／DNA合成系統建立。**RNA模板、DNA產物，就是反轉錄活性。**Telomerase不是RNA polymerase，也不是拿DNA作模板產RNA。

人類telomeric repeats常以5′-TTAGGG-3′描述。末端可形成3′ overhang及受shelterin等保護的構形；G-rich序列也具有形成G-quadruplex的能力。但不要把一種特殊構形當作所有端粒在所有時刻的唯一樣子。

| 常見說法 | 精確理解 |
|---|---|
| Telomerase可協助延長細胞增殖能力 | 可維持端粒，並非單靠它就能保證細胞永不老化 |
| 癌細胞常有端粒維持機制 | 不代表所有癌細胞都只靠telomerase；另有ALT等方式 |
| 一般體細胞telomerase活性低 | 不能推論生殖、幹細胞或其他細胞都完全沒有 |
| 端粒酶只處理末端問題 | 不是用來修復全基因組所有錯配或UV損傷 |

## DNA損傷與突變：先辨傷口，再選修復工具

DNA damage是化學結構受到傷害，例如氧化、去胺、烷化、二聚體或骨架斷裂；mutation則是序列改變被保留下來。損傷若在複製前正確修復，未必形成永久突變；反之，錯配一旦複製並固定成正常但錯誤的鹼基對，修復系統未必還知道原本資訊。

Cytosine去胺可形成uracil；DNA中出現U會提示需移除的異常鹼基。5-methylcytosine去胺則形成thymine，產物本身是DNA的正常鹼基，使辨識更具挑戰。去嘌呤可留下AP site，表示糖－磷酸骨架仍在但鹼基缺失；它不同於整個核苷酸已經被切掉的gap。

| 損傷線索 | 典型處理方向 |
|---|---|
| 單一U、氧化或某些小型異常鹼基 | BER常見受質 |
| UV造成pyrimidine photoproduct、bulky adduct | NER重要受質 |
| 新合成股錯配、小型insertion/deletion loop | MMR |
| 雙股斷裂 | HR或NHEJ等 |
| O6-methylguanine | MGMT可直接轉移移除甲基 |

直接逆轉修復不必先切下一段DNA。例如MGMT把O6-methylguanine的甲基轉到自身殘基；具photolyase的生物可利用光能修復特定UV photoproduct。**人體不能直接套用細菌photolyase的光復活路徑**，即使相關酵素出現在國考選項也要先看物種。

Translesion synthesis（TLS）則是讓某些聚合酶跨過損傷，屬損傷容忍／繞過策略，未必已移除原來的傷口；其準確度取決於損傷與聚合酶配對。不要把「複製能繼續」等同「DNA已經被修好」。

## BER與NER：先剪一個鹼基，或切下一小段核苷酸

BER典型第一步由DNA glycosylase辨認異常鹼基，切斷鹼基與糖之間的N-glycosidic bond，留下AP site。接著AP endonuclease等處理糖－磷酸骨架，移除殘留基團、補DNA，最後ligase封口。部分glycosylase兼具lyase活性，實際細節可能不同，但國考基本順序仍是**先辨認並移除鹼基，再處理骨架**。

因此問「移除DNA中的uracil用哪一途徑」選BER；問「BER第一個典型作用酵素」選DNA glycosylase，不要因為endonuclease像剪刀就搶先選它。AP endonuclease面對的是已無鹼基的部位，不是負責所有異常鹼基的原始辨認。

NER則辨認較會扭曲雙股的損傷，以兩側切口移除含損傷的一小段oligonucleotide，再以未受損互補股為模板補上。它沒有先用glycosylase只挖下一個鹼基的標準起始步驟。E. coli常考UvrABC相關系統；人類則有XPC、TFIIH、XPA、XPF–ERCC1、XPG等參與，不能把細菌名稱直接當成人類酵素。

| 比較 | BER | NER |
|---|---|---|
| 典型起始辨認 | 特定異常鹼基 | 損傷造成的結構異常／轉錄停滯等 |
| 最先移除的單位 | 鹼基本身 | 含損傷的一段核苷酸 |
| 常考酵素 | Glycosylase、AP endonuclease | UvrABC；人類TFIIH及XP相關蛋白 |
| 代表線索 | DNA中的U、某些氧化鹼基 | UV光產物、bulky adduct、cisplatin常見intrastrand adduct |

TFIIH同時參與轉錄起始與NER，說明同一複合體可在不同情境協助打開DNA。NER又可分全基因組辨認與transcription-coupled repair；後者由受損模板造成轉錄停滯啟動相關處理，不等於RNA本身被修成DNA。

## Mismatch repair：為何必須知道哪股比較新

若DNA出現G與T錯配，只看這一對無法判斷該把G改成A，還是把T改成C。MMR除了辨認不合適配對，還必須利用複製相關線索辨識應被替換的新股，避免反而把親代正確資訊改掉。

E. coli的methyl-directed mismatch repair是經典模型：Dam methylase在GATC序列的adenine上甲基化。剛複製後短暫形成半甲基化狀態，舊股較先帶標記，新股尚未完成甲基化；MutS辨錯、MutL協調、MutH等參與新股切口，之後移除含錯誤區段、重新合成及封口。Dam的功能是提供股別辨認線索，不是直接把錯配鹼基剪掉。

**此模型不等於人類MMR也用Dam／MutH或adenine半甲基化判別。**真核MMR利用新股缺口與複製機器等相關線索；MSH2–MSH6等辨認錯配，MLH1–PMS2等參與後續處理。許多細菌也不是完整照搬E. coli機制，題幹寫E. coli時才可直接使用這套口訣。

MMR失效常使重複序列中的slippage錯誤累積，產生microsatellite instability（MSI）。Lynch syndrome（舊稱HNPCC）的重要機轉涉及MLH1、MSH2、MSH6、PMS2等MMR基因；EPCAM某些缺失也可經影響鄰近MSH2表現造成相關問題。**Lynch配MMR，不是因為名字有癌就一律選任何修復。**

MSI是腫瘤特徵，不等於每個MSI腫瘤都來自遺傳性Lynch；體細胞事件等也可能造成MMR失能。本章著重路徑定位，不把單一腫瘤檢驗結果當成家族遺傳診斷。

## 雙股斷裂：有模板時借答案，沒有模板時接回端點

若只斷一股，另一股常能保留完整序列作為修復資訊；兩股同時斷裂則失去連續的局部模板，也可能產生染色體片段錯接。修復必須處理端點、找回適當資訊並避免把不同染色體隨意連在一起。

Homologous recombination（HR）使用同源序列作模板，體細胞常利用S／G2期可用的sister chromatid。端點處理後形成單股尾端，RAD51等協助同源搜尋及strand invasion，再延伸與完成後續步驟。BRCA1／BRCA2等與HR相關；E. coli中的RecA則是理解同源配對的重要細菌範例，不是人類直接使用RecA名稱。

Nonhomologous end joining（NHEJ）則不要求一條長同源模板，可由Ku70／Ku80辨認端點，DNA-PK等協調處理，再由ligase IV與相關複合體連接。若端點需切除或補加，可能留下小型插入／缺失；但不是每一次NHEJ都一定有錯，乾淨且相容的端點也可能精確連回。

| 比較 | HR | NHEJ |
|---|---|---|
| 資訊來源 | 同源模板，常為姐妹染色分體 | 主要處理現有斷端 |
| 細胞週期關聯 | 常在S／G2較有利 | 多個時期可用，G1尤其重要 |
| 代表蛋白 | BRCA相關、RAD51 | Ku、DNA-PK、ligase IV等 |
| 風險 | 選錯模板或異常重組仍可出問題 | 端點加工或錯接可造成indel／重排 |

Interstrand crosslink把兩股黏在一起，會阻礙分離與複製，處理往往需Fanconi相關協調及多條路徑合作，不能完全縮成一個NER或一個HR箭頭。Cisplatin題常問最常見intrastrand adduct的NER移除，不代表所有cisplatin造成的DNA結果都只靠NER完成。

## 疾病與整合題：把機轉、物種、時間三個條件一起讀

修復疾病最有用的讀法，是把臨床線索反推損傷型態，再配對缺失路徑。典型xeroderma pigmentosum（XP）有UV敏感與皮膚癌風險，主要連到NER；但XP variant可由POLH／DNA polymerase η缺陷造成跨損傷合成異常，NER本身可正常。因此「所有XP都缺相同NER酵素」過於絕對。

| 題幹線索 | 優先定位 | 不要誤配 |
|---|---|---|
| UV敏感、XP | 典型NER；記住POLH變異型例外 | 不一律當BER缺陷 |
| Lynch／HNPCC、MSI | MMR相關 | 不是NER的同義字 |
| BRCA相關修復缺陷 | HR與雙股斷裂處理 | 不等於直接剪除單一U |
| DNA中出現uracil | BER及glycosylase | 不因是錯誤鹼基就自動選MMR |
| 新股末端剛接錯一個核苷酸 | 3′→5′ proofreading | 與5′→3′引子移除分開 |
| 末端複製困難 | Telomerase／telomere維持 | 不是用ligase補出缺少的序列 |

DNA損傷反應還會連到checkpoint：例如ATM／ATR等訊號與p53、p21相關路徑可延緩細胞週期，爭取修復時間；無法適當處理時可引導senescence或apoptosis。這些蛋白不是每一個都直接切DNA的修復酵素。**偵測、暫停、修補與清除受損細胞，是不同層級的工作。**

最後以三問排除選項：第一，題目在問E. coli還是人類？第二，錯誤發生在剛聚合的3′端、複製後錯配，還是外在化學傷害？第三，選項改變的是合成方向、剪除方向，還是複製叉移動方向？把這三層分開後，Pol I、Pol III、PCNA、glycosylase、UvrABC與MMR就不再只是各自獨立的名詞。
