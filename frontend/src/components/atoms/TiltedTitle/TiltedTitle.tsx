import clsx from 'clsx';
import Title from '../Title/Title'

export type TiltedTitleProps = {
  children: React.ReactNode;
  variant?: 'big' | 'medium' | 'small' | 'x-small';
  bgColor: string;
  color?: string;
  drop?: boolean;
  rotation?: number;
  className?: string;
};

const TiltedTitle: React.FC<TiltedTitleProps> = ({
  children,
  variant = "small",
  color = 'black',
  bgColor,
  drop, 
  rotation = 0,
  className,
}) => {
  return (
    <Title className="min-w-max" variant={variant}>
      <div
        className={clsx('relative inline-flex p-2',
          drop ? `before:absolute before:content-[""] before:-z-1 before:w-full before:h-full before:top-1 before:left-1 before:bg-black` : ``,
          `text-${color} bg-${bgColor}`,
          // `transform rotate-[${rotation}deg]`, 
          `transform rotate-[${rotation}deg]`, 
          className,
        )}>
        {children}
      </div>
    </Title>
  );
};

export default TiltedTitle;