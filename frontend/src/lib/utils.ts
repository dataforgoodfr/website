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

export function generateMetadataFromSeo(seo: {
  title?: string;
  description?: string;
  canonical_url?: string;
  og_url?: string;
  og_title?: string;
  og_description?: string;
  og_image?: { url?: string } | null;
}) {
  if (!seo) return {};

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.canonical_url,
    },
    openGraph: {
      url: seo.og_url,
      title: seo.og_title,
      description: seo.og_description,
      images: seo.og_image ? [{ url: seo.og_image.url }] : [],
    },
  };
}
