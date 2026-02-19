'use client';

import { StatusBadge } from '@/components/shared/status-badge';
import { formatDate, formatCurrency } from '@/lib/utils/format';
import Link from 'next/link';

export function RecentActivity({ orders = [] }) {
  return (
    <div className="rounded-lg border border-[#D4D4D4] bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-bold text-black" style={{ fontFamily: 'var(--font-heading)' }}>Recent Orders</h3>
        <Link href="/orders" className="text-sm text-[#4C7D7A] transition-colors hover:text-black" style={{ fontFamily: 'var(--font-heading)' }}>
          View All
        </Link>
      </div>
      <div className="space-y-3">
        {orders.slice(0, 5).map((order) => (
          <Link
            key={order.biId}
            href={'/orders/' + order.biId}
            className="flex items-center justify-between rounded-md p-3 transition-colors hover:bg-[#FFF8E1]"
          >
            <div>
              <p className="text-sm font-semibold text-black" style={{ fontFamily: 'var(--font-heading)' }}>{order.biId}</p>
              <p className="text-xs text-[#545857]">{formatDate(order.biCreatedAt)}</p>
            </div>
            <div className="flex items-center gap-3">
              <StatusBadge status={order.status} />
              <span className="text-sm font-semibold text-black" style={{ fontFamily: 'var(--font-heading)' }}>
                {formatCurrency(order.pricing?.total)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
