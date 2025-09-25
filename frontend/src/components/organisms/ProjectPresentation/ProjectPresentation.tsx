import { Tag, Title, TitleProps } from '@/components';
import clsx from 'clsx';
import Image from 'next/image'
import { useTranslations } from 'next-intl';

export type ProjectPresentationProps = {
  tags?: {
    label?: string;
    type: 'temporal' | 'subject';
  }[];
  description: string[];
  associations: {
    logo?: string;
    altLogo?: string;
    summary: string;
  }[];
  className?: string;
};

const ProjectPresentation: React.FC<ProjectPresentationProps> = ({
  description,
  associations = [],
  tags = [],
  className,
  ...props
}) => {
  const t = useTranslations('components.projectPresentation');

  return (
    <div
      className={clsx("container flex flex-col lg:flex-row lg:items-start gap-md", className)}
      {...props}
    >
      <div className="flex-1 prose prose--big">
        {description.map((paragraph, index) => (<p key={index}>{paragraph}</p>))}
      </div>

      <div className="flex-1">
        {tags.length > 0 && (<>
          <Title level="p" variant="x-small" className="mb-xs">{t('tags')}</Title>
          <ul className="flex flex-row flex-wrap gap-x-1 gap-y-2.5 max-w-96">
            {tags.map((tag, index) => (
              <li key={index}><Tag color="text-black" bgColor="bg-back-green" className="normal-case">{tag.label ?? ''}</Tag></li>
            ))}
          </ul>
        </>)}

        {associations.length > 0 && (<>
          <Title level="p" variant="x-small" className="mt-sm mb-xs">{t('associations')}</Title>
          <ul className="flex flex-col gap-xs">
            {associations.map((association, index) => (
              <li key={index}>
                <div className="flex items-center gap-3 bg-white">
                  {association.logo && <Image loading="lazy" src={association.logo} alt={association.altLogo || ""} width={200} height={200} className="w-auto h-auto max-w-[83px] object-contain" />}
                  <div className="flex-1 text-xs p-5">
                    {association.summary}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </>)}
      </div>
    </div>
  );
};

export default ProjectPresentation;
