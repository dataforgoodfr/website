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
  image?: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
};

const ThematicsCard: React.FC<ThematicsCardProps> = ({
  id,
  title,
  talk,
  talkOffset = 0,
  image = "/images/default-image.svg",
  ctaText,
  ctaLink,
  className,
  ...props
}) => {
  if (!title || !talk) {
    return null;
  }

  return (
    <div
      className={clsx(
        'container pb-lg md:pb-0 relative overflow-visible fit-content',
        'flex flex-col sm:flex-row sm:items-center gap-md max-w-xl',
        className,
      )}
      {...props}
    >
      <Image
        src={image}
        alt=""
        className="absolute m-auto left-0 right-0 top-0 bottom-0 lg:bottom-auto pb-lg justify-center h-full lg:h-fit -z-30 object-contain lg:object-cover"
        loading="lazy"
        width="301"
        height="401"
      />
      <div className="pt-lg mb-xs">
        <TiltedTitle {...title.props} variant="small" className={`${title.props.className} z-1. mb-xs`}>
          {title.children}
        </TiltedTitle>
        <div className={` ml-${talkOffset}`}>
          <p className='relative p-2 mb-xs -z-5 text-sm md:text-sm bg-white font-medium font-primary inline-flex shadow-base' >
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