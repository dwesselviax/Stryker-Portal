'use client';

import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown } from 'lucide-react';

export function KpiCard({ title, value, trend, trendLabel, icon: Icon, className }) {
  const isPositive = trend > 0;

  return (
    <div className={cn('rounded-lg border border-[#D4D4D4] bg-white p-6 shadow-sm transition-shadow hover:shadow-md', className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-[#545857]" style={{ fontFamily: 'var(--font-heading)' }}>
            {title}
          </p>
          <p className="mt-2 text-3xl font-bold text-black" style={{ fontFamily: 'var(--font-heading)' }}>
            {value}
          </p>
          {trend != null && (
            <div className="mt-2 flex items-center gap-1">
              {isPositive ? (
                <TrendingUp className="h-4 w-4 text-[#2E7D32]" />
              ) : (
                <TrendingDown className="h-4 w-4 text-[#C62828]" />
              )}
              <span
                className={cn('text-sm font-semibold', isPositive ? 'text-[#2E7D32]' : 'text-[#C62828]')}
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {isPositive ? '+' : ''}{trend}%
              </span>
              {trendLabel && <span className="text-xs text-[#545857]">{trendLabel}</span>}
            </div>
          )}
        </div>
        {Icon && (
          <div className="rounded-lg bg-[#FFF8E1] p-3">
            <Icon className="h-6 w-6 text-[#FFB500]" />
          </div>
        )}
      </div>
    </div>
  );
}
