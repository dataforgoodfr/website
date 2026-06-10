import { readFileSync, existsSync } from 'fs';
import path from 'path';
import { createTranslator, setMessages } from './translations';

const messageFiles = [
  'about', 'blog', 'climate', 'components', 'democracy',
  'donations', 'events', 'home', 'layout', 'positions',
  'projectDetail', 'projects', 'social', 'faq', 'cgu', 'charte', '404',
];

function tryLoadMessageFile(filePath: string): Record<string, unknown> | null {
  try {
    if (existsSync(filePath)) {
      const content = readFileSync(filePath, 'utf-8');
      return JSON.parse(content);
    }
  } catch {
    // ignore
  }
  return null;
}

async function tryLoadMessage(locale: string, file: string): Promise<Record<string, unknown> | null> {
  const cwd = process.cwd();
  const paths = [
    path.join(cwd, 'messages', locale, `${file}.json`),
    path.join(cwd, '..', 'messages', locale, `${file}.json`),
    path.join(cwd, '..', '..', 'messages', locale, `${file}.json`),
  ];
  for (const p of paths) {
    const result = tryLoadMessageFile(p);
    if (result) return result;
  }
  return null;
}

export async function loadAllMessages(locale: string): Promise<Record<string, unknown>> {
  const messages: Record<string, unknown> = {};
  for (const file of messageFiles) {
    const data = await tryLoadMessage(locale, file);
    if (data) {
      Object.assign(messages, data);
    } else {
      console.warn(`Failed to load messages/${locale}/${file}.json`);
    }
  }
  setMessages(messages);
  return messages;
}

export async function getTranslations({
  locale,
  namespace,
}: {
  locale: string;
  namespace: string;
}) {
  const messages = await loadAllMessages(locale);
  return createTranslator(messages, namespace);
}
