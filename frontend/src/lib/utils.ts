import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImage(image: any) {
  // ? in v5 the image path is prefixed with /uploads
  return image?.url ? `${image.url.replace('/uploads', '')}` : '';
}

export const thematicsColors = {
  social: 'resistance',
  democracy: 'blue',
  climate: 'alive'
} as const;

export type ThematicValues = keyof typeof thematicsColors;
