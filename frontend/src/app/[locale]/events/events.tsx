'use client';

import { useTranslations } from 'next-intl';
import { Title, BaseCardsBlock, Pagination } from '@/components';
import client from '@/lib/strapi-client';
import { useEffect, useState } from 'react';

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

export default function EventsPage() {
  const t = useTranslations('events');
  const [events, setEvents] = useState([]);
  const [blocksNext, setBlocksNext] = useState([]);
  const [blocksPast, setBlocksPast] = useState([]);

  useEffect(() => {
    const fetchEventPageData = async () => {
      const eventsData = await client.GET('/evenement', {
        params: {
          query: {
            populate: {
              events: {
                populate: '*',
              },
            },
          },
        },
      });
      setEvents(transformEventsData(eventsData.data!.data!.events))
    };
    fetchEventPageData()
  });

  useEffect(() => {
    setBlocksNext(events.filter(event => new Date(event.date) > new Date()));
    setBlocksPast(events.filter(event => new Date(event.date) <= new Date()));
  }, [events])


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
