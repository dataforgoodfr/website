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
    <Title variant={variant}>
      <div
        className={clsx('relative inline-flex px-2',
          drop ? `bg-${bgColor} before:absolute before:content-[""] before:-z-1 before:w-full before:h-full before:top-1 before:left-1 before:bg-black` : `bg-${bgColor}`,
          `text-${color}`,
          `transform rotate-[${rotation}deg]`, 
          className,
        )}>
        {children}
      </div>
    </Title>
    // <Link
    //   className={clsx(
    //     // 'flex justify-center items-center w-10 h-10 border border-black transition-colors rounded-full bg-white text-black hover:bg-black hover:text-white',
    //     // 'inline-flex items-center gap-2 p-3 border border-black transition-colors bg-dark text-white hover:bg-white hover:text-black',
    //     className,
    //   )}
    // >
    //   {icon}
    // </Link>
  );
};

export default TiltedTitle;