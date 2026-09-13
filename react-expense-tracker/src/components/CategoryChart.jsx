import { getCategory } from '../constants';
import { formatCurrency } from '../utils/format';

// Horizontal bar breakdown of spending per category.
export default function CategoryChart({ expenses }) {
  const totals = {};
  for (const expense of expenses) {
    totals[expense.category] = (totals[expense.category] || 0) + expense.amount;
  }

  const rows = Object.entries(totals)
    .map(([id, amount]) => ({ category: getCategory(id), amount }))
    .sort((a, b) => b.amount - a.amount);

  const max = rows.length ? rows[0].amount : 0;

  if (rows.length === 0) {
    return null;
  }

  return (
    <div className="card">
      <h2>By Category</h2>
      <ul className="chart-list">
        {rows.map(({ category, amount }) => (
          <li key={category.id} className="chart-row">
            <div className="chart-row-head">
              <span className="chart-label">
                <span
                  className="category-dot"
                  style={{ backgroundColor: category.color }}
                  aria-hidden="true"
                />
                {category.label}
              </span>
              <span className="chart-amount">{formatCurrency(amount)}</span>
            </div>
            <div className="chart-track">
              <div
                className="chart-fill"
                style={{
                  width: `${max ? (amount / max) * 100 : 0}%`,
                  backgroundColor: category.color,
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
