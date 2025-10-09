import React from 'react';
import PositionsPage from './positions';
import client from '@/lib/strapi-client';
import { generateMetadataFromSeo } from '@/lib/utils';
import { revalidatePath } from 'next/cache';

export const dynamic = 'force-static';
export const revalidate = 86400; // Revalidate every 24 hours for positions

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
                populate: "*"
              },
              thumbnail: {
                fields: ['url', 'alternativeText']
              }
            }
          },
          resources: {
            populate: {
              blog: {
                fields: ['title', 'slug', 'published_date', 'tags'],
                populate: {
                  thumbnail: {
                    fields: ['url']
                  },
                }
              },
              press_release: {
                fields: ['title', 'published_date', 'media_name', 'article_link'],
                populate: {
                  tags: {
                    populate: "*"
                  },
                  thumbnail: {
                    fields: ['url', 'alternativeText']
                  }
                }
              }
            }
          },
          testimonial: {
            fields: ['quote', 'author'],
            populate: {
              avatar: {
                fields: ['url']
              }
            }
          },
          testimonial_background: {
            fields: ['url']
          },
          manifest_cta: {
            fields: ['text']
          },
           animation: {
              populate: {
                image: {
                  fields: ['url', 'alternativeText']
                }
              }
            },
            seo_meta: {
              fields: ['title', 'description']
            },
            manifesto: {
              fields: ['id', 'url']
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
