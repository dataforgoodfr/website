import clsx from 'clsx';
import Image from 'next/image';
import { Tag } from '@/components/atoms';
import Link from 'next/link';


export type NewsSmallCardProps = {
  title?: string;
  tags: string[];
  image?: string;
  link: string;
  date: string;
  className?: string;
};

const NewsSmallCard: React.FC<NewsSmallCardProps> = ({
  title,
  tags,
  image = "/images/default-image.svg",
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
        'relative block shadow-block shadow-block--building',
        className,
      )}
      href={link}
      aria-label={title}
      {...props}
    >
      <div className="relative z-1 flex flex-col sm:flex-row items-stretch gap-md gap-y-2 bg-white">
        <div className="relative sm:order-2 sm:flex-1 h-24 sm:h-auto">
          <Image loading="lazy" src={image} alt="" width={400} height={200} className="absolute w-full h-full object-contain" />
        </div>
        <div className="flex flex-col items-start gap-xs w-full sm:w-1/2 p-7">
          {tags?.map((tag) => (<Tag color='text-black' bgColor='bg-violet-light'>{tag}</Tag>))}
          <p className="font-secondary font-bold">{title}</p>
          <p className="text-sm text-black/60 font-black uppercase tracking-widest">{date}</p>
        </div>
        {!link.startsWith('/') && <div className="absolute z-1 flex items-center justify-center w-16 h-16 m-auto top-4 sm:top-0 sm:bottom-0 right-4 sm:right-10 rounded-full shadow-base bg-white">
          <Image loading="lazy" src="/icons/blank-purple.svg" alt="" width={33} height={33} />
        </div>}
      </div>
    </Link>
  );
};

export default NewsSmallCard;
