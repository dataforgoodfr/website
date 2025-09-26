import React from 'react';
import client from '@/lib/strapi-client';
import ArticlePage from './article';
import { remark } from 'remark';
import html from 'remark-html';

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

   // Use remark to process the markdown content
   const processedContent = await remark()
       .use(html)
       .process(blogPageData.content);
     const contentHtml = processedContent.toString();

  return <ArticlePage blog={{...blogPageData, contentHtml}} />;
};
