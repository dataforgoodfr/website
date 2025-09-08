import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import type { TitleProps } from '@/components/atoms';
import ThumbnailProjectsBlock from './ThumbnailProjectsBlock';

const meta: Meta<typeof ThumbnailProjectsBlock> = {
  title: 'Organisms/ThumbnailProjectsBlock',
  component: ThumbnailProjectsBlock,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Titre principal de la section',
    },
    titleLevel: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      description: 'Niveau du titre (h1, h2, h3, etc.)',
    },
    projects: {
      control: 'object',
      description: 'Tableau des projets à afficher',
    },
    className: {
      control: 'text',
      description: 'Classes CSS additionnelles',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProjects = [
  {
    name: {
      children: 'Projet Data for Good',
      level: 2 as TitleProps['level'],
      rotation: -5,
    },
    baseline: 'Améliorer l\'impact social grâce aux données',
    images: [
      'https://picsum.photos/500/300?random=1',
      'https://picsum.photos/500/300?random=2',
    ],
    link: '/projets/data-for-good',
    company: 'Association Data for Good',
    description: 'Un projet innovant qui utilise les données pour résoudre des problèmes sociaux complexes.',
    kpis: [
      {
        name: '95%',
        description: 'Taux de satisfaction des utilisateurs',
      },
      {
        name: '500+',
        description: 'Personnes impactées',
      },
    ],
  },
  {
    name: {
      children: 'Projet Climat',
      level: 2 as TitleProps['level'],
      rotation: -3,
    },
    baseline: 'Lutter contre le changement climatique',
    images: ['https://picsum.photos/500/300?random=3'],
    link: '/projets/climat',
    company: 'ONG Environnementale',
    description: 'Un projet dédié à la sensibilisation et à l\'action contre le réchauffement climatique.',
    kpis: [
      {
        name: '1000+',
        description: 'Arbres plantés',
      },
      {
        name: '50%',
        description: 'Réduction des émissions',
      },
    ],
  },
  {
    name: {
      children: 'Projet Démocratie',
      level: 2 as TitleProps['level'],
      rotation: -7,
    },
    baseline: 'Renforcer la participation citoyenne',
    images: [
      'https://picsum.photos/500/300?random=4',
      'https://picsum.photos/500/300?random=5',
    ],
    link: '/projets/democratie',
    company: 'Collectif Citoyen',
    description: 'Un projet qui encourage la participation démocratique et l\'engagement citoyen.',
    kpis: [
      {
        name: '200+',
        description: 'Citoyens mobilisés',
      },
      {
        name: '15',
        description: 'Propositions soumises',
      },
    ],
  },
];

export const Default: Story = {
  args: {
    title: 'Nos Projets Récents',
    titleLevel: 2,
    projects: defaultProjects,
  },
};

export const WithH1Title: Story = {
  args: {
    title: 'Découvrez nos Projets',
    titleLevel: 1,
    projects: defaultProjects,
  },
};

export const SingleProject: Story = {
  args: {
    title: 'Projet en Vedette',
    titleLevel: 2,
    projects: [
      {
        name: {
          children: 'Projet Unique',
          level: 2 as TitleProps['level'],
          rotation: -4,
        },
        baseline: 'Un projet exceptionnel',
        images: ['https://picsum.photos/500/300?random=6'],
        link: '/projets/unique',
        company: 'Startup Innovante',
        description: 'Un projet qui se démarque par son innovation et son impact.',
        kpis: [
          {
            name: '99%',
            description: 'Taux de réussite',
          },
        ],
      },
    ],
  },
};

export const ManyProjects: Story = {
  args: {
    title: 'Tous nos Projets',
    titleLevel: 2,
    projects: [
      ...defaultProjects,
      {
        name: {
          children: 'Projet Éducation',
          level: 2 as TitleProps['level'],
          rotation: -2,
        },
        baseline: 'Améliorer l\'accès à l\'éducation',
        images: ['https://picsum.photos/500/300?random=7'],
        link: '/projets/education',
        company: 'Fondation Éducative',
        description: 'Un projet qui vise à démocratiser l\'accès à l\'éducation de qualité.',
        kpis: [
          {
            name: '5000+',
            description: 'Étudiants aidés',
          },
          {
            name: '100',
            description: 'Écoles équipées',
          },
        ],
      },
      {
        name: {
          children: 'Projet Santé',
          level: 2 as TitleProps['level'],
          rotation: -6,
        },
        baseline: 'Améliorer l\'accès aux soins',
        images: [
          'https://picsum.photos/500/300?random=8',
          'https://picsum.photos/500/300?random=9',
        ],
        link: '/projets/sante',
        company: 'Association Médicale',
        description: 'Un projet qui facilite l\'accès aux soins de santé pour tous.',
        kpis: [
          {
            name: '2000+',
            description: 'Patients soignés',
          },
          {
            name: '80%',
            description: 'Amélioration de la santé',
          },
        ],
      },
    ],
  },
};

export const MinimalProjects: Story = {
  args: {
    title: 'Projets Simples',
    titleLevel: 3,
    projects: [
      {
        name: {
          children: 'Projet A',
          level: 2 as TitleProps['level'],
        },
        link: '/projets/a',
      },
      {
        name: {
          children: 'Projet B',
          level: 2 as TitleProps['level'],
        },
        link: '/projets/b',
      },
    ],
  },
};

export const WithCustomStyling: Story = {
  args: {
    title: 'Projets avec Style Personnalisé',
    titleLevel: 2,
    projects: defaultProjects,
    className: 'bg-gray-100 p-8',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-16">
      <div>
        <h3 className="text-lg font-bold mb-4">3 Projets (Default)</h3>
        <ThumbnailProjectsBlock
          title="Nos Projets Récents"
          titleLevel={2}
          projects={defaultProjects}
        />
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">1 Projet</h3>
        <ThumbnailProjectsBlock
          title="Projet en Vedette"
          titleLevel={2}
          projects={[
            {
              name: {
                children: 'Projet Unique',
                level: 2 as TitleProps['level'],
                rotation: -4,
              },
              baseline: 'Un projet exceptionnel',
              images: ['https://picsum.photos/500/300?random=10'],
              link: '/projets/unique',
              company: 'Startup Innovante',
              description: 'Un projet qui se démarque par son innovation et son impact.',
            },
          ]}
        />
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">Projets Minimaux</h3>
        <ThumbnailProjectsBlock
          title="Projets Simples"
          titleLevel={3}
          projects={[
            {
              name: {
                children: 'Projet A',
                level: 2 as TitleProps['level'],
              },
              link: '/projets/a',
            },
            {
              name: {
                children: 'Projet B',
                level: 2 as TitleProps['level'],
              },
              link: '/projets/b',
            },
          ]}
        />
      </div>
    </div>
  ),
};
