import { getTranslations } from 'next-intl/server';
import React from 'react';
import DonationsPage from './donation';
import client from '@/lib/strapi-client';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'donations' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
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

  return <DonationsPage data={data.data} />;
};
