'use client';

import { useTranslations } from 'next-intl';
import { BaseCardsBlock, Pagination, Title } from '@/components';

export default function EventsPage() {
  const t = useTranslations('events');

  const blocksNext = [
    {
      title: 'Évènement 1',
      description: 'Description de l\'évènement 1',
      image: '/images/events/event-1.jpg',
      link: '/events/event-1',
      subInfos: ['2024', 'En cours'],
    },
    {
      title: 'Évènement 2',
      description: 'Description de l\'évènement 2',
      image: '/images/events/event-2.jpg',
      link: '/events/event-2',
      subInfos: ['2024', 'En cours'],
    },
  ];

  const blocksPast = [
    {
      title: 'Évènement 3',
      description: 'Description de l\'évènement 3',
      image: '/images/events/event-3.jpg',
      link: '/events/event-3',
      subInfos: ['2024', 'En cours'],
    },
    {
      title: 'Évènement 4',
      description: 'Description de l\'évènement 4',
      image: '/images/events/event-4.jpg',
      link: '/events/event-4',
      subInfos: ['2024', 'En cours'],
    },
  ];

  return (
    <div className="container my-lg">
      <Title className="mb-md max-w-5xl" variant="big">
        {t('title')}
      </Title>
      <p>
        {t('description')}
      </p>

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
