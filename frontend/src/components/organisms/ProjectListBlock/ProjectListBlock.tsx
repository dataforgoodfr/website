import { Button, Filter, Pagination, Title, TitleProps } from '@/components';
import { ProjectListCard, SearchInput } from '@/components/molecules';
import { IFilter, IProject } from '@/lib/types';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

export type ProjectListBlockProps = {
  title?: string;
  titleLevel?: TitleProps['level'];
  filters: IFilter[];
  projects: IProject[];
  joinCta?: {text?: string; link?: string;}
  pageSize: number;
  className?: string;
};

const ProjectListBlock: React.FC<ProjectListBlockProps> = ({
  title,
  titleLevel = 2,
  filters,
  projects,
  joinCta,
  pageSize,
  className,
  ...props
}) => {
  const t = useTranslations('projects');

  const [filteredProjects, setFilteredProjects] = useState<IProject[]>(projects)
  const [displayProjects, setDisplayProjects] = useState<IProject[]>(projects)
  const [hideFilters, setHideFilters] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(1)

  const [activeFilters, setActiveFilters] = useState<{ seasons: string[]; categories: string[], thematics: string[]; project: string }>({
    seasons: [],
    categories: [],
    thematics: [],
    project: "",
  })

  if (!projects.length) {
    return null;
  }

  useEffect(() => {
    setFilteredProjects(projects.filter((project) => project.project.toLowerCase().includes(activeFilters.project?.toLowerCase() ?? "")
      && (activeFilters.seasons.length === 0 || project.seasons?.some((tag) => (activeFilters.seasons.includes(tag))))
      && (activeFilters.categories.length === 0 || project.categories?.some((cat) => (activeFilters.categories.includes(cat))))
      && (activeFilters.thematics.length === 0 || project.thematics?.some((thematic) => (activeFilters.thematics.includes(thematic))))
    ))
    setCurrentPage(1)
  }, [activeFilters])

  useEffect(() => {
    const start = (currentPage - 1) * pageSize
    const end = start + pageSize
    setDisplayProjects(filteredProjects.slice(start, end))
  }, [currentPage, filteredProjects])


  const handleChange = (e: any) => {
    setActiveFilters({ ...activeFilters, project: e?.value })
  }

  const handleClick = (e: any) => {
    const filterValue = e.value as string
    const filterType = e.getAttribute("data-type")
    if (filterType === 'thematic') {
      activeFilters.thematics.includes(filterValue)
        ? setActiveFilters({ ...activeFilters, thematics: activeFilters.thematics.filter((filter) => filter !== filterValue) })
        : setActiveFilters({ ...activeFilters, thematics: [...activeFilters.thematics, filterValue] })
    } else if(filterType === 'season') {
      activeFilters.seasons.includes(filterValue)
        ? setActiveFilters({ ...activeFilters, seasons: activeFilters.seasons.filter((filter) => filter !== filterValue) })
        : setActiveFilters({ ...activeFilters, seasons: [...activeFilters.seasons, filterValue] })
    } else if(filterType === 'category') {
      activeFilters.categories.includes(filterValue)
        ? setActiveFilters({ ...activeFilters, categories: activeFilters.categories.filter((filter) => filter !== filterValue) })
        : setActiveFilters({ ...activeFilters, categories: [...activeFilters.categories, filterValue] })
    }
  }

  return (
    <div
      className={clsx('width-[100vw] mx-0 pt-md pb-sm', className)}
      {...props}
    >
      <div className='container'>

        {title && <Title variant="medium" className="mb-sm text-white" level={titleLevel}>
          {title}
        </Title>}

        <div className='flex w-full flex-col md:flex-row'>
          <div className='flex w-full  gap-xs flex-col justify-center md:justify-start my-md'>
            <Button variant="secondary" color='violet' className={clsx('w-max hover:bg-building', hideFilters ? 'not-rotate-arrow' : 'rotate-arrow')} onClick={() => setHideFilters(!hideFilters)}> Filtres </Button>
            <div className='flex w-full gap-xs flex-col md:flex-row flex-wrap transition-base' style={{ "visibility": hideFilters ? 'hidden' : "visible", "opacity": hideFilters ? '0' : '1', "height": hideFilters ? '0' : 'auto' }}>
              {filters?.map((filter, index) => (
                <Filter key={index} {...filter} checked={activeFilters.seasons.concat(activeFilters.thematics).concat(activeFilters.categories).includes(filter.filterValue)} onClick={handleClick} />
              ))}
            </div>
          </div>

          <div className='flex w-full md:w-1/2 justify-center md:justify-end gap-xs flex-row flex-wrap md:pr-10 my-md'>
            <SearchInput searchFilter={activeFilters.project} handleChange={handleChange} />
          </div>

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
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
          <Pagination pageCount={Math.ceil(filteredProjects.length / pageSize)} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>


        <div className='flex justify-center my-md'>
          <Button href={joinCta?.link ?? "/"} color="white" hasArrow> {joinCta?.text ?? t("cta.text")} </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectListBlock;
