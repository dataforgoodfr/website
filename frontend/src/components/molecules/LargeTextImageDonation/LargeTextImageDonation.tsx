import clsx from 'clsx';
import Image from 'next/image';
import { Button, Title, TitleProps } from '@/components';

export type LargeTextImageDonationProps = {
  id?: string;
  title?: string;
  titleLevel?: TitleProps['level'];
  content?: React.ReactNode;
  iframe?: React.ReactNode;
  image?: string;
  citation?: string;
  citationAuthor?: string;
  citationAuthorImage?: string;
  background?: "gray" | "purple";
  internalClassName?: string;
  className?: string;
};

const LargeTextImageDonation: React.FC<LargeTextImageDonationProps> = ({
  id,
  title,
  titleLevel = 2,
  content,
  iframe,
  image,
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
          `text-white bg-[url("/images/donation-background.jpg")]`,
          internalClassName,
        )}
      >
        <div className={clsx("col-start-1 md:col-start-1 row-start-2 md:row-start-1 flex flex-col justify-center items-start md:pl-32 p-12 py-24 bg-cover bg-left")}>
          {image && <Image src={image} alt="" loading="lazy" width={1000} height={800} className="col-start-1 md:col-end-3 row-start-1 w-full h-full object-cover" />}
          {title && <Title level={titleLevel} variant="medium">{title}</Title>}
        </div>

        <div className={clsx("col-start-1 md:col-start-2 row-start-2 md:row-start-1 flex flex-col justify-center items-start md:pl-32 p-12 py-24 bg-cover bg-left")}>
          {iframe && <div className="mt-8 flex justify-center h-full items-center w-full">{iframe}</div>}
        </div>
      </div>
    </div>
  );
};

export default LargeTextImageDonation;
