import type { HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { thematicsColors, ThematicValues } from '@/lib/utils';
import { IFilter } from '@/lib/types';

export type FilterProps = HTMLAttributes<HTMLLabelElement> & {
    filterName: string;
    filterValue: string;
    filterType: IFilter['filterType'];
    thematic?: ThematicValues;
    checked: boolean;
    onClick: (e: any) => void;
    className?: string;
    /** @default 'dark' */
    variant?: 'dark' | 'light';
};

const variantStyles: Record<'dark' | 'light', { base: string; checked: string }> = {
  dark: {
    base: 'text-violet-light bg-opacity-0 border-building',
    checked: 'bg-building',
  },
  light: {
    base: 'text-building bg-white border-building',
    checked: 'bg-building text-white border-building',
  },
};

const Filter = ({
    filterName,
    filterValue,
    filterType,
    thematic,
    checked,
    onClick,
    className = '',
    variant = 'dark',
    ...props
}: FilterProps) => {
    const handleClick = (e: any) => {
        onClick?.(e.target);
    };

    if (!filterName) {
        return null;
    }

    const vs = variantStyles[variant];

    return (
        <label htmlFor={filterValue} className={clsx(
            'filter-pill group flex flex-row text-xs px-2.5 py-2 border-2 items-center transition-colors',
            checked ? vs.checked : vs.base,
            variant === 'dark' && 'hover:bg-building hover:text-white',
            variant === 'light' && !checked && 'hover:bg-building hover:text-white',
            className,
        )} {...props}>
            <>
                {thematic && <span className={`size-[23px] mr-2 rounded-full bg-${thematicsColors[thematic]}`} />
                }
                <span className={clsx('checkbox', checked && 'checked-label', variant === 'light' && '[&::after]:!border-building')}>
                    {filterName}
                </span>
                <input
                    type="checkbox"
                    value={filterValue}
                    name={filterValue}
                    onChange={handleClick}
                    id={filterValue}
                    className='absolute opacity-0'
                    checked={checked}
                    data-type={filterType}
                />
            </>
        </label>
    );
};

export default Filter;