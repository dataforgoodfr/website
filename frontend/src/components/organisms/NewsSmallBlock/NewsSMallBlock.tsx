import type { TitleProps } from '@/components';
import type { NewsSmallCardProps } from '@/components/molecules';
import clsx from 'clsx';
import { Title } from '@/components';
import { NewsSmallCard } from '@/components/molecules';

export type NewsSmallBlockProps = {
  title: string;
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

      {blocks.map(block => (
        <NewsSmallCard key={block.title} {...block} />
      ))}
    </div>
  );
};

export default NewsSmallBlock;
