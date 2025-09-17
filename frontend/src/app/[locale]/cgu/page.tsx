import { getTranslations } from 'next-intl/server';
import React from 'react';
import CguPage from './cgu';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'cgu' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

const Page = () => {
  return <CguPage />;
};

export default Page;
