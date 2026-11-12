"""Audited learning prompts and past-question explanations for chapters 12–14."""
import json
from pathlib import Path
p=Path(__file__).resolve().parent.parent
spec=[]
def chapter(n,slug,title,summary,source,recalls,practice,groups,diagrams,links=[]):
 spec.append(dict(number=str(n),id=slug,title=title,summary=summary,sources=source, intro='先讀機轉與碳數，再用表格核對輔酶、區室及能量；每節閉卷回想，最後以歷屆題檢查能否處理條件改變。',recalls=recalls,practice=practice,groups=groups,diagrams=diagrams,links=links))
def row(id,ans,analysis,trap):return [id,[ans],analysis,trap]
chapter(12,'pentose-hexose','磷酸戊糖與其他單醣：還原力、碳骨架與疾病','從NADPH與核糖需求，理解PPP分流、紅血球抗氧化，以及果糖與半乳糖的代謝阻塞。','Harper’s Illustrated Biochemistry, 31st ed., Ch. 20 The Pentose Phosphate Pathway & Other Pathways of Hexose Metabolism（印刷頁182–194）；HFI補充核對GeneReviews。',[
 ['PPP為何不以ATP產量評價功能？','它直接供NADPH與五碳糖，支援還原反應、抗氧化與核苷酸合成；本身不直接產ATP。'],
 ['一次氧化段的碳與電子帳為何？','每G6P形成1 ribulose-5-P、1 CO₂、2 NADPH；六碳少一碳，兩次dehydrogenase各產NADPH。'],
 ['Transketolase與transaldolase如何分辨？','前者搬二碳且需TPP，後者搬三碳；總反應3個五碳糖⇌2 F6P＋1 GAP，非氧化段不直接產NADPH。'],
 ['只需大量ribose時，必須先多產NADPH嗎？','不必；可從F6P與GAP反向走可逆非氧化段取得五碳骨架，不是倒轉不可逆氧化段。'],
 ['NADPH使用增加如何回報PPP？','NADP⁺增加提供受質需求，NADPH回饋下降，支持G6PD通量增加。'],
 ['NADPH如何間接清除過氧化物？','NADPH供glutathione reductase再生GSH，GSH再供glutathione peroxidase處理過氧化物。'],
 ['PK與G6PD缺乏都溶血，缺的是同一件事嗎？','不是；PK影響糖解ATP，G6PD影響NADPH與抗氧化再生。成熟紅血球仍有PPP但沒有粒線體供能。'],
 ['肝臟果糖入口為何繞過PFK-1？','Fructokinase產F1P，aldolase B切成DHAP及glyceraldehyde，後者磷酸化成GAP；入口在PFK-1之後。'],
 ['為何aldolase B缺乏比fructokinase缺乏嚴重？','前一步仍投入ATP並困住磷酸於F1P，干擾供糖及能量；fructokinase缺乏較少形成此困住中間物。'],
 ['GALT反應的兩個受質與兩個產物？','Galactose-1-P＋UDP-glucose→G1P＋UDP-galactose；再由GALE使UDP糖互轉。'],
 ['Galactose造成白內障應想到哪個polyol？','Galactitol；glucose經aldose reductase形成的則是sorbitol，不可互換名稱。'],
 ['不能合成維生素C是否表示不能形成glucuronate？','不是；人體缺的是後段gulonolactone oxidase，仍可形成UDP-glucuronate供結合及其他用途。']
],[
 ['G6P一次通過PPP氧化段後，碳數與NADPH各是多少？','1個五碳ribulose-5-P、1 CO₂及2 NADPH；lactonase步驟是水解，不額外產NADPH。'],
 ['3個五碳糖重排後得到幾個F6P與GAP？','2 F6P＋1 GAP；15C＝12C＋3C。若算成3 F6P就憑空多出3C。'],
 ['維生素B1不足是否直接阻斷PPP兩次產NADPH的酵素？','兩次產NADPH的dehydrogenase不以TPP作其典型輔因子；TPP直接對應非氧化段transketolase，整體碳流仍可能間接受影響。'],
 ['細胞需要核糖但不需要額外NADPH，如何取材？','由糖解中間物F6P及GAP反向走可逆碳重排形成五碳糖，無須強迫先做氧化段。'],
 ['GSH用完後由哪個酵素再生？','Glutathione reductase使用NADPH把GSSG還原成GSH；peroxidase是使用GSH處理過氧化物的一層。'],
 ['紅血球以PPP供ATP，又以TCA供NADPH，這句哪裡錯？','兩處皆錯：紅血球主要以糖解供ATP、PPP供NADPH；成熟紅血球無粒線體，不能運作完整TCA。'],
 ['一個fructose走典型肝路徑至兩個lactate，淨ATP？','Fructokinase與triokinase各耗1 ATP，兩個三碳走後半糖解產4 ATP，淨2 ATP。'],
 ['吃含蔗糖食物後低血糖與肝臟異常，為何不能只寫果糖吸收不良？','需區分HFI的細胞內aldolase B阻塞與腸道吸收問題；HFI會F1P堆積、ATP及磷酸受困，影響供糖。'],
 ['Galactokinase與GALT缺乏的白內障能完全區分兩者嗎？','不能；兩者皆可能增加galactitol。GALT缺乏通常需考慮更廣泛全身與肝臟表現，不能只用白內障作唯一分類。'],
 ['為何14 NADPH對應7次PPP氧化段，不等於一定淨吃掉7個glucose？','次數只計電子；五碳糖可重排與回收，淨碳耗用取決於其他產物及碳回收邊界。']
],[
 [1,'PPP的目的與區室','先分還原力、碳骨架與ATP，再辨胞質或粒線體。',[
 row('101-1-2-28','B','A的NADPH、C的CO₂及D的ribulose-5-P都屬PPP氧化段產物；B α-ketoglutarate是TCA中間物，非PPP的典型代謝物。','核糖途徑不等於任何含碳代謝物都在其中。'),
 row('109-2-1-87','C','C正確：PPP供應核糖骨架。A的36 ATP非PPP直接收益；B的5 CO₂不是單次氧化段產量；D將NADPH混成呼吸鏈主要使用的NADH、FADH₂。','先界定單次氧化段，不拿完整回收的六碳氧化混答。'),
 row('111-1-1-96','B','B的PPP主要在胞質。A PDH氧化脫羧與D典型脂肪酸β氧化在粒線體；C氧化磷酸化在粒線體內膜。β氧化另有peroxisomal形式，不影響本題典型比較。','記典型位置，同時保留peroxisome例外。')]],
 [3,'碳重排與速率限制','比較氧化段的G6PD與非氧化段的碳搬運。',[
 row('107-1-1-80','D','D錯：速率限制酵素是G6PD，非lactonase。A NADPH供還原反應、B五碳糖轉核糖、C G6PD缺乏與蠶豆症的連結皆成立。','Lactonase開環，不是主要還原力需求開關。'),
 row('114-1-1-87','B','B的transketolase及transaldolase參與將五碳糖重排成F6P與GAP，再經相應反應接回G6P。A單碳代謝不是這組重排；C、D所列酵素組合非此典型路徑。','兩個重排酵素不是各自直接把一個5C變成6C；還有中間物與後續酵素。')]],
 [6,'紅血球的還原力與能量分工','NADPH、ATP及2,3-BPG分屬不同功能。',[
 row('98-2-2-43','A','A G6PD影響PPP的NADPH供應，再影響GSH再生。B PDH不在成熟紅血球運作；C LDH主要處理NADH/NAD⁺與lactate；D alcohol dehydrogenase非此抗氧化供應主軸。','G6PD不直接催化GSSG還原，需接glutathione reductase。'),
 row('105-1-2-38','A','A正確：成熟紅血球以糖解供ATP。B忽略2,3-BPG等支路功能；C成熟紅血球無TCA；D PPP在胞質，不在粒線體。','血球攜氧不等於以呼吸鏈消耗氧產ATP。'),
 row('113-2-1-90','B','B錯：成熟紅血球無粒線體PDH/TCA系統。A lactate是糖解末端產物；C PPP供NADPH維持GSH；D可走PPP均正確。','沒有粒線體，仍有胞質PPP。')]],
 [10,'半乳糖與UDP-glucose','把GALT交換反應與乳糖消化分開。',[
 row('103-1-2-37','B','B GALT缺乏對應classic galactosemia。A fructokinase缺乏屬果糖尿；C無法分解乳糖涉及腸道lactase，不等於Leloir缺陷；D單純攝取過多不是這個遺傳酵素缺陷的定義。','Galactosemia還有其他酵素類型；此題B指經典型。'),
 row('103-1-2-39','D','D正確：UDP-glucose參與GALT反應，UDP-galactose再由epimerase互轉。A PPP、B典型肝醣分解、C糖解皆不以UDP-glucose作此步驟的必要受質。','題目用epimerization概括；實際是GALT交換加GALE的UDP糖互轉。')]]
],[[2,'lipid-ppp.svg','PPP氧化段與非氧化段：產還原力及重新分配碳骨架']],[['GeneReviews：Hereditary Fructose Intolerance','https://www.ncbi.nlm.nih.gov/books/NBK333439/']])
chapter(13,'fatty-acid-oxidation','脂肪酸氧化與酮體：空腹供能的碳與電子帳','從活化與carnitine運輸開始，逐步計算β氧化，再連到特殊脂肪酸與跨器官酮體利用。','Harper’s Illustrated Biochemistry, 31st ed., Ch. 22 Oxidation of Fatty Acids: Ketogenesis（印刷頁207–215）；奇數鏈連結Ch. 19、28；MCAD表現核對GeneReviews。',[
 ['Lipolysis與β氧化差在哪裡？','前者水解TAG釋出脂肪酸及glycerol；後者在細胞內逐段氧化脂肪酸產acetyl-CoA與電子。'],
 ['為何一個ATP活化脂肪酸要扣2當量？','ATP變AMP與PPi，PPi再水解，支出兩個高能磷酸鍵當量；不是每圈重扣。'],
 ['CPT-I、translocase、CPT-II依序搬什麼？','先將脂醯基轉到carnitine，以acylcarnitine跨內膜，再交回基質CoA。'],
 ['β氧化四步順序與電子出口？','FAD相關氧化、加水、NAD⁺相關氧化、硫解；FAD電子經ETF到CoQ，NADH從complex I進呼吸鏈。'],
 ['C16為何7輪卻有8 acetyl-CoA？','最後4C一刀切成兩個2C，因此輪數為n/2−1，acetyl-CoA為n/2。'],
 ['Palmitate與palmitoyl-CoA為何差2 ATP？','前者須付活化成本；現代P/O計帳為106與108。'],
 ['奇數鏈尾端直接以propionyl-CoA進TCA嗎？','不是；先經biotin依賴羧化、epimerase、B12依賴mutase成succinyl-CoA。'],
 ['Peroxisome第一步電子為何不能照算1.5 ATP？','Acyl-CoA oxidase把電子交O₂產H₂O₂，沒有直接接粒線體ETF/CoQ的能量回收。'],
 ['產一個acetoacetate淨用幾個acetyl-CoA？','淨兩個；HMG-CoA形成時加第三個，lyase步驟又釋回一個。'],
 ['肝臟與紅血球不能用酮的原因是否相同？','不同；肝臟缺SCOT利用途徑，紅血球沒有粒線體。'],
 ['Hypoketotic hypoglycemia如何從燃料角度解釋？','糖儲備下降時脂肪酸供能又受阻，酮體相對不足且供糖支持下降；不等於完全無酮。'],
 ['Malonyl-CoA下降如何支持長鏈脂肪酸氧化？','減輕對CPT-I的抑制，使脂醯基更易進粒線體；仍需其他供能條件。']
],[
 ['計算游離C18:0完整氧化ATP。','8輪產各8 NADH、FAD當量，9 acetyl-CoA；8×4＋9×10−2＝120 ATP，採2.5/1.5 P/O。'],
 ['C16只問β氧化NADH，為何不是31？','β氧化是7；31包含8 acetyl-CoA在TCA再產的24，題幹邊界不同。'],
 ['CPT-I受抑時，是否表示CoA不能穿過膜？','重點是長鏈脂醯基無法順利轉成acylcarnitine，CoA本來就不靠此穿內膜；shuttle維持兩側CoA池。'],
 ['為何不能說所有β氧化電子都從complex II進入？','NADH經complex I，acyl-CoA dehydrogenase的FAD電子經ETF與ETF:Q oxidoreductase到CoQ，不是SDH/complex II。'],
 ['奇數鏈脂肪酸的哪部分可支援淨糖碳？','末端propionyl-CoA經succinyl-CoA提供淨TCA中間物；大部分acetyl-CoA不能淨生糖。'],
 ['同碳數不飽和脂肪酸一定比飽和者多產ATP嗎？','通常較少，已有雙鍵可略過部分產FAD電子步驟，多不飽和還可能耗NADPH處理；應逐步追蹤。'],
 ['高粒線體NADH會使BHB/acetoacetate比值如何改變？','反應偏向還原acetoacetate成BHB，因此比值上升；不能將二者固定看作等量。'],
 ['SCOT利用酮體時為何扣一個GTP機會成本？','它取用succinyl-CoA將CoA轉給acetoacetate，繞過原可產GTP的succinyl-CoA synthetase步驟。'],
 ['低血糖合併酮體相對偏低，可否先猜正常長期空腹？','不能只套正常空腹；應考慮脂肪酸氧化或其他調控障礙。MCAD是機轉例子，仍需臨床與檢驗確認。'],
 ['肝臟產酮是否表示TCA完全停止？','不是；是acetyl-CoA供應相對於OAA及TCA處理能力增加而分流，並非所有TCA反應歸零。']
],[
 [3,'長鏈脂醯基跨內膜','辨CPT功能與脂質顆粒、其他代謝物。',[
 row('109-2-1-91','D','D長鏈脂肪酸的脂醯基需carnitine shuttle進基質。A NADH的還原當量使用其他shuttle；B succinyl-CoA非CPT受質；C TAG不整顆經CPT入粒線體。','題目簡稱脂肪酸進入，實際跨內膜形式為acylcarnitine。')]],
 [7,'特殊碳鏈的額外酵素','奇數鏈看三碳尾端，多不飽和看雙鍵配置。',[
 row('108-2-1-89','B','B succinyl-CoA是直接進TCA的形式。D propionyl-CoA是前一步三碳尾端，尚須羧化與B12重排；A、C不是這條路徑的直接入口。','題幹問最後三碳的後續入口，不是只問β氧化最後留下什麼。'),
 row('111-2-1-93','D','D linoleate為多不飽和脂肪酸，代謝可形成需2,4-dienoyl-CoA reductase處理的中間物。A laurate飽和；B palmitoleate及C oleate為典型單不飽和，主要需isomerase處理。','不是任何cis雙鍵都一定需要此reductase；要追雙鍵相對位置。')]],
 [9,'酮體成員與合成區室','認清化學分類、粒線體HMG-CoA與肝臟來源。',[
 row('96-2-2-46','A','A acetobutyrate不是標準三種酮體。B 3-hydroxybutyrate、C acetone、D acetoacetate是生理分類的酮體；B化學上不是酮仍列入。','名稱相似不代表都是酮體。'),
 row('100-2-2-40','C','C正確：肝粒線體HMG-CoA synthase參與產酮。A膽固醇是另一區室的HMG-CoA路徑；B不是它的主要反應，D糖新生也非它直接催化。','關鍵字是粒線體，不只HMG-CoA。'),
 row('101-1-2-41','A','A肝臟是人體acetoacetate主要合成來源。B腸黏膜、C脂肪組織、D腎臟並非本題所問的主要生理產酮器官。','主要來源不需誇大成任何情況下其他細胞完全不能表現相關酵素。')]],
 [10,'酮體可用性與器官限制','產物是燃料，但需要粒線體與利用酵素。',[
 row('101-1-2-34','C','C錯：acetoacetate與BHB可被周邊組織轉成acetyl-CoA供能，不是只能排出的代謝酸。A酮體包含兩者、B來自acetyl-CoA、D常由脂肪酸分解供碳皆成立。','有用的燃料在過量時仍可造成酸鹼問題。'),
 row('110-1-1-90','D','D肝臟缺乏SCOT利用路徑，較不以酮體供能。A心臟、C肌肉可用；B腦在較長空腹等情境會增加利用。','腦能用酮不等於完全不需葡萄糖。')]],
 [11,'產酮增加的代謝情境','把動員、OAA與TCA處理能力放在同一張圖。',[
 row('113-2-1-91','C','C TCA加速不是本題促成酮酸中毒的原因；A OAA相對不足使acetyl-CoA分流，B產酮過多直接增加酮酸負荷，D脂解升高增加脂肪酸供應。','不必把TCA加速不成立誇大成TCA完全停止。')]],
 [12,'飽和β氧化的調節物','分辨核心四步與不飽和脂肪酸輔助反應。',[
 row('110-2-1-93','D','D NADPH與典型飽和β氧化調節關聯最低。A acetyl-CoA涉及產品與碳流，B cAMP反映激素動員訊號，C malonyl-CoA抑CPT-I；核心電子輔酶是NAD⁺與FAD。','此題限定飽和；多不飽和處理可使用NADPH。')]]
],[[3,'lipid-carnitine.svg','長鏈脂醯基經CPT-I、translocase與CPT-II進入粒線體基質']],[['GeneReviews：Medium-Chain Acyl-Coenzyme A Dehydrogenase Deficiency','https://www.ncbi.nlm.nih.gov/books/NBK1424/']])
chapter(14,'fatty-acid-synthesis','脂肪酸合成與調控：從citrate到palmitate','追蹤胞質碳源、ACC與FAS的分工，算清ATP與NADPH，再理解餐後儲存及空腹氧化的切換。','Harper’s Illustrated Biochemistry, 31st ed., Ch. 23 Biosynthesis of Fatty Acids & Eicosanoids（印刷頁216–228）；區室與氧化協調連結Ch. 22。',[
 ['合成為何不是β氧化倒轉？','區室、載體ACP/CoA、NADPH與NADH/FAD、酵素組織及羥基立體配置都不同。'],
 ['胞質acetyl-CoA如何由粒線體碳源取得？','先形成並輸出citrate，再由ATP-citrate lyase用ATP與CoA切回acetyl-CoA及OAA。'],
 ['ACC直接用NADPH嗎？','不；它用ATP、HCO₃⁻與biotin羧化acetyl-CoA成malonyl-CoA，NADPH用在後續FAS還原。'],
 ['ACP的可動手臂來自哪個維生素？','4′-phosphopantetheine與B5相關，以末端硫基載acyl chain；不是血中apolipoprotein。'],
 ['Malonyl有3C為何每輪只增加2C？','先前羧化加入的碳在縮合時以CO₂離開，淨留下2C。'],
 ['合成一個palmitate需多少acetyl-CoA與NADPH？','總8 acetyl-CoA，其中7形成malonyl；7輪共14 NADPH，ACC核心耗7 ATP。'],
 ['Malic enzyme與malate dehydrogenase是一樣的NADPH來源嗎？','不是；此處NADP-dependent malic enzyme將malate脫羧成pyruvate產NADPH；MDH處理OAA/malate與NADH/NAD⁺。'],
 ['AMPK活化後ACC如何變？','被磷酸化而活性降低，減少malonyl-CoA生成；磷酸化不是必然活化。'],
 ['長期高碳水飲食只改變ACC磷酸化嗎？','不只；ChREBP、SREBP-1c等可改變合成酵素表現，須區分急性活性與長期酵素量。'],
 ['Malonyl-CoA如何連接合成與氧化？','它是合成原料，也抑制CPT-I；降低時可減輕長鏈脂醯基進粒線體的限制。'],
 ['延長18C ω6成20C後會變ω3嗎？','不會；在羧基端延長不改變從甲基端看第一個雙鍵的家族。'],
 ['FAS、TAG合成與COX各處理哪層工作？','FAS建立脂肪酸鏈，TAG合成把鏈接到glycerol，COX將arachidonate加工成局部訊號前驅物。']
],[
 ['從胞質acetyl-CoA合成palmitate，列核心用量。','8 acetyl-CoA、7 ATP與14 NADPH；1 primer＋7 malonyl，7輪各用2 NADPH。'],
 ['把7 malonyl的21C全算入palmitate錯在哪裡？','每次縮合釋一個先前加上的CO₂；2＋7×(3−1)＝16C。'],
 ['若從粒線體acetyl-CoA出發，7 ATP就是所有成本嗎？','不是，還需citrate輸出後ATP-citrate lyase等成本；OAA回收路線也影響總帳，須依題目邊界。'],
 ['ACC反應缺NADH會立即沒有電子可用嗎？','ACC不是還原反應，直接需要ATP、HCO₃⁻與biotin；FAS兩個還原步驟用NADPH，不是NADH。'],
 ['能量不足且AMPK活化，預測ACC、malonyl與CPT-I。','ACC活性下降，malonyl-CoA下降，CPT-I受抑減輕，有利長鏈脂肪酸氧化。'],
 ['為何citrate同時是原料運輸形式及調控訊號？','它將acetyl單位從粒線體送到胞質，並可活化ACC，使碳供應與合成能力配合。'],
 ['ACP與CoA的共同與不同點？','都含phosphopantetheine相關結構並以硫酯載acyl；ACP是蛋白質載體，CoA是輔酶，典型合成與β氧化使用不同載體。'],
 ['把PPP產生的NADPH拿去FAS，是不是直接用它產ATP？','不是；NADPH的電子用於還原碳鏈，ATP另供羧化與運輸等反應成本。'],
 ['Oleate與linoleate哪個是典型必需脂肪酸？','Linoleate；人體可形成oleate的Δ9雙鍵，但不能從頭形成ω6與ω3家族起點。α-Linolenate也是必需脂肪酸。'],
 ['餐後肝臟脂肪合成增加是否意味GLUT4移到肝膜？','不能套用脂肪與肌肉的GLUT4敘述到肝臟；肝臟靠其運輸與代謝、轉錄調控處理碳流，insulin效應需分器官。']
],[
 [3,'ACC的反應與速率限制','區分核心羧化與後續還原。',[
 row('107-1-1-90','C','C ACC催化acetyl-CoA→malonyl-CoA是主要速率限制步驟。A是acetate活化，B為FAS縮合的一部分，D不是主要malonyl形成路徑。','問速率限制找ACC，問碳鏈延長機器才找FAS。'),
 row('109-2-1-92','B','B錯：ACC直接用ATP、HCO₃⁻與biotin，不需直接消耗NADH。A產malonyl-CoA、C為速率限制步驟、D AMPK活化抑ACC皆正確。','整條合成需NADPH，也不代表ACC直接消耗NADPH。')]],
 [8,'異位與激素調控','用能量、碳源、產品三種訊號推方向。',[
 row('112-2-1-90','B','B CoA不是這組比較中的典型主要調控訊號。A insulin整體促進合成，C citrate活化ACC，D AMPK磷酸化抑ACC。','最不受調控是比較問法，不必宣稱CoA在細胞完全沒有任何影響。'),
 row('114-1-1-91','A','A citrate活化ACC。B glucagon與D epinephrine整體偏向動員而非活化脂肪合成；C palmitoyl-CoA回饋抑制。','Citrate與palmitoyl-CoA都是碳代謝物，但對ACC方向相反。')]],
 [10,'Malonyl-CoA與餐後／空腹切換','看合成原料如何限制氧化入口。',[
 row('100-1-2-46','B','B脂肪酸生合成使用NADPH作還原力。A glucagon通常不促進合成；C malonyl-CoA是抑制CPT-I而非活化；D insulin通常抑制脂解，不能概括成提高血中非酯化脂肪酸。','不要把NADPH電子供應與ACC羧化直接混合。'),
 row('103-2-2-40','A','A在典型飢餓或insulin不足的糖尿病情境，ACC受抑，malonyl-CoA不傾向升高。B acetoacetyl-CoA、C酮體與D脂肪酸增加符合動員與產酮方向。題幹糖尿病須按其代謝情境理解，非所有已治療患者皆相同。','降低malonyl可鬆開CPT-I限制，不是讓CPT-I受抑更強。')]],
 [11,'延長反應的受質','分清malonyl、methyl與既有碳鏈。',[
 row('99-1-2-39','D','D methyl-CoA不是典型脂肪酸延長供體。A平滑內質網是主要延長場地，B可用malonyl-CoA，C palmitoyl-CoA可延長至stearoyl-CoA。','Malonyl提供淨二碳；不要被methyl名稱相近誤導。')]]
],[[10,'lipid-acc-switch.svg','ACC、malonyl-CoA與CPT-I：餐後合成及能量壓力下氧化的協調']])
(p/'scripts/lipid-teaching.json').write_text(json.dumps(spec,ensure_ascii=False,indent=2))
