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
          className="shadow-block shadow-block--building w-full"
        >
          <div className="flex items-center justify-between w-full p-6 bg-white text-building">
            <span className="text-lg font-bold uppercase tracking-widest">
              {item.text}
            </span>
            <ArrowIcon direction="download" className="w-6 h-6" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CtaList;
