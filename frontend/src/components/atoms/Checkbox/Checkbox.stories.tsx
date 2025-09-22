import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
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
    id: 'checkbox-default',
    name: 'checkbox-default',
    value: 'default',
  },
};

export const Checked: Story = {
  args: {
    id: 'checkbox-checked',
    name: 'checkbox-checked',
    value: 'checked',
    checked: true,
  },
};

export const WithError: Story = {
  args: {
    id: 'checkbox-error',
    name: 'checkbox-error',
    value: 'error',
    error: true,
    errorMessage: 'Vous devez sélectionner au moins une option',
  },
};

export const Disabled: Story = {
  args: {
    id: 'checkbox-disabled',
    name: 'checkbox-disabled',
    value: 'disabled',
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    id: 'checkbox-required',
    name: 'checkbox-required',
    value: 'required',
    required: true,
  },
};

// Interactive example with state
export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState(false);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(e.target.checked);
      setError(false);
    };
    
    const handleBlur = () => {
      if (!checked) {
        setError(true);
      }
    };
    
    return (
      <div className="flex items-center space-x-2">
        <Checkbox
          id="checkbox-interactive"
          name="checkbox-interactive"
          value="interactive"
          checked={checked}
          onChange={handleChange}
          onBlur={handleBlur}
          error={error}
          errorMessage={error ? 'Cette option est obligatoire' : undefined}
        />
        <label htmlFor="checkbox-interactive" className="text-sm font-medium text-gray-700">
          Accepter les conditions
        </label>
      </div>
    );
  },
};

// Multiple checkboxes example
export const MultipleCheckboxes: Story = {
  render: () => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [error, setError] = useState(false);
    
    const options = [
      { id: 'option1', value: 'option1', label: 'Option 1' },
      { id: 'option2', value: 'option2', label: 'Option 2' },
      { id: 'option3', value: 'option3', label: 'Option 3' },
    ];
    
    const handleChange = (value: string) => {
      const newSelection = selectedOptions.includes(value)
        ? selectedOptions.filter(option => option !== value)
        : [...selectedOptions, value];
      setSelectedOptions(newSelection);
      setError(false);
    };
    
    const handleBlur = () => {
      if (selectedOptions.length === 0) {
        setError(true);
      }
    };
    
    return (
      <fieldset className="space-y-3">
        <legend className="text-sm font-medium text-gray-700 mb-2">
          Choisissez vos options
        </legend>
        {options.map((option) => (
          <div key={option.id} className="flex items-center space-x-2">
            <Checkbox
              id={option.id}
              name="options"
              value={option.value}
              checked={selectedOptions.includes(option.value)}
              onChange={() => handleChange(option.value)}
              onBlur={handleBlur}
              error={error}
              errorMessage={error ? 'Vous devez sélectionner au moins une option' : undefined}
            />
            <label htmlFor={option.id} className="text-sm text-gray-700">
              {option.label}
            </label>
          </div>
        ))}
      </fieldset>
    );
  },
};
