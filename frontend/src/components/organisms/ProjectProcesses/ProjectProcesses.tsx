import { Title, TitleProps } from "@/components";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Link from "next/link";

export type ProjectProcessesProps = {
  title: string;
  titleLevel?: TitleProps["level"];
  summary?: string;
  processes: {
    name: string;
    description: string[];
  }[];
  link?: string;
  className?: string;
};

const ProjectProcesses: React.FC<ProjectProcessesProps> = ({
  title,
  titleLevel = 2,
  summary,
  processes,
  link,
  className,
  ...props
}) => {
  if (!processes || processes.length === 0) {
    return null
  }

  const t = useTranslations("projectDetail.deliverables")

  return (
    <div
      className={clsx(
        "flex flex-col sm:flex-row sm:items-start gap-md bg-violet-light py-lg w-full px-6",
        className,
      )}
      {...props}
    >
      <div className={clsx(
        "flex flex-col w-full mr-xs pl-6 sm:w-1/3",
      )}>
        <Title className="mb-sm font-tertiary" level={titleLevel} variant="medium" >{title}</Title>
        <p className="mb-xs w-3/4 text-md font-tertiary font-bold" >{summary}</p>
      </div>
      <div className="flex flex-col pr-2 items-start w-full sm:w-2/3">
        <div className="flex flex-col gap-xs text-sm uppercase">
          {processes.map((process, index) => (
            <div key={index}>
              <p className="text-sm font-secondary font-bold">{process.name}</p>
              <ul className="list-disc list-outside mb-xs font-bold ml-3">
                {process.description?.map((item, id) => (<li className="ml-4 leading-2" key={id}> {item} </li>))}
              </ul>
            </div>
          ))}
        </div>
        {link && <p className="mt-md text-xs"> {t("repoLink")} <Link href={link} target="_blank" rel="noreferrer" className="underline hover:no-underline blank">{link}</Link></p>}
      </div>
    </div>
  );
};

export default ProjectProcesses;
