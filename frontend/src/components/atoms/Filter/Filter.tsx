import type { HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { thematicsColors, ThematicValues } from '@/lib/utils';

export type FilterProps = HTMLAttributes<HTMLLabelElement> & {
    filterName: string;
    filterValue: string;
    thematic?: ThematicValues;
    checked: any;
    onClick: (e: any) => void;
    className?: string;
};



const Filter = ({
    filterName,
    filterValue,
    thematic,
    checked,
    onClick,
    className = '',
    ...props
}: FilterProps) => {
    const handleClick = (e: any) => {
        onClick?.(e.target);
    };

    if (!filterName) {
        return null;
    }

    return (
        <label htmlFor={filterValue} className={clsx(
            'flex flex-row text-violet-light hover:bg-building text-sm px-2.5 py-2 bg-opacity-0 border-2 items-center border-building ',
            className,
        )} {...props}>
            <>
                {thematic && <span className={`size-[23px] mr-2 rounded-full bg-${thematicsColors[thematic]}`} />
                }
                <span className={clsx('checkbox', checked && 'checked-label')}>
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
                    data-thematic={thematic}
                />
            </>
        </label>
    );
};

export default Filter;