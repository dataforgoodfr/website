import clsx from 'clsx';
import { Title, TitleProps } from '@/components/atoms';
import ThematicsCard, { ThematicsCardProps } from '@/components/molecules/ThematicsCard/ThematicsCard';

export type ThematicsProps = {
  title: string;
  subtitle?: string;
  titleLevel?: 1 | 2 | 3;
  thematics: ThematicsCardProps[];
  className?: string;
};

const ThematicsBlock: React.FC<ThematicsProps> = ({
  title,
  subtitle,
  titleLevel = 2,
  thematics,
  className,
  ...props
}) => {
  if (!title || !thematics.length) {
    return null;
  }

  return (
    <div
      className={clsx(
        'container',
        className,
      )}
      {...props}
    >
      <div className="relative z-10">
        <Title className="mb-xs text-left" level={titleLevel} variant="medium">
          {title}
        </Title>
        {subtitle && <p className="mb-sm text-left lead">
          {subtitle}
        </p>}

        <ul className="flex flex-wrap justify-between gap-md md:gap-xs mt-md">
          {thematics.map((thematic, index) => (
            <li
              key={index}
              className="min-w-[420px] flex-1"
            >
              <ThematicsCard
                {...{...thematic,
                  title: {
                    ...thematic.title,
                    props: {
                      ...thematic.title.props,
                      level: titleLevel +1 as TitleProps['level'],
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
