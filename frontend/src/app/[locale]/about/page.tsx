import { getTranslations } from 'next-intl/server';
import React from 'react';
import AboutPage from './about';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'about' });

  return {
    title: t('meta.title'),
  };
}

const Page = () => {
  return <AboutPage />;
};

export default Page;
