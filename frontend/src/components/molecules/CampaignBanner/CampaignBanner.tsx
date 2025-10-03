import { ArrowIcon, Button } from '@/components/atoms';
import { usePathLocale } from '@/hooks/usePathLocale';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import Image from "next/image"
import Link from 'next/link';

export type CampaignBannerProps = {
  className?: string;
};

const CampaignBanner: React.FC<CampaignBannerProps> = ({
  className,
  ...props
}) => {
  const t = useTranslations('layout');
  const cta_link = usePathLocale('/donations')

  return (
    <div
      className={clsx(
        'relative justify-center items-center text-white bg-building',
        className,
      )}
      {...props}
    >
      <Image
        src="/images/confettis-banner.svg"
        alt=""
        width={1000}
        height={1000}
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full opacity-90 object-cover z-1"
      />
      <div className="w-full relative lg:justify-start justify-between flex flex-row w-full z-2 px-6 py-4 lg:py-2 text-left  items-center lead">
        <p className='uppercase text-sm max-md:hidden'>{t(`header.banner.top.desktopText`)}</p>
        <p className='uppercase text-sm md:hidden'>{t(`header.banner.top.mobileText`)}</p>
        <Link
          href={cta_link}
          data-ref={cta_link}
          className={clsx(
            'flex items-center z-10 gap-2 ml-5 px-4 py-0.5',
            'bg-white',
            'font-primary font-black tracking-widest uppercase text-black text-xs shadow-base',
          )}
        >
          <span>{t(`header.banner.top.cta`)}</span>
          <ArrowIcon />
        </Link>


      </div>
    </div>
  );
};

export default CampaignBanner;
