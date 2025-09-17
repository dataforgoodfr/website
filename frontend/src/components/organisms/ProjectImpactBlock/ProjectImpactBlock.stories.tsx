import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ProjectImpactBlock from './ProjectImpactBlock';

const meta: Meta<typeof ProjectImpactBlock> = {
  title: 'Organisms/ProjectImpactBlock',
  component: ProjectImpactBlock,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Titre principal du bloc de partenaires',
    },
    titleLevel: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      description: 'Niveau du titre principal',
    },
    impacts: {
      control: 'object',
      description: 'Tableau des impacts à afficher',
    },
    className: {
      control: 'text',
      description: 'Classes CSS additionnelles',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story par défaut
export const Default: Story = {
  args: {
    title: 'Impact',
    impacts: [
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
  }
};

// Story sans titre
export const WithoutTitle: Story = {
  args: {
    impacts: [
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
  }
};

// Story avec seulement 2 partenaires
export const WithLessImpact: Story = {
  args: {
    title: 'Impact',
    impacts: [
      {
        value: '1700',
        text: 'Une base de données en temps réel qui permet de suivre +1700 bateaux de pêche industriels',
      },
      {
        value: '1er',
        text: 'Premier contentieux mené en utilisant les données TrawlWatch.',
      },
    ]
  }
};