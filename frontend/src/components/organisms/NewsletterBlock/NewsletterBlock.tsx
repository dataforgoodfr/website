import { NewsletterForm, Title, TitleProps } from '@/components';
import clsx from 'clsx';
import Image from 'next/image';
import { useTranslations } from 'next-intl';


export type NewsletterBlockProps = {
  title?: string;
  titleLevel?: TitleProps['level'];
  content?: string;
  className?: string;
};

const NewsletterBlock: React.FC<NewsletterBlockProps> = ({
  title,
  content,
  titleLevel = 2,
  className,
  ...props
}) => {
  const t = useTranslations('components.newsletterBlock');

  const componentTitle = title ?? t('title');
  const componentContent = content ?? t('content');

  return (
    <div
      className={clsx(
        'py-lg bg-alive-light',
        className,
      )}
      {...props}
    >
      <div className="container flex flex-col md:flex-row gap-md">
        <div className="flex items-center gap-sm pt-xs">
          <Image src="/images/marty-2.svg" alt="" width={52} height={70} />
          <Title level={titleLevel} variant="medium" className="max-w-80">{componentTitle}</Title>
        </div>

        <div className="pt-xs flex-1">
          <p className="mb-md font-secondary font-bold">{componentContent}</p>
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
};

export default NewsletterBlock;
