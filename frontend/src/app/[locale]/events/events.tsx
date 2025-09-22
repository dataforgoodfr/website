'use client';

import { useTranslations } from 'next-intl';
import { Title, BaseCardsBlock, Pagination } from '@/components';
import { EventsPageData } from './page';

type EventsData = NonNullable<
  NonNullable<Awaited<ReturnType<any>>['data']>['data']
>;

function transformEventsData(events: NonNullable<EventsData['events']>) {
  return events.map(event => ({
    id: event.id,
    title: event.name,
    date: new Date(event.date).toLocaleString(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
    }),
    image: event.image.url,
    onSite: event.on_site,
    link: event.link,
    subInfos: event.tags,
  }));
}

type EventsProps = {
  data: EventsPageData;
};

export default function EventsPage({ data }: EventsProps) {
  const t = useTranslations('events');
  const events = transformEventsData(data.events);
  const blocksNext = events.filter(event => new Date(event.date) > new Date());
  const blocksPast = events.filter(event => new Date(event.date) <= new Date());

  return (
    <div className="container my-lg">
      <Title className="mb-md max-w-5xl" variant="big">
        {t('title')}
      </Title>
      <p>{t('description')}</p>

      <BaseCardsBlock
        title={t('nextEvents')}
        blocks={blocksNext}
        className="my-lg"
      />

      <BaseCardsBlock
        title={t('pastEvents')}
        blocks={blocksPast}
        className="mt-lg mb-sm"
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
