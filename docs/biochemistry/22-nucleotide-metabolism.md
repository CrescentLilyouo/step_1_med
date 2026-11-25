# 第22章　核苷酸代謝：從PRPP到DNA原料與代謝疾病

## 先分清楚名詞：鹼基、核苷與核苷酸不是同一層

核苷酸不只拿來做DNA。ATP參與能量轉移，GTP參與訊息及蛋白質合成，UDP-glucose搬運糖，CDP相關分子參與磷脂合成，NAD及CoA也含有核苷酸相關結構。因此核苷酸的供應必須配合細胞生長、修復及代謝需求，而不是只有分裂中的細胞才需要。

**Base＋糖＝nucleoside；nucleoside再接磷酸＝nucleotide。**例如adenine是鹼基，adenosine是核苷，AMP才是核苷酸。Inosine的鹼基為hypoxanthine，IMP是inosine monophosphate，不能因名字有inosine就把IMP當成沒有磷酸的分子。

| 分類 | 代表成員 | 結構辨認 |
|---|---|---|
| Purine，嘌呤 | Adenine、guanine；另有hypoxanthine等 | 雙環融合骨架 |
| Pyrimidine，嘧啶 | Cytosine、uracil、thymine | 單個六員環 |
| Ribonucleotide | AMP、GMP、UMP、CMP等 | 糖的2′位置有OH |
| Deoxyribonucleotide | dAMP、dGMP、dCMP、dTMP等 | 糖的2′位置是H，而非OH |

Thymine可以視為5-methyluracil：差別在鹼基上的甲基，不在糖是否去氧。Thymine與thymidine也不是同一名詞。典型RNA主要使用A、G、C、U，但某些RNA有修飾核苷，不能把「一般RNA不用thymine作四種主要鹼基之一」擴張成任何RNA絕不可能有核糖胸苷。

另有三種鍵常被混用：鹼基與糖是N-glycosidic bond；核酸同股骨架以phosphodiester bond連接；ATP多個磷酸之間有phosphoanhydride bond。Depurination切的是鹼基與糖之間的糖苷鍵，不等於直接切斷DNA整條磷酸骨架。之後DNA結構與修復章節會再使用這個區分。

## PRPP與IMP總圖：先做糖底座，再把嘌呤環逐步搭上去

Ribose-5-phosphate可由PPP供應。PRPP synthetase將ATP的pyrophosphoryl部分轉到ribose-5-P的1號碳，形成5-phosphoribosyl-1-pyrophosphate（PRPP），ATP變成AMP。**PRPP是活化的核糖磷酸供體，不是已完成的嘌呤鹼基。**

嘌呤de novo合成是在這個核糖底座上逐步建立環。重要承諾步驟由glutamine-PRPP amidotransferase將glutamine的醯胺氮導入，產生5-phosphoribosylamine。接著再陸續接上glycine、glutamine、aspartate、CO₂及一碳單位，最後形成IMP，再由IMP分支成AMP或GMP。

可以把流程拆成三層：**Ribose-5-P→PRPP是準備活化底座；PRPP→phosphoribosylamine是嘌呤承諾步驟；IMP→AMP／GMP是兩支成品分流。**如果題目問第一個完整嘌呤核苷酸共同產物，答案是IMP，而不是ATP、adenine或PRPP。

| 分子／步驟 | 角色 | 常見錯配 |
|---|---|---|
| Ribose-5-P | 提供五碳糖 | 與deoxyribose或ribulose名稱混用 |
| PRPP | 活化核糖供體，亦參與salvage及嘧啶合成 | 誤認僅在purine de novo使用 |
| Glutamine-PRPP amidotransferase | 導入氮、進入嘌呤合成 | 與製造PRPP的synthetase混淆 |
| IMP | AMP與GMP共同前驅物 | 誤以為先做AMP再全部轉GMP |

