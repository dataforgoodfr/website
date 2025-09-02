import clsx from 'clsx';
import Image from 'next/image';
import { Tag, Title } from '@/components/atoms';
import Link from 'next/link';


export type BaseCardProps = {
  title: string;
  tags: string[];
  image: string;
  link: string;
  subInfos: string[];
  className?: string;
};

const BaseCard: React.FC<BaseCardProps> = ({
  title,
  tags,
  image,
  link,
  subInfos,
  className,
  ...props
}) => {
  if (!title || !link) {
    return null;
  }

  return (
    <Link
      className={clsx(
        'relative block shadow-block shadow-block--building h-full',
        className,
      )}
      href={link}
      aria-label={title}
      {...props}
    >
      <div className="relative flex flex-col z-1 bg-white h-full">
        <div className="flex flex-col justify-between flex-1 min-h-64 px-6 py-7 gap-y-2">
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, index) => (
                <Tag key={index} bgColor="bg-building">{tag}</Tag>
              ))}
            </div>
          )}
          <Title className="my-auto" variant="small" level="p">{title}</Title>

          {subInfos.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {subInfos.map((subInfo, index) => (
                <p key={index} className="text-sm text-black/60 font-black uppercase tracking-widest">{subInfo}</p>
              ))}
            </div>
          )}
        </div>
        <div className="absolute z-1 flex items-center justify-center w-16 h-16 m-auto right-5 bottom-5 rounded-full bg-white">
          <Image loading="lazy" src="/icons/blank-purple.svg" alt="" width={33} height={33} />
        </div>
        <Image loading="lazy" src={image} alt="" width={200} height={200} className="w-full h-[216px] object-cover" />
      </div>
    </Link>
  );
};

export default BaseCard;
