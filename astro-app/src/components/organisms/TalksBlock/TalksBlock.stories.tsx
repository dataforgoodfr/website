import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import TalksBlock from './TalksBlock';

const meta: Meta<typeof TalksBlock> = {
  title: 'Organisms/TalksBlock',
  component: TalksBlock,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Un composant qui affiche un bloc de talks avec un titre optionnel et une liste de cartes de talks.',
      },
    },
  },
  argTypes: {
    title: {
      description: 'Titre du bloc de talks',
      control: { type: 'text' },
    },
    titleLevel: {
      description: 'Niveau du titre (h1, h2, h3)',
      control: { type: 'select' },
      options: [1, 2, 3],
    },
    talks: {
      description: 'Liste des talks à afficher',
      control: { type: 'object' },
    },
    className: {
      description: 'Classes CSS personnalisées',
      control: { type: 'text' },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Données de test pour les talks
const sampleTalks = [
  {
    author: 'Marie Dupont',
    talk: 'L\'impact des données sur la prise de décision',
    image: '/images/marty-1.svg',
    ctaText: 'Voir la présentation',
    ctaLink: '/talks/impact-donnees',
  },
  {
    author: 'Jean Martin',
    talk: 'Visualisation de données pour tous',
    image: '/images/marty.png',
    ctaText: 'En savoir plus',
    ctaLink: '/talks/visualisation',
  },
  {
    author: 'Sophie Bernard',
    talk: 'Éthique et gouvernance des données',
    image: '/images/scratch.svg',
  },
];

const singleTalk = [
  {
    author: 'Pierre Durand',
    talk: 'Introduction à l\'analyse de données',
    image: '/images/marty-1.svg',
    ctaText: 'Découvrir',
    ctaLink: '/talks/introduction',
  },
];

export const Default: Story = {
  args: {
    title: 'Nos dernières conférences',
    titleLevel: 2,
    talks: sampleTalks,
  },
};

export const WithH1Title: Story = {
  args: {
    title: 'Conférences Data for Good',
    titleLevel: 1,
    talks: sampleTalks,
  },
};

export const WithH3Title: Story = {
  args: {
    title: 'Sessions de formation',
    titleLevel: 3,
    talks: sampleTalks,
  },
};

export const SingleTalk: Story = {
  args: {
    title: 'Talk du mois',
    titleLevel: 2,
    talks: singleTalk,
  },
};

export const WithoutTitle: Story = {
  args: {
    talks: sampleTalks,
  },
};

export const EmptyTalks: Story = {
  args: {
    title: 'Aucun talk disponible',
    talks: [],
  },
};

export const WithCustomClassName: Story = {
  args: {
    title: 'Talks avec style personnalisé',
    titleLevel: 2,
    talks: sampleTalks,
    className: 'bg-gray-50 p-6 rounded-lg',
  },
};

export const LongTitle: Story = {
  args: {
    title: 'Un titre très long qui peut s\'étendre sur plusieurs lignes pour tester le comportement du composant',
    titleLevel: 2,
    talks: sampleTalks,
  },
};

export const TalksWithLongContent: Story = {
  args: {
    title: 'Talks avec contenu étendu',
    titleLevel: 2,
    talks: [
      {
        author: 'Dr. Isabelle Moreau - Directrice de recherche en sciences des données',
        talk: 'Une présentation très détaillée sur l\'utilisation des données dans le secteur de la santé publique et les défis éthiques que cela pose',
        image: '/images/marty-1.svg',
        ctaText: 'Lire l\'article complet',
        ctaLink: '/talks/sante-publique',
      },
      {
        author: 'Prof. Marc Dubois - Université de Paris',
        talk: 'Comment les données peuvent transformer notre compréhension des phénomènes sociaux complexes et améliorer les politiques publiques',
        image: '/images/marty.png',
        ctaText: 'Voir la vidéo',
        ctaLink: '/talks/politiques-publiques',
      },
    ],
  },
};
