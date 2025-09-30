import { Title, TitleProps } from "@/components";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export type ProjectProcessesProps = {
  title: string;
  titleLevel?: TitleProps["level"];
  summary?: string;
  description?: string;
  github_link?: string;
  website_link?: string;
  className?: string;
};

const ProjectProcesses: React.FC<ProjectProcessesProps> = ({
  title,
  titleLevel = 2,
  summary,
  description,
  github_link,
  website_link,
  className,
  ...props
}) => {
  if (!description) {
    return null
  }

  const t = useTranslations("projectDetail.deliverables")

  return (
    <div
      className={clsx(
        "prose prose--big my-xs max-w-4xl ml-0",
        className,
      )}
      {...props}
    >
      <div className="container flex flex-col">
        <Title level={titleLevel} variant="medium" >{title}</Title>
        <p className="lead" >{summary}</p>

        <div className="h3-like lg:text-[1.3rem]" dangerouslySetInnerHTML={{ __html: description }} />
        {github_link && <p className="mt-md text-xs"> {t("githubLink")} <Link href={github_link} target="_blank" rel="noreferrer" className="underline hover:no-underline blank">{github_link}</Link></p>}
        {website_link && <p className="mt-md text-xs"> {t("websiteLink")} <Link href={website_link} target="_blank" rel="noreferrer" className="underline hover:no-underline blank">{website_link}</Link></p>}
      </div>
    </div>
  );
};

export default ProjectProcesses;
