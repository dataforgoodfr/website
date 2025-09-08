'use client';

import { useTranslations } from 'next-intl';
import { BaseCardsBlock, Pagination, SearchInput, Title } from '@/components';

export default function BlogPage() {
  const t = useTranslations('blog');

  const blocksNext = [
    {
      title: 'Article 1',
      description: 'Description de l\'article 1',
      image: '/images/events/event-1.jpg',
      link: '/blog/article-1',
      subInfos: ['2024', 'En cours'],
    },
    {
      title: 'Article 2',
      description: 'Description de l\'article 2',
      image: '/images/events/event-2.jpg',
      link: '/blog/article-2',
      subInfos: ['2024', 'En cours'],
    },
    {
      title: 'Article 3',
      description: 'Description de l\'article 3',
      image: '/images/events/event-3.jpg',
      link: '/blog/article-3',
      subInfos: ['2024', 'En cours'],
    },
    {
      title: 'Article 4',
      description: 'Description de l\'article 4',
      image: '/images/events/event-4.jpg',
      link: '/blog/article-4',
      subInfos: ['2024', 'En cours'],
    },
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
        blocks={blocksNext}
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
