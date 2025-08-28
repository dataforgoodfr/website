import clsx from 'clsx';
import Image from 'next/image';
import { Button, TiltedTitle, TiltedTitleProps } from '@/components';

export type ThematicsCardProps = {
  title: {
    children: React.ReactNode,
    props: Omit<TiltedTitleProps, "children">
  };
  id: string;
  talk: string;
  talkOffset?: number;
  image: string;
  imageWidth: number;
  imageHeight: number;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
};

const ThematicsCard: React.FC<ThematicsCardProps> = ({
  id,
  title,
  talk,
  talkOffset = 0,
  image,
  imageWidth,
  imageHeight,
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
        'container pb-lg relative overflow-visible fit-content',
        'flex flex-col sm:flex-row sm:items-center gap-md max-w-xl',
        className,
      )}
      {...props}
    >
      <Image
        src={image}
        alt=""
        className="absolute m-auto left-0 right-0 top-0 pb-lg justify-center h-fit -z-30 object-cover"
        loading="lazy"
        width={imageWidth}
        height={imageHeight}
      />
      <div className="pt-lg sm:w-calc(50% - 1rem)">
        <TiltedTitle {...title.props} variant='medium' className={`${title.props.className} z-1. mb-xs`}>
          {title.children}
        </TiltedTitle>
        <div className={`max-w-[289px] ml-${talkOffset}`}>
          <p className='font-normal p-2 mb-xs -z-5 text-sm md:text-sm bg-white font-medium font-primary relative inline-flex before:absolute before:content-[""] before:bg-black before:-z-2 before:w-full before:h-full before:top-1 before:left-1 before:border-0' >
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