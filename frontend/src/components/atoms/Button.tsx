import type { MouseEventHandler, PropsWithChildren } from 'react';
import Link from 'next/link';

type ButtonProps = {
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & PropsWithChildren;

const Button: React.FC<ButtonProps> = ({
  href,
  onClick,
  children,
}) => {
  const classes = 'inline-flex gap-2 p-2 border border-black bg-dark text-white hover:bg-white hover:text-black transition-colors';

  if (href) {
    return <Link className={classes} href={href}>{children}</Link>;
  }

  return <button className={classes} onClick={onClick} type="button">{children}</button>;
};

export default Button;
