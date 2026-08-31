import { NextResponse } from 'next/server';
import { makeSessionToken, sessionCookie } from '@/lib/mailer/session';
import {
  ANFRAGE_COOKIE_NAME,
  abgelaufenesAnfrageCookie,
  pruefeAnmeldung,
} from '@/lib/mailer/magic';

/** Der Einmal-Link aus der E-Mail landet hier. */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const token = url.searchParams.get('token') || '';
  const nonce = request.headers
    .get('cookie')
    ?.split(';')
    .map((teil) => teil.trim())
    .find((teil) => teil.startsWith(`${ANFRAGE_COOKIE_NAME}=`))
    ?.split('=')[1];

  const email = pruefeAnmeldung(token, nonce ? decodeURIComponent(nonce) : null);
  if (!email) {
    return NextResponse.redirect(new URL('/mailer/login?fehler=1', url.origin));
  }

  const antwort = NextResponse.redirect(new URL('/mailer', url.origin));
  antwort.cookies.set(sessionCookie(makeSessionToken(email)));
  antwort.cookies.set(abgelaufenesAnfrageCookie());
  return antwort;
}
