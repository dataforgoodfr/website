# Projet Monorepo

Ce projet est un monorepo contenant un frontend construit avec Next.js et un backend construit avec Strapi.

## En développement: Travail en local sur la structure du projet

1. **Configuration des Environnements** :

   - Assurez-vous que les fichiers `.env` soient présents dans les dossiers `frontend` et `backend` et correctement configurés avec les variables d'environnement nécessaires, trouvables dans [VaultWarden](http://vaultwarden.services.dataforgood.fr).

2. **Construction et Exécution des Conteneurs Docker** :

   - Exécutez la commande suivante pour lancer le docker compose de développement:

   ```bash
    docker compose watch
   ```

   > [!IMPORTANT]  
   > Docker et docker-compose doivent être installés sur votre machine pour exécuter cette commande. Veuillez vous référer à la documentation officielle de Docker pour plus d'informations.

3. **Accès aux Applications** :

   - Frontend : [http://localhost:3000](http://localhost:3000)
   - Backend : [http://localhost:1337/admin](http://localhost:1337/admin)

   > [!INFO]
   > La documentation Strapi recommande de plutôt éditer la structure des collections en mode dev en local, puis propager les changements à l'instance de production. L'instance de production sert ainsi uniquement pour remplir les collections et ajouter des assets.

## Production: Ajout de Contenu

> [!CAUTION]
> Ceci permet d'ajouter du contenu à l'application en production.

Pour ajouter du contenu, vous pouvez utiliser l'interface d'administration de Strapi accessible à l'adresse [https://strapi.services.dataforgood.fr/admin](https://strapi.services.dataforgood.fr/admin).

## Documentation

- [README backend](backend/README.md)
- [README frontend](frontend/README.md)
