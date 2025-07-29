import type { MouseEventHandler, PropsWithChildren } from 'react';
import clsx from 'clsx';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';


export type ButtonProps = {
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  variant?: 'primary' | 'secondary';
  isBlank?: boolean;
  type?: 'button' | 'submit';
  disabled?: boolean;
} & PropsWithChildren;

const Button: React.FC<ButtonProps> = ({
  href,
  onClick,
  children,
  className,
  variant = 'primary',
  type = 'button',
  isBlank,
  disabled,
  ...props
}) => {
  const classElement = clsx(
    'inline-flex items-center gap-2 transition-colors',
    variant === 'primary' 
      ? 'p-3 bg-dark text-white hover:bg-white hover:text-black border border-black' 
      : 'relative z-1 font-sm font-bolder uppercase before:absolute before:content-[""] before:-z-1 before:w-full before:h-full before:bg-black before:top-2 before:left-2 hover:before:top-0 hover:before:left-0 focus:before:top-0 focus:before:left-0 before:transition-base',
    className,
  );
  const classChildren = clsx(
    variant === 'secondary' && 'relative block px-9 py-2.5 bg-white text-black' 
  );

  return (
    <>
    {href ? (
      <Link
        href={href}
        className={classElement}
        {...props}
        target={isBlank ? "_blank" : undefined}
        rel={isBlank ? "noreferrer" : undefined}
      >
      <span className={classChildren}>{children}</span>
      <ArrowRightIcon className="w-4 h-4" />
      </Link>
    ) : (
      <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={classElement}
        {...props}
      >
        <span className={classChildren}>{children}</span>
      </button>
    )}
    </>
  );
};

export default Button;
