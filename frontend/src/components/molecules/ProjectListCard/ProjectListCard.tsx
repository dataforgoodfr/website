import { thematicsColors, ThematicValues } from '@/lib/utils';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export type ProjectListCardProps = {
  project: string;
  link?: string;
  partners: string[];
  description: string;
  thematics: ThematicValues[];
  image?: string;
  className?: string;
};

const ProjectListCard: React.FC<ProjectListCardProps> = ({
  project,
  link,
  partners,
  description,
  thematics,
  image,
  className,
  ...props
}) => {
  if (!project && partners.length === 0 ) {
    return null;
  }

  const ProjectCard = <div
    className={clsx(
      'relative grid grid-cols-1 grid-rows-1 h-[360px] shadow-lg',
      className
    )}
    {...props}
  >
    {image && <Image src={image} alt="" className="col-start-1 row-start-1 w-full h-full object-cover" loading="lazy" width={400} height={600} />}
    <div className="col-start-1 row-start-1 bg-gradient-to-b from-white/0 to-black/80 group-hover:to-black transition-all h-full w-full" />
    <div className="absolute top-3 right-5 flex gap-5">
      {thematics.map((thematic, index) => (<div key={index} className={`size-[23px] rounded-full bg-${thematicsColors[thematic]}`}></div>))}
    </div>
    <div className="col-start-1 row-start-1 flex flex-col justify-end m-5 gap-2 items-start text-white">
      <p className="h4-like lowercase capitalize font-tertiary">{project}</p>
      {partners.map((partner, id) => (<p key={id} className="h4-like opacity-50">{partner}</p>))}
      {description && <p className="text-xs h-0 group-hover:h-auto transition-all overflow-hidden">{description}</p>}
    </div>
  </div>;
  return (
    link
    ? (<Link href={link} className="block group">
      {ProjectCard}
    </Link>)
    : ProjectCard
  );
};

export default ProjectListCard;
