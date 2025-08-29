import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import TestimoniesCarousel from './TestimoniesCarousel';

const meta: Meta<typeof TestimoniesCarousel> = {
  title: 'Molecules/TestimoniesCarousel',
  component: TestimoniesCarousel,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    testimonies: {
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
const sampleTestimonies = [
  {
    id: 1,
    author: 'Marie Dubois',
    content: 'Data for Good m\'a permis de mettre mes compétences techniques au service de causes qui me tiennent à cœur. C\'est une expérience enrichissante et humaine.',
    image: 'https://picsum.photos/192/192?random=1',
  },
  {
    id: 2,
    author: 'Thomas Martin',
    content: 'Grâce à cette communauté, j\'ai pu contribuer à des projets d\'impact social tout en développant mes compétences en data science.',
    image: 'https://picsum.photos/192/192?random=2',
  },
  {
    id: 3,
    author: 'Sophie Bernard',
    content: 'Une belle aventure humaine et technique. Les projets sont variés et les équipes sont bienveillantes. Je recommande vivement !',
    image: 'https://picsum.photos/192/192?random=3',
  },
  {
    id: 4,
    author: 'Lucas Moreau',
    content: 'Data for Good représente exactement ce que je cherchais : utiliser la technologie pour un monde meilleur. Une expérience unique !',
    image: 'https://picsum.photos/192/192?random=4',
  },
];

export const Default: Story = {
  args: {
    testimonies: sampleTestimonies,
  },
};

export const SingleTestimony: Story = {
  args: {
    testimonies: [sampleTestimonies[0]],
  },
};

export const TwoTestimonies: Story = {
  args: {
    testimonies: sampleTestimonies.slice(0, 2),
  },
};

export const WithCustomStyling: Story = {
  args: {
    testimonies: sampleTestimonies,
    className: 'max-w-4xl mx-auto',
  },
};

export const LongContent: Story = {
  args: {
    testimonies: [
      {
        id: 5,
        author: 'Emma Rousseau',
        content: 'Data for Good m\'a offert une opportunité incroyable de mettre mes compétences en machine learning au service de l\'environnement. Le projet sur la surveillance des océans était particulièrement passionnant. L\'équipe était très compétente et bienveillante, ce qui a rendu l\'expérience encore plus enrichissante. Je recommande vivement cette communauté à tous ceux qui souhaitent utiliser leurs compétences techniques pour un impact positif sur la société.',
        image: 'https://picsum.photos/192/192?random=5',
      },
      {
        id: 6,
        author: 'Pierre Durand',
        content: 'Une expérience humaine et technique exceptionnelle. J\'ai pu travailler sur des projets d\'intelligence artificielle appliqués à la santé publique, ce qui m\'a permis de voir concrètement l\'impact de la technologie sur le bien-être des populations. L\'approche collaborative et l\'expertise des membres font de Data for Good une organisation unique en son genre.',
        image: 'https://picsum.photos/192/192?random=6',
      },
    ],
  },
};

export const ShortContent: Story = {
  args: {
    testimonies: [
      {
        id: 7,
        author: 'Ana',
        content: 'Excellent !',
        image: 'https://picsum.photos/192/192?random=7',
      },
      {
        id: 8,
        author: 'Max',
        content: 'Très satisfait de mon expérience.',
        image: 'https://picsum.photos/192/192?random=8',
      },
    ],
  },
};
