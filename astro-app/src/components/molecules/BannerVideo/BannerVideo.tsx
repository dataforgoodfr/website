import clsx from 'clsx';

export type BannerVideoProps = {
  video?: string;
  altVideo?: string;
  className?: string;
};

const BannerVideo: React.FC<BannerVideoProps> = ({
  video,
  altVideo,
  className,
  ...props
}) => {
  if (!video) {
    return null;
  }

  return (
    <div
      className={clsx(
        'max-w-[80%] md:max-w-[60%] max-h-[400px] sm:w-fit mx-auto shadow-lg',
        className,
      )}
      {...props}
    >
      <div className='max-sm:[&>iframe]:w-full' dangerouslySetInnerHTML={{ __html: `${video}` }} />
    </div>
  );
};

export default BannerVideo;
