'use client';

import { useTranslations } from 'next-intl';
import { EditoCard, Title } from '@/components';

export default function CguPage() {
  const t = useTranslations('cgu');

  return (
    <>
      <div className="container my-lg">
        <Title className="mb-md max-w-5xl" variant="medium">
          {t('title')}
        </Title>
      </div>

      <EditoCard className="my-lg" title={t('article1.title')}>
        <div dangerouslySetInnerHTML={{ __html: t.raw('article1.content') }} />
      </EditoCard>

      <EditoCard className="my-lg" title={t('article2.title')}>
        <div dangerouslySetInnerHTML={{ __html: t.raw('article2.content') }} />
      </EditoCard>

      <EditoCard className="my-lg" title={t('article3.title')}>
        <div dangerouslySetInnerHTML={{ __html: t.raw('article3.content') }} />
      </EditoCard>

      <EditoCard className="my-lg" title={t('article4.title')}>
        <div dangerouslySetInnerHTML={{ __html: t.raw('article4.content') }} />
      </EditoCard>

      <EditoCard className="my-lg" title={t('article5.title')}>
        <div dangerouslySetInnerHTML={{ __html: t.raw('article5.content') }} />
      </EditoCard>

      <EditoCard className="my-lg" title={t('article6.title')}>
        <div dangerouslySetInnerHTML={{ __html: t.raw('article6.content') }} />
      </EditoCard>

      <EditoCard className="my-lg" title={t('article7.title')}>
        <div dangerouslySetInnerHTML={{ __html: t.raw('article7.content') }} />
      </EditoCard>
    </>
  );
}
