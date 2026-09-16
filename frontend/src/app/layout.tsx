import clsx from 'clsx';
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
        <script
          src="https://soutenir.dataforgood.fr/libs.iraiser.eu/libs/payment/frame/1.6/IRaiserFrame.js"
          defer
        />
        <script
          src="https://plausible.services.dataforgood.fr/js/script.file-downloads.hash.outbound-links.js"
          defer
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
