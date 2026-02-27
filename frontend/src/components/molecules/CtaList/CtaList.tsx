'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { ArrowIcon } from '@/components';

export type CtaListItem = {
  id: string | number;
  text: string;
  link: string;
};

export type CtaListProps = {
  items: CtaListItem[];
  className?: string;
};

const CtaList: React.FC<CtaListProps> = ({ items, className }) => {
  return (
    <div className={clsx('flex flex-col gap-4', className)}>
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.link}
          className="group relative flex items-center justify-between w-full p-6 bg-white border-2 border-building transition-colors hover:bg-building hover:text-white"
        >
          <span className="text-lg font-bold uppercase tracking-widest">
            {item.text}
          </span>
          <ArrowIcon direction="down" className="w-6 h-6" />
        </Link>
      ))}
    </div>
  );
};

export default CtaList;
