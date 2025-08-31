'use client';

import { InformationsBlock, ThematicsBlock, ThematicsCardProps, Title } from '@/components';
import { useTranslations } from 'next-intl';

export default function ProjectsPage() {
  const t = useTranslations('projects');

  const thematics: ThematicsCardProps[] = [
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

  const informations = [
  {
    title: 'Collecter des données au service du plaidoyer',
    text: [
      {
        'info': 'objectiver des faits, mettre en lumière des chiffres pour poser un diagnostiques rigoureux au service du plaidoyer. Par exemple,'
      },
      { 'info': 'en quantifiant la désinformation climatique', 'ctaLink': '/home' },
      { 'info': "dans les médias avec Quota Climat." }
    ]
  },
  {
    title: 'Construire des outils internes',
    text: [
      {
        'info': 'pour permettre aux associations d’être encore plus pertinentes dans leurs actions. Par exemple, en créant un'
      },
      { 'info': 'outil de suivi des plus gros bateaux de pêche', 'ctaLink': '/test' },
      { 'info': "industrielle avec Bloom." }
    ]
  },
  {
    title: 'Concevoir des plateformes de mobilisation citoyenne',
    text: [
      {
        'info': 'des plateformes qui racontent des histoires et qui embarquent la société civile pour bâtir un monde plus juste. Par exemple, en imaginant une plateforme pour'
      },
      { 'info': 'raconter l\'histoire de la surpêche du saumon', 'ctaLink': '/seastemik' },
      { 'info': "avec Seastemik." }
    ]
  },
];

  return (
    <>
      <div className="container my-lg">
        <Title className="mb-md max-w-5xl" variant="medium">
          {t('title')}
        </Title>
      </div>

      <ThematicsBlock
        title={t('thematics.title')}
        titleLevel={1}
        subtitle={t('thematics.subtitle')}
        subtitleLevel={2}
        thematics={thematics}
        className='my-lg'
      />

      <InformationsBlock
        title="Informations"
        titleLevel={1}
        informations={informations}
        className='my-lg'
      />

    </>
  );
}
