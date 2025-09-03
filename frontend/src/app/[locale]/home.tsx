'use client';

import { useTranslations } from 'next-intl';
import { ThematicsBlock, ImagesCarousel, ResultsCard, NewsletterBlock, NewsSmallBlock, TalksBlock, Title, ThematicsCardProps, TitleProps, HeroBlock, HeroBlockProps } from '@/components';
import client from '@/lib/strapi-client';

export default async function Homepage() {
  const t = useTranslations('home');

  const { data } = await client.GET('/home-page', {
    params: {
      query: {
        populate: {
          hero: {
            populate: "*"
          },
          results: {
            populate: "*"
          }
        }
      }
    }
  });

  console.log(JSON.stringify(data, null, 2))

  const heroData = data?.data?.hero as {
    title: string;
    subtitle?: string;
    image: string;
    talk: string;
  };
  const hero = {
    image: heroData.image.url,
    title: {
      level: 1 as TitleProps['level'],
      variant: "big" as TitleProps['variant'],
      children: heroData.title,
      colors: 'text-white bg-building',
      className: "drop-shadow-3 drop-shadow-black before:-z-1",
      rotation: -3.47,
    },
    subtitle: {
      level: 2 as TitleProps['level'],
      variant: "medium" as TitleProps['variant'],
      children: heroData.subtitle,
      colors: 'text-black bg-white',
      className: "drop-shadow-1 drop-shadow-black before:-z-1",
      rotation: -3.47,
    },
    talk: heroData.talk,
  }

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

  const resultData = data?.data.results
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

  return (
    <>
      <HeroBlock className='mt-lg'
        {...hero}
        title={{ ...hero.title, children: t('hero.title') }}
        subtitle={{ ...hero.subtitle, children: t('hero.subtitle') }}
      />
      <div className="container mt-lg mb-sm">
        <Title level={2} variant="medium">
          {data?.data.project_carousel_title}
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
        title={data?.data.press_releases_section_title}
        talks={talks}
      />
      <ThematicsBlock
        title={data?.data.thematics_section_title}
        thematics={thematics}
        className="my-lg"
      />
      <ResultsCard
        title={data?.data.results_section_title}
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

      <NewsletterBlock />
    </>
  );
}
