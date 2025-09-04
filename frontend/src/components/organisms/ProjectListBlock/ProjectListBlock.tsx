import { Button, Filter, FilterProps, Pagination, Title, TitleProps } from '@/components';
import { ProjectListCard, ProjectListCardProps, SearchInput } from '@/components/molecules';
import { IProject } from '@/lib/types';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

export type ProjectListBlockProps = {
  title?: string;
  titleLevel?: TitleProps['level'];
  filters: Omit<FilterProps, "onClick" | 'checked'>[];
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

  const [projectFilter, setProjectFilter] = useState<string>()
  const [filteredProjects, setFilteredProjects] = useState<IProject[]>(projects)
  const [displayProjects, setDisplayProjects] = useState<IProject[]>(projects)
  const [tagFilters, setTagFilters] = useState<string[]>([])
  const [thematicFilters, setThematicFilters] = useState<string[]>([])
  const [hideFilters, setHideFilters] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(1)

  if (!projects.length) {
    return null;
  }

  useEffect(() => {
    setFilteredProjects(projects.filter((project) => project.project.toLowerCase().includes(projectFilter?.toLowerCase() ?? "")
      && (tagFilters.length === 0 || project.tags?.some((tag) => (tagFilters.includes(tag.toLowerCase()))))
      && (thematicFilters.length === 0 || project.thematics?.some((thematic) => (thematicFilters.includes(thematic.toLowerCase()))))
    ))
  }, [projectFilter, tagFilters, thematicFilters])

  useEffect(() => {
    const start = (currentPage-1) * pageSize
    const end = start + pageSize
    setDisplayProjects(filteredProjects.slice(start, end))
  }, [currentPage, filteredProjects])


  const handleChange = (e: any) => {
    setProjectFilter(e?.value)
  }

  const handleClick = (e: any) => {
    const filterValue = e.currentTarget.getAttribute("filtervalue")
    const thematic = e.currentTarget.getAttribute("thematic")
    if (thematic) {
      thematicFilters.includes(filterValue)
        ? setThematicFilters(thematicFilters.filter((filter) => filter !== filterValue))
        : setThematicFilters([...thematicFilters, filterValue])
    } else {
      tagFilters.includes(filterValue)
        ? setTagFilters(tagFilters.filter((filter) => filter !== filterValue))
        : setTagFilters([...tagFilters, filterValue])
    }
  }

  return (
    <div
      className={clsx('width-[100vw] mx-0 pt-md pb-sm', className)}
      {...props}
    >
      {title && <Title variant="medium" className="mb-sm text-white" level={titleLevel}>
        {title}
      </Title>}

      <div className='flex w-full flex-col md:flex-row'>
        <div className='flex w-2/3 gap-xs flex-col pl-10 my-md'>
          <Button variant="secondary" color='violet' className='w-max hover:bg-building' onClick={() => setHideFilters(!hideFilters)}> Filtres </Button>
          <div className='flex w-full gap-xs flex-col md:flex-row flex-wrap transition-base' style={{ "visibility": hideFilters ? 'hidden' : "visible", "opacity": hideFilters ? '0' : '1' }}>
            {filters?.map((filter, index) => (
              <Filter key={index} {...filter} checked={thematicFilters.concat(tagFilters).includes(filter.filterValue)} onClick={handleClick} />
            ))}
          </div>
        </div>

        <div className='flex w-full md:w-1/2 justify-end gap-xs flex-row flex-wrap pr-10 my-md'>
          <SearchInput searchFilter={projectFilter} handleChange={handleChange} />
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

      <div className='flex justify-center my-md'>
        <Pagination pageCount={Math.ceil(projects.length / pageSize)} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>


      <div className='flex justify-center my-md'>
        <Button href={"/todo"} color="white" hasArrow> Devenir bénévole sur un projet </Button>
      </div>
    </div>
  );
};

export default ProjectListBlock;
