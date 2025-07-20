import type { MouseEventHandler, PropsWithChildren } from 'react';
import clsx from 'clsx';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

type ButtonProps = {
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  variant?: 'primary' | 'secondary';
} & PropsWithChildren;

const Button: React.FC<ButtonProps> = ({
  href,
  onClick,
  children,
  className,
  variant = 'primary',
}) => {
  const classes = clsx(
    'inline-flex items-center gap-2 p-3 border border-black transition-colors',
    variant === 'primary' ? 'bg-dark text-white hover:bg-white hover:text-black' : 'bg-white text-black hover:bg-black hover:text-white',
    className,
  );

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
        <ArrowRightIcon className="w-4 h-4" />
      </Link>
    );
  }

  return <button className={classes} onClick={onClick} type="button">{children}</button>;
};

export default Button;
