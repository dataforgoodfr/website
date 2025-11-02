import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ProjectProcesses from './ProjectProcesses';

const meta: Meta<typeof ProjectProcesses> = {
  title: 'Organisms/ProjectProcesses',
  component: ProjectProcesses,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Process projets.',
      },
    },
  },
  argTypes: {
    title: {
      description: 'Nom du projet',
      control: { type: 'text' },
    },
    titleLevel: {
      description: 'Niveau du titre (h1, h2, h3)',
      control: { type: 'select' },
      options: [1, 2, 3],
    },
    summary: {
      description: 'Résumé du travail réalisé',
      control: { type: 'text' },
    },
    processes: {
      description: 'Description du travail réalisé',
      control: { type: 'text' },
    },
    link: {
      description: 'Lien du repo',
      control: { type: 'text' },
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

export const Default: Story = {
  args: {
  title: 'Processes',
  summary: "Depuis plus d'un an et demie une vingtaine de bénévoles ont travaillé d'arrache pied sur 2 workstream",
  processes: [
    {
      name: "Création de l'architecture de données",
      description: [
        "Création de l'application depuis zéro.",
        "Optimisation de l'architecture des données pour gérer efficacement les informations de 1700 navires",
        "Développement d'une  interface utilisateur intuitive et performante.",
      ],
    },
    {
      name: "Création de l'architecture de données",
      description: [
        "Création de l'application depuis zéro.",
        "Optimisation de l'architecture des données pour gérer efficacement les informations de 1700 navires",
        "Développement d'une  interface utilisateur intuitive et performante.",
        "Développement d'un système de filtres et de calques pour les aires marines protégées.",
      ],
    },
  ],
  link: 'https://github.com/associationbloom/trawlwatch'
}
};

export const WithoutLink: Story = {
  args: {
    title: 'Processes',
    summary: "Depuis plus d'un an et demie une vingtaine de bénévoles ont travaillé d'arrache pied sur 2 workstream",
    processes: [{
      name: "Création de l'architecture de données",
      description: [
        "Création de l'application depuis zéro.",
        "Optimisation de l'architecture des données pour gérer efficacement les informations de 1700 navires",
        "Développement d'une  interface utilisateur intuitive et performante.",
      ],
    }],
  }
};

export const MultipleProcesses: Story = {
  args: {
    title: 'Processes',
    summary: "Depuis plus d'un an et demie une vingtaine de bénévoles ont travaillé d'arrache pied sur 2 workstream",
    processes: [
      {
        name: "Création de l'architecture de données",
        description: [
        "Création de l'application depuis zéro.",
        "Optimisation de l'architecture des données pour gérer efficacement les informations de 1700 navires",
        "Développement d'une  interface utilisateur intuitive et performante.",
        ],
      },
      {
        name: "Création de l'architecture de données",
        description: [
        "Création de l'application depuis zéro.",
        "Optimisation de l'architecture des données pour gérer efficacement les informations de 1700 navires",
        "Développement d'une  interface utilisateur intuitive et performante.",
        ],
      },
      {
        name: "Création de l'architecture de données",
        description: [
        "Création de l'application depuis zéro.",
        "Optimisation de l'architecture des données pour gérer efficacement les informations de 1700 navires",
        "Développement d'une  interface utilisateur intuitive et performante.",
        ],
      },
      {
        name: "Création de l'architecture de données",
        description: [
        "Création de l'application depuis zéro.",
        "Optimisation de l'architecture des données pour gérer efficacement les informations de 1700 navires",
        "Développement d'une  interface utilisateur intuitive et performante.",
        ],
      },
      {
        name: "Création de l'architecture de données",
        description: [
        "Création de l'application depuis zéro.",
        "Optimisation de l'architecture des données pour gérer efficacement les informations de 1700 navires",
        "Développement d'une  interface utilisateur intuitive et performante.",
        ],
      },
    ],
    link: 'https://github.com/associationbloom/trawlwatch'
  }
};