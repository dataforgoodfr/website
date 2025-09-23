import { getTranslations } from 'next-intl/server';
import React from 'react';
import BlogPage from './blog';
import client from '@/lib/strapi-client';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'blog' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

async function fetchBlogsPageData(page: number, pageSize: number) {
  return await client.GET('/resources', {
      params: {
        query: {
          "pagination[page]": page,
          "pagination[pageSize]": pageSize,
          "sort": "createdAt:desc",
          populate: {
            blog: {
              populate: '*',
            },
            press_release: {
              populate: '*',
            },
          },
        },
      },
    });
}

export type BlogsPageResponse = NonNullable<Awaited<ReturnType<typeof fetchBlogsPageData>>["data"]>;
export type BlogsPageData = NonNullable<BlogsPageResponse["data"]>;
export type BlogsPageMeta = NonNullable<NonNullable<BlogsPageResponse["meta"]>["pagination"]>;

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;
  const pageSize = 8;
  const response = await fetchBlogsPageData(page, pageSize);

  if (!response?.data || !response?.data.meta?.pagination) {
    console.log('No data or pagination')
    return null;
  }

  return <BlogPage data={response.data?.data} pagination={response.data.meta.pagination} currentPage={page}/>;
};
