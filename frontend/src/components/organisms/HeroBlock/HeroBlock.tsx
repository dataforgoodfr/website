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
        'container py-lg overflow-hidden',
        className,
      )}
      {...props}
    >
      <div className='relative z-1 flex flex-col sm:flex-row items-stretch gap-md gap-y-2'>
        <div className='relative sm:order-2 sm:flex-1 h-24 sm:h-auto'>
          <Image src={image} alt="" loading="lazy" width={1000} height={400} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col w-full items-start relative z-10">
          <TiltedTitle {...title} className={`${title.className} text-left font-tertiary font-normal`} />
          {subtitle?.children && <TiltedTitle {...subtitle} className={`${subtitle.className} mb-sm text-left font-tertiary font-normal`} />}

          <div className={`max-w-[289px] -z-1`}>
            <p className='font-normal p-2 mt-xs mb-xs -z-5 text-sm md:text-sm bg-white font-medium font-primary relative inline-flex before:absolute before:content-[""] before:bg-black before:-z-2 before:w-full before:h-full before:top-1 before:left-1 before:border-0' >
              {talk}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
