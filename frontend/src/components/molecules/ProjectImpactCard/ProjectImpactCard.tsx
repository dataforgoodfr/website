import clsx from 'clsx';

export type ProjectImpactCardProps = {
  value: string;
  text: string;
  className?: string;
};

const ProjectImpactCard: React.FC<ProjectImpactCardProps> = ({
  value,
  text,
  className,
  ...props
}) => {
  if (!value || !text) {
    return null;
  }

  return (
    <div
      className={clsx(
        'container flex gap-sm items-center flex-col md:flex-row relative',
        className,
      )}
      {...props}
    >
      <p className="block font-tertiary text-5xl md:text-7xl">{value}</p>
      <p className="font-tertiary h3-like">
        {text}
      </p>
    </div>
  );
};

export default ProjectImpactCard;
