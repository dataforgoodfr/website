'use client';

import { useTranslations } from 'next-intl';
import { Button, EditoCard, LargeTextImage, NewsletterBlock, TalksBlock, ThematicsBlock, Title } from '@/components';
import { DonationsData } from './page';

type DonationProps = {
  data: DonationsData
}

export default function DonationsPage({ data }: DonationProps) {
  const t = useTranslations('donations');

  const talks = data.actions?.map((action) => {
    return {
      id: action.id,
      type: 'article',
      author: action.title,
      talk: action.content,
      image: action.image?.url || "/images/dataforgood.svg",
      ctaText: action.cta?.text,
      ctaLink: action.cta?.link,
    }
  }) ?? [];

  const goals = data.goals?.map((goal) => ({
    title: {
      children: goal.goal_cta?.title,
      props: {
        colors: `text-black bg-${goal.color}`,
        className: "drop-shadow-3 drop-shadow-black before:-z-1",
        rotation: -2.58,
      }
    },
    id: goal.id,
    talk: goal.goal_cta?.content,
    image: goal.goal_cta?.image?.url,
    imageWidth: 301,
    imageHeight: 401,
    ctaText: goal.goal_cta?.cta?.text,
    ctaLink: goal.goal_cta?.cta?.link,
  })) ?? []

  return (
    <>
      <LargeTextImage
        title={data.banner_title ?? t('title')}
        titleLevel={1}
        content="iFrame here"
        image={data.banner_video?.url}
        background="purple"
      />

      <EditoCard className="mt-lg">
        {data.introduction_text}
      </EditoCard>

      <div className="bg-violet-light py-lg">
        <TalksBlock
          title={data.resources_title ?? t('talksTitle')}
          talks={talks}
        />
      </div>

      <div className="my-lg">
        <ThematicsBlock
          title={data.goal_title ?? t('thematicsTitle')}
          thematics={goals}
        />

        <div className="flex justify-center mt-sm">
          <Button href={data.donation_cta} color="violet" hasArrow>{t('cta')}</Button>
        </div>
      </div>

      <NewsletterBlock />
    </>
  );
}
