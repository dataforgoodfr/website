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
