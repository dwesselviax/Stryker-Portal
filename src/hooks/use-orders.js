'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchOrders, fetchOrder } from '@/lib/api/orders';

export function useOrders(filters = {}) {
  return useQuery({
    queryKey: ['orders', filters],
    queryFn: () => fetchOrders(filters),
  });
}

export function useOrder(biId) {
  return useQuery({
    queryKey: ['order', biId],
    queryFn: () => fetchOrder(biId),
    enabled: !!biId,
  });
}
