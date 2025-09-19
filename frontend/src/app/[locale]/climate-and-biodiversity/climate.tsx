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
import client from '@/lib/strapi-client';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';

export default function ClimatePage() {
  const t = useTranslations('climate');
  const [partners, setPartners] = useState([]);
  const [kpis, setKpis] = useState([]);
  const [projects, setProjects] = useState([]);
  const [params, setParams] = useState<any>({});

  useEffect(() => {
    const fetchThematicPageData = async () => {
      const thematicsPageData = await client.GET('/climate-and-biodiversity', {
        params: {
          query: {
            populate: {
              banner_image: {
                populate: '*',
              },
              funders: {
                populate: '*',
              },
              projects: {
                populate: '*',
              },
              kpis: {
                populate: '*',
              },
              edito_1: {
                populate: '*',
              },
              edito_2: {
                populate: '*',
              },
            },
          },
        },
      });
      const data = thematicsPageData.data!.data!;
      setProjects(transformProjects(data.projects));
      setKpis(transformKpis(data.kpis));
      setPartners(transformPartners(data.funders));
      setParams({
        bannerImage: data.banner_image,
        edito1: { ...data.edito_1 },
        edito2: { ...data.edito_2 },
      });
    };
    fetchThematicPageData();
  });

  return (
    <>
      <ThematicHeroBlock
        title={t('title')}
        image={params.banner_image?.url || ''}
        className="my-lg"
      />

      <Kpis kpis={kpis} className="my-lg" />

      <EditoCard
        imageText={params.edito1?.imageText || ''}
        image={params.edito1?.image || ''}
        imagePosition="left"
        imageTextRotation={-6}
        className="my-lg container"
      >
        {params.edito1?.content || ''}
      </EditoCard>

      <EditoCard
        imageText={params.edito2?.imageText || ''}
        image={params.edito2?.image || ''}
        className="my-lg container"
      >
        {params.edito2?.content}
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
