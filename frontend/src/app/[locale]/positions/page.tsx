import React from 'react';
import PositionsPage from './positions';
import client from '@/lib/strapi-client';
import { generateMetadataFromSeo } from '@/lib/utils';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { data } = await fetchPositionPageData();

  if (!data?.data?.seo_meta) {
    return {};
  }

  return generateMetadataFromSeo(data.data.seo_meta);
}

async function fetchPositionPageData() {
  return await client.GET('/position', {
    params: {
      query: {
        populate: {
          press_releases: {
            populate: {
              tags: {
                populate: '*'
              },
              thumbnail: {
                populate: '*'
              }
            }
          },
          resources: {
            populate: {
              blog: {
                populate: "*"
              },
              press_release: {
                populate: {
                  tags: {
                    populate: '*'
                  },
                  thumbnail: {
                    populate: '*'
                  }
                }
              }
            }
          },
          testimonial: {
            populate: '*',
          },
          testimonial_background: {
            populate: '*',
          },
          manifest_cta: {
            populate: '*',
          },
           animation: {
             populate: {
               image: {
                 populate: '*'
               }
             }
           },
           seo_meta: {
             populate: "*"
           }
         },
      },
    },
  });
}

export type PositionsPageData = NonNullable<NonNullable<Awaited<ReturnType<typeof fetchPositionPageData>>["data"]>["data"]>;

export default async function Page() {
  const { data } = await fetchPositionPageData();

  if (!data?.data) {
    return null;
  }

  return <PositionsPage data={data.data} />;
};