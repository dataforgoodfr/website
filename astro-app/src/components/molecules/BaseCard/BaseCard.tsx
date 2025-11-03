import { Tag, Title } from '@/components/atoms';
import clsx from 'clsx';


export type BaseCardProps = {
  title: string;
  tags?: string[];
  image?: string;
  link: string;
  subInfos: string[];
  className?: string;
  isBlank?: boolean;
  titleLevel?: 1 | 2 | 3 | 4 | 5 | 6;
};

const BaseCard: React.FC<BaseCardProps> = ({
  title,
  tags,
  image,
  link,
  subInfos,
  className,
  isBlank = false,
  titleLevel = 3,
  ...props
}) => {
  if (!title || !link) {
    return null;
  }

return (
    <a
      className={clsx(
        'relative block max-sm:mx-5 shadow-block shadow-block--building h-full',
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
                <Tag key={index} color='text-black' bgColor='bg-violet-light'>{tag}</Tag>
              ))}
            </div>
          )}
          <Title level={titleLevel} variant="x-small">{title}</Title>
        </div>
        <div className="w-full h-[216px] relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black/10" />
          {image && <img loading="lazy" src={image} alt="" width={400} height={200} className="w-full h-[216px] object-contain" />}
        </div>
      </div>
    </a>
  );
};

export default BaseCard;
