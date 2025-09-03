import clsx from 'clsx';
import Image from 'next/image';
import { Button, Title, TitleProps } from '@/components';

export type EditoCardProps = {
  title?: string;
  titleLevel?: TitleProps['level'];
  titleVariant?: TitleProps['variant'];
  titleClassName?: string;
  content: React.ReactNode;
  contentClassName?: string;
  image: string;
  imageClassName?: string;
  imagePosition?: 'left' | 'right';
  imageAlt?: string;
  imageText?: string;
  imageTextClassName?: string;
  imageTextRotation?: number;
  ctaText?: string;
  ctaLink?: string;
  ctaClassName?: string;
  className?: string;
};

const EditoCard: React.FC<EditoCardProps> = ({
  title,
  titleLevel = 2,
  titleVariant = 'medium',
  titleClassName,
  content,
  contentClassName = 'prose my-xs',
  image,
  imageClassName = '',
  imagePosition = 'right',
  imageAlt = '',
  imageText,
  imageTextClassName = 'left-4 top-4',
  imageTextRotation = 0,
  ctaText,
  ctaLink,
  ctaClassName = 'mt-sm',
  className,
  ...props
}) => {
  if (!content) {
    return null;
  }

  return (
    <div
      className={clsx(
        'container flex flex-col sm:flex-row sm:items-center gap-md',
        className,
      )}
      {...props}
    >
      <div className="flex-1">
        {title && (
          <Title level={titleLevel} variant={titleVariant} className={titleClassName}>
            {title}
          </Title>
        )}

        <div className={contentClassName}>
          {content}
        </div>

        {ctaText && ctaLink && (
          <Button href={ctaLink} color="white" hasArrow className={ctaClassName}>
            {ctaText}
          </Button>
        )}
      </div>

      {image && (
        <div className={clsx(
          'relative w-full sm:w-[calc(50%_-_1rem)]',
          imageClassName,
          imagePosition === 'left' && 'sm:-order-1',
        )}>
          <Image src={image} alt={imageAlt} className="w-full h-full object-contain" loading="lazy" width={400} height={400} />

          {imageText && (
            <div className={clsx(
              'absolute z-1 before:absolute before:content-[""] before:-z-1 before:bg-black before:w-full before:h-full before:top-1 before:left-1',
              imageTextClassName,
            )} style={{ transform: `rotate(${imageTextRotation}deg)` }}>
              <p className="relative z-2 h2-like p-2 text-black bg-white">{imageText}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EditoCard;
