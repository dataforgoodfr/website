'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

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
    <footer className="border-t border-black py-[4.5rem]">
      <div className="container flex justify-between flex-wrap gap-4 mx-auto px-4">
        <div className="flex flex-col gap-5 w-full md:w-1/2 lg:w-1/5">
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

          <div className="mt-auto text-sm">
            <p>
              {t('copyright')}
              {new Date().getFullYear()}
            </p>
            <p>
              {t('author.title')}
              {' '}
              <Link href="https://coucou.design/" target="_blank" rel="noreferrer" className="underline hover:no-underline">
                {t('author.name')}
              </Link>
            </p>
          </div>
        </div>
        <nav aria-labelledby="footer-community-nav" className="flex flex-col gap-5 w-full md:w-1/2 lg:w-1/5">
          <p id="footer-community-nav" className="text-lg font-secondary">{t('community.title')}</p>
          <ul className="space-y-5">
            {Object.keys(communityNav).map(community => (
              <li key={community}>
                <Link href={communityNav[community]} target="_blank" className="hover:underline">
                  {t(`community.${community}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-labelledby="footer-informations-nav" className="flex flex-col gap-5 w-full md:w-1/2 lg:w-1/5">
          <p id="footer-informations-nav" className="text-lg font-secondary">{t('informations.title')}</p>
          <ul className="space-y-5">
            {Object.keys(informationsNav).map(informations => (
              <li key={informations}>
                <Link href={informationsNav[informations]} target="_blank" className="hover:underline">
                  {t(`informations.${informations}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-5 w-full md:w-1/2 lg:w-1/5">
          <p className="text-lg font-secondary">{t('contact.title')}</p>
          <p>contact@dataforgood.fr</p>
          <iframe width="540" height="305" sandbox="" title="brevo" src="https://ffb35838.sibforms.com/serve/MUIFAHic6Q9t_f3GJ7lVO-JH8wjBHOwrORkPSPRuHYi0aLhJLIlNNIcVb94xZiV22AL6LWoZj7e6bQv_g8W49Hn8fWeKwUGevz1mZoZgV5bbDcmCIbehbdeeD2pQuObbhAPhN2xNtn_8D48YA8HwAZV0rGN9swl1BWFYL5X6SmX8WDlnKvBzfD_kdqG9SHqikN9MUpaVgpU6uNcJ" className="block" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
