
'use client';

import { ArticleHeroBlock, EditoCard, Kpis, Title } from '@/components';
import { BlogPageData } from './page';

type BlogPageProps = {
  blog: BlogPageData & { contentHtml: string };
};

function estimateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min`;
}

export default function ArticlePage({ blog }: BlogPageProps) {
  const heroBlock = {
    image: blog.thumbnail?.formats?.large?.url ?? '/images/dataforgood.svg',
    title: blog.title,
    introduction: blog.description,
    date: new Date(blog.published_date).toLocaleDateString(undefined, { dateStyle: "long" }),
    readTime: estimateReadingTime(blog.content),
    author: {
      name: blog.author?.name ?? 'DataForGood',
      link: ""
    },
  };

  return (
      <div className="mb-lg">
        <ArticleHeroBlock {...heroBlock} className="mb-lg" />

        <div className="container-md">
          {/* Main content */}
          <EditoCard className="my-sm">
            <div dangerouslySetInnerHTML={{ __html: blog.contentHtml }} />
          </EditoCard>
        </div>
      </div>
  );
}
