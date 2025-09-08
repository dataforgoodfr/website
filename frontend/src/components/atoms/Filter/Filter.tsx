import type { HTMLAttributes } from 'react';
import type { ThematicValues } from '@/lib/utils';
import { clsx } from 'clsx';
import { Button } from '@/components';
import { thematicsColors } from '@/lib/utils';

export type FilterProps = HTMLAttributes<HTMLDivElement> & {
  filterName: string;
  filterValue: string;
  thematic?: ThematicValues;
  checked: any;
  onClick: any;
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
  if (!filterName) {
    return null;
  }

  return (
    <Button
      variant="tertiary"
      color="violet"
      onClick={onClick}
      hasArrow={false}
      filtervalue={filterValue}
      thematic={thematic}
      className={clsx(
        'flex flex-row text-violet-light text-sm px-2.5 py-2 bg-opacity-0',
        className,
      )}
      {...props}
    >
      <>
        {thematic && (
          <p className={`size-[23px] rounded-full bg-${thematicsColors[thematic]}`}>
          </p>
        )}
        {!checked && (
          <label htmlFor={filterValue} className="checkbox">
            {filterName}
          </label>
        )}
        {checked && (
          <label htmlFor={filterValue} className="checkbox checked-label">
            {filterName}
          </label>
        )}
        <input
          type="checkbox"
          value={filterValue}
          name={filterValue}
          onChange={onClick}
          id={filterValue}
          className="absolute opacity-0"
          checked={checked}
        />
      </>
    </Button>
  );
};

export default Filter;
