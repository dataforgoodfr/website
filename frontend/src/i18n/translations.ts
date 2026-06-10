function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  const keys = path.split('.');
  let current: unknown = obj;
  for (const key of keys) {
    if (current === null || current === undefined || typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return typeof current === 'string' ? current : undefined;
}

export function loadMessages(_locale: string): Record<string, unknown> {
  if (typeof globalThis !== 'undefined' && (globalThis as any).__MESSAGES__) {
    return (globalThis as any).__MESSAGES__;
  }
  return {};
}

export function setMessages(msgs: Record<string, unknown>) {
  if (typeof globalThis !== 'undefined') {
    (globalThis as any).__MESSAGES__ = msgs;
  }
}

export function resolveMessage(messages: Record<string, unknown>, path: string): string {
  const value = getNestedValue(messages, path);
  if (value === undefined) {
    console.warn(`Translation missing: ${path}`);
    return path;
  }
  return value as string;
}

export function createTranslator(messages: Record<string, unknown>, namespace: string) {
  return (key: string) => resolveMessage(messages, `${namespace}.${key}`);
}
