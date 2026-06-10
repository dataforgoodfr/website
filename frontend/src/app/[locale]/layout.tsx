import { notFound } from 'next/navigation';
import { I18nProvider } from '@/i18n/provider';
import { loadAllMessages } from '@/i18n/server';
import { locales } from '@/i18n/routing';
import Header from './_partials/header';
import Footer from './_partials/footer';
import NewsletterBlock from '@/components/organisms/NewsletterBlock/NewsletterBlock';
import './globals.css';

export async function generateMetadata() {
  return {
    title: 'Data For Good',
    description: "Data For Good - Association pour l'impact social par la data",
    robots: { index: true, follow: true },
    icons: {
      icon: '/favicon/favicon.ico',
      shortcut: '/favicon/favicon.ico',
      apple: '/favicon/apple-touch-icon.png',
    },
    manifest: '/favicon/site.webmanifest',
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale || 'fr';

  const isValidLocale = locales.includes(locale as typeof locales[number]);

  if (!isValidLocale) {
    notFound();
  }

  let messages: Record<string, unknown> = {};
  try {
    messages = await loadAllMessages(locale);
  } catch (e) {
    console.error('Failed to load messages:', e);
  }

  return (
    <>
      <I18nProvider messages={messages} locale={locale}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <NewsletterBlock />
        <Footer />
      </I18nProvider>
    </>
  );
}
