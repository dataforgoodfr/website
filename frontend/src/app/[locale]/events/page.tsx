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

async function fetchEventPageData(page: number, pageSize: number) {
  return await client.GET('/events', {
    params: {
      query: {
        "pagination[page]": page,
        "pagination[pageSize]": pageSize,
        populate: '*'
      },
    },
  });
}

export type EventsPageResponse = NonNullable<Awaited<ReturnType<typeof fetchEventPageData>>["data"]>;
export type EventsPageData = NonNullable<EventsPageResponse["data"]>;
export type EventsPageMeta = NonNullable<NonNullable<EventsPageResponse["meta"]>["pagination"]>;

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;
  const pageSize = 6;

  const response = await fetchEventPageData(page, pageSize);

  if (!response?.data || !response?.data.meta?.pagination) {
    console.log('No data or pagination')
    return null;
  }

  return <EventsPage data={response.data?.data} pagination={response.data.meta.pagination} currentPage={page} />;
};
