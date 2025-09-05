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
          },
          featured_projects: {
            fields: ["title", "short_description"],
            populate: "thumbnail"
          },
          thematics: {
            populate: "*"
          },
          events: {
            populate: "*"
          },
          articles: {
            fields: ["title", "tags", "slug", "published_date", "description"],
            populate: "*"
          }
        }
      }
    }
  });

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

  const projectCarousel = data?.data?.featured_projects

  const results = data?.data.results.map((result) => ({
    id: result.id,
    number: result.stat,
    text: result.description,
    linkTarget: `/projects/${result.id}`,
  }));

  const events = data?.data.events.map((event) => ({
    id: event.id,
    title: event.name,
    date: new Date(event.date).toLocaleString(undefined, {  month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric' }),
    image: event.image.url,
    tag: "Evenement",
    link: event.link,
  }));

  const articles = data?.data.articles.map((article) => ({
    id: article.id,
    author: article.author ?? 'Data For Good',
    talk: article.title,
    image: article.thumbnail.url,
    ctaText: 'Lire l\'article',
    ctaLink: `/articles/${article.slug}`,
  }));

  const thematics = data?.data?.thematics?.map(thematic => ({
    title: {
      children: thematic.name,
      props: {
        colors: 'text-black bg-alive',
        className: "drop-shadow-3 drop-shadow-black before:-z-1",
        rotation: -2.58,
      }
    },
    id: thematic.id,
    talk: thematic.description,
    talkOffset: 10,
    image: thematic.thumbnail.url,
    imageWidth: 251,
    imageHeight: 318,
    ctaText: "Voir les projets",
    ctaLink: "/projets",
  }))

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
      <ImagesCarousel className="mb-lg" images={projectCarousel!.map(project => ({
        src: project.thumbnail.url,
        title: project.title,
        alt: project.title,
        description: project.short_description,
        ctaText: t('carousel.ctaText'),
      }))} />

      <TalksBlock
        title={data?.data?.articles_section_title}
        talks={articles}
      />
      <ThematicsBlock
        title={data?.data.thematics_section_title}
        thematics={thematics}
        className="my-lg"
      />
      <ResultsCard
        title={data?.data.results_section_title}
        className="my-lg"
        results={results}
      />

      <NewsSmallBlock
        title={t('news.title')}
        blocks={events}
        className='my-lg'
      />

      <NewsletterBlock />
    </>
  );
}
