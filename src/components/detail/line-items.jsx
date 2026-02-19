import { formatCurrency } from '@/lib/utils/format';

export function LineItems({ items = [] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-[#D4D4D4]">
      <table className="w-full">
        <thead>
          <tr className="bg-[#F5F5F5]">
            <th className="px-4 py-3 text-left text-[12px] font-bold uppercase tracking-wider text-[#545857]" style={{ fontFamily: 'var(--font-heading)' }}>Item</th>
            <th className="px-4 py-3 text-left text-[12px] font-bold uppercase tracking-wider text-[#545857]" style={{ fontFamily: 'var(--font-heading)' }}>SKU</th>
            <th className="px-4 py-3 text-left text-[12px] font-bold uppercase tracking-wider text-[#545857]" style={{ fontFamily: 'var(--font-heading)' }}>Product</th>
            <th className="px-4 py-3 text-right text-[12px] font-bold uppercase tracking-wider text-[#545857]" style={{ fontFamily: 'var(--font-heading)' }}>Qty</th>
            <th className="px-4 py-3 text-right text-[12px] font-bold uppercase tracking-wider text-[#545857]" style={{ fontFamily: 'var(--font-heading)' }}>Unit Price</th>
            <th className="px-4 py-3 text-right text-[12px] font-bold uppercase tracking-wider text-[#545857]" style={{ fontFamily: 'var(--font-heading)' }}>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={item.biiId || item.lineNumber || i} className="border-t border-[#D4D4D4]">
              <td className="px-4 py-3 text-sm text-black">{item.lineNumber || item.biiId || item.id}</td>
              <td className="px-4 py-3 text-sm text-black">{item.sku || item.productId || '\u2014'}</td>
              <td className="px-4 py-3 text-sm text-black">{item.productName || item.description || item.biiName || item.name}</td>
              <td className="px-4 py-3 text-right text-sm text-black">{item.quantity}</td>
              <td className="px-4 py-3 text-right text-sm text-black">{formatCurrency(item.unitPrice)}</td>
              <td className="px-4 py-3 text-right text-sm font-semibold text-black" style={{ fontFamily: 'var(--font-heading)' }}>{formatCurrency(item.lineTotal || item.total || item.unitPrice * item.quantity)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
