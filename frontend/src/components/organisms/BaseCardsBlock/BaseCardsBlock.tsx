import { BaseCard, BaseCardProps } from '@/components/molecules';
import { Title, TitleProps } from '@/components';
import clsx from 'clsx';


export type BaseCardsBlockProps = {
  title: string;
  titleLevel?: TitleProps['level'];
  blocks: BaseCardProps[];
  className?: string;
};

const BaseCardsBlock: React.FC<BaseCardsBlockProps> = ({
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blocks.map((block) => (
          <BaseCard key={block.title} {...block} />
        ))}
      </div>
    </div>
  );
};

export default BaseCardsBlock;
