import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import CtaWithImage from './CtaWithImage';

const meta: Meta<typeof CtaWithImage> = {
  title: 'Molecules/CtaWithImage',
  component: CtaWithImage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    imagePosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
    },
    title: {
      control: 'object',
    },
    content: {
      control: 'object',
    },
    cta: {
      control: 'object',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: {
      children: 'Titre principal avec rotation',
      variant: 'medium',
      rotation: -4,
    },
    content: {
      text: 'Ceci est un exemple de contenu avec une rotation personnalisée pour démontrer les fonctionnalités du composant.',
      rotation: 2,
      className: 'left-2',
    },
    image: '/images/bg-paper.jpg',
    imagePosition: 'right',
    cta: {
      text: 'Appel à l\'action',
      link: '/example',
      rotation: 1,
      className: 'left-10 -top-2',
    },
  },
};

export const LeftImage: Story = {
  args: {
    ...Default.args,
    imagePosition: 'left',
    title: {
      children: 'Image à gauche',
      rotation: -2,
    },
    content: {
      text: 'Variante avec l\'image positionnée à gauche du contenu.',
      rotation: -1,
      className: 'left-2',
    },
    cta: {
      text: 'Découvrir plus',
      link: '/discover',
      rotation: 3,
    },
  },
};

export const HighRotation: Story = {
  args: {
    ...Default.args,
    title: {
      children: 'Rotations importantes',
      variant: 'medium',
      rotation: -15,
    },
    content: {
      text: 'Exemple avec des rotations plus prononcées pour tester les limites du composant.',
      rotation: 8,
    },
    cta: {
      text: 'Action rotative',
      link: '/rotate',
      rotation: -5,
    },
  },
};

export const NoRotation: Story = {
  args: {
    ...Default.args,
    title: {
      children: 'Sans rotation',
      variant: 'medium',
      rotation: 0,
    },
    content: {
      text: 'Version sans rotation pour un affichage plus classique.',
      rotation: 0,
    },
    cta: {
      text: 'Bouton droit',
      link: '/straight',
      rotation: 0,
    },
  },
};