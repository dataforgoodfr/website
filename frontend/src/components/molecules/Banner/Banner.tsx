import clsx from 'clsx';
import Image from 'next/image';

export type BannerProps = {
  content?: string[];
  image?: string;
  altImage?: string;
  className?: string;
};

const Banner: React.FC<BannerProps> = ({
  content,
  image,
  altImage,
  className,
  ...props
}) => {
  if (!image) {
    return null;
  }

  return (
    <div
      className={clsx(
        'grid grid-cols-1 grid-rows-1 max-h-[850px] text-white',
        className,
        content && content.length > 0 ? 'bg-shadow' : ''
      )}
      {...props}
    >
      {image && altImage && <Image src={image} alt={altImage} loading="lazy" width={1000} height={400} className="col-start-1 row-start-1 w-full h-full object-cover -z-1" />}

      {content && content.length > 0 && <div className="col-start-1 row-start-1 container h-full z-1">
        <div className={clsx(
          'flex flex-col justify-center items-center h-full p-8 text-center',
        )}>
          {content.map((paragraph, index) => (<p key={index} className="font-secondary my-xs">{paragraph}</p>))}

        </div>
      </div>
      }
    </div>
  );
};

export default Banner;
