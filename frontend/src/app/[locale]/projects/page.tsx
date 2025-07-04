import type { ApiProjectProject } from '@/types/strapi/generated/contentTypes';
import Image from 'next/image';
import Link from 'next/link';
import qs from 'qs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import { getImage, getStrapiData } from '@/lib/utils';

function ProjectCard({
  description,
  thumbnail,
  title,
  slug,
}: ApiProjectProject['attributes']) {
  const thumbnailUrl = getImage(thumbnail);

  return (
    <Link href={`/project/${slug}`}>
      <Card>
        <div className="overflow-hidden rounded-t-lg">
          {thumbnailUrl
            ? (
                <Image
                  className="h-42 w-full object-cover"
                  src={thumbnailUrl}
                  alt={title}
                  width={300}
                  height={200}
                />
              )
            : null}
        </div>
        <CardContent className="mt-6">
          <CardTitle className="mb-2 text-center">{title}</CardTitle>
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
    },
  );

  const apiData = await getStrapiData<ApiProjectProject[]>(`projects?${query}`);

  return (
    <div className="mx-auto grid grid-cols-1 gap-4 px-10 py-4 md:grid-cols-2 lg:grid-cols-3">
      {apiData.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
