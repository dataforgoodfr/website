import { BaseCard, BaseCardProps } from '@/components/molecules';
import { Title, TitleProps } from '@/components';
import clsx from 'clsx';


export type BaseCardsBlockProps = React.HTMLAttributes<HTMLDivElement> & {
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
        {blocks.map((block) => (
          <li key={block.title}>
            <BaseCard {...block} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BaseCardsBlock;
