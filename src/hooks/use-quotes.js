'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchQuotes, fetchQuote } from '@/lib/api/quotes';

export function useQuotes(filters = {}) {
  return useQuery({
    queryKey: ['quotes', filters],
    queryFn: () => fetchQuotes(filters),
  });
}

export function useQuote(biId) {
  return useQuery({
    queryKey: ['quote', biId],
    queryFn: () => fetchQuote(biId),
    enabled: !!biId,
  });
}
