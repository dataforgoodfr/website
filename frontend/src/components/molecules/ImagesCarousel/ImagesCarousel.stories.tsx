import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ImagesCarousel from './ImagesCarousel';

const meta: Meta<typeof ImagesCarousel> = {
  title: 'Molecules/ImagesCarousel',
  component: ImagesCarousel,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    images: {
      control: 'object',
      description: 'Images à afficher',
    },
    className: {
      control: 'text',
      description: 'Classes CSS',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Données d'exemple pour les images
const sampleImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop',
    alt: 'Océan avec bateau de pêche',
    title: 'TrawlWatch',
    description: 'Un outil de surveillance en temps réel des navires de pêche industrielle dans les aires marines protégées',
    ctaText: 'VOIR PROJET',
    ctaHref: '/projets/trawlwatch',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop',
    alt: 'Forêt et biodiversité',
    title: 'BioDiversity',
    description: 'Protection et préservation de la biodiversité forestière',
    ctaText: 'DÉCOUVRIR',
    ctaHref: '/projets/biodiversity',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=1200&h=600&fit=crop',
    alt: 'Énergie renouvelable',
    title: 'GreenEnergy',
    description: 'Transition vers des sources d\'énergie durables et renouvelables',
    ctaText: 'EN SAVOIR PLUS',
    ctaHref: '/projets/greenenergy',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
    alt: 'Montagnes et environnement',
    title: 'MountainGuard',
    description: 'Surveillance et protection des écosystèmes montagneux',
    ctaText: 'EXPLORER',
    ctaHref: '/projets/mountainguard',
  },
];

export const Default: Story = {
  args: {
    images: sampleImages,
  },
};

export const Minimal: Story = {
  args: {
    images: sampleImages,
  },
};

export const SingleImage: Story = {
  args: {
    images: [sampleImages[0]],
  },
};

export const WithCustomHeight: Story = {
  args: {
    images: sampleImages,
    className: 'h-[300px]',
  },
};
