import clsx from 'clsx';
import Image from 'next/image';
import { Button, TiltedTitle, TiltedTitleProps } from '@/components';

export type ThematicsCardProps = {
  title: {
    children: React.ReactNode,
    props: Omit<TiltedTitleProps, "children">
  };
  talk: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
  imagePosition?: 'left' | 'right';
};

const ThematicsCard: React.FC<ThematicsCardProps> = ({
  title,
  talk,
  image,
  ctaText,
  ctaLink,
  className,
  ...props
}) => {
  if (!title || !talk || !image) {
    return null;
  }

  return (
    <div
      className={clsx(
        'container py-lg relative overflow-hidden',
        'flex flex-col sm:flex-row sm:items-center gap-md py-md max-w-4xl',
        className,
      )}
      {...props}
    >
      <div className="w-full sm:w-calc(50% - 1rem)">
          <Image
            src={image}
            alt=""
            className="absolute z-10 w-full sm:w-[400px] sm:h-[237px] object-cover"
            loading="lazy"
            width={400}
            height={237}
          />
        <TiltedTitle {...title.props}>
            {title.children}
        </TiltedTitle>
        <div>
          <p className='font-normal p-2 my-xs text-sm md:text-xl bg-white font-medium font-primary relative inline-flex before:absolute before:content-[""] before:bg-black before:-z-1 before:w-full before:h-full before:top-1 before:left-1 before:border-0' >
          {talk}
          </p>
        </div>
        {ctaText && ctaLink && (
          <Button href={ctaLink} color="white" hasArrow>
            {ctaText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ThematicsCard;