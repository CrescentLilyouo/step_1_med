"""Build subject banks from archived official PDFs; run from any directory."""
import json,pathlib,fitz,re,hashlib,collections
from extract_bank import questions,answers,norm,ROOT
ids=['anatomy','histology','embryology','physiology','biochemistry','pharmacology','pathology','microbiology','parasitology','immunology','public-health']
# Original exam blocks reviewed at the subject boundaries. Classification is editorial.
def classify(y,session,paper,n,modern):
 if modern:
  bounds=[(31,'anatomy'),(36,'embryology'),(46,'histology'),(73,'physiology'),(100,'biochemistry')] if paper==1 else [(17,'microbiology'),(28,'immunology'),(35,'parasitology'),(50,'public-health'),(75,'pharmacology'),(100,'pathology')]
 elif paper==1:
  if (y,session)==(99,1) and (54<=n<=64 or 73<=n<=74):return 'immunology'
  if (y,session)==(99,1) and 65<=n<=72:return 'microbiology'
  bounds=[(28,'anatomy'),(32,'embryology'),(41,'histology'),(61,'microbiology'),(74,'immunology'),(82,'parasitology'),(100,'public-health')]
 else:
  p,b,f={(96,1):(39,52,78),(96,2):(27,50,75),(97,1):(26,50,75),(98,2):(26,50,75)}.get((y,session),(25,50,75))
  bounds=[(p,'physiology'),(b,'biochemistry'),(f,'pharmacology'),(100,'pathology')]
 return next(s for maximum,s in bounds if n<=maximum)
def main():
 rows=json.loads((ROOT/'question-bank/sources.json').read_text());papers=[];banks={k:[] for k in ids};audit=[]
 for r in rows:
  p=ROOT/r['path'];d=fitz.open(p);header=re.sub(r'\s+','',norm(d[0].get_text()));expected='第一次' if r['session']==1 else '第二次'
  assert expected in header[:180] and '外國人' not in header[:500],r['path']
  r['sha256']=hashlib.sha256(p.read_bytes()).hexdigest();r['pages']=len(d);r['bytes']=p.stat().st_size
  r['fetched_url']=r['url']+'&verify=step1-20261013-'+r['code']+'-'+r['category']+'-'+r['s']+'-'+r['type']
 for r in rows:
  if r['type']!='Q':continue
  matching={x['type']:x for x in rows if x['code']==r['code'] and x['paper']==r['paper']};effective=matching.get('M') or matching.get('S');assert effective,r
  final,notes=answers(ROOT/effective['path']);assert len(final)==100,(effective['path'],len(final));assert all(v and all(re.fullmatch(r'[ABCD]+|\*|\+',a) for a in v) for v in final.values()),(effective['path'],final)
  original=answers(ROOT/matching['S']['path'])[0] if 'S' in matching else None
  if original is not None:assert len(original)==100,matching['S']['path']
  qs=questions(ROOT/r['path']);assert len(qs)==100,(r['path'],len(qs));modern=('生理學' in r['title']) if r['paper']==1 else ('微生物' in r['title'])
  # A 106-2 catalogue label retained the older syllabus; use the PDF itself.
  if r['paper']==1:modern='生物化學' in re.sub(r'\s+','',norm(fitz.open(ROOT/r['path'])[0].get_text()))[:650]
  else:modern='微生物' in re.sub(r'\s+','',norm(fitz.open(ROOT/r['path'])[0].get_text()))[:650]
  query=f"https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx?e={r['code']}&y={r['year']+1911}"
  counts=collections.Counter()
  for q in qs:
   n=q['number'];subject=classify(r['year'],r['session'],r['paper'],n,modern);counts[subject]+=1
   q.update(id=f"{r['year']}-{r['session']}-{r['paper']}-{n}",year=r['year'],session=r['session'],paper=r['paper'],subject=subject,pdf=r['path'],source=r['fetched_url'],query=query,answers=final[n],answerPdf=effective['path'],answerSource=effective['fetched_url'],corrected=effective['type']=='M' and (original is None or final[n]!=original[n]),answerVersion='M' if effective['type']=='M' else 'S')
   if original is not None:q['originalAnswers']=original[n]
   banks[subject].append(q)
  paper=dict(year=r['year'],session=r['session'],paper=r['paper'],code=r['code'],query=query,files={t:dict(path=x['path'],source=x['fetched_url'],sha256=x['sha256']) for t,x in matching.items()},subjects=dict(counts),questions=100,layout='current' if modern else 'legacy')
  papers.append(paper)
  audit.append(dict(code=r['code'],paper=r['paper'],effective_answer=effective['type'],questions=100,answers=100,subjects=dict(counts),corrections={str(n):v for n,v in final.items() if original is None and (len(v)>1 or v[0] in ['*','+']) or original is not None and v!=original[n]}))
 for k,qs in banks.items():(ROOT/f'question-bank/{k}.json').write_text(json.dumps(qs,ensure_ascii=False,separators=(',',':')))
 manifest=dict(updated='2026-10-13',years=sorted({r['year'] for r in rows}),papers=sorted(papers,key=lambda p:(p['year'],p['session'],p['paper'])),questionCount=sum(map(len,banks.values())),subjectCounts={k:len(v) for k,v in banks.items()},files=len(rows),discoveryYears=[81,115],classification='本站依原題內容與歷年出題區段整理，非考選部官方逐題標籤。')
 (ROOT/'question-bank/manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2));(ROOT/'question-bank/audit.json').write_text(json.dumps(audit,ensure_ascii=False,indent=2));(ROOT/'question-bank/sources.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2));print(json.dumps({k:manifest[k] for k in ['questionCount','subjectCounts','files']},ensure_ascii=False))
if __name__=='__main__':main()
