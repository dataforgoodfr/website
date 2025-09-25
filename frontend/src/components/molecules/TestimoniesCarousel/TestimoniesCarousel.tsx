
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
import { TiltedTitle } from '@/components';

export type TestimoniesCarouselProps = {
  testimonies: Array<{
    id: string | number;
    author: string;
    content: string;
    image?: string;
  }>;
  className?: string;
};

const TestimoniesCarousel: React.FC<TestimoniesCarouselProps> = ({
  testimonies,
  className,
}) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
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
        className,
      )}
    >
      <CarouselContent noOverflow className="px-[calc(50%-24rem)]">
        {testimonies.map((testimony, index) => (
          <CarouselItem 
            key={testimony.id} 
            className={clsx(
              "max-w-3xl py-6 px-8",
              index !== current && "opacity-20"
            )}
          >
            <blockquote className="relative z-1 flex flex-col md:flex-row items-center before:absolute before:content-[''] before:w-full before:h-full before:bg-white before:shadow-base before:-rotate-3">
              <div className="relative flex flex-col items-center w-48 sm:-left-12">
                <Image src={testimony.image ?? "/images/default-image.svg"} alt="" loading="lazy" width={192} height={192} className="w-full h-full object-contain" />
                <TiltedTitle className="text-center w-full text-sm md:text-base drop-shadow-1 drop-shadow-black" level="p" variant="x-small" colors="text-dark bg-blue block w-full text-center">
                  {testimony.author}
                </TiltedTitle>
              </div>
              <p className="relative flex-1 font-tertiary text-lg md:text-3xl py-10 px-8 md:pl-0 md:pr-12">
                  {testimony.content}
                </p>
            </blockquote>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="absolute bottom-0 top-0 my-auto left-0 flex items-center justify-between">
        <CarouselPrevious />
      </div>
      <div className="absolute bottom-0 top-0 my-auto right-0 flex items-center justify-between">
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default TestimoniesCarousel;
