import { Button, Title, TitleProps } from '@/components';
import { ProjectListCard, ProjectListCardProps } from '@/components/molecules';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import Image from 'next/image'

export type ProjectListBlockProps = {
    title?: string;
    titleLevel?: TitleProps['level'];
    projects: ProjectListCardProps[];
    className?: string;
};

const ProjectListBlock: React.FC<ProjectListBlockProps> = ({
    title,
    titleLevel = 2,
    projects,
    className,
    ...props
}) => {
    const t = useTranslations('projects');
  
    if (!projects.length) {
        return null;
    }

    return (
        <div
            className={clsx('width-[100vw] mx-0 pt-md pb-sm', className)}
            {...props}
        >
            {title && <Title variant="medium" className="mb-sm text-white" level={titleLevel}>
                {title}
            </Title>}

            <div className="flex gap-xs justify-center flex-wrap">
                {projects.map((project, index) => (
                    <ProjectListCard
                        key={index}
                        project={project.project}
                        association={project.association}
                        description={project.description}
                        thematics={project.thematics}
                        image={project.image}
                    />
                ))}
            </div>

            <div className='flex justify-center my-sm'>
              <Button href={"/todo"} color="white" hasArrow> Devenir bénévole sur un projet </Button>
            </div>
        </div>
    );
};

export default ProjectListBlock;
