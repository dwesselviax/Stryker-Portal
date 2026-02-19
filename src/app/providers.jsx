'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { useThemeStore } from '@/stores/theme-store';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

function ThemeInitializer() {
  const initializeTheme = useThemeStore((s) => s.initializeTheme);
  useEffect(() => { initializeTheme(); }, [initializeTheme]);
  return null;
}

export function Providers({ children }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000,
        retry: 1,
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter>
        <TooltipProvider>
          <ThemeInitializer />
          {children}
          <Toaster position="top-right" />
        </TooltipProvider>
      </NuqsAdapter>
    </QueryClientProvider>
  );
}
