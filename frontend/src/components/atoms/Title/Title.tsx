import type { HTMLAttributes } from 'react';
import { clsx } from 'clsx';

export type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6 | 'p';
  variant?: 'big' | 'medium' | 'small' | 'x-small';
  className?: string;
  hasSeparator?: boolean;
};

const Title = ({
  children,
  level = 1,
  variant = 'big',
  className = '',
  hasSeparator = false,
  ...props
}: TitleProps) => {
  const variantClasses = {
    'big': 'h1-like',
    'medium': 'h2-like',
    'small': 'h3-like',
    'x-small': 'h4-like',
  };

  const classes = clsx(
    variantClasses[variant],
    className,
  );

  const HeadingTag = level === 'p' ? 'p' : `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  return (
    <HeadingTag className={classes} {...props}>
      {children}
      {hasSeparator && <span className="block w-full h-1 bg-building" />}
    </HeadingTag>
  );
};

export default Title;
