import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Tag } from '@/components/atoms';

export type NewsSmallCardProps = {
  title: string;
  tag: string;
  image: string;
  link: string;
  date: string;
  className?: string;
};

const NewsSmallCard: React.FC<NewsSmallCardProps> = ({
  title,
  tag,
  image,
  link,
  date,
  className,
  ...props
}) => {
  if (!title || !link) {
    return null;
  }

  return (
    <Link
      className={clsx(
        'relative block before:bg-building before:absolute before:content-[""] before:-z-1 before:w-full before:h-full before:top-1 before:left-1 hover:before:top-0 hover:before:left-0 focus:before:top-0 focus:before:left-0 before:transition-base',
        className,
      )}
      href={link}
      aria-label={title}
      {...props}
    >
      <div className="relative z-1 flex flex-col sm:flex-row items-stretch gap-md gap-y-2 bg-white">
        <div className="relative sm:order-2 sm:flex-1 h-24 sm:h-auto">
          <Image loading="lazy" src={image} alt="" width={100} height={100} className="absolute w-full h-full object-cover" />
        </div>
        <div className="flex flex-col items-start gap-xs w-full sm:w-1/2 p-7">
          <Tag>{tag}</Tag>
          <p className="font-secondary font-bold">{title}</p>
          <p className="text-sm text-black/60 font-black uppercase tracking-widest">{date}</p>
        </div>
        <div className="absolute z-1 flex items-center justify-center w-16 h-16 m-auto top-4 sm:top-0 sm:bottom-0 right-4 sm:right-10 rounded-full bg-white">
          <Image loading="lazy" src="/icons/blank-purple.svg" alt="" width={33} height={33} />
        </div>
      </div>
    </Link>
  );
};

export default NewsSmallCard;
