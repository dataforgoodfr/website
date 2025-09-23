import { Title, TitleProps } from '@/components';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export type InformationsBlockProps = {
  title?: string;
  titleLevel?: TitleProps['level'];
  informations: {
    title: string;
    titleLevel?: TitleProps['level'];
    text: {
      info: string;
      ctaLink?: string;
    }[];
  }[];
  className?: string;
};

const InformationsBlock: React.FC<InformationsBlockProps> = ({
  title,
  titleLevel = 2,
  informations,
  className,
  ...props
}) => {
  if (!informations.length) {
    return null;
  }

  return (
    <div
      className={clsx('container', className)}
      {...props}
    >
      {title && (
        <Title variant="medium" className="mb-md text-start" level={titleLevel}>
          {title}
        </Title>
      )}

      <div className="flex flex-col items-start">
        {informations.map((information, index) => (
          <div key={index}>
            <Title variant="small" className="mb-xs" level={(titleLevel as number) + 1 as TitleProps['level']}>
              {information.title}
            </Title>
            <p className="text-md font-medium font-tertiary relative">
              {information.text.map((info, index) => {
                if(info.ctaLink) {
                  return (<span key={index}><Link className="underline" href={info.ctaLink}>{info.info}</Link>&nbsp;</span>)
                }
                return <span key={index}>{info.info}&nbsp;</span>
              })}
            </p>
            {index !== informations.length - 1 &&
              <Image loading="lazy" src="/images/separate.svg" alt="" width={200} height={10} className="mt-sm mb-sm w-full h-auto" />
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default InformationsBlock;
