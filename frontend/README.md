# Frontend

Ce dossier contient le frontend de l'application construit avec Next.js.

## Objectif

Le frontend est responsable de l'interface utilisateur et de l'interaction avec le backend Strapi.

## Stack

- Next.js
- TailwindCSS
- ShadCn UI
- Storybook

## Ajout de Contenu

Pour ajouter du contenu, modifiez les composants dans le dossier `src/components` et assurez-vous que les appels API pointent vers le backend.

> [!TIP]
> Si jamais aucune donnée n'est remontée pour un champ populate malgré une requête juste, véfiriez les permissions "Find" côté Strapi

### Structure des dossiers

**Les composants sont en Atomics Design** et doivent être placés dans le bon dossier (`/atoms`, `/molecules` ou `/organisms`).

### Storybook

Storybook est configuré pour développer et tester les composants de manière isolée.

#### Commandes disponibles

```bash
# Démarrer Storybook en mode développement
pnpm run storybook

# Construire Storybook pour la production
pnpm run build-storybook

# Lancer les tests de composants (Vitest + navigateur, voir plus bas)
pnpm run test
pnpm run test:watch

# Lancer les tests unitaires (Node, sans navigateur)
pnpm run test:unit

# Lancer les deux
pnpm run test:all
```

#### Tests unitaires

`pnpm run test:unit` exécute les fichiers `src/**/*.test.ts` en environnement Node, sans navigateur :
quelques centaines de millisecondes, là où les tests de composants demandent une bonne minute. C'est
le bon endroit pour vérifier de la logique pure, par exemple la décision de rendu prise face à une
réponse Strapi (`src/lib/cms-outcome.ts`).

#### Tests de composants

Les stories servent de tests : chaque story est rendue dans un vrai navigateur (Vitest +
Playwright) et vérifiée. Lancer `pnpm run test` depuis `frontend/`.

Si l'exécution échoue avec un message du type :

```
Error: browserType.launch: Host system is missing dependencies to run browsers.
```

c'est que le Chromium embarqué par Playwright ne trouve pas ses bibliothèques système (fréquent
sur NixOS, ou dans une image de CI minimale). Dans ce cas, pointer vers un Chromium déjà installé :

```bash
PLAYWRIGHT_EXECUTABLE_PATH=/chemin/vers/chromium pnpm run test
```

Ce chemin est lu par `vitest.config.ts` et transmis à Playwright.

#### Structure des composants

Les composants sont organisés selon l'Atomic Design dans le dossier `src/components/[atoms|molecules|organisms]/` :

```
src/components/[atoms|molecules|organisms]/
├── Button/
│   ├── Button.tsx
│   └── Button.stories.tsx
└── SocialLink/
    ├── SocialLink.tsx
    └── SocialLink.stories.tsx
```

#### Fonctionnalités

- **Tests d'accessibilité** automatiques avec l'addon a11y
- **Documentation automatique** des composants
- **Tests unitaires** avec Vitest
- **Interface interactive** pour tester les props
- **Support TypeScript** complet
- **Styles Tailwind CSS** intégrés

#### Créer un nouveau composant

1. Créez un dossier pour votre composant dans `src/components/[atoms|molecules|organisms]/`
2. Ajoutez le fichier du composant (ex: `MonComposant.tsx`)
3. Créez le fichier de story (ex: `MonComposant.stories.tsx`)

### Appel au backend

Un client fetch type-safe est utilisé pour les appels au backend. Il permet de générer automatiquement des types TypeScript à partir des schémas OpenAPI de Strapi.
Voici les étapes à suivre:

1. `pnpm frontend generate:types` permet de générer les types TypeScript à partir des schémas OpenAPI de Strapi.
2. Importer le client fetch type-safe dans votre composant. Et l'utiliser comme suit:

```typescript
export default async function Homepage() {
  const { data, error } = await client.GET('/home-page');
  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      Title:
      {data.data?.title}
    </div>
  );
}
```

> [!NOTE]
> Avec le client fetch type-safe, les routes sont typées automatiquement ainsi que les paramètres et les données de réponse.



## Déploiement

Rien pour le moment

## Known gaps

- `fragile` : les redirections du CMS sont figées au `build` (`next.config.mjs`). L'image Docker de la CI est construite sans `STRAPI_API_TOKEN` → elle part sans aucune redirection, avec un simple avertissement.
- `not done` : `docker-compose.yml` vise une cible `frontend` absente du Dockerfile (étapes `base`, `builder`, `runner`) et fournit `STRAPI_URL` au lieu de `STRAPI_API_URL`.
- `not done` : 141 erreurs TypeScript et 43 erreurs ESLint restent ouvertes ; `ignoreBuildErrors` est actif et le workflow `quality.yml` est en `continue-on-error`.
