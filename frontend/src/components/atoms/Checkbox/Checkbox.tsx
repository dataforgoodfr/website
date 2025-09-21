import type { HTMLAttributes, ChangeEventHandler } from 'react';
import clsx from 'clsx';

export type CheckboxProps = HTMLAttributes<HTMLInputElement> & {
  id: string;
  name: string;
  value: string;
  checked?: boolean;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
  'aria-describedby'?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  name,
  value,
  checked = false,
  required = false,
  disabled = false,
  error = false,
  errorMessage,
  onChange,
  className,
  'aria-describedby': ariaDescribedBy,
  ...props
}) => {
  const checkboxClasses = clsx(
    'w-4 h-4 border-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors',
    {
      'border-gray-300 focus:border-black focus:ring-black': !error,
      'border-red-500 focus:border-red-500 focus:ring-red-500': error,
      'bg-gray-100 cursor-not-allowed': disabled,
      'bg-white': !disabled,
    },
    className
  );

  const errorId = error && errorMessage ? `${id}-error` : undefined;

  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id={id}
          name={name}
          type="checkbox"
          value={value}
          checked={checked}
          required={required}
          disabled={disabled}
          onChange={onChange}
          className={checkboxClasses}
          aria-describedby={errorId ? `${ariaDescribedBy || ''} ${errorId}`.trim() : ariaDescribedBy}
          aria-invalid={error}
          {...props}
        />
      </div>
      {error && errorMessage && (
        <div
          id={errorId}
          className="ml-2 text-sm text-red-600"
          role="alert"
          aria-live="polite"
        >
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default Checkbox;
