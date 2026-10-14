"""Download authorized original books, verify hashes, and render hosted explanation pages."""
import concurrent.futures
from html.parser import HTMLParser
import hashlib
import json
import pathlib
import re
import urllib.parse
import urllib.request
import fitz
from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parents[1]
INDEX = json.loads((ROOT / 'explanations/index.json').read_text())
CACHE = ROOT / '.ym-pdf-cache'

class DownloadForm(HTMLParser):
    def __init__(self):
        super().__init__()
        self.action = None
        self.fields = {}
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'form' and attrs.get('id') == 'download-form':
            self.action = attrs.get('action')
        if tag == 'input' and attrs.get('type') == 'hidden':
            self.fields[attrs['name']] = attrs.get('value', '')

def fetch_pdf(url):
    data = urllib.request.urlopen(url, timeout=180).read()
    if data.startswith(b'%PDF'):
        return data
    form = DownloadForm()
    form.feed(data.decode('utf-8'))
    if form.action == 'https://drive.usercontent.google.com/download':
        return urllib.request.urlopen(form.action + '?' + urllib.parse.urlencode(form.fields), timeout=180).read()
    raise ValueError('Source did not return a PDF')

def build(item):
    key, book = item
    assert re.fullmatch(r'[A-Za-z0-9_-]+', key)
    raw = urllib.parse.urlparse(book['download'])
    assert raw.scheme == 'https' and raw.hostname == 'drive.google.com'
    params = urllib.parse.parse_qs(raw.query)
    ident = params.get('id', [None])[0] or raw.path.split('/d/')[1].split('/')[0]
    params.update(id=[ident], export=['download'])
    params.pop('usp', None)
    url = 'https://drive.google.com/uc?' + urllib.parse.urlencode({k: v[0] for k, v in params.items()})
    CACHE.mkdir(exist_ok=True)
    pdf = CACHE / book['filename']
    if not pdf.exists() or hashlib.sha256(pdf.read_bytes()).hexdigest() != book['sha256']:
        for attempt in range(3):
            try:
                data = fetch_pdf(url)
                if not data.startswith(b'%PDF'):
                    raise ValueError('Source did not return a PDF')
                if hashlib.sha256(data).hexdigest() != book['sha256']:
                    raise ValueError('Original PDF changed; recheck page index before publication')
                pdf.write_bytes(data)
                break
            except Exception:
                if attempt == 2:
                    raise
    output = ROOT / 'explanations/pages' / key
    output.mkdir(parents=True, exist_ok=True)
    with fitz.open(pdf) as doc:
        assert len(doc) == book['pages'], key
        for n, page in enumerate(doc, 1):
            dest = output / f'{n}.webp'
            if dest.exists():
                continue
            pix = page.get_pixmap(matrix=fitz.Matrix(1.65, 1.65), alpha=False)
            Image.frombytes('RGB', (pix.width, pix.height), pix.samples).save(dest, 'WEBP', quality=85, method=4)
    print(f'{key}: {book["pages"]} pages verified and rendered', flush=True)

if __name__ == '__main__':
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
        list(pool.map(build, INDEX['books'].items()))
    for record in INDEX['questions'].values():
        if record['status'] == 'matched':
            for page in range(record['start'], record['end'] + 1):
                assert (ROOT / 'explanations/pages' / record['book'] / f'{page}.webp').is_file()
    total = sum(p.stat().st_size for p in (ROOT / 'explanations/pages').rglob('*.webp'))
    assert total < 850_000_000, f'Explanation assets too large: {total}'
    print(f'Complete: {len(INDEX["books"])} books, {total / 1e6:.1f} MB')
