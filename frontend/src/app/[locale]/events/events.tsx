'use client';

import { useTranslations } from 'next-intl';
import { Title, BaseCardsBlock, Pagination } from '@/components';
import { EventsPageData, EventsPageMeta } from './page';
import { usePagination } from '@/hooks/usePagination';

function transformEventsData(events: NonNullable<EventsPageData>) {
  return events.map(event => {
    return ({
      id: event.id,
      title: event.name,
      rawDate: event.date,
      date: new Date(event.date || '').toLocaleString(undefined, { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric' }),
      image: event.image?.url,
      onSite: event.on_site,
      link: event.link,
      isBlank: true,
      subInfos: event.tags,
      tags: [new Date(event.date || '').toLocaleDateString(undefined, {dateStyle: 'medium'}), new Date(event.date || '').toLocaleTimeString(undefined, { timeStyle: 'short'}), event.on_site ? "Sur site" : "En ligne"]
    })
  });
}


type EventsProps = {
  data: EventsPageData;
  pagination: EventsPageMeta;
  currentPage: number;
};

export default function EventsPage({ data, pagination, currentPage }: EventsProps) {
  const t = useTranslations('events');
  const events = transformEventsData(data);
  const blocksNext = events.filter(event => new Date(event.rawDate) > new Date());
  const blocksPast = events.filter(event => new Date(event.rawDate) <= new Date());

  const { handlePageChange } = usePagination(currentPage);

  return (
    <div className="my-lg pt-md">
      <div className="container">
        <p className="h2-like">{t('description')}</p>
      </div>

      {blocksNext.length > 0 && (
        <BaseCardsBlock
          title={t('nextEvents')}
          blocks={blocksNext}
          className="my-lg"
        />
      )}

      {blocksPast.length > 0 && (
        <BaseCardsBlock
          title={t('pastEvents')}
          blocks={blocksPast}
          className="mt-lg mb-sm"
        />
      )}

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
