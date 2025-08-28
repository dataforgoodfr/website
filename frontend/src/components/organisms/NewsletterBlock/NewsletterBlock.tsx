import { Title, TitleProps } from '@/components';
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
          <iframe
            width="540"
            height="305"
            src="https://ffb35838.sibforms.com/serve/MUIFAClZei-0KJ4S5oAeeoW1_t4ZqHi48tZTWiISEt_s8kJsd-WpJ9Gprg21TiwBT7zskApNu-ifbq4C8PnCBG3dUeJphIPVtJ_2V1IB_fan1WRguNFGrW1TayNKJi1jSQ6_gfgmOlQDGdZSwOpi6VU3R-iX2CN7XyIDDQBo7A9xbiN0fwvRM0kvcKRCzG29MRJ00mGzZzzyaNOO"
            frameBorder="0"
            scrolling="auto"
            allowFullScreen
            title="Formulaire de contact Data For Good"
            sandbox="allow-scripts allow-forms"
            style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsletterBlock;
