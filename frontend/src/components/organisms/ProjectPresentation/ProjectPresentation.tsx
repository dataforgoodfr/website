import { Tag, Title, TitleProps } from '@/components';
import clsx from 'clsx';
import Image from 'next/image'

export type ProjectPresentationProps = {
  name: string;
  summary: string;
  titleLevel?: TitleProps["level"];
  tags?: {
    label: string;
    type: 'temporal' | 'subject';
  }[];
  description: string[];
  association: {
    logo?: string;
    altLogo?: string;
    summary: string;
  }
  className?: string;
};

const ProjectPresentation: React.FC<ProjectPresentationProps> = ({
  name,
  summary,
  description,
  association,
  titleLevel = 2,
  tags,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx('container', className)}
      {...props}
    >
      {/* <div className="flex flex-col items-center"> */}
      <div
        className={clsx(
          'flex flex-col sm:flex-row sm:items-start gap-md',
          className,
        )}
        {...props}
      >
        <div className={clsx(
          'flex flex-col w-full sm:w-1/2',
        )}>
          <Title className="mb-sm font-tertiary" level={2} variant="big" >{name}</Title>
          <p className="mb-xs text-md font-tertiary" >{summary}</p>
          <div className='flex flex-row gap-xs mt-xs items-start'>
            {tags?.filter((tag) => tag.type === 'temporal').map((tag, index) => (
              <div className='text-xs px-2.5 py-2 bg-back-green text-black' key={index}>
                {tag.label}
              </div>
            ))}
          </div>
          <div className='flex flex-row gap-xs mt-xs items-start'>
            {tags?.filter((tag) => tag.type === 'subject').map((tag, index) => (
              <div className='text-xs px-2.5 py-2 bg-back-green text-black' key={index}>
                {tag.label}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start w-full sm:w-1/2">
          <div className='flex flex-col gap-xs mb-md'>
            {description.map((paragraph, index) => (<p className='text-sm font-secondary ' key={index}>{paragraph}</p>))}
          </div>
          <div className='flex flex-row'>
            {association.logo && <Image loading="lazy" src={association.logo} alt={association.altLogo || ""} width={200} height={200} className="w-auto h-auto max-w-[83px] object-cover" />}
            <div className='bg-violet-light p-6 text-xs content-center text-start mx-auto'>
              {association.summary}
            </div>
          </div>
        </div>
      </div>

    </div>
    // </div>
  );
};

export default ProjectPresentation;