De novo很耗能，salvage回收既有鹼基則可省去重新搭環的許多步驟。PRPP出現在兩條路，所以「看到PRPP就一定是de novo」不成立。另一個稍後要比較的差異是：嘧啶先做環，再接PRPP；嘌呤則在糖底座上搭環，順序剛好相反。

## 嘌呤環的原子來源：用分工記，不必硬背整張結構

Purine環有九個位置，來源並非全部是同一個胺基酸。Glycine提供一整塊三原子，glutamine兩次提供醯胺氮，aspartate留下氮，一碳代謝補兩個碳，CO₂再供一碳。把「誰提供碳，誰提供氮」分開，就能看懂為何葉酸或glutamine相關反應被抑制時，嘌呤供應會下降。

| 原子位置 | 主要來源 | 好記的方法 |
|---|---|---|
| N1 | Aspartate | Asp留下氮，其他碳可離開 |
| C2、C8 | N10-formyl-THF的一碳單位 | 兩個formyl碳，接到兩個位置 |
| N3、N9 | Glutamine醯胺氮 | Gln兩次送氮 |
| C4、C5、N7 | Glycine | 一次帶進二碳一氮 |
| C6 | CO₂／HCO₃⁻相關碳源 | 其餘的一個碳 |

此表描述人類典型de novo反應。某些教材圖會將相通的一碳池形式一起表示，做題時要落到實際formyltransferase使用的N10-formyl-THF，不要把N5-methyl-THF或SAM直接代替。上一章SAM負責許多甲基轉移；本章嘌呤C2、C8需要的是formyl層級的一碳單位。

Aspartate還參與尿素第二個氮的供應，以及嘧啶環的大部分骨架。相同胺基酸在不同路徑留下的部分不完全一樣：在嘌呤合成時主要留下特定氮，在嘧啶合成時則留下更多環原子。這就是國考問「同時參與尿素、嘌呤、嘧啶合成」時，Asp比只背「氮都來自glutamine」更能解題的原因。

不要把一個碳源寫成所有細胞均必須從某個飲食成分直接取得。細胞可由不同代謝路徑補充glycine、glutamine及一碳池；考點是化學反應的直接原子捐贈者，而不是所有上游營養來源。

## IMP分成AMP與GMP：供氮與耗能要成對記

IMP的鹼基為hypoxanthine，從這個共同骨架分兩路。AMP支路先由adenylosuccinate synthetase加入aspartate並使用GTP，形成adenylosuccinate，再由lyase釋出fumarate，留下胺基形成AMP。Asp留下氮，碳骨架以fumarate形式離開，與前面尿素循環的某些反應策略很相似。

GMP支路先由IMP dehydrogenase將IMP氧化成XMP，使用NAD⁺並產生NADH；再由GMP synthetase以glutamine供氮、使用ATP，把XMP轉成GMP。這裡不能把「glutamine供氮」與「NADPH供還原力」混成同一件事，實際上前一步是氧化反應。

| 分支 | 先經中間物 | 主要氮來源 | 分支耗能辨認 |
|---|---|---|---|
| IMP→AMP | Adenylosuccinate | Aspartate | 使用GTP |
| IMP→GMP | XMP | Glutamine | 使用ATP |

最實用的記法是「做A用G，做G用A」。這種交叉使用有助於兩類核苷酸平衡，但不要理解成兩支必須在每個瞬間產量完全相等。AMP對自己的支路、GMP對自己的支路可提供回饋；IMP、AMP、GMP等終產物也參與上游承諾步驟調節，PRPP供應則反映可用原料與消耗狀態。

若salvage變少，PRPP可能較少被消耗，回收形成的IMP／GMP也下降，上游de novo受到的回饋可能減弱。因此「回收壞掉」不必然造成所有核苷酸都無法製造；它反而可能刺激新的嘌呤合成，最後增加降解負擔。這個因果鏈是Lesch–Nyhan題目的核心。

## Salvage：回收的是鹼基還是核苷，決定使用哪種酵素

