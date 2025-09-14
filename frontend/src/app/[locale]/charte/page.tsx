import { getTranslations } from 'next-intl/server';
import React from 'react';
import ChartePage from './charte';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'charte' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

const Page = () => {
  return <ChartePage />;
};

export default Page;
