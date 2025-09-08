import type { TitleProps } from '@/components';
import clsx from 'clsx';
import { Title } from '@/components';
import { TalkCard } from '@/components/molecules';

export type TalksBlockProps = {
  title?: string;
  titleLevel?: TitleProps['level'];
  talks: {
    author: string;
    talk: string;
    image: string;
    ctaText?: string;
    ctaLink?: string;
  }[];
  className?: string;
};

const TalksBlock: React.FC<TalksBlockProps> = ({
  title,
  titleLevel = 2,
  talks,
  className,
  ...props
}) => {
  if (!talks.length) {
    return null;
  }

  return (
    <div
      className={clsx('container', className)}
      {...props}
    >
      {title && (
        <Title variant="medium" className="text-center" level={titleLevel}>
          {title}
        </Title>
      )}

      <div className="flex flex-col items-center">
        {talks.map((talk, index) => (
          <TalkCard key={index} {...talk} imagePosition={index % 2 === 0 ? 'left' : 'right'} />
        ))}
      </div>
    </div>
  );
};

export default TalksBlock;
