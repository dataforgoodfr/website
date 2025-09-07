import type { HTMLAttributes } from 'react';
import { Button, ButtonProps } from '@/components';
import { clsx } from 'clsx';

export type SearchInputProps = HTMLAttributes<HTMLDivElement> & {
    searchFilter?: string;
    handleChange: any;
    className?: string;
};

const SearchInput = ({
    searchFilter,
    handleChange,
    className = '',
    ...props
}: SearchInputProps) => {
    return (
        <div className={clsx(
                    'flex flex-row max-h-[50px] align-start',
                    className,
                )} {...props}>
                <input
                    type="search"
                    placeholder='Rechercher'
                    className='p-4 bg-building text-white placeholder:text-white search-placeholder remove-outline'
                    name='search'
                    value={searchFilter}
                    onChange={(e) => handleChange(e.target)}
                />
                <Button type="submit" variant="secondary" color={'violet' as ButtonProps['color']} className='hover:bg-building'></Button>
        </div>
    );
};

export default SearchInput;
