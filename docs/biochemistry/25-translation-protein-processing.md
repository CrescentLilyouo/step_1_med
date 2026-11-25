# 第 25 章　蛋白質轉譯與轉譯後修飾

## 從 mRNA 到胺基酸序列

核糖體沿 mRNA 的 5′→3′ 讀取，蛋白由 N 端往 C 端延長。起始位置確立之後，每三個核苷酸一組。遺傳密碼的簡併性指同一胺基酸可有多個 codon；在標準密碼表的同一解讀情境中，一個 sense codon 指定一個胺基酸。

算例：5′-AUG GCU UUU UGA-3′ 產生 Met–Ala–Phe，終止密碼子由蛋白質釋放因子辨識，不多算一個胺基酸。題目給單股序列時先認清是 DNA 模板、DNA 編碼股或 mRNA，再辨閱讀框。

## tRNA 的兩端與 wobble

tRNA 的反密碼子與 mRNA 反平行配對，胺基酸則接在另一端的 3′-CCA 末端腺苷。若 codon 與 anticodon 都由 5′ 端開始編號，codon 的第三位對到 anticodon 的第一位。此位置容許較寬鬆的配對，使一種 tRNA 可讀數種同義密碼子。

例如 5′-GAA-3′ 的完全互補反密碼子寫成 3′-CUU-5′，若答案欄規定 5′ 起頭則寫 5′-UUC-3′。先畫兩端再談 wobble；寬鬆不等於任意，仍受特定鹼基與修飾鹼基的配對規則限制。

## 裝載與校對先於核糖體解碼

Aminoacyl-tRNA synthetase 先讓胺基酸與 ATP 形成 aminoacyl-AMP，再將胺基酸轉到相應 tRNA 的末端，形成高能酯鍵。ATP 到 AMP，再加上 PPi 水解，活化一個胺基酸相當於消耗兩個高能磷酸鍵。部分酵素有編輯功能，可排除很相似的錯誤胺基酸。

核糖體主要檢查 codon–anticodon 是否配對。若 tRNA 的反密碼子正確、卻被錯接另一種胺基酸，核糖體可能照常接受它，使成熟蛋白在該位置出錯。這與基因本身發生 missense mutation 的差別，在於 DNA 與 mRNA 序列可完全正常。

## 細菌和真核的起始定位

細菌小次單元的 16S rRNA 可與 mRNA 的 Shine–Dalgarno 序列配對，將起始密碼子放到正確位置。IF2–GTP 協助攜帶 fMet 的起始 tRNA 就位。多順反子 mRNA 的不同編碼區各自有起始定位需求。

典型真核胞質路徑由 eIF4E 辨識 5′ 帽、eIF4G 作支架，預起始複合體掃描到合適的 AUG 周圍序列（Kozak context）；eIF2–GTP 攜帶 Met 起始 tRNA。辨題時圈出「帽」或「16S」，不要僅憑兩者都用 AUG 選答案。

## 核糖體三位置與胜肽轉移

起始 tRNA 直接位於 P 位。下一個帶胺基酸的 tRNA 進入 A 位，A 位胺基酸的 α-胺基攻擊 P 位 peptidyl-tRNA 的酯鍵，使整條新生胜肽轉到 A 位。催化中心的要角是大次單元 rRNA，故稱核糖體具有 ribozyme 活性。

轉位後，帶著新生鏈的 tRNA 從 A 移到 P，去醯化的 tRNA 從 P 移到 E 並離開，A 位再度可用。畫圖時始終把「帶鏈」標在 tRNA 上，避免誤以為 A 位胺基酸被搬去接在仍停於 P 位的鏈後。

## 延長、轉位與能量帳

細菌的 EF-Tu–GTP 或真核的 eEF1A–GTP 負責遞送延長用的 aminoacyl-tRNA；細菌 EF-G 或真核 eEF2 使用 GTP 推進轉位。胜肽鍵形成的能量已儲存在先前裝載 tRNA 的酯鍵中，成鍵當下無須再直接水解一個 ATP。

典型延長循環若從游離胺基酸算起，裝載相當於兩個高能磷酸鍵，加上遞送與轉位各一個 GTP，共約四個高能磷酸鍵。若題目已給裝載好的 tRNA，或問整條蛋白含起始終止的總耗能，就不能原封照套這個數字。

| 步驟 | 直接能量或能量來源 | 解題提示 |
| --- | --- | --- |
| 裝載游離胺基酸 | ATP → AMP＋PPi | 兩個高能磷酸鍵等價量 |
| 遞送延長用 tRNA | GTP → GDP＋Pi | EF-Tu／eEF1A |
| 胜肽鍵形成 | 既有酯鍵 | 當下不直接水解額外 NTP |
| 轉位 | GTP → GDP＋Pi | EF-G／eEF2 |

