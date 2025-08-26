'use client';

import { useTranslations } from 'next-intl';
import { EditoCard, NewsletterBlock, Title } from '@/components';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <>
      <div className="container mx-auto my-lg">
        <Title className="max-w-5xl" variant="medium">
          {t('title')}
        </Title>
      </div>

      <EditoCard
        title={t('edito.title')}
        content={<>
          <p>{t('edito.content.0')}</p>
          <p>{t('edito.content.1')}</p>
        </>}
        image="/images/pages/carte-benevoles.png"
        ctaText={t('edito.ctaText')}
        ctaLink="/volunteer"
        className="my-lg"
      />

      <NewsletterBlock />
    </>
  );
}
