'use client';

import { useState } from 'react';
import { useThemeStore } from '@/stores/theme-store';
import { DetailCard } from '@/components/detail/detail-card';
import { KpiCard } from '@/components/dashboard/kpi-card';
import { StatusBadge } from '@/components/shared/status-badge';
import { RotateCcw, Save, ShoppingCart, DollarSign } from 'lucide-react';

const FONT_OPTIONS = [
  { value: '"Nunito Sans", Arial, Helvetica, sans-serif', label: 'Nunito Sans (Default)' },
  { value: '"Inter", system-ui, sans-serif', label: 'Inter' },
  { value: '"Poppins", Arial, sans-serif', label: 'Poppins' },
  { value: 'system-ui, sans-serif', label: 'System UI' },
  { value: '"Arial", Helvetica, sans-serif', label: 'Arial' },
];

const BODY_FONT_OPTIONS = [
  { value: '"Roboto Slab", Cambria, Georgia, serif', label: 'Roboto Slab (Default)' },
  { value: '"Merriweather", Georgia, serif', label: 'Merriweather' },
  { value: '"Lora", Georgia, serif', label: 'Lora' },
  { value: '"Inter", system-ui, sans-serif', label: 'Inter' },
  { value: 'system-ui, sans-serif', label: 'System UI' },
];

function ColorPicker({ label, value, onChange }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-black">{label}</span>
      <div className="flex items-center gap-2">
        <input type="color" value={value} onChange={(e) => onChange(e.target.value)} className="h-8 w-8 cursor-pointer rounded border border-[#D4D4D4]" />
        <input type="text" value={value} onChange={(e) => onChange(e.target.value)} className="w-24 rounded border border-[#D4D4D4] px-2 py-1 text-xs font-mono text-black" />
      </div>
    </div>
  );
}

