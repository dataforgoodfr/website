import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import BaseCard from './BaseCard';

const meta: Meta<typeof BaseCard> = {
  title: 'Molecules/BaseCard',
  component: BaseCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Titre de la carte',
    },
    tags: {
      control: 'object',
      description: 'Tags à afficher',
    },
    image: {
      control: 'text',
      description: 'URL de l\'image de fond',
    },
    link: {
      control: 'text',
      description: 'Lien de navigation',
    },
    subInfos: {
      control: 'object',
      description: 'Informations secondaires à afficher',
    },
    className: {
      control: 'text',
      description: 'Classes CSS personnalisées',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Données d'exemple pour les cartes
const sampleCards = [
  {
    title: 'Nouveau projet de surveillance des océans',
    tags: ['Environnement', 'IA'],
    image: 'https://picsum.photos/400/300?random=1',
    link: '/projets/surveillance-oceans',
    subInfos: ['2024', 'En cours'],
  },
  {
    title: 'Formation Data Science pour tous',
    tags: ['Formation', 'Data Science'],
    image: 'https://picsum.photos/400/300?random=2',
    link: '/formations/data-science',
    subInfos: ['Gratuit', 'En ligne'],
  },
  {
    title: 'Hackathon pour la biodiversité',
    tags: ['Événement', 'Biodiversité'],
    image: 'https://picsum.photos/400/300?random=3',
    link: '/evenements/hackathon-biodiversite',
    subInfos: ['15-16 Juin', 'Paris'],
  },
  {
    title: 'Rapport annuel 2023',
    tags: ['Rapport', 'Impact'],
    image: 'https://picsum.photos/400/300?random=4',
    link: '/rapports/2023',
    subInfos: ['2023', 'Disponible'],
  },
];

export const Default: Story = {
  args: {
    title: 'Nouveau projet de surveillance des océans',
    tags: ['Environnement', 'IA'],
    image: 'https://picsum.photos/400/300?random=1',
    link: '/projets/surveillance-oceans',
    subInfos: ['2024', 'En cours'],
  },
};

export const WithManyTags: Story = {
  args: {
    title: 'Projet multi-thématique complexe',
    tags: ['Environnement', 'IA', 'Machine Learning', 'Big Data', 'Open Source'],
    image: 'https://picsum.photos/400/300?random=5',
    link: '/projets/multi-thematique',
    subInfos: ['2024', 'Phase 2'],
  },
};

export const WithLongTitle: Story = {
  args: {
    title: 'Un titre très long qui peut s\'étendre sur plusieurs lignes pour tester l\'affichage et la gestion de l\'espace dans la carte',
    tags: ['Test', 'Longueur'],
    image: 'https://picsum.photos/400/300?random=6',
    link: '/test/titre-long',
    subInfos: ['Test', 'Longueur'],
  },
};

export const WithManySubInfos: Story = {
  args: {
    title: 'Événement international',
    tags: ['Événement', 'International'],
    image: 'https://picsum.photos/400/300?random=7',
    link: '/evenements/international',
    subInfos: ['15-16 Juin', 'Paris', 'Gratuit', 'En ligne', 'Hybride'],
  },
};

export const SingleTag: Story = {
  args: {
    title: 'Projet simple',
    tags: ['Projet'],
    image: 'https://picsum.photos/400/300?random=8',
    link: '/projets/simple',
    subInfos: ['2024'],
  },
};

export const WithoutSubInfos: Story = {
  args: {
    title: 'Carte sans informations secondaires',
    tags: ['Test'],
    image: 'https://picsum.photos/400/300?random=9',
    link: '/test/sans-subinfos',
    subInfos: [],
  },
};
