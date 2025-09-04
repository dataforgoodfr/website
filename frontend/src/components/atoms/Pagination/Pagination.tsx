import { useEffect, useState, type HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export type PaginationProps = HTMLAttributes<HTMLDivElement> & {
    pageCount: number;
    currentPage: number;
    setCurrentPage: any;
    className?: string;
};

const Pagination = ({
    pageCount,
    currentPage,
    setCurrentPage,
    className = '',
    ...props
}: PaginationProps) => {
    const t = useTranslations('components');

    if (pageCount == 1) {
        return null;
    }

    useEffect(() => {
        console.log(currentPage)
    }, [currentPage])

    return (
        <div className={clsx('flex flex-row gap-sm items-center h-[22px]', className)} {...props} >
            <div className='cursor-pointer max-h-full h-full' onClick={() => {
                if (currentPage > 1) {
                    setCurrentPage(currentPage - 1)
                }
            }}>
                <Image src="/images/arrow-left.svg" alt={t('pagination.left')} width={212} height={48} className="relative left-0 object-contain max-h-full max-w-full" />
            </div>
            <div className='flex flex-row gap-xs text-white'>
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
                <Image src="/images/arrow-right.svg" alt={t('pagination.right')} width={212} height={48} className="relative right-0 object-contain max-h-full max-w-full" />
            </div>

        </div>
        // <Button variant="tertiary" color="violet" onClick={onClick} hasArrow={false} filtervalue={filterValue} thematic={thematic} className={clsx(
        //     'flex flex-row text-violet-light text-sm px-2.5 py-2 bg-opacity-0',
        //     className,
        // )} {...props}>
        //     <>
        //         {thematic && <p className={`size-[23px] rounded-full bg-${thematicsColors[thematic]}`}>
        //         </p>
        //         }
        //         {!checked && (<label htmlFor={filterValue} className='checkbox'>
        //             {filterName}
        //         </label>)}
        //         {checked && <label htmlFor={filterValue} className='checkbox checked-label'>
        //             {filterName}
        //         </label>}
        //         <input
        //             type="checkbox"
        //             value={filterValue}
        //             name={filterValue}
        //             onChange={onClick}
        //             id={filterValue}
        //             className='absolute opacity-0'
        //             checked={checked}
        //         />
        //     </>
        // </Button>
    );
};

export default Pagination;
