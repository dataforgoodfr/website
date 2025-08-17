import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import NewsSmallBlock from './NewsSMallBlock';

const meta: Meta<typeof NewsSmallBlock> = {
  title: 'Organisms/NewsSmallBlock',
  component: NewsSmallBlock,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Titre principal du bloc de nouvelles',
    },
    titleLevel: {
      control: { type: 'select' },
      options: [1, 2, 3],
      description: 'Niveau du titre HTML (h1, h2, h3)',
    },
    blocks: {
      control: { type: 'object' },
      description: 'Tableau des nouvelles à afficher',
    },
    className: {
      control: { type: 'text' },
      description: 'Classes CSS personnalisées',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Données de test pour les nouvelles
const sampleNewsData = [
  {
    title: 'Nouvelle technologie révolutionnaire dans le domaine de la data',
    tag: 'Innovation',
    image: '/images/bg-paper.jpg',
    link: '/news/technologie-revolutionnaire',
    date: '15 DÉC 2024',
  },
  {
    title: 'Impact de l\'IA sur la société moderne',
    tag: 'Intelligence Artificielle',
    image: '/images/bg-paper.jpg',
    link: '/news/impact-ia',
    date: '20 DÉC 2024',
  },
  {
    title: 'Nouvelle approche pour l\'analyse des données',
    tag: 'Data Science',
    image: '/images/bg-paper.jpg',
    link: '/news/nouvelle-approche',
    date: '25 DÉC 2024',
  },
];

export const Default: Story = {
  args: {
    title: 'Dernières nouvelles',
    blocks: sampleNewsData,
  },
};


export const NoTitle: Story = {
  args: {
    blocks: sampleNewsData,
  },
};
