import { createHmac, randomBytes, timingSafeEqual } from 'node:crypto';

/**
 * Anmeldung am Mailer über einen Einmal-Link per E-Mail statt über ein
 * Passwort.
 *
 * Der Ablauf hat zwei Teile, die beide stimmen müssen:
 *
 *   1. Der Link enthält ein signiertes Token mit Adresse, Nonce und Ablauf.
 *      Ohne `MAILER_SESSION_SECRET` lässt sich kein gültiges Token bauen.
 *   2. Beim Anfordern wird dieselbe Nonce als httpOnly-Cookie im Browser
 *      abgelegt. Der Link funktioniert nur in dem Browser, der ihn angefordert
 *      hat.
 *
 * Teil 2 ist der Grund, warum ein abgefangener Link allein nichts nützt: Wer
 * die Mail mitliest, aber nicht am anfordernden Browser sitzt, kommt nicht
 * hinein. Ein echter Einmal-Gebrauch bräuchte einen Serverspeicher; darauf
 * verzichten wir bewusst, die Gültigkeit ist stattdessen auf 15 Minuten
 * begrenzt.
 */

const ANFRAGE_COOKIE = 'atelier_aa_mailer_anfrage';
const GUELTIG_SEKUNDEN = 15 * 60;

type Anmeldung = { email: string; nonce: string; exp: number };

function geheimnis() {
  const wert = process.env.MAILER_SESSION_SECRET;
  if (!wert || wert.length < 32) {
    throw new Error('MAILER_SESSION_SECRET fehlt oder ist zu kurz.');
  }
  return wert;
}

function signieren(wert: string) {
  return createHmac('sha256', geheimnis()).update(wert).digest('base64url');
}

function gleich(a: string, b: string) {
  const aa = Buffer.from(a);
  const bb = Buffer.from(b);
  if (aa.length !== bb.length) return false;
  return timingSafeEqual(aa, bb);
}

/** Die einzige Adresse, die sich anmelden darf. */
export function erlaubteAdresse() {
  return (process.env.MAILER_ADMIN_EMAIL || '').trim().toLowerCase();
}

export function istErlaubt(email: string) {
  const erlaubt = erlaubteAdresse();
  if (!erlaubt) return false;
  return email.trim().toLowerCase() === erlaubt;
}

export function neueAnmeldung(email: string) {
  const nonce = randomBytes(24).toString('base64url');
  const nutzlast: Anmeldung = {
    email: email.trim().toLowerCase(),
    nonce,
    exp: Math.floor(Date.now() / 1000) + GUELTIG_SEKUNDEN,
  };
  const codiert = Buffer.from(JSON.stringify(nutzlast)).toString('base64url');
  return { token: `${codiert}.${signieren(codiert)}`, nonce };
}

export function pruefeAnmeldung(token: string, nonceAusCookie?: string | null) {
  const [codiert, signatur] = (token || '').split('.');
  if (!codiert || !signatur) return null;
  if (!gleich(signatur, signieren(codiert))) return null;
  try {
    const nutzlast = JSON.parse(
      Buffer.from(codiert, 'base64url').toString('utf8')
    ) as Anmeldung;
    if (nutzlast.exp <= Math.floor(Date.now() / 1000)) return null;
    if (!istErlaubt(nutzlast.email)) return null;
    if (!nonceAusCookie || !gleich(nutzlast.nonce, nonceAusCookie)) return null;
    return nutzlast.email;
  } catch {
    return null;
  }
}

export function anfrageCookie(nonce: string) {
  return {
    name: ANFRAGE_COOKIE,
    value: nonce,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/',
    maxAge: GUELTIG_SEKUNDEN,
  };
}

export function abgelaufenesAnfrageCookie() {
  return { ...anfrageCookie(''), maxAge: 0 };
}

export const ANFRAGE_COOKIE_NAME = ANFRAGE_COOKIE;
