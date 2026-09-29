import React from 'react';
import ProjectDetailPage from './projectDetail';
import client from '@/lib/strapi-client';
import { requireCmsData } from '@/lib/cms-guard';
import { getMarkdownContent } from '@/lib/markdown';

async function fetchProjectPageData(slug: string) {
  return await client.GET('/projects', {
    params: {
      query: {
        filters: {
          slug: {
            $eq: slug,
          },
        },
        populate: {
          logo: {
            populate: '*',
          },
          thumbnail: {
            populate: '*',
          },
          illustration_images: {
            populate: '*',
          },
          related_projects: {
            populate: {
              logo: {
                fields: ['url']
              },
              thumbnail: {
                fields: ["url"]
              }
            }
          },
          related_partners: {
            populate: '*'
          },
          related_funders: {
            populate: '*'
          },
          thematics: {
            populate: '*'
          },
          press_releases: {
            populate: '*'
          },
          volunteers: {
            populate: '*'
          },
          seasons: {
            populate: '*'
          },
          video: {
            populate: '*'
          }
        },
      },
    },
  });
}

export type ProjectPageData = NonNullable<NonNullable<Awaited<ReturnType<typeof fetchProjectPageData>>["data"]>["data"]>[0];

export async function generateMetadata(
  props: { params: Promise<{ locale: string; slug: string }> },
) {
  const { locale, slug } = await props.params;

  const { data } = await fetchProjectPageData(slug);

  if (!data?.data || !data.data.length) {
    return {};
  }

  const project = data.data[0];

  return {
    title: project.title,
    description: project.short_description,
  };
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const result = await fetchProjectPageData(slug);
  const [projectData] = requireCmsData<ProjectPageData[]>(result, 'detail', `/projects?slug=${slug}`);

  const context = await getMarkdownContent(projectData.context);
  const long_description = await getMarkdownContent(projectData.long_description);
  const delivrable = await getMarkdownContent(projectData.delivrable);

  return <ProjectDetailPage project={{ ...projectData, context, long_description, delivrable }} />;
};
