'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';
import { Button, EditoCard, TalksBlock, ThematicsBlock, Title, ArticleHeroBlock, LargeTextImageDonation } from '@/components';
import { DonationsData } from './page';

type DonationProps = {
  data: DonationsData
}

export default function DonationsPage({ data }: DonationProps) {
  const t = useTranslations('donations');
  const donationSectionRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const DonationButton = () => {
    return (
      <Button onClick={() => scrollToRef(donationSectionRef)} color="violet" hasArrow>{data.donation_cta?.text ?? t('cta')}</Button>
    )
  }

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
    ctaText: goal.goal_cta?.cta?.text,
    ctaLink: goal.goal_cta?.cta?.link,
  })) ?? []

  return (
    <>
      <LargeTextImageDonation
        title={data.banner_title ?? t('title')}
        titleLevel={1}
        iframe={<div className='p-4 [&>iframe]:rounded-2xl' ref={donationSectionRef}>
          <a href="https://soutenir.dataforgood.fr/native-/#iraiser_native"></a>
        </div>}
        background="purple"
        className="my-lg"
        internalClassName='min-h-[850px]'
      />

      <div className="container-lg mx-auto flex flex-col lg:flex-row items-center gap-12">
        {data.banner_video && <div className="shadow-lg bg-building w-full lg:max-w-60 rotate-[-2deg]" dangerouslySetInnerHTML={{ __html: data.banner_video ?? '' }} />}

        <EditoCard contentClassName="flex-1 md:max-w-[80%] md:mx-auto" className="my-lg">
          <div className="prose prose--big leading-tight text-[1.5rem] text-left font-tertiary" dangerouslySetInnerHTML={{ __html: data.introduction_text ?? '' }} />
          <div className="flex justify-center mt-sm">
            <DonationButton />
          </div>
        </EditoCard>
      </div>

      <div className="bg-violet-light py-lg">
        <TalksBlock
          title={data.resources_title ?? t('talksTitle')}
          talks={talks}
        />
        <div className="flex justify-center mt-sm">
          <DonationButton />
        </div>
      </div>

      <div className="my-lg">
        <ThematicsBlock
          title={data.goal_title ?? t('thematicsTitle')}
          thematics={goals}
        />

        <div className="flex justify-center mt-sm">
          <DonationButton />
        </div >
      </div >
    </>
  );
}
