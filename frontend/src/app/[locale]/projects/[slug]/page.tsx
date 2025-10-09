import React from 'react';
import ProjectDetailPage from './projectDetail';
import client from '@/lib/strapi-client';
import { getMarkdownContent } from '@/lib/markdown';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  const { data } = await client.GET('/projects', {
    params: {
      query: {
        fields: ['slug'],
      },
    },
  });
  
  return data?.data?.map((project) => ({
    slug: project.slug,
  })) || [];
}

async function fetchProjectPageData(slug: string) {
  return await client.GET('/projects', {
    params: {
      query: {
        filters: {
          slug: {
            $eq: slug,
          },
        },
        populate: {
          logo: {
            populate: '*',
          },
          thumbnail: {
            populate: '*',
          },
          illustration_images: {
            populate: '*',
          },
          related_projects: {
            populate: {
              logo: {
                fields: ['url']
              },
              thumbnail: {
                fields: ["url"]
              }
            }
          },
          related_partners: {
            populate: '*'
          },
          related_funders: {
            populate: '*'
          },
          thematics: {
            populate: '*'
          },
          press_releases: {
            populate: '*'
          },
          volunteers: {
            populate: '*'
          },
          seasons: {
            populate: '*'
          }
        },
      },
    },
  });
}

export type ProjectPageData = NonNullable<NonNullable<Awaited<ReturnType<typeof fetchProjectPageData>>["data"]>["data"]>[0];

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  const { data } = await fetchProjectPageData(slug);

  if (!data?.data || !data.data.length) {
    return {};
  }

  const project = data.data[0];

  return {
    title: project.title,
    description: project.short_description,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
   const { slug } = params;
   const { data } = await fetchProjectPageData(slug);

    if (!data?.data || !data.data.length) {
    return null;
  }

  const projectData = data.data[0] as ProjectPageData;
  const context = await getMarkdownContent(projectData.context);
  const long_description = await getMarkdownContent(projectData.long_description);
  const delivrable = await getMarkdownContent(projectData.delivrable);

  return <ProjectDetailPage  project={{...projectData, context, long_description, delivrable}} />;
};
