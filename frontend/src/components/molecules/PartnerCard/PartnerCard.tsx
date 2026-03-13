import clsx from 'clsx';
import ImageWithCredit from '@/components/molecules/ImageWithCredit';
import Link from 'next/link';
import { Title, TitleProps } from '@/components';

export type PartnerCardProps = {
  name: string;
  titleLevel?: TitleProps['level'];
  description?: string;
  image?: string;
  imageCredit?: string | null;
  link: string;
  className?: string;
};

const PartnerCard: React.FC<PartnerCardProps> = ({
  name,
  titleLevel = 3,
  description,
  image = "/images/default-image.svg",
  imageCredit,
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
        'shadow-block shadow-block--building w-full h-full',
        className,
      )}
      href={link}
      aria-label={name}
      
    >
      <div className="flex flex-col sm:flex-row items-center bg-white h-full">
        <ImageWithCredit loading="lazy" src={image} alt="" credit={imageCredit} width={157} height={157} className="w-[157px] h-[157px] object-contain" />
        <div className="flex-1 flex flex-col justify-center gap-xs py-10 px-5">
          <Title level={titleLevel} variant="x-small">{name}</Title>
          {description && <p>{description}</p>}
        </div>
      </div>
    </Link>
  );
};

export default PartnerCard;
