import clsx from 'clsx';

export type BannerVideoProps = {
  video?: string;
  altVideo?: string;
  format?: 'horizontal' | 'vertical';
  className?: string;
};

const BannerVideo: React.FC<BannerVideoProps> = ({
  video,
  altVideo,
  format = 'horizontal',
  className,
  ...props
}) => {
  if (!video) {
    return null;
  }

  return (
    <div
      className={clsx(
        'mx-auto shadow-lg overflow-hidden',
        {
          'max-w-[80%] md:max-w-[60%]': format === 'horizontal',
          'max-w-[60%] md:max-w-[40%]': format === 'vertical',
        },
        className,
      )}
      {...props}
    >
      <div
        className={clsx(
          '[&>iframe]:w-full [&>iframe]:h-full',
          {
            'aspect-video': format === 'horizontal',
            'aspect-[9/16]': format === 'vertical',
          },
        )}
        dangerouslySetInnerHTML={{ __html: `${video}` }}
      />
    </div>
  );
};

export default BannerVideo;
