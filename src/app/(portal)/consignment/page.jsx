'use client';

import { useState, useEffect } from 'react';
import { DataTable } from '@/components/data/data-table';
import { FiltersBar, FilterSelect } from '@/components/data/filters-bar';
import { StatusBadge } from '@/components/shared/status-badge';
import { TableSkeleton } from '@/components/shared/loading-skeleton';
import { Warehouse, ArrowRightLeft, Package } from 'lucide-react';

const STATUS_OPTIONS = [
  { value: 'Available', label: 'Available' },
  { value: 'Reserved', label: 'Reserved' },
  { value: 'In Use', label: 'In Use' },
];

const COLUMNS = [
  { key: 'id', label: 'Item ID', sortable: true },
  { key: 'productName', label: 'Product', sortable: true },
  { key: 'serialNumber', label: 'Serial #', sortable: true },
  { key: 'batchNumber', label: 'Batch/Lot', sortable: true },
  { key: 'location', label: 'Location', sortable: true, render: (val) => val ? `${val.facilityName}, ${val.city}, ${val.state}` : '—' },
  { key: 'status', label: 'Status', sortable: true, render: (val) => <StatusBadge status={val} /> },
];

export default function ConsignmentPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    import('@/lib/mock-data/consignment').then((mod) => {
      let result = [...(mod.consignment || [])];
      if (statusFilter) result = result.filter((c) => c.status === statusFilter);
      if (search) {
        const s = search.toLowerCase();
        result = result.filter((c) => c.productName?.toLowerCase().includes(s) || c.serialNumber?.toLowerCase().includes(s) || c.id?.toLowerCase().includes(s));
      }
      setData(result);
      setLoading(false);
    });
  }, [search, statusFilter]);

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-black" style={{ fontFamily: 'var(--font-heading)' }}>Consignment Inventory</h1>
          <p className="mt-1 text-sm text-[#545857]">View and manage consignment items at your locations</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-md border border-[#4C7D7A] px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-[#4C7D7A] transition-colors hover:bg-[#F0F5F5]" style={{ fontFamily: 'var(--font-heading)' }}>
            <ArrowRightLeft className="h-4 w-4" /> Transfer
          </button>
          <button className="flex items-center gap-2 rounded-md bg-[#4C7D7A] px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#3D6664]" style={{ fontFamily: 'var(--font-heading)' }}>
            <Package className="h-4 w-4" /> Request New
          </button>
        </div>
      </div>

      <FiltersBar search={search} onSearchChange={setSearch}>
        <FilterSelect label="All Statuses" value={statusFilter} onChange={setStatusFilter} options={STATUS_OPTIONS} />
      </FiltersBar>

      {loading ? <TableSkeleton rows={8} columns={6} /> : <DataTable columns={COLUMNS} data={data} />}
    </div>
  );
}
