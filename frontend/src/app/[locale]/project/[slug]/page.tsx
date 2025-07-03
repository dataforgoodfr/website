import type { ApiProjectProject } from '@/types/strapi/generated/contentTypes';
import Image from 'next/image';
import qs from 'qs';
import { DashboardTableOfContents } from '@/components/toc';
import { getMarkdownContent } from '@/lib/markdown';
import { getTableOfContents } from '@/lib/toc';
import { getImage, getStrapiData } from '@/lib/utils';

export default async function ProjectArticle({
  params,
}: {
  params: { slug: string };
}) {
  const query = qs.stringify(
    {
      populate: {
        thumbnail: true,
        logo: true,
        seasons: true,
      },
      filters: {
        slug: {
          $eq: params.slug,
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    },
  );
  const apiData = await getStrapiData<ApiProjectProject[]>(`projects?${query}`);
  const project = apiData[0];

  const formattedContent = await getMarkdownContent(project.content);
  const toc = await getTableOfContents(project.content);

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <article className="flex-col lg:flex lg:gap-8">
        <div className="lg:w-3/4">
          <header className="mb-8">
            <h1 className="mb-4 text-4xl font-bold">{project.title}</h1>
            <p className="text-xl text-muted-foreground">
              {project.description}
            </p>
          </header>

          <Image
            src={getImage(project.thumbnail)}
            alt={project.thumbnail.alt}
            width={800}
            height={400}
            className="mb-8 w-full rounded-lg"
          />

          <article>
            <div
              className="prose max-w-none dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: formattedContent }}
            />
          </article>
        </div>
        <div className="hidden text-sm lg:block">
          <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
            <DashboardTableOfContents toc={toc} />
          </div>
        </div>
      </article>
    </div>
  );
}
