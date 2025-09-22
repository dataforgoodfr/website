'use client';

import { Banner, MembersBlock, NewsSmallBlock, ProjectCarousel, ProjectImpactBlock, ProjectPresentation, ProjectProcesses, Title } from '@/components';
import { IMembers, IProjectImpacts } from '@/lib/types';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function ProjectDetailPage() {
  const t = useTranslations('projectDetail');
  const { name }: { name: string } = useParams()

  const project = {
    name: name,
    summary: 'TrawlWatch est un outil de surveillance en temps réel des navires de pêche industrielle dans les aires marines protégées pour documenter et combattre la pêche industrielle dans ces zones sensibles.',
    description: [
      "TrawlWatch est une plateforme de surveillance qui permet de suivre l'activité de plus de 1700 navires de pêche industrielle, particulièrement dans les aires marines protégées françaises et européennes. Elle se base sur le modèle du compte « L’avion de Bernard » qui suit l’activité des jets privés.",
      "La plateforme suit les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche dans des zones maritimes protégées (AMP) à partir de données GPS récupérées (via antennes satellites et/ou terrestres)",
      "L'outil combine une interface cartographique interactive avec un système d'alertes en temps réel, permettant à Bloom de documenter la présence de navires industriels dans des zones théoriquement protégées et d'agir rapidement pour la protection des océans.",
      "L'outil combine une interface cartographique interactive avec un système d'alertes en temps réel, permettant à Bloom de documenter la présence de navires industriels dans des zones théoriquement protégées et d'agir rapidement pour la protection des océans."
    ],
    tags: [
      {
        "label": "Saison 12",
        "type": "temporal" as 'temporal' | 'subject'
      },
      {
        "label": "En cours",
        "type": "temporal" as 'temporal' | 'subject'
      },
      {
        "label": "JJ/MM/AAAA - JJ/MM/AAAA",
        "type": "temporal" as 'temporal' | 'subject'
      },
      {
        "label": "Climat et biodiversité",
        "type": "subject" as 'temporal' | 'subject'
      },
      {
        "label": "Outils",
        "type": "subject" as 'temporal' | 'subject'
      },
    ],
    association: {
      logo: '/images/thematics/thematics-social.png',
      altLogo: 'assoLogo',
      summary: "Bloom est une ONG fondée en 2012 par Claire Nouvian qui oeuvre à la protection des océans et des aires marines protégées.",
    }
  };

  const presentationContent = ['En Europe, 1% des plus gros navires pêchent la moitié des poissons et s’approprient le vivant au détriment de la santé de l’océan et des animaux marins, donc du climat, et des pêcheurs côtiers. Le lancement de « Trawl Watch » se complète d’une pétition adressée aux institutions et aux États membres de l’Union européenne contre les méga chalutiers et les navires-usines, à retrouver sur le site internet de Bloom.',
    "Les images sont implacables : elles montrent qu’aucune contrainte ne pèse sur les engins destructeurs dans des zones sensibles. Pourtant, un seul de ces navires pêche jusqu’à 400 000 kilos de poissons en une journée1, soit l’équivalent des captures journalières de 1000 navires de pêche artisanale.",
    "La prise de conscience accrue et la collaboration entre les différentes parties prenantes pourront permettre d’accélérer la transition vers des pratiques de pêche plus durables. Trawl Watch est un exemple concret de la manière dont la technologie et l’innovation peuvent être utilisées pour lutter contre les problèmes environnementaux et sociaux qui touchent notre monde. "
  ]

  const impacts: IProjectImpacts[] = [
    {
      value: '1700',
      text: 'Une base de données en temps réel qui permet de suivre +1700 bateaux de pêche industriels',
    },
    {
      value: '1er',
      text: 'Premier contentieux mené en utilisant les données TrawlWatch.',
    },
    {
      value: '20+',
      text: 'Plus de 20 alertes journalières sur des bateaux et leur franchissement d\'AMP.',
    }
  ]

  const slides = [
    {
      id: 1,
      description: 'Data for Good m\'a permis de mettre mes compétences techniques au service de causes qui me tiennent à cœur. C\'est une expérience enrichissante et humaine.',
      image: '/images/thematics/thematics-social.png',
      altImage: "Random image"
    },
    {
      id: 2,
      description: 'Grâce à cette communauté, j\'ai pu contribuer à des projets d\'impact social tout en développant mes compétences en data science.',
      image: '/images/thematics/thematics-social.png',
      altImage: "Random image"
    },
    {
      id: 3,
      description: 'Une belle aventure humaine et technique. Les projets sont variés et les équipes sont bienveillantes. Je recommande vivement !',
      image: '/images/thematics/thematics-social.png',
      altImage: "Random image"
    },
    {
      id: 4,
      description: 'Data for Good représente exactement ce que je cherchais : utiliser la technologie pour un monde meilleur. Une expérience unique !',
      image: '/images/thematics/thematics-social.png',
      altImage: "Random image"
    },
  ];

  const processes = {
    summary: "Depuis plus d'un an et demie une vingtaine de bénévoles ont travaillé d'arrache pied sur 2 workstream",
    processes: [
      {
        name: "Création de l'architecture de données",
        description: [
          "Création de l'application depuis zéro.",
          "Optimisation de l'architecture des données pour gérer efficacement les informations de 1700 navires",
          "Développement d'une  interface utilisateur intuitive et performante.",
        ],
      },
      {
        name: "Création de l'architecture de données",
        description: [
          "Création de l'application depuis zéro.",
          "Optimisation de l'architecture des données pour gérer efficacement les informations de 1700 navires",
          "Développement d'une  interface utilisateur intuitive et performante.",
          "Développement d'un système de filtres et de calques pour les aires marines protégées.",
        ],
      },
    ],
    link: 'https://github.com/associationbloom/trawlwatch'
  }

  const news = [
    {
      title: 'Nouvelle technologie révolutionnaire dans le domaine de la data',
      tag: 'Innovation',
      image: '/images/bg-paper.jpg',
      link: '/news/technologie-revolutionnaire',
      date: '15 DÉC 2024',
    },
    {
      title: 'Nouvelle technologie révolutionnaire dans le domaine de la data',
      tag: 'Innovation',
      image: '/images/bg-paper.jpg',
      link: '/news/technologie-revolutionnaire',
      date: '15 DÉC 2024',
    },
  ];

  const members: IMembers[] = [
    {
      title: 'Équipe de direction',
      members: [
        {
          name: 'Marie Dubois',
          role: 'Directrice Générale',
          image: '/images/pages/carte-benevoles.png',
        },
        {
          name: 'Thomas Martin',
          role: 'Directeur Technique',
          image: '/images/pages/carte-benevoles.png',
        },
        {
          name: 'Sophie Bernard',
          role: 'Directrice des Opérations',
          image: '/images/pages/carte-benevoles.png',
        },
        {
          name: 'Marie Dubois',
          role: 'Directrice Générale',
          image: '/images/pages/carte-benevoles.png',
        },
        {
          name: 'Thomas Martin',
          role: 'Directeur Technique',
          image: '/images/pages/carte-benevoles.png',
        },
        {
          name: 'Sophie Bernard',
          role: 'Directrice des Opérations',
          image: '/images/pages/carte-benevoles.png',
        },
      ],
    },
  ];

  return (
    <>
      <Banner
        image='/images/pages/carte-benevoles.png'
        altImage='Project banner'
        className="mb-lg "
      />

      <ProjectPresentation
        {...project}
        titleLevel={1}
        className='my-lg'
      />

      <Banner
        image='/images/pages/carte-benevoles.png'
        altImage='Project banner'
        content={presentationContent}
        className="my-lg "
      />

      <ProjectImpactBlock
        title={t('impact.title')}
        titleLevel={1}
        impacts={impacts}
        className='my-lg'
      />

      <ProjectCarousel
        title={t('carousel.title')}
        slides={slides}
        className='my-lg'
      />

      <ProjectProcesses
        {...processes}
        title={t('processes.title')}
        titleLevel={1}
      />

      <NewsSmallBlock
        title={t('news.title')}
        titleLevel={1}
        blocks={news}
        className='my-lg'
      />

      <MembersBlock
        title={t('members.title')}
        titleLevel={1}
        categories={members}
        className="my-lg"
      />


    </>
  );
}
