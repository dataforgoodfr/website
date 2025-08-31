'use client';

import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';

const Header = () => {
  const pathname = usePathname();
  const t = useTranslations('layout');
  const [selectedItem, setSelectedItem] = useState('home');
  const navRef = useRef<HTMLDivElement>(null);
  const [openNav, setOpenNav] = useState(false);

  const topNav: Record<string, string> = {
    project: '/todo',
    volunteer: '/todo',
    financier: '/todo',
  };

  const mainNav: Record<string, string> = {
    know: '/about',
    projects: '/projects',
    positions: '/todo',
    news: '/todo',
    resources: '/todo',
  };

  const authorizeKeys = [
    'ArrowRight',
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'Home',
    'End',
  ];
  const idItemsNav = [
    'home',
    'toggleOpen',
    'toggleClose',
    ...Object.keys(topNav),
    ...Object.keys(mainNav),
  ];

  const toggleNav = (show: boolean): void => {
    setOpenNav(show);
    const targetElement: HTMLAnchorElement | null | undefined
      = navRef?.current?.querySelector(
        `[data-ref="${show ? 'toggleClose' : 'toggleOpen'}"]`,
      );

    if (targetElement && targetElement.checkVisibility()) {
      targetElement.focus();
    }
    setSelectedItem(show ? 'toggleClose' : 'toggleOpen');
  };

  const handleToggleNav = (e: React.MouseEvent<HTMLButtonElement>, show = false): void => {
    e.preventDefault();
    toggleNav(show);
  };

  // eslint-disable-next-line no-unused-vars
  const handleFocusNav: (e: React.KeyboardEvent) => void = (e) => {
    // Exception: add Escape event in subnav list
    if (
      selectedItem !== 'home'
      && selectedItem !== 'toggleOpen'
      && navRef?.current
        ?.querySelector(`[data-ref="toggleClose"]`)
        ?.checkVisibility()
        && e.code === 'Escape'
    ) {
      return toggleNav(false);
    }

    // If not authorized key down
    if (!authorizeKeys.includes(e.code)) {
      return;
    }

    let checkVisibleItem = false;
    let newItemSelected = selectedItem;
    let newIndexIdItem = 0;

    while (!checkVisibleItem) {
      const actualIndexItemNav = idItemsNav.indexOf(newItemSelected);

      switch (e.code) {
        case 'Home':
          newIndexIdItem = 0;
          break;
        case 'End':
          newIndexIdItem = idItemsNav.length - 1;
          break;
        case 'ArrowRight':
        case 'ArrowDown':
          newIndexIdItem
            = actualIndexItemNav === idItemsNav.length - 1
              ? 0
              : actualIndexItemNav + 1;
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          newIndexIdItem
            = actualIndexItemNav === 0
              ? idItemsNav.length - 1
              : actualIndexItemNav - 1;
          break;
      }

      newItemSelected = idItemsNav[newIndexIdItem];

      const targetElement: HTMLAnchorElement | null | undefined
        = navRef?.current?.querySelector(`[data-ref="${newItemSelected}"]`);

      if (targetElement && targetElement.checkVisibility()) {
        targetElement.focus();
        checkVisibleItem = true;
      }
    }

    setSelectedItem(newItemSelected);
  };

  return (
    <header>
      <nav
        aria-label={t('header.nav.toggle.alt')}
        ref={navRef}
      >
        <div role="menubar" className="flex items-center lg:items-end justify-between gap-4 pl-4 lg:px-6 lg:pb-4">
          <Link
            href="/"
            tabIndex={selectedItem === 'home' ? 0 : -1}
            data-ref="home"
            role="menuitem"
            aria-current={pathname === '/' ? 'page' : undefined}
            onKeyDown={handleFocusNav}
          >
            <Image
              src="/images/dataforgood.svg"
              alt={t('header.title')}
              width={176}
              height={43}
              className="w-44 lg:w-[13.25rem] object-contain"
            />
          </Link>

          <button
            className="block lg:hidden p-4 hover:bg-alive/50 focus:bg-alive/50"
            type="button"
            tabIndex={selectedItem === 'toggleOpen' ? 0 : -1}
            onClick={e => handleToggleNav(e, true)}
            data-ref="toggleOpen"
            role="menuitem"
            aria-haspopup="true"
            aria-expanded={openNav}
            onKeyDown={handleFocusNav}
          >
            <Image
              src="/icons/menu.svg"
              width={24}
              height={24}
              alt={t('header.nav.toggle.open')}
            />
          </button>
          <div
            className={clsx(
              'fixed z-50 left-0 top-0 size-full gap-4 lg:static lg:flex lg:items-end lg:flex-col lg:gap-9 bg-white lg:bg-transparent',
              !openNav && 'hidden',
            )}
          >
            <button
              className="ml-auto block p-4 lg:hidden hover:bg-alive/50 focus:bg-alive/50"
              onClick={e => handleToggleNav(e)}
              type="button"
              tabIndex={selectedItem === 'toggleClose' ? 0 : -1}
              data-ref="toggleClose"
              role="menuitem"
              aria-haspopup="true"
              aria-expanded={openNav}
              onKeyDown={handleFocusNav}
            >
              <Image
                src="/icons/close.svg"
                width={24}
                height={24}
                alt={t('header.nav.toggle.close')}
              />
            </button>
            <ul
              role="menu"
              aria-label={t('header.nav.top.label')}
              className="flex flex-col lg:flex-row gap-4 lg:gap-[1px] p-4 lg:p-0"
              onKeyDown={handleFocusNav}
            >
              {Object.keys(topNav).map(link => (
                <li role="none" key={`topnav-${link}`}>
                  <Link
                    href={topNav[link]}
                    aria-current={topNav[link] === pathname ? 'page' : undefined}
                    tabIndex={selectedItem === link ? 0 : -1}
                    data-ref={link}
                    onClick={() => toggleNav(false)}
                    role="menuitem"
                    className={clsx(
                      'inlie-block px-4 py-1.5',
                      'font-secondary bg-alive text-black uppercase text-sm',
                      'hover:bg-alive/80 focus:bg-alive/80',
                      topNav[link] === pathname && `bg-resistance`,
                    )}
                  >
                    {t(`header.nav.top.${link}`)}
                  </Link>
                </li>
              ))}
            </ul>

            <ul
              role="menu"
              aria-label={t('header.nav.main.label')}
              className="flex flex-col lg:flex-row gap-4 lg:gap-0 p-4 lg:p-0"
              onKeyDown={handleFocusNav}
            >
              {Object.keys(mainNav).map(link => (
                <li role="none" key={`mainNav-${link}`}>
                  <Link
                    href={mainNav[link]}
                    aria-current={mainNav[link] === pathname ? 'page' : undefined}
                    tabIndex={selectedItem === link ? 0 : -1}
                    data-ref={link}
                    onClick={() => toggleNav(false)}
                    role="menuitem"
                    className={clsx(
                      'block px-4 py-1',
                      'font-secondary uppercase font-black',
                      'relative before:absolute before:bottom-0 before:left-0 before:w-0 before:right-0 lg:before:m-auto before:h-0.5 before:bg-black',
                      'hover:before:w-1/4 focus:before:w-1/4 lg:hover:before:w-full lg:focus:before:w-full before:transition-all before:duration-300',
                      mainNav[link] === pathname && 'before:w-1/4 lg:before:w-full',
                    )}
                  >
                    {t(`header.nav.main.${link}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
