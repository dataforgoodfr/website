import clsx from 'clsx';
import Image from 'next/image'
import { TiltedTitle, TiltedTitleProps } from '@/components/atoms';

export type ArticleHeroBlockProps = {
  image: string;
  title: TiltedTitleProps;
  introduction?: React.ReactNode;
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
      <div className="col-start-1 row-start-1">
        {image && <div className='col-start-1 row-start-1 row-span-3 max-w-fit -z-1 w-full h-full'>
          <Image src={image} alt="" loading="lazy" width={1000} height={400} className="object-cover h-full md:max-w-fit" />
        </div>}
      </div>
      <div className="container flex flex-wrap items-center justify-center">
        <
      </div>
    </div>
  );
};

export default ArticleHeroBlock;
