import { remark } from 'remark';
import html from 'remark-html';
import sanitizeHtml from 'sanitize-html';

export async function getMarkdownContent(rawContent: string) {
  const result = await remark()
    .use(html)
    .process(rawContent);

  const processedContent = result?.toString();
  return processedContent?.length ? sanitizeHtml(processedContent) : '';
}
