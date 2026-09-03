/** Prüfseite für die Projektbilder. Liest den tatsächlichen Stand aus
 *  projekte.ts, nicht aus Zwischendateien — die veralten beim Umbauen. */
import { readFileSync, writeFileSync, mkdirSync, statSync, existsSync } from 'fs';

const src = readFileSync('src/data/projekte.ts', 'utf8');
const V = Date.now();
const kb = p => (existsSync('out' + p) ? Math.round(statSync('out' + p).size / 1024) : 0);

// Projektblöcke zerlegen
const bloecke = src.split(/\n  \{\n/).slice(1);
const projekte = [];
for (const b of bloecke) {
  const slug = (b.match(/slug: '([^']+)'/) || [])[1];
  if (!slug) continue;
  const gal = [...b.matchAll(/'(\/images\/projekte\/[^']+\/atelier-aa-[^']+-\d+\.jpg)'/g)]
    .map(m => m[1]).filter((p, i, a) => a.indexOf(p) === i);
  const hero = (b.match(/heroImage: '([^']+)'/) || [])[1];
  const thumb = (b.match(/thumbnail: '([^']+)'/) || [])[1];
  if (!gal.length && !hero) continue;
  projekte.push({
    slug,
    titel: (b.match(/title: '([^']+)'/) || [])[1] ?? slug,
    ort: (b.match(/ort: '([^']+)'/) || [])[1] ?? '',
    kanton: (b.match(/kanton: '([^']+)'/) || [])[1] ?? '',
    gal, hero, thumb,
    plaene: [...b.matchAll(/datei: '\/dokumente\/projekte\/[^']*\/([^']+)\.pdf'/g)].map(m => m[1]),
  });
}

let h = `<title>Projektbilder prüfen</title>
<style>
:root{--pa:#faf9f7;--in:#1c1c1a;--st:#8a8782;--mi:#e8e6e2}
body{background:var(--pa);color:var(--in);font:15px/1.55 -apple-system,system-ui,sans-serif;margin:0;padding:40px 24px}
.w{max-width:1280px;margin:0 auto}h1{font-size:30px;font-weight:500;margin:0 0 8px}
.lead{color:var(--st);max-width:720px;margin:0 0 4px}
.fassung{font-size:13px;background:var(--mi);display:inline-block;padding:5px 11px;margin:14px 0 0}
h2{font-size:19px;font-weight:600;margin:50px 0 2px;padding-top:18px;border-top:1px solid var(--mi)}
.slug{font-size:12px;color:var(--st);font-family:ui-monospace,monospace;margin:2px 0}
.meta{color:var(--st);font-size:13px;margin:6px 0 16px}
.titel{display:flex;gap:16px;margin-bottom:18px;flex-wrap:wrap}
.titel figure{margin:0}.titel img{height:158px;display:block;background:var(--mi)}
.g{display:grid;grid-template-columns:repeat(auto-fill,minmax(175px,1fr));gap:14px}
.g img{width:100%;height:128px;object-fit:cover;background:var(--mi);display:block}
figure{margin:0}figcaption{font-size:11px;color:var(--st);margin-top:5px}
.tag{display:inline-block;background:var(--in);color:#fff;font-size:10px;padding:2px 7px;letter-spacing:.06em;text-transform:uppercase}
.pl{font-size:12px;color:var(--st);margin-top:12px}
</style>
<div class=w>
<h1>Projektbilder prüfen</h1>
<p class=lead><b>Vorschau</b> ist ein Bild pro Projekt, überall gleich verwendet — oben als 16:9, als Kachel als 4:3. Es erscheint <b>nicht</b> mehr in der Galerie darunter.</p>
<p class=lead style="color:#1c1c1a"><b>Die Nummer unter jedem Bild ist die Dateinummer und bleibt fest.</b> Sie ändert sich nicht, wenn die Reihenfolge wechselt — beziehe dich immer darauf.</p>
<p class=fassung>Fassung ${V} &mdash; alle Bilder werden frisch geladen</p>`;

for (const p of projekte) {
  h += `\n<h2>${p.titel}${p.ort ? ', ' + p.ort + ' ' + p.kanton : ''}</h2>
<p class=slug>${p.slug}</p>
<p class=meta>${p.gal.length} Galeriebilder${p.plaene.length ? ' · ' + p.plaene.length + ' Pläne' : ''}</p>
<div class=titel>`;
  if (p.hero) h += `<figure><img src="${p.hero}?v=${V}"><figcaption><span class=tag>Vorschau 16:9</span> ${kb(p.hero)} KB</figcaption></figure>`;
  if (p.thumb) h += `<figure><img src="${p.thumb}?v=${V}"><figcaption><span class=tag>Kachel 4:3</span> ${kb(p.thumb)} KB</figcaption></figure>`;
  h += `</div><div class=g>`;
  p.gal.forEach((x, i) => {
    const nr = (x.match(/-(\d+)\.jpg$/) || [])[1];
    /*
     * Nur die Dateinummer anzeigen, nicht die Position in der Galerie. Die
     * Position verschiebt sich, sobald sich die Reihenfolge ändert (Videos
     * zuoberst, Vorschaubild heraus) — Angaben wie "Bild 4" zeigten dadurch
     * je nach Zeitpunkt auf ein anderes Foto. Die Dateinummer ist fest.
     */
    h += `<figure><img src="${x}?v=${V}"><figcaption><b>Bild ${nr}</b> · ${kb(x)} KB</figcaption></figure>`;
  });
  h += `</div>`;
  if (p.plaene.length) h += `<p class=pl>Pläne: ${p.plaene.map(x => x.replace('atelier-aa-' + p.slug + '-', '')).join(' · ')}</p>`;
}
h += `\n</div>`;
mkdirSync('out/_pruefung', { recursive: true });
writeFileSync('out/_pruefung/index.html', h);
console.log('  Prüfseite: ' + projekte.length + ' Projekte, Fassung ' + V);
