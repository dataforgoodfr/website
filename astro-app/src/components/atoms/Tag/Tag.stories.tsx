import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Tag from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Atoms/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    bgColor: {
      control: { type: 'select' },
      options: ['bg-black', 'bg-building', 'bg-resistance'],
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Tag par défaut',
  },
};

export const BgColor: Story = {
  args: {
    bgColor: 'bg-resistance',
    children: 'Tag avec couleur de fond',
  },
};
