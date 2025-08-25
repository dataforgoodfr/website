import clsx from 'clsx';
import Image from 'next/image';
import { Button } from '@/components';

export type TalkCardProps = {
  author: string;
  talk: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
  imagePosition?: 'left' | 'right';
};

const TalkCard: React.FC<TalkCardProps> = ({
  author,
  talk,
  image,
  ctaText,
  ctaLink,
  className,
  imagePosition = 'left',
  ...props
}) => {
  if (!author || !talk || !image) {
    return null;
  }

  return (
    <div
      className={clsx(
        'flex flex-col sm:flex-row sm:items-center gap-md py-md max-w-4xl',
        className,
      )}
      {...props}
    >
      <div className={clsx(
        'w-full sm:w-calc(50% - 1rem)',
        imagePosition === 'right' && 'sm:order-2',
      )}>
        <div className={clsx(
          'relative inline-flex before:absolute before:content-[""] before:bg-black before:-z-1 before:w-full before:h-full before:top-3 before:left-3',
          imagePosition === 'right' ? 'rotate-3' : '-rotate-3',
        )}>
          <Image
            src={image}
            alt=""
            className="relative z-1 w-full sm:w-[400px] sm:h-[237px] object-cover"
            loading="lazy"
            width={400}
            height={237}
          />
        </div>
      </div>
      <div className="w-full sm:w-calc(50% - 1rem)">
        <p className="h4-like">
          {author}
        </p>
        <p className="my-xs text-xl md:text-3xl font-bold font-tertiary">
          {talk}
        </p>
        {ctaText && ctaLink && (
          <Button href={ctaLink} color="white" hasArrow>
            {ctaText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default TalkCard;
