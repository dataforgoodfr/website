import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    href: {
      control: { type: 'text' },
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Bouton Principal',
  },
};

export const PrimaryWithoutArrow: Story = {
  args: {
    children: 'Bouton Principal',
    hasArrow: false,
  },
};

export const PrimaryViolet: Story = {
  args: {
    children: 'Bouton Principal',
    color: 'violet',
  },
};

export const PrimaryWhite: Story = {
  args: {
    children: 'Bouton Principal',
    color: 'white',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Bouton Secondaire',
    variant: 'secondary',
  },
};

export const SecondaryViolet: Story = {
  args: {
    children: 'Bouton Secondaire',
    variant: 'secondary',
    color: 'violet',
  },
};

export const SecondaryWhite: Story = {
  args: {
    children: 'Bouton Secondaire',
    variant: 'secondary',
    color: 'white',
  },
};

export const WithLink: Story = {
  args: {
    children: 'Lien vers la page',
    href: '/example',
    variant: 'primary',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Cliquez-moi',
    variant: 'tertiary',
  },
};

export const TertiaryViolet: Story = {
  args: {
    children: 'Cliquez-moi',
    variant: 'tertiary',
    color: 'violet',
  },
};

export const TertiaryWhite: Story = {
  args: {
    children: 'Cliquez-moi',
    variant: 'tertiary',
    color: 'white',
  },
};

export const WithLongText: Story = {
  args: {
    children: 'Bouton avec un texte très long pour tester l\'affichage',
  },
};
