import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ThematicsBlock from './ThematicsBlock';

const meta: Meta<typeof ThematicsBlock> = {
  title: 'Organisms/ThematicsBlock',
  component: ThematicsBlock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
        control: { type: 'text'},
    },
    titleLevel: {
      control: { type: 'select' },
      options: [1, 2, 3],
    },
    subtitle: {
        control: { type: 'text'},
    },
    subtitleLevel: {
      control: { type: 'select' },
      options: [1, 2, 3],
    },
    thematics: {
      control: { type: 'object' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultThematics = [
  {
    title: { 
        children: "justice sociale",
        props: {
            color: 'white',
            bgColor: 'building',
            rotation: -2.58,
            drop: true,
        }
    },
    talk: 'Lutter contre la surpêche et l\'expansion des énergies fossiles, protéger les forêts des coupes rases et des incendies, rendre transparent l\'impact environnemental de l\'alimentation ou de la souffrance animale.',
    image: 'https://picsum.photos/500/500?random=1',
    imageWidth: 100,
    imageHeight: 400,
    ctaText: 'Voir les projets',
    ctaLink: '/presentations/impact-donnees',
  },
  {
    title: { 
        children: "justice sociale",
        props: {
            color: 'white',
            bgColor: 'building',
            rotation: -2.58,
            drop: true,
        }
    },
    talk: 'Lutter contre la surpêche et l\'expansion des énergies fossiles, protéger les forêts des coupes rases et des incendies, rendre transparent l\'impact environnemental de l\'alimentation ou de la souffrance animale.',
    image: 'https://picsum.photos/500/500?random=2',
    imageWidth: 400,
    imageHeight: 100,
    ctaText: 'Voir les projets',
    ctaLink: '/presentations/impact-donnees',
  },
  {
    title: { 
        children: "justice sociale",
        props: {
            color: 'white',
            bgColor: 'building',
            rotation: -2.58,
            drop: true,
        }
    },
    talk: 'Lutter contre la surpêche et l\'expansion des énergies fossiles, protéger les forêts des coupes rases et des incendies, rendre transparent l\'impact environnemental de l\'alimentation ou de la souffrance animale.',
    image: 'https://picsum.photos/500/500?random=3',
    imageWidth: 300,
    imageHeight: 300,
    ctaText: 'Voir les projets',
    ctaLink: '/presentations/impact-donnees',
  },
];

export const Default: Story = {
  args: {
    title: 'Trois thèmes',
    subtitle: 'Le tout, sur trois grandes thématiques:',
    titleLevel: 1,
    subtitleLevel: 3,
    thematics: defaultThematics,
  },
};

export const WithH1Title: Story = {
  args: {
    title: 'Trois thèmes',
    subtitle: 'Le tout, sur trois grandes thématiques:',
    titleLevel: 1,
    subtitleLevel: 3,
    thematics: defaultThematics,
  },
};

export const SingleResult: Story = {
  args: {
    title: 'Trois thèmes',
    subtitle: 'Le tout, sur trois grandes thématiques:',
    titleLevel: 1,
    subtitleLevel: 3,
    thematics: [
      {
        title: { 
            children: "justice sociale",
            props: {
                color: 'white',
                bgColor: 'building',
                rotation: -2.58,
                drop: true,
            }
        },
        talk: 'Lutter contre la surpêche et l\'expansion des énergies fossiles, protéger les forêts des coupes rases et des incendies, rendre transparent l\'impact environnemental de l\'alimentation ou de la souffrance animale.',
        image: 'https://picsum.photos/500/500?random=4',
        imageWidth: 400,
        imageHeight: 100,
        ctaText: 'Voir les projets',
        ctaLink: '/presentations/impact-donnees',
    },
    ],
  },
};
