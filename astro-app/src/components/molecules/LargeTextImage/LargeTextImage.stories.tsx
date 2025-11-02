import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import LargeTextImage from './LargeTextImage';

const meta: Meta<typeof LargeTextImage> = {
  title: 'Molecules/LargeTextImage',
  component: LargeTextImage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    titleLevel: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
    },
    background: {
      control: { type: 'select' },
      options: ['gray', 'purple'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story avec contenu principal
export const WithContent: Story = {
  args: {
    title: 'Titre principal du composant',
    titleLevel: 2,
    content: 'Ceci est un exemple de contenu principal pour le composant LargeTextImage. Il peut contenir du texte, des paragraphes et d\'autres éléments React.',
    image: 'https://picsum.photos/1000/400?random=1',
    ctaText: 'En savoir plus',
    ctaLink: '/about',
    background: 'gray',
  },
};

// Story avec citation
export const WithCitation: Story = {
  args: {
    citation: '"La donnée est le nouveau pétrole du 21ème siècle."',
    citationAuthor: 'Clive Humby',
    citationAuthorImage: 'https://picsum.photos/100/100?random=2',
    image: 'https://picsum.photos/1000/400?random=3',
    background: 'purple',
  },
};

// Story avec fond gris
export const GrayBackground: Story = {
  args: {
    title: 'Fond gris',
    titleLevel: 2,
    content: 'Cette variante utilise un fond gris avec du texte noir pour une meilleure lisibilité.',
    background: 'gray',
  },
};

// Story avec fond violet
export const PurpleBackground: Story = {
  args: {
    title: 'Fond violet',
    titleLevel: 2,
    content: 'Cette variante utilise un fond violet avec du texte blanc pour un contraste élégant.',
    background: 'purple',
  },
};

// Story sans image
export const WithoutImage: Story = {
  args: {
    title: 'Sans image',
    titleLevel: 2,
    content: 'Cette variante n\'a pas d\'image mais conserve le style et la mise en page.',
    background: 'gray',
  },
};

// Story avec CTA
export const WithCallToAction: Story = {
  args: {
    title: 'Avec appel à l\'action',
    titleLevel: 2,
    content: 'Cette variante inclut un bouton d\'appel à l\'action pour guider l\'utilisateur.',
    ctaText: 'Commencer maintenant',
    ctaLink: '/get-started',
    background: 'purple',
  },
};
