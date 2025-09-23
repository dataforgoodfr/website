'use client';

import { useTranslations } from 'next-intl';
import { ThematicsBlock, ImagesCarousel, ResultsCard, NewsletterBlock, NewsSmallBlock, TalksBlock, Title, TitleProps, HeroBlock } from '@/components';
import { HomepageData } from './page';


type HomepageProps = {
  data: HomepageData;
}

export default function Homepage({ data }: HomepageProps) {
  const t = useTranslations('home');

  const heroData = {
    image: data.hero?.image?.url,
    title: {
      level: 1 as TitleProps['level'],
      variant: "big" as TitleProps['variant'],
      children: data.hero?.title || '',
      colors: 'text-white bg-building',
      className: "drop-shadow-3 drop-shadow-black before:-z-1",
      rotation: -3.47,
    },
    subtitle: {
      level: 2 as TitleProps['level'],
      variant: "medium" as TitleProps['variant'],
      children: data.hero?.subtitle || '',
      colors: 'text-black bg-white',
      className: "drop-shadow-1 drop-shadow-black before:-z-1",
      rotation: -3.47,
    },
    talk: data.hero?.talk || '',
  };

  const projects = data.featured_projects?.map(project => ({
    id: (project.id ?? "" ).toString(),
    src: project.thumbnail?.url || '',
    title: project.title || '',
    alt: project.title || '',
    description: project.short_description || '',
    ctaText: t('projects.ctaText'),
  })).filter(project => project.src && project.title) ?? [];

  const results = data.results?.map((result) => ({
    id: result.id?.toString() || '',
    number: parseInt(result.stat || '0'),
    text: result.description,
    linkTarget: `/projects/${result.id}`,
    linkLabel: t('results.linkLabel'),
  })) ?? [];

  const events = data.events?.map((event) => ({
    id: event.id,
    title: event.name || '',
    date: new Date(event.date || '').toLocaleString(undefined, { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric' }),
    image: event.image?.url || '',
    tag: t('events.tag'),
    link: event.link || '',
  })).filter(event => event.title && event.link) ?? [];

  const resources = data.resources?.map((resource) => {
    const isBlog = !!resource.blog;

    return {
      id: resource.id,
      type: isBlog ? 'article' : 'press_release',
      author: isBlog ? ( (resource.blog?.author as { name: string })?.name || t('resources.defaultAuthor')) : (resource.press_release as { media_name: string })?.media_name || '',
      talk: isBlog ? (resource.blog as { title: string })?.title || '' : (resource.press_release as { title: string })?.title || '',
      image: isBlog ? resource.blog?.thumbnail?.url || '' : "/images/dataforgood.svg",
      ctaText: isBlog ? t('resources.articleCtaText') : t('resources.pressCtaText'),
      ctaLink: isBlog ? `/articles/${resource.blog?.slug || ''}` : (resource.press_release as { article_link: string })?.article_link || '',
    }
  }) ?? [];

  const thematics = data.thematics?.map(thematic => ({
    title: {
      children: thematic.name || '',
      props: {
        colors: `text-black bg-${thematic.color}`,
        className: "drop-shadow-3 drop-shadow-black before:-z-1",
        rotation: -2.58,
      }
    },
    id: thematic.id?.toString() || '',
    talk: thematic.description || '',
    talkOffset: 10,
    image: thematic.thumbnail?.url || '',
    imageWidth: 251,
    imageHeight: 318,
    ctaText: thematic.cta_text,
    ctaLink: thematic.cta_link,
  })).filter(thematic => thematic.talk) ?? [];

  return (
    <>
      <HeroBlock className='mt-lg'
        {...heroData}
        title={{ ...heroData.title, children: t('hero.title') }}
        subtitle={{ ...heroData.subtitle, children: t('hero.subtitle') }}
      />
      <div className="container mt-lg mb-sm">
        <Title level={2} variant="medium">
          {data.project_carousel_title!}
        </Title>
      </div>
      {projects.length > 0 && <ImagesCarousel className="mb-lg" images={projects} />}

      <TalksBlock
        title={data.resources_section_title!}
        talks={resources}
      />
      <ThematicsBlock
        title={data.thematics_section_title!}
        thematics={thematics.map(t => ({ ...t, id: t.id?.toString() || '' }))}
        className="my-lg"
      />
      <ResultsCard
        title={data.results_section_title!}
        className="my-lg"
        results={results.map(r => ({ ...r, linkLabel: t('results.linkLabel') }))}
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
