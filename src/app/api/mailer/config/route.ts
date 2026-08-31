import { NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/mailer/session';
import { senderConfig } from '@/lib/mailer/brevo';

export async function GET() {
  if (!(await isAuthenticated())) return NextResponse.json({ error: 'Nicht gefunden.' }, { status: 404 });
  try {
    const sender = senderConfig();
    return NextResponse.json({
      configured: Boolean(process.env.BREVO_API_KEY && sender.email),
      sender,
      folderName: process.env.BREVO_MAILER_FOLDER_NAME || 'Atelier AA Mailings',
    });
  } catch (error) {
    return NextResponse.json({ configured: false, error: error instanceof Error ? error.message : 'Konfiguration fehlt.' }, { status: 500 });
  }
}
