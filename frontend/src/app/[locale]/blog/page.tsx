import React from 'react';
import BlogPage from './blog';
import client from '@/lib/strapi-client';
import { generateMetadataFromSeo } from '@/lib/utils';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { data } = await client.GET('/blog-list', {
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

async function fetchBlogsPageData() {
  return await client.GET('/resources', {
      params: {
        query: {
          "pagination[pageSize]": 200,
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

export default async function Page() {
  const response = await fetchBlogsPageData();

  if (!response?.data || !response?.data?.meta?.pagination) {
    return null;
  }

  return <BlogPage data={response.data?.data} pagination={response.data.meta.pagination} />;
};
