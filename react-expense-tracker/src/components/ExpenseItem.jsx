import { getCategory } from '../constants';
import { formatCurrency, formatDate } from '../utils/format';

export default function ExpenseItem({ expense, onDelete }) {
  const category = getCategory(expense.category);

  return (
    <li className="expense-item">
      <span
        className="category-dot"
        style={{ backgroundColor: category.color }}
        aria-hidden="true"
      />
      <div className="expense-main">
        <span className="expense-desc">{expense.description}</span>
        <span className="expense-meta">
          {category.label} · {formatDate(expense.date)}
        </span>
      </div>
      <span className="expense-amount">{formatCurrency(expense.amount)}</span>
      <button
        type="button"
        className="btn-delete"
        aria-label={`Delete ${expense.description}`}
        onClick={() => onDelete(expense.id)}
      >
        &times;
      </button>
    </li>
  );
}
