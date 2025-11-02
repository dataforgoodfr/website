import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import NewsletterForm from './NewsletterForm';

const meta: Meta<typeof NewsletterForm> = {
  title: 'Molecules/NewsletterForm',
  component: NewsletterForm,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Formulaire d\'inscription à la newsletter utilisant Brevo pour la gestion des abonnements.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Classes CSS personnalisées pour le conteneur du formulaire',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCustomClassName: Story = {
  args: {
    className: 'max-w-md mx-auto p-4 border border-gray-200 rounded-lg',
  },
};

export const InContainer: Story = {
  args: {
    className: 'w-full max-w-lg',
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Restez informé de nos actualités
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Recevez nos dernières nouvelles et mises à jour directement dans votre boîte mail.
        </p>
        <Story />
      </div>
    ),
  ],
};

export const InDarkContainer: Story = {
  args: {
    className: 'w-full max-w-lg',
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-900 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">
          Rejoignez notre communauté
        </h2>
        <p className="text-gray-300 mb-6 text-center">
          Inscrivez-vous à notre newsletter pour ne rien manquer de nos projets.
        </p>
        <Story />
      </div>
    ),
  ],
};

export const Compact: Story = {
  args: {
    className: 'max-w-sm',
  },
  decorators: [
    (Story) => (
      <div className="bg-white p-4 border border-gray-200 rounded shadow-sm">
        <h3 className="text-lg font-semibold mb-3 text-center">
          Newsletter
        </h3>
        <Story />
      </div>
    ),
  ],
};

export const InSidebar: Story = {
  args: {
    className: 'w-full',
  },
  decorators: [
    (Story) => (
      <div className="bg-white p-6 border-l border-gray-200 min-h-screen">
        <div className="sticky top-8">
          <h3 className="text-xl font-bold mb-4">
            Newsletter
          </h3>
          <p className="text-gray-600 mb-6 text-sm">
            Recevez nos actualités par email.
          </p>
          <Story />
        </div>
      </div>
    ),
  ],
};

export const WithCustomStyling: Story = {
  args: {
    className: 'newsletter-custom',
  },
  decorators: [
    (Story) => (
      <>
        <style jsx>{`
          .newsletter-custom {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }
          .newsletter-custom :global(.sib-container) {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 0.5rem;
            padding: 1.5rem;
          }
        `}</style>
        <div className="newsletter-custom">
          <h2 className="text-2xl font-bold mb-4 text-center text-white">
            Inscrivez-vous à notre newsletter
          </h2>
          <Story />
        </div>
      </>
    ),
  ],
};

export const Responsive: Story = {
  args: {
    className: 'w-full max-w-md sm:max-w-lg md:max-w-xl',
  },
  decorators: [
    (Story) => (
      <div className="p-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
            Newsletter Responsive
          </h2>
          <p className="text-gray-600 mb-6 text-center text-sm md:text-base">
            Ce formulaire s'adapte à toutes les tailles d'écran.
          </p>
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: {
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1024px',
            height: '768px',
          },
        },
      },
    },
  },
};
