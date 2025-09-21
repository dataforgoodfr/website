'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { FaBluesky, FaLinkedin } from 'react-icons/fa6';
import { Button, SocialLink } from '@/components/atoms';
import { usePathLocale } from '@/hooks/usePathLocale';
import { NewsletterForm } from '@/components';

const Footer = () => {
  const t = useTranslations('layout.footer');
  

  const socialLinks: Record<string, { href: string; icon: React.ReactNode }> = {
    bluesky: {
      href: 'https://bsky.app/profile/dataforgood.fr',
      icon: <FaBluesky />,
    },
    linkedin: {
      href: 'https://www.linkedin.com/company/dataforgoodfr/',
      icon: <FaLinkedin />,
    },
  };

  const communityNav: Record<string, string> = {
    github: 'https://github.com/dataforgoodfr',
    youtube: 'https://www.youtube.com/channel/UCA_utdbmVhAOFujulWlaaCQ?themeRefresh=1',
    meetup: 'https://www.meetup.com/data-for-good-fr/',
  };

  const informationsNav: Record<string, string> = {
    faq: usePathLocale('/faq'),
    cgu: usePathLocale('/cgu'),
    charte: usePathLocale('/charte'),
  };

  return (
    <footer className="relative">
      <Image src="/images/scratch.svg" alt="" width={212} height={48} className="absolute bottom-full left-0 object-contain w-full" />
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

          <nav aria-labelledby="footer-community-nav" className="flex flex-col gap-5 text-sm">
            <p id="footer-community-nav" className="uppercase font-black font-secondary">{t('community.title')}</p>
            <ul className="space-y-5">
              {Object.keys(communityNav).map(community => (
                <li key={community}>
                  <Link href={communityNav[community]} target="_blank" rel="noreferrer" className="blank text-black/60 underline hover:no-underline">
                    {t(`community.${community}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-informations-nav" className="flex flex-col gap-5 text-sm">
            <p id="footer-informations-nav" className="uppercase font-black font-secondary">{t('informations.title')}</p>
            <ul className="space-y-5">
              {Object.keys(informationsNav).map(informations => (
                <li key={informations}>
                  <Link href={informationsNav[informations]} className="text-black/60 underline hover:no-underline">
                    {t(`informations.${informations}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-5 text-sm">
            <p className="uppercase font-black font-secondary">{t('contact.title')}</p>
            <p><Button variant="secondary" href="mailto:contact@dataforgood.fr">contact@dataforgood.fr</Button></p>
            <NewsletterForm />
            <ul className="flex gap-2">
              {Object.keys(socialLinks).map(social => (
                <li key={social}>
                  <SocialLink href={socialLinks[social].href} icon={socialLinks[social].icon ?? ''} label={t(`social.${social}`)} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container flex flex-wrap gap-8 mx-auto px-4 mt-10 text-sm text-black/60">
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
