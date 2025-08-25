'use client';

import { useTranslations } from 'next-intl';
import { NewsletterBlock, Title } from '@/components';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <>
    <div className="container mx-auto py-lg px-4">
      <Title className="mb-md max-w-5xl" variant="medium">
        {t('title')}
      </Title>

      </div>
      <NewsletterBlock />
    </>
  );
}
