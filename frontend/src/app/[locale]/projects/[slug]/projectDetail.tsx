'use client';

import { Banner, MembersBlock, NewsSmallBlock, ProjectCarousel, ProjectImpactBlock, ProjectPresentation, ProjectProcesses, Title } from '@/components';
import { IMembers, IProjectImpacts } from '@/lib/types';
import { useTranslations } from 'next-intl';
import { type ProjectPageData } from './page';

type ProjectPageProps = {
  project: ProjectPageData;
};

function getProjectTags(project: ProjectPageData) {
  return [
    ...(project.seasons?.map(season => ({
      "label": season.title,
      "type": "temporal" as 'temporal' | 'subject'
    })) || []),
    {
      "label": `${project.start_date ? new Date(project.start_date).toLocaleDateString() : 'N/A'} / ${project.end_date ? new Date(project.end_date).toLocaleDateString() : 'N/A'}`,
      "type": "temporal" as 'temporal' | 'subject'
    }, {
      "label": project.state,
      "type": "subject" as 'temporal' | 'subject'
    },
    ...(project.category?.map(cat => ({
      "label": cat,
      "type": "subject" as 'temporal' | 'subject'
    })) || [])];
}

function getProjectData(project: ProjectPageData) {
  const mainPartner = project.related_partners?.[0]
  const projectTags = getProjectTags(project);

  return {
    name: project.title,
    summary: project.short_description,
    description: [project.long_description],
    tags: projectTags,
    association: mainPartner ? {
      logo: mainPartner.logo?.url,
      altLogo: mainPartner.logo?.alternativeText,
      summary: mainPartner.description,
    } : undefined
  };
}

function getProjectImpacts(project: ProjectPageData): IProjectImpacts[] {
  return Array.from({ length: 3 }, (_, i) => ({
    value: project[`value_${i + 1}`],
    text: project[`explanation_${i + 1}`]
  })).filter(Boolean);
}

function getSlides(project: ProjectPageData): IProjectSlides[] {
  return project.illustration_images?.map((image, index) => ({
    id: index + 1,
    description: image.caption,
    image: image.url,
    altImage: image.alternativeText
  })) || [];
}

function getDeliverable(project: ProjectPageData) {
  return {
    processes: [{
      name: "",
      description: project.delivrable?.split("\n") || []
    }]
  };
}

function getNews(project: ProjectPageData) {
  return project.press_releases?.map((pressRelease) => ({
    title: pressRelease.title,
    tag: pressRelease.tags ?? [],
    image: pressRelease.thumbnail?.url,
    link: pressRelease.article_link,
    date: new Date(pressRelease.published_date || '').toLocaleString(undefined, { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric' }),
  })) || [];
}

function getVolunteers(project: ProjectPageData) {
  return [{
    title: "Équipe",
    members: project.volunteers?.map(volunteer => ({
      id: volunteer.id,
      name: volunteer.name,
      role: volunteer.role,
      image: volunteer.avatar?.url,
    })) || [],
  }];
}

export default function ProjectDetailPage({ project }: ProjectPageProps) {
  const t = useTranslations('projectDetail');

  const projectData = getProjectData(project);
  const presentationContent = [
    project.context
  ]
  const impacts: IProjectImpacts[] = getProjectImpacts(project);
  const slides = getSlides(project);
  const delivrables = getDeliverable(project);
  const news = getNews(project)
  const volunteers: IMembers[] = getVolunteers(project);

  return (
    <>
      <Banner
        image={project.thumbnail?.url}
        altImage='Project banner'
        className="mb-lg "
      />

      <ProjectPresentation
        {...projectData}
        className='my-lg'
      />

      <Banner
        image={project.thumbnail?.url}
        altImage='Project banner'
        content={presentationContent}
        className="my-lg "
      />

      {!impacts.every((impact) => !!!impact.value) && <ProjectImpactBlock
        title={t('impact.title')}
        impacts={impacts}
        className='my-lg'
      />}

      {slides.length > 0 && <ProjectCarousel
        title={t('carousel.title')}
        slides={slides}
      />}

      <ProjectProcesses
        {...delivrables}
        title={t('deliverables.title')
        }
      />

      {project.news?.length && <NewsSmallBlock
        title={t('news.title')}
        blocks={news}
        className='my-lg'
      />}

      {project.volunteers?.length && <MembersBlock
        title={t('members.title')}
        categories={volunteers}
        className="my-lg"
      />}


    </>
  );
}
