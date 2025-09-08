import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import type { ThematicValues } from '@/lib/utils';
import ProjectListCard from './ProjectListCard';

const meta: Meta<typeof ProjectListCard> = {
  title: 'Molecules/ProjectListCard',
  component: ProjectListCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    project: {
      control: 'text',
      description: 'Nom du projet',
    },
    association: {
      control: 'text',
      description: 'Association liée au projet',
    },
    description: {
      control: 'text',
      description: 'Description du projet',
    },
    thematics: {
      control: 'object',
      description: 'Thematiques liées au projet et leur couleur associée',
    },
    image: {
      control: 'text',
      description: 'URL de l\'image du projet',
    },
    className: {
      control: 'text',
      description: 'Classes CSS personnalisées',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Données d'exemple pour les projets
const sampleProjects = [
  {
    project: 'Trawlwatch',
    association: 'Bloom association',
    description: 'Suivre les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche',
    thematics: ['climate', 'social', 'democracy'] as ThematicValues[],
    image: 'https://picsum.photos/160/209?random=1',
  },
  {
    project: 'Trawlwatch',
    association: 'Bloom association',
    description: 'Suivre les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche',
    thematics: ['climate', 'social', 'democracy'] as ThematicValues[],
    image: 'https://picsum.photos/160/209?random=1',
  },
  {
    project: 'Trawlwatch',
    association: 'Bloom association',
    description: 'Suivre les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche',
    thematics: ['democracy'] as ThematicValues[],
    image: 'https://picsum.photos/160/209?random=1',
  },
  {
    project: 'Trawlwatch',
    association: 'Bloom association',
    description: 'Suivre les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche',
    thematics: ['climate', 'democracy'] as ThematicValues[],
    image: 'https://picsum.photos/160/209?random=1',
  },
];

export const Default: Story = {
  args: {
    project: 'Trawlwatch',
    association: 'Bloom association',
    description: 'Suivre les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche',
    thematics: ['climate', 'social', 'democracy'] as ThematicValues[],
    image: 'https://picsum.photos/160/209?random=1',
  },
};

export const WithLessThematics: Story = {
  args: {
    project: 'Trawlwatch',
    association: 'Bloom association',
    description: 'Suivre les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche',
    thematics: ['social', 'democracy'] as ThematicValues[],
    image: 'https://picsum.photos/160/209?random=1',
  },
};

export const WithoutDescription: Story = {
  args: {
    project: 'Trawlwatch',
    association: 'Bloom association',
    thematics: ['social', 'democracy'] as ThematicValues[],
    image: 'https://picsum.photos/160/209?random=1',
  },
};

export const MultipleProjects: Story = {
  render: () => (
    <div className="flex gap-xs flex-wrap">
      {sampleProjects.map((project, index) => (
        <ProjectListCard
          key={index}
          project={project.project}
          association={project.association}
          description={project.description}
          thematics={project.thematics}
          image={project.image}
        />
      ))}
    </div>
  ),
};
