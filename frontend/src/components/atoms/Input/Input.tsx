import type { HTMLAttributes, ChangeEventHandler } from 'react';
import clsx from 'clsx';

export type InputProps = HTMLAttributes<HTMLInputElement> & {
  id: string;
  name: string;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url';
  value?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
  'aria-describedby'?: string;
};

const Input: React.FC<InputProps> = ({
  id,
  name,
  type = 'text',
  value,
  placeholder,
  required = false,
  disabled = false,
  error = false,
  errorMessage,
  onChange,
  className,
  'aria-describedby': ariaDescribedBy,
  ...props
}) => {
  const inputClasses = clsx(
    'w-full px-4 py-3 border rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
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
    <div className="w-full">
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        onChange={onChange}
        className={inputClasses}
        aria-describedby={errorId ? `${ariaDescribedBy || ''} ${errorId}`.trim() : ariaDescribedBy}
        aria-invalid={error}
        {...props}
      />
      {error && errorMessage && (
        <div
          id={errorId}
          className="mt-2 text-sm text-red-600"
          role="alert"
          aria-live="polite"
        >
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default Input;
