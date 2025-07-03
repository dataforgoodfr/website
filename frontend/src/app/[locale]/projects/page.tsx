import { getImage, getStrapiData } from "@/lib/utils";
import Image from "next/image";
import qs from "qs";
import { ApiProjectProject } from "@/types/strapi/generated/contentTypes";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

function ProjectCard({
  description,
  thumbnail,
  title,
  slug,
}: ApiProjectProject["attributes"]) {
  const thumbnailUrl = getImage(thumbnail);

  return (
    <Link href={`/project/${slug}`}>
      <Card>
        <div className="rounded-t-lg overflow-hidden">
          {thumbnailUrl ? (
            <Image
              className="w-full h-42 object-cover"
              src={thumbnailUrl}
              alt={title}
              width={300}
              height={200}
            />
          ) : null}
        </div>
        <CardContent className="mt-6">
          <CardTitle className="text-center mb-2">{title}</CardTitle>
          <CardDescription className="text-center">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </Link>
  );
}

export default async function Projects() {
  const query = qs.stringify(
    {
      populate: {
        thumbnail: true,
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  const apiData = await getStrapiData<ApiProjectProject[]>(`projects?${query}`);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4 px-10 py-4">
      {apiData.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
