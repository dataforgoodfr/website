import React from 'react';
import ChartePage from './charte';
import client from '@/lib/strapi-client';
import { generateMetadataFromSeo } from '@/lib/utils';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { data } = await client.GET('/diversity-charter', {
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
  return <ChartePage />;
};

export default Page;
