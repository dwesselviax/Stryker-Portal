'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { StatusBadge } from '@/components/shared/status-badge';
import { DateDisplay } from '@/components/shared/date-display';

export function DetailHeader({ id, name, status, createdAt, completedAt, backHref }) {
  const router = useRouter();

  return (
    <div className="mb-6">
      <button
        onClick={() => router.push(backHref || '/dashboard')}
        className="mb-4 flex items-center gap-1 text-sm text-[#4C7D7A] transition-colors hover:text-black"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </button>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-black" style={{ fontFamily: 'var(--font-heading)' }}>{id}</h1>
            <StatusBadge status={status} />
          </div>
          {name && <p className="mt-1 text-sm text-[#545857]">{name}</p>}
        </div>
        <div className="text-right text-sm text-[#545857]">
          <p>Created: <DateDisplay date={createdAt} /></p>
          {completedAt && <p>Completed: <DateDisplay date={completedAt} /></p>}
        </div>
      </div>
    </div>
  );
}
