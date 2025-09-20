import { getTranslations } from 'next-intl/server';
import React from 'react';
import AboutPage from './about';
import client from '@/lib/strapi-client';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'about' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

async function fetchAboutPageData() {
  return await client.GET('/about', {
    params: {
      query: {
        populate: {
          cta_left: {
            populate: "*"
          },
          cta_right: {
            populate: "*"
          },
          testimonials: {
            populate: "*"
          },
          map_cta: {
            populate: "*"
          },
          volunteer_cta: {
            populate: "*"
          },
          funders: {
            populate: "*"
          },
          board_of_directors: {
            populate: "*"
          },
          employees: {
            populate: "*"
          },
          scientific_committee: {
            populate: "*"
          },
          strategic_committee: {
            populate: "*"
          },
          division_managers: {
            populate: "*"
          }
        }
      }
    }
  });
}

export type AboutPageData = NonNullable<NonNullable<Awaited<ReturnType<typeof fetchAboutPageData>>["data"]>["data"]>;


export default async function Page() {
  const { data } = await fetchAboutPageData();

    if (!data?.data) {
    return null;
  }

  return <AboutPage data={data.data} />;
};