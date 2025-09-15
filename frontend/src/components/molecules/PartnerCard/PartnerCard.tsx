import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Title, TitleProps } from '@/components';

export type PartnerCardProps = {
  name: string;
  titleLevel?: TitleProps['level'];
  description?: string;
  image: string;
  link: string;
  className?: string;
};

const PartnerCard: React.FC<PartnerCardProps> = ({
  name,
  titleLevel = 3,
  description,
  image,
  link,
  className,
  ...props
}) => {
  if (!name || !link) {
    return null;
  }

  return (
    <Link
      className={clsx(
        'shadow-block shadow-block--black w-full h-full',
        className,
      )}
      target="_blank" rel="noreferrer" 
      href={link}
      aria-label={name}
      {...props}
    >
      <div className="flex flex-col sm:flex-row items-center bg-white h-full">
        <Image loading="lazy" src={image} alt="" width={130} height={130} className="w-[130px] h-[130px] object-contain p-5" />
        <div className="flex-1 flex flex-col justify-center gap-xs py-10 px-5">
          <Title level={titleLevel} variant="x-small">{name}</Title>
          {description && <p>{description}</p>}
        </div>
      </div>
    </Link>
  );
};

export default PartnerCard;
