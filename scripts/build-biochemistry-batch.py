"""Rebuild chapters 03–05 from authored Markdown and curated question metadata."""
import json,re,subprocess,pathlib,html
p=pathlib.Path(__file__).resolve().parent.parent
# Each row is a distinct teaching problem and its worked reasoning.
q3='''
單條鏈有三個 domain，是否一定有四級結構？|否。Domain 是鏈內較大的摺疊單位；四級結構描述多條多肽鏈的組裝。單鏈可以有多個 domain 及完整三級結構。
遠離活性中心的序列突變為何仍會影響活性？|序列距離不等於三維距離，也可能改變核心堆積、動態或次單元界面。先檢查摺疊與訊號傳遞，不應只憑線性距離判定無影響。
Gly 與 Pro 哪個通常有較廣的主鏈角度範圍？|Gly 側鏈小，立體障礙較低；Pro 環狀側鏈限制 φ。因此不能把一般殘基的 Ramachandran 允許區原封套用兩者。
α helix 第 i 位 C=O 與哪一位 N–H 配對？|典型是 i+4；側鏈向外。規則氫鍵主要來自主鏈，不是每個 R 基團互相連成螺旋。
每圈3.6殘基、螺距5.4 Å，每殘基上升多少？|5.4/3.6 = 1.5 Å。20 殘基約為30 Å量級；精確端點距離要注意計算的是殘基還是間隔。
α helix N 端的偶極方向為何？|偏部分正電，C端偏部分負電；來自主鏈肽鍵偶極排列，不只來自自由胺基／羧基。因此位於鏈中間的螺旋也有偶極。
β sheet 是否一定來自不同多肽鏈？|否。同一條鏈的不同區段也可形成相鄰β股，不能看到β sheet就判為四級結構。
雙硫鍵屬哪種作用力？如何破壞？|Cys間的共價S–S，可由DTT或β-mercaptoethanol還原；不是Met間的鍵，也不是一般非共價作用。
摺疊降低肽鏈構形熵，是否必定不自發？|否。需計入水與整體的ΔH、ΔS。疏水表面埋入可釋放部分受限制水，總ΔG仍可能有利。
RNase復性實驗能否推論所有蛋白皆可自行復性？|不能。它支持序列包含重要摺疊資訊，但仍依賴適當環境；聚集、修飾、錯配與缺乏輔因子等都可阻礙復性。
Chaperone 如何減少不當聚集？|暫時結合暴露疏水區或提供受保護的摺疊環境。許多重要系統利用ATP，通常不成為成熟受質的永久次單元。
尿素處理後失活，能否直接推論肽鏈已斷？|不能。變性可破壞活性中心三維排列而保留序列；蛋白水解才直接切斷主鏈肽鍵。
所有含β sheet的蛋白都是amyloid嗎？|否。正常蛋白常有β結構；amyloid具有特定cross-β聚集架構，不能只靠有無β sheet判病態。
正常PrP與疾病相關形式一定有不同序列嗎？|不一定。同序列可有不同構形；異常構形可促進同種蛋白轉變。其傳播概念不是自身攜帶核酸基因體的普通病毒。
Collagen每第三個位置的Gly為何重要？|三股螺旋中心空間狹小，需要極小側鏈。換成較大殘基可干擾組裝；不是因為Gly有特殊氫鍵側鏈。
維生素C與銅分別參與collagen哪一步？|維生素C與細胞內Pro/Lys羥化有關；銅與細胞外lysyl oxidase交聯有關。位置、酵素與化學反應不同。
Marfan與常見成骨不全症分別聯想到哪個蛋白？|Marfan典型為fibrillin-1；常見成骨不全症涉及I型collagen。結締組織病並非都由相同蛋白缺陷造成。
天然100 kDa、非還原SDS 50、還原SDS 25，提出模型。|可能有四條25 kDa鏈，兩兩由雙硫鍵相連成50 kDa，再以非共價作用組成100 kDa。這是合理模型，單一帶不能證明鏈序列完全相同。
Size-exclusion誰先出？陰離子交換樹脂帶何電？|較大分子通常先流出，因較不進入孔洞；陰離子交換樹脂本身帶正電，吸附負電分子。
計算預測到結合口袋，是否證明具有指定酵素活性？|不足。結構模型可產生假說，仍需催化、結合或其他功能證據。相似構造不等於反應完全相同。
'''
q4='''
Heme、globin、Hb三者有何不同？|Heme是含鐵卟啉輔基，globin是蛋白鏈，Hb是包含globin及heme的攜氧蛋白。中文血紅素可能混用，須看英文。
氧合heme第五與第六配位位置分別接誰？|第五為近端His，第六為O₂；卟啉四個氮提供其他四個。不是一個氧原子占一個額外配位位置。
近端與遠端His分別有何功能？|近端His F8直接配位鐵並連動F helix；遠端His E7可與O₂形成氫鍵、影響配體環境，而非正常直接占第六鐵配位位置。
OxyHb是否就是Fe³⁺的MetHb？|否。功能分類中oxyHb仍為Fe²⁺氧合態；MetHb為Fe³⁺，該heme無法正常可逆攜氧。氧合與氧化不同。
Mb的P50=3，PO₂=9時飽和度為何？|單位點模型Y=9/(3+9)=0.75。PO₂=P50時才是50%，不是9/3得到300%。
Mb為何不適合直接取代Hb的主要血液輸氧角色？|Mb高親和力使它在一般組織PO₂下仍保有較多氧，肺到組織的釋放比例較小。Hb的協同性與調節更利於載入後卸下。
BPG與O₂分別穩定哪種狀態？|BPG偏向低親和力T狀態；O₂結合使平衡偏向高親和力R。不是T絕對不能結合氧。
Homotropic是否指兩個氧占同一位點？|不是。一位點的O₂影響其他位點對同種配體的結合；各heme仍各有獨立配位位置。
Hill coefficient約2.8，表示幾個氧位點？|不能由它讀出位點數；它描述協同性及曲線陡峭。Hb四聚體仍有四個heme。
P50從27降至20，曲線與親和力如何？|左移、親和力增加。在相同組織PO₂下通常較不易卸氧；總供氧還要看Hb量與血流。
Hb15，動脈飽和0.98、回流0.75，忽略溶解氧的釋氧量？|1.34×15×(0.98−0.75)=4.62 mL/dL。計算兩端差額，不是把動脈所有含氧量當作消耗。
酸增加促進釋氧與氧合促進CO₂釋放，各是哪個效應？|前者Bohr，後者Haldane。前者問H⁺/CO₂如何影響O₂結合，後者問氧合如何影響CO₂/H⁺攜帶能力。
CO₂是否直接占O₂的heme配位位置？|不是。CO₂可與globin末端胺基形成carbamate，也透過H⁺/HCO₃⁻系統調節。CO才是與O₂競爭heme位置的重要配體。
一個Hb四聚體典型結合幾個BPG？|一個，位於中央空腔，穩定T、提高P50；不是四個heme各結合一個。
用因果鏈說明HbF親和力較高。|γ鏈差異→BPG結合較弱→T狀態較少受穩定→O₂親和力較高。不是胎兒多了heme位點。
Hb7.5、SaO₂0.98、PaO₂100，CaO₂近似多少？|1.34×7.5×0.98+0.003×100≈10.15 mL/dL。氧分壓正常仍可能因Hb不足而攜氧量低。
CO5 L/min，CaO₂20 mL/dL，DO₂為何？|5×20×10=1000 mL/min；乘10為L轉dL。這是輸送量，不代表全部被消耗。
CO除了占位還有哪個重要影響？|提高剩餘位點的氧親和力，讓卸氧更困難。PaO₂只反映溶解氧，不能用正常值排除有效輸氧障礙。
HbS的Glu→Val為何增加聚合？|表面親水帶負電位置變成疏水斑塊，去氧時可與其他分子的互補表面作用。不是增加雙硫鍵。
HbS與β-thalassemia的核心異常有何不同？|HbS是特定序列置換改變性質；β-thalassemia主要是β鏈合成不足與鏈量失衡，可由不同轉錄、剪接或轉譯相關變異造成。
'''
q5='''
酵素改變ΔG、Keq還是ΔG‡？|降低反應途徑的活化自由能ΔG‡，不改變同反應同條件下的ΔG或平衡常數。它加快接近平衡而非創造新的平衡。
pH改變造成失活，一定是完全變性嗎？|不一定。催化殘基的質子化可能先改變，使酸、鹼或親核功能失常；更極端條件才可能另破壞整體構造。
三聯體與oxyanion hole有何分工？|Ser提供親核基，His協助質子轉移，Asp影響His電性與定位；oxyanion hole穩定四面體中間物的負電。不是所有部位都直接攻擊受質。
Kinase、phosphatase、translocase分別屬哪類？|通常EC2 transferase、EC3 hydrolase、EC7 translocase。舊六類框架需補第七類，並依實際反應分類。
穩態d[ES]/dt≈0是否代表不再生成產物？|否。ES生成與消失近似相等，但反應仍可持續通過ES流向產物；穩態不等於整體熱力學平衡。
Kₘ何時近似Kd？|最簡模型Kₘ=(k−1+k₂)/k₁；k₂遠小於k−1時近似k−1/k₁=Kd。一般不能把Kₘ當作精確結合常數。
活性酵素量加倍，Vmax與Kₘ如何？|在模型與條件不變下Vmax加倍，Kₘ不變。Vmax依樣品酵素量而變，不是完全獨立於濃度的本質常數。
v=0.8Vmax時，[S]為幾倍Kₘ？|[S]/Kₘ=f/(1−f)=0.8/0.2=4。不是0.8倍，也不是5倍。
[S]遠大於Kₘ時的零級，是對哪個變項？|對受質濃度近似零級，速率仍受活性酵素量影響。不能推論所有條件改變都無效。
kcat600 s⁻¹、E20 nM、Kₘ10 μM、S50 μM，v？|E=0.020 μM，Vmax=12 μM/s；v=12×50/(10+50)=10 μM/s。先統一濃度單位。
A的kcat100、Kₘ1；B為50、0.1，同量酵素誰快？|同濃度單位下，低S時B的效率500大於A的100；飽和時A的kcat較高。必須先知道受質濃度範圍。
x截距−0.25 mM⁻¹、y截距0.02 min/μmol，求參數。|Kₘ=4 mM，Vmax=50 μmol/min。x截距是−1/Kₘ，y截距是1/Vmax，需取倒數並處理正負號。
Kₘ2、Vmax100，競爭抑制[I]/Ki3，S2時v？|α=4，表觀Kₘ=8，Vmax仍100；v=100×2/(8+2)=20。高受質的極限才能接近原Vmax。
Uncompetitive為何在雙倒數圖平行？|Kₘ與Vmax同除以α′，斜率Kₘ/Vmax不變；y截距上升、x截距更負。Kₘ下降並不表示酵素活化。
在活性中心外結合是否保證Kₘ不變？|否。只有對E與ES相同親和力的pure noncompetitive才有該結果；一般mixed可使表觀Kₘ升高或降低。
原Kₘ4、Vmax120，α3、α′2，表觀值？|Kₘ,app=(3/2)×4=6；Vmax,app=120/2=60。先區分α描述E與α′描述ES。
Vmax下降Kₘ不變可否證明不可逆？|不能。可逆pure noncompetitive也可如此；需看移除抑制劑後恢復、預孵育時間或化學修飾等證據。
磷酸化與酶原切割，哪個能由phosphatase逆轉？|適當受質的磷酸化可去磷酸化；酶原斷掉的肽鍵不能由phosphatase接回，對同一分子屬不可逆加工。
起始1000 mg/10000 U，之後10 mg/4000 U，回收率與純化倍數？|回收率40%；比活性10→400 U/mg，所以純化40倍。總活性下降不等於純化無效。
低S時Vmax/Kₘ與kcat/Kₘ為何都可能出現？|v=(Vmax/Kₘ)[S]把固定酵素量納入係數；v=(kcat/Kₘ)[E][S]保留酵素量。看選項單位與模型，不只看速率常數這個名稱。
'''
questions={3:q3,4:q4,5:q5}
# id | expected bank answer | concept | authored explanation | retrieval cue
exam3='''
104-2-2-26|B|結構層次|α helix與β sheet都是二級構造。三級描述單鏈整體摺疊，四級描述多鏈組裝。|先分局部主鏈排列與整體組裝。
115-2-1-75|A|二級構造辨認|α helix是二級構造；tetramer描述寡聚狀態，subunit是次單元，不是二級結構名稱。|不要把所有與蛋白有關的名詞放在同一層。
112-1-1-75|D|螺旋與摺板|β股可平行或反平行。α螺旋N端偏部分正電，常見右手性；兩種二級結構均有主鏈氫鍵參與。|逐項核對方向、偶極與氫鍵，不只看一個熟悉詞。
113-1-1-75|B|α螺旋氫鍵|典型規則氫鍵由主鏈C=O與N–H形成。側鏈互動可影響穩定性，但不是題目問的主要規則氫鍵模式。|記i到i+4，並指出是主鏈。
105-1-2-26|A|平行與反平行|反平行的氫鍵幾何通常較接近直線；平行配對較傾斜，這是題目所比較的局部穩定因素。|不能由此推論所有反平行蛋白都較耐熱。
107-2-1-75|A|轉角序列|Gly與Pro常見於β-turn：Gly小而靈活，Pro環狀結構可固定某些轉角。|兩者出現位置相近，物理理由卻不同。
100-1-2-29|D|共價與非共價|題目問不是非共價作用，雙硫鍵為共價S–S；其餘三者為非共價互動。|先圈出否定詞，再分類作用力。
103-2-2-26|A|氧化還原影響|Cys硫醇氧化可成S–S，還原可拆開，故雙硫鍵最直接受氧化還原狀態影響。|不要把pH影響與氧化還原影響完全混為一談。
108-2-1-75|A|雙硫鍵與摺疊|錯誤是Met側鏈能形成一般蛋白雙硫鍵；典型來源為兩個Cys。還原劑可拆開，PDI可協助配對重排。|含硫不等於有可形成S–S的自由硫醇。
113-2-1-75|C|選擇處理條件|還原劑最直接破壞S–S。高溫、酸與界面活性劑可影響摺疊，但不能等同專門還原雙硫鍵。|把變性、還原與蛋白水解分開。
102-1-2-29|B|伴護的能量|本題錯誤項為大部分伴護作用不需ATP；Hsp70與chaperonin等重要系統使用ATP週期。也存在ATP非依賴系統。|依題目範圍判斷，不把答案擴張成全部伴護子都耗ATP。
106-1-2-26|B|分子伴護子|協助另一蛋白正確摺疊符合chaperone功能；isoenzyme指催化相同反應的不同分子形式。|輔助摺疊不等於成為受質的永久次單元。
101-2-2-43|B|Amyloid|Amyloid纖維與cross-β架構密切相關，故選β-sheet。並非所有正常β-sheet都病態。|區分正常二級結構與特定病態聚集排列。
100-1-2-26|C|Collagen的Gly|Gly–X–Y中每第三個Gly可容納於三股螺旋狹小中心，大側鏈置換可干擾堆積。|從空間需求推理，勿只背病例外觀。
103-1-2-27|B|羥化輔助因子|Ascorbate與Pro/Lys hydroxylase所需鐵的還原狀態維持有關；其餘維生素參與其他反應。|維生素C連羥化，銅連lysyl oxidase交聯。
107-2-1-74|D|成骨不全症|典型成骨不全症與I型collagen量或結構異常相關，四選項中為collagen。|不要與fibrillin相關的Marfan混淆。
107-1-1-76|D|SDS-PAGE|SDS變性並提供近似一致負電荷／質量比，使分離主要反映分子大小，用來估計分子量。|天然pI由其他方法測，SDS不是保存活性的試劑。
102-2-2-42|D|Hydropathy plot|連續序列疏水性高的片段可提示跨膜區；不能直接測出實際分子量、含水量或四級結構。|預測片段不等於已證實完整膜拓樸。
'''
exam4='''
105-2-2-26|B|Heme配位|四個位置由卟啉氮占據，另外為近端His側鏈及O₂，故選一氧分子與一胺基酸側鏈。|每個heme結合一個O₂分子。
110-2-1-74|B|遠端His|遠端His可與結合的氧形成氫鍵，穩定氧結合；近端His則直接配位鐵。|相同胺基酸、不同位置，功能要分開。
98-1-2-35|A|T到R轉換|O₂結合使Hb平衡偏向高親和力R狀態；不是靠變成Fe³⁺或將四聚體拆散。|氧合不等於鐵氧化。
109-2-1-75|B|同向異位性|相同種類配體在一位點結合，影響其他位點的結合能力，符合homotropic。|不是兩個配體占同一位點。
104-2-2-30|B|BPG調節釋氧|2,3-BPG結合去氧Hb中央空腔、穩定T，降低氧親和力而促進釋放。|勿把fructose-1,6-bisphosphate當作相同調節物。
114-2-1-76|B|T狀態穩定|BPG對T構形的中央空腔結合較有利，故促進T而非R。|BPG增加→T增加→P50增加。
112-2-1-74|B|胎兒與成人Hb|HbF為α₂γ₂，與HbA的α₂β₂不同，BPG結合較弱而氧親和力較高。|不是因為胎兒心跳較快或heme數目更多。
101-1-2-30|D|CO占位|CO與O₂競爭heme Fe²⁺配位位置，減少有效氧合位點；不需先使鐵變Fe³⁺。原題將myoglobin譯為肌球蛋白，應讀作肌紅蛋白。|分清COHb、MetHb與myoglobin。
102-1-2-28|A|CO與卸氧|CO結合後剩餘氧位點親和力升高，使組織端釋氧更困難；另有總可用位點減少的效應。|左移不代表總供氧一定改善。
109-2-1-74|C|HbS聚合|Glu變Val造成表面疏水斑塊，去氧時促進分子間疏水接觸與聚合，非新增共價或雙硫鍵。|回到側鏈性質，而非只背突變名稱。
111-2-1-75|A|HbS與合成缺陷|鐮形血球病典型由β-globin點突變造成；缺乏某鏈的量較接近thalassemia概念。|質的改變與量的不足分開。
115-2-1-76|A|Bohr效應|Bohr效應核心為血液酸鹼度等H⁺/CO₂因素影響氧親和力。溫度亦可移動曲線，但不是此定義的最佳答案。|不要把任何右移都叫Bohr。
'''
exam5='''
99-1-2-46|B|由資料估Km|高[S]時速率接近970，半最大約485；表中[S]=3 mM時v=485，因此Km約3 mM。|先估Vmax再找一半，不把最高[S]當Km。
101-1-2-27|A|Km降低的意義|突變型Km較小，可在較低[S]達相同飽和比例。只給Km不能證明kcat更高或催化一定更快。|題目的達飽和為近似說法，嚴格看固定分率。
101-2-2-26|C|低S專一性常數|兩者kcat相同，A的Km為B的十分之一，所以kcat/Km高十倍；低S時較有效，飽和時每中心週轉相同。|不要把低Km直接當高Vmax。
105-2-2-28|A|高S週轉|[S]遠大於Km，v/[E]接近kcat=500 s⁻¹；kcat/Km適用低S的效率比較。|用單位s⁻¹辨認飽和週轉。
106-2-1-74|C|低S固定酵素量|v≈(Vmax/Km)[S]，固定E時把Vmax/Km當對[S]的一級係數，因此選C。|若方程另保留[E]，係數會寫kcat/Km。
109-2-1-76|C|分率反推|0.8=[S]/(Km+[S])，整理0.8Km=0.2[S]，所以[S]=4Km。|使用f/(1−f)，不要把百分率直接乘Km。
110-2-1-75|C|催化效率|kcat/Km反映低受質時的利用效率；數值越大通常越有效。只看Km或1/kcat不能表示同一量。|限於適用模型與低S比較，非所有濃度都一樣。
111-1-1-74|A|反應級數|[S]遠大於Km時v≈Vmax，對[S]近似零級；對酵素量仍有依賴。|一定指出是對哪個變項的級數。
111-2-1-76|B|低S效率|v≈(kcat/Km)[E][S]，此題以雙分子係數表示，故選B。|與106年題的Vmax/Km並不矛盾，差在是否納入E。
112-1-1-76|D|效率與單位|0.01 mM遠小於10 mM，使用kcat/Km=1000/10=100 mM⁻¹s⁻¹。|這是效率常數，不是直接算出樣品v；還缺[E]。
115-1-1-75|B|完整速率計算|20 nM=0.020 μM；Vmax=600×0.020=12 μM/s；v=12×50/(10+50)=10 μM/s。|先統一濃度，避免千倍錯誤。
97-2-2-28|B|競爭雙倒數|競爭抑制Vmax不變而Km,app上升，所以x截距−1/Km改變，y截距不變；平衡常數不受抑制劑這種動力學效應改寫。|同y截距→同Vmax。
98-1-2-34|C|競爭比值|Vmax不變、Km,app增加，故Vmax/Km,app下降。選項以比值提問，不能只背單一參數。|把兩個參數一起代入比值。
102-1-2-26|A|競爭參數|理想可逆競爭抑制提高表觀Km，不降低飽和Vmax或kcat；表觀kcat/Km反而下降。|區分表觀參數與酵素本身飽和週轉。
103-2-2-28|C|競爭錯誤敘述|錯誤為kcat下降；在同E與理想可逆競爭模型下，足夠高S仍可趨近原Vmax。|高S可克服是模型極限，非任意少量受質即可。
104-1-2-27|A|由參數辨識|Km上升而Vmax不變符合competitive。Uncompetitive會兩者下降，pure noncompetitive則Km不變。|同時比對兩個參數。
112-2-1-75|A|Uncompetitive|只結合ES的模型使Vmax及Km同倍率下降，因此選A。原題中文非競爭需以括號uncompetitive為準。|不要與pure noncompetitive的Km不變混淆。
113-1-1-74|D|競爭再現考法|競爭抑制使半最大速率所需S升高，但飽和極限不變，故Vmax不變、Km上升。|從機制推，不只記題目年份。
113-2-1-76|C|x截距取倒數|x截距=−1/Km，取倒數再乘−1才得到正的Km。y截距則對應1/Vmax。|先標橫軸1/[S]，再處理負號。
99-2-2-27|C|不可逆加工|酶原的有限蛋白水解切斷肽鍵，對同一分子不可直接逆轉。異位性與常見磷酸化可逆；原題抑制類型依英文閱讀。|不可逆加工不代表整個生理系統不能關閉活性。
'''
examtext={3:exam3,4:exam4,5:exam5}
ids={3:['map','levels','geometry','alpha','beta','domains','forces','folding','denaturation','misfolding','collagen','maturation','fibrous','methods','review'],4:['map','heme','myoglobin','states','cooperativity','curve','bohr','haldane','bpg','fetal','content','co','methemoglobin','variants','review'],5:['map','energy','active-site','catalysis','cofactors','steady-state','parameters','concentration','efficiency','lineweaver','inhibition','competitive','mixed','irreversible','regulation','purification','review']}
# Contiguous groups preserve the source-to-topic map.
groupspec={3:[('二級與高階結構','alpha',0,6,'題目從結構分類延伸至氫鍵、偶極與方向，需能指出實際作用位置。'),('穩定作用與處理條件','forces',6,10,'區分非共價變性、S–S還原及主鏈水解。'),('摺疊與聚集','folding',10,13,'伴護工作週期、正常摺疊與病態聚集分開理解。'),('膠原結構與成熟','collagen',13,16,'從Gly的空間需求、修飾到結構疾病。'),('實驗與序列分析','methods',16,18,'先辨認方法測量的對象，再判讀能得到的結論。')],4:[('配位、構形與協同性','heme',0,4,'先分近端/遠端His，再理解T/R與位點間互動。'),('BPG與胎兒Hb','bpg',4,7,'由結合位置與穩定狀態推導親和力。'),('CO占位與卸氧','co',7,9,'CO同時降低可用位點及阻礙剩餘氧的釋放。'),('HbS的結構異常','variants',9,11,'分清序列性質改變與鏈量不足。'),('酸鹼調節','bohr',11,12,'Bohr效應的定義不能泛指所有曲線位移。')],5:[('Km、kcat與算例','parameters',0,11,'先看濃度區間與單位，再選完整式或近似式。'),('抑制、圖形與調控','inhibition',11,20,'參數、圖形和結合模型互相核對；保留英文避免譯名混淆。')]}
files={3:'03-protein-structure-folding',4:'04-hemoglobin-myoglobin',5:'05-enzymes-kinetics'}
slugs={3:'protein-structure-folding',4:'hemoglobin-myoglobin',5:'enzymes-kinetics'}
source={3:'Harper’s Illustrated Biochemistry, 31st ed., Chapters 4–5（第5章 pp.33–46）',4:'Harper’s Illustrated Biochemistry, 31st ed., Chapter 6（pp.47–55）',5:'Harper’s Illustrated Biochemistry, 31st ed., Chapters 7–9；EC分類另核對IUBMB'}
links={3:[('RCSB PDB：Collagen','https://pdb101.rcsb.org/motm/4'),('RCSB PDB：Chaperones','https://pdb101.rcsb.org/motm/032')],4:[('RCSB PDB：Hemoglobin','https://pdb101.rcsb.org/motm/41'),('RCSB PDB：Fetal hemoglobin','https://pdb101.rcsb.org/motm/257')],5:[('IUBMB 酵素分類','https://iubmb.qmul.ac.uk/enzyme/'),('EC 7 Translocases','https://iubmb.qmul.ac.uk/enzyme/EC7/')]}
recallmap={3:[1,0,2,3,6,0,8,10,11,12,14,15,16,17,19],4:[0,2,4,6,7,9,11,11,13,14,15,17,3,18,19],5:[0,0,1,2,3,4,5,7,10,11,14,12,13,16,17,18,19]}
bank=json.loads((p/'question-bank/biochemistry.json').read_text()); byid={q['id']:q for q in bank}
for n in [3,4,5]:
 md=(p/'docs/biochemistry'/f'{files[n]}.md').read_text(); title=md.splitlines()[0].split('　',1)[1]
 parts=re.split(r'^## ',md,flags=re.M)[1:];assert len(parts)==len(ids[n])
 sections=[]
 for id,s in zip(ids[n],parts):
  h,body=s.split('\n',1);out=subprocess.check_output(['pandoc','-f','markdown','-t','html'],input=body.encode()).decode()
  out=re.sub(r'(<table[^>]*>.*?</table>)',lambda m:'<div class="table-scroll" tabindex="0" role="region" aria-label="'+html.escape(h)+'比較表">'+m[1]+'</div>',out,flags=re.S)
  sections.append(dict(id=id,title=h,html=out))
 qs=[]
 for i,row in enumerate(questions[n].strip().splitlines()):
  prompt,answer=row.split('|');qs.append(dict(title=f'{i+1:02}　'+prompt,prompt='<p>'+prompt+'</p>',answer='<p>'+answer+'</p>'))
 assert len(qs)==20
 ex=[]
 for row in examtext[n].strip().splitlines():
  id,ans,point,analysis,trap=row.split('|');q=dict(byid[id]);assert q['answers']==[ans],(id,q['answers'],ans)
  m=re.search(r'(?m)^'+str(q['number'])+r'\s*[.．]?\s*',q['text'])
  if m:q['text']=q['text'][m.start():]
  q.update(point=point,analysis=analysis,trap=trap);ex.append(q)
 groups=[dict(id=f'group-{i}',title=t,topic=topic,summary=s,questions=ex[a:b]) for i,(t,topic,a,b,s) in enumerate(groupspec[n])]
 c=dict(id=slugs[n],number=f'{n:02}',title=title,summary={3:'從主鏈幾何到摺疊、伴護、膠原成熟與實驗判讀，逐步理解構造如何決定功能。',4:'由heme配位與T/R平衡推導協同性、BPG、Bohr/Haldane效應，再辨認氧含量與異常血紅素。',5:'從催化機制推導Michaelis–Menten方程式，用算例、單位與圖形分辨酵素參數及抑制模型。'}[n],sources=source[n],sections=sections,questions=qs,recalls=[[qs[i]['prompt'][3:-4],qs[i]['answer'][3:-4]] for i in recallmap[n]],readingIntro={3:'先讀結構層次與主鏈幾何，再看摺疊和錯誤聚集，最後把膠原成熟與實驗證據連起來。每節都先問原因，再預測處理或突變的結果。',4:'先分清測量值與heme配位，再理解T/R和曲線調節，最後用含氧量算例、CO與HbS檢查是否能把結構連到功能。',5:'先理解催化與模型假設，再推導參數和濃度近似，最後由E/ES結合模型重建抑制表。計算前先統一單位。'}[n],figure='<div class="relearn-bridge"><p>讀法：結構或模型 → 分子作用 → 可觀察結果 → 關閉正文後自己推一次。</p></div>',references='<p>'+source[n]+'。正文依使用者教材重組並補充推導；歷屆題取自網站既有題庫，解析為自行撰寫。模型數字為教學用途，臨床治療現況不以舊版課本作唯一依據。</p><ul>'+''.join('<li><a target="_blank" rel="noopener noreferrer" href="'+u+'">'+t+'</a></li>' for t,u in links[n])+'</ul>',exams=dict(bankCount=len(bank),yearMin=min(q['year'] for q in bank),yearMax=max(q['year'] for q in bank),groups=groups,note='本頁為主題精選，不是完整歷年頻率統計。題幹譯名或文字擷取有歧義時，解析另加註並以原卷及英文術語核對。'))
 if n in (4,5):
  asset='oxygen-binding.svg' if n==4 else 'enzyme-inhibition.svg'
  caption=('教學模型：Mb採P₅₀=3 mmHg；HbF/HbA採Hill n=2.8、P₅₀分別20/26.6 mmHg。曲線不是病人實測值。固定PO₂比較：HbF比HbA更易維持氧合，Mb呈高親和力雙曲線。' if n==4 else '共同座標以未抑制Km、Vmax標準化。Competitive α=4；pure noncompetitive α=α′=2；uncompetitive α′=2。後兩者Vmax都減半，但半最大速率的受質濃度不同。有限[S]時競爭曲線尚未回到飽和極限。')
  figure='<figure><img class="bio-diagram" src="assets/biochemistry/'+asset+'" alt="'+caption+'" width="760" height="450" loading="lazy"><figcaption>'+caption+'</figcaption></figure>'
  target='curve' if n==4 else 'inhibition'
  next(s for s in c['sections'] if s['id']==target)['html']+=figure
 (p/f'biochemistry-{slugs[n]}.js').write_text('/* Authored chapter '+str(n)+'; rebuild with scripts/build-biochemistry-batch.py. */\nbiochemistryChapters.push('+json.dumps(c,ensure_ascii=False,indent=2)+');\n')
 print(n,len(sections),'sections',len(qs),'practice',len(ex),'exams',len(md),'characters')
