import React from 'react';
import ClimatePage from './climate';
import client from '@/lib/strapi-client';
import { generateMetadataFromSeo } from '@/lib/utils';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { data } = await fetchThematicPageData();

  if (!data?.data?.seo_meta) {
    return {};
  }

  return generateMetadataFromSeo(data.data.seo_meta);
}

async function fetchThematicPageData() {
  return await client.GET('/climate-and-biodiversity', {
    params: {
      query: {
        populate: {
          thematic: {
            populate: {
              projects: {
                populate: '*'
              },
              partners: {
                populate: '*'
              },
              funders: {
                populate: '*'
              },
              kpis: {
                populate: '*'
              },
              image_1: {
                fields: ["url"]
              },
              image_2: {
                fields: ["url"]
              },
               banner_image: {
                 fields: ["url"]
               },
             }
           },
           seo_meta: {
             populate: "*"
           }
         },
      },
    },
  });
}

async function fetchThematics() {
  return await client.GET('/thematics', {
    params: {
      query: {
        populate: {
          projects: {
            populate: '*'
          },
          partners: {
            populate: '*'
          },
          funders: {
            populate: '*'
          },
          kpis: {
            populate: '*'
          },
          image_1: {
            fields: ["url"]
          },
          image_2: {
            fields: ["url"]
          },
           thumbnail: {
             fields: ["url"]
           },
         }
       },
    },
  });
}

export type ThematicPageData = NonNullable<NonNullable<Awaited<ReturnType<typeof fetchThematicPageData>>["data"]>["data"]>;
export type ThematicsData = NonNullable<NonNullable<Awaited<ReturnType<typeof fetchThematics>>["data"]>["data"]>;

export default async function Page() {
  const { data } = await fetchThematicPageData();
  const { data: thematicsData } = await fetchThematics();

  if (!data?.data || !thematicsData?.data) {
    return null;
  }

  return <ClimatePage data={data.data} thematicsData={thematicsData.data} />;
};
