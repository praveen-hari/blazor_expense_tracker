import { formatCurrency } from '../utils/format';

export default function Summary({ total, count, average }) {
  return (
    <div className="summary-grid">
      <div className="card stat">
        <span className="stat-label">Total Spent</span>
        <span className="stat-value">{formatCurrency(total)}</span>
      </div>
      <div className="card stat">
        <span className="stat-label">Transactions</span>
        <span className="stat-value">{count}</span>
      </div>
      <div className="card stat">
        <span className="stat-label">Average</span>
        <span className="stat-value">{formatCurrency(average)}</span>
      </div>
    </div>
  );
}
