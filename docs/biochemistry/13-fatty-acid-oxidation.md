# 脂肪酸氧化與酮體：從燃料動員到跨器官供能

## 脂肪的高能量來自哪裡：先看運輸與器官

脂肪酸的碳比葡萄糖更還原，完全氧化時能轉出較多電子；triacylglycerol（TAG）又能以較少水分伴隨的形式儲存，因此是重要的長期能量儲備。但脂肪不是一離開脂肪細胞便直接在血液中燃燒，必須經過動員、運輸、細胞攝取、活化與區室運送。

脂肪組織TAG水解放出非酯化脂肪酸與glycerol。長鏈非酯化脂肪酸在血中主要與albumin結合；「free fatty acid」表示未被酯化，不代表全部游離在水相。Glycerol可到肝臟進糖質新生；多數偶數鏈脂肪酸則主要供能，不能淨提供葡萄糖碳。

| 組織 | 脂肪酸／酮體的使用重點 |
|---|---|
| 肝臟 | 氧化脂肪酸以支援供糖，並可產酮；不利用自己產的酮體 |
| 心肌與骨骼肌 | 可氧化脂肪酸，亦可利用酮體；取決於狀態 |
| 腦 | 平時依賴葡萄糖；長期空腹增加利用酮體，不把長鏈脂肪酸當主要直接燃料 |
| 成熟紅血球 | 無粒線體，不能靠β氧化或酮體氧化製ATP |

Lipolysis是水解TAG，β-oxidation是逐段氧化脂肪酸碳鏈。前者主要回答「燃料是否釋放」，後者回答「進細胞後如何使用」。兩者相關，但酵素、位置與產物不同。

## 脂肪酸活化：為何一個ATP要扣兩個ATP當量

Acyl-CoA synthetase（thiokinase）使fatty acid＋CoA＋ATP形成fatty acyl-CoA＋AMP＋PPi。PPi後續被水解，協助推動整體反應。這不是ATP→ADP的一個高能磷酸鍵支出，而是ATP→AMP，通常記為消耗2 ATP當量。

活化先形成acyl-adenylate中間物，再由CoA接上脂醯基；因此不能把這一步寫成脂肪酸「被磷酸化」後永久帶著磷酸進粒線體。真正形成的是高能硫酯鍵，CoA的硫與脂肪酸羧基形成連結。

能量題先圈出起點：若給的是游離palmitate，需扣活化成本；若給的是已活化palmitoyl-CoA，題目通常不再扣同一筆。也不能每跑一圈β氧化就再扣2 ATP，因為縮短後的碳鏈仍以acyl-CoA形式接續反應。

| 起點 | 後續完整氧化時的活化扣款 |
|---|---|
| 游離脂肪酸 | 通常扣2 ATP當量 |
| 已活化fatty acyl-CoA | 不重複扣原活化成本 |
| TAG中的脂肪酸鏈 | 先分清水解、活化與glycerol部分，不能只套單鏈答案 |

「用了幾個ATP分子」與「耗幾個高能磷酸鍵當量」是不同問法。這一步用1個ATP分子，但代價相當於2 ATP→ADP的能量計帳；國考通常在後者的總ATP收支出題。

## Carnitine shuttle：搬的是脂醯基，不是整包CoA

長鏈acyl-CoA不能直接穿越粒線體內膜進入基質。CPT-I位於外膜，先把脂醯基從CoA轉到carnitine，形成acylcarnitine；carnitine-acylcarnitine translocase跨內膜交換運送；CPT-II在內膜基質側把脂醯基交回基質CoA，重新形成acyl-CoA。

| 元件 | 功能 | 最常見錯誤 |
|---|---|---|
| CPT-I | Acyl-CoA→acylcarnitine | 誤以為直接做β氧化切斷碳鏈 |
| Translocase | 跨內膜交換acylcarnitine與carnitine | 忘記CPT本身不等於跨膜通道 |
| CPT-II | 基質側再生acyl-CoA | 誤以為將脂肪酸送出細胞 |

胞質側與基質側CoA池藉此保持區隔，穿膜的是acylcarnitine而非整個acyl-CoA。短鏈、中鏈脂肪酸的進入不依賴同樣的長鏈carnitine shuttle，因此CPT缺陷不能簡化成「所有脂肪酸都完全無法進粒線體」。

