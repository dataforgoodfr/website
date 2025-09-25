import clsx from 'clsx';
import Image from 'next/image';

export type BannerProps = {
  content?: string[];
  image?: string;
  className?: string;
};

const Banner: React.FC<BannerProps> = ({
  content,
  image,
  className,
  ...props
}) => {
  if (!image) {
    return null;
  }

  return (
    <div
      className={clsx(
        'grid grid-cols-1 grid-rows-1 max-h-[850px] mask-papper',
        className,
      )}
      {...props}
    >
      {image && <Image src={image} alt="" loading="lazy" width={1000} height={400} className="col-start-1 row-start-1 w-full h-full object-cover" />}
      
      <div className="col-start-1 row-start-1 bg-violet-light opacity-90" />

      {content && content.length > 0 && <div className="col-start-1 row-start-1 container self-center z-1">
        <div className={clsx(
          'prose prose--big text-center lead',
        )}>
          {content.map((paragraph, index) => (<p key={index}>{paragraph}</p>))}

        </div>
      </div>
      }
    </div>
  );
};

export default Banner;
