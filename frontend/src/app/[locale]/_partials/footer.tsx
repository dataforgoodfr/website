'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/atoms/Button';

const Footer = () => {
  const t = useTranslations('layout.footer');

  const communityNav: Record<string, string> = {
    github: 'https://github.com/dataforgoodfr',
    youtube: 'https://www.youtube.com/channel/UCA_utdbmVhAOFujulWlaaCQ?themeRefresh=1',
    meetup: 'https://www.meetup.com/data-for-good-fr/',
  };

  const informationsNav: Record<string, string> = {
    faq: '/todo',
    cgu: '/todo',
    charte: '/todo',
  };

  return (
    <footer className="pt-sm">
      <Image src="/images/scratch.svg" alt={t('title')} width={212} height={48} className="object-contain w-full" />
      <div className="py-16 bg-white text-black">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 mx-auto px-4">
          <div className="space-y-5">
            <Link href="/">
              <Image
                src="/images/dataforgood.svg"
                alt={t('title')}
                width={212}
                height={48}
                className="object-contain"
              />
            </Link>

            <p className="font-secondary">
              {t('description')}
            </p>
          </div>

          <nav aria-labelledby="footer-community-nav" className="flex flex-col gap-5">
            <p id="footer-community-nav" className="text-lg font-secondary">{t('community.title')}</p>
            <ul className="space-y-5">
              {Object.keys(communityNav).map(community => (
                <li key={community}>
                  <Link href={communityNav[community]} target="_blank" rel="noreferrer" className="blank underline hover:no-underline">
                    {t(`community.${community}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-informations-nav" className="flex flex-col gap-5">
            <p id="footer-informations-nav" className="text-lg font-secondary">{t('informations.title')}</p>
            <ul className="space-y-5">
              {Object.keys(informationsNav).map(informations => (
                <li key={informations}>
                  <Link href={informationsNav[informations]} className="underline hover:no-underline">
                    {t(`informations.${informations}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-5">
            <p className="text-lg font-secondary">{t('contact.title')}</p>
            <p><Button href="mailto:contact@dataforgood.fr">contact@dataforgood.fr</Button></p>
            <iframe
              width="540"
              height="305"
              src="https://ffb35838.sibforms.com/serve/MUIFAClZei-0KJ4S5oAeeoW1_t4ZqHi48tZTWiISEt_s8kJsd-WpJ9Gprg21TiwBT7zskApNu-ifbq4C8PnCBG3dUeJphIPVtJ_2V1IB_fan1WRguNFGrW1TayNKJi1jSQ6_gfgmOlQDGdZSwOpi6VU3R-iX2CN7XyIDDQBo7A9xbiN0fwvRM0kvcKRCzG29MRJ00mGzZzzyaNOO"
              frameBorder="0"
              scrolling="auto"
              allowFullScreen
              title="Formulaire de contact Data For Good"
              sandbox="allow-scripts allow-forms"
              style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}
            />
          </div>
        </div>
        <div className="container flex flex-wrap gap-8 mx-auto px-4 mt-10 text-sm">
          <p>
            {t('copyright')}
            {new Date().getFullYear()}
          </p>
          <p>
            {t('author.title')}
            {' '}
            <Link href="https://coucou.design/" target="_blank" rel="noreferrer" className="blank underline hover:no-underline">
              {t('author.name')}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
