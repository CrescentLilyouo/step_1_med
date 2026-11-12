biochemistryChapters.push({
  "id": "bioenergetics",
  "number": "06",
  "title": "生物能量學與能量耦合",
  "summary": "從機制與能量收支重新建立理解，配合算例、比較表與可追溯歷屆原題。",
  "sources": "Harper’s Illustrated Biochemistry, 31st ed., Ch. 11 Bioenergetics: The Role of ATP（印刷頁105–110）；Ch. 12 Biologic Oxidation（111–116）。",
  "references": "<p>Harper’s Illustrated Biochemistry, 31st ed., Ch. 11 Bioenergetics: The Role of ATP（印刷頁105–110）；Ch. 12 Biologic Oxidation（111–116）。</p><p>正文與教學圖為概念重組與原創說明，非逐段譯文。算例為明示條件的教學模型；歷屆原題、官方採計答案與更正版本沿用題庫，解析另行撰寫。精選題數不是完整出題頻率。</p>",
  "sections": [
    {
      "id": "topic-1",
      "title": "為什麼代謝不能只背箭頭",
      "html": "<p>代謝圖上的箭頭同時隱含方向、速率與調控，但三者不是同一件事。ΔG描述在指定條件下反應前進是否有利；活化自由能描述跨越過渡態的困難；酵素與受質供應影響實際通量。負的ΔG不能保證反應很快，正的標準自由能也不能保證細胞內反應不會進行。</p>\n<p>讀每條路徑先問目的、區室、碳來源、電子去向、ATP收支與調控。ATP是可被多種工作使用的能量媒介，NADH主要攜帶還原當量，acetyl-CoA則同時是碳單位與活化醯基。三者不能全部簡稱成相同的能量分子。</p>\n<p>閉卷回想：一個反應ΔG很負卻很慢，缺少的通常是什麼？答案是適當的動力學途徑或催化，而不是一定要再改變平衡。</p>\n<h3 id=\"先建立三個不同層次的問題\">先建立三個不同層次的問題</h3>\n<p>假設A轉成B釋放很多自由能，卻在試管放一整天都幾乎不變。這沒有違反熱力學：A要先跨過過渡態才能到B，終點較低不代表中間沒有障礙。酵素提供較低障礙的途徑；ATP耦合則改變你所考慮的「總反應」。兩者解決的是不同問題，不能把「加入酵素」與「加入ATP並耦合」當成相同處置。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>要回答的問題</th>\n<th>真正要看什麼</th>\n<th>例子</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>往哪個方向有淨驅動力？</td>\n<td>實際ΔG與濃度條件</td>\n<td>移除產物可使前進更有利</td>\n</tr>\n<tr class=\"even\">\n<td>多快到達產物？</td>\n<td>活化障礙、酵素量、受質與抑制劑</td>\n<td>催化加速但平衡不變</td>\n</tr>\n<tr class=\"odd\">\n<td>細胞需要多少通量？</td>\n<td>ATP需求、激素、組織與區室</td>\n<td>運動時供能通量上升</td>\n</tr>\n</tbody>\n</table></div>\n<p>細胞是開放系統，持續攝入物質、排出產物與散熱。它能維持局部有序，並不表示違反熱力學第二定律，因為必須把周圍環境也納入總熵帳。代謝穩態更像持續進水與出水而水位不變的容器：濃度穩定，但流量不為零。</p>\n<h3 id=\"用同一個分子串起三章\">用同一個分子串起三章</h3>\n<p>葡萄糖的化學能先部分保存在ATP與NADH；NADH中的還原當量交給呼吸鏈，建立質子梯度，再由ATP\nsynthase合成ATP。每一次轉換都不是憑空生能，也不可能把所有釋放自由能無損轉成可用ATP。之後看到「糖解產2\nNADH」，要立刻追問它們的電子最後交給誰，而不是直接把NADH與ATP數量相加。</p>\n"
    },
    {
      "id": "topic-2",
      "title": "ΔG、ΔG°′與反應商",
      "html": "<p>在指定溫度，ΔG=ΔG°′+RT ln\nQ。Q用當下產物與反應物的活度組成；稀溶液計算常以濃度近似，嚴格的對數內容為無因次。撇號表示生化轉換標準條件，常以固定pH處理質子，不表示細胞內各物質都實際處於標準濃度。</p>\n<p>當產物被下一步快速消耗，Q下降，RT ln\nQ更負，可以把原本標準條件不利的反應往前拉。反過來，產物累積也會削弱前進驅動力。因此要區分反應本身的標準性質與當下細胞環境。</p>\n<p>算例：310 K時RT約2.58 kJ/mol，若ΔG°′=+5\nkJ/mol、Q=0.01，則ΔG≈5+2.58×(−4.605)=−6.9\nkJ/mol。標準值正，實際值仍可負；解題必須統一J與kJ。</p>\n<h3\nid=\"從反應式寫出q不要只背產物除以受質\">從反應式寫出Q，不要只背產物除以受質</h3>\n<p>對A+B⇌C+D，Q=a(C)a(D)/[a(A)a(B)]；對2A⇌B，A的活度要平方。純液態水常被吸收入標準態，固定pH的轉換式也不逐一寫H⁺。算題時依題目指定反應式與條件，不要任意把水或質子補進另一種定義的Q。</p>\n<p>把公式改寫成 <strong>ΔG=RT ln(Q/K′eq)</strong>\n最能判斷方向。Q&lt;K′eq代表目前產物比例低於平衡需要，淨反應向前；Q&gt;K′eq則反向；Q=K′eq才是平衡。這比只看ΔG°′的正負可靠。</p>\n<h3\nid=\"完整算例產物被消耗可以拉動多少\">完整算例：產物被消耗可以拉動多少？</h3>\n<p>假設A⇌B，ΔG°′=+5.0 kJ/mol，T=310 K，R=0.008314\nkJ/(mol·K)。先算RT=2.577\nkJ/mol，再算K′eq=exp(−5/2.577)≈0.144。這表示平衡時B/A約0.144，不是所有條件都不能產生B。</p>\n<p>若A=1 mmol/L、B=0.01 mmol/L，Q=0.01，ΔG≈−6.87\nkJ/mol，能向前。若B累積至0.5 mmol/L而A仍1 mmol/L，Q=0.5，ΔG≈+3.21\nkJ/mol，前進不利。兩次用的酵素與ΔG°′相同，差別是當下比例。若下一步快速消耗B，便能維持較低Q而拉動前一步。</p>\n<p>常見錯誤有三個：把攝氏37直接代入T；R使用8.314卻把其他能量當kJ；把ln誤當log₁₀。若改用常用對數，要乘上2.303。</p>\n"
    },
    {
      "id": "topic-3",
      "title": "平衡常數與反應方向",
      "html": "<p>平衡時ΔG=0，且Q=K′eq，因此ΔG°′=−RT ln\nK′eq。K′eq&gt;1時標準自由能為負；K′eq=1時為零；K′eq&lt;1時為正。但平衡不是所有分子停止反應，而是正反通量相等，沒有淨變化。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>判斷</th>\n<th>含義</th>\n<th>不能直接推論</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>ΔG&lt;0</td>\n<td>目前條件下前進有利</td>\n<td>速率一定很快</td>\n</tr>\n<tr class=\"even\">\n<td>ΔG=0</td>\n<td>達平衡，無淨驅動</td>\n<td>分子完全靜止</td>\n</tr>\n<tr class=\"odd\">\n<td>ΔG°′&lt;0</td>\n<td>標準條件前進有利</td>\n<td>任何濃度都往前</td>\n</tr>\n<tr class=\"even\">\n<td>Keq很大</td>\n<td>平衡偏向產物</td>\n<td>一定不需要酵素</td>\n</tr>\n</tbody>\n</table></div>\n<p>酵素降低活化障礙，加快正反方向接近平衡，不改變同一反應的平衡常數。細胞穩態也不同於平衡：某中間物濃度不變，可能因持續生成與持續消耗互相抵銷，整條路徑仍有通量。</p>\n<h3\nid=\"可逆與不可逆是細胞條件下的描述\">可逆與不可逆是細胞條件下的描述</h3>\n<p>接近平衡的步驟，正反通量都可能很大，實際淨方向容易被上下游濃度拉動。細胞內遠離平衡、實際ΔG明顯為負的步驟，通常不會只靠輕微濃度改變就反轉；逆向代謝常需要另一組反應繞道。糖解的三個不可逆關卡，正是之後糖新生需要繞道酵素的理由。</p>\n<p>但「不可逆」不是宇宙中任何濃度下都絕對不能逆轉，也不是看到kinase就一定不可逆。Phosphoglycerate\nkinase可以雙向使用；hexokinase在細胞糖解條件下則高度偏向磷酸化葡萄糖。要從反應整體與實際條件判讀。</p>\n<h3 id=\"選項拆解加酵素後何者改變\">選項拆解：加酵素後何者改變？</h3>\n<p>若題目固定溫度、壓力與反應組成，只增加催化酵素：到達平衡的時間可縮短，正反反應速率都可加快；K′eq、ΔG°′與最終平衡組成不因催化本身改變。若選項寫「增加產物在平衡時的比例」，那是在把催化與改變熱力學混淆。若實驗同時持續移除產物，則已改變系統條件，不能拿來反駁前述原則。</p>\n"
    },
    {
      "id": "topic-4",
      "title": "焓、熵與自發性",
      "html": "<p>ΔG=ΔH−TΔS。放熱指ΔH&lt;0，自發前進看ΔG&lt;0，兩者不能互換。吸熱反應若有足夠有利的熵變，仍可能自發；放熱反應也可能因熵代價而在某些條件下不利。</p>\n<p>蛋白摺疊常使鏈本身的構形熵下降，但釋放部分受限制的水可有利於環境熵；需要把蛋白與溶劑一起看。等溫等壓且適當系統定義下，自發過程與總熵增加相容，不能只取肽鏈一部分來判斷。</p>\n<p>國考遇到「一定放熱」要特別小心：知道ΔG負，仍不足以唯一決定ΔH正負。能確定的只是ΔH與TΔS合起來使自由能下降。</p>\n<h3\nid=\"用四種組合練習而不是把自發背成放熱\">用四種組合練習，而不是把自發背成放熱</h3>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>ΔH</th>\n<th>ΔS</th>\n<th>ΔG=ΔH−TΔS的結果（假設兩者於討論範圍近似不變）</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>負</td>\n<td>正</td>\n<td>兩項皆有利，所有討論溫度均有利</td>\n</tr>\n<tr class=\"even\">\n<td>正</td>\n<td>負</td>\n<td>兩項皆不利，均不利</td>\n</tr>\n<tr class=\"odd\">\n<td>正</td>\n<td>正</td>\n<td>溫度夠高時，熵項可能勝過吸熱代價</td>\n</tr>\n<tr class=\"even\">\n<td>負</td>\n<td>負</td>\n<td>低溫較有利，高溫時熵代價可能占上風</td>\n</tr>\n</tbody>\n</table></div>\n<p>例如ΔH=+10 kJ/mol、ΔS=+0.040 kJ/(mol·K)，在310 K時ΔG=10−12.4=−2.4\nkJ/mol：吸熱仍可自發。若把ΔS寫成40\nJ/(mol·K)，必須先換單位。這個假設例子的轉折溫度為250\nK，並不表示任何真實蛋白在所有溫度都保持固定焓熵。</p>\n<p>蛋白質復性的題目常只給「可自發恢復結構」。能推論的是在所給條件下整體自由能下降；不能據此推出一定放熱、蛋白構形熵一定增加，或任何條件下都能復性。把「蛋白本身」「溶劑」「總系統」分清，就能排除看似合理的絕對敘述。</p>\n"
    },
    {
      "id": "topic-5",
      "title": "ATP水解與磷醯基轉移勢",
      "html": "<p>ATP→ADP+Pi的標準轉換自由能常用約−30.5\nkJ/mol；細胞內實際值受ATP/ADP/Pi、Mg²⁺、pH與條件影響，不能把此數字當成所有細胞固定的值。水解有利來自整個反應的產物穩定化、溶劑化與靜電等因素。</p>\n<p>「高能鍵一斷就放能」是容易誤導的說法：單獨斷鍵需要能量，淨釋能來自舊鍵打破與新鍵形成及產物整體較穩定。ATP的磷酸酐鍵不同於一般磷酸酯；但反應能量仍要比較整個過程。</p>\n<div class=\"table-scroll\" tabindex=\"0\"><table>\n<thead>\n<tr class=\"header\">\n<th>化合物</th>\n<th>教學用相對磷醯基轉移勢</th>\n<th>代謝角色</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>PEP</td>\n<td>高於ATP</td>\n<td>可把磷酸轉給ADP</td>\n</tr>\n<tr class=\"even\">\n<td>1,3-BPG</td>\n<td>高於ATP</td>\n<td>糖解的ATP生成前驅物</td>\n</tr>\n<tr class=\"odd\">\n<td>Phosphocreatine</td>\n<td>高於ATP</td>\n<td>快速緩衝ATP供應</td>\n</tr>\n<tr class=\"even\">\n<td>ATP</td>\n<td>居中</td>\n<td>接受高轉移勢來源，再驅動其他工作</td>\n</tr>\n<tr class=\"odd\">\n<td>Glucose-6-phosphate</td>\n<td>低於ATP</td>\n<td>葡萄糖磷酸化的產物</td>\n</tr>\n</tbody>\n</table></div>\n<p>PEP水解後產物可由烯醇型轉成較穩定的酮型pyruvate，是其高轉移勢的重要來源。不同表格數字受條件影響，題目指定數值時優先使用。</p>\n<h3\nid=\"為什麼atp適合當中介不選轉移勢最高的分子\">為什麼ATP適合當中介，不選轉移勢最高的分子？</h3>\n<p>ATP位於常見磷酸化合物的中間層級，可以接受PEP、1,3-BPG或phosphocreatine的磷醯基，也能把磷醯基轉給葡萄糖等較低轉移勢的接受者。若只追求最高轉移勢，就失去在不同反應間方便接收與交付的優點。ATP在水中又有足夠的動力學穩定性，通常需要適合酵素才迅速反應。</p>\n<p>磷酸酐水解的產物有較有利的共振、溶劑化及電荷分布；PEP還多了產物烯醇轉酮型的穩定化。Acetyl-CoA雖沒有以磷酸鍵攜帶醯基，硫酯水解也可有高轉移勢。因此「高能化合物」不能等同「有磷酸的化合物」，更不能把一般磷酸酯都算成和ATP一樣。</p>\n<h3\nid=\"atp濃度下降不只影響數量也影響做功能力\">ATP濃度下降不只影響數量，也影響做功能力</h3>\n<p>對ATP水解，近似Q=[ADP][Pi]/[ATP]（使用相應標準態）。ATP/ADP比下降或Pi增加會使Q上升，水解ΔG變得較不負。也就是說，同一莫耳ATP在不同細胞條件下可用的自由能不必相同。這是為何標準−30.5不能無條件套進所有生理算題。</p>\n<p>Creatine\nkinase利用phosphocreatine+ADP⇌creatine+ATP，在肌肉需求突然增加時緩衝ATP。它不是創造新的總能量：先前存入磷酸肌酸的能量被取用，之後仍需代謝補回。</p>\n"
    },
    {
      "id": "topic-6",
      "title": "耦合不是把兩個反應寫在旁邊",
      "html": "<figure><div class=\"table-scroll\" tabindex=\"0\"><img src=\"assets/biochemistry/energy-coupling.svg\" alt=\"ATP與葡萄糖磷酸化耦合，正負自由能相加\" style=\"width:100%;min-width:520px;max-width:720px;height:auto\"></div><figcaption>ATP與葡萄糖磷酸化耦合，正負自由能相加。手機可橫向捲動閱讀；詳細條件與收支見本節。</figcaption></figure><p>若反應A自由能+14、反應B為−30，真正耦合且化學計量相容時總ΔG=−16\nkJ/mol。自由能可以相加，但必須有實際共同中間物、直接基團轉移或機械／電化學連結，不能在紙上相加就使任意兩個互不相關反應耦合。</p>\n<p>Hexokinase不是先讓ATP在旁邊水解，再把熱拿來磷酸化葡萄糖；它在活性中心將ATP的磷醯基直接轉給葡萄糖。ATP\nsynthase則透過質子電化學梯度與旋轉構形變化驅動合成，屬另一種耦合方式。</p>\n<p>ATP→AMP+PPi後，PPi再水解，可使整體反應更有利。回收AMP至ATP通常需要相當於兩個高能磷酸鍵的能量投入，因此不能把ATP→AMP與ATP→ADP在能量帳上一律算相同。</p>\n<h3 id=\"一個可以真的相消的耦合算例\">一個可以真的相消的耦合算例</h3>\n<p>用教學標準值，glucose+Pi→G6P+H₂O的ΔG°′約+13.8\nkJ/mol；ATP+H₂O→ADP+Pi約−30.5。相加並消去Pi與H₂O，得到glucose+ATP→G6P+ADP，總值約−16.7\nkJ/mol。這說明直接磷醯基轉移在標準條件下有利；細胞內仍要再代入實際濃度判斷。</p>\n<p>若某反應+50，而只耦合一個−30.5的水解，在相同標準條件下總值仍+19.5，不能僅因「用了ATP」就宣稱一定向前。可能需要不同實際濃度、更強耦合或不同化學計量。考題若把反應乘二，ΔG也乘二；若反轉，ΔG變號，K則取倒數。</p>\n<h3 id=\"atpamp為何算兩個atp當量\">ATP→AMP為何算兩個ATP當量？</h3>\n<p>以脂肪酸活化為例，ATP參與生成活化中間物並釋出PPi；PPi再水解為2Pi，使總反應更偏向前進。重新由AMP恢復ATP，需把兩個磷酸酐鍵的能量補回。可用adenylate\nkinase的AMP+ATP→2ADP，再將兩個ADP各磷酸化一次理解。因此是「一分子ATP被使用、成本約兩個高能磷酸鍵」，不是反應式憑空消耗兩分子ATP；PPi水解也不是再額外消耗第三個ATP。</p>\n"
    },
    {
      "id": "topic-7",
      "title": "氧化還原：電子流向與能量",
      "html": "<p>氧化是失去電子，還原是得到電子。NAD⁺接受氫化物後成NADH；FAD可接受兩電子與兩質子成FADH₂，且某些黃素可經單電子中間態。NADH與NADPH雖化學反應性相似，因酵素辨認與細胞池分配而有不同功能分工。</p>\n<p>常見分工是NAD⁺/NADH偏向分解代謝與能量回收，NADPH提供還原性生合成與抗氧化所需電子。這是主要角色，不是每個區室所有反應都遵守絕對排他規則。</p>\n<p>ΔG°′=−nFΔE°′，ΔE°′以接受者減供應者的還原電位計算。若電子由較低還原電位供體流向較高電位受體，ΔE正而ΔG負。n是電子數，不是質子數。下一章將看這個自由能如何用於把質子泵出基質。</p>\n<h3 id=\"nad與fad怎麼接電子\">NAD與FAD怎麼接電子？</h3>\n<p>NAD⁺的菸鹼醯胺環接受一個hydride（H⁻，含兩電子與一質子）形成NADH，另一質子常釋入溶液。FAD與FMN可參與兩電子與單電子反應，適合銜接後面一次傳一電子的Fe-S中心或cytochrome。多數NAD型輔酶在酵素之間移動，許多flavin則緊密結合於特定蛋白；不能想成所有FADH₂都在基質自由游動再尋找complex\nII。</p>\n<p>NADPH多出來的磷酸是辨認標記，電子轉移仍發生在相同類型的菸鹼醯胺部分，不是多一個「可拿來製ATP的高能磷酸」。細胞通常維持有利於接受電子的NAD池及有利於供應還原力的NADP池；分池讓分解供能與還原合成可各自調節。</p>\n<h3 id=\"還原電位算例與正負號檢查\">還原電位算例與正負號檢查</h3>\n<p>設供體還原電位−0.32 V、受體+0.82 V，ΔE°′=0.82−(−0.32)=1.14\nV。若轉移2電子，F≈96.5 kJ/(V·mol)，ΔG°′≈−2×96.5×1.14=−220\nkJ/mol。接受電子者電位較高，電子轉移應有利，故算出負ΔG才符合方向。</p>\n<p>這不代表每個NADH必定完整保存220\nkJ為ATP；呼吸鏈以分段轉移將部分自由能保存成梯度。若把ΔE算成供體減受體，整個符號會倒過來。若題目改成一次4電子還原一個O₂，n與反應式都必須同步更改。</p>\n"
    },
    {
      "id": "topic-8",
      "title": "兩種ATP生成與能量狀態",
      "html": "<p>受質階層磷酸化由高轉移勢受質直接將基團轉給ADP或GDP。它可出現在細胞質糖解，也可出現在粒線體的succinyl-CoA\nsynthetase反應；不能背成只有細胞質。氧化磷酸化則仰賴電子傳遞建立梯度，再由ATP\nsynthase利用。</p>\n<p>Energy\ncharge=(ATP+0.5ADP)/(ATP+ADP+AMP)，範圍0到1。若ATP、ADP、AMP分別為6、3、1，能量荷為(6+1.5)/10=0.75。這只是腺嘌呤核苷酸池狀態的指標，不能代表所有區室的能量需求或直接等於細胞健康程度。</p>\n<p>Adenylate\nkinase的2ADP⇌ATP+AMP讓ATP消耗引發較敏感的AMP變化，連到AMPK等能量感測。高能量常抑制分解供能、支持儲存，低能量則相反；實際仍取決於器官與訊號。學代謝調控時要同時說出「哪個器官、哪個酵素、哪個狀態」。</p>\n<h3 id=\"energy-charge與amp為何對缺能敏感\">Energy\ncharge與AMP為何對缺能敏感</h3>\n<p>Energy\ncharge的分母是ATP+ADP+AMP的總池，不是只除ATP；ADP權重0.5，AMP為0。全為ATP時等於1，全為AMP時等於0，全為ADP時等於0.5。它與ATP/ADP比都能描述能量狀態，但不是同一個數值。</p>\n<p>在adenylate\nkinase接近平衡的簡化模型，AMP約與ADP²/ATP相關。因此ATP只小幅下降、ADP上升時，AMP的相對變化可很大，利於能量感測。AMPK活化通常支持供能、抑制耗能合成，但不同酵素的磷酸化結果不一樣；不能背成「磷酸化一律活化」或「一律抑制」。</p>\n<h3\nid=\"跨章練習低氧時為何不能只增加nadh\">跨章練習：低氧時為何不能只增加NADH？</h3>\n<p>氧是呼吸鏈末端接受者。氧不足使NADH再氧化受限，NAD⁺不足又限制多種氧化反應；此時再提供更多電子供體不會自動解除末端瓶頸。胞質藉LDH把pyruvate還原為lactate來再生NAD⁺，維持糖解的直接ATP。這是一種維持碳流的策略，不代表乳酸反應本身額外產ATP。</p>\n<p>讀完本章應能用一條因果句回答：濃度改變Q，Q改變實際ΔG；催化改變速率；真正耦合改變總反應。三者若仍混在一起，先回到算例，不急著背更多路徑。</p>\n"
    }
  ],
  "questions": [
    {
      "title": "01　ΔG°′為+5、310K且Q=0.01，ΔG約多少？",
      "prompt": "<p>ΔG°′為+5、310K且Q=0.01，ΔG約多少？</p>",
      "answer": "<p>RT約2.58 kJ/mol，ΔG=5+2.58 ln0.01≈−6.9 kJ/mol。標準不利不等於實際不利。</p>"
    },
    {
      "title": "02　平衡時分子是否停止反應？",
      "prompt": "<p>平衡時分子是否停止反應？</p>",
      "answer": "<p>否，正反反應速率相等，只有淨變化為零。穩態也未必達平衡。</p>"
    },
    {
      "title": "03　自發過程是否必定放熱？",
      "prompt": "<p>自發過程是否必定放熱？</p>",
      "answer": "<p>否。ΔG=ΔH−TΔS，吸熱也可能被有利熵變補償。</p>"
    },
    {
      "title": "04　斷開ATP的鍵本身是否釋能？",
      "prompt": "<p>斷開ATP的鍵本身是否釋能？</p>",
      "answer": "<p>單獨斷鍵需要能量；整體水解的產物形成與穩定化才造成淨自由能下降。</p>"
    },
    {
      "title": "05　兩反應ΔG為+14及−30，可否直接保證前者進行？",
      "prompt": "<p>兩反應ΔG為+14及−30，可否直接保證前者進行？</p>",
      "answer": "<p>總和雖−16，但需真實化學或物理耦合，不能只在紙上相加。</p>"
    },
    {
      "title": "06　ATP→AMP的回收成本與ATP→ADP相同嗎？",
      "prompt": "<p>ATP→AMP的回收成本與ATP→ADP相同嗎？</p>",
      "answer": "<p>通常不同。AMP回到ATP需兩次磷酸化當量，PPi水解也支持整體方向。</p>"
    },
    {
      "title": "07　ΔE為正，ΔG應為何符號？",
      "prompt": "<p>ΔE為正，ΔG應為何符號？</p>",
      "answer": "<p>ΔG=−nFΔE，n及F為正，因此ΔG負；n指電子數。</p>"
    },
    {
      "title": "08　ATP6、ADP3、AMP1，energy charge為何？",
      "prompt": "<p>ATP6、ADP3、AMP1，energy charge為何？</p>",
      "answer": "<p>(6+0.5×3)/(6+3+1)=0.75。它是核苷酸池指標，不代表全部區室狀態。</p>"
    },
    {
      "title": "09　受質階層磷酸化是否只在胞質？",
      "prompt": "<p>受質階層磷酸化是否只在胞質？</p>",
      "answer": "<p>否，TCA的succinyl-CoA synthetase也是粒線體內例子。</p>"
    },
    {
      "title": "10　酵素使反應變快，會改變Keq嗎？",
      "prompt": "<p>酵素使反應變快，會改變Keq嗎？</p>",
      "answer": "<p>不會。酵素降低活化障礙，改變接近平衡速度，不改變同反應的平衡常數。</p>"
    }
  ],
  "recalls": [
    [
      "ΔG很負卻反應很慢，應分別看哪兩種能量？",
      "反應自由能差決定熱力學驅動；活化自由能障礙影響速率。酵素降低後者，不改變前者。"
    ],
    [
      "Q與K′eq比較時，何時往前？",
      "ΔG=RT ln(Q/K′eq)；Q<K′eq向前有利，Q>K′eq則反向。"
    ],
    [
      "酵素可讓平衡產物比例提高嗎？",
      "在相同條件下不行；它加速接近平衡，不改K′eq。持續移除產物是改變系統條件。"
    ],
    [
      "吸熱但自發如何可能？",
      "正ΔH可被更大的正TΔS補償，使ΔG=ΔH−TΔS仍為負。"
    ],
    [
      "ATP為什麼適合在不同反應間接收與轉交磷醯基？",
      "轉移勢居中，能接受PEP等較高轉移勢來源，也能驅動較低轉移勢受質的磷酸化；並有動力學穩定性。"
    ],
    [
      "一分子ATP變AMP為何常算兩個當量？",
      "回收AMP到ATP需補回兩個磷酸酐鍵當量；不代表原反應式實際消耗兩分子ATP。"
    ],
    [
      "還原電位如何決定電子轉移的ΔG符號？",
      "ΔE用受體減供體；ΔG=−nFΔE。受體電位較高時ΔE正、ΔG負，n為電子數。"
    ],
    [
      "ATP、ADP、AMP為6、3、1，energy charge多少？",
      "(6+0.5×3)/10=0.75；穩態濃度不等於沒有ATP周轉。"
    ]
  ],
  "readingIntro": "先分清方向與速率，再用Q、平衡常數與算例建立自由能直覺；最後把ATP耦合、電子轉移與能量狀態連起來。",
  "figure": "<p>閱讀順序：先理解名詞與方向，再逐步推導算例，最後用歷屆不同問法檢查；每節末有對應的閉卷回想。</p>",
  "exams": {
    "bankCount": 1022,
    "yearMin": 96,
    "yearMax": 115,
    "note": "人工精選並按解題機制分組，非完整頻率統計；各題保留原卷與答案連結。選項措辭有條件限制或歧義時，解析另列，不自行改寫官方採計答案。",
    "groups": [
      {
        "id": "group-1",
        "title": "磷醯基轉移勢與ATP角色",
        "topic": "topic-5",
        "summary": "比較水解自由能的大小，不把所有磷酸鍵視為相同。",
        "questions": [
          {
            "number": 50,
            "text": "50 \n在標準條件下,下列何者在水解所釋出的自由能(free energy)最大? \nAcreatine phosphate \n \nBphosphoenolpyruvate \nCATP \n \nD1,3-bisphosphoglycerate \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  383.69,
                  570.0,
                  423.18
                ]
              }
            ],
            "id": "96-1-2-50",
            "year": 96,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/96/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=096040&c=122&s=2001&q=1&verify=step1-20261013-096040-122-2001-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=096040&y=2007",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/96/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=096040&c=122&s=2001&q=1&verify=step1-20261013-096040-122-2001-M",
            "corrected": true,
            "answerVersion": "M",
            "point": "磷醯基轉移勢與ATP角色",
            "analysis": "PEP水解的標準自由能下降幅度大於題目其他選項；產物由烯醇轉為酮型的穩定化是重要原因。 A磷酸肌酸與D 1,3-BPG雖高於ATP，仍低於PEP的標準轉移勢；C ATP是中間層級。題目比較標準水解自由能下降幅度，不是比較細胞濃度或酵素速率。",
            "trap": "回到本組對應小節，先重建因果，再判斷題目問正確或錯誤；本題的各選項差異見上方逐項解析。"
          }
        ]
      },
      {
        "id": "group-2",
        "title": "自由能、濃度與平衡",
        "topic": "topic-2",
        "summary": "先確定標準值或實際值，再代入對數關係。",
        "questions": [
          {
            "number": 48,
            "text": "48 \n下列有關自由能變化(∆G)的敘述中何者正確? \nA當K'eq 大於1 時,∆G'o 小於0 \nB當K'eq 小於1 時,∆G'o 小於0 \nC當K'eq 等於1 時,∆G'o 等於1 \nD對任一反應而言,∆G'o 為一常數 \n",
            "regions": [
              {
                "page": 4,
                "rect": [
                  30.0,
                  444.36,
                  570.0,
                  487.86
                ]
              }
            ],
            "id": "98-1-2-48",
            "year": 98,
            "session": 1,
            "paper": 2,
            "subject": "biochemistry",
            "pdf": "exams/98/1/medicine-2-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=098020&c=103&s=c021&q=1&verify=step1-20261013-098020-103-c021-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=098020&y=2009",
            "answers": [
              "A"
            ],
            "answerPdf": "exams/98/1/medicine-2-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=098020&c=103&s=c021&q=1&verify=step1-20261013-098020-103-c021-M",
            "corrected": true,
            "answerVersion": "M",
            "point": "自由能、濃度與平衡",
            "analysis": "ΔG°′=−RT ln K′eq；K′eq大於1時ln為正，故標準自由能為負。實際ΔG另受Q影響。 B把lnK與負號關係顛倒；C在K=1時ln1=0，因此ΔG°′=0而非1。D若補上固定溫度與標準態，對特定反應的標準自由能確可視為常數；原題未寫條件，措辭有歧義。保留官方A，不把D解釋成『標準自由能隨即時濃度改變』；改變濃度直接影響的是實際ΔG。",
            "trap": "回到本組對應小節，先重建因果，再判斷題目問正確或錯誤；本題的各選項差異見上方逐項解析。"
          }
        ]
      },
      {
        "id": "group-3",
        "title": "催化與熱力學的分界",
        "topic": "topic-3",
        "summary": "酵素改變速率，不能替反應改寫平衡。",
        "questions": [
          {
            "number": 75,
            "text": "75.在一個酵素催化反應中,酵素改變的是原化學反應的:\n \nA.平衡常數(equilibrium constant)\nB.速率常數(rate constant)\nC.反應物和產物之間的自由能差(free energy difference)\nD.產物的化學結構\n",
            "regions": [
              {
                "page": 11,
                "rect": [
                  30.0,
                  506.03,
                  569.96,
                  609.49
                ]
              }
            ],
            "id": "110-1-1-75",
            "year": 110,
            "session": 1,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/110/1/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=110020&c=301&s=11&q=1&verify=step1-20261013-110020-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=110020&y=2021",
            "answers": [
              "B"
            ],
            "answerPdf": "exams/110/1/medicine-1-S.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=S&code=110020&c=301&s=11&q=1&verify=step1-20261013-110020-301-11-S",
            "corrected": false,
            "answerVersion": "S",
            "originalAnswers": [
              "B"
            ],
            "point": "催化與熱力學的分界",
            "analysis": "酵素降低活化障礙、改變速率，不改變同反應的平衡常數及反應物產物自由能差。 A平衡常數與C反應物產物自由能差不因催化而變；D產物化學結構也不是由加快相同反應而改變。酵素改變反應途徑與活化障礙，因此答案落在速率。",
            "trap": "回到本組對應小節，先重建因果，再判斷題目問正確或錯誤；本題的各選項差異見上方逐項解析。"
          }
        ]
      },
      {
        "id": "group-4",
        "title": "自發性、焓與熵",
        "topic": "topic-4",
        "summary": "自發不等於放熱，需看整體系統。",
        "questions": [
          {
            "number": 74,
            "text": "74.某種蛋白質可用尿素(urea)將其變性(denature),且將尿素移除後會自發性地折疊回其具有活性的三級\n結構。關於下列熱力學對於該蛋白質再折疊(protein refolding)的描述,何者錯誤? \nA.蛋白質本身亂度(entropy)一定減少  \nB.過程一定是放熱反應  \nC.反應過程的自由能(free energy)一定減少  \nD.總亂度(蛋白質本身和環境)一定增加 \n \n \n \n\n",
            "regions": [
              {
                "page": 13,
                "rect": [
                  30.0,
                  556.07,
                  587.0,
                  757.0
                ]
              },
              {
                "page": 14,
                "rect": [
                  30.0,
                  28.0,
                  587.0,
                  31.55
                ]
              }
            ],
            "id": "115-1-1-74",
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
            "point": "自發性、焓與熵",
            "analysis": "自發復性代表適當條件下ΔG有利，不能單憑此斷言一定放熱；須同時考慮焓與總熵。 題目問錯誤敘述。A指肽鏈從較多構形縮為摺疊結構；C、D表達題設自發過程的整體熱力學方向。B把ΔG<0誤當ΔH<0；有利熵變可補償正ΔH，故不能保證放熱。需把蛋白與環境一起看。",
            "trap": "回到本組對應小節，先重建因果，再判斷題目問正確或錯誤；本題的各選項差異見上方逐項解析。"
          }
        ]
      },
      {
        "id": "group-5",
        "title": "ATP生成位置",
        "topic": "topic-8",
        "summary": "用糖解與TCA反例排除『只有胞質』。",
        "questions": [
          {
            "number": 96,
            "text": "96.下列關於人類細胞內受質階層磷酸化(substrate-level phosphorylation)與氧化磷酸化(oxidative \nphosphorylation)生化反應進行之位點(compartments)分布,何者正確? \n \nA.受質階層磷酸化只在粒線體中進行,氧化磷酸化在細胞質中進行 \nB.受質階層磷酸化只在細胞質中進行,氧化磷酸化在粒線體中進行 \nC.受質階層磷酸化可分別在細胞質及粒線體中進行,氧化磷酸化在粒線體中進行 \nD.受質階層磷酸化與氧化磷酸化皆只在粒線體中進行 \n",
            "regions": [
              {
                "page": 14,
                "rect": [
                  30.0,
                  655.61,
                  570.0,
                  779.05
                ]
              }
            ],
            "id": "106-2-1-96",
            "year": 106,
            "session": 2,
            "paper": 1,
            "subject": "biochemistry",
            "pdf": "exams/106/2/medicine-1-Q.pdf",
            "source": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=Q&code=106100&c=301&s=11&q=1&verify=step1-20261013-106100-301-11-Q",
            "query": "https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e=106100&y=2017",
            "answers": [
              "C"
            ],
            "answerPdf": "exams/106/2/medicine-1-M.pdf",
            "answerSource": "https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?t=M&code=106100&c=301&s=11&q=1&verify=step1-20261013-106100-301-11-M",
            "corrected": false,
            "answerVersion": "M",
            "originalAnswers": [
              "C"
            ],
            "point": "ATP生成位置",
            "analysis": "受質階層磷酸化可在胞質糖解及粒線體TCA出現；氧化磷酸化位於粒線體內膜。 A把氧化磷酸化放錯區室；B漏掉TCA的succinyl-CoA synthetase；D漏掉胞質PGK與PK。先舉出一個胞質、一個粒線體受質階層磷酸化反例即可排除。",
            "trap": "回到本組對應小節，先重建因果，再判斷題目問正確或錯誤；本題的各選項差異見上方逐項解析。"
          }
        ]
      }
    ]
  }
});
