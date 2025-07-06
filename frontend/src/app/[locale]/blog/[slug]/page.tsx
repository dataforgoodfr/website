import type { ApiBlogBlog } from '@/types/strapi/generated/contentTypes';
import Image from 'next/image';
import qs from 'qs';
import { DashboardTableOfContents } from '@/components/toc';
import { getMarkdownContent } from '@/lib/markdown';
import { getTableOfContents } from '@/lib/toc';
import { getImage, getStrapiData } from '@/lib/utils';

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
    },
  );
  const apiData = await getStrapiData<ApiBlogBlog[]>(`blogs?${query}`);
  const blog = apiData[0];

  const formattedContent = await getMarkdownContent(blog.content);
  const toc = await getTableOfContents(blog.content);

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <article className="lg:flex lg:gap-8">
        <div className="lg:w-3/4">
          <header className="mb-8">
            <h1 className="mb-4 text-4xl font-bold">{blog.title}</h1>
            <p className="text-xl text-muted-foreground">{blog.description}</p>
          </header>

          <Image
            src={getImage(blog.thumbnail)}
            alt={blog.thumbnail.alt}
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
