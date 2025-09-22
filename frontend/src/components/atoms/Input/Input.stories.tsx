import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'tel', 'url'],
    },
    required: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'input-default',
    name: 'input-default',
    placeholder: 'Saisissez votre texte',
  },
};

export const Email: Story = {
  args: {
    id: 'input-email',
    name: 'email',
    type: 'email',
    placeholder: 'votre@email.com',
    required: true,
  },
};

export const WithError: Story = {
  args: {
    id: 'input-error',
    name: 'input-error',
    placeholder: 'Saisissez votre texte',
    error: true,
    errorMessage: 'Ce champ est obligatoire',
  },
};

export const Disabled: Story = {
  args: {
    id: 'input-disabled',
    name: 'input-disabled',
    placeholder: 'Champ désactivé',
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    id: 'input-required',
    name: 'input-required',
    placeholder: 'Champ obligatoire',
    required: true,
  },
};

// Interactive example with state
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      setError(false);
    };
    
    const handleBlur = () => {
      if (!value) {
        setError(true);
      }
    };
    
    return (
      <div className="w-80">
        <Input
          id="input-interactive"
          name="input-interactive"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Saisissez votre texte"
          error={error}
          errorMessage={error ? 'Ce champ est obligatoire' : undefined}
        />
      </div>
    );
  },
};
