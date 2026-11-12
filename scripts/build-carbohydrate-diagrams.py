from pathlib import Path
from html import escape
p=Path(__file__).resolve().parent.parent/'assets/biochemistry';p.mkdir(parents=True,exist_ok=True)
def start(title,desc,h):
 return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 {h}" role="img" aria-labelledby="title desc"><title id="title">{escape(title)}</title><desc id="desc">{escape(desc)}</desc><defs><marker id="a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#41636b"/></marker></defs><rect width="760" height="{h}" fill="#f8fbfa"/><g font-family="system-ui,sans-serif" fill="#173d46">'
def txt(x,y,t,size=18):return f'<text x="{x}" y="{y}" text-anchor="middle" font-size="{size}">{escape(t)}</text>'
def tag(x,y,t,size=16):return f'<rect x="{x-105}" y="{y-17}" width="210" height="23" fill="#f8fbfa"/>'+txt(x,y,t,size)
def box(x,y,w,t,sub='',fill='#e5f2ed'):
 return f'<rect x="{x}" y="{y}" width="{w}" height="62" rx="10" fill="{fill}" stroke="#95b5ab"/>'+txt(x+w/2,y+26,t,20)+txt(x+w/2,y+49,sub,15)
def arrow(x,y,u,v):return f'<path d="M{x} {y}L{u} {v}" fill="none" stroke="#41636b" stroke-width="2" marker-end="url(#a)"/>'
def save(name,s): (p/name).write_text(s+'</g></svg>')
s=start('TCA八步與每圈能量','由OAA加acetyl-CoA開始，依序citrate、isocitrate、alpha-ketoglutarate、succinyl-CoA、succinate、fumarate、malate回OAA。每圈3 NADH、1 FAD相關當量、1 GTP與2 CO2。',655)
s+=txt(380,32,'TCA：順時針追碳與電子',24)
nodes=[(40,75,'OAA','4C；一圈後再生'),(490,75,'Citrate','6C'),(490,205,'Isocitrate','6C'),(490,335,'α-KG','5C'),(490,465,'Succinyl-CoA','4C'),(40,465,'Succinate','4C'),(40,335,'Fumarate','4C'),(40,205,'Malate','4C')]
for x,y,t,sub in nodes:s+=box(x,y,230,t,sub)
s+=arrow(275,106,485,106)+txt(380,78,'+ Acetyl-CoA (2C)',16)+txt(380,135,'1  Citrate synthase',15)
s+=arrow(605,140,605,200)+tag(605,179,'2  Aconitase',16)
s+=arrow(605,270,605,330)+tag(605,307,'3  NADH + CO₂',16)
s+=arrow(605,400,605,460)+tag(605,437,'4  NADH + CO₂',16)
s+=arrow(485,495,275,495)+txt(380,480,'5  GTP／ATP',16)+txt(380,522,'釋出 CoA',15)
s+=arrow(155,460,155,400)+tag(155,437,'6  FAD → CoQ',16)
s+=arrow(155,330,155,270)+tag(155,307,'7  加水',16)
s+=arrow(155,200,155,140)+tag(155,179,'8  NADH',16)
s+=txt(380,240,'每圈淨收益',20)+txt(380,280,'3 NADH',20)+txt(380,318,'1 FAD 當量',20)+txt(380,356,'1 GTP／ATP',20)+txt(380,394,'2 CO₂',20)
s+=txt(380,582,'3 × 2.5 + 1 × 1.5 + 1 ≈ 10 ATP 當量',20)+txt(380,620,'需完成整圈及後續電子氧化；OAA 不淨增加',17)
save('carbohydrate-tca.svg',s)
s=start('糖質新生三個繞道','PK由PC與PEPCK兩步繞過，分別耗ATP與GTP；PFK1由FBPase1水解繞過；hexokinase由內質網G6Pase繞過。',640)
s+=txt(380,32,'三個不可逆關卡，四個繞道酵素',24)
s+=txt(380,75,'① 繞過 pyruvate kinase',20)
s+=box(25,100,190,'Pyruvate','3C')+box(285,100,190,'OAA','4C')+box(545,100,190,'PEP','3C')
s+=arrow(220,131,280,131)+arrow(480,131,540,131)
s+=txt(250,190,'PC',20)+txt(250,216,'ATP、biotin、HCO₃⁻',16)+txt(250,240,'粒線體',16)
s+=txt(510,190,'PEPCK',20)+txt(510,216,'GTP → GDP；釋 CO₂',16)+txt(510,240,'胞質／粒線體 isoform',16)
s+='<path d="M35 270H725" stroke="#b9d1c8"/>'
s+=txt(380,305,'② 繞過 PFK-1（胞質）',20)
s+=box(75,330,230,'F1,6BP','雙磷酸中間物')+box(455,330,230,'F6P','單磷酸中間物')+arrow(310,360,450,360)+txt(380,414,'FBPase-1：水解釋 Pi，不產 ATP',18)
s+='<path d="M35 440H725" stroke="#b9d1c8"/>'
s+=txt(380,475,'③ 繞過 hexokinase／glucokinase',20)
s+=box(75,500,230,'G6P','匯集兩條供糖途徑')+box(455,500,230,'Glucose','可供血液使用')+arrow(310,530,450,530)+txt(380,590,'G6Pase：內質網系統；水解釋 Pi',18)
save('carbohydrate-gng.svg',s)
s=start('肝醣分解與合成相反調控','PKA促進phosphorylase kinase及glycogen phosphorylase的活化；PKA相關磷酸化使glycogen synthase活性下降。PP1去磷酸化則支持相反方向。',660)
s+=txt(380,32,'先看被調控的是哪個蛋白',24)
s+=box(155,55,450,'典型 β 受體／肝臟 glucagon 訊號','Gs → adenylyl cyclase → cAMP')+arrow(380,120,380,150)+box(270,155,220,'PKA 活化','磷酸化不同下游蛋白')
s+=arrow(300,220,190,270)+arrow(460,220,570,270)
s+=box(50,280,280,'Phosphorylase kinase','活性增加')+box(430,280,280,'Glycogen synthase','磷酸化後活性下降','#fff2df')
s+=arrow(190,345,190,385)+box(50,390,280,'Glycogen phosphorylase','磷酸化後偏活化')
s+=arrow(570,345,570,385)+box(430,390,280,'合成下降','與動員配合','#fff2df')
s+=arrow(190,455,190,490)+box(50,495,280,'肝醣 → G1P','執行磷酸解')
s+=txt(570,515,'蛋白磷酸化',20)+txt(570,548,'≠ 糖鍵的磷酸解',20)
s+=txt(380,602,'PP1 去磷酸化：GP 活性下降，GS 活性上升',19)+txt(380,635,'Ca²⁺、AMP 與器官差異另見正文',16)
save('carbohydrate-glycogen-control.svg',s)
