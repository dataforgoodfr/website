'use client';

import { MembersBlock, NewsSmallBlock, ProjectPresentation, Title } from '@/components';
import { IMembers } from '@/lib/types';
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

      <div className="my-lg container flex flex-col md:flex-row">
        <div className="md:flex-1 md:flex justify-start">
          <Title className="mb-md max-w-4xl content-center" variant="medium">
            {name}
          </Title>
        </div>
      </div>

      <ProjectPresentation
        {...project}
        className='my-lg'
      />

      <NewsSmallBlock
        title={t('news.title')}
        blocks={news}
        className='my-lg'
      />

      <MembersBlock
        title={t('members.title')}
        categories={members}
        className="my-lg"
      />


    </>
  );
}
