import { getTranslations } from 'next-intl/server';
import React from 'react';
import DonationsPage from './donation';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'donations' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

const Page = () => {
  return <DonationsPage />;
};

export default Page;
