import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Molecules/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['single', 'multiple'],
    },
    collapsible: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const sampleItems = [
  {
    id: 'faq-1',
    title: 'FAQ',
    content: (
      <div className="space-y-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
      </div>
    ),
  },
  {
    id: 'charte-1',
    title: 'Charte diversité',
    content: (
      <div className="space-y-4">
        <p>
          Notre charte diversité définit nos engagements en matière d'inclusion et de 
          diversité. Nous nous engageons à créer un environnement de travail inclusif 
          et respectueux de tous.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Respect de la diversité des profils</li>
          <li>Égalité des chances</li>
          <li>Lutte contre les discriminations</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'charte-2',
    title: 'Charte diversité',
    content: (
      <div className="space-y-4">
        <p>
          Cette section complète notre approche de la diversité avec des actions concrètes 
          et des mesures d'accompagnement pour tous nos membres.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Actions mises en place :</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Formations sur les biais inconscients</li>
            <li>Mentorat croisé</li>
            <li>Événements de sensibilisation</li>
          </ul>
        </div>
      </div>
    ),
  },
];

export const Default: Story = {
  args: {
    title: 'Informations - toggle',
    items: sampleItems,
    type: 'single',
    collapsible: true,
  },
};

export const Multiple: Story = {
  args: {
    title: 'Informations - toggle',
    items: sampleItems,
    type: 'multiple',
    collapsible: true,
  },
};

export const WithoutTitle: Story = {
  args: {
    items: sampleItems,
    type: 'single',
    collapsible: true,
  },
};

export const WithDefaultValue: Story = {
  args: {
    title: 'Informations - toggle',
    items: sampleItems,
    type: 'single',
    collapsible: true,
    defaultValue: 'faq-1',
  },
};

export const NotCollapsible: Story = {
  args: {
    title: 'Informations - toggle',
    items: sampleItems,
    type: 'single',
    collapsible: false,
  },
};
