'use client';

import { useState, useEffect } from 'react';
import { DetailHeader } from '@/components/detail/detail-header';
import { DetailCard } from '@/components/detail/detail-card';
import { Timeline } from '@/components/detail/timeline';
import { CardSkeleton } from '@/components/shared/loading-skeleton';
import { formatDate } from '@/lib/utils/format';
import { Wrench, Package } from 'lucide-react';

function formatLocation(loc) {
  if (!loc) return '—';
  if (typeof loc === 'string') return loc;
  return [loc.facility, loc.department, loc.room ? `Room ${loc.room}` : null].filter(Boolean).join(' — ');
}

export default function AssetDetailPage({ assetId }) {
  const [asset, setAsset] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    import('@/lib/mock-data/assets').then((mod) => {
      setAsset((mod.assets || []).find((a) => a.id === assetId) || null);
      setLoading(false);
    });
  }, [assetId]);

  if (loading) return <div className="space-y-6"><CardSkeleton /><CardSkeleton /></div>;
  if (!asset) return <div className="py-12 text-center text-[#545857]">Asset not found.</div>;

  const timelineEvents = (asset.transactionHistory || asset.history || []).map((e) => ({
    date: e.date,
    title: e.type + (e.reference ? ` (${e.reference})` : ''),
    description: e.notes,
  }));

  return (
    <div className="space-y-6">
      <DetailHeader id={asset.id} name={asset.productName} status={asset.status} createdAt={asset.installDate} backHref="/assets" />

      <div className="flex gap-3">
        <button className="flex items-center gap-2 rounded-md bg-[#4C7D7A] px-4 py-2 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#3D6664]" style={{ fontFamily: 'var(--font-heading)' }}>
          <Wrench className="h-4 w-4" /> Request Service
        </button>
        <button className="flex items-center gap-2 rounded-md border border-[#4C7D7A] px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#4C7D7A] transition-colors hover:bg-[#F0F5F5]" style={{ fontFamily: 'var(--font-heading)' }}>
          <Package className="h-4 w-4" /> View Compatible Parts
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <DetailCard title="Asset Details">
          <div className="space-y-3">
            <div className="flex justify-between"><span className="text-sm text-[#545857]">Serial Number</span><span className="text-sm font-semibold text-black">{asset.serialNumber}</span></div>
            <div className="flex justify-between"><span className="text-sm text-[#545857]">Model</span><span className="text-sm font-semibold text-black">{asset.model || asset.productName}</span></div>
            <div className="flex justify-between"><span className="text-sm text-[#545857]">Location</span><span className="text-sm font-semibold text-black">{formatLocation(asset.location)}</span></div>
            <div className="flex justify-between"><span className="text-sm text-[#545857]">Condition</span><span className="text-sm font-semibold text-black">{asset.condition}</span></div>
            <div className="flex justify-between"><span className="text-sm text-[#545857]">Install Date</span><span className="text-sm font-semibold text-black">{formatDate(asset.installDate)}</span></div>
            <div className="flex justify-between"><span className="text-sm text-[#545857]">Warranty</span><span className="text-sm font-semibold text-black">{asset.warranty?.status || asset.warrantyStatus || '—'}</span></div>
            {(asset.warranty?.endDate || asset.warrantyExpiry) && <div className="flex justify-between"><span className="text-sm text-[#545857]">Warranty Expiry</span><span className="text-sm font-semibold text-black">{formatDate(asset.warranty?.endDate || asset.warrantyExpiry)}</span></div>}
            {asset.warranty?.type && <div className="flex justify-between"><span className="text-sm text-[#545857]">Warranty Type</span><span className="text-sm font-semibold text-black">{asset.warranty.type}</span></div>}
            {asset.softwareVersion && <div className="flex justify-between"><span className="text-sm text-[#545857]">Software</span><span className="text-sm font-semibold text-black">{asset.softwareVersion}</span></div>}
            {asset.firmware && <div className="flex justify-between"><span className="text-sm text-[#545857]">Firmware</span><span className="text-sm font-semibold text-black">{asset.firmware}</span></div>}
          </div>
        </DetailCard>

        {asset.maintenanceSchedule && (
          <DetailCard title="Maintenance Schedule">
            <div className="space-y-3">
              <div className="flex justify-between"><span className="text-sm text-[#545857]">Frequency</span><span className="text-sm font-semibold text-black">{asset.maintenanceSchedule.frequency}</span></div>
              <div className="flex justify-between"><span className="text-sm text-[#545857]">Last Service</span><span className="text-sm font-semibold text-black">{asset.maintenanceSchedule.lastService ? formatDate(asset.maintenanceSchedule.lastService) : 'N/A'}</span></div>
              <div className="flex justify-between"><span className="text-sm text-[#545857]">Next Service</span><span className="text-sm font-semibold text-black">{asset.maintenanceSchedule.nextService ? formatDate(asset.maintenanceSchedule.nextService) : 'N/A'}</span></div>
            </div>
          </DetailCard>
        )}
      </div>

      {asset.warranty?.coverageDetails && (
        <DetailCard title="Warranty Coverage">
          <p className="text-sm text-black">{asset.warranty.coverageDetails}</p>
        </DetailCard>
      )}

      {timelineEvents.length > 0 && <Timeline events={timelineEvents} />}

      {asset.notes && (
        <DetailCard title="Notes">
          <p className="text-sm text-black">{asset.notes}</p>
        </DetailCard>
      )}
    </div>
  );
}
