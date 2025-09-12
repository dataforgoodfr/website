import { getTranslations } from 'next-intl/server';
import React from 'react';
import ArticlePage from './article';

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
