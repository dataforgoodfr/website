import { Title, TitleProps } from '@/components';
import { PartnerCard, PartnerCardProps } from '@/components/molecules';
import Image from 'next/image';
import clsx from 'clsx';

export type PartnersBlockProps = {
  title?: string;
  titleLevel?: TitleProps['level'];
  partners: PartnerCardProps[];
  className?: string;
};

const PartnersBlock: React.FC<PartnersBlockProps> = ({
  title,
  titleLevel = 2,
  partners,
  className,
  ...props
}) => {
  if (!partners.length) {
    return null;
  }

  return (
    <div
      className={clsx('container', className)}
      {...props}
    >
      {title && (<div className="mb-sm">
        <Title variant="medium" className="mb-xs" level={titleLevel}>
          {title}
        </Title>
        <Image loading="lazy" src="/images/separate.svg" alt="" width={200} height={10} className="w-full h-auto" />
      </div>)}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {partners.map((partner, index) => (
          <PartnerCard key={index} titleLevel={titleLevel + 1 as TitleProps['level']} {...partner} />
        ))}
      </div>
    </div>
  );
};

export default PartnersBlock;
