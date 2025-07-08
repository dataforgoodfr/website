import clsx from 'clsx';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { DM_Mono, DM_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';
import { Footer } from '@/components/footer';
import { routing } from '@/i18n/routing';
import Header from './_partials/header';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-mono',
});

// eslint-disable-next-line react-refresh/only-export-components
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: (typeof routing.locales)[number] };
}) {
  const t = await getTranslations({ locale: locale as string, namespace: 'siteConfig' });

  return {
    metadataBase: new URL(t('url')),
    title: {
      default: t('title'),
      template: `%s | ${t('title')}`,
    },
    description: t('description'),
    robots: { index: true, follow: true },
    icons: {
      icon: '/favicon/favicon.ico',
      shortcut: '/favicon/favicon.ico',
      apple: '/favicon/apple-touch-icon.png',
    },
    manifest: `/favicon/site.webmanifest`,
    openGraph: {
      url: t('url'),
      title: t('title'),
      description: t('description'),
      siteName: t('title'),
      images: [`${t('url')}/images/og.jpg`],
      type: 'website',
      locale: 'fr',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [`${t('url')}/images/og.jpg`],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={clsx([dmSans.variable, dmMono.variable, 'min-h-screen flex flex-col antialiased'])}
      >
        <NextIntlClientProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
