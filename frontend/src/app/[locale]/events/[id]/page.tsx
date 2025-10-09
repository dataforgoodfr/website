import { getTranslations } from 'next-intl/server';
import React from 'react';
import ArticlePage from './article';
import client from '@/lib/strapi-client';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  const { data } = await client.GET('/events', {
    params: {
      query: {
        fields: ['id'],
      },
    },
  });
  
  return data?.data?.map((event) => ({
    id: event.id.toString(),
  })) || [];
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'blog' });

  return {
    title: "title",
    description: "description",
  };
}

const Page = () => {
  return <ArticlePage />;
};

export default Page;
