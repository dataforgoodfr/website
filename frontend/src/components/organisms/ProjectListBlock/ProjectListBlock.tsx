import type { TitleProps } from '@/components';
import type { IFilter, IProject } from '@/lib/types';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { Button, Filter, Pagination, Title } from '@/components';
import { ProjectListCard, SearchInput } from '@/components/molecules';

export type ProjectListBlockProps = {
  title?: string;
  titleLevel?: TitleProps['level'];
  filters: IFilter[];
  projects: IProject[];
  pageSize: number;
  className?: string;
};

const ProjectListBlock: React.FC<ProjectListBlockProps> = ({
  title,
  titleLevel = 2,
  filters,
  projects,
  pageSize,
  className,
  ...props
}) => {
  const t = useTranslations('projects');

  const [filteredProjects, setFilteredProjects] = useState<IProject[]>(projects);
  const [displayProjects, setDisplayProjects] = useState<IProject[]>(projects);
  const [hideFilters, setHideFilters] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [activeFilters, setActiveFilters] = useState<{ tags: string[]; thematics: string[]; project: string }>({
    tags: [],
    thematics: [],
    project: '',
  });

  if (!projects.length) {
    return null;
  }

  useEffect(() => {
    setFilteredProjects(projects.filter(project => project.project.toLowerCase().includes(activeFilters.project?.toLowerCase() ?? '')
      && (activeFilters.tags.length === 0 || project.tags?.some(tag => (activeFilters.tags.includes(tag.toLowerCase()))))
      && (activeFilters.thematics.length === 0 || project.thematics?.some(thematic => (activeFilters.thematics.includes(thematic.toLowerCase())))),
    ));
    setCurrentPage(1);
  }, [activeFilters]);

  useEffect(() => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    setDisplayProjects(filteredProjects.slice(start, end));
  }, [currentPage, filteredProjects]);

  const handleChange = (e: any) => {
    setActiveFilters({ ...activeFilters, project: e?.value });
  };

  const handleClick = (e: any) => {
    const filterValue = e.currentTarget.getAttribute('filtervalue') as string;
    const thematic = e.currentTarget.getAttribute('thematic');
    if (thematic) {
      activeFilters.thematics.includes(filterValue)
        ? setActiveFilters({ ...activeFilters, thematics: activeFilters.thematics.filter(filter => filter !== filterValue) })
        : setActiveFilters({ ...activeFilters, thematics: [...activeFilters.thematics, filterValue] });
    } else {
      activeFilters.tags.includes(filterValue)
        ? setActiveFilters({ ...activeFilters, tags: activeFilters.tags.filter(filter => filter !== filterValue) })
        : setActiveFilters({ ...activeFilters, tags: [...activeFilters.tags, filterValue] });
    }
  };

  return (
    <div
      className={clsx('width-[100vw] mx-0 pt-md pb-sm', className)}
      {...props}
    >
      {title && (
        <Title variant="medium" className="mb-sm text-white" level={titleLevel}>
          {title}
        </Title>
      )}

      <div className="flex w-full flex-col md:flex-row">
        <div className="flex w-full md:w-2/3 gap-xs flex-col justify-center md:justify-start md:pl-10 my-md">
          <Button variant="secondary" color="violet" className={clsx('w-max hover:bg-building', hideFilters ? 'not-rotate-arrow' : 'rotate-arrow')} onClick={() => setHideFilters(!hideFilters)}> Filtres </Button>
          <div className="flex w-full gap-xs flex-col md:flex-row flex-wrap transition-base" style={{ visibility: hideFilters ? 'hidden' : 'visible', opacity: hideFilters ? '0' : '1', height: hideFilters ? '0' : 'auto' }}>
            {filters?.map((filter, index) => (
              <Filter key={index} {...filter} checked={activeFilters.tags.concat(activeFilters.thematics).includes(filter.filterValue)} onClick={handleClick} />
            ))}
          </div>
        </div>

        <div className="flex w-full md:w-1/2 justify-center md:justify-end gap-xs flex-row flex-wrap md:pr-10 my-md">
          <SearchInput searchFilter={activeFilters.project} handleChange={handleChange} />
        </div>

      </div>

      <div className="flex gap-xs justify-center flex-wrap">
        {displayProjects?.sort((a, b) => (new Date(b.date).valueOf() - new Date(a.date).valueOf())).map((project, index) => (
          <ProjectListCard
            key={index}
            project={project.project}
            link={project.link}
            association={project.association}
            description={project.description}
            thematics={project.thematics}
            image={project.image}
          />
        ))}
      </div>

      <div className="flex justify-center my-md">
        <Pagination pageCount={Math.ceil(filteredProjects.length / pageSize)} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>

      <div className="flex justify-center my-md">
        <Button href="/todo" color="white" hasArrow> Devenir bénévole sur un projet </Button>
      </div>
    </div>
  );
};

export default ProjectListBlock;
