import { getTranslations } from 'next-intl/server';
import React from 'react';
import ArticlePage from './article';

export async function generateMetadata(
  props: { params: Promise<{ locale: string }> },
) {
  const { locale } = await props.params;

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
