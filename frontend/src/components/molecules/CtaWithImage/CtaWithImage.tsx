import clsx from 'clsx';
import ImageWithCredit from '@/components/molecules/ImageWithCredit';
import { Button, Title, TitleProps, TiltedTitle, TiltedTitleProps } from '@/components';

export type CtaWithImageProps = {
  title: TiltedTitleProps;
  content: {
    text: string;
    rotation: number;
    className?: string;
  };
  image?: string;
  imageCredit?: string | null;
  imageClassName?: string;
  imagePosition?: "left" | "right";
  cta: {
    text: string;
    link: string;
    rotation: number;
    className?: string;
  };
  className?: string;
  contentClassName?: string;
};

const CtaWithImage: React.FC<CtaWithImageProps> = ({
  title,
  content,
  image = "/images/default-image.svg",
  imageCredit,
  imageClassName,
  imagePosition = "right",
  cta,
  className,
  contentClassName,
}) => {
  if (!cta) {
    return null;
  }


  return (
    <div
      className={clsx(
        'relative flex flex-col justify-center items-start min-h-96 md:min-h-[770px]',
        className,
      )}
    >
      <div className={contentClassName}>
        <TiltedTitle level="p" variant={title.variant ?? 'medium'} rotation={title.rotation ?? -4} className={clsx("drop-shadow-3 drop-shadow-black before:-z-1 z-2", title.className)}>
          {title.children}
        </TiltedTitle>
        <div className={clsx("relative shadow-block shadow-block--black max-w-sm", content.className)} style={{transform: `rotate(${content.rotation}deg)`}}>
          <div className="font-secondary text-black bg-white p-5">
            <p>{content.text}</p>
          </div>
        </div>
        <Button color="white" href={cta.link} hasArrow style={{"transform": `rotate(${cta.rotation}deg`}} className={clsx("relative z-2", cta.className)}>
          {cta.text}
        </Button>
      </div>
      <ImageWithCredit src={image} alt="" credit={imageCredit} width={770} height={770} className={clsx("absolute -z-1 top-0 bottom-0 my-auto w-96 h-96 sm:w-[770px] sm:h-[770px] max-w-none", imageClassName, imagePosition === "left" ? "right-0" : "left-24")} />
    </div>
  );
};

export default CtaWithImage;
