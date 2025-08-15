
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
import { Button, Title } from '@/components';

export type ImagesCarouselProps = {
  images: Array<{
    id: string | number;
    src: string;
    alt?: string;
    title?: string;
    description?: string;
    ctaText?: string;
    ctaHref?: string;
  }>;
  titleLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
};

const ImagesCarousel: React.FC<ImagesCarouselProps> = ({
  images,
  titleLevel = 3,
  className,
}) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);


  return (
    <Carousel setApi={setApi} className={clsx(
      'w-full relative',
      className,
    )}>
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.id} className="grid grid-cols-1 grid-rows-[5rem_1fr_5rem] h-full sm:h-[700px] bg-black text-white">
            <Image src={image.src} alt={image.alt ?? ''} width={1000} height={400} className="col-start-1 row-start-1 row-span-3 w-full h-full object-cover" />
            {/* Dark overlay to improve text readability */}
            <div className="col-start-1 row-start-1 row-span-3 bg-black/30" />

            {/* Slide content */}
            <div className="col-start-1 row-start-2 container">
              <div className="max-w-md">
                {image.title && (
                  <Title level={titleLevel} variant="medium" className="mb-xs">
                      {image.title}
                  </Title>
                )}
                
                {image.description && (
                  <p className="font-secondary my-xs">
                    {image.description}
                  </p>
                )}
                
                {image.ctaText && image.ctaHref && (
                  <Button href={image.ctaHref}>
                    {image.ctaText}
                  </Button>
                )}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="absolute bottom-4 left-0 right-0 text-white">
        <div className="container">
          <div className="ml-auto flex flex-wrap items-center justify-between w-52">
            <CarouselPrevious />
            <div className="text-sm font-medium">
              {current}/{count}
            </div>
            <CarouselNext />

            {/* Progress bar */}
            <div 
              className="h-full bg-white transition-all duration-300"
              style={{ width: `${(current / count) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default ImagesCarousel;
