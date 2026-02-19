'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchCurrentUser } from '@/lib/api/user';

export function useCurrentUser() {
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: fetchCurrentUser,
  });
}
