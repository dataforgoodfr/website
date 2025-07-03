import { DashboardTableOfContents } from "@/components/toc";
import { getTableOfContents } from "@/lib/toc";
import { getImage, getStrapiData } from "@/lib/utils";
import { getMarkdownContent } from "@/lib/markdown";
import { ApiProjectProject } from "@/types/strapi/generated/contentTypes";
import Image from "next/image";
import qs from "qs";

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
    }
  );
  const apiData = await getStrapiData<ApiProjectProject[]>(`projects?${query}`);
  const project = apiData[0];

  const formattedContent = await getMarkdownContent(project.content);
  const toc = await getTableOfContents(project.content);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <article className="flex-col lg:flex lg:gap-8">
        <div className="lg:w-3/4">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground">
              {project.description}
            </p>
          </header>

          <Image
            src={getImage(project.thumbnail)}
            alt={project.thumbnail.alt}
            width={800}
            height={400}
            className="rounded-lg mb-8 w-full"
          />

          <article>
            <div
              className="prose dark:prose-invert max-w-none"
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
