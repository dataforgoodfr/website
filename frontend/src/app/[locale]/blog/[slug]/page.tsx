import React from 'react';
import client from '@/lib/strapi-client';
import ArticlePage from './article';
import { getMarkdownContent } from '@/lib/markdown';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  const { data } = await client.GET('/blogs', {
    params: {
      query: {
        fields: ['slug'],
      },
    },
  });
  
  return data?.data?.map((blog) => ({
    slug: blog.slug,
  })) || [];
}

async function fetchBlogPageData(slug: string) {
  return await client.GET('/blogs', {
    params: {
      query: {
        filters: {
          slug: {
            $eq: slug,
          },
        },
        populate: {
          author: {
            populate: "*"
          },
          thumbnail: {
            fields: ["id","url", "caption", "alternativeText", "formats"]
          }
        }
      },
    },
  });
}

export type BlogPageData = NonNullable<NonNullable<NonNullable<Awaited<ReturnType<typeof fetchBlogPageData>>["data"]>["data"]>["blogs"]>[0];

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  const { data } = await fetchBlogPageData(slug);

  if (!data?.data || !data.data.length) {
    return {};
  }

  const blog = data.data[0];

  return {
    title: blog.title,
    description: blog.description,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
   const { slug } = params;
   const { data } = await fetchBlogPageData(slug);

   if (!data?.data || !data.data.length) {
   return null;
 }

   const blogPageData = data.data[0] as BlogPageData;
   const contentHtml = await getMarkdownContent(blogPageData.content)

  return <ArticlePage blog={{...blogPageData, contentHtml}} />;
};
