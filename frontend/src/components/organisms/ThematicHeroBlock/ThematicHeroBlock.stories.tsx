import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ThematicHeroBlock from './ThematicHeroBlock';

const meta: Meta<typeof ThematicHeroBlock> = {
  title: 'Organisms/ThematicHeroBlock',
  component: ThematicHeroBlock,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    image: {
      control: 'text',
      description: 'URL de l\'image de fond',
    },
    title: {
      control: 'text',
      description: 'Titre principal affiché par-dessus l\'image',
    },
    className: {
      control: 'text',
      description: 'Classes CSS additionnelles pour le conteneur',
    },
    titleClassName: {
      control: 'text',
      description: 'Classes CSS additionnelles pour le titre',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: 'https://picsum.photos/1000/400?random=1',
    title: 'Impact Social',
  },
};

export const LongTitle: Story = {
  args: {
    image: 'https://picsum.photos/1000/400?random=2',
    title: 'Un titre très long qui peut s\'étendre sur plusieurs lignes pour tester l\'affichage',
  },
};

export const ShortTitle: Story = {
  args: {
    image: 'https://picsum.photos/1000/400?random=3',
    title: 'Climat',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <ThematicHeroBlock
        image="https://picsum.photos/1000/400?random=5"
        title="Impact Social"
      />
      <ThematicHeroBlock
        image="https://picsum.photos/1000/400?random=6"
        title="Changement Climatique"
      />
      <ThematicHeroBlock
        image="https://picsum.photos/1000/400?random=7"
        title="Démocratie & Citoyenneté"
      />
    </div>
  ),
};
