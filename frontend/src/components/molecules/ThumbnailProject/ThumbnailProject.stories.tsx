import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ThumbnailProject from './ThumbnailProject';

const meta: Meta<typeof ThumbnailProject> = {
  title: 'Molecules/ThumbnailProject',
  component: ThumbnailProject,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'object',
      description: 'Configuration du titre principal (TiltedTitle)',
    },
    baseline: {
      control: 'text',
      description: 'Sous-titre ou baseline du projet',
    },
    images: {
      control: 'object',
      description: 'Tableau des URLs des images du projet',
    },
    link: {
      control: 'text',
      description: 'Lien vers la page du projet',
    },
    company: {
      control: 'text',
      description: 'Nom de l\'entreprise partenaire',
    },
    description: {
      control: 'text',
      description: 'Description du projet',
    },
    kpis: {
      control: 'object',
      description: 'Tableau des KPIs/impacts du projet',
    },
    className: {
      control: 'text',
      description: 'Classes CSS additionnelles',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultKpis = [
  {
    name: '95%',
    description: 'Taux de satisfaction des utilisateurs',
  },
  {
    name: '500+',
    description: 'Personnes impactées',
  },
  {
    name: '3 mois',
    description: 'Durée du projet',
  },
];

export const Default: Story = {
  args: {
    name: {
      children: 'Projet Data for Good',
      level: 2,
      rotation: -5,
    },
    baseline: 'Améliorer l\'impact social grâce aux données',
    images: [
      'https://picsum.photos/500/300?random=1',
      'https://picsum.photos/500/300?random=2',
    ],
    link: '/projets/data-for-good',
    company: 'Association Data for Good',
    description: 'Un projet innovant qui utilise les données pour résoudre des problèmes sociaux complexes et améliorer la vie des citoyens.',
    kpis: defaultKpis,
  },
};

export const WithoutImages: Story = {
  args: {
    name: {
      children: 'Projet sans images',
      level: 2,
      rotation: -3,
    },
    baseline: 'Un projet simple sans visuels',
    link: '/projets/simple',
    description: 'Description d\'un projet qui n\'a pas d\'images associées.',
  },
};

export const WithoutKpis: Story = {
  args: {
    name: {
      children: 'Projet sans KPIs',
      level: 2,
      rotation: -7,
    },
    baseline: 'Projet en cours de développement',
    images: ['https://picsum.photos/500/300?random=3'],
    link: '/projets/en-cours',
    company: 'Startup Innovante',
    description: 'Un projet qui n\'a pas encore de métriques d\'impact définies.',
  },
};

export const MinimalProject: Story = {
  args: {
    name: {
      children: 'Projet Minimal',
      level: 2,
    },
    link: '/projets/minimal',
  },
};

export const WithSingleImage: Story = {
  args: {
    name: {
      children: 'Projet avec une seule image',
      level: 2,
      rotation: -4,
    },
    baseline: 'Un seul visuel pour ce projet',
    images: ['https://picsum.photos/500/300?random=4'],
    link: '/projets/single-image',
    description: 'Ce projet n\'a qu\'une seule image pour illustrer son contenu.',
  },
};

export const WithManyKpis: Story = {
  args: {
    name: {
      children: 'Projet avec beaucoup de KPIs',
      level: 2,
      rotation: -6,
    },
    baseline: 'Projet très impactant',
    images: [
      'https://picsum.photos/500/300?random=5',
      'https://picsum.photos/500/300?random=6',
    ],
    link: '/projets/impactant',
    company: 'Grande Entreprise',
    description: 'Un projet qui a généré de nombreux impacts mesurables.',
    kpis: [
      {
        name: '1000+',
        description: 'Utilisateurs actifs',
      },
      {
        name: '85%',
        description: 'Taux de rétention',
      },
      {
        name: '50%',
        description: 'Réduction des coûts',
      },
      {
        name: '6 mois',
        description: 'Durée du projet',
      },
      {
        name: '200+',
        description: 'Heures de bénévolat',
      },
    ],
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-12 max-w-4xl">
      <div>
        <h3 className="text-lg font-bold mb-4">Projet Complet</h3>
        <ThumbnailProject
          name={{
            children: 'Projet Data for Good',
            level: 2,
            rotation: -5,
          }}
          baseline="Améliorer l'impact social grâce aux données"
          images={[
            'https://picsum.photos/500/300?random=7',
            'https://picsum.photos/500/300?random=8',
          ]}
          link="/projets/data-for-good"
          company="Association Data for Good"
          description="Un projet innovant qui utilise les données pour résoudre des problèmes sociaux complexes."
          kpis={defaultKpis}
        />
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">Projet Minimal</h3>
        <ThumbnailProject
          name={{
            children: 'Projet Minimal',
            level: 2,
          }}
          link="/projets/minimal"
        />
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">Sans Images</h3>
        <ThumbnailProject
          name={{
            children: 'Projet sans images',
            level: 2,
            rotation: -3,
          }}
          baseline="Un projet simple sans visuels"
          link="/projets/simple"
          description="Description d'un projet qui n'a pas d'images associées."
        />
      </div>
    </div>
  ),
};
