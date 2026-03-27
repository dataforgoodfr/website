import client from '@/lib/strapi-client';
import { generateMetadataFromSeo } from '@/lib/utils';
import AboutPage from './about';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { data } = await fetchAboutPageData();

  if (!data?.data?.seo_meta) {
    return {};
  }

  return generateMetadataFromSeo(data.data.seo_meta);
}

async function fetchAboutPageData() {
  return await client.GET('/about', {
    params: {
      query: {
        populate: {
          cta_left: {
            populate: "*"
          },
          cta_right: {
            populate: "*"
          },
          testimonials: {
            populate: "*"
          },
          map_cta: {
            populate: "*"
          },
          volunteer_cta: {
            populate: "*"
          },
          funders: {
            populate: "*"
          },
          board_of_directors: {
            populate: "*"
          },
          employees: {
            populate: "*"
          },
          scientific_committee: {
            populate: "*"
          },
          strategic_committee: {
            populate: "*"
          },
          division_managers: {
            populate: "*"
          },
          seo_meta: {
            populate: "*"
          },
          activity_reports: {
            populate: {
              file: {
                populate: '*'
              }
            }
          }
        }
      }
    }
  });
}

export type AboutPageData = NonNullable<NonNullable<Awaited<ReturnType<typeof fetchAboutPageData>>["data"]>["data"]>;


export default async function Page() {
  const { data, error } = await fetchAboutPageData();

  if (!data?.data) {
    console.error(error);
    return null;
  }

  return <AboutPage data={data.data} />;
};
