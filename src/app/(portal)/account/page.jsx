'use client';

import { useAuthStore } from '@/stores/auth-store';
import { DetailCard } from '@/components/detail/detail-card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { User, Mail, Building2, MapPin, Shield, Bell } from 'lucide-react';

export default function AccountPage() {
  const { user } = useAuthStore();
  const initials = user ? (user.firstName?.[0] || '') + (user.lastName?.[0] || '') : 'U';

  const roleLabels = {
    distributor: 'Distributor',
    sales_rep: 'Sales Representative',
    hospital_group: 'Hospital Group',
    medical_professional: 'Medical Professional',
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-black" style={{ fontFamily: 'var(--font-heading)' }}>My Account</h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-lg border border-[#D4D4D4] bg-white p-6 shadow-sm text-center">
          <Avatar className="mx-auto h-20 w-20">
            <AvatarFallback className="bg-[#FFB500] text-2xl font-bold text-black" style={{ fontFamily: 'var(--font-heading)' }}>{initials}</AvatarFallback>
          </Avatar>
          <h2 className="mt-4 text-xl font-bold text-black" style={{ fontFamily: 'var(--font-heading)' }}>{user?.name}</h2>
          <p className="text-sm text-[#545857]">{roleLabels[user?.role] || user?.role}</p>
          <p className="mt-1 text-sm text-[#4C7D7A]">{user?.organization}</p>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <DetailCard title="Profile Information">
            <div className="space-y-4">
              <div className="flex items-center gap-3"><User className="h-5 w-5 text-[#545857]" /><div><p className="text-xs font-bold uppercase text-[#545857]" style={{ fontFamily: 'var(--font-heading)' }}>Full Name</p><p className="text-sm text-black">{user?.name}</p></div></div>
              <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-[#545857]" /><div><p className="text-xs font-bold uppercase text-[#545857]" style={{ fontFamily: 'var(--font-heading)' }}>Email</p><p className="text-sm text-black">{user?.email}</p></div></div>
              <div className="flex items-center gap-3"><Building2 className="h-5 w-5 text-[#545857]" /><div><p className="text-xs font-bold uppercase text-[#545857]" style={{ fontFamily: 'var(--font-heading)' }}>Organization</p><p className="text-sm text-black">{user?.organization}</p></div></div>
              <div className="flex items-center gap-3"><Shield className="h-5 w-5 text-[#545857]" /><div><p className="text-xs font-bold uppercase text-[#545857]" style={{ fontFamily: 'var(--font-heading)' }}>Role</p><p className="text-sm text-black">{roleLabels[user?.role] || user?.role}</p></div></div>
              {user?.territory && <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-[#545857]" /><div><p className="text-xs font-bold uppercase text-[#545857]" style={{ fontFamily: 'var(--font-heading)' }}>Territory</p><p className="text-sm text-black">{user?.territory}</p></div></div>}
            </div>
          </DetailCard>

          {user?.shipToLocations && (
            <DetailCard title="Ship-To Locations">
              <div className="space-y-3">
                {user.shipToLocations.map((loc) => (
                  <div key={loc.id} className="flex items-start gap-3 rounded-md border border-[#F5F5F5] p-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#FFB500]" />
                    <div><p className="text-sm font-semibold text-black" style={{ fontFamily: 'var(--font-heading)' }}>{loc.name}</p><p className="text-xs text-[#545857]">{loc.address}</p></div>
                  </div>
                ))}
              </div>
            </DetailCard>
          )}

          {user?.locations && (
            <DetailCard title="Facility Locations">
              <div className="space-y-3">
                {user.locations.map((loc) => (
                  <div key={loc.id} className="flex items-start gap-3 rounded-md border border-[#F5F5F5] p-3">
                    <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-[#FFB500]" />
                    <div><p className="text-sm font-semibold text-black" style={{ fontFamily: 'var(--font-heading)' }}>{loc.name}</p><p className="text-xs text-[#545857] capitalize">{loc.type}</p></div>
                  </div>
                ))}
              </div>
            </DetailCard>
          )}

          <DetailCard title="Notification Preferences">
            <div className="space-y-3">
              {['Order status updates', 'Shipment notifications', 'Invoice reminders', 'Product updates', 'Training announcements'].map((pref) => (
                <div key={pref} className="flex items-center justify-between">
                  <div className="flex items-center gap-2"><Bell className="h-4 w-4 text-[#545857]" /><span className="text-sm text-black">{pref}</span></div>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" defaultChecked className="peer sr-only" />
                    <div className="h-6 w-11 rounded-full bg-[#D4D4D4] after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:bg-[#FFB500] peer-checked:after:translate-x-full" />
                  </label>
                </div>
              ))}
            </div>
          </DetailCard>
        </div>
      </div>
    </div>
  );
}
