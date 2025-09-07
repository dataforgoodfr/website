import { getTranslations } from 'next-intl/server';
import React from 'react';
import BlogPage from './blog';

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

const Page = () => {
  return <BlogPage />;
};

export default Page;
