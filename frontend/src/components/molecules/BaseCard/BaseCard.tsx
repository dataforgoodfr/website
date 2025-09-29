import clsx from 'clsx';
import Image from 'next/image';
import { Tag, Title } from '@/components/atoms';
import Link from 'next/link';


export type BaseCardProps = {
  title: string;
  tags?: string[];
  image?: string;
  link: string;
  subInfos: string[];
  className?: string;
  isBlank?: boolean;
};

const BaseCard: React.FC<BaseCardProps> = ({
  title,
  tags,
  image,
  link,
  subInfos,
  className,
  isBlank = false,
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
      target={isBlank ? '_blank' : undefined}
      rel={isBlank ? 'noreferrer' : undefined}
      href={link}
      aria-label={title}
      {...props}
    >
      <div className="relative flex flex-col z-1 bg-white h-full">
        <div className="flex flex-col justify-between flex-1 min-h-64 px-6 py-7 gap-y-2">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, index) => (
                <Tag key={index} color='text-black' bgColor="bg-violet-light">{tag}</Tag>
              ))}
            </div>
          )}
          <Title className="mt-auto font-bold" variant="xx-small" level="p">{title}</Title>

          {subInfos.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {subInfos.map((subInfo, index) => (
                <p key={index} className="text-sm text-black/60 font-black uppercase tracking-widest">{subInfo}</p>
              ))}
            </div>
          )}
        </div>
        {isBlank && !link.startsWith('/') && <div className="absolute z-1 flex items-center justify-center w-16 h-16 m-auto right-5 bottom-5 rounded-full bg-white shadow-base">
          <Image loading="lazy" src="/icons/blank-purple.svg" alt="" width={33} height={33} />
        </div>}
        <div className="w-full h-[216px] relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black/10" />
          {image && <Image loading="lazy" src={image} alt="" width={400} height={200} className="w-full h-[216px] object-contain" />}
        </div>
      </div>
    </Link>
  );
};

export default BaseCard;
