import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import EditoCard from './EditoCard';

const meta: Meta<typeof EditoCard> = {
  title: 'Molecules/EditoCard',
  component: EditoCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    titleLevel: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
    },
    titleVariant: {
      control: { type: 'select' },
      options: ['medium', 'big', 'small', 'x-small'],
    },
    imagePosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
    },
    title: {
      control: { type: 'text' },
    },
    content: {
      control: { type: 'text' },
    },
    image: {
      control: { type: 'text' },
    },
    imageAlt: {
      control: { type: 'text' },
    },
    imageText: {
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
    title: 'Titre de l\'édito',
    content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>,
    image: '/images/bg-paper.jpg',
    imageAlt: 'Image de fond papier',
  },
};

export const WithImageLeft: Story = {
  args: {
    title: 'Édito avec image à droite',
    content: <p>Ce composant affiche l'image à droite du contenu. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>,
    image: '/images/bg-paper.jpg',
    imagePosition: 'right',
    imageAlt: 'Image de fond papier',
  },
};

export const WithImageText: Story = {
  args: {
    title: 'Édito avec texte sur image',
    content: <p>Ce composant inclut un texte superposé sur l'image avec un effet de décalage noir. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>,
    image: '/images/bg-paper.jpg',
    imageAlt: 'Image de fond papier',
    imageText: 'Texte sur image',
  },
};

export const WithCallToAction: Story = {
  args: {
    title: 'Édito avec appel à l\'action',
    content: <p>Ce composant inclut un bouton d'appel à l'action. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>,
    image: '/images/bg-paper.jpg',
    imageAlt: 'Image de fond papier',
    ctaText: 'En savoir plus',
    ctaLink: '/about',
  },
};

export const WithoutImage: Story = {
  args: {
    title: 'Édito sans image',
    content: <p>Ce composant n'a pas d'image, seulement le contenu textuel. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>,
  },
};

export const LongContent: Story = {
  args: {
    title: 'Édito avec contenu long',
    content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>,
    image: '/images/bg-paper.jpg',
    imageAlt: 'Image de fond papier',
    ctaText: 'Lire la suite',
    ctaLink: '/blog',
  },
};

export const CompleteExample: Story = {
  args: {
    title: 'Data for Good France',
    titleLevel: 2,
    titleVariant: 'big',
    content: <p>Data for Good France est une association qui mobilise des experts bénévoles de la data science pour résoudre des défis sociaux et environnementaux. Nous accompagnons les organisations à but non lucratif dans leur transformation numérique et leur utilisation des données.</p>,
    image: '/images/dataforgood.svg',
    imagePosition: 'right',
    imageAlt: 'Logo Data for Good France',
    imageText: 'Impact social',
    ctaText: 'Rejoindre l\'association',
    ctaLink: '/volunteer',
  },
};
