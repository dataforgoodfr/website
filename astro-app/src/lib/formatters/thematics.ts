import { ThematicPageData } from '@/app/[locale]/climate-and-biodiversity/page';
import { ThematicsData } from '@/app/[locale]/social-justice/page';

export function transformPartners(
  partners: NonNullable<ThematicPageData['funders']>
) {
  return partners?.map(partner => ({
    name: partner.name,
    description: partner.description,
    image: partner.logo,
    link: partner.website_link,
  })) ?? [];
}

export function transformKpis(kpis: NonNullable<ThematicPageData['kpis']>) {
  return kpis?.map(kpi => ({
    id: kpi.id,
    title: kpi.stat,
    description: kpi.description,
  })) ?? [];
}

export function transformProjects(
  projects: NonNullable<ThematicPageData['projects']>
) {
  return projects?.map(project => ({
    id: project.id,
    name: {
      children: project.title || '',
    },
    link: project.slug && `projects/${project.slug}` || '',
    description: project.short_description || '',
    images: [project.thumbnail?.url || ''],
    company: project.related_partners && project.related_partners.length > 0 && project.related_partners[0].name || '',
    kpis: [
      {
        name: project.value_1,
        description: project.explanation_1,
      },
      {
        name: project.value_2,
        description: project.explanation_2,
      },
      {
        name: project.value_3,
        description: project.explanation_3,
      },
    ],
  })) ?? [];
}

export function transformThematics(
  thematics: NonNullable<ThematicsData>
) {
  return thematics?.map(thematic => ({
    title: {
      children: thematic.name || '',
      props: {
        colors: `text-black bg-${thematic.color}`,
        className: "drop-shadow-3 drop-shadow-black before:-z-1",
        rotation: -2.58,
      }
    },
    id: thematic.id?.toString() || '',
    talk: thematic.short_description || '',
    talkOffset: 10,
    image: thematic.thumbnail?.url || '',
    ctaText: thematic.cta_text,
    ctaLink: thematic.cta_link,
  })).filter(thematic => thematic.talk) ?? [];
}
