import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ThematicsCard from './ThematicsCard';

const meta: Meta<typeof ThematicsCard> = {
  title: 'Molecules/ThematicsCard',
  component: ThematicsCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      children: {
          control: {type: 'text'}
      },
      props: {
        colors: {
          control: { type: 'text' },
        },
        className: {
          control: { type: 'text' },
        },
        rotation: {
          control: { type: 'text' },
        }
    }
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
    title: { 
        children: "Climat et biodiversité",
        props: {
          colors: 'text-white bg-building',
          className: 'drop-shadow-1 drop-shadow-black before:-z-1',
          rotation: -2.58,
        }
    },
    talk: 'Lutter contre la surpêche et l\'expansion des énergies fossiles, protéger les forêts des coupes rases et des incendies, rendre transparent l\'impact environnemental de l\'alimentation ou de la souffrance animale.',
    image: 'https://picsum.photos/500/500?random=1',
    imageWidth: 300,
    imageHeight: 300,
  },
};

export const WithCTA: Story = {
  args: {
    title: { 
        children: "justice sociale",
        props: {
          colors: 'text-black bg-resistance',
          className: 'drop-shadow-3 drop-shadow-black before:-z-1',
          rotation: -2.58,
        }
    },
    talk: 'Lutter contre la surpêche et l\'expansion des énergies fossiles, protéger les forêts des coupes rases et des incendies, rendre transparent l\'impact environnemental de l\'alimentation ou de la souffrance animale.',
    image: 'https://picsum.photos/500/500?random=1',
    imageWidth: 300,
    imageHeight: 300,
    ctaText: 'Voir les projets',
    ctaLink: '/presentations/impact-donnees',
  },
};

export const WithCTAWithoutDropTitle: Story = {
  args: {
    title: { 
        children: "un titre long pour dépasser de l'image",
        props: {
          colors: 'text-black bg-resistance',
          rotation: -2.58,
        }
    },
    talk: 'Lutter contre la surpêche et l\'expansion des énergies fossiles, protéger les forêts des coupes rases et des incendies, rendre transparent l\'impact environnemental de l\'alimentation ou de la souffrance animale.',
    image: 'https://picsum.photos/500/500?random=1',
    imageWidth: 300,
    imageHeight: 300,
    ctaText: 'Voir les projets',
    ctaLink: '/presentations/impact-donnees',
  },
};
