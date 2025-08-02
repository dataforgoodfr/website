'use client';

import { useTranslations } from 'next-intl';

export default function DonationsPage() {
  const t = useTranslations('donations');

  return (
    <div className="container mx-auto py-lg px-4">
      <h1 className="text-h1 font-tertiary font-bold mb-md">
        {t('title')}
      </h1>
      <iframe
        id="haWidget"
        allowTransparency={true}
        scrolling="auto"
        src="https://www.helloasso.com/associations/data-for-good/formulaires/2/widget"
        style={{ width: '100%', height: '750px', border: 'none' }}
        title={t('helloasso')}
        sandbox="allow-scripts allow-forms allow-same-origin"
      />
    </div>
  );
}
