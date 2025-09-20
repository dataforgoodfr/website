import { getTranslations } from 'next-intl/server';
import React from 'react';
import ProjectsPage from './projects';
import client from '@/lib/strapi-client';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'projects' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
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