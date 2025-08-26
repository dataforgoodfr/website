'use client';

import { useTranslations } from 'next-intl';
import { EditoCard, NewsletterBlock, PartnersBlock, Title } from '@/components';

export default function AboutPage() {
  const t = useTranslations('about');

  const partners = [
    {
      name: t('partners.partners.0.name'),
      image: t('partners.partners.0.image'),
      link: t('partners.partners.0.link'),
    },
    {
      name: t('partners.partners.1.name'),
      image: t('partners.partners.1.image'),
      link: t('partners.partners.1.link'),
    },
    {
      name: t('partners.partners.2.name'),
      image: t('partners.partners.2.image'),
      link: t('partners.partners.2.link'),
    },
    {
      name: t('partners.partners.3.name'),
      image: t('partners.partners.3.image'),
      link: t('partners.partners.3.link'),
    },
  ];

  return (
    <>
      <div className="container mx-auto py-lg px-4">
        <Title className="mb-md max-w-5xl" variant="medium">
          {t('title')}
        </Title>
      </div>
      
      <PartnersBlock 
        title={t('partners.title')} 
        partners={partners} 
        className="my-lg"
      />

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
