import clsx from 'clsx';
import { Title, TitleProps } from '@/components/atoms';
import ThematicsCard, { ThematicsCardProps } from '@/components/molecules/ThematicsCard/ThematicsCard';
import Image from "next/image"
import { useTranslations } from 'next-intl';

export type ThematicsProps = {
  title: string;
  subtitle?: string;
  titleLevel?: 1 | 2 | 3;
  isHome?: boolean;
  thematics: ThematicsCardProps[];
  className?: string;
};

const ThematicsBlock: React.FC<ThematicsProps> = ({
  title,
  subtitle,
  titleLevel = 2,
  isHome = false,
  thematics,
  className,
  ...props
}) => {
  if (!title || !thematics.length) {
    return null;
  }

  const t = useTranslations('home');

  return (
    <div
      className={clsx(
        'container',
        className,
      )}
      {...props}
    >
      <div className="relative z-10">
        <div className='flex flex-row'>
          {isHome && <Image
            src="/icons/dot-purple.svg"
            width={35}
            height={35}
            alt={t('dot.purple')}
            className='mr-2 mb-xs'
          />}
          <Title className="mb-xs text-left" level={titleLevel} variant="medium">
            {title}
          </Title>
        </div>
        {subtitle && <p className="mb-sm text-left lead">
          {subtitle}
        </p>}

        <ul className="grid grid-cols-1 md:flex md:flex-wrap justify-between gap-md md:gap-xs mt-md">
          {thematics.map((thematic, index) => (
            <li
              key={index}
              className="md:min-w-[420px] flex-1"
            >
              <ThematicsCard
                {...{
                  ...thematic,
                  title: {
                    ...thematic.title,
                    props: {
                      ...thematic.title.props,
                      level: titleLevel + 1 as TitleProps['level'],
                    },
                  },
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ThematicsBlock;
