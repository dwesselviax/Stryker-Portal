'use client';

import { useState, useEffect } from 'react';
import { DataTable } from '@/components/data/data-table';
import { FiltersBar, FilterSelect } from '@/components/data/filters-bar';
import { StatusBadge } from '@/components/shared/status-badge';
import { formatDate } from '@/lib/utils/format';
import { TableSkeleton } from '@/components/shared/loading-skeleton';
import { Plus } from 'lucide-react';

const STATUS_OPTIONS = [
  { value: 'Submitted', label: 'Submitted' },
  { value: 'Approved', label: 'Approved' },
  { value: 'In Transit', label: 'In Transit' },
  { value: 'Processed', label: 'Processed' },
];

const COLUMNS = [
  { key: 'id', label: 'RMA ID', sortable: true },
  { key: 'productName', label: 'Product', sortable: true },
  { key: 'reason', label: 'Reason', sortable: true },
  { key: 'orderId', label: 'Order Ref', sortable: true },
  { key: 'status', label: 'Status', sortable: true, render: (val) => <StatusBadge status={val} /> },
  { key: 'submittedDate', label: 'Submitted', sortable: true, render: (val) => formatDate(val) },
];

export default function ReturnsPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    import('@/lib/mock-data/returns').then((mod) => {
      let result = [...(mod.returns || [])];
      if (statusFilter) result = result.filter((r) => r.status === statusFilter);
      if (search) {
        const s = search.toLowerCase();
        result = result.filter((r) => r.id?.toLowerCase().includes(s) || r.productName?.toLowerCase().includes(s));
      }
      setData(result);
      setLoading(false);
    });
  }, [search, statusFilter]);

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-black" style={{ fontFamily: 'var(--font-heading)' }}>Returns & RMA</h1>
          <p className="mt-1 text-sm text-[#545857]">Submit and track return merchandise authorizations</p>
        </div>
        <button className="flex items-center gap-2 rounded-md bg-[#4C7D7A] px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#3D6664]" style={{ fontFamily: 'var(--font-heading)' }}>
          <Plus className="h-4 w-4" /> New RMA Request
        </button>
      </div>

      <FiltersBar search={search} onSearchChange={setSearch}>
        <FilterSelect label="All Statuses" value={statusFilter} onChange={setStatusFilter} options={STATUS_OPTIONS} />
      </FiltersBar>

      {loading ? <TableSkeleton rows={5} columns={6} /> : <DataTable columns={COLUMNS} data={data} />}
    </div>
  );
}
