'use client';

import { createContext, useContext } from 'react';

const MessagesContext = createContext<Record<string, unknown> | null>(null);

export function useMessages() {
  const ctx = useContext(MessagesContext);
  if (!ctx) {
    console.warn('I18nProvider not found — translations will show keys');
    return {};
  }
  return ctx;
}

export function I18nProvider({
  messages,
  locale,
  children,
}: {
  messages: Record<string, unknown>;
  locale?: string;
  children: React.ReactNode;
}) {
  return (
    <MessagesContext.Provider value={messages}>
      {children}
    </MessagesContext.Provider>
  );
}

export function useLocale() {
  return 'fr';
}