Purine salvage的一類反應，是既有鹼基接上PRPP。HGPRT／HPRT將hypoxanthine變成IMP，將guanine變成GMP；APRT則將adenine變成AMP。反應釋出PPi，後續水解有利反應前進。**HGPRT的兩個受質在名字裡，但adenine不是其中之一。**

另一類salvage由nucleoside kinase把磷酸加到已經帶糖的核苷，例如adenosine kinase可形成AMP。因此回收不是單一酵素、單一受質、單一反應。題目若問一般salvage，要先看選項是base、nucleoside還是nucleotide，不要全部當作「再加一個磷酸」。

| 鹼基 | 酵素 | 配合PRPP後的產物 |
|---|---|---|
| Hypoxanthine | HGPRT | IMP |
| Guanine | HGPRT | GMP |
| Adenine | APRT | AMP |
| Xanthine | 非上述典型人類主要回收受質 | 較偏向後續尿酸生成的路徑 |

Lesch–Nyhan disease位於HPRT1缺陷光譜的嚴重端，可出現尿酸過度生成以及神經、動作、行為異常；較輕的HPRT1相關疾病不必具有同樣完整表現。不能把任何HGPRT活性降低者一律描述為相同程度的自傷或神經症狀。

代謝推理是：HGPRT回收下降→PRPP消耗下降，加上IMP／GMP回饋來源減少→促使de novo相對增加→更多purine最後進入降解而產尿酸。它不是de novo的guanine合成酵素缺陷。降低尿酸生成也不代表已修復所有神經行為病理；疾病表現不能全歸因於「尿酸跑進腦中」。

## 嘌呤降解、尿酸與免疫缺陷：不同關卡產生不同後果

AMP與GMP可先去磷酸、去胺及去糖，再進入鹼基降解。Adenosine由adenosine deaminase（ADA）變inosine，inosine可由purine nucleoside phosphorylase（PNP）產hypoxanthine。Guanosine經PNP可產guanine，guanine再去胺成xanthine。Hypoxanthine→xanthine→uric acid兩步皆與xanthine oxidoreductase系統相關，考試常以xanthine oxidase概括。

人體沒有功能性uricase將尿酸繼續大量轉成allantoin，因此尿酸是人類嘌呤降解的重要末端產物。高尿酸可以來自生成過多，也可以來自排泄不足，不能把所有痛風都當成de novo一定過度活躍。Uric acid／urate的酸鹼形式與溶解性亦有關，濃度超過相應條件下的溶解範圍可能形成結晶。

| 阻塞／異常 | 主要生化方向 | 考試定位 |
|---|---|---|
| HGPRT缺陷 | 回收下降、purine生成及尿酸負擔增加 | Lesch–Nyhan／HPRT1光譜 |
| ADA缺陷 | Deoxyadenosine及dATP等累積 | 淋巴球毒性、嚴重免疫缺陷 |
| PNP缺陷 | Purine nucleoside處理受限，dGTP等異常 | 常特別影響T細胞相關功能 |
| Xanthine oxidoreductase缺陷 | 尿酸生成下降，xanthine可能堆積 | Xanthinuria與結石風險 |

ADA不只處理adenosine，也處理deoxyadenosine。ADA缺乏時，後者累積並可再磷酸化為dATP；過多dATP抑制ribonucleotide reductase的整體活性，干擾平衡的dNTP供應與DNA相關功能。這是重要教學機轉，但ADA缺陷的細胞毒性還涉及其他過程，不應將全部免疫表現簡化為唯一一個箭頭。

不要說「ADA原本負責合成dATP，所以缺乏會無法產dATP」；實際是清除路徑受阻而使其池量異常增加。也不要把ADA缺陷與ADA2缺陷當同一疾病。本章與歷屆核苷酸代謝題討論的是典型ADA／ADA1相關代謝及免疫缺陷。

## 嘧啶de novo：先完成環，再加PRPP，且有粒線體關卡

