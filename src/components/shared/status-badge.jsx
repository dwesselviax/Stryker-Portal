'use client';

import { cn } from '@/lib/utils';
import { getStatusColor } from '@/lib/utils/format';

const colorMap = {
  success: 'bg-[#E8F5E9] text-[#2E7D32]',
  warning: 'bg-[#FFF8E1] text-[#F9A825]',
  error: 'bg-[#FFEBEE] text-[#C62828]',
  info: 'bg-[#E3F2FD] text-[#1565C0]',
  neutral: 'bg-[#F5F5F5] text-[#545857]',
};

export function StatusBadge({ status, className }) {
  const color = getStatusColor(status);
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider',
        colorMap[color] || colorMap.neutral,
        className
      )}
      style={{ fontFamily: 'var(--font-heading)' }}
    >
      {status}
    </span>
  );
}