Malonyl-CoA抑制CPT-I，是合成與氧化協調的重要開關。當細胞正在合成脂肪酸，malonyl-CoA升高，就降低長鏈脂醯基進基質氧化的機會。它不是抑制CPT-II的標準答案，也不是carnitine本身的分解產物。

## β氧化四步：氧化、加水、再氧化、硫解

β碳是以羧基碳為C1時的C3。每一輪先把這個位置轉成適合切割的β-keto狀態，再從羧基端釋出二碳acetyl-CoA。主要路徑在粒線體基質及相關內膜酵素系統進行。

| 順序 | 酵素與變化 | 收支 |
|---|---|---|
| 1 | Acyl-CoA dehydrogenase：形成trans-Δ2雙鍵 | FAD相關電子轉出 |
| 2 | Enoyl-CoA hydratase：雙鍵加水 | 形成L-3-hydroxyacyl-CoA |
| 3 | L-3-hydroxyacyl-CoA dehydrogenase：羥基氧化成酮 | NAD⁺→NADH |
| 4 | Thiolase：加入CoA-SH後硫解 | Acetyl-CoA＋縮短2C的acyl-CoA |

第一步的FAD緊密結合酵素，電子經electron-transfer flavoprotein（ETF）及ETF:ubiquinone oxidoreductase送到CoQ；不是每輪釋出一個自由FADH₂分子游到complex II。計算時可用「FADH₂當量」表示，但路徑圖應保留ETF入口。

第三步產NADH，之後由complex I把電子交給呼吸鏈。β氧化本身的四步不直接產ATP；ATP收益主要來自電子氧化與acetyl-CoA進TCA。缺氧時呼吸鏈難以再生足夠氧化型輔酶，β氧化便受限，不能因四步沒把O₂寫在受質欄就說它能長期無氧供能。

## 圈數與碳數：最後一刀產兩個acetyl-CoA

對飽和、偶數碳、直鏈脂肪酸Cₙ，一般β氧化圈數為n/2−1，acetyl-CoA總數為n/2。每一輪產1 NADH與1 FAD相關當量；最後四碳acyl-CoA被切成兩個acetyl-CoA，這正是「圈數少一」的理由。

以C16為例，碳鏈依序16→14→12→10→8→6→4→兩個2。共7輪，得到8 acetyl-CoA、7 NADH與7 FAD相關當量。把8 acetyl-CoA當成8輪，會多算一次NADH與FAD電子。

| 脂肪酸 | β氧化輪數 | Acetyl-CoA | β氧化的NADH／FAD當量 |
|---|---:|---:|---:|
| C12:0 | 5 | 6 | 各5 |
| C16:0 | 7 | 8 | 各7 |
| C18:0 | 8 | 9 | 各8 |

這個簡式不直接套到奇數碳、不飽和、分支脂肪酸，也不能把peroxisome每一輪電子收益當成同樣數字。算式的前提必須跟題幹一起記，否則公式越熟越容易在例外題失分。

## 完整ATP計算：先分β氧化與TCA兩本帳

採用NADH約2.5 ATP、FAD相關當量約1.5 ATP，每acetyl-CoA進TCA約10 ATP。游離palmitate（C16:0）完整氧化的帳為：

| 來源 | 計算 | ATP當量 |
|---|---|---:|
| β氧化NADH | 7×2.5 | 17.5 |
| β氧化FAD電子 | 7×1.5 | 10.5 |
| 8 acetyl-CoA的TCA | 8×10 | 80 |
| 游離脂肪酸活化 | ATP→AMP | −2 |
| 淨收益 | 17.5＋10.5＋80−2 | 106 |

若起點palmitoyl-CoA，答案是108；若題目指定舊式P/O為3與2，palmitate的對應總數是129。數字不同常是起點或計帳假設不同，不必把其中一個永遠判成錯誤。

對相同前提的偶數鏈Cₙ，淨收益可整理成(n/2−1)×4＋(n/2)×10−2＝7n−6。例如C18:0是120 ATP。這是快速驗算，正式解題仍先寫圈數，避免把不存在的acetyl-CoA算進去。

如果題目只問「β氧化產生幾個NADH」，C16答案是7；若問包含TCA的總NADH，還要加8×3＝24，合計31。題幹的邊界比背總數更重要。這些是理想化生化計帳，真實細胞的ATP回收會受耦聯效率與運輸等條件影響。

