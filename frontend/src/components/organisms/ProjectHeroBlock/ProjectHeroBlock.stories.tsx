import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ProjectHeroBlock from './ProjectHeroBlock';

const meta: Meta<typeof ProjectHeroBlock> = {
  title: 'Organisms/ProjectHeroBlock',
  component: ProjectHeroBlock,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    image: {
      control: 'text',
      description: 'URL de l\'image de fond du projet',
    },
    title: {
      control: 'text',
      description: 'Titre principal du projet',
    },
    introduction: {
      control: 'text',
      description: 'Introduction du projet (optionnel)',
    },
    className: {
      control: 'text',
      description: 'Classes CSS additionnelles',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&h=400&fit=crop',
    title: 'Projet Data for Good',
    introduction: 'Utiliser la data science pour résoudre les défis sociaux et environnementaux de notre société.',
  },
};

export const WithLongTitle: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1000&h=400&fit=crop',
    title: 'Développement d\'un outil d\'analyse prédictive pour la gestion des ressources naturelles',
    introduction: 'Un projet ambitieux visant à créer des modèles prédictifs pour optimiser la gestion des ressources naturelles et réduire l\'impact environnemental.',
  },
};

export const WithoutIntroduction: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1000&h=400&fit=crop',
    title: 'Plateforme de visualisation des données climatiques',
  },
};

export const WithDefaultImage: Story = {
  args: {
    title: 'Projet sans image personnalisée',
    introduction: 'Ce projet utilise l\'image par défaut du système.',
  },
};

export const ShortTitle: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1000&h=400&fit=crop',
    title: 'Climat',
    introduction: 'Projet dédié à la lutte contre le changement climatique.',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <ProjectHeroBlock
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&h=400&fit=crop"
        title="Projet Data for Good"
        introduction="Utiliser la data science pour résoudre les défis sociaux et environnementaux."
      />
      <ProjectHeroBlock
        image="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1000&h=400&fit=crop"
        title="Analyse des données climatiques"
        introduction="Développement d'outils d'analyse pour comprendre les tendances climatiques."
      />
      <ProjectHeroBlock
        image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1000&h=400&fit=crop"
        title="Démocratie participative"
        introduction="Création de plateformes pour renforcer la participation citoyenne."
      />
    </div>
  ),
};
