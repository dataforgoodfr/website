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
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'White title',
    rotation: -2.58,
    colors: 'text-white bg-building'
  },
};

export const ResistanceWithRotation: Story = {
  args: {
    children: 'Black title',
    rotation: -20,
    colors: 'text-black bg-resistance'
  },
};

export const BlueSmallRotation: Story = {
  args: {
    children: 'Blue small rotation',
    rotation: -2.58,
    colors: 'text-black bg-blue',
  },
};

export const BlueSmallRotationWithDrop: Story = {
  args: {
    children: 'Blue small rotation with drop',
    rotation: -2.58,
    colors: 'text-black bg-blue',
    className: "drop-shadow-1 drop-shadow-black before:-z-1"
  },
};

export const BlueSmallRotationWithImportantDrop: Story = {
  args: {
    children: 'Blue small rotation with important drop',
    rotation: -2.58,
    colors: 'text-black bg-blue',
    className: 'drop-shadow-3 drop-shadow-black before:-z-1'
  },
};

export const BuildingNoRotation: Story = {
  args: {
    children: 'No rotation',
    rotation: 0,
    colors: 'text-white bg-building'
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-5 space-x-5">
      <TiltedTitle rotation={-2.58} colors='text-white bg-building'>
        White title
      </TiltedTitle>
      <TiltedTitle rotation={-20} colors='text-black bg-resistance'>
        Black title
      </TiltedTitle>
      <TiltedTitle rotation={-2.58} colors='text-black bg-blue'>
        Blue small rotation
      </TiltedTitle>
      <TiltedTitle rotation={-2.58} colors='text-black bg-blue' className="drop-shadow-1 drop-shadow-black before:-z-1">
        Blue small rotation with drop
      </TiltedTitle>
      <TiltedTitle rotation={-2.58} colors='text-black bg-blue' className="drop-shadow-3 drop-shadow-black before:-z-1">
        Blue small rotation with important drop
      </TiltedTitle>
      <TiltedTitle rotation={0} colors='text-white bg-building'>
        No rotation
      </TiltedTitle>
    </div>
  ),
};
