
'use client';

import { useTranslations } from 'next-intl';
import { Title, BaseCardsBlock, Pagination, SearchInput, Filter, Button } from '@/components';
import { BlogsPageMeta, BlogsPageData } from './page';
import { useState, useMemo } from 'react';
import { getPressReleaseLink } from '@/lib/utils';
import clsx from 'clsx';


function getTagsAsStrings(tags: unknown): string[] {
  if (!tags) return [];
  if (!Array.isArray(tags)) return [];
  return tags.map((tag: unknown) => {
    if (typeof tag === 'string') return tag;
    if (tag && typeof tag === 'object' && 'name' in (tag as object)) return (tag as { name: string }).name;
    if (tag && typeof tag === 'object' && 'tag' in (tag as object)) return (tag as { tag: string }).tag;
    return String(tag);
  });
}

function determineType(element: Record<string, any> | null, tagStrings: string[]): string {
  // Check tags first
  const types = ['podcast', 'article', 'rapport', 'prise de position', 'autre'];
  for (const t of tagStrings) {
    const lower = t.toLowerCase();
    if (types.includes(lower)) return lower;
  }
  // Check media_name (it sometimes contains the type, e.g. "Rapport")
  if (element?.media_name) {
    const lower = element.media_name.toLowerCase();
    if (types.includes(lower)) return lower;
  }
  // Check title for clues
  if (element?.title) {
    const lower = element.title.toLowerCase();
    if (lower.startsWith('podcast') || lower.startsWith('vidéo') || lower.startsWith('video')) return 'article';
    if (lower.startsWith('rapport')) return 'rapport';
    if (lower.startsWith('communiqué')) return 'article';
  }
  // Default
  return 'autre';
}

function determineNewsletter(element: Record<string, any> | null, tagStrings: string[]): string | null {
  const newsletters = ['Techno-lucides', "Vers l'autonomie et au-delà"];
  // Check tags
  for (const n of newsletters) {
    if (tagStrings.includes(n)) return n;
  }
  // Check media_name (e.g. "Newsletter - Technolucide", "Newsletter - Vers l'autonomie et au-delà")
  if (element?.media_name) {
    if (element.media_name === 'Newsletter - Technolucide') return 'Techno-lucides';
    if (element.media_name === "Newsletter - Vers l'autonomie et au-delà") return "Vers l'autonomie et au-delà";
  }
  // Check title
  if (element?.title) {
    for (const n of newsletters) {
      if (element.title.includes(n)) return n;
    }
    if (element.title.startsWith('Techno-Lucide')) return 'Techno-lucides';
    if (element.title.startsWith("Vers l'autonomie")) return "Vers l'autonomie et au-delà";
  }
  return null;
}

interface TransformedResource {
  id: number | undefined;
  title: string;
  rawDate: string;
  date: string;
  image: string;
  link: string | undefined;
  subInfos: string[];
  tags: string[];
  isBlank: boolean;
  year: number;
  type: string;
  newsletter: string | null;
}

function transformBlogsData(resources: NonNullable<BlogsPageData>): TransformedResource[] {
  return resources.map(resource => {
    const isBlog = !!resource.blog;
    const element = (isBlog ? resource.blog : resource.press_release) as Record<string, any> | null;

    const tagStrings = getTagsAsStrings(element?.tags);

    const publishedDate = element?.published_date ?? '';
    const parsedDate = new Date(publishedDate);

    return {
      id: resource.id,
      title: element?.title ?? '',
      rawDate: publishedDate,
      date: parsedDate instanceof Date && !isNaN(parsedDate.getTime())
        ? parsedDate.toLocaleString(undefined, {dateStyle: 'medium'})
        : '',
      image: element?.thumbnail?.url ?? '/images/dataforgood.svg',
      link: isBlog ? `/blog/${element?.slug ?? ''}` : getPressReleaseLink(element as any),
      subInfos: tagStrings,
      tags: [
        parsedDate instanceof Date && !isNaN(parsedDate.getTime())
          ? parsedDate.toLocaleDateString(undefined, {dateStyle: 'long'})
          : null,
        element?.media_name,
      ].filter(Boolean),
      isBlank: true,
      year: parsedDate instanceof Date && !isNaN(parsedDate.getTime()) ? parsedDate.getFullYear() : 0,
      type: determineType(element, tagStrings),
      newsletter: determineNewsletter(element, tagStrings),
    };
  });
}

type BlogsPageProps = {
  data: BlogsPageData
  pagination: BlogsPageMeta
}

