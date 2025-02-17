'use client';

import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import { useFilterStore } from '../stores/useFilterStore';

export default function Pagination() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { page, setPage } = useFilterStore();

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', newPage.toString());
    router.push(`/?${params.toString()}`);
    setPage(newPage);
  };

  return (
    <div className="flex justify-center gap-4 mt-6">
      <Button
        variant="outline"
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
      >
        Previous
      </Button>
      <span className="flex items-center px-4 font-medium">Page {page}</span>
      <Button
        variant="outline"
        onClick={() => handlePageChange(page + 1)}
      >
        Next
      </Button>
    </div>
  );
}