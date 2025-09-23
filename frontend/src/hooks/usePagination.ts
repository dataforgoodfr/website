'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

type UsePaginationResult = {
  currentPage: number;
  handlePageChange: (page: number) => void;
};

export function usePagination(defaultPage: number = 1): UsePaginationResult {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = typeof searchParams.get('page') === 'string'
    ? Number(searchParams.get('page'))
    : defaultPage;

  const handlePageChange = useCallback((page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(page));
    router.push(`?${params.toString()}`, { scroll: false });
  }, [router, searchParams]);

  return { currentPage, handlePageChange };
}
