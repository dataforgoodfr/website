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

const defaultThematicsCards = [
  {
    title: { 
        children: "Climat et biodiversité",
        props: {
          colors: 'text-black bg-alive',
          className:"drop-shadow-3 drop-shadow-black before:-z-1",
          rotation: -2.58,
          drop: true,
        }
    },
    id: 'climate',
    talk: 'Lutter contre la surpêche et l\'expansion des énergies fossiles, protéger les forêts des coupes rases et des incendies, rendre transparent l\'impact environnemental de l\'alimentation ou de la souffrance animale.',
    image: '/images/thematics-climate.svg',
    imageWidth: 301,
    imageHeight: 401,
    ctaText: "Voir les projets",
    ctaLink: "/projets",
  },
  {
    title: { 
        children: "justice sociale",
        props: {
          colors: 'text-black bg-resistance',
          className:"drop-shadow-3 drop-shadow-black before:-z-1",
          rotation: -2.58,
          drop: true,
        }
    },
    id: 'social',
    talk: 'Lutter contre la surpêche et l\'expansion des énergies fossiles, protéger les forêts des coupes rases et des incendies, rendre transparent l\'impact environnemental de l\'alimentation ou de la souffrance animale.',
    talkOffset: 10,
    image: '/images/thematics-social.png',
    imageWidth: 264,
    imageHeight: 332,
    ctaText: "Voir les projets",
    ctaLink: "/projets",
  },
  {
    title: { 
        children: "Démocratie",
        props: {
          colors: 'text-black bg-blue',
          className:"drop-shadow-3 drop-shadow-black before:-z-1",
          rotation: -2.58,
          drop: true,
        }
    },
    id: 'democracy',
    talk: 'Lutter contre la surpêche et l\'expansion des énergies fossiles, protéger les forêts des coupes rases et des incendies, rendre transparent l\'impact environnemental de l\'alimentation ou de la souffrance animale.',
    talkOffset: 10,
    image: '/images/thematics-democracy.svg',
    imageWidth: 251,
    imageHeight: 318,
    ctaText: "Voir les projets",
    ctaLink: "/projets",
  },
];

export const Default: Story = {
  args: {
    title: 'Trois thèmes',
    subtitle: 'Le tout, sur trois grandes thématiques:',
    titleLevel: 1,
    subtitleLevel: 3,
    thematics: defaultThematicsCards,
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
                rotation: -2.58,
                colors: "text-white bg-building"
            }
        },
        id: 'test2',
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
