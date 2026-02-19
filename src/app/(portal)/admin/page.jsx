import Link from 'next/link';
import { Palette, Users, Settings } from 'lucide-react';

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-black" style={{ fontFamily: 'var(--font-heading)' }}>Admin</h1>
      <p className="text-sm text-[#545857]">Portal administration and settings</p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Link href="/admin/theme" className="rounded-lg border border-[#D4D4D4] bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-[#FFB500]">
          <Palette className="h-8 w-8 text-[#FFB500]" />
          <h3 className="mt-3 text-base font-bold text-black" style={{ fontFamily: 'var(--font-heading)' }}>Theme Settings</h3>
          <p className="mt-1 text-sm text-[#545857]">Customize colors, fonts, logos, and layout</p>
        </Link>
      </div>
    </div>
  );
}
