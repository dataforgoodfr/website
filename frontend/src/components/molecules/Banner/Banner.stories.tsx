import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Banner from './Banner';

const meta: Meta<typeof Banner> = {
  title: 'Molecules/Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: { type: 'text' },
    },
    image: {
      control: { type: 'text' },
    },
    altImage: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story avec contenu principal
export const Default: Story = {
  args: {
    content: ['En Europe, 1% des plus gros navires pêchent la moitié des poissons et s’approprient le vivant au détriment de la santé de l’océan et des animaux marins, donc du climat, et des pêcheurs côtiers. Le lancement de « Trawl Watch » se complète d’une pétition adressée aux institutions et aux États membres de l’Union européenne contre les méga chalutiers et les navires-usines, à retrouver sur le site internet de Bloom.',
        "Les images sont implacables : elles montrent qu’aucune contrainte ne pèse sur les engins destructeurs dans des zones sensibles. Pourtant, un seul de ces navires pêche jusqu’à 400 000 kilos de poissons en une journée1, soit l’équivalent des captures journalières de 1000 navires de pêche artisanale.",
        "La prise de conscience accrue et la collaboration entre les différentes parties prenantes pourront permettre d’accélérer la transition vers des pratiques de pêche plus durables. Trawl Watch est un exemple concret de la manière dont la technologie et l’innovation peuvent être utilisées pour lutter contre les problèmes environnementaux et sociaux qui touchent notre monde. "
    ],
    image: 'https://picsum.photos/1000/400?random=1',
    altImage: 'BannerImage'
  },
};

export const WithoutImage: Story = {
  args: {
    content: ['Ceci est un exemple de contenu principal pour le composant Banner. Il peut contenir du texte, des paragraphes et d\'autres éléments React.'],
  },
};

export const WithoutContent: Story = {
  args: {
    image: 'https://picsum.photos/1000/400?random=1',
    altImage: 'BannerImage'
  },
};

export const WithEmptyContent: Story = {
  args: {
    content: [],
    image: 'https://picsum.photos/1000/400?random=1',
    altImage: 'BannerImage'
  },
};

export const WithShortContent: Story = {
  args: {
    content: ["Hello "],
    image: 'https://picsum.photos/1000/400?random=1',
    altImage: 'BannerImage'
  },
};
