
import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Title, TitleProps } from '@/components';

export type ProjectCarouselProps = {
  title?: string;
  titleLevel?: TitleProps['level'];
  slides: Array<{
    id: string | number;
    description: string;
    image: string;
    altImage?: string;
  }>;
  className?: string;
  carouselClassName?: string;
};

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  title,
  titleLevel = 2,
  slides,
  className,
  carouselClassName
}) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);



  return (
    <div className={clsx('container', className)}>
      {title && <Title variant="medium" className="mb-md" level={titleLevel}>
        {title}
      </Title>}


      <Carousel
        setApi={setApi}
        opts={{
          align: 'center',
          loop: false,
          skipSnaps: false,
          containScroll: 'trimSnaps',
          dragFree: false,
        }}
        className={clsx(
          'w-full relative',
          current === count - 1 && slides.length > 1 && 'md:[&>div:first-child]:pr-[25vw]',
          carouselClassName,
          
        )}
      >
        <CarouselContent noOverflow className="px-[calc(50%-18rem)] items-center">
          {slides.map((slide, index) => (
            <CarouselItem
              key={slide.id}
              className={clsx(
                "max-w-3xl p-0 h-[520px]",
                index !== current && "bg-violet-light/80 px-0 py-0 h-[460px]"
              )}
            >
              <Image
                src={slide.image}
                alt={slide.altImage ?? ''}
                width={1000}
                height={400}
                className={clsx("relative col-start-1 row-start-1 row-span-3 w-full h-full object-contain -z-1",
                )}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-6 text-white ">
          <div className="mx-auto flex flex-col flex-wrap items-center justify-between w-max-content">
            <div className='w-1/2 justify-between items-center flex flex-row'>

              <CarouselPrevious className='h-fit-content' />
              <div className="text-center text-black px-4">
                {slides[current]?.description}
              </div>
              <CarouselNext className='h-fit-content' />
            </div>

            {/* Progress bar */}
            <div className="h-4 w-[300px] mx-auto mt-8 bg-[url('/images/pages/projects/bg-progress-project.svg')] bg-size-[300px_auto] bg-no-repeat">
              <div
                className="h-full bg-[url('/images/carousel-progressbar-black.svg')] bg-size-[300px_auto] transition-all duration-300"
                style={{ width: `${((current + 1) / count) * 100}%` }}
              />
            </div>
          </div>
        </div>


      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
