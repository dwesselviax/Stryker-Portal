import { formatDate, formatDateTime } from '@/lib/utils/format';

export function DateDisplay({ date, includeTime = false, className }) {
  return (
    <span className={className}>
      {includeTime ? formatDateTime(date) : formatDate(date)}
    </span>
  );
}
