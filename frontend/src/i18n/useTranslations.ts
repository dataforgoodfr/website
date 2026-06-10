'use client';

import { useMessages } from './provider';
import { resolveMessage } from './translations';

export function useTranslations(namespace: string) {
  const messages = useMessages();

  return (key: string) => {
    const path = `${namespace}.${key}`;
    return resolveMessage(messages, path);
  };
}
