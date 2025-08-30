'use client';

import { useTranslations } from 'next-intl';
import { NewsletterBlock, Title } from '@/components';

export default function AboutPage() {
  const t = useTranslations('positions');

  


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
