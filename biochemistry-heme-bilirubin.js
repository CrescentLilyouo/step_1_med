biochemistryChapters.push({
  "id": "heme-bilirubin",
  "number": "21",
  "title": "血基質與膽紅素：合成、拆解與排泄",
  "summary": "從glycine與succinyl-CoA建立heme，分開ALAS1、ALAS2與光敏感疾病，再追蹤膽紅素的albumin運輸、肝結合與腸道排泄。",
  "sources": "Harper’s Illustrated Biochemistry, 31st ed., Ch. 31 Porphyrins & Bile Pigments（印刷頁305–318）。Protoporphyrin採標準IX命名；AIP、Rotor與direct bilirubin分析限制補充GeneReviews及Mayo Clinic Laboratories。",
  "references": "<p>Harper’s Illustrated Biochemistry, 31st ed., Ch. 31 Porphyrins &amp; Bile Pigments（印刷頁305–318）。Protoporphyrin採標準IX命名；AIP、Rotor與direct bilirubin分析限制補充GeneReviews及Mayo Clinic Laboratories。</p><p>正文與圖為原創教學重組，非逐段翻譯。題目取自現有歷屆題庫，官方採計答案與更正版本原樣保留；機轉解析另行撰寫。精選題數不等同完整考頻統計。</p><p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.ncbi.nlm.nih.gov/books/NBK1193/\">GeneReviews：Acute Intermittent Porphyria</a></p><p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.ncbi.nlm.nih.gov/books/NBK114805/\">GeneReviews：Rotor Syndrome</a></p><p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.mayocliniclabs.com/test-catalog/overview/81787\">Mayo Clinic Laboratories：Direct Bilirubin與delta fraction</a></p><p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://haematologica.org/article/view/7061\">紅系heme與鐵供應的調控</a></p>",
  "sections": [
    {
      "id": "topic-1",
      "title": "先分三個名字：heme不是globin，也不是bilirubin",
      "html": "<p>Hemoglobin是由globin蛋白與heme輔基組成的攜氧蛋白；heme本身不是一條胜肽，而是含鐵的tetrapyrrole結構。常見heme\nb由protoporphyrin\nIX與Fe²⁺構成。Bilirubin則是heme分解後的線性膽色素，不能因為都與血液顏色有關，就把三者放在同一條蛋白質合成路徑上。</p>\n<p>Porphyrin由四個pyrrole環連成大環，環上的氮參與金屬配位。Fe²⁺在heme中心可有六個配位位置：四個與porphyrin的氮配位，在hemoglobin中第五個與proximal\nhistidine配位，第六個可與O₂結合。Distal\nhistidine位於氧結合口袋附近，影響穩定與選擇性，但不是直接提供第五個鐵配位鍵的那一個histidine。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>分子</th>\n<th>結構與任務</th>\n<th>不要混淆</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Heme</td>\n<td>含鐵的porphyrin輔基</td>\n<td>不是tripeptide，也不等於整個hemoglobin</td>\n</tr>\n<tr class=\"even\">\n<td>Globin</td>\n<td>胺基酸組成的蛋白質</td>\n<td>由核糖體翻譯，不由ALA合成</td>\n</tr>\n<tr class=\"odd\">\n<td>Porphyrinogen</td>\n<td>較還原、缺乏完整共軛系統的前驅物</td>\n<td>通常無色，不應把所有中間物都說成紫色</td>\n</tr>\n<tr class=\"even\">\n<td>Porphyrin</td>\n<td>較氧化且有共軛系統</td>\n<td>可呈色、螢光，某些累積造成光敏感</td>\n</tr>\n<tr class=\"odd\">\n<td>Biliverdin／bilirubin</td>\n<td>Heme環拆開後的線性tetrapyrrole</td>\n<td>屬降解，不是heme合成前驅物</td>\n</tr>\n</tbody>\n</table></div>\n<p>Heme也存在於myoglobin、cytochromes、catalase及多種氧化酵素；功能不只攜氧。Hemoglobin攜氧時Fe²⁺與O₂形成可逆結合，不等於每次都把鐵永久氧化成Fe³⁺。Methemoglobin中的Fe³⁺無法以正常方式攜氧，這是氧化態改變的另一個問題。</p>\n"
    },
    {
      "id": "topic-2",
      "title": "合成的第一步：glycine與succinyl-CoA在粒線體相遇",
      "html": "<figure><div class=\"table-scroll\" tabindex=\"0\"><img src=\"assets/biochemistry/heme-synthesis.svg\" alt=\"血基質合成的區室與酵素\" style=\"width:100%;min-width:540px;max-width:780px;height:auto\"></div><figcaption>血基質合成的區室與酵素。圖中為教學模型；手機可橫向捲動，條件與例外見正文。</figcaption></figure><p>人體heme合成需要粒線體與胞質合作。主要合成需求來自骨髓紅系前驅細胞與肝臟；成熟紅血球沒有粒線體，不能繼續執行完整heme合成。不要把「紅血球含最多hemoglobin」推成「成熟紅血球正大量合成heme」。合成主要發生在紅系成熟之前。</p>\n<p>第一步由δ-aminolevulinate synthase（ALA\nsynthase）催化：<strong>glycine＋succinyl-CoA →\nδ-ALA＋CoA＋CO₂</strong>，需要PLP（vitamin\nB₆）。Glycine提供胺基酸原料，succinyl-CoA連結TCA相關碳代謝；此處實際受質是活化的succinyl-CoA，不是游離succinate直接進來即可反應。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>要記的項目</th>\n<th>第一反應</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>位置</td>\n<td>粒線體基質</td>\n</tr>\n<tr class=\"even\">\n<td>碳源</td>\n<td>Glycine與succinyl-CoA</td>\n</tr>\n<tr class=\"odd\">\n<td>產物</td>\n<td>五碳ALA；同時釋CO₂</td>\n</tr>\n<tr class=\"even\">\n<td>輔酶</td>\n<td>PLP，不是BH₄或biotin</td>\n</tr>\n<tr class=\"odd\">\n<td>關鍵酵素</td>\n<td>ALA synthase；肝臟合成的重要速率限制控制點</td>\n</tr>\n</tbody>\n</table></div>\n<p>名稱像「succinate–glycine\npathway」可能用較廣的碳來源概念命名，做受質題時仍應寫succinyl-CoA。每形成一個ALA，glycine的兩個碳加上succinyl-CoA的四個碳，共六碳進入，釋出一個CO₂後剩五碳。這個小碳帳能幫你辨認第一步與後面兩個ALA縮合的不同。</p>\n<p>ALA離開粒線體後才進胞質的下一段。最後幾步又回粒線體，因此題目說「heme全部在胞質合成完成」會漏掉起點與終點。記成「粒線體起步\n→ 胞質組環 →\n粒線體完成氧化及插鐵」，比死記八個酵素卻不知位置更有用。</p>\n"
    },
    {
      "id": "topic-3",
      "title": "胞質如何組環：2個ALA、4個PBG與8個ALA的關係",
      "html": "<p>在胞質，ALA dehydratase（亦稱porphobilinogen\nsynthase）將2個ALA縮合成1個porphobilinogen（PBG），釋出水。PBG是一個pyrrole單位，還不是完整四環porphyrin。此酵素與第一步ALA\nsynthase只差一些字，卻是不同反應、不同位置與不同輔因子性質。</p>\n<p>接著hydroxymethylbilane synthase（HMBS，亦稱PBG\ndeaminase）將4個PBG接成線性的hydroxymethylbilane，並釋出4個氨。Uroporphyrinogen\nIII synthase再協助環化，形成有特定側鏈排列的uroporphyrinogen\nIII。若缺少正確酵素引導，線性中間物可形成不同排列的type\nI產物，不能將I與III視為無意義的羅馬數字差異。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>累積計數</th>\n<th>對應產物</th>\n<th>常見錯法</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>2 ALA</td>\n<td>1 PBG</td>\n<td>把一個PBG直接當四個pyrrole環</td>\n</tr>\n<tr class=\"even\">\n<td>4 PBG</td>\n<td>1線性tetrapyrrole</td>\n<td>誤以為四個ALA就足夠</td>\n</tr>\n<tr class=\"odd\">\n<td>8 ALA</td>\n<td>1個完整tetrapyrrole骨架所需的上游量</td>\n<td>不代表8個ALA的全部碳都保留到heme</td>\n</tr>\n</tbody>\n</table></div>\n<p>Uroporphyrinogen\ndecarboxylase（UROD）將四個acetate側鏈去羧，改成methyl側鏈，形成coproporphyrinogen\nIII。它改變的是側鏈，不是把整個四環骨架拆掉。後續coproporphyrinogen回到粒線體，再進一步修飾。</p>\n<p>此處要會兩種命名對照：PBG deaminase＝HMBS；ALA dehydratase＝PBG\nsynthase。前者是四個PBG接成線性鏈，後者是兩個ALA接成一個PBG。看見porphyria的酵素名稱變換時，應能放回同一個箭頭，而不是當成新疾病再背一次。</p>\n"
    },
    {
      "id": "topic-4",
      "title": "回到粒線體：側鏈修飾、氧化與最後插鐵",
      "html": "<p>Coproporphyrinogen III經coproporphyrinogen\noxidase（CPOX）及protoporphyrinogen\noxidase（PPOX）等後續反應，形成protoporphyrin\nIX。最末步ferrochelatase（FECH）把Fe²⁺插入protoporphyrin\nIX，形成heme。這裡採常用的protoporphyrin IX命名，以免將上游type\nIII的命名機械式沿用到所有中間物。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>末段酵素</th>\n<th>核心任務</th>\n<th>位置概念</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>CPOX</td>\n<td>對側鏈進行氧化及去羧相關修飾</td>\n<td>回到粒線體的末段</td>\n</tr>\n<tr class=\"even\">\n<td>PPOX</td>\n<td>進一步氧化porphyrinogen，建立porphyrin共軛系統</td>\n<td>粒線體相關反應</td>\n</tr>\n<tr class=\"odd\">\n<td>Ferrochelatase</td>\n<td>將Fe²⁺插入protoporphyrin IX</td>\n<td>粒線體內膜相關，催化側朝基質</td>\n</tr>\n</tbody>\n</table></div>\n<p>「Ferrochelatase很重要」不等於它是肝臟heme合成的典型速率限制酵素；速率限制題通常選ALA\nsynthase。相反地，「最後形成heme的酵素」就選ferrochelatase。題目換一個限定詞，答案便不同。</p>\n<p>Heme合成需要氧參與部分氧化步驟，但這不表示氧是以hemoglobin的可逆攜氧方式完成合成。前者是生合成化學反應，後者是完成後的蛋白功能。也不要以為heme的鐵來自glycine；glycine供含氮骨架，鐵需由細胞鐵供應與運輸系統另行提供。</p>\n<p>從最上游看，8個glycine與8個succinyl-CoA先產8個ALA，總起始碳數48，經第一步失去8碳、UROD步驟失去4碳、CPOX相關側鏈步驟失去2碳，形成34碳的protoporphyrin骨架。這是碳來源追蹤，不應拿來宣稱整條合成只需這兩種資源，因為還需要氧、鐵、輔因子及區室運輸。</p>\n"
    },
    {
      "id": "topic-5",
      "title": "調控分兩條線：肝ALAS1與紅系ALAS2不能混背",
      "html": "<p>ALAS1廣泛表現，肝臟的heme需求常與cytochrome\nP450等蛋白有關。Heme充足時，可透過多個層級降低ALAS1供應與作用，包括基因表現、蛋白穩定及粒線體輸入相關調控。當可利用的調控heme池下降，上游抑制減輕，合成能力可提高。這是終產物回饋的典型例子。</p>\n<p>紅系ALAS2的調控更要配合鐵供應。其mRNA的5′端具有iron-responsive\nelement（IRE）：缺鐵時IRP結合5′\nIRE，抑制翻譯；鐵足夠時，此抑制減輕。這是「5′端阻翻譯」，不要和transferrin\nreceptor mRNA的3′ IRE穩定性調控混淆。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>系統</th>\n<th>感測的需求</th>\n<th>主要考點</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>肝ALAS1</td>\n<td>Heme池與含heme酵素需求</td>\n<td>Heme負回饋；部分誘導P450的情境可增加合成需求</td>\n</tr>\n<tr class=\"even\">\n<td>紅系ALAS2</td>\n<td>鐵供應與紅系分化</td>\n<td>5′ IRE／IRP調節翻譯</td>\n</tr>\n<tr class=\"odd\">\n<td>HRI–eIF2α</td>\n<td>Heme是否足以搭配globin</td>\n<td>Heme不足時HRI活化，磷酸化eIF2α，抑制翻譯起始</td>\n</tr>\n</tbody>\n</table></div>\n<p>HRI調控的意義是避免在heme不足時持續大量製造無法正常組裝的globin。缺鐵可使heme供應不足，再啟動這條翻譯抑制反應；這與ALAS2\nmRNA本身的IRE調控是兩個層次，不能只背「缺鐵→eIF2」而忽略中間的heme感測。</p>\n<p>若題目問reticulocyte缺鐵後globin翻譯如何下降，eIF2α\nphosphorylation是常見答案；若問ALAS2酵素本身如何配合鐵供應，則看5′\nIRE。磷酸化也不是一律活化蛋白製造，這裡是降低翻譯起始效率。</p>\n"
    },
    {
      "id": "topic-6",
      "title": "鉛與合成不足：同時記酵素阻塞與產物改變",
      "html": "<p>鉛可抑制heme合成，經典考點是ALA\ndehydratase與ferrochelatase。前者原本參與ALA→PBG，後者負責末端插鐵；因此不能把鉛中毒只背成「鐵不夠」。這是有毒金屬干擾酵素與代謝的情況，與單純缺乏膳食鐵不是同一機轉。</p>\n<p>ALA\ndehydratase為含鋅酵素，鉛可干擾其功能；受阻後ALA可增加。Ferrochelatase相關步驟受阻時，protoporphyrin與zinc\nprotoporphyrin相關指標可改變。Zinc\nprotoporphyrin升高並非鉛中毒獨有，鐵供應不足等情境也會影響，因此不能把單一指標當作完整診斷。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>比較</th>\n<th>阻塞位置或問題</th>\n<th>要避免的推論</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>鉛暴露</td>\n<td>ALAD、ferrochelatase等受影響</td>\n<td>不等於所有作用都只因取代鐵</td>\n</tr>\n<tr class=\"even\">\n<td>鐵缺乏</td>\n<td>可供heme利用的鐵不足，並改變紅系調控</td>\n<td>不等於ALAD基因突變</td>\n</tr>\n<tr class=\"odd\">\n<td>部分ALAS2功能缺陷</td>\n<td>上游ALA形成受影響，可與sideroblastic anemia相關</td>\n<td>不等於所有sideroblastic anemia皆由同一基因造成</td>\n</tr>\n<tr class=\"even\">\n<td>Ferrochelatase缺陷</td>\n<td>末端插鐵受影響，可形成EPP表現</td>\n<td>不等於每種porphyria都主要造成缺鐵性貧血</td>\n</tr>\n</tbody>\n</table></div>\n<p>骨髓ring\nsideroblast表示紅系前驅細胞粒線體內的鐵分布異常，可見於多種不同原因，並不是一個只靠字面就能指定的單一病。這章以生化定位為重點，不從一個抹片名詞直接跳到個人治療。</p>\n<p>記憶時用「第一步ALAS需要B₆、第二步ALAD怕鉛、最後FECH插Fe²⁺」先固定三個端點。其餘酵素再用中間物逐步補齊，避免把synthase、dehydratase與chelatase因名字相近全部混在一起。</p>\n"
    },
    {
      "id": "topic-7",
      "title": "Porphyria怎麼讀：神經內臟症狀與光敏感分開看",
      "html": "<p>Porphyria是一組與heme合成路徑異常及前驅物累積相關的疾病，不能視為單一酵素缺乏。臨床表現與堆積的物質、主要產生器官及殘餘活性有關。急性腹痛、神經或精神症狀與光敏感皮膚病變是兩組常考線索，但不是每個類型都同時具備。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>疾病</th>\n<th>主要相關酵素／機轉</th>\n<th>典型考試連結</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Acute intermittent porphyria（AIP）</td>\n<td>HMBS／PBG deaminase缺陷</td>\n<td>急性神經內臟症狀；發作時PBG及ALA可升高；不以光敏感為特徵</td>\n</tr>\n<tr class=\"even\">\n<td>Porphyria cutanea tarda（PCT）</td>\n<td>肝UROD活性降低</td>\n<td>光照部位皮膚脆弱、水疱；可後天或與遺傳因素相關</td>\n</tr>\n<tr class=\"odd\">\n<td>Hereditary coproporphyria</td>\n<td>CPOX缺陷</td>\n<td>可有急性神經內臟表現，亦可能有皮膚表現</td>\n</tr>\n<tr class=\"even\">\n<td>Variegate porphyria</td>\n<td>PPOX缺陷</td>\n<td>可有急性與光敏感表現</td>\n</tr>\n<tr class=\"odd\">\n<td>Erythropoietic protoporphyria（EPP）</td>\n<td>常見FECH相關缺陷</td>\n<td>疼痛性光敏感與protoporphyrin累積，通常不是典型大水疱模式</td>\n</tr>\n<tr class=\"even\">\n<td>Congenital erythropoietic porphyria</td>\n<td>Uroporphyrinogen III synthase缺陷</td>\n<td>Type I相關產物累積、嚴重光敏感等</td>\n</tr>\n</tbody>\n</table></div>\n<p>光敏感可由累積的porphyrin吸收光能後造成氧化損傷；ALA與PBG不是已完成共軛四環的porphyrin，這幫助理解AIP為何能有很強的神經內臟症狀卻沒有典型皮膚光敏感。不要用「名字都有porphyria」抹平此差異。</p>\n<p>紅褐色尿可提示代謝色素變化，但新鮮尿不一定立即變色，放置、空氣與光線也會影響。它既不能單獨確診AIP，也不能由「尿色深」直接排除血尿、膽紅素尿或其他原因。原題若只要求四個代謝病中選porphyria，可依整體線索作答；若問精確分型，則需更多生化與遺傳資料。</p>\n"
    },
    {
      "id": "topic-8",
      "title": "Heme拆解到bilirubin：先釋鐵與CO，再運送不易溶水的色素",
      "html": "<figure><div class=\"table-scroll\" tabindex=\"0\"><img src=\"assets/biochemistry/bilirubin-flow.svg\" alt=\"膽紅素的運輸與排泄\" style=\"width:100%;min-width:540px;max-width:780px;height:auto\"></div><figcaption>膽紅素的運輸與排泄。圖中為教學模型；手機可橫向捲動，條件與例外見正文。</figcaption></figure><p>老化紅血球被單核吞噬系統處理後，globin可分解回收胺基酸，鐵也可回收；porphyrin環則需要拆解。Heme\noxygenase使用氧與還原力，打開heme環，產生biliverdin並釋出鐵與一氧化碳（CO）。這個生理性CO來源與外界CO暴露是不同情境，不要因CO具毒性便認為人體完全不可能生成它。</p>\n<p>Biliverdin\nreductase再將綠色biliverdin還原成bilirubin。皮下出血色澤隨時間改變，可用這些色素轉換協助理解，但實際外觀受深度、量與局部環境影響，不能只靠顏色精準推算受傷時間。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>步驟</th>\n<th>主要事件</th>\n<th>本章定位</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Heme oxygenase</td>\n<td>打開環，形成biliverdin，釋鐵與CO</td>\n<td>降解入口，非heme合成末步</td>\n</tr>\n<tr class=\"even\">\n<td>Biliverdin reductase</td>\n<td>Biliverdin→bilirubin</td>\n<td>還原反應</td>\n</tr>\n<tr class=\"odd\">\n<td>血漿albumin運輸</td>\n<td>非共價攜帶未結合型bilirubin</td>\n<td>溶解度與運輸問題</td>\n</tr>\n<tr class=\"even\">\n<td>肝細胞處理</td>\n<td>攝取、glucuronidation及膽汁排出</td>\n<td>下游清除與排泄問題</td>\n</tr>\n</tbody>\n</table></div>\n<p>Unconjugated\nbilirubin（未結合型膽紅素）親水性低，血中主要與albumin非共價結合運送。此處「未結合」指尚未與glucuronic\nacid結合，<strong>不是指沒有結合albumin</strong>。這是中文名稱最容易造成的誤會。</p>\n<p>Albumin結合使大部分未結合型膽紅素不易通過腎絲球，因此單純未結合型升高通常不會造成典型bilirubinuria。游離、未與albumin結合的部分與神經毒性風險較直接相關；總bilirubin數值不等於全部都處在同樣可進入組織的狀態。</p>\n"
    },
    {
      "id": "topic-9",
      "title": "肝臟如何增加水溶性：UGT1A1結合與MRP2排出是兩步",
      "html": "<p>肝細胞接收bilirubin後，UGT1A1（UDP-glucuronosyltransferase\n1A1）利用UDP-glucuronic acid作供體，形成bilirubin\nmono-及diglucuronide。這個反應增加極性，使膽紅素較適合經膽汁排出。它不是把bilirubin重新接成heme，也不是用glucose直接黏上去。</p>\n<p>UGT1A1屬內質網相關酵素；肝膽小管膜的MRP2（ABCC2）則負責將結合型膽紅素等有機陰離子向膽汁側輸送。前者是化學修飾，後者是跨膜運輸，即使前者正常，後者故障仍可能使血中結合型膽紅素增加。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>關卡</th>\n<th>工具</th>\n<th>阻塞時的基本推理</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>攝取／肝內處理</td>\n<td>血竇側運輸與胞內結合等系統</td>\n<td>肝細胞處理能力受影響</td>\n</tr>\n<tr class=\"even\">\n<td>Glucuronidation</td>\n<td>UGT1A1＋UDP-glucuronic acid</td>\n<td>未結合型可能累積</td>\n</tr>\n<tr class=\"odd\">\n<td>膽小管分泌</td>\n<td>MRP2／ABCC2等</td>\n<td>已結合但送不出去，結合型可能增加</td>\n</tr>\n<tr class=\"even\">\n<td>膽道通暢</td>\n<td>膽汁流至腸道</td>\n<td>肝已處理仍可能因下游阻塞而回流</td>\n</tr>\n</tbody>\n</table></div>\n<p>實驗室direct與indirect\nbilirubin是分析方法衍生的分類，常分別近似結合型與未結合型，但並非在所有情境下完全一對一。Delta\nbilirubin是與albumin共價結合的膽紅素部分，可被測入direct\nfraction；其清除可隨albumin的時間尺度，使膽汁阻塞改善後direct\nbilirubin不一定立刻恢復。</p>\n<p>這也解釋為何「direct\nfraction增加」不能機械式等於「所有增加部分都會立刻從尿中排掉」。一般結合型較能出現在尿中，albumin共價結合的delta部分則有不同處理特性。國考基本題可先用direct≈conjugated，但進階病例需保留方法與分子形式的差異。</p>\n"
    },
    {
      "id": "topic-10",
      "title": "腸道與尿液：bilirubin、urobilinogen、stercobilin不是同一個名字",
      "html": "<p>結合型bilirubin隨膽汁進入腸道後，腸菌可進行去結合及還原等處理，形成urobilinogen類物質。其中大部分進一步形成糞便色素，常以stercobilin說明糞便棕色；部分urobilinogen被腸道再吸收，經門脈回肝，再次由膽汁排出。</p>\n<p>少量進入體循環的urobilinogen可由腎排出，氧化後形成urobilin等色素。這與結合型bilirubin本身進尿是兩種不同現象。尿膽紅素陽性與尿urobilinogen增加不能當成同一個檢驗結果，也不能互換名稱。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>情境的典型模型</th>\n<th>尿bilirubin</th>\n<th>尿urobilinogen／糞色</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>單純溶血增加，肝處理尚可</td>\n<td>通常不因未結合型增加而陽性</td>\n<td>輸入腸道的色素增加，urobilinogen可增加</td>\n</tr>\n<tr class=\"even\">\n<td>完全膽道阻塞</td>\n<td>結合型回流後可陽性</td>\n<td>進腸色素減少，urobilinogen低或無，糞可變淡</td>\n</tr>\n<tr class=\"odd\">\n<td>肝細胞疾病</td>\n<td>可有結合型與未結合型混合變化</td>\n<td>受處理與再攝取能力影響，不能用單一固定模式涵蓋</td>\n</tr>\n</tbody>\n</table></div>\n<p>上表是教學上的典型邊界。部分阻塞、間歇阻塞、腸菌改變、疾病時間與檢驗方法都可改變結果；看到一個urobilinogen數字不應直接把診斷鎖死。尤其尿色深也可能由濃縮、血紅素、肌紅素或其他色素造成，必須先確認檢驗測的是什麼。</p>\n<p>膽酸與膽紅素都走膽汁到腸道，但用途不同：膽酸主要協助脂質消化吸收，膽紅素是heme降解後的排出產物。兩者可能一起受膽道阻塞影響，卻不能因此說bilirubin是乳化脂肪的主要工具。</p>\n"
    },
    {
      "id": "topic-11",
      "title": "遺傳性黃疸：從未結合型與結合型分成兩組",
      "html": "<p>先問哪一種bilirubin增加，再把缺陷放回上游產生、肝內結合或運輸位置。Gilbert與Crigler–Najjar主要涉及UGT1A1相關結合能力，偏未結合型；Dubin–Johnson與Rotor主要涉及不同運輸環節，偏結合型。不是每一種遺傳性黃疸都是同一個transferase完全消失。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<colgroup>\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n<col style=\"width: 33%\" />\n</colgroup>\n<thead>\n<tr class=\"header\">\n<th>疾病</th>\n<th>核心機轉</th>\n<th>辨認要點</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Gilbert syndrome</td>\n<td>UGT1A1活性較低</td>\n<td>常見較輕的間歇性未結合型升高；其他原因仍需排除</td>\n</tr>\n<tr class=\"even\">\n<td>Crigler–Najjar I</td>\n<td>UGT1A1功能極低或缺失</td>\n<td>嚴重未結合型升高，神經毒性風險高</td>\n</tr>\n<tr class=\"odd\">\n<td>Crigler–Najjar II</td>\n<td>保留部分UGT1A1功能</td>\n<td>通常較I型輕；不能說與Gilbert只有名稱不同</td>\n</tr>\n<tr class=\"even\">\n<td>Dubin–Johnson</td>\n<td>ABCC2／MRP2膽小管分泌缺陷</td>\n<td>偏結合型；可有典型肝臟色素沉積</td>\n</tr>\n<tr class=\"odd\">\n<td>Rotor</td>\n<td>OATP1B1及OATP1B3相關功能缺陷</td>\n<td>影響肝攝取／再攝取；偏結合型，無同樣黑肝特徵</td>\n</tr>\n</tbody>\n</table></div>\n<p>Rotor不能只寫成「另一種MRP2缺陷」，因為它與Dubin–Johnson的受影響膜面及運輸蛋白不同。肝細胞已形成的bilirubin\nconjugates可有血竇側輸出及再攝取的循環，這使「攝取缺陷竟然以結合型增加」並不矛盾。</p>\n<p>遺傳疾病表的用途是做定位，而不是看到輕度bilirubin增加就直接診斷Gilbert。溶血、肝細胞損傷、膽汁鬱積與藥物等因素仍可能影響結果。國考若已限定無其他異常的典型情境，可依表格選擇；真實病例需把前提補齊。</p>\n"
    },
    {
      "id": "topic-12",
      "title": "新生兒與整合題：分清生化機轉、危險程度與處置門檻",
      "html": "<p>新生兒常有較高的bilirubin負荷，加上肝臟結合與排出系統尚未完全成熟，使未結合型容易增加。這是理解生理性黃疸的背景，但不能把所有新生兒黃疸都稱為生理性。出生後時間、胎齡、溶血、感染、餵食與其他風險會改變判讀，不能只靠「嬰兒都會黃」忽略異常。</p>\n<p>未結合且未被albumin充分結合的bilirubin可進入腦組織，造成膽紅素神經毒性；albumin結合能力、酸鹼與疾病狀態等都可能影響風險。核心概念是分子可利用程度及清除能力，不是把每一個總bilirubin數值直接換算成固定腦傷程度。</p>\n<p>Phototherapy的生化原理是利用光改變bilirubin的異構形式，形成較容易排出的光產物；其中結構異構化形成lumirubin是重要途徑。它不是把UGT1A1基因修好，也不是先補鐵再重新製造heme。本章不提供照光或換血數值門檻，這些需依胎齡、出生後時數及風險使用相應臨床規範。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>題幹問什麼</th>\n<th>先定位哪一步</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>Glycine、succinyl-CoA、PLP</td>\n<td>ALAS合成入口</td>\n</tr>\n<tr class=\"even\">\n<td>Fe²⁺插入porphyrin</td>\n<td>Ferrochelatase末步</td>\n</tr>\n<tr class=\"odd\">\n<td>腹痛、神經症狀、heme合成缺陷</td>\n<td>Porphyria，再依檢驗分型</td>\n</tr>\n<tr class=\"even\">\n<td>Biliverdin、CO與鐵回收</td>\n<td>Heme oxygenase降解</td>\n</tr>\n<tr class=\"odd\">\n<td>未結合型、albumin、UGT1A1</td>\n<td>運輸與結合</td>\n</tr>\n<tr class=\"even\">\n<td>結合型、MRP2、膽道阻塞</td>\n<td>肝分泌與下游流出</td>\n</tr>\n<tr class=\"odd\">\n<td>淡色糞、尿bilirubin與urobilinogen</td>\n<td>腸道色素來源及腸肝循環</td>\n</tr>\n</tbody>\n</table></div>\n<p>最後閉卷說出全程：粒線體用glycine與succinyl-CoA產ALA，胞質接環，回粒線體插鐵成heme；heme被拆成biliverdin再成bilirubin，與albumin到肝後接受glucuronidation，經膽汁到腸道，再由菌群轉成不同色素與回收物。能把合成與分解各畫成不同方向，才不會把bilirubin選成heme的上游前驅物。</p>\n"
    }
  ],
  "recalls": [
    [
      "Heme、globin、bilirubin三者有何不同？",
      "Heme是含鐵tetrapyrrole輔基，globin是蛋白質，bilirubin是heme拆解後的線性膽色素；三者不是同一種分子的別名。"
    ],
    [
      "ALA synthase的兩個受質、輔酶與位置？",
      "Glycine與succinyl-CoA，在粒線體由PLP依賴的ALA synthase形成ALA、CoA與CO₂。"
    ],
    [
      "一個四環骨架上游需要幾個PBG與ALA？",
      "4 PBG，每個PBG來自2 ALA，所以需8 ALA；先線性接合，再由酵素引導形成正確環結構。"
    ],
    [
      "最後插鐵的酵素與鐵氧化態？",
      "Ferrochelatase將Fe²⁺插入protoporphyrin IX；它是末步，不是肝ALAS1那個上游控制點。"
    ],
    [
      "ALAS2的5′ IRE與HRI–eIF2α分別控制什麼？",
      "缺鐵時IRP結合ALAS2的5′ IRE抑制其翻譯；heme不足可啟動HRI使eIF2α磷酸化，抑制翻譯起始並協調globin供應。"
    ],
    [
      "鉛影響heme合成的兩個經典酵素？",
      "ALA dehydratase與ferrochelatase；前者把ALA變PBG，後者插鐵，不能當成單純鐵攝取不足。"
    ],
    [
      "AIP與PCT的典型機轉及皮膚表現？",
      "AIP為HMBS/PBG deaminase相關缺陷，以神經內臟症狀為主且無典型光敏感；PCT為肝UROD活性降低，常有光敏感皮膚脆弱與水疱。"
    ],
    [
      "未結合型bilirubin是否完全沒有結合任何東西？",
      "不是。未結合指尚未glucuronidation；血中仍主要與albumin非共價結合運送。"
    ],
    [
      "UGT1A1與MRP2分別在哪一步？",
      "UGT1A1以UDP-glucuronic acid將bilirubin結合；MRP2/ABCC2再將結合型向膽汁側輸送，化學反應與運輸是兩關。"
    ],
    [
      "尿bilirubin與尿urobilinogen為何不能互換？",
      "前者是膽紅素本身進尿，後者源自腸菌處理膽紅素後的代謝物；它們在溶血、阻塞與肝病中的變化可能不同。"
    ],
    [
      "Gilbert、Crigler–Najjar、Dubin–Johnson與Rotor先如何分組？",
      "前兩者偏UGT1A1相關未結合型增加；後兩者偏運輸缺陷及結合型增加，DJS為MRP2，Rotor涉及OATP1B1/1B3。"
    ],
    [
      "Phototherapy是否修復UGT1A1？",
      "不是。光改變bilirubin異構形式，形成較易排出的光產物；是否需要照光須另依出生時數、胎齡與風險判定。"
    ]
  ],
  "readingIntro": "先把heme合成與分解畫成兩條不同路徑，再逐一加上區室、輔因子及運輸蛋白。膽紅素部分使用自編題檢查，歷屆精選集中在現有題庫可確認的heme相關題。",
  "figure": "<p>先依圖表追蹤反應，再將題目線索對應到關鍵步驟。</p>",
  "questions": [
    {
      "title": "01　成熟紅血球含heme，為何不能據此推論它能繼續合成heme？",
      "prompt": "<p>成熟紅血球含heme，為何不能據此推論它能繼續合成heme？</p>",
      "answer": "<p>完整合成需粒線體；成熟紅血球已失去粒線體。主要紅系合成發生在前驅細胞階段，既有含量與當下合成能力不同。</p>"
    },
    {
      "title": "02　用游離succinate取代succinyl-CoA描述ALA synthase反應，是否精確？",
      "prompt": "<p>用游離succinate取代succinyl-CoA描述ALA synthase反應，是否精確？</p>",
      "answer": "<p>不精確。實際受質為活化的succinyl-CoA與glycine；路徑名稱中的succinate可概括碳來源，但酵素受質題需寫完整。</p>"
    },
    {
      "title": "03　16個ALA最多對應幾個tetrapyrrole骨架的上游量？",
      "prompt": "<p>16個ALA最多對應幾個tetrapyrrole骨架的上游量？</p>",
      "answer": "<p>每個骨架需8 ALA，故對應2個；這是原料計數，未保證氧、鐵、酵素與運輸等條件足夠而實際形成2個heme。</p>"
    },
    {
      "title": "04　題目問速率限制酵素與末端插鐵酵素，為何不能都填ferrochelatase？",
      "prompt": "<p>題目問速率限制酵素與末端插鐵酵素，為何不能都填ferrochelatase？</p>",
      "answer": "<p>肝heme合成的典型控制點是ALAS1，末端插鐵才是ferrochelatase；限制詞決定答題層級。</p>"
    },
    {
      "title": "05　缺鐵時ALAS2與globin翻譯如何協調降低？",
      "prompt": "<p>缺鐵時ALAS2與globin翻譯如何協調降低？</p>",
      "answer": "<p>IRP結合ALAS2的5′ IRE降低其翻譯；heme不足也可經HRI使eIF2α磷酸化，抑制翻譯起始，避免globin與heme供應失衡。</p>"
    },
    {
      "title": "06　急性腹痛合併神經症狀，但沒有光敏感，能否排除AIP？",
      "prompt": "<p>急性腹痛合併神經症狀，但沒有光敏感，能否排除AIP？</p>",
      "answer": "<p>不能，AIP本來就不以光敏感為特徵。需要依發作時ALA/PBG等生化及後續資料判定，不能只靠尿色或皮膚有無變化。</p>"
    },
    {
      "title": "07　Heme oxygenase與ferrochelatase為何不能互換？",
      "prompt": "<p>Heme oxygenase與ferrochelatase為何不能互換？</p>",
      "answer": "<p>前者打開heme環並產biliverdin、釋鐵與CO，是降解；後者將Fe²⁺插入protoporphyrin IX，是合成末步。</p>"
    },
    {
      "title": "08　未結合型膽紅素升高，為何尿bilirubin可能仍陰性？",
      "prompt": "<p>未結合型膽紅素升高，為何尿bilirubin可能仍陰性？</p>",
      "answer": "<p>未結合型親水性低且大多與albumin結合，不易經腎絲球過濾；血中升高不等於必定在尿中測得膽紅素。</p>"
    },
    {
      "title": "09　膽道阻塞改善後direct bilirubin仍偏高，是否只能代表阻塞沒解除？",
      "prompt": "<p>膽道阻塞改善後direct bilirubin仍偏高，是否只能代表阻塞沒解除？</p>",
      "answer": "<p>不是唯一可能。與albumin共價結合的delta bilirubin可被計入direct fraction，清除較慢；仍須結合臨床與其他檢驗，不能單靠這個數值斷定原因。</p>"
    },
    {
      "title": "10　完全膽道阻塞時，為何可能尿bilirubin增加但尿urobilinogen下降？",
      "prompt": "<p>完全膽道阻塞時，為何可能尿bilirubin增加但尿urobilinogen下降？</p>",
      "answer": "<p>已結合膽紅素回流血中可進尿，但進腸道的膽紅素減少，腸菌形成urobilinogen的原料不足；二者來自不同步驟。</p>"
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
        "title": "原料與合成方向",
        "topic": "topic-2",
        "summary": "從胺基酸衍生物辨認合成原料，將bilirubin留在降解路徑。",
        "questions": [
          {
            "number": 95,
            "text": "95.在動物中,血基質(heme)生合成之主要前驅物之一是:\n A.色胺酸(tryptophan)\nB.酪胺酸(tyrosine)\n\nC.組胺酸(histidine)\nD.甘胺酸(glycine)\n",
            "regions": [
              {
                "page": 17,
                "rect": [
                  30.0,
                  739.56,
                  569.96,
                  806.92
                ]
              },
              {
                "page": 18,
                "rect": [
                  30.0,
                  28.0,
                  569.96,
                  81.84
                ]
              }
            ],
            "id": "111-2-1-95",
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
            "point": "原料與合成方向",
            "analysis": "D glycine正確，與succinyl-CoA在ALAS反應形成ALA。A tryptophan常連到serotonin等，B tyrosine連到catecholamine等，C histidine可形成histamine，均不是此處heme合成的典型起始胺基酸。",
            "trap": "Heme起點是Gly＋succinyl-CoA，不因hemoglobin有histidine配位便選His作主要起始原料。"
          },
          {
            "number": 93,
            "text": "93.下列何者不是血基質(heme)生合成的前驅物或中間產物?\nA.glycine\nB.succinyl-CoA\nC.δ-aminolevulinate\nD.bilirubin\n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  92.11,
                  570.0,
                  196.99
                ]
              }
            ],
            "id": "109-1-1-93",
            "year": 109,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/109/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=109020&c=301&s=11&q=1&verify=step1-20261013-109020-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=109020&y=2020",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/109/1/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=109020&c=301&s=11&q=1&verify=step1-20261013-109020-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "D"
            ],
            "point": "原料與合成方向",
            "analysis": "D bilirubin是heme降解後的膽色素，不是合成前驅物。A glycine與B succinyl-CoA為起始受質，C ALA為第一步產物與後續中間物。",
            "trap": "合成方向與拆解方向各畫一條，避免看到血液相關名詞就放在同一路。"
          },
          {
            "number": 46,
            "text": "46 \n在人體中,胺基酸不能作為下列何種生物分子生合成的前驅物? \nA腎上腺素(epinephrine) \nB紫質(porphyrin) \nC腺嘌呤(adenine) \n \nD氰鈷胺(cobalamin) \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  291.62,
                  570.22,
                  333.62
                ]
              }
            ],
            "id": "102-2-2-46",
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
            "point": "原料與合成方向",
            "analysis": "D cobalamin是人體無法自行完成生合成的維生素，故不符合題目在人體中的合成前驅物關係。A epinephrine由tyrosine衍生，B porphyrin使用glycine，C adenine所在purine環也可接受胺基酸供應的原子。",
            "trap": "題幹限定人體；不能把微生物合成B12的能力套到人身上。"
          }
        ]
      },
      {
        "id": "group-2",
        "title": "區室、控制點與翻譯協調",
        "topic": "topic-5",
        "summary": "第一步、最後一步與globin翻譯是不同問題。",
        "questions": [
          {
            "number": 36,
            "text": "36 \n在血基質(heme)的生合成反應過程中,下列何者為速率決定步驟(rate-limiting step)之酵素? \nFerrochelatase\nA\n \n \nBHeme oxygenase \nCdelta-aminolevulinic acid(δ-ALA)synthase \nDUDP-glucose dehydrogenase \n",
            "regions": [
              {
                "page": 5,
                "rect": [
                  30.0,
                  83.43,
                  570.22,
                  136.53
                ]
              }
            ],
            "id": "104-1-2-36",
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
            "point": "區室、控制點與翻譯協調",
            "analysis": "C ALA synthase為典型速率限制控制點。A ferrochelatase負責末端插鐵；B heme oxygenase屬降解；D UDP-glucose dehydrogenase可參與UDP-glucuronic acid形成相關代謝，不是heme合成速率限制酵素。",
            "trap": "Synthase進入合成，oxygenase打開heme環，chelatase插鐵。"
          },
          {
            "number": 94,
            "text": "94.下列有關琥珀酸–甘胺酸路徑(succinate-glycine pathway)的敘述,何者錯誤? \nA.此路徑作用的第一個酵素為δ-aminolevulinic acid synthase(ALA synthase) \nB.血基質(heme)中的碳原子來自琥珀酸(succinate)及甘胺酸(glycine) \nC.需要磷酸吡哆醛(pyridoxal phosphate)參與作用 \nD.血基質(heme)合成在細胞質中完成 \n",
            "regions": [
              {
                "page": 17,
                "rect": [
                  30.0,
                  501.76,
                  570.32,
                  630.76
                ]
              }
            ],
            "id": "112-1-1-94",
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
            "point": "區室、控制點與翻譯協調",
            "analysis": "D錯在說heme合成在胞質中完成；起點及末段需要粒線體。A第一步ALAS與C需PLP正確。B以succinate–glycine路徑的名稱描述碳來源，精確反應受質應寫succinyl-CoA，不是游離succinate直接反應。",
            "trap": "以官方D採計，同時把B的簡稱補成完整生化受質，避免學成錯誤反應式。"
          },
          {
            "number": 84,
            "text": "84.在網狀紅血球(reticulocytes)缺乏鐵時會抑制血紅素(hemoglobin)之合成,其作用機轉主要是: \n \nA.對cAMP responsive element binding protein(CREBP)進行磷酸化 \nB.對steroid responsive element binding protein(SREBP)進行磷酸化 \nC.對真核起始因子2(eIF2)進行磷酸化 \nD.對真核起始因子4E(eIF4E)進行磷酸化 \n",
            "regions": [
              {
                "page": 12,
                "rect": [
                  30.0,
                  695.05,
                  570.0,
                  807.0
                ]
              }
            ],
            "id": "107-2-1-84",
            "year": 107,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/107/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=107100&c=301&s=11&q=1&verify=step1-20261013-107100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=107100&y=2018",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/107/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=107100&c=301&s=11&q=1&verify=step1-20261013-107100-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "C"
            ],
            "point": "區室、控制點與翻譯協調",
            "analysis": "C eIF2的α次單元磷酸化符合heme不足時HRI介導的翻譯起始抑制。A CREB與B SREBP不是本題這條紅系heme感測機制；D eIF4E亦非此處HRI的典型受質。缺鐵可先使heme不足，不能省略成鐵直接磷酸化eIF2。",
            "trap": "ALAS2的5′ IRE與HRI–eIF2α是兩種協調方式，題目這裡問後者。"
          }
        ]
      },
      {
        "id": "group-3",
        "title": "結構比較：heme與含heme蛋白",
        "topic": "topic-1",
        "summary": "以配位與分子類別銜接前面的蛋白質章節。",
        "questions": [
          {
            "number": 26,
            "text": "26.當氧分子與血紅素(hemoglobin)結合時,此時血基質(heme)中Fe2+上的兩個開放配位鍵(open coordination bonds)與\n下列何組物質結合? \n \nA.一水分子與一胺基酸的側鏈 \nB.一氧分子與一胺基酸的側鏈 \nC.一氧分子與一水分子 \nD.兩個氧分子 \n",
            "regions": [
              {
                "page": 3,
                "rect": [
                  30.0,
                  388.72,
                  570.0,
                  471.41
                ]
              }
            ],
            "id": "105-2-2-26",
            "year": 105,
            "session": 2,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/105/2/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=105100&c=301&s=66&q=1&verify=step1-20261013-105100-301-66-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=105100&y=2016",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/105/2/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=105100&c=301&s=66&q=1&verify=step1-20261013-105100-301-66-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "B"
            ],
            "point": "結構比較：heme與含heme蛋白",
            "analysis": "B一個氧分子與一個胺基酸側鏈正確：四個配位位置來自porphyrin氮，第五個為proximal histidine，第六個可結合O₂。A沒有反映題幹已結氧的狀態；C把histidine換成水；D誤認一個鐵可同時以這兩個位置攜帶兩個O₂。",
            "trap": "一個heme結合一個O₂；distal histidine協助穩定但不是第五個直接鐵配位鍵。"
          },
          {
            "number": 94,
            "text": "94.下列何者為三胜肽(tripeptide)?\n A.阿斯巴甜(aspartame)\n\nB.血清素(serotonin)\nC.血基質(heme)\nD.穀胱甘肽(glutathione)\n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  752.86,
                  569.96,
                  806.92
                ]
              },
              {
                "page": 15,
                "rect": [
                  30.0,
                  28.0,
                  569.96,
                  90.71
                ]
              }
            ],
            "id": "110-1-1-94",
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
            "point": "結構比較：heme與含heme蛋白",
            "analysis": "D glutathione由glutamate、cysteine及glycine組成，為tripeptide。A aspartame屬二胜肽衍生物；B serotonin是tryptophan衍生胺；C heme是含鐵tetrapyrrole而不是胜肽。這是跨章分子結構比較題。",
            "trap": "Heme作為蛋白的輔基，不代表heme自己就是蛋白質或胜肽。"
          }
        ]
      },
      {
        "id": "group-4",
        "title": "酵素阻塞與porphyria線索",
        "topic": "topic-6",
        "summary": "把鉛干擾與遺傳合成缺陷放回反應位置。",
        "questions": [
          {
            "number": 78,
            "text": "78.下列關於鋅離子(zinc ion)的敘述,何者錯誤? \n \nA.鋅離子可與leucine結合後形成leucine zipper,為RNA聚合酶的主要輔助因子 \nB.味覺素(gustin)為含鋅離子的唾液蛋白質,缺乏時會抑制味蕾發育與味覺敏銳度 \nC.鋅離子參與T細胞與單核球分泌細胞素(cytokines)的過程,缺乏時動物的免疫力會下降 \nD.在鉛中毒中,鉛會取代δ-aminolevulinate dehydratase中的鋅離子,會抑制血基質(heme)的合成 \n",
            "regions": [
              {
                "page": 12,
                "rect": [
                  30.0,
                  149.17,
                  570.0,
                  254.17
                ]
              }
            ],
            "id": "107-1-1-78",
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
            "point": "酵素阻塞與porphyria線索",
            "analysis": "A錯把leucine zipper與zinc finger混淆；leucine zipper主要依heptad中疏水殘基協助二聚化，不是鋅與leucine配位形成的結構。B含鋅gustin與味覺、C鋅與免疫功能、D鉛干擾含鋅ALA dehydratase並抑制heme合成，符合此題基本比較。",
            "trap": "本章重點為D的ALAD位置；看到蛋白結構題，分清zinc finger與leucine zipper。"
          },
          {
            "number": 44,
            "text": "44 \n一位60 歲病患因腹部劇痛、輕度癱瘓被送來急診,尿液檢查呈酒紅色,基因分析發現:參與血紅素\n(heme)合成的酵素發生錯義突變(missense mutation)。下列何者是最可能的診斷? \nA苯酮尿症(phenylketonuria) \nB楓糖漿尿症(maple syrup urine disease) \nC黑尿症(alkaptonuria) \nD紫質症(porphyria) \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  216.39,
                  570.22,
                  270.39
                ]
              }
            ],
            "id": "101-2-2-44",
            "year": 101,
            "session": 2,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/101/2/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=101110&c=101&s=0102&q=1&verify=step1-20261013-101110-101-0102-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=101110&y=2012",
            "answers": [
              "D"
            ],
            "answerPdf": "exams/101/2/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=101110&c=101&s=0102&q=1&verify=step1-20261013-101110-101-0102-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "D"
            ],
            "point": "酵素阻塞與porphyria線索",
            "analysis": "D porphyria最符合heme合成酵素缺陷、腹痛及神經症狀的組合。A PKU涉及Phe處理，B MSUD涉及BCAA氧化脫羧，C alkaptonuria涉及homogentisate降解。尿色可以提供線索，但不足單獨確診或決定porphyria亞型。",
            "trap": "先按路徑選疾病類別；要判定AIP等精確亞型，仍需酵素／生化等更多資訊。"
          }
        ]
      }
    ]
  }
});
