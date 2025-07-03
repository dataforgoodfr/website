import { getImage, getStrapiData } from "@/lib/utils";
import Image from "next/image";
import qs from "qs";
import { ApiBlogBlog } from "@/types/strapi/generated/contentTypes";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

function BlogCard({
  description,
  published_date,
  tags,
  thumbnail,
  title,
  slug,
}: ApiBlogBlog["attributes"]) {
  const thumbnailUrl = getImage(thumbnail);

  return (
    <Link href={`/blog/${slug}`}>
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
        <CardFooter className="flex flex-col mx-auto gap-2">
          <span className="text-xs text-center">
            {new Date(published_date).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          {tags?.map((tag) => <Badge key={tag.name}>{tag.name}</Badge>)}
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
    }
  );

  const apiData = await getStrapiData<ApiBlogBlog[]>(`blogs?${query}`);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4 px-10 py-4">
      {apiData?.map((blog) => <BlogCard key={blog.id} {...blog} />)}
    </div>
  );
}
