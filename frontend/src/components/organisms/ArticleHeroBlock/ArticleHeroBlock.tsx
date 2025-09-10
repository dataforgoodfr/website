import clsx from 'clsx';
import Image from 'next/image'
import { TiltedTitle } from '@/components/atoms';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export type ArticleHeroBlockProps = {
  image: string;
  title: string;
  introduction?: string;
  date: string;
  readTime?: string;
  author?: {
    name: string;
    link: string;
  };
  className?: string;
};

const ArticleHeroBlock: React.FC<ArticleHeroBlockProps> = ({
  image,
  title,
  introduction,
  date,
  readTime,
  author,
  className,
  ...props
}) => {
  const t = useTranslations('components.articleHeroBlock');

  if (!title) {
    return null;
  }

  return (
    <div
      className={clsx(
        '',
        className,
      )}
      {...props}
    >
      <div className="grid grid-cols-1 grid-rows-1 min-h-[400px] h-screen">
        {image && <div className='col-start-1 row-start-1'>
          <Image src={image} alt="" loading="lazy" width={1000} height={400} className="object-cover w-full h-full" />
        </div>}
        <div className="col-start-1 row-start-1 self-center p-4 md:p-12">
          <TiltedTitle variant="big" level={1} colors="text-black bg-white" className="drop-shadow-3 drop-shadow-black max-w-[55rem] before:-z-1" rotation={-2}>{title}</TiltedTitle>
          {introduction && <p className="relative sm:left-8 lg:left-[5.5rem] p-2 bg-white text-black shadow-lg max-w-2xl font-secondary font-medium">{introduction}</p>}
        </div>
      </div>
      <div className="container py-2 flex flex-wrap items-center justify-between gap-4 text-black/50 text-xs">
          <div className="flex flex-wrap items-center">
            <p>{date}</p>
            {readTime && <p>{` - ${t('readTime')} ${readTime}`}</p>}
          </div>
          {author && <p>{t('author')} <Link href={author?.link} className="underline hover:no-underline">{author?.name}</Link></p>}
      </div>
    </div>
  );
};

export default ArticleHeroBlock;
