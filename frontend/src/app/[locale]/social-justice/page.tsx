import { getTranslations } from 'next-intl/server';
import React from 'react';
import SocialPage from './social';
import client from '@/lib/strapi-client';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'social' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

async function fetchThematicPageData() {
  return await client.GET('/social-justice', {
        params: {
          query: {
            populate: {
              banner_image: {
                populate: '*'
              },
              funders: {
                populate: '*',
              },
              projects: {
                populate: '*',
              },
              kpis: {
                populate: '*',
              },
              edito_1: {
                populate: '*',
              },
              edito_2: {
                populate: '*',
              },
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