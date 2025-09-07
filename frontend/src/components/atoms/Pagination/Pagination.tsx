import { useEffect, useState, type HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export type PaginationProps = HTMLAttributes<HTMLDivElement> & {
    pageCount: number;
    currentPage: number;
    setCurrentPage: any;
    className?: string;
    color?: 'white' | 'black';
};

const Pagination = ({
    pageCount,
    currentPage,
    setCurrentPage,
    className,
    color = 'white',
    ...props
}: PaginationProps) => {
    const t = useTranslations('components');

    if (pageCount == 1) {
        return null;
    }

    return (
        <div className={clsx('flex flex-row gap-sm items-center h-[22px]', className)} {...props} >
            <div className='cursor-pointer max-h-full h-full' onClick={() => {
                if (currentPage > 1) {
                    setCurrentPage(currentPage - 1)
                }
            }}>
                <Image src={color === 'white' ? '/images/arrow-left.svg' : '/images/arrow-left-black.svg'} alt={t('pagination.left')} width={212} height={48} loading="lazy" className="relative left-0 object-contain max-h-full max-w-full" />
            </div>
            <div className={clsx('flex flex-row gap-xs font-black', color === 'white' ? 'text-white' : 'text-black')}>
                {Array.from(Array(pageCount).keys()).map((number, index) => (
                    <div key={index} className='cursor-pointer' onClick={() => setCurrentPage(number + 1)} style={{ "textDecoration": currentPage === number + 1 ? "underline" : "none" }}>
                        {number + 1}
                    </div>))}
            </div>
            <div className='cursor-pointer max-h-full h-full' onClick={() => {
                if (currentPage !== pageCount) {
                    setCurrentPage(currentPage + 1)
                }
            }}>
                <Image src={color === 'white' ? '/images/arrow-right.svg' : '/images/arrow-right-black.svg'} alt={t('pagination.right')} width={212} height={48} loading="lazy" className="relative right-0 object-contain max-h-full max-w-full" />
            </div>

        </div>
    );
};

export default Pagination;