嘧啶與嘌呤的建造順序不同：**嘧啶先形成orotate環，再把它接到PRPP上；嘌呤則在核糖底座上搭環。**嘧啶環的原子主要來自aspartate與carbamoyl phosphate，而carbamoyl phosphate的氮由glutamine提供。

在人類，胞質CAD是多功能蛋白，包含CPS-II、aspartate transcarbamoylase及dihydroorotase活性。CPS-II使用glutamine、HCO₃⁻與ATP製造carbamoyl phosphate；再加入Asp形成carbamoyl aspartate，環化成dihydroorotate。此時還沒有接上ribose。

下一步dihydroorotate dehydrogenase（DHODH）將dihydroorotate氧化為orotate。人類DHODH與粒線體內膜相連，電子經FMN及ubiquinone相關系統交給呼吸鏈。這解釋為何抑制粒線體呼吸會牽動嘧啶de novo，不是因為所有核苷酸合成都在粒線體進行，也不是只用「ATP少所以什麼都停」就能回答這個特定酵素題。

| 比較 | CPS-I | CPS-II |
|---|---|---|
| 典型區室 | 粒線體基質 | 胞質CAD的一部分 |
| 氮來源 | 游離氨相關形式 | Glutamine醯胺氮 |
| 主要目的 | 尿素循環排氮 | 嘧啶核苷酸合成 |
| 重要調控 | NAG為必要活化因子 | UTP回饋抑制，PRPP等促進 |

上述CPS-II調控是考試基礎模型，細胞訊息與磷酸化可再改變CAD活性。不要把細菌aspartate transcarbamoylase的經典CTP調控圖原封不動當作人體整條路的唯一控制點；先辨認物種及問的是哪一個酵素。

## Orotate變UMP，再到UTP與CTP：兩個UMPS活性接在一起

Orotate phosphoribosyltransferase將orotate與PRPP結合成OMP，釋出PPi；OMP decarboxylase再移除CO₂形成UMP。人體這兩個活性位於雙功能UMP synthase（UMPS）蛋白上。**第一個形成的典型嘧啶核苷酸成品是UMP，不是游離uracil先被放進DNA。**

UMP經磷酸轉移成UDP及UTP，CTP synthetase再以glutamine供氮、利用ATP，把UTP的特定官能基改成CTP。這裡氮是後加到核苷酸上的，不是重新從頭搭一個cytosine環。Asp與Gln因而都能參與CTP的合成，但角色與加入時點不同。

| 反應段 | 原料／工具 | 產物 |
|---|---|---|
| Orotate＋PRPP | UMPS的phosphoribosyltransferase活性 | OMP＋PPi |
| OMP脫羧 | UMPS的OMP decarboxylase活性 | UMP＋CO₂ |
| UMP逐步磷酸化 | Kinases與磷酸供體 | UDP、UTP |
| UTP胺化 | CTP synthetase、Gln、ATP | CTP |

Hereditary orotic aciduria典型涉及UMPS缺陷：orotate無法順利向UMP走，尿中orotic acid增加，嘧啶供應不足可影響DNA合成與造血，出現megaloblastic anemia及生長障礙。這與OTC缺陷造成的orotic acid增加不同：OTC在尿素循環，carbamoyl phosphate溢入嘧啶途徑，通常需同時注意高血氨。

經典比較是UMPS缺陷偏向「orotic acid高＋巨幼紅血球性貧血，通常沒有尿素循環型高血氨」；OTC缺陷偏向「高血氨＋orotic acid高」。它是定位框架，不是任何病人只驗兩項即可確診；部分UMPS病例表現也非完整教科書組合。

Uridine可經salvage形成UMP，提供繞過阻塞的路徑，並透過終產物回饋降低上游過度製造。國考問補充何種分子的機轉時可用這條旁路推導；實際治療製劑與使用方式須依疾病臨床處置，不以本節取代個別處方。

