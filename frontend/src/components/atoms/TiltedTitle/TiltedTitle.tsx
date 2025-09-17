import type { TitleProps } from '@/components/';
import clsx from 'clsx';
import { Title } from '@/components/';

export type TiltedTitleProps = {
  children: React.ReactNode;
  variant?: TitleProps['variant'];
  level?: TitleProps['level'];
  rotation?: number;
  className?: string;
  colors?: string;
};

const TiltedTitle: React.FC<TiltedTitleProps> = ({
  children,
  variant = 'small',
  level = 1,
  rotation = 0,
  className,
  colors = 'text-white bg-building',
}) => {
  return (
    <Title
      className={clsx('relative inline-flex', className)} 
      style={{ transform: `rotate(${rotation}deg` }}
      variant={variant}
      level={level}
      >
      <span className={clsx(colors, "relative p-2")}>
        {children}
      </span>
    </Title>
  );
};

export default TiltedTitle;
