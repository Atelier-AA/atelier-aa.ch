import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { firma } from '@/data/firma';

/**
 * Nimmt das Kontaktformular entgegen und verschickt es per Resend an
 * `info@atelier-aa.ch`. Ohne RESEND_API_KEY (z. B. lokal ohne .env.local)
 * meldet die Route das klar als Fehler zurück, statt eine E-Mail
 * vorzutäuschen, die nie verschickt wurde — das Formular fängt das im
 * Frontend mit einem mailto-Fallback auf.
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Feldlängen. Ohne sie kann eine einzelne Anfrage beliebig grosse Werte
 * mitschicken, die dann durch Speicher, Protokolle und den Versanddienst
 * wandern. Die Werte sind grosszügig gewählt und schneiden echte Anfragen
 * nicht ab.
 */
const MAX_FELD = 300;
const MAX_EMAIL = 254; // RFC 5321
const MAX_NACHRICHT = 5000;

/**
 * Einfache Ratenbegrenzung je Absenderadresse.
 *
 * Bewusst im Arbeitsspeicher: diese Route läuft nur in der Vercel-Vorschau,
 * die Produktion auf Hostpoint nutzt kontakt.php mit einer dateibasierten
 * Sperre. Ein Speicherzähler überlebt keinen Kaltstart und wirkt bei
 * mehreren Instanzen nur je Instanz — als Bremse gegen einfache Fluten
 * genügt das hier. Für eine dauerhafte Lösung bräuchte es Vercel KV oder
 * die Firewall.
 */
const MAX_PRO_STUNDE = 5;
const zaehler = new Map<string, number[]>();

function zuVieleAnfragen(adresse: string): boolean {
  const jetzt = Date.now();
  const grenze = jetzt - 3600_000;
  const bisher = (zaehler.get(adresse) ?? []).filter((z) => z > grenze);
  if (bisher.length >= MAX_PRO_STUNDE) {
    zaehler.set(adresse, bisher);
    return true;
  }
  bisher.push(jetzt);
  zaehler.set(adresse, bisher);
  // Verwaiste Einträge aufräumen, damit die Karte nicht unbegrenzt wächst.
  if (zaehler.size > 5000) {
    for (const [k, v] of zaehler) {
      if (v.every((z) => z <= grenze)) zaehler.delete(k);
    }
  }
  return false;
}

/** Kürzt und säubert einen Wert aus der Anfrage. */
function feld(wert: unknown, max = MAX_FELD): string {
  return typeof wert === 'string' ? wert.trim().slice(0, max) : '';
}

function escapeHtml(wert: string) {
  return wert
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Ungültige Anfrage.' }, { status: 400 });
  }

  // Unsichtbares Honeypot-Feld: für Menschen leer, von simplen Spam-Bots
  // aber oft automatisch befüllt.
  if (typeof body.webseite === 'string' && body.webseite.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  const adresse =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unbekannt';
  if (zuVieleAnfragen(adresse)) {
    return NextResponse.json(
      { error: 'Es wurden zu viele Nachrichten gesendet. Bitte später erneut versuchen.' },
      { status: 429 },
    );
  }

  const vorname = feld(body.vorname);
  const nachname = feld(body.nachname);
  const email = feld(body.email, MAX_EMAIL);
  const telefon = feld(body.telefon);
  const unternehmen = feld(body.unternehmen);
  const betreff = feld(body.betreff);
  const nachricht = feld(body.nachricht, MAX_NACHRICHT);

  if (!vorname || !nachname || !email || !nachricht) {
    return NextResponse.json(
      { error: 'Bitte Vorname, Nachname, E-Mail und Nachricht ausfüllen.' },
      { status: 400 }
    );
  }
  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: 'Bitte eine gültige E-Mail-Adresse angeben.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY fehlt — Kontaktformular kann nicht versenden.');
    return NextResponse.json(
      { error: 'Der Versand ist derzeit nicht eingerichtet.' },
      { status: 500 }
    );
  }

  const absender = process.env.CONTACT_FROM_EMAIL || 'Atelier AA Website <onboarding@resend.dev>';
  const empfaenger = process.env.CONTACT_TO_EMAIL || firma.email;

  const betreffZeile = betreff || 'Neue Anfrage über die Website';
  const zeilen = [
    ['Name', `${vorname} ${nachname}`],
    ['E-Mail', email],
    telefon && ['Telefon', telefon],
    unternehmen && ['Unternehmen', unternehmen],
  ].filter(Boolean) as [string, string][];

  const text = [
    ...zeilen.map(([label, wert]) => `${label}: ${wert}`),
    '',
    nachricht,
  ].join('\n');

  const html = `
    <div style="font-family: sans-serif; font-size: 15px; color: #1a1a1a;">
      <p><strong>Neue Anfrage über das Kontaktformular auf atelier-aa.ch</strong></p>
      <table cellpadding="4">
        ${zeilen.map(([label, wert]) => `<tr><td><strong>${escapeHtml(label)}</strong></td><td>${escapeHtml(wert)}</td></tr>`).join('')}
      </table>
      <p style="white-space: pre-wrap; margin-top: 16px;">${escapeHtml(nachricht)}</p>
    </div>
  `;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: absender,
      to: empfaenger,
      replyTo: email,
      subject: betreffZeile,
      text,
      html,
    });

    if (error) {
      console.error('Resend-Fehler:', error);
      return NextResponse.json({ error: 'Der Versand ist fehlgeschlagen.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Unerwarteter Fehler beim Versand:', err);
    return NextResponse.json({ error: 'Der Versand ist fehlgeschlagen.' }, { status: 500 });
  }
}
