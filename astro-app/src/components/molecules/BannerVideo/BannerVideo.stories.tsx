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
    video: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story avec contenu principal
export const Default: Story = {
  args: {
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/k6Z1yqrITCc?si=ZXRY6hncnYtLMx4w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
};

export const YoutubeVideo: Story = {
  args: {
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/k6Z1yqrITCc?si=ZXRY6hncnYtLMx4w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
};

export const VimeoVideo: Story = {
  args: {
    video: `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/170296012?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Teaser Impala"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`,
  },
};

export const DailymotionVideo: Story = {
  args: {
    video: `<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;">  <iframe src="https://geo.dailymotion.com/player.html?video=x8p310t" style="width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden; border:none;" allowfullscreen title="Dailymotion Video Player" allow="web-share"></iframe></div>`,
  },
};
