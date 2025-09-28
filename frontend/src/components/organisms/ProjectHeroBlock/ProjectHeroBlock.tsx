import clsx from 'clsx';
import Image from 'next/image'
import { TiltedTitle } from '@/components/atoms';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export type ProjectHeroBlockProps = {
  image?: string;
  title: string;
  introduction?: string;
  className?: string;
};

const ProjectHeroBlock: React.FC<ProjectHeroBlockProps> = ({
  image = "/images/default-image.svg",
  title,
  introduction,
  className,
  ...props
}) => {
  if (!title) {
    return null;
  }

  return (
    <div
      className={clsx(
        "grid grid-cols-1 grid-rows-1 min-h-[400px] h-screen mask-papper",
        className,
      )}
      {...props}
    >
      <div className='col-start-1 row-start-1'>
        <Image src={image} alt="" loading="lazy" width={1000} height={400} className="object-cover w-full h-full" />
      </div>
      <div className="col-start-1 row-start-1 self-center p-4 md:p-12">
        <TiltedTitle variant="big" level={1} colors="text-white bg-building" className="drop-shadow-3 drop-shadow-black max-w-[55rem] before:-z-1" rotation={-2}>{title}</TiltedTitle>
        {introduction && <p className="relative p-2 bg-white text-black shadow-lg max-w-2xl lead">{introduction}</p>}
      </div>
    </div>
  );
};

export default ProjectHeroBlock;
