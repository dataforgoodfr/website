import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import PartnerCard from './PartnerCard';

const meta: Meta<typeof PartnerCard> = {
  title: 'Molecules/PartnerCard',
  component: PartnerCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Nom du partenaire',
    },
    titleLevel: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      description: 'Niveau du titre',
    },
    description: {
      control: 'text',
      description: 'Description du partenaire',
    },
    image: {
      control: 'text',
      description: 'URL de l\'image du partenaire',
    },
    link: {
      control: 'text',
      description: 'Lien vers le site du partenaire',
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
    name: 'DataForGood',
    description: 'Association qui mobilise des data scientists bénévoles pour des projets d\'intérêt général',
    image: '/images/dataforgood.svg',
    link: 'https://dataforgood.fr',
  },
};

// Story avec un partenaire sans description
export const WithoutDescription: Story = {
  args: {
    name: 'OpenData France',
    image: '/images/bg-paper.jpg',
    link: 'https://opendatafrance.net',
  },
};

// Story avec un titre de niveau 2
export const LargeTitle: Story = {
  args: {
    name: 'Ministère de la Transition Écologique',
    description: 'Ministère en charge de la transition écologique et de la cohésion des territoires',
    image: '/images/marty-1.svg',
    link: 'https://ecologie.gouv.fr',
  },
};

// Story avec un partenaire avec une description longue
export const LongDescription: Story = {
  args: {
    name: 'Institut National de la Statistique et des Études Économiques',
    description: 'L\'Insee collecte, produit, analyse et diffuse des informations sur l\'économie et la société françaises sur l\'ensemble du territoire national. Il coordonne le système statistique public et représente la France auprès des instances statistiques internationales.',
    image: '/images/marty.png',
    link: 'https://insee.fr',
  },
};

// Story avec une image personnalisée
export const CustomImage: Story = {
  args: {
    name: 'Tech for Good',
    description: 'Organisation qui promeut l\'utilisation de la technologie pour le bien commun',
    image: '/images/scratch.svg',
    link: 'https://techforgood.fr',
  },
};

