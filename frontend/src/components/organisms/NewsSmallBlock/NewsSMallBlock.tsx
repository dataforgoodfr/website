import { NewsSmallCard, NewsSmallCardProps } from '@/components/molecules';
import { Title, TitleProps } from '@/components';
import clsx from 'clsx';


export type NewsSmallBlockProps = {
  title?: string;
  titleLevel?: TitleProps['level'];
  blocks: NewsSmallCardProps[];
  className?: string;
};

const NewsSmallBlock: React.FC<NewsSmallBlockProps> = ({
  title,
  titleLevel = 2,
  blocks,
  className,
  ...props
}) => {
  if (!blocks.length) {
    return null;
  }

  return (
    <div
      className={clsx(
        'container',
        className,
      )}
      {...props}
    >
      {title && <Title level={titleLevel} variant="medium" className="mb-md">{title}</Title>}

      <div className='flex flex-col gap-xs'>
        {blocks.map((block, index) => (
            <NewsSmallCard key={block.title ?? index} {...block} />
        ))}
      </div>
    </div>
  );
};

export default NewsSmallBlock;
