import type { Metadata } from 'next';
import './mailer.css';

export const metadata: Metadata = {
  title: 'Atelier AA — Mailing',
  robots: { index: false, follow: false, noarchive: true, nosnippet: true },
};

export default function MailerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
