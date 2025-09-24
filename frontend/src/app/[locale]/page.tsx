import Homepage from './home';
import client from '@/lib/strapi-client';

async function fetchHomepageData() {
  return await client.GET('/home-page', {
    params: {
      query: {
        populate: {
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
            fields: ["title", "short_description"],
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
