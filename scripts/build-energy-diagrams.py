from pathlib import Path
from html import escape
p=Path(__file__).resolve().parent.parent/'assets/biochemistry';p.mkdir(parents=True,exist_ok=True)
def start(title,desc,h):
 return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 {h}" role="img" aria-labelledby="title desc"><title id="title">{escape(title)}</title><desc id="desc">{escape(desc)}</desc><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#41636b"/></marker></defs><rect width="640" height="{h}" fill="#f8fbfa"/><g font-family="system-ui,sans-serif" fill="#173d46">'
def text(x,y,s,size=18):return f'<text x="{x}" y="{y}" text-anchor="middle" font-size="{size}">{escape(s)}</text>'
def box(x,y,w,label,sub='',fill='#e5f2ed'):
 return f'<rect x="{x}" y="{y}" width="{w}" height="64" rx="10" fill="{fill}" stroke="#8cafa4"/>'+text(x+w/2,y+27,label,20)+text(x+w/2,y+50,sub,15)
def line(x,y,u,v):return f'<path d="M{x} {y}L{u} {v}" stroke="#41636b" stroke-width="2" marker-end="url(#arrow)" fill="none"/>'
s=start('ATP與葡萄糖磷酸化耦合','兩個標準反應相加，消去Pi與水，得到glucose加ATP生成G6P加ADP，標準自由能約負16.7 kJ每mol。',360)
s+=text(320,30,'化學計量相加，才是同一筆能量帳',22)
s+=box(30,55,580,'Glucose + Pi → G6P + H₂O','ΔG°′ = +13.8 kJ/mol','#fff3df')
s+=text(320,145,'＋',26)+box(30,165,580,'ATP + H₂O → ADP + Pi','ΔG°′ = −30.5 kJ/mol')
s+=line(320,235,320,266)+box(30,275,580,'Glucose + ATP → G6P + ADP','總 ΔG°′ ≈ −16.7 kJ/mol')
(p/'energy-coupling.svg').write_text(s+'</g></svg>')
s=start('電子流與質子回流分開看','NADH經I與succinate經II平行匯入CoQ，再到III、cytochrome c、IV，氧還原為水。I III IV建立質子梯度，ATP synthase使用梯度。',640)
s+=text(320,30,'電子入口平行，質子動力另外耦合',22)
s+=box(35,55,250,'NADH → I','泵出 4 H⁺／2 e⁻')+box(355,55,250,'Succinate → II','不泵 H⁺')
s+=line(160,120,275,162)+line(480,120,365,162)+box(220,165,200,'CoQ → III','III：淨移出 4 H⁺／2 e⁻')
s+=line(320,231,320,267)+box(220,270,200,'Cytochrome c','一次傳 1 e⁻')
s+=line(320,335,320,370)+box(220,375,200,'IV → O₂ → H₂O','IV：泵出 2 H⁺／2 e⁻')
s+=text(320,472,'I、III、IV：基質 → 膜間腔，建立梯度',19)
s+='<path d="M45 495H595" stroke="#a4cfc0" stroke-width="2"/>'
s+=box(30,515,250,'H⁺ 回到基質','經 ATP synthase')+line(286,547,348,547)+box(355,515,250,'ADP + Pi → ATP','使用質子動力')
s+=text(320,612,'泵出質子 ≠ 生成水所消耗的化學質子',18)
(p/'energy-electron-proton.svg').write_text(s+'</g></svg>')
s=start('Pyruvate的四種去向','Pyruvate在胞質可經LDH成lactate或ALT成alanine；進粒線體後可經PDH成acetyl-CoA，或PC成oxaloacetate。每個出口的目的與輔因子不同。',450)
s+=text(320,30,'先問要解決什麼需求，再選出口',22)+box(210,65,220,'Pyruvate','糖解產生的三碳交會點')
s+=line(245,132,160,190)+line(395,132,480,190)
s+=box(30,195,260,'Lactate｜LDH','再生胞質 NAD⁺')+box(350,195,260,'Alanine｜ALT','PLP，胺基轉移')
s+=line(300,132,300,250)+line(340,132,340,250)
s+=text(320,280,'進入粒線體',17)
s+=line(300,295,160,325)+line(340,295,480,325)
s+=box(30,330,260,'Acetyl-CoA｜PDH','產 CO₂、NADH；不可逆')+box(350,330,260,'Oxaloacetate｜PC','Biotin + ATP，補充碳流')
s+=text(320,432,'LDH／ALT：胞質　｜　PDH／PC：粒線體',17)
(p/'energy-pyruvate-fates.svg').write_text(s+'</g></svg>')
