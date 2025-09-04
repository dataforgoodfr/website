import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Pagination from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Atoms/Pagination',
  component: Pagination,
  globals: {
    // 👇 Set background value for all component stories
    backgrounds: { value: 'dark', grid: false },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    pageCount: {
      control: { type: 'number' },
    },
    currentPage: {
      control: { type: 'number' },
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pageCount: 3,
    currentPage: 2,
  },
};

export const OnlyPage: Story = {
  args: {
    pageCount: 1,
    currentPage: 1,
  },
};

