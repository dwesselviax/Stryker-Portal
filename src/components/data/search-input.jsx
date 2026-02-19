'use client';

import { Search } from 'lucide-react';

export function SearchInput({ value, onChange, placeholder = 'Search...' }) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#545857]" />
      <input
        type="text"
        placeholder={placeholder}
        value={value || ''}
        onChange={(e) => onChange?.(e.target.value)}
        className="h-10 w-full rounded-md border border-[#D4D4D4] bg-white pl-9 pr-4 text-sm text-black placeholder:text-[#D4D4D4] focus:border-[#4C7D7A] focus:outline-none focus:ring-1 focus:ring-[#4C7D7A]"
      />
    </div>
  );
}
