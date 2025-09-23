'use client';

import { useTranslations } from 'next-intl';
import { Button, Title } from '@/components';

export default function NotFoundPage() {
  const t = useTranslations('notFound');

  return (
    <div className="container my-lg pt-lg">
      <div className="max-w-2xl mx-auto text-center">
        <Title variant="medium" className="mb-xs">
          {t('title')}
        </Title>
        <p className="lead mb-md">
          {t('description')}
        </p>
        <Button href="/" variant="primary" color="black">
          {t('backToHome')}
        </Button>
      </div>
    </div>
  );
}
