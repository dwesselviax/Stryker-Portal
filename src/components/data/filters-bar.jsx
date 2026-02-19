'use client';

import { Search, X } from 'lucide-react';

export function FiltersBar({ search, onSearchChange, filters = [], children }) {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-3">
      <div className="relative flex-1 min-w-[200px] max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#545857]" />
        <input
          type="text"
          placeholder="Search..."
          value={search || ''}
          onChange={(e) => onSearchChange?.(e.target.value)}
          className="h-10 w-full rounded-md border border-[#D4D4D4] bg-white pl-9 pr-9 text-sm text-black placeholder:text-[#D4D4D4] focus:border-[#4C7D7A] focus:outline-none focus:ring-1 focus:ring-[#4C7D7A]"
          style={{ fontFamily: 'var(--font-body)' }}
        />
        {search && (
          <button onClick={() => onSearchChange?.('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#545857] hover:text-black">
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      {children}
    </div>
  );
}

export function FilterSelect({ label, value, onChange, options }) {
  return (
    <select
      value={value || ''}
      onChange={(e) => onChange?.(e.target.value || null)}
      className="h-10 rounded-md border border-[#D4D4D4] bg-white px-3 text-sm text-black focus:border-[#4C7D7A] focus:outline-none focus:ring-1 focus:ring-[#4C7D7A]"
      style={{ fontFamily: 'var(--font-heading)' }}
    >
      <option value="">{label}</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  );
}