## Ribonucleotide reductase：改的是糖的2′位置，不是鹼基

RNA與DNA原料差異的一個關鍵是核糖2′位置。人類ribonucleotide reductase（RNR）典型將ribonucleoside diphosphate（NDP）還原成deoxyribonucleoside diphosphate（dNDP）：ADP→dADP、GDP→dGDP、CDP→dCDP、UDP→dUDP。**它不是把游離ribose直接變deoxyribose後再拿去搭全部核苷酸，也不是把U直接換成T。**

RNR運作涉及自由基與酵素cysteine氧化還原化學，需要還原系統再生。Thioredoxin或glutaredoxin等可參與傳遞還原力，上游最終可由NADPH支持。因此PPP不只供ribose-5-P，也能以NADPH間接支援DNA原料形成，將碳骨架供應與電子供應連在一起。

| 需要改變什麼 | 相關反應 | 不要誤選 |
|---|---|---|
| Ribose 2′-OH→H | RNR，NDP→dNDP | 不是nucleotide kinase |
| 增加磷酸數 | Kinase，dNDP→dNTP | 不是RNR新增第三個磷酸 |
| dUMP→dTMP | Thymidylate synthase | 不是RNR直接在鹼基上加甲基 |

RNR需同時控制總活性及受質選擇，讓四類dNTP池保持合適比例。整體活性方面，ATP支持活化、dATP提供強烈抑制是重要考點；另一組受質專一性調控會讓不同核苷酸訊號改變偏好，不能將所有核苷酸在所有位點都說成單純抑制。

為什麼不只追求「dNTP越多越好」？DNA合成需要平衡的原料池，某一種過多或其他種不足都可能干擾複製與修復。ADA缺陷的dATP累積就是例子；它並不因為dATP是DNA原料就變成對細胞有利的現象。

## dTMP與葉酸循環：供一碳的同時，也改變葉酸氧化態

dTMP由dUMP經thymidylate synthase生成，所需一碳及還原當量來自N5,N10-methylene-THF。反應使uracil環的5號位置取得甲基，同時THF衍生物氧化成DHF。接著dihydrofolate reductase（DHFR）使用NADPH將DHF還原回THF，才有利持續補充一碳載體。

這裡與一般SAM甲基轉移不同：題目問dUMP→dTMP的直接輔因子，要選N5,N10-methylene-THF，不是SAM，也不是用於purine C2、C8的N10-formyl-THF。三種分子都與「一碳」有關，化學型態與反應位置卻不同。

| 一碳形式 | 本章最重要用途 | 考試辨認 |
|---|---|---|
| N10-formyl-THF | Purine環C2、C8 | Formyl碳 |
| N5,N10-methylene-THF | dUMP→dTMP | 同時支援形成甲基，葉酸氧化為DHF |
| N5-methyl-THF | Homocysteine再甲基化 | 與B12、methionine循環相連 |
| SAM | 多種一般甲基轉移 | 不直接取代thymidylate synthase的一碳供體 |

dUMP可由dUTP經dUTPase等路徑形成，也可由其他deoxynucleotide代謝銜接。不要直接把一張簡化圖的UDP→dUDP→dUMP當成所有步驟都由同一個酵素完成；RNR只負責糖還原，磷酸數調整與dTMP形成仍是不同反應。

葉酸缺乏可使dTMP供應受限，而不是讓dTMP大量堆積。核苷酸池失衡可增加uracil進入DNA的機會，DNA修復反覆處理亦可帶來損傷。這與megaloblastic change的DNA合成障礙相連；B12缺乏造成folate trap也能間接牽動這一套系統。看到大球性貧血仍須結合其他資料，不能由這個機轉直接確定單一營養缺乏。

## 藥物靶點：先在路徑上定位，再解釋為何DNA原料下降

本節用來整理國考生化機轉，不列個人治療劑量。遇到藥名，不要只答「抑制DNA」，而要指出哪個酵素、哪個原料池先受影響；同樣最後DNA合成下降，直接作用點可以相差好幾步。

