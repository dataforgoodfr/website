import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import TiltedTitle from './TiltedTitle';

const meta: Meta<typeof TiltedTitle> = {
  title: 'Atoms/TiltedTitle',
  component: TiltedTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'text'
    },
    bgColor: {
      control: 'text'
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
    color: 'white',
    bgColor: 'building',
    children: 'White title',
    rotation: -2.58,
    drop: true,
  },
};

export const Resistance: Story = {
  args: {
    bgColor: 'resistance',
    children: 'Black title',
    rotation: -2.58
  },
};

export const NoRotation: Story = {
  args: {
    bgColor: 'resistance',
    children: 'No rotation',
    rotation: 0
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <TiltedTitle color="white" bgColor="building" rotation={-2.58} drop={true}>
        White title
      </TiltedTitle>
      <TiltedTitle color="black" bgColor="resistance" rotation={-2.58}>
        Black title
      </TiltedTitle>
      <TiltedTitle color="black" bgColor="resistance" rotation={0}>
        No rotation
      </TiltedTitle>
    </div>
  ),
};
