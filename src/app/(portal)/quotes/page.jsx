'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQuotes } from '@/hooks/use-quotes';
import { DataTable } from '@/components/data/data-table';
import { FiltersBar, FilterSelect } from '@/components/data/filters-bar';
import { StatusBadge } from '@/components/shared/status-badge';
import { formatCurrency, formatDate } from '@/lib/utils/format';
import { TableSkeleton } from '@/components/shared/loading-skeleton';
import { Plus } from 'lucide-react';

const STATUS_OPTIONS = [
  { value: 'Draft', label: 'Draft' },
  { value: 'Submitted', label: 'Submitted' },
  { value: 'Approved', label: 'Approved' },
  { value: 'Rejected', label: 'Rejected' },
  { value: 'Converted', label: 'Converted' },
];

const COLUMNS = [
  { key: 'biId', label: 'Quote ID', sortable: true },
  { key: 'biName', label: 'Description', sortable: true },
  { key: 'customerName', label: 'Customer', sortable: true },
  { key: 'status', label: 'Status', sortable: true, render: (val) => <StatusBadge status={val} /> },
  { key: 'biCreatedAt', label: 'Created', sortable: true, render: (val) => formatDate(val) },
  { key: 'validUntil', label: 'Valid Until', sortable: true, render: (val) => formatDate(val) },
  { key: 'total', label: 'Total', sortable: true, render: (_, row) => formatCurrency(row.pricing?.total) },
];

export default function QuotesPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState(null);
  const { data: quotes, isLoading } = useQuotes({ search, status: statusFilter });
  const router = useRouter();

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-black" style={{ fontFamily: 'var(--font-heading)' }}>Quotes</h1>
          <p className="mt-1 text-sm text-[#545857]">Create and manage quotes</p>
        </div>
        <button className="flex items-center gap-2 rounded-md bg-[#4C7D7A] px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#3D6664]" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '0.5px' }}>
          <Plus className="h-4 w-4" /> New Quote
        </button>
      </div>

      <FiltersBar search={search} onSearchChange={setSearch}>
        <FilterSelect label="All Statuses" value={statusFilter} onChange={setStatusFilter} options={STATUS_OPTIONS} />
      </FiltersBar>

      {isLoading ? <TableSkeleton rows={8} columns={7} /> : (
        <DataTable columns={COLUMNS} data={quotes || []} onRowClick={(row) => router.push('/quotes/' + row.biId)} />
      )}
    </div>
  );
}
