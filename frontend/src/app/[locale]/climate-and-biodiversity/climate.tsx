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
  const partners = transformPartners(data.funders);
  const kpis = transformKpis(data.kpis);
  const projects = transformProjects(data.projects);

  return (
    <>
      <ThematicHeroBlock
        title={t('title')}
        image={data.banner_image?.url || ''}
        className="my-lg"
      />

      <Kpis kpis={kpis} className="my-lg" />

      <EditoCard
        imageText={data.edito_1?.image_text || ''}
        image={data.edito_1?.image?.url || ''}
        imagePosition="left"
        imageTextRotation={-6}
        className="my-lg container"
      >
        {data.edito_1?.content || ''}
      </EditoCard>

      <EditoCard
        imageText={data.edito_2?.image_text || ''}
        image={data.edito_2?.image?.url || ''}
        className="my-lg container"
      >
        {data.edito_2?.content}
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
