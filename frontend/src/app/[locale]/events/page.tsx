import { getTranslations } from 'next-intl/server';
import React from 'react';
import EventsPage from './events';
import client from '@/lib/strapi-client';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'events' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

async function fetchEventPageData() {
  return await client.GET('/evenement', {
    params: {
      query: {
        populate: {
          events: {
            populate: '*',
          },
        },
      },
    },
  });
}

export type EventsPageData = NonNullable<NonNullable<Awaited<ReturnType<typeof fetchEventPageData>>["data"]>["data"]>;

export default async function Page() {
  const { data } = await fetchEventPageData();

    if (!data?.data) {
    return null;
  }

  return <EventsPage data={data.data} />;
};