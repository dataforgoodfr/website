import { getTranslations } from 'next-intl/server';
import React from 'react';
import PositionsPage from './positions';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'positions' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

const Page = () => {
  return <PositionsPage />;
};

export default Page;
