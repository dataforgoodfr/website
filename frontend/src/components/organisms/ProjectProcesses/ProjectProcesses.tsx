import { Title, TitleProps } from "@/components";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

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
        "bg-violet-light py-lg",
        className,
      )}
      {...props}
    >
      <div className="container flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <Title className="mb-sm" level={titleLevel} variant="medium" >{title}</Title>
          <p className="w-3/4 lead" >{summary}</p>
        </div>

        <div className="md:w-2/3">
          <div className="h4-like flex flex-col gap-xs">
            {processes.map((process, index) => (
              <div key={index}>
                {process.name && <p>{process.name}</p>}
                <ul className="list-disc list-outside mb-sm ml-3">
                  {process.description?.map((item, id) => (<React.Fragment key={id}>
                    {item && <li>{item}</li>}
                  </React.Fragment>))}
                </ul>
              </div>
            ))}
          </div>
          {link && <p className="mt-md text-xs"> {t("repoLink")} <Link href={link} target="_blank" rel="noreferrer" className="underline hover:no-underline blank">{link}</Link></p>}
        </div>
      </div>
    </div>
  );
};

export default ProjectProcesses;
