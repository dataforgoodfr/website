import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import NewsletterBlock from './NewsletterBlock';

const meta: Meta<typeof NewsletterBlock> = {
  title: 'Organisms/NewsletterBlock',
  component: NewsletterBlock,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Titre principal du bloc newsletter',
    },
    titleLevel: {
      control: { type: 'select' },
      options: [1, 2, 3],
      description: 'Niveau du titre HTML (h1, h2, h3)',
    },
    content: {
      control: { type: 'text' },
      description: 'Contenu descriptif de la newsletter',
    },
    className: {
      control: { type: 'text' },
      description: 'Classes CSS personnalisées',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
