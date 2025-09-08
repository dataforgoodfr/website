'use client';

import { useTranslations } from 'next-intl';
import { EditoCard, Kpis, NewsletterBlock, PartnersBlock, ThematicHeroBlock, ThumbnailProjectsBlock } from '@/components';

export default function SocialPage() {
  const t = useTranslations('social');

  const kpis = [
    {
      id: '1',
      title: '100',
      description: 'Projets réalisés avec succès',
    },
    {
      id: '2',
      title: '200',
      description: 'Projets réalisés avec succès',
    },
    {
      id: '3',
      title: '300',
      description: 'Projets réalisés avec succès',
    },
  ];

  const edito1 = {
    content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>,
    imageText: 'Texte sur image',
    image: '/images/pages/image-climat-biodiversite.png',
  };

  const edito2 = {
    content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>,
    imageText: 'Texte sur image',
    image: '/images/pages/image-climat-biodiversite.png',
  };

  const projects = [
    {
      id: '1',
      name: {
        children: 'Projet 1',
      },
      link: '/projet-1',
      description: 'Description du projet 1',
      baseline: 'Baseline du projet 1',
      images: ['/images/pages/image-climat-biodiversite.png', '/images/pages/image-climat-biodiversite.png'],
      company: 'Entreprise 1',
      kpis: [
        {
          name: 'KP 1',
          description: 'Description du KP 1',
        },
      ],
    },
    {
      id: '2',
      name: {
        children: 'Projet 2',
      },
      link: '/projet-2',
      description: 'Description du projet 2',
      baseline: 'Baseline du projet 2',
      images: ['/images/pages/image-climat-biodiversite.png', '/images/pages/image-climat-biodiversite.png'],
      company: 'Entreprise 2',
      kpis: [
        {
          name: 'KP 1',
          description: 'Description du KP 1',
        },
      ],
    },

    {
      id: '3',
      name: {
        children: 'Projet 3',
      },
      link: '/projet-3',
      description: 'Description du projet 3',
      baseline: 'Baseline du projet 3',
      images: ['/images/pages/image-climat-biodiversite.png', '/images/pages/image-climat-biodiversite.png'],
      company: 'Entreprise 3',
      kpis: [
        {
          name: 'KP 1',
          description: 'Description du KP 1',
        },
      ],
    },
  ];

  const partners = [

    {
      name: 'Partenaire 1',
      image: '/images/partners/partenaire-1.png',
      link: '/partenaire-1',
    },
    {
      name: 'Partenaire 2',
      image: '/images/partners/partenaire-2.png',
      link: '/partenaire-2',
    },
    {
      name: 'Partenaire 3',
      image: '/images/partners/partenaire-3.png',
      link: '/partenaire-3',
    },
  ];

  return (
    <>
      <ThematicHeroBlock
        title={t('title')}
        image="/images/pages/image-climat-biodiversite.png"
        className="my-lg"
      />

      <Kpis kpis={kpis} className="my-lg" />

      <EditoCard
        content={edito1.content}
        imageText={edito1.imageText}
        image={edito1.image}
        imagePosition="left"
        imageTextRotation={-6}
        className="my-lg container"
      />

      <EditoCard
        content={edito2.content}
        imageText={edito2.imageText}
        image={edito2.image}
        className="my-lg container"
      />

      <ThumbnailProjectsBlock
        title={t('projectsTitle')}
        projects={projects}
        className="my-lg"
      />

      <PartnersBlock
        title={t('partners')}
        partners={partners}
        className="my-lg"
      />

      <NewsletterBlock />
    </>
  );
}
