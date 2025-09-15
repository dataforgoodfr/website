import clsx from 'clsx';
import Image from 'next/image';
import { Button, Title, TitleProps } from '@/components';

export type LargeTextImageProps = {
  title?: string;
  titleLevel?: TitleProps['level'];
  content?: React.ReactNode;
  image?: string;
  ctaText?: string;
  ctaLink?: string;
  citation?: string;
  citationAuthor?: string;
  citationAuthorImage?: string;
  background?: "gray" | "purple";
  className?: string;
};

const LargeTextImage: React.FC<LargeTextImageProps> = ({
  title,
  titleLevel = 2,
  content,
  image,
  ctaText,
  ctaLink,
  citation,
  citationAuthor,
  citationAuthorImage,
  background = "gray",
  className,
  ...props
}) => {
  if (!content && !citation) {
    return null;
  }

  const bgImageClass = background === "gray" ? 'bg-[url("/images/bg-highlight-gray.png")]' : 'bg-[url("/images/bg-highlight-purple.png")]';

  return (
    <div
      className={className}
      style={{
        // Get real image
        maskImage: 'url(/images/mask-papper.svg)',
        maskSize: 'cover',
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskImage: 'url(/images/mask-papper.svg)',
        WebkitMaskSize: 'cover',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
      }}
      {...props}
    >
      <div
        className={clsx(
          'overflow-hidden grid grid-cols-1 grid-rows-[200px_1fr] md:grid-rows-1 max-h-[850px] h-full',
          background === "gray" ? "text-black bg-gray-100" : "text-white bg-building",
        )}
      >
        {image && <Image src={image} alt="" loading="lazy" width={1000} height={400} className="col-start-1 row-start-1 w-full h-full object-cover" />}
        
        <div className="col-start-1 row-start-2 md:row-start-1">
            <div className={clsx(
              'flex flex-col justify-center items-start max-w-2xl lg:pl-40 ml-auto h-full bg-cover bg-left',
              bgImageClass,
            )}>
              {title && <Title level={titleLevel} variant="medium">{title}</Title>}

              {content && <div className="prose my-xs max-w-sm">{content}</div>}
              
              {citation && <div className="flex flex-wrap items-center gap-5">
                <div className="w-full font-tertiary text-xl lg:text-3xl">{citation}</div>
                {citationAuthorImage && <Image src={citationAuthorImage} alt="" width={70} height={70} />}
                {citationAuthor && <div className="flex-1 h4-like">{citationAuthor}</div>}
                </div>}

              {ctaText && ctaLink && <Button href={ctaLink}>{ctaText}</Button>}
            </div>
        </div>
      </div>
    </div>
  );
};

export default LargeTextImage;
