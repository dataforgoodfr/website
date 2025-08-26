import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import PartnersBlock from './PartnersBlock';

const meta: Meta<typeof PartnersBlock> = {
  title: 'Organisms/PartnersBlock',
  component: PartnersBlock,
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
    partners: {
      control: 'object',
      description: 'Tableau des partenaires à afficher',
    },
    className: {
      control: 'text',
      description: 'Classes CSS additionnelles',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Données de partenaires pour les stories
const samplePartners = [
  {
    name: 'DataForGood',
    description: 'Association qui mobilise des data scientists bénévoles pour des projets d\'intérêt général',
    image: '/images/dataforgood.svg',
    link: 'https://dataforgood.fr',
  },
  {
    name: 'OpenData France',
    description: 'Association qui promeut l\'ouverture et le partage des données publiques',
    image: '/images/bg-paper.jpg',
    link: 'https://opendatafrance.net',
  },
  {
    name: 'Ministère de la Transition Écologique',
    description: 'Ministère en charge de la transition écologique et de la cohésion des territoires',
    image: '/images/marty-1.svg',
    link: 'https://ecologie.gouv.fr',
  },
  {
    name: 'Institut National de la Statistique',
    description: 'L\'Insee collecte, produit, analyse et diffuse des informations sur l\'économie et la société françaises',
    image: '/images/marty-2.svg',
    link: 'https://insee.fr',
  },
];

// Story par défaut
export const Default: Story = {
  args: {
    title: 'Nos Partenaires',
    titleLevel: 2,
    partners: samplePartners,
  },
};

// Story sans titre
export const WithoutTitle: Story = {
  args: {
    partners: samplePartners.slice(0, 2),
  },
};

// Story avec seulement 2 partenaires
export const TwoPartners: Story = {
  args: {
    title: 'Partenaires Principaux',
    titleLevel: 3,
    partners: samplePartners.slice(0, 2),
  },
};

// Story avec beaucoup de partenaires
export const ManyPartners: Story = {
  args: {
    title: 'Tous Nos Partenaires',
    titleLevel: 2,
    partners: [
      ...samplePartners,
      {
        name: 'Tech for Good',
        description: 'Organisation qui promeut l\'utilisation de la technologie pour le bien commun',
        image: '/images/scratch.svg',
        link: 'https://techforgood.fr',
      },
      {
        name: 'Fondation de France',
        description: 'Fondation qui soutient des projets d\'intérêt général',
        image: '/images/bg-paper.jpg',
        link: 'https://fdf.fr',
      },
    ],
  },
};
