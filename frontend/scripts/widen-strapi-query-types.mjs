/**
 * Ajuste les types de requete generes par openapi-typescript a partir de la
 * documentation Strapi.
 *
 * Le plugin OpenAPI de Strapi declare `populate` comme une simple chaine de
 * caracteres. L'API accepte en realite la syntaxe imbriquee utilisee partout
 * dans le frontend (`populate: { thematic: { populate: { projects: '*' } } }`),
 * que les types generes rejettent. On elargit donc localement, apres generation.
 *
 * Ce fichier est execute automatiquement par `pnpm generate:types` : la
 * correction survit a toute regeneration.
 */
import fs from 'node:fs';
import path from 'node:path';

const target = path.resolve(import.meta.dirname, '../src/lib/strapi-types.d.ts');
const source = fs.readFileSync(target, 'utf8');

const replacements = [
  [/^(\s*)populate\?: string;$/gm, '$1populate?: string | Record<string, unknown>;'],
  // `fields` est lui aussi passe sous forme de tableau (`fields: ["url"]`).
  [/^(\s*)fields\?: string;$/gm, '$1fields?: string | string[];'],
];

let output = source;
let total = 0;
for (const [pattern, replacement] of replacements) {
  const before = output;
  output = output.replace(pattern, replacement);
  if (before !== output) {
    total += (before.match(pattern) ?? []).length;
  }
}

if (output === source) {
  console.log('widen-strapi-query-types: rien a elargir (types deja a jour).');
}
else {
  fs.writeFileSync(target, output);
  console.log(`widen-strapi-query-types: ${total} declaration(s) elargie(s).`);
}
