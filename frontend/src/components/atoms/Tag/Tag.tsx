import type { HTMLAttributes } from 'react';
import { clsx } from 'clsx';

export type TagProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
};

const Tag = ({
  children,
  bgColor = 'bg-black',
  className = '',
  ...props
}: TagProps) => {
  if (!children) {
    return null;
  }

  return (
    <div
      className={clsx(
        'text-white text-sm font-black px-2.5 py-2 uppercase',
        bgColor,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Tag;
