'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { Button, EditoCard, LargeTextImage, NewsletterBlock, TalksBlock, ThematicsBlock, Title, ArticleHeroBlock } from '@/components';
import { DonationsData } from './page';

type DonationProps = {
  data: DonationsData
}

export default function DonationsPage({ data }: DonationProps) {
  const t = useTranslations('donations');

  // Execute JavaScript when component mounts
  useEffect(() => {
    // Check if IRaiserFrame is available
    if (typeof window !== 'undefined' && (window as any).IRaiserFrame) {
      (window as any).IRaiserFrame.init();
    }
  }, []);

  const talks = data.actions?.map((action) => {
    return {
      id: (action.id ?? '').toString(),
      type: 'article',
      author: action.title ?? '',
      talk: action.content ?? '',
      image: action.image?.url || "/images/dataforgood.svg",
      ctaText: action.cta?.text,
      ctaLink: action.cta?.link,
    }
  }) ?? [];

  const goals = data.goals?.map((goal) => ({
    title: {
      children: goal.goal_cta?.title ?? '',
      props: {
        colors: `text-black bg-${goal.color}`,
        className: "drop-shadow-3 drop-shadow-black before:-z-1",
        rotation: -2.58,
      }
    },
    id: (goal.id ?? '').toString(),
    talk: goal.goal_cta?.content ?? '',
    image: goal.goal_cta?.image?.url ?? '',
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
        // iframe={<a href="https://soutenir.dataforgood.fr/b/mon-don#iraiser_native"></a>}
        iframe={<a href="https://soutenir.dataforgood.fr/TEST-#iraiser_native"></a>}
        image={data.banner_video?.url}
        background="purple"
        className="my-lg"
        internalClassName='min-h-[850px]'
      />

      <EditoCard contentClassName="whitespace-pre-wrap font-primary text-center md:max-w-[60%] md:mx-auto" className="my-lg">
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
          <Button href={data.donation_cta?.link} color="violet" hasArrow>{data.donation_cta?.text ?? t('cta')}</Button>
        </div>
      </div>

      <NewsletterBlock />
    </>
  );
}
