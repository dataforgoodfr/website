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
    url: {
      control: { type: 'text' },
    },
    format: {
      control: { type: 'select' },
      options: ['paysage', 'portrait'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Youtube: Story = {
  args: {
    url: 'https://www.youtube.com/watch?v=k6Z1yqrITCc',
  },
};

export const YoutubeShort: Story = {
  args: {
    url: 'https://www.youtube.com/shorts/JmK9FgHkq8E',
  },
};

export const YoutubePaysageForced: Story = {
  args: {
    url: 'https://www.youtube.com/watch?v=k6Z1yqrITCc',
    format: 'paysage',
  },
};

export const YoutubePortraitForced: Story = {
  args: {
    url: 'https://www.youtube.com/watch?v=k6Z1yqrITCc',
    format: 'portrait',
  },
};

export const WithRawEmbed: Story = {
  args: {
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/k6Z1yqrITCc" frameborder="0" allowfullscreen></iframe>`,
  },
};
