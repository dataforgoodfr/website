import clsx from 'clsx';
import Image from 'next/image';
import { Button } from '@/components/atoms';

export type ResultsCardProps = {
  title: string;
  titleLevel?: 1 | 2 | 3;
  results: {
    id: string;
    text: string;
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
  const TitleComponent = `h${titleLevel}` as keyof JSX.IntrinsicElements;

  if (!title || !results.length) {
    return null;
  }

  return (
    <div
      className={clsx(
        'container py-lg px-4',
        className,
      )}
      {...props}
    >
      <Image
        src="/images/marty-2.svg"
        alt=""
        width={52}
        height={70}
        className="mx-auto mb-xs"
      />
      <TitleComponent className="mb-md text-h2 font-bold text-center">
        {title}
      </TitleComponent>

      <ul className="flex flex-wrap justify-between gap-sm mt-md">
        {results.map(result => (
          <li
            key={result.id}
            className="max-w-80"
          >
            <p className="mb-4">
              <span className="block font-secondary text-7xl">{result.number.toLocaleString()}</span>
              <span className="text-h3">
                {result.text}
              </span>
            </p>

            <Button
              href={result.linkTarget}
              variant="secondary"
            >
              {result.linkLabel}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsCard;
