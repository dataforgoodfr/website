import type { TitleProps } from '@/components';
import type { PartnerCardProps } from '@/components/molecules';
import clsx from 'clsx';
import { Title } from '@/components';
import { PartnerCard } from '@/components/molecules';

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
      {title && (
        <Title variant="medium" className="mb-sm" level={titleLevel} hasSeparator>
          {title}
        </Title>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {partners.map((partner, index) => (
          <PartnerCard key={index} titleLevel={(typeof titleLevel === 'number' ? titleLevel + 1 : titleLevel) as TitleProps['level']} {...partner} />
        ))}
      </div>
    </div>
  );
};

export default PartnersBlock;
