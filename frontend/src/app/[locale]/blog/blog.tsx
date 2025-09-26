
'use client';

import { useTranslations } from 'next-intl';
import { Title, BaseCardsBlock, Pagination, SearchInput } from '@/components';
import { BlogsPageMeta, BlogsPageData } from './page';
import { usePagination } from '@/hooks/usePagination';
import { useState, useEffect } from 'react';


function transformBlogsData(resources: NonNullable<BlogsPageData>) {
  return resources.map(resource => {
    const isBlog = !!resource.blog;
    const element = isBlog ? resource.blog : resource.press_release;

    return ({
      id: resource.id,
      title: element.title,
      rawDate: resource.published_date,
      date: new Date(resource.published_date).toLocaleString(undefined, {dateStyle: 'medium'}),
      image: element.thumbnail?.url ?? "/images/dataforgood.svg",
      link: isBlog ? `/blog/${element.slug}` : element.article_link,
      subInfos: element.tags ? element.tags.map(tag => tag.name) : [],
      tags: [new Date(element.published_date).toLocaleDateString(undefined, {dateStyle: 'long'})]
    })
  })
}

type BlogsPageProps = {
  data: BlogsPageData
  pagination: BlogsPageMeta
  currentPage: number
}

export default function BlogPage({data, pagination, currentPage}: BlogsPageProps) {
  const t = useTranslations('blog');
  const resources = transformBlogsData(data)
  const [filteredResources, setFilteredResources] = useState(resources);
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.value);
  };

  const handleSearch = (query: string) => {
    const filtered = resources.filter(resource => {
      const title = resource.title.toLowerCase();
      const queryLower = query.toLowerCase();
      return title.includes(queryLower);
    });
    setFilteredResources(filtered);
  };

  useEffect(() => {
    handleSearch(searchQuery);
  }, [searchQuery]);

  const { handlePageChange } = usePagination(currentPage);

  return (
      <div className="my-lg pt-md">
        <div className="container">
          <Title className="mb-md max-w-5xl" variant="big">
            {t('title')}
          </Title>
          <SearchInput
            handleChange={handleInputChange}
            value={searchQuery}
          />
        </div>

        <BaseCardsBlock
          blocks={filteredResources}
          className="my-lg"
        />

        <Pagination
          pageCount={pagination.pageCount}
          currentPage={pagination.page}
          setCurrentPage={handlePageChange}
          className="mt-sm mb-lg mx-auto max-w-max"
          color="black"
        />
    </div>
  );
}
