import Homepage from './home';
import client from '@/lib/strapi-client';
import { generateMetadataFromSeo } from '@/lib/utils';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { data } = await fetchHomepageData()

  if (!data?.data?.seo_meta) {
    return {};
  }

  return generateMetadataFromSeo(data.data.seo_meta);
}

async function fetchHomepageData() {
  return await client.GET('/home-page', {
    params: {
      query: {
        populate: {
          seo_meta: {
            populate: "*"
          },
          hero: {
            populate: "*"
          },
          results: {
            populate: {
              kpi: {
                populate: "*",
              },
              cta: {
                populate: "*",
              }
            }
          },
          featured_projects: {
            fields: ["title", "short_description", "slug"],
            populate: "thumbnail"
          },
          thematics: {
            populate: "*"
          },
          events: {
            populate: "*"
          },
          resources: {
            populate: {
              blog: {
                populate: {
                  author: {
                    fields: ["name"]
                  },
                  thumbnail: {
                    fields: ["url"]
                  }
                }
              },
              press_release: {
                populate: "*"
              }
            }
          }
        }
      }
    }
  });
}

export type HomepageData = NonNullable<NonNullable<Awaited<ReturnType<typeof fetchHomepageData>>["data"]>["data"]>;

export default async function Page() {
  const { data } = await fetchHomepageData();

  if (!data?.data) {
    return null;
  }

  return <Homepage data={data.data} />;
}
