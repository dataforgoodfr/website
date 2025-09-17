import type { TiltedTitleProps, TitleProps } from '@/components';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Button, TiltedTitle, Title } from '@/components';

export type ThumbnailProjectProps = {
  name: TiltedTitleProps;
  baseline?: string;
  images?: string[];
  link: string;
  company?: string;
  description?: string;
  kpis?: {
    name: string;
    description: string;
  }[];
  className?: string;
};

const ThumbnailProject: React.FC<ThumbnailProjectProps> = ({
  name,
  baseline,
  images,
  link,
  company,
  description,
  kpis,
  className,
  ...props
}) => {
  const t = useTranslations('components.thumbnailProject');
  const baseTitleLevel = name.level ?? 2;

  if (!name || !link) {
    return null;
  }

  return (
    <div className={clsx(className, 'flex flex-col md:flex-row gap-10 md:gap-20')} {...props}>
      <div className="flex-1">
        <TiltedTitle level={baseTitleLevel} rotation={name.rotation ?? -5} className={clsx(name.className, 'relative z-1 drop-shadow-3 drop-shadow-black')}>{name.children}</TiltedTitle>
        {images?.length && (
          <div className="grid gap-4 mb-sm">
            {images.map((image, index) => (
              <div key={index} className={clsx('shadow-block sm:col-start-1 sm:row-start-1 max-w-full', index % 2 === 0 ? 'w-[370px] h-[250px] justify-self-start shadow-block--alive items-start -rotate-2 before:rotate-2' : 'w-[330px] h-[200px] justify-self-end self-end shadow-block--resistance items-end rotate-6 before:-translate-x-2')}>
                <Image src={image} alt="" width={1000} height={400} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}
        {baseline && <Title level="p" variant="small" className="mb-xs">{baseline}</Title>}
        {company && <Title level="p" variant="x-small" className="mb-xs">{company}</Title>}
        {description && <p className="lead mb-xs">{description}</p>}

        <Button href={link}>{t('cta')}</Button>
      </div>

      {kpis && (
        <div className="w-full md:w-48 lg:w-96">
          <Title level={(typeof baseTitleLevel === 'number' ? baseTitleLevel + 1 : 3) as TitleProps['level']} variant="small" hasSeparator className="mb-sm">{t('impacts')}</Title>

          <ul>
            {kpis.map((kpi, index) => (
              <li key={index} className="mb-md">
                <div className="flex items-center gap-2">
                  <Image src="/images/bullet-purple.svg" alt="" width={22} height={22} className="w-[22px] h-[22px] object-contain" />
                  <Title level="p" variant="medium" className="flex-1">{kpi.name}</Title>
                </div>
                <p className="lead">{kpi.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ThumbnailProject;
