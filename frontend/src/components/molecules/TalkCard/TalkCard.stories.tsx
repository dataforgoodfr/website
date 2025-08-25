import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import TalkCard from './TalkCard';

const meta: Meta<typeof TalkCard> = {
  title: 'Molecules/TalkCard',
  component: TalkCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    imagePosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
    },
    author: {
      control: { type: 'text' },
    },
    talk: {
      control: { type: 'text' },
    },
    image: {
      control: { type: 'text' },
    },
    ctaText: {
      control: { type: 'text' },
    },
    ctaLink: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    author: 'Marie Dupont',
    talk: 'Comment la data science peut transformer le secteur associatif',
    image: 'https://picsum.photos/500/500?random=1',
  },
};

export const WithCTA: Story = {
  args: {
    author: 'Jean Martin',
    talk: 'L\'impact des données sur la prise de décision',
    image: 'https://picsum.photos/500/500?random=2',
    ctaText: 'Voir la présentation',
    ctaLink: '/presentations/impact-donnees',
  },
};

export const ImageRight: Story = {
  args: {
    author: 'Sophie Bernard',
    talk: 'Méthodes de collecte de données éthiques',
    image: 'https://picsum.photos/500/500?random=3',
    imagePosition: 'right',
    ctaText: 'En savoir plus',
    ctaLink: '/methodes-collecte',
  },
};

export const LongTalkTitle: Story = {
  args: {
    author: 'Pierre Dubois',
    talk: 'Comment optimiser la gestion des bénévoles grâce à l\'analyse prédictive et l\'intelligence artificielle',
    image: 'https://picsum.photos/500/500?random=4',
    ctaText: 'Découvrir',
    ctaLink: '/optimisation-benevoles',
  },
};

export const ShortAuthor: Story = {
  args: {
    author: 'A. L.',
    talk: 'Introduction à la visualisation de données',
    image: 'https://picsum.photos/500/500?random=5',
  },
};
