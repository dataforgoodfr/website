import type { ApiHomePageHomePage } from '@/types/strapi/generated/contentTypes';
import Image from 'next/image';
import Link from 'next/link';
import qs from 'qs';
import { getImage, getStrapiData } from '@/lib/utils';
import { MainMenu } from './main-menu';
import { Button } from './ui/button';

export async function Header() {
  const query = qs.stringify({
    populate: {
      logo: true,
    },
  });

  const apiData = await getStrapiData<ApiHomePageHomePage>(
    `home-page?${query}`,
  );
  const { title, logo } = apiData;

  const logoImage = getImage(logo);

  const ctas = [
    {
      label: 'Je suis une association',
      href: '/association',
    },
    {
      label: 'Je veux être bénévole',
      href: '/volunteer',
    },
    {
      label: 'Je veux financer',
      href: '/funder',
    },
  ];

  return (
    <header className="flex items-center justify-between bg-white px-6 py-2">
      <div className="flex gap-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={logoImage} alt="Data For Good" width={30} height={30} />
          <span className="font-bold">{title}</span>
        </Link>
        <MainMenu />
      </div>
      <div className="flex space-x-2">
        {ctas.map(cta => (
          <Link key={cta.label} href={cta.href}>
            <Button className="bg-[#35c4d7] text-white hover:bg-[#35c4d7]/90">
              {cta.label}
            </Button>
          </Link>
        ))}
      </div>
    </header>
  );
}
