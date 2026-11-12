import React from 'react';
import SocialPage from './social';
import client from '@/lib/strapi-client';
import { requireCmsData } from '@/lib/cms-guard';
import { generateMetadataFromSeo } from '@/lib/utils';

export async function generateMetadata(
  props: { params: Promise<{ locale: string }> },
) {
  const { locale } = await props.params;

  const { data } = await fetchThematicPageData();

  if (!data?.data?.seo_meta) {
    return {};
  }

  return generateMetadataFromSeo(data.data.seo_meta);
}

async function fetchThematicPageData() {
  return await client.GET('/social-justice', {
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
        populate: '*'
      },
    },
  });
}

export type ThematicPageData = NonNullable<NonNullable<Awaited<ReturnType<typeof fetchThematicPageData>>["data"]>["data"]>;
export type ThematicsData = NonNullable<NonNullable<Awaited<ReturnType<typeof fetchThematics>>["data"]>["data"]>;

export default async function Page() {
  const themeResult = await fetchThematicPageData();
  const thematicsResult = await fetchThematics();

  const data = requireCmsData<ThematicPageData>(themeResult, 'singleton', '/social-justice');
  const thematicsData = requireCmsData<ThematicsData>(thematicsResult, 'singleton', '/thematics');

  return <SocialPage data={data} thematicsData={thematicsData} />;
};
