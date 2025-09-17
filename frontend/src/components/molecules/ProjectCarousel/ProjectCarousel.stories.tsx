import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ProjectCarousel from './ProjectCarousel';

const meta: Meta<typeof ProjectCarousel> = {
  title: 'Molecules/ProjectCarousel',
  component: ProjectCarousel,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    slides: {
      control: 'object',
      description: 'Témoignages à afficher',
    },
    className: {
      control: 'text',
      description: 'Classes CSS personnalisées',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Données d'exemple pour les témoignages
const sampleSlides = [
  {
    id: 1,
    description: 'Data for Good m\'a permis de mettre mes compétences techniques au service de causes qui me tiennent à cœur. C\'est une expérience enrichissante et humaine.',
    image: 'https://picsum.photos/192/192?random=1',
    altImage: "Random image"
  },
  {
    id: 2,
    description: 'Grâce à cette communauté, j\'ai pu contribuer à des projets d\'impact social tout en développant mes compétences en data science.',
    image: 'https://picsum.photos/192/192?random=2',
    altImage: "Random image"
  },
  {
    id: 3,
    description: 'Une belle aventure humaine et technique. Les projets sont variés et les équipes sont bienveillantes. Je recommande vivement !',
    image: 'https://picsum.photos/192/192?random=3',
    altImage: "Random image"
  },
  {
    id: 4,
    description: 'Data for Good représente exactement ce que je cherchais : utiliser la technologie pour un monde meilleur. Une expérience unique !',
    image: 'https://picsum.photos/192/192?random=4',
    altImage: "Random image"
  },
];

export const Default: Story = {
  args: {
    title: "La solution",
    slides: sampleSlides,
  },
};

export const WithoutTitle: Story = {
  args: {
    slides: sampleSlides,
  },
};

export const SingleTestimony: Story = {
  args: {
    title: "La solution",
    slides: [sampleSlides[0]],
  },
};

export const TwoProject: Story = {
  args: {
    title: "La solution",
    slides: sampleSlides.slice(0, 2),
  },
};

export const WithCustomStyling: Story = {
  args: {
    title: "La solution",
    slides: sampleSlides,
    carouselClassName: 'max-w-4xl mx-auto',
  },
};

export const LongContent: Story = {
  args: {
    slides: [
      {
        id: 1,
        description: 'Data for Good m\'a permis de mettre mes compétences techniques au service de causes qui me tiennent à cœur. C\'est une expérience enrichissante et humaine.',
        image: 'https://picsum.photos/192/192?random=1',
        altImage: "Random image"
      },
      {
        id: 2,
        description: 'Grâce à cette communauté, j\'ai pu contribuer à des projets d\'impact social tout en développant mes compétences en data science.',
        image: 'https://picsum.photos/192/192?random=2',
        altImage: "Random image"
      },
      {
        id: 3,
        description: 'Une belle aventure humaine et technique. Les projets sont variés et les équipes sont bienveillantes. Je recommande vivement !',
        image: 'https://picsum.photos/192/192?random=3',
        altImage: "Random image"
      },
      {
        id: 4,
        description: 'Data for Good représente exactement ce que je cherchais : utiliser la technologie pour un monde meilleur. Une expérience unique !',
        image: 'https://picsum.photos/192/192?random=4',
        altImage: "Random image"
      },
    ],
  },
};

export const ShortContent: Story = {
  args: {
    slides: [
      {
        id: 1,
        description: 'Super.',
        image: 'https://picsum.photos/192/192?random=1',
        altImage: "Random image"
      },
      {
        id: 2,
        description: 'Super',
        image: 'https://picsum.photos/192/192?random=2',
        altImage: "Random image"
      },
    ],
  },
};
