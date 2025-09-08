import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Filter from './Filter';

const meta: Meta<typeof Filter> = {
  title: 'Atoms/Filter',
  component: Filter,
  globals: {
    // 👇 Set background value for all component stories
    backgrounds: { value: 'dark', grid: false },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    filterName: {
      control: { type: 'text' },
    },
    filterValue: {
      control: { type: 'text' },
    },
    thematic: {
      control: { type: 'text' },
    },
    checked: {
      control: { type: 'boolean' },
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
    filterName: 'Filtre thématique',
    filterValue: 'thematic',
    thematic: 'social',
    checked: true,
  },
};

export const FilterCheckbox: Story = {
  args: {
    filterName: 'Filtre thématique',
    filterValue: 'thematic',
    thematic: 'democracy',
    checked: true,
  },
};

export const FilterCheckboxUnchecked: Story = {
  args: {
    filterName: 'Filtre thématique',
    filterValue: 'thematic',
    thematic: 'democracy',
    checked: false,
  },
};

export const FilterCheckboxWithoutColor: Story = {
  args: {
    filterName: 'Filtre thématique',
    filterValue: 'thematic',
  },
};
