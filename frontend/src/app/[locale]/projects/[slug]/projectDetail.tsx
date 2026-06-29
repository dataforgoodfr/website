'use client';

import { Banner, BannerVideo, MembersBlock, NewsSmallBlock, PartnersBlock, ProjectCarousel, ProjectHeroBlock, ProjectImpactBlock, ProjectPresentation, ProjectProcesses } from '@/components';
import { IMembers, IProjectImpacts } from '@/lib/types';
import { useTranslations } from 'next-intl';
import { type ProjectPageData } from './page';
import { getPressReleaseLink } from '@/lib/utils';

type ProjectPageProps = {
  project: ProjectPageData;
};

function getProjectTags(project: ProjectPageData) {
  const getTagColor = (tag?: string) => {
      if(tag === "en cours") {
        return 'bg-resistance'
      } else if(tag === "terminé") {
        return 'bg-alive'
      } 
      return "bg-back-green"
    }

  return [
    ...(project.seasons?.map(season => ({
      "label": season.title,
      "type": "temporal" as 'temporal' | 'subject',
      "color": "bg-back-green" 
    })) || []),
    {
      "label": `${(project.start_date && project.end_date) ? `Du ${new Date(project.start_date).toLocaleDateString()} au ${new Date(project.end_date).toLocaleDateString()}` : (project.start_date ? `Depuis le ${new Date(project.start_date).toLocaleDateString()}` : (project.end_date ? `Terminé le ${new Date(project.end_date).toLocaleDateString()}` : 'N/A'))}`,
      "type": "temporal" as 'temporal' | 'subject',
      "color": "bg-back-green" 
    }, {
      "label": project.state,
      "type": "subject" as 'temporal' | 'subject',
      "color": getTagColor(project.state) 
    },
    ...((project.category as string[])?.map(cat => ({
      "label": cat,
      "type": "subject" as 'temporal' | 'subject',
      "color": "bg-back-green" 
    })) || [])];
}


function getProjectData(project: ProjectPageData) {
  const mainPartner = project.related_partners
  const projectTags = getProjectTags(project);

  return {
    description: [project.long_description],
    tags: projectTags,
    associations: (mainPartner ?? []).map((partner) => ({
      logo: partner.logo?.url,
      altLogo: partner.logo?.alternativeText,
      summary: partner.description,
      link: partner.website_link,
    })),
    thematics: project.thematics?.map((thematic) => ({name: thematic.name, color: thematic.color})) || []
  };
}

function getProjectImpacts(project: ProjectPageData): IProjectImpacts[] {
  return Array.from({ length: 3 }, (_, i) => ({
    value: project[`value_${i + 1}` as keyof ProjectPageData] as string,
    text: project[`explanation_${i + 1}` as keyof ProjectPageData] as string
  })).filter(Boolean);
}

function getSlides(project: ProjectPageData) {
  return project.illustration_images?.map((image, index) => ({
    id: index + 1,
    description: image.caption,
    image: image.url,
    altImage: image.alternativeText
  })) || [];
}

function getDeliverable(project: ProjectPageData) {
  return {
    github_link: project.github_link,
    website_link: project.website_link,
    description: project.delivrable
  };
}

function getNews(project: ProjectPageData) {
  return project.press_releases?.map((pressRelease) => ({
    title: pressRelease.title,
    tag: pressRelease.tags ?? [],
    image: pressRelease.thumbnail?.url,
    link: getPressReleaseLink(pressRelease as { press_release_type: string; article_link: string; article_file: {url: string;}}),
    date: new Date(pressRelease.published_date || '').toLocaleString(undefined, { month: 'short', day: 'numeric', year: 'numeric'}),
  })) || [];
}

function getVolunteers(project: ProjectPageData) {
  return [{
    members: project.volunteers?.map(volunteer => ({
      id: volunteer.id,
      name: volunteer.name,
      role: volunteer.role,
      image: volunteer.avatar?.url,
      linkedin: volunteer.linkedin,
    })) || [],
  }];
}

function getFunders(funders?: ProjectPageData["related_funders"]) {
  return funders?.map((funder) => ({
  name: funder.name,
  description: funder.description,
  image: funder.logo.url,
  link: funder.website_link,
  })) || []
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
  const volunteers = getVolunteers(project);
  const funders = getFunders(project.related_funders)

  return (
    <>
      {project.title && <ProjectHeroBlock
        image={project.thumbnail?.url}
        title={project.title}
        introduction={project.short_description}
        className='my-lg'
      />}

      <ProjectPresentation
        {...projectData}
        className='my-lg'
      />

      {project.video?.url ? (
        <BannerVideo
          url={project.video.url}
          format={project.video.orientation as 'paysage' | 'portrait'}
          className='my-lg'
        />
      ) : project.demo_video_embed ? (
        <BannerVideo
          video={project.demo_video_embed}
          className='my-lg'
        />
      ) : null}

      {presentationContent.length > 0 && <Banner
        content={presentationContent}
        className="my-lg"
      />}

      <ProjectProcesses
        {...delivrables}
        title={t('deliverables.title')
        }
      />

      {slides.length > 0 && <ProjectCarousel
        title={t('carousel.title')}
        slides={slides}
        className='my-lg'
      />}

      {!impacts.every((impact) => !!!impact.value) && <ProjectImpactBlock
        title={t('impact.title')}
        impacts={impacts}
        className='my-lg'
      />}

      {(news?.length || 0) > 0 && <NewsSmallBlock
        title={t('news.title')}
        blocks={news}
        className='my-lg'
      />}

      {(project.volunteers?.length || 0) > 0 && <MembersBlock
        title={t('members.title')}
        categories={volunteers}
        className="my-lg"
      />}

      {(project.related_funders?.length || 0) > 0 &&<PartnersBlock
        title={t('partners.title')}
        partners={funders}
        className="my-lg"
      />}

    </>
  );
}
