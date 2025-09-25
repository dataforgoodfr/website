import { getTranslations } from 'next-intl/server';
import React from 'react';
import ProjectDetailPage from './projectDetail';
import client from '@/lib/strapi-client';

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
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'projectDetail' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
   const { slug } = params;
   const { data } = await fetchProjectPageData(slug);

    if (!data?.data || !data.data.length) {
    return null;
  }

  const projectData = data.data[0] as ProjectPageData;

  return <ProjectDetailPage  project={projectData} />;
};
