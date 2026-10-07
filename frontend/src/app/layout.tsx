import clsx from 'clsx';
import Script from 'next/script';
import { DM_Mono } from 'next/font/google';

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-secondary',
});

export const metadata = {
  title: 'DataForGood',
  description: 'DataForGood - Association pour l\'impact social par la data',
};

/**
 * Layout racine : c'est le SEUL endroit ou `<html>` et `<body>` sont rendus.
 *
 * `app/[locale]/layout.tsx` en rendait un second jeu, ce qui produisait deux
 * balises `<html>` imbriquees -- du HTML invalide qui faisait echouer
 * l'hydratation de React sur toutes les pages (erreur #418). Les deux layouts
 * portaient en outre les memes classes de `<body>`, le layout de locale
 * ajoutant la variable de police : elles sont regroupees ici.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <head>
        {/* `next/script` et non des balises `<script>` nues : React avertit
            qu'un script rendu par un composant n'est jamais execute cote client.
            `afterInteractive` et non `beforeInteractive` : charge trop tot, le
            script iRaiser detourne `console.error` et casse le flux RSC de Next
            (`enqueueModel is not a function`), ce qui fait echouer les
            navigations cote client. */}
        <Script
          src="https://soutenir.dataforgood.fr/libs.iraiser.eu/libs/payment/frame/1.6/IRaiserFrame.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://plausible.services.dataforgood.fr/js/script.file-downloads.hash.outbound-links.js"
          strategy="afterInteractive"
          data-domain="dataforgood.fr"
        />
      </head>
      <body
        className={clsx([
          dmMono.variable,
          'min-h-screen overflow-x-hidden flex flex-col antialiased bg-[url("/images/bg-paper.jpg")] bg-repeat-y',
        ])}
        style={{ backgroundSize: '100vw 100vh' }}
      >
        {children}
      </body>
    </html>
  );
}
