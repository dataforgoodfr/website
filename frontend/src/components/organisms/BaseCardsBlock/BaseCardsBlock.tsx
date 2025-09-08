import type { TitleProps } from '@/components';
import type { BaseCardProps } from '@/components/molecules';
import clsx from 'clsx';
import { Title } from '@/components';
import { BaseCard } from '@/components/molecules';

export type BaseCardsBlockProps = {
  title?: string;
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

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {blocks.map(block => (
          <li key={block.title}>
            <BaseCard {...block} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BaseCardsBlock;
