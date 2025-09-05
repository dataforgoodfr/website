import { getTranslations } from 'next-intl/server';
import React from 'react';
import ProjectDetailPage from './projectDetail';
import { useParams } from 'next/navigation';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'projectDetail' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

const Page = () => {
  return <ProjectDetailPage />;
};

export default Page;
