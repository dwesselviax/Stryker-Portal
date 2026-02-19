import { formatCurrency } from '@/lib/utils/format';

export function MoneyDisplay({ amount, currency = 'USD', className }) {
  return (
    <span className={className} style={{ fontFamily: 'var(--font-heading)' }}>
      {formatCurrency(amount, currency)}
    </span>
  );
}
