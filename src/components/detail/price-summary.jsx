import { formatCurrency } from '@/lib/utils/format';

export function PriceSummary({ pricing }) {
  if (!pricing) return null;
  return (
    <div className="rounded-lg border border-[#D4D4D4] bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-base font-bold text-black" style={{ fontFamily: 'var(--font-heading)' }}>Price Summary</h3>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-[#545857]">Subtotal</span>
          <span className="text-black">{formatCurrency(pricing.subtotal)}</span>
        </div>
        {pricing.discount > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-[#545857]">Discount</span>
            <span className="text-[#2E7D32]">-{formatCurrency(pricing.discount)}</span>
          </div>
        )}
        <div className="flex justify-between text-sm">
          <span className="text-[#545857]">Tax</span>
          <span className="text-black">{formatCurrency(pricing.tax)}</span>
        </div>
        {pricing.freight > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-[#545857]">Freight</span>
            <span className="text-black">{formatCurrency(pricing.freight)}</span>
          </div>
        )}
        <div className="border-t border-[#D4D4D4] pt-2">
          <div className="flex justify-between">
            <span className="text-base font-bold text-black" style={{ fontFamily: 'var(--font-heading)' }}>Total</span>
            <span className="text-base font-bold text-black" style={{ fontFamily: 'var(--font-heading)' }}>{formatCurrency(pricing.total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
