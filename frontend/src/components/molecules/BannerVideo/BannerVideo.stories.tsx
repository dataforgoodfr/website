import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import BannerVideo from './BannerVideo';

const meta: Meta<typeof BannerVideo> = {
  title: 'Molecules/BannerVideo',
  component: BannerVideo,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    image: {
      control: { type: 'text' },
    },
    altImage: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story avec contenu principal
export const Default: Story = {
  args: {
    video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    altVideo: 'BannerVideo'
  },
};

export const WithoutVideo: Story = {
  args: {
  },
};

export const WithEmptyContent: Story = {
  args: {
    video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    altVideo: 'BannerVideo'
  },
};

export const WithShortContent: Story = {
  args: {
    video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    altVideo: 'BannerVideo'
  },
};
