import React from 'react';
import EventsPage from './events';
import client from '@/lib/strapi-client';
import { generateMetadataFromSeo } from '@/lib/utils';
import { revalidatePath } from 'next/cache';

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { data } = await client.GET('/evenement', {
    params: {
      query: {
        populate: {
          seo_meta: {
            populate: "*"
          }
        }
      }
    }
  });

  if (!data?.data?.seo_meta) {
    return {};
  }

  return generateMetadataFromSeo(data.data.seo_meta);
}

async function fetchEventPageData(page: number, pageSize: number) {
  return await client.GET('/events', {
    params: {
      query: {
        "pagination[page]": page,
        "pagination[pageSize]": pageSize,
        "sort": "date:desc",
        populate: '*'
      },
    },
  });
}

export type EventsPageResponse = NonNullable<Awaited<ReturnType<typeof fetchEventPageData>>["data"]>;
export type EventsPageData = NonNullable<EventsPageResponse["data"]>;
export type EventsPageMeta = NonNullable<NonNullable<EventsPageResponse["meta"]>["pagination"]>;

export default async function Page() {
  const page = 1;
  const pageSize = 6;

  const response = await fetchEventPageData(page, pageSize);

  if (!response?.data || !response?.data.meta?.pagination) {
    return null;
  }

  return <EventsPage data={response.data?.data} pagination={response.data.meta.pagination} currentPage={page} />;
};
