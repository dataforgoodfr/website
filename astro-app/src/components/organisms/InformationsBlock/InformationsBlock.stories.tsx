import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import InformationsBlock from './InformationsBlock';
import { TitleProps } from '@/components';

const meta: Meta<typeof InformationsBlock> = {
  title: 'Organisms/InformationsBlock',
  component: InformationsBlock,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Un composant qui affiche un bloc d\'information avec un titre optionnel et une liste d\'informations avec titre et texte.',
      },
    },
  },
  argTypes: {
    title: {
      description: 'Titre du bloc d\'informations',
      control: { type: 'text' },
    },
    titleLevel: {
      description: 'Niveau du titre (h1, h2, h3)',
      control: { type: 'select' },
      options: [1, 2, 3],
    },
    informations: {
      description: 'Liste des informations à afficher',
      control: { type: 'object' },
    },
    className: {
      description: 'Classes CSS personnalisées',
      control: { type: 'text' },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Données de test pour les informations
const sampleInformations = [
  {
    title: 'Collecter des données au service du plaidoyer',
    text: [
      {
        'info': 'objectiver des faits, mettre en lumière des chiffres pour poser un diagnostiques rigoureux au service du plaidoyer. Par exemple,'
      },
      { 'info': 'en quantifiant la désinformation climatique', 'ctaLink': '/home' },
      { 'info': "dans les médias avec Quota Climat." }
    ]
  },
  {
    title: 'Construire des outils internes',
    text: [
      {
        'info': 'pour permettre aux associations d’être encore plus pertinentes dans leurs actions. Par exemple, en créant un'
      },
      { 'info': 'outil de suivi des plus gros bateaux de pêche', 'ctaLink': '/test' },
      { 'info': "industrielle avec Bloom." }
    ]
  },
  {
    title: 'Concevoir des plateformes de mobilisation citoyenne',
    text: [
      {
        'info': 'des plateformes qui racontent des histoires et qui embarquent la société civile pour bâtir un monde plus juste. Par exemple, en imaginant une plateforme pour'
      },
      { 'info': 'raconter l\'histoire de la surpêche du saumon', 'ctaLink': '/seastemik' },
      { 'info': "avec Seastemik." }
    ]
  },
];

// Données de test pour les informations
const infoWithMultipleLinks = [
  {
    title: 'Collecter des données au service du plaidoyer',
    text: [
      {
        'info': 'objectiver des faits, mettre en lumière des chiffres pour poser un diagnostiques rigoureux au service du plaidoyer. Par exemple,'
      },
      { 'info': 'en quantifiant la désinformation climatique', 'ctaLink': '/home' },
      { 'info': "dans les médias avec Quota Climat." },
      { 'info': 'Ceci est un autre lien.', 'ctaLink': '/home' },
      { 'info': 'Mais ici pas de lien.' },
    ]
  },
  {
    title: 'Construire des outils internes',
    text: [
      {
        'info': 'pour permettre aux associations d’être encore plus pertinentes dans leurs actions. Par exemple, en créant un'
      },
      { 'info': 'outil de suivi des plus gros bateaux de pêche', 'ctaLink': '/test' },
      { 'info': "industrielle avec Bloom." },
      { 'info': 'Ceci est un autre lien.', 'ctaLink': '/home' },
      { 'info': 'Mais ici pas de lien.' },
    ]
  },
];

const withH2Informations = [
  {
    title: 'Collecter des données au service du plaidoyer',
    titleLevel: 2 as TitleProps['level'],
    text: [
      {
        'info': 'objectiver des faits, mettre en lumière des chiffres pour poser un diagnostiques rigoureux au service du plaidoyer. Par exemple,'
      },
      { 'info': 'en quantifiant la désinformation climatique', 'ctaLink': '/home' },
      { 'info': "dans les médias avec Quota Climat." }
    ]
  },
  {
    title: 'Construire des outils internes',
    titleLevel: 2 as TitleProps['level'],
    text: [
      {
        'info': 'pour permettre aux associations d’être encore plus pertinentes dans leurs actions. Par exemple, en créant un'
      },
      { 'info': 'outil de suivi des plus gros bateaux de pêche', 'ctaLink': '/test' },
      { 'info': "industrielle avec Bloom." }
    ]
  },
  {
    title: 'Concevoir des plateformes de mobilisation citoyenne',
    titleLevel: 2 as TitleProps['level'],
    text: [
      {
        'info': 'des plateformes qui racontent des histoires et qui embarquent la société civile pour bâtir un monde plus juste. Par exemple, en imaginant une plateforme pour'
      },
      { 'info': 'raconter l\'histoire de la surpêche du saumon', 'ctaLink': '/seastemik' },
      { 'info': "avec Seastemik." }
    ]
  },
];

const singleInformation = [
  {
    title: 'Concevoir des plateformes de mobilisation citoyenne',
    text: [
      {
        'info': 'des plateformes qui racontent des histoires et qui embarquent la société civile pour bâtir un monde plus juste. Par exemple, en imaginant une plateforme pour'
      },
      { 'info': 'raconter l\'histoire de la surpêche du saumon', 'ctaLink': '/seastemik' },
      { 'info': "avec Seastemik." }
    ]
  },
];

export const Default: Story = {
  args: {
    title: 'Informations',
    titleLevel: 2,
    informations: sampleInformations,
  },
};

export const WithH1Title: Story = {
  args: {
    title: 'Informations',
    titleLevel: 1,
    informations: withH2Informations,
  },
};

export const SingleInformation: Story = {
  args: {
    title: 'Informations',
    titleLevel: 2,
    informations: singleInformation,
  },
};

export const PlusieursLiensDansUnTexte: Story = {
  args: {
    title: 'Informations',
    titleLevel: 2,
    informations: infoWithMultipleLinks,
  },
};

export const WithoutTitle: Story = {
  args: {
    informations: sampleInformations,
  },
};

export const EmptyInformations: Story = {
  args: {
    title: 'Pas d\'informations',
    informations: [],
  },
};