## 奇數鏈與不飽和脂肪酸：哪一步需要額外處理

奇數鏈最後留下propionyl-CoA（3C）。先由propionyl-CoA carboxylase使用ATP、HCO₃⁻與biotin生成D-methylmalonyl-CoA，經epimerase形成L型，再由B12依賴methylmalonyl-CoA mutase變成succinyl-CoA。

因此「最後三碳產物」是propionyl-CoA，「直接進TCA的形式」是succinyl-CoA。Succinyl-CoA可提供淨TCA中間物並連到糖質新生，這是奇數鏈尾端的生糖潛力；不是整條脂肪酸的每個acetyl-CoA突然都能生糖。

不飽和脂肪酸的cis雙鍵不一定符合hydratase需要的trans-Δ2配置，需要enoyl-CoA isomerase等酵素調整。遇到已存在的雙鍵，可略過某些原本產FAD電子的步驟，因此同碳數的不飽和脂肪酸通常較少ATP收益。多元不飽和脂肪酸還可能需要2,4-dienoyl-CoA reductase，消耗NADPH。

| 類型 | 額外重點 |
|---|---|
| 奇數鏈 | Biotin羧化、B12重排、succinyl-CoA入口 |
| 單元不飽和 | Isomerase調雙鍵，少部分FAD收益 |
| 多元不飽和 | 可能需NADPH依賴reductase，不能一律只扣一次FAD |

NADPH主要支持合成，但這個不飽和脂肪酸氧化的輔助反應是重要例外。故「所有脂肪酸氧化絕不使用NADPH」太絕對；典型飽和β氧化核心四步則使用FAD與NAD⁺。

## Peroxisome、α與ω氧化：不要把所有脂肪酸送同一入口

Peroxisome能處理very-long-chain fatty acids等受質並縮短碳鏈，後續可交由粒線體繼續代謝。第一步acyl-CoA oxidase把電子交給O₂形成H₂O₂，再由catalase等處理，沒有像粒線體ETF→CoQ那樣直接把第一步電子連到ATP回收。

因此peroxisomal β氧化與mitochondrial β氧化雖都有縮短二碳的邏輯，能量帳不同。Peroxisome不是縮小版粒線體，也沒有同樣的呼吸鏈ATP合成系統。

Phytanic acid等在β位置有分支的脂肪酸難以直接走一般β氧化，需要先α氧化移去一個碳，再進一步處理；Refsum disease與此路徑異常相關。ω氧化則從甲基末端進行，主要涉及內質網，能形成dicarboxylic acids；當常規β氧化受阻時，尿中二羧酸增加可成線索。

| 路徑 | 先看哪個位置／受質 | 關鍵產物或特性 |
|---|---|---|
| β氧化 | 羧基端逐次二碳 | Acetyl-CoA |
| α氧化 | 特殊分支脂肪酸 | 先少一碳，解除障礙 |
| ω氧化 | 甲基末端 | 二羧酸，內質網相關 |
| Peroxisomal β氧化 | 很長鏈等特殊受質 | 縮短碳鏈，第一步產H₂O₂ |

做疾病題時先定位區室與受質，不要僅因都叫fatty acid oxidation就把MCAD缺乏、Refsum及peroxisomal疾病互相代換。

## 酮體生成：肝粒線體把acetyl-CoA改裝成可輸出的燃料

肝臟β氧化增加時，acetyl-CoA供應上升；空腹時OAA又可能被拉去糖質新生，使TCA處理acetyl-CoA的能力相對於供應受限。酮體生成提供另一個出口，同時再生CoA供後續代謝使用。這不是肝臟整個TCA完全停止，而是碳流分配改變。

兩個acetyl-CoA經thiolase形成acetoacetyl-CoA，再加一個acetyl-CoA，由粒線體HMG-CoA synthase形成HMG-CoA；HMG-CoA lyase裂解後產生acetoacetate並釋回一個acetyl-CoA。淨碳帳是兩個acetyl-CoA形成一個四碳acetoacetate，不是淨消耗三個二碳。

Acetoacetate可由β-hydroxybutyrate dehydrogenase還原成D-β-hydroxybutyrate（BHB），消耗NADH；也可脫羧形成acetone。高NADH/NAD⁺狀態使BHB比例較高。

