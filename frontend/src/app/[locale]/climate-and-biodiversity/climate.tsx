'use client';

import {
  EditoCard,
  Kpis,
  NewsletterBlock,
  PartnersBlock,
  ThematicHeroBlock,
  ThumbnailProjectsBlock,
} from '@/components';
import {
  transformProjects,
  transformKpis,
  transformPartners,
} from '@/lib/formatters/thematics';
import { useTranslations } from 'next-intl';
import { ThematicPageData } from './page';

type ThematicsProps = {
  data: ThematicPageData;
}

export default function SocialPage({ data }: ThematicsProps) {
  const t = useTranslations('climate');
  const partners = transformPartners(data.thematic?.funders);
  const kpis = transformKpis(data.thematic?.kpis);
  const projects = transformProjects(data.thematic?.projects);

  return (
    <>
      <ThematicHeroBlock
        title={t('title')}
        image={data.thematic?.banner_image?.url || ''}
        className="my-lg"
      />

      <Kpis kpis={kpis} className="my-lg" />

      <EditoCard
        imageText={data.thematic?.description || ''}
        image={data.thematic?.image_1?.url || ''}
        imagePosition="left"
        imageTextRotation={-6}
        className="my-lg container"
      >
        {data.thematic?.quote || ''}
      </EditoCard>

      <EditoCard
        imageText={data.thematic?.description_2 || ''}
        image={data.thematic?.image_2?.url || ''}
        className="my-lg container"
      >
        {data.thematic?.quote2}
      </EditoCard>

      <ThumbnailProjectsBlock
        title={t('projectsTitle')}
        projects={projects}
        className="my-lg"
      />

      <PartnersBlock
        title={t('partners')}
        partners={partners}
        className="my-lg"
      />

      <NewsletterBlock />
    </>
  );
}
