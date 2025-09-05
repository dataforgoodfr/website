import clsx from 'clsx';
import Image from 'next/image';
import { Title, TitleProps } from '@/components/atoms';
import { ThumbnailProject, ThumbnailProjectProps } from '@/components/molecules';

export type ThumbnailProjectsBlockProps = {
  title: string;
  titleLevel?: TitleProps['level'];
  projects: ThumbnailProjectProps[];
  className?: string;
};

const ThumbnailProjectsBlock: React.FC<ThumbnailProjectsBlockProps> = ({
  title,
  titleLevel = 2,
  projects,
  className,
  ...props
}) => {
  if (!title || !projects.length) {
    return null;
  }

  return (
    <div
      className={clsx(
        '',
        className,
      )}
      {...props}
    >
        <Image src="/images/scratch-purple.svg" alt="" width={212} height={48} className="object-contain w-full h-auto" />
        <div className="bg-building-light pt-sm pb-md">
          <div className="container">
            <Title hasSeparator className="mb-xs" level={titleLevel} variant="medium">
              {title}
            </Title>

            {projects.map((project, index) => (
              <ThumbnailProject
                {...project}
                name={{
                  ...project.name,
                  level: project.name.level ?? (titleLevel as number + 1) as TitleProps['level'],
                }}
                key={index}
                className="mt-lg"
              />
            ))}
          </div>
        </div>
        <Image src="/images/scratch-purple.svg" alt="" width={212} height={48} className="object-contain w-full h-auto rotate-180" />
    </div>
  );
};

export default ThumbnailProjectsBlock;
