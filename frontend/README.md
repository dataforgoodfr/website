# Frontend

Ce dossier contient le frontend de l'application, construit avec Next.js (via [Vinext](https://github.com/nicolechang/vinext/), un re‑implémentation Vite de Next.js compatible Workers/Node.js).

## Objectif

Le frontend est responsable de l'interface utilisateur et de l'interaction avec le backend Strapi.

## Stack

- **Next.js** (App Router) via **Vinext**
- **Vite** 8 (build)
- **React** 19
- **TailwindCSS**
- **ShadCn UI**
- **Storybook**

## Prérequis

- Node.js >= 20
- pnpm (installé via corepack)

```bash
corepack enable
pnpm install
```

## Exécution

```bash
# Développement (Vinext dev server avec HMR)
pnpm dev:vinext

# Build production
pnpm build:vinext

# Serveur production (après build)
pnpm start:vinext
```

Le serveur écoute sur `http://localhost:3000`.

Les **fichiers de traduction** (`messages/`) sont automatiquement copiés dans le dossier de build par la commande `build:vinext`.

### Variables d'environnement

| Variable | Obligatoire | Description |
|---|---|---|
| `STRAPI_API_URL` | Oui (en production) | URL de l'API Strapi |
| `STRAPI_API_TOKEN` | Oui (en production) | Token d'authentification Strapi |
| `BREVO_API_KEY` | Pour la newsletter | Clé API Brevo |

## Internationalisation (i18n)

Le site utilise un système d'i18n custom en remplacement de `next-intl`. Les fichiers de traduction sont dans `messages/fr/*.json`. Les composants clients utilisent `useTranslations` (importé depuis `@/i18n/index`), les composants serveur utilisent `getTranslations` (depuis `@/i18n/server`).

Les URLs françaises (ex: `/faire-un-don`, `/nous-connaitre`) sont automatiquement réécrites vers les routes internes par `src/middleware.js`.

## Ajout de Contenu

Pour ajouter du contenu, modifiez les composants dans le dossier `src/components` et assurez-vous que les appels API pointent vers le backend.

> [!TIP]
> Si jamais aucune donnée n'est remontée pour un champ populate malgré une requête juste, vérifiez les permissions "Find" côté Strapi

### Structure des dossiers

**Les composants sont en Atomic Design** et doivent être placés dans le bon dossier (`/atoms`, `/molecules` ou `/organisms`).

### Storybook

Storybook est configuré pour développer et tester les composants de manière isolée.

#### Commandes disponibles

```bash
# Démarrer Storybook en mode développement
pnpm run storybook

# Construire Storybook pour la production
pnpm run build-storybook
```

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

1. `pnpm generate:types` permet de générer les types TypeScript à partir des schémas OpenAPI de Strapi.
2. Importer le client fetch type-safe dans votre composant. Et l'utiliser comme suit:

```typescript
export default async function Page() {
  const { data, error } = await client.GET('/home-page');
  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      Title: {data.data?.title}
    </div>
  );
}
```

> [!NOTE]
> Avec le client fetch type-safe, les routes sont typées automatiquement ainsi que les paramètres et les données de réponse.

## Déploiement

Le build produit un dossier `dist/standalone/` contenant un serveur Node.js autonome. Le Dockerfile se trouve dans `docker/frontend/Dockerfile`.

```bash
# Construction de l'image Docker
docker build -f docker/frontend/Dockerfile -t frontend .

# Exécution
docker run -p 3000:3000 \
  -e STRAPI_API_URL=https://... \
  -e STRAPI_API_TOKEN=... \
  frontend
```
