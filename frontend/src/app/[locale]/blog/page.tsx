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

async function fetchBlogPageData() {
  return await client.GET('/blog-list', {
        params: {
          query: {
            populate: {
              blogs: {
                populate: '*',
              },
            },
          },
        },
      });
}

export type BlogsPageData = NonNullable<NonNullable<Awaited<ReturnType<typeof fetchBlogPageData>>["data"]>["data"]>;

export default async function Page() {
  const { data } = await fetchBlogPageData();

    if (!data?.data) {
    return null;
  }

  return <BlogPage data={data.data} />;
};