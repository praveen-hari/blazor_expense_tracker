const currencyFormatter = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'USD',
});

export function formatCurrency(amount) {
  return currencyFormatter.format(amount || 0);
}

export function formatDate(iso) {
  if (!iso) return '';
  const date = new Date(iso);
  return date.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

// Returns a YYYY-MM key used for grouping/filtering by month.
export function monthKey(iso) {
  return iso ? iso.slice(0, 7) : '';
}

export function monthLabel(key) {
  if (!key) return '';
  const [year, month] = key.split('-');
  const date = new Date(Number(year), Number(month) - 1, 1);
  return date.toLocaleDateString(undefined, { month: 'long', year: 'numeric' });
}

export function todayISO() {
  return new Date().toISOString().slice(0, 10);
}
