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
        'relative py-lg bg-violet-light',
        className,
      )}
      {...props}
    >
      <div className="container flex flex-col md:flex-row gap-md pb-md">
          <div className="flex items-start gap-sm pt-xs max-w-2xl">
            <Image src="/images/marty-2.svg" alt="" width={52} height={70} />
            <div>
              <Title level={titleLevel} className="mb-xs" variant="medium">{componentTitle}</Title>
              <p className="lead">{componentContent}</p>
            </div>
          </div>

        <div className="pt-xs flex-1">
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
};

export default NewsletterBlock;
