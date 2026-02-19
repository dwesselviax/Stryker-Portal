'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchProducts, fetchProduct } from '@/lib/api/products';

export function useProducts(filters = {}) {
  return useQuery({
    queryKey: ['products', filters],
    queryFn: () => fetchProducts(filters),
  });
}

export function useProduct(maId) {
  return useQuery({
    queryKey: ['product', maId],
    queryFn: () => fetchProduct(maId),
    enabled: !!maId,
  });
}
