import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import BaseCardsBlock from './BaseCardsBlock';

const meta: Meta<typeof BaseCardsBlock> = {
  title: 'Organisms/BaseCardsBlock',
  component: BaseCardsBlock,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Titre principal du bloc',
    },
    titleLevel: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      description: 'Niveau du titre principal',
    },
    blocks: {
      control: 'object',
      description: 'Tableau de cartes à afficher',
    },
    className: {
      control: 'text',
      description: 'Classes CSS personnalisées',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Données d'exemple pour les blocs de cartes
const sampleBlocks = [
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

const largeBlocks = [
  {
    title: 'Projet de surveillance des océans',
    tags: ['Environnement', 'IA'],
    image: 'https://picsum.photos/400/300?random=5',
    link: '/projets/surveillance-oceans',
    subInfos: ['2024', 'En cours'],
  },
  {
    title: 'Formation Data Science',
    tags: ['Formation', 'Data Science'],
    image: 'https://picsum.photos/400/300?random=6',
    link: '/formations/data-science',
    subInfos: ['Gratuit', 'En ligne'],
  },
  {
    title: 'Hackathon biodiversité',
    tags: ['Événement', 'Biodiversité'],
    image: 'https://picsum.photos/400/300?random=7',
    link: '/evenements/hackathon-biodiversite',
    subInfos: ['15-16 Juin', 'Paris'],
  },
  {
    title: 'Rapport annuel 2023',
    tags: ['Rapport', 'Impact'],
    image: 'https://picsum.photos/400/300?random=8',
    link: '/rapports/2023',
    subInfos: ['2023', 'Disponible'],
  },
  {
    title: 'Projet de lutte contre le changement climatique',
    tags: ['Climat', 'Machine Learning'],
    image: 'https://picsum.photos/400/300?random=9',
    link: '/projets/climat',
    subInfos: ['2024', 'Phase 1'],
  },
  {
    title: 'Formation en éthique de l\'IA',
    tags: ['Formation', 'Éthique', 'IA'],
    image: 'https://picsum.photos/400/300?random=10',
    link: '/formations/ethique-ia',
    subInfos: ['Gratuit', 'En ligne'],
  },
];

export const Default: Story = {
  args: {
    title: 'Actualités récentes',
    titleLevel: 2,
    blocks: sampleBlocks,
  },
};

export const WithoutTitle: Story = {
  args: {
    blocks: sampleBlocks,
  },
};

export const SingleBlock: Story = {
  args: {
    title: 'Projet en vedette',
    titleLevel: 2,
    blocks: [sampleBlocks[0]],
  },
};

export const WithCustomTitleLevel: Story = {
  args: {
    title: 'Toutes nos actualités',
    titleLevel: 1,
    blocks: sampleBlocks,
  },
};

export const LargeCollection: Story = {
  args: {
    title: 'Grande collection de cartes',
    titleLevel: 2,
    blocks: largeBlocks,
  },
};

export const MixedContent: Story = {
  args: {
    title: 'Contenu mixte',
    titleLevel: 2,
    blocks: [
      {
        title: 'Projet court',
        tags: ['Projet'],
        image: 'https://picsum.photos/400/300?random=11',
        link: '/projets/court',
        subInfos: ['2024'],
      },
      {
        title: 'Un titre très long qui peut s\'étendre sur plusieurs lignes pour tester l\'affichage et la gestion de l\'espace dans la carte',
        tags: ['Test', 'Longueur', 'Affichage'],
        image: 'https://picsum.photos/400/300?random=12',
        link: '/test/titre-long',
        subInfos: ['Test', 'Longueur'],
      },
      {
        title: 'Événement avec beaucoup de tags',
        tags: ['Événement', 'International', 'Gratuit', 'En ligne', 'Hybride', 'Innovation'],
        image: 'https://picsum.photos/400/300?random=13',
        link: '/evenements/complexe',
        subInfos: ['15-16 Juin', 'Paris', 'Gratuit', 'En ligne', 'Hybride'],
      },
    ],
  },
};