export default function ThemePage() {
  const theme = useThemeStore();
  const { updateTheme, resetTheme } = theme;
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-black" style={{ fontFamily: 'var(--font-heading)' }}>Theme Settings</h1>
          <p className="mt-1 text-sm text-[#545857]">Customize the portal appearance — changes apply instantly</p>
        </div>
        <div className="flex gap-3">
          <button onClick={resetTheme} className="flex items-center gap-2 rounded-md border border-[#D4D4D4] px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#545857] transition-colors hover:bg-[#F5F5F5]" style={{ fontFamily: 'var(--font-heading)' }}>
            <RotateCcw className="h-4 w-4" /> Reset
          </button>
          <button onClick={handleSave} className="flex items-center gap-2 rounded-md bg-[#4C7D7A] px-4 py-2 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#3D6664]" style={{ fontFamily: 'var(--font-heading)' }}>
            <Save className="h-4 w-4" /> {saved ? 'Saved!' : 'Save'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <DetailCard title="Brand Colors">
            <div className="space-y-4">
              <ColorPicker label="Gold / Accent" value={theme.colorGold} onChange={(v) => updateTheme({ colorGold: v })} />
              <ColorPicker label="Teal / Primary Action" value={theme.colorTeal} onChange={(v) => updateTheme({ colorTeal: v })} />
              <ColorPicker label="Blue / Digital Accent" value={theme.colorBlue} onChange={(v) => updateTheme({ colorBlue: v })} />
              <ColorPicker label="Purple / Secondary" value={theme.colorPurple} onChange={(v) => updateTheme({ colorPurple: v })} />
            </div>
          </DetailCard>

          <DetailCard title="Status Colors">
            <div className="space-y-4">
              <ColorPicker label="Success" value={theme.colorSuccess} onChange={(v) => updateTheme({ colorSuccess: v })} />
              <ColorPicker label="Warning" value={theme.colorWarning} onChange={(v) => updateTheme({ colorWarning: v })} />
              <ColorPicker label="Error" value={theme.colorError} onChange={(v) => updateTheme({ colorError: v })} />
              <ColorPicker label="Info" value={theme.colorInfo} onChange={(v) => updateTheme({ colorInfo: v })} />
            </div>
          </DetailCard>

          <DetailCard title="Typography">
            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#545857]" style={{ fontFamily: 'var(--font-heading)' }}>Heading Font</label>
                <select value={theme.fontHeading} onChange={(e) => updateTheme({ fontHeading: e.target.value })} className="h-10 w-full rounded-md border border-[#D4D4D4] bg-white px-3 text-sm text-black">
                  {FONT_OPTIONS.map((f) => <option key={f.value} value={f.value}>{f.label}</option>)}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#545857]" style={{ fontFamily: 'var(--font-heading)' }}>Body Font</label>
                <select value={theme.fontBody} onChange={(e) => updateTheme({ fontBody: e.target.value })} className="h-10 w-full rounded-md border border-[#D4D4D4] bg-white px-3 text-sm text-black">
                  {BODY_FONT_OPTIONS.map((f) => <option key={f.value} value={f.value}>{f.label}</option>)}
                </select>
              </div>
            </div>
          </DetailCard>

          <DetailCard title="Portal Settings">
            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#545857]" style={{ fontFamily: 'var(--font-heading)' }}>Portal Name</label>
                <input type="text" value={theme.portalName} onChange={(e) => updateTheme({ portalName: e.target.value })} className="h-10 w-full rounded-md border border-[#D4D4D4] bg-white px-3 text-sm text-black" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#545857]" style={{ fontFamily: 'var(--font-heading)' }}>Border Radius</label>
                <select value={theme.borderRadius} onChange={(e) => updateTheme({ borderRadius: e.target.value })} className="h-10 w-full rounded-md border border-[#D4D4D4] bg-white px-3 text-sm text-black">
                  <option value="4px">Sharp (4px)</option>
                  <option value="8px">Default (8px)</option>
                  <option value="12px">Rounded (12px)</option>
                  <option value="16px">Extra Rounded (16px)</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-black">Dark Mode</span>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input type="checkbox" checked={theme.darkMode} onChange={(e) => updateTheme({ darkMode: e.target.checked })} className="peer sr-only" />
                  <div className="h-6 w-11 rounded-full bg-[#D4D4D4] after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:bg-[#FFB500] peer-checked:after:translate-x-full" />
                </label>
              </div>
            </div>
          </DetailCard>
        </div>

        <div className="space-y-6">
          <DetailCard title="Live Preview">
            <div className="space-y-4 rounded-lg border border-[#D4D4D4] bg-[#F5F5F5] p-4">
              <div className="flex items-center gap-2 rounded-md bg-[var(--color-gold,#FFB500)] px-4 py-2">
                <span className="text-sm font-bold uppercase tracking-wider text-black" style={{ fontFamily: 'var(--font-heading)' }}>Navigation Bar</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <KpiCard title="Orders" value="142" trend={12} icon={ShoppingCart} />
                <KpiCard title="Revenue" value="$352k" trend={8} icon={DollarSign} />
              </div>
              <div className="flex flex-wrap gap-2">
                <StatusBadge status="Active" />
                <StatusBadge status="Pending" />
                <StatusBadge status="Shipped" />
                <StatusBadge status="Overdue" />
              </div>
              <div className="flex gap-2">
                <button className="rounded-md px-4 py-2 text-sm font-bold uppercase tracking-wider text-white transition-colors" style={{ backgroundColor: 'var(--color-teal, #4C7D7A)', fontFamily: 'var(--font-heading)' }}>Primary</button>
                <button className="rounded-md px-4 py-2 text-sm font-bold uppercase tracking-wider text-black transition-colors" style={{ backgroundColor: 'var(--color-gold, #FFB500)', fontFamily: 'var(--font-heading)' }}>Accent</button>
                <button className="rounded-md border border-[#D4D4D4] px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#545857]" style={{ fontFamily: 'var(--font-heading)' }}>Secondary</button>
              </div>
              <div>
                <h3 className="text-base font-bold text-black" style={{ fontFamily: 'var(--font-heading)' }}>Heading Preview</h3>
                <p className="text-sm text-[#545857]" style={{ fontFamily: 'var(--font-body)' }}>Body text preview — This is how your portal content will look with the selected fonts and colors.</p>
              </div>
            </div>
          </DetailCard>
        </div>
      </div>
    </div>
  );
}
