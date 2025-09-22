'use client';

import { useTranslations } from 'next-intl';
import { Button, EditoCard, LargeTextImage, NewsletterBlock, TalksBlock, ThematicsBlock, Title } from '@/components';

export default function DonationsPage() {
  const t = useTranslations('donations');

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
  ];

  const thematics = [
    {
      title: {
        children: "Climat et biodiversité",
        props: {
          colors: 'text-black bg-alive',
          className: "drop-shadow-3 drop-shadow-black before:-z-1",
          rotation: -2.58,
        }
      },
      id: 'climate',
      talk: 'Lutter contre la surpêche et l\'expansion des énergies fossiles, protéger les forêts des coupes rases et des incendies, rendre transparent l\'impact environnemental de l\'alimentation ou de la souffrance animale.',
      image: '/images/thematics/thematics-climate.svg',
      imageWidth: 301,
      imageHeight: 401,
      ctaText: "Voir les projets",
      ctaLink: "/projets",
    },
    {
      title: {
        children: "justice sociale",
        props: {
          colors: 'text-black bg-resistance',
          className: "drop-shadow-3 drop-shadow-black before:-z-1",
          rotation: -2.58,
        }
      },
      id: 'social',
      talk: 'Lutter contre la surpêche et l\'expansion des énergies fossiles, protéger les forêts des coupes rases et des incendies, rendre transparent l\'impact environnemental de l\'alimentation ou de la souffrance animale.',
      talkOffset: 10,
      image: '/images/thematics/thematics-social.png',
      imageWidth: 264,
      imageHeight: 332,
      ctaText: "Voir les projets",
      ctaLink: "/projets",
    },
    {
      title: {
        children: "Démocratie",
        props: {
          colors: 'text-black bg-blue',
          className: "drop-shadow-3 drop-shadow-black before:-z-1",
          rotation: -2.58,
        }
      },
      id: 'democracy',
      talk: 'Lutter contre la surpêche et l\'expansion des énergies fossiles, protéger les forêts des coupes rases et des incendies, rendre transparent l\'impact environnemental de l\'alimentation ou de la souffrance animale.',
      talkOffset: 10,
      image: '/images/thematics/thematics-democracy.svg',
      imageWidth: 251,
      imageHeight: 318,
      ctaText: "Voir les projets",
      ctaLink: "/projets",
    },
  ]

  return (
    <>
      <LargeTextImage
        title={t('title')}
        titleLevel={1}
        content={t('content')}
        image="/images/pages/donations/donations.jpg"
        background="purple"
      />

      <EditoCard className="mt-lg">
        <p>Nous sommes 7000 citoyennes et citoyens et nous voulons construire un contre pouvoir tech citoyen.</p> 
        <p>...</p> 
      </EditoCard>

      <div className="bg-violet-light py-lg">
        <TalksBlock
          title={t('talksTitle')}
          talks={talks}
        />
      </div>

      <div className="my-lg">
        <ThematicsBlock
          title={t('thematicsTitle')}
          thematics={thematics}
        />

        <div className="flex justify-center mt-sm">
          <Button href="/" color="violet" hasArrow>{t('cta')}</Button>
        </div>
      </div>

      <NewsletterBlock />
    </>
  );
}
