from pathlib import Path
from html import escape
p=Path(__file__).resolve().parent.parent/'assets/biochemistry'
def start(title,desc,h=680):
 return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 {h}" role="img" aria-labelledby="title desc"><title id="title">{escape(title)}</title><desc id="desc">{escape(desc)}</desc><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#41636b"/></marker></defs><rect width="760" height="{h}" fill="#f8fbfa"/><g font-family="system-ui,sans-serif" fill="#173d46">'
def text(x,y,t,size=18):return f'<text x="{x}" y="{y}" text-anchor="middle" font-size="{size}">{escape(t)}</text>'
def box(x,y,w,title,sub='',fill='#e5f2ed'):
 return f'<rect x="{x}" y="{y}" width="{w}" height="66" rx="10" fill="{fill}" stroke="#95b5ab"/>'+text(x+w/2,y+27,title,20)+text(x+w/2,y+51,sub,16)
def arrow(x,y,u,v):return f'<path d="M{x} {y}L{u} {v}" fill="none" stroke="#41636b" stroke-width="2" marker-end="url(#arrow)"/>'
def save(name,s): (p/name).write_text(s+'</g></svg>')
s=start('PPP兩階段與用途','胞質G6P氧化產2 NADPH與CO2，形成ribulose5P後可轉核糖或重排成F6P與GAP。',700)
s+=text(380,36,'PPP：電子往還原反應，碳可重新分配',24)
s+=box(40,80,300,'G6P（6C）','氧化段入口')+arrow(190,150,190,200)
s+=text(510,158,'G6PD ＋ 6PG dehydrogenase',17)
s+=box(40,210,300,'Ribulose-5-P（5C）','每次釋出 1 CO₂')+box(415,210,305,'2 NADPH','還原合成／GSH 再生')+'<path d="M200 175H568V205" fill="none" stroke="#41636b" stroke-width="2" marker-end="url(#arrow)"/>'
s+=arrow(190,282,190,335)+box(40,345,300,'Ribose／xylulose-5-P','核糖合成／碳重排')
s+=arrow(345,375,410,375)+box(415,345,305,'五碳糖重排','Transketolase：2C；需 TPP')
s+=text(568,439,'Transaldolase：3C',18)+arrow(568,453,568,485)
s+=box(415,495,305,'2 F6P ＋ 1 GAP','總碳數 15C，接糖解／回收')
s+=text(205,500,'非氧化段可逆',21)+text(205,535,'3 × 5C ⇌ 2 × 6C ＋ 3C',18)
s+=text(380,613,'氧化段：產 NADPH、CO₂；非氧化段：重排碳骨架',20)+text(380,658,'PPP 本身不直接產 ATP；不同需求可走不同碳流',18)
save('lipid-ppp.svg',s)
s=start('Carnitine shuttle','CPT-I把長鏈脂醯基交carnitine，translocase運過內膜，CPT-II交回基質CoA；malonylCoA抑制CPT-I。',705)
s+=text(380,35,'跨內膜的是 acylcarnitine',25)
s+=text(380,72,'胞質側：長鏈 acyl-CoA',20)
s+=box(225,95,310,'CPT-I（外膜）','脂醯基：CoA → carnitine')
s+=text(115,127,'Malonyl-CoA',17)+'<path d="M120 148H210M210 139V157" stroke="#a76136" stroke-width="3"/>'
s+=arrow(380,168,380,198)+box(225,205,310,'Acylcarnitine','CoA 留在原側')
s+='<rect x="35" y="300" width="690" height="95" rx="12" fill="#e6eef3"/>'+text(130,332,'粒線體內膜',19)
s+=box(250,313,260,'Translocase','與 carnitine 交換')+arrow(380,278,380,307)+arrow(380,402,380,432)
s+=box(225,440,310,'CPT-II（基質側）','脂醯基：carnitine → CoA')+arrow(380,514,380,544)
s+=box(225,552,310,'基質 acyl-CoA','進入 β 氧化')
s+=text(380,669,'CPT-I 受 malonyl-CoA 抑制；短中鏈不套同一規則',18)
save('lipid-carnitine.svg',s)
s=start('ACC與脂肪酸代謝協調','餐後與citrate促ACC與malonylCoA，支持FAS並限制CPT-I；能量壓力AMPK抑ACC，減輕CPT-I抑制。',670)
s+=text(380,35,'同一個 malonyl-CoA，連接合成與氧化',24)
s+=box(40,75,300,'餐後／碳源充足','Insulin、citrate')+box(420,75,300,'能量壓力','AMPK 活化','#fff2df')
s+=arrow(190,150,190,190)+arrow(570,150,570,190)
s+=box(40,200,300,'ACC 活性較高','Acetyl-CoA → malonyl-CoA')+box(420,200,300,'ACC 被磷酸化抑制','Malonyl-CoA 生成下降','#fff2df')
s+=arrow(190,275,190,315)+arrow(570,275,570,315)
s+=box(40,325,300,'Malonyl-CoA 增加','FAS 的延長原料')+box(420,325,300,'Malonyl-CoA 降低','CPT-I 受抑減輕','#fff2df')
s+=arrow(190,400,190,440)+arrow(570,400,570,440)
s+=box(40,450,300,'偏向脂肪酸合成','並限制 CPT-I 入口')+box(420,450,300,'較有利長鏈脂肪酸氧化','仍需受質、氧與其他條件','#fff2df')
s+=text(380,577,'ACC 花 ATP 做 malonyl；FAS 花 NADPH 延長碳鏈',20)+text(380,623,'磷酸化的結果取決於蛋白：ACC 被抑制，不是被活化',18)
save('lipid-acc-switch.svg',s)
