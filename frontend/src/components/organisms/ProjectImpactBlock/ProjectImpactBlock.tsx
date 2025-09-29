import { Title, TitleProps } from '@/components';
import ProjectImpactCard, { ProjectImpactCardProps } from '@/components/molecules/ProjectImpactCard/ProjectImpactCard';
import clsx from 'clsx';
import Image from 'next/image';

export type ProjectImpactBlockProps = {
  title?: string;
  titleLevel?: TitleProps['level'];
  impacts: ProjectImpactCardProps[];
  className?: string;
};

const ProjectImpactBlock: React.FC<ProjectImpactBlockProps> = ({
  title,
  titleLevel = 2,
  impacts,
  className,
  ...props
}) => {
  if (impacts.length !== 3) {
    return null;
  }

  return (
    <div
      className={clsx('container relative', className)}
      {...props}
    >
      <Image
        src="/images/confettis.svg"
        alt=""
        width={1000}
        height={1000}
        loading="lazy"
        className="absolute top-0 left-0 z-0 w-full h-full opacity-90"
      />


      {title && <Title variant="medium" className="mb-md" level={titleLevel} hasSeparator>
        {title}
      </Title>}

      <div className="flex flex-col gap-md">
        <div className='flex md:grid md:grid-col-2 md:grid-row-1'>
          <ProjectImpactCard
            value={impacts[0].value}
            text={impacts[0].text}
            className={'max-w-[600px] md:col-start-2'} />
        </div>
        <div className='flex flex-col md:flex-row md:gap-md md:items-end md:justify-evenly'>
          <ProjectImpactCard
            value={impacts[1].value}
            text={impacts[1].text}
            className='max-w-[500px] pb-md' />
          <ProjectImpactCard
            value={impacts[2].value}
            text={impacts[2].text}
            className='max-w-[600px]' />
        </div>
      </div>
    </div>
  );
};

export default ProjectImpactBlock;
