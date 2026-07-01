
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Title, BaseCardsBlock, Pagination, SearchInput, Filter, Button } from '@/components';
import { BlogsPageMeta, BlogsPageData } from './page';
import { useState, useMemo, useCallback } from 'react';
import { getPressReleaseLink } from '@/lib/utils';
import { usePagination } from '@/hooks/usePagination';
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

// Fallback used only while a resource has no `resource_type` set in Strapi.
// Once editors fill the field it becomes the source of truth (see transformBlogsData).
function determineType(element: Record<string, any> | null): string {
  const title = (element?.title ?? '').toLowerCase();
  const media = (element?.media_name ?? '').toLowerCase();
  const url = (element?.article_link ?? '').toLowerCase();

  if (media === 'rapport' || title.startsWith('rapport') || url.endsWith('.pdf')) return 'rapport';
  if (url.includes('/podcast') || url.includes('radiofrance') || title.startsWith('podcast')) return 'podcast';
  if (title.startsWith('vidéo') || title.startsWith('video') || title.startsWith('communiqué')) return 'article';
  // A named press outlet (not our own brand, not a newsletter) => article.
  if (media && media !== 'data for good' && !media.startsWith('newsletter')) return 'article';
  return 'autre';
}

// Fallback used only while a resource has no `newsletter` set in Strapi.
function determineNewsletter(element: Record<string, any> | null): string | null {
  const media = element?.media_name ?? '';
  const title = element?.title ?? '';
  if (media === 'Newsletter - Technolucide' || title.startsWith('Techno-Lucide')) return 'techno_lucides';
  if (media === "Newsletter - Vers l'autonomie et au-delà" || title.startsWith("Vers l'autonomie")) return 'vers_lautonomie';
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
    const isValidDate = !isNaN(parsedDate.getTime());

    return {
      id: resource.id,
      title: element?.title ?? '',
      rawDate: publishedDate,
      date: isValidDate ? parsedDate.toLocaleString(undefined, {dateStyle: 'medium'}) : '',
      image: element?.thumbnail?.url ?? '/images/dataforgood.svg',
      link: isBlog ? `/blog/${element?.slug ?? ''}` : getPressReleaseLink(element as any),
      subInfos: tagStrings,
      tags: [
        isValidDate ? parsedDate.toLocaleDateString(undefined, {dateStyle: 'long'}) : null,
        element?.media_name,
      ].filter(Boolean),
      isBlank: true,
      year: isValidDate ? parsedDate.getFullYear() : 0,
      // `resource_type`/`newsletter` are the source of truth once set in Strapi;
      // fall back to a best-effort guess for rows not yet categorized by editors.
      type: element?.resource_type ?? determineType(element),
      newsletter: element?.newsletter ?? determineNewsletter(element),
    };
  });
}

function getSearchParamValues(params: URLSearchParams, key: string): string[] {
  const val = params.get(key);
  return val ? val.split(',').filter(Boolean) : [];
}

type BlogsPageProps = {
  data: BlogsPageData
  pagination: BlogsPageMeta
}

export default function BlogPage({data, pagination: _pagination}: BlogsPageProps) {
  const t = useTranslations('blog');
  const router = useRouter();
  const searchParams = useSearchParams();
  const allResources = useMemo(() => transformBlogsData(data), [data]);

  // The URL query string is the single source of truth for filters/search, so
  // that shareable links and browser Back/Forward restore the exact state.
  const yearsParam = searchParams.get('years') ?? '';
  const typesParam = searchParams.get('types') ?? '';
  const newslettersParam = searchParams.get('newsletters') ?? '';
  const searchQuery = searchParams.get('search') ?? '';

  const activeYears = useMemo(() => (yearsParam ? yearsParam.split(',').filter(Boolean) : []), [yearsParam]);
  const activeTypes = useMemo(() => (typesParam ? typesParam.split(',').filter(Boolean) : []), [typesParam]);
  const activeNewsletters = useMemo(() => (newslettersParam ? newslettersParam.split(',').filter(Boolean) : []), [newslettersParam]);

  const [hideFilters, setHideFilters] = useState(true);

  const { currentPage, handlePageChange } = usePagination(1);

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

  // Toggle a comma-separated multi-value param, always resetting to page 1.
  const toggleFilterParam = useCallback((key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const current = getSearchParamValues(params, key);
    const next = current.includes(value)
      ? current.filter(v => v !== value)
      : [...current, value];
    if (next.length > 0) params.set(key, next.join(','));
    else params.delete(key);
    params.delete('page');
    router.push(`?${params.toString()}`, { scroll: false });
  }, [router, searchParams]);

  const handleSearchChange = (e: any) => {
    const query = e.value ?? '';
    const params = new URLSearchParams(searchParams.toString());
    if (query) params.set('search', query);
    else params.delete('search');
    params.delete('page');
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const paramKeyByFilterType: Record<string, string> = {
    year: 'years',
    type: 'types',
    newsletter: 'newsletters',
  };

  const handleFilterClick = (e: any) => {
    const filterValue = e.value as string;
    const filterType = e.getAttribute('data-type') as string;
    const key = paramKeyByFilterType[filterType];
    if (key) toggleFilterParam(key, filterValue);
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
    { filterName: 'Prise de position', filterValue: 'prise_de_position' },
    { filterName: 'Autre', filterValue: 'autre' },
  ];

  const newsletterFilters = [
    { filterName: 'Techno-lucides', filterValue: 'techno_lucides' },
    { filterName: "Vers l'autonomie et au-delà", filterValue: 'vers_lautonomie' },
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
            setCurrentPage={handlePageChange}
            className="mt-sm mb-lg mx-auto max-w-max"
            color="black"
          />
        </div>
    </div>
  );
}
