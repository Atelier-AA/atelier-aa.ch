/**
 * Alle Seiten in einem echten Browser aufrufen und prüfen: Handy und Desktop.
 *
 * Geprüft wird, was sich nur im Browser zeigt: waagrechtes Überlaufen,
 * Fehler in der Konsole, fehlgeschlagene Ladevorgänge, nicht geladene Bilder
 * und zu kleine Tippflächen.
 */
import { chromium } from 'playwright';
import { readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const BASIS = 'http://127.0.0.1:8080';
const GERAETE = [
  { name: 'Handy',   breite: 390, hoehe: 844, dpr: 3, mobil: true },
  { name: 'Desktop', breite: 1440, hoehe: 900, dpr: 2, mobil: false },
];

// alle Seiten aus dem Export
const seiten = [];
(function s(d) {
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const p = join(d, e.name);
    if (e.isDirectory()) { if (e.name !== '_next' && e.name !== '_pruefung') s(p); }
    else if (e.name === 'index.html') seiten.push('/' + d.replace(/^out\/?/, '') + (d === 'out' ? '' : '/'));
  }
})('out');
const alle = [...new Set(seiten.map(x => x.replace(/\/+$/, '/') || '/'))].sort();

const browser = await chromium.launch({ channel: 'chrome' });
const befunde = [];

for (const g of GERAETE) {
  const ctx = await browser.newContext({
    viewport: { width: g.breite, height: g.hoehe },
    deviceScaleFactor: g.dpr,
    isMobile: g.mobil, hasTouch: g.mobil,
    userAgent: g.mobil
      ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
      : undefined,
  });
  const seite = await ctx.newPage();
  let n = 0;
  for (const adr of alle) {
    const fehler = [], netz = [];
    seite.on('console', m => { if (m.type() === 'error') fehler.push(m.text().slice(0, 160)); });
    seite.on('requestfailed', r => netz.push(r.url().replace(BASIS, '') + ' — ' + (r.failure()?.errorText ?? '')));
    seite.on('response', r => { if (r.status() >= 400) netz.push(r.status() + ' ' + r.url().replace(BASIS, '')); });

    let status = 0;
    try {
      const a = await seite.goto(BASIS + adr, { waitUntil: 'load', timeout: 30000 });
      status = a?.status() ?? 0;
      await seite.waitForTimeout(350);
      // alles laden, was verzögert geladen wird
      await seite.evaluate(async () => {
        await new Promise(r => { let h = 0; const t = setInterval(() => {
          window.scrollBy(0, window.innerHeight); h += window.innerHeight;
          if (h > document.body.scrollHeight + window.innerHeight) { clearInterval(t); r(); }
        }, 60); });
        window.scrollTo(0, 0);
      });
      await seite.waitForTimeout(500);
    } catch (e) { fehler.push('Aufruf: ' + e.message.split('\n')[0]); }

    const mess = await seite.evaluate(() => {
      const ue = document.documentElement.scrollWidth - window.innerWidth;
      const kaputt = [...document.images].filter(i => i.complete && i.naturalWidth === 0)
        .map(i => i.currentSrc || i.src);
      // Elemente, die waagrecht über den Rand hinausragen
      const raus = [...document.querySelectorAll('body *')].filter(el => {
        const r = el.getBoundingClientRect();
        return r.width > 0 && (r.right > window.innerWidth + 2 || r.left < -2);
      }).slice(0, 4).map(el => el.tagName.toLowerCase() +
        (el.className && typeof el.className === 'string' ? '.' + el.className.split(' ').slice(0,2).join('.') : ''));
      // zu kleine Tippflächen
      const klein = [...document.querySelectorAll('a,button,[role=button],summary')].filter(el => {
        const r = el.getBoundingClientRect();
        return r.width > 0 && r.height > 0 && (r.height < 24 || r.width < 24);
      }).length;
      return { ue, kaputt, raus, klein, hoehe: document.body.scrollHeight };
    }).catch(() => null);

    if (status !== 200 || fehler.length || netz.length || (mess && (mess.ue > 2 || mess.kaputt.length)))
      befunde.push({ geraet: g.name, adr, status, fehler, netz, ...(mess ?? {}) });
    else if (mess && mess.klein > 0)
      befunde.push({ geraet: g.name, adr, status, nurKlein: mess.klein });
    seite.removeAllListeners();
    if (++n % 40 === 0) console.log('  ' + g.name + ': ' + n + '/' + alle.length);
  }
  console.log('  ' + g.name + ': ' + n + ' Seiten geprüft');
  await ctx.close();
}
await browser.close();
writeFileSync('werkzeuge/.browserpruefung.json', JSON.stringify({ seiten: alle.length, befunde }, null, 1));

console.log('\n' + '='.repeat(72));
const echt = befunde.filter(b => !b.nurKlein);
console.log('Seiten geprüft: ' + alle.length + ' je Gerät   Befunde: ' + echt.length);
for (const b of echt.slice(0, 25)) {
  console.log('\n  [' + b.geraet + '] ' + b.adr + (b.status !== 200 ? '   HTTP ' + b.status : ''));
  if (b.ue > 2) console.log('     waagrechter Überlauf: ' + b.ue + ' px   ' + (b.raus ?? []).join(', '));
  (b.kaputt ?? []).forEach(x => console.log('     Bild lädt nicht: ' + x));
  (b.fehler ?? []).slice(0,3).forEach(x => console.log('     Konsolenfehler: ' + x));
  (b.netz ?? []).slice(0,3).forEach(x => console.log('     Ladefehler: ' + x));
}
const klein = befunde.filter(b => b.nurKlein);
if (klein.length) console.log('\n  Seiten mit kleinen Tippflächen: ' + klein.length + ' (nur Hinweis)');
