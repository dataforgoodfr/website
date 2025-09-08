import clsx from 'clsx';
import { TiltedTitle } from '@/components';

export type KpisProps = {
  kpis: {
    id: string;
    title: string;
    description: string;
  }[];
  className?: string;
};

const Kpis: React.FC<KpisProps> = ({
  kpis,
  className,
  ...props
}) => {
  if (!kpis?.length) {
    return null;
  }

  return (
    <ul
      className={clsx(
        'container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16',
        className,
      )}
      {...props}
    >
      {kpis.map(kpi => (
        <li key={kpi.id}>
          <TiltedTitle level="p" variant="medium" className="drop-shadow-3 drop-shadow-black" rotation={-6}>{kpi.title}</TiltedTitle>
          <p className="font-secondary font-medium mt-sm">{kpi.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default Kpis;
