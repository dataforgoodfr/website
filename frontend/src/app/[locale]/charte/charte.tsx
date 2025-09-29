'use client';

import { useTranslations } from 'next-intl';
import { EditoCard, Title } from '@/components';

export default function ChartePage() {
  const t = useTranslations('charte');

  return (
    <>
      <div className="container my-lg">
        <Title className="mb-md max-w-5xl" variant="medium">
          {t('title')}
        </Title>
      </div>

      <EditoCard className="my-lg" title={t('preamble.title')}>
        <div dangerouslySetInnerHTML={{ __html: t.raw('preamble.content') }} />
        <div className="mt-md p-md bg-blue-50 rounded-lg">
          <div dangerouslySetInnerHTML={{ __html: t.raw('preamble.info') }} />
        </div>
      </EditoCard>

      <EditoCard className="my-lg" title={t('engagement.title')}>
        <p className="mb-md font-medium">{t('engagement.subtitle')}</p>
        
        <div className="space-y-md small-content">
          <div>
            <h3 className="font-semibold mb-sm">{t('engagement.principle1.title')}</h3>
            <div dangerouslySetInnerHTML={{ __html: t.raw('engagement.principle1.content') }} />
          
            <h3 className="font-semibold mb-sm">{t('engagement.principle2.title')}</h3>
            <div dangerouslySetInnerHTML={{ __html: t.raw('engagement.principle2.content') }} />

            <h3 className="font-semibold mb-sm">{t('engagement.principle3.title')}</h3>
            <div dangerouslySetInnerHTML={{ __html: t.raw('engagement.principle3.content') }} />
          
            <h3 className="font-semibold mb-sm">{t('engagement.principle4.title')}</h3>
            <div dangerouslySetInnerHTML={{ __html: t.raw('engagement.principle4.content') }} />
          
            <h3 className="font-semibold mb-sm">{t('engagement.principle5.title')}</h3>
            <div dangerouslySetInnerHTML={{ __html: t.raw('engagement.principle5.content') }} />
          </div>
        </div>
      </EditoCard>

      {/* Guide des bonnes pratiques */}
      <EditoCard className="my-lg" title={t('guide.title')}>
        <div className="mb-md p-md bg-blue-50 rounded-lg">
          <div dangerouslySetInnerHTML={{ __html: t.raw('guide.info') }} />
        </div>
        
        {/* Bonnes pratiques pour tous les membres */}
        <div className="mb-lg">
          <h3 className="text-xl font-semibold mb-md">{t('guide.community.title')}</h3>
          <div className="space-y-md small-content">
            {t.raw('guide.community.practices').map((practice: any, index: number) => (
              <div key={index} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </span>
                <div dangerouslySetInnerHTML={{ __html: practice.content }} />
              </div>
            ))}
          </div>
        </div>

        {/* Bonnes pratiques pour les porteurs de projets */}
        <div>
          <h3 className="text-xl font-semibold mb-md">{t('guide.projectLeaders.title')}</h3>
          <p className="mb-md font-medium">{t('guide.projectLeaders.subtitle')}</p>
          <div className="space-y-md small-content">
            {t.raw('guide.projectLeaders.practices').map((practice: any, index: number) => (
              <div key={index} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </span>
                <div dangerouslySetInnerHTML={{ __html: practice.content }} />
              </div>
            ))}
          </div>
        </div>
      </EditoCard>

    </>
  );
}
