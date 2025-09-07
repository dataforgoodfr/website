import { getTranslations } from 'next-intl/server';
import React from 'react';
import EventsPage from './events';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'events' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

const Page = () => {
  return <EventsPage />;
};

export default Page;
