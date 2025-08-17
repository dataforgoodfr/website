'use client';

import { useTranslations } from 'next-intl';
import { ResultsCard, NewsSmallBlock } from '@/components';

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

  const news = [
    {
      title: 'Nouvelle technologie révolutionnaire dans le domaine de la data',
      tag: 'Innovation',
      image: '/images/bg-paper.jpg',
      link: '/news/technologie-revolutionnaire',
      date: '15 DÉC 2024',
    },
  ];

  return (
    <>
      <ResultsCard
        title={t('results.title')}
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
