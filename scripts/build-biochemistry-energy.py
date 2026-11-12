import json,re,pathlib,subprocess
p=pathlib.Path(__file__).resolve().parent.parent
bank=json.loads((p/'question-bank/biochemistry.json').read_text());by={q['id']:q for q in bank}
spec={6:('bioenergetics','生物能量學與能量耦合',[( '96-1-2-50','B','PEP水解的標準自由能下降幅度大於題目其他選項；產物由烯醇轉為酮型的穩定化是重要原因。'),('98-1-2-48','A','ΔG°′=−RT ln K′eq；K′eq大於1時ln為正，故標準自由能為負。實際ΔG另受Q影響。'),('106-2-1-96','C','受質階層磷酸化可在胞質糖解及粒線體TCA出現；氧化磷酸化位於粒線體內膜。'),('110-1-1-75','B','酵素降低活化障礙、改變速率，不改變同反應的平衡常數及反應物產物自由能差。'),('115-1-1-74','B','自發復性代表適當條件下ΔG有利，不能單憑此斷言一定放熱；須同時考慮焓與總熵。')]),7:('respiratory-chain','電子傳遞鏈與氧化磷酸化',[
('98-2-2-31','D','氧是最終電子接受者，被還原為水；CO₂主要來自脫羧，不是氧在complex IV的產物。'),('99-1-2-43','B','DNP耗散梯度，足夠受質與氧下解除回壓而使耗氧增加，但氧化磷酸化ATP生成下降。'),('99-2-2-45','D','化學滲透理論將電子傳遞與ATP合成透過質子動力連結；內膜及梯度是必要條件。'),('100-1-2-48','B','Glycerol-3-phosphate shuttle將胞質還原當量交到CoQ層級，不是把同一顆NADH直接搬入。'),('100-1-2-49','A','Rotenone阻斷complex I向CoQ的電子流；由II進入的電子可繞過I，但仍需下游完整。'),('102-1-2-46','C','Complex II就是succinate dehydrogenase，連接TCA與呼吸鏈，不泵H⁺。'),('108-1-1-96','C','I與II都向CoQ供電子，不是CoQ將I電子傳給II；CoQ再把電子交向III。'),('110-1-1-95','C','常見H⁺泵為I、III、IV；II不泵，這也是不同入口ATP產率不同的原因。'),('110-2-1-96','A','UCP1促進H⁺回到基質而耗散梯度，支持產熱，不是直接堵住ATP synthase。'),('112-1-1-96','B','Cytochrome c將電子交給IV，IV再還原O₂；不能省略IV說cytochrome c直接還原氧。'),('114-1-1-94','C','II入口繞過I的泵質子步驟，回收的質子動力較少，不是FADH₂只帶一電子。'),('115-2-1-94','A','III完全受阻後，上游NADH與CoQ池較還原；下游cytochrome c可把電子交向氧而較氧化。')]),8:('glycolysis-pyruvate','糖解作用與丙酮酸代謝',[
('96-2-2-36','B','Phosphoglycerate kinase把1,3-BPG的磷酸轉給ADP直接生成ATP；PFK消耗ATP。'),('100-1-2-38','A','Phosphoglycerate kinase反應可逆，供糖解與糖新生共用；其餘是糖解不可逆關卡。'),('101-2-2-36','C','Insulin在典型肝模型支持F2,6BP增加，活化PFK-1；ATP與citrate通常代表抑制訊號。'),('103-2-2-39','C','Arsenate可使GAPDH產物繞過PGK的ATP回收，碳流不一定完全停止，但ATP收益下降。'),('104-1-2-38','C','F2,6BP活化PFK-1並抑制FBPase-1；合成由PFK-2而非bisphosphatase催化。'),('111-1-1-93','C','Pyruvate kinase為糖解三大不可逆步驟之一；其餘選項在一般條件下較可逆。'),('112-1-1-88','B','GAPDH是糖解直接將電子交給NAD⁺的步驟；PDH在糖解之後，不屬十步糖解。'),('112-1-1-90','D','PEPCK用於糖新生方向的OAA→PEP，非葡萄糖到acetyl-CoA所需的糖解加PDH途徑。'),('112-2-1-89','C','Enolase不是題目三大不可逆調控關卡；主要為hexokinase、PFK-1、pyruvate kinase。'),('115-2-1-88','C','F1,6BP對pyruvate kinase為feed-forward活化，非抑制；F2,6BP則活化PFK-1。')])}
teaching=json.loads((p/'scripts/energy-teaching.json').read_text())
exam_notes=json.loads((p/'scripts/energy-exam-notes.json').read_text())
for n,(slug,title,rows) in spec.items():
 md=(p/f'docs/biochemistry/{n:02}-{slug}.md').read_text();sections=[]
 for i,part in enumerate(re.split(r'^## ',md,flags=re.M)[1:]):
  t,b=part.split('\n',1);out=subprocess.check_output(['pandoc','-f','markdown','-t','html'],input=b.encode()).decode();out=re.sub(r'(<table.*?</table>)',r'<div class="table-scroll" tabindex="0">\1</div>',out,flags=re.S);sections.append(dict(id=f'topic-{i+1}',title=t,html=out))
 ex=[]
 for id,ans,analysis in rows:
  q=dict(by[id]);assert q['answers']==[ans];m=re.search(r'(?m)^'+str(q['number'])+r'\s*[.．]?\s*',q['text']);q['text']=q['text'][m.start():] if m else q['text'];q.update(point='機制與選項判讀',analysis=analysis,trap='先說出分子機制或計算依據，再核對選項；不要只記答案字母。');ex.append(q)
 c=dict(id=slug,number=f'{n:02}',title=title,summary='從機制與能量收支重新建立理解，配合算例、比較表與可追溯歷屆原題。',sources='Harper’s Illustrated Biochemistry, 31st ed. 生物能量學、生物氧化、呼吸鏈與糖解相關主題；補充來源見章末。',references='<p>本章為原創教學整理；歷屆題取自既有題庫，答案欄位保留原版本，解析另行撰寫。ATP產率等使用明示的教學近似，作題依題幹條件。</p>',sections=sections,questions=[],recalls=[],readingIntro='依序讀機制、比較表與算例，再到歷屆分析核對不同問法。每節讀完請用自己的話重建因果。',figure='<p>核心路徑：自由能與還原當量 → 質子梯度 → ATP → 碳流與調控。</p>',exams=dict(bankCount=len(bank),yearMin=min(q['year'] for q in bank),yearMax=max(q['year'] for q in bank),note='以下是人工主題精選，非完整頻率統計；相關章節可有交叉選題。',groups=[dict(id='selected',title='歷屆機制與計算題',topic='topic-1',summary='先判斷問題的層次，再選擇能量、位置、方向或調控規則。',questions=ex)]))
 practice=json.loads((p/'scripts/energy-practice.json').read_text())[str(n)]
 c['questions']=[dict(title=f'{i+1:02}　'+q,prompt='<p>'+q+'</p>',answer='<p>'+a+'</p>') for i,(q,a) in enumerate(practice)]
 cfg=teaching[str(n)]
 c['recalls']=cfg['recalls'];assert len(c['recalls'])==len(sections)
 c['sources']=cfg['source']
 c['references']='<p>'+cfg['source']+'</p><p>正文與教學圖為概念重組與原創說明，非逐段譯文。算例為明示條件的教學模型；歷屆原題、官方採計答案與更正版本沿用題庫，解析另行撰寫。精選題數不是完整出題頻率。</p>'
 if n==8:
  c['references']+='<p>PDH組織與isoform調控核對：<a href="https://pubmed.ncbi.nlm.nih.gov/11642366/" target="_blank" rel="noopener noreferrer">Distinct regulatory properties of pyruvate dehydrogenase kinase and phosphatase isoforms</a>；<a href="https://pubmed.ncbi.nlm.nih.gov/2557923/" target="_blank" rel="noopener noreferrer">Ca²⁺與心臟粒線體PDH調控實驗</a>。</p>'
 by_ex={q['id']:q for q in ex};groups=[]
 for topic,name,summary,ids in cfg['groups']:
  qs=[]
  for qid in ids:
   q=by_ex[qid];q['point']=name;q['analysis']+=' '+exam_notes[qid];q['trap']='回到本組對應小節，先重建因果，再判斷題目問正確或錯誤；本題的各選項差異見上方逐項解析。';qs.append(q)
  groups.append(dict(id='group-'+str(len(groups)+1),title=name,topic='topic-'+str(topic),summary=summary,questions=qs))
 assert sorted(q['id'] for g in groups for q in g['questions'])==sorted(by_ex)
 c['exams']['groups']=groups
 c['exams']['note']='人工精選並按解題機制分組，非完整頻率統計；各題保留原卷與答案連結。選項措辭有條件限制或歧義時，解析另列，不自行改寫官方採計答案。'
 name,idx,alt={6:('energy-coupling',5,'ATP與葡萄糖磷酸化耦合，正負自由能相加'),7:('energy-electron-proton',1,'兩種電子入口平行匯入CoQ，質子梯度耦合ATP合成'),8:('energy-pyruvate-fates',9,'Pyruvate四種去向及其區室與目的')}[n]
 fig='<figure><div class="table-scroll" tabindex="0"><img src="assets/biochemistry/'+name+'.svg" alt="'+alt+'" style="width:100%;min-width:520px;max-width:720px;height:auto"></div><figcaption>'+alt+'。手機可橫向捲動閱讀；詳細條件與收支見本節。</figcaption></figure>'
 sections[idx]['html']=fig+sections[idx]['html']
 c['figure']='<p>閱讀順序：先理解名詞與方向，再逐步推導算例，最後用歷屆不同問法檢查；每節末有對應的閉卷回想。</p>'
 c['readingIntro']={6:'先分清方向與速率，再用Q、平衡常數與算例建立自由能直覺；最後把ATP耦合、電子轉移與能量狀態連起來。',7:'先定位粒線體兩側與平行電子入口，再算質子與ATP，最後逐步分析加ADP、抑制劑與解偶聯劑的實驗。',8:'先追碳數、磷酸與電子，再讀各器官的調控。最後用乳酸、BPG旁路、PDH與不同題幹起點重算能量帳。'}[n]
 (p/f'biochemistry-{slug}.js').write_text('biochemistryChapters.push('+json.dumps(c,ensure_ascii=False,indent=2)+');\n')
