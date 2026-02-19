'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchSubscriptions, fetchSubscription } from '@/lib/api/subscriptions';

export function useSubscriptions(filters = {}) {
  return useQuery({
    queryKey: ['subscriptions', filters],
    queryFn: () => fetchSubscriptions(filters),
  });
}

export function useSubscription(biId) {
  return useQuery({
    queryKey: ['subscription', biId],
    queryFn: () => fetchSubscription(biId),
    enabled: !!biId,
  });
}
