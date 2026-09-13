// Expense categories with an associated accent color used across the UI.
export const CATEGORIES = [
  { id: 'food', label: 'Food & Dining', color: '#f97316' },
  { id: 'transport', label: 'Transport', color: '#3b82f6' },
  { id: 'housing', label: 'Housing & Bills', color: '#8b5cf6' },
  { id: 'shopping', label: 'Shopping', color: '#ec4899' },
  { id: 'health', label: 'Health', color: '#10b981' },
  { id: 'entertainment', label: 'Entertainment', color: '#eab308' },
  { id: 'other', label: 'Other', color: '#64748b' },
];

export const CATEGORY_MAP = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c]),
);

export function getCategory(id) {
  return CATEGORY_MAP[id] ?? CATEGORY_MAP.other;
}
