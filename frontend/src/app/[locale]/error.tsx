'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Title } from '@/components';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations('error');

  useEffect(() => {
    // Le serveur a deja journalise la cause avec l'adresse appelee. Ici, c'est
    // la console du navigateur qui parle, utile pendant le developpement.
    console.error(error);
  }, [error]);

  return (
    <div className="container my-lg pt-lg">
      <div className="max-w-2xl mx-auto text-center">
        <Title variant="medium" className="mb-xs">
          {t('title')}
        </Title>
        <p className="lead mb-md">
          {t('description')}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-sm">
          <Button variant="primary" color="black" onClick={() => reset()}>
            {t('retry')}
          </Button>
          <Button href="/" variant="tertiary" color="black" hasArrow={false}>
            {t('backToHome')}
          </Button>
        </div>
      </div>
    </div>
  );
}
