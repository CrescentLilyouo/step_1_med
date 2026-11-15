"""Accessible original vector teaching diagrams."""
from pathlib import Path
from html import escape
p=Path(__file__).resolve().parent.parent/'assets/biochemistry'
def start(title,h=700):
 return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 {h}" role="img" aria-labelledby="t"><title id="t">{escape(title)}</title><defs><marker id="a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#41636b"/></marker></defs><rect width="760" height="{h}" fill="#f8fbfa"/><g font-family="system-ui,sans-serif" fill="#173d46">'
def txt(x,y,s,z=18):return f'<text x="{x}" y="{y}" text-anchor="middle" font-size="{z}">{escape(s)}</text>'
def box(x,y,w,t,s='',fill='#e5f2ed'):return f'<rect x="{x}" y="{y}" width="{w}" height="70" rx="10" fill="{fill}" stroke="#95b5ab"/>'+txt(x+w/2,y+29,t,20)+txt(x+w/2,y+54,s,16)
def line(x,y,u,v):return f'<path d="M{x} {y}L{u} {v}" stroke="#41636b" stroke-width="2" fill="none" marker-end="url(#a)"/>'
def path(d):return f'<path d="{d}" stroke="#41636b" stroke-width="2" fill="none" marker-end="url(#a)"/>'
def save(n,s): (p/n).write_text(s+'</g></svg>')
s=start('脂質分類：先看骨架，再看頭部',730)+txt(380,40,'先看骨架，再看頭部',26)
s+=box(40,80,300,'Glycerol 骨架','甘油')+box(420,80,300,'Sphingosine 骨架','鞘氨醇')
s+=line(190,155,190,195)+line(570,155,570,195)
s+=box(40,205,300,'TAG／甘油磷脂','TAG：三條脂醯鏈')+box(420,205,300,'Ceramide','Amide 鍵接一條脂肪酸')
s+=line(190,280,190,320)+line(570,280,570,320)
s+=box(40,330,300,'磷酸頭部 → PC、PE、PI','甘油磷脂')+box(420,330,300,'磷酸膽鹼 → Sphingomyelin','屬磷脂，也屬鞘脂')
s+=path('M725 240H740V470H725')+box(420,435,300,'糖頭部 → Glycosphingolipid','Cerebroside／ganglioside')
s+=txt(190,460,'磷脂 ≠ 全部都有甘油',20)+txt(190,494,'鞘磷脂是關鍵例外',18)
s+=box(90,555,580,'Cholesterol：另外一種 sterol 骨架','四個融合環；不是甘油或鞘氨醇')
s+=txt(380,682,'儲能脂滴、細胞膜與訊息脂質：功能要配合結構判斷',18)
save('complex-lipid-branches.svg',s)
s=start('三條脂蛋白運輸線',820)+txt(380,37,'運輸路線：起點與殘粒去向要分開',25)
s+=txt(380,78,'外源性：腸道 → 淋巴 → 循環',20)
s+=box(25,100,210,'小腸 CM','ApoB-48')+line(240,135,270,135)+box(280,100,205,'LPL 卸 TAG','ApoC-II 支持')+line(490,135,520,135)+box(530,100,205,'CM remnant','ApoE → 肝')
s+=txt(382,205,'脂肪酸供肌肉／脂肪組織使用',18)
s+=txt(380,264,'內源性：肝臟分泌 VLDL；B-100 持續保留',20)
s+=box(25,290,210,'肝 VLDL','富 TAG')+line(240,325,270,325)+box(280,290,205,'IDL','去 TAG 後的殘粒')+line(490,325,520,325)+box(530,290,205,'LDL','B-100 → LDLR')
s+=line(382,366,382,405)+box(280,415,205,'部分 IDL 回肝','ApoE 相關辨識')
s+=txt(380,545,'HDL 相關：周邊膽固醇回收',20)
s+=box(25,570,210,'周邊細胞','ABCA1 等輸出')+line(240,605,270,605)+box(280,570,205,'HDL／LCAT','游離膽固醇 → CE')+line(490,605,520,605)+box(530,570,205,'肝 SR-BI','選擇性攝取 CE')
s+=txt(380,690,'另可經 CETP 與 apoB 顆粒交換，再由其路徑回肝',18)
s+=txt(380,760,'血中游離脂肪酸主要與 albumin 結合；不是另一種 CM',18)
save('lipoprotein-routes.svg',s)
s=start('膽酸腸肝循環及糞便流失',730)+txt(380,40,'回收節省成本；流失才需要補充',25)
s+=box(225,80,310,'肝：Cholesterol','CYP7A1 參與經典路徑')+line(380,155,380,190)
s+=box(225,200,310,'Primary bile acids','結合 glycine／taurine')+line(380,275,380,310)
s+=box(225,320,310,'膽汁 → 腸道','協助脂質及 ADEK 吸收')+line(380,395,380,430)
s+=box(225,440,310,'末端迴腸回收','門脈回肝，重複利用')
s+=path('M220 475H70V115H220')+txt(138,286,'回收',19)
s+=path('M540 355H645V550')+box(505,560,230,'部分糞便流失','需由新合成補充','#fff2df')
s+=txt(250,583,'細菌可形成 secondary bile acids',17)+txt(250,617,'CA → DCA；CDCA → LCA',17)
s+=txt(380,690,'迴腸 FXR–FGF19 等回饋訊號可降低肝膽酸合成',18)
save('cholesterol-bile-cycle.svg',s)
