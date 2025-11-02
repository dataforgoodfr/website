import type { HTMLAttributes } from 'react';
import { clsx } from 'clsx';

export type TagProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  color?: string;
};

const Tag = ({
  children,
  color = 'text-white',
  bgColor = 'bg-black',
  className = '',
  ...props
}: TagProps) => {
  if (!children) {
    return null;
  }

  return (
    <div className={clsx(
      'tag-like px-2 py-1.5 uppercase opacity-70',
      bgColor,
      color,
      className,
    )} {...props}>
      {children}
    </div>
  );
};

export default Tag;
