'use client';

import { useSubscription } from '@/hooks/use-subscriptions';
import { DetailHeader } from '@/components/detail/detail-header';
import { DetailCard } from '@/components/detail/detail-card';
import { CardSkeleton } from '@/components/shared/loading-skeleton';
import { formatDate } from '@/lib/utils/format';
import { Pause, Play, X } from 'lucide-react';

export default function SubscriptionDetailPage({ biId }) {
  const { data: sub, isLoading } = useSubscription(biId);

  if (isLoading) return <div className="space-y-6"><CardSkeleton /><CardSkeleton /></div>;
  if (!sub) return <div className="py-12 text-center text-[#545857]">Subscription not found.</div>;

  return (
    <div className="space-y-6">
      <DetailHeader id={sub.biId} name={sub.biName} status={sub.status} createdAt={sub.startDate} backHref="/subscriptions" />

      <div className="flex gap-3">
        {sub.status === 'Active' && (
          <button className="flex items-center gap-2 rounded-md border border-[#F9A825] px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#F9A825] transition-colors hover:bg-[#FFF8E1]" style={{ fontFamily: 'var(--font-heading)' }}>
            <Pause className="h-4 w-4" /> Pause
          </button>
        )}
        {sub.status === 'Paused' && (
          <button className="flex items-center gap-2 rounded-md bg-[#4C7D7A] px-4 py-2 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#3D6664]" style={{ fontFamily: 'var(--font-heading)' }}>
            <Play className="h-4 w-4" /> Resume
          </button>
        )}
        {sub.status !== 'Cancelled' && (
          <button className="flex items-center gap-2 rounded-md border border-[#C62828] px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#C62828] transition-colors hover:bg-[#FFEBEE]" style={{ fontFamily: 'var(--font-heading)' }}>
            <X className="h-4 w-4" /> Cancel
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <DetailCard title="Subscription Details">
          <div className="space-y-3">
            <div className="flex justify-between"><span className="text-sm text-[#545857]">Product</span><span className="text-sm font-semibold text-black">{sub.productName || sub.biName}</span></div>
            <div className="flex justify-between"><span className="text-sm text-[#545857]">Frequency</span><span className="text-sm font-semibold text-black">{sub.frequency}</span></div>
            <div className="flex justify-between"><span className="text-sm text-[#545857]">Quantity</span><span className="text-sm font-semibold text-black">{sub.quantity}</span></div>
            <div className="flex justify-between"><span className="text-sm text-[#545857]">Start Date</span><span className="text-sm font-semibold text-black">{formatDate(sub.startDate)}</span></div>
            <div className="flex justify-between"><span className="text-sm text-[#545857]">Next Delivery</span><span className="text-sm font-semibold text-black">{formatDate(sub.nextDelivery)}</span></div>
          </div>
        </DetailCard>

        <DetailCard title="Delivery Address">
          <p className="text-sm text-black">{sub.deliveryAddress || '100 Memorial Drive, Chicago, IL 60601'}</p>
        </DetailCard>
      </div>
    </div>
  );
}
