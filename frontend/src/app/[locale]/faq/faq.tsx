'use client';

import { useTranslations } from 'next-intl';
import { Accordion, NewsletterBlock, Title } from '@/components';
import type { AccordionItemData } from '@/components';

export default function FaqPage() {
  const t = useTranslations('faq');

  // Convertir les données de traduction en format AccordionItemData
  const getAccordionItems = (themeIndex: number): AccordionItemData[] => {
    const theme = t.raw(`themes.${themeIndex}`);
    return theme.items.map((item: any) => ({
      id: item.id,
      title: item.title,
      content: <div dangerouslySetInnerHTML={{ __html: item.content }} />
    }));
  };

  // Récupérer les thèmes depuis la traduction
  const themes = t.raw('themes') as any[];

  return (
    <>
      <div className="container my-lg">
        <Title className="mb-md max-w-5xl" variant="big">
          {t('title')}
        </Title>
      </div>

      <div className="container-md">
        {themes.map((theme, index) => (
          <Accordion
            key={theme.title}
            title={theme.title}
            items={getAccordionItems(index)}
            className="mb-8"
          />
        ))}
      </div>

      <NewsletterBlock />
    </>
  );
}
