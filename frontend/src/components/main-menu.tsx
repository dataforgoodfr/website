'use client';

import Image from 'next/image';
import Link from 'next/link';

import * as React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const menu = [
  {
    title: 'Accueil',
    href: '/',
  },
  {
    title: 'À propos',
    href: '/about',
    children: [
      {
        title: 'Le fonctionnement de l\'équipe',
        href: '/about/team',
        detail: {
          title: '',
          image:
            'https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
      },
      {
        title: 'Nos axes d\'action',
        href: '/about/axes',
      },
      {
        title: 'Nos antennes',
        href: '/about/antennas',
      },
      {
        title: 'Nos rapports d\'activité',
        href: '/about/reports',
      },
      {
        title: 'Nous contacter',
        href: '/about/contact',
      },
    ],
  },
  {
    title: 'Projets',
    href: '/projects',
    children: [
      {
        title: 'A venir',
        href: '/projects/upcoming',
      },
      {
        title: 'En cours',
        href: '/projects/ongoing',
      },
      {
        title: 'Passés',
        href: '/projects/past',
      },
      {
        title: 'Tous les projets',
        href: '/projects/all',
      },
      {
        title: 'Hors saison',
        href: '/projects/offseason',
      },
    ],
  },
  {
    title: 'Événements',
    href: '/events',
  },
  {
    title: 'Ressources',
    href: '/resources',
    children: [
      {
        title: 'Nos formations',
        href: '/resources/training',
      },
      {
        title: 'Articles de presse',
        href: '/resources/press',
      },
      {
        title: 'Serment d\'Hippocrate',
        href: '/resources/hippocrate',
      },
      {
        title: 'Les grands défis de l\'IA',
        href: '/resources/ia-challenges',
      },
      {
        title: 'Charte diversité',
        href: '/resources/diversity',
      },
    ],
  },
] as Array<{
  title: string;
  href: string;
  children?: Array<{
    title: string;
    href: string;
    detail?: {
      title: string;
      image: string;
    };
  }>;
}>;

export function MainMenu() {
  const [activeChild, setActiveChild] = React.useState<string | null>(null);

  return (
    <NavigationMenu className="z-50">
      <NavigationMenuList>
        {menu.map(item => (
          <NavigationMenuItem key={item.title}>
            {(item.children && (
              <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
            )) || (
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.title}
                </NavigationMenuLink>
              </Link>
            )}
            {item.children && (
              <NavigationMenuContent>
                <ul className="grid w-[1000px] gap-2 bg-gradient-to-b from-muted/50 to-muted p-4 md:h-[200px] md:grid-cols-3 lg:h-[400px] ">
                  <div className="col-span-1">
                    {item.children.map(child => (
                      <li
                        key={child.title}
                        onMouseEnter={() => setActiveChild(child.title)}
                        onMouseLeave={() => setActiveChild(null)}
                      >
                        <Link href={child.href} legacyBehavior passHref>
                          <a
                            className={cn(
                              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                            )}
                          >
                            <div className="text-sm font-medium leading-none">
                              {child.title}
                            </div>
                          </a>
                        </Link>
                      </li>
                    ))}
                  </div>
                  <div className="col-span-2 row-span-3 rounded-sm bg-white">
                    {activeChild
                      ? (
                          <HoveredItem
                            title={
                              item.children.find(c => c.title === activeChild)
                                ?.detail
                                ?.title
                            }
                            image={
                              item.children.find(c => c.title === activeChild)
                                ?.detail
                                ?.image
                            }
                          />
                        )
                      : null}
                  </div>
                </ul>
              </NavigationMenuContent>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

function HoveredItem({
  title,
  image,
}: {
  title: string | undefined;
  image: string | undefined;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className="flex size-full select-none flex-col justify-end rounded-md bg-white p-6 no-underline outline-none focus:shadow-md"
          href="/"
        >
          {title
            ? (
                <p className="text-sm leading-tight text-muted-foreground">
                  {title}
                </p>
              )
            : null}
          {image && (
            <Image
              className="rounded"
              src={image}
              width={500}
              height={300}
              alt="Description of the image"
            />
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
}
