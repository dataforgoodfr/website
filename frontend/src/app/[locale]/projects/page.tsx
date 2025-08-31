import { getTranslations } from 'next-intl/server';
import React from 'react';
import ProjectsPage from './projects';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'projects' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

const Page = () => {
  return <ProjectsPage />;
};

export default Page;
