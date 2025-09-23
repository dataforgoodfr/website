import { getTranslations } from 'next-intl/server';
import React from 'react';
import PositionsPage from './positions';
import client from '@/lib/strapi-client';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'positions' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

async function fetchPositionPageData() {
  return await client.GET('/position', {
    params: {
      query: {
        populate: {
          press_releases: {
            populate: '*'
          },
          resources: {
            populate: '*',
          },
          testimonial: {
            populate: '*',
          },
          testimonial_background: {
            populate: '*',
          }
        },
      },
    },
  });
}

export type PositionsPageData = NonNullable<NonNullable<Awaited<ReturnType<typeof fetchPositionPageData>>["data"]>["data"]>;

export default async function Page() {
  const { data } = await fetchPositionPageData();

  if (!data?.data) {
    return null;
  }

  return <PositionsPage data={data.data} />;
};