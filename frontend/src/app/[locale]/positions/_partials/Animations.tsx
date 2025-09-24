import { useTranslations } from 'next-intl';
import { TiltedTitle, Button } from '@/components';
import Image from 'next/image';
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import { useRef } from 'react';
import Link from 'next/link';

export default function Animation({ animationData }: {
  animationData: {
    manifestCta: {
      text: string;
      link: string;
    };
  }
}) {
  const t = useTranslations('positions');
  console.log(animationData)

  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: refContainer });

  return (
    <div className="container flex justify-center items-center h-[600dvh]" ref={refContainer}>
      <Link href="#lastContent" className="absolute z-1 top-[calc(100dvh-40px)] right-[40px] text-grey-text flex flex-col items-center hover:text-black">
        {t('skipLink')}
        <Image src="/icons/skip-arrow.svg" alt="" width={16} height={16} />
      </Link>

      {/* Screen 1 */}
      <motion.div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center" style={{ opacity: useTransform(scrollYProgress, [0, 0.1, 0.95, 1], [1, 0.2, 0.2, 0]) }}>
        <div className="mt-36 max-w-[800px] px-4 lead text-center">
          <p>{t('intro.0.text1')}</p>
          <p>{t('intro.0.text2')}</p>
        </div>
      </motion.div>

      {/* Screen 2 */}
      <motion.div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center" style={{ opacity: useTransform(scrollYProgress, [0, 0.05, 0.1, 0.95, 1], [0, 0, 1, 1, 0]) }}>
        <div className="mt-36 relative md:left-[-150px] md:top-[-40px] max-w-[800px] px-4 lead flex flex-col items-end">
          <Image
            src="/images/pages/positions/screen-2.png"
            alt=""
            width={160}
            height={138}
          />
          <p className="relative sm:bottom-2 sm:-left-8 shadow-base bg-white p-2 max-w-[430px] rotate-[-4.45deg]">{t('intro.1.text1')}</p>
        </div>
      </motion.div>

      {/* Screen 3 */}
      <motion.div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center" style={{ opacity: useTransform(scrollYProgress, [0, 0.25, 0.3, 0.95, 1], [0, 0, 1, 1, 0]) }}>
        <div className="mt-36 relative md:left-[115px] max-w-[800px] px-4 lead flex flex-col items-end">
          <Image
            src="/images/pages/positions/screen-3.png"
            alt=""
            width={300}
            height={250}
          />
          <p className="relative sm:bottom-16 shadow-base bg-white p-2 max-w-[430px] rotate-[1.32deg]">{t('intro.2.text1')}</p>
        </div>
      </motion.div>

      {/* Screen 4 */}
      <motion.div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center" style={{ opacity: useTransform(scrollYProgress, [0, 0.45, 0.5, 0.95, 1], [0, 0, 1, 1, 0]) }}>
        <div className="mt-36 relative md:-left-[120px] md:top-[-85px] max-w-[800px] px-4 lead flex flex-col items-end gap-8">
          <Image
            src="/images/pages/positions/screen-4.png"
            alt=""
            width={300}
            height={250}
          />
          <p className="relative shadow-base bg-white p-2 max-w-[430px] rotate-[-6.32deg]">{t('intro.3.text1')}</p>
        </div>
      </motion.div>

      {/* Screen 5 */}
      <motion.div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center" style={{ opacity: useTransform(scrollYProgress, [0, 0.65, 0.7, 0.95, 1], [0, 0, 1, 1, 0]) }}>
        <div className="mt-36 relative md:-left-[120px] md:top-[-180px] max-w-[800px] px-4 lead flex flex-col items-end gap-8">
          <Image
            src="/images/pages/positions/screen-5.png"
            alt=""
            width={400}
            height={400}
            className="w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] object-contain"
          />
          <p className="relative sm:bottom-[34px] sm:left-[100px] shadow-base bg-white p-2 max-w-[564px] rotate-[-9.1deg]">{t('intro.4.text1')}</p>
        </div>
      </motion.div>

      {/* Screen 6 */}
      <motion.div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center" style={{ opacity: useTransform(scrollYProgress, [0, 0.85, 0.9, 0.99, 1], [0, 0, 1, 1, 0]) }}>
        <div className="mt-36 relative md:top-[-180px] px-4 lead flex flex-col items-center">
          <TiltedTitle level={1} variant="big" rotation={-3.49} className="relative top-4 drop-shadow-3 drop-shadow-black">{t('intro.5.title')}</TiltedTitle>
          <p className="h3-like relative  p-2 max-w-[564px] rotate-[-3.49deg] drop-shadow-3 drop-shadow-black">
            <span className="bg-alive relative z-1">{t('intro.5.description')}</span>
          </p>
          <Button color="white" href={animationData.manifestCta.link} className="relative -bottom-2">{animationData.manifestCta.text ?? t('intro.5.cta')}</Button>
        </div>
      </motion.div>
    </div>
  )
}