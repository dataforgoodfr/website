'use client';

import {
  EditoCard,
  Kpis,
  PartnersBlock,
  ThematicHeroBlock,
  ThematicsBlock,
  ThumbnailProjectsBlock,
} from '@/components';
import {
  transformProjects,
  transformKpis,
  transformPartners,
  transformThematics,
} from '@/lib/formatters/thematics';
import { useTranslations } from 'next-intl';
import { ThematicPageData, ThematicsData } from './page';

type ThematicsProps = {
  data: ThematicPageData;
  thematicsData: ThematicsData;
}

export default function SocialPage({ data, thematicsData }: ThematicsProps) {
  const t = useTranslations('social');
  const partners = transformPartners(data.thematic?.funders);
  const kpis = transformKpis(data.thematic?.kpis);
  const projects = transformProjects(data.thematic?.projects);
  const thematics = transformThematics(thematicsData);

  return (
    <>
      <ThematicHeroBlock
        title={t('title')}
        image={data.thematic?.banner_image?.url || ''}
        className="my-lg"
      />

      <Kpis kpis={kpis} className="my-lg" />

      <EditoCard
        imageText={data.thematic?.quote || ''}
        image={data.thematic?.image_1?.url || ''}
        imagePosition="left"
        imageTextRotation={-6}
        className="my-lg container"
        contentClassName="lead"
      >
        {data.thematic?.description || ''}
      </EditoCard>

      <EditoCard
        imageText={data.thematic?.quote2 || ''}
        image={data.thematic?.image_2?.url || ''}
        className="my-lg container"
        contentClassName="lead"
      >
        {data.thematic?.description_2}
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

      <ThematicsBlock
        title={t('thematics')}
        thematics={thematics.map(t => ({ ...t, id: t.id?.toString() || '' }))}
        className="my-lg"
      />
    </>
  );
}
