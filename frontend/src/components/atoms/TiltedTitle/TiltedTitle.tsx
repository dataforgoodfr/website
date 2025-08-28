import clsx from 'clsx';
import Title from '../Title/Title'

export type TiltedTitleProps = {
  children: React.ReactNode;
  variant?: 'big' | 'medium' | 'small' | 'x-small';
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  rotation?: number;
  className?: string;
  colors: string;
};

const TiltedTitle: React.FC<TiltedTitleProps> = ({
  children,
  variant = "small",
  level = 1,
  rotation = 0,
  className,
  colors = "text-white bg-building"
}) => {
  return (
    <Title className={clsx('min-w-max relative inline-flex',
      className,
    )} style={{ "transform": `rotate(${rotation}deg` }} variant={variant} level={level}>
      <div className={clsx(colors, "relative p-2")}
      >
        {children}
      </div>
    </Title>
  );
};

export default TiltedTitle;