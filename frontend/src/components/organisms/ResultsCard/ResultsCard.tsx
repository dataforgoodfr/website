import clsx from 'clsx';
import Image from 'next/image';
import { Button, Title, TitleProps } from '@/components';

export type ResultsCardProps = {
  title: string;
  titleLevel?: TitleProps['level'];
  results: {
    id: string;
    text?: string;
    number: number;
    linkLabel: string;
    linkTarget: string;
  }[];
  className?: string;
};

const ResultsCard: React.FC<ResultsCardProps> = ({
  title,
  titleLevel = 2,
  results,
  className,
  ...props
}) => {
  if (!title || !results.length) {
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
      <Image
        src="/images/confettis.svg"
        alt=""
        width={1000}
        height={1000}
        loading="lazy"
        className="absolute top-0 left-0 z-0 w-full h-full opacity-20"
      />

      <div className="relative z-10">
        <Image
          src="/images/marty-2.svg"
          alt=""
          width={52}
          height={70}
          className="mx-auto mb-xs"
        />
        <Title className="mb-md text-center" level={titleLevel} variant="medium">
          {title}
        </Title>

        <ul className="flex flex-wrap justify-between gap-sm mt-md">
          {results.map(result => (
            <li
              key={result.id}
              className="max-w-80"
            >
              <p className="mb-4 font-tertiary">
                <span className="block font-secondary text-7xl">{result.number.toLocaleString()}</span>
                {result.text && <span className="h3-like">
                  {result.text}
                </span>}
              </p>

              <Button
                href={result.linkTarget}
                color="white"
              >
                {result.linkLabel}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResultsCard;