| 酮體 | 特色 |
|---|---|
| Acetoacetate | 可被周邊組織利用的四碳燃料 |
| β-Hydroxybutyrate | 化學上非酮，但生理上列為酮體；常在高NADH時比例增加 |
| Acetone | 揮發性，主要不是重要能量供應形式 |

粒線體HMG-CoA synthase屬酮體生成；膽固醇合成使用另一區室的HMG-CoA路徑。看見HMG-CoA就選膽固醇，是忽略區室造成的典型失分。

## 酮體利用：為何肝臟產得出卻用不了

周邊組織先將BHB氧化回acetoacetate，形成NADH；SCOT（succinyl-CoA:acetoacetate CoA transferase，亦稱thiophorase）把succinyl-CoA的CoA轉給acetoacetate，形成acetoacetyl-CoA及succinate；thiolase再切成兩個acetyl-CoA進TCA。

肝臟缺乏有效SCOT酮體利用途徑，因此把酮體輸出給其他組織，不能大量拿自己產的酮體來供能。紅血球則因沒有粒線體而不能利用，兩者限制原因不同。長期空腹的腦可增加酮體利用，節省部分葡萄糖需求，但不代表葡萄糖需求降為零。

如果以能量題延伸，acetoacetate的兩個acetyl-CoA可回收約20 ATP，但SCOT使用succinyl-CoA轉CoA，繞過原可產GTP的succinyl-CoA synthetase步驟，按機會成本扣1，約19 ATP；BHB多提供一個NADH，約21.5 ATP。只有題目採用相同完整氧化邊界時才用這個數字，不能把它與酮體合成成本或運輸條件混為一談。

酮體可被氧化供能，因此「酮體是廢物，只能排泄」錯誤。過量與正常使用也要分開：有酮體不必然有ketoacidosis，是否造成酸鹼失衡要看生成、利用與排泄的平衡。

## 空腹、胰島素不足與脂肪酸氧化障礙的對照

正常空腹時低insulin與反調節訊號使脂肪動員增加，肝臟脂肪酸氧化支持糖質新生並產酮。嚴重insulin不足時這些流量可能失去適當限制，酮酸生成超過使用與排除，形成ketoacidosis。Acetone不是主要造成酸負荷的酮體。

相反地，MCAD缺乏使中鏈脂醯基氧化受阻，空腹或生病時可能出現hypoketotic hypoglycemia：糖儲備減少，脂肪酸供能又受阻，產酮不足且供糖支持下降。Hypoketotic是「相對應有程度偏低」，不是尿中絕不可能測到任何酮體。此處不把特徵當成單一檢驗即可確診的規則。

| 情境 | 脂肪酸氧化／產酮 | 血糖推理 |
|---|---|---|
| 正常較長空腹 | 增加，提供替代燃料 | 由肝醣及糖質新生維持，隨時間改變 |
| 嚴重insulin不足 | 動員及產酮過多 | 可高血糖伴酮酸中毒 |
| 脂肪酸氧化障礙 | 供能不足，常產酮相對不足 | 空腹時低血糖風險 |

讀題看到低血糖，先看ketone多不多，再辨是否有肝醣動員、糖質新生、脂肪酸氧化或激素問題。這比將所有低血糖都歸為「糖沒吃夠」更有鑑別力。

## 合成與分解的交接：用malonyl-CoA收束全章

餐後能量與碳源充足，acetyl-CoA carboxylase較活躍，malonyl-CoA增加；它既是脂肪酸合成原料，也抑制CPT-I。空腹或能量壓力時，ACC受抑，malonyl-CoA降低，長鏈脂肪酸進粒線體氧化的限制減輕。這是路徑間的協調，不代表任何情況下兩條路徑都絕對不可能同時有通量。

最後用四個問題檢核：第一，長鏈脂醯基如何跨內膜？回答三個shuttle元件。第二，C16為何是7輪？回答最後四碳切成兩個acetyl-CoA。第三，脂肪酸不能淨生糖為何仍能支持糖新生？回答能量、NADH與acetyl-CoA調控，而非偷換成碳直接轉糖。第四，肝臟為何不能用酮體？回答SCOT，而不是沒有粒線體。

把這四題答完整，再練習106 ATP與奇數鏈例外，才算把「路徑、收支、調控、器官」連起來。下一章會沿著同一個malonyl-CoA，反過來看人體如何在能量充足時建立脂肪酸碳鏈。
