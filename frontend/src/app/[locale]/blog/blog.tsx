
'use client';

import { useTranslations } from 'next-intl';
import { Title, BaseCardsBlock, Pagination, SearchInput } from '@/components';
import { useEffect, useState } from 'react';
import client from '@/lib/strapi-client';

function transformBlogsData(blogs: any) {
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

export default function BlogPage() {
  const t = useTranslations('blog');
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchEventPageData = async () => {
      const eventsData = await client.GET('/blog-list', {
        params: {
          query: {
            populate: {
              blogs: {
                populate: '*',
              },
            },
          },
        },
      });

      setBlogs(transformBlogsData(eventsData.data!.data!.blogs))
    };
    fetchEventPageData()
  });


  const blocksNext = [
    {
      title: 'Article 1',
      image: '/images/events/event-1.jpg',
      link: '/blog/article-1',
      subInfos: ['2024', 'En cours'],
    },
    {
      title: 'Article 2',
      image: '/images/events/event-2.jpg',
      link: '/blog/article-2',
      subInfos: ['2024', 'En cours'],
    },
    {
      title: 'Article 3',
      image: '/images/events/event-3.jpg',
      link: '/blog/article-3',
      subInfos: ['2024', 'En cours'],
    },
    {
      title: 'Article 4',
      image: '/images/events/event-4.jpg',
      link: '/blog/article-4',
      subInfos: ['2024', 'En cours'],
    }
  ];

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
