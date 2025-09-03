import type { HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { Button, ButtonProps } from '@/components';

export type FilterProps = HTMLAttributes<HTMLDivElement> & {
    filterName: string;
    thematicColor: string;
    checkboxValue: string;
    onChangeCheckbox: (e: { target: { checked: boolean; value: React.SetStateAction<string>; }; }) => void;
    className?: string;
};

const Filter = ({
    filterName,
    thematicColor,
    checkboxValue,
    onChangeCheckbox,
    className = '',
    ...props
}: FilterProps) => {
    if (!filterName) {
        return null;
    }

    return (
        <Button variant="tertiary" color={'violet' as ButtonProps['color']} hasArrow={false} htmlFor={checkboxValue} className={clsx(
            'flex flex-row text-violet-light text-sm px-2.5 py-2 bg-opacity-0',
            className,
        )} {...props}>
            <>
                {thematicColor && <p className={`size-[23px] rounded-full bg-${thematicColor}`}>
                </p>
                }
                <label className='cursor-pointer after:align-middle after:cursor-pointer after:ml-4 after:inline-block after:h-[17px] after:w-[17px] after:border-2 after:border-violet-light group-hover:after:border-0'>
                    {filterName}
                </label>
                <input
                    type="checkbox"
                    value={checkboxValue}
                    name="filter"
                    onChange={onChangeCheckbox}
                    id={checkboxValue}
                    className='hidden'
                // checked={item.checked}
                />
            </>
        </Button>
    );
};

export default Filter;