export default function BlogPage({data, pagination: _pagination}: BlogsPageProps) {
  const t = useTranslations('blog');
  const allResources = useMemo(() => transformBlogsData(data), [data]);

  const [searchQuery, setSearchQuery] = useState('');
  const [activeYears, setActiveYears] = useState<string[]>([]);
  const [activeTypes, setActiveTypes] = useState<string[]>([]);
  const [activeNewsletters, setActiveNewsletters] = useState<string[]>([]);
  const [hideFilters, setHideFilters] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 12;

  const filteredResources = useMemo(() => {
    return allResources.filter(resource => {
      if (searchQuery && !resource.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      if (activeYears.length > 0 && !activeYears.some(y => {
        if (resource.year === 0) return false;
        if (y === '2020') return resource.year <= 2020;
        return resource.year === parseInt(y);
      })) {
        return false;
      }
      if (activeTypes.length > 0 && !activeTypes.includes(resource.type)) {
        return false;
      }
      if (activeNewsletters.length > 0) {
        if (!resource.newsletter || !activeNewsletters.includes(resource.newsletter)) {
          return false;
        }
      }
      return true;
    });
  }, [allResources, searchQuery, activeYears, activeTypes, activeNewsletters]);

  const displayResources = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredResources.slice(start, start + pageSize);
  }, [filteredResources, currentPage]);

  const pageCount = Math.ceil(filteredResources.length / pageSize);

  const handleSearchChange = (e: any) => {
    if (searchQuery !== e.value) {
      setSearchQuery(e.value);
      setCurrentPage(1);
    }
  };

  const handleFilterClick = (e: any) => {
    const filterValue = e.value as string;
    const filterType = e.getAttribute('data-type');

    if (filterType === 'year') {
      setActiveYears(prev =>
        prev.includes(filterValue)
          ? prev.filter(v => v !== filterValue)
          : [...prev, filterValue]
      );
    } else if (filterType === 'type') {
      setActiveTypes(prev =>
        prev.includes(filterValue)
          ? prev.filter(v => v !== filterValue)
          : [...prev, filterValue]
      );
    } else if (filterType === 'newsletter') {
      setActiveNewsletters(prev =>
        prev.includes(filterValue)
          ? prev.filter(v => v !== filterValue)
          : [...prev, filterValue]
      );
    }
    setCurrentPage(1);
  };

  const yearFilters = [
    { filterName: '2020 et avant', filterValue: '2020' },
    { filterName: '2021', filterValue: '2021' },
    { filterName: '2022', filterValue: '2022' },
    { filterName: '2023', filterValue: '2023' },
    { filterName: '2024', filterValue: '2024' },
    { filterName: '2025', filterValue: '2025' },
    { filterName: '2026', filterValue: '2026' },
  ];

  const typeFilters = [
    { filterName: 'Podcast', filterValue: 'podcast' },
    { filterName: 'Article', filterValue: 'article' },
    { filterName: 'Rapport', filterValue: 'rapport' },
    { filterName: 'Prise de position', filterValue: 'prise de position' },
    { filterName: 'Autre', filterValue: 'autre' },
  ];

  const newsletterFilters = [
    { filterName: 'Techno-lucides', filterValue: 'Techno-lucides' },
    { filterName: "Vers l'autonomie et au-delà", filterValue: "Vers l'autonomie et au-delà" },
  ];

  const allActiveFilterValues = [...activeYears, ...activeTypes, ...activeNewsletters];

  return (
      <div className="my-lg pt-md">
        <div className="container">
          <Title className="mb-md max-w-5xl" variant="big">
            {t('title')}
          </Title>

          <div className="flex w-full flex-col md:flex-row mb-md gap-xs">
            <div className="flex w-full gap-xs flex-col justify-center md:justify-start">
              <Button
                variant="secondary"
                color="black"
                className={clsx('w-max hover:bg-building', hideFilters ? 'not-rotate-arrow' : 'rotate-arrow')}
                onClick={() => setHideFilters(!hideFilters)}
              >
                Filtres
              </Button>

              <div
                className="flex w-full gap-xs flex-col md:flex-row flex-wrap transition-base"
                style={{ visibility: hideFilters ? 'hidden' : 'visible', opacity: hideFilters ? 0 : 1, height: hideFilters ? 0 : 'auto' }}
              >
                {yearFilters.map((filter, index) => (
                  <Filter
                    key={`year-${index}`}
                    filterName={filter.filterName}
                    filterValue={filter.filterValue}
                    filterType={'year' as any}
                    checked={allActiveFilterValues.includes(filter.filterValue)}
                    onClick={handleFilterClick}
                    variant="light"
                  />
                ))}
                {typeFilters.map((filter, index) => (
                  <Filter
                    key={`type-${index}`}
                    filterName={filter.filterName}
                    filterValue={filter.filterValue}
                    filterType={'type' as any}
                    checked={allActiveFilterValues.includes(filter.filterValue)}
                    onClick={handleFilterClick}
                    variant="light"
                  />
                ))}
                {newsletterFilters.map((filter, index) => (
                  <Filter
                    key={`newsletter-${index}`}
                    filterName={filter.filterName}
                    filterValue={filter.filterValue}
                    filterType={'newsletter' as any}
                    checked={allActiveFilterValues.includes(filter.filterValue)}
                    onClick={handleFilterClick}
                    variant="light"
                  />
                ))}
              </div>
            </div>

            <div className="flex w-full md:w-1/2 justify-center md:justify-end gap-xs flex-row flex-wrap md:pr-10">
              <SearchInput
                searchFilter={searchQuery}
                handleChange={handleSearchChange}
              />
            </div>
          </div>

          <BaseCardsBlock
            blocks={displayResources as any}
            className="my-lg"
          />

          <Pagination
            pageCount={pageCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            className="mt-sm mb-lg mx-auto max-w-max"
            color="black"
          />
        </div>
    </div>
  );
}
