'use client';

import type { ThematicsCardProps } from '@/components';
import type { IFilter, IInformation, IProject } from '@/lib/types';
import type { ThematicValues } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { CtaWithImage, InformationsBlock, ThematicsBlock, Title } from '@/components';
import ProjectListBlock from '@/components/organisms/ProjectListBlock/ProjectListBlock';

export default function ProjectsPage() {
  const t = useTranslations('projects');
  const thematics: ThematicsCardProps[] = [
    {
      title: {
        children: 'Climat et biodiversité',
        props: {
          colors: 'text-black bg-alive',
          className: 'drop-shadow-3 drop-shadow-black before:-z-1',
          rotation: -2.58,
        },
      },
      id: 'climate',
      talk: 'Lutter contre la surpêche et l\'expansion des énergies fossiles, protéger les forêts des coupes rases et des incendies, rendre transparent l\'impact environnemental de l\'alimentation ou de la souffrance animale.',
      image: '/images/thematics/thematics-climate.svg',
      imageWidth: 301,
      imageHeight: 401,
      ctaText: 'Voir les projets',
      ctaLink: '/projets',
    },
    {
      title: {
        children: 'justice sociale',
        props: {
          colors: 'text-black bg-resistance',
          className: 'drop-shadow-3 drop-shadow-black before:-z-1',
          rotation: -2.58,
        },
      },
      id: 'social',
      talk: 'Lutter contre la surpêche et l\'expansion des énergies fossiles, protéger les forêts des coupes rases et des incendies, rendre transparent l\'impact environnemental de l\'alimentation ou de la souffrance animale.',
      talkOffset: 10,
      image: '/images/thematics/thematics-social.png',
      imageWidth: 264,
      imageHeight: 332,
      ctaText: 'Voir les projets',
      ctaLink: '/projets',
    },
    {
      title: {
        children: 'Démocratie',
        props: {
          colors: 'text-black bg-blue',
          className: 'drop-shadow-3 drop-shadow-black before:-z-1',
          rotation: -2.58,
        },
      },
      id: 'democracy',
      talk: 'Lutter contre la surpêche et l\'expansion des énergies fossiles, protéger les forêts des coupes rases et des incendies, rendre transparent l\'impact environnemental de l\'alimentation ou de la souffrance animale.',
      talkOffset: 10,
      image: '/images/thematics/thematics-democracy.svg',
      imageWidth: 251,
      imageHeight: 318,
      ctaText: 'Voir les projets',
      ctaLink: '/projets',
    },
  ];

  const informations: IInformation[] = [
    {
      title: 'Collecter des données au service du plaidoyer',
      text: [
        {
          info: 'objectiver des faits, mettre en lumière des chiffres pour poser un diagnostiques rigoureux au service du plaidoyer. Par exemple,',
        },
        { info: 'en quantifiant la désinformation climatique', ctaLink: '/home' },
        { info: 'dans les médias avec Quota Climat.' },
      ],
    },
    {
      title: 'Construire des outils internes',
      text: [
        {
          info: 'pour permettre aux associations d’être encore plus pertinentes dans leurs actions. Par exemple, en créant un',
        },
        { info: 'outil de suivi des plus gros bateaux de pêche', ctaLink: '/test' },
        { info: 'industrielle avec Bloom.' },
      ],
    },
    {
      title: 'Concevoir des plateformes de mobilisation citoyenne',
      text: [
        {
          info: 'des plateformes qui racontent des histoires et qui embarquent la société civile pour bâtir un monde plus juste. Par exemple, en imaginant une plateforme pour',
        },
        { info: 'raconter l\'histoire de la surpêche du saumon', ctaLink: '/seastemik' },
        { info: 'avec Seastemik.' },
      ],
    },
  ];

  const filters: IFilter[] = [
    {
      filterName: 'Climat et biodiversité',
      filterValue: 'climate',
      thematic: 'climate' as ThematicValues,
    },
    {
      filterName: 'Justice sociale',
      filterValue: 'social',
      thematic: 'social' as ThematicValues,
    },
    {
      filterName: 'Démocratie',
      filterValue: 'democracy',
      thematic: 'democracy' as ThematicValues,
    },
    {
      filterName: 'Saison 2025',
      filterValue: 'saison2025',
    },
    {
      filterName: 'Saison 2024',
      filterValue: 'saison2024',
    },
  ];

  const projects: IProject[] = [
    {
      project: 'Bloom',
      association: 'Bloom association',
      description: 'Suivre les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche',
      thematics: ['climate', 'social', 'democracy'] as ThematicValues[],
      image: '/images/thematics/thematics-social.png',
      date: Date.now().toLocaleString(),
      tags: ['saison2025'],
      link: "projects/bloom"
    },
    {
      project: 'Bloom',
      association: 'Bloom association',
      description: 'Suivre les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche',
      thematics: ['climate', 'social', 'democracy'] as ThematicValues[],
      image: '/images/thematics/thematics-social.png',
      date: Date.now().toLocaleString(),
      tags: ["saison2025"],
      link: "projects/bloomies"
    },
    {
      project: 'Trawlwatch',
      association: 'Bloom association',
      description: 'Suivre les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche',
      thematics: ['democracy'] as ThematicValues[],
      image: '/images/thematics/thematics-social.png',
      date: Date.now().toLocaleString(),
      tags: ['saison2025'],
    },
    {
      project: 'Trawlwatch',
      association: 'Bloom association',
      description: 'Suivre les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche',
      thematics: ['climate', 'democracy'] as ThematicValues[],
      image: '/images/thematics/thematics-social.png',
      date: Date.now().toLocaleString(),
      tags: ['saison2025'],
    },
    {
      project: 'Trawlwatch',
      association: 'Bloom association',
      description: 'Suivre les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche',
      thematics: ['democracy'] as ThematicValues[],
      image: '/images/thematics/thematics-social.png',
      date: Date.now().toLocaleString(),
      tags: ['saison2024'],
    },
    {
      project: 'Trawlwatch',
      association: 'Bloom association',
      description: 'Suivre les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche',
      thematics: ['climate', 'democracy'] as ThematicValues[],
      image: '/images/thematics/thematics-social.png',
      date: Date.now().toLocaleString(),
      tags: ['saison2024'],
    },
    {
      project: 'Trawlwatch',
      association: 'Bloom association',
      description: 'Suivre les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche',
      thematics: ['democracy'] as ThematicValues[],
      image: '/images/thematics/thematics-social.png',
      date: Date.now().toLocaleString(),
      tags: ['saison2024'],
    },
    {
      project: 'Trawlwatch',
      association: 'Bloom association',
      description: 'Suivre les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche',
      thematics: ['climate', 'democracy'] as ThematicValues[],
      image: '/images/thematics/thematics-social.png',
      date: Date.now().toLocaleString(),
      tags: ['saison2025', 'saison2024'],
    },
    {
      project: 'Trawlwatch',
      association: 'Bloom association',
      description: 'Suivre les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche',
      thematics: ['democracy'] as ThematicValues[],
      image: '/images/thematics/thematics-social.png',
      date: Date.now().toLocaleString(),
      tags: ['saison2025', 'saison2024'],
    },
    {
      project: 'Trawlwatch',
      association: 'Bloom association',
      description: 'Suivre les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche',
      thematics: ['climate', 'democracy'] as ThematicValues[],
      image: '/images/thematics/thematics-social.png',
      date: Date.now().toLocaleString(),
      tags: ['saison2025', 'saison2024'],
    },
    {
      project: 'Trawlwatch',
      association: 'Bloom association',
      description: 'Suivre les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche',
      thematics: ['democracy'] as ThematicValues[],
      image: '/images/thematics/thematics-social.png',
      date: Date.now().toLocaleString(),
      tags: ['saison2025', 'saison2024'],
    },
    {
      project: 'Trawlwatch',
      association: 'Bloom association',
      description: 'Suivre les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche',
      thematics: ['climate', 'democracy'] as ThematicValues[],
      image: '/images/thematics/thematics-social.png',
      date: Date.now().toLocaleString(),
      tags: ['saison2025', 'saison2024'],
    },
  ];

  return (
    <>

      <div className="my-lg container flex flex-col md:flex-row">
        <div className="md:flex-1 md:flex justify-end">
          <Title className="mb-md max-w-4xl content-center" variant="medium">
            {t('title')}
          </Title>

          <CtaWithImage
            title={{
              children: t('presentation.title'),
              rotation: -4,
            }}
            content={{
              text: t('presentation.content'),
              rotation: 1.5,
              className: 'sm:left-6',
            }}
            image="/images/pages/image-projets.png"
            imageClassName="object-fill"
            className="md:flex-1"
            contentClassName="relative md:top-24"
            cta={
              { text: t('presentation.cta'), link: '/projects', rotation: 0.7, className: 'relative sm:left-48 -top-2' }
            }
          />
        </div>
      </div>

      <ThematicsBlock
        title={t('thematics.title')}
        titleLevel={1}
        subtitle={t('thematics.subtitle')}
        thematics={thematics}
        className="my-lg"
      />

      <InformationsBlock
        title="Informations"
        titleLevel={1}
        informations={informations}
        className="my-lg"
      />

      <ProjectListBlock
        title="Tous les projets"
        titleLevel={1}
        filters={filters}
        projects={projects}
        pageSize={16}
        className="my-lg bg-black mx-auto w-full"
      />

    </>
  );
}
