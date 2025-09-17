---
slug: pyronear
title: "Pyronear"
header_image_url: img/projects/pyronear2.png
tags: [Saison 12,Saison 10,Saison 8,Saison 6,Environnement,Deep Learning,API,Computer Vision,Rasberry Pi,Dashboarding,Predictive modeling,Web development,Data aggregation,sdg13]
description: "Pyronear a créé au cours des différentes saisons de Data For Good un prototype pour détecter les départs d'incendie dans les forêts"
keywords:
    - Data For Good
sdgs: [sdg13, sdg15, sdg11, sdg17, sdg03]
github: https://github.com/pyronear
website: https://pyronear.org/
slack: 
---

# Pyronear

:::caution ATTENTION

Les détails du projets ne sont pas renseignés, rejoignez le canal Slack ou contactez le porteur de projet pour en savoir plus.

:::

## Description courte
Pyronear est une solution open source de détection précoce des feux de forêt utilisant des stations de surveillance automatisées pour alerter rapidement les pompiers.

## Description longue
Pyronear est une association loi 1901 qui développe un système de surveillance forestière composé de stations de détection équipées de caméras IP offrant une vue à 360° et d'un micro-ordinateur Raspberry Pi. Ces stations capturent des images toutes les 30 secondes, les analysent localement grâce à l'intelligence artificielle pour détecter la fumée, et transmettent automatiquement les alertes aux pompiers via une plateforme dédiée, permettant une détection et une intervention plus rapides sur les départs de feu.

## Description du livrable
Le système Pyronear se compose de trois éléments principaux : les stations de détection physiques installées en forêt (caméras IP et Raspberry Pi), une API de communication pour la transmission des alertes, et une plateforme web permettant aux pompiers de visualiser en temps réel les alertes avec la localisation précise des départs de feu et les images associées. La plateforme affiche notamment une carte interactive avec les positions des tours de surveillance et les cônes de détection.

## Contexte et importance du projet
La lutte contre les feux de forêt est un enjeu majeur qui nécessite une détection rapide pour une intervention efficace. Actuellement, la détection des feux repose principalement sur des observations humaines (randonneurs, habitants) qui présentent plusieurs limitations : un temps de détection variable et imprévisible, des informations souvent imprécises sur la localisation, et une perte de temps significative dans la transmission des informations aux services de secours.

Le système traditionnel suit un processus en plusieurs étapes : observation du feu par un témoin, appel aux services de secours avec des informations souvent imprécises, puis recherche visuelle par les pompiers pour confirmer et localiser le feu. Ce processus peut prendre un temps considérable, alors que la rapidité d'intervention est cruciale dans la lutte contre les incendies forestiers.

Pyronear répond à ces défis en automatisant complètement le processus de détection et d'alerte, avec pour objectif de réduire le temps de détection à moins de 5 minutes. Cette rapidité est essentielle car elle permet de contenir plus facilement les incendies avant qu'ils ne prennent trop d'ampleur, réduisant ainsi les dégâts environnementaux et les risques pour les populations.

Le projet s'inscrit dans une démarche d'intérêt général, étant développé en open source et sur la base du volontariat, permettant ainsi une adoption plus large et une amélioration continue par la communauté.

## Réalisations pendant la saison
Durant la saison d'accélération, l'équipe Pyronear a travaillé sur deux axes majeurs d'amélioration :

1. La localisation précise des départs de feu :
   - Développement d'un système de géolocalisation basé sur l'analyse d'image
   - Création d'un modèle de caméra géolocalisé et orienté
   - Intégration des données topographiques pour améliorer la précision
   - Mise en place de méthodes de correction des erreurs d'orientation des caméras
   - Développement d'algorithmes pour le calcul des intersections entre les rayons de visée et le terrain

2. La "chasse aux éclairs" :
   - Réalisation d'entretiens utilisateurs avec les pompiers pour comprendre leurs besoins
   - Analyse des sources de données disponibles (Météo France, Blitzortung)
   - Développement d'une application web pour visualiser l'historique des impacts de foudre
   - Intégration des données météorologiques pour évaluer les risques
   - Création d'outils pour optimiser la surveillance des zones touchées par la foudre

## Résultats et impact
Le projet a abouti à plusieurs résultats concrets :

- Amélioration significative de la précision de localisation des feux, passant d'une erreur de 925 mètres à 230 mètres grâce aux nouvelles méthodes de correction
- Déploiement du système dans trois départements en France et début d'internationalisation avec une première installation au Chili
- Développement d'une solution pour le suivi des impacts de foudre, deuxième cause majeure des départs de feu après les causes humaines
- Création d'outils permettant aux pompiers de surveiller efficacement les zones à risque jusqu'à 5 jours après un impact de foudre

L'impact du projet se mesure à plusieurs niveaux :
- Réduction significative du temps de détection des feux de forêt (objectif de moins de 5 minutes)
- Amélioration de la précision des informations transmises aux pompiers
- Optimisation des ressources de surveillance grâce à l'automatisation
- Contribution à la préservation des espaces forestiers grâce à une intervention plus rapide
- Création d'une solution open source réplicable dans d'autres régions du monde touchées par les feux de forêt

