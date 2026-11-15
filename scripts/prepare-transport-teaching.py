"""Original retrieval prompts and source-checked exam commentary for chapters 15–17."""
import json
from pathlib import Path
p=Path(__file__).resolve().parent.parent
spec=[]
def pairs(s): return [line.split('|',1) for line in s.strip().splitlines()]
def rows(s):
 out=[]
 for line in s.strip().splitlines():
  id,answers,analysis,trap=line.split('|');out.append([id,answers.split(','),analysis,trap])
 return out
def add(n,slug,title,summary,source,recalls,practice,groups,diagram,links=[]):
 spec.append(dict(number=str(n),id=slug,title=title,summary=summary,sources=source,intro='從分子骨架及所在位置開始，再追蹤器官之間的流向；每節閉卷回想，最後以原題核對機轉與題幹限制。',recalls=pairs(recalls),practice=pairs(practice),groups=groups,diagrams=diagram,links=links))
add(15,'complex-lipids','複雜脂質與儲積症：從膜骨架到訊息傳遞','分清甘油與鞘氨醇骨架，串起TAG、磷脂、訊息傳遞與溶小體儲積症。','Harper’s Illustrated Biochemistry, 31st ed., Ch. 24 Metabolism of Acylglycerols & Sphingolipids（印刷頁229–235），搭配膜及訊息傳遞章節；疾病分類補充GeneReviews。',
'''Sphingomyelin是磷脂，為何不是glycerophospholipid？|它含磷酸頭部，但骨架是sphingosine衍生的ceramide，不是glycerol。
脂肪細胞如何取得glycerol-3-P？|主要從DHAP還原取得；glycerol kinase活性較低，不能簡化為所有脂肪細胞完全沒有此酵素。
Phosphatidate如何分流到TAG？|先去磷酸形成DAG，再由DGAT接上第三條脂醯鏈；另可走磷脂合成。
ATGL、HSL與LPL分別在哪一層工作？|ATGL偏向脂滴TAG第一步，HSL偏向DAG；LPL在微血管腔面處理循環脂蛋白的TAG。
合成磷脂時CDP可以活化哪一側？|可以活化頭部如CDP-choline，或活化DAG形成CDP-DAG；需辨路徑，不是一律活化同一邊。
Cardiolipin與PAF各有何結構特色？|Cardiolipin有四條脂醯鏈且富於粒線體內膜；PAF的sn-1為alkyl ether，sn-2為短acetyl。
PLA2和PLC切完留下什麼？|PLA2釋出sn-2脂肪酸與lysophospholipid；PLC切頭部相關磷酸鍵，PIP2可產DAG與IP3。
IP3與DAG如何分工？|IP3促使ER釋Ca²⁺，DAG留在膜中參與PKC活化；不要換成cAMP與PKA。
Ceramide的脂肪酸以什麼鍵接上？|以amide鍵接到sphingosine的胺基，與甘油脂的典型ester鍵不同。
GPI錨定的蛋白在膜哪一面？|細胞膜外側；與細胞質側的Ras prenylation不同。
Fabry與Gaucher分別堆積什麼？|Fabry為α-galactosidase A缺陷與Gb3相關，X-linked；Gaucher為glucocerebrosidase缺陷與glucosylceramide相關。
Niemann–Pick A/B和C為何不能混背？|A/B屬acid sphingomyelinase deficiency；C涉及NPC1/NPC2脂質運輸，不能一律寫成同一個水解酵素缺陷。''',
'''把sphingomyelin放在甘油磷脂表中，錯在哪裡？|分類必須同時看骨架與頭部；它有磷酸但骨架為ceramide，應歸鞘磷脂。
脂肪細胞糖解下降，為何TAG再酯化可能受影響？|DHAP供glycerol-3-P的通量可能下降，限制甘油骨架供應；glyceroneogenesis等途徑也能補充，不能認定完全停止。
腸道重組TAG一定先從glycerol-3-P開始嗎？|不一定。腸細胞可利用吸收的monoacylglycerol再加脂醯基，形成DAG、TAG。
在血管腔面水解CM的TAG，答案為HSL可以嗎？|不可以。此處是LPL；HSL主要參與細胞內脂滴動員，且對DAG水解重要。
為何PAF不能直接當成一般長鏈雙脂醯PC？|PAF的sn-1是ether-linked alkyl，sn-2是acetyl；鍵結與鏈長都不同。
PLA2釋出arachidonate後是否立刻等於已形成prostaglandin？|沒有，尚需COX等後續路徑；釋出前驅物與製造eicosanoid是不同步驟。
PLC活化後胞質Ca²⁺降低，哪一步寫反？|IP3促使ER釋Ca²⁺，典型早期反應是胞質Ca²⁺上升，而非下降。
GPI與farnesyl修飾是否把蛋白放在同一膜面？|不是。GPI錨定在膜外側，Ras的prenylation協助細胞質側定位。
Cherry-red spot是否可單獨確診Tay–Sachs？|不能。其他儲積症亦可能出現；需結合神經退化、肝脾表現與酵素／基因資料，不能只靠眼底一項。
女病人能否排除Fabry？|不能。X-linked不等於女性不會發病；異型合子女性的表現範圍可很廣。''',
[[1,'骨架、特殊磷脂與膜位置','先看骨架與鍵結，再判斷膜面及所在胞器。',rows('''114-2-1-89|B|B phosphatidylcholine以甘油為骨架。A膽固醇為固醇；C ceramide與D sphingomyelin以鞘氨醇相關骨架為基礎。|有磷酸頭部不等於有甘油骨架。
107-2-1-92|D|D錯：PAF的sn-2為短acetyl，不應說比具有較長疏水鏈的plasmalogen更不易溶於水。A醚甘油磷脂、B sn-1 alkyl ether、C sn-2 acetate皆符合典型PAF。|比較鍵結與鏈長，不只看到ether便全部視為相同。
107-1-1-92|C|C GPI可共價錨定蛋白於細胞膜外側。A stearate、B sphingosine與D未加糖的PI，均不是題目所指的典型外側蛋白錨。|GPI有醣橋接蛋白；不要只選PI。
106-2-1-91|C|C cardiolipin主要富集於粒線體內膜，在題目指定的肝細胞plasma membrane中相對少。A PC、B鞘脂及D膽固醇皆為細胞膜的重要成分。|先讀plasma membrane，別把所有細胞內膜混成一張膜。
115-2-1-89|C|C TAG主要是中性儲能脂質，不是脂筏典型主要成分。A鞘醣脂、B膽固醇及D特定蛋白參與脂筏組成。|脂筏是膜域，不是脂滴。''')],
[8,'PIP2切割與第二訊息','用產物所在位置推導PKC與Ca²⁺反應。',rows('''105-2-2-47|C|C錯：DAG對應PKC，並非直接活化PKA。A PLC切PIP2、B產IP3與DAG、D IP3促ER釋Ca²⁺皆符合此Gq相關路徑。|cAMP→PKA；DAG→PKC，兩組成對記。
108-2-1-96|D|D把方向寫反；IP3促ER釋出Ca²⁺，使胞質Ca²⁺上升。A PIP2受質、B DAG/PKC、C由G蛋白相關受體啟動符合題幹；另有RTK啟動PLCγ，不代表所有PLC都只受GPCR控制。|依題幹說典型機轉，保留PLC isoform差異。''')],
[11,'儲積症：堆積物、區室與分型','用缺陷位置配堆積物，遇爭議題保留官方給分方式。',rows('''112-1-1-93|C|C錯在endoplasmic reticulum；Tay–Sachs的典型缺陷為溶小體hexosaminidase A，影響GM2分解。A脂質儲積症、B神經退化、D lysosomal Hex A缺失均符合。|合成與降解位置不必相同，儲積症先找lysosome。
113-1-1-91|C|C sphingolipid正確，Gaucher涉及glucosylceramide分解。A glycogen屬其他儲積病；B choline不是此病典型堆積物；D N-acetylglutamate連結尿素循環。|Gaucher→glucocerebrosidase→glucosylceramide。
102-2-2-44|*|官方採計為一律給分，不能把某一選項當成唯一官方正解。Niemann–Pick A/B為acid sphingomyelinase缺乏，C為NPC相關脂質運輸障礙並可涉及游離膽固醇堆積；題幹未清楚分型。這是機轉與題幹限制分析，不宣稱是官方更正理由。|A/B與C拆開記；以官方答案PDF核對給分，勿從本題推全部Niemann–Pick都只堆膽固醇。''')]],
[[1,'complex-lipid-branches.svg','脂質分類以骨架與頭部分流；磷脂不是單一骨架']],
[['GeneReviews：Acid Sphingomyelinase Deficiency','https://www.ncbi.nlm.nih.gov/books/NBK1370/'],['GeneReviews：Niemann-Pick Disease Type C','https://www.ncbi.nlm.nih.gov/books/NBK1296/'],['GeneReviews：HEXA Disorders','https://www.ncbi.nlm.nih.gov/books/NBK1218/'],['GeneReviews：Fabry Disease','https://www.ncbi.nlm.nih.gov/books/NBK1292/']])
add(16,'lipoprotein-transport','脂蛋白運輸：把餐後與空腹的脂質送對地方','以器官流向分開外源、內源與逆向膽固醇運輸，理解apo、受體、脂解酵素及遺傳疾病。','Harper’s Illustrated Biochemistry, 31st ed., Ch. 25 Lipid Transport & Storage（印刷頁236–248）；FH基因機轉補充GeneReviews。',
'''脂蛋白核心與表面分別裝什麼？|核心以TAG及CE等疏水脂質為主；表面單層磷脂、游離膽固醇與apolipoprotein接觸水相。
HDL密度高是否表示每顆含最多克蛋白？|不是。重點是蛋白相對脂質的比例高，不是單顆絕對蛋白量最多。
apoB-48與B-100是兩個不同基因嗎？|來自同一APOB基因，腸道RNA editing產生較短B-48；不是先做B-100再切掉一半。
長鏈膳食TAG到循環的主要顆粒及路線？|腸細胞重組後以apoB-48及MTP協助形成CM，先入淋巴再入循環。
LPL與apoC-II配合後，CM剩下什麼？|TAG被水解供組織利用，形成相對富含膽固醇的remnant，再藉apoE相關辨識由肝攝取。
VLDL如何與IDL、LDL相連？|肝分泌VLDL，去TAG後成IDL；部分IDL入肝，部分進一步變LDL，apoB-100持續保留。
LDL內吞後受體與顆粒一起消失嗎？|不是，LDLR可回收；顆粒脂質及蛋白經內吞／溶小體系統處理。
LCAT與ACAT的脂醯基來源？|LCAT使用PC的脂醯基，ACAT／SOAT使用fatty acyl-CoA；前者血漿脂蛋白相關，後者細胞內。
CETP是否直接水解膽固醇酯？|不是，它參與CE與TAG等在脂蛋白間的轉移交換，不是lipase。
LPL缺陷與LDLR缺陷主要升高哪類顆粒？|LPL缺陷影響TAG-rich顆粒清除，CM明顯；LDLR缺陷以LDL清除不良及LDL-C增加為主。
空腹FFA離開脂肪組織後由誰運送？|主要與albumin結合；肝臟可將部分再酯化並以VLDL輸出，不是直接用CM運送FFA。
把三條運輸線用起點講出來？|腸道CM運送外源脂質；肝VLDL運送內源TAG；HDL相關途徑參與周邊膽固醇回到肝的運輸。''',
'''為什麼脂蛋白不是由磷脂雙層包住水袋？|其核心為疏水脂質，不是水腔，表面以磷脂單層使親水端朝外，與細胞膜雙層不同。
餐後腸道顆粒上的apoB應選哪一個？|B-48；肝VLDL及後續LDL為B-100。B-48不是LDLR的典型B-100辨識片段。
CM變小是否必定變成LDL？|不是，CM走remnant入肝；VLDL→IDL→LDL是另一條顆粒轉換線。
脂肪細胞HSL活化可以取代血中LPL缺乏嗎？|不能。兩者工作位置與受質池不同；增加細胞內動員無法直接修補CM的血管表面水解。
LDLR完全不能回收，會對血中LDL清除造成什麼影響？|可用受體減少，清除能力下降，LDL可能升高；需區分受體合成、運送、結合、內吞及回收等缺陷。
LCAT形成CE時，另一個脂質產物是什麼？|PC交出脂醯基後成為lysophosphatidylcholine；不是再釋出一個TAG。
新生HDL是否一開始就裝滿膽固醇酯？|不宜這樣描述。新生顆粒較缺脂，經膽固醇取得及LCAT酯化等成熟步驟才累積CE核心。
HDL-C高是否足以證明逆向運輸每一步都正常？|不足。濃度是池中含量，不能單獨代表流量、顆粒功能或每個轉運步驟。
LDLR正常蛋白過度表現會是典型FH成因嗎？|不是。典型受體相關FH是有效LDL清除不足；增加功能正常受體通常有利清除，另有APOB與PCSK9等基因型。
肝臟脂肪酸氧化增加，能否斷定肝TAG一定下降？|不能。肝TAG還受FFA流入、合成、再酯化與VLDL輸出等影響，必須看總收支。''',
[[3,'運輸來源與apo辨識','把小腸、肝臟及顆粒保留的apo分開。',rows('''99-2-2-42|D|D錯：肝源TAG主要由VLDL輸出，CM來自腸道。A運脂功能、B apoC-II支持LPL皆成立；C應理解為HDL蛋白質比例最高，不是單顆蛋白絕對量最多。|肝VLDL、腸CM；密度比較看比例。
105-1-2-42|A|A apoB-100是LDL與LDLR辨識的重要配體。B apoC-I、C apoC-II及D LPL不是此LDL受體攝取的主要配體；C-II與LPL主要連到TAG水解。|B-100接受體；C-II幫LPL。
106-1-2-43|D|D錯在肝臟把TAG包成CM；肝臟典型輸出為VLDL。A FFA供其他組織、B albumin運送FFA、C肝可再酯化為TAG皆符合基本機轉；脂肪肝仍須看整體收支。|空腹FFA進肝可氧化也可再酯化，不能只准一條路。
115-1-1-95|*|官方採計為一律給分。CM確實主要由腸細胞形成，但其TAG先供周邊組織，殘粒再到肝；B HDL、C IDL及D apoB-100也不能直接當成題幹完整路徑的替代答案。此處說明生理流程，不推測官方更正理由。|別將「腸道CM→周邊LPL→殘粒入肝」縮成只向肝送TAG。''')],
[5,'LPL與細胞內脂解','同樣切TAG，位置不同就不是同一個酵素。',rows('''98-2-2-34|C|C LPL缺陷可造成familial chylomicronemia；A pancreatic lipase主要在腸腔，B endothelial lipase與本題典型LPL途徑不同，D HMG-CoA reductase控制膽固醇合成。|FCS也可能由其他相關基因造成，本題選項指向LPL，並非所有病例都是同一基因。
99-1-2-47|B|B錯：循環CM與VLDL的TAG由LPL處理，非HSL。A CM富TAG、C cAMP調控脂滴動員、D脂肪酸在肌肉供能符合題幹典型情境。|血管外表面清顆粒與脂肪細胞內動員要分開。''')],
[7,'LDL受體與HDL成熟','將官方採計與精確生理敘述各自列清楚。',rows('''100-2-2-43|B|B正確，肝細胞可取得LDL膽固醇並用於膽酸／膽鹽合成。A LDLR不只在肝；C LDL相對富膽固醇而非TAG為主；D主要由VLDL/IDL代謝而來，不是典型直接肝分泌顆粒。|肝直接分泌VLDL，循環加工形成LDL。
101-1-2-43|B,D,BD|官方接受B、D或BD，原樣保留。B的apoB-100與LDLR結合機轉明確；D對剛釋出的HDL寫大量CE並不精確，新生HDL需經取得膽固醇及LCAT酯化成熟。A apolipoprotein不結合脂質及C LDL以TAG為主皆錯。|官方給分不等於D適合當無條件的教材定義；新生與成熟HDL分開。''')],
[10,'遺傳性高膽固醇血症','清除不足的關鍵在有效受體功能。',rows('''101-2-2-42|D|D LDLR基因變異是典型原因。A飲食不是FH遺傳病的定義；B HMG-CoA reductase不是本題典型FH基因；C正常LDLR過量不符合清除不足。其他FH機轉也包括APOB、PCSK9等。|把遺傳缺陷與後天飲食因素分開。
112-1-1-92|A|A最不正確：功能正常的LDLR增加通常有利清除。B LDL升高、C LDLR基因突變、D受體運送至膜受阻皆可與典型FH機轉相符。|有合成受體不保證受體能抵達膜上並完成工作。''')]],
[[12,'lipoprotein-routes.svg','外源、內源與HDL相關運輸：顆粒去向不可混線']],
[['GeneReviews：Familial Hypercholesterolemia','https://www.ncbi.nlm.nih.gov/books/NBK174884/']])
add(17,'cholesterol-bile-acids','膽固醇與膽酸：合成、感測與腸肝循環','由六個mevalonate的碳帳，推導SREBP回饋、膽固醇收支與膽酸的吸收及排出功能。','Harper’s Illustrated Biochemistry, 31st ed., Ch. 26 Cholesterol Synthesis, Transport, & Excretion（印刷頁249–262）。',
'''Free cholesterol與CE的極性及位置有何不同？|游離膽固醇保留羥基，可參與膜表面；酯化後更疏水，適合脂滴或脂蛋白核心。
為何粒線體HMG-CoA synthase不選膽固醇合成？|題目指定粒線體型，對應酮體生成；膽固醇路徑的HMG-CoA synthase為胞質型。
HMG-CoA reductase用哪種還原力？|使用2 NADPH將HMG-CoA還原成mevalonate，催化區朝ER胞質側。
一個膽固醇需要幾個mevalonate與acetyl-CoA？|6 mevalonate相當於18 acetyl-CoA；先形成六個5C單位與30C骨架，再修飾為27C膽固醇。
Ras的farnesyl接在哪裡？|典型接在C端CaaX motif的cysteine，不是N端胺基；farnesyl為15C isoprenoid。
AMPK對HMG-CoA reductase的典型作用？|磷酸化並抑制，降低耗能的膽固醇合成，不能用磷酸化一律活化作口訣。
SREBP從ER到核內，中途發生什麼？|經SCAP相關運輸至Golgi，由S1P、S2P切割蛋白，釋出轉錄調節片段入核。
ACAT與LCAT都酯化膽固醇，差在哪？|ACAT在細胞內用fatty acyl-CoA；LCAT在血漿脂蛋白相關環境使用PC的脂醯基。
Statin為何可使LDLR表現增加？|合成下降使肝細胞膽固醇訊號降低，透過SREBP等回饋增加攝取能力，與抑制合成並不矛盾。
CYP7A1與膽酸兩親性如何連起來？|CYP7A1是經典路徑的重要7α羥化步驟；後續多步形成兼有親水／疏水表面的膽酸。
膽酸回收的主要腸段與回肝血管？|末端迴腸是主動回收重要位置，經門脈回肝；與CM走淋巴不同。
膽酸如何與脂溶性維生素相連？|協助混合微膠粒形成與脂質吸收，因而支持ADEK吸收；不是所有水溶性維生素的通用吸收因子。''',
'''以27÷6計算mevalonate需求為何錯？|mevalonate形成活化5C單位會失碳，30C骨架到27C也會失碳；實際需要6個mevalonate。
六個mevalonate轉成六個IPP，這段耗幾個ATP？|每個3 ATP，合計18 ATP；這只是該段，不是任意碳源到膽固醇的全部能量帳。
HMG-CoA synthase、reductase與lyase如何一句分開？|Synthase組成HMG-CoA；reductase通向mevalonate；粒線體lyase通向acetoacetate等酮體路徑產物。
能量不足時AMPK活化，為何合成不宜加速？|膽固醇合成消耗ATP與NADPH；AMPK抑制HMG-CoA reductase可降低合成負擔。
高膽固醇時SCAP–SREBP主要留在哪裡？|較易由Insig相關機制保留於ER，減少到Golgi的蛋白切割與核內轉錄片段產生。
SREBP表現增加就代表statin無效嗎？|不是。回饋提高基因表現與藥物抑制酵素催化可以同時存在，不能把mRNA等同實際通量。
NPC1L1與NPC1的名字能互換嗎？|不能。NPC1L1涉及腸道膽固醇吸收；NPC1與NPC2涉及溶小體脂質運輸，缺陷與NPC疾病相關。
膽酸完全非極性，是否更適合促進脂質吸收？|不是，必須具有兩親性才能處理水相與脂質界面；完全疏水不能提供相同功能。
Cholic acid與chenodeoxycholic acid經細菌處理分別形成什麼？|典型7α-dehydroxylation分別形成deoxycholic acid與lithocholic acid，屬secondary bile acids。
肝分泌100單位膽酸是否就淨排出100單位？|不一定，大部分可經腸肝循環回收；淨排出須看糞便流失等真正離開身體的部分。''',
[[4,'碳數、同名酵素與藥物靶點','先界定區室與碳流，再辨識酵素完整名稱。',rows('''96-1-2-47|D|D的6個mevalonate才足以提供六個5C單位，形成30C骨架後修飾成27C膽固醇。A 3、B 4、C 5皆不足此標準路徑。|不要用27直接除以mevalonate的6C。
101-1-2-42|B|B錯在5個，應為6個mevalonate。A acetyl-CoA是碳源，C HMG-CoA reductase為關鍵酵素，D膽酸、維生素D及estrogen與膽固醇衍生路徑相關。|先記6×5＝30，再到27。
100-1-2-45|C|C HMG-CoA reductase為statin靶點。A synthase與B lyase雖有相似名稱，功能不同；D isomerase不是本題標準靶酵素。|Statin要背全名到reductase。
100-2-2-40|C|C酮體生成正確，關鍵是題幹指定肝粒線體。A膽固醇合成使用胞質相關HMG synthase；B抑制脂肪酸合成與D糖質新生不是此酵素直接主要功能。|先圈出粒線體，避免只看HMG。''')],
[7,'SREBP與細胞膽固醇恆定','區分蛋白切割、轉錄與酯化。',rows('''102-1-2-31|D|D錯：SREBP家族也涉及脂肪酸等脂質合成調控。A可理解為ER相關運輸後經Golgi切割產生活性片段；B LDLR表現增加及C血LDL下降符合statin的典型作用鏈。|ER不是直接把完整膜蛋白丟進核；中間有Golgi與蛋白切割。
104-1-2-40|B|B錯：活化涉及蛋白質的受控切割，不是切下連結脂肪酸。A前驅物在ER、C活性片段入核、D作轉錄因子調控合成基因均符合機轉。|SREBP是轉錄因子前驅物，不是被切開的膜脂。
102-1-2-43|C|C把攝取葡萄糖直接促進合成當作膽固醇恆定的直接回應，表達不正確。A HMG-CoA reductase、B過多膽固醇可酯化儲存、D降低LDLR表現皆符合典型調控。葡萄糖碳仍可間接經acetyl-CoA供合成，不能反推成碳源完全無關。|區分間接碳來源與直接恆定調節機制。''')],
[5,'Isoprenoid與蛋白定位','共用前驅物不等於先合成膽固醇再拆回來。',rows('''108-2-1-82|C|C錯在N端；Ras典型farnesylation位於C端CaaX中的cysteine。A某些突變與致癌相關、B修飾支援膜定位、D farnesyl與膽固醇共用上游isoprenoid前驅物均符合。|Farnesyl是15C分支；不是把整顆膽固醇接到Ras。''')],
[10,'膽酸的兩親性與吸收功能','用水相／脂相界面推理，避免把所有維生素混在一起。',rows('''111-1-1-97|C|C錯在水溶性；膽酸的重要吸收連結是脂質及脂溶性ADEK。A協助小腸脂質處理、B肝細胞合成、D膽固醇為前驅物均正確。|膽酸協助消化吸收但本身不是lipase。
113-1-1-90|B|B錯在非極性；膽鹽是兩親性分子。A 7α-hydroxylase為經典合成路徑速率限制步驟，C涉及P450，D與膽固醇收支相關均符合此題範圍。|先背amphipathic；CYP7A1的經典路徑勿擴張成唯一可能路徑。''')]],
[[11,'cholesterol-bile-cycle.svg','膽酸合成、腸肝回收與糞便排出：回收量不等於新合成量']])
(p/'scripts/transport-teaching.json').write_text(json.dumps(spec,ensure_ascii=False,indent=2)+'\n')
