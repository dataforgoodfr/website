import React from 'react';
import ProjectsPage from './projects';
import client from '@/lib/strapi-client';
import { generateMetadataFromSeo } from '@/lib/utils';

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
            fields: ["name", "short_id", "color", "id", "short_description", "cta_text", "cta_link"],
            populate: 'thumbnail',
          },
          informations: {
            populate: '*',
          },
          seasons: {
            fields: ["title"]
          },
          projects: {
            fields: ["title", "short_description", "category", "slug", "start_date"],
            populate: {
              thumbnail: {
                fields: ["url"]
              }, 
              seasons: {
                fields: ["title"]
              },
              thematics: {
                fields: ["short_id"]
              },
              related_partners: {
                fields: ["name"]
              }
            }
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

  console.log(data.data)
  return <ProjectsPage data={data.data} />;
};
