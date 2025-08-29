import { Title, TitleProps } from '@/components';
import { MemberCard, TalkCard } from '@/components/molecules';
import clsx from 'clsx';

export type MembersBlockProps = {
  title?: string;
  titleLevel?: TitleProps['level'];
  categories: {
    title?: string;
    members: {
      name: string;
      role: string;
      image?: string;
    }[];
  }[];
  className?: string;
};

const MembersBlock: React.FC<MembersBlockProps> = ({
  title,
  titleLevel = 2,
  categories,
  className,
  ...props
}) => {
  if (!categories.length) {
    return null;
  }

  return (
    <div
      className={clsx('container flex flex-col gap-md', className)}
      {...props}
    >
      {title && (
        <Title variant="medium" level={titleLevel}>
          {title}
        </Title>
      )}

      {categories.map((category, index) => (
        <div key={index}>
          {category.title && (
            <Title variant="small" className="mb-sm" level={typeof titleLevel === 'number' ? (titleLevel + 1) as TitleProps['level'] : titleLevel}>
              {category.title}
            </Title>
          )}

          <div className="flex flex-wrap gap-xs">
            {category.members.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MembersBlock;