| 藥物／活性形式 | 主要考點位置 | 推導結果 |
|---|---|---|
| 5-FU的FdUMP | Thymidylate synthase；與酵素及folate形成穩定複合體 | dTMP供應下降 |
| Methotrexate | DHFR | THF再生受限，牽動dTMP及purine等葉酸依賴途徑 |
| Hydroxyurea | RNR相關自由基機制 | dNDP供應受抑 |
| Mycophenolic acid | IMP dehydrogenase | IMP→XMP→GMP支路受限 |
| Azaserine | Glutamine類似物，抑制相關amidotransferase | 阻礙glutamine供氮的合成反應 |
| Allopurinol／oxypurinol | Xanthine oxidoreductase系統 | 尿酸生成下降，不是直接抗發炎止痛 |

5-FU會形成不同代謝物，除了FdUMP對thymidylate synthase的作用，也可影響RNA與DNA相關過程；國考若明確寫FdUMP，就應精準回答thymidylate synthase，而不是thymidine kinase。Kinase與synthase名字都提到thymidine／thymidylate，反應卻不同。

Methotrexate與5-FU都可降低dTMP供應，但不是抑制同一酵素。DHFR在「葉酸再生」層，thymidylate synthase在「dUMP變dTMP」層。Leucovorin是還原型葉酸衍生物，其與不同藥物搭配的意義不相同；不能看到它是folate就一律說只會解除所有抗代謝藥的效果。

Allopurinol抑制尿酸形成，與急性關節發炎的直接止痛作用必須分開。這個區分也不等於「任何急性發作期間都絕不能使用降尿酸藥」的治療規則；本章只判斷分子作用，不把歷屆生化題擴張成未加條件的臨床處方。

## 嘧啶降解與整合：把合成、回收、降解三種故障分開

嘧啶環可被還原並開環，形成較小、較水溶性的產物。Uracil主要形成β-alanine相關產物，thymine因多一個甲基而形成β-aminoisobutyrate；cytosine相關分子可先經去胺接到uracil路徑。它們不是像purine一樣全部以uric acid作終點。

第一個還原步驟涉及dihydropyrimidine dehydrogenase（DPD），與前面合成路徑的dihydroorotate dehydrogenase（DHODH）只差部分名字，但不是同一酵素。DPD亦參與5-FU的分解，因此功能不足可增加fluoropyrimidine相關毒性風險；這是「降解藥物變慢」而非「藥物靶點變多」的概念。

| 題幹線索 | 優先定位 | 最常錯在哪 |
|---|---|---|
| HGPRT缺陷、尿酸多 | Purine salvage與回饋 | 說成de novo無法合成guanine |
| ADA缺陷、dATP多、免疫異常 | Purine nucleoside清除與dNTP失衡 | 以為DNA原料多就更利於複製 |
| Orotic acid高、貧血 | UMPS／pyrimidine不足 | 與OTC高血氨未區分 |
| 呼吸抑制影響嘧啶 | 粒線體DHODH | 把CPS-II搬到粒線體 |
| FdUMP、dTMP不足 | Thymidylate synthase | 選成thymidine kinase或DHFR |
| Thymine分解 | β-Aminoisobutyrate | 誤選uric acid或β-alanine |

再以兩條比較收尾：**Purine在糖上搭環，pyrimidine先做環再接糖；purine降解到尿酸，pyrimidine可開環成小分子。**中間無論走de novo還是salvage，都還要平衡核苷酸池，並透過RNR與thymidylate synthase等步驟供DNA需要的去氧原料。

最後練習說出完整因果，而不是只背酵素配病名：一個缺陷可能使受質堆積、產物不足、回饋減弱、替代通路增加；藥物也可能抑制合成、限制輔因子再生或降低降解。先判是哪一種，再追到DNA、免疫、造血或尿酸，就能處理題幹換寫法的問題。
