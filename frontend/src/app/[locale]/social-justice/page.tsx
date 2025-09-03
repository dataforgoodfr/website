import { getTranslations } from 'next-intl/server';
import React from 'react';
import SocialPage from './social';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'social' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

const Page = () => {
  return <SocialPage />;
};

export default Page;
