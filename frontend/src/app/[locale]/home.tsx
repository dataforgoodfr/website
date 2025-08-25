'use client';

import { useTranslations } from 'next-intl';
import { ImagesCarousel, ResultsCard, NewsSmallBlock, TalksBlock, Title } from '@/components';

export default function Homepage() {
  const t = useTranslations('home');

  /* const { data, error } = await client.GET('/home-page');
  if (error) {
    return <div>Error</div>;
  } */

  const carouselImages = [
    {
      id: 1,
      src: '/temp-images/carousel-1.jpg',
      ctaHref: '/projets/trawlwatch',
  },
  {
      id: 2,
      src: '/temp-images/carousel-1.jpg',
      ctaHref: '/projets/biodiversity',
    },
    {
      id: 3,
      src: '/temp-images/carousel-1.jpg',
      ctaHref: '/projets/greenenergy',
    },
    {
      id: 4,
      src: '/temp-images/carousel-1.jpg',
      ctaHref: '/projets/mountainguard',
    },
  ];

  const results = [
    {
      id: 'realizedProjects',
      number: 130,
      linkTarget: '/soutenir',
    },
    {
      id: 'activeVolunteers',
      number: 866,
      linkTarget: '/benevoles',
    },
    {
      id: 'partnersOrganizations',
      number: 1320,
      linkTarget: '/partenaires',
    },
  ];

  const news = [
    {
      title: 'Nouvelle technologie révolutionnaire dans le domaine de la data',
      tag: 'Innovation',
      image: '/images/bg-paper.jpg',
      link: '/news/technologie-revolutionnaire',
      date: '15 DÉC 2024',
    },
  ];
  
  const talks = [
    {
      author: 'Sophie Bernard',
      talk: 'Méthodes de collecte de données éthiques',
      image: '/images/marty-1.svg',
      ctaText: 'En savoir plus',
      ctaLink: '/methodes-collecte',
    },
    {
      author: 'Pierre Dubois',
      talk: 'Comment optimiser la gestion des bénévoles grâce à l\'analyse prédictive et l\'intelligence artificielle',
      image: '/images/marty-2.svg',
      ctaText: 'Découvrir',
      ctaLink: '/optimisation-benevoles',
    },
    {
      author: 'A. L.',
      talk: 'Introduction à la visualisation de données',
      image: '/images/marty-3.svg',
    },
  ];

  return (
    <>
      <div className="container mt-lg mb-sm">
        <Title level={2} variant="medium">
          {t('carousel.title')}
        </Title>
      </div>
      <ImagesCarousel className="mb-lg" images={carouselImages.map(image => ({
          ...image,
          title: t(`carousel.${image.id}.title`),
          alt: t(`carousel.${image.id}.alt`),
          description: t(`carousel.${image.id}.description`),
          ctaText: t(`carousel.${image.id}.ctaText`),
        }))} />

      <TalksBlock
        title={t('talks.title')}
        talks={talks}
      />

      <ResultsCard
        title={t('results.title')}
        className="my-lg"
        results={results.map(result => ({
          ...result,
          text: t(`results.${result.id}.title`),
          linkLabel: t(`results.${result.id}.linkLabel`),
        }))}
      />

      <NewsSmallBlock
        title={t('news.title')}
        blocks={news}
        className='my-lg'
      />
    </>
  );
}
