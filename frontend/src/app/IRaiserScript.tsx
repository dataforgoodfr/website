'use client';

import Script from 'next/script';

/**
 * Charge le widget de don iRaiser.
 *
 * Le script ne s'initialise que sur l'evenement `load` de la fenetre. Avec
 * `afterInteractive`, il est injecte apres l'hydratation : si `load` est deja
 * passe, il ne s'initialise jamais et le formulaire de don reste vide. `onReady`
 * appelle `init()` des que le script est pret ; un second appel est sans effet,
 * l'ancre ayant deja ete remplacee par l'iframe.
 */
export function IRaiserScript() {
  return (
    <Script
      src="https://soutenir.dataforgood.fr/libs.iraiser.eu/libs/payment/frame/1.6/IRaiserFrame.js"
      strategy="afterInteractive"
      onReady={() => (window as any).IRaiserFrame?.init()}
    />
  );
}
