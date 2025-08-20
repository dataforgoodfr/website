import clsx from 'clsx';
import { Title } from '@/components/atoms';
import ThematicsCard, { ThematicsCardProps } from '@/components/molecules/ThematicsCard/ThematicsCard';

export type ThematicsProps = {
  title: string;
  subtitle: string;
  titleLevel?: 1 | 2 | 3;
  subtitleLevel?: 1 | 2 | 3;
  thematics: ThematicsCardProps[];
  className?: string;
};

const ResultsCard: React.FC<ThematicsProps> = ({
  title,
  subtitle,
  titleLevel = 1,
  subtitleLevel = 3,
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
        'container py-lg relative overflow-hidden',
        className,
      )}
      {...props}
    >
      <div className="relative z-10">
        <Title className="mb-xs text-left font-tertiary font-normal" level={titleLevel} variant="medium">
          {title}
        </Title>
        <p className="mb-sm text-left font-secondary font-medium">
          {subtitle}
        </p>

        <ul className="flex flex-wrap justify-between gap-xs mt-md">
          {thematics.map((thematic, index) => (
            <li
              key={index}
              className="max-w-80"
            >
                <ThematicsCard 
                    title={thematic.title} 
                    talk={thematic.talk} 
                    talkOffset={thematic.talkOffset}
                    image={thematic.image} 
                    imageWidth={thematic.imageWidth} 
                    imageHeight={thematic.imageHeight} 
                    ctaText={thematic.ctaText} 
                    ctaLink={thematic.ctaLink}
                />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResultsCard;
