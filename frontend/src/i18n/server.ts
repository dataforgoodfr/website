import { readFileSync, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
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

function getSearchPaths(locale: string, file: string): string[] {
  const paths: string[] = [];

  // Paths relative to process.cwd() — works in dev mode
  const cwd = process.cwd();
  for (let i = 0; i <= 4; i++) {
    paths.push(path.join(cwd, ...Array(i).fill('..'), 'messages', locale, `${file}.json`));
  }

  // Paths relative to the module's own location — works in standalone builds
  // regardless of where the server is launched from
  try {
    const moduleDir = path.dirname(fileURLToPath(import.meta.url));
    for (let i = 0; i < 5; i++) {
      paths.push(path.join(moduleDir, ...Array(i).fill('..'), 'messages', locale, `${file}.json`));
    }
  } catch {
    // import.meta.url not available in this environment
  }

  return paths;
}

async function tryLoadMessage(locale: string, file: string): Promise<Record<string, unknown> | null> {
  const paths = getSearchPaths(locale, file);
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
