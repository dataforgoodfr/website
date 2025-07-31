import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ResultsCard from './ResultsCard';

const meta: Meta<typeof ResultsCard> = {
  title: 'Organisms/ResultsCard',
  component: ResultsCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    titleLevel: {
      control: { type: 'select' },
      options: [1, 2, 3],
    },
    results: {
      control: { type: 'object' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultResults = [
  {
    id: 'realizedProjects',
    text: 'projets réussis',
    number: 130,
    linkLabel: 'Soutenir l’association',
    linkTarget: '/soutenir',
  },
  {
    id: 'activeVolunteers',
    text: 'bénévoles heureux',
    number: 866,
    linkLabel: 'Rejoindre la communauté',
    linkTarget: '/benevoles',
  },
  {
    id: 'partnersOrganizations',
    text: 'association partenaire',
    number: 1320,
    linkLabel: 'Proposer un projet',
    linkTarget: '/partenaires',
  },
];

export const Default: Story = {
  args: {
    title: 'Rejoignez le mouvement !',
    titleLevel: 2,
    results: defaultResults,
  },
};

export const WithH1Title: Story = {
  args: {
    title: 'Rejoignez le mouvement !',
    titleLevel: 1,
    results: defaultResults,
  },
};

export const SingleResult: Story = {
  args: {
    title: 'Rejoignez le mouvement !',
    results: [
      {
        id: 'dataCollected',
        text: 'Données collectées',
        number: 12500,
        linkLabel: 'Voir le rapport',
        linkTarget: '/rapport',
      },
    ],
  },
};
