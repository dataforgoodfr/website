'use client';

import {
  CtaWithImage,
  InformationsBlock,
  ThematicsBlock,
  Title,
} from '@/components';
import ProjectListBlock from '@/components/organisms/ProjectListBlock/ProjectListBlock';
import { useTranslations } from 'next-intl';
import { ProjectListPageData } from './page';

function transformThematicsData(thematics: ProjectListPageData["thematics"]) {
  return thematics.map(thematic => ({
    title: {
      children: thematic.name,
      props: {
        colors: `text-black bg-${thematic.color}`,
        className: 'drop-shadow-3 drop-shadow-black before:-z-1',
        rotation: -2.58,
      },
    },
    id: thematic.id.toString(),
    talk: thematic.short_description,
    talkOffset: 10,
    image: thematic.thumbnail.url,
    imageWidth: 251,
    imageHeight: 318,
    ctaText: thematic.cta_text,
    ctaLink: thematic.cta_link,
  }));
}

function transformInformations(informations: ProjectListPageData["informations"]) {
  return informations.map(information => ({
    title: information.title,
    text: information.content.map(content => ({
      info: content.text,
      ...(content.link ? { ctaLink: content.link } : {}),
    })),
  }));
}

function transformFilters(thematics: ProjectListPageData["thematics"], seasons: ProjectListPageData["seasons"], categories: ProjectListPageData["categories"]) {
  return [
    ...thematics?.map(thematic => ({
      filterName: thematic.name,
      filterValue: thematic.short_id,
      filterType: 'thematic',
      thematic: thematic.short_id,
    })) ?? [],
    ...seasons?.map(season => ({
      filterName: season.title,
      filterValue: season.title,
      filterType: 'season',
    })) ?? [],
    ...categories?.map(category => ({
      filterName: category,
      filterValue: category,
      filterType: 'category'
    })) ?? [],
  ];
}

function transformProjects(projects: ProjectListPageData["projects"]) {
  return projects?.map((project: ProjectListPageData["projects"][0]) => ({
    project: project.title,
    association:
      (project.related_partners &&
        project.related_partners.length > 0 &&
        project.related_partners[0].name) ||
      '',
    description: project.short_description,
    thematics: project.thematics.map(thematic => thematic.short_id),
    image: project.thumbnail?.url || '',
    date: new Date(project.start_date),
    seasons: project.seasons.map(season => season.title),
    categories: project.category,
    link: `projects/${project.slug}`,
  }));
}

type ProjectListProps = {
  data: ProjectListPageData;
};

export default function ProjectsPage({ data }: ProjectListProps) {
  const t = useTranslations('projects');
  const thematics = transformThematicsData(data.thematics);
  const informations = transformInformations(data.informations);
  const filters = transformFilters(data.thematics, data.seasons, data.categories);
  const projects = transformProjects(data.projects);

  return (
    <>
      <div className="my-lg container flex flex-col lg:flex-row">
        <Title className="mb-md max-w-4xl content-center flex-1" variant="medium">
          {data.introduction}
        </Title>

        <CtaWithImage
          title={{
            children: data.introduction_cta?.title,
            rotation: -4,
          }}
          content={{
            text: data.introduction_cta?.content ?? '',
            rotation: 1.5,
            className: 'sm:left-6',
          }}
          image={data.introduction_cta?.image.url ?? ''}
          imageClassName="object-fill"
          className="md:w-[400px]"
          contentClassName="relative md:top-24"
          cta={{
            text: data.introduction_cta?.cta.text,
            link: data.introduction_cta?.cta.link,
            rotation: 0.7,
            className: 'relative sm:left-48 -top-2',
          }}
        />
      </div>

      <ThematicsBlock
        title={t('thematics.title')}
        subtitle={t('thematics.subtitle')}
        thematics={thematics ?? []}
        className="my-lg"
      />

      <InformationsBlock
        title="Informations"
        informations={informations ?? []}
        className="my-lg"
      />

      <ProjectListBlock
        title="Tous les projets"
        titleLevel={2}
        filters={filters}
        projects={projects}
        joinCta={{text: data.join_cta?.text, link: data.join_cta?.link}}
        pageSize={16}
        className="my-lg bg-black mx-auto w-full"
      />
    </>
  );
}
