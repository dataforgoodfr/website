import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ArticleHeroBlock from './ArticleHeroBlock';

const meta: Meta<typeof ArticleHeroBlock> = {
  title: 'Organisms/ArticleHeroBlock',
  component: ArticleHeroBlock,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    image: {
      control: 'text',
      description: 'URL de l\'image de l\'article',
    },
    title: {
      control: 'text',
      description: 'Titre de l\'article',
    },
    introduction: {
      control: 'text',
      description: 'Introduction de l\'article (optionnel)',
    },
    date: {
      control: 'text',
      description: 'Date de publication',
    },
    readTime: {
      control: 'text',
      description: 'Temps de lecture estimé (optionnel)',
    },
    author: {
      control: 'object',
      description: 'Informations sur l\'auteur (optionnel)',
    },
    className: {
      control: 'text',
      description: 'Classes CSS additionnelles',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1000&h=400&fit=crop',
    title: 'L\'intelligence artificielle au service de la transition écologique',
    date: '15 janvier 2024',
    readTime: '5 min de lecture',
    author: {
      name: 'Marie Dupont',
      link: '/auteur/marie-dupont',
    },
  },
};

export const WithIntroduction: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&h=400&fit=crop',
    title: 'Comment les données peuvent transformer notre démocratie',
    introduction: 'Une exploration approfondie des enjeux de la démocratie numérique et de l\'utilisation des données pour renforcer la participation citoyenne.',
    date: '22 janvier 2024',
    readTime: '8 min de lecture',
    author: {
      name: 'Jean Martin',
      link: '/auteur/jean-martin',
    },
  },
};

export const WithoutAuthor: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1000&h=400&fit=crop',
    title: 'Les défis de la data science pour le bien commun',
    date: '30 janvier 2024',
    readTime: '6 min de lecture',
  },
};

export const WithoutImage: Story = {
  args: {
    title: 'L\'éthique des algorithmes : un enjeu majeur pour notre société',
    introduction: 'Réflexion sur les implications éthiques de l\'intelligence artificielle et des algorithmes dans notre quotidien.',
    date: '5 février 2024',
    readTime: '10 min de lecture',
    author: {
      name: 'Sophie Bernard',
      link: '/auteur/sophie-bernard',
    },
  },
};

export const Minimal: Story = {
  args: {
    title: 'Article sans métadonnées',
    date: '1er février 2024',
  },
};

export const LongTitle: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1000&h=400&fit=crop',
    title: 'L\'avenir de la data science : comment les nouvelles technologies transforment notre approche de l\'analyse des données et de la prise de décision',
    introduction: 'Une analyse complète des tendances émergentes en data science et de leur impact sur les organisations modernes.',
    date: '10 février 2024',
    readTime: '12 min de lecture',
    author: {
      name: 'Dr. Alexandre Moreau',
      link: '/auteur/alexandre-moreau',
    },
  },
};
