import React from 'react';
import ProjectsPage from './projects';
import client from '@/lib/strapi-client';
import { generateMetadataFromSeo } from '@/lib/utils';

export const dynamic = 'force-static';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { data } = await fetchProjectListPageData();

  if (!data?.data?.seo_meta) {
    return {};
  }

  return generateMetadataFromSeo(data.data.seo_meta);
}

async function fetchProjectListPageData() {
  return await client.GET('/projects-list', {
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
           join_cta: {
             populate: '*',
           },
           seo_meta: {
             populate: "*"
           }
         },
      },
    },
  });
}

export type ProjectListPageData = NonNullable<NonNullable<Awaited<ReturnType<typeof fetchProjectListPageData>>["data"]>["data"]>;


export default async function Page() {
  const { data } = await fetchProjectListPageData();

  if (!data?.data) {
    return null;
  }

  return <ProjectsPage data={data.data} />;
};
