import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export type TOCItem = {
  id: string;
  text: string;
  level: number;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getStrapiData<T>(url: string) {
  const res = await fetch(`${process.env.STRAPI_URL}/api/${url}`, {
    next: { revalidate: 0 },
  });
  const jsonRes = await res.json();
  return jsonRes?.data as T['attributes'];
}

export function getImage(image: any) {
  // ? in v5 the image path is prefixed with /uploads
  return image?.url ? `${image.url.replace('/uploads', '')}` : '';
}
