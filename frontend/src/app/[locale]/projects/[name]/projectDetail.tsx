'use client';

import { MembersBlock, NewsSmallBlock, Title } from '@/components';
import { IMembers } from '@/lib/types';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function ProjectDetailPage() {
  const t = useTranslations('projectDetail');
  const { name } = useParams()

  const news = [
    {
      title: 'Nouvelle technologie révolutionnaire dans le domaine de la data',
      tag: 'Innovation',
      image: '/images/bg-paper.jpg',
      link: '/news/technologie-revolutionnaire',
      date: '15 DÉC 2024',
    },
    {
      title: 'Nouvelle technologie révolutionnaire dans le domaine de la data',
      tag: 'Innovation',
      image: '/images/bg-paper.jpg',
      link: '/news/technologie-revolutionnaire',
      date: '15 DÉC 2024',
    },
  ];

  const members: IMembers[] = [
    {
      title: 'Équipe de direction',
      members: [
        {
          name: 'Marie Dubois',
          role: 'Directrice Générale',
          image: '/images/pages/carte-benevoles.png',
        },
        {
          name: 'Thomas Martin',
          role: 'Directeur Technique',
          image: '/images/pages/carte-benevoles.png',
        },
        {
          name: 'Sophie Bernard',
          role: 'Directrice des Opérations',
          image: '/images/pages/carte-benevoles.png',
        },
        {
          name: 'Marie Dubois',
          role: 'Directrice Générale',
          image: '/images/pages/carte-benevoles.png',
        },
        {
          name: 'Thomas Martin',
          role: 'Directeur Technique',
          image: '/images/pages/carte-benevoles.png',
        },
        {
          name: 'Sophie Bernard',
          role: 'Directrice des Opérations',
          image: '/images/pages/carte-benevoles.png',
        },
      ],
    },
  ];



  return (
    <>

      <div className="my-lg container flex flex-col md:flex-row">
        <div className="md:flex-1 md:flex justify-start">
          <Title className="mb-md max-w-4xl content-center" variant="medium">
            {name}
          </Title>
        </div>
      </div>

      <NewsSmallBlock
        title={t('news.title')}
        blocks={news}
        className='my-lg'
      />

      <MembersBlock
        title={t('members.title')}
        categories={members}
        className="my-lg"
      />


    </>
  );
}
