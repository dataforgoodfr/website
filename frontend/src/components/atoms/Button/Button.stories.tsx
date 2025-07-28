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
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Bouton Secondaire',
    variant: 'secondary',
  },
};

export const WithLink: Story = {
  args: {
    children: 'Lien vers la page',
    href: '/example',
    variant: 'primary',
  },
};

export const WithClickHandler: Story = {
  args: {
    children: 'Cliquez-moi',
    variant: 'primary',
    onClick: () => console.log('Bouton cliqué !'),
  },
};

export const LongText: Story = {
  args: {
    children: 'Ceci est un bouton avec un texte très long pour tester l\'affichage',
    variant: 'primary',
  },
}; 