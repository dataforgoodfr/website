import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Kpis from './Kpis';

const meta: Meta<typeof Kpis> = {
  title: 'Molecules/Kpis',
  component: Kpis,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    kpis: {
      control: 'object',
      description: 'Tableau des KPIs à afficher',
    },
    className: {
      control: 'text',
      description: 'Classes CSS additionnelles pour le conteneur',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultKpis = [
  {
    id: 'projects',
    title: '130',
    description: 'Projets réalisés avec succès',
  },
  {
    id: 'volunteers',
    title: '866',
    description: 'Bénévoles actifs dans la communauté',
  },
  {
    id: 'partners',
    title: '1320',
    description: 'Organisations partenaires',
  },
];

export const Default: Story = {
  args: {
    kpis: defaultKpis,
  },
};

export const TwoKpis: Story = {
  args: {
    kpis: [
      {
        id: 'data',
        title: '12500',
        description: 'Données collectées et analysées',
      },
      {
        id: 'impact',
        title: '95%',
        description: 'Taux de satisfaction des bénéficiaires',
      },
    ],
  },
};

export const SingleKpi: Story = {
  args: {
    kpis: [
      {
        id: 'reach',
        title: '50000+',
        description: 'Personnes touchées par nos actions',
      },
    ],
  },
};

export const FourKpis: Story = {
  args: {
    kpis: [
      {
        id: 'projects',
        title: '130',
        description: 'Projets réalisés avec succès',
      },
      {
        id: 'volunteers',
        title: '866',
        description: 'Bénévoles actifs dans la communauté',
      },
      {
        id: 'partners',
        title: '1320',
        description: 'Organisations partenaires',
      },
      {
        id: 'impact',
        title: '95%',
        description: 'Taux de satisfaction des bénéficiaires',
      },
    ],
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-12">
      <div>
        <h3 className="text-lg font-bold mb-4">3 KPIs (Default)</h3>
        <Kpis kpis={defaultKpis} />
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">2 KPIs</h3>
        <Kpis
          kpis={[
            {
              id: 'data',
              title: '12500',
              description: 'Données collectées et analysées',
            },
            {
              id: 'impact',
              title: '95%',
              description: 'Taux de satisfaction des bénéficiaires',
            },
          ]}
        />
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">1 KPI</h3>
        <Kpis
          kpis={[
            {
              id: 'reach',
              title: '50000+',
              description: 'Personnes touchées par nos actions',
            },
          ]}
        />
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">4 KPIs</h3>
        <Kpis
          kpis={[
            ...defaultKpis,
            {
              id: 'impact',
              title: '95%',
              description: 'Taux de satisfaction des bénéficiaires',
            },
          ]}
        />
      </div>
    </div>
  ),
};
