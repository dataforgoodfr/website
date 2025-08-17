import type { Meta, StoryObj } from '@storybook/react';
import Title from './Title';

const meta: Meta<typeof Title> = {
  title: 'Atoms/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
    },
    variant: {
      control: { type: 'select' },
      options: ['big', 'medium', 'small', 'x-small'],
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
    children: 'Titre par défaut (H1, variant big)',
  },
};

export const H2Medium: Story = {
  args: {
    level: 2,
    variant: 'medium',
    children: 'Titre H2 avec variant medium',
  },
};

export const H3Small: Story = {
  args: {
    level: 3,
    variant: 'small',
    children: 'Titre H3 avec variant small',
  },
};

export const H4XSmall: Story = {
  args: {
    level: 4,
    variant: 'x-small',
    children: 'Titre H4 avec variant x-small',
  },
};

export const WithCustomClass: Story = {
  args: {
    level: 2,
    variant: 'medium',
    children: 'Titre avec classe personnalisée',
    className: 'text-blue-600 underline',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Title level={1} variant="big">
        Titre H1 - Variant Big
      </Title>
      <Title level={2} variant="medium">
        Titre H2 - Variant Medium
      </Title>
      <Title level={3} variant="small">
        Titre H3 - Variant Small
      </Title>
      <Title level={4} variant="x-small">
        Titre H4 - Variant X-Small
      </Title>
    </div>
  ),
};
