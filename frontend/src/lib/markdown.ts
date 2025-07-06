import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

export async function getMarkdownContent(rawContent: string) {
  const result = unified()
    // Take Markdown as input and turn it into MD syntax tree
    .use(remarkParse)
    // Switch from MD syntax tree to HTML syntax tree (remakr -> rehype)
    .use(remarkRehype, {
      // Necessary for support HTML embeds (see next plugin)
      allowDangerousHtml: true,
    })
    // Add slug id to headings
    .use(rehypeSlug)
    // Add anchor links to headings
    .use(rehypeAutolinkHeadings)
    // Support HTML embedded inside markdown
    .use(rehypeRaw)
    // Serialize syntax tree to HTML
    .use(rehypeStringify)
    // And finally, process the input
    .processSync(rawContent);

  return result.toString();
}
