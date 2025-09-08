import type { ThematicValues } from '@/lib/utils';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { thematicsColors } from '@/lib/utils';

export type ProjectListCardProps = {
  project: string;
  link?: string;
  association: string;
  description: string;
  thematics: ThematicValues[];
  image?: string;
  className?: string;
};

const ProjectListCard: React.FC<ProjectListCardProps> = ({
  project,
  link,
  association,
  description,
  thematics,
  image,
  className,
  ...props
}) => {
  if (!project || !association) {
    return null;
  }

  const ProjectCard = (
    <div
      className={clsx(
        'relative w-[313px] h-[377px]',
        className,
      )}
      {...props}
    >
      {image && (
        <div className="h-full w-full">
          <Image src={image} alt="" className="absolute w-full h-full object-cover border border-white" loading="lazy" width={160} height={209} />
          <div className="absolute -z-10 bg-gradient-to-b from-white/0 to-black/80 h-full w-full" />
        </div>
      )}
      <div className="absolute top-2 right-2 w-full flex flex-row gap-2 justify-end">
        {thematics.map((thematic, index) => (<div key={index} className={`size-[23px] rounded-full bg-${thematicsColors[thematic]}`}></div>))}
      </div>
      <div className="absolute bottom-3 pl-3 w-full flex flex-col gap-2 items-start">
        <p className="pl-sm text-xs text-white">{project}</p>
        <p className="pl-sm text-xs text-white opacity-50">{association}</p>
        {description && <p className="pl-sm text-xs text-white">{description}</p>}
      </div>
    </div>
  );
  return (
    link
      ? (
        <Link href={link}>
          {ProjectCard}
        </Link>
      )
      : ProjectCard
  );
};

export default ProjectListCard;
