import { CATEGORIES } from '../constants';
import { monthLabel } from '../utils/format';

export default function Filters({
  months,
  monthFilter,
  categoryFilter,
  onMonthChange,
  onCategoryChange,
}) {
  return (
    <div className="filters">
      <div className="field">
        <label htmlFor="filter-month">Month</label>
        <select
          id="filter-month"
          value={monthFilter}
          onChange={(e) => onMonthChange(e.target.value)}
        >
          <option value="all">All months</option>
          {months.map((m) => (
            <option key={m} value={m}>
              {monthLabel(m)}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="filter-category">Category</label>
        <select
          id="filter-category"
          value={categoryFilter}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="all">All categories</option>
          {CATEGORIES.map((c) => (
            <option key={c.id} value={c.id}>
              {c.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
