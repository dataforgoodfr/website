import clsx from 'clsx';
import Image from 'next/image';
import Confetti from 'react-confetti';
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
        'container py-lg px-4 relative overflow-hidden',
        className,
      )}
      {...props}
    >
      <Confetti
        width={typeof window !== 'undefined' ? window.innerWidth : 1200}
        height={typeof window !== 'undefined' ? window.innerHeight : 800}
        recycle={true}
        numberOfPieces={200}
        gravity={0.05}
        friction={0.99}
        wind={0}
        tweenDuration={5000}
        colors={['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD']}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
        confettiSource={{
          x: typeof window !== 'undefined' ? window.innerWidth / 2 : 600,
          y: typeof window !== 'undefined' ? window.innerHeight / 2 : 400,
          w: 0,
          h: 0,
        }}
      />

      <div className="relative z-10">
        <Image
          src="/images/marty-2.svg"
          alt=""
          width={52}
          height={70}
          className="mx-auto mb-xs"
        />
        <TitleComponent className="mb-md text-h2 font-tertiary font-bold text-center">
          {title}
        </TitleComponent>

        <ul className="flex flex-wrap justify-between gap-sm mt-md">
          {results.map(result => (
            <li
              key={result.id}
              className="max-w-80"
            >
              <p className="mb-4 font-tertiary">
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
    </div>
  );
};

export default ResultsCard;
