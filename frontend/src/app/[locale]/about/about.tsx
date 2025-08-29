'use client';

import { useTranslations } from 'next-intl';
import { CtaWithImage, EditoCard, LargeTextImage, NewsletterBlock, PartnersBlock, Title, TestimoniesCarousel } from '@/components';

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

  const testimonies = [
    {
      id: 1,
      author: "Jean-Pierre",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/pages/carte-benevoles.png",
    },
    {
      id: 2,
      author: "Jean-Pierre",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/pages/carte-benevoles.png",
    },
    {
      id: 3,
      author: "Jean-Pierre",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/pages/carte-benevoles.png",
    },
  ];

  return (
    <>
      <div className="container my-lg">
        <Title className="mb-md max-w-5xl" variant="medium">
          {t('title')}
        </Title>
      </div>

      <div className="my-lg container flex flex-col md:flex-row gap-8">
        <div className="md:flex-1 flex justify-end">
          <CtaWithImage
              title={{
              children: t('presentation.0.title'),
              rotation: -18,
              className: "relative top-8",
            }}
            content={{
              text: t('presentation.0.content'),
              rotation: -7,
              className: "sm:left-8",
            }}
            image="/images/pages/carte-benevoles.png"
            imagePosition="left"
            contentClassName="relative md:-top-24 md:-left-12"
            cta={
              { text: t('presentation.0.cta'), link: '/projects', rotation: -3.7, className: "relative sm:left-[182px] -top-4" }
            }
          />
        </div>

        <CtaWithImage
            title={{
            children: t('presentation.1.title'),
            rotation: -4,
          }}
          content={{
            text: t('presentation.1.content'),
            rotation: 1.5,
            className: "sm:left-6",
          }}
          image="/images/pages/carte-benevoles.png"
          className="md:flex-1"
          contentClassName="relative md:top-24"
          cta={
            { text: t('presentation.1.cta'), link: '/positions', rotation: 0.5, className: "relative sm:left-48 -top-2" }
          }
        />
      </div>

      <div className="my-lg container">
        <Title className="mb-md" level={2} hasSeparator variant="medium">
          {t('testimonies.title')}
        </Title>
        <TestimoniesCarousel 
          testimonies={testimonies}
        />
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

      <LargeTextImage
        title={t('joinus.title')}
        content={t('joinus.content')}
        image="/images/pages/carte-benevoles.png"
        ctaText={t('edito.ctaText')}
        ctaLink="/volunteer"
        className="my-lg"
      />
      
      <PartnersBlock 
        title={t('partners.title')} 
        partners={partners} 
        className="my-lg"
      />

      <NewsletterBlock />
    </>
  );
}
