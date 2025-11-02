import type { HTMLAttributes, MouseEventHandler, PropsWithChildren } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { Button as ButtonUI } from '@/components/ui/button';
import { ArrowIcon } from '@/components';

type Variant = 'primary' | 'secondary' | 'tertiary';
type Color = 'black' | 'white' | 'violet';

type ButtonChildrenProps = {
  variant: Variant;
  color: Color;
  hasArrow: boolean;
} & PropsWithChildren;

export type ButtonProps = HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> & {
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  variant?: Variant;
  color?: Color;
  isBlank?: boolean;
  type?: 'button' | 'submit';
  disabled?: boolean;
  hasArrow?: boolean;
} & PropsWithChildren;


const ButtonChildren = ({ children, hasArrow, variant, color }: ButtonChildrenProps) => {
  const variantsChildrenClasses: Partial<Record<Variant, {base: string, colors: Record<Color, string>}>> = {
    primary: {
      base: 'relative px-4 py-2.5',
      colors: {
        black: 'bg-black text-white',
        white: 'bg-white text-black',
        violet: 'bg-building text-white',
      },
    },
  };

  const classElement = clsx(
    'flex items-center gap-5 text-sm font-black uppercase tracking-widest',
    variantsChildrenClasses[variant]?.base,
    variantsChildrenClasses[variant]?.colors[color]
  );

  return (
    <span className={classElement}>
      {children}
      {hasArrow && <ArrowIcon />}
    </span>
  );
};

const Button: React.FC<ButtonProps> = ({
  href,
  onClick,
  children,
  className,
  variant = 'primary',
  color = 'black',
  type = 'button',
  isBlank,
  disabled,
  hasArrow = true,
  ...props
}) => {
  const variantsParentClasses: Record<Variant, {base: string, colors: Record<Color, string>}> = {
    primary: {
      base: 'relative z-1 before:absolute before:content-[""] before:-z-1 before:w-full before:h-full before:top-1 before:left-1 hover:before:top-0 hover:before:left-0 focus:before:top-0 focus:before:left-0 before:transition-base',
      colors: {
        black: 'before:bg-building',
        white: 'before:bg-building',
        violet: 'before:bg-black',
      },
    },
    secondary: {
      base: 'px-4 py-2.5',
      colors: {
        black: 'bg-black text-white hover:bg-white hover:text-black',
        white: 'bg-white text-black hover:bg-black hover:text-white',
        violet: 'bg-building text-white hover:bg-black hover:text-white',
      },
    },
    tertiary: {
      base: 'px-4 py-2.5 bg-white text-black',
      colors: {
        black: 'border border-black hover:bg-black hover:text-white',
        white: 'border border-white hover:bg-black hover:text-white',
        violet: 'border-[2px] border-building hover:bg-building hover:text-white',
      },
    },
  };

  const classElement = clsx(
    'inline-flex transition-colors',
    variantsParentClasses[variant].base,
    variantsParentClasses[variant].colors[color],
    className,
  );

  return (
    <>
      {href
        ? (
            <Link
              href={href}
              className={classElement}
              {...props}
              target={isBlank ? '_blank' : undefined}
              rel={isBlank ? 'noreferrer' : undefined}
            >
              <ButtonChildren variant={variant} color={color} hasArrow={hasArrow}>
                {children}
              </ButtonChildren>
            </Link>
          )
        : (
            <ButtonUI
              onClick={onClick}
              type={type}
              disabled={disabled}
              className={classElement}
              {...props}
            >
              <ButtonChildren variant={variant} color={color} hasArrow={hasArrow}>
                {children}
              </ButtonChildren>
            </ButtonUI>
          )}
    </>
  );
};

export default Button;
