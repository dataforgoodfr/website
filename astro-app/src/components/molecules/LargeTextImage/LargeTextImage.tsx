import clsx from 'clsx';
import Image from 'next/image';
import { Button, Title, TitleProps } from '@/components';

export type LargeTextImageProps = {
  id?: string;
  title?: string;
  titleLevel?: TitleProps['level'];
  content?: React.ReactNode;
  iframe?: React.ReactNode;
  image?: string;
  ctaText?: string;
  ctaLink?: string;
  citation?: string;
  citationAuthor?: string;
  citationAuthorImage?: string;
  background?: "gray" | "purple";
  internalClassName?: string;
  className?: string;
};

const LargeTextImage: React.FC<LargeTextImageProps> = ({
  id,
  title,
  titleLevel = 2,
  content,
  iframe,
  image,
  ctaText,
  ctaLink,
  citation,
  citationAuthor,
  citationAuthorImage,
  background = "gray",
  internalClassName,
  className,
  ...props
}) => {
  const bgImageClass = background === "gray" ? 'md:bg-[url("/images/bg-highlight-gray.png")]' : 'md:bg-[url("/images/bg-highlight-purple.png")]';

  return (
    <div
      id={id}
      className={clsx(className, 'mask-papper')}
      {...props}
    >
      <div
        className={clsx(
          'overflow-hidden grid grid-cols-1 grid-rows-[200px_1fr] md:grid-cols-2 md:grid-rows-1 h-full',
          background === "gray" ? "text-black bg-gray-100" : "text-white bg-building",
          internalClassName,
        )}
      >
        {image && <Image src={image} alt="" loading="lazy" width={1000} height={800} className="col-start-1 md:col-end-3 row-start-1 w-full h-full object-cover" />}

        <div className={clsx("col-start-1 md:col-start-2 row-start-2 md:row-start-1 flex flex-col justify-center items-start md:pl-32 p-12 py-24 bg-cover bg-left", bgImageClass)}>
          {title && <Title level={titleLevel} variant="medium">{title}</Title>}

          {content && <div className="my-xs max-w-sm"><p className='lead'>{content}</p></div>}

          {iframe && <div className="mt-8 rounded-md flex justify-center  items-center w-full">{iframe}</div>}

          {citation && <div className="flex flex-wrap items-center gap-5 px-8">
            <div className="w-full font-tertiary text-xl lg:text-3xl lg:leading-normal">{citation}</div>
            {citationAuthorImage && <Image src={citationAuthorImage} alt="" width={70} height={70} className="mask-person" />}
            {citationAuthor && <div className="flex-1 h4-like uppercase">{citationAuthor}</div>}
            </div>}

          {ctaText && ctaLink && <Button href={ctaLink}>{ctaText}</Button>}
        </div>
      </div>
    </div>
  );
};

export default LargeTextImage;
