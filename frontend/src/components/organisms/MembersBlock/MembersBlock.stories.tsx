import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import MembersBlock from './MembersBlock';
import { IMembers } from '@/lib/types';

const meta: Meta<typeof MembersBlock> = {
  title: 'Organisms/MembersBlock',
  component: MembersBlock,
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
    categories: {
      control: 'object',
      description: 'Catégories de membres avec leurs titres et membres',
    },
    className: {
      control: 'text',
      description: 'Classes CSS personnalisées',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Données d'exemple pour les catégories de membres
const sampleCategories: IMembers[] = [
  {
    title: 'Équipe de direction',
    members: [
      {
        name: 'Marie Dubois',
        role: 'Directrice Générale',
        image: 'https://picsum.photos/160/209?random=1',
      },
      {
        name: 'Thomas Martin',
        role: 'Directeur Technique',
        image: 'https://picsum.photos/160/209?random=2',
      },
      {
        name: 'Sophie Bernard',
        role: 'Directrice des Opérations',
        image: 'https://picsum.photos/160/209?random=3',
      },
    ],
  },
  {
    title: 'Data Scientists',
    members: [
      {
        name: 'Lucas Moreau',
        role: 'Lead Data Scientist',
        image: 'https://picsum.photos/160/209?random=4',
      },
      {
        name: 'Emma Rousseau',
        role: 'Data Scientist',
        image: 'https://picsum.photos/160/209?random=5',
      },
      {
        name: 'Pierre Durand',
        role: 'Machine Learning Engineer',
        image: 'https://picsum.photos/160/209?random=6',
      },
      {
        name: 'Ana Silva',
        role: 'Data Analyst',
        image: 'https://picsum.photos/160/209?random=7',
      },
    ],
  },
  {
    title: 'Développeurs',
    members: [
      {
        name: 'Maxime Leroy',
        role: 'Lead Developer',
        image: 'https://picsum.photos/160/209?random=8',
      },
      {
        name: 'Julie Moreau',
        role: 'Full-Stack Developer',
        image: 'https://picsum.photos/160/209?random=9',
      },
      {
        name: 'Alexandre Petit',
        role: 'Frontend Developer',
        image: 'https://picsum.photos/160/209?random=10',
      },
    ],
  },
];

export const Default: Story = {
  args: {
    title: 'Notre équipe',
    titleLevel: 2,
    categories: sampleCategories,
  },
};

export const WithoutTitle: Story = {
  args: {
    categories: sampleCategories,
  },
};

export const SingleCategory: Story = {
  args: {
    title: 'Membres actifs',
    titleLevel: 2,
    categories: [sampleCategories[0]],
  },
};

export const WithCustomTitleLevel: Story = {
  args: {
    title: 'L\'équipe Data for Good',
    titleLevel: 1,
    categories: sampleCategories,
  },
};

export const LargeTeam: Story = {
  args: {
    title: 'Grande équipe',
    titleLevel: 2,
    categories: [
      {
        title: 'Direction',
        members: Array.from({ length: 8 }, (_, i) => ({
          name: `Membre ${i + 1}`,
          role: `Rôle ${i + 1}`,
          image: `https://picsum.photos/160/209?random=${i + 20}`,
        })),
      },
      {
        title: 'Technique',
        members: Array.from({ length: 12 }, (_, i) => ({
          name: `Dev ${i + 1}`,
          role: `Développeur ${i + 1}`,
          image: `https://picsum.photos/160/209?random=${i + 30}`,
        })),
      },
    ],
  },
};

export const MixedCategories: Story = {
  args: {
    title: 'Équipe mixte',
    titleLevel: 2,
    categories: [
      {
        title: 'Fondateurs',
        members: [
          {
            name: 'Jean Dupont',
            role: 'Fondateur',
            image: 'https://picsum.photos/160/209?random=40',
          },
        ],
      },
      {
        members: [
          {
            name: 'Membre sans catégorie',
            role: 'Volunteer',
            image: 'https://picsum.photos/160/209?random=41',
          },
        ],
      },
      {
        title: 'Nouveaux membres',
        members: [
          {
            name: 'Nouveau 1',
            role: 'Stagiaire',
            image: 'https://picsum.photos/160/209?random=42',
          },
          {
            name: 'Nouveau 2',
            role: 'Stagiaire',
            image: 'https://picsum.photos/160/209?random=43',
          },
        ],
      },
    ],
  },
};
