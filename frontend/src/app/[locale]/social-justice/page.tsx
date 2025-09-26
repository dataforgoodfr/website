import React from 'react';
import SocialPage from './social';
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

export type ThematicPageData = NonNullable<NonNullable<Awaited<ReturnType<typeof fetchThematicPageData>>["data"]>["data"]>;

export default async function Page() {
  const { data } = await fetchThematicPageData();

  if (!data?.data) {
    return null;
  }

  return <SocialPage data={data.data} />;
};