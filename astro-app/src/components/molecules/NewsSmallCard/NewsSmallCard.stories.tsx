import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import NewsSmallCard from './NewsSmallCard';

const meta: Meta<typeof NewsSmallCard> = {
  title: 'Molecules/NewsSmallCard',
  component: NewsSmallCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Titre de la nouvelle',
    },
    tag: {
      control: { type: 'text' },
      description: 'Tag/catégorie de la nouvelle',
    },
    image: {
      control: { type: 'text' },
      description: 'URL de l\'image',
    },
    link: {
      control: { type: 'text' },
      description: 'Lien vers l\'article complet',
    },
    date: {
      control: { type: 'text' },
      description: 'Date de publication',
    },
    className: {
      control: { type: 'text' },
      description: 'Classes CSS personnalisées',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Nouvelle technologie révolutionnaire dans le domaine de la data',
    tag: 'Innovation',
    image: '/images/bg-paper.jpg',
    link: '/news/technologie-revolutionnaire',
    date: '15 DÉC 2024',
  },
};
