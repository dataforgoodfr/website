
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
import { Button, Title, TitleProps } from '@/components';

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
  titleLevel?: TitleProps['level'];
  className?: string;
};

const ImagesCarousel: React.FC<ImagesCarouselProps> = React.memo(({
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

    // Wait for the API to be fully initialized
    const initializeCarousel = () => {
      try {
        const scrollSnapList = api.scrollSnapList();
        if (scrollSnapList.length > 0) {
          setCount(scrollSnapList.length);
          setCurrent(api.selectedScrollSnap() + 1);
        }
      } catch (error) {
        // Carousel API not ready yet
      }
    };

    // Initialize immediately if possible
    initializeCarousel();

    // Also listen for reInit event in case the carousel needs to reinitialize
    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    const handleReInit = () => {
      initializeCarousel();
    };

    api.on("select", handleSelect);
    api.on("reInit", handleReInit);

    return () => {
      api.off("select", handleSelect);
      api.off("reInit", handleReInit);
    };
  }, [api]);


  // Don't render carousel if no images
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <Carousel
      setApi={setApi}
      className={clsx(
        'w-full relative mask-papper overflow-hidden md:overflow-visible',
        className,
      )}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem
            key={image.id}
            className="grid grid-cols-1 grid-rows-[5rem_1fr_5rem] h-[700px] bg-black text-white"
          >
            <Image
              src={image.src}
              alt={image.alt ?? ''}
              width={1000}
              height={400}
              loading="eager"
              priority={index === 0}
              className="col-start-1 row-start-1 row-span-3 w-full h-full object-cover"
            />

            {/* Dark overlay to improve text readability */}
            <div className="z-1 col-start-1 row-start-1 row-span-3 bg-gradient-to-r from-black/80 to-white/0" />
            {/* Slide content */}
            <div className="flex items-center z-2 col-start-1 row-start-2 container">
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

      <div className="absolute bottom-16 left-0 right-0 text-white">
        <div className="container">
          <div className="ml-auto flex flex-wrap items-center justify-between w-52">
            <CarouselPrevious />
            <div className="flex-1 text-center h4-like">
              {current}/{count}
            </div>
            <CarouselNext />

            {/* Progress bar */}
            <div className="h-4 w-full mt-8 bg-[url('/images/carousel-progressbar-bg.svg')] bg-size-[208px_auto] bg-left-top bg-no-repeat">
              <div
                className="h-full bg-[url('/images/carousel-progressbar.svg')] bg-size-[208px_auto] bg-left-top bg-no-repeat transition-all duration-300"
                style={{ width: `${(current / count) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
});

ImagesCarousel.displayName = 'ImagesCarousel';

export default ImagesCarousel;
