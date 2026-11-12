"""Build chapters 12–14 from Markdown and audited teaching/exam metadata."""
import json,re,pathlib,subprocess,html
p=pathlib.Path(__file__).resolve().parent.parent
bank=json.loads((p/'question-bank/biochemistry.json').read_text());by={q['id']:q for q in bank}
spec=json.loads((p/'scripts/lipid-teaching.json').read_text())
for cfg in spec:
 slug=cfg['id'];md=(p/f"docs/biochemistry/{cfg['number']}-{slug}.md").read_text();sections=[]
 for i,part in enumerate(re.split(r'^## ',md,flags=re.M)[1:]):
  title,body=part.split('\n',1)
  out=subprocess.check_output(['pandoc','-f','markdown','-t','html'],input=body.encode()).decode()
  out=re.sub(r'(<table.*?</table>)',r'<div class="table-scroll" tabindex="0">\1</div>',out,flags=re.S)
  sections.append(dict(id=f'topic-{i+1}',title=title,html=out))
 assert len(sections)==len(cfg['recalls'])
 groups=[];seen=set()
 for topic,title,summary,rows in cfg['groups']:
  questions=[]
  for qid,expected,analysis,trap in rows:
   q=dict(by[qid]);assert q['answers']==expected,(qid,q['answers'],expected);assert qid not in seen;seen.add(qid)
   m=re.search(r'(?m)^'+str(q['number'])+r'\s*[.．]?\s*',q['text'])
   if m:q['text']=q['text'][m.start():]
   q.update(point=title,analysis=analysis,trap=trap);questions.append(q)
  assert 1<=topic<=len(sections)
  groups.append(dict(id=f'group-{len(groups)+1}',title=title,topic=f'topic-{topic}',summary=summary,questions=questions))
 for topic,asset,alt in cfg['diagrams']:
  assert (p/'assets/biochemistry'/asset).exists()
  sections[topic-1]['html']='<figure><div class="table-scroll" tabindex="0"><img src="assets/biochemistry/'+asset+'" alt="'+html.escape(alt,quote=True)+'" style="width:100%;min-width:540px;max-width:780px;height:auto"></div><figcaption>'+html.escape(alt)+'。圖中為教學模型；手機可橫向捲動，條件與例外見正文。</figcaption></figure>'+sections[topic-1]['html']
 refs='<p>'+html.escape(cfg['sources'])+'</p><p>正文與圖為原創教學重組，非逐段翻譯。題目取自現有歷屆題庫，官方採計答案與更正版本原樣保留；機轉解析另行撰寫。精選題數不等同完整考頻統計。</p>'
 for label,url in cfg.get('links',[]):refs+='<p><a target="_blank" rel="noopener noreferrer" href="'+html.escape(url,quote=True)+'">'+html.escape(label)+'</a></p>'
 c=dict(id=slug,number=cfg['number'],title=cfg['title'],summary=cfg['summary'],sources=cfg['sources'],references=refs,sections=sections,recalls=cfg['recalls'],readingIntro=cfg['intro'],figure='<p>先追碳流、還原力與區室，再讀能量收支、器官調控與疾病連結。每節末可閉卷回答，歷屆題分組連回對應小節。</p>',questions=[dict(title=f'{i+1:02}　'+q,prompt='<p>'+html.escape(q)+'</p>',answer='<p>'+html.escape(a)+'</p>') for i,(q,a) in enumerate(cfg['practice'])],exams=dict(bankCount=len(bank),yearMin=min(q['year'] for q in bank),yearMax=max(q['year'] for q in bank),note='人工精選，保留年份、場次、題號、原卷與答案連結；非完整考頻統計。跨章題可能重複出現，作答依題幹範圍與官方採計版本。',groups=groups))
 (p/f'biochemistry-{slug}.js').write_text('biochemistryChapters.push('+json.dumps(c,ensure_ascii=False,indent=2)+');\n')
 print(cfg['number'],len(sections),'sections',len(c['questions']),'practice',len(seen),'past questions')
