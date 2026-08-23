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

  const vorname = String(body.vorname ?? '').trim();
  const nachname = String(body.nachname ?? '').trim();
  const email = String(body.email ?? '').trim();
  const telefon = String(body.telefon ?? '').trim();
  const unternehmen = String(body.unternehmen ?? '').trim();
  const betreff = String(body.betreff ?? '').trim();
  const nachricht = String(body.nachricht ?? '').trim();

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
