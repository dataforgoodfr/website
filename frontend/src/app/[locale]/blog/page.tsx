import type { ApiBlogBlog } from '@/types/strapi/generated/contentTypes';
import Image from 'next/image';
import Link from 'next/link';
import qs from 'qs';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import { getImage, getStrapiData } from '@/lib/utils';

function BlogCard({
  description,
  published_date,
  tags,
  thumbnail,
  title,
  slug,
}: ApiBlogBlog['attributes']) {
  const thumbnailUrl = getImage(thumbnail);

  return (
    <Link href={`/blog/${slug}`}>
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
        <CardFooter className="mx-auto flex flex-col gap-2">
          <span className="text-center text-xs">
            {new Date(published_date).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
          {tags?.map(tag => <Badge key={tag.name}>{tag.name}</Badge>)}
        </CardFooter>
      </Card>
    </Link>
  );
}

export default async function Blogs() {
  const query = qs.stringify(
    {
      populate: {
        tags: true,
        thumbnail: true,
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    },
  );

  const apiData = await getStrapiData<ApiBlogBlog[]>(`blogs?${query}`);

  return (
    <div className="mx-auto grid grid-cols-1 gap-4 px-10 py-4 md:grid-cols-2 lg:grid-cols-3">
      {apiData?.map(blog => <BlogCard key={blog.id} {...blog} />)}
    </div>
  );
}
