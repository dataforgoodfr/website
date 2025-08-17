'use client';

import { useTranslations } from 'next-intl';
import { ResultsCard, TalksBlock } from '@/components';

export default function Homepage() {
  const t = useTranslations('home');

  /* const { data, error } = await client.GET('/home-page');
  if (error) {
    return <div>Error</div>;
  } */

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
      <TalksBlock
        title={t('talks.title')}
        talks={talks}
      />
      <ResultsCard
        title={t('results.title')}
        results={results.map(result => ({
          ...result,
          text: t(`results.${result.id}.title`),
          linkLabel: t(`results.${result.id}.linkLabel`),
        }))}
      />
    </>
  );
}
