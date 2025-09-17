'use client';

import { useTranslations } from 'next-intl';
import { Title } from '@/components';

export default function DonationsPage() {
  const t = useTranslations('donations');

  return (
    <div className="container mx-auto py-lg px-4">
      <Title className="mb-md">
        {t('title')}
      </Title>
      <iframe
        id="haWidget"
        allowTransparency
        scrolling="auto"
        src="https://www.helloasso.com/associations/data-for-good/formulaires/2/widget"
        style={{ width: '100%', height: '750px', border: 'none' }}
        title={t('helloasso')}
        sandbox="allow-scripts allow-forms allow-same-origin"
      />
    </div>
  );
}
