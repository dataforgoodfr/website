import clsx from 'clsx';
import Image from 'next/image';
import { TiltedTitle } from '@/components/atoms';

export type ThematicHeroBlockProps = {
  image: string;
  title: string;
  className?: string;
  titleClassName?: string;
  colors?: 'blue' | 'alive' | 'resistance' | 'building';
};

const ThematicHeroBlock: React.FC<ThematicHeroBlockProps> = ({
  image,
  title,
  className,
  titleClassName,
  colors = 'alive',
  ...props
}) => {
  if (!title) {
    return null;
  }

  const colorsClass = {
    blue: 'text-black bg-blue',
    alive: 'text-black bg-alive',
    resistance: 'text-black bg-resistance',
    building: 'text-white bg-building',
  };

  return (
    <div
      className={clsx(
        'container grid grid-rows-1 grid-cols-1',
        className,
      )}
      {...props}
    >
      <div className="col-start-1 row-start-1">
        <Image src={image} alt="" width={1000} height={400} className="object-contain h-full w-full" />
      </div>
      <div className="col-start-1 row-start-1 flex items-center justify-center">
        <TiltedTitle variant="big" className={clsx(titleClassName, 'drop-shadow-3 drop-shadow-black')} colors={colorsClass[colors]}>{title}</TiltedTitle>
      </div>
    </div>
  );
};

export default ThematicHeroBlock;
