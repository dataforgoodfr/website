'use client';

import { useTranslations } from 'next-intl';
import { BaseCardsBlock, LargeTextImage, NewsletterBlock, Title } from '@/components';

export default function AboutPage() {
  const t = useTranslations('positions');

  const press = [
    {
      title: 'Le Parisien',
      tags: ['Presse'],
      image: '/images/press/le-parisien.jpg',
      link: '/press/le-parisien',
      subInfos: ['2024', 'En cours'],
    },
    {
      title: 'Le Monde',
      tags: ['Presse'],
      image: '/images/press/le-monde.jpg',
      link: '/press/le-monde',
      subInfos: ['2024', 'En cours'],
    },
    {
      title: 'Le Figaro',
      tags: ['Presse'],
      image: '/images/press/le-figaro.jpg',
      link: '/press/le-figaro',
      subInfos: ['2024', 'En cours'],
    },
  ];
  const resources = [
    {
      title: 'Médiacoop',
      tags: ['Ressources'],
      image: '/images/ressources/nos-ressources.jpg',
      link: '/ressources/nos-ressources',
      subInfos: ['2024', 'En cours'],
    },
    {
      title: 'Climinfo',
      tags: ['Ressources'],
      image: '/images/ressources/nos-ressources.jpg',
      link: '/ressources/nos-ressources',
      subInfos: ['2024', 'En cours'],
    },
  ];

  const citation = {
    text: '“En intégrant la saison 12 de D4G, j’ai pu aider Marthe et Bloom à analyser les trajectoires des bateaux de pêche. J’ai découvert les enjeux de la pêche industrielle mais surtout une communauté de bénévoles motivés et une équipe D4G passionnée et toujours disponible.”',
    author: 'Cedric Villani',
    authorImage: '/images/pages/carte-benevoles.png',
  };


  return (
    <>
    <div className="flex justify-center items-center h-screen">1</div>
    <div className="flex justify-center items-center h-screen">2</div>
    <div className="flex justify-center items-center h-screen">3</div>
    <div className="flex justify-center items-center h-screen">4</div>
    <div className="flex justify-center items-center h-screen">5</div>
      <div className="container my-lg">
        <Title className="mb-md max-w-5xl" variant="medium">
          {t('title')}
        </Title>
      </div>

      <LargeTextImage
        image="/images/pages/carte-benevoles.png"
        citation={citation.text}
        citationAuthor={citation.author}
        citationAuthorImage={citation.authorImage}
        background="purple"
        className="my-lg"
      />

      <BaseCardsBlock
        title={t('press')}
        blocks={press}
        className="my-lg"
        />
      <BaseCardsBlock
        title={t('resources')}
        blocks={resources}
        className="my-lg"
      />

      <NewsletterBlock />
    </>
  );
}
