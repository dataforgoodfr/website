
'use client';

import { useTranslations } from 'next-intl';
import { Title, BaseCardsBlock, Pagination, SearchInput } from '@/components';
import { BlogsPageData } from './page';

function transformBlogsData(blogs: NonNullable<BlogsPageData['blogs']>) {
  return blogs.map(blog => ({
    id: blog.id,
    title: blog.title,
    date: new Date(blog.published_date).toLocaleString(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
    }),
    image: blog.thumbnail.url,
    link: `/blog/${blog.slug}`,
    subInfos: blog.tags,
  }));
}

type BlogsPageProps = {
  data: BlogsPageData
}

export default function BlogPage({data}: BlogsPageProps) {
  const t = useTranslations('blog');
  const blogs = transformBlogsData(data.blogs)

  return (
      <div className="container my-lg">
        <Title className="mb-md max-w-5xl" variant="big">
          {t('title')}
        </Title>
        <SearchInput
          className="my-lg"
          handleChange={() => {}}
        />

        <BaseCardsBlock
          blocks={blogs}
          className="my-lg"
        />

        <Pagination
          pageCount={4}
          currentPage={1}
          setCurrentPage={() => {}}
          className="mt-sm mb-lg mx-auto max-w-max"
          color="black"
        />
    </div>
  );
}
