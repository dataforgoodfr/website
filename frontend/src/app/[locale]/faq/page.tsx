import React from 'react';
import FaqPage from './faq';
import client from '@/lib/strapi-client';
import { generateMetadataFromSeo } from '@/lib/utils';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { data } = await client.GET('/faq', {
    params: {
      query: {
        populate: {
          seo_meta: {
            populate: '*'
          }
        }
      }
    }
  });

  if (!data?.data?.seo_meta) {
    return {};
  }

  return generateMetadataFromSeo(data.data.seo_meta);
}

const Page = () => {
  return <FaqPage />;
};

export default Page;
