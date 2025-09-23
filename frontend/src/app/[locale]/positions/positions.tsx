'use client';

import { useTranslations } from 'next-intl';
import { BaseCardsBlock, LargeTextImage, NewsletterBlock } from '@/components';
import Animation from './_partials/Animations';
import { PositionsPageData } from './page';

type PositionPageProps = {
  data: PositionsPageData
}

function transformPressReleases(press_releases: NonNullable<PositionsPageData['press_releases']>) {
  return press_releases.map((release) => ({
    title: release.title,
    tags: ['Presse'],
    image: release.thumbnail?.url,
    link: release.article_link,
    subInfos: release.tags,
  }))
}

function transformAnimation(data: NonNullable<PositionsPageData>) {
  return {
    manifestCta: {
      text: data.manifest_cta?.text || "",
      link: data.manifest_cta?.link || "",
    }
  }
}

function transformResources(resources: NonNullable<PositionsPageData['resources']>) {
  return resources.map((resource) => {
    const isBlog = !!resource.blog;

    return {
      id: resource.id,
      title: isBlog ? (resource.blog as { title: string })?.title || '' : (resource.press_release as { title: string })?.title || '',
      tags: ['Ressources'],
      image: isBlog ? resource.blog?.thumbnail?.url || '' : "/images/dataforgood.svg",
      link: isBlog ? `/articles/${resource.blog?.slug || ''}` : (resource.press_release as { article_link: string })?.article_link || '',
      subInfos: isBlog ? (resource.blog as { tags: string[] })?.tags || [] : (resource.press_release as { tags: string[] })?.tags || [],
    }
  })
}

export default function PositionsPage({ data }: PositionPageProps) {
  const t = useTranslations('positions');
  const press = transformPressReleases(data.press_releases ?? []);
  const resources = transformResources(data.resources ?? []);
  const animationData = transformAnimation(data ?? {});

  return (
    <>
      <Animation animationData={animationData} />

      <LargeTextImage
        image={data.testimonial_background?.url}
        citation={data.testimonial?.quote}
        citationAuthor={data.testimonial?.author}
        citationAuthorImage={data.testimonial?.avatar?.url}
        background="purple"
        className="my-lg"
        id="lastContent"
      />

      <BaseCardsBlock
        title={t('press')}
        blocks={press}
        className="my-lg"
      />
      <BaseCardsBlock
        title={t('resources')}
        blocks={resources}
        className="my-lg"
      />

      <NewsletterBlock />
    </>
  );
}
