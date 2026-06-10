import client from '@/lib/strapi-client';
import Homepage from './home';

export type HomepageData = {
  hero?: {
    image?: { url: string };
    title?: string;
    subtitle?: string;
    talk?: string;
  };
  featured_projects?: Array<{
    id?: number;
    thumbnail?: { url: string };
    title?: string;
    short_description?: string;
    slug?: string;
  }>;
  results?: Array<{
    id?: number;
    kpi?: {
      stat?: string;
      description?: string;
    };
    cta?: {
      link?: string;
      text?: string;
    };
  }>;
  events?: Array<{
    id?: number;
    name?: string;
    date?: string;
    image?: { url: string };
    link?: string;
  }>;
  resources?: Array<{
    id?: number;
    blog?: {
      title: string;
      author?: { name: string };
      thumbnail?: { url: string };
      slug: string;
    } | null;
    press_release?: {
      media_name?: string;
      title?: string;
      thumbnail?: { url: string };
      article_link?: string;
    } | null;
  }>;
  thematics?: Array<{
    id?: number;
    name?: string;
    color?: string;
    short_description?: string;
    thumbnail?: { url: string };
    cta_text?: string;
    cta_link?: string;
  }>;
  project_carousel_title?: string;
  thematics_section_title?: string;
  resources_section_title?: string;
  results_section_title?: string;
};

async function fetchHomepageData(): Promise<HomepageData | null> {
  if (!process.env.STRAPI_API_URL) {
    console.warn('STRAPI_API_URL not set — returning empty homepage data');
    return null;
  }
  try {
    const { data, error } = await client.GET('/home-page', {
      params: {
        query: {
          populate: {
            hero: {
              populate: { image: { fields: ['url'] } },
            },
            featured_projects: {
              populate: { thumbnail: { fields: ['url'] } },
            },
            results: {
              populate: '*',
            },
            events: {
              populate: { image: { fields: ['url'] } },
            },
            resources: {
              populate: {
                blog: { populate: { thumbnail: { fields: ['url'] }, author: { fields: ['name'] } } },
                press_release: { populate: { thumbnail: { fields: ['url'] } } },
              },
            },
            thematics: {
              populate: { thumbnail: { fields: ['url'] } },
            },
          },
        },
      },
    });
    if (error) {
      console.error('Failed to fetch homepage data:', error);
      return null;
    }
    return (data as unknown as { data: HomepageData })?.data ?? null;
  } catch (e) {
    console.error('Failed to fetch homepage data:', e);
    return null;
  }
}

export default async function Page() {
  const data = await fetchHomepageData();

  return <Homepage data={data ?? {}} />;
}
