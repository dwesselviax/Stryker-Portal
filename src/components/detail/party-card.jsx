import { Building2, User, MapPin } from 'lucide-react';

export function PartyCard({ role, name, address, type = 'organization' }) {
  const Icon = type === 'individual' ? User : Building2;
  return (
    <div className="rounded-lg border border-[#D4D4D4] bg-white p-4 shadow-sm">
      <div className="mb-2 flex items-center gap-2">
        <Icon className="h-4 w-4 text-[#FFB500]" />
        <span className="text-xs font-bold uppercase tracking-wider text-[#545857]" style={{ fontFamily: 'var(--font-heading)' }}>{role}</span>
      </div>
      <p className="text-sm font-semibold text-black" style={{ fontFamily: 'var(--font-heading)' }}>{name}</p>
      {address && (
        <div className="mt-1 flex items-start gap-1">
          <MapPin className="mt-0.5 h-3 w-3 shrink-0 text-[#545857]" />
          <p className="text-xs text-[#545857]">{address}</p>
        </div>
      )}
    </div>
  );
}
