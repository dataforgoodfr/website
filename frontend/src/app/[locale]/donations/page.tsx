import React from 'react';
import DonationsPage from './donation';
import client from '@/lib/strapi-client';
import { generateMetadataFromSeo } from '@/lib/utils';
import { getMarkdownContent } from '@/lib/markdown';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { data } = await fetchDonationData();

  if (!data?.data?.seo_meta) {
    return {};
  }

  return generateMetadataFromSeo(data.data.seo_meta);
}

async function fetchDonationData() {
  return await client.GET('/donation', {
    params: {
      query: {
        populate: {
          banner_video: {
            populate: "*",
          },
          actions: {
            populate: "*"
          },
          goals: {
            populate: {
              goal_cta: {
                populate: '*'
              },
            }
          },
           donation_cta: {
             populate: "*"
           },
           seo_meta: {
             populate: "*"
           }
         }
      }
    }
  });
}

export type DonationsData = NonNullable<NonNullable<Awaited<ReturnType<typeof fetchDonationData>>["data"]>["data"]>;

export default async function Page() {
  const { data } = await fetchDonationData();

  if (!data?.data) {
    return null;
  }

  const introduction_text = await getMarkdownContent(data.data.introduction_text);
  return <DonationsPage data={{...data.data, introduction_text}} />;
};
