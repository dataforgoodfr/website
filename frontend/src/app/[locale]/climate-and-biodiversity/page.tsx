import { getTranslations } from 'next-intl/server';
import React from 'react';
import ClimatePage from './climate';
import client from '@/lib/strapi-client';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'climate' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
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

  return <ClimatePage data={data.data} />;
};