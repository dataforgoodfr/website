'use client';

import { useTranslations } from 'next-intl';
import { NewsletterBlock, Title } from '@/components';

export default function CguPage() {
  const t = useTranslations('cgu');

  return (
    <>
      <div className="container my-lg">
        <Title className="mb-md max-w-5xl" variant="medium">
          {t('title')}
        </Title>
      </div>

      <NewsletterBlock />
    </>
  );
}
