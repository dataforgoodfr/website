import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import MemberCard from './MemberCard';

const meta: Meta<typeof MemberCard> = {
  title: 'Molecules/MemberCard',
  component: MemberCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Nom du membre',
    },
    role: {
      control: 'text',
      description: 'Rôle/fonction du membre',
    },
    image: {
      control: 'text',
      description: 'URL de l\'image du membre',
    },
    className: {
      control: 'text',
      description: 'Classes CSS personnalisées',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Données d'exemple pour les membres
const sampleMembers = [
  {
    name: 'Marie Dubois',
    role: 'Data Scientist',
    image: 'https://picsum.photos/160/209?random=1',
  },
  {
    name: 'Thomas Martin',
    role: 'Développeur Full-Stack',
    image: 'https://picsum.photos/160/209?random=2',
  },
  {
    name: 'Sophie Bernard',
    role: 'UX Designer',
    image: 'https://picsum.photos/160/209?random=3',
  },
  {
    name: 'Lucas Moreau',
    role: 'Product Manager',
    image: 'https://picsum.photos/160/209?random=4',
  },
];

export const Default: Story = {
  args: {
    name: 'Marie Dubois',
    role: 'Data Scientist',
    image: 'https://picsum.photos/160/209?random=1',
  },
};

export const WithLongName: Story = {
  args: {
    name: 'Jean-Philippe de la Fontaine',
    role: 'Lead Developer',
    image: 'https://picsum.photos/160/209?random=5',
  },
};

export const WithLongRole: Story = {
  args: {
    name: 'Ana',
    role: 'Chef de projet innovation et transformation digitale',
    image: 'https://picsum.photos/160/209?random=6',
  },
};

export const WithoutImage: Story = {
  args: {
    name: 'Pierre Durand',
    role: 'Volunteer',
  },
};

export const ShortName: Story = {
  args: {
    name: 'Max',
    role: 'Dev',
    image: 'https://picsum.photos/160/209?random=7',
  },
};

export const MultipleMembers: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      {sampleMembers.map((member, index) => (
        <MemberCard
          key={index}
          name={member.name}
          role={member.role}
          image={member.image}
        />
      ))}
    </div>
  ),
};
