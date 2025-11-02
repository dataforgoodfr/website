import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ProjectImpactCard from './ProjectImpactCard';
import { ThematicValues } from '@/lib/utils';

const meta: Meta<typeof ProjectImpactCard> = {
  title: 'Molecules/ProjectImpactCard',
  component: ProjectImpactCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Valeur impact',
    },
    text: {
      control: 'text',
      description: 'Description de l\'impact',
    },
    className: {
      control: 'text',
      description: 'Classes CSS personnalisées',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '1700',
    text: 'Une base de données en temps réel qui permet de suivre +1700 bateaux de pêche industriels',
  },
};

export const WithoutText: Story = {
  args: {
    value: '1700',
  },
};

export const WithoutValue: Story = {
  args: {
    text: 'Une base de données en temps réel qui permet de suivre +1700 bateaux de pêche industriels',
  },
};

export const WithStyle: Story = {
  args: {
    value: '1700',
    text: 'Une base de données en temps réel qui permet de suivre +1700 bateaux de pêche industriels',
    className: 'bg-violet-light p-6'
  },
};

export const WithMaxWidth: Story = {
args: {
    value: '1700',
    text: 'Une base de données en temps réel qui permet de suivre +1700 bateaux de pêche industriels',
    className: 'max-w-[600px]'
  },
};