import clsx from 'clsx';
import Image from 'next/image'
import { TiltedTitle, TiltedTitleProps } from '@/components/atoms';

export type HeroBlockProps = {
  image: string;
  title: TiltedTitleProps;
  subtitle?: TiltedTitleProps;
  talk: string;
  className?: string;
};

const HeroBlock: React.FC<HeroBlockProps> = ({
  image,
  title,
  subtitle,
  talk,
  className,
  ...props
}) => {
  if (!title.children || !talk) {
    return null;
  }

  return (
    <div
      className={clsx(
        'container grid grid-rows-2 grid-cols-1 grid-rows-[100px_1fr] md:grid-rows-[200px_1fr_200px] md:grid-cols-2 md:grid-rows-3 max-h-[850px]',
        className,
      )}
      {...props}
    >
      {image && <div className='col-start-1 row-start-1 row-span-3 max-w-fit -z-1 w-full h-full'>
        <Image src={image} alt="" loading="lazy" width={1000} height={400} className="object-cover h-full md:max-w-fit" />
      </div>}
      <div className="col-start-1 row-start-2 mt-lg md:mt-0 md:col-start-2 md:row-start-2">
        <div className="container h-full">
          <div className="flex flex-col max-w-xl ml-auto items-start relative z-10">
            <TiltedTitle {...title} className={`${title.className} text-left font-tertiary font-normal`} />
            {subtitle?.children && <TiltedTitle {...subtitle} className={`${subtitle.className} text-left font-tertiary font-normal`} />}

            <div className={`w-full md:w-4/5 -z-1`}>
              <p className='font-normal p-2 mt-xs mb-xs -z-5 text-sm md:text-sm bg-white font-medium font-primary relative inline-flex before:absolute before:content-[""] before:bg-black before:-z-2 before:w-full before:h-full before:top-1 before:left-1 before:border-0' >
                {talk}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
