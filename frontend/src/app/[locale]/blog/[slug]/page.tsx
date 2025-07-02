import { DashboardTableOfContents } from "@/components/toc";
import { getTableOfContents } from "@/lib/toc";
import { getImage, getStrapiData } from "@/lib/utils";
import { getMarkdownContent } from "@/lib/markdown";
import { ApiBlogBlog } from "@/types/strapi/generated/contentTypes";
import Image from "next/image";
import qs from "qs";

export default async function CommunityBlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const query = qs.stringify(
    {
      populate: {
        tags: true,
        thumbnail: true,
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
  const apiData = await getStrapiData<ApiBlogBlog[]>(`blogs?${query}`);
  const blog = apiData[0];

  const formattedContent = await getMarkdownContent(blog.content);
  const toc = await getTableOfContents(blog.content);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <article className="lg:flex lg:gap-8">
        <div className="lg:w-3/4">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
            <p className="text-xl text-muted-foreground">{blog.description}</p>
          </header>

          <Image
            src={getImage(blog.thumbnail)}
            alt={blog.thumbnail.alt}
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
