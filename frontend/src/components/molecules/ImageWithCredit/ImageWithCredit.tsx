import clsx from 'clsx';
import Image, { type ImageProps } from 'next/image';

export type ImageWithCreditProps = ImageProps & {
  credit?: string | null;
  creditClassName?: string;
};

const ImageWithCredit: React.FC<ImageWithCreditProps> = ({
  src,
  alt = '',
  credit,
  creditClassName,
  className,
  ...props
}) => {
  const hasCredit = credit && credit.trim() !== '';

  return (
    <>
      <Image
        src={src}
        alt={alt}
        {...props}
        className={clsx('relative', className)}
      />
      {hasCredit && (
        <span
          className={clsx(
            'absolute bottom-14 left-4 bg-black/70 text-gray-200 text-xs px-2 py-1 z-10',
            creditClassName,
          )}
        >
          Crédit {credit}
        </span>
      )}
    </>
  );
};

export default ImageWithCredit;
