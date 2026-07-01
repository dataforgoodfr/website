import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export type ManifestoBannerProps = {
  text: string;
  link: string;
  className?: string;
};

const ManifestoBanner: React.FC<ManifestoBannerProps> = ({
  text,
  link,
  className,
  ...props
}) => {
  if (!link) {
    return null;
  }

  return (
    <div className={clsx('container', className)} {...props}>
      <Link
        href={link}
        target="_blank"
        rel="noreferrer"
        className={clsx(
          'group relative z-1 block',
          'before:absolute before:content-[""] before:-z-1 before:w-full before:h-full before:top-2 before:left-2 before:rounded-2xl before:bg-building before:transition-base',
          'hover:before:top-1 hover:before:left-1 focus-visible:before:top-1 focus-visible:before:left-1',
        )}
      >
        <div className="relative flex items-center justify-between gap-6 rounded-2xl bg-violet-light py-10 pl-8 pr-6 md:py-12 md:pl-14 md:pr-10">
          <span className="h3-like max-w-[60%] text-black">{text}</span>
          <svg
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="shrink-0 text-black transition-transform duration-200 group-hover:translate-x-1"
          >
            <path
              d="M8.5 4L16.5 12L8.5 20"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="pointer-events-none absolute -top-36 right-[8%] w-28 rotate-[7deg] md:-top-52 md:right-[12%] md:w-44">
          <Image
            src="/images/manifesto-page-2.png"
            alt=""
            width={520}
            height={735}
            className="absolute left-0 top-0 h-auto w-full translate-x-[14%] translate-y-[9%] rotate-[6deg] rounded-[2px] shadow-[5px_5px_0_0_#161031]"
          />
          <Image
            src="/images/manifesto-page-1.png"
            alt="Aperçu de la première page du manifeste"
            width={520}
            height={735}
            className="relative z-1 h-auto w-full rounded-[2px] shadow-[5px_5px_0_0_#161031]"
          />
        </div>
      </Link>
    </div>
  );
};

export default ManifestoBanner;
