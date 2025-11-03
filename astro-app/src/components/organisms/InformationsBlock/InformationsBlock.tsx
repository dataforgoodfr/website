import { Title, type TitleProps } from '@/components';
import clsx from 'clsx';

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

      {informations.map((information, index) => (
        <div key={index}>
          <Title variant="xx-small" className="mb-xs" level={(titleLevel as number) + 1 as TitleProps['level']}>
            {information.title}
          </Title>
          <p className="text-sm font-normal">
            {information.text.map((info, index) => {
              if (info.ctaLink) {
                return (<span key={index}><a className="underline" href={info.ctaLink}>{info.info}</a>&nbsp;</span>)
              }
              return <span key={index}>{info.info}&nbsp;</span>
            })}
          </p>
          <img loading="lazy" src="/images/separate.svg" alt="" width={200} height={10} className="mt-sm mb-sm w-full h-auto" />
        </div>
      ))}
    </div>
  );
};

export default InformationsBlock;