## 終止與蛋白合成抑制劑

當 UAA、UAG 或 UGA 在標準解讀情境下進入 A 位，release factor 促使 P 位胜肽與 tRNA 間的酯鍵水解，蛋白釋出。停止時加入的是水；終止密碼子本身沒有對應的一般 aminoacyl-tRNA。

藥物題先按機器分類。Tetracycline 阻礙細菌 aminoacyl-tRNA 進入 A 位；aminoglycoside 可干擾解碼，macrolide 作用在 50S 的新生肽通道附近。Rifampicin 作用於細菌 RNA polymerase。蛋白產量都可能下降，但直接靶點不同。

## 新生鏈如何進入分泌路徑

分泌蛋白的轉譯通常先在胞質開始。疏水性訊號序列從核糖體露出時，SRP 結合並將核糖體與新生鏈帶至 ER 膜上的受體與 translocon，之後續行轉譯與跨膜輸送。訊號肽可被切除；內部訊號錨則可保留成為跨膜區。

胰島素是分辨步驟的例子：preproinsulin 的訊號肽引導進入 ER，切除後成 proinsulin，折疊並建立二硫鍵；分泌顆粒內再切去 C-peptide 得到成熟胰島素。訊號肽與 C-peptide 並非同一段，切除的區室也不同。

## 醣基化與高基氏體分選

典型 N-linked glycosylation 從 ER 開始，預組裝的寡醣接到 Asn 側鏈醯胺氮，辨認序列常為 Asn-X-Ser/Thr，X 不可為 Pro。符合 motif 仍要看位點暴露及所在區室。常見分泌路徑的 O-linked 醣化則在 Golgi 逐個加糖至 Ser 或 Thr 的羥基。

溶小體水解酶所帶的 mannose-6-phosphate 是用來分選的醣鏈標記。I-cell disease 的典型問題是形成此標記的 phosphotransferase 缺陷，許多水解酶被分泌到細胞外，溶小體內反而缺酵素。題目問「血中高、細胞內不足」時，先追去向。

## 可逆標記與不可逆切割

常考的蛋白 kinase 將 ATP 的磷酸基轉到 Ser、Thr、Tyr 的羥基；phosphatase 可水解除去此標記。磷酸化改變電荷、構形或結合伙伴，同一種修飾在不同蛋白上可以促進或抑制活性。

相較之下，蛋白水解活化會切斷主鏈，例如 trypsinogen 變成 trypsin；細胞不能只靠 phosphatase 把它接回原狀。維生素 K 依賴的 γ-carboxylation 是另一種化學反應，在特定凝血蛋白的 Glu 側鏈增加羧基，有助結合鈣。

| 改變 | 典型位置或受質 | 作用後果 |
| --- | --- | --- |
| 磷酸化 | Ser、Thr、Tyr | 依蛋白而活化或抑制 |
| 羥化 | 膠原蛋白的 Pro、Lys | 影響穩定性或後續加工 |
| γ-羧化 | 特定凝血蛋白的 Glu | 有助 Ca²⁺ 結合 |
| 切除前驅胜肽 | proinsulin | 產生成熟胰島素與 C-peptide |

## 折疊監控與 ubiquitin

新生鏈須折疊成適當構形。ER 品管可保留折疊異常的分泌蛋白，部分經 ER-associated degradation 回到胞質側，由 ubiquitin–proteasome 系統處理。故蛋白量降低可能來自分解加速，即使 mRNA 和初始合成率正常。

E1 用 ATP 活化 ubiquitin，E2 攜帶它，E3 對受質選擇特別重要；常見連接為 ubiquitin C 端與受質 Lys 側鏈間的異肽鍵。K48 型多聚鏈常導引至 26S proteasome，單一 ubiquitin 及其他鏈型也可參與運輸或訊號，不能把所有標記都當成降解。

## 由臨床線索定位處理階段

同樣是成熟蛋白不足，若新生鏈根本沒有進入 ER，先找訊號肽或定位步驟；若鏈能進 ER 卻滯留，可查折疊與品質管制；若成熟蛋白被送到錯誤區室，先查分選標記。解題應將合成率、位置與半衰期當成三個不同變數。

以膠原蛋白為例，proline、lysine 羥化發生於細胞內，需維生素 C 維持羥化酵素所需的鐵狀態；分泌後纖維交聯則涉及需銅的 lysyl oxidase。遇到結締組織脆弱，先把題幹中的區室和輔因子配成一對，再決定是哪一步。
