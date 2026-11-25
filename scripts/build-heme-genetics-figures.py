"""Generate original pathway figures for the heme and nucleotide lessons."""
from html import escape
from pathlib import Path

assets = Path(__file__).resolve().parents[1] / "assets/biochemistry"


def draw(filename, title, rows, note):
    height = 120 + 102 * len(rows)
    parts = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 {height}" role="img" aria-labelledby="title"><title id="title">{escape(title)}</title>',
             f'<rect width="760" height="{height}" fill="#f6faf9"/><g font-family="system-ui,sans-serif" fill="#163e45">']

    def label(x, y, value, size, weight=400):
        parts.append(f'<text x="{x}" y="{y}" font-size="{size}" font-weight="{weight}">{escape(value)}</text>')

    label(24, 45, title, 25, 650)
    for index, (where, event, detail) in enumerate(rows):
        top = 68 + index * 102
        parts.append(f'<rect x="20" y="{top}" width="720" height="84" rx="9" fill="white" stroke="#b5cfc9"/>')
        parts.append(f'<rect x="21" y="{top+1}" width="145" height="82" rx="8" fill="#dfefe9"/>')
        label(33, top+48, where, 17, 600)
        label(184, top+32, event, 19, 600)
        label(184, top+62, detail, 16)
    label(24, height-14, note, 15)
    (assets / filename).write_text(''.join(parts)+'</g></svg>')

draw('heme-synthesis.svg','血基質合成經過三個區段',[
    ('粒線體基質','Glycine ＋ succinyl-CoA → ALA','ALA synthase 需要 PLP（維生素 B₆）。'),
    ('胞質','2 ALA → porphobilinogen（PBG）','ALA dehydratase 受鉛抑制。每個 PBG 有一個吡咯環。'),
    ('胞質','4 PBG → 線狀四吡咯 → uroporphyrinogen III','HMBS 組裝線狀分子，再由 UROS 形成 III 型環。'),
    ('胞質 → 粒線體','Uroporphyrinogen III → coproporphyrinogen III','脫羧後進入粒線體，再經氧化形成 protoporphyrin IX。'),
    ('粒線體內膜','Protoporphyrin IX ＋ Fe²⁺ → heme','Ferrochelatase 將鐵嵌入環中央，也是鉛的作用位置。')],
    '每個 heme 需要 8 個 ALA，合計來自 8 個 glycine 與 8 個 succinyl-CoA。')
draw('bilirubin-flow.svg','沿膽紅素的移動方向定位黃疸',[
    ('巨噬細胞','Heme → biliverdin → 未結合膽紅素','Heme oxygenase 開環，biliverdin reductase 再還原膽綠素。'),
    ('血漿','未結合膽紅素與 albumin 結合運送','白蛋白結合限制腎絲球過濾，因此單純溶血時尿膽紅素通常陰性。'),
    ('肝細胞','UGT1A1 加上 glucuronic acid','結合後水溶性提高，可經 MRP2 排入膽小管。'),
    ('腸道','結合膽紅素 → urobilinogen','腸菌參與轉化。多數後續形成糞便色素，部分經門脈回肝。'),
    ('腎臟','部分尿膽素原到尿中，氧化成 urobilin','膽汁阻塞時血中結合膽紅素可增加，使尿膽紅素轉陽性。')],
    '判題時分開讀血清膽紅素分型、尿膽紅素、尿膽素原與糞色。')
draw('purine-branches.svg','嘌呤在核糖上組環，再由 IMP 分流',[
    ('核糖骨架','Ribose-5-P → PRPP','PRPP synthetase 消耗 ATP，提供活化核糖供合成與回收。'),
    ('承諾步驟','PRPP ＋ glutamine → 5-phosphoribosylamine','Glutamine-PRPP amidotransferase 受嘌呤核苷酸回饋調控。'),
    ('共同中間物','逐步組環 → IMP','環中碳氮來自 Gly、Gln、Asp、CO₂ 與 formyl-THF。'),
    ('AMP 分支','IMP ＋ aspartate → adenylosuccinate → AMP','使用 GTP，釋出 fumarate，留下來自 Asp 的氮。'),
    ('GMP 分支','IMP → XMP → GMP','先經 IMP dehydrogenase 氧化，再用 ATP 與 Gln 完成胺化。')],
    '回收可直接將 hypoxanthine 或 guanine 接到 PRPP，分別得到 IMP 或 GMP。')
draw('pyrimidine-path.svg','嘧啶先組環，接上核糖後再分流',[
    ('胞質 CAD','CPS II → aspartate transcarbamoylase → dihydroorotase','以 glutamine 供氮，再接 aspartate 及閉環。'),
    ('粒線體內膜','Dihydroorotate → orotate','Dihydroorotate dehydrogenase 連到 ubiquinone。'),
    ('胞質 UMPS','Orotate ＋ PRPP → OMP → UMP','先接核糖，再脫羧得到 UMP。'),
    ('核糖核苷酸','UMP → UDP → UTP → CTP','CTP synthetase 由 glutamine 供氮，並消耗 ATP。'),
    ('去氧核苷酸','dUMP → dTMP','Thymidylate synthase 使用 5,10-methylene-THF，產生 DHF。')],
    'Ribonucleotide reductase 作用於 NDP，連接核糖與去氧核苷酸供應。')
draw('repair-choice.svg','由 DNA 損傷推回辨認與修復途徑',[
    ('單一鹼基','去胺或氧化造成小型鹼基異常 → BER','典型由 glycosylase 移除鹼基，留下 AP site。'),
    ('體積大、扭曲','紫外光造成嘧啶二聚體等損傷 → NER','在損傷兩側切開受損股，移除寡核苷酸後補合。'),
    ('複製後錯配','錯配鹼基或小型插入／缺失環 → MMR','辨認新股錯誤並切除重製。缺陷可見微衛星不穩定。'),
    ('雙股斷裂','有姐妹染色分體可作模板 → HR','常見於 S／G₂ 期，以同源序列引導合成。'),
    ('雙股斷裂','斷端直接接合 → NHEJ','可在 G₁ 運作。需修整不相容斷端時可能產生插入或缺失。')],
    '聚合酶在合成當下以 3′→5′ 外切酶校讀，已逃過校讀的錯配可再由 MMR 處理。')
