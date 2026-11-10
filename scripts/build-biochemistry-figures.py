"""Generate equation-based SVG teaching figures, not patient measurements."""
from pathlib import Path
from html import escape
p=Path(__file__).resolve().parent.parent/'assets/biochemistry';p.mkdir(parents=True,exist_ok=True)
def plot(file,title,xlabel,ylabel,series,xmax,ymax,xticks,yticks,description):
 w,h=760,450;l,r,t,b=84,25,62,110
 def xy(x,y):return l+x/xmax*(w-l-r),h-b-y/ymax*(h-t-b)
 out=[f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" role="img" aria-labelledby="title desc"><title id="title">{escape(title)}</title><desc id="desc">{escape(description)}</desc><rect width="760" height="450" fill="white"/><g font-family="sans-serif" font-size="14" fill="#172c40"><text x="84" y="28" font-size="21">{escape(title)}</text>']
 for v in yticks:
  x,y=xy(0,v);out.append(f'<path d="M {l} {y} H {w-r}" stroke="#e0e8ee"/><text x="{l-12}" y="{y+5}" text-anchor="end">{v:g}</text>')
 for v in xticks:
  x,y=xy(v,0);out.append(f'<text x="{x}" y="{y+22}" text-anchor="middle">{v:g}</text>')
 out.append(f'<path d="M {l} {t} V {h-b} H {w-r}" fill="none" stroke="#172c40" stroke-width="2"/><text x="400" y="389" text-anchor="middle">{escape(xlabel)}</text><text transform="translate(22 205) rotate(-90)" text-anchor="middle">{escape(ylabel)}</text>')
 for i,(name,color,fun,dash) in enumerate(series):
  pts=[xy(xmax*j/240,fun(xmax*j/240)) for j in range(241)]
  d=' '.join(('M' if j==0 else 'L')+f'{x:.2f},{y:.2f}' for j,(x,y) in enumerate(pts))
  out.append(f'<path d="{d}" fill="none" stroke="{color}" stroke-width="3" stroke-dasharray="{dash}"/>')
  xx=84+i*160;out.append(f'<path d="M {xx} 423 h 22" stroke="{color}" stroke-width="3" stroke-dasharray="{dash}"/><text x="{xx+28}" y="428">{escape(name)}</text>')
 out.append('</g></svg>');(p/file).write_text(''.join(out))
plot('oxygen-binding.svg','Oxygen binding: teaching model','PO₂ (mmHg)','Saturation (%)',[
 ('Mb','#7356a1',lambda x:100*x/(3+x),'0'),('HbF model','#1c7b60',lambda x:100*x**2.8/(20**2.8+x**2.8),'7 4'),('HbA model','#ba5444',lambda x:100*x**2.8/(26.6**2.8+x**2.8),'0')],100,100,[0,20,40,60,80,100],[0,25,50,75,100],'教學示意，非病人實測。Mb P50=3；HbF與HbA採Hill n=2.8，P50分別20與26.6。Mb雙曲線，HbF相對HbA左移。')
plot('enzyme-inhibition.svg','Enzyme inhibition: shared baseline','[S] / baseline Km','v / baseline Vmax',[
 ('No inhibitor','#172c40',lambda x:x/(1+x),'0'),('Competitive','#ba5444',lambda x:x/(4+x),'7 4'),('Pure noncomp.','#24746a',lambda x:.5*x/(1+x),'0'),('Uncompetitive','#7356a1',lambda x:x/(1+2*x),'3 4')],12,1,[0,2,4,6,8,10,12],[0,.25,.5,.75,1],'以未抑制Km與Vmax為共同座標。競爭α=4；純非競爭α=α′=2；不競爭α′=2。後兩者極限皆0.5，但半最大濃度不同。')
