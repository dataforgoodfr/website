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
  console.log(blocks.map((block) => block.subInfos))

  return (
    <div
      className={clsx(
        'container',
        className,
      )}
      {...props}
    >
      {title && <Title level={titleLevel} variant="medium" hasSeparator className="mb-sm">{title}</Title>}

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
