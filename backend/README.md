# Backend

Ce dossier contient le backend de l'application construit avec Strapi.

> [!WARNING]  
> Il n'a pas vocation a être souvent modifié sauf en cas d'évolution de la structure du site.

Tous les changements relatifs au contenu peuvent être réalisés directement dans le [CMS hébergé par nos soins](https://strapi.services.dataforgood.fr/admin).

## Objectif

Le backend est responsable de la gestion des données et des API pour le frontend.

## Ajout de Contenu (DEV ONLY)

Pour ajouter du contenu, utilisez l'interface d'administration de Strapi accessible à l'adresse [http://localhost:1337/admin](http://localhost:1337/admin). Vous pouvez créer des modèles de contenu et gérer les données à partir de cette interface.

## Déploiement

L'instance Strapi de production est déployée sur nos serveurs Scaleway.

Etapes de mise en production:

1. Se placer dans le dossier `backend`
2. S'authentifier sur le registry de GitHub `docker login ghcr.io`
3. Construire l'image `docker buildx build -t ghcr.io/dataforgoodfr/strapi:latest --platform linux/amd64 --build-arg NODE_ENV=production .``
4. Push l'image `docker push ghcr.io/dataforgoodfr/strapi:latest`
5. Cloner le repo Ansible, si pas déjà fait, `git clone git@github.com:dataforgoodfr/d4g-ansible.git`
6. Depuis le repo, s'assurer d'avoir suivi le README et d'avoir la branche `main` à jour.
7. Lancer la commande `bin/d4g-ansible playbook playbooks/swarm-production.yml --diff --verbose --tags=strapi`
8. La nouvelle instance est déployée !
