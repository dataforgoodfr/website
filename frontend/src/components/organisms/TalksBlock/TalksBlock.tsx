import { Title, TitleProps } from '@/components';
import { TalkCard, TalkCardProps } from '@/components/molecules';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import Image from "next/image"

export type TalksBlockProps = {
  title?: string;
  titleLevel?: TitleProps['level'];
  talks: TalkCardProps[];
  isHome?: boolean;
  className?: string;
};

const TalksBlock: React.FC<TalksBlockProps> = ({
  title,
  titleLevel = 2,
  isHome = false,
  talks,
  className,
  ...props
}) => {
  if (!talks.length) {
    return null;
  }

  const t = useTranslations('home');

  return (
    <div
      className={clsx('container', className)}
      {...props}
    >
      {isHome && <Image
        src="/icons/dot-orange.svg"
        width={35}
        height={35}
        alt={t('dot.orange')}
        className='mx-auto mb-xs'
      />}
      {title && (
        <Title variant="medium" className="text-center mx-auto md:max-w-[40%]" level={titleLevel}>
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
