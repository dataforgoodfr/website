import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Github, Twitter as TwitterIcon, Linkedin, Mail } from 'lucide-react';
import SocialLink from './SocialLink';

const meta: Meta<typeof SocialLink> = {
  title: 'Atoms/SocialLink',
  component: SocialLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const GitHub: Story = {
  args: {
    href: 'https://github.com/dataforgoodfr',
    icon: <Github className="w-5 h-5" />,
    label: 'GitHub',
  },
};

export const Twitter: Story = {
  args: {
    href: 'https://twitter.com/dataforgoodfr',
    icon: <TwitterIcon className="w-5 h-5" />,
    label: 'Twitter',
  },
};

export const LinkedIn: Story = {
  args: {
    href: 'https://linkedin.com/company/dataforgoodfr',
    icon: <Linkedin className="w-5 h-5" />,
    label: 'LinkedIn',
  },
};

export const Email: Story = {
  args: {
    href: 'mailto:contact@dataforgood.fr',
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
  },
};

export const MultipleSocialLinks: Story = {
  render: () => (
    <div className="flex gap-4">
      <SocialLink
        href="https://github.com/dataforgoodfr"
        icon={<Github className="w-5 h-5" />}
        label="GitHub"
      />
      <SocialLink
        href="https://twitter.com/dataforgoodfr"
        icon={<TwitterIcon className="w-5 h-5" />}
        label="Twitter"
      />
      <SocialLink
        href="https://linkedin.com/company/dataforgoodfr"
        icon={<Linkedin className="w-5 h-5" />}
        label="LinkedIn"
      />
      <SocialLink
        href="mailto:contact@dataforgood.fr"
        icon={<Mail className="w-5 h-5" />}
        label="Email"
      />
    </div>
  ),
}; 