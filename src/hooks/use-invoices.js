'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchInvoices, fetchInvoice } from '@/lib/api/invoices';

export function useInvoices(filters = {}) {
  return useQuery({
    queryKey: ['invoices', filters],
    queryFn: () => fetchInvoices(filters),
  });
}

export function useInvoice(biId) {
  return useQuery({
    queryKey: ['invoice', biId],
    queryFn: () => fetchInvoice(biId),
    enabled: !!biId,
  });
}
