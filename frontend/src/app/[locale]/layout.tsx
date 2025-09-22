import clsx from 'clsx';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { DM_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { routing } from '@/i18n/routing';
import Footer from './_partials/footer';
import Header from './_partials/header';
import './globals.css';

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-secondary',
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: (typeof routing.locales)[number] }>;
}) {
  const { locale } = await params;
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
    <html lang={locale} className="scroll-smooth">
      <head>
        <Script
          src="https://soutenir.dataforgood.fr/libs.iraiser.eu/libs/payment/frame/1.6/IRaiserFrame.js"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={clsx([dmMono.variable, 'min-h-screen overflow-x-hidden flex flex-col antialiased bg-[url("/images/bg-paper.jpg")] bg-repeat-y'])}
        style={{ backgroundSize: '100vw 100vh' }}
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
