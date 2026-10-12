import fitz,re,json,pathlib,unicodedata
ROOT=pathlib.Path(__file__).resolve().parents[1]
def norm(t):return unicodedata.normalize('NFKC',t).translate(str.maketrans({'\ue18c':'A','\ue18d':'B','\ue18e':'C','\ue18f':'D'}))
def answers(path):
 doc=fitz.open(path);out={};notes=norm(''.join(p.get_text() for p in doc));chars=[];nums=[]
 for p in doc:
  for b in p.get_text('rawdict')['blocks']:
   for l in b.get('lines',[]):
    for s in l['spans']:
     for c in s['chars']:
      v=norm(c['c']);box=c['bbox']
      if v in 'ABCD#' and len(v)==1 and box[1]>140:chars.append((v,box))
  for w in p.get_text('words'):
   m=re.fullmatch(r'(?:第)?(\d{1,3})(?:題)?',w[4])
   if m and 1<=int(m[1])<=100 and w[1]>140:nums.append((*w[:4],m[1],*w[5:]))
 for w in nums:
  x=(w[0]+w[2])/2;y=w[1]
  candidates=[c for c in chars if abs((c[1][0]+c[1][2])/2-x)<7 and 7<c[1][1]-y<35]
  if candidates:
   v,box=min(candidates,key=lambda c:abs(c[1][1]-y-21));out[int(w[4])]=[v]
 notes=re.sub(r'\s+','',notes)
 for m in re.finditer(r'第(\d+)題(.*?)(?=第\d+題|$)',notes):
  n=int(m[1]);s=m[2]
  if '除未作答' in s and '給分' in s:out[n]=['+']
  elif '一律給分' in s or '均予給分' in s:out[n]=['*']
  elif '答' in s:
   fragment=s.split('答',1)[1].split('者',1)[0];sets=re.findall(r'[ABCD]+',fragment)
   if sets:out[n]=[''.join(sorted(set(v))) for v in sets]
 return out,notes

def questions(path):
 doc=fitz.open(path);starts=[];expected=1
 for pi,p in enumerate(doc):
  lines=[]
  for b in p.get_text('dict')['blocks']:
   for l in b.get('lines',[]):
    s=''.join(sp['text'] for sp in l['spans']);lines.append((l['bbox'],s))
  for box,s in sorted(lines,key=lambda l:(round(l[0][1],1),l[0][0])):
   m=re.match(r'^\s*(\d{1,3})(?:[.．、]|\s|$)',s)
   if m and int(m[1])==expected and box[0]<100 and (re.match(r'^\s*\d{1,3}[.．、]',s) or box[0]<68):
    starts.append((pi,box[1]-3,expected));expected+=1
 out=[]
 for i,(pi,y,n) in enumerate(starts):
  end=starts[i+1] if i+1<len(starts) else (len(doc)-1,doc[-1].rect.height-35,0)
  regions=[];text=[]
  for k in range(pi,end[0]+1):
   top=y if k==pi else (82 if '頁次' in doc[k].get_text()[:200] else 28)
   bottom=end[1] if k==end[0] else doc[k].rect.height-35
   if bottom-top<3:continue
   rect=fitz.Rect(30,top,doc[k].rect.width-25,bottom)
   regions.append(dict(page=k+1,rect=[round(v,2) for v in rect]));text.append(doc[k].get_text(clip=rect))
  out.append(dict(number=n,text=norm('\n'.join(text)),regions=regions))
 return out
if __name__=='__main__':
 for path in sorted((ROOT/'exams').glob('*/*/medicine-*-Q.pdf')):
  qs=questions(path);print(path.relative_to(ROOT),len(qs),flush=True)
  (ROOT/'question-bank'/('raw-'+str(path.parent.parent.name)+'-'+path.parent.name+'-'+path.stem+'.json')).write_text(json.dumps(qs,ensure_ascii=False))
