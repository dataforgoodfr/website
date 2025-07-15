# Frontend

Ce dossier contient le frontend de l'application construit avec Next.js.

## Objectif

Le frontend est responsable de l'interface utilisateur et de l'interaction avec le backend Strapi.

## Stack

- Next.js
- TailwindCSS
- ShadCn UI

## Ajout de Contenu

Pour ajouter du contenu, modifiez les composants dans le dossier `src/components` et assurez-vous que les appels API pointent vers le backend.

> [!TIP]
> Si jamais aucune donée n'est remontée pour un champ populate malgré une requête juste, véfiriez les permissions "Find" côté Strapi

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
