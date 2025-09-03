import type { HTMLAttributes } from 'react';
import { Button, ButtonProps } from '@/components';
import { clsx } from 'clsx';

export type SearchInputProps = HTMLAttributes<HTMLDivElement> & {
    onSubmit: (e: any) => void;
    className?: string;
};

const SearchInput = ({
    onSubmit,
    className = '',
    ...props
}: SearchInputProps) => {
    return (
        <div className={clsx(
                    'flex flex-row',
                    className,
                )} {...props}>
            <form className="flex flex-row" onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder='Search'
                    className='p-4 bg-building text-white placeholder:text-white search-placeholder remove-outline'
                    name='search'
                />
                <Button type="submit" variant="secondary" color={'violet' as ButtonProps['color']} className='hover:bg-building'></Button>
            </form>
        </div>
    );
};

export default SearchInput;
