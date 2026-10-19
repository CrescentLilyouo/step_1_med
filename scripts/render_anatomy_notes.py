"""Render user-provided PDF pages, preserving all original page content."""
import argparse, hashlib, json, re
from pathlib import Path
import fitz
from PIL import Image

p=argparse.ArgumentParser();p.add_argument('pdf',type=Path);args=p.parse_args()
root=Path(__file__).resolve().parents[1]
mapping=(root/'anatomy-note-images.js').read_text()
pages=sorted({int(n) for group in re.findall(r"'[^']+\.svg':\[([\d,]+)\]",mapping) for n in group.split(',')})
extra=root/'assets/muscles2-source.json'
if extra.exists():
    pages=sorted(set(pages)|set(json.loads(extra.read_text())['originalPages']))
dest=root/'assets/anatomy-notes';dest.mkdir(parents=True,exist_ok=True)
doc=fitz.open(args.pdf)
for number in pages:
    pix=doc[number-1].get_pixmap(matrix=fitz.Matrix(3,3),alpha=False)
    im=Image.frombytes('RGB',(pix.width,pix.height),pix.samples)
    im.save(dest/f'pdf-{number:03}.webp','WEBP',quality=93,method=6)
metadata={'title':'奕翔的解剖筆記三版','author':'賴奕翔','edition':'2021-07-25','providedBy':'使用者上傳','pdfPages':len(doc),'pageNumbering':'PDF 頁碼（含封面），不是手寫頁碼','sha256':hashlib.sha256(args.pdf.read_bytes()).hexdigest(),'renderedPages':pages,'rendering':'原頁完整渲染，3x 解析度；未重繪、未改動原文字或標示。','notice':'封面原文：版權沒有 翻印不究。保留署名；本網站作為非商業國考學習使用。第三方內容之權利仍屬原權利人。'}
(dest/'source.json').write_text(json.dumps(metadata,ensure_ascii=False,indent=2)+'\n')
print(f'Rendered {len(pages)} original pages')
