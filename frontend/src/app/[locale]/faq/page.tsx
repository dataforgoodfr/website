import { getTranslations } from 'next-intl/server';
import React from 'react';
import FaqPage from './faq';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'faq' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

const Page = () => {
  return <FaqPage />;
};

export default Page;
