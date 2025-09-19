'use client';

import {
  CtaWithImage,
  InformationsBlock,
  ThematicsBlock,
  Title,
} from '@/components';
import ProjectListBlock from '@/components/organisms/ProjectListBlock/ProjectListBlock';
import client from '@/lib/strapi-client';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

function transformThematicsData(thematics: any) {
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
    talk: thematic.description,
    talkOffset: 10,
    image: thematic.thumbnail.url,
    imageWidth: 251,
    imageHeight: 318,
    ctaText: 'Voir les projets',
    ctaLink: '/projets',
  }));
}

function transformInformations(informations: any) {
  return informations.map(information => ({
    title: information.title,
    text: information.content.map(content => ({
      info: content.text,
      ...(content.link ? { ctaLink: content.link } : {}),
    })),
  }));
}

function transformFilters(thematics: any, seasons: any) {
  return {
    ...thematics.map(thematic => ({
      filterName: thematic.name,
      filterValue: thematic.short_id,
      thematic: thematic.short_id,
    })),
    ...seasons.map(season => ({
      filterName: season.title,
      filterValue: season.short_id,
    })),
  };
}

function transformProjects(projects: any) {
  return projects.map((project: any) => ({
    project: project.title,
    association: project.related_partners[0].name,
    description: project.short_description,
    thematics: project.thematics.map((thematic) => thematic.short_id),
    image: project.thumbnail.url,
    date: new Date(project.start_date),
    tags: project.seasons.map((season) => season.short_id)['saison2025'],
    link: `projects/${project.slug}`,
  }));
}

export default function ProjectsPage() {
  const t = useTranslations('projects');
  const [thematics, setThematics] = useState([]);
  const [informations, setInformations] = useState([]);
  const [filters, setFilters] = useState([]);
  const [projects, setProjects] = useState([]);
  const [params, setParams] = useState<any>({});

  useEffect(() => {
    const fetchThematicPageData = async () => {
      const projectListPageData = await client.GET('/projects-list', {
        params: {
          query: {
            populate: {
              introduction_cta: {
                populate: '*',
              },
              thematics: {
                populate: '*',
              },
              informations: {
                populate: '*',
              },
              seasons: {
                populate: '*',
              },
              projects: {
                populate: '*',
              },
            },
          },
        },
      });
      const data = projectListPageData.data!.data!;
      setThematics(transformThematicsData(data.thematics));
      setInformations(transformInformations(data.informations));
      setFilters(transformFilters(data.thematics, data.seasons));
      setProjects(transformProjects(data.projects));
      setParams({
        introduction: data.introduction,
        introductionCta: { ...data.introduction_cta },
      });
    };
    fetchThematicPageData();
  });

  return (
    <>
      <div className="my-lg container flex flex-col md:flex-row">
        <div className="md:flex-1 md:flex justify-end">
          <Title className="mb-md max-w-4xl content-center" variant="medium">
            {params.introduction}
          </Title>

          <CtaWithImage
            title={{
              children: params.introduction_cta.title,
              rotation: -4,
            }}
            content={{
              text: params.introduction_cta.content,
              rotation: 1.5,
              className: 'sm:left-6',
            }}
            image={params.introduction_cta.image}
            imageClassName="object-fill"
            className="md:flex-1"
            contentClassName="relative md:top-24"
            cta={{
              text: params.introduction_cta.cta.text,
              link: params.introduction_cta.cta.link,
              rotation: 0.7,
              className: 'relative sm:left-48 -top-2',
            }}
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